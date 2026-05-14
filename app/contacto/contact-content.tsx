"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

interface FormData {
  lastName: string
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  lastName?: string
  name?: string
  email?: string
  phone?: string
  message?: string
}

// ── Sanitización ──────────────────────────────────────────────────────────────
// Elimina HTML, atributos de eventos JS, protocolo javascript: y saltos de línea
// que podrían usarse para inyección de cabeceras de email.
function sanitizeLine(value: string): string {
  return value
    .replace(/[\r\n\t]/g, " ")                   // no newlines in single-line fields
    .replace(/<[^>]*>/g, "")                      // strip HTML tags
    .replace(/javascript\s*:/gi, "")              // no JS protocol
    .replace(/on\w+\s*=/gi, "")                   // no inline event handlers
    .replace(/[&'"]/g, (c) =>                     // encode special HTML chars
      ({ "&": "&amp;", "'": "&#39;", '"': "&quot;" })[c] ?? c
    )
    .trim()
}

function sanitizeMessage(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")   // strip script blocks
    .replace(/<[^>]*>/g, "")                      // strip remaining HTML tags
    .replace(/javascript\s*:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
}

// ── Detecta patrones de inyección obvios ─────────────────────────────────────
const INJECTION_PATTERNS = [
  /<script/i,
  /javascript:/i,
  /vbscript:/i,
  /data:text\/html/i,
  /on\w+\s*=/i,
  /\bSELECT\b.*\bFROM\b/i,
  /\bINSERT\b.*\bINTO\b/i,
  /\bDROP\b.*\bTABLE\b/i,
  /\bUNION\b.*\bSELECT\b/i,
  /--\s*$/, // SQL comment
  /\x00/,   // null byte
]

function containsInjection(value: string): boolean {
  return INJECTION_PATTERNS.some((p) => p.test(value))
}

// ── Rate limiting (localStorage) ─────────────────────────────────────────────
const RATE_LIMIT_KEY = "contact_last_submit"
const RATE_LIMIT_MS  = 60_000 // 1 minuto entre envíos

function isRateLimited(): boolean {
  try {
    const last = localStorage.getItem(RATE_LIMIT_KEY)
    if (!last) return false
    return Date.now() - parseInt(last, 10) < RATE_LIMIT_MS
  } catch {
    return false
  }
}

function markSubmitted(): void {
  try { localStorage.setItem(RATE_LIMIT_KEY, String(Date.now())) } catch { /* noop */ }
}

// ── Reglas de validación ──────────────────────────────────────────────────────
const RULES = {
  lastName: {
    pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,40}$/,
    message: "Solo letras, entre 2 y 40 caracteres.",
    maxLength: 40,
  },
  name: {
    pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,40}$/,
    message: "Solo letras, entre 2 y 40 caracteres.",
    maxLength: 40,
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
    message: "Ingresá un correo válido.",
    maxLength: 80,
  },
  phone: {
    pattern: /^\d{7,15}$/,
    message: "Solo números, entre 7 y 15 dígitos.",
    maxLength: 15,
  },
  message: {
    pattern: /^[\s\S]{10,500}$/,
    message: "El mensaje debe tener entre 10 y 500 caracteres.",
    maxLength: 500,
  },
}

function validate(field: keyof typeof RULES, value: string): string {
  if (!value.trim()) return "Este campo es obligatorio."
  if (containsInjection(value)) return "El contenido ingresado no es válido."
  return RULES[field].pattern.test(value.trim()) ? "" : RULES[field].message
}

// Sanitiza todos los campos antes de enviar
function sanitizePayload(data: FormData): FormData {
  return {
    lastName: sanitizeLine(data.lastName),
    name:     sanitizeLine(data.name),
    email:    sanitizeLine(data.email),
    phone:    data.phone.replace(/\D/g, "").slice(0, 15), // solo dígitos
    message:  sanitizeMessage(data.message),
  }
}

async function sendEmail(data: FormData) {
  const clean = sanitizePayload(data)
  const emailjs = await import("@emailjs/browser")
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_lastname: clean.lastName,
      from_name:     clean.name,
      from_email:    clean.email,
      phone:         clean.phone,
      message:       clean.message,
      to_email:      "jf.josefarhat@gmail.com",
    },
    EMAILJS_PUBLIC_KEY,
  )
}

async function saveToFirestore(data: FormData) {
  const clean = sanitizePayload(data)
  const { initializeApp, getApps } = await import("firebase/app")
  const { getFirestore, collection, addDoc, serverTimestamp } = await import("firebase/firestore")
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  const db = getFirestore(app)
  await addDoc(collection(db, "contactos"), { ...clean, creadoEn: serverTimestamp() })
}

const EMPTY: FormData = { lastName: "", name: "", email: "", phone: "", message: "" }

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/josefarhatok/",
    handle: "@josefarhatok",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    gradient: "from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/josenestorfarhat/",
    handle: "José Farhat",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    gradient: "from-[#1877F2] to-[#0a5dc2]",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/JoseFarhatok",
    handle: "@JoseFarhatok",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    gradient: "from-[#1a1a1a] to-[#333]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jos%C3%A9-n%C3%A9stor-farhat-a2a5b3ba/",
    handle: "José Farhat",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    gradient: "from-[#0077B5] to-[#005885]",
  },
]

export function ContactContent() {
  const [formData, setFormData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  // Honeypot: campo oculto — los bots lo llenan, los humanos no lo ven
  const [honeypot, setHoneypot] = useState("")

  const handleChange = (field: keyof FormData, value: string) => {
    const rule = RULES[field]
    if (value.length > rule.maxLength) return
    if (field === "phone" && value && !/^\d*$/.test(value)) return
    if ((field === "name" || field === "lastName") && value && /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]/.test(value)) return

    setFormData(f => ({ ...f, [field]: value }))
    if (touched[field]) {
      setErrors(e => ({ ...e, [field]: validate(field, value) }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(t => ({ ...t, [field]: true }))
    setErrors(e => ({ ...e, [field]: validate(field, formData[field]) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")

    // Honeypot: si está lleno es un bot — respuesta silenciosa falsa
    if (honeypot) {
      setIsSubmitted(true)
      return
    }

    // Rate limiting: un envío por minuto
    if (isRateLimited()) {
      setSubmitError("Por favor esperá un momento antes de volver a enviar.")
      return
    }

    const newErrors: FormErrors = {
      lastName: validate("lastName", formData.lastName),
      name:     validate("name", formData.name),
      email:    validate("email", formData.email),
      phone:    validate("phone", formData.phone),
      message:  validate("message", formData.message),
    }
    setErrors(newErrors)
    setTouched({ lastName: true, name: true, email: true, phone: true, message: true })
    if (Object.values(newErrors).some(v => v)) return

    setIsSubmitting(true)
    try {
      await sendEmail(formData)
      saveToFirestore(formData).catch(() => {})
      markSubmitted()
      setIsSubmitted(true)
      setFormData(EMPTY)
      setTouched({})
      setErrors({})
    } catch (err) {
      console.error(err)
      setSubmitError("No se pudo enviar el mensaje. Intentá de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-white border rounded-xl text-brand-navy placeholder:text-brand-navy/40 focus:outline-none transition-colors ${
      errors[field] && touched[field]
        ? "border-red-400 focus:border-red-400"
        : "border-brand-blue/20 focus:border-brand-blue"
    }`

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6">
              <Mail className="w-4 h-4" />
              Contacto
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Dejá tu <span className="text-brand-pink">mensaje</span>
            </h1>
            <p className="text-xl text-white/70">
              Estoy disponible para consultas, colaboraciones y oportunidades de trabajo conjunto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-8">
                Información de contacto
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Email</h3>
                    <p className="text-brand-navy/70 select-all">jf.josefarhat@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Ubicación</h3>
                    <p className="text-brand-navy/70">San Miguel de Tucumán, Argentina</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-semibold text-brand-navy mb-4">Redes sociales</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-3 p-4 bg-brand-light-blue rounded-2xl border border-brand-navy/10 hover:border-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative z-10 flex-shrink-0 w-9 h-9 bg-white/20 group-hover:bg-white/25 rounded-xl flex items-center justify-center text-brand-navy group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="relative z-10 min-w-0">
                      <p className="font-semibold text-sm text-brand-navy group-hover:text-white transition-colors duration-300 leading-tight">{social.name}</p>
                      <p className="text-xs text-brand-navy/55 group-hover:text-white/75 transition-colors duration-300 truncate">{social.handle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-brand-light-blue rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">
                  Enviá un mensaje
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot anti-bot: oculto con CSS, no con display:none (los bots ignoran display:none) */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Apellido + Nombre */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Apellido <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        onBlur={() => handleBlur("lastName")}
                        placeholder="Tu apellido"
                        className={inputClass("lastName")}
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Nombre <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="Tu nombre"
                        className={inputClass("name")}
                      />
                      {errors.name && touched.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Email <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="tu@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && touched.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Teléfono <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      placeholder="Ej: 3814001234"
                      className={inputClass("phone")}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
                        Mensaje <span className="text-brand-pink">*</span>
                      </label>
                      <span className={`text-xs transition-colors ${
                        formData.message.length >= 480 ? "text-red-500" : "text-brand-navy/40"
                      }`}>
                        {formData.message.length}/500
                      </span>
                    </div>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      rows={5}
                      placeholder="Escribí tu mensaje aquí..."
                      className={`${inputClass("message")} resize-none leading-relaxed`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Error global */}
                  {submitError && (
                    <p className="text-sm text-red-500 text-center bg-red-50 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  {/* Success banner */}
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-green-800">¡Mensaje enviado!</p>
                          <p className="text-xs text-green-700">Gracias por contactarte. Te responderé a la brevedad.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-pink text-white font-semibold rounded-xl hover:bg-brand-pink/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
