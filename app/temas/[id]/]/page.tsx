import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { TopicContent } from "./topic-content"

export const metadata = {
  title: "Tema | José Farhat",
  description: "Contenido sobre temas específicos de innovación ciudadana y democracia.",
}

interface TopicPageProps {
  params: {
    id: string
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  return (
    <main className="relative">
      <Navbar />
      <TopicContent id={params.id} />
      <Footer />
      <FloatingElements />
    </main>
  )
}