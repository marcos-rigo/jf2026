"use client"

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion"
import Image from "next/image"
import { useAppStore } from "@/lib/ciudadania/app-store"
import { useTematicaProgress } from "@/lib/hooks/use-tematica-progress"
import { TematicaCompletarButton } from "@/components/tematica-completar-button"
import {
  Smartphone, ShieldCheck, HeartPulse, MessageCircle, Users, Eye, Lightbulb,
  ChevronRight, BookOpen, Settings, Download, Fingerprint, Baby, Wifi, Brain,
  Star, TrendingUp, Clock, Lock, Zap, AlertCircle, ArrowRight, Play,
  ChevronLeft, Images, X, ZoomIn, ZoomOut, Maximize2, Sparkles, Quote,
} from "lucide-react"

// ── Constants ────────────────────────────────────────────────────────────
const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) => `/weekly-content/2026-W24/carrusel/${i + 1}.svg`)
const INFOGRAFIA_PATH = "/weekly-content/2026-W24/infografia%206.png"
const ease = [0.22, 1, 0.36, 1] as const
const PARTICLE_COUNT = 45

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? '100%' : '-100%' }),
  center: { opacity: 1, x: '0%' },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? '-100%' : '100%' }),
}

// ── Particle system ──────────────────────────────────────────────────────
function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 6,
    delay: Math.random() * -8,
    speed: 0.6 + Math.random() * 0.4,
    opacity: 0.08 + Math.random() * 0.15,
    color: ["#4272BB", "#D5247A", "#003257", "#8B5CF6", "#06B6D4"][Math.floor(Math.random() * 5)],
    drift: Math.random() > 0.5 ? "particle-drift-1" : Math.random() > 0.5 ? "particle-drift-2" : "particle-drift-3",
  }))
}

function ParticleField() {
  const [particles, setParticles] = useState<ReturnType<typeof makeParticles>>([])
  useEffect(() => { setParticles(makeParticles()) }, [])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `${p.drift} ${6 + p.speed * 4}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

// ── 3D Tilt hook ─────────────────────────────────────────────────────────
function useTilt(ref: React.RefObject<HTMLDivElement | null>, maxTilt = 8) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)
    rotateY.set(deltaX * maxTilt)
    rotateX.set(-deltaY * maxTilt)
  }, [ref, maxTilt])

  const onMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}

// ── Animated counter hook ────────────────────────────────────────────────
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

// ── Circular progress ring ───────────────────────────────────────────────
function CircularProgress({ value, size = 140, strokeWidth = 6, color }: {
  value: number; size?: number; strokeWidth?: number; color: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setOffset(circumference - (value / 100) * circumference)
    })
    return () => cancelAnimationFrame(raf)
  }, [value, circumference])

  return (
    <svg width={size} height={size} className="circle-progress-ring drop-shadow-lg">
      <circle className="bg-circle" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} />
      <circle
        className="fg-circle"
        cx={size / 2} cy={size / 2} r={radius}
        strokeWidth={strokeWidth}
        stroke={`url(#${color.replace(/\s/g, '')})`}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <defs>
        <linearGradient id={color.replace(/\s/g, '')} x1="0%" y1="0%" x2="100%" y2="100%">
          {color.includes("brand-blue") && <><stop offset="0%" stopColor="#4272BB" /><stop offset="100%" stopColor="#06B6D4" /></>}
          {color.includes("brand-pink") && <><stop offset="0%" stopColor="#D5247A" /><stop offset="100%" stopColor="#F97316" /></>}
          {color.includes("violet") && <><stop offset="0%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#4272BB" /></>}
        </linearGradient>
      </defs>
    </svg>
  )
}

// ── Scroll progress ──────────────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left" style={{ scaleX, background: "linear-gradient(90deg, #4272BB, #D5247A, #8B5CF6)" }} />
  )
}

// ── Wave Divider ─────────────────────────────────────────────────────────
function WaveDivider({ flip }: { flip?: boolean }) {
  return (
    <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden -mb-[1px]">
      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="white">
        <path d={flip
          ? "M0,30 C360,100 720,0 1440,60 L1440,100 L0,100 Z"
          : "M0,60 C360,0 720,100 1080,40 C1260,10 1350,30 1440,50 L1440,100 L0,100 Z"
        } />
      </svg>
    </div>
  )
}

// ── Sources data ─────────────────────────────────────────────────────
const fuentes = [
  {
    titulo: "Infancia y Adolescencia en Entornos Digitales",
    autores: "Save the Children & GAD3",
    tipo: "Informe",
    datos: [
      { stat: "4,7 h", desc: "Uso diario de móvil reportado por adultos sin hijos", detalle: "frente a las 4,2 horas diarias de los propios adolescentes" },
      { stat: "45 %", desc: "De los adolescentes considera a sus padres como la figura de mayor credibilidad", detalle: "para formarlos en el uso responsable de plataformas digitales" },
    ],
    color: "from-brand-blue to-cyan-400",
    colorLight: "bg-blue-50/70",
    colorBorder: "border-blue-100",
    colorTag: "bg-brand-blue/10 text-brand-blue",
  },
  {
    titulo: "Uso de TikTok e Instagram en adolescentes",
    autores: "Redalyc",
    tipo: "Estudio",
    datos: [
      { stat: "1 h 30 min", desc: "Tiempo medio diario dedicado a TikTok", detalle: "por adolescentes como plataforma de video de corta duración" },
      { stat: "1 h 10 min", desc: "Tiempo medio diario dedicado a Instagram", detalle: "segunda red social más utilizada en tiempo de uso cotidiano" },
    ],
    color: "from-brand-pink to-orange-400",
    colorLight: "bg-pink-50/70",
    colorBorder: "border-pink-100",
    colorTag: "bg-brand-pink/10 text-brand-pink",
  },
]

// ── Data ─────────────────────────────────────────────────────────────────
type CardData = { id: number; titulo: string; desc: string; icono: React.ElementType; gradient: string; bgLight: string; borderColor: string }
const percepciones: CardData[] = [
  { id: 1, titulo: "La plaza digital", desc: "Para los chicos no hay 'mundo digital' y 'mundo real'. Su vida social transcurre simultáneamente en ambos espacios sin distinción.", icono: Users, gradient: "from-blue-500 to-cyan-400", bgLight: "bg-blue-50/70", borderColor: "border-blue-100" },
  { id: 2, titulo: "La cámara de eco", desc: "Sufren la 'adulación algorítmica': las redes les muestran contenido afín, limitando su exposición a opiniones diferentes.", icono: HeartPulse, gradient: "from-brand-pink to-orange-400", bgLight: "bg-pink-50/70", borderColor: "border-pink-100" },
  { id: 3, titulo: "Privacidad en tensión", desc: "Saben que cuidar sus datos es importante, pero muchas veces priorizan la exposición para sentir que pertenecen al grupo.", icono: Fingerprint, gradient: "from-violet-500 to-brand-blue", bgLight: "bg-violet-50/70", borderColor: "border-violet-100" },
  { id: 4, titulo: "Huella imborrable", desc: "Comparten fotos o pensamientos sin medir que esa información conforma una identidad digital que los acompañará siempre.", icono: Eye, gradient: "from-emerald-400 to-teal-500", bgLight: "bg-emerald-50/70", borderColor: "border-emerald-100" },
]
const estadisticas = [
  { valor: 93, suffix: "%", texto: "De los adolescentes usa el celular para relacionarse con sus amigos.", fuente: "UNICEF – Kids Online Iberoamérica (2019)", icono: Smartphone, color: "brand-blue to-cyan-400", iconGrad: "from-brand-blue to-cyan-400", numGrad: "from-brand-blue to-cyan-500", cardBg: "bg-blue-50/60", cardBorder: "border-blue-100" },
  { valor: 81, suffix: "%", texto: "Considera que proteger su privacidad en Internet es muy importante.", fuente: "UNICEF – Encuesta de Ciudadanía Digital Argentina (2022)", icono: Lock, color: "brand-pink to-orange-400", iconGrad: "from-brand-pink to-orange-400", numGrad: "from-brand-pink to-orange-500", cardBg: "bg-pink-50/60", cardBorder: "border-pink-100" },
  { valor: 55, suffix: "%", texto: "De los padres subestima el tiempo real que sus hijos pasan conectados.", fuente: "Fundación Telefónica – Generación Interactiva en Iberoamérica (2020)", icono: Clock, color: "violet-500 to-brand-blue", iconGrad: "from-violet-500 to-brand-blue", numGrad: "from-violet-500 to-violet-700", cardBg: "bg-violet-50/60", cardBorder: "border-violet-100" },
]
const pasosMediacion = [
  { id: 1, titulo: "Dialogá sin juzgar", desc: "Preguntales a qué juegan, a quiénes siguen en TikTok o Instagram y qué les divierte. Mostrar interés genuino abre las puertas para hablar de temas más difíciles después.", icono: MessageCircle, color: "bg-gradient-to-br from-brand-blue to-cyan-400" },
  { id: 2, titulo: "Configuren juntos", desc: "Sentate con ellos a revisar la privacidad de sus perfiles. Enseñales a poner cuentas en privado, desactivar la ubicación y gestionar quién puede comentar sus fotos.", icono: Settings, color: "bg-gradient-to-br from-emerald-400 to-teal-500" },
  { id: 3, titulo: "Chequeá su huella digital", desc: "Búscalos en Google juntos: revisá qué fotos, comentarios o perfiles son visibles para cualquier persona. Esa información conforma su reputación digital y puede acompañarlos durante años.", icono: Fingerprint, color: "bg-gradient-to-br from-cyan-500 to-brand-blue" },
  { id: 4, titulo: "Pensamiento crítico", desc: "Ayudalos a dudar. ¿Esa noticia es real? ¿Ese influencer está sponsoreado? Fomentar la duda es la mejor defensa contra la desinformación y el grooming.", icono: Lightbulb, color: "bg-gradient-to-br from-amber-400 to-orange-500" },
  { id: 5, titulo: "Confianza cero", desc: "Enseñales a no compartir datos personales —dirección, colegio, número de teléfono— con desconocidos en línea, aunque parezcan amigos. En Internet, la identidad de alguien no siempre es la que muestra.", icono: Lock, color: "bg-gradient-to-br from-rose-400 to-pink-500" },
  { id: 6, titulo: "Higiene digital", desc: "Establecé rutinas saludables: sin pantallas durante las comidas, activar el modo descanso antes de dormir y reservar espacios offline en familia. Pequeños hábitos que mejoran la concentración y el bienestar general.", icono: HeartPulse, color: "bg-gradient-to-br from-indigo-400 to-violet-500" },
  { id: 7, titulo: "Pacten los límites", desc: "La prohibición total rara vez funciona. Es mejor acordar horarios libres de pantallas (ej: durante la cena o antes de dormir) para cuidar su calidad del sueño.", icono: ShieldCheck, color: "bg-gradient-to-br from-brand-pink to-violet-500" },
]
const herramientas = [
  { titulo: "Guía de Privacidad", desc: "Paso a paso para configurar la seguridad en TikTok, Instagram y WhatsApp junto a tus hijos.", icono: ShieldCheck, gradient: "from-brand-blue to-cyan-400", tag: "Descargable" },
  { titulo: "Glosario Digital", desc: "Grooming, Sharenting, Sexting... ¿Qué significan y cómo detectarlos antes de que sea tarde?", icono: BookOpen, gradient: "from-brand-pink to-orange-400", tag: "Lectura" },
  { titulo: "Control Parental", desc: "Apps y configuraciones recomendadas para acompañar sin invadir. El equilibrio entre protección y autonomía.", icono: Smartphone, gradient: "from-violet-500 to-brand-blue", tag: "Herramientas" },
]
const consejosRapidos = [
  { texto: "Cuidá las fotos y videos que publicás de tus hijos", icono: "📸" },
  { texto: "El sharenting expone la identidad digital de tus hijos sin que ellos lo elijan", icono: "🧒" },
  { texto: "Enseñales a bloquear y reportar", icono: "🚫" },
  { texto: "El modo avión ayuda a desconectar", icono: "✈️" },
  { texto: "Tu ejemplo también educa: los hábitos digitales se aprenden mirándote a vos", icono: "⭐" },
  { texto: "Si usás el teléfono en la cena, les mostrás que está bien hacerlo", icono: "📱" },
  { texto: "Hablen sobre el cyberbullying", icono: "💬" },
  { texto: "No todo lo que brilla en las plataformas digitales es real", icono: "🔍" },
  { texto: "Enseñales a verificar la información antes de creerla y compartirla", icono: "✅" },
]
const señalesAlerta = [
  { titulo: "Cambios de humor al salir de las redes", icono: AlertCircle, color: "text-rose-500", bar: "bg-rose-400", iconBg: "bg-rose-100", cardBg: "bg-rose-50/70", cardBorder: "border-rose-200/60", desc: "Irritabilidad o tristeza profunda que aparece al alejarse del dispositivo."},
  { titulo: "Secretismo extremo con el teléfono", icono: Lock, color: "text-amber-600", bar: "bg-amber-400", iconBg: "bg-amber-100", cardBg: "bg-amber-50/70", cardBorder: "border-amber-200/60", desc: "Apaga la pantalla al acercarse un adulto o crea perfiles anónimos." },
  { titulo: "Dificultad para dormir o relajarse", icono: Brain, color: "text-violet-500", bar: "bg-violet-400", iconBg: "bg-violet-100", cardBg: "bg-violet-50/70", cardBorder: "border-violet-200/60", desc: "Insomnio, ansiedad o imposibilidad de estar offline sin angustia." },
  { titulo: "Pérdida de interés en actividades offline", icono: TrendingUp, color: "text-brand-blue", bar: "bg-brand-blue", iconBg: "bg-blue-100", cardBg: "bg-blue-50/70", cardBorder: "border-blue-200/60", desc: "Abandona deportes, amigos o hobbies que antes disfrutaba con entusiasmo." },
]

// ── Main component ──────────────────────────────────────────────────────
export function NnyaEntornoDigitalContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const progress = useTematicaProgress({ tematicaId: "nnya-entorno-digital", userId })
  const [pasoActivo, setPasoActivo] = useState(1)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 120])
  const heroFade = useTransform(heroProgress, [0, 0.7], [1, 0])

  const [statsVisible, setStatsVisible] = useState(false)
  const ringsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ringsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const counterVal0 = useCountUp(estadisticas[0].valor, 2.2, statsVisible)
  const counterVal1 = useCountUp(estadisticas[1].valor, 2.2, statsVisible)
  const counterVal2 = useCountUp(estadisticas[2].valor, 2.2, statsVisible)
  const counterVals = [counterVal0, counterVal1, counterVal2]

  // ── Carrusel ──────────────────────────────────────────────────────────
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  function goTo(index: number, dir: number) { setDirection(dir); setCurrentSlide(index) }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1) }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1) }

  // ── Lightbox ──────────────────────────────────────────────────────────
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
  function zoomOut() { setZoom(prev => { const n = +(prev - 0.5).toFixed(1); if (n <= 1) { setPan({ x: 0, y: 0 }); return 1 }; return n }) }
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }) }

  const ldMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoomRef.current <= 1) return; e.preventDefault(); setIsDragging(true)
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y }
  }, [])
  const ldMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return
    setPan({ x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx), y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my) })
  }, [isDragging])
  const ldMouseUp = useCallback(() => { setIsDragging(false); dragStartRef.current = null }, [])

  useEffect(() => {
    const el = lightboxAreaRef.current; if (!el || !lightboxOpen) return
    const wheelHandler = (e: WheelEvent) => { e.preventDefault(); const d = e.deltaY < 0 ? 0.3 : -0.3; setZoom(p => { const n = +(p + d).toFixed(1); if (n <= 1) { setPan({ x: 0, y: 0 }); return 1 }; return Math.min(4, n) }) }
    const ts = (e: TouchEvent) => { if (e.touches.length === 2) { e.preventDefault(); lastTouchDistRef.current = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) } else if (e.touches.length === 1) { dragStartRef.current = { mx: e.touches[0].clientX, my: e.touches[0].clientY, px: panRef.current.x, py: panRef.current.y } } }
    const tm = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) { const nd = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); const r = nd / lastTouchDistRef.current; lastTouchDistRef.current = nd; setZoom(p => { const n = +(p * r).toFixed(2); if (n <= 1) { setPan({ x: 0, y: 0 }); return 1 }; return Math.min(4, n) }) }
      else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) { setPan({ x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx), y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my) }) }
    }
    const te = () => { dragStartRef.current = null; lastTouchDistRef.current = null; setIsDragging(false) }
    el.addEventListener("wheel", wheelHandler, { passive: false })
    el.addEventListener("touchstart", ts, { passive: false })
    el.addEventListener("touchmove", tm, { passive: false })
    el.addEventListener("touchend", te)
    return () => { el.removeEventListener("wheel", wheelHandler); el.removeEventListener("touchstart", ts); el.removeEventListener("touchmove", tm); el.removeEventListener("touchend", te) }
  }, [lightboxOpen])
  useEffect(() => { if (!lightboxOpen) return; const k = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox() }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k) }, [lightboxOpen])

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-white font-sans text-brand-navy overflow-hidden bg-noise">
      <ScrollProgress />

      {/* ════════════════════════════════════════════════════════════════════
         HERO — mesh gradient + particles + parallax
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 overflow-hidden">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-mesh-animated z-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(135deg, #EEF4FB 0%, #ffffff 25%, #f0f4ff 50%, #ffffff 75%, #EEF4FB 100%)" }}
        />
        <div className="absolute inset-0 bg-tech-pattern z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-network-nodes z-0 pointer-events-none" />

        {/* Gradient orbs */}
        <div className="absolute top-[-8%] right-[-4%] w-[800px] h-[800px] rounded-full bg-gradient-to-r from-brand-blue/15 via-cyan-400/10 to-transparent blur-[160px] pointer-events-none animate-scale-breath" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-brand-pink/12 via-orange-300/8 to-transparent blur-[150px] pointer-events-none animate-float-slower" />
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-300/6 via-blue-200/4 to-transparent blur-[130px] pointer-events-none animate-float-slow" />

        {/* Particle field */}
        <ParticleField />

        {/* Parallax layer */}
        <motion.div style={{ y: heroY }} className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* ── Texto ── */}
            <motion.div style={{ opacity: heroFade }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-brand-blue/15 shadow-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
                <span className="text-sm font-semibold tracking-widest text-brand-blue uppercase">Ciudadanía Digital</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease }}
                className="text-[2.75rem] sm:text-5xl lg:text-[4.5rem] font-display font-extrabold text-brand-navy leading-[1.02] tracking-tight mb-6"
              >
                ¿Cómo ven los chicos el{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-violet-500 to-brand-pink bg-[length:200%_auto] animate-gradient">
                  entorno digital?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg lg:text-xl text-slate-600 mb-3 leading-relaxed"
              >
                Para los <strong className="text-brand-navy">niños, niñas y adolescentes</strong>, Internet no es una herramienta más: es el lugar donde aprenden, juegan, construyen su identidad y se relacionan.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg text-slate-500 mb-10 leading-relaxed"
              >
                Entender su mirada es el primer paso para acompañarlos de manera consciente y efectiva.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a href="#guia" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="group px-8 py-4 rounded-full font-bold text-white shadow-lg shadow-brand-blue/30 bg-gradient-to-r from-brand-blue to-violet-600 hover:shadow-xl hover:shadow-brand-blue/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Conocé la guía
                </motion.a>
              </motion.div>
            </motion.div>

            {/* ── Visual 3D stack ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.25, ease }}
              className="relative hidden lg:block"
              style={{ perspective: 1000 }}
            >
              <div className="relative w-full aspect-square max-w-[460px] mx-auto tilt-3d">
                {/* Floating decorative rings */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border-2 border-brand-blue/8 animate-float-slow" style={{ animationDelay: "-2s" }} />
                <div className="absolute -bottom-6 -left-12 w-20 h-20 rounded-full border-2 border-brand-pink/8 animate-float-slower" style={{ animationDelay: "-4s" }} />
                <div className="absolute top-[30%] -left-8 w-8 h-8 rounded-lg border border-cyan-200/20 rotate-45 animate-spin-slow" />

                {/* Layer 1 — decorativo trasero */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/50 to-cyan-400/40 rounded-[3rem] rotate-6 shadow-xl" />

                {/* Layer 2 — imagen principal */}
                <div className="absolute inset-0 rounded-[3rem] -rotate-3 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                    alt="Adolescentes en entorno digital"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  {/* Overlay de marca sutil encima de la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/35 via-brand-blue/15 to-violet-500/25" />
                </div>

                {/* Layer 3 — red de nodos SVG decorativa */}
                <div className="absolute inset-0 rounded-[3rem] -rotate-3 overflow-hidden pointer-events-none opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {[0,1,2,3,4,5,6,7].map(i => (
                      <circle key={i} cx={20 + i * 25} cy={30 + (i % 3) * 30} r={2.5} fill="white" />
                    ))}
                    {[0,1,2,3,4,5].map(i => (
                      <line key={i} x1={30 + i * 28} y1={40} x2={40 + i * 25} y2={80 + (i % 2) * 20} stroke="white" strokeWidth="0.6" />
                    ))}
                  </svg>
                </div>

                {/* Badge flotante — izquierda */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6, ease }}
                  className="absolute -bottom-5 -left-6 bg-white/70 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/50 flex items-center gap-4"
                >
                  <div className="p-3 bg-gradient-to-br from-brand-light-blue to-blue-100 rounded-2xl text-brand-blue shrink-0 shadow-inner">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-display font-black text-brand-navy leading-none">+90%</p>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">Conectados a diario</p>
                  </div>
                </motion.div>

                {/* Badge flotante — derecha */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease }}
                  className="absolute -top-3 -right-5 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
                >
                  <div className="p-2.5 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl text-brand-pink shrink-0 shadow-inner">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-display font-black text-brand-navy leading-none">6h+</p>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">Por día en pantallas</p>
                  </div>
                </motion.div>

                {/* Wifi flotante */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 150 }}
                  className="absolute top-1/2 -right-8 -translate-y-1/2 w-14 h-14 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 flex items-center justify-center"
                >
                  <Wifi className="w-7 h-7 text-cyan-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
            <motion.div className="w-1 h-2 rounded-full bg-brand-blue" />
          </motion.div>
          <span className="text-[10px] text-slate-400 font-semibold tracking-[0.2em] uppercase mt-1">Scroll</span>
        </motion.div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider flip />

      {/* ════════════════════════════════════════════════════════════════════
         PERCEPCIÓN — 3D tilt cards
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-network-nodes pointer-events-none" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-pink/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue/60 backdrop-blur-sm border border-brand-blue/15 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
              <Brain className="w-4 h-4" />
              Su lógica propia
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-brand-navy mb-5 leading-tight">
              Así perciben el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500 bg-[length:200%_auto] animate-gradient">
                entorno digital
              </span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              A diferencia de los adultos, las nuevas generaciones tienen una relación naturalizada con la tecnología.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {percepciones.map((item, i) => {
              const cardRef = useRef<HTMLDivElement>(null!)
              const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(cardRef)
              return (
                <motion.div
                  key={item.id}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  style={{ rotateX, rotateY }}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  className={`tilt-3d group relative ${item.bgLight} rounded-3xl p-8 shadow-md border ${item.borderColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default overflow-hidden`}
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`} />
                  {/* Subtle glow on hover */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-300`}>
                      <item.icono className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                      {item.titulo}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            )}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider />

      {/* ════════════════════════════════════════════════════════════════════
         ESTADÍSTICAS — circular progress rings
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={ringsRef} className="py-28 px-6 lg:px-12 bg-gradient-to-b from-brand-light-blue/30 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern pointer-events-none" />
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <img src="/img/nnya/stats-bg.svg" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-60" aria-hidden />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-brand-blue/15 text-brand-blue text-sm font-semibold mb-5 shadow-sm">
              <TrendingUp className="w-4 h-4" />
              Datos reales
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-brand-navy mb-5 leading-tight">
              Lo que nos dicen los{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400 bg-[length:200%_auto] animate-gradient">
                números
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Datos extraídos de estudios recientes sobre consumo digital adolescente en Iberoamérica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {estadisticas.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className={`group flex flex-col items-center text-center ${stat.cardBg} rounded-3xl p-8 lg:p-10 border ${stat.cardBorder} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="relative mb-8">
                  <CircularProgress value={statsVisible ? counterVals[i] : 0} size={160} strokeWidth={8} color={stat.color} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.iconGrad} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icono className="w-7 h-7" />
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span className={`text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.numGrad} leading-none`}>
                    {counterVals[i]}
                  </span>
                  <span className={`text-3xl lg:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.numGrad}`}>
                    {stat.suffix}
                  </span>
                </div>
                <div className={`w-10 h-1 bg-gradient-to-r ${stat.iconGrad} rounded-full mb-5 opacity-40`} />
                <p className="text-slate-700 font-medium leading-relaxed text-base max-w-xs mb-4">{stat.texto}</p>
                <p className="text-xs text-slate-400 italic max-w-xs">Fuente: {stat.fuente}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider flip />

      {/* ════════════════════════════════════════════════════════════════════
         SEÑALES DE ALERTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-network-nodes pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50/60 backdrop-blur-sm border border-rose-200/60 text-rose-600 text-sm font-semibold mb-5 shadow-sm">
              <AlertCircle className="w-4 h-4" />
              Prestá atención
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-5 leading-tight">
              Señales de alerta<br className="hidden sm:block" /> que no podemos ignorar
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">Si notás alguna de estas conductas de forma sostenida, es momento de iniciar una conversación.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {señalesAlerta.map((señal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                whileHover={{ y: -4 }}
                className={`group relative ${señal.cardBg} rounded-2xl p-7 border ${señal.cardBorder} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute top-0 inset-x-0 h-1 ${señal.bar} rounded-t-2xl opacity-70`} />
                <div className={`w-14 h-14 rounded-2xl ${señal.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <señal.icono className={`w-7 h-7 ${señal.color}`} />
                </div>
                <p className="font-bold text-brand-navy text-xl mb-2 leading-snug">{señal.titulo}</p>
                <p className="text-slate-500 text-base leading-relaxed">{señal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider />

      {/* ════════════════════════════════════════════════════════════════════
         GUÍA PRÁCTICA
      ════════════════════════════════════════════════════════════════════ */}
      <section id="guia" className="py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-brand-light-blue/10 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(66,114,187,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(213,36,122,0.12),_transparent_22%)] pointer-events-none" />
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute right-10 top-36 w-40 h-40 rounded-full bg-brand-pink/15 blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-44 h-44 rounded-full bg-violet-200/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-14 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/70 text-brand-blue text-sm font-semibold mb-5 shadow-lg shadow-brand-blue/10">
              <ShieldCheck className="w-4 h-4" />
              Guía práctica
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-5 leading-tight">
              ¿Cómo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-violet-500 bg-[length:200%_auto] animate-gradient">
                acompañarlos?
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed">Siete acciones concretas para construir confianza, establecer límites saludables y acompañar su autonomía digital.</p>
          </motion.div>

          {/* ── Mobile: acordeón vertical ─────────────────────────────── */}
          <div className="lg:hidden space-y-3">
            {pasosMediacion.map((paso, idx) => {
              const isOpen = pasoActivo === paso.id
              const Icon = paso.icono
              return (
                <motion.div
                  key={paso.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.45, ease }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-blue/30 bg-white shadow-xl shadow-brand-blue/8'
                      : 'border-slate-200/70 bg-white/90 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setPasoActivo(paso.id)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <div className={`flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-2xl ${paso.color} text-white text-sm font-bold shadow-md`}>
                      {paso.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-snug ${isOpen ? 'text-brand-navy' : 'text-slate-700'}`}>
                        {paso.titulo}
                      </p>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">Paso {paso.id} de 7</p>
                    </div>
                    <div className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : '-rotate-90'}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                          <div className="flex items-start gap-4 pt-4">
                            <div className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl ${paso.color} text-white shadow-lg`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <p className="text-sm leading-7 text-slate-600">{paso.desc}</p>
                          </div>
                          <div className="mt-4 rounded-xl bg-brand-navy/95 px-4 py-3 text-white">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-1">Tip clave</p>
                            <p className="text-xs leading-relaxed text-slate-200">Escuchá sin interrumpir: el acompañamiento digital debe ser una conversación, no un interrogatorio.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* ── Desktop: sidebar numérico + panel de contenido ────────── */}
          <div className="hidden lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-6 items-start">

            {/* Sidebar con los 7 pasos */}
            <div className="space-y-2 sticky top-28">
              {pasosMediacion.map((paso, idx) => {
                const isActive = pasoActivo === paso.id
                const Icon = paso.icono
                return (
                  <motion.button
                    key={paso.id}
                    onClick={() => setPasoActivo(paso.id)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07, duration: 0.45, ease }}
                    className={`group w-full flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-brand-blue/35 bg-white shadow-xl shadow-brand-blue/10 scale-[1.02]'
                        : 'border-transparent bg-white/60 hover:bg-white hover:border-slate-200/80 hover:shadow-md'
                    }`}
                  >
                    <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl ${paso.color} text-white text-sm font-bold shadow-md transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                      {isActive ? <Icon className="w-5 h-5" /> : paso.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-snug truncate transition-colors ${isActive ? 'text-brand-navy' : 'text-slate-600 group-hover:text-slate-800'}`}>
                        {paso.titulo}
                      </p>
                      <p className={`text-[10px] uppercase tracking-widest mt-0.5 transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-400'}`}>
                        Paso {paso.id}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 w-1.5 h-8 rounded-full transition-all duration-300 ${isActive ? 'bg-brand-blue opacity-100' : 'opacity-0'}`} />
                  </motion.button>
                )
              })}
            </div>

            {/* Panel de contenido activo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={pasoActivo}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                {(() => {
                  const paso = pasosMediacion[pasoActivo - 1] ?? pasosMediacion[0]
                  const Icon = paso.icono
                  return (
                    <>
                      {/* Card principal */}
                      <div className="rounded-3xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-200/60 p-8 xl:p-10">
                        <div className="flex items-start justify-between gap-6 mb-6">
                          <div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue mb-4">
                              Paso {pasoActivo} de 7
                            </span>
                            <h3 className="text-3xl xl:text-4xl font-display font-bold text-brand-navy leading-tight">
                              {paso.titulo}
                            </h3>
                          </div>
                          <div className={`flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-3xl ${paso.color} text-white shadow-2xl`}>
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>
                        <p className="text-base xl:text-lg leading-8 text-slate-600">{paso.desc}</p>

                        {/* Progress dots */}
                        <div className="flex gap-2 mt-8">
                          {pasosMediacion.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setPasoActivo(p.id)}
                              className={`rounded-full transition-all duration-300 ${
                                p.id === pasoActivo ? 'w-8 h-2.5 bg-brand-blue' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Cards secundarias */}
                      <div className="grid grid-cols-2 gap-5">
                        <div className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 to-violet-50 p-6 shadow-sm">
                          <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
                            Qué lográs
                          </span>
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            Cada paso es una acción concreta con foco en confianza, límites saludables y autonomía digital.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800/10 bg-slate-950/95 p-6 text-white shadow-lg">
                          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Consejo clave</p>
                          <p className="mt-3 text-sm leading-relaxed text-slate-200">
                            Empezá con preguntas abiertas y escuchá sin interrumpir: el acompañamiento digital es una conversación, no un interrogatorio.
                          </p>
                        </div>
                      </div>

                      {/* Nav anterior / siguiente */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setPasoActivo(Math.max(1, pasoActivo - 1))}
                          disabled={pasoActivo === 1}
                          className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:border-brand-blue/30 hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="w-4 h-4" /> Anterior
                        </button>
                        <button
                          onClick={() => setPasoActivo(Math.min(7, pasoActivo + 1))}
                          disabled={pasoActivo === 7}
                          className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-brand-blue/30 bg-brand-blue py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-all hover:bg-brand-blue/90 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Siguiente <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider flip />

      {/* ════════════════════════════════════════════════════════════════════
         CONSEJOS RÁPIDOS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-brand-light-blue/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="absolute inset-0 bg-network-nodes pointer-events-none" />
        <img src="/img/nnya/pattern-bubbles.svg" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-50" aria-hidden />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-light-blue/30 via-transparent to-violet-100/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-brand-blue/15 text-brand-blue text-sm font-semibold mb-6 shadow-sm">
              <Lightbulb className="w-4 h-4" />
              Para tener siempre a mano
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-4 leading-tight">
              Consejos rápidos al paso
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">Acciones concretas que podés aplicar desde hoy en casa o en el aula.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {consejosRapidos.map((consejo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 130, damping: 14 }}
                whileHover={{ y: -5 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-brand-blue/20 hover:bg-white transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-3xl shrink-0 group-hover:scale-110 transition-transform duration-200">{consejo.icono}</span>
                <p className="font-semibold text-brand-navy text-base leading-relaxed">{consejo.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider flip />

      {/* ════════════════════════════════════════════════════════════════════
         INFOGRAFÍA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
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
                  <img src={INFOGRAFIA_PATH} alt="Infografía NNyA y el Entorno Digital" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]" />
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

            {/* Fuentes de la infografía */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fuentes de los datos</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fuentes.map((fuente, i) => (
                  <div key={i} className={`${fuente.colorLight} rounded-xl border ${fuente.colorBorder} p-4 relative overflow-hidden`}>
                    <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${fuente.color} rounded-t-xl`} />
                    <div className="flex items-start gap-2.5 mb-3">
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${fuente.colorTag} shrink-0 mt-0.5`}>
                        {fuente.tipo}
                      </span>
                      <div>
                        <p className="font-bold text-brand-navy text-xs leading-snug">{fuente.titulo}</p>
                        <p className="text-slate-400 text-[11px] mt-0.5">{fuente.autores}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {fuente.datos.map((dato, j) => (
                        <div key={j} className="flex items-start gap-2 bg-white/70 rounded-lg p-2.5 border border-white/80">
                          <span className={`text-base font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${fuente.color} leading-none shrink-0 pt-px`}>
                            {dato.stat}
                          </span>
                          <div>
                            <p className="text-slate-700 font-semibold text-[11px] leading-snug">{dato.desc}</p>
                            <p className="text-slate-400 text-[10px] mt-0.5 leading-relaxed">{dato.detalle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         CARRUSEL
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-brand-light-blue/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="bg-white/60 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/20 rounded-[2.5rem] overflow-hidden">
              <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-lg shadow-brand-blue/20 shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">Presentación</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 font-display">NNyA y el Entorno Digital</h2>
                  </div>
                </div>
                <span className="text-slate-400 text-sm font-mono shrink-0 bg-slate-50/60 px-3 py-1.5 rounded-full">{currentSlide + 1} / {CARRUSEL_IMAGES.length}</span>
              </div>
              <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
                <AnimatePresence mode="sync" custom={direction}>
                  <motion.div
                    key={currentSlide} custom={direction} variants={slideVariants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image src={CARRUSEL_IMAGES[currentSlide]} alt={`Lámina ${currentSlide + 1}`} width={1200} height={800} className="w-full h-full object-contain" priority />
                  </motion.div>
                </AnimatePresence>
                <button onClick={prevSlide} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Anterior">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button onClick={nextSlide} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95" aria-label="Siguiente">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5">
                {CARRUSEL_IMAGES.map((_, i) => (
                  <button key={i} onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                    className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 sm:w-8 h-2.5 bg-brand-blue shadow-[0_0_8px_#4272BB]" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Ir a lámina ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider />

      {/* ════════════════════════════════════════════════════════════════════
         TEMAS RELACIONADOS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-4 leading-tight">Temas relacionados</h2>
            <p className="text-slate-500">Explorá las demás guías de ciudadanía digital</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Huella Digital", href: "/huella-digital", color: "from-brand-pink to-orange-400", desc: "Identidad y privacidad" },
              { label: "Violencia Digital", href: "/violencia-digital", color: "from-violet-500 to-brand-blue", desc: "Protección y derechos" },
              { label: "Alfabetización Mediática", href: "/alfabetizacion-mediatica", color: "from-emerald-400 to-teal-500", desc: "Información y criterio" },
            ].map((tema, i) => (
              <motion.a
                key={i} href={tema.href}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, ease }}
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tema.color} shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{tema.label}</p>
                    <p className="text-xs text-slate-400">{tema.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <WaveDivider flip />

      {/* ════════════════════════════════════════════════════════════════════
         CTA FINAL
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-6xl mx-auto rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#1a3a6a] to-violet-800 rounded-[2.5rem]" />
          <div className="absolute inset-0 bg-dot-grid-dark rounded-[2.5rem] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/20 rounded-full mix-blend-soft-light filter blur-[130px] pointer-events-none animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-float-slower" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none animate-pulse-soft" />

          {/* Floating particles in CTA */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.5rem]" aria-hidden>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-white/10"
                style={{
                  left: `${10 + i * 18}%`, top: `${20 + (i % 3) * 30}%`,
                  animation: `float-${i % 2 === 0 ? 'slow' : 'slower'} ${4 + i}s ease-in-out ${-i * 2}s infinite`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="relative w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl shadow-black/10 overflow-hidden"
            >
              <img src="/img/nnya/shield-illustration.svg" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" aria-hidden />
              <Baby className="w-10 h-10 text-cyan-300 relative z-10" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Construyamos un entorno digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 bg-[length:200%_auto] animate-gradient">
                más seguro
              </span>{" "}
              para los chicos
            </h2>

            <p className="text-xl text-blue-100/70 max-w-2xl mb-10 leading-relaxed">
              La tecnología avanza rápido, pero el diálogo y el acompañamiento no pasan de moda. Involucrate hoy en la vida digital de tus hijos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/tematicas" className="group px-10 py-4 rounded-full font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                Ver todas las temáticas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
         LIGHTBOX
      ════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors">
              <X className="w-4 h-4" /> Cerrar
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl" onClick={e => e.stopPropagation()}>
              <button onClick={zoomOut} disabled={zoom <= 1} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Reducir zoom">
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>
              <button onClick={zoomIn} disabled={zoom >= 4} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" aria-label="Aumentar zoom">
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoom > 1 && (
                <button onClick={resetZoom} className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3" aria-label="Restablecer zoom">
                  <Maximize2 className="w-3.5 h-3.5" /> Restablecer
                </button>
              )}
            </div>
            <div ref={lightboxAreaRef} className="absolute inset-0 flex items-center justify-center overflow-hidden"
              onMouseDown={ldMouseDown} onMouseMove={ldMouseMove} onMouseUp={ldMouseUp} onMouseLeave={ldMouseUp}
            >
              <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.25 }} onClick={e => e.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={INFOGRAFIA_PATH} alt="Infografía NNyA y el Entorno Digital — pantalla completa"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl select-none"
                  style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: "center center", transition: isDragging ? "none" : "transform 0.15s ease", cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
                  onMouseDown={ldMouseDown} draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
    </div>
  )
}
