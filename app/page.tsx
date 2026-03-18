import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PillarsSection } from "@/components/sections/pillars-section"
import { PodcastSection } from "@/components/sections/podcast-section"
import { NewsSection } from "@/components/sections/news-section"
import { ToolboxSection } from "@/components/sections/toolbox-section"
import { MultimediaSection } from "@/components/sections/multimedia-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PillarsSection />
      <PodcastSection />
      <NewsSection />
      <ToolboxSection />
      <MultimediaSection />
      <TestimonialsSection />
      <Footer />
      <FloatingElements />
    </main>
  )
}
