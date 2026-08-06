'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  FolderLock,
  Globe,
  GraduationCap,
  HelpCircle,
  Images,
  Layers,
  Lock,
  Maximize2,
  MousePointer,
  Network,
  Quote,
  Radio,
  RotateCcw,
  ScanEye,
  Search,
  Shield,
  Sparkles,
  Target,
  UserCheck,
  UserRound,
  Users,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'
import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Color Tokens for Algoritmos y Perfilado ───
const BLUE = '#2563EB'
const BLUE_TEXT = '#1E40AF'
const CYAN = '#0284C7'
const CYAN_TEXT = '#0369A1'
const VIOLET = '#7C3AED'
const VIOLET_TEXT = '#6D28D9'
const AMBER = '#D97706'
const AMBER_TEXT = '#B45309'
const EMERALD = '#059669'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --ap-blue: #2563EB;
    --ap-blue-glow: rgba(37, 99, 235, 0.4);
    --ap-cyan: #0284C7;
    --ap-cyan-glow: rgba(2, 132, 199, 0.4);
    --ap-violet: #7C3AED;
    --ap-violet-glow: rgba(124, 58, 237, 0.4);
    --ap-amber: #D97706;
    --ap-amber-glow: rgba(217, 119, 6, 0.4);
    --ap-dark: #0F172A;
  }

  .ap-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .ap-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .ap-editorial-wrap-right {
      float: right;
      margin-left: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
    .ap-editorial-wrap-left {
      float: left;
      margin-right: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
  }

  @keyframes apFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(35px, -45px) scale(1.08); }
    75% { transform: translate(-25px, 25px) scale(0.96); }
  }
  @keyframes apFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    35% { transform: translate(-45px, -30px) scale(1.12); }
    70% { transform: translate(30px, 35px) scale(0.94); }
  }

  .ap-cyber-badge {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(2, 132, 199, 0.15));
    border: 1px solid rgba(37, 99, 235, 0.3);
    color: #1E40AF;
  }
  .ap-cyber-card {
    border-radius: 28px;
    border: 2px solid rgba(37, 99, 235, 0.18);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px -10px rgba(37, 99, 235, 0.08);
  }
  .ap-cyber-card:hover {
    border-color: rgba(37, 99, 235, 0.45);
    box-shadow: 0 20px 40px -15px rgba(37, 99, 235, 0.18);
    transform: translateY(-3px);
  }
  .ap-cyber-card-amber {
    border-radius: 28px;
    border: 2px solid rgba(217, 119, 6, 0.22);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px -10px rgba(217, 119, 6, 0.08);
  }
  .ap-cyber-btn {
    background: linear-gradient(135deg, #2563EB, #0284C7);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
    transition: all 0.25s ease;
  }
  .ap-cyber-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.55);
  }
`

const ACADEMIC_CITATIONS = [
  {
    author: 'Shoshana Zuboff (2019)',
    title: 'The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power',
    publication: 'PublicAffairs / Hachette Book Group',
    url: 'https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/',
    topic: 'Capitalismo de vigilancia y productos de predicción del comportamiento',
    stat: 'Modelos predictivos que transforman datos en mercancía',
  },
  {
    author: 'Federal Trade Commission (FTC, 2019)',
    title: 'FTC Imposes $5 Billion Penalty and Sweeping New Privacy Restrictions on Facebook',
    publication: 'Comisión Federal de Comercio de EE.UU. (FTC Official Release)',
    url: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook',
    topic: 'Caso Cambridge Analytica: obtención engañosa de datos y perfilado político',
    stat: 'Sanción oficial de $5,000,000,000 USD (87M de usuarios afectados)',
  },
  {
    author: 'Pew Research Center (2023)',
    title: 'How Americans View Data Privacy',
    publication: 'Pew Research Center Internet & Technology',
    url: 'https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/',
    topic: 'Percepción pública sobre los riesgos de la recolección algorítmica de datos',
    stat: '81% cree que los riesgos de que las empresas recopilen sus datos superan los beneficios',
  },
  {
    author: 'UNICEF (2023)',
    title: 'Checklist de privacidad en línea para padres y madres',
    publication: 'UNICEF (guía elaborada junto a la Agencia Española de Protección de Datos, AEPD)',
    url: 'https://www.unicef.org/chile/checklist-de-privacidad-en-linea-para-padres-y-madres',
    topic: 'Orientaciones oficiales para proteger datos y privacidad de niñas, niños y adolescentes',
    stat: 'Recomendaciones oficiales de UNICEF para el cuidado de datos de la infancia online',
  },
  {
    author: 'Daniel J. Solove (2006)',
    title: 'A Taxonomy of Privacy',
    publication: 'University of Pennsylvania Law Review, Vol. 154',
    url: 'https://repository.law.upenn.edu/Documents/Detail/a-taxonomy-of-privacy/153988',
    topic: 'Taxonomía de la privacidad: recolección, procesamiento y agregación de patrones',
    stat: 'Agregación de patrones de recorrido e inferencia de contexto',
  },
  {
    author: 'Michel Foucault (1975)',
    title: 'Surveiller et punir: Naissance de la prison',
    publication: 'Éditions Gallimard',
    url: 'https://www.gallimard.fr/catalogue/surveiller-et-punir/9782070729685',
    topic: 'Poder disciplinario, norma y efectos de la clasificación social',
    stat: 'Efectos de poder de las categorizaciones institucionales y digitales',
  },
  {
    author: 'Eli Pariser (2011)',
    title: 'The Filter Bubble: What the Internet Is Hiding from You',
    publication: 'Penguin Press',
    url: 'https://www.penguinrandomhouse.com/books/309214/the-filter-bubble-by-eli-pariser/',
    topic: 'Burbujas de filtro y algoritmos de personalización selectiva',
    stat: 'Sesgos de confirmación y aislamiento de visiones diversas',
  },
]

const SECTION_VISUALS = [
  { imageSrc: '/img/tematicas/algoritmos-perfilado/senales_perfil.webp', icon: Database, label: 'De la Señal al Perfil', source: 'Zuboff & Solove', sourceUrl: 'https://scholarship.law.upenn.edu/penn_law_review/vol154/iss3/1/' },
  { imageSrc: '/img/tematicas/algoritmos-perfilado/clasificacion_poder.webp', icon: Layers, label: 'Clasificación y Poder', source: 'Michel Foucault', sourceUrl: 'https://www.gallimard.fr/catalogue/surveiller-et-punir/9782070729685' },
  { imageSrc: '/img/tematicas/algoritmos-perfilado/personalizacion_burbuja.webp', icon: Filter, label: 'Burbuja de Filtros', source: 'Eli Pariser (2011)', sourceUrl: 'https://www.penguinrandomhouse.com/books/309214/the-filter-bubble-by-eli-pariser/' },
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
        floatSide === 'left' ? 'ap-editorial-wrap-left' : 'ap-editorial-wrap-right'
      }`}
      style={{ borderColor: hexToRgba(colorA, 0.25) }}
    >
      <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-200">
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 380px"
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
              <span className="ap-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
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
          <ExternalLink className="w-3 h-3 text-cyan-400 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Signature Interactive Widget: Signal to Profile Inference Simulator ───
const SIGNAL_OPTIONS = [
  { id: 'pause_video', label: 'Detenerse 4s en video sobre rutinas nocturnas', category: 'Atención & Interés', weight: { tech: 15, routine: 40, buy: 10 } },
  { id: 'search_map', label: 'Buscar mapa de ubicación a las 23:00hs', category: 'Patrón Espacial', weight: { spatial: 45, routine: 30, buy: 5 } },
  { id: 'save_recipe', label: 'Guardar publicación de cocina saludable', category: 'Hábitos de Consumo', weight: { health: 40, buy: 20, tech: 5 } },
  { id: 'ignore_ad', label: 'Descartar anuncio de calzado deportivo', category: 'Preferencia de Marca', weight: { buy: -15, tech: 10, health: 5 } },
  { id: 'repeat_audio', label: 'Volver a reproducir audio de podcast de ciencia', category: 'Capital Cultural', weight: { tech: 35, health: 25, routine: 15 } },
  { id: 'comment_post', label: 'Comentar en debate sobre privacidad digital', category: 'Perfil Político / Social', weight: { tech: 40, spatial: 20, routine: 20 } },
]

function SignalInferenceSimulator() {
  const [selectedSignals, setSelectedSignals] = useState<string[]>(['pause_video', 'search_map'])

  function toggleSignal(id: string) {
    setSelectedSignals((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const scores = selectedSignals.reduce(
    (acc, id) => {
      const sig = SIGNAL_OPTIONS.find((s) => s.id === id)
      if (sig) {
        Object.entries(sig.weight).forEach(([key, val]) => {
          acc[key] = (acc[key] || 0) + val
        })
      }
      return acc
    },
    { tech: 20, spatial: 15, routine: 10, health: 10, buy: 15 } as Record<string, number>
  )

  const techPct = Math.min(Math.max(scores.tech || 0, 5), 98)
  const spatialPct = Math.min(Math.max(scores.spatial || 0, 5), 98)
  const routinePct = Math.min(Math.max(scores.routine || 0, 5), 98)
  const healthPct = Math.min(Math.max(scores.health || 0, 5), 98)
  const buyPct = Math.min(Math.max(scores.buy || 0, 5), 98)

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-5 sm:p-8 border-2 border-blue-500/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-cyan-400 animate-pulse shrink-0" />
            <h3 className="ap-fraunces font-black text-lg sm:text-xl text-white leading-tight">
              Simulador de Inferencia Algorítmica
            </h3>
          </div>
          <span className="ap-mono text-xs px-3 py-1 rounded-full bg-blue-950 border border-blue-700/50 text-blue-300 font-semibold">
            {selectedSignals.length} señales activas
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Seleccioná acciones digitales simuladas para observar cómo el algoritmo acumula señales sueltas y construye una <strong>estimación de probabilidad</strong> sobre tu perfil:
        </p>

        {/* Signals Checklist 100% Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {SIGNAL_OPTIONS.map((sig) => {
            const active = selectedSignals.includes(sig.id)
            return (
              <button
                key={sig.id}
                onClick={() => toggleSignal(sig.id)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  active
                    ? 'bg-blue-950/80 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                    active ? 'bg-blue-600 border-blue-400 text-white' : 'border-slate-600 bg-slate-900'
                  }`}
                >
                  {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-mono text-cyan-400 font-bold mb-0.5">{sig.category}</span>
                  <span className="text-xs font-semibold leading-snug block">{sig.label}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Output Inferred Profile Bars */}
        <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">
            <span>Perfil Probabilístico Inferido</span>
            <span className="text-cyan-400">Confianza: {selectedSignals.length > 0 ? 'Alta' : 'Baja'}</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Interés en Tecnología & Privacidad</span>
              <span className="font-mono text-cyan-400 font-bold">{techPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" animate={{ width: `${techPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Patrón de Recorrido & Rutina Espacial</span>
              <span className="font-mono text-blue-400 font-bold">{spatialPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" animate={{ width: `${spatialPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Receptividad a Contenido Nocturno</span>
              <span className="font-mono text-amber-400 font-bold">{routinePct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" animate={{ width: `${routinePct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Afinidad a Estilo de Vida Saludable</span>
              <span className="font-mono text-emerald-400 font-bold">{healthPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" animate={{ width: `${healthPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Intención de Compra</span>
              <span className="font-mono text-pink-400 font-bold">{buyPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full" animate={{ width: `${buyPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono italic">
            💡 <strong>Cita clave (Shoshana Zuboff):</strong> "No adivina el alma. Calcula la probabilidad acumulando acciones."
          </div>
        </div>

      </div>
    </div>
  )
}

export function AlgoritmosPerfiladoPage() {
  const data = getLibresSubtopicBySlug('algoritmos-perfilado')!
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

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">
        
        {/* ══ 1 HERO SECTION ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                <span className="ap-mono ap-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                  // {data.category}
                </span>
                <span className="ap-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                  Modelos de Predicción & Datos
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={spring}
                className="ap-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.08]"
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

              {/* Authors Chips */}
              <motion.div variants={fadeUp} transition={spring} className="pt-2">
                <span className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-3">
                  Marcos teóricos y autores citados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.authors.map((author) => (
                    <span
                      key={author}
                      className="px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-50 text-blue-900 border border-blue-200 shadow-sm"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                <a href="#contenido" className="ap-cyber-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                  Explorar la clase completa <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#material" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base border border-slate-300 hover:bg-slate-100 text-slate-800 transition-all">
                  Material y Slides <BookOpen className="w-5 h-5 text-blue-600" />
                </a>
              </motion.div>

            </motion.div>

            {/* Hero Image / Visual */}
            <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <EditorialImageFrame
                imageSrc="/img/tematicas/algoritmos-perfilado/hero.webp"
                altText="Algoritmos y perfilado de datos"
                icon={ScanEye}
                colorA={BLUE}
                colorB={CYAN}
                label="Capitalismo de Vigilancia"
                source="Shoshana Zuboff (2019)"
                sourceUrl="https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/"
                floatSide="right"
              />
            </motion.div>

          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN TEÓRICA ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
              
              <motion.div variants={fadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-blue-600 rounded-full" />
                <h2 className="ap-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">Introducción — De la acción a la predicción</h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>

              <motion.div variants={fadeUp} transition={spring} className="my-8">
                <SignalInferenceSimulator />
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS CON WRAP EDITORIAL DE IMAGEN ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            {data.sections.map((sec, i) => {
              const visual = SECTION_VISUALS[i] || {
                imageSrc: '/img/tematicas/algoritmos-perfilado/senales_perfil.webp',
                icon: Layers,
                label: sec.heading,
                source: 'Referencia Teórica',
                sourceUrl: 'https://josefarhat.com',
              }
              const isEven = i % 2 === 0

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
                    colorA={isEven ? BLUE : VIOLET}
                    colorB={isEven ? CYAN : AMBER}
                    label={visual.label}
                    source={visual.source}
                    sourceUrl={visual.sourceUrl}
                    floatSide={isEven ? 'right' : 'left'}
                  />

                  <div className="space-y-6">
                    <span className="ap-mono text-xs font-extrabold uppercase tracking-widest text-blue-700">
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2 className="ap-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-900 font-bold italic text-base sm:text-lg">
                        <Quote className="w-6 h-6 text-blue-600 mb-2" />
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
          <section id="caso" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-900 text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
                
                <div className="flex items-center gap-3">
                  <FolderLock className="w-6 h-6 text-amber-400" />
                  <span className="ap-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                    {data.caseStudy.label}
                  </span>
                </div>

                <h2 className="ap-fraunces text-3xl sm:text-5xl font-black text-white">
                  {data.caseStudy.title}
                </h2>

                <p className="text-slate-200 text-base sm:text-lg md:text-xl font-extrabold leading-relaxed bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl">
                  {data.caseStudy.description}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Fuente de verificación oficial: Federal Trade Commission (FTC) Settlement ($5B Penalty).</span>
                  <a
                    href="https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 font-bold hover:underline"
                  >
                    Comunicado oficial FTC ↗
                  </a>
                </div>

              </motion.div>
            </div>
          </section>
        )}

        {/* ══ 5 CITA DE CIERRE Y REFUERZO ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-indigo-950 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Quote className="w-12 h-12 text-cyan-400 mx-auto opacity-80" />
            <h2 className="ap-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">
              "{data.closingQuote}"
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ 6 MATERIAL DE ESTUDIO (CARRUSEL SLIDES WEBP + INFOGRAFÍA WEBP) ══ */}
        <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center space-y-3">
              <span className="ap-mono ap-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Material pedagógico y recursos
              </span>
              <h2 className="ap-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">
                Presentación en Slides e Infografía Visual
              </h2>
            </div>

            {/* Slides Carousel */}
            <div className="space-y-4">
              <h3 className="ap-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" /> Presentación interactiva (15 Diapositivas en WebP)
              </h3>
              <div className="w-full max-w-4xl mx-auto">
                <WebpSlideCarousel
                  totalSlides={15}
                  slidesBasePath="/img/tematicas/algoritmos-perfilado/slides"
                  pdfDownloadUrl="/img/tematicas/algoritmos-perfilado/presentacion.pdf"
                  title={data.title}
                  color={BLUE}
                />
              </div>
            </div>

            {/* Infografía Visual */}
            <div className="space-y-4">
              <h3 className="ap-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                <Images className="w-5 h-5 text-amber-600" /> Infografía sintetizada
              </h3>
              <div
                className="relative rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 border-2 border-slate-200 flex justify-center items-center p-3 sm:p-6 min-h-[60vh]"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src="/img/tematicas/algoritmos-perfilado/infografia.webp"
                  alt="Infografía de Algoritmos y Perfilado"
                  className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-slate-900 font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-2xl">
                    <ZoomIn className="w-5 h-5 text-blue-600" /> Ver a pantalla completa (Zoom & Pan)
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ 7 FUENTES ACADÉMICAS Y VERIFICACIÓN CON DATOS ESTADÍSTICOS ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="ap-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">
                  Fuentes Oficiales, Datos Estadísticos y Citas Verificables
                </h2>
              </div>
              <span className="ap-mono text-xs font-bold text-slate-600 bg-slate-200/80 px-3 py-1 rounded-full">
                7 Citas Académicas & Legales
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACADEMIC_CITATIONS.map((cite) => (
                <a
                  key={cite.title}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="ap-mono text-xs font-bold text-blue-600 block">{cite.author}</span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {cite.title}
                    </h4>
                    <span className="text-xs text-slate-500 block">{cite.publication}</span>
                  </div>
                  
                  {cite.stat && (
                    <div className="px-3 py-1.5 rounded-lg bg-blue-50/80 text-blue-950 font-mono text-xs font-extrabold border border-blue-200/60">
                      📊 {cite.stat}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                    <span className="truncate pr-2">{cite.topic}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
              <span className="ap-mono ap-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Autoevaluación interactiva
              </span>
              <h2 className="ap-fraunces text-3xl sm:text-4xl font-black text-[#0F172A]">
                Cuestionario de Comprensión
              </h2>
            </div>

            {!showResults ? (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="ap-mono text-xs font-bold text-blue-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="ap-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx

                    let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-blue-50 hover:border-blue-300'
                    if (isSelected) {
                      btnClass = 'bg-blue-600 border-blue-600 text-white font-bold shadow-md'
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
                    className="ap-cyber-btn px-6 py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-amber-400 mx-auto" />
                <h3 className="ap-fraunces text-2xl sm:text-3xl font-black">¡Cuestionario Completado!</h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-cyan-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button
                  onClick={startQuiz}
                  className="ap-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5" /> Volver a intentar
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      {/* ══ LIGHTBOX INFOGRAFÍA ══ */}
      {lightboxOpen && (
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
            <img
              src="/img/tematicas/algoritmos-perfilado/infografia.webp"
              alt="Infografía de Algoritmos y Perfilado"
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
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl border border-blue-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
