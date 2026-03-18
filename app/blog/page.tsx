import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { BlogContent } from "./blog-content"

export const metadata = {
  title: "Blog | José Farhat",
  description: "Artículos sobre innovación ciudadana, participación y democracia digital.",
}

export default function BlogPage() {
  return (
    <main className="relative">
      <Navbar />
      <BlogContent />
      <Footer />
      <FloatingElements />
    </main>
  )
}
