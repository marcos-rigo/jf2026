// Contenido de /tematicas/participacion-y-democracia. Mismo patrón que lib/pedagogica-creativa-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/participacion-democracia/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// Dimensión 9 (Capítulo 23 del manual).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/participacion-democracia/ficha-aula';

export const PARTICIPACION_DEMOCRACIA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'interaccion-e-incidencia', number: '05', label: 'Interacción e incidencia', shortLabel: 'Incidencia' },
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
    fichaAula1: FichaAulaProps;
    fichaAula2: FichaAulaProps;
  };
  interaccionEIncidencia: {
    titulo: string;
    recordar: { subtitulo: string; intro: string; elementos: string[]; cierre?: string };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
      parrafoFicha: string;
    };
    fichaAula3: FichaAulaProps;
    fichaAula4: FichaAulaProps;
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
    pasos: string[];
    cierrePasos: string;
    parrafo3: string;
    respuestaOriginalEtiqueta: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    campoEtiqueta: string;
    fichaAula5: FichaAulaProps;
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
    titulo: 'Dimensión Participación y Democracia',
    subtitulo: 'De conectarse a incidir',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que miles de comentarios, firmas o "me gusta" no demuestran, por sí solos, una participación efectiva: hace falta que alguien explique cómo esa voz entra en la decisión.',
      'Reconocer las condiciones que hacen posible una participación democrática de calidad: el acceso a información, la deliberación, la colaboración y la rendición de cuentas.',
      'Saber qué hacer cuando una decisión importante la toma un sistema automatizado y no se puede conocer ni revisar.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar si una forma de participación digital permite incidir de verdad en una decisión colectiva, con información, deliberación y rendición de cuentas, y decidir cómo intervenir.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión participación y democracia, distinguiendo al usuario competente del ciudadano que puede intervenir en asuntos colectivos.',
      'Distinguir, en una situación concreta, la interacción de la incidencia.',
      'Identificar qué condición democrática falta en una situación: la información, la deliberación o la rendición de cuentas.',
      'Decidir cómo intervenir, incluyendo cuándo corresponde pedir conocer y revisar una decisión tomada por un sistema automatizado.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Participar es que te lean, que te aplaudan o que algo cambie?',
    parrafos: [
      'Hace tiempo que venís pensando en algo que podría mejorar en tu escuela: cómo se organizan los recreos, por ejemplo, o cómo se avisa a las familias de los cambios de horario. Un día te sentás y lo escribís bien: qué problema ves, qué proponés y cómo se podría hacer. Lo subís a la plataforma institucional, donde cualquiera puede leerlo y reaccionar.',
      'A las pocas horas ya tiene varios "me gusta" de colegas, y alguno comenta "muy buena idea". Esperás unos días. Pasa una semana. Nadie de la dirección lo menciona en una reunión, nadie te responde y no sabés si alguien con capacidad de decidir llegó siquiera a leerlo. La propuesta sigue ahí, con sus "me gusta", y todo sigue igual.',
      'Hiciste lo que se supone que hay que hacer: expresaste tu opinión por un canal habilitado. Y sin embargo, nada cambió. Esta temática trabaja justamente esa diferencia entre interactuar y lograr que una voz llegue a una decisión.',
    ],
    problema:
      'Pensá en esa propuesta, o en una parecida. ¿Qué sentiste cuando viste los "me gusta" y el silencio? ¿Qué te habría hecho sentir que de verdad participaste: que te contestaran, que se discutiera o que algo se modificara? Y si no hay a quién preguntarle qué pasó con tu propuesta, ¿de quién es esa responsabilidad?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La dimensión de Participación y Democracia recuerda por qué usamos la palabra ciudadanía. Un usuario competente puede manejar herramientas y comportarse con responsabilidad: sabe publicar, buscar, hacer un trámite en línea y respetar a los demás. Un ciudadano necesita además la capacidad de intervenir en asuntos colectivos y de relacionarse con las instituciones que tienen poder sobre su vida.',
      'Para pensar esa diferencia, el manual se apoya en las ideas de gobierno abierto y democracia participativa, con autores como Dahl, Oszlak y Noveck, que trabajan sobre la democracia, la apertura del gobierno y la colaboración entre la ciudadanía y las instituciones. Lo que esas ideas permiten distinguir es la **interacción** de la **incidencia**: miles de comentarios, firmas o "me gusta" no demuestran una participación efectiva si nadie explica cómo esas voces entran en el proceso de decisión.',
      'La calidad democrática de un proceso depende de cuatro condiciones. El **acceso a información**: saber qué se decide y con qué datos. Las **posibilidades de deliberación**: poder discutir razones con otros. La **colaboración**: poder aportar y construir en conjunto. Y la **rendición de cuentas**: que quien decide explique qué hizo con lo que se le dijo. Si falta alguna de las cuatro, la participación puede ser abundante y, aun así, no cambiar nada.',
      'Por eso la ciudadanía digital incluye deliberar, organizarse, colaborar, controlar al poder y contribuir a decisiones colectivas. Controlar al poder no significa hostilidad: significa poder preguntar, pedir explicaciones y exigir que las decisiones importantes puedan conocerse y revisarse. Conectarse es solo la condición inicial. Lo que convierte esa conexión en ciudadanía es la posibilidad de incidir.',
      'Pensá en una decisión de tu escuela o de tu comunidad que te afecta. ¿Tenés información sobre cómo se toma, un lugar donde discutirla y alguien que rinda cuentas de lo que se hizo con lo que se dijo?',
    ],
    fichaAula1: {
      titulo: 'Democracia también es digital: valores que construyen comunidad',
      objetivo:
        'Reflexionar sobre los valores que sustentan una ciudadanía digital democrática y promover actitudes que fortalezcan el respeto, la participación y la diversidad en los entornos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La ciudadanía digital no es solo una cuestión de habilidades tecnológicas: es también una cuestión de **valores democráticos**. Así como en la vida en comunidad aprendemos a respetar las reglas, escuchar otras voces y participar activamente, en los entornos digitales debemos actuar con los mismos principios.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Una **ciudadanía digital democrática** implica comprometerse con ciertos valores esenciales:',
        },
        {
          tipo: 'lista',
          items: [
            '**Respeto por la diversidad**: aceptar distintas opiniones, culturas, géneros y formas de ser.',
            '**Solidaridad**: estar atentos a quienes son excluidos, hostigados o silenciados.',
            '**Empatía**: comprender cómo se sienten los demás ante lo que compartimos o decimos.',
            '**Participación activa**: involucrarnos en causas colectivas, debates y decisiones.',
            '**Responsabilidad**: hacernos cargo del impacto que generamos con nuestras publicaciones y acciones.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Estos valores no se enseñan solo con palabras: se **aprenden en la práctica**, a través de experiencias que promuevan el diálogo, el trabajo colaborativo, el respeto por las diferencias y la conciencia ética.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Educar en ciudadanía digital democrática es educar para la paz, la justicia y la convivencia. Internet puede ser un espacio de construcción colectiva, donde cada gesto cuenta. **¿Qué tipo de comunidad queremos construir online?**',
        },
      ],
      preguntaDetonadora:
        '*¿Creés que se puede ser democrático en internet? ¿Qué lo hace posible o imposible?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Palabras que construyen comunidad" (10 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En el pizarrón escribí palabras como: respeto, burla, inclusión, ignorar, escuchar, agredir, cuidar.',
            },
            { tipo: 'parrafo', texto: 'Preguntá:' },
            {
              tipo: 'lista',
              items: [
                '¿Cuáles de estas palabras ayudan a convivir mejor en internet?',
                '¿Cuáles destruyen la convivencia?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Armá entre todos un "muro de valores democráticos" con carteles en el aula.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi código de ciudadanía digital democrática" (40 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En pequeños grupos, los estudiantes discuten:',
                '¿Qué valores son claves para que internet sea un lugar más justo?',
                '¿Qué ejemplos concretos conocen donde se hayan vivido esos valores?',
                'Luego redactan un "Código de Ciudadanía Digital Democrática", incluyendo:',
                '5 valores centrales',
                'Una regla concreta para cada valor',
                'Una propuesta de acción para aplicar en su escuela o comunidad',
                'Cada grupo presenta su código en formato afiche, video breve o podcast de 1 minuto.',
              ],
            },
          ],
        },
      ],
      frase:
        '*"La democracia no termina en las urnas: también se ejerce con cada clic que respeta, incluye y transforma."*',
      glosario: [
        'Ciudadanía democrática',
        'Participación digital',
        'Respeto por la diversidad',
        'Empatía digital',
        'Valores',
      ],
      referencias: [
        'Documento Orientador de Ciudadanía Digital – Argentina 2023',
        'Guía "Ciudadanía digital y democracia" – OEI / Faro Digital',
        'Actividad: "Red de palabras democráticas" con Padlet o Jamboard',
        'Video: "¿Qué valores sostienen nuestra vida en internet?" – educación cívica digital, YouTube Educativo',
      ],
    },
    fichaAula2: {
      titulo: 'Participar también es digital: hacer oír tu voz en el mundo conectado',
      objetivo:
        'Comprender qué es la participación ciudadana digital, explorar sus formas actuales y desarrollar capacidades para involucrarse activamente en causas y decisiones públicas desde los entornos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La participación ciudadana ya no se limita al voto o a la presencia en una marcha: hoy también se ejerce a través de **plataformas, redes, peticiones digitales, campañas, contenidos colaborativos o activismo en línea**.',
        },
        { tipo: 'parrafo', texto: 'En el mundo digital, las y los jóvenes pueden:' },
        {
          tipo: 'lista',
          items: [
            'Difundir ideas, reclamos o propuestas.',
            'Sumar su voz a campañas por el ambiente, la igualdad, los derechos o la inclusión.',
            'Crear contenido con impacto social (videos, podcasts, publicaciones).',
            'Participar en debates públicos o espacios de toma de decisión en línea.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta forma de participación —**más directa, veloz y horizontal**— tiene el poder de llegar muy lejos, pero también plantea riesgos: desinformación, discursos de odio, manipulación emocional, efecto burbuja.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Por eso es clave acompañar a niñas, niños y adolescentes para que participen de forma crítica, respetuosa y transformadora. Una ciudadanía digital democrática se sostiene con voces que **no solo se expresan, sino que también escuchan, proponen y colaboran**.',
        },
      ],
      preguntaDetonadora:
        '*¿Podemos cambiar el mundo desde internet? ¿Qué hace que una publicación tenga impacto real?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Campañas que me inspiran" (10-15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Mostrá ejemplos de campañas digitales reales impulsadas por jóvenes (ambientales, contra el bullying, por la equidad).',
            },
            { tipo: 'parrafo', texto: 'Preguntá:' },
            {
              tipo: 'lista',
              items: ['¿Por qué te llaman la atención?', '¿Te gustaría participar en una campaña así? ¿Por qué?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi causa, mi campaña digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada grupo elige una causa que les importe (ej: acoso escolar, medioambiente, inclusión, salud mental, derechos digitales).',
                'Diseñan una mini campaña ciudadana digital que debe incluir:',
                'Nombre y lema',
                'Objetivo claro',
                'Mensaje clave (en una frase)',
                'Formato creativo (afiche, video, publicación, canción, reel, historia, podcast)',
                'Comparten sus campañas en un "Festival de Participación Digital" en el aula o redes escolares.',
              ],
            },
            { tipo: 'parrafo', texto: '→ Opcional: proponer a la institución difundir las mejores propuestas.' },
          ],
        },
      ],
      frase: '*"No es solo publicar: es participar. Y cada voz cuenta si se usa para construir comunidad."*',
      glosario: [
        'Participación digital',
        'Ciudadanía activa',
        'Campaña social',
        'Activismo juvenil',
        'Impacto colectivo',
      ],
      referencias: [
        'Change.org – Peticiones digitales',
        'Plataforma "Ciudadanía y redes" – Chicos.net',
        'Herramientas: Canva, TikTok, Anchor, Genially',
        'Video: "Juventudes que transforman desde internet" – YouTube Educativo',
        'Guía: "Participación digital de adolescentes" – Faro Digital',
      ],
    },
  },
  interaccionEIncidencia: {
    titulo: 'Interacción e incidencia',
    recordar: {
      subtitulo: 'Recordar',
      intro:
        'La calidad democrática de un proceso de participación depende de cuatro condiciones. Sirven como una lista para diagnosticar qué tiene y qué le falta a cualquier espacio donde se pide tu opinión:',
      elementos: [
        '**Acceso a información:** poder saber qué se está decidiendo, con qué datos y a quién le corresponde decidir. Sin información, opinar es adivinar.',
        '**Posibilidades de deliberación:** poder discutir razones con otras personas, escuchar posiciones distintas y cambiar de idea. Sin deliberación, la participación se reduce a sumar opiniones aisladas.',
        '**Colaboración:** poder aportar y construir en conjunto, y no solo aprobar o rechazar lo que otro propuso.',
        '**Rendición de cuentas:** que quien decide explique qué hizo con lo que se le dijo y por qué. Sin esto, no hay forma de saber si la voz fue escuchada.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué interacción no es incidencia: interactuar es reaccionar, comentar, firmar o compartir. Incidir es que lo que se dijo entre en el proceso de decisión y pueda cambiar algo. Puede haber muchísima interacción sin ninguna incidencia, como una propuesta con cientos de "me gusta" que nadie trata. Y puede haber poca interacción y mucha incidencia, como una reunión pequeña, bien dirigida, donde se decide algo con lo que se escuchó. Por eso contar comentarios, firmas o reacciones no mide la participación efectiva.',
        'Por qué la participación necesita un camino visible hasta la decisión: para que una voz tenga posibilidades de incidir, tiene que haber un destinatario, un canal, un momento en que se la trata y una respuesta. Si nadie sabe por dónde entra lo que se dice ni cómo se va a tratar, la participación se vuelve un gesto sin consecuencias. Y las personas aprenden, con razón, que participar no sirve. Un camino visible no garantiza que la decisión sea la que cada uno quería, pero sí que se sepa qué pasó con lo que dijo.',
        'Qué pasa cuando la complejidad técnica se vuelve opacidad institucional: cada vez más decisiones, como la asignación de becas, vacantes, turnos o beneficios, las toma o las apoya un sistema automatizado. Esa complejidad técnica puede convertirse en opacidad: nadie sabe cómo se decidió ni a quién reclamar. Una regla sencilla orienta la respuesta: cuanto más importa una decisión para los derechos y los recursos de las personas, mayor debe ser la posibilidad de conocer que un sistema intervino, de comprender suficientemente sus reglas y de solicitar su revisión. No hace falta entender el código. Hace falta poder preguntar por qué, con qué criterios y cómo se revisa, y que haya una persona responsable que conteste.',
        'Por qué participar también es controlar al poder: participar no consiste solo en opinar o proponer. Incluye pedir información, hacer seguimiento y exigir explicaciones sobre qué se hizo con las decisiones y los recursos. Esa rendición de cuentas es parte de la democracia, y se apoya en que la información importante pueda conocerse. Controlar al poder no es hostilidad: es una forma de cuidar que lo colectivo funcione.',
      ],
      recuadro: {
        titulo: 'Lo que la dimensión de participación NO es',
        parrafos: [
          'No es opinar mucho: la cantidad de comentarios, firmas o "me gusta" no mide la incidencia.',
          'No es votar o protestar de vez en cuando: también es informarse, deliberar, colaborar y hacer seguimiento.',
          'No es desconfiar de toda institución ni resignarse a que "todo ya está decidido": se trata de pedir que los caminos sean visibles y que haya respuestas.',
          'No es entender el código de un sistema: frente a una decisión automatizada, lo que corresponde es poder saber que intervino, conocer sus reglas básicas y solicitar su revisión.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a cualquier espacio de participación, tres preguntas:',
      preguntas: [
        '**¿Quién decide?** Qué persona, órgano o sistema toma la decisión final, y con qué autoridad.',
        '**¿Cómo llega mi voz a la decisión?** Por qué canal, en qué momento y de qué forma entra lo que digo en el proceso.',
        '**¿Cómo me enteraré de lo que se hizo con ella?** Si habrá una respuesta, un plazo y una explicación de qué se decidió y por qué.',
      ],
      parrafoMovimientos: 'Y tres movimientos, según lo que haga falta:',
      movimientos: [
        '**Informarse:** averiguar cómo se toma la decisión, con qué datos y quién la toma, antes de opinar o reclamar.',
        '**Deliberar y organizarse:** discutir razones con otras personas, buscar apoyo y unir voces, en lugar de actuar en soledad.',
        '**Exigir respuesta:** pedir una respuesta con un plazo, hacer seguimiento y, si interviene un sistema automatizado, pedir conocer sus criterios y solicitar su revisión.',
      ],
      parrafoFicha:
        'Dos fichas profundizan estos puntos: una sobre quiénes tienen voz y quiénes quedan afuera de la conversación pública, y otra sobre qué pasa cuando las decisiones las toman algoritmos.',
    },
    fichaAula3: {
      titulo: 'De usuarios a ciudadanos: la brecha de la participación digital',
      objetivo:
        'Comprender qué es la tercera brecha digital y reflexionar sobre las desigualdades en la expresión, la representación y la participación activa en la vida digital.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Más allá del acceso (primera brecha) y del uso competente (segunda brecha), hoy existe una **tercera brecha digital**, relacionada con la **capacidad real de expresarse, ser escuchado, producir contenido y participar activamente en la vida digital y democrática**.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta brecha no es solo tecnológica: es **simbólica, cultural y social**. Afecta especialmente a:',
        },
        {
          tipo: 'lista',
          items: [
            'Jóvenes que solo consumen pero no crean.',
            'Personas que no encuentran espacios donde su voz tenga valor.',
            'Comunidades que no tienen representación en los medios o plataformas.',
            'Sujetos que enfrentan barreras por idioma, género, identidad o discapacidad.',
          ],
        },
        { tipo: 'parrafo', texto: 'La tercera brecha nos interroga:' },
        {
          tipo: 'lista',
          items: [
            '¿Quiénes cuentan historias en internet?',
            '¿Quiénes diseñan las plataformas?',
            '¿Quiénes son escuchados, y quiénes son silenciados?',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Superar esta brecha implica **fomentar la producción de contenido propio**, la participación en debates públicos, el activismo digital, la expresión creativa, y sobre todo, el reconocimiento de que **la ciudadanía digital se ejerce también desde la palabra, la imagen, la música, la opinión y la acción colectiva**.',
        },
      ],
      preguntaDetonadora:
        '*¿Cuántas veces compartís ideas propias en internet? ¿Sentís que tu voz tiene lugar? ¿Dónde sí y dónde no?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Quiénes cuentan lo que pasa?" (10-15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'Mirá las tendencias de redes sociales, noticias virales o portadas digitales del día.',
            },
            { tipo: 'parrafo', texto: 'Preguntas para reflexionar:' },
            {
              tipo: 'lista',
              items: [
                '¿Qué temas aparecen más? ¿Quiénes los protagonizan?',
                '¿Qué temas o voces no están presentes?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ ¿Qué nos dice eso sobre quién tiene "micrófono" y quién no?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi voz en red" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada estudiante elige un tema que le importe o que sienta que no se visibiliza en los medios o redes.',
                'Elabora una pieza de contenido con el formato que prefiera:',
                'Podcast corto',
                'Reel o video educativo',
                'Post con mensaje visual (Canva, cartel, historieta)',
                'Carta abierta en formato digital',
                'Reflexiona por escrito:',
                '¿Por qué elegí este tema?',
                '¿Qué quiero que se escuche?',
                '¿Dónde me gustaría compartirlo?',
                'Opcional: compartir en una galería digital de "Voces juveniles en red".',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Si no contamos nuestras propias historias, otros las contarán por nosotros. Participar también es narrar."*',
      glosario: [
        'Tercera brecha digital',
        'Participación ciudadana',
        'Producción de contenidos',
        'Voz digital',
        'Representación simbólica',
      ],
      referencias: [
        'Guía "Narrar lo propio en el entorno digital" – UNICEF / Chicos.net',
        'Plataforma: Soundtrap para crear podcasts',
        'Canva para diseño de publicaciones',
        'Video: "¿Qué pasa cuando hablamos en internet?" – YouTube Educativo',
        'Ejemplos: Campañas juveniles por derechos en redes sociales (Instagram, TikTok)',
      ],
    },
    fichaAula4: {
      titulo: '¿Quién decide en la sociedad de los algoritmos? Más democracia, menos automatismo',
      objetivo:
        'Analizar cómo los algoritmos influyen en decisiones públicas y privadas, y reflexionar sobre la necesidad de transparencia, participación y justicia en el diseño de sistemas automatizados que afectan nuestras vidas.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En la era de la inteligencia artificial, **muchas decisiones que antes tomaban personas ahora las toman algoritmos**: qué noticias vemos, qué contenidos se priorizan, qué información se bloquea, a quién se le da un crédito, qué escuela asignan a un estudiante, e incluso, a quién detener o vigilar.',
        },
        { tipo: 'parrafo', texto: 'Este fenómeno plantea un desafío crucial para la democracia:' },
        {
          tipo: 'lista',
          items: [
            '¿Son los algoritmos neutrales?',
            '¿Quién los diseña? ¿Con qué valores?',
            '¿Podemos auditar sus decisiones?',
            '¿Participamos en su desarrollo?',
          ],
        },
        { tipo: 'parrafo', texto: 'La **democracia algorítmica** propone que los sistemas automáticos:' },
        {
          tipo: 'lista',
          items: [
            'Sean **transparentes** (entendibles para la ciudadanía).',
            'Sean **explicables** (que se sepa por qué decidieron lo que decidieron).',
            'Estén **supervisados por humanos responsables.**',
            'Incorporen **diversidad y valores democráticos** en su diseño.',
            'Sean **participativos**, permitiendo que la sociedad civil intervenga en cómo se usan.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'El riesgo es que las decisiones de interés público queden en manos de códigos opacos sin control democrático. Por eso, necesitamos una **ciudadanía informada, crítica y activa**, capaz de exigir **algoritmos justos, auditables y al servicio del bien común.**',
        },
      ],
      preguntaDetonadora:
        '*¿Qué pasaría si las decisiones más importantes de tu vida las tomara una computadora? ¿Le exigirías que te explique por qué?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "La decisión automática" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Proponé tres situaciones:' },
            {
              tipo: 'lista',
              items: [
                'Te niegan una beca educativa.',
                'Un video tuyo es censurado en redes.',
                'Una app te dice que sos "de alto riesgo" para un seguro.',
              ],
            },
            { tipo: 'parrafo', texto: 'En cada caso, el responsable es un algoritmo.' },
            { tipo: 'parrafo', texto: '→ En grupos:' },
            {
              tipo: 'lista',
              items: ['¿Qué sentimientos genera?', '¿A quién reclamarías?', '¿Qué derechos están en juego?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñamos un algoritmo democrático" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, diseñan un algoritmo ficticio que tome una decisión pública (ej: asignar becas, distribuir turnos, moderar contenidos).',
                'Tienen que definir:',
                'Qué datos utiliza',
                'Cómo decide',
                'Cómo se explica',
                'Qué valores incorpora',
                'Qué mecanismos de participación y reclamo tiene',
                'Presentan su propuesta como si fuera un proyecto para implementar en su comunidad.',
              ],
            },
          ],
        },
      ],
      frase: '*"La democracia no se programa sola. Hay que defenderla también en el código."*',
      glosario: [
        'Democracia algorítmica',
        'Explicabilidad',
        'Sesgo algorítmico',
        'Gobernanza digital',
        'Transparencia tecnológica',
      ],
      referencias: [
        'Mozilla Foundation – "YouTube Regrets"',
        'UNESCO – Ética de los algoritmos en América Latina',
        'Video: "¿Puede un algoritmo ser democrático?" – Canal Encuentro',
        'Fundación Vía Libre',
        'Artículo: La democracia y el algoritmo – Rafael Capurro',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una docente de primaria lleva tiempo pensando que los cambios de horario de la escuela se avisan mal: muchas familias se enteran el mismo día, y los docentes, a último momento. Una noche escribe una propuesta clara de una página: qué problema ve, un esquema simple para avisar con una semana de anticipación y quién podría ocuparse de comunicarlo. La sube a la plataforma institucional. A las pocas horas tiene siete "me gusta" de colegas y un comentario: "Muy buena idea". Pasa una semana, después otra. Nadie de la dirección la menciona en una reunión y nadie le contesta. La propuesta sigue ahí, con sus "me gusta", y todo sigue igual. Una tarde, en la sala de profesores, piensa: "Bueno, lo intenté. Nadie le da bola a esto".',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la docente interactuó, pero no incidió. Usó un canal habilitado, la propuesta recibió reacciones, y ninguna de esas reacciones llegó a quien decide. Lo que está en juego no es solo esta propuesta: es lo que ella está aprendiendo de la experiencia. Si concluye que participar no sirve, se va a retirar de las siguientes oportunidades, y la escuela pierde una voz que tenía algo para aportar.',
        ],
        nota: '(Acá me pregunto: ¿"me gusta" significa que alguien con capacidad de decidir la leyó? ¿Cómo sé qué pasó con mi propuesta?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué condición democrática falta. Información: la docente no sabe quién decide sobre la comunicación de los horarios ni cómo se toman esas decisiones. Deliberación: la propuesta quedó como una publicación individual, sin ningún espacio donde se discuta con otros y se escuche a quienes tendrían algo que objetar. Y rendición de cuentas: nadie le explicó si la propuesta se trató, qué se resolvió ni por qué.',
          'Los "me gusta" son una señal de apoyo, pero no son un proceso. Y la plataforma, aunque permite publicar, no tiene ningún camino visible que lleve lo publicado hasta una decisión. Por eso el problema no es que la docente haya hecho algo mal: es que el canal que tenía disponible estaba hecho para expresar, no para incidir.',
        ],
        nota: '(Acá me pregunto: ¿mi propuesta tuvo un destinatario? ¿Alguien sabía que esperaba una respuesta?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no hace falta abandonar ni reclamar con enojo. Lo proporcionado es convertir la publicación en una propuesta formal, con cuatro elementos. Un destinatario: averiguar quién decide sobre la comunicación de los horarios, que probablemente sea la dirección o el equipo de conducción, y dirigirse a esa persona. Un pedido concreto: no "qué les parece mi idea", sino "pido que se pruebe este esquema de aviso durante un mes". Un plazo: pedir una respuesta en una fecha razonable, por ejemplo dos semanas. Y una forma de seguimiento: proponer cómo se va a enterar de lo que se decida, y acordar que la respuesta quede por escrito.',
          'Además, conviene deliberar y organizarse: hablar con los colegas que dieron "me gusta" y sumar sus firmas o su apoyo a la propuesta formal. Siete voces que piden lo mismo, con un destinatario y un plazo, tienen mucho más peso que siete reacciones dispersas.',
        ],
        nota: '(Acá me pregunto: si pido algo concreto, con un plazo y una forma de seguimiento, ¿cuesta más ignorarme que si solo publico una idea? ¿Y con quiénes puedo armarla?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca a mí hacerme cargo de que la escuela tenga canales de participación que funcionen. Mi parte es presentar la propuesta bien armada y hacer seguimiento. La parte de la institución es ofrecer caminos por los que la voz llegue a la decisión, y responder a lo que se propone, aunque la respuesta sea que no.',
          'Qué podría salir mal: que la propuesta formal tampoco reciba respuesta; que se la rechace sin explicar por qué; o que yo me canse a mitad de camino. Lo que ajustaría para la próxima vez: proponer a la dirección que la plataforma tenga un espacio donde cada propuesta se trate en un plazo conocido y reciba una respuesta visible. Así, la participación deja de depender de la insistencia de cada persona.',
        ],
        nota: '(Acá me pregunto: ¿mi escuela tiene hoy un camino claro para que una propuesta llegue a la dirección? Si no lo tiene, ¿quién debería empezar a construirlo, y cómo puedo plantearlo?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué condición democrática falta: información, deliberación o rendición de cuentas. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un grupo de familias lanza una petición digital para pedir que la escuela no cambie el horario de entrada. En pocos días reúne más de dos mil firmas y se comparte por todos los grupos de mensajería. Las familias entregan el enlace a la dirección y a la supervisión. Pasan tres semanas y nadie contesta: no hay una respuesta, ni un "lo estamos evaluando", ni una fecha en que se vaya a tratar el tema. El nuevo horario se aplica igual.',
        analisis:
          '**¿Qué falta?** Rendición de cuentas. La petición cumplió con lo que dependía de las familias: tuvo apoyo, tuvo difusión y llegó a quienes decidían. Lo que falta es que quien decide explique qué hizo con eso. Miles de firmas son una señal de interés, pero no son participación efectiva si nadie responde ni informa cómo se tuvieron en cuenta. No se trata de que la respuesta tenga que ser que sí: la autoridad podría haber mantenido el cambio, pero explicando por qué. Lo proporcionado es pedir una respuesta por escrito, con un plazo, y proponer que el tema se trate en una reunión donde las familias puedan exponer sus razones.',
        nota: '(Si elegiste "Información" o "Deliberación": también están en juego, porque las familias quizás no sabían cómo se tomó la decisión. Pero lo que define este caso es que, habiendo llegado la voz a quien decide, nadie rindió cuentas de qué se hizo con ella.)',
      },
      {
        clave: 's2',
        enunciado:
          'El grupo de WhatsApp de un curso de egresados tiene trescientos integrantes entre estudiantes y familias. Hay que decidir el destino del viaje de egresados. Se arma una discusión en la que escriben cinco personas, muy rápido y con mensajes largos. Los demás casi no participan, y algunos dicen que no se animan a opinar. A la noche, alguien escribe: "Bueno, parece que todos estamos de acuerdo en el viaje a la costa. Lo anotamos". Nadie contradice.',
        analisis:
          '**¿Qué falta?** Deliberación. Hay mucha gente conectada y un canal abierto, pero la decisión se tomó con la voz de cinco personas. La falta de objeciones no significa acuerdo: en un grupo de trescientos, quien escribe más rápido y más seguido ocupa todo el espacio, y quienes dudan o piensan distinto suelen callarse. Para deliberar de verdad hace falta que se escuchen razones distintas y que quienes no hablan puedan hacerlo de otra manera. Lo proporcionado es proponer una consulta más ordenada, como una encuesta con las opciones y sus costos, o una reunión corta donde se presenten las alternativas, y dar un plazo para que más personas opinen antes de decidir.',
        nota: '(Si elegiste "Información" o "Rendición de cuentas": ninguna es el eje. La información podría estar incompleta, pero lo central es que no hubo una discusión donde se escucharan voces distintas antes de decidir.)',
      },
      {
        clave: 's3',
        enunciado:
          'Un sistema informático de la administración educativa asigna las vacantes de primer grado de las escuelas públicas de una zona. Las familias cargan sus datos y, un mes después, reciben un resultado: a algunas les toca la escuela que pidieron y a otras una lejana. No se publicó cuáles son los criterios de asignación, no se explica por qué a cada familia le tocó lo que le tocó y no hay ningún canal para pedir que se revise el resultado. Cuando una familia pregunta en la escuela, le responden: "lo decide el sistema".',
        analisis:
          '**¿Qué falta?** No hay una única respuesta correcta en este caso, y es a propósito: faltan varias condiciones a la vez y la lectura depende de cuál se priorice. Falta información: nadie sabe cuáles son los criterios ni cómo se ponderan. Falta rendición de cuentas: no hay una explicación de por qué a cada familia le tocó lo que le tocó, ni una persona responsable que responda. Y sin ninguna de las dos, es difícil deliberar si el sistema es justo. Una lectura puede priorizar la información, porque sin conocer las reglas no se puede discutir ni reclamar con fundamento. Otra puede priorizar la rendición de cuentas y la posibilidad de revisión, porque se trata de un derecho a una vacante escolar y quien decide debería poder explicar y corregir. Cuanto más importa una decisión para los derechos y recursos de las personas, mayor debe ser la capacidad de conocer que un sistema intervino, de comprender sus reglas y de solicitar su revisión. Lo que se evalúa es que puedas justificar qué priorizar y por qué, y que no resuelvas el caso ni aceptando que "lo decide el sistema" ni suponiendo, sin evidencia, que hubo una injusticia.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: una propuesta sobre el uso del celular en la escuela que tuvo muchísimos comentarios en la plataforma institucional, pero cuyo resultado final la dirección nunca explicó. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Hubo cientos de comentarios y miles de visualizaciones. Es evidente que la comunidad participó: no hay nada más que discutir.',
      citaB:
        'Participar no sirve para nada. Las decisiones ya estaban tomadas de antemano. Es una pérdida de tiempo opinar o proponer algo.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** confunde interacción con incidencia. La cantidad de comentarios y visualizaciones muestra que hubo actividad, pero no muestra que lo dicho haya entrado en el proceso de decisión. Si nadie explicó cómo se tuvieron en cuenta esas voces, no se puede afirmar que la participación haya sido efectiva.',
      errorB:
        '**Análisis B:** cae en la resignación. Que un proceso haya fallado no significa que participar no sirva: significa que faltó algo, como información, deliberación o rendición de cuentas, y eso se puede pedir y mejorar. Dar por sentado que todo está decidido deja sin voz a quien podría incidir, y libra a la institución de la obligación de explicar.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: dejaron de preguntar qué pasó con lo que se dijo. Uno creyó que la actividad alcanzaba, y el otro creyó que no había nada que hacer.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y distinguir usuario de ciudadano',
        enunciado:
          '¿Cuál de estas afirmaciones describe mejor la diferencia entre un usuario competente y un ciudadano, según esta dimensión?',
        opciones: [
          {
            id: 'a',
            texto:
              'El usuario sabe manejar herramientas y comportarse con responsabilidad; el ciudadano, además, puede intervenir en asuntos colectivos y relacionarse con las instituciones que tienen poder sobre su vida.',
          },
          { id: 'b', texto: 'El usuario usa la tecnología para el ocio y el ciudadano para el trabajo.' },
          { id: 'c', texto: 'El ciudadano es quien vota, y el usuario es quien no vota.' },
          { id: 'd', texto: 'No hay diferencia: quien usa bien la tecnología ya es un ciudadano digital.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'La diferencia no está en para qué se usa la tecnología, sino en si la persona puede intervenir en lo que se decide colectivamente y pedir cuentas a quienes tienen poder de decisión.',
          c: 'Votar es una forma de participar, pero no la única ni la que define esta dimensión. La ciudadanía incluye informarse, deliberar, organizarse, colaborar y controlar al poder, también en entornos digitales.',
          d: 'Usar bien la tecnología es necesario, pero no alcanza. Alguien puede manejar muy bien las herramientas y no tener ninguna posibilidad real de incidir en las decisiones que lo afectan.',
        },
      },
      {
        objetivo: 'distinguir interacción de incidencia',
        enunciado:
          'Una propuesta de un grupo de estudiantes recibe más de quinientas reacciones en la plataforma de la escuela. Nadie de la dirección la trata ni responde. ¿Cuál es la lectura más adecuada?',
        opciones: [
          { id: 'a', texto: 'Hubo una participación muy efectiva, porque tuvo mucho apoyo.' },
          {
            id: 'b',
            texto:
              'Hubo mucha interacción, pero no necesariamente incidencia: falta que se sepa si lo dicho entró en el proceso de decisión.',
          },
          { id: 'c', texto: 'No hubo ninguna participación, porque la propuesta no se aprobó.' },
          { id: 'd', texto: 'La cantidad de reacciones demuestra que la dirección está de acuerdo.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El apoyo muestra interés, pero no prueba que la propuesta haya llegado a quien decide ni que se haya tratado. Esa es justamente la diferencia entre interactuar y lograr que algo cambie.',
          c: 'Que una propuesta no se apruebe no significa que no haya habido participación. Lo que importa es si la voz entró en el proceso y se explicó qué se hizo con ella, aunque la respuesta sea que no.',
          d: 'Las reacciones de la comunidad no dicen nada sobre la posición de quien decide. La dirección podría estar de acuerdo, en desacuerdo o no haberla leído.',
        },
      },
      {
        objetivo: 'identificar qué condición democrática falta',
        enunciado:
          'En un grupo de mensajería con trescientos integrantes se decide el destino de un viaje. Escriben cinco personas, y alguien concluye: "Parece que todos estamos de acuerdo". Nadie contradice, pero muchos dicen que no se animan a opinar. ¿Qué condición democrática falta con más claridad?',
        opciones: [
          { id: 'a', texto: 'Rendición de cuentas.' },
          { id: 'b', texto: 'Acceso a información.' },
          {
            id: 'c',
            texto: 'Deliberación: no se escucharon razones distintas y la falta de objeciones no equivale a acuerdo.',
          },
          { id: 'd', texto: 'Ninguna: si nadie se opuso, la decisión es legítima.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'No hay aún una decisión cuya explicación se deba rendir. El problema aparece antes: la decisión se está tomando sin que se escuchen voces distintas.',
          b: 'La información podría ser incompleta, pero no es lo central del caso. Lo que se observa es que opinan muy pocos y que quienes dudan no se animan a hablar.',
          d: 'La falta de objeciones no es acuerdo. En grupos grandes, quien escribe más rápido ocupa todo el espacio y quien duda suele callarse. Sin deliberación, la decisión no refleja al conjunto.',
        },
      },
      {
        objetivo: 'decidir cómo intervenir, incluyendo cuándo pedir conocer y revisar una decisión automatizada',
        enunciado:
          'Una familia recibe el resultado de una asignación de vacante hecha por un sistema automático. No se publicaron los criterios y no hay forma de pedir una revisión. En la escuela le dicen: "lo decide el sistema". ¿Cuál es la actitud más adecuada?',
        opciones: [
          { id: 'a', texto: 'Aceptarlo: el sistema es neutral y no se puede discutir.' },
          {
            id: 'b',
            texto:
              'Pedir conocer qué criterios se usaron, cómo se aplicaron en su caso y solicitar la revisión del resultado, ante una persona o área responsable.',
          },
          { id: 'c', texto: 'Armar una campaña de descrédito contra la escuela en las redes.' },
          { id: 'd', texto: 'Intentar entender el código del sistema por su cuenta antes de decir nada.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Que decida un sistema no lo vuelve neutral ni indiscutible. Cuanto más importa una decisión para los derechos, mayor debe ser la posibilidad de conocerla y de pedir su revisión.',
          c: 'Una campaña de descrédito no abre un camino para conocer los criterios ni revisar el caso. Lo proporcionado es pedir información y revisión por los canales que correspondan, y, si no existen, plantear que deberían existir.',
          d: 'No hace falta entender el código. Lo que se pide es poder saber que el sistema intervino, conocer sus reglas básicas y que una persona responsable pueda explicar y revisar la decisión.',
        },
      },
    ],
    correcto: 'Correcto.',
    rubricaTitulo: 'Rúbrica de desempeño',
    rubricaIntro: 'Se aplica sobre el análisis que hiciste en Practicá vos.',
    rubricaColNivel: 'Nivel',
    rubricaColMuestra: 'Qué muestra el docente',
    rubrica: [
      {
        nivel: '1. Inicial',
        muestra:
          'Confunde interacción con incidencia ("hay miles de firmas, entonces hay participación") o se resigna ("participar no sirve").',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que falta algo en el proceso, pero no identifica cuál de las condiciones (información, deliberación o rendición de cuentas) ni qué hacer para pedirla.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue interacción de incidencia, identifica la condición democrática que falta y propone una intervención proporcionada, con un destinatario, un pedido concreto y un seguimiento.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una decisión automatizada afecta derechos y pide conocer sus criterios y solicitar su revisión, propone mejoras de los canales de la institución y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: la diferencia entre interacción e incidencia, las cuatro condiciones de la calidad democrática, las tres preguntas y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es que podés mirar los espacios de decisión de tu escuela con una pregunta nueva: no solo si hay lugar para opinar, sino por dónde llega lo que se dice hasta quienes deciden.',
    accionSemana:
      '**Una acción concreta para esta semana:** elegí un espacio de decisión de tu escuela —una reunión de docentes, el consejo de convivencia, el centro de estudiantes, la comunicación con las familias— y averiguá cómo llega allí la voz de docentes, familias y estudiantes. Respondé las tres preguntas: quién decide, cómo llega una voz a la decisión y cómo se entera quien habló de lo que se hizo con ella. Si descubrís que no hay un camino claro, ya encontraste algo para proponer. Y con tu curso, armá una propuesta real que tenga estos cuatro elementos:',
    pasos: [
      '**Destinatario:** quién decide sobre el tema.',
      '**Pedido concreto:** qué se pide exactamente, no "qué les parece", sino "pedimos que…".',
      '**Plazo:** para cuándo se espera una respuesta.',
      '**Forma de seguimiento:** cómo se van a enterar de lo que se decida y cómo queda la respuesta por escrito.',
    ],
    cierrePasos:
      'Elegí con ellos un tema real y alcanzable: algo del recreo, de la comunicación con las familias o del uso de los espacios. Ayudalos a escribirla con claridad, a juntar apoyo y a presentarla. Lo importante no es que la propuesta se apruebe, sino que aprendan a hacerla llegar y a pedir una respuesta. Y antes de presentarla, acordá con la dirección que va a haber una respuesta, aunque sea que no, para que la experiencia no termine en silencio.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** la propuesta que subiste a la plataforma y que recibió "me gusta" pero ningún tratamiento. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué condición faltaba, a quién tendrías que haberte dirigido y qué pedirías hoy? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula5: {
      titulo: 'De la queja al cambio: juventud y activismo en la era de las redes',
      objetivo:
        'Valorar el rol del activismo juvenil digital como forma de participación ciudadana, reconociendo su potencial transformador, sus estrategias y los desafíos que enfrenta en la sociedad conectada.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En un mundo hiperconectado, las juventudes no solo consumen contenidos: **crean, denuncian, visibilizan y movilizan causas sociales** a través de redes digitales.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El **activismo juvenil digital** es una forma de participación política, cultural o ambiental que utiliza plataformas tecnológicas para:',
        },
        {
          tipo: 'lista',
          items: [
            'Generar conciencia sobre injusticias o derechos vulnerados.',
            'Convocar a la acción colectiva.',
            'Difundir discursos alternativos y voces subrepresentadas.',
            'Desafiar narrativas dominantes de los medios tradicionales.',
          ],
        },
        { tipo: 'parrafo', texto: 'Ejemplos reales:' },
        {
          tipo: 'lista',
          items: [
            'Jóvenes feministas organizando el #NiUnaMenos.',
            'Activistas ambientales con campañas como #FridaysForFuture.',
            'Movimientos de pueblos originarios, disidencias o migrantes visibilizando sus luchas en TikTok o Instagram.',
          ],
        },
        { tipo: 'parrafo', texto: 'Pero también existen **riesgos**:' },
        {
          tipo: 'lista',
          items: [
            'Cancelaciones, trolls, vigilancia o manipulación emocional.',
            'Fatiga o burnout digital.',
            'Superficialidad de la participación (activismo de clic).',
            'Falta de formación política o ética en el uso de herramientas digitales.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Una ciudadanía digital crítica implica **apoyar, formar y acompañar el protagonismo juvenil digital con herramientas para comunicar con impacto, sostener las causas y cuidarse colectivamente**.',
        },
      ],
      preguntaDetonadora:
        '*¿Compartir una historia es participar? ¿Qué hace que una causa digital se vuelva una acción real?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Campañas que inspiran" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'Mostrá ejemplos reales de activismo juvenil en redes (locales o globales).',
            },
            { tipo: 'parrafo', texto: 'En grupos, analizan:' },
            {
              tipo: 'lista',
              items: [
                '¿Qué formato usaron?',
                '¿Cómo lograron impacto?',
                '¿Qué emociones o ideas generaron?',
              ],
            },
            { tipo: 'parrafo', texto: '→ Discuten: ¿puede cualquier joven ser activista?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi causa, mi voz digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada estudiante o grupo elige una causa que les movilice (ej: ambiente, salud mental, discriminación, educación, inclusión, cultura local).',
                'Diseñan una **acción digital activista** que incluya:',
                'Nombre de la campaña',
                'Objetivo claro',
                'Público destinatario',
                'Mensaje o narrativa visual',
                'Plataforma y estrategia de difusión (video corto, carrusel, reel, post, hashtag, podcast)',
                'Presentan su propuesta al grupo como si lanzaran una campaña real.',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Pueden armar una "Galería de Jóvenes Activistas Digitales" para exponer sus piezas.',
            },
          ],
        },
      ],
      frase: '*"Si tenés una causa, una historia y un celular, tenés una forma de cambiar el mundo."*',
      glosario: [
        'Activismo digital',
        'Ciberacción colectiva',
        'Juventudes conectadas',
        'Narrativa social',
        'Participación ciudadana en redes',
      ],
      referencias: [
        'Chicos.net – Jóvenes Protagonistas Digitales',
        'Video: "Ciberactivismo: juventudes que incomodan" – Canal Encuentro',
        'Plataforma Fridays For Future',
        'UNESCO – Participación juvenil y redes sociales',
        'Podcast: Juventud en Marcha – Voces del activismo digital (Spotify)',
      ],
    },
  },
  recursosYCierre: {
    titulo: 'Recursos y cierre',
    cambioTitulo: 'Antes de cerrar: ¿qué cambió?',
    cambioInstruccion: 'Volvé a tu respuesta de Por qué importa. Releela.',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    pregunta:
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué que una propuesta tenga muchos "me gusta" no significa que haya participado de una decisión?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Participación y Democracia, en una tarjeta',
      parrafos: [
        'Un usuario competente maneja herramientas y se comporta con responsabilidad. Un ciudadano además puede intervenir en asuntos colectivos. Miles de comentarios, firmas o "me gusta" no son participación efectiva si nadie explica cómo esas voces entran en la decisión.',
        '**Las cuatro condiciones de la calidad democrática:** acceso a información · deliberación · colaboración · rendición de cuentas.',
        '**Las tres preguntas, frente a cualquier espacio de participación:** ¿Quién decide? · ¿Cómo llega mi voz a la decisión? · ¿Cómo me enteraré de lo que se hizo con ella?',
        '**Los tres movimientos:** informarse · deliberar y organizarse · exigir respuesta.',
        '**Y una cosa más:** cuanto más importa una decisión para los derechos y los recursos de las personas, más derecho hay a conocer si intervino un sistema automatizado, a comprender sus reglas y a pedir su revisión.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la novena de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Pedagógica y Creativa',
    seguiEnlace2Href: '/tematicas/pedagogica-y-creativa',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Conectarse no es participar. Participar es poder incidir: saber quién decide, hacer llegar tu voz hasta la decisión y enterarte de qué se hizo con ella. Eso no depende solo de cada persona: también depende de que las instituciones ofrezcan caminos visibles y rindan cuentas. Preguntarlo, organizarse con otros y pedir respuesta es la forma más concreta de ejercer ciudadanía en un mundo donde casi todo se puede opinar.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[PARTICIPACION_DEMOCRACIA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
