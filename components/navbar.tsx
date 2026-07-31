"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, User, LogOut, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/lib/ciudadania/app-store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Conóceme", href: "/conoceme" },
  { label: "Temáticas", href: "/tematicas" },
  { label: "Caja de Herramientas", href: "/caja-de-herramientas" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
]

function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const platformUser = useAppStore((s) => s.user)
  const logout = useAppStore((s) => s.reset)
  const TRANSPARENT_ROUTES = ["/", "/ciudadania-digital"]
  const isDark = isScrolled || !TRANSPARENT_ROUTES.some((route) => pathname === route)
  const isCiudadaniaModulos = pathname === "/ciudadania-presente/modulos"
  const isCiudadaniaLogin = pathname === "/ciudadania-presente/login"
  const ctaHref = isCiudadaniaModulos ? "/ciudadania-presente/login" : "/ciudadania-presente"
  const ctaLabel = isCiudadaniaModulos ? "Ingresar" : "Ciudadanía Presente"
  // Antes solo se mostraba en rutas bajo /ciudadania-presente/dashboard — la
  // sesión (Zustand) es global, así que el menú de usuario debe reflejarse en
  // toda la app, no solo ahí (ej. al entrar a /tematicas/cibercrianza logueado).
  const showUserMenu = !!platformUser

  const handleLogout = () => {
    logout()
    router.push("/ciudadania-presente/modulos")
  }

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

            {/* User menu (logged into Ciudadanía Presente) */}
            {showUserMenu && platformUser && (
              <div className="hidden lg:flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border transition-colors",
                        isDark
                          ? "border-[#d3e2f0] hover:bg-brand-light-blue"
                          : "border-white/20 hover:bg-white/10"
                      )}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-navy to-brand-blue text-xs font-bold text-white flex-shrink-0 overflow-hidden">
                        {platformUser.fotoPerfil ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={platformUser.fotoPerfil} alt={platformUser.fullName} className="w-full h-full object-cover" />
                        ) : (
                          getInitials(platformUser.fullName)
                        )}
                      </span>
                      <span className={cn("text-sm font-semibold max-w-[140px] truncate", isDark ? "text-brand-navy" : "text-white")}>
                        {platformUser.fullName.split(" ")[0]}
                      </span>
                      <ChevronDown className={cn("w-4 h-4 flex-shrink-0", isDark ? "text-brand-navy/60" : "text-white/70")} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => router.push('/ciudadania-presente/dashboard/tematicas')}>
                      <GraduationCap className="w-4 h-4" />
                      Mis temáticas
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/ciudadania-presente/dashboard/perfil')}>
                      <User className="w-4 h-4" />
                      Mi perfil
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                      <LogOut className="w-4 h-4" />
                      Cerrar sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* CTA Button */}
            {!isCiudadaniaLogin && !showUserMenu && (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={ctaHref}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-full hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-300 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                {ctaLabel}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            )}

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

            {/* Mobile user menu (logged into Ciudadanía Presente) */}
            {showUserMenu && platformUser && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-2xl border border-[#d3e2f0] overflow-hidden"
              >
                <div className="flex items-center gap-3 px-4 py-3 bg-brand-light-blue">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-navy to-brand-blue text-xs font-bold text-white flex-shrink-0 overflow-hidden">
                    {platformUser.fotoPerfil ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={platformUser.fotoPerfil} alt={platformUser.fullName} className="w-full h-full object-cover" />
                    ) : (
                      getInitials(platformUser.fullName)
                    )}
                  </span>
                  <span className="text-sm font-bold text-brand-navy truncate">{platformUser.fullName}</span>
                </div>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); router.push('/ciudadania-presente/dashboard/tematicas') }}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-brand-navy hover:bg-brand-light-blue transition-colors"
                >
                  <GraduationCap className="w-4 h-4" /> Mis temáticas
                </button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); router.push('/ciudadania-presente/dashboard/perfil') }}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-brand-navy hover:bg-brand-light-blue transition-colors"
                >
                  <User className="w-4 h-4" /> Mi perfil
                </button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); handleLogout() }}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors border-t border-[#d3e2f0]"
                >
                  <LogOut className="w-4 h-4" /> Cerrar sesión
                </button>
              </motion.div>
            )}

            {/* Mobile CTA */}
            {!isCiudadaniaLogin && !showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href={ctaHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                {ctaLabel}
                <span>→</span>
              </Link>
            </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
