// Datos citados de la temática "Violencia Digital en Infancias" — marco legal, origen de la
// Línea 137 y magnitud del problema. Mismo patrón que lib/huella-digital-content.ts
// (arrays/objetos tipados, separados de la JSX). violenceTypesData, alertSignsData y
// actionStepsData quedan en el propio componente — son contenido ya adaptado que no se toca.

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

// ── Marco legal — grooming ──

export const GROOMING_LEY_QUOTE: Quote = {
  text: 'Será penado con prisión de seis (6) meses a cuatro (4) años el que, por medio de comunicaciones electrónicas, telecomunicaciones o cualquier otra tecnología de transmisión de datos, contactare a una persona menor de edad, con el propósito de cometer cualquier delito contra la integridad sexual de la misma.',
  source: {
    author: 'Ley 26.904 — Código Penal, Art. 131',
    note: 'sancionada el 13/11/2013, promulgada el 4/12/2013',
    url: 'https://observatoriolegislativocele.com/ley-grooming-ley-26904/',
  },
};

export const GROOMING_DIA_NACIONAL: Source = {
  author: 'Poder Judicial de Misiones',
  note: '13 de noviembre, Día Nacional de la Lucha Contra el Grooming',
  url: 'https://www.jusmisiones.gov.ar/index.php/joomla-overview/informes-especiales/2763-en-argentina-el-grooming-es-un-delito-penal',
};

// ── Origen — Línea 137 ──

export const LINEA_137_ORIGEN_QUOTE: Quote = {
  text: 'El programa "Las Víctimas contra las Violencias" —del que depende la Línea 137— fue creado en 2006 mediante la Resolución N° 314/2006 del Ministerio del Interior de la Nación, y transferido al Ministerio de Justicia y Derechos Humanos en 2008. Está coordinado por la Dra. Eva Giberti y su equipo incluye psicólogos, trabajadores sociales y abogados.',
  source: {
    author: 'Ministerio Público Fiscal',
    url: 'https://www.mpf.gob.ar/ufem/files/2014/06/Funcionamiento-L%C3%ADnea-137.pdf',
  },
};

export const LINEA_137_ALCANCE: Source = {
  author: 'Argentina.gob.ar',
  note: 'atiende violencia familiar, sexual y grooming — no es un número genérico de emergencias',
  url: 'https://www.argentina.gob.ar/justicia/violencia-familiar-sexual',
};

// ── Magnitud del problema ──

export const MAGNITUD_UNICEF_QUOTE: Quote = {
  text: 'Más de 150.000 denuncias vinculadas con grooming y explotación sexual de niñas, niños y adolescentes en entornos digitales se registraron en Argentina en 2024. La curva de crecimiento es sostenida: en 2016 fueron 8.840 reportes; en 2024, 120.162 — un incremento de más de 13 veces en 8 años.',
  source: {
    author: 'UNICEF Argentina',
    note: '"Investigar para proteger" (2025)',
    url: 'https://lapampa24.com.ar/negocios/unicef-presento-una-guia-para-investigar-delitos-digitales-contra-ninas-ninos-y-adolescentes-en-argentina/',
  },
};

export const MAGNITUD_KIDS_ONLINE: Source = {
  author: 'UNICEF-UNESCO',
  note: 'Encuesta Kids Online Argentina (2025) — 291 escuelas primarias y secundarias, menores de 9 a 17 años',
  url: 'https://que.fcc.unc.edu.ar/ciberbullying-y-grooming-violencia-digital-en-las-infancias-y-adolescencias/',
};

export const MAGNITUD_ENCUESTA_GROOMING: Quote = {
  text: 'El 12,7% de niñas, niños y adolescentes encuestados utiliza el celular para enviar mensajes, fotos o videos ofensivos contra alguien.',
  source: {
    author: 'Ministerio de Justicia y DD.HH. de la Nación',
    note: 'Encuesta Nacional de Grooming (2021)',
    url: 'https://www.argentina.gob.ar/sites/default/files/2024/10/encuesta_nacional_grooming_-_ano_2021.pdf',
  },
};

// ── Listado completo de fuentes citadas (centro de recursos) ──

export const FUENTES_CITADAS: Source[] = [
  GROOMING_LEY_QUOTE.source,
  GROOMING_DIA_NACIONAL,
  LINEA_137_ORIGEN_QUOTE.source,
  LINEA_137_ALCANCE,
  MAGNITUD_UNICEF_QUOTE.source,
  MAGNITUD_KIDS_ONLINE,
  MAGNITUD_ENCUESTA_GROOMING.source,
];
