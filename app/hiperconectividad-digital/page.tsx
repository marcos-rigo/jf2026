import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HiperconectividadContent } from "./hiperconectividad-content"

export const metadata: Metadata = {
  title: "Hiperconectividad Digital y Desarrollo Adolescente | José Farhat",
  description:
    "Impacto de la hiperconectividad en el desarrollo neurológico, emocional e identitario de niñas, niños y adolescentes. Guía basada en evidencia científica para familias y educadores.",
  keywords: [
    "hiperconectividad",
    "salud mental adolescentes",
    "redes sociales NNyA",
    "FOMO",
    "cultura del like",
    "neurodesarrollo digital",
    "TRIC",
  ],
  openGraph: {
    title: "Hiperconectividad Digital y Desarrollo Adolescente",
    description:
      "El impacto real de las redes sociales en el cerebro adolescente. Guía basada en neurodesarrollo y evidencia clínica.",
    type: "article",
    locale: "es_AR",
  },
}

export default function HiperconectividadPage() {
  return (
    <>
      <Navbar />
      <HiperconectividadContent />
      <Footer />
    </>
  )
}
