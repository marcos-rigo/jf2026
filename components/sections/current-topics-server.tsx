/**
 * Server Component — fetches live news from GNews (geographic waterfall)
 * or NewsAPI with ISR (revalidates every 3 days).
 *
 * Priority: Tucumán → Argentina → Latinoamérica → Internacional
 *
 * Falls back safely to FALLBACK_TOPICS when the API is unreachable,
 * returns 0 results, or NEWS_API_KEY is not set — the UI never crashes.
 */

import { CurrentTopicsSection, type Topic } from "./current-topics-section"

// ── CONFIGURATION ──────────────────────────────────────────────────────────

const REVALIDATE_SECONDS = 60 * 60 * 24 * 3 // 3 days

const GRADIENTS: string[] = [
  "from-brand-navy to-brand-blue",
  "from-brand-pink to-purple-600",
  "from-brand-blue to-cyan-500",
  "from-brand-navy to-brand-pink",
  "from-emerald-500 to-brand-blue",
]

const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

// ── HARDCODED FALLBACK (also updated by the CI script) ─────────────────────

// ── TOPICS:START ──
const FALLBACK_TOPICS: Topic[] = [
  {
    id: "participacion-digital-tucuman-2025",
    title: "Tucumán impulsa la participación ciudadana digital",
    description: "La Secretaría de Estado lidera la transformación democrática con nuevas herramientas de participación ciudadana en toda la provincia.",
    date: "15 de Abril, 2026",
    sourceName: "Secretaría de Participación Ciudadana",
    category: "Innovación Democrática",
    url: "https://josefarhat.com",
    imageUrl: null,
    gradient: "from-brand-navy to-brand-blue",
  },
  {
    id: "talleres-ciudadania-activa",
    title: "Talleres de Ciudadanía Activa en toda la provincia",
    description: "José Farhat y su equipo recorren municipios tucumanos capacitando a ciudadanos en herramientas de participación y control democrático.",
    date: "10 de Abril, 2026",
    sourceName: "Secretaría de Participación Ciudadana",
    category: "Capacitación Ciudadana",
    url: "https://josefarhat.com",
    imageUrl: null,
    gradient: "from-brand-pink to-purple-600",
  },
  {
    id: "plataforma-consultas-ciudadanas",
    title: "Nueva plataforma de consultas ciudadanas",
    description: "La Secretaría presenta una innovadora herramienta digital que permite a todos los tucumanos opinar sobre proyectos de ley y políticas públicas.",
    date: "5 de Abril, 2026",
    sourceName: "Secretaría de Participación Ciudadana",
    category: "Tecnología Cívica",
    url: "https://josefarhat.com",
    imageUrl: null,
    gradient: "from-brand-blue to-cyan-500",
  },
]
// ── TOPICS:END ──

// ── HELPERS ────────────────────────────────────────────────────────────────

function formatDateEs(isoDate: string): string {
  const d = new Date(isoDate)
  if (isNaN(d.getTime())) return isoDate
  return `${d.getDate()} de ${MONTHS_ES[d.getMonth()]}, ${d.getFullYear()}`
}

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60)
}

function truncate(s: string, max: number): string {
  const clean = (s ?? "").trim()
  return clean.length > max ? clean.slice(0, max - 1).trimEnd() + "…" : clean
}

function inferCategory(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase()
  if (/capacita|taller|formac|educa/.test(text)) return "Capacitación Ciudadana"
  if (/gobierno abierto|transparenc|datos abiertos/.test(text)) return "Gobierno Abierto"
  if (/tecnolog|plataforma|app|softw|herramienta/.test(text)) return "Tecnología Cívica"
  if (/participa|consulta|votac|referend/.test(text)) return "Participación Digital"
  return "Innovación Democrática"
}

// ── GNEWS — GEOGRAPHIC WATERFALL ───────────────────────────────────────────
//
// Topic terms are progressively broader. Geo scope narrows the query by
// appending a geo token (GNews treats "A OR B geoTerm" as
// "(A OR B) AND geoTerm" in practice). The last tier has no geo restriction
// and always returns results, ensuring the waterfall never returns 0 items.

interface GNewsArticle {
  title: string
  description: string
  url: string
  image: string | null
  publishedAt: string
  source: { name: string; url: string }
}

// TOPIC_TERMS simplificado para compatible con GNews free tier
// Términos amplios pero relacionados con ciudadanía digital, sin frases complejas
const TOPIC_TERMS = 'ciudadanía OR democracia OR participación OR gobierno OR tecnología'

const GEO_TIERS = [
  { label: "Tucumán",       geoTerms: "Tucumán" },
  { label: "Argentina",     geoTerms: "Argentina" },
  {
    label: "Latinoamérica",
    geoTerms: "Chile OR Colombia OR México OR Brasil",
  },
  { label: "Internacional", geoTerms: null }, // sin restricción geo — DEBE traer resultados
] as const

function buildGNewsUrl(apiKey: string, geoTerms: string | null): string {
  // Para Internacional, usa solo los términos base (más amplio)
  // Para otras regiones, combina con términos geo
  const query = geoTerms ? `${TOPIC_TERMS} ${geoTerms}` : TOPIC_TERMS
  // Aumentar max a 50 para tener más opciones en each tier
  return (
    `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}` +
    `&lang=es&max=50&sortby=publishedAt&token=${apiKey}`
  )
}

async function fetchGNewsTier(
  apiKey: string,
  tier: (typeof GEO_TIERS)[number]
): Promise<GNewsArticle[]> {
  try {
    const url = buildGNewsUrl(apiKey, tier.geoTerms)
    console.log(`[GNews] Fetching tier "${tier.label}"...`)
    
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.warn(`[GNews] Tier "${tier.label}": HTTP ${res.status}`)
      console.warn(`[GNews] Response:`, errorText.slice(0, 200))
      return []
    }

    const data = (await res.json()) as { articles?: GNewsArticle[]; totalArticles?: number }
    const articles = (data.articles ?? []).filter((a) => a.url && a.title)
    console.log(`[GNews] Tier "${tier.label}": ${articles.length} article(s) from ${data.totalArticles ?? "?"} total`)
    return articles
  } catch (err) {
    console.warn(`[GNews] Tier "${tier.label}" failed:`, err instanceof Error ? err.message : String(err))
    return []
  }
}

function mapGNewsArticle(a: GNewsArticle, idx: number): Topic {
  return {
    id: toSlug(a.title) || `gnews-${idx}`,
    title: truncate(a.title, 80),
    description: truncate(a.description, 200),
    date: formatDateEs(a.publishedAt),
    sourceName: a.source.name,
    category: inferCategory(a.title, a.description),
    url: a.url,
    imageUrl: a.image ?? null,
    gradient: GRADIENTS[idx % GRADIENTS.length],
  }
}

async function fetchFromGNewsWaterfall(apiKey: string): Promise<Topic[]> {
  const collected: GNewsArticle[] = []
  const seenUrls = new Set<string>()
  const NEED = 3

  try {
    console.log(`[GNews] Starting waterfall search with terms: "${TOPIC_TERMS}"`)
    
    for (const tier of GEO_TIERS) {
      if (collected.length >= NEED) break

      try {
        const articles = await fetchGNewsTier(apiKey, tier)

        for (const article of articles) {
          if (collected.length >= NEED) break
          if (!seenUrls.has(article.url)) {
            seenUrls.add(article.url)
            collected.push(article)
            console.log(`[GNews] Added article from "${tier.label}": "${article.title.slice(0, 50)}..."`)
          }
        }
      } catch (tierErr) {
        console.warn(`[GNews] Tier "${tier.label}" error, continuing:`, tierErr instanceof Error ? tierErr.message : String(tierErr))
        continue
      }
    }

    if (collected.length === 0) {
      console.error("[GNews] ❌ Waterfall returned 0 articles across all tiers — API may be rate-limited or query too restrictive")
      console.error(`[GNews] Query terms: ${TOPIC_TERMS}`)
      return []
    }

    console.log(`[GNews] ✅ Waterfall collected ${collected.length} article(s) successfully`)
    return collected.map(mapGNewsArticle)
  } catch (err) {
    console.error("[GNews] Waterfall fatal error:", err instanceof Error ? err.message : String(err))
    return []
  }
}

// ── NEWSAPI PROVIDER ───────────────────────────────────────────────────────

interface NewsAPIArticle {
  source: { name: string }
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
}

async function fetchFromNewsAPI(apiKey: string): Promise<Topic[]> {
  const query = encodeURIComponent(
    '"ciudadanía digital" OR "participación ciudadana" OR "democracia digital" OR "gobierno abierto"'
  )
  const url =
    `https://newsapi.org/v2/everything?q=${query}` +
    `&language=es&pageSize=10&sortBy=publishedAt&apiKey=${apiKey}`

  const res = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(8000),
  })

  if (!res.ok) {
    throw new Error(`NewsAPI error ${res.status}: ${await res.text()}`)
  }

  const data = (await res.json()) as { status: string; articles: NewsAPIArticle[] }
  if (data.status !== "ok") throw new Error(`NewsAPI status: ${data.status}`)

  const articles = (data.articles ?? []).filter(
    (a) => a.title !== "[Removed]" && a.url
  )

  return articles.slice(0, 3).map((a, idx) => ({
    id: toSlug(a.title) || `newsapi-${idx}`,
    title: truncate(a.title, 80),
    description: truncate(a.description ?? a.title, 200),
    date: formatDateEs(a.publishedAt),
    sourceName: a.source.name,
    category: inferCategory(a.title, a.description ?? ""),
    url: a.url,
    imageUrl: a.urlToImage ?? null,
    gradient: GRADIENTS[idx % GRADIENTS.length],
  }))
}

// ── FETCH ORCHESTRATOR ─────────────────────────────────────────────────────

async function loadTopics(): Promise<Topic[]> {
  const apiKey = process.env.NEWS_API_KEY
  const provider = (process.env.NEWS_API_PROVIDER ?? "gnews").toLowerCase()

  if (!apiKey) {
    console.warn("[current-topics] NEWS_API_KEY not set — using fallback")
    return FALLBACK_TOPICS
  }

  try {
    const fetched =
      provider === "newsapi"
        ? await fetchFromNewsAPI(apiKey)
        : await fetchFromGNewsWaterfall(apiKey)

    if (!Array.isArray(fetched) || fetched.length === 0) {
      console.warn(`[current-topics] Provider "${provider}" returned ${fetched?.length ?? 0} articles — using fallback`)
      return FALLBACK_TOPICS
    }

    // Pad to 3 with fallback items when the API returns fewer
    const result = [...fetched]
    while (result.length < 3) {
      const filler = FALLBACK_TOPICS[result.length % FALLBACK_TOPICS.length]
      result.push({ ...filler, gradient: GRADIENTS[result.length % GRADIENTS.length] })
    }

    console.log(`[current-topics] Successfully loaded ${result.length} topics`)
    return result.slice(0, 3)
  } catch (err) {
    console.error("[current-topics] Unexpected error during fetch:", err)
    console.warn("[current-topics] Using fallback topics")
    return FALLBACK_TOPICS
  }
}

// ── SERVER COMPONENT ───────────────────────────────────────────────────────

export async function CurrentTopicsServer() {
  const topics = await loadTopics()
  return <CurrentTopicsSection topics={topics} />
}
