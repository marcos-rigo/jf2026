"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, LockKeyhole, Check } from "lucide-react"
import { groups } from "@/lib/tematicas-data"
import { AUDIENCIAS_ORDENADAS, AUDIENCIA_LABELS, type Audiencia } from "@/lib/audiencias"

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export function TematicasContent() {
  // Filtro de públicos: selección única. Ninguno activo = se listan todas las
  // temáticas, incluidas las que no tienen `audiencias` definido (contenido
  // ambiguo/sin clasificar — ver content-management/PROPUESTA-AUDIENCIAS.md).
  // Nota: una temática puede seguir teniendo varias audiencias en su dato
  // (`audiencias: Audiencia[]`) — lo que es de selección única es la elección
  // del usuario en el filtro, no la clasificación de contenido.
  const [selectedAudiencia, setSelectedAudiencia] = useState<Audiencia | null>(null)

  const selectAudiencia = (audiencia: Audiencia) => {
    setSelectedAudiencia((prev) => (prev === audiencia ? null : audiencia))
  }

  const filteredGroups = useMemo(() => {
    if (!selectedAudiencia) return groups
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((tema) => tema.audiencias?.includes(selectedAudiencia)),
      }))
      .filter((group) => group.items.length > 0)
  }, [selectedAudiencia])

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

          {/* Filtro de públicos */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Filtrar por público
            </p>
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filtrar temáticas por público">
              {AUDIENCIAS_ORDENADAS.map((audiencia) => {
                const active = selectedAudiencia === audiencia
                return (
                  <button
                    key={audiencia}
                    type="button"
                    role="tab"
                    onClick={() => selectAudiencia(audiencia)}
                    aria-selected={active}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors duration-200 ${
                      active
                        ? "bg-brand-blue border-brand-blue text-white"
                        : "bg-white border-slate-200 text-slate-500 hover:border-brand-blue/40 hover:text-brand-blue"
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5" />}
                    {AUDIENCIA_LABELS[audiencia]}
                  </button>
                )
              })}
              {selectedAudiencia && (
                <button
                  type="button"
                  onClick={() => setSelectedAudiencia(null)}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-brand-navy transition-colors duration-200"
                >
                  Limpiar filtro
                </button>
              )}
            </div>
          </div>

          {filteredGroups.length === 0 && (
            <p className="text-sm text-slate-400">
              Ninguna temática clasificada coincide con el público seleccionado todavía.
            </p>
          )}

          {filteredGroups.map((group, gi) => (
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
