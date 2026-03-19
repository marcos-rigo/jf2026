"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

export function QuickContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject) return
    setSending(true)
    // Simula envío — conectar con endpoint real o Formspree
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
  }

  const inputBase = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    style: {
      background: focused === name
        ? "rgba(66,114,187,0.10)"
        : "rgba(255,255,255,0.04)",
      border: `1px solid ${focused === name
        ? "rgba(66,114,187,0.45)"
        : "rgba(255,255,255,0.09)"}`,
      transition: "all 0.25s ease",
    } as React.CSSProperties,
  })

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000d1a" }}
    >
      {/* ── FONDO ──────────────────────────────────────────────────────────── */}
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

          {/* ── HEADER ──────────────────────────────────────────────────────── */}
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
              ¿Trabajamos juntos en tu próximo proyecto o conferencia?
            </h2>
            <p className="text-white/45 leading-relaxed">
              Invitaciones como speaker, consultas sobre recursos o simplemente decir hola — escribí y respondemos a la brevedad.
            </p>
          </motion.div>

          {/* ── CARD GLASSMORPHISM ───────────────────────────────────────────── */}
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
                /* ── CONFIRMACIÓN ─────────────────────────────────────────── */
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
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "" }) }}
                    className="mt-2 text-sm text-white/35 hover:text-white/70 transition-colors underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                /* ── FORMULARIO ───────────────────────────────────────────── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                      {...inputBase("name")}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-white/20 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                      {...inputBase("email")}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-white/20 outline-none"
                    />
                  </div>

                  {/* Motivo */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
                      ¿En qué puedo ayudarte?
                    </label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      required
                      {...inputBase("subject")}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none cursor-pointer"
                      style={{
                        ...inputBase("subject").style,
                        color: form.subject ? "white" : "rgba(255,255,255,0.25)",
                      }}
                    >
                      <option value="" disabled style={{ background: "#001228" }}>
                        Seleccioná una opción
                      </option>
                      <option value="speaker" style={{ background: "#001228", color: "white" }}>
                        Invitar como Speaker / Conferencista
                      </option>
                      <option value="herramientas" style={{ background: "#001228", color: "white" }}>
                        Consulta sobre Caja de Herramientas
                      </option>
                      <option value="ciudadania" style={{ background: "#001228", color: "white" }}>
                        Plataforma Ciudadanía Digital
                      </option>
                      <option value="podcast" style={{ background: "#001228", color: "white" }}>
                        Participar en el Podcast
                      </option>
                      <option value="otro" style={{ background: "#001228", color: "white" }}>
                        Otro
                      </option>
                    </select>
                  </div>

                  {/* Línea separadora */}
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
                    {/* Shimmer */}
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
