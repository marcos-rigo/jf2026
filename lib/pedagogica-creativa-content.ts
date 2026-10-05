// Contenido de /tematicas/pedagogica-y-creativa. Mismo patrón que lib/seguridad-proteccion-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/pedagogica-creativa/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// Dimensión 8 (Capítulo 22 del manual).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/pedagogica-creativa/ficha-aula';

export const PEDAGOGICA_CREATIVA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'aprender-crear-cuestionar', number: '05', label: 'Aprender, crear, cuestionar', shortLabel: 'Aprender' },
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
  aprenderCrearCuestionar: {
    titulo: string;
    recordar: { subtitulo: string; intro: string; elementos: string[]; cierre: string };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
      parrafoFicha: string;
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
    pasos: string[];
    cierrePasos: string;
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
    titulo: 'Dimensión Pedagógica y Creativa',
    subtitulo: 'De usar herramientas a aprender con ellas',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que aprender tecnología no consiste solo en adaptarse a los sistemas que ya existen, sino en comprenderlos, usarlos para crear y poder cuestionarlos.',
      'Distinguir la capacidad aumentada de la sustitución cognitiva: una herramienta puede ampliar lo que podés hacer o hacer por vos lo que necesitabas aprender.',
      'Usar un criterio pedagógico para decidir, en cada caso, qué capacidad humana querés preservar o desarrollar mientras usás una tecnología.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'decidir cómo usar la tecnología para aprender y crear, preservando y desarrollando las capacidades humanas que importan, y no solo adaptándote a lo que las herramientas hacen.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión pedagógica y creativa, explicando la paradoja de aprender a usar las herramientas antes de disponer de los lenguajes para comprenderlas.',
      'Distinguir cuatro formas de relacionarse con una tecnología: adaptarse a ella, comprenderla, usarla para crear y cuestionarla.',
      'Distinguir, en una situación concreta, la capacidad aumentada de la sustitución cognitiva.',
      'Decidir qué capacidad humana conviene preservar o desarrollar y rediseñar una actividad en consecuencia.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: 'Cuando la herramienta hace el trabajo, ¿qué aprende la persona?',
    parrafos: [
      'Estás planificando una clase de historia. La consigna es simple: cada grupo tiene que crear un video de dos minutos sobre un tema del programa. Mientras la armás, probás una aplicación que un colega te recomendó. Escribís el tema, y en diez minutos la aplicación te devuelve un video completo, con imágenes, narración y música. Queda prolijo. Y te das cuenta de algo que te inquieta: tus estudiantes también podrían hacerlo así, sin leer, sin discutir y sin entender nada del tema.',
      'El problema no es que usen la aplicación. El problema es que la consigna que escribiste pide un producto y no dice nada sobre qué se supone que deberían aprender al hacerlo. Si el video es el único criterio, la herramienta cumple la consigna mejor que cualquier estudiante.',
      'Esa es una paradoja de nuestro tiempo: aprendimos a usar herramientas muy potentes antes de tener las palabras y los criterios para entender qué hacen y qué dejan de hacer por nosotros. Esta temática trabaja justamente ese vacío.',
    ],
    problema:
      'Pensá en esa clase, o en una parecida. ¿Qué querías que aprendieran: a usar la herramienta, el contenido o a pensar? ¿Qué parte de la tarea es la que de verdad enseña algo, y qué parte podría hacer la aplicación sin que se pierda nada importante?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La transformación digital produjo una paradoja: sociedades enteras aprendieron a usar herramientas antes de disponer de los lenguajes suficientes para comprenderlas. Sabemos publicar, buscar, grabar o pedirle algo a una aplicación, pero no siempre sabemos qué está haciendo ese sistema por nosotros, cómo decide ni qué deja de lado. Ese es el vacío que apareció en el gancho: la herramienta hace el trabajo, y quien la usa no necesariamente comprende lo que se hizo.',
      'Por eso la dimensión pedagógica y creativa no pregunta qué herramienta conviene enseñar, sino algo más duradero: cómo desarrollar capacidades transferibles y cómo seguir aprendiendo cuando el entorno cambia. Las aplicaciones van a cambiar una y otra vez. Lo que perdura es lo que aprendimos a hacer con ellas: observar, descomponer un problema, comparar, crear y preguntar.',
      'El manual articula esta idea con tres autores. John Dewey pensó el aprendizaje como experiencia: se aprende haciendo y reflexionando sobre lo que se hace. Paulo Freire propuso una ciudadanía crítica: educar para leer el mundo y no solo para adaptarse a él. Y Seymour Papert vinculó el aprendizaje con la creación: se aprende construyendo algo propio, y la tecnología puede ser un material para crear y no solo un medio para consumir.',
      'De esa base surge lo que el manual llama Pedagogía Cívica Digital, que integra la alfabetización tecnológica con la autonomía, la ética, la convivencia y la participación. Su idea central es que aprender tecnología no consiste únicamente en adaptarse a los sistemas existentes. Consiste en comprenderlos, utilizarlos para crear y adquirir la capacidad de cuestionarlos. Esa es la idea que organiza toda esta temática.',
      'Pensá en algo que aprendiste a hacer con tecnología. ¿Lo aprendiste solo usándolo, entendiendo cómo funciona, creando algo propio con eso o preguntándote por qué funciona así y no de otra manera?',
    ],
    fichaAula1: {
      titulo: 'Educar para convivir, participar y cuidar: una pedagogía para la ciudadanía del siglo XXI',
      objetivo:
        'Reconocer la importancia de una pedagogía que integre la formación cívica, digital, ética y afectiva, promoviendo el protagonismo juvenil, la responsabilidad colectiva y el cuidado mutuo en entornos presenciales y digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La educación ciudadana no puede limitarse a conocer instituciones o normas: debe convertirse en una **pedagogía viva**, conectada con las realidades que atraviesan a los y las jóvenes en sus cuerpos, territorios y pantallas.',
        },
        { tipo: 'parrafo', texto: 'Hablamos de una **pedagogía cívica y digital de cuidado**, que articula:' },
        {
          tipo: 'lista',
          items: [
            '**Civismo activo**: aprender los derechos y deberes en clave democrática, plural y situada.',
            '**Ciudadanía digital**: pensar la identidad, los vínculos, la participación y los derechos en entornos digitales.',
            '**Cuidado ético**: promover la empatía, el bienestar y la protección mutua como dimensión política.',
            '**Participación transformadora**: dar lugar a la voz de los y las estudiantes como sujetos sociales que pueden cambiar su entorno.',
          ],
        },
        { tipo: 'parrafo', texto: 'Esta pedagogía:' },
        {
          tipo: 'lista',
          items: [
            'Apuesta por una **educación integral** (racional, emocional, corporal y digital).',
            'Trabaja con **confianza y vínculo horizontal** entre docentes y estudiantes.',
            'Promueve una **ciudadanía crítica y creativa**, que no se limita al aula.',
            'Cuestiona los discursos de odio y las lógicas del individualismo competitivo.',
            'Sitúa el **cuidado como principio pedagógico y político**: cuidar al otro, al entorno, a uno mismo.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Educar con esta mirada es formar personas **capaces de convivir en la diferencia, transformar la injusticia y usar la tecnología con sentido colectivo**.',
        },
      ],
      preguntaDetonadora:
        '*¿Qué tipo de ciudadanía estamos formando en la escuela? ¿Una que obedece, una que consume, o una que cuida, pregunta y transforma?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Educación que deja huella" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Cada estudiante escribe una situación donde sintió que **fue escuchado, acompañado o motivado a participar** (en la escuela o fuera de ella).',
            },
            { tipo: 'parrafo', texto: '→ Luego comparten:' },
            {
              tipo: 'lista',
              items: ['¿Qué hizo especial esa experiencia?', '¿Qué docente o persona la permitió?'],
            },
            { tipo: 'parrafo', texto: '→ Se rescatan las claves de una pedagogía que deja marca.' },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñamos nuestra pedagogía de la ciudadanía" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, diseñan una propuesta pedagógica ideal para su escuela/comunidad:',
                '¿Qué valores debe promover?',
                '¿Qué temas debe tratar (tecnología, democracia, derechos, cuidado)?',
                '¿Qué metodologías debe usar?',
                '¿Qué tipo de vínculo debe proponer entre docentes y estudiantes?',
                'Le dan nombre y forma (afiche, carta abierta, mural, podcast).',
                'Exponen sus propuestas y construyen un "Manifiesto colectivo de ciudadanía pedagógica".',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Educar es un acto de amor, de escucha y de coraje: es enseñar a cuidar y a no ser indiferente nunca más."*',
      glosario: [
        'Pedagogía cívica',
        'Ciudadanía digital crítica',
        'Cultura del cuidado',
        'Participación transformadora',
        'Educación ética y afectiva',
      ],
      referencias: [
        'Paulo Freire – Pedagogía del oprimido',
        'Guía "Educar en ciudadanía digital" – UNESCO / Chicos.net',
        'Bell Hooks – Enseñar a transgredir',
        'Ministerio de Educación Argentina – Cuadernos de Educación Ciudadana',
        'Video: "¿Qué escuela queremos construir juntos?" – Canal Encuentro',
      ],
    },
  },
  aprenderCrearCuestionar: {
    titulo: 'Aprender, crear, cuestionar',
    recordar: {
      subtitulo: 'Recordar',
      intro: 'Hay cuatro formas de relacionarse con una tecnología, y cada una pide algo distinto:',
      elementos: [
        '**Adaptarse:** aprender a usar lo que ya existe, tal como viene. Es necesario, pero es solo el primer paso.',
        '**Comprender:** entender qué hace el sistema, cómo funciona, qué decide y qué deja de lado.',
        '**Crear:** usar la tecnología para producir algo propio, como un texto, un video, una solución o un programa.',
        '**Cuestionar:** preguntarse quién la diseñó, para qué, a quién favorece y qué otras alternativas hay.',
      ],
      cierre:
        'Una **capacidad transferible** es la que sirve más allá de una herramienta concreta: se puede aplicar en situaciones nuevas, cuando la aplicación o el contexto cambian. Saber descomponer un problema, comparar fuentes, explicar una decisión o crear algo propio son capacidades transferibles. Saber en qué botón hacer clic dentro de una aplicación determinada, no.',
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué usar no es comprender: se puede manejar con total soltura un sistema sin saber qué hace por nosotros. Usamos buscadores, correctores, recomendadores y asistentes todos los días, y la mayoría de las veces no sabríamos explicar cómo llegan a lo que nos muestran. Esa es la paradoja de la que partimos: aprendimos a usar antes de comprender.',
        'Por qué crear enseña más que consumir: cuando alguien crea algo, tiene que decidir, equivocarse, ajustar y explicar lo que hizo. Esa experiencia obliga a entender tanto el tema como la herramienta, y es lo que Dewey y Papert ponían en el centro del aprendizaje. Recibir un producto terminado, en cambio, no exige nada de eso.',
        'Por qué cuestionar es parte del aprendizaje: la tecnología no es neutra. Alguien la diseñó con objetivos, supuestos y límites, y aprender a preguntar quién decide, qué prioriza y qué deja afuera es parte de una ciudadanía crítica, como la pensaba Freire. Cuestionar no significa rechazar la tecnología: significa poder usarla sin dar por sentado que lo que hace es lo único posible.',
        'Y la distinción central de esta dimensión: la inteligencia artificial obliga a diferenciar la **capacidad aumentada** de la **sustitución cognitiva**. Una herramienta puede ampliar la creatividad y reducir barreras, por ejemplo traduciendo, dictando o ayudando a practicar. Pero también puede hacer por la persona justamente lo que necesitaba ejercitar. La misma herramienta puede aumentar una capacidad en una actividad y sustituirla en otra, según lo que la consigna le pida a quien la usa. Por eso el criterio no es si se usa o no la herramienta: el criterio pedagógico es qué capacidad humana queremos preservar o desarrollar durante la interacción.',
      ],
      recuadro: {
        titulo: 'Lo que la dimensión pedagógica y creativa NO es',
        parrafos: [
          'No es aprender a usar herramientas: eso es adaptarse, y es solo el primero de los cuatro movimientos.',
          'No es prohibir la inteligencia artificial: el problema no es la herramienta, sino qué capacidad deja de ejercitarse cuando se la usa.',
          'No es aceptar cualquier uso porque el resultado queda bien: un buen producto no prueba que alguien haya aprendido.',
          'No es crear por crear: crear sirve cuando exige comprender, decidir y poder explicar lo que se hizo.',
          'No es solo cosa de estudiantes: los docentes también decidimos qué capacidades preservar cuando usamos estas herramientas.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Antes de proponer, usar o evaluar una tarea con tecnología, tres preguntas:',
      preguntas: [
        '**¿Qué capacidad quiero que se desarrolle?** Qué debería poder hacer la persona al terminar, aunque la herramienta cambie.',
        '**¿Qué hace la herramienta y qué hace la persona?** Dónde está la línea entre una ayuda que amplía y una que reemplaza.',
        '**¿Qué parte de la tarea es el aprendizaje?** La parte que, si la hace la herramienta, hace que se pierda lo importante.',
      ],
      parrafoMovimientos: 'Y tres movimientos para diseñar o ajustar una actividad:',
      movimientos: [
        '**Comprender antes de delegar:** asegurarse de saber hacer algo, o de entender qué hizo la herramienta, antes de dejarla hacerlo. Pedir que expliquen con sus propias palabras qué se hizo y por qué.',
        '**Crear algo propio:** agregar a la tarea una parte que la herramienta no pueda resolver sola: una decisión, una explicación, una comparación o un aporte personal.',
        '**Cuestionar la herramienta:** preguntarse qué hizo bien, qué dejó afuera, quién la diseñó y qué otra forma había de resolverlo.',
      ],
      parrafoFicha:
        'Una manera de entrenar la comprensión sin depender de ninguna herramienta en particular es el pensamiento computacional: dividir un problema, buscar patrones, quedarse con lo esencial, escribir pasos claros y evaluar el resultado. La ficha de abajo lo trabaja con y sin programación.',
    },
    fichaAula2: {
      titulo: 'Pensar como programador: resolver, crear y construir soluciones con lógica',
      objetivo:
        'Desarrollar habilidades para identificar problemas, descomponerlos, pensar soluciones lógicas y diseñar secuencias de acciones usando los principios del pensamiento computacional, con o sin programación.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'El **pensamiento computacional** no se trata solo de programar: es una forma de abordar los problemas con **estructura, estrategia y creatividad**, inspirada en la lógica de las computadoras pero aplicable a la vida cotidiana.',
        },
        { tipo: 'parrafo', texto: 'Este pensamiento implica:' },
        {
          tipo: 'lista',
          items: [
            '**Descomposición**: dividir un problema complejo en partes manejables.',
            '**Reconocimiento de patrones**: identificar similitudes para aplicar soluciones previas.',
            '**Abstracción**: centrarse en lo esencial, dejando lo irrelevante.',
            '**Algoritmos**: crear instrucciones claras, ordenadas y replicables.',
            '**Evaluación**: verificar si la solución funciona y cómo puede mejorarse.',
          ],
        },
        { tipo: 'parrafo', texto: 'El pensamiento computacional fomenta:' },
        {
          tipo: 'lista',
          items: [
            'Autonomía en la resolución de problemas',
            'Creatividad técnica',
            'Trabajo por proyectos',
            'Capacidad para entender cómo funcionan las tecnologías',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Es una **habilidad transversal** que forma parte de la ciudadanía digital crítica y creadora.',
        },
      ],
      preguntaDetonadora:
        '*¿Qué tiene que ver programar con resolver los problemas del día a día? ¿Pensás en pasos cuando enfrentás un desafío?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Instrucciones imposibles" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, deben escribir instrucciones para que una persona ajena prepare un mate o un sándwich… sin omitir ningún paso.',
            },
            { tipo: 'parrafo', texto: '→ Al compartir, se nota cómo pequeños detalles hacen fallar el resultado.' },
            {
              tipo: 'parrafo',
              texto: '→ Reflexión: ¿por qué es importante pensar paso por paso? ¿Qué es un algoritmo?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Desafíos con lógica y creatividad" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, eligen un problema o reto cotidiano (organizar tareas, hacer una lista de reproducción, crear una trivia, resolver un conflicto escolar…).',
                'Aplican las etapas del pensamiento computacional:',
                'Descomponen el problema',
                'Detectan patrones similares',
                'Abstraen lo central',
                'Proponen una solución en forma de algoritmo (con o sin código)',
                'Pueden usar lenguajes visuales (como Scratch o diagramas de flujo) para representar sus soluciones.',
                'Presentan el resultado y lo testean en la práctica.',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Programar no es solo escribir código: es entrenar tu mente para encontrar caminos cuando todo parece un laberinto."*',
      glosario: [
        'Pensamiento computacional',
        'Algoritmo',
        'Descomposición',
        'Abstracción',
        'Lógica de programación',
      ],
      referencias: [
        'Plataforma Scratch',
        'Code.org – Introducción al pensamiento computacional',
        'Video: "¿Qué es pensar como una computadora?" – TED-Ed',
        'Chicos.net – Guía para enseñar programación creativa',
        'Fundación Sadosky – Program.AR',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un docente de historia de tercer año planifica un trabajo para el cierre del trimestre: cada grupo tiene que crear un video de dos minutos sobre un hecho del programa. Para probar la consigna, usa una aplicación que le recomendó un colega. Escribe el tema y, en diez minutos, la aplicación le devuelve un video completo, con imágenes, narración y música. Queda prolijo, y el docente se da cuenta de que sus estudiantes podrían entregar algo igual sin haber leído una línea del material. Su primera reacción es prohibir la aplicación. Pero enseguida piensa que, si la prohíbe, los estudiantes van a usarla igual, y que además no estaría enseñando nada sobre cómo usarla.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: el docente descubrió que la consigna que escribió pide un producto y no dice nada sobre qué se espera que los estudiantes aprendan al hacerlo. La herramienta cumple muy bien con lo que la consigna pide, y por eso ya no se puede saber, mirando el video, si alguien comprendió el tema. Lo que está en juego no es la aplicación: es qué capacidad quiere desarrollar con esta actividad y cómo se va a dar cuenta de si se desarrolló.',
        ],
        nota: '(Acá me pregunto: si el video fuera perfecto, ¿cómo sabría yo que entendieron el tema? ¿Y si lo hubiera hecho yo con la aplicación, habría aprendido algo?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué hace la herramienta y qué hace la persona. La aplicación busca información, la resume, elige las imágenes, escribe la narración y arma el video. Lo que queda para la persona es escribir el tema y apretar un botón. Esto es lo que se llama sustitución cognitiva: la herramienta hace justo lo que la actividad quería que los estudiantes ejercitaran, que es investigar, seleccionar, organizar y explicar.',
          'Pero no todo lo que hace la herramienta es un problema. Armar la edición, buscar imágenes o generar una voz puede ser una ayuda legítima, que amplía lo que pueden hacer y reduce barreras técnicas para quienes no manejan edición de video. La pregunta no es si la usan, sino qué parte de la tarea es el aprendizaje y qué parte puede ser ayuda sin que se pierda nada importante. En este caso, el aprendizaje está en comprender el hecho histórico y poder explicarlo, no en el montaje.',
        ],
        nota: '(Acá me pregunto: de todo lo que implica hacer este video, ¿qué parte es la que quiero que aprendan y qué parte es solo el envoltorio?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: ni prohibir ni aceptar sin más. Lo proporcionado es rediseñar la consigna para que usar la herramienta no alcance, y que cada paso exija comprender. Por ejemplo: pedir que, antes de armar el video, cada grupo escriba con sus palabras tres ideas centrales del hecho y la fuente de donde sale cada una; que contrasten lo que dice la aplicación con al menos otra fuente y señalen qué corrigieron o qué faltaba; que incluyan una parte propia que la herramienta no pueda resolver, como una pregunta, una opinión fundamentada o una conexión con la actualidad; y que defiendan el video oralmente y expliquen qué decisiones tomaron.',
          'De ese modo, la herramienta pasa a ser parte del trabajo y no un reemplazo. Y se vuelve a un momento de cuestionamiento: pedir que los grupos digan qué hizo bien la aplicación, qué dejó afuera y qué cambiarían.',
        ],
        nota: '(Acá me pregunto: ¿qué pasos de la consigna exigen que la persona piense y cuáles podría resolver la herramienta sola? ¿Cómo puedo hacer que los segundos pesen más?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca a mí definir sola cuál es la política de la escuela sobre el uso de estas herramientas. Eso es una discusión institucional, que involucra a la dirección, al equipo docente y, cuando corresponde, a las familias. Lo que sí me corresponde es decidir cómo las uso en mis consignas, ser clara con los estudiantes sobre qué está permitido y qué se espera, y llevar lo que aprendí a esa conversación.',
          'Qué podría salir mal: que la consigna nueva sea tan exigente que desmotive; que los estudiantes igual usen la herramienta para responder las preguntas de comprensión; o que cada docente de la escuela fije reglas distintas y los estudiantes no sepan a qué atenerse. Lo que ajustaría para la próxima vez: probar la consigna yo misma con la herramienta, antes de dársela a los estudiantes, para ver qué parte resuelve sola; y proponer en la escuela una conversación para acordar criterios comunes.',
        ],
        nota: '(Acá me pregunto: ¿qué le diría a un colega que quiere prohibir estas herramientas, y a otro que quiere usarlas para todo? ¿Habría un criterio común que pueda proponer?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir si la herramienta aumenta una capacidad, la sustituye o si depende. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una estudiante de quinto año tiene que leer un artículo científico escrito en inglés para una clase de biología. Su nivel de inglés todavía no le alcanza para leerlo de corrido. Usa un traductor para pasar el texto al español y un lector de voz para escucharlo mientras sigue la lectura. Después cierra la herramienta y escribe, con sus palabras, un resumen de las tres ideas principales y una pregunta que le quedó sin responder.',
        analisis:
          '**¿Aumenta o sustituye?** Aumenta. La herramienta le abre el acceso a un texto que, sin ella, estaba fuera de su alcance, y reduce una barrera que no es la que la actividad quería trabajar: el objetivo de la clase es comprender el contenido biológico, no dominar el inglés. Lo central es que lo que sigue lo hace ella: resumir con sus palabras y formular una pregunta propia son justamente las capacidades que se querían desarrollar. La herramienta amplía lo que puede hacer, y no hace por ella lo que necesitaba ejercitar.',
        nota: '(Si elegiste "Sustituye" o "Depende": la duda es razonable, porque la herramienta hace una parte del trabajo. Pero esa parte no es la que la actividad quería enseñar, y lo que sí quería enseñar lo hizo la estudiante.)',
      },
      {
        clave: 's2',
        enunciado:
          'Un docente, con poco tiempo, le pide a una inteligencia artificial que le arme la planificación completa del trimestre para su materia: objetivos, actividades, evaluaciones y bibliografía. La respuesta es prolija y está bien organizada. La copia en el formato de la escuela y la entrega a la dirección sin cambiar nada ni revisar las actividades. No conoce a fondo cómo están planteadas ni si se adaptan a su curso.',
        analisis:
          '**¿Aumenta o sustituye?** Sustituye. La planificación es una de las tareas donde el criterio pedagógico del docente es lo que más importa: decidir qué enseñar, a quién, con qué actividades y cómo evaluar. Al delegarla entera y aplicarla sin revisar, la herramienta hace justamente aquello que el docente necesitaba ejercitar, y él queda sin poder explicar ni ajustar lo que va a enseñar. El problema no es haber consultado a la IA, que podría ser un buen punto de partida, sino no comprender ni adaptar el resultado antes de usarlo.',
        nota: '(Si elegiste "Aumenta": la herramienta puede aumentar si se usa para generar ideas que después se revisan y se adaptan. Lo que cambia el resultado es no haber comprendido ni ajustado nada de lo que se aplicó.)',
      },
      {
        clave: 's3',
        enunciado:
          'Un estudiante de segundo año tiene dislexia y, por eso, escribir textos largos le resulta muy costoso: se frustra, tarda horas y muchas veces no logra poner en el papel lo que sabe. Para una tarea de lengua, usa una inteligencia artificial para redactar la respuesta a partir de sus ideas, que le cuenta en voz alta. La docente se da cuenta de que el texto está muy bien escrito, mucho mejor de lo que el estudiante suele entregar. Duda: ¿lo está ayudando o está haciendo el trabajo por él?',
        analisis:
          '**¿Aumenta o sustituye?** No hay una única respuesta correcta en este caso, y es a propósito: depende de qué capacidad se quiere preservar o desarrollar. Si lo que se evalúa es comprender un texto literario y expresar una interpretación propia, la herramienta puede reducir una barrera real y permitirle mostrar lo que sabe, lo que sería capacidad aumentada. Pero si lo que se quiere trabajar es la escritura misma, delegarla por completo podría impedirle practicarla, con lo cual la herramienta la sustituiría. Una lectura puede apoyarse en la accesibilidad: el estudiante tiene derecho a que lo que no es el objetivo no sea un obstáculo. Otra puede apoyarse en el desarrollo: si nunca ejercita la escritura, esa dificultad no se trabaja. Y una tercera puede combinar ambas: usar la herramienta para organizar sus ideas y producir un borrador, y que el estudiante lo revise, lo reescriba con sus palabras y lo explique. Lo que se evalúa es que puedas justificar tu lectura en función de la capacidad que querés preservar, y que no resuelvas el caso ni prohibiendo la herramienta ni dándola por buena sin preguntar.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: un grupo de estudiantes que usó una aplicación para armar un trabajo de investigación y lo presentó con muy buen resultado. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Toda ayuda tecnológica sustituye el aprendizaje. Si usaron una aplicación, no aprendieron nada. Hay que prohibir estas herramientas en la escuela.',
      citaB:
        'El trabajo quedó muy bien. Si el resultado es bueno, no importa cómo lo hicieron ni qué aprendieron. Lo único que cuenta es el producto final.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** da por sentado que toda herramienta sustituye, sin mirar qué capacidad está en juego. Una herramienta puede ampliar lo que alguien puede hacer y reducir barreras, como un traductor que da acceso a un texto o un lector de voz que acompaña una lectura. Prohibirla sin distinguir deja de lado esos usos, y además no enseña a usarla con criterio.',
      errorB:
        '**Análisis B:** confunde un buen resultado con un buen aprendizaje. Un producto bien hecho no prueba que alguien haya comprendido: la herramienta pudo haber resuelto justamente lo que había que ejercitar. Si lo único que cuenta es el producto, no hay forma de saber qué capacidad se desarrolló.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no se hicieron la pregunta pedagógica de qué capacidad humana se quería desarrollar. Uno decidió que la herramienta siempre sustituye, y el otro decidió que no importaba qué hacía.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y explicar la paradoja de usar antes de comprender',
        enunciado: '¿Cuál de estas afirmaciones describe mejor la paradoja de la que parte esta dimensión?',
        opciones: [
          { id: 'a', texto: 'Las personas usan la tecnología cada vez menos, porque se volvió demasiado complicada.' },
          {
            id: 'b',
            texto:
              'Sociedades enteras aprendieron a usar herramientas antes de disponer de los lenguajes suficientes para comprenderlas.',
          },
          { id: 'c', texto: 'La tecnología avanzó más rápido que las leyes y por eso no se puede regular.' },
          { id: 'd', texto: 'Cuanto más fácil de usar es una herramienta, más seguro es el aprendizaje que produce.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Ocurre lo contrario: se usa cada vez más, y justamente por eso aparece el problema. El uso se extendió mucho más rápido que la comprensión de lo que esas herramientas hacen.',
          c: 'Esa es otra discusión, la de la regulación, que corresponde a la dimensión ético-normativa. La paradoja pedagógica trata de usar sin comprender.',
          d: 'Una herramienta fácil de usar puede reducir barreras, pero eso no garantiza aprendizaje. Si hace por la persona lo que necesitaba ejercitar, puede incluso impedirlo.',
        },
      },
      {
        objetivo: 'distinguir las cuatro formas de relacionarse con una tecnología',
        enunciado:
          'Un grupo de estudiantes recibe una aplicación nueva, la usa para armar un trabajo, y después discute quién la diseñó, para qué y qué decisiones dejó afuera. ¿Qué forma de relacionarse con la tecnología agrega esa última discusión?',
        opciones: [
          { id: 'a', texto: 'Adaptarse: aprender a usarla tal como viene.' },
          { id: 'b', texto: 'Comprender: entender cómo funciona.' },
          { id: 'c', texto: 'Crear: producir algo propio con ella.' },
          {
            id: 'd',
            texto: 'Cuestionar: preguntarse quién la diseñó, para qué, a quién favorece y qué alternativas hay.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Adaptarse es el primer paso, pero no incluye preguntarse por el diseño ni por las alternativas. Eso va más allá de usarla.',
          b: 'Comprender es entender qué hace el sistema y cómo funciona. Lo que describe el caso, preguntar quién la diseñó y a quién favorece, ya es cuestionar.',
          c: 'Crear es producir algo propio con la tecnología. La discusión sobre el diseño y las decisiones de la aplicación es una forma de cuestionarla.',
        },
      },
      {
        objetivo: 'distinguir la capacidad aumentada de la sustitución cognitiva',
        enunciado:
          'Una estudiante usa un corrector para detectar errores de ortografía en un texto que escribió ella. Otra le pide a una IA que escriba el texto completo y lo entrega como suyo. ¿Cuál es la lectura más adecuada, según el criterio pedagógico?',
        opciones: [
          {
            id: 'a',
            texto:
              'El primer caso amplía una capacidad y el segundo la sustituye, si lo que se quería desarrollar era la escritura y la organización de ideas.',
          },
          { id: 'b', texto: 'Los dos son lo mismo: en ambos usan una herramienta.' },
          { id: 'c', texto: 'Los dos sustituyen, porque en ambos interviene una herramienta.' },
          { id: 'd', texto: 'Ninguno plantea un problema: lo que importa es que el texto quede bien.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Usar una herramienta no alcanza para igualar los casos. Lo que importa es qué hace la herramienta y qué sigue haciendo la persona: en el primer caso ella escribe, en el segundo no.',
          c: 'No toda intervención de una herramienta es sustitución. Si la persona sigue ejerciendo la capacidad que se quería desarrollar y la herramienta solo ayuda, amplía.',
          d: 'Un texto bien escrito no prueba que alguien haya aprendido. Si la herramienta hizo lo que había que ejercitar, el resultado oculta que no se desarrolló esa capacidad.',
        },
      },
      {
        objetivo: 'decidir qué capacidad preservar y rediseñar una actividad',
        enunciado:
          'Una docente descubre que sus estudiantes pueden hacer en diez minutos, con una aplicación, el trabajo que pedía. Quiere que sigan usándola, pero que aprendan el tema. ¿Qué rediseño es más adecuado?',
        opciones: [
          { id: 'a', texto: 'Prohibir la aplicación y pedir que lo hagan a mano.' },
          { id: 'b', texto: 'Aceptar los trabajos tal como llegan, porque están bien hechos.' },
          {
            id: 'c',
            texto:
              'Mantener la herramienta, pero sumar pasos que exijan comprender: explicar con sus palabras, contrastar con otra fuente, crear una parte propia y defender el trabajo oralmente.',
          },
          { id: 'd', texto: 'Pedirles que declaren si usaron la aplicación y descontar puntos en ese caso.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Prohibir no enseña a usar la herramienta con criterio, y es probable que igual la usen. Además deja de lado usos que sí amplían capacidades.',
          b: 'Un buen resultado no prueba que alguien haya comprendido. Aceptar el producto sin más es no hacerse la pregunta de qué capacidad se quería desarrollar.',
          d: 'Penalizar el uso no mejora el aprendizaje ni distingue entre un uso que amplía y uno que sustituye. Lo que cambia las cosas es rediseñar la tarea para que la comprensión importe.',
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
          'Prohíbe o acepta sin más: toda ayuda tecnológica le parece sustitución, o da por bueno un resultado sin preguntarse qué se aprendió.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que una herramienta puede ayudar o reemplazar, pero no identifica qué capacidad estaba en juego ni qué parte de la tarea era el aprendizaje.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue capacidad aumentada de sustitución según la capacidad que se quiere desarrollar y propone un rediseño proporcionado de la actividad.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además usa los cuatro movimientos (adaptarse, comprender, crear y cuestionar), diseña pasos que exigen comprender, reconoce cuándo una decisión excede su aula y requiere un criterio institucional, y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: los cuatro movimientos, la diferencia entre capacidad aumentada y sustitución cognitiva, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es que podés mirar tus propias consignas con una pregunta nueva: no solo qué producto piden, sino qué capacidad hace que se desarrolle cada paso.',
    accionSemana:
      '**Una acción concreta para esta semana:** elegí una consigna tuya que hoy una herramienta podría resolver casi sola y rediseñala para que no sustituya la capacidad que querés desarrollar. Para hacerlo, respondé las tres preguntas sobre esa consigna:',
    pasos: [
      '¿Qué capacidad quiero que se desarrolle?',
      '¿Qué hace la herramienta y qué hace la persona?',
      '¿Qué parte de la tarea es el aprendizaje?',
    ],
    cierrePasos:
      'Después agregale uno o dos pasos que exijan comprender: explicar con sus palabras, contrastar con otra fuente, sumar una parte propia que la herramienta no pueda resolver, o defender el trabajo oralmente. Probá la consigna vos mismo con la herramienta antes de dársela a los estudiantes, para ver qué parte resuelve sola.',
    parrafo2:
      'Y proponele a tu curso crear algo propio: una idea, una historia o una causa que quieran comunicar, en el formato que elijan. Que el centro de la tarea sea lo que quieren decir y para quién, y no el producto terminado.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** la clase del video de diez minutos. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué querías que aprendieran, qué parte de la tarea era el aprendizaje y cómo rediseñarías la consigna? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula3: {
      titulo: 'Crear es participar: expresarse, contar, transformar en lo digital',
      objetivo:
        'Desarrollar habilidades para crear, producir y publicar contenidos digitales con sentido crítico, creativo, inclusivo y responsable, adaptados a diferentes plataformas, públicos y propósitos comunicativos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Crear contenidos digitales no es solo "postear". Es **usar herramientas y lenguajes digitales para contar algo propio o colectivo, para expresarse, movilizar, informar, enseñar o generar comunidad.**',
        },
        {
          tipo: 'parrafo',
          texto:
            'Las plataformas actuales (TikTok, Instagram, YouTube, Canva, podcasts, blogs, videojuegos, reels) permiten que cualquier persona sea **productora de contenido**, no solo consumidora.',
        },
        { tipo: 'parrafo', texto: 'Para crear de forma significativa es clave:' },
        {
          tipo: 'lista',
          items: [
            'Tener un **mensaje claro** y una **intención definida**',
            'Conocer el **público objetivo**',
            'Dominar los **formatos digitales** más usados: imagen, texto, audio, video, combinación multimedia',
            'Usar recursos visuales, narrativos y emocionales',
            'Reflexionar sobre el **impacto ético y social** del contenido (¿qué genera?, ¿a quién afecta?)',
            'Usar licencias abiertas, citar fuentes y respetar derechos',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Crear es también una forma de **participar en lo público, defender causas, fortalecer la identidad y construir ciudadanía digital activa y creativa.**',
        },
      ],
      preguntaDetonadora:
        '*¿Qué contenido digital creaste últimamente que te represente? ¿Para qué o para quién lo hiciste?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Exploradores de formatos" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Se presentan ejemplos de:' },
            { tipo: 'lista', items: ['Reel', 'Podcast breve', 'Afiche digital', 'Post informativo'] },
            { tipo: 'parrafo', texto: '→ En grupos, analizan:' },
            {
              tipo: 'lista',
              items: ['¿Qué hace efectivo a ese contenido?', '¿Qué tono usa? ¿Qué lo hace creativo?'],
            },
            { tipo: 'parrafo', texto: '→ Luego, eligen cuál les gustaría aprender a producir.' },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi contenido, mi voz" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada estudiante (o grupo) elige una idea, historia o causa que quiera comunicar.',
                'Eligen un formato digital (video corto, meme, reel, podcast, carrusel, mural digital, animación, historia interactiva…).',
                'Planifican:',
                'Objetivo',
                'Público destinatario',
                'Tono del mensaje',
                'Recursos a usar (texto, imagen, música, IA, etc.)',
                'Duración o extensión',
                'Producen y presentan sus contenidos.',
                'Reflexionan en grupo: ¿Qué aprendí creando? ¿Qué impacto puede tener lo que produzco?',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Cuando creás con conciencia, tu contenido deja de ser un post: se convierte en una voz que transforma."*',
      glosario: [
        'Creación digital',
        'Narrativa multimedia',
        'Propósito comunicativo',
        'Participación digital',
        'Responsabilidad autoral',
      ],
      referencias: [
        'Canva, Genially, Audacity, Anchor, CapCut',
        'Chicos.net – Ciudadanía digital y creatividad',
        'UNESCO – Manual de producción multimedia escolar',
        'Plataforma Scratch – Creación libre y en comunidad',
        'Video: "Crear para decir: contenidos con sentido" – Canal Encuentro',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué que una herramienta haga bien una tarea no significa que la persona haya aprendido?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Pedagógica y Creativa, en una tarjeta',
      parrafos: [
        'Aprendimos a usar herramientas antes de tener los lenguajes para comprenderlas. La pregunta de esta dimensión es cómo desarrollar capacidades transferibles y seguir aprendiendo cuando el entorno cambia.',
        '**Los cuatro movimientos:** adaptarse · comprender · crear · cuestionar.',
        '**El criterio pedagógico:** no es si se usa o no una herramienta, sino qué capacidad humana queremos preservar o desarrollar durante la interacción. La inteligencia artificial puede ampliar una capacidad o sustituirla.',
        '**Las tres preguntas, antes de diseñar o usar una tarea:** ¿Qué capacidad quiero que se desarrolle? · ¿Qué hace la herramienta y qué hace la persona? · ¿Qué parte de la tarea es el aprendizaje?',
        '**Y una cosa más:** un buen producto no prueba que alguien haya aprendido. Crear algo propio y poder explicarlo es lo que lo muestra.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la octava de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Seguridad, Privacidad y Protección Digital',
    seguiEnlace2Href: '/tematicas/seguridad-privacidad-y-proteccion-digital',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Aprender no es adaptarse. Es comprender cómo funcionan las cosas que usamos, crear algo propio con ellas y poder cuestionarlas cuando hace falta. Las herramientas van a seguir cambiando, y lo que queda es lo que aprendimos a hacer con ellas. Por eso, antes de preguntar qué herramienta conviene usar, vale la pena hacer otra pregunta: qué capacidad queremos que siga siendo nuestra.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[PEDAGOGICA_CREATIVA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
