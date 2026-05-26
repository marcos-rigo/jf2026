"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Smartphone,
  ShieldCheck,
  HeartPulse,
  MessageCircle,
  Users,
  Eye,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Settings,
  Download,
  Fingerprint,
  Baby,
  Wifi,
  Brain,
  Star,
  TrendingUp,
  Clock,
  Lock,
  Zap,
  AlertCircle,
  ArrowRight,
  Play,
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

const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) =>
  `/weekly-content/2026-W24/carrusel/${i + 1}.svg`
)

const INFOGRAFIA_PATH = "/weekly-content/2026-W24/infografia%206.png"

// ── Animaciones ───────────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

// ── Data ──────────────────────────────────────────────────────────────────────
type CardData = {
  id: number
  titulo: string
  desc: string
  icono: React.ElementType
  gradient: string
}

const percepciones: CardData[] = [
  {
    id: 1,
    titulo: "La plaza virtual",
    desc: "Para los pibes no hay 'mundo virtual' y 'mundo real'. Su vida social transcurre simultáneamente en ambos espacios sin distinción.",
    icono: Users,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    titulo: "La cámara de eco",
    desc: "Sufren la 'adulación algorítmica': las redes les muestran contenido afín, limitando su exposición a opiniones diferentes.",
    icono: HeartPulse,
    gradient: "from-brand-pink to-orange-400",
  },
  {
    id: 3,
    titulo: "Privacidad en tensión",
    desc: "Saben que cuidar sus datos es importante, pero muchas veces priorizan la exposición para sentir que pertenecen al grupo.",
    icono: Fingerprint,
    gradient: "from-violet-500 to-brand-blue",
  },
  {
    id: 4,
    titulo: "Huella imborrable",
    desc: "Comparten fotos o pensamientos sin medir que esa información conforma una identidad digital que los acompañará siempre.",
    icono: Eye,
    gradient: "from-emerald-400 to-teal-500",
  },
]

const estadisticas = [
  {
    valor: "93%",
    texto: "De los adolescentes usa el celular para relacionarse con sus amigos.",
    icono: Smartphone,
    color: "from-brand-blue to-cyan-400",
  },
  {
    valor: "81%",
    texto: "Considera que proteger su privacidad en Internet es muy importante.",
    icono: Lock,
    color: "from-brand-pink to-orange-400",
  },
  {
    valor: "55%",
    texto: "De los padres subestima el tiempo real que sus hijos pasan conectados.",
    icono: Clock,
    color: "from-violet-500 to-brand-blue",
  },
]

const pasosMediacion = [
  {
    id: 1,
    titulo: "Dialogá sin juzgar",
    desc: "Preguntales a qué juegan, a quiénes siguen en TikTok o Instagram y qué les divierte. Mostrar interés genuino abre las puertas para hablar de temas más difíciles después.",
    icono: MessageCircle,
    color: "bg-gradient-to-br from-brand-blue to-cyan-400",
  },
  {
    id: 2,
    titulo: "Configuren juntos",
    desc: "Sentate con ellos a revisar la privacidad de sus perfiles. Enseñales a poner cuentas en privado, desactivar la ubicación y gestionar quién puede comentar sus fotos.",
    icono: Settings,
    color: "bg-gradient-to-br from-emerald-400 to-teal-500",
  },
  {
    id: 3,
    titulo: "Pensamiento crítico",
    desc: "Ayudalos a dudar. ¿Esa noticia es real? ¿Ese influencer está sponsoreado? Fomentar la duda es la mejor defensa contra la desinformación y el grooming.",
    icono: Lightbulb,
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    id: 4,
    titulo: "Pacten los límites",
    desc: "La prohibición total rara vez funciona. Es mejor acordar horarios libres de pantallas (ej: durante la cena o antes de dormir) para cuidar su higiene del sueño.",
    icono: ShieldCheck,
    color: "bg-gradient-to-br from-brand-pink to-violet-500",
  },
]

const herramientas = [
  {
    titulo: "Guía de Privacidad",
    desc: "Paso a paso para configurar la seguridad en TikTok, Instagram y WhatsApp junto a tus hijos.",
    icono: ShieldCheck,
    gradient: "from-brand-blue/10 to-cyan-400/10",
    border: "border-brand-blue/20",
    iconBg: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
    tag: "Descargable",
  },
  {
    titulo: "Glosario Digital",
    desc: "Grooming, Sharenting, Sexting... ¿Qué significan y cómo detectarlos antes de que sea tarde?",
    icono: BookOpen,
    gradient: "from-brand-pink/10 to-orange-400/10",
    border: "border-brand-pink/20",
    iconBg: "bg-brand-pink/10",
    iconColor: "text-brand-pink",
    tag: "Lectura",
  },
  {
    titulo: "Control Parental",
    desc: "Apps y configuraciones recomendadas para acompañar sin invadir. El equilibrio entre protección y autonomía.",
    icono: Smartphone,
    gradient: "from-violet-500/10 to-brand-blue/10",
    border: "border-violet-400/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    tag: "Herramientas",
  },
]

const consejosRapidos = [
  { texto: "No compartas fotos de ellos sin pedirles permiso (Sharenting)", icono: "📸" },
  { texto: "Enseñales a bloquear y reportar", icono: "🚫" },
  { texto: "El 'Modo Avión' ayuda a desconectar", icono: "✈️" },
  { texto: "Vos sos su principal modelo a seguir", icono: "⭐" },
  { texto: "Hablen sobre el cyberbullying", icono: "💬" },
  { texto: "No todo lo que brilla en redes es real", icono: "🔍" },
]

const señalesAlerta = [
  { titulo: "Cambios de humor al salir de las redes", icono: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
  { titulo: "Secretismo extremo con el teléfono", icono: Lock, color: "text-amber-500", bg: "bg-amber-50" },
  { titulo: "Dificultad para dormir o relajarse", icono: Brain, color: "text-violet-500", bg: "bg-violet-50" },
  { titulo: "Pérdida de interés en actividades offline", icono: TrendingUp, color: "text-brand-blue", bg: "bg-blue-50" },
]

// ── Componente ────────────────────────────────────────────────────────────────
export function NnyaEntornoDigitalContent() {
  const [pasoActivo, setPasoActivo] = useState(1)

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
    <div className="w-full bg-slate-50 font-sans text-brand-navy overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue via-white to-blue-50 z-0 pointer-events-none" />
        <div className="absolute top-[-8%] right-[-4%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-brand-blue to-cyan-400 blur-[140px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-4%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-brand-pink to-orange-300 blur-[140px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-violet-300/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-brand-blue/20 shadow-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              <span className="text-sm font-semibold tracking-widest text-brand-blue uppercase">
                Ciudadanía Digital
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-display font-extrabold text-brand-navy leading-[1.05] tracking-tight mb-6">
              ¿Cómo ven los pibes el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-violet-500 to-brand-pink">
                mundo digital?
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-4 leading-relaxed">
              Para los <strong className="text-brand-navy">niños, niñas y adolescentes</strong>, Internet no es una herramienta más: es el lugar donde aprenden, juegan, construyen su identidad y se relacionan.
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Entender su mirada es el primer paso para acompañarlos de manera consciente y efectiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full font-bold text-white shadow-lg shadow-brand-blue/25 bg-gradient-to-r from-brand-blue to-violet-600 hover:scale-[1.03] hover:shadow-brand-blue/40 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Conocé la guía
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-brand-navy bg-white border-2 border-slate-200 shadow-sm hover:border-brand-blue/40 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                Ver datos <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[420px] mx-auto">
              {/* Capas decorativas */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-cyan-400 rounded-[3rem] rotate-6 shadow-2xl opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-bl from-violet-500 to-brand-blue rounded-[3rem] -rotate-3 opacity-90 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621274283134-f0a57b39cf49?q=80&w=800&auto=format&fit=crop"
                  alt="Adolescente usando tecnología"
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>

              {/* Badge flotante — izquierda */}
              <div className="absolute -bottom-6 -left-8 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-brand-light-blue rounded-2xl text-brand-blue shrink-0">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-display font-black text-brand-navy leading-none">+90%</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Conectados a diario</p>
                </div>
              </div>

              {/* Badge flotante — derecha */}
              <div className="absolute -top-4 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="p-2.5 bg-pink-50 rounded-xl text-brand-pink shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-display font-black text-brand-navy leading-none">6h+</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">Por día en pantallas</p>
                </div>
              </div>

              {/* Wifi icon flotante */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                <Wifi className="w-7 h-7 text-cyan-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Explorá</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-blue to-transparent" />
        </div>
      </section>

      {/* ── PERCEPCIÓN ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-brand-light-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
              <Brain className="w-4 h-4" />
              Su lógica propia
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-5">
              Así perciben el entorno digital
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A diferencia de los adultos, las nuevas generaciones tienen una relación naturalizada con la tecnología. Así es como interpretan el entorno en el que viven todos los días.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {percepciones.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm shadow-slate-200/60 border border-white hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icono className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTADÍSTICAS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light-blue/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5">
              <TrendingUp className="w-4 h-4" />
              Datos reales
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4">
              Lo que nos dicen los números
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Datos extraídos de estudios recientes sobre consumo digital adolescente en Iberoamérica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estadisticas.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  <stat.icono className="w-6 h-6" />
                </div>
                <div className={`text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.color} mb-3 leading-none`}>
                  {stat.valor}
                </div>
                <div className="w-10 h-1 bg-slate-100 rounded-full mb-5" />
                <p className="text-slate-700 font-medium leading-relaxed">
                  {stat.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÑALES DE ALERTA ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-sm font-semibold mb-5">
              <AlertCircle className="w-4 h-4" />
              Prestá atención
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-4">
              Señales de alerta que no ignorar
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Si notás alguna de estas conductas de forma sostenida, es momento de iniciar una conversación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {señalesAlerta.map((señal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${señal.bg} flex items-center justify-center shrink-0`}>
                  <señal.icono className={`w-5 h-5 ${señal.color}`} />
                </div>
                <p className="font-medium text-slate-700">{señal.titulo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIACIÓN — STEPPER ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-5">
              <ShieldCheck className="w-4 h-4" />
              Guía práctica
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4">
              ¿Cómo acompañarlos?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              La mediación parental no se trata de espiar o prohibir, sino de educar y acompañar. Estos son los pasos clave para construir confianza digital.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="flex flex-col gap-3 lg:w-[38%]">
              {pasosMediacion.map((paso) => {
                const isActive = pasoActivo === paso.id
                return (
                  <button
                    key={paso.id}
                    onClick={() => setPasoActivo(paso.id)}
                    className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                      isActive
                        ? "bg-white shadow-lg shadow-slate-200/60 border border-slate-100"
                        : "bg-slate-50 hover:bg-slate-100/80 text-slate-500 border border-transparent"
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold font-display text-lg transition-all duration-300 ${
                      isActive ? `${paso.color} text-white shadow-md` : "bg-slate-200 text-slate-500"
                    }`}>
                      {paso.id}
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${isActive ? "text-brand-navy" : ""}`}>
                      {paso.titulo}
                    </span>
                    {isActive && <ArrowRight className="w-4 h-4 text-brand-blue ml-auto shrink-0" />}
                  </button>
                )
              })}
            </div>

            {/* Panel */}
            <div className="lg:flex-1 bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden min-h-[320px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-light-blue to-transparent opacity-60 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-full pointer-events-none" />

              <AnimatePresence mode="wait">
                {pasosMediacion.map(
                  (paso) =>
                    paso.id === pasoActivo && (
                      <motion.div
                        key={paso.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 h-full flex flex-col justify-center"
                      >
                        <div className={`w-16 h-16 rounded-2xl ${paso.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                          <paso.icono className="w-8 h-8" />
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                            Paso {paso.id} de {pasosMediacion.length}
                          </span>
                          <div className="flex gap-1">
                            {pasosMediacion.map((p) => (
                              <div
                                key={p.id}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  p.id === pasoActivo ? "w-6 bg-brand-blue" : "w-2 bg-slate-200"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">
                          {paso.titulo}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {paso.desc}
                        </p>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTAS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand-navy text-sm font-semibold mb-5 shadow-sm">
                <Zap className="w-4 h-4 text-amber-500" />
                Para implementar hoy
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4">
                Recursos útiles para vos
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Material y configuraciones recomendadas para que puedas implementar hoy mismo en casa o en la escuela.
              </p>
            </div>
            <button className="flex items-center gap-2 text-brand-pink font-bold hover:text-brand-blue transition-colors shrink-0 group">
              Ver todos los recursos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {herramientas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-white rounded-3xl p-8 border-2 ${item.border} hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 overflow-hidden cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                      <item.icono className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {item.titulo}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Acceder
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSEJOS RÁPIDOS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-brand-light-blue">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-6 shadow-sm">
              <Lightbulb className="w-4 h-4" />
              Para tener siempre a mano
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-10">
              Consejos rápidos al paso
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {consejosRapidos.map((consejo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                  className="bg-white px-5 py-3 rounded-full shadow-sm border border-white hover:shadow-md hover:border-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex items-center gap-3"
                >
                  <span className="text-lg">{consejo.icono}</span>
                  <span className="font-medium text-brand-navy text-sm">{consejo.texto}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONEXIÓN CON OTRAS TEMÁTICAS ─────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">
              Temas relacionados
            </h2>
            <p className="text-slate-500">Explorá las demás guías de ciudadanía digital</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Huella Digital", href: "/huella-digital", color: "from-brand-pink to-orange-400", desc: "Identidad y privacidad" },
              { label: "Violencia Digital", href: "/violencia-digital", color: "from-violet-500 to-brand-blue", desc: "Protección y derechos" },
              { label: "Alfabetización Mediática", href: "/alfabetizacion-mediatica", color: "from-emerald-400 to-teal-500", desc: "Información y criterio" },
            ].map((tema, i) => (
              <motion.a
                key={i}
                href={tema.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tema.color} shadow-sm`} />
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{tema.label}</p>
                    <p className="text-xs text-slate-400">{tema.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFOGRAFÍA ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-brand-blue/10 via-transparent to-violet-400/10 blur-3xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_30px_80px_rgba(66,114,187,0.1),0_4px_24px_rgba(0,0,0,0.08)] bg-white">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#1e1b4b] to-[#2e2a7a] border-b border-white/[0.07]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center min-w-0">
                  <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-3 sm:px-4 py-1 flex items-center gap-2 max-w-[280px] w-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shrink-0" />
                    <span className="text-xs text-white/50 font-mono truncate">infografia — NNyA y el Entorno Digital</span>
                  </div>
                </div>
                <div className="w-10 sm:w-16 shrink-0" />
              </div>
              <div className="bg-white flex justify-center">
                <div className="relative group w-full lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={INFOGRAFIA_PATH}
                    alt="Infografía NNyA y el Entorno Digital"
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
              <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CARRUSEL ─────────────────────────────────────────────────────────── */}
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
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-lg shadow-brand-blue/25 shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">Presentación</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">NNyA y el Entorno Digital</h2>
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
                <button onClick={prevSlide} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button onClick={nextSlide} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Siguiente">
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
                        ? "w-6 sm:w-8 h-2.5 bg-brand-blue shadow-[0_0_8px_#4272BB]"
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

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-violet-700 rounded-[2.5rem]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink rounded-full mix-blend-multiply filter blur-[130px] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8 shadow-xl">
              <Baby className="w-10 h-10 text-cyan-300" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Construyamos un entorno digital más seguro para los pibes
            </h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mb-10 leading-relaxed">
              La tecnología avanza rápido, pero el diálogo y el acompañamiento no pasan de moda. Involucrate hoy en la vida digital de tus hijos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 rounded-full font-bold text-brand-navy bg-white shadow-xl hover:scale-105 hover:shadow-white/20 transition-all duration-300 flex items-center gap-3">
                Descargá el Manual
                <Download className="w-5 h-5" />
              </button>
              <a
                href="/tematicas"
                className="px-10 py-4 rounded-full font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
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
                  alt="Infografía NNyA y el Entorno Digital — pantalla completa"
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
