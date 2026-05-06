import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TematicasContent } from "./tematicas-content"

export const metadata: Metadata = {
  title: "Temáticas | José Farhat",
  description:
    "Explorá todas las temáticas de ciudadanía digital: seguridad, alfabetización mediática, huella digital, violencia digital y estafas digitales.",
  openGraph: {
    title: "Temáticas de Ciudadanía Digital | José Farhat",
    description:
      "Guías y recursos sobre ciudadanía digital, seguridad en línea, derechos digitales y más.",
    type: "website",
    locale: "es_AR",
  },
}

export default function TematicasPage() {
  return (
    <>
      <Navbar />
      <TematicasContent />
      <Footer />
    </>
  )
}
