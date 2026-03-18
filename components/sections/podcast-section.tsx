"use client"

import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"
import { useState } from "react"

export function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="contenido" className="py-24 bg-brand-light-blue">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink text-sm font-medium rounded-full mb-4">
            <Volume2 className="w-4 h-4" />
            Podcast
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            ¡Explorá Ciudadanía Presente!
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            Conversaciones sobre innovación, participación ciudadana y democracia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-navy shadow-2xl">
            {/* Video Container */}
            <video
              src="/vid/vid.mp4"
              className="w-full h-full object-cover"
              poster="/img/podcast-poster.jpg"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            {/* Play Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/40">
                <button
                  onClick={() => {
                    const video = document.querySelector('video')
                    if (video) {
                      video.play()
                      setIsPlaying(true)
                    }
                  }}
                  className="group flex items-center justify-center w-20 h-20 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Play className="w-8 h-8 text-brand-navy ml-1 group-hover:text-brand-pink transition-colors" />
                </button>
              </div>
            )}
            
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-brand-blue to-brand-pink pointer-events-none opacity-0 hover:opacity-100 transition-opacity" style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box' }} />
          </div>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Ciudadanía Presente - El Podcast
            </h3>
            <p className="text-brand-navy/60">
              Nuevos episodios cada semana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
