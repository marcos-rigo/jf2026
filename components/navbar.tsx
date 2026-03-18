"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Conóceme",
    href: "/conoceme",
    children: [
      { label: "Sobre mí", href: "/conoceme" },
      { label: "1+1=2 y medio", href: "/conoceme#formula" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Multimedia",
    href: "/multimedia",
    children: [
      { label: "Audiovisuales", href: "/multimedia" },
      { label: "Podcast", href: "/multimedia#podcast" },
    ],
  },
  { label: "Caja de Herramientas", href: "/caja-de-herramientas" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src={isScrolled ? "/img/marcaJF.svg" : "/img/marcaJFb.svg"}
                alt="José Farhat"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                      isScrolled
                        ? "text-brand-navy hover:text-brand-pink hover:bg-brand-light-blue"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-brand-navy hover:bg-brand-light-blue hover:text-brand-pink transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://ciudadaniadigital.josefarhat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-full hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-300 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Ciudadanía Digital
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2 rounded-lg transition-colors",
                isScrolled || isMobileMenuOpen
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <MobileNavItem
                  key={link.label}
                  link={link}
                  index={index}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="https://ciudadaniadigital.josefarhat.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Ciudadanía Digital
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileNavItem({
  link,
  index,
  onClose,
}: {
  link: (typeof navLinks)[0]
  index: number
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {link.children ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-brand-navy hover:bg-brand-light-blue rounded-xl transition-colors"
          >
            {link.label}
            <ChevronDown
              className={cn(
                "w-5 h-5 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-4 py-2 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-base text-brand-navy/70 hover:text-brand-pink hover:bg-brand-light-blue rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={link.href}
          onClick={onClose}
          className="block px-4 py-3 text-lg font-medium text-brand-navy hover:text-brand-pink hover:bg-brand-light-blue rounded-xl transition-colors"
        >
          {link.label}
        </Link>
      )}
    </motion.div>
  )
}
