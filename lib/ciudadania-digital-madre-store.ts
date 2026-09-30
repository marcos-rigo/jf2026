'use client'

// Estado local de /ciudadania-digital (autodiagnóstico, gancho, quiz, desafío del aula, Poliedro).
// Aislado a propósito de lib/ciudadania/app-store.ts (auth/progreso de la plataforma) y de
// lib/audiencia-store.ts (filtro de audiencia): mismo patrón que este último — persist a
// localStorage, sin backend.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const QUIZ_LENGTH = 4

export const POLIEDRO_DIMENSIONES = [
  'instrumental',
  'cognitivo',
  'socio-comunicacional',
  'emocional',
  'salud-bienestar',
  'etico-normativa',
  'seguridad',
  'pedagogica-creativa',
  'participacion',
  'economica',
] as const

export type PoliedroDimension = (typeof POLIEDRO_DIMENSIONES)[number]
export type PoliedroEstadoValor = 'activa' | 'latente' | 'ausente'
export interface PoliedroEntrada {
  estado: PoliedroEstadoValor | null
  ejemplo: string
}

export interface DesafioAula {
  situacionElegida: string
  faseComprender: string
  faseDescomponer: string
  faseDecidir: string
  faseRevisar: string
  accionSemana: string
}

interface MadreState {
  // Autodiagnóstico inicial
  familiaridad: string
  definicionPropia: string
  // Respuesta al gancho (caso del chat de familias)
  respuestaGancho: string
  // Quiz: opción elegida por pregunta, null si no respondió
  respuestasQuiz: (string | null)[]
  desafioAula: DesafioAula
  // Paso 3 del desafío: qué cambió respecto de la respuesta al gancho
  reflexionGancho: string
  // Sección de cierre: comparación con el autodiagnóstico
  cierreDefinicion: string
  cierreDimensionNueva: string
  poliedroEstado: Record<PoliedroDimension, PoliedroEntrada>
}

interface MadreStore extends MadreState {
  setAutodiagnostico: (campo: 'familiaridad' | 'definicionPropia', valor: string) => void
  setRespuestaGancho: (valor: string) => void
  setRespuestaQuiz: (index: number, valor: string | null) => void
  setReflexionGancho: (valor: string) => void
  setCierre: (campo: 'cierreDefinicion' | 'cierreDimensionNueva', valor: string) => void
  setDesafioAula: (campo: keyof DesafioAula, valor: string) => void
  setPoliedroEstado: <C extends keyof PoliedroEntrada>(
    dimension: PoliedroDimension,
    campo: C,
    valor: PoliedroEntrada[C]
  ) => void
}

const desafioInicial: DesafioAula = {
  situacionElegida: '',
  faseComprender: '',
  faseDescomponer: '',
  faseDecidir: '',
  faseRevisar: '',
  accionSemana: '',
}

const poliedroInicial = Object.fromEntries(
  POLIEDRO_DIMENSIONES.map((d) => [d, { estado: null, ejemplo: '' }])
) as Record<PoliedroDimension, PoliedroEntrada>

export const useCiudadaniaMadreStore = create<MadreStore>()(
  persist(
    (set) => ({
      familiaridad: '',
      definicionPropia: '',
      respuestaGancho: '',
      respuestasQuiz: Array<string | null>(QUIZ_LENGTH).fill(null),
      desafioAula: desafioInicial,
      reflexionGancho: '',
      cierreDefinicion: '',
      cierreDimensionNueva: '',
      poliedroEstado: poliedroInicial,

      setAutodiagnostico: (campo, valor) => set({ [campo]: valor }),
      setRespuestaGancho: (valor) => set({ respuestaGancho: valor }),
      setRespuestaQuiz: (index, valor) =>
        set((s) => {
          if (index < 0 || index >= QUIZ_LENGTH) return s
          const respuestasQuiz = [...s.respuestasQuiz]
          respuestasQuiz[index] = valor
          return { respuestasQuiz }
        }),
      setReflexionGancho: (valor) => set({ reflexionGancho: valor }),
      setCierre: (campo, valor) => set({ [campo]: valor }),
      setDesafioAula: (campo, valor) => set((s) => ({ desafioAula: { ...s.desafioAula, [campo]: valor } })),
      setPoliedroEstado: (dimension, campo, valor) =>
        set((s) => ({
          poliedroEstado: {
            ...s.poliedroEstado,
            [dimension]: { ...s.poliedroEstado[dimension], [campo]: valor },
          },
        })),
    }),
    {
      name: 'ciudadania-madre-state',
      // Merge defensivo: el estado persistido puede venir de una versión anterior (otras claves de
      // dimensión, campos nuevos). Se parte siempre de los defaults y solo se pisa lo conocido.
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<MadreState>
        const poliedroEstado = { ...current.poliedroEstado }
        for (const d of POLIEDRO_DIMENSIONES) {
          if (p.poliedroEstado?.[d]) poliedroEstado[d] = { ...poliedroEstado[d], ...p.poliedroEstado[d] }
        }
        return {
          ...current,
          ...p,
          desafioAula: { ...current.desafioAula, ...p.desafioAula },
          respuestasQuiz: Array.from({ length: QUIZ_LENGTH }, (_, i) => p.respuestasQuiz?.[i] ?? null),
          poliedroEstado,
        }
      },
    }
  )
)
