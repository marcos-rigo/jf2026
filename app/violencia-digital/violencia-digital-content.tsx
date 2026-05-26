"use client"

import { useState, useEffect, useRef } from "react"
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
  X,
  XCircle,
  ListTodo,
  Download,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  PartyPopper,
  Images,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const INFOGRAFIA_PATH = "/weekly-content/2026-W22/violenciapng.png"

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const CARRUSEL_IMAGES = Array.from({ length: 8 }, (_, i) =>
  `/weekly-content/2026-W22/carrusel/${i + 1}.svg`
)

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
    desc: "La violencia digital hacia la mujer es un delito tipificado (Ley Olimpia). El único culpable es el agresor.",
  },
]

const TEMPLATE = `Estimados, me comunico para reportar un caso de violencia digital hacia la mujer (basado en la Ley Olimpia).

He sido víctima de [acoso / difusión no consentida de imágenes / amenazas] en la plataforma [Nombre de red social].
Cuento con las siguientes pruebas resguardadas:
- Capturas de pantalla con fecha y hora.
- URL (identificador único) del perfil agresor: [Pegar URL aquí]

Solicito orientación sobre los pasos legales a seguir. Adjunto evidencias.`

const FAQS: { id: FaqId; q: string; a: string | React.ReactNode }[] = [
  {
    id: "faq1",
    q: '¿Qué es exactamente la "Ley Olimpia"?',
    a: "No es una sola ley, sino un conjunto de reformas legales (nacidas en México y expandidas por LatAm) que reconocen la violencia digital hacia la mujer y sancionan penalmente delitos como la difusión de contenido íntimo sin consentimiento y el ciberacoso.",
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)
  const lastTouchDistRef = useRef<number | null>(null)
  const lightboxAreaRef = useRef<HTMLDivElement>(null)
  const panRef = useRef({ x: 0, y: 0 })
  const zoomRef = useRef(1)
  useEffect(() => { panRef.current = pan }, [pan])
  useEffect(() => { zoomRef.current = zoom }, [zoom])

  function closeLightbox() {
    setLightboxOpen(false)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  function zoomIn() { setZoom(prev => Math.min(4, parseFloat((prev + 0.5).toFixed(1)))) }
  function zoomOut() {
    setZoom(prev => {
      const next = parseFloat((prev - 0.5).toFixed(1))
      if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
      return next
    })
  }
  function resetZoom() { setZoom(1); setPan({ x: 0, y: 0 }) }

  function onMouseDown(e: React.MouseEvent) {
    if (zoomRef.current <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = { mx: e.clientX, my: e.clientY, px: panRef.current.x, py: panRef.current.y }
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !dragStartRef.current) return
    setPan({
      x: dragStartRef.current.px + (e.clientX - dragStartRef.current.mx),
      y: dragStartRef.current.py + (e.clientY - dragStartRef.current.my),
    })
  }
  function onMouseUp() { setIsDragging(false); dragStartRef.current = null }

  useEffect(() => {
    const el = lightboxAreaRef.current
    if (!el || !lightboxOpen) return

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY < 0 ? 0.3 : -0.3
      setZoom(prev => {
        const next = parseFloat((prev + delta).toFixed(1))
        if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
        return Math.min(4, next)
      })
    }

    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        lastTouchDistRef.current = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
      } else if (e.touches.length === 1) {
        dragStartRef.current = {
          mx: e.touches[0].clientX,
          my: e.touches[0].clientY,
          px: panRef.current.x,
          py: panRef.current.y,
        }
      }
    }

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        )
        const ratio = newDist / lastTouchDistRef.current
        lastTouchDistRef.current = newDist
        setZoom(prev => {
          const next = parseFloat((prev * ratio).toFixed(2))
          if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 }
          return Math.min(4, next)
        })
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({
          x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx),
          y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my),
        })
      }
    }

    const touchEndHandler = () => {
      dragStartRef.current = null
      lastTouchDistRef.current = null
      setIsDragging(false)
    }

    el.addEventListener("wheel", wheelHandler, { passive: false })
    el.addEventListener("touchstart", touchStartHandler, { passive: false })
    el.addEventListener("touchmove", touchMoveHandler, { passive: false })
    el.addEventListener("touchend", touchEndHandler)
    return () => {
      el.removeEventListener("wheel", wheelHandler)
      el.removeEventListener("touchstart", touchStartHandler)
      el.removeEventListener("touchmove", touchMoveHandler)
      el.removeEventListener("touchend", touchEndHandler)
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen])

  function goTo(index: number, dir: number) {
    setDirection(dir)
    setCurrentSlide(index)
  }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1) }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1) }

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
      "PLAN DE ACCIÓN — VIOLENCIA DIGITAL HACIA LA MUJER",
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
    a.download = "Plan_Accion_Violencia_Digital_Hacia_La_Mujer.txt"
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
                Protocolo<span className="text-violet-500">Prevención</span>
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              Tomá el control ante la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                Violencia Digital hacia la Mujer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Estar en internet no debería dar miedo. Este es tu{" "}
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
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/10 blur-2xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-violet-300/30 shadow-[0_30px_80px_rgba(139,92,246,0.15),0_4px_24px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#1e0a3c] to-[#2e1065] border-b border-white/[0.07]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
                    <span className="text-xs text-white/50 font-mono truncate">infografia — Violencia Digital hacia la Mujer</span>
                  </div>
                </div>
                <div className="w-16 shrink-0" />
              </div>
              <div className="bg-white">
                <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                  <img
                    src={INFOGRAFIA_PATH}
                    alt="Infografía de Violencia Digital hacia la Mujer"
                    className="w-full h-auto block lg:w-auto lg:max-h-[700px] transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-xl border border-slate-200/50">
                      <ZoomIn className="w-4 h-4" />
                      Ver a pantalla completa
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
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
                  <strong>Guardá todas las pruebas:</strong> capturas de pantalla, conversaciones, imágenes, videos y cualquier otro elemento que pueda servir como evidencia. Asegurate de que se vea claramente el <strong>usuario, fecha y hora</strong> en cada captura. Documentá todo antes de bloquear o reportar.
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

          {/* ── CARRUSEL INLINE ───────────────────────────────────────────── */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-md shrink-0">
                    <Images className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-violet-500 tracking-widest uppercase mb-0.5">
                      Presentación completa
                    </p>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                      Violencia Digital hacia la Mujer — Galería
                    </h2>
                  </div>
                </div>
                <span className="text-slate-400 text-sm font-mono shrink-0">
                  {currentSlide + 1} / {CARRUSEL_IMAGES.length}
                </span>
              </div>

              {/* Imagen con flechas */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <Image
                      src={CARRUSEL_IMAGES[currentSlide]}
                      alt={`Lámina ${currentSlide + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 py-5">
                {CARRUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-6 h-2.5 bg-violet-500"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir a lámina ${i + 1}`}
                  />
                ))}
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
                <a href="https://www.oas.org/ext/es/seguridad/prog-ciber" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">OEA Seguridad Digital</a>
                <a href="https://argentina.unfpa.org/es" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">UNFPA Argentina</a>
                <a href="https://mptutelar.gob.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">Ministerio Público Tutelar</a>
              </div>
            </div>
            <p className="text-xs text-slate-400">Guía de acción construida para empoderamiento y protección.</p>
          </div>

        </div>
      </main>

      <Footer />

      {/* ── LIGHTBOX INFOGRAFÍA ───────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={zoomOut}
                disabled={zoom <= 1}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Reducir zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>

              <button
                onClick={zoomIn}
                disabled={zoom >= 4}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Aumentar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {zoom > 1 && (
                <button
                  onClick={resetZoom}
                  className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3"
                  aria-label="Restablecer zoom"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Restablecer
                </button>
              )}
            </div>

            <div
              ref={lightboxAreaRef}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía de Violencia Digital hacia la Mujer — pantalla completa"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl select-none"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.15s ease",
                    cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                  onMouseDown={onMouseDown}
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
