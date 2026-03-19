"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const newsItems = [
  {
    category: "Internacional",
    tag: "2025",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    excerpt: "Reflexiones sobre juventudes, participación y transformación digital en el escenario global.",
    href: "/novedades",
    featured: true,
  },
  {
    category: "Gobierno Abierto",
    tag: "2025",
    title: "Webinar internacional con enfoque territorial desde Perú",
    href: "/novedades",
  },
  {
    category: "Premio OIDP",
    tag: "2024",
    title: "Reconocimiento en la 24° Conferencia por Escuela de Ciudadanía",
    href: "/novedades",
  },
  {
    category: "Ponencia",
    tag: "2024",
    title: "Universidad Internacional — Municipalidad de Rancagua",
    href: "/novedades",
  },
  {
    category: "Ciberseguridad",
    tag: "2024",
    title: "Jornada provincial — 300 personas, un cambio de chip necesario",
    href: "/novedades",
  },
]

export function NewsSection() {
  const [featured, ...rest] = newsItems

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001228 0%, #002444 50%, #001e3c 100%)" }}
    >

      {/* ── FONDO ──────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[700px] h-[500px]" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(213,36,122,0.10) 0%, transparent 65%)"
        }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(66,114,187,0.12) 0%, transparent 65%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">

        {/* ── HEADER ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-brand-pink/15 text-brand-pink text-[11px] font-semibold rounded-full mb-4 tracking-wider uppercase">
              Novedades
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
              Lo que tenés que saber
            </h2>
          </div>
          <Link
            href="/novedades"
            className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap"
          >
            Ver todas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* ── GRID ──────────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-5">

          {/* ── CARD FEATURED — grande ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href={featured.href}
              className="group relative flex flex-col justify-end h-full min-h-[420px] lg:min-h-[520px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.40)" }}
            >
              {/* Fondo visual decorativo */}
              <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(135deg, #003a6e 0%, #002444 40%, #001228 100%)"
                }} />
                {/* Círculos decorativos */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20" style={{
                  background: "radial-gradient(circle, #4272BB 0%, transparent 70%)",
                  transform: "translate(30%, -30%)"
                }} />
                <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-10" style={{
                  background: "radial-gradient(circle, #D5247A 0%, transparent 70%)",
                }} />
                {/* Líneas geométricas SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]"
                  viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice">
                  <line x1="0" y1="130" x2="600" y2="0" stroke="white" strokeWidth="1"/>
                  <line x1="0" y1="260" x2="600" y2="130" stroke="white" strokeWidth="0.5"/>
                  <line x1="0" y1="390" x2="600" y2="260" stroke="white" strokeWidth="1"/>
                  <circle cx="480" cy="80" r="120" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="480" cy="80" r="70" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
                {/* Año decorativo */}
                <div
                  className="absolute top-6 right-8 font-display font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: "120px", color: "rgba(255,255,255,0.04)" }}
                >
                  25
                </div>
              </div>

              {/* Gradiente para legibilidad */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(0,10,25,0.95) 0%, rgba(0,10,25,0.5) 40%, transparent 70%)"
              }} />

              {/* Contenido */}
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                    style={{ background: "rgba(213,36,122,0.20)", color: "#e8559a" }}>
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-xs">{featured.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight font-display group-hover:text-brand-pink transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-white/55 leading-relaxed mb-8 max-w-lg text-[15px]">
                  {featured.excerpt}
                </p>

                <div
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)"
                  }}
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── LISTA DERECHA ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            {rest.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-1"
              >
                <Link
                  href={news.href}
                  className="group flex flex-col justify-between h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(66,114,187,0.12)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(66,114,187,0.25)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(66,114,187,0.20)", color: "#7fb3e8" }}
                    >
                      {news.category}
                    </span>
                    <span className="text-white/25 text-[11px] flex-shrink-0">{news.tag}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-snug flex-1">
                    {news.title}
                  </h3>

                  <div className="flex justify-end mt-3">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
