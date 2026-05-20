"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { ChevronLeft, ChevronRight, Images, X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const INFOGRAFIA_PATH = "/weekly-content/2026-W20/infografia%202.svg"

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) =>
  `/weekly-content/2026-W20/carrusel/${i + 1}.svg`
)

ChartJS.register(ArcElement, Tooltip, Legend)

// ─── Types ────────────────────────────────────────────────────────────────────
type TabId = "paso1" | "paso2" | "paso3"
type FaqId = "faq1" | "faq2" | null

// ─── Static data ──────────────────────────────────────────────────────────────
const TABS: { id: TabId; emoji: string; label: string }[] = [
  { id: "paso1", emoji: "🚀", label: "Fase 1: Lectura Lateral" },
  { id: "paso2", emoji: "🕵️‍♂️", label: "Fase 2: Análisis de Sesgos" },
  { id: "paso3", emoji: "🛡️", label: "Fase 3: Cortafuegos" },
]

const CAFE_CARDS = [
  {
    letter: "C",
    title: "Contexto",
    emoji: "🕰️",
    back: "¿Es información vigente o material reciclado sacado de su eje temporal?",
    from: "from-indigo-500",
    to: "to-blue-600",
    border: "border-indigo-400",
    hover: "group-hover:from-indigo-200 group-hover:to-indigo-300",
    hoverBorder: "group-hover:border-indigo-200",
  },
  {
    letter: "A",
    title: "Autoría",
    emoji: "✍️",
    back: "¿Existe una firma verificable o el emisor se oculta en el anonimato?",
    from: "from-violet-500",
    to: "to-purple-600",
    border: "border-violet-400",
    hover: "group-hover:from-violet-200 group-hover:to-violet-300",
    hoverBorder: "group-hover:border-violet-200",
  },
  {
    letter: "F",
    title: "Fuentes",
    emoji: "🔗",
    back: "¿Se proporcionan enlaces a datos crudos o estudios metodológicos?",
    from: "from-fuchsia-500",
    to: "to-pink-600",
    border: "border-fuchsia-400",
    hover: "group-hover:from-fuchsia-200 group-hover:to-fuchsia-300",
    hoverBorder: "group-hover:border-fuchsia-200",
  },
  {
    letter: "E",
    title: "Emoción",
    emoji: "⚠️",
    back: "¿El titular está diseñado para detonar indignación, miedo o urgencia?",
    from: "from-rose-500",
    to: "to-red-600",
    border: "border-rose-400",
    hover: "group-hover:from-rose-200 group-hover:to-rose-300",
    hoverBorder: "group-hover:border-rose-200",
  },
]

const CHECKLIST_ITEMS = [
  { id: "c1", text: "He analizado el cuerpo completo del documento, excediendo la lectura del titular." },
  { id: "c2", text: 'He contrastado el dominio de origen mediante "Lectura Lateral" en plataformas independientes.' },
  { id: "c3", text: "La fecha de publicación y el contexto original han sido verificados." },
  { id: "c4", text: "El material multimedia ha superado una prueba de búsqueda inversa." },
  { id: "c5", text: "La intención de distribución es objetiva y carece de sesgo emocional impulsivo." },
]

const VULNERABILITIES = [
  {
    emoji: "🪞",
    title: "Sesgo de Confirmación",
    desc: "Aceptar automáticamente información que valida creencias preexistentes, reduciendo el rigor analítico.",
    bg: "bg-rose-50 text-rose-500",
    hover: "group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    emoji: "😇",
    title: 'Efecto "Halo"',
    desc: "Transferir autoridad en temas complejos a emisores populares o carismáticos sin credenciales verificables.",
    bg: "bg-amber-50 text-amber-500",
    hover: "group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    emoji: "🧊",
    title: "Análisis Superficial",
    desc: "Considerar el titular como un resumen fiel, ignorando que su función principal de diseño es generar clicks.",
    bg: "bg-blue-50 text-blue-500",
    hover: "group-hover:bg-blue-500 group-hover:text-white",
  },
]

// ─── Intro Doughnut chart config ───────────────────────────────────────────────
const introChartData = {
  labels: ["Lee solo el título", "Análisis completo (Artículo)"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#f43f5e", "#2dd4bf"],
      hoverBackgroundColor: ["#e11d48", "#14b8a6"],
      borderWidth: 0,
      hoverOffset: 8,
      borderRadius: 4,
    },
  ],
}

const introChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: "circle" as const,
        font: { size: 12, weight: "bold" as const },
        color: "#334155",
      },
    },
    tooltip: {
      backgroundColor: "rgba(15,23,42,0.9)",
      titleFont: { size: 13, weight: "bold" as const },
      bodyFont: { size: 13 },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: (ctx: { parsed: number }) => `  ${ctx.parsed}% de usuarios`,
      },
    },
  },
  cutout: "75%",
  animation: { animateScale: true, animateRotate: true },
} as const

// ─── Gauge helpers ─────────────────────────────────────────────────────────────
function gaugeColor(count: number) {
  if (count === 0) return "#334155"
  if (count < 5) return "#fbbf24"
  return "#34d399"
}

function gaugeMessage(count: number): { text: string; color: string } {
  if (count === 0) return { text: "ESPERANDO INPUT", color: "text-slate-400" }
  if (count < 5) return { text: "PROCESANDO MATRIZ...", color: "text-amber-400" }
  return { text: "SISTEMA AUTORIZADO ✓", color: "text-emerald-400" }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AlfabetizacionMediaticaContent() {
  const [activeTab, setActiveTab] = useState<TabId>("paso1")
  const [openFaq, setOpenFaq] = useState<FaqId>(null)
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)
  const lastTouchDistRef = useRef<number | null>(null)
  const lightboxAreaRef = useRef<HTMLDivElement>(null)
  // Refs that stay in sync so event handlers always read fresh values
  const panRef = useRef({ x: 0, y: 0 })
  const zoomRef = useRef(1)
  useEffect(() => { panRef.current = pan }, [pan])
  useEffect(() => { zoomRef.current = zoom }, [zoom])

  function closeLightbox() {
    setLightboxOpen(false)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  function zoomIn() { setZoom(prev => Math.min(4, parseFloat((prev + 0.5).toFixed(1)))) }
  function zoomOut() {
    setZoom(prev => {
      const next = parseFloat((prev - 0.5).toFixed(1))
      if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
      return next
    })
  }
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }) }

  function onMouseDown(e: React.MouseEvent) {
    if (zoomRef.current <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y }
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !dragStartRef.current) return
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    })
  }
  function onMouseUp() { setIsDragging(false); dragStartRef.current = null }

  // Wheel + touch — non-passive so preventDefault works
  useEffect(() => {
    const el = lightboxAreaRef.current
    if (!el || !lightboxOpen) return

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY < 0 ? 0.3 : -0.3
      setZoom(prev => {
        const next = parseFloat((prev + delta).toFixed(1))
        if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
        return Math.min(4, next)
      })
    }

    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        lastTouchDistRef.current = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
      } else if (e.touches.length === 1) {
        dragStartRef.current = {
          mx: e.touches[0].clientX,
          my: e.touches[0].clientY,
          px: panRef.current.x,
          py: panRef.current.y,
        }
      }
    }

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        const ratio = newDist / lastTouchDistRef.current
        lastTouchDistRef.current = newDist
        setZoom(prev => {
          const next = parseFloat((prev * ratio).toFixed(2))
          if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
          return Math.min(4, next)
        })
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({
          x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx),
          y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my),
        })
      }
    }

    const touchEndHandler = () => {
      dragStartRef.current = null
      lastTouchDistRef.current = null
      setIsDragging(false)
    }

    el.addEventListener("wheel", wheelHandler, { passive: false })
    el.addEventListener("touchstart", touchStartHandler, { passive: false })
    el.addEventListener("touchmove", touchMoveHandler, { passive: false })
    el.addEventListener("touchend", touchEndHandler)
    return () => {
      el.removeEventListener("wheel", wheelHandler)
      el.removeEventListener("touchstart", touchStartHandler)
      el.removeEventListener("touchmove", touchMoveHandler)
      el.removeEventListener("touchend", touchEndHandler)
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen])

  function goTo(index: number, dir: number) {
    setDirection(dir)
    setCurrentSlide(index)
  }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1) }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1) }

  function toggleCheck(id: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const checkedCount = checked.size
  const gaugeData = {
    datasets: [
      {
        data: [checkedCount, 5 - checkedCount],
        backgroundColor: [gaugeColor(checkedCount), "#1e293b"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
        borderRadius: 5,
      },
    ],
  }
  const gaugeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    cutout: "85%",
    animation: { duration: 600 },
  } as const

  const { text: gaugeText, color: gaugeTextColor } = gaugeMessage(checkedCount)

  return (
    <>
      <Navbar />

      {/* Ambient blobs con colores de marca */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="ami-blob bg-brand-blue/20 w-[500px] h-[500px] rounded-full -top-32 -left-32 blur-[100px]" />
        <div className="ami-blob bg-brand-pink/15 w-[600px] h-[600px] rounded-full top-[20%] -right-40 blur-[120px] [animation-delay:-5s]" />
        <div className="ami-blob bg-brand-navy/10 w-[400px] h-[400px] rounded-full bottom-[5%] left-[10%] blur-[80px] [animation-delay:-3s]" />
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />

      <main className="bg-slate-50/80 text-slate-800 antialiased min-h-screen backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 space-y-20 sm:space-y-24">

          {/* ── HERO ───────────────────────────────────────────────────────── */}
          <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="flex h-2 w-2 rounded-full bg-brand-pink animate-pulse shadow-[0_0_8px_#D5247A]" />
                <span className="text-xs font-bold text-brand-navy tracking-widest uppercase">
                  Plataforma AMI
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Optimizá tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue bg-[length:200%_auto] animate-gradient">
                  Filtro de Información
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                La infoxicación satura nuestra capacidad de decisión. Este entorno de entrenamiento de{" "}
                <strong className="text-brand-navy">Alfabetización Mediática</strong> es tu herramienta para
                evaluar, procesar y compartir datos con precisión en la era digital.
              </p>

              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 p-5 sm:p-6 rounded-2xl border-l-4 border-l-brand-blue hover:border-l-brand-pink transition-colors duration-300 group">
                <h3 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-lg">🎯</span> Tu Objetivo Principal
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Instalar un "cortafuegos mental" para neutralizar titulares engañosos y elevar la calidad de
                  la información que consumís y distribuís.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 p-6 sm:p-8 rounded-[2rem] flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-pink/5 pointer-events-none" />
              <div className="text-center mb-4 sm:mb-6 relative z-10">
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                  El Sesgo de Superficialidad
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
                  Interacción promedio frente a un enlace
                </p>
              </div>
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-[240px] sm:h-[280px] lg:h-[320px] z-10">
                <Doughnut data={introChartData} options={introChartOptions} />
              </div>
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100/60 px-4 py-2 rounded-full hover:bg-slate-200/60 transition-colors">
                <span>📊</span> Basado en métricas de consumo digital
              </div>
            </motion.div>
          </section>

          {/* ── INFOGRAFÍA GENERAL ────────────────────────────────────────── */}
          <motion.section
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
          </motion.section>

          {/* ── TRAINING TABS ─────────────────────────────────────────────── */}
          <section id="entrenamiento" className="scroll-mt-20 sm:scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Módulos de Entrenamiento
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Procesá las tres habilidades base. Interactuá con los módulos para desplegar las metodologías.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] p-3 sm:p-6 md:p-8">
              {/* Tab pills */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-1.5 bg-slate-100/60 p-2 rounded-2xl md:rounded-full mb-6 sm:mb-8">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 sm:py-3.5 px-4 sm:px-6 text-center rounded-xl md:rounded-full text-xs sm:text-sm border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-white text-brand-navy border-slate-200/80 font-bold shadow-lg shadow-slate-200/40 -translate-y-0.5"
                          : "bg-transparent text-slate-500 border-transparent font-medium hover:bg-white/80 hover:text-brand-blue hover:border-slate-200/50 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-transform"
                      }`}
                    >
                      <span className="mr-1.5 sm:mr-2">{tab.emoji}</span>
                      <span className="hidden xs:inline">{tab.label}</span>
                      <span className="xs:hidden">{tab.label.split(':')[0]}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab content */}
              <div className="bg-white/50 rounded-[2rem] p-5 sm:p-8 md:p-12 shadow-sm border border-slate-100/50 min-h-[380px] sm:min-h-[420px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "paso1" && (
                    <motion.div
                      key="paso1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-xs rounded-lg mb-3 sm:mb-4">
                        Búsqueda y Filtro
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                        Investigá la Fuente
                      </h3>
                      <p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
                        Desarrollá el hábito de abandonar temporalmente la página de origen para verificar su
                        reputación en ecosistemas externos.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-5 sm:space-y-6">
                          <div>
                            <h4 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-brand-blue">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                              Cuando un contenido capte tu atención,{" "}
                              <strong>no asumas su veracidad por la estética del sitio</strong>. Aplicá
                              "lectura lateral": abrí nuevas pestañas y buscá qué opinan verificadores
                              independientes sobre esa fuente específica.
                            </p>
                          </div>
                          <div className="bg-slate-50/80 border border-slate-200/60 p-4 sm:p-5 rounded-2xl hover:border-brand-blue/30 transition-colors">
                            <h4 className="font-display font-bold text-slate-900 mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic leading-relaxed">
                              "El café destruye tu memoria" (Publicado en SaludTotalHoy). Al investigar en
                              otra pestaña, los resultados indican que es una granja de contenido falso
                              diseñada para generar ingresos por publicidad.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-brand-blue to-brand-navy p-6 sm:p-8 rounded-3xl text-white shadow-xl shadow-brand-blue/20 flex flex-col justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">⚡</span>
                          <h4 className="font-display font-extrabold text-lg sm:text-xl mb-3 sm:mb-4 relative z-10">Laboratorio Práctico</h4>
                          <p className="text-brand-light-blue/90 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Identificá la primera noticia que veas en tus redes. Antes de leerla, abrí una
                            pestaña nueva y buscá el nombre del sitio + "credibilidad".
                          </p>
                          <button className="bg-white text-brand-navy font-bold py-3 px-6 rounded-xl hover:bg-brand-light-blue transition-all duration-300 w-max shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Misión Aceptada
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "paso2" && (
                    <motion.div
                      key="paso2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink font-bold text-xs rounded-lg mb-3 sm:mb-4">
                        Evaluación de Evidencia
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                        El Detector Analítico
                      </h3>
                      <p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
                        Separar rigurosamente los datos empíricos de las afirmaciones emocionales o
                        especulativas.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-5 sm:space-y-6">
                          <div>
                            <h4 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-brand-pink">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                              La desinformación está diseñada para hackear tus emociones. Neutralizala
                              auditando el lenguaje: buscá adjetivos dramáticos y verificá los enlaces
                              salientes. Si afirman "un estudio lo prueba" pero no hay enlace a la fuente
                              primaria, clasificalo como sospechoso.
                            </p>
                          </div>
                          <div className="bg-slate-50/80 border border-slate-200/60 p-4 sm:p-5 rounded-2xl hover:border-brand-pink/30 transition-colors">
                            <h4 className="font-display font-bold text-slate-900 mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic leading-relaxed">
                              Mensaje viral: "¡URGENTE! Ley confisca ahorros hoy". Análisis: Carencia de
                              número de ley, omisión de fechas, lenguaje alarmista. Veredicto: Intento de
                              manipulación emocional.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-brand-pink to-brand-navy p-6 sm:p-8 rounded-3xl text-white shadow-xl shadow-brand-pink/20 flex flex-col justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">🧠</span>
                          <h4 className="font-display font-extrabold text-lg sm:text-xl mb-3 sm:mb-4 relative z-10">Laboratorio Práctico</h4>
                          <p className="text-white/80 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Tomá un mensaje polémico reciente. Aplicá la matriz de 3 puntos: 1. Autoría, 2.
                            Evidencia documentada, 3. Ganancia emocional del emisor.
                          </p>
                          <button className="bg-white text-brand-pink font-bold py-3 px-6 rounded-xl hover:bg-rose-50 transition-all duration-300 w-max shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Aplicar Matriz
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "paso3" && (
                    <motion.div
                      key="paso3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-lg mb-3 sm:mb-4">
                        Consumo Responsable
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
                        El Protocolo Cortafuegos
                      </h3>
                      <p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
                        Asumir responsabilidad algorítmica y detener la propagación de cadenas de datos no
                        verificados.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-5 sm:space-y-6">
                          <div>
                            <h4 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-cyan-500">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                              Antes de redistribuir, asumí la autoría moral del contenido. Implementá un
                              delay cognitivo: si no lográs verificar la información en 60 segundos, abortá
                              la acción de compartir.
                            </p>
                          </div>
                          <div className="bg-slate-50/80 border border-slate-200/60 p-4 sm:p-5 rounded-2xl hover:border-cyan-400/30 transition-colors">
                            <h4 className="font-display font-bold text-slate-900 mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic leading-relaxed">
                              Foto impactante solicitando donaciones por catástrofe. Acción: búsqueda inversa
                              de imagen en Google. Resultado: la foto es de otro continente hace 5 años.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-600 to-brand-navy p-6 sm:p-8 rounded-3xl text-white shadow-xl shadow-cyan-500/20 flex flex-col justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">🛑</span>
                          <h4 className="font-display font-extrabold text-lg sm:text-xl mb-3 sm:mb-4 relative z-10">Laboratorio Práctico</h4>
                          <p className="text-cyan-100 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Configurá mentalmente un "Delay de 10 segundos". Ante un contenido que genere ira
                            o urgencia, contá hasta 10 antes de tocar compartir.
                          </p>
                          <button className="bg-white text-cyan-800 font-bold py-3 px-6 rounded-xl hover:bg-cyan-50 transition-all duration-300 w-max shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Activar Delay
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* ── CAFÉ CARDS ────────────────────────────────────────────────── */}
          <section id="herramientas" className="scroll-mt-20 sm:scroll-mt-24 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Suite de Herramientas Pro
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Métodos prácticos para evaluar información en tiempo real.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Protocolo C.A.F.E.</h3>
                  <p className="text-slate-500 mt-1 text-sm">Pasá el cursor sobre los módulos para desencriptar</p>
                </div>
                <div className="hidden sm:block p-3 bg-white rounded-xl shadow-md border border-slate-100">
                  <span className="text-xl">☕</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {CAFE_CARDS.map((card) => (
                  <div key={card.letter} className="group h-52 sm:h-56 [perspective:1000px]">
                    <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500 shadow-lg shadow-slate-200/50 rounded-[2rem]">
                      {/* Front */}
                      <div
                        className={`absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-100 flex flex-col items-center justify-center rounded-[2rem] p-5 sm:p-6 transition-all ${card.hoverBorder}`}
                      >
                        <span
                          className={`text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 ${card.hover} transition-all duration-500 mb-2 group-hover:scale-110`}
                        >
                          {card.letter}
                        </span>
                        <span className="font-display font-extrabold text-slate-800 text-base sm:text-lg tracking-wide uppercase">
                          {card.title}
                        </span>
                      </div>
                      {/* Back */}
                      <div
                        className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${card.from} ${card.to} text-white flex flex-col items-center justify-center rounded-[2rem] p-5 sm:p-6 text-center border ${card.border}`}
                      >
                        <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed">{card.back}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CHECKLIST + GAUGE ───────────────────────────────────────── */}
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] p-2 sm:p-4">
              <div className="bg-white rounded-[2rem] p-5 sm:p-8 md:p-10 grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-3 space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      Analizador de Viabilidad
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base">
                      Ejecutá esta matriz de validación antes de confirmar la distribución de cualquier dato.
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 bg-slate-50/80 p-4 sm:p-6 rounded-2xl border border-slate-100/60">
                    {CHECKLIST_ITEMS.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 hover:bg-white rounded-xl cursor-pointer border border-transparent hover:border-slate-200/60 transition-all hover:shadow-md group"
                      >
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={checked.has(item.id)}
                            onChange={() => toggleCheck(item.id)}
                            className="appearance-none w-5 h-5 border-2 border-slate-300 rounded-md cursor-pointer transition-all duration-200 bg-white checked:bg-brand-blue checked:border-transparent group-hover:border-brand-blue/50"
                          />
                          {checked.has(item.id) && (
                            <svg
                              className="absolute w-3 h-3 text-white pointer-events-none"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gauge */}
                <div className="lg:col-span-2 bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden flex flex-col items-center justify-center h-full shadow-2xl shadow-slate-900/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 via-transparent to-brand-pink/5 pointer-events-none" />
                  <div className="w-full flex justify-between items-center mb-4 sm:mb-6 z-10">
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                      Estatus de Sistema
                    </span>
                    <span
                      className={`flex h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        checkedCount === 0
                          ? "bg-slate-600"
                          : checkedCount < 5
                          ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
                          : "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      }`}
                    />
                  </div>

                  <div className="relative w-full z-10" style={{ height: 180 }}>
                    <Doughnut data={gaugeData} options={gaugeOptions} />
                    <div className="absolute inset-0 flex items-end justify-center pb-3">
                      <span className="text-4xl font-black text-white">
                        {checkedCount}
                        <span className="text-base sm:text-lg text-slate-500">/5</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 text-center z-10 w-full bg-slate-800/60 py-2.5 sm:py-3 rounded-xl border border-slate-700/50">
                    <p className={`text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors ${gaugeTextColor}`}>
                      {gaugeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CARRUSEL INLINE ───────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] overflow-hidden">
              {/* Header */}
              <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-lg shadow-brand-blue/25 shrink-0 group-hover:scale-105 transition-transform">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                      Presentación
                    </p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                      Alfabetización Mediática
                    </h2>
                  </div>
                </div>
                <span className="text-slate-400 text-sm font-mono shrink-0 bg-slate-100/50 px-3 py-1.5 rounded-full">
                  {currentSlide + 1} / {CARRUSEL_IMAGES.length}
                </span>
              </div>

              {/* Imagen con flechas */}
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

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5">
                {CARRUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-6 sm:w-8 h-2.5 bg-brand-blue shadow-[0_0_8px_#4272BB]"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:w-4 transition-all"
                    }`}
                    aria-label={`Ir a lámina ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── VULNERABILITIES + FAQ ─────────────────────────────────────── */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 sm:pb-16">

            {/* Vulnerabilities */}
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Vulnerabilidades Comunes
              </h3>
              <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">Sesgos cognitivos que comprometen el procesamiento de datos:</p>
              <div className="space-y-3 sm:space-y-4">
                {VULNERABILITIES.map((v) => (
                  <div
                    key={v.title}
                    className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300 flex gap-4 sm:gap-5 items-start group cursor-default"
                  >
                    <div className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${v.bg} ${v.hover} group-hover:scale-110`}>
                      <span className="text-lg sm:text-xl leading-none block">{v.emoji}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-base mb-1 group-hover:text-brand-navy transition-colors">{v.title}</strong>
                      <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">Base de Conocimiento</h3>
              <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">Consultas frecuentes y planes de acción.</p>

              <div className="space-y-3 mb-8 sm:mb-10">
                {(
                  [
                    {
                      id: "faq1",
                      q: "¿El proceso de validación retrasa el consumo?",
                      a: "La curva de aprendizaje inicial requiere una inversión de tiempo. Sin embargo, al incorporar el método C.A.F.E. como un hábito mental, el cerebro optimiza la detección de información falsa en milisegundos.",
                    },
                    {
                      id: "faq2",
                      q: "Manejo de conflictos al corregir pares",
                      a: 'Sé amable al corregir: separar a la persona del error hace que sea más fácil que lo acepte. Formato sugerido: "La arquitectura de esta noticia es confusa; los registros originales indican lo siguiente..."',
                    },
                  ] as { id: FaqId; q: string; a: string }[]
                ).map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-slate-200/60 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full text-left px-5 sm:px-6 py-4 font-bold text-slate-800 hover:bg-slate-50/80 flex justify-between items-center transition-colors text-sm sm:text-base"
                    >
                      <span>{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 ml-3 sm:ml-4"
                      >
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === faq.id && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4 text-slate-600 bg-slate-50/50 border-t border-slate-100 text-sm sm:text-base leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-900/30 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-28 sm:w-32 h-28 sm:h-32 bg-brand-blue rounded-full blur-[50px] sm:blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute right-8 sm:right-12 bottom-0 w-20 sm:w-28 h-20 sm:h-28 bg-brand-pink rounded-full blur-[40px] sm:blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <h4 className="font-display font-extrabold text-lg sm:text-xl mb-4 flex items-center gap-2 relative z-10">
                  <span className="text-brand-blue">⚡</span> Secuencia de Arranque
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-slate-300 relative z-10 text-sm sm:text-base">
                  <li className="flex gap-3 items-start">
                    <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-mono mt-0.5 shrink-0">
                      01
                    </span>
                    <span>
                      <strong className="text-white">Limpiá tus redes:</strong> Dejá de seguir al menos 3 cuentas que compartan información sin citar fuentes confiables.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-mono mt-0.5 shrink-0">
                      02
                    </span>
                    <span>
                      <strong className="text-white">Mejorá lo que te muestra la red:</strong> Seguí cuentas de verificadores de noticias confiables para que el algoritmo te muestre contenido de mejor calidad.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* ── LIGHTBOX INFOGRAFÍA ───────────────────────────────────────── */}
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
            {/* Cerrar — arriba derecha */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>

            {/* Controles de zoom — abajo centro */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl"
              onClick={e => e.stopPropagation()}
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

            {/* Área de imagen con scroll/pan */}
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
                onClick={e => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía de Alfabetización Mediática — pantalla completa"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl select-none"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.15s ease",
                    cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
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
  )
}
