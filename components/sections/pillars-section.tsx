"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Building2, Brain, Smartphone, Vote } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovación Ciudadana",
    description: "Transformando la participación a través de nuevas metodologías y herramientas digitales.",
    gradient: "from-brand-blue to-cyan-400",
  },
  {
    icon: Building2,
    title: "Innovación Política",
    description: "Nuevos paradigmas para la gestión pública y la toma de decisiones colectivas.",
    gradient: "from-indigo-500 to-violet-400",
  },
  {
    icon: Users,
    title: "Innovación Pública",
    description: "Modernización del Estado al servicio de la ciudadanía y el bien común.",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    icon: Brain,
    title: "Inteligencia Colectiva",
    description: "El poder de la colaboración para resolver desafíos complejos y transformadores.",
    gradient: "from-purple-500 to-fuchsia-400",
  },
  {
    icon: Smartphone,
    title: "Ciudadanía Digital",
    description: "Derechos y responsabilidades en el entorno digital para una sociedad más justa.",
    gradient: "from-brand-pink to-rose-400",
  },
  {
    icon: Vote,
    title: "Participación Ciudadana",
    description: "Mecanismos efectivos para una democracia más participativa e inclusiva.",
    gradient: "from-rose-500 to-orange-400",
  },
]

export function PillarsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#003a60] to-brand-dark overflow-hidden">

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-pink/8 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-pink/20 text-white text-sm font-medium rounded-full mb-4 border border-brand-pink/20">
            Ejes Temáticos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            Pilares de Trabajo
          </h2>
          <p className="text-base lg:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Seis áreas fundamentales que guían nuestra visión de una ciudadanía activa y transformadora
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative cursor-default"
            >
              {/* Outer glow ring */}
              <div
                className={`absolute -inset-px rounded-[1.25rem] bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500`}
              />

              {/* Card body */}
              <div className="relative h-full flex flex-col p-6 lg:p-8 bg-[#001e3c]/90 backdrop-blur-md rounded-[1.25rem] border border-white/[0.07] group-hover:border-transparent transition-all duration-500 overflow-hidden">

                {/* Top accent bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${pillar.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                {/* Decorative background number */}
                <span className="absolute -top-2 right-4 text-[6.5rem] font-black leading-none text-white/[0.04] select-none pointer-events-none font-display tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  <pillar.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 font-display leading-tight group-hover:text-brand-pink transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-sm lg:text-[0.9375rem] leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom expanding accent line */}
                <div className="mt-6 pt-5 border-t border-white/[0.07]">
                  <div
                    className={`h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${pillar.gradient} rounded-full transition-all duration-700`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
