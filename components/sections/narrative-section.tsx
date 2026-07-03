"use client"

import { useEffect, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Radio,
  Monitor,
  Lock,
  HelpCircle,
  Heart,
  Home,
  Shield,
  Users,
  GitBranch,
  GraduationCap,
  FlaskConical,
  ShieldCheck,
  PenTool,
  Zap,
  EyeOff,
  ArrowRight,
  Award,
  Globe,
  History,
  BookOpen,
  MapPin,
} from "lucide-react"
import IdeayInfinity from "@/components/sections/ideay-infinity"

// ── Colors ────────────────────────────────────────────────────────────────────
const NAVY = "#003257"
const BLUE = "#4272BB"
const PINK = "#D5247A"
const LIGHT_BLUE = "#EEF4FB"
const CREMA = "#F7F4EF"
const GRIS_BODY = "#4A5568"
const TERRITORY_BG = "#001e3c"

// ── Types ─────────────────────────────────────────────────────────────────────
interface Territory {
  number: string
  tag: string
  title: string
  body: string
  status: string
  accent: "blue" | "pink"
}

interface Gap {
  index: string
  actor: string
  blind: string
  need: string
}

interface ComparisonItem {
  label: string
  icon: string
  value: string
  featured?: boolean
}

interface ComparisonColumn {
  id: "traditional" | "present"
  columnLabel: string
  items: ComparisonItem[]
}

interface MethodPiece {
  type: string
  name: string
  description: string
  icon: string
  imageSlot: string
}

interface StatSecondary {
  number: number
  label: string
  detail: string
}

interface Achievement {
  flag: string
  org: string
  label: string
  detail: string
  year: string
}

interface Verb {
  verb: string
  description: string
}

// ── Data ──────────────────────────────────────────────────────────────────────
const territories: Territory[] = [
  {
    number: "01",
    tag: "Conocido",
    title: "El territorio físico",
    body: "La escuela, el barrio, la familia, la institución. El territorio que sabemos habitar — con reglas conocidas, lenguaje compartido y estructuras de cuidado consolidadas.",
    status: "Mapeado. Con protocolos y con historia.",
    accent: "blue",
  },
  {
    number: "02",
    tag: "Habitado pero mal leído",
    title: "El territorio digital",
    body: "Redes sociales, plataformas, videojuegos, algoritmos. Todos lo usan. Casi nadie lo comprende. Los adultos lo miran desde afuera; los chicos lo habitan sin brújula.",
    status: "Presente, creciente, sin acompañamiento suficiente.",
    accent: "blue",
  },
  {
    number: "03",
    tag: "⚠ El más urgente",
    title: "El territorio del cambio cultural",
    body: "El espacio donde ocurren las transformaciones en los vínculos, los valores, las identidades, las democracias y las instituciones. No es tecnológico: es humano. Y es donde menos estamos.",
    status: "Sin nombre, sin mapa, sin política pública específica. Ahí comienza el trabajo real.",
    accent: "pink",
  },
]

const gaps: Gap[] = [
  { index: "01 / 05", actor: "Personas", blind: "Sin habilidades del siglo XXI que nadie les enseñó", need: "Competencias para sobrevivir y disfrutar los tres territorios" },
  { index: "02 / 05", actor: "Familias", blind: "Sin lenguaje común con sus hijos ni herramientas de acompañamiento", need: "Presencia guiada donde los jóvenes habitan" },
  { index: "03 / 05", actor: "Escuelas", blind: "Resolviendo problemas de hoy con esquemas y metodologías de ayer", need: "Un lenguaje actualizado y herramientas pedagógicas modernas" },
  { index: "04 / 05", actor: "Gobiernos", blind: "Confundiendo digitalizar con transformar la cultura", need: "Políticas públicas específicas para el cambio cultural" },
  { index: "05 / 05", actor: "Democracias", blind: "Categorías de participación diseñadas para un mundo extinto", need: "Nuevos puentes de participación ciudadana activa" },
]

const traditional: ComparisonColumn = {
  id: "traditional",
  columnLabel: "Enfoque tradicional",
  items: [
    { label: "Foco", icon: "Radio", value: "Aprender a usar dispositivos" },
    { label: "Acción del Estado", icon: "Monitor", value: "Digitalizar trámites y servicios" },
    { label: "Prevención", icon: "Lock", value: "Miedo y prohibición" },
    { label: "Pregunta central", icon: "HelpCircle", value: "¿Cómo implementamos la tecnología?" },
  ],
}

const present: ComparisonColumn = {
  id: "present",
  columnLabel: "Ciudadanía Presente",
  items: [
    { label: "Foco", icon: "Heart", value: "Aprender a crear vínculos y comunidad" },
    { label: "Acción del Estado", icon: "Home", value: "Transformar la cultura ciudadana" },
    { label: "Prevención", icon: "Shield", value: "Criterio, empatía y responsabilidad" },
    { label: "Pregunta central", icon: "Users", value: "¿Cómo cuidamos a las personas en el nuevo territorio?", featured: true },
  ],
}

const comparisonIcons: Record<string, typeof Radio> = {
  Radio,
  Monitor,
  Lock,
  HelpCircle,
  Heart,
  Home,
  Shield,
  Users,
}

const orgLogos: Record<string, () => React.JSX.Element> = {
  "CEPAL": () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#1e40af] shrink-0" stroke="currentColor" strokeWidth="1.5">
      {/* Laurel branches */}
      <path d="M4.5 15.5c.3-1.8 1.2-3.4 2.5-4.5m-.5 5.5c.4-1.5 1.2-2.8 2.2-3.8M19.5 15.5c-.3-1.8-1.2-3.4-2.5-4.5m.5 5.5c-.4-1.5-1.2-2.8-2.2-3.8" strokeLinecap="round" />
      {/* Circular Globe */}
      <circle cx="12" cy="12" r="4.5" strokeWidth="1.2" />
      {/* Grid lines */}
      <path d="M7.5 12h9M12 7.5v9" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8.8 9.5c1.6.5 3.2.5 4.8 0M8.8 14.5c1.6-.5 3.2-.5 4.8 0" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  "RAGA": () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#10b981] shrink-0" stroke="currentColor" strokeWidth="1.5">
      {/* Central node network */}
      <circle cx="12" cy="5" r="2" fill="#10b981" />
      <circle cx="6" cy="14" r="2" fill="#10b981" />
      <circle cx="18" cy="14" r="2" fill="#10b981" />
      <circle cx="12" cy="19" r="2" fill="#10b981" />
      {/* Connectors */}
      <path d="M12 7v4.5m0 0L8 13.5m4-2L16 13.5m-4 1v2.5" strokeLinecap="round" />
      <circle cx="12" cy="12.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "UNA CR": () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#ef4444] shrink-0" stroke="currentColor" strokeWidth="1.5">
      {/* Shield outline */}
      <path d="M5 4v9c0 4 3 7 7 7s7-3 7-7V4H5z" strokeLinecap="round" strokeLinejoin="round" fill="#ef444410" />
      {/* Starburst rays */}
      <path d="M12 7v7.5M9.5 9h5M10.5 11h3" strokeLinecap="round" strokeWidth="1.2" />
      <circle cx="12" cy="14.5" r="1" fill="#ef4444" />
    </svg>
  ),
  "UNT": () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#eab308] shrink-0" stroke="currentColor" strokeWidth="1.5">
      {/* Sun rays representing UNT logo style */}
      <circle cx="12" cy="12" r="4.5" fill="#eab30820" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" strokeLinecap="round" strokeWidth="1.2" />
      {/* Argentine sun core */}
      <circle cx="12" cy="12" r="2" fill="#eab308" />
    </svg>
  ),
  "Chile": () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" stroke="currentColor" strokeWidth="1.5">
      {/* Shield of Chile style colors */}
      <path d="M5 4.5v6.5c0 3.5 3 6.5 7 6.5s7-3 7-6.5v-6.5H5z" strokeLinecap="round" strokeLinejoin="round" fill="#ef4444" />
      {/* Top half is blue */}
      <path d="M5 4.5v5h14v-5H5z" fill="#2563eb" stroke="#2563eb" strokeWidth="0.5" strokeLinejoin="round" />
      {/* Star center */}
      <polygon points="12,5.5 12.6,7.5 10.6,6.3 13.4,6.3 11.4,7.5" fill="#fff" stroke="#fff" strokeWidth="0.2" />
    </svg>
  )
}

const methodology: MethodPiece[] = [
  {
    type: "Metodología",
    name: "IDEAY+",
    description: "Co-diseño, co-creación y planificación participativa de acciones de prevención y ciudadanía digital con todos los actores del ecosistema.",
    icon: "GitBranch",
    imageSlot: "ideay-bg",
  },
  {
    type: "Dispositivo",
    name: "Escuela de Ciudadanía",
    description: "Gimnasio ciudadano híbrido: contenidos, habilidades y experiencias para la formación continua en territorio. Reconocida por CEPAL y RAGA 2024.",
    icon: "GraduationCap",
    imageSlot: "escuela-bg",
  },
  {
    type: "Laboratorio",
    name: "Tucumán Lab",
    description: "Laboratorio de innovación pública aplicada para diseñar prototipos de intervención con metodologías ágiles y actores territoriales.",
    icon: "FlaskConical",
    imageSlot: "lab-bg",
  },
  {
    type: "Sistema",
    name: "Seguridad Inteligente",
    description: "Protocolo de corresponsabilidad que articula escuela, familia, Estado y comunidad bajo un lenguaje y criterio común.",
    icon: "ShieldCheck",
    imageSlot: "seguridad-bg",
  },
]

const methodologyIcons: Record<string, typeof GitBranch> = {
  GitBranch,
  GraduationCap,
  FlaskConical,
  ShieldCheck,
}

const statsSecondary: StatSecondary[] = [
  { number: 15, label: "Años en territorio", detail: "Sin intermediarios. Directo con todos los actores del ecosistema" },
  { number: 7, label: "Países representados", detail: "Taller RAGA internacional. Clase magistral en Chile" },
  { number: 3, label: "Validaciones internacionales", detail: "CEPAL, RAGA Internacional y UNA Costa Rica en 2024" },
]

const achievements: Achievement[] = [
  { flag: "🇺🇳", org: "CEPAL", label: "Reconocimiento", detail: "Escuela de Ciudadanía seleccionada por la Comisión Económica para América Latina y el Caribe", year: "2024" },
  { flag: "🌎", org: "RAGA", label: "Red iberoamericana", detail: "Coordinador del Grupo de Formación Ciudadana. Presencia activa en toda la región", year: "Activo" },
  { flag: "🇨🇷", org: "UNA CR", label: "Academia", detail: "Universidad Nacional de Costa Rica — validación del modelo pedagógico", year: "2024" },
  { flag: "🇦🇷", org: "UNT", label: "Integración académica", detail: "Módulo propio en Diplomatura universitaria · Universidad Nacional de Tucumán", year: "Activo" },
  { flag: "🇨🇱", org: "Chile", label: "Exportación", detail: "Clase magistral en Universidad de Rancagua · Taller con expertos de 7 países", year: "2024" },
]

const verbs: Verb[] = [
  { verb: "Escucho", description: "Lo que pasa, lo que se siente y lo que el tercer territorio aún no puede nombrar." },
  { verb: "Diseño", description: "Una hoja de ruta clara, priorizada y humanamente construida para personas, instituciones y democracias." },
  { verb: "Activo", description: "El cambio cultural desde adentro del territorio. Con evidencia, metodología propia y comunidad." },
]

// ── Animation helpers ──────────────────────────────────────────────────────────
const viewportOnce = { once: true, margin: "-60px" as const }

const EASE = [0.25, 0.1, 0.25, 1] as const

function useVariants(reduceMotion: boolean) {
  const fadeInUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  }
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }
  const staggerSlow = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }
  const staggerFast = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  }
  const slideFromLeft = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
  }
  const scaleIn = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
  }
  return { fadeInUp, fadeIn, staggerSlow, staggerFast, slideFromLeft, scaleIn }
}

function useCountUp(target: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    let raf = 0
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return count
}

// ── Curve dividers ────────────────────────────────────────────────────────────
function CurveDown({ fill }: { fill: string }) {
  // concave arc — used when transitioning INTO a dark section
  return (
    <svg
      className="absolute bottom-[-1px] left-0 w-full"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z" fill={fill} />
    </svg>
  )
}

function CurveUp({ fill }: { fill: string }) {
  // convex arc — used when returning to a light section
  return (
    <svg
      className="absolute bottom-[-1px] left-0 w-full"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill={fill} />
    </svg>
  )
}

// ── Stat card with count-up ───────────────────────────────────────────────────
function StatSecondaryCard({ stat, duration, fadeInUp, index }: { stat: StatSecondary; duration: number; fadeInUp: any; index: number }) {
  const ref = useState<HTMLDivElement | null>(null)
  const [node, setNode] = ref
  const inView = useInView(node ? { current: node } : { current: null }, { once: true, margin: "-60px" as any })
  const value = useCountUp(stat.number, inView, duration)
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion() ?? false

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const maxTilt = 10
    const tiltX = -((y / rect.height) - 0.5) * maxTilt
    const tiltY = ((x / rect.width) - 0.5) * maxTilt
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  // Icons and colors configuration
  const config = [
    { icon: History, color: "#10b981", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "rgba(16, 185, 129, 0.15)", text: "text-emerald-600" },
    { icon: Globe, color: "#2563eb", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "rgba(37, 99, 235, 0.15)", text: "text-blue-600" },
    { icon: Award, color: "#ff007f", bg: "bg-pink-500/10", border: "border-pink-500/20", glow: "rgba(255, 0, 127, 0.15)", text: "text-pink-600" }
  ][index] || { icon: Award, color: "#4272BB", bg: "bg-slate-100", border: "border-slate-200", glow: "rgba(66, 114, 187, 0.1)", text: "text-slate-600" }

  const Icon = config.icon

  return (
    <motion.div
      ref={setNode}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-[2rem] bg-white/95 border border-slate-200/80 shadow-[0_8px_30px_rgba(148,163,184,0.06)] p-6.5 transition-all duration-500 flex flex-col justify-between"
      style={{
        minHeight: 180,
        boxShadow: isHovered 
          ? `0 25px 45px -12px ${config.glow}, 0 10px 25px rgba(148,163,184,0.1)` 
          : undefined,
        borderColor: isHovered ? config.color : "rgba(226, 232, 240, 0.8)",
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.008)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
        transition: isHovered 
          ? "transform 0.08s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" 
          : "transform 0.5s ease-out, box-shadow 0.5s ease, border-color 0.5s ease"
      }}
    >
      {/* Top accent line */}
      <div 
        className="absolute top-0 left-0 w-full h-[3px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${config.color}, transparent)` }}
      />

      {/* Cybernetic Outlined Watermark Number */}
      <span
        aria-hidden="true"
        className="font-display font-black pointer-events-none select-none absolute bottom-1 right-3 opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{
          fontSize: 80,
          lineHeight: 1,
          WebkitTextStroke: `1px ${config.color}`,
          color: "transparent",
          opacity: isHovered ? 0.2 : 0.08
        }}
      >
        {stat.number}
      </span>

      <div 
        className="relative z-10 flex flex-col h-full justify-between gap-3"
        style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex justify-between items-start">
          {/* Glowing circular icon badge */}
          <div 
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${config.bg} ${config.text} border ${config.border}`}
            style={{
              boxShadow: isHovered ? `0 0 12px ${config.glow}` : "none",
              transform: "translateZ(10px)"
            }}
          >
            <Icon size={18} strokeWidth={1.5} />
          </div>
        </div>

        <div>
          <div
            className="font-sans font-black tracking-tight leading-none text-brand-navy"
            style={{ fontSize: "44px", transform: "translateZ(15px)" }}
          >
            {value}
          </div>
          <p className="font-sans text-[15.5px] font-bold tracking-tight leading-snug mt-1" style={{ color: config.color }}>
            {stat.label}
          </p>
          <p className="font-sans text-[14.5px] leading-relaxed text-slate-500 mt-1">
            {stat.detail}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

interface TerritoryCardProps {
  t: Territory
  index: number
  isFirst: boolean
  isLast: boolean
  shouldReduceMotion: boolean
  fadeInUp: any
}

function TerritoryCard({ t, index, isFirst, isLast, shouldReduceMotion, fadeInUp }: TerritoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Pure premium color system for the three territories
  const colorMap: Record<string, {
    accent: string
    glow: string
    headerGradient: string
    statusDot: string
    tagBg: string
    icon: any
    systemCode: string
  }> = {
    "01": {
      accent: "#10b981", // Emerald (Physical)
      glow: "rgba(16, 185, 129, 0.2)",
      headerGradient: "from-[#059669] via-[#10b981] to-[#0f766e]",
      statusDot: "bg-emerald-500",
      tagBg: "bg-white/20 border-white/30 text-white",
      icon: Home,
      systemCode: "SYS.LOC: PHYSICAL_SPACE"
    },
    "02": {
      accent: "#0ea5e9", // Sky Blue (Digital)
      glow: "rgba(14, 165, 233, 0.2)",
      headerGradient: "from-[#0284c7] via-[#0ea5e9] to-[#1e40af]",
      statusDot: "bg-sky-500",
      tagBg: "bg-white/20 border-white/30 text-white",
      icon: Monitor,
      systemCode: "SYS.LOC: DIGITAL_NETWORK"
    },
    "03": {
      accent: "#ff007f", // Laser Pink (Cultural)
      glow: "rgba(255, 0, 127, 0.2)",
      headerGradient: "from-[#ff007f] via-[#ec4899] to-[#701a75]",
      statusDot: "bg-pink-500",
      tagBg: "bg-white/20 border-white/30 text-white",
      icon: Users,
      systemCode: "SYS.LOC: HUMAN_CULTURE"
    }
  }

  const colors = colorMap[t.number] || {
    accent: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.15)",
    headerGradient: "from-slate-700 to-slate-900",
    statusDot: "bg-slate-500",
    tagBg: "bg-white/20 text-white",
    icon: Shield,
    systemCode: "SYS.LOC: GENERAL"
  }

  const TerritoryIcon = colors.icon

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group flex flex-col justify-between min-h-[420px] bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500"
      style={{
        boxShadow: isHovered 
          ? `0 25px 50px -12px ${colors.glow}, 0 10px 25px rgba(148,163,184,0.15)` 
          : undefined,
        borderColor: isHovered ? colors.accent : "rgba(226, 232, 240, 0.8)"
      }}
    >
      {/* 1. TOP HEADER BLOCK: Rich colorful brand gradient panel */}
      <div className={`relative h-[160px] p-6 bg-gradient-to-r ${colors.headerGradient} overflow-hidden flex flex-col justify-between`}>
        
        {/* Dynamic decorative abstract background rings */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-white/10 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-white/5 pointer-events-none transition-transform duration-1000 group-hover:scale-125" />
        
        {/* Top bar: Category Tag & System Code */}
        <div className="flex justify-between items-center relative z-10">
          <span
            className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors.tagBg}`}
          >
            {t.tag}
          </span>
          <span className="font-mono text-[8px] text-white/40 tracking-widest hidden sm:inline-block">
            {colors.systemCode}
          </span>
        </div>

        {/* Bottom bar: Big Glowing Icon & watermark number */}
        <div className="flex justify-between items-end relative z-10 mt-auto">
          {/* Glowing Icon Wrapper */}
          <div 
            className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
            style={{
              boxShadow: `0 0 20px rgba(255, 255, 255, 0.15)`
            }}
          >
            <TerritoryIcon className="w-5.5 h-5.5" strokeWidth={1.5} />
          </div>
          
          {/* Big number watermark */}
          <span
            className="font-display font-black tracking-tighter leading-none select-none pointer-events-none opacity-20 text-white transition-all duration-500 group-hover:opacity-30"
            style={{
              fontSize: "64px",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
            }}
          >
            {t.number}
          </span>
        </div>
      </div>

      {/* 2. BOTTOM CONTENT BLOCK: Pure light readable text */}
      <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50">
        <div>
          {/* Title */}
          <h3 className="font-display text-lg font-black text-brand-navy mb-3 tracking-tight group-hover:text-slate-900 transition-colors duration-300">
            {t.title}
          </h3>
          
          {/* Body Description */}
          <p className="font-sans text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
            {t.body}
          </p>
        </div>

        {/* Footer: Tech Status Indicator with pulsating dot */}
        <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-start gap-2">
          <div className="relative shrink-0 mt-1">
            <span className={`absolute inset-0 w-2 h-2 rounded-full ${colors.statusDot} opacity-40 animate-ping`} />
            <span className={`relative block w-2 h-2 rounded-full ${colors.statusDot}`} />
          </div>
          <p className="font-sans italic text-[11.5px] text-slate-400 leading-snug">
            {t.status}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

interface GapRowProps {
  gap: Gap
  shouldReduceMotion: boolean
  slideFromLeft: any
}

function GapRow({ gap, shouldReduceMotion, slideFromLeft }: GapRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Actor icon & color system
  const actorMap: Record<string, {
    icon: any
    color: string
    bg: string
    border: string
  }> = {
    "Personas": { icon: Users, color: "#10b981", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    "Familias": { icon: Heart, color: "#ff007f", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    "Escuelas": { icon: GraduationCap, color: "#6366f1", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    "Gobiernos": { icon: ShieldCheck, color: "#2563eb", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    "Democracias": { icon: GitBranch, color: "#f59e0b", bg: "bg-amber-500/10", border: "border-amber-500/20" }
  }

  const actorData = actorMap[gap.actor] || {
    icon: Users,
    color: "#4272BB",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20"
  }

  const ActorIcon = actorData.icon

  return (
    <motion.div
      variants={slideFromLeft}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.002 }}
      className="relative overflow-hidden bg-white/95 border border-slate-200/80 rounded-[2rem] p-6 shadow-[0_8px_25px_rgba(148,163,184,0.06)] hover:shadow-[0_20px_40px_rgba(148,163,184,0.14)] transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6 w-full"
      style={{
        borderColor: isHovered ? actorData.color : "rgba(226, 232, 240, 0.8)"
      }}
    >
      {/* 1. LEFT SIDE: Actor Identity Panel */}
      <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-slate-250/60 pb-4 md:pb-0 md:pr-6 md:w-[160px] shrink-0 h-full">
        <div className="flex items-center md:items-start gap-3.5 md:flex-col">
          {/* Glowing circular icon badge */}
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              color: actorData.color,
              backgroundColor: isHovered ? `${actorData.color}15` : "rgba(241, 245, 249, 0.8)",
              border: `1.5px solid ${isHovered ? actorData.color : "rgba(226, 232, 240, 0.8)"}`,
              boxShadow: isHovered ? `0 0 12px ${actorData.color}25` : "none"
            }}
          >
            <ActorIcon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          
          <div>
            <span 
              className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
              style={{
                color: actorData.color,
                backgroundColor: `${actorData.color}10`,
                borderColor: `${actorData.color}20`
              }}
            >
              {gap.index}
            </span>
            <h3 className="font-display font-black text-brand-navy text-lg md:text-xl tracking-tight leading-tight mt-1.5">
              {gap.actor}
            </h3>
          </div>
        </div>
      </div>

      {/* 2. RIGHT SIDE: The Transition Grid (Punto Ciego -> Pulse Arrow -> Necesidad Real) */}
      <div className="flex-1 grid md:grid-cols-[1fr_auto_1.1fr] gap-4 md:gap-6 items-center">
        
        {/* Card A: Punto Ciego (Obsolete Map) */}
        <div 
          className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-gradient-to-br from-rose-50/50 to-white border border-rose-200/60 transition-all duration-300 w-full"
          style={{
            boxShadow: isHovered ? "0 8px 20px rgba(239, 68, 68, 0.04)" : "none"
          }}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-100 text-rose-500 shrink-0 mt-0.5 border border-rose-200/50">
            <EyeOff className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest block mb-1">
              Punto Ciego (Mapa Obsoleto)
            </span>
            <p className="font-sans text-xs sm:text-[13px] text-slate-500 line-through decoration-rose-300 decoration-[1.5px] leading-relaxed">
              {gap.blind}
            </p>
          </div>
        </div>

        {/* Separator / Animated Glowing Bridge */}
        <div className="flex md:flex-col items-center justify-center relative w-full md:w-10">
          
          {/* Desktop connecting arrow & pulse */}
          <div className="hidden md:flex flex-col items-center justify-center relative w-10 h-6">
            <div className="w-full h-[1.5px] border-t border-dashed border-slate-300" />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: actorData.color,
                boxShadow: `0 0 8px ${actorData.color}`
              }}
              animate={isHovered ? { x: [-15, 15] } : { x: 0 }}
              transition={{ 
                duration: 1.2, 
                repeat: isHovered ? Infinity : 0, 
                ease: "easeInOut" 
              }}
            />
          </div>

          {/* Mobile connecting arrow */}
          <div 
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200/50 my-1"
            style={{ color: actorData.color }}
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
          </div>

        </div>

        {/* Card B: Necesidad Real (New Territory) */}
        <div 
          className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-gradient-to-br from-sky-50/50 to-white border border-sky-200/60 transition-all duration-300 w-full"
          style={{
            boxShadow: isHovered ? `0 8px 25px -5px ${actorData.color}15` : "none",
            borderColor: isHovered ? `${actorData.color}35` : "rgba(226, 232, 240, 0.8)"
          }}
        >
          <div 
            className="flex items-center justify-center w-8 h-8 rounded-xl shrink-0 mt-0.5 border transition-all duration-300"
            style={{
              color: isHovered ? "#fff" : actorData.color,
              backgroundColor: isHovered ? actorData.color : "rgba(241, 245, 249, 0.8)",
              borderColor: isHovered ? actorData.color : "rgba(226, 232, 240, 0.8)"
            }}
          >
            <Zap className="w-4 h-4" strokeWidth={1.5} />
          </div>
          <div>
            <span 
              className="text-[9px] font-mono font-bold uppercase tracking-widest block mb-1"
              style={{ color: actorData.color }}
            >
              Necesidad Real (Nuevo Territorio)
            </span>
            <p className="font-display font-extrabold text-xs sm:text-[13.5px] text-brand-navy leading-relaxed">
              {gap.need}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

interface MethodPieceCardProps {
  piece: MethodPiece
  shouldReduceMotion: boolean
  fadeInUp: any
}

function MethodPieceCard({ piece, shouldReduceMotion, fadeInUp }: MethodPieceCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y })

    // Parallax tilt math: maximum of 8 degrees tilt angle
    const maxTilt = 8
    const tiltX = -((y / rect.height) - 0.5) * maxTilt
    const tiltY = ((x / rect.width) - 0.5) * maxTilt
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  const Icon = methodologyIcons[piece.icon]

  // Color mapping based on category/type
  const typeMap: Record<string, {
    accent: string
    bg: string
    glow: string
    iconBg: string
    iconText: string
    accentText: string
    tagBg: string
    refCode: string
  }> = {
    "metodología": {
      accent: "#4272BB", // Blue
      bg: "from-[#f5f8ff] to-[#eef2ff]",
      glow: "rgba(66, 114, 187, 0.16)",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      iconText: "text-blue-600",
      accentText: "text-blue-600",
      tagBg: "bg-blue-100 text-blue-800 border-blue-200/50",
      refCode: "METHOD.REF: IDEAY_01"
    },
    "dispositivo": {
      accent: "#D5247A", // Pink
      bg: "from-[#fff5fa] to-[#fff0f6]",
      glow: "rgba(213, 36, 122, 0.16)",
      iconBg: "bg-pink-500/10 border-pink-500/20",
      iconText: "text-pink-600",
      accentText: "text-pink-600",
      tagBg: "bg-pink-100 text-pink-800 border-pink-200/50",
      refCode: "DISP.REF: ESCUELA_02"
    },
    "laboratorio": {
      accent: "#10B981", // Emerald
      bg: "from-[#f0fdf4] to-[#f4fbf7]",
      glow: "rgba(16, 185, 129, 0.16)",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      iconText: "text-emerald-600",
      accentText: "text-emerald-600",
      tagBg: "bg-emerald-100 text-emerald-800 border-emerald-200/50",
      refCode: "LAB.REF: TUCUMAN_03"
    },
    "sistema": {
      accent: "#8B5CF6", // Violet
      bg: "from-[#faf5ff] to-[#f3e8ff]",
      glow: "rgba(139, 92, 246, 0.16)",
      iconBg: "bg-violet-500/10 border-violet-500/20",
      iconText: "text-violet-600",
      accentText: "text-violet-600",
      tagBg: "bg-violet-100 text-violet-800 border-violet-200/50",
      refCode: "SYS.REF: SEGURIDAD_04"
    }
  }

  const typeData = typeMap[piece.type.toLowerCase()] || {
    accent: "#4272BB",
    bg: "from-slate-50 to-slate-100",
    glow: "rgba(66, 114, 187, 0.12)",
    iconBg: "bg-slate-500/10",
    iconText: "text-slate-600",
    accentText: "text-slate-650",
    tagBg: "bg-slate-100 text-slate-700",
    refCode: "DEV.REF: GENERIC"
  }

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[2rem] p-6.5 bg-gradient-to-b ${typeData.bg} border border-slate-200/80 shadow-[0_8px_30px_rgba(148,163,184,0.06)] transition-all duration-500 flex flex-col justify-between`}
      style={{
        minHeight: 210,
        boxShadow: isHovered 
          ? `0 25px 45px -12px ${typeData.glow}, 0 10px 25px rgba(148,163,184,0.1)` 
          : undefined,
        borderColor: isHovered ? typeData.accent : "rgba(226, 232, 240, 0.8)",
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.008)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
        transition: isHovered 
          ? "transform 0.08s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" 
          : "transform 0.5s ease-out, box-shadow 0.5s ease, border-color 0.5s ease"
      }}
    >
      {/* Interactive cursor spotlight glow */}
      {!shouldReduceMotion && (
        <div 
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${typeData.glow}, transparent 80%)`,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}

      {/* Top colorful accent border bar */}
      <div 
        className="absolute top-0 left-0 w-full h-[3px] transition-all duration-300 pointer-events-none"
        style={{ 
          background: `linear-gradient(90deg, ${typeData.accent}, transparent)`,
          opacity: isHovered ? 1 : 0.7 
        }}
      />

      <div 
        className="relative z-10 flex flex-col h-full justify-between gap-5"
        style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
      >
        <div>
          {/* Header row: category tag and system code */}
          <div className="flex justify-between items-center mb-4">
            <span
              className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${typeData.tagBg}`}
            >
              {piece.type}
            </span>
            <span className="font-mono text-[8px] text-slate-400 tracking-widest">
              {typeData.refCode}
            </span>
          </div>

          {/* Title & Icon row */}
          <div className="flex items-center gap-4 mb-3">
            <div 
              className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${typeData.iconBg} ${typeData.iconText} border border-slate-200/50 shadow-sm shrink-0`}
              style={{
                boxShadow: isHovered ? `0 0 12px ${typeData.glow}` : "none",
                transform: "translateZ(10px)"
              }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-black text-brand-navy text-lg md:text-xl tracking-tight leading-tight">
              {piece.name}
            </h3>
          </div>

          {/* Description text */}
          <p className="font-sans text-[13px] leading-relaxed text-slate-500">
            {piece.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function NarrativeSection() {
  const shouldReduceMotion = useReducedMotion() ?? false
  const { fadeInUp, fadeIn, staggerSlow, staggerFast, slideFromLeft, scaleIn } = useVariants(shouldReduceMotion)

  const staggerRows = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  }
  const gapRowHover = {
    hovered: { color: "#4272BB" },
  }
  const gapDotHover = {
    hovered: { backgroundColor: "#D5247A" },
  }
  const staggerItems = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const headlineWords = "Vivimos en tres territorios. Conocemos uno. Navegamos otro. El tercero — casi nadie lo ve todavía.".split(" ")
  const highlightWords = new Set(["uno.", "otro.", "todavía."])

  return (
    <div className="relative w-full font-sans">
      {/* ══════════════════════ BLOQUE 0 — Intro ══════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: CREMA, padding: "52px 20px 64px" }}
      >
        <div className="max-w-6xl mx-auto md:px-6" style={{ paddingBottom: 0 }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <span
                className="font-sans inline-block"
                style={{ color: BLUE, fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Una tesis construida en territorio
              </span>

              <motion.h2
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display mt-4"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(24px, 4.5vw, 42px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: NAVY,
                }}
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={fadeInUp}
                    className="inline-block mr-[0.25em]"
                    style={{ color: highlightWords.has(word) ? BLUE : NAVY }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="font-sans mt-6 mx-auto md:mx-0"
                style={{ fontSize: 16, lineHeight: 1.65, color: GRIS_BODY, maxWidth: 500 }}
              >
                Quince años trabajando con niñas, niños, adolescentes, docentes, familias y
                funcionarios revelan siempre el mismo patrón: las personas viven en un territorio
                que no pueden nombrar, con herramientas que no conocen, para desafíos que nadie
                les enseñó a enfrentar.
              </motion.p>
            </div>

            {/* IMAGE SLOT — foto de José en acción (capacitando, en territorio) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={shouldReduceMotion ? undefined : { 
                y: [0, -8, 0],
                rotate: [0, 0.4, -0.4, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.3 },
                scale: { duration: 0.7, delay: 0.3 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative aspect-[3/4] w-full max-w-[280px] md:max-w-[320px] justify-self-center rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0"
              style={{ boxShadow: "0 20px 40px -10px rgba(0, 57, 96, 0.25)" }}
            >
              <Image 
                src="/img/jose-en-territorio.jpg" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="José Farhat — Una tesis construida en territorio" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/30 via-transparent to-brand-pink/15 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
        <CurveDown fill={TERRITORY_BG} />
      </section>

      {/* ══════════════════════ BLOQUE 1 — Los tres territorios ══════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: TERRITORY_BG, padding: "60px 20px 96px" }}
      >
        {/* Decorative topographic-field lines + concentric circles — pure decoration, never interferes with content */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none", zIndex: 0 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 700"
        >
          <path d="M-100,300 Q200,100 500,280 T1100,200" fill="none" stroke="rgba(66,114,187,0.07)" strokeWidth={1.5} />
          <path d="M-100,450 Q300,250 600,380 T1100,320" fill="none" stroke="rgba(66,114,187,0.05)" strokeWidth={1} />
          <path d="M100,0 Q350,200 400,400 T300,600" fill="none" stroke="rgba(66,114,187,0.04)" strokeWidth={1} />
          <circle cx={680} cy={120} r={180} fill="none" stroke="rgba(66,114,187,0.05)" strokeWidth={1} />
          <circle cx={680} cy={120} r={260} fill="none" stroke="rgba(66,114,187,0.03)" strokeWidth={1} />
        </svg>

        <span
          aria-hidden="true"
          className="font-display"
          style={{
            position: "absolute",
            fontSize: "clamp(160px, 32vw, 400px)",
            fontWeight: 900,
            color: "#1e40af",
            top: "-80px",
            right: "-30px",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
            opacity: 0.12,
          }}
        >
          3
        </span>

        <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-sans inline-block"
            style={{ color: "#93c5fd", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            El diagnóstico original
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="font-display mt-3"
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 60px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 900,
              marginBottom: 52,
            }}
          >
            No vivimos en dos territorios. Vivimos en <em style={{ fontStyle: "normal", color: "#93c5fd" }}>tres</em>.
          </motion.h2>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-[1fr_1fr_1.18fr] mt-8"
          >
            {territories.map((t, i) => {
              const isFirst = i === 0
              const isLast = i === territories.length - 1
              return (
                <TerritoryCard
                  key={t.number}
                  t={t}
                  index={i}
                  isFirst={isFirst}
                  isLast={isLast}
                  shouldReduceMotion={shouldReduceMotion}
                  fadeInUp={fadeInUp}
                />
              )
            })}
          </motion.div>

          <motion.blockquote
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="relative max-w-[680px] mx-auto w-full"
            style={{ marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.09)" }}
          >
            <p
              className="font-display italic"
              style={{
                fontWeight: 600,
                fontSize: "clamp(17px, 2.2vw, 24px)",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.55,
                paddingLeft: 24,
                borderLeft: `3px solid ${BLUE}`,
              }}
            >
              El problema no es que la gente no use tecnología. Es que nadie les enseñó a
              habitarla — ni a ellos ni a las instituciones que deberían cuidarlos.
            </p>
            <p
              className="font-sans"
              style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", paddingLeft: 27 }}
            >
              — José Farhat · Ciudadanía Presente
            </p>
          </motion.blockquote>
        </div>

        <svg
          aria-hidden="true"
          style={{ position: "absolute", bottom: -1, left: 0, width: "100%" }}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          height={48}
        >
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill={CREMA} />
        </svg>
      </section>

      {/* ══════════════════════ BLOQUE 2 — Matriz de brechas ══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: CREMA, padding: "60px 20px 72px" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ marginBottom: 40 }}
          >
            <span
              className="font-sans inline-block"
              style={{ color: BLUE, fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              La matriz de brechas
            </span>
            <h2
              className="font-display mt-3"
              style={{
                fontWeight: 800,
                fontSize: "clamp(26px, 4.5vw, 52px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: NAVY,
              }}
            >
              Mapas obsoletos para territorios{" "}
              <span style={{ borderBottom: "3px solid #4272BB" }}>nuevos</span>
            </h2>
            <p className="font-sans mt-3" style={{ fontSize: 16, lineHeight: 1.6, color: "#6B7280", maxWidth: 640 }}>
              El mismo diagnóstico en cada nivel del ecosistema — sin excepción.
            </p>
          </motion.div>

          <motion.div
            variants={staggerRows}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 mt-10"
          >
            {gaps.map((gap, i) => (
              <GapRow
                key={gap.actor}
                gap={gap}
                shouldReduceMotion={shouldReduceMotion}
                slideFromLeft={slideFromLeft}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center"
            style={{ marginTop: 52, padding: "28px 32px", background: NAVY, borderRadius: 16, gap: 12 }}
          >
            <p className="font-display flex-1" style={{ fontSize: "clamp(15px, 2vw, 19px)", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
              Lo que falta en cada nivel no es <em style={{ fontStyle: "italic", fontWeight: 600, color: "#60a5fa" }}>tecnología</em>. Es
              una hoja de ruta clara, priorizada y humanamente diseñada. Eso es lo que construye esta tesis.
            </p>
            <span
              className="font-sans self-start sm:self-center flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: "10px 18px",
                whiteSpace: "nowrap",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              La respuesta →
            </span>
          </motion.div>
        </div>
        <CurveDown fill="#EAF2FC" />
      </section>

      {/* ══════════════════════ BLOQUE 3 — La tesis ══════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#EAF2FC", padding: "100px 20px 110px" }}
      >
        {/* Light Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(66, 114, 187, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(66, 114, 187, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(circle 500px at 50% 50%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle 500px at 50% 50%, #000 60%, transparent 100%)',
            zIndex: 0,
          }}
        />

        {/* Ambient glow spheres */}
        <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-brand-pink/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8" style={{ zIndex: 1 }}>
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 items-center">
            
            {/* Left Column — The Bold Headline Statement */}
            <div className="text-left">
              <span
                className="font-sans inline-block"
                style={{ 
                  color: "#1D4ED8", 
                  fontWeight: 700, 
                  fontSize: 11, 
                  letterSpacing: "0.2em", 
                  textTransform: "uppercase", 
                  marginBottom: 16,
                  padding: "4px 12px",
                  borderRadius: "6px",
                  background: "rgba(29, 78, 216, 0.08)",
                  border: "1px solid rgba(29, 78, 216, 0.15)"
                }}
              >
                La Filosofía
              </span>

              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="font-display font-black tracking-tight"
                style={{ 
                  fontSize: "clamp(32px, 5vw, 54px)", 
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-blue bg-clip-text text-transparent">
                  El desafío no es tecnológico.
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">
                  Es profundamente humano.
                </span>
              </motion.h2>
              
              {/* Sleek tech accent bar underneath heading */}
              <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full" />
            </div>

            {/* Right Column — Editorial explanation and core question */}
            <div className="flex flex-col gap-6 text-left">
              
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="font-sans"
                style={{ color: GRIS_BODY, fontSize: 16, lineHeight: 1.7 }}
              >
                Cuidar lo humano en una realidad atravesada por tecnología exige una nueva
                cultura ciudadana. Una cultura capaz de integrar derechos, responsabilidades,
                cuidado, convivencia, prevención, innovación y sentido democrático.
              </motion.p>

              {/* High-tech glassmorphic callout card */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: 0.2 }}
                className="relative p-6 md:p-8 rounded-2xl bg-white/90 border border-brand-blue/20 backdrop-blur-md overflow-hidden shadow-lg hover:border-brand-pink/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 15px 35px -10px rgba(0, 50, 87, 0.12)" }}
              >
                {/* Tech card header decoration */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue" />
                
                <div className="absolute top-[2px] left-6 px-2.5 bg-[#f4f8fd] border-x border-b border-brand-blue/30 text-[#1D4ED8] text-[9px] font-bold uppercase tracking-widest rounded-b">
                  Pregunta Core
                </div>
                
                <p
                  className="font-display italic font-bold tracking-tight text-left mt-4"
                  style={{ color: NAVY, fontSize: "clamp(18px, 2.2vw, 22px)", lineHeight: 1.4 }}
                >
                  "¿Cómo cuidamos mejor a las personas en el nuevo territorio?"
                </p>
                
                {/* Visual tech grid detail inside card */}
                <div className="absolute right-3 bottom-3 opacity-[0.12] text-brand-blue pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M20 10V30M10 20H30" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
        <CurveUp fill={CREMA} />
      </section>

      {/* ══════════════════════ BLOQUE 4 — Contraste ══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: CREMA, padding: "65px 20px 75px" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 text-center lg:text-left"
          >
            <div className="lg:max-w-xl">
              <span
                className="font-sans inline-block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2"
              >
                La diferencia
              </span>
              <h2
                className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight leading-tight"
              >
                La ciudadanía digital no es saber usar dispositivos
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
                Es aprender a habitar los tres territorios — con{" "}
                <strong className="font-bold text-brand-navy">
                  criterio, empatía y responsabilidad
                </strong>
                .
              </p>
            </div>
          </motion.div>

          {/* Comparator unified dashboard container */}
          <div className="relative mt-10 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden bg-white/70 backdrop-blur-md">
            
            {/* Center divider ("hacia") absolute positioning on desktop */}
            <div 
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
              style={{ pointerEvents: 'none' }}
            >
              <div 
                className="font-sans font-black text-white text-[11px] tracking-widest uppercase px-4 py-2.5 bg-gradient-to-r from-[#00f0ff] via-[#9d4edd] to-[#ff007f] rounded-full border border-white/20 shadow-[0_4px_15px_rgba(157,78,221,0.25)] flex items-center gap-1.5 animate-pulse"
                style={{ pointerEvents: 'auto' }}
              >
                hacia
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 relative">
              
              {/* Traditional Column (Left - Muted Slate Tech Style) */}
              <div className="p-6 md:p-8 bg-slate-50/50 backdrop-blur-sm flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <h3 className="font-sans font-bold text-[11px] uppercase tracking-wider text-slate-500">
                      {traditional.columnLabel}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {traditional.items.map((item, i) => {
                      const Icon = comparisonIcons[item.icon]
                      return (
                        <div 
                          key={item.label}
                          className="p-4.5 rounded-2xl bg-white/80 border border-slate-200/60 hover:bg-white hover:border-slate-350 hover:shadow-[0_8px_20px_rgba(148,163,184,0.06)] transition-all duration-300"
                        >
                          <span className="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            {item.label}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-500 shrink-0 border border-slate-200/40">
                              <Icon size={15} strokeWidth={2} />
                            </div>
                            <p className="font-sans font-bold text-[15px] text-slate-650 tracking-tight leading-snug">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile divider */}
              <div className="md:hidden py-3 flex items-center justify-center bg-slate-100/60 border-y border-slate-200/50">
                <div className="font-sans font-black text-white text-[11px] tracking-widest uppercase px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-[#ff007f] rounded-full border border-white/10 shadow flex items-center gap-1">
                  hacia
                  <ArrowRight className="w-3 h-3 rotate-90" />
                </div>
              </div>

              {/* Ciudadanía Presente Column (Right - Frosted Light Cyber-Gradient Panel) */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-indigo-50/50 via-pink-50/30 to-cyan-50/50 relative overflow-hidden flex flex-col justify-between">
                
                {/* Subtle colorful glows inside the light tech card */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-500/[0.08] rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-500/[0.08] rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse" />
                    <h3 className="font-sans font-bold text-[11px] uppercase tracking-wider text-brand-pink">
                      {present.columnLabel}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {present.items.map((item, i) => {
                      const Icon = comparisonIcons[item.icon]
                      
                      // Highlight gradient for featured active target
                      const cardStyle = item.featured
                        ? "bg-gradient-to-r from-pink-500/10 via-indigo-500/5 to-cyan-500/10 border-2 border-pink-400/80 shadow-[0_10px_25px_rgba(244,63,94,0.08)]"
                        : "bg-white/80 border border-slate-200/80 hover:bg-white hover:border-slate-350 hover:shadow-[0_8px_20px_rgba(148,163,184,0.06)]"
                      
                      const labelStyle = item.featured
                        ? "text-[#D5247A] font-bold"
                        : "text-slate-500"

                      const iconBadgeStyle = item.featured
                        ? "bg-pink-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                        : "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20"

                      return (
                        <div 
                          key={item.label}
                          className={`p-4.5 rounded-2xl transition-all duration-300 ${cardStyle}`}
                        >
                          <span className={`text-[11px] font-sans font-bold uppercase tracking-wider block mb-1 ${labelStyle}`}>
                            {item.label}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-transform duration-300 hover:rotate-6 ${iconBadgeStyle}`}>
                              <Icon size={15} strokeWidth={2} />
                            </div>
                            <p className="font-sans font-black text-[15px] text-brand-navy tracking-tight leading-snug">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Closing banner at the bottom (Refined Light Tech Design) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="mt-10 p-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-white border border-slate-200 flex flex-col md:flex-row items-center gap-6 shadow-[0_8px_30px_rgba(148,163,184,0.05)]"
          >
            <span
              className="font-sans text-[11px] font-extrabold text-white uppercase tracking-wider px-4 py-2.5 rounded-full shadow-[0_4px_12px_rgba(59,130,246,0.3)] bg-gradient-to-r from-cyan-500 to-blue-600 whitespace-nowrap"
            >
              Dejar de ser perfiles → escalar a ciudadanía digital
            </span>
            <p className="font-sans text-[14.5px] text-slate-500 leading-relaxed text-center md:text-left">
              El cambio no es de herramientas. Es de pregunta. Y esa pregunta diferente es el
              núcleo de todo el trabajo de José Farhat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ BLOQUE 5 — Metodología ══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: LIGHT_BLUE, padding: "80px 20px 96px" }}>
        {/* Light Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(66, 114, 187, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(66, 114, 187, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle 500px at 50% 50%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle 500px at 50% 50%, #000 60%, transparent 100%)',
            zIndex: 0,
          }}
        />

        <div className="max-w-5xl mx-auto relative" style={{ zIndex: 1 }}>
          <span
            className="font-sans inline-block"
            style={{ color: BLUE, fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Del diagnóstico a la acción
          </span>
          <h2
            className="font-display mt-3"
            style={{ fontWeight: 800, fontSize: "clamp(22px, 3.5vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.025em", color: NAVY }}
          >
            Una forma de intervenir que es nuestra
          </h2>
          <p className="font-sans mt-2" style={{ fontSize: 15, color: GRIS_BODY }}>
            Construida desde la práctica. Verificada en territorio. No importada.
          </p>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >
            {methodology.map((piece) => (
              <MethodPieceCard
                key={piece.name}
                piece={piece}
                shouldReduceMotion={shouldReduceMotion}
                fadeInUp={fadeInUp}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ BLOQUE 6 — Impacto ══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: CREMA, padding: "80px 20px 96px" }}>
        {/* Outlined Watermark Number */}
        <span
          aria-hidden="true"
          className="font-display font-black pointer-events-none select-none absolute"
          style={{
            fontSize: "clamp(180px, 26vw, 320px)",
            WebkitTextStroke: "1px rgba(0, 50, 87, 0.04)",
            color: "transparent",
            top: -20,
            right: -20,
            lineHeight: 1,
            zIndex: 0,
          }}
        >
          15
        </span>

        <div className="max-w-5xl mx-auto relative" style={{ zIndex: 1 }}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ marginBottom: 44 }}
          >
            <span
              className="font-sans inline-block text-xs sm:text-sm font-bold uppercase tracking-wider mb-2"
              style={{ color: BLUE }}
            >
              Quince años. Evidencia real.
            </span>
            <h2
              className="font-display mt-2"
              style={{
                fontWeight: 900,
                fontSize: "clamp(30px, 4.5vw, 52px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: NAVY,
                maxWidth: 780,
              }}
            >
              Transformando la política pública desde el{" "}
              <em style={{ fontStyle: "normal", color: BLUE }}>territorio</em>
            </h2>
            <p className="font-sans mt-3" style={{ fontSize: 18, lineHeight: 1.6, color: "#4A5568", maxWidth: 720 }}>
              No desde un escritorio. Con retroalimentación directa, sin intermediarios, con
              todos los actores simultáneamente.
            </p>
          </motion.div>

          {/* Hero stat console banner */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-[240px_1fr_180px] items-center gap-6 md:gap-8 p-6 md:p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_8px_30px_rgba(148,163,184,0.06)] hover:shadow-xl transition-all duration-500 mb-10 relative overflow-hidden group"
          >
            {/* Subtle background tech elements inside the hero card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/[0.04] rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/[0.04] rounded-full blur-xl pointer-events-none" />
            
            {/* 1. Photograph of Jose in Territory */}
            <div className="relative w-full h-44 sm:h-52 lg:h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-inner shrink-0">
              <Image 
                src="/img/jose-en-territorio.jpg" 
                alt="José Farhat en el territorio capacitadora" 
                fill
                sizes="(max-w-768px) 100vw, 240px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 font-sans text-[9px] text-white/95 bg-brand-pink px-2.5 py-0.5 rounded border border-white/20 uppercase tracking-widest font-black pointer-events-none">
                Evidencia Directa
              </span>
            </div>
            
            {/* 2. Text and Description */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1.5 justify-start">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink" />
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-pink uppercase tracking-widest">IMPACTO ANUAL REGISTRADO</span>
              </div>
              <h3 className="font-sans font-black text-brand-navy tracking-tight leading-tight mb-2 text-2xl lg:text-3xl">
                Personas alcanzadas en un solo año
              </h3>
              <p className="font-sans text-[15.5px] leading-relaxed text-slate-500 max-w-lg">
                Combinando ámbitos digitales y territoriales en Argentina y América Latina. Una respuesta real, verificada en el campo, estructurada metodológicamente.
              </p>
            </div>

            {/* 3. The Statistic */}
            <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6">
              <span
                className="font-sans font-black tracking-tighter leading-none bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent filter drop-shadow-[0_4px_10px_rgba(213,36,122,0.15)]"
                style={{ fontSize: "80px" }}
              >
                +20K
              </span>
              <span className="font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                ALCANCE ANUAL
              </span>
            </div>
          </motion.div>

          {/* Secondary stats grid */}
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
            style={{ marginBottom: 40 }}
          >
            <StatSecondaryCard stat={statsSecondary[0]} duration={1200} fadeInUp={fadeInUp} index={0} />
            <StatSecondaryCard stat={statsSecondary[1]} duration={900} fadeInUp={fadeInUp} index={1} />
            <StatSecondaryCard stat={statsSecondary[2]} duration={700} fadeInUp={fadeInUp} index={2} />
          </motion.div>

          {/* Achievements validation grid deck */}
          <div className="flex flex-col gap-4">
            <motion.div 
              variants={staggerFast} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {achievements.map((ach, i) => {
                // Custom logo mapping
                const OrgLogo = orgLogos[ach.org] || (() => <span className="text-lg">{ach.flag}</span>)
                
                // Custom icon mapping based on org
                const orgIcons: Record<string, any> = {
                  "CEPAL": Award,
                  "RAGA": Globe,
                  "UNA CR": BookOpen,
                  "UNT": GraduationCap,
                  "Chile": MapPin
                }
                const OrgIcon = orgIcons[ach.org] || Award
                
                // Theme colors mapping
                const orgColors: Record<string, { text: string, bg: string, border: string, glow: string }> = {
                  "CEPAL": { text: "text-[#1d4ed8]", bg: "bg-blue-50 border-blue-100", border: "hover:border-blue-300", glow: "hover:shadow-blue-100/50" },
                  "RAGA": { text: "text-[#10b981]", bg: "bg-emerald-50 border-emerald-100", border: "hover:border-emerald-300", glow: "hover:shadow-emerald-100/50" },
                  "UNA CR": { text: "text-[#ff007f]", bg: "bg-pink-50 border-pink-100", border: "hover:border-pink-300", glow: "hover:shadow-pink-100/50" },
                  "UNT": { text: "text-[#8b5cf6]", bg: "bg-violet-50 border-violet-100", border: "hover:border-violet-300", glow: "hover:shadow-violet-100/50" },
                  "Chile": { text: "text-[#f59e0b]", bg: "bg-amber-50 border-amber-100", border: "hover:border-amber-300", glow: "hover:shadow-amber-100/50" }
                }
                const colorCfg = orgColors[ach.org] || { text: "text-slate-600", bg: "bg-slate-50 border-slate-100", border: "hover:border-slate-300", glow: "hover:shadow-slate-100/50" }

                return (
                  <motion.div
                    key={ach.org}
                    variants={fadeInUp}
                    whileHover={{ y: -3, scale: 1.002 }}
                    className={`flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_12px_rgba(148,163,184,0.04)] hover:shadow-md transition-all duration-300 gap-4 ${colorCfg.border} ${colorCfg.glow}`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Detailed custom SVG logo next to org */}
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/60 shadow-sm shrink-0">
                        <OrgLogo />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="font-sans font-black text-brand-navy text-lg sm:text-[19px] tracking-tight">
                            {ach.org}
                          </h4>
                          <span className={`font-sans text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${colorCfg.bg} ${colorCfg.text}`}>
                            {ach.label}
                          </span>
                        </div>
                        <p className="font-sans text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed mt-1.5">
                          {ach.detail}
                        </p>
                      </div>
                    </div>

                    {/* Right side: custom Lucide icon + year badge */}
                    <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0 shrink-0">
                      <div className={`p-2 rounded-lg ${colorCfg.bg} ${colorCfg.text} opacity-80 hidden md:block`}>
                        <OrgIcon size={16} strokeWidth={1.5} />
                      </div>
                      <span
                        className={`font-sans text-[12px] font-bold tracking-wider px-4 py-1.5 rounded-full border ${
                          ach.year.toLowerCase() === "activo"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-250"
                            : "bg-blue-100 text-blue-800 border-blue-250"
                        }`}
                      >
                        {ach.year}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BLOQUE 7 — IDEAY+ Símbolo de Infinito ══════════════════════ */}
      <IdeayInfinity />

      {/* ══════════════════════ BLOQUE 8 — CTA final ══════════════════════ */}
      <section
        className="relative overflow-hidden bg-brand-dark py-28 md:py-36 px-4 md:px-12 border-t border-white/[0.05]"
      >
        {/* Ambient glows - Intensified */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -translate-y-1/2 left-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[140px] opacity-90" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[120px] opacity-80" />
          <div className="absolute bottom-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[110px] opacity-70" />
        </div>

        {/* Blueprint Grid with Radial Mask */}
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(66,114,187,0.12) 28px, rgba(66,114,187,0.12) 29px),
              repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(66,114,187,0.08) 28px, rgba(66,114,187,0.08) 29px)
            `,
            maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
          }} 
        />

        {/* Giant Tech Compass Radar Graphic in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] opacity-[0.04] z-0 pointer-events-none text-white">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
            <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="28" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="18" />
            <line x1="50" y1="2" x2="50" y2="98" />
            <line x1="2" y1="50" x2="98" y2="50" />
            <line x1="15" y1="15" x2="85" y2="85" strokeDasharray="1 1" />
            <line x1="15" y1="85" x2="85" y2="15" strokeDasharray="1 1" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-sans text-[12px] font-black uppercase tracking-[0.3em] mb-5 bg-gradient-to-r from-brand-blue via-cyan-400 to-[#93c5fd] bg-clip-text text-transparent"
          >
            El tercer territorio ya existe.
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display"
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: "clamp(36px, 7vw, 72px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: 72,
            }}
          >
            La pregunta es <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-brand-pink via-[#ff4fb6] via-cyan-400 to-brand-blue bg-clip-text text-transparent font-black">
              quién lo habita con criterio.
            </span>
          </motion.h2>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-8 text-left relative z-10"
          >
            {verbs.map((v, i) => {
              // Icon mapping based on verb
              const Icon = v.verb === "Escucho" ? Radio : v.verb === "Diseño" ? PenTool : Zap;
              
              // Color parameters by verb type
              let accentColor = "text-brand-pink border-brand-pink/30 hover:border-brand-pink/60"
              let accentText = "group-hover:text-brand-pink"
              let glowColor = "rgba(213, 36, 122, 0.2)"
              let bottomLineColor = "#D5247A"
              let iconColorText = "text-brand-pink"

              if (v.verb === "Diseño") {
                accentColor = "text-brand-blue border-brand-blue/30 hover:border-brand-blue/60"
                accentText = "group-hover:text-brand-blue"
                glowColor = "rgba(66, 114, 187, 0.2)"
                bottomLineColor = "#4272BB"
                iconColorText = "text-[#60a5fa]"
              } else if (v.verb === "Activo") {
                accentColor = "text-cyan-400 border-cyan-400/30 hover:border-cyan-400/60"
                accentText = "group-hover:text-cyan-400"
                glowColor = "rgba(6, 182, 212, 0.2)"
                bottomLineColor = "#06B6D4"
                iconColorText = "text-cyan-400"
              }

              return (
                <motion.div 
                  key={v.verb} 
                  variants={fadeInUp} 
                  whileHover={{ y: -8, borderColor: bottomLineColor }}
                  className="group relative rounded-2xl p-8 lg:p-10 bg-[#001e3c]/55 border border-white/[0.08] backdrop-blur-md transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-pink/5 flex flex-col justify-between"
                  style={{ minHeight: 250 }}
                >
                  {/* Subtle neon gradient glow spotlight in bottom right */}
                  <div 
                    className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: glowColor }}
                  />

                  {/* Top accent line matching the category color */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: bottomLineColor }}
                  />

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <span className="absolute top-0 right-0 text-xs font-bold text-white/10 group-hover:text-white/20 select-none transition-colors duration-300 font-display">
                      0{i + 1}
                    </span>

                    {/* Icon Container - Larger */}
                    <div className={`inline-flex items-center justify-center p-3.5 rounded-2xl bg-white/[0.03] border ${accentColor} mb-8 group-hover:scale-110 transition-transform duration-300 ${iconColorText}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className={`font-display font-black text-white text-2xl lg:text-3xl mb-4 tracking-tight ${accentText} transition-colors duration-300`}>
                      {v.verb}
                    </h3>
                    
                    <p className="font-sans text-[14.5px] leading-relaxed text-slate-300/80 group-hover:text-white transition-colors duration-300 font-normal">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call-to-action buttons - Expanded & Stylized */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10 mt-14 md:mt-20 w-full max-w-lg mx-auto sm:max-w-none">
            <Link href="/contacto" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="font-sans w-full inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-base text-white border-0 shadow-xl shadow-brand-pink/20 cursor-pointer transition-all duration-300 hover:shadow-brand-pink/40"
                style={{
                  background: "linear-gradient(135deg, #D5247A 0%, #4272BB 100%)",
                }}
              >
                Conectar con José →
              </motion.button>
            </Link>

            <Link href="/conoceme#tesis" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="font-sans w-full inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-base text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all duration-300"
              >
                Leer la tesis completa
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
