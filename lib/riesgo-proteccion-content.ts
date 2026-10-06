// Contenido de /tematicas/riesgo-y-proteccion-digital. Misma forma que
// lib/victimologia-digital-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/riesgo-proteccion/ficha-aula';

export const RIESGO_PROTECCION_FALLBACK: Audiencia = 'docentes';

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
  { id: 'probabilidad-y-proporcion', number: '05', label: 'Probabilidad y proporción', shortLabel: 'Probabilidad' },
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
  probabilidadYProporcion: {
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
    referenciasLista: string[];
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Riesgo y Protección Digital',
    subtitulo: 'De pronosticar a trabajar con probabilidades',
    bajada:
      'Un factor de riesgo aumenta probabilidad y no predice destino individual. Un factor protector puede disminuir exposición, mejorar respuesta o favorecer recuperación, pero tampoco funciona de forma universal. La prevención necesita trabajar con configuraciones y evitar convertir personas en pronósticos. Esta temática forma parte del grupo Seguridad de la plataforma y trabaja esa distinción: identificar qué aumenta o reduce una probabilidad, sin convertir eso en una sentencia sobre quién es alguien.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que riesgo y protección se expresan en términos de probabilidad y configuraciones, no de destinos individuales: ningún factor, por sí solo, determina lo que le va a pasar a una persona.',
      'Identificar qué factores son modificables —sobre los que una estrategia puede actuar— y cuáles no lo son, para priorizar la intervención donde realmente puede tener efecto.',
      'Reconocer que una lectura equilibrada identifica tanto déficits como fortalezas: las comunidades tienen redes, saberes y referentes que pueden convertirse en activos preventivos, no solo carencias que hay que resolver desde afuera.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Entender que riesgo y protección se expresan en términos de probabilidad y configuraciones, y no de destinos individuales: un factor de riesgo aumenta probabilidad, un factor protector puede disminuir exposición, mejorar respuesta o favorecer recuperación, pero ninguno de los dos funciona de forma universal ni determina un resultado fijo.',
      'Priorizar los factores modificables —acompañamiento, configuraciones, procedimientos, capacidades— por sobre aquellos que no lo son, como la edad o la historia previa, que pueden explicar parte de una situación sin ser variables sobre las que una estrategia pueda actuar.',
      'Identificar fortalezas y activos preventivos de una comunidad, y no limitarse a sus déficits: las redes, los saberes y los referentes que ya existen pueden convertirse en recursos de prevención, aumentando la sostenibilidad de cualquier intervención y reduciendo los enfoques paternalistas.',
      'Usar este capítulo como lente de lectura frente a una situación concreta: identificar primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado, trasladando ese criterio a la escuela, la familia, la universidad, la administración pública, la justicia o las organizaciones.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Un factor de riesgo es un pronóstico, o es solo una probabilidad?',
    parrafos: [
      'En una reunión de equipo docente, alguien menciona que un estudiante viene de una familia donde hubo problemas de adicciones. Al rato, sin que nadie lo diga explícitamente, empieza a circular una idea distinta: "con esos antecedentes, es cuestión de tiempo que este chico también tenga problemas". Nadie lo dice así de crudo, pero empieza a tratarlo distinto: más vigilancia, menos expectativa, menos oportunidades de las que se le dan a otros estudiantes con comportamientos parecidos. El estudiante, que hasta ese momento no había mostrado ninguna señal de riesgo propia, empieza a sentir que ya no importa lo que haga.',
      'Ese dato —la historia familiar— es real, y es cierto que puede aumentar una probabilidad. Pero el equipo pasó, sin darse cuenta, de reconocer un factor de riesgo a tratarlo como si fuera un pronóstico cerrado sobre quién va a ser ese estudiante. Un factor de riesgo aumenta probabilidad; no predice destino individual. Confundir las dos cosas no solo es un error conceptual: cambia cómo se trata a una persona, y eso también puede terminar produciendo lo que se temía, por el solo hecho de haberlo tratado como inevitable.',
    ],
    problema:
      'Pensá en alguna vez que hayas visto —o hecho vos mismo— que un dato sobre la historia de alguien se convirtiera, sin pruebas nuevas, en una expectativa fija sobre lo que esa persona iba a hacer. ¿Qué habría cambiado si ese dato se hubiera tratado como una probabilidad a acompañar, en vez de como un destino?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Un factor de riesgo aumenta probabilidad y no predice destino individual. Un factor protector puede disminuir exposición, mejorar respuesta o favorecer recuperación, pero tampoco funciona de forma universal. La prevención necesita trabajar con configuraciones —combinaciones de varios factores a la vez— y evitar convertir personas en pronósticos: ni un solo factor de riesgo condena a nadie, ni un solo factor protector garantiza que nada va a pasar.',
      'La modificabilidad orienta las prioridades de cualquier intervención. La edad o la historia previa pueden explicar parte de una situación, pero no son variables sobre las que una estrategia pueda actuar: nadie puede cambiar la edad de un estudiante ni borrar su historia familiar. En cambio, el acompañamiento, las configuraciones de un entorno, los procedimientos institucionales y las capacidades de las personas sí pueden modificarse — y ahí es donde conviene concentrar los esfuerzos.',
      'Una lectura equilibrada identifica déficits y fortalezas al mismo tiempo. Las comunidades poseen redes, saberes y referentes que pueden convertirse en activos preventivos, no solo carencias que hay que resolver desde afuera. Intervenir sobre las capacidades ya presentes aumenta la sostenibilidad de cualquier estrategia y reduce los enfoques paternalistas, que tratan a una comunidad como si no tuviera nada propio para aportar a su propia protección.',
    ],
    preguntaCierre:
      'Pensá en algún factor de riesgo o factor protector que conozcas de tu escuela o tu comunidad. ¿Es algo modificable —sobre lo que se podría actuar— o es algo fijo, como una historia o una edad, que como mucho se puede acompañar?',
    fichaAula1: {
      titulo: 'Factores de riesgo y factores protectores: prevenir con configuraciones, no con pronósticos',
      objetivo:
        'Reconocer, a partir del modelo de factores de riesgo y factores protectores, que ningún factor por sí solo determina un resultado, e identificar qué se puede hacer en distintos niveles —individuo y pares, familia, escuela, comunidad— para reducir riesgos y fortalecer la protección.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La prevención basada en factores de riesgo y factores protectores parte de una idea simple: para prevenir un problema hay que identificar qué factores aumentan o reducen la probabilidad de que se desarrolle. Los factores de riesgo aumentan esa probabilidad; los factores protectores la reducen. Ninguno de los dos actúa solo: lo que importa es la combinación, la configuración completa de factores presentes en la vida de una persona.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Estos factores aparecen en distintos niveles. En el nivel del individuo y su grupo de pares, influyen cosas como las actitudes hacia un comportamiento problemático o la influencia de amistades que ya participan en ese comportamiento. En el nivel familiar, influyen el manejo familiar —pautas claras, supervisión y consecuencias consistentes— y el conflicto persistente entre quienes conviven. En el nivel escolar, influyen el vínculo del estudiante con la escuela y sus dificultades académicas tempranas. En el nivel comunitario, influyen la disponibilidad de recursos riesgosos en el entorno, las normas sociales compartidas y el grado de apego que las personas sienten hacia su propio barrio o comunidad.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para cada factor de riesgo identificado en estos niveles, existe casi siempre una acción posible que lo compensa: mantener conversaciones abiertas y frecuentes, sostener la supervisión sin dejar de acompañar, fortalecer el vínculo con la escuela, construir redes y conocerse entre vecinos. El comportamiento de una persona no está predeterminado por ninguno de estos factores tomados aisladamente — lo que cambia las probabilidades es la combinación de riesgos y protecciones presentes a la vez, y ahí es donde una intervención bien dirigida puede marcar una diferencia real.',
        },
      ],
      preguntaDetonadora: 'Si dos estudiantes tienen el mismo factor de riesgo en su historia, ¿por qué uno puede terminar con problemas y el otro no?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Riesgo no es destino" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá tres historias breves y ficticias de estudiantes con un mismo factor de riesgo (por ejemplo, antecedentes familiares de consumo problemático), pero con distintos niveles de acompañamiento, vínculo escolar y redes de apoyo.',
            },
            {
              tipo: 'parrafo',
              texto:
                'En grupos, discuten: ¿por qué, con el mismo factor de riesgo, estas tres historias podrían terminar de forma distinta?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mapa de riesgos y protecciones de nuestra escuela" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben uno de los cuatro niveles (individuo/pares, familia, escuela, comunidad).',
                'Para ese nivel, identifican: un factor de riesgo que exista hoy en su escuela o entorno, y si es modificable o no.',
                'Si es modificable, proponen una acción concreta y realista para la escuela; si no lo es (como una historia familiar), proponen qué acompañamiento sí podría ofrecerse.',
                'Identifican también una fortaleza o activo preventivo ya existente en ese mismo nivel (una red, un referente, un saber comunitario), no solo un déficit.',
                'Presentan su parte del mapa, y entre todos arman un mapa único de riesgos, protecciones y fortalezas de la escuela.',
              ],
            },
          ],
        },
      ],
      frase: 'Un factor de riesgo aumenta una probabilidad. Nunca escribe, por sí solo, el destino de nadie.',
      glosario: ['Factor de riesgo', 'Factor protector', 'Modificabilidad', 'Configuración de factores', 'Activo preventivo'],
      referencias: [
        '"¿Qué es la prevención basada en los factores de riesgo y los factores protectores?" — Center for Communities That Care, Universidad de Washington (versión en español, 2020).',
      ],
    },
  },
  probabilidadYProporcion: {
    titulo: 'Probabilidad y proporción',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: factores de riesgo y protección expresan probabilidades y configuraciones, no destinos. La prevención necesita priorizar factores modificables y reconocer capacidades existentes para evitar convertir diagnósticos en etiquetas sobre personas o comunidades.',
        'El capítulo nombra como referencia a Urie Bronfenbrenner, el CDC, la OMS, Robert Gordon y el Institute of Medicine, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación de riesgo o protección, la pregunta no debería limitarse a si el factor existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — tratar un factor de riesgo como si por sí solo explicara o predijera un resultado es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, eso es literalmente priorizar lo modificable por sobre lo que no lo es.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que un factor de riesgo determine lo que le va a pasar a una persona: aumenta una probabilidad, no predice un destino individual.',
          'No es que un factor protector garantice que nada va a salir mal: puede disminuir exposición, mejorar la respuesta o favorecer la recuperación, pero tampoco funciona de forma universal.',
          'No es mirar solo los déficits de una persona o una comunidad: una lectura equilibrada también identifica las redes, los saberes y los referentes que ya existen como activos preventivos.',
          'No es intervenir sobre lo que no se puede cambiar: la edad o la historia previa explican parte de una situación, pero la prioridad son el acompañamiento, las configuraciones, los procedimientos y las capacidades, que sí son modificables.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona, o qué parte de una institución, está en juego frente a este factor de riesgo o protección.',
        '**¿Qué condiciones sociotécnicas intervienen?** Qué configuración de factores —no uno solo— está presente, y cuáles de esos factores son modificables y cuáles no.',
        '**¿Qué cambio sería proporcionado?** El propósito no es producir una respuesta idéntica para todos los casos, sino priorizar la intervención sobre lo que puede modificarse, apoyándose en las fortalezas ya existentes, no solo en corregir déficits.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una estudiante de tercer año cambió de escuela a mitad de año, después de una mudanza familiar complicada. El equipo docente se entera de que, en su escuela anterior, había tenido un período de ausentismo y bajo rendimiento, coincidiendo con esa mudanza. Antes de que la estudiante dé su primera clase en la escuela nueva, ya circula entre algunos docentes la idea de que "viene con problemas" y que "hay que estar atentos porque seguro repite". Nadie habló todavía con ella ni con su familia sobre cómo está hoy.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: un dato real —el ausentismo y el bajo rendimiento en la escuela anterior— se transformó en una expectativa fija sobre el futuro de la estudiante, antes de que nadie evaluara su situación actual. Participan la estudiante, que todavía no tuvo oportunidad de mostrar cómo está ahora; el equipo docente, que ya se formó una idea antes de conocerla; y la escuela anterior, cuya información llegó sin contexto sobre qué cambió desde entonces.',
        ],
        nota: '*(Acá me pregunto: ¿ese dato describe cómo está la estudiante hoy, o describe una situación de hace varios meses que puede haber cambiado por completo?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: la estudiante está siendo tratada como un pronóstico cerrado a partir de factores que, en su mayoría, no son modificables desde la escuela —la mudanza ya pasó, el ausentismo anterior ya pasó—. Eso es exactamente lo que el capítulo advierte: un factor de riesgo aumenta probabilidad, no predice destino individual.',
          'Qué condiciones sociotécnicas intervienen: la información llegó de la escuela anterior sin ningún contexto sobre si la situación familiar se estabilizó, y el equipo nuevo no tiene todavía ningún dato propio sobre cómo está la estudiante ahora —su vínculo con la escuela nueva, su red de apoyo actual, cómo está viviendo la mudanza hoy—. Se está actuando sobre lo no modificable (la historia) en vez de sobre lo que sí podría modificarse: el acompañamiento que la escuela nueva puede ofrecerle desde el primer día.',
        ],
        nota: '*(Acá me pregunto: de todo lo que sabemos sobre esta estudiante, ¿cuánto es historia que ya pasó y cuánto es información real sobre cómo está hoy?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: en vez de partir de una expectativa fija basada en la historia previa, alguien del equipo podría conversar con la estudiante y su familia para entender cómo está la situación hoy, y ofrecer desde el principio un acompañamiento accesible —un referente claro en la escuela, chequeos periódicos informales— sin anunciarlo como una medida especial por "antecedentes". Eso es intervenir sobre lo modificable: el acompañamiento y la configuración del entorno escolar nuevo, no sobre la historia que ya no se puede cambiar.',
        ],
        nota: '*(Acá me pregunto: si el primer contacto con esta estudiante fuera preguntarle cómo está, en vez de vigilarla por lo que pasó antes, ¿cambiaría algo de cómo empieza este año para ella?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al equipo docente: no le corresponde ignorar que hubo una mudanza difícil ni fingir que no tiene ninguna relevancia — es información real que puede ayudar a entender el contexto. Tampoco le corresponde sentir que cualquier mención de la historia previa de un estudiante es, en sí misma, un error.',
          'Qué podría salir mal: que la expectativa negativa se mantenga sin que nadie la cuestione, y termine afectando cómo distintos docentes tratan a la estudiante a lo largo del año —lo que a veces alimenta justamente el resultado que se temía—; o que, para evitar ese error, la escuela decida no compartir nunca información de pases entre instituciones, perdiendo contexto que podría ser útil si se usa bien. Lo que ajustaría para la próxima vez: que la información de pase entre escuelas vaya siempre acompañada de la pregunta "¿qué cambió desde entonces?", y que cualquier acompañamiento se decida después de conocer la situación actual, no antes.',
        ],
        nota: '*(Acá me pregunto: ¿cuántas otras veces un dato del pasado de un estudiante se convirtió, en esta escuela, en una expectativa fija antes de que alguien preguntara cómo está hoy?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué tipo de factor está en juego: no modificable (edad/historia), modificable (acompañamiento/procedimientos), o fortaleza/activo comunitario. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un docente comenta, al pasar, que cierto curso "es complicado" porque la mayoría de los estudiantes tiene entre 13 y 14 años, "una edad difícil". Lo dice como si eso ya explicara cualquier conflicto que surja en ese curso durante el año.',
        analisis:
          '¿Qué tipo de factor está en juego acá? No modificable (edad/historia). La edad de los estudiantes es exactamente el tipo de factor que puede explicar parte de una situación —hay dinámicas propias de la adolescencia temprana— pero sobre el que ninguna estrategia escolar puede actuar: nadie puede cambiar la edad de un curso. Usarla como explicación suficiente de cualquier conflicto desvía la atención de lo que sí se podría trabajar, como el acompañamiento o las normas de convivencia de ese curso en particular.',
        nota: '*(Si elegiste "modificable" o "fortaleza": la edad en sí no entra en esas categorías — lo que sí sería modificable es cómo la escuela acompaña a un curso de esa edad, que es una pregunta distinta a la que se está haciendo acá.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una escuela nota que varios estudiantes de un mismo curso faltan seguido los lunes. En vez de asumir que "son así", el equipo decide revisar si hay algo en la organización semanal —una materia, un horario, una dinámica de entrega de tareas— que esté funcionando como desincentivo, y ajustarlo.',
        analisis:
          '¿Qué tipo de factor está en juego acá? Modificable (acompañamiento/procedimientos). El ausentismo de los lunes no se trató como una característica fija de esos estudiantes, sino como algo posiblemente ligado a una configuración institucional —horarios, organización semanal— que la escuela sí puede revisar y ajustar. Es exactamente el tipo de factor donde una intervención tiene sentido, porque está dentro de lo que la institución puede modificar.',
        nota: '*(Si elegiste "no modificable": tratar el ausentismo como un rasgo fijo de esos estudiantes es justo la lectura que el equipo evitó — por eso buscaron primero qué condición institucional podían ajustar.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Una comunidad barrial tiene, desde hace años, un grupo de vecinos que organiza actividades para chicos y chicas después del horario escolar, de forma informal y sin ningún programa oficial detrás. Una escuela de la zona, al planificar una estrategia de prevención, decide apoyarse en ese grupo en vez de crear un programa nuevo desde cero.',
        analisis:
          '¿Qué tipo de factor está en juego acá? Fortaleza o activo comunitario. El grupo de vecinos ya es una red, un saber y un referente que existe en la comunidad. Apoyarse en él, en vez de ignorarlo y empezar de cero, es exactamente la lectura equilibrada que identifica fortalezas y no solo déficits — y además aumenta la sostenibilidad de la estrategia, porque se apoya en algo que la comunidad ya sostiene por sí misma.',
        nota: '*(No hay una sola respuesta esperada en este caso: también podría decirse que parte del trabajo de la escuela sería modificable —cómo coordina con ese grupo—, pero lo que define la situación es que el punto de partida es una fortaleza ya existente, no un déficit a resolver.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el caso de la estudiante que cambió de escuela después de una mudanza difícil. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Con ese historial de ausentismo y bajo rendimiento, es lógico esperar que esta estudiante repita el año. Hay que estar preparados para eso desde ahora.',
      citaB:
        'No deberíamos haber recibido esa información de la escuela anterior. Mencionar su historia es etiquetarla, así que mejor actuamos como si no supiéramos nada.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** convierte un factor de riesgo no modificable —una historia previa— en un pronóstico cerrado sobre el futuro de la estudiante. Es exactamente lo que el capítulo advierte que hay que evitar: un factor de riesgo aumenta probabilidad, no predice destino individual.',
      errorB:
        '**Análisis B** comete el error opuesto: descarta por completo información real que podría ayudar a entender el contexto, en nombre de no etiquetar. El problema no es conocer la historia de la estudiante: es qué se hace con esa información. Ignorarla del todo también puede dejar a la escuela sin elementos para ofrecer un acompañamiento pertinente si realmente hace falta.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno distingue entre un factor no modificable que puede dar contexto y una intervención dirigida a lo que sí se puede modificar. Uno convierte la historia en destino; el otro, por evitar ese error, descarta la historia entera y pierde información que podría ser útil si se usa bien.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'entender que riesgo y protección son probabilidades y configuraciones, no destinos individuales',
        enunciado: 'Un estudiante tiene un factor de riesgo identificado en su historia familiar. Según el capítulo, ¿qué significa eso?',
        opciones: [
          { id: 'a', texto: 'Que ese factor aumenta una probabilidad, sin predecir por sí solo un destino individual.' },
          { id: 'b', texto: 'Que es prácticamente seguro que ese estudiante va a tener problemas más adelante.' },
          { id: 'c', texto: 'Que no hace falta prestarle ninguna atención particular, porque los factores de riesgo no influyen realmente.' },
          { id: 'd', texto: 'Que ese estudiante debería ser tratado de forma distinta a sus compañeros desde ahora.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Tratar un factor de riesgo como una certeza es justo el error que el capítulo advierte: aumenta probabilidad, no predice destino.',
          c: 'El capítulo no dice que los factores de riesgo no influyan: sí influyen en la probabilidad, solo que no la determinan por completo.',
          d: 'Un factor de riesgo no justifica, por sí solo, un trato diferenciado permanente: eso sería convertir un dato de probabilidad en una etiqueta fija.',
        },
      },
      {
        objetivo: 'priorizar factores modificables sobre los que no lo son',
        enunciado:
          'Una escuela nota que varios estudiantes faltan seguido un mismo día de la semana y decide revisar si algo en la organización semanal explica ese patrón. ¿Por qué esta es una intervención bien dirigida, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Porque se dirige a la edad de los estudiantes, que es el factor más importante a considerar siempre.' },
          {
            id: 'b',
            texto: 'Porque se dirige a una configuración institucional modificable, en vez de tratar el ausentismo como un rasgo fijo de esos estudiantes.',
          },
          { id: 'c', texto: 'Porque ignora por completo cualquier factor de riesgo relacionado con la familia.' },
          { id: 'd', texto: 'Porque se concentra en la historia previa de los estudiantes antes de actuar.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'La edad no es el factor que esta escuela está revisando, y tampoco es, en general, un factor sobre el que una estrategia pueda intervenir directamente.',
          c: 'La escuela no ignora otros factores: simplemente empieza por revisar lo que puede modificar, sin negar que puedan existir otras causas.',
          d: 'Es justo lo contrario: la escuela se dirige a una configuración actual y modificable, no a la historia previa de los estudiantes.',
        },
      },
      {
        objetivo: 'identificar fortalezas y activos preventivos de una comunidad, no solo sus déficits',
        enunciado:
          'Una escuela decide apoyarse en un grupo de vecinos que ya organiza actividades informales para chicos del barrio, en vez de crear un programa de prevención desde cero. ¿Qué principio del capítulo refleja esta decisión?',
        opciones: [
          { id: 'a', texto: 'Que las comunidades solo tienen déficits que las instituciones deben resolver desde afuera.' },
          { id: 'b', texto: 'Que la escuela debería reemplazar al grupo de vecinos con un programa propio lo antes posible.' },
          { id: 'c', texto: 'Que los programas informales no tienen ningún valor frente a un programa institucional nuevo.' },
          {
            id: 'd',
            texto:
              'Que una lectura equilibrada identifica déficits y fortalezas, y que las comunidades poseen redes, saberes y referentes que pueden convertirse en activos preventivos.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Es exactamente la lectura que el capítulo pide evitar: mirar solo déficits ignora las fortalezas que ya existen en una comunidad.',
          b: 'Reemplazar algo que ya funciona, en vez de apoyarse en ello, es precisamente el tipo de enfoque paternalista que el capítulo dice que conviene reducir.',
          c: 'El capítulo no desvaloriza lo informal: reconoce que esas redes ya existentes pueden ser activos preventivos tan válidos como un programa institucional.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura trasladable a distintos contextos',
        enunciado: 'Frente a una situación de riesgo o protección, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
        opciones: [
          { id: 'a', texto: 'Qué cambio sería proporcionado → qué dimensión está comprometida → qué condiciones sociotécnicas intervienen.' },
          { id: 'b', texto: 'Qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado → qué dimensión está comprometida.' },
          {
            id: 'c',
            texto:
              'Qué dimensión humana o institucional está comprometida → qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado.',
          },
          { id: 'd', texto: 'Qué factor de riesgo hay → quién lo causó → qué sanción corresponde.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El orden está invertido: el capítulo propone identificar primero qué está comprometido, y recién al final decidir qué cambio sería proporcionado.',
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
        muestra: 'Trata un factor de riesgo como un destino fijo para la persona, o ignora cualquier factor de riesgo real para evitar "etiquetar".',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión qué factores son modificables y cuáles no.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue factores modificables de los que no lo son, identifica fortalezas además de déficits, y propone una intervención dirigida a lo que efectivamente puede cambiarse.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una comunidad tiene activos preventivos propios que pueden fortalecer una estrategia, y evita tanto el pronóstico fijo como el paternalismo.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué riesgo y protección son probabilidades y no destinos, la prioridad de lo modificable sobre lo que no lo es, y la lectura equilibrada entre déficits y fortalezas. Lo que cambia, a partir de acá, es cómo mirás un factor de riesgo cuando aparece: como un dato que aumenta una probabilidad, no como una sentencia sobre quién es alguien.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde un factor de riesgo o protector esté en juego, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —y cuáles de ellas son modificables— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: el estudiante cuya historia familiar empezó a funcionar como un pronóstico cerrado sobre su futuro. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de ese trato identificás ahora como tratar un factor de riesgo como destino? ¿Qué harías distinto la próxima vez que un dato sobre la historia de alguien empiece a circular como si ya explicara todo? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'El modelo ecológico: entender el riesgo en varios niveles a la vez',
      objetivo:
        'Comprender el modelo ecológico de cuatro niveles —individual, relacional, comunitario y social— para analizar situaciones de riesgo sin reducirlas a una única causa ni a una sola persona responsable.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Ningún problema de riesgo o protección se explica por un solo factor ni por un solo nivel. El modelo ecológico, desarrollado por la Organización Mundial de la Salud, propone mirar cuatro niveles a la vez, que se ordenan según su cercanía con la persona.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El nivel individual examina los factores biológicos y de la historia personal: edad, antecedentes, características propias. El nivel relacional investiga el modo en que las relaciones más cercanas —familia, amistades, pares— influyen en la situación. El nivel comunitario analiza los contextos donde se dan las relaciones sociales —la escuela, el barrio, los espacios compartidos— y qué características de esos contextos aumentan o reducen un riesgo. El nivel social examina los factores más amplios que generan el clima en el que ocurre todo lo anterior: normas culturales, políticas públicas, desigualdades estructurales.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Usar este modelo evita dos errores opuestos. El primero es reducir cualquier situación de riesgo al nivel individual, como si todo dependiera únicamente de la persona afectada. El segundo es explicarlo todo por el nivel social, como si la persona y su entorno cercano no tuvieran ninguna incidencia. El modelo ecológico pide mirar los cuatro niveles juntos, porque la mayoría de las situaciones reales combina factores de varios de ellos al mismo tiempo — y porque una intervención que actúa en un solo nivel, ignorando los demás, suele ser insuficiente.',
        },
      ],
      preguntaDetonadora: 'Cuando algo sale mal en la escuela, ¿solemos mirar los cuatro niveles, o nos quedamos en uno solo —casi siempre el individual— y ahí paramos de buscar?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿En qué nivel miramos primero?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá una situación breve de riesgo digital ya vista en esta temática (por ejemplo, la del estudiante etiquetado por su historia familiar). En grupos, identifican espontáneamente a qué nivel atribuirían la situación primero, antes de conocer el modelo ecológico completo.',
            },
            {
              tipo: 'parrafo',
              texto: '→ Después de presentar los cuatro niveles, vuelven sobre la misma situación: ¿qué niveles no habían considerado al principio?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Los cuatro niveles de una situación real" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen una situación de riesgo digital trabajada en esta u otra temática de la plataforma.',
                'Para esa situación, completan los cuatro niveles del modelo ecológico: qué factor individual está presente, qué factor relacional, qué factor comunitario y qué factor social.',
                'Identifican, para cada nivel, si hay algo modificable en el que la escuela, la familia o la comunidad podrían intervenir.',
                'Presentan su análisis de los cuatro niveles al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: 'Ningún riesgo vive en un solo nivel. Mirar los cuatro a la vez es la diferencia entre entender una situación y simplificarla.',
      glosario: ['Modelo ecológico', 'Nivel individual', 'Nivel relacional', 'Nivel comunitario', 'Nivel social'],
      referencias: [
        'Organización Panamericana de la Salud / Organización Mundial de la Salud (2002). Informe mundial sobre la violencia y la salud: resumen. Washington, D.C.: OPS.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien la diferencia entre reconocer un factor de riesgo y tratarlo como si ya definiera el destino de una persona?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Riesgo y Protección Digital, en una tarjeta',
      parrafos: [
        'Un factor de riesgo aumenta probabilidad y no predice destino individual. Un factor protector puede disminuir exposición, mejorar respuesta o favorecer recuperación, pero tampoco funciona de forma universal. La prevención necesita trabajar con configuraciones y evitar convertir personas en pronósticos.',
        '**Modificabilidad:** la edad o la historia previa pueden explicar parte de una situación sin ser variables sobre las que una estrategia pueda actuar. El acompañamiento, las configuraciones, los procedimientos y las capacidades sí pueden modificarse.',
        '**Déficits y fortalezas:** las comunidades poseen redes, saberes y referentes que pueden convertirse en activos preventivos. Intervenir sobre capacidades presentes aumenta sostenibilidad y reduce enfoques paternalistas.',
        '**El método, en tres preguntas:** qué dimensión humana o institucional está comprometida, qué condiciones sociotécnicas intervienen, qué cambio sería proporcionado.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Seguridad. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referenciasLista: ['Urie Bronfenbrenner', 'CDC', 'OMS', 'Robert Gordon', 'Institute of Medicine'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Riesgo y protección: trabajar con probabilidades no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[RIESGO_PROTECCION_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
