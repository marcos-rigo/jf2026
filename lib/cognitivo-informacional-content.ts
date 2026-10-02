// Contenido de /tematicas/cognitivo-intelectual-e-informacional. Mismo patrón que
// lib/instrumental-acceso-content.ts: escrito solo para 'docentes', cualquier otra
// audiencia cae a ese fallback vía resolveContenido() (misma regla que resolveTexto:
// audiencia activa si tiene contenido, si no el fallback explícito, si no el primero
// definido). Sin fuentes/citas: las referencias van como texto plano (sin SourceCite).
//
// Texto de las secciones 1 a 10 tomado TEXTUAL de
// content-management/2 Dimension Cognitivo-Intelectual e Informacional.docx (Prompts 2 y 3).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/cognitivo-informacional/ficha-aula';

export const COGNITIVO_INFORMACIONAL_FALLBACK: Audiencia = 'docentes';

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
  { id: 'criterio-y-verificacion', number: '05', label: 'Criterio y verificación', shortLabel: 'Criterio' },
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
  };
  criterioYVerificacion: {
    titulo: string;
    recordar: {
      subtitulo: string;
      parrafoInicial: string;
      parrafoPantalla: string;
      lista: string[];
      parrafoDistinguir: string;
    };
    comprender: {
      subtitulo: string;
      parrafos: string[];
      recuadro: { titulo: string; parrafos: string[] };
    };
    aplicar: {
      subtitulo: string;
      parrafoLateral: string;
      movimientos: string[];
      parrafoNivel: string;
      tabla: { encabezados: [string, string, string]; filas: { celdas: [string, string, string] }[] };
      parrafoFinal: string;
    };
    fichaAula2: FichaAulaProps;
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
    fichaAula3: FichaAulaProps;
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
    // No están en el docx fuente de esta temática (content-management/2 Dimension
    // Cognitivo-Intelectual e Informacional.docx): se agregaron en el Prompt 5 de
    // la dimensión 3 para enlazar hacia adelante. Ver comentario en
    // components/cognitivo-informacional/recursos-y-cierre-section.tsx.
    siguienteDimensionTexto: string;
    siguienteDimensionHref: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Introducción',
    subtitulo: 'De encontrar información a juzgarla',
    bajadaAntes:
      'Hoy encontrar información es lo fácil. Lo difícil es decidir cuánto creerle. Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que pensar críticamente no es sospechar de todo: es hacerse preguntas sobre la evidencia, la fuente y el grado de confianza que merece una afirmación.',
      'Usar la lectura lateral para investigar quién está detrás de una fuente y qué dicen otros sobre ella, antes de creerle por su apariencia.',
      'Ajustar cuánto verificás según las consecuencias de usar la información, incluso cuando la respuesta honesta es "todavía no sé lo suficiente".',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar cuánta confianza merece una afirmación (una fuente, una IA, un contenido viral) y decidir cuánto verificar según lo que está en juego.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión cognitivo-intelectual e informacional, distinguiendo el pensamiento crítico de la desconfianza sistemática.',
      'Reconocer, en una misma pantalla, los distintos tipos de contenido que conviven: un estudio, una publicidad, una opinión y un contenido generado por inteligencia artificial.',
      'Aplicar la lectura lateral a una fuente concreta: investigar quién está detrás y qué dicen otros actores antes de aceptar su apariencia de legitimidad.',
      'Decidir el nivel de verificación proporcional a las consecuencias de usar una información, incluyendo reconocer cuándo todavía no sabemos lo suficiente.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cuánto nos convence algo solo porque está bien escrito?',
    parrafos: [
      'Un estudiante entrega un trabajo con un dato preciso, redactado con seguridad y respaldado por el nombre de un estudio. Al buscarlo, el estudio no existe: el dato lo inventó una inteligencia artificial, que lo escribió con la misma fluidez con la que escribe lo verdadero. Al estudiante no le pareció dudoso, y a primera vista a muchos de nosotros tampoco nos lo habría parecido.',
      'Esto pasa porque cambió el problema. Antes costaba encontrar información; hoy abunda, y lo difícil es juzgar su calidad, su origen y su contexto. Que algo esté bien escrito no dice nada sobre si es cierto: la fluidez y la confiabilidad son cosas distintas. Esta temática trabaja justamente esa diferencia.',
    ],
    problema:
      'Pensá en ese estudiante. ¿Cómo te das cuenta de que un dato así no existe, antes de darlo por bueno? ¿Y qué le dirías: que se equivocó, que la herramienta tiene límites, o que nadie le enseñó a verificar?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La abundancia de información cambió el problema. Antes costaba encontrar datos; hoy sobran, y lo difícil es evaluar su calidad, su contexto y su relevancia. Un estudio, una publicidad, una opinión y un contenido generado por inteligencia artificial pueden ocupar la misma pantalla, con el mismo formato y la misma apariencia de seriedad.',
      'Pensar críticamente no significa sospechar de todo. Significa hacer preguntas sobre la evidencia, las fuentes, los argumentos, la incertidumbre y el grado de confianza que una afirmación merece. Quien desconfía de todo por sistema se equivoca tanto como quien le cree a todo: en ambos casos dejó de evaluar.',
      'La inteligencia artificial generativa vuelve esto más urgente. Puede escribir con total fluidez algo falso, y esa fluidez no dice nada sobre si es confiable. Por eso el nivel de verificación debe guardar relación con las consecuencias de usar la respuesta, y la competencia incluye algo que cuesta admitir: poder concluir, cuando corresponde, que todavía no sabemos lo suficiente.',
    ],
    fichaAula1: {
      titulo: 'Entre tanta información: pensar, verificar y decidir con autonomía',
      objetivo:
        'Fortalecer la capacidad para buscar, analizar, interpretar y crear información en entornos digitales, desarrollando pensamiento crítico frente a los medios, los algoritmos y las emociones que generan los contenidos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Vivimos en una sociedad de la información donde todo parece estar al alcance de un clic, pero no toda la información es confiable, neutral o transparente. Por eso, ser ciudadano digital implica saber pensar con criterio en medio de una sobrecarga de datos, imágenes y mensajes.',
        },
        { tipo: 'parrafo', texto: 'Esta dimensión incluye:' },
        {
          tipo: 'lista',
          items: [
            'Buscar información de forma efectiva y ética.',
            'Verificar fuentes, autores y fechas.',
            'Distinguir hechos de opiniones, verdades de rumores.',
            'Detectar noticias falsas (fake news), discursos manipuladores y sesgos algorítmicos.',
            'Reflexionar sobre cómo la información afecta emociones, decisiones y vínculos.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'El pensamiento crítico no es desconfiar de todo, sino aprender a hacer preguntas, analizar, contrastar y decidir de forma consciente. También implica crear contenidos informativos con responsabilidad, sabiendo que lo que compartimos puede tener impacto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta dimensión forma parte de lo que se llama alfabetización mediática e informacional, que es clave para que cada estudiante sea un ciudadano libre, informado y participativo en democracia.',
        },
      ],
      preguntaDetonadora:
        '¿Cómo sabés si lo que compartís o leés es cierto? ¿Alguna vez compartiste algo sin pensarlo mucho?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Titulares engañosos" (15 min)',
          texto:
            'Presentá dos titulares sobre un mismo tema: uno real y uno falso o sensacionalista. En grupos, analizan: ¿Cuál parece más creíble y por qué? ¿Qué pistas nos ayudan a verificar? Reflexión: ¿cómo influye el diseño, el lenguaje o la emoción?',
        },
        {
          titulo: 'Actividad principal — "Detectives de la información" (45-60 min)',
          texto:
            'En grupos, los estudiantes reciben diferentes tipos de contenidos (noticia, meme, video, tuit, post). Investigan: ¿Quién lo creó? ¿Es actual? ¿Está editado? ¿Qué fuentes utiliza? ¿Hay otros medios que lo confirmen? Usan herramientas como Google Reverse Image, Chequeado, Snopes o FactCheck. Luego crean una pieza con el título "Lo que descubrimos al mirar más allá" (puede ser un meme reflexivo, un afiche, un podcast breve o una historia tipo reel). Compartición y cierre con preguntas: ¿Qué aprendimos? ¿Qué cambiaríamos en nuestros hábitos?',
        },
      ],
      frase: '"El pensamiento crítico no te aleja del mundo: te ayuda a transformarlo sin dejarte engañar."',
      glosario: ['Pensamiento crítico', 'Alfabetización mediática', 'Fake news', 'Sesgo de confirmación', 'Verificación de datos'],
      referencias: [
        'Chequeado.com – Verificación en tiempo real',
        'Interland – Reino de la Torre de la Verdad (juego educativo)',
        'UNESCO – Guía sobre Alfabetización Mediática',
        'App: NewsGuard (extensión para evaluar confiabilidad de sitios)',
        'Video: "Pensar antes de compartir" – Canal Encuentro / Chicos.net',
      ],
    },
  },
  criterioYVerificacion: {
    titulo: 'Criterio y verificación',
    recordar: {
      subtitulo: 'Recordar',
      parrafoInicial:
        'La dimensión cognitivo-intelectual e informacional se ocupa de algo que cambió con la abundancia: el problema ya no es encontrar información, sino evaluar su calidad, su contexto y su relevancia. Pensar críticamente, en este sentido, es formular preguntas sobre cinco cosas: la evidencia (¿en qué se apoya esto?), las fuentes (¿quién lo dice y desde dónde?), los argumentos (¿lo que concluye se sigue de lo que muestra?), la incertidumbre (¿qué no se sabe todavía?) y el grado de confianza que la afirmación merece.',
      parrafoPantalla: 'En una misma pantalla conviven contenidos de naturaleza muy distinta, y casi siempre se ven parecidos:',
      lista: [
        'Un estudio: busca explicar o medir algo con un método que se puede revisar.',
        'Una publicidad: busca persuadir, y detrás hay un interés comercial.',
        'Una opinión: expresa la postura de alguien, que puede ser valiosa sin ser un hecho.',
        'Un contenido sintético: lo generó una inteligencia artificial y puede imitar cualquiera de los tres anteriores.',
      ],
      parrafoDistinguir: 'Aprender a distinguir qué tipo de contenido tenés enfrente es el primer movimiento del criterio.',
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué la fluidez no es confiabilidad: la inteligencia artificial generativa escribe con la misma seguridad lo verdadero y lo inventado. Que un texto esté bien redactado, tenga un tono experto o incluya nombres de estudios no dice nada sobre si es cierto. Por eso conviene separar la fluidez expresiva de la confiabilidad, y no tomar la primera como señal de la segunda.',
        'Por qué la verificación se gradúa según las consecuencias: verificar todo con la misma intensidad es imposible, y no verificar nada es riesgoso. El esfuerzo tiene que guardar relación con lo que pasa si la información resulta falsa. Un meme que compartís para charlar y un dato que vas a pasarles a las familias, o que sostiene una decisión que afecta a otros, no merecen el mismo control.',
        'Por qué concluir "todavía no sé" es parte de la competencia: a veces, después de verificar, las fuentes se contradicen, no hay evidencia suficiente o el tema todavía está en discusión. Reconocerlo no es un fracaso del pensamiento crítico: es una de sus formas más maduras. Lo contrario, rellenar el vacío con la primera respuesta convincente, es justamente lo que hace la información falsa.',
        'Por qué no todo es responsabilidad individual: una persona puede desarrollar muy buen criterio y seguir condicionada por cómo circula la información. Los algoritmos de recomendación deciden en buena parte qué vemos primero, qué se repite y qué nunca llega, y las reglas con las que lo hacen suelen ser opacas. Los datos y los algoritmos son una fuerza que atraviesa esta dimensión: no reemplazan el criterio de quien lee, pero lo condicionan. Por eso formar criterio importa, y al mismo tiempo no alcanza con exigirle a cada persona que se defienda sola.',
      ],
      recuadro: {
        titulo: 'Lo que el pensamiento crítico NO es',
        parrafos: [
          'No es sospechar de todo: quien desconfía por sistema dejó de evaluar tanto como quien le cree a todo.',
          'No es creerle a algo porque tiene citas, números o un tono experto: la apariencia de seriedad se puede fabricar.',
          'No es verificar todo con la misma intensidad: el esfuerzo se ajusta a las consecuencias.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoLateral:
        'La lectura lateral es la estrategia central de esta dimensión, y la trabajó Sam Wineburg, uno de los autores con los que dialoga el manual. Su idea es simple: para evaluar una fuente no te quedes leyéndola a ella misma, salí de la página. Una fuente siempre se presenta bien; lo que dicen de ella otros actores es lo que te cuenta qué es en realidad. Paso a paso:',
      movimientos: [
        'Frená antes de leer o compartir, y preguntate quién está detrás: una persona, un medio, una organización, una empresa.',
        'Salí de la página. Abrí otras pestañas y buscá qué dicen sobre esa fuente actores que no dependen de ella.',
        'Contrastá la afirmación: ¿otras fuentes independientes la confirman, la matizan o la contradicen?',
        'Volvé y decidí cuánta confianza merece, y cuánta verificación más hace falta según lo que está en juego.',
      ],
      parrafoNivel: 'El nivel de verificación se elige según las consecuencias de usar la información:',
      tabla: {
        encabezados: ['Nivel', 'Cuándo corresponde', 'Qué hacer'],
        filas: [
          {
            celdas: [
              'Verificación rápida',
              'La información casi no tiene consecuencias: algo para charlar, para curiosear',
              'Mirar quién lo dice y si el contenido tiene sentido',
            ],
          },
          {
            celdas: [
              'Lectura lateral',
              'Lo vas a compartir o a usar en clase',
              'Investigar la fuente fuera de su página y contrastar con otras',
            ],
          },
          {
            celdas: [
              'Contraste profundo',
              'Sostiene una decisión que afecta a otros: salud, dinero, evaluaciones, derechos',
              'Contrastar con varias fuentes independientes; si no alcanza, concluir que todavía no sabemos',
            ],
          },
        ],
      },
      parrafoFinal:
        'Y la lente de tres preguntas, aplicada a la información: primero, qué capacidad está en juego, que acá es juzgar la calidad y la procedencia de lo que llega, y no solo encontrarlo. Segundo, qué condiciones sociotécnicas intervienen: un algoritmo que recomienda por popularidad, un formato que imita la seriedad, la presión de compartir rápido. Tercero, qué cambio sería proporcionado y de quién es: de la persona, que verifica con el nivel adecuado; de la institución, que enseña a hacerlo; o de la plataforma, que decide cómo se muestra y se recomienda lo que circula.',
    },
    fichaAula2: {
      titulo: 'Buscar no es saber: cómo encontrar, evaluar y confiar en la información digital',
      objetivo:
        'Fortalecer la capacidad para buscar, seleccionar, analizar y validar información en entornos digitales, desarrollando criterios de confiabilidad, veracidad y pensamiento crítico frente a la sobrecarga informativa y la desinformación.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En internet hay de todo, pero no todo es confiable. En la era digital, la información circula de forma acelerada y sin filtros: noticias falsas, teorías conspirativas, descontextualizaciones, campañas políticas disfrazadas de hechos, inteligencia artificial generando imágenes falsas… y más.',
        },
        { tipo: 'parrafo', texto: 'La competencia informacional es la capacidad para:' },
        {
          tipo: 'lista',
          items: [
            'Formular preguntas claras',
            'Buscar información en fuentes diversas y adecuadas',
            'Comparar y verificar datos',
            'Evaluar intenciones, autoría, lenguaje y formato',
            'Distinguir entre hechos, opiniones, emociones y manipulaciones',
            'Citar y compartir responsablemente',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Esto no se trata solo de estudiar o hacer tareas: se trata de aprender a decidir y actuar en base a información veraz y significativa, lo cual es clave para la vida personal, ciudadana y democrática.',
        },
        { tipo: 'parrafo', texto: 'Hoy, más que nunca, buscar bien es un acto de libertad.' },
      ],
      preguntaDetonadora: '¿Cómo sabés si lo que leés en internet es verdad? ¿Cuántas veces lo comprobás antes de compartir?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Info o farsa" (15 min)',
          texto:
            'Se presentan 4 noticias (dos reales, dos falsas o manipuladas). En grupos, deben detectar cuál es cuál. Luego responden: ¿Qué los hizo dudar? ¿Qué señales buscarían para verificar?',
        },
        {
          titulo: 'Actividad principal — "Ruta crítica de búsqueda y validación" (45-60 min)',
          texto:
            'En equipos, se les asigna una pregunta o tema de interés. Deben buscar información en al menos tres fuentes; evaluar autor, fecha, tipo de página, lenguaje e intenciones; detectar inconsistencias o posibles manipulaciones; elaborar una ficha o infografía con "cómo saber si una fuente es confiable"; y presentar lo aprendido proponiendo buenas prácticas para sus pares. Opcional: crear un "Decálogo de Veracidad Digital Estudiantil".',
        },
      ],
      frase: '"En tiempos de infoxicación, verificar es un acto de rebeldía y responsabilidad."',
      glosario: ['Competencia informacional', 'Veracidad digital', 'Fuente confiable', 'Desinformación', 'Pensamiento crítico'],
      referencias: [
        'Chequeado',
        'UNESCO – Alfabetización mediática e informacional',
        'Google Fact Check Tools – Herramientas de verificación',
        'Video: "Cómo detectar una fake news" – Canal Encuentro',
        'Plataforma Educ.ar – Talleres de veracidad y medios digitales',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un docente está preparando una clase sobre el uso del celular y el rendimiento escolar. Busca datos, y el primer resultado es un sitio con nombre de instituto, logo prolijo, gráficos bien diseñados y una sección "Quiénes somos" con la foto de un equipo. Ahí encuentra una estadística muy llamativa, con un porcentaje altísimo, justo lo que necesitaba para abrir la clase. Está apurado y tiene la tentación de copiarla tal cual a su presentación.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: el docente encontró un dato impactante en un sitio que parece serio, y está a punto de presentarlo ante sus estudiantes con la autoridad que tiene como docente. Lo que está en juego no es solo una diapositiva: lo que diga en clase lo van a tomar como cierto, y es probable que lo repitan en sus casas y entre compañeros.',
        ],
        nota: '(Acá me pregunto: ¿el dato me convenció porque es sólido, o porque confirma lo que yo ya pensaba sobre el celular?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la capacidad de juzgar la calidad y la procedencia de una información, que es distinta de encontrarla. Para evaluarla conviene hacer lectura lateral, es decir, salir de la página. Lo que dice la sección "Quiénes somos" no cuenta, porque lo dice el propio sitio sobre sí mismo. Lo que sí cuenta es lo que dicen otros: si ese instituto aparece citado por medios, universidades o investigadores que no dependan de él, y si el dato menciona de dónde sale (qué estudio, qué muestra, qué año).',
          'También hay que preguntarse qué tipo de contenido es. Puede ser un estudio, pero también una publicidad, si el sitio vende algo relacionado con lo que afirma, o una opinión con números. Y están las condiciones del entorno: el buscador mostró primero este resultado, el diseño prolijo imita la seriedad y la urgencia por preparar la clase empuja a aceptar lo primero que aparece.',
        ],
        nota: '(Acá me pregunto: ¿este sitio vende algo que se beneficie de que yo crea este dato?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: el dato lo va a usar en clase, así que como mínimo corresponde una lectura lateral; si fuera a sostener una conclusión fuerte o a pasárselo a las familias, habría que subir el nivel. Supongamos que, al salir de la página, el docente no encuentra al instituto mencionado en ningún lugar independiente, y que el dato no remite a ningún estudio que pueda rastrearse. Con eso no alcanza para usarlo como hecho.',
          'Lo proporcionado no es abandonar el tema ni desconfiar de todos los sitios: es no presentar el dato como cierto y buscar una fuente que muestre su método. Y hay una opción mejor todavía: llevarle el caso a los estudiantes y que hagan juntos la lectura lateral, en lugar de ocultar el proceso. Si después de buscar no aparece nada confiable, lo honesto es decirlo: "todavía no sabemos cuánto".',
        ],
        nota: '(Acá me pregunto: si no encuentro nada confiable, ¿me animo a decirle a mi clase "no lo sé todavía"?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca verificar todo lo que existe en internet ni garantizar que nunca se cuele un error. El buscador que puso este resultado primero y el sitio que se hizo pasar por un instituto también tienen su parte, y no es mía la de corregirlos. Lo que sí es mío es lo que decido presentar como cierto.',
          'Qué podría salir mal: que la verificación quede a medias, confirmando que el sitio existe pero no que el dato es verdadero; que verifique de más cosas menores hasta agotarme; o que, tras este caso, termine desconfiando de todo en vez de graduar. Lo que ajustaría para la próxima: un hábito corto antes de incorporar un dato a una clase, con tres preguntas (quién está detrás, qué dicen otros, cuánto está en juego), y mostrárselo en voz alta a los estudiantes.',
        ],
        nota: '(Acá me pregunto: ¿cómo sé cuándo ya verifiqué lo suficiente para este uso, y no más de lo necesario?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué nivel de verificación hace falta: verificación rápida, lectura lateral o contraste profundo. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un docente le pide a una inteligencia artificial una lista de lecturas para que sus estudiantes trabajen un tema de historia. La respuesta es impecable: cinco libros, con autor, editorial y año. Piensa imprimir la lista y entregarla al curso.',
        analisis:
          '¿Qué nivel de verificación hace falta? Lectura lateral. La lista la va a usar todo un curso, así que no alcanza con una mirada rápida. Y la fluidez es justamente lo que no hay que tomar como señal: la inteligencia artificial puede escribir referencias completas, con autor, editorial y año, que no existen. Lo que corresponde es comprobar cada título fuera del texto que lo generó, por ejemplo en el catálogo de una biblioteca o en el sitio de la editorial. Preguntarle a la misma inteligencia artificial si los libros son reales no cuenta como verificar: sigue siendo la misma fuente hablando de sí misma.',
        nota: '(Si elegiste "verificación rápida": revisá de nuevo. Que la lista esté bien escrita y se vea completa no dice nada sobre si los libros existen, y esta lista va a llegar a todo un curso.)',
      },
      {
        clave: 's2',
        enunciado:
          'En el chat de familias del curso circula un mensaje reenviado: advierte que un producto de uso común para chicos es peligroso, trae un cartel de apariencia oficial y termina con "compartilo con todos los padres antes de que sea tarde". Una madre te lo reenvía y te pide que lo confirmes.',
        analisis:
          '¿Qué nivel de verificación hace falta? Contraste profundo. Acá hay dos cosas en tensión. Por un lado, el mensaje apura: la urgencia busca que compartas antes de pensar, y eso ya es una señal para detenerse. Por otro, lo que está en juego es la salud de chicos, y las consecuencias de un error van para los dos lados: una falsa alarma genera pánico y puede llevar a dejar un producto necesario, y ignorar una alarma real también tiene costo. Lo proporcionado es verificar rápido, pero en serio: buscar la información en fuentes oficiales de salud o consultar a un profesional, y no en otros reenvíos del mismo mensaje, que repiten la fuente sin confirmarla. Mientras tanto, no reenviarlo.',
        nota: '(Si elegiste "lectura lateral": es un buen comienzo, pero revisá de nuevo. Cuando lo que está en juego es la salud de otras personas y el mensaje te presiona a actuar rápido, buscar qué dicen otros no alcanza: hay que contrastar con fuentes oficiales antes de decidir.)',
      },
      {
        clave: 's3',
        enunciado:
          'La dirección de la escuela te pide un informe sobre si conviene adoptar una aplicación educativa para todo el curso. Buscás y encontrás tres cosas: estudios que dicen que mejora el aprendizaje, publicados por la empresa que la vende; un estudio independiente, con pocos participantes, que no encuentra diferencias; y opiniones enfrentadas de especialistas.',
        analisis:
          '¿Qué nivel de verificación hace falta? Contraste profundo, y con una conclusión posible que conviene tener presente: todavía no sabemos. La decisión afecta a todo el curso y tiene costo, así que corresponde el nivel más alto. Pero después de contrastar, lo que aparece es esto: la evidencia a favor viene de quien tiene interés comercial, la independiente es chica y no muestra mejora, y los especialistas no coinciden. Con eso no se puede afirmar que la aplicación mejora el aprendizaje, ni que no lo mejora. Lo honesto es decir qué se sabe, qué no y quién financió cada cosa, y proponer una prueba acotada antes de adoptarla para todos, en vez de forzar un sí o un no. Reconocer que todavía no sabemos lo suficiente es parte de la competencia, no un fracaso de la búsqueda.',
        nota: '(Acá el nivel pesa menos que la conclusión: lo que se evalúa es que puedas justificar tu lectura y que consideres válido decir que todavía no sabemos.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre casos parecidos. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Recibí un informe con muchas citas, gráficos y nombres de estudios. Está lleno de referencias, así que es confiable. No hace falta buscar más.',
      citaB:
        'Encontré dos informes que se contradicen. Si no se ponen de acuerdo, ninguna fuente sirve: todo es manipulación. No voy a usar nada de internet con mis estudiantes.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        'Análisis A: confunde la apariencia de rigor con rigor. Las citas, los gráficos y los nombres de estudios se pueden fabricar, y una inteligencia artificial puede inventar referencias completas. Quien razona así nunca se preguntó quién está detrás del informe ni qué dicen de él otros actores, que es justamente lo que enseña la lectura lateral. Le creyó a la apariencia.',
      errorB:
        'Análisis B: confunde pensar críticamente con sospechar de todo. Que dos informes se contradigan no vuelve inútiles a todas las fuentes: es el punto de partida para investigar quién dice cada cosa, con qué método y con qué interés, y a veces la conclusión honesta es que todavía no sabemos. Además, renunciar a internet deja a los estudiantes sin criterio justo donde más lo necesitan.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: dejaron de evaluar. Uno porque le creyó a todo lo que parecía serio, el otro porque no le creyó a nada.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión, distinguiendo pensamiento crítico de desconfianza sistemática',
        enunciado: '¿Cuál de estas describe mejor lo que significa pensar críticamente frente a la información?',
        opciones: [
          { id: 'a', texto: 'Desconfiar de todo lo que se lee en internet hasta que se demuestre lo contrario.' },
          { id: 'b', texto: 'Creerle a las fuentes que tienen citas, datos y un tono experto.' },
          { id: 'c', texto: 'Hacerse preguntas sobre la evidencia, la fuente y el grado de confianza que una afirmación merece.' },
          { id: 'd', texto: 'Verificar absolutamente todo con la máxima intensidad antes de usarlo.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Desconfiar por sistema no es pensar críticamente: es dejar de evaluar, igual que creerle a todo. Quien sospecha de todo no distingue una fuente sólida de una dudosa.',
          b: 'Las citas, los datos y el tono experto se pueden fabricar. Que algo parezca serio no dice si lo es; hay que preguntarse en qué se apoya y quién lo dice.',
          d: 'Verificar todo con la misma intensidad no es posible ni necesario: el esfuerzo se ajusta a las consecuencias de usar la información.',
        },
      },
      {
        objetivo: 'reconocer los tipos de contenido que conviven en la misma pantalla',
        enunciado:
          'Un docente encuentra una página con un texto muy prolijo, gráficos y una conclusión contundente sobre un método de estudio. Al final hay un botón para comprar un curso que enseña ese método. ¿Cómo conviene leer ese contenido?',
        opciones: [
          {
            id: 'a',
            texto:
              'Como una publicidad con apariencia de estudio: hay un interés comercial detrás, y hay que contrastar lo que afirma con fuentes que no dependan de quien lo vende.',
          },
          { id: 'b', texto: 'Como un estudio, porque tiene gráficos y datos.' },
          { id: 'c', texto: 'Como una opinión sin valor, porque quien lo escribe quiere vender algo.' },
          { id: 'd', texto: 'Como un contenido generado por inteligencia artificial, porque está muy prolijo.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Los gráficos y los datos son parte del formato, no del método. Un contenido puede imitar la forma de un estudio sin serlo; hay que preguntarse quién lo hizo y cómo llegó a esa conclusión.',
          c: 'Tener un interés comercial no vuelve falso automáticamente a un contenido, pero obliga a mirarlo con más cuidado y a contrastarlo. Descartarlo sin evaluarlo es el error opuesto: desconfiar por sistema.',
          d: 'Que un texto esté prolijo no indica que lo haya escrito una inteligencia artificial, ni lo contrario. Esa pista no sirve para distinguir el tipo de contenido; sí sirve preguntarse qué busca y quién está detrás.',
        },
      },
      {
        objetivo: 'aplicar la lectura lateral a una fuente concreta',
        enunciado:
          'Un docente quiere saber si una organización que publicó un informe es confiable. ¿Cuál de estas acciones corresponde a una lectura lateral?',
        opciones: [
          { id: 'a', texto: 'Leer con atención la sección "Quiénes somos" de la propia organización.' },
          { id: 'b', texto: 'Releer el informe completo buscando errores o contradicciones internas.' },
          { id: 'c', texto: 'Fijarse si el sitio tiene un diseño profesional y está bien escrito.' },
          { id: 'd', texto: 'Salir de la página y buscar qué dicen sobre la organización otros actores que no dependan de ella.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Lo que una organización dice de sí misma es justamente lo que hay que contrastar. La lectura lateral consiste en salir de la página, no en profundizar dentro de ella.',
          b: 'Releer el informe puede detectar fallas internas, pero no responde quién está detrás ni qué dicen otros. Un informe bien armado por dentro puede venir de una fuente poco confiable.',
          c: 'El diseño y la redacción son lo más fácil de imitar. La apariencia de seriedad no es evidencia de que la fuente la tenga.',
        },
      },
      {
        objetivo: 'decidir el nivel de verificación proporcional, incluyendo reconocer cuándo todavía no sabemos',
        enunciado:
          'Un docente tiene que decidir si adopta una herramienta para todo el curso. Contrastó varias fuentes: los estudios a favor los publica la empresa que la vende, el único estudio independiente es muy pequeño y no encuentra diferencias, y los especialistas no coinciden. ¿Cuál es la conclusión más adecuada?',
        opciones: [
          { id: 'a', texto: 'Elegir los estudios a favor, porque son más y están mejor presentados.' },
          {
            id: 'b',
            texto:
              'Reconocer que todavía no hay evidencia suficiente para afirmar que mejora el aprendizaje, decir qué se sabe y qué no, y proponer una prueba acotada antes de adoptarla.',
          },
          { id: 'c', texto: 'Descartar la herramienta, porque ninguna de las fuentes es confiable.' },
          { id: 'd', texto: 'Decidir según la opinión del especialista que le resulte más convincente.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Que haya más estudios a favor no los vuelve más confiables si todos vienen de quien tiene interés comercial. Contar cantidad no reemplaza evaluar quién financió cada uno y cómo se hizo.',
          c: 'Descartar todo porque las fuentes no coinciden es caer en la desconfianza sistemática. Las fuentes no pesan lo mismo: el estudio independiente cuenta, aunque sea pequeño.',
          d: 'Elegir al más convincente es volver a guiarse por la apariencia. Lo que corresponde es evaluar la evidencia detrás de cada opinión y aceptar que, hoy, no alcanza para decidir con certeza.',
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
        muestra: 'Cree o desconfía de todo: acepta una información porque parece seria, o la descarta porque no puede confiar en nada.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que hay que verificar, pero se queda en la apariencia (diseño, citas, tono) o verifica sin distinguir qué tipo de contenido tiene enfrente.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue el tipo de contenido, aplica la lectura lateral para investigar la fuente y propone un nivel de verificación acorde a lo que está en juego.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además gradúa la verificación según las consecuencias, reconoce los condicionamientos del entorno (como los algoritmos de recomendación) y tolera la incertidumbre: sabe concluir que todavía no sabemos lo suficiente y justificar por qué.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: la diferencia entre fluidez y confiabilidad, la lectura lateral y la verificación que se ajusta a lo que está en juego. Lo que cambia, a partir de acá, es lo que hacés antes de pasarle una información a otros. Cada dato que llega a tu clase, a un grupo de familias o a una reunión lleva detrás la autoridad que tenés como docente, y por eso vale la pena frenar un momento antes de darlo por cierto.',
    accionSemana:
      'Una acción concreta para esta semana: antes de compartir o usar una información en clase, dedicale dos minutos a la lectura lateral. Preguntate quién está detrás, buscá qué dicen otros sobre esa fuente y decidí cuánto verificar según lo que está en juego: una mirada rápida si casi no tiene consecuencias, lectura lateral si lo vas a usar con tus estudiantes, contraste profundo si sostiene una decisión que afecta a otros. Y si después de buscar no encontrás nada confiable, decirlo también es una respuesta: "todavía no sé".',
    parrafo3:
      'Volvé al problema de Por qué importa: el estudiante que entregó un dato muy bien redactado, tomado de una inteligencia artificial, que resultó no existir. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué le dirías ahora? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué le dirías ahora?',
    fichaAula3: {
      titulo: 'Buscar, pensar, crear: información en tiempos digitales',
      objetivo:
        'Desarrollar habilidades para buscar, analizar y producir información de forma crítica, ética y significativa en entornos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Vivimos en una época donde la información circula de manera constante, múltiple y a gran velocidad. Buscar en internet no es solo teclear en Google: es elegir en qué confiar, saber filtrar, comparar fuentes y detectar intenciones.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La alfabetización digital implica más que saber leer y escribir: requiere comprender cómo se produce, distribuye y valida la información. Además, hoy no solo consumimos contenidos: también los producimos. Cada post, video, meme, audio o comentario forma parte del ecosistema informativo.',
        },
        { tipo: 'parrafo', texto: 'Por eso, es clave que estudiantes aprendan a:' },
        {
          tipo: 'lista',
          items: [
            'Formular buenas preguntas.',
            'Identificar fuentes confiables.',
            'Detectar noticias falsas, sesgos o estereotipos.',
            'Comunicar ideas propias de forma clara, creativa y responsable.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La escuela debe formar ciudadanos que no repitan lo que encuentran, sino que interpreten, discutan y transformen la información en conocimiento.',
        },
      ],
      preguntaDetonadora: '¿Todo lo que aparece primero en internet es verdad? ¿Cómo sabés si una noticia es confiable?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Detectives digitales" (10-15 min)',
          texto:
            'Mostrá dos noticias o titulares contrastantes sobre el mismo tema (uno real y otro falso). En grupos, analizan: ¿Cuál creen que es verdadera? ¿Por qué? ¿Qué pistas pueden buscar para verificar?',
        },
        {
          titulo: 'Actividad principal — "Del dato al contenido responsable" (45 min)',
          texto:
            'En grupos, eligen un tema de interés (medioambiente, bullying, salud, derechos, deportes). Investigan el tema con preguntas orientadoras: ¿Qué es? ¿Qué datos hay? ¿Qué pasa hoy en mi comunidad? Verifican al menos dos fuentes distintas y anotan quién la publica y por qué podría ser confiable o no. Producen un contenido digital informativo: un póster informativo digital (Canva), un microvideo o reel educativo, o un post para Instagram o TikTok con 3 datos clave. Presentan su creación y explican: ¿Qué aprendieron? ¿Qué mensaje quieren dejar?',
        },
      ],
      frase: '"No toda información es conocimiento. Pero toda buena pregunta es el inicio del saber."',
      glosario: ['Fuente confiable', 'Verificación', 'Fake news', 'Alfabetización mediática', 'Contenido digital responsable'],
      referencias: [
        'Chequeado.com – Herramientas para verificar información',
        'Educ.ar – Recursos sobre alfabetización digital',
        'App: NewsGuard (extensión para evaluar confiabilidad de sitios)',
        'Plataforma: Canva para creación de contenidos',
        'Video: "¿Cómo saber si una noticia es falsa?" – YouTube Educativo',
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
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué un texto bien escrito no es necesariamente un texto confiable?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Cognitivo-Intelectual e Informacional, en una tarjeta',
      parrafos: [
        'Hoy encontrar información es lo fácil. Lo difícil es decidir cuánto creerle. Pensar críticamente no es sospechar de todo: es hacerse preguntas.',
        'Las preguntas del pensamiento crítico: ¿En qué evidencia se apoya? ¿Quién lo dice y desde dónde? ¿Lo que concluye se sigue de lo que muestra? ¿Qué no se sabe todavía? ¿Cuánta confianza merece?',
        'La lectura lateral, en cuatro movimientos: frená y preguntate quién está detrás · salí de la página · contrastá con fuentes que no dependan de ella · volvé y decidí cuánta confianza merece.',
        'La regla de proporcionalidad: el esfuerzo de verificar se ajusta a lo que está en juego. Verificación rápida si casi no hay consecuencias, lectura lateral si lo vas a compartir o usar en clase, contraste profundo si sostiene una decisión que afecta a otros.',
        'Y una cosa más: la fluidez no es confiabilidad. Un texto bien escrito puede ser falso. Y a veces, después de verificar, la respuesta honesta es "todavía no sé".',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la segunda de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Instrumental y Acceso',
    seguiEnlace2Href: '/tematicas/instrumental-y-acceso',
    seguiDespues: '.',
    siguienteDimensionTexto: 'Siguiente dimensión: Socio-Comunicacional e Identidad',
    siguienteDimensionHref: '/tematicas/socio-comunicacional-e-identidad',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Pensar críticamente no es desconfiar de todo ni creerle a todo: es saber cuánta confianza merece cada cosa. Es hacer las preguntas antes de compartir, graduar el esfuerzo según lo que está en juego y, cuando después de buscar no alcanza, animarse a decir "todavía no sé".',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[COGNITIVO_INFORMACIONAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
