"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Conóceme", href: "/conoceme" },
  { label: "Temáticas", href: "/tematicas" },
  { label: "Caja de Herramientas", href: "/caja-de-herramientas" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const TRANSPARENT_ROUTES = ["/", "/tematicas", "/ciudadania-digital"]
  const isDark = isScrolled || !TRANSPARENT_ROUTES.some((route) => pathname === route)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isDark
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src={isDark ? "/img/marcaJF.svg" : "/img/marcaJFb.svg"}
                alt="José Farhat"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                      isActive
                        ? isDark
                          ? "text-brand-pink bg-brand-light-blue"
                          : "text-white bg-white/15"
                        : isDark
                          ? "text-brand-navy hover:text-brand-pink hover:bg-brand-light-blue"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/ciudadania-presente"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-full hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-300 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Ciudadanía Presente
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2 rounded-lg transition-colors",
                isDark || isMobileMenuOpen
                  ? "text-brand-navy hover:bg-brand-light-blue"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-colors",
                        isActive
                          ? "text-brand-pink bg-brand-light-blue"
                          : "text-brand-navy hover:text-brand-pink hover:bg-brand-light-blue"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/ciudadania-presente"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Ciudadanía Presente
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
