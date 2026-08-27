"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
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
  ExternalLink,
  BookOpen,
  History,
  UserCheck,
  FileText,
  School,
  HeartHandshake,
  ArrowUpRight,
  Lock,
  Sparkles,
  Clock,
  Activity,
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
  Link as LinkIcon,
  ArrowUp,
  Cpu,
  Zap,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function EstafasDigitalesContent() {
  const userId = useAppStore((s) => s.user?.id ?? null)
  const progress = useTematicaProgress({ tematicaId: "estafas-digitales", userId })
  
  // Progress Bar de lectura superior
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  // Estado para el botón flotante "Volver Arriba"
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Estados de Carrusel y Lightbox
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

  // Motores psicológicos de la Ingeniería Social (Bento Grid)
  const motoresPsicologicos = [
    {
      id: "urgencia",
      title: "Urgencia Artificial y Presión Temporal",
      phrase: '"Tu cuenta caduca en 15 minutos"',
      icon: Clock,
      gradient: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400/40",
      glowBg: "bg-amber-500/10",
      textColor: "text-amber-900",
      description:
        "Forzar decisiones impulsivas en pocos segundos eliminando todo margen de reflexión o verificación cruzada. El atacante induce la ilusión de que no actuar inmediatamente provocará una pérdida irreparable.",
    },
    {
      id: "miedo",
      title: "Miedo e Intimidación",
      phrase: '"Infracción judicial o embargo inminente"',
      icon: AlertTriangle,
      gradient: "from-red-500 to-rose-600",
      accentBorder: "border-red-400/40",
      glowBg: "bg-red-500/10",
      textColor: "text-red-900",
      description:
        "Alertas alarmistas sobre suspensiones bancarias, supuestos procesos legales o retención de compras. El estado de pánico bloquea la lucidez crítica y empuja a seguir las instrucciones del atacante.",
    },
    {
      id: "autoridad",
      title: "Principio de Autoridad",
      icon: ShieldAlert,
      phrase: '"Soporte Técnico Oficial / Ministerio / Banco"',
      gradient: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-400/40",
      glowBg: "bg-blue-500/10",
      textColor: "text-blue-900",
      description:
        "Falsa representación institucional de personal directivo, mesas de ayuda o entes recaudadores. La tendencia a obedecer jerarquías reconocidas facilita la entrega de claves y tokens.",
    },
    {
      id: "recompensa",
      title: "Recompensa y Curiosidad",
      phrase: '"Crédito preaprobado o ítems exclusivos"',
      icon: Sparkles,
      gradient: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400/40",
      glowBg: "bg-emerald-500/10",
      textColor: "text-emerald-900",
      description:
        "Señuelos hiperatractivos como premios en efectivo, monedas virtuales de juegos masivos (Roblox, Fortnite), subsidios estafadores o becas que apelan al deseo o a la ingenuidad de los jóvenes.",
    },
  ]

  // Amenazas principales
  const threats = [
    {
      id: "phishing",
      title: "Phishing",
      subtitle: "Suplantación por Correo Electrónico",
      icon: Mail,
      gradient: "from-blue-600 to-cyan-600",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description:
        "Diseños hiperrealistas que replican a la perfección páginas de login de bancos, redes sociales o plataformas de streaming. Los enlaces conducen a servidores fraudulentos destinados a capturar credenciales.",
      example: "Estimado cliente: Registramos accesos inusuales a su Home Banking. Verifique sus datos aquí para evitar la suspensión definitiva.",
    },
    {
      id: "smishing",
      title: "Smishing",
      subtitle: "SMS y Mensajería Instantánea",
      icon: MessageSquare,
      gradient: "from-emerald-600 to-teal-600",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description:
        "Engaño directo al celular a través de WhatsApp o SMS. Explota la inmediatez de la mensajería móvil pidiendo validar códigos de 6 dígitos o abonar falsas tasas de envío.",
      example: "Correo Argentino: Tu paquete está retenido en depósito por falta de pago de tasa aduanera ($179). Regularizalo aquí: https://bit.ly/correo-pago",
    },
    {
      id: "vishing",
      title: "Vishing",
      subtitle: "Voice Phishing y Llamadas con IA",
      icon: Phone,
      gradient: "from-purple-600 to-pink-600",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      description:
        "Llamadas telefónicas engañosas donde el atacante personifica a un operador bancario o técnico. Hoy en 2026, la IA permite clonar audios de voz hiperrealistas con apenas 3 segundos de muestra extraída de redes.",
      example: "Hola, habla el equipo de seguridad oficial. Detectamos un intento de transferencia extraña. Acérquese al cajero o dicteme su Token de validación.",
    },
  ]

  // Pasos de emergencia 5 minutos
  const emergencySteps = [
    {
      minute: "0",
      title: "Respirar",
      icon: AlertTriangle,
      description: "Mantener la calma. Actuar con frialdad y rapidez técnica para mitigar cualquier daño patrimonial o de privacidad.",
    },
    {
      minute: "1",
      title: "Desconectar",
      icon: Wifi,
      description: "Apagar inmediatamente el Wi-Fi y los datos móviles del dispositivo. Interrumpir el flujo de datos con el servidor atacante.",
    },
    {
      minute: "2",
      title: "Cambiar",
      icon: Key,
      description: "Modificar las contraseñas maestras, comenzando prioritariamente por el correo electrónico de recuperación principal.",
    },
    {
      minute: "3",
      title: "Activar 2FA",
      icon: Smartphone,
      description: "Habilitar la verificación en dos pasos (autenticador de Google/Microsoft) en todas las cuentas y billeteras digitales.",
    },
    {
      minute: "4-5",
      title: "Revisar y Avisar",
      icon: Megaphone,
      description: "Contactar a la entidad financiera o soporte de la billetera digital para congelar tarjetas y alertar a la red de contactos directos.",
    },
  ]

  // Protocolo escolar ante un alumno afectado
  const protocoloEscolar = [
    {
      paso: "01",
      titulo: "Escucha y Desculpabilización",
      icon: HeartHandshake,
      badge: "Contención Humana",
      desc: "Recibir y alojar al estudiante sin emitir juzgamientos ni retos. Comprender que es víctima de una maniobra de ingeniería social diseñada profesionalmente para engañar.",
    },
    {
      paso: "02",
      titulo: "Preservación de Evidencia Digital",
      icon: FileText,
      badge: "Resguardo Jurídico",
      desc: "Tomar capturas de pantalla completas (mostrando hora, número de remitente, URLs y comprobantes) antes de borrar la conversación o bloquear al atacante.",
    },
    {
      paso: "03",
      titulo: "Aislamiento Inmediato de Sesiones",
      icon: Lock,
      badge: "Mitigación Técnica",
      desc: "Cerrar y desvincular inmediatamente las sesiones de correo o redes sociales que hayan quedado abiertas en computadoras o tablets del establecimiento escolar.",
    },
    {
      paso: "04",
      titulo: "Acompañamiento y Articulación",
      icon: Shield,
      badge: "Derivación Formal",
      desc: "Notificar a los adultos responsables del estudiante, registrar el hecho en el acta institucional y canalizar la consulta formal ante los organismos de protección y ciberdelito.",
    },
  ]

  // Canales oficiales de ayuda y denuncias (Renderizado exhaustivo)
  const helpLines = [
    {
      id: "ufeci",
      title: "UFECI — Fiscalía Especializada en Ciberdelincuencia",
      subtitle: "Ministerio Público Fiscal de la Nación",
      number: "(54-11) 5071-0040",
      email: "denunciasufeci@mpf.gov.ar",
      address: "Sarmiento 663, Piso 6, CABA",
      web: "https://www.fiscales.gob.ar/ciberdelincuencia/",
      description:
        "Organismo especializado para la investigación judicial de fraudes informáticos, clonación de identidades, accesos ilegítimos y grooming a nivel nacional.",
      icon: Building2,
      badge: "Alcance Nacional",
    },
    {
      id: "tucuman-telematicos",
      title: "División Delitos Telemáticos — Policía de Tucumán",
      subtitle: "Policía de la Provincia de Tucumán",
      number: "381-438-8017",
      email: null,
      address: "Junín 850, 1° Piso, San Miguel de Tucumán",
      web: null,
      description:
        "Unidad policial técnico-operativa para la recepción presencial o telefónica de denuncias sobre estafas digitales y delitos cibernéticos en Tucumán.",
      icon: MapPin,
      badge: "Tucumán",
    },
    {
      id: "cenavid",
      title: "Línea 149 — CENAVID",
      subtitle: "Ministerio de Justicia y Derechos Humanos",
      number: "149",
      email: null,
      address: "Atención Gratuita las 24 horas",
      web: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia",
      description:
        "Centro de Asistencia a las Víctimas de Delitos. Brinda orientación legal, contención psicológica y acompañamiento interdisciplinario gratuito.",
      icon: PhoneIcon,
      badge: "24/7 Gratuito",
    },
    {
      id: "linea-137",
      title: "Línea 137 — Violencia Digital y Familiar",
      subtitle: "Programa Las Víctimas contra las Violencias",
      number: "137",
      email: "WhatsApp: 11-3133-1000",
      address: "Atención Nacional Telefónica y Digital",
      web: "https://www.argentina.gob.ar/justicia/linea137",
      description:
        "Asistencia profesional y contención ante casos de acoso digital, extorsión virtual, difusión no consentida de imágenes y violencia en redes.",
      icon: MessageSquare,
      badge: "Contención Inmediata",
    },
    {
      id: "linea-102",
      title: "Línea 102 — Derechos de Niñas, Niños y Adolescentes",
      subtitle: "Sistema de Protección Integral",
      number: "102",
      email: null,
      address: "Atención Jurisdiccional Gratuita",
      web: null,
      description:
        "Servicio telefónico gratuito y confidencial de escucha, contención y orientación sobre vulneración de derechos de la infancia y adolescencia.",
      icon: UserCheck,
      badge: "Protección Infancias",
    },
    {
      id: "linea-101",
      title: "Línea 101 / Comisaría Jurisdiccional",
      subtitle: "Emergencias Policiales",
      number: "101",
      email: null,
      address: "Comisaría de tu localidad",
      web: null,
      description:
        "Para situaciones de emergencia o radicación de la denuncia policial presencial con entrega de constancia o acta formal escrita.",
      icon: ShieldAlert,
      badge: "Emergencias",
    },
  ]

  // Fuentes oficiales citadas
  const fuentesCitadas = [
    {
      titulo: "UFECI — Reportes de Ciberdelincuencia en Argentina",
      entidad: "Unidad Fiscal Especializada en Ciberdelincuencia (MPF)",
      url: "https://www.fiscales.gob.ar/ciberdelincuencia/",
      descripcion:
        "Informes y estadísticas judiciales sobre la evolución de delitos informáticos, accesos ilegítimos y estafas bancarias en la Argentina.",
    },
    {
      titulo: "BCRA — Campaña #VosSosLaClave",
      entidad: "Banco Central de la República Argentina",
      url: "https://www.bcra.gob.ar/como-prevenir-estafas-virtuales/",
      descripcion:
        "Normativas de seguridad financiera, recomendaciones operativas para el uso seguro de homebanking, CBU/CVU, transferencias y billeteras digitales.",
    },
    {
      titulo: "CENAVID — Asistencia a Víctimas de Delitos",
      entidad: "Ministerio de Justicia y Derechos Humanos de la Nación",
      url: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia",
      descripcion:
        "Portal oficial de orientación jurídica y contención psicosocial para ciudadanas y ciudadanos afectados por delitos digitales.",
    },
    {
      titulo: "Mitnick, K. & Simon, W. (2002)",
      entidad: "The Art of Deception: Controlling the Human Element of Security",
      url: "https://www.wiley.com/en-us/The+Art+of+Deception%3A+Controlling+the+Human+Element+of+Security-p-9780471237129",
      descripcion:
        "Obra académica referente sobre Ingeniería Social donde se teoriza que el factor humano constituye el eslabón más vulnerable de cualquier sistema de seguridad.",
    },
  ]

  return (
    <>
      {/* ── BARRA DE PROGRESO DE LECTURA FIX SUPERIOR ─────────────────────────── */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 origin-left z-50 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue shadow-[0_0_15px_rgba(66,114,187,0.8)]"
      />

      <main className="bg-slate-50/80 text-brand-navy min-h-screen relative selection:bg-brand-blue/20 selection:text-brand-navy">
        {/* Ambient Blobs Tecnológicos */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="ami-blob bg-brand-blue/20 w-[550px] h-[550px] rounded-full -top-36 -left-36 blur-[110px]" />
          <div className="ami-blob bg-brand-pink/15 w-[650px] h-[650px] rounded-full top-[25%] -right-48 blur-[130px] [animation-delay:-5s]" />
          <div className="ami-blob bg-brand-navy/10 w-[450px] h-[450px] rounded-full bottom-[10%] left-[5%] blur-[90px] [animation-delay:-3s]" />
        </div>

        {/* Noise texture overlay sutil */}
        <div
          className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
        />

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 1: HERO & IMPACTO EDUCATIVO 2026
            ════════════════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-100/90 text-red-700 font-semibold text-xs sm:text-sm mb-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 animate-pulse shrink-0" />
                  <span>Aumento de amenazas digitales en 2026 — Inteligencia Artificial y Fraudes Híbridos</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 leading-[1.08] text-brand-navy">
                  Prevenite de las{" "}
                  <span className="bg-gradient-to-r from-brand-blue via-brand-pink to-brand-navy bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Estafas Digitales
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  El acelerado despliegue de herramientas de Inteligencia Artificial (como la clonación de voz en tiempo real y la suplantación automatizada) ha sofisticado los fraudes cibernéticos. Tus estudiantes —que operan cotidianamente con billeteras digitales como Mercado Pago, Cuenta DNI, MODO o Ualá— constituyen un blanco directo. Esta guía dota al cuerpo docente del marco conceptual, técnico y legal para anticipar engaños, proteger el entorno escolar y actuar institucionalmente con firmeza.
                </p>

                {/* Botones de Salto Rápido (Jump Links) */}
                <div className="pt-4 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center lg:text-left">
                    Accesos Rápidos a Secciones
                  </p>
                  <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                    <a
                      href="#concepto"
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-brand-blue hover:text-brand-blue font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5"
                    >
                      <BookOpen className="w-4 h-4 text-brand-blue" />
                      #concepto
                    </a>
                    <a
                      href="#amenazas"
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-brand-blue hover:text-brand-blue font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-500" />
                      #amenazas
                    </a>
                    <a
                      href="#emergencia"
                      className="px-4 py-2.5 rounded-xl bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5"
                    >
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      #emergencia
                    </a>
                    <a
                      href="#aula"
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-brand-blue hover:text-brand-blue font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5"
                    >
                      <School className="w-4 h-4 text-emerald-600" />
                      #aula
                    </a>
                    <a
                      href="#recursos"
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-brand-blue hover:text-brand-blue font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5"
                    >
                      <LinkIcon className="w-4 h-4 text-brand-pink" />
                      #recursos
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 via-brand-pink/15 to-transparent blur-2xl rounded-3xl pointer-events-none" />
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                    alt="Ciberseguridad y protección digital en la comunidad educativa"
                    className="rounded-3xl shadow-2xl relative object-cover h-[380px] sm:h-[440px] w-full border-4 border-white/90"
                  />

                  {/* Badge Flotante Tecnológico */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 z-20 max-w-[270px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.3)] shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 leading-tight">
                          Prevención Digital Activa
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                          Formación continua para la comunidad docente
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 2: MARCO CONCEPTUAL — LA INGENIERÍA SOCIAL
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="concepto" className="py-16 sm:py-24 bg-white/70 border-y border-slate-200/60 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
                Fundamento Conceptual
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                La Ingeniería Social: El Ataque a la Confianza Humana
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Lejos de tratarse de fallas técnicas en el software o de bugs de programación, las estafas digitales modernas son ataques premeditados a la psicología, la credulidad y las emociones de las personas.
              </p>
            </motion.div>

            {/* Cita Académica Kevin Mitnick */}
            <motion.div variants={itemVariants} className="mb-14 max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-brand-navy via-slate-900 to-brand-dark rounded-3xl p-6 sm:p-10 shadow-2xl text-white overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
                <Quote className="w-14 sm:w-20 h-14 sm:h-20 text-brand-blue/20 absolute top-4 left-4 pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-lg sm:text-xl lg:text-2xl font-display font-semibold italic text-slate-100 leading-relaxed mb-6">
                    "El eslabón más vulnerable de cualquier cadena de seguridad no es el código ni los cortafuegos, sino el factor humano. Se pueden invertir millones en cifrado de última generación, pero si un atacante logra manipular a una persona para que entregue su clave, el sistema entero colapsa."
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/30 border border-brand-blue/50 flex items-center justify-center text-brand-blue font-bold font-mono text-base shadow-md">
                      KM
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base sm:text-lg">
                        Kevin Mitnick
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Referente Internacional en Ciberseguridad & Autor de <span className="italic">The Art of Deception (2002)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Grid de los 4 Motores del Engaño */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-8 text-brand-navy text-center">
                Los 4 Motores Psicológicos del Engaño Digital
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {motoresPsicologicos.map((motor) => {
                  const IconComp = motor.icon
                  return (
                    <div
                      key={motor.id}
                      className={`rounded-3xl p-6 border backdrop-blur-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${motor.accentBorder} group hover:-translate-y-1`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${motor.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                            <IconComp className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            Motor #{motor.id}
                          </span>
                        </div>

                        <h4 className="text-lg font-display font-bold mb-1.5 text-brand-navy">
                          {motor.title}
                        </h4>

                        <p className="text-xs font-semibold text-brand-blue italic mb-3">
                          {motor.phrase}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {motor.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 3: HISTORIA Y EVOLUCIÓN TECNOLÓGICA
            ════════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-brand-light-blue/40 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-pink tracking-widest uppercase mb-2 bg-brand-pink/10 px-4 py-1.5 rounded-full border border-brand-pink/20">
                Evolución Histórica
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                Línea de Tiempo Interactiva del Engaño Digital
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Comprender la genealogía del fraude permite anticipar cómo las técnicas migran al compás de cada salto tecnológico.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 1995-1996 */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-brand-blue/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-extrabold text-base shadow-inner">
                      1995
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        America Online (AOL)
                      </span>
                      <h3 className="text-lg font-display font-bold text-brand-navy">
                        Origen del Phishing
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Nacido en los grupos de chat de AOL. Es una derivación de <strong>fishing</strong> ("pescar" víctimas desprevenidas con carnadas digitales) combinada con el prefijo <strong>"ph"</strong> en tributo a los <em>phreaks</em> (piratas telefónicos de los años 70).
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-700">
                    <p className="font-semibold text-brand-navy flex items-center gap-1.5 mb-1">
                      <History className="w-4 h-4 text-blue-600" />
                      Carnada histórica:
                    </p>
                    <p className="italic">
                      "Mensajes simulando ser administradores solicitando verificar tarjetas para no perder el acceso a la cuenta."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2000-2010 */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono font-extrabold text-base shadow-inner">
                      2000s
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                        Dispositivos Móviles
                      </span>
                      <h3 className="text-lg font-display font-bold text-brand-navy">
                        Mutación Móvil: Smishing & Vishing
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Con la masificación del celular, el engaño migró del email hacia el bolsillo del usuario. Nacieron el <strong>Smishing</strong> (fraudes por SMS y WhatsApp) y el <strong>Vishing</strong> (Voice Phishing mediante llamadas telefónicas fraudulentas).
                  </p>

                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs text-slate-700">
                    <p className="font-semibold text-emerald-900 flex items-center gap-1.5 mb-1">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      Canal predominante:
                    </p>
                    <p className="italic">
                      "SMS sospechosos sobre paquetes retenidos o llamadas de supuestos empleados bancarios."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2024-2026 */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-brand-pink/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-mono font-extrabold text-base shadow-inner">
                      2026
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-pink uppercase tracking-wider block">
                        IA Generativa & Deepfakes
                      </span>
                      <h3 className="text-lg font-display font-bold text-brand-navy">
                        Fraudes Híbridos Sintéticos
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    La Inteligencia Artificial permite la clonación de voz hiperrealista con solo 3 segundos de muestra de audio y la creación de mensajes sintéticos ultra personalizados adaptados a las redes sociales del estudiante.
                  </p>

                  <div className="bg-brand-pink/5 rounded-2xl p-4 border border-brand-pink/20 text-xs text-slate-700">
                    <p className="font-semibold text-brand-pink flex items-center gap-1.5 mb-1">
                      <Cpu className="w-4 h-4 text-brand-pink" />
                      Desafío en las aulas:
                    </p>
                    <p className="italic">
                      "Audios de WhatsApp imitando a la perfección la voz de familiares solicitando transferencias urgentes."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 4: INFOGRAFÍA CENTRAL CON LIGHTBOX
            ════════════════════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-pink/10 blur-3xl rounded-3xl pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white">
              {/* Barra de Ventana macOS */}
              <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-brand-navy to-brand-dark border-b border-white/[0.08]">
                <div className="flex gap-2 shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg px-5 py-1 flex items-center gap-2 max-w-sm w-full">
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shrink-0 shadow-[0_0_8px_#4272BB]" />
                    <span className="text-xs text-white/80 font-mono truncate">infografia — Estafas Digitales en Argentina</span>
                  </div>
                </div>
                <div className="w-16 shrink-0" />
              </div>

              {/* Imagen Infografía con interacción */}
              <div className="bg-white lg:flex lg:justify-center">
                <div className="relative group lg:cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                  <img
                    src={INFOGRAFIA_PATH}
                    alt="Infografía interactiva sobre Estafas Digitales"
                    className="w-full h-auto block lg:w-auto lg:max-h-[580px] transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2.5 bg-white text-brand-navy font-bold text-sm px-6 py-3 rounded-full shadow-2xl border border-slate-200">
                      <ZoomIn className="w-5 h-5 text-brand-blue" />
                      Ver a pantalla completa (Zoom & Paneo)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 5: RADIOGRAFÍA DEL RIESGO EN ARGENTINA
            ════════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white/80 border-y border-slate-200/60 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
                Estadísticas y Fuentes Verificadas
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                Radiografía del Riesgo Digital en Argentina
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Datos duros brindados por organismos oficiales de investigación judicial y regulación financiera del país.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarjeta UFECI */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-red-100 text-red-800 border border-red-200">
                      Reportes MPF / UFECI
                    </span>
                    <Building2 className="w-7 h-7 text-red-600" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy mb-3">
                    +34.000 <span className="text-lg font-sans font-normal text-slate-600">denuncias tramitadas</span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    La <strong>Unidad Fiscal Especializada en Ciberdelincuencia (UFECI)</strong> señala que los fraudes informáticos y accesos no autorizados encabezan el ranking de delitos cibernéticos en el país, registrando incrementos interanuales constantes superiores al 200%.
                  </p>
                </div>

                <a
                  href="https://www.fiscales.gob.ar/ciberdelincuencia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-sm font-bold text-brand-blue hover:text-blue-700 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm transition-all group"
                >
                  <span>Portal Oficial UFECI</span>
                  <ExternalLink className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Tarjeta BCRA */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                      Normativa Financiera BCRA
                    </span>
                    <Shield className="w-7 h-7 text-brand-blue" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy mb-3">
                    #VosSosLaClave <span className="text-lg font-sans font-normal text-slate-600">Campaña BCRA</span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    El <strong>Banco Central de la República Argentina</strong> exige autenticación reforzada en billeteras virtuales y homebanking, estableciendo recomendaciones críticas para resguardar CBU/CVU, tokens de seguridad y transferencias inmediatas.
                  </p>
                </div>

                <a
                  href="https://www.bcra.gob.ar/como-prevenir-estafas-virtuales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-sm font-bold text-brand-blue hover:text-blue-700 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm transition-all group"
                >
                  <span>Prevención de Estafas Digitales BCRA</span>
                  <ExternalLink className="w-4 h-4 text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 6: MODALIDADES PRINCIPALES Y EJEMPLOS REALES (Threats)
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="amenazas" className="py-16 sm:py-24 bg-brand-light-blue/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
                Tipologías de Amenaza
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                Las 3 Modalidades Principales de Estafa
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Reconocer los patrones visuales y de redacción de cada vector permite identificar maniobras de suplantación en segundos.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {threats.map((threat) => {
                const IconComponent = threat.icon
                return (
                  <motion.div
                    key={threat.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl border border-slate-200/80 hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${threat.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${threat.badgeColor}`}>
                          {threat.title}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                        {threat.subtitle}
                      </span>

                      <h3 className="text-xl font-display font-bold mb-3 text-brand-navy group-hover:text-brand-blue transition-colors">
                        {threat.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {threat.description}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 border-l-4 border-brand-blue">
                      <p className="font-display font-semibold text-slate-800 mb-1 flex items-center gap-2 text-xs">
                        <Quote className="w-4 h-4 text-slate-400 shrink-0" />
                        Ejemplo Real Detectado:
                      </p>
                      <p className="text-slate-700 italic text-xs leading-relaxed">
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
            SECCIÓN 7: PROTOCOLO DE EMERGENCIA EN 5 MINUTOS (¿Caíste en la trampa?)
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="emergencia" className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 shadow-[0_2px_12px_rgba(239,68,68,0.6)]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-red-600 via-red-700 to-rose-900 rounded-3xl p-8 sm:p-12 shadow-2xl text-white overflow-hidden border border-red-500/40"
            >
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22 opacity=%220.2%22/></svg>')]" />
              </div>

              <div className="relative z-10">
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/30 shadow-xl">
                    <AlertTriangle className="w-10 h-10 text-white animate-bounce" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4">
                    ¿Caíste en la trampa? Protocolo en 5 Minutos
                  </h2>
                  <p className="text-red-100 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
                    La velocidad de reacción tras un engaño es la variable determinante para impedir el control de tus datos o la sustracción de fondos.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  {emergencySteps.map((step, idx) => {
                    const StepIcon = step.icon
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/20 transition-all duration-300"
                      >
                        <div>
                          <div className="text-red-200 font-mono font-bold text-xs mb-2 uppercase tracking-wider">
                            Minuto {step.minute}
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 text-white">
                            <StepIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-base font-display font-bold mb-2">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 8: QUÉ SIGNIFICA PARA EL AULA — GUÍA DOCENTE
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="aula" className="py-16 sm:py-24 bg-white/80 border-y border-slate-200/60 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
                Abordaje Pedagógico
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                El Rol Docente: De la Prohibición a la Pausa Cognitiva
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                La prohibición estricta de las pantallas incrementa el secretismo e impide que un alumno afectado busque ayuda institucional oportuna por temor a ser sancionado.
              </p>
            </motion.div>

            {/* Tarjeta Pedagogía del Cuidado */}
            <motion.div variants={itemVariants} className="mb-14">
              <div className="bg-gradient-to-r from-brand-navy to-brand-dark rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-mono font-bold mb-4 border border-brand-blue/30">
                      <School className="w-4 h-4" />
                      Pedagogía del Cuidado
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                      Promover la Pausa Cognitiva en la Escuela
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      La respuesta didáctica más efectiva ante la urgencia artificial del delito es entrenar la <strong>pausa cognitiva</strong>: ante cualquier notificación que exija clave, dinero o decisiones inmediatas, la consigna del aula es pausar, desconfiar y validar con un adulto de confianza.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <strong>Desdramatizar el error:</strong> Dejar en claro que caer en una trampa digital no es motivo de castigo, sino una situación que requiere contención inmediata.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <strong>Educación entre pares:</strong> Analizar capturas de pantalla de fraudes reales en talleres de debate escolar para aguzar el sentido crítico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protocolo de Acción Escolar */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-8 text-brand-navy text-center">
                Protocolo de Acción Escolar ante un Estudiante Damnificado
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {protocoloEscolar.map((item) => {
                  const IconC = item.icon
                  return (
                    <div
                      key={item.paso}
                      className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between hover:border-brand-blue/40"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-10 h-10 rounded-2xl bg-brand-blue text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-md">
                            {item.paso}
                          </span>
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                            {item.badge}
                          </span>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                          <IconC className="w-5 h-5" />
                        </div>

                        <h4 className="text-lg font-display font-bold text-brand-navy mb-2">
                          {item.titulo}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 9: MATERIAL DIDÁCTICO PARA EL AULA (Carrusel Interactivo)
            ════════════════════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-3xl overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center shadow-md text-white shrink-0">
                    <Images className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                      Recurso Didáctico Proyectable
                    </p>
                    <h2 className="text-lg sm:text-xl font-display font-extrabold text-brand-navy">
                      Láminas Educativas para Clases y Talleres
                    </h2>
                  </div>
                </div>
                <span className="text-slate-600 text-xs sm:text-sm font-mono shrink-0 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 w-fit">
                  Lámina {currentSlide + 1} de {CARRUSEL_IMAGES.length}
                </span>
              </div>

              {/* Visor de Imagen */}
              <div className="relative overflow-hidden bg-slate-100/60">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] flex items-center justify-center"
                  >
                    <Image
                      src={CARRUSEL_IMAGES[currentSlide]}
                      alt={`Lámina educativa ${currentSlide + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-white hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-white hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Miniaturas interactiva / Dots */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2">
                  {CARRUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-8 h-3 bg-brand-blue shadow-[0_0_8px_#4272BB]"
                          : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Ir a lámina ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 10: CANALES OFICIALES DE DENUNCIA Y LÍNEAS DE ASISTENCIA
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="canales" className="py-16 sm:py-24 bg-brand-light-blue/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-2 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
                Red de Asistencia e Instituciones
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                Canales Oficiales de Denuncia en Argentina
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Ante cualquier evento de estafa cibernética o vulneración digital, la Argentina dispone de organismos especializados para orientar y tomar denuncias formales.
              </p>
            </motion.div>

            {/* Grid de Organismos e Integración Completa de helpLines */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpLines.map((linea) => {
                const IconComp = linea.icon
                return (
                  <motion.div
                    key={linea.id}
                    variants={itemVariants}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {linea.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-brand-navy mb-1 leading-snug">
                        {linea.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mb-3">
                        {linea.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {linea.description}
                      </p>

                      <ul className="text-xs sm:text-sm space-y-2 text-slate-700 border-t border-slate-100 pt-3 mb-4">
                        {linea.number && (
                          <li className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4 text-brand-blue shrink-0" />
                            <span className="font-mono font-bold text-slate-900">{linea.number}</span>
                          </li>
                        )}
                        {linea.email && (
                          <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-brand-pink shrink-0" />
                            <span className="font-mono text-slate-700 truncate">{linea.email}</span>
                          </li>
                        )}
                        {linea.address && (
                          <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span>{linea.address}</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {linea.web && (
                      <a
                        href={linea.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs font-bold text-brand-blue hover:text-blue-700 bg-slate-50 hover:bg-slate-100 py-2.5 px-4 rounded-xl border border-slate-200 transition-colors w-full"
                      >
                        <span>Sitio Web Oficial</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECCIÓN 11: CENTRO DE RECURSOS & FUENTES OFICIALES CITADAS
            ════════════════════════════════════════════════════════════════════════ */}
        <section id="recursos" className="py-16 sm:py-24 bg-white/90 border-t border-slate-200/80">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs sm:text-sm font-bold text-brand-navy tracking-widest uppercase mb-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
                Resguardo Académico
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 text-brand-navy">
                Centro de Recursos y Fuentes Oficiales Citadas
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Enlaces directos a los portales oficiales y obras bibliográficas que sustentan el marco conceptual de esta plataforma.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {fuentesCitadas.map((fuente, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:border-brand-blue/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                      <BookOpen className="w-4 h-4 text-brand-blue" />
                      <span>{fuente.entidad}</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-brand-navy mb-2 leading-snug">
                      {fuente.titulo}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {fuente.descripcion}
                    </p>
                  </div>

                  <a
                    href={fuente.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-blue-700 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm w-fit transition-colors group"
                  >
                    <span>Consultar Fuente Oficial</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── LIGHTBOX INFOGRAFÍA INTERACTIVO (Zoom & Paneo) ────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-2xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/70 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-2xl text-white"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={zoomOut} disabled={zoom <= 1} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/20 disabled:opacity-30 transition-colors">
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="font-mono text-sm w-12 text-center font-bold">{zoom.toFixed(1)}×</span>
              <button onClick={zoomIn} disabled={zoom >= 4} className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/20 disabled:opacity-30 transition-colors">
                <ZoomIn className="w-5 h-5" />
              </button>
              {zoom > 1 && (
                <button onClick={resetZoom} className="ml-2 flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors border-l border-white/20 pl-4">
                  <Maximize2 className="w-4 h-4" />
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
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INFOGRAFIA_PATH}
                  alt="Infografía de Estafas Digitales — pantalla completa"
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl select-none"
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

      {/* ── BOTÓN FLOTANTE VOLVER ARRIBA (Bottom Right) ───────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-brand-navy hover:bg-brand-blue text-white shadow-2xl border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Botón Flotante para marcar temática completada */}
      <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
    </>
  )
}
