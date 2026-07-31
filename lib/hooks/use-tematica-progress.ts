'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export interface ComputedProgress {
  porcentaje: number
  // Ignorado por el hook a propósito: `completada` solo se setea a través de
  // markCompleted() (botón explícito "Marcar como completada"). Resolver el
  // quiz/checklist entero ya no alcanza para marcar la temática como
  // terminada ni para desbloquear la siguiente del módulo.
  completada: boolean
}

export interface UseTematicaProgressOptions {
  tematicaId: string
  userId: number | null | undefined
  // Cada página sabe cómo pesar su propio contenido (cuántos quizzes/checklists
  // tiene y cuánto vale cada uno) — el hook no asume una estructura fija.
  computeProgress?: (detalle: Record<string, unknown>) => ComputedProgress
}

interface FlushPayload {
  detalle?: Record<string, unknown>
  porcentaje?: number
  completada?: boolean
}

const DEBOUNCE_MS = 900

// Helper para páginas con un único checklist marcable: porcentaje = ítems
// tildados / total. El campo `completada` que devuelve se ignora (ver
// ComputedProgress) — tildar todos los ítems ya no marca la temática como
// terminada, hace falta el botón "Marcar como completada".
export function checklistProgress(checklistId: string, total: number) {
  return (detalle: Record<string, unknown>): ComputedProgress => {
    const items = Array.isArray(detalle[checklistId]) ? (detalle[checklistId] as string[]) : []
    const porcentaje = total > 0 ? Math.round((items.length / total) * 100) : 0
    return { porcentaje, completada: total > 0 && items.length >= total }
  }
}

export function useTematicaProgress({ tematicaId, userId, computeProgress }: UseTematicaProgressOptions) {
  const [detalle, setDetalle] = useState<Record<string, unknown>>({})
  const [completada, setCompletada] = useState(false)
  const [porcentaje, setPorcentaje] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const pendingRef = useRef<FlushPayload>({})
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Carga el progreso guardado al montar, para poder continuar donde quedó.
  useEffect(() => {
    let cancelled = false
    if (!userId) { setLoaded(true); return }

    fetch(`/api/ciudadania/progreso-tematicas?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        const propia = (data.progreso ?? []).find((p: { tematicaId: string }) => p.tematicaId === tematicaId)
        if (propia) {
          setDetalle(propia.detalle ?? {})
          setCompletada(!!propia.completada)
          setPorcentaje(propia.porcentaje ?? 0)
        }
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoaded(true) })

    return () => { cancelled = true }
  }, [userId, tematicaId])

  const flush = useCallback(() => {
    if (!userId) return
    const payload = pendingRef.current
    if (Object.keys(payload).length === 0) return
    pendingRef.current = {}

    const body = JSON.stringify({ userId, tematicaId, ...payload })
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' })
      const ok = navigator.sendBeacon('/api/ciudadania/progreso-tematicas', blob)
      if (ok) return
    }
    fetch('/api/ciudadania/progreso-tematicas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  }, [userId, tematicaId])

  const scheduleFlush = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(flush, DEBOUNCE_MS)
  }, [flush])

  const queueUpdate = useCallback((partial: FlushPayload) => {
    pendingRef.current = {
      ...pendingRef.current,
      ...partial,
      detalle: partial.detalle ? { ...pendingRef.current.detalle, ...partial.detalle } : pendingRef.current.detalle,
    }
    scheduleFlush()
  }, [scheduleFlush])

  const applyPatch = useCallback((patch: Record<string, unknown>) => {
    setDetalle((prev) => {
      const next = { ...prev, ...patch }
      const progress = computeProgress?.(next)
      if (progress) {
        setPorcentaje(progress.porcentaje)
      }
      queueUpdate({ detalle: patch, porcentaje: progress?.porcentaje })
      return next
    })
  }, [computeProgress, queueUpdate])

  const saveQuizResult = useCallback((quizId: string, data: unknown) => {
    applyPatch({ [quizId]: data })
  }, [applyPatch])

  const toggleChecklistItem = useCallback((checklistId: string, itemId: string) => {
    setDetalle((prev) => {
      const current = Array.isArray(prev[checklistId]) ? (prev[checklistId] as string[]) : []
      const nextItems = current.includes(itemId)
        ? current.filter((i) => i !== itemId)
        : [...current, itemId]
      const patch = { [checklistId]: nextItems }
      const next = { ...prev, ...patch }
      const progress = computeProgress?.(next)
      if (progress) {
        setPorcentaje(progress.porcentaje)
      }
      queueUpdate({ detalle: patch, porcentaje: progress?.porcentaje })
      return next
    })
  }, [computeProgress, queueUpdate])

  const isChecked = useCallback((checklistId: string, itemId: string) => {
    const current = detalle[checklistId]
    return Array.isArray(current) && current.includes(itemId)
  }, [detalle])

  const markCompleted = useCallback(() => {
    setCompletada(true)
    setPorcentaje(100)
    pendingRef.current = { ...pendingRef.current, completada: true, porcentaje: 100 }
    flush()
  }, [flush])

  // Flush al desmontar y al cerrar/navegar fuera de la pestaña, para no
  // perder el último tramo si el debounce no llegó a disparar.
  useEffect(() => {
    window.addEventListener('beforeunload', flush)
    return () => {
      window.removeEventListener('beforeunload', flush)
      if (timerRef.current) clearTimeout(timerRef.current)
      flush()
    }
  }, [flush])

  return {
    detalle,
    completada,
    porcentaje,
    loaded,
    saveQuizResult,
    toggleChecklistItem,
    isChecked,
    markCompleted,
  }
}
