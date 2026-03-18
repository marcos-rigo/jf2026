"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    category: "Ciudadanía Digital y Democracia",
    categoryColor: "bg-blue-500",
    title: "Conversatorio RAGA internacional 2025: Jóvenes y crisis de la democracia",
    excerpt: "El Secretario de Participación Ciudadana reflexionó sobre el vínculo entre juventudes, participación y los nuevos desafíos democráticos en un contexto atravesado por la transformación digital.",
    date: "2025",
    href: "/novedades",
    featured: true,
  },
  {
    category: "Disertación Internacional",
    categoryColor: "bg-indigo-500",
    title: "Participación en el webinar internacional sobre Gobierno Abierto con enfoque territorial",
    excerpt: "En el marco de la Semana del Gobierno Abierto 2025, José Farhat participó como expositor en el webinar 'Gobierno Abierto con Sello Territorial', organizado desde Perú.",
    date: "2025",
    href: "/novedades",
  },
  {
    category: "Cultura de Innovación",
    categoryColor: "bg-pink-500",
    title: "Premiación en la 24° Conferencia OIDP por la iniciativa Escuela de Ciudadanía",
    excerpt: "José Farhat fue reconocido por la iniciativa 'Escuela de Ciudadanía', destacada como política pública innovadora que promueve la participación y la construcción de comunidades democráticas.",
    date: "2024",
    href: "/novedades",
  },
  {
    category: "Ponencia",
    categoryColor: "bg-purple-500",
    title: "13º Universidad Internacional Municipalidad de Rancagua",
    excerpt: "José Farhat brindó una disertación sobre 'Mecanismos de Participación ciudadana para mejorar la transparencia Municipal'.",
    date: "2024",
    href: "/novedades",
  },
  {
    category: "Ciberseguridad",
    categoryColor: "bg-cyan-500",
    title: "Jornada provincial de ciberseguridad 2024 — Un cambio de chip necesario",
    excerpt: "José Farhat disertó para 300 personas en la Jornada provincial de ciberseguridad 2024, promoviendo la concientización en seguridad digital.",
    date: "2024",
    href: "/novedades",
  },
]

export function NewsSection() {
  const [featuredNews, ...otherNews] = newsItems

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-brand-pink/10 text-brand-pink text-sm font-medium rounded-full mb-4">
            Novedades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Lo que tenés que saber...
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            Últimas noticias y actividades sobre participación ciudadana e innovación pública
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={featuredNews.href}
              className="group block h-full bg-gradient-to-br from-brand-navy to-brand-dark rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className={`inline-block px-3 py-1 ${featuredNews.categoryColor} text-white text-xs font-medium rounded-full mb-6`}>
                {featuredNews.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brand-pink transition-colors leading-tight">
                {featuredNews.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-white/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  {featuredNews.date}
                </span>
                <span className="inline-flex items-center gap-2 text-brand-pink font-medium group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Other Articles Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {otherNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={news.href}
                  className="group block h-full bg-brand-light-blue rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-blue/20"
                >
                  <span className={`inline-block px-2.5 py-1 ${news.categoryColor} text-white text-xs font-medium rounded-full mb-4`}>
                    {news.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-brand-navy/60 text-sm mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-brand-navy/40 text-xs">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-dark hover:shadow-lg transition-all duration-300 group"
          >
            Ver todas las Novedades
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
