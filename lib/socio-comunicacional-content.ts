// Contenido de /tematicas/socio-comunicacional-e-identidad. Mismo patrón que
// lib/cognitivo-informacional-content.ts: escrito solo para 'docentes', cualquier otra
// audiencia cae a ese fallback vía resolveContenido() (misma regla que resolveTexto:
// audiencia activa si tiene contenido, si no el fallback explícito, si no el primero
// definido). Sin fuentes/citas: las referencias van como texto plano (sin SourceCite).
//
// Texto de las 10 secciones transcripto TEXTUAL del archivo de prompts de esta temática
// (no hay un .docx fuente: todo el contenido vino en los prompts 2 y 3).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/socio-comunicacional/ficha-aula';

export const SOCIO_COMUNICACIONAL_FALLBACK: Audiencia = 'docentes';

export interface TocSection {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  labelAudiencia?: AudienciaTexto;
  shortLabelAudiencia?: AudienciaTexto;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: 'introduccion', number: '01', label: 'Introducción', shortLabel: 'Intro' },
  { id: 'lo-que-vas-a-lograr', number: '02', label: 'Lo que vas a lograr', shortLabel: 'Objetivos' },
  { id: 'por-que-importa', number: '03', label: 'Por qué importa', shortLabel: 'Por qué' },
  { id: 'de-donde-partimos', number: '04', label: 'De dónde partimos', shortLabel: 'Punto de partida' },
  { id: 'identidad-y-convivencia', number: '05', label: 'Identidad y convivencia', shortLabel: 'Identidad' },
  { id: 'un-caso-resuelto', number: '06', label: 'Un caso resuelto', shortLabel: 'Caso' },
  { id: 'practica-vos', number: '07', label: 'Practicá vos', shortLabel: 'Practicá' },
  { id: 'pone-a-prueba', number: '08', label: 'Poné a prueba lo aprendido', shortLabel: 'Quiz' },
  { id: 'llevalo-a-tu-aula', number: '09', label: 'Llevalo a tu aula', shortLabel: 'Aula' },
  { id: 'recursos-y-cierre', number: '10', label: 'Recursos y cierre', shortLabel: 'Cierre' },
];

export interface Contenido {
  introduccion: {
    titulo: string;
    subtitulo: string;
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
    preguntaDestacada: string;
    fichas: FichaAulaProps[];
  };
  identidadYConvivencia: {
    titulo: string;
    recordar: {
      subtitulo: string;
      parrafo1: string;
      parrafo2: string;
      lista: string[];
      parrafoCierre: string;
    };
    comprender: {
      subtitulo: string;
      lista: string[];
      recuadro: { titulo: string; parrafos: string[] };
      parrafoDespues: string;
    };
    aplicar: {
      subtitulo: string;
      parrafoAntes: string;
      lista1: string[];
      parrafoEntre: string;
      lista2: string[];
      parrafoFinal: string;
    };
    fichas: FichaAulaProps[];
  };
  unCasoResuelto: {
    titulo: string;
    subtitulo: string;
    caso: string;
    fases: { numero: number; titulo: string; parrafos: string[]; nota: string }[];
  };
  practicaVos: {
    titulo: string;
    intro: string;
    revelarLabel: string;
    situaciones: {
      clave: 's1' | 's2' | 's3';
      enunciado: string;
      analisis: string;
      nota: string;
    }[];
    error: {
      subtitulo: string;
      intro: string;
      citaA: string;
      citaB: string;
      botonLabel: string;
      errorIntro: string;
      errorA: string;
      errorB: string;
      errorCierre: string;
    };
  };
  poneAPrueba: {
    titulo: string;
    intro: string;
    preguntas: {
      objetivo: string;
      enunciado: string;
      opciones: { id: 'a' | 'b' | 'c' | 'd'; texto: string }[];
      correcta: 'a' | 'b' | 'c' | 'd';
      feedbacks: Partial<Record<'a' | 'b' | 'c' | 'd', string>>;
    }[];
    correcto: string;
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
    fichas: FichaAulaProps[];
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
    seguiAntes: string;
    seguiEnlace1Texto: string;
    seguiEnlace1Href: string;
    seguiEntre: string;
    seguiEnlace2Texto: string;
    seguiEnlace2Href: string;
    seguiDespues: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Dimensión Socio-Comunicacional e Identidad',
    subtitulo: 'De publicar a convivir',
    bajadaAntes:
      'Hoy casi todo lo que decimos pasa por una pantalla, y lo que decimos ya no queda donde lo dijimos. Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que las relaciones que se construyen en espacios mediados no son menos reales: producen consecuencias afectivas, reputacionales y comunitarias que atraviesan la vida física.',
      'Anticipar la audiencia, la persistencia y la circulación de lo que decís, publicás o reenviás, antes de hacerlo.',
      'Distinguir la netiqueta, que ofrece reglas mínimas, de una convivencia basada en empatía, consentimiento, reciprocidad y capacidad de reparar.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'Anticipar quién puede ver, guardar y reinterpretar lo que decimos en un espacio digital, y decidir cómo expresarte, poner límites y reparar, cuidando tu identidad y la de los demás.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión socio-comunicacional e identidad, explicando por qué la identidad digital forma parte de una identidad híbrida y por qué las relaciones mediadas tienen consecuencias reales.',
      'Identificar la audiencia, la persistencia y la circulación en una situación concreta de comunicación digital.',
      'Distinguir la netiqueta de la ciudadanía relacional, señalando qué agrega esta última: empatía, consentimiento, reciprocidad y capacidad de reparar.',
      'Decidir cómo comunicar, poner un límite o reparar frente a un conflicto en un espacio mediado, cuidando también el derecho a evolucionar y a no quedar fijado por una representación pasada.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cuánto de lo que decís sigue siendo tuyo después de enviarlo?',
    parrafos: [
      'Escribís un comentario en el chat de familias del curso. Lo pensaste con el tono de una charla de pasillo: una ironía, una respuesta rápida, una frase que, dicha en persona y con tu cara, se entendía perfecto. Al otro día, alguien le sacó una captura. La captura, sin el mensaje anterior que la explicaba, circula por otros grupos de familias, por un chat de docentes, por la cuenta de alguien que no conocés. Ya nadie recuerda a qué estabas respondiendo. Lo que quedó es la frase.',
      'Lo que ocurrió no es una rareza. Cuando comunicamos a través de una pantalla cambian tres cosas: quién puede escucharnos, cuánto tiempo queda lo que dijimos y por dónde viaja. Nada de eso se ve en el momento de escribir, y casi nada de eso lo controlás después de enviar. Esta temática trabaja justamente esa diferencia entre lo que sentimos al comunicar y lo que realmente pasa con lo que comunicamos.',
    ],
    problema:
      'Pensá en lo que te pasó, o en lo que podría pasarte. ¿Qué parte de esa situación fue tuya y qué parte no? ¿Qué habrías podido anticipar antes de enviarlo, y qué no? Y si estuvieras del otro lado, en el grupo que recibe la captura, ¿qué harías con ella?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Las tecnologías ampliaron las posibilidades de comunicarnos, de pertenecer a una comunidad y de colaborar con otros. Pero también modificaron tres condiciones básicas de la comunicación: la audiencia, la persistencia y la circulación. Una conversación que antes ocurría entre dos personas, en un lugar y en un momento, hoy puede quedar guardada, ser vista por quienes no estaban y viajar lejos de donde nació.',
      'Por eso las relaciones digitales no son menos reales por estar mediadas. Producen consecuencias afectivas, reputacionales y comunitarias que atraviesan la vida física: una humillación en un grupo se siente en el aula al día siguiente, una reputación construida en línea acompaña a la persona fuera de la pantalla, y una comunidad que nace en una plataforma sostiene vínculos que son reales. Separar "lo virtual" de "lo real" ya no describe cómo vivimos.',
      'Esto cambia también cómo pensamos la identidad. La identidad digital no es una versión aparte de quienes somos: forma parte de una identidad híbrida, que se construye tanto en los espacios físicos como en los digitales. El sociólogo Erving Goffman, en La presentación de la persona en la vida cotidiana, mostró que nos presentamos de manera distinta según el público que tenemos delante. Los estudios sobre públicos en red, como los de danah boyd, muestran qué pasa con esa idea cuando el público se vuelve difícil de ver: una misma expresión puede llegar a audiencias distintas, mantenerse disponible durante años y ser reinterpretada fuera de su contexto original.',
      'De ahí surge una idea que el manual destaca: el derecho a evolucionar. Si lo que dijimos queda disponible y puede reaparecer en cualquier momento, cada persona necesita poder cambiar, equivocarse, crecer y no quedar fijada por una representación pasada. Un mensaje escrito a los doce años no puede definir a esa persona a los dieciséis.',
      'Y todo esto exige una forma de convivir. La convivencia en espacios mediados requiere escuchar, argumentar, interpretar tonos, gestionar conflictos y reconocer la humanidad detrás de los perfiles. La netiqueta puede ofrecer reglas mínimas; una ciudadanía relacional madura pide además empatía, consentimiento, reciprocidad y capacidad de reparar. Esa diferencia es el eje de esta temática.',
    ],
    preguntaDestacada:
      'Pensá en la última vez que algo que dijiste en un chat se entendió distinto de como lo dijiste. ¿Qué cambió entre lo que querías decir y lo que llegó?',
    fichas: [
      {
        titulo: 'Identidad: entre el espejo y la mirada de los demás',
        objetivo:
          'Comprender el concepto de identidad personal como construcción social dinámica y reconocer sus múltiples dimensiones en la vida cotidiana.',
        desarrollo: [
          {
            tipo: 'parrafo',
            texto:
              'La **identidad** es la manera en que nos definimos y nos reconocen los demás. No es algo fijo o dado al nacer: se construye en relación con el entorno, las experiencias, la cultura, el cuerpo, la historia y los vínculos.',
          },
          {
            tipo: 'parrafo',
            texto:
              'Nuestra **identidad física** incluye elementos visibles (nombre, rostro, cuerpo, género, lengua, etnia, vestimenta), pero también aspectos invisibles como nuestras ideas, emociones, valores, historias y sueños. Se expresa en cómo actuamos, hablamos, sentimos, elegimos.',
          },
          {
            tipo: 'parrafo',
            texto:
              'A lo largo del tiempo, nuestra identidad puede transformarse. Somos muchas cosas a la vez, y muchas veces nos mostramos de formas distintas según el contexto (familia, escuela, barrio, redes sociales).',
          },
          {
            tipo: 'parrafo',
            texto:
              'Comprender esto nos permite **valorar la diversidad**, cuestionar estereotipos y convivir con empatía. También es la base para pensar qué pasa cuando nos presentamos en internet. ¿Quiénes somos cuando nos conectamos?',
          },
        ],
        preguntaDetonadora: '¿Quién decide quién soy? ¿Yo, los demás o las redes?',
        actividades: [
          {
            titulo: 'Actividad inicial – "¿Quién soy en 5 palabras?" (10-15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Cada estudiante escribe cinco palabras que lo/a representen (apariencia, gustos, valores, origen, etc.). Luego responde:' },
              { tipo: 'lista', items: ['¿Cambiarían esas palabras si estuviera en redes sociales?', '¿Por qué mostramos distintas versiones de nosotros/as?'] },
            ],
          },
          {
            titulo: 'Actividad principal – "Mi identidad en capas" (45 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'Entregá una silueta humana dividida en tres capas:',
                  'Exterior (lo que los demás ven)',
                  'Intermedio (lo que muestro a veces)',
                  'Interior (lo que siento, pienso o no siempre muestro)',
                  'Cada estudiante completa su silueta con palabras, dibujos o símbolos.',
                  'Luego se agrupan para reflexionar:',
                  '¿Qué mostramos más? ¿Qué ocultamos?',
                  '¿Qué influye en esas decisiones?',
                  '¿Qué cambia cuando pasamos al entorno digital?',
                ],
              },
            ],
          },
        ],
        frase: '"Nuestra identidad no es una etiqueta. Es un viaje, una construcción, una historia que seguimos escribiendo."',
        glosario: ['**Identidad**', '**Construcción social**', '**Autopercepción**', '**Diversidad**', '**Representación**'],
        referencias: [
          'Video: *"¿Qué es la identidad?"* – Paka Paka',
          'Guía "Identidad y ciudadanía" – Unicef / Faro Digital',
          'chicos.net – Recursos educativos',
          'Película: *Valiente* (Pixar) – para pensar identidad y decisiones personales',
        ],
      },
      {
        titulo: '¿Quién sos en internet? Identidad y Huella Digital',
        objetivo:
          'Reconocer cómo se construye la identidad digital y comprender la importancia de cuidar la huella digital que dejamos en línea.',
        desarrollo: [
          {
            tipo: 'parrafo',
            texto:
              'Nuestra **identidad digital** es el conjunto de datos, imágenes, publicaciones y acciones que realizamos (o que otros realizan sobre nosotros) en internet. Cada "me gusta", foto, comentario o perfil forma parte de nuestra **huella digital**, que puede influir en cómo nos ven otros: amigos, escuelas, empleadores o desconocidos. A diferencia del mundo físico, en internet **no existe el olvido**: lo que subimos puede ser compartido, almacenado o incluso manipulado. Comprender esto nos ayuda a actuar con más conciencia, proteger nuestra privacidad y construir una identidad digital positiva, alineada con quienes queremos ser.',
          },
        ],
        preguntaDetonadora: '¿Te sentís representado por lo que aparece sobre vos en internet? ¿Quién controla esa imagen?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Mi Yo Digital" (10 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Pedí a los estudiantes que imaginen que alguien los busca en Google.' },
              { tipo: 'parrafo', texto: '*¿Qué creen que encontraría?*' },
              { tipo: 'parrafo', texto: 'Pueden escribir o dibujar un perfil imaginario de sí mismos según lo que “internet diría”. Después, conversen en pequeños grupos:' },
              { tipo: 'lista', items: ['¿Qué cosas se pueden controlar?', '¿Qué cosas dependen de otros?'] },
            ],
          },
          {
            titulo: 'Actividad principal – "El Mapa de mi Huella Digital" (30-40 min)',
            bloques: [
              { tipo: 'parrafo', texto: '*Paso a paso:*' },
              {
                tipo: 'lista',
                items: [
                  'Entregar una hoja con un cuerpo humano o silueta y burbujas alrededor.',
                  'Pedir que cada estudiante complete con ejemplos reales o ficticios:',
                  'Fotos que subí',
                  'Comentarios que hice',
                  'Videos donde aparezco',
                  'Publicaciones donde me etiquetaron',
                  'Cosas que otros podrían encontrar sobre mí',
                  'Marcar con 💬 si algo los representa, ⚠️ si les da dudas o 🛑 si no les gustaría que esté online.',
                  'En grupos, reflexionar:',
                  '¿Qué huella dejamos sin darnos cuenta?',
                  '¿Cómo podemos construir una identidad digital que nos represente positivamente?',
                  'Crear en grupo una lista de consejos para cuidar la identidad digital.',
                ],
              },
            ],
          },
        ],
        frase: '"Lo que subís hoy a internet puede hablar por vos mañana. Cuidar tu huella es cuidar tu historia."',
        glosario: ['**Identidad digital**', '**Huella digital**', '**Privacidad**', '**Viralización**', '**Derecho al olvido**'],
        referencias: [
          'Google Cuadernillo - Ciudadanía Digital',
          'Guía Convivencia Digital - UNICEF/Faro Digital (2020)',
          'Herramienta: Google Alerts para monitorear menciones personales',
          'Juego interactivo: "Interland" – https://beinternetawesome.withgoogle.com',
        ],
      },
    ],
  },
  identidadYConvivencia: {
    titulo: 'Identidad y convivencia',
    recordar: {
      subtitulo: 'Recordar',
      parrafo1:
        'La dimensión socio-comunicacional e identidad se ocupa de cómo nos expresamos, nos relacionamos y convivimos en espacios mediados por tecnología. Reúne cinco capacidades: la expresión (decir lo que pensamos con claridad y en el medio adecuado), la escucha (comprender a los otros, interpretar tonos y silencios), los límites (decidir qué compartir y qué no, y poder frenar lo que nos daña), la reputación (cómo se nos percibe a partir de lo que se ve de nosotros) y la convivencia con diferencias (sostener vínculos con quienes piensan o sienten distinto).',
      parrafo2: 'Comunicarse en un espacio mediado tiene tres propiedades que no existen, o existen de otro modo, en la conversación cara a cara:',
      lista: [
        '**Audiencia:** lo que decimos puede llegar a públicos que no imaginamos, a veces mucho más amplios, o muy distintos, del público al que le estábamos hablando.',
        '**Persistencia:** lo que decimos queda registrado y disponible, y puede encontrarse años después.',
        '**Circulación:** lo que decimos puede copiarse, reenviarse, recortarse y reinterpretarse fuera de su contexto original.',
      ],
      parrafoCierre: 'Tener presentes esas tres propiedades es el primer movimiento del criterio: antes de hablar, saber dónde estamos hablando.',
    },
    comprender: {
      subtitulo: 'Comprender',
      lista: [
        'Por qué lo mediado es real: las relaciones digitales no son un ensayo de la vida de verdad. Producen consecuencias afectivas, reputacionales y comunitarias. Quien recibe un insulto por una pantalla lo recibe igual, y quien queda expuesto en un grupo carga con esa exposición cuando vuelve al aula. Detrás de cada perfil hay una persona, y reconocer esa humanidad es parte de la capacidad que estamos trabajando.',
        'Por qué no controlamos la audiencia: cuando hablamos en persona vemos a quien nos escucha y ajustamos lo que decimos. En un espacio mediado, la audiencia real casi nunca coincide con la que imaginamos: un grupo cerrado puede ser reenviado, una publicación pensada para unos pocos puede ser vista por otros, y el tono se pierde. Sin voz ni gestos, una ironía puede leerse como una agresión. Por eso interpretar tonos es una capacidad que hay que desarrollar, y no una cuestión de buena o mala voluntad.',
        'Por qué la persistencia pesa: lo que queda disponible puede reaparecer cuando la persona ya cambió. Por eso importa el derecho a evolucionar: la posibilidad de equivocarse, crecer y no quedar fijado por una representación pasada. Hacerse cargo de lo que se dijo es una cosa; quedar definido para siempre por eso es otra, y la segunda no es justa.',
        'Por qué un conflicto no es lo mismo que un daño: no toda discusión es violencia, y no toda situación grave es solo un conflicto. Hay dos errores opuestos que conviene evitar: criminalizar cualquier conflicto y minimizar situaciones graves. La respuesta tiene que ajustarse a la naturaleza y a la gravedad de lo que pasó, y a si hay algo que se repite, se difunde o se sostiene en el tiempo.',
        'Por qué no todo es responsabilidad individual: una persona puede desarrollar muy buen criterio y seguir condicionada por el entorno. El diseño de las plataformas facilita capturar, reenviar y amplificar, y no siempre ofrece formas simples de limitar la circulación de lo que ya salió. Formar capacidades importa, pero no alcanza con pedirle a cada uno que se cuide solo: las normas de un grupo, los acuerdos de una escuela y las decisiones de diseño de una plataforma también forman parte del problema y de la solución.',
      ],
      recuadro: {
        titulo: 'Lo que convivir NO es',
        parrafos: [
          'No es solo seguir las reglas de la netiqueta: ofrece reglas mínimas, pero se puede cumplir toda la etiqueta y aun así lastimar, o romperla sin mala intención.',
          'No es evitar el conflicto: las diferencias existen y los conflictos son parte de convivir; lo que importa es cómo se gestionan.',
          'No es castigar y dar el tema por cerrado: una sanción sin escucha ni reparación deja el daño y el vínculo como estaban.',
          'No es exponerse sin límites: poner un límite, decir que no y frenar lo que nos daña también es parte de una comunicación sana.',
        ],
      },
      parrafoDespues:
        'Lo que sí es convivir: la ciudadanía relacional madura incluye empatía, consentimiento, reciprocidad y capacidad de reparar. Y reparar no es cerrar un caso formalmente: es que la persona afectada pueda recuperar confianza, volver a participar del espacio y limitar la circulación de lo que le hizo daño, y que se revisen las condiciones que permitieron la situación.',
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoAntes: 'Antes de publicar, enviar o reenviar algo, tres preguntas, una por cada propiedad de la comunicación mediada:',
      lista1: [
        '**¿Quién puede verlo?** (audiencia) No solo la persona a la que se lo mandás: ¿se puede reenviar?, ¿hay gente que no conocés en ese espacio?, ¿quién podría llegar a verlo?',
        '**¿Cuánto tiempo puede durar?** (persistencia) ¿Te gustaría que esto se pueda encontrar dentro de cinco años? ¿Y si lo hubiera escrito alguien de doce?',
        '**¿Cómo se leería fuera de contexto?** (circulación) Si alguien lo recorta y lo comparte sin lo anterior, ¿sigue diciendo lo que quisiste decir?',
      ],
      parrafoEntre: 'Y cuando algo sale mal, tres movimientos:',
      lista2: [
        '**Escuchar:** antes de juzgar, escuchar a cada persona por separado y reconstruir qué se dijo, cómo y en qué contexto. Distinguir la intención del impacto, y el tono de lo que realmente se escribió.',
        '**Poner un límite:** frenar la circulación en lo que depende de nosotros (pedir que se borre, no reenviar, no seguir alimentando la discusión) y decir con claridad qué no se acepta, sin humillar a nadie en público.',
        '**Reparar:** buscar que la persona afectada recupere la confianza y la posibilidad de participar, que quien dañó se haga cargo sin ser definido para siempre por lo que hizo, y que se revisen las normas del espacio para que no se repita.',
      ],
      parrafoFinal:
        'La lente de tres preguntas, aplicada a la comunicación: primero, qué capacidad está en juego (la expresión, la escucha, los límites, la reputación o la convivencia con diferencias). Segundo, qué condiciones sociotécnicas intervienen: una audiencia más amplia de la imaginada, capturas y reenvíos, un tono que se pierde, normas del grupo que nadie acordó, decisiones de diseño de la plataforma. Tercero, qué cambio sería proporcionado y de quién es: de la persona, del grupo, de la institución o de la plataforma.',
    },
    fichas: [
      {
        titulo: 'Cuidar lo que somos en la red: componentes y protección de la identidad digital',
        objetivo:
          'Identificar los elementos que componen la identidad digital y reflexionar sobre prácticas para protegerla, ejercerla de forma ética y fortalecer una presencia en línea segura, consciente y empática.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'Nuestra **identidad digital** es mucho más que un perfil con foto. Está formada por todo lo que hacemos, compartimos, dejamos o permitimos en el entorno digital. Incluye:' },
          { tipo: 'parrafo', texto: '**Componentes de la identidad digital**' },
          {
            tipo: 'lista',
            items: [
              '**Datos personales**: nombre, DNI, correo, fotos, ubicación, voz, rostro, etc.',
              '**Perfil público**: redes sociales, publicaciones, likes, etiquetas, comentarios.',
              '**Huella digital**: rastro permanente de todo lo que hacemos en línea.',
              '**Interacciones**: con quién hablamos, cómo nos mostramos, qué opinamos.',
              '**Algoritmos y perfilado**: cómo la tecnología nos clasifica, sugiere contenido o limita nuestras búsquedas según nuestros datos y hábitos.',
            ],
          },
          { tipo: 'parrafo', texto: '**Cuidados fundamentales**' },
          {
            tipo: 'lista',
            items: [
              '**Configurar adecuadamente la privacidad en plataformas**.',
              '**Reflexionar antes de publicar**: ¿me representa?, ¿puede dañarme a futuro?',
              '**Evitar compartir datos sensibles o imágenes personales en espacios inseguros**.',
              '**Desarrollar pensamiento crítico ante lo que vemos y compartimos**.',
              '**No permitir que otras personas decidan por nosotros nuestra identidad digital**.',
            ],
          },
          { tipo: 'parrafo', texto: 'La **identidad digital puede ser herramienta de empoderamiento o espacio de exposición**, según cómo la cuidemos y gestionemos.' },
          { tipo: 'parrafo', texto: 'En un mundo donde los datos tienen valor económico, político y social, proteger nuestra identidad es también una forma de **ejercer derechos y construir ciudadanía con dignidad**.' },
        ],
        preguntaDetonadora: '¿Quién tiene el control de tu identidad digital: vos, tus contactos, las redes sociales o los algoritmos?',
        actividades: [
          {
            titulo: 'Actividad inicial – "¿Dónde estoy en internet?" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Preguntá:' },
              { tipo: 'lista', items: ['¿Cuántas plataformas usás?', '¿En cuáles publicás contenido?', '¿Cuáles muestran tu nombre, imagen, voz o ubicación?'] },
              { tipo: 'parrafo', texto: '→ Luego hacé un esquema de "presencia digital" en el pizarrón.' },
            ],
          },
          {
            titulo: 'Actividad principal – "Kit de primeros auxilios para tu identidad digital" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'Cada estudiante recibe una ficha donde debe completar:',
                  '3 cosas que muestran su identidad digital',
                  '2 cosas que nunca compartirían',
                  '1 situación que les preocupó o les hizo pensar sobre su exposición',
                  'En equipos, diseñan un **"kit de cuidados"** con recomendaciones, tips y derechos clave para proteger la identidad digital.',
                  'Formato libre: afiche, infografía, cartel para redes, audiomensaje, historieta.',
                  'Exponen al grupo y elaboran una **guía colectiva de autocuidado digital**.',
                ],
              },
            ],
          },
        ],
        frase: '"Tu identidad digital es parte de tu historia. Cuidarla es respetarte, protegerte y construir con conciencia quién **querés** ser."',
        glosario: ['**Huella digital**', '**Perfilado algorítmico**', '**Privacidad**', '**Datos personales sensibles**', '**Autocuidado digital**'],
        referencias: [
          'Guía: "Cuidá tu identidad digital" – UNICEF / Faro Digital',
          'Video: *"Cómo proteger tu identidad en redes sociales"* – YouTube Educativo',
          'chicos.net – Herramientas y actividades',
          'Extensiones recomendadas: DuckDuckGo Privacy Essentials, Privacy Badger',
          'Juego interactivo: Interland – *El Reino del Buen Montón de Datos*',
        ],
      },
      {
        titulo: 'Lo que dejamos al pasar: huella digital, memoria y futuro en la red',
        objetivo:
          'Reflexionar sobre el impacto a largo plazo de nuestras acciones digitales, reconociendo la importancia de construir una identidad y una reputación digital coherente con los valores ciudadanos.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'Cada acción que realizamos en internet —una búsqueda, una foto, un comentario, una reacción— **deja una huella**. Esta huella digital **construye una imagen pública y privada** que influye en cómo nos ven otros: desde amigos hasta posibles empleadores, instituciones educativas o desconocidos.' },
          { tipo: 'parrafo', texto: 'La **reputación digital** es cómo se nos percibe en función de lo que compartimos o nos atribuyen. A veces esa percepción es real, otras veces se basa en prejuicios o fragmentos descontextualizados. Por eso, **gestionar nuestra huella es clave para protegernos, cuidar nuestras relaciones y sostener nuestra libertad y dignidad.**' },
          { tipo: 'parrafo', texto: 'Además, todo lo que compartimos puede ser:' },
          { tipo: 'lista', items: ['Reenviado, editado, descontextualizado.', 'Encontrado años después en buscadores.', 'Analizado por algoritmos para publicidad o decisiones automatizadas.'] },
          { tipo: 'parrafo', texto: 'Construir una **identidad digital proyectiva** significa pensar:' },
          { tipo: 'lista', items: ['¿Qué quiero que mi huella diga de mí?', '¿Qué futuro quiero construir con mis acciones en línea?', '¿Cómo puedo usar mi presencia digital para dejar una marca positiva en el mundo?'] },
        ],
        preguntaDetonadora: 'Si alguien solo pudiera conocerte por lo que encuentra de vos en internet, ¿qué pensaría? ¿Te representa lo que hay publicado sobre vos?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Tu sombra digital" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Cada estudiante imagina que es un detective digital y debe investigar su "yo en internet":' },
              { tipo: 'lista', items: ['¿En qué redes aparezco?', '¿Qué dicen mis publicaciones?', '¿Qué imagen doy?'] },
              { tipo: 'parrafo', texto: '→ Reflexión en grupos: ¿hay algo que cambiarían o borrarían? ¿Por qué?' },
            ],
          },
          {
            titulo: 'Actividad principal – "Mi cápsula digital para el futuro" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'Los estudiantes diseñan una **cápsula digital de sí mismos/as** para ser "abierta" en 10 años.',
                  '¿Qué quiero que se vea de mí?',
                  '¿Qué valores quiero que se recuerden?',
                  '¿Qué me gustaría haber logrado o aprendido?',
                  '¿Qué mensajes dejaría al futuro?',
                  'La cápsula puede tener formato:',
                  'Video',
                  'Presentación con imágenes y frases',
                  'Carta digital',
                  'Collage o moodboard',
                  'Se presentan en una "Galería de Futuros Digitales", como una manera de **proyectar una huella consciente, ética y valiente**.',
                ],
              },
            ],
          },
        ],
        frase: '"Tu huella digital es el eco de tu paso por la red: **hacé** que suene a quien **querés** ser."',
        glosario: ['**Huella digital**', '**Reputación online**', '**Identidad proyectiva**', '**Memoria digital**', '**Autogestión digital**'],
        referencias: [
          'Guía "Tu huella, tu historia" – Chicos.net / Faro Digital',
          'Interland – El Reino del Eco',
          'Video: *"¿Qué es la reputación digital?"* – Educ.ar',
          'Plataforma: https://www.tusdatos.co (para adultos responsables)',
          'UNESCO – "Reputación digital y ciudadanía"',
        ],
      },
      {
        titulo: 'Decir, escuchar y transformar: comunicar y participar en lo digital',
        objetivo:
          'Desarrollar habilidades para comunicarse de manera ética, clara y efectiva en entornos digitales, y fomentar la participación ciudadana responsable, creativa y transformadora.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'La **comunicación digital** es una de las formas más frecuentes de interacción en la vida cotidiana: chats, redes, correos, plataformas, foros, videojuegos. Pero comunicar no es solo emitir mensajes: también es **escuchar, interpretar, respetar y construir con otros**.' },
          { tipo: 'parrafo', texto: 'Además, hoy la ciudadanía también se ejerce en línea: firmar peticiones, compartir ideas, sumarse a campañas, hacer reclamos, difundir causas. La **participación digital** permite que jóvenes y adultos sean protagonistas en temas sociales, culturales o ambientales.' },
          { tipo: 'parrafo', texto: 'Para ello es clave:' },
          {
            tipo: 'lista',
            items: [
              'Dominar lenguajes y códigos digitales (emoji, audio, imagen, palabra).',
              'Usar plataformas con respeto y responsabilidad.',
              'Saber dialogar y argumentar.',
              'Diferenciar participación auténtica de manipulación emocional o viralidad sin sentido.',
              'Reconocer que lo que decimos en redes tiene consecuencias reales.',
            ],
          },
          { tipo: 'parrafo', texto: 'La **comunicación y la participación digitales** son parte del ejercicio democrático en la sociedad conectada. Usarlas con conciencia nos permite **construir comunidad, defender derechos y expresar lo que pensamos de manera transformadora**.' },
        ],
        preguntaDetonadora: '¿Sentís que **podés** participar activamente en internet? ¿Tus opiniones son escuchadas o se pierden entre los **likes**?',
        actividades: [
          {
            titulo: 'Actividad inicial – "¿Cómo nos comunicamos hoy?" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'En parejas, comparan:' },
              { tipo: 'lista', items: ['¿Qué tipo de lenguaje usan en WhatsApp, Instagram, Discord o TikTok?', '¿Cómo cambia la forma de expresarse según la app o la audiencia?'] },
              { tipo: 'parrafo', texto: '→ Reflexionan: ¿Cómo afecta eso a la comprensión y al respeto?' },
            ],
          },
          {
            titulo: 'Actividad principal – "Mi campaña digital: lo que quiero decir al mundo" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'En grupos, eligen una causa cercana (ambiental, educativa, social, cultural).',
                  'Diseñan una **microcampaña de participación digital** con:',
                  'Objetivo claro',
                  'Frase o mensaje clave',
                  'Formato (meme, video corto, afiche digital, historia en redes)',
                  'Público destinatario',
                  'Comparten en clase y reflexionan:',
                  '¿Qué queremos provocar con esta acción?',
                  '¿Cómo se siente ser parte de una causa?',
                ],
              },
            ],
          },
        ],
        frase: '"Participar es más que opinar: es construir lo que queremos vivir, también en la red."',
        glosario: ['**Comunicación digital**', '**Lenguaje digital**', '**Participación ciudadana**', '**Campaña digital**', '**Protagonismo juvenil**'],
        referencias: [
          'Guía "Protagonistas Digitales" – Faro Digital',
          'Plataforma www.chicos.net – Módulo de participación',
          'Canva o Genially para crear piezas digitales',
          'Video: *"¿Cómo participar desde internet?"* – YouTube Educativo',
          'Change.org – Peticiones ciudadanas',
        ],
      },
      {
        titulo: 'Conectarse no es suficiente: comunicarse, colaborar y construir juntos en lo digital',
        objetivo:
          'Desarrollar habilidades para comunicarse de manera clara, respetuosa y efectiva en entornos digitales, y fomentar el trabajo colaborativo con herramientas tecnológicas, valorando la diversidad y la inteligencia colectiva.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'En la era digital, comunicarse va más allá de enviar mensajes: implica **elegir las palabras, los medios, el tono y el momento adecuados**, y construir vínculos y proyectos en plataformas virtuales.' },
          { tipo: 'parrafo', texto: 'La comunicación digital efectiva requiere:' },
          {
            tipo: 'lista',
            items: [
              'Claridad, empatía y escucha activa',
              'Gestión de emociones y conflictos virtuales',
              'Dominio de distintos formatos: texto, imagen, audio, video, interacción en tiempo real o asincrónica',
              'Respeto por la diversidad cultural, de género y generacional',
              'Conciencia de la huella que dejamos (escrita o grabada)',
            ],
          },
          { tipo: 'parrafo', texto: 'Por su parte, la **colaboración digital** permite:' },
          {
            tipo: 'lista',
            items: [
              'Crear en equipo, incluso a distancia',
              'Repartir tareas y combinar talentos',
              'Resolver problemas juntos',
              'Usar herramientas como Google Drive, Miro, Padlet, Trello, Canva, etc.',
              'Generar redes horizontales de trabajo y aprendizaje',
            ],
          },
          { tipo: 'parrafo', texto: 'Una ciudadanía digital madura implica **comunicarse para construir y colaborar para transformar.**' },
        ],
        preguntaDetonadora: '¿Te sentís escuchado/a cuando escribís online? ¿**Podés** trabajar en equipo a través de una pantalla?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Emojis que dicen mucho" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Mostrá tres mensajes simples con distinto uso de emojis (o sin ellos).' },
              { tipo: 'parrafo', texto: '→ En grupos, interpretan tono, intención y emociones.' },
              { tipo: 'parrafo', texto: '→ Discusión: ¿cómo se malinterpreta un mensaje digital? ¿Cómo se aclara?' },
            ],
          },
          {
            titulo: 'Actividad principal – "Misión colaborativa digital" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'Se propone una misión simple (ej: crear una guía para estudiantes nuevos, diseñar una campaña por la salud mental, producir una playlist comentada, etc.)',
                  'En equipos, deben:',
                  'Repartir roles virtuales (líder, creativo, editor, redactor, moderador…)',
                  'Elegir herramientas digitales para trabajar colaborativamente',
                  'Establecer normas de convivencia digital (respeto, tiempos, devolución)',
                  'Comunicar avances y tomar decisiones en común',
                  'Presentan el producto final en una ronda compartida con reflexión sobre la experiencia colaborativa.',
                ],
              },
            ],
          },
        ],
        frase: '"Construir juntos en lo digital no es más difícil: es distinto. Y también puede ser más poderoso."',
        glosario: ['**Comunicación digital efectiva**', '**Colaboración virtual**', '**Inteligencia colectiva**', '**Netiqueta**', '**Herramientas colaborativas**'],
        referencias: [
          'Netiqueta UNESCO – *Guía para la convivencia digital*',
          'Video: *"Trabajar en equipo online: claves y desafíos"* – Canal Encuentro',
          'Chicos.net – *Convivencia y comunicación en entornos virtuales*',
          'Herramientas: Google Docs, Padlet, Trello, Canva, Miro',
          'Cuaderno Faro Digital – *Ciberconvivencia** y cultura digital*',
        ],
      },
    ],
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Es lunes por la mañana. Una estudiante y un estudiante de tercer año llegan al aula sin hablarse. Durante el fin de semana, en el grupo de WhatsApp del curso, él escribió un comentario sobre el trabajo práctico de ella: "Qué bien te quedó, se nota que te ayudó toda la familia". Según cuenta después, lo escribió como un chiste. Ella lo leyó como una burla sobre su familia y respondió con un insulto. Otros compañeros se sumaron, algunos defendiendo a uno y otros a la otra, y alguien sacó capturas de la discusión y las mandó a otro grupo. El lunes, el conflicto ya no está en el chat: está en el aula, y los dos están a punto de pelearse. Una compañera se acerca al docente y le cuenta lo que pasó.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: un mensaje de tono ambiguo, escrito para hacer reír, fue leído como una burla; la respuesta agresiva escaló el conflicto frente a un grupo grande, y las capturas lo sacaron del grupo original. Participan quien escribió el mensaje, quien lo leyó como una ofensa, los compañeros que se sumaron, quien sacó y reenvió las capturas y vos, que recibís el reclamo cuando el conflicto ya volvió al aula. Lo que está en juego no es solo una pelea: es el vínculo entre dos personas, su lugar frente al grupo y lo que queda de todo esto en las capturas que ya circulan.',
        ],
        nota: '(Acá me pregunto: ¿fue una burla o un chiste mal leído? Y, sobre todo: ¿importa más averiguarlo, o importa cómo lo vivió cada uno?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la capacidad socio-comunicacional, en varias de sus partes a la vez. La escucha y la interpretación del tono: sin voz ni gestos, la ironía no se distingue de la agresión. Los límites: nadie frenó la escalada y la discusión creció con espectadores. La reputación y la identidad: cada uno quedó expuesto frente al grupo y en las capturas. Y lo emocional: vergüenza, enojo, miedo a quedar mal.',
          'Las condiciones del entorno también cuentan: un grupo grande donde cualquier mensaje tiene decenas de espectadores, la facilidad para capturar y reenviar, la ausencia de reglas acordadas sobre cómo discutir en ese grupo y la presión del público que alienta. No es todavía, necesariamente, un caso de violencia ni de delito: es un conflicto que se agravó, y distinguirlo de un daño más serio es parte del análisis.',
        ],
        nota: '(Acá me pregunto: ¿hay en estas capturas algo que ya sea un daño más serio —una amenaza, una difusión de algo íntimo sin consentimiento— o es un conflicto que se fue de las manos? La respuesta cambia lo que corresponde hacer.)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no hace falta la reacción más fuerte posible, hace falta la que corresponde a lo que pasó. Primero, escuchar a cada uno por separado, antes de juntarlos y antes de decidir quién tuvo la culpa: reconstruir el mensaje original, el tono con el que fue escrito y cómo fue leído. Segundo, poner un límite en lo que está a tu alcance: pedir que las capturas no se sigan reenviando y que se borren de los grupos donde circulan, sin convertir el pedido en una búsqueda de culpables.',
          'Tercero, reparar: que cada uno pueda decir cómo lo vivió, que el mensaje malinterpretado se aclare y que quien se sintió ofendido recupere la confianza para volver al grupo. Una disculpa forzada frente a todo el curso suele humillar más que reparar. Y decidir si corresponde una sanción, o si hay que hablar con las familias, no es una decisión que tomás solo ni en el momento.',
        ],
        nota: '(Acá me pregunto: lo que voy a hacer, ¿ayuda a que los dos recuperen su lugar en el grupo, o los expone más frente a todos?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca decidir solo si hubo una falta grave, investigar quién sacó cada captura como si fuera un detective, ni resolver por ellos el conflicto de fondo. Eso es responsabilidad de la institución, con su protocolo de convivencia, y según el caso de las familias.',
          'Qué podría salir mal: que mi intervención llegue tarde y las capturas ya hayan salido del grupo del curso; que al tratarlo frente a toda la clase exponga más a los dos; o que ordene una disculpa para cerrar el tema y deje intacto lo que pasó entre ellos. Lo que ajustaría para la próxima vez: acordar con el curso, antes de que pase algo así, qué se hace cuando una discusión se calienta en el grupo, y trabajar con los estudiantes cómo leer el tono de un mensaje.',
        ],
        nota: '(Acá me pregunto: ¿qué reglas tiene este grupo para discutir, y quién las acordó? Si nadie las acordó, ahí también hay algo para revisar.)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué pesa más: la audiencia, la persistencia o la circulación. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un docente publica en su perfil personal de Instagram fotos de la muestra de fin de año del curso: se ve a varios estudiantes con sus trabajos y a algunas familias. Lo hace con buena intención, para mostrar lo que logró el grupo. El perfil es público.',
        analisis:
          '¿Qué pesa más en esta situación? La audiencia. El docente imagina que lo van a ver colegas y familias del curso, pero un perfil público puede ser visto por cualquiera, y las personas que aparecen en las fotos no eligieron esa audiencia ni fueron consultadas. La buena intención no reemplaza el consentimiento: antes de publicar, la pregunta es quién puede verlo realmente y si quienes aparecen aceptaron aparecer ahí. Lo proporcionado es consultar a las familias, pedir autorización, publicar en un canal con una audiencia definida o sin mostrar rostros, y bajar lo ya publicado si alguien lo pide.',
        nota: '(Si elegiste "persistencia" o "circulación": también están presentes, pero revisá de nuevo. Lo primero que falló fue no ver quién podía mirar esas fotos y no consultar a quienes aparecen en ellas.)',
      },
      {
        clave: 's2',
        enunciado:
          'Una estudiante de quinto año, mientras prepara la fiesta de egresados, encuentra en el chat del curso la captura de un mensaje que un compañero escribió dos años atrás, cuando tenía catorce. En el mensaje hace un comentario despectivo sobre un docente. La captura empieza a circular entre los egresados, con burlas. Hoy ese compañero es otro: cambió, y está avergonzado.',
        analisis:
          '¿Qué pesa más en esta situación? La persistencia. Un mensaje de hace dos años sigue disponible y puede reaparecer en cualquier momento, desvinculado de quien lo escribió y de lo que pasó después. Acá lo central es el derecho a evolucionar: nadie debería quedar fijado por lo que dijo a los catorce. Eso no significa negar lo que dijo ni que no pueda hacerse cargo de ello: significa distinguir entre hacerse cargo de lo que hizo y quedar definido por eso para siempre. Lo proporcionado es frenar la circulación de la captura, escuchar al compañero —y al docente aludido, si corresponde— y habilitar una instancia de reparación, sin reproducir la burla en el grupo ni usar la captura como arma.',
        nota: '(Si elegiste "audiencia" o "circulación": también están en juego, pero el eje de este caso es que lo escrito hace dos años sigue accesible y se está usando para definir a una persona hoy.)',
      },
      {
        clave: 's3',
        enunciado:
          'Se detecta en una red social una cuenta anónima que publica burlas sobre compañeros de un curso, con imágenes recortadas de fotos de ellos. No se sabe quién la administra. Algunos estudiantes sospechan de un grupo concreto. Las familias de dos estudiantes afectados piden que la escuela actúe. Otros estudiantes dicen que "es solo una cuenta de chistes".',
        analisis:
          '¿Qué pesa más en esta situación? Acá pesan las tres, y la lectura depende de qué se priorice. La audiencia: nadie sabe quién mira ni quién sigue la cuenta. La persistencia: las burlas quedan publicadas. La circulación: las imágenes ya fueron recortadas y pueden reenviarse. No hay una única respuesta correcta. Una lectura puede apoyarse en frenar cuanto antes la circulación; otra, en escuchar a los afectados y recuperar su confianza; otra, en distinguir si hay un daño más grave que un conflicto —por la persistencia, el anonimato y las imágenes recortadas— que requiera activar el protocolo institucional y avisar a las familias. Lo que se evalúa es que puedas justificar qué pesa más y por qué, y que no resuelvas el caso ni minimizándolo ("es solo una cuenta de chistes") ni tratándolo por reflejo como un delito sin analizarlo.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: una discusión entre estudiantes en un grupo de mensajería, que terminó con capturas circulando. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Fue una discusión en un chat. Eso no es la vida real ni cuenta como un problema de convivencia escolar: si se pelean en el aula, ahí actuamos; lo que pasó en el grupo, que lo resuelvan ellos.',
      citaB:
        'Lo que pasó viola claramente la netiqueta: se insultaron y circularon capturas. Hay que recordarles las reglas del grupo y sancionar a los que escribieron. Con eso queda resuelto.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        'Análisis A: trata lo que pasó en un espacio mediado como si no fuera real. Las relaciones digitales producen consecuencias afectivas, reputacionales y comunitarias que atraviesan la vida física: lo que pasó en el chat llegó al aula, y esperar a que haya una pelea en persona para intervenir es llegar tarde. Además deja solos a los estudiantes en un conflicto cuyas condiciones —un grupo grande, capturas, espectadores— hacen difícil que lo resuelvan sin ayuda.',
      errorB:
        'Análisis B: reduce la convivencia a reglas y sanción. La netiqueta ofrece reglas mínimas y conviene tenerlas, pero no alcanza: recordar las reglas y castigar no escucha lo que pasó, no repara el daño y no recupera la confianza de quien se sintió agredido. Una sanción sin reparación deja el conflicto abierto.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: dejaron de mirar a las personas. Uno, porque pensó que detrás de una pantalla no había nada que cuidar; el otro, porque pensó que alcanzaba con aplicar una regla.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro: 'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y la identidad híbrida',
        enunciado: '¿Cuál de estas afirmaciones define mejor la identidad digital?',
        opciones: [
          { id: 'a', texto: 'Es una versión aparte de la persona, que existe solo en internet y no afecta su vida fuera de él.' },
          { id: 'b', texto: 'Forma parte de una identidad híbrida: se construye tanto en espacios físicos como digitales, y lo que ocurre en uno tiene consecuencias en el otro.' },
          { id: 'c', texto: 'Es el conjunto de contraseñas y datos que se usan para entrar a las plataformas.' },
          { id: 'd', texto: 'Es la imagen que cada persona decide mostrar, y solo ella la controla.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Esa es la separación entre "lo virtual" y "lo real" que conviene abandonar. Las relaciones y las identidades en espacios mediados producen consecuencias afectivas, reputacionales y comunitarias fuera de la pantalla.',
          c: 'Eso son credenciales de acceso, que tienen que ver con la seguridad. La identidad digital es mucho más amplia: es cómo nos presentamos, nos relacionamos y somos percibidos.',
          d: 'La identidad digital no la controla solo cada persona: otros pueden publicar sobre nosotros, reenviar lo que dijimos y reinterpretarlo. Justamente por eso importa anticipar la audiencia, la persistencia y la circulación.',
        },
      },
      {
        objetivo: 'identificar audiencia, persistencia y circulación',
        enunciado:
          'Un docente comparte en un grupo "cerrado" de WhatsApp un comentario sobre un estudiante. Otro integrante del grupo lo captura y lo envía a personas que no pertenecen a él, sin la conversación anterior. ¿Qué propiedad de la comunicación mediada explica mejor lo que ocurrió?',
        opciones: [
          { id: 'a', texto: 'La persistencia: el mensaje quedó guardado.' },
          { id: 'b', texto: 'La circulación: el mensaje se copió, salió del grupo y se leyó sin su contexto.' },
          { id: 'c', texto: 'La audiencia: el docente no sabía cuántas personas había en el grupo.' },
          { id: 'd', texto: 'Ninguna: un grupo cerrado es privado y lo que se dice en él no puede salir.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'La persistencia está presente (la captura existe porque el mensaje quedó registrado), pero lo que mejor explica el problema es que el mensaje salió del grupo y se leyó sin contexto: eso es circulación.',
          c: 'La audiencia también importa, pero en este caso el problema no es quién estaba en el grupo, sino que el mensaje salió de él.',
          d: 'Un grupo cerrado reduce la audiencia, pero no impide que alguien capture y reenvíe lo que se dice. Pensar un espacio como privado es justamente uno de los supuestos que conviene revisar.',
        },
      },
      {
        objetivo: 'distinguir la netiqueta de la ciudadanía relacional',
        enunciado:
          'Después de un conflicto en el grupo del curso, una docente propone recordar las reglas de uso del grupo, sancionar a quienes escribieron los insultos y dar el tema por cerrado. ¿Qué le falta a esa respuesta, desde la mirada de la ciudadanía relacional?',
        opciones: [
          { id: 'a', texto: 'Nada: las reglas y la sanción son suficientes para restablecer la convivencia.' },
          { id: 'b', texto: 'Escuchar a las personas involucradas y trabajar la reparación, de modo que quien se sintió agredido pueda recuperar la confianza y volver a participar.' },
          { id: 'c', texto: 'Prohibir el uso del grupo para evitar que se repita.' },
          { id: 'd', texto: 'Dejar que los estudiantes lo resuelvan solos, sin intervenir.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Las reglas y la sanción pueden ser necesarias, pero no alcanzan: la netiqueta ofrece normas mínimas, y una sanción sin escucha ni reparación deja el daño y el vínculo como estaban.',
          c: 'Prohibir el grupo elimina el espacio, no el problema, y deja sin resolver lo que pasó entre las personas. Con acuerdos claros, ese mismo canal podría usarse para convivir mejor.',
          d: 'Dejar que lo resuelvan solos ignora que el conflicto escaló con espectadores, capturas y presión del grupo: condiciones que hacen difícil resolverlo sin acompañamiento.',
        },
      },
      {
        objetivo: 'decidir cómo comunicar, poner un límite o reparar, cuidando el derecho a evolucionar',
        enunciado:
          'Una captura de un mensaje que una estudiante escribió hace tres años, cuando tenía doce, empieza a circular en el curso y se usa para burlarse de ella. ¿Cuál es la respuesta más adecuada?',
        opciones: [
          { id: 'a', texto: 'Que reconozca lo que dijo y se disculpe frente al curso, para cerrar el tema.' },
          { id: 'b', texto: 'Frenar la circulación de la captura, escuchar a la estudiante y reconocer que lo escrito a los doce años no la define hoy, sin negar que pueda hacerse cargo de lo que dijo.' },
          { id: 'c', texto: 'Ignorarlo: pasó mucho tiempo y los chicos se olvidan.' },
          { id: 'd', texto: 'Sancionar a quienes comparten la captura y también a la estudiante por lo que escribió.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Una disculpa pública forzada suele exponer más que reparar, y usa el pasado de la persona para definirla hoy. La reparación pasa por escuchar y cuidar.',
          c: 'Que haya pasado tiempo no significa que se olviden: la persistencia hace que lo escrito reaparezca, y ignorarlo deja a la estudiante expuesta a las burlas.',
          d: 'Sancionar a la estudiante por algo que escribió años atrás la deja fijada en esa representación, justamente lo que el derecho a evolucionar busca evitar. Corresponde frenar la circulación y escuchar.',
        },
      },
    ],
    correcto: 'Correcto.',
    rubricaTitulo: 'Rúbrica de desempeño',
    rubricaIntro: 'Se aplica sobre el análisis que hiciste en Practicá vos.',
    rubricaColNivel: 'Nivel',
    rubricaColMuestra: 'Qué muestra el docente',
    rubrica: [
      { nivel: '1. Inicial', muestra: 'Trata lo que pasa en espacios mediados como menos real, o reduce todo a reglas y sanciones.' },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que lo mediado tiene consecuencias, pero identifica una sola propiedad (audiencia, persistencia o circulación) sin relacionarlas, o sin considerar a las personas involucradas.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Identifica audiencia, persistencia y circulación en la situación, distingue la netiqueta de la convivencia y propone un cambio proporcionado que incluye escuchar y poner un límite.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además propone una reparación con consentimiento y reciprocidad, cuida el derecho a evolucionar, distingue un conflicto de un daño más serio y justifica su decisión cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: lo que se juega en la comunicación mediada, la diferencia entre reglas mínimas y una convivencia con empatía y reparación, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es cómo mirás los grupos, los mensajes y las discusiones digitales de tu curso, tus propios mensajes incluidos. Detrás de cada perfil hay una persona, y detrás de cada captura, alguien a quien ese mensaje llegó.',
    accionSemana:
      'Una acción concreta para esta semana: antes de publicar o reenviar algo que tenga que ver con tu curso —una foto, un mensaje, una captura, un comentario—, hacete las tres preguntas: quién puede verlo, cuánto puede durar y cómo se leería fuera de contexto. Y proponele a tus estudiantes acordar entre todos una norma de convivencia para los grupos del curso: cómo se discute, qué se hace cuando algo se calienta, quién puede pedir que algo se borre y cómo se repara cuando alguien se siente agredido.',
    parrafo3:
      'Volvé al problema de Por qué importa: tu comentario sacado de contexto, circulando por otros grupos. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de eso podrías haber anticipado y qué parte no? ¿Qué harías distinto la próxima vez? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué harías distinto?',
    fichas: [
      {
        titulo: 'Convivir también en línea: respeto, empatía y responsabilidad digital',
        objetivo:
          'Promover actitudes empáticas, respetuosas y responsables en los entornos digitales, reconociendo el impacto real de nuestras interacciones virtuales en las personas y comunidades.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'Los entornos digitales no son "virtuales" en el sentido de irreales: son **espacios donde vivimos, nos expresamos, compartimos, aprendemos y también herimos o cuidamos**.' },
          { tipo: 'parrafo', texto: 'La **convivencia digital** implica construir comunidades donde:' },
          {
            tipo: 'lista',
            items: [
              'Se respetan las diferencias.',
              'Se valora la diversidad de voces.',
              'Se evitan la violencia, la exclusión, el acoso o la humillación.',
              'Se interviene cuando alguien sufre o necesita apoyo.',
            ],
          },
          { tipo: 'parrafo', texto: 'La **ética digital** es la reflexión sobre **cómo usamos el poder de la tecnología**: nuestras palabras, clics y publicaciones pueden acompañar o dañar. Implica **asumir responsabilidad por lo que hacemos, lo que permitimos y lo que ignoramos**.' },
          { tipo: 'parrafo', texto: 'La **empatía digital** es la capacidad de **ponerse en el lugar del otro, incluso cuando no lo vemos físicamente**, y actuar con respeto y cuidado, sabiendo que **detrás de cada pantalla hay una persona real**.' },
          { tipo: 'parrafo', texto: 'Esta dimensión también trabaja la prevención del **ciberbullying**, los discursos de odio y la discriminación, y promueve una **cultura de paz digital**.' },
        ],
        preguntaDetonadora: '¿Te animarías a decir en persona lo que decís por mensaje? ¿Qué cosas cambian cuando no vemos la reacción del otro?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Dos caras del mismo comentario" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Presentá un mismo mensaje expresado de dos formas distintas:' },
              { tipo: 'lista', items: ['Respetuosa', 'Agresiva, irónica o despectiva'] },
              { tipo: 'parrafo', texto: 'En parejas o grupos, analizan:' },
              { tipo: 'lista', items: ['¿Qué diferencia hay en el impacto?', '¿Cómo responderías a cada uno?'] },
              { tipo: 'parrafo', texto: '→ Reflexión: ¿cómo construir un espacio digital más humano?' },
            ],
          },
          {
            titulo: 'Actividad principal – "Manifiesto de convivencia digital" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'En grupos, los y las estudiantes identifican conductas problemáticas en redes (ej: insultos, exclusión, cancelación, burlas, fotos sin consentimiento).',
                  'Luego elaboran un **Manifiesto de Convivencia Digital**, que incluya:',
                  'Principios de respeto, escucha y empatía',
                  'Frases de aliento para responder al odio',
                  'Ideas para intervenir si alguien sufre violencia digital',
                  'Un lema o hashtag positivo',
                  'Presentan sus manifiestos como afiches, piezas digitales o campañas internas de convivencia para la escuela.',
                ],
              },
            ],
          },
        ],
        frase: '"La empatía digital es saber que cada palabra en línea puede construir un puente o levantar un muro."',
        glosario: ['**Convivencia digital**', '**Ética digital**', '**Empatía digital**', '**Ciberbullying**', '**Cultura de paz digital**'],
        referencias: [
          'Guía "Convivencia Digital" – UNICEF / Faro Digital',
          'Video: *"Ciberbullying: cuando las palabras lastiman"* – Canal Encuentro',
          'App: Interland – Reino de la Bondad',
          'www.chicos.net – Módulo de convivencia',
          'Manual "Ciudadanía y respeto en línea" – INADI / Educ.ar',
        ],
      },
      {
        titulo: 'Convivencia digital: construir vínculos sanos en línea',
        objetivo:
          'Comprender qué se entiende por convivencia digital, por qué es importante y cómo podemos contribuir a crear entornos digitales más respetuosos, seguros y empáticos.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'La convivencia digital es el conjunto de normas, prácticas, valores y actitudes que hacen posible vivir en armonía en los entornos digitales. Así como en la vida cotidiana aprendemos a convivir con otros en la escuela, en la calle o en casa, también debemos aprender a **convivir en internet**.' },
          { tipo: 'parrafo', texto: 'En redes sociales, plataformas educativas, videojuegos o grupos de mensajería, interactuamos con otras personas. Estas interacciones deben regirse por los mismos principios que valoramos en la vida presencial: el respeto, la empatía, el diálogo, la inclusión y el cuidado mutuo.' },
          { tipo: 'parrafo', texto: 'La convivencia digital se ve afectada cuando se dan situaciones de agresión, discriminación, exclusión, burlas o amenazas. Estas prácticas, que incluyen el **ciberacoso**, la difusión no consentida de contenido o los discursos de odio, generan entornos digitales hostiles.' },
          { tipo: 'parrafo', texto: 'Por eso es fundamental construir una **cultura digital basada en los derechos humanos**, donde todas las personas, y especialmente niños, niñas y adolescentes, se sientan seguras, escuchadas y respetadas. Fomentar la convivencia digital no es solo una responsabilidad individual, sino también colectiva, y requiere de normas claras, acompañamiento adulto y espacios de formación.' },
        ],
        preguntaDetonadora: '¿Qué actitudes ayudan a que internet sea un lugar en el que dé gusto estar? ¿Qué actitudes lo **vuelven** un lugar violento?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Semáforo de actitudes digitales" (10 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Presentá situaciones comunes en redes sociales o chats (ej: responder con ironía, ignorar un mensaje, compartir un meme sin consentimiento).' },
              { tipo: 'parrafo', texto: 'Los estudiantes deben clasificarlas en:' },
              { tipo: 'lista', items: ['Verde: favorece la convivencia', 'Amarillo: depende del contexto', 'Rojo: daña la convivencia'] },
            ],
          },
          {
            titulo: 'Actividad principal – "Manual para una buena convivencia digital" (40 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'En grupos, los estudiantes eligen un entorno digital (ej: red social, grupo de WhatsApp, plataforma educativa).',
                  'Elaboran un mini "manual" con reglas y sugerencias para una buena convivencia en ese entorno.',
                  'El manual debe incluir:',
                  '3 cosas que debemos hacer',
                  '3 cosas que debemos evitar',
                  '1 frase que sintetice el espíritu del grupo',
                  'Socializan los manuales y reflexionan sobre cómo ponerlos en práctica en sus espacios reales.',
                ],
              },
            ],
          },
        ],
        frase: '"Cada mensaje que **enviás** es una oportunidad para construir o romper el respeto. Elegí construir."',
        glosario: ['**Convivencia digital**', '**Empatía en línea**', '**Ciberacoso**', '**Normas de respeto**', '**Entorno seguro**'],
        referencias: [
          'Guía sobre Convivencia Digital – Faro Digital & UNICEF',
          'Juego "Interland" – Aventura de la Amabilidad',
          'Actividad interactiva: "Cómo actuar ante situaciones incómodas en redes" – www.chicos.net',
          'Video breve: ¿Qué es la convivencia digital? (YouTube Educativo)',
        ],
      },
      {
        titulo: 'Ser, cuidar y compartir: mi identidad digital como proyecto personal y colectivo',
        objetivo:
          'Integrar conocimientos y habilidades para diseñar y ejercer una identidad digital auténtica, respetuosa, segura y coherente con los valores de la ciudadanía digital.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'Construir una **identidad digital ética y segura** no es una tarea técnica: es un proceso de **reflexión, elección y acción consciente** sobre cómo queremos ser vistos/as, cómo tratamos a los demás en línea, y qué huella dejamos.' },
          { tipo: 'parrafo', texto: 'La identidad digital:' },
          {
            tipo: 'lista',
            items: [
              'Es **relacional**: se construye con otros/as.',
              'Es **dinámica**: evoluciona con nuestras decisiones.',
              'Es **política**: comunica valores, intereses, cultura, posicionamientos.',
              'Es **ciudadana**: puede aportar a una convivencia digital respetuosa o reproducir violencia, exclusión o discriminación.',
            ],
          },
          { tipo: 'parrafo', texto: 'Por eso, **la autenticidad no significa mostrar todo**, sino elegir con libertad y responsabilidad qué y cómo compartimos. Ser ético no es censurarse, sino **pensar el impacto que nuestras acciones tienen en los demás**.' },
          { tipo: 'parrafo', texto: 'La construcción de una buena identidad digital también requiere:' },
          {
            tipo: 'lista',
            items: [
              '**Empatía**: pensar cómo se sienten los otros.',
              '**Coherencia**: actuar online como actuaríamos offline.',
              '**Autonomía**: no dejar que otros definan quiénes somos.',
              '**Coraje digital**: defender el respeto, el derecho a ser diferentes, a equivocarse y a aprender.',
            ],
          },
        ],
        preguntaDetonadora: '¿Cómo te gustaría que te recuerden en internet dentro de 10 años? ¿Qué estás haciendo hoy para que eso ocurra?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Mi yo ideal en la red" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Cada estudiante completa la frase:' },
              { tipo: 'lista', items: ['*"Quiero que mi identidad digital transmita..."*'] },
              { tipo: 'parrafo', texto: '→ Luego escribe tres palabras que definan esa intención: (ej: respeto, creatividad, honestidad, humor, compromiso).' },
              { tipo: 'parrafo', texto: '→ Reflexión en ronda: ¿coincide con lo que mostramos hoy? ¿Qué nos aleja o acerca?' },
            ],
          },
          {
            titulo: 'Actividad principal – "Mi manifiesto de identidad digital" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'Los y las estudiantes crean un **manifiesto personal** que responda:',
                  '¿Cómo quiero mostrarme en internet?',
                  '¿Qué valores quiero reflejar?',
                  '¿Qué límites no quiero cruzar?',
                  '¿Cómo voy a cuidar a los demás?',
                  '¿Qué compromisos asumo?',
                  'El formato puede ser:',
                  'Carta en primera persona',
                  'Collage visual',
                  'Video selfie',
                  'Afiche con íconos y frases',
                  'Poema, canción o presentación creativa',
                  'Se presentan en una "Galería de Manifiestos" que puede ser física (en el aula) o digital (Padlet, Canva, presentación).',
                ],
              },
              { tipo: 'parrafo', texto: '→ Opcional: armar una "Declaración de Identidad Digital del curso".' },
            ],
          },
        ],
        frase: '"En la red también somos memoria. Elegí dejar una huella que inspire, no que hiera."',
        glosario: ['**Autenticidad digital**', '**Coherencia digital**', '**Coraje digital**', '**Empatía en línea**', '**Manifiesto personal**'],
        referencias: [
          'Guía "Yo elijo cómo ser en internet" – Faro Digital',
          'Plataforma www.beinternetawesome.withgoogle.com – Interland',
          'Video inspirador: *"¿Quién soy cuando nadie me ve?"* – YouTube Educativo',
          'Herramientas para crear manifiestos: Canva, Genially, Padlet, PowerPoint, mural físico',
        ],
      },
      {
        titulo: 'Avatares con conciencia: ética, cuidado e identidad en mundos virtuales',
        objetivo:
          'Explorar el concepto de metaverso, sus potencialidades y riesgos, y reflexionar sobre cómo se construyen vínculos, derechos y responsabilidad en entornos inmersivos desde una ciudadanía digital ética.',
        desarrollo: [
          { tipo: 'parrafo', texto: 'El **metaverso** es un entorno virtual persistente e inmersivo en el que personas interactúan mediante avatares, ya sea para jugar, trabajar, socializar, estudiar o crear.' },
          { tipo: 'parrafo', texto: 'Más allá de la tecnología (realidad aumentada, realidad virtual, blockchain, IA), el metaverso plantea preguntas profundas:' },
          {
            tipo: 'lista',
            items: [
              '¿Qué es la **identidad** en un entorno donde podemos cambiar de forma, género o historia?',
              '¿Cómo se ejerce el **consentimiento** en una experiencia sensorial inmersiva?',
              '¿Hay **violencia digital** en el metaverso? ¿Cómo se previene?',
              '¿Qué pasa con la **propiedad**, la **reputación** o el **derecho a desconectarse**?',
            ],
          },
          { tipo: 'parrafo', texto: 'El metaverso puede ampliar experiencias educativas, artísticas o sociales, pero también puede ser un espacio de **exclusión, vigilancia o manipulación** si no está regulado y habitado con conciencia.' },
          { tipo: 'parrafo', texto: 'Por eso, la **ética inmersiva** propone una nueva pedagogía del cuidado digital:' },
          {
            tipo: 'lista',
            items: [
              'Reaprender los límites del cuerpo, la privacidad y el otro.',
              'Reconocer la diferencia entre representación y realidad sin perder empatía.',
              'Diseñar entornos seguros, inclusivos y emocionalmente sostenibles.',
              'Formular normas comunitarias que **protejan la dignidad humana, incluso en mundos virtuales**.',
            ],
          },
        ],
        preguntaDetonadora: '¿**Sos** el mismo en un avatar? ¿Qué pasa con los derechos humanos cuando todo parece "juego" en 3D?',
        actividades: [
          {
            titulo: 'Actividad inicial – "Mi otro yo virtual" (15 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Cada estudiante dibuja o describe su avatar ideal: ¿cómo sería? ¿qué poderes tendría? ¿cómo actuaría en un mundo virtual?' },
              { tipo: 'parrafo', texto: '→ Luego reflexionan:' },
              { tipo: 'lista', items: ['¿Esa identidad se parece a la mía real?', '¿Me sentiría más libre o más expuesto/a?'] },
            ],
          },
          {
            titulo: 'Actividad principal – "Guía de ética para el metaverso" (45-60 min)',
            bloques: [
              { tipo: 'parrafo', texto: 'Paso a paso:' },
              {
                tipo: 'lista',
                items: [
                  'En grupos, investigan un aspecto ético del metaverso:',
                  'Privacidad / consentimiento',
                  'Violencia / acoso',
                  'Identidad / género',
                  'Propiedad digital / economía virtual',
                  'Tiempo / desconexión',
                  'Elaboran una **Guía breve de principios éticos** para habitar el metaverso, que incluya:',
                  'Valores',
                  'Reglas de cuidado',
                  'Propuesta de moderación o prevención',
                  'Un lema o hashtag de convivencia',
                  'Presentan su guía como si fuera parte de una campaña para nuevos usuarios.',
                ],
              },
            ],
          },
        ],
        frase: '"Aunque cambies de cuerpo, aunque todo parezca virtual, tu humanidad siempre te acompaña. No la desconectes."',
        glosario: ['**Metaverso**', '**Avatar**', '**Ética inmersiva**', '**Consentimiento digital**', '**Ciberconvivencia extendida**'],
        referencias: [
          'Fundación Karisma – *Identidad y ética en mundos inmersivos*',
          'UNESCO – Ética de las tecnologías inmersivas',
          'Video: *"¿Vivimos en un metaverso?"* – Canal Encuentro',
          'Proyecto VR "Embodied Empathy" – Experiencias de cambio de cuerpo en realidad virtual',
          'Chicos.net – "Nuevas plataformas, nuevos cuidados"',
        ],
      },
    ],
  },
  recursosYCierre: {
    titulo: 'Recursos y cierre',
    cambioTitulo: 'Antes de cerrar: ¿qué cambió?',
    cambioInstruccion: 'Volvé a tu respuesta de Por qué importa. Releela.',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué algo que dijo en un chat puede dejar de ser suyo apenas lo envía?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Socio-Comunicacional e Identidad, en una tarjeta',
      parrafos: [
        'Lo que decimos en un espacio mediado ya no queda donde lo dijimos. Las relaciones digitales no son menos reales: producen consecuencias afectivas, reputacionales y comunitarias.',
        '**Las tres propiedades de la comunicación mediada, y la pregunta que anticipa cada una:** audiencia (¿quién puede verlo?) · persistencia (¿cuánto puede durar?) · circulación (¿cómo se leería fuera de contexto?)',
        '**Cuando algo sale mal:** escuchar · poner un límite · reparar.',
        '**Netiqueta y convivencia:** la netiqueta ofrece reglas mínimas. Convivir pide además empatía, consentimiento, reciprocidad y capacidad de reparar.',
        '**Y una cosa más:** el derecho a evolucionar. Nadie debería quedar fijado por una representación pasada.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la tercera de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Cognitivo-Intelectual e Informacional',
    seguiEnlace2Href: '/tematicas/cognitivo-intelectual-e-informacional',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Convivir en espacios mediados no es seguir reglas: es hacerse cargo de cómo llegan nuestras palabras a otros, y animarse a reparar cuando algo sale mal. Detrás de cada perfil hay una persona; detrás de cada captura, también.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[SOCIO_COMUNICACIONAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
