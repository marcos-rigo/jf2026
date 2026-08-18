'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  Bell,
  BookOpen,
  CheckCircle2,
  Circle,
  Compass,
  Database,
  Ear,
  ExternalLink,
  Eye,
  EyeOff,
  Fingerprint,
  Flame,
  Gauge,
  GraduationCap,
  HandMetal,
  Images,
  Layers,
  Network,
  Quote,
  RotateCcw,
  ScanSearch,
  Search,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Stethoscope,
  Thermometer,
  UserSearch,
  Users,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'

import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Color Tokens: "Caldos de Cultivo" (fuego / pasto seco) ───
const FLAME = '#EA580C'
const FLAME_TEXT = '#9A3412'
const ROSE = '#E11D48'
const ROSE_TEXT = '#9F1239'
const AMBER = '#D97706'
const AMBER_TEXT = '#92400E'
const VIOLET = '#7C3AED'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  .cc-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .cc-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .cc-editorial-wrap-right { float: right; margin-left: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
    .cc-editorial-wrap-left { float: left; margin-right: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
  }

  .cc-cyber-badge {
    background: linear-gradient(135deg, rgba(234, 88, 12, 0.1), rgba(225, 29, 72, 0.12));
    border: 1px solid rgba(234, 88, 12, 0.3);
    color: #9A3412;
  }
  .cc-cyber-btn {
    background: linear-gradient(135deg, #EA580C, #E11D48);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.4);
    transition: all 0.25s ease;
  }
  .cc-cyber-btn:hover { transform: translateY(-2px); box-shadow: 0 15px 30px -5px rgba(225, 29, 72, 0.5); }

  @keyframes ccEmber {
    0%, 100% { opacity: 0.55; transform: scale(1) translateY(0); }
    50% { opacity: 1; transform: scale(1.15) translateY(-4px); }
  }
  .cc-ember { animation: ccEmber 2.4s ease-in-out infinite; }
`

// ─── Fuentes académicas y legales (con enlace verificable cuando existe) ───
interface Citation {
  author: string
  title: string
  publication: string
  url?: string
  topic: string
  stat?: string
}

const ACADEMIC_CITATIONS: Citation[] = [
  {
    author: 'Fernández-Muñoz, Rubio-Moraga y Álvarez-Rivas (UCM, 2024)',
    title: 'La Generación Z frente a la desinformación: percepciones y prácticas',
    publication: 'Estudios sobre el Mensaje Periodístico — Universidad Complutense de Madrid',
    url: 'https://dx.doi.org/10.5209/emp.96511',
    topic: 'Confianza de la Gen Z en medios tradicionales vs. redes sociales',
    stat: '35,1% cree que los medios tradicionales "mienten mucho"',
  },
  {
    author: 'Villamar Suastegui, Vera Pico et al. (2026)',
    title: 'La incidencia de la IA generativa en los deepfakes y la confianza social',
    publication: 'Zenodo — Ciencia & Educación',
    url: 'https://doi.org/10.5281/zenodo.18463188',
    topic: 'IA generativa, deepfakes y erosión del capital social democrático',
    stat: 'Documenta el "dividendo del mentiroso": negar lo real alegando que es sintético',
  },
  {
    author: 'Karen Borensztein (UBA, 2024)',
    title: 'Desinformación en redes y su relación con el autodiagnóstico erróneo',
    publication: 'XVI Congreso Internacional de Investigación de Psicología, UBA',
    url: 'https://www.aacademica.org/000-048/823',
    topic: 'TDAH, TEA y ansiedad autodiagnosticados a partir de contenido no verificado en TikTok e Instagram',
    stat: 'Vincula la tendencia viral con cibercondría y consultas médicas evitadas',
  },
  {
    author: 'Dr. Julio Sal Paz (UNT, 2026)',
    title: 'Cómo las redes fabrican la duda y alimentan la polarización',
    publication: 'Medios UNT — Universidad Nacional de Tucumán',
    url: 'https://medios.unt.edu.ar/2026/07/30/como-las-redes-fabrican-la-duda-y-alimentan-la-polarizacion/',
    topic: 'La desinformación como estrategia de descontextualización y relato conspirativo cerrado',
    stat: 'Explica por qué "fabricar la duda" pesa más que imponer una mentira puntual',
  },
  {
    author: 'Carlos Saura García (2022)',
    title: 'Economía de la atención: orientaciones éticas alrededor de la adicción a las redes',
    publication: 'Fòrum de Recerca — Universidad de La Rioja (Dialnet)',
    url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9077579',
    topic: 'Ludificación, dopamina y técnicas de enganche cognitivo en el diseño de interfaces',
    stat: 'Analiza el desplazamiento infinito y la recompensa intermitente como mecanismos de retención',
  },
  {
    author: 'Wardle y Derakhshan (2017)',
    title: 'Information Disorder: Toward an Interdisciplinary Framework for Research and Policy Making (Desorden informativo: hacia un marco interdisciplinario para la investigación y las políticas públicas)',
    publication: 'Consejo de Europa',
    url: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c',
    topic: 'Taxonomía de desinformación, información errónea e información maliciosa',
    stat: 'Marco de referencia citado por organismos de fact-checking en todo el mundo',
  },
  {
    author: 'Vosoughi, Roy y Aral (2018)',
    title: 'The spread of true and false news online (La difusión de noticias verdaderas y falsas online)',
    publication: 'Science, Vol. 359, Issue 6380',
    url: 'https://doi.org/10.1126/science.aap9559',
    topic: 'Análisis de 126.000 cadenas de noticias en Twitter durante más de una década',
    stat: 'Las noticias falsas se difundieron un 70% más rápido que las verdaderas',
  },
  {
    author: 'McPherson, Smith-Lovin y Cook (2001)',
    title: 'Birds of a Feather: Homophily in Social Networks (Dios los cría y ellos se juntan: homofilia en las redes sociales)',
    publication: 'Annual Review of Sociology, Vol. 27',
    url: 'https://doi.org/10.1146/annurev.soc.27.1.415',
    topic: 'El principio de homofilia: por qué nos vinculamos con quienes se nos parecen',
    stat: 'Base teórica —anterior a internet— de lo que hoy llamamos cámara de eco',
  },
  {
    author: 'Elisabeth Noelle-Neumann (1974)',
    title: 'The Spiral of Silence: A Theory of Public Opinion (La espiral del silencio: una teoría de la opinión pública)',
    publication: 'Journal of Communication, Vol. 24, Issue 2',
    url: 'https://doi.org/10.1111/j.1460-2466.1974.tb00367.x',
    topic: 'Por qué las opiniones minoritarias tienden a callarse por miedo al aislamiento',
    stat: 'El marco teórico detrás de la "ilusión de consenso" en los grupos digitales',
  },
  {
    author: 'José Néstor Farhat',
    title: 'Libres Bajo Influencias: Subculturas, Algoritmos y Patrones Oscuros',
    publication: 'Conferencia marco — Documento principal',
    topic: 'Marco ecológico de la desinformación y protocolo de agencia ciudadana: Pausar, Preguntar, Elegir',
    stat: 'Material de conferencia base para todo el grupo "Libres bajo influencia"',
  },
]

const SECTION_VISUALS: { icon: LucideIcon; label: string; source: string; sourceUrl: string }[] = [
  { icon: Flame, label: 'Los ingredientes del pasto seco', source: 'Wardle y Derakhshan (2017)', sourceUrl: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c' },
  { icon: Users, label: 'Homofilia y cámara de eco', source: 'McPherson, Smith-Lovin y Cook (2001)', sourceUrl: 'https://doi.org/10.1146/annurev.soc.27.1.415' },
  { icon: EyeOff, label: 'La espiral del silencio', source: 'Elisabeth Noelle-Neumann (1974)', sourceUrl: 'https://doi.org/10.1111/j.1460-2466.1974.tb00367.x' },
  { icon: Network, label: 'Cultura y algoritmo en bucle', source: 'Ver simulador en vivo', sourceUrl: '#simulador' },
  { icon: ScanSearch, label: 'Fabricar la duda', source: 'Dr. Julio Sal Paz (UNT, 2026)', sourceUrl: 'https://medios.unt.edu.ar/2026/07/30/como-las-redes-fabrican-la-duda-y-alimentan-la-polarizacion/' },
  { icon: Activity, label: 'La velocidad de la mentira', source: 'Vosoughi, Roy y Aral (2018)', sourceUrl: 'https://doi.org/10.1126/science.aap9559' },
]

// ─── Ticker de estadísticas del hero ───
const HERO_STATS = [
  { label: 'Percepción de medios', value: '69%', color: FLAME, detail: 'Cree que los medios tradicionales mienten deliberadamente (Edelman Trust Barometer / UCM)' },
  { label: 'Generación Z (16-24)', value: '35,1%', color: ROSE, detail: 'Sostiene que los medios tradicionales "mienten mucho" (UCM, 2024)' },
  { label: 'Microtargeting político', value: '50M+', color: VIOLET, detail: 'Perfiles psicográficos extraídos en el caso Cambridge Analytica' },
  { label: 'Confianza social', value: 'En baja', color: AMBER, detail: 'Degradación por IA generativa, deepfakes y "dividendo del mentiroso" (Zenodo, 2026)' },
]

function EditorialImageFrame({
  imageSrc, altText, icon: Icon, colorA, colorB, label, source, sourceUrl, floatSide = 'right',
}: {
  imageSrc: string
  altText: string
  icon: LucideIcon
  colorA: string
  colorB: string
  label: string
  source: string
  sourceUrl: string
  floatSide?: 'right' | 'left'
}) {
  const [imgError, setImgError] = useState(false)
  const isExternal = sourceUrl.startsWith('http')

  return (
    <div
      className={`relative p-3 bg-white border-2 rounded-[32px] shadow-lg overflow-hidden group mb-6 ${
        floatSide === 'left' ? 'cc-editorial-wrap-left' : 'cc-editorial-wrap-right'
      }`}
      style={{ borderColor: hexToRgba(colorA, 0.25) }}
    >
      <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-200">
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 380px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${hexToRgba(colorA, 0.88)}, ${hexToRgba(colorB, 0.65)})` }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white">
              <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-2.5 opacity-90" strokeWidth={1.5} />
              <span className="cc-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
            </div>
          </div>
        )}

        <a
          href={sourceUrl}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold transition-all hover:bg-black/80"
        >
          <span className="truncate pr-2">{source}</span>
          <ExternalLink className="w-3 h-3 text-orange-400 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Widget 1: Mezclador del pasto seco (temperatura de riesgo) ───
const FUEL_OPTIONS = [
  { id: 'repeticion', label: 'Repetición constante del mismo mensaje', category: 'Ingrediente', weight: { temp: 16, velocidad: 10 } },
  { id: 'polarizacion', label: 'Encuadre "nosotros contra ellos"', category: 'Ingrediente', weight: { temp: 22, velocidad: 8 } },
  { id: 'viralidad', label: 'Indignación o urgencia emocional', category: 'Ingrediente', weight: { temp: 24, velocidad: 20 } },
  { id: 'camaras', label: 'Círculo social homogéneo (cámara de eco)', category: 'Ingrediente', weight: { temp: 18, velocidad: 6 } },
  { id: 'desinformacion', label: 'Dato falso o descontextualizado', category: 'Ingrediente', weight: { temp: 20, velocidad: 16 } },
]

function DryGrassMixer() {
  const [selected, setSelected] = useState<string[]>(['viralidad', 'camaras'])

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const scores = selected.reduce(
    (acc, id) => {
      const opt = FUEL_OPTIONS.find((o) => o.id === id)
      if (opt) Object.entries(opt.weight).forEach(([k, v]) => { acc[k] = (acc[k] || 0) + v })
      return acc
    },
    { temp: 8, velocidad: 6 } as Record<string, number>
  )

  const tempPct = Math.min(Math.max(scores.temp || 0, 5), 100)
  const velPct = Math.min(Math.max(scores.velocidad || 0, 5), 100)

  let estado = { label: 'Pasto húmedo', color: '#059669', desc: 'Baja probabilidad de que una chispa se propague.' }
  if (tempPct >= 40 && tempPct < 75) {
    estado = { label: 'Pasto seco', color: AMBER, desc: 'Cualquier chispa —un rumor, un titular— puede prender.' }
  } else if (tempPct >= 75) {
    estado = { label: 'Riesgo de incendio', color: ROSE, desc: 'El ambiente está listo: alcanza una chispa mínima para que se propague solo.' }
  }

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-5 sm:p-8 border-2 border-orange-500/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Flame className="w-6 h-6 text-orange-400 cc-ember shrink-0" />
            <h3 className="cc-fraunces font-black text-lg sm:text-xl text-white leading-tight">Mezclador del Pasto Seco</h3>
          </div>
          <span className="cc-mono text-xs px-3 py-1 rounded-full bg-orange-950 border border-orange-700/50 text-orange-300 font-semibold">
            {selected.length} ingredientes activos
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Sumá o quitá ingredientes del "caldo de cultivo" y observá cómo sube —o baja— la temperatura de riesgo. Ningún ingrediente por sí solo genera el incendio; la combinación sí.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {FUEL_OPTIONS.map((opt) => {
            const active = selected.includes(opt.id)
            return (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  active ? 'bg-orange-950/80 border-orange-500 text-white shadow-lg' : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${active ? 'bg-orange-600 border-orange-400 text-white' : 'border-slate-600 bg-slate-900'}`}>
                  {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-mono text-orange-400 font-bold mb-0.5">{opt.category}</span>
                  <span className="text-xs font-semibold leading-snug block">{opt.label}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">
            <span>Lectura del ambiente</span>
            <span style={{ color: estado.color }}>{estado.label}</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span className="flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5" /> Temperatura de riesgo</span>
              <span className="font-mono font-bold" style={{ color: estado.color }}>{tempPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${hexToRgba(estado.color, 0.65)}, ${estado.color})` }}
                animate={{ width: `${tempPct}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5" /> Velocidad de propagación estimada</span>
              <span className="font-mono text-rose-400 font-bold">{velPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-rose-600 to-pink-400 rounded-full" animate={{ width: `${velPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
            {estado.desc} <span className="text-slate-500">Un caldo de cultivo no determina el resultado: facilita, recompensa, repite y amplifica.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Widget 2: Simulador de cámara de eco ───
const FEED_PRESETS = [
  { text: 'Debate abierto con múltiples fuentes y matices sobre una misma política pública.', tag: 'DIVERSO', color: 'bg-emerald-100 text-emerald-800' },
  { text: 'Nota que contrasta datos oficiales con opiniones de especialistas de distinto signo.', tag: 'PERSPECTIVA B', color: 'bg-sky-100 text-sky-800' },
  { text: 'Informe neutro, sin carga emocional, sobre un tema económico o social.', tag: 'NEUTRO', color: 'bg-slate-100 text-slate-700' },
  { text: '"¡Mirá lo que nos quieren ocultar! El otro bando otra vez mintiendo."', tag: 'SECTARIO', color: 'bg-rose-100 text-rose-800' },
  { text: '"Lo que nadie te cuenta": relato cerrado que interpreta cualquier objeción como prueba de la conspiración.', tag: 'CONSPIRATIVO', color: 'bg-purple-100 text-purple-800' },
]

function EchoChamberSimulator() {
  const [value, setValue] = useState(50)

  const diversity = Math.max(5, 100 - value)
  let polarization = 'Baja'
  let exposure = 'Alta'
  let badge = { text: 'Feed abierto y balanceado', color: 'bg-emerald-100 text-emerald-700' }

  if (value > 40 && value <= 75) {
    polarization = 'Media / alta'
    exposure = 'Reducida'
    badge = { text: 'Cámara de eco moderada', color: 'bg-purple-100 text-purple-700' }
  } else if (value > 75) {
    polarization = 'Extrema'
    exposure = 'Nula'
    badge = { text: 'Burbuja algorítmica impenetrable', color: 'bg-rose-100 text-rose-700' }
  }

  let items = [FEED_PRESETS[0], FEED_PRESETS[1], FEED_PRESETS[2]]
  if (value >= 35 && value < 70) items = [FEED_PRESETS[3], FEED_PRESETS[1], FEED_PRESETS[4]]
  else if (value >= 70) items = [FEED_PRESETS[3], FEED_PRESETS[4], FEED_PRESETS[3]]

  return (
    <div className="glass-panel bg-white rounded-3xl border-2 border-purple-200/70 shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-2">
        <UserSearch className="w-6 h-6 text-purple-600" />
        <h3 className="cc-fraunces font-black text-lg sm:text-xl text-slate-900">Simulador de Cámara de Eco</h3>
      </div>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-2xl">
        Ajustá cuánto "refuerza" el algoritmo tus propias preferencias —homofilia más sesgo de confirmación— y mirá cómo cambia, en tiempo real, lo que aparece en un feed individual.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <label htmlFor="echoSlider" className="text-sm font-bold text-slate-800 flex justify-between">
              <span>Intensidad de refuerzo algorítmico</span>
              <span className="text-purple-600 font-mono font-bold">{value}%</span>
            </label>
            <input
              id="echoSlider"
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500">Diversidad de fuentes</span>
              <span className="font-bold text-sky-600">{diversity}%</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500">Polarización afectiva</span>
              <span className="font-bold text-rose-600">{polarization}</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500">Exposición a lo opuesto</span>
              <span className="font-bold text-amber-600">{exposure}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-slate-700 uppercase font-mono">Tu feed individual simulado</span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono ${badge.color}`}>{badge.text}</span>
          </div>
          <div className="space-y-3">
            {items.map((item, i) => (
              <motion.div
                key={`${item.tag}-${i}-${value}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-xl border border-slate-200 bg-white text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Publicación #{i + 1}</span>
                  <span className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold ${item.color}`}>{item.tag}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Widget 3: Verificador rápido (verdadero / falso) ───
const FACT_CHECK_ITEMS = [
  {
    statement: 'Un video viral de 30 segundos con síntomas comunes alcanza para autodiagnosticar formalmente un trastorno, sin consulta médica.',
    isTrue: false,
    explanation: 'Falso. Karen Borensztein (UBA, 2024) documenta que estos autodiagnósticos generan cibercondría y tratamientos no supervisados, además de retrasar la consulta profesional real.',
  },
  {
    statement: 'La desinformación contemporánea busca, ante todo, convencerte de una mentira puntual y que la creas.',
    isTrue: false,
    explanation: 'Falso. Según Julio Sal Paz (UNT, 2026), el objetivo suele ser más ambicioso: fabricar la duda y erosionar la confianza en que la verdad sea siquiera alcanzable.',
  },
  {
    statement: 'En un estudio de más de una década en Twitter, las noticias falsas se difundieron más rápido y más lejos que las verdaderas — y no fue principalmente por los bots.',
    isTrue: true,
    explanation: 'Verdadero. Vosoughi, Roy y Aral (Science, 2018) encontraron que eran las personas, no los bots, quienes compartían más rápido la mentira.',
  },
  {
    statement: 'La cámara de eco y la burbuja de filtros son exactamente el mismo fenómeno, solo que con otro nombre.',
    isTrue: false,
    explanation: 'Falso. La burbuja de filtros la arma sobre todo el algoritmo; la cámara de eco la arman ante todo las relaciones que elegimos (homofilia + sesgo de confirmación), y el algoritmo la potencia.',
  },
]

function FactCheckChallenge() {
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState<null | { correct: boolean }>(null)
  const [tally, setTally] = useState({ correct: 0, total: 0 })

  const current = FACT_CHECK_ITEMS[idx]

  function respond(userSaysTrue: boolean) {
    if (answer) return
    const correct = userSaysTrue === current.isTrue
    setAnswer({ correct })
    setTally((t) => ({ correct: t.correct + (correct ? 1 : 0), total: t.total + 1 }))
  }

  function next() {
    setAnswer(null)
    setIdx((i) => (i + 1) % FACT_CHECK_ITEMS.length)
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-rose-200/70 shadow-xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <ScanSearch className="w-6 h-6 text-rose-600" />
          <h3 className="cc-fraunces font-black text-lg sm:text-xl text-slate-900">Verificador Rápido: ¿Verdad o Mito Viral?</h3>
        </div>
        <span className="cc-mono text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          Aciertos: {tally.correct}/{tally.total}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-2xl">
        Cuatro afirmaciones que circulan como sentido común. Decidí si son verdaderas o falsas y contrastá con la literatura académica.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rose-600">Caso {idx + 1} de {FACT_CHECK_ITEMS.length}</span>
          </div>

          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">"{current.statement}"</p>

          {!answer ? (
            <div className="flex gap-3 pt-2">
              <button onClick={() => respond(false)} className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <X className="w-4 h-4" /> Falso
              </button>
              <button onClick={() => respond(true)} className="flex-1 py-3 rounded-xl bg-rose-600 text-white font-bold text-sm hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <CheckCircle2 className="w-4 h-4" /> Verdadero
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`p-4 rounded-xl text-sm leading-relaxed font-medium ${answer.correct ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'}`}>
                <strong>{answer.correct ? '¡Correcto! ' : 'No exactamente. '}</strong>
                {current.explanation}
              </div>
              <button onClick={next} className="cc-cyber-btn px-6 py-2.5 rounded-full text-xs font-black cursor-pointer inline-flex items-center gap-2">
                Siguiente caso <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Dashboard estadístico (recharts) ───
const TRUST_BY_AGE = [
  { grupo: 'Gen Z (16-24)', valor: 35.1 },
  { grupo: '30-40 años', valor: 28.4 },
  { grupo: '40-54 años', valor: 24.2 },
  { grupo: '55+ años', valor: 19.8 },
]

const GENZ_SOURCES = [
  { name: 'TikTok e Instagram', value: 42, color: FLAME },
  { name: 'X (Twitter)', value: 23, color: VIOLET },
  { name: 'YouTube y podcasts', value: 18, color: '#059669' },
  { name: 'Portales tradicionales', value: 12, color: AMBER },
  { name: 'Televisión y radio', value: 5, color: ROSE },
]

function StatsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="cc-fraunces font-bold text-lg text-slate-900">Percepción de mentira en medios tradicionales</h3>
          <span className="cc-mono text-[11px] font-bold text-orange-600">UCM, 2024</span>
        </div>
        <p className="text-xs text-slate-500">Porcentaje que cree que los medios tradicionales "mienten mucho", por grupo etario.</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TRUST_BY_AGE} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="grupo" tick={{ fontSize: 11, fill: '#64748b' }} tickLine={false} axisLine={{ stroke: '#e2e8f0' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickLine={false} axisLine={false} unit="%" />
              <RechartsTooltip
                cursor={{ fill: 'rgba(234, 88, 12, 0.06)' }}
                contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }}
                formatter={(v: number) => [`${v}%`, 'Cree que mienten mucho']}
              />
              <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
                {TRUST_BY_AGE.map((entry, i) => (
                  <Cell key={entry.grupo} fill={[FLAME, VIOLET, '#059669', ROSE][i % 4]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="cc-fraunces font-bold text-lg text-slate-900">Canal principal de información (Gen Z)</h3>
          <span className="cc-mono text-[11px] font-bold text-orange-600">Datos empíricos</span>
        </div>
        <p className="text-xs text-slate-500">Predominio de plataformas sociales dinámicas sobre portales de noticias convencionales.</p>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={GENZ_SOURCES} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {GENZ_SOURCES.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} formatter={(v: number, n: string) => [`${v}%`, n]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center pt-1">
          {GENZ_SOURCES.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} /> {s.name} · {s.value}%
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Casos de estudio adicionales ───
const CASE_STUDIES = [
  {
    icon: Database,
    color: VIOLET,
    label: 'Microtargeting político',
    title: 'El modelo psicográfico OCEAN y Cambridge Analytica',
    description:
      'A partir de "me gusta" y redes de amistad en Facebook, un modelo psicográfico (Apertura, Tesón, Extraversión, Amabilidad, Neuroticismo) permitió construir hasta 50 millones de perfiles y enviar mensajes políticos hechos a medida para movilizar —o desmovilizar— a votantes específicos.',
    linkLabel: 'Ver el acuerdo regulatorio oficial (FTC)',
    linkUrl: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook',
  },
  {
    icon: ShieldAlert,
    color: ROSE,
    label: 'IA generativa y deepfakes',
    title: 'El "dividendo del mentiroso"',
    description:
      'Cuando la síntesis de voz, rostro y conducta se vuelve hiperrealista, aparece un efecto colateral: cualquier prueba real —un audio, un video— puede descartarse alegando que es un deepfake. No hace falta fabricar una mentira nueva; alcanza con poner en duda lo verdadero.',
    linkLabel: 'Ver estudio en Zenodo (DOI)',
    linkUrl: 'https://doi.org/10.5281/zenodo.18463188',
  },
]

// ─── Módulo 01: Tarjetas de fundamentos teóricos ───
const THEORY_CARDS = [
  {
    icon: Compass,
    color: FLAME,
    title: '"La Arquitectura es Código y Regulación"',
    body: (
      <>
        Como argumenta <em>Lawrence Lessig</em> y rescata Farhat, en las redes digitales no hace falta prohibir u ordenar verbalmente: <strong>el propio diseño del entorno vuelve fácil una conducta y sumamente difícil otra</strong>. Las decisiones se toman en segundos creyendo que son 100% libres, cuando la interfaz prediseñó el camino.
      </>
    ),
    footer: '"Ninguna de esas decisiones ocurrió en el vacío. Alguien decidió qué botón íbamos a ver primero." — J. N. Farhat',
  },
  {
    icon: Eye,
    color: VIOLET,
    title: 'Extracción Monetizable de Atención',
    body: (
      <>
        Según la investigación de <em>Carlos Saura García (Universidad de La Rioja — Dialnet)</em>, el modelo de negocio del capitalismo de vigilancia convierte la atención humana en una mercancía escasa. Las plataformas emplean mecanismos de ludificación y dopamina para crear ciclos de adicción continuados.
      </>
    ),
    list: [
      'Desplazamiento infinito (Infinite Scroll)',
      'Notificaciones de recompensa intermitente',
      'Auto-play programado por algoritmos predictivos',
    ],
  },
  {
    icon: GraduationCap,
    color: '#059669',
    title: 'Hibridación No Sustitutiva',
    body: (
      <>
        Frente a la dicotomía entre el apocalipsis tecno-utópico y el conservadurismo, el marco de <em>Santiago Tomás Bellomo (Universidad Austral)</em> propone la <strong>Educación Aumentada</strong>: utilizar la tecnología para amplificar el pensamiento crítico irremplazable y la agencia humana.
      </>
    ),
    footer: 'Respuesta clave: potenciar la mediación pedagógica y el juicio crítico antes que la mera alfabetización instrumental.',
    footerTone: 'emerald' as const,
  },
]

// ─── Módulo 01: Inspector interactivo de patrones oscuros ───
const DARK_PATTERNS: Record<string, { title: string; body: string; citation: string; icon: LucideIcon }> = {
  notif: {
    title: 'Alertas de Dopamina Ficticias (Phantom Notifications)',
    body: 'Esta técnica utiliza alertas coloreadas e imprecisas ("alguien mencionó tu nombre") para explotar el miedo a quedar fuera del grupo (FOMO). Fuerza al usuario a abrir la aplicación varias veces por hora.',
    citation: 'Marco de adicción a plataformas (Saura García — Dialnet / Conferencia Farhat)',
    icon: Bell,
  },
  clickbait: {
    title: 'Diseño Orientado a Indignación Afectiva',
    body: 'Los algoritmos de recomendación priorizan titulares emocionalmente polarizantes porque la rabia o la indignación genera muchísimo más tiempo de retención e interacciones que el contenido matizado.',
    citation: 'Fabricación de la duda (Dr. Julio Sal Paz — Medios UNT)',
    icon: Flame,
  },
  fomo: {
    title: 'Mecanismo de Rachas y Gamificación Manipulativa',
    body: 'Penalizar al usuario si no ingresa todos los días (perder la "racha") utiliza el sesgo cognitivo de aversión a la pérdida para condicionar un hábito compulsivo diario inconsciente.',
    citation: 'Caldos de Cultivo & Subculturas (Farhat)',
    icon: RotateCcw,
  },
}

function DarkPatternInspector() {
  const [active, setActive] = useState<keyof typeof DARK_PATTERNS | null>(null)
  const current = active ? DARK_PATTERNS[active] : null

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Mockup de smartphone interactivo */}
      <div className="md:col-span-5 flex justify-center">
        <div className="w-64 h-[440px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-700">
          <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto absolute top-3 left-1/2 -translate-x-1/2 z-20" />

          <div className="w-full h-full bg-slate-50 rounded-[2.2rem] pt-8 px-3 pb-4 flex flex-col justify-between relative overflow-hidden text-xs">
            <button
              type="button"
              onClick={() => setActive('notif')}
              className={`w-full p-2.5 rounded-xl bg-violet-600 text-white font-medium text-left flex items-center justify-between shadow-md hover:scale-[1.02] transition-transform cursor-pointer ${active === 'notif' ? 'ring-2 ring-white' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Bell className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <div>
                  <div className="font-bold text-[10px]">¡3 amigos te mencionaron!</div>
                  <div className="text-[9px] opacity-80">Mira lo que dijeron de ti...</div>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
            </button>

            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-[10px]">Trending "Para Ti"</span>
                <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-mono text-[8px] font-bold">ALGORITMO</span>
              </div>
              <p className="text-[10px] text-slate-600 line-clamp-2">"¡No vas a creer lo que acaba de suceder con esta polémica nacional! Mira el video..."</p>
              <button
                type="button"
                onClick={() => setActive('clickbait')}
                className={`w-full py-1.5 rounded-lg bg-orange-600 text-white font-bold text-[9px] text-center hover:bg-orange-700 cursor-pointer ${active === 'clickbait' ? 'ring-2 ring-orange-300' : ''}`}
              >
                Ver video con indignación (30s)
              </button>
            </div>

            <button
              type="button"
              onClick={() => setActive('fomo')}
              className={`p-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-center shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer ${active === 'fomo' ? 'ring-2 ring-amber-200' : ''}`}
            >
              <Flame className="w-4 h-4 text-rose-800 shrink-0" />
              <span>Racha de 14 días activa. ¡Entra hoy!</span>
            </button>

            <div className="flex justify-around pt-2 border-t border-slate-200 text-slate-400">
              <Circle className="w-4 h-4 text-orange-600" />
              <Compass className="w-4 h-4" />
              <BadgeCheck className="w-4 h-4 text-rose-500" />
              <UserSearch className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Panel explicativo dinámico */}
      <div className="md:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 min-h-[220px]">
        {!current ? (
          <>
            <div className="text-lg font-bold text-orange-700 flex items-center gap-2">
              <HandMetal className="w-5 h-5 shrink-0" /> Selecciona un elemento del teléfono para analizar
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hacé clic en la alerta, la racha o el feed del smartphone interactivo a la izquierda. La plataforma te revelará la técnica psicológica de persuasión y su fundamento teórico en la literatura académica.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
              Referencia: Conferencia Farhat / Dialnet Saura García (2022).
            </div>
          </>
        ) : (
          <>
            <div className="text-lg font-bold text-orange-700 flex items-center gap-2">
              <current.icon className="w-5 h-5 shrink-0" /> {current.title}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{current.body}</p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
              Referencia académica: {current.citation}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Módulo 02: Tarjetas de investigación (Cambridge Analytica / Fabricación de la duda) ───
const MODULE2_RESEARCH_CARDS = [
  {
    badge: 'Investigación UNLP',
    badgeColor: 'bg-rose-100 text-rose-700',
    icon: Database,
    iconColor: 'text-rose-500',
    title: 'El Modelo Psicográfico OCEAN y Elecciones 2015',
    body: 'El estudio de la Facultad de Periodismo y Comunicación Social (UNLP) desglosa cómo el perfilado masivo de datos mediante el test OCEAN (Apertura, Tesón, Extraversión, Amabilidad, Neuroticismo) permitió inyectar mensajes políticos altamente personalizados para movilizar o desmovilizar votantes específicos en Argentina.',
    boxTitle: 'Cadena de manipulación de datos:',
    boxItems: [
      '1. Cosecha de likes y red de amigos en Facebook',
      '2. Algoritmo psicométrico (modelo OCEAN)',
      '3. Microtargeting político persuasivo irrestricto',
    ],
    boxTone: 'rose' as const,
  },
  {
    badge: 'Investigación Medios UNT',
    badgeColor: 'bg-cyan-100 text-cyan-800',
    icon: ScanSearch,
    iconColor: 'text-cyan-600',
    title: 'La Fabricación Sistémica de la Duda',
    body: 'El Dr. Julio Sal Paz (Universidad Nacional de Tucumán) demuestra que la desinformación contemporánea no busca necesariamente convencerte de una mentira explícita, sino minar la posibilidad de que exista una verdad compartida, erosionando la confianza pública mediante relatos conspirativos cerrados.',
    boxTitle: 'Lógica del relato conspirativo cerrado:',
    boxQuote: '"Si aparecen pruebas en contra, se argumenta que confirman la conspiración; si no existen pruebas, se afirma que fueron ocultadas deliberadamente."',
    boxTone: 'cyan' as const,
  },
]

// ─── Módulo 03: Tarjetas de frontera tecnológica (deepfakes / autodiagnóstico) ───
const MODULE3_RESEARCH_CARDS = [
  {
    icon: Fingerprint,
    color: ROSE,
    badge: 'Zenodo DOI: 10.5281/zenodo.18463188',
    title: 'Erosión de la Confianza Social por IAG',
    body: 'La investigación reciente de Villamar Suastegui et al. (2026) analiza cómo la democratización de la Inteligencia Artificial Generativa permite sintetizar voz, rostro y conductas hiperrealistas. Esto genera el denominado "Dividendo del Mentiroso": la capacidad de calificar cualquier prueba real como si fuera un deepfake.',
    footer: 'Impacto crítico: ruptura del consenso sobre la realidad empírica visual y auditiva en el ámbito público y legal.',
  },
  {
    icon: Stethoscope,
    color: AMBER,
    badge: 'UBA Facultad de Psicología (2024)',
    title: 'Desinformación y Autodiagnóstico Erróneo',
    body: 'El trabajo de Karen Borensztein (UBA) documenta la proliferación de contenidos sobre salud mental en TikTok e Instagram (TDAH, Trastornos del Espectro Autista, ansiedad) sin rigor científico. Los usuarios asumen etiquetas psiquiátricas basadas en videos virales breves, generando cibercondría y tratamientos no supervisados.',
    footer: 'Consecuencia: comercialización de suplementos sin evidencia y saturación indebida de servicios médicos por autodiagnóstico patologizante.',
  },
]

// ─── Módulo 05: Mini-test de diagnóstico de inmunidad digital ───
const MINI_TEST_QUESTIONS: { q: string; options: { text: string; pts: number }[] }[] = [
  {
    q: 'Cuando ves una noticia chocante o indignante en tus redes, ¿cuál es tu primera reacción habitual?',
    options: [
      { text: 'La comparto inmediatamente para alertar a mis contactos.', pts: 0 },
      { text: 'Leo los comentarios para ver qué opina la gente.', pts: 1 },
      { text: 'Pauso, no la comparto y verifico la fuente original en otro buscador (lectura lateral).', pts: 2 },
    ],
  },
  {
    q: '¿Cómo percibís las recomendaciones automáticas de "Videos sugeridos" o "Para ti"?',
    options: [
      { text: 'Como selecciones espontáneas y neutrales basadas en la suerte.', pts: 0 },
      { text: 'Sé que hay un algoritmo, pero confío en que busca entretenerme bien.', pts: 1 },
      { text: 'Como una arquitectura regulada para maximizar mi tiempo de permanencia explotando mis emociones.', pts: 2 },
    ],
  },
  {
    q: 'Ante un video de salud o psicología en TikTok que describe síntomas que sentís:',
    options: [
      { text: 'Asumo que probablemente tengo esa condición y busco suplementos o soluciones online.', pts: 0 },
      { text: 'Me identifico pero no hago nada al respecto.', pts: 1 },
      { text: 'Recuerdo los riesgos del autodiagnóstico erróneo (estudio UBA) y consulto a un profesional matriculado.', pts: 2 },
    ],
  },
  {
    q: 'Al interactuar con personas que sostienen opiniones ideológicas diametralmente opuestas a la tuya:',
    options: [
      { text: 'Las bloqueo o descalifico de inmediato por mentirosas.', pts: 0 },
      { text: 'Suelo ignorar sus publicaciones para mantener mi tranquilidad.', pts: 1 },
      { text: 'Reconozco el riesgo de la cámara de eco e intento comprender sus fuentes empíricas.', pts: 2 },
    ],
  },
  {
    q: '¿Conocés y aplicás el protocolo de tres pasos propuesto por José Néstor Farhat?',
    options: [
      { text: 'No, nunca lo había escuchado.', pts: 0 },
      { text: 'He oído hablar de él pero me cuesta llevarlo a la práctica diaria.', pts: 1 },
      { text: 'Sí: PAUSAR antes de reaccionar, PREGUNTAR por la intencionalidad del diseño y ELEGIR con agencia.', pts: 2 },
    ],
  },
]

function DigitalImmunityMiniTest() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function selectOption(pts: number) {
    setScore((s) => s + pts)
    if (step + 1 < MINI_TEST_QUESTIONS.length) {
      setStep((s) => s + 1)
    } else {
      setFinished(true)
    }
  }

  function reset() {
    setStep(0)
    setScore(0)
    setFinished(false)
  }

  const percent = ((step + (finished ? 1 : 0)) / MINI_TEST_QUESTIONS.length) * 100

  let result = {
    title: 'Vulnerabilidad digital elevada (0-3 pts)',
    desc: 'Tus respuestas sugieren una alta exposición a cámaras de eco, manipulación afectiva y consumo acrítico en redes sociales.',
    badge: 'Alerta: requiere activar el protocolo "Pausar, Preguntar, Elegir"',
    tone: 'bg-rose-100 text-rose-900 border-rose-300',
  }
  if (score >= 8) {
    result = {
      title: 'Nivel de inmunidad digital ALTO (8-10 pts)',
      desc: 'Demostrás un pensamiento crítico avanzado y una sólida comprensión de la arquitectura de la atención, las cámaras de eco y el chequeo lateral.',
      badge: 'Insignia: Ciudadano Digital Inmune & Agente Crítico',
      tone: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    }
  } else if (score >= 4) {
    result = {
      title: 'Nivel de inmunidad digital MEDIO (4-7 pts)',
      desc: 'Sos consciente de los algoritmos y sesgos, pero todavía estás expuesto a caer en patrones oscuros, microtargeting o publicaciones impulsivas.',
      badge: 'Insignia: Navegante Consciente en Formación',
      tone: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    }
  }

  if (finished) {
    return (
      <div className="space-y-6 text-center py-4">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-600 text-white flex items-center justify-center shadow-lg">
          <Award className="w-9 h-9" />
        </div>
        <h3 className="cc-fraunces text-2xl sm:text-3xl font-black text-slate-900">{result.title}</h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">{result.desc}</p>
        <div className={`p-4 rounded-2xl border max-w-md mx-auto text-xs font-mono font-bold ${result.tone}`}>
          {result.badge}
        </div>
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-orange-600 transition-colors cursor-pointer"
        >
          Reintentar evaluación
        </button>
      </div>
    )
  }

  const qData = MINI_TEST_QUESTIONS[step]

  return (
    <div>
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-6">
        <motion.div
          className="bg-amber-500 h-full"
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-amber-600">
          Pregunta {step + 1} de {MINI_TEST_QUESTIONS.length}
        </span>
        <h4 className="text-lg font-bold text-slate-900">{qData.q}</h4>
        <div className="space-y-3 pt-2">
          {qData.options.map((opt) => (
            <button
              key={opt.text}
              type="button"
              onClick={() => selectOption(opt.pts)}
              className="w-full text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-sm font-medium text-slate-700 flex items-center justify-between gap-3 group cursor-pointer"
            >
              <span>{opt.text}</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CaldosDeCultivoPage() {
  const data = getLibresSubtopicBySlug('caldos-de-cultivo')!
  const reducedMotion = useReducedMotion()

  const { progress, quiz, lightbox } = useLibresSubtopic(data)

  const {
    currentQuestionIdx, selectedAnswers, showResults,
    currentQuestion, isLastQuestion, canContinue, finalScore,
    startQuiz, handleSelect, handleNext, handlePrev,
  } = quiz

  const {
    lightboxOpen, setLightboxOpen, zoom, pan, isDragging, lightboxAreaRef,
    closeLightbox, zoomIn, zoomOut, resetZoom, onMouseDown, onMouseMove, onMouseUp,
  } = lightbox

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [sourceQuery, setSourceQuery] = useState('')

  const filteredCitations = ACADEMIC_CITATIONS.filter((cite) => {
    const haystack = `${cite.author} ${cite.title} ${cite.publication} ${cite.topic}`.toLowerCase()
    return haystack.includes(sourceQuery.trim().toLowerCase())
  })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fadeUp = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

  if (!data) return null

  return (
    <>
      <style>{STYLES}</style>

      <Navbar />

      {/* Barra de progreso de lectura/quiz */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-rose-500 to-amber-500 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">

        {/* ══ 1 HERO ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                  <span className="cc-mono cc-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                    // {data.category}
                  </span>
                  <span className="cc-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    Ecosistema de inmunidad digital
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  transition={spring}
                  className="cc-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.08]"
                >
                  {data.title}
                </motion.h1>

                <motion.p variants={fadeUp} transition={spring} className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold leading-relaxed">
                  {data.description}
                </motion.p>

                <motion.div variants={fadeUp} transition={spring} className="pt-2">
                  <span className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-3">
                    Marcos teóricos y autores citados:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.authors.map((author) => (
                      <span key={author} className="px-3.5 py-1.5 rounded-full text-xs font-black bg-orange-50 text-orange-900 border border-orange-200 shadow-sm">
                        {author}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                  <a href="#mezclador" className="cc-cyber-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                    <Flame className="w-5 h-5" /> Probar el mezclador de riesgo
                  </a>
                  <a href="#fuentes" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base border border-slate-300 hover:bg-slate-100 text-slate-800 transition-all">
                    Explorar fuentes científicas <BookOpen className="w-5 h-5 text-orange-600" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                <EditorialImageFrame
                  imageSrc="/img/tematicas/caldos-de-cultivo/hero.webp"
                  altText="Caldos de cultivo: desinformación y cámaras de eco"
                  icon={Flame}
                  colorA={FLAME}
                  colorB={ROSE}
                  label="Pasto seco digital"
                  source="Wardle y Derakhshan (2017)"
                  sourceUrl="https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c"
                  floatSide="right"
                />
              </motion.div>
            </div>

            {/* Ticker de estadísticas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mt-12"
            >
              {HERO_STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={spring}
                  className="bg-slate-50 border border-slate-200 p-4 rounded-2xl border-l-4 shadow-sm"
                  style={{ borderLeftColor: stat.color }}
                >
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">{stat.label}</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN + WIDGET 1 ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-orange-600 rounded-full" />
                <h2 className="cc-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">Introducción — Fuego y pasto seco</h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>

              <motion.div id="mezclador" variants={fadeUp} transition={spring} className="my-8 scroll-mt-24">
                <DryGrassMixer />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ MÓDULO 01 · FUNDAMENTOS TEÓRICOS ══ */}
        <section id="fundamentos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="cc-mono text-xs font-bold text-orange-600 uppercase tracking-wider">Módulo 01 · Fundamentos Teóricos</span>
                <h2 className="cc-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  La Arquitectura de la Influencia & Economía de la Atención
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Basado en las tesis de <em>José Néstor Farhat</em>, <em>Lawrence Lessig</em> y <em>Carlos Saura García (Dialnet)</em>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {THEORY_CARDS.map((card) => (
                <div key={card.title} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: hexToRgba(card.color, 0.12), color: card.color }}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>

                  {card.list && (
                    <ul className="text-xs text-slate-600 space-y-2 font-medium">
                      {card.list.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.footer && (
                    <div
                      className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                        card.footerTone === 'emerald'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-semibold'
                          : 'bg-slate-100 border-slate-200 text-slate-700 font-mono'
                      }`}
                    >
                      {card.footerTone !== 'emerald' && <Quote className="w-3.5 h-3.5 text-orange-500 inline mr-1" />}
                      {card.footer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interacción técnica #1: Inspector de patrones oscuros */}
            <div className="bg-gradient-to-br from-white to-orange-50/40 p-6 sm:p-8 rounded-3xl border border-orange-200 shadow-sm">
              <div className="max-w-3xl space-y-3">
                <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-mono font-bold uppercase inline-block">
                  Interacción técnica #1
                </span>
                <h3 className="cc-fraunces text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-orange-600 shrink-0" /> Inspector Interactivo de Patrones Oscuros (Dark Patterns)
                </h3>
                <p className="text-sm text-slate-600">
                  Hacé clic sobre los elementos interactivos del smartphone simulado para descubrir la arquitectura cognitiva persuasiva detrás de la interfaz.
                </p>
              </div>

              <div className="mt-6">
                <DarkPatternInspector />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            {data.sections.map((sec, i) => {
              const visual = SECTION_VISUALS[i] || SECTION_VISUALS[0]
              const isEven = i % 2 === 0

              return (
                <motion.article
                  key={sec.heading}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={stagger}
                  className="relative overflow-hidden"
                >
                  <EditorialImageFrame
                    imageSrc={`/img/tematicas/caldos-de-cultivo/seccion-${i + 1}.webp`}
                    altText={sec.heading}
                    icon={visual.icon}
                    colorA={isEven ? FLAME : VIOLET}
                    colorB={isEven ? ROSE : AMBER}
                    label={visual.label}
                    source={visual.source}
                    sourceUrl={visual.sourceUrl}
                    floatSide={isEven ? 'right' : 'left'}
                  />

                  <div className="space-y-6">
                    <span className="cc-mono text-xs font-extrabold uppercase tracking-widest text-orange-700">
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2 className="cc-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-orange-50/80 border-l-4 border-orange-600 text-slate-900 font-bold italic text-base sm:text-lg">
                        <Quote className="w-6 h-6 text-orange-600 mb-2" />
                        "{sec.quote}"
                      </blockquote>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* ══ MÓDULO 02 · CALDOS DE CULTIVO, MICROTARGETING Y CÁMARAS DE ECO ══ */}
        <section id="microtargeting" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="cc-mono text-xs font-bold text-violet-600 uppercase tracking-wider">Módulo 02 · Algoritmos & Datos</span>
                <h2 className="cc-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Caldos de Cultivo, Microtargeting y Cámaras de Eco
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Basado en el caso <em>Cambridge Analytica (UNLP)</em> y la <em>Fabricación de la Duda (Dr. Julio Sal Paz — UNT)</em>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MODULE2_RESEARCH_CARDS.map((card) => {
                const isRose = card.boxTone === 'rose'
                return (
                  <div key={card.title} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${card.badgeColor}`}>{card.badge}</span>
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>

                    <div className={`p-4 rounded-2xl border space-y-2 ${isRose ? 'bg-rose-50/50 border-rose-200' : 'bg-cyan-50/50 border-cyan-200'}`}>
                      <span className={`text-xs font-bold block ${isRose ? 'text-rose-900' : 'text-cyan-900'}`}>{card.boxTitle}</span>
                      {card.boxItems && (
                        <div className={`text-xs space-y-1 font-mono ${isRose ? 'text-rose-800' : 'text-cyan-800'}`}>
                          {card.boxItems.map((item) => <div key={item}>{item}</div>)}
                        </div>
                      )}
                      {card.boxQuote && (
                        <p className={`text-xs leading-relaxed ${isRose ? 'text-rose-800' : 'text-cyan-800'}`}>{card.boxQuote}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center space-y-3 pt-4">
              <span className="cc-mono cc-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Interacción técnica #2 · en vivo
              </span>
              <h3 className="cc-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Cultura y algoritmo, en tiempo real</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                El grupo valida un código; el algoritmo observa la interacción y amplifica; la repetición normaliza. Movés el control y ves el circuito completo.
              </p>
            </div>
            <div id="simulador" className="scroll-mt-24">
              <EchoChamberSimulator />
            </div>
          </div>
        </section>

        {/* ══ 5 CASOS DE ESTUDIO ══ */}
        <section id="caso" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10 space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <span className="cc-mono text-xs font-bold uppercase tracking-widest text-amber-400">{data.caseStudy?.label}</span>
              </div>
              <h2 className="cc-fraunces text-3xl sm:text-5xl font-black text-white">{data.caseStudy?.title}</h2>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl font-extrabold leading-relaxed bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl">
                {data.caseStudy?.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {CASE_STUDIES.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  transition={spring}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{ background: hexToRgba(c.color, 0.16), color: '#fff' }}>
                      {c.label}
                    </span>
                    <c.icon className="w-6 h-6" style={{ color: c.color }} />
                  </div>
                  <h3 className="cc-fraunces text-xl sm:text-2xl font-black text-white">{c.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.description}</p>
                  <a
                    href={c.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                    style={{ color: c.color }}
                  >
                    {c.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ MÓDULO 03 · DEEPFAKES, IA GENERATIVA Y AUTODIAGNÓSTICO ERRÓNEO ══ */}
        <section id="deepfakes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="cc-mono text-xs font-bold text-rose-600 uppercase tracking-wider">Módulo 03 · Frontera Tecnológica</span>
                <h2 className="cc-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Deepfakes, IA Generativa y Autodiagnóstico Erróneo
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Estudios de <em>Villamar Suastegui et al. (2026 — Zenodo DOI)</em> y <em>Karen Borensztein (UBA 2024)</em>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {MODULE3_RESEARCH_CARDS.map((card) => (
                <div key={card.title} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: hexToRgba(card.color, 0.12), color: card.color }}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-mono text-[11px] font-bold inline-block">{card.badge}</span>
                  <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
                  <div className="p-3.5 rounded-xl text-xs font-medium leading-relaxed" style={{ background: hexToRgba(card.color, 0.08), border: `1px solid ${hexToRgba(card.color, 0.25)}`, color: FLAME_TEXT }}>
                    {card.footer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6 FACT-CHECK CHALLENGE ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="cc-mono cc-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Chequeo de mitos
              </span>
              <h2 className="cc-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Verdad o Mito Viral</h2>
            </div>
            <FactCheckChallenge />
          </div>
        </section>

        {/* ══ 7 DASHBOARD ESTADÍSTICO ══ */}
        <section id="estadisticas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="cc-mono text-xs font-bold text-orange-600 uppercase tracking-wider">Datos oficiales</span>
                <h2 className="cc-fraunces text-3xl sm:text-4xl font-black text-[#0F172A] mt-1">Dashboard de confianza mediática</h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">Datos empíricos de <em>UCM (2024)</em> y relevamientos sobre consumo de medios en la Generación Z.</p>
            </div>
            <StatsDashboard />
          </div>
        </section>

        {/* ══ 8 CITA DE CIERRE ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-orange-900 via-rose-950 to-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Quote className="w-12 h-12 text-orange-300 mx-auto opacity-80" />
            <h2 className="cc-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">"{data.closingQuote}"</h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ MATERIAL DE ESTUDIO (CARRUSEL SLIDES WEBP + INFOGRAFÍA WEBP) ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">

              <div className="text-center space-y-3">
                <span className="cc-mono cc-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Material pedagógico y recursos
                </span>
                <h2 className="cc-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">
                  Presentación en Slides e Infografía Visual
                </h2>
              </div>

              {data.pdfUrl && (
                <div className="space-y-4">
                  <h3 className="cc-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-orange-600" /> Presentación interactiva (12 diapositivas en WebP)
                  </h3>
                  <div className="w-full max-w-4xl mx-auto">
                    <WebpSlideCarousel
                      totalSlides={12}
                      slidesBasePath="/img/tematicas/caldos-de-cultivo/slides"
                      pdfDownloadUrl={data.pdfUrl}
                      title={data.title}
                      color={FLAME}
                    />
                  </div>
                </div>
              )}

              {data.infografiaUrl && (
                <div className="space-y-4">
                  <h3 className="cc-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Images className="w-5 h-5 text-amber-600" /> Infografía sintetizada
                  </h3>
                  <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 border-2 border-slate-200 flex justify-center items-center p-3 sm:p-6 min-h-[60vh]"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={data.infografiaUrl}
                      alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
                      className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-slate-900 font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-2xl">
                        <ZoomIn className="w-5 h-5 text-orange-600" /> Ver a pantalla completa (acercar y desplazar)
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ══ MÓDULO 05 · MINI-TEST DE INMUNIDAD DIGITAL ══ */}
        <section id="minitest" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200 scroll-mt-24">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="cc-mono text-xs font-bold text-amber-600 uppercase tracking-wider block">Módulo 05 · Autoevaluación</span>
              <h2 className="cc-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Mini-Test de Diagnóstico de Inmunidad Digital</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Basado en el marco operativo de Farhat: <strong>Pausar, Preguntar, Elegir</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50/30 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-sm">
              <DigitalImmunityMiniTest />
            </div>
          </div>
        </section>

        {/* ══ 9 FUENTES ACADÉMICAS ══ */}
        <section id="fuentes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-t border-slate-200 scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-600 shrink-0" />
                <h2 className="cc-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">
                  Fuentes académicas y enlaces de verificación
                </h2>
              </div>
              <span className="cc-mono text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {filteredCitations.length} / {ACADEMIC_CITATIONS.length} citas verificables
              </span>
            </div>

            <div className="relative max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={sourceQuery}
                onChange={(e) => setSourceQuery(e.target.value)}
                placeholder="Buscar autor, DOI o universidad..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCitations.map((cite) => {
                const CardTag = cite.url ? 'a' : 'div'
                return (
                  <CardTag
                    key={cite.title}
                    {...(cite.url ? { href: cite.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="cc-mono text-xs font-bold text-orange-600 block">{cite.author}</span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors">
                        {cite.title}
                      </h4>
                      <span className="text-xs text-slate-500 block">{cite.publication}</span>
                    </div>

                    {cite.stat && (
                      <div className="px-3 py-1.5 rounded-lg bg-orange-50/80 text-orange-950 font-mono text-xs font-extrabold border border-orange-200/60">
                        📊 {cite.stat}
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                      <span className="truncate pr-2">{cite.topic}</span>
                      {cite.url && <ExternalLink className="w-3.5 h-3.5 text-orange-600 shrink-0" />}
                    </div>
                  </CardTag>
                )
              })}

              {filteredCitations.length === 0 && (
                <p className="col-span-full text-center text-sm text-slate-500 py-8">
                  No se encontraron fuentes que coincidan con "{sourceQuery}".
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ══ 10 EVALUACIÓN INTERACTIVA (QUIZ) ══ */}
        <section id="evaluacion" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-10">
              <span className="cc-mono cc-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Diagnóstico de inmunidad digital
              </span>
              <h2 className="cc-fraunces text-3xl sm:text-4xl font-black text-[#0F172A]">Cuestionario de Comprensión</h2>
            </div>

            {!showResults ? (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="cc-mono text-xs font-bold text-orange-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="cc-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx
                    let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-orange-50 hover:border-orange-300'
                    if (isSelected) btnClass = 'bg-orange-600 border-orange-600 text-white font-bold shadow-md'

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIdx === 0}
                    className={`px-5 py-2.5 rounded-full text-xs font-black border border-slate-300 hover:bg-slate-100 disabled:pointer-events-none text-center ${currentQuestionIdx === 0 ? 'opacity-0' : 'opacity-100'}`}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="cc-cyber-btn mr-16 sm:mr-0 px-6 py-3 sm:py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer text-center"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-amber-400 mx-auto" />
                <h3 className="cc-fraunces text-2xl sm:text-3xl font-black">¡Cuestionario completado!</h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-orange-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button onClick={startQuiz} className="cc-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer">
                  <RotateCcw className="w-5 h-5" /> Volver a intentar
                </button>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* ══ LIGHTBOX INFOGRAFÍA ══ */}
      {lightboxOpen && data.infografiaUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <button onClick={zoomIn} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomIn className="w-5 h-5" />
            </button>
            <button onClick={zoomOut} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomOut className="w-5 h-5" />
            </button>
            <button onClick={resetZoom} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button onClick={closeLightbox} className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={lightboxAreaRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <img
              src={data.infografiaUrl}
              alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
              className="max-w-full max-h-full object-contain select-none transition-transform duration-100"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* ══ FLOATING SCROLL TO TOP ══ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-2xl border border-orange-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
