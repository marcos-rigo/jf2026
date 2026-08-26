// Contenido y citas de la temática "Alfabetización Digital". Mismo patrón que
// lib/ciudadania-digital-content.ts, lib/huella-digital-content.ts y
// lib/hiperconectividad-digital-content.ts: cada afirmación factual/estadística
// se atribuye a una fuente vía SourceCite, en vez de presentarse como hecho suelto.

export interface Source {
  author: string;
  note?: string;
  url?: string;
  unverified?: boolean;
}

export interface Quote {
  text: string;
  source: Source;
}

// ── 01 · Hero ──

export const CONCEPTO_QUOTE: Quote = {
  text: 'La alfabetización digital es un constructo holístico que integra dimensiones técnicas, cognitivas y socioemocionales — la intersección entre saber operar dispositivos, procesar información con criterio, y comportarse de forma ética y colaborativa en entornos digitales mediados.',
  source: {
    author: 'Ng, W. (2012)',
    note: 'modelo holístico e integrador de aprendizaje tecnológico — intersección de las dimensiones técnica, cognitiva y socioemocional',
  },
};

// ── 02 · Historia / origen — genealogía teórica ──

export const GILSTER_QUOTE: Quote = {
  text: 'La visión pionera de Gilster definió la alfabetización digital como la capacidad de comprender y usar información de múltiples formatos y fuentes cuando se presenta a través de computadoras — evaluación de contenidos, navegación no lineal e integración informacional.',
  source: { author: 'Paul Gilster (1997)', note: 'Digital Literacy, Wiley — la primera definición académica del término' },
};

export const ESHET_ALKALAI_SOURCE: Source = {
  author: 'Yoram Eshet-Alkalai (2012)',
  note: 'marco de diseño cognitivo y de comportamiento en entornos interactivos — habilidades socioemocionales, pensamiento ramificado, pensamiento en tiempo real, informacional y de reproducción',
};

export const NG_SOURCE: Source = CONCEPTO_QUOTE.source;

export const SPIRES_BARTLETT_QUOTE: Quote = {
  text: 'Un proceso operativo y secuencial de apropiación web en tres momentos: acceso efectivo a la información, producción estructurada de contenido, e intercambio responsable.',
  source: { author: 'Spires, H. & Bartlett, M. (2012)' },
};

export const MARTIN_GRUDZIECKI_QUOTE: Quote = {
  text: 'Una competencia para la transformación social y el ejercicio del pensamiento crítico, en tres niveles progresivos: (1) alfabetización instrumental, (2) uso digital aplicado, (3) transformación digital crítica.',
  source: { author: 'Martin, A. & Grudziecki, J. (2013)' },
};

// ── 03 · Características — 5 dimensiones (Eshet-Alkalai) ──

export interface Dimension {
  titulo: string;
  desc: string;
}

export const DIMENSIONES: Dimension[] = [
  {
    titulo: 'Alfabetización socioemocional',
    desc: 'Centrada en los aspectos relacionales y éticos; promueve la colaboración virtual y el comportamiento responsable en entornos digitales mediadores.',
  },
  {
    titulo: 'Pensamiento ramificado (branching literacy)',
    desc: 'Destreza cognitiva para navegar con fluidez en arquitecturas de información no lineales, construyendo sentido en espacios hipertextuales.',
  },
  {
    titulo: 'Pensamiento en tiempo real',
    desc: 'Capacidad de procesar simultáneamente flujos dinámicos de información y estímulos rápidos — crítica ante la saturación de datos actual.',
  },
  {
    titulo: 'Alfabetización informacional',
    desc: 'Competencia para buscar, filtrar y evaluar críticamente la validez y los sesgos de los datos digitales, combatiendo activamente la desinformación.',
  },
  {
    titulo: 'Alfabetización de reproducción',
    desc: 'Capacidad creativa para la decodificación multimodal y la creación de nuevos contenidos mediante remezcla y lenguajes gráficos complejos.',
  },
];

// ── 04 · Tipos o variantes ──

export const NIVELES_BRECHA = [
  {
    nivel: 'Nivel 1 — Acceso',
    desc: 'Conectividad física: fibra óptica, dispositivos, cobertura. La brecha "clásica" de los años 90, hoy insuficiente por sí sola para explicar la desigualdad digital.',
  },
  {
    nivel: 'Nivel 2 — Uso',
    desc: 'Habilidades operativas y competencias para usar efectivamente las herramientas disponibles, más allá de tenerlas encendidas.',
  },
  {
    nivel: 'Nivel 3 — Aprovechamiento',
    desc: 'Capacidad de transformar la tecnología en beneficios tangibles: calidad de vida, movilidad laboral, ingresos y participación ciudadana.',
  },
];

export const DIGCOMP_AREAS = [
  'Información y datos',
  'Comunicación y colaboración',
  'Creación de contenidos y pensamiento computacional',
  'Seguridad, bienestar digital y huella ambiental',
  'Resolución de problemas',
];

export const DIGCOMP_SOURCE: Source = {
  author: 'Comisión Europea — Joint Research Centre',
  note: 'DigComp 3.0: The Digital Competence Framework for Citizens — 5 áreas, integración transversal de IA (habilidades explícitas AI-E e implícitas AI-I), niveles de proficiencia Básico/Intermedio/Avanzado/Altamente Avanzado',
  url: 'https://joint-research-centre.ec.europa.eu/projects-and-activities/key-competences-lifelong-learning/digital-competence-framework-digcomp/digcomp-30_en',
};

export const DIGCOMPALC_QUOTE: Quote = {
  text: 'Un marco regional para América Latina y el Caribe, basado en la estructura del Marco Europeo DigComp 2.2 pero adaptado mediante metodología de codiseño a las realidades de la región: 10 niveles granulares agrupados en 5 categorías. El Nivel Prebásico (niveles 1 y 2) tiene valor propio para visibilizar a grupos en exclusión extrema — comunidades rurales, adultos mayores, pueblos indígenas y migrantes — que los marcos tradicionales, pensados desde el piso europeo, no logran registrar.',
  source: {
    author: 'María Florencia Ripani (2026)',
    note: 'CEPAL, Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC) — LC/TS.2026/44',
    url: 'https://www.cepal.org/es/publicaciones/90120-marco-regional-competencias-digitales-america-latina-caribe-digcompalc',
  },
};

export const INDICE_CIUDADANIA_DIGITAL = {
  basicas: { completas: 54, ninguna: 5 },
  intermedias: { completas: 19 },
  avanzadas: { completas: 7, ninguna: 47.1 },
  source: {
    author: 'Fundación País Digital',
    note: 'Índice de Ciudadanía Digital, diagnóstico Chile 2024 — metodología alineada con SEP México',
    url: 'https://paisdigital.org/portfolio-item/indice-de-ciudadania-digital/',
  } as Source,
  sourceBcn: {
    author: 'Biblioteca del Congreso Nacional de Chile (BCN)',
    note: 'Estudio de Alfabetismo Digital y Competencias — informe N.º 34/25',
    url: 'https://www.bcn.cl/obtienearchivo?id=repositorio/10221/37647/1/Informe_34_25_Alfabetismo_digital_en_Chile.pdf',
  } as Source,
};

// ── 05 · Ejemplos concretos ──

export const EJEMPLOS = {
  basico: {
    titulo: 'Nivel Básico',
    items: [
      'Conexión a redes WiFi',
      'Descarga y organización de archivos y carpetas',
      'Uso de procesadores de texto',
      'Aplicaciones de mensajería y redes sociales',
    ],
  },
  intermedio: {
    titulo: 'Nivel Intermedio',
    items: [
      'Búsqueda autónoma de soluciones a fallos técnicos',
      'Trámites en plataformas de gobierno electrónico',
      'Colaboración en la nube',
      'Creación de prompts estructurados para IA generativa (ChatGPT, Claude, Gemini)',
    ],
  },
  avanzado: {
    titulo: 'Nivel Avanzado / Altamente Especializado',
    items: [
      'Programación y lógica algorítmica (ej. Python)',
      'Administración de bases de datos relacionales',
      'Despliegue de sistemas seguros',
      'Automatización de flujos de trabajo',
    ],
  },
};

// ── 06 · Ventajas — retorno socioeconómico ──

export const PIB_QUOTE: Quote = {
  text: 'Un incremento del 1.9% en el PIB per cápita por cada 10% de aumento en la penetración de banda ancha fija en las Américas — un contrapeso medible a la baja productividad regional.',
  source: { author: 'Análisis econométrico regional, citado en el informe de referencia de esta temática', note: 'método Entropy-TOPSIS aplicado al Índice de Alfabetización Digital (Di)' },
};

export const MERCADO_LABORAL_QUOTE: Quote = {
  text: 'El 80% de las vacantes en "middle-skill jobs" exige competencias digitales. Ante el riesgo de que la IA automatice el 44% de las tareas laborales en América Latina, desarrollar estas habilidades es la vía principal para evitar una obsolescencia masiva de la fuerza laboral — y el índice de alfabetización digital (Di) se correlaciona positivamente con mayores ingresos salariales.',
  source: { author: 'Análisis econométrico regional, citado en el informe de referencia de esta temática' },
};

// ── 07 · Riesgos ──

export const RIESGOS = [
  {
    titulo: 'La ilusión del acceso',
    desc: 'Tener conectividad física (brecha de primer nivel) no resuelve la desigualdad si no existe capacitación cognitiva para aprovecharla (brecha de segundo nivel) — confundir ambas lleva a políticas que instalan fibra óptica sin formar a nadie para usarla.',
  },
  {
    titulo: 'Brechas interseccionales',
    desc: 'Aislamiento digital de personas mayores de 60 años, y brecha de género persistente en habilidades digitales avanzadas y sectores STEM.',
  },
  {
    titulo: 'Desinformación masiva',
    desc: 'Vulnerabilidad frente a bulos, polarización algorítmica y contenidos sintéticos manipulados (deepfakes) — la alfabetización informacional es la principal defensa disponible.',
  },
  {
    titulo: 'Invisibilidad de minorías',
    desc: 'Comunidades rurales, pueblos indígenas y personas migrantes quedan fuera de los marcos de medición tradicionales cuando no se registra el Nivel Prebásico.',
  },
];

// ── 08 · Para el aula — rol docente ──

export const AULA_PUNTOS = [
  {
    titulo: 'Apropiación pedagógica',
    desc: 'El docente alfabetizado digitalmente diseña experiencias de aprendizaje contextualizadas, en vez de imponer tecnología por imposición institucional sin sentido pedagógico propio.',
  },
  {
    titulo: 'Superación de barreras familiares',
    desc: 'La escuela cumple un rol mediador clave para mitigar la falta de andamiaje y competencias digitales en los hogares más vulnerables.',
  },
  {
    titulo: 'Desarrollo profesional continuo',
    desc: 'Formación permanente en comunidades de práctica docente: evaluación digital formativa, alfabetización mediática frente a desinformación y deepfakes, y uso ético de la IA en la enseñanza.',
  },
];

// ── 09 · Centro de recursos — casos de política pública ──

export const CASOS_EXITO = [
  {
    pais: 'Chile',
    titulo: 'Plan Ciudadanía y Alfabetización Digital 2024-2025',
    desc: 'Esfuerzo conjunto entre la SEGEGOB y el MINEDUC. Su foco trasciende lo técnico para abordar la desinformación y la ética desde la alfabetización mediática.',
  },
  {
    pais: 'México',
    titulo: '@prende 2.0 y Habilidades Digitales para Todos',
    desc: 'Programas que buscan la integración curricular sistemática de las TIC en la educación básica.',
  },
  {
    pais: 'Uruguay',
    titulo: 'Plan Ceibal',
    desc: 'Referente global que evolucionó de la entrega de dispositivos a un proyecto socio-educativo integral enfocado en cerrar la brecha de oportunidades.',
  },
  {
    pais: 'Internacional',
    titulo: 'Apps and Girls (Tanzania), Robotito (Argentina), RoboBraille (Dinamarca)',
    desc: 'Iniciativas enfocadas en paridad de género en tecnología y en inclusión de personas con discapacidad visual.',
  },
];

export const CASOS_EXITO_SOURCE: Source = {
  author: 'Cooperación regional eLAC2026 (CEPAL)',
  note: 'Agenda digital para América Latina y el Caribe — casos sistematizados en el informe de referencia de esta temática',
  url: 'https://elac.cepal.org/',
};

// ── Fuentes citadas — listado completo ──

export interface FuenteCitada {
  n: number;
  label: string;
  url?: string;
  note?: string;
}

export const FUENTES_COMPLETAS: FuenteCitada[] = [
  { n: 1, label: 'María Florencia Ripani (2026) — CEPAL, Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC)', url: 'https://www.cepal.org/es/publicaciones/90120-marco-regional-competencias-digitales-america-latina-caribe-digcompalc' },
  { n: 2, label: 'Comisión Europea — JRC, DigComp 3.0: The Digital Competence Framework for Citizens', url: 'https://joint-research-centre.ec.europa.eu/projects-and-activities/key-competences-lifelong-learning/digital-competence-framework-digcomp/digcomp-30_en' },
  { n: 3, label: 'CEPAL — Agenda digital para América Latina y el Caribe (eLAC2026)', url: 'https://elac.cepal.org/' },
  { n: 4, label: 'Biblioteca del Congreso Nacional de Chile (BCN) — Estudio de Alfabetismo Digital y Competencias', url: 'https://www.bcn.cl/obtienearchivo?id=repositorio/10221/37647/1/Informe_34_25_Alfabetismo_digital_en_Chile.pdf' },
  { n: 5, label: 'Fundación País Digital — Índice de Ciudadanía Digital', url: 'https://paisdigital.org/portfolio-item/indice-de-ciudadania-digital/' },
  { n: 6, label: 'Paul Gilster (1997) — Digital Literacy, Wiley', note: 'sin edición digital oficial gratuita para linkear' },
  { n: 7, label: 'Yoram Eshet-Alkalai (2012) — marco de las 5 dimensiones de alfabetización digital', note: 'sin link oficial verificado' },
  { n: 8, label: 'Ng, W. (2012) — modelo holístico técnico/cognitivo/socioemocional', note: 'sin link oficial verificado' },
  { n: 9, label: 'Spires, H. & Bartlett, M. (2012) — acceso, producción e intercambio', note: 'sin link oficial verificado' },
  { n: 10, label: 'Martin, A. & Grudziecki, J. (2013) — niveles instrumental/aplicado/transformación crítica', note: 'sin link oficial verificado' },
];

// ── Secciones del índice de navegación (TOC) ──

export interface TocSection {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: 'hero', number: '00', label: 'Inicio', shortLabel: 'Inicio' },
  { id: 'historia', number: '01', label: 'Genealogía Teórica', shortLabel: 'Historia' },
  { id: 'caracteristicas', number: '02', label: 'Dimensiones Críticas', shortLabel: 'Rasgos' },
  { id: 'tipos-variantes', number: '03', label: 'Niveles y Marcos', shortLabel: 'Niveles' },
  { id: 'ejemplos-concretos', number: '04', label: 'Ejemplos Concretos', shortLabel: 'Ejemplos' },
  { id: 'ventajas', number: '05', label: 'Retorno Socioeconómico', shortLabel: 'Ventajas' },
  { id: 'riesgos', number: '06', label: 'Riesgos y Desafíos', shortLabel: 'Riesgos' },
  { id: 'aula', number: '07', label: 'Rol Docente', shortLabel: 'Aula' },
  { id: 'recursos', number: '08', label: 'Centro de Recursos', shortLabel: 'Recursos' },
];
