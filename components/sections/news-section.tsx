"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Tag, Calendar } from "lucide-react"

const newsItems = [
  {
    category: "Internacional",
    tag: "2025",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    excerpt: "Reflexiones sobre juventudes, participación y transformación digital en el escenario global.",
    href: "/novedades",
    featured: true,
    image: "/img/noti/jf-clase.jfif",
    badge: "Destacado",
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

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001228 0%, #002444 50%, #001e3c 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[700px] h-[500px]" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(213,36,122,0.10) 0%, transparent 65%)"
        }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(66,114,187,0.12) 0%, transparent 65%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-18"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full" />
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Novedades</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight mb-3">
                Lo que tenés que saber
              </h2>
              <p className="text-lg text-white/60">
                Últimas noticias y eventos sobre innovación ciudadana
              </p>
            </div>
            <Link
              href="/novedades"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold transition-all duration-300 whitespace-nowrap text-sm"
            >
              Ver todas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Grid: featured (2/3) + list (1/3) */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <Link
              href={featured.href}
              className="group relative flex flex-col h-full min-h-[440px] lg:min-h-[540px] rounded-2xl lg:rounded-3xl overflow-hidden"
            >
              {/* Image — zoom only, no brightness change */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Permanent strong bottom gradient — always guarantees legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
                {/* Left-side darkening for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Badge */}
              {featured.badge && (
                <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/90 backdrop-blur-md rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{featured.badge}</span>
                </div>
              )}

              {/* Pink left accent bar — slides in on hover */}
              <div className="absolute left-0 top-1/4 bottom-0 w-1 bg-gradient-to-b from-brand-pink to-brand-blue rounded-r-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-20" />

              {/* Content — sits on the dark gradient zone */}
              <div className="relative z-10 flex flex-col justify-end h-full p-7 lg:p-10">
                {/* Meta badges */}
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                    <Tag className="w-3.5 h-3.5 text-brand-pink" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">{featured.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="text-xs font-semibold text-white">{featured.tag}</span>
                  </span>
                </div>

                {/* Title — always white, never changes color on hover */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 font-display leading-tight drop-shadow-lg">
                  {featured.title}
                </h3>

                {/* Excerpt — always white */}
                <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-7 max-w-xl drop-shadow-md">
                  {featured.excerpt}
                </p>

                {/* CTA button — the only element that changes on hover */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-brand-navy rounded-full font-semibold group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 w-fit shadow-xl group-hover:shadow-brand-pink/40">
                  Leer ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Border ring on hover */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl ring-0 group-hover:ring-2 ring-brand-pink/50 transition-all duration-500 pointer-events-none" />
            </Link>
          </motion.div>

          {/* Right column — all 4 remaining items */}
          <div className="flex flex-col gap-3">
            {rest.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={news.href}
                  className="group flex gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:bg-white hover:border-white hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={news.image!}
                      alt={news.title}
                      fill
                      sizes="72px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-brand-pink group-hover:text-brand-pink uppercase tracking-widest mb-1 transition-colors duration-300">
                      {news.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-blue leading-snug line-clamp-2 transition-colors duration-300 font-display">
                      {news.title}
                    </h3>
                    <span className="text-[11px] text-white/35 group-hover:text-brand-navy/50 mt-1.5 font-medium transition-colors duration-300">{news.tag}</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center flex-shrink-0 self-center">
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Ver todas button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-1"
            >
              <Link
                href="/novedades"
                className="group flex items-center justify-center gap-2 w-full px-6 py-4 border-2 border-white/20 rounded-xl font-semibold text-white hover:bg-brand-pink hover:border-brand-pink transition-all duration-300 text-sm"
              >
                Ver todas las noticias
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
