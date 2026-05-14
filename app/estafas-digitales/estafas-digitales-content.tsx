"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
  FileText,
  Download,
  ZoomIn,
} from "lucide-react"

const INFOGRAFIA_PATH = "/weekly-content/2026-W23/infogEstaDig.png"
const PDF_PATH = "/weekly-content/2026-W23/presentacionEstafDig.pdf"

export function EstafasDigitalesContent() {
  const [imgExpanded, setImgExpanded] = useState(false)

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
      title: "Violencias Digitales",
      description:
        "Contención, orientación y acompañamiento. También por WhatsApp: 11-3133-1000.",
    },
    {
      number: "149",
      title: "Asistencia a Víctimas",
      description:
        "Centro de Asistencia a las Víctimas de Delitos (CENAVID). Abogados gratuitos.",
    },
    {
      number: "102",
      title: "Línea de los Chicos",
      description: "Atención especializada sobre derechos de niños y adolescentes.",
    },
  ]

  return (
    <main className="bg-white dark:bg-brand-dark text-brand-navy dark:text-slate-50">
      {/* ════════════════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-28 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-15">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-20 right-10 w-72 h-72 bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 font-medium text-sm mb-6 border border-red-200 dark:border-red-800/50"
              >
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                Auge de amenazas impulsadas por IA en 2026
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Protege tu vida digital de las{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                  Nuevas Estafas
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Los ciberdelincuentes están utilizando Inteligencia Artificial para crear fraudes
                bancarios y móviles más sofisticados. Conoce cómo operan, cómo detectarlos y qué
                hacer si caes en la trampa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#amenazas"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold text-lg transition duration-300 shadow-lg shadow-blue-500/30 inline-flex items-center justify-center gap-2"
                >
                  Conocer Amenazas
                  <AlertTriangle className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#emergencia"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-brand-navy dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-brand-blue dark:hover:border-brand-blue font-semibold text-lg transition duration-300 inline-flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Fui Víctima
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Ciberseguridad y protección digital"
                  className="rounded-2xl shadow-2xl relative object-cover h-[500px] w-full border-4 border-white dark:border-slate-800"
                />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-2xl border border-slate-200 dark:border-slate-700 z-20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        Navegación Segura
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Protección Activa</p>
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
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                  Vista General
                </p>
                <h2 className="text-lg md:text-xl font-extrabold text-brand-navy dark:text-white font-display">
                  Infografía de Estafas Digitales
                </h2>
              </div>
              <button
                onClick={() => setImgExpanded((v) => !v)}
                className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-brand-blue dark:hover:text-brand-blue transition-colors border border-slate-200 dark:border-slate-600 hover:border-brand-blue rounded-xl px-3 py-2"
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
                alt="Infografía de Estafas Digitales"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
              {!imgExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-800 to-transparent pointer-events-none" />
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          LAS 3 AMENAZAS
          ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="amenazas"
        className="py-20 bg-brand-light-blue dark:bg-slate-900 transition-colors duration-300"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-brand-blue tracking-widest uppercase mb-2">
              Ingeniería Social
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy dark:text-white">
              La trinidad del engaño digital
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Desde correos falsos hasta voces clonadas por IA. Entiende la diferencia fundamental
              entre estos tres métodos y cómo los atacantes juegan con tus emociones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, idx) => {
              const IconComponent = threat.icon
              return (
                <motion.div
                  key={threat.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:shadow-slate-900/50 overflow-hidden border border-slate-200 dark:border-slate-700"
                >
                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${threat.color} opacity-10 rounded-bl-full -z-10 transition-transform group-hover:scale-110`}
                  />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={`w-14 h-14 rounded-2xl ${threat.bgColor} flex items-center justify-center mb-6 shadow-sm`}
                  >
                    <IconComponent className={`w-7 h-7 ${threat.textColor}`} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-brand-navy dark:text-white">
                    {threat.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                    {threat.description}
                  </p>

                  {/* Example Box */}
                  <div
                    className={`bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border-l-4 ${threat.borderColor}`}
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2 text-sm">
                      <Quote className="w-4 h-4 text-slate-400" />
                      Ejemplo típico:
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 italic text-sm">
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
      <section id="emergencia" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-red-600 to-red-700 dark:from-red-900/90 dark:to-red-950 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden"
          >
            {/* Background overlay image */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22 opacity=%220.2%22/></svg>')] " />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30"
                >
                  <AlertTriangle className="w-10 h-10" />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">¿Caíste en la trampa?</h2>
                <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto">
                  No pierdas tiempo. Los primeros 5 minutos son cruciales para evitar que los
                  atacantes tomen el control de tu dinero y tu información.
                </p>
              </motion.div>

              {/* Timeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {emergencySteps.map((step, idx) => {
                  const StepIcon = step.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition duration-300"
                    >
                      <div className="text-red-200 font-bold text-xs mb-3 uppercase tracking-wide">
                        Minuto {step.minute}
                      </div>
                      <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <StepIcon className="w-5 h-5" />
                        {step.title}
                      </h4>
                      <p className="text-sm text-red-100 leading-relaxed">{step.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          PRESENTACIÓN PDF
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center shadow-md shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-0.5">
                    Presentación completa
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-brand-navy dark:text-white font-display">
                    Estafas Digitales — Documento
                  </h2>
                </div>
              </div>
              <a
                href={PDF_PATH}
                download
                className="shrink-0 flex items-center gap-2 text-xs text-slate-500 hover:text-brand-blue dark:hover:text-brand-blue transition-colors border border-slate-200 dark:border-slate-600 hover:border-brand-blue rounded-xl px-3 py-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar</span>
              </a>
            </div>

            <div className="hidden sm:block w-full h-[600px] md:h-[780px] lg:h-[900px]">
              <iframe
                src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full border-0"
                title="Presentación Estafas Digitales"
              />
            </div>

            <div className="flex sm:hidden flex-col items-center gap-4 p-8 text-center">
              <FileText className="w-12 h-12 text-brand-blue opacity-60" />
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                El visor de PDF no está disponible en pantallas pequeñas.
              </p>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-light-blue dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 border border-brand-blue/30 text-brand-blue font-medium px-6 py-3 rounded-full transition-all text-sm"
              >
                <FileText className="w-4 h-4" />
                Ver presentación
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          HELP & REPORTING
          ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-light-blue dark:bg-slate-900 transition-colors duration-300">
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
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-brand-blue tracking-widest uppercase mb-2">
                Asistencia Legal
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy dark:text-white">
                Dónde denunciar en Argentina
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Si fuiste víctima de un ciberdelito, el Estado cuenta con herramientas y fiscalías
                especializadas para asesorarte y tomar tu denuncia.
              </p>
            </div>
          </motion.div>

          {/* Help Organizations */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* UFECI */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 shrink-0 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue"
              >
                <Building2 className="w-8 h-8" />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-navy dark:text-white">
                  UFECI (Nacional)
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Unidad Fiscal Especializada en Ciberdelincuencia. Para denunciar grooming u otros
                  delitos informáticos a nivel nacional.
                </p>
                <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
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

            {/* UFEDyCI CABA */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-16 h-16 shrink-0 rounded-2xl bg-brand-pink/10 dark:bg-brand-pink/20 flex items-center justify-center text-brand-pink"
              >
                <MapPin className="w-8 h-8" />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-navy dark:text-white">
                  UFEDyCI (CABA)
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Unidad Fiscal Especializada en Delitos y Contravenciones Informáticas. Específico
                  para CABA.
                </p>
                <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-brand-pink" />
                    <span>0800-33-FISCAL (347225)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-pink" />
                    <span>denuncias@fiscalias.gob.ar</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Helplines Grid */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
          >
            <h4 className="text-xl font-bold mb-8 text-center text-brand-navy dark:text-white">
              Líneas telefónicas de asistencia 24/7
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {helpLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl bg-brand-light-blue dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-md transition duration-300"
                >
                  <div className="text-4xl font-black text-brand-blue mb-3">{line.number}</div>
                  <h5 className="font-bold text-sm mb-2 text-brand-navy dark:text-white">
                    {line.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {line.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
