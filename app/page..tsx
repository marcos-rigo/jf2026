import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ToolboxSection } from "@/components/sections/toolbox-section"
import { PodcastSection } from "@/components/sections/podcast-section"
import { NewsSection } from "@/components/sections/news-section"
import { LocalNewsSection } from "@/components/sections/local-news-section"
import { MultimediaSection } from "@/components/sections/multimedia-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { QuickContactSection } from "@/components/sections/quick-contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PillarsSection />
      <ToolboxSection />
      <PodcastSection />
      <NewsSection />
      <LocalNewsSection />
      <MultimediaSection />
      <TestimonialsSection />
      <QuickContactSection />
      <Footer />
      <FloatingElements />
    </main>
  )
}
