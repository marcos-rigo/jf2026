"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Lightbulb, Users, Building2, Brain, Smartphone, Vote } from "lucide-react"

const categories = [
  { icon: Lightbulb, title: "Innovación Ciudadana", slug: "innovacion-ciudadana", color: "bg-blue-500" },
  { icon: Building2, title: "Innovación Política", slug: "innovacion-politica", color: "bg-indigo-500" },
  { icon: Users, title: "Innovación Pública", slug: "innovacion-publica", color: "bg-cyan-500" },
  { icon: Brain, title: "Inteligencia Colectiva", slug: "inteligencia-colectiva", color: "bg-purple-500" },
  { icon: Smartphone, title: "Ciudadanía Digital", slug: "ciudadania-digital", color: "bg-pink-500" },
  { icon: Vote, title: "Participación Ciudadana", slug: "participacion-ciudadana", color: "bg-rose-500" },
]

const posts = [
  {
    category: "Innovación Ciudadana",
    categoryColor: "bg-blue-500",
    title: "El futuro de la participación ciudadana en la era digital",
    excerpt: "Exploramos cómo las nuevas tecnologías están transformando la forma en que los ciudadanos interactúan con el gobierno.",
    date: "2025",
    slug: "futuro-participacion-ciudadana",
  },
  {
    category: "Ciudadanía Digital",
    categoryColor: "bg-pink-500",
    title: "Derechos digitales: una nueva frontera para la ciudadanía",
    excerpt: "Análisis de los derechos fundamentales en el entorno digital y su importancia para la democracia.",
    date: "2025",
    slug: "derechos-digitales",
  },
  {
    category: "Innovación Pública",
    categoryColor: "bg-cyan-500",
    title: "Gobierno abierto: transparencia y colaboración",
    excerpt: "Cómo los gobiernos pueden ser más transparentes y colaborativos con la ciudadanía.",
    date: "2024",
    slug: "gobierno-abierto",
  },
]

export function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ideas y <span className="text-brand-pink">Reflexiones</span>
            </h1>
            <p className="text-xl text-white/70">
              Artículos sobre innovación ciudadana, participación democrática y transformación digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-brand-light-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/blog/${cat.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-brand-navy hover:shadow-md transition-all"
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full bg-brand-light-blue rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-blue/20"
                >
                  <span className={`inline-block px-3 py-1 ${post.categoryColor} text-white text-xs font-medium rounded-full mb-4`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-pink transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-brand-navy/60 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-brand-navy/40 text-sm">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-brand-blue group-hover:text-brand-pink transition-colors text-sm font-medium">
                      Leer más
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
