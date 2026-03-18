import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { AboutContent } from "./about-content"

export const metadata = {
  title: "Conóceme | José Farhat",
  description: "Conoce a José Farhat - Abogado, Secretario de Participación Ciudadana de Tucumán.",
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
