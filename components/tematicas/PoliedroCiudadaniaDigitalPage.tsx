'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowUp,
  Award,
  Ban,
  BookOpen,
  Brain,
  Cable,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Eye,
  ExternalLink,
  Fingerprint,
  Gavel,
  Globe2,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Hexagon,
  Images,
  Landmark,
  Leaf,
  Network,
  Quote,
  Radar,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
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

// ─── Color Tokens for Ciudadanía Digital: el Poliedro ───
const BLUE = '#2563EB'
const BLUE_TEXT = '#1E40AF'
const CYAN = '#0891B2'
const CYAN_TEXT = '#155E75'
const INDIGO = '#4F46E5'
const INDIGO_TEXT = '#3730A3'
const EMERALD = '#059669'
const EMERALD_TEXT = '#047857'
const AMBER = '#D97706'
const AMBER_TEXT = '#92400E'
const VIOLET = '#7C3AED'
const VIOLET_TEXT = '#5B21B6'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  .pd-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .pd-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  @media (min-width: 1024px) {
    .pd-editorial-wrap-right { float: right; margin-left: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
    .pd-editorial-wrap-left { float: left; margin-right: 2.25rem; margin-bottom: 1.75rem; width: 380px; clear: none; }
  }

  @keyframes pdFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(35px, -45px) scale(1.08); }
    75% { transform: translate(-25px, 25px) scale(0.96); }
  }

  .pd-badge {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(8, 145, 178, 0.12));
    border: 1px solid rgba(37, 99, 235, 0.28);
    color: #1E40AF;
  }
  .pd-card {
    border-radius: 28px;
    border: 2px solid rgba(37, 99, 235, 0.14);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px -10px rgba(37, 99, 235, 0.08);
  }
  .pd-card:hover {
    border-color: rgba(37, 99, 235, 0.4);
    box-shadow: 0 20px 40px -15px rgba(37, 99, 235, 0.18);
    transform: translateY(-3px);
  }
  .pd-btn {
    background: linear-gradient(135deg, #2563EB, #0891B2);
    color: #ffffff;
    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
    transition: all 0.25s ease;
  }
  .pd-btn:hover { transform: translateY(-2px); box-shadow: 0 15px 30px -5px rgba(8, 145, 178, 0.5); }
  .pd-btn-outline {
    border: 2px solid rgba(37, 99, 235, 0.4);
    color: #1E40AF;
    background: transparent;
    transition: all 0.25s ease;
  }
  .pd-btn-outline:hover { background: rgba(37, 99, 235, 0.06); transform: translateY(-2px); }
`

// ─── Fuentes académicas y oficiales ───
const ACADEMIC_CITATIONS = [
  {
    author: 'John Dewey',
    title: 'Democracy and Education (Democracia y educación)',
    publication: 'Filosofía de la educación como experiencia presente',
    url: 'https://en.wikipedia.org/wiki/Democracy_and_Education',
    topic: 'No se educa para una vida futura ignorando la vida que ya está pasando hoy',
    stat: 'Marco fundacional de la pedagogía experiencial',
  },
  {
    author: 'UNESCO',
    title: 'Alfabetización Mediática e Informacional (MIL)',
    publication: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura',
    url: 'https://www.unesco.org/en/media-information-literacy',
    topic: 'Enlaza ciudadanía digital, alfabetización mediática, ética, participación y pensamiento crítico',
    stat: 'Marco de referencia global adoptado por ministerios de educación',
  },
  {
    author: 'David Buckingham',
    title: 'Media Education: Literacy, Learning and Contemporary Culture (Educación mediática: alfabetización, aprendizaje y cultura contemporánea)',
    publication: 'Polity Press',
    url: 'https://www.politybooks.com/bookdetail?book_slug=media-education-literacy-learning-and-contemporary-culture--9780745631407',
    topic: 'La educación mediática no puede reducirse a enseñar a usar el aparato',
    stat: 'Referencia central en alfabetización crítica de medios',
  },
  {
    author: 'Emmanuel Levinas',
    title: 'La ética del rostro del otro',
    publication: 'Stanford Encyclopedia of Philosophy',
    url: 'https://plato.stanford.edu/entries/levinas/',
    topic: 'La responsabilidad ante el otro como centro de la ética, incluso mediada por una pantalla',
    stat: 'Marco filosófico para pensar el daño digital',
  },
  {
    author: 'Jürgen Habermas',
    title: 'Teoría del espacio público',
    publication: 'Stanford Encyclopedia of Philosophy',
    url: 'https://plato.stanford.edu/entries/habermas/',
    topic: 'El espacio público como ámbito donde se forma opinión a través de razones',
    stat: 'Base teórica para distinguir audiencia de ciudadanía digital',
  },
  {
    author: 'Amartya Sen',
    title: 'Development as Freedom (El desarrollo como libertad)',
    publication: 'Premio Nobel de Economía 1998',
    url: 'https://en.wikipedia.org/wiki/Development_as_Freedom',
    topic: 'La libertad como capacidades reales para hacer y para ser, no solo opciones en el papel',
    stat: 'Marco de "capacidades" adoptado por el PNUD para medir desarrollo humano',
  },
  {
    author: 'Gustavo Beliz et al. (2025)',
    title: 'Atlas de Inteligencia Artificial para el Desarrollo Humano de América Latina',
    publication: 'PNUD / UNDP',
    url: 'https://www.undp.org/sites/g/files/zskgke326/files/2025-06/atlas_a_8_6_compressed_0_0.pdf',
    topic: 'Gobernanza de IA, IA-Ceno, programas de la AAIP en Argentina y derechos digitales en ALC',
    stat: 'Estudio de referencia regional citado en esta temática',
  },
  {
    author: 'M. Suárez & N. Robaina (2026)',
    title: 'Brechas digitales en la participación ciudadana',
    publication: 'SciELO Uruguay',
    url: 'http://www.scielo.edu.uy/scielo.php?script=sci_abstract&pid=S2301-13782026000101204&lng=pt&nrm=iso&tlng=es',
    topic: 'Estudio comparado sobre Montevideo Decide y el Presupuesto Participativo de Vicente López',
    stat: 'La barrera principal no es el dispositivo: son las habilidades organizacionales',
  },
  {
    author: 'E. Yánez-Lucero et al. (2025)',
    title: 'La ética digital en la educación',
    publication: 'Dialnet',
    url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=10370796',
    topic: 'Fundamentos teóricos para una ciudadanía crítica, con marcos de la OCDE, DigComp 2.0 y UNESCO',
    stat: 'Revisión académica arbitrada sobre ética digital docente',
  },
  {
    author: 'Ministerio de Educación de Chile (2025)',
    title: 'Marco de Ciudadanía Digital Mineduc',
    publication: 'Gobierno de Chile',
    url: 'https://ciudadaniadigital.mineduc.cl/',
    topic: 'Definición institucional y las 4 dimensiones para comunidades educativas',
    stat: '4 ejes: crítica, convivencia, cuidado y uso',
  },
  {
    author: 'Senado Argentina / UNESCO',
    title: 'Ciudadanía Digital: el desafío del siglo XXI',
    publication: 'Honorable Senado de la Nación Argentina',
    url: 'https://www.senado.gob.ar/prensa/19280/noticias',
    topic: 'Exposiciones sobre competencias críticas y superación de la nueva exclusión digital',
    stat: 'Panel legislativo con especialistas de UNESCO',
  },
  {
    author: 'Mike Ribble & Gerald Bailey',
    title: 'Los 9 elementos de la ciudadanía digital',
    publication: 'Digital Citizenship Institute',
    url: 'https://www.digcitinstitute.com/9-elements',
    topic: 'Modelo de referencia sobre las áreas de comportamiento digital responsable',
    stat: '9 dominios adoptados por programas educativos en toda la región',
  },
  {
    author: 'Comisión Europea',
    title: 'DigComp 2.0: el marco europeo de competencias digitales',
    publication: 'Joint Research Centre (JRC)',
    url: 'https://joint-research-centre.ec.europa.eu/digcomp_en',
    topic: '5 áreas clave: datos, comunicación, creación de contenido, seguridad y resolución de problemas',
    stat: 'Marco de referencia oficial de la Unión Europea',
  },
]

const SECTION_VISUALS: { imageSrc: string; icon: LucideIcon; label: string; source: string; sourceUrl: string }[] = [
  { imageSrc: '/img/tematicas/poliedro-ciudadania-digital/ser_ciudadano.webp', icon: Users, label: 'Ser Ciudadano Digital', source: 'UNESCO', sourceUrl: 'https://www.unesco.org/en/media-information-literacy' },
  { imageSrc: '/img/tematicas/poliedro-ciudadania-digital/ocho_caras.webp', icon: Hexagon, label: 'Un Poliedro de Ocho Caras', source: 'Ribble & Bailey', sourceUrl: 'https://www.digcitinstitute.com/9-elements' },
  { imageSrc: '/img/tematicas/poliedro-ciudadania-digital/caras_de_cerca.webp', icon: Eye, label: 'Algunas Caras, de Cerca', source: 'David Buckingham', sourceUrl: 'https://www.politybooks.com/bookdetail?book_slug=media-education-literacy-learning-and-contemporary-culture--9780745631407' },
  { imageSrc: '/img/tematicas/poliedro-ciudadania-digital/formar_libertad.webp', icon: Sparkles, label: 'Formar para la Libertad', source: 'Amartya Sen', sourceUrl: 'https://en.wikipedia.org/wiki/Development_as_Freedom' },
]

// ─── Franja de datos duros ───
const KEY_STATS = [
  { value: '< 5 años', label: 'Vida media de las habilidades digitales', source: 'CIAT, aprendizaje permanente' },
  { value: '4 ejes', label: 'Dimensiones del Marco Mineduc de Ciudadanía Digital', source: 'Crítica, convivencia, cuidado y uso' },
  { value: '9 dominios', label: 'Áreas de comportamiento digital', source: 'Modelo Ribble & Bailey' },
  { value: '5 continentes', label: 'De gobernanza de IA en el desarrollo humano', source: 'Atlas IA PNUD / América Latina' },
]

// ─── Explorador interactivo: 6 caras del poliedro, en profundidad ───
const POLYHEDRON_FACES: {
  id: number
  short: string
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  textColor: string
  quote: string
  author: string
  body: string[]
}[] = [
  {
    id: 1,
    short: 'Alfabetización Crítica',
    title: 'Alfabetización digital crítica y lectura lateral',
    subtitle: 'Aprender a investigar más allá del feed y desafiar la posverdad.',
    icon: Brain,
    color: BLUE,
    textColor: BLUE_TEXT,
    quote: 'El saber instrumental no garantiza conocimiento. Navegar no es solo presionar botones, sino cuestionar intenciones y fuentes.',
    author: 'Roxana Morduchowicz (UNESCO) & Mineduc',
    body: [
      'La alfabetización digital crítica va más allá del adiestramiento técnico: es la habilidad de analizar el origen, la intención, la veracidad y las omisiones de la información que circula en las plataformas.',
      'Lectura lateral (Caulfield): verificar una afirmación saliendo de la página de origen y consultando fuentes secundarias e independientes.',
      'Infodemia (EJE / Caballero Álvarez): la sobreabundancia de datos falsos o deliberadamente sesgados durante crisis sanitarias o políticas.',
    ],
  },
  {
    id: 2,
    short: 'IA & Desarrollo Humano',
    title: 'Inteligencia artificial y desarrollo humano',
    subtitle: 'Gobernanza ética en la era del IA-Ceno.',
    icon: Cpu,
    color: INDIGO,
    textColor: INDIGO_TEXT,
    quote: 'Evitar la regulación zombie con enfoques granulares: la trazabilidad y transparencia algorítmica son pilares de los derechos humanos.',
    author: 'Atlas IA — PNUD / Gustavo Beliz',
    body: [
      'El Atlas de IA para el Desarrollo Humano (PNUD) advierte sobre el surgimiento del "IA-Ceno" y la necesidad de auditar los algoritmos públicos que afectan salud, empleo, justicia y subsidios estatales.',
      'Registro de algoritmos públicos: exigir que los Estados transparenten los modelos predictivos que usan.',
      'Data gap vs. digital gap: la falta de datos locales produce sesgos coloniales en los modelos generativos.',
    ],
  },
  {
    id: 3,
    short: 'Arquitectura de Elección',
    title: 'Arquitectura de elección y patrones oscuros',
    subtitle: 'Cómo el entorno digital moldea nuestras decisiones sin que lo notemos.',
    icon: Network,
    color: VIOLET,
    textColor: VIOLET_TEXT,
    quote: 'En el mundo digital, la arquitectura también regula. No hace falta una prohibición cuando el entorno vuelve fácil una conducta y difícil la otra.',
    author: 'Lawrence Lessig, Thaler & Sunstein, Shoshana Zuboff',
    body: [
      'A través de tecnología persuasiva (B.J. Fogg) y patrones oscuros, las plataformas explotan los atajos del Sistema 1 (Kahneman) para maximizar la permanencia y la extracción de datos.',
      'Nudges (empujones): arquitecturas de diseño que sesgan decisiones supuestamente libres.',
      'Capitalismo de vigilancia (Zuboff): conversión de la experiencia humana en datos de comportamiento traducidos en mercados de futuros.',
    ],
  },
  {
    id: 4,
    short: 'Brechas Digitales',
    title: 'Brechas digitales en América Latina',
    subtitle: 'De la falta de acceso a la desigualdad de impacto.',
    icon: Globe2,
    color: CYAN,
    textColor: CYAN_TEXT,
    quote: 'Las brechas de habilidades y capacidad organizacional limitan el potencial transformador de las tecnologías en los procesos participativos.',
    author: 'SciELO / M. Suárez & N. Robaina (2026)',
    body: [
      'Investigación comparada sobre plataformas como Montevideo Decide y el Presupuesto Participativo de Vicente López: tener conexión no basta si persisten las desigualdades en habilidades y agencia.',
      '1ª brecha: acceso a redes. 2ª brecha: habilidades de uso. 3ª brecha: beneficios tangibles.',
    ],
  },
  {
    id: 5,
    short: 'Convivencia & Cuidados',
    title: 'Convivencia digital, salud y cuidados',
    subtitle: 'Redes sociales como públicos conectados y espacios éticos.',
    icon: HeartPulse,
    color: EMERALD,
    textColor: EMERALD_TEXT,
    quote: 'No acompañamos dispositivos. Acompañamos formas de habitar. Un conflicto en un grupo de chat entra a la escuela o al trabajo intacto.',
    author: 'danah boyd & Mineduc Convivencia Digital',
    body: [
      'Las redes no son meras herramientas abstractas, sino "públicos conectados". La ética del cuidado exige responsabilidad afectiva digital, protección de la salud mental infanto-juvenil y erradicación del discurso de odio.',
    ],
  },
  {
    id: 6,
    short: 'Democracia & Justicia',
    title: 'Democracia, justicia y Estado de Derecho',
    subtitle: 'Garantía de derechos y modernización judicial transparente.',
    icon: Gavel,
    color: AMBER,
    textColor: AMBER_TEXT,
    quote: 'La justicia y la democracia son dos caras de la misma moneda. La eficiencia digital debe garantizar el trato equitativo y respetuoso a cada ciudadano.',
    author: 'Juan Carlos Campo Moreno, Bobbio & Dworkin',
    body: [
      'El Estado de Derecho contemporáneo exige modernizar la Justicia con tecnología eficiente, sin caer en la deshumanización del juzgamiento. La tecnología es un medio para fortalecer la ciudadanía, no para reemplazar las garantías individuales.',
    ],
  },
]

// ─── Los 5 continentes del Atlas de IA (PNUD) ───
const AI_CONTINENTS: { title: string; details: string; icon: LucideIcon }[] = [
  { title: '1. Gobernanza algorítmica y Estado de Derecho', details: 'Regulación estatal para garantizar transparencia, protección de datos personales e identificación de algoritmos en el sector público (ej. programa AAIP en Argentina).', icon: Landmark },
  { title: '2. Talento, futuro del trabajo y alfabetización', details: 'Marcos para la capacitación directiva, sustitución de habilidades repetitivas y preparación ante la vida media decreciente del conocimiento tecnológico.', icon: GraduationCap },
  { title: '3. Protección de grupos vulnerables y perspectiva de género', details: 'Guías para transversalizar la perspectiva de género en IA y prevenir sesgos raciales y discriminatorios en la seguridad pública algorítmica.', icon: ShieldCheck },
  { title: '4. Medio ambiente, sustentabilidad y cambio climático', details: 'Uso de IA para prevenir catástrofes naturales, con alerta crítica sobre el elevado consumo energético de los centros de datos y los modelos generativos.', icon: Leaf },
  { title: '5. Salud pública, bio-IA y educación', details: 'Detección temprana de epidemias, gestión inteligente de quirófanos y modelos predictivos para prevenir la deserción escolar de manera ética.', icon: Stethoscope },
]

// ─── Comparativa de modelos de gobernanza geopolítica ───
const GOVERNANCE_MODELS: { region: string; icon: LucideIcon; accent: string; rows: { label: string; value: string }[] }[] = [
  {
    region: 'Estados Unidos',
    icon: ShieldCheck,
    accent: '#818CF8',
    rows: [
      { label: 'Enfoque regulatorio', value: 'Descentralizado, no vinculante, basado en órdenes ejecutivas.' },
      { label: 'Clasificación', value: 'Basada en el poder computacional y el hardware.' },
      { label: 'Legislación clave', value: 'Orden Ejecutiva sobre IA, controles de exportación de semiconductores.' },
      { label: 'Cuerpo regulador', value: 'Varias agencias federales (FDA, FTC).' },
      { label: 'Objetivo principal', value: 'Competencia geopolítica y seguridad nacional.' },
    ],
  },
  {
    region: 'China',
    icon: Radar,
    accent: '#F472B6',
    rows: [
      { label: 'Enfoque regulatorio', value: 'Vertical, iterativo, con regulaciones específicas por dominio.' },
      { label: 'Clasificación', value: 'Algorítmica, por dominio de aplicación.' },
      { label: 'Legislación clave', value: 'Provisiones sobre recomendaciones algorítmicas y IA generativa.' },
      { label: 'Cuerpo regulador', value: 'Administración del Ciberespacio de China (CAC).' },
      { label: 'Objetivo principal', value: 'Control social y alineación con valores estatales.' },
    ],
  },
  {
    region: 'Unión Europea',
    icon: Scale,
    accent: '#38BDF8',
    rows: [
      { label: 'Enfoque regulatorio', value: 'Horizontal e integral (AI Act), cumplimiento centralizado.' },
      { label: 'Clasificación', value: 'Basada en el riesgo (cuatro categorías).' },
      { label: 'Legislación clave', value: 'Ley de Inteligencia Artificial de la UE (AI Act).' },
      { label: 'Cuerpo regulador', value: 'Oficina de IA Europea y agencias nacionales.' },
      { label: 'Objetivo principal', value: 'Protección de derechos individuales y privacidad.' },
    ],
  },
]

// ─── Los 16 puntos del modelo "FDA para algoritmos" ───
const FDA_MODEL_POINTS = [
  'Pre-aprobación del sistema: evaluación de protocolos antes de la aplicación real.',
  'Documentación obligatoria: divulgación de conjuntos de datos para detectar sesgos.',
  'Puerta de aprobación previa: requisito para modelos fundacionales.',
  'Auditorías de terceros: evidencia de eficacia mediante ensayos externos.',
  'Detección de salidas: mecanismos para identificar contenido generado por IA.',
  'Modificaciones planificadas: documentar cambios en la cadena de suministro.',
  'Mecanismo de quejas: programas de reporte para usuarios (estilo MedWatch).',
  'Revisión armonizada: aprobación coordinada por agencias sectoriales.',
  'Claridad del modelo: información sobre el software subyacente (evitar SOUP).',
  'Ombudsman para IA: figura para documentar daños y quejas sociales.',
  'Divulgación de incidentes: reporte obligatorio a lo largo de la cadena de valor.',
  'Poder de retiro: capacidad de suspender modelos dañinos o vulnerables.',
  'Políticas de confianza: evaluación de los actores de alojamiento (nube).',
  'Poderes de investigación: acceso regulatorio a la información técnica.',
  'Fondos comparables: presupuesto regulatorio acorde a la magnitud del riesgo.',
  'Responsabilidad legal: distribución proporcional de la carga financiera del riesgo.',
]

// ─── IA productiva: infraestructura, minerales críticos y trabajo ───
const PRODUCTIVE_AI_CARDS: { title: string; icon: LucideIcon; color: string; body: string }[] = [
  {
    title: 'El Triángulo del Litio',
    icon: Cable,
    color: CYAN,
    body: 'Argentina, Bolivia y Chile son depositarios del "Triángulo del Litio", esencial para la transición digital. LAC lidera el ranking global de reservas de minerales críticos — pero el "Big Bang de la IA en la producción minera" exige políticas industriales que superen el extractivismo puro, evitando que los datos regionales sean solo materia prima para centros de cómputo externos.',
  },
  {
    title: 'Los canarios en la mina',
    icon: AlertTriangle,
    color: AMBER,
    body: 'El impacto en el empleo se divide en tareas que la IA puede sustituir, complementar o ampliar. Los trabajadores de las industrias culturales actúan hoy como "canarios en la mina", alertando sobre el agotamiento del oxígeno creativo ante la automatización. Sin una transición humanista, enfrentamos un "Taylorismo Digital": monitoreo milimétrico de la fuerza laboral.',
  },
  {
    title: 'La paradoja de la productividad',
    icon: Brain,
    color: VIOLET,
    body: 'La hiperconectividad no garantiza eficiencia. La "Estanflación Cognitiva" — inflación de conexiones y deflación de pensamiento crítico — amenaza con estancar el desarrollo si la tecnología no se orienta a los sectores vitales.',
  },
]

// ─── IA para el bien y la vida: aplicaciones sectoriales ───
const SECTORAL_AI_CARDS: { title: string; icon: LucideIcon; color: string; body: string }[] = [
  {
    title: 'Revolución en la salud',
    icon: Stethoscope,
    color: EMERALD,
    body: 'La IA ya supera el rendimiento humano en oncología y radiología. El "aprendizaje federado" permite entrenar modelos sin comprometer la privacidad. El caso AIME usa IA para la vigilancia de brotes de dengue mediante secuencias predictivas — pero el "Doctor IA" requiere niveles de aceptación social que solo la transparencia puede brindar.',
  },
  {
    title: 'Educación: el camino de ida y vuelta',
    icon: GraduationCap,
    color: BLUE,
    body: 'El Plan Ceibal de Uruguay es el paradigma regional de la "analítica a gran escala": usa redes neuronales para predecir el fracaso escolar y la deserción mediante el análisis de variables del contexto familiar.',
  },
  {
    title: 'IA verde',
    icon: Leaf,
    color: CYAN,
    body: 'Los "gemelos digitales" — como los usados en Brasil para prevenir inundaciones — permiten una gestión resiliente de la "casa común". Esto debe equilibrarse contra la voracidad hídrica y energética de los modelos de deep learning.',
  },
]

// ─── Los 4 laberintos del riesgo ───
const RISK_LABYRINTHS: { title: string; thinkers: string; icon: LucideIcon; color: string; items: string[] }[] = [
  { title: 'Tecnológicos', thinkers: 'Asimov / Dick', icon: Cpu, color: BLUE, items: ['Alucinaciones', 'Jail-breaking', 'Comportamientos emergentes no alineados'] },
  { title: 'Existenciales', thinkers: 'Shelley / Prometeo', icon: Sparkles, color: VIOLET, items: ['Pérdida de control', 'Desalineamiento de objetivos', 'Riesgo de extinción'] },
  { title: 'Sociales', thinkers: 'Huxley / Orwell / Bradbury', icon: Eye, color: AMBER, items: ['Polarización', '"Democracia incivil"', 'Adicción mental', 'Estado de vigilancia global'] },
  { title: 'Económicos', thinkers: 'Marx / Taylor', icon: Landmark, color: CYAN, items: ['Monopolios', 'Fin del trabajo', 'Burbujas especulativas', 'Concentración de dividendos digitales'] },
]

// ─── Hoja de ruta: 10 salidas posibles ───
const ROADMAP_ITEMS = [
  'Pacto Global de Ética obligatorio.',
  'Acuerdo transnacional de no proliferación de IA armamentista.',
  'Moratoria inmediata de modelos fuera de control.',
  'Licencias habilitantes ex ante.',
  'Auditorías sociales y ciudadanas.',
  'Impuestos digitales globales inteligentes.',
  'Panel Científico Inter-Gubernamental de la IA (estilo IPCC).',
  'Implementación de "white boxes" (algoritmos explicables).',
  'Apertura de documentación a la comunidad científica.',
  'Estándares de calidad y seguridad universales.',
]

// ─── Simulador de escenarios: ¿Libres bajo influencia? ───
const INFLUENCE_SCENARIOS: {
  title: string
  category: string
  text: string
  options: { text: string; correct: boolean; explain: string }[]
}[] = [
  {
    title: 'El feed infinito y la notificación persuasiva',
    category: 'B.J. Fogg & patrones oscuros',
    text: 'Recibís una notificación: "¡Tu contacto comentó algo polémico sobre un tema de tu interés! Reaccioná en 2 minutos". Al ingresar, la app no te lleva directo al comentario, sino que te sumerge en un feed infinito que auto-reproduce videos urgentes.',
    options: [
      { text: 'Seguir desplazándome en la app. El algoritmo sabe exactamente lo que me interesa ver.', correct: false, explain: 'Caíste en el bucle de "recompensa variable". Las plataformas usan el Sistema 1 (Kahneman) para extraer tiempo e interacciones (Zuboff).' },
      { text: 'Pausar, desactivar las notificaciones push y usar la lectura lateral para verificar si la noticia era real.', correct: true, explain: '¡Excelente! Ejerciste agencia y modificaste tu entorno (Lessig). Al frenar el impulso del Sistema 1, activás la lectura reflexiva del Sistema 2.' },
    ],
  },
  {
    title: 'Contenido generado por IA y sesgo de confirmación',
    category: 'Infodemia & alfabetización crítica',
    text: 'Ves una imagen hiperrealista en redes sociales de una catástrofe climática con un titular escandaloso. Amigos tuyos la están compartiendo alarmados sin citar fuentes.',
    options: [
      { text: 'Compartirla inmediatamente para alertar a mi comunidad; más vale prevenir.', correct: false, explain: 'Estás propagando la infodemia. El sesgo de confirmación nos impulsa a compartir lo que emociona antes de verificar.' },
      { text: 'Buscar la imagen en buscadores inversos y chequear si agencias de fact-checking la validaron.', correct: true, explain: 'Perfecto. Aplicaste alfabetización digital crítica y la regla de no difundir sin verificación comprobada.' },
    ],
  },
  {
    title: 'Inscripción en una plataforma con opciones preseleccionadas',
    category: 'Thaler & Sunstein: nudges y valores por defecto',
    text: 'Al registrarte en un servicio educativo público, la casilla "Acepto compartir mi perfil de navegación para publicidad de terceros" viene marcada por defecto (opt-out).',
    options: [
      { text: 'Hacer clic en "Aceptar todo" rápidamente para ingresar de inmediato.', correct: false, explain: 'Caíste en la "arquitectura de elección por defecto": los diseñadores saben que la mayoría no desmarca casillas por inercia.' },
      { text: 'Desmarcar la casilla de publicidad y revisar qué datos realmente necesita la plataforma.', correct: true, explain: 'Defendiste tu privacidad desde el diseño (privacy by design), reconociendo que tus datos no son una mercancía sin control.' },
    ],
  },
]

// ─── Mini-test de autoverificación (práctica libre, sin puntaje ni progreso) ───
const MINI_TEST_QUESTIONS: { q: string; answers: { text: string; correct: boolean }[] }[] = [
  {
    q: 'Según Lawrence Lessig, ¿de qué forma "regula" el entorno digital nuestra conducta?',
    answers: [
      { text: 'Únicamente a través de leyes nacionales y normativas policiales.', correct: false },
      { text: 'A través de la propia arquitectura y el código, que vuelven una conducta fácil o difícil.', correct: true },
      { text: 'No influye en lo absoluto; las personas siempre son 100% neutrales.', correct: false },
    ],
  },
  {
    q: '¿Qué se entiende por "lectura lateral" en la formación ciudadana crítica?',
    answers: [
      { text: 'Leer un artículo científico de principio a fin sin saltarse párrafos.', correct: false },
      { text: 'Verificar datos abriendo pestañas paralelas para contrastar fuentes externas.', correct: true },
      { text: 'Mirar únicamente las imágenes laterales de un sitio de noticias.', correct: false },
    ],
  },
  {
    q: 'Según el Atlas de IA del PNUD, ¿cuál es un pilar crucial de la gobernanza pública?',
    answers: [
      { text: 'Prohibir totalmente la inteligencia artificial en las universidades.', correct: false },
      { text: 'El registro de algoritmos públicos y la evaluación de transparencia de datos.', correct: true },
      { text: 'Dejar que las plataformas privadas se autorregulen sin ningún control.', correct: false },
    ],
  },
  {
    q: 'Según el CIAT, ¿cuál es la vida media estimada de las habilidades tecnológicas actuales?',
    answers: [
      { text: 'Aproximadamente 30 años.', correct: false },
      { text: 'Menos de 5 años, lo que exige aprendizaje permanente.', correct: true },
      { text: 'Es indefinida; las habilidades nunca caducan.', correct: false },
    ],
  },
  {
    q: '¿Qué diferencia a la 2ª y 3ª brecha digital de la 1ª brecha tradicional?',
    answers: [
      { text: 'La 1ª se enfoca en el acceso físico; la 2ª y 3ª, en competencias de uso e impacto real.', correct: true },
      { text: 'No existe ninguna diferencia; todas miden si hay señal de wifi.', correct: false },
      { text: 'La 3ª brecha mide solamente el costo en dinero de los teléfonos inteligentes.', correct: false },
    ],
  },
]

// ─── Dashboard estadístico: banda ancha regional y vida útil de habilidades ───
const BROADBAND_INDEX = [
  { country: 'Chile', value: 7.8 },
  { country: 'Barbados', value: 7.2 },
  { country: 'Uruguay', value: 6.9 },
  { country: 'Argentina', value: 6.4 },
  { country: 'Brasil', value: 6.1 },
  { country: 'Surinam / Haití', value: 2.3 },
]

const SKILLS_DECAY = [
  { year: 'Año 0', value: 100 },
  { year: 'Año 1', value: 80 },
  { year: 'Año 2', value: 60 },
  { year: 'Año 3', value: 42 },
  { year: 'Año 4', value: 25 },
  { year: 'Año 5', value: 10 },
]

const STAT_HIGHLIGHTS: { title: string; icon: LucideIcon; color: string; body: string }[] = [
  { title: 'DigComp 2.0 (Unión Europea)', icon: GraduationCap, color: INDIGO, body: 'Establece 5 áreas clave: alfabetización en datos, comunicación y colaboración, creación de contenido digital, seguridad y resolución de problemas.' },
  { title: 'Uso significativo vs. acceso', icon: Users, color: CYAN, body: 'SciELO (2026): en proyectos como Montevideo Decide y el Presupuesto Participativo de Vicente López, la principal barrera no es el dispositivo, sino las habilidades organizacionales y de uso.' },
  { title: 'Respuesta ante la infodemia', icon: ShieldCheck, color: EMERALD, body: 'EJE / Caballero Álvarez: la sobreabundancia de datos falsos durante la COVID-19 demostró que la inmersión empírica sin alfabetización crítica propicia la manipulación social.' },
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
        floatSide === 'left' ? 'pd-editorial-wrap-left' : 'pd-editorial-wrap-right'
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
              <span className="pd-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
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
          <ExternalLink className="w-3 h-3 text-cyan-300 shrink-0" />
        </a>
      </div>
    </div>
  )
}

// ─── Explorador interactivo del poliedro: 6 caras en profundidad ───
function PolyhedronExplorer() {
  const [activeId, setActiveId] = useState(1)
  const active = POLYHEDRON_FACES.find((f) => f.id === activeId)!
  const Icon = active.icon

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-5 grid grid-cols-2 gap-3">
        {POLYHEDRON_FACES.map((face) => {
          const FaceIcon = face.icon
          const isActive = face.id === activeId
          return (
            <button
              key={face.id}
              onClick={() => setActiveId(face.id)}
              className={`text-left p-4 rounded-2xl border-2 transition-all relative overflow-hidden group cursor-pointer ${
                isActive ? 'shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
              style={isActive ? { borderColor: hexToRgba(face.color, 0.5), backgroundColor: hexToRgba(face.color, 0.06) } : undefined}
            >
              <div className="pd-mono text-[10px] font-bold mb-1" style={{ color: face.textColor }}>
                CARA {String(face.id).padStart(2, '0')}
              </div>
              <div className="font-bold text-slate-900 text-sm mb-1">{face.short}</div>
              <FaceIcon className="absolute bottom-3 right-3 w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: face.color }} />
            </button>
          )
        })}
      </div>

      <div className="lg:col-span-7">
        <div className="pd-card bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-xs pd-mono font-bold" style={{ backgroundColor: hexToRgba(active.color, 0.12), color: active.textColor }}>
              <Icon className="w-3.5 h-3.5 inline -mt-0.5 mr-1" /> {active.short}
            </span>
          </div>

          <h3 className="pd-fraunces text-xl sm:text-2xl font-black text-slate-900 mb-1">{active.title}</h3>
          <p className="text-xs font-semibold text-slate-500 mb-5">{active.subtitle}</p>

          <div className="p-4 rounded-2xl bg-slate-50 border-l-4 mb-5 italic text-xs sm:text-sm text-slate-800" style={{ borderLeftColor: active.color }}>
            "{active.quote}"
            <span className="block mt-2 pd-mono text-[10px] not-italic font-bold" style={{ color: active.textColor }}>— {active.author}</span>
          </div>

          <div className="space-y-3">
            {active.body.map((p, idx) => (
              <p key={idx} className="text-slate-700 text-sm leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Los 5 continentes del Atlas de IA (tabs) ───
function AiContinentsTabs() {
  const [active, setActive] = useState(0)
  const continent = AI_CONTINENTS[active]
  const Icon = continent.icon

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {AI_CONTINENTS.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setActive(i)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              i === active ? 'bg-cyan-400 text-slate-950' : 'bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            {i + 1}. {c.title.split('. ')[1].split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="pd-fraunces text-xl font-black text-white mb-2">{continent.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{continent.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Simulador de escenarios: ¿Libres bajo influencia? ───
function InfluenceScenarioSimulator() {
  const [step, setStep] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const scenario = INFLUENCE_SCENARIOS[step]

  function choose(opt: { correct: boolean; explain: string }) {
    setFeedback(opt.explain)
  }

  function next() {
    setStep((s) => (s + 1) % INFLUENCE_SCENARIOS.length)
    setFeedback(null)
  }

  return (
    <div className="pd-card bg-white p-6 sm:p-10">
      <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6 gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{step + 1}</span>
          <div>
            <h3 className="font-black text-slate-900 text-sm sm:text-base">{scenario.title}</h3>
            <p className="text-xs pd-mono text-slate-500">{scenario.category}</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs pd-mono font-bold">
          Escenario {step + 1} de {INFLUENCE_SCENARIOS.length}
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 mb-5 text-amber-900 text-sm leading-relaxed">
        {scenario.text}
      </div>

      <div className="space-y-3">
        {scenario.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => choose(opt)}
            disabled={!!feedback}
            className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-all text-xs sm:text-sm font-medium text-slate-800 flex items-start gap-3 group disabled:cursor-not-allowed"
          >
            <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
              {String.fromCharCode(65 + idx)}
            </span>
            <span>{opt.text}</span>
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-5 p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-sm">
          <div className="font-bold text-indigo-900 flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-indigo-600" /> Análisis teórico:
          </div>
          <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">{feedback}</p>
          <div className="mt-4 flex justify-end">
            <button onClick={next} className="pd-btn px-5 py-2 rounded-xl font-semibold text-xs cursor-pointer">
              Siguiente escenario <ChevronRight className="w-3.5 h-3.5 inline -mt-0.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Mini-test de autoverificación (práctica libre, sin puntaje ni progreso) ───
function MiniVerificationTest() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const finished = current >= MINI_TEST_QUESTIONS.length

  function answer(correct: boolean) {
    if (correct) setScore((s) => s + 1)
    setCurrent((c) => c + 1)
  }

  function reset() {
    setCurrent(0)
    setScore(0)
  }

  return (
    <div className="pd-card bg-white p-6 sm:p-10">
      {!finished ? (
        <div>
          <div className="flex items-center justify-between text-xs pd-mono text-slate-400 mb-6">
            <span>Pregunta {current + 1} de {MINI_TEST_QUESTIONS.length}</span>
            <span>Puntaje acumulado: {score}</span>
          </div>

          <h3 className="pd-fraunces text-lg sm:text-xl font-black text-slate-900 mb-6">{MINI_TEST_QUESTIONS[current].q}</h3>

          <div className="space-y-3">
            {MINI_TEST_QUESTIONS[current].answers.map((ans, idx) => (
              <button
                key={idx}
                onClick={() => answer(ans.correct)}
                className="w-full text-left p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-400 text-slate-800 text-xs sm:text-sm font-medium transition-all flex items-center justify-between"
              >
                <span>{ans.text}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="pd-fraunces text-2xl font-black text-slate-900">Autoverificación completada</h3>
          <p className="text-slate-600 text-sm mt-2">Tu resultado en este diagnóstico de práctica:</p>
          <div className="text-5xl font-black text-indigo-600 my-4 pd-mono">
            {Math.round((score / MINI_TEST_QUESTIONS.length) * 100)}%
          </div>
          <button onClick={reset} className="pd-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs cursor-pointer">
            <RotateCcw className="w-4 h-4" /> Reintentar diagnóstico
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Dashboard estadístico (barras animadas, sin dependencias externas) ───
function StatsDashboard() {
  const maxBroadband = 10
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="pd-card bg-white p-6">
        <h4 className="font-black text-slate-900 text-sm mb-1">Índice de Desarrollo de Banda Ancha (IDBA)</h4>
        <p className="text-xs text-slate-500 mb-5">Brecha regional en América Latina (CIAT / BID / CEPAL)</p>
        <div className="space-y-3">
          {BROADBAND_INDEX.map((row) => (
            <div key={row.country}>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>{row.country}</span>
                <span className="pd-mono font-bold text-blue-600">{row.value.toFixed(1)}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(row.value / maxBroadband) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pd-card bg-white p-6">
        <h4 className="font-black text-slate-900 text-sm mb-1">Vida media de las habilidades digitales</h4>
        <p className="text-xs text-slate-500 mb-5">Decaimiento de vigencia vs. necesidad de recapacitación (CIAT Nº 46)</p>
        <div className="space-y-3">
          {SKILLS_DECAY.map((row) => (
            <div key={row.year}>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>{row.year}</span>
                <span className="pd-mono font-bold text-amber-600">{row.value}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PoliedroCiudadaniaDigitalPage() {
  const data = getLibresSubtopicBySlug('poliedro-ciudadania-digital')!
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
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
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
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 transition-all duration-150"
          style={{ width: `${progress.porcentaje}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 sm:pt-28 pb-20 overflow-x-hidden">

        {/* ══ 1 HERO SECTION ══ */}
        <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute pointer-events-none" style={{ animation: 'pdFloat1 22s ease-in-out infinite', top: '-10%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,.12) 0%, transparent 65%)', filter: 'blur(90px)' }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" animate="visible" variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-3">
                <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                  // {data.category}
                </span>
                <span className="pd-mono text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                  Cierre de "Libres bajo influencia"
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={spring}
                className="pd-fraunces text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]"
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
                      className="px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-50 text-blue-900 border border-blue-200 shadow-sm"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} transition={spring} className="pt-4 flex flex-wrap gap-4">
                <a href="#contenido" className="pd-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base">
                  Explorar el poliedro <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#evaluacion" className="pd-btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-base">
                  Ir a la evaluación <HelpCircle className="w-5 h-5 text-blue-600" />
                </a>
              </motion.div>

            </motion.div>

            <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <EditorialImageFrame
                imageSrc="/img/tematicas/poliedro-ciudadania-digital/hero.webp"
                altText="Ciudadanía digital: el poliedro"
                icon={Hexagon}
                colorA={BLUE}
                colorB={CYAN}
                label="El Poliedro Digital"
                source="UNESCO · Ciudadanía Digital"
                sourceUrl="https://www.unesco.org/en/media-information-literacy"
                floatSide="right"
              />
            </motion.div>

          </div>
        </section>

        {/* ══ 1B FRANJA DE DATOS DUROS ══ */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-10 bg-slate-900 border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {KEY_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center border border-white/10 bg-white/5">
                <div className="pd-mono text-2xl sm:text-3xl font-black text-cyan-400">{s.value}</div>
                <div className="text-[11px] font-bold text-slate-200 uppercase mt-2 leading-snug">{s.label}</div>
                <div className="text-[10px] text-slate-400 mt-1">{s.source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 2 INTRODUCCIÓN TEÓRICA + EXPLORADOR ══ */}
        <section id="contenido" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

              <motion.div variants={fadeUp} transition={spring} className="flex items-center gap-3">
                <span className="w-3 h-8 bg-blue-600 rounded-full" />
                <h2 className="pd-fraunces text-2xl sm:text-3xl font-black text-slate-900">Introducción — Formar, no prohibir</h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={spring} className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-relaxed">
                {data.intro}
              </motion.p>

              <motion.blockquote variants={fadeUp} transition={spring} className="border-l-4 border-blue-300 pl-5 py-1 text-slate-600 text-sm sm:text-base italic leading-relaxed">
                "Una persona no es un dato, ni un perfil, ni una audiencia, ni una probabilidad. Es un sujeto de derechos y una historia abierta."
              </motion.blockquote>

            </motion.div>
          </div>
        </section>

        {/* ══ 2B EXPLORADOR INTERACTIVO DEL POLIEDRO ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Explorador tridimensional
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">Seis Caras del Poliedro, en Profundidad</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La ciudadanía digital no es homogénea ni unidimensional. Elegí una cara para examinar su marco conceptual, basado en la bibliografía citada en esta temática.
              </p>
            </div>
            <PolyhedronExplorer />
          </div>
        </section>

        {/* ══ 3 SECCIONES TEMÁTICAS CON WRAP EDITORIAL DE IMAGEN ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
            {data.sections.map((sec, i) => {
              const visual = SECTION_VISUALS[i] || {
                imageSrc: '/img/tematicas/poliedro-ciudadania-digital/hero.webp',
                icon: Ban,
                label: sec.heading,
                source: 'Referencia Teórica',
                sourceUrl: 'https://josefarhat.com',
              }
              const isEven = i % 2 === 0
              const accentColor = i % 3 === 0 ? BLUE : i % 3 === 1 ? CYAN : INDIGO
              const accentText = i % 3 === 0 ? BLUE_TEXT : i % 3 === 1 ? CYAN_TEXT : INDIGO_TEXT

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
                    colorB={isEven ? CYAN : INDIGO}
                    label={visual.label}
                    source={visual.source}
                    sourceUrl={visual.sourceUrl}
                    floatSide={isEven ? 'right' : 'left'}
                  />

                  <div className="space-y-6">
                    <span className="pd-mono text-xs font-extrabold uppercase tracking-widest" style={{ color: accentText }}>
                      // Sección {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2 className="pd-fraunces text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {sec.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.quote && (
                      <blockquote className="mt-6 p-6 rounded-2xl bg-blue-50/80 border-l-4 text-slate-900 font-bold italic text-base sm:text-lg" style={{ borderLeftColor: accentColor }}>
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

        {/* ══ 4 ATLAS DE IA PARA EL DESARROLLO HUMANO ══ */}
        <section id="ia-lab" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" /> Atlas de Inteligencia Artificial (PNUD)
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-white">El IA-Ceno y el Calentamiento Tecnológico Global</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                La transición del Antropoceno al <strong className="text-white">IA-Ceno</strong> marca un punto de inflexión: la inteligencia artificial dejó de ser una herramienta técnica para constituirse en una fuerza geopolítica de alcance planetario. El "Calentamiento Tecnológico Global" —la contraparte digital del cambio climático— no se limita al consumo energético de los centros de datos: se manifiesta en la emisión de "nanopartículas de influencia psicológica" que producen una "estanflación de conocimiento y solidaridad".
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Pregunta central: ¿es la IA una esperanza para cerrar brechas históricas, o el "problema final" para la especie por el desalineamiento entre sus objetivos y los propósitos humanos? Evitar la <strong className="text-white">"gobernanza zombie"</strong> —hiper-burocrática pero incapaz de ordenar las fuerzas que desató— es la tarea urgente.
              </p>
            </div>

            <div>
              <h3 className="pd-fraunces text-xl sm:text-2xl font-black text-white mb-4">Los 5 continentes del desarrollo humano</h3>
              <AiContinentsTabs />
            </div>
          </div>
        </section>

        {/* ══ 5 GOBERNANZA GLOCAL ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Taxonomías y modelos regulatorios
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">Gobernanza Glocal</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La gobernanza de la IA se despliega bajo un signo "glocal": sin un marco común, América Latina y el Caribe queda expuesta a un "darwinismo digital" y al riesgo del <strong className="text-slate-800">Colonialismo Digital</strong>, donde la captura de la institucionalidad por intereses mercantilistas amenaza incluso la soberanía de los datos indígenas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {GOVERNANCE_MODELS.map((model) => {
                const Icon = model.icon
                return (
                  <div key={model.region} className="pd-card bg-white p-6 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 shrink-0" style={{ color: model.accent }} />
                      <span className="pd-mono text-xs font-bold uppercase tracking-widest text-slate-500">{model.region}</span>
                    </div>
                    <div className="space-y-3">
                      {model.rows.map((row) => (
                        <div key={row.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="block text-xs font-black text-slate-900 mb-1">{row.label}</strong>
                          <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pd-card bg-gradient-to-br from-blue-50/60 to-cyan-50/60 p-6 sm:p-8 space-y-4">
              <h4 className="pd-fraunces text-lg font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> El modelo "FDA para algoritmos"
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Una propuesta robusta para la región: aplicar a los algoritmos un modelo de gestión de calidad similar al de la FDA (Food & Drug Administration). Como los medicamentos, deben ser chequeados antes, durante y después de su despliegue — los 16 puntos de la analogía:
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {FDA_MODEL_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-blue-100">
                    <span className="pd-mono text-[10px] font-black text-blue-600 shrink-0 mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6 IA PRODUCTIVA ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // De la infraestructura galáctica a la paradoja de la productividad
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">IA Productiva</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La "Gran Fábrica de la IA" no es etérea: depende de recursos naturales finitos. América Latina ocupa un lugar estratégico, no solo como consumidora, sino como proveedora crítica de los insumos del IA-Ceno.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PRODUCTIVE_AI_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="pd-card bg-white p-6 space-y-3.5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: hexToRgba(card.color, 0.12), color: card.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="pd-fraunces text-lg font-black text-slate-900">{card.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ 7 IA PARA EL BIEN Y LA VIDA ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Aplicaciones sectoriales de alto impacto
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">IA para el Bien y la Vida</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                La aplicación de IA en servicios públicos es la llave para cerrar brechas históricas en la región, siempre que se aleje del "solucionismo tecnológico" vacío.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {SECTORAL_AI_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="pd-card bg-white p-6 space-y-3.5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: hexToRgba(card.color, 0.12), color: card.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="pd-fraunces text-lg font-black text-slate-900">{card.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ 8 SIMULADOR: ¿LIBRES BAJO INFLUENCIA? ══ */}
        <section id="simulador" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Simulador mente & entorno digital
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">¿Libres bajo Influencia?</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Aplicá los conceptos de Lawrence Lessig ("el código es ley"), Thaler & Sunstein ("nudges"), Daniel Kahneman (Sistema 1 vs. 2) y B.J. Fogg ("tecnología persuasiva") respondiendo ante simulaciones reales de la web.
              </p>
            </div>
            <InfluenceScenarioSimulator />
          </div>
        </section>

        {/* ══ 9 ÉTICA Y NUEVO CONSTITUCIONALISMO DIGITAL ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Los 4 laberintos del riesgo
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">Ética y Nuevo Constitucionalismo Digital</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Es urgente transitar de un "estado artificial de derecho" a un <strong className="text-slate-800">Constitucionalismo Social de la IA</strong>. La "IA Centauro" no reemplaza la agencia humana: coopera con ella, "juntos a la par".
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RISK_LABYRINTHS.map((lab) => {
                const Icon = lab.icon
                return (
                  <div key={lab.title} className="pd-card bg-white p-5 space-y-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: hexToRgba(lab.color, 0.12), color: lab.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="pd-fraunces font-black text-base text-slate-900">{lab.title}</h4>
                      <span className="pd-mono text-[10px] text-slate-400">{lab.thinkers}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {lab.items.map((item) => (
                        <li key={item} className="text-[11px] sm:text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: lab.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="pd-card bg-gradient-to-br from-indigo-50/60 to-violet-50/60 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                La <strong className="text-slate-900">"Algor-ética"</strong> debe ser el lenguaje de integración, traduciendo la dignidad humana a computación numérica. Esto incluye la protección de los <strong className="text-slate-900">neuro-derechos</strong> y el "derecho al switch off" frente a los hyper-nudges y patrones oscuros del e-commerce. La IA debe potenciar una <strong className="text-slate-900">Democracia Aumentada</strong> que enriquezca la deliberación, evitando el "secuestro de sufragios" mediante la microsegmentación proselitista.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 10 HOJA DE RUTA: 10 SALIDAS POSIBLES ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Fingerprint className="w-3.5 h-3.5" /> El Gran Proyecto Transformador (GPT) para América Latina
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-white">Hoja de Ruta: 10 Salidas Posibles</h2>
              <p className="text-slate-300 text-sm sm:text-base">
                La misión estratégica no es solo diseñar un "buen algoritmo" (eficiente), sino un <strong className="text-white">"algoritmo bueno"</strong> (ético): la "IA-Salmón" que nada contracorriente de la manipulación y el lucro ciego para proteger al ciudadano de los "hackeos cerebrales".
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ROADMAP_ITEMS.map((item, idx) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="w-7 h-7 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0 pd-mono">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-400 text-xs sm:text-sm italic max-w-2xl mx-auto">
              La IA debe ser siempre el co-piloto y nunca el juez final de nuestra existencia social. La primacía de la agencia humana es el único resguardo contra el vacío del determinismo tecnológico en el IA-Ceno.
            </p>
          </div>
        </section>

        {/* ══ 11 DASHBOARD ESTADÍSTICO OFICIAL ══ */}
        <section id="estadisticas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Datos y evidencia científica
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">Indicadores Oficiales de la Ciudadanía Digital</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Métricas extraídas de los informes de CEPAL, BID, CIAT, UNESCO y Dialnet sobre brechas de acceso, caducidad de competencias y uso significativo.
              </p>
            </div>

            <StatsDashboard />

            <div className="grid md:grid-cols-3 gap-6">
              {STAT_HIGHLIGHTS.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="p-6 rounded-2xl bg-white border border-slate-200">
                    <div className="flex items-center gap-3 mb-2" style={{ color: s.color }}>
                      <Icon className="w-5 h-5" />
                      <span className="font-bold text-slate-900 text-sm">{s.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ 12 CITA DE CIERRE ══ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Hexagon className="w-12 h-12 text-cyan-400 mx-auto opacity-80" />
            <h2 className="pd-fraunces text-2xl sm:text-4xl font-black leading-tight text-white">
              "{data.closingQuote}"
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* ══ 13 MATERIAL DE ESTUDIO ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">

              <div className="text-center space-y-3">
                <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                  // Material pedagógico y recursos
                </span>
                <h2 className="pd-fraunces text-3xl sm:text-5xl font-black text-slate-900">
                  Presentación en Slides e Infografía Visual
                </h2>
              </div>

              {data.pdfUrl && (
                <div className="space-y-4">
                  <h3 className="pd-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" /> Presentación interactiva (14 diapositivas en WebP)
                  </h3>
                  <div className="w-full max-w-4xl mx-auto">
                    <WebpSlideCarousel
                      totalSlides={14}
                      slidesBasePath="/img/tematicas/poliedro-ciudadania-digital/slides"
                      pdfDownloadUrl={data.pdfUrl}
                      title={data.title}
                      color={BLUE}
                    />
                  </div>
                </div>
              )}

              {data.infografiaUrl && (
                <div className="space-y-4">
                  <h3 className="pd-fraunces text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Images className="w-5 h-5 text-cyan-600" /> Infografía sintetizada
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
                        <ZoomIn className="w-5 h-5 text-blue-600" /> Ver a pantalla completa (acercar y desplazar)
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ══ 14 FUENTES ACADÉMICAS Y OFICIALES VERIFICADAS ══ */}
        <section id="fuentes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="pd-fraunces text-2xl sm:text-3xl font-black text-slate-900">
                  Fuentes Oficiales, Datos y Citas Verificables
                </h2>
              </div>
              <span className="pd-mono text-xs font-bold text-slate-600 bg-slate-200/80 px-3 py-1 rounded-full">
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
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="pd-mono text-xs font-bold text-blue-600 block">{cite.author}</span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {cite.title}
                    </h4>
                    <span className="text-xs text-slate-500 block">{cite.publication}</span>
                  </div>

                  {cite.stat && (
                    <div className="px-3 py-1.5 rounded-lg bg-blue-50/80 text-blue-950 pd-mono text-xs font-extrabold border border-blue-200/60">
                      📊 {cite.stat}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs pd-mono font-bold text-slate-600">
                    <span className="truncate pr-2">{cite.topic}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 14B MINI-TEST DE AUTOVERIFICACIÓN (práctica libre, sin puntaje) ══ */}
        <section id="test" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Práctica libre — no cuenta para tu progreso
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-4xl font-black text-slate-900">Test de Autoverificación Rápida</h2>
              <p className="text-slate-600 text-sm sm:text-base">Respondé estas 5 situaciones para evaluar tu autonomía y capacidad crítica ante sesgos algorítmicos. La evaluación que sí completa esta temática está más abajo.</p>
            </div>
            <MiniVerificationTest />
          </div>
        </section>

        {/* ══ 15 EVALUACIÓN INTERACTIVA (QUIZ) ══ */}
        <section id="evaluacion" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">

            <div className="text-center space-y-3 mb-10">
              <span className="pd-mono pd-badge text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-bold inline-block">
                // Autoevaluación interactiva
              </span>
              <h2 className="pd-fraunces text-3xl sm:text-4xl font-black text-slate-900">
                Cuestionario de Comprensión
              </h2>
              {previousResult && (
                <p className="pd-mono text-xs font-bold text-slate-500">
                  Último intento: {previousResult.score}/10
                </p>
              )}
            </div>

            {!showQuiz && (
              <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 shadow-xl space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl mx-auto flex items-center justify-center bg-blue-50 border-2 border-blue-200">
                  <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <p className="text-slate-800 font-extrabold text-base sm:text-lg max-w-md mx-auto">
                  {data.quizQuestions.length} preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla.
                </p>
                <button
                  onClick={startQuiz}
                  className="pd-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
                >
                  {previousResult ? 'Volver a hacer el quiz' : 'Comenzar evaluación'} <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {showQuiz && !showResults && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl space-y-6">

                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="pd-mono text-xs font-bold text-blue-600">
                    Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                  </span>
                </div>

                <h3 className="pd-fraunces text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </h3>

                <div className="space-y-3">
                  {currentQuestion?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestionIdx] === optIdx

                    let btnClass = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-blue-50 hover:border-blue-300'
                    if (isSelected) {
                      btnClass = 'bg-blue-600 border-blue-600 text-white font-bold shadow-md'
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

                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIdx === 0}
                    className={`px-5 py-2.5 rounded-full text-xs font-black border border-slate-300 hover:bg-slate-100 disabled:pointer-events-none text-center ${currentQuestionIdx === 0 ? 'opacity-0' : 'opacity-100'}`}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="pd-btn mr-16 sm:mr-0 px-6 py-3 sm:py-2.5 rounded-full text-xs font-black disabled:opacity-40 disabled:pointer-events-none cursor-pointer text-center"
                  >
                    {isLastQuestion ? 'Finalizar y ver resultado' : 'Siguiente'}
                  </button>
                </div>

              </div>
            )}

            {showQuiz && showResults && (
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                <Award className="w-16 h-16 text-cyan-400 mx-auto" />
                <h3 className="pd-fraunces text-2xl sm:text-3xl font-black">
                  {passed ? '¡Completaste esta temática!' : 'Todavía no llegaste al puntaje mínimo'}
                </h3>
                <p className="text-lg text-slate-300">
                  Obtuviste <strong className="text-cyan-400">{finalScore}</strong> de <strong>{data.quizQuestions.length}</strong> respuestas correctas.
                </p>
                <button
                  onClick={startQuiz}
                  className="pd-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base cursor-pointer"
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
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl border border-blue-400/40 backdrop-blur-md cursor-pointer transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
