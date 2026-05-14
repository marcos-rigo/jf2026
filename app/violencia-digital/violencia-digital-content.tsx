"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import {
  ShieldAlert,
  Target,
  Lock,
  Search,
  Gavel,
  CheckCircle2,
  Camera,
  Link,
  Mic,
  Zap,
  AlertTriangle,
  Shield,
  Building2,
  UserX,
  ImageMinus,
  FileKey,
  XCircle,
  ListTodo,
  Download,
  FileText,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  PartyPopper,
  ZoomIn,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const INFOGRAFIA_PATH = "/weekly-content/2026-W22/infViolDig.png"
const PDF_PATH = "/weekly-content/2026-W22/PresViolDig.pdf"

// ─── Types ────────────────────────────────────────────────────────────────────
type FaqId = "faq1" | "faq2" | null

// ─── Static data ──────────────────────────────────────────────────────────────
const CHECKLIST_ITEMS = [
  { id: "chk1", label: "He activado la verificación en dos pasos." },
  { id: "chk2", label: "He hecho capturas de pantalla mostrando usuario y fecha." },
  { id: "chk3", label: "He copiado y guardado la URL (DNI digital) del agresor." },
  { id: "chk4", label: "He reportado a plataformas de soporte como StopNCII (si aplica)." },
  { id: "chk5", label: "He bloqueado al agresor DESPUÉS de guardar pruebas." },
]

const RED_FLAGS = [
  {
    title: "Borrar y Bloquear inmediatamente",
    desc: "Destruís la evidencia. Primero documentá, luego bloqueá.",
  },
  {
    title: "Avisar que vas a denunciar",
    desc: "Le das tiempo al agresor de borrar su rastro o sus cuentas. Actuá en silencio.",
  },
  {
    title: 'Creer que "es tu culpa"',
    desc: "La violencia digital es un delito tipificado (Ley Olimpia). El único culpable es el agresor.",
  },
]

const TEMPLATE = `Estimados, me comunico para reportar un caso de violencia digital (basado en la Ley Olimpia).

He sido víctima de [acoso / difusión no consentida de imágenes / amenazas] en la plataforma [Nombre de red social].
Cuento con las siguientes pruebas resguardadas:
- Capturas de pantalla con fecha y hora.
- URL (identificador único) del perfil agresor: [Pegar URL aquí]

Solicito orientación sobre los pasos legales a seguir. Adjunto evidencias.`

const FAQS: { id: FaqId; q: string; a: string | React.ReactNode }[] = [
  {
    id: "faq1",
    q: '¿Qué es exactamente la "Ley Olimpia"?',
    a: "No es una sola ley, sino un conjunto de reformas legales (nacidas en México y expandidas por LatAm) que reconocen la violencia digital y sancionan penalmente delitos como la difusión de contenido íntimo sin consentimiento y el ciberacoso.",
  },
  {
    id: "faq2",
    q: "¿Es válido legalmente un pantallazo?",
    a: (
      <>
        Sí, pero es insuficiente por sí solo. Por eso es vital <strong>copiar la URL</strong> del chat o
        perfil. Un pantallazo puede ser editado, pero la URL combinada con capturas da solidez a la
        investigación pericial.
      </>
    ),
  },
]

// ─── Main component ───────────────────────────────────────────────────────────
export default function ViolenciaDigitalContent() {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(CHECKLIST_ITEMS.map((i) => [i.id, false]))
  )
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<FaqId>(null)
  const [imgExpanded, setImgExpanded] = useState(false)

  const allChecked = CHECKLIST_ITEMS.every((i) => checked[i.id])

  function toggleCheck(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(TEMPLATE)
    } catch {
      const el = document.createElement("textarea")
      el.value = TEMPLATE
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function downloadPlan() {
    const content = [
      "PLAN DE ACCIÓN — VIOLENCIA DIGITAL",
      "=====================================",
      "",
      "CHECKLIST:",
      ...CHECKLIST_ITEMS.map((i, n) => `${n + 1}. ${i.label}`),
      "",
      "PLANTILLA DE DENUNCIA:",
      TEMPLATE,
    ].join("\n")
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Plan_Accion_Violencia_Digital.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <ShieldAlert className="w-8 h-8 text-violet-500" />
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Protocolo<span className="text-violet-500">Escudo</span>
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              Tomá el control ante la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                Violencia Digital
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Estar en internet no debería dar miedo. Esta es tu{" "}
              <strong className="text-slate-800">manual táctico paso a paso</strong> basado en la Ley Olimpia
              y protocolos internacionales para protegerte, recolectar pruebas y actuar.
            </p>

            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold border border-violet-200">
              <Target className="w-4 h-4" />
              Meta: Al terminar, tendrás un plan de acción seguro y pruebas legales válidas.
            </div>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-20 space-y-8">

          {/* ── INFOGRAFÍA GENERAL ────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-violet-500 tracking-widest uppercase mb-0.5">
                    Vista General
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                    Infografía de Violencia Digital
                  </h2>
                </div>
                <button
                  onClick={() => setImgExpanded((v) => !v)}
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-violet-600 transition-colors border border-slate-200 hover:border-violet-300 rounded-xl px-3 py-2"
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
                  alt="Infografía de Violencia Digital"
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

          {/* ── STEP 1 ───────────────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 rounded-l-2xl" />
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-50 p-3 rounded-xl text-cyan-500 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-cyan-500 tracking-wider uppercase">Paso 1</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">Asegurar el Perímetro</h3>
              </div>
            </div>

            <p className="mb-4 text-slate-600">
              <strong>Objetivo:</strong> Frenar el ataque actual sin alertar al agresor y proteger tus cuentas.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                "Activá la verificación en dos pasos (2FA) en tus redes principales.",
                "Poné tus perfiles en modo privado temporalmente.",
                "Revisá las sesiones activas y cerrá las que no reconozcas.",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-900">
                <Zap className="w-4 h-4 text-yellow-500" /> Ahora hacé esto:
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Andá a la configuración de WhatsApp/Instagram, buscá "Privacidad y Seguridad" y activá la
                verificación en dos pasos. Toma solo 30 segundos.
              </p>
              <code className="text-xs bg-slate-200 px-2 py-1 rounded font-mono text-slate-700">
                Configuración → Cuenta → Verificación en dos pasos
              </code>
            </div>
          </motion.article>

          {/* ── STEP 2 ───────────────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 rounded-l-2xl" />
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-violet-50 p-3 rounded-xl text-violet-500 shrink-0">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-violet-500 tracking-wider uppercase">Paso 2</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">Modo Investigador (Pruebas)</h3>
              </div>
            </div>

            <p className="mb-4 text-slate-600">
              <strong>Objetivo:</strong> Documentar todo legalmente <em>antes</em> de reportar a la plataforma.
              Si reportás primero, la plataforma borra la evidencia.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start text-slate-700">
                <Camera className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Tomá capturas de pantalla donde se vea claramente el{" "}
                  <strong>usuario, fecha y hora</strong>.
                </span>
              </li>
              <li className="flex gap-2 items-start text-slate-700">
                <Link className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>CRÍTICO: Copiá la URL del perfil o chat.</strong> Es el "DNI digital" del agresor.
                  Sin esto, si cambian el nombre, se pierde el rastro.
                </span>
              </li>
              <li className="flex gap-2 items-start text-slate-700">
                <Mic className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Grabá audios o guardá correos. No borrés nada por pánico.</span>
              </li>
            </ul>

            <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-violet-700">
                <AlertTriangle className="w-4 h-4" /> Ejercicio Práctico:
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Abrí el perfil del agresor en un navegador web (no en la app móvil si es posible) y copiá la
                dirección web completa que aparece arriba.
              </p>
              <input
                type="text"
                readOnly
                value="https://instagram.com/usuario_agresor123"
                className="w-full bg-white border border-violet-200 rounded-lg px-3 py-2 text-sm text-slate-500 font-mono focus:outline-none"
              />
            </div>
          </motion.article>

          {/* ── STEP 3 ───────────────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 rounded-l-2xl" />
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rose-50 p-3 rounded-xl text-rose-500 shrink-0">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-rose-500 tracking-wider uppercase">Paso 3</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">Denuncia y Contención</h3>
              </div>
            </div>

            <p className="mb-4 text-slate-600">
              <strong>Objetivo:</strong> Usar las herramientas legales (Ley Olimpia) y tecnológicas para
              detener la difusión y denunciar.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start text-slate-700">
                <Shield className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Para imágenes íntimas difundidas sin permiso, usá herramientas internacionales para
                  borrarlas de internet.
                </span>
              </li>
              <li className="flex gap-2 items-start text-slate-700">
                <Building2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Contactá a la fiscalía cibernética local o Ministerio Público con tus pruebas (URL +
                  capturas).
                </span>
              </li>
              <li className="flex gap-2 items-start text-slate-700">
                <UserX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>AHORA SÍ:</strong> Bloqueá al agresor y reportá su cuenta en la red social.
                </span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://takeitdown.ncmec.org/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition border border-slate-200 group"
              >
                <ImageMinus className="w-8 h-8 text-rose-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-center text-slate-900">Take It Down</span>
                <span className="text-xs text-center text-slate-500 mt-1">Borrar imágenes explícitas de menores</span>
              </a>
              <a
                href="https://stopncii.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition border border-slate-200 group"
              >
                <FileKey className="w-8 h-8 text-rose-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-center text-slate-900">StopNCII.org</span>
                <span className="text-xs text-center text-slate-500 mt-1">Borrar imágenes íntimas de adultos</span>
              </a>
            </div>
          </motion.article>

          {/* ── RED FLAGS ────────────────────────────────────────────────── */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-red-600 flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6" /> Errores fatales que debés evitar
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {RED_FLAGS.map((f) => (
                <div key={f.title} className="flex gap-3 items-start">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-sm text-slate-800">{f.title}</strong>
                    <span className="text-xs text-slate-600">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CHECKLIST ────────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2 text-slate-900">
                <ListTodo className="w-6 h-6 text-violet-500" /> Checklist de Acción
              </h3>
              <button
                onClick={downloadPlan}
                className="flex items-center gap-2 text-sm bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition font-medium"
              >
                <Download className="w-4 h-4" /> Descargar Plan
              </button>
            </div>

            <div className="space-y-3">
              {CHECKLIST_ITEMS.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                >
                  <div className="relative w-6 h-6 shrink-0">
                    <input
                      type="checkbox"
                      checked={checked[item.id] ?? false}
                      onChange={() => toggleCheck(item.id)}
                      className="appearance-none w-6 h-6 border-2 border-slate-300 rounded-md cursor-pointer checked:bg-violet-500 checked:border-transparent transition-all"
                    />
                    {checked[item.id] && (
                      <Check className="absolute inset-0 w-6 h-6 text-white pointer-events-none p-0.5" />
                    )}
                  </div>
                  <span
                    className={`text-sm text-slate-700 transition-all ${
                      checked[item.id] ? "line-through opacity-50" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
              ))}
            </div>

            <AnimatePresence>
              {allChecked && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <p className="text-green-700 text-sm font-semibold flex items-center gap-2">
                    <PartyPopper className="w-5 h-5" /> ¡Excelente! Has completado el protocolo básico de
                    protección. Tenés el control.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* ── COPY TEMPLATE ────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
            <h3 className="font-display text-xl font-bold flex items-center gap-2 mb-4 text-slate-900">
              <FileText className="w-5 h-5 text-cyan-500" /> Plantilla para pedir ayuda legal
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Copiá este texto para enviarlo a organizaciones de ayuda o al iniciar un reporte en la fiscalía.
            </p>
            <div className="relative">
              <textarea
                readOnly
                value={TEMPLATE}
                className="w-full h-44 p-4 bg-slate-50 text-sm font-mono rounded-lg border border-slate-200 focus:outline-none resize-none text-slate-700"
              />
              <button
                onClick={copyTemplate}
                className="absolute top-3 right-3 flex items-center gap-1.5 text-xs font-bold bg-cyan-50 text-cyan-600 hover:bg-cyan-100 border border-cyan-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copiar
                  </>
                )}
              </button>
            </div>
          </section>

          {/* ── PRESENTACIÓN PDF ──────────────────────────────────────────── */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-md shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-violet-500 tracking-widest uppercase mb-0.5">
                      Presentación completa
                    </p>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                      Violencia Digital — Documento
                    </h2>
                  </div>
                </div>
                <a
                  href={PDF_PATH}
                  download
                  className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-violet-600 transition-colors border border-slate-200 hover:border-violet-300 rounded-xl px-3 py-2"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Descargar</span>
                </a>
              </div>

              <div className="hidden sm:block w-full h-[600px] md:h-[780px] lg:h-[900px]">
                <iframe
                  src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title="Presentación Violencia Digital"
                />
              </div>

              <div className="flex sm:hidden flex-col items-center gap-4 p-8 text-center">
                <FileText className="w-12 h-12 text-violet-400 opacity-60" />
                <p className="text-slate-500 text-sm">
                  El visor de PDF no está disponible en pantallas pequeñas.
                </p>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-700 font-medium px-6 py-3 rounded-full transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Ver presentación
                </a>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="pb-4">
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
              <HelpCircle className="w-6 h-6 text-slate-400" /> Dudas Comunes
            </h3>

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

          {/* ── RESOURCES ────────────────────────────────────────────────── */}
          <div className="border-t border-slate-200 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">Recursos Oficiales Recomendados:</p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-500">
                <span className="hover:text-violet-500 transition-colors cursor-pointer">OEA Seguridad Digital</span>
                <span className="hover:text-violet-500 transition-colors cursor-pointer">UNFPA Argentina</span>
                <span className="hover:text-violet-500 transition-colors cursor-pointer">Ministerio Público Tutelar</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">Guía de acción construida para empoderamiento y protección.</p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
