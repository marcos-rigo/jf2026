'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeCheck, CheckCircle2, ChevronDown, Clock, LockKeyhole } from 'lucide-react'
import { groups } from '@/lib/tematicas-data'
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

export function TematicasDashboardContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const [progresoMap, setProgresoMap] = useState<Record<string, ProgresoTematica>>({})
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

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
    <main className="min-h-screen bg-[#F2F6FF]">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-brand-blue/10 blur-[110px]" />
        <div className="absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full bg-brand-pink/8 blur-[90px]" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6"
          >
            <BadgeCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Acceso completo desbloqueado</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-brand-navy mb-4 leading-none"
          >
            Temáticas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed"
          >
            Como miembro de Ciudadanía Presente, tenés acceso completo a las {totalTemas} temáticas de ciudadanía digital.
          </motion.p>
        </div>
      </section>

      {/* Grid por grupos */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 space-y-14">
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
                className="w-full flex items-center gap-3 mb-0 py-2 group/header"
              >
                <div className="w-1.5 h-7 rounded-full flex-shrink-0" style={{ backgroundColor: group.accent }} />
                <h2 className="text-lg font-display font-bold text-brand-navy">{group.label}</h2>
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
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
                  className="flex-shrink-0 text-slate-400 group-hover/header:text-brand-blue transition-colors"
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
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-7"
                    >
                      {group.items.map((tema, ti) => {
                  const IconComponent = tema.icon
                  const prog = progresoMap[tema.id]
                  const sinContenido = !!tema.sinContenido

                  // La temática anterior "real" para la secuencia: saltea
                  // cualquier ítem sin contenido, no cuenta ni bloquea.
                  let prevTema: typeof tema | undefined
                  for (let pi = ti - 1; pi >= 0; pi--) {
                    if (!group.items[pi].sinContenido) { prevTema = group.items[pi]; break }
                  }
                  const prevProg = prevTema ? progresoMap[prevTema.id] : undefined
                  const unlocked = !sinContenido && (!prevTema || !!prevProg?.completada)

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
                    <motion.div key={tema.title} variants={cardVariants}>
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
                    </motion.div>
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
