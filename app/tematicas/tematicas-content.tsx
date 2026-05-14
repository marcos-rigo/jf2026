"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const tematicas = [
  {
    href: "/ciudadania-digital",
    category: "Kit de Acción",
    title: "Ciudadanía Digital",
    description:
      "Protocolo de seguridad, netiqueta y detección de bulos. Un kit interactivo para ejercer tus derechos y responsabilidades en el mundo digital.",
    image: "/weekly-content/2026-W19/ciudDigpng.png",
    imageAlt: "Banner Ciudadanía Digital",
  },
  {
    href: "/alfabetizacion-mediatica",
    category: "Información",
    title: "Alfabetización Mediática",
    description:
      "Herramientas y frameworks para consumir y compartir información con criterio. Aprendé a detectar desinformación y fake news.",
    image: "/weekly-content/2026-W20/amipng.png",
    imageAlt: "Banner Alfabetización Mediática",
  },
  {
    href: "/huella-digital",
    category: "Privacidad",
    title: "Huella Digital",
    description:
      "Auditá tu exposición en internet y gestioná tu identidad digital. Descubrí qué datos tuyos son públicos y cómo recuperar el control.",
    image: "/weekly-content/2026-W21/huellapng.png",
    imageAlt: "Banner Huella Digital",
  },
  {
    href: "/violencia-digital",
    category: "Derechos",
    title: "Violencia Digital",
    description:
      "Guía completa sobre ciberbullying, acoso en línea y violencia de género digital. Conocé tus derechos y cómo actuar si sos víctima.",
    image: "/weekly-content/2026-W22/violenciapng.png",
    imageAlt: "Banner Violencia Digital",
  },
  {
    href: "/estafas-digitales",
    category: "Seguridad",
    title: "Estafas Digitales",
    description:
      "Phishing, smishing y vishing: aprendé a detectarlos antes de que sea tarde. Protocolo paso a paso para actuar si sos víctima.",
    image: "/weekly-content/2026-W23/estafapng.png",
    imageAlt: "Banner Estafas Digitales",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function TematicasContent() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden min-h-[360px] sm:min-h-[480px] flex items-center">
        <Image
          src="/img/tematicas/portada.png"
          alt="Portada Temáticas"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-blue/60 to-purple-900/70" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                Ciudadanía Digital
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Temáticas
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Recursos, guías y herramientas sobre los temas más importantes
              de la ciudadanía en el mundo digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tematicas.map((tema) => (
              <motion.div key={tema.href} variants={cardVariants}>
                <Link href={tema.href} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
                    {/* Card image */}
                    <div className="relative h-52 overflow-hidden bg-brand-light-blue">
                      <Image
                        src={tema.image}
                        alt={tema.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="eager"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                          {tema.category}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">
                        {tema.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {tema.description}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Explorar</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
