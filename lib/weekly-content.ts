export interface WeeklyContent {
  week: string
  weekStart: string
  title: string
  description: string
  linkTo: string
  gifFileName: string
}

// Retorna la semana ISO actual como "YYYY-WNN"
// La semana ISO comienza el lunes; W01 es la semana con el primer jueves del año.
export function getWeekNumber(): string {
  const now = new Date()
  // Ajustar al jueves de la misma semana ISO para obtener el año correcto
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

// Carga el metadata.json de la semana indicada desde /public/weekly-content/
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
