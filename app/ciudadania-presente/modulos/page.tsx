'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ── Componente principal ─────────────────────────────────────────────────────
export default function ModulosPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F5F8FC] dark:bg-[#0d1c26] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#003257]/20 border-t-[#003257] rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div id="top" className="min-h-screen bg-[#F5F8FC] dark:bg-[#0d1c26]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#003257] via-[#003257] to-[#F5F8FC] dark:to-[#0d1c26]">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Contenido del hero */}
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo / Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-[#D5247A]">
                <span className="h-1 w-1 animate-pulse rounded-full bg-white" />
              </span>
              Ciudadanía Presente - José Farhat
            </div>

            {/* Título principal */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Módulos de{' '}
              <span className="bg-gradient-to-r from-[#4272BB] to-[#D5247A] bg-clip-text text-transparent">
                Ciudadanía Digital
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Explora nuestros programas de formación ciudadana. 
              Cada módulo está diseñado para fortalecer tu participación 
              en la vida democrática de Tucumán.
            </p>

            {/* Botón Próximamente */}
            <div className="flex items-center justify-center">
              <button
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4272BB]/20 via-[#D5247A]/20 to-[#4272BB]/20 backdrop-blur-xl border border-white/20" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#4272BB]/30 via-[#D5247A]/30 to-[#4272BB]/30" />

                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink" />
                </span>

                <span className="relative text-white font-semibold text-lg tracking-wide">
                  Próximamente
                </span>

                <svg
                  className="relative w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <style>{`
                  @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                  }
                  button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    animation: shimmer 3s infinite;
                  }
                `}</style>
              </button>
            </div>
          </div>
        </div>

        {/* Wave decorativo */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 h-full w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-[#F5F8FC] dark:fill-[#0d1c26]"
            />
          </svg>
        </div>
      </div>


{/* Footer minimal */}
      <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-[#122233]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 Ciudadanía Presente - José Farhat
          </p>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            Secretaría: José Farhat
          </p>
        </div>
      </footer>
    </div>
  )
}
