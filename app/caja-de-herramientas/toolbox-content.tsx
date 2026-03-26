"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Wrench, Download, FileText } from "lucide-react"

const tools = [
  {
    image: "/img/caja-herramientas/gana.png",
    title: "Gana Tucumán",
    description: "Innovación, Inteligencia Colectiva y Participación Ciudadana",
    href: "https://bit.ly/3F94X3N",
    type: "Plataforma",
  },
  {
    image: "/img/caja-herramientas/manual.png",
    title: "Manual de Prevención",
    description: "Prevención en Entornos Digitales",
    href: "http://bit.ly/manualpreventivo",
    type: "Documento",
  },
  {
    image: "/img/caja-herramientas/ite.png",
    title: "ITE — Innovar en tiempos de excepción",
    description: "Documento de innovación pública",
    href: "https://bit.ly/doc-ite",
    type: "Documento",
  },
  {
    image: "/img/caja-herramientas/seg-int.png",
    title: "Guía de Participación",
    description: "Metodologías para la participación ciudadana efectiva",
    href: "#",
    type: "Guía",
  },
  {
    image: "/img/caja-herramientas/ideay.png",
    title: "Toolkit de Innovación",
    description: "Herramientas prácticas para la innovación pública",
    href: "#",
    type: "Toolkit",
  },
  {
    image: "/img/caja-herramientas/4.png",
    title: "Marco de Ciudadanía Digital",
    description: "Principios y prácticas para la ciudadanía en entornos digitales",
    href: "#",
    type: "Framework",
  },
]

export function ToolboxContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 text-brand-blue text-sm font-medium rounded-full mb-6">
              <Wrench className="w-4 h-4" />
              Recursos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Caja de <span className="text-brand-pink">Herramientas</span>
            </h1>
            <p className="text-xl text-white/70">
              Recursos, documentos y guías para la innovación ciudadana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={`${tool.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-brand-light-blue rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-navy to-brand-dark overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                        <FileText className="w-3 h-3" />
                        {tool.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-brand-navy/70 mb-4">{tool.description}</p>
                    <span className="inline-flex items-center gap-2 text-brand-blue font-medium group-hover:text-brand-pink transition-colors">
                      <Download className="w-4 h-4" />
                      Acceder al recurso
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
