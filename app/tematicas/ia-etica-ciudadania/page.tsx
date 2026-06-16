import type { Metadata } from "next"
import { IaEticaCiudadaniaContent } from "@/components/ia-etica-ciudadania-content"

export const metadata: Metadata = {
  title: "IA, Ética y Ciudadanía Digital | José Farhat",
  description:
    "La integración de la Inteligencia Artificial en el tejido social: un marco integral sobre ética, derecho y ciudadanía desde la Sociedad 5.0 y un enfoque radicalmente humanista.",
  openGraph: {
    title: "IA, Ética y Ciudadanía Digital | José Farhat",
    description:
      "De la Sociedad 4.0 a la 5.0: brújula ética, economía del conocimiento, humanidad ampliada, AI Act 2024 y justicia digital con perspectiva de género.",
    type: "article",
    locale: "es_AR",
  },
}

export default function IaEticaCiudadaniaPage() {
  return <IaEticaCiudadaniaContent />
}
