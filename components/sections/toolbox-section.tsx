"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Wrench } from "lucide-react"

const tools = [
  {
    image: "/img/caja-herramientas/gana.png",
    title: "Gana Tucumán",
    description: "Innovación, Inteligencia Colectiva y Participación Ciudadana",
    href: "https://bit.ly/3F94X3N",
    external: true,
  },
  {
    image: "/img/caja-herramientas/manual.png",
    title: "Manual de Prevención",
    description: "Prevención en Entornos Digitales",
    href: "http://bit.ly/manualpreventivo",
    external: true,
  },
  {
    image: "/img/caja-herramientas/ite.png",
    title: "ITE — Innovar en tiempos de excepción",
    description: "Documento de innovación pública",
    href: "https://bit.ly/doc-ite",
    external: true,
  },
]

export function ToolboxSection() {
  return (
    <section id="herramientas" className="py-24 bg-brand-light-blue">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4">
            <Wrench className="w-4 h-4" />
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Caja de Herramientas
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            Recursos y documentos para la innovación ciudadana
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={tool.href}
                target={tool.external ? "_blank" : undefined}
                rel={tool.external ? "noopener noreferrer" : undefined}
                className="group block bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-navy to-brand-dark overflow-hidden">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </span>
                  </div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-brand-navy/70 mb-4">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-blue font-medium group-hover:text-brand-pink transition-colors">
                    Acceder
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
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
          className="text-center mt-12"
        >
          <Link
            href="/caja-de-herramientas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-navy hover:shadow-lg transition-all duration-300 group"
          >
            Ver más Herramientas
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
