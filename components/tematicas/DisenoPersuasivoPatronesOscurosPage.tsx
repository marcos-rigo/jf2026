'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUp,
  Award,
  Ban,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Compass,
  DatabaseZap,
  DoorClosed,
  Eye,
  ExternalLink,
  FileText,
  Filter,
  FolderLock,
  Gavel,
  Heart,
  HelpCircle,
  Images,
  Landmark,
  MousePointerClick,
  PauseCircle,
  Quote,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'
import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Color Tokens for Diseño Persuasivo y Patrones Oscuros ───
const ROSE = '#DB2777'
const ROSE_TEXT = '#9D174D'
const AMBER = '#EA580C'
const AMBER_TEXT = '#9A3412'
const VIOLET = '#9333EA'
const VIOLET_TEXT = '#6D28D9'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --dp-rose: #DB2777;
    --dp-rose-glow: rgba(219, 39, 119, 0.4);
    --dp-amber: #EA580C;
    --dp-amber-glow: rgba(234, 88, 12, 0.4);
    --dp-violet: #9333EA;
    --dp-violet-glow: rgba(147, 51, 234, 0.4);
    --dp-dark: #170a12;
  }

  .dp-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .dp-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .dp-editorial-wrap-right {
      float: right;
      margin-left: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
    .dp-editorial-wrap-left {
      float: left;
      margin-right: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
  }

  @keyframes dpFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(35px, -45px) scale(1.08); }
    75% { transform: translate(-25px, 25px) scale(0.96); }
  }
  @keyframes dpFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    35% { transform: translate(-45px, -30px) scale(1.12); }
    70% { transform: translate(30px, 35px) scale(0.94); }
  }

  .dp-cyber-badge {
    background: linear-gradient(135deg, rgba(219, 39, 119, 0.1), rgba(234, 88, 12, 0.12));
    border: 1px solid rgba(219, 39, 119, 0.3);
    color: #9D174D;
  }
  .dp-cyber-card {
    border-radius: 28px;
    border: 2px solid rgba(219, 39, 119, 0.18);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px -10px rgba(219, 39, 119, 0.08);
  }
  .dp-cyber-card:hover {
    border-color: rgba(219, 39, 119, 0.45);
    box-shadow: 0 20px 40px -15px rgba(219, 39, 119, 0.18);
    transform: translateY(-3px);
  }
  .dp-cyber-btn {
    background: linear-gradient(135deg, #DB2777, #EA580C);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(219, 39, 119, 0.4);
    transition: all 0.25s ease;
  }
  .dp-cyber-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(219, 39, 119, 0.55);
  }
  .dp-cyber-btn-outline {
    border: 2px solid rgba(219, 39, 119, 0.4);
    color: #9D174D;
    background: transparent;
    transition: all 0.25s ease;
  }
  .dp-cyber-btn-outline:hover {
    background: rgba(219, 39, 119, 0.06);
    transform: translateY(-2px);
  }
`

const ACADEMIC_CITATIONS = [
  {
    author: 'BJ Fogg (2009–2020)',
    title: 'The Fogg Behavior Model (B = MAP) (El modelo de comportamiento de Fogg)',
    publication: 'Behavior Design Lab, Stanford University',
    url: 'https://www.behaviormodel.org/',
    topic: 'Motivación, capacidad y disparador como condición del comportamiento',
    stat: 'Modelo citado en más de 1.900 publicaciones académicas',
  },
  {
    author: 'Harry Brignull (2010–2023)',
    title: 'Deceptive Patterns (ex-Dark Patterns) (Patrones engañosos, antes "patrones oscuros")',
    publication: 'deceptive.design — Iniciativa de Patrones Engañosos',
    url: 'https://deceptive.design/about-us/dr-harry-brignull/',
    topic: 'Taxonomía de diseños que llevan a hacer algo no deseado',
    stat: 'Vocabulario adoptado por la Digital Services Act y la CPRA',
  },
  {
    author: 'Federal Trade Commission (FTC, 2023)',
    title: 'FTC Finalizes Order Requiring Fortnite Maker Epic Games to Pay $245 Million (La FTC finaliza la orden que obliga a Epic Games, creadora de Fortnite, a pagar 245 millones de dólares)',
    publication: 'Comisión Federal de Comercio de EE.UU. (FTC Official Release)',
    url: 'https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making',
    topic: 'Caso Epic Games / Fortnite: cargos no deseados mediante patrones oscuros',
    stat: 'Reembolso oficial de $245.000.000 USD a usuarios afectados',
  },
  {
    author: 'Daniel Kahneman (2011)',
    title: 'Thinking, Fast and Slow (Pensar rápido, pensar despacio)',
    publication: 'Farrar, Straus and Giroux',
    url: 'https://us.macmillan.com/books/9780374533557/thinkingfastandslow/',
    topic: 'Sistema 1 y Sistema 2: decisiones automáticas bajo fatiga o presión',
    stat: 'Marco teórico central sobre atajos cognitivos y sesgos',
  },
  {
    author: 'Edward Deci & Richard Ryan',
    title: 'Self-Determination Theory (Teoría de la autodeterminación)',
    publication: 'Self-Determination Theory International',
    url: 'https://selfdeterminationtheory.org/',
    topic: 'Autonomía como necesidad psicológica básica frente al control externo',
    stat: 'Teoría base para distinguir diseño que apoya de diseño que controla',
  },
  {
    author: 'Lawrence Lessig (1999–2006)',
    title: '"Code is Law" — Code and Other Laws of Cyberspace ("El código es ley" — El código y otras leyes del ciberespacio)',
    publication: 'Harvard Magazine / Harvard Law School',
    url: 'https://harvardmagazine.com/2000/01/code-is-law-html',
    topic: 'El código como regulador invisible: la arquitectura digital legisla sin necesidad de prohibiciones explícitas',
    stat: 'Marco fundacional del derecho digital y la gobernanza tecnológica',
  },
  {
    author: 'Richard Thaler & Cass Sunstein (2008)',
    title: 'Nudge: Choice Architecture (Nudge: arquitectura de elección)',
    publication: 'Yale University Press',
    url: 'https://en.wikipedia.org/wiki/Nudge_theory',
    topic: 'La "arquitectura de la elección": cómo el diseño de las opciones orienta la decisión sin obligarla',
    stat: 'Premio Nobel de Economía 2017 (Richard Thaler)',
  },
  {
    author: 'European Data Protection Board (2022)',
    title: 'Guidelines 3/2022 on Dark Patterns in Social Media Platform Interfaces (Directrices 3/2022 sobre patrones oscuros en interfaces de redes sociales)',
    publication: 'Comité Europeo de Protección de Datos (EDPB)',
    url: 'https://www.edpb.europa.eu/system/files/2022-03/edpb_03-2022_guidelines_on_dark_patterns_in_social_media_platform_interfaces_en.pdf',
    topic: 'Catálogo oficial europeo de patrones oscuros en redes sociales, con criterios de evaluación',
    stat: 'Documento base para la aplicación del RGPD frente a interfaces manipuladoras',
  },
  {
    author: 'Wikipedia (edición verificada)',
    title: 'Dark Pattern — Taxonomía, Historia y Legislación',
    publication: 'Wikipedia, la enciclopedia libre',
    url: 'https://en.wikipedia.org/wiki/Dark_pattern',
    topic: 'Panorama general y cronología del concepto, con referencias cruzadas a la legislación vigente',
    stat: 'Punto de partida para rastrear fuentes primarias sobre cada patrón',
  },
  {
    author: 'Carolina Albanese (2025)',
    title: 'Hiperpersonalización en Moda Digital y Patrones Oscuros',
    publication: 'SciELO Argentina',
    url: 'https://www.scielo.org.ar/pdf/ccedce/n257/1853-3523-ccedce-257-181.pdf',
    topic: 'Cómo la captura de datos para personalizar ofertas de moda explota la presión social por pertenencia',
    stat: '23,2 millones de compradores online en Argentina (Kantar)',
  },
  {
    author: 'Ruohonen et al. (2025)',
    title: 'Ethical Issues in Dark Patterns Research (Cuestiones éticas en la investigación sobre patrones oscuros)',
    publication: 'arXiv (preprint académico revisable)',
    url: 'https://arxiv.org/abs/2503.02981',
    topic: 'Evaluación ética trimembre (deontología, utilitarismo, ética de la virtud) aplicada al diseño de software',
    stat: 'Marco de análisis usado en esta clase para juzgar interfaces',
  },
  {
    author: 'Belén Giménez / TEDIC Paraguay',
    title: 'Patrones Oscuros de Diseño',
    publication: 'TEDIC — Tecnología y Comunidad (Paraguay)',
    url: 'https://www.tedic.org/patrones-oscuros-de-diseno/',
    topic: 'Mirada regional latinoamericana sobre mecánicas de persuasión y manipulación digital',
    stat: 'Organización de la sociedad civil que audita interfaces en la región',
  },
  {
    author: 'ACM & IEEE',
    title: 'Códigos de Conducta Profesional en Ingeniería de Software',
    publication: 'Association for Computing Machinery / Institute of Electrical and Electronics Engineers',
    url: 'https://www.acm.org/code-of-ethics',
    topic: 'Estándares de ética profesional que un ingeniero virtuoso debería seguir al diseñar interfaces',
    stat: 'Referencia normativa para la ética de la virtud en ingeniería',
  },
]

const SECTION_VISUALS: { imageSrc: string; icon: LucideIcon; label: string; source: string; sourceUrl: string }[] = [
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/mecanismo_neutral.webp', icon: Scale, label: 'Ni Bueno ni Malo', source: 'BJ Fogg', sourceUrl: 'https://www.behaviormodel.org/' },
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/linea_manipulacion.webp', icon: AlertTriangle, label: 'Cuándo se Pasa de la Raya', source: 'Harry Brignull', sourceUrl: 'https://deceptive.design/about-us/dr-harry-brignull/' },
  { imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/por_que_funciona.webp', icon: Brain, label: 'Por Qué Funcionan', source: 'Daniel Kahneman (2011)', sourceUrl: 'https://us.macmillan.com/books/9780374533557/thinkingfastandslow/' },
]

// ─── Franja de datos duros (estudio Comisión Europea 2022, FTC, Kühling & Sauerborn 2024) ───
const KEY_STATS = [
  { value: '97%', label: 'Apps de la UE con al menos un patrón oscuro', source: 'Comisión Europea, 2022' },
  { value: '$245M', label: 'Multa de la FTC (agencia de comercio de EE.UU.) a Epic Games / Fortnite', source: 'FTC, 2023' },
  { value: '244 h', label: 'Lectura anual de políticas de privacidad que le exigiríamos a un usuario promedio', source: 'Estudio citado en Perception Lab' },
  { value: '40%', label: 'E-commerce europeo con prácticas de diseño engañoso', source: 'Kühling & Sauerborn, 2024' },
]

// ─── Taxonomía de patrones oscuros: mecánica de engaño + caso real + base legal ───
type PatternCategory = 'dinero' | 'datos' | 'tiempo'
const PATTERN_CATEGORY_LABEL: Record<PatternCategory, string> = {
  dinero: '💰 Dinero',
  datos: '🛡️ Datos personales',
  tiempo: '⏳ Tiempo / Atención',
}
const DARK_PATTERNS_TAXONOMY: {
  title: string
  category: PatternCategory
  mechanic: string
  impact: string
  realCase: string
  legal: string
}[] = [
  {
    title: 'Privacy Zuckering (configuración de privacidad deliberadamente confusa)',
    category: 'datos',
    mechanic: 'Ocultación de controles de privacidad o flujos laberínticos para extraer más datos de los necesarios. Es la antítesis del principio Privacy by Default.',
    impact: 'Pérdida de soberanía sobre la información personal y exposición a perfilados predictivos.',
    realCase: 'Meta y LinkedIn (2024): uso predeterminado de publicaciones para entrenar modelos de IA generativa, con formularios de baja ocultos.',
    legal: 'Sancionado por el RGPD (art. 5) y la CCPA de California.',
  },
  {
    title: 'Roach Motel (motel de cucarachas: fácil entrar, difícil salir)',
    category: 'tiempo',
    mechanic: 'Diseño que facilita enormemente la entrada (un clic para suscribirse) pero impone barreras extremas para la salida (varios pasos o una llamada telefónica para cancelar).',
    impact: 'Carga cognitiva, pérdida de tiempo y mantenimiento forzoso de costos recurrentes.',
    realCase: 'Servicios de suscripción de noticias y Amazon Prime, investigados por la FTC.',
    legal: 'Prohibido por la norma "Click-to-Cancel" de la FTC y el artículo 25 de la DSA.',
  },
  {
    title: 'Drip Pricing (precio por goteo)',
    category: 'dinero',
    mechanic: 'Fragmentación del precio: se anuncia una base baja y se añaden cargos obligatorios recién en los pasos finales de la compra.',
    impact: 'Incapacidad de comparar ofertas de forma justa; el usuario paga más por el tiempo ya invertido.',
    realCase: 'Endémico en ticketing, alquiler de autos y aerolíneas low-cost.',
    legal: 'Sancionado por la Directiva de Prácticas Comerciales Desleales (UCPD) de la UE.',
  },
  {
    title: 'False Urgency (falsa urgencia)',
    category: 'tiempo',
    mechanic: 'Temporizadores de cuenta regresiva que se reinician al recargar la página, o alertas de stock artificiales ("solo queda 1").',
    impact: 'Presión psicológica que induce compras impulsivas bajo estrés emocional, sin agregar información real.',
    realCase: 'Booking.com y Trivago (multa de US$44,7 millones en Australia), tiendas de moda rápida.',
    legal: 'Clasificado como engaño por la Comisión Europea y organismos de defensa del consumidor.',
  },
  {
    title: 'Confirmshaming (vergüenza por rechazar)',
    category: 'tiempo',
    mechanic: 'Redacción manipuladora de la opción de rechazo, diseñada para inducir culpa ("No, prefiero pagar el precio completo").',
    impact: 'Daño a la autonomía emocional y degradación de la confianza en la marca.',
    realCase: 'Banners emergentes de e-commerce y boletines informativos en toda la industria.',
    legal: 'Evaluado como práctica comercial desleal por la UCPD y las guías del EDPB.',
  },
  {
    title: 'Bait-and-switch (anzuelo y cambio)',
    category: 'dinero',
    mechanic: 'Publicidad de un servicio gratuito o económico que, tras captar el interés, es sustituido por una opción más cara o de menor calidad.',
    impact: 'Frustración de la expectativa de compra y gastos no planificados.',
    realCase: 'Ofertas de "prueba gratuita" que derivan en planes premium preseleccionados.',
    legal: 'Perseguible como publicidad engañosa bajo la Ley 24.240 en Argentina.',
  },
  {
    title: 'Misdirection (desvío de atención)',
    category: 'datos',
    mechanic: 'Uso de jerarquía visual y dobles negativas ("en ningún caso no vender mis datos") para dirigir la vista hacia el botón que beneficia a la empresa.',
    impact: 'Aceptación involuntaria de términos o instalación de software ajeno al propósito inicial.',
    realCase: 'Instaladores de software con casillas adicionales premarcadas, disfrazadas de "recomendado".',
    legal: 'Contrario al principio de consentimiento informado del RGPD.',
  },
  {
    title: 'Cobros inadvertidos en juegos',
    category: 'dinero',
    mechanic: 'Configuración confusa de botones donde un toque accidental durante una pantalla de carga ejecuta una compra inmediata, sin pantalla de confirmación.',
    impact: 'Cargos no deseados, frecuentemente a menores de edad, sin que medie una decisión consciente.',
    realCase: 'Epic Games / Fortnite: 245 millones de dólares en reembolsos ordenados por la FTC en 2022.',
    legal: 'Violación de la COPPA y de la Sección 5 de la Ley de la FTC en Estados Unidos.',
  },
]

// ─── Casos adicionales (más allá de Epic Games, ya cubierto por data.caseStudy) ───
const EXTRA_CASE_STUDIES: { label: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    label: 'El laberinto del consentimiento',
    title: 'Meta y el entrenamiento de sus modelos de IA',
    description:
      'La denuncia de la organización NOYB expuso un proceso de exclusión (opt-out) deliberadamente obstructivo para entrenar modelos de IA con datos de usuarios de Instagram y Facebook. Lo más grave: Meta admitió que no podía garantizar la exclusión total de los datos incluso si el usuario completaba el tortuoso proceso de baja — un quiebre total de la transparencia.',
    icon: DatabaseZap,
  },
  {
    label: 'Un dilema en el ámbito laboral',
    title: 'Entrenar IA de "concientización" con correos de empleados',
    description:
      'Un escenario crítico ya analizado por especialistas: usar modelos de lenguaje entrenados con correos reales de empleados para simular campañas de phishing "educativas". Aunque el fin declarado sea la seguridad, usar datos personales sin transparencia en una relación de poder asimétrica (empleador-empleado) viola los principios de lealtad y consentimiento informado — y trata al trabajador como sujeto de experimentación.',
    icon: Eye,
  },
]

// ─── Evaluación ética trimembre (Ruohonen et al., 2025) ───
const ETHICS_LENSES: { name: string; icon: LucideIcon; color: string; textColor: string; description: string }[] = [
  {
    name: 'Deontología: el deber y la regla del consentimiento',
    icon: Gavel,
    color: ROSE,
    textColor: ROSE_TEXT,
    description:
      'Bajo una visión deontológica moderada de "reglas con consecuencias", la ética se define por el respeto a los derechos universales y la autonomía. Un diseño solo es moral si cumple el axioma: "tratá a los demás únicamente respecto de aquello a lo que han consentido". Los patrones oscuros fallan en este filtro al tratar al usuario como un mero recurso para fines comerciales.',
  },
  {
    name: 'Utilitarismo: el balance del bienestar social',
    icon: Scale,
    color: AMBER,
    textColor: AMBER_TEXT,
    description:
      'Esta lente evalúa las consecuencias para la mayoría. Una empresa puede obtener ingresos a corto plazo, pero el análisis utilitario global revela un daño neto: erosión de la confianza sistémica en el mercado, perjuicio económico individual y fomento de la adicción digital. El beneficio privado no compensa la degradación del bienestar social y la salud mental colectiva.',
  },
  {
    name: 'Ética de la virtud: la integridad del diseñador',
    icon: Heart,
    color: VIOLET,
    textColor: VIOLET_TEXT,
    description:
      'Cuestiona el carácter moral de los profesionales involucrados. Siguiendo los códigos de conducta de la ACM y el IEEE, un ingeniero virtuoso debe rechazar la creación de herramientas que exploten la debilidad humana. Diseñar patrones engañosos no es solo una falta técnica: es una degradación de la excelencia profesional y de la honestidad que debe regir la ingeniería.',
  },
]

// ─── Marco regulatorio global: UE, EE. UU. y LatAm/Argentina ───
const REGULATORY_REGIONS: { region: string; icon: LucideIcon; accent: string; laws: { name: string; description: string }[] }[] = [
  {
    region: 'Unión Europea',
    icon: Landmark,
    accent: '#38BDF8',
    laws: [
      { name: 'Ley de Servicios Digitales (DSA), Art. 25(1)', description: 'El hito regulatorio más audaz: prohíbe explícitamente el diseño y la organización de interfaces que engañen, manipulen o distorsionen la capacidad del usuario para tomar decisiones libres.' },
      { name: 'Reglamento General de Protección de Datos (RGPD)', description: 'Exige consentimiento libre, específico e inequívoco — la "autodeterminación informativa" — e invalida el diseño de banners de cookies manipulativos.' },
      { name: 'Ley de Mercados Digitales (DMA)', description: 'Impide que los "guardianes de acceso" (grandes plataformas) usen interfaces engañosas para forzar el consentimiento dentro de sus ecosistemas.' },
      { name: 'Ley de Inteligencia Artificial (AI Act)', description: 'Prohíbe sistemas de IA que desplieguen técnicas subliminales o manipuladoras para distorsionar el comportamiento humano.' },
      { name: 'Directiva de Prácticas Comerciales Desleales (UCPD)', description: 'Clasifica la falsa urgencia y el confirmshaming como marketing engañoso.' },
      { name: 'Ley de Datos (Data Act)', description: 'Prohíbe dificultar el ejercicio de derechos mediante diseños no neutrales o coercitivos.' },
    ],
  },
  {
    region: 'Estados Unidos',
    icon: ShieldCheck,
    accent: '#818CF8',
    laws: [
      { name: 'FTC Act, Sección 5', description: 'Persecución judicial activa de patrones oscuros como prácticas comerciales desleales o engañosas.' },
      { name: 'Norma "Click-to-Cancel" (FTC)', description: 'Exige que cancelar una suscripción sea, como mínimo, tan fácil como haberse dado de alta.' },
      { name: 'CCPA / CPRA (California)', description: 'Prohíbe explícitamente las barreras engañosas para dar de baja el uso de datos personales.' },
    ],
  },
  {
    region: 'Argentina / LatAm',
    icon: FileText,
    accent: '#34D399',
    laws: [
      { name: 'Ley 24.240 de Defensa del Consumidor', description: 'Protege contra prácticas comerciales engañosas, incluyendo la falsa urgencia y el precio por goteo.' },
      { name: 'Ley de Protección de Datos Personales 25.326', description: 'Exige consentimiento transparente ante el crecimiento explosivo del e-commerce regional.' },
    ],
  },
]

// ─── Kit de herramientas para la agencia digital: Pausar, Preguntar, Elegir ───
const AGENCY_VERBS: { step: string; title: string; icon: LucideIcon; color: string; description: string }[] = [
  {
    step: '1',
    title: 'Pausar',
    icon: PauseCircle,
    color: ROSE,
    description: 'Crear una distancia mínima entre el estímulo y la respuesta. Desactivar la reproducción automática e interrumpir el impulso de la respuesta rápida y automática (Sistema 1).',
  },
  {
    step: '2',
    title: 'Preguntar',
    icon: HelpCircle,
    color: AMBER,
    description: 'Aplicar lectura lateral (Mike Caulfield): en vez de analizar una web de arriba a abajo, salir de la pestaña para verificar al editor y la veracidad de la oferta en fuentes independientes.',
  },
  {
    step: '3',
    title: 'Elegir',
    icon: CheckCircle2,
    color: VIOLET,
    description: 'Tomar decisiones con conciencia de la arquitectura circundante. Ejercer el derecho a no ser categorizado ni encasillado por un perfil predeterminado.',
  },
]

const STRATEGIC_QUESTIONS = [
  '¿Por qué me aparece esto justo ahora? (detectar perfilado y contexto)',
  '¿Qué quiere el diseño que yo haga? (identificar la intencionalidad de quien lo creó)',
  '¿Qué emoción me está intentando tocar? (detectar manipulación mediante urgencia o culpa)',
  '¿Qué dato o beneficio estoy entregando a cambio? (evaluar el intercambio de valor)',
  '¿Qué otra opción tengo realmente? (buscar alternativas fuera del flujo sugerido)',
]

// ─── Mini-test de reconocimiento rápido (práctica libre, no otorga puntaje ni progreso) ───
const MINI_TEST_SCENARIOS: { scenario: string; options: { text: string; correct: boolean; explanation: string }[] }[] = [
  {
    scenario:
      'Navegás en una tienda de ropa online y ves una barra que dice "¡Quedan 02:15 minutos para que expire tu carrito!". Al recargar la página, el reloj vuelve a marcar 05:00 minutos.',
    options: [
      { text: 'Es una oferta legítima por alta demanda.', correct: false, explanation: 'Incorrecto: reiniciar el temporizador demuestra que la escasez es simulada artificialmente.' },
      { text: 'Es un patrón oscuro de "falsa urgencia".', correct: true, explanation: 'Correcto: es un mecanismo para presionar la compra por impulso, apelando al Sistema 1.' },
    ],
  },
  {
    scenario: 'Al intentar cancelar un boletín informativo, el botón para confirmar dice: "No gracias, no me interesa cuidar mi seguridad financiera".',
    options: [
      { text: 'Es una técnica de "confirmshaming".', correct: true, explanation: 'Correcto: apela a la culpa o vergüenza para alterar la decisión del usuario.' },
      { text: 'Es una advertencia de seguridad transparente.', correct: false, explanation: 'Incorrecto: usa un lenguaje pasivo-agresivo para manipular la emoción, no para informar.' },
    ],
  },
  {
    scenario: 'Te registrás en una prueba gratuita de 7 días con un solo clic. Para cancelarla, tenés que llamar por teléfono a un centro de atención con horario acotado.',
    options: [
      { text: 'Es un patrón de "Roach Motel" (motel de cucarachas).', correct: true, explanation: 'Correcto: hay una asimetría intencional de fricción entre entrar y salir.' },
      { text: 'Es un procedimiento estándar de seguridad.', correct: false, explanation: 'Incorrecto: la normativa DSA y la regla Click-to-Cancel de la FTC exigen que cancelar sea tan fácil como registrarse.' },
    ],
  },
]

function EditorialImageFrame({
  imageSrc,
  altText,
  icon: Icon,
  colorA,
  colorB,
  label,
  source,
  sourceUrl,
  floatSide = 'right',
}: {
  imageSrc: string
  altText: string
  icon: LucideIcon
  colorA: string
  colorB: string
  label: string
  source: string
  sourceUrl: string
  floatSide?: 'right' | 'left'
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className={`relative p-3 bg-white border-2 rounded-[32px] shadow-lg overflow-hidden group mb-6 ${
        floatSide === 'left' ? 'dp-editorial-wrap-left' : 'dp-editorial-wrap-right'
      }`}
      style={{ borderColor: hexToRgba(colorA, 0.25) }}
    >
      <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-200">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${hexToRgba(colorA, 0.88)}, ${hexToRgba(colorB, 0.65)})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white">
              <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-2.5 opacity-90" strokeWidth={1.5} />
              <span className="dp-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
            </div>
          </div>
        )}

        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold transition-all hover:bg-black/80"
        >
          <span className="truncate pr-2">{source}</span>
          <ExternalLink className="w-3 h-3 text-rose-300 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Signature Interactive Widget: Manipulative Pressure Detector ───
const DARK_PATTERN_OPTIONS = [
  { id: 'countdown', label: 'Cuenta regresiva que "expira" en minutos', category: 'Urgencia Fabricada', weight: { urgencia: 40, ansiedad: 20, erosion: 15 } },
  { id: 'preselected', label: 'Casilla de suscripción ya tildada por defecto', category: 'Consentimiento Oculto', weight: { friccion: 20, erosion: 35, culpa: 5 } },
  { id: 'hidden_cost', label: 'Costos que aparecen recién en el último paso del pago', category: 'Costo Sorpresa', weight: { friccion: 15, ansiedad: 25, erosion: 15 } },
  { id: 'roach_motel', label: 'Cancelar la cuenta exige 6 pasos; darse de alta, uno solo', category: 'Roach Motel (motel de cucarachas)', weight: { friccion: 50, erosion: 25 } },
  { id: 'confirmshaming', label: 'Botón de rechazo: "No, prefiero seguir pagando de más"', category: 'Confirmshaming (vergüenza por rechazar)', weight: { culpa: 45, ansiedad: 10, erosion: 15 } },
  { id: 'streak', label: 'Racha de días que se pierde si no volvés hoy', category: 'Miedo a Perder lo Acumulado', weight: { ansiedad: 35, urgencia: 15, erosion: 10 } },
]

function ManipulativePressureDetector({ closingQuote }: { closingQuote: string }) {
  const [selected, setSelected] = useState<string[]>(['countdown', 'preselected'])

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const scores = selected.reduce(
    (acc, id) => {
      const opt = DARK_PATTERN_OPTIONS.find((o) => o.id === id)
      if (opt) {
        Object.entries(opt.weight).forEach(([key, val]) => {
          acc[key] = (acc[key] || 0) + val
        })
      }
      return acc
    },
    { urgencia: 10, friccion: 10, culpa: 10, ansiedad: 10, erosion: 15 } as Record<string, number>
  )

  const urgenciaPct = Math.min(Math.max(scores.urgencia || 0, 5), 98)
  const friccionPct = Math.min(Math.max(scores.friccion || 0, 5), 98)
  const culpaPct = Math.min(Math.max(scores.culpa || 0, 5), 98)
  const ansiedadPct = Math.min(Math.max(scores.ansiedad || 0, 5), 98)
  const erosionPct = Math.min(Math.max(scores.erosion || 0, 5), 98)

  return (
    <div className="w-full bg-[#170a12] text-white rounded-3xl p-5 sm:p-8 border-2 border-rose-500/30 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">

        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-orange-400 animate-pulse shrink-0" />
            <h3 className="dp-fraunces font-black text-lg sm:text-xl text-white leading-tight">
              Detector de Presión Manipuladora
            </h3>
          </div>
          <span className="dp-mono text-xs px-3 py-1 rounded-full bg-rose-950 border border-rose-700/50 text-rose-300 font-semibold">
            {selected.length} patrones activos
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Marcá qué elementos de interfaz están presentes en una pantalla imaginaria y mirá cómo suben los indicadores de presión — la misma lógica que usa la FTC para catalogar patrones oscuros:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {DARK_PATTERN_OPTIONS.map((opt) => {
            const active = selected.includes(opt.id)
            return (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  active
                    ? 'bg-rose-950/80 border-rose-500 text-white shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                    active ? 'bg-rose-600 border-rose-400 text-white' : 'border-slate-600 bg-slate-900'
                  }`}
                >
                  {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-mono text-orange-400 font-bold mb-0.5">{opt.category}</span>
                  <span className="text-xs font-semibold leading-snug block">{opt.label}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">
            <span>Índice de Presión de Diseño</span>
            <span className="text-orange-400">Lectura: {selected.length > 2 ? 'Alta' : 'Moderada'}</span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Urgencia Fabricada</span>
              <span className="font-mono text-orange-400 font-bold">{urgenciaPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" animate={{ width: `${urgenciaPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Fricción de Salida</span>
              <span className="font-mono text-rose-400 font-bold">{friccionPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-rose-600 to-pink-500 rounded-full" animate={{ width: `${friccionPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Culpa Inducida</span>
              <span className="font-mono text-violet-400 font-bold">{culpaPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-violet-600 to-purple-400 rounded-full" animate={{ width: `${culpaPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Ansiedad por Pérdida</span>
              <span className="font-mono text-amber-400 font-bold">{ansiedadPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" animate={{ width: `${ansiedadPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
              <span>Erosión de Autonomía</span>
              <span className="font-mono text-pink-400 font-bold">{erosionPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full" animate={{ width: `${erosionPct}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono italic">
            💡 <strong>Cita clave:</strong> "{closingQuote}"
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Simulador en vivo: Persuasión Transparente vs. Patrón Oscuro ───
const SIM_CONTENT = {
  honest: {
    badge: 'Diseño respetuoso con la autonomía',
    title: 'Configuración de privacidad y procesamiento de datos',
    desc: 'Respetamos tu privacidad. Podés aceptar el procesamiento completo o personalizar tus preferencias, de forma clara e igualitaria.',
    analysis: 'Opciones simétricas, de igual peso visual, con lenguaje directo. El usuario retiene el control total sin ser guiado compulsivamente hacia el "Aceptar todo".',
  },
  dark: {
    badge: '⚠️ Patrón oscuro: Confirmshaming + Misdirection',
    title: '¡Un paso más antes de disfrutar tu oferta exclusiva!',
    desc: 'Al hacer clic en el botón principal, mantendrás activas las recomendaciones optimizadas y seguirás disfrutando del servicio sin interrupciones.',
    analysis: 'Visualmente abrumador (overloading). El botón de "aceptar" destaca desproporcionadamente. El enlace de rechazo usa lenguaje pasivo-agresivo (confirmshaming) y tipografía diminuta (skipping).',
  },
}

function LiveArchitectureSimulator() {
  const [mode, setMode] = useState<'honest' | 'dark'>('honest')
  const content = SIM_CONTENT[mode]
  const isDark = mode === 'dark'

  return (
    <div className="dp-cyber-card bg-white p-5 sm:p-8 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-700">Modo de interfaz:</span>
          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200">
            <button
              onClick={() => setMode('honest')}
              className={`px-3.5 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-bold transition cursor-pointer ${
                mode === 'honest' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              🟢 Persuasión transparente
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`px-3.5 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-bold transition cursor-pointer ${
                mode === 'dark' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              🔴 Patrón oscuro
            </button>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
            isDark ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
          }`}
        >
          {content.badge}
        </span>
      </div>

      <div className="mt-6 bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-200 min-h-[260px] flex flex-col justify-between gap-6">
        <div className="space-y-2">
          <span className="dp-mono text-[10px] text-slate-400 uppercase tracking-wider">Ejemplo real: banner de privacidad / suscripción</span>
          <h4 className="dp-fraunces text-xl sm:text-2xl font-black text-slate-900">{content.title}</h4>
          <p className="text-sm text-slate-600 max-w-xl">{content.desc}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!isDark ? (
            <>
              <span className="px-5 sm:px-6 py-3 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-md">Aceptar todo</span>
              <span className="px-5 sm:px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-sm">Configurar preferencias</span>
              <span className="px-5 sm:px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-sm">Rechazar no esenciales</span>
            </>
          ) : (
            <div className="w-full space-y-3">
              <span className="block w-full sm:w-auto text-center px-8 py-4 rounded-xl dp-cyber-btn font-black text-sm sm:text-base animate-pulse">
                🚀 ¡ACEPTAR TODO Y CONTINUAR MI EXPERIENCIA!
              </span>
              <span className="block text-[10px] text-slate-400 underline dp-mono">
                No gracias, prefiero pagar el precio completo y perderme los beneficios exclusivos
              </span>
            </div>
          )}
        </div>

        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed dp-mono ${
            isDark ? 'bg-rose-50/80 border-rose-100 text-rose-900' : 'bg-white border-slate-200 text-slate-600'
          }`}
        >
          {isDark ? '🚨' : '💡'} <strong>Análisis:</strong> {content.analysis}
        </div>
      </div>
    </div>
  )
}

// ─── Matriz filtrable de la taxonomía de patrones oscuros ───
function DarkPatternsTaxonomyMatrix() {
  const [filter, setFilter] = useState<PatternCategory | 'todos'>('todos')
  const filtered = filter === 'todos' ? DARK_PATTERNS_TAXONOMY : DARK_PATTERNS_TAXONOMY.filter((p) => p.category === filter)

  const filters: { id: PatternCategory | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'dinero', label: PATTERN_CATEGORY_LABEL.dinero },
    { id: 'datos', label: PATTERN_CATEGORY_LABEL.datos },
    { id: 'tiempo', label: PATTERN_CATEGORY_LABEL.tiempo },
  ]

  return (
    <div>
      <div className="flex items-center gap-2 mb-6 flex-wrap dp-mono text-xs">
        <Filter className="w-4 h-4 text-slate-400 shrink-0" />
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3.5 py-2 rounded-xl font-semibold transition cursor-pointer ${
              filter === f.id ? 'bg-[#170a12] text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div key={p.title} className="dp-cyber-card bg-white p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-200">
                {PATTERN_CATEGORY_LABEL[p.category]}
              </span>
              <h4 className="dp-fraunces text-lg font-black text-slate-900 leading-snug">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.mechanic}</p>
              <p className="text-xs text-slate-500 leading-relaxed italic">Impacto: {p.impact}</p>
            </div>
            <div className="space-y-2 pt-3 border-t border-slate-100 text-[11px] dp-mono">
              <div className="text-rose-950 bg-rose-50/70 p-2.5 rounded-lg border border-rose-100">
                <strong>📌 Caso real:</strong> {p.realCase}
              </div>
              <div className="text-slate-500 flex items-start gap-1.5">
                <Gavel className="w-3 h-3 mt-0.5 shrink-0" />
                <em>{p.legal}</em>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mini-test de reconocimiento rápido (práctica libre, sin puntaje ni progreso) ───
function MiniRecognitionTest() {
  const [current, setCurrent] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null)
  const [score, setScore] = useState(0)
  const finished = current >= MINI_TEST_SCENARIOS.length

  function answer(optIdx: number) {
    if (feedback) return
    const opt = MINI_TEST_SCENARIOS[current].options[optIdx]
    if (opt.correct) setScore((s) => s + 1)
    setFeedback({ correct: opt.correct, explanation: opt.explanation })
    setTimeout(() => {
      setFeedback(null)
      setCurrent((c) => c + 1)
    }, 2200)
  }

  function reset() {
    setCurrent(0)
    setScore(0)
    setFeedback(null)
  }

  return (
    <div className="dp-cyber-card bg-white p-6 sm:p-10">
      {!finished ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between dp-mono text-xs text-slate-400">
            <span>Escenario {current + 1} de {MINI_TEST_SCENARIOS.length}</span>
            <span>Aciertos: {score}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 leading-relaxed">
            "{MINI_TEST_SCENARIOS[current].scenario}"
          </div>

          <div className="space-y-3">
            {MINI_TEST_SCENARIOS[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => answer(idx)}
                disabled={!!feedback}
                className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-rose-400 bg-white hover:bg-rose-50/50 transition text-xs sm:text-sm font-semibold text-slate-700 disabled:cursor-not-allowed"
              >
                {opt.text}
              </button>
            ))}
          </div>

          {feedback && (
            <div
              className={`p-3 rounded-xl text-xs dp-mono ${
                feedback.correct ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {feedback.explanation}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center space-y-4 py-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mx-auto text-xl font-black dp-mono">
            {score}/{MINI_TEST_SCENARIOS.length}
          </div>
          <h4 className="dp-fraunces text-2xl font-black text-slate-900">Diagnóstico completado</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            {score === MINI_TEST_SCENARIOS.length
              ? '¡Buen ojo! Detectás con eficacia la arquitectura manipuladora en escenarios reales.'
              : 'Sos vulnerable a algunos atajos mentales y patrones de urgencia o asimetría visual. Aplicá la tríada Pausar, Preguntar, Elegir.'}
          </p>
          <button onClick={reset} className="dp-cyber-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs cursor-pointer">
            <RotateCcw className="w-4 h-4" /> Reintentar diagnóstico
          </button>
        </div>
      )}
    </div>
  )
}

export function DisenoPersuasivoPatronesOscurosPage() {
  const data = getLibresSubtopicBySlug('diseno-persuasivo-patrones-oscuros')!
  const reducedMotion = useReducedMotion()

  const { progress, quiz, lightbox } = useLibresSubtopic(data)

  const {
    showQuiz, currentQuestionIdx, selectedAnswers, showResults,
    previousResult, currentQuestion, isLastQuestion, canContinue, finalScore, passed,
    startQuiz, handleSelect, handleNext, handlePrev,
  } = quiz

  const {
    lightboxOpen, setLightboxOpen, zoom, pan, isDragging, lightboxAreaRef,
    closeLightbox, zoomIn, zoomOut, resetZoom, onMouseDown, onMouseMove, onMouseUp,
  } = lightbox

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fadeUp = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

  if (!data) return null

  return (
    <>
      <style>{STYLES}</style>

      <Navbar />
      <BackToDashboardButton />

      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-rose-600 via-orange-500 to-violet-600 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">

        {/* ══ 1 HERO SECTION ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute pointer-events-none" style={{ animation: 'dpFloat1 22s ease-in-out infinite', top: '-10%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(219,39,119,.12) 0%, transparent 65%)', filter: 'blur(90px)' }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                  // {data.category}
                </span>
                <span className="dp-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                  Arquitectura de la Elección
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={spring}
                className="dp-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#170a12] leading-[1.08]"
              >
                {data.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={spring}
                className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold leading-relaxed"
              >
                {data.description}
              </motion.p>

              <motion.div variants={fadeUp} transition={spring} className="pt-2">
                <span className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest mb-3">
                  Marcos teóricos y autores citados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.authors.map((author) => (
                    <span
                      key={author}
                      className="px-3.5 py-1.5 rounded-full text-xs font-black bg-rose-50 text-rose-900 border border-rose-200 shadow-sm"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                <a href="#contenido" className="dp-cyber-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                  Explorar la clase completa <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#evaluacion" className="dp-cyber-btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base">
                  Ir a la evaluación <MousePointerClick className="w-5 h-5 text-rose-600" />
                </a>
              </motion.div>

            </motion.div>

            <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <EditorialImageFrame
                imageSrc="/img/tematicas/diseno-persuasivo-patrones-oscuros/hero.webp"
                altText="Diseño persuasivo y patrones oscuros"
                icon={MousePointerClick}
                colorA={ROSE}
                colorB={AMBER}
                label="Arquitectura de la Elección"
                source="Harry Brignull · Deceptive Patterns"
                sourceUrl="https://deceptive.design/about-us/dr-harry-brignull/"
                floatSide="right"
              />
            </motion.div>

          </div>
        </section>

        {/* ══ 1B FRANJA DE DATOS DUROS ══ */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-10 bg-[#170a12] border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {KEY_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center border border-white/10 bg-white/5">
                <div className="dp-mono text-3xl sm:text-4xl font-black text-orange-400">{s.value}</div>
                <div className="text-[11px] font-bold text-slate-200 uppercase mt-2 leading-snug">{s.label}</div>
                <div className="text-[10px] text-slate-400 mt-1">{s.source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN TEÓRICA + WIDGETS ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

              <motion.div variants={fadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-rose-600 rounded-full" />
                <h2 className="dp-fraunces text-2xl sm:text-3xl font-black text-[#170a12]">Introducción — La influencia que no da órdenes</h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>

              <motion.blockquote variants={fadeUp} transition={spring} className="border-l-4 border-rose-300 pl-5 py-1 text-slate-600 text-sm sm:text-base italic leading-relaxed">
                "En el mundo digital, el código es ley": el jurista Lawrence Lessig mostró que la arquitectura de un sistema regula tanto como una norma escrita. Richard Thaler y Cass Sunstein la llamaron <strong className="not-italic font-bold text-slate-800">arquitectura de la elección</strong> — el diseño de las opciones orienta la decisión sin necesidad de obligarla.
              </motion.blockquote>

              <motion.div variants={fadeUp} transition={spring} className="my-8">
                <ManipulativePressureDetector closingQuote={data.closingQuote} />
              </motion.div>

              <motion.div variants={fadeUp} transition={spring} className="pt-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-orange-500 shrink-0" />
                  <h3 className="dp-fraunces text-xl sm:text-2xl font-black text-[#170a12]">Simulador en vivo: la prueba de la arquitectura de la elección</h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Alterná entre una interfaz transparente y un diseño manipulativo para comprobar cómo se explota el <strong className="text-slate-800">Sistema 1</strong> (pensamiento rápido) de Daniel Kahneman.
                </p>
                <LiveArchitectureSimulator />
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS CON WRAP EDITORIAL DE IMAGEN ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            {data.sections.map((sec, i) => {
              const visual = SECTION_VISUALS[i] || {
                imageSrc: '/img/tematicas/diseno-persuasivo-patrones-oscuros/hero.webp',
                icon: Ban,
                label: sec.heading,
                source: 'Referencia Teórica',
                sourceUrl: 'https://josefarhat.com',
              }
              const isEven = i % 2 === 0
              const accentColor = i % 3 === 0 ? ROSE : i % 3 === 1 ? AMBER : VIOLET
              const accentText = i % 3 === 0 ? ROSE_TEXT : i % 3 === 1 ? AMBER_TEXT : VIOLET_TEXT

              return (
                <motion.article
                  key={sec.heading}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={stagger}
                  className="relative overflow-hidden"
                >
                  <EditorialImageFrame
                    imageSrc={visual.imageSrc}
                    altText={sec.heading}
                    icon={visual.icon}
                    colorA={accentColor}
                    colorB={isEven ? AMBER : VIOLET}
                    label={visual.label}
                    source={visual.source}
                    sourceUrl={visual.sourceUrl}
                    floatSide={isEven ? 'right' : 'left'}
                  />

                  <div className="space-y-6">
                    <span className="dp-mono text-xs font-extrabold uppercase tracking-widest" style={{ color: accentText }}>
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2 className="dp-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-[#170a12] leading-tight">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-rose-50/80 border-l-4 text-slate-900 font-bold italic text-base sm:text-lg" style={{ borderLeftColor: accentColor }}>
                        <Quote className="w-6 h-6 mb-2" style={{ color: accentText }} />
                        "{sec.quote}"
                      </blockquote>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* ══ 3B PERSUASIÓN ÉTICA VS. MANIPULACIÓN DIGITAL ══ */}
        <section id="espectro" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // La delgada línea
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">
                Persuasión Ética vs. Manipulación Digital
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="dp-cyber-card bg-white p-7 sm:p-8 border-t-4 flex flex-col justify-between" style={{ borderTopColor: '#059669' }}>
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono font-black text-lg">01</div>
                  <h3 className="dp-fraunces text-2xl font-black text-slate-900">Persuasión ética</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nace en la retórica clásica de Aristóteles: busca una armonía orgánica entre razón y emoción, sin ocultar la verdad ni mermar la voluntad del usuario.
                  </p>
                  <div className="space-y-3 dp-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-emerald-700">Ethos (credibilidad):</strong> coherencia, diseño sobrio y autoridad moral.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-emerald-700">Pathos (emoción):</strong> historias que conmueven antes de convencer.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-emerald-700">Logos (razón):</strong> propuesta de valor lógica, alineada con necesidades reales.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-900">
                    <strong>Ejemplo positivo:</strong> aplicar el modelo de B.J. Fogg para facilitar voluntariamente una acción (como compensar emisiones de carbono) sin fricciones engañosas.
                  </div>
                </div>
              </div>

              <div className="dp-cyber-card bg-white p-7 sm:p-8 border-t-4 border-t-rose-500 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-mono font-black text-lg">02</div>
                  <h3 className="dp-fraunces text-2xl font-black text-slate-900">Manipulación digital</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Diseños deliberados, nombrados por Harry Brignull en 2010, que explotan atajos mentales (heurísticas) para llevar al usuario a decisiones contrarias a su propio interés.
                  </p>
                  <div className="space-y-3 dp-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-rose-700">Asimetría de fricción:</strong> alta en un clic, cancelación que exige una llamada telefónica.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-rose-700">Secuestro de atención:</strong> recompensa variable continua que impide la pausa consciente.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-rose-700">Distorsión de voluntad:</strong> ocultación de costos finales o casillas preseleccionadas.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-100 text-xs text-rose-900">
                    <strong>Ejemplo manipulativo:</strong> formularios de exclusión de entrenamiento de IA ocultos tras laberintos de submenús que exigen justificar la decisión.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3C TAXONOMÍA INTERACTIVA DE PATRONES OSCUROS ══ */}
        <section id="matriz" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Taxonomía completa
                </span>
                <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">
                  Matriz de Patrones Oscuros de Diseño
                </h2>
                <p className="text-slate-600 text-sm">Clasificados según el recurso explotado — dinero, datos o tiempo/atención — con caso real y base legal.</p>
              </div>
            </div>

            <DarkPatternsTaxonomyMatrix />
          </div>
        </section>

        {/* ══ 4 CASO DE ESTUDIO ══ */}
        {data.caseStudy && (
          <section id="caso" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#170a12] text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">

                <div className="flex items-center gap-3">
                  <FolderLock className="w-6 h-6 text-orange-400" />
                  <span className="dp-mono text-xs font-bold uppercase tracking-widest text-orange-400">
                    {data.caseStudy.label}
                  </span>
                </div>

                <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-white">
                  {data.caseStudy.title}
                </h2>

                <p className="text-slate-200 text-base sm:text-lg md:text-xl font-extrabold leading-relaxed bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                  {data.caseStudy.description}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Fuente de verificación oficial: FTC — Epic Games Settlement ($245M Refund Order).</span>
                  <a
                    href="https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 font-bold hover:underline"
                  >
                    Comunicado oficial FTC ↗
                  </a>
                </div>

              </motion.div>
            </div>
          </section>
        )}

        {/* ══ 4B OTROS CASOS CRÍTICOS ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-[#170a12] text-white border-t border-white/5">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
              <h3 className="dp-fraunces text-2xl sm:text-3xl font-black text-white">Otros escenarios críticos</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {EXTRA_CASE_STUDIES.map((cs) => {
                const Icon = cs.icon
                return (
                  <div key={cs.title} className="bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 text-orange-400 shrink-0" />
                      <span className="dp-mono text-[11px] font-bold uppercase tracking-widest text-orange-400">{cs.label}</span>
                    </div>
                    <h4 className="dp-fraunces text-xl font-black text-white leading-snug">{cs.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{cs.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ 4C EVALUACIÓN ÉTICA TRIMEMBRE ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Tres lentes sobre la ingeniería de software
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">Evaluación Ética Trimembre</h2>
              <p className="text-slate-600 text-sm sm:text-base">Para trascender el "ethics-washing", el desarrollo tecnológico debe someterse a una evaluación normativa rigurosa (Ruohonen et al., 2025).</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {ETHICS_LENSES.map((lens) => {
                const Icon = lens.icon
                return (
                  <div key={lens.name} className="dp-cyber-card bg-white p-6 space-y-3.5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: hexToRgba(lens.color, 0.12), color: lens.textColor }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="dp-fraunces text-lg font-black leading-snug" style={{ color: lens.textColor }}>{lens.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{lens.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ 4D MARCO REGULATORIO GLOBAL ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Equidad digital
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">Marco Regulatorio Global</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La Unión Europea lideró la transición hacia la "equidad digital": un estándar que exige que la protección en el entorno virtual sea equivalente a la del mundo físico. La respuesta legislativa no solo regula el uso de los datos — ataca la raíz del problema: el diseño.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {REGULATORY_REGIONS.map((region) => {
                const Icon = region.icon
                return (
                  <div key={region.region} className="dp-cyber-card bg-white p-6 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 shrink-0" style={{ color: region.accent }} />
                      <span className="dp-mono text-xs font-bold uppercase tracking-widest text-slate-500">{region.region}</span>
                    </div>
                    <div className="space-y-3">
                      {region.laws.map((law) => (
                        <div key={law.name} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="block text-xs sm:text-[13px] font-black text-slate-900 mb-1">{law.name}</strong>
                          <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{law.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="dp-cyber-card bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-rose-600 text-xs font-mono font-bold">
                  <AlertTriangle className="w-4 h-4" /> Estudio de caso: hiperpersonalización en moda digital (Albanese, 2025)
                </div>
                <h4 className="dp-fraunces text-xl font-black text-slate-900">El dilema de la seducción algorítmica</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  La captura irrestricta de datos para personalizar ofertas crea una ilusión de exclusividad que explota la presión social por la inmediatez y la pertenencia, duplicando la vulnerabilidad del consumidor.
                </p>
              </div>
              <div className="text-center md:text-right dp-mono shrink-0">
                <div className="text-2xl sm:text-3xl font-black text-rose-600">23,2M+</div>
                <div className="text-[10px] text-slate-500 uppercase">Compradores online en Argentina (Kantar)</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5 CITA DE CIERRE ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#170a12] to-[#3B0A2A] text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <DoorClosed className="w-12 h-12 text-orange-400 mx-auto opacity-80" />
            <h2 className="dp-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">
              "{data.closingQuote}"
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ 5B KIT DE HERRAMIENTAS PARA LA AGENCIA DIGITAL ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Estrategia pedagógica y ética
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">Recuperar la Agencia: Ciudadanía Digital</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La libertad digital no es la ausencia de influencia, sino la capacidad de ser <strong className="text-slate-800">libre bajo influencia</strong>. Frente a cualquier interfaz, proponemos la tríada de acción Pausar, Preguntar, Elegir.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {AGENCY_VERBS.map((verb) => {
                const Icon = verb.icon
                return (
                  <div key={verb.title} className="dp-cyber-card bg-white p-6 text-center space-y-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                      style={{ backgroundColor: hexToRgba(verb.color, 0.12), color: verb.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="dp-fraunces font-black text-lg text-slate-900">{verb.step}. {verb.title.toUpperCase()}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{verb.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="dp-cyber-card bg-gradient-to-br from-rose-50/60 to-violet-50/60 p-6 sm:p-8 space-y-4">
              <h4 className="dp-fraunces text-lg font-black text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-rose-600" /> Cinco preguntas de perfilado estratégico
              </h4>
              <ul className="space-y-2.5">
                {STRATEGIC_QUESTIONS.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-slate-700 font-semibold">
                    <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-rose-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Lectura lateral (Mike Caulfield):</strong> en lugar de analizar una web de arriba a abajo, "leé a través de pestañas" — salí de la interfaz para verificar al editor y la veracidad de la oferta en fuentes independientes.
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6 MATERIAL DE ESTUDIO (se activa cuando lleguen los assets) ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">

              <div className="text-center space-y-3">
                <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Material pedagógico y recursos
                </span>
                <h2 className="dp-fraunces text-3xl sm:text-5xl font-black text-[#170a12]">
                  Presentación en Slides e Infografía Visual
                </h2>
              </div>

              {data.pdfUrl && (
                <div className="space-y-4">
                  <h3 className="dp-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" /> Presentación interactiva (15 Diapositivas en WebP)
                  </h3>
                  <div className="w-full max-w-4xl mx-auto">
                    <WebpSlideCarousel
                      totalSlides={15}
                      slidesBasePath="/img/tematicas/diseno-persuasivo-patrones-oscuros/slides"
                      pdfDownloadUrl={data.pdfUrl}
                      title={data.title}
                      color={ROSE}
                    />
                  </div>
                </div>
              )}

              {data.infografiaUrl && (
                <div className="space-y-4">
                  <h3 className="dp-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Images className="w-5 h-5 text-orange-600" /> Infografía sintetizada
                  </h3>
                  <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 border-2 border-slate-200 flex justify-center items-center p-3 sm:p-6 min-h-[60vh]"
                    onClick={() => setLightboxOpen(true)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.infografiaUrl}
                      alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
                      className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-slate-900 font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-2xl">
                        <ZoomIn className="w-5 h-5 text-rose-600" /> Ver a pantalla completa (acercar y desplazar)
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ══ 7 FUENTES ACADÉMICAS Y OFICIALES VERIFICADAS ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-rose-600 shrink-0" />
                <h2 className="dp-fraunces text-2xl sm:text-3xl font-black text-[#170a12]">
                  Fuentes Oficiales, Datos y Citas Verificables
                </h2>
              </div>
              <span className="dp-mono text-xs font-bold text-slate-600 bg-slate-200/80 px-3 py-1 rounded-full">
                {ACADEMIC_CITATIONS.length} Citas Académicas & Legales
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACADEMIC_CITATIONS.map((cite) => (
                <a
                  key={cite.title}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-500 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="dp-mono text-xs font-bold text-rose-600 block">{cite.author}</span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-rose-600 transition-colors">
                      {cite.title}
                    </h4>
                    <span className="text-xs text-slate-500 block">{cite.publication}</span>
                  </div>

                  {cite.stat && (
                    <div className="px-3 py-1.5 rounded-lg bg-rose-50/80 text-rose-950 font-mono text-xs font-extrabold border border-rose-200/60">
                      📊 {cite.stat}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                    <span className="truncate pr-2">{cite.topic}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7B MINI-TEST DE RECONOCIMIENTO RÁPIDO (práctica libre, sin puntaje) ══ */}
        <section id="test" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Práctica libre — no cuenta para tu progreso
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-4xl font-black text-[#170a12]">Test de Reconocimiento Rápido</h2>
              <p className="text-slate-600 text-sm sm:text-base">Analizá situaciones reales de navegación e identificá si estás ante un diseño ético o un engaño interfacial. La evaluación que sí completa esta temática está más abajo.</p>
            </div>
            <MiniRecognitionTest />
          </div>
        </section>

        {/* ══ 8 EVALUACIÓN INTERACTIVA (QUIZ) ══ */}
        <section id="evaluacion" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto">

            <div className="text-center space-y-3 mb-10">
              <span className="dp-mono dp-cyber-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Autoevaluación interactiva
              </span>
              <h2 className="dp-fraunces text-3xl sm:text-4xl font-black text-[#170a12]">
                Cuestionario de Comprensión
              </h2>
              {previousResult && (
                <p className="dp-mono text-xs font-bold text-slate-500">
                  Último intento: {previousResult.score}/10
                </p>
              )}
            </div>

            {!showQuiz && (
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 shadow-xl space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl mx-auto flex items-center justify-center bg-rose-50 border-2 border-rose-200">
                  <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600" />
                </div>
                <p className="text-slate-800 font-extrabold text-base sm:text-lg max-w-md mx-auto">
                  {data.quizQuestions.length} preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla.
                </p>
                <button
                  onClick={startQuiz}
                  className="dp-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  {previousResult ? 'Volver a hacer el quiz' : 'Comenzar evaluación'} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {showQuiz && !showResults && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">

                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="dp-mono text-xs font-bold text-rose-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="dp-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx

                    let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-rose-50 hover:border-rose-300'
                    if (isSelected) {
                      btnClass = 'bg-rose-600 border-rose-600 text-white font-bold shadow-md'
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIdx === 0}
                    className="px-5 py-2.5 rounded-full text-xs font-black border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="dp-cyber-btn px-6 py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>

              </div>
            )}

            {showQuiz && showResults && (
              <div className="bg-[#170a12] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-orange-400 mx-auto" />
                <h3 className="dp-fraunces text-2xl sm:text-3xl font-black">
                  {passed ? '¡Completaste esta temática!' : 'Todavía no llegaste al puntaje mínimo'}
                </h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-orange-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button
                  onClick={startQuiz}
                  className="dp-cyber-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  <RotateCcw className="w-5 h-5" /> Volver a intentar
                </button>
              </div>
            )}

          </div>
        </section>

      </main>

      {/* ══ LIGHTBOX INFOGRAFÍA ══ */}
      {data.infografiaUrl && lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <button onClick={zoomIn} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomIn className="w-5 h-5" />
            </button>
            <button onClick={zoomOut} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <ZoomOut className="w-5 h-5" />
            </button>
            <button onClick={resetZoom} className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button onClick={closeLightbox} className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            ref={lightboxAreaRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.infografiaUrl}
              alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
              className="max-w-full max-h-full object-contain select-none transition-transform duration-100"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* ══ FLOATING SCROLL TO TOP BUTTON ══ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-2xl border border-rose-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
