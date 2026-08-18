'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (tab: 'paso1' | 'paso2' | 'paso3' | 'herramientas') => void;
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const INFOGRAFIA_PATH = '/weekly-content/2026-W19/infografiaSemanal.svg';
const CARRUSEL_IMAGES = [
  '/weekly-content/2026-W19/carrusel/1.svg',
  '/weekly-content/2026-W19/carrusel/2.svg',
  '/weekly-content/2026-W19/carrusel/3.svg',
  '/weekly-content/2026-W19/carrusel/4.svg',
  '/weekly-content/2026-W19/carrusel/5.svg',
];

export default function IntroSection({ onNavigate }: IntroSectionProps) {
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
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#00F0FF]/15 via-transparent to-[#8B5CF6]/10 blur-2xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-[#00F0FF]/20 shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,240,255,0.06)]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#07101f] to-[#0b1830] border-b border-white/[0.07]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse shrink-0" />
                <span className="text-xs text-white/40 font-mono truncate">infografia — Ciudadanía Digital</span>
              </div>
            </div>
            <div className="w-16 shrink-0" />
          </div>
          {/* SVG a ancho completo */}
          <div className="bg-white">
            <img
              src={INFOGRAFIA_PATH}
              alt="Infografía de Ciudadanía Digital"
              className="w-full h-auto block"
            />
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/60 to-transparent" />
        </div>
      </div>

      {/* ── Texto introductorio ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
          Sé la Guía Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
            de tus Estudiantes
          </span>
        </h2>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl font-sans">
          ¿Sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo? Entre la desinformación
          que circula por los grupos de WhatsApp del curso, los riesgos de privacidad que exponen sin saberlo, los
          sesgos de la Inteligencia Artificial que usan para hacer la tarea y los conflictos que se trasladan de las
          redes sociales al aula, acompañar la vida digital de tus estudiantes puede sentirse como caminar por un
          campo minado.
        </p>

        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-6 rounded-r-xl my-8 max-w-3xl">
          <p className="text-[#00F0FF] font-medium text-lg leading-relaxed">
            El problema es que buena parte de tus estudiantes interactúa en el mundo digital en{' '}
            <strong className="font-bold text-white">"piloto automático"</strong> — y muchas veces vos también,
            entre la carga docente y la velocidad con la que cambian las plataformas.
            La <strong className="font-bold text-white">Ciudadanía Digital</strong> no es solo saber usar un
            dispositivo: es tener las herramientas para enseñar a protegerse, convivir con respeto y aprovechar
            la red para el desarrollo de cada estudiante, dentro y fuera del aula.
          </p>
        </div>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl font-sans">
          En este Kit dejamos la teoría de lado. Te guiamos paso a paso con estrategias que podés llevar directo
          al aula: cómo trabajar la seguridad digital con tus estudiantes, cómo mediar los conflictos de convivencia
          que llegan desde las redes, y cómo enseñarles a detectar información falsa antes de que la compartan.
        </p>

        <Button
          onClick={() => onNavigate('paso1')}
          className="bg-gradient-to-r from-[#00F0FF] to-blue-600 hover:from-blue-500 hover:to-[#00F0FF] text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-3 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          Iniciar el Kit Docente <span>➔</span>
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
                Material para el aula
              </p>
              <h3 className="text-lg md:text-xl font-bold text-white font-display">
                Ciudadanía Digital — Recursos para el Aula
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
