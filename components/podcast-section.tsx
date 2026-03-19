"use client"

import { motion } from "framer-motion"
import { ExternalLink, Headphones, Play, Radio } from "lucide-react"
import { useState, useRef } from "react"
import Link from "next/link"

export function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── FONDO CON TEXTURA ──────────────────────────────────────────────────
          Gradiente suave desde el blanco hacia un azul muy tenue
          que da profundidad sin competir con el contenido.
      ────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(160deg, #ffffff 0%, #EEF4FB 50%, #e4eef8 100%)"
        }} />
        {/* Glow azul sutil arriba-derecha */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(66,114,187,0.08) 0%, transparent 70%)"
        }} />
        {/* Glow rosa sutil abajo-izquierda */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(213,36,122,0.06) 0%, transparent 70%)"
        }} />
        {/* Grilla de puntos */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #003257 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">

        {/* ── HEADER ──────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-pink/10 text-brand-pink text-xs font-semibold rounded-full mb-5 tracking-wider uppercase">
            <Radio className="w-3.5 h-3.5" />
            Podcast
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-display leading-tight">
            Ciudadanía Presente
          </h2>
          <p className="text-lg text-brand-navy/55 max-w-xl mx-auto leading-relaxed">
            Conversaciones sobre innovación, participación ciudadana y democracia. Nuevos episodios disponibles en todas las plataformas.
          </p>
        </motion.div>

        {/* ── LAYOUT PRINCIPAL — 2 columnas desktop ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">

          {/* ── COLUMNA IZQUIERDA: Video ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Card del video con efecto premium */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 32px 64px rgba(0,50,87,0.18), 0 8px 24px rgba(0,50,87,0.10)",
              }}
            >
              {/* Borde gradiente */}
              <div className="absolute inset-0 rounded-3xl z-[1] pointer-events-none" style={{
                background: "linear-gradient(135deg, rgba(66,114,187,0.4), rgba(213,36,122,0.3))",
                padding: "1.5px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }} />

              {/* Video */}
              <div className="relative aspect-video bg-[#000d1a]">
                <video
                  ref={videoRef}
                  src="/vid/vid.mp4"
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Overlay play */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(160deg, rgba(0,13,26,0.7) 0%, rgba(0,50,87,0.5) 100%)"
                    }}
                  >
                    {/* Etiqueta */}
                    <div className="mb-6 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                      <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                        Ciudadanía Presente
                      </span>
                    </div>

                    {/* Botón play */}
                    <button
                      onClick={handlePlay}
                      className="group relative flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #D5247A, #4272BB)",
                        boxShadow: "0 0 40px rgba(213,36,122,0.4), 0 8px 24px rgba(0,0,0,0.3)",
                      }}
                    >
                      <Play className="w-7 h-7 text-white ml-1" />
                      {/* Ring animado */}
                      <span className="absolute inset-0 rounded-full animate-ping opacity-20"
                        style={{ background: "linear-gradient(135deg, #D5247A, #4272BB)" }} />
                    </button>

                    <p className="mt-5 text-white/50 text-sm">Reproducir episodio</p>
                  </div>
                )}
              </div>

              {/* Footer de la card */}
              <div className="bg-[#001228] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #D5247A, #4272BB)" }}>
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">El Podcast</p>
                    <p className="text-white/40 text-xs mt-0.5">José Farhat</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
                  <span className="text-white/40 text-xs">En vivo en plataformas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── COLUMNA DERECHA: Spotify + info ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >

            {/* Spotify embed — card con sombra */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 24px 48px rgba(0,50,87,0.14), 0 4px 16px rgba(0,50,87,0.08)",
              }}
            >
              {/* Header de la card */}
              <div className="px-5 py-4 flex items-center gap-3"
                style={{ background: "linear-gradient(135deg, #003257, #001e3c)" }}>
                {/* Ícono Spotify */}
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="text-white text-sm font-semibold">Último episodio en Spotify</span>
              </div>

              {/* Embed */}
              <div className="bg-[#121212]">
                <iframe
                  src="https://open.spotify.com/embed/episode/63AgnYjzfvRPrpC3siVs6M?utm_source=generator&t=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: "block" }}
                />
              </div>
            </div>

            {/* Descripción */}
            <div className="rounded-2xl p-6 border border-[#d3e2f0]"
              style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
              <p className="text-brand-navy/70 leading-relaxed text-[15px]">
                En <span className="font-semibold text-brand-navy">Ciudadanía Presente</span> exploramos
                cómo la innovación, la tecnología y la participación están redefiniendo la democracia
                del siglo XXI. Conversaciones con referentes de Argentina y la región.
              </p>
            </div>

            {/* CTA — Explorar canal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://open.spotify.com/episode/63AgnYjzfvRPrpC3siVs6M"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-[15px] text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #003257 0%, #4272BB 100%)",
                  boxShadow: "0 8px 24px rgba(66,114,187,0.30)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(66,114,187,0.45)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(66,114,187,0.30)"
                }}
              >
                <Headphones className="w-4 h-4" />
                Explorar Ciudadanía Presente
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </div>

            {/* Plataformas disponibles */}
            <div className="flex items-center gap-3">
              <span className="text-brand-navy/35 text-xs font-medium uppercase tracking-wider">
                Disponible en
              </span>
              <div className="flex-1 h-px bg-[#d3e2f0]" />
              <div className="flex items-center gap-3">
                {/* Spotify */}
                <a href="https://open.spotify.com/episode/63AgnYjzfvRPrpC3siVs6M"
                  target="_blank" rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1DB954">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UC62WiM9pgjfSIvUgCDlgXww"
                  target="_blank" rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  )
}
