"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  Smartphone,
  Brain,
  Heart,
  AlertTriangle,
  Users,
  Clock,
  ShieldCheck,
  Eye,
  TrendingDown,
  Zap,
  Moon,
  Dices,
  Gamepad2,
  MessageSquareWarning,
  Ear,
  ArrowRight,
  CheckCircle2,
  Activity,
  Sparkles,
  ChevronRight,
  Lock,
  Star,
  ChevronLeft,
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

const CARRUSEL_IMAGES = Array.from({ length: 8 }, (_, i) =>
  `/weekly-content/2026-W26/carrusel/${i + 1}.svg`
)

const INFOGRAFIA_PATH = "/weekly-content/2026-W26/infografia%208.png"

// ── Animaciones ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

// ── Data ──────────────────────────────────────────────────────────────────────
const statsData = [
  { value: "94.8%", label: "dispone de dispositivo móvil con internet", icon: Smartphone, gradient: "from-brand-blue to-cyan-500", span: "col-span-2" },
  { value: "11 años", label: "edad media del primer dispositivo", icon: Clock, gradient: "from-violet-500 to-brand-blue", span: "col-span-1" },
  { value: "8 horas", label: "diarias frente a pantallas (13-17 años)", icon: Activity, gradient: "from-brand-pink to-orange-400", span: "col-span-1" },
  { value: "77%", label: "no tiene ningún límite de tiempo de uso", icon: AlertTriangle, gradient: "from-amber-500 to-rose-500", span: "col-span-1" },
  { value: "4 de 10", label: "se conecta específicamente para no sentirse solo", icon: Heart, gradient: "from-emerald-500 to-teal-500", span: "col-span-1" },
]

const tricData = [
  {
    letra: "T",
    titulo: "Tecnologías",
    desc: "El uso como herramienta fundamental para conseguir, verificar y difundir datos, conocimiento y noticias.",
    icon: Smartphone,
    color: "from-brand-blue to-cyan-500",
  },
  {
    letra: "R",
    titulo: "Relación",
    desc: "La forma en que la tecnología impactó en la interacción social. Es el espacio donde los adolescentes crean lazos, construyen pertenencia y se validan.",
    icon: Users,
    color: "from-violet-500 to-brand-blue",
    destacado: true,
  },
  {
    letra: "IC",
    titulo: "Información y Comunicación",
    desc: "El potencial como vehículo de expresión individual o de masas, creando lenguajes propios y nuevas narrativas digitales.",
    icon: Zap,
    color: "from-brand-pink to-violet-500",
  },
]

const cerebralData = [
  {
    estructura: "Corteza Prefrontal",
    funcion: "Autocontrol, toma de decisiones y pensamiento analítico.",
    impacto: "En formación hasta los 25 años. El uso constante de estímulos externos \"anestesia\" su maduración, dificultando la gestión de impulsos.",
    icon: Brain,
    color: "from-violet-500 to-purple-700",
    riesgo: "Alto",
  },
  {
    estructura: "Sistema de Recompensa",
    funcion: "Gestión del placer, búsqueda de gratificación y motivación.",
    impacto: "Explotado por el scroll infinito. Crea un bucle adictivo de validación social que prioriza el placer inmediato sobre el esfuerzo.",
    icon: Zap,
    color: "from-rose-500 to-orange-500",
    riesgo: "Crítico",
  },
]

const identidadData = [
  {
    titulo: "Auto-objetivación",
    desc: "El adolescente se percibe como un producto visual, priorizando la estética sobre la esencia.",
    icon: Eye,
    color: "bg-violet-50 text-violet-600",
  },
  {
    titulo: "Identidad fragmentada",
    desc: "2 de cada 3 mantienen más de un perfil en la misma red social, disociando su Yo Real del Yo Digital.",
    icon: Users,
    color: "bg-brand-light-blue text-brand-blue",
  },
  {
    titulo: "La trampa algorítmica",
    desc: "Los algoritmos amplifican contenido dañino: el 32% de adolescentes se sentía peor con su cuerpo tras usar Instagram.",
    icon: AlertTriangle,
    color: "bg-rose-50 text-rose-600",
  },
]

const saludData = [
  {
    titulo: "Síndrome FOMO",
    subtitulo: "Fear of Missing Out",
    desc: "El miedo a perderse algo mantiene al cerebro en estado de alerta constante. La ansiedad generada por creer que otros tienen experiencias más gratificantes.",
    items: ["Conexión compulsiva imposible de pausar.", "Angustia intensa al desconectarse."],
    icon: Eye,
    accent: "from-emerald-400 to-teal-500",
    textAccent: "text-emerald-400",
  },
  {
    titulo: "Ansiedad y Depresión",
    subtitulo: "Crisis clínica sin precedentes",
    desc: "La hiperconexión y la comparación social continua son factores clave. En España, las autolesiones se triplicaron y casi el 50% reportó pensamientos autolíticos.",
    items: ["Alteraciones del sueño y ciclo circadiano.", "Baja autoestima basada en métricas."],
    icon: Activity,
    accent: "from-cyan-400 to-brand-blue",
    textAccent: "text-cyan-400",
  },
  {
    titulo: "Trastornos Alimentarios",
    subtitulo: "Impacto de la presión estética",
    desc: "La comparación social constante actúa como disparador de insatisfacción corporal. El 58% duerme con el móvil, triplicando el riesgo de ciberacoso y contacto con desconocidos.",
    items: ["Afecta principalmente a mujeres adolescentes.", "Distorsión de la imagen corporal."],
    icon: TrendingDown,
    accent: "from-brand-pink to-rose-500",
    textAccent: "text-brand-pink",
  },
]

const riesgosData = [
  {
    titulo: "Gaming y Brecha de Género",
    desc: "El 54.7% consume juegos por encima de su clasificación PEGI, escalando al 66.5% en chicos, con mayor exposición a contenidos violentos.",
    stat: "54.7%",
    statLabel: "consume contenido no apto para su edad",
    icon: Gamepad2,
    color: "from-violet-500 to-brand-blue",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    titulo: "Apuestas Online",
    desc: "70.000 estudiantes de ESO apostaron dinero en internet. El 43.1% cree que es una vía para ganar dinero fácil, sin conocer los mecanismos de adicción.",
    stat: "70.000",
    statLabel: "estudiantes de ESO apostaron online",
    icon: Dices,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    titulo: "Ciberacoso 24/7",
    desc: "La desprotección de la víctima es total. Solo el 23.3% de los padres revisa las clasificaciones de edad. El acoso no tiene horario ni espacio físico.",
    stat: "23.3%",
    statLabel: "de los padres revisa clasificaciones de edad",
    icon: MessageSquareWarning,
    color: "from-rose-500 to-brand-pink",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
]

const roadmapData = [
  {
    id: 1,
    titulo: "Evaluar la madurez, no la edad",
    desc: "No priorizar la edad cronológica para el primer dispositivo. Evaluar la capacidad demostrada de autocontrol, responsabilidad y tolerancia a la frustración.",
    icon: Brain,
    color: "from-brand-blue to-cyan-500",
  },
  {
    id: 2,
    titulo: "Desconexión nocturna total",
    desc: "Prohibir el dispositivo en el dormitorio. Dormir con el móvil triplica el riesgo de ciberacoso, sexting y contacto con desconocidos, además de eliminar la fase REM.",
    icon: Moon,
    color: "from-violet-500 to-brand-blue",
  },
  {
    id: 3,
    titulo: "Alfabetización algorítmica",
    desc: "Enseñar que el contenido que ven es una construcción interesada del algoritmo, no una realidad social fiel. El algoritmo amplifica lo que captura atención, no lo que es verdad.",
    icon: Eye,
    color: "from-brand-pink to-violet-500",
  },
  {
    id: 4,
    titulo: "Ocio analógico estructurado",
    desc: "El deporte y las relaciones cara a cara son los únicos capaces de entrenar la tolerancia a la frustración y la paciencia. La corteza prefrontal necesita estímulos reales.",
    icon: Heart,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    titulo: "Mentoría digital activa",
    desc: "Probar juegos y apps con ellos. Pasar de la fiscalización a la mentoría. La familia es el mayor influencer: su presencia, empatía y sentido común son irremplazables.",
    icon: Ear,
    color: "from-amber-500 to-orange-400",
  },
]

// ── Componente ────────────────────────────────────────────────────────────────
export function HiperconectividadContent() {
  const [activeRoadmap, setActiveRoadmap] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

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
    <div className="w-full bg-white font-sans text-slate-800 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(24px,-18px) scale(1.08); }
          66% { transform: translate(-16px,22px) scale(0.95); }
        }
        @keyframes mesh-shift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-card {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity: 0.45; }
          50% { opacity: 0.9; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .blob { animation: blob-drift 12s ease-in-out infinite; }
        .blob-b { animation: blob-drift 16s ease-in-out infinite reverse; }
        .mesh-bg {
          background: linear-gradient(-45deg, #EEF4FB, #f5f0ff, #fff0f8, #EEF4FB);
          background-size: 400% 400%;
          animation: mesh-shift 14s ease infinite;
        }
        .float-card { animation: float-card 6s ease-in-out infinite; }
        .float-card-b { animation: float-card 8s ease-in-out infinite 2s; }
        .glow-p { animation: glow-pulse 3.5s ease-in-out infinite; }
        .scan-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(66,114,187,0.05) 50%, transparent 100%);
          animation: scan 4s linear infinite;
          pointer-events: none;
        }
        .dots-grid {
          background-image: radial-gradient(circle, rgba(66,114,187,0.1) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .glass {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }
        .gradient-border-card {
          position: relative;
          background: white;
        }
        .gradient-border-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(135deg, rgba(66,114,187,0.35), rgba(139,92,246,0.35), rgba(213,36,122,0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
        <div className="absolute inset-0 dots-grid opacity-50 pointer-events-none" />
        <div className="scan-line" />

        {/* Blobs */}
        <div className="blob absolute top-[-12%] left-[-8%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-violet-300/30 to-brand-blue/20 blur-[130px] pointer-events-none" />
        <div className="blob-b absolute bottom-[-15%] right-[-10%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-brand-pink/20 to-orange-200/25 blur-[140px] pointer-events-none" />
        <div className="glow-p absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full bg-brand-light-blue/90 blur-[80px] pointer-events-none" />

        {/* Formas geométricas flotantes */}
        <div className="float-card absolute top-[18%] right-[5%] w-24 h-24 rounded-3xl border border-violet-200/60 bg-white/30 backdrop-blur-sm hidden xl:block" />
        <div className="float-card-b absolute bottom-[22%] left-[4%] w-16 h-16 rounded-2xl border border-brand-pink/20 bg-white/20 backdrop-blur-sm hidden xl:block" />
        <div className="float-card absolute top-[55%] right-[18%] w-8 h-8 rounded-xl bg-brand-blue/10 hidden xl:block" style={{ animationDelay: "1s" }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-14 items-center">

            {/* Texto principal */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-7">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue font-semibold text-sm shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink" />
                  </span>
                  Informe basado en evidencia científica
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-violet-50 border border-violet-200/60 text-violet-600 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Neurodesarrollo Adolescente
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="text-5xl md:text-7xl font-display font-extrabold text-brand-navy leading-[1.03] tracking-tight"
              >
                ¿Qué buscan
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-brand-blue to-brand-pink">
                    en la pantalla?
                  </span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 400 5" preserveAspectRatio="none">
                    <path d="M0 2.5 Q100 0 200 2.5 Q300 5 400 2.5" stroke="url(#ul1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="ul1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED"/>
                        <stop offset="50%" stopColor="#4272BB"/>
                        <stop offset="100%" stopColor="#D5247A"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
                La hiperconectividad digital está reconfigurando estructuralmente la psique adolescente. Un análisis basado en neurodesarrollo sobre cómo las redes sociales impactan la identidad, la salud mental y el desarrollo cognitivo.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="#contexto" className="group px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-brand-blue shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                  Explorar el informe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#hoja-de-ruta" className="px-7 py-3.5 rounded-full font-bold text-brand-navy glass border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all duration-300">
                  Guía para familias
                </a>
              </motion.div>

              {/* Pills de stats rápidas */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: Smartphone, text: "94.8% conectados", color: "bg-blue-50 text-brand-blue border-blue-100" },
                  { icon: Clock, text: "Inicio: 11 años", color: "bg-violet-50 text-violet-600 border-violet-100" },
                  { icon: Activity, text: "8h diarias", color: "bg-pink-50 text-brand-pink border-pink-100" },
                ].map((p, i) => (
                  <div key={i} className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${p.color}`}>
                    <p.icon className="w-3.5 h-3.5" />
                    {p.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Panel glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="gradient-border-card rounded-3xl p-7 glass shadow-2xl shadow-slate-200/60">
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-brand-blue flex items-center justify-center shadow-md">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-brand-navy text-sm">Monitor de Riesgo Digital</p>
                      <p className="text-xs text-slate-400">Panorama adolescente 2026</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>

                  {/* Barras de contexto */}
                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Uso excesivo de pantallas", val: 94, color: "bg-gradient-to-r from-violet-500 to-brand-blue" },
                      { label: "Sin normas en el hogar", val: 71, color: "bg-gradient-to-r from-amber-400 to-orange-500" },
                      { label: "FOMO activo", val: 67, color: "bg-gradient-to-r from-rose-400 to-brand-pink" },
                      { label: "Con supervisión parental", val: 29, color: "bg-gradient-to-r from-emerald-400 to-teal-500" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-slate-600">{item.label}</span>
                          <span className="text-slate-400 font-mono">{item.val}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.val}%` }}
                            transition={{ duration: 1.1, delay: 0.6 + i * 0.12, ease: "easeOut" }}
                            className={`h-full rounded-full ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-brand-blue leading-none">2/3</p>
                      <p className="text-xs text-slate-400 mt-1">tienen múltiples perfiles</p>
                    </div>
                    <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 text-center">
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-brand-pink leading-none">58%</p>
                      <p className="text-xs text-slate-400 mt-1">duerme con el móvil</p>
                    </div>
                  </div>
                </div>

                {/* Mini badge flotante */}
                <div className="float-card-b absolute -bottom-5 -right-6 glass rounded-2xl px-5 py-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Punto de inicio</p>
                    <p className="font-black text-brand-navy text-sm leading-none">11 años</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ══ STATS BENTO ═══════════════════════════════════════════════════════ */}
      <section id="contexto" className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5">
              <Activity className="w-4 h-4" />
              Contexto estadístico
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy">
              El paisaje de conectividad juvenil
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {/* Card grande — 94.8% */}
            <motion.div variants={fadeUp}
              className="col-span-2 relative overflow-hidden rounded-3xl p-8 lg:p-10 gradient-border-card hover:shadow-2xl hover:shadow-violet-200/40 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-brand-blue to-cyan-500 opacity-100" />
              <div className="absolute inset-0 dots-grid opacity-[0.08]" />
              <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white mb-5 border border-white/20">
                  <Smartphone className="w-5 h-5" />
                </div>
                <p className="text-8xl lg:text-9xl font-display font-black text-white leading-none mb-3">94.8%</p>
                <p className="text-white text-base">de los adolescentes tiene dispositivo móvil con conexión a internet.</p>
              </div>
            </motion.div>

            {/* Card — 11 años */}
            <motion.div variants={fadeUp}
              className="col-span-1 gradient-border-card rounded-3xl p-7 bg-slate-50 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-violet-100 rounded-full blur-2xl opacity-60" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-brand-blue flex items-center justify-center text-white shadow-md mb-5">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-brand-blue mb-2 leading-none">11</p>
              <p className="text-sm font-bold text-brand-navy mb-1">años de edad</p>
              <p className="text-slate-500 text-base leading-relaxed">edad media del primer dispositivo con internet.</p>
            </motion.div>

            {/* Card — 8 horas */}
            <motion.div variants={fadeUp}
              className="col-span-1 gradient-border-card rounded-3xl p-7 bg-gradient-to-br from-brand-light-blue to-blue-50 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-brand-blue/10 rounded-full blur-2xl" />
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-pink to-orange-400 flex items-center justify-center text-white shadow-md mb-5">
                <Activity className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-pink to-orange-500 mb-2 leading-none">8h</p>
              <p className="text-sm font-bold text-brand-navy mb-1">diarias en pantallas</p>
              <p className="text-slate-600 text-base leading-relaxed">promedio en adolescentes de 13 a 17 años.</p>
            </motion.div>

            {/* Card — 77% */}
            <motion.div variants={fadeUp}
              className="col-span-1 gradient-border-card rounded-3xl p-7 bg-white border border-amber-100 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md mb-5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-orange-500 mb-2 leading-none">77%</p>
              <p className="text-base text-slate-500 leading-relaxed">sin ningún límite de tiempo de uso establecido.</p>
            </motion.div>

            {/* Card — 4 de 10 */}
            <motion.div variants={fadeUp}
              className="col-span-1 gradient-border-card rounded-3xl p-7 bg-white border border-emerald-100 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <p className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 to-teal-600 mb-2 leading-none">4/10</p>
              <p className="text-base text-slate-500 leading-relaxed">se conecta específicamente para no sentirse solo.</p>
            </motion.div>

            {/* Card — solo 29.1% */}
            <motion.div variants={fadeUp}
              className="col-span-2 gradient-border-card rounded-3xl p-7 lg:p-8 bg-slate-900 relative overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <p className="text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400 leading-none mb-2">29.1%</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400 text-base max-w-xs leading-relaxed font-medium">de los hogares cuenta con normas claras de uso digital. La brecha de supervisión es el punto de quiebre estratégico.</p>
                </div>
                <div className="shrink-0 hidden sm:flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-pink/30 to-orange-400/20 border border-brand-pink/30 backdrop-blur-sm">
                  <ShieldCheck className="w-9 h-9 text-brand-pink" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ TIC → TRIC ════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 lg:py-28 bg-brand-light-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
              <Zap className="w-4 h-4" />
              Cambio de paradigma
            </span>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-navy mb-5">
              De las <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">TIC</span> a las{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-brand-pink">TRIC</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              La llegada de las redes sociales cambió el paradigma. Ya no son solo tecnologías de información y comunicación: el nuevo componente central es la <strong className="text-brand-navy">Relación</strong>.
            </p>
          </motion.div>

          <div className="relative">
            {/* Línea conectora horizontal */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(16.6%+28px)] right-[calc(16.6%+28px)] h-[2px] bg-gradient-to-r from-brand-blue via-violet-500 to-brand-pink z-0" />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {tricData.map((item, i) => (
                <motion.div key={item.titulo} variants={fadeUp}
                  className={`relative gradient-border-card rounded-3xl p-8 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ${item.destacado ? "ring-2 ring-violet-200" : ""}`}
                >
                  {item.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-brand-blue text-white text-xs font-bold rounded-full shadow-lg">
                      El componente clave
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} leading-none opacity-20`}>
                      {item.letra}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">{item.titulo}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ ARQUITECTURA CEREBRAL ════════════════════════════════════════════ */}
      <section className="px-4 py-6 lg:py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#05080f] px-6 py-16 lg:px-14 lg:py-20">
            <div className="absolute inset-0 dots-grid opacity-[0.05]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] glow-p pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] glow-p pointer-events-none" style={{ animationDelay: "2s" }} />
            <div className="absolute inset-0 border border-white/[0.04] rounded-[2rem]" />

            <div className="relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center mb-14"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 text-violet-300 text-sm font-semibold mb-5 backdrop-blur-sm">
                  <Brain className="w-4 h-4" />
                  Neurobiología
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-5">
                  Vulnerabilidad{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    neurobiológica
                  </span>
                </h2>
                <p className="text-white text-xl max-w-2xl mx-auto">
                  La adolescencia es un período crítico de máxima plasticidad cerebral. La arquitectura de las plataformas digitales explota esta ventana de vulnerabilidad biológica.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {cerebralData.map((item, i) => (
                  <motion.div key={item.estructura} variants={fadeUp}
                    className="relative overflow-hidden rounded-2xl p-7 border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                          item.riesgo === "Crítico" ? "bg-rose-500/20 text-rose-300 border border-rose-500/20" : "bg-amber-500/20 text-amber-300 border border-amber-500/20"
                        }`}>
                          Riesgo {item.riesgo}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">{item.estructura}</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white/[0.04] rounded-xl border border-white/[0.05]">
                          <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Función</p>
                          <p className="text-white text-base">{item.funcion}</p>
                        </div>
                        <div className="p-3 bg-white/[0.04] rounded-xl border border-white/[0.05]">
                          <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Impacto digital</p>
                          <p className="text-white text-base">{item.impacto}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Dato destacado */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg mb-1">"Demencia Digital": la poda sináptica bajo el algoritmo</p>
                  <p className="text-white text-base leading-relaxed">
                    La poda sináptica adolescente está siendo moldeada por consumo superficial. Al externalizar funciones cognitivas al mundo digital, se produce una atrofia funcional del hipocampo y una reducción de la capacidad atencional a largo plazo.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IDENTIDAD Y CULTURA DEL LIKE ════════════════════════════════════ */}
      <section className="px-6 py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Imagen */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-[4/4.5] shadow-2xl shadow-slate-200/60 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=900&auto=format&fit=crop"
                  alt="Adolescente en redes sociales"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Badge sobre imagen */}
                <div className="absolute bottom-6 left-6 z-20 glass rounded-2xl px-4 py-3.5 flex items-center gap-3 border border-white/30">
                  <div className="w-9 h-9 bg-gradient-to-br from-brand-pink to-orange-400 rounded-xl flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Cultura del Like</p>
                    <p className="text-white/70 text-xs">La nueva validación social</p>
                  </div>
                </div>
              </div>
              {/* Decorativo */}
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-violet-200/50 rounded-[2.5rem] -z-10" />
            </motion.div>

            {/* Texto */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="order-1 lg:order-2 flex flex-col gap-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200/60 text-brand-pink text-sm font-semibold mb-4">
                  <Heart className="w-4 h-4" />
                  Identidad en la era algorítmica
                </span>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight">
                  La Cultura del Like y la{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400">Identidad</span>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-xl font-semibold text-brand-navy">
                La adolescencia es una etapa crucial para el desarrollo individual y la búsqueda de aceptación social.
              </motion.p>

              <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed">
                En el entorno digital, los adolescentes construyen <strong className="text-brand-navy">identidades múltiples</strong>. Los perfiles online muestran versiones idealizadas que generan comparación constante con estándares inalcanzables. El éxito en métricas (seguidores/likes) se convierte en un falso sinónimo de valor personal que erosiona la autenticidad.
              </motion.p>

              <motion.div variants={stagger} className="flex flex-col gap-3">
                {identidadData.map((item, i) => (
                  <motion.div key={item.titulo} variants={fadeUp}
                    className="gradient-border-card flex gap-4 p-5 rounded-2xl bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-base mb-1">{item.titulo}</p>
                      <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SALUD MENTAL ════════════════════════════════════════════════════ */}
      <section className="px-4 py-6 lg:py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 lg:px-14 lg:py-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[130px] glow-p pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-pink/15 rounded-full blur-[120px] glow-p pointer-events-none" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 dots-grid opacity-[0.04]" />

            <div className="relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center mb-14"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 text-cyan-300 text-sm font-semibold mb-5 backdrop-blur-sm">
                  <Activity className="w-4 h-4" />
                  Crisis clínica sin precedentes
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-5">
                  Impacto en la{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    salud mental
                  </span>
                </h2>
                <p className="text-white text-xl max-w-2xl mx-auto">
                  Las tasas de autolesiones se triplicaron. Casi el 50% de los jóvenes reportó pensamientos autolíticos. La evidencia es concluyente.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {saludData.map((item, i) => (
                  <motion.div key={item.titulo} variants={fadeUp}
                    className="relative overflow-hidden rounded-2xl p-7 border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg mb-5`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1">{item.titulo}</h3>
                      <p className={`text-sm font-semibold mb-4 ${item.textAccent}`}>{item.subtitulo}</p>
                      <p className="text-white text-base leading-relaxed mb-5">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.items.map((li, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-white text-base">
                            <CheckCircle2 className={`w-4 h-4 ${item.textAccent} shrink-0 mt-0.5`} />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ECOSISTEMAS DE RIESGO ════════════════════════════════════════════ */}
      <section className="px-6 py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
                <AlertTriangle className="w-4 h-4" />
                Entornos de alto riesgo
              </span>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight">
                Ecosistemas de riesgo
              </h2>
            </div>
            <p className="text-brand-navy max-w-sm lg:text-right text-base leading-relaxed font-medium">
              El ocio digital ha mutado hacia entornos donde los peligros éticos y económicos se normalizan.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {riesgosData.map((item, i) => (
              <motion.div key={item.titulo} variants={fadeUp}
                className="group relative gradient-border-card rounded-3xl overflow-hidden bg-white hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-400"
              >
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                <div className="relative z-10 p-8">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  <div className="mb-5">
                    <p className={`text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} leading-none`}>{item.stat}</p>
                    <p className="text-base text-brand-navy font-medium mt-1">{item.statLabel}</p>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">{item.titulo}</h3>
                  <p className="text-brand-navy text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ HOJA DE RUTA ════════════════════════════════════════════════════ */}
      <section id="hoja-de-ruta" className="px-6 py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5">
              <Star className="w-4 h-4" />
              Guía para familias y educadores
            </span>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-navy mb-5">
              Hoja de ruta para la salud digital
            </h2>
            <p className="text-brand-navy text-xl max-w-2xl mx-auto font-medium">
              La familia es el mayor influencer. Cinco pasos para pasar de la restricción pasiva al acompañamiento activo.
            </p>
          </motion.div>

          {/* Selector vertical */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-2 lg:w-[42%]">
              {roadmapData.map((step, i) => (
                <button key={step.id} onClick={() => setActiveRoadmap(i)}
                  className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                    activeRoadmap === i
                      ? "bg-white shadow-lg shadow-slate-200/60 border border-slate-100"
                      : "bg-slate-50 hover:bg-slate-100/80 border border-transparent"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0 ${
                    activeRoadmap === i
                      ? `bg-gradient-to-br ${step.color} text-white shadow-md`
                      : "bg-slate-200 text-slate-500"
                  }`}>
                    {step.id}
                  </div>
                  <span className={`font-semibold text-base transition-colors ${activeRoadmap === i ? "text-brand-navy" : "text-brand-navy/60"}`}>
                    {step.titulo}
                  </span>
                  {activeRoadmap === i && <ChevronRight className="w-4 h-4 text-brand-blue ml-auto shrink-0" />}
                </button>
              ))}
            </div>

            {/* Panel derecho */}
            <div className="lg:flex-1 gradient-border-card rounded-3xl p-8 lg:p-10 bg-white shadow-xl shadow-slate-200/50 relative overflow-hidden min-h-[280px]">
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-brand-light-blue to-transparent opacity-60 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-full pointer-events-none" />

              <AnimatePresence mode="wait">
                {roadmapData.map((step, i) =>
                  activeRoadmap === i ? (
                    <motion.div key={step.id}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 h-full flex flex-col"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-brand-navy/50 uppercase tracking-widest">Paso {step.id} de {roadmapData.length}</span>
                        <div className="flex gap-1">
                          {roadmapData.map((_, j) => (
                            <div key={j} className={`h-1 rounded-full transition-all duration-300 ${
                              j === activeRoadmap ? "w-5 bg-brand-blue" : "w-1.5 bg-slate-200"
                            }`} />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-4">{step.titulo}</h3>
                      <p className="text-brand-navy text-lg leading-relaxed">{step.desc}</p>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEMAS RELACIONADOS ══════════════════════════════════════════════ */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-end justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-navy">Temas relacionados</h2>
              <p className="text-slate-400 text-sm mt-0.5">Continúe explorando las guías de ciudadanía digital</p>
            </div>
            <a href="/tematicas" className="hidden sm:flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:text-brand-pink transition-colors">
              Ver todas <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "NNyA y el Entorno Digital", href: "/nnya-entorno-digital", desc: "Cómo perciben el mundo digital", color: "from-violet-500 to-brand-blue" },
              { label: "Violencia Digital en Infancias", href: "/violencia-digital-infancias", desc: "Grooming, ciberbullying y protección", color: "from-rose-500 to-brand-pink" },
              { label: "Huella Digital", href: "/huella-digital", desc: "Identidad, privacidad y control", color: "from-brand-blue to-cyan-400" },
            ].map((tema, i) => (
              <motion.a key={i} href={tema.href}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                className="group gradient-border-card flex items-center justify-between p-5 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tema.color} shadow-sm shrink-0`} />
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

      {/* ══ INFOGRAFÍA ═════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-violet-500/10 via-transparent to-brand-blue/10 blur-3xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_30px_80px_rgba(99,102,241,0.1),0_4px_24px_rgba(0,0,0,0.08)] bg-white">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#0f0c29] to-[#1a1654] border-b border-white/[0.07]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center min-w-0">
                  <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-3 sm:px-4 py-1 flex items-center gap-2 max-w-[280px] w-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
                    <span className="text-xs text-white/50 font-mono truncate">infografia — Hiperconectividad Digital</span>
                  </div>
                </div>
                <div className="w-10 sm:w-16 shrink-0" />
              </div>
              <div className="bg-white flex justify-center">
                <div className="relative group w-full lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={INFOGRAFIA_PATH}
                    alt="Infografía Hiperconectividad Digital"
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
              <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CARRUSEL ════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-brand-light-blue">
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
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-900 flex items-center justify-center shadow-lg shadow-violet-600/25 shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-violet-600 tracking-widest uppercase mb-0.5">Presentación</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">Hiperconectividad Digital</h2>
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
                <button onClick={prevSlide} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button onClick={nextSlide} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Siguiente">
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
                        ? "w-6 sm:w-8 h-2.5 bg-violet-600 shadow-[0_0_8px_#7C3AED]"
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

      {/* ══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 lg:py-28 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] p-10 lg:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0618] via-[#0d0f2b] to-[#06101a]" />
          <div className="absolute inset-0 dots-grid opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/25 rounded-full blur-[120px] glow-p pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[110px] glow-p pointer-events-none" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-cyan-600/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 border border-white/[0.05] rounded-[2.5rem]" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/15 flex items-center justify-center mb-8 shadow-xl">
              <Star className="w-8 h-8 text-yellow-300" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/60 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              #SuMayorInfluencer es usted
            </div>

            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.05] max-w-3xl">
              Reconectar con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-brand-blue">
                la realidad
              </span>
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mb-10 leading-relaxed">
              La estabilidad emocional de los jóvenes no puede ser subcontratada a una plataforma digital. Su presencia, empatía y sentido común son irremplazables en el entorno digital de sus hijos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
<a href="/tematicas"
                className="px-9 py-4 rounded-2xl font-semibold text-white bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:bg-white/[0.13] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Ver todas las temáticas
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
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
                  alt="Infografía Hiperconectividad Digital — pantalla completa"
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
    </div>
  )
}
