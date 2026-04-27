"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, MapPin, Search, Filter, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Datos de ejemplo - estos vendrían de un CMS o API
const allTopics = [
  {
    id: "participacion-digital-tucuman-2025",
    title: "Tucumán impulsa la participación ciudadana digital",
    description: "La Secretaría de Estado lidera la transformación democrática con nuevas herramientas de participación ciudadana en toda la provincia.",
    date: "15 de Abril, 2026",
    location: "San Miguel de Tucumán",
    category: "Innovación Democrática",
    gradient: "from-brand-navy to-brand-blue",
    featured: true
  },
  {
    id: "talleres-ciudadania-activa",
    title: "Talleres de Ciudadanía Activa en toda la provincia",
    description: "José Farhat y su equipo recorren municipios tucumanos capacitando a ciudadanos en herramientas de participación y control democrático.",
    date: "10 de Abril, 2026",
    location: "Interior de Tucumán",
    category: "Capacitación Ciudadana",
    gradient: "from-brand-pink to-purple-600",
    featured: true
  },
  {
    id: "plataforma-consultas-ciudadanas",
    title: "Nueva plataforma de consultas ciudadanas",
    description: "La Secretaría presenta una innovadora herramienta digital que permite a todos los tucumanos opinar sobre proyectos de ley y políticas públicas.",
    date: "5 de Abril, 2026",
    location: "Casa de Gobierno",
    category: "Tecnología Cívica",
    gradient: "from-brand-blue to-cyan-500",
    featured: true
  },
  {
    id: "encuentro-jovenes-lideres",
    title: "Encuentro provincial de jóvenes líderes",
    description: "Más de 500 jóvenes se reunieron para debatir el futuro de la participación ciudadana juvenil en Tucumán.",
    date: "1 de Abril, 2026",
    location: "Universidad Nacional de Tucumán",
    category: "Juventud y Participación",
    gradient: "from-purple-600 to-pink-600",
    featured: false
  },
  {
    id: "presupuesto-participativo-2026",
    title: "Presupuesto participativo: la ciudadanía decide",
    description: "Los tucumanos podrán votar directamente en qué se invierten 100 millones de pesos del presupuesto provincial.",
    date: "28 de Marzo, 2026",
    location: "Toda la provincia",
    category: "Presupuesto Participativo",
    gradient: "from-green-600 to-emerald-600",
    featured: false
  },
  {
    id: "audiencias-publicas-virtuales",
    title: "Récord de participación en audiencias públicas virtuales",
    description: "Más de 10,000 ciudadanos participaron en las audiencias públicas del primer trimestre, un 300% más que el año anterior.",
    date: "20 de Marzo, 2026",
    location: "Plataforma Digital",
    category: "Participación Digital",
    gradient: "from-blue-600 to-cyan-600",
    featured: false
  }
]

const categories = [
  "Todas las categorías",
  "Innovación Democrática",
  "Capacitación Ciudadana",
  "Tecnología Cívica",
  "Juventud y Participación",
  "Presupuesto Participativo",
  "Participación Digital"
]

export default function TopicsIndexPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Filtrar temas
  const filteredTopics = allTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Todas las categorías" || 
                           topic.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredTopics = filteredTopics.filter(t => t.featured)
  const regularTopics = filteredTopics.filter(t => !t.featured)

  return (
    <>
      <Navbar />
      
      <main className="bg-white">
        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <section className="relative bg-linear-to-br from-brand-navy via-brand-blue to-purple-900 py-24 overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />

          {/* Glows decorativos */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-sm font-semibold text-white uppercase tracking-wide">
                  Actualidad
                </span>
              </div>

              {/* Título */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Temas Actuales
              </h1>

              {/* Descripción */}
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Las últimas novedades sobre participación ciudadana, democracia digital 
                y transformación democrática desde la Secretaría de Estado de Tucumán
              </p>

              {/* Buscador */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por tema, palabra clave..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-400 shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FILTROS ─────────────────────────────────────────────────────────── */}
        <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                    ${selectedCategory === category
                      ? "bg-brand-blue text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENIDO ───────────────────────────────────────────────────────── */}
        <section className="py-16 bg-linear-to-br from-slate-50 via-white to-slate-100">
          <div className="container mx-auto px-6 lg:px-16 xl:px-24">
            
            {/* Temas destacados */}
            {featuredTopics.length > 0 && (
              <div className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-display font-bold text-brand-dark mb-8 flex items-center gap-3"
                >
                  <span className="w-1 h-8 bg-linear-to-b from-brand-pink to-brand-blue rounded-full" />
                  Destacados
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredTopics.map((topic, idx) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      idx={idx}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Todos los temas */}
            {regularTopics.length > 0 && (
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-display font-bold text-brand-dark mb-8 flex items-center gap-3"
                >
                  <span className="w-1 h-8 bg-linear-to-b from-brand-navy to-brand-blue rounded-full" />
                  Todas las novedades
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularTopics.map((topic, idx) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      idx={idx + featuredTopics.length}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sin resultados */}
            {filteredTopics.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  No se encontraron resultados
                </h3>
                <p className="text-gray-600 mb-6">
                  Intentá con otros términos de búsqueda o cambiá los filtros
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("Todas las categorías")
                  }}
                  className="px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-navy transition-colors"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Componente de tarjeta reutilizable
function TopicCard({ topic, idx, hoveredCard, setHoveredCard }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
      onMouseEnter={() => setHoveredCard(idx)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Link href={`/temas/${topic.id}`} className="group block h-full">
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
          
          {/* Header con gradiente */}
          <div className={`relative h-48 bg-linear-to-br ${topic.gradient} overflow-hidden`}>
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "30px 30px"
              }}
            />
            
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: hoveredCard === idx ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-black/10"
            />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                {topic.category}
              </span>
            </div>

            {topic.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-brand-pink text-white text-xs font-semibold rounded-full">
                  ⭐ Destacado
                </span>
              </div>
            )}
          </div>

          {/* Contenido */}
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{topic.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{topic.location}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
              {topic.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {topic.description}
            </p>

            <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              <span>Leer más</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hoveredCard === idx ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${topic.gradient} origin-left`}
          />
        </div>
      </Link>
    </motion.div>
  )
}
