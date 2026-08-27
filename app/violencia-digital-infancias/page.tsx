import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BackToDashboardButton } from "@/components/tematicas/back-to-dashboard-button"
import { Footer } from "@/components/footer"
import { ViolenciaInfanciasContent } from "./violencia-infancias-content"

export const metadata: Metadata = {
  title: "Violencia Digital en Infancias y Adolescencias | José Farhat",
  description:
    "Guía de prevención y acción frente al grooming, ciberbullying y exposición a riesgos en internet. Información para familias, docentes y referentes adultos.",
  keywords: [
    "grooming",
    "ciberbullying",
    "violencia digital infancias",
    "protección menores internet",
    "línea 137",
    "seguridad digital niños",
  ],
  openGraph: {
    title: "Violencia Digital en Infancias y Adolescencias",
    description:
      "Cómo identificar, prevenir y actuar frente al grooming, ciberacoso y otras formas de violencia digital contra niñas, niños y adolescentes.",
    type: "article",
    locale: "es_AR",
  },
}

export default function ViolenciaInfanciasPage() {
  return (
    <>
      <Navbar />
      <BackToDashboardButton />
      <ViolenciaInfanciasContent />
      <Footer />
    </>
  )
}
