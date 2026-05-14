"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Award, GraduationCap, Globe, Briefcase, ArrowRight, Users, BookOpen } from "lucide-react"

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
  { code: "cl", pais: "Chile",      year: "2025", evento: "Universidad Internacional del Municipio de Rancagua" },
  { code: "cr", pais: "Costa Rica", year: "2024", evento: "1er Congreso Internacional de Estado Abierto" },
  { code: "mx", pais: "México",     year: "2023", evento: "Smart City Expo LATAM Congress" },
  { code: "cl", pais: "Chile",      year: "2023", evento: "XIII Congreso Latinoamericano de Investigación para la Paz" },
  { code: "hn", pais: "Honduras",   year: "2021", evento: "XII Congreso Latinoamericano de Investigación para la Paz" },
  { code: "ar", pais: "Argentina",  year: "2025", evento: "Congreso Educativo: IA en Educación — UTN Tucumán" },
  { code: "ar", pais: "Argentina",  year: "2023", evento: "Congreso Internacional de Participación Ciudadana" },
  { code: "ar", pais: "Argentina",  year: "2022", evento: "Jornadas de Estado Abierto CLAD – Red RAGA" },
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

      {/* ── 1b. STATS ──────────────────────────────────────────────────────── */}
      <section className="relative py-12 bg-brand-dark overflow-hidden">
        {/* Separator line top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[200px] bg-brand-blue/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Briefcase, label: "Años de experiencia", value: "15+", color: "text-cyan-400",   bg: "bg-cyan-400/10",   border: "border-cyan-400/20"   },
              { icon: Users,     label: "Proyectos ciudadanos", value: "50+", color: "text-brand-pink", bg: "bg-brand-pink/10", border: "border-brand-pink/20" },
              { icon: Award,     label: "Reconocimientos",      value: "10+", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20" },
              { icon: BookOpen,  label: "Publicaciones",        value: "10+", color: "text-amber-400",  bg: "bg-amber-400/10",  border: "border-amber-400/20"  },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl ${stat.bg} border ${stat.border} hover:scale-[1.03] transition-transform duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className={`text-3xl sm:text-4xl font-black ${stat.color} mb-1 leading-none`}>{stat.value}</p>
                <p className="text-white/60 text-xs font-medium leading-tight mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separator line bottom */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
      <section className="relative py-16 md:py-24 bg-brand-light-blue overflow-hidden">
        {/* Dot grid tech pattern */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #003257 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        {/* Ambient glow top-right */}
        <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-brand-pink/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full mb-5 border border-brand-blue/25 tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              Trayectoria Académica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy mb-3">
              Formación{" "}
              <span className="relative inline-block">
                Académica
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue" />
              </span>
            </h2>
            <p className="text-brand-navy/50 text-sm mt-4 max-w-md mx-auto">
              Especialización continua en derecho, políticas públicas e innovación gubernamental
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {FORMACION.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 border border-brand-navy/8 shadow-[0_2px_16px_rgba(0,50,87,0.07)] hover:shadow-[0_8px_32px_rgba(66,114,187,0.18)] hover:-translate-y-1 transition-all duration-350 overflow-hidden"
              >
                {/* Top gradient accent bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Always-visible subtle top line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue/30 to-brand-blue/10 group-hover:opacity-0 transition-opacity duration-400" />

                {/* Ghost number */}
                <span className="absolute -right-2 -bottom-3 text-7xl font-black text-brand-navy/[0.04] select-none leading-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Header row */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:border-brand-blue/40 transition-colors duration-300">
                    <GraduationCap className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black text-brand-pink/70 tracking-widest uppercase">
                      {item.year}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-brand-navy font-bold text-[15px] mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                    {item.titulo}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-[1px] bg-brand-blue/40 flex-shrink-0" />
                    <p className="text-brand-navy/50 text-xs font-medium">{item.institucion}</p>
                  </div>
                </div>

                {/* Bottom glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/0 to-brand-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRESENCIA INTERNACIONAL ─────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 bg-[#001e3c] overflow-hidden">
        {/* Subtle line grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(66,114,187,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(66,114,187,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[220px] bg-brand-pink/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Header */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 text-cyan-300 text-xs font-bold rounded-full mb-5 border border-cyan-400/35 tracking-widest uppercase">
              <Globe className="w-3.5 h-3.5" />
              Impacto Global
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
              Presencia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                Internacional
              </span>
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Congresos, conferencias y misiones académicas en América Latina y Europa
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { value: "8", label: "Eventos",     color: "text-cyan-300",    bg: "bg-cyan-400/15",   border: "border-cyan-400/30"   },
              { value: "5", label: "Países",       color: "text-pink-300",    bg: "bg-pink-400/15",   border: "border-pink-400/30"   },
              { value: "3", label: "Continentes",  color: "text-violet-300",  bg: "bg-violet-400/15", border: "border-violet-400/30" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl ${stat.bg} border ${stat.border}`}
              >
                <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
                <div className="w-px h-5 bg-white/20" />
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {PRESENCIA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative bg-white/[0.08] border border-white/20 rounded-2xl p-5 hover:bg-white/[0.14] hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-300 to-brand-pink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 rounded-t-2xl" />

                {/* Flag image */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-8 rounded-md overflow-hidden border border-white/20 shadow-md flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://flagcdn.com/w80/${item.code}.png`}
                      alt={item.pais}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Country */}
                <p className="font-black text-white text-base mb-2 tracking-wide">{item.pais}</p>

                {/* Year badge */}
                <span className="inline-block text-[10px] font-bold text-cyan-300 bg-cyan-400/20 border border-cyan-400/35 px-2.5 py-0.5 rounded-full tracking-widest mb-3">
                  {item.year}
                </span>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-3" />

                {/* Event */}
                <p className="text-slate-300 text-xs leading-relaxed">{item.evento}</p>
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
