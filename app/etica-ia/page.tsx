import type { Metadata } from "next"
import { EticaIAContent } from "@/components/etica-ia-content"

export const metadata: Metadata = {
  title: "IA, Ética y Ciudadanía Digital | José Farhat",
  description:
    "La integración de la Inteligencia Artificial en el tejido social: un marco integral sobre ética, derecho y ciudadanía desde una perspectiva humanista.",
  openGraph: {
    title: "IA, Ética y Ciudadanía Digital | José Farhat",
    description:
      "Transición de la Sociedad 4.0 a la 5.0: brújula ética, economía del conocimiento, humanidad ampliada, marco normativo y justicia digital.",
    type: "article",
    locale: "es_AR",
  },
}

export default function EticaIAPage() {
  return <EticaIAContent />
}
