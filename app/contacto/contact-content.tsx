"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin, Send, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "X/Twitter", href: "https://x.com/JoseFarhatok", handle: "@JoseFarhatok" },
  { name: "Instagram", href: "https://www.instagram.com/josefarhatok/", handle: "@josefarhatok" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jos%C3%A9-n%C3%A9stor-farhat-a2a5b3ba/", handle: "José Farhat" },
  { name: "Facebook", href: "https://www.facebook.com/josenestorfarhat/", handle: "José Farhat" },
]

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
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
      <section className="py-24 bg-white">
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
                    <a href="mailto:jf.josefarhat@gmail.com" className="text-brand-navy/70 hover:text-brand-pink transition-colors">
                      jf.josefarhat@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Ubicación</h3>
                    <p className="text-brand-navy/70">
                      San Miguel de Tucumán, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Secretaría de Participación Ciudadana</h3>
                    <p className="text-brand-navy/70">
                      Gobierno de Tucumán
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-semibold text-brand-navy mb-4">Redes sociales</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-brand-light-blue rounded-xl hover:bg-brand-blue/10 transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-brand-navy">{social.name}</p>
                      <p className="text-brand-navy/60 text-sm">{social.handle}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-brand-navy/40 group-hover:text-brand-pink transition-colors" />
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

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">¡Mensaje enviado!</h3>
                    <p className="text-brand-navy/70">
                      Gracias por contactarte. Te responderé a la brevedad.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-blue/20 rounded-xl text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-blue/20 rounded-xl text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-navy mb-2">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-blue/20 rounded-xl text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="Motivo del mensaje"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-brand-blue/20 rounded-xl text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                        placeholder="Escribí tu mensaje aquí..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-pink text-white font-semibold rounded-xl hover:bg-brand-pink/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
