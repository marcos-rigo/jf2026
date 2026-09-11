// Datos de contenido de la temática "Ciudadanía Digital" — landing de scroll continuo.
// Separado de la JSX siguiendo el patrón del resto del proyecto (arrays tipados + componentes que mapean sobre ellos).
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

export const HERO_TEXTO: {
  // Separado en línea1/destacado (en vez de un string único) para preservar
  // el salto de línea + estilo degradado del h2 original — la separación es
  // de layout, no cambia las palabras de cada variante.
  tituloLinea1: AudienciaTexto;
  tituloDestacado: AudienciaTexto;
  parrafo1: AudienciaTexto;
  parrafoDestacado: AudienciaTexto;
  parrafoCierre: AudienciaTexto;
  boton: AudienciaTexto;
} = {
  tituloLinea1: {
    docentes: 'Sé la Guía Digital',
    familias: 'Toma el Control',
  },
  tituloDestacado: {
    docentes: 'de tus Estudiantes',
    familias: 'de tu Vida en Línea',
  },
  parrafo1: {
    docentes:
      '¿Sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo? Entre la desinformación que circula por los grupos de WhatsApp del curso, los riesgos de privacidad que exponen sin saberlo, los sesgos de la Inteligencia Artificial que usan para hacer la tarea y los conflictos que se trasladan de las redes sociales al aula, acompañar la vida digital de tus estudiantes puede sentirse como caminar por un campo minado.',
    familias:
      '¿Sientes que la tecnología a veces te controla más a ti que tú a ella? Entre desinformación constante, riesgos de privacidad, sesgos de la IA y debates acalorados en redes sociales, navegar por internet puede sentirse como caminar por un campo minado.',
  },
  parrafoDestacado: {
    docentes:
      'El problema es que buena parte de tus estudiantes interactúa en el mundo digital en "piloto automático" — y muchas veces vos también, entre la carga docente y la velocidad con la que cambian las plataformas. La Ciudadanía Digital no es solo saber usar un dispositivo: es tener las herramientas para enseñar a protegerse, convivir con respeto y aprovechar la red para el desarrollo de cada estudiante, dentro y fuera del aula.',
    familias:
      'El problema es que a menudo interactuamos en el mundo digital en "piloto automático". La Ciudadanía Digital no es solo saber usar un dispositivo: es tener las herramientas para protegerte, convivir con respeto y aprovechar la red para tu propio desarrollo.',
  },
  parrafoCierre: {
    docentes:
      'En este Kit dejamos la teoría de lado. Te guiamos paso a paso con estrategias que podés llevar directo al aula: cómo trabajar la seguridad digital con tus estudiantes, cómo mediar los conflictos de convivencia que llegan desde las redes, y cómo enseñarles a detectar información falsa antes de que la compartan.',
    familias:
      'En esta plataforma, dejamos la teoría de lado. Te guiaremos paso a paso para que audites tu huella en línea, protejas tus datos y aprendas a detectar información falsa como un profesional.',
  },
  boton: {
    docentes: 'Iniciar el Kit Docente',
    familias: 'Iniciar Protocolo',
  },
};

// El carrusel de recursos se trasladó del Hero al Centro de Recursos
// (components/ciudadania-digital/herramientas-section.tsx) pero el header
// sigue siendo texto "de audiencia" — se mantiene documentado acá junto al
// resto del contenido del Hero original.
export const HERO_CARRUSEL_HEADER: { label: AudienciaTexto; titulo: AudienciaTexto } = {
  label: {
    docentes: 'Material para el aula',
    familias: 'Presentación completa',
  },
  titulo: {
    docentes: 'Ciudadanía Digital — Recursos para el Aula',
    familias: 'Ciudadanía Digital — Galería',
  },
};

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

// ── Fase 01 · Seguridad (components/ciudadania-digital/paso1-section.tsx) ──

export const PASO1_TEXTO: {
  titulo: AudienciaTexto;
  subtitulo: AudienciaTexto;
  objetivo: AudienciaTexto;
  instruccion1: AudienciaTexto;
  instruccion2: AudienciaTexto;
  instruccion3: AudienciaTexto;
  aplicacionPractica: AudienciaTexto;
  graficoTitulo: AudienciaTexto;
  alerta: AudienciaTexto;
  finalTitulo: AudienciaTexto;
  finalTexto: AudienciaTexto;
} = {
  titulo: {
    docentes: 'Construí el Escudo Digital de tu Aula',
    familias: 'Construye tu Escudo Digital',
  },
  subtitulo: {
    docentes: 'Seguridad y privacidad: la base que tus estudiantes necesitan antes que nada.',
    familias: 'Seguridad y Privacidad como base de tu ciudadanía.',
  },
  objetivo: {
    docentes:
      'Ayudar a tus estudiantes —y a vos mismo/a— a blindar la identidad digital y reducir la vulnerabilidad ante ciberataques. La vida digital necesita cerraduras modernas: contraseñas como "123456" o el propio cumpleaños son puertas abiertas, y es habitual encontrarlas en los dispositivos que usan chicos y chicas en el aula.',
    familias:
      'Blindar tu identidad digital y reducir tu vulnerabilidad ante ciberataques. Tu vida digital necesita cerraduras modernas. Las contraseñas como "123456" son puertas abiertas.',
  },
  instruccion1: {
    docentes:
      'Trabajá con tus estudiantes la creación de contraseñas fuertes (mínimo 12 caracteres, combinando mayúsculas, minúsculas, números y símbolos) — podés convertirlo en una actividad de 10 minutos al inicio de una clase.',
    familias: 'Crea contraseñas fuertes (min. 12 caracteres, mezcla mayús/minús/números/símbolos)',
  },
  instruccion2: {
    docentes:
      'Mostrales cómo activar la autenticación de dos factores (2FA) en las cuentas que más usan: correo institucional, redes sociales, plataformas de la escuela.',
    familias: 'Activa la autenticación de dos factores (2FA) en tus cuentas críticas',
  },
  instruccion3: {
    docentes:
      'Guialos a revisar los permisos de las apps que tienen instaladas: cámara, micrófono, ubicación. Muchos nunca los revisaron.',
    familias: 'Revisa tus permisos de apps: cámara, micrófono, ubicación',
  },
  aplicacionPractica: {
    docentes:
      'Actividad para el aula: pedile a tus estudiantes que revisen (sin decir la contraseña en voz alta) cuántas de sus cuentas principales NO tienen 2FA activado. Ese conteo grupal, sin exponer a nadie, es un buen disparador para la charla.',
    familias: 'Abre tu gestor de contraseñas ahora. ¿Cuántas de tus cuentas principales NO tienen 2FA? Ese es tu primer objetivo.',
  },
  graficoTitulo: {
    docentes: 'Así Suele Estar la Seguridad de un Curso',
    familias: 'Estado de Seguridad Global',
  },
  alerta: {
    docentes:
      'Una cuenta sin 2FA es hasta 99% más vulnerable a ataques de fuerza bruta — vale la pena compartir este dato concreto con tus estudiantes, suele impactar más que la advertencia genérica.',
    familias: 'Si tienes cuentas sin 2FA, eres 99% más vulnerable a ataques de fuerza bruta.',
  },
  finalTitulo: {
    docentes: 'Actividad para el aula',
    familias: 'Entrenamiento de la sección',
  },
  finalTexto: {
    docentes:
      'Actividad de 10 minutos: pedile a tus estudiantes que abran los permisos de apps en su celular y revoquen el acceso a cámara/micrófono de 3 aplicaciones que no lo necesiten (por ejemplo, juegos offline). Podés hacerlo vos primero, como docente, para mostrar el paso a paso.',
    familias:
      'Haz una limpieza digital de 5 min. Ve a los permisos de apps en tu celular y revoca acceso a cámara/micrófono a 3 aplicaciones que no lo necesiten (ej. juegos offline).',
  },
};

// ── Fase 02 · Netiqueta (components/ciudadania-digital/paso2-section.tsx) ──

export const PASO2_TEXTO: {
  titulo: AudienciaTexto;
  subtitulo: AudienciaTexto;
  objetivo: AudienciaTexto;
  protocolo1: AudienciaTexto;
  protocolo2: AudienciaTexto;
  protocolo3: AudienciaTexto;
  protocolo4: AudienciaTexto;
  ejemploTitulo: AudienciaTexto;
  porQueFunciona: AudienciaTexto;
  auditoriaTitulo: AudienciaTexto;
  auditoriaTexto: AudienciaTexto;
  aporteTexto: AudienciaTexto;
} = {
  titulo: {
    docentes: 'Trabajá la "Netiqueta" con tu Curso',
    familias: 'Aplica la "Netiqueta"',
  },
  subtitulo: {
    docentes: 'Modelá y enseñá la convivencia digital, dentro y fuera del aula.',
    familias: 'Lidera la convivencia en tus interacciones diarias.',
  },
  objetivo: {
    docentes:
      'Que tus estudiantes aprendan a interactuar en línea con empatía, evitando malentendidos y construyendo una huella digital positiva — y que vos tengas herramientas para mediar cuando un conflicto de WhatsApp o Instagram se traslada al aula. La Netiqueta son las normas no escritas del ecosistema digital: lo que se escribe también construye reputación, la de cada estudiante y la de la institución.',
    familias:
      'Interactuar en línea con empatía, evitando malentendidos y construyendo una huella digital positiva. La Netiqueta son las normas no escritas del ecosistema digital. Tu texto es tu reputación.',
  },
  protocolo1: {
    docentes:
      'Enseñales a leer antes de responder. Muchos conflictos entre estudiantes arrancan por malinterpretar un mensaje sin contexto — funciona pedirles que lean dos veces antes de contestar en caliente.',
    familias: 'Lee antes de responder. Evita malinterpretaciones por falta de contexto.',
  },
  protocolo2: {
    docentes:
      'Modelá el respeto aunque no haya acuerdo. Ayudalos a diferenciar un debate constructivo de un ataque personal — es una distinción que se puede trabajar con ejemplos reales de sus propios grupos.',
    familias: 'Sé respetuoso aunque no estés de acuerdo. Los debates constructivos no son ataques personales.',
  },
  protocolo3: {
    docentes:
      'Conversá sobre el spam y la autopromoción excesiva en los grupos del curso — cadenas, reenvíos sin filtrar. Fomentá que cada mensaje aporte algo.',
    familias: 'Evita el SPAM y la autopromoción excesiva. Aporta valor.',
  },
  protocolo4: {
    docentes:
      'Insistí en verificar fuentes antes de reenviar noticias o información sensible al grupo del curso — esto conecta directo con lo que van a trabajar en la Fase 03.',
    familias: 'Verifica fuentes antes de compartir noticias o información sensible.',
  },
  ejemploTitulo: {
    docentes: 'Un Ejemplo para Compartir con tu Curso',
    familias: 'Ejemplo de Buen Comentario',
  },
  porQueFunciona: {
    docentes: 'Es constructivo, abierto, sin ego y busca aprender. Podés usarlo como modelo en clase.',
    familias: 'Es constructivo, abierto, sin ego y busca aprender.',
  },
  auditoriaTitulo: {
    docentes: 'Auditoría de Huella (para vos y para ellos)',
    familias: 'Auditoría de Huella',
  },
  auditoriaTexto: {
    docentes:
      'Proponeles buscar su propio nombre en Google en modo incógnito y revisar qué aparece en la primera página: fotos, comentarios, resultados. Esa es su huella digital pública hoy. Podés hacer el ejercicio vos primero, como docente, para mostrar cómo se hace sin exponer a nadie.',
    familias:
      'Busca tu nombre en Google (Modo Incógnito). Revisa imágenes y resultados de la primera página. Esa es tu huella digital pública actual. ¿Refleja al profesional que quieres ser?',
  },
  aporteTexto: {
    docentes:
      'Proponeles escribir esta semana un comentario constructivo o un mensaje de agradecimiento en el perfil de un compañero, docente o creador que valoren. Es una forma simple de empezar a construir una huella digital positiva.',
    familias:
      'Escribe hoy un mensaje de agradecimiento o un comentario constructivo en el perfil de un colega o creador que valores. Construye red.',
  },
};

// ── Fase 03 · IA y Bulos (components/ciudadania-digital/paso3-section.tsx) ──

export const PASO3_TEXTO: {
  titulo: AudienciaTexto;
  subtitulo: AudienciaTexto;
  intro: AudienciaTexto;
  checklistTitulo: AudienciaTexto;
} = {
  titulo: {
    docentes: 'Pensamiento Crítico frente a la IA y los Bulos',
    familias: 'Análisis Crítico y Bulos',
  },
  subtitulo: {
    docentes: 'Dales a tus estudiantes las herramientas para entender la IA y frenar la desinformación antes de que la compartan.',
    familias: 'Entiende la Inteligencia Artificial y frena la desinformación.',
  },
  intro: {
    docentes:
      'La era de la IA generativa trae capacidades asombrosas para el aula (resúmenes, tutores virtuales, generación de material), pero también democratiza la desinformación ultrarrealista: deepfakes, textos sintéticos, imágenes falsas que tus estudiantes se van a encontrar en algún momento. Tu rol como docente es ayudarlos a no ser un nodo más de retransmisión de datos falsos, y a usar la IA con criterio en sus propios trabajos.',
    familias:
      'La era de la IA generativa trae capacidades asombrosas, pero democratiza la desinformación ultrarrealista (Deepfakes, textos sintéticos). Tu deber es no ser un nodo de retransmisión de datos falsos.',
  },
  checklistTitulo: {
    docentes: 'Checklist Anti-Bulos (para trabajar en clase)',
    familias: 'Checklist Anti-Bulos',
  },
};

// Descripciones del framework VERIFICA — mismo orden que el array de
// paso3-section.tsx (V, E, R, I·Identifica, F, I·Intuición, C, A). Letra,
// título y color no cambian por audiencia, solo la descripción.
export const VERIFICA_DESC: AudienciaTexto[] = [
  {
    docentes: 'Enseñales a buscar el medio original y a chequear su reputación en sitios de fact-checking antes de creer o compartir.',
    familias: 'Busca el medio original, verifica su reputación en fact-checkers.',
  },
  {
    docentes: 'Si solo una o dos fuentes lo reportan, puede ser propaganda o un rumor sin chequear. Pediles que busquen una segunda fuente antes de dar algo por cierto.',
    familias: 'Si solo 1-2 fuentes lo reportan, puede ser propaganda.',
  },
  {
    docentes: 'Trabajá con ellos la pregunta: ¿lo creo porque es cierto, o porque quiero que sea cierto? Es un buen disparador de debate en el aula.',
    familias: 'Pregúntate: ¿Creo esto porque es cierto o porque deseo que sea cierto?',
  },
  {
    docentes: 'Deepfakes, ediciones de video, imágenes generadas por IA. Mostrales herramientas simples para detectar señales de manipulación.',
    familias: 'Deepfakes, ediciones de vídeo. Revisa metadatos si es posible.',
  },
  {
    docentes: 'Noticias viejas que circulan como si fueran actuales. Ayudalos a chequear siempre la fecha y el contexto original.',
    familias: 'Noticias viejas recicladas. Entiende el contexto temporal.',
  },
  {
    docentes: 'Si algo parece demasiado extremo o raro, probablemente lo sea. Enseñales a desconfiar del "así fue siempre" o del "todo el mundo lo dice".',
    familias: 'Si algo parece raro, probablemente lo sea. Desconfía del "sentido común".',
  },
  {
    docentes: 'Proponeles leer sobre un mismo tema en dos medios con líneas editoriales distintas, para que vean cómo cambia el enfoque.',
    familias: 'Lee análisis de fuentes con diferentes sesgos políticos.',
  },
  {
    docentes:
      'Antes de reenviar algo al grupo del curso o a sus redes, ya verificaron. Ayudalos a entender que también son un "gate-keeper (guardián/a de la información)" confiable para quienes los rodean.',
    familias: 'Antes de compartir, ya verificaste. Sé un "gate-keeper" confiable.',
  },
];

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

// ── 08 · Centro de Recursos (components/ciudadania-digital/herramientas-section.tsx) ──

export const RECURSOS_TEXTO: {
  tituloSeccion: AudienciaTexto;
  subtitulo: AudienciaTexto;
  progresoBajo: AudienciaTexto;
  progresoMedio: AudienciaTexto;
  progresoAlto: AudienciaTexto;
  cierreTitulo: AudienciaTexto;
  cierreTexto: AudienciaTexto;
} = {
  tituloSeccion: {
    docentes: 'Centro de Recursos Docente',
    familias: 'Centro de Control',
  },
  subtitulo: {
    docentes: 'Herramientas, autoevaluación y respuestas frecuentes para llevar al aula.',
    familias: 'Métricas, auditoría y base de conocimientos.',
  },
  progresoBajo: {
    docentes: '⚠️ Conviene reforzar antes de llevarlo al aula',
    familias: '⚠️ Necesitas reforzar urgente',
  },
  progresoMedio: {
    docentes: '✓ Buen progreso. Vas bien encaminado/a',
    familias: '✓ Buen progreso. Mantén el ritmo',
  },
  progresoAlto: {
    docentes: '✨ ¡Excelente! Estás listo/a para guiar a tu curso con el ejemplo',
    familias: '✨ ¡Excelente! Eres un ciudadano digital responsable',
  },
  cierreTitulo: {
    docentes: 'Kit Docente Completado',
    familias: 'Protocolo Completado',
  },
  cierreTexto: {
    docentes:
      'Completaste el kit básico. Ahora tenés las herramientas para acompañar a tus estudiantes en su vida digital con criterio propio. Mantené tus prácticas actualizadas y seguí promoviendo la convivencia cívica dentro y fuera del aula.',
    familias:
      'Has completado el protocolo básico. Eres un nodo seguro en la red. Mantén tus defensas actualizadas y promueve la convivencia cívica en tus comunidades digitales.',
  },
};

export interface ChecklistItem {
  id: string;
  label: AudienciaTexto;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'password',
    label: {
      docentes: 'Cambié mis 3 contraseñas principales y le mostré el proceso a mi curso',
      familias: 'Cambié mis 3 contraseñas principales',
    },
  },
  {
    id: '2fa',
    label: {
      docentes: 'Activé 2FA en mi correo institucional, redes sociales y banco',
      familias: 'Activé 2FA en Gmail, redes sociales, banco',
    },
  },
  {
    id: 'permissions',
    label: {
      docentes: 'Revisé los permisos de apps en mi celular junto con mis estudiantes',
      familias: 'Revisé permisos de apps en móvil',
    },
  },
  {
    id: 'privacy',
    label: {
      docentes: 'Ajusté la privacidad de mis redes sociales, separando mi perfil docente del personal',
      familias: 'Ajusté privacidad en redes sociales a "amigos"',
    },
  },
  {
    id: 'cookies',
    label: {
      docentes: 'Rechacé cookies no esenciales en mis últimas navegaciones',
      familias: 'Rechazé cookies no esenciales (últimas 3 visitas)',
    },
  },
  {
    id: 'google-search',
    label: {
      docentes: 'Busqué mi nombre en Google en modo incógnito',
      familias: 'Busqué mi nombre en Google Incógnito',
    },
  },
  {
    id: 'comments',
    label: {
      docentes: 'Trabajé con mi curso un ejemplo de comentario constructivo esta semana',
      familias: 'Escribí un comentario constructivo esta semana',
    },
  },
  {
    id: 'fake-news',
    label: {
      docentes: 'Apliqué el framework VERIFICA en clase para analizar una noticia con mis estudiantes',
      familias: 'Detecté una noticia falsa usando el framework VERIFICA',
    },
  },
];

export interface FaqItemAudiencia {
  id: string;
  question: AudienciaTexto;
  answer: AudienciaTexto;
}

export const FAQ_ITEMS: FaqItemAudiencia[] = [
  {
    id: 'faq-1',
    question: {
      docentes: '¿La privacidad de mis estudiantes está realmente en riesgo?',
      familias: '¿Mi privacidad está realmente en riesgo?',
    },
    answer: {
      docentes:
        'Sí. Cada click, búsqueda y "me gusta" que hacen tus estudiantes es capturado y puede venderse a terceros. Grandes corporaciones construyen perfiles de comportamiento sobre cada chico y chica. La privacidad es un derecho, y enseñar a defenderla es parte de la formación ciudadana que le toca a la escuela.',
      familias:
        'Sí. Cada click, búsqueda y "like" es capturado y vendido a terceros. Grandes corporaciones construyen perfiles de comportamiento tuyo. La privacidad es un derecho; defenderla es un acto cívico.',
    },
  },
  {
    id: 'faq-2',
    question: {
      docentes: '¿Se puede rastrear a alguien incluso en "Modo Incógnito"?',
      familias: '¿Pueden rastrearme incluso en "Modo Incógnito"?',
    },
    answer: {
      docentes:
        'Técnicamente sí. El ISP (proveedor de internet) sigue viendo la actividad, y los sitios web pueden rastrear por IP, cookies persistentes o técnicas de fingerprinting (identificación del dispositivo por sus características técnicas). Es útil que tus estudiantes entiendan que el modo incógnito es una capa más de privacidad, no una capa invulnerable.',
      familias:
        'Técnicamente, tu ISP (proveedor de internet) sigue viendo lo que haces. Sitios web pueden rastrearte por IP, cookies persistentes, o técnicas avanzadas de fingerprinting. Es una capa más de privacidad, no es invulnerable.',
    },
  },
  {
    id: 'faq-3',
    question: {
      docentes: '¿Cómo les enseño a mis estudiantes a saber si una noticia es real?',
      familias: '¿Cómo sé si una noticia es real?',
    },
    answer: {
      docentes:
        'Insistí en que nunca confíen en un solo medio. El framework VERIFICA que trabajamos en la Fase 03 les da un método concreto: verificar la fuente, buscar evidencia múltiple, revisar el propio sesgo, identificar cambios o ediciones, verificar fecha y contexto, aplicar intuición crítica, contrastar perspectivas y actuar con responsabilidad antes de compartir.',
      familias:
        'Nunca confíes en un solo medio. Usa el framework VERIFICA: verifica la fuente, busca evidencia múltiple, revisa tu sesgo, identifica cambios, verifica fecha y contexto, aplica intuición crítica, contrasta perspectivas y actúa responsablemente.',
    },
  },
];

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

export const AULA_SINTESIS: { intro: AudienciaTexto; cierre: AudienciaTexto } = {
  intro: {
    docentes:
      'De las 12 dimensiones, un docente no necesita trabajar las 12 con la misma profundidad. Alfabetización digital, seguridad digital, etiqueta digital y salud/bienestar digital son las que más directamente entran en el día a día del aula — no casualmente, son las que ya cubren las 3 fases actuales del Kit. Comercio digital, leyes digitales y Gov Tech son más relevantes para una materia de formación ciudadana o economía que para el acompañamiento cotidiano, pero vale la pena nombrarlas.',
    familias:
      'De las 12 dimensiones, no hace falta que trabajes las 12 con la misma profundidad en casa. Alfabetización digital, seguridad digital, etiqueta digital y salud/bienestar digital son las que más directamente entran en el día a día de acompañar a tus hijos — no casualmente, son las que ya cubren las 3 fases actuales del Kit. Comercio digital, leyes digitales y Gov Tech son más relevantes para lo que van a ver en la escuela que para el acompañamiento cotidiano en casa, pero vale la pena que sepas que existen.',
  },
  cierre: {
    docentes:
      'El dato de ICDL Foundation es un buen punto de partida para una primera clase: nadie parte de cero, pero tampoco nadie sabe tanto como cree — buen argumento contra el supuesto de "son nativos digitales, ya saben usar la tecnología" que muchos adultos dan por sentado. Las 8 "actitudes de un buen ciudadano digital" funcionan directamente como rúbrica de aula. Y el modelo de competencias del siglo XXI (Maneras de pensar/trabajar/vivir el mundo) conecta la ciudadanía digital con objetivos pedagógicos más amplios que un docente ya persigue de todos modos.',
    familias:
      'El dato de ICDL Foundation es un buen punto de partida para una charla en casa: nadie parte de cero, pero tampoco nadie sabe tanto como cree — buen argumento contra el supuesto de "son nativos digitales, ya saben usar la tecnología" que muchos padres dan por sentado. Las 8 "actitudes de un buen ciudadano digital" funcionan directamente como una lista de acuerdos familiares. Y el modelo de competencias del siglo XXI conecta la ciudadanía digital con las mismas habilidades que ya querés para el futuro de tus hijos, más allá de la tecnología.',
  },
};

export const AULA_TITULO: AudienciaTexto = {
  docentes: 'Para el Aula',
  familias: 'Para tu Casa',
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
