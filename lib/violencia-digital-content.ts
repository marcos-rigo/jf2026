export interface Source {
  author: string;
  note?: string;
  url?: string;
  unverified?: boolean;
}

export const CONCEPTO_QUOTES: { text: string; source: Source }[] = [
  {
    text:
      'La violencia digital contra las mujeres incluye el ciberacoso y el ciberacecho, la desinformación de género, la falsificación de imágenes y el intercambio no consentido de imágenes íntimas en línea. Es una de las formas de violencia de género que más rápido crece en el mundo.',
    source: {
      author: 'ONU Mujeres',
      url: 'https://www.unwomen.org/es/noticias/comunicado-de-prensa/2025/11/la-violencia-digital-se-esta-intensificando-pero-casi-la-mitad-de-las-mujeres-y-ninas-del-mundo-carecen-de-proteccion-juridica-frente-al-abuso-digital',
    },
  },
  {
    text:
      'Esta violencia se considera de género porque es generalmente sexista y sexualizada: se expresa a través de amenazas, discursos discriminatorios, acoso sexual, invasión de la intimidad y divulgación no consensuada de imágenes, entre otros ciberdelitos.',
    source: {
      author: 'CEPAL',
      url: 'https://www.cepal.org/es/comunicados/cepal-llama-cerrar-la-brecha-digital-genero-fomentar-la-participacion-mas-mujeres',
    },
  },
];

export const OLIMPIA_HISTORY = {
  text:
    'En 2014, cuando tenía 18 años, la activista mexicana Olimpia Coral Melo descubrió que un video íntimo suyo, grabado por su entonces pareja, circulaba sin su consentimiento en redes sociales en Huauchinango, Puebla. Al intentar denunciar, le informaron que ese hecho no estaba tipificado como delito. La difusión le trajo consecuencias emocionales severas, de las que ella misma ha hablado públicamente como parte de su activismo posterior. Con apoyo de su madre y de otras mujeres, fundó el Frente Nacional para la Sororidad y presentó en marzo de 2014 una iniciativa de ley en el Congreso de Puebla. Tras siete años de lucha, la reforma se aprobó, reconociendo la violencia digital como delito. Hoy Olimpia es reconocida internacionalmente por este trabajo (una de las 100 personas más influyentes del mundo según Time, 2021).',
  source: {
    author: 'Wikipedia',
    note: 'con fuentes primarias citadas',
    url: 'https://es.wikipedia.org/wiki/Olimpia_Coral_Melo',
  } as Source,
};

export const LEY_27736_ARGENTINA = {
  text:
    'Desde 2023, mediante la Ley 27.736, la violencia digital es oficialmente reconocida en Argentina como una modalidad de violencia dentro del marco de la Ley 26.485 de Protección Integral para Prevenir, Sancionar y Erradicar la Violencia contra las Mujeres — no es una importación literal de la ley mexicana, es la propia ley argentina, con su número y año.',
  source: {
    author: 'ONU Mujeres LAC',
    url: 'https://lac.unwomen.org/es/stories/noticia/2025/10/enfrentar-la-violencia-digital-con-perspectiva-de-genero-hacia-una-gobernanza-responsable-de-los-datos',
  } as Source,
};

export const TIPOS_VIOLENCIA_DIGITAL = {
  items: [
    'Difusión no consentida de contenido íntimo',
    'Ciberacoso y ciberacecho (stalking digital)',
    'Amenazas y hostigamiento',
    'Desinformación de género y discursos discriminatorios',
    'Suplantación de identidad y perfiles falsos',
    'Abuso mediante deepfakes (manipulación de imágenes o video con IA)',
  ],
  source: {
    author: 'ONU Mujeres / MESECVI-OEA',
    note: 'Informe de Ciberviolencia y Ciberacoso contra las mujeres y las niñas (2022)',
    url: 'https://mexico.unwomen.org/sites/default/files/2023-03/Brief_ViolenciaDigital.pdf',
  } as Source,
};

export const DEEPFAKES_NOTE = {
  text: 'Mencionados por el informe 2024 del Secretario General de la ONU como amenaza emergente de violencia digital contra mujeres y niñas.',
  source: {
    author: 'ONU Mujeres',
    note: 'deepfakes',
    url: 'https://www.unwomen.org/es/articles/preguntas-frecuentes/preguntas-frecuentes-troleo-ciberacoso-doxing-y-otras-formas-de-violencia-contra-las-mujeres-en-la-era-digital',
  } as Source,
};

export const MAGNITUD_ARGENTINA = {
  stats: [
    'En el último año, 6 de cada 10 adolescentes y mujeres encuestadas experimentaron situaciones de violencia de género digital. Entre integrantes del colectivo LGBT+, la cifra llegó al 52,5%.',
    'Solo el 36% de quienes atravesaron esto informó a la plataforma donde ocurrió, y menos del 10% buscó ayuda formal.',
  ],
  // Cifra ancla de cada stat de arriba, para el tratamiento tipográfico grande — mismo dato, solo aislado para diseño.
  statsHighlight: ['6/10', '36%'],
  source: {
    author: 'Defensoría del Pueblo de la Ciudad de Buenos Aires (2023)',
    note: 'con Iniciativa Spotlight, ONU Mujeres, PNUD, UNFPA e Instituto Gino Germani (UBA)',
    url: 'https://defensoria.org.ar/noticias/relevamiento-sobre-violencia-de-genero-digital/',
  } as Source,
  notaDocente:
    'Este dato es clave para entender por qué la pregunta de "qué hacer si una alumna te lo cuenta" importa tanto: la mayoría de quienes atraviesan esto no lo denuncian ni lo cuentan formalmente. Que confíe en un docente puede ser la única vez que lo cuenta.',
};

export const FAQ3_AMPLIACION =
  'Todo lo anterior cubre el caso de una alumna o la familia de un estudiante contándole esto a un docente. Falta contemplar el caso más directo: si la propia estudiante lo atraviesa y se lo cuenta a un docente en primera persona. El mismo criterio aplica (no investigar por tu cuenta, activar el protocolo institucional), pero con un matiz: si es menor de edad, probablemente corresponda involucrar también a la familia y al equipo de orientación, a diferencia de un caso entre adultas.';

export const ALL_SOURCES: Source[] = [
  CONCEPTO_QUOTES[0].source,
  CONCEPTO_QUOTES[1].source,
  OLIMPIA_HISTORY.source,
  LEY_27736_ARGENTINA.source,
  TIPOS_VIOLENCIA_DIGITAL.source,
  DEEPFAKES_NOTE.source,
  MAGNITUD_ARGENTINA.source,
];
