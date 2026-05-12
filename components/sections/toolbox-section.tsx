"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const tools = [
  {
    image: "/img/caja-herramientas/gana.png",
    title: "Gana Tucumán",
    description: "Innovación, Inteligencia Colectiva y Participación Ciudadana",
    tag: "Innovación",
    href: "https://bit.ly/3F94X3N",
    external: true,
    accent: "from-brand-blue to-cyan-400",
  },
  {
    image: "/img/caja-herramientas/manual.png",
    title: "Manual de Prevención",
    description: "Prevención en Entornos Digitales",
    tag: "Seguridad",
    href: "http://bit.ly/manualpreventivo",
    external: true,
    accent: "from-brand-pink to-rose-400",
  },
  {
    image: "/img/caja-herramientas/ite.png",
    title: "ITE — Innovar en tiempos de excepción",
    description: "Documento de innovación pública",
    tag: "Documento",
    href: "https://bit.ly/doc-ite",
    external: true,
    accent: "from-purple-500 to-violet-400",
  },
]

export function ToolboxSection() {
  return (
    <section id="herramientas" className="relative py-24 bg-brand-light-blue overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-brand-blue/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full" />
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Recursos</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy font-display leading-tight mb-3">
                Caja de Herramientas
              </h2>
              <p className="text-lg text-brand-navy/60">
                Recursos y documentos para la innovación ciudadana
              </p>
            </div>
            <Link
              href="/caja-de-herramientas"
              className="group inline-flex items-center gap-2 text-brand-blue hover:text-brand-pink font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              Ver todos los recursos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className={`absolute -inset-px rounded-[1.25rem] bg-gradient-to-br ${tool.accent} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500`} />

              <Link
                href={tool.href}
                target={tool.external ? "_blank" : undefined}
                rel={tool.external ? "noopener noreferrer" : undefined}
                className="relative flex flex-col h-full bg-brand-navy rounded-[1.25rem] overflow-hidden border border-white/5 group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />

                  {/* Decorative number */}
                  <span className="absolute top-3 left-5 text-[5rem] font-black leading-none text-white/[0.06] font-display tabular-nums select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Tag pill */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-full bg-gradient-to-r ${tool.accent}`}>
                      {tool.tag}
                    </span>
                  </div>

                  {/* External link icon */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className={`h-[2px] w-8 rounded-full bg-gradient-to-r ${tool.accent} mb-4 group-hover:w-16 transition-all duration-500`} />
                  <h3 className="text-lg font-bold text-white mb-2 font-display leading-snug group-hover:text-brand-pink transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-brand-blue group-hover:text-brand-pink transition-colors duration-300">
                    Acceder
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
