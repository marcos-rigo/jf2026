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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/10 text-brand-navy text-sm font-medium rounded-full mb-4">
            <Tv className="w-4 h-4" />
            Audiovisuales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Multimedia
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            Entrevistas, conferencias y participaciones en medios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-brand-navy mb-4">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 bg-white/90 rounded-full group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-lg">
                      <Play className="w-7 h-7 text-brand-navy ml-1 group-hover:text-brand-pink transition-colors" />
                    </span>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs rounded">
                      Video
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-pink transition-colors mb-1">
                  {video.title}
                </h3>
                <p className="text-brand-navy/60 text-sm">
                  {video.source}
                </p>
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
          className="text-center mt-12"
        >
          <Link
            href="/multimedia"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-dark hover:shadow-lg transition-all duration-300 group"
          >
            Ver más
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
