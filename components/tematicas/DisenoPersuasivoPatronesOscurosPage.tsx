'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  Award,
  Ban,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  DoorClosed,
  ExternalLink,
  FolderLock,
  HelpCircle,
  Images,
  MousePointerClick,
  Quote,
  RotateCcw,
  Scale,
  ShieldAlert,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'
import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Color Tokens for Diseño Persuasivo y Patrones Oscuros ───
const ROSE = '#DB2777'
const ROSE_TEXT = '#9D174D'
const AMBER = '#EA580C'
const AMBER_TEXT = '#9A3412'
const VIOLET = '#9333EA'
const VIOLET_TEXT = '#6D28D9'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --dp-rose: #DB2777;
    --dp-rose-glow: rgba(219, 39, 119, 0.4);
    --dp-amber: #EA580C;
    --dp-amber-glow: rgba(234, 88, 12, 0.4);
    --dp-violet: #9333EA;
    --dp-violet-glow: rgba(147, 51, 234, 0.4);
    --dp-dark: #170a12;
  }

  .dp-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .dp-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .dp-editorial-wrap-right {
      float: right;
      margin-left: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
    .dp-editorial-wrap-left {
      float: left;
      margin-right: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
  }

  @keyframes dpFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(35px, -45px) scale(1.08); }
    75% { transform: translate(-25px, 25px) scale(0.96); }
  }
  @keyframes dpFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    35% { transform: translate(-45px, -30px) scale(1.12); }
    70% { transform: translate(30px, 35px) scale(0.94); }
  }

  .dp-cyber-badge {
    background: linear-gradient(135deg, rgba(219, 39, 119, 0.1), rgba(234, 88, 12, 0.12));
    border: 1px solid rgba(219, 39, 119, 0.3);
    color: #9D174D;
  }
  .dp-cyber-card {
    border-radius: 28px;
    border: 2px solid rgba(219, 39, 119, 0.18);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px -10px rgba(219, 39, 119, 0.08);
  }
  .dp-cyber-card:hover {
    border-color: rgba(219, 39, 119, 0.45);
    box-shadow: 0 20px 40px -15px rgba(219, 39, 119, 0.18);
    transform: translateY(-3px);
  }
  .dp-cyber-btn {
    background: linear-gradient(135deg, #DB2777, #EA580C);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(219, 39, 119, 0.4);
    transition: all 0.25s ease;
  }
  .dp-cyber-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(219, 39, 119, 0.55);
  }
  .dp-cyber-btn-outline {
    border: 2px solid rgba(219, 39, 119, 0.4);
    color: #9D174D;
    background: transparent;
    transition: all 0.25s ease;
  }
  .dp-cyber-btn-outline:hover {
    background: rgba(219, 39, 119, 0.06);
    transform: translateY(-2px);
  }
`

const ACADEMIC_CITATIONS = [
  {
    author: 'BJ Fogg (2009–2020)',
    title: 'The Fogg Behavior Model (B = MAP)',
    publication: 'Behavior Design Lab, Stanford University',
    url: 'https://www.behaviormodel.org/',
    topic: 'Motivación, capacidad y disparador como condición del comportamiento',
    stat: 'Modelo citado en más de 1.900 publicaciones académicas',
  },
  {
    author: 'Harry Brignull (2010–2023)',
    title: 'Deceptive Patterns (ex-Dark Patterns)',
    publication: 'deceptive.design — Iniciativa de Patrones Engañosos',
    url: 'https://deceptive.design/about-us/dr-harry-brignull/',
    topic: 'Taxonomía de diseños que llevan a hacer algo no deseado',
    stat: 'Vocabulario adoptado por la Digital Services Act y la CPRA',
  },
  {
    author: 'Federal Trade Commission (FTC, 2023)',
    title: 'FTC Finalizes Order Requiring Fortnite Maker Epic Games to Pay $245 Million',
    publication: 'Comisión Federal de Comercio de EE.UU. (FTC Official Release)',
    url: 'https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making',
    topic: 'Caso Epic Games / Fortnite: cargos no deseados mediante patrones oscuros',
    stat: 'Reembolso oficial de $245.000.000 USD a usuarios afectados',
  },
  {
    author: 'Daniel Kahneman (2011)',
    title: 'Thinking, Fast and Slow',
    publication: 'Farrar, Straus and Giroux',
    url: 'https://us.macmillan.com/books/9780374533557/thinkingfastandslow/',
    topic: 'Sistema 1 y Sistema 2: decisiones automáticas bajo fatiga o presión',
    stat: 'Marco teórico central sobre atajos cognitivos y sesgos',
  },
  {
    author: 'Edward Deci & Richard Ryan',
    title: 'Self-Determination Theory',
    publication: 'Self-Determination Theory International',
    url: 'https://selfdeterminationtheory.org/',
    topic: 'Autonomía como necesidad psicológica básica frente al control externo',
    stat: 'Teoría base para distinguir diseño que apoya de diseño que controla',
  },
]

const SECTION_VISUALS: { imageSrc: string; icon: LucideIcon; label: string; source: string; sourceUrl: string }[] = [
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/mecanismo_neutral.webp', icon: Scale, label: 'Ni Bueno ni Malo', source: 'BJ Fogg', sourceUrl: 'https://www.behaviormodel.org/' },
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/linea_manipulacion.webp', icon: AlertTriangle, label: 'Cuándo se Pasa de la Raya', source: 'Harry Brignull', sourceUrl: 'https://deceptive.design/about-us/dr-harry-brignull/' },
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/por_que_funciona.webp', icon: Brain, label: 'Por Qué Funcionan', source: 'Daniel Kahneman (2011)', sourceUrl: 'https://us.macmillan.com/books/9780374533557/thinkingfastandslow/' },
]

function EditorialImageFrame({
  imageSrc,
  altText,
  icon: Icon,
  colorA,
  colorB,
  label,
  source,
  sourceUrl,
  floatSide = 'right',
}: {
  imageSrc: string
  altText: string
  icon: LucideIcon
  colorA: string
  colorB: string
  label: string
  source: string
  sourceUrl: string
  floatSide?: 'right' | 'left'
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className={`relative p-3 bg-white border-2 rounded-[32px] shadow-lg overflow-hidden group mb-6 ${
        floatSide === 'left' ? 'dp-editorial-wrap-left' : 'dp-editorial-wrap-right'
      }`}
      style={{ borderColor: hexToRgba(colorA, 0.25) }}
    >
      <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-200">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${hexToRgba(colorA, 0.88)}, ${hexToRgba(colorB, 0.65)})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white">
              <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-2.5 opacity-90" strokeWidth={1.5} />
              <span className="dp-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
            </div>
          </div>
        )}

        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold transition-all hover:bg-black/80"
        >
          <span className="truncate pr-2">{source}</span>
          <ExternalLink className="w-3 h-3 text-rose-300 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Signature Interactive Widget: Manipulative Pressure Detector ───
const DARK_PATTERN_OPTIONS = [
  { id: 'countdown', label: 'Cuenta regresiva que "expira" en minutos', category: 'Urgencia Fabricada', weight: { urgencia: 40, ansiedad: 20, erosion: 15 } },
  { id: 'preselected', label: 'Casilla de suscripción ya tildada por defecto', category: 'Consentimiento Oculto', weight: { friccion: 20, erosion: 35, culpa: 5 } },
  { id: 'hidden_cost', label: 'Costos que aparecen recién en el último paso del pago', category: 'Costo Sorpresa', weight: { friccion: 15, ansiedad: 25, erosion: 15 } },
  { id: 'roach_motel', label: 'Cancelar la cuenta exige 6 pasos; darse de alta, uno solo', category: 'Roach Motel', weight: { friccion: 50, erosion: 25 } },
  { id: 'confirmshaming', label: 'Botón de rechazo: "No, prefiero seguir pagando de más"', category: 'Confirmshaming', weight: { culpa: 45, ansiedad: 10, erosion: 15 } },
  { id: 'streak', label: 'Racha de días que se pierde si no volvés hoy', category: 'Miedo a Perder lo Acumulado', weight: { ansiedad: 35, urgencia: 15, erosion: 10 } },
]

function ManipulativePressureDetector({ closingQuote }: { closingQuote: string }) {
  const [selected, setSelected] = useState<string[]>(['countdown', 'preselected'])

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const scores = selected.reduce(
    (acc, id) => {
      const opt = DARK_PATTERN_OPTIONS.find((o) => o.id === id)
      if (opt) {
        Object.entries(opt.weight).forEach(([key, val]) => {
          acc[key] = (acc[key] || 0) + val
        })
      }
      return acc
    },
    { urgencia: 10, friccion: 10, culpa: 10, ansiedad: 10, erosion: 15 } as Record<string, number>
  )

  const urgenciaPct = Math.min(Math.max(scores.urgencia || 0, 5), 98)
  const friccionPct = Math.min(Math.max(scores.friccion || 0, 5), 98)
  const culpaPct = Math.min(Math.max(scores.culpa || 0, 5), 98)
  const ansiedadPct = Math.min(Math.max(scores.ansiedad || 0, 5), 98)
  const erosionPct = Math.min(Math.max(scores.erosion || 0, 5), 98)

  return (
    <div className="w-full bg-[#170a12] text-white rounded-3xl p-5 sm:p-8 border-2 border-rose-500/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">

        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-orange-400 animate-pulse shrink-0" />
            <h3 className="dp-fraunces font-black text-lg sm:text-xl text-white leading-tight">
              Detector de Presión Manipuladora
            </h3>
          </div>
          <span className="dp-mono text-xs px-3 py-1 rounded-full bg-rose-950 border border-rose-700/50 text-rose-300 font-semibold">
            {selected.length} patrones activos
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Marcá qué elementos de interfaz están presentes en una pantalla imaginaria y mirá cómo suben los indicadores de presión — la misma lógica que usa la FTC para catalogar patrones oscuros:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {DARK_PATTERN_OPTIONS.map((opt) => {
            const active = selected.includes(opt.id)
            return (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  active
                    ? 'bg-rose-950/80 border-rose-500 text-white shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                    active ? 'bg-rose-600 border-rose-400 text-white' : 'border-slate-600 bg-slate-900'
                  }`}
                >
                  {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-mono text-orange-400 font-bold mb-0.5">{opt.category}</span>
                  <span className="text-xs font-semibold leading-snug block">{opt.label}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">
            <span>Índice de Presión de Diseño</span>
            <span className="text-orange-400">Lectura: {selected.length > 2 ? 'Alta' : 'Moderada'}</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Urgencia Fabricada</span>
              <span className="font-mono text-orange-400 font-bold">{urgenciaPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" animate={{ width: `${urgenciaPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Fricción de Salida</span>
              <span className="font-mono text-rose-400 font-bold">{friccionPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-rose-600 to-pink-500 rounded-full" animate={{ width: `${friccionPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Culpa Inducida</span>
              <span className="font-mono text-violet-400 font-bold">{culpaPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-violet-600 to-purple-400 rounded-full" animate={{ width: `${culpaPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Ansiedad por Pérdida</span>
              <span className="font-mono text-amber-400 font-bold">{ansiedadPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" animate={{ width: `${ansiedadPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Erosión de Autonomía</span>
              <span className="font-mono text-pink-400 font-bold">{erosionPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full" animate={{ width: `${erosionPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono italic">
            💡 <strong>Cita clave:</strong> "{closingQuote}"
          </div>
        </div>

      </div>
    </div>
  )
}

export function DisenoPersuasivoPatronesOscurosPage() {
  const data = getLibresSubtopicBySlug('diseno-persuasivo-patrones-oscuros')!
  const reducedMotion = useReducedMotion()

  const { progress, quiz, lightbox } = useLibresSubtopic(data)

  const {
    showQuiz, currentQuestionIdx, selectedAnswers, showResults,
    previousResult, currentQuestion, isLastQuestion, canContinue, finalScore, passed,
    startQuiz, handleSelect, handleNext, handlePrev,
  } = quiz

  const {
    lightboxOpen, setLightboxOpen, zoom, pan, isDragging, lightboxAreaRef,
    closeLightbox, zoomIn, zoomOut, resetZoom, onMouseDown, onMouseMove, onMouseUp,
  } = lightbox

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fadeUp = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

  if (!data) return null

  return (
    <>
      <style>{STYLES}</style>

      <Navbar />

      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-rose-600 via-orange-500 to-violet-600 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">

        {/* ══ 1 HERO SECTION ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute pointer-events-none" style={{ animation: 'dpFloat1 22s ease-in-out infinite', top: '-10%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(219,39,119,.12) 0%, transparent 65%)', filter: 'blur(90px)' }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                  // {data.category}
                </span>
                <span className="dp-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                  Arquitectura de la Elección
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={spring}
                className="dp-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#170a12] leading-[1.08]"
              >
                {data.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={spring}
                className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold leading-relaxed"
              >
                {data.description}
              </motion.p>

              <motion.div variants={fadeUp} transition={spring} className="pt-2">
                <span className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-3">
                  Marcos teóricos y autores citados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.authors.map((author) => (
                    <span
                      key={author}
                      className="px-3.5 py-1.5 rounded-full text-xs font-black bg-rose-50 text-rose-900 border border-rose-200 shadow-sm"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                <a href="#contenido" className="dp-cyber-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                  Explorar la clase completa <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#evaluacion" className="dp-cyber-btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base">
                  Ir a la evaluación <MousePointerClick className="w-5 h-5 text-rose-600" />
                </a>
              </motion.div>

            </motion.div>

            <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <EditorialImageFrame
                imageSrc="/img/tematicas/diseno-persuasivo-patrones-oscuros/hero.webp"
                altText="Diseño persuasivo y patrones oscuros"
                icon={MousePointerClick}
                colorA={ROSE}
                colorB={AMBER}
                label="Arquitectura de la Elección"
                source="Harry Brignull · Deceptive Patterns"
                sourceUrl="https://deceptive.design/about-us/dr-harry-brignull/"
                floatSide="right"
              />
            </motion.div>

          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN TEÓRICA + WIDGET ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

              <motion.div variants={fadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-rose-600 rounded-full" />
                <h2 className="dp-fraunces text-2xl sm:text-3xl font-black text-[#170a12]">Introducción — La influencia que no da órdenes</h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>

              <motion.div variants={fadeUp} transition={spring} className="my-8">
                <ManipulativePressureDetector closingQuote={data.closingQuote} />
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS CON WRAP EDITORIAL DE IMAGEN ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            {data.sections.map((sec, i) => {
              const visual = SECTION_VISUALS[i] || {
                imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/hero.webp',
                icon: Ban,
                label: sec.heading,
                source: 'Referencia Teórica',
                sourceUrl: 'https://josefarhat.com',
              }
              const isEven = i % 2 === 0
              const accentColor = i % 3 === 0 ? ROSE : i % 3 === 1 ? AMBER : VIOLET
              const accentText = i % 3 === 0 ? ROSE_TEXT : i % 3 === 1 ? AMBER_TEXT : VIOLET_TEXT

              return (
                <motion.article
                  key={sec.heading}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={stagger}
                  className="relative overflow-hidden"
                >
                  <EditorialImageFrame
                    imageSrc={visual.imageSrc}
                    altText={sec.heading}
                    icon={visual.icon}
                    colorA={accentColor}
                    colorB={isEven ? AMBER : VIOLET}
                    label={visual.label}
                    source={visual.source}
                    sourceUrl={visual.sourceUrl}
                    floatSide={isEven ? 'right' : 'left'}
                  />

                  <div className="space-y-6">
                    <span className="dp-mono text-xs font-extrabold uppercase tracking-widest" style={{ color: accentText }}>
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2 className="dp-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#170a12] leading-tight">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-rose-50/80 border-l-4 text-slate-900 font-bold italic text-base sm:text-lg" style={{ borderLeftColor: accentColor }}>
                        <Quote className="w-6 h-6 mb-2" style={{ color: accentText }} />
                        "{sec.quote}"
                      </blockquote>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* ══ 4 CASO DE ESTUDIO ══ */}
        {data.caseStudy && (
          <section id="caso" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#170a12] text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">

                <div className="flex items-center gap-3">
                  <FolderLock className="w-6 h-6 text-orange-400" />
                  <span className="dp-mono text-xs font-bold uppercase tracking-widest text-orange-400">
                    {data.caseStudy.label}
                  </span>
                </div>

                <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-white">
                  {data.caseStudy.title}
                </h2>

                <p className="text-slate-200 text-base sm:text-lg md:text-xl font-extrabold leading-relaxed bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                  {data.caseStudy.description}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Fuente de verificación oficial: FTC — Epic Games Settlement ($245M Refund Order).</span>
                  <a
                    href="https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 font-bold hover:underline"
                  >
                    Comunicado oficial FTC ↗
                  </a>
                </div>

              </motion.div>
            </div>
          </section>
        )}

        {/* ══ 5 CITA DE CIERRE ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#170a12] to-[#3B0A2A] text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <DoorClosed className="w-12 h-12 text-orange-400 mx-auto opacity-80" />
            <h2 className="dp-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">
              "{data.closingQuote}"
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ 6 MATERIAL DE ESTUDIO (se activa cuando lleguen los assets) ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">

              <div className="text-center space-y-3">
                <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Material pedagógico y recursos
                </span>
                <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">
                  Presentación en Slides e Infografía Visual
                </h2>
              </div>

              {data.pdfUrl && (
                <div className="space-y-4">
                  <h3 className="dp-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" /> Presentación interactiva (15 Diapositivas en WebP)
                  </h3>
                  <div className="w-full max-w-4xl mx-auto">
                    <WebpSlideCarousel
                      totalSlides={15}
                      slidesBasePath="/img/tematicas/diseno-persuasivo-patrones-oscuros/slides"
                      pdfDownloadUrl={data.pdfUrl}
                      title={data.title}
                      color={ROSE}
                    />
                  </div>
                </div>
              )}

              {data.infografiaUrl && (
                <div className="space-y-4">
                  <h3 className="dp-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Images className="w-5 h-5 text-orange-600" /> Infografía sintetizada
                  </h3>
                  <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 border-2 border-slate-200 flex justify-center items-center p-3 sm:p-6 min-h-[60vh]"
                    onClick={() => setLightboxOpen(true)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.infografiaUrl}
                      alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
                      className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-slate-900 font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-2xl">
                        <ZoomIn className="w-5 h-5 text-rose-600" /> Ver a pantalla completa (Zoom & Pan)
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ══ 7 FUENTES ACADÉMICAS Y OFICIALES VERIFICADAS ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-rose-600 shrink-0" />
                <h2 className="dp-fraunces text-2xl sm:text-3xl font-black text-[#170a12]">
                  Fuentes Oficiales, Datos y Citas Verificables
                </h2>
              </div>
              <span className="dp-mono text-xs font-bold text-slate-600 bg-slate-200/80 px-3 py-1 rounded-full">
                {ACADEMIC_CITATIONS.length} Citas Académicas & Legales
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACADEMIC_CITATIONS.map((cite) => (
                <a
                  key={cite.title}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-500 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="dp-mono text-xs font-bold text-rose-600 block">{cite.author}</span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-rose-600 transition-colors">
                      {cite.title}
                    </h4>
                    <span className="text-xs text-slate-500 block">{cite.publication}</span>
                  </div>

                  {cite.stat && (
                    <div className="px-3 py-1.5 rounded-lg bg-rose-50/80 text-rose-950 font-mono text-xs font-extrabold border border-rose-200/60">
                      📊 {cite.stat}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                    <span className="truncate pr-2">{cite.topic}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8 EVALUACIÓN INTERACTIVA (QUIZ) ══ */}
        <section id="evaluacion" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto">

            <div className="text-center space-y-3 mb-10">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Autoevaluación interactiva
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-4xl font-black text-[#170a12]">
                Cuestionario de Comprensión
              </h2>
              {previousResult && (
                <p className="dp-mono text-xs font-bold text-slate-500">
                  Último intento: {previousResult.score}/10
                </p>
              )}
            </div>

            {!showQuiz && (
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 shadow-xl space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl mx-auto flex items-center justify-center bg-rose-50 border-2 border-rose-200">
                  <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600" />
                </div>
                <p className="text-slate-800 font-extrabold text-base sm:text-lg max-w-md mx-auto">
                  {data.quizQuestions.length} preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla.
                </p>
                <button
                  onClick={startQuiz}
                  className="dp-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  {previousResult ? 'Volver a hacer el quiz' : 'Comenzar evaluación'} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {showQuiz && !showResults && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">

                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="dp-mono text-xs font-bold text-rose-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="dp-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx

                    let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-rose-50 hover:border-rose-300'
                    if (isSelected) {
                      btnClass = 'bg-rose-600 border-rose-600 text-white font-bold shadow-md'
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIdx === 0}
                    className="px-5 py-2.5 rounded-full text-xs font-black border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="dp-cyber-btn px-6 py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>

              </div>
            )}

            {showQuiz && showResults && (
              <div className="bg-[#170a12] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-orange-400 mx-auto" />
                <h3 className="dp-fraunces text-2xl sm:text-3xl font-black">
                  {passed ? '¡Completaste esta temática!' : 'Todavía no llegaste al puntaje mínimo'}
                </h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-orange-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button
                  onClick={startQuiz}
                  className="dp-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5" /> Volver a intentar
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      {/* ══ LIGHTBOX INFOGRAFÍA ══ */}
      {data.infografiaUrl && lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <button onClick={zoomIn} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomIn className="w-5 h-5" />
            </button>
            <button onClick={zoomOut} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomOut className="w-5 h-5" />
            </button>
            <button onClick={resetZoom} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button onClick={closeLightbox} className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={lightboxAreaRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.infografiaUrl}
              alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
              className="max-w-full max-h-full object-contain select-none transition-transform duration-100"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* ══ FLOATING SCROLL TO TOP BUTTON ══ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-2xl border border-rose-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
