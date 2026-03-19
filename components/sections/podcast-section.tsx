"use client"

import { motion } from "framer-motion"
import { ExternalLink, Headphones, Radio } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function PodcastSection() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── FONDO ──────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(160deg, #ffffff 0%, #EEF4FB 55%, #e4eef8 100%)"
        }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(66,114,187,0.08) 0%, transparent 70%)"
        }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(213,36,122,0.06) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #003257 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16">

        {/* ── HEADER compacto ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 text-brand-pink text-[11px] font-semibold rounded-full mb-3 tracking-wider uppercase">
            <Radio className="w-3 h-3" />
            Podcast
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy font-display leading-tight">
            Ciudadanía Presente
          </h2>
        </motion.div>

        {/* ── GRID 2 COLUMNAS ───────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-10 items-center max-w-5xl mx-auto">

          {/* ── IZQUIERDA: Spotify embed compacto ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 48px rgba(0,50,87,0.16), 0 4px 16px rgba(0,50,87,0.08)",
              }}
            >
              {/* Header */}
              <div
                className="px-4 py-3 flex items-center gap-2.5"
                style={{ background: "linear-gradient(135deg, #003257, #001e3c)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="text-white text-xs font-semibold">Spotify · Último episodio</span>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
                </div>
              </div>

              {/* Embed altura reducida */}
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
          </motion.div>

          {/* ── DERECHA: ícono animado + descripción + CTA ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-5"
          >

            {/* Ícono premium animado */}
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                {/* Anillo exterior pulsante */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #D5247A, #4272BB)" }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Anillo medio */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #D5247A, #4272BB)" }}
                  animate={{ scale: [1, 1.09, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                {/* Cuerpo del ícono */}
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #D5247A 0%, #4272BB 100%)",
                    boxShadow: "0 8px 24px rgba(213,36,122,0.35)",
                  }}
                >
                  {/* Ondas de audio SVG animadas dentro del ícono */}
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                    {/* Barra central */}
                    <motion.rect x="9" y="0" width="4" height="18" rx="2" fill="white"
                      animate={{ scaleY: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: "center" }}
                    />
                    {/* Barra izquierda */}
                    <motion.rect x="3" y="4" width="4" height="10" rx="2" fill="rgba(255,255,255,0.75)"
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      style={{ transformOrigin: "center" }}
                    />
                    {/* Barra derecha */}
                    <motion.rect x="15" y="4" width="4" height="10" rx="2" fill="rgba(255,255,255,0.75)"
                      animate={{ scaleY: [0.7, 1, 0.7] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      style={{ transformOrigin: "center" }}
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-brand-navy leading-tight">
                  El podcast donde la democracia toma la palabra
                </p>
              </div>
            </div>

            {/* Descripción compacta */}
            <p className="text-[14px] text-brand-navy/60 leading-relaxed">
              Conversaciones profundas sobre innovación, tecnología y participación ciudadana. Conducido por{" "}
              <span className="font-semibold text-brand-navy">José Farhat</span>, referente regional en gobierno abierto.
            </p>

            {/* Separador con logo Spotify */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#d3e2f0]" />
              <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <div className="flex-1 h-px bg-[#d3e2f0]" />
            </div>

            {/* CTA con shimmer */}
            <Link
              href="https://open.spotify.com/episode/63AgnYjzfvRPrpC3siVs6M"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-[14px] text-white overflow-hidden w-full lg:w-fit"
              style={{
                background: hovered
                  ? "linear-gradient(135deg, #D5247A 0%, #4272BB 100%)"
                  : "linear-gradient(135deg, #003257 0%, #4272BB 100%)",
                boxShadow: hovered
                  ? "0 16px 40px rgba(213,36,122,0.40), 0 0 0 1px rgba(213,36,122,0.25)"
                  : "0 6px 20px rgba(66,114,187,0.28)",
                transition: "box-shadow 0.4s ease, transform 0.3s ease, background 0.4s ease",
                transform: hovered ? "translateY(-3px) scale(1.01)" : "translateY(0) scale(1)",
              }}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                }}
                animate={hovered
                  ? { x: ["−100%", "100%"] }
                  : { x: "-100%" }
                }
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              <Headphones className="w-4 h-4 relative z-10 flex-shrink-0" />
              <span className="relative z-10">Explorar Ciudadanía Presente</span>
              <motion.div
                className="relative z-10"
                animate={hovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.div>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
