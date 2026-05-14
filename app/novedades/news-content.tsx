"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Newspaper, ChevronDown } from "lucide-react"

const newsItems = [
  // 2026
  {
    category: "Articulación Institucional",
    title: "Trabajo conjunto con Educación",
    excerpt: "Articulación con el área de Educación para potenciar la formación ciudadana y el trabajo territorial en las escuelas tucumanas.",
    image: "/img/noti/JF-convenio-educacion.jpeg",
    href: "https://www.facebook.com/photo/?fbid=1359594199530967&set=a.313637034126694",
    date: "2026",
  },
  {
    category: "Ciudadanía Digital",
    title: "Agenda 2026 en prevención digital",
    excerpt: "Definición de la agenda de trabajo para el año en materia de ciudadanía digital, con foco en la prevención y la educación en entornos digitales.",
    image: "/img/noti/agenda-digital-2026.jpg",
    href: "https://www.facebook.com/photo/?fbid=1352328820257505",
    date: "2026",
  },
  {
    category: "Innovación Pública",
    title: "Planificación estratégica con el IDEP",
    excerpt: "Reunión de planificación con el Instituto de Desarrollo Público para alinear iniciativas de innovación y participación ciudadana.",
    image: "/img/noti/jf-idep-feb.jpg",
    href: "https://www.facebook.com/photo/?fbid=1346997967457257",
    date: "2026",
  },
  // 2023
  {
    category: "Ciudadanía Digital",
    title: "Disertación en +Digital. Villa María, Córdoba.",
    excerpt: "Participación en la jornada digital que reunió municipios de todo el país.",
    image: "/img/noti/+Digital.webp",
    href: "https://www.eldiariocba.com.ar/locales/2023/7/5/videos-se-realiza-en-villa-maria-la-jornada-digital-que-reune-municipios-del-pais-99081.html",
    date: "2023",
  },
  {
    category: "Articulación",
    title: "Articulación con la Policía de Tucumán, Participación Ciudadana y la UTN",
    excerpt: "Coordinación de acciones preventivas entre fuerzas de seguridad, secretaría y la Universidad Tecnológica Nacional.",
    image: "/img/noti/reu-1.webp",
    href: "https://www.comunicaciontucuman.gob.ar/noticia/seguridad/220413/policia-participacion-ciudadana-utn-coordinan-acciones-preventivas",
    date: "2023",
  },
  {
    category: "Entrevista",
    title: "Con Mucho Picante — Escuela de Ciudadanía Itinerante",
    excerpt: "Entrevista sobre la Escuela de Ciudadanía Itinerante y su impacto en el territorio tucumano.",
    image: "/img/noti/cmp.webp",
    href: "https://www.youtube.com/watch?v=laXg1IKrXpo",
    date: "2023",
  },
  {
    category: "Participación Ciudadana",
    title: "Ecos del Primer Congreso Internacional de Participación Ciudadana y Descentralización",
    excerpt: "Experiencias y reflexiones del primer congreso internacional que reunió actores de distintas ciudades del mundo.",
    image: "/img/noti/cord.webp",
    href: "https://utopiaurbana.city/2023/06/06/ecos-del-primer-congreso-internacional-de-participacion-ciudadana-y-descentralizacion/",
    date: "2023",
  },
  {
    category: "Prevención",
    title: "¿Cómo accionar ante una estafa digital por celular?",
    excerpt: "Consejos y herramientas para identificar y actuar frente a estafas digitales a través del celular.",
    image: "/img/noti/todo-pasa.webp",
    href: "https://www.youtube.com/watch?v=bp8w5Ha-ZHY&t=59s",
    date: "2023",
  },
  {
    category: "Trabajo Articulado",
    title: "Escuela de Ciudadanía ampliará su alcance territorial en la provincia",
    excerpt: "La Secretaría de Participación Ciudadana ampliará su alcance territorial en diferentes puntos de Tucumán.",
    image: "/img/noti/tuc-despierta.webp",
    href: "https://tucumandespierta.com/la-secretaria-de-participacion-ciudadana-ampliara-su-alcance-territorial/",
    date: "2023",
  },
  {
    category: "Innovación",
    title: "Participación en Smart City",
    excerpt: "Smart City convoca a oradores prestigiosos de Iberoamérica y Estados Unidos. En esta oportunidad en Santiago del Estero.",
    image: "/img/noti/smartcity.webp",
    href: "https://m.facebook.com/story.php?story_fbid=pfbid02AjtoSBNi1RKNGzX8TvhhNWgzQmZu9p2bToqfk2ESxrHpzxgmh2DB1e6VnuKYgPy6l&id=100037322304229&mibextid=Nif5oz",
    date: "2023",
  },
  {
    category: "Disertación Internacional",
    title: "Disertación en Mérida, Yucatán, México",
    excerpt: "José Farhat disertó en el panel 'Enfoques sistémicos para abordar la gestión de servicios de atención social'.",
    image: "/img/noti/mex.webp",
    href: "https://m.facebook.com/story.php?story_fbid=pfbid022EFgiUcydGvASSV8GDVEx5mSHGhmrDJnNNT5Vfxk3eJosUhLZkpiEfGKRkzhJE9el&id=100037322304229&mibextid=Nif5oz",
    date: "2023",
  },
  {
    category: "Escuela de Ciudadanía",
    title: "Conferencia en el IV Congreso de Mediadores",
    excerpt: "Referencia a la Escuela de Ciudadanía y a la Mediación Comunitaria en los territorios.",
    image: "/img/noti/noti5.png",
    href: "https://www.facebook.com/congresoamericanodemediacion/videos/1177903636086423",
    date: "2023",
  },
  {
    category: "Participación Ciudadana",
    title: "Congreso Internacional de Participación Ciudadana y Descentralización",
    excerpt: "Experiencias y prácticas a nivel nacional e internacional ejecutadas por distintas ciudades y municipalidades.",
    image: "/img/noti/cordoba.webp",
    href: "https://www.youtube.com/live/7XcMEWAIG-g?feature=share&t=22656",
    date: "2023",
  },
  {
    category: "Política",
    title: "Conversatorio «Cultura de Paz, Paz Transformadora y Participación Ciudadana»",
    excerpt: "Diálogo sobre los vínculos entre cultura de paz y participación ciudadana activa.",
    image: "/img/noti/hurtado.webp",
    href: "https://www.youtube.com/live/ay3LkyQYZVE?feature=share&t=2142",
    date: "2023",
  },
  {
    category: "Ciudadanía Digital",
    title: "Buscan fortalecer a niños, niñas y adolescentes frente al uso de la tecnología",
    excerpt: "José Farhat junto al director de Asuntos Públicos de TikTok Latinoamérica brindaron una capacitación en entornos digitales.",
    image: "/img/noti/noti-tiktok.jpg",
    href: "https://www.comunicaciontucuman.gob.ar/noticia/seguridad/219269/buscan-fortalecer-ninos-ninas-adolescentes-frente-al-uso-tecnologia",
    date: "2023",
  },
  {
    category: "Entrevista",
    title: "Cohesión social",
    excerpt: "El concepto de 'Ciudad Inteligente' y la participación ciudadana como forma de intervenir en los procesos sociales.",
    image: "/img/noti/pto-de-partida.jpg",
    href: "https://youtu.be/Te4whF-XqJA",
    date: "2023",
  },
  {
    category: "Prevención",
    title: "Capacitación para más de 200 estudiantes",
    excerpt: "En el Instituto JIM se capacitó sobre ciberbullying, sexting y grooming, con matrices de prevención y factores protectores.",
    image: "/img/noti/jf-jim.jpg",
    href: "https://m.facebook.com/story.php?story_fbid=pfbid02SY2EfqkhR7s2t4TBGpQ4Pfw1DurgFGVh9QRFgXrzJJVCP9h19wbSHFDbAdmf62mjl&id=100064412002737&mibextid=Nif5oz",
    date: "2023",
  },
  {
    category: "Innovación",
    title: "Laboratorio de Innovación Pública en la Honorable Legislatura de Tucumán",
    excerpt: "Capacitación a más de 200 estudiantes en prevención de conductas de riesgo y ciberdelitos en entornos digitales.",
    image: "/img/noti/jf-legislatura.jfif",
    href: "https://www.legislaturadetucuman.gob.ar/noticias.php?txtasunto=2469522",
    date: "2023",
  },
  {
    category: "Tecnología",
    title: "Entrevista en La 97.1 Radio Tucumán",
    excerpt: "\"Tenemos que llevar la innovación a la Legislatura. Ha llegado el momento de tener habilidades híbridas en el territorio físico y digital.\"",
    image: "/img/noti/rad_971.webp",
    href: "https://fb.watch/kpZmY1gs-K/",
    date: "2023",
  },
  {
    category: "Ciudadanía Presente",
    title: "Iniciativa Gana Tucumán",
    excerpt: "Herramienta para ejercitar la ciudadanía, enrobustecer la democracia y contribuir con una estrategia de co-gestión.",
    image: "/img/noti/medium-4.jpg",
    href: "https://medium.com/@josenestorfarhat/gana-tucum%C3%A1n-por-jos%C3%A9-farhat-2d901a144cbf",
    date: "2023",
  },
  // 2022
  {
    category: "Reconocimiento",
    title: "Programa Seguridad Inteligente galardonado en el Concurso Gobernarte del BID",
    excerpt: "VIII Edición del Concurso Gobernarte: El Arte del Buen Gobierno — Premio Eduardo Valenti 2022, organizado por el BID.",
    image: "/img/noti/bid.png",
    href: "https://blogs.iadb.org/seguridad-ciudadana/es/la-trata-de-personas-en-america-latina-y-el-caribe-respuestas-multisectoriales-a-un-delito-complejo/",
    date: "2022",
  },
  {
    category: "Gobierno Abierto",
    title: "\"Ciudadanía Presente, soy un hombre de la democracia\"",
    excerpt: "Ser ciudadano se traduce en poseer un sentimiento de pertenencia a una comunidad, con derechos, obligaciones, identidad y cultura.",
    image: "/img/noti/medium-1.png",
    href: "https://medium.com/@josenestorfarhat/ciudadan%C3%ADa-presente-soy-un-hombre-de-la-democracia-jos%C3%A9-farhat-7eb8aed10c1f",
    date: "2022",
  },
  {
    category: "Gobierno Abierto",
    title: "Tucumán: Participación Ciudadana como respuesta a las problemáticas sociales",
    excerpt: "José Farhat detalló cómo articulan distintos saberes para que los ciudadanos formen parte de la creación de políticas públicas.",
    image: "/img/noti/noti8.png",
    href: "https://utopiaurbana.city/2022/08/06/tucuman-participacion-ciudadana-como-respuesta-a-las-problematicas-sociales/",
    date: "2022",
  },
  {
    category: "Vínculo",
    title: "\"Tucumán en Red\" busca prevenir la violencia familiar y los delitos virtuales",
    excerpt: "\"Buscamos estrechar lazos con los vecinos para detectar potenciales situaciones de violencia familiar y virtual.\"",
    image: "/img/noti/noti7.png",
    href: "https://www.lagaceta.com.ar/nota/949845/seguridad/tucuman-red-busca-prevenir-violencia-familiar-delitos-virtuales.html",
    date: "2022",
  },
  {
    category: "Prevención",
    title: "Hot Sale: ¿Cómo evitar estafas digitales?",
    excerpt: "\"Son tiempos en los cuales tenemos que adelantarnos a la oferta y conocer los precios para no caer en engaños.\"",
    image: "/img/noti/noti1.png",
    href: "https://lacritica.com.ar/2022/05/20/hot-sale-como-evitar-estafas-digitales/",
    date: "2022",
  },
  {
    category: "Trabajo Articulado",
    title: "Lules y Seguridad trabajan en la prevención de violencia y ciberbullying",
    excerpt: "Implementación de programas de prevención de delitos como la violencia de género, el ciberbullying y el grooming.",
    image: "/img/noti/noti2.png",
    href: "https://www.comunicaciontucuman.gob.ar/noticia/seguridad/209770/lules-seguridad-trabajan-prevencion-violencia-ciberbullying",
    date: "2022",
  },
  {
    category: "Capacitación",
    title: "José Farhat capacita a equipos técnicos y territoriales de Tafí Viejo",
    excerpt: "Jornada \"Cultura Colaborativa en prevención Comunitaria\" con más de 70 participantes en la Casa de la Cultura.",
    image: "/img/noti/noti3.png",
    href: "https://www.tafiviejo.gob.ar/noticia/interes-general/125723/fomentan-cercania-entre-estado-vecinos",
    date: "2022",
  },
  {
    category: "Prevención",
    title: "Peligro en las redes: ciberdelito, grooming y cómo prevenirlos",
    excerpt: "En Canal 10 Tucumán, compartiendo con la audiencia cómo prevenir ciberdelitos en entornos digitales y dónde acudir.",
    image: "/img/noti/noti4.png",
    href: "https://youtu.be/E1y0Kux9D_s",
    date: "2022",
  },
  {
    category: "Participación Ciudadana",
    title: "Ciclo de Formación y Capacitación Profesional destinado a la Fuerza Policial",
    excerpt: "Conceptos y enfoques desde el paradigma de la Seguridad: Nacional, Pública, Comunitaria y Ciudadana.",
    image: "/img/noti/noti6.png",
    href: "https://www.instagram.com/p/CeGWlWqLKvI/",
    date: "2022",
  },
  // Videos
  {
    category: "Internacional",
    title: "Conversatorio RAGA: Jóvenes y crisis de la democracia",
    excerpt: "Reflexiones sobre juventudes, participación y transformación digital en el escenario global.",
    image: "https://img.youtube.com/vi/u_up6zCGoT8/hqdefault.jpg",
    href: "https://www.youtube.com/live/u_up6zCGoT8?si=oZ3iAFsnyhToOT1S&t=1004",
    date: "2025",
  },
  {
    category: "Gobierno Abierto",
    title: "Webinar internacional con enfoque territorial desde Perú",
    excerpt: "Participación como expositor en el webinar 'Gobierno Abierto con Sello Territorial', organizado desde Perú.",
    image: "https://img.youtube.com/vi/I1f_cXrxXic/maxresdefault.jpg",
    href: "https://youtu.be/I1f_cXrxXic?si=1pmf1q8bjJnRbXdm&t=407",
    date: "2025",
  },
  {
    category: "Premio OIDP",
    title: "Reconocimiento en la 24° Conferencia — Escuela de Ciudadanía",
    excerpt: "La iniciativa 'Escuela de Ciudadanía' fue destacada como política pública innovadora que promueve la participación democrática.",
    image: "https://img.youtube.com/vi/kW74SCr3DkI/maxresdefault.jpg",
    href: "https://www.youtube.com/live/kW74SCr3DkI?si=IJiDPUd7Awy5DpjB&t=2666",
    date: "2024",
  },
  {
    category: "Ciberseguridad",
    title: "Jornada provincial — 300 personas, un cambio de chip necesario",
    excerpt: "José Farhat disertó para 300 personas en la Jornada provincial de ciberseguridad 2024.",
    image: "https://img.youtube.com/vi/4BIwdpiFoso/maxresdefault.jpg",
    href: "https://www.youtube.com/live/4BIwdpiFoso?si=VTdKwtRe3CgCJ7pX&t=151",
    date: "2024",
  },
]

const INITIAL_COUNT = 9

export function NewsContent() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [featured, ...rest] = newsItems
  const visibleRest = rest.slice(0, visibleCount - 1)
  const hasMore = visibleCount - 1 < rest.length

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-brand-dark via-[#002444] to-[#003a60] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-pink/15 rounded-full blur-[80px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/20 text-brand-pink text-sm font-medium rounded-full mb-6 border border-brand-pink/20">
              <Newspaper className="w-4 h-4" />
              Novedades
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Lo que tenés que <span className="text-brand-pink">saber</span>
            </h1>
            <p className="text-xl text-white/60">
              Noticias, entrevistas y participaciones de José Farhat en medios y eventos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-light-blue">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 group relative"
          >
            <div className="absolute -inset-px rounded-[1.5rem] bg-gradient-to-br from-brand-blue/40 to-brand-pink/30 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
            <Link
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col lg:flex-row h-full bg-white rounded-[1.5rem] overflow-hidden border border-brand-navy/10 group-hover:border-transparent group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-brand-navy/15 transition-all duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-pink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              {/* Image */}
              <div className="relative lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[340px] overflow-hidden flex-shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:to-white/50" />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-xs font-bold rounded-full uppercase tracking-widest">
                    {featured.category}
                  </span>
                  <span className="text-xs text-brand-navy/40 font-medium">{featured.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy font-display leading-snug mb-4 group-hover:text-brand-pink transition-colors duration-300">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="text-brand-navy/65 leading-relaxed mb-6">{featured.excerpt}</p>
                )}
                <span className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:text-brand-pink transition-colors duration-300">
                  Ver más
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleRest.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-brand-blue/30 to-brand-pink/30 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
                <Link
                  href={news.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col h-full bg-white rounded-[1.25rem] overflow-hidden border border-brand-navy/10 group-hover:border-transparent group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-navy/15 transition-all duration-400"
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-pink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-navy/10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 group-hover:bg-brand-pink group-hover:border-brand-pink transition-all duration-400">
                      <ArrowUpRight className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest truncate">
                        {news.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-brand-navy/20 flex-shrink-0" />
                      <span className="text-[11px] text-brand-navy/45 font-medium flex-shrink-0">{news.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-brand-navy font-display leading-snug mb-3 group-hover:text-brand-pink transition-colors duration-300 line-clamp-3 flex-1">
                      {news.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-pink transition-colors duration-300">
                      Ver más
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setVisibleCount((c) => c + 9)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-pink transition-all duration-300 hover:shadow-xl hover:shadow-brand-pink/25 hover:-translate-y-0.5"
              >
                Cargar más noticias
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </>
  )
}
