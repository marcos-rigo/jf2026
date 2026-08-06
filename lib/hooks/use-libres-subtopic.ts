'use client'

import { useEffect, useRef, useState } from 'react'
import { useAppStore } from '@/lib/ciudadania/app-store'
import { useTematicaProgress } from '@/lib/hooks/use-tematica-progress'
import type { LibresSubtopicContent } from '@/lib/libres-bajo-influencia-data'

interface StoredQuizResult {
  score: number
}

function computeQuizProgress(detalle: Record<string, unknown>) {
  const quiz = detalle.quiz as StoredQuizResult | undefined
  const porcentaje = quiz ? Math.round((quiz.score / 10) * 100) : 0
  return { porcentaje, completada: !!quiz && quiz.score >= 8 }
}

// Máquina de estados del quiz + lightbox de la infografía (zoom/pan/pinch),
// compartida entre LibresBajoInfluenciaTemplate.tsx (las 5 temáticas del
// grupo que todavía usan el template genérico) y cualquier página forkeada
// con presentación propia (ej. SubculturasDigitalesPage.tsx). Nada acá es
// visual — cada consumidor arma su propio JSX alrededor de estos valores.
export function useLibresSubtopic(data: LibresSubtopicContent) {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const progress = useTematicaProgress({
    tematicaId: data.slug,
    userId,
    computeProgress: computeQuizProgress,
  })

  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(data.quizQuestions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)
  const lastTouchDistRef = useRef<number | null>(null)
  const lightboxAreaRef = useRef<HTMLDivElement>(null)
  const panRef = useRef({ x: 0, y: 0 })
  const zoomRef = useRef(1)
  useEffect(() => { panRef.current = pan }, [pan])
  useEffect(() => { zoomRef.current = zoom }, [zoom])

  function closeLightbox() {
    setLightboxOpen(false)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  function zoomIn() { setZoom((prev) => Math.min(4, parseFloat((prev + 0.5).toFixed(1)))) }
  function zoomOut() {
    setZoom((prev) => {
      const next = parseFloat((prev - 0.5).toFixed(1))
      if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
      return next
    })
  }
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }) }

  function onMouseDown(e: React.MouseEvent) {
    if (zoomRef.current <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y }
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !dragStartRef.current) return
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    })
  }
  function onMouseUp() { setIsDragging(false); dragStartRef.current = null }

  useEffect(() => {
    const el = lightboxAreaRef.current
    if (!el || !lightboxOpen) return

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY < 0 ? 0.3 : -0.3
      setZoom((prev) => {
        const next = parseFloat((prev + delta).toFixed(1))
        if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
        return Math.min(4, next)
      })
    }

    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        lastTouchDistRef.current = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
      } else if (e.touches.length === 1) {
        dragStartRef.current = {
          mx: e.touches[0].clientX,
          my: e.touches[0].clientY,
          px: panRef.current.x,
          py: panRef.current.y,
        }
      }
    }

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        const ratio = newDist / lastTouchDistRef.current
        lastTouchDistRef.current = newDist
        setZoom((prev) => {
          const next = parseFloat((prev * ratio).toFixed(2))
          if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
          return Math.min(4, next)
        })
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({
          x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx),
          y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my),
        })
      }
    }

    const touchEndHandler = () => {
      dragStartRef.current = null
      lastTouchDistRef.current = null
      setIsDragging(false)
    }

    el.addEventListener('wheel', wheelHandler, { passive: false })
    el.addEventListener('touchstart', touchStartHandler, { passive: false })
    el.addEventListener('touchmove', touchMoveHandler, { passive: false })
    el.addEventListener('touchend', touchEndHandler)
    return () => {
      el.removeEventListener('wheel', wheelHandler)
      el.removeEventListener('touchstart', touchStartHandler)
      el.removeEventListener('touchmove', touchMoveHandler)
      el.removeEventListener('touchend', touchEndHandler)
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  const previousResult = progress.detalle.quiz as StoredQuizResult | undefined
  const currentQuestion = data.quizQuestions[currentQuestionIdx]
  const isLastQuestion = currentQuestionIdx === data.quizQuestions.length - 1
  const canContinue = selectedAnswers[currentQuestionIdx] !== null

  const finalScore = selectedAnswers.reduce<number>(
    (acc, ans, idx) => acc + (ans !== null && ans === data.quizQuestions[idx]?.correctIndex ? 1 : 0),
    0
  )
  const passed = finalScore >= 8

  function startQuiz() {
    setCurrentQuestionIdx(0)
    setSelectedAnswers(new Array(data.quizQuestions.length).fill(null))
    setShowResults(false)
    setShowQuiz(true)
  }

  function handleSelect(idx: number) {
    if (showResults) return
    const next = [...selectedAnswers]
    next[currentQuestionIdx] = idx
    setSelectedAnswers(next)
  }

  function handleNext() {
    if (!isLastQuestion) {
      setCurrentQuestionIdx((i) => i + 1)
      return
    }
    const score = selectedAnswers.reduce<number>(
      (acc, ans, idx) => acc + (ans !== null && ans === data.quizQuestions[idx].correctIndex ? 1 : 0),
      0
    )
    progress.saveQuizResult('quiz', { score })
    if (score >= 8) progress.markCompleted()
    setShowResults(true)
  }

  function handlePrev() {
    if (currentQuestionIdx > 0) setCurrentQuestionIdx((i) => i - 1)
  }

  return {
    progress,
    quiz: {
      showQuiz, currentQuestionIdx, selectedAnswers, showResults,
      previousResult, currentQuestion, isLastQuestion, canContinue, finalScore, passed,
      startQuiz, handleSelect, handleNext, handlePrev,
    },
    lightbox: {
      lightboxOpen, setLightboxOpen, zoom, pan, isDragging,
      lightboxAreaRef,
      closeLightbox, zoomIn, zoomOut, resetZoom,
      onMouseDown, onMouseMove, onMouseUp,
    },
  }
}
