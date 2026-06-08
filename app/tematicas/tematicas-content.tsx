"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, Shield, Eye, Lock, AlertTriangle, Search, Baby, ShieldAlert, Brain, Users, LockKeyhole } from "lucide-react"

const tematicas = [
  {
    href: "/tematicas/cibercrianza",
    category: "Cibercrianza",
    title: "¿Sabés dónde interactúan tus hijos?",
    description:
      "Cibercrianza: datos reales, quiz interactivo y claves para acompañar a tus hijos en el entorno digital.",
    image: "/img/tematicas/cibercrianza_card.png",
    imageAlt: "Banner Cibercrianza",
    icon: Users,
    color: "#14B8A6",
    locked: false,
  },
  {
    href: "/ciudadania-digital",
    category: "Kit de Acción",
    title: "Ciudadanía Digital",
    description:
      "Protocolo de seguridad, netiqueta y detección de bulos. Un kit interactivo para ejercer tus derechos y responsabilidades en el mundo digital.",
    image: "/weekly-content/2026-W19/ciudDigpng.png",
    imageAlt: "Banner Ciudadanía Digital",
    icon: Shield,
    color: "#4272BB",
    locked: true,
  },
  {
    href: "/alfabetizacion-mediatica",
    category: "Información",
    title: "Alfabetización Mediática",
    description:
      "Herramientas y frameworks para consumir y compartir información con criterio. Aprendé a detectar desinformación y fake news.",
    image: "/weekly-content/2026-W20/amipng.png",
    imageAlt: "Banner Alfabetización Mediática",
    icon: Search,
    color: "#00D4AA",
    locked: true,
  },
  {
    href: "/huella-digital",
    category: "Privacidad",
    title: "Huella Digital",
    description:
      "Auditá tu exposición en internet y gestioná tu identidad digital. Descubrí qué datos tuyos son públicos y cómo recuperar el control.",
    image: "/weekly-content/2026-W21/huellapng.png",
    imageAlt: "Banner Huella Digital",
    icon: Eye,
    color: "#D5247A",
    locked: true,
  },
  {
    href: "/violencia-digital",
    category: "Derechos",
    title: "Violencia Digital hacia la Mujer",
    description:
      "Guía completa sobre ciberbullying, acoso en línea y violencia de género digital. Conocé tus derechos y cómo actuar si sos víctima.",
    image: "/weekly-content/2026-W22/violenciapng.png",
    imageAlt: "Banner Violencia Digital hacia la Mujer",
    icon: Lock,
    color: "#FF6B35",
    locked: true,
  },
  {
    href: "/estafas-digitales",
    category: "Seguridad",
    title: "Estafas Digitales",
    description:
      "Phishing, smishing y vishing: aprendé a detectarlos antes de que sea tarde. Protocolo paso a paso para actuar si sos víctima.",
    image: "/weekly-content/2026-W23/estafapng.png",
    imageAlt: "Banner Estafas Digitales",
    icon: AlertTriangle,
    color: "#FFD93D",
    locked: true,
  },
  {
    href: "/nnya-entorno-digital",
    category: "Infancia",
    title: "Niñas, Niños y Adolescentes en el Entorno Digital",
    description:
      "Cómo interpretan los niños, niñas y adolescentes el mundo digital. Guía práctica de mediación parental para acompañarlos de forma consciente.",
    image: "/weekly-content/2026-W24/card6.png",
    imageAlt: "Banner NNyA y el Entorno Digital",
    icon: Baby,
    color: "#7C3AED",
    locked: true,
  },
  {
    href: "/violencia-digital-infancias",
    category: "Protección",
    title: "Violencia Digital en Infancias",
    description:
      "Grooming, ciberbullying y exposición a riesgos: cómo identificar señales de alerta y actuar a tiempo para proteger a niñas, niños y adolescentes.",
    image: "/weekly-content/2026-W25/card7.png",
    imageAlt: "Banner Violencia Digital en Infancias",
    icon: ShieldAlert,
    color: "#EF4444",
    locked: true,
  },
  {
    href: "/hiperconectividad-digital",
    category: "Neurodesarrollo",
    title: "Hiperconectividad Digital",
    description:
      "Impacto de las pantallas y redes sociales en el cerebro adolescente. Evidencia científica sobre FOMO, cultura del like y salud mental en la era TRIC.",
    image: "/weekly-content/2026-W26/card8.png",
    imageAlt: "Banner Hiperconectividad Digital",
    icon: Brain,
    color: "#6366F1",
    locked: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export function TematicasContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a14]">
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color), inset 0 0 20px rgba(255,255,255,0.03); }
          50% { box-shadow: 0 0 40px var(--glow-color), inset 0 0 30px rgba(255,255,255,0.06); }
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(66, 114, 187, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(66, 114, 187, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        .glow-pulse { animation: pulse-glow 4s ease-in-out infinite; }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .card-glow { animation: border-glow 3s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 grid-bg" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-transparent to-brand-pink/10" />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] glow-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-pink/20 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />

      <div className="absolute top-32 right-20 w-32 h-32 border border-brand-blue/20 rounded-full float-anim" />
      <div className="absolute top-60 left-32 w-20 h-20 border border-brand-pink/20 rotate-45 float-anim" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-40 w-24 h-24 border border-white/10 rounded-full float-anim" style={{ animationDelay: '2s' }} />

      <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue" />
              </span>
              <span className="text-sm font-medium text-white/80 uppercase tracking-widest">
                Ciudadanía Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
            >
              <span className="block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Temáticas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              Explorá recursos, guías y herramientas sobre los temas más importantes
              de la ciudadanía en el mundo digital.
            </motion.p>

            <motion.a
              href="#tematicas-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 inline-flex items-center gap-3 text-white transition-colors"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold tracking-wide shadow-lg shadow-brand-blue/30">
                <ArrowDown className="w-4 h-4" />
                Desliza para ver más
              </span>
            </motion.a>

          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a14] to-transparent" />
      </section>

      <section id="tematicas-list" className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {tematicas.map((tema) => {
              const IconComponent = tema.icon
              const linkHref = tema.locked ? "/ciudadania-presente/modulos" : tema.href
              return (
                <motion.div key={tema.title} variants={cardVariants}>
                  <Link href={linkHref} scroll={true} className="group block h-full">
                    <div
                      className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] group"
                      style={{ '--glow-color': tema.color } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1a2d] to-[#0f1d35] rounded-2xl border border-white/5 group-hover:border-white/15 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl" />

                      <div className="relative h-full flex flex-col">
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src={tema.image}
                            alt={tema.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                            className={`object-cover transition-transform duration-700 group-hover:scale-110${tema.locked ? " brightness-50" : ""}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d35] via-[#0f1d35]/50 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                          {tema.locked && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                  <LockKeyhole className="w-6 h-6 text-white/70" />
                                </div>
                                <span className="text-xs font-medium text-white/60 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                  Próximamente
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div
                              className="px-3 py-1.5 rounded-full backdrop-blur-xl border flex items-center gap-1.5"
                              style={{ backgroundColor: `${tema.color}20`, borderColor: `${tema.color}40` }}
                            >
                              <IconComponent className="w-3.5 h-3.5" style={{ color: tema.color }} />
                              <span className="text-xs font-medium text-white/90">{tema.category}</span>
                            </div>
                          </div>

                          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            {tema.locked
                              ? <LockKeyhole className="w-5 h-5 text-white/40" />
                              : <IconComponent className="w-5 h-5 text-white/60" />
                            }
                          </div>
                        </div>

                        <div className="flex flex-col flex-1 p-6 md:p-7">
                          <div className="flex items-start justify-between mb-3">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                              {tema.title}
                            </h2>
                            <div className="flex-shrink-0 ml-2">
                              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-white/40 leading-relaxed flex-1 group-hover:text-white/50 transition-colors duration-300">
                            {tema.description}
                          </p>

                          <div className="mt-5 pt-5 border-t border-white/5">
                            {tema.locked ? (
                              <div className="flex items-center gap-2 text-sm font-medium text-white/30">
                                <LockKeyhole className="w-4 h-4" />
                                <span>Disponible próximamente</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: tema.color }}>
                                <span>Explorar tema</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: `0 0 60px ${tema.color}20, inset 0 0 60px ${tema.color}08` }}
                      />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-navy/30 to-brand-pink/20" />
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
              >
                ¿Listo para ser un ciudadano digital?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/50 max-w-xl mx-auto mb-8"
              >
                Cada tema es un paso hacia una participación más segura y consciente en el mundo digital.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/ciudadania-presente/modulos"
                  className="px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-3"
                >
                  <span>Comenzar ahora</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white/80 font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Conocer más
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-t from-[#050a14] to-transparent" />
    </main>
  )
}