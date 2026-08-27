'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, X, Maximize2, LayoutDashboard } from 'lucide-react';

const INFOGRAFIA_PATH = '/img/alfabetizacion/infografia-alfabetizacion-digital.webp';
const INFOGRAFIA_ALT = 'Infografía: Agenda Digital y Alfabetización — El Motor de Cambio para América Latina y el Caribe';

export function InfografiaViewer() {
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

  function closeLightbox() { setLightboxOpen(false); setZoom(1); setPan({ x: 0, y: 0 }); }
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 blur-3xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-blue-200/80 shadow-[0_30px_80px_rgba(14,165,233,0.12),0_4px_24px_rgba(15,23,42,0.06)] bg-white">
          <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/[0.07]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center min-w-0">
              <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-3 sm:px-4 py-1 flex items-center gap-2 max-w-[320px] w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                <span className="text-sm text-white/60 font-mono truncate">infografia — Alfabetización Digital</span>
              </div>
            </div>
            <div className="w-10 sm:w-16 shrink-0" />
          </div>
          <div className="bg-white flex justify-center">
            <div className="relative group w-full lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INFOGRAFIA_PATH}
                alt={INFOGRAFIA_ALT}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/25 transition-all duration-300">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-navy font-semibold text-base px-5 py-2.5 rounded-full shadow-xl border border-slate-200/50">
                  <ZoomIn className="w-4 h-4 text-blue-600" />
                  Ver a pantalla completa
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm text-slate-500 font-mono">
          <LayoutDashboard className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span>Dimensiones, brecha digital en 3 niveles, impacto del PIB, IA regional y comparación de habilidades por país — tocá la imagen para explorarla en detalle.</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-base px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={zoomOut} disabled={zoom <= 1} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Reducir zoom">
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white font-mono text-base w-10 text-center">{zoom.toFixed(1)}×</span>
              <button onClick={zoomIn} disabled={zoom >= 4} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Aumentar zoom">
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoom > 1 && (
                <button onClick={resetZoom} className="ml-1 flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3" aria-label="Restablecer zoom">
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
                  alt={`${INFOGRAFIA_ALT} — pantalla completa`}
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
    </>
  );
}
