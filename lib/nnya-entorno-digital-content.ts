// Fuentes citadas de la temática "NNyA y el Entorno Digital" — mismo patrón que
// lib/huella-digital-content.ts (Source/Quote tipados, separados de la JSX).
// fuentes, estadisticas, percepciones, pasosMediacion, herramientas, consejosRapidos y
// señalesAlerta viven en el propio componente y no se tocan — este archivo solo agrega
// el marco conceptual, el origen histórico y las ventajas que faltaban.

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

// ── Concepto — filtro burbuja / cámara de eco ──
export const FILTER_BUBBLE_QUOTE: Quote = {
  text: 'El "filtro burbuja" (filter bubble) es el espacio en línea que representa el universo personal de información de cada usuario — único, y construido por filtros algorítmicos personalizados. El término fue acuñado por el activista Eli Pariser en su libro y charla TED de 2011, tras notar que dos personas podían recibir resultados de búsqueda completamente distintos para la misma consulta, según sus intereses previos.',
  source: {
    author: "Eli Pariser (2011)",
    note: "The Filter Bubble: What the Internet Is Hiding from You",
    url: "https://es.wikipedia.org/wiki/Burbuja_de_filtros",
  },
};

// ── Historia / origen ──
export const GLOBAL_KIDS_ONLINE_SOURCE: Source = {
  author: "UNESCO",
  note: "Global Kids Online — red fundada en 2006 por UNICEF Innocenti, la LSE y la Red Europea de Kids Online",
  url: "https://www.unesco.org/es/articles/kids-online",
};

// ── Ventajas / lo positivo ──
export const UNICEF_BENEFICIOS_QUOTE: Quote = {
  text: "Internet y las plataformas digitales pueden ser herramientas poderosas para fomentar la creatividad, el aprendizaje y las conexiones sociales de niñas, niños y adolescentes — también un lugar clave para expresar opiniones e informarse.",
  source: {
    author: "UNICEF",
    note: "Cómo Internet puede potenciar el aprendizaje, la creatividad y los vínculos de niños, niñas y adolescentes",
    url: "https://www.unicef.org/uruguay/crianza/digital/como-Internet-puede-potenciar-el-aprendizaje-creatividad-y-v%C3%ADnculos-de-ni%C3%B1os-ni%C3%B1as-y-adolescentes",
  },
};

// Fuentes que ya existen en el componente como `fuentes` (Save the Children/GAD3, Redalyc) y
// como `fuente` dentro de `estadisticas` (Kids Online Iberoamérica, Encuesta de Ciudadanía
// Digital Argentina, Fundación Telefónica) — se reproducen acá como Source solo para el listado
// consolidado del Centro de recursos, sin modificar los arrays originales.
const SAVE_THE_CHILDREN_SOURCE: Source = {
  author: "Save the Children & GAD3",
  note: "Infancia y Adolescencia en Entornos Digitales",
};
const REDALYC_SOURCE: Source = {
  author: "Redalyc",
  note: "Uso de TikTok e Instagram en adolescentes",
};
const KIDS_ONLINE_IBEROAMERICA_SOURCE: Source = {
  author: "UNICEF",
  note: "Kids Online Iberoamérica (2019)",
};
const CIUDADANIA_DIGITAL_ARGENTINA_SOURCE: Source = {
  author: "UNICEF",
  note: "Encuesta de Ciudadanía Digital Argentina (2022)",
};
const GENERACION_INTERACTIVA_SOURCE: Source = {
  author: "Fundación Telefónica",
  note: "Generación Interactiva en Iberoamérica (2020)",
};

// ── Centro de recursos — listado consolidado de las 8 fuentes citadas en la página ──
export const FUENTES_CITADAS: Source[] = [
  SAVE_THE_CHILDREN_SOURCE,
  REDALYC_SOURCE,
  KIDS_ONLINE_IBEROAMERICA_SOURCE,
  CIUDADANIA_DIGITAL_ARGENTINA_SOURCE,
  GENERACION_INTERACTIVA_SOURCE,
  FILTER_BUBBLE_QUOTE.source,
  GLOBAL_KIDS_ONLINE_SOURCE,
  UNICEF_BENEFICIOS_QUOTE.source,
];
