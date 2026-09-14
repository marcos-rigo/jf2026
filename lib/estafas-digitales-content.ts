// Contenido de la temática "Estafas Digitales" que necesita variar por
// audiencia — no una migración completa del archivo (ver investigación
// "contenido con variantes por audiencia"): a diferencia del resto del
// Grupo B, esta temática no tenía lib/*.ts propio, todo su contenido vivía
// inline en app/estafas-digitales/estafas-digitales-content.tsx. Mismas
// interfaces Source/Quote que el resto de las temáticas citadas, para poder
// sumar citas acá si hace falta más adelante.
import type { AudienciaTexto } from './audiencia-texto';

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

// ── Sección "Qué significa para el aula/casa" — toda la sección de abordaje
// pedagógico (~"aula" en estafas-digitales-content.tsx) tiene voz docente.
// AULA_ROL era el único bloque contemplado originalmente; ROL_SECCION,
// PEDAGOGIA_CUIDADO y PROTOCOLO_TITULO se sumaron después al crecer la página.
export const AULA_ROL = {
  notaDocente:
    'La prohibición estricta de las pantallas incrementa el secretismo e impide que un alumno afectado busque ayuda institucional oportuna por temor a ser sancionado.',
  notaFamilias:
    'La prohibición estricta de las pantallas incrementa el secretismo e impide que un hijo o hija afectado busque ayuda a tiempo por miedo a ser castigado.',
};

export const ROL_SECCION_BADGE: AudienciaTexto = {
  docentes: 'Abordaje Pedagógico',
  familias: 'Abordaje en Casa',
};

export const ROL_SECCION_TITULO: AudienciaTexto = {
  docentes: 'El Rol Docente: De la Prohibición a la Pausa Cognitiva',
  familias: 'El Rol de la Familia: De la Prohibición a la Pausa Cognitiva',
};

export const PEDAGOGIA_CUIDADO_SUBTITULO: AudienciaTexto = {
  docentes: 'Promover la Pausa Cognitiva en la Escuela',
  familias: 'Promover la Pausa Cognitiva en Casa',
};

// Separado en pre/post (en vez de un string único) para preservar el
// <strong>pausa cognitiva</strong> del párrafo original — la separación es
// de layout, no cambia las palabras de cada variante.
export const PEDAGOGIA_CUIDADO_PARRAFO_PRE: AudienciaTexto = {
  docentes: 'La respuesta didáctica más efectiva ante la urgencia artificial del delito es entrenar la',
  familias: 'La respuesta más efectiva ante la urgencia artificial del delito es entrenar la',
};

export const PEDAGOGIA_CUIDADO_PARRAFO_POST: AudienciaTexto = {
  docentes: ': ante cualquier notificación que exija clave, dinero o decisiones inmediatas, la consigna del aula es pausar, desconfiar y validar con un adulto de confianza.',
  familias: ': ante cualquier notificación que exija clave, dinero o decisiones inmediatas, la consigna en casa es pausar, desconfiar y validar con un adulto de confianza.',
};

export const PEDAGOGIA_CUIDADO_BULLET2: AudienciaTexto = {
  docentes: 'Educación entre pares: Analizar capturas de pantalla de fraudes reales en talleres de debate escolar para aguzar el sentido crítico.',
  familias: 'Conversarlo en casa: Analizar juntos capturas de pantalla de fraudes reales que hayan visto circular, para aguzar el sentido crítico en familia.',
};

export const PROTOCOLO_TITULO: AudienciaTexto = {
  docentes: 'Protocolo de Acción Escolar ante un Estudiante Damnificado',
  familias: 'Protocolo de Acción en Casa ante un Hijo o Hija Damnificado/a',
};

export const PROTOCOLO_PASOS_TEXTO: Record<'01' | '03' | '04', AudienciaTexto> = {
  '01': {
    docentes: 'Recibir y alojar al estudiante sin emitir juzgamientos ni retos. Comprender que es víctima de una maniobra de ingeniería social diseñada profesionalmente para engañar.',
    familias: 'Recibir y escuchar a tu hijo o hija sin juzgar ni retar. Comprender que es víctima de una maniobra de ingeniería social diseñada profesionalmente para engañar.',
  },
  '03': {
    docentes: 'Cerrar y desvincular inmediatamente las sesiones de correo o redes sociales que hayan quedado abiertas en computadoras o tablets del establecimiento escolar.',
    familias: 'Cerrar y desvincular inmediatamente las sesiones de correo o redes sociales que hayan quedado abiertas en computadoras o tablets de la casa.',
  },
  '04': {
    docentes: 'Notificar a los adultos responsables del estudiante, registrar el hecho en el acta institucional y canalizar la consulta formal ante los organismos de protección y ciberdelito.',
    familias: 'Si es menor de edad, hablarlo también con la escuela para que esté al tanto, y canalizar la consulta formal ante los organismos de protección y ciberdelito (UFECI, División Delitos Telemáticos).',
  },
};
