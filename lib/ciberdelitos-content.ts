// Contenido de /tematicas/ciberdelitos. Misma forma que lib/persona-no-es-dato-content.ts
// (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/ciberdelitos/ficha-aula';

export const CIBERDELITOS_FALLBACK: Audiencia = 'docentes';

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
  { id: 'delito-y-entorno-digital', number: '05', label: 'Delito y entorno digital', shortLabel: 'Delito y entorno' },
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
  delitoYEntornoDigital: {
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
    titulo: 'Ciberdelitos y Delitos Facilitados por Tecnología',
    subtitulo: 'De identificar a intervenir',
    bajada:
      'La categoría ciberdelito reúne fenómenos heterogéneos. Algunas conductas dependen sustancialmente de sistemas informáticos; otras ya existían antes y simplemente encuentran, a través de la tecnología, nuevas formas de ejecución. Esta temática forma parte del grupo Seguridad de la plataforma y trabaja esa diferencia: prevenir una intrusión técnica requiere capacidades distintas de interrumpir una estafa basada en confianza, y confundir ambas cosas lleva a intervenir mal.',
    listaTitulo: 'Vas a:',
    lista: [
      'Distinguir conductas que dependen sustancialmente de sistemas informáticos de aquellas que, existiendo antes, encuentran nuevas formas de ejecución mediante tecnología.',
      'Reconocer los cuatro roles que puede cumplir la tecnología en un ciberdelito: objeto atacado, medio, facilitador o escenario, y por qué esa distinción ayuda a diseñar una estrategia de intervención.',
      'Entender que, aunque las trayectorias digitales atraviesan jurisdicciones y proveedores y eso exige cooperación y evidencia digital, familias, escuelas, bancos y plataformas siguen teniendo un papel central en los momentos tempranos de prevención.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Distinguir un delito que depende sustancialmente de sistemas informáticos de uno que ya existía y encuentra, mediante tecnología, nuevas formas de ejecución — y por qué esa distinción cambia qué capacidades hacen falta para prevenirlo o interrumpirlo.',
      'Identificar, en una situación concreta, si la tecnología funciona como objeto atacado, medio, facilitador o escenario, sin que la existencia de una aplicación o una red reemplace el análisis de la conducta, la intención, el resultado y los elementos legales aplicables.',
      'Reconocer que las trayectorias digitales pueden atravesar jurisdicciones y proveedores, lo que aumenta la importancia de la cooperación, la evidencia digital y las capacidades institucionales, sin que eso elimine el papel de familias, escuelas, bancos y plataformas en los momentos tempranos de prevención.',
      'Usar este capítulo como lente de lectura frente a una situación concreta: identificar primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado, trasladando ese criterio a la escuela, la familia, la universidad, la administración pública, la justicia o las organizaciones.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Es lo mismo que te hackeen a que te engañen?',
    parrafos: [
      'Una docente recibe en su correo institucional un mensaje que parece venir de la dirección de la escuela: le piden que confirme su usuario y contraseña del sistema de calificaciones "por una actualización urgente". Hace clic, pone sus datos, y dos días después alguien entró a esa cuenta y cambió notas de varios estudiantes. En la reunión de equipo, alguien dice "nos hackearon el sistema" y empiezan a hablar de instalar un antivirus mejor y de pedirle a soporte técnico que revise los servidores.',
      'Nadie entró a ningún servidor. Nadie explotó una falla técnica. Lo que pasó fue que la docente confió en un mensaje que parecía legítimo y entregó, ella misma, la llave de su cuenta. Son dos problemas completamente distintos, aunque hayan terminado en el mismo lugar: uno requiere revisar la seguridad técnica de un sistema; el otro requiere entender por qué un mensaje logró parecer confiable y cómo detenerse antes de responder a algo así. Tratar el segundo como si fuera el primero deja a la escuela buscando una falla que no existe, mientras el verdadero punto débil —cómo se verifica un pedido antes de actuar— queda sin tocar.',
    ],
    problema:
      'Pensá en una situación digital rara que te haya pasado a vos, a tu escuela o a alguien que conocés: una cuenta comprometida, un mensaje sospechoso, un cobro que no reconocían. ¿Fue alguien que entró técnicamente a un sistema, o alguien que logró que una persona confiara y actuara?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La categoría ciberdelito reúne fenómenos heterogéneos. Algunas conductas dependen sustancialmente de sistemas informáticos; otras ya existían antes y simplemente encuentran, a través de la tecnología, nuevas formas de ejecución. Por eso prevenir una intrusión técnica requiere capacidades distintas de interrumpir una estafa basada en confianza: son dos tipos de problema diferentes, aunque a veces terminen pareciéndose.',
      'La tecnología puede funcionar como objeto atacado, medio, facilitador o escenario de una conducta. Esta distinción no es solo teórica: ayuda a diseñar la estrategia correcta frente a cada situación, y también preserva precisión jurídica. La existencia de una aplicación o una red no reemplaza el análisis de la conducta, la intención, el resultado y los elementos legales aplicables — que haya tecnología de por medio no define, por sí solo, de qué tipo de hecho se trata.',
      'Las trayectorias digitales, además, pueden atravesar jurisdicciones y proveedores distintos. Eso aumenta la importancia de la cooperación entre instituciones, de la evidencia digital y de las capacidades institucionales para investigar. Pero nada de eso elimina el papel que cumplen las familias, las escuelas, los bancos y las plataformas en los momentos tempranos de prevención — antes de que un hecho llegue a necesitar cooperación judicial internacional, hay mucho que se puede hacer o evitar más cerca de la persona.',
    ],
    preguntaCierre:
      'Pensá en algún hecho digital del que hayas escuchado hablar en tu escuela o tu entorno. ¿Dependía realmente de un sistema informático, o era algo que ya podía pasar antes y la tecnología solo le dio una forma nueva?',
    fichaAula1: {
      titulo: 'Cuidarse también es digital: proteger datos, identidad y vínculos en línea',
      objetivo:
        'Fortalecer la capacidad de identificar riesgos digitales, adoptar prácticas seguras en entornos virtuales y proteger la identidad personal, la información sensible y los vínculos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En internet, cada acción deja huella: lo que compartimos, descargamos, aceptamos, permitimos o ignoramos puede afectar nuestra privacidad, seguridad y reputación.',
        },
        {
          tipo: 'parrafo',
          texto: 'La seguridad digital no es solo instalar antivirus: es desarrollar una actitud preventiva y activa frente a posibles amenazas como:',
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
        { tipo: 'parrafo', texto: 'Cuidar nuestra identidad digital es también reconocer:' },
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
            'Promover una ciberhigiene cotidiana (como revisar contraseñas, ajustar la privacidad, cerrar sesiones, usar verificación en dos pasos) forma parte del derecho a la seguridad digital y la integridad personal.',
        },
        { tipo: 'parrafo', texto: 'Una ciudadanía digital activa se protege a sí misma y cuida a los demás.' },
      ],
      preguntaDetonadora:
        '¿Tu contraseña dice más de vos de lo que pensás? ¿Alguna vez sentiste que te expusiste de más en lo digital?',
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
                'Luego diseñan un "Escudo de Ciberseguridad", que incluya:',
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
      frase: 'Tu identidad es tuya. Y defenderla también es un acto de libertad.',
      glosario: ['Seguridad digital', 'Ciberhigiene', 'Phishing', 'Identidad digital', 'Autoprotección'],
      referencias: [
        'Argentina.gob.ar – Consejos de seguridad digital',
        'Chicos.net – Seguridad, privacidad y ciudadanía digital',
        'Video: "Tu clave, tu escudo" – Canal Encuentro',
        'Google Safety Center – safety.google',
        'Fundación Vía Libre – Ciberseguridad en lenguaje claro',
      ],
    },
  },
  delitoYEntornoDigital: {
    titulo: 'Delito y entorno digital',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: ciberdelito reúne fenómenos heterogéneos. Resulta útil distinguir conductas que dependen de sistemas informáticos de aquellas que son facilitadas por tecnología, y analizar si la tecnología funciona como objeto, medio, facilitador o escenario de una conducta. Pensarlo bien exige trabajar con una escala de análisis que reúna la experiencia personal, las relaciones, las instituciones y la arquitectura tecnológica — no alcanza con mirar solo la herramienta usada o solo a la persona afectada por separado.',
        'El capítulo nombra como referencia a UNICEF, UNODC, Europol, INTERPOL y la literatura sobre violencias facilitadas por tecnología e ingeniería social, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a un hecho digital, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — pensar que "hubo tecnología de por medio" ya explica lo que pasó es, justamente, el tipo de atajo que hay que evitar.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar buen criterio y seguir condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que toda situación con tecnología de por medio sea, automáticamente, el mismo tipo de hecho: hay que distinguir si depende de un sistema informático o si la tecnología solo facilitó algo que ya podía pasar antes.',
          'No es solo una cuestión de que cada persona aprenda a cuidarse mejor: alguien puede tener buen criterio y seguir condicionado por reglas opacas o procedimientos institucionales confusos.',
          'No alcanza con una buena regulación o un buen diseño de plataforma si quienes participan no tienen los conocimientos, la confianza o la posibilidad real de usarlos.',
          'No es diagnosticar a partir de una sola observación: hay que reconstruir cómo se manifiesta el hecho y qué evidencia sostiene cada hipótesis, sin confundir correlación con mecanismo.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona, o qué parte de una institución, queda afectada por lo que pasó.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si la tecnología funcionó como objeto atacado, medio, facilitador o escenario, y qué combinación de capacidad, contexto, diseño, normas e incentivos produjo este resultado.',
        '**¿Qué cambio sería proporcionado?** El propósito no es llegar a la misma respuesta en todos los casos, sino mejorar la calidad de las preguntas que preceden a la decisión.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una docente descubre que alguien creó una cuenta de Instagram con su nombre y con fotos tomadas de su perfil real. La cuenta falsa le escribió a varios estudiantes del curso pidiéndoles que completaran "una encuesta de la escuela", con su nombre de usuario y algunos datos personales. Dos estudiantes ya respondieron antes de que un tercero se diera cuenta de que algo no cerraba y avisara a la docente. En la sala de profesores, alguien dice: "la hackearon".',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: alguien tomó fotos reales de la docente para construir un perfil falso, y usó esa cuenta para contactar estudiantes y pedirles datos personales haciéndolos creer que era algo institucional. Participan la docente, cuya imagen fue usada sin su consentimiento; los estudiantes que respondieron, cuyos datos ya salieron; quien administra la cuenta falsa, sin identificar todavía; y la plataforma donde ocurrió todo. Lo que está en juego es doble: la identidad de la docente y los datos que ya entregaron los estudiantes.',
        ],
        nota: '*(Acá me pregunto: lo que se atacó acá, ¿fue la cuenta real de la docente, o fueron los estudiantes a quienes les pidieron información?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la identidad de la docente, usada como fachada sin su autorización, y la privacidad de los estudiantes, que entregaron datos creyendo que respondían a algo oficial.',
          'Qué condiciones sociotécnicas intervienen: la plataforma no exige verificar que la foto de perfil corresponda a quien dice ser esa persona — ahí la tecnología funcionó como facilitador. Esa misma cuenta se usó como medio para escribir a los estudiantes. Y la "encuesta" armada para parecer institucional fue el escenario donde se pidieron los datos. Pero nadie entró técnicamente a ninguna cuenta ni a ningún sistema de la docente: no hubo un objeto atacado en ese sentido, y por eso decir "la hackearon" no describe bien lo que pasó.',
        ],
        nota: '*(Acá me pregunto: ¿esto es un hackeo? No — nadie accedió sin autorización a nada que fuera de la docente. Es algo que ya podía pasar antes de internet —alguien haciéndose pasar por otra persona— y que la plataforma facilitó.)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: reportar la cuenta falsa a la plataforma para que la dé de baja, avisar a las familias de los estudiantes que respondieron sobre qué datos entregaron exactamente, y contarle al curso lo que pasó sin exponer públicamente a quienes cayeron en el engaño. No corresponde buscar una falla técnica que revisar, porque no la hubo: corresponde actuar sobre la suplantación y sobre los datos que ya salieron.',
        ],
        nota: '*(Acá me pregunto: ¿alcanza con reportar la cuenta a la plataforma, o hay algo más institucional que avisar primero?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la docente: no le corresponde investigar técnicamente quién creó la cuenta falsa, ni sentir que algo suyo fue vulnerado técnicamente cuando en realidad nadie accedió a ninguna cuenta ni sistema de ella.',
          'Qué podría salir mal: que la escuela trate esto como un problema técnico —cambiar contraseñas, revisar dispositivos— cuando el problema real es la suplantación de identidad y los datos que los estudiantes ya entregaron; o que nadie avise a esas familias qué información quedó expuesta. Lo que ajustaría para la próxima vez: que la escuela tenga un canal claro y conocido para verificar si una comunicación "oficial" es realmente oficial, antes de que cualquiera responda con datos personales.',
        ],
        nota: '*(Acá me pregunto: ¿qué otras comunicaciones "institucionales" reciben mis estudiantes que nunca verificamos si son reales?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué rol cumple la tecnología: objeto atacado, medio o facilitador, o escenario. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'El servidor donde una escuela guarda las calificaciones de todos los cursos queda inaccesible una mañana. Al revisarlo, encuentran que alguien explotó una falla conocida del sistema para entrar sin autorización y modificó notas de varios estudiantes antes de que lo detectaran.',
        analisis:
          '¿Qué rol cumple la tecnología acá? Objeto atacado. El sistema en sí mismo fue el blanco: alguien explotó una vulnerabilidad técnica para acceder sin autorización, sin necesidad de engañar a ninguna persona. Esta es exactamente la clase de conducta que depende sustancialmente de un sistema informático, y prevenir esto requiere capacidades técnicas —actualizaciones, control de accesos, revisión de vulnerabilidades—, no una conversación sobre confianza o buena fe.',
        nota: '*(Si elegiste "medio" o "escenario": acá no hubo ningún mensaje ni ninguna persona a la que convencer. El ataque fue directamente contra el sistema.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Un padre recibe un audio de WhatsApp con la voz de su hijo pidiéndole, con urgencia, que le transfiera dinero para "un problema en la facultad". La voz suena igual a la de su hijo. El padre transfiere el dinero antes de llamarlo para confirmar.',
        analisis:
          '¿Qué rol cumple la tecnología acá? Medio o facilitador. La aplicación de mensajería y la tecnología que permite imitar una voz no fueron el blanco del ataque: fueron el canal que se usó para generar la urgencia y la confianza necesarias para que el padre actuara sin verificar. No hubo ninguna intrusión técnica en ningún sistema del padre ni del hijo: lo que se explotó fue la confianza, con la tecnología como facilitador de ese engaño.',
        nota: '*(Si elegiste "objeto atacado": ningún sistema fue vulnerado técnicamente. Lo que falló fue no verificar antes de actuar, no una falla de seguridad informática.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un grupo de estudiantes crea, dentro de un videojuego online, un espacio donde organiza la venta de exámenes y trabajos prácticos de distintas materias a cambio de dinero del juego, que después cambian por dinero real fuera de la plataforma.',
        analisis:
          '¿Qué rol cumple la tecnología acá? Escenario. El videojuego no fue atacado ni fue el medio para engañar a alguien puntual: funcionó como el espacio donde una conducta —la venta de exámenes, que podría existir sin ninguna tecnología de por medio— encontró un lugar nuevo para organizarse y sostenerse en el tiempo. La tecnología no creó esta conducta: le dio un escenario con sus propias reglas (moneda del juego, anonimato relativo, un público cautivo) donde pudo crecer.',
        nota: '*(No hay una sola respuesta esperada en este caso: también podría leerse con un componente de "medio", porque el chat del juego se usa para coordinar las ventas. Lo que se evalúa es que puedas justificar por qué el escenario es el rasgo dominante, no que elijas la única opción correcta.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el caso de la cuenta falsa de Instagram que contactó a los estudiantes. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'A la docente la hackearon. Hay que pedirle a soporte técnico que revise la seguridad del sistema de la escuela y que la docente cambie todas sus contraseñas.',
      citaB:
        'Esto no tiene nada que ver con tecnología, es un problema de que los chicos confían en cualquiera. Hay que hablarles de confianza y sentido común, nada más.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** trata el caso como si dependiera sustancialmente de un sistema informático, cuando en realidad nadie accedió sin autorización a ninguna cuenta ni sistema de la docente. Buscar una falla técnica que revisar es buscar en el lugar equivocado: lo que falló fue que la plataforma no verifica identidad, y eso se reporta, no se "parchea" cambiando contraseñas que nunca estuvieron comprometidas.',
      errorB:
        '**Análisis B** va al extremo contrario y descarta por completo el papel de la tecnología. Es cierto que el núcleo del engaño es la confianza, pero la plataforma facilitó específicamente este tipo de suplantación —permitiendo crear una cuenta con fotos ajenas sin verificación— y eso también es parte de lo que hay que entender y, si corresponde, reportar.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no distinguieron qué rol cumplió la tecnología en este caso específico. Uno vio tecnología en todos lados y buscó una solución técnica a un problema de confianza; el otro no vio tecnología en ningún lado y perdió de vista que la plataforma también tiene parte de responsabilidad en cómo ocurrió el engaño.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'distinguir delito dependiente de sistemas vs. facilitado por tecnología',
        enunciado:
          'Alguien explota una falla técnica de un sistema de calificaciones para entrar sin autorización y modificar notas. ¿Cómo se clasifica esta conducta, según la distinción del capítulo?',
        opciones: [
          {
            id: 'a',
            texto:
              'Es una conducta que depende sustancialmente de un sistema informático, porque requirió explotar técnicamente una vulnerabilidad para acceder sin autorización.',
          },
          { id: 'b', texto: 'Es una conducta facilitada por tecnología, porque existía antes y la tecnología solo le dio una forma nueva.' },
          { id: 'c', texto: 'No es ninguna de las dos categorías, porque modificar notas no es un ciberdelito.' },
          { id: 'd', texto: 'Depende de si el sistema tenía antivirus instalado o no.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Esto no es algo que "ya existiera antes" y encontrara una nueva forma: requirió explotar específicamente una falla de un sistema informático. Por eso depende sustancialmente de la tecnología, no solo está facilitado por ella.',
          c: 'El capítulo no define qué es o no es delito en términos legales, pero sí es una de las categorías centrales que distingue: una intrusión técnica no autorizada es, precisamente, el tipo de conducta que depende de sistemas informáticos.',
          d: 'Tener o no antivirus es una medida de prevención, no el criterio que define la categoría. La distinción pasa por si la conducta depende sustancialmente del sistema o si la tecnología solo facilitó algo que ya podía pasar.',
        },
      },
      {
        objetivo: 'identificar si la tecnología funciona como objeto, medio, facilitador o escenario',
        enunciado:
          'Alguien le envía a una persona mayor un audio con una voz que suena como la de su nieto, pidiéndole dinero con urgencia. ¿Qué rol cumple la tecnología en esta situación?',
        opciones: [
          { id: 'a', texto: 'Objeto atacado: alguien vulneró técnicamente el teléfono de la persona mayor.' },
          {
            id: 'b',
            texto: 'Medio o facilitador: la tecnología permitió imitar una voz y generar la urgencia necesaria para que la persona actuara sin verificar.',
          },
          { id: 'c', texto: 'Escenario: se trata de una conducta que solo existe dentro de un entorno digital persistente.' },
          { id: 'd', texto: 'Ninguno: esto no tiene relación con tecnología, es pura manipulación emocional.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Ningún sistema ni dispositivo fue vulnerado técnicamente: nadie accedió sin autorización a nada. El problema no es una intrusión, es un engaño que se apoyó en la tecnología para sonar creíble.',
          c: 'Un escenario es un espacio donde una conducta se sostiene en el tiempo, no un canal puntual usado para un engaño. Acá la tecnología fue el canal, no el lugar donde algo se instaló.',
          d: 'La manipulación emocional es el corazón del engaño, pero la tecnología cumplió un rol concreto como facilitador: sin la posibilidad de imitar una voz y enviar un audio, este engaño en particular no sería posible de esta forma.',
        },
      },
      {
        objetivo: 'reconocer la dimensión de jurisdicción/evidencia digital sin perder de vista la prevención temprana',
        enunciado:
          'Una estafa digital involucra a una víctima en un país y a quien la ejecutó operando desde otro, usando una plataforma con sede en un tercer país. ¿Qué dice el capítulo sobre este tipo de situación?',
        opciones: [
          {
            id: 'a',
            texto:
              'Que al atravesar jurisdicciones y proveedores distintos, aumenta la importancia de la cooperación, la evidencia digital y las capacidades institucionales, pero sin que eso elimine el papel de familias, escuelas, bancos y plataformas en la prevención temprana.',
          },
          { id: 'b', texto: 'Que no hay nada que hacer hasta que las tres jurisdicciones se pongan de acuerdo.' },
          { id: 'c', texto: 'Que la prevención temprana deja de ser relevante una vez que el caso cruza fronteras.' },
          { id: 'd', texto: 'Que este tipo de casos son responsabilidad exclusiva de la plataforma donde ocurrieron.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no plantea la cooperación judicial como una condición previa para que algo se pueda prevenir: la prevención temprana funciona en paralelo, no después de resolver la cooperación institucional.',
          c: 'Es justamente lo contrario: el capítulo sostiene que familias, escuelas, bancos y plataformas siguen teniendo un papel en los momentos tempranos, sin importar cuántas jurisdicciones termine atravesando el caso.',
          d: 'El capítulo no asigna la responsabilidad a un solo actor: habla de cooperación entre instituciones y de un rol distribuido entre varios actores, incluida la prevención temprana que no depende solo de la plataforma.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura',
        enunciado:
          'Frente a una situación digital que parece un hecho delictivo, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
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
          { id: 'd', texto: 'Quién es responsable → qué sanción corresponde → qué evidencia hay.' },
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
          'Trata cualquier hecho con tecnología de por medio como si dependiera de una falla técnica, o lo reduce por completo a un problema de confianza sin ver el rol de la tecnología.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que algo no está bien en la situación, pero no distingue con precisión qué rol cumplió la tecnología ni qué condiciones la hicieron posible.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue si la tecnología funcionó como objeto, medio, facilitador o escenario, identifica qué dimensión humana o institucional está comprometida y propone un cambio proporcionado.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo un caso exige cooperación institucional o evidencia digital por atravesar jurisdicciones, sin perder de vista el rol de la prevención temprana desde la familia, la escuela o la plataforma.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la diferencia entre lo que depende de un sistema informático y lo que la tecnología solo facilita, los cuatro roles que puede cumplir —objeto, medio, facilitador o escenario— y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es cómo mirás los hechos digitales raros que te llegan a vos, a tu escuela o a tu entorno antes de nombrarlos.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde algo digital haya salido mal, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —y qué rol cumplió ahí la tecnología— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la docente que entregó su contraseña pensando que respondía a un pedido legítimo de la escuela. Releé tu respuesta original. Con lo que viste en esta temática, ¿dirías que eso fue una intrusión técnica o una estafa basada en confianza? ¿Qué harías distinto la próxima vez que algo así te llegue a vos? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien la diferencia entre que te hackeen un sistema y que te engañen para que vos mismo entregues tus datos?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Ciberdelitos y Delitos Facilitados por Tecnología, en una tarjeta',
      parrafos: [
        'Ciberdelito reúne fenómenos heterogéneos: algunas conductas dependen sustancialmente de sistemas informáticos, y otras ya existían antes y solo encuentran, mediante tecnología, nuevas formas de ejecución.',
        '**Los cuatro roles de la tecnología:** objeto atacado, medio, facilitador o escenario. Esta distinción ayuda a diseñar la estrategia correcta y preserva precisión jurídica.',
        '**Jurisdicción y prevención temprana:** las trayectorias digitales pueden atravesar jurisdicciones y proveedores, lo que exige cooperación y evidencia digital — pero eso no elimina el papel de familias, escuelas, bancos y plataformas en los momentos tempranos.',
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
    referenciasLista: ['UNICEF', 'UNODC', 'Europol', 'INTERPOL'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Ciberdelitos y delitos facilitados por tecnología no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[CIBERDELITOS_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
