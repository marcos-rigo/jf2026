"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Mail, ArrowUp } from "lucide-react"

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showContactButton, setShowContactButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > 300)
      setShowContactButton(scrollY > 600) // Show after passing hero
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Contact Button - Bottom Left */}
      <AnimatePresence>
        {showContactButton && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-pink text-white font-medium rounded-full shadow-lg shadow-brand-pink/30 hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Dejar un mensaje</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button - Bottom Right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 bg-brand-navy text-white rounded-full shadow-lg hover:bg-brand-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
