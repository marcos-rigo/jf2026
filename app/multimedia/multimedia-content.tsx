"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, Tv, Mic } from "lucide-react"

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
  {
    image: "https://img.youtube.com/vi/u_up6zCGoT8/hqdefault.jpg",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    source: "Internacional · 2025",
    href: "https://www.youtube.com/live/u_up6zCGoT8?si=oZ3iAFsnyhToOT1S&t=1004",
  },
  {
    image: "https://img.youtube.com/vi/I1f_cXrxXic/maxresdefault.jpg",
    title: "Webinar internacional con enfoque territorial desde Perú",
    source: "Gobierno Abierto · 2025",
    href: "https://youtu.be/I1f_cXrxXic?si=1pmf1q8bjJnRbXdm&t=407",
  },
  {
    image: "https://img.youtube.com/vi/kW74SCr3DkI/maxresdefault.jpg",
    title: "Reconocimiento en la 24° Conferencia — Escuela de Ciudadanía",
    source: "Premio OIDP · 2024",
    href: "https://www.youtube.com/live/kW74SCr3DkI?si=IJiDPUd7Awy5DpjB&t=2666",
  },
  {
    image: "https://img.youtube.com/vi/4BIwdpiFoso/maxresdefault.jpg",
    title: "Jornada provincial — 300 personas, un cambio de chip necesario",
    source: "Ciberseguridad · 2024",
    href: "https://www.youtube.com/live/4BIwdpiFoso?si=VTdKwtRe3CgCJ7pX&t=151",
  },
]

export function MultimediaContent() {
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
              <Tv className="w-4 h-4" />
              Multimedia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Audiovisuales y <span className="text-brand-pink">Podcast</span>
            </h1>
            <p className="text-xl text-white/70">
              Entrevistas, conferencias y participaciones en medios de comunicación
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/10 text-brand-navy text-sm font-medium rounded-full mb-4">
              <Tv className="w-4 h-4" />
              Videos
            </span>
            <h2 className="text-3xl font-bold text-brand-navy">Audiovisuales</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={`${video.title}-${index}`}
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
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-brand-navy mb-4">
                    <Image
                      src={video.image}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center w-16 h-16 bg-white/90 rounded-full group-hover:scale-110 transition-all duration-300">
                        <Play className="w-7 h-7 text-brand-navy ml-1 group-hover:text-brand-pink transition-colors" />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-pink transition-colors mb-1">
                    {video.title}
                  </h3>
                  <p className="text-brand-navy/60 text-sm">{video.source}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-24 bg-brand-light-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink text-sm font-medium rounded-full mb-4">
              <Mic className="w-4 h-4" />
              Podcast
            </span>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Ciudadanía Presente</h2>
            <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
              Conversaciones sobre innovación, participación ciudadana y democracia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-3xl overflow-hidden bg-brand-navy">
              <video
                src="/vid/vid.mp4"
                className="w-full h-full object-cover"
                controls
                poster="/img/podcast-poster.jpg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
