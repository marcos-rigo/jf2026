'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeCheck, Check, CheckCircle2, ChevronDown, Clock, LockKeyhole } from 'lucide-react'
import { groups } from '@/lib/tematicas-data'
import { AUDIENCIAS_ORDENADAS, AUDIENCIA_LABELS, type Audiencia } from '@/lib/audiencias'
import { useAppStore } from '@/lib/ciudadania/app-store'
import { Footer } from '@/components/footer'

interface ProgresoTematica {
  tematicaId: string
  completada: boolean
  porcentaje: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const totalTemas = groups.reduce((n, g) => n + g.items.length, 0)

// Temáticas con imagen custom generada (todas viven bajo /img/cards/) — pool
// de donde se sortea el mosaico del hero. Si más temáticas suman su propia
// imagen ahí, entran automáticamente al sorteo sin tocar este componente.
const CUSTOM_IMAGE_TEMAS = groups
  .flatMap((g) => g.items)
  .filter((t) => t.image.startsWith('/img/cards/'))
  .map((t) => ({ id: t.id, title: t.title, category: t.category, color: t.color, image: t.image }))

type MosaicTema = (typeof CUSTOM_IMAGE_TEMAS)[number]

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const DESKTOP_MOSAIC_POSITIONS = [
  { className: 'absolute top-0 left-0 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white', rotate: '-3deg', delay: 0.35 },
  { className: 'absolute top-10 right-0 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white', rotate: '2.5deg', delay: 0.48 },
  { className: 'absolute bottom-0 left-10 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white', rotate: '2deg', delay: 0.6 },
  { className: 'absolute bottom-8 right-4 w-[210px] rounded-2xl overflow-hidden shadow-2xl bg-white', rotate: '-2deg', delay: 0.72 },
] as const

const MOBILE_MOSAIC_POSITIONS = [
  { wrapClassName: 'absolute left-0 top-8 z-10', wrapRotate: -9, cardWidth: 'w-[108px]', floatY: -7, floatDuration: 3.2, floatDelay: 0, delay: 0.38, center: false },
  { wrapClassName: 'absolute left-1/2 -translate-x-1/2 top-0 z-20', wrapRotate: 2, cardWidth: 'w-[118px]', floatY: -11, floatDuration: 3.9, floatDelay: 0.5, delay: 0.52, center: true },
  { wrapClassName: 'absolute right-0 top-6 z-10', wrapRotate: 8, cardWidth: 'w-[108px]', floatY: -6, floatDuration: 3.5, floatDelay: 1, delay: 0.66, center: false },
] as const

// Bypass de desbloqueo secuencial SOLO para desarrollo local, para poder
// revisar todas las temáticas sin tener que completar cada quiz en orden.
// Requiere NODE_ENV === 'development' explícito (nunca es 'production' en un
// build de Vercel) Y la variable opt-in en .env.development.local — no toca
// la lógica de desbloqueo que corre en producción.
const UNLOCK_ALL_LOCAL =
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_UNLOCK_ALL_LOCAL === 'true'

export function TematicasDashboardContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const [progresoMap, setProgresoMap] = useState<Record<string, ProgresoTematica>>({})
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})
  // Filtro de públicos: selección única. El desbloqueo secuencial de cada
  // grupo se calcula SIEMPRE sobre `group.items` completo (el índice importa
  // para saber cuál es "la temática anterior") — el filtro solo decide qué
  // tarjetas ya calculadas se muestran, nunca qué se calcula. Así el filtro
  // puede ocultar/mostrar con animación sin romper el orden de desbloqueo.
  // Ver content-management/PROPUESTA-AUDIENCIAS.md.
  const [selectedAudiencia, setSelectedAudiencia] = useState<Audiencia | null>(null)

  // Mosaico del hero: arranca con un orden fijo (para que SSR e hidratación
  // coincidan) y se sortea una sola vez en el cliente después de montar —
  // así cada visita al dashboard puede mostrar una combinación distinta de
  // temáticas sin provocar un mismatch de hidratación en Next.js.
  const [desktopMosaic, setDesktopMosaic] = useState<MosaicTema[]>(() => CUSTOM_IMAGE_TEMAS.slice(0, 4))
  const [mobileMosaic, setMobileMosaic] = useState<MosaicTema[]>(() => CUSTOM_IMAGE_TEMAS.slice(0, 3))

  useEffect(() => {
    const shuffled = shuffle(CUSTOM_IMAGE_TEMAS)
    setDesktopMosaic(shuffled.slice(0, 4))
    setMobileMosaic(shuffled.slice(4, 7))
  }, [])

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const selectAudiencia = (audiencia: Audiencia) => {
    setSelectedAudiencia((prev) => (prev === audiencia ? null : audiencia))
  }

  const matchesAudienceFilter = (tema: { audiencias?: Audiencia[] }) =>
    !selectedAudiencia || !!tema.audiencias?.includes(selectedAudiencia)

  useEffect(() => {
    if (!userId) return
    fetch(`/api/ciudadania/progreso-tematicas?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, ProgresoTematica> = {}
        for (const p of (data.progreso ?? []) as ProgresoTematica[]) {
          map[p.tematicaId] = p
        }
        setProgresoMap(map)
      })
      .catch(() => {})
  }, [userId])

  return (
    <main className="min-h-screen bg-[#F2F6FF] overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-10 md:pt-14 pb-16 md:pb-24">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-7"
              >
                <BadgeCheck className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Acceso completo desbloqueado</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-display font-bold text-brand-navy mb-5 leading-none break-words"
              >
                Temáticas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-xl text-slate-500 max-w-md leading-relaxed mb-9"
              >
                Como miembro de Ciudadanía Presente, tenés acceso completo a las {totalTemas} temáticas de ciudadanía digital.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="flex flex-wrap gap-10 pt-8 border-t border-slate-100"
              >
                {[
                  { n: String(totalTemas), label: "Temáticas" },
                  { n: String(groups.length), label: "Grupos" },
                  { n: String(Object.values(progresoMap).filter((p) => p.completada).length), label: "Completadas" },
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
                {desktopMosaic.map((tema, i) => {
                  const pos = DESKTOP_MOSAIC_POSITIONS[i]
                  if (!pos) return null
                  return (
                    <motion.div
                      key={tema.id}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: pos.delay }}
                      className={pos.className}
                      style={{ borderTop: `3px solid ${tema.color}`, rotate: pos.rotate }}
                    >
                      <div className="relative h-[120px] w-full">
                        <Image src={tema.image} alt={tema.title} fill className="object-cover" sizes="210px" />
                      </div>
                      <div className="px-3.5 py-3">
                        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: tema.color }}>{tema.category}</span>
                        <p className="text-xs font-bold text-brand-navy leading-tight mt-0.5">{tema.title}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Mobile — 3 cards flotando encimadas, solo mobile */}
          <div className="lg:hidden mt-10 relative h-[200px]">
            {mobileMosaic.map((tema, i) => {
              const pos = MOBILE_MOSAIC_POSITIONS[i]
              if (!pos) return null
              return (
                <motion.div
                  key={tema.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: pos.delay }}
                  className={pos.wrapClassName}
                  style={{ rotate: pos.wrapRotate }}
                >
                  <motion.div
                    animate={{ y: [0, pos.floatY, 0] }}
                    transition={{ duration: pos.floatDuration, repeat: Infinity, ease: "easeInOut", delay: pos.floatDelay, repeatType: "loop" }}
                    className={`${pos.cardWidth} rounded-xl overflow-hidden bg-white ${pos.center ? "" : "shadow-lg"}`}
                    style={{
                      borderTop: `2px solid ${tema.color}`,
                      ...(pos.center ? { boxShadow: `0 12px 32px ${tema.color}40` } : {}),
                    }}
                  >
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image src={tema.image} alt={tema.title} fill className="object-cover" sizes={pos.cardWidth === "w-[118px]" ? "118px" : "108px"} />
                    </div>
                    <div className="px-2 py-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-wide truncate block" style={{ color: tema.color }}>{tema.category}</span>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Grid por grupos */}
      <section className="py-12 md:py-16">
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
                        ? 'bg-brand-blue border-brand-blue text-white'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-brand-blue/40 hover:text-brand-blue'
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

          {groups.map((group, gi) => {
            const isOpen = !!openGroups[group.label]
            // Cuenta solo temáticas con `completada: true` — no confundir con
            // "tiene algo de porcentaje": el contador del header refleja
            // cuántas terminó de verdad el usuario, según la base de datos.
            const completadasGrupo = group.items.filter((t) => !!progresoMap[t.id]?.completada).length

            return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: gi * 0.04 }}
            >
              <button
                type="button"
                onClick={() => toggleGroup(group.label)}
                aria-expanded={isOpen}
                className="w-full flex flex-wrap items-center gap-x-3 gap-y-2 mb-0 py-2 group/header"
              >
                <div className="w-1.5 h-7 rounded-full flex-shrink-0" style={{ backgroundColor: group.accent }} />
                <h2 className="text-lg font-display font-bold text-brand-navy min-w-0 truncate max-w-[70vw] sm:max-w-none">{group.label}</h2>
                <div className="hidden sm:block flex-1 h-px bg-slate-200" />
                <span className="hidden sm:inline text-xs font-semibold text-slate-400 whitespace-nowrap">
                  {completadasGrupo}/{group.items.length} completadas
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: `${group.accent}18`, color: group.accent }}
                >
                  {group.items.length} {group.items.length === 1 ? 'tema' : 'temas'}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 text-slate-400 group-hover/header:text-brand-blue transition-colors ml-auto sm:ml-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    {(() => {
                      // Calculado SIEMPRE sobre group.items completo (el
                      // desbloqueo secuencial depende del índice real). El
                      // filtro de audiencia se aplica después, solo sobre
                      // qué tarjetas ya calculadas se muestran.
                      const cardsCalculados = group.items.map((tema, ti) => {
                        const sinContenido = !!tema.sinContenido
                        let prevTema: typeof tema | undefined
                        for (let pi = ti - 1; pi >= 0; pi--) {
                          if (!group.items[pi].sinContenido) { prevTema = group.items[pi]; break }
                        }
                        const prevProg = prevTema ? progresoMap[prevTema.id] : undefined
                        const unlocked = !sinContenido && (UNLOCK_ALL_LOCAL || group.label === 'Libres bajo influencia' || !prevTema || !!prevProg?.completada)
                        return { tema, sinContenido, prevTema, unlocked }
                      })
                      const cardsVisibles = cardsCalculados.filter(({ tema }) => matchesAudienceFilter(tema))

                      if (cardsVisibles.length === 0) {
                        return (
                          <p className="text-sm text-slate-400 pt-7">
                            Ninguna temática de este grupo está clasificada para el público seleccionado.
                          </p>
                        )
                      }

                      return (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-7"
                    >
                      <AnimatePresence mode="popLayout">
                      {cardsVisibles.map(({ tema, prevTema, sinContenido, unlocked }) => {
                  const IconComponent = tema.icon
                  const prog = progresoMap[tema.id]

                  const cardInner = (
                    <div
                      className={[
                        'relative h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100 shadow-sm transition-all duration-300',
                        unlocked ? 'hover:shadow-lg hover:-translate-y-1' : '',
                      ].join(' ')}
                      style={{ borderTop: `3px solid ${unlocked ? tema.color : '#CBD5E1'}` }}
                    >
                      <div className="relative h-44 overflow-hidden bg-slate-100 flex-shrink-0">
                        <Image
                          src={tema.image}
                          alt={tema.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          className={[
                            'object-cover transition-transform duration-500',
                            unlocked ? 'group-hover:scale-105' : 'grayscale opacity-50',
                          ].join(' ')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        {unlocked ? (
                          <div className="absolute top-3 left-3">
                            <div
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-sm"
                              style={{ backgroundColor: tema.color }}
                            >
                              <IconComponent className="w-3 h-3 text-white" />
                              <span className="text-xs font-semibold text-white">{tema.category}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/95 shadow flex items-center justify-center">
                              {sinContenido ? (
                                <Clock className="w-4 h-4 text-slate-500" />
                              ) : (
                                <LockKeyhole className="w-4 h-4 text-slate-500" />
                              )}
                            </div>
                          </div>
                        )}

                        {unlocked && prog?.completada && (
                          <div className="absolute top-3 right-3">
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-600 shadow-sm">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                              <span className="text-[10px] font-bold text-white">Completada</span>
                            </div>
                          </div>
                        )}

                        {unlocked && !prog?.completada && (prog?.porcentaje ?? 0) > 0 && (
                          <div className="absolute bottom-0 inset-x-0 h-1 bg-black/10">
                            <div
                              className="h-full transition-all duration-300"
                              style={{ width: `${prog?.porcentaje ?? 0}%`, backgroundColor: tema.color }}
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-1 p-5">
                        <h3
                          className={[
                            'text-base font-display font-bold mb-2 leading-snug transition-colors duration-200',
                            unlocked ? 'text-brand-navy group-hover:text-brand-blue' : 'text-slate-400',
                          ].join(' ')}
                        >
                          {tema.title}
                        </h3>

                        {unlocked ? (
                          <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                            {tema.description}
                          </p>
                        ) : sinContenido ? (
                          <p className="text-sm text-slate-400 leading-relaxed flex-1 italic">
                            Estamos preparando el contenido de esta temática. Todavía no está disponible.
                          </p>
                        ) : (
                          <p className="text-sm text-slate-400 leading-relaxed flex-1 italic">
                            Completá &ldquo;{prevTema?.title}&rdquo; para desbloquear esta temática.
                          </p>
                        )}

                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                          {unlocked ? (
                            <span
                              className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                              style={{ color: tema.color }}
                            >
                              Explorar
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          ) : sinContenido ? (
                            <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              Próximamente
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                              <LockKeyhole className="w-3.5 h-3.5" />
                              Bloqueada
                            </span>
                          )}
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: unlocked ? `${tema.color}15` : '#F1F5F9' }}
                          >
                            <IconComponent className="w-4 h-4" style={{ color: unlocked ? tema.color : '#94A3B8' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  return (
                    <motion.div
                      key={tema.title}
                      layout
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                    >
                      {unlocked ? (
                        <Link href={tema.href} scroll={true} className="group block h-full">
                          {cardInner}
                        </Link>
                      ) : (
                        <div className="group block h-full cursor-not-allowed" aria-disabled="true">
                          {cardInner}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
                      </AnimatePresence>
                    </motion.div>
                      )
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            )
          })}
        </div>
      </section>

      <Footer />

    </main>
  )
}
