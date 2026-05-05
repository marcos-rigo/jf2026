"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import {
  type WeeklyContent,
  getWeekNumber,
  getWeeklyContent,
  hasSeenWeeklyModal,
  markWeeklyModalAsSeen,
} from "@/lib/weekly-content"

const CTA_THEME_CLASSES = {
  blue: "bg-brand-blue hover:bg-brand-blue/90 focus:ring-brand-blue",
  pink: "bg-brand-pink hover:bg-brand-pink/90 focus:ring-brand-pink",
  navy: "bg-brand-navy hover:bg-brand-navy/90 focus:ring-brand-navy",
} as const

export default function WeeklyModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<WeeklyContent | null>(null)
  const [week, setWeek] = useState("")
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentWeek = getWeekNumber()
    setWeek(currentWeek)

    if (hasSeenWeeklyModal(currentWeek)) return

    getWeeklyContent(currentWeek).then((data) => {
      if (!data) return
      setContent(data)
      setIsOpen(true)
    })
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
        return
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  function handleClose() {
    markWeeklyModalAsSeen(week)
    setIsOpen(false)
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) handleClose()
  }

  if (!content) return null

  const gifSrc = `/weekly-content/${week}/${content.gifFileName}`
  const ctaHref = content.ctaLink ?? content.linkTo ?? "/"
  const ctaText = content.ctaText ?? "Ver más"
  const ctaClasses = CTA_THEME_CLASSES[content.theme ?? "blue"]

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
          aria-hidden="false"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="weekly-modal-title"
            aria-describedby="weekly-modal-description"
            className="relative bg-white rounded-2xl shadow-2xl w-[90vw] md:w-[480px] md:max-w-[480px] p-6 md:p-7"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-pink transition-colors duration-200 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8 mb-6">
              <h2
                id="weekly-modal-title"
                className="font-display text-2xl md:text-3xl text-brand-navy font-bold mb-2 leading-tight"
              >
                {content.title}
              </h2>
              <p
                id="weekly-modal-description"
                className="text-gray-600 text-sm md:text-base"
              >
                {content.description}
              </p>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gray-100">
              <Image
                src={gifSrc}
                alt={content.title}
                width={700}
                height={394}
                priority
                unoptimized
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex justify-center">
              <Link
                href={ctaHref}
                onClick={handleClose}
                className={`inline-block w-full md:w-auto text-center text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${ctaClasses}`}
              >
                {ctaText}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
