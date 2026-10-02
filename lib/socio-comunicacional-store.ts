'use client'

// Estado local de /tematicas/socio-comunicacional-e-identidad (gancho, situaciones,
// error doble, quiz, aula, cierre). Aislado a propósito de lib/instrumental-acceso-store.ts,
// lib/cognitivo-informacional-store.ts, lib/ciudadania-digital-madre-store.ts,
// lib/ciudadania/app-store.ts y lib/audiencia-store.ts: mismo patrón que esos —
// persist a localStorage, sin backend.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const QUIZ_LENGTH = 4

export type EleccionSituacion = 'audiencia' | 'persistencia' | 'circulacion' | null

export interface SituacionEntrada {
  eleccion: EleccionSituacion
  revelada: boolean
}

export const SITUACION_CLAVES = ['s1', 's2', 's3'] as const
export type SituacionClave = (typeof SITUACION_CLAVES)[number]

interface SocioComunicacionalState {
  respuestaGancho: string
  situaciones: Record<SituacionClave, SituacionEntrada>
  errorRevelado: boolean
  respuestasQuiz: (string | null)[]
  reflexionAula: string
  explicacionFinal: string
}

interface SocioComunicacionalStore extends SocioComunicacionalState {
  setRespuestaGancho: (valor: string) => void
  setEleccionSituacion: (clave: SituacionClave, valor: EleccionSituacion) => void
  revelarSituacion: (clave: SituacionClave) => void
  revelarError: () => void
  setRespuestaQuiz: (index: number, valor: string | null) => void
  setReflexionAula: (valor: string) => void
  setExplicacionFinal: (valor: string) => void
}

const situacionesIniciales: Record<SituacionClave, SituacionEntrada> = {
  s1: { eleccion: null, revelada: false },
  s2: { eleccion: null, revelada: false },
  s3: { eleccion: null, revelada: false },
}

export const useSocioComunicacionalStore = create<SocioComunicacionalStore>()(
  persist(
    (set) => ({
      respuestaGancho: '',
      situaciones: situacionesIniciales,
      errorRevelado: false,
      respuestasQuiz: Array<string | null>(QUIZ_LENGTH).fill(null),
      reflexionAula: '',
      explicacionFinal: '',

      setRespuestaGancho: (valor) => set({ respuestaGancho: valor }),
      setEleccionSituacion: (clave, valor) =>
        set((s) => ({
          situaciones: { ...s.situaciones, [clave]: { ...s.situaciones[clave], eleccion: valor } },
        })),
      revelarSituacion: (clave) =>
        set((s) => ({
          situaciones: { ...s.situaciones, [clave]: { ...s.situaciones[clave], revelada: true } },
        })),
      revelarError: () => set({ errorRevelado: true }),
      setRespuestaQuiz: (index, valor) =>
        set((s) => {
          if (index < 0 || index >= QUIZ_LENGTH) return s
          const respuestasQuiz = [...s.respuestasQuiz]
          respuestasQuiz[index] = valor
          return { respuestasQuiz }
        }),
      setReflexionAula: (valor) => set({ reflexionAula: valor }),
      setExplicacionFinal: (valor) => set({ explicacionFinal: valor }),
    }),
    {
      name: 'socio-comunicacional-state',
      // Merge defensivo: el estado persistido puede venir de una versión anterior
      // (claves de situación distintas, campos faltantes). Se parte siempre de los
      // defaults y solo se pisa lo conocido (mismo patrón que cognitivo-informacional-store.ts).
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<SocioComunicacionalState>
        const situaciones = { ...current.situaciones }
        for (const clave of SITUACION_CLAVES) {
          if (p.situaciones?.[clave]) situaciones[clave] = { ...situaciones[clave], ...p.situaciones[clave] }
        }
        return {
          ...current,
          ...p,
          situaciones,
          respuestasQuiz: Array.from({ length: QUIZ_LENGTH }, (_, i) => p.respuestasQuiz?.[i] ?? null),
        }
      },
    }
  )
)
