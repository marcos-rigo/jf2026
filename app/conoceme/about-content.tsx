"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users, Briefcase } from "lucide-react"

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
                  src="https://josefarhat.com/img/jose-farhat.jpg"
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
      <section id="formula" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-full mb-4">
              Filosofía
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              1 + 1 = 2 y medio
            </h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              Mi filosofía de trabajo se basa en la creencia de que la colaboración genera más valor que la suma de las partes individuales. Cuando trabajamos juntos, innovamos, creamos y transformamos la realidad de manera exponencial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovación",
                description: "Buscamos constantemente nuevas formas de resolver problemas y mejorar la calidad de vida ciudadana.",
              },
              {
                title: "Participación",
                description: "Creemos que la ciudadanía activa es el motor del cambio social y la transformación democrática.",
              },
              {
                title: "Colaboración",
                description: "El trabajo conjunto entre gobierno, sociedad civil y ciudadanía es clave para el desarrollo.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-brand-light-blue rounded-2xl"
              >
                <h3 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-navy/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
