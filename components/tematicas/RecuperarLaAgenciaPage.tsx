'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Copy,
  Eye,
  EyeOff,
  ExternalLink,
  Gavel,
  GraduationCap,
  HeartHandshake,
  Images,
  Info,
  Layers,
  Lock,
  Quote,
  RefreshCw,
  Scale,
  ScanEye,
  ShieldAlert,
  Sparkles,
  Target,
  Terminal,
  Unlock,
  UserCheck,
  Users,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'

import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Color tokens: "Recuperar la agencia" (autonomía / brújula / tecnológico claro) ───
const EMERALD = '#059669'
const EMERALD_TEXT = '#047857'
const INDIGO = '#4F46E5'
const INDIGO_TEXT = '#3730A3'
const CYAN = '#0891B2'
const CYAN_TEXT = '#155E75'
const ROSE = '#E11D48'
const ROSE_TEXT = '#9F1239'
const VIOLET = '#7C3AED'
const VIOLET_TEXT = '#5B21B6'
const AMBER = '#D97706'
const AMBER_TEXT = '#92400E'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  .ra-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .ra-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .ra-editorial-wrap-right { float: right; margin-left: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
    .ra-editorial-wrap-left { float: left; margin-right: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
  }

  .ra-badge {
    background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(79, 70, 229, 0.1));
    border: 1px solid rgba(5, 150, 105, 0.28);
    color: #047857;
  }
  .ra-btn {
    background: linear-gradient(135deg, #059669, #4F46E5);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(5, 150, 105, 0.35);
    transition: all 0.25s ease;
  }
  .ra-btn:hover { transform: translateY(-2px); box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.45); }

  @keyframes raPulse {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  .ra-pulse { animation: raPulse 2.6s ease-in-out infinite; }

  .ra-dots {
    background-image: radial-gradient(circle, rgba(5, 150, 105, 0.14) 1.5px, transparent 1.5px);
    background-size: 26px 26px;
  }
`

// ─── EditorialImageFrame (mismo patrón que otras temáticas del grupo) ───
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
        floatSide === 'left' ? 'ra-editorial-wrap-left' : 'ra-editorial-wrap-right'
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
              <span className="ra-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
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
          <ExternalLink className="w-3 h-3 text-emerald-400 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Hero stats ───
const HERO_STATS = [
  { label: 'Autonomía corporal limitada', value: '55%', color: EMERALD, detail: 'De las mujeres en países en desarrollo no goza de autonomía plena sobre su propia salud y cuerpo (UNFPA).' },
  { label: 'Patrones oscuros en apps', value: '97%', color: ROSE, detail: 'De las plataformas populares implementa al menos un patrón oscuro (temporizadores falsos, scroll infinito, confirmshaming).' },
  { label: 'Alcanza el Estadio 6 (Kohlberg)', value: '5%', color: INDIGO, detail: 'Solo una minoría de los adultos estabiliza el razonamiento moral postconvencional — principios éticos universales.' },
]

// ─── Módulo 01: Cimientos filosóficos y psicológicos ───
const FOUNDATION_CARDS = [
  {
    icon: Gavel,
    color: INDIGO,
    tag: 'Filosofía moral',
    title: 'Kant y la autolegislación',
    body: 'Para Immanuel Kant, la autonomía es la voluntad que se da a sí misma su propia ley. Distingue el imperativo categórico —un mandato válido por sí mismo, basado en el respeto a la ley moral— del imperativo hipotético, condicionado a un fin externo o deseo (actuar bien solo para evitar una sanción). La autonomía es la base de la dignidad humana; sin ella, el valor de una persona no superaría al de una planta o un insecto.',
  },
  {
    icon: Layers,
    color: EMERALD,
    tag: 'Psicología del desarrollo',
    title: 'Piaget y la maduración moral',
    body: 'Jean Piaget identificó el tránsito del razonamiento heterónomo —reglas absolutas, invariables, emanadas de una autoridad externa que se obedece por temor al castigo— hacia el razonamiento autónomo, donde las normas son fruto del acuerdo mutuo, la reciprocidad y la aceptación consciente de su sentido.',
  },
  {
    icon: Scale,
    color: CYAN,
    tag: 'Estadios del desarrollo',
    title: 'Kohlberg y los seis estadios',
    body: 'Lawrence Kohlberg propuso seis estadios en tres niveles: Preconvencional (obediencia al castigo; intercambio instrumental), Convencional (conformidad grupal; sistema social y deber) y Postconvencional (contrato social y derechos individuales; principios éticos universales).',
    footer: 'Solo un 5% de los adultos alcanza de forma estable el Estadio 6 — la mayoría queda expuesta a arquitecturas que apelan a estadios más básicos y gregarios.',
  },
  {
    icon: Users,
    color: VIOLET,
    tag: 'Sociología estructural',
    title: 'Bourdieu vs. Giddens',
    body: 'Pierre Bourdieu argumenta que el habitus —esquemas interiorizados por la trayectoria social— limita la agencia. Anthony Giddens responde con la teoría de la estructuración: las estructuras sociales son a la vez el medio y el resultado de la conducta reflexiva humana, no una jaula fija.',
    link: { label: 'Ver análisis de Juan Barri (2024, SciELO)', url: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-64422024000100115' },
  },
]

// ─── Módulo 02: Agencia vs. Autonomía ───
const AGENCY_VS_AUTONOMY = [
  {
    key: 'agencia',
    label: 'LA AGENCIA',
    tag: 'Capacidad ontológica de actuar',
    color: CYAN,
    icon: Sparkles,
    body: 'Es la capacidad general de ser un agente: iniciar acciones intencionadas en el mundo físico o digital. Un individuo tiene agencia incluso si sus actos están fuertemente condicionados por hábitos o manipulación externa.',
    points: [
      { label: 'Definición simple', text: '"Capacidad de hacer cosas."' },
      { label: 'Giddens & Bourdieu', text: 'Acción inserta en estructuras o habitus.' },
      { label: 'Riesgo', text: 'Puede ejercerse sin autogobierno, reaccionando al entorno.' },
    ],
  },
  {
    key: 'autonomia',
    label: 'LA AUTONOMÍA',
    tag: 'Autogobierno y razón práctica',
    color: INDIGO,
    icon: Scale,
    body: 'Del griego autos (mismo) y nomos (ley): la capacidad de ser "ley para uno mismo", actuar según razones, principios éticos y motivaciones autorreflexivas auténticas, no por coerción o inercia.',
    points: [
      { label: 'Definición kantiana', text: '"Actuar según razones que uno mismo suscribe."' },
      { label: 'Ryan & Deci (SDT)', text: 'Motivación intrínseca y regulación integrada.' },
      { label: 'Requisito', text: 'Ausencia de manipulación deliberada o engaño.' },
    ],
  },
]

// ─── Módulo 02: Necesidades SDT ───
const SDT_NEEDS = [
  { key: 'autonomia', label: 'Autonomía', desc: 'Sentirse autor de las propias acciones.', icon: Compass, color: EMERALD },
  { key: 'competencia', label: 'Competencia', desc: 'Sentirse eficaz ante los retos.', icon: Target, color: CYAN },
  { key: 'pertenencia', label: 'Pertenencia', desc: 'Sentirse conectado y valorado por otros.', icon: HeartHandshake, color: VIOLET },
]

// ─── Módulo 03: Nudges vs. Patrones oscuros ───
const NUDGE_VS_DARK: { concept: string; def: string; examples: string; tone: 'emerald' | 'rose' }[] = [
  {
    concept: 'Diseño persuasivo (Nudges)',
    def: 'Estímulos que orientan la conducta hacia beneficios para el usuario sin eliminar opciones.',
    examples: 'Recordatorios de salud, opciones de ahorro por defecto, alertas de tiempo de uso.',
    tone: 'emerald',
  },
  {
    concept: 'Patrones oscuros',
    def: 'Diseños engañosos que llevan al usuario a tomar decisiones contra su propio interés.',
    examples: 'Laberintos para cancelar suscripciones, botones de "aceptar" resaltados frente a opciones de privacidad ocultas.',
    tone: 'rose',
  },
]

// ─── Interacción técnica: Simulador "Pausar, Preguntar, Elegir" ───
const AGENCY_SCENARIOS = [
  {
    title: 'Redes sociales: scroll infinito y notificación roja',
    architecture: 'Diseño persuasivo configurado para maximizar el tiempo de permanencia mediante recompensas variables (efecto tragaperras).',
    impulsive: 'Hacer clic automáticamente en la burbuja roja, consumir 40 minutos de video sugerido y sentir agotamiento sin haber resuelto nada.',
    agent: 'Aplicar el protocolo: detener el dedo por 3 segundos, cuestionar la utilidad del impulso y salir de la app.',
  },
  {
    title: 'E-commerce: contador de urgencia falsa ("quedan 2 unidades")',
    architecture: 'Patrón oscuro diseñado para inducir la heurística de escasez y evitar la ponderación racional del valor.',
    impulsive: 'Ingresar apresuradamente los datos de pago por temor a perder la supuesta oportunidad.',
    agent: 'Pausar la compra 24 horas, investigar si la necesidad es real o inducida por la interfaz, y contrastar precios.',
  },
  {
    title: 'Algoritmo de noticias: recomendación sensacionalista',
    architecture: 'Bucle de retroalimentación algorítmica optimizado para gatillar indignación moral y polarización afectiva.',
    impulsive: 'Compartir la noticia de inmediato, alimentando la desinformación en cadenas de chat o comentarios impulsivos.',
    agent: 'Hacer lectura lateral, verificar la fuente original, contrastar con datos oficiales y elegir no difundir el rumor.',
  },
]

const SIMULATOR_STEPS = [
  { id: 'pause', label: '1. Pausar', color: EMERALD, headline: 'Pausa cognitiva — interrumpir la inercia', text: 'Soltás la pantalla durante tres segundos. Creás una hendidura de espacio entre el estímulo diseñado por la interfaz y tu respuesta fisiológica.', note: 'Acción: respirar hondo, desacoplar el movimiento automático del pulgar.' },
  { id: 'ask', label: '2. Preguntar', color: INDIGO, headline: 'Cuestionamiento reflexivo — interrogar al diseño', text: '¿Qué necesidad real busca resolver esta notificación o urgencia? ¿A quién beneficia que haga este clic de inmediato?', note: 'Análisis: distinguir entre un motivo propio legítimo y una necesidad fabricada por la interfaz.' },
  { id: 'choose', label: '3. Elegir', color: CYAN, headline: 'Elección soberana — actuar como agente', text: '', note: '' },
] as const

function PauseAskChooseSimulator() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [step, setStep] = useState<'pause' | 'ask' | 'choose'>('pause')
  const scenario = AGENCY_SCENARIOS[scenarioIdx]
  const stepData = SIMULATOR_STEPS.find((s) => s.id === step)!

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-5 sm:p-8 border-2 border-emerald-500/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="ra-mono text-emerald-400 text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> Laboratorio interactivo de agencia
            </span>
            <h3 className="ra-fraunces text-xl sm:text-2xl font-black text-white mt-1">Simulador "Pausar, Preguntar, Elegir"</h3>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl flex-wrap">
            {AGENCY_SCENARIOS.map((sc, i) => (
              <button
                key={sc.title}
                type="button"
                onClick={() => { setScenarioIdx(i); setStep('pause') }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  scenarioIdx === i ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Escenario {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-xs text-slate-400 font-mono">Dilema digital seleccionado:</span>
              <h4 className="text-base font-bold text-emerald-300 mt-1">{scenario.title}</h4>
            </div>
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                <ShieldAlert className="w-4 h-4" /> Arquitectura persuasiva (Lessig)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{scenario.architecture}</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-800/50 rounded-2xl p-5 sm:p-6 border border-slate-700/80 space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Protocolo Farhat: 3 verbos clave</span>
              <span className="text-xs text-emerald-400 font-mono">Paso actual: {step.toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {SIMULATOR_STEPS.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setStep(st.id)}
                  className={`py-2 px-2 sm:px-3 rounded-xl border text-[11px] sm:text-xs font-bold font-mono transition-all cursor-pointer ${
                    step === st.id ? 'bg-slate-700 shadow-md' : 'border-slate-700 text-slate-500 hover:text-slate-300'
                  }`}
                  style={step === st.id ? { borderColor: st.color, color: st.color } : undefined}
                >
                  {st.label}
                </button>
              ))}
            </div>

            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 space-y-3 min-h-[140px]">
              {step === 'choose' ? (
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold" style={{ color: CYAN }}>ELECCIÓN SOBERANA (actuar como agente)</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Acción recomendada:</strong> {scenario.agent}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 p-2 rounded border border-emerald-800/50">
                    ✓ Agencia recuperada: recuperaste el control deliberado de tu atención.
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold" style={{ color: stepData.color }}>{stepData.headline.toUpperCase()}</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{stepData.text}</p>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-800 p-2 rounded border border-slate-700">
                    "{stepData.note}"
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Módulo 04: Poliedro UNESCO ───
const POLIEDRO_CARAS = [
  { label: 'Alfabetización mediática e informacional', desc: 'Analizar intereses detrás de los contenidos.' },
  { label: 'Identidad y huella digital', desc: 'Gestión consciente de la historia personal en la red.' },
  { label: 'Privacidad y seguridad', desc: 'Protección de datos y comprensión de la vigilancia.' },
  { label: 'Ética y convivencia', desc: 'Responsabilidad ante el rostro del otro (Levinas).' },
  { label: 'Participación y democracia', desc: 'Uso del espacio digital para la construcción del bien común.' },
  { label: 'Consumo y economía digital', desc: 'Comprensión de los modelos de negocio y patrones oscuros.' },
  { label: 'IA y algoritmos', desc: 'Entender la lógica de la automatización y sus sesgos.' },
]

// ─── Mini-test: Índice de agencia personal ───
const AGENCY_QUIZ: { id: string; question: string; category: string; options: { text: string; score: number }[] }[] = [
  {
    id: 'q1',
    question: 'Cuando abrís tu dispositivo móvil para revisar un mensaje urgente, ¿qué sucede habitualmente?',
    category: 'Resistencia algorítmica (Farhat)',
    options: [
      { text: 'Abro el mensaje, pero termino navegando minutos en recomendaciones o feeds que no planeaba ver.', score: 1 },
      { text: 'A veces caigo en notificaciones secundarias, pero suelo recordar mi objetivo inicial tras un instante.', score: 2 },
      { text: 'Suelen captar mi atención las alertas rojas, aunque logro cerrar la app al terminar mi mensaje.', score: 3 },
      { text: 'Ejecuto únicamente la tarea prevista y cierro la pantalla conscientemente sin seguir recomendaciones.', score: 4 },
    ],
  },
  {
    id: 'q2',
    question: 'En tus decisiones diarias importantes (estudio, trabajo, consumos), ¿cómo evaluás tus motivos?',
    category: 'Autonomía decisional (Kant)',
    options: [
      { text: 'Siento que elijo lo que la mayoría o las tendencias sociales/algorítmicas imponen como correcto.', score: 1 },
      { text: 'Tomo decisiones por impulso o evasión de la presión externa sin analizar motivaciones profundas.', score: 2 },
      { text: 'Tengo claras mis preferencias, aunque con frecuencia cedo ante la comodidad o la persuasión del entorno.', score: 3 },
      { text: 'Tomo decisiones basadas en principios éticos propios, autorreflexión deliberada y autonomía legítima.', score: 4 },
    ],
  },
  {
    id: 'q3',
    question: 'Según la Teoría de la Autodeterminación, ¿cuán satisfechas percibís tus tres necesidades básicas?',
    category: 'Satisfacción psicológica (Ryan & Deci)',
    options: [
      { text: 'Me siento pasivo/a o alienado/a; las circunstancias externas controlan por completo mi rutina.', score: 1 },
      { text: 'Siento competencia en tareas diarias, pero me falta autonomía de elección o conexión con otros.', score: 2 },
      { text: 'Tengo buen nivel de autonomía e integración, aunque el estrés ambiental merma mi motivación intrínseca.', score: 3 },
      { text: 'Alto equilibrio: actúo con voluntad propia, me siento capaz y mantengo vínculos interpersonales auténticos.', score: 4 },
    ],
  },
  {
    id: 'q4',
    question: 'Ante entornos diseñados con patrones oscuros (temporizadores falsos, scroll infinito, botones engañosos):',
    category: 'Arquitectura y libertad (Lessig)',
    options: [
      { text: 'No percibo cuando la interfaz me manipula y con frecuencia realizo acciones o compras no planificadas.', score: 1 },
      { text: 'Percibo la presión, pero la incomodidad de rechazar o buscar configuraciones ocultas me hace ceder.', score: 2 },
      { text: 'Identifico los patrones oscuros y evito la trampa, aunque me genera fatiga cognitiva constante.', score: 3 },
      { text: 'Aplico filtros activos: pauso la interacción, cuestiono el diseño y tomo la ruta de mayor agencia.', score: 4 },
    ],
  },
  {
    id: 'q5',
    question: 'Ante experiencias traumáticas o situaciones de alta vulnerabilidad emocional:',
    category: 'Recuperación de agencia (Martínez Ruiz)',
    options: [
      { text: 'Siento parálisis total o pérdida completa del control sobre el relato de mi propia vida.', score: 1 },
      { text: 'Me resulta difícil nombrar lo que me ocurre y suelo reaccionar de forma automática e incoherente.', score: 2 },
      { text: 'Busco espacios de escucha o reflexión, aunque la reconstrucción de mi agencia es un proceso errático.', score: 3 },
      { text: 'Utilizo el diálogo, la elaboración narrativa y la escucha reflexiva para recuperar la capacidad de actuar.', score: 4 },
    ],
  },
  {
    id: 'q6',
    question: 'Al enfrentar dilemas o decisiones complejas de la vida cotidiana:',
    category: 'Toma de decisiones (Lantegi Batuak)',
    options: [
      { text: 'Dejo que otras personas o la inercia decidan por mí para evitar la ansiedad del dilema.', score: 1 },
      { text: 'Elijo la primera opción disponible sin buscar datos objetivos ni contemplar alternativas.', score: 2 },
      { text: 'Recopilo alguna información y sopeso pros y contras, aunque la ejecución suele demorarse.', score: 3 },
      { text: 'Sigo un proceso metódico: identifico el dilema, busco datos, alineo con valores y asumo la elección.', score: 4 },
    ],
  },
]

function AgencyIndexMiniTest() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const score = useMemo(() => Object.values(answers).reduce((a, b) => a + b, 0), [answers])
  const maxScore = AGENCY_QUIZ.length * 4
  const percentage = Math.round((score / maxScore) * 100)

  const tier = useMemo(() => {
    if (percentage >= 80) {
      return { title: 'Agencia operativa elevada & autonomía crítica', badge: 'Nivel soberano', tone: 'bg-emerald-100 text-emerald-900 border-emerald-300', desc: 'Demostrás una sólida capacidad de autogobierno (Kant), resistencia a arquitecturas persuasivas (Lessig/Farhat) y alineación con tus necesidades intrínsecas (SDT).' }
    }
    if (percentage >= 55) {
      return { title: 'Agencia intermedia con interferencia algorítmica', badge: 'Nivel funcional', tone: 'bg-cyan-100 text-cyan-900 border-cyan-300', desc: 'Contás con criterios propios para actuar, pero las arquitecturas de persuasión digital y los sesgos del entorno restringen de forma recurrente la ejecución de tu autonomía plena.' }
    }
    return { title: 'Susceptibilidad a coerción & agencia erosionada', badge: 'Nivel en riesgo', tone: 'bg-rose-100 text-rose-900 border-rose-300', desc: 'Experimentás altos niveles de automatismo o control externo. Es crucial reconfigurar tu entorno digital y ejercitar la pausa reflexiva: pausar, preguntar, elegir.' }
  }, [percentage])

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="ra-mono text-xs font-bold text-slate-400 uppercase">Resultado de verificación</span>
            <h3 className="ra-fraunces text-xl sm:text-2xl font-black text-slate-900 mt-1">{tier.title}</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-3xl font-black text-slate-900 font-mono">{percentage}%</div>
              <span className="text-xs font-mono text-slate-500">{score} / {maxScore} pts</span>
            </div>
            <span className={`px-4 py-2 rounded-2xl text-xs font-bold border font-mono ${tier.tone}`}>{tier.badge}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-600 shrink-0" /> Dictamen cualitativo de agencia
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">{tier.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-mono font-bold text-indigo-600">Vector A: autonomía decisional</div>
            <p className="text-[11px] text-slate-600">Si tus elecciones emanan de reflexiones éticas (Kant) o de impulsos de evasión.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-mono font-bold text-emerald-600">Vector B: resistencia algorítmica</div>
            <p className="text-[11px] text-slate-600">Tu capacidad de pausar frente a patrones oscuros y el scroll infinito (Farhat).</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-mono font-bold text-cyan-700">Vector C: necesidades innatas (SDT)</div>
            <p className="text-[11px] text-slate-600">Satisfacción de autonomía, competencia y relaciones (Ryan & Deci).</p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => { setAnswers({}); setSubmitted(false) }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reintentar test
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">
      <div className="space-y-5">
        {AGENCY_QUIZ.map((q, qIdx) => (
          <div key={q.id} className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="ra-mono text-[11px] font-bold text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                {q.category}
              </span>
              <span className="ra-mono text-xs text-slate-400">Pregunta {qIdx + 1} de {AGENCY_QUIZ.length}</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">{q.question}</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {q.options.map((opt) => {
                const isSelected = answers[q.id] === opt.score
                return (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                    className={`p-4 rounded-xl text-left text-xs leading-relaxed transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected ? 'bg-indigo-600 text-white font-semibold shadow-md border border-indigo-600' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'border-white bg-white' : 'border-slate-300'}`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                    </div>
                    <span>{opt.text}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-3">
        <span className="ra-mono text-xs text-slate-500">
          Respondidas: {Object.keys(answers).length} / {AGENCY_QUIZ.length}
        </span>
        <button
          type="button"
          disabled={Object.keys(answers).length < AGENCY_QUIZ.length}
          onClick={() => setSubmitted(true)}
          className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg cursor-pointer ${
            Object.keys(answers).length === AGENCY_QUIZ.length
              ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" /> Calcular índice de agencia
        </button>
      </div>
    </div>
  )
}

// ─── Toolkit decisional: matriz Lantegi Batuak ───
function DecisionToolkit() {
  const [step, setStep] = useState(1)
  const [problem, setProblem] = useState('')
  const [options, setOptions] = useState(['', ''])
  const [chosen, setChosen] = useState('')

  function reset() {
    setStep(1)
    setProblem('')
    setOptions(['', ''])
    setChosen('')
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Matriz práctica de toma de buenas decisiones</h3>
          <p className="text-xs text-slate-500">Paso a paso según el manual de lectura fácil de Lantegi Batuak.</p>
        </div>
        <span className="ra-mono text-xs bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-200">
          Paso {step} de 4
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <label className="block text-xs font-bold uppercase font-mono text-slate-700">
            Paso 1: identificá con claridad el dilema o decisión pendiente
          </label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Ejemplo: debo decidir si aceptar una oferta de trabajo que me exige más horas de pantalla, o mantener mi empleo actual…"
            className="w-full h-28 p-4 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
          />
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!problem.trim()}
              onClick={() => setStep(2)}
              className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 disabled:opacity-50 transition-colors cursor-pointer"
            >
              Siguiente: alternativas
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block text-xs font-bold uppercase font-mono text-slate-700">
            Paso 2: definí las opciones disponibles
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((i) => (
              <div key={i}>
                <span className="ra-mono text-xs text-slate-500">Opción {i === 0 ? 'A' : 'B'}:</span>
                <input
                  type="text"
                  value={options[i]}
                  onChange={(e) => {
                    const next = [...options]
                    next[i] = e.target.value
                    setOptions(next)
                  }}
                  placeholder={i === 0 ? 'Ejemplo: cambiar de empleo' : 'Ejemplo: permanecer y negociar salario'}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm mt-1 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => setStep(1)} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer">Atrás</button>
            <button
              type="button"
              disabled={!options[0] || !options[1]}
              onClick={() => setStep(3)}
              className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 disabled:opacity-50 transition-colors cursor-pointer"
            >
              Siguiente: alineación con valores
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-xs font-bold uppercase font-mono text-slate-700">
            Paso 3: evaluación de motivación intrínseca (SDT)
          </label>
          <p className="text-xs text-slate-500">
            ¿Cuál de estas dos opciones satisface en mayor medida tus valores personales, tu salud psíquica y tus relaciones auténticas?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setChosen(opt)}
                className={`p-4 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  chosen === opt ? 'border-violet-600 bg-violet-50 font-bold text-violet-900 shadow-xs' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="ra-mono text-violet-600 text-[10px] block uppercase">Opción {i === 0 ? 'A' : 'B'}</span>
                {opt}
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => setStep(2)} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer">Atrás</button>
            <button
              type="button"
              disabled={!chosen}
              onClick={() => setStep(4)}
              className="px-6 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 disabled:opacity-50 transition-colors cursor-pointer"
            >
              Finalizar matriz
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 ra-mono text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" /> Hoja de decisión agencial generada
          </div>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 font-mono">Problema analizado:</span>
              <p className="text-slate-200 font-medium mt-0.5">{problem}</p>
            </div>
            <div className="pt-2 border-t border-slate-800">
              <span className="text-slate-400 font-mono">Elección deliberada soberana:</span>
              <p className="text-cyan-300 font-bold text-sm mt-0.5">{chosen}</p>
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center flex-wrap gap-2">
            <button type="button" onClick={reset} className="text-xs text-slate-400 hover:text-white underline font-mono cursor-pointer">
              Crear nueva decisión
            </button>
            <span className="text-[11px] text-slate-500 font-mono">Metodología Lantegi Batuak & SDT</span>
          </div>
        </div>
      )}
    </div>
  )
}

const WRAP_ITEMS = [
  { title: '1. Mantener la rutina', desc: 'Definir hábitos diarios no negociables: sueño, desconexión digital de 2 horas, ejercicio.' },
  { title: '2. Identificar desencadenantes', desc: 'Reconocer alertas tempranas: ansiedad al mirar redes sociales, fatiga por sobreinformación.' },
  { title: '3. Plan de acción personal', desc: 'Establecer previamente qué hacer ante un episodio de coerción emocional o parálisis.' },
]

// ─── Fuentes académicas y legales ───
interface Citation {
  id: string
  type: string
  title: string
  author: string
  summary: string
  keyConcept: string
  link?: string
  linkAnchor?: string
}

const SOURCES: Citation[] = [
  {
    id: 'farhat',
    type: 'Conferencia magistral',
    title: 'Libres Bajo Influencia: Subculturas Digitales, Algoritmos y Ciudadanía',
    author: 'José Néstor Farhat',
    summary: 'Analiza la paradoja de la libertad digital. Basado en Lawrence Lessig ("code is law"), demuestra cómo el diseño persuasivo y los patrones oscuros condicionan nuestras elecciones. Propone el protocolo cívico de tres pasos: pausar, preguntar, elegir.',
    keyConcept: 'Arquitectura persuasiva, desorden informativo, agencia pedagógica.',
    link: 'https://www.unesco.org/es/media-information-literacy',
    linkAnchor: 'UNESCO Media & Information Literacy Hub',
  },
  {
    id: 'sdt',
    type: 'Teoría psicológica central',
    title: 'La Teoría de la Autodeterminación y la facilitación de la motivación intrínseca',
    author: 'Richard M. Ryan & Edward L. Deci — University of Rochester',
    summary: 'Investigación canónica que demuestra que los seres humanos requieren tres necesidades psicológicas innatas (autonomía, competencia y relaciones) para el bienestar y la motivación intrínseca.',
    keyConcept: 'Motivación autónoma vs. controlada, bienestar psicológico.',
    link: 'https://selfdeterminationtheory.org/the-theory/',
    linkAnchor: 'Portal oficial Self-Determination Theory',
  },
  {
    id: 'sep',
    type: 'Filosofía moral y epistemología',
    title: 'Personal Autonomy — Autonomía kantiana vs. agencia',
    author: 'Stanford Encyclopedia of Philosophy & Robert Audi / Immanuel Kant',
    summary: 'Distingue metódicamente entre agencia (capacidad ontológica de actuar) y autonomía (capacidad de autogobernarse según razones y principios reflexivos propios).',
    keyConcept: 'Autogobierno, agente moral, razón práctica.',
    link: 'https://plato.stanford.edu/entries/personal-autonomy/',
    linkAnchor: 'Stanford Encyclopedia of Philosophy',
  },
  {
    id: 'barri',
    type: 'Sociología estructural',
    title: 'La agencia en la sociología de Pierre Bourdieu y Anthony Giddens',
    author: 'Juan Barri (2024) — SciELO México / Ideas y Valores',
    summary: 'Examina la dialéctica entre estructura social y acción humana. Contrasta el habitus estructurante de Bourdieu con la teoría de la estructuración y la reflexividad de Giddens.',
    keyConcept: 'Habitus, estructuración, dualidad de la estructura.',
    link: 'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-64422024000100115',
    linkAnchor: 'Artículo SciELO México',
  },
  {
    id: 'martinez',
    type: 'Psicoanálisis y teoría crítica',
    title: 'El trauma o en busca de la agencia perdida',
    author: 'Rosaura Martínez Ruiz (2023) — Ideas y Valores / UNAM',
    summary: 'Explora cómo la violencia traumática colapsa la agencia psíquica y cómo la reconstrucción narrativa y la escucha permiten reconstituir la capacidad de actuar en el sujeto.',
    keyConcept: 'Trauma, relato, escucha psicoanalítica, agencia restaurada.',
    link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8885614',
    linkAnchor: 'Ficha académica Dialnet',
  },
  {
    id: 'reachlink',
    type: 'Salud mental y autoconocimiento',
    title: 'Control coercitivo: por qué el abuso psicológico permanece oculto',
    author: 'ReachLink Mental Health & Clinical Research',
    summary: 'Analiza las micro-regulaciones invisibles que merman la capacidad de decisión de una persona en entornos domésticos o de alta manipulación interpersonal.',
    keyConcept: 'Micro-regulaciones, aislamiento, pérdida de autonomía.',
    link: 'https://www.reachlink.com/es/autocomprobacion/',
    linkAnchor: 'Evaluación ReachLink Mental Health',
  },
  {
    id: 'unfpa',
    type: 'Derechos humanos y salud reproductiva',
    title: 'Los derechos reproductivos son derechos humanos: autonomía corporal',
    author: 'UNFPA América Latina & Instituto Interamericano de Derechos Humanos',
    summary: 'Fundamenta la autonomía corporal como derecho humano supremo e inalienable. Contempla datos mundiales sobre libertad de decisión sobre el propio cuerpo.',
    keyConcept: 'Autonomía corporal, autodeterminación, marco de DDHH.',
    link: 'https://lac.unfpa.org/en/topics/sexual-and-reproductive-health',
    linkAnchor: 'UNFPA América Latina y el Caribe',
  },
  {
    id: 'wrap',
    type: 'Autogestión de la salud mental',
    title: 'Manual para la recuperación y la autogestión del bienestar (WRAP)',
    author: "Activa't per la Salut Mental & Activament Catalunya Associació",
    summary: 'Guía práctica para construir un plan de bienestar autogestionado, identificando señales de alerta y estrategias proactivas para sostener la autonomía personal.',
    keyConcept: 'WRAP, autogestión del bienestar, empoderamiento.',
    link: 'https://www.activatperlasalutmental.org',
    linkAnchor: "Portal Activa't per la Salut Mental",
  },
]

function SourceCard({ source }: { source: Citation }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    const text = `${source.title} - ${source.author}${source.link ? ` [Enlace: ${source.link}]` : ''}`
    navigator.clipboard?.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-bold border border-slate-200">
            {source.type}
          </span>
          {source.link && <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />}
        </div>
        <h4 className="font-bold text-slate-900 text-base leading-snug">{source.title}</h4>
        <p className="text-xs font-semibold text-emerald-700">{source.author}</p>
        <p className="text-xs text-slate-600 leading-relaxed">{source.summary}</p>
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 font-mono">
          <strong>Concepto clave:</strong> {source.keyConcept}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
        {source.link ? (
          <a href={source.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 hover:underline">
            <span>{source.linkAnchor}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : <span />}

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors cursor-pointer"
        >
          {copied ? (<><Check className="w-3 h-3 text-emerald-600" /> Copiado</>) : (<><Copy className="w-3 h-3" /> Copiar cita</>)}
        </button>
      </div>
    </div>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

export function RecuperarLaAgenciaPage() {
  const data = getLibresSubtopicBySlug('recuperar-la-agencia')!
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

  const [openFoundation, setOpenFoundation] = useState<Set<number>>(new Set([0]))
  function toggleFoundation(i: number) {
    setOpenFoundation((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const localFadeUp = reducedMotion ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } } : fadeUp

  if (!data) return null

  return (
    <>
      <style>{STYLES}</style>
      <Navbar />

      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-cyan-500 to-indigo-600 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">

        {/* ══ 1 HERO ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 ra-dots opacity-60 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={localFadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                  <span className="ra-mono ra-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                    // {data.category}
                  </span>
                  <span className="ra-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    Pluralismo teórico & evidencia estadística
                  </span>
                </motion.div>

                <motion.h1 variants={localFadeUp} transition={spring} className="ra-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.06]">
                  {data.title}
                </motion.h1>

                <motion.p variants={localFadeUp} transition={spring} className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold leading-relaxed">
                  {data.description}
                </motion.p>

                <motion.div variants={localFadeUp} transition={spring} className="pt-2">
                  <span className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-3">
                    Marcos teóricos y autores citados:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.authors.map((author) => (
                      <span key={author} className="px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-sm">
                        {author}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={localFadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                  <a href="#simulador" className="ra-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                    <Compass className="w-5 h-5" /> Probar el simulador de agencia
                  </a>
                  <a href="#diagnostico" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base border border-slate-300 hover:bg-slate-100 text-slate-800 transition-all">
                    Hacer el mini-test <Target className="w-5 h-5 text-emerald-600" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                <EditorialImageFrame
                  imageSrc="/img/tematicas/recuperar-la-agencia/hero.webp"
                  altText="Recuperar la agencia: autonomía frente a la persuasión digital"
                  icon={Compass}
                  colorA={EMERALD}
                  colorB={INDIGO}
                  label="Brújula de la agencia"
                  source="José Néstor Farhat · Libres Bajo Influencia"
                  sourceUrl="https://josefarhat.com"
                  floatSide="right"
                />
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mt-12">
              {HERO_STATS.map((stat) => (
                <motion.div key={stat.label} variants={localFadeUp} transition={spring} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: stat.color }}>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">{stat.label}</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
              <motion.div variants={localFadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-emerald-600 rounded-full" />
                <h2 className="ra-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">Introducción — La agencia como construcción</h2>
              </motion.div>
              <motion.p variants={localFadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>
              <motion.div variants={localFadeUp} transition={spring} className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-emerald-600 shadow-sm">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  La autonomía no es un constructo teórico de manual: es el eje estratégico de la responsabilidad individual y la piedra angular de la dignidad humana. Sin esta facultad, el ser humano queda reducido a una entidad biológica reactiva, despojada de su capacidad para dotar de sentido moral a su existencia.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ MÓDULO 01 · CIMIENTOS FILOSÓFICOS Y PSICOLÓGICOS ══ */}
        <section id="fundamentos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="ra-mono text-xs font-bold text-indigo-600 uppercase tracking-wider">Módulo 01 · Fundamentos</span>
                <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Cimientos Filosóficos y Psicológicos de la Autonomía
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Kant, Piaget, Kohlberg, Bourdieu y Giddens: cómo se construye —y se limita— la capacidad de autogobierno.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {FOUNDATION_CARDS.map((card, i) => {
                const isOpen = openFoundation.has(i)
                return (
                  <div key={card.title} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFoundation(i)}
                      className="w-full flex items-start gap-4 p-6 text-left cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: hexToRgba(card.color, 0.12), color: card.color }}>
                        <card.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="ra-mono text-[11px] font-bold uppercase tracking-wider" style={{ color: card.color }}>{card.tag}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{card.title}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform mt-2 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                          <div className="px-6 pb-6 space-y-3">
                            <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
                            {card.footer && (
                              <div className="p-3.5 rounded-xl text-xs leading-relaxed font-semibold" style={{ background: hexToRgba(card.color, 0.08), border: `1px solid ${hexToRgba(card.color, 0.25)}`, color: card.color }}>
                                {card.footer}
                              </div>
                            )}
                            {card.link && (
                              <a href={card.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline" style={{ color: card.color }}>
                                {card.link.label} <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ MÓDULO 02 · AUTODETERMINACIÓN (SDT) Y AGENCIA VS AUTONOMÍA ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-indigo-50/40 border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="ra-mono text-xs font-bold text-emerald-600 uppercase tracking-wider">Módulo 02 · Motivación</span>
                <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Agencia vs. Autonomía & el Marco de la Autodeterminación
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Actuar (agencia) no es lo mismo que gobernarse reflexivamente (autonomía). Deci y Ryan explican qué necesitamos para lo segundo.
              </p>
            </div>

            {/* Agencia vs Autonomía */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AGENCY_VS_AUTONOMY.map((card) => (
                <div key={card.key} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2" style={{ background: card.color }} />
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border" style={{ background: hexToRgba(card.color, 0.08), color: card.color, borderColor: hexToRgba(card.color, 0.3) }}>
                      {card.tag}
                    </span>
                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <h3 className="ra-fraunces text-xl sm:text-2xl font-black text-slate-900 mb-3">{card.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{card.body}</p>
                  <div className="space-y-2.5 font-mono text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {card.points.map((p) => (
                      <div key={p.label} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: card.color }} />
                        <span><strong>{p.label}:</strong> {p.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Necesidades SDT */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                La motivación intrínseca no es un impulso espontáneo: es el resultado de un entorno que nutre el desarrollo social y el éxito personal. Según la Teoría de la Autodeterminación (SDT) de Deci y Ryan, existen tres pilares universales:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {SDT_NEEDS.map((need) => (
                  <div key={need.key} className="p-5 rounded-2xl border-2 text-center space-y-2.5" style={{ borderColor: hexToRgba(need.color, 0.3), background: hexToRgba(need.color, 0.05) }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto" style={{ background: hexToRgba(need.color, 0.14), color: need.color }}>
                      <need.icon className="w-5.5 h-5.5" />
                    </div>
                    <h4 className="font-bold text-slate-900">{need.label}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{need.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
                <UserCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-950 text-sm font-extrabold block mb-1">El caso de Sofía</strong>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Una adolescente busca un tutorial de dibujo en una plataforma digital. No solo busca aprender una técnica (competencia): busca un lugar donde su talento sea reconocido por una comunidad. Cuando recibe un comentario que valida su esfuerzo, su necesidad de pertenencia queda satisfecha — pero simultáneamente la plataforma "aprende" sobre ella: sus tiempos de permanencia, sus estilos preferidos y sus momentos de vulnerabilidad.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                <strong className="text-slate-700">Evaluación crítica:</strong> en el entorno educativo, la privación de autonomía —un aprendizaje puramente heterónomo— deriva inevitablemente en desinterés. Si la escuela no provee espacios para la competencia y la agencia, el individuo buscará saciar estas necesidades en ecosistemas tecnológicos cuya arquitectura está diseñada para convertir esa búsqueda de identidad en un flujo constante de datos transaccionales.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS (marco práctico de la charla) ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="ra-mono ra-badge inline-block text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                // Marco práctico de la charla
              </span>
              <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A]">Tres movimientos para recuperar la agencia</h2>
            </div>

            {data.sections.map((sec, i) => {
              const colorA = i % 2 === 0 ? EMERALD : INDIGO
              const colorB = i % 2 === 0 ? CYAN : VIOLET
              const floatSide = i % 2 === 0 ? 'right' : 'left'
              const icons = [Compass, ScanEye, EyeOff]
              const Icon = icons[i] || Compass

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
                    imageSrc={`/img/tematicas/recuperar-la-agencia/seccion-${i + 1}.webp`}
                    altText={sec.heading}
                    icon={Icon}
                    colorA={colorA}
                    colorB={colorB}
                    label={sec.heading}
                    source="José Farhat · Libres Bajo Influencia"
                    sourceUrl="https://josefarhat.com"
                    floatSide={floatSide}
                  />

                  <div className="space-y-6">
                    <span className="ra-mono text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="ra-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
                      {sec.heading}
                    </h2>
                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
                    </div>
                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-emerald-50/80 border-l-4 border-emerald-600 text-slate-900 font-bold italic text-base sm:text-lg clear-both">
                        <Quote className="w-6 h-6 text-emerald-600 mb-2" />
                        "{sec.quote}"
                      </blockquote>
                    )}
                  </div>
                  <div className="clear-both" />
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* ══ MÓDULO 03 · ARQUITECTURA DE LA ELECCIÓN ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="ra-mono text-xs font-bold text-cyan-700 uppercase tracking-wider">Módulo 03 · Diseño & Poder</span>
                <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Arquitectura de la Elección y Libertad bajo Influencia Digital
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">Thaler y Sunstein, Lawrence Lessig y Shoshana Zuboff.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                El concepto de <strong>arquitectura de la elección</strong> (Thaler y Sunstein) postula que el modo en que se organizan las alternativas predetermina la decisión final sin necesidad de prohibiciones explícitas. Como afirmó Lawrence Lessig, <em>"la arquitectura también regula"</em>: el diseño de la interfaz establece una normativa invisible.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                En el <strong>capitalismo de vigilancia</strong> descrito por Shoshana Zuboff, las experiencias humanas se traducen en datos para alimentar "productos de predicción" que se comercializan en un mercado de comportamientos futuros. Esta regulación se ejerce a menudo mediante la <strong>fricción</strong>: la creación de barreras cognitivas o físicas para dificultar la autonomía. Un ejemplo paradigmático es el botón de "Aceptar todo" en colores vibrantes frente a un enlace de "Configurar" en gris pequeño y oculto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {NUDGE_VS_DARK.map((row) => {
                const isEmerald = row.tone === 'emerald'
                return (
                  <div key={row.concept} className={`rounded-3xl p-6 border-2 space-y-3 ${isEmerald ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'}`}>
                    <div className="flex items-center gap-2.5">
                      {isEmerald ? <Unlock className="w-5 h-5 text-emerald-700 shrink-0" /> : <Lock className="w-5 h-5 text-rose-700 shrink-0" />}
                      <h3 className="font-bold text-lg" style={{ color: isEmerald ? EMERALD_TEXT : ROSE_TEXT }}>{row.concept}</h3>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{row.def}</p>
                    <div className={`text-xs p-3 rounded-xl border font-mono ${isEmerald ? 'bg-white border-emerald-200 text-emerald-900' : 'bg-white border-rose-200 text-rose-900'}`}>
                      {row.examples}
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-4xl">
              <strong className="text-slate-700">Evaluación crítica:</strong> estas interfaces socavan la autonomía racional kantiana al apelar al Sistema 1 de Daniel Kahneman — respuestas rápidas, intuitivas y automáticas. Al eliminar el espacio para la reflexión, el diseño tecnológico reduce la agencia a una serie de reacciones algorítmicas, creando burbujas de filtros que limitan la exposición a la diversidad y refuerzan sesgos preexistentes.
            </p>
          </div>
        </section>

        {/* ══ INTERACCIÓN TÉCNICA · SIMULADOR ══ */}
        <section id="simulador" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="ra-mono ra-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Interacción en vivo
              </span>
              <h2 className="ra-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Laboratorio de desactivación de patrones oscuros</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Elegí un escenario digital cotidiano y recorré los tres pasos del protocolo Farhat frente a él.
              </p>
            </div>
            <PauseAskChooseSimulator />
          </div>
        </section>

        {/* ══ MÓDULO 04 · PATOLOGÍAS DE LA AUTONOMÍA ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-rose-50/40 border-y border-slate-200">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="ra-mono text-xs font-bold text-rose-700 uppercase tracking-wider">Módulo 04 · Perspectiva clínica</span>
                <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  Patologías de la Autonomía: Control Coercitivo y Abuso Invisible
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">Evan Stark y la investigación clínica de ReachLink Mental Health.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  El <strong>control coercitivo</strong>, teorizado por Evan Stark, es un "delito contra la libertad" que trasciende la violencia física. Es un patrón de dominio que busca desmantelar la autonomía, dignidad e identidad de la víctima mediante el aislamiento y la vigilancia.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  El impacto traumático se consolida mediante la técnica <strong>DARVO</strong> (Deny, Attack, and Reverse Victim and Offender): el agresor deniega el abuso, ataca la credibilidad de la víctima e invierte los roles, posicionándose como el agraviado. Esto genera disonancia cognitiva y un vínculo traumático que anula la agencia de la víctima.
                </p>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed">
                  <strong>Abuso tras la separación:</strong> la pérdida de agencia a menudo se intensifica cuando la víctima intenta marcharse, utilizando el sistema legal y las disputas por la custodia como una nueva arquitectura de control. El sistema judicial exige "pruebas físicas" y suele juzgar como inconsistentes los testimonios fragmentados por el trauma.
                </div>
                <a
                  href="https://www.reachlink.com/es/autocomprobacion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  Consultar evaluación ReachLink <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-2 text-sm">Señales de alerta — erosión de agencia</div>
                <div className="space-y-3">
                  {[
                    { title: 'Aislamiento social', desc: 'Restricción de contactos y eliminación de perspectivas externas que permitan cuestionar la realidad de la relación.' },
                    { title: 'Abuso financiero', desc: 'Control de cuentas, generación de dependencia económica y sabotaje de la independencia laboral.' },
                    { title: 'Microgestión y vigilancia', desc: 'Exigencia de acceso a dispositivos y contraseñas, monitoreo constante mediante servicios de localización.' },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="text-rose-500 font-bold mt-0.5">•</span>
                      <span className="text-slate-700"><strong className="text-slate-900">{s.title}:</strong> {s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MINI-TEST · ÍNDICE DE AGENCIA PERSONAL ══ */}
        <section id="diagnostico" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white to-emerald-50/40 scroll-mt-24">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="ra-mono text-xs font-bold text-emerald-700 uppercase tracking-wider block">Verificación diagnóstica en tiempo real</span>
              <h2 className="ra-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Mini-Test de Evaluación de Agencia Personal</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Contrastá tus respuestas con los constructos de Kant, Ryan & Deci (SDT), Farhat, Lessig y Lantegi Batuak.
              </p>
            </div>
            <AgencyIndexMiniTest />
          </div>
        </section>

        {/* ══ TOOLKIT DECISIONAL & WRAP ══ */}
        <section id="toolkit" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-y border-slate-200 scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="ra-mono inline-block text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold bg-violet-100 text-violet-800 border border-violet-200">
                Herramientas prácticas de autogestión
              </span>
              <h2 className="ra-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">Toolkit de Recuperación Decisional & Bienestar</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Integra las directrices de la Fundación <strong>Lantegi Batuak</strong> y el modelo <strong>WRAP</strong> (Activa't per la salut mental) para ejercitar tu autogobierno en dilemas concretos.
              </p>
            </div>

            <DecisionToolkit />

            <div className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div>
                <span className="ra-mono text-xs font-bold text-emerald-700 uppercase">WRAP / Activa't per la salut mental</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Caja de herramientas de bienestar diario</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {WRAP_ITEMS.map((w) => (
                  <div key={w.title} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">{w.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <p className="text-sm text-slate-600 max-w-2xl text-center leading-relaxed">
                Se complementa con ejercicios del cuaderno de decisiones, como transformar afirmaciones negativas en objetivos positivos —el cerebro elude las formas negativas; es más eficaz proponerse "comer sano" que "no comer dulces"—. La vía del <strong>Kaizen</strong> (pequeños pasos) ayuda a superar la parálisis de la agencia perdida.
              </p>
            </div>
          </div>
        </section>

        {/* ══ MÓDULO 05 · CIUDADANÍA DIGITAL INTEGRAL ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-indigo-50/30 border-y border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="ra-mono text-xs font-bold text-indigo-600 uppercase tracking-wider">Módulo 05 · Educación</span>
                <h2 className="ra-fraunces text-2xl sm:text-4xl font-black text-[#0F172A] mt-1">
                  El Rol de la Educación y la Ciudadanía Digital Integral
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">John Dewey, la UNESCO y Sonia Livingstone.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Siguiendo la filosofía de <strong>John Dewey</strong>, la escuela debe entenderse como una experiencia presente y no solo una preparación futura; por tanto, no puede ignorar el territorio digital. No debe ser un espacio de prohibición, sino un laboratorio de ciudadanía donde se transforme al "usuario" pasivo en un "ciudadano" crítico.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                La <strong>Mediación Activa</strong>, propuesta por Sonia Livingstone, supera la vigilancia restrictiva mediante el acompañamiento y la conversación que construye criterio a largo plazo. Esto se alinea con la <strong>Observación General n.º 25</strong>, que garantiza el derecho de los menores a una autonomía progresiva y protección en el entorno digital.
              </p>
            </div>

            <div>
              <h3 className="ra-fraunces text-xl sm:text-2xl font-black text-slate-900 mb-5">El Poliedro de la Ciudadanía Digital (UNESCO)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {POLIEDRO_CARAS.map((cara, i) => (
                  <div key={cara.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{cara.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{cara.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CITA DE CIERRE ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-emerald-900 via-indigo-950 to-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Quote className="w-12 h-12 text-emerald-300 mx-auto opacity-80" />
            <p className="ra-fraunces text-lg sm:text-2xl font-bold leading-relaxed text-slate-200 italic">
              "La agencia es una construcción a posteriori que se alcanza a menudo de forma diferida, a través de la narración demorada del trauma y el discurso ante un otro que escucha." — Rosaura Martínez Ruiz
            </p>
            <h2 className="ra-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">"{data.closingQuote}"</h2>
            <p className="ra-mono text-xs sm:text-sm font-extrabold text-emerald-300 pt-2">
              "No se trata de vivir libres de toda influencia, sino de aprender a ser libres bajo influencia." — José Néstor Farhat
            </p>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ MATERIAL DE ESTUDIO (CARRUSEL SLIDES WEBP + INFOGRAFÍA WEBP) ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-3">
                <span className="ra-mono ra-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Material pedagógico y recursos
                </span>
                <h2 className="ra-fraunces text-3xl sm:text-5xl font-black text-[#0F172A]">
                  Presentación en Slides e Infografía Visual
                </h2>
              </div>

              {data.pdfUrl && (
                <div className="space-y-4">
                  <h3 className="ra-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" /> Presentación interactiva (15 diapositivas en WebP)
                  </h3>
                  <div className="w-full max-w-4xl mx-auto">
                    <WebpSlideCarousel
                      totalSlides={15}
                      slidesBasePath="/img/tematicas/recuperar-la-agencia/slides"
                      pdfDownloadUrl={data.pdfUrl}
                      title={data.title}
                      color={EMERALD}
                    />
                  </div>
                </div>
              )}

              {data.infografiaUrl && (
                <div className="space-y-4">
                  <h3 className="ra-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Images className="w-5 h-5 text-indigo-600" /> Infografía sintetizada
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
                        <ZoomIn className="w-5 h-5 text-emerald-600" /> Ver a pantalla completa (Zoom & Pan)
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ══ FUENTES ACADÉMICAS ══ */}
        <section id="fuentes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200 scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-emerald-600 shrink-0" />
                <h2 className="ra-fraunces text-2xl sm:text-3xl font-black text-[#0F172A]">
                  Repositorio de Fuentes Oficiales & Bibliografía
                </h2>
              </div>
              <span className="ra-mono text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {SOURCES.length} citas verificables
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-3xl">
              Toda la información de este módulo proviene de publicaciones peer-reviewed, conferencias institucionales y organismos internacionales. Podés verificar cada documento directamente, o copiar la cita para tu propio trabajo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SOURCES.map((src) => <SourceCard key={src.id} source={src} />)}
            </div>
          </div>
        </section>

        {/* ══ EVALUACIÓN INTERACTIVA (QUIZ OFICIAL) ══ */}
        <section id="evaluacion" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-10">
              <span className="ra-mono ra-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Diagnóstico de comprensión
              </span>
              <h2 className="ra-fraunces text-3xl sm:text-4xl font-black text-[#0F172A]">Cuestionario de Comprensión</h2>
            </div>

            {!showResults ? (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="ra-mono text-xs font-bold text-emerald-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="ra-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx
                    let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-emerald-50 hover:border-emerald-300'
                    if (isSelected) btnClass = 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-md'
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

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIdx === 0}
                    className="px-5 py-2.5 rounded-full text-xs font-black border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="ra-btn px-6 py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="ra-fraunces text-2xl sm:text-3xl font-black">¡Cuestionario completado!</h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-emerald-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button onClick={startQuiz} className="ra-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer">
                  <RefreshCw className="w-5 h-5" /> Volver a intentar
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
              <RefreshCw className="w-5 h-5" />
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
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl border border-emerald-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
