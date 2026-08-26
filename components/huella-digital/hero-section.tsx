'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Target, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { SourceCite } from './source-cite';
import { CONCEPTO_QUOTE } from '@/lib/huella-digital-content';

const INFOGRAFIA_PATH = '/weekly-content/2026-W21/infografia%203.svg';

export default function HeroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const lastTouchDistRef = useRef<number | null>(null);
  const lightboxAreaRef = useRef<HTMLDivElement>(null);
  const panRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);

  function closeLightbox() {
    setLightboxOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }

  function zoomIn() { setZoom((prev) => Math.min(4, parseFloat((prev + 0.5).toFixed(1)))); }
  function zoomOut() {
    setZoom((prev) => {
      const next = parseFloat((prev - 0.5).toFixed(1));
      if (next <= 1) { setPan({ x: 0, y: 0 }); return 1; }
      return next;
    });
  }
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }); }

  function onMouseDown(e: React.MouseEvent) {
    if (zoomRef.current <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y };
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !dragStartRef.current) return;
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    });
  }
  function onMouseUp() { setIsDragging(false); dragStartRef.current = null; }

  useEffect(() => {
    const el = lightboxAreaRef.current;
    if (!el || !lightboxOpen) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.3 : -0.3;
      setZoom((prev) => {
        const next = parseFloat((prev + delta).toFixed(1));
        if (next <= 1) { setPan({ x: 0, y: 0 }); return 1; }
        return Math.min(4, next);
      });
    };

    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        lastTouchDistRef.current = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      } else if (e.touches.length === 1) {
        dragStartRef.current = {
          mx: e.touches[0].clientX,
          my: e.touches[0].clientY,
          px: panRef.current.x,
          py: panRef.current.y,
        };
      }
    };

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const ratio = newDist / lastTouchDistRef.current;
        lastTouchDistRef.current = newDist;
        setZoom((prev) => {
          const next = parseFloat((prev * ratio).toFixed(2));
          if (next <= 1) { setPan({ x: 0, y: 0 }); return 1; }
          return Math.min(4, next);
        });
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({
          x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx),
          y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my),
        });
      }
    };

    const touchEndHandler = () => {
      dragStartRef.current = null;
      lastTouchDistRef.current = null;
      setIsDragging(false);
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    el.addEventListener('touchstart', touchStartHandler, { passive: false });
    el.addEventListener('touchmove', touchMoveHandler, { passive: false });
    el.addEventListener('touchend', touchEndHandler);
    return () => {
      el.removeEventListener('wheel', wheelHandler);
      el.removeEventListener('touchstart', touchStartHandler);
      el.removeEventListener('touchmove', touchMoveHandler);
      el.removeEventListener('touchend', touchEndHandler);
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      {/* ── Header ── */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
          Guía Accionable 2026 · Docentes
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Recuperá el Control de tu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Identidad Digital
          </span>
        </h1>

        {/* ── Concepto — con cita ── */}
        <div className="text-left max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 mt-6">
          <h2 className="font-bold text-blue-600 text-sm uppercase tracking-wide mb-3">Concepto</h2>
          <blockquote className="text-slate-800 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-5 mb-4">
            "{CONCEPTO_QUOTE.text}"
          </blockquote>
          <SourceCite source={CONCEPTO_QUOTE.source} />
        </div>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Como docente, tu huella digital habla por vos antes de que lo hagas vos: para tus estudiantes, para las
          familias que buscan tu nombre antes de una reunión, y para la escuela. Esta guía te lleva de la
          sobreexposición al control total en 3 pasos prácticos, que después podés convertir en una actividad para
          trabajar con tu curso.
        </p>
        <div className="inline-flex items-start gap-3 p-4 mt-6 bg-green-50 border border-green-200 rounded-xl text-green-800 text-left">
          <Target className="w-5 h-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Meta del día:</p>
            <p className="text-sm">
              Sabrás que lo lograste cuando busques tu nombre en internet y{' '}
              <strong>solo aparezca lo que vos decidís mostrar</strong> — algo especialmente importante cuando quien
              busca es un estudiante, una familia o la dirección de la escuela.
            </p>
          </div>
        </div>
      </div>

      {/* ── Infografía general ── */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/10 blur-2xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-blue-300/30 shadow-[0_30px_80px_rgba(59,130,246,0.15),0_4px_24px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#0c2340] to-[#1e3a5f] border-b border-white/[0.07]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                <span className="text-xs text-white/50 font-mono truncate">infografia — Huella Digital</span>
              </div>
            </div>
            <div className="w-16 shrink-0" />
          </div>
          <div className="bg-white">
            <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
              <img
                src={INFOGRAFIA_PATH}
                alt="Infografía de Huella Digital"
                className="w-full h-auto block lg:w-auto lg:max-h-[700px] transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-xl border border-slate-200/50">
                  <ZoomIn className="w-4 h-4" />
                  Ver a pantalla completa
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={zoomOut}
                disabled={zoom <= 1}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Reducir zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>

              <button
                onClick={zoomIn}
                disabled={zoom >= 4}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Aumentar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {zoom > 1 && (
                <button
                  onClick={resetZoom}
                  className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3"
                  aria-label="Restablecer zoom"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Restablecer
                </button>
              )}
            </div>

            <div
              ref={lightboxAreaRef}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía de Huella Digital — pantalla completa"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl select-none"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 0.15s ease',
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  onMouseDown={onMouseDown}
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
