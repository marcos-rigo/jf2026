// Contenido de la temática "Estafas Digitales" que necesita variar por
// audiencia — no una migración completa del archivo (ver investigación
// "contenido con variantes por audiencia"): a diferencia del resto del
// Grupo B, esta temática no tenía lib/*.ts propio, todo su contenido vivía
// inline en app/estafas-digitales/estafas-digitales-content.tsx. Mismas
// interfaces Source/Quote que el resto de las temáticas citadas, para poder
// sumar citas acá si hace falta más adelante.

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

// ── Sección "Qué significa para el aula" — único bloque con nota específica
// de audiencia hoy (el resto de la página es contenido neutro). Texto igual
// al que ya estaba inline; notaFamilias sin escribir todavía.
export const AULA_ROL = {
  notaDocente:
    'La prohibición estricta de las pantallas incrementa el secretismo e impide que un alumno afectado busque ayuda institucional oportuna por temor a ser sancionado.',
  notaFamilias: undefined as string | undefined,
};
