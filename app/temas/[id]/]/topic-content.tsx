"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Lightbulb, Users, Building2, Brain, Smartphone, Vote } from "lucide-react"

interface TopicContentProps {
  id: string
}

// Mock data - in a real app, this would come from a database or CMS
const topics = {
  "innovacion-ciudadana": {
    title: "Innovación Ciudadana",
    icon: Lightbulb,
    color: "bg-blue-500",
    description: "Explorando cómo los ciudadanos pueden innovar y transformar su entorno.",
    content: "La innovación ciudadana es el proceso mediante el cual los ciudadanos utilizan su creatividad, conocimientos y recursos para resolver problemas locales y contribuir al desarrollo de su comunidad. Este enfoque empodera a las personas para que tomen un rol activo en la transformación social.",
    articles: [
      {
        title: "El futuro de la participación ciudadana en la era digital",
        excerpt: "Exploramos cómo las nuevas tecnologías están transformando la forma en que los ciudadanos interactúan con el gobierno.",
        date: "2025",
        slug: "futuro-participacion-ciudadana",
      },
      {
        title: "Derechos digitales: una nueva frontera para la ciudadanía",
        excerpt: "Análisis de los derechos fundamentales en el entorno digital y su importancia para la democracia.",
        date: "2025",
        slug: "derechos-digitales",
      },
    ]
  },
  "innovacion-politica": {
    title: "Innovación Política",
    icon: Building2,
    color: "bg-indigo-500",
    description: "Reimaginando los sistemas políticos para una democracia más efectiva.",
    content: "La innovación política busca modernizar los procesos democráticos, hacerlos más inclusivos y eficientes. Desde el uso de tecnología blockchain para votaciones hasta plataformas de deliberación ciudadana, exploramos nuevas formas de hacer política.",
    articles: [
      {
        title: "Blockchain en la democracia",
        excerpt: "Cómo la tecnología blockchain puede mejorar la transparencia y seguridad de los procesos electorales.",
        date: "2024",
        slug: "blockchain-democracia",
      },
    ]
  },
  // Add more topics as needed
}

export function TopicContent({ id }: TopicContentProps) {
  const topic = topics[id as keyof typeof topics]

  if (!topic) {
    return (
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Tema no encontrado</h1>
            <p className="text-white/60 mb-8">El tema que buscas no existe.</p>
            <Link href="/blog" className="text-brand-blue hover:text-brand-pink transition-colors">
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const IconComponent = topic.icon

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${topic.color} mb-6`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {topic.title}
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {topic.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-12">
                {topic.content}
              </p>
            </div>

            {topic.articles.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {topic.articles.map((article, index) => (
                    <motion.article
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-3 h-3 rounded-full ${topic.color}`} />
                        <span className="text-sm text-gray-500">{topic.title}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>

                        <Link
                          href={`/blog/${article.slug}`}
                          className="text-brand-blue hover:text-brand-pink transition-colors font-medium"
                        >
                          Leer más →
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}