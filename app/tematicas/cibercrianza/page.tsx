import type { Metadata } from "next"
import { CibercrianzaContent } from "./cibercrianza-content"

export const metadata: Metadata = {
  title: "¿Sabés dónde interactúan tus hijos? | Cibercrianza",
  description:
    "Descubrí tu perfil como cibercriador/a. Datos, herramientas y estrategias para acompañar a tus hijos en el territorio digital.",
  openGraph: {
    title: "¿Sabés dónde interactúan tus hijos? | Cibercrianza",
    description:
      "Descubrí tu perfil como cibercriador/a. Datos, herramientas y estrategias para acompañar a tus hijos en el territorio digital.",
    type: "article",
    locale: "es_AR",
  },
}

export default function CibercrianzaPage() {
  return <CibercrianzaContent />
}
