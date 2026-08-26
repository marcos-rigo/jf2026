// Datos de contenido de la temática "Ciudadanía Digital" — landing de scroll continuo.
// Separado de la JSX siguiendo el patrón del resto del proyecto (arrays tipados + componentes que mapean sobre ellos).

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

export const HERO_QUOTES: Quote[] = [
  {
    text: 'La ciudadanía digital es un concepto dinámico que engloba elementos clave para interactuar de manera segura y responsable en entornos digitales. Implica ser consciente de los riesgos, derechos y responsabilidades asociados al uso de tecnologías y datos personales, promoviendo un uso informado que maximice los beneficios y minimice los riesgos.',
    source: { author: 'Dr. José Farhat', note: '"Un cambio de chip necesario"' },
  },
  {
    text: 'Es la capacidad que tienen los ciudadanos de interactuar en entornos digitales. Se refiere a las buenas prácticas de comportamiento apropiadas cuando estamos interactuando en entornos digitales.',
    source: { author: 'Dr. José Farhat', note: 'Primer Conversatorio Provincial (UTN)' },
  },
  {
    text: 'En un mundo donde los jóvenes pasan una gran parte de su tiempo en línea, las competencias en ciudadanía digital les proporcionan herramientas esenciales para interactuar de manera responsable, proteger su bienestar emocional y ser conscientes de los riesgos.',
    source: { author: 'Dr. José Farhat' },
  },
];

// ── 02 · Historia / origen ──

export const NATIVOS_DIGITALES_QUOTE: Quote = {
  text: 'Los estudiantes de hoy "piensan y procesan la información de manera fundamentalmente distinta a sus predecesores", lo que los convierte en "hablantes nativos" del lenguaje digital.',
  source: {
    author: 'Marc Prensky',
    note: '"Digital Natives, Digital Immigrants" (2001), On the Horizon, Vol. 9, N.º 5 — citado por José Farhat en el conversatorio UNSTA',
    url: 'https://doi.org/10.1108/10748120110424816',
  },
};

export const BARCO_DE_TESEO: Source = {
  author: 'Tradición filosófica clásica (Plutarco)',
  note: 'usada por Dr. José Farhat como disparador de debate sobre identidad digital — no tiene una fuente moderna citable',
  unverified: true,
};

// ── 03 · Características — 8 actitudes de un buen ciudadano digital ──

export const ACTITUDES_SOURCE: Source = { author: 'Dr. José Farhat', note: 'Primer Conversatorio Provincial (UTN)' };

export const ACTITUDES: string[] = [
  'Promueve un uso de los dispositivos adecuado a la edad, considerando los riesgos de su uso en la infancia.',
  'Aprovecha las posibilidades que otorga internet para aprender y adquirir competencias útiles para el mundo laboral.',
  'Toma medidas de seguridad en los dispositivos personales, como uso de antivirus y contraseñas.',
  'Respeta la diversidad de opiniones, sin "enganchar" ni promover comentarios negativos o agresivos.',
  'Recuerda que todos tenemos derecho a acceder a internet, sin importar sexo, cultura o nivel socioeconómico.',
  'Se informa de manera responsable y verifica la información antes de compartirla.',
  'Aprovecha los espacios de participación y creación de comunidad con ideas u objetivos que lo representen.',
  'Cumple las normas de comportamiento y leyes asociadas a los sitios web y redes que utiliza.',
];

// ── 04 · Tipos o variantes ──

const RIBBLE_URL = 'https://iste.org/blog/essential-elements-of-digital-citizenship';

export interface Dimension {
  number: number;
  title: string;
  description: string;
  source: Source;
  fromRibbleModel: boolean;
}

export const DIMENSIONES: Dimension[] = [
  {
    number: 1,
    title: 'Salud y bienestar digital',
    description:
      'Bienestar físico y psicológico en un mundo de tecnología digital. Más allá de los problemas físicos, cobran cada vez más relevancia los psicológicos, como la adicción a internet. Implica saber cuándo desconectar y tomar decisiones informadas sobre cómo priorizar el tiempo y las actividades.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 2,
    title: 'Alfabetización digital',
    description:
      'El proceso de enseñar y aprender sobre la tecnología y su uso. Va más allá de saber usar herramientas: implica saber buscar, evaluar y citar materiales digitales.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 3,
    title: 'Seguridad digital',
    description:
      'Precaución electrónica para garantizar la seguridad. Los ciudadanos digitales necesitan saber cómo resguardar su información controlando la configuración de privacidad.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 4,
    title: 'Etiqueta digital',
    description:
      'Estándares de conducta o procedimiento electrónico. Las normas y políticas no alcanzan: hace falta enseñar a todos sobre la conducta apropiada en línea.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 5,
    title: 'Cultura digital',
    description:
      'Conjunto de prácticas, creencias, comportamientos y conocimientos que surgen en relación con las tecnologías digitales, y que emergen de la interacción entre las personas y los dispositivos tecnológicos.',
    source: { author: 'Wikipedia', note: 'Cultura digital', url: 'https://es.wikipedia.org/wiki/Cultura_digital' },
    fromRibbleModel: false,
  },
  {
    number: 6,
    title: 'Acceso digital',
    description:
      'Participación electrónica plena en la sociedad. Trabajar por la igualdad de derechos digitales y apoyar el acceso electrónico es el punto de partida de la ciudadanía digital.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 7,
    title: 'Comunicación digital',
    description:
      'Intercambio electrónico de información. Con tantas opciones de comunicación disponibles, hace falta aprender a elegir la herramienta correcta según la audiencia y el mensaje.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 8,
    title: 'Responsabilidad y derechos digitales',
    description:
      'Los ciudadanos digitales deben comprender sus derechos digitales básicos, como la privacidad y la libertad de expresión, y también su responsabilidad electrónica por sus propias acciones.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 9,
    title: 'Comercio digital',
    description:
      'Compra y venta electrónica de bienes. A medida que las personas hacen más compras en línea, deben entender cómo ser consumidores eficaces en una economía digital.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 10,
    title: 'Leyes digitales',
    description:
      'Responsabilidad electrónica por las propias acciones. Es crítico que los usuarios entiendan cómo usar y compartir correctamente la propiedad digital ajena.',
    source: { author: 'Mike Ribble / ISTE', url: RIBBLE_URL },
    fromRibbleModel: true,
  },
  {
    number: 11,
    title: 'Gov Tech',
    description:
      'Enfoque de gobierno integral para la modernización del sector público, que promueve un gobierno simple, eficiente y transparente, poniendo al ciudadano en el centro de las reformas.',
    source: { author: 'World Bank', note: 'GovTech', url: 'https://www.worldbank.org/en/programs/govtech' },
    fromRibbleModel: false,
  },
  {
    number: 12,
    title: 'Democracia y participación',
    description:
      'El uso de las TIC (informática, internet, telecomunicaciones) para crear espacios de diálogo y reflexión social, acceso a la información de actores políticos, ejercicio de los derechos de participación política, y mejora de los procesos electorales.',
    source: { author: 'Wikipedia', note: 'Democracia digital', url: 'https://es.wikipedia.org/wiki/Democracia_digital' },
    fromRibbleModel: false,
  },
];

export const DIMENSIONES_ATTRIBUTION_NOTE =
  '9 de estas 12 dimensiones coinciden casi textualmente con el modelo de Mike Ribble (adoptado por ISTE — International Society for Technology in Education). Los conversatorios de José Farhat no citan a Ribble como fuente original; se lo atribuye acá explícitamente.';

export const HABILIDADES_SOURCE: Source = { author: 'Dr. José Farhat' };

export const HABILIDADES_FUNDAMENTALES: string[] = [
  'Uso de dispositivos y aplicaciones',
  'Explorar el significado de privacidad, identidad y huella digital',
  'Analizar, evaluar y seleccionar la información que circula en internet',
  'Comprender el funcionamiento de los algoritmos y cómo inciden en la vida diaria',
];

export const HABILIDADES_INSTRUMENTALES: string[] = [
  'Comprender la dimensión de seguridad de las aplicaciones',
  'Conocer la lógica de las plataformas y los recaudos de seguridad',
  'Gestión de riesgo y resiliencia',
  'Creación de contenido digital — construir destrezas como "prosumidor" (productor + consumidor)',
  'Aprendizaje del uso de la IA',
];

export interface PerfilCategoria {
  categoria: string;
  items: string[];
}

export const PERFIL_COMPETENCIAS_SOURCE: Source = {
  author: 'Griffin, P., McGaw, B. & Care, E. (eds.)',
  note: 'Assessment and Teaching of 21st Century Skills (ATC21S) — Universidad de Melbourne, con patrocinio de Cisco, Intel y Microsoft',
  url: 'https://link.springer.com/book/10.1007/978-94-017-9395-7',
};

export const PERFIL_COMPETENCIAS_ATTRIBUTION_NOTE =
  'Este modelo de 4 categorías corresponde al proyecto ATC21S. Al igual que con Ribble, José Farhat no lo atribuye explícitamente en el material fuente — se lo cita acá.';

export const PERFIL_COMPETENCIAS: PerfilCategoria[] = [
  {
    categoria: 'Maneras de pensar',
    items: ['Resolución de problemas', 'Toma de decisiones', 'Pensamiento computacional', 'Pensamiento visual', 'Pensamiento crítico', 'Autonomía'],
  },
  {
    categoria: 'Maneras de trabajar',
    items: ['Comunicación', 'Trabajo colaborativo', 'Equipos híbridos'],
  },
  {
    categoria: 'Herramientas para trabajar',
    items: ['Uso de tecnologías', 'Alfabetización mediática e informacional', 'Alfabetización digital'],
  },
  {
    categoria: 'Maneras de vivir el mundo',
    items: ['Vida y profesión', 'Responsabilidad personal y social', 'Ciudadanía local y global', 'Cultura ciudadana'],
  },
];

export const SER_BUENA_GENTE_QUOTE: Quote = {
  text: 'Ser buena gente: esta es la condición principal en el perfil Digital Humano. En los equipos de innovación no hay lugar para las malas personas.',
  source: { author: 'Dr. José Farhat' },
};

// ── 05 · Ejemplos concretos — conceptos avanzados para sumar en la fase de Seguridad ──

export const ZERO_TRUST_QUOTE: Quote = {
  text: '"Nunca confiar, siempre verificar": cada solicitud de acceso debe autenticarse y autorizarse, sin asumir que algo es seguro por estar "adentro" de la red.',
  source: { author: 'NIST', note: 'Special Publication 800-207, Zero Trust Architecture', url: 'https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf' },
};

export const CIBERHIGIENE_QUOTE: Quote = {
  text: 'Ciberhigiene: conjunto de prácticas cotidianas para mejorar la seguridad digital — mantener el software actualizado, usar contraseñas fuertes, hacer copias de seguridad.',
  source: { author: 'Dr. José Farhat' },
};

// ── 06 · Ventajas ──

export const VENTAJAS_SOURCE: Source = { author: 'Dr. José Farhat', note: '"Oportunidades"' };

export const VENTAJAS: string[] = ['Acceso a la información', 'Comunicación global', 'Desarrollo de habilidades digitales', 'Creatividad'];

// ── 07 · Problemas / riesgos asociados ──

export const RIESGOS_DIRECTOS_SOURCE: Source = { author: 'Dr. José Farhat' };
export const RIESGOS_DIRECTOS: string[] = ['Ciberacoso', 'Grooming', 'Sextorsión', 'Sobreexposición', 'Adicciones tecnológicas'];

export const RIESGOS_AMPLIADOS_SOURCE: Source = { author: 'Dr. José Farhat', note: 'Primer Conversatorio Provincial (UTN)' };
export const RIESGOS_AMPLIADOS: string[] = [
  'Ciberbullying',
  'Sexting',
  'Grooming',
  'Impacto anímico',
  'Fake news',
  'Retos virales',
  'Adicción a las tecnologías / uso excesivo',
];

export const ICDL_QUOTE: Quote = {
  text: 'Las personas tienden a sobrestimar sus capacidades digitales, con brechas de competencias importantes en todos los países analizados. Incluso los jóvenes, a quienes suele considerarse "nativos digitales", muestran brechas tan amplias como el resto de la sociedad.',
  source: {
    author: 'ICDL Foundation',
    note: '"Percepción y Realidad: midiendo la brecha digital en Europa, India y Singapur" (2019) — estudio en Austria, Dinamarca, Finlandia, Alemania, Suiza, India y Singapur',
    url: 'https://icdl.org/percepcion-y-realidad-midiendo-las-habilidades-digitales/',
  },
};

export const SENALES_FRAUDE_SOURCE: Source = { author: 'Dr. José Farhat' };
export const SENALES_FRAUDE: string[] = [
  'Ofertas demasiado buenas para ser verdad',
  'Solicitudes urgentes de dinero',
  'Mensajes con errores gramaticales',
];

export const CIBERSEGURIDAD_PERSONAS_QUOTE: Quote = {
  text: 'Ciberseguridad centrada en las personas: el resguardo de personas, sociedades, organizaciones y países frente a ciberriesgos.',
  source: {
    author: 'ISO/IEC TS 27100:2020',
    note: '"Information technology — Cybersecurity — Overview and concepts". El estándar define ciberseguridad en general; la frase exacta "centrada en las personas" no está confirmada en la versión pública del documento',
    url: 'https://www.iso.org/standard/72434.html',
    unverified: true,
  },
};

export const INDEC_QUOTE: Quote = {
  text: '93,4% de acceso a internet y 61,0% de acceso a computadora en hogares urbanos (4to trimestre de 2023).',
  source: {
    author: 'INDEC',
    note: 'Encuesta Permanente de Hogares — Informes técnicos Vol. 8, N.º 111',
    url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mautic_05_24F87CFE2258.pdf',
  },
};

// ── 09 · Centro de recursos — listado completo de fuentes citadas ──

export interface FuenteCitada {
  n: number;
  label: string;
  url?: string;
  note?: string;
}

export const FUENTES_COMPLETAS: FuenteCitada[] = [
  { n: 1, label: 'Dr. José Farhat — Primer Conversatorio Provincial (UTN), presentación "Exposición Digital"', note: 'material propio' },
  { n: 2, label: 'Dr. José Farhat — "Un cambio de chip necesario"', note: 'material propio' },
  { n: 3, label: 'Mike Ribble / ISTE', url: RIBBLE_URL },
  { n: 4, label: 'Griffin, McGaw & Care (eds.) — Assessment and Teaching of 21st Century Skills (ATC21S)', url: 'https://link.springer.com/book/10.1007/978-94-017-9395-7' },
  { n: 5, label: 'Marc Prensky — "Digital Natives, Digital Immigrants" (2001)', url: 'https://doi.org/10.1108/10748120110424816' },
  { n: 6, label: 'Wikipedia — Cultura digital', url: 'https://es.wikipedia.org/wiki/Cultura_digital' },
  { n: 7, label: 'Wikipedia — Democracia digital', url: 'https://es.wikipedia.org/wiki/Democracia_digital' },
  { n: 8, label: 'World Bank — GovTech', url: 'https://www.worldbank.org/en/programs/govtech' },
  { n: 9, label: 'NIST Special Publication 800-207 — Zero Trust Architecture', url: 'https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf' },
  { n: 10, label: 'ICDL Foundation (2019)', url: 'https://icdl.org/percepcion-y-realidad-midiendo-las-habilidades-digitales/' },
  { n: 11, label: 'ISO/IEC TS 27100:2020', url: 'https://www.iso.org/standard/72434.html', note: 'frase exacta "centrada en las personas" sin verificar en versión pública' },
  { n: 12, label: 'INDEC — Encuesta Permanente de Hogares, Q4 2023', url: 'https://www.indec.gob.ar/uploads/informesdeprensa/mautic_05_24F87CFE2258.pdf' },
];

// ── 08 · Qué significa esto para el aula (sección de síntesis propia, sin citas) ──

export const AULA_SINTESIS = {
  intro:
    'De las 12 dimensiones, un docente no necesita trabajar las 12 con la misma profundidad. Alfabetización digital, seguridad digital, etiqueta digital y salud/bienestar digital son las que más directamente entran en el día a día del aula — no casualmente, son las que ya cubren las 3 fases actuales del Kit. Comercio digital, leyes digitales y Gov Tech son más relevantes para una materia de formación ciudadana o economía que para el acompañamiento cotidiano, pero vale la pena nombrarlas.',
  cierre:
    'El dato de ICDL Foundation es un buen punto de partida para una primera clase: nadie parte de cero, pero tampoco nadie sabe tanto como cree — buen argumento contra el supuesto de "son nativos digitales, ya saben usar la tecnología" que muchos adultos dan por sentado. Las 8 "actitudes de un buen ciudadano digital" funcionan directamente como rúbrica de aula. Y el modelo de competencias del siglo XXI (Maneras de pensar/trabajar/vivir el mundo) conecta la ciudadanía digital con objetivos pedagógicos más amplios que un docente ya persigue de todos modos.',
};

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
