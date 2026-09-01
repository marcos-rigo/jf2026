// Fuentes citadas de la temática "Cibercrianza" — mismo patrón que lib/huella-digital-content.ts
// (Source/Quote tipados, separados de la JSX). preguntas, perfiles, tabla, preguntasLimites,
// senalesAlerta, preguntasDialogo, ecosistema y compromisos son ejercicios/herramientas, no
// afirmaciones factuales, y quedan fuera de este archivo.

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

// Fuente única de las 4 cifras de "La realidad en números", del ítem "La autonomía prematura"
// (desafíos) y de los datos de sextorsión y uso problemático de pantallas (riesgos).
export const KIDS_ONLINE_SOURCE: Source = {
  author: "UNICEF Argentina / UNESCO",
  note: "Encuesta Kids Online Argentina 2025 — 5.910 estudiantes de 9 a 17 años, 291 escuelas, 20 jurisdicciones (oct-dic 2024)",
  url: "https://www.unicef.org/argentina/media/24906/file/Encuesta%20Kids%20Online%20Argentina:%20Resultados%20principales.pdf",
};

export const BULLYING_SIN_FRONTERAS_SOURCE: Source = {
  author: "Bullying Sin Fronteras",
  note: "2025",
  url: "https://bullyingsinfronteras.blogspot.com/2022/02/estadisticas-de-bullying-en-la.html",
};

// No se pudo verificar un informe primario "Grooming LATAM 2024" — se marca como sin verificar
// en vez de presentarla como una cita confirmada.
export const GROOMING_LATAM_SOURCE: Source = {
  author: "Grooming LATAM",
  note: "2024 — fuente no verificada con link primario",
  unverified: true,
};

// Marco conceptual de mediación parental — ancla la sección "Concepto" y la nota general
// de "estilos" (Acompañante/Permisivo/Restrictivo).
export const MEDIACION_PARENTAL_QUOTE: Quote = {
  text: "La investigación académica sobre mediación parental distingue estrategias de mediación activa/habilitante (diálogo, co-uso, acompañamiento) de estrategias de mediación restrictiva (prohibición, control técnico) — la primera permite explorar oportunidades dentro de un entorno de apoyo; la segunda reduce riesgos pero también reduce oportunidades.",
  source: {
    author: "Livingstone, S. & Helsper, E. J.",
    note: '"Parental Mediation of Children\'s Internet Use." Journal of Broadcasting & Electronic Media, 52(4), 581-599 (2008)',
    url: "https://www.tandfonline.com/doi/abs/10.1080/08838150802437396",
  },
};

// ── Historia / origen ──

export const BYBEE_QUOTE: Quote = {
  text: 'El estudio original que identificó 3 estilos de mediación parental —restrictivo, evaluativo/orientador y desenfocado— fue publicado por Carl Bybee, Danny Robinson y Joseph Turow en 1982, sobre el consumo de televisión en la infancia. Décadas después, Sonia Livingstone y Ellen Helsper (2008) adaptaron ese mismo marco a internet, dando origen al campo que hoy se conoce como "mediación parental digital".',
  source: {
    author: "Bybee, C., Robinson, D. & Turow, J.",
    note: '"Determinants of Parental Guidance of Children\'s Television Viewing for a Special Subgroup: Mass Media Scholars." Journal of Broadcasting, 26, 697-710 (1982) — cita bibliográfica estándar, sin versión digital gratuita',
  },
};

export const GLOBAL_KIDS_ONLINE_QUOTE: Quote = {
  text: "La Red Global Kids Online fue fundada en 2006 por el Centro de Investigación Innocenti de UNICEF, la London School of Economics (LSE) y la Red Europea de Kids Online, para generar evidencia comparada sobre la vida de niñas, niños y adolescentes en el entorno digital en todo el mundo. El informe Kids Online Argentina 2025, que ya citamos en esta página, es parte de esa red.",
  source: {
    author: "UNESCO",
    note: "Global Kids Online",
    url: "https://www.unesco.org/es/articles/kids-online",
  },
};

// ── Ventajas / lo positivo ──

export const UNICEF_BENEFICIOS_QUOTE: Quote = {
  text: "Internet y las plataformas digitales pueden ser herramientas poderosas para fomentar la creatividad, el aprendizaje y las conexiones sociales de niñas, niños y adolescentes. También es un lugar clave para expresar opiniones e informarse: la tecnología les permite compartir su voz sobre temas importantes, y acceder a contenido que promueve su aprendizaje y bienestar.",
  source: {
    author: "UNICEF",
    note: "Cómo Internet puede potenciar el aprendizaje, la creatividad y los vínculos de niños, niñas y adolescentes",
    url: "https://www.unicef.org/uruguay/crianza/digital/como-Internet-puede-potenciar-el-aprendizaje-creatividad-y-v%C3%ADnculos-de-ni%C3%B1os-ni%C3%B1as-y-adolescentes",
  },
};

export const MESAS_DIALOGO_QUOTE: Quote = {
  text: "Las prácticas más frecuentes de niñas, niños y adolescentes en internet se relacionan con el aprendizaje, el entretenimiento y la socialización.",
  source: {
    author: "UNICEF Argentina",
    note: "Mesas de diálogo, Kids Online Argentina 2025",
    url: "https://www.unicef.org/argentina/media/26846/file/Ni%C3%B1as,%20ni%C3%B1os%20y%20adolescentes%20conectados.%20Kids%20Online%20Argentina%202025%20-%20Mesas%20de%20di%C3%A1logo.pdf.pdf",
  },
};

// ── Centro de recursos — listado consolidado de todas las fuentes citadas en la página ──

export const FUENTES_CITADAS: Source[] = [
  MEDIACION_PARENTAL_QUOTE.source,
  BYBEE_QUOTE.source,
  GLOBAL_KIDS_ONLINE_QUOTE.source,
  KIDS_ONLINE_SOURCE,
  MESAS_DIALOGO_QUOTE.source,
  UNICEF_BENEFICIOS_QUOTE.source,
  BULLYING_SIN_FRONTERAS_SOURCE,
  GROOMING_LATAM_SOURCE,
];
