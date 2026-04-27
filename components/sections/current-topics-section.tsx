"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

export interface Topic {
  id: string
  title: string
  description: string
  date: string
  sourceName: string
  category: string
  url: string
  imageUrl: string | null
  gradient: string
}

export function CurrentTopicsSection({ topics }: { topics: Topic[] }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-linear-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      
      {/* ── DECORACIÓN DE FONDO ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      {/* ── PATTERN DE PUNTOS ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,50,100,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* ── HEADER ──────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink" />
            </span>
            <span className="text-sm font-semibold text-brand-pink uppercase tracking-wide">
              Actualidad
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-6">
            Temas <span className="bg-linear-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">Actuales</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Las últimas novedades en participación ciudadana y democracia digital desde la Secretaría de Estado de Tucumán
          </p>
        </motion.div>

        {/* ── GRID DE TARJETAS ────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, idx) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  
                  {/* Imagen con fallback a gradiente */}
                  <div className={`relative h-48 bg-linear-to-br ${topic.gradient} overflow-hidden`}>
                    {topic.imageUrl ? (
                      <img
                        src={topic.imageUrl}
                        alt={topic.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Si la imagen falla, dejaremos el gradiente visible
                          (e.target as HTMLImageElement).style.display = "none"
                        }}
                      />
                    ) : null}
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "30px 30px"
                      }}
                    />
                    
                    {/* Hover effect */}
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredCard === idx ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-black/10"
                    />

                    {/* Categoría badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                        {topic.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{topic.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{topic.sourceName}</span>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                      {topic.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {topic.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Borde animado en hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === idx ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${topic.gradient} origin-left`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── BOTÓN VER TODAS ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/temas"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-brand-navy to-brand-blue text-white font-semibold rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Ver todas las novedades</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
