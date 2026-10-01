// Contenido de /tematicas/instrumental-y-acceso. Mismo patrón que lib/ciudadania-digital-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía resolveContenido()
// (misma regla que resolveTexto: audiencia activa si tiene contenido, si no el fallback explícito,
// si no el primero definido). Sin fuentes/citas: las referencias van como texto plano (sin SourceCite).
//
// Las 10 secciones (Prompts 2 y 3 de 5) ya tienen texto real.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';

export const INSTRUMENTAL_ACCESO_FALLBACK: Audiencia = 'docentes';

export interface TocSection {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  // Opcionales: si están, ganan sobre label/shortLabel (ver toc-nav.tsx).
  labelAudiencia?: AudienciaTexto;
  shortLabelAudiencia?: AudienciaTexto;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: 'introduccion', number: '01', label: 'Introducción', shortLabel: 'Intro' },
  { id: 'lo-que-vas-a-lograr', number: '02', label: 'Lo que vas a lograr', shortLabel: 'Objetivos' },
  { id: 'por-que-importa', number: '03', label: 'Por qué importa', shortLabel: 'Por qué' },
  { id: 'de-donde-partimos', number: '04', label: 'De dónde partimos', shortLabel: 'Punto de partida' },
  { id: 'capacidad-y-acceso', number: '05', label: 'Capacidad y acceso', shortLabel: 'Capacidad' },
  { id: 'un-caso-resuelto', number: '06', label: 'Un caso resuelto', shortLabel: 'Caso' },
  { id: 'practica-vos', number: '07', label: 'Practicá vos', shortLabel: 'Practicá' },
  { id: 'pone-a-prueba', number: '08', label: 'Poné a prueba lo aprendido', shortLabel: 'Quiz' },
  { id: 'llevalo-a-tu-aula', number: '09', label: 'Llevalo a tu aula', shortLabel: 'Aula' },
  { id: 'recursos-y-cierre', number: '10', label: 'Recursos y cierre', shortLabel: 'Cierre' },
];

// Bloque de datos para components/instrumental-acceso/ficha-aula.tsx (FichaAulaProps),
// definido acá en la capa de contenido para no acoplar lib/ a components/.
type FichaAulaBloque = { tipo: 'parrafo'; texto: string } | { tipo: 'lista'; items: string[] };

export interface FichaAulaData {
  titulo: string;
  objetivo: string;
  desarrollo: FichaAulaBloque[];
  preguntaDetonadora: string;
  actividades: { titulo: string; texto: string }[];
  frase: string;
  glosario: string[];
  referencias: string[];
}

export interface Contenido {
  introduccion: {
    titulo: string;
    subtitulo: string;
    // La bajada tiene un link interno a /ciudadania-digital en medio del texto ("módulo madre").
    bajadaAntes: string;
    bajadaEnlaceTexto: string;
    bajadaEnlaceHref: string;
    bajadaDespues: string;
    listaTitulo: string;
    lista: string[];
  };
  loQueVasALograr: {
    titulo: string;
    competenciaEtiqueta: string;
    competencia: string;
    objetivosTitulo: string;
    objetivos: string[];
  };
  porQueImporta: {
    titulo: string;
    pregunta: string;
    parrafos: string[];
    problema: string;
    placeholder: string;
    ayuda: string;
  };
  deDondePartimos: {
    titulo: string;
    parrafos: string[];
    preguntaCierre: string;
    fichaAula: FichaAulaData;
  };
  capacidadYAcceso: {
    titulo: string;
    bloques: { subtitulo: string; texto: string }[];
    parrafoCierre: string;
    fichaAula: FichaAulaData;
  };
  unCasoResuelto: {
    titulo: string;
    subtitulo: string;
    caso: string;
    fases: { numero: number; titulo: string; texto: string; nota: string }[];
  };
  practicaVos: {
    titulo: string;
    intro: string;
    opcionesEleccion: { value: 'persona' | 'diseno' | 'ambos'; label: string }[];
    revelarLabel: string;
    situaciones: { clave: 's1' | 's2' | 's3'; enunciado: string; analisis: string; nota: string }[];
    error: {
      subtitulo: string;
      intro: string;
      cita: string;
      botonLabel: string;
      // El texto tiene un link interno a /ciudadania-digital en medio ("módulo madre").
      textoAntes: string;
      textoEnlaceTexto: string;
      textoEnlaceHref: string;
      textoDespues: string;
    };
  };
  poneAPrueba: {
    titulo: string;
    intro: string;
    correcto: string;
    incorrecto: string;
    preguntas: {
      objetivo: string;
      enunciado: string;
      correcta: string;
      opciones: { id: string; texto: string; feedback: string }[];
    }[];
    rubricaTitulo: string;
    rubricaIntro: string;
    rubricaColNivel: string;
    rubricaColMuestra: string;
    rubrica: { nivel: string; muestra: string }[];
    rubricaCierre: string;
  };
  llevaloATuAula: {
    titulo: string;
    parrafo1: string;
    accionSemana: string;
    parrafo3: string;
    respuestaOriginalEtiqueta: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    campoEtiqueta: string;
    fichaAula: FichaAulaData;
  };
  recursosYCierre: {
    titulo: string;
    cambioTitulo: string;
    cambioInstruccion: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    pregunta: string;
    placeholder: string;
    nota: string;
    llevarteTitulo: string;
    tarjeta: { titulo: string; parrafos: string[] };
    seguiTitulo: string;
    seguiParrafo: string;
    seguiLinkTexto: string;
    seguiLinkHref: string;
    // Enlace a la siguiente dimensión del Poliedro. No está en el docx fuente de esta
    // temática (content-management/Dimension_Instrumental_y_Acceso.docx): es un agregado
    // posterior de navegación cruzada entre temáticas, no un faltante de cobertura.
    siguienteDimensionTexto: string;
    siguienteDimensionHref: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const FICHA_CONECTARSE_CON_SENTIDO: FichaAulaData = {
  titulo: 'Conectarse con sentido: acceso, alfabetización y equidad digital',
  objetivo:
    'Comprender que el acceso a la tecnología no solo implica conectividad, sino también el desarrollo de habilidades para usarla de forma crítica, creativa y justa.',
  desarrollo: [
    {
      tipo: 'parrafo',
      texto:
        'La alfabetización digital es una de las bases fundamentales de la ciudadanía en el siglo XXI. Sin acceso a dispositivos, conectividad y competencias digitales básicas, no hay inclusión digital posible.',
    },
    { tipo: 'parrafo', texto: 'Pero el acceso no se trata solo de tener un celular o wifi. Implica:' },
    {
      tipo: 'lista',
      items: [
        'Condiciones materiales adecuadas: conectividad estable, dispositivos funcionales.',
        'Habilidades básicas de uso: encender, buscar, navegar, instalar, escribir.',
        'Comprensión crítica: saber cómo funcionan las plataformas, qué riesgos existen, qué decisiones tomamos al usar tecnología.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta dimensión también implica reconocer y reducir la brecha digital: hay personas que tienen acceso limitado por razones económicas, culturales, geográficas, de género, discapacidad o edad. La alfabetización digital busca empoderar para que nadie quede afuera del mundo digital.',
    },
  ],
  preguntaDetonadora: '¿Tener un celular significa estar incluido digitalmente? ¿Qué falta además de conexión?',
  actividades: [
    {
      titulo: 'Actividad inicial — "¿Quién accede y quién no?" (15 min)',
      texto:
        'En grupos, listan qué necesitan para usar internet: ¿Qué dispositivos? ¿Qué conocimientos? ¿Qué apoyos o redes? Luego identifican qué personas o grupos no tienen esas condiciones y por qué.',
    },
    {
      titulo: 'Actividad principal — "Mapa de inclusión digital" (45 min)',
      texto:
        'Los equipos investigan (con datos reales o simulados) cómo es el acceso digital en distintas realidades: campo vs. ciudad, personas adultas mayores, comunidades indígenas, escuelas públicas vs. privadas. Arman un mapa visual con las desigualdades detectadas y proponen al menos 2 ideas para promover mayor equidad digital desde la escuela o la comunidad.',
    },
  ],
  frase: '"Conectarse es un derecho. Usar bien la tecnología, una herramienta para la justicia social."',
  glosario: ['Alfabetización digital', 'Brecha digital', 'Equidad tecnológica', 'Acceso significativo', 'Competencias básicas'],
  referencias: [
    'Documento Orientador de Ciudadanía Digital – Argentina',
    'UNESCO – Marco de Competencias Digitales para Ciudadanía',
    'educ.ar',
    'Chicos.net – Módulo: Acceso y alfabetización',
    'Video: "Brecha digital: ¿qué se necesita además del wifi?"',
  ],
};

const FICHA_SER_TU_PROPIO_MAESTRO: FichaAulaData = {
  titulo: 'Ser tu propio maestro digital: cómo aprender, organizarte y avanzar en línea',
  objetivo:
    'Desarrollar habilidades de autonomía, organización y autoevaluación para usar la tecnología como aliada en procesos de aprendizaje personal, colaborativo y continuo.',
  desarrollo: [
    {
      tipo: 'parrafo',
      texto:
        'La tecnología digital ofrece oportunidades enormes para aprender cuándo, cómo y desde dónde quieras: cursos virtuales, tutoriales, videos, podcasts, juegos, plataformas educativas, IA educativa, etc.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero ese acceso no garantiza que el aprendizaje sea significativo. Es necesario desarrollar la competencia de "aprender a aprender" con tecnología, que implica:',
    },
    {
      tipo: 'lista',
      items: [
        'Identificar objetivos personales de aprendizaje',
        'Organizar tiempos, recursos y espacios propios',
        'Elegir plataformas o formatos adecuados a los propios estilos',
        'Usar herramientas para gestionar tareas y progresos (por ejemplo, apps de organización)',
        'Autoevaluarse y ajustar estrategias si algo no funciona',
        'Mantener la curiosidad y el sentido del propósito',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'También se trata de cultivar la metacognición: es decir, pensar sobre cómo pensamos, aprendemos y decidimos en entornos digitales. Ser autónomo digitalmente no es estar solo: es saber cómo avanzar con sentido y criterio.',
    },
  ],
  preguntaDetonadora: '¿Qué aprendiste por tu cuenta gracias a internet? ¿Cómo sabés que estás aprendiendo bien?',
  actividades: [
    {
      titulo: 'Actividad inicial — "Mi forma de aprender" (15 min)',
      texto:
        'Cada estudiante responde: ¿Aprendés mejor viendo, escuchando, haciendo o explicando? ¿Qué tecnología te ayudó a aprender algo fuera de la escuela? Se clasifican tipos de aprendizajes digitales y estilos personales.',
    },
    {
      titulo: 'Actividad principal — "Diseño mi plan de aprendizaje digital" (45-60 min)',
      texto:
        'Cada estudiante elige un tema que le gustaría aprender (académico o personal: edición de video, arte digital, historia, cocina, IA, ciudadanía, idiomas, etc.) y diseña un plan de 5 pasos que incluya: objetivo concreto, recursos digitales (apps, canales, tutoriales, webs, personas mentoras), tiempo estimado, estrategia de seguimiento o evaluación, y un producto final (presentación, portafolio, desafío, grabación, etc.). Comparten sus planes y reciben devolución del grupo o del docente.',
    },
  ],
  frase: '"Aprender a tu ritmo, con tu estilo y tu propósito: eso también es libertad digital."',
  glosario: ['Aprender a aprender', 'Autonomía digital', 'Metacognición', 'Autoevaluación', 'Curiosidad digital'],
  referencias: [
    'Plataforma Educ.ar – Aulas virtuales, guías de autoaprendizaje',
    'Fundación Varkey – Ruta de aprendizaje autónomo con TIC',
    'App Notion, Trello o Google Calendar – planificación personal',
    'Khan Academy, Duolingo, Domestika – plataformas de autoaprendizaje',
    'Video: "No paro de aprender: cómo usar lo digital a mi favor" – Canal Encuentro',
  ],
};

const FICHA_DETECTOR_DE_TECNOLOGIA: FichaAulaData = {
  titulo: 'Detector de tecnología',
  objetivo:
    'Comprender el rol de la tecnología en la vida cotidiana y desarrollar habilidades para su uso crítico, responsable y creativo como herramienta de participación ciudadana.',
  desarrollo: [
    {
      tipo: 'parrafo',
      texto:
        'La tecnología no solo transforma nuestro entorno: también modifica nuestras formas de pensar, comunicarnos y relacionarnos. Desde un mensaje de WhatsApp hasta la automatización de procesos sociales complejos, lo digital está integrado en nuestras rutinas diarias.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por eso es importante que los estudiantes reconozcan que la tecnología no es solo consumo: también es producción, participación y toma de decisiones. Comprender cómo funciona la tecnología — y cómo podemos usarla para resolver problemas reales — es clave para ejercer una ciudadanía digital crítica y transformadora.',
    },
  ],
  preguntaDetonadora: '¿Cuántas decisiones tomás por día usando tecnología? ¿Creés que la tecnología te ayuda a pensar más o menos por vos mismo?',
  actividades: [
    {
      titulo: 'Actividad inicial — "Detector de tecnología" (10-15 min)',
      texto:
        'En grupos, los estudiantes hacen una lista de todos los objetos tecnológicos que usaron en el día desde que se levantaron. Preguntas guía: ¿Cuáles son imprescindibles? ¿Cuáles se podrían reemplazar? ¿Qué pasaría si no los tuvieras?',
    },
    {
      titulo: 'Actividad principal — "Laboratorio de soluciones tecnológicas" (45 min)',
      texto:
        'En equipos, eligen un problema real (organización escolar, reciclaje, comunicación con adultos, seguridad en la calle). Piensan cómo podrían resolverlo usando una herramienta tecnológica (app, mapa interactivo, formulario, video, juego, código). Esbozan un prototipo sencillo — maqueta, dibujo, demo en PowerPoint o presentación en Genially. Cada grupo presenta su solución explicando: ¿qué problema resuelve?, ¿qué herramienta usan y por qué?, ¿a quién ayuda?',
    },
  ],
  frase: '"La tecnología no es magia. Es una herramienta. Lo que importa es cómo la usamos para mejorar el mundo."',
  glosario: ['Tecnología digital', 'Resolución de problemas', 'Pensamiento creativo', 'Automatización', 'Innovación ciudadana'],
  referencias: [
    'EducApps para resolución de problemas',
    'Genially – para prototipos interactivos',
    'Tecnología y Sociedad – Aporte DTE',
    'Guía "Pensamiento Computacional y Ciudadanía" – Ministerio de Educación',
    'Actividad "Crear una app para tu barrio" – Chicos.net',
  ],
};

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Dimensión Instrumental y Acceso',
    subtitulo: 'De saber tocar pantallas a tener capacidad real',
    bajadaAntes: 'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Distinguir entre saber moverse en una app conocida y tener una capacidad instrumental que se transfiere a herramientas nuevas.',
      'Entender que el acceso no es solo tener conexión: incluye el dispositivo y la accesibilidad, y una tecnología disponible puede seguir excluyendo.',
      'Usar esto para leer una situación de tu aula o tu familia y distinguir qué parte del problema es de la persona y qué parte es del diseño del servicio.',
    ],
  },

  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar si una dificultad de acceso o de uso de la tecnología tiene origen en la persona, en el diseño del servicio, o en ambos — y actuar en consecuencia.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión instrumental distinguiéndola de conocer muchas aplicaciones.',
      'Identificar los tres componentes del acceso en una situación dada: conectividad, dispositivo y accesibilidad.',
      'Distinguir, en un caso concreto, si una exclusión viene de una capacidad no desarrollada, de un diseño que presupone destrezas no enseñadas, o de ambas cosas.',
      'Explicar, con un ejemplo propio, por qué el criterio correcto no es cuántas apps maneja alguien sino cuánto aumenta la tecnología su capacidad de hacer lo que necesita, sin dependencia innecesaria y pudiendo seguir aprendiendo.',
    ],
  },

  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Alguna vez te sentiste torpe con la tecnología, a pesar de usarla todos los días?',
    parrafos: [
      'La mayoría de las personas que se consideran poco hábiles con la tecnología en realidad manejan con total fluidez varias apps — mensajería, redes, cámara. Lo que les falla no es la tecnología en general: es transferir esa habilidad a una herramienta nueva o a un trámite con una lógica distinta. Eso no es torpeza. Es la diferencia entre conocer una interfaz y tener una capacidad instrumental real.',
      'Cuando hablamos de brecha digital solemos pensar primero en quién tiene conexión y quién no — esa es la primera brecha, y es real. Pero garantizar el acceso no cierra el problema: aparece una segunda brecha, la de poder usar la tecnología con sentido, de forma crítica y autónoma, y no solo saber tocar la pantalla de lo que ya conocemos. Esta temática trabaja justamente esa segunda brecha.',
    ],
    problema:
      'Pensá en un colega — o en vos mismo — que resuelve cualquier cosa en WhatsApp pero se bloquea por completo al tener que subir un archivo a una plataforma del Ministerio que nunca usó. ¿Por qué pasa esto, y de quién es la responsabilidad: de la persona, de quien diseñó la plataforma, o de los dos?',
    placeholder: 'Tu respuesta…',
    ayuda:
      'Anotá tu respuesta con tus propias palabras. No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },

  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La familiaridad con el teléfono y las apps no elimina la dimensión instrumental. Saber moverse dentro de una interfaz conocida no garantiza poder resolver un problema nuevo, gestionar un archivo, reconocer una configuración o elegir la herramienta correcta según lo que hace falta. La competencia instrumental, para ser real, tiene que ser transferible y sostener aprendizaje continuo — no quedar atada a una sola app.',
      'El acceso, a su vez, no es un concepto simple: incluye conectividad, dispositivo y accesibilidad. Una tecnología formalmente disponible puede seguir excluyendo igual — por un lenguaje innecesariamente técnico, por no ser compatible con tecnologías asistivas, o por procedimientos que dan por sabidas destrezas que nadie enseñó. Parte de la capacidad está en la persona, y parte está en cómo se diseñó el servicio.',
      'Esa brecha de acceso tampoco tiene un solo origen: puede ser económica, pero también cultural, geográfica, de género, de discapacidad o de edad. Pensar el acceso solo como "tener wifi" deja afuera todas esas otras formas de exclusión.',
    ],
    preguntaCierre: 'Tener un celular, ¿significa estar incluido digitalmente? ¿Qué falta, además de la conexión?',
    fichaAula: FICHA_CONECTARSE_CON_SENTIDO,
  },

  capacidadYAcceso: {
    titulo: 'Capacidad y acceso',
    bloques: [
      {
        subtitulo: 'Recordar',
        texto:
          'La dimensión instrumental reúne cuatro cosas: acceso (conectividad + dispositivo + accesibilidad), uso, configuración, y capacidad de aprender herramientas nuevas. El criterio correcto no es cuántas aplicaciones conoce alguien, sino cuánto aumenta la tecnología su capacidad de hacer lo que necesita, sin dependencia innecesaria, y con posibilidad de seguir aprendiendo cuando las herramientas cambian.',
      },
      {
        subtitulo: 'Comprender',
        texto:
          'Por qué familiaridad no es lo mismo que competencia: alguien puede ser muy veloz en una app y quedar completamente bloqueado frente a otra con una lógica distinta, si lo que aprendió fue el recorrido de esa app puntual y no una capacidad que se traslada. Por qué el acceso formal no basta: una plataforma puede estar técnicamente disponible y seguir excluyendo a quien no maneja su jerga, a quien usa un lector de pantalla incompatible, o a quien nunca le enseñaron el paso previo que el sistema da por sabido. Y por qué la responsabilidad es compartida: una persona puede desarrollar capacidades y seguir condicionada por una interfaz mal diseñada; un diseño accesible puede resultar insuficiente si nadie le enseñó a usarlo a quien lo necesita.',
      },
      {
        subtitulo: 'Aplicar',
        texto:
          'La lente, aplicada específicamente a situaciones de acceso: qué está comprometido — la capacidad de la persona, el diseño del servicio, o ambos. Qué condiciones sociotécnicas intervienen — lenguaje técnico, compatibilidad con tecnologías asistivas, pasos previos no enseñados. Qué cambio sería proporcionado — y de quién es: de la persona (aprender algo puntual), de la institución (simplificar o acompañar), o de ambos.',
      },
    ],
    parrafoCierre:
      'La cuarta parte de la dimensión instrumental — poder seguir aprendiendo cuando cambian las herramientas — no es un extra: es lo que hace que la capacidad sea transferible en vez de quedar atada a una sola app. Esa es la habilidad que se trabaja en la ficha de abajo.',
    fichaAula: FICHA_SER_TU_PROPIO_MAESTRO,
  },

  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un docente con 20 años de experiencia, que usa el celular con total soltura para dar clase, comunicarse con las familias y manejar redes del curso, tiene que subir la planificación anual a una plataforma nueva del Ministerio. Se traba en el primer paso: la plataforma le pide un archivo en un formato que no reconoce, con un botón que dice repositorio sin más explicación. Después de dos intentos fallidos, deja de intentarlo y le pide a un colega más joven que lo haga por él.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        texto:
          'Qué pasó: alguien con una capacidad instrumental real y demostrable (lo que hace todos los días con el celular lo prueba) quedó bloqueado frente a una herramienta puntual. No es una persona mala con la tecnología — es una persona fluida en ciertas herramientas que se topó con una interfaz que no se parece a nada que ya conozca.',
        nota: '(Acá me pregunto: ¿cuántas veces ya le pasó algo parecido y simplemente no lo contó, por vergüenza?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        texto:
          'Qué está en juego: la plataforma usa una palabra técnica sin explicarla, y probablemente da por sabido un paso previo — qué es un formato de archivo, cómo se genera — que nadie le enseñó. Esto no es, en el fondo, un problema de capacidad personal: es un problema de diseño que presupone destrezas no enseñadas, el mismo patrón que describe el manual.',
        nota: '(Acá me pregunto: ¿el error fue solo de la plataforma, o también de quien capacitó sin probar antes si el instructivo alcanzaba?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        texto:
          'Qué cambio sería proporcionado: no hace falta que este docente se convierta en experto en formatos de archivo. Alcanza con una instrucción breve y en lenguaje simple (qué es un PDF, cómo se genera desde el celular) — eso sí es responsabilidad de quien puede dársela, sea la institución con un instructivo claro, o un colega que se la explique una vez, no que lo resuelva por él cada vez.',
        nota: '(Acá me pregunto: si le explico yo una vez, ¿me aseguro de que la próxima la resuelva solo, o le queda más fácil seguir pidiéndome ayuda?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        texto:
          'Qué no es responsabilidad exclusiva de este docente: que la plataforma esté mal diseñada no es algo que él tenga que compensar solo, delegando la tarea siempre en otra persona — eso lo deja dependiente en vez de capaz. Lo que se ajustaría: la próxima vez que use esa plataforma, que lo haga él mismo con la instrucción ya aprendida, no que vuelva a pedir ayuda.',
        nota: '(Acá me pregunto: ¿cómo distingo, la próxima vez, entre ayudar una vez y convertirme en su solución permanente?)',
      },
    ],
  },

  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir si el problema es de capacidad de la persona, de diseño del servicio, o de ambos. Después de cada una, vas a ver un análisis experto comentado.',
    opcionesEleccion: [
      { value: 'persona', label: 'De la persona (capacidad)' },
      { value: 'diseno', label: 'Del diseño del servicio' },
      { value: 'ambos', label: 'De ambos' },
    ],
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un estudiante no puede entregar un trabajo porque el aula virtual del colegio solo acepta un formato de archivo que su celular no genera.',
        analisis:
          '¿De quién es el problema? Es un problema de diseño del servicio, no de capacidad del estudiante. El aula virtual exige un formato poco común y no ofrece ninguna alternativa — la barrera está en cómo se diseñó la plataforma, no en lo que el estudiante sabe o no sabe hacer.',
        nota:
          '(Si marcaste "capacidad del estudiante": revisá de nuevo. No hay ningún indicio de que el estudiante no sepa usar su celular — el obstáculo es que el sistema no contempla los formatos que los dispositivos reales generan.)',
      },
      {
        clave: 's2',
        enunciado:
          'Una familia tiene wifi y un teléfono nuevo, pero la app de un trámite estatal está en un lenguaje muy técnico y no es compatible con el lector de pantalla que usa uno de los miembros de la familia.',
        analisis:
          '¿De quién es el problema? Acá hay que nombrar los dos componentes del acceso por separado: la conectividad y el dispositivo están resueltos, pero la accesibilidad no. Tener wifi y un teléfono nuevo no garantiza nada si la app no es compatible con una tecnología asistiva — son dos componentes distintos del acceso, y uno puede estar cubierto mientras el otro falta por completo.',
        nota:
          '(Si pensaste que no hay problema porque "tienen todo lo necesario": revisá de nuevo. Acceso técnico no es lo mismo que accesibilidad — confundir los dos es el error más común frente a este tipo de situación.)',
      },
      {
        clave: 's3',
        enunciado: 'Un docente mayor evita sistemáticamente cualquier plataforma nueva, aunque la institución ofrece capacitación.',
        analisis:
          '¿De quién es el problema? Acá sí hay un componente real de capacidad personal — o de actitud — además del diseño. A diferencia de las dos situaciones anteriores, esta no se resuelve con el mismo criterio: la institución ya ofrece lo que le corresponde (capacitación disponible), así que atribuir todo el problema al diseño tampoco sería correcto. No hay una única respuesta: lo que importa es que puedas justificar tu lectura, no que adivines la "correcta".',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro: 'Este es el análisis que hizo un colega sobre un caso parecido. Tiene un error conceptual. ¿Dónde está?',
      cita:
        'Una docente no logra usar la plataforma de inscripciones del Ministerio. El problema es que no se esfuerza lo suficiente en aprender — con un poco más de voluntad, lo resolvería sola.',
      botonLabel: 'Ver el error',
      textoAntes:
        'El error: atribuye toda la dificultad a la falta de esfuerzo individual, sin preguntarse nada sobre el diseño del servicio — si la plataforma usa lenguaje técnico, si da por sabido un paso que nadie enseñó, si hay alguna barrera de accesibilidad. Es exactamente el mismo error que vimos en el ',
      textoEnlaceTexto: 'módulo madre',
      textoEnlaceHref: '/ciudadania-digital',
      textoDespues:
        ', aplicado ahora a la dimensión instrumental: cuando el diagnóstico es automáticamente "la persona no se esfuerza", se deja de mirar la mitad del problema — la que depende de quien diseñó el servicio, no de quien lo usa.',
    },
  },

  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    correcto: 'Correcto',
    incorrecto: 'No exactamente',
    preguntas: [
      {
        objetivo: 'Definir la dimensión instrumental',
        enunciado: '¿Cuál de estas describe mejor la dimensión instrumental?',
        correcta: 'b',
        opciones: [
          {
            id: 'a',
            texto: 'Conocer y manejar la mayor cantidad posible de aplicaciones.',
            feedback:
              'Conocer muchas apps no es lo mismo que tener capacidad instrumental. Alguien puede manejar diez aplicaciones distintas y quedar igual de bloqueado frente a la número once si lo que aprendió fue cada recorrido puntual, no una capacidad que se traslada.',
          },
          {
            id: 'b',
            texto: 'Tener una capacidad que se transfiere a herramientas nuevas y permite seguir aprendiendo cuando cambian.',
            feedback: 'Correcto.',
          },
          {
            id: 'c',
            texto: 'Usar el celular todos los días sin dificultad.',
            feedback:
              'Usar el celular con soltura todos los días es necesario, pero no alcanza — es exactamente el caso del docente que vimos en Un caso resuelto: fluido con su celular, bloqueado frente a una plataforma nueva.',
          },
          {
            id: 'd',
            texto: 'Saber resolver cualquier trámite online sin ayuda de nadie.',
            feedback:
              'Esto ignora que parte de la dificultad puede no ser tuya: un servicio mal diseñado puede excluir incluso a alguien con mucha capacidad instrumental. Pedir ayuda a veces es lo correcto — lo que importa es no depender de ella siempre.',
          },
        ],
      },
      {
        objetivo: 'Identificar los tres componentes del acceso',
        enunciado:
          'Una familia tiene conexión a internet estable y un teléfono funcionando bien, pero no puede completar un trámite porque la app no es compatible con el lector de pantalla que necesita uno de sus integrantes. ¿Qué componente del acceso está fallando?',
        correcta: 'c',
        opciones: [
          {
            id: 'a',
            texto: 'Conectividad.',
            feedback:
              'Esos dos componentes están cubiertos en este caso — hay conexión estable y el dispositivo funciona. El problema está en el tercero, que suele pasarse por alto.',
          },
          {
            id: 'b',
            texto: 'Dispositivo.',
            feedback:
              'Esos dos componentes están cubiertos en este caso — hay conexión estable y el dispositivo funciona. El problema está en el tercero, que suele pasarse por alto.',
          },
          { id: 'c', texto: 'Accesibilidad.', feedback: 'Correcto.' },
          {
            id: 'd',
            texto: 'Ninguno: si tienen wifi y teléfono, el acceso está resuelto.',
            feedback:
              'Este es el error más común: reducir el acceso a wifi y dispositivo. La accesibilidad es un componente propio, y puede faltar aunque los otros dos estén resueltos — como en este caso.',
          },
        ],
      },
      {
        objetivo: 'Distinguir el origen de una exclusión',
        enunciado:
          'Un docente no logra subir un archivo a una plataforma nueva porque el sistema le pide un formato que nunca usó, con un botón que dice "repositorio" sin ninguna explicación. ¿Cuál es la lectura correcta?',
        correcta: 'c',
        opciones: [
          {
            id: 'a',
            texto: 'El docente no se esfuerza lo suficiente en aprender tecnología.',
            feedback:
              'Atribuir todo a la falta de esfuerzo es el error que vimos repetido en Practicá vos: ignora que el diseño de la plataforma también tiene responsabilidad en lo que pasó.',
          },
          {
            id: 'b',
            texto: 'El problema es exclusivamente de la plataforma, el docente no tiene ninguna responsabilidad.',
            feedback:
              'Tampoco es correcto irse al otro extremo. El docente sigue teniendo un rol: una vez que recibe la instrucción, tiene que poder aplicarla solo la próxima vez.',
          },
          {
            id: 'c',
            texto:
              'El diseño presupone una destreza que nadie le enseñó; el cambio proporcionado es una instrucción simple, no que otra persona lo resuelva por él cada vez.',
            feedback: 'Correcto.',
          },
          {
            id: 'd',
            texto: 'El docente debería dejar que un colega más joven suba el archivo siempre, para no perder tiempo.',
            feedback:
              'Delegar la tarea de forma permanente no es una solución, es evitar el problema — deja al docente dependiente en vez de capaz, que es exactamente lo que se buscaba evitar en Un caso resuelto.',
          },
        ],
      },
      {
        objetivo: 'Explicar el criterio correcto',
        enunciado: '¿Cuál de estas es la forma correcta de evaluar la capacidad instrumental de alguien?',
        correcta: 'c',
        opciones: [
          {
            id: 'a',
            texto: 'Cuántas aplicaciones distintas sabe usar.',
            feedback:
              'La cantidad de apps conocidas no mide nada por sí sola — es exactamente el criterio incorrecto que esta temática busca reemplazar.',
          },
          {
            id: 'b',
            texto: 'Cuánto tiempo pasa usando el celular por día.',
            feedback:
              'El tiempo de uso tampoco es el criterio: alguien puede pasar horas en una sola app sin desarrollar ninguna capacidad transferible.',
          },
          {
            id: 'c',
            texto:
              'Cuánto aumenta la tecnología su capacidad de hacer lo que necesita, sin dependencia innecesaria y pudiendo seguir aprendiendo.',
            feedback: 'Correcto.',
          },
          {
            id: 'd',
            texto: 'Si tiene wifi en su casa.',
            feedback: 'Eso mide solo un componente del acceso (conectividad), no la capacidad instrumental completa.',
          },
        ],
      },
    ],
    rubricaTitulo: 'Rúbrica de desempeño',
    rubricaIntro: 'Se aplica sobre el análisis que hiciste en Practicá vos.',
    rubricaColNivel: 'Nivel',
    rubricaColMuestra: 'Qué muestra el docente',
    rubrica: [
      { nivel: '1. Inicial', muestra: 'Describe el problema como torpeza o falta de esfuerzo individual.' },
      {
        nivel: '2. En desarrollo',
        muestra: 'Identifica que hay un componente de diseño, pero sin nombrar cuál de los tres (conectividad, dispositivo, accesibilidad).',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue capacidad personal de diseño del servicio, y propone un cambio proporcionado a cada uno.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo un caso no tiene una única respuesta (como la Situación 3) y justifica su lectura en vez de buscar una fórmula fija.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },

  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa completo de esta dimensión: qué es la capacidad instrumental, los tres componentes del acceso, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es cómo mirás los bloqueos tecnológicos que ya venías viendo todos los días — tuyos, de tus estudiantes, de las familias.',
    accionSemana:
      'Una acción concreta para esta semana: la próxima vez que un estudiante, colega o familiar se bloquee con una herramienta nueva, antes de resolverlo por esa persona, identificá primero si el obstáculo es de capacidad o de diseño — y actuá distinto según cuál sea. Si es de diseño, una instrucción breve alcanza. Si es de capacidad, ahí sí hace falta acompañar el aprendizaje, no resolverlo por la persona.',
    parrafo3:
      'Volvé al problema de Por qué importa — el colega bloqueado con la plataforma del Ministerio. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué cambiarías? Anotá en dos o tres líneas qué es distinto en tu forma de pensarla ahora.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambiarías ahora?',
    fichaAula: FICHA_DETECTOR_DE_TECNOLOGIA,
  },

  recursosYCierre: {
    titulo: 'Recursos y cierre',
    cambioTitulo: 'Antes de cerrar: ¿qué cambió?',
    cambioInstruccion: 'Volvé a tu respuesta de Por qué importa. Releela.',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué "saber usar el celular" no es lo mismo que tener capacidad instrumental?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta — es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Instrumental y Acceso, en una tarjeta',
      parrafos: [
        'La capacidad instrumental no se mide por cuántas apps conocés, sino por cuánto aumenta la tecnología tu capacidad de hacer lo que necesitás, sin dependencia innecesaria y pudiendo seguir aprendiendo cuando las herramientas cambian.',
        'El acceso tiene tres componentes: conectividad · dispositivo · accesibilidad. Pueden faltar por separado — tener los tres no es automático.',
        'La pregunta guía, frente a cualquier bloqueo tecnológico: ¿la dificultad es de la persona, del diseño del servicio, o de ambos? Y según eso: ¿qué cambio sería proporcionado, y de quién es esa responsabilidad?',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiParrafo: 'Esta fue la primera de las 10 dimensiones.',
    seguiLinkTexto: 'Volver al módulo Ciudadanía Digital',
    seguiLinkHref: '/ciudadania-digital',
    siguienteDimensionTexto: 'Siguiente dimensión: Cognitivo-Intelectual e Informacional',
    siguienteDimensionHref: '/tematicas/cognitivo-intelectual-e-informacional',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Nadie es "malo con la tecnología". Hay capacidades que todavía no se desarrollaron, y hay diseños que excluyen sin necesidad. Distinguir entre las dos cosas es lo que te permite ayudar de verdad — sin volverte la solución permanente de nadie, y sin dejar pasar un diseño que debería mejorarse.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[INSTRUMENTAL_ACCESO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
