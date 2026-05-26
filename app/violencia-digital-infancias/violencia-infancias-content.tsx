"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  ShieldAlert,
  Smartphone,
  MessageSquareWarning,
  UserX,
  EyeOff,
  ChevronDown,
  PhoneCall,
  AlertTriangle,
  Info,
  Baby,
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  Zap,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react"

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) =>
  `/weekly-content/2026-W25/carrusel/${i + 1}.svg`
)

const INFOGRAFIA_PATH = "/weekly-content/2026-W25/infografia%207.png"

// ── Types ─────────────────────────────────────────────────────────────────────
type ViolenceType = {
  id: string
  title: string
  description: string
  icon: React.ElementType
  tag: string
  gradient: string
  glow: string
}

type AlertSign = {
  id: string
  title: string
  emoji: string
  items: string[]
}

type ActionStep = {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
}

// ── Data ──────────────────────────────────────────────────────────────────────
const violenceTypesData: ViolenceType[] = [
  {
    id: "grooming",
    title: "Grooming",
    description:
      "Acoso sexual hacia niñas, niños o adolescentes por parte de una persona adulta a través de internet, mediante engaños y manipulación progresiva. Constituye un delito penal tipificado.",
    icon: UserX,
    tag: "Delito penal",
    gradient: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/20",
  },
  {
    id: "ciberbullying",
    title: "Ciberbullying",
    description:
      "Hostigamiento digital sistemático entre pares. Se caracteriza por la percepción de anonimato, la deslocalización geográfica y la dificultad de la víctima para escapar del entorno de acoso.",
    icon: MessageSquareWarning,
    tag: "Entre pares",
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  {
    id: "sexting",
    title: "Difusión no consentida",
    description:
      "Divulgación de material íntimo sin autorización. Una vez enviado el contenido, se pierde el control y la situación puede derivar en sextorsión y daños psicológicos graves.",
    icon: Smartphone,
    tag: "Alta vulnerabilidad",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
  {
    id: "exposure",
    title: "Exposición a riesgos",
    description:
      "Acceso involuntario a contenidos violentos, de índole sexual o plataformas que incitan a conductas dañinas, como autolesiones o retos virales de alto riesgo físico.",
    icon: EyeOff,
    tag: "Riesgo invisible",
    gradient: "from-brand-blue to-cyan-500",
    glow: "shadow-brand-blue/20",
  },
]

const alertSignsData: AlertSign[] = [
  {
    id: "sign-emotional",
    title: "Cambios emocionales y de ánimo",
    emoji: "🧠",
    items: [
      "Estados de tristeza profunda sin causa aparente.",
      "Irritabilidad, nerviosismo o ansiedad repentina.",
      "Miedos irracionales o cambios bruscos en el carácter.",
      "Trastornos del sueño (insomnio) o de la alimentación.",
    ],
  },
  {
    id: "sign-digital",
    title: "Comportamiento con dispositivos",
    emoji: "📱",
    items: [
      "Ocultar o apagar rápidamente la pantalla al acercarse un adulto.",
      "Sustituir el uso habitual del dispositivo por una evitación total y repentina.",
      "Asustarse o alterarse al recibir notificaciones o llamadas.",
      "Crear perfiles falsos o utilizar múltiples cuentas anónimas.",
    ],
  },
  {
    id: "sign-social",
    title: "Aislamiento y vida social",
    emoji: "🚪",
    items: [
      "Retraimiento social y negativa a salir de casa.",
      "Pérdida de interés en actividades recreativas o deportivas.",
      "Renuncia repentina a compartir tiempo con sus amistades habituales.",
      "Descenso en el rendimiento escolar o inasistencias frecuentes.",
    ],
  },
]

const actionStepsData: ActionStep[] = [
  {
    id: 1,
    title: "Contener sin juzgar",
    description:
      "Escuche a la víctima y ofrezca apoyo emocional incondicional. No la responsabilice, no la avergüence y evite retirarle el dispositivo como medida de castigo.",
    icon: Users,
    color: "from-brand-blue to-cyan-500",
  },
  {
    id: 2,
    title: "Preservar la evidencia",
    description:
      "No elimine chats, imágenes ni audios. Realice capturas de pantalla de las conversaciones, perfiles y URLs involucrados antes de cualquier otra acción.",
    icon: Lock,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    title: "Bloquear y reportar",
    description:
      "Utilice las herramientas nativas de la plataforma para bloquear a la persona agresora y reportar el perfil por comportamiento abusivo o contrario a las normas de la comunidad.",
    icon: ShieldAlert,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Denunciar formalmente",
    description:
      "En casos de grooming o extorsión, comuníquese con la Línea 137 o acuda a la fiscalía especializada en ciberdelitos más cercana. La denuncia activa el protocolo de protección institucional.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-500",
  },
]

// ── Animaciones ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ── Componente ────────────────────────────────────────────────────────────────
export function ViolenciaInfanciasContent() {
  const [activeTab, setActiveTab] = useState<"alertas" | "protocolo">("alertas")
  const [expandedAlert, setExpandedAlert] = useState<string | null>(alertSignsData[0].id)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // ── Carrusel ──────────────────────────────────────────────────────────────
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  function goTo(index: number, dir: number) { setDirection(dir); setCurrentSlide(index) }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1) }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1) }

  // ── Infografía — lightbox ─────────────────────────────────────────────────
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)
  const lastTouchDistRef = useRef<number | null>(null)
  const lightboxAreaRef = useRef<HTMLDivElement>(null)
  const panRef = useRef({ x: 0, y: 0 })
  const zoomRef = useRef(1)
  useEffect(() => { panRef.current = pan }, [pan])
  useEffect(() => { zoomRef.current = zoom }, [zoom])

  function closeLightbox() { setLightboxOpen(false); setZoom(1); setPan({ x: 0, y: 0 }) }
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
          mx: e.touches[0].clientX, my: e.touches[0].clientY,
          px: panRef.current.x, py: panRef.current.y,
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
    const touchEndHandler = () => { dragStartRef.current = null; lastTouchDistRef.current = null; setIsDragging(false) }
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

  return (
    <main className="relative w-full min-h-screen bg-white font-sans text-slate-800 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mesh-move {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-slow {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes float-slow-reverse {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(14px) rotate(-2deg); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes border-spin {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .mesh-bg {
          background: linear-gradient(-45deg, #EEF4FB, #f0f4ff, #fdf0f8, #EEF4FB);
          background-size: 400% 400%;
          animation: mesh-move 12s ease infinite;
        }
        .float-a { animation: float-slow 7s ease-in-out infinite; }
        .float-b { animation: float-slow-reverse 9s ease-in-out infinite; }
        .glow-a { animation: glow-pulse 3s ease-in-out infinite; }
        .glow-b { animation: glow-pulse 4s ease-in-out infinite 1.5s; }
        .grid-dots {
          background-image: radial-gradient(circle, rgba(66,114,187,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .gradient-border {
          position: relative;
          background: white;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(135deg, rgba(66,114,187,0.4), rgba(213,36,122,0.4), rgba(66,114,187,0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
      `}} />

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* HERO                                                                   */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
        {/* Grid de puntos */}
        <div className="absolute inset-0 grid-dots opacity-60 pointer-events-none" />
        {/* Noise */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        {/* Blobs */}
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-blue/25 to-violet-400/20 blur-[120px] glow-a pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-pink/20 to-orange-300/15 blur-[130px] glow-b pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-brand-light-blue/80 blur-[90px] pointer-events-none" />

        {/* Formas flotantes decorativas */}
        <div className="float-a absolute top-[15%] right-[8%] w-28 h-28 rounded-3xl border border-brand-blue/15 bg-white/40 backdrop-blur-sm hidden lg:block" />
        <div className="float-b absolute bottom-[20%] left-[6%] w-20 h-20 rounded-2xl border border-brand-pink/15 bg-white/30 backdrop-blur-sm hidden lg:block" />
        <div className="float-a absolute top-[60%] right-[20%] w-10 h-10 rounded-xl bg-brand-blue/10 hidden lg:block" style={{ animationDelay: "2s" }} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
            {/* Texto */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-7">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-blue/20 text-brand-blue font-semibold text-sm shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink" />
                  </span>
                  Guía de Prevención y Acción
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-extrabold text-brand-navy leading-[1.03] tracking-tight">
                Violencia Digital
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-violet-500 to-brand-pink">
                    en Infancias
                  </span>
                  {/* Underline decorativa */}
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                    <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="url(#uline)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="uline" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4272BB"/>
                        <stop offset="50%" stopColor="#7C3AED"/>
                        <stop offset="100%" stopColor="#D5247A"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                y Adolescencias
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
                Las interacciones en el entorno digital conllevan responsabilidades y riesgos. Aprenda a identificar, prevenir y actuar frente a situaciones de ciberacoso y grooming.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="#amenazas" className="group px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-violet-600 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                  Ver amenazas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#identificacion" className="px-7 py-3.5 rounded-full font-bold text-brand-navy bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-brand-blue/30 hover:bg-white hover:shadow-md transition-all duration-300">
                  Señales de alerta
                </a>
              </motion.div>

              {/* Pills de datos rápidos */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: Users, text: "61% inicia redes a los 10-12 años", color: "text-brand-blue bg-brand-light-blue" },
                  { icon: PhoneCall, text: "Línea 137 — Gratuita 24h", color: "text-rose-600 bg-rose-50" },
                ].map((pill, i) => (
                  <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${pill.color} border border-current/10`}>
                    <pill.icon className="w-3.5 h-3.5" />
                    {pill.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Panel glassmorphism lateral */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Card principal */}
                <div className="gradient-border rounded-3xl p-7 bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/60">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-blue to-violet-600 flex items-center justify-center shadow-md">
                      <ShieldAlert className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Alerta activa</p>
                      <p className="font-bold text-brand-navy text-sm">Protocolo de protección</p>
                    </div>
                    <div className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>

                  {/* Barra de amenazas */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Grooming", pct: 88, color: "bg-rose-500" },
                      { label: "Ciberbullying", pct: 72, color: "bg-amber-500" },
                      { label: "Difusión no consentida", pct: 61, color: "bg-violet-500" },
                      { label: "Exposición a riesgos", pct: 94, color: "bg-brand-blue" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-600">{item.label}</span>
                          <span className="text-slate-400">{item.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                            className={`h-full rounded-full ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-light-blue flex items-center justify-center">
                        <PhoneCall className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Línea de ayuda</p>
                        <p className="font-black text-brand-navy text-lg leading-none">137</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Gratuita</p>
                    </div>
                  </div>
                </div>

                {/* Mini card flotante */}
                <div className="float-b absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center">
                    <Baby className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Edad de inicio</p>
                    <p className="font-black text-brand-navy text-base leading-none">10 - 12 años</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Fade inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* STATS BENTO                                                            */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {/* Card grande */}
            <motion.div variants={fadeUp}
              className="col-span-2 row-span-1 gradient-border rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-brand-navy to-[#1a3a6b] text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-navy/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pink/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-3">Escenario digital</p>
                <p className="text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 mb-3">61%</p>
                <p className="text-white/70 text-lg leading-relaxed max-w-xs">
                  de los adolescentes inicia el uso de redes sociales entre los 10 y 12 años.
                </p>
              </div>
            </motion.div>

            {/* Card mediana 1 */}
            <motion.div variants={fadeUp}
              className="gradient-border rounded-3xl p-7 bg-slate-50 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-pink/10 rounded-full blur-2xl" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-pink to-orange-400 flex items-center justify-center text-white shadow-md mb-5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-pink to-orange-500 mb-2 leading-none">1/3</p>
              <p className="text-slate-500 text-sm leading-relaxed">tuvo encuentros con personas conocidas por internet.</p>
            </motion.div>

            {/* Card mediana 2 */}
            <motion.div variants={fadeUp}
              className="gradient-border rounded-3xl p-7 bg-gradient-to-br from-brand-light-blue to-blue-50 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-blue to-cyan-500 flex items-center justify-center text-white shadow-md mb-5">
                <PhoneCall className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-blue to-cyan-600 mb-2 leading-none">137</p>
              <p className="text-slate-600 text-sm leading-relaxed">Línea nacional gratuita, disponible las 24 horas.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* AMENAZAS                                                               */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="amenazas" className="px-6 py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
                <Zap className="w-4 h-4" />
                Lo que hay que conocer
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy leading-tight">
                Principales amenazas<br className="hidden lg:block" /> en el entorno digital
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed lg:text-right">
              Comprender las dinámicas de agresión es el primer paso para proteger la integridad de niñas, niños y adolescentes.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {violenceTypesData.map((type, i) => (
              <motion.div key={type.id} variants={fadeUp}
                className={`group relative rounded-3xl p-8 border border-slate-100 bg-white overflow-hidden hover:shadow-2xl ${type.glow} hover:-translate-y-1.5 transition-all duration-400 cursor-default`}
              >
                {/* Barra superior gradiente */}
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Blob de fondo en hover */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${type.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-white shadow-lg shadow-${type.glow} group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r ${type.gradient} text-white opacity-80`}>
                      {type.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* IDENTIFICACIÓN — TABS                                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="identificacion" className="px-6 py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Identificación y abordaje
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-5">
              Detectar para proteger
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Guía de observación para detectar situaciones de riesgo y protocolo de actuación para adultos referentes.
            </p>
          </motion.div>

          {/* Selector de tabs tipo pill premium */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl gap-1 shadow-inner">
              {([
                { key: "alertas", label: "Señales de alerta", icon: AlertTriangle },
                { key: "protocolo", label: "Protocolo de acción", icon: Info },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-white text-brand-navy shadow-md"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div layoutId="tab-indicator"
                      className="absolute inset-0 rounded-xl bg-white shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "alertas" ? (
                <motion.div key="alertas"
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-3"
                >
                  {alertSignsData.map((sign, i) => (
                    <motion.div key={sign.id}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="gradient-border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => setExpandedAlert(expandedAlert === sign.id ? null : sign.id)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50/80 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{sign.emoji}</span>
                          <h3 className="text-base font-bold text-brand-navy">{sign.title}</h3>
                        </div>
                        <motion.div animate={{ rotate: expandedAlert === sign.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 text-brand-blue shrink-0" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedAlert === sign.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="px-6 pb-6 space-y-3 border-t border-slate-100 pt-5">
                              {sign.items.map((item, idx) => (
                                <motion.li key={idx}
                                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.06 }}
                                  className="flex items-start gap-3 text-slate-600 text-sm"
                                >
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-pink to-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                  </div>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="protocolo"
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  {/* Línea vertical conectora */}
                  <div className="absolute left-[27px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-brand-blue/30 via-violet-400/30 to-emerald-400/30 hidden sm:block" />

                  <div className="flex flex-col gap-4">
                    {actionStepsData.map((step, i) => (
                      <motion.div key={step.id}
                        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-6 p-6 bg-white gradient-border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-6 h-6" />
                          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-slate-100 text-brand-navy text-[10px] font-black flex items-center justify-center shadow-sm">
                            {step.id}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-brand-navy mb-1.5 group-hover:text-brand-blue transition-colors duration-300">{step.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* TEMAS RELACIONADOS                                                     */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-1">Temas relacionados</h2>
              <p className="text-slate-400">Continúe explorando las guías de ciudadanía digital</p>
            </div>
            <a href="/tematicas" className="hidden sm:flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:text-brand-pink transition-colors group">
              Ver todas
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "NNyA y el Entorno Digital", href: "/nnya-entorno-digital", desc: "Cómo perciben los pibes el mundo digital", color: "from-violet-500 to-brand-blue" },
              { label: "Violencia Digital hacia la Mujer", href: "/violencia-digital", desc: "Guía basada en la Ley Olimpia", color: "from-brand-pink to-orange-400" },
              { label: "Huella Digital", href: "/huella-digital", desc: "Identidad, privacidad y control", color: "from-brand-blue to-cyan-400" },
            ].map((tema, i) => (
              <motion.a key={i} href={tema.href}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group gradient-border flex items-center justify-between p-5 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tema.color} shadow-md shrink-0`} />
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{tema.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{tema.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-3" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFOGRAFÍA ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-brand-pink/10 via-transparent to-red-400/10 blur-3xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_30px_80px_rgba(213,36,122,0.08),0_4px_24px_rgba(0,0,0,0.08)] bg-white">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#1e1b4b] to-[#2e2a7a] border-b border-white/[0.07]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center min-w-0">
                  <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-3 sm:px-4 py-1 flex items-center gap-2 max-w-[280px] w-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse shrink-0" />
                    <span className="text-xs text-white/50 font-mono truncate">infografia — Violencia Digital en Infancias</span>
                  </div>
                </div>
                <div className="w-10 sm:w-16 shrink-0" />
              </div>
              <div className="bg-white flex justify-center">
                <div className="relative group w-full lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={INFOGRAFIA_PATH}
                    alt="Infografía Violencia Digital en Infancias"
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
              <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CARRUSEL ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] overflow-hidden">
              <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-rose-700 flex items-center justify-center shadow-lg shadow-brand-pink/25 shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-pink tracking-widest uppercase mb-0.5">Presentación</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">Violencia Digital en Infancias</h2>
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
                <button onClick={prevSlide} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-pink border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button onClick={nextSlide} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-pink border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Siguiente">
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
                        ? "w-6 sm:w-8 h-2.5 bg-brand-pink shadow-[0_0_8px_#D5247A]"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir a lámina ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* CTA                                                                    */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] p-10 lg:p-16 text-center"
          >
            {/* Fondo mesh animado oscuro */}
            <div className="absolute inset-0 bg-[#03060f]" />
            <div className="absolute inset-0 grid-dots opacity-[0.06]" />
            <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/30 blur-[100px] glow-a pointer-events-none" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-pink/25 blur-[110px] glow-b pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/15 blur-[80px] pointer-events-none" />

            {/* Borde gradiente */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.06]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/15 flex items-center justify-center mb-8 shadow-xl">
                <PhoneCall className="w-8 h-8 text-cyan-300" />
              </div>

              <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Busque asesoramiento.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-brand-blue">
                  Denuncie.
                </span>
              </h2>

              <p className="text-white/50 text-lg max-w-2xl mb-10 leading-relaxed">
                Ante la certeza o sospecha de grooming, ciberacoso o extorsión, no confronte al agresor. Comuníquese de forma gratuita desde cualquier punto del país.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="px-9 py-4 bg-white text-brand-navy rounded-2xl font-bold text-xl shadow-2xl shadow-brand-blue/10 flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-default">
                  <PhoneCall className="w-6 h-6 text-brand-blue" />
                  Línea 137 — Gratuita
                </div>
                <a href="/tematicas"
                  className="px-9 py-4 rounded-2xl font-semibold text-white bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  Ver todas las temáticas
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              onClick={e => e.stopPropagation()}
            >
              <button onClick={zoomOut} disabled={zoom <= 1} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Reducir zoom">
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>
              <button onClick={zoomIn} disabled={zoom >= 4} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Aumentar zoom">
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoom > 1 && (
                <button onClick={resetZoom} className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3" aria-label="Restablecer zoom">
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
                onClick={e => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía Violencia Digital en Infancias — pantalla completa"
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
    </main>
  )
}
