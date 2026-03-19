"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Lightbulb, Users, Building2, Brain, Smartphone, Vote, ArrowRight } from "lucide-react"

const pillars = [
  { 
    icon: Lightbulb, 
    title: "Innovación Ciudadana", 
    description: "Transformando la participación a través de nuevas metodologías y herramientas",
    href: "/blog/innovacion-ciudadana",
    color: "from-blue-500 to-blue-600"
  },
  { 
    icon: Building2, 
    title: "Innovación Política", 
    description: "Nuevos paradigmas para la gestión pública y la toma de decisiones",
    href: "/blog/innovacion-politica",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    icon: Users, 
    title: "Innovación Pública", 
    description: "Modernización del Estado al servicio de la ciudadanía",
    href: "/blog/innovacion-publica",
    color: "from-cyan-500 to-cyan-600"
  },
  { 
    icon: Brain, 
    title: "Inteligencia Colectiva", 
    description: "El poder de la colaboración para resolver desafíos complejos",
    href: "/blog/inteligencia-colectiva",
    color: "from-purple-500 to-purple-600"
  },
  { 
    icon: Smartphone, 
    title: "Ciudadanía Digital", 
    description: "Derechos y responsabilidades en el entorno digital",
    href: "/blog/ciudadania-digital",
    color: "from-pink-500 to-pink-600"
  },
  { 
    icon: Vote, 
    title: "Participación Ciudadana", 
    description: "Mecanismos efectivos para una democracia más participativa",
    href: "/blog/participacion-ciudadana",
    color: "from-rose-500 to-rose-600"
  },
]

export function PillarsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#003a60] to-brand-dark overflow-hidden">

      {/* ══ CORTE DIAGONAL SUPERIOR ════════════════════════════════════════════
          Cuña blanca que entra desde arriba-izquierda y baja hacia abajo-derecha.
          La sección oscura "empieza" debajo de esa cuña.
          El SVG está en absolute top-0, no empuja el contenido.
          paddingTop en el contenido compensa la altura del corte.
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="absolute top-0 left-0 right-0 z-[5] pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          {/* Cuña blanca — entra desde arriba-izquierda, termina abajo-derecha */}
          <polygon points="0,0 1440,0 1440,100" fill="#ffffff" />
        </svg>
      </div>

      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-4">
            Ejes Temáticos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pilares de Trabajo
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Seis áreas fundamentales que guían nuestra visión de una ciudadanía activa y transformadora
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={pillar.href}
                className="group block h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-pink/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-pink/10"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${pillar.color} mb-4`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-pink transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-blue group-hover:text-brand-pink transition-colors text-sm font-medium">
                  Explorar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
