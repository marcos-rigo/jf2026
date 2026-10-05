// Contenido de /tematicas/seguridad-privacidad-y-proteccion-digital. Mismo patrón que lib/etico-normativa-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/seguridad-proteccion/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// Dimensión 7 (Capítulo 21 del manual, con el procedimiento del Capítulo 34).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/seguridad-proteccion/ficha-aula';

export const SEGURIDAD_PROTECCION_FALLBACK: Audiencia = 'docentes';

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
  { id: 'confianza-y-proteccion', number: '05', label: 'Confianza y protección', shortLabel: 'Confianza' },
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
    fichaAula2: FichaAulaProps;
  };
  confianzaYProteccion: {
    titulo: string;
    recordar: { subtitulo: string; intro: string; elementos: string[]; cierre: string };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
    };
    fichaAula3: FichaAulaProps;
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
    fichaAula4: FichaAulaProps;
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
    titulo: 'Dimensión Seguridad, Privacidad y Protección Digital',
    subtitulo: 'De la sospecha a la confianza informada',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que la seguridad hoy protege no solo sistemas, sino también tu identidad, tu intimidad, tu patrimonio y tus vínculos.',
      'Entender que la privacidad no consiste en ocultar información, sino en tener un control razonable sobre cómo circula y en qué contexto.',
      'Practicar un procedimiento simple, Pausar–Verificar–Decidir, para actuar frente a la urgencia y la autoridad aparente sin caer en la sospecha permanente.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'decidir cuándo y cuánto confiar en un sistema, un mensaje o una persona en línea, protegiendo tus datos, tu identidad y tus vínculos, sin caer en la sospecha permanente.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión seguridad, privacidad y protección digital, explicando qué es la confianza informada y por qué la privacidad no equivale a ocultar información.',
      'Identificar, en una situación concreta, qué se está protegiendo y qué señales justifican verificar más, como la urgencia, la autoridad aparente o el engaño.',
      'Aplicar el procedimiento Pausar–Verificar–Decidir frente a un mensaje o un pedido que genera presión.',
      'Distinguir qué depende de la persona de lo que depende del diseño, la institución o la plataforma, reconociendo que la protección es interdependiente.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cómo sabés que alguien es quien dice ser?',
    parrafos: [
      'Son las ocho de la mañana y estás por entrar al aula. Te llega un WhatsApp de un número que no tenés agendado: "Hola, soy la nueva directora, este es mi número. Necesito un favor urgente con una transferencia, te lo devuelvo hoy". El nombre es el de la nueva directora, que recién conocés. El mensaje está bien escrito, el tono es amable y hay urgencia. Y sentís algo más: no querés quedar mal con quien recién llega, ni ser quien dijo que no cuando alguien en una posición de autoridad pidió ayuda.',
      'Nada de lo que sentiste fue irracional. Confiar es lo que hace posible que trabajemos con otros, y reconocer una autoridad es parte de cómo funciona una escuela. Pero también es exactamente lo que buscan aprovechar quienes engañan: una persona conocida, un pedido urgente y una autoridad que no es fácil cuestionar.',
    ],
    problema:
      'Pensá en ese momento, o en uno parecido. ¿Qué te daba confianza en ese mensaje y qué te hacía dudar? ¿Qué podrías hacer, en un minuto, para comprobar que realmente era quien decía ser? Y si no hay una forma fácil de comprobarlo, ¿de quién es esa responsabilidad: tuya, de la escuela, de la plataforma?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La seguridad contemporánea ya no protege solo sistemas. Protege también la identidad, el patrimonio, la intimidad, los vínculos y la capacidad de ejercer derechos. Una cuenta robada no es solo un problema técnico: puede ser un problema de dinero, de reputación o de relaciones.',
      'La privacidad tampoco equivale a ocultar información. Preserva el contexto, la intimidad y un control razonable sobre cómo circulan los datos. Lo que le contás a tu médico no tiene el mismo sentido si llega a un empleador. Por eso importa menos "esconder" y más decidir quién accede a qué información, para qué y en qué contexto.',
      'Un sistema técnicamente seguro puede ser vulnerado igualmente a través de decisiones humanas inducidas por engaño, urgencia o autoridad aparente. Esa es la lógica de la ingeniería social: no ataca la máquina, ataca los mecanismos cotidianos de confianza que hacen posible la cooperación, como reconocer un nombre, obedecer a quien parece tener autoridad o ayudar a quien pide apuro.',
      'Por eso la educación no debería enseñar desconfianza absoluta. Desconfiar de todo es agotador y, además, impide trabajar con otros. Lo que hace falta es una idea más precisa: la **confianza informada**, que consiste en usar sistemas e instituciones buscando las señales, los procedimientos y los mecanismos que hagan razonable esa confianza, y reconocer las señales que justifican verificar más.',
      'Y la protección es interdependiente. Una cuenta comprometida puede afectar a tus contactos y a las organizaciones donde trabajás, y tu privacidad puede depender de información que otros comparten sobre vos. Por eso la seguridad combina el autocuidado con el diseño seguro, los procedimientos institucionales y las responsabilidades de las plataformas.',
      'Pensá en algo que protegés en tu vida digital más allá de una contraseña. ¿Qué perderías si lo comprometieran y a quién más afectaría?',
    ],
    fichaAula1: {
      titulo: 'Protegerse también es ciudadanía: seguridad y cuidado en el mundo digital',
      objetivo:
        'Desarrollar conocimientos y prácticas para proteger la privacidad, la integridad y el bienestar en el entorno digital, fomentando una cultura de seguridad personal y colectiva.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Internet es un espacio de oportunidades, pero también de **riesgos y desafíos**. Nuestra información, nuestras emociones y hasta nuestra imagen pueden ser usadas sin nuestro consentimiento si no actuamos con conciencia.',
        },
        { tipo: 'parrafo', texto: 'Esta dimensión de la ciudadanía digital implica:' },
        {
          tipo: 'lista',
          items: [
            '**Conocer qué datos compartimos y cómo se usan.**',
            '**Saber configurar la privacidad en redes y plataformas.**',
            '**Usar contraseñas seguras y actualizadas.**',
            '**Reconocer riesgos como el grooming, ciberacoso, fraudes o robo de identidad.**',
            '**Cuidar nuestro bienestar emocional frente al uso excesivo, la exposición o los comentarios tóxicos.**',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'También supone construir una cultura de **ciberhigiene**, es decir, hábitos cotidianos de protección digital, y fomentar el **autocuidado emocional** frente a la hiperconexión, la comparación constante o la fatiga digital.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La seguridad digital no es solo técnica: es una dimensión de los **derechos humanos en el entorno digital**, que requiere conciencia, comunidad y acción colectiva.',
        },
      ],
      preguntaDetonadora:
        '*¿Sentís que tenés el control de tu vida digital? ¿Qué sabés de lo que otros pueden hacer con tu información o tus imágenes?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "¡Ups! No sabía que se podía…" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Proponé 3 situaciones comunes (ej: alguien toma una captura y la reenvía; otra persona entra al perfil desde un dispositivo ajeno; alguien abre un mail falso).',
            },
            { tipo: 'parrafo', texto: 'En grupos, analizan:' },
            {
              tipo: 'lista',
              items: ['¿Qué pasó?', '¿Qué consecuencias puede tener?', '¿Cómo se podría haber prevenido?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Plan de autocuidado digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Cada estudiante crea un **perfil de riesgo y cuidado digital**, respondiendo:',
                '¿Qué datos comparto?',
                '¿Cuáles son mis contraseñas? ¿Las cambio?',
                '¿A qué riesgos estoy más expuesto/a (por edad, uso, vínculos, apps)?',
                'Luego elaboran un **plan de autocuidado digital**, que incluya:',
                '3 hábitos de seguridad digital (ej. contraseña segura, doble factor, actualización)',
                '2 estrategias de bienestar (ej. horarios sin pantalla, frenar el scroll, hablar si algo me angustia)',
                '1 compromiso colectivo (ej. no reenviar capturas, ayudar a quien esté expuesto)',
                'Comparten buenas prácticas en una "Cartelera de ciberhábitos saludables".',
              ],
            },
          ],
        },
      ],
      frase: '*"Tu seguridad digital no es paranoia: es tu derecho a estar bien, a cuidarte y a cuidar a otros."*',
      glosario: ['Privacidad digital', 'Ciberhigiene', 'Grooming', 'Bienestar digital', 'Autocuidado'],
      referencias: [
        'argentina.gob.ar/justicia/cyberseguridad',
        'Interland – Reino de la Torre Segura',
        'Chicos.net – "Prevención de riesgos en línea"',
        'App: "Protegé tus datos" – Ministerio de Justicia',
        'Video: "¿Cómo cuidarte en internet?" – Canal Encuentro / INADI',
      ],
    },
    fichaAula2: {
      titulo: '¿Quién sos en la era de los datos? Identidad digital y derechos emergentes',
      objetivo:
        'Comprender qué es el perfil humano digital y reflexionar sobre los derechos de cuarta generación vinculados a la protección de la dignidad, libertad y autonomía de las personas frente al avance de las tecnologías inteligentes.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En la actualidad, las personas no solo tienen un nombre, un rostro o una historia: tienen también un **perfil digital invisible**, construido a partir de millones de datos que se recogen mientras navegamos, publicamos, compramos, buscamos o simplemente nos movemos conectados.',
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
        { tipo: 'parrafo', texto: 'Este **perfil humano digital** es utilizado para:' },
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
            'Aquí emergen los **derechos de cuarta generación**, que buscan proteger a la persona en su dimensión digital. Algunos de ellos son:',
        },
        {
          tipo: 'lista',
          items: [
            'Derecho a la **identidad digital digna y libre de perfilado injusto**',
            'Derecho a la **autodeterminación informativa** (decidir sobre el uso de nuestros datos)',
            'Derecho a la **no discriminación algorítmica**',
            'Derecho a la **explicabilidad de las decisiones automatizadas**',
            'Derecho a la **integridad psiconeuronal y emocional frente a tecnologías invasivas**',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Estos derechos no reemplazan a los anteriores, sino que los actualizan. Hablar de ciudadanía digital hoy es también **defender la dignidad humana ante tecnologías que pueden decidir sin rostro y sin diálogo.**',
        },
      ],
      preguntaDetonadora:
        '*¿Quién decide quién sos cuando no sos vos quien controla tu perfil digital? ¿Qué derechos se ponen en juego cuando un sistema te evalúa sin conocerte?*',
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
                'Elaboran un **artículo de una "Constitución Digital Humana"**, que incluya:',
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
        '*"Tu humanidad no termina donde empieza el código. Tus derechos deben acompañarte también en el mundo digital."*',
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
  confianzaYProteccion: {
    titulo: 'Confianza y protección',
    recordar: {
      subtitulo: 'Recordar',
      intro:
        'Cuando hablamos de seguridad digital, lo que se protege es mucho más que un aparato o una cuenta. Hay cinco cosas que pueden estar en juego a la vez:',
      elementos: [
        '**Los sistemas:** los dispositivos, las cuentas y las plataformas que usamos.',
        '**La identidad:** quién sos en línea, y que nadie pueda hacerse pasar por vos o usar tu nombre.',
        '**El patrimonio:** tu dinero y tus bienes, que hoy se mueven a través de aplicaciones y transferencias.',
        '**La intimidad:** tus datos personales, tus imágenes y lo que no querés que circule.',
        '**Los vínculos:** las personas con las que te relacionás, que pueden verse afectadas si tu cuenta se compromete.',
      ],
      cierre:
        'El concepto que organiza toda esta dimensión es la **confianza informada**: usar sistemas e instituciones buscando las señales, los procedimientos y los mecanismos que hagan razonable esa confianza. No es desconfiar de todo ni creerle a todo, sino saber qué señales mirar antes de confiar.',
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué la privacidad no es ocultar: no se trata de esconder información, sino de conservar un control razonable sobre cómo circula y en qué contexto. Compartir un dato con quien corresponde, para algo concreto y en el marco adecuado, es una decisión legítima. El problema aparece cuando ese dato se mueve a otro lugar, hacia otras personas o con otro fin, sin que lo hayas decidido.',
        'Por qué la seguridad no requiere sospecha permanente: vivir desconfiando de todo es agotador y, además, imposible, porque casi todo lo que hacemos en línea supone confiar en algo. Lo razonable es ajustar el nivel de verificación al impacto de la decisión, la misma idea que vimos en Cognitivo-Intelectual e Informacional. Un pedido que puede costarte dinero, exponer a otros o ser difícil de revertir merece más control que uno que casi no tiene consecuencias.',
        'Por qué la ingeniería social explota la confianza cotidiana: no ataca el sistema, ataca las costumbres que hacen posible convivir. Reconocer un nombre, obedecer a quien parece tener autoridad, ayudar a quien pide un favor urgente son comportamientos normales y valiosos. Quien engaña los usa a su favor, combinando tres ingredientes: una urgencia que no deja pensar, una autoridad aparente que no se anima a cuestionar y un relato que suena creíble. Por eso caer en un engaño así no es una torpeza: es la reacción esperable frente a un mensaje diseñado para provocarla.',
        'Por qué la protección es interdependiente: una cuenta comprometida puede afectar a tus contactos y a las organizaciones donde trabajás, y tu privacidad puede depender de información que otros comparten sobre vos. Por eso la seguridad no es solo un asunto individual: combina el autocuidado con el diseño seguro de las herramientas, los procedimientos de las instituciones y las responsabilidades de las plataformas. Una escuela que pide datos por un canal imposible de verificar, o una plataforma que no ofrece avisos claros, también forman parte de la ecuación.',
      ],
      recuadro: {
        titulo: 'Lo que la seguridad digital NO es',
        parrafos: [
          'No es desconfiar de todo: la sospecha permanente es agotadora, aísla y no protege mejor que la confianza informada.',
          'No es ocultar toda la información: la privacidad consiste en controlar razonablemente cómo circula, no en esconderla.',
          'No es una responsabilidad solo individual: el diseño de las herramientas, los procedimientos de las instituciones y las decisiones de las plataformas también cuentan.',
          'No es culpar a quien cayó en un engaño: esos engaños están diseñados para funcionar, y lo útil es entender cómo y qué se puede mejorar.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a un mensaje, un pedido o un sistema que te genera presión, tres preguntas:',
      preguntas: [
        '**¿Qué está en juego?** Qué se podría perder o exponer: dinero, datos, identidad, intimidad, vínculos.',
        '**¿Qué señal pide más verificación?** Si hay urgencia, autoridad aparente, un pedido inusual o algo que no se puede deshacer.',
        '**¿A quién más afectaría?** Si lo que decidas puede alcanzar también a tus contactos, a tus estudiantes o a tu institución.',
      ],
      parrafoMovimientos: 'Y tres movimientos, en este orden:',
      movimientos: [
        '**Pausar:** interrumpir la urgencia. Darte tiempo antes de responder, hacer clic o transferir. La prisa es, muchas veces, parte del engaño.',
        '**Verificar con una fuente independiente:** comprobar por un canal distinto del que te llegó el pedido, uno que vos conozcas y elijas. No usar el número, el enlace ni los datos de contacto del propio mensaje.',
        '**Decidir:** actuar recién después de ampliar la información. Si la verificación confirma el pedido, avanzar. Si no se puede verificar o no cierra, no avanzar y avisar a quien corresponda.',
      ],
    },
    fichaAula3: {
      titulo: 'Cuidarse también es digital: proteger datos, identidad y vínculos en línea',
      objetivo:
        'Desarrollar capacidades para reconocer riesgos digitales, proteger la identidad personal y los datos en línea, y adoptar hábitos de navegación segura con criterios de prevención y responsabilidad.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Navegar por internet no es solo una actividad técnica: es también una práctica ciudadana que implica **cuidarse a uno mismo y a los demás.**',
        },
        { tipo: 'parrafo', texto: 'La **seguridad digital** abarca:' },
        {
          tipo: 'lista',
          items: [
            'Protección de **datos personales y contraseñas**',
            'Prevención de **fraudes, suplantaciones, acoso y grooming**',
            'Gestión consciente de la **huella digital**',
            'Uso de herramientas de **verificación y privacidad**',
            'Evaluación de **configuraciones de seguridad** en redes y plataformas',
            'Capacidad para detectar **señales de riesgo** y saber a quién acudir',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La **identidad digital** es más que un nombre de usuario: incluye fotos, gustos, comportamientos, opiniones, hábitos y relaciones que construyen una imagen pública y una trayectoria personal.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Una ciudadanía digital segura implica formar personas capaces de **actuar con cuidado, autonomía y criterio ético**, protegiendo tanto su intimidad como la de los demás.',
        },
      ],
      preguntaDetonadora:
        '*¿Sentís que tu vida digital está segura? ¿Quién debería enseñarte a cuidarte en internet?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Contraseña segura o adivinable?" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Se presentan ejemplos de contraseñas reales (algunas inseguras).' },
            { tipo: 'parrafo', texto: '→ En grupos, deben:' },
            { tipo: 'lista', items: ['Identificar las más débiles', 'Proponer mejoras'] },
            { tipo: 'parrafo', texto: '→ Reflexión: ¿por qué usamos contraseñas fáciles? ¿Qué riesgos hay?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Mapa de mi seguridad digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos o individualmente, los estudiantes completan un mapa o checklist que incluya:',
                '¿Cuántas cuentas tengo? ¿Qué datos comparto?',
                '¿Qué apps acceden a mi ubicación o cámara?',
                '¿Tengo segundo factor de autenticación?',
                '¿Qué riesgos detecto en mi vida digital?',
                '¿Cómo puedo mejorar mi seguridad?',
                'Luego diseñan una **"Guía rápida de autocuidado digital"** para su comunidad educativa o familiar.',
                'Pueden presentarla en formato gráfico, folleto digital, video o cartel en redes.',
              ],
            },
          ],
        },
      ],
      frase: '*"Tu vida digital también merece cuidados. Porque lo invisible… también te expone."*',
      glosario: ['Seguridad digital', 'Datos personales', 'Contraseña segura', 'Huella digital', 'Autenticación'],
      referencias: [
        'Argentina.gob.ar – Cuidar la identidad digital',
        'Chicos.net – Ciberseguridad y ciudadanía digital',
        'Fundación Karisma – Manual de autocuidado digital',
        'Video: "Contraseñas, perfiles y protección online" – Canal Encuentro',
        'App Password Checkup – Herramientas de gestión de contraseñas',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Son las ocho de la mañana y una docente de secundaria está por entrar al aula cuando le llega un WhatsApp de un número que no tiene agendado: "Hola, soy la nueva directora, este es mi número. Necesito un favor urgente con una transferencia, te lo devuelvo hoy". El nombre es el de la nueva directora, a quien conoció hace pocos días. Empieza a escribir "Sí, claro, decime" y siente la presión de no quedar mal con quien recién llega. Antes de enviar, algo la frena: la persona que le escribe no tiene foto de perfil y es la primera vez que la directora la contacta por un número que no es el del grupo de la escuela.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la docente recibió un pedido con tres ingredientes a la vez: un nombre que reconoce, una persona con autoridad y una urgencia que no deja tiempo. Todavía no hizo nada, y eso es lo importante: lo primero que hizo fue detenerse. Lo que está en juego no es solo el dinero de una transferencia: es también su identidad como alguien que puede ser usada para pedirles favores a otros, y la confianza dentro de la escuela.',
        ],
        nota: '(Acá me pregunto: ¿qué me hizo frenar? ¿Fue una señal concreta o solo una sensación de que algo no cerraba? Y si me hubiera apurado más, ¿habría frenado?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué señales piden más verificación: la urgencia ("favor urgente", "hoy"), la autoridad aparente (alguien que dice ser la directora, a quien es difícil decirle que no), el pedido inusual (una transferencia por mensaje) y el canal nuevo (un número desconocido que dice ser el de una persona que ya tiene otro canal conocido). Ninguna de esas señales prueba por sí sola que sea un engaño, pero todas juntas justifican aumentar la verificación.',
          'Lo que se protege acá es el patrimonio de la docente, pero también la confianza de sus vínculos: si el engaño funciona con ella, es probable que el mismo mensaje haya llegado a sus colegas, y cada una de esas personas puede ser la próxima. La protección es interdependiente: lo que ella decida puede afectar a otros.',
        ],
        nota: '(Acá me pregunto: ¿a cuántas personas más de la escuela les habrá llegado el mismo mensaje? ¿Y qué pasaría si alguna ya respondió?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué corresponde hacer, en el orden que propone el procedimiento. Primero, pausar: no responder, no transferir y no discutir con el número desconocido. La urgencia es parte del mensaje y no la obliga a nada. Segundo, verificar con una fuente independiente: confirmar con la directora por un canal que ella conozca y elija, como el número que figura en los registros de la escuela, el grupo oficial o directamente en persona. No usar el número ni los datos de contacto del propio mensaje, porque esos los controla quien lo escribió.',
          'Y tercero, decidir después de ampliar la información. Si la directora confirma que no escribió, la docente no avanza con la transferencia. Si algo no se puede comprobar, la decisión razonable es no avanzar. No hace falta que sea una certeza absoluta para detenerse: alcanza con que la verificación no cierre.',
        ],
        nota: '(Acá me pregunto: si la verificación no me dice nada concluyente, ¿qué prefiero perder: unos minutos de espera o el dinero de una transferencia que no se puede deshacer?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca a mí resolver sola un problema que probablemente afecta a toda la escuela. Mi parte es avisar. Informar a la dirección por el canal oficial y a mis colegas lo antes posible, para que nadie más caiga, y, si alguien ya hizo una transferencia, recomendarle que avise de inmediato a su banco por sus canales oficiales. Y tampoco me corresponde culparme ni culpar a quien respondió: esos mensajes están diseñados para parecer reales, y quien caiga no es torpe, es una persona a la que le hicieron un pedido bien armado.',
          'Lo que la institución también debe ofrecer: un canal verificable y claro para este tipo de comunicaciones. Si la escuela no tiene una forma simple de confirmar que un mensaje viene realmente de la dirección, la verificación queda librada a la suerte de cada docente. Lo que ajustaría para la próxima vez: proponer a la dirección que se difunda qué números y canales son oficiales, y que se acuerde que los pedidos de dinero nunca se hacen por mensaje.',
        ],
        nota: '(Acá me pregunto: si esto le hubiera pasado a una colega, ¿le habría dicho que fue descuidada o le habría ofrecido ayuda? ¿Y qué canal oficial tiene hoy mi escuela para confirmar una comunicación de la dirección?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué hacer primero: Pausar, Verificar o Decidir. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un estudiante de tercer año recibe un mensaje en su celular, con el logo de una red social que usa todos los días: "Tu cuenta se suspende en 10 minutos. Para evitarlo, verificá tu identidad ahora", con un enlace y un contador que baja. Siente un golpe de miedo: ahí tiene fotos, mensajes y contactos que no quiere perder. Tiene el dedo sobre el enlace.',
        analisis:
          '**¿Qué hacés primero?** Pausar. Lo que más pesa en este mensaje es la urgencia: un contador que baja y un plazo de diez minutos están diseñados para que no te dé tiempo de pensar. El miedo a perder la cuenta es real, pero justamente por eso conviene frenar antes de hacer clic. Frenar no cuesta nada: si la cuenta realmente tuviera un problema, la red social lo avisaría también dentro de la aplicación, y esperar unos minutos no lo cambia. Después de pausar, el paso siguiente sería verificar entrando por tu cuenta, sin usar el enlace del mensaje.',
        nota: '(Si elegiste "Verificar" o "Decidir": son pasos correctos, pero vienen después. Lo primero es interrumpir la urgencia; si hacés clic mientras sentís el miedo, ya decidiste sin haber verificado nada.)',
      },
      {
        clave: 's2',
        enunciado:
          'Una docente recibe una llamada de alguien que dice ser del "soporte técnico del banco". Con voz tranquila y profesional, le explica que detectaron un movimiento sospechoso en su cuenta y que, para bloquearlo, necesita que le lea el código que le va a llegar por mensaje. Sabe el nombre del banco, su nombre completo y los últimos dígitos de una tarjeta.',
        analisis:
          '**¿Qué hacés primero?** Verificar. Acá no hay un contador apurando, y quien llama sabe algunos datos tuyos, lo que le da una apariencia de legitimidad: es la autoridad aparente. Que sepa tu nombre o los últimos números de una tarjeta no prueba que sea del banco, porque esos datos pueden obtenerse de otros lugares. Lo que corresponde es cortar la llamada y verificar por una fuente independiente: comunicarte con el banco por el número que figura en tu tarjeta o en su sitio oficial, no por el que te dieron en la llamada. Y hay una regla clara: un código que te llega por mensaje es personal y no se le dice a nadie, ni siquiera a quien dice ser del banco.',
        nota: '(Si elegiste "Pausar": cortar la llamada ya es una pausa y está bien. Pero acá lo decisivo es lo que viene después: comprobar por un canal que vos elegís, y no seguir hablando con quien llamó.)',
      },
      {
        clave: 's3',
        enunciado:
          'Una escuela envía por WhatsApp a las familias un enlace a un formulario para "actualizar urgentemente los datos de los estudiantes": nombre completo, número de documento, domicilio y datos de salud. El mensaje llega desde un número que no es el oficial del colegio y no explica para qué se usarán esos datos ni quién los recibe. Algunas familias dudan; otras ya completaron el formulario. La escuela no tiene ningún otro canal para confirmar que el pedido es suyo.',
        analisis:
          '**¿Qué hacés primero?** No hay una única respuesta correcta en este caso, y es a propósito: el problema no es solo de las familias, es también del diseño del procedimiento. Una lectura puede empezar por pausar: no completar el formulario hasta entender qué se pide y para qué, porque son datos sensibles de menores. Otra puede empezar por verificar: llamar a la escuela por un número conocido o preguntar en la dirección, aunque la escuela no haya ofrecido un canal claro. Y otra puede centrarse en decidir: si no es posible verificar, no avanzar. Lo que no se puede resolver solo con autocuidado es la parte institucional: una escuela que pide datos sensibles por un canal que las familias no pueden verificar está dejando la protección en manos de cada familia. Lo que se evalúa es que puedas justificar tu lectura mirando qué se protege, qué señales hay y qué le toca a cada parte, incluida la institución.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: una docente que recibe un mensaje de un número desconocido que dice ser de la dirección y le pide un favor urgente con dinero. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'El mensaje dice que es de la dirección y usa su nombre. Es una persona de la institución, así que es seguro. Hay que hacer lo que pide, sin perder tiempo.',
      citaB:
        'En internet no hay que confiar en nadie. Lo más seguro es no responder ningún mensaje que no sea de alguien que ya conocés en persona, y no hacer nunca trámites ni transferencias en línea.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** confía a ciegas por la autoridad aparente. Que un mensaje diga ser de la dirección y use un nombre conocido no prueba que lo sea: justamente eso es lo que explota la ingeniería social. Una confianza informada busca señales que la hagan razonable, y acá hay varias que piden más verificación: la urgencia, el pedido de dinero y un número desconocido.',
      errorB:
        '**Análisis B:** cae en la sospecha permanente. Desconfiar de todo no es una forma más segura de protegerse: es agotador, aísla y deja de ser viable, porque casi todo lo que hacemos en línea implica confiar en algo. Lo razonable es ajustar la verificación al impacto de lo que se pide, no renunciar a usar la tecnología.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no se hicieron la pregunta de qué señales justifican confiar. Uno confió sin mirar ninguna, y el otro descartó la confianza sin distinguir cuándo era razonable.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y explicar qué es la confianza informada',
        enunciado: '¿Cuál de estas afirmaciones describe mejor la confianza informada?',
        opciones: [
          { id: 'a', texto: 'Confiar solo en personas e instituciones que ya conocés en persona.' },
          { id: 'b', texto: 'Desconfiar de todo para no correr ningún riesgo.' },
          {
            id: 'c',
            texto:
              'Usar sistemas e instituciones buscando las señales, los procedimientos y los mecanismos que hagan razonable esa confianza.',
          },
          { id: 'd', texto: 'Confiar en cualquier mensaje que parezca profesional y esté bien escrito.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Confiar solo en lo conocido deja afuera muchas cosas razonables, y tampoco protege del todo: alguien puede hacerse pasar por una persona o institución que ya conocés. Lo que importa son las señales, no solo el nombre.',
          b: 'Esa es la sospecha permanente. Es agotadora, aísla y no protege mejor, porque casi todo lo que hacemos en línea supone confiar en algo.',
          d: 'Que un mensaje parezca profesional y esté bien escrito no es una señal confiable: la apariencia se puede fabricar con facilidad.',
        },
      },
      {
        objetivo: 'identificar qué se protege y qué señales justifican verificar más',
        enunciado:
          'Un número desconocido te escribe diciendo ser una compañera de trabajo. Te pide que le hagas hoy mismo una transferencia de dinero y que se la devolvés mañana. ¿Qué señales justifican verificar más antes de responder?',
        opciones: [
          {
            id: 'a',
            texto:
              'La urgencia, el pedido de dinero, que la persona se presente como alguien conocido desde un número nuevo, y que el pedido sea inusual.',
          },
          { id: 'b', texto: 'Solamente que el mensaje esté bien escrito.' },
          { id: 'c', texto: 'Que la persona use tu nombre.' },
          { id: 'd', texto: 'Ninguna: si menciona a una compañera, el mensaje es seguro.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Que un mensaje esté bien escrito no dice nada sobre si es auténtico. Los engaños bien armados suelen estar muy bien escritos.',
          c: 'Usar tu nombre es un dato fácil de conseguir. No es una señal de que sea auténtico, y tampoco por sí solo de que sea un engaño.',
          d: 'Mencionar a una persona conocida es justamente lo que se usa para generar confianza. Esa es la autoridad aparente que piden verificar más.',
        },
      },
      {
        objetivo: 'aplicar Pausar–Verificar–Decidir',
        enunciado:
          'Te llega un correo que parece del Ministerio con un enlace: "actualizá tus datos hoy o perdés el beneficio". ¿Cuál es la secuencia más adecuada?',
        opciones: [
          { id: 'a', texto: 'Hacer clic en el enlace para ver de qué se trata y recién después decidir.' },
          { id: 'b', texto: 'Responder al mismo correo preguntando si es real.' },
          { id: 'c', texto: 'Llamar al número que aparece en el propio correo para confirmarlo.' },
          {
            id: 'd',
            texto:
              'Pausar, verificar por un canal propio y conocido, sin usar el enlace ni los datos del correo, y recién después decidir.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Hacer clic ya es decidir, y se hace antes de verificar nada. En muchos engaños, el solo clic alcanza para exponer datos o instalar algo.',
          b: 'Preguntarle a quien escribió el correo no verifica nada: la respuesta la controla la misma persona que mandó el pedido, y puede ser parte del engaño.',
          c: 'El número que figura en el mensaje también lo eligió quien lo escribió. Para verificar de manera independiente hay que usar un canal que vos conozcas y elijas, como el sitio oficial o un teléfono que ya tenías.',
        },
      },
      {
        objetivo: 'distinguir qué depende de la persona y qué depende del diseño, la institución o la plataforma',
        enunciado:
          'Una escuela pide a las familias datos sensibles de los estudiantes mediante un enlace enviado por WhatsApp desde un número no oficial, sin ofrecer ninguna forma de confirmar que el pedido es suyo. Varias familias completan el formulario. ¿Qué lectura es más adecuada?',
        opciones: [
          { id: 'a', texto: 'Es responsabilidad exclusiva de las familias: tenían que haber desconfiado.' },
          {
            id: 'b',
            texto:
              'Una parte es de la institución, porque no ofreció un canal verificable, y corresponde revisar el procedimiento además de pedir cuidado a las familias.',
          },
          { id: 'c', texto: 'No hay ningún problema: la escuela es una institución conocida.' },
          { id: 'd', texto: 'Es un problema de la plataforma de mensajería, no de la escuela.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'La protección es interdependiente. Si la escuela no ofrece forma de verificar el pedido, deja el cuidado librado a cada familia, y eso no es una responsabilidad que pueda recaer solo en ellas.',
          c: 'Que una institución sea conocida no la exime de ofrecer canales verificables. De hecho, el pedido llegó desde un número que no es el oficial: la autoridad aparente no alcanza.',
          d: 'La plataforma tiene su parte, pero no es la única: el procedimiento lo diseñó la escuela, y le corresponde ofrecer un canal claro y comunicar cuáles son los oficiales.',
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
          'Confía a ciegas porque el pedido parece venir de una persona o institución conocida, o descarta todo por sospecha sin distinguir cuándo la confianza es razonable.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que hay que verificar, pero no identifica qué señales lo justifican o verifica por el mismo canal por el que llegó el pedido.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Identifica qué se protege y qué señales piden más verificación, aplica Pausar–Verificar–Decidir con una fuente independiente y propone una acción proporcionada.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además distingue qué depende de la persona y qué del diseño, la institución o la plataforma, propone mejoras al procedimiento (como canales verificables) y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: qué se protege, qué es la confianza informada, qué señales piden verificar más y el procedimiento Pausar–Verificar–Decidir. Lo que cambia, a partir de acá, es que podés convertir esa pausa en un hábito del aula y en una pregunta para tu escuela: no solo si cada persona sabe cuidarse, sino si hay canales que le permitan comprobar.',
    accionSemana: '**Una acción concreta para esta semana:** hacé con tu curso un simulacro corto, siguiendo estos pasos:',
    pasos: [
      'Presentales un escenario con urgencia, como un mensaje que dice "tu cuenta se suspende en 10 minutos" o un pedido de ayuda de alguien que dice ser conocido. Que sea realista, pero inventado.',
      'Pedí que cada uno anote en silencio qué haría en ese momento, antes de discutirlo. Esa es la reacción inicial.',
      'Introducí una pausa: que dejen el papel y respiren un momento antes de decidir. Recordales que la urgencia es parte del mensaje.',
      'Pedí que busquen canales independientes: ¿por dónde podrían comprobar si el mensaje es real, sin usar el enlace ni los datos que trae?',
      'Comparen: ¿cambió la decisión después de la pausa y de buscar otro canal? ¿Qué señal los hizo dudar?',
    ],
    cierrePasos:
      'El valor del ejercicio está en que ellos mismos noten cómo cambia una decisión cuando se interrumpe la urgencia, no en que acierten la respuesta.',
    parrafo2:
      'Y llevá una pregunta a la escuela: ¿qué canales verificables existen hoy para confirmar que una comunicación realmente viene de la dirección o de la institución? Si la respuesta no es clara, ya tenés algo concreto para proponer.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** el mensaje de la "nueva directora" a las ocho de la mañana. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué señales tenía ese mensaje, qué harías ahora en el primer minuto y qué le pedirías a tu escuela? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula4: {
      titulo: 'Cuidarse también es digital: proteger datos, identidad y vínculos en línea',
      objetivo:
        'Fortalecer la capacidad de identificar riesgos digitales, adoptar prácticas seguras en entornos virtuales y proteger la identidad personal, la información sensible y los vínculos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En internet, cada acción deja huella: lo que compartimos, descargamos, aceptamos, permitimos o ignoramos **puede afectar nuestra privacidad, seguridad y reputación**.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La **seguridad digital** no es solo instalar antivirus: es desarrollar una actitud preventiva y activa frente a posibles amenazas como:',
        },
        {
          tipo: 'lista',
          items: [
            'Robo de contraseñas',
            'Suplantación de identidad (phishing)',
            'Hackeos o accesos no autorizados',
            'Ciberacoso, grooming o fraudes digitales',
            'Pérdida de control sobre imágenes o datos personales',
          ],
        },
        { tipo: 'parrafo', texto: 'Cuidar nuestra **identidad digital** es también reconocer:' },
        {
          tipo: 'lista',
          items: [
            'Qué compartimos y con quién',
            'Qué permisos damos a apps y plataformas',
            'Qué imágenes, comentarios y datos construyen nuestra reputación',
            'Cuándo decir NO en lo digital',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Promover una **ciberhigiene cotidiana** (como revisar contraseñas, ajustar la privacidad, cerrar sesiones, usar verificación en dos pasos) forma parte del **derecho a la seguridad digital y la integridad personal**.',
        },
        { tipo: 'parrafo', texto: 'Una ciudadanía digital activa se protege a sí misma y cuida a los demás.' },
      ],
      preguntaDetonadora:
        '*¿Tu contraseña dice más de vos de lo que pensás? ¿Alguna vez sentiste que te expusiste de más en lo digital?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi mochila digital" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Cada estudiante escribe en secreto:' },
            {
              tipo: 'lista',
              items: [
                '¿Qué apps usa todos los días?',
                '¿Qué datos tiene guardados en su celular?',
                '¿Qué pasaría si alguien accediera sin permiso?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Luego, reflexionan: ¿cómo cuido mi mochila digital tanto como mi mochila física?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Escudo de seguridad digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, identifican los riesgos digitales más comunes entre jóvenes.',
                'Luego diseñan un **"Escudo de Ciberseguridad"**, que incluya:',
                '4 prácticas de autoprotección (ej. contraseñas seguras, doble factor, control de permisos, evitar enlaces sospechosos)',
                '3 estrategias para proteger a otras personas',
                '2 recursos donde pedir ayuda',
                '1 lema de prevención',
                'Presentan sus escudos como afiches digitales, posters animados o kits de cuidado escolar.',
              ],
            },
          ],
        },
      ],
      frase: '*"Tu identidad es tuya. Y defenderla también es un acto de libertad."*',
      glosario: ['Seguridad digital', 'Ciberhigiene', 'Phishing', 'Identidad digital', 'Autoprotección'],
      referencias: [
        'Argentina.gob.ar – Consejos de seguridad digital',
        'Chicos.net – Seguridad, privacidad y ciudadanía digital',
        'Video: "Tu clave, tu escudo" – Canal Encuentro',
        'Google Safety Center',
        'Fundación Vía Libre – Ciberseguridad en lenguaje claro',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué reconocer un nombre y sentir urgencia no alcanzan para saber que alguien es quien dice ser?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Seguridad, Privacidad y Protección Digital, en una tarjeta',
      parrafos: [
        'La seguridad hoy no protege solo sistemas. Protege también tu identidad, tu patrimonio, tu intimidad y tus vínculos. Y la privacidad no es ocultar información: es tener un control razonable sobre cómo circula.',
        '**La confianza informada:** usar sistemas e instituciones buscando las señales, los procedimientos y los mecanismos que hagan razonable esa confianza. No es desconfiar de todo ni creerle a todo.',
        '**Las tres preguntas, frente a algo que te presiona:** ¿Qué está en juego? · ¿Qué señal pide más verificación? · ¿A quién más afectaría?',
        '**Pausar · Verificar · Decidir:** Pausar para interrumpir la urgencia. Verificar con una fuente independiente, por un canal que vos conozcas y elijas. Decidir recién después de ampliar la información.',
        '**Y una cosa más:** la protección es interdependiente. Combina el autocuidado con el diseño seguro, los procedimientos de las instituciones y las responsabilidades de las plataformas.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la séptima de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Ético-Normativa y Derechos',
    seguiEnlace2Href: '/tematicas/etico-normativa-y-derechos',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'La seguridad no pide desconfiar de todo: pide confiar con criterio. Buscar las señales que hacen razonable una confianza, darse una pausa cuando algo apura, comprobar por un canal propio y exigir que las instituciones y las plataformas ofrezcan caminos para poder hacerlo. Cuidarse y cuidar a los demás es una tarea compartida, y empieza por una pregunta simple: ¿cómo sé que esto es lo que dice ser?',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[SEGURIDAD_PROTECCION_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
