'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Flame,
  HelpCircle,
  Hexagon,
  Images,
  Maximize2,
  MousePointerClick,
  Quote,
  RotateCcw,
  ScanEye,
  Sparkles,
  Users,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { LIBRES_BAJO_INFLUENCIA_DATA, type LibresIconName, type LibresSubtopicContent } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'

// react-pdf usa APIs de navegador (canvas, DOMMatrix) — no puede renderizar
// en el servidor.
const PdfViewer = dynamic(() => import('@/components/tematicas/PdfViewer').then((m) => m.PdfViewer), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-[#d3e2f0] bg-white p-16 text-center text-slate-400 text-sm">
      Cargando visor…
    </div>
  ),
})

// Los page.tsx son server components (exportan `metadata`) y no pueden pasar
// un componente de ícono como prop a este client component — RSC no
// serializa funciones. Por eso el dato tipado guarda solo el nombre y acá
// se resuelve al componente real.
const ICONS: Record<LibresIconName, LucideIcon> = {
  Users,
  ScanEye,
  MousePointerClick,
  Flame,
  Compass,
  Hexagon,
}

interface Props {
  data: LibresSubtopicContent
  groupLabel: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const RING_RADIUS = 40
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export function LibresBajoInfluenciaTemplate({ data, groupLabel }: Props) {
  const Icon = ICONS[data.iconName]
  const { quiz, lightbox } = useLibresSubtopic(data)
  const {
    showQuiz, currentQuestionIdx, selectedAnswers, showResults,
    previousResult, currentQuestion, isLastQuestion, canContinue, finalScore, passed,
    startQuiz, handleSelect, handleNext, handlePrev,
  } = quiz
  const {
    lightboxOpen, setLightboxOpen, zoom, pan, isDragging, lightboxAreaRef,
    closeLightbox, zoomIn, zoomOut, resetZoom, onMouseDown, onMouseMove, onMouseUp,
  } = lightbox

  // Ficha del módulo — progreso en vivo (ring) a partir del último intento guardado.
  const progressPct = previousResult ? Math.min(100, Math.round((previousResult.score / 10) * 100)) : 0
  const ringOffset = RING_CIRCUMFERENCE - (progressPct / 100) * RING_CIRCUMFERENCE

  const wordCount = [
    data.intro,
    ...data.sections.flatMap((s) => s.paragraphs),
    data.caseStudy?.description ?? '',
  ].join(' ').split(/\s+/).length
  const readingMinutes = Math.max(1, Math.round(wordCount / 200))

  const siblingTopics = LIBRES_BAJO_INFLUENCIA_DATA.filter((t) => t.slug !== data.slug)

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mesh-shift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes blob-drift { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(24px,-18px) scale(1.08); } 66% { transform: translate(-16px,22px) scale(0.95); } }
        @keyframes float-card { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.35; } 50% { opacity: 0.75; } }
        @keyframes scan { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 0.3; } 90% { opacity: 0.3; } 100% { transform: translateY(100%); opacity: 0; } }
        .libres-mesh { animation: mesh-shift 16s ease infinite; background-size: 400% 400%; }
        .libres-blob { animation: blob-drift 13s ease-in-out infinite; }
        .libres-blob-rev { animation: blob-drift 17s ease-in-out infinite reverse; }
        .libres-float { animation: float-card 6s ease-in-out infinite; }
        .libres-float-b { animation: float-card 8s ease-in-out infinite 1.5s; }
        .libres-glow { animation: glow-pulse 3.5s ease-in-out infinite; }
        .libres-scan { animation: scan 5s linear infinite; }
        .libres-glass { background: rgba(255,255,255,0.72); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .libres-dots { background-image: radial-gradient(circle, rgba(0,50,87,0.14) 1px, transparent 1px); background-size: 26px 26px; }
        @media (prefers-reduced-motion: reduce) {
          .libres-mesh, .libres-blob, .libres-blob-rev, .libres-float, .libres-float-b, .libres-glow, .libres-scan { animation: none !important; }
        }
      `}} />

      <Navbar />

      {/* ══ HERO — a pantalla completa ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 libres-mesh"
          style={{ background: `linear-gradient(-45deg, #EEF4FB, ${hexToRgba(data.color, 0.14)}, #fdf2f8, #EEF4FB)` }}
        />
        <div className="absolute inset-0 libres-dots opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1/2 libres-scan pointer-events-none" style={{ background: `linear-gradient(to bottom, transparent, ${hexToRgba(data.color, 0.08)}, transparent)` }} />

        <div className="libres-blob absolute top-[-14%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none" style={{ background: hexToRgba(data.color, 0.24) }} />
        <div className="libres-blob-rev absolute bottom-[-16%] right-[-10%] w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(213,36,122,0.16)' }} />
        <div className="libres-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] rounded-full bg-white/80 blur-[90px] pointer-events-none" />

        <div className="libres-float absolute top-[18%] right-[6%] w-24 h-24 rounded-3xl border bg-white/30 backdrop-blur-sm hidden xl:block" style={{ borderColor: hexToRgba(data.color, 0.35) }} />
        <div className="libres-float-b absolute bottom-[24%] left-[5%] w-16 h-16 rounded-2xl border border-brand-pink/20 bg-white/20 backdrop-blur-sm hidden xl:block" />
        <div className="libres-float absolute top-[55%] right-[20%] w-8 h-8 rounded-xl hidden xl:block" style={{ background: hexToRgba(data.color, 0.12), animationDelay: '1s' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-center">

            {/* Texto principal */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-7">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full libres-glass border text-xs font-bold shadow-sm" style={{ borderColor: hexToRgba(data.color, 0.3), color: data.color }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: data.color }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: data.color }} />
                  </span>
                  {groupLabel}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/70 border border-slate-200 text-brand-navy text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: data.color }} />
                  {data.category}
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-navy leading-[1.03] tracking-tight">
                {data.title}
                <span className="block relative w-fit mt-1">
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 400 6" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 3 Q100 0 200 3 Q300 6 400 3" stroke={`url(#libres-underline-${data.slug})`} strokeWidth="3" fill="none" strokeLinecap="round" />
                    <defs>
                      <linearGradient id={`libres-underline-${data.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={data.color} />
                        <stop offset="100%" stopColor="#4272BB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
                {data.description}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a
                  href="#contenido"
                  className="group px-7 py-3.5 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  style={{ background: `linear-gradient(135deg, #003257, ${data.color})`, boxShadow: `0 12px 30px ${hexToRgba(data.color, 0.25)}` }}
                >
                  Empezar a leer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#evaluacion"
                  className="px-7 py-3.5 rounded-full font-bold text-brand-navy libres-glass border border-slate-200 hover:shadow-md transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  Ir a la evaluación
                </a>
              </motion.div>

              {data.authors.length > 0 && (
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
                  {data.authors.map((author) => (
                    <span key={author} className="px-3.5 py-1.5 rounded-full bg-white/70 border border-slate-200 text-brand-navy/70 text-xs font-semibold">
                      {author}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Ficha del módulo — progreso real + índice de lectura */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="rounded-[28px] p-[1.5px]" style={{ background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.55)}, rgba(66,114,187,0.35))` }}>
                <div className="rounded-[26px] libres-glass p-7 shadow-2xl shadow-slate-200/60">
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-200/70">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md shrink-0" style={{ background: `linear-gradient(135deg, #003257, ${data.color})` }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-brand-navy text-sm truncate">{data.title}</p>
                      <p className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readingMinutes} min de lectura
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <svg width="72" height="72" viewBox="0 0 96 96" className="shrink-0 -rotate-90">
                      <circle cx="48" cy="48" r={RING_RADIUS} fill="none" stroke="#EEF4FB" strokeWidth="8" />
                      <circle
                        cx="48" cy="48" r={RING_RADIUS} fill="none" stroke={data.color} strokeWidth="8" strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={ringOffset}
                        style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                      />
                    </svg>
                    <div>
                      <p className="text-2xl font-black text-brand-navy leading-none">{previousResult ? `${progressPct}%` : '—'}</p>
                      <p className="text-xs text-slate-400 font-semibold mt-1">
                        {previousResult ? `Último intento: ${previousResult.score}/10` : 'Evaluación sin iniciar'}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">En este módulo</p>
                  <nav className="flex flex-col gap-0.5">
                    <a href="#contenido" className="group flex items-center gap-2.5 py-1.5 text-sm text-slate-500 hover:text-brand-navy transition-colors">
                      <span className="text-[11px] font-mono w-5 shrink-0" style={{ color: data.color }}>00</span>
                      <span className="truncate">Introducción</span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                    {data.sections.map((section, i) => (
                      <a key={section.heading} href={`#seccion-${i}`} className="group flex items-center gap-2.5 py-1.5 text-sm text-slate-500 hover:text-brand-navy transition-colors">
                        <span className="text-[11px] font-mono w-5 shrink-0" style={{ color: data.color }}>{String(i + 1).padStart(2, '0')}</span>
                        <span className="truncate">{section.heading}</span>
                        <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    ))}
                    {(data.pdfUrl || data.infografiaUrl) && (
                      <a href="#material" className="group flex items-center gap-2.5 py-1.5 text-sm text-slate-500 hover:text-brand-navy transition-colors">
                        <FileText className="w-3.5 h-3.5 shrink-0" style={{ color: data.color }} />
                        <span className="truncate">Material de estudio</span>
                        <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    )}
                    <a href="#evaluacion" className="group flex items-center gap-2.5 py-1.5 text-sm text-slate-500 hover:text-brand-navy transition-colors">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0" style={{ color: data.color }} />
                      <span className="truncate">Evaluación</span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="hidden md:flex justify-center mt-14">
            <a href="#contenido" className="flex flex-col items-center gap-2 text-slate-400 hover:text-brand-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue rounded-full">
              <span className="text-[11px] font-semibold uppercase tracking-widest">Desplazate</span>
              <ChevronRight className="w-4 h-4 rotate-90 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ Introducción ═════════════════════════════════════════════════════ */}
      <section id="contenido" className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-brand-blue font-semibold text-xs uppercase tracking-widest mb-4">
              <BookOpen className="w-4 h-4" />
              Introducción
            </div>
            <p className="text-brand-navy text-lg md:text-xl leading-relaxed font-medium">{data.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* ══ Secciones de lectura — bandas alternadas ═══════════════════════ */}
      {data.sections.map((section, i) => (
        <section
          key={section.heading}
          id={`seccion-${i}`}
          className="relative py-16 md:py-24"
          style={{ background: i % 2 === 1 ? hexToRgba(data.color, 0.035) : 'transparent' }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-4xl md:text-5xl font-display font-black leading-none select-none shrink-0" style={{ color: hexToRgba(data.color, 0.28) }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy leading-tight">{section.heading}</h2>
              </div>
              <div className="space-y-4">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-slate-600 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              {section.quote && (
                <div
                  className="mt-6 rounded-2xl p-6 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.07)}, rgba(255,255,255,0.5))`,
                    borderLeft: `4px solid ${data.color}`,
                  }}
                >
                  <Quote className="w-5 h-5 mb-2" style={{ color: data.color }} />
                  <p className="text-brand-navy font-semibold italic text-base md:text-lg leading-relaxed">{section.quote}</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ══ Caso para pensar ════════════════════════════════════════════════ */}
      {data.caseStudy && (
        <section id="caso" className="relative py-20 md:py-24 overflow-hidden" style={{ background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.08)}, rgba(66,114,187,0.05))` }}>
          <div className="absolute inset-0 libres-dots opacity-40 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="rounded-[28px] p-[1.5px]" style={{ background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.4)}, rgba(66,114,187,0.3))` }}>
                <div className="rounded-[26px] libres-glass p-8 md:p-10 shadow-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest" style={{ background: hexToRgba(data.color, 0.12), color: data.color }}>
                    <BookOpen className="w-3.5 h-3.5" />
                    {data.caseStudy.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">{data.caseStudy.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">{data.caseStudy.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══ Cita de cierre ══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, #003257, ${data.color})` }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-3xl mx-auto px-6 relative text-center text-white">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Quote className="w-8 h-8 mx-auto mb-4 text-white/60" />
            <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed">{data.closingQuote}</p>
          </motion.div>
        </div>
      </section>

      {/* ══ Material de estudio: PDF + infografía ═══════════════════════════ */}
      {(data.pdfUrl || data.infografiaUrl) && (
        <section id="material" className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest" style={{ background: hexToRgba(data.color, 0.1), color: data.color }}>
                <FileText className="w-3.5 h-3.5" />
                Material de estudio
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-brand-navy">Presentación e infografía</h2>
            </motion.div>

            <div className={`grid grid-cols-1 gap-8 items-start ${data.pdfUrl && data.infografiaUrl ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
              {data.pdfUrl && (
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <p className="flex items-center gap-2 text-brand-navy font-bold text-sm mb-3">
                    <FileText className="w-4 h-4" style={{ color: data.color }} />
                    Presentación
                  </p>
                  <PdfViewer file={data.pdfUrl} label={data.pdfLabel ?? data.title} color={data.color} />
                </motion.div>
              )}

              {data.infografiaUrl && (
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <p className="flex items-center gap-2 text-brand-navy font-bold text-sm mb-3">
                    <Images className="w-4 h-4" style={{ color: data.color }} />
                    Infografía
                  </p>
                  <div className="relative rounded-2xl overflow-hidden border border-[#d3e2f0] shadow-sm">
                    <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: `linear-gradient(135deg, #003257, ${data.color})` }}>
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse shrink-0" />
                          <span className="text-xs text-white/60 font-mono truncate">infografía — {data.title}</span>
                        </div>
                      </div>
                      <div className="w-16 shrink-0" />
                    </div>
                    <div className="bg-white">
                      <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                        <img
                          src={data.infografiaUrl}
                          alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                        <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-xl border border-slate-200/50">
                            <ZoomIn className="w-4 h-4" />
                            Ver a pantalla completa
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══ Evaluación ═══════════════════════════════════════════════════════ */}
      <section id="evaluacion" className="relative py-20 md:py-28 overflow-hidden" style={{ background: hexToRgba(data.color, 0.045) }}>
        <div className="absolute inset-0 libres-dots opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">

          {!showQuiz && (
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="rounded-[28px] p-[1.5px]" style={{ background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.4)}, rgba(66,114,187,0.3))` }}>
                <div className="rounded-[26px] libres-glass p-8 md:p-14 text-center shadow-xl">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-md" style={{ background: `linear-gradient(135deg, #003257, ${data.color})` }}>
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-2">Evaluación</h2>
                  <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                    {data.quizQuestions.length} preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla.
                  </p>

                  {previousResult && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 ${previousResult.score >= 8 ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                      {previousResult.score >= 8 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <RotateCcw className="w-3.5 h-3.5" />}
                      Último intento: {previousResult.score}/10
                    </div>
                  )}

                  <button
                    onClick={startQuiz}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    style={{ background: `linear-gradient(135deg, #003257, ${data.color})`, boxShadow: `0 10px 26px ${hexToRgba(data.color, 0.28)}` }}
                  >
                    {previousResult ? 'Volver a hacer el quiz' : 'Comenzar evaluación'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {showQuiz && !showResults && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
              <div className="rounded-[28px] p-[1.5px]" style={{ background: `linear-gradient(135deg, ${hexToRgba(data.color, 0.4)}, rgba(66,114,187,0.3))` }}>
                <div className="rounded-[26px] libres-glass overflow-hidden shadow-2xl">
                  <div className="px-6 py-5" style={{ background: '#003257' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-white/70" />
                        <h2 className="text-white font-bold text-sm">Evaluación</h2>
                      </div>
                      <span className="text-white/70 text-xs font-mono">{currentQuestionIdx + 1}/{data.quizQuestions.length}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: data.color }}
                        initial={false}
                        animate={{ width: `${((currentQuestionIdx + 1) / data.quizQuestions.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 md:p-10">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Pregunta {currentQuestionIdx + 1}</p>
                    <h3 className="text-lg md:text-xl font-black text-brand-navy leading-tight mb-6">{currentQuestion.question}</h3>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option, idx) => {
                        const isSelected = selectedAnswers[currentQuestionIdx] === idx
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelect(idx)}
                            className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                              isSelected ? 'bg-[#EEF4FB]' : 'border-[#d3e2f0] hover:border-brand-blue/50 bg-white'
                            }`}
                            style={isSelected ? { borderColor: data.color } : {}}
                          >
                            <div
                              className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                              style={isSelected ? { borderColor: data.color, backgroundColor: data.color } : {}}
                            >
                              {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                            </div>
                            <span className="text-sm md:text-base font-semibold text-brand-navy/90">{option}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="px-5 sm:px-8 pb-6 sm:pb-10 flex items-center justify-between">
                    <button
                      onClick={handlePrev}
                      disabled={currentQuestionIdx === 0}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${currentQuestionIdx === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:text-brand-navy'}`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Anterior
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!canContinue}
                      className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-sm transition-all shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                        canContinue ? 'text-white hover:opacity-90' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                      style={canContinue ? { background: `linear-gradient(135deg, #003257, ${data.color})` } : {}}
                    >
                      {isLastQuestion ? 'Finalizar evaluación' : 'Siguiente pregunta'}
                      {isLastQuestion ? <CheckCircle2 className="w-4 h-4 ml-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {showQuiz && showResults && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="rounded-[28px] p-[1.5px]" style={{ background: passed ? 'linear-gradient(135deg, #10b981, #34d399)' : `linear-gradient(135deg, ${hexToRgba(data.color, 0.4)}, rgba(66,114,187,0.3))` }}>
                <div className="rounded-[26px] libres-glass p-8 md:p-14 text-center shadow-2xl">
                  <svg width="96" height="96" viewBox="0 0 96 96" className="mx-auto mb-4 -rotate-90">
                    <circle cx="48" cy="48" r={RING_RADIUS} fill="none" stroke="#EEF4FB" strokeWidth="8" />
                    <circle
                      cx="48" cy="48" r={RING_RADIUS} fill="none" strokeWidth="8" strokeLinecap="round"
                      stroke={passed ? '#10b981' : data.color}
                      strokeDasharray={RING_CIRCUMFERENCE}
                      strokeDashoffset={RING_CIRCUMFERENCE - (finalScore / 10) * RING_CIRCUMFERENCE}
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <p className="text-4xl font-black text-brand-navy mb-2">{finalScore}/10</p>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                    {passed ? '¡Completaste esta temática!' : 'Todavía no llegaste al puntaje mínimo'}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto">
                    {passed
                      ? 'Tu progreso quedó guardado. Podés repasar el contenido cuando quieras.'
                      : 'Necesitás 8/10 respuestas correctas. Repasá el contenido y volvé a intentar cuando quieras.'}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={startQuiz}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                      style={{ background: `linear-gradient(135deg, #003257, ${data.color})` }}
                    >
                      <RotateCcw className="w-4 h-4" />
                      Volver a hacer el quiz
                    </button>
                    {!passed && (
                      <a
                        href="#contenido"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-brand-navy border border-slate-200 hover:shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                      >
                        <BookOpen className="w-4 h-4" />
                        Repasar contenido
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══ Seguir explorando el kit ═════════════════════════════════════════ */}
      {siblingTopics.length > 0 && (
        <section className="relative py-16 md:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{groupLabel}</p>
              <h2 className="text-xl md:text-2xl font-display font-bold text-brand-navy">Seguir explorando el kit</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory">
              {siblingTopics.map((topic) => {
                const SiblingIcon = ICONS[topic.iconName]
                return (
                  <Link
                    key={topic.slug}
                    href={`/tematicas/${topic.slug}`}
                    className="group snap-start shrink-0 w-64 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: hexToRgba(topic.color, 0.12) }}>
                      <SiblingIcon className="w-5 h-5" style={{ color: topic.color }} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: topic.color }}>{topic.category}</p>
                    <p className="font-display font-bold text-brand-navy text-sm leading-snug group-hover:underline">{topic.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {data.infografiaUrl && (
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
                    src={data.infografiaUrl}
                    alt={data.infografiaAlt ? `${data.infografiaAlt} — pantalla completa` : `Infografía de ${data.title} — pantalla completa`}
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
      )}
    </main>
  )
}
