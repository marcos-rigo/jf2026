"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN — reemplazá estos valores con los tuyos
// ─────────────────────────────────────────────────────────────────────────────
// EmailJS 
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
// ─────────────────────────────────────────────────────────────────────────────

// ── Validaciones ──────────────────────────────────────────────────────────────
const RULES = {
  lastName: {
    pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,30}$/,
    maxLength: 30,
    message: "Solo letras, entre 2 y 30 caracteres.",
  },
  name: {
    pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,30}$/,
    maxLength: 30,
    message: "Solo letras, entre 2 y 30 caracteres.",
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 30,
    message: "Ingresá un correo válido (máx. 30 caracteres).",
  },
  phone: {
    pattern: /^\d{1,15}$/,
    maxLength: 15,
    message: "Solo números, máximo 15 dígitos.",
  },
  message: {
    pattern: /^[\s\S]{1,300}$/,
    maxLength: 300,
    message: "Máximo 300 caracteres.",
  },
}

function validate(field: keyof typeof RULES, value: string): string {
  if (!value.trim()) return "Este campo es obligatorio."
  return RULES[field].pattern.test(value.trim()) ? "" : RULES[field].message
}

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface FormState {
  lastName: string
  name: string
  email: string
  phone: string
  message: string
}

interface Errors {
  lastName?: string
  name?: string
  email?: string
  phone?: string
  message?: string
}

// ── Helpers lazy-load (evitamos importar Firebase en el módulo principal) ─────
async function saveToFirestore(data: FormState) {
  const { initializeApp, getApps } = await import("firebase/app")
  const { getFirestore, collection, addDoc, serverTimestamp } = await import("firebase/firestore")

  const app = getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

  const db = getFirestore(app)

  await addDoc(collection(db, "contactos"), {
    ...data,
    creadoEn: serverTimestamp(),
  })
}

async function sendEmail(data: FormState) {
  const emailjs = await import("@emailjs/browser")
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_lastname: data.lastName,
      from_name:     data.name,
      from_email:    data.email,
      phone:         data.phone,
      message:       data.message,
      to_email:      "jf.josefarhat@gmail.com",
    },
    EMAILJS_PUBLIC_KEY,
  )
}

// ── Componente ────────────────────────────────────────────────────────────────
export function QuickContactSection() {
  const [form, setForm]       = useState<FormState>({ lastName: "", name: "", email: "", phone: "", message: "" })
  const [errors, setErrors]   = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState("")

  // Actualiza campo con restricción de maxLength y valida en tiempo real
  const handleChange = (field: keyof FormState, value: string) => {
    const rule = RULES[field as keyof typeof RULES]
    if (value.length > rule.maxLength) return            // bloquea exceso de chars
    if (field === "phone" && value && !/^\d*$/.test(value)) return // solo dígitos
    if ((field === "name" || field === "lastName") && value && /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]/.test(value)) return // solo letras

    setForm(f => ({ ...f, [field]: value }))
    if (touched[field]) {
      setErrors(e => ({ ...e, [field]: validate(field as keyof typeof RULES, value) }))
    }
  }

  const handleBlur = (field: keyof FormState) => {
    setFocused(null)
    setTouched(t => ({ ...t, [field]: true }))
    setErrors(e => ({ ...e, [field]: validate(field as keyof typeof RULES, form[field]) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")

    // Validar todos los campos
    const newErrors: Errors = {
      lastName: validate("name", form.lastName),
      name:     validate("name", form.name),
      email:    validate("email", form.email),
      phone:    validate("phone", form.phone),
      message:  validate("message", form.message),
    }
    setErrors(newErrors)
    setTouched({ lastName: true, name: true, email: true, phone: true, message: true })
    if (Object.values(newErrors).some(v => v)) return

    setSending(true)
    try {
      // Guardar en Firebase y enviar email en paralelo
      await Promise.all([
        saveToFirestore(form),
        sendEmail(form),
      ])
      setSent(true)
    } catch (err) {
      console.error(err)
      setSubmitError("Ocurrió un error al enviar. Intentá de nuevo.")
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setSent(false)
    setForm({ lastName: "", name: "", email: "", phone: "", message: "" })
    setErrors({})
    setTouched({})
  }

  // Estilos dinámicos de inputs
  const fieldStyle = (field: keyof FormState): React.CSSProperties => ({
    background: focused === field ? "rgba(66,114,187,0.10)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${
      errors[field] ? "rgba(239,68,68,0.60)"
      : focused === field ? "rgba(66,114,187,0.55)"
      : "rgba(255,255,255,0.09)"
    }`,
    transition: "all 0.25s ease",
  })

  const inputProps = (field: keyof FormState) => ({
    onFocus: () => setFocused(field),
    onBlur:  () => handleBlur(field),
    style:   fieldStyle(field),
    className: "w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-white/20 outline-none",
  })

  const charCount = (field: keyof FormState) =>
    `${form[field].length}/${RULES[field as keyof typeof RULES].maxLength}`

  return (
    <section className="relative overflow-hidden" style={{ background: "#000d1a" }}>

      {/* ── Fondo ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(66,114,187,0.14) 0%, transparent 70%)"
        }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(213,36,122,0.08) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 bg-brand-pink/15 text-brand-pink text-[11px] font-semibold rounded-full mb-5 tracking-wider uppercase">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight mb-4">
              Enviame un mensaje. Generemos impacto juntos.
            </h2>
            <p className="text-white/45 leading-relaxed">
              Propuestas, articulaciones institucionales, charlas o proyectos: escribinos y te respondemos a la brevedad.
            </p>
          </motion.div>

          {/* ── Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {sent ? (
                /* ── Confirmación ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-6 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #003257, #4272BB)" }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
                  <p className="text-white/50 max-w-sm">
                    Gracias por escribir. José o su equipo te responderán a la brevedad.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-2 text-sm text-white/35 hover:text-white/70 transition-colors underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                /* ── Formulario ── */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Apellido + Nombre — fila de dos columnas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Apellido */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-baseline">
                        <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                          Apellido
                        </label>
                        <span className="text-[10px] text-white/20">{charCount("lastName")}</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Tu apellido"
                        value={form.lastName}
                        onChange={e => handleChange("lastName", e.target.value)}
                        {...inputProps("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-400 mt-0.5">{errors.lastName}</p>
                      )}
                    </div>

                    {/* Nombre */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-baseline">
                        <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                          Nombre
                        </label>
                        <span className="text-[10px] text-white/20">{charCount("name")}</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={e => handleChange("name", e.target.value)}
                        {...inputProps("name")}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-0.5">{errors.name}</p>
                      )}
                    </div>
                  </div>

                  {/* Correo electrónico */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-baseline">
                      <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                        Correo electrónico
                      </label>
                      <span className="text-[10px] text-white/20">{charCount("email")}</span>
                    </div>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      {...inputProps("email")}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-0.5">{errors.email}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-baseline">
                      <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                        Teléfono de contacto
                      </label>
                      <span className="text-[10px] text-white/20">{charCount("phone")}</span>
                    </div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Ej: 3814001234"
                      value={form.phone}
                      onChange={e => handleChange("phone", e.target.value)}
                      {...inputProps("phone")}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-baseline">
                      <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                        Mensaje
                      </label>
                      <span className={`text-[10px] transition-colors ${
                        form.message.length >= 280 ? "text-red-400" : "text-white/20"
                      }`}>
                        {charCount("message")}
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Contanos sobre tu propuesta, consulta o idea…"
                      value={form.message}
                      onChange={e => handleChange("message", e.target.value)}
                      onFocus={() => setFocused("message")}
                      onBlur={() => handleBlur("message")}
                      style={fieldStyle("message")}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-white/20 outline-none resize-none leading-relaxed"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-0.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Error global */}
                  {submitError && (
                    <p className="text-sm text-red-400 text-center">{submitError}</p>
                  )}

                  {/* Separador */}
                  <div className="h-px w-full" style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
                  }} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-[15px] text-white overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: sending
                        ? "rgba(66,114,187,0.4)"
                        : "linear-gradient(135deg, #003257 0%, #4272BB 100%)",
                      boxShadow: sending ? "none" : "0 8px 32px rgba(66,114,187,0.30)",
                    }}
                    onMouseEnter={e => {
                      if (sending) return
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = "0 12px 40px rgba(66,114,187,0.50)"
                      el.style.transform = "translateY(-2px)"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = "0 8px 32px rgba(66,114,187,0.30)"
                      el.style.transform = "translateY(0)"
                    }}
                  >
                    {!sending && (
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                        }}
                      />
                    )}
                    {sending ? (
                      <><Loader2 className="w-5 h-5 animate-spin relative z-10" />
                      <span className="relative z-10">Enviando…</span></>
                    ) : (
                      <><Send className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Enviar mensaje</span></>
                    )}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
