// Contenido de /tematicas/universidad-ante-la-ia. Mismo patrón que lib/ia-criterio-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas con links: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/universidad-ia/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// temática "La Universidad ante la Inteligencia Artificial" del módulo Inteligencia
// Artificial.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/universidad-ia/ficha-aula';

export const UNIVERSIDAD_IA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'integridad-academica-y-criterio', number: '05', label: 'Integridad académica y criterio', shortLabel: 'Integridad' },
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
  integridadAcademicaYCriterio: {
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
    fichaAula2: FichaAulaProps;
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
    referencias: string[];
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'La Universidad ante la Inteligencia Artificial',
    subtitulo: 'De vigilar el resultado a definir el objetivo',
    bajada:
      'La universidad forma profesionales, produce conocimiento y adopta tecnologías. La IA obliga a revisar autoría, aprendizaje e integridad académica desde los objetivos educativos: una herramienta puede ser adecuada o inadecuada según la capacidad que una actividad pretende desarrollar. Esta temática forma parte del grupo Inteligencia Artificial de la plataforma y trabaja esa pregunta: no si una herramienta está permitida en abstracto, sino si ayuda o reemplaza lo que esa actividad en particular busca enseñar.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que una misma herramienta de IA puede ser adecuada o inadecuada según la capacidad que una actividad pretende desarrollar: la pregunta correcta no es "¿se puede usar IA?", sino "¿qué tiene que aprender a hacer esta persona por sí misma en esta actividad?".',
      'Reconocer que la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos: estudiantes necesitan conocer usos permitidos, deberes de declaración y criterios de responsabilidad, no vivir bajo sospecha de una herramienta que puede equivocarse.',
      'Comprender que la universidad tiene, además, una responsabilidad de investigación propia: validar modelos, producir evidencia local y estudiar impactos territoriales, porque el Sistema Integral necesita espacios académicos capaces de someter sus propios instrumentos e hipótesis a contrastación.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Evaluar si una herramienta de IA es adecuada o inadecuada en una actividad concreta, según la capacidad que esa actividad pretende desarrollar, en vez de aplicar una regla única para cualquier uso de IA.',
      'Entender por qué la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos, y qué necesitan conocer los estudiantes para actuar con criterio: usos permitidos, deberes de declaración y criterios de responsabilidad.',
      'Reconocer qué deben conservar los profesionales egresados aunque usen IA en su trabajo: la capacidad de evaluar resultados, proteger información y responder por las decisiones que tomaron con asistencia de una herramienta.',
      'Comprender la responsabilidad de investigación propia de la universidad: validar modelos, producir evidencia local y estudiar impactos territoriales, para que sus propios instrumentos e hipótesis puedan someterse a contrastación.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Confiarías tu reputación académica a un detector que se equivoca?',
    parrafos: [
      'Un estudiante entrega un trabajo final que escribió enteramente por su cuenta, a lo largo de varias semanas, con su propio estilo de redacción. El sistema de detección de IA que usa la cátedra le asigna un puntaje alto de "probabilidad de texto generado por IA". Lo citan a una reunión para explicar la situación. El estudiante no tiene forma de demostrar, de manera concluyente, que escribió cada palabra: no guardó un historial de versiones, no grabó el proceso, y su estilo prolijo y bien estructurado —lo que en otro momento hubiera sido un elogio— ahora juega en su contra, porque se parece a lo que ese detector asocia con texto generado.',
      'El problema no es que la cátedra se haya preocupado por el uso de IA: es razonable que lo haga. El problema es haber delegado esa evaluación en una herramienta que, según reconoce la propia universidad, puede equivocarse, y no tener ninguna política clara sobre qué hacer cuando eso pasa, ni sobre qué se esperaba del estudiante desde el principio. La claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos: si desde el inicio hubiera existido una norma clara —qué está permitido, qué hay que declarar, cómo se demuestra autoría—, esta situación se podría haber evitado o resuelto con otra herramienta que no fuera, únicamente, la palabra de un detector contra la del estudiante.',
    ],
    problema:
      'Pensá en alguna situación —propia o de alguien que conocés— donde una herramienta automática tomó un rol que debería haber tenido una norma clara. ¿Qué habría cambiado si esa norma hubiera existido antes de que la herramienta tuviera que decidir?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La universidad forma profesionales, produce conocimiento y adopta tecnologías. La IA obliga a revisar autoría, aprendizaje e integridad académica desde los objetivos educativos: una herramienta puede ser adecuada o inadecuada según la capacidad que una actividad pretende desarrollar. No es lo mismo usar IA para generar ideas en una etapa exploratoria que usarla para resolver completamente un ejercicio diseñado para que alguien aprenda a resolverlo por sí mismo — la pregunta no es sobre la herramienta en abstracto, sino sobre qué se supone que esa actividad en particular tiene que desarrollar.',
      'La claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos. Estudiantes necesitan conocer usos permitidos, deberes de declaración y criterios de responsabilidad — no adivinar, caso por caso, qué se espera de ellos, ni quedar a merced de una herramienta de detección que puede equivocarse. Los profesionales que egresan, además, deberán conservar la capacidad de evaluar resultados, proteger información y responder por decisiones asistidas: usar una herramienta no traslada esa responsabilidad a la herramienta misma.',
      'La universidad posee, además, una responsabilidad de investigación: validar modelos, producir evidencia local y estudiar impactos territoriales. El Sistema Integral requiere precisamente espacios académicos capaces de someter sus propios instrumentos e hipótesis a contrastación — la universidad no es solo un lugar que adopta tecnología, también es uno de los pocos espacios con la capacidad de examinarla con rigor.',
    ],
    preguntaCierre:
      'Pensá en alguna materia o actividad académica que conozcas. Si tuvieras que decidir si el uso de IA está permitido ahí, ¿empezarías por preguntar "¿qué tiene que aprender a hacer alguien en esta actividad por sí mismo?", o por preguntar directamente "¿se puede usar o no?"',
    fichaAula1: {
      titulo: 'Repensar la evaluación en la era de la IA generativa',
      objetivo:
        'Comprender por qué la irrupción de la IA generativa exige repensar los métodos de evaluación universitaria, y reconocer qué tipo de competencias conviene priorizar por sobre la detección de uso de IA.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Según la Guía para el uso de IA generativa en educación e investigación de la UNESCO (2023), una de las mayores preocupaciones del profesorado frente a la IA generativa es su uso fraudulento o el plagio en trabajos y tareas. Pero la propia guía señala que la respuesta más efectiva no es perseguir ese uso con herramientas de detección, sino repensar qué y cómo se evalúa.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Los sistemas de IA generativa cuestionan la noción tradicional de evaluar solo el conocimiento fáctico —lo que alguien puede recordar o repetir—. En su lugar, la guía propone promover competencias de orden superior: la resolución de problemas complejos, el pensamiento crítico y la colaboración. Sugiere poner menos énfasis en la memorización y más en destrezas como la verificación y el análisis de información, y la transferencia de conocimientos a nuevos contextos. También propone explorar modalidades alternativas de evaluación, centradas en proyectos y portafolios, que permitan valorar mejor capacidades como el razonamiento y la toma de decisiones.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Este cambio de enfoque conecta directamente con la idea de que una herramienta de IA puede ser adecuada o inadecuada según la capacidad que una actividad pretende desarrollar: si una evaluación mide solo la capacidad de producir un texto correcto, una herramienta de IA puede reemplazarla por completo; si mide la capacidad de resolver un problema nuevo, argumentar una postura propia o aplicar un criterio a un caso real, el valor de esa evaluación no depende de si existe o no una IA capaz de escribir texto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La guía también enfatiza la necesidad de desarrollar capacidades —no solo imponer restricciones— tanto en el profesorado como en el resto de la comunidad educativa, para que el uso de estas herramientas sea comprendido y no solo vigilado.',
        },
      ],
      preguntaDetonadora:
        'Si una IA pudiera aprobar tu examen final tal como está diseñado hoy, ¿qué dice eso sobre lo que ese examen realmente está evaluando?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Qué mide esta evaluación?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, revisan un modelo de evaluación típico de su área (un examen, un trabajo práctico, un parcial). Discuten: ¿qué parte de esa evaluación podría resolver una IA generativa sin que la persona aprendiera nada? ¿Qué parte no podría resolver sin el criterio propio de quien la responde?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Rediseñar una evaluación" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, toman la misma evaluación analizada en la actividad inicial.',
                'La rediseñan aplicando al menos dos de las sugerencias de la guía: menos memorización y más verificación/análisis; incorporar un componente de proyecto o portafolio; pedir aplicación a un caso o contexto nuevo, no solo repetición de contenido.',
                'Explican qué capacidad busca desarrollar su nueva versión, y por qué una IA generativa no podría resolverla sin que la persona hubiera aprendido algo real.',
                'Presentan su rediseño al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"No se trata de perseguir a la IA en cada examen: se trata de diseñar evaluaciones que valgan la pena, aunque la IA exista."',
      glosario: ['IA generativa', 'Competencias de orden superior', 'Evaluación por portafolio', 'Detector de IA', 'Claridad normativa'],
      referencias: [
        'UNESCO (2023). Guía para el uso de IA generativa en educación e investigación. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
      ],
    },
  },
  integridadAcademicaYCriterio: {
    titulo: 'Integridad académica y criterio',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la universidad enfrenta una responsabilidad doble — formar criterio profesional y gobernar sus propias tecnologías. La IA obliga a revisar autoría, evaluación, integridad, privacidad y qué procesos cognitivos necesitan mantenerse aunque puedan automatizarse.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a un uso de IA en la universidad, la pregunta no debería limitarse a si el uso existió, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — tratar un puntaje de un detector de IA como si fuera una prueba concluyente de deshonestidad académica es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, eso significa que ni la sola buena fe de un estudiante ni un detector automático alcanzan solos: hace falta una norma institucional clara que los sostenga a ambos.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que cualquier uso de IA sea, por definición, una falta de integridad académica: una herramienta puede ser adecuada o inadecuada según la capacidad que la actividad pretende desarrollar.',
          'No es que un detector de IA sea prueba suficiente de nada: la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos.',
          'No es que usar IA traslade la responsabilidad del resultado a la herramienta: los profesionales deben conservar capacidad para evaluar resultados, proteger información y responder por decisiones asistidas.',
          'No es que la universidad solo tenga que regular el uso de IA de sus estudiantes: tiene también una responsabilidad de investigación propia, validando modelos y produciendo evidencia local.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué capacidad busca desarrollar la actividad en cuestión, y si el uso de IA la refuerza o la reemplaza.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si existe una norma clara sobre usos permitidos y deberes de declaración, o si la institución está dependiendo de un detector imperfecto para resolver lo que debería resolver una política.',
        '**¿Qué cambio sería proporcionado?** Un cambio que aclare la norma antes de vigilar el resultado, y que conserve en la persona —estudiante o profesional— la responsabilidad de evaluar, proteger información y responder por lo que entrega.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una estudiante entrega su trabajo final de una materia. El sistema de detección de IA que usa la cátedra —sin que exista ninguna política escrita sobre cómo se usa ese resultado ni qué hacer si da positivo— le asigna un puntaje alto de "probabilidad de texto generado por IA". La citan a una reunión. La estudiante asegura que escribió todo por su cuenta, a lo largo de varias semanas, revisando y corrigiendo su propio texto muchas veces hasta llegar a una redacción clara y bien estructurada. No tiene ningún registro de ese proceso para mostrar: nunca nadie le pidió que lo guardara, porque hasta ese momento nadie sabía que iba a hacer falta.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: un detector de IA —que la propia universidad reconoce como imperfecto— emitió un resultado, y ese resultado se convirtió en la base de una acusación, sin que existiera antes una norma clara sobre qué significaba ese puntaje ni qué evidencia podía usar un estudiante para responder. Participan la estudiante, que no sabía que tendría que demostrar su proceso de escritura; la cátedra, que confió en la herramienta sin una política que la respaldara; y la universidad, que no había definido con anticipación cómo manejar este tipo de situación.',
        ],
        nota: '*(Acá me pregunto: si la norma hubiera sido clara desde el principio, ¿este caso habría llegado a una acusación, o se habría resuelto de otra manera?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: la integridad académica de la estudiante quedó en manos de una herramienta imperfecta, en lugar de en manos de una política institucional explícita. Eso es exactamente lo que el capítulo advierte: la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos.',
          'Qué condiciones sociotécnicas intervienen: no existía, antes de este caso, ningún deber de declaración claro —qué tenía que conservar un estudiante para demostrar su proceso—, ni ningún criterio institucional sobre qué peso tiene el resultado de un detector frente a la palabra de un estudiante. La ausencia de esa norma dejó toda la carga de la prueba en un lugar donde nadie, ni la estudiante ni la cátedra, tenía cómo resolverla con solidez.',
        ],
        nota: '*(Acá me pregunto: ¿la universidad le pidió alguna vez a esta estudiante, antes de este momento, que guardara evidencia de su proceso de escritura?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de dejar de usar detectores de IA como una señal de atención, sino de no tratarlos como prueba concluyente. La universidad necesita una política escrita que aclare, desde el principio de cada materia, qué usos de IA están permitidos, qué deben declarar los estudiantes, y qué evidencia —historial de versiones, borradores, un proceso documentado— puede pedirse si surge una duda, antes de que la duda aparezca, no después.',
        ],
        nota: '*(Acá me pregunto: ¿cuántas situaciones como esta se evitarían si cada estudiante supiera, desde el primer día de clases, qué se espera que pueda demostrar sobre su propio trabajo?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la cátedra: no le corresponde sentir que preocuparse por el uso de IA fue un error, ni dejar de prestarle atención al tema por lo incómodo de este caso en particular.',
          'Qué podría salir mal: que la universidad siga dependiendo de los detectores sin ninguna política que los acompañe, y que más estudiantes atraviesen acusaciones que no pueden refutar con solidez; o que, por miedo a repetir este error, se decida no usar ningún tipo de verificación, perdiendo la posibilidad de detectar casos donde sí hubo un uso no declarado. Lo que ajustaría para la próxima vez: que la universidad publique, antes de empezar cada cuatrimestre, una norma clara sobre usos permitidos de IA, deberes de declaración y qué evidencia resguarda a un estudiante frente a un resultado de detector, para que ningún caso dependa, como este, únicamente de un puntaje.',
        ],
        nota: '*(Acá me pregunto: si yo fuera estudiante en esta universidad hoy, ¿sabría exactamente qué tengo que guardar para poder demostrar que un trabajo es mío?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué pregunta hay que hacerse primero: qué capacidad busca desarrollar la actividad, qué declaración corresponde, o qué responsabilidad profesional se conserva. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una cátedra de escritura académica tiene que decidir si permite que los estudiantes usen una IA generativa para corregir la ortografía y la gramática de sus borradores antes de entregarlos, en una materia cuyo objetivo central es que aprendan a estructurar un argumento propio.',
        analisis:
          '¿Qué pregunta hay que hacerse primero? Qué capacidad busca desarrollar la actividad. El objetivo de esta materia es la estructura argumentativa, no la ortografía. Usar una IA para corregir errores gramaticales no reemplaza esa capacidad específica: una herramienta puede ser adecuada o inadecuada según qué se pretende desarrollar, y acá la corrección ortográfica es periférica al objetivo central de la actividad.',
        nota: '*(Si elegiste "qué declaración corresponde" o "qué responsabilidad profesional se conserva": esas preguntas tienen sentido más adelante, pero primero hay que establecer si el uso en cuestión afecta o no la capacidad que la materia busca formar.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Un estudiante usó una IA generativa para generar una primera lista de ideas antes de escribir su ensayo, y después escribió el texto completo por su cuenta. La cátedra tiene una política clara que permite el uso de IA para generación de ideas, siempre que se declare.',
        analisis:
          '¿Qué pregunta hay que hacerse primero? Qué declaración corresponde. En este caso, el uso ya está permitido por la política de la cátedra —generar ideas no reemplaza la capacidad de argumentar que la materia busca desarrollar—. Lo que queda por resolver es si el estudiante cumplió con el deber de declarar ese uso, tal como exige la norma. La claridad normativa funciona precisamente para que este tipo de situación se resuelva consultando una política, no debatiendo caso por caso si corresponde o no.',
        nota: '*(Si elegiste "qué capacidad busca desarrollar la actividad": esa pregunta ya está resuelta por la política de la cátedra, que distinguió qué usos son compatibles con el objetivo de la materia. Lo que falta es verificar la declaración.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un estudiante avanzado de una carrera de ciencias de la salud usa una IA generativa para resumir y organizar información de un caso clínico simulado, como parte de su formación práctica, antes de decidir una recomendación profesional.',
        analisis:
          '¿Qué pregunta hay que hacerse primero? Qué responsabilidad profesional se conserva. Acá no se trata solo de si el uso es adecuado a la actividad académica, sino de algo que va más allá del aula: este estudiante se está formando para, en el futuro, evaluar resultados, proteger información y responder por decisiones asistidas en un contexto profesional real. Usar la IA para organizar información puede ser razonable, pero la responsabilidad de evaluar esa información y decidir sobre ella tiene que seguir siendo del profesional, no de la herramienta — y esa es la capacidad que más importa formar en este tipo de actividad.',
        nota: '*(No hay una sola respuesta esperada sobre qué uso específico corresponde permitir en este caso, pero sí sobre la pregunta que hay que hacerse primero: acá lo que está en juego trasciende la actividad puntual y conecta con la responsabilidad profesional futura de quien se está formando.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de una facultad sobre cómo manejar el uso de IA entre sus estudiantes. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA: 'Si el detector de IA dice que un trabajo tiene alto porcentaje de texto generado, alcanza con eso para sancionar. La herramienta está para eso.',
      citaB: 'La única forma de asegurar la integridad académica es prohibir cualquier uso de IA en cualquier materia, sin excepciones.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** trata el resultado de un detector imperfecto como prueba concluyente, exactamente lo que el capítulo advierte que no hay que hacer: la claridad normativa resulta más educativa —y más justa— que depender de una herramienta que puede equivocarse, sin ninguna política que respalde cómo se interpreta su resultado.',
      errorB:
        '**Comentario B** prohíbe cualquier uso de IA sin distinguir qué capacidad busca desarrollar cada actividad. Una herramienta puede ser adecuada en una actividad e inadecuada en otra: una prohibición total ignora esa distinción y trata todas las materias y todos los usos como si fueran lo mismo.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno hace la pregunta correcta antes de decidir. Uno delega la decisión completa en una herramienta imperfecta; el otro elimina cualquier posibilidad de distinguir usos, en lugar de evaluar, actividad por actividad, qué capacidad está en juego.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'evaluar si una herramienta de IA es adecuada o inadecuada según la capacidad que una actividad busca desarrollar',
        enunciado:
          'Una materia tiene como objetivo central que los estudiantes aprendan a estructurar un argumento propio. ¿Cómo debería evaluarse si un uso puntual de IA generativa es adecuado en esa materia?',
        opciones: [
          { id: 'a', texto: 'Evaluando si ese uso específico refuerza o reemplaza la capacidad de estructurar un argumento propio, que es lo que la materia busca desarrollar.' },
          { id: 'b', texto: 'Cualquier uso de IA generativa es inadecuado, sin importar para qué se use dentro de la actividad.' },
          { id: 'c', texto: 'Cualquier uso de IA generativa es adecuado, siempre que el estudiante entregue el trabajo a tiempo.' },
          { id: 'd', texto: 'Depende únicamente de si la facultad tiene o no un detector de IA disponible.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no sostiene que cualquier uso de IA sea, por definición, inadecuado: una herramienta puede ser adecuada o inadecuada según la capacidad que la actividad pretende desarrollar, y eso depende del uso concreto, no de la tecnología en sí.',
          c: 'El cumplimiento de un plazo de entrega no es el criterio que define si un uso de IA es adecuado: lo que importa es si ese uso refuerza o reemplaza la capacidad central que la actividad busca formar.',
          d: 'La disponibilidad de un detector no determina qué usos son adecuados: el capítulo es explícito en que la claridad normativa, no la herramienta de detección, es lo que debería guiar esta evaluación.',
        },
      },
      {
        objetivo: 'entender por qué la claridad normativa es más educativa que la vigilancia basada en detectores imperfectos',
        enunciado:
          'Una universidad no tiene ninguna política escrita sobre usos permitidos de IA, pero sí usa un detector para evaluar los trabajos entregados. ¿Qué problema señala el capítulo frente a esta situación?',
        opciones: [
          { id: 'a', texto: 'Ninguno: el detector por sí solo es suficiente para garantizar la integridad académica.' },
          { id: 'b', texto: 'Que la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos, y que los estudiantes necesitan conocer usos permitidos, deberes de declaración y criterios de responsabilidad.' },
          { id: 'c', texto: 'Que el problema es exclusivamente técnico, y se resolvería con un detector más preciso.' },
          { id: 'd', texto: 'Que no hace falta ninguna política si los estudiantes actúan de buena fe.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo llama explícitamente "imperfectos" a este tipo de detectores: no son, por sí solos, suficientes para garantizar nada.',
          c: 'El capítulo no plantea esto como un problema exclusivamente técnico: el punto central es la ausencia de una norma clara, no la precisión de la herramienta utilizada.',
          d: 'La buena fe de los estudiantes no reemplaza la necesidad de una norma clara: sin ella, no hay manera compartida de saber qué se espera ni cómo resolver una duda cuando aparece.',
        },
      },
      {
        objetivo: 'reconocer qué deben conservar los profesionales egresados: capacidad de evaluar resultados, proteger información y responder por decisiones asistidas',
        enunciado:
          'Un profesional usa una herramienta de IA para analizar información antes de tomar una decisión en su trabajo. Según el capítulo, ¿qué debe conservar ese profesional, independientemente de la herramienta que use?',
        opciones: [
          { id: 'a', texto: 'Ninguna responsabilidad particular: la decisión final le corresponde a la herramienta que la asistió.' },
          { id: 'b', texto: 'Solo la responsabilidad de verificar que la herramienta esté actualizada.' },
          { id: 'c', texto: 'La capacidad de evaluar los resultados, proteger la información involucrada y responder por la decisión tomada, aunque haya sido asistida por IA.' },
          { id: 'd', texto: 'La responsabilidad de usar siempre la misma herramienta, para mantener consistencia.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo es explícito en que usar una herramienta no traslada la responsabilidad a la herramienta: la decisión y sus consecuencias siguen siendo del profesional.',
          b: 'Mantener una herramienta actualizada no reemplaza las tres capacidades que el capítulo señala como necesarias: evaluar resultados, proteger información y responder por la decisión.',
          d: 'El capítulo no vincula la responsabilidad profesional con el uso de una herramienta específica: lo que importa es qué conserva la persona, no qué herramienta usa.',
        },
      },
      {
        objetivo: 'comprender la responsabilidad de investigación de la universidad: validar modelos, producir evidencia local, estudiar impactos territoriales',
        enunciado: 'Además de regular el uso de IA de sus estudiantes, ¿qué responsabilidad adicional señala el capítulo que tiene la universidad?',
        opciones: [
          { id: 'a', texto: 'Ninguna: su única responsabilidad es regular el uso de IA dentro del aula.' },
          { id: 'b', texto: 'Prohibir que cualquier otra institución investigue sobre inteligencia artificial.' },
          { id: 'c', texto: 'Desarrollar y vender sus propias herramientas de IA generativa.' },
          { id: 'd', texto: 'Validar modelos, producir evidencia local y estudiar impactos territoriales, como parte de su responsabilidad de investigación.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo describe una responsabilidad adicional, distinta de la regulación del aula: la universidad también tiene un rol de investigación propio sobre estas tecnologías.',
          b: 'El capítulo no establece ninguna exclusividad de este tipo: al contrario, habla de espacios académicos capaces de someter sus instrumentos a contrastación, lo que supone un ejercicio abierto, no restrictivo.',
          c: 'El capítulo no plantea que la universidad deba desarrollar o comercializar tecnología: su responsabilidad señalada es de validación e investigación, no de producción comercial.',
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
        muestra: 'Trata el resultado de un detector de IA como prueba suficiente, o prohíbe cualquier uso de IA sin distinguir qué capacidad busca desarrollar cada actividad.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión qué pregunta corresponde hacerse primero.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue si lo que está en juego es la capacidad que busca desarrollar la actividad, la declaración correspondiente, o la responsabilidad profesional, y propone un cambio proporcionado.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cuándo la universidad necesita una política clara en vez de depender de la vigilancia tecnológica, y distingue la responsabilidad de formar criterio de la responsabilidad de investigar sus propias herramientas.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué una herramienta de IA puede ser adecuada o inadecuada según la capacidad que una actividad busca desarrollar, por qué la claridad normativa supera a la vigilancia con detectores imperfectos, y qué debe conservar un profesional aunque use IA. Lo que cambia, a partir de acá, es cómo mirás las normas —o la ausencia de normas— sobre IA en tu propio entorno académico.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde el uso de IA esté generando dudas o conflictos, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay una norma clara o se está dependiendo de la vigilancia tecnológica— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: el detector de IA que acusó erróneamente a una estudiante que había escrito su trabajo por su cuenta. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué norma clara habría evitado esa situación desde el principio? Si tenés que definir o revisar una política de uso de IA en tu propio espacio académico, ¿por dónde empezarías: por la herramienta de detección, o por la norma? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Autoría y reconocimiento del uso de IA en investigación: la guía de UNIR',
      objetivo:
        'Conocer los principios de autoría y reconocimiento que establece la Guía de uso responsable de IA Generativa en tareas de investigación de UNIR, y aplicar criterios diferenciados según el tipo de tarea académica.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La Universidad Internacional de La Rioja (UNIR), junto con las demás universidades de su grupo educativo, estableció en 2024 una política de uso responsable de IA generativa en investigación, con un principio central: la IA generativa no puede ser nombrada autora de un trabajo de investigación, porque solo quienes pueden asumir responsabilidad y dar consentimiento sobre un trabajo pueden ser reconocidos como autores. El derecho de propiedad intelectual es personal, inalienable e intransferible.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Siempre que una herramienta de IA haya creado, revisado o mejorado material en cualquier fase de una investigación, ese uso debe reconocerse y documentarse. La guía distingue dos niveles: la corrección de contenido (ortografía, gramática) no requiere ninguna cita específica; pero cualquier reformulación, expansión o reescritura sustancial del texto sí debe reconocerse, igual que la traducción entre idiomas.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La política diferencia, además, distintos tipos de tareas académicas, con reglas propias para cada una. En tesis doctorales, no se permite el uso de IA generativa para redactar o reescribir de forma sustancial ningún elemento, incluidas las revisiones bibliográficas, porque el propósito central de una tesis es que quien la escribe aprenda a expresar ideas complejas por sí mismo. En las memorias de proyectos competitivos y becas de investigación, tampoco se permite, salvo autorización expresa para secciones puntuales. En la revisión o evaluación de producción científica de la propia universidad, no se permite, para garantizar una crítica justa y proteger la privacidad de la información evaluada. En cambio, para investigación aplicada —análisis de datos, generación de recomendaciones— sí se permite como herramienta de mejora de la productividad, siempre cuidando qué información se comparte con la herramienta.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Quienes usan estas herramientas son siempre responsables de verificar la veracidad de lo producido, evitar el plagio, respetar los derechos de autor y detectar posibles sesgos — la responsabilidad nunca se traslada a la herramienta.',
        },
      ],
      preguntaDetonadora:
        'Si la autoría de un trabajo es "personal, inalienable e intransferible", ¿qué significa eso para la forma en que usás una IA en tu propio proceso de estudio o investigación?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Corrección o reescritura?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá dos ejemplos de texto: uno donde una IA corrigió ortografía y gramática, y otro donde una IA reformuló un párrafo completo con otro estilo. En grupos, discuten cuál necesita declaración según la guía y cuál no, y por qué.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestra propia guía de uso" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben un tipo de tarea académica (un trabajo práctico, una monografía final, un proyecto de investigación, una evaluación entre pares).',
                'Usando como modelo la distinción de la guía de UNIR, definen: qué usos de IA permitirían sin declaración, cuáles permitirían con declaración obligatoria, y cuáles no permitirían en absoluto para ese tipo de tarea específica.',
                'Justifican sus decisiones según qué capacidad busca desarrollar esa tarea en particular.',
                'Presentan su propia guía y la comparan con la de los demás grupos.',
              ],
            },
          ],
        },
      ],
      frase: '"La autoría no se delega: se ejerce. Usar una herramienta no te saca de la responsabilidad, te la confirma."',
      glosario: ['Autoría académica', 'Reconocimiento de uso de IA', 'Reescritura sustancial', 'Integridad en investigación', 'Responsabilidad del autor'],
      referencias: ['Universidad Internacional de La Rioja (2024). Guía de uso responsable de la Inteligencia Artificial Generativa en tareas de investigación. Proeduca.'],
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
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué confiar ciegamente en un detector de IA puede ser más injusto que confiar en una norma clara?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'La Universidad ante la Inteligencia Artificial, en una tarjeta',
      parrafos: [
        'Una herramienta de IA puede ser adecuada o inadecuada según la capacidad que una actividad pretende desarrollar: la pregunta no es "¿se puede usar IA?", sino "¿qué tiene que aprender a hacer esta persona por sí misma acá?".',
        '**Claridad normativa, no vigilancia:** la claridad normativa resulta más educativa que la vigilancia basada en detectores imperfectos. Estudiantes necesitan conocer usos permitidos, deberes de declaración y criterios de responsabilidad.',
        '**Lo que un profesional conserva:** aunque use IA, debe mantener la capacidad de evaluar resultados, proteger información y responder por sus decisiones.',
        '**La responsabilidad de investigación:** la universidad también debe validar modelos, producir evidencia local y estudiar impactos territoriales — no es solo quien regula, también es quien investiga.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Inteligencia Artificial. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referencias: ['John Dewey', 'Elinor Ostrom', 'Beth Noveck', 'Oscar Oszlak'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'La universidad ante la inteligencia artificial no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[UNIVERSIDAD_IA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
