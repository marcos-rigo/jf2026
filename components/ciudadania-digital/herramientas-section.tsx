'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ErrorsChart } from './errors-chart';
import { ChevronDown, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { FUENTES_COMPLETAS } from '@/lib/ciudadania-digital-content';

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

export const CHECKLIST_ITEMS = [
  { id: 'password', label: 'Cambié mis 3 contraseñas principales y le mostré el proceso a mi curso' },
  { id: '2fa', label: 'Activé 2FA en mi correo institucional, redes sociales y banco' },
  { id: 'permissions', label: 'Revisé los permisos de apps en mi celular junto con mis estudiantes' },
  { id: 'privacy', label: 'Ajusté la privacidad de mis redes sociales, separando mi perfil docente del personal' },
  { id: 'cookies', label: 'Rechacé cookies no esenciales en mis últimas navegaciones' },
  { id: 'google-search', label: 'Busqué mi nombre en Google en modo incógnito' },
  { id: 'comments', label: 'Trabajé con mi curso un ejemplo de comentario constructivo esta semana' },
  { id: 'fake-news', label: 'Apliqué el framework VERIFICA en clase para analizar una noticia con mis estudiantes' },
];

export default function HerramientasSection({
  checkedItems,
  onCheckboxChange,
}: HerramientasSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

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
    if (percentage < 40) return 'from-[#EF4444] to-[#DC2626]';
    if (percentage < 80) return 'from-[#F59E0B] to-[#D97706]';
    return 'from-[#10B981] to-[#059669]';
  };

  const faqItems = [
    {
      id: 'faq-1',
      question: '¿La privacidad de mis estudiantes está realmente en riesgo?',
      answer:
        'Sí. Cada click, búsqueda y "me gusta" que hacen tus estudiantes es capturado y puede venderse a terceros. Grandes corporaciones construyen perfiles de comportamiento sobre cada chico y chica. La privacidad es un derecho, y enseñar a defenderla es parte de la formación ciudadana que le toca a la escuela.',
    },
    {
      id: 'faq-2',
      question: '¿Se puede rastrear a alguien incluso en "Modo Incógnito"?',
      answer:
        'Técnicamente sí. El ISP (proveedor de internet) sigue viendo la actividad, y los sitios web pueden rastrear por IP, cookies persistentes o técnicas de fingerprinting (identificación del dispositivo por sus características técnicas). Es útil que tus estudiantes entiendan que el modo incógnito es una capa más de privacidad, no una capa invulnerable.',
    },
    {
      id: 'faq-3',
      question: '¿Cómo les enseño a mis estudiantes a saber si una noticia es real?',
      answer:
        'Insistí en que nunca confíen en un solo medio. El framework VERIFICA que trabajamos en la Fase 03 les da un método concreto: verificar la fuente, buscar evidencia múltiple, revisar el propio sesgo, identificar cambios o ediciones, verificar fecha y contexto, aplicar intuición crítica, contrastar perspectivas y actuar con responsabilidad antes de compartir.',
    },
  ];

  return (
    <motion.section
      id="recursos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10 border-b border-slate-800 pb-8 flex items-end justify-between">
        <div>
          <span className="bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono mb-4 inline-block">
            08 — Centro de Recursos
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight font-display">
            Centro de Recursos Docente
          </h2>
          <p className="text-slate-400 text-lg font-sans">Herramientas, autoevaluación y respuestas frecuentes para llevar al aula.</p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-xs text-[#00F0FF] font-mono uppercase tracking-widest mb-1">Status Sistema</div>
          <div className="text-[#10B981] font-bold flex items-center gap-2 justify-end">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Sistema Activo
          </div>
        </div>
      </div>

      {/* ── Carrusel de recursos para el aula (trasladado desde el hero) ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 rounded-3xl overflow-hidden mb-10">
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
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 py-5">
          {CARRUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-6 h-2.5 bg-[#8B5CF6]' : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir a lámina ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Checklist / Score */}
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#00F0FF] p-8 rounded-3xl relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-white text-xl font-display">Mi Progreso</h3>
              <p className="text-slate-400 text-sm font-sans">Completá tu propio checklist antes de llevarlo al aula</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {CHECKLIST_ITEMS.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item.id)}
                  onChange={(e) => onCheckboxChange(item.id, e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-slate-600 bg-transparent checked:bg-[#10B981] checked:border-[#10B981] accent-[#10B981] cursor-pointer transition-all"
                />
                <span className="text-slate-300 group-hover:text-white transition-colors font-sans text-sm">
                  {item.label}
                </span>
              </label>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-white font-display">Ciudadanía Digital</span>
              <span className="text-[#00F0FF] font-bold font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <motion.div
                className={`h-full bg-gradient-to-r ${getScoreColor()} shadow-[0_0_10px_rgba(16,185,129,0.4)]`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-sans">
              {percentage < 40 && '⚠️ Conviene reforzar antes de llevarlo al aula'}
              {percentage >= 40 && percentage < 80 && '✓ Buen progreso. Vas bien encaminado/a'}
              {percentage >= 80 && '✨ ¡Excelente! Estás listo/a para guiar a tu curso con el ejemplo'}
            </p>
          </div>
        </div>

        {/* Gráfico de Errores */}
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#EF4444] h-full flex flex-col rounded-3xl p-8">
            <h3 className="font-bold text-white text-xl font-display mb-4">Vulnerabilidades Detectadas</h3>
            <ErrorsChart />
            <p className="text-xs text-slate-400 mt-4 font-sans">
              Los principales riesgos que suelen aparecer en el ecosistema digital de un aula. Usalo como disparador para
              priorizar en qué enfocarte primero con tu curso.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Premium */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl mb-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-2xl text-white flex items-center gap-3 font-display">
            <span>❓</span> Preguntas Frecuentes
          </h3>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="border border-slate-700 bg-slate-800/30 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-white font-bold text-left font-display">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
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
                <div className="px-6 py-4 border-t border-slate-700 bg-slate-900/50">
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Salida */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h3 className="font-extrabold text-2xl text-white mb-3 flex items-center gap-3 font-display">
            <span>🎓</span> Kit Docente Completado
          </h3>
          <p className="text-slate-400 max-w-xl leading-relaxed font-sans">
            Completaste el kit básico. Ahora tenés las herramientas para acompañar a tus estudiantes en su vida digital
            con criterio propio. Mantené tus prácticas actualizadas y seguí promoviendo la convivencia cívica dentro y
            fuera del aula.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto shrink-0 bg-slate-900/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-md">
          <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
            Directorios Oficiales
          </p>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://www.argentina.gob.ar" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → Gov.ar - Recursos Oficiales
            </a>
            <a href="https://www.incibe.es" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → INCIBE - Seguridad Online
            </a>
            <a href="https://www.snopes.com" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → Snopes - Fact-Checking Global
            </a>
          </div>
        </div>
      </div>

      {/* Fuentes citadas — listado completo */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl mt-10">
        <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-3 font-display">
          <span>📚</span> Fuentes Citadas
        </h3>
        <ul className="space-y-3">
          {FUENTES_COMPLETAS.map((fuente) => (
            <li key={fuente.n} className="flex items-start gap-3 text-sm">
              <span className="text-slate-600 font-mono shrink-0">{fuente.n}.</span>
              <div className="flex flex-col gap-1">
                {fuente.url ? (
                  <a
                    href={fuente.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00F0FF] hover:underline font-sans"
                  >
                    {fuente.label}
                  </a>
                ) : (
                  <span className="text-slate-300 font-sans">{fuente.label}</span>
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
