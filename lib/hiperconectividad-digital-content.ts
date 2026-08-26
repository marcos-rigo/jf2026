// Citas y fuentes para "Hiperconectividad Digital". Mismo patrón que
// lib/ciudadania-digital-content.ts y lib/huella-digital-content.ts, pero acá NO se
// reestructura la página (mantiene su propio diseño de landing ya existente) — solo se
// agrega el concepto arriba y una cita debajo de cada estadística/dato ya presente.

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

// ── Concepto (Hero) ──

export const CONCEPTO_QUOTE: Quote = {
  text: 'La hiperconectividad se define como el acceso constante e inmediato a redes de información, comunicación y entretenimiento a través de múltiples dispositivos — la condición de estar permanentemente conectado, a través de uno o varios dispositivos, a plataformas digitales.',
  source: {
    author: 'Meer / Psicopartner',
    note: 'no hay un autor único identificable que haya acuñado el término — es de uso corriente en psicología',
    url: 'https://www.meer.com/es/95770-tecnologia-y-salud-mental-en-tiempos-de-hiperconectividad',
  },
};

export const TECNOESTRES_QUOTE: Quote = {
  text: 'Concepto académico hermano, con autor real: el tecnoestrés, "una enfermedad de adaptación causada por la falta de habilidad para tratar con las nuevas tecnologías de manera saludable".',
  source: {
    author: 'Craig Brod (1984)',
    note: 'citado en Psicopartner',
    url: 'https://www.psicopartner.com/hiperconectividad-tecnoestres-y-ansiedad/',
  },
};

// ── Fuente principal del estudio (UNICEF España) ──

export const UNICEF_ESPANA_2021: Source = {
  author: 'Andrade, Guadix, Rial y Suárez (2021)',
  note: 'UNICEF España, Impacto de la tecnología en la adolescencia — encuesta a ~50.000 adolescentes de 11 a 18 años, 265 centros educativos, nov. 2020 – mar. 2021',
  url: 'https://www.unicef.es/publicacion/impacto-de-la-tecnologia-en-la-adolescencia',
};

export const UNICEF_ESPANA_PENDIENTE: Source = {
  ...UNICEF_ESPANA_2021,
  note: 'cifra no confirmada puntualmente en los extractos revisados del informe (105 páginas) — probable misma fuente, pendiente de verificar la página exacta',
  unverified: true,
};

// ── Arquitectura cerebral / Demencia Digital ──

export const DEMENCIA_DIGITAL_QUOTE: Source = {
  author: 'Manfred Spitzer',
  note: 'psiquiatra y neurocientífico, Demencia Digital (2013) — es la tesis de un autor identificable, no un estudio cuantitativo ni consenso científico cerrado; hay debate académico sobre el alcance real de sus conclusiones',
  url: undefined,
};

// ── Identidad y Cultura del Like ──

export const AUTOOBJETIVACION_SOURCE: Source = {
  author: 'Fredrickson, B. L. & Roberts, T. A. (1997)',
  note: '"Objectification theory: Toward understanding women\'s lived experiences and mental health risks", Psychology of Women Quarterly, 21(2), 173-206',
  url: 'https://doi.org/10.1111/j.1471-6402.1997.tb00108.x',
};

export const IDENTIDAD_FRAGMENTADA_SOURCE: Source = {
  author: 'Sin fuente puntual confirmada',
  note: 'cifra "2 de cada 3 mantienen más de un perfil" pendiente de verificación',
  unverified: true,
};

export const INSTAGRAM_32_SOURCE: Source = {
  author: 'The Wall Street Journal, "The Facebook Files" (2021)',
  note: 'investigación interna de Meta/Instagram filtrada por Frances Haugen — "32% de las adolescentes que se sentían mal con su cuerpo dijeron que Instagram las hacía sentir peor"',
  url: 'https://www.pressreader.com/uk/scottish-daily-mail/20210915/281724092678704',
};

// ── Salud mental ──

export const FOMO_SOURCE: Source = {
  author: 'Przybylski, Murayama, DeHaan & Gladwell (2013)',
  note: 'validación académica del FOMO — término acuñado por Dan Herman (1996) y popularizado por Patrick McGinnis (2004); Computers in Human Behavior, 29(4), 1841-1848',
  url: 'https://doi.org/10.1016/j.chb.2013.02.014',
};

export const AUTOLESIONES_TRIPLICADAS_SOURCE: Source = {
  author: 'Ministerio de Sanidad de España',
  note: 'ingresos hospitalarios por autolesión en jóvenes de 10 a 24 años, triplicados en dos décadas — citado en FAROS Sant Joan de Déu',
  url: 'https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion',
};

export const IDEACION_SUICIDA_SOURCE: Source = {
  author: 'Departament de Salut / Departament d\'Educació, Generalitat de Catalunya (2022)',
  note: 'Encuesta de bienestar emocional 2022 — 43,3% de niños de 11 a 18 años en Cataluña con pensamientos suicidas. Dato autonómico (Cataluña), no nacional',
  url: 'https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion',
};

export const DUERME_CON_MOVIL_SOURCE: Source = {
  ...UNICEF_ESPANA_2021,
  note: 'el informe verificado habla de "6 de cada 10" (60%); la página dice 58% — cerca pero no idéntico, posible redondeo o cifra de otra sección del mismo informe',
  unverified: true,
};

// ── Riesgos ──

export const APUESTAS_ONLINE_SOURCE: Source = {
  ...UNICEF_ESPANA_2021,
  note: 'coincide casi textual: "más de 70.000 estudiantes de ESO han comenzado a apostar o jugar dinero online"',
};

// ── Fuentes citadas — listado completo ──

export interface FuenteCitada {
  n: number;
  label: string;
  url?: string;
  note?: string;
}

export const FUENTES_COMPLETAS: FuenteCitada[] = [
  { n: 1, label: 'Meer / Psicopartner — concepto de hiperconectividad', url: 'https://www.meer.com/es/95770-tecnologia-y-salud-mental-en-tiempos-de-hiperconectividad' },
  { n: 2, label: 'Craig Brod (1984) — tecnoestrés, citado en Psicopartner', url: 'https://www.psicopartner.com/hiperconectividad-tecnoestres-y-ansiedad/' },
  { n: 3, label: 'Andrade, Guadix, Rial y Suárez (2021) — UNICEF España, Impacto de la tecnología en la adolescencia', url: 'https://www.unicef.es/publicacion/impacto-de-la-tecnologia-en-la-adolescencia' },
  { n: 4, label: 'Manfred Spitzer — Demencia Digital (2013)', note: 'presentado como postura de autor, no consenso científico cerrado' },
  { n: 5, label: 'Fredrickson & Roberts (1997) — teoría de la autoobjetivación', url: 'https://doi.org/10.1111/j.1471-6402.1997.tb00108.x' },
  { n: 6, label: 'The Wall Street Journal — "The Facebook Files" (2021)', url: 'https://www.pressreader.com/uk/scottish-daily-mail/20210915/281724092678704' },
  { n: 7, label: 'Przybylski, Murayama, DeHaan & Gladwell (2013) — FOMO', url: 'https://doi.org/10.1016/j.chb.2013.02.014' },
  { n: 8, label: 'Ministerio de Sanidad de España — autolesiones en jóvenes, vía FAROS Sant Joan de Déu', url: 'https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion' },
  { n: 9, label: 'Generalitat de Catalunya (2022) — ideación suicida adolescente, encuesta de bienestar emocional', url: 'https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion', note: 'dato autonómico (Cataluña), no nacional' },
];
