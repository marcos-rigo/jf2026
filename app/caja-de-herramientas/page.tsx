import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ToolboxContent } from "./toolbox-content"

export const metadata = {
  title: "Caja de Herramientas | José Farhat",
  description: "Recursos y documentos para la innovación ciudadana y participación.",
}

export default function ToolboxPage() {
  return (
    <main className="relative">
      <Navbar />
      <ToolboxContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
