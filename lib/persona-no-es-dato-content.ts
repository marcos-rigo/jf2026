// Contenido de /tematicas/la-persona-no-es-un-dato. Misma forma que lib/ia-criterio-content.ts
// (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/persona-no-es-dato/ficha-aula';

export const PERSONANOESDATO_FALLBACK: Audiencia = 'docentes';

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
  { id: 'datos-y-dignidad', number: '05', label: 'Datos y dignidad', shortLabel: 'Datos y dignidad' },
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
    bajada: string;
    listaTitulo: string;
    lista: string[];
  };
  loQueVasALograr: {
    titulo: string;
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
    fichaAula1: FichaAulaProps;
  };
  datosYDignidad: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
    };
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
    parrafo2: string;
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
    seguiEnlaceTexto: string;
    seguiEnlaceHref: string;
    seguiDespues: string;
    referenciasTitulo: string;
    referenciasIntro: string;
    referenciasLista: string[];
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'La Persona No Es un Dato',
    subtitulo: 'De clasificar a comprender',
    bajada:
      'Cada vez que usás una plataforma, completás un formulario o pedís un trámite, quedás convertido en datos: un perfil, una puntuación, una categoría. Esa representación puede ser útil, pero no es vos completo. Esta temática forma parte del grupo Alfabetización de la plataforma y trabaja justamente esa diferencia: qué puede decir un dato sobre una persona, y qué se pierde cuando esa representación empieza a ocupar el lugar de la persona entera.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que un perfil, una clasificación o una predicción pueden ser útiles y, al mismo tiempo, ser una reducción: ningún dato contiene completamente la biografía, la intención, el contexto ni la capacidad de cambiar de alguien.',
      'Reconocer que cuanto mayor es el impacto de una decisión sobre oportunidades, empleo, educación, servicios o derechos, mayor debe ser la exigencia sobre la finalidad, la calidad de los datos y la posibilidad de revisarla.',
      'Comprender que las personas necesitan conservar la posibilidad de evolucionar sin quedar fijadas indefinidamente a una representación producida en otro momento de su vida, algo especialmente intenso durante la infancia y la adolescencia.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Definir qué significa que una persona no es un dato: que una representación producida a partir de información aportada, observada o inferida —un perfil, una clasificación, una predicción— describe aspectos de alguien, pero no agota su biografía, su intención, su contexto ni su capacidad de cambiar.',
      'Identificar cuándo el impacto de una decisión basada en datos sobre oportunidades, empleo, educación, servicios o derechos exige mayor exigencia sobre la finalidad, la calidad de los datos, la posibilidad de revisión y la responsabilidad institucional.',
      'Reconocer la dimensión temporal de la dignidad: el derecho de las personas a evolucionar sin quedar fijadas indefinidamente a una representación producida en otro momento de su vida, algo especialmente intenso durante la infancia y la adolescencia.',
      'Usar este capítulo como lente de lectura frente a una situación concreta: identificar primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado, trasladando ese criterio a la escuela, la familia, la universidad, la administración pública, la justicia o las organizaciones.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cuánto de vos cabe en un perfil?',
    parrafos: [
      'Un estudiante llega a mitad de año a tu curso. Antes de conocerlo, ya tenés acceso a su legajo digital: asistencia del año anterior, una calificación baja en un área, una nota de conducta cargada por otro docente. El sistema arma con eso una especie de resumen, casi un perfil. Lo leés antes de la primera clase y, sin darte cuenta, ya tenés una expectativa formada sobre quién es ese chico antes de que diga una palabra.',
      'Nada de eso es falso: la asistencia fue la que fue, la nota existe, la observación la escribió alguien con criterio. El problema no es que esos datos estén ahí. El problema es que empezaron a funcionar como si fueran el estudiante completo, cuando en realidad describen solo algunos aspectos, registrados en otro momento, por otra persona, en otro contexto. Un perfil puede ser útil para prepararte mejor. También puede fijar a alguien a una versión de sí mismo que todavía no eligió.',
    ],
    problema:
      'Pensá en ese primer vistazo al legajo, o en uno parecido. ¿Qué parte de lo que leíste te ayudó a acompañar mejor a ese estudiante, y qué parte terminó ocupando el lugar de conocerlo?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La digitalización produce representaciones de las personas a partir de datos aportados, observados e inferidos: lo que alguien declaró, lo que un sistema registró de su comportamiento y lo que ese sistema dedujo sin que nadie lo dijera explícitamente. Con esos tres tipos de datos se arman perfiles, clasificaciones y predicciones que pueden mejorar servicios, detectar patrones y personalizar experiencias. Pero por más sofisticados que sean, siguen siendo reducciones: un perfil estadístico no contiene completamente la biografía de alguien, ni su intención, ni su contexto, ni su capacidad de cambiar, ni sus proyectos futuros.',
      'La dignidad introduce un límite frente a cualquier pretensión de identificar a una persona con aquello que un sistema puede medir. Ese límite se vuelve más urgente cuando una clasificación empieza a tener consecuencias reales sobre oportunidades, empleo, educación, servicios o derechos. Cuanto mayor es el impacto de una decisión sobre la vida de alguien, mayor tiene que ser la exigencia sobre la finalidad de esa decisión, la calidad de los datos que la sostienen, la posibilidad de revisarla y la responsabilidad institucional detrás de ella. Que un sistema sea técnicamente preciso no elimina las decisiones normativas —qué se mide, qué categorías se usan, para qué se usan— que existen detrás de cualquier objetivo.',
      'Esta cuestión tiene también una dimensión temporal. Las personas necesitan conservar la posibilidad de evolucionar sin quedar fijadas indefinidamente a una representación producida en otro momento de su vida. Esa necesidad es especialmente intensa durante la infancia y la adolescencia, etapas de exploración, aprendizaje y transformación identitaria, donde un dato de hace un año puede ya no decir nada de quién es esa persona hoy.',
    ],
    preguntaCierre:
      'Pensá en algún perfil, clasificación o predicción que se haya armado sobre vos o sobre alguien que conocés, dentro o fuera de una pantalla. ¿Qué parte de esa representación te parece que seguía siendo cierta, y qué parte ya no alcanzaba a describir a esa persona?',
    fichaAula1: {
      titulo: '¿Quién sos en la era de los datos? Identidad digital y derechos emergentes',
      objetivo:
        'Comprender qué es el perfil humano digital y reflexionar sobre los derechos de cuarta generación vinculados a la protección de la dignidad, libertad y autonomía de las personas frente al avance de las tecnologías inteligentes.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En la actualidad, las personas no solo tienen un nombre, un rostro o una historia: tienen también un perfil digital invisible, construido a partir de millones de datos que se recogen mientras navegamos, publicamos, compramos, buscamos o simplemente nos movemos conectados.',
        },
        { tipo: 'parrafo', texto: 'Ese perfil, creado por algoritmos, incluye:' },
        {
          tipo: 'lista',
          items: [
            'Datos personales y biométricos',
            'Preferencias, emociones, hábitos',
            'Historial de navegación y consumo',
            'Redes de vínculos e interacciones',
            'Predicciones sobre comportamiento futuro',
          ],
        },
        { tipo: 'parrafo', texto: 'Este perfil humano digital es utilizado para:' },
        {
          tipo: 'lista',
          items: [
            'Personalizar contenido (o manipularlo)',
            'Discriminar o clasificar en sistemas automatizados',
            'Tomar decisiones que afectan educación, salud, empleo, crédito, justicia',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Aquí emergen los derechos de cuarta generación, que buscan proteger a la persona en su dimensión digital. Algunos de ellos son:',
        },
        {
          tipo: 'lista',
          items: [
            'Derecho a la identidad digital digna y libre de perfilado injusto',
            'Derecho a la autodeterminación informativa (decidir sobre el uso de nuestros datos)',
            'Derecho a la no discriminación algorítmica',
            'Derecho a la explicabilidad de las decisiones automatizadas',
            'Derecho a la integridad psiconeuronal y emocional frente a tecnologías invasivas',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Estos derechos no reemplazan a los anteriores, sino que los actualizan. Hablar de ciudadanía digital hoy es también defender la dignidad humana ante tecnologías que pueden decidir sin rostro y sin diálogo.',
        },
      ],
      preguntaDetonadora:
        '¿Quién decide quién sos cuando no sos vos quien controla tu perfil digital? ¿Qué derechos se ponen en juego cuando un sistema te evalúa sin conocerte?',
      actividades: [
        {
          titulo: 'Actividad inicial — "El retrato que no ves" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Cada estudiante imagina que una inteligencia artificial lo describe sin conocerlo personalmente, solo por lo que hace en internet.',
            },
            { tipo: 'parrafo', texto: '→ Luego escriben:' },
            { tipo: 'lista', items: ['¿Qué diría esa descripción?', '¿Qué acierta y qué no?'] },
            { tipo: 'parrafo', texto: '→ Discusión: ¿esa imagen digital representa lo que sos?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Constitución de los derechos digitales humanos" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, los estudiantes investigan uno de los derechos emergentes (ver arriba).',
                'Elaboran un artículo de una "Constitución Digital Humana", que incluya:',
                'Redacción del derecho',
                'Justificación de su necesidad',
                'Ejemplo de aplicación o vulneración',
                'Propuesta para protegerlo desde la ciudadanía',
                'Arman una carta colectiva o mural con los "Derechos de Cuarta Generación".',
              ],
            },
          ],
        },
      ],
      frase:
        'Tu humanidad no termina donde empieza el código. Tus derechos deben acompañarte también en el mundo digital.',
      glosario: [
        'Perfil humano digital',
        'Derechos de cuarta generación',
        'Autodeterminación informativa',
        'No discriminación algorítmica',
        'Explicabilidad tecnológica',
      ],
      referencias: [
        'Declaración de Derechos Humanos en el Ciberespacio – 2022',
        'UNESCO – Recomendación sobre la Ética de la IA',
        'Informe "El perfilamiento digital y sus riesgos" – Access Now',
        'Fundación Karisma – Derechos emergentes en América Latina',
        'Video: "Tus datos, tu identidad: lo que no ves también importa" – Canal Encuentro',
      ],
    },
  },
  datosYDignidad: {
    titulo: 'Datos y dignidad',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: los datos describen aspectos de una persona, pero no agotan su identidad. El perfilado, las inferencias y la predicción pueden ser útiles y, al mismo tiempo, producir reducciones cuando una representación estadística empieza a sustituir la comprensión contextual de esa persona. Pensarlo bien exige trabajar con una escala de análisis que reúna la experiencia personal, las relaciones, las instituciones y la arquitectura tecnológica — no alcanza con mirar solo el dato o solo a la persona por separado.',
        'El capítulo nombra cinco tradiciones que ofrecen lenguajes distintos para observar estos procesos: Amartya Sen, Albert Bandura, Martha Nussbaum, Luciano Floridi y Helen Nissenbaum.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una reducción de una persona a un dato, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — ver que algo coincide no es lo mismo que entender por qué pasa.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar buen criterio y seguir condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que el problema sea que existan datos sobre las personas: esos datos describen aspectos reales y pueden mejorar servicios y detectar patrones útiles.',
          'No es solo una cuestión de que cada persona aprenda a cuidarse mejor: alguien puede tener buen criterio y seguir condicionado por reglas opacas o procedimientos institucionales confusos.',
          'No alcanza con una buena regulación o un buen diseño si quienes participan no tienen los conocimientos, la confianza o la posibilidad real de usarlos.',
          'No es diagnosticar a partir de una sola observación: hay que reconstruir cómo se manifiesta el problema y qué evidencia sostiene cada hipótesis, sin confundir correlación con mecanismo.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona, o qué parte de una institución, queda afectada por la representación que se está usando.',
        '**¿Qué condiciones sociotécnicas intervienen?** Qué combinación de capacidad, contexto, diseño, normas e incentivos está produciendo este resultado — no alcanza con mirar solo el dato.',
        '**¿Qué cambio sería proporcionado?** El propósito no es llegar a la misma respuesta en todos los casos, sino mejorar la calidad de las preguntas que preceden a la decisión.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una escuela secundaria usa un sistema que cruza asistencia, calificaciones y participación en el aula virtual para generar, a mitad de año, un "índice de riesgo" por estudiante. A un alumno de tercer año el sistema le asigna un índice alto: faltó varias veces en marzo, tiene notas bajas en dos materias y casi no entró a la plataforma. Con ese número, el equipo directivo lo anota en la lista de "seguimiento prioritario" y arma una reunión con la familia para hablar de una posible repitencia. Nadie del equipo había hablado todavía con el estudiante.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: un conjunto de datos reales —asistencia, notas, uso de la plataforma— se convirtió en un número, y ese número empezó a funcionar como si fuera el diagnóstico completo de la situación del estudiante. Participan el sistema que calculó el índice, el equipo directivo que lo usó para decidir una reunión, la familia que va a recibir esa información, y el estudiante, que todavía no fue consultado sobre nada de esto.',
        ],
        nota: '*(Acá me pregunto: ¿el índice describe lo que le pasó a este estudiante en marzo, o ya está decidiendo quién es este estudiante para el resto del año?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: la dignidad del estudiante, en el sentido que el capítulo le da — el límite frente a cualquier pretensión de identificarlo con lo que el sistema puede medir. El índice describe aspectos reales (faltó, tiene notas bajas, no entró a la plataforma), pero no contiene su biografía, su contexto en marzo, ni su capacidad de cambiar.',
          'Qué condiciones sociotécnicas intervienen: el sistema cruza datos aportados (las notas que cargaron los docentes) y observados (la asistencia, el ingreso a la plataforma), y con eso infiere un "riesgo" que nadie definió del todo. La decisión institucional de citar a la familia tiene consecuencias sobre la educación de ese estudiante, que es justamente el tipo de impacto que exige mayor finalidad, calidad de datos y posibilidad de revisión. Y nada de esto se contrastó todavía con lo que el estudiante podría explicar sobre marzo.',
        ],
        nota: '*(Acá me pregunto: ¿qué pasó en marzo que el índice no puede ver? ¿Alguien se lo preguntó antes de armar la reunión?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de dejar de usar el índice ni de ignorarlo, sino de no tratarlo como una respuesta cerrada. Antes de la reunión con la familia, alguien del equipo debería hablar primero con el estudiante: qué pasó en marzo, qué cambió desde entonces, qué necesita. El índice puede seguir sirviendo como una alerta temprana, pero la decisión sobre qué hacer no puede salir únicamente de ese número.',
        ],
        nota: '*(Acá me pregunto: si la reunión con la familia se arma antes de hablar con el estudiante, ¿a quién estamos escuchando primero?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al equipo directivo: no le corresponde desconfiar de cualquier herramienta de este tipo de ahora en adelante, ni sentir que cometió una falta grave por haberla usado. Un índice que ayuda a detectar a tiempo una situación puede ser útil.',
          'Qué podría salir mal: que la reunión con la familia se arme igual, sin haber hablado antes con el estudiante, y que ese número termine definiendo cómo lo trata el resto del equipo docente durante el año; o que, por la incomodidad de este caso, se deje de usar cualquier indicador y se pierda la posibilidad de detectar a tiempo a otro estudiante que sí lo necesite. Lo que ajustaría para la próxima vez: que ningún índice de este tipo dispare una reunión institucional sin que antes alguien haya hablado con el estudiante sobre lo que el número no puede ver.',
        ],
        nota: '*(Acá me pregunto: ¿qué otros números estamos usando en la escuela para decidir sobre alguien sin haberle preguntado antes a esa persona?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué pesa más: la reducción, la proporcionalidad o la dimensión temporal. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una app de orientación vocacional le sugiere a una estudiante tres carreras posibles, a partir de un test de intereses y sus notas. La estudiante toma la sugerencia como si fuera un diagnóstico cerrado sobre lo que "realmente es buena para hacer", y descarta otras opciones que le interesaban antes de ver el resultado.',
        analisis:
          '¿Qué pesa más en esta situación? La reducción. El test puede ser útil como disparador, pero un resultado armado a partir de intereses marcados en un formulario y notas escolares no contiene la biografía completa de la estudiante, ni su capacidad de cambiar, ni lo que todavía no exploró. El problema no es que la app haya sugerido algo: es que esa sugerencia empezó a funcionar como si fuera la persona entera. Lo proporcionado es usar el resultado como un dato más entre otros, no como la respuesta.',
        nota: '*(Si elegiste "proporcionalidad" o "dimensión temporal": todavía no están en juego — acá nadie tomó una decisión institucional con consecuencias sobre su futuro, y el test es de este año, no de uno anterior. Lo que falló fue tratar una representación parcial como si fuera completa.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una empresa usa un sistema automatizado para filtrar currículums antes de que un reclutador los vea. El sistema descarta a una postulante por un hueco de ocho meses en su historial laboral, sin que nadie revise el motivo. Ella no llega ni siquiera a la primera entrevista.',
        analisis:
          '¿Qué pesa más en esta situación? La proporcionalidad. Acá el impacto es alto: la decisión afecta directamente el acceso de esta persona a un empleo, y el capítulo es explícito en que cuanto mayor es el impacto de una decisión sobre oportunidades o empleo, mayor tiene que ser la exigencia sobre la finalidad del sistema, la calidad de los datos y la posibilidad de revisión. Descartar automáticamente, sin ninguna instancia donde una persona pueda explicar o pedir que se revise, no es proporcionado a lo que esa decisión le cuesta a la postulante.',
        nota: '*(Si elegiste "reducción": también está presente, el sistema la redujo a una línea de su historial. Pero lo que define este caso es que nadie puede revisar ni cuestionar una decisión con semejante impacto sobre su empleo.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un municipio tiene un registro de "familias en situación de vulnerabilidad" que se arma automáticamente con datos de distintos programas sociales. Una familia que estuvo ahí hace cuatro años, cuando atravesaba una crisis puntual, sigue apareciendo en el registro hoy, aunque su situación cambió por completo. Un trámite nuevo que piden les es denegado "por antecedentes en el sistema".',
        analisis:
          '¿Qué pesa más en esta situación? La dimensión temporal. La familia cambió, pero quedó fijada a una representación producida en otro momento de su vida — exactamente lo que el capítulo señala como la necesidad de conservar la posibilidad de evolucionar sin quedar atado indefinidamente a un dato pasado. No se trata de borrar lo que pasó hace cuatro años, sino de que ese dato no siga decidiendo por ellos hoy, sin ninguna revisión.',
        nota: '*(Si elegiste "proporcionalidad": también está en juego, por el impacto sobre un trámite. Pero lo que define este caso es que la causa del problema es un dato viejo que nunca se actualizó, no una falla en el momento de la decisión actual.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el caso del índice de riesgo escolar. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'El índice lo calculó el sistema, no nosotros. Si la familia se sintió mal en la reunión, es un problema de cómo funciona el programa, no nuestro.',
      citaB:
        'Cualquier sistema que reduzca a un estudiante a un número es injusto por definición. No deberíamos usar ningún indicador de este tipo, nunca.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** traslada toda la responsabilidad al sistema. Un dato automatizado no elimina la responsabilidad institucional: el equipo directivo fue quien decidió citar a la familia a partir de ese número, y esa decisión le correspondía ser revisada por una persona antes de actuar, no delegada por completo en el cálculo.',
      errorB:
        '**Análisis B** rechaza cualquier uso de datos o indicadores, sin distinguir cuándo son útiles y cuándo se vuelven una reducción. El propio capítulo reconoce que estas representaciones pueden mejorar servicios y detectar patrones; el problema no es que existan, sino cuándo empiezan a sustituir la comprensión real de la persona.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no distinguieron entre usar un dato como ayuda y dejar que ese dato decida solo. Uno le entregó toda la responsabilidad al sistema, y el otro rechazó cualquier sistema sin mirar cómo se estaba usando.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir qué significa que una persona no es un dato',
        enunciado:
          'Un sistema arma un perfil de una persona a partir de sus datos aportados, observados e inferidos. ¿Cuál de estas afirmaciones describe mejor la relación entre ese perfil y la persona?',
        opciones: [
          {
            id: 'a',
            texto:
              'El perfil puede ser útil y al mismo tiempo ser una reducción: describe aspectos reales, pero no contiene su biografía completa, su contexto ni su capacidad de cambiar.',
          },
          { id: 'b', texto: 'El perfil es siempre falso, porque ningún sistema puede conocer realmente a una persona.' },
          { id: 'c', texto: 'El perfil es confiable en la medida en que use más datos, sin importar de qué tipo.' },
          { id: 'd', texto: 'El perfil y la persona son lo mismo, porque los datos describen objetivamente quién es alguien.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no dice que estas representaciones sean falsas: pueden mejorar servicios, detectar patrones y personalizar experiencias. El problema no es que sean falsas, sino que son reducciones si se las confunde con la persona completa.',
          c: 'Agregar más datos no resuelve el problema de fondo. Perfilado, inferencias y predicción pueden seguir siendo reducciones aunque se basen en mucha información, si esa representación empieza a sustituir la comprensión contextual de la persona.',
          d: 'Es exactamente la confusión que el capítulo advierte: identificar a la persona con lo que un sistema puede medir es lo que la dignidad pone como límite.',
        },
      },
      {
        objetivo: 'identificar cuándo el impacto exige mayor exigencia',
        enunciado:
          'Dos sistemas usan datos personales: uno sugiere canciones según lo que escuchaste antes; otro decide si una persona accede a un crédito. Según el criterio de proporcionalidad del capítulo, ¿qué diferencia a estos dos casos?',
        opciones: [
          { id: 'a', texto: 'Ninguna: ambos usan datos personales, así que requieren el mismo nivel de exigencia.' },
          {
            id: 'b',
            texto:
              'El sistema de crédito necesita más exigencia sobre finalidad, calidad de datos y posibilidad de revisión, porque su decisión tiene mayor impacto sobre oportunidades y derechos.',
          },
          { id: 'c', texto: 'El sistema de música necesita más exigencia, porque maneja más cantidad de datos acumulados con el tiempo.' },
          { id: 'd', texto: 'Ninguno de los dos necesita revisión, porque ambos son automáticos.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo es explícito en que la exigencia crece con el impacto de la decisión, no con el solo hecho de usar datos personales. Sugerir una canción y decidir un crédito no tienen el mismo peso sobre la vida de alguien.',
          c: 'La cantidad de datos no es el criterio de proporcionalidad: lo que importa es la consecuencia de la decisión sobre oportunidades, empleo, educación, servicios o derechos.',
          d: 'Que un sistema sea automático no lo exime de revisión. Cuanto mayor el impacto de la decisión, mayor debe ser la posibilidad de revisarla y la responsabilidad institucional detrás.',
        },
      },
      {
        objetivo: 'reconocer la dimensión temporal de la dignidad',
        enunciado:
          'Un registro sigue clasificando a una familia según una situación que atravesó hace varios años, aunque esa situación ya cambió por completo. ¿Qué aspecto de la dignidad está en juego, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'El derecho a la privacidad de los datos biométricos.' },
          { id: 'b', texto: 'El derecho a la explicabilidad de las decisiones automatizadas.' },
          {
            id: 'c',
            texto:
              'El derecho a evolucionar sin quedar fijado indefinidamente a una representación producida en otro momento de la vida.',
          },
          { id: 'd', texto: 'El derecho a elegir qué plataformas usar.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'No hay en este caso un problema de datos biométricos: el problema es que un dato viejo sigue definiendo a la familia hoy.',
          b: 'La explicabilidad importa, pero no es lo que el capítulo señala como dimensión temporal de la dignidad: acá el punto es que la persona necesita poder cambiar sin quedar atada a su pasado.',
          d: 'Elegir plataformas no es lo que está en juego en este caso: lo que está en juego es que una representación pasada siga decidiendo sobre el presente de alguien.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura',
        enunciado:
          'Frente a una situación donde un dato parece estar reduciendo o perjudicando a una persona, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
        opciones: [
          {
            id: 'a',
            texto: 'Qué cambio sería proporcionado → qué dimensión está comprometida → qué condiciones sociotécnicas intervienen.',
          },
          {
            id: 'b',
            texto: 'Qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado → qué dimensión está comprometida.',
          },
          {
            id: 'c',
            texto:
              'Qué dimensión humana o institucional está comprometida → qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado.',
          },
          { id: 'd', texto: 'Qué evidencia hay → quién es responsable → qué sanción corresponde.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El orden está invertido: el capítulo propone identificar primero qué está comprometido, y recién al final decidir qué cambio sería proporcionado — no al revés.',
          b: 'Empezar por las condiciones sociotécnicas sin identificar antes qué dimensión está comprometida deja sin marco la pregunta siguiente.',
          d: 'Ese no es el método que da el capítulo. El propósito no es buscar culpables ni una sanción, sino mejorar la calidad de las preguntas que preceden a la decisión.',
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
          'Trata la representación basada en datos como si fuera la persona completa, o rechaza cualquier uso de datos sin distinguir cuándo son útiles y cuándo se vuelven una reducción.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que algo no está bien en el uso del dato, pero no identifica con precisión qué dimensión está comprometida ni qué condiciones sociotécnicas intervienen.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue reducción, proporcionalidad y dimensión temporal, identifica qué dimensión humana o institucional está comprometida y propone un cambio proporcionado al impacto de la decisión.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo un impacto exige mayor exigencia institucional, distingue una hipótesis razonable de una explicación intuitiva, y reconoce la reciprocidad entre capacidad y entorno al distribuir responsabilidad.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué un dato describe pero no agota a una persona, cuándo esa reducción exige mayor proporcionalidad, y la dimensión temporal del derecho a evolucionar. Lo que cambia, a partir de acá, es cómo mirás los perfiles, índices y clasificaciones que ya circulan en tu escuela — los que arma el sistema y los que armás vos mismo al leer un legajo.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde un dato esté pesando sobre una persona, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: el legajo digital del estudiante nuevo. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de ese perfil te ayudaba a acompañarlo mejor y qué parte había empezado a ocupar el lugar de conocerlo? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula3: {
      titulo: 'Crianzas y derechos en pantalla: crecer en la era digital',
      objetivo:
        'Reflexionar sobre las oportunidades, desafíos y derechos que enfrentan niños, niñas y adolescentes en entornos digitales, reconociendo su protagonismo, vulnerabilidades y necesidad de acompañamiento activo.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Hoy, las infancias y adolescencias no son simplemente "usuarios" de tecnología: son protagonistas de la cultura digital. Desde edades tempranas, acceden a dispositivos, redes sociales, videojuegos, plataformas educativas, y se comunican, aprenden y se vinculan a través de pantallas.',
        },
        { tipo: 'parrafo', texto: 'Pero este entorno presenta oportunidades y también riesgos. Entre ellos:' },
        {
          tipo: 'lista',
          items: [
            'Hiperexposición desde la niñez (sharenting)',
            'Acceso no mediado a contenidos inapropiados o violentos',
            'Falta de privacidad y perfilado algorítmico precoz',
            'Ciberbullying, grooming y violencia digital',
            'Dependencia tecnológica y afectación del bienestar emocional',
          ],
        },
        { tipo: 'parrafo', texto: 'La ciudadanía digital en clave de infancia implica:' },
        {
          tipo: 'lista',
          items: [
            'Reconocer a niñas, niños y adolescentes como sujetos de derecho también en lo digital',
            'Escuchar su voz, entender sus lógicas y códigos culturales',
            'Garantizar el acceso seguro, libre y formativo a la tecnología',
            'Acompañar sus trayectorias digitales sin sobrecontrol ni abandono',
            'Promover el protagonismo, la expresión y la participación desde edades tempranas',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Como adultos, docentes y responsables, no se trata solo de proteger, sino de educar en derechos, respeto, autonomía y pensamiento crítico desde el inicio del vínculo con la tecnología.',
        },
      ],
      preguntaDetonadora:
        '¿Qué significa "crecer con tecnología"? ¿Los chicos y chicas tienen derechos en internet o solo riesgos?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Yo a los 10... ¿con o sin pantallas?" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'En grupos intergeneracionales (docentes y estudiantes si es posible), se comparan:' },
            {
              tipo: 'lista',
              items: ['¿Qué hacías a los 10 años?', '¿Cómo jugabas? ¿Dónde aprendías?', '¿Qué cambió con la llegada de la tecnología?'],
            },
            { tipo: 'parrafo', texto: '→ Reflexión: ¿todo cambio es pérdida? ¿Qué se gana o se transforma?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Derechos en la infancia digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, los estudiantes eligen uno de los siguientes derechos digitales de las infancias:',
                'Acceso',
                'Privacidad',
                'Juego y expresión',
                'Protección frente a riesgos',
                'Participación y protagonismo',
                'Diseñan una propuesta para garantizar ese derecho en la vida cotidiana:',
                'Desde la escuela',
                'Desde la familia',
                'Desde la tecnología',
                'Pueden expresarlo en formato campaña, cartel, código de buenas prácticas, video breve o mural creativo.',
                'Presentan sus propuestas en un "Foro de Infancias Digitales".',
              ],
            },
          ],
        },
      ],
      frase:
        'La infancia digital no es un problema que se controla: es una etapa que se acompaña, se escucha y se cuida con amor y derechos.',
      glosario: ['Infancias digitales', 'Sharenting', 'Grooming', 'Protagonismo juvenil', 'Acompañamiento digital'],
      referencias: [
        'Guía "Crianza en la era digital" – Unicef / Faro Digital',
        'Serie "Clic" – Canal Pakapaka (episodios sobre ciudadanía digital)',
        'Chicos.net – Portal para infancias',
        'Video: "Jugar, crecer y ser en línea" – Encuentro',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué leer el legajo digital de un estudiante antes de conocerlo puede ayudarte y, al mismo tiempo, ya estar decidiendo quién es esa persona para vos?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'La Persona No Es un Dato, en una tarjeta',
      parrafos: [
        'Los datos describen aspectos de una persona, pero no agotan su identidad: un perfil, una clasificación o una predicción puede ser útil y, al mismo tiempo, ser una reducción.',
        '**Proporcionalidad:** cuanto mayor es el impacto de una decisión sobre oportunidades, empleo, educación, servicios o derechos, mayor debe ser la exigencia sobre su finalidad, la calidad de los datos, la posibilidad de revisión y la responsabilidad institucional.',
        '**Dimensión temporal:** las personas necesitan conservar la posibilidad de evolucionar sin quedar fijadas indefinidamente a una representación producida en otro momento de su vida — algo especialmente intenso en la infancia y la adolescencia.',
        '**El método, en tres preguntas:** qué dimensión humana o institucional está comprometida, qué condiciones sociotécnicas intervienen, qué cambio sería proporcionado.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Alfabetización. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referenciasLista: ['Amartya Sen', 'Albert Bandura', 'Martha Nussbaum', 'Luciano Floridi', 'Helen Nissenbaum'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'La persona no es un dato no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[PERSONANOESDATO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
