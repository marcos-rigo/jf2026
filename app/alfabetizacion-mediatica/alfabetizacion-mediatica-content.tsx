"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { FileText, ZoomIn, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const INFOGRAFIA_PATH = "/weekly-content/2026-W20/infogAlfMeInf.png"
const PDF_PATH = "/weekly-content/2026-W20/alfMedInf.pdf"

ChartJS.register(ArcElement, Tooltip, Legend)

// ─── Types ────────────────────────────────────────────────────────────────────
type TabId = "paso1" | "paso2" | "paso3"
type FaqId = "faq1" | "faq2" | null

// ─── Static data ──────────────────────────────────────────────────────────────
const TABS: { id: TabId; emoji: string; label: string }[] = [
  { id: "paso1", emoji: "🚀", label: "Fase 1: Lectura Lateral" },
  { id: "paso2", emoji: "🕵️‍♂️", label: "Fase 2: Análisis de Sesgos" },
  { id: "paso3", emoji: "🛡️", label: "Fase 3: Cortafuegos" },
]

const CAFE_CARDS = [
  {
    letter: "C",
    title: "Contexto",
    emoji: "🕰️",
    back: "¿Es información vigente o material reciclado sacado de su eje temporal?",
    from: "from-indigo-500",
    to: "to-blue-600",
    border: "border-indigo-400",
    hover: "group-hover:from-indigo-200 group-hover:to-indigo-300",
    hoverBorder: "group-hover:border-indigo-200",
  },
  {
    letter: "A",
    title: "Autoría",
    emoji: "✍️",
    back: "¿Existe una firma verificable o el emisor se oculta en el anonimato?",
    from: "from-violet-500",
    to: "to-purple-600",
    border: "border-violet-400",
    hover: "group-hover:from-violet-200 group-hover:to-violet-300",
    hoverBorder: "group-hover:border-violet-200",
  },
  {
    letter: "F",
    title: "Fuentes",
    emoji: "🔗",
    back: "¿Se proporcionan enlaces a datos crudos o estudios metodológicos?",
    from: "from-fuchsia-500",
    to: "to-pink-600",
    border: "border-fuchsia-400",
    hover: "group-hover:from-fuchsia-200 group-hover:to-fuchsia-300",
    hoverBorder: "group-hover:border-fuchsia-200",
  },
  {
    letter: "E",
    title: "Emoción",
    emoji: "⚠️",
    back: "¿El titular está diseñado para detonar indignación, miedo o urgencia?",
    from: "from-rose-500",
    to: "to-red-600",
    border: "border-rose-400",
    hover: "group-hover:from-rose-200 group-hover:to-rose-300",
    hoverBorder: "group-hover:border-rose-200",
  },
]

const CHECKLIST_ITEMS = [
  { id: "c1", text: "He analizado el cuerpo completo del documento, excediendo la lectura del titular." },
  { id: "c2", text: 'He contrastado el dominio de origen mediante "Lectura Lateral" en plataformas independientes.' },
  { id: "c3", text: "La fecha de publicación y el contexto original han sido verificados." },
  { id: "c4", text: "El material multimedia ha superado una prueba de búsqueda inversa." },
  { id: "c5", text: "La intención de distribución es objetiva y carece de sesgo emocional impulsivo." },
]

const VULNERABILITIES = [
  {
    emoji: "🪞",
    title: "Sesgo de Confirmación",
    desc: "Aceptar automáticamente información que valida creencias preexistentes, reduciendo el rigor analítico.",
    bg: "bg-rose-50 text-rose-500",
    hover: "group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    emoji: "😇",
    title: 'Efecto "Halo"',
    desc: "Transferir autoridad en temas complejos a emisores populares o carismáticos sin credenciales verificables.",
    bg: "bg-amber-50 text-amber-500",
    hover: "group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    emoji: "🧊",
    title: "Análisis Superficial",
    desc: "Considerar el titular como un resumen fiel, ignorando que su función principal de diseño es generar clicks.",
    bg: "bg-blue-50 text-blue-500",
    hover: "group-hover:bg-blue-500 group-hover:text-white",
  },
]

// ─── Intro Doughnut chart config ───────────────────────────────────────────────
const introChartData = {
  labels: ["Distribución ciega (Solo titular)", "Análisis completo (Artículo)"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#f43f5e", "#2dd4bf"],
      hoverBackgroundColor: ["#e11d48", "#14b8a6"],
      borderWidth: 0,
      hoverOffset: 8,
      borderRadius: 4,
    },
  ],
}

const introChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: "circle" as const,
        font: { size: 12, weight: "bold" as const },
        color: "#334155",
      },
    },
    tooltip: {
      backgroundColor: "rgba(15,23,42,0.9)",
      titleFont: { size: 13, weight: "bold" as const },
      bodyFont: { size: 13 },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: (ctx: { parsed: number }) => `  ${ctx.parsed}% de usuarios`,
      },
    },
  },
  cutout: "75%",
  animation: { animateScale: true, animateRotate: true },
} as const

// ─── Gauge helpers ─────────────────────────────────────────────────────────────
function gaugeColor(count: number) {
  if (count === 0) return "#334155"
  if (count < 5) return "#fbbf24"
  return "#34d399"
}

function gaugeMessage(count: number): { text: string; color: string } {
  if (count === 0) return { text: "ESPERANDO INPUT", color: "text-slate-400" }
  if (count < 5) return { text: "PROCESANDO MATRIZ...", color: "text-amber-400" }
  return { text: "SISTEMA AUTORIZADO ✓", color: "text-emerald-400" }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AlfabetizacionMediaticaContent() {
  const [activeTab, setActiveTab] = useState<TabId>("paso1")
  const [openFaq, setOpenFaq] = useState<FaqId>(null)
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [imgExpanded, setImgExpanded] = useState(false)

  function toggleCheck(id: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const checkedCount = checked.size
  const gaugeData = {
    datasets: [
      {
        data: [checkedCount, 5 - checkedCount],
        backgroundColor: [gaugeColor(checkedCount), "#1e293b"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
        borderRadius: 5,
      },
    ],
  }
  const gaugeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    cutout: "85%",
    animation: { duration: 600 },
  } as const

  const { text: gaugeText, color: gaugeTextColor } = gaugeMessage(checkedCount)

  return (
    <>
      <Navbar />

      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="ami-blob bg-blue-300/40 w-96 h-96 rounded-full -top-24 -left-24" />
        <div className="ami-blob bg-purple-300/40 w-[500px] h-[500px] rounded-full top-[30%] -right-32 [animation-delay:-5s]" />
        <div className="ami-blob bg-cyan-200/40 w-80 h-80 rounded-full bottom-[10%] left-[20%] [animation-delay:-3s]" />
      </div>

      <main className="bg-slate-50 text-slate-800 antialiased min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

          {/* ── HERO ───────────────────────────────────────────────────────── */}
          <section className="grid lg:grid-cols-2 gap-16 items-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-white/80 rounded-full shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-bold text-indigo-900 tracking-wider uppercase">
                  Plataforma AMI
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Optimizá tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500">
                  Filtro de Información
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                La infoxicación satura nuestra capacidad de decisión. Este entorno de entrenamiento de{" "}
                <strong className="text-slate-800">Alfabetización Mediática</strong> es tu herramienta para
                evaluar, procesar y compartir datos con precisión en la era digital.
              </p>

              <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg p-6 rounded-2xl border-l-4 border-l-indigo-500">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span>🎯</span> Tu Objetivo Principal
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instalar un "cortafuegos mental" para neutralizar titulares engañosos y elevar la calidad de
                  la información que consumís y distribuís.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg p-8 rounded-[2rem] flex flex-col items-center"
            >
              <div className="text-center mb-6">
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  El Sesgo de Superficialidad
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  Interacción promedio frente a un enlace
                </p>
              </div>
              <div className="relative w-full max-w-[400px] h-[280px] md:h-[320px]">
                <Doughnut data={introChartData} options={introChartOptions} />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100/50 px-4 py-2 rounded-full">
                <span>📊</span> Basado en métricas de consumo digital
              </div>
            </motion.div>
          </section>

          {/* ── INFOGRAFÍA GENERAL ────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg rounded-[2.5rem] overflow-hidden">
              <div className="px-6 md:px-10 py-5 border-b border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-0.5">
                    Vista General
                  </p>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                    Infografía de Alfabetización Mediática
                  </h2>
                </div>
                <button
                  onClick={() => setImgExpanded((v) => !v)}
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-600 transition-colors border border-slate-200 hover:border-indigo-300 rounded-xl px-3 py-2 bg-white shadow-sm"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="hidden sm:inline">{imgExpanded ? "Reducir" : "Ampliar"}</span>
                </button>
              </div>

              <div
                className={`relative w-full transition-all duration-500 cursor-zoom-in overflow-hidden ${
                  imgExpanded ? "max-h-[90vh]" : "max-h-[420px] md:max-h-[560px]"
                }`}
                onClick={() => setImgExpanded((v) => !v)}
              >
                <Image
                  src={INFOGRAFIA_PATH}
                  alt="Infografía general de Alfabetización Mediática e Informacional"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
                {!imgExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
                )}
              </div>
            </div>
          </motion.section>

          {/* ── TRAINING TABS ─────────────────────────────────────────────── */}
          <section id="entrenamiento" className="scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Módulos de Entrenamiento
              </h2>
              <p className="text-slate-600 text-lg">
                Procesá las tres habilidades base. Interactuá con los módulos para desplegar las metodologías.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg rounded-[2.5rem] p-4 md:p-8">
              {/* Tab pills */}
              <div className="flex flex-col sm:flex-row gap-2 bg-slate-200/50 p-2 rounded-2xl md:rounded-full mb-8">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3.5 px-6 text-center rounded-xl md:rounded-full text-sm sm:text-base border transition-all duration-300 ${
                        isActive
                          ? "bg-white text-indigo-700 border-slate-200/80 font-bold shadow-md -translate-y-0.5"
                          : "bg-transparent text-slate-500 border-transparent font-medium hover:bg-slate-100/50 hover:text-slate-700"
                      }`}
                    >
                      <span className="mr-2">{tab.emoji}</span>
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab content */}
              <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-slate-100 min-h-[420px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "paso1" && (
                    <motion.div
                      key="paso1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-lg mb-4">
                        Búsqueda y Filtro
                      </span>
                      <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">
                        Evadé el Diseño, Investigá la Fuente
                      </h3>
                      <p className="text-slate-500 text-lg mb-8 max-w-3xl">
                        Desarrollá el hábito de abandonar temporalmente la página de origen para verificar su
                        reputación en ecosistemas externos.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-indigo-500">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              Cuando un contenido capte tu atención,{" "}
                              <strong>no asumas su veracidad por la estética del sitio</strong>. Aplicá
                              "lectura lateral": abrí nuevas pestañas y buscá qué opinan verificadores
                              independientes sobre esa fuente específica.
                            </p>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic">
                              "El café destruye tu memoria" (Publicado en SaludTotalHoy). Al investigar en
                              otra pestaña, los resultados indican que es una granja de contenido falso
                              diseñada para generar ingresos por publicidad.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                          <span className="absolute top-4 right-4 text-6xl opacity-20">⚡</span>
                          <h4 className="font-display font-extrabold text-xl mb-4">Laboratorio Práctico</h4>
                          <p className="text-indigo-100 mb-6 leading-relaxed">
                            Identificá la primera noticia que veas en tus redes. Antes de leerla, abrí una
                            pestaña nueva y buscá el nombre del sitio + "credibilidad".
                          </p>
                          <button className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-xl hover:bg-indigo-50 transition-colors w-max shadow-md">
                            Misión Aceptada
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "paso2" && (
                    <motion.div
                      key="paso2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 font-bold text-xs rounded-lg mb-4">
                        Evaluación de Evidencia
                      </span>
                      <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">
                        El Detector Analítico
                      </h3>
                      <p className="text-slate-500 text-lg mb-8 max-w-3xl">
                        Separar rigurosamente los datos empíricos de las afirmaciones emocionales o
                        especulativas.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-purple-500">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              La desinformación está diseñada para hackear tus emociones. Neutralizala
                              auditando el lenguaje: buscá adjetivos dramáticos y verificá los enlaces
                              salientes. Si afirman "un estudio lo prueba" pero no hay enlace a la fuente
                              primaria, clasificalo como sospechoso.
                            </p>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic">
                              Mensaje viral: "¡URGENTE! Ley confisca ahorros hoy". Análisis: Carencia de
                              número de ley, omisión de fechas, lenguaje alarmista. Veredicto: Intento de
                              manipulación emocional.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                          <span className="absolute top-4 right-4 text-6xl opacity-20">🧠</span>
                          <h4 className="font-display font-extrabold text-xl mb-4">Laboratorio Práctico</h4>
                          <p className="text-purple-100 mb-6 leading-relaxed">
                            Tomá un mensaje polémico reciente. Aplicá la matriz de 3 puntos: 1. Autoría, 2.
                            Evidencia documentada, 3. Ganancia emocional del emisor.
                          </p>
                          <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-xl hover:bg-purple-50 transition-colors w-max shadow-md">
                            Aplicar Matriz
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "paso3" && (
                    <motion.div
                      key="paso3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-lg mb-4">
                        Consumo Responsable
                      </span>
                      <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-3">
                        El Protocolo Cortafuegos
                      </h3>
                      <p className="text-slate-500 text-lg mb-8 max-w-3xl">
                        Asumir responsabilidad algorítmica y detener la propagación de cadenas de datos no
                        verificados.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                              <span className="text-cyan-500">■</span> Metodología
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              Antes de redistribuir, asumí la autoría moral del contenido. Implementá un
                              delay cognitivo: si no lográs verificar la información en 60 segundos, abortá
                              la acción de compartir.
                            </p>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                              Caso de Estudio
                            </h4>
                            <p className="text-sm text-slate-600 italic">
                              Foto impactante solicitando donaciones por catástrofe. Acción: búsqueda inversa
                              de imagen en Google. Resultado: la foto es de otro continente hace 5 años.
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                          <span className="absolute top-4 right-4 text-6xl opacity-20">🛑</span>
                          <h4 className="font-display font-extrabold text-xl mb-4">Laboratorio Práctico</h4>
                          <p className="text-cyan-100 mb-6 leading-relaxed">
                            Configurá mentalmente un "Delay de 10 segundos". Ante un contenido que genere ira
                            o urgencia, contá hasta 10 antes de tocar compartir.
                          </p>
                          <button className="bg-white text-cyan-800 font-bold py-3 px-6 rounded-xl hover:bg-cyan-50 transition-colors w-max shadow-md">
                            Activar Delay
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* ── CAFÉ CARDS ────────────────────────────────────────────────── */}
          <section id="herramientas" className="scroll-mt-24 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Suite de Herramientas Pro
              </h2>
              <p className="text-slate-600 text-lg">
                Frameworks de decisión rápida para evaluar información en tiempo real.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">Protocolo C.A.F.E.</h3>
                  <p className="text-slate-500 mt-1">Pasá el cursor sobre los módulos para desencriptar.</p>
                </div>
                <div className="hidden sm:block p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <span className="text-xl">☕</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CAFE_CARDS.map((card) => (
                  <div key={card.letter} className="group h-56 [perspective:1000px]">
                    <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-700 shadow-lg shadow-slate-200/50 rounded-[2rem]">
                      {/* Front */}
                      <div
                        className={`absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-100 flex flex-col items-center justify-center rounded-[2rem] p-6 transition-all ${card.hoverBorder}`}
                      >
                        <span
                          className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 ${card.hover} transition-colors duration-500 mb-2`}
                        >
                          {card.letter}
                        </span>
                        <span className="font-extrabold text-slate-800 text-lg tracking-wide uppercase">
                          {card.title}
                        </span>
                      </div>
                      {/* Back */}
                      <div
                        className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${card.from} ${card.to} text-white flex flex-col items-center justify-center rounded-[2rem] p-6 text-center border ${card.border}`}
                      >
                        <span className="text-2xl mb-2">{card.emoji}</span>
                        <p className="text-sm font-medium leading-relaxed">{card.back}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CHECKLIST + GAUGE ───────────────────────────────────────── */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-[2.5rem] p-2 sm:p-4">
              <div className="bg-white rounded-[2rem] p-6 md:p-10 grid lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                      Analizador de Viabilidad
                    </h3>
                    <p className="text-slate-500">
                      Ejecutá esta matriz de validación antes de confirmar la distribución de cualquier dato.
                    </p>
                  </div>

                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    {CHECKLIST_ITEMS.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start gap-4 p-3 hover:bg-white rounded-xl cursor-pointer border border-transparent hover:border-slate-200 transition-all hover:shadow-md"
                      >
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={checked.has(item.id)}
                            onChange={() => toggleCheck(item.id)}
                            className="appearance-none w-5 h-5 border-2 border-slate-300 rounded cursor-pointer transition-colors bg-white checked:bg-indigo-500 checked:border-transparent"
                          />
                          {checked.has(item.id) && (
                            <svg
                              className="absolute w-3 h-3 text-white pointer-events-none"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gauge */}
                <div className="lg:col-span-2 bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col items-center justify-center h-full shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
                  <div className="w-full flex justify-between items-center mb-6 z-10">
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                      Estatus de Sistema
                    </span>
                    <span
                      className={`flex h-2 w-2 rounded-full transition-colors ${
                        checkedCount === 0
                          ? "bg-slate-600"
                          : checkedCount < 5
                          ? "bg-amber-400 animate-pulse"
                          : "bg-emerald-400"
                      }`}
                    />
                  </div>

                  <div className="relative w-full z-10" style={{ height: 220 }}>
                    <Doughnut data={gaugeData} options={gaugeOptions} />
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <span className="text-4xl font-black text-white">
                        {checkedCount}
                        <span className="text-lg text-slate-500">/5</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 text-center z-10 w-full bg-slate-800/50 py-3 rounded-xl border border-slate-700">
                    <p className={`text-sm font-bold tracking-wide uppercase transition-colors ${gaugeTextColor}`}>
                      {gaugeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── PRESENTACIÓN PDF ──────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg rounded-[2.5rem] overflow-hidden">
              <div className="px-6 md:px-10 py-5 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-0.5">
                      Presentación completa
                    </p>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display">
                      Alfabetización Mediática — Documento
                    </h2>
                  </div>
                </div>
                <a
                  href={PDF_PATH}
                  download
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-600 transition-colors border border-slate-200 hover:border-indigo-300 rounded-xl px-3 py-2 bg-white shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Descargar</span>
                </a>
              </div>

              <div className="hidden sm:block w-full h-[600px] md:h-[780px] lg:h-[900px]">
                <iframe
                  src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title="Presentación Alfabetización Mediática"
                />
              </div>

              <div className="flex sm:hidden flex-col items-center gap-4 p-8 text-center">
                <FileText className="w-12 h-12 text-indigo-400 opacity-60" />
                <p className="text-slate-500 text-sm">
                  El visor de PDF no está disponible en pantallas pequeñas.
                </p>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-medium px-6 py-3 rounded-full transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Ver presentación
                </a>
              </div>
            </div>
          </motion.section>

          {/* ── VULNERABILITIES + FAQ ─────────────────────────────────────── */}
          <section className="grid md:grid-cols-2 gap-12 pb-16">

            {/* Vulnerabilities */}
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Vulnerabilidades Comunes
              </h3>
              <p className="text-slate-500 mb-8">Sesgos cognitivos que comprometen el procesamiento de datos:</p>
              <div className="space-y-4">
                {VULNERABILITIES.map((v) => (
                  <div
                    key={v.title}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start group"
                  >
                    <div className={`p-3 rounded-xl transition-colors ${v.bg} ${v.hover}`}>
                      <span className="text-xl leading-none block">{v.emoji}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-base mb-1">{v.title}</strong>
                      <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Base de Conocimiento</h3>
              <p className="text-slate-500 mb-8">Consultas frecuentes y planes de acción.</p>

              <div className="space-y-3 mb-10">
                {(
                  [
                    {
                      id: "faq1",
                      q: "¿El proceso de validación retrasa el consumo?",
                      a: "La curva de aprendizaje inicial requiere una inversión de tiempo. Sin embargo, al automatizar mentalmente el Framework C.A.F.E., el cerebro optimiza la detección de patrones maliciosos en milisegundos.",
                    },
                    {
                      id: "faq2",
                      q: "Manejo de conflictos al corregir pares",
                      a: 'Aplicá diplomacia digital: desvinculá el ego del usuario del dato erróneo. Formato sugerido: "La arquitectura de esta noticia es confusa; los registros originales indican lo siguiente..."',
                    },
                  ] as { id: FaqId; q: string; a: string }[]
                ).map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full text-left px-6 py-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center transition-colors"
                    >
                      <span>{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 ml-4"
                      >
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === faq.id && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 pt-4 text-slate-600 bg-slate-50/50 border-t border-slate-100">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500 rounded-full blur-[60px] opacity-40" />
                <h4 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2 relative z-10">
                  <span className="text-indigo-400">⚡</span> Secuencia de Arranque
                </h4>
                <ul className="space-y-4 text-slate-300 relative z-10">
                  <li className="flex gap-3 items-start">
                    <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-mono mt-0.5 shrink-0">
                      01
                    </span>
                    <span>
                      <strong>Auditoría de Feed:</strong> Eliminá privilegios de lectura (unfollow) a 3 nodos
                      emisores sin fuentes verificables.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-mono mt-0.5 shrink-0">
                      02
                    </span>
                    <span>
                      <strong>Calibración de Algoritmo:</strong> Integrá agencias oficiales de{" "}
                      <em>Fact-Checking</em> a tu red para entrenar los modelos de sugerencias.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
