import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MultimediaContent } from "./multimedia-content"

export const metadata = {
  title: "Multimedia | José Farhat",
  description: "Videos, podcasts y entrevistas de José Farhat sobre ciudadanía y participación.",
}

export default function MultimediaPage() {
  return (
    <main className="relative">
      <Navbar />
      <MultimediaContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
