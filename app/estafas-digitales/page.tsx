import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BackToDashboardButton } from "@/components/tematicas/back-to-dashboard-button"
import { Footer } from "@/components/footer"
import { EstafasDigitalesContent } from "./estafas-digitales-content"

export const metadata: Metadata = {
  title: "Estafas Digitales - Cómo Protegerte | José Farhat",
  description: "Guía completa sobre phishing, smishing y vishing. Aprende a protegerte de estafas digitales y qué hacer si caes víctima.",
  keywords: [
    "estafas digitales",
    "phishing",
    "smishing",
    "vishing",
    "ciberseguridad",
    "protección digital",
  ],
  openGraph: {
    title: "Estafas Digitales - Protege tu vida digital",
    description:
      "Descubre los tipos de estafas digitales más comunes, cómo detectarlas y actuar rápidamente si eres víctima.",
    type: "article",
    locale: "es_AR",
  },
}

export default function EstafasDigitalesPage() {
  return (
    <>
      <Navbar />
      <BackToDashboardButton />
      <EstafasDigitalesContent />
      <Footer />
    </>
  )
}
