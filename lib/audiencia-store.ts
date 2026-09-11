'use client'

// Store global del filtro de audiencia — separado a propósito de
// lib/ciudadania/app-store.ts (ese es auth/progreso de la plataforma
// Ciudadanía Presente, esto es una selección de UI sin relación con login).
// Persiste en localStorage para sobrevivir a la navegación entre /tematicas
// y una temática individual. Ver investigación "contenido con variantes por
// audiencia" para el porqué de cada decisión de este archivo.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AUDIENCIAS_ORDENADAS, type Audiencia } from './audiencias'

interface AudienciaStore {
  audienciaActual: Audiencia | null
  setAudiencia: (audiencia: Audiencia | null) => void
}

export const useAudienciaStore = create<AudienciaStore>()(
  persist(
    (set) => ({
      audienciaActual: null,
      setAudiencia: (audiencia) => set({ audienciaActual: audiencia }),
    }),
    { name: 'audiencia-filtro-state' }
  )
)

function isAudiencia(value: string): value is Audiencia {
  return (AUDIENCIAS_ORDENADAS as readonly string[]).includes(value)
}

/**
 * Sincroniza el store con el query param `?audiencia=` al montar. Si el
 * param está presente y es un valor válido de `Audiencia`, gana y
 * sobrescribe lo persistido — así un link compartido (`/tematicas/x?audiencia=familias`)
 * queda autocontenido. Si no hay query param, se deja lo que ya esté
 * persistido en localStorage; si tampoco hay nada persistido, `null`.
 *
 * Requiere un `<Suspense>` en el árbol (usa `useSearchParams`) — ya agregado
 * en los page.tsx que renderizan componentes que llaman a este hook.
 */
export function useSyncAudienciaFromQuery() {
  const searchParams = useSearchParams()
  const setAudiencia = useAudienciaStore((s) => s.setAudiencia)

  useEffect(() => {
    const param = searchParams.get('audiencia')
    if (param && isAudiencia(param)) {
      setAudiencia(param)
    }
  }, [searchParams, setAudiencia])
}
