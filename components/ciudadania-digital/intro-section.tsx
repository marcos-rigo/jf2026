'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (tab: 'paso1' | 'paso2' | 'paso3' | 'herramientas') => void;
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const INFOGRAFIA_PATH = '/weekly-content/2026-W19/ciudadaniaDigitalCard.png';
const CARRUSEL_IMAGES = [
  '/weekly-content/2026-W19/carrusel/1.svg',
  '/weekly-content/2026-W19/carrusel/2.svg',
  '/weekly-content/2026-W19/carrusel/3.svg',
  '/weekly-content/2026-W19/carrusel/4.svg',
  '/weekly-content/2026-W19/carrusel/5.svg',
];

export default function IntroSection({ onNavigate }: IntroSectionProps) {
  const [imgExpanded, setImgExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(index);
  }, []);

  const prev = useCallback(() => {
    goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1);
  }, [currentSlide, goTo]);

  const next = useCallback(() => {
    goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1);
  }, [currentSlide, goTo]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full space-y-8"
    >
      {/* ── Infografía general ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00F0FF] opacity-5 blur-[120px] rounded-full pointer-events-none" />

        <div className="p-6 md:p-8 border-b border-slate-800/50 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#00F0FF] opacity-80 mb-1">
              Vista General
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white font-display">
              Infografía de Ciudadanía Digital
            </h2>
          </div>
          <button
            onClick={() => setImgExpanded((v) => !v)}
            className="shrink-0 flex items-center gap-2 text-xs text-slate-400 hover:text-[#00F0FF] transition-colors border border-slate-700 hover:border-[#00F0FF]/50 rounded-xl px-3 py-2"
          >
            <ZoomIn className="w-4 h-4" />
            <span className="hidden sm:inline">{imgExpanded ? 'Reducir' : 'Ampliar'}</span>
          </button>
        </div>

        <div
          className={`relative w-full transition-all duration-500 cursor-zoom-in ${
            imgExpanded ? 'max-h-[90vh]' : 'max-h-[420px] md:max-h-[560px]'
          } overflow-hidden`}
          onClick={() => setImgExpanded((v) => !v)}
        >
          <Image
            src={INFOGRAFIA_PATH}
            alt="Infografía general de Ciudadanía Digital"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
          {!imgExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141A28] to-transparent pointer-events-none" />
          )}
        </div>
      </div>

      {/* ── Texto introductorio ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
          Toma el Control de tu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
            Vida en Línea
          </span>
        </h2>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl font-sans">
          ¿Sientes que la tecnología a veces te controla más a ti que tú a ella? Entre desinformación constante,
          riesgos de privacidad, sesgos de la Inteligencia Artificial y debates acalorados en redes sociales,
          navegar por internet puede sentirse como caminar por un campo minado.
        </p>

        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-6 rounded-r-xl my-8 max-w-3xl">
          <p className="text-[#00F0FF] font-medium text-lg leading-relaxed">
            El problema es que a menudo interactuamos en el mundo digital en{' '}
            <strong className="font-bold text-white">"piloto automático"</strong>.
            La <strong className="font-bold text-white">Ciudadanía Digital</strong> no es solo saber usar un
            dispositivo; es tener las habilidades para protegerte, convivir con respeto y aprovechar la red
            para tu desarrollo.
          </p>
        </div>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl font-sans">
          En esta plataforma, dejamos la teoría de lado. Te guiaremos paso a paso para que audites tu huella
          en línea, protejas tus datos y aprendas a detectar información falsa como un profesional.
        </p>

        <Button
          onClick={() => onNavigate('paso1')}
          className="bg-gradient-to-r from-[#00F0FF] to-blue-600 hover:from-blue-500 hover:to-[#00F0FF] text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-3 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          Iniciar Protocolo <span>➔</span>
        </Button>
      </div>

      {/* ── Carrusel inline ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-800/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-blue-600 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.3)] shrink-0">
              <Images className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#8B5CF6] opacity-80 mb-0.5">
                Presentación completa
              </p>
              <h3 className="text-lg md:text-xl font-bold text-white font-display">
                Ciudadanía Digital — Galería
              </h3>
            </div>
          </div>
          <span className="text-slate-400 text-sm font-mono">
            {currentSlide + 1} / {CARRUSEL_IMAGES.length}
          </span>
        </div>

        {/* Área de imagen con flechas */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Image
                src={CARRUSEL_IMAGES[currentSlide]}
                alt={`Lámina ${currentSlide + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 py-5">
          {CARRUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-6 h-2.5 bg-[#8B5CF6]'
                  : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir a lámina ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
