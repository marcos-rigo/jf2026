// Contenido de /tematicas/gobiernos-locales-y-administracion-publica. Misma forma que
// lib/riesgo-proteccion-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/gobiernos-locales/ficha-aula';

export const GOBIERNOS_LOCALES_FALLBACK: Audiencia = 'docentes';

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
  { id: 'gobierno-abierto-y-cercania', number: '05', label: 'Gobierno abierto y cercanía', shortLabel: 'Gobierno abierto' },
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
  gobiernoAbiertoYCercania: {
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
    titulo: 'Gobiernos Locales y Administración Pública',
    subtitulo: 'De digitalizar trámites a garantizar derechos',
    bajada:
      'La digitalización pública puede reducir tiempos y costos, pero cuando un servicio esencial se vuelve inaccesible, la barrera tecnológica se convierte en barrera para derechos. El Estado debe observar quién queda fuera y por qué, incorporando asistencia, accesibilidad y alternativas razonables. Esta temática forma parte del grupo Gobierno y Comunidad Digital de la plataforma y trabaja esa distinción: la eficiencia de un trámite digital no es un fin en sí mismo, sino una herramienta que tiene que seguir garantizando el derecho que ese trámite existía para resolver.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que la accesibilidad es una condición de derechos, no un detalle técnico: cuando un servicio esencial se digitaliza sin alternativa para quien no puede usarlo, la barrera tecnológica se convierte en una barrera para ejercer un derecho.',
      'Reconocer la capacidad especial que tienen los gobiernos locales para articular actores y construir políticas territoriales, y cómo el gobierno abierto agrega transparencia, participación, colaboración y rendición de cuentas a la eficiencia digital, para que la transformación pública no sea sinónimo de automatización administrativa.',
      'Comprender que, cuando el Estado utiliza algoritmos o inteligencia artificial, la responsabilidad no se transfiere al proveedor: la administración necesita capacidad para gobernar aquello que utiliza, explicar sus decisiones proporcionadamente al impacto que tienen, y ofrecer mecanismos de revisión.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer cuándo una barrera tecnológica se convierte en barrera para derechos, e identificar qué alternativas razonables corresponden para que un servicio esencial siga siendo accesible.',
      'Entender la capacidad especial que tienen los gobiernos locales para articular actores y construir políticas territoriales, por su cercanía con la comunidad.',
      'Distinguir una transformación pública real —con transparencia, participación, colaboración y rendición de cuentas— de la mera automatización administrativa, que digitaliza procesos sin incorporar esos pilares.',
      'Comprender que la responsabilidad del Estado por los sistemas algorítmicos que utiliza no se transfiere al proveedor, y qué exige eso en términos de capacidad para gobernarlos, explicar decisiones proporcionadamente al impacto y ofrecer mecanismos de revisión.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Eficiencia para quién?',
    parrafos: [
      'Una mujer de setenta años necesita renovar un trámite para seguir cobrando una pensión. El municipio digitalizó todo el proceso el año pasado: ahora se hace completo a través de una aplicación, con turno online, carga de documentos escaneados y seguimiento por correo electrónico. Ella no tiene smartphone, no tiene correo electrónico, y la última vez que intentó pedir ayuda en la oficina municipal le dijeron que "ahora todo es por la app". Pasaron tres meses y su trámite sigue sin iniciarse, no porque no tenga derecho a la pensión, sino porque no tiene cómo completar el único canal que quedó disponible.',
      'Nadie en el municipio decidió, de forma explícita, dejarla afuera. La digitalización se pensó para ahorrar tiempo y costos, y en la mayoría de los casos lo logra. Pero cuando un servicio esencial se vuelve inaccesible para alguien, la barrera tecnológica deja de ser un problema de eficiencia y se convierte en una barrera para ejercer un derecho — en este caso, el derecho a cobrar lo que le corresponde. El problema no es haber digitalizado el trámite: es haberlo digitalizado sin preguntarse, antes, quién iba a quedar fuera y qué alternativa razonable necesitaba.',
    ],
    problema:
      'Pensá en algún trámite público, digital o presencial, que conozcas de tu municipio o tu provincia. ¿Existe hoy una alternativa real para alguien que no pueda usar el canal principal, o esa persona simplemente queda sin forma de completarlo?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La digitalización pública puede reducir tiempos y costos, pero cuando un servicio esencial se vuelve inaccesible, la barrera tecnológica se convierte en barrera para derechos. El Estado debe observar quién queda fuera y por qué, incorporando asistencia, accesibilidad y alternativas razonables — la pregunta no es si conviene digitalizar, sino qué pasa con quien no puede usar ese canal.',
      'Los gobiernos locales poseen especial capacidad para articular actores y construir políticas territoriales. Gobierno abierto añade transparencia, participación, colaboración y rendición de cuentas a la eficiencia digital, evitando que transformación pública sea sinónimo de automatización administrativa — digitalizar un trámite no alcanza por sí solo para transformar la relación entre el Estado y la ciudadanía, si no viene acompañado de esos otros pilares.',
      'Cuando el Estado utiliza algoritmos o IA, la responsabilidad no se transfiere al proveedor. La administración necesita capacidad para gobernar aquello que utiliza, explicar decisiones proporcionadamente al impacto y ofrecer mecanismos de revisión — comprar un sistema no transfiere, junto con él, la responsabilidad por lo que ese sistema decida.',
    ],
    preguntaCierre:
      'Pensá en algún proceso de digitalización pública que conozcas de cerca. ¿Vino acompañado de más transparencia, más participación y más rendición de cuentas, o fue, sobre todo, una forma más rápida de hacer lo mismo de siempre?',
    fichaAula1: {
      titulo: 'Gobierno Abierto en lo local: la Carta Iberoamericana del CLAD',
      objetivo:
        'Conocer los pilares del Gobierno Abierto según la Carta Iberoamericana del CLAD, y reconocer por qué los gobiernos locales tienen un rol especial en su aplicación.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En 2016, el Centro Latinoamericano de Administración para el Desarrollo (CLAD) aprobó la Carta Iberoamericana de Gobierno Abierto, que define el concepto como "el conjunto de mecanismos y estrategias que contribuye a la gobernanza pública y al buen Gobierno, basado en los pilares de la transparencia, participación ciudadana, rendición de cuentas, colaboración e innovación, centrando e incluyendo a la ciudadanía en el proceso de toma de decisiones".',
        },
        {
          tipo: 'parrafo',
          texto:
            'La Carta define cuatro pilares, que funcionan de manera interdependiente. La transparencia implica tanto el derecho de acceso a la información pública como la obligación de los gobiernos de publicar proactivamente información sobre sus actividades y el uso de recursos. La rendición de cuentas obliga a las autoridades a fundamentar sus acciones y responder por los resultados obtenidos, en sus dimensiones horizontal (entre agencias), vertical (de cara a la ciudadanía) y diagonal (participación ciudadana en el control social). La participación ciudadana es el proceso de construcción social de políticas públicas que refuerza la posición activa de la ciudadanía, con distintos niveles —informativo, consultivo, decisorio y de cogestión—. La colaboración e innovación pública genera espacios de encuentro y trabajo conjunto para la cocreación de soluciones, dejando atrás la idea de una ciudadanía receptora pasiva.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La Carta dedica una sección específica a los gobiernos subnacionales y municipios abiertos, reconociendo que, "dada su proximidad, el rol que cumplen en el espacio territorial y la cercanía a las necesidades de la población, los Gobiernos subnacionales y locales son una pieza fundamental en un modelo integral de Gobierno Abierto". Señala que ya existen muchas experiencias locales exitosas de apertura en Iberoamérica, y que ese nivel de proximidad con la ciudadanía es clave para el desarrollo de iniciativas de Gobierno Abierto en la región.',
        },
      ],
      preguntaDetonadora:
        'Si tu municipio o provincia digitalizó un trámite el último año, ¿ese cambio vino acompañado de más transparencia, más participación y más rendición de cuentas, o fue solo un canal más rápido para lo mismo de siempre?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Cuál de los cuatro pilares falta?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'Presentá los cuatro pilares (transparencia, rendición de cuentas, participación, colaboración).',
            },
            {
              tipo: 'parrafo',
              texto:
                'En grupos, piensan en un trámite o servicio digital de su municipio o provincia, y evalúan cuáles de los cuatro pilares están presentes y cuáles faltan.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestra propuesta de Gobierno Abierto local" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un servicio público de su localidad que podría digitalizarse o mejorarse.',
                'Diseñan una propuesta que incorpore explícitamente los cuatro pilares: cómo se haría transparente, cómo rendiría cuentas, cómo incluiría participación ciudadana, y cómo se abriría a la colaboración con la comunidad.',
                'Agregan, además, qué alternativa razonable tendría alguien que no pudiera usar el canal digital principal.',
                'Presentan su propuesta al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"Gobierno Abierto no es un portal más rápido. Es una forma distinta de gobernar: por, para y con la ciudadanía."',
      glosario: ['Gobierno Abierto', 'Transparencia activa y pasiva', 'Rendición de cuentas', 'Participación ciudadana', 'Municipio abierto'],
      referencias: ['CLAD — Centro Latinoamericano de Administración para el Desarrollo (2016). Carta Iberoamericana de Gobierno Abierto.'],
    },
  },
  gobiernoAbiertoYCercania: {
    titulo: 'Gobierno abierto y cercanía',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la digitalización pública modifica la forma de ejercer derechos. Eficiencia, automatización y datos deben evaluarse junto con inclusión, comprensibilidad, revisión y canales alternativos. El Estado conserva responsabilidad por los sistemas que compra o implementa.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una digitalización de un servicio público, la pregunta no debería limitarse a si el trámite ahora es más rápido, sino a reconstruir quién puede usarlo, quién queda fuera, qué condiciones lo explican, y qué evidencia permite distinguir una mejora real de una que solo luce mejor.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — asumir que un trámite digitalizado es, automáticamente, un trámite mejorado, sin preguntar quién quedó fuera, es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — acá, eso significa que ni la ciudadanía sola tiene que "aprender a usar" cada nuevo canal, ni el Estado puede digitalizar sin pensar en quién queda afuera.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que digitalizar un trámite sea, en sí mismo, una mejora: cuando un servicio esencial se vuelve inaccesible, la barrera tecnológica se convierte en barrera para derechos.',
          'No es que cualquier canal digital reemplace la cercanía territorial: los gobiernos locales tienen una capacidad especial para articular actores y construir políticas territoriales que no se reemplaza con una aplicación.',
          'No es que automatizar procesos equivalga a transformación pública: el gobierno abierto agrega transparencia, participación, colaboración y rendición de cuentas a la eficiencia digital, que son justamente lo que la automatización sola no garantiza.',
          'No es que comprar o contratar un sistema algorítmico traslade la responsabilidad a quien lo proveyó: el Estado necesita capacidad propia para gobernar lo que utiliza.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué derecho o qué proceso público está en juego, y quién podría quedar fuera de la forma en que está diseñado hoy.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si el servicio incorpora asistencia, accesibilidad y alternativas razonables; si la digitalización vino acompañada de transparencia, participación, colaboración y rendición de cuentas; y si, cuando hay un algoritmo involucrado, existe capacidad real para explicarlo y revisarlo.',
        '**¿Qué cambio sería proporcionado?** Un cambio que no retroceda en la eficiencia lograda, pero que incorpore lo que falta —una alternativa, un canal de participación, un mecanismo de revisión— para que nadie quede fuera de un derecho por un diseño que no lo contempló.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un municipio digitaliza por completo el trámite de inscripción a un programa de ayuda alimentaria: turno, carga de documentación y seguimiento, todo a través de una aplicación. El tiempo promedio de gestión baja de tres semanas a tres días, y el equipo técnico celebra el resultado. Seis meses después, un informe del área social muestra que las inscripciones bajaron un 20% respecto del año anterior, justo en los barrios con menor conectividad y menor proporción de smartphones. El programa está más rápido que nunca, pero llega a menos gente que antes.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la digitalización logró exactamente lo que buscaba —reducir tiempos y costos de gestión—, pero al concentrar todo el proceso en un único canal digital, dejó fuera a una parte de la población que el programa estaba destinado a alcanzar. Participan el equipo técnico que diseñó la digitalización, con buena intención y resultados medibles de eficiencia; las familias que antes accedían presencialmente y hoy no pueden completar el trámite; y el municipio, que recién detecta el problema seis meses después, a través de un informe.',
        ],
        nota: '*(Acá me pregunto: si el objetivo del programa es llegar a quienes más lo necesitan, ¿un trámite más rápido que llega a menos gente es, en los hechos, una mejora?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: el acceso a un derecho —la ayuda alimentaria— para una parte de la población que antes lo tenía y ahora no, porque el único canal disponible presupone condiciones (dispositivo, conectividad, habilidad digital) que no todos tienen. Esto es exactamente lo que el capítulo advierte: cuando un servicio esencial se vuelve inaccesible, la barrera tecnológica se convierte en barrera para derechos.',
          'Qué condiciones sociotécnicas intervienen: el diseño del trámite se evaluó únicamente por su eficiencia (tiempo de gestión), sin un indicador que mirara quién podía o no completarlo. No hubo, al digitalizar, ninguna instancia de participación o consulta con las comunidades que más usaban el trámite, que podría haber anticipado el problema antes de que bajaran las inscripciones.',
        ],
        nota: '*(Acá me pregunto: ¿el equipo técnico midió "más rápido para quién pudo hacerlo", o midió "más rápido para todos"? ¿Son lo mismo?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de volver al trámite presencial completo, perdiendo la eficiencia lograda para quienes sí pueden usar el canal digital, sino de incorporar una alternativa razonable para quienes no pueden: un punto de asistencia presencial en los barrios con menor conectividad, donde alguien pueda ayudar a completar la inscripción digital, o un canal telefónico simple para iniciar el trámite. Esto conserva la eficiencia del sistema digital y, al mismo tiempo, restituye el acceso de quienes quedaron fuera.',
        ],
        nota: '*(Acá me pregunto: ¿la alternativa que elijamos tiene que ser un trámite paralelo completo, o alcanza con un punto de asistencia que ayude a usar el mismo canal digital?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al equipo técnico: no le corresponde sentir que digitalizar el trámite fue un error — la mejora en tiempos es real y beneficia a buena parte de la población. Tampoco le corresponde cargar solo con la responsabilidad de no haber previsto el problema, si nadie en el municipio pidió, al momento del diseño, un indicador de accesibilidad.',
          'Qué podría salir mal: que la alternativa se implemente de forma tan burocrática que termine siendo casi tan lenta como el trámite presencial original, perdiendo el sentido de ofrecer una opción real; o que, para simplificar, se elimine la alternativa después de un tiempo "porque ya está la app", repitiendo el mismo problema. Lo que ajustaría para la próxima vez: que cualquier digitalización de un trámite esencial incluya, desde el diseño, un indicador de accesibilidad —no solo de tiempo— y una instancia de consulta con las comunidades que más lo usan, antes de lanzar el canal único.',
        ],
        nota: '*(Acá me pregunto: ¿qué otros trámites de mi municipio se evalúan hoy solo por la velocidad, sin que nadie mida a quién dejan afuera?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué está en juego: accesibilidad y alternativas razonables, gobierno abierto frente a automatización, o responsabilidad algorítmica del Estado. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un municipio reemplaza la atención presencial de un trámite de licencias de conducir por un sistema exclusivamente digital, sin ningún canal alternativo para personas mayores, personas con discapacidad visual que no pueden usar la plataforma, o quienes no tienen conexión a internet en su casa.',
        analisis:
          '¿Qué está en juego acá? Accesibilidad y alternativas razonables. El problema central es que un servicio esencial se volvió inaccesible para parte de la población, sin que exista ninguna alternativa razonable. Es exactamente el tipo de situación que el capítulo describe: la barrera tecnológica se convierte en barrera para ejercer un derecho, en este caso, el derecho a tramitar la licencia.',
        nota: '*(Si elegiste "gobierno abierto" o "responsabilidad algorítmica": en esta situación no hay ningún proceso participativo ni ningún algoritmo involucrado — el problema es, puntualmente, la falta de una vía alternativa para quien no puede usar el canal digital.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una provincia digitaliza su sistema de compras públicas, reduciendo significativamente los tiempos de adjudicación. Sin embargo, no publica ninguna información sobre los criterios de selección de proveedores, no habilita ningún canal de consulta ciudadana sobre el proceso, y las decisiones de adjudicación no quedan documentadas de forma accesible para control externo.',
        analisis:
          '¿Qué está en juego acá? Gobierno abierto frente a automatización. El sistema es más rápido, pero la transformación se quedó solo en la automatización: no incorporó transparencia (no se publican los criterios), ni rendición de cuentas (no hay documentación accesible), ni participación (no hay canal de consulta). Es exactamente la distinción que señala el capítulo: automatizar no es lo mismo que transformar con los pilares del gobierno abierto.',
        nota: '*(Si elegiste "accesibilidad" o "responsabilidad algorítmica": el sistema sí es accesible para quienes necesitan usarlo, y no hay ningún algoritmo decidiendo nada en esta situación — lo que falta es, específicamente, transparencia, participación y rendición de cuentas.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un municipio implementa un sistema automatizado, desarrollado por una empresa privada, para priorizar a quién se le otorgan turnos en un programa de vivienda social con alta demanda. Cuando una familia pregunta por qué no fue seleccionada, el municipio responde que "eso lo decide el sistema" y que deberían consultarle a la empresa que lo desarrolló.',
        analisis:
          '¿Qué está en juego acá? Responsabilidad algorítmica del Estado. El municipio está tratando de transferir al proveedor privado una responsabilidad que, según el capítulo, no se transfiere: cuando el Estado utiliza algoritmos o IA, sigue siendo quien tiene que poder explicar la decisión proporcionadamente al impacto que tiene sobre esa familia, y ofrecer un mecanismo de revisión. Derivar la pregunta a la empresa es, exactamente, el error que el capítulo advierte.',
        nota: '*(No hay una sola forma de resolver este caso, pero sí está claro que no corresponde que el municipio se desentienda: la responsabilidad de explicar y revisar la decisión sigue siendo suya, haya o no comprado el sistema a un tercero.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos funcionarios distintos sobre la digitalización de trámites en su municipio. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Cualquier trámite que digitalicemos va a dejar a alguien afuera. Mejor no digitalizamos nada y seguimos con todo presencial, así nos aseguramos de que nadie quede excluido.',
      citaB:
        'Si la mayoría de la gente ya tiene celular, no hace falta mantener ninguna alternativa presencial. Los que no se adapten van a tener que aprender a usar la aplicación.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** rechaza cualquier digitalización por el riesgo de exclusión, perdiendo los beneficios reales de reducir tiempos y costos para la gran mayoría de la ciudadanía que sí puede usar un canal digital. El capítulo no plantea evitar la digitalización: plantea incorporar asistencia, accesibilidad y alternativas razonables, no renunciar a la eficiencia por completo.',
      errorB:
        '**Comentario B** comete el error opuesto: digitaliza sin ninguna alternativa para quien queda afuera, y además le traslada la responsabilidad de esa exclusión a la propia persona excluida ("van a tener que aprender"). Es exactamente la situación que el capítulo describe como barrera tecnológica convertida en barrera para derechos, sin ningún intento de resolverla.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno busca el equilibrio entre eficiencia y accesibilidad que el capítulo pide. Uno renuncia a toda la eficiencia por miedo a excluir; el otro acepta la exclusión como costo aceptable de la eficiencia.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer cuándo una barrera tecnológica se convierte en barrera para derechos, e identificar qué alternativas razonables corresponden',
        enunciado:
          'Un municipio digitaliza por completo un trámite esencial, sin ofrecer ninguna alternativa para quienes no tienen dispositivo o conexión. ¿Qué dice el capítulo sobre esta situación?',
        opciones: [
          {
            id: 'a',
            texto:
              'La barrera tecnológica se convierte en barrera para derechos, y el Estado debe observar quién queda fuera y por qué, incorporando asistencia, accesibilidad y alternativas razonables.',
          },
          { id: 'b', texto: 'No hay ningún problema, porque la mayoría de la población sí puede usar el canal digital.' },
          { id: 'c', texto: 'El problema se resuelve solo con el tiempo, a medida que más personas adquieran dispositivos.' },
          { id: 'd', texto: 'La responsabilidad de adaptarse al canal digital es exclusivamente de cada ciudadano.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no evalúa esto en términos de mayoría: para quien queda fuera, el servicio esencial se vuelve inaccesible, y eso constituye una barrera para su derecho, sin importar cuántas personas sí puedan usarlo.',
          c: 'El capítulo no plantea esto como un problema que se resuelve solo con el paso del tiempo: exige una acción activa del Estado, incorporando asistencia y alternativas, no esperar a que la brecha se cierre por sí sola.',
          d: 'El capítulo traslada la responsabilidad al Estado, no a la ciudadanía: es quien digitalizó el servicio quien debe observar y resolver quién queda fuera.',
        },
      },
      {
        objetivo: 'entender la capacidad especial de los gobiernos locales para articular actores y políticas territoriales',
        enunciado: 'Según el capítulo, ¿qué característica particular tienen los gobiernos locales que los distingue en materia de gobierno abierto?',
        opciones: [
          { id: 'a', texto: 'Tienen menos recursos que los gobiernos nacionales, por lo que no pueden implementar políticas de gobierno abierto.' },
          { id: 'b', texto: 'Poseen especial capacidad para articular actores y construir políticas territoriales, por su cercanía con la comunidad.' },
          { id: 'c', texto: 'No tienen ninguna diferencia relevante respecto de otros niveles de gobierno en esta materia.' },
          { id: 'd', texto: 'Solo pueden aplicar políticas que ya fueron diseñadas a nivel nacional, sin ninguna capacidad propia.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo no vincula esta capacidad con el nivel de recursos: la destaca por la proximidad territorial y la posibilidad de articular actores locales.',
          c: 'El capítulo es explícito en señalar una capacidad especial de los gobiernos locales, precisamente por su cercanía con la comunidad.',
          d: 'El capítulo no limita a los gobiernos locales a la mera aplicación de políticas nacionales: les reconoce capacidad propia para construir políticas territoriales.',
        },
      },
      {
        objetivo: 'distinguir una transformación pública real de la mera automatización administrativa',
        enunciado:
          'Una provincia digitaliza un proceso administrativo, logrando reducir significativamente los tiempos de gestión, pero sin publicar información sobre sus criterios ni habilitar ningún canal de participación ciudadana. ¿Qué le falta a este proceso, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: la reducción de tiempos ya es, por sí sola, una transformación pública completa.' },
          { id: 'b', texto: 'Le falta reducir aún más los tiempos de gestión.' },
          {
            id: 'c',
            texto: 'Le falta incorporar transparencia, participación, colaboración y rendición de cuentas, para que la transformación pública no sea solo automatización administrativa.',
          },
          { id: 'd', texto: 'Le falta eliminar por completo cualquier instancia de revisión del proceso.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo distingue explícitamente la eficiencia digital de la transformación pública real: la primera, sin los demás pilares, puede quedar en mera automatización administrativa.',
          b: 'El tiempo de gestión no es lo que falta en este caso: lo que falta son los pilares del gobierno abierto que acompañan a una transformación pública genuina.',
          d: 'El capítulo no propone eliminar instancias de revisión: al contrario, pide más mecanismos de rendición de cuentas y participación, no menos.',
        },
      },
      {
        objetivo: 'comprender que la responsabilidad del Estado por sus sistemas algorítmicos no se transfiere al proveedor',
        enunciado:
          'Un municipio usa un sistema automatizado desarrollado por una empresa privada para decidir sobre un programa social, y ante un reclamo responde que la decisión "la toma el sistema" y deriva la consulta a la empresa. ¿Qué error señala el capítulo en esta respuesta?',
        opciones: [
          { id: 'a', texto: 'Ninguno: la empresa que desarrolló el sistema es la responsable de explicar sus decisiones.' },
          { id: 'b', texto: 'Que el error fue haber usado inteligencia artificial, en lugar de un proceso completamente manual.' },
          { id: 'c', texto: 'Que el municipio debería haber desarrollado el sistema con personal propio, sin contratar a ninguna empresa externa.' },
          {
            id: 'd',
            texto: 'Que la responsabilidad no se transfiere al proveedor: la administración necesita capacidad para gobernar aquello que utiliza, explicar decisiones proporcionadamente al impacto y ofrecer mecanismos de revisión.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo es explícito en que la responsabilidad no se transfiere al proveedor, aunque el sistema haya sido desarrollado por un tercero: sigue siendo del Estado.',
          b: 'El capítulo no cuestiona el uso de algoritmos o IA en sí mismo: cuestiona que su uso no venga acompañado de la responsabilidad y la capacidad de explicación correspondientes.',
          c: 'El capítulo no exige que el Estado desarrolle sus propios sistemas sin contratar proveedores externos: lo que exige es que conserve la capacidad de gobernar y explicar lo que utiliza, sin importar quién lo haya desarrollado.',
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
        muestra: 'Rechaza cualquier digitalización por el riesgo de exclusión, o digitaliza sin ninguna alternativa para quien queda afuera.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión si el problema es de accesibilidad, de gobierno abierto, o de responsabilidad algorítmica.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres dimensiones, identifica cuál está en juego en una situación concreta y propone un cambio proporcionado que conserva la eficiencia lograda.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cuándo el Estado está intentando transferir indebidamente su responsabilidad a un proveedor, y distingue automatización de transformación pública real.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: cuándo una barrera tecnológica se convierte en barrera para derechos, la capacidad especial de los gobiernos locales, la diferencia entre gobierno abierto y mera automatización, y por qué la responsabilidad algorítmica del Estado no se transfiere al proveedor. Lo que cambia, a partir de acá, es cómo mirás cualquier trámite o sistema digital de tu administración pública: no solo si es más rápido, sino a quién le sirve y quién responde por él.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde un servicio o trámite esté digitalizado o automatizado, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay alternativas razonables, si hay gobierno abierto real, si hay responsabilidad algorítmica asumida— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la mujer que no podía renovar su trámite de pensión porque todo el proceso se volvió digital. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué alternativa razonable le faltaba a ese trámite? ¿Qué trámite de tu propio municipio o provincia revisarías con esta misma pregunta? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Gobernanza de la Inteligencia Artificial en la Administración Pública: la agenda del CLAD',
      objetivo:
        'Conocer la línea de trabajo del CLAD sobre gobernanza de la inteligencia artificial en el sector público, y reconocer qué significa evaluar el uso de IA en el Estado desde una perspectiva de confianza, transparencia y derechos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'El Centro Latinoamericano de Administración para el Desarrollo (CLAD) impulsa, desde 2021, una línea de trabajo específica sobre inteligencia artificial y ética en la gestión pública, que se consolidó en su Curso Internacional "Gobernanza de la Inteligencia Artificial en la Administración Pública", aprobado en una reunión del organismo en Varadero, Cuba. El objetivo principal de esta iniciativa es promover un marco compartido para la adopción e implantación de la inteligencia artificial y los algoritmos en el sector público, buscando instalar la inteligencia artificial en la agenda de todos los niveles de gobierno y administración.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta línea de trabajo del CLAD se apoya en referencias internacionales sobre implantación de la inteligencia artificial, como los principios de la OCDE (2023), y toma en cuenta el contexto de regulación de la inteligencia artificial a nivel mundial, incluida la de la Unión Europea (2023). Su lema explícito, "Inteligencia Artificial para el Bien", resume el enfoque: no se trata de frenar la adopción de estas tecnologías en el Estado, sino de gobernarlas con responsabilidad.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Entre sus objetivos centrales está analizar el uso de la inteligencia artificial en el sector público desde una perspectiva de confianza, transparencia y derechos — exactamente la misma idea que sostiene este capítulo cuando dice que la responsabilidad del Estado por sus sistemas algorítmicos no se transfiere al proveedor. Conocer distintos modelos de gobernanza de la inteligencia artificial permite comparar cómo distintos países y niveles de gobierno están resolviendo la misma pregunta: quién responde, y cómo, cuando una decisión pública queda mediada por un algoritmo.',
        },
      ],
      preguntaDetonadora: 'Si tu municipio o provincia usara mañana un sistema de inteligencia artificial para decidir algo que te afecta, ¿a quién le exigirías una explicación: al sistema, a la empresa que lo creó, o al Estado?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Quién responde?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá tres ejemplos breves de uso de IA en el sector público (priorización de turnos, detección de fraude en un trámite, asignación de recursos). En grupos, discuten: si algo sale mal en cada caso, ¿a quién debería poder reclamarle la persona afectada?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñar un mecanismo de revisión" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, retoman uno de los tres ejemplos de la actividad inicial.',
                'Diseñan un mecanismo de revisión concreto: cómo podría una persona afectada por esa decisión pedir una explicación, a quién se dirige ese pedido dentro del Estado, y qué plazo o respuesta razonable debería tener.',
                'Evalúan su propio diseño desde la perspectiva de confianza, transparencia y derechos que propone el CLAD.',
                'Presentan su mecanismo al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: 'Que una decisión la tome un algoritmo no significa que nadie tenga que responder por ella.',
      glosario: ['Gobernanza de la IA', 'Responsabilidad algorítmica', 'Transparencia algorítmica', 'Mecanismo de revisión', 'CLAD'],
      referencias: [
        'CLAD — Centro Latinoamericano de Administración para el Desarrollo. Curso Internacional "Gobernanza de la Inteligencia Artificial en la Administración Pública" (2024).',
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
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien que un trámite más rápido no siempre es un trámite mejor?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Gobiernos Locales y Administración Pública, en una tarjeta',
      parrafos: [
        'La digitalización pública puede reducir tiempos y costos, pero cuando un servicio esencial se vuelve inaccesible, la barrera tecnológica se convierte en barrera para derechos. El Estado debe observar quién queda fuera y por qué, incorporando asistencia, accesibilidad y alternativas razonables.',
        '**Gobierno abierto en lo local:** los gobiernos locales poseen especial capacidad para articular actores y construir políticas territoriales. Gobierno abierto añade transparencia, participación, colaboración y rendición de cuentas a la eficiencia digital, evitando que transformación pública sea sinónimo de automatización administrativa.',
        '**Responsabilidad algorítmica:** cuando el Estado utiliza algoritmos o IA, la responsabilidad no se transfiere al proveedor. La administración necesita capacidad para gobernar aquello que utiliza, explicar decisiones proporcionadamente al impacto y ofrecer mecanismos de revisión.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Gobierno y Comunidad Digital. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referenciasLista: ['John Dewey', 'Elinor Ostrom', 'Beth Noveck', 'Oscar Oszlak'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Gobiernos locales y administración pública no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[GOBIERNOS_LOCALES_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
