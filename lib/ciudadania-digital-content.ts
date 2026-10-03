// Contenido de /ciudadania-digital (módulo base). Escrito solo para 'docentes': cualquier otra
// audiencia cae a ese fallback vía resolveContenido() (misma regla que resolveTexto: audiencia
// activa si tiene contenido, si no el fallback explícito de la temática, si no el primero definido).
// Sin fuentes/citas a propósito — se agregan en un paso posterior, con URLs verificadas.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { PoliedroDimension } from './ciudadania-digital-madre-store';

export const CIUDADANIA_DIGITAL_FALLBACK: Audiencia = 'docentes';

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
  { id: 'poliedro', number: '05', label: 'El Poliedro', shortLabel: 'Poliedro' },
  { id: 'caso-resuelto', number: '06', label: 'Un caso resuelto', shortLabel: 'Caso' },
  { id: 'practica', number: '07', label: 'Practicá vos', shortLabel: 'Practicá' },
  { id: 'pone-a-prueba', number: '08', label: 'Poné a prueba lo aprendido', shortLabel: 'Quiz' },
  { id: 'llevalo-al-aula', number: '09', label: 'Llevalo a tu aula', shortLabel: 'Aula' },
  { id: 'recursos-y-cierre', number: '10', label: 'Recursos y cierre', shortLabel: 'Cierre' },
];

// ── Dimensiones del Poliedro (las usan las secciones 5, 9 y 10 y el store) ──
export interface DimensionInfo {
  id: PoliedroDimension;
  nombre: string;
  descripcion: string; // Sección 5, nivel 1
  linea: string; // Sección 5, nivel 3
  capacidad: string; // Sección 10, mapa de competencias
  // Temática real de esta dimensión, si ya existe (ver TablaDimensiones en ui.tsx).
  // Ausente = placeholder href="#", se completa cuando se cree esa temática.
  href?: string;
}

export const DIMENSIONES: DimensionInfo[] = [
  {
    id: 'instrumental',
    nombre: 'Instrumental y Acceso',
    descripcion:
      'usar la tecnología con autonomía y seguir aprendiendo cuando cambia, no solo saber tocar una pantalla conocida.',
    linea: 'Convertir la tecnología en capacidad real de acción, no solo en manejo de una interfaz conocida.',
    capacidad: 'Usar la tecnología con autonomía y seguir aprendiendo cuando cambia',
    href: '/tematicas/instrumental-y-acceso',
  },
  {
    id: 'cognitivo',
    nombre: 'Cognitivo-Intelectual e Informacional',
    descripcion:
      'construir criterio frente a la abundancia de información: evaluar fuentes, calidad y grado de confianza de lo que se lee.',
    linea: 'Construir criterio dentro de la abundancia de información.',
    capacidad: 'Evaluar fuentes, calidad y confiabilidad de la información',
    href: '/tematicas/cognitivo-intelectual-e-informacional',
  },
  {
    id: 'socio-comunicacional',
    nombre: 'Socio-Comunicacional e Identidad',
    descripcion:
      'encontrarnos y convivir en espacios mediados, donde lo que decimos tiene audiencia, persistencia y consecuencias reales.',
    linea: 'Encontrarnos y convivir en espacios mediados por pantallas.',
    capacidad: 'Convivir y construir identidad en espacios mediados',
    href: '/tematicas/socio-comunicacional-e-identidad',
  },
  {
    id: 'emocional',
    nombre: 'Emocional',
    descripcion:
      'reconocer cómo el miedo, la urgencia o el deseo de pertenencia influyen en nuestras decisiones digitales, sin patologizarlas.',
    linea: 'Comprender lo que sentimos dentro de entornos diseñados para hacernos reaccionar rápido.',
    capacidad: 'Reconocer cómo la urgencia y la pertenencia influyen en las decisiones digitales',
    href: '/tematicas/emocional',
  },
  {
    id: 'salud-bienestar',
    nombre: 'Salud y Bienestar Digital',
    descripcion:
      'sostener una relación con la tecnología que fortalezca, y no deteriore, el descanso, el aprendizaje y los vínculos.',
    linea: 'Sostener una relación sana y sostenible con la tecnología.',
    capacidad: 'Sostener una relación sana con la tecnología',
    href: '/tematicas/salud-y-bienestar-digital',
  },
  {
    id: 'etico-normativa',
    nombre: 'Ético-Normativa y Derechos',
    descripcion:
      'distinguir qué es legítimo de qué es simplemente posible, y saber cuándo una situación necesita una lectura de derechos.',
    linea: 'Orientar lo técnicamente posible con criterios de legitimidad.',
    capacidad: 'Distinguir lo legítimo de lo simplemente posible',
    href: '/tematicas/etico-normativa-y-derechos',
  },
  {
    id: 'seguridad',
    nombre: 'Seguridad, Privacidad y Protección Digital',
    descripcion:
      'sostener una confianza informada en los sistemas que usamos, combinando autocuidado con exigencia institucional.',
    linea: 'Sostener una confianza informada en los sistemas que usamos.',
    capacidad: 'Sostener una confianza informada en los sistemas',
  },
  {
    id: 'pedagogica-creativa',
    nombre: 'Pedagógica y Creativa',
    descripcion:
      'aprender a aprender en un mundo que sigue cambiando, y usar la tecnología para crear, no solo para consumir.',
    linea: 'Aprender a habitar un mundo que va a seguir cambiando.',
    capacidad: 'Aprender a aprender, crear y no solo consumir',
  },
  {
    id: 'participacion',
    nombre: 'Participación y Democracia',
    descripcion: 'transformar la conexión en incidencia real sobre asuntos colectivos, no solo comentar.',
    linea: 'Transformar la conexión en incidencia real.',
    capacidad: 'Transformar la conexión en incidencia real',
  },
  {
    id: 'economica',
    nombre: 'Económica, Productiva y de Consumo',
    descripcion:
      'moverse con autonomía en mercados digitales: pagos, suscripciones, publicidad personalizada y trabajo mediado por plataformas.',
    linea: 'Ejercer autonomía dentro de mercados digitalizados.',
    capacidad: 'Moverse con autonomía en mercados digitalizados',
  },
];

export const FAMILIARIDAD_OPCIONES = [
  'Nunca escuché el término',
  'Lo escuché, pero no sabría explicarlo',
  'Tengo una idea general',
  'Podría explicarlo con mis propias palabras',
];

export const POLIEDRO_ESTADOS = [
  { value: 'activa', label: 'Activa' },
  { value: 'latente', label: 'Latente' },
  { value: 'ausente', label: 'Ausente' },
] as const;

export const TIPOS_SITUACION = ['Ejercicio de ciudadanía', 'Uso técnico', 'Riesgo'];

const DOCENTES = {
  introduccion: {
    titulo: 'Ciudadanía Digital: de usuario a ciudadano',
    bajada:
      'El módulo base de toda la plataforma: acá vas a entender qué significa ser ciudadano en un mundo mediado por tecnología, antes de entrar en cada tema en particular.',
    resumenTitulo: 'En este módulo vas a:',
    resumen: [
      'Explicar con tus propias palabras qué es la ciudadanía digital, y por qué no es lo mismo que saber usar la tecnología, cuidar tu seguridad informática o tener buenos modales en línea.',
      'Conocer el Poliedro de la Ciudadanía Digital, el mapa de las 10 capacidades que se ponen en juego cada vez que vivís, trabajás o enseñás en un entorno mediado por tecnología.',
      'Usar ese mapa para leer una situación real de tu aula o tu vida cotidiana, y ver qué cambia cuando dejás de reaccionar como usuario y empezás a decidir como ciudadano.',
    ],
    formato:
      'Duración estimada: 20 a 25 minutos. Se completa en una sola sesión, pero podés pausarlo y retomarlo: tu progreso queda guardado.',
  },

  logros: {
    titulo: 'Lo que vas a lograr',
    intro: 'Al finalizar este módulo vas a poder:',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'analizar una situación cotidiana o escolar mediada por tecnología y decidir cómo actuar como ciudadano, no solo como usuario.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la ciudadanía digital con tus propias palabras, incluyendo sus tres partes: ciudadanía, mediación tecnológica y territorio híbrido.',
      'Distinguir entre usuario y ciudadano digital en una situación dada, señalando al menos dos diferencias entre ambos (agencia, criterio, participación o responsabilidad).',
      'Identificar al menos tres dimensiones del Poliedro comprometidas en una situación escolar concreta, justificando cada una en una frase.',
      'Explicar, con un ejemplo propio, por qué tener acceso a la tecnología y saber usarla no alcanza para ejercer ciudadanía digital.',
    ],
  },

  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Qué es para vos ser un buen ciudadano digital?',
    parrafos: [
      'Tomate un momento antes de seguir. Las respuestas más comunes a esta pregunta suenan más o menos así: "no insultar en las redes", "cuidar mis contraseñas", "saber usar bien la computadora". Todas son ciertas. Ninguna alcanza.',
      'La tecnología se instaló en nuestra vida cotidiana antes de que tuviéramos tiempo de pensar qué significa ser ciudadanos en ella. Hoy millones de personas usan con total fluidez sistemas que no podrían explicar, y toman decisiones — sobre su privacidad, su identidad, su participación — sin saber que las están tomando. Ese es el punto de partida de este módulo: no cuánto sabés de tecnología, sino cuánto ejercés tu ciudadanía dentro de ella.',
    ],
    problemaTitulo: 'Y esto, ¿qué harías?',
    problema:
      'Ahora pensá en esto: es domingo a la noche y el chat de familias de tu curso se desborda con reclamos cruzados. Una madre te escribe y te pide que intervengas. ¿Qué hacés?',
    problemaInstruccion:
      'Anotá tu respuesta con tus propias palabras, tal como actuarías hoy. No hay una respuesta correcta todavía — vas a volver a esta misma situación al final del módulo, para ver qué cambió en tu forma de pensarla.',
    problemaPlaceholder: 'Tu respuesta…',
    puntoPartidaTitulo: 'Antes de seguir, un punto de partida',
    pregunta1: '¿Qué tan familiarizado estás hoy con el concepto de ciudadanía digital?',
    pregunta1Placeholder: 'Elegí una opción',
    pregunta2: 'Con lo que sabés hoy, ¿cómo definirías "ciudadanía digital" en una frase?',
    pregunta2Ayuda: 'Respuesta abierta breve. No hay una respuesta correcta: es tu punto de partida.',
    notaGancho: 'Tu respuesta a la situación del chat de familias, arriba, es también parte de este punto de partida.',
    cierre: 'Guardá estas respuestas. Al final del módulo vas a volver a ellas para ver qué cambió.',
  },

  partimos: {
    titulo: 'De dónde partimos',
    bloques: [
      {
        subtitulo: 'Un mapa que cambió de forma',
        parrafos: [
          'La ciudadanía nunca fue una categoría fija. Pensadores como T. H. Marshall, John Dewey y Robert Dahl mostraron, cada uno desde su propio campo, que los derechos, la participación y las capacidades de una persona se van ampliando a medida que cambian las condiciones sociales. Lo digital no es una excepción a esa historia: es su capítulo más reciente.',
          'Esto significa algo importante: la tecnología no creó una especie humana nueva llamada "ciudadano digital". Seguís siendo la misma persona — titular de derechos, parte de comunidades, trabajador, consumidor, participante de una democracia. Lo que cambió es que una parte cada vez más grande de esas funciones hoy se ejerce a través de infraestructuras que administran actores públicos y privados: plataformas, sistemas de pago, algoritmos de recomendación, servicios del Estado. Por eso hace falta revisar qué capacidades necesitamos para seguir ejerciendo esa ciudadanía con efectividad.',
        ],
      },
      {
        subtitulo: 'Territorio híbrido: dejamos de vivir en dos mundos',
        parrafos: [
          'Durante años pensamos lo digital como un "mundo aparte" — el mundo real de un lado, el mundo virtual del otro. Esa separación ya no describe cómo vivimos.',
          'Pensá en cualquier situación cotidiana de tu aula: una relación entre estudiantes puede empezar cara a cara y seguir por mensajería; un conflicto puede amplificarse en un grupo de WhatsApp y volver al aula al día siguiente; un trámite del Estado puede resolverse a través de un sistema automatizado y afectar un derecho concreto. Lo físico, lo digital y lo algorítmico ya no son capas separadas: forman una sola continuidad, donde lo que pasa en una modifica a las otras.',
          'A esto lo llamamos territorio híbrido. Y reconocerlo cambia la pregunta que nos hacemos: ya no es "¿esto pasó en internet o en la vida real?", sino "¿qué está pasando realmente acá, y qué capacidades necesito para leerlo bien?".',
        ],
      },
      {
        subtitulo: 'Derechos que no se desconectan',
        parrafos: [
          'Los derechos digitales no son una categoría nueva e independiente: son los mismos derechos humanos — privacidad, expresión, educación, igualdad, participación, acceso a la información — ejercidos en este territorio híbrido. La tecnología no inventa estos derechos, pero sí cambia las condiciones en las que se ejercen y se vulneran.',
          'Esto tiene una consecuencia práctica para el aula: enseñar a las personas a protegerse (reconocer un fraude, cuidar una contraseña) es valioso, pero no reemplaza la responsabilidad de bancos, plataformas y organismos públicos de construir sistemas seguros. Y enseñar responsabilidades sin enseñar derechos no forma ciudadanos: forma personas obedientes. Este módulo, y toda la plataforma, trabajan siempre las dos caras juntas.',
        ],
      },
    ],
    notaPie:
      'Marco normativo: en Argentina, este territorio híbrido está regulado, entre otras normas, por la Ley de Protección de Datos Personales y la Ley de Grooming. Podés profundizar en ambas en la sección de recursos, al final del módulo.',
  },

  poliedro: {
    titulo: 'El Poliedro',
    nivel1: {
      etiqueta: 'Nivel 1 · Recordar',
      fraseTitulo: 'Ciudadanía digital, en una frase',
      frase:
        'Ciudadanía digital es ejercer ciudadanía — como titular de derechos, integrante de comunidades, trabajador, participante de una democracia — en un mundo donde una parte creciente de esas funciones pasa por infraestructuras tecnológicas administradas por actores públicos y privados. No es una habilidad nueva: es la ciudadanía de siempre, ejercida en el territorio híbrido.',
      ideas: [
        { termino: 'Ciudadanía', texto: 'derechos, participación y capacidades, en constante expansión histórica.' },
        {
          termino: 'Mediación tecnológica',
          texto: 'esas funciones hoy se ejercen a través de plataformas, algoritmos y sistemas automatizados.',
        },
        {
          termino: 'Territorio híbrido',
          texto: 'lo físico, lo digital y lo algorítmico ya no son mundos separados, sino una sola continuidad.',
        },
      ],
      dimensionesTitulo: 'El Poliedro: 10 dimensiones',
      dimensionesIntro: 'El Poliedro es el mapa de las capacidades que hacen falta para ejercer esa ciudadanía. Son diez:',
      fuerzasTitulo: 'Las fuerzas transversales',
      fuerzas:
        'No son dimensiones: son fuerzas que atraviesan y modifican cómo se ejercen las diez de arriba. Son cinco: datos y algoritmos, inteligencia artificial, arquitecturas de decisión (cómo el diseño de una interfaz organiza lo que podés elegir), desigualdad e inclusión, y materialidad de lo digital (la infraestructura física y su sostenibilidad).',
    },
    nivel2: {
      etiqueta: 'Nivel 2 · Comprender',
      bloques: [
        {
          subtitulo: 'Por qué ser usuario no es ser ciudadano',
          texto:
            'Un usuario competente sabe manejar herramientas y comportarse de forma responsable. Un ciudadano, además, tiene capacidad para intervenir en asuntos colectivos y relacionarse con las instituciones que tienen poder sobre su vida. Miles de comentarios en una consulta pública no son participación si nadie explica cómo esos comentarios inciden en la decisión final. Esa es la diferencia que atraviesa las diez dimensiones: no alcanza con usar, hay que poder incidir.',
        },
        {
          subtitulo: 'Por qué conectarse no alcanza',
          texto:
            'La conexión técnica es solo la condición inicial. Ejercer ciudadanía requiere además comprender el territorio, apropiarse de sus recursos y tener posibilidades reales de incidencia. Por eso hablamos de brechas que aparecen después del acceso: alguien puede tener wifi y un teléfono, y aun así no comprender cómo se usan sus datos, no saber cómo participar en una decisión que lo afecta, o no poder ejercer un derecho que en teoría ya tiene.',
        },
        {
          subtitulo: 'Por qué las capacidades son interdependientes',
          texto:
            'Las diez dimensiones casi nunca actúan solas. Una misma situación — una foto compartida sin permiso, un mensaje que genera pánico, un trámite que solo puede hacerse por una app — activa varias a la vez: identidad, emocional, seguridad, ético-normativa. Por eso el Poliedro no es una lista de casilleros para tildar, sino un mapa de tensiones que conviven.',
        },
      ],
      noEsTitulo: 'Lo que ciudadanía digital NO es',
      noEs: [
        'No es lo mismo que saber usar la tecnología (eso es solo la dimensión instrumental).',
        'No es lo mismo que seguridad informática (eso es una parte de una sola dimensión, no el concepto completo).',
        'No es lo mismo que tener buenos modales en línea (la netiqueta es una capa mínima; la ciudadanía relacional pide además empatía, consentimiento y capacidad de reparar).',
        'Y no es lo mismo que "saber usar apps": conocer muchas aplicaciones no garantiza poder resolver un problema nuevo cuando la herramienta cambie.',
      ],
      bloqueFinal: {
        subtitulo: 'Por qué conocer una recomendación no alcanza para actuar',
        texto:
          'Entre saber qué hay que hacer y efectivamente hacerlo hay un proceso: percepción, aprendizaje social y condiciones del entorno. A esto lo llamamos el núcleo sensibilización–modelaje–entorno. Sensibilizar es volver visible lo que suele pasar desapercibido — el objetivo real de una interfaz, la presión emocional de un fraude. Modelar es aprender observando a otros: familias, docentes, pares, referentes. El entorno son las condiciones sociales, institucionales y tecnológicas que facilitan o dificultan una conducta. Por eso enseñar una regla no alcanza si el entorno la contradice todo el tiempo.',
      },
      ideaTitulo: 'La idea que ordena todo',
      idea:
        'El desafío no es adaptar pasivamente a las personas a cada tecnología nueva. Es fortalecer personas, comunidades e instituciones para que puedan participar en la construcción del mundo tecnológico que quieren habitar.',
      datoDecisionTitulo: 'Del dato a la decisión',
      datoDecision:
        'Antes de resolver cualquier situación, conviene separar dos preguntas que suelen mezclarse: "¿qué herramienta es?" y "¿qué capacidad está en juego?". La app, la plataforma o el dispositivo van a cambiar una y otra vez. La capacidad ciudadana comprometida, no. Por eso este módulo enseña a mirar primero la capacidad, no la herramienta: así el análisis no caduca cuando aparezca la próxima novedad tecnológica.',
    },
    nivel3: {
      etiqueta: 'Nivel 3 · Aplicar',
      tablaTitulo: 'Las diez dimensiones, con su enlace a la plataforma',
      colDimension: 'Dimensión',
      colLinea: 'En una línea',
      colEnlace: 'Enlace',
      enlaceTexto: 'Ver temática',
      lenteTitulo: 'La lente de tres preguntas',
      lenteIntro:
        'Para leer cualquier situación de tu aula o tu vida cotidiana con esta mirada, alcanza con tres preguntas, en este orden:',
      lente: [
        '¿Qué dimensión está comprometida? (Puede ser más de una.)',
        '¿Qué condiciones sociotécnicas intervienen? — reglas de la plataforma, diseño de la interfaz, incentivos comerciales, normas del grupo.',
        '¿Qué cambio sería proporcionado? — no la reacción más fuerte posible, sino la que corresponde a lo que realmente pasó.',
      ],
      lenteCierre:
        'Esta lente no busca una respuesta idéntica para todos los casos. Busca que, frente a cada situación nueva, sepas por dónde empezar a pensarla — y la vas a usar en los próximos dos pasos del módulo, con casos reales.',
    },
    notaPie:
      'La jerarquía de estos tres niveles — Recordar, Comprender, Aplicar — es intencional: evita el problema de encontrarte con diez o doce conceptos en paralelo sin saber cuál aprender primero.',
  },

  caso: {
    titulo: 'Un caso resuelto',
    subtitulo: 'Modelado: cómo se ve hecho bien',
    intro:
      'Vamos a recorrer un caso real de punta a punta, aplicando la lente de tres preguntas que acabás de conocer, más una cuarta fase de revisión. La idea no es que memorices una respuesta, sino que veas el razonamiento completo — con las dudas incluidas — antes de que te toque hacerlo a vos en el paso siguiente.',
    casoTitulo: 'El caso',
    caso:
      'Una fotografía de un estudiante, modificada con IA, empieza a circular en el grupo de WhatsApp del curso. Alguien la subió como chiste. Otro estudiante te la muestra, incómodo, y te pregunta qué hacer.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        guia: 'Qué pasó, quiénes participan y qué está en juego.',
        texto:
          'Una imagen real fue alterada con inteligencia artificial y compartida en un espacio grupal, sin que la persona retratada lo supiera ni lo autorizara. Participan quien la creó, quien la compartió primero, el grupo que la hizo circular, la persona expuesta y vos, como docente, al que te llega el reclamo. Lo que está en juego no es solo "una joda que se fue de mano": es la imagen de alguien, transformada y puesta en circulación sin su consentimiento.',
        duda: '(Acá me pregunto: ¿esto ya salió del grupo del curso, o todavía está contenido ahí? Esa sola pregunta cambia toda la fase 3.)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        guia: 'Qué dimensiones se activan, y cuáles no.',
        texto:
          'Una situación así activa, al mismo tiempo, operación técnica (¿cómo se hizo, con qué herramienta), identidad (la imagen de esa persona fue modificada sin su intervención), consentimiento (nadie le preguntó), privacidad (una imagen suya circula fuera de su control), lo emocional (vergüenza, exposición, posible angustia) y las reglas de la plataforma (WhatsApp tiene sus propias normas sobre este tipo de contenido). No es, en cambio, principalmente un problema de habilidad técnica: nadie necesita "aprender a usar mejor" la herramienta. Tampoco es, todavía, necesariamente un caso de ciberdelito — eso se define después, no ahora.',
        duda: '(Acá me pregunto: ¿cuántas de estas dimensiones puedo abordar yo, en el momento, y cuáles necesitan otro actor?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        guia: 'Qué cambio sería proporcionado, y de quién es esa responsabilidad.',
        texto:
          'No hace falta la reacción más fuerte posible: hace falta la que corresponde a lo que realmente pasó. Acá, en el momento, la acción proporcionada tuya como docente es frenar la circulación dentro de lo que controlás (pedir que se borre del grupo del curso, no viralizar preguntando "quién la hizo"), y hablar primero con la persona expuesta, no exponerla otra vez frente a todos. La reparación más amplia — si corresponde sanción, si hay que hablar con las familias, si el hecho excede lo escolar — no es una decisión que tomás solo ni en el momento.',
        duda: '(Acá me pregunto: si actúo ya mismo frente a todo el curso, ¿protejo a la persona expuesta o la expongo más?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        guia: 'Qué no me corresponde asumir, qué podría salir mal, qué ajustaría.',
        texto:
          'No me corresponde a mí, como docente, determinar solo si esto configura una falta grave, investigar quién lo hizo como si fuera policía escolar, ni resolver el conflicto emocional de la persona expuesta sin acompañamiento. Eso es responsabilidad de la institución (protocolo de convivencia) y, según el caso, de la familia. Lo que podría salir mal: que mi intervención llegue tarde y la imagen ya haya salido del grupo del curso; que al abordarlo en el momento genere más exposición en vez de menos. Lo que ajustaría la próxima vez: tener ya conversado con el curso, antes de que pase algo así, qué se hace si algo similar circula — para no improvisar la primera reacción en caliente.',
        duda: null as string | null,
      },
    ],
    notaPie: 'Este mismo recorrido de cuatro fases se aplica después a los casos del banco de casos, que se desarrolla por aparte.',
  },

  practica: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, distintas de la que recorrimos juntos. En cada una, vas a decidir dos cosas: qué tipo de situación es (ejercicio de ciudadanía, uso técnico, o riesgo) y qué dimensiones del Poliedro participan. Después de cada una, vas a ver un análisis experto comentado — no solo si acertaste, sino por qué.',
    pensaloTitulo: '1 · ¿Qué tipo de situación es?',
    dimensionesTitulo: '2 · ¿Qué dimensiones participan?',
    revelar: 'Ver análisis experto',
    ocultar: 'Ocultar análisis',
    situaciones: [
      {
        titulo: 'Situación 1',
        enunciado:
          'Un estudiante entrega una tarea escrita casi entera con IA generativa, sin decirlo. No copió de un compañero: le pidió a una herramienta que la escribiera por él.',
        analisis: [
          {
            pregunta: '¿Qué tipo de situación es?',
            respuesta: 'Es un ejercicio de ciudadanía digital, no solo un problema de conducta escolar.',
          },
          {
            pregunta: '¿Qué dimensión domina acá?',
            respuesta:
              'Pedagógica y Creativa. El punto central no es "hizo trampa": es que la IA puede ampliar una capacidad o sustituirla, y acá lo que se necesita distinguir es qué capacidad cognitiva dejó de ejercitarse. Usar IA para organizar ideas es asistencia; usar IA para no pensar es sustitución. Esa distinción — no la herramienta en sí — es lo que hay que conversar con el estudiante.',
          },
        ],
        nota: '(Si marcaste "riesgo" o "uso técnico": revisá de nuevo. No hay ningún daño a terceros ni un problema de manejo de la herramienta — el estudiante la usó con total fluidez. El problema es pedagógico.)',
      },
      {
        titulo: 'Situación 2',
        enunciado:
          'Un chat de familias del curso se desborda: reclamos cruzados, capturas de pantalla que circulan fuera del grupo, alguien pide que se saque a otra persona del chat.',
        analisis: [
          { pregunta: '¿Qué tipo de situación es?', respuesta: 'Riesgo, con una dimensión de participación de fondo.' },
          {
            pregunta: '¿Qué dimensiones están en tensión?',
            respuesta:
              'Acá compiten dos: Seguridad, Privacidad y Protección Digital (las capturas que circulan fuera del grupo, sin consentimiento de quien las escribió) y Participación y Democracia (es, además, el único canal donde esas familias hoy participan de la vida del curso; cerrarlo de forma abrupta también tiene un costo). No hay una sola dimensión dominante: la decisión tiene que sostener las dos, no resolver una ignorando la otra.',
          },
        ],
        nota: '(Si marcaste una sola dimensión: es una respuesta parcial. La tensión entre las dos es justamente lo que hace compleja a esta situación — y es el tipo de caso que más aparece en la vida real de un curso.)',
      },
      {
        titulo: 'Situación 3',
        enunciado:
          'Una familia sin conexión estable ni experiencia con trámites digitales necesita completar una inscripción escolar que solo puede hacerse online.',
        analisis: [
          { pregunta: '¿Qué tipo de situación es?', respuesta: 'Riesgo de exclusión, no falta de voluntad.' },
          {
            pregunta: '¿Qué dimensiones participan?',
            respuesta:
              'Instrumental y Acceso (conectividad y manejo de la herramienta) y Participación y Democracia (sin poder completar ese trámite, esa familia queda fuera de una decisión que la afecta directamente). No hay una salida única acá: podés acompañar personalmente el trámite, gestionar que la escuela ofrezca una vía presencial, o derivarlo — lo que importa no es cuál de las tres elegís, sino que puedas justificar por qué, y que no le atribuyas la dificultad solo a la familia. Un trámite tecnológicamente disponible puede seguir excluyendo cuando presupone destrezas que nadie enseñó.',
          },
        ],
        nota: '(No hay una única respuesta correcta en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      titulo: 'Encontrá el error',
      intro: 'Este es el análisis que hizo un colega sobre un caso del banco de casos. Tiene un error conceptual. ¿Dónde está?',
      cita: 'Un estudiante recibió contenido recomendado automáticamente que reforzaba una idea falsa. La dimensión comprometida es la de datos y algoritmos. La solución es que ese estudiante aprenda a verificar mejor lo que lee antes de creerlo.',
      analisisTitulo: 'El error',
      analisis:
        'Confunde una fuerza transversal con una dimensión. Datos y algoritmos no es una dimensión del Poliedro — es una fuerza que atraviesa varias dimensiones a la vez, en este caso la Cognitivo-Intelectual e Informacional. Y hay un segundo error, más importante: la solución recae por completo en el autocuidado individual del estudiante ("que aprenda a verificar mejor"), cuando la protección también depende del diseño del sistema que le recomendó ese contenido. Responsabilizar solo a quien recibe la información, sin nombrar la arquitectura que la puso ahí, es exactamente el tipo de error que este módulo busca que dejes de cometer.',
    },
  },

  quiz: {
    titulo: 'Poné a prueba lo aprendido',
    subtitulo: 'Evaluación formativa',
    intro:
      'Cuatro preguntas, una por cada objetivo del módulo. Buscan confirmar si el concepto quedó comprendido — no si completaste una tarea.',
    correcto: 'Correcto',
    incorrecto: 'No exactamente',
    preguntas: [
      {
        objetivo: 'Definir ciudadanía digital',
        enunciado: '¿Cuál de estas afirmaciones define mejor la ciudadanía digital?',
        correcta: 'c',
        opciones: [
          {
            id: 'a',
            texto: 'Saber usar con soltura las principales apps y plataformas.',
            feedback:
              'Eso es solo la dimensión Instrumental y Acceso — una de diez. Saber manejar herramientas no garantiza poder incidir en las decisiones colectivas que te afectan, que es lo que distingue a un ciudadano de un usuario.',
          },
          {
            id: 'b',
            texto: 'Cuidar las contraseñas y no compartir datos personales.',
            feedback:
              'Eso es seguridad informática, una parte de una sola dimensión (Seguridad, Privacidad y Protección Digital). La ciudadanía digital incluye también participación, aprendizaje, identidad, bienestar y economía — no se agota en protegerse.',
          },
          {
            id: 'c',
            texto:
              'Ejercer derechos, participación y capacidades ciudadanas en un territorio donde lo físico, lo digital y lo algorítmico forman una sola continuidad.',
            feedback:
              'Es la definición completa: ciudadanía (derechos, participación, capacidades) ejercida en un territorio híbrido.',
          },
          {
            id: 'd',
            texto: 'Comportarse con respeto y buenos modales en los espacios online.',
            feedback:
              'Eso es netiqueta, una capa mínima de la dimensión Socio-Comunicacional. La ciudadanía relacional pide además empatía, consentimiento y capacidad de reparar — no alcanza con "portarse bien".',
          },
        ],
      },
      {
        objetivo: 'Distinguir usuario de ciudadano',
        enunciado:
          'Un grupo de estudiantes deja cientos de comentarios en la consulta pública de una nueva norma escolar, pero nadie les explica cómo esos comentarios van a influir en la decisión final. Desde la perspectiva de este módulo, ¿qué describe mejor esta situación?',
        correcta: 'b',
        opciones: [
          {
            id: 'a',
            texto: 'Es un ejemplo claro de participación ciudadana digital.',
            feedback:
              'Comentar no es lo mismo que incidir. La calidad democrática de una participación depende de que exista un camino visible entre lo que la gente dice y lo que efectivamente se decide — si ese camino no existe o no se explica, hay interacción, pero no participación real.',
          },
          {
            id: 'b',
            texto:
              'Es interacción, no necesariamente incidencia: la cantidad de comentarios no demuestra participación efectiva si no hay un canal claro hacia la decisión.',
            feedback: 'Interacción no es incidencia: sin un canal claro hacia la decisión, la cantidad de comentarios no demuestra participación efectiva.',
          },
          {
            id: 'c',
            texto: 'No cuenta como ciudadanía digital porque ocurrió en una plataforma escolar y no en una red social.',
            feedback:
              'El territorio (una plataforma escolar) no cambia el concepto. La pregunta que hay que hacerse siempre es la misma: ¿esta interacción tiene una vía real de incidir en una decisión colectiva, o se queda solo en el hecho de comentar?',
          },
          {
            id: 'd',
            texto: 'Es un problema exclusivamente técnico de la plataforma usada para la consulta.',
            feedback:
              'El territorio (una plataforma escolar) no cambia el concepto. La pregunta que hay que hacerse siempre es la misma: ¿esta interacción tiene una vía real de incidir en una decisión colectiva, o se queda solo en el hecho de comentar?',
          },
        ],
      },
      {
        objetivo: 'Identificar dimensiones en una situación concreta',
        enunciado:
          'Un estudiante recibe contenido recomendado automáticamente que refuerza una idea falsa, y termina creyéndola sin cuestionarla. ¿Cuál de estas lecturas es correcta?',
        correcta: 'b',
        opciones: [
          {
            id: 'a',
            texto:
              'La dimensión comprometida es "datos y algoritmos", y basta con que el estudiante aprenda a verificar mejor lo que lee.',
            feedback:
              'Datos y algoritmos no es una dimensión del Poliedro: es una fuerza transversal que atraviesa y modifica cómo se ejercen las dimensiones. Además, poner la solución solo en que el estudiante "verifique mejor" ignora que el sistema de recomendación también tiene responsabilidad en lo que decidió mostrarle.',
          },
          {
            id: 'b',
            texto:
              'La dimensión comprometida es Cognitivo-Intelectual e Informacional, y datos y algoritmos es la fuerza transversal que modifica cómo se ejerce esa dimensión en este caso.',
            feedback:
              'La capacidad en juego es evaluar fuentes y confiabilidad (Cognitivo-Intelectual e Informacional), y los algoritmos son la fuerza transversal que modifica cómo se ejerce.',
          },
          {
            id: 'c',
            texto: 'No hay ninguna dimensión comprometida: es solo un problema del algoritmo de la plataforma.',
            feedback:
              'Que el algoritmo haya tenido un rol no elimina la dimensión humana: la capacidad de evaluar fuentes y grado de confianza sigue siendo del estudiante, aunque las condiciones que la rodean (la fuerza transversal) hayan cambiado.',
          },
          {
            id: 'd',
            texto: 'La dimensión comprometida es Seguridad, Privacidad y Protección Digital.',
            feedback:
              'Esta situación no trata sobre proteger datos o la privacidad del estudiante: trata sobre su capacidad para evaluar la calidad y confiabilidad de lo que le llega. Eso es Cognitivo-Intelectual e Informacional.',
          },
        ],
      },
      {
        objetivo: 'Explicar por qué acceso y uso técnico no alcanzan',
        enunciado:
          'Una familia tiene conexión a internet y un teléfono, pero no logra completar un trámite escolar que solo existe en formato digital. ¿Qué explica mejor esta situación, según lo que viste en este módulo?',
        correcta: 'c',
        opciones: [
          {
            id: 'a',
            texto: 'Es un problema de voluntad: si quisieran, podrían aprender a hacerlo.',
            feedback:
              'Atribuir la dificultad solo a la persona es el error más común frente a estas situaciones. Un trámite tecnológicamente disponible puede seguir excluyendo cuando presupone destrezas que nadie enseñó — ahí la responsabilidad también es del diseño del sistema, no solo de quien lo usa.',
          },
          {
            id: 'b',
            texto: 'No es un problema real de ciudadanía digital, porque tienen acceso técnico.',
            feedback:
              'Tener acceso técnico (conexión, dispositivo) es la condición inicial, no la meta. Las brechas más importantes aparecen después de conectarse: en la comprensión, en el uso efectivo y en la posibilidad real de incidir.',
          },
          {
            id: 'c',
            texto:
              'La conexión y el dispositivo son solo la condición inicial; ejercer ciudadanía exige además comprender el sistema, apropiarse de sus recursos y tener una vía real de completarlo — algo que un trámite mal diseñado puede seguir negando aunque haya acceso técnico.',
            feedback:
              'Exacto: el acceso es la condición inicial; hace falta además comprender, apropiarse y poder incidir de verdad.',
          },
          {
            id: 'd',
            texto: 'Es exclusivamente responsabilidad de la familia resolverlo por su cuenta.',
            feedback:
              'Atribuir la dificultad solo a la persona es el error más común frente a estas situaciones. Un trámite tecnológicamente disponible puede seguir excluyendo cuando presupone destrezas que nadie enseñó — ahí la responsabilidad también es del diseño del sistema, no solo de quien lo usa.',
          },
        ],
      },
    ],
    rubricaTitulo: 'Rúbrica de desempeño',
    rubricaIntro:
      'Se aplica sobre el análisis que hiciste en "Practicá vos". Es una herramienta de feedback para que veas dónde estás parado, no una escala para clasificarte.',
    rubricaColNivel: 'Nivel',
    rubricaColMuestra: 'Qué muestra el docente',
    rubrica: [
      { nivel: '1. Inicial', muestra: 'Reconoce que hay un problema, pero lo describe como técnico o de conducta individual.' },
      { nivel: '2. En desarrollo', muestra: 'Identifica una o dos dimensiones, sin relacionarlas entre sí ni considerar el entorno.' },
      {
        nivel: '3. Logrado',
        muestra: 'Identifica al menos tres dimensiones, reconoce las condiciones del entorno y propone un cambio proporcionado.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce tensiones entre dimensiones, distingue una fuerza transversal de un riesgo, y justifica su decisión.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de este módulo queda cubierto dos veces: por una de las preguntas de arriba, que confirma si comprendiste el concepto, y por un criterio de esta rúbrica, que confirma si podés aplicarlo a un caso real.',
  },

  aula: {
    titulo: 'Llevalo a tu aula',
    cambiaTitulo: 'Lo que cambia a partir de ahora',
    cambia: [
      'Ya tenés el mapa completo: las diez dimensiones, la lente de tres preguntas, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, no es cuánto sabés — es cómo mirás lo que ya venías viendo todos los días.',
      'Cuando en tu aula aparezca algo que antes te generaba una reacción automática (un chat de familias descontrolado, un uso raro de IA, un conflicto por algo que circuló), vas a poder hacer una pausa y preguntarte: ¿qué dimensión está comprometida acá? ¿Qué condiciones del entorno están interviniendo? ¿Qué cambio es proporcionado — ni de más, ni de menos? Esa pausa, sola, ya cambia la calidad de la intervención.',
    ],
    accionSemana:
      'Una acción concreta para esta semana: la próxima vez que surja un conflicto digital en tu aula, en vez de resolverlo vos solo, invitá al estudiante involucrado a pensarlo con vos, en voz alta, con las mismas preguntas que usamos en el modelado. No se trata de transferirle la responsabilidad: se trata de que empiece a ver el mismo mapa que vos acabás de ver.',
    miAulaTitulo: 'Actividad — Mi aula en el Poliedro',
    miAulaIntro:
      'Esta es una herramienta de reflexión personal, no una evaluación ni una escala de clasificación. No hay puntaje total ni "aula ideal" contra la cual compararte.',
    miAulaInstruccion:
      'Repasá las diez dimensiones del Poliedro. Para cada una, marcá si en tu aula o tu contexto la ves activa (aparece seguido, de forma visible), latente (existe, pero casi no se habla de ella) o ausente (no identificás ejemplos todavía) — y anotá un ejemplo concreto y reciente para las que marques como activa o latente.',
    miAulaColDimension: 'Dimensión',
    miAulaColEstado: 'Estado',
    miAulaColEjemplo: 'Ejemplo',
    miAulaEstadoPlaceholder: 'Elegí…',
    miAulaEjemploPlaceholder: 'Un ejemplo concreto y reciente',
    miAulaNota: 'No hace falta completar las diez ahora mismo. Volvé a esta tabla cuando algo de la semana te haga acordar a una de ellas.',
    guiaTitulo: 'Guía de conversación para el aula',
    guiaIntro:
      'Para abrir este tema con tus estudiantes, sin dar un sermón ni transmitir sospecha permanente — la ciudadanía digital no se enseña generando miedo, se enseña generando criterio:',
    guia: [
      '¿Qué es, para vos, ser un buen ciudadano digital? (La misma pregunta con la que empezó este módulo — es interesante ver qué responden ellos.)',
      '¿Alguna vez viviste o viste una situación digital donde no sabías bien qué hacer? ¿Qué hiciste?',
      'Cuando algo así pasa, ¿a quién le contás primero? ¿Por qué a esa persona?',
      '¿Qué cosas sentís que podés decidir vos solo en internet, y qué cosas sentís que necesitás consultar?',
      'Si vieras que le está pasando algo así a un compañero, ¿qué harías?',
      '¿Qué cambiarías de las reglas que hoy tenemos, como grupo, para usar la tecnología juntos?',
    ],
    desafioTitulo: 'Desafío del aula — el cierre de este módulo',
    desafioIntro:
      'Este es el ejercicio final. No se corrige ni se califica: es tu producción personal, y podés compartirla con colegas si querés.',
    paso1: {
      titulo: 'Paso 1 · Elegí una situación',
      texto:
        'Elegí una situación real o reciente de tu aula o tu escuela — puede ser algo que ya pasó, o algo que está latente y todavía no explotó.',
      placeholder: 'Describí la situación…',
    },
    paso2: {
      titulo: 'Paso 2 · Analizala en cuatro fases',
      texto:
        'Analizala con las cuatro fases que usamos en el modelado: comprender qué pasó y quiénes participan; descomponer qué dimensiones se activan; decidir qué cambio sería proporcionado y de quién es esa responsabilidad; revisar qué no te corresponde asumir a vos solo.',
      campos: [
        { campo: 'faseComprender', label: 'Comprender', placeholder: 'Qué pasó, quiénes participan, qué está en juego' },
        { campo: 'faseDescomponer', label: 'Descomponer', placeholder: 'Qué dimensiones se activan, y cuáles no' },
        { campo: 'faseDecidir', label: 'Decidir', placeholder: 'Qué cambio sería proporcionado, y de quién es esa responsabilidad' },
        { campo: 'faseRevisar', label: 'Revisar', placeholder: 'Qué no me corresponde asumir, qué podría salir mal, qué ajustaría' },
      ] as const,
    },
    paso3: {
      titulo: 'Paso 3 · Volvé al chat de familias',
      texto:
        'Volvé a la situación del chat de familias que te planteamos al principio del módulo. Releé tu respuesta original. Ahora, con todo lo que viste, ¿qué cambiarías? Anotá en dos o tres líneas qué es distinto en tu forma de pensarla.',
      respuestaOriginal: 'Tu respuesta original',
      sinRespuesta: 'Todavía no escribiste una respuesta. Podés hacerlo en la sección "Por qué importa".',
      placeholder: 'Qué es distinto ahora…',
    },
    paso4: {
      titulo: 'Paso 4 · Tu acción de esta semana',
      texto: 'Definí una sola acción concreta que vas a hacer esta semana, a partir de todo esto.',
      placeholder: 'Una acción concreta',
    },
    desafioCierre:
      'Guardá esta producción. Es la evidencia de que este mapa ya es tuyo — y el punto de partida de todos los módulos que vienen.',
  },

  cierre: {
    titulo: 'Recursos y cierre',
    cambioTitulo: 'Antes de cerrar: ¿qué cambió?',
    cambioInstruccion: 'Volvé al Autodiagnóstico del principio del módulo. Releé lo que escribiste.',
    tuFamiliaridad: 'Tu familiaridad al empezar',
    tuDefinicion: 'Tu definición al empezar',
    sinRespuesta: 'Sin respuesta todavía',
    pregunta1: 'Con lo que sabés ahora, ¿cómo definirías ciudadanía digital? Compará esa respuesta con la que diste al empezar.',
    pregunta2: 'De las diez dimensiones que viste, ¿cuál no habías considerado antes de este módulo?',
    placeholder: 'Tu respuesta…',
    cambioNota: 'No hay respuesta correcta. Esto es solo para que vos mismo veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Ciudadanía digital en una página',
      definicion:
        'Ciudadanía digital es ejercer ciudadanía — derechos, participación, capacidades — en un territorio donde lo físico, lo digital y lo algorítmico forman una sola continuidad. No es saber usar la tecnología, ni seguridad informática, ni buenos modales en línea: es todo eso y más, integrado.',
      poliedroEtiqueta: 'El Poliedro — 10 dimensiones',
      lenteEtiqueta: 'La lente, en cuatro fases, para cualquier situación',
      lente: [
        { fase: 'Comprender', texto: 'qué pasó, quiénes participan, qué está en juego.' },
        { fase: 'Descomponer', texto: 'qué dimensiones se activan, y cuáles no.' },
        { fase: 'Decidir', texto: 'qué cambio sería proporcionado, y de quién es esa responsabilidad.' },
        { fase: 'Revisar', texto: 'qué no me corresponde asumir, qué podría salir mal, qué ajustaría.' },
      ],
      lema: 'Comprender para decidir. Decidir para actuar. Actuar para convivir y participar. Participar para transformar.',
    },
    mapaTitulo: 'Mapa de competencias',
    mapaColDimension: 'Dimensión',
    mapaColCapacidad: 'Capacidad que desarrolla',
    mapaColEnlace: 'Enlace',
    mapaEnlaceTexto: 'Ver temática',
    normativoTitulo: 'Marco normativo (Argentina)',
    normativo:
      'Este territorio híbrido está regulado, entre otras normas, por la Ley de Protección de Datos Personales y la Ley de Grooming.',
    leerTitulo: 'Para seguir leyendo',
    leer: 'Este módulo se apoya en marcos como el de la UNESCO, el DigComp del Centro Común de Investigación de la Unión Europea, y el Consejo de Europa sobre competencias para una cultura democrática.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'No se trata de adaptarte pasivamente a cada tecnología nueva que aparezca. Se trata de fortalecerte — a vos, a tu aula, a tu institución — para participar en la construcción del mundo tecnológico que quieren habitar.',
    cierreFrase: 'Comprender para decidir. Decidir para actuar. Actuar para convivir y participar. Participar para transformar.',
    cierreFinal:
      'Este fue el primer módulo. El mapa ya es tuyo — ahora podés seguir profundizando en cada dimensión, una temática a la vez.',
  },
};

export type Contenido = typeof DOCENTES;

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[CIUDADANIA_DIGITAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
