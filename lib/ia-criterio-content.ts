// Contenido de /ia/usar-la-ia-sin-perder-criterio. Mismo patrón que lib/participacion-democracia-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/ia-criterio/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// primera temática del módulo Inteligencia Artificial (Capítulo 27 del manual, con el
// Capítulo 26 para la parte de sesgos).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/ia-criterio/ficha-aula';

export const IA_CRITERIO_FALLBACK: Audiencia = 'docentes';

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
  { id: 'criterio-y-delegacion', number: '05', label: 'Criterio y delegación', shortLabel: 'Criterio' },
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
  criterioYDelegacion: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
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
    parrafo2: string;
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
    seguiEnlaceTexto: string;
    seguiEnlaceHref: string;
    seguiDespues: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Inteligencia Artificial',
    subtitulo: 'De delegar tareas a delegar criterio',
    bajada:
      'Esta es la primera temática del módulo Inteligencia Artificial, un grupo nuevo de la plataforma. No forma parte del Poliedro de Ciudadanía Digital, pero trabaja con la misma estructura y profundidad.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que ampliar tu capacidad con una IA no es problemático en sí mismo: las sociedades siempre usaron herramientas para externalizar memoria, cálculo y búsqueda.',
      'Distinguir cuándo usar una IA es asistencia legítima y cuándo es delegar el criterio que te corresponde conservar.',
      'Reconocer que un resultado con apariencia matemática no está libre de sesgo, de una finalidad definida por quien lo diseñó, ni de la posibilidad de ser revisado.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'distinguir cuándo usar una IA es asistencia legítima y cuándo es delegar un criterio que te corresponde mantener, verificar lo que produce, cuidar la autoría y los datos que le entregás, y reconocer cuándo sus resultados pueden estar sesgados.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir esta temática y la diferencia entre ampliar una capacidad con una IA y delegarle el criterio.',
      'Identificar, en un uso concreto de IA, qué parte es asistencia legítima y qué parte delega algo que debería conservarse.',
      'Reconocer cuándo un resultado automatizado puede estar sesgado y qué preguntas hacerle.',
      'Decidir cómo verificar, cuidar la autoría y los datos que entregás antes de usar lo que una IA produce.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Qué parte del trabajo delegaste, y qué parte deberías haber conservado?',
    parrafos: [
      'Tenés una reunión en una hora y un informe de cuarenta páginas que no llegaste a leer. Le pedís a una IA que te lo resuma. En treinta segundos tenés un resumen claro, con los puntos principales bien organizados. Lo leés, te parece sólido, y entrás a la reunión con esas notas como si fueran tuyas.',
      'A los diez minutos, alguien pregunta por un dato puntual que vos no tenés: no estaba en el resumen. No sabés si el informe lo mencionaba o no, porque nunca lo leíste. Improvisás una respuesta vaga y notás que quien preguntó se da cuenta.',
      'Nada de lo que hiciste fue descabellado. Pedir un resumen para ganar tiempo es exactamente el tipo de cosa para la que sirve una herramienta así. El problema no fue usarla: fue qué hiciste con lo que te devolvió. Le delegaste la lectura, lo cual tiene sentido, pero también le delegaste, sin darte cuenta, la decisión de qué era importante y qué no para esa reunión en particular, algo que solo vos podías juzgar.',
    ],
    problema:
      'Pensá en ese momento, o en uno parecido. ¿Qué parte del trabajo tenía sentido delegar, y qué parte era un criterio que debías conservar vos? Si hubieras tenido cinco minutos más, ¿qué habrías hecho distinto con ese resumen antes de entrar a la reunión?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La IA generativa amplió el acceso a tareas que antes requerían más tiempo o más formación: explicar, escribir, traducir, programar, analizar. Esa reducción de barreras es una oportunidad real, tanto para personas como para instituciones.',
      'Delegar tareas no es problemático por sí mismo. Las sociedades siempre usaron herramientas para externalizar memoria, cálculo y búsqueda: una agenda, una calculadora, un buscador. El aumento de capacidad puede convivir perfectamente con nuevas dependencias razonables, igual que depender de una calculadora para una cuenta larga no es un problema.',
      'La cuestión aparece en otro lugar: cuando, junto con la tarea, delegamos también el criterio necesario para evaluar lo que el sistema produce. No es lo mismo pedirle a una IA que redacte un primer borrador y después revisarlo con tu propio juicio, que aceptar ese borrador sin preguntarte si dice lo que vos querías decir.',
      'Por eso la alfabetización en IA excede la habilidad de escribir una buena instrucción. Incluye entender sus límites, cuidar la privacidad de lo que le entregás, verificar lo que te devuelve, sostener tu responsabilidad sobre el resultado final y resolver la cuestión de la autoría: quién firma lo que se publicó. En cualquier contexto público o profesional, la automatización tiene que insertarse en un sistema donde siga existiendo una responsabilidad humana e institucional, y no reemplazarla.',
      'Pensá en una tarea donde usaste, o podrías usar, una IA. ¿Qué parte de esa tarea le delegarías tranquilo, y qué parte sentís que tenés que seguir decidiendo vos?',
    ],
    fichaAula1: {
      titulo: '¿Quién decide en mi lugar? Jóvenes, IA y decisiones éticas en un mundo automatizado',
      objetivo:
        'Comprender qué es la inteligencia artificial, cómo interviene en nuestras decisiones cotidianas y reflexionar sobre los desafíos éticos que plantea su uso desde la perspectiva de los derechos humanos y la ciudadanía juvenil.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La inteligencia artificial (IA) es la capacidad de sistemas tecnológicos de realizar tareas que requieren inteligencia humana: reconocer imágenes, tomar decisiones, traducir, clasificar, recomendar, evaluar. Está presente en apps, redes sociales, videojuegos, plataformas educativas, servicios públicos y hasta en decisiones judiciales o laborales.',
        },
        { tipo: 'parrafo', texto: 'Pero, ¿es neutral la IA? No. La IA:' },
        {
          tipo: 'lista',
          items: [
            'Aprende de datos generados por personas (¡con sesgos!).',
            'Clasifica, sugiere y omite información.',
            'Puede reproducir injusticias o discriminaciones si no es ética.',
            'Toma decisiones que nos afectan sin que lo sepamos.',
          ],
        },
        { tipo: 'parrafo', texto: 'La ética en la IA busca responder preguntas como:' },
        {
          tipo: 'lista',
          items: [
            '¿Quién programa y con qué valores?',
            '¿Cómo se protege la privacidad y los derechos de los usuarios?',
            '¿Cómo evitar la discriminación algorítmica?',
            '¿Qué pasa si las decisiones no se pueden explicar ni corregir?',
          ],
        },
        { tipo: 'parrafo', texto: 'Como jóvenes ciudadanos digitales, es clave:' },
        {
          tipo: 'lista',
          items: [
            'Comprender cómo funciona la IA.',
            'Participar en los debates sobre su regulación.',
            'Ejercer un uso responsable, consciente y crítico.',
            'Exigir transparencia, inclusión y justicia en su diseño y aplicación.',
          ],
        },
      ],
      preguntaDetonadora:
        '*Si una app decide por vos qué ver, con quién hablar o qué pensar... ¿sos vos el que elige? ¿Quién programa tus decisiones?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Dónde está la IA?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'En grupos, identifican cuántas veces interactuaron con IA en un solo día:',
            },
            { tipo: 'lista', items: ['Buscadores, mapas, filtros, TikTok, Spotify, traductores, tareas.'] },
            { tipo: 'parrafo', texto: '→ Reflexionan: ¿sabían que era IA? ¿Quién la controla?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Dilemas éticos con IA: ¿qué harías vos?" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Dividí al curso en grupos. A cada uno le das un dilema ético con IA.',
                'Deben:',
                'Identificar los valores en conflicto.',
                'Tomar una decisión razonada.',
                'Argumentar desde una perspectiva ética y juvenil.',
                'Ejemplos de dilemas:',
                'Una IA clasifica estudiantes por rendimiento y decide quién puede rendir exámenes.',
                'Un chatbot reemplaza a un docente en una escuela pública.',
                'Un algoritmo oculta contenidos de activismo social por considerarlos "conflictivos".',
                'Una IA modifica la imagen corporal para cumplir con "estándares de belleza".',
                'Cada grupo presenta su postura al resto.',
              ],
            },
          ],
        },
      ],
      frase: '*"No toda tecnología es justa. Nuestra voz también debe programar el futuro."*',
      glosario: [
        'Inteligencia Artificial (IA)',
        'Algoritmo',
        'Ética tecnológica',
        'Discriminación algorítmica',
        'Transparencia digital',
      ],
      referencias: [
        'UNESCO – Ética de la Inteligencia Artificial para jóvenes',
        'Guía "IA para adolescentes" – Fundación Karisma',
        'Video: "¿Qué es la IA y por qué debería importarme?" – Chicos.net',
        'ai.google/education – IA para estudiantes',
        'Juego: Decisiones con IA – Educ.ar (próximamente)',
      ],
    },
  },
  criterioYDelegacion: {
    titulo: 'Criterio y delegación',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'La diferencia central de esta temática: **ampliar una capacidad** es que la IA te ayude a hacer algo mejor o más rápido, conservando vos la decisión final. **Delegar el criterio** es que la IA tome, sin que lo notes, una decisión que te correspondía a vos. La misma herramienta puede hacer una cosa o la otra según cómo la uses.',
        'La alfabetización en IA tiene cinco elementos: los **límites** de lo que la herramienta puede hacer bien y lo que no; la **privacidad** de los datos que le entregás, tuyos o de otras personas; la **verificación** de lo que te devuelve antes de usarlo; la **responsabilidad** sobre el resultado final, que sigue siendo tuya; y la **autoría**, es decir, quién firma lo que se publica.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué un resultado con apariencia matemática no elimina las preguntas sobre calidad y sesgo: que una respuesta salga de un sistema automatizado y se vea prolija y segura no dice nada sobre si es correcta. Los resultados automatizados responden a datos, a objetivos y a decisiones de diseño que alguien tomó, y esas decisiones pueden estar equivocadas o sesgadas aunque el formato parezca objetivo.',
        'Por qué los datos que alimentan un sistema condicionan lo que devuelve: esos datos pueden ser aportados (lo que alguien escribió o cargó), observados (lo que el sistema registró de un comportamiento) o inferidos (lo que el sistema dedujo sin que nadie lo dijera explícitamente). Un sistema entrenado con datos sesgados va a reproducir ese sesgo, aunque nadie lo haya programado a propósito.',
        'Por qué cuanto más importa una decisión, más hay que poder revisarla: cuando el impacto de un resultado automatizado sobre los derechos y las oportunidades de una persona aumenta —una nota, una preselección, un diagnóstico—, también debe aumentar la exigencia de poder conocer cómo se llegó a esa decisión y de poder cuestionarla. No es lo mismo un resumen para una reunión que una decisión que afecta el futuro de alguien.',
        'Por qué la responsabilidad humana e institucional tiene que seguir existiendo: automatizar una tarea no traslada la responsabilidad a la máquina. En cualquier contexto público o profesional, tiene que seguir habiendo una persona o una institución que responda por lo que se decidió, aunque el primer paso lo haya dado un sistema.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es rechazar la IA ni evitar usarla: ampliar capacidades con una herramienta es legítimo y es lo que las sociedades siempre hicieron.',
          'No es que un resultado automatizado sea neutral porque parece objetivo: responde a datos, objetivos y decisiones de diseño que alguien tomó.',
          'No es que la responsabilidad desaparezca porque la tarea esté automatizada: sigue habiendo una persona o una institución que responde por el resultado.',
          'No es necesario entender cómo funciona el sistema por dentro: alcanza con saber qué preguntarle y cuándo exigir que se pueda revisar.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a cualquier uso de una IA, tres preguntas:',
      preguntas: [
        '**¿Qué parte de la tarea es criterio y no puedo delegar?** Qué decisión necesita mi juicio, aunque la herramienta me ayude con el resto.',
        '**¿Con qué datos entrenó o trabaja esta respuesta?** Si hay información sesgada, desactualizada o parcial detrás de lo que me devuelve.',
        '**¿Cómo verifico lo que me devolvió?** Con qué fuente lo contrasto antes de usarlo como si fuera un hecho.',
      ],
      parrafoMovimientos: 'Y tres movimientos, en este orden:',
      movimientos: [
        '**Verificar antes de usar:** contrastar el resultado con la fuente original o con otra fuente confiable, nunca aceptarlo porque suena bien.',
        '**Cuidar qué datos y de quién entrego:** pensar qué información personal, propia o de otros, le estoy dando a la herramienta y para qué la va a usar.',
        '**Dejar trazabilidad de la autoría:** que quede claro qué parte hizo la herramienta y qué parte hiciste vos, en vez de presentar todo como propio.',
      ],
    },
    fichaAula2: {
      titulo: '¿Justicia automatizada? Cuando los algoritmos deciden y excluyen',
      objetivo:
        'Comprender qué es la justicia algorítmica, cómo funcionan los sesgos en las tecnologías digitales y reflexionar sobre las formas de discriminación que pueden producirse a través de algoritmos, datos y automatismos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Vivimos rodeados de algoritmos: en las redes sociales, buscadores, plataformas de estudio, aplicaciones de salud, créditos, seguridad, entretenimiento. Pero ¿quién diseña esos algoritmos? ¿Qué datos usan? ¿A quién favorecen o perjudican?',
        },
        { tipo: 'parrafo', texto: 'La discriminación algorítmica ocurre cuando un sistema automatizado:' },
        {
          tipo: 'lista',
          items: [
            'Toma decisiones injustas o desiguales (ej: negar acceso, visibilidad, oportunidades).',
            'Reproduce prejuicios o estereotipos (ej: racismo, sexismo, clasismo).',
            'Refuerza desigualdades existentes porque "aprende" de datos históricos ya sesgados.',
          ],
        },
        { tipo: 'parrafo', texto: 'La justicia algorítmica es una corriente ética y política que busca:' },
        {
          tipo: 'lista',
          items: [
            'Hacer visibles estas injusticias ocultas en la programación.',
            'Pedir transparencia, control humano y explicabilidad en los sistemas automatizados.',
            'Incluir criterios de diversidad y equidad en el diseño de tecnologías.',
            'Promover la rendición de cuentas de quienes crean y usan algoritmos que afectan la vida de las personas.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Como ciudadanía digital, es clave aprender a interrogar las decisiones automatizadas, exigir derechos y formar pensamiento crítico frente a una tecnología que no siempre es neutral ni justa.',
        },
      ],
      preguntaDetonadora: '*¿Puede una máquina ser injusta? ¿Quién tiene la culpa si un algoritmo te discrimina?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "No todos ven lo mismo" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'Mostrá dos pantallazos de inicio de TikTok, YouTube o Instagram de dos personas distintas.',
            },
            { tipo: 'parrafo', texto: 'En grupos, analizan:' },
            {
              tipo: 'lista',
              items: [
                '¿Por qué los contenidos que se muestran son distintos?',
                '¿Qué datos influyen en lo que vemos o no vemos?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Reflexión: ¿todos tenemos las mismas oportunidades de ser vistos o acceder?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Radiografía de un algoritmo" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada grupo elige un entorno digital (Spotify, Google, TikTok, banco, app educativa).',
                'Investigan:',
                '¿Qué decisiones toma el algoritmo?',
                '¿Qué datos usa? ¿Puede equivocarse o discriminar?',
                '¿Hay ejemplos de injusticias o exclusiones?',
                'Luego elaboran una propuesta para hacerlo más justo:',
                'Reglas de transparencia',
                'Control humano',
                'Inclusión de diversidad',
                'Participación juvenil en su diseño',
                'Presentan su trabajo como un "Informe ciudadano sobre justicia algorítmica".',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Un algoritmo puede ser más rápido que una persona. Pero la justicia no se mide en clics, se construye con valores."*',
      glosario: [
        'Algoritmo',
        'Discriminación digital',
        'Justicia algorítmica',
        'Sesgo de datos',
        'Explicabilidad tecnológica',
      ],
      referencias: [
        'Fundación Karisma – "¿Quién nos programó?"',
        'Chicos.net – Módulo de Inteligencia Artificial y derechos',
        'Video: "El algoritmo no es neutral" – Canal Encuentro',
        'UNESCO – Ética de la IA: recomendaciones para América Latina',
        'ai-latam.org – Comunidad por una IA inclusiva',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una persona tiene una reunión importante en una hora y un informe de cuarenta páginas que no llegó a leer. Le pide a una IA que se lo resuma. En treinta segundos tiene un resumen claro, bien organizado, con los puntos que parecen principales. Lo lee, le resulta convincente, y entra a la reunión con esas notas como si las hubiera elaborado ella. A los diez minutos, alguien pregunta por un dato puntual que no está en el resumen. No sabe si el informe original lo mencionaba o no, porque nunca lo leyó, e improvisa una respuesta vaga.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: usó una IA para resolver un problema real —no tenía tiempo de leer cuarenta páginas— y el resumen cumplió esa función. El problema no apareció ahí: apareció cuando presentó ese resumen como si fuera su propia lectura y preparación, sin haberlo contrastado con el documento original. Lo que está en juego no es solo quedar mal en una pregunta puntual: es la credibilidad de lo que dice en esa reunión, y en las siguientes.',
        ],
        nota: '*(Acá me pregunto: ¿en qué momento dejé de pensar en el resumen como un punto de partida y empecé a tratarlo como si ya fuera mi trabajo terminado?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué delegó bien: la lectura rápida de un documento largo bajo presión de tiempo es exactamente el tipo de tarea para la que tiene sentido usar una herramienta así. Nadie puede leer cuarenta páginas en un minuto, y pedir ayuda para eso no es un problema.',
          'Qué delegó mal: la evaluación de qué era relevante para esa reunión puntual. Un resumen genérico prioriza lo que el sistema interpreta como importante en general, no necesariamente lo que un grupo específico de personas, con sus propios intereses y preguntas, iba a necesitar ese día. Esa evaluación —qué le importa a quién en esta reunión concreta— es un criterio que solo ella podía aportar, porque conocía el contexto que la herramienta no tenía.',
        ],
        nota: '*(Acá me pregunto: ¿el resumen me dijo lo que el informe decía, o lo que a mí me convenía escuchar porque tenía poco tiempo?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de dejar de usar la herramienta la próxima vez, sino de agregar un paso antes de la reunión. Primero, verificar el resumen contra el informe original, aunque sea por arriba: revisar los títulos de las secciones, confirmar que no falta nada que claramente iba a preguntarse en esa reunión en particular. Segundo, si en algún momento usa ese resumen como base de lo que dice, declarar que se apoyó en una herramienta para prepararlo, en lugar de presentarlo como una lectura propia completa.',
          'Esto no resta valor a lo que hizo: usar una IA para ganar tiempo sigue siendo razonable. Lo que cambia es que la verificación y la transparencia sobre cómo se preparó pasan a ser parte del proceso, no un paso opcional.',
        ],
        nota: '*(Acá me pregunto: si hubiera tenido los cinco minutos que no tuve, ¿los habría usado para verificar, o para hacer otra cosa?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir: no le corresponde desconfiar de toda herramienta de este tipo a partir de ahora, ni sentir que cometió una falta grave. Usar una IA para resumir no fue el error. Tampoco le corresponde garantizar que va a leer cada documento completo siempre: en contextos reales, con poco tiempo, eso no siempre es posible.',
          'Qué podría salir mal: que, por la vergüenza del momento, deje de usar la herramienta por completo y pierda el tiempo que le ahorraba; o que, al contrario, siga sin verificar y la próxima vez el dato que falte sea más grave que uno puntual. Lo que ajustaría para la próxima vez: reservar, aunque sea, cinco minutos antes de cualquier reunión importante para contrastar un resumen generado por IA con el documento que resume, en vez de entrar confiando en él sin mirar atrás.',
        ],
        nota: '*(Acá me pregunto: ¿qué otras veces usé un resumen o una respuesta de una IA como si fuera mi propio trabajo terminado, sin pensarlo dos veces?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué es esto: Asistencia, Delegación de criterio o Depende. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una escuela tiene que enviar un comunicado importante a familias que hablan otro idioma. Alguien le pide a una IA que lo traduzca y lo envía tal cual, sin que nadie que domine ese idioma lo revise antes. Días después, una familia comenta que una frase sonó más fría o más autoritaria de lo que la escuela quería transmitir.',
        analisis:
          '**¿Qué es esto?** Delegación de criterio. Traducir un texto con una IA es una asistencia razonable: nadie espera que una escuela tenga traductores de todos los idiomas posibles. Lo que se delegó mal fue la evaluación de si esa traducción decía lo que la escuela quería decir, con el tono adecuado para esa comunidad. Una traducción automática puede ser correcta gramaticalmente y aun así perder matices culturales, de formalidad o de calidez que sí importan cuando se habla con familias. Esa evaluación era un criterio humano que debía conservarse, con alguien que conociera el idioma y el contexto revisando antes de enviar.',
        nota: '*(Si elegiste "Asistencia": la traducción en sí lo es, pero enviarla sin que nadie la revise convierte una ayuda legítima en una decisión delegada por completo, sobre algo que afecta directamente a las familias.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una escuela usa un sistema automatizado para preseleccionar a los postulantes a una beca entre cientos de solicitudes. El sistema entrega una lista de seleccionados, pero nadie en la escuela sabe con qué criterios decide, ni puede explicarle a una familia por qué su hijo o hija no quedó.',
        analisis:
          '**¿Qué es esto?** Delegación de criterio, y de las serias. Acá no se delegó una tarea menor: se delegó una decisión que afecta directamente los derechos y las oportunidades de las familias, y nadie puede explicar cómo se tomó. Cuanto más importa una decisión para los derechos y las oportunidades de las personas, más debe poder conocerse y revisarse cómo se llegó a ella. Usar un sistema automatizado para ordenar una primera lista puede ser razonable si hay mucho volumen, pero la escuela sigue teniendo la responsabilidad de poder explicar los criterios y de ofrecer una instancia donde una familia pueda preguntar o pedir revisión. Sin eso, la automatización reemplazó por completo algo que debía seguir siendo responsabilidad humana e institucional.',
        nota: '*(Si elegiste "Asistencia": usar una herramienta para ordenar solicitudes puede serlo, pero acá no hay ninguna supervisión ni posibilidad de explicar o revisar la decisión, y eso la convierte en una delegación completa sobre algo que afecta derechos.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un docente usa una IA para generar una devolución personalizada para cada uno de sus treinta estudiantes, a partir de los trabajos que entregaron. Lee cada devolución generada, la ajusta donde no le parece precisa, y la firma con su nombre como si la hubiera escrito él mismo.',
        analisis:
          '**¿Qué es esto?** No hay una única respuesta correcta en este caso, y es a propósito. Una lectura puede apoyarse en que el docente sí ejerció su criterio: leyó cada devolución, corrigió lo que no le parecía preciso y se hizo responsable del contenido final, que es justamente lo que esta temática pide conservar. Desde esa mirada, es asistencia bien usada. Otra lectura puede apoyarse en la autoría: firmar con su nombre sin ninguna mención de que usó una herramienta puede no ser del todo transparente con los estudiantes, incluso si el contenido fue revisado, porque ellos podrían valorar distinto una devolución que saben hecha con ayuda de una IA. Lo que se evalúa es que puedas justificar tu lectura distinguiendo haber ejercido el criterio (que sí ocurrió acá) de haber sido transparente sobre la autoría (que es más discutible), y que no resuelvas el caso asumiendo automáticamente que revisar alcanza para que todo esté bien, ni que cualquier uso de IA en una devolución sea ilegítimo.',
        nota: '*(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: un docente que usó una IA para armar las preguntas de un examen y las aplicó sin revisarlas, y una de las preguntas resultó tener un error de contenido. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Las preguntas las generó la IA, no el docente. Si hay un error, es responsabilidad de la herramienta, no hay nada que el docente tuviera que haber verificado.',
      citaB:
        'Usar una IA para armar un examen ya es deshonesto en sí mismo. Cualquier uso de estas herramientas en la docencia es hacer trampa.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** traslada toda la responsabilidad a la herramienta. Un resultado automatizado no elimina la responsabilidad humana: el docente sigue siendo quien aplica el examen y evalúa a sus estudiantes con él, y verificar el contenido antes de usarlo era exactamente la parte del criterio que le correspondía conservar.',
      errorB:
        '**Análisis B:** rechaza cualquier uso de IA por sistema, sin distinguir asistencia de delegación. Usar una herramienta para generar un primer borrador de preguntas y después revisarlas con criterio propio es una asistencia legítima, no una trampa. El problema de este caso no es haber usado la herramienta: es no haber verificado lo que produjo antes de aplicarlo.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no distinguieron qué parte de la tarea era asistencia y qué parte era un criterio que había que conservar. Uno le entregó toda la responsabilidad a la IA, y el otro rechazó la herramienta entera sin mirar qué se hizo con ella.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la diferencia entre ampliar capacidad y delegar criterio',
        enunciado: '¿Cuál de estas describe mejor la diferencia entre ampliar una capacidad con una IA y delegarle el criterio?',
        opciones: [
          {
            id: 'a',
            texto:
              'Ampliar capacidad es cuando la IA ayuda y vos conservás la decisión final; delegar criterio es cuando, sin notarlo, le entregás una decisión que te correspondía a vos.',
          },
          { id: 'b', texto: 'No hay diferencia: usar una IA para cualquier tarea siempre es delegar criterio.' },
          {
            id: 'c',
            texto: 'Ampliar capacidad es usar la IA para tareas simples; delegar criterio es usarla para tareas complejas.',
          },
          { id: 'd', texto: 'La diferencia depende únicamente de cuánto tiempo ahorra la herramienta.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Si fuera así, cualquier uso de una calculadora o un traductor también sería delegar criterio. Lo que define la diferencia no es usar la herramienta, sino si conservás o no la decisión que te correspondía.',
          c: 'La complejidad de la tarea no es el criterio. Podés delegar bien una tarea compleja (como resumir un texto largo) y delegar mal una tarea simple, si en esa tarea simple había un juicio que debías conservar vos.',
          d: 'El tiempo ahorrado es un beneficio, no el criterio para distinguir asistencia de delegación. Lo que importa es qué parte del juicio quedó en manos de la herramienta.',
        },
      },
      {
        objetivo: 'identificar, en un uso concreto, qué es asistencia y qué delega algo que debería conservarse',
        enunciado:
          'Alguien le pide a una IA que traduzca un comunicado escolar a otro idioma y lo envía sin que nadie que domine ese idioma lo revise. ¿Qué parte se delegó de más?',
        opciones: [
          { id: 'a', texto: 'Nada: traducir con una IA siempre es asistencia pura, sin ningún riesgo.' },
          { id: 'b', texto: 'La traducción en sí misma, que nunca debería hacerse con una IA.' },
          {
            id: 'c',
            texto: 'La evaluación de si esa traducción decía lo que se quería decir, con el tono adecuado para esa comunidad.',
          },
          { id: 'd', texto: 'El envío del comunicado, que debería haberlo hecho otra persona.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Pedir una traducción es asistencia razonable, pero enviarla sin ninguna revisión sí tiene riesgo: una traducción puede ser correcta gramaticalmente y aun así perder matices de tono o de formalidad que importan.',
          b: 'El problema no es haber usado la IA para traducir, que es un uso legítimo. El problema es no haber revisado el resultado antes de enviarlo.',
          d: 'Quién envía el comunicado no es lo relevante. Lo que faltó fue una revisión de contenido antes del envío, sin importar quién apretara el botón.',
        },
      },
      {
        objetivo: 'reconocer cuándo un resultado puede estar sesgado y qué preguntas hacerle',
        enunciado:
          'Un sistema automatizado preselecciona postulantes a una beca, y nadie en la escuela sabe con qué criterios decide ni puede explicarlo a una familia. ¿Qué pregunta es más urgente hacerle a ese sistema?',
        opciones: [
          { id: 'a', texto: 'Cuánto tiempo tarda en procesar las solicitudes.' },
          {
            id: 'b',
            texto: 'Con qué datos entrenó o trabaja, y cómo se puede conocer y revisar su criterio de decisión.',
          },
          { id: 'c', texto: 'Qué diseño gráfico tiene la interfaz donde se cargan las solicitudes.' },
          { id: 'd', texto: 'Cuántas solicitudes puede procesar por día.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'La velocidad o la capacidad de procesamiento no dicen nada sobre si la decisión es justa o revisable. Son datos de rendimiento, no de criterio.',
          c: 'El diseño de la interfaz no tiene relación con cómo el sistema decide quién queda preseleccionado. Lo urgente es la transparencia del criterio, no la forma en que se carga la información.',
          d: 'La velocidad o la capacidad de procesamiento no dicen nada sobre si la decisión es justa o revisable. Son datos de rendimiento, no de criterio.',
        },
      },
      {
        objetivo: 'decidir cómo verificar, cuidar la autoría y los datos antes de usar lo que una IA produce',
        enunciado:
          'Alguien usa un resumen generado por una IA para prepararse para una reunión importante, sin haber leído el documento original. ¿Cuál es la actitud más adecuada antes de la reunión?',
        opciones: [
          { id: 'a', texto: 'Presentar el resumen como si fuera una lectura propia completa, porque suena claro y organizado.' },
          { id: 'b', texto: 'Descartar el resumen por completo y no decir nada en la reunión.' },
          { id: 'c', texto: 'Pedirle a la IA que le resuma el resumen, para ahorrar todavía más tiempo.' },
          {
            id: 'd',
            texto:
              'Contrastar el resumen con el documento original, aunque sea por arriba, y estar dispuesto a aclarar que se apoyó en una herramienta para prepararlo.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Presentar el resumen como una lectura propia completa es, justamente, delegar el criterio sin decirlo: no hay forma de saber si el resumen capturó lo que esa reunión en particular necesitaba.',
          b: 'Descartar el resumen no soluciona la falta de tiempo que lo motivó, y tampoco resuelve el problema de fondo, que es verificar lo que sí se tiene antes de usarlo.',
          c: 'Resumir un resumen aumenta la pérdida de matices y aleja todavía más del documento original. No reemplaza la verificación contra la fuente.',
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
          'Le entrega toda la responsabilidad a la IA ("el error es de la herramienta") o rechaza cualquier uso de IA por sistema, sin distinguir asistencia de delegación.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo se delegó de más, pero no identifica con precisión qué parte del criterio debía conservarse.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue asistencia de delegación de criterio, identifica qué parte del juicio humano debía conservarse y propone un movimiento proporcionado (verificar, cuidar datos, trazar autoría).',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo un resultado automatizado puede estar sesgado y qué preguntas hacerle, distingue cuándo una decisión afecta derechos y requiere mayor transparencia institucional, y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la diferencia entre ampliar capacidad y delegar criterio, los cinco elementos de la alfabetización en IA, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es que podés aplicar las tres preguntasuna acción propia y enseñarles a tus estudiantes a hacer lo mismo.',
    accionSemana:
      '**Una acción concreta para esta semana:** elegí una tarea propia donde usás, o podrías usar, una IA —redactar un mensaje, resumir algo, generar una lista de ideas— y aplicale las tres preguntas antes de la próxima vez que la hagas: qué parte es criterio y no podés delegar, con qué datos trabaja esa respuesta, y cómo vas a verificarla. Si todavía no usás ninguna IA para nada, elegí una tarea donde podrías probarlo, y pensá de antemano qué parte conservarías vos.',
    parrafo2:
      'Con tu curso, hagan un ejercicio simple: denle a una IA una consigna sobre un tema que ustedes ya conozcan bien —un hecho histórico, un proceso que explicaron en clase, un texto que ya leyeron— y comparen la respuesta con la fuente original. Pidan que anoten, en dos columnas, qué información se perdió (algo importante que el original tenía y la IA no mencionó) y qué se agregó (algo que la IA dijo y que el original no decía, o que directamente es incorrecto). El objetivo no es demostrar que la IA "está mal": es que vean, con un ejemplo concreto y verificable, por qué conviene contrastar antes de confiar.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** el resumen del informe, presentado sin haberlo leído. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte estaba bien delegar y qué parte no? ¿Qué harías distinto la próxima vez que tengas poco tiempo y mucho para leer? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula3: {
      titulo: 'Verificar antes de confiar: comprobar lo que dice una inteligencia artificial',
      objetivo:
        'Desarrollar el hábito de contrastar lo que produce una inteligencia artificial con una fuente confiable, distinguiendo información correcta, incompleta e inventada.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Una inteligencia artificial puede escribir con total seguridad algo que es correcto, algo que le falta información y algo que directamente inventó, sin que ninguna de las tres suene distinta. El tono convincente no es una señal de que algo sea cierto: es solo una característica de cómo esas herramientas redactan.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Verificar no significa desconfiar de todo lo que produce una IA. Significa desarrollar un hábito simple: antes de usar una respuesta como si fuera un hecho, contrastarla con una fuente que uno ya conoce o puede comprobar. Ese hábito tiene tres pasos:',
        },
        {
          tipo: 'lista',
          items: [
            'Identificar qué afirmaciones concretas hace la respuesta (fechas, datos, nombres, cifras).',
            'Buscar esas mismas afirmaciones en una fuente confiable, distinta de la IA.',
            'Anotar qué coincide, qué falta y qué sobra.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Cuanto más se repite este ejercicio con temas que ya se conocen bien, más fácil se vuelve reconocer, en temas nuevos, cuándo una respuesta necesita más chequeo antes de usarse.',
        },
      ],
      preguntaDetonadora:
        '¿Alguna vez una respuesta de una IA te sonó tan segura que no se te ocurrió dudar? ¿Qué pasaría si esa vez estaba equivocada?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Verdadero, falso o inventado" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá tres afirmaciones generadas por una IA sobre un tema que el curso ya conoce bien: una correcta, una incompleta y una inventada, sin decir cuál es cuál. En grupos, discuten cuál creen que es cada una y por qué, antes de buscar la respuesta.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "La fuente contra la IA" (45 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Paso a paso: en grupos, eligen un tema ya trabajado en clase y le piden a una IA una explicación breve sobre ese tema. Comparan la respuesta con el material original (un libro, un documento, los propios apuntes de clase) y completan una tabla de dos columnas: "Qué se perdió" y "Qué se agregó o está mal". Presentan su tabla al resto del curso, explicando cómo detectaron cada diferencia.',
            },
          ],
        },
      ],
      frase: '"Que suene seguro no significa que sea cierto: verificar es el paso que convierte una respuesta en información."',
      glosario: [
        'Verificación',
        'Fuente confiable',
        'Información inventada',
        'Contraste de fuentes',
        'Pensamiento crítico frente a la IA',
      ],
      referencias: [
        'UNESCO — Alfabetización mediática e informacional',
        'Chicos.net — Módulo de Inteligencia Artificial y derechos',
        'Video: "Cómo verificar lo que te dice una IA" — Canal Encuentro',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué pedirle un resumen a una IA no es, en sí mismo, el problema?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Inteligencia Artificial, en una tarjeta',
      parrafos: [
        'Delegar tareas no es problemático por sí mismo. El problema aparece cuando, junto con la tarea, delegamos también el criterio para evaluar lo que el sistema produce.',
        '**La diferencia central:** ampliar una capacidad es que la IA te ayude y vos conserves la decisión final. Delegar el criterio es que, sin notarlo, le entregues una decisión que te correspondía a vos.',
        '**Los cinco elementos de la alfabetización en IA:** límites · privacidad · verificación · responsabilidad · autoría.',
        '**Las tres preguntas, frente a cualquier uso de una IA:** ¿Qué parte de la tarea es criterio y no puedo delegar? · ¿Con qué datos entrenó o trabaja esta respuesta? · ¿Cómo verifico lo que me devolvió?',
        '**Y una cosa más:** un resultado con apariencia matemática no está libre de sesgo, de una finalidad definida por quien lo diseñó, ni de la posibilidad de ser revisado. Cuanto más importa una decisión, más hay que poder revisarla.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta es la primera temática del módulo Inteligencia Artificial. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Usar una IA para ampliar lo que podés hacer es legítimo, y así lo fue siempre con cualquier herramienta. Lo que no se delega es el criterio: qué parte de la tarea necesita tu juicio, qué tan confiable es lo que te devuelve, y quién responde por el resultado final. Hacerte esas preguntas antes de usar lo que una IA produce es, en esta temática como en todas las demás, la forma concreta de seguir siendo quien decide.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[IA_CRITERIO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
