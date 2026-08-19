"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useAppStore } from "@/lib/ciudadania/app-store"
import { useTematicaProgress } from "@/lib/hooks/use-tematica-progress"
import { TematicaCompletarButton } from "@/components/tematica-completar-button"
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
  Sparkles,
  Heart,
  Monitor,
  Fingerprint,
  Brain,
} from "lucide-react"

// ── Slide variants (carrusel) ──────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) =>
  `/weekly-content/2026-W25/carrusel/${i + 1}.svg`
)

const INFOGRAFIA_PATH = "/weekly-content/2026-W25/infografia%207.png"

// ── Animation presets ──────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// ── Types ──────────────────────────────────────────────────────────────────
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
  icon: React.ElementType
  iconColor: string
  iconBg: string
  items: string[]
}

type ActionStep = {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
}

// ── Data ──────────────────────────────────────────────────────────────────
const violenceTypesData: ViolenceType[] = [
  {
    id: "grooming",
    title: "Grooming",
    description:
      "Acoso sexual hacia niñas, niños o adolescentes por parte de una persona adulta a través de internet, mediante engaños y manipulación progresiva. Constituye un delito penal tipificado.",
    icon: UserX,
    tag: "Delito penal",
    gradient: "from-brand-blue to-blue-700",
    glow: "shadow-brand-blue/20",
  },
  {
    id: "ciberbullying",
    title: "Ciberbullying",
    description:
      "Hostigamiento digital sistemático entre pares. Se caracteriza por la percepción de anonimato, la deslocalización geográfica y la dificultad de la víctima para escapar del entorno de acoso.",
    icon: MessageSquareWarning,
    tag: "Entre pares",
    gradient: "from-brand-pink to-rose-600",
    glow: "shadow-brand-pink/20",
  },
  {
    id: "sexting",
    title: "Difusión no consentida",
    description:
      "Divulgación de material íntimo sin autorización. Una vez enviado el contenido, se pierde el control y la situación puede derivar en sextorsión y daños psicológicos graves.",
    icon: Smartphone,
    tag: "Alta vulnerabilidad",
    gradient: "from-violet-500 to-violet-700",
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
    icon: Brain,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
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
    icon: Smartphone,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-light-blue",
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
    icon: UserX,
    iconColor: "text-brand-pink",
    iconBg: "bg-rose-100",
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
      "Escuche a la víctima y ofrezca apoyo emocional incondicional. No la responsabilice, no la avergüence y evite retirarle el dispositivo como medida de castigo. Si es docente, esta primera escucha no reemplaza avisar a la familia y a la institución: es el paso inicial, no el único.",
    icon: Users,
    color: "from-brand-blue to-blue-700",
  },
  {
    id: 2,
    title: "Preservar la evidencia",
    description:
      "No elimine chats, imágenes ni audios. Realice capturas de pantalla de las conversaciones, perfiles y URLs involucrados antes de cualquier otra acción.",
    icon: Lock,
    color: "from-violet-500 to-violet-700",
  },
  {
    id: 3,
    title: "Bloquear y reportar",
    description:
      "Utilice las herramientas nativas de la plataforma para bloquear a la persona agresora y reportar el perfil por comportamiento abusivo o contrario a las normas de la comunidad.",
    icon: ShieldAlert,
    color: "from-brand-pink to-rose-600",
  },
  {
    id: 4,
    title: "Denunciar formalmente",
    description:
      "En casos de grooming o extorsión, comuníquese con la Línea 137 o acuda a la fiscalía especializada en ciberdelitos más cercana. La denuncia activa el protocolo de protección institucional.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Activar el protocolo escolar",
    description:
      "Si es docente, informe lo sucedido al equipo de orientación o a la dirección de su institución y coordine con la familia los pasos siguientes. La escuela tiene su propio protocolo de protección, que se suma —no reemplaza— a la denuncia formal.",
    icon: BookOpen,
    color: "from-brand-blue to-violet-600",
  },
]

// ── Scroll progress ────────────────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #4272BB, #D5247A, #8B5CF6)",
      }}
    />
  )
}

// ── Floating tech decorations ──────────────────────────────────────────────
function TechDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div className="absolute top-[12%] right-[10%] w-4 h-4 rounded-full border-2 border-rose-300/20 animate-float-slow" />
      <div className="absolute top-[40%] left-[6%] w-6 h-6 rounded-full border-2 border-brand-blue/15 animate-float-slower" />
      <div className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-brand-pink/10 animate-pulse-soft" />
      <div className="absolute top-[55%] left-[12%] w-5 h-5 rounded-full border border-amber-300/20 animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[15%] left-[30%] w-2 h-14 rounded-full bg-gradient-to-b from-brand-blue/8 to-transparent rotate-12 animate-float-slower" style={{ animationDelay: "-5s" }} />
      <div className="absolute bottom-[20%] right-[30%] w-10 h-10 rounded-2xl border border-violet-200/15 rotate-45 animate-spin-slow" />
      {/* SVG dot grid */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.012]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="violenceDotGrid" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-brand-blue" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#violenceDotGrid)" />
      </svg>
    </div>
  )
}

// ── CountUp hook ───────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2, start = false) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number>(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    function tick(now: number) {
      if (!startTime) startTime = now
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration, start])
  return value
}

// ── Componente ─────────────────────────────────────────────────────────────
export function ViolenciaInfanciasContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const progress = useTematicaProgress({ tematicaId: "violencia-digital-infancias", userId })
  const [activeTab, setActiveTab] = useState<"alertas" | "protocolo">("alertas")
  const [expandedAlert, setExpandedAlert] = useState<string | null>(alertSignsData[0].id)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [statsVisible, setStatsVisible] = useState(false)
  const count61 = useCountUp(61, 2, statsVisible)
  const statsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

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
  function zoomIn() { setZoom(prev => Math.min(4, +(prev + 0.5).toFixed(1))) }
  function zoomOut() { setZoom(prev => {
    const next = +(prev - 0.5).toFixed(1)
    if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
    return next
  })}
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }) }

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoomRef.current <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y }
  }, [])
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    })
  }, [isDragging])
  const onMouseUp = useCallback(() => { setIsDragging(false); dragStartRef.current = null }, [])

  useEffect(() => {
    const el = lightboxAreaRef.current
    if (!el || !lightboxOpen) return
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY < 0 ? 0.3 : -0.3
      setZoom(prev => { const next = +(prev + delta).toFixed(1); if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }; return Math.min(4, next) })
    }
    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) { e.preventDefault(); lastTouchDistRef.current = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) }
      else if (e.touches.length === 1) { dragStartRef.current = { mx: e.touches[0].clientX, my: e.touches[0].clientY, px: panRef.current.x, py: panRef.current.y } }
    }
    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
        const ratio = newDist / lastTouchDistRef.current
        lastTouchDistRef.current = newDist
        setZoom(prev => { const next = +(prev * ratio).toFixed(2); if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }; return Math.min(4, next) })
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({ x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx), y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my) })
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
    <main className="relative w-full min-h-screen bg-white font-sans text-slate-800 overflow-hidden bg-noise">
      <ScrollProgress />

      {/* ════════════════════════════════════════════════════════════════════
         HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-brand-light-blue/30 via-white to-white">
        {/* Tech grid + dot pattern */}
        <div className="absolute inset-0 bg-tech-pattern pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,36,122,0.04)_0%,transparent_60%)] pointer-events-none" />

        {/* Blobs */}
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-blue/20 to-violet-400/15 blur-[120px] animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-pink/15 to-orange-300/10 blur-[130px] pointer-events-none animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-brand-light-blue/60 blur-[90px] pointer-events-none" />

        <TechDecorations />

        {/* Floating decorative shapes */}
        <div className="animate-float-slow absolute top-[15%] right-[8%] w-28 h-28 rounded-3xl border border-brand-blue/10 bg-white/50 backdrop-blur-sm hidden lg:block" />
        <div className="animate-float-slower absolute bottom-[20%] left-[6%] w-20 h-20 rounded-2xl border border-brand-pink/10 bg-white/40 backdrop-blur-sm hidden lg:block" />
        <div className="animate-float-slow absolute top-[55%] right-[22%] w-12 h-12 rounded-xl bg-brand-blue/[0.06] hidden lg:block" style={{ animationDelay: "2s" }} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
            {/* Texto */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-7">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-blue/15 text-brand-blue font-semibold text-sm shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink" />
                  </span>
                  Guía de Prevención y Acción
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-navy leading-[1.03] tracking-tight">
                Violencia Digital
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-violet-500 to-brand-pink">
                    en Infancias
                  </span>
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
                Las interacciones en el entorno digital conllevan responsabilidades y riesgos. Aprenda a identificar,
                prevenir y actuar frente a situaciones de ciberacoso y grooming — desde el aula, muchas veces usted es
                la primera persona en posición de notar que algo cambió.
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
                  { icon: Users, text: "61% inicia redes a los 10-12 años", color: "text-brand-blue bg-brand-light-blue/60" },
                  { icon: PhoneCall, text: "Línea 137 — Gratuita 24h", color: "text-rose-600 bg-rose-50/80" },
                ].map((pill, i) => (
                  <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${pill.color} border border-current/10 backdrop-blur-sm`}>
                    <pill.icon className="w-3.5 h-3.5" />
                    {pill.text}
                  </div>
                ))}
              </motion.div>

              {/* Card de datos rápidos — solo mobile */}
              <motion.div variants={fadeUp} className="lg:hidden">
                <div className="bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl p-5 flex flex-col gap-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Línea de ayuda nacional</p>
                      <p className="font-black text-brand-navy text-xl leading-none">137 — Gratuita 24h</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                      <Baby className="w-5 h-5 text-rose-500" />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">61% inicia el uso de redes sociales entre los 10 y 12 años</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Panel glassmorphism lateral */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="gradient-border rounded-3xl p-7 bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-200/60">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-blue to-violet-600 flex items-center justify-center shadow-md">
                      <ShieldAlert className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Alerta activa</p>
                      <p className="font-bold text-brand-navy text-sm">Protocolo de protección</p>
                    </div>
                    <div className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse-soft" />
                  </div>

                  {/* Barra de amenazas */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Grooming", pct: 88, color: "bg-brand-blue" },
                      { label: "Ciberbullying", pct: 72, color: "bg-brand-pink" },
                      { label: "Difusión no consentida", pct: 61, color: "bg-violet-600" },
                      { label: "Exposición a riesgos", pct: 94, color: "bg-cyan-500" },
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

                  <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100">
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
                      <p className="text-xs font-bold text-emerald-600 bg-emerald-50/80 px-3 py-1 rounded-full">Gratuita</p>
                    </div>
                  </div>
                </div>

                {/* Mini card flotante */}
                <div className="animate-float-slow absolute -bottom-5 -right-5 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3" style={{ animationDelay: "-3s" }}>
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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         STATS BENTO
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} className="bg-white px-6 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {/* Card grande — 61% */}
            <motion.div variants={fadeUp}
              className="col-span-2 row-span-1 rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-brand-navy to-[#1a3a6b] text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-navy/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pink/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 bg-dot-grid-dark opacity-[0.08] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-3">Escenario digital</p>
                <p className="text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 mb-3">{count61}%</p>
                <p className="text-white/70 text-xl leading-relaxed max-w-xs">
                  de los adolescentes inicia el uso de redes sociales entre los 10 y 12 años.
                </p>
              </div>
            </motion.div>

            {/* Card mediana 1 — 1/3 */}
            <motion.div variants={fadeUp}
              className="rounded-3xl p-7 bg-slate-50 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-pink/10 rounded-full blur-2xl" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-pink to-orange-400 flex items-center justify-center text-white shadow-md mb-5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-pink to-orange-500 mb-2 leading-none">1/3</p>
              <p className="text-slate-500 text-base leading-relaxed">tuvo encuentros con personas conocidas por internet.</p>
            </motion.div>

            {/* Card mediana 2 — 137 */}
            <motion.div variants={fadeUp}
              className="rounded-3xl p-7 bg-gradient-to-br from-brand-light-blue to-blue-50 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-blue to-cyan-500 flex items-center justify-center text-white shadow-md mb-5">
                <PhoneCall className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-blue to-cyan-600 mb-2 leading-none">137</p>
              <p className="text-slate-600 text-base leading-relaxed">Línea nacional gratuita, disponible las 24 horas.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         AMENAZAS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="amenazas" className="px-6 py-20 lg:py-28 bg-slate-50/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-brand-blue/15 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
                <Zap className="w-4 h-4" />
                Lo que hay que conocer
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy leading-tight">
                Principales amenazas<br className="hidden lg:block" /> en el entorno digital
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed lg:text-right">
              Comprender las dinámicas de agresión es el primer paso para proteger la integridad de niñas, niños y
              adolescentes, tanto en casa como en el aula.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {violenceTypesData.map((type, i) => (
              <motion.div key={type.id} variants={fadeUp}
                className={`group relative rounded-3xl p-8 border border-slate-200 bg-white shadow-md overflow-hidden hover:shadow-2xl ${type.glow} hover:-translate-y-1.5 transition-all duration-500 cursor-default`}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${type.gradient}`} />
                {/* Background blob on hover */}
                <div className={`absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-br ${type.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-400`}>
                      <type.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200 shadow-sm">
                      {type.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         IDENTIFICACIÓN — TABS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="identificacion" className="px-6 py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue/60 backdrop-blur-sm border border-brand-blue/15 text-brand-blue text-sm font-semibold mb-6 shadow-sm">
              <BookOpen className="w-4 h-4" />
              Identificación y abordaje
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-brand-navy mb-5">
              Detectar para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400">
                proteger
              </span>
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">
              Guía de observación para detectar situaciones de riesgo y protocolo de actuación para adultos referentes.
            </p>
          </motion.div>

          {/* Tab selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-100/60 rounded-2xl gap-1 shadow-inner">
              {([
                { key: "alertas", label: "Señales de alerta", icon: AlertTriangle },
                { key: "protocolo", label: "Protocolo de acción", icon: Info },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-7 py-4 rounded-xl font-semibold text-base flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.key
                      ? "text-brand-navy"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div layoutId="v-tab-indicator"
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
                  transition={{ duration: 0.35, ease }}
                  className="flex flex-col gap-3"
                >
                  {alertSignsData.map((sign, i) => (
                    <motion.div key={sign.id}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedAlert(expandedAlert === sign.id ? null : sign.id)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50/60 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl ${sign.iconBg} flex items-center justify-center shrink-0`}>
                            <sign.icon className={`w-6 h-6 ${sign.iconColor}`} />
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-brand-navy">{sign.title}</h3>
                        </div>
                        <motion.div animate={{ rotate: expandedAlert === sign.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 text-brand-blue shrink-0" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedAlert === sign.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }}
                            className="overflow-hidden"
                          >
                            <ul className="px-6 pb-6 space-y-3 border-t border-slate-100/80 pt-5">
                              {sign.items.map((item, idx) => (
                                <motion.li key={idx}
                                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3 text-slate-600 text-base"
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
                  transition={{ duration: 0.35, ease }}
                  className="relative"
                >
                  {/* Conector vertical */}
                  <div className="absolute left-[27px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-brand-blue/30 via-violet-400/30 to-emerald-400/30 hidden sm:block" />

                  <div className="flex flex-col gap-4">
                    {actionStepsData.map((step, i) => (
                      <motion.div key={step.id}
                        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, ease }}
                        className="flex gap-6 p-7 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-6 h-6" />
                          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-slate-100 text-brand-navy text-[10px] font-black flex items-center justify-center shadow-sm">
                            {step.id}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">{step.title}</h3>
                          <p className="text-slate-600 leading-relaxed text-base">{step.description}</p>
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

      {/* ════════════════════════════════════════════════════════════════════
         TEMAS RELACIONADOS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 bg-slate-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-2">Temas relacionados</h2>
              <p className="text-slate-500 text-lg">Continúe explorando las guías de ciudadanía digital</p>
            </div>
            <a href="/tematicas" className="hidden sm:flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:text-brand-pink transition-colors group">
              Ver todas
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "NNyA y el Entorno Digital", href: "/nnya-entorno-digital", desc: "Cómo perciben los chicos y chicas el mundo digital", color: "from-violet-500 to-brand-blue", lightBg: "bg-violet-50/80", borderColor: "border-violet-200/60", icon: Monitor },
              { label: "Violencia Digital hacia la Mujer", href: "/violencia-digital", desc: "Guía basada en la Ley Olimpia y derechos digitales", color: "from-brand-pink to-rose-500", lightBg: "bg-rose-50/80", borderColor: "border-rose-200/60", icon: ShieldAlert },
              { label: "Huella Digital", href: "/huella-digital", desc: "Identidad, privacidad y control de datos personales", color: "from-brand-blue to-cyan-400", lightBg: "bg-blue-50/80", borderColor: "border-blue-200/60", icon: Fingerprint },
            ].map((tema, i) => (
              <motion.a key={i} href={tema.href}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, ease }}
                className={`group flex flex-col rounded-3xl overflow-hidden border ${tema.borderColor} ${tema.lightBg} shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${tema.color}`} />
                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tema.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tema.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">{tema.label}</h3>
                    <p className="text-slate-500 text-base leading-relaxed">{tema.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 group-hover:text-brand-blue transition-colors duration-300">
                    Explorar
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         INFOGRAFÍA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
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

      {/* ════════════════════════════════════════════════════════════════════
         CARRUSEL
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/20 rounded-[2.5rem] overflow-hidden">
              <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-rose-700 flex items-center justify-center shadow-lg shadow-brand-pink/25 shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-pink tracking-widest uppercase mb-0.5">Material para el aula</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">Violencia Digital en Infancias — Recursos para el Aula</h2>
                  </div>
                </div>
                <span className="text-slate-400 text-sm font-mono shrink-0 bg-slate-50/80 px-3 py-1.5 rounded-full">
                  {currentSlide + 1} / {CARRUSEL_IMAGES.length}
                </span>
              </div>
              <div className="relative overflow-hidden lg:max-h-[600px] lg:flex lg:items-center lg:justify-center lg:bg-gradient-to-b lg:from-slate-50/50 lg:to-slate-100/30">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease }}
                    className="w-full lg:flex lg:justify-center"
                  >
                    <Image
                      src={CARRUSEL_IMAGES[currentSlide]}
                      alt={`Lámina ${currentSlide + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain lg:w-auto lg:max-h-[600px]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Botones superpuestos solo en mobile */}
                <button onClick={prevSlide} className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-brand-pink border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button onClick={nextSlide} className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-brand-pink border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Siguiente">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              {/* Barra de puntos + flechas desktop */}
              <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
                <button onClick={prevSlide} className="hidden lg:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-pink text-slate-500 hover:text-white items-center justify-center transition-all duration-300 shrink-0" aria-label="Anterior">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 sm:gap-3">
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
                <button onClick={nextSlide} className="hidden lg:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-pink text-slate-500 hover:text-white items-center justify-center transition-all duration-300 shrink-0" aria-label="Siguiente">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         CTA FINAL
      ════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-[2rem] p-10 lg:p-16 text-center"
          >
            {/* Fondo oscuro dramático */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#03060f] via-[#0a1628] to-[#1a0a1a]" />
            <div className="absolute inset-0 bg-dot-grid-dark opacity-[0.06]" />
            <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/25 blur-[100px] animate-pulse-soft pointer-events-none" />
            <div className="absolute bottom-[-30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-pink/20 blur-[110px] pointer-events-none animate-float-slower" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/12 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.06] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="w-16 h-16 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 flex items-center justify-center mb-8 shadow-xl shadow-black/20"
              >
                <PhoneCall className="w-8 h-8 text-cyan-300" />
              </motion.div>

              <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.05] max-w-3xl">
                Busque asesoramiento.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-brand-blue">
                  Denuncie.
                </span>
              </h2>

              <p className="text-white/40 text-lg max-w-2xl mb-10 leading-relaxed">
                Ante la certeza o sospecha de grooming, ciberacoso o extorsión, no confronte al agresor. Comuníquese de forma gratuita desde cualquier punto del país.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <motion.a
                  href="tel:137"
                  whileHover={{ scale: 1.03 }}
                  className="px-9 py-4 bg-white text-brand-navy rounded-2xl font-bold text-xl shadow-2xl shadow-brand-blue/10 flex items-center gap-3 transition-transform hover:bg-brand-light-blue"
                >
                  <PhoneCall className="w-6 h-6 text-brand-blue" />
                  Línea 137 — Gratuita
                </motion.a>
                <a href="/tematicas"
                  className="group px-9 py-4 rounded-2xl font-semibold text-white bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  Ver todas las temáticas
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         LIGHTBOX
      ════════════════════════════════════════════════════════════════════ */}
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
              onMouseDown={onMouseDown}
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
      <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
    </main>
  )
}
