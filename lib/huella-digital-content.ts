// Datos de contenido de la temática "Huella Digital" — landing de scroll continuo.
// Mismo patrón que lib/ciudadania-digital-content.ts (arrays tipados + componentes que mapean sobre ellos),
// separado de la JSX. STEPS, ERRORS, NEXT_STEPS, RESOURCES, TEMPLATE y FAQS viven en el propio
// componente que los renderiza (no se movieron acá) — son contenido ya adaptado a docentes que no se toca.

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
  text: 'Una huella digital es la estela de datos creada por la actividad en línea de una persona... Cada vez que usás internet, dejás una huella que indica dónde estuviste y a veces qué hiciste; estos datos a menudo pueden estar vinculados a quién sos.',
  source: { author: 'Brave', note: 'Glosario de privacidad', url: 'https://brave.com/es/glossary/digital-footprint/' },
};

// ── 02 · Historia / origen ──

export const CASO_COSTEJA = {
  texto:
    'El derecho al olvido tiene un origen judicial concreto: en 2010, Mario Costeja González reclamó ante la Agencia Española de Protección de Datos que Google dejara de mostrar un aviso de 1998 sobre una deuda ya saldada. El 13 de mayo de 2014, el Tribunal de Justicia de la Unión Europea falló a su favor (asunto C-131/12, Google Spain vs. AEPD y Mario Costeja González), estableciendo que los buscadores deben atender pedidos de eliminar enlaces con información personal irrelevante o desactualizada, aunque la información en sí sea verídica.',
  source: {
    author: 'Tribunal de Justicia de la Unión Europea',
    note: 'sentencia C-131/12 (13 de mayo de 2014)',
    url: 'https://www.abogacia.es/wp-content/uploads/2014/05/Sentencia-131-12-TJUE-derecho-al-olvido.pdf',
  } as Source,
};

export const GDPR_MENCION: Source = {
  author: 'Reglamento General de Protección de Datos (GDPR/RGPD)',
  note: 'Artículo 17, derecho de supresión — formalizó después el fallo Costeja. Referencia general: no se confirmó el link oficial exacto del artículo (eur-lex.europa.eu)',
  unverified: true,
};

// ── 03 · Características ──

export const ACTIVA_PASIVA_QUOTE: Quote = {
  text: 'La huella digital activa incluye todos los datos que compartís conscientemente (publicaciones, correos, formularios). La huella digital pasiva se registra sin tu conocimiento explícito.',
  source: { author: 'Avast', url: 'https://www.avast.com/es-es/c-what-is-a-digital-footprint' },
};

// ── 04 · Tipos o variantes ──

export const DEVICE_FINGERPRINT_QUOTE: Quote = {
  text: 'El "device fingerprint" es un concepto relacionado pero distinto a la huella digital: no es el rastro de lo que hacés, sino datos técnicos del dispositivo (navegador, resolución, configuración) usados para identificarlo sin necesidad de cookies.',
  source: {
    author: 'Wikipedia',
    note: 'Huella digital en Internet, con cita a la Agencia Española de Protección de Datos (AEPD)',
    url: 'https://es.wikipedia.org/wiki/Huella_digital_en_Internet',
  },
};

// ── 06 · Ventajas ──

export const REPUTACION_QUOTE: Quote = {
  text: 'Según una encuesta de CareerBuilder ampliamente citada, el 57% de los reclutadores que investigan candidatos en redes sociales encontraron contenido que los llevó a NO contratarlos — lo cual implica, en sentido inverso, que una huella cuidada puede ser un diferencial a favor.',
  source: {
    author: 'CareerBuilder',
    note: 'citado en MSMK University College — cita de segunda mano, no se encontró el informe original con link directo',
    url: 'https://msmk.university/la-huella-digital-en-la-contratacion-laboral/',
    unverified: true,
  },
};

export const VENTAJAS_ADICIONALES: string[] = [
  'Portfolio digital visible',
  'Posibilidad de construir marca profesional',
  'Acceso a comunidades y oportunidades que dependen de tener presencia online',
];

// ── 07 · Problemas / riesgos ──

export const DATA_BROKERS_QUOTE: Quote = {
  text: 'Los data brokers son "empresas que recopilan información de los consumidores, incluida información personal, de una amplia variedad de fuentes, con el fin de revender esa información a sus clientes".',
  source: {
    author: 'FTC (Federal Trade Commission, EE. UU.)',
    note: 'informe de 2014, citado en Lawfare — cita de segunda mano, no se encontró el link directo al PDF oficial',
    url: 'https://www.lawfaremedia.org/article/federal-privacy-rules-must-get-data-broker-definitions-right',
    unverified: true,
  },
};

// ── 08 · Qué significa esto para el aula (síntesis propia, sin cita) ──

export const AULA_SINTESIS = {
  texto:
    'La huella digital de un docente importa doblemente — la propia, y la que ayuda a construir en sus estudiantes al modelarla. El caso Costeja es un buen disparador de clase: mostrar que hasta la información verídica puede pedirse que se desindexe, y por qué eso genera debate entre privacidad y derecho a la información.',
};

// ── 09 · Centro de recursos — fuentes citadas completas ──

export interface FuenteCitada {
  n: number;
  label: string;
  url?: string;
  note?: string;
}

export const FUENTES_COMPLETAS: FuenteCitada[] = [
  { n: 1, label: 'Brave — Glosario, huella digital', url: 'https://brave.com/es/glossary/digital-footprint/' },
  {
    n: 2,
    label: 'Tribunal de Justicia de la Unión Europea, sentencia C-131/12',
    url: 'https://www.abogacia.es/wp-content/uploads/2014/05/Sentencia-131-12-TJUE-derecho-al-olvido.pdf',
  },
  { n: 3, label: 'Avast — huella activa/pasiva', url: 'https://www.avast.com/es-es/c-what-is-a-digital-footprint' },
  { n: 4, label: 'Wikipedia / AEPD — huella de dispositivo', url: 'https://es.wikipedia.org/wiki/Huella_digital_en_Internet' },
  {
    n: 5,
    label: 'CareerBuilder (cita de segunda mano vía MSMK University)',
    url: 'https://msmk.university/la-huella-digital-en-la-contratacion-laboral/',
    note: 'sin fuente primaria confirmada',
  },
  {
    n: 6,
    label: 'FTC (cita de segunda mano vía Lawfare)',
    url: 'https://www.lawfaremedia.org/article/federal-privacy-rules-must-get-data-broker-definitions-right',
    note: 'sin fuente primaria confirmada',
  },
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
  { id: 'historia', number: '01', label: 'Historia / Origen', shortLabel: 'Historia' },
  { id: 'caracteristicas', number: '02', label: 'Características', shortLabel: 'Rasgos' },
  { id: 'tipos-variantes', number: '03', label: 'Tipos o Variantes', shortLabel: 'Tipos' },
  { id: 'ejemplos-concretos', number: '04', label: 'Ejemplos Concretos', shortLabel: 'Ejemplos' },
  { id: 'ventajas', number: '05', label: 'Ventajas', shortLabel: 'Ventajas' },
  { id: 'riesgos', number: '06', label: 'Problemas / Riesgos', shortLabel: 'Riesgos' },
  { id: 'aula', number: '07', label: 'Para el Aula', shortLabel: 'Aula' },
  { id: 'recursos', number: '08', label: 'Centro de Recursos', shortLabel: 'Recursos' },
];
