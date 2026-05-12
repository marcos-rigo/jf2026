"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"

const localNews = [
  {
    category: "Educación y Ciudadanía",
    date: "24 Mar, 2026",
    title: "Plan integral de Ciudadanía Digital en escuelas tucumanas",
    excerpt: "Lanzamiento de los nuevos talleres interactivos para estudiantes de nivel secundario, promoviendo el uso responsable de la tecnología.",
    href: "/novedades",
    image: "/img/noti/jf-sanMartin25.jfif",
  },
  {
    category: "Seguridad Inteligente",
    date: "18 Mar, 2026",
    title: "Nuevas herramientas de prevención para familias",
    excerpt: "Encuentro provincial con padres y docentes para articular estrategias frente a los desafíos del entorno digital y el ciberbullying.",
    href: "/novedades",
    image: "/img/noti/jf-legislatura.jfif",
  },
  {
    category: "Participación",
    date: "10 Mar, 2026",
    title: "Hackatón de Jóvenes por la Democracia",
    excerpt: "Más de 500 jóvenes se reunieron para co-crear soluciones tecnológicas aplicadas a problemáticas sociales de sus municipios.",
    href: "/novedades",
    image: "/img/noti/jf-clase.jfif",
  },
]

export function LocalNewsSection() {
  return (
    <section id="noticias-locales" className="relative bg-[#f0f5fb] overflow-hidden">

      {/* Fade from previous dark section */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#001e3c] to-transparent pointer-events-none z-10" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-brand-pink/6 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 lg:px-8 pt-20 lg:pt-28 pb-24 lg:pb-32">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-pink/10 text-brand-pink text-xs font-bold rounded-full mb-4 tracking-widest uppercase border border-brand-pink/20">
              <MapPin className="w-3.5 h-3.5" />
              Impacto en Tucumán
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-display leading-tight">
              Gestión en Territorio
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-navy/55 text-sm md:text-base max-w-xs md:text-right leading-relaxed"
          >
            Transformando la realidad de nuestra provincia a través de la acción directa y la innovación pública.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-14">
          {localNews.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative"
            >
              {/* Hover shadow glow */}
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-brand-blue/30 to-brand-pink/30 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />

              <Link
                href={news.href}
                className="relative flex flex-col h-full bg-white rounded-[1.25rem] overflow-hidden border border-brand-navy/10 group-hover:border-brand-blue/20 group-hover:bg-brand-navy transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-navy/25"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient: fades to white normally, to navy on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent group-hover:from-brand-navy group-hover:via-brand-navy/40 group-hover:to-transparent transition-all duration-400" />

                  {/* Arrow icon — appears on hover */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-navy/10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 group-hover:bg-brand-pink group-hover:border-brand-pink transition-all duration-400">
                    <ArrowUpRight className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-400" />
                  </div>
                </div>

                {/* Top accent bar */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-pink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">
                      {news.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-brand-navy/25 group-hover:bg-white/30 transition-colors duration-400" />
                    <span className="text-[11px] text-brand-navy/60 group-hover:text-white/60 font-medium transition-colors duration-400">
                      {news.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-white font-display leading-snug mb-3 transition-colors duration-400">
                    {news.title}
                  </h3>

                  <p className="text-brand-navy/70 group-hover:text-white/75 text-sm leading-relaxed flex-1 transition-colors duration-400">
                    {news.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-brand-pink transition-colors duration-400">
                    Leer más
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-400" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/novedades"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-pink transition-all duration-300 hover:shadow-xl hover:shadow-brand-pink/25 hover:-translate-y-0.5"
          >
            Explorar todas las acciones locales
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
