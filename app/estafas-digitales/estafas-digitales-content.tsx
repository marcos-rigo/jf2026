"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Mail,
  MessageSquare,
  Phone,
  Shield,
  AlertTriangle,
  Wifi,
  Key,
  Smartphone,
  Megaphone,
  Building2,
  MapPin,
  PhoneIcon,
  Quote,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react"
import { useAppStore } from "@/lib/ciudadania/app-store"
import { useTematicaProgress } from "@/lib/hooks/use-tematica-progress"
import { TematicaCompletarButton } from "@/components/tematica-completar-button"

const INFOGRAFIA_PATH = "/weekly-content/2026-W23/infografia%205.svg"

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const CARRUSEL_IMAGES = Array.from({ length: 6 }, (_, i) =>
  `/weekly-content/2026-W23/carrusel/${i + 1}.svg`
)

export function EstafasDigitalesContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const progress = useTematicaProgress({ tematicaId: "estafas-digitales", userId })
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

  function closeLightbox() { setLightboxOpen(false); setZoom(1); setPan({ x: 0, y: 0 }) }
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
        lastTouchDistRef.current = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
      } else if (e.touches.length === 1) {
        dragStartRef.current = { mx: e.touches[0].clientX, my: e.touches[0].clientY, px: panRef.current.x, py: panRef.current.y }
      }
    }
    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
        const newDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY)
        const ratio = newDist / lastTouchDistRef.current
        lastTouchDistRef.current = newDist
        setZoom(prev => { const next = parseFloat((prev * ratio).toFixed(2)); if (next <= 1) { setPan({ x: 0, y: 0 }); return 1 } return Math.min(4, next) })
      } else if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
        setPan({ x: dragStartRef.current.px + (e.touches[0].clientX - dragStartRef.current.mx), y: dragStartRef.current.py + (e.touches[0].clientY - dragStartRef.current.my) })
      }
    }
    const touchEndHandler = () => { dragStartRef.current = null; lastTouchDistRef.current = null; setIsDragging(false) }
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

  useEffect(() => {
    const images = CARRUSEL_IMAGES.map((src) => {
      const img = new window.Image()
      img.src = src
      return img
    })

    return () => {
      images.forEach((img) => {
        img.src = ""
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const threats = [
    {
      id: "phishing",
      title: "Phishing",
      icon: Mail,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      textColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-500",
      description:
        "El engaño a través del correo electrónico. Suplantan a bancos o empresas conocidas, pidiéndote actualizar datos urgentes en sitios web falsos que imitan a la perfección a los originales.",
      example: "Su cuenta ha sido bloqueada. Ingrese aquí para verificar su identidad.",
    },
    {
      id: "smishing",
      title: "Smishing",
      icon: MessageSquare,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/50",
      textColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-500",
      description:
        "El fraude llega por SMS o WhatsApp. Aprovechan que tendemos a confiar más en los mensajes de texto. Suelen incluir enlaces acortados y apelan a tu curiosidad o al miedo de perder un paquete.",
      example:
        "Tu paquete de Correo Argentino está retenido en aduana. Paga $179 de tasa aquí.",
    },
    {
      id: "vishing",
      title: "Vishing",
      icon: Phone,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
      textColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-500",
      description:
        "La trampa mediante llamadas telefónicas (Voice Phishing). Falsos soportes técnicos o supuestos empleados de tu banco que te guían paso a paso para que instales malware o entregues tus claves.",
      example:
        "Hola, soy de Microsoft. Su ordenador está infectado, le guiaré para solucionarlo.",
    },
  ]

  const emergencySteps = [
    {
      minute: "0",
      title: "Respirar",
      icon: AlertTriangle,
      description:
        "No pierdas la tranquilidad. Actúa con rapidez y frialdad para mitigar el daño.",
    },
    {
      minute: "1",
      title: "Desconectar",
      icon: Wifi,
      description:
        "Apaga Wi-Fi y datos. Cierra la página o app. Interrumpe la conexión con el servidor atacante.",
    },
    {
      minute: "2",
      title: "Cambiar",
      icon: Key,
      description:
        "Cambia las contraseñas críticas, empezando por tu correo electrónico (la llave maestra).",
    },
    {
      minute: "3",
      title: "Activar 2FA",
      icon: Smartphone,
      description:
        "Activa la autenticación de doble factor en todas tus cuentas. Es la barrera extra fundamental.",
    },
    {
      minute: "4-5",
      title: "Revisar y Avisar",
      icon: Megaphone,
      description:
        "Busca movimientos extraños. Avisa al banco, a tu equipo de IT y advierte a tus contactos.",
    },
  ]

  const helpLines = [
    {
      number: "137",
      title: "Violencia Familiar y Sexual",
      description:
        "Contención y acompañamiento ante situaciones de violencia, incluyendo violencia digital. También por WhatsApp: 11-3133-1000.",
    },
    {
      number: "149",
      title: "Asistencia a Víctimas",
      description:
        "CENAVID. Orientación legal y psicológica gratuita para víctimas de delitos.",
    },
    {
      number: "102",
      title: "Línea de los Chicos",
      description: "Atención especializada sobre derechos de niños y adolescentes.",
    },
    {
      number: "101",
      title: "Policía de Tucumán",
      description:
        "Delitos Telemáticos: 381-438-8017. Junín 850, 1° piso, San Miguel de Tucumán.",
    },
  ]

  return (
    <>
    <main className="bg-slate-50/80 text-brand-navy">
      {/* Ambient blobs con colores de marca */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="ami-blob bg-brand-blue/20 w-[500px] h-[500px] rounded-full -top-32 -left-32 blur-[100px]" />
        <div className="ami-blob bg-brand-pink/15 w-[600px] h-[600px] rounded-full top-[20%] -right-40 blur-[120px] [animation-delay:-5s]" />
        <div className="ami-blob bg-brand-navy/10 w-[400px] h-[400px] rounded-full bottom-[5%] left-[10%] blur-[80px] [animation-delay:-3s]" />
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />

      {/* ════════════════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-100/80 text-red-700 font-medium text-xs sm:text-sm mb-5 sm:mb-6 border border-red-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                Aumento de amenazas digitales en 2026
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.05]">
                Prevenite de las{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Estafas Digitales
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Los ciberdelincuentes están utilizando Inteligencia Artificial para crear fraudes
                bancarios y móviles más sofisticados. Conoce cómo operan, cómo detectarlos y qué
                hacer si caes en la trampa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#amenazas"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-bold text-sm sm:text-lg transition duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Conocer Amenazas
                  <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.a>

                <motion.a
                  href="#emergencia"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/80 text-brand-navy border-2 border-slate-200/60 hover:border-brand-blue font-bold text-sm sm:text-lg transition duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-red-500" />
                  Fui Víctima
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-pink/20 blur-2xl rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Ciberseguridad y protección digital"
                  className="rounded-2xl shadow-2xl relative object-cover h-[420px] lg:h-[500px] w-full border-4 border-white/80"
                />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 shadow-xl border border-slate-200/50 z-20"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-[0_0_12px_rgba(34,197,94,0.3)]">
                      <Shield className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Navegación Segura
                      </p>
                      <p className="text-xs text-slate-500">Protección Activa</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          INFOGRAFÍA GENERAL
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-pink/10 blur-3xl rounded-3xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_30px_80px_rgba(66,114,187,0.1),0_4px_24px_rgba(0,0,0,0.08)] bg-white">
            <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-brand-navy to-brand-dark border-b border-white/[0.07]">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_4px_#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_4px_#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_4px_#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.07] border border-white/[0.1] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse shrink-0 shadow-[0_0_6px_#4272BB]" />
                  <span className="text-xs text-white/50 font-mono truncate">infografia — Estafas Digitales</span>
                </div>
              </div>
              <div className="w-16 shrink-0" />
            </div>
            <div className="bg-white lg:flex lg:justify-center">
              <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía de Estafas Digitales"
                  className="w-full h-auto block lg:w-auto lg:max-h-[560px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-xl border border-slate-200/50">
                    <ZoomIn className="w-4 h-4" />
                    Ver a pantalla completa
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          LAS 3 AMENAZAS
          ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="amenazas"
        className="py-16 sm:py-20 bg-brand-light-blue/50"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <p className="text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2">
              Ingeniería Social
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 text-brand-navy">
              Las 3 formas más comunes de estafa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Desde correos falsos hasta voces clonadas por IA. Entiende la diferencia fundamental
              entre estos tres métodos y cómo los atacantes juegan con tus emociones.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {threats.map((threat, idx) => {
              const IconComponent = threat.icon
              return (
                <motion.div
                  key={threat.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 overflow-hidden border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-300"
                >
                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br ${threat.color} opacity-10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110`}
                  />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl ${threat.bgColor} flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <IconComponent className={`w-6 sm:w-7 h-6 sm:h-7 ${threat.textColor}`} />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3 text-brand-navy group-hover:text-brand-blue transition-colors">
                    {threat.title}
                  </h3>
                  <p className="text-slate-600 mb-5 sm:mb-6 text-sm leading-relaxed">
                    {threat.description}
                  </p>

                  {/* Example Box */}
                  <div
                    className={`bg-slate-50/80 rounded-lg p-3.5 sm:p-4 border-l-4 ${threat.borderColor} group-hover:bg-white transition-colors`}
                  >
                    <p className="font-display font-semibold text-slate-800 mb-1.5 flex items-center gap-2 text-xs sm:text-sm">
                      <Quote className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-400" />
                      Ejemplo típico:
                    </p>
                    <p className="text-slate-600 italic text-xs sm:text-sm leading-relaxed">
                      "{threat.example}"
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          EMERGENCY RESPONSE (5 MINUTOS)
          ════════════════════════════════════════════════════════════════════════ */}
      <section id="emergencia" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 shadow-[0_2px_10px_rgba(239,68,68,0.5)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-red-600/20 text-white overflow-hidden"
          >
            {/* Background overlay pattern */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22 opacity=%220.2%22/></svg>')]" />
            </div>
            <div className="absolute -right-20 -top-20 w-40 sm:w-60 h-40 sm:h-60 bg-red-500/30 rounded-full blur-[60px] sm:blur-[80px]" />
            <div className="absolute -left-20 bottom-0 w-32 sm:w-48 h-32 sm:h-48 bg-orange-500/20 rounded-full blur-[50px] sm:blur-[60px]" />

            <div className="relative z-10">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 md:mb-12">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 backdrop-blur-sm border border-white/30 shadow-lg"
                >
                  <AlertTriangle className="w-8 sm:w-10 h-8 sm:h-10" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3 sm:mb-4">¿Caíste en la trampa?</h2>
                <p className="text-red-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  No pierdas tiempo. Los primeros 5 minutos son cruciales para evitar que los
                  atacantes tomen el control de tu dinero y tu información.
                </p>
              </motion.div>

              {/* Timeline Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
                {emergencySteps.map((step, idx) => {
                  const StepIcon = step.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-red-200 font-bold text-xs mb-2 sm:mb-3 uppercase tracking-wide">
                        Minuto {step.minute}
                      </div>
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-white/20 transition-colors">
                        <StepIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-display font-bold mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-red-100 leading-relaxed">{step.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CARRUSEL INLINE
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] overflow-hidden">
            {/* Header */}
            <div className="px-5 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-slate-100/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-lg shadow-brand-blue/25 shrink-0 group-hover:scale-105 transition-transform">
                  <Images className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                    Presentación
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-brand-navy">
                    Estafas Digitales
                  </h2>
                </div>
              </div>
              <span className="text-slate-400 text-sm font-mono shrink-0 bg-slate-100/50 px-3 py-1.5 rounded-full">
                {currentSlide + 1} / {CARRUSEL_IMAGES.length}
              </span>
            </div>

            {/* Imagen con flechas */}
            <div className="relative overflow-hidden lg:bg-gradient-to-b lg:from-slate-50/50 lg:to-slate-100/30">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-[320px] sm:h-[380px] lg:h-[500px] flex items-center justify-center"
                >
                  <Image
                    src={CARRUSEL_IMAGES[currentSlide]}
                    alt={`Lámina ${currentSlide + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5">
              {CARRUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-6 sm:w-8 h-2.5 bg-brand-blue shadow-[0_0_8px_#4272BB]"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:w-4 transition-all"
                  }`}
                  aria-label={`Ir a lámina ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

{/* ════════════════════════════════════════════════════════════════════════
          HELP & REPORTING
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-light-blue/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 gap-6 md:gap-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2">
                Asistencia Legal
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 text-brand-navy">
                Dónde denunciar en Argentina
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Si fuiste víctima de un ciberdelito, el Estado cuenta con herramientas y fiscalías
                especializadas para asesorarte y tomar tu denuncia.
              </p>
            </div>
          </motion.div>

          {/* Help Organizations */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* UFECI */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-5 sm:gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <Building2 className="w-7 sm:w-8 h-7 sm:h-8" />
              </motion.div>
              <div>
                <h4 className="text-lg sm:text-xl font-display font-bold mb-2 text-brand-navy group-hover:text-brand-blue transition-colors">
                  UFECI (Nacional)
                </h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Unidad Fiscal Especializada en Ciberdelincuencia. Para denunciar grooming (el
                  acoso de un adulto a un menor con fines de abuso) u otros delitos informáticos a
                  nivel nacional.
                </p>
                <ul className="text-sm space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Sarmiento 663, Piso 6, CABA.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-brand-blue" />
                    <span>(54-11) 5071-0040</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <span>denunciasufeci@mpf.gov.ar</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* División Delitos Telemáticos Tucumán */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-5 sm:gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200/60 hover:border-brand-pink/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <MapPin className="w-7 sm:w-8 h-7 sm:h-8" />
              </motion.div>
              <div>
                <h4 className="text-lg sm:text-xl font-display font-bold mb-2 text-brand-navy group-hover:text-brand-pink transition-colors">
                  Delitos Telemáticos (Tucumán)
                </h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  División especializada de la Policía de Tucumán para ciberdelitos. Podés ir
                  personalmente o comunicarte para recibir asesoramiento.
                </p>
                <ul className="text-sm space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                    <span>Junín 850, 1° Piso, San Miguel de Tucumán.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-brand-pink" />
                    <span>381-438-8017</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                  También podés hacer la denuncia en la <strong>comisaría más cercana</strong> a tu domicilio.
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>
    </main>

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
              <button onClick={zoomOut} disabled={zoom <= 1} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>
              <button onClick={zoomIn} disabled={zoom >= 4} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoom > 1 && (
                <button onClick={resetZoom} className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3">
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
                  alt="Infografía de Estafas Digitales — pantalla completa"
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
      <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
    </>
  )
}
