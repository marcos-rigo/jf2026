'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Images, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { INFOGRAFIA_PATH, CARRUSEL_IMAGES } from '@/lib/alfabetizacion-mediatica-content';

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
};

/** Infografía con lightbox de zoom/pan + carrusel de láminas para el aula. Assets sin cambios. */
export function MediaViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
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
          mx: e.touches[0].clientX, my: e.touches[0].clientY,
          px: panRef.current.x, py: panRef.current.y,
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
    const touchEndHandler = () => { dragStartRef.current = null; lastTouchDistRef.current = null; setIsDragging(false); };

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

  function goTo(index: number, dir: number) { setDirection(dir); setCurrentSlide(index); }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1); }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1); }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Infografía */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-pink/10 blur-3xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_30px_80px_rgba(66,114,187,0.1),0_4px_24px_rgba(0,0,0,0.08)] bg-white">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#1e1b4b] to-[#2e2a7a] border-b border-white/[0.07]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_4px_#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_4px_#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_4px_#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shrink-0 shadow-[0_0_6px_#4272BB]" />
                <span className="text-xs text-white/50 font-mono truncate">infografia — Alfabetización Mediática</span>
              </div>
            </div>
            <div className="w-16 shrink-0" />
          </div>
          <div className="bg-white lg:flex lg:justify-center">
            <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INFOGRAFIA_PATH}
                alt="Infografía de Alfabetización Mediática"
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
          <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
        </div>
      </motion.div>

      {/* Carrusel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] overflow-hidden">
          <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-lg shadow-brand-blue/25 shrink-0">
                <Images className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                  Material para el aula
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                  Alfabetización Mediática — Recursos para el Aula
                </h3>
              </div>
            </div>
            <span className="text-slate-400 text-sm font-mono shrink-0 bg-slate-100/50 px-3 py-1.5 rounded-full">
              {currentSlide + 1} / {CARRUSEL_IMAGES.length}
            </span>
          </div>

          <div className="relative overflow-hidden lg:max-h-[500px] lg:flex lg:items-center lg:justify-center lg:bg-gradient-to-b lg:from-slate-50/50 lg:to-slate-100/30">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:flex lg:justify-center"
              >
                <Image
                  src={CARRUSEL_IMAGES[currentSlide]}
                  alt={`Lámina ${currentSlide + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain lg:w-auto lg:max-h-[500px]"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5">
            {CARRUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-6 sm:w-8 h-2.5 bg-brand-blue shadow-[0_0_8px_#4272BB]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:w-4 transition-all'
                }`}
                aria-label={`Ir a lámina ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lightbox infografía */}
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
                  alt="Infografía de Alfabetización Mediática — pantalla completa"
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
    </div>
  );
}
