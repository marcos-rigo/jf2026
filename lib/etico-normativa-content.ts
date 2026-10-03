// Contenido de /tematicas/etico-normativa-y-derechos. Mismo patrón que lib/salud-bienestar-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/etico-normativa/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// Dimensión 6 (Capítulo 20 del manual).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/etico-normativa/ficha-aula';

export const ETICO_NORMATIVA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'criterios-de-legitimidad', number: '05', label: 'Criterios de legitimidad', shortLabel: 'Criterios' },
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
  criteriosDeLegitimidad: {
    titulo: string;
    recordar: { subtitulo: string; intro: string; sistemas: string[]; criteriosIntro: string; criterios: string[] };
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
    preguntasIntro: string;
    preguntas: string[];
    cierrePreguntas: string;
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
    titulo: 'Dimensión Ético-Normativa y Derechos',
    subtitulo: 'De lo posible a lo legítimo',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que algo sea técnicamente posible no lo vuelve legítimo: que una aplicación te deje copiar, registrar, modificar o automatizar algo no responde la pregunta de si corresponde hacerlo.',
      'Distinguir cuatro sistemas de normas que suelen mezclarse: los valores y la ética, las reglas sociales, las reglas de una plataforma y las normas jurídicas.',
      'Usar criterios para decidir qué hacer: los derechos en juego, el consentimiento, la responsabilidad, la proporcionalidad y la justicia.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar si algo que la tecnología permite hacer es legítimo, distinguiendo entre valores, reglas sociales, reglas de una plataforma y normas jurídicas, y decidir cómo actuar.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión ético-normativa y derechos, distinguiendo la ética, la regla social, la regla de plataforma y la norma jurídica como sistemas diferentes.',
      'Identificar, en una situación concreta, qué sistema de normas está en juego y quién estableció la regla, con qué autoridad y qué derecho protege.',
      'Aplicar los criterios de legitimidad (derechos, consentimiento, responsabilidad, proporcionalidad y justicia) para evaluar si una acción que una herramienta permite es legítima.',
      'Decidir cuándo un problema dejó de ser meramente técnico o interpersonal y requiere una lectura de derechos o una intervención institucional.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Alcanza con que se pueda para que esté bien, y quién decide eso?',
    parrafos: [
      'Es domingo a la tarde y tenés treinta pruebas para corregir. Descubrís que una herramienta de inteligencia artificial puede leerlas, marcar los errores y sugerirte una nota en segundos. Para usarla, subís las pruebas tal como están, con el nombre y el apellido de cada estudiante. La herramienta te lo permite sin ninguna advertencia, te ahorra varias horas y nadie te dijo nunca que no se hiciera. Terminás temprano, y por primera vez en semanas te queda tiempo para descansar.',
      'Nada de esto fue una decisión pensada. Fue algo que la tecnología habilitó antes de que nadie se preguntara si correspondía. Cada vez que una herramienta nueva nos deja hacer algo que antes no podíamos, la capacidad técnica llega primero, y el acuerdo sobre si es legítimo llega después, cuando llega. Esta temática trabaja justamente esa distancia entre lo posible y lo legítimo.',
    ],
    problema:
      'Pensá en ese domingo, o en uno parecido. ¿Qué te hace sentir que estaba bien, o que no? Si una familia se enterara de que el nombre de su hijo o hija pasó por esa herramienta, ¿qué esperaría de vos? Y si esa decisión no era solo tuya, ¿quién debería haber participado: la escuela, las familias, la empresa que hizo la herramienta, la ley?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Las tecnologías nos dan posibilidades antes de que exista algún acuerdo sobre si es legítimo usarlas. Esa es la idea de partida: la capacidad técnica llega primero y el consenso llega después, cuando llega. Poder copiar, registrar, modificar o automatizar algo no responde por sí mismo si corresponde hacerlo. Una interfaz puede permitir acciones que una comunidad no debería aceptar.',
      'Para orientarnos en esa distancia, el primer paso es recordar que los derechos digitales no son una categoría nueva ni independiente. Son los mismos derechos humanos —la privacidad, la expresión, la educación, la igualdad, la participación, el acceso a la información— ejercidos en el territorio híbrido donde hoy vivimos. La tecnología no los inventa, pero sí cambia las condiciones en las que se ejercen y en las que se vulneran.',
      'El segundo paso es poder distinguir cuatro sistemas de normas que suelen mezclarse. Los **valores y la ética** son lo que consideramos justo, bueno o correcto. Las **reglas sociales** son lo que una comunidad espera de sus integrantes, muchas veces por costumbre. Las **reglas de una plataforma** son las que fija una empresa en sus términos y condiciones. Y las **normas jurídicas** son las que establece el Estado, con autoridad para exigirlas. Son sistemas diferentes: una conducta puede ser éticamente cuestionable sin ser un delito, puede infringir las reglas de una plataforma sin ser ilícita, o puede estar socialmente normalizada y aun así afectar derechos de otras personas.',
      'Esto no exige convertir a nadie en especialista en derecho. Lo que hace falta son categorías para reconocer cuándo un problema dejó de ser meramente técnico o interpersonal y pide una lectura de derechos, de obligaciones o una intervención institucional. Y una pregunta que sirve para empezar: quién estableció esa regla, con qué autoridad y qué derecho protege.',
      'Pensá en algo que hiciste con tecnología simplemente porque la herramienta lo permitía. ¿Qué te decía que estaba bien: tus valores, lo que hacen todos, lo que indica la aplicación o lo que dice la ley? ¿Coincidían?',
    ],
    fichaAula1: {
      titulo: 'Lo correcto también importa en línea: valores y normas en la vida digital',
      objetivo:
        'Reflexionar sobre los valores y principios éticos que deben guiar nuestras acciones en entornos digitales, reconociendo la necesidad de normas que promuevan justicia, respeto, libertad y responsabilidad en la convivencia digital.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La dimensión **axiológica** refiere al estudio de los **valores**: lo que consideramos justo, bueno, deseable o correcto en la vida. En el entorno digital, al igual que en el mundo físico, nuestras decisiones están guiadas (o deberían estarlo) por **principios éticos y normas que orienten nuestra conducta**.',
        },
        { tipo: 'parrafo', texto: 'Esta dimensión plantea preguntas clave:' },
        {
          tipo: 'lista',
          items: [
            '¿Qué valores deben guiar nuestro uso de la tecnología?',
            '¿Está bien hacer algo solo porque la app lo permite?',
            '¿Hay cosas legales que, sin embargo, no son éticas?',
            '¿Qué responsabilidad tenemos frente al daño digital que podemos causar o permitir?',
          ],
        },
        { tipo: 'parrafo', texto: 'Algunos **valores fundamentales** en ciudadanía digital son:' },
        {
          tipo: 'lista',
          items: [
            '**Respeto a la dignidad humana**',
            '**Justicia y equidad**',
            '**Libertad de expresión con responsabilidad**',
            '**Solidaridad y bien común**',
            '**Veracidad y honestidad**',
          ],
        },
        { tipo: 'parrafo', texto: 'Y algunas **normas éticas clave**:' },
        {
          tipo: 'lista',
          items: [
            'No difundir ni consumir contenido que humille o degrade.',
            'No invisibilizar o excluir a personas por su origen, género o identidad.',
            'No aceptar pasivamente la violencia digital.',
            'Actuar con conciencia de las consecuencias de nuestros actos digitales.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La **ética digital** nos interpela a pensar no solo en lo que está permitido, sino en lo que es correcto. Y construir ciudadanía digital es también **proyectar una vida en comunidad basada en el respeto, la empatía y la justicia social**.',
        },
      ],
      preguntaDetonadora:
        '*¿Está bien hacer "lo que todos hacen" si sabés que puede dañar? ¿Quién define lo que está bien o mal en internet?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Está bien o está mal?" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Presentá una serie de situaciones ambiguas o grises:' },
            {
              tipo: 'lista',
              items: [
                'Compartir un meme sobre una persona sin su consentimiento.',
                'Reenviar una cadena con información no verificada.',
                'Hacer una captura de pantalla de un chat privado.',
                'Usar inteligencia artificial para modificar una imagen de alguien.',
              ],
            },
            { tipo: 'parrafo', texto: 'En grupos, responden:' },
            {
              tipo: 'lista',
              items: ['¿Está bien, mal o depende?', '¿Qué valores están en juego?', '¿Cómo actuarían ellos/as?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mi código ético digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, los estudiantes elaboran un **código de ética digital juvenil** para su curso o comunidad educativa. Debe incluir:',
                '5 valores centrales que los representen.',
                '5 principios o normas de convivencia digital.',
                '3 compromisos personales y colectivos.',
                'Un lema o declaración inspiradora.',
                'El formato puede ser digital (afiche, reel, podcast) o físico (póster, mural, cartel).',
                'Se presenta públicamente y se reflexiona:',
                '¿Qué los motivó a elegir esos valores?',
                '¿Qué cuesta más poner en práctica?',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Lo que hacés en la red habla de quién sos. Elegí actuar con valores, incluso cuando nadie te esté mirando."*',
      glosario: ['Ética digital', 'Valores', 'Normas de convivencia', 'Responsabilidad moral', 'Justicia digital'],
      referencias: [
        'Declaración de Derechos Humanos en el Ciberespacio – 2022',
        'UNESCO – Ética de la inteligencia artificial y ciudadanía digital',
        'Guía "Valores en la era digital" – INADI',
        'Video: "¿Qué harías si nadie pudiera verte en internet?" – Canal Encuentro',
        'Plataforma Chicos.net – Módulo de ética y valores digitales',
      ],
    },
    fichaAula2: {
      titulo: 'Tus derechos no se desconectan: ciudadanía y derechos en la era digital',
      objetivo:
        'Reconocer que los derechos humanos también se aplican en los entornos digitales, e identificar formas de ejercerlos, defenderlos y promoverlos en la vida cotidiana conectada.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La Declaración Universal de los Derechos Humanos establece principios fundamentales como la libertad, la igualdad, la privacidad, la educación y la participación. En el mundo digital, estos derechos no desaparecen: **se transforman, se amplían y también se vulneran**.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Hoy hablamos de **derechos digitales** para referirnos a las garantías que las personas tienen al interactuar en internet. Algunos ejemplos:',
        },
        {
          tipo: 'lista',
          items: [
            '**Derecho a la privacidad y protección de datos personales.**',
            '**Derecho a la libertad de expresión y acceso a la información.**',
            '**Derecho a la identidad digital.**',
            '**Derecho a la seguridad y al uso ético de las tecnologías.**',
            '**Derecho a no ser discriminado, acosado ni violentado online.**',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Conocer estos derechos es el primer paso para defenderlos. Pero también es clave **ejercerlos con responsabilidad**, entendiendo que mis derechos terminan donde empiezan los de los demás.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La ciudadanía digital democrática se sostiene con ciudadanos que **reclaman sus derechos, respetan los ajenos y construyen entornos más justos también en lo digital**.',
        },
      ],
      preguntaDetonadora:
        '*¿Cuáles de tus derechos se activan cada vez que te conectás a internet? ¿Y quién los protege?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi derecho en línea" (10-15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Cada estudiante elige un derecho humano (libertad, identidad, educación, privacidad, etc.) y responde:',
            },
            {
              tipo: 'lista',
              items: [
                '¿Cómo se aplica ese derecho en internet?',
                '¿Alguna vez lo sentí vulnerado o fortalecido?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Se comparten en ronda o en un mural colectivo de "Derechos digitales".',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Cartas abiertas por nuestros derechos digitales" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen uno de los siguientes derechos digitales:',
                'Privacidad',
                'Identidad digital',
                'Expresión',
                'Seguridad',
                'No discriminación',
                'Redactan una **carta abierta** dirigida a una autoridad escolar, comunitaria o gubernamental, donde:',
                'Explican qué significa ese derecho',
                'Narran una situación real o hipotética donde se ve vulnerado',
                'Proponen una acción concreta para protegerlo',
                'Leen sus cartas frente al grupo o las comparten en un espacio común (murales, blogs, redes escolares).',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Nuestros derechos no se apagan cuando se prende la pantalla. También son digitales, también son humanos."*',
      glosario: [
        'Derechos digitales',
        'Privacidad',
        'Identidad digital',
        'Libertad de expresión',
        'Acceso a la información',
      ],
      referencias: [
        'Declaración de Derechos Humanos en el Ciberespacio – Internet Society',
        'Guía "Derechos Digitales y Juventudes" – Chicos.net',
        'Video educativo: "¿Qué son los derechos digitales?" – YouTube Educativo',
        'Plataforma: adolescenciasdigitales.org',
      ],
    },
  },
  criteriosDeLegitimidad: {
    titulo: 'Criterios de legitimidad',
    recordar: {
      subtitulo: 'Recordar',
      intro:
        'Hay cuatro sistemas de normas que conviene tener claros, porque en la práctica se mezclan todo el tiempo:',
      sistemas: [
        '**Valores y ética:** lo que consideramos justo, bueno o correcto. La pregunta es qué deberíamos hacer.',
        '**Reglas sociales:** lo que una comunidad espera de sus integrantes, muchas veces por costumbre. La pregunta es qué se espera de nosotros.',
        '**Reglas de una plataforma:** las que fija una empresa en sus términos y condiciones. La pregunta es qué permite o prohíbe esa herramienta.',
        '**Normas jurídicas:** las que establece el Estado, con autoridad para exigirlas. La pregunta es qué establece la ley.',
      ],
      criteriosIntro: 'Para evaluar si algo es legítimo hay cinco criterios que sirven como lenguaje común:',
      criterios: [
        '**Derechos:** qué derechos de qué personas están en juego, como la privacidad, la expresión, la igualdad, la educación o la participación.',
        '**Consentimiento:** si las personas afectadas supieron lo que pasaba, lo entendieron y lo aceptaron libremente.',
        '**Responsabilidad:** quién responde por lo que ocurre: quien lo hace, quien lo permite y quien lo diseñó.',
        '**Proporcionalidad:** si lo que se hace es adecuado para el fin que persigue, o si había una forma menos invasiva de lograrlo.',
        '**Justicia:** si el resultado trata de manera equitativa a las personas, o reparte los costos y los beneficios de forma desigual.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué lo posible no es legítimo: una herramienta suele habilitar acciones antes de que exista un acuerdo sobre si corresponden. Que nada te frene no es lo mismo que tener permiso. La aplicación que recibió las pruebas de tus estudiantes no te advirtió nada, y eso no dice absolutamente nada sobre si correspondía hacerlo: solo dice que el sistema no estaba diseñado para preguntártelo.',
        'Por qué los sistemas no coinciden: una conducta puede ser éticamente cuestionable sin ser un delito, como reenviar algo que alguien te contó en confianza. Puede infringir las reglas de una plataforma sin ser ilícita, porque una empresa puede prohibir o eliminar cosas que ninguna ley prohíbe. Y puede estar socialmente normalizada y afectar derechos de otras personas, como cuando se publican fotos de chicos "porque todos lo hacen". Por eso no alcanza con preguntar solo si algo es legal, o solo si está permitido por la aplicación.',
        'Por qué importa quién puso la regla y si se puede revisar: no todas las reglas tienen el mismo origen ni la misma autoridad. Una regla de plataforma la fijó una empresa con intereses propios. Una ley pasó por procesos públicos. Una costumbre, a veces, nadie la decidió. Y una regla que no se puede revisar, porque no hay a quién reclamarle ni nadie que la explique, es una señal de alerta: sin posibilidad de revisión, la regla deja de ser una norma y pasa a ser una imposición.',
        'Por qué no hace falta ser abogado: la educación jurídica no pretende convertir a todas las personas en especialistas. Lo que aporta son categorías para reconocer cuándo un problema dejó de ser meramente técnico o interpersonal y requiere una lectura de derechos, de obligaciones o una intervención institucional. Algunas señales: están en juego derechos de terceros, sobre todo de menores; hay datos personales de por medio; el daño se sostiene en el tiempo; o hay una desigualdad de poder que las partes no pueden resolver entre sí.',
      ],
      recuadro: {
        titulo: 'Lo que la dimensión ético-normativa NO es',
        parrafos: [
          'No es lo mismo ser legal que ser ético: algo puede cumplir la ley o los términos de una plataforma y aun así dañar a alguien.',
          'No es obedecer lo que dice la aplicación ni lo que hace todo el mundo: que algo esté permitido o normalizado no responde si es legítimo.',
          'No es convertir cada conflicto en un tema legal: la mayoría se resuelve con escucha, acuerdos y criterio, y lo jurídico entra cuando hay derechos afectados que las partes no pueden resolver solas.',
          'No es memorizar leyes: es saber hacerse las preguntas y reconocer cuándo pedir ayuda a quien sí conoce la norma.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a cualquier regla —de una aplicación, de tu escuela, de un grupo— cuatro preguntas:',
      preguntas: [
        '**¿Quién la estableció?** Una empresa, el Estado, la escuela, un grupo o nadie en particular.',
        '**¿Con qué autoridad?** Por qué esa persona o institución puede fijar la regla y exigir que se cumpla.',
        '**¿Qué derecho protege?** O qué derecho podría estar afectando.',
        '**¿Cómo se revisa?** Si hay a quién reclamar, si existe una explicación y si la regla puede cambiar.',
      ],
      parrafoMovimientos: 'Y tres movimientos, según lo que aparezca:',
      movimientos: [
        '**Distinguir el sistema:** si el problema es de valores, de reglas sociales, de una plataforma o jurídico. Muchas veces son varios a la vez.',
        '**Evaluar con los criterios:** derechos, consentimiento, responsabilidad, proporcionalidad y justicia.',
        '**Derivar cuando corresponde:** cuando están en juego derechos de terceros, datos personales, un daño sostenido o una desigualdad de poder que no se resuelve entre las partes, el paso siguiente es la dirección, el equipo de orientación o la instancia que corresponda, y no resolverlo solo.',
      ],
    },
    fichaAula3: {
      titulo: 'Tus derechos también son digitales: libertad, igualdad y dignidad en la era conectada',
      objetivo:
        'Reconocer que los derechos humanos deben ser garantizados también en los entornos digitales, analizando riesgos, desafíos y oportunidades para ejercerlos plenamente en internet y en el uso de tecnologías.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Los **derechos humanos** —libertad de expresión, privacidad, igualdad, no discriminación, participación, acceso a la información, entre otros— no desaparecen cuando nos conectamos: **se transforman y adquieren nuevas formas** en la vida digital.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La ciudadanía digital exige que esos derechos se reconozcan, respeten y promuevan en todas las plataformas, algoritmos, dispositivos y espacios virtuales. Pero, ¿qué pasa hoy?',
        },
        { tipo: 'parrafo', texto: '**Ejemplos de vulneraciones:**' },
        {
          tipo: 'lista',
          items: [
            'La **privacidad** se ve afectada por el uso de datos personales sin consentimiento.',
            'La **libertad de expresión** puede ser limitada por censura o algoritmos.',
            'La **igualdad** no se cumple cuando la brecha digital deja afuera a comunidades enteras.',
            'La **dignidad** es vulnerada con violencia digital, discursos de odio o humillaciones públicas.',
            'El **derecho a la educación** se ve afectado cuando no hay conectividad o recursos digitales accesibles.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Por eso, desde la **Declaración de Derechos Humanos en el Ciberespacio** hasta los marcos normativos nacionales, se impulsa una **ciudadanía digital basada en derechos**.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Ejercer estos derechos también implica **responsabilidades**: respetar a los demás, proteger la información, no ser cómplices de violencia y promover espacios seguros e inclusivos.',
        },
      ],
      preguntaDetonadora:
        '*¿Creés que internet es un espacio donde se respetan los derechos de todas las personas? ¿Qué derechos están en juego cuando usás tecnología?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Derechos en juego" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Mostrá imágenes o frases provocadoras (ej: "te etiquetaron sin permiso", "tu cuenta fue bloqueada sin explicación", "un algoritmo decide qué ves").',
            },
            { tipo: 'parrafo', texto: 'En grupos, los estudiantes responden:' },
            { tipo: 'lista', items: ['¿Qué derecho se está vulnerando?', '¿Quién es responsable?'] },
            { tipo: 'parrafo', texto: '→ Se arma un mapa de derechos digitales emergentes.' },
          ],
        },
        {
          titulo: 'Actividad principal — "Defensores/as digitales de derechos" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, los estudiantes eligen un derecho humano digital para defender (ej: privacidad, no discriminación, expresión, acceso a la cultura).',
                'Diseñan una **campaña de sensibilización** con:',
                'Nombre de la campaña',
                'Slogan o frase viral',
                'Formato creativo (video, post, reel, mural, historieta, etc.)',
                'Público al que apunta',
                'Acción concreta que promueve',
                'Presentan sus campañas como una "Feria de Derechos Digitales" en clase o comunidad.',
              ],
            },
          ],
        },
      ],
      frase: '*"Tus derechos no se apagan cuando encendés la pantalla. Defendelos, ejercelos, compartilos."*',
      glosario: [
        'Derechos digitales',
        'Privacidad en línea',
        'Libertad de expresión digital',
        'No discriminación en redes',
        'Acceso universal',
      ],
      referencias: [
        'Declaración de Derechos Humanos en el Ciberespacio – 2022',
        'ONU – Principios rectores sobre empresas y derechos humanos en la era digital',
        'Guía "Tus derechos digitales" – Chicos.net / INADI',
        'Plataforma: derechosdigitales.org',
        'Video: "¿Qué son los derechos humanos digitales?" – Canal Encuentro',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Es domingo a la tarde y una docente de secundaria tiene treinta pruebas para corregir. Una colega le recomendó una herramienta de inteligencia artificial que lee las respuestas, marca los errores y sugiere una nota en pocos segundos. Para usarla, la docente sube las pruebas escaneadas tal como están, con el nombre y el apellido de cada estudiante. La herramienta se lo permite sin ninguna advertencia, y le ahorra varias horas. Cuando ya subió la mitad, se detiene con una duda: nadie le dijo que no se pudiera, pero tampoco nadie le dijo que sí.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: una docente usó una herramienta que la tecnología habilitó antes de que la escuela hubiera decidido nada sobre ella. Participan la docente, los estudiantes cuyas pruebas ya subió, sus familias, la dirección de la escuela y la empresa que ofrece la herramienta. Lo que está en juego no es solo corregir más rápido: es que información sobre estudiantes menores de edad, con nombre y apellido, pasó a un sistema que ni ella ni la escuela conocen del todo.',
        ],
        nota: '(Acá me pregunto: ¿hice esto porque lo pensé, o porque la herramienta me lo permitió y no tuve que decidir nada?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está en juego, sistema por sistema. En lo ético: la confianza que los estudiantes y sus familias depositan en la escuela, y la pregunta de si ellos esperarían que su nombre y sus respuestas pasaran por un tercero. En lo que permite la plataforma: la herramienta no puso ningún obstáculo, pero que sus términos lo habiliten no dice si corresponde, y esos términos los escribió una empresa con sus propios intereses, que la docente probablemente no leyó.',
          'En lo que se hace por costumbre: una colega la usa y le funciona, y eso hace que parezca algo normal. Y en lo que requiere una mirada institucional: se trata de datos personales de menores. Decidir cómo se tratan esos datos, qué herramientas están autorizadas y qué información puede compartirse con terceros excede lo que puede resolver una docente sola, y requiere una lectura de derechos y de obligaciones de la escuela.',
        ],
        nota: '(Acá me pregunto: de todo lo que me hace sentir que estaba bien, ¿qué es una razón y qué es solo que nadie me frenó?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no hace falta abandonar la tecnología ni sentirse culpable. Lo primero es dejar de subir pruebas con nombres y, mientras tanto, seguir solo con las que se puedan anonimizar, quitando el nombre o tapándolo antes de escanear. Lo segundo es consultar a la dirección qué herramientas están autorizadas en la escuela y bajo qué condiciones, en lugar de dar por sentado que todo lo que funciona está permitido.',
          'Lo tercero es informar a las familias de los estudiantes cuyas pruebas ya pasaron por la herramienta, con claridad y sin dramatizar: qué se subió, para qué y qué se va a hacer a partir de ahora. Informar no es confesar una falta: es respetar el derecho de esas familias a saber qué pasó con la información de sus hijos e hijas.',
        ],
        nota: '(Acá me pregunto: si fuera mi hijo o hija el que figura en esa prueba, ¿qué querría que hubiera hecho la docente en este momento?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me toca a mí decidir sola cómo se tratan los datos de los menores ni evaluar si esa herramienta cumple lo que establecen las normas. Eso le corresponde a la escuela, con quien tenga la responsabilidad de esas decisiones. Mi parte es detenerme, anonimizar, avisar y consultar.',
          'Qué podría salir mal: que, por vergüenza, no avise a nadie y la situación quede sin decirse; que la consulta se plantee como una confesión y no como una pregunta de cuidado; o que la escuela no tenga todavía una respuesta y yo termine decidiendo sola por inercia. Lo que ajustaría para la próxima vez: antes de usar una herramienta nueva con información de estudiantes, preguntar si está autorizada, y proponer que la escuela tenga una lista clara de qué se puede usar y cómo.',
        ],
        nota: '(Acá me pregunto: ¿mi escuela tiene hoy una respuesta para esto? Si no la tiene, ¿quién debería empezar a construirla?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué pesa más: los valores, las reglas o los derechos. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un estudiante de cuarto año entrega un trabajo práctico de historia escrito casi por completo por una inteligencia artificial. Lo presenta como propio, sin decir nada. Al conversar con él, reconoce que usó la herramienta y dice que "todos lo hacen". La escuela todavía no definió ninguna regla sobre el uso de la IA en las tareas.',
        analisis:
          '**¿Qué pesa más?** Los valores. Lo central es la honestidad: presentó como propio un trabajo que no lo era. Eso es cuestionable éticamente aunque nadie haya prohibido usar la herramienta, y aunque sea una práctica muy extendida: que algo esté normalizado no responde si corresponde hacerlo. Pero hay un segundo dato que no hay que dejar pasar: la escuela no fijó una regla. Antes de pensar en una sanción, conviene preguntarse si el problema es solo del estudiante o también de una regla que falta. Lo proporcionado es conversar con él sobre qué aprendió y qué no, pedirle que rehaga el trabajo con un uso declarado de la herramienta, y llevar el tema a la escuela para acordar cuándo y cómo se puede usar la IA.',
        nota: '(Si elegiste "Reglas": también está en juego, y si la escuela ya tuviera una regla convendría recordarla. Pero el eje es que se presentó como propio algo que no lo era, y eso sigue siendo cuestionable aunque no exista una regla escrita.)',
      },
      {
        clave: 's2',
        enunciado:
          'En el grupo de WhatsApp de las familias de un curso, la mayoría propone subir a una red social abierta las fotos de la fiesta de fin de año, donde se ve a todos los chicos. Una de las familias avisa que no quiere que aparezca su hijo. Otras responden que "somos mayoría", que "es solo una foto" y que "ya lo decidimos". La docente, que integra el grupo, tiene que opinar.',
        analisis:
          '**¿Qué pesa más?** Los derechos. La imagen de un niño o de una niña y su privacidad no se someten a una votación: que la mayoría esté de acuerdo no reemplaza el consentimiento de quien se ve afectado. Acá se mezclan dos sistemas que conviene separar. La mayoría es una regla social del grupo, que sirve para decidir muchas cosas, pero no para decidir sobre los derechos de otra persona. Los criterios que más pesan son el consentimiento y la proporcionalidad: había formas menos invasivas de compartir el recuerdo, como un álbum con acceso restringido, fotos donde no se vea a quienes no aceptaron, o publicar solo a los chicos cuyas familias dieron su consentimiento. Y como se trata de imágenes de menores, vale la pena consultar a la escuela qué criterio tiene para estos casos, en lugar de resolverlo solo dentro del grupo.',
        nota: '(Si elegiste "Valores" o "Reglas": las dos están presentes, porque hay una discusión sobre respeto y sobre cómo decide el grupo. Pero lo que ninguna mayoría puede resolver es el derecho de una familia a decidir sobre la imagen de su hijo.)',
      },
      {
        clave: 's3',
        enunciado:
          'Un docente tiene un conflicto serio y repetido con un estudiante que lo insulta y lo desafía en clase. Para tener evidencia por si la situación escala, empieza a grabar con el celular lo que ocurre en el aula, sin avisar a nadie. En el aula hay otros estudiantes, también menores de edad. Todavía no se lo contó a la dirección.',
        analisis:
          '**¿Qué pesa más?** No hay una única respuesta correcta en este caso, y es a propósito: los tres sistemas están en juego y tiran en sentidos distintos. Los valores empujan a proteger al docente y también a cuidar a los demás estudiantes, que no sabían que los grababan. Las reglas importan, porque la escuela puede tener un protocolo o una prohibición sobre grabar en el aula, y si no lo tiene, esa es una ausencia que conviene señalar. Los derechos también pesan: la imagen y la privacidad de menores, y al mismo tiempo el derecho del docente a una situación laboral sin hostigamiento. Una lectura puede apoyarse en la proporcionalidad: había alternativas menos invasivas, como dejar un registro escrito de cada episodio, pedir que otro adulto esté presente o informar a la dirección desde el inicio. Otra puede poner el peso en la responsabilidad institucional: si la escuela no ofrece un camino para estos casos, empuja al docente a defenderse solo. Lo que se evalúa es que puedas justificar tu lectura con los criterios, y que no resuelvas el caso ni diciendo "es evidencia, vale todo" ni "esto es ilegal, hay que denunciarlo".',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: un docente que usa una aplicación que graba y transcribe automáticamente sus reuniones con las familias, sin avisarles. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'La aplicación lo permite, es gratuita y mucha gente la usa. Si hubiera algún problema, la propia plataforma no dejaría hacerlo. No hay nada que discutir.',
      citaB: 'Eso es una violación de la ley. Hay que denunciar al docente de inmediato y que lo decida la justicia.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** confunde lo que permite una herramienta con lo que es legítimo. Que la aplicación no ponga límites solo dice cómo la diseñó una empresa, con sus propios intereses, y no responde si las familias supieron, entendieron y aceptaron que se las grabara. Faltan el consentimiento y los derechos de las personas grabadas, y la regla que invoca no es una autoridad que decida por ellas.',
      errorB:
        '**Análisis B:** convierte todo en un tema legal y salta de golpe a la denuncia. Afirma que hay una violación de la ley sin analizarlo y sin consultar a quien conoce la norma, y se saltea todo lo que hay entre el problema y una denuncia: hablar con el docente, plantearlo a la dirección y buscar una solución proporcionada. La lectura jurídica entra cuando hay derechos afectados que no se pueden resolver por esas vías, y no antes de intentarlas.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no se hicieron las preguntas en el orden en que corresponde. Uno dejó de preguntarse si corresponde, porque la herramienta lo permitía; el otro se saltó todo lo que hay entre el problema y la denuncia.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y distinguir los cuatro sistemas de normas',
        enunciado:
          '¿Cuál de estas afirmaciones describe mejor la relación entre la ética, las reglas sociales, las reglas de una plataforma y las normas jurídicas?',
        opciones: [
          { id: 'a', texto: 'Son lo mismo: si una plataforma permite algo, también es ético y legal.' },
          {
            id: 'b',
            texto:
              'Son sistemas diferentes que pueden no coincidir: algo puede ser éticamente cuestionable sin ser delito, o infringir una regla de plataforma sin ser ilícito.',
          },
          { id: 'c', texto: 'Solo importan las normas jurídicas: lo demás es opinión personal.' },
          {
            id: 'd',
            texto:
              'Las reglas de una plataforma tienen más autoridad que la ley, porque son las que rigen el uso de todos los días.',
          },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Confundir los sistemas es justamente el error que esta temática busca evitar. Que una plataforma permita algo solo dice cómo la diseñó una empresa; no responde si es ético ni si es legal.',
          c: 'Las normas jurídicas son importantes, pero no son el único sistema. Algo puede ser legal y aun así dañar a alguien, y los valores y las reglas sociales también orientan lo que corresponde hacer.',
          d: 'Una regla de plataforma la fija una empresa con sus propios intereses. No tiene más autoridad que la ley ni la reemplaza: ocupa un lugar distinto y puede ser revisada.',
        },
      },
      {
        objetivo: 'identificar en una situación qué sistema está en juego y quién estableció la regla',
        enunciado:
          'Una aplicación de mensajería elimina la cuenta de una docente "por infringir sus normas comunitarias", sin decirle cuál de ellas infringió y sin ofrecerle ninguna forma de reclamar. ¿Qué es lo más preocupante, desde esta dimensión?',
        opciones: [
          { id: 'a', texto: 'Que la regla sea de una empresa y no de una ley: las empresas no pueden fijar reglas.' },
          { id: 'b', texto: 'Que la docente seguramente infringió la norma y está evitando reconocerlo.' },
          { id: 'c', texto: 'Que las reglas de una plataforma no tienen ningún valor.' },
          {
            id: 'd',
            texto:
              'Que la regla la fijó una empresa y no existe un mecanismo visible para conocerla ni para revisarla.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Las empresas sí pueden establecer reglas para sus servicios. Lo preocupante no es quién la puso, sino que no se pueda conocer cuál es ni revisar cómo se aplicó.',
          b: 'No hay forma de saber si infringió algo, justamente porque nadie se lo explicó. Presumir culpa sin explicación es lo contrario de una regla legítima.',
          c: 'Las reglas de una plataforma cuentan, pero para ser legítimas tienen que poder explicarse y revisarse. Sin eso, dejan de ser una norma y pasan a ser una imposición.',
        },
      },
      {
        objetivo: 'aplicar los criterios de legitimidad',
        enunciado:
          'Una escuela instala cámaras con micrófono dentro de las aulas "por seguridad", sin consultar a docentes ni a familias y sin explicar qué se hará con las grabaciones. ¿Qué criterios de legitimidad están más comprometidos?',
        opciones: [
          { id: 'a', texto: 'Solo la responsabilidad: alcanza con que alguien se haga cargo de las grabaciones.' },
          { id: 'b', texto: 'Ninguno: la escuela es una institución y puede instalar lo que decida.' },
          {
            id: 'c',
            texto:
              'El consentimiento y la proporcionalidad: nadie fue informado ni consultado, y no se justificó por qué hacía falta una medida tan invasiva.',
          },
          { id: 'd', texto: 'Solo la justicia, porque todas las aulas son grabadas por igual.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'La responsabilidad importa, pero no es el único criterio ni el más comprometido acá. Lo que falta es que las personas afectadas hayan sido informadas y que se justifique la medida.',
          b: 'Que una institución tenga autoridad para decidir no la exime de los criterios de legitimidad. Las instituciones también deben respetar derechos, consentimiento y proporcionalidad.',
          d: 'La justicia no se reduce a tratar a todos igual. Importa también si la medida es adecuada y si las personas afectadas pudieron opinar sobre ella.',
        },
      },
      {
        objetivo: 'decidir cuándo un problema requiere una lectura de derechos o una intervención institucional',
        enunciado:
          'Una docente se entera de que entre los estudiantes circulan, desde hace semanas, imágenes de una compañera menor de edad obtenidas sin su consentimiento. ¿Cuál es la actitud más adecuada?',
        opciones: [
          {
            id: 'a',
            texto:
              'Reconocer que dejó de ser un tema meramente interpersonal: hay derechos de una menor afectados y un daño sostenido, así que corresponde avisar a la dirección y activar el protocolo institucional, cuidando a la estudiante.',
          },
          { id: 'b', texto: 'Resolverlo sola hablando con los estudiantes, para no "complicar" las cosas.' },
          { id: 'c', texto: 'Pedirle a la compañera que lo ignore para que no crezca.' },
          {
            id: 'd',
            texto: 'Revisar por su cuenta los celulares de los estudiantes hasta encontrar las imágenes.',
          },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Cuando hay derechos de una menor afectados y el daño se sostiene en el tiempo, resolverlo sola deja a la estudiante sin la protección que necesita y a la docente sin respaldo institucional.',
          c: 'Pedirle que lo ignore minimiza un daño sostenido y le traslada la carga a quien lo sufre. No es una respuesta proporcionada.',
          d: 'Revisar los celulares de otras personas por su cuenta no es una medida proporcionada ni le corresponde a una docente sola. Detectar un problema no es lo mismo que vigilar.',
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
          'Confunde los sistemas: da por legítimo lo que la herramienta permite, o lo convierte todo en un tema legal y deriva a una denuncia.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Distingue algún sistema de normas, pero no pregunta quién puso la regla ni con qué autoridad, o evalúa la situación con un solo criterio.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Identifica qué sistema está en juego y quién estableció la regla, aplica los criterios de legitimidad y propone un cambio proporcionado.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo hay derechos de terceros, sobre todo de menores, que requieren una lectura de derechos o una intervención institucional, deriva a quien corresponde sin judicializar todo, y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: los cuatro sistemas de normas, los cinco criterios de legitimidad, las cuatro preguntas sobre cualquier regla y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es que podés dejar de dar por sentado que lo que una herramienta permite, o lo que todos hacen, ya está decidido, y empezar a preguntar quién lo decidió.',
    accionSemana:
      '**Una acción concreta para esta semana:** elegí una práctica digital de tu aula —una aplicación que usás, un grupo de mensajes, una regla sobre el celular— y hacele las cuatro preguntas: quién la estableció, con qué autoridad, qué derecho protege y cómo se revisa. Si descubrís que no sabés responder alguna, ya encontraste algo para llevar a tu escuela. Y con tus estudiantes, armá un mapa de las reglas que rigen su vida digital y de quién las puso.',
    preguntasIntro: 'Para armar ese mapa con el curso, podés seguir estos pasos:',
    preguntas: [
      'Pedí que cada estudiante anote tres aplicaciones o espacios digitales que usa todos los días: un juego, una red, un grupo de mensajes.',
      'Para cada uno, que identifiquen una regla: qué se puede hacer allí y qué no.',
      'Para cada regla, que averigüen quién la puso (una empresa, la escuela, el grupo, la ley o nadie en particular) y, si pueden, cómo se reclama o se cambia.',
      'Armen en el pizarrón o en un mural un mapa que agrupe esas reglas según los cuatro sistemas: valores, reglas sociales, reglas de plataforma y normas jurídicas.',
      'Cierren conversando: ¿qué regla los sorprendió?, ¿cuál no sabían que existía?, ¿cuál les gustaría que se pudiera revisar?',
    ],
    cierrePreguntas:
      'No hace falta que tengan todas las respuestas ni que sean correctas desde el principio: lo que importa es que se hagan la pregunta de quién decide. Si alguna respuesta requiere una lectura legal, anotala como pregunta para la dirección en lugar de responderla vos solo.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** el domingo con las treinta pruebas y la herramienta que lo permitía todo. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué sistemas estaban en juego, quién debía participar de esa decisión y qué harías distinto hoy? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula4: {
      titulo: 'Cuando el clic no alcanza: elegir entre lo fácil y lo correcto',
      objetivo:
        'Fomentar el pensamiento crítico y el juicio ético frente a dilemas digitales reales, reconociendo la complejidad de las decisiones en entornos tecnológicos y sus consecuencias humanas y sociales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Un **dilema ético** es una situación en la que hay que elegir entre dos o más opciones, todas con consecuencias importantes, y donde los valores entran en conflicto. En el mundo digital, estos dilemas aparecen todo el tiempo:',
        },
        {
          tipo: 'lista',
          items: [
            '¿Publico algo gracioso aunque pueda dañar a alguien?',
            '¿Comparto una imagen que me llegó por chat privado?',
            '¿Digo lo que pienso aunque sepa que va a herir?',
            '¿Uso inteligencia artificial para hacer trampa en una tarea?',
            '¿Ignoro una situación de violencia en redes para no quedar mal?',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'La ciudadanía digital implica **tomar decisiones informadas, conscientes y éticas**, incluso en contextos donde la presión del grupo, la viralidad o el anonimato parecen justificar todo.',
        },
        { tipo: 'parrafo', texto: 'Frente a un dilema digital, podemos guiarnos por preguntas como:' },
        {
          tipo: 'lista',
          items: [
            '¿A quién afecta esta decisión?',
            '¿Qué valor entra en juego?',
            '¿Qué pasaría si todos hicieran lo mismo?',
            '¿Cómo me sentiría si alguien me hiciera eso a mí?',
            '¿Qué derecho o principio estoy defendiendo o ignorando?',
          ],
        },
      ],
      preguntaDetonadora:
        '*¿Siempre hay una única respuesta correcta ante un dilema digital? ¿Qué te guía cuando tenés que decidir?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Semáforo ético" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto: 'Presentá tres situaciones digitales comunes. Los estudiantes deben votar con colores:',
            },
            {
              tipo: 'lista',
              items: ['Haría eso sin dudas', 'Depende de la situación', 'Nunca lo haría'],
            },
            {
              tipo: 'parrafo',
              texto: '→ Se abre el diálogo: ¿por qué pensamos distinto? ¿Qué valores influyen?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Juicio ético al dilema digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'Dividí al curso en grupos. A cada uno le asignás un dilema digital real (ver ejemplos abajo).',
                'El grupo debe:',
                'Identificar qué valores están en conflicto',
                'Plantear al menos dos posturas posibles',
                'Analizar consecuencias de cada decisión',
                'Emitir un veredicto razonado',
                'Se hace una "audiencia" donde cada grupo expone su dilema y decisión.',
                'Cierre colectivo: ¿Hubo posturas distintas? ¿Qué aprendimos al argumentar?',
              ],
            },
            { tipo: 'parrafo', texto: '**Ejemplos de dilemas reales para trabajar en clase:**' },
            {
              tipo: 'lista',
              items: [
                '**Dilema 1:** Un amigo te envía por privado una foto íntima de alguien. ¿La reenviás? ¿La borrás? ¿Lo confrontás?',
                '**Dilema 2:** Usás inteligencia artificial para generar una tarea que no hiciste. ¿Lo confesás? ¿Está mal si "todos lo hacen"?',
                '**Dilema 3:** Subís un meme con un compañero que no dio permiso. Es gracioso, pero él se siente mal. ¿Lo dejás o lo bajás?',
                '**Dilema 4:** En un grupo de WhatsApp se burlan de alguien. Vos no decís nada, pero tampoco salís en defensa. ¿Sos parte del problema?',
              ],
            },
          ],
        },
      ],
      frase:
        '*"Tus decisiones en internet construyen el mundo digital en el que todos vivimos. Que lo fácil no te aleje de lo justo."*',
      glosario: [
        'Dilema ético',
        'Juicio moral',
        'Responsabilidad digital',
        'Presión social digital',
        'Conciencia ética',
      ],
      referencias: [
        'Guía "Dilemas Digitales" – Faro Digital',
        'UNESCO – Ética y ciudadanía en entornos digitales',
        'Plataforma Chicos.net – Juego "En la red, ¿qué harías?"',
        'Video: "Tomar decisiones difíciles en internet" – Canal Pakapaka',
        'App "Eticapp" – Juegos de decisión moral',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué que una herramienta permita hacer algo no alcanza para que esté bien?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Ético-Normativa y Derechos, en una tarjeta',
      parrafos: [
        'La capacidad técnica llega antes que el consenso sobre su legitimidad. Que una herramienta permita copiar, registrar, modificar o automatizar algo no responde si corresponde hacerlo.',
        '**Los cuatro sistemas de normas:** valores y ética · reglas sociales · reglas de una plataforma · normas jurídicas.',
        '**Los cinco criterios de legitimidad:** derechos · consentimiento · responsabilidad · proporcionalidad · justicia.',
        '**Las cuatro preguntas sobre cualquier regla:** ¿Quién la estableció? · ¿Con qué autoridad? · ¿Qué derecho protege? · ¿Cómo se revisa?',
        '**Y una cosa más:** no hace falta ser abogado, pero sí saber cuándo un problema dejó de ser técnico o interpersonal y requiere una lectura de derechos o una intervención institucional.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la sexta de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Salud y Bienestar Digital',
    seguiEnlace2Href: '/tematicas/salud-y-bienestar-digital',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Que la tecnología lo permita no responde si corresponde hacerlo. Esa pregunta nos toca a nosotros: a quienes usamos las herramientas, a quienes las diseñan, a las escuelas que las incorporan y a las normas que las regulan. Hacerla en voz alta, antes de apretar el clic, es la forma más concreta de ejercer ciudadanía en un mundo donde casi todo se puede.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[ETICO_NORMATIVA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
