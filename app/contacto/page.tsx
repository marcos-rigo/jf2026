import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ContactContent } from "./contact-content"

export const metadata = {
  title: "Contacto | José Farhat",
  description: "Ponte en contacto con José Farhat para consultas, colaboraciones y más.",
}

export default function ContactoPage() {
  return (
    <main className="relative">
      <Navbar />
      <ContactContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
