'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Maximize2, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'

interface Props {
  totalSlides: number
  slidesBasePath: string // e.g. "/img/tematicas/subculturas-digitales/slides"
  pdfDownloadUrl?: string // e.g. "/img/tematicas/subculturas-digitales/presentacion.pdf"
  title: string
  color: string
}

export function WebpSlideCarousel({
  totalSlides = 18,
  slidesBasePath = '/img/tematicas/subculturas-digitales/slides',
  pdfDownloadUrl = '/img/tematicas/subculturas-digitales/presentacion.pdf',
  title,
  color,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [direction, setDirection] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  function nextSlide() {
    if (currentSlide < totalSlides) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      setDirection(-1)
      setCurrentSlide((prev) => prev - 1)
    }
  }

  const slideSrc = `${slidesBasePath}/slide_${String(currentSlide).padStart(2, '0')}.webp`

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden border-2 border-indigo-100 shadow-xl">
      
      {/* ── Slide Display Area ── */}
      <div className="relative w-full aspect-[16/9] bg-slate-900 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={slideSrc}
              alt={`Diapositiva ${currentSlide} de ${totalSlides} — ${title}`}
              fill
              priority={currentSlide <= 2}
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Quick Navigation Arrows over Slide */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg border border-white/20 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          aria-label="Diapositiva siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg border border-white/20 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Diapositiva {currentSlide} de {totalSlides}</span>
        </div>
      </div>

      {/* ── Lower Toolbar with Controls & PDF Download ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-white border-t border-slate-100">
        
        {/* Previous / Next & Counter Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all border cursor-pointer border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>

          <span className="font-mono text-xs font-black text-slate-700 px-2">
            {currentSlide} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all border cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-30 disabled:pointer-events-none shadow-md"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* PDF Download Link Button */}
        {pdfDownloadUrl && (
          <a
            href={pdfDownloadUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-amber-700 shrink-0" />
            Descargar presentación completa (PDF)
          </a>
        )}

      </div>

    </div>
  )
}
