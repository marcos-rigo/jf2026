'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2, Maximize2, ZoomIn, ZoomOut } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

interface Props {
  file: string
  label: string
  color: string
}

export function PdfViewer({ file, label, color }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [targetWidth, setTargetWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!containerRef.current) return
    const updateDimensions = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth
        const vhHeightLimit = window.innerHeight * 0.44
        const maxSlideHeight = Math.min(vhHeightLimit, 420)
        const widthFromMaxHeight = maxSlideHeight * (16 / 9)

        if (availableWidth > 0) {
          const finalWidth = widthFromMaxHeight > 0 && widthFromMaxHeight < availableWidth
            ? widthFromMaxHeight
            : availableWidth
          setTargetWidth(finalWidth)
        }
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    const observer = new ResizeObserver(updateDimensions)
    observer.observe(containerRef.current)
    return () => {
      window.removeEventListener('resize', updateDimensions)
      observer.disconnect()
    }
  }, [])

  function zoomIn() { setScale((s) => Math.min(2.5, parseFloat((s + 0.25).toFixed(2)))) }
  function zoomOut() { setScale((s) => Math.max(0.5, parseFloat((s - 0.25).toFixed(2)))) }
  function resetZoom() { setScale(1) }
  function prevPage() { setPageNumber((p) => Math.max(1, p - 1)) }
  function nextPage() { setPageNumber((p) => Math.min(numPages ?? p, p + 1)) }

  return (
    <div className="w-full bg-white">
      <div ref={containerRef} className="bg-slate-100 dark:bg-black/20 flex justify-center items-center overflow-hidden w-full p-0 relative aspect-[16/9] min-h-[240px]">
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="flex items-center gap-2 text-slate-400 text-sm py-16">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              Cargando presentación…
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pageNumber}
              initial={{ opacity: 0.75 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.75 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex justify-center items-center"
            >
              <Page
                pageNumber={pageNumber}
                width={targetWidth ? targetWidth * scale : undefined}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={null}
              />
            </motion.div>
          </AnimatePresence>
        </Document>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-3 border-t border-[#d3e2f0] dark:border-white/10 bg-white">
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1}
          className="w-8 h-8 flex items-center justify-center rounded-full text-brand-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-brand-navy dark:text-white/80 font-mono text-xs w-16 text-center">
          {pageNumber}/{numPages ?? '…'}
        </span>

        <button
          onClick={nextPage}
          disabled={!numPages || pageNumber >= numPages}
          className="w-8 h-8 flex items-center justify-center rounded-full text-brand-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Página siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-[#d3e2f0] dark:bg-white/10 mx-1 hidden sm:block" />

        <button
          onClick={zoomOut}
          disabled={scale <= 0.5}
          className="w-8 h-8 flex items-center justify-center rounded-full text-brand-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Reducir zoom"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <span className="text-brand-navy dark:text-white/80 font-mono text-xs w-10 text-center">{Math.round(scale * 100)}%</span>

        <button
          onClick={zoomIn}
          disabled={scale >= 2.5}
          className="w-8 h-8 flex items-center justify-center rounded-full text-brand-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Aumentar zoom"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {scale !== 1 && (
          <button
            onClick={resetZoom}
            className="ml-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-white/60 hover:text-brand-navy dark:hover:text-white transition-colors border-l border-[#d3e2f0] dark:border-white/10 pl-3"
            aria-label="Restablecer zoom"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Restablecer
          </button>
        )}
      </div>
    </div>
  )
}
