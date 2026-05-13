"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users, Briefcase, Lightbulb, Network } from "lucide-react"

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6">
                Sobre mí
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                José <span className="text-brand-pink">Farhat</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Abogado, Secretario de Participación Ciudadana del Gobierno de Tucumán. Comprometido con la innovación pública, la democracia participativa y la ciudadanía digital.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Contactar
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://ciudadaniadigital.josefarhat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Ciudadanía Digital
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[350px] h-[450px] rounded-3xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/img/perfil-jf.png"
                  alt="José Farhat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-light-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, label: "Años de experiencia", value: "15+" },
              { icon: Users, label: "Proyectos ciudadanos", value: "50+" },
              { icon: Award, label: "Reconocimientos", value: "10+" },
              { icon: BookOpen, label: "Publicaciones", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                <p className="text-4xl font-bold text-brand-navy mb-2">{stat.value}</p>
                <p className="text-brand-navy/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="formula" className="relative py-24 bg-gradient-to-b from-[#002444] to-brand-dark overflow-hidden">

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-pink/8 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-pink/20 text-white text-sm font-medium rounded-full mb-4 border border-brand-pink/20">
              Filosofía
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              1 + 1 = <span className="text-brand-pink">2 y medio</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Mi filosofía de trabajo se basa en la creencia de que la colaboración genera más valor que la suma de las partes individuales. Cuando trabajamos juntos, innovamos, creamos y transformamos la realidad de manera exponencial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Innovación",
                description: "Buscamos constantemente nuevas formas de resolver problemas y mejorar la calidad de vida ciudadana.",
                gradient: "from-brand-blue to-cyan-400",
              },
              {
                icon: Users,
                title: "Participación",
                description: "Creemos que la ciudadanía activa es el motor del cambio social y la transformación democrática.",
                gradient: "from-brand-pink to-rose-400",
              },
              {
                icon: Network,
                title: "Colaboración",
                description: "El trabajo conjunto entre gobierno, sociedad civil y ciudadanía es clave para el desarrollo.",
                gradient: "from-purple-500 to-violet-400",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative cursor-default"
              >
                {/* Outer glow ring */}
                <div className={`absolute -inset-px rounded-[1.25rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500`} />

                {/* Card body */}
                <div className="relative flex flex-col h-full bg-[#001e3c]/90 backdrop-blur-md rounded-[1.25rem] border border-white/[0.07] group-hover:border-transparent transition-all duration-500 overflow-hidden p-7">

                  {/* Top accent bar */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${item.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  {/* Icon badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-pink transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300 flex-1">
                    {item.description}
                  </p>

                  {/* Bottom expanding accent line */}
                  <div className="mt-6 pt-5 border-t border-white/[0.07]">
                    <div className={`h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-700`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
