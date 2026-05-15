"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Send } from "lucide-react"
import { useRef, useState } from "react"

const socialLinks = [
  { name: "X/Twitter", href: "https://x.com/JoseFarhatok", icon: XIcon },
  { name: "Facebook", href: "https://www.facebook.com/josenestorfarhat/", icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/josefarhatok/", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jos%C3%A9-n%C3%A9stor-farhat-a2a5b3ba/", icon: LinkedInIcon },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC62WiM9pgjfSIvUgCDlgXww", icon: YouTubeIcon },
]

const quickLinks = [
  { label: "Caja de Herramientas", href: "/caja-de-herramientas" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
]

// RFC 5321: max 254 chars total, max 64 for local part, TLD ≥ 2 letters
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
const RATE_LIMIT_MS = 60_000

function sanitizeEmail(raw: string): string {
  return raw.replace(/[\x00-\x1F\x7F]/g, "").trim().toLowerCase().slice(0, 254)
}

function validateEmail(raw: string): string | null {
  const email = sanitizeEmail(raw)
  if (!email) return "Ingresá tu email."
  const [local] = email.split("@")
  if (local.length > 64) return "La parte local del email no puede superar 64 caracteres."
  if (local.startsWith(".") || local.endsWith(".")) return "Formato de email inválido."
  if (/\.{2,}/.test(email)) return "Formato de email inválido (puntos consecutivos)."
  if (!EMAIL_REGEX.test(email)) return "Ingresá un email con formato válido (ej: nombre@dominio.com)."
  return null
}

async function saveSubscription(email: string) {
  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error ?? `HTTP ${res.status}`)
  }
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [serverError, setServerError] = useState(false)
  const lastSubmitAt = useRef<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (validationError) setValidationError(null)
    if (serverError) setServerError(false)
  }

  const handleBlur = () => {
    if (email) setValidationError(validateEmail(email))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const error = validateEmail(email)
    if (error) { setValidationError(error); return }

    const now = Date.now()
    if (now - lastSubmitAt.current < RATE_LIMIT_MS) {
      setValidationError("Esperá un momento antes de intentar de nuevo.")
      return
    }

    setIsSubmitting(true)
    setServerError(false)

    try {
      const clean = sanitizeEmail(email)
      await saveSubscription(clean)
      lastSubmitAt.current = now
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error("[Footer] Error al guardar suscripción:", err)
      setServerError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-[#001e3c] pt-14 md:pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 pb-12 border-b border-white/10">
          {/* Column 1: Logo & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/marcaJFb.png"
                alt="José Farhat"
                width={160}
                height={48}
                style={{ height: "3rem", width: "auto" }}
              />
            </Link>
            
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-brand-pink flex-shrink-0" />
                San Miguel de Tucumán, Argentina
              </p>
              <p className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-brand-pink flex-shrink-0" />
                jf.josefarhat@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-pink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Suscríbete a las novedades</h3>
            <p className="text-white/60 mb-4">
              Recibe las últimas noticias sobre participación ciudadana e innovación.
            </p>
            
            {isSubmitted ? (
              <div className="bg-brand-pink/20 text-brand-pink rounded-xl px-4 py-3">
                ¡Gracias por suscribirte!
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    aria-label="Email para suscripción"
                    aria-describedby={validationError ? "sub-error" : undefined}
                    aria-invalid={!!validationError}
                    className={`flex-1 px-4 py-3 bg-white/10 border rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-colors ${
                      validationError
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-brand-pink"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-4 py-3 bg-brand-pink rounded-xl text-white font-medium hover:bg-brand-pink/90 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
                {validationError && (
                  <p id="sub-error" role="alert" className="mt-2 text-red-400 text-sm">
                    {validationError}
                  </p>
                )}
                {serverError && (
                  <p role="alert" className="mt-2 text-red-400 text-sm">
                    Ocurrió un error al suscribirte. Intentá de nuevo.
                  </p>
                )}
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © José Farhat - Tucumán, Argentina. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-sm">
            <a href="https://kenobiconsultora.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Kenobi Consultora
            </a>
          </p>
        </div>

        {/* Decorative Gradient Line */}
        <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-brand-pink via-brand-blue to-brand-pink opacity-50" />
      </div>
    </footer>
  )
}

// Social Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
