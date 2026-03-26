"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MapPin, Plus } from "lucide-react"

// ── DATOS: NOTICIAS LOCALES ──────────────────────────────────────
const localNews = [
  {
    category: "Educación y Ciudadanía",
    date: "24 Mar, 2026",
    title: "Plan integral de Ciudadanía Digital en escuelas tucumanas",
    excerpt: "Lanzamiento de los nuevos talleres interactivos para estudiantes de nivel secundario, promoviendo el uso responsable de la tecnología.",
    href: "/novedades",
    image: "/img/noti/jf-sanMartin25.jfif", // Usa tus imágenes reales
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
    // Toda la sección ahora es del color Rosa Aguado.
    <section id="noticias-locales" className="relative bg-[#fff5f8] overflow-hidden">
      
      {/* =====================================================================
          LÍNEA DIVISORIA DIAGONAL (Color exacto del final de NewsSection: #001e3c)
      ====================================================================== */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none leading-none">
        <svg 
          className="w-full h-16 md:h-24 lg:h-32 block" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 1440,0 0,120" fill="#001e3c" />
        </svg>
      </div>

      {/* =====================================================================
          2. FONDOS Y TEXTURAS (Por debajo del contenido)
      ====================================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px]" />
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, #003257 49px, #003257 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #003257 49px, #003257 50px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* =====================================================================
          3. CONTENIDO (Z-20 para estar encima de las texturas)
      ====================================================================== */}
      <div className="container relative z-20 mx-auto px-4 lg:px-8 pt-32 md:pt-40 lg:pt-48 pb-24 lg:pb-32">
        
        {/* ── ENCABEZADO ─────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-pink/10 text-brand-pink text-xs font-bold rounded-full mb-4 tracking-widest uppercase border border-brand-pink/20">
              <MapPin className="w-3.5 h-3.5" />
              Impacto en Tucumán
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy font-display leading-tight">
              Gestión en Territorio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-navy/60 text-sm md:text-base max-w-sm md:text-right font-medium">
              Transformando la realidad de nuestra provincia a través de la acción directa y la innovación pública.
            </p>
          </motion.div>
        </div>

        {/* ── GRID DE TARJETAS ────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {localNews.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link 
                href={news.href}
                className="group relative block w-full aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-[#eee0e4]"
                style={{ boxShadow: "0 15px 40px rgba(0,50,87,0.08)" }}
              >
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff5f8]/90 via-[#fff5f8]/50 to-transparent group-hover:from-[#000d1a] group-hover:via-[#000d1a]/70 group-hover:to-transparent transition-all duration-500" />
                
                <div className="absolute inset-0 border-2 border-[#eee0e4] rounded-[2rem] group-hover:border-brand-pink/50 transition-colors duration-500 z-20 pointer-events-none" />

                <div className="absolute top-6 right-6 w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center z-20 border border-[#eee0e4] group-hover:bg-brand-pink group-hover:border-brand-pink transition-all duration-300 transform translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-5 h-5 text-brand-pink group-hover:text-white" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-pink font-bold text-xs tracking-wider uppercase">
                        {news.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-brand-navy/30" />
                      <span className="text-brand-navy/60 text-xs font-semibold">
                        {news.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-brand-navy leading-tight mb-4 group-hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-brand-pink transition-colors">
                      {news.title}
                    </h3>
                    
                    <div className="overflow-hidden">
                      <p className="text-brand-navy/80 text-sm leading-relaxed group-hover:text-white/80 transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── BOTÓN GENERAL DE VER MÁS ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/novedades"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#eee0e4] rounded-full font-semibold text-brand-navy overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#eee0e4]/80 hover:shadow-[0_15px_30px_rgba(0,50,87,0.06)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff5f8] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Plus className="w-5 h-5 text-brand-pink group-hover:rotate-90 transition-transform duration-500" />
            <span className="relative z-10 tracking-tight">Explorar todas las acciones locales</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}