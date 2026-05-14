"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Award, GraduationCap, Globe, Briefcase, ArrowRight } from "lucide-react"

// ── Data ──────────────────────────────────────────────────────────────────────

const BADGES = [
  "Innovación Pública",
  "Ciudadanía Digital",
  "Liderazgo Estratégico",
  "Formación Internacional",
]

const PREMIOS = [
  {
    year: "2025",
    title: "Premio Argentina a la Innovación en Participación Ciudadana",
    description: "Transformación Digital y Gobierno Abierto, 24° Conferencia OIDP (Córdoba)",
  },
  {
    year: "2024",
    title: "Reconocimiento ONU – CEPAL – ILPES",
    description: "Escuela de Ciudadanía, Buenas Prácticas en Estado Abierto",
  },
  {
    year: "2023",
    title: '"Vecinos y Vecinas en Diálogo"',
    description: "Jefatura de Gabinete de la Nación",
  },
  {
    year: "2022",
    title: "Premio Eduardo Valenti – BID",
    description: '"Seguridad Inteligente", Programa Federal de Gobierno Abierto',
  },
]

const TRAYECTORIA = [
  {
    rol: "Secretario de Estado de Participación Ciudadana",
    org: "Ministerio de Seguridad, Tucumán",
    periodo: "Oct 2017 – Actualidad",
    descripcion:
      "Conducción de políticas de seguridad democrática, participación ciudadana y ciudadanía digital con impacto internacional. Previamente Subsecretario (2014–2017).",
  },
  {
    rol: "Coordinador de Formación Ciudadana",
    org: "RAGA Internacional",
    periodo: "Nov 2023 – Actualidad",
    descripcion:
      "Articulación de programas de formación ciudadana continua en Iberoamérica.",
  },
  {
    rol: "Docente · Ciudadanía Digital",
    org: "Universidad Nacional de Tucumán",
    periodo: "Actualidad",
    descripcion:
      "Módulo de Ciudadanía Digital en la Diplomatura en Formación para el Cuidado y Bienestar Estudiantil.",
  },
]

const FORMACION = [
  {
    titulo: "Especialista en Justicia Constitucional y DDHH",
    institucion: "Universidad de Bolonia, Italia",
    year: "2025",
  },
  {
    titulo: "Diplomado en Gobernabilidad e Innovación Pública",
    institucion: "CAF & UCC",
    year: "2022",
  },
  {
    titulo: "Especialización en Derecho Procesal",
    institucion: "UNT · Tesis: Evidencia Digital (Nota: 10)",
    year: "2017–2022",
  },
  {
    titulo: "Especialización en Gestión Estratégica en Seguridad",
    institucion: "ICCE, Ministerio de Seguridad de la Nación",
    year: "2018",
  },
  {
    titulo: "Abogado",
    institucion: "UNSTA",
    year: "2003",
  },
]

const PRESENCIA = [
  { flag: "🇨🇱", pais: "Chile",     year: "2025", evento: "Universidad Internacional del Municipio de Rancagua" },
  { flag: "🇨🇷", pais: "Costa Rica",year: "2024", evento: "1er Congreso Internacional de Estado Abierto" },
  { flag: "🇲🇽", pais: "México",    year: "2023", evento: "Smart City Expo LATAM Congress" },
  { flag: "🇨🇱", pais: "Chile",     year: "2023", evento: "XIII Congreso Latinoamericano de Investigación para la Paz" },
  { flag: "🇭🇳", pais: "Honduras",  year: "2021", evento: "XII Congreso Latinoamericano de Investigación para la Paz" },
  { flag: "🇦🇷", pais: "Argentina", year: "2025", evento: "Congreso Educativo: IA en Educación — UTN Tucumán" },
  { flag: "🇦🇷", pais: "Argentina", year: "2023", evento: "Congreso Internacional de Participación Ciudadana" },
  { flag: "🇦🇷", pais: "Argentina", year: "2022", evento: "Jornadas de Estado Abierto CLAD – Red RAGA" },
]

const TRAYECTORIA_ACCENTS = [
  { bar: "from-brand-blue to-cyan-400",   text: "text-cyan-400"   },
  { bar: "from-brand-pink to-rose-400",   text: "text-brand-pink" },
  { bar: "from-purple-500 to-violet-400", text: "text-purple-400" },
]

// Shared animation props
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true } as { once: boolean },
  transition: { duration: 0.5 },
}

// ── Component ─────────────────────────────────────────────────────────────────

export function AboutContent() {
  return (
    <>
      {/* ── 1. HERO PERSONAL ───────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-brand-dark overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/15 rounded-full blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6 border border-brand-pink/20">
                Sobre mí
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-4 leading-tight">
                Dr. José{" "}
                <span className="text-brand-pink">Farhat</span>
              </h1>
              <p className="text-brand-blue text-lg font-semibold mb-5 tracking-wide">
                Abogado · Secretario de Estado · Coordinador RAGA Internacional · Innovador Público
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Más de 15 años liderando políticas públicas en ciudadanía digital, participación
                ciudadana y seguridad democrática en Argentina y América Latina.
              </p>
              <div className="flex flex-wrap gap-3">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-white/[0.07] border border-white/15 text-white/80 text-sm font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-brand-navy/50">
                <Image
                  src="/img/perfil-jf.png"
                  alt="José Farhat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. RECONOCIMIENTOS Y PREMIOS ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-dark to-brand-navy overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/15 text-brand-pink text-sm font-medium rounded-full mb-4 border border-brand-pink/20">
              <Trophy className="w-4 h-4" />
              Reconocimientos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Premios e Impacto
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {PREMIOS.map((premio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-brand-pink/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-pink to-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-blue flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-pink/80 tracking-widest uppercase mb-1 block">
                      {premio.year}
                    </span>
                    <h3 className="text-white font-semibold text-base mb-1 leading-snug">
                      {premio.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{premio.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TRAYECTORIA PROFESIONAL ─────────────────────────────────────── */}
      <section className="py-16 md:py-28 bg-brand-navy overflow-hidden relative">
        {/* Central ambient glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-blue/[0.07] rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/15 text-brand-blue text-sm font-medium rounded-full mb-4 border border-brand-blue/20">
              <Briefcase className="w-4 h-4" />
              Carrera
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Trayectoria Profesional
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center vertical line — desktop only */}
            <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-pink/30 to-brand-blue/40 hidden lg:block" />

            <div className="flex flex-col gap-10 lg:gap-16">
              {TRAYECTORIA.map((item, i) => {
                const isLeft = i % 2 === 0
                const accent = TRAYECTORIA_ACCENTS[i % TRAYECTORIA_ACCENTS.length]
                return (
                  <div key={i} className="relative">

                    {/* ── Desktop: alternating layout ── */}
                    <div className="hidden lg:grid grid-cols-[1fr_80px_1fr] items-center">

                      {/* Left slot */}
                      <div className="pr-10">
                        {isLeft && (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
                          >
                            <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${accent.bar} opacity-[0.08] rounded-full blur-2xl`} />
                            <span className={`text-xs font-bold tracking-widest uppercase ${accent.text} block mb-3`}>{item.periodo}</span>
                            <h3 className="text-white font-bold text-lg mb-1 font-display text-right">{item.rol}</h3>
                            <p className={`text-sm font-semibold mb-3 text-right ${accent.text} opacity-80`}>{item.org}</p>
                            <p className="text-white/50 text-sm leading-relaxed text-right">{item.descripcion}</p>
                          </motion.div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="flex items-center justify-center relative z-10">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${accent.bar} ring-4 ring-white/10 shadow-lg`} />
                      </div>

                      {/* Right slot */}
                      <div className="pl-10">
                        {!isLeft && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
                          >
                            <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${accent.bar} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                            <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${accent.bar} opacity-[0.08] rounded-full blur-2xl`} />
                            <span className={`text-xs font-bold tracking-widest uppercase ${accent.text} block mb-3`}>{item.periodo}</span>
                            <h3 className="text-white font-bold text-lg mb-1 font-display">{item.rol}</h3>
                            <p className={`text-sm font-semibold mb-3 ${accent.text} opacity-80`}>{item.org}</p>
                            <p className="text-white/50 text-sm leading-relaxed">{item.descripcion}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* ── Mobile: stacked with left dot ── */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="lg:hidden flex gap-4"
                    >
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${accent.bar} ring-4 ring-white/10 mt-5 flex-shrink-0`} />
                        {i < TRAYECTORIA.length - 1 && (
                          <div className="flex-1 w-px bg-white/10 mt-2" />
                        )}
                      </div>
                      <div className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex-1 overflow-hidden">
                        <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${accent.bar}`} />
                        <span className={`text-xs font-bold tracking-widest uppercase ${accent.text} block mb-2`}>{item.periodo}</span>
                        <h3 className="text-white font-bold text-base mb-1 font-display">{item.rol}</h3>
                        <p className={`text-sm font-semibold mb-2 ${accent.text} opacity-80`}>{item.org}</p>
                        <p className="text-white/50 text-sm leading-relaxed">{item.descripcion}</p>
                      </div>
                    </motion.div>

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FORMACIÓN ACADÉMICA ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-brand-light-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/10 text-brand-navy text-sm font-medium rounded-full mb-4 border border-brand-navy/15">
              <GraduationCap className="w-4 h-4" />
              Formación
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy">
              Formación Académica
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {FORMACION.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-brand-blue/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-xs font-bold text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-brand-navy font-semibold text-base mb-2 leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-brand-navy/55 text-sm">{item.institucion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRESENCIA INTERNACIONAL ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4 border border-brand-blue/15">
              <Globe className="w-4 h-4" />
              Internacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy">
              Presencia Internacional
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {PRESENCIA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="border border-brand-blue/15 rounded-2xl p-5 hover:border-brand-blue/45 hover:bg-brand-light-blue transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{item.flag}</span>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-brand-navy text-sm">{item.pais}</span>
                  <span className="text-xs text-brand-blue font-semibold">{item.year}</span>
                </div>
                <p className="text-brand-navy/55 text-xs leading-relaxed">{item.evento}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINAL ───────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-brand-navy to-brand-dark overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              ¿Querés conocer más o conectar con José?
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Disponible para colaboraciones, consultas y proyectos de innovación pública.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-pink text-white font-semibold rounded-full hover:bg-brand-pink/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-pink/25"
              >
                Contacto
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#herramientas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Ver herramientas y programas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
