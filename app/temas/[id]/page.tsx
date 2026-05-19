"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Share2, GraduationCap, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Este sería el template - los datos vendrían de props o de un CMS
interface TopicPageProps {
  topic: {
    id: string
    title: string
    description: string
    date: string
    location: string
    category: string
    author: string
    content: {
      introduction: string
      sections: Array<{
        title: string
        paragraphs: string[]
      }>
      conclusion: string
    }
    relatedModules: string[] // IDs de módulos relacionados
  }
}

// Ejemplo de datos - esto vendría de tu CMS o API
const exampleTopic = {
  id: "participacion-digital-tucuman-2025",
  title: "Tucumán impulsa la participación ciudadana digital",
  description: "La Secretaría de Estado lidera la transformación democrática con nuevas herramientas de participación ciudadana en toda la provincia.",
  date: "15 de Abril, 2026",
  location: "San Miguel de Tucumán",
  category: "Innovación Democrática",
  author: "José Farhat - Secretario de Estado de Participación Ciudadana",
  content: {
    introduction: "En un hito histórico para la democracia tucumana, la Secretaría de Estado de Participación Ciudadana presenta un conjunto de herramientas digitales que revolucionarán la forma en que los ciudadanos interactúan con el gobierno provincial.",
    sections: [
      {
        title: "Una nueva era de participación",
        paragraphs: [
          "La provincia de Tucumán está dando un paso decisivo hacia la modernización de sus instituciones democráticas. Bajo el liderazgo del Secretario José Farhat, la Secretaría de Estado ha desarrollado un ecosistema digital completo que permite a cada tucumano ejercer su ciudadanía de manera activa y directa.",
          "Estas herramientas no solo facilitan el acceso a la información pública, sino que crean canales bidireccionales de comunicación entre el gobierno y la ciudadanía. Los tucumanos ahora pueden proponer iniciativas, consultar sobre políticas públicas y fiscalizar la gestión gubernamental desde sus dispositivos móviles."
        ]
      },
      {
        title: "Tecnología al servicio de la democracia",
        paragraphs: [
          "La plataforma desarrollada incluye módulos de consulta popular, seguimiento de proyectos legislativos, presupuesto participativo y audiencias públicas digitales. Todo diseñado con estándares de accesibilidad y seguridad de última generación.",
          "El sistema ya está siendo utilizado por más de 50,000 ciudadanos en su fase piloto, con una valoración promedio de 4.8 sobre 5 estrellas. Los municipios del interior de la provincia están integrando gradualmente estas herramientas en sus propias gestiones."
        ]
      },
      {
        title: "Capacitación ciudadana continua",
        paragraphs: [
          "Conscientes de que la tecnología por sí sola no garantiza la participación, la Secretaría ha diseñado un programa integral de capacitación. Talleres presenciales y digitales recorren toda la provincia, enseñando a los ciudadanos cómo utilizar estas herramientas y, más importante aún, cómo ejercer sus derechos democráticos de manera informada y efectiva.",
          "El programa 'Ciudadanía Presente' ya ha capacitado a más de 10,000 tucumanos en los primeros tres meses del año, con metas de llegar a 100,000 personas antes de fin de año."
        ]
      }
    ],
    conclusion: "Este proyecto representa un cambio de paradigma en la relación entre gobierno y ciudadanía. No se trata solo de digitalizar procesos, sino de fortalecer la democracia tucumana desde sus cimientos, empoderando a cada ciudadano con las herramientas y el conocimiento necesario para ser protagonista del futuro de su provincia."
  },
  relatedModules: ["participacion-ciudadana-basica", "herramientas-digitales", "control-democratico"]
}

export default function TopicPage() {
  const topic = exampleTopic // En producción, esto vendría de params/props

  return (
    <>
      <Navbar />
      
      <main className="bg-white">
        {/* ── HERO DEL ARTÍCULO ───────────────────────────────────────────────── */}
        <section className="relative bg-linear-to-br from-brand-navy via-brand-blue to-brand-navy py-20 overflow-hidden">
          {/* Pattern de fondo */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />

          <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/temas"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Volver a Temas Actuales</span>
              </Link>
            </motion.div>

            {/* Categoría badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                {topic.category}
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-4xl"
            >
              {topic.title}
            </motion.h1>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-white/80 mb-8"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{topic.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{topic.location}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Compartir</span>
              </button>
            </motion.div>

            {/* Autor */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-6 border-t border-white/20"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-brand-pink to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                JF
              </div>
              <div>
                <p className="text-white font-semibold">{topic.author}</p>
                <p className="text-white/60 text-sm">Secretaría de Participación Ciudadana</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTENIDO DEL ARTÍCULO ──────────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-16 xl:px-24">
            <div className="max-w-3xl mx-auto">
              
              {/* Introducción destacada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-xl leading-relaxed text-gray-700 font-medium border-l-4 border-brand-pink pl-6 italic">
                  {topic.content.introduction}
                </p>
              </motion.div>

              {/* Secciones de contenido */}
              {topic.content.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg text-gray-600 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              ))}

              {/* Conclusión */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-linear-to-b from-brand-blue to-brand-pink rounded-full" />
                    Conclusión
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {topic.content.conclusion}
                  </p>
                </div>
              </motion.div>

              {/* ── CALL TO ACTION: MÓDULO DE CAPACITACIÓN ──────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative bg-linear-to-br from-brand-navy via-brand-blue to-purple-900 rounded-3xl p-10 overflow-hidden shadow-2xl">
                  {/* Pattern decorativo */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "30px 30px"
                    }}
                  />

                  {/* Glow decorativo */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

                  <div className="relative z-10 text-center">
                    {/* Icono */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    {/* Título */}
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      ¿Querés aprender más?
                    </h3>

                    {/* Descripción */}
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Accedé a nuestros módulos de capacitación gratuitos y convertite en un ciudadano activo e informado. 
                      Aprendé a usar las herramientas de participación y control democrático.
                    </p>

                    {/* Botón CTA */}
                    <Link
                      href="/capacitacion/modulos"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-navy font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
                    >
                      <GraduationCap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Ir a Módulos de Capacitación</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>

                    {/* Info adicional */}
                    <p className="text-white/60 text-sm mt-6">
                      🎓 Certificación gratuita al completar los módulos
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── ARTÍCULOS RELACIONADOS (OPCIONAL) ───────────────────────────────── */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-16 xl:px-24">
            <h3 className="text-3xl font-display font-bold text-brand-dark mb-8 text-center">
              También te puede interesar
            </h3>
            <div className="text-center text-gray-500">
              {/* Aquí irían más artículos relacionados */}
              <p className="text-sm">Más artículos próximamente...</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
