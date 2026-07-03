"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { Ear, BookOpen, Languages, DraftingCompass, Zap, Sparkles } from "lucide-react"

// Helper function to pad single digit numbers with a leading zero
function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`
}

// Define the steps data with colors and coordinates for Desktop layout mapping the infinity curve
const steps = [
  {
    number: 1,
    verb: "Escuchar",
    title: "Escuchar el territorio",
    description: "Identificar qué preocupa, qué se naturalizó y qué aún no tiene nombre en los tres territorios.",
    icon: Ear,
    gradient: "from-[#00f0ff] to-blue-500", // Cian Eléctrico
    glowColor: "rgba(0, 240, 255, 0.4)",
    accentColor: "#00f0ff",
    left: 33,
    top: 12
  },
  {
    number: 2,
    verb: "Leer",
    title: "Leer el problema",
    description: "Analizar riesgos, vulnerabilidades, factores protectores y actores de cada nivel del ecosistema.",
    icon: BookOpen,
    gradient: "from-blue-500 to-[#9d4edd]", // Azul
    glowColor: "rgba(37, 99, 235, 0.4)",
    accentColor: "#2563eb",
    left: 13,
    top: 50
  },
  {
    number: 3,
    verb: "Traducir",
    title: "Traducir la complejidad",
    description: "Convertir lo difícil en lenguaje claro, pedagógico y accionable para cada audiencia.",
    icon: Languages,
    gradient: "from-[#9d4edd] to-[#ff007f]", // Violeta Cyber
    glowColor: "rgba(157, 78, 221, 0.4)",
    accentColor: "#9d4edd",
    left: 33,
    top: 88
  },
  {
    number: 4,
    verb: "Diseñar",
    title: "Diseñar la estrategia",
    description: "Crear capacitaciones, laboratorios, protocolos y dispositivos metodológicos a medida del contexto.",
    icon: DraftingCompass,
    gradient: "from-[#ff007f] to-pink-600", // Rosa Láser
    glowColor: "rgba(255, 0, 127, 0.4)",
    accentColor: "#ff007f",
    left: 67,
    top: 12
  },
  {
    number: 5,
    verb: "Activar",
    title: "Activar la corresponsabilidad",
    description: "Alinear escuela, familia y Estado bajo un mismo lenguaje y criterios compartidos de cuidado.",
    icon: Zap,
    gradient: "from-[#D5247A] to-pink-600", // Magenta intenso
    glowColor: "rgba(213, 36, 122, 0.4)",
    accentColor: "#D5247A",
    left: 87,
    top: 50
  },
  {
    number: 6,
    verb: "Transformar",
    title: "Transformar la cultura e instalar soberanía",
    description: "Instalar capacidades sostenibles en el territorio. Cada vuelta del ciclo es más profunda que la anterior — la fase 6 reinicia en la 1.",
    icon: Sparkles,
    gradient: "from-[#00f0ff] via-[#9d4edd] to-[#ff007f]", // Degradado holográfico total
    glowColor: "rgba(157, 78, 221, 0.4)",
    accentColor: "#9d4edd",
    left: 67,
    top: 88
  }
]

// Position helpers for the popover overlay relative to its node
const getPopoverStyles = (num: number): React.CSSProperties => {
  switch (num) {
    case 1: // top-left -> float below
      return { top: "54px", left: "50%", transform: "translateX(-50%)" }
    case 2: // far-left -> float right
      return { left: "54px", top: "50%", transform: "translateY(-50%)" }
    case 3: // bottom-left -> float above
      return { bottom: "54px", left: "50%", transform: "translateX(-50%)" }
    case 4: // top-right -> float below
      return { top: "54px", left: "50%", transform: "translateX(-50%)" }
    case 5: // far-right -> float left
      return { right: "54px", top: "50%", transform: "translateY(-50%)" }
    case 6: // bottom-right -> float above
      return { bottom: "54px", left: "50%", transform: "translateX(-50%)" }
    default:
      return {}
  }
}

// Arrow indicators pointing exactly to the bubble nodes
const getArrowStyles = (num: number): React.CSSProperties => {
  switch (num) {
    case 1: // points up
      return { top: "-6px", left: "50%", transform: "translateX(-50%) rotate(45deg)", borderRight: "none", borderBottom: "none" }
    case 2: // points left
      return { left: "-6px", top: "50%", transform: "translateY(-50%) rotate(-45deg)", borderRight: "none", borderTop: "none" }
    case 3: // points down
      return { bottom: "-6px", left: "50%", transform: "translateX(-50%) rotate(225deg)", borderRight: "none", borderTop: "none" }
    case 4: // points up
      return { top: "-6px", left: "50%", transform: "translateX(-50%) rotate(45deg)", borderRight: "none", borderBottom: "none" }
    case 5: // points right
      return { right: "-6px", top: "50%", transform: "translateY(-50%) rotate(135deg)", borderRight: "none", borderTop: "none" }
    case 6: // points down
      return { bottom: "-6px", left: "50%", transform: "translateX(-50%) rotate(225deg)", borderRight: "none", borderTop: "none" }
    default:
      return {}
  }
}

export default function IdeayInfinity() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeNode, setActiveNode] = useState<number>(1)
  const shouldReduceMotion = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Transform scroll progress to path length for desktop SVG
  const pathLength = useTransform(scrollProgress, [0.08, 0.72], [0, 1])

  // Transform scroll progress to height for mobile vertical line
  const mobileLineHeight = useTransform(scrollProgress, [0.08, 0.72], ["0%", "100%"])

  // Get pulse animation speed for each segment based on the active node
  const getPulseDuration = (lobe: "left" | "rightUpper" | "rightLower") => {
    if (lobe === "left") {
      return [1, 2, 3].includes(activeNode) ? 3.0 : 7.0
    }
    if (lobe === "rightUpper") {
      return [4, 5].includes(activeNode) ? 3.0 : 7.0
    }
    if (lobe === "rightLower") {
      return activeNode === 6 ? 3.0 : 7.0
    }
    return 7.0
  }

  // Get path opacities dynamically based on activeNode
  const getPathOpacity = (lobe: "left" | "rightUpper" | "rightLower") => {
    if (lobe === "left") {
      return [1, 2, 3].includes(activeNode) ? 1.0 : 0.4
    }
    if (lobe === "rightUpper") {
      return [4, 5].includes(activeNode) ? 1.0 : 0.4
    }
    if (lobe === "rightLower") {
      return activeNode === 6 ? 1.0 : 0.4
    }
    return 0.7
  }

  return (
    <section
      ref={containerRef}
      aria-label="Método IDEAY+ — ciclo continuo de seis fases"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50"
    >
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Grid background layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(100% 100% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(100% 100% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* Decorative ambient spots */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff007f]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* COMPACT TWO-COLUMN HEADER (Decreased vertical notebook footprint) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-10 px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="lg:max-w-xl text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-800 text-[10px] font-mono tracking-widest uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Método IDEAY+
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-navy tracking-tight leading-tight">
            No es una receta. <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#ff007f]">
              Es un ciclo
            </span> que se perfecciona.
          </h2>
        </div>
        <div className="lg:max-w-md text-center lg:text-left">
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
            Seis fases de co-diseño en territorio. Cada vuelta deja capacidades que la siguiente vuelve más profundas.{" "}
            <strong className="text-brand-navy/80 font-semibold">La prevención no se improvisa: se diseña.</strong>
          </p>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative max-w-7xl mx-auto mt-6">
        
        {/* DESKTOP VIEW: 3D Interlaced Lemniscata Infinity Loop (Compact Height) */}
        <div className="relative hidden lg:block w-full max-w-5xl mx-auto h-[380px]">
          
          {/* SVG connection lines for infinity loop with interlaced depth */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Ultra-glow neon filters optimized for light backgrounds */}
              <filter id="light-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4.0" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="8.5" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Continuous color flows */}
              <linearGradient id="leftLobeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" />  {/* Cyan Eléctrico */}
                <stop offset="50%" stopColor="#2563eb" /> {/* Azul */}
                <stop offset="100%" stopColor="#9d4edd" />{/* Violeta Cyber */}
              </linearGradient>

              <linearGradient id="rightUpperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9d4edd" />  {/* Violeta */}
                <stop offset="100%" stopColor="#ff007f" /> {/* Rosa Láser */}
              </linearGradient>

              <linearGradient id="rightLowerGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#D5247A" />  {/* Magenta */}
                <stop offset="100%" stopColor="#00f0ff" /> {/* Cyan */}
              </linearGradient>
            </defs>

            {/* Background track path (full infinity shape, dim) */}
            <path
              d="M 50,50 C 38,15 25,12 13,50 C 25,88 38,85 50,50 C 62,15 75,12 87,50 C 75,88 62,85 50,50 Z"
              fill="none"
              stroke="rgba(0, 50, 87, 0.05)"
              strokeWidth={1.5}
            />

            {/* Group containing all tracks with a living energy pulse */}
            <g className="animate-pulse" style={{ animationDuration: "4.5s" }}>
              {/* LAYER 1: Underpass (Right loop lower half) */}
              <g 
                filter="url(#light-neon-glow)"
                className="transition-all duration-500"
                style={{ opacity: getPathOpacity("rightLower") }}
              >
                <motion.path
                  d="M 87,50 C 75,88 62,85 50,50"
                  fill="none"
                  stroke="url(#rightLowerGradient)"
                  strokeWidth={12}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.16}
                />
                <motion.path
                  d="M 87,50 C 75,88 62,85 50,50"
                  fill="none"
                  stroke="url(#rightLowerGradient)"
                  strokeWidth={4.5}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                />
                <motion.path
                  d="M 87,50 C 75,88 62,85 50,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.9}
                />
              </g>

              {/* LAYER 2: Main Left Loop */}
              <g 
                filter="url(#light-neon-glow)"
                className="transition-all duration-500"
                style={{ opacity: getPathOpacity("left") }}
              >
                <motion.path
                  d="M 50,50 C 38,15 25,12 13,50 C 25,88 38,85 50,50"
                  fill="none"
                  stroke="url(#leftLobeGradient)"
                  strokeWidth={12}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.16}
                />
                <motion.path
                  d="M 50,50 C 38,15 25,12 13,50 C 25,88 38,85 50,50"
                  fill="none"
                  stroke="url(#leftLobeGradient)"
                  strokeWidth={4.5}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                />
                <motion.path
                  d="M 50,50 C 38,15 25,12 13,50 C 25,88 38,85 50,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.9}
                />
              </g>

              {/* LAYER 3: Overpass (Right loop upper half) */}
              <g 
                filter="url(#light-neon-glow)"
                className="transition-all duration-500"
                style={{ opacity: getPathOpacity("rightUpper") }}
              >
                <motion.path
                  d="M 50,50 C 62,15 75,12 87,50"
                  fill="none"
                  stroke="url(#rightUpperGradient)"
                  strokeWidth={12}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.16}
                />
                <motion.path
                  d="M 50,50 C 62,15 75,12 87,50"
                  fill="none"
                  stroke="url(#rightUpperGradient)"
                  strokeWidth={4.5}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                />
                <motion.path
                  d="M 50,50 C 62,15 75,12 87,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
                  opacity={0.9}
                />
              </g>
            </g>

            {/* Dynamic pulse particle flowing along paths */}
            {!shouldReduceMotion && (
              <>
                {/* Left lobe pulse */}
                <motion.path
                  d="M 50,50 C 38,15 25,12 13,50 C 25,88 38,85 50,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="6 70"
                  animate={{ strokeDashoffset: [0, -140] }}
                  transition={{ duration: getPulseDuration("left"), repeat: Infinity, ease: "linear" }}
                  filter="url(#light-neon-glow)"
                />
                {/* Right upper lobe pulse */}
                <motion.path
                  d="M 50,50 C 62,15 75,12 87,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="6 70"
                  animate={{ strokeDashoffset: [0, -70] }}
                  transition={{ duration: getPulseDuration("rightUpper") * 0.5, repeat: Infinity, ease: "linear" }}
                  filter="url(#light-neon-glow)"
                />
                {/* Right lower lobe pulse */}
                <motion.path
                  d="M 87,50 C 75,88 62,85 50,50"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="6 70"
                  animate={{ strokeDashoffset: [0, -70] }}
                  transition={{ duration: getPulseDuration("rightLower") * 0.5, repeat: Infinity, ease: "linear" }}
                  filter="url(#light-neon-glow)"
                />
              </>
            )}
          </svg>

          {/* Central Crossover point */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none"
            style={{
              top: "50%",
              left: "50%"
            }}
          >
            <div className="relative w-7 h-7 rounded-full bg-gradient-to-r from-violet-500 to-[#D5247A] opacity-70 blur-[2px] animate-pulse" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#2563eb] animate-ping duration-1000" />
          </div>

          {/* Render circular buttons over the curves with relative absolute positioning */}
          {steps.map((step) => {
            const isActive = activeNode === step.number
            
            return (
              <div
                key={step.number}
                className="absolute z-20 group -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${step.left}%`,
                  top: `${step.top}%`,
                }}
              >
                <div className="relative">
                  <button
                    onClick={() => setActiveNode(isActive ? 0 : step.number)}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 focus:outline-none ${
                      isActive 
                        ? "bg-white border-2 text-slate-800 scale-110 shadow-lg" 
                        : "bg-white/90 hover:bg-white text-slate-400 hover:text-slate-700 hover:scale-105 border-slate-200 shadow-md"
                    }`}
                    style={{
                      borderColor: isActive ? step.accentColor : "rgba(226, 232, 240, 0.8)",
                      boxShadow: isActive ? `0 0 15px ${step.glowColor}` : undefined
                    }}
                  >
                    <span className="font-mono text-sm font-bold">
                      {pad2(step.number)}
                    </span>
                  </button>

                  {/* FLOATING POPOVER OVERLAY ON THE INFINITY (No scroll needed) */}
                  <AnimatePresence>
                    {isActive && (
                      <div 
                        className="absolute z-30"
                        style={getPopoverStyles(step.number)}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="bg-white/95 text-slate-800 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-5 shadow-[0_10px_35px_rgba(148,163,184,0.25)] w-[270px] relative text-left"
                        >
                          {/* Arrow pointing directly to the bubble node */}
                          <div 
                            className="absolute w-3 h-3 bg-white border-l border-t border-slate-200/80 pointer-events-none"
                            style={getArrowStyles(step.number)}
                          />
                          
                          {/* Card Header */}
                          <div className="flex items-center justify-between mb-3">
                            <span 
                              className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${step.gradient}`}
                            >
                              Fase {pad2(step.number)} · {step.verb}
                            </span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveNode(0); // close popover
                              }}
                              className="text-slate-400 hover:text-slate-600 font-sans text-xs focus:outline-none leading-none"
                            >
                              ✕
                            </button>
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-display text-sm font-extrabold text-brand-navy mb-2 tracking-tight leading-snug">
                            {step.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="font-sans text-[11.5px] leading-relaxed text-slate-500">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>

        {/* MOBILE VIEW: Stacked Interactive Vertical Timeline (Ultra-premium Design) */}
        <div className="lg:hidden relative max-w-md mx-auto pl-2 pr-2">
          
          {/* Mobile background timeline track */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-slate-200/50 pointer-events-none" />
          
          {/* Mobile animated active timeline track */}
          <motion.div
            className="absolute left-[23px] top-6 w-[2px] bg-gradient-to-b from-cyan-400 via-[#9d4edd] to-[#ff007f] pointer-events-none"
            style={{ 
              height: shouldReduceMotion ? "calc(100% - 48px)" : mobileLineHeight,
              maxHeight: "calc(100% - 48px)",
              filter: "drop-shadow(0 0 3px rgba(157, 78, 221, 0.4))"
            }}
          />

          {/* Vertical cards list */}
          <div className="relative z-10 flex flex-col gap-6 w-full">
            {steps.map((step) => {
              const isActive = activeNode === step.number
              const Icon = step.icon
              
              return (
                <div key={step.number} className="flex gap-4 items-start w-full snap-center">
                  
                  {/* Bubble Node indicator */}
                  <button
                    onClick={() => setActiveNode(isActive ? 0 : step.number)}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full border shrink-0 z-10 transition-all duration-300 focus:outline-none ${
                      isActive 
                        ? "bg-white border-2 text-slate-800 scale-105 shadow-md" 
                        : "bg-white/80 text-slate-400 border-slate-200 shadow-sm"
                    }`}
                    style={{
                      borderColor: isActive ? step.accentColor : "rgba(226, 232, 240, 0.8)",
                      boxShadow: isActive ? `0 0 12px ${step.glowColor}` : undefined
                    }}
                  >
                    <span className="font-mono text-sm font-bold">
                      {pad2(step.number)}
                    </span>
                  </button>

                  {/* Tactile Card with Expandable Drawer */}
                  <div
                    onClick={() => setActiveNode(isActive ? 0 : step.number)}
                    className={`flex-1 bg-white border rounded-2xl p-5 shadow-[0_4px_12px_rgba(148,163,184,0.05)] hover:shadow-md transition-all duration-300 cursor-pointer ${
                      isActive ? "border-slate-300" : "border-slate-200/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${step.gradient}`}
                      >
                        {step.verb}
                      </span>
                      <div 
                        className="p-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100"
                        style={{
                          color: isActive ? step.accentColor : "rgba(100, 116, 139, 0.6)",
                          transition: "color 0.25s ease"
                        }}
                      >
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-sm font-bold text-brand-navy mt-3">
                      {step.title}
                    </h3>

                    {/* Accordion Expandable drawer */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isActive ? "auto" : 0, 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 12 : 0
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[12px] leading-relaxed text-slate-500 border-t border-slate-100 pt-3">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
