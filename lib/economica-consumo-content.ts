// Contenido de /tematicas/economica-productiva-y-de-consumo. Mismo patrón que
// lib/participacion-democracia-content.ts: escrito solo para 'docentes', cualquier otra
// audiencia cae a ese fallback vía resolveContenido(). Sin fuentes/citas: las referencias
// van como texto plano (sin SourceCite). Las negritas/cursivas en formato Markdown
// (**negrita**, *cursiva*) se renderizan con el helper Enfasis de
// components/economica-consumo/ui.tsx, nunca como asteriscos literales. Texto de las
// secciones 1 a 10 tomado TEXTUAL de los prompts de la Dimensión 10 (Capítulo 24 del manual).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/economica-consumo/ficha-aula';

export const ECONOMICA_CONSUMO_FALLBACK: Audiencia = 'docentes';

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
  { id: 'condiciones-y-autonomia', number: '05', label: 'Condiciones y autonomía', shortLabel: 'Autonomía' },
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
  condicionesYAutonomia: {
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
    pasos: string[];
    cierrePasos: string;
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
    titulo: 'Dimensión Económica, Productiva y de Consumo',
    subtitulo: 'De comprar con un clic a decidir con condiciones claras',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que una decisión disponible no es necesariamente una decisión libre: aceptar con un clic no significa haber decidido con toda la información.',
      'Reconocer qué se juega en los cuatro ámbitos de la vida económica digital: el consumo y los pagos, las suscripciones y la publicidad personalizada, el trabajo con herramientas automatizadas, y la creación de contenidos y de datos.',
      'Usar tres preguntas simples para decidir con autonomía, en lugar de dejar que el diseño de una interfaz decida por vos.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar las condiciones reales de una decisión económica en un entorno digital —una compra, una suscripción, una oferta personalizada, una herramienta de trabajo automatizada— y decidir cómo actuar con autonomía, distinguiendo lo que depende de la persona de lo que depende del diseño, la empresa o la institución.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión económica, productiva y de consumo, explicando qué es la alfabetización financiera digital.',
      'Identificar, en una situación concreta, las condiciones asimétricas que la atraviesan: fricciones para salir, urgencias falsas, información oculta o datos usados para ofertar.',
      'Distinguir la persuasión legítima de una práctica engañosa, y lo que depende de la persona de lo que depende del diseño de la plataforma o de la regulación.',
      'Decidir un ajuste proporcionado a la situación —leer las condiciones, medir lo que cuesta salir, reclamar u organizarse—, incluyendo cómo participar en decisiones sobre herramientas que cambian las condiciones de trabajo.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Decidiste vos, o decidió el recorrido?',
    parrafos: [
      'Usás una aplicación que te ayuda a armar presentaciones para tus clases. Un día aparece un cartel: "Probá siete días gratis el plan Premium". Te conviene, así que cargás tu tarjeta para empezar la prueba, pensando que vas a cancelar antes de que termine la semana. Te olvidás. Al mes siguiente, ves un cargo en tu resumen.',
      'Entrás a cancelar. No hay un botón simple. Tenés que ir a configuración, después a suscripción, después a un formulario que pregunta "¿por qué querés irte?", después a una oferta de descuento que te proponen antes de dejarte avanzar, y recién al final aparece un chat donde una persona o un bot confirma la baja. Son cinco pantallas, y te lleva quince minutos cancelar algo que activaste con un solo clic.',
      'Nada de lo que hiciste fue descuido puro. Activar la prueba te tomó un segundo porque el diseño está hecho para que sea así de fácil. Cancelarla te tomó quince minutos porque el diseño también está hecho para eso. La misma interfaz que te facilitó entrar te dificultó salir, y esa asimetría no es casualidad.',
    ],
    problema:
      'Pensá en esa suscripción, o en una parecida. ¿Qué parte de lo que pasó decidiste vos, y qué parte decidió el recorrido que alguien diseñó? Si te hubiera costado lo mismo entrar que salir, ¿habrías tomado la misma decisión?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La vida económica digital no es un terreno aparte: integra las compras y los pagos que hacemos, las suscripciones y la publicidad personalizada que recibimos, las plataformas laborales con las que trabajamos, y el contenido y los datos que generamos cada vez que usamos una app. Todo eso pasa, cada vez más, por interfaces que simplifican operaciones que antes implicaban más pasos y más tiempo para pensar.',
      'Esa simplificación tiene un costo. La alfabetización financiera digital no es solo saber usar una billetera virtual o completar un pago: es comprender las condiciones y las consecuencias que hay detrás de una operación que una interfaz volvió instantánea. Firmar un contrato de suscripción, aceptar el uso de tus datos o activar una tarjeta de crédito eran, antes, decisiones con más fricción y más tiempo de reflexión. Hoy pueden resolverse con un clic, y esa facilidad no siempre juega a tu favor.',
      'Ahí aparecen los patrones oscuros: diseños de interfaz que usan asimetrías para orientar una decisión, sobre todo en beneficio de quien diseñó el sistema. Aceptar con un clic y cancelar con un recorrido de varias pantallas, como en el gancho. Ocultar información relevante, como el precio final, hasta el último paso. Producir una urgencia falsa, como un contador que baja o un cartel de "quedan pocas unidades". La libertad formal de decidir convive con condiciones que no son parejas.',
      'El trabajo también cambia. La inteligencia artificial y las plataformas modifican las tareas, las evaluaciones y las capacidades que se piden en un empleo. Una ciudadanía laboral necesita comprender las herramientas que se incorporan y poder participar, de manera razonable, en las decisiones que alteran las condiciones de trabajo, en lugar de recibirlas como un hecho consumado.',
      'Y hay algo que conviene decir con claridad: la responsabilidad no puede depositarse enteramente en resistir diseños cada vez más sofisticados. Leer la letra chica ayuda, pero no alcanza frente a interfaces diseñadas por equipos enteros para que la mayoría no la lea. El diseño también constituye un ámbito de responsabilidad, de regulación y de protección del consumidor, y no solo una habilidad individual que hay que entrenar.',
    ],
    fichaAula1: {
      titulo: 'No todo lo que brilla es digital: aprender a leer, usar y cuestionar la tecnología',
      objetivo:
        'Desarrollar la capacidad de comprender, utilizar y cuestionar críticamente las tecnologías digitales como herramientas culturales, reconociendo su funcionamiento, intencionalidades, oportunidades y riesgos.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La alfabetización digital crítica va más allá de saber "usar" la tecnología. Implica leerla, entenderla y preguntarse por su sentido.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Hoy vivimos en una sociedad mediada por pantallas, plataformas y dispositivos. Pero ¿qué sabemos sobre cómo funcionan? ¿Por qué nos muestran lo que nos muestran? ¿Qué intereses hay detrás?',
        },
        { tipo: 'parrafo', texto: 'Ser alfabetizados digitalmente de manera crítica es:' },
        {
          tipo: 'lista',
          items: [
            'Saber cómo se organiza la información en internet',
            'Comprender el papel de los algoritmos, los datos y los modelos de negocio',
            'Distinguir entre el uso técnico y el uso significativo de la tecnología',
            'Cuestionar la aparente "neutralidad" de las herramientas digitales',
            'Adoptar una postura activa, ética y reflexiva ante lo que consumimos, producimos y compartimos',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Una ciudadanía digital empoderada necesita de una alfabetización que forme pensadores digitales, no solo consumidores.',
        },
      ],
      preguntaDetonadora: '*¿Usás la tecnología o la tecnología te usa a vos?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Radiografía de mis pantallas" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Cada estudiante enumera:' },
            {
              tipo: 'lista',
              items: ['3 apps que más usa', '1 plataforma donde busca información', '1 dispositivo que considera indispensable'],
            },
            { tipo: 'parrafo', texto: '→ Luego responden:' },
            {
              tipo: 'lista',
              items: ['¿Por qué lo usan?', '¿Qué les ofrece?', '¿Qué podrían estar "dejando afuera"?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mapa crítico de herramientas digitales" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, eligen una herramienta digital común (Google, Instagram, YouTube, ChatGPT, TikTok…).',
                'Responden y analizan:',
                '¿Qué hace esta herramienta? ¿Qué lógica la organiza?',
                '¿Qué modelo de negocio la sostiene?',
                '¿Qué tipo de contenido prioriza?',
                '¿Qué puedo aprender usándola de forma crítica?',
                '¿Qué riesgos puede implicar si no reflexiono?',
                'Presentan su "mapa" en formato afiche, nube de conceptos, infografía o guion oral.',
              ],
            },
          ],
        },
      ],
      frase: '*"Ser alfabetizado digitalmente no es solo saber navegar, es aprender a no naufragar."*',
      glosario: [
        'Alfabetización digital',
        'Pensamiento crítico',
        'Algoritmo',
        'Modelo de negocio digital',
        'Neutralidad tecnológica (mito)',
      ],
      referencias: [
        'UNESCO – Marco de Competencias Digitales Docentes y Estudiantiles',
        'Fundación Karisma – Guía de lectura crítica del entorno digital',
        'Video: "Cómo funcionan los algoritmos" – Canal Encuentro',
        'Chicos.net – Alfabetización digital con mirada crítica',
        'Mozilla – Internet Health Report',
      ],
    },
  },
  condicionesYAutonomia: {
    titulo: 'Condiciones y autonomía',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'La vida económica digital tiene cuatro ámbitos que conviene distinguir, porque cada uno pide un tipo distinto de atención: el **consumo y los pagos**, que son las compras y transferencias que hacemos desde una aplicación; las **suscripciones y la publicidad personalizada**, que son los servicios que se renuevan solos y los anuncios armados a partir de lo que sabe de vos una plataforma; el **trabajo con herramientas automatizadas**, que son las tareas, evaluaciones y condiciones laborales que hoy median la IA y las plataformas; y la **creación de contenidos y de datos**, que es lo que generás cada vez que publicás, buscás o simplemente usás una app.',
        'La **autonomía económica**, en este contexto, es comprender los modelos de negocio que sostienen un servicio, las condiciones reales de lo que aceptás, las fricciones que existen para entrar y para salir, y las asimetrías de información que hay entre quien tiene tus datos y vos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué una decisión disponible no es una decisión libre: que algo se pueda aceptar con un clic no significa que lo hayas decidido con toda la información. El gancho de esta temática lo muestra: activar algo tomó un segundo, cancelarlo tomó quince minutos, y esa diferencia no es casual. Una decisión formalmente disponible puede estar construida con fricciones asimétricas a propósito.',
        'Cómo distinguir persuasión legítima de práctica engañosa: toda interfaz organiza opciones mediante jerarquías, colores, valores predeterminados y secuencias, y eso es necesario para que un sistema sea utilizable. Se vuelve manipulación cuando aprovecha esas asimetrías para orientar la decisión principalmente en beneficio de quien diseñó la interfaz, y no de quien la usa. Ejemplos típicos: aceptar con un clic y cancelar con un recorrido largo, ocultar el precio final hasta el último paso, o producir una urgencia falsa como un contador o un "quedan pocas unidades" sin sustento real.',
        'Qué pasa con la publicidad personalizada: cuando una oferta llega construida a partir de tus datos, quien te la ofrece suele saber más de vos —tus hábitos, tus búsquedas, tus horarios— que vos de las condiciones reales de esa oferta. Esa asimetría de información no desaparece porque la decisión siga siendo, en los papeles, libre.',
        'Cómo la IA y las plataformas cambian el trabajo: cada vez más tareas, evaluaciones y condiciones laborales están mediadas por herramientas automatizadas. Una ciudadanía laboral necesita comprender esas herramientas y poder participar, de manera razonable, en las decisiones que alteran las condiciones de trabajo. Esto tiene un límite importante: que una tecnología permita observar una conducta en detalle no es, por sí sola, una justificación para un monitoreo ilimitado. La seguridad, la privacidad y la proporcionalidad también tienen que formar parte de cómo se incorpora una herramienta al trabajo.',
        'Por qué consumir también es decidir: elegir qué comprar, cuándo reparar un dispositivo en lugar de reemplazarlo, y cuándo una actualización es necesaria y cuándo es solo una presión de consumo, son decisiones económicas tanto como lo es aceptar una suscripción.',
      ],
      recuadro: {
        titulo: 'Lo que la dimensión económica NO es',
        parrafos: [
          'No es solo saber usar una billetera virtual o completar un pago: es comprender las condiciones y las consecuencias que hay detrás de esa operación.',
          'No es responsabilidad exclusiva de leer la letra chica: el diseño también es un ámbito de responsabilidad, de regulación y de protección del consumidor, no solo una habilidad individual.',
          'No es desconfiar de todo el comercio o el trabajo digital: la mayoría de las interfaces son persuasión legítima, no manipulación. Lo que hace falta es poder distinguir una de otra.',
          'No es oponerse a cualquier herramienta automatizada en el trabajo: es poder comprenderla y participar en las decisiones sobre cómo se usa, sin que la posibilidad técnica de vigilar se convierta en control ilimitado.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una decisión económica digital, tres preguntas:',
      preguntas: [
        '**¿Qué me piden aceptar y qué cuesta salir?** Comparar el esfuerzo de entrar con el esfuerzo de cancelar o arrepentirse.',
        '**¿Quién gana con que yo decida así?** Si el diseño empuja hacia una opción que beneficia principalmente a quien lo diseñó.',
        '**¿Qué datos entrego y para qué?** Qué información doy, quién la usa y si sirve para ofrecerme algo o para decidir algo sobre mí.',
      ],
      parrafoMovimientos: 'Y tres movimientos, en este orden:',
      movimientos: [
        '**Leer las condiciones antes de aceptar:** buscar el precio final, la renovación automática y cómo se cancela, antes de activar algo, no después.',
        '**Medir el costo de salir antes de entrar:** si cancelar o arrepentirse va a costar mucho más que aceptar, esa asimetría ya es una señal.',
        '**Reclamar u organizarse:** cuando el problema no se resuelve leyendo con más cuidado, sino que depende del diseño o de una decisión institucional, plantearlo a quien corresponda y, si afecta a varios, hacerlo en conjunto.',
      ],
    },
    fichaAula2: {
      titulo: 'Conectados con el planeta: sostenibilidad, tecnología y responsabilidad digital',
      objetivo:
        'Tomar conciencia del impacto ambiental del ecosistema digital y desarrollar hábitos, actitudes y compromisos hacia una ciudadanía digital sostenible, responsable y respetuosa del entorno.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Aunque parezca invisible, cada clic, scroll, mensaje o video online tiene un costo ambiental real. La tecnología digital requiere:',
        },
        {
          tipo: 'lista',
          items: [
            'Producción de dispositivos (con metales raros y minería intensiva).',
            'Energía eléctrica para sostener servidores y redes.',
            'Generación de residuos electrónicos altamente contaminantes.',
            'Obsolescencia programada que estimula el consumo constante.',
          ],
        },
        { tipo: 'parrafo', texto: 'Por eso, necesitamos construir una eco-ciudadanía digital, basada en:' },
        {
          tipo: 'lista',
          items: [
            'Uso consciente de recursos tecnológicos.',
            'Consumo responsable de contenidos y dispositivos.',
            'Reparación, reutilización y reciclaje de equipos.',
            'Exigencia de tecnologías más limpias y políticas públicas verdes.',
            'Vinculación del activismo ambiental con el activismo digital.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La sostenibilidad digital no se trata solo de apagar el celular: se trata de pensar cómo lo usamos, para qué, y con qué consecuencias para el planeta y las generaciones futuras.',
        },
      ],
      preguntaDetonadora:
        '*¿Tu huella digital también deja huella en el planeta? ¿Qué podrías cambiar hoy para cuidar el entorno sin desconectarte del mundo?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "El ciclo de vida de mi celular" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'En grupos, responden:' },
            {
              tipo: 'lista',
              items: [
                '¿Dónde se fabricó?',
                '¿Qué materiales tiene?',
                '¿Cuánta energía consume?',
                '¿Qué pasará con él cuando lo deseche?',
              ],
            },
            { tipo: 'parrafo', texto: '→ Reflexión: ¿somos conscientes de todo lo que implica "estar conectados"?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Manifiesto de eco-ciudadanía digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, diseñan un manifiesto juvenil con 5 principios o compromisos para una ciudadanía digital sostenible.',
                'Pueden incluir:',
                'Propuestas de hábitos ecológicos digitales',
                'Slogans o campañas de concientización',
                'Ideas para reducir el impacto ambiental en la escuela o comunidad',
                'Demandas para gobiernos, plataformas o fabricantes',
                'Presentan su manifiesto en formato libre: afiche, video, canción, podcast o mural ecológico.',
              ],
            },
          ],
        },
      ],
      frase: '*"Conectarse también es cuidar. El planeta necesita ciudadanos digitales que piensen verde."*',
      glosario: [
        'Eco-ciudadanía digital',
        'Obsolescencia programada',
        'Huella ambiental digital',
        'E-waste (residuos electrónicos)',
        'Tecnología sustentable',
      ],
      referencias: [
        'Greenpeace – Click Clean Report',
        'Fundación Ambiente y Recursos Naturales (FARN) – Tecnología y sostenibilidad',
        'Chicos.net – Ciudadanía digital y medio ambiente',
        'Video: "¿Cuánto contamina tu celular?" – Canal Encuentro',
        'ONU – Alfabetización digital y sostenibilidad',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una escuela incorpora, de un día para otro, una plataforma de gestión que mide cuánto tiempo están conectados los docentes a los sistemas institucionales: cuándo entran, cuánto permanecen, con qué frecuencia responden mensajes. A fin de mes, la plataforma arma un ranking de "productividad" que queda visible para todo el equipo directivo. Nadie consultó a los docentes antes de incorporarla, y nadie explicó qué se hace con esos datos más allá del ranking. Una docente, que suele conectarse poco tiempo pero de forma muy eficiente, queda entre los últimos lugares. Se siente observada y evaluada por algo que nunca entendió del todo, y no sabe si protestar, ignorarlo o simplemente empezar a dejar la sesión abierta todo el día para subir en el ranking.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la escuela incorporó una herramienta que mide algo —el tiempo conectado— y lo convirtió en una medida pública de valor —la "productividad"— sin que nadie afectado haya participado de esa decisión. Lo que está en juego no es solo la posición de esta docente en una tabla: es si el tiempo conectado realmente mide lo que la escuela quiere medir, y quién decidió que sí.',
        ],
        nota: '(Acá me pregunto: ¿lo que mide esta plataforma es lo que de verdad importa de mi trabajo, o es simplemente lo que resultaba fácil de medir?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué condiciones están en juego. La posibilidad técnica: la plataforma puede registrar el tiempo de conexión, porque es un dato que cualquier sistema institucional puede capturar. Pero que algo se pueda medir no significa que deba convertirse en una medida de valor sin más contexto, y menos todavía en un ranking público. Que una tecnología permita observar una conducta en detalle no es, por sí sola, una justificación para un monitoreo con consecuencias.',
          'Falta información básica: qué mide exactamente la plataforma, para qué se usa ese dato, quién puede verlo además del equipo directivo, y por cuánto tiempo se conserva. Y falta participación: ninguna de las personas medidas tuvo oportunidad de opinar antes de que la herramienta se activara. Esto no es, todavía, una cuestión de mala intención de la dirección: es una decisión tomada sin los pasos que una decisión así necesitaría.',
        ],
        nota: '(Acá me pregunto: ¿alguien en la escuela sabe realmente cómo se calcula este ranking, o simplemente confiaron en lo que mostraba la plataforma por defecto?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: ni aceptar el ranking en silencio ni rechazar la plataforma por sistema. Lo proporcionado es, primero, pedir información concreta: qué mide exactamente, con qué fin se diseñó esa medición, quién tiene acceso a los datos y durante cuánto tiempo se guardan. Segundo, pedir participación: que los docentes puedan opinar sobre si el tiempo conectado es un criterio razonable para evaluar algo, y proponer alternativas si no lo es.',
          'Tercero, proponer criterios proporcionales: si la escuela quiere medir algo sobre el trabajo docente, que sea algo que realmente se relacione con lo que se busca —la calidad de las devoluciones, el cumplimiento de plazos acordados— y no un indicador que termine premiando a quien deja la sesión abierta en lugar de a quien trabaja bien. Y que, si se mide algo, haya transparencia sobre el método y un canal para cuestionarlo.',
        ],
        nota: '(Acá me pregunto: si pido explicaciones sola, ¿me van a tomar en serio, o conviene que lo planteemos como equipo?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir: no le corresponde a esta docente, ni a ninguna otra persona sola, decidir si la plataforma se queda, se ajusta o se retira. Esa es una decisión institucional, que tiene que involucrar a la dirección, al conjunto del cuerpo docente y, si corresponde, a los canales de representación del personal. Tampoco le corresponde resolver el problema jugando con el sistema, como dejar la sesión abierta para subir en el ranking: eso no corrige el problema de fondo, solo lo esconde.',
          'Qué podría salir mal: que el reclamo quede en una queja informal sin ningún canal real donde presentarse; que la dirección interprete cualquier objeción como resistencia al cambio; o que, al no decir nada, el ranking se naturalice y empiece a influir en decisiones reales, como asignaciones de horas o evaluaciones. Lo que ajustaría para la próxima: proponer que, antes de incorporar cualquier herramienta que mida el desempeño del personal, haya una instancia de información y consulta previa, no una implementación directa.',
        ],
        nota: '(Acá me pregunto: ¿qué otras decisiones de la escuela se toman hoy con herramientas automatizadas sin que nadie las haya discutido? ¿Esta es la única, o la primera que noto?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué hacer primero: Leer las condiciones, Medir el costo de salir o Reclamar u organizarse. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Entrás a comprar material didáctico en una tienda online. La página muestra un precio llamativo con un cartel: "Solo hoy, quedan 3 unidades". Avanzás con la compra, cargás tus datos y recién en el último paso, antes de pagar, aparece el precio final: con cargo de envío, un "servicio de gestión" y un impuesto que no estaban en el precio que te hizo entrar.',
        analisis:
          '**¿Qué hacés primero?** Leer las condiciones. Todavía no pagaste nada: estás a tiempo de frenar antes del paso final. El cartel de urgencia ("solo hoy", "quedan 3") y el precio que aparece recién al final son señales clásicas de patrones oscuros: una urgencia que no se puede verificar y una información oculta hasta el último momento. Antes de confirmar la compra, lo que corresponde es leer el precio final completo y decidir con esa información, no con la que te hizo entrar. Si el precio real no te convence, podés abandonar la compra sin ningún costo.',
        nota: '(Si elegiste "Medir el costo de salir" o "Reclamar": todavía no hay nada de qué salir ni qué reclamar, porque no pagaste. El momento de actuar es antes de confirmar, leyendo lo que realmente te piden pagar.)',
      },
      {
        clave: 's2',
        enunciado:
          'Un docente vende sus propios materiales didácticos en una plataforma online hace dos años. Un día nota que le llegó menos dinero de lo habitual por sus ventas. Al revisar, descubre que la plataforma cambió el porcentaje de comisión que cobra, sin avisarle con anticipación ni explicarle el motivo. Busca dónde reclamar y no encuentra ningún canal claro para hacerlo.',
        analisis:
          '**¿Qué hacés primero?** Reclamar u organizarse. Acá ya hay un hecho consumado —el cambio de comisión ya se aplicó— y no se resuelve leyendo con más atención, porque el cambio no se comunicó. El problema no es una decisión que el docente pueda revertir solo: es una condición que la plataforma modificó unilateralmente y que afecta a todos los que venden ahí. Lo proporcionado es buscar el canal de reclamos de la plataforma y dejar constancia por escrito, y además intentar contactar a otros vendedores afectados: un reclamo colectivo suele tener más peso que uno individual frente a una plataforma grande.',
        nota: '(Si elegiste "Leer las condiciones": tiene sentido revisar qué dicen los términos sobre cambios de comisión para fundamentar el reclamo, pero el movimiento central acá es reclamar: el cambio ya ocurrió sin aviso, y leer sola no lo revierte.)',
      },
      {
        clave: 's3',
        enunciado:
          'Una familia con ingresos ajustados necesita una computadora para que su hijo curse la secundaria, que es virtual dos días a la semana. En una tienda online les ofrecen un sistema de cuotas con "aprobación en minutos" y sin análisis de ingresos. Las cuotas parecen accesibles mes a mes, pero el total a pagar, sumando intereses, es bastante más alto que el precio de contado. La familia no tiene otra forma de conseguir el equipo ahora.',
        analisis:
          '**¿Qué hacés primero?** No hay una única respuesta correcta en este caso, y es a propósito: hay una necesidad real y urgente, y al mismo tiempo una condición económica que conviene mirar con cuidado antes de aceptar. Una lectura puede priorizar leer las condiciones: entender bien el total a pagar, no solo la cuota mensual, y comparar si existen alternativas, como programas de entrega de equipamiento escolar, antes de comprometerse. Otra puede priorizar medir el costo de salir: preguntarse qué pasa si en algún mes no se puede pagar una cuota, qué intereses o cargos se suman, y si hay forma de cancelar el crédito antes de tiempo. Y otra puede señalar que la "aprobación en minutos sin análisis de ingresos" es en sí misma una señal de alerta, porque facilita el acceso al crédito sin que la familia tenga toda la información sobre lo que está asumiendo. Lo que se evalúa es que puedas justificar tu lectura reconociendo tanto la necesidad real de la familia como la asimetría de información que el sistema de cuotas puede estar aprovechando, sin suponer que la familia "debería" simplemente no comprar.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: alguien que activó una suscripción con una prueba gratis y terminó pagando varios meses sin darse cuenta, porque cancelarla requería un recorrido largo. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Si aceptaste los términos y condiciones, es tu responsabilidad. Tendrías que haber leído la letra chica antes de activar la prueba gratis.',
      citaB: 'Todo el comercio digital es una estafa armada para hacerte pagar de más. Lo más seguro es no comprar ni suscribirse a nada online.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** le deja todo el peso a la persona y pasa por alto que el diseño también es responsabilidad de quien lo construyó. Leer la letra chica ayuda, pero no alcanza frente a interfaces diseñadas específicamente para que cancelar cueste más que activar. El diseño también es un ámbito de regulación y de protección del consumidor, no solo una habilidad individual.',
      errorB:
        '**Análisis B:** generaliza y rechaza todo el comercio digital por igual, sin distinguir persuasión legítima de práctica engañosa. La mayoría de las interfaces no están armadas para engañar, y dejar de usarlas por completo no es una respuesta proporcionada ni resuelve el problema real, que es poder identificar cuándo una asimetría concreta se vuelve manipuladora.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no distinguieron entre lo que depende de la persona y lo que depende del diseño. Uno cargó todo sobre el individuo, y el otro descartó el sistema entero sin poder señalar qué estaba mal específicamente.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y la alfabetización financiera digital',
        enunciado: '¿Cuál de estas describe mejor qué es la alfabetización financiera digital?',
        opciones: [
          {
            id: 'a',
            texto:
              'Comprender las condiciones y las consecuencias que hay detrás de una operación económica que una interfaz volvió instantánea.',
          },
          { id: 'b', texto: 'Saber usar una billetera virtual o completar un pago sin errores técnicos.' },
          { id: 'c', texto: 'Memorizar los términos y condiciones de cada aplicación que usás.' },
          { id: 'd', texto: 'Evitar cualquier compra o suscripción digital para no correr riesgos.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Saber usar la herramienta es necesario, pero no alcanza. Podés completar un pago sin errores técnicos y aun así no entender qué estás aceptando ni qué va a pasar después.',
          c: 'No hace falta memorizar nada: hace falta saber qué preguntarse y dónde mirar antes de aceptar, no recordar de memoria cada condición.',
          d: 'Evitar todo no es alfabetización, es evitación. El objetivo es poder decidir con criterio, no dejar de participar en la vida económica digital.',
        },
      },
      {
        objetivo: 'identificar condiciones asimétricas',
        enunciado:
          'Una aplicación muestra un cartel de "oferta por tiempo limitado" con un contador que baja, y el precio final con todos los cargos aparece recién en el último paso antes de pagar. ¿Qué condiciones asimétricas están presentes?',
        opciones: [
          { id: 'a', texto: 'Ninguna: es una práctica comercial normal y transparente.' },
          { id: 'b', texto: 'Solo el precio final tardío; el contador es información útil.' },
          { id: 'c', texto: 'Una urgencia falsa (el contador) y la información oculta (el precio final tardío).' },
          { id: 'd', texto: 'Solo el contador; mostrar el precio al final es un estándar de la industria.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Que una práctica sea frecuente no la vuelve transparente. Un contador que genera presión de tiempo y un precio que se revela al final son señales clásicas de patrones oscuros, no prácticas neutras.',
          b: 'El contador también es una señal: genera una urgencia que no siempre se puede verificar, y por eso presiona a decidir rápido, sin pensar.',
          d: 'Que algo sea frecuente en el mercado no lo exime de ser una condición asimétrica. Ocultar el precio final hasta último momento dificulta comparar y decidir con información completa.',
        },
      },
      {
        objetivo: 'distinguir persuasión legítima de práctica engañosa y qué depende de quién',
        enunciado:
          'Una plataforma laboral cambia el porcentaje de comisión que cobra a quienes venden en ella, sin avisar con anticipación ni explicar el motivo. ¿Qué lectura es más adecuada?',
        opciones: [
          { id: 'a', texto: 'Es responsabilidad exclusiva de quien vende: debería haber estado más atento a sus ingresos.' },
          { id: 'b', texto: 'Es un tema exclusivamente legal que no amerita ningún reclamo directo a la plataforma.' },
          { id: 'c', texto: 'No hay ningún problema, porque las plataformas pueden cambiar sus condiciones cuando quieran.' },
          {
            id: 'd',
            texto:
              'Es una práctica que depende del diseño y las políticas de la plataforma, y corresponde reclamar u organizarse con otros afectados, no solo revisar con más cuidado.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Estar atento a los ingresos no alcanza cuando el cambio no se comunicó. El problema no es de atención individual: es que la plataforma modificó una condición sin avisar.',
          b: 'No hace falta ir directo a lo legal: el primer paso razonable es reclamar por los canales de la plataforma y, si hay otros afectados, organizarse con ellos antes de escalar a otra instancia.',
          c: 'Que una plataforma pueda cambiar condiciones no significa que no deba comunicarlas ni que no haya nada que reclamar. La falta de aviso es justamente lo que vuelve el cambio problemático.',
        },
      },
      {
        objetivo: 'decidir un ajuste proporcionado, incluyendo la participación en decisiones laborales',
        enunciado:
          'Una escuela incorpora una plataforma que mide el tiempo de conexión de los docentes y arma un ranking de "productividad", sin consultarlos. ¿Cuál es la actitud más adecuada?',
        opciones: [
          { id: 'a', texto: 'Aceptarlo sin cuestionarlo, porque la escuela tiene autoridad para decidir qué herramientas usar.' },
          { id: 'b', texto: 'Dejar la sesión abierta todo el día para subir en el ranking, sin decir nada.' },
          {
            id: 'c',
            texto:
              'Pedir información sobre qué mide la herramienta y para qué, y plantear junto a otros docentes una instancia de participación antes de que la medición tenga consecuencias.',
          },
          { id: 'd', texto: 'Rechazar cualquier herramienta de gestión institucional, porque toda medición del trabajo docente es ilegítima.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Que la escuela tenga autoridad para decidir no la exime de informar ni de consultar, sobre todo cuando la medición afecta directamente el desempeño evaluado de las personas.',
          b: 'Esto no corrige el problema de fondo: solo lo esconde, y deja intacta una medición que puede seguir afectando a otros docentes sin cuestionarse.',
          d: 'Rechazar toda medición institucional por sistema no es proporcionado. El problema de este caso no es medir en sí, sino hacerlo sin informar, sin consultar y con un criterio que puede no reflejar lo que realmente importa del trabajo.',
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
          'Le atribuye toda la responsabilidad a la persona ("tendría que haber leído la letra chica") o rechaza por sistema todo el comercio o trabajo digital.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que algo no está bien en la situación, pero no identifica qué condición asimétrica específica está en juego ni qué movimiento corresponde.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Identifica las condiciones asimétricas de la situación, distingue persuasión legítima de práctica engañosa y propone un ajuste proporcionado (leer, medir el costo de salir o reclamar).',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una decisión excede a la persona y requiere participación o una respuesta institucional, considera las condiciones laborales mediadas por herramientas automatizadas, y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa completo del Poliedro: las diez dimensiones recorridas, de Instrumental y Acceso hasta esta, Económica, Productiva y de Consumo. Lo que cambia, a partir de acá, es que podés mirar tus propias herramientas digitales —y las de tu escuela— con una pregunta que antes quizás no te hacías: qué condiciones reales hay detrás de lo que aceptás con un clic.',
    accionSemana:
      '**Una acción concreta para esta semana:** hacé con tu curso una "ficha de condiciones" de un servicio que usan todos —una app de mensajería, una plataforma educativa, una red social, un servicio de streaming. Que investiguen y completen:',
    pasos: [
      '**Precio real:** cuánto cuesta en total, no solo la cuota o el precio de entrada.',
      '**Renovación:** si se renueva solo y con qué frecuencia.',
      '**Cómo se cancela:** cuántos pasos hay que hacer, y si es tan fácil como activarlo.',
      '**Qué datos entregan:** qué información piden al registrarse o al usarlo.',
      '**Qué hace la empresa con esos datos:** si lo dice en algún lado, y si es fácil de encontrar.',
    ],
    cierrePasos:
      'El objetivo no es que terminen desconfiando de todo, sino que aprendan a buscar esta información antes de aceptar algo, no después. Y aprovechá para averiguar en tu propia escuela qué herramientas y suscripciones se usan hoy, y quién decidió incorporarlas: muchas veces esa decisión se toma sin que el cuerpo docente la conozca del todo, igual que en el caso que vimos.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** la aplicación, la prueba gratis y las cinco pantallas para cancelar. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué condiciones asimétricas identificás ahora en esa situación, y qué harías distinto la próxima vez que una interfaz te ofrezca algo "gratis"? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula3: {
      titulo: 'Mi mundo, mi red, mi voz: imaginar y crear la ciudadanía digital que queremos',
      objetivo:
        'Sintetizar los conocimientos y experiencias trabajadas en la secuencia a través del diseño de un proyecto colectivo de ciudadanía digital, incorporando una visión ética, crítica, creativa y transformadora.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Después de reflexionar sobre neuroderechos, democracia algorítmica, activismo juvenil, sostenibilidad, metaverso, tecnologías emergentes y cultura digital, llegó el momento de pasar a la acción.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Ser ciudadanos digitales no es solo saber usar tecnología: es imaginar cómo queremos habitar los entornos digitales del presente y del futuro.',
        },
        { tipo: 'parrafo', texto: 'El diseño de un proyecto integrador permite:' },
        {
          tipo: 'lista',
          items: [
            'Articular saberes con valores y acciones concretas.',
            'Convertir preocupaciones en propuestas.',
            'Dar protagonismo a los y las estudiantes como constructores de ciudadanía.',
            'Explorar lenguajes creativos, colaborativos y tecnológicos.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta actividad final propone crear una idea de cambio posible, desde lo local a lo global, desde lo personal a lo comunitario.',
        },
      ],
      preguntaDetonadora:
        '*¿Qué te gustaría cambiar, mejorar o construir en el mundo digital? ¿Cómo podés empezar hoy?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi aprendizaje en una palabra" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Cada estudiante elige una palabra que resuma lo que se lleva de esta secuencia (ej: conciencia, futuro, derechos, cuidado, poder, empatía).',
            },
            { tipo: 'parrafo', texto: '→ Se construye un mural colectivo o nube de palabras.' },
          ],
        },
        {
          titulo: 'Actividad principal — "Hackeamos el futuro: proyecto final de ciudadanía digital" (60-90 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, los estudiantes eligen una de estas modalidades:',
                'Campaña digital con impacto social',
                'Propuesta de política pública juvenil',
                'Diseño de una app o espacio digital ético',
                'Acción local con dimensión global',
                'Instalación artística o performática sobre ciudadanía digital',
                'Para cada proyecto deben definir:',
                'Problema o causa que abordan',
                'Objetivo transformador',
                'Público al que se dirigen',
                'Formato creativo (reel, mural, podcast, guion, afiche, juego, etc.)',
                'Valores que los guían',
                'Posibles aliados o recursos',
                'Presentan su proyecto en una "Expo Futura de Ciudadanía Digital" donde comparten ideas, reflexionan colectivamente y reciben devoluciones.',
              ],
            },
          ],
        },
      ],
      frase: '*"No heredamos el futuro: lo diseñamos. Y empieza con una idea, una palabra, una decisión consciente."*',
      glosario: [
        'Ciudadanía digital',
        'Futuro ético',
        'Protagonismo juvenil',
        'Transformación social',
        'Derechos emergentes',
      ],
      referencias: [
        'Padlet, Miro o Canva para lluvia de ideas y prototipos',
        'Guía "Diseño con propósito" – Educ.ar',
        'Podcast: Futuros posibles – Chicos.net',
        'UNESCO – Toolkit para la juventud y la ciudadanía digital',
        'Video: "Hackear el presente, programar el futuro" – Canal Encuentro',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué aceptar algo con un clic no siempre significa haberlo decidido libremente?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Económica, Productiva y de Consumo, en una tarjeta',
      parrafos: [
        'Una decisión disponible no es necesariamente una decisión libre. Una interfaz puede estar diseñada para que aceptar sea fácil y salir sea difícil.',
        '**Los cuatro ámbitos de la vida económica digital:** consumo y pagos · suscripciones y publicidad personalizada · trabajo con herramientas automatizadas · creación de contenidos y de datos.',
        '**Las tres preguntas, frente a una decisión económica:** ¿Qué me piden aceptar y qué cuesta salir? · ¿Quién gana con que yo decida así? · ¿Qué datos entrego y para qué?',
        '**Los tres movimientos:** leer las condiciones antes de aceptar · medir el costo de salir antes de entrar · reclamar u organizarse.',
        '**Y una cosa más:** el diseño también es un ámbito de responsabilidad, de regulación y de protección del consumidor. No todo depende de leer con más cuidado.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la décima y última de las dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Participación y Democracia',
    seguiEnlace2Href: '/tematicas/participacion-y-democracia',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Decidir con autonomía no es desconfiar del mercado ni del trabajo digital. Es poder ver las condiciones antes de aceptar, medir lo que cuesta salir antes de entrar, y exigir reglas claras cuando el diseño aprovecha una asimetría en su propio beneficio. Con esto se completa el recorrido por las diez dimensiones del Poliedro: diez formas distintas de pasar de usuario a ciudadano, cada una con su propio criterio, y todas sosteniéndose entre sí.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[ECONOMICA_CONSUMO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
