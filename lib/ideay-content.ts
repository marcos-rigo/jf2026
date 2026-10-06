// Contenido de /tematicas/ideay. Mismo patrón que lib/ia-criterio-content.ts: escrito
// solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas externas: las referencias de las fichas van como
// texto plano (sin SourceCite). Las negritas/cursivas en formato Markdown (**negrita**,
// *cursiva*) se renderizan con el helper Enfasis de components/ideay/ui.tsx, nunca como
// asteriscos literales.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/ideay/ficha-aula';

export const IDEAY_FALLBACK: Audiencia = 'docentes';

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
  {
    id: 'diagnostico-y-construccion-colectiva',
    number: '05',
    label: 'Diagnóstico y construcción colectiva',
    shortLabel: 'Diagnóstico',
  },
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
    fichaAula1: FichaAulaProps;
  };
  diagnosticoYConstruccionColectiva: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: { subtitulo: string; parrafoPreguntas: string; preguntas: string[] };
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
    parrafo2: string;
    parrafo3: string;
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
    referenciasLista: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'IDEAY+',
    subtitulo: 'De comprender a construir',
    bajada:
      'IDEAY+ ocupa el momento entre comprensión e implementación. La documentación disponible lo presenta como secuencia generativa de prospectiva participativa: parte de capacidades presentes, utiliza escenarios múltiples, incorpora narrativa como dispositivo metodológico y busca cerrar con un primer movimiento concreto. Esta temática forma parte del grupo IDEAY+ de la plataforma y trabaja ese pasaje: todo lo que se entendió a lo largo del Poliedro y de los demás módulos necesita, en algún momento, convertirse en una acción concreta.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender la lógica de partir de capacidades presentes: IDEAY+ no arranca preguntando qué le falta a un grupo, sino qué ya tiene —personas, saberes, vínculos, experiencias— para construir desde ahí, usando narrativa y escenarios múltiples como dispositivos de trabajo.',
      'Reconocer la progresión de adentro hacia afuera que una aplicación documentada de la metodología siguió: personal, institucional y pedagógica, una secuencia que convierte la experiencia en estrategia y después en práctica.',
      'Conocer la arquitectura que la formalización metodológica 2026 le dio a IDEAY+: cuatro movimientos y doce lienzos, una evolución explícita que debe documentarse y validarse sin atribuirla retroactivamente a versiones anteriores del método.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer la lógica generativa de IDEAY+: partir de capacidades presentes, usar narrativa como dispositivo metodológico, trabajar con escenarios múltiples y buscar cerrar siempre con un primer movimiento concreto, no con un diagnóstico que se queda sin acción.',
      'Aplicar la progresión de adentro hacia afuera —personal, institucional, pedagógica— que convierte la experiencia en estrategia y después en práctica, tal como la organizó una aplicación documentada del método.',
      'Identificar los cuatro movimientos (ANCLAR, COMPRENDER, IMAGINAR, ACTIVAR) y los doce lienzos de la arquitectura metodológica 2026 de IDEAY+, reconociendo qué operación metodológica cumple cada uno.',
      'Usar este capítulo como lente de lectura para diseñar un proceso propio de construcción colectiva, identificando qué dimensión está comprometida, qué condiciones sociotécnicas intervienen y qué cambio sería proporcionado.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Empezamos por lo que falta, o por lo que ya tenemos?',
    parrafos: [
      'Un equipo docente se reúne para pensar cómo mejorar la convivencia en la escuela. La reunión arranca, como casi siempre, con una lista de problemas: falta de recursos, familias que no se involucran, estudiantes desmotivados, infraestructura vieja, poco tiempo para planificar. A los veinte minutos, la lista de carencias ocupa todo el pizarrón, y en la sala empieza a instalarse un clima pesado, casi de resignación. Alguien dice, medio en broma, medio en serio: "con todo esto en contra, ¿para qué nos juntamos?". Nadie mencionó todavía nada de lo que la escuela sí tiene: una docente que lleva años sosteniendo un proyecto de mediación entre pares que funciona bien, un grupo de estudiantes que organizó por su cuenta una actividad de bienvenida para los nuevos, una familia que se ofreció hace meses a ayudar con lo que hiciera falta y nunca fue convocada.',
      'El problema no es que esas carencias no existan: son reales y hay que tenerlas en cuenta. El problema es que, al nombrarlas primero y solamente a ellas, terminaron ocupando todo el espacio de la conversación, y con eso, la identidad entera del grupo: una escuela definida únicamente por lo que le falta. Nadie decidió eso a propósito. Pero el orden en el que se habla también construye quiénes somos frente a un problema — y empezar por las carencias, sin nombrar nunca las capacidades presentes, deja a un grupo creyendo que no tiene con qué empezar, cuando en realidad sí tiene, solo que todavía no lo dijo en voz alta.',
    ],
    problema:
      'Pensá en algún proceso de cambio —en tu escuela, tu familia, tu organización— que haya arrancado enumerando solo lo que faltaba. ¿Qué capacidad, vínculo o experiencia ya existente quedó sin nombrar en esa primera conversación?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'IDEAY+ ocupa el momento entre comprensión e implementación. La documentación disponible lo presenta como secuencia generativa de prospectiva participativa: parte de capacidades presentes, utiliza escenarios múltiples, incorpora narrativa como dispositivo metodológico y busca cerrar con un primer movimiento concreto — entender un problema a fondo no es, todavía, haber hecho algo con eso.',
      'Una aplicación documentada organizó el proceso de adentro hacia afuera: personal, institucional y pedagógico. Esta progresión convierte la experiencia en estrategia y después en práctica. El método trabaja desde aquello que los participantes ya poseen y evita que el problema monopolice la identidad del grupo — primero se trabaja con lo que cada persona trae, después con lo que la institución puede sostener, y recién ahí con lo que se puede enseñar o transferir a otros.',
      'La formalización metodológica 2026, desarrollada en el anexo final, organiza IDEAY+ mediante cuatro movimientos y doce lienzos. Esta arquitectura es una evolución explícita que deberá documentarse y validarse sin atribuirla retrospectivamente a versiones anteriores — es una forma nueva de ordenar el método, no una que ya estuviera así desde el principio.',
      'Pensá en algún proceso de cambio que hayas atravesado o acompañado. ¿Llegó a un primer movimiento concreto fuera de la sala de reunión, o se quedó en el diagnóstico?',
    ],
    fichaAula1: {
      titulo: 'La arquitectura IDEAY+ 2026: cuatro movimientos, doce lienzos, setenta y dos cartas',
      objetivo:
        'Conocer la arquitectura metodológica 2026 de IDEAY+, identificando sus cuatro movimientos, los doce lienzos que los componen y el sistema de cartas que acompaña el proceso.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'IDEAY+ se consolida como metodología de innovación generativa, prospectiva y participativa. Las aplicaciones previas documentan una lógica que parte de capacidades presentes, utiliza narrativa como dispositivo metodológico, trabaja con escenarios múltiples y procura terminar con un primer movimiento fuera del laboratorio. La arquitectura 2026 formaliza esos principios mediante cuatro movimientos, doce lienzos y un sistema de cartas.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El movimiento **ANCLAR** busca reconocer propósito, capacidades y personas, a través de tres lienzos: La Señal (formular misión), Las Anclas (reconocer capacidades) y Las Voces (mapear actores y poder). El movimiento **COMPRENDER** busca leer territorio, experiencia y mecanismos, con los lienzos El Territorio (comprender sistema), La Ruta (reconstruir experiencia) y Las Palancas (formular hipótesis). El movimiento **IMAGINAR** explora la incertidumbre y construye estrategia, a través de El Horizonte (identificar incertidumbres), Los Futuros (construir escenarios) y La Brújula (seleccionar estrategias robustas). El movimiento **ACTIVAR** diseña, prueba e implementa, con los lienzos El Prototipo (hacer tangible), El Cambio (explicar la teoría de cambio) y El Primer Movimiento (implementar y aprender).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Cada uno de los doce lienzos debe producir un resultado visible y una decisión de transición hacia el siguiente. Su diseño final incluye siempre los mismos cinco componentes: una pregunta generativa, la evidencia disponible, un espacio de trabajo, una decisión y el siguiente movimiento, manteniendo suficiente superficie para la escritura y la conversación del grupo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El proceso se acompaña, además, de un sistema de 72 cartas organizadas en seis familias de doce cartas cada una. La familia SEÑAL introduce cambios, tendencias e incertidumbres que el grupo puede estar subestimando. La familia VOZ introduce perspectivas de actores ausentes o con distinta relación con el problema. La familia TENSIÓN introduce pares de valores que obligan a deliberar sobre trade-offs. La familia FUTURO introduce perturbaciones plausibles que ponen a prueba la estrategia. La familia CRITERIO introduce principios para evaluar dignidad, agencia, derechos, equidad, privacidad, seguridad, evidencia y sostenibilidad. La familia ACCIÓN introduce operaciones para aprender mediante observación, simplificación, prototipado, simulación, fricción, conexión, medición o detención. Cada carta tiene en su anverso un nombre, una provocación y una pregunta principal, y en su reverso la operación metodológica, preguntas complementarias, lienzos sugeridos y una advertencia de facilitación — su función es aumentar la diversidad cognitiva del grupo, nunca gamificar superficialmente la experiencia.',
        },
      ],
      preguntaDetonadora:
        'Si tuvieras que elegir un solo lienzo para empezar cualquier proceso de cambio en tu escuela, ¿cuál elegirías: uno de ANCLAR, de COMPRENDER, de IMAGINAR o de ACTIVAR? ¿Por qué ese y no otro?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Nombrar nuestras anclas" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, completan de forma simplificada el Lienzo 2 (Las Anclas): cada persona nombra una capacidad, saber o vínculo que ya existe en su escuela o equipo, sin mencionar ningún problema ni carencia todavía.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Recorrer los cuatro movimientos" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un desafío real y acotado de su escuela o comunidad.',
                'Recorren los cuatro movimientos con una versión simplificada de un lienzo por movimiento: una pregunta de ANCLAR (¿qué capacidades ya tenemos?), una de COMPRENDER (¿qué está pasando realmente?), una de IMAGINAR (¿qué escenarios futuros son posibles?) y una de ACTIVAR (¿cuál sería un primer movimiento concreto, aunque sea pequeño?).',
                'Para cada movimiento, producen un resultado visible (una frase, un dibujo, una lista corta) y toman una decisión de transición antes de pasar al siguiente.',
                'Presentan su recorrido completo, desde el ancla inicial hasta el primer movimiento concreto.',
              ],
            },
          ],
        },
      ],
      frase:
        '"Entre comprender un problema y actuar sobre él hay un paso que muchas veces se salta: decidir juntos un primer movimiento concreto."',
      glosario: ['Movimiento ANCLAR', 'Lienzo generativo', 'Escenarios múltiples', 'Primer movimiento', 'Sistema de cartas'],
      referencias: [
        'Farhat, J. N. Anexo Metodológico — Método IDEAY+, en Manual Integral de Ciudadanía Digital: de usuario a ciudadano digital (edición integral de trabajo, 2026).',
      ],
    },
  },
  diagnosticoYConstruccionColectiva: {
    titulo: 'Diagnóstico y construcción colectiva',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: IDEAY+ organiza cocreación y prospectiva mediante capacidades presentes, narrativa, escenarios y cierre orientado a acción. Su maduración exige documentar lienzos, cartas, versiones, productos y resultados para transformarlo en metodología reproducible y evaluable.',
        'El capítulo nombra como referencia a Carol Weiss, Fixsen, Nilsen, Damschroder, Glasgow, Proctor, Sanders y Stappers, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a un proceso de construcción colectiva, la pregunta no debería limitarse a si el grupo "avanzó", sino a reconstruir qué capacidades se activaron, qué condiciones lo hicieron posible, y qué evidencia permite distinguir un cambio real de una reunión que solo generó una buena conversación sin ningún movimiento concreto después.',
        'Por qué esta precaución importa especialmente acá: la novedad metodológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — asumir que haber completado un lienzo o repartido unas cartas ya produjo transformación, sin verificar si hubo un resultado visible y una decisión de transición real, es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en IDEAY+, eso significa que ni basta con que un grupo tenga buena voluntad, ni alcanza con un buen diseño de lienzos si nadie facilita la conversación con cuidado.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es empezar preguntando qué le falta al grupo: la lógica generativa parte de capacidades presentes, no de un inventario de carencias.',
          'No es un proceso que se queda en el diagnóstico: busca cerrar siempre con un primer movimiento concreto, fuera del espacio de trabajo.',
          'No es un conjunto de dinámicas para "entretener" a un grupo: las cartas deben aumentar diversidad cognitiva, no gamificar superficialmente la experiencia.',
          'No es una metodología cerrada desde siempre: la arquitectura 2026 es una evolución explícita que debe documentarse y validarse, sin atribuirse retroactivamente a versiones anteriores.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a un proceso de construcción colectiva concreto, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué capacidades presentes del grupo están en juego, y en qué movimiento —ANCLAR, COMPRENDER, IMAGINAR o ACTIVAR— se encuentra el proceso.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si el proceso está usando narrativa y escenarios múltiples como dispositivos reales de trabajo, o si se quedó en un diagnóstico sin resultado visible ni decisión de transición.',
        '**¿Qué cambio sería proporcionado?** Qué primer movimiento concreto, por pequeño que sea, permitiría que el proceso salga del espacio de trabajo y se convierta en una acción real.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'El mismo equipo docente de Por qué importa —el que llenó el pizarrón de carencias en veinte minutos— decide intentarlo de nuevo, una semana después, con una facilitadora externa. Antes de empezar, ella propone una regla simple: durante los primeros treinta minutos, nadie puede nombrar un problema. Solo se puede hablar de lo que la escuela ya tiene. Al principio cuesta: alguien arranca dos veces con un "sí, pero..." que la facilitadora corta amablemente. Después de un rato, empiezan a aparecer cosas: el proyecto de mediación entre pares que ya funciona, la estudiante de sexto año que organizó la bienvenida a los nuevos sin que nadie se lo pidiera, la familia que se ofreció a colaborar y nunca fue convocada. La lista crece, y el clima de la sala cambia por completo.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: el equipo repitió el mismo objetivo de la primera reunión —mejorar la convivencia— pero cambió el punto de partida. En vez de abrir con un inventario de carencias, abrió nombrando capacidades presentes: personas, vínculos y experiencias que ya existían en la escuela, aunque nadie las hubiera dicho en voz alta hasta ese momento. Participan el equipo docente, que descubre que tenía más con qué trabajar de lo que pensaba; la facilitadora, que sostuvo la regla de no nombrar problemas al principio; y los recursos ya existentes —el proyecto de mediación, la estudiante, la familia— que estuvieron ahí todo el tiempo, sin ser reconocidos.',
        ],
        nota: '(Acá me pregunto: ¿esas capacidades no existían la semana pasada, o simplemente nadie las nombró porque la conversación arrancó por otro lado?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la identidad del grupo frente al problema. El método trabaja desde aquello que los participantes ya poseen y evita que el problema monopolice la identidad del grupo — y eso es exactamente lo que cambió entre la primera y la segunda reunión. No cambió la escuela: cambió qué parte de la escuela se nombró primero.',
          'Qué condiciones sociotécnicas intervienen: la regla simple de "no problemas durante treinta minutos" funcionó como una versión aplicada del Lienzo 2, Las Anclas, cuya operación metodológica es, justamente, reconocer capacidades. No hizo falta la arquitectura completa de IDEAY+ para lograr el efecto: alcanzó con aplicar su lógica de partida.',
        ],
        nota: '(Acá me pregunto: ¿cuánto cambió realmente la conversación por el solo hecho de invertir el orden —capacidades antes que carencias— en vez de agregar información nueva?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: a partir de esa lista de capacidades presentes, el equipo puede ahora recién pasar a comprender qué problemas de convivencia existen —el movimiento COMPRENDER— pero haciéndolo desde una base distinta: no como un grupo sin recursos, sino como un grupo que ya tiene el proyecto de mediación, a la estudiante que organiza bienvenidas, a la familia dispuesta a colaborar. Desde ahí, cualquier problema que se nombre después tiene con qué dialogar.',
        ],
        nota: '(Acá me pregunto: si hubiéramos empezado por los problemas, ¿habríamos llegado a ver que ya existía un proyecto de mediación funcionando, o se habría quedado invisible bajo la lista de carencias?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al equipo: no le corresponde sentir que la primera reunión, la de las carencias, fue un fracaso — esa información también es real y en algún momento del proceso va a hacer falta.',
          'Qué podría salir mal: que, entusiasmados con la lista de capacidades, el equipo decida que no tiene ningún problema que resolver, y abandone el proceso ahí mismo, sin pasar nunca a comprender ni a imaginar; o que, al revés, la próxima reunión vuelva a arrancar por las carencias porque nadie sostuvo la misma regla sin una facilitadora presente. Lo que ajustaría para la próxima vez: que el equipo incorpore, como hábito propio y no solo con ayuda externa, la práctica de nombrar capacidades presentes antes de nombrar problemas, cada vez que empiece un proceso de cambio.',
        ],
        nota: '(Acá me pregunto: ¿qué otros procesos de mi escuela o mi entorno podrían cambiar de clima con solo invertir el orden en que se nombran las cosas?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir en qué movimiento está el proceso: ANCLAR/COMPRENDER, IMAGINAR, o ACTIVAR. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un grupo de estudiantes que quiere mejorar el uso del patio en los recreos empieza por mapear quiénes usan ese espacio, cómo lo usan hoy, qué conflictos surgen habitualmente, y qué saberes o recursos ya existen entre ellos —por ejemplo, alguien que ya organiza torneos informales los viernes—.',
        analisis:
          '¿En qué movimiento estamos? ANCLAR/COMPRENDER. El grupo todavía no está imaginando soluciones futuras ni construyendo nada: está reconociendo capacidades presentes (quién organiza los torneos) y leyendo el territorio tal como es hoy (quiénes usan el patio, qué conflictos surgen). Es exactamente la lógica de los primeros dos movimientos: antes de imaginar, hay que anclar y comprender.',
        nota: '(Si elegiste "IMAGINAR" o "ACTIVAR": todavía no hay ningún escenario futuro en discusión ni ningún prototipo en marcha — el grupo está, literalmente, levantando la información de base.)',
      },
      {
        clave: 's2',
        enunciado:
          'Después de comprender cómo se usa el patio, el mismo grupo arma tres versiones distintas de cómo podría verse el recreo dentro de un año: una con más actividades organizadas, otra con más espacios de descanso tranquilo, y una tercera que combina ambas según el día de la semana. Discuten ventajas y riesgos de cada escenario antes de elegir un rumbo.',
        analisis:
          '¿En qué movimiento estamos? IMAGINAR. El grupo ya dejó de levantar información sobre el presente y empezó a construir futuros posibles —tres escenarios distintos— para después seleccionar una estrategia robusta entre ellos. Es exactamente la operación de este movimiento: identificar incertidumbres, construir escenarios, elegir un rumbo que funcione en varios de ellos.',
        nota: '(Si elegiste "ANCLAR/COMPRENDER": esa etapa ya se hizo —el grupo ya sabe cómo se usa el patio hoy—; acá está yendo un paso más allá, hacia el futuro posible, no hacia el presente.)',
      },
      {
        clave: 's3',
        enunciado:
          'El grupo elige la combinación de actividades organizadas y espacios tranquilos, según el día. Arman un cartel simple que anuncia la primera semana de prueba, consiguen tres conos y una pelota prestada, y proponen hacer la prueba el viernes siguiente, para después juntarse a ver qué funcionó y qué no.',
        analisis:
          '¿En qué movimiento estamos? ACTIVAR. El grupo pasó de imaginar a hacer algo tangible y concreto, aunque sea pequeño y con recursos mínimos: un prototipo real, puesto a prueba, con la intención explícita de aprender de esa primera experiencia. Es exactamente el cierre que busca la lógica generativa: un primer movimiento concreto, fuera del espacio de trabajo.',
        nota: '(No hay una sola forma de activar en este caso, pero sí está claro que ya se salió del plano de la idea: hay una fecha, un recurso prestado y una intención de aprender de lo que pase.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de un equipo sobre cómo encarar un proceso de cambio en su organización. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Dejemos de hablar tanto y pongamos algo en marcha ya. No hace falta reunirnos más veces a pensar, total ya sabemos cuál es el problema.',
      citaB:
        'Antes de hacer cualquier cosa, necesitamos entender el problema a fondo. Juntémonos una vez más para seguir analizando todas las variables posibles.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        'Comentario A salta directo a implementar sin anclar ni comprender. Sin haber reconocido primero las capacidades presentes ni leído bien el territorio, cualquier "primer movimiento" corre el riesgo de no estar anclado en lo que el grupo realmente tiene disponible, ni en lo que la situación realmente necesita.',
      errorB:
        'Comentario B comete el error opuesto: se queda analizando y diagnosticando sin llegar nunca a un primer movimiento concreto. IDEAY+ busca cerrar siempre con una acción fuera del espacio de trabajo; seguir juntándose indefinidamente "para entender mejor" es, en los hechos, evitar el movimiento ACTIVAR.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno respeta la secuencia completa de movimientos. Uno se salta el principio; el otro nunca llega al final.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer la lógica generativa de IDEAY+ —capacidades presentes, narrativa, escenarios múltiples, cierre en un primer movimiento concreto—',
        enunciado:
          'Un equipo arranca un proceso de cambio enumerando, antes que nada, todo lo que la escuela ya tiene: proyectos que funcionan, personas con experiencia, vínculos existentes. ¿Qué principio de IDEAY+ refleja esta decisión?',
        opciones: [
          { id: 'a', texto: 'Que la lógica generativa parte de capacidades presentes, no de un inventario de carencias.' },
          { id: 'b', texto: 'Que el diagnóstico de problemas siempre debe hacerse antes que cualquier otra cosa.' },
          { id: 'c', texto: 'Que nombrar capacidades presentes es un paso opcional que se puede saltear.' },
          { id: 'd', texto: 'Que un grupo no debería hablar nunca de sus problemas reales.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'IDEAY+ no establece que el diagnóstico de problemas vaya primero: justamente invierte ese orden habitual, partiendo de capacidades presentes.',
          c: 'El capítulo presenta esto como punto de partida central de la lógica generativa, no como un paso opcional.',
          d: 'IDEAY+ no evita hablar de problemas: los incorpora más adelante, en el movimiento COMPRENDER, pero no los deja ocupar todo el espacio desde el principio.',
        },
      },
      {
        objetivo: 'aplicar la progresión de adentro hacia afuera —personal, institucional, pedagógica— que convierte experiencia en estrategia y después en práctica',
        enunciado: 'Según una aplicación documentada del método, ¿en qué orden se organiza la progresión de IDEAY+?',
        opciones: [
          { id: 'a', texto: 'Pedagógica, institucional, personal.' },
          { id: 'b', texto: 'Personal, institucional, pedagógica.' },
          { id: 'c', texto: 'Institucional, personal, pedagógica.' },
          { id: 'd', texto: 'No existe un orden específico: las tres dimensiones se trabajan siempre al mismo tiempo.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El orden está invertido: la aplicación documentada organiza el proceso de adentro hacia afuera, empezando por lo personal, no por lo pedagógico.',
          c: 'Lo institucional no es el punto de partida: la progresión arranca en lo personal, antes de llegar a lo institucional.',
          d: 'El capítulo describe explícitamente una progresión, no una simultaneidad: personal, luego institucional, luego pedagógica.',
        },
      },
      {
        objetivo: 'identificar los cuatro movimientos y los doce lienzos de la arquitectura 2026',
        enunciado:
          'Un grupo está construyendo tres escenarios distintos de cómo podría verse su situación dentro de un año, para después elegir una estrategia que funcione en varios de ellos. ¿En qué movimiento de la arquitectura IDEAY+ está?',
        opciones: [
          { id: 'a', texto: 'ANCLAR.' },
          { id: 'b', texto: 'COMPRENDER.' },
          { id: 'c', texto: 'IMAGINAR.' },
          { id: 'd', texto: 'ACTIVAR.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'ANCLAR se ocupa de reconocer propósito, capacidades y personas, no de construir escenarios futuros.',
          b: 'COMPRENDER se ocupa de leer el territorio, la experiencia y los mecanismos actuales, no de imaginar futuros posibles.',
          d: 'ACTIVAR implica diseñar, probar e implementar algo tangible; acá el grupo todavía está explorando escenarios, no construyendo un prototipo.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura para diseñar un proceso de construcción colectiva propio',
        enunciado: 'Frente a un proceso de construcción colectiva, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
        opciones: [
          { id: 'a', texto: 'Qué cambio sería proporcionado → qué dimensión está comprometida → qué condiciones sociotécnicas intervienen.' },
          { id: 'b', texto: 'Qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado → qué dimensión está comprometida.' },
          { id: 'c', texto: 'Qué cartas usar → qué lienzo completar → qué movimiento seguir.' },
          { id: 'd', texto: 'Qué dimensión humana o institucional está comprometida → qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El orden está invertido: el capítulo propone identificar primero qué está comprometido, y recién al final decidir qué cambio sería proporcionado.',
          b: 'Empezar por las condiciones sociotécnicas sin identificar antes qué dimensión está comprometida deja sin marco la pregunta siguiente.',
          c: 'Ese no es el método de lectura que propone el capítulo: elegir cartas, lienzos o movimientos es parte de la ejecución de IDEAY+, no del método de tres preguntas para leer cualquier situación.',
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
        muestra: 'Salta directo a implementar sin anclar ni comprender, o se queda analizando y diagnosticando sin llegar nunca a un primer movimiento concreto.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en el proceso, pero no distingue con precisión en qué movimiento se encuentra.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue los cuatro movimientos, identifica en cuál está una situación concreta y propone un cambio proporcionado que respeta la secuencia.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cuándo un grupo está dejando que el problema monopolice su identidad, y sabe reorientar el proceso hacia las capacidades presentes antes de avanzar.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la lógica generativa de partir de capacidades presentes, la progresión de adentro hacia afuera, y los cuatro movimientos con sus doce lienzos. Lo que cambia, a partir de acá, es cómo arrancás cualquier proceso de cambio en tu propio entorno: no por lo que falta, sino por lo que ya hay.',
    parrafo2:
      'Usá este capítulo como lente de lectura esta semana: frente a un proceso de construcción colectiva concreto en tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —en qué movimiento está el proceso, si hay capacidades presentes sin nombrar— y finalmente qué cambio sería proporcionado.',
    parrafo3:
      'Volvé al problema de Por qué importa: el equipo docente que llenó el pizarrón de carencias sin nombrar nunca lo que la escuela ya tenía. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué capacidad presente de tu propio entorno quedó sin nombrar la última vez que se habló de un problema? ¿Qué movimiento de IDEAY+ aplicarías primero si tuvieras que arrancar ese proceso de nuevo? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Co-creación y co-diseño: la base conceptual de trabajar "con" la gente, no solo "para" ella',
      objetivo:
        'Conocer la distinción entre co-creación y co-diseño que proponen Elizabeth Sanders y Pieter Jan Stappers, y reconocer por qué diseñar procesos "con" las personas, y no solo "para" ellas, cambia lo que ese proceso puede producir.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En su artículo "Co-creation and the new landscapes of design" (2008), Elizabeth B.-N. Sanders y Pieter Jan Stappers —dos de los autores que este capítulo cita como referencia— describen un cambio profundo en cómo se investigan y diseñan soluciones a problemas complejos: el pasaje de un diseño centrado en expertos hacia procesos de co-creación y co-diseño.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Los autores definen co-creación como cualquier acto de creatividad colectiva, es decir, creatividad compartida entre dos o más personas. Co-diseño, en cambio, es un caso específico de co-creación: se refiere a la creatividad colectiva tal como se aplica a lo largo de todo un proceso de diseño. La distinción importa porque no cualquier participación es co-diseño genuino: hay una diferencia entre invitar a alguien a opinar sobre una solución ya pensada por otros, y crear esa solución junto con las personas que la van a vivir, desde el principio del proceso.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Sanders y Stappers sostienen que este giro no es solo metodológico, sino que cambia el rol de las personas involucradas: de ser "usuarias" que reciben un producto diseñado por especialistas, pasan a ser protagonistas activas del proceso de creación. Para que eso sea posible, desarrollaron herramientas y técnicas generativas que les dan a las personas un lenguaje —a través de objetos, dibujos, historias, materiales concretos— con el cual pueden imaginar y expresar ideas que una entrevista tradicional no lograría captar.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta base conceptual explica por qué IDEAY+ no se limita a un diagnóstico hecho por especialistas que después le presentan una solución al grupo: usa lienzos, narrativa y un sistema de cartas para que sean las propias personas involucradas —con sus capacidades presentes, su experiencia situada, sus voces— quienes construyan la comprensión del problema y la estrategia de cambio, de principio a fin.',
        },
      ],
      preguntaDetonadora:
        '¿Alguna vez participaste de un proceso donde te pidieron opinión sobre algo que ya estaba decidido? ¿En qué se diferenciaría de haber participado desde el principio en construir esa decisión?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Para vos o con vos" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, piensan en dos ejemplos de su propia escuela o comunidad: un proyecto o decisión que se hizo "para" ellos (sin que participaran en su diseño) y otro que se hizo "con" ellos (participando desde el principio). Comparan qué cambió en cada caso.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestro lienzo generativo" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un desafío real de su escuela o comunidad que normalmente resolvería "un experto" o "una autoridad" sin consultarlos.',
                'Diseñan una herramienta generativa simple —inspirada en los lienzos y cartas de IDEAY+— que permita a las personas afectadas por ese desafío expresar su experiencia y sus ideas de forma concreta: puede ser un dibujo, una historia corta, un objeto simbólico, una pregunta disparadora.',
                'Prueban esa herramienta entre ustedes mismos, como si fueran las personas destinatarias.',
                'Reflexionan: ¿qué información o idea apareció con esta herramienta que no habría aparecido con una pregunta directa tipo encuesta?',
              ],
            },
          ],
        },
      ],
      frase: '"No se trata de preguntarle a la gente qué quiere: se trata de crear con ella el espacio donde pueda imaginarlo."',
      glosario: ['Co-creación', 'Co-diseño', 'Creatividad colectiva', 'Herramientas generativas', 'Diseño "con" vs. diseño "para"'],
      referencias: ['Sanders, E. B.-N. y Stappers, P. J. (2008). Co-creation and the new landscapes of design. CoDesign, 4(1), 5-18.'],
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué empezar un proceso de cambio nombrando lo que ya tenés cambia el resultado final, aunque el problema de fondo sea exactamente el mismo?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'IDEAY+, en una tarjeta',
      parrafos: [
        'IDEAY+ ocupa el momento entre comprensión e implementación. Parte de capacidades presentes, utiliza escenarios múltiples, incorpora narrativa como dispositivo metodológico y busca cerrar con un primer movimiento concreto.',
        '**La progresión de adentro hacia afuera:** personal, institucional y pedagógica. Esta secuencia convierte la experiencia en estrategia y después en práctica, evitando que el problema monopolice la identidad del grupo.',
        '**La arquitectura 2026:** cuatro movimientos —ANCLAR, COMPRENDER, IMAGINAR, ACTIVAR— y doce lienzos, acompañados de un sistema de 72 cartas organizadas en seis familias.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo IDEAY+. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referenciasLista: 'Carol Weiss · Fixsen · Nilsen · Damschroder · Glasgow · Proctor · Sanders · Stappers',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'IDEAY+ y la construcción colectiva de posibilidades no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[IDEAY_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
