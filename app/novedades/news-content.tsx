"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight, Newspaper } from "lucide-react"

const newsItems = [
  {
    category: "Ciudadanía Digital y Democracia",
    categoryColor: "bg-blue-500",
    title: "Conversatorio RAGA internacional 2025: Jóvenes y crisis de la democracia",
    excerpt: "El Secretario de Participación Ciudadana reflexionó sobre el vínculo entre juventudes, participación y los nuevos desafíos democráticos en un contexto atravesado por la transformación digital.",
    date: "Marzo 2025",
    featured: true,
  },
  {
    category: "Disertación Internacional",
    categoryColor: "bg-indigo-500",
    title: "Participación en el webinar internacional sobre Gobierno Abierto con enfoque territorial",
    excerpt: "En el marco de la Semana del Gobierno Abierto 2025, José Farhat participó como expositor en el webinar 'Gobierno Abierto con Sello Territorial', organizado desde Perú.",
    date: "Marzo 2025",
  },
  {
    category: "Cultura de Innovación",
    categoryColor: "bg-pink-500",
    title: "Premiación en la 24° Conferencia OIDP por la iniciativa Escuela de Ciudadanía",
    excerpt: "José Farhat fue reconocido por la iniciativa 'Escuela de Ciudadanía', destacada como política pública innovadora que promueve la participación y la construcción de comunidades democráticas.",
    date: "2024",
  },
  {
    category: "Ponencia",
    categoryColor: "bg-purple-500",
    title: "13º Universidad Internacional Municipalidad de Rancagua",
    excerpt: "José Farhat brindó una disertación sobre 'Mecanismos de Participación ciudadana para mejorar la transparencia Municipal'.",
    date: "2024",
  },
  {
    category: "Ciberseguridad",
    categoryColor: "bg-cyan-500",
    title: "Jornada provincial de ciberseguridad 2024 — Un cambio de chip necesario",
    excerpt: "José Farhat disertó para 300 personas en la Jornada provincial de ciberseguridad 2024, promoviendo la concientización en seguridad digital.",
    date: "2024",
  },
  {
    category: "Innovación Pública",
    categoryColor: "bg-emerald-500",
    title: "Lanzamiento de la plataforma Gana Tucumán",
    excerpt: "Presentación oficial de la plataforma de participación ciudadana que permite a los tucumanos proponer ideas y votar por proyectos comunitarios.",
    date: "2024",
  },
  {
    category: "Educación",
    categoryColor: "bg-orange-500",
    title: "Apertura de la Escuela de Ciudadanía 2024",
    excerpt: "Nuevo ciclo de formación en participación ciudadana, democracia y herramientas de innovación para líderes comunitarios.",
    date: "2024",
  },
  {
    category: "Participación",
    categoryColor: "bg-rose-500",
    title: "Foro Regional de Participación Ciudadana del NOA",
    excerpt: "Encuentro de funcionarios y referentes de la sociedad civil del noroeste argentino para compartir experiencias en participación.",
    date: "2024",
  },
]

export function NewsContent() {
  const [featuredNews, ...otherNews] = newsItems

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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6">
              <Newspaper className="w-4 h-4" />
              Novedades
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lo que tenés que <span className="text-brand-pink">saber</span>
            </h1>
            <p className="text-xl text-white/70">
              Últimas noticias y actividades sobre participación ciudadana e innovación pública
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured + News Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link
              href="#"
              className="group block bg-gradient-to-br from-brand-navy to-brand-dark rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300"
            >
              <span className={`inline-block px-3 py-1 ${featuredNews.categoryColor} text-white text-sm font-medium rounded-full mb-6`}>
                {featuredNews.category}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-brand-pink transition-colors">
                {featuredNews.title}
              </h2>
              <p className="text-white/70 text-lg mb-6 max-w-3xl">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-white/50">
                  <Calendar className="w-4 h-4" />
                  {featuredNews.date}
                </span>
                <span className="inline-flex items-center gap-2 text-brand-pink font-medium group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Other News */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href="#"
                  className="group block h-full bg-brand-light-blue rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-blue/20"
                >
                  <span className={`inline-block px-2.5 py-1 ${news.categoryColor} text-white text-xs font-medium rounded-full mb-4`}>
                    {news.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-pink transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-brand-navy/60 text-sm mb-4 line-clamp-3">
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
      </section>
    </>
  )
}
