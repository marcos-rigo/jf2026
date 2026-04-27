/**
 * scripts/update-topics.ts
 *
 * Fetches 3 recent news items about digital citizenship / civic tech using
 * Claude claude-sonnet-4-6 with the built-in web_search tool, then:
 *   1. Validates the data against the Topic schema
 *   2. Patches components/sections/current-topics-server.tsx in-place (FALLBACK_TOPICS)
 *   3. Writes a JSON backup to public/data/current-topics.json
 *
 * Run: npm run update-topics
 * Requires: ANTHROPIC_API_KEY env var
 */

import dotenv from "dotenv"
import Anthropic from "@anthropic-ai/sdk"
import fs from "node:fs"
import path from "node:path"

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" })

// ── TYPES ──────────────────────────────────────────────────────────────────

const VALID_CATEGORIES = [
  "Innovación Democrática",
  "Capacitación Ciudadana",
  "Tecnología Cívica",
  "Gobierno Abierto",
  "Participación Digital",
] as const

const VALID_GRADIENTS = [
  "from-brand-navy to-brand-blue",
  "from-brand-pink to-purple-600",
  "from-brand-blue to-cyan-500",
  "from-brand-navy to-brand-pink",
  "from-emerald-500 to-brand-blue",
] as const

type Category = (typeof VALID_CATEGORIES)[number]
type Gradient = (typeof VALID_GRADIENTS)[number]

interface Topic {
  id: string
  title: string
  description: string
  date: string
  location: string
  category: Category
  sourceUrl: string
  gradient: Gradient
}

// ── PATHS ──────────────────────────────────────────────────────────────────

const ROOT = path.resolve(process.cwd())
const COMPONENT_PATH = path.join(ROOT, "components/sections/current-topics-server.tsx")
const JSON_BACKUP_PATH = path.join(ROOT, "public/data/current-topics.json")
const START_MARKER = "// ── TOPICS:START ──"
const END_MARKER = "// ── TOPICS:END ──"

// ── LOGGING ────────────────────────────────────────────────────────────────

function log(msg: string): void {
  console.log(`[${new Date().toISOString()}] ${msg}`)
}

function logStep(step: number, total: number, label: string): void {
  console.log(`\n[${new Date().toISOString()}] ── STEP ${step}/${total}: ${label}`)
}

// ── VALIDATION ─────────────────────────────────────────────────────────────

function escapeStr(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1).trimEnd() + "…" : s
}

function validateTopic(raw: unknown, idx: number): Topic {
  if (!raw || typeof raw !== "object") {
    throw new Error(`Topic[${idx}] is not an object`)
  }

  const t = raw as Record<string, unknown>

  const id = String(t.id ?? "").trim()
  if (!id || !/^[a-z0-9-]+$/.test(id)) {
    throw new Error(`Topic[${idx}]: id must be kebab-case, got "${t.id}"`)
  }

  const title = truncate(String(t.title ?? "").trim(), 80)
  if (!title) throw new Error(`Topic[${idx}]: missing title`)

  const description = truncate(String(t.description ?? "").trim(), 200)
  if (!description) throw new Error(`Topic[${idx}]: missing description`)

  const date = String(t.date ?? "").trim()
  if (!date) throw new Error(`Topic[${idx}]: missing date`)

  const location = String(t.location ?? "").trim()
  if (!location) throw new Error(`Topic[${idx}]: missing location`)

  const category = String(t.category ?? "").trim()
  if (!(VALID_CATEGORIES as readonly string[]).includes(category)) {
    throw new Error(
      `Topic[${idx}]: invalid category "${category}". ` +
        `Valid: ${VALID_CATEGORIES.join(", ")}`
    )
  }

  const sourceUrl = String(t.sourceUrl ?? "").trim()
  if (!sourceUrl.startsWith("http")) {
    throw new Error(`Topic[${idx}]: invalid sourceUrl "${sourceUrl}"`)
  }

  const gradient = String(t.gradient ?? "").trim()
  if (!(VALID_GRADIENTS as readonly string[]).includes(gradient)) {
    throw new Error(
      `Topic[${idx}]: invalid gradient "${gradient}". ` +
        `Valid: ${VALID_GRADIENTS.join(", ")}`
    )
  }

  return { id, title, description, date, location, category: category as Category, sourceUrl, gradient: gradient as Gradient }
}

// ── JSON EXTRACTION ────────────────────────────────────────────────────────

function extractTopicsJson(text: string): unknown[] {
  // Primary: look for explicit <TOPICS_JSON>...</TOPICS_JSON> block
  const tagMatch = text.match(/<TOPICS_JSON>([\s\S]*?)<\/TOPICS_JSON>/)
  if (tagMatch) {
    const parsed: unknown = JSON.parse(tagMatch[1].trim())
    if (Array.isArray(parsed)) return parsed
  }

  // Fallback: find a JSON array in the text (first one with objects)
  const arrayMatch = text.match(/(\[\s*\{[\s\S]*?\}\s*\])/)
  if (arrayMatch) {
    const parsed: unknown = JSON.parse(arrayMatch[1])
    if (Array.isArray(parsed)) return parsed
  }

  throw new Error(
    "Could not find a valid JSON array in Claude's response.\n" +
      "Response preview:\n" +
      text.slice(0, 500)
  )
}

// ── CLAUDE API CALL ────────────────────────────────────────────────────────

async function fetchTopicsFromClaude(client: Anthropic): Promise<Topic[]> {
  const todayEs = new Date().toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  })

  const prompt = `Hoy es ${todayEs}.

Busca en internet las 3 noticias más recientes y relevantes (idealmente de los últimos 7 días) relacionadas con:

- Ciudadanía digital y gobierno digital
- Participación ciudadana e innovación democrática
- Democracia digital y plataformas cívicas
- Gobierno abierto y transparencia pública
- Tecnología cívica (civic tech)

PRIORIDAD GEOGRÁFICA: Argentina primero → Latinoamérica → Global

Para cada noticia genera la metadata en español siguiendo EXACTAMENTE este esquema:
• id: slug kebab-case único (ej: "argentina-plataforma-voto-digital-2026")
• title: título en español, MÁXIMO 80 caracteres
• description: resumen en español, MÁXIMO 200 caracteres
• date: fecha en formato "DD de Mes, YYYY" en español (ej: "23 de Abril, 2026")
• location: ciudad y/o país (ej: "Buenos Aires, Argentina")
• category: EXACTAMENTE una de estas opciones (sin variantes):
  - "Innovación Democrática"
  - "Capacitación Ciudadana"
  - "Tecnología Cívica"
  - "Gobierno Abierto"
  - "Participación Digital"
• sourceUrl: URL exacta y completa de la noticia original
• gradient: EXACTAMENTE uno de estos (distribuí los 3 valores distintos):
  - "from-brand-navy to-brand-blue"
  - "from-brand-pink to-purple-600"
  - "from-brand-blue to-cyan-500"
  - "from-brand-navy to-brand-pink"
  - "from-emerald-500 to-brand-blue"

Reglas:
- SIEMPRE devuelve exactamente 3 noticias
- Títulos y descripciones en español
- Los 3 gradientes deben ser DISTINTOS entre sí
- Si no encontrás noticias muy recientes, usá las más recientes disponibles

Al terminar tu análisis, incluí OBLIGATORIAMENTE el JSON en este formato exacto:

<TOPICS_JSON>
[
  {
    "id": "...",
    "title": "...",
    "description": "...",
    "date": "...",
    "location": "...",
    "category": "...",
    "sourceUrl": "...",
    "gradient": "..."
  },
  {
    "id": "...",
    "title": "...",
    "description": "...",
    "date": "...",
    "location": "...",
    "category": "...",
    "sourceUrl": "...",
    "gradient": "..."
  },
  {
    "id": "...",
    "title": "...",
    "description": "...",
    "date": "...",
    "location": "...",
    "category": "...",
    "sourceUrl": "...",
    "gradient": "..."
  }
]
</TOPICS_JSON>`

  log("Calling Claude claude-sonnet-4-6 with web_search tool…")

  const messages: Anthropic.MessageParam[] = [
    { role: "user", content: prompt },
  ]

  let fullText = ""
  const MAX_ITERATIONS = 12

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    log(`  API call #${i + 1}…`)

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      tools: [
        {
          type: "web_search_20250305",
          name: "web_search",
        } as Anthropic.Tool,
      ],
      messages,
    })

    log(`  stop_reason=${response.stop_reason}  blocks=${response.content.length}`)

    // Collect text blocks from this turn
    for (const block of response.content) {
      if (block.type === "text") {
        fullText += block.text
      }
    }

    if (response.stop_reason === "end_turn") {
      log("  Claude finished.")
      break
    }

    if (response.stop_reason === "tool_use") {
      // Add assistant turn so Claude has context
      messages.push({ role: "assistant", content: response.content })

      // Build tool_result blocks for each tool_use block
      const toolResults: Anthropic.ToolResultBlockParam[] = []
      for (const block of response.content) {
        if (block.type === "tool_use") {
          const query = (block.input as { query?: string }).query ?? "(unknown)"
          log(`  🔍 Web search: "${query}"`)
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: "Search executed. Please use results to generate the topics JSON.",
          })
        }
      }

      if (toolResults.length > 0) {
        messages.push({ role: "user", content: toolResults })
      }
      continue
    }

    // max_tokens or stop_sequence — exit gracefully
    log(`  Unexpected stop reason: ${response.stop_reason}`)
    break
  }

  if (!fullText.trim()) {
    throw new Error("Claude returned no text content after all iterations")
  }

  log(`Claude response: ${fullText.length} chars`)

  const rawTopics = extractTopicsJson(fullText)
  log(`Extracted ${rawTopics.length} raw topic(s) from response`)

  return rawTopics
    .slice(0, 3)
    .map((t, idx) => validateTopic(t, idx + 1))
}

// ── COMPONENT UPDATE ───────────────────────────────────────────────────────

function buildTopicsTs(topics: Topic[]): string {
  const entries = topics
    .map((t) => {
      return (
        `  {\n` +
        `    id: "${escapeStr(t.id)}",\n` +
        `    title: "${escapeStr(t.title)}",\n` +
        `    description: "${escapeStr(t.description)}",\n` +
        `    date: "${escapeStr(t.date)}",\n` +
        `    location: "${escapeStr(t.location)}",\n` +
        `    category: "${escapeStr(t.category)}",\n` +
        `    sourceUrl: "${escapeStr(t.sourceUrl)}",\n` +
        `    gradient: "${escapeStr(t.gradient)}",\n` +
        `  }`
      )
    })
    .join(",\n")

  return `const currentTopics: Topic[] = [\n${entries},\n]`
}

function updateComponent(topics: Topic[]): void {
  if (!fs.existsSync(COMPONENT_PATH)) {
    throw new Error(`Component not found: ${COMPONENT_PATH}`)
  }

  const original = fs.readFileSync(COMPONENT_PATH, "utf-8")

  if (!original.includes(START_MARKER)) {
    throw new Error(
      `Marker "${START_MARKER}" not found in component.\n` +
        "Did the component file change? Add the marker manually."
    )
  }
  if (!original.includes(END_MARKER)) {
    throw new Error(`Marker "${END_MARKER}" not found in component.`)
  }

  const startIdx = original.indexOf(START_MARKER)
  const endIdx = original.indexOf(END_MARKER) + END_MARKER.length

  const before = original.slice(0, startIdx)
  const after = original.slice(endIdx)

  const newBlock = [START_MARKER, buildTopicsTs(topics), END_MARKER].join("\n")
  const updated = before + newBlock + after

  fs.writeFileSync(COMPONENT_PATH, updated, "utf-8")
  log(`Component updated: ${COMPONENT_PATH}`)
}

// ── JSON BACKUP ────────────────────────────────────────────────────────────

function writeJsonBackup(topics: Topic[]): void {
  const dir = path.dirname(JSON_BACKUP_PATH)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    log(`Created directory: ${dir}`)
  }

  fs.writeFileSync(
    JSON_BACKUP_PATH,
    JSON.stringify({ updatedAt: new Date().toISOString(), topics }, null, 2) + "\n",
    "utf-8"
  )
  log(`JSON backup written: ${JSON_BACKUP_PATH}`)
}

// ── MAIN ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log("\n══════════════════════════════════════════════════")
  console.log("  José Farhat — Current Topics Updater")
  console.log("══════════════════════════════════════════════════\n")

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY environment variable is not set")
  }

  const client = new Anthropic({ apiKey })

  // ── Step 1: Fetch ──────────────────────────────────────────────────────
  logStep(1, 3, "Fetch topics from Claude (web_search)")
  const topics = await fetchTopicsFromClaude(client)

  console.log("\n  Topics found:")
  topics.forEach((t, i) => {
    console.log(`  ${i + 1}. [${t.category}] ${t.title}`)
    console.log(`     📍 ${t.location}`)
    console.log(`     🔗 ${t.sourceUrl}`)
  })

  // ── Step 2: Update component ───────────────────────────────────────────
  logStep(2, 3, "Update component file")
  updateComponent(topics)

  // ── Step 3: Write JSON backup ──────────────────────────────────────────
  logStep(3, 3, "Write JSON backup")
  writeJsonBackup(topics)

  console.log("\n✅ Done — current topics updated successfully.\n")
}

main().catch((err: unknown) => {
  console.error("\n❌ Fatal error:", err instanceof Error ? err.message : err)
  process.exit(1)
})
