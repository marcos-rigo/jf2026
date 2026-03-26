"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Tag } from "lucide-react"

const newsItems = [
  {
    category: "Internacional",
    tag: "2025",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    excerpt: "Reflexiones sobre juventudes, participación y transformación digital en el escenario global.",
    href: "/novedades",
    featured: true,
    image: "/img/noti/jf-clase.jfif",
    badge: "Destacado"
  },
  {
    category: "Gobierno Abierto",
    tag: "2025",
    title: "Webinar internacional con enfoque territorial desde Perú",
    href: "/novedades",
    image: "/img/noti/jf-legislatura.jfif",
  },
  {
    category: "Premio OIDP",
    tag: "2024",
    title: "Reconocimiento en la 24° Conferencia por Escuela de Ciudadanía",
    href: "/novedades",
    image: "/img/noti/jf-san-martin.jfif",
  },
  {
    category: "Ponencia",
    tag: "2024",
    title: "Universidad Internacional — Municipalidad de Rancagua",
    href: "/novedades",
    image: "/img/noti/jf-sanMartin25.jfif",
  },
  {
    category: "Ciberseguridad",
    tag: "2024",
    title: "Jornada provincial — 300 personas, un cambio de chip necesario",
    href: "/novedades",
    image: "/img/noti/ciberseguridadd.webp",
  },
]

export function NewsSection() {
  const [featured, ...rest] = newsItems
  const rightColumnNews = rest.slice(0, 2)

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #001228 0%, #002444 50%, #001e3c 100%)" }}>
      
      {/* ══ FONDO PREMIUM ═════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glows decorativos */}
        <div className="absolute top-1/3 right-0 w-[700px] h-[500px]" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(213,36,122,0.10) 0%, transparent 65%)"
        }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(66,114,187,0.12) 0%, transparent 65%)"
        }} />
        
        {/* Grid subtle */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-24">

        {/* ══ HEADER PREMIUM ═════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full" />
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Novedades</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight mb-4">
                Lo que tenés que saber
              </h2>
              <p className="text-lg text-white/70">
                Descubre las últimas noticias y eventos sobre innovación ciudadana
              </p>
            </div>
            
            <Link
              href="/novedades"
              className="group inline-flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              Ver todas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* ══ GRID NOTICIAS ═════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

          {/* ══ NOTICIA DESTACADA (IZQUIERDA) ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <Link
              href={featured.href}
              className="group relative flex flex-col h-full min-h-[420px] lg:min-h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
            >
              {/* IMAGEN DE FONDO */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* OVERLAY GRADIENTE PREMIUM */}
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-black/0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-transparent group-hover:from-brand-dark/0 transition-colors duration-500" />
              </div>

              {/* BADGE DESTACADO */}
              {featured.badge && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-6 left-6 z-20"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/90 backdrop-blur-md rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{featured.badge}</span>
                  </div>
                </motion.div>
              )}

              {/* CONTENIDO */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-10">
                
                {/* METADATA */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                    <Tag className="w-3.5 h-3.5 text-brand-pink" />
                    <span className="text-xs font-semibold text-white uppercase">{featured.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="text-xs font-semibold text-white">{featured.tag}</span>
                  </span>
                </div>

                {/* TÍTULO */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-display leading-tight group-hover:text-brand-pink transition-colors duration-300">
                  {featured.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 max-w-xl">
                  {featured.excerpt}
                </p>

                {/* BOTÓN CTA */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-brand-navy rounded-full font-semibold hover:bg-brand-pink hover:text-white transition-all duration-300 group-hover:gap-4 w-fit shadow-lg">
                  Leer ahora
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* EFECTO HOVER OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 via-white/0 to-brand-pink/0" />
              </div>
            </Link>
          </motion.div>

          {/* ══ COLUMNA DERECHA - NOTICIAS SECUNDARIAS ══════════════════════ */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {rightColumnNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={news.href}
                  className="group relative flex flex-col h-full min-h-[220px] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* IMAGEN */}
                  <div className="relative overflow-hidden h-full">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* OVERLAY BLANCA QUE DESAPARECE EN HOVER */}
                    <div className="absolute inset-0 bg-white/30 group-hover:bg-white/0 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* BORDER GRADIENT ON HOVER */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-brand-blue/0 via-brand-blue/30 to-brand-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* CONTENIDO OVERLAY */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    {/* CATEGORY BADGE */}
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/80 backdrop-blur-md rounded-full border border-white/20">
                        <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{news.category}</span>
                      </span>
                    </motion.div>

                    {/* TÍTULO */}
                    <h3 className="text-base lg:text-lg font-bold text-white mb-3 font-display leading-snug group-hover:text-brand-pink transition-colors duration-300 line-clamp-3">
                      {news.title}
                    </h3>

                    {/* CTA SUBTLE */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/60 font-medium">{news.tag}</span>
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-brand-pink/80 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* BOTÓN VER MÁS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/novedades"
                className="group flex items-center justify-center gap-2 w-full px-6 py-4 border-2 border-brand-navy rounded-2xl font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 hover:border-brand-navy/50"
              >
                Ver todas las noticias
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
