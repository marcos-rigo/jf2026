"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, Tv, Mic, Headphones, ExternalLink, Volume2, ChevronRight } from "lucide-react"

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
    category: "TV",
  },
  {
    image: "/img/Podcast/4.png",
    title: "Uso seguro de la tecnología",
    source: "La Gaceta",
    href: "https://youtu.be/onGjGZU0fqQ?t=21",
    category: "Entrevista",
  },
  {
    image: "/img/Podcast/3.png",
    title: "IV Congreso Americano de Mediación",
    source: "Fundación Mediar",
    href: "https://youtu.be/0vpMhHOOVHY?t=7202",
    category: "Conferencia",
  },
  {
    image: "https://img.youtube.com/vi/u_up6zCGoT8/hqdefault.jpg",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    source: "Internacional · 2025",
    href: "https://www.youtube.com/live/u_up6zCGoT8?si=oZ3iAFsnyhToOT1S&t=1004",
    category: "Panel",
  },
  {
    image: "https://img.youtube.com/vi/I1f_cXrxXic/maxresdefault.jpg",
    title: "Webinar internacional con enfoque territorial desde Perú",
    source: "Gobierno Abierto · 2025",
    href: "https://youtu.be/I1f_cXrxXic?si=1pmf1q8bjJnRbXdm&t=407",
    category: "Webinar",
  },
  {
    image: "https://img.youtube.com/vi/kW74SCr3DkI/maxresdefault.jpg",
    title: "Reconocimiento en la 24° Conferencia — Escuela de Ciudadanía",
    source: "Premio OIDP · 2024",
    href: "https://www.youtube.com/live/kW74SCr3DkI?si=IJiDPUd7Awy5DpjB&t=2666",
    category: "Premio",
  },
  {
    image: "https://img.youtube.com/vi/4BIwdpiFoso/maxresdefault.jpg",
    title: "Jornada provincial — 300 personas, un cambio de chip necesario",
    source: "Ciberseguridad · 2024",
    href: "https://www.youtube.com/live/4BIwdpiFoso?si=VTdKwtRe3CgCJ7pX&t=151",
    category: "Keynote",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const videoVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
}

const epVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function MultimediaContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090f]">
      <style>{`
        @keyframes waveform {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .wave-bar {
          animation: waveform 0.8s ease-in-out infinite;
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/30 via-transparent to-brand-pink/20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-pink/15 rounded-full blur-[120px]" />

      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute top-40 right-20 w-16 h-16 border border-brand-blue/20 rounded-full float-gentle" />
      <div className="absolute top-60 left-40 w-10 h-10 border border-brand-pink/20 rotate-45 float-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-60 w-20 h-20 border border-white/5 rounded-full float-gentle" style={{ animationDelay: '2s' }} />

      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <div className="w-[700px] h-[700px] border border-white rounded-full" />
          <div className="absolute w-[500px] h-[500px] border border-white rounded-full" />
          <div className="absolute w-[300px] h-[300px] border border-white rounded-full" />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20">
          <Mic className="w-full h-full text-brand-blue/30 spin-slow" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 mb-8"
            >
              <div className="relative flex h-2.5 w-2.5">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink/60" />
                <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink" />
              </div>
              <span className="text-sm font-medium text-white/70 uppercase tracking-widest">
                Multimedia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
            >
              <span className="block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Audiovisuales
              </span>
              <span className="block mt-2 bg-gradient-to-r from-brand-pink via-brand-pink/80 to-transparent bg-clip-text text-transparent">
                y Podcast
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed"
            >
              Entrevistas, conferencias y participaciones en medios de comunicación.
              Contenido para ciudadanos digitales del presente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink/20 flex items-center justify-center">
                  <Tv className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-white">07</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Videos</div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1DB954]/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#1DB954]" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-white">07</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Episodios</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090f] to-transparent" />
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex items-end justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-brand-pink" />
                <span className="text-sm font-semibold text-brand-pink uppercase tracking-widest">Audiovisuales</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                Videos
              </h2>
            </div>
            <p className="text-white/30 max-w-sm text-sm hidden sm:block">
              Grabaciones de presentaciones, paneles y entrevistas en diferentes medios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={`${video.title}-${index}`}
                variants={videoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <Link
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-[#0d1525] transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                    <div className="absolute inset-0 border border-white/5 group-hover:border-white/15 rounded-2xl transition-colors duration-500" />

                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1525] via-[#0d1525]/30 to-transparent" />
                      <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/30 transition-colors" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-xl text-xs font-medium text-white/80 rounded-full border border-white/10">
                          {video.category}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/[0.1] backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                          <Play className="w-6 h-6 text-white ml-1 group-hover:text-brand-pink transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                          <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                        </div>
                      </div>
                    </div>

                    <div className="relative p-6">
                      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-white/30">{video.source}</p>

                      <div className="mt-4 flex items-center gap-2 text-brand-pink text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Ver video</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-[#0a1628] to-[#07090f]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px]" style={{ background: "radial-gradient(ellipse, rgba(213,36,122,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px]" style={{ background: "radial-gradient(ellipse, rgba(29,185,84,0.06) 0%, transparent 70%)" }} />
        </div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-10 bg-[#1DB954]" />
                  <span className="text-sm font-semibold text-[#1DB954] uppercase tracking-widest">Podcast</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  Ciudadanía Presente
                </h2>
                <p className="text-white/40">
                  Conversaciones sobre innovación, participación y democracia
                </p>
              </div>
              <Link
                href="https://open.spotify.com/show/01EhwtvyRBaX6UgErXIwtH"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/30 hover:border-[#1DB954] font-semibold transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span>Escuchar en Spotify</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0f1d35]">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#1DB954] via-brand-blue to-brand-pink" />

              <div className="grid lg:grid-cols-[1fr_1.3fr] gap-0">
                <div className="p-8 lg:p-10 flex flex-col justify-center relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10">
                    <Mic className="w-full h-full text-white spin-slow" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1DB954]/15 rounded-full mb-5 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#1DB954] uppercase tracking-widest">Último Episodio</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white leading-snug mb-4">
                    El podcast donde la democracia toma la palabra
                  </h3>

                  <p className="text-white/45 text-sm leading-relaxed mb-6">
                    Conducido por <span className="text-white font-semibold">José Farhat</span>, referente regional en gobierno abierto. Innovación, tecnología y participación ciudadana en cada episodio.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-end gap-1 h-8">
                      {[1,2,3,4,5].map((b) => (
                        <div
                          key={b}
                          className="w-1 rounded-full bg-gradient-to-t from-[#1DB954] to-brand-blue wave-bar"
                          style={{ animationDelay: `${b * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-white/30 text-xs font-medium uppercase tracking-wider">Reproduciendo</span>
                  </div>
                </div>

                <div className="relative border-t lg:border-t-0 lg:border-l border-white/5">
                  <div className="px-5 pt-3 pb-2 bg-[#121212] flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-white/40 text-xs font-semibold">Spotify</span>
                  </div>
                  <iframe
                    src="https://open.spotify.com/embed/episode/63AgnYjzfvRPrpC3siVs6M?utm_source=generator&t=0"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block"
                    style={{ background: "#121212" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {episodes.map((ep) => (
              <motion.div
                key={ep.spotifyId}
                variants={epVariants}
                className="group relative"
              >
                <div className={`absolute -inset-px rounded-[1.25rem] bg-gradient-to-br ${ep.gradient} opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500`} />

                <div className="relative bg-[#0d1525] rounded-[1.25rem] border border-white/[0.06] group-hover:border-transparent overflow-hidden transition-all duration-500">
                  <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${ep.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  <div className="px-5 pt-4 pb-1 flex items-center gap-3">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${ep.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Headphones className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">Ep. {ep.num}</span>
                  </div>

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

            <motion.div variants={epVariants} className="group relative">
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-[#1DB954]/30 to-brand-blue/20 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />

              <Link
                href="https://open.spotify.com/show/01EhwtvyRBaX6UgErXIwtH"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-center gap-5 bg-[#0d1525] rounded-[1.25rem] border border-white/[0.06] group-hover:border-transparent transition-all duration-500 p-10 h-full min-h-[220px]"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#1DB954] to-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-[#1DB954]/10 flex items-center justify-center group-hover:bg-[#1DB954]/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-white font-display font-bold text-lg mb-1">Ver todos los episodios</p>
                  <p className="text-white/30 text-sm">en Spotify</p>
                </div>

                <div className="flex items-center gap-2 text-[#1DB954] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Escuchar ahora</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-t from-[#07090f] to-transparent" />
    </main>
  )
}