// Contenido y citas de la temática "Alfabetización Mediática". Mismo patrón que
// lib/alfabetizacion-digital-content.ts: cada afirmación factual/estadística se
// atribuye a una fuente vía SourceCite, en vez de presentarse como hecho suelto.

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

// ── 01 · Hero — Concepto ──

export const MIL_QUOTE: Quote = {
  text: '"Media and Information Literacy" (MIL) — un conjunto de competencias que permiten a las personas comprender la función de los medios y otros proveedores de información, evaluar críticamente su contenido, y tomar decisiones informadas como usuarios y productores de información y contenido mediático.',
  source: { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' },
};

export const MIL_ORIGEN_QUOTE: Quote = {
  text: 'UNESCO formalizó este marco unificado en 2007, integrando la alfabetización mediática y la alfabetización informacional, antes tratadas por separado.',
  source: { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' },
};

export const MIL_DOCENTES_QUOTE: Quote = {
  text: 'UNESCO tiene un marco específico llamado "Media and Information Literacy Competency Framework for Teachers" — un documento oficial pensado exactamente para este público.',
  source: { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' },
};

// ── 02 · Historia — Infoxicación ──

export const INFOXICACION_QUOTE: Quote = {
  text: 'El término "infoxicación" fue acuñado en 1996 por Alfons Cornellà, consultor catalán especializado en gestión de información, para nombrar la situación de exceso informacional en la que una persona recibe más información de la que puede procesar.',
  source: {
    author: 'Centro Virtual Cervantes (Instituto Cervantes)',
    url: 'https://blogscvc.cervantes.es/martes-neologico/infoxicacion/',
  },
};

export const INFOXICACION_ATRIBUCION_NOTA =
  'Algunas fuentes atribuyen la acuñación original en inglés al psicólogo David Lewis, y a Cornellà el mérito de adaptarlo y popularizarlo en español con el sentido que usamos hoy.';

export const INFOXICACION_AGRAVAMIENTO_QUOTE: Quote = {
  text: 'El problema que describe Cornellà se agravó con las redes sociales, y es parte de lo que llevó a UNESCO a formalizar el marco MIL en 2007 como respuesta educativa estructurada.',
  source: { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' },
};

// ── 03 · Características — Framework C.A.F.E. (sin cambios, sin cita nueva) ──

export const CAFE_CARDS = [
  {
    letter: 'C',
    title: 'Contexto',
    emoji: '🕰️',
    back: '¿Es información vigente o material reciclado sacado de su eje temporal?',
    from: 'from-indigo-500',
    to: 'to-blue-600',
    border: 'border-indigo-400',
    hover: 'group-hover:from-indigo-200 group-hover:to-indigo-300',
    hoverBorder: 'group-hover:border-indigo-200',
  },
  {
    letter: 'A',
    title: 'Autoría',
    emoji: '✍️',
    back: '¿Existe una firma verificable o el emisor se oculta en el anonimato?',
    from: 'from-violet-500',
    to: 'to-purple-600',
    border: 'border-violet-400',
    hover: 'group-hover:from-violet-200 group-hover:to-violet-300',
    hoverBorder: 'group-hover:border-violet-200',
  },
  {
    letter: 'F',
    title: 'Fuentes',
    emoji: '🔗',
    back: '¿Se proporcionan enlaces a datos crudos o estudios metodológicos?',
    from: 'from-fuchsia-500',
    to: 'to-pink-600',
    border: 'border-fuchsia-400',
    hover: 'group-hover:from-fuchsia-200 group-hover:to-fuchsia-300',
    hoverBorder: 'group-hover:border-fuchsia-200',
  },
  {
    letter: 'E',
    title: 'Emoción',
    emoji: '⚠️',
    back: '¿El titular está diseñado para detonar indignación, miedo o urgencia?',
    from: 'from-rose-500',
    to: 'to-red-600',
    border: 'border-rose-400',
    hover: 'group-hover:from-rose-200 group-hover:to-rose-300',
    hoverBorder: 'group-hover:border-rose-200',
  },
];

// ── 04 · Tipos o variantes — Desorden informativo ──

export const DISORDER_SOURCE: Source = {
  author: 'Wardle, C. & Derakhshan, H. (2017)',
  note: 'Information Disorder: Toward an interdisciplinary framework for research and policy making — Council of Europe',
  url: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c',
};

export const DISORDER_TYPES = [
  {
    id: 'desinformacion',
    titulo: 'Desinformación',
    desc: 'Información falsa y creada deliberadamente para dañar a una persona, grupo social, organización o país.',
  },
  {
    id: 'misinformacion',
    titulo: 'Misinformación',
    desc: 'Información falsa, pero no creada con intención de dañar.',
  },
  {
    id: 'malinformacion',
    titulo: 'Malinformación',
    desc: 'Información basada en la realidad (verídica), usada para infligir daño a una persona, organización o país — por ejemplo, filtrar información privada real con intención de perjudicar.',
  },
];

export const DISORDER_NOTA_DOCENTE =
  'Esta distinción es más útil en el aula que hablar genéricamente de "fake news" — los propios autores del marco evitan ese término a propósito, porque simplifica demasiado un fenómeno donde intención y veracidad son dos ejes independientes.';

// ── 05 · Ejemplos concretos — Las 3 fases (sin cambios) ──

export interface FaseEjemplo {
  id: string;
  emoji: string;
  badge: string;
  badgeClass: string;
  titulo: string;
  intro: string;
  metodologia: string;
  caso: string;
  labTitulo: string;
  labTexto: string;
  labBoton: string;
  accentClass: string;
  gradClass: string;
  shadowClass: string;
  labTextClass: string;
  labBotonTextClass: string;
  labBotonHoverClass: string;
}

export const EJEMPLOS_FASES: FaseEjemplo[] = [
  {
    id: 'paso1',
    emoji: '🚀',
    badge: 'Búsqueda y Filtro',
    badgeClass: 'bg-brand-blue/10 text-brand-blue',
    titulo: 'Fase 1: Investigá la Fuente (Lectura Lateral)',
    intro: 'Desarrollá el hábito de abandonar temporalmente la página de origen para verificar su reputación en ecosistemas externos.',
    metodologia:
      'Cuando un contenido capte tu atención, no asumas su veracidad por la estética del sitio. Aplicá "lectura lateral": abrí nuevas pestañas y buscá qué opinan verificadores independientes sobre esa fuente específica.',
    caso: '"El café destruye tu memoria" (Publicado en SaludTotalHoy). Al investigar en otra pestaña, los resultados indican que es una granja de contenido falso diseñada para generar ingresos por publicidad.',
    labTitulo: 'Laboratorio Práctico',
    labTexto:
      'Identificá la primera noticia que veas en tus redes. Antes de leerla, abrí una pestaña nueva y buscá el nombre del sitio + "credibilidad". Podés repetir el mismo ejercicio con tu curso, usando una noticia que ellos mismos hayan visto circular esa semana.',
    labBoton: 'Misión Aceptada',
    accentClass: 'text-brand-blue',
    gradClass: 'from-brand-blue to-brand-navy',
    shadowClass: 'shadow-brand-blue/20',
    labTextClass: 'text-brand-light-blue/90',
    labBotonTextClass: 'text-brand-navy',
    labBotonHoverClass: 'hover:bg-brand-light-blue',
  },
  {
    id: 'paso2',
    emoji: '🕵️‍♂️',
    badge: 'Evaluación de Evidencia',
    badgeClass: 'bg-brand-pink/10 text-brand-pink',
    titulo: 'Fase 2: El Detector Analítico (Análisis de Sesgos)',
    intro: 'Separar rigurosamente los datos empíricos de las afirmaciones emocionales o especulativas.',
    metodologia:
      'La desinformación está diseñada para hackear tus emociones. Neutralizala auditando el lenguaje: buscá adjetivos dramáticos y verificá los enlaces salientes. Si afirman "un estudio lo prueba" pero no hay enlace a la fuente primaria, clasificalo como sospechoso.',
    caso: 'Mensaje viral: "¡URGENTE! Ley confisca ahorros hoy". Análisis: Carencia de número de ley, omisión de fechas, lenguaje alarmista. Veredicto: Intento de manipulación emocional.',
    labTitulo: 'Laboratorio Práctico',
    labTexto:
      'Tomá un mensaje polémico reciente —puede ser uno que haya circulado en el grupo de WhatsApp del curso o entre las familias— y aplicá la matriz de 3 puntos: 1. Autoría, 2. Evidencia documentada, 3. Ganancia emocional del emisor.',
    labBoton: 'Aplicar Matriz',
    accentClass: 'text-brand-pink',
    gradClass: 'from-brand-pink to-brand-navy',
    shadowClass: 'shadow-brand-pink/20',
    labTextClass: 'text-white/80',
    labBotonTextClass: 'text-brand-pink',
    labBotonHoverClass: 'hover:bg-rose-50',
  },
  {
    id: 'paso3',
    emoji: '🛡️',
    badge: 'Consumo Responsable',
    badgeClass: 'bg-cyan-100 text-cyan-800',
    titulo: 'Fase 3: El Protocolo Cortafuegos',
    intro: 'Asumir responsabilidad algorítmica y detener la propagación de cadenas de datos no verificados.',
    metodologia:
      'Antes de redistribuir, asumí la autoría moral del contenido. Implementá un delay cognitivo: si no lográs verificar la información en 60 segundos, abortá la acción de compartir.',
    caso: 'Foto impactante solicitando donaciones por catástrofe. Acción: búsqueda inversa de imagen en Google. Resultado: la foto es de otro continente hace 5 años.',
    labTitulo: 'Laboratorio Práctico',
    labTexto:
      'Configurá mentalmente un "Delay de 10 segundos". Ante un contenido que genere ira o urgencia, contá hasta 10 antes de tocar compartir — y proponeles a tus estudiantes la misma pausa antes de reenviar algo al grupo del curso.',
    labBoton: 'Activar Delay',
    accentClass: 'text-cyan-500',
    gradClass: 'from-cyan-600 to-brand-navy',
    shadowClass: 'shadow-cyan-500/20',
    labTextClass: 'text-cyan-100',
    labBotonTextClass: 'text-cyan-800',
    labBotonHoverClass: 'hover:bg-cyan-50',
  },
];

// ── 06 · Ventajas ──

export const VENTAJAS_QUOTE: Quote = {
  text: 'La alfabetización mediática e informacional está en el núcleo de la libertad de expresión y de información — empodera a las personas para comprender la función de los medios, evaluar críticamente su contenido, y tomar decisiones informadas. Estas iniciativas buscan fortalecer sociedades mejor informadas, más participativas y más resilientes frente a los desafíos del entorno informativo contemporáneo.',
  source: { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' },
};

// ── 07 · Riesgos — Vulnerabilidades cognitivas ──

export const WASON_SOURCE: Source = {
  author: 'Wason, P. C. (1960)',
  note: '"On the failure to eliminate hypotheses in a conceptual task." Quarterly Journal of Experimental Psychology, 12, 129-140',
};

export const WASON_QUOTE: Quote = {
  text: 'Descripto por primera vez por el psicólogo británico Peter Wason en 1960, a partir de un experimento donde las personas buscaban sistemáticamente evidencia que confirmara sus hipótesis en vez de ponerlas a prueba.',
  source: WASON_SOURCE,
};

export const THORNDIKE_SOURCE: Source = {
  author: 'Thorndike, E. L. (1920)',
  note: '"A Constant Error in Psychological Ratings." Journal of Applied Psychology, 4, 25-29',
};

export const THORNDIKE_QUOTE: Quote = {
  text: 'Identificado por el psicólogo estadounidense Edward Thorndike en 1920, en un estudio sobre cómo oficiales militares evaluaban a sus subordinados: una impresión general (buena o mala) distorsionaba la evaluación de rasgos específicos no relacionados. Thorndike mismo señaló que este sesgo también aparece en el aula, cuando una impresión general sobre un estudiante contamina la evaluación de aspectos puntuales de su trabajo.',
  source: THORNDIKE_SOURCE,
};

export const VULNERABILITIES = [
  {
    emoji: '🪞',
    title: 'Sesgo de Confirmación',
    desc: 'Aceptar automáticamente información que valida creencias preexistentes, reduciendo el rigor analítico.',
    bg: 'bg-rose-50 text-rose-500',
    hover: 'group-hover:bg-rose-500 group-hover:text-white',
    quote: WASON_QUOTE,
  },
  {
    emoji: '😇',
    title: 'Efecto "Halo"',
    desc: 'Transferir autoridad en temas complejos a emisores populares o carismáticos sin credenciales verificables.',
    bg: 'bg-amber-50 text-amber-500',
    hover: 'group-hover:bg-amber-500 group-hover:text-white',
    quote: THORNDIKE_QUOTE,
  },
  {
    emoji: '🧊',
    title: 'Análisis Superficial',
    desc: 'Considerar el titular como un resumen fiel, ignorando que su función principal de diseño es generar clicks.',
    bg: 'bg-blue-50 text-blue-500',
    hover: 'group-hover:bg-blue-500 group-hover:text-white',
    quote: null,
  },
];

// ── 08 · Aula — Síntesis, FAQ y Secuencia de Arranque ──

export const AULA_SINTESIS =
  'UNESCO tiene un marco específico para esto — el MIL Competency Framework for Teachers — que confirma que dirigir esta temática a docentes no es una adaptación forzada: la alfabetización mediática e informacional está pensada, desde su origen institucional, para formar primero a quien va a formar a otros. El framework C.A.F.E. y el checklist de 5 ítems son exactamente el tipo de herramienta operativa que ese marco pide — y la distinción entre misinformación/desinformación/malinformación le da al docente un vocabulario más preciso que "fake news" para trabajar con el curso.';

export const AULA_SINTESIS_SOURCE: Source = { author: 'UNESCO', url: 'https://www.unesco.org/en/ami' };

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    q: '¿El proceso de validación retrasa el consumo?',
    a: 'La curva de aprendizaje inicial requiere una inversión de tiempo. Sin embargo, al incorporar el método C.A.F.E. como un hábito mental, el cerebro optimiza la detección de información falsa en milisegundos.',
  },
  {
    id: 'faq2',
    q: 'Manejo de conflictos al corregir a un estudiante',
    a: 'Sé amable al corregir: separar a la persona del error hace que sea más fácil que lo acepte, sobre todo frente al resto del curso. Formato sugerido: "Esta noticia está armada de forma confusa; veamos juntos qué dicen las fuentes originales..."',
  },
];

export const SECUENCIA_ARRANQUE = [
  {
    n: '01',
    titulo: 'Limpiá tus redes',
    texto: 'Dejá de seguir al menos 3 cuentas que compartan información sin citar fuentes confiables (podés proponerles a tus estudiantes que hagan el mismo ejercicio con sus propias redes).',
  },
  {
    n: '02',
    titulo: 'Mejorá lo que te muestra la red',
    texto: 'Seguí cuentas de verificadores de noticias confiables para que el algoritmo te muestre contenido de mejor calidad.',
  },
];

// ── 09 · Centro de recursos ──

export const CHECKLIST_ITEMS = [
  { id: 'c1', text: 'He analizado el cuerpo completo del documento, excediendo la lectura del titular.' },
  { id: 'c2', text: 'He contrastado el dominio de origen mediante "Lectura Lateral" en plataformas independientes.' },
  { id: 'c3', text: 'La fecha de publicación y el contexto original han sido verificados.' },
  { id: 'c4', text: 'El material multimedia ha superado una prueba de búsqueda inversa.' },
  { id: 'c5', text: 'La intención de distribución es objetiva y carece de sesgo emocional impulsivo.' },
];

export interface FuenteCitada {
  n: number;
  label: string;
  url?: string;
  note?: string;
}

export const FUENTES_COMPLETAS: FuenteCitada[] = [
  { n: 1, label: 'UNESCO — Media and Information Literacy (MIL)', url: 'https://www.unesco.org/en/ami' },
  { n: 2, label: 'Centro Virtual Cervantes (Instituto Cervantes) — infoxicación, Alfons Cornellà (1996)', url: 'https://blogscvc.cervantes.es/martes-neologico/infoxicacion/' },
  { n: 3, label: 'Wardle, C. & Derakhshan, H. (2017) — Council of Europe, Information Disorder', url: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c' },
  { n: 4, label: 'Wason, P. C. (1960) — Quarterly Journal of Experimental Psychology, 12, 129-140', note: 'referencia bibliográfica estándar, sin edición digital gratuita' },
  { n: 5, label: 'Thorndike, E. L. (1920) — Journal of Applied Psychology, 4, 25-29', note: 'referencia bibliográfica estándar, sin edición digital gratuita' },
];

// ── Infografía y carrusel (assets existentes, sin cambios) ──

export const INFOGRAFIA_PATH = '/weekly-content/2026-W20/infografia%202.svg';

export const CARRUSEL_IMAGES = Array.from({ length: 7 }, (_, i) =>
  `/weekly-content/2026-W20/carrusel/${i + 1}.svg`
);
