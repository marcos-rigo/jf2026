"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Tipo mantenido para que current-topics-server.tsx siga tipando correctamente
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

export function CurrentTopicsSection({ week }: { week: string }) {
  const bannerSrc = `/weekly-content/${week}/infografiaSemanal.svg`
  const basePath = `/ciudadania-digital`

  return (
    <section className="relative py-24 bg-linear-to-br from-slate-50 via-white to-slate-100 overflow-hidden">

      {/* ── DECORACIÓN DE FONDO ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      {/* ── PATTERN DE PUNTOS ───────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,50,100,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
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
            Temática{" "}
            <span className="bg-linear-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">
              Semanal
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Las últimas novedades a tu alcance
          </p>
        </motion.div>

        {/* ── BANNER SVG ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link href={basePath} className="group block w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <Image
              src={bannerSrc}
              alt="Infografía temática semanal"
              width={1200}
              height={630}
              unoptimized
              priority
              className="w-full h-auto"
            />
          </Link>
        </motion.div>

        {/* ── BOTÓN VER ───────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href={basePath}
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-brand-navy to-brand-blue text-white font-semibold rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Ver</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
