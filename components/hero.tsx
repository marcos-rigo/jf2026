"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Lightbulb, Users, Building2, Brain, Smartphone, Vote } from "lucide-react"

const pillars = [
  { icon: Lightbulb, title: "Innovación Ciudadana", href: "/blog/innovacion-ciudadana" },
  { icon: Building2, title: "Innovación Política", href: "/blog/innovacion-politica" },
  { icon: Users, title: "Innovación Pública", href: "/blog/innovacion-publica" },
  { icon: Brain, title: "Inteligencia Colectiva", href: "/blog/inteligencia-colectiva" },
  { icon: Smartphone, title: "Ciudadanía Digital", href: "/blog/ciudadania-digital" },
  { icon: Vote, title: "Participación Ciudadana", href: "/blog/participacion-ciudadana" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-blue/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-pink/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[150px]" />
        </div>
        
        {/* Particle Grid Effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
                <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
                Secretaría de Participación Ciudadana
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Ciudadanía
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-brand-pink"
              >
                Presente
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Innovación, participación y democracia desde Tucumán para el mundo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contenido"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-navy font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Explorar contenido
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link
                href="https://ciudadaniadigital.josefarhat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Ciudadanía Digital
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/50 to-brand-pink/50 rounded-full blur-3xl scale-110 opacity-50" />
              
              {/* Image Container */}
              <div className="relative w-[400px] h-[500px] rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="https://josefarhat.com/img/jose-farhat.jpg"
                  alt="José Farhat"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 bottom-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
              >
                <p className="text-white font-semibold">José Farhat</p>
                <p className="text-white/60 text-sm">Secretario de Participación Ciudadana</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Pillar Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={pillar.href}
                  className="group block p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-pink/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <pillar.icon className="w-8 h-8 text-brand-blue mb-3 group-hover:text-brand-pink transition-colors" />
                  <p className="text-sm font-medium text-white/90">{pillar.title}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-sm">Scroll</span>
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
