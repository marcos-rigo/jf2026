import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BackToDashboardButton } from "@/components/tematicas/back-to-dashboard-button"
import { Footer } from "@/components/footer"
import { NnyaEntornoDigitalContent } from "./nnya-entorno-digital-content"

export const metadata: Metadata = {
  title: "Cómo interpretan los NNyA el Entorno Digital | José Farhat",
  description:
    "Guía para entender cómo los niños, niñas y adolescentes viven y perciben el mundo digital. Herramientas para acompañarlos de forma consciente.",
  keywords: [
    "NNyA",
    "niños y tecnología",
    "adolescentes internet",
    "mediación parental",
    "ciudadanía digital",
    "seguridad infantil online",
  ],
  openGraph: {
    title: "Cómo interpretan los NNyA el Entorno Digital",
    description:
      "Entendé cómo los pibes perciben el mundo digital y aprendé a acompañarlos con herramientas concretas.",
    type: "article",
    locale: "es_AR",
  },
}

export default function NnyaEntornoDigitalPage() {
  return (
    <>
      <Navbar />
      <BackToDashboardButton />
      <NnyaEntornoDigitalContent />
      <Footer />
    </>
  )
}
