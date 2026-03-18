import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { NewsContent } from "./news-content"

export const metadata = {
  title: "Novedades | José Farhat",
  description: "Últimas noticias y actividades sobre participación ciudadana e innovación pública.",
}

export default function NovedadesPage() {
  return (
    <main className="relative">
      <Navbar />
      <NewsContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
