import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { AboutContent } from "./about-content"

export const metadata = {
  title: "Conóceme | Dr. José Néstor Farhat",
  description: "Trayectoria, formación y premios del Dr. José Néstor Farhat — Abogado, Secretario de Estado de Participación Ciudadana de Tucumán e innovador público con presencia internacional.",
}

export default function ConocemePage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
