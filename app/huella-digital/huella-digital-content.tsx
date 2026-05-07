"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import {
  Fingerprint,
  Target,
  Lightbulb,
  Zap,
  ListChecks,
  AlertTriangle,
  X,
  Check,
  ChevronDown,
  Copy,
  FileText,
  ZoomIn,
  Download,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const INFOGRAFIA_PATH = "/weekly-content/2026-W21/infHueDig.png"
const PDF_PATH = "/weekly-content/2026-W21/huellaDigital.pdf"

// ─── Types ────────────────────────────────────────────────────────────────────
type FaqId = "faq1" | "faq2" | "faq3" | null

// ─── Static data ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: 1,
    title: "Auditoría: Conocé tu exposición",
    objective:
      "Identificar exactamente qué información tuya es pública (huella activa) y qué datos se recopilaron sin tu atención plena (huella pasiva).",
    instructions: [
      "Abrí una ventana en modo incógnito para evitar sesgos del algoritmo.",
      'Realizá "Egosurfing": buscá tu nombre completo entre comillas (ej. "Juan Pérez").',
      "Buscá tu correo principal y tu número de teléfono.",
      "Revisá la primera página de resultados y la sección de imágenes.",
    ],
    tip: 'Buscá en tu correo palabras como "Bienvenido", "Confirma tu cuenta" o "Verifica". Encontrarás decenas de foros, tiendas y apps donde te registraste hace años y olvidaste.',
    lab: "Abrí una hoja de cálculo o libreta. Anotá cada cuenta antigua que encuentres y cada resultado de Google que no te guste. Esa es tu lista de objetivos para el Paso 2.",
    checkId: "task1",
    checkLabel: 'He completado mi lista de "Egosurfing"',
  },
  {
    number: 2,
    title: "Limpieza: Borrá tu rastro",
    objective:
      "Reducir drásticamente los puntos de acceso a tus datos personales eliminando cuentas innecesarias y gestionando tu derecho al olvido.",
    instructions: [
      'Usá tu lista del paso anterior. Entrá a cada cuenta antigua, buscá la opción "Eliminar cuenta" (no "desactivar").',
      "Dirigite a myactivity.google.com y borrá tu historial desde siempre.",
      "Ejercé solicitudes manuales para borrar tu información de bases de datos de terceros (Data Brokers).",
    ],
    tip: "Si un sitio no te deja borrar la cuenta, cambiá tus datos por información falsa (nombre falso, correo temporal) antes de abandonarla.",
    lab: "Solicitá a Google que retire resultados que expongan datos sensibles (teléfono, dirección) utilizando su formulario oficial de retirada de información personal.",
    checkId: "task2",
    checkLabel: "He eliminado al menos 3 cuentas inactivas hoy",
  },
  {
    number: 3,
    title: "Blindaje: Protección y Netiqueta",
    objective:
      "Configurar barreras técnicas y de comportamiento para evitar volver a generar una huella digital tóxica.",
    instructions: [
      "Sensores Biométricos: Evitá usar tu huella dactilar para apps financieras críticas. Las huellas pueden ser copiadas y no se pueden cambiar como una contraseña. Optá por contraseñas fuertes o 2FA.",
      "Redes Wi-Fi: Nunca accedas a tu banco o correo desde un Wi-Fi público sin una VPN.",
      "Netiqueta: Pensalo dos veces antes de publicar. No etiquetés a otros sin permiso ni subas fotos de terceros sin su consentimiento.",
    ],
    tip: 'Revisá la configuración de privacidad de Instagram/Facebook y limitala a "Solo Amigos". Desactivá la indexación de tu perfil en motores de búsqueda desde la configuración de la red social.',
    lab: "Cambiá la privacidad de tu red social principal y asegurate de usar un navegador centrado en la privacidad (como Brave o Firefox) para tu navegación diaria.",
    checkId: "task3",
    checkLabel: 'He ajustado la privacidad de mis redes a "Privado"',
  },
]

const ERRORS = [
  {
    title: "Ignorar la huella pasiva",
    desc: "Creer que si no publicás, no dejás rastro. Las cookies y rastreadores invisibles compilan tu perfil constantemente.",
  },
  {
    title: "Confiar ciegamente en la biometría",
    desc: "Creer que la huella dactilar es infalible. Pueden ser robadas del vidrio del teléfono y no se pueden cambiar.",
  },
  {
    title: "Falsa identidad completa",
    desc: "Usar tus datos reales para probar servicios dudosos. Creá siempre correos alias para este tipo de registros.",
  },
]

const NEXT_STEPS = [
  {
    title: "Programá un recordatorio",
    desc: 'Poné una alarma cada 6 meses para hacer Egosurfing de rutina.',
  },
  {
    title: "Instalá un gestor de contraseñas",
    desc: "Dejá de reciclar claves. Usá herramientas seguras y únicas por cuenta.",
  },
]

const RESOURCES = ["Have I Been Pwned", "Google Takeout", "DeleteMe"]

const FAQS: { id: FaqId; q: string; a: string }[] = [
  {
    id: "faq1",
    q: "¿Puedo borrar mi huella digital por completo?",
    a: "No al 100%. La información queda almacenada en copias, bases de datos externas o registros legales. Sin embargo, sí podés reducirla drásticamente (hasta un 90%) eliminando lo público y solicitando desindexación en buscadores.",
  },
  {
    id: "faq2",
    q: "¿Es seguro usar mi huella dactilar para la app del banco?",
    a: "Expertos en ciberseguridad sugieren no confiar plenamente en los escáneres ópticos/capacitivos antiguos. Si tu teléfono es robado, el ladrón tiene literalmente tus huellas impresas en la pantalla. Para finanzas, una clave alfanumérica fuerte + 2FA es superior.",
  },
  {
    id: "faq3",
    q: "¿Qué es el derecho al olvido?",
    a: "Es tu derecho legal (reconocido en Europa y en expansión en Latinoamérica) a pedirle a los motores de búsqueda que eliminen enlaces a información personal sobre vos que sea obsoleta, inexacta o irrelevante.",
  },
]

const TEMPLATE = `Asunto: Solicitud de eliminación de datos personales (Derecho al olvido)

Hola, equipo de privacidad:

Me dirijo a ustedes para solicitar formalmente la eliminación inmediata de todos mis datos personales e información asociada a mi nombre/correo en su base de datos y sitio web, de acuerdo con las normativas vigentes de protección de datos.

Mis datos registrados son: [Tu Correo/Usuario]

Agradezco me confirmen por esta vía cuando el proceso haya concluido.
Saludos cordiales.`

// ─── Main component ───────────────────────────────────────────────────────────
export default function HuellaDigitalContent() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    task1: false,
    task2: false,
    task3: false,
  })
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<FaqId>(null)
  const [imgExpanded, setImgExpanded] = useState(false)

  // Persist checkboxes
  useEffect(() => {
    const saved = localStorage.getItem("huella-digital-progress")
    if (saved) setChecked(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("huella-digital-progress", JSON.stringify(checked))
  }, [checked])

  function toggleCheck(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const progressPct = Math.round((completedCount / 3) * 100)

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(TEMPLATE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea")
      el.value = TEMPLATE
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">

          {/* ── HEADER ───────────────────────────────────────────────────── */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Guía Accionable 2026
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Recuperá el Control de tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Identidad Digital
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tu huella digital (activa y pasiva) habla por vos antes de que vos lo hagas. Esta guía te llevará
              de la sobreexposición al control total en 3 pasos prácticos.
            </p>
            <div className="inline-flex items-start gap-3 p-4 mt-6 bg-green-50 border border-green-200 rounded-xl text-green-800 text-left">
              <Target className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Meta del día:</p>
                <p className="text-sm">
                  Sabrás que lo lograste cuando busques tu nombre en internet y{" "}
                  <strong>solo aparezca lo que vos decidís mostrar</strong>.
                </p>
              </div>
            </div>
          </motion.header>

          {/* ── INFOGRAFÍA GENERAL ────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-0.5">
                    Vista General
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                    Infografía de Huella Digital
                  </h2>
                </div>
                <button
                  onClick={() => setImgExpanded((v) => !v)}
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-300 rounded-xl px-3 py-2"
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
                  alt="Infografía de Huella Digital"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
                {!imgExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>
            </div>
          </motion.section>

          {/* ── STEPS ────────────────────────────────────────────────────── */}
          {STEPS.map((step, i) => (
            <motion.section
              key={step.checkId}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 shrink-0">
                  {step.number}
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900">{step.title}</h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="mb-4 text-slate-700">
                  <strong>Objetivo:</strong> {step.objective}
                </p>

                <h3 className="font-semibold text-lg mb-2 text-blue-600">Instrucciones:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
                  {step.instructions.map((ins, j) => (
                    <li key={j}>{ins}</li>
                  ))}
                </ul>

                <div className="flex gap-3 bg-slate-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                  <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong>Ejemplo práctico:</strong> {step.tip}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-300" /> Ahora hacé esto:
                  </h4>
                  <p className="text-sm mb-4 text-blue-100">{step.lab}</p>
                  <label className="flex items-center gap-3 text-sm bg-white/20 px-3 py-2 rounded w-fit cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="relative w-4 h-4 shrink-0">
                      <input
                        type="checkbox"
                        checked={checked[step.checkId] ?? false}
                        onChange={() => toggleCheck(step.checkId)}
                        className="appearance-none w-4 h-4 border-2 border-white/60 rounded cursor-pointer checked:bg-white checked:border-transparent transition-colors"
                      />
                      {checked[step.checkId] && (
                        <Check className="absolute inset-0 w-4 h-4 text-blue-600 pointer-events-none" />
                      )}
                    </div>
                    {step.checkLabel}
                  </label>
                </div>
              </div>
            </motion.section>
          ))}

          {/* ── PROGRESS TRACKER ─────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="w-6 h-6" /> Tu Rastreador de Éxito
              </h2>
              <p className="text-slate-300 text-sm mb-6">Tus respuestas se guardan en este navegador.</p>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progreso de limpieza</span>
                  <span className="font-bold text-blue-400">{progressPct}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ minWidth: completedCount > 0 ? "1rem" : 0 }}
                  />
                </div>
              </div>
              {completedCount === 3 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-emerald-400 font-bold text-sm flex items-center gap-2"
                >
                  <Check className="w-4 h-4" /> ¡Completado! Tu huella digital está bajo control.
                </motion.p>
              )}
            </div>
          </motion.section>

          {/* ── COPY TEMPLATE ─────────────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 border-b pb-2 border-slate-200">
              Plantilla de Acción Rápida
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <p className="text-sm text-slate-600 mb-4">
                Usá este texto para solicitar la eliminación de tus datos a empresas o webmasters.
              </p>
              <div className="relative">
                <textarea
                  readOnly
                  value={TEMPLATE}
                  className="w-full h-44 p-4 bg-slate-50 text-sm font-mono rounded-lg border border-slate-200 focus:outline-none resize-none text-slate-700"
                />
                <button
                  onClick={copyTemplate}
                  className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors text-sm flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-sm mt-2"
                >
                  ¡Copiado al portapapeles!
                </motion.p>
              )}
            </div>
          </section>

          {/* ── ERRORS + NEXT STEPS ──────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="font-display text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Errores a evitar
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {ERRORS.map((e) => (
                  <li key={e.title} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>{e.title}:</strong> {e.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-display text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Fingerprint className="w-5 h-5" /> Próximos Pasos
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {NEXT_STEPS.map((s) => (
                  <li key={s.title} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>{s.title}:</strong> {s.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-blue-700 mt-6 mb-2 text-sm">Recursos Recomendados:</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {RESOURCES.map((r) => (
                  <span key={r} className="bg-white px-2 py-1 rounded border border-blue-100 text-slate-600">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── PRESENTACIÓN PDF ──────────────────────────────────────────── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-0.5">
                      Presentación completa
                    </p>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                      Huella Digital — Documento
                    </h2>
                  </div>
                </div>
                <a
                  href={PDF_PATH}
                  download
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-300 rounded-xl px-3 py-2"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Descargar</span>
                </a>
              </div>

              <div className="hidden sm:block w-full h-[600px] md:h-[780px] lg:h-[900px]">
                <iframe
                  src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title="Presentación Huella Digital"
                />
              </div>

              <div className="flex sm:hidden flex-col items-center gap-4 p-8 text-center">
                <FileText className="w-12 h-12 text-blue-400 opacity-60" />
                <p className="text-slate-500 text-sm">
                  El visor de PDF no está disponible en pantallas pequeñas.
                </p>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-medium px-6 py-3 rounded-full transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Ver presentación
                </a>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="pb-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-slate-900">Preguntas Frecuentes</h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full text-left px-5 py-4 font-semibold text-slate-800 hover:bg-slate-50 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-slate-400 shrink-0 ml-4"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === faq.id && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pt-3 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
