export interface WeeklyContent {
  // Required fields
  title: string
  description: string
  gifFileName: string

  // CTA — use ctaLink/ctaText for new content; linkTo is kept for backward compat
  ctaLink?: string
  ctaText?: string
  /** @deprecated Use ctaLink instead */
  linkTo?: string

  // Legacy metadata stored in some JSONs (not required)
  week?: string
  weekStart?: string

  // Optional enrichment fields
  theme?: "blue" | "pink" | "navy"
  priority?: "high" | "normal" | "low"
  targetAudience?: string[]
  expiresAt?: string
  author?: string
  createdAt?: string
}

// Retorna la semana ISO actual como "YYYY-WNN"
// La semana ISO comienza el lunes; W01 es la semana con el primer jueves del año.
export function getWeekNumber(): string {
  const now = new Date()
  const thursday = new Date(now)
  thursday.setDate(now.getDate() + (4 - (now.getDay() || 7)))
  const yearStart = new Date(thursday.getFullYear(), 0, 1)
  const weekNum = Math.ceil(
    ((thursday.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  )
  const year = thursday.getFullYear()
  const paddedWeek = String(weekNum).padStart(2, "0")
  return `${year}-W${paddedWeek}`
}

export async function getWeeklyContent(
  week: string
): Promise<WeeklyContent | null> {
  try {
    const res = await fetch(`/weekly-content/${week}/metadata.json`, {
      cache: "no-store",
    })
    if (!res.ok) return null
    const data: WeeklyContent = await res.json()
    return data
  } catch (err) {
    console.error("[WeeklyModal] No se pudo cargar el contenido de la semana:", err)
    return null
  }
}

// Returns sorted list of all weeks in manifest.json
export async function getAvailableWeeks(): Promise<string[]> {
  try {
    const res = await fetch("/weekly-content/manifest.json", { cache: "no-store" })
    if (!res.ok) return []
    const data: unknown = await res.json()
    return Array.isArray(data) ? [...data].sort() : []
  } catch {
    return []
  }
}

// Returns the next `count` upcoming weeks that have content
export async function getUpcomingWeeks(count = 3): Promise<WeeklyContent[]> {
  const currentWeek = getWeekNumber()
  const all = await getAvailableWeeks()
  const upcoming = all.filter((w) => w >= currentWeek).slice(0, count)
  const results = await Promise.all(upcoming.map((w) => getWeeklyContent(w)))
  return results.filter((c): c is WeeklyContent => c !== null)
}

const STORAGE_PREFIX = "weeklyModal_"

export function hasSeenWeeklyModal(week: string): boolean {
  if (typeof window === "undefined") return false
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${week}`) === "seen"
  } catch {
    return false
  }
}

export function markWeeklyModalAsSeen(week: string): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${week}`, "seen")
  } catch {
    // localStorage puede estar bloqueado en modo privado extremo
  }
}
