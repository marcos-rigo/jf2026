import type { Metadata } from "next"
import { CibercrianzaContent } from "./cibercrianza-content"

export const metadata: Metadata = {
  title: "¿Sabés dónde interactúan tus estudiantes? | Cibercrianza",
  description:
    "Descubrí tu perfil como guía digital. Datos, herramientas y estrategias para acompañar a tus estudiantes en el territorio digital.",
  openGraph: {
    title: "¿Sabés dónde interactúan tus estudiantes? | Cibercrianza",
    description:
      "Descubrí tu perfil como guía digital. Datos, herramientas y estrategias para acompañar a tus estudiantes en el territorio digital.",
    type: "article",
    locale: "es_AR",
  },
}

export default function CibercrianzaPage() {
  return <CibercrianzaContent />
}
