'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ErrorsChart } from './errors-chart';
import { ChevronDown, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import {
  FUENTES_COMPLETAS,
  HERO_CARRUSEL_HEADER,
  RECURSOS_TEXTO,
  CHECKLIST_ITEMS,
  FAQ_ITEMS,
} from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

// Re-exportado para no romper el import existente en ciudadania-digital-content.tsx
// (`import HerramientasSection, { CHECKLIST_ITEMS } from ...`) — el dato en sí
// ahora vive en lib/ciudadania-digital-content.ts junto con el resto del contenido.
export { CHECKLIST_ITEMS };

interface HerramientasSectionProps {
  checkedItems: Set<string>;
  onCheckboxChange: (id: string, checked: boolean) => void;
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
};

const CARRUSEL_IMAGES = [
  '/weekly-content/2026-W19/carrusel/1.svg',
  '/weekly-content/2026-W19/carrusel/2.svg',
  '/weekly-content/2026-W19/carrusel/3.svg',
  '/weekly-content/2026-W19/carrusel/4.svg',
  '/weekly-content/2026-W19/carrusel/5.svg',
];

export default function HerramientasSection({
  checkedItems,
  onCheckboxChange,
}: HerramientasSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const carruselLabel = resolveTexto(HERO_CARRUSEL_HEADER.label, audienciaActual, 'docentes');
  const carruselTitulo = resolveTexto(HERO_CARRUSEL_HEADER.titulo, audienciaActual, 'docentes');
  const tituloSeccion = resolveTexto(RECURSOS_TEXTO.tituloSeccion, audienciaActual, 'docentes');
  const subtitulo = resolveTexto(RECURSOS_TEXTO.subtitulo, audienciaActual, 'docentes');
  const progresoBajo = resolveTexto(RECURSOS_TEXTO.progresoBajo, audienciaActual, 'docentes');
  const progresoMedio = resolveTexto(RECURSOS_TEXTO.progresoMedio, audienciaActual, 'docentes');
  const progresoAlto = resolveTexto(RECURSOS_TEXTO.progresoAlto, audienciaActual, 'docentes');
  const cierreTitulo = resolveTexto(RECURSOS_TEXTO.cierreTitulo, audienciaActual, 'docentes');
  const cierreTexto = resolveTexto(RECURSOS_TEXTO.cierreTexto, audienciaActual, 'docentes');

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(index);
  }, []);

  const prevSlide = useCallback(() => {
    goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1);
  }, [currentSlide, goTo]);

  const nextSlide = useCallback(() => {
    goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1);
  }, [currentSlide, goTo]);

  const percentage = Math.round((checkedItems.size / CHECKLIST_ITEMS.length) * 100);

  const getScoreColor = () => {
    if (percentage < 40) return 'from-[#DC2626] to-[#B91C1C]';
    if (percentage < 80) return 'from-[#D97706] to-[#B45309]';
    return 'from-[#059669] to-[#047857]';
  };

  return (
    <motion.section
      id="recursos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10 border-b border-slate-200 pb-8 flex items-end justify-between">
        <div>
          <span className="bg-[#0E7490]/10 text-[#0E7490] border border-[#0E7490]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono mb-4 inline-block">
            08 — Centro de Recursos
          </span>
          <h2 className="text-4xl font-extrabold text-brand-navy mb-2 tracking-tight font-display">
            {tituloSeccion}
          </h2>
          <p className="text-slate-600 text-lg font-sans">{subtitulo}</p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-xs text-[#0E7490] font-mono uppercase tracking-widest mb-1">Status Sistema</div>
          <div className="text-[#047857] font-bold flex items-center gap-2 justify-end">
            <div className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
            Sistema Activo
          </div>
        </div>
      </div>

      {/* ── Carrusel de recursos para el aula (trasladado desde el hero) ── */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden mb-10 shadow-sm">
        <div className="p-6 md:p-8 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D28D9] to-blue-600 flex items-center justify-center shadow-[0_0_12px_rgba(109,40,217,0.3)] shrink-0">
              <Images className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#6D28D9] opacity-90 mb-0.5">
                {carruselLabel}
              </p>
              <h3 className="text-lg md:text-xl font-bold text-brand-navy font-display">
                {carruselTitulo}
              </h3>
            </div>
          </div>
          <span className="text-slate-500 text-sm font-mono">
            {currentSlide + 1} / {CARRUSEL_IMAGES.length}
          </span>
        </div>

        <div className="relative overflow-hidden bg-slate-50">
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
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center transition-colors backdrop-blur-sm shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center transition-colors backdrop-blur-sm shadow-sm"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 py-5">
          {CARRUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-6 h-2.5 bg-[#6D28D9]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir a lámina ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Checklist / Score */}
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#0E7490] p-8 rounded-3xl relative shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-brand-navy text-xl font-display">Mi Progreso</h3>
              <p className="text-slate-600 text-sm font-sans">Completá tu propio checklist antes de llevarlo al aula</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {CHECKLIST_ITEMS.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item.id)}
                  onChange={(e) => onCheckboxChange(item.id, e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-slate-300 bg-transparent checked:bg-[#047857] checked:border-[#047857] accent-[#047857] cursor-pointer transition-all"
                />
                <span className="text-slate-700 group-hover:text-brand-navy transition-colors font-sans text-sm">
                  {resolveTexto(item.label, audienciaActual, 'docentes')}
                </span>
              </label>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-brand-navy font-display">Ciudadanía Digital</span>
              <span className="text-[#0E7490] font-bold font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
              <motion.div
                className={`h-full bg-gradient-to-r ${getScoreColor()}`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-600 mt-3 font-sans">
              {percentage < 40 && progresoBajo}
              {percentage >= 40 && percentage < 80 && progresoMedio}
              {percentage >= 80 && progresoAlto}
            </p>
          </div>
        </div>

        {/* Gráfico de Errores */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-slate-200 border-t-2 border-t-[#B91C1C] h-full flex flex-col rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-brand-navy text-xl font-display mb-4">Vulnerabilidades Detectadas</h3>
            <ErrorsChart />
            <p className="text-xs text-slate-600 mt-4 font-sans">
              Los principales riesgos que suelen aparecer en el ecosistema digital de un aula. Usalo como disparador para
              priorizar en qué enfocarte primero con tu curso.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Premium */}
      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl mb-10 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-2xl text-brand-navy flex items-center gap-3 font-display">
            <span>❓</span> Preguntas Frecuentes
          </h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              className="border border-slate-200 bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <span className="text-brand-navy font-bold text-left font-display">
                  {resolveTexto(item.question, audienciaActual, 'docentes')}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    expandedFaq === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: expandedFaq === item.id ? 'auto' : 0, opacity: expandedFaq === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-slate-200 bg-white">
                  <p className="text-slate-700 text-sm font-sans leading-relaxed">
                    {resolveTexto(item.answer, audienciaActual, 'docentes')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Salida */}
      <div className="bg-gradient-to-br from-brand-navy to-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#047857]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h3 className="font-extrabold text-2xl text-white mb-3 flex items-center gap-3 font-display">
            <span>🎓</span> {cierreTitulo}
          </h3>
          <p className="text-slate-300 max-w-xl leading-relaxed font-sans">{cierreTexto}</p>
        </div>

        <div className="relative z-10 w-full md:w-auto shrink-0 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md">
          <p className="text-xs text-slate-300 font-mono uppercase tracking-widest mb-3 border-b border-white/20 pb-2">
            Directorios Oficiales
          </p>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://www.argentina.gob.ar" target="_blank" rel="noopener noreferrer" className="text-[#5EEAD4] hover:text-white transition-colors">
              → Gov.ar - Recursos Oficiales
            </a>
            <a href="https://www.incibe.es" target="_blank" rel="noopener noreferrer" className="text-[#5EEAD4] hover:text-white transition-colors">
              → INCIBE - Seguridad Online
            </a>
            <a href="https://www.snopes.com" target="_blank" rel="noopener noreferrer" className="text-[#5EEAD4] hover:text-white transition-colors">
              → Snopes - Fact-Checking Global
            </a>
          </div>
        </div>
      </div>

      {/* Fuentes citadas — listado completo */}
      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl mt-10 shadow-sm">
        <h3 className="font-bold text-2xl text-brand-navy mb-6 flex items-center gap-3 font-display">
          <span>📚</span> Fuentes Citadas
        </h3>
        <ul className="space-y-3">
          {FUENTES_COMPLETAS.map((fuente) => (
            <li key={fuente.n} className="flex items-start gap-3 text-sm">
              <span className="text-slate-500 font-mono shrink-0">{fuente.n}.</span>
              <div className="flex flex-col gap-1">
                {fuente.url ? (
                  <a
                    href={fuente.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0E7490] hover:underline font-sans"
                  >
                    {fuente.label}
                  </a>
                ) : (
                  <span className="text-slate-700 font-sans">{fuente.label}</span>
                )}
                {fuente.note && <span className="text-slate-500 text-xs font-sans italic">{fuente.note}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
