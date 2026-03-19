"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.72
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#000d1a]">

      {/* ── VIDEO ────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/vid/vid.mp4"
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.70) saturate(1.3)" }}
        />
      </div>

      {/* ── DEGRADADO IZQUIERDA ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "linear-gradient(90deg, #000d1a 0%, #000d1a 20%, #001528aa 35%, #001e3c44 50%, transparent 68%)",
      }} />

      {/* ── DEGRADADO TOP ────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "linear-gradient(to bottom, #000d1a 0%, transparent 16%)",
      }} />

      {/* ── GLOW AZUL IZQUIERDA ───────────────────────────────────────────────── */}
      <div className="absolute z-[2] pointer-events-none" style={{
        left: "-5%", top: "20%", width: "55%", height: "60%",
        background: "radial-gradient(ellipse at 20% 50%, rgba(66,114,187,0.22) 0%, rgba(0,50,87,0.10) 50%, transparent 75%)",
      }} />

      {/* ── GRILLA DE PUNTOS ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
        backgroundSize: "50px 50px",
        opacity: 0.07,
      }} />

      {/* ── CONTENIDO ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24 pt-32 pb-56">
        <div className="max-w-[640px]">

          {/* Ubicación — chico, no compite */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mb-8"
          >
            <span className="text-[11px] font-medium tracking-[.14em] uppercase text-white/35">
              Tucumán, Argentina
            </span>
          </motion.div>

          {/* Título */}
          <h1
            className="font-display font-bold tracking-tight text-white leading-[1.03] mb-7"
            style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.75 }}
              className="block"
            >
              Ciudadanía
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.75 }}
              className="block"
              style={{
                background: "linear-gradient(135deg, #D5247A 0%, #e8559a 50%, #4272BB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Presente
            </motion.span>
          </h1>

          {/* Línea divisora */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
            className="origin-left mb-7"
          >
            <div className="h-[2px] w-24" style={{
              background: "linear-gradient(90deg, #4272BB, #D5247A, transparent)",
            }} />
          </motion.div>

          {/* Bajada */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.65 }}
            className="text-[17px] sm:text-xl text-white/60 max-w-md mb-10 leading-relaxed"
          >
            Innovación, participación y democracia desde Tucumán para el mundo
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contenido"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold text-[15px] rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #003257 0%, #4272BB 100%)",
                color: "white",
                boxShadow: "0 0 32px rgba(66,114,187,0.35)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(66,114,187,0.55)"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(66,114,187,0.35)"
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              Explorar contenido
              <ChevronDown className="w-4 h-4" />
            </Link>

            <Link
              href="https://ciudadaniadigital.josefarhat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold text-[15px] text-white rounded-full border border-white/20 hover:border-white/40 hover:bg-white/8 transition-all duration-300"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink" />
              </span>
              Ciudadanía Digital
              <span className="text-brand-pink font-bold">→</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DIAGONAL NEON
          Corte agresivo: parte desde abajo-izquierda y sube pronunciado.
          SVG 260px de alto para que el ángulo sea notoriamente vertical.
          Efecto neon en 3 capas:
            1. Halo exterior difuso (glow ancho, baja opacidad)
            2. Línea rosa sólida con filtro blur medio
            3. Núcleo blanco delgado — el "filamento" del neon
      ════════════════════════════════════════════════════════════════════════ */}
      {/*
        SVG de doble diagonal — forma de "V" acostada con pico a la izquierda.

        El viewBox tiene altura 240: la mitad superior (0→120) pertenece al hero,
        la mitad inferior (120→240) pertenece a la entrada de la sección siguiente.

        Diagonal 1 (existente, neon rosa):
          izq-abajo (0,120) → der-arriba (1440,0)  — cierre del hero

        Diagonal 2 (nueva, solo corte geométrico):
          mismo pico izq (0,120) → der-abajo (1440,240) — entrada en la sección oscura

        Rellenos:
          - Arriba-derecha del pico → blanco (fondo del hero que ya no es video)
          - Abajo-derecha del pico → oscuro #000d1a (fondo de la sección de pilares)
          - El triángulo izquierdo queda "abierto" — es el video del hero
      */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none"
        style={{ height: "240px", marginBottom: "-120px" }}>
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "240px" }}
        >
          <defs>
            <filter id="glow-mid" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-halo" x="-40%" y="-200%" width="180%" height="500%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>

          {/* Relleno blanco — zona del hero (arriba del pico) */}
          <polygon points="0,120 1440,0 1440,120" fill="#ffffff" />

          {/* Zona inferior — sin relleno, el video se ve a través */}

          {/* ── Diagonal 1: neon rosa (cierre hero) ── */}
          <line x1="0" y1="123" x2="1444" y2="-3"
            stroke="#D5247A" strokeWidth="20" opacity="0.18"
            filter="url(#glow-halo)" />
          <line x1="0" y1="123" x2="1444" y2="-3"
            stroke="#D5247A" strokeWidth="3.5"
            filter="url(#glow-mid)" />
          <line x1="0" y1="123" x2="1444" y2="-3"
            stroke="rgba(255,255,255,0.95)" strokeWidth="1" />

          {/* ── Diagonal 2: corte geométrico limpio (entrada pilares) ── */}
          <line x1="0" y1="117" x2="1444" y2="243"
            stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        </svg>
      </div>

      {/* ── SCROLL ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-[.2em]">Scroll</span>
          <div className="w-[1px] h-8" style={{
            background: "linear-gradient(to bottom, rgba(66,114,187,0.6), transparent)",
          }} />
        </motion.div>
      </motion.div>

    </section>
  )
}
