"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, Tv, Mic, Headphones, ExternalLink } from "lucide-react"

const episodes = [
  { num: "01", spotifyId: "63AgnYjzfvRPrpC3siVs6M", gradient: "from-brand-pink to-rose-400" },
  { num: "02", spotifyId: "3NvCmUtM9IXqBorgbdOYz4", gradient: "from-brand-blue to-cyan-400" },
  { num: "03", spotifyId: "4BSbnQObyYRHT9omujPsV9", gradient: "from-purple-500 to-violet-400" },
  { num: "04", spotifyId: "2v9Vd4hFFATFIGhTYRWIkS", gradient: "from-indigo-500 to-blue-400" },
  { num: "05", spotifyId: "4MBvjEKbcrwxFf3JuLGbb1", gradient: "from-rose-500 to-orange-400" },
  { num: "06", spotifyId: "41TZNht3Xf77YjsI3GoOqr", gradient: "from-cyan-500 to-teal-400" },
  { num: "07", spotifyId: "0DPIwubkxvEgu3UT9KYpfO", gradient: "from-brand-pink to-brand-blue" },
]

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
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
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
      <section className="py-16 md:py-24 bg-white">
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
      <section id="podcast" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #001228 0%, #002444 55%, #001e3c 100%)" }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[400px]" style={{ background: "radial-gradient(ellipse, rgba(213,36,122,0.10) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px]" style={{ background: "radial-gradient(ellipse, rgba(66,114,187,0.12) 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
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
              <div className="h-1 w-12 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full" />
              <span className="text-sm font-semibold text-brand-pink uppercase tracking-wider">Podcast</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight mb-3">
                  Ciudadanía Presente
                </h2>
                <p className="text-lg text-white/55">
                  Conversaciones sobre innovación, participación y democracia
                </p>
              </div>
              <Link
                href="https://open.spotify.com/show/01EhwtvyRBaX6UgErXIwtH"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#1DB954] font-semibold transition-all duration-300 whitespace-nowrap text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Ver en Spotify
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Featured episode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#001e3c]/80">
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#1DB954] via-brand-blue to-brand-pink" />

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
                {/* Info */}
                <div className="p-7 lg:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1DB954]/15 rounded-full mb-5 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#1DB954] uppercase tracking-widest">Último episodio</span>
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white font-display leading-snug mb-4">
                    El podcast donde la democracia toma la palabra
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">
                    Conducido por <span className="text-white font-semibold">José Farhat</span>, referente regional en gobierno abierto. Innovación, tecnología y participación ciudadana en cada episodio.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      {[1,2,3,4,5].map((b) => (
                        <motion.div
                          key={b}
                          className="w-1 rounded-full bg-gradient-to-t from-brand-pink to-brand-blue"
                          animate={{ height: ["8px", `${10 + b * 4}px`, "8px"] }}
                          transition={{ duration: 0.8 + b * 0.1, repeat: Infinity, ease: "easeInOut", delay: b * 0.12 }}
                        />
                      ))}
                    </div>
                    <span className="text-white/40 text-xs font-medium">En reproducción</span>
                  </div>
                </div>

                {/* Spotify embed */}
                <div className="relative">
                  <div className="px-6 pt-4 pb-1 bg-[#121212] flex items-center gap-2 border-l border-white/[0.06]">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#1DB954">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-white/60 text-xs font-semibold">Spotify Podcast</span>
                  </div>
                  <iframe
                    src="https://open.spotify.com/embed/episode/63AgnYjzfvRPrpC3siVs6M?utm_source=generator&t=0"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block border-l border-white/[0.06]"
                    style={{ background: "#121212" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Episodes grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {episodes.map((ep, index) => (
              <motion.div
                key={ep.spotifyId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-px rounded-[1.25rem] bg-gradient-to-br ${ep.gradient} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500`} />

                <div className="relative bg-[#001e3c]/90 backdrop-blur-md rounded-[1.25rem] border border-white/[0.07] group-hover:border-transparent overflow-hidden transition-all duration-500">
                  {/* Top accent */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${ep.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  {/* Episode number badge */}
                  <div className="px-5 pt-4 pb-1 flex items-center gap-3">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${ep.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Headphones className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Ep. {ep.num}</span>
                  </div>

                  {/* Compact Spotify embed */}
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${ep.spotifyId}?utm_source=generator`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block mt-2"
                  />
                </div>
              </motion.div>
            ))}

            {/* CTA card — add more episodes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-[#1DB954]/40 to-brand-blue/30 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
              <Link
                href="https://open.spotify.com/show/01EhwtvyRBaX6UgErXIwtH"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-center gap-5 bg-[#001e3c]/60 backdrop-blur-md rounded-[1.25rem] border border-white/[0.07] group-hover:border-transparent transition-all duration-500 p-10 h-full min-h-[220px]"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#1DB954] to-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-[#1DB954]/15 flex items-center justify-center group-hover:bg-[#1DB954]/25 transition-colors duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#1DB954">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold font-display mb-1">Ver todos los episodios</p>
                  <p className="text-white/40 text-sm">en Spotify</p>
                </div>
                <div className="flex items-center gap-2 text-[#1DB954] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  Abrir Spotify
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
