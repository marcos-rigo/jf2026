"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Tv } from "lucide-react"

const videos = [
  {
    image: "/img/Podcast/1.png",
    title: "Construir Ciudadanía",
    source: "Punto de Partida TV",
    href: "https://youtu.be/Q1m8trq02EM?t=11",
  },
  {
    image: "/img/Podcast/4.png",
    title: "Uso seguro de la tecnología",
    source: "La Gaceta",
    href: "https://youtu.be/onGjGZU0fqQ?t=21",
  },
  {
    image: "/img/Podcast/3.png",
    title: "IV Congreso Americano de Mediación",
    source: "Fundación Mediar",
    href: "https://youtu.be/0vpMhHOOVHY?t=7202",
  },
]

export function MultimediaSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(150deg, #001228 0%, #00213d 60%, #001e3c 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px]" style={{
          background: "radial-gradient(ellipse, rgba(66,114,187,0.12) 0%, transparent 70%)"
        }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[350px]" style={{
          background: "radial-gradient(ellipse, rgba(213,36,122,0.10) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full" />
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Audiovisuales</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight mb-3">
                Multimedia
              </h2>
              <p className="text-lg text-white/55">
                Entrevistas, conferencias y participaciones en medios
              </p>
            </div>
            <Link
              href="/multimedia"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold transition-all duration-300 whitespace-nowrap text-sm"
            >
              Ver todo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Video cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow ring */}
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-brand-blue/40 to-brand-pink/30 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />

              <Link
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col h-full bg-[#001e3c] rounded-[1.25rem] overflow-hidden border border-white/[0.07] group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-2"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden flex-shrink-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/20 transition-colors duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 group-hover:bg-brand-pink group-hover:border-brand-pink transition-all duration-400 group-hover:scale-110 shadow-xl">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* Source badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-dark/70 backdrop-blur-md rounded-full border border-white/10">
                      <Tv className="w-3 h-3 text-brand-blue" />
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{video.source}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-pink mb-4 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-brand-pink transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-1.5 group-hover:text-white/60 transition-colors duration-300">
                    {video.source}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/multimedia"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.07] border border-white/15 text-white font-semibold rounded-full hover:bg-brand-pink hover:border-brand-pink transition-all duration-300 hover:shadow-xl hover:shadow-brand-pink/25 hover:-translate-y-0.5"
          >
            Ver más videos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
