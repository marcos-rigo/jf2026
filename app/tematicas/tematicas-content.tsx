"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, Shield, Eye, Lock, AlertTriangle, Search, Baby, ShieldAlert, Brain, Users, LockKeyhole, Scale, BookOpen } from "lucide-react"

const groups = [
  {
    label: "Ciudadanía Digital",
    accent: "#4272BB",
    items: [
      {
        href: "/ciudadania-digital",
        category: "Kit de Acción",
        title: "Ciudadanía Digital",
        description: "Protocolo de seguridad, netiqueta y detección de bulos. Un kit interactivo para ejercer tus derechos y responsabilidades en el mundo digital.",
        image: "/weekly-content/2026-W19/ciudDigpng.png",
        imageAlt: "Banner Ciudadanía Digital",
        icon: Shield,
        color: "#4272BB",
        locked: true,
      },
      {
        href: "/huella-digital",
        category: "Privacidad",
        title: "Huella Digital",
        description: "Auditá tu exposición en internet y gestioná tu identidad digital. Descubrí qué datos tuyos son públicos y cómo recuperar el control.",
        image: "/weekly-content/2026-W21/huellapng.png",
        imageAlt: "Banner Huella Digital",
        icon: Eye,
        color: "#D5247A",
        locked: true,
      },
      {
        href: "/hiperconectividad-digital",
        category: "Neurodesarrollo",
        title: "Hiperconectividad Digital",
        description: "Impacto de las pantallas y redes sociales en el cerebro adolescente. Evidencia científica sobre FOMO, cultura del like y salud mental en la era TRIC.",
        image: "/weekly-content/2026-W26/card8.png",
        imageAlt: "Banner Hiperconectividad Digital",
        icon: Brain,
        color: "#6366F1",
        locked: true,
      },
    ],
  },
  {
    label: "Alfabetización",
    accent: "#0EA5E9",
    items: [
      {
        href: "/alfabetizacion-digital",
        category: "Habilidades Digitales",
        title: "Alfabetización Digital",
        description: "Competencias esenciales para desenvolverse en el entorno digital: uso de dispositivos, navegación segura, gestión de aplicaciones y comunicación en línea.",
        image: "/weekly-content/2026-W20/amipng.png",
        imageAlt: "Banner Alfabetización Digital",
        icon: BookOpen,
        color: "#0EA5E9",
        locked: true,
      },
      {
        href: "/alfabetizacion-mediatica",
        category: "Información",
        title: "Alfabetización Mediática",
        description: "Herramientas y frameworks para consumir y compartir información con criterio. Aprendé a detectar desinformación y fake news.",
        image: "/weekly-content/2026-W20/amipng.png",
        imageAlt: "Banner Alfabetización Mediática",
        icon: Search,
        color: "#00D4AA",
        locked: true,
      },
      {
        href: "/tematicas/ia-etica-ciudadania",
        category: "IA & Ética",
        title: "IA, Ética y Ciudadanía Digital",
        description: "La integración de la Inteligencia Artificial en el tejido social: economía del conocimiento, humanidad ampliada, AI Act 2024 y justicia digital con perspectiva de género.",
        image: "/weekly-content/2026-W19/ciudDigpng.png",
        imageAlt: "Banner IA, Ética y Ciudadanía Digital",
        icon: Scale,
        color: "#00A99D",
        locked: false,
      },
    ],
  },
  {
    label: "Seguridad",
    accent: "#F59E0B",
    items: [
      {
        href: "/estafas-digitales",
        category: "Seguridad",
        title: "Estafas Digitales",
        description: "Phishing, smishing y vishing: aprendé a detectarlos antes de que sea tarde. Protocolo paso a paso para actuar si sos víctima.",
        image: "/weekly-content/2026-W23/estafapng.png",
        imageAlt: "Banner Estafas Digitales",
        icon: AlertTriangle,
        color: "#F59E0B",
        locked: true,
      },
    ],
  },
  {
    label: "Violencia Digital",
    accent: "#FF6B35",
    items: [
      {
        href: "/violencia-digital",
        category: "Derechos",
        title: "Violencia Digital hacia la Mujer",
        description: "Guía completa sobre ciberbullying, acoso en línea y violencia de género digital. Conocé tus derechos y cómo actuar si sos víctima.",
        image: "/weekly-content/2026-W22/violenciapng.png",
        imageAlt: "Banner Violencia Digital hacia la Mujer",
        icon: Lock,
        color: "#FF6B35",
        locked: true,
      },
      {
        href: "/violencia-digital-infancias",
        category: "Protección",
        title: "Violencia Digital en Infancias",
        description: "Grooming, ciberbullying y exposición a riesgos: cómo identificar señales de alerta y actuar a tiempo para proteger a niñas, niños y adolescentes.",
        image: "/weekly-content/2026-W25/card7.png",
        imageAlt: "Banner Violencia Digital en Infancias",
        icon: ShieldAlert,
        color: "#EF4444",
        locked: true,
      },
    ],
  },
  {
    label: "Infancia y Crianza",
    accent: "#14B8A6",
    items: [
      {
        href: "/tematicas/cibercrianza",
        category: "Cibercrianza",
        title: "¿Sabés dónde interactúan tus hijos?",
        description: "Cibercrianza: datos reales, quiz interactivo y claves para acompañar a tus hijos en el entorno digital.",
        image: "/img/tematicas/cibercrianza_card.png",
        imageAlt: "Banner Cibercrianza",
        icon: Users,
        color: "#14B8A6",
        locked: false,
      },
      {
        href: "/nnya-entorno-digital",
        category: "Infancia",
        title: "Niñas, Niños y Adolescentes en el Entorno Digital",
        description: "Cómo interpretan los niños, niñas y adolescentes el mundo digital. Guía práctica de mediación parental para acompañarlos de forma consciente.",
        image: "/weekly-content/2026-W24/card6.png",
        imageAlt: "Banner NNyA y el Entorno Digital",
        icon: Baby,
        color: "#7C3AED",
        locked: true,
      },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export function TematicasContent() {
  return (
    <main className="min-h-screen bg-[#F2F6FF]">

      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden pt-32 md:pt-44 pb-16 md:pb-28">
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-brand-blue/10 blur-[110px]" />
        <div className="absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full bg-brand-pink/8 blur-[90px]" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="flex items-center gap-14 xl:gap-24">

            {/* Left: text */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-7"
              >
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Ciudadanía Digital</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="text-6xl sm:text-7xl md:text-8xl xl:text-[6.5rem] font-display font-bold text-brand-navy mb-5 leading-none"
              >
                Temáticas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-xl text-slate-500 max-w-md leading-relaxed mb-9"
              >
                Recursos, guías y herramientas sobre los temas más importantes de la ciudadanía en el mundo digital.
              </motion.p>

              <motion.a
                href="#tematicas-list"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-brand-blue/25 hover:bg-brand-blue/90 transition-colors duration-200"
              >
                <ArrowDown className="w-4 h-4" />
                Ver temáticas
              </motion.a>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-slate-100"
              >
                {[
                  { n: "11", label: "Temáticas" },
                  { n: "5", label: "Grupos" },
                  { n: "2", label: "Disponibles" },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <p className="text-4xl font-display font-bold text-brand-navy">{n}</p>
                    <p className="text-sm text-slate-400 mt-1">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: floating card mosaic — desktop only */}
            <div className="hidden lg:block flex-shrink-0 w-[460px] xl:w-[540px]">
              <div className="relative h-[420px]">

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.35 }}
                  className="absolute top-0 left-0 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                  style={{ borderTop: "3px solid #14B8A6", rotate: "-3deg" }}
                >
                  <div className="relative h-[120px] w-full">
                    <Image src="/img/tematicas/cibercrianza_card.png" alt="Cibercrianza" fill className="object-cover" sizes="210px" />
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#14B8A6" }}>Cibercrianza</span>
                    <p className="text-xs font-bold text-brand-navy leading-tight mt-0.5">¿Sabés dónde interactúan tus hijos?</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.48 }}
                  className="absolute top-10 right-0 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                  style={{ borderTop: "3px solid #4272BB", rotate: "2.5deg" }}
                >
                  <div className="relative h-[120px] w-full">
                    <Image src="/weekly-content/2026-W19/ciudDigpng.png" alt="Ciudadanía Digital" fill className="object-cover" sizes="210px" />
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#4272BB" }}>Kit de Acción</span>
                    <p className="text-xs font-bold text-brand-navy leading-tight mt-0.5">Ciudadanía Digital</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.6 }}
                  className="absolute bottom-0 left-10 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                  style={{ borderTop: "3px solid #00D4AA", rotate: "2deg" }}
                >
                  <div className="relative h-[120px] w-full">
                    <Image src="/weekly-content/2026-W20/amipng.png" alt="Alfabetización Mediática" fill className="object-cover" sizes="210px" />
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#00D4AA" }}>Información</span>
                    <p className="text-xs font-bold text-brand-navy leading-tight mt-0.5">Alfabetización Mediática</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.72 }}
                  className="absolute bottom-8 right-4 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                  style={{ borderTop: "3px solid #FF6B35", rotate: "-2deg" }}
                >
                  <div className="relative h-[120px] w-full">
                    <Image src="/weekly-content/2026-W22/violenciapng.png" alt="Violencia Digital" fill className="object-cover" sizes="210px" />
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#FF6B35" }}>Derechos</span>
                    <p className="text-xs font-bold text-brand-navy leading-tight mt-0.5">Violencia Digital hacia la Mujer</p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>

          {/* Mobile — 3 cards flotando encimadas, solo mobile */}
          <div className="lg:hidden mt-10 relative h-[200px]">

            {/* Card izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="absolute left-0 top-8 z-10"
              style={{ rotate: -9 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
                className="w-[108px] rounded-xl overflow-hidden shadow-lg bg-white"
                style={{ borderTop: "2px solid #14B8A6" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src="/img/tematicas/cibercrianza_card.png" alt="Cibercrianza" fill className="object-cover" sizes="108px" />
                </div>
                <div className="px-2 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wide truncate block" style={{ color: "#14B8A6" }}>Cibercrianza</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Card central — al frente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
              style={{ rotate: 2 }}
            >
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.5, repeatType: "loop" }}
                className="w-[118px] rounded-xl overflow-hidden bg-white"
                style={{ borderTop: "2px solid #4272BB", boxShadow: "0 12px 32px rgba(66,114,187,0.25)" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src="/weekly-content/2026-W19/ciudDigpng.png" alt="Ciudadanía Digital" fill className="object-cover" sizes="118px" />
                </div>
                <div className="px-2 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wide truncate block" style={{ color: "#4272BB" }}>Ciudadanía</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Card derecha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.66 }}
              className="absolute right-0 top-6 z-10"
              style={{ rotate: 8 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1, repeatType: "loop" }}
                className="w-[108px] rounded-xl overflow-hidden shadow-lg bg-white"
                style={{ borderTop: "2px solid #00D4AA" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src="/weekly-content/2026-W20/amipng.png" alt="Alfabetización" fill className="object-cover" sizes="108px" />
                </div>
                <div className="px-2 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wide truncate block" style={{ color: "#00D4AA" }}>Alfabetización</span>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── Grid por grupos ── */}
      <section id="tematicas-list" className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 space-y-14">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: gi * 0.04 }}
            >
              {/* Group divider */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-1.5 h-7 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.accent }}
                />
                <h2 className="text-lg font-display font-bold text-brand-navy">{group.label}</h2>
                <div className="flex-1 h-px bg-slate-200" />
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${group.accent}18`, color: group.accent }}
                >
                  {group.items.length} {group.items.length === 1 ? "tema" : "temas"}
                </span>
              </div>

              {/* Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {group.items.map((tema) => {
                  const IconComponent = tema.icon
                  const linkHref = tema.locked ? "/ciudadania-presente/modulos" : tema.href
                  return (
                    <motion.div key={tema.title} variants={cardVariants}>
                      <Link href={linkHref} scroll={true} className="group block h-full">
                        <div
                          className="relative h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          style={{ borderTop: `3px solid ${tema.color}` }}
                        >
                          {/* Image */}
                          <div className="relative h-44 overflow-hidden bg-slate-100 flex-shrink-0">
                            <Image
                              src={tema.image}
                              alt={tema.imageAlt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              loading="lazy"
                              className={`object-cover transition-transform duration-500 group-hover:scale-105${tema.locked ? " grayscale opacity-50" : ""}`}
                            />
                            {/* Light gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            {tema.locked && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                  <div className="w-10 h-10 rounded-full bg-white/95 shadow flex items-center justify-center">
                                    <LockKeyhole className="w-4 h-4 text-slate-500" />
                                  </div>
                                  <span className="text-xs font-semibold text-white bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full">
                                    Próximamente
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Category badge */}
                            <div className="absolute top-3 left-3">
                              <div
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-sm"
                                style={{ backgroundColor: tema.color }}
                              >
                                <IconComponent className="w-3 h-3 text-white" />
                                <span className="text-xs font-semibold text-white">{tema.category}</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-base font-display font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-blue transition-colors duration-200">
                              {tema.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                              {tema.description}
                            </p>

                            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                              {tema.locked ? (
                                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                                  <LockKeyhole className="w-3.5 h-3.5" />
                                  Disponible próximamente
                                </span>
                              ) : (
                                <span
                                  className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                                  style={{ color: tema.color }}
                                >
                                  Explorar
                                  <ArrowRight className="w-4 h-4" />
                                </span>
                              )}
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${tema.color}15` }}
                              >
                                <IconComponent className="w-4 h-4" style={{ color: tema.color }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-brand-navy">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              ¿Listo para ser un ciudadano digital?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg">
              Cada tema es un paso hacia una participación más segura y consciente en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/ciudadania-presente/modulos"
                className="px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-lg shadow-brand-blue/30"
              >
                <span>Comenzar ahora</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white/80 font-medium border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                Conocer más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
