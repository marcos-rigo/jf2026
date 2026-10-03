// Contenido de /tematicas/emocional. Mismo patrón que lib/cognitivo-informacional-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido() (misma regla que resolveTexto: audiencia activa si tiene contenido,
// si no el fallback explícito, si no el primero definido). Sin fuentes/citas: las
// referencias van como texto plano (sin SourceCite). Las negritas/cursivas en formato
// Markdown (**negrita**, *cursiva*) se renderizan con el helper Enfasis de
// components/emocional/ui.tsx, nunca como asteriscos literales.
//
// Texto de las secciones 1 a 10 tomado TEXTUAL de
// content-management/Dimensiones 4 emocional.docx (Prompts 2 y 3 del archivo de prompts).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/emocional/ficha-aula';

export const EMOCIONAL_FALLBACK: Audiencia = 'docentes';

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
  { id: 'emocion-y-decision', number: '05', label: 'Emoción y decisión', shortLabel: 'Emoción' },
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
  emocionYDecision: {
    titulo: string;
    recordar: { subtitulo: string; parrafo: string };
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
    // Adición que no figura en el contenido fuente (.docx) de esta página.
    siguienteDimensionTexto: string;
    siguienteDimensionHref: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Dimensión Emocional',
    subtitulo: 'De reaccionar a elegir',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que las emociones son parte de cómo decidimos, no una falla de racionalidad que haya que corregir.',
      'Reconocer qué emociones amplifican los entornos digitales — urgencia, pertenencia, miedo, reconocimiento, comparación — y cómo lo hacen.',
      'Practicar tres movimientos frente a eso: pausar, pedir una segunda mirada y pedir ayuda, sin patologizar lo que sentís ni lo que sienten tus estudiantes.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'Reconocer cómo las emociones influyen en lo que hacés dentro de entornos diseñados para reaccionar rápido, y decidir cuándo pausar, pedir una segunda mirada o pedir ayuda.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión emocional, distinguiendo regular una emoción de eliminarla.',
      'Identificar, en una situación concreta, cómo la arquitectura de una plataforma y sus métricas amplifican una emoción.',
      'Distinguir una reacción emocional normal de un patrón que merece atención, sin patologizar reacciones esperables.',
      'Decidir, frente a una situación digital, cuándo corresponde pausar, pedir una segunda mirada o pedir ayuda.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cuánto de lo que hacés en el celular lo decidís vos, y cuánto lo decide lo que sentís en ese momento?',
    parrafos: [
      'Son las nueve de la noche y llega al grupo de docentes un mensaje reenviado: "Están circulando pastillas con forma de caramelo cerca de las escuelas. Compartilo antes de que lo borren". No tiene fuente, no tiene fecha, pero sentís un miedo inmediato por tus estudiantes. Al mismo tiempo sentís otra cosa: la presión de no ser quien se quedó callado, quien no avisó a tiempo. Reenviás el mensaje en cuestión de segundos, sin pensarlo.',
      'Nadie te mintió sobre lo que sentiste. El miedo fue real, y la urgencia de avisar también. Lo que vale la pena mirar es otra cosa: cuánto de esa decisión la tomaste vos, y cuánto la tomó el miedo por vos, en el poco tiempo que te dio el mensaje para pensar.',
    ],
    problema:
      'Pensá en ese momento, o en uno parecido. ¿Qué emoción te empujó a actuar tan rápido? Si hubieras tenido un minuto más antes de reenviarlo, ¿habrías hecho lo mismo?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Las decisiones digitales las toma gente que siente miedo, curiosidad, deseo de pertenencia, frustración, esperanza o necesidad de reconocimiento. La alfabetización emocional es la capacidad de reconocer cómo esos estados modifican la atención y la elección, sin tratarlos como fallas de racionalidad que haya que corregir. Sentir no es el problema: el problema es no darse cuenta de cómo lo que sentís está empujando lo que hacés.',
      'De ahí sale una distinción importante. Regular una emoción no es eliminarla. El psicólogo James Gross, que estudia la regulación emocional, muestra que regular es disponer de estrategias para actuar de un modo compatible con los propios objetivos, no apagar lo que se siente. El miedo del gancho anterior no había que borrarlo: había que decidir qué hacer con él antes de que decidiera solo.',
      'Esto importa más en entornos diseñados para acortar el tiempo entre el estímulo y la reacción: notificaciones, mensajes con tono de urgencia, contadores de "me gusta", scroll que no termina nunca. Cuanto menos tiempo hay entre sentir algo y actuar, menos lugar queda para elegir. Por eso en estos entornos se vuelve valioso introducir una pausa, pedir una segunda mirada antes de actuar, y aprender a reconocer una urgencia artificial: una urgencia que no nace de lo que realmente está pasando, sino del diseño del mensaje o de la plataforma.',
      'Una aclaración que vale para toda esta temática: no se trata de psicologizar cualquier uso intenso de la tecnología o cualquier malestar. Pasar mucho tiempo jugando, revisar el celular seguido o sentir angustia por un mensaje no son, por sí solos, un problema a diagnosticar. El objetivo es distinguir patrones, contextos y consecuencias, y construir espacios donde pedir ayuda no genere vergüenza ni un castigo desproporcionado.',
    ],
    fichaAula1: {
      titulo: 'Jugar también es vivir: ciudadanía digital en mundos gamer',
      objetivo:
        'Reconocer que los videojuegos y las comunidades gamer son espacios sociales donde se construyen aprendizajes, vínculos, valores y conflictos, y reflexionar sobre cómo fomentar una ciudadanía digital ética, inclusiva y participativa en esos entornos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Los videojuegos no son solo entretenimiento: son espacios de encuentro, aprendizaje, expresión y construcción de identidad. La cultura gamer reúne millones de personas que juegan, conversan, comparten contenidos y forman comunidades alrededor de narrativas compartidas.',
        },
        { tipo: 'parrafo', texto: 'En los mundos gamer también se manifiestan formas de ciudadanía digital:' },
        {
          tipo: 'lista',
          items: [
            'Cooperación, estrategia, resolución de problemas',
            'Vínculos comunitarios y pertenencia',
            'Creación de normas, roles y reputación digital',
            'Discriminación, acoso, toxicidad o exclusión',
            'Reflexión ética sobre el juego, la violencia o la representación',
          ],
        },
        { tipo: 'parrafo', texto: 'Por eso es importante formar ciudadanía gamer que:' },
        {
          tipo: 'lista',
          items: [
            'Cuide los entornos de juego como espacios seguros e inclusivos',
            'Rechace la violencia simbólica o verbal',
            'Promueva la equidad de género y la participación diversa',
            'Fomente el pensamiento crítico sobre los mensajes y reglas del juego',
            'Transforme lo lúdico en herramienta de aprendizaje, activismo o creación artística',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Educar para una cultura gamer crítica, creativa y ética es parte esencial de una pedagogía de la ciudadanía digital del siglo XXI.',
        },
      ],
      preguntaDetonadora:
        '¿Qué aprendés cuando jugás? ¿Te sentís parte de una comunidad? ¿Cómo se convive en un mundo donde todo parece ser competencia?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Tu historia gamer" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, cada estudiante comparte: ¿Cuál fue el primer juego que recordás jugar? ¿Qué te dejó ese juego? ¿Lo jugaste solo/a o con otros? ¿Qué sentís que aprendiste jugando? Se detectan emociones, vínculos y aprendizajes asociados al juego.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Código gamer para una comunidad saludable" (45-60 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Paso a paso: en equipos, imaginan que administran una comunidad gamer (Discord, Twitch, Roblox, Minecraft, etc.). Diseñan un "Código de convivencia gamer" que incluya 5 principios éticos (respeto, diversidad, empatía, juego limpio...), 3 normas de participación o moderación, 1 acción colectiva para fomentar comunidad positiva, y un nombre o lema del grupo. Presentan sus códigos en formato gráfico, audiovisual o textual.',
            },
          ],
        },
      ],
      frase: 'El juego no se trata solo de ganar. Se trata de cómo convivimos mientras jugamos.',
      glosario: ['Cultura gamer', 'Ciudadanía lúdica', 'Toxicidad en línea', 'Comunidades virtuales', 'Game-based learning'],
      referencias: [
        'Guía "Cultura gamer y ciudadanía digital" – Faro Digital / Chicos.net',
        'UNESCO – El potencial educativo de los videojuegos',
        'Video: "Gamers que inspiran: historias que van más allá del juego" – Canal Encuentro',
        'Plataforma Scratch – creación de juegos con sentido social',
        'Juego: Papers, Please (ética y dilemas en contexto de frontera)',
      ],
    },
  },
  emocionYDecision: {
    titulo: 'Emoción y decisión',
    recordar: {
      subtitulo: 'Recordar',
      parrafo:
        'En lo digital aparecen, sobre todo, cinco emociones que conviene poder nombrar: la **urgencia**, que empuja a actuar ya; la **pertenencia**, el deseo de sentirse parte de un grupo; el **miedo**, a perderse algo, a quedar expuesto o a que algo malo pase; el **reconocimiento**, la necesidad de que otros vean y valoren lo que hacemos; y la **comparación**, medirnos contra la vida que muestran los demás. Nombrar cuál de estas está presente en un momento dado es el primer movimiento de esta dimensión: no se puede decidir qué hacer con una emoción que no identificamos.',
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué las emociones participan de la decisión: no son un ruido que interfiere con pensar bien, son parte de cómo evaluamos y elegimos. Cuando sentís miedo, pertenencia o urgencia, esa emoción ya está orientando lo que vas a hacer, lo notes o no. El objetivo no es sacar la emoción de la decisión, sino darse cuenta de que está ahí.',
        'Por qué las métricas y las notificaciones las amplifican: urgencia, pertenencia, miedo, reconocimiento y comparación pueden ser amplificados por el diseño de una plataforma y por sus métricas. Un contador de "me gusta" amplifica el reconocimiento y la comparación. Un mensaje con "compartilo antes de que lo borren" fabrica una urgencia. Un aviso de "tus amigos ya respondieron" tira de la pertenencia. Nada de esto es casual: son entornos construidos para reducir el tiempo entre el estímulo y la reacción, y cuanto menos tiempo hay, más decide la emoción y menos decidís vos.',
        'Por qué regular no es reprimir: regular una emoción es disponer de estrategias para actuar de un modo compatible con tus propios objetivos, no apagarla ni fingir que no está. Reprimir el miedo del gancho anterior no habría servido de nada; lo que servía era darse un minuto antes de reenviar.',
        'Por qué no hay que patologizar: usar mucho el celular, sentir angustia por un mensaje o pasar horas jugando no son, por sí solos, un problema. Lo que importa es distinguir el patrón (¿es algo puntual o se repite siempre igual?), el contexto (¿qué está pasando alrededor de esa persona?) y las consecuencias (¿le está afectando el descanso, los vínculos, el aprendizaje?). Diagnosticar desde afuera, sin mirar estas tres cosas, suele equivocarse.',
        'Por qué pedir ayuda no debe producir vergüenza ni castigo: si alguien reconoce que algo lo supera, la respuesta no puede ser una sanción ni una humillación, porque eso enseña a esconder en vez de a pedir ayuda la próxima vez. Una cultura de cuidado se construye, entre otras cosas, con esto.',
      ],
      recuadro: {
        titulo: 'Lo que la dimensión emocional NO es',
        parrafos: [
          'No es eliminar las emociones ni actuar "sin sentir nada": eso no es posible ni deseable.',
          'No es diagnosticar o patologizar cualquier uso intenso: hace falta mirar el patrón, el contexto y las consecuencias antes de sacar una conclusión.',
          'No es resolverlo todo en soledad: regular no siempre alcanza, y pedir ayuda también es parte de esta capacidad.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación digital que te genera una reacción fuerte, tres preguntas:',
      preguntas: [
        '**¿Qué siento?** Nombrar la emoción: urgencia, miedo, pertenencia, reconocimiento, comparación, u otra.',
        '**¿Qué me está empujando?** Reconocer si hay algo en el diseño del mensaje o de la plataforma que está amplificando esa emoción.',
        '**¿Qué decidiría con una segunda mirada?** Imaginar la misma decisión unos minutos después, con más tiempo para pensarla.',
      ],
      parrafoMovimientos: 'Y tres movimientos, según lo que haga falta:',
      movimientos: [
        '**Pausar:** dejar pasar un momento antes de actuar, sobre todo cuando algo pide una reacción inmediata.',
        '**Pedir una segunda mirada:** mostrarle la situación a otra persona antes de decidir, para contrastar lo que una sola mirada no ve.',
        '**Pedir ayuda:** cuando el patrón, el contexto o las consecuencias superan lo que una persona puede resolver sola, y pedirla no debería costar vergüenza.',
      ],
    },
    fichaAula2: {
      titulo: 'Lo que pienso, lo decido yo: proteger la mente en la era digital',
      objetivo:
        'Comprender qué son los neuroderechos y reflexionar sobre los desafíos éticos y jurídicos de las tecnologías que interfieren o acceden al pensamiento, la emoción y el comportamiento humano.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Vivimos un tiempo donde la tecnología no solo conecta personas o automatiza tareas: también comienza a leer, interpretar, modificar y anticipar la actividad mental humana. Estas tecnologías incluyen interfaces cerebro-computadora, neurochips, sensores neurotecnológicos y sistemas que infieren estados emocionales.',
        },
        { tipo: 'parrafo', texto: 'En este contexto emergen los neuroderechos, una nueva generación de derechos humanos orientada a proteger:' },
        {
          tipo: 'lista',
          items: [
            'La privacidad mental: que nadie acceda sin consentimiento a nuestros pensamientos.',
            'La identidad personal: evitar manipulaciones de personalidad o emociones.',
            'El libre albedrío: decidir sin interferencias tecnológicas.',
            'La integridad psiconeuronal: no ser sometidos a alteraciones cerebrales sin justificación ética.',
            'La equidad en el acceso a mejoras cognitivas: evitar brechas entre personas aumentadas y no aumentadas.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Países como Chile ya han comenzado a incorporar estos derechos en su legislación, y organismos como la ONU y UNESCO los discuten en comités de bioética y tecnología.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Como ciudadanía digital del siglo XXI, es clave formarse, debatir y exigir protección ética, democrática y humana frente a tecnologías que interfieren con la intimidad más profunda: la mente.',
        },
      ],
      preguntaDetonadora: '¿Te sentirías cómodo si un dispositivo pudiera leer tus pensamientos? ¿Quién debería regular eso?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mis pensamientos, mi refugio" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En una hoja, cada estudiante escribe un pensamiento que no compartiría en voz alta. Luego lo rompe o guarda en un sobre sin mostrar. Se reflexiona: ¿por qué hay cosas que merecen quedar solo en la mente? ¿Qué pasaría si perdemos ese espacio íntimo?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñamos una Carta de Neuroderechos Juveniles" (45-60 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Paso a paso: en grupos, investigan uno de los neuroderechos emergentes. Redactan un artículo breve de una "Carta de Neuroderechos" desde la mirada juvenil: ¿Qué protege? ¿Por qué es necesario? ¿Cómo evitar su vulneración? Se presentan como afiches, posteos, video o mural colectivo. Reflexión grupal: ¿quién debe proteger estos derechos? ¿Qué rol tienen gobiernos, empresas, escuelas y personas?',
            },
          ],
        },
      ],
      frase: 'La libertad comienza en tu mente. Defenderla es el nuevo acto de coraje.',
      glosario: ['Neuroderechos', 'Privacidad mental', 'Identidad psiconeuronal', 'Libre albedrío cognitivo', 'Neurotecnologías'],
      referencias: [
        'Fundación NeuroRights',
        'ONU – Panel de Alto Nivel sobre Neurotecnología',
        'Documental "The Mind Reader" – DW',
        'Libro: Neuroética en la sociedad digital – Rafael Yuste',
        'Video: "¿Tu mente es tuya?" – Canal Encuentro',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una estudiante de cuarto año llega varios días seguidos a clase con cara de cansancio. Durante la hora, revisa el celular todo el tiempo, por debajo del banco, aunque sabe que no está permitido. El docente nota que le cuesta concentrarse y, en un momento de hartazgo, está a punto de decirle delante de todos: "Vas a terminar adicta al celular". Se frena antes de decirlo, y decide pensarlo mejor.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: una estudiante muestra señales de cansancio y una dificultad concreta para concentrarse, y el docente conecta eso de forma automática con el uso del celular, sin saber todavía qué hay detrás. Lo que está en juego no es solo la atención en esta clase: es cómo se siente esa estudiante y qué pasa si el docente le pone una etiqueta ("adicta") sin haber hablado con ella.',
        ],
        nota: '(Acá me pregunto: ¿qué me llevó a mí a pensar "adicta al celular" tan rápido? ¿Lo pensé porque lo vi, o porque es la explicación más fácil?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la capacidad de distinguir un patrón, un contexto y una consecuencia, en lugar de diagnosticar desde un solo momento. Un uso intenso del celular, por sí solo, no dice nada: puede venir de mil cosas distintas, y "adicta" es una palabra que define a la persona entera a partir de una sola conducta observada una vez.',
          'Las condiciones del entorno también importan: tal vez en su casa está pasando algo, tal vez no está durmiendo bien, tal vez el celular es, para ella en este momento, la única forma de sostener un vínculo importante. Ponerle una etiqueta sin conocer nada de esto es exactamente lo que este módulo pide evitar.',
        ],
        nota: '(Acá me pregunto: ¿hasta qué punto sé de su vida fuera del aula, más allá de lo que veo en estos cuarenta minutos?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no corresponde una sanción ni una etiqueta frente al curso. Lo proporcionado es acercarse a ella en un momento aparte, sin público y sin juicio, y preguntarle cómo está, no interrogarla sobre el celular. Una pregunta simple como "te noto cansada estos días, ¿todo bien?" abre una puerta que una acusación cierra de entrada.',
          'Si de esa conversación surge algo que excede lo que el docente puede acompañar solo —algo que se sostiene en el tiempo, que afecta su descanso o sus vínculos de forma seria—, lo que corresponde es ofrecerle ayuda y, si hace falta, derivarla al equipo de orientación de la escuela. Pedir ayuda no tiene que sentirse como un castigo, ni para ella ni como algo que el docente le "hace".',
        ],
        nota: '(Acá me pregunto: si le pregunto cómo está, ¿estoy realmente dispuesto a escuchar la respuesta, sea cual sea?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca a mí diagnosticar si hay o no un problema, ni resolverlo quitándole el celular como sanción delante del curso. Eso no ataca la causa, solo castiga una conducta visible, y además rompe la confianza que hacía falta para que ella se anime a contar qué le pasa. Diagnosticar es tarea del equipo de orientación, no mía.',
          'Qué podría salir mal: que mi comentario, aunque no lo diga en voz alta frente a todos, igual la haga sentir juzgada; que la conversación se convierta en un interrogatorio en vez de una escucha; o que, por apurarme a "resolverlo", no la derive cuando en realidad hacía falta. Lo que ajustaría para la próxima: tener ya pensado, antes de que pase, a quién recurro en la escuela si una situación así me parece que excede lo que puedo acompañar yo.',
        ],
        nota: '(Acá me pregunto: ¿tengo claro a quién derivar en mi escuela si esto resulta ser más serio de lo que parece?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué hacer primero: Pausar, Segunda mirada o Pedir ayuda. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'En el chat de familias circula un mensaje: "Están regalando entradas gratis a un recital por tiempo limitado, quedan pocas, cliqueá ya". Una familia te lo reenvía apurada, preguntando si lo compartís con el resto del curso.',
        analisis:
          '¿Qué hacés primero? Pausar. El mensaje está construido para generar urgencia artificial: "por tiempo limitado", "quedan pocas", "ya". No hay ningún dato real ahí, solo un diseño que empuja a actuar sin pensar. Antes de reenviar nada, lo proporcionado es frenar un momento y preguntarse de dónde salió ese mensaje, no reenviarlo solo porque alguien más lo mandó con apuro.',
        nota: '(Si elegiste "Segunda mirada" o "Pedir ayuda": no está mal pensarlo después, pero acá lo que falló primero fue no frenar ni un segundo frente a un mensaje diseñado para que no lo hagas.)',
      },
      {
        clave: 's2',
        enunciado:
          'Un estudiante publica una foto en sus redes y, al ver que tiene pocos "me gusta" comparado con lo que suele recibir, la borra a los pocos minutos, visiblemente incómodo.',
        analisis:
          '¿Qué hacés primero? Segunda mirada. Acá no hay una urgencia externa que frenar: hay una reacción emocional —la comparación y el reconocimiento amplificados por un contador— que ya pasó y generó una conducta puntual (borrar la foto). Lo que corresponde no es alarmarse ni intervenir en el momento frente a todos, sino, en un momento aparte, ayudarlo a mirar la situación con otra perspectiva: preguntarle qué sintió, sin dramatizar ni restarle importancia. Es un único episodio, no todavía un patrón.',
        nota: '(Si elegiste "Pedir ayuda": es prematuro para un solo episodio. Guardalo como algo para observar si se repite, no como algo que ya necesita derivación.)',
      },
      {
        clave: 's3',
        enunciado:
          'Un estudiante juega varias horas por día a un videojuego online, incluso de madrugada según cuentan sus compañeros. Vos le preguntás cómo está y él responde, tranquilo, que está bien, que es su forma de desconectar y que ahí tiene a sus mejores amigos.',
        analisis:
          '¿Qué hacés primero? No hay una única respuesta correcta en este caso, y es a propósito: un uso muy intenso, por sí solo, no define nada. Lo que hay que mirar es el patrón (¿juega así desde siempre o es algo reciente?), el contexto (¿qué más está pasando en su vida: el sueño, los vínculos fuera del juego, el rendimiento escolar?) y las consecuencias (¿algo de esto se está deteriorando de forma sostenida?). Una lectura puede apoyarse en que, si él mismo identifica ahí su comunidad y dice estar bien, no hay que patologizar un uso intenso sin más evidencia. Otra puede apoyarse en la señal del horario (de madrugada) como algo que vale la pena seguir de cerca, por ejemplo con una segunda mirada de la familia o del equipo de orientación, sin tratarlo todavía como una emergencia. Lo que se evalúa es que puedas justificar tu lectura con el patrón, el contexto y las consecuencias, no que adivines una respuesta.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el mismo caso: un estudiante que pasa horas enganchado al celular durante los recreos y se pone ansioso si se lo piden. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Es un problema de falta de autocontrol. Si no puede soltar el celular ni un recreo, el problema es de él: tiene que hacerse cargo y aprender a controlarse.',
      citaB:
        'Es totalmente normal, todos los chicos están todo el tiempo en el celular. No hay nada que intervenir ni de qué preocuparse.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        'Análisis A: culpa a la persona y la reduce a una falla de carácter, sin mirar ni el patrón, ni el contexto, ni las consecuencias. Además, trata una reacción —la ansiedad al pedírselo— como si fuera solo mala voluntad, cuando podría estar mostrando otra cosa que vale la pena entender antes de juzgar.',
      errorB:
        'Análisis B: minimiza por sistema, usando "todos hacen lo mismo" como si eso cerrara la pregunta. Que algo sea frecuente no significa que no haya nada para mirar: la ansiedad al pedírselo es justamente una señal que, combinada con el patrón y el contexto, podría merecer una conversación.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno se detuvo a mirar el patrón, el contexto y las consecuencias antes de sacar una conclusión. Uno decidió que la culpa era toda de la persona; el otro decidió que no había nada que ver.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro: 'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión, distinguiendo regular de eliminar emociones',
        enunciado: '¿Cuál de estas describe mejor qué significa "regular" una emoción, según esta temática?',
        opciones: [
          { id: 'a', texto: 'Eliminarla, para que no interfiera con la decisión.' },
          { id: 'b', texto: 'Reprimirla, para no mostrarla frente a otros.' },
          { id: 'c', texto: 'Disponer de estrategias para actuar de un modo compatible con tus propios objetivos, sin negar lo que sentís.' },
          { id: 'd', texto: 'Esperar a que se pase sola, sin hacer nada mientras tanto.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Eliminar una emoción no es posible ni es el objetivo. Las emociones participan de la decisión; el punto es darse cuenta de cómo lo están haciendo, no borrarlas.',
          b: 'Reprimir no es regular. Fingir que no sentís algo no cambia que esa emoción siga influyendo en lo que hacés, solo la vuelve menos visible.',
          d: 'Esperar pasivamente puede servir a veces, pero no es lo mismo que disponer de una estrategia. Regular implica elegir qué hacer con lo que sentís, no solo dejar que pase el tiempo.',
        },
      },
      {
        objetivo: 'identificar cómo la arquitectura y las métricas amplifican una emoción',
        enunciado: 'Un mensaje reenviado dice: "Compartilo antes de que lo borren". ¿Qué está haciendo esa frase?',
        opciones: [
          { id: 'a', texto: 'Informando un hecho verificable sobre un límite de tiempo real.' },
          { id: 'b', texto: 'Fabricando una urgencia artificial para acortar el tiempo que tenés para pensar antes de actuar.' },
          { id: 'c', texto: 'Apelando únicamente a la pertenencia, no a la urgencia.' },
          { id: 'd', texto: 'No tiene ningún efecto sobre cómo lo leés: el contenido del mensaje es lo único que importa.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'No hay ningún dato verificable en esa frase sobre un límite de tiempo real; es una construcción retórica, no información.',
          c: 'La frase apunta directamente a la urgencia (el "antes de que"), no a la pertenencia. Las dos emociones pueden amplificarse juntas en otros mensajes, pero acá el mecanismo central es la urgencia.',
          d: 'El diseño de un mensaje —su tono, sus plazos ficticios, sus palabras— sí condiciona cómo lo leés y cuánto tiempo te da para pensar, más allá del contenido en sí.',
        },
      },
      {
        objetivo: 'distinguir una reacción normal de un patrón que merece atención, sin patologizar',
        enunciado:
          'Un estudiante borra una publicación a los pocos minutos porque recibió menos "me gusta" de lo habitual. ¿Cómo conviene leer esta situación, con lo visto en esta temática?',
        opciones: [
          { id: 'a', texto: 'Como un signo claro de un problema serio con las redes sociales, que hay que derivar enseguida.' },
          {
            id: 'b',
            texto:
              'Como una reacción puntual ante la comparación y el reconocimiento amplificados por un contador; no alcanza por sí sola para hablar de un patrón.',
          },
          { id: 'c', texto: 'Como algo que no amerita ninguna atención, porque borrar una publicación es irrelevante.' },
          { id: 'd', texto: 'Como un problema exclusivamente de autoestima que el docente debe resolver sin involucrar a nadie más.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Un solo episodio no define un patrón. Tratarlo como un problema serio de entrada es patologizar una reacción que, en ese momento, es esperable.',
          c: 'Restarle toda importancia tampoco es correcto: es una oportunidad para acompañar con una segunda mirada, aunque no amerite una derivación.',
          d: 'No hace falta que el docente lo resuelva en soledad ni que lo convierta en un diagnóstico de autoestima; alcanza con una conversación cercana, sin dramatizar.',
        },
      },
      {
        objetivo: 'decidir cuándo pausar, pedir una segunda mirada o pedir ayuda',
        enunciado:
          'Un estudiante dice sentirse bien pero juega muchas horas por día, incluso de madrugada, según cuentan sus compañeros. ¿Cuál es la actitud más adecuada?',
        opciones: [
          { id: 'a', texto: 'Decirle que tiene que dejar de jugar inmediatamente, porque esa cantidad de horas ya es un problema.' },
          { id: 'b', texto: 'No hacer nada, porque él mismo dice estar bien y eso alcanza para cerrar el tema.' },
          {
            id: 'c',
            texto:
              'Mirar el patrón, el contexto y las consecuencias a lo largo del tiempo, y considerar una segunda mirada (familia, orientación) sin tratarlo como una emergencia ni como un castigo.',
          },
          { id: 'd', texto: 'Quitarle el celular como medida preventiva hasta que el comportamiento cambie.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Una cantidad de horas, aislada, no alcanza para diagnosticar nada, y menos para imponer un castigo. Eso es justamente patologizar sin mirar el patrón completo.',
          d: 'Una cantidad de horas, aislada, no alcanza para diagnosticar nada, y menos para imponer un castigo. Eso es justamente patologizar sin mirar el patrón completo.',
          b: 'Que la persona diga estar bien es un dato importante, pero no el único: el horario y lo que cuentan los compañeros son señales que vale la pena seguir de cerca, sin ignorarlas por completo.',
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
        muestra: 'Culpa a la persona ("falta de autocontrol") o minimiza por sistema ("es normal, no hay nada que ver").',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que hay una emoción en juego, pero no distingue si se trata de un patrón o de un episodio puntual.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue una reacción normal de un patrón que merece atención, mirando patrón, contexto y consecuencias.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además identifica cómo la arquitectura o las métricas amplifican la emoción, y propone pausar, pedir una segunda mirada o pedir ayuda sin generar vergüenza ni castigo.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: las emociones que amplifican los entornos digitales, la diferencia entre regular y reprimir, y un caso recorrido de punta a punta sin patologizar. Lo que cambia, a partir de acá, es la pausa que te das a vos mismo y la que les ofrecés a tus estudiantes antes de que una emoción decida por ustedes.',
    accionSemana:
      'Una acción concreta para esta semana: antes de responder o reenviar algo que te mueve —una alarma, un enojo, ganas de comparar—, frená un momento y pedile a alguien una segunda mirada antes de actuar. Con tus estudiantes, proponeles acordar juntos dos cosas: una pausa breve antes de reaccionar ante algo que los altera en el grupo del curso, y un camino claro para pedir ayuda cuando algo los supera, sin que eso implique vergüenza ni sanción.',
    parrafo3:
      'Volvé al problema de Por qué importa: el mensaje de alarma que reenviaste en segundos. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué emoción identificás ahora en ese momento, y qué harías distinto la próxima vez? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué harías distinto?',
    fichaAula3: {
      titulo: 'Cuando la red se vuelve hostil: riesgos en la convivencia digital',
      objetivo:
        'Identificar los principales riesgos que afectan la convivencia en entornos digitales y reflexionar sobre cómo prevenirlos y actuar ante situaciones de agresión, discriminación o violencia simbólica.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'No todo lo que ocurre en internet es positivo. A veces, los espacios digitales —en apariencia divertidos o neutros— se convierten en escenarios de violencia simbólica, acoso, exclusión o discriminación. Estos riesgos afectan la convivencia digital y también fuera de ella.',
        },
        { tipo: 'parrafo', texto: 'Entre los principales riesgos encontramos:' },
        {
          tipo: 'lista',
          items: [
            'Ciberacoso: cuando alguien agrede, hostiga o humilla a otra persona de forma repetida usando medios digitales.',
            'Discriminación y violencia simbólica: cuando se ridiculiza, excluye o agrede a alguien por su género, origen, cuerpo, identidad, religión u opiniones.',
            'Discurso de odio: expresiones que buscan fomentar hostilidad hacia personas o grupos por prejuicios ideológicos, sociales o culturales.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Estas prácticas muchas veces se invisibilizan con frases como "es solo un chiste" o "pasa siempre en internet", pero tienen consecuencias reales: afectan la autoestima, generan angustia y, en casos extremos, pueden derivar en aislamiento. Frente a esto, es fundamental educar para la prevención y fortalecer redes de confianza. Nadie debería sentirse solo/a ante una agresión digital. Contar con adultos de confianza, normativas claras y una cultura de cuidado colectivo es clave para desnaturalizarla.',
        },
      ],
      preguntaDetonadora: '¿Alguna vez viste una situación injusta en internet? ¿Qué hiciste? ¿Qué podrías hacer?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Detrás del emoji" (10-15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Mostrá distintos mensajes o publicaciones reales (anónimas) con emojis "neutrales" o aparentemente graciosos. Preguntá: ¿Qué emociones pueden ocultarse detrás? ¿A quién podría afectar esto? ¿Es humor o violencia?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Semillero de reacciones responsables" (40 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Paso a paso: presentá distintos escenarios de violencia digital (acoso en redes, burla en grupo, exclusión en juegos en línea). En equipos, cada grupo analiza qué tipo de riesgo se presenta, propone 2 formas de prevenirlo, y elabora un "protocolo ciudadano" de acción: ¿qué haría un buen ciudadano digital ante esto? Cada grupo diseña una viñeta estilo cómic o meme positivo que contrarreste el hecho. Socializan las creaciones y reflexionan: ¿qué rol queremos ocupar ante estas situaciones?',
            },
          ],
        },
      ],
      frase: "Decir 'solo es internet' es una forma de callar. Elegir intervenir es una forma de cuidar.",
      glosario: ['Violencia simbólica', 'Ciberacoso', 'Discurso de odio', 'Empatía digital', 'Prevención'],
      referencias: [
        'Guía sobre Convivencia Digital – UNICEF & Faro Digital',
        'Video: "Cuando el bullying se vuelve invisible" – YouTube Educativo',
        'Herramientas: chicos.net y fundacionkarisma.org',
        'Actividad: El Juego de las Reacciones – diseño propio para poner en práctica opciones positivas ante agresiones online',
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
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué reenviar algo en segundos no siempre es una decisión libre?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Emocional, en una tarjeta',
      parrafos: [
        'Las emociones no son una falla de la razón: son parte de cómo decidimos. El problema no es sentir, es no darse cuenta de cómo lo que sentimos está empujando lo que hacemos.',
        '**Las emociones que más amplifican los entornos digitales:** urgencia · pertenencia · miedo · reconocimiento · comparación.',
        '**Las tres preguntas, frente a una reacción fuerte:** ¿Qué siento? · ¿Qué me está empujando? · ¿Qué decidiría con una segunda mirada?',
        '**Los tres movimientos:** pausar · pedir una segunda mirada · pedir ayuda.',
        '**Y una cosa más:** pedir ayuda no debería dar vergüenza ni traer un castigo. Es parte de esta capacidad, no una excepción a ella.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la cuarta de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Cognitivo-Intelectual e Informacional',
    seguiEnlace2Href: '/tematicas/cognitivo-intelectual-e-informacional',
    seguiDespues: '.',
    siguienteDimensionTexto: 'Siguiente dimensión: Salud y Bienestar Digital',
    siguienteDimensionHref: '/tematicas/salud-y-bienestar-digital',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Sentir no es el problema. Lo importante es elegir qué hacer con lo que sentimos, sobre todo en entornos diseñados para que decidamos antes de pensar. Pausar, pedir una segunda mirada y pedir ayuda no son señales de debilidad: son, en estos entornos, la forma más concreta de seguir eligiendo vos.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[EMOCIONAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
