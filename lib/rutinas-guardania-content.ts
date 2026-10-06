// Contenido de /tematicas/rutinas-exposicion-guardania. Misma forma que
// lib/ingenieria-social-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo
// hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/rutinas-guardania/ficha-aula';

export const RUTINAS_GUARDANIA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'exposicion-y-oportunidad', number: '05', label: 'Exposición y oportunidad', shortLabel: 'Exposición' },
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
  exposicionYOportunidad: {
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
    titulo: 'Rutinas, Exposición y Guardianía',
    subtitulo: 'De culpar a entender las condiciones',
    bajada:
      'La teoría de actividades rutinarias desplazó parte de la explicación del delito desde las motivaciones de quien lo comete hacia las condiciones de oportunidad que lo hacen posible. Trasladar esa idea al territorio digital exige revisar tres elementos — convergencia, objetivo y guardianía — porque acá el contacto y el daño pueden ocurrir a distancia y de manera asincrónica, sin que agresor y afectado coincidan nunca en el mismo lugar ni en el mismo momento. Esta temática forma parte del grupo Seguridad de la plataforma y trabaja ese desplazamiento: mirar las condiciones antes de mirar solo a las personas.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender la teoría de actividades rutinarias y por qué trasladarla al territorio digital exige repensar la convergencia entre oportunidad, objetivo y guardianía, dado que el contacto y el daño ya no requieren coincidir en el espacio ni en el tiempo.',
      'Comprender por qué "objetivo adecuado" es una categoría puramente analítica, y por qué la exposición de alguien a una situación de riesgo nunca equivale a hacerlo responsable de lo que otra persona decide hacer.',
      'Reconocer la guardianía digital multinivel: capas personales, relacionales, institucionales, tecnológicas, de plataforma y públicas, y cómo la pregunta que importa no es por qué alguien no se protegió, sino qué recursos estaban disponibles y en qué momento dejaron de ser suficientes.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Entender la convergencia entre oportunidad, objetivo y guardianía trasladada al territorio digital, reconociendo que tiempo y espacio se reconfiguran cuando el contacto y el daño pueden ocurrir a distancia y de manera asincrónica.',
      'Usar "objetivo adecuado" exclusivamente como categoría analítica: las rutinas pueden modificar probabilidades sin que eso convierta a quien transita un espacio digital o utiliza una plataforma en responsable de lo que otra persona decide hacer.',
      'Identificar las capas de la guardianía digital multinivel —personal, relacional, institucional, tecnológica, de plataforma y pública— y reconocer que esa guardianía puede distribuirse entre todas ellas, no depender de una sola.',
      'Reemplazar la pregunta "por qué alguien no se protegió" por "qué recursos estaban disponibles y en qué momento dejaron de ser suficientes", como forma de examinar una situación sin culpar a quien la atravesó.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Por qué pasó esto, en vez de quién tuvo la culpa?',
    parrafos: [
      'Una estudiante de catorce años juega todos los días, después de clase, a un videojuego online con chat abierto. Hace meses que un jugador adulto, con otro nombre de usuario, le habla ahí todos los días: al principio sobre el juego, después sobre su vida, cada vez con más confianza. Nadie en la familia revisó nunca esa plataforma porque "es solo un juego". La escuela nunca habló de esto porque no entra en ningún contenido curricular. El juego no tiene ningún filtro de edad real para ese chat. Cuando la situación se descubre, alguien dice: "tendría que haber sabido que no se habla con desconocidos".',
      'Esa frase pone toda la responsabilidad en la estudiante, como si hubiera bastado con que ella "se cuidara más". Pero mirá todo lo que falló al mismo tiempo: nadie en la familia conocía esa plataforma ni sabía qué pasaba ahí; la escuela nunca trabajó el tema; el juego no puso ningún límite real a ese tipo de contacto. Ninguna de esas ausencias es culpa de la estudiante. Lo que la expuso no fue un descuido personal: fue que varias capas de cuidado, que deberían haber estado ahí, no estaban, al mismo tiempo.',
    ],
    problema:
      'Pensá en una situación digital donde alguien terminó expuesto a algo que no buscaba. Antes de preguntarte qué hizo mal esa persona, preguntate: ¿qué otras capas de cuidado —familia, escuela, la plataforma misma— deberían haber estado presentes, y no lo estaban?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La teoría de actividades rutinarias desplazó parte de la explicación desde las motivaciones de quien comete el delito hacia las condiciones de oportunidad que lo hacen posible. Trasladar esa idea al territorio digital exige revisar tres elementos: convergencia, objetivo y guardianía, porque acá el contacto y el daño pueden ocurrir a distancia y de manera asincrónica — sin que agresor y afectado coincidan nunca en el mismo lugar ni en el mismo momento, como sí lo exigía la teoría original pensada para el espacio físico.',
      'La idea de "objetivo adecuado" tiene que usarse exclusivamente como categoría analítica. Exposición no equivale a responsabilidad de la víctima. Las rutinas pueden modificar probabilidades sin convertir a quien transita un espacio o utiliza una plataforma en responsable de lo que otra persona decide hacer — una cosa es identificar qué condiciones aumentan un riesgo, y otra muy distinta es culpar a quien estaba en esas condiciones.',
      'La guardianía digital multinivel adapta el concepto original hacia capas personales, relacionales, institucionales, tecnológicas, de plataforma y públicas. La pregunta operativa deja de ser por qué alguien no se protegió, y pasa a examinar qué recursos estaban disponibles y en qué momento dejaron de ser suficientes — un desplazamiento que cambia completamente el tipo de intervención que corresponde después de una situación de riesgo.',
    ],
    preguntaCierre:
      'Pensá en alguna rutina digital tuya, de tu familia o de tu escuela —qué apps se usan, con quién se habla, qué se comparte y dónde— que hoy no tiene ninguna capa de guardianía detrás. ¿En qué nivel falta esa capa: personal, relacional, institucional, tecnológica, de plataforma o pública?',
    fichaAula1: {
      titulo: '¿Qué me hace un blanco fácil? Actividades rutinarias y cibervictimización',
      objetivo:
        'Comprender, a partir de la Teoría de Actividades Rutinarias, qué combinación de condiciones —no de características personales— aumenta el riesgo de sufrir una cibervictimización, y reconocer el papel de la guardianía capaz en reducir ese riesgo.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La Teoría de Actividades Rutinarias, propuesta originalmente por Cohen y Felson en 1979, sostiene que para que ocurra una victimización tienen que converger tres elementos al mismo tiempo: la exposición a un delincuente motivado, ser un objetivo adecuado, y la ausencia de un guardián capaz que pueda prevenirlo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Una investigación con 1285 estudiantes de secundaria en Colombia, publicada en la Revista de Psicología de la Pontificia Universidad Católica del Perú, midió estos tres elementos en el entorno digital. La exposición a un delincuente motivado se asoció con hábitos como tener conexión a internet sin supervisión, usar redes sociales, descargar juegos o música sin ninguna protección, o no tener activado ningún control sobre el acceso remoto a la cámara. Ser un objetivo adecuado se asoció con conductas como iniciar contacto o amistad con desconocidos por internet, publicar fotos o videos, o guardar información personal en el celular. La ausencia de un guardián capaz se relacionó con la falta de supervisión adulta y de hábitos de conexión más seguros.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El estudio encontró que un 46% de los estudiantes estaba expuesto a un delincuente motivado, un 37,5% era un objetivo adecuado en línea, y un 29,8% no contaba con un guardián capaz. Cuando los tres elementos convergían al mismo tiempo —algo que ocurría en el 3,9% de la muestra—, el riesgo de cibervictimización aumentaba de forma estadísticamente significativa. Los propios autores proponen que estos hallazgos se usen para diseñar políticas comunicativas y educativas orientadas a un uso responsable de la tecnología, no para señalar a quienes estuvieron expuestos.',
        },
      ],
      preguntaDetonadora:
        '¿Qué actividades cotidianas en internet aumentan el riesgo de que algo te pase, sin que eso signifique que la culpa sea tuya si pasa?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi semana digital, sin nombres" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'De forma anónima, cada estudiante anota en un papel tres hábitos digitales de su semana (qué apps usa más, con quién habla ahí, qué comparte). Se juntan todos los papeles y se leen al azar, sin identificar a nadie.',
            },
            {
              tipo: 'parrafo',
              texto:
                '→ En grupo, clasifican cada hábito: ¿tiene alguna capa de guardianía detrás (alguien que lo sepa, algo que lo limite), o no tiene ninguna?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Mapa de guardianía del curso" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben una de las capas de guardianía digital multinivel: personal, relacional, institucional, tecnológica, de plataforma o pública.',
                'Para esa capa, identifican: qué protección ya existe hoy en la escuela o la familia para esa capa, y qué falta.',
                'Arman una propuesta concreta para fortalecer esa capa específica, sin proponer prohibir el uso de ninguna tecnología.',
                'Presentan su propuesta y arman entre todos un mapa único del curso con las seis capas.',
              ],
            },
          ],
        },
      ],
      frase: 'No se trata de preguntar por qué alguien no se cuidó, sino qué capas de cuidado faltaban cuando las necesitaba.',
      glosario: [
        'Teoría de Actividades Rutinarias',
        'Delincuente motivado',
        'Objetivo adecuado',
        'Guardián capaz',
        'Guardianía digital multinivel',
      ],
      referencias: [
        'Morillo Puente, S. y Ríos Hernández, I. N. (2022). Cibervictimización en el marco de la Teoría de Actividades Rutinarias en la era digital. Revista de Psicología, 40(1), 265-291. Pontificia Universidad Católica del Perú.',
      ],
    },
  },
  exposicionYOportunidad: {
    titulo: 'Exposición y oportunidad',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: las actividades rutinarias permiten estudiar la convergencia entre oportunidad, objetivo y guardianía. En entornos digitales, el tiempo y el espacio se reconfiguran, y la guardianía puede distribuirse entre la persona, sus relaciones, las instituciones, las plataformas y los sistemas públicos — no depende de un solo nivel.',
        'El capítulo nombra como referencia a Cohen y Felson, Hindelang, Gottfredson y Garofalo, Ronald Akers, Albert Bandura, Sykes y Matza, Cornish y Clarke, John Suler y K. Jaishankar, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación de riesgo digital, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — decir "a ese le pasó porque pasa mucho tiempo conectado" confunde una condición de exposición con una explicación completa de lo que ocurrió.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar buen criterio y seguir condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, esa reciprocidad es literalmente lo que explica por qué la guardianía tiene que pensarse en varios niveles a la vez, y no depositarse entera en la persona expuesta.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es buscar qué hizo mal la persona expuesta: "objetivo adecuado" es una categoría analítica, nunca un juicio sobre quién tuvo la culpa.',
          'No es solo una cuestión de que cada persona desarrolle más capacidades o esté más alerta: alguien puede tener buen criterio y seguir expuesto si las demás capas de guardianía —familiar, institucional, de plataforma— no están.',
          'No alcanza con una buena regulación o un buen diseño de plataforma si la persona no tiene los conocimientos o los vínculos de confianza para aprovecharlos.',
          'No es diagnosticar a partir de una sola condición de exposición: hay que reconstruir qué combinación de condiciones convergió, sin confundir correlación con mecanismo.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona, o qué parte de una institución, quedó expuesta por la convergencia de condiciones.',
        '**¿Qué condiciones sociotécnicas intervienen?** Qué combinación de oportunidad, objetivo y guardianía produjo este resultado — y en qué nivel de la guardianía digital multinivel (personal, relacional, institucional, tecnológica, de plataforma, pública) faltó algo.',
        '**¿Qué cambio sería proporcionado?** El propósito no es llegar a la misma respuesta en todos los casos, sino reemplazar la pregunta "por qué no se protegió" por "qué recursos estaban disponibles y en qué momento dejaron de ser suficientes".',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un estudiante de segundo año empieza a jugar, después de clase, un videojuego online con chat de voz abierto a cualquier jugador del servidor. Con el tiempo, un jugador adulto que usa el mismo servidor todos los días empieza a hablarle cada vez con más frecuencia, primero del juego, después de temas personales, y le pide que se pasen a chatear por otra aplicación "para hablar más tranquilos". El estudiante acepta. Varias semanas después, un profesor nota que el chico está distraído y raro, y al conversar con él descubre la situación. En la reunión con la familia, alguien dice: "tendría que haber hablado con nosotros antes de aceptar eso".',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la convergencia de tres elementos permitió que esto avanzara durante semanas sin que nadie lo notara: un chat de voz abierto en un juego con contacto entre desconocidos (oportunidad), un estudiante que pasaba varias horas ahí todos los días (objetivo adecuado, en sentido puramente analítico) y la ausencia de cualquier adulto o sistema que supervisara esa plataforma (guardianía). Participan el estudiante, el jugador adulto, la familia, la escuela y el propio juego, que permite ese tipo de contacto sin ningún filtro.',
        ],
        nota: '*(Acá me pregunto: en vez de preguntar qué hizo mal el estudiante, ¿qué tendría que haber estado ahí —y no estaba— para que esto no avanzara tanto tiempo sin que nadie lo supiera?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: ninguna de las capas de guardianía digital multinivel estaba funcionando al mismo tiempo. En la capa personal, el estudiante no tenía por qué saber identificar por sí solo una situación de este tipo. En la capa relacional, no había ningún adulto cercano al tanto de esa plataforma. En la capa institucional, la escuela nunca había trabajado el tema de los chats abiertos en videojuegos. En la capa tecnológica y de plataforma, el juego no pone ningún límite real al contacto entre un adulto y un menor de edad en su chat de voz. En la capa pública, no hay ninguna política que regule ese tipo de función en juegos de ese tipo.',
          'Qué condiciones sociotécnicas intervienen: la combinación de tiempo diario sostenido, un canal de contacto sin supervisión y la migración a una segunda aplicación —que sacó la conversación de cualquier espacio donde alguien pudiera verla— es exactamente el tipo de convergencia que describe la teoría: oportunidad, objetivo y ausencia de guardián, los tres presentes a la vez.',
        ],
        nota: '*(Acá me pregunto: ¿en qué momento exacto dejaron de alcanzar los recursos que sí había —el estudiante sabía que existía, podía hablar con algún adulto— y hacía falta algo más?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no alcanza con una sola intervención en una sola capa. Hace falta actuar en varias a la vez: en lo institucional, que la escuela hable del tema con todo el curso, no solo con el estudiante involucrado; en lo relacional, que la familia tenga una conversación sin culpar, enfocada en qué plataformas usa y con quién habla, no en "por qué no me contaste"; en lo tecnológico, revisar y ajustar en conjunto la configuración de privacidad del juego y de la otra aplicación. Ninguna de estas acciones, por sí sola, hubiera bastado.',
        ],
        nota: '*(Acá me pregunto: si solo hablo con el estudiante y le digo "tené más cuidado", ¿cambié algo de lo que realmente falló, o dejé todas las demás capas exactamente como estaban?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al docente ni a la familia: no les corresponde tratar al estudiante como si hubiera sido negligente, ni asumir que la solución es prohibirle los videojuegos de ahora en adelante. Tampoco les corresponde resolver solos si hay algo que denunciar: eso es responsabilidad de la institución, con su protocolo correspondiente, y de las familias en conjunto con la escuela.',
          'Qué podría salir mal: que la conversación se centre en lo que el estudiante "debería haber hecho", reforzando la idea de que la exposición fue su responsabilidad; o que, del otro extremo, se prohíba todo videojuego con chat sin trabajar ninguna de las otras capas, dejando a este y a otros estudiantes igual de expuestos la próxima vez que usen otra plataforma. Lo que ajustaría para la próxima vez: que la escuela y las familias tengan, antes de que pase algo así, una conversación compartida sobre qué plataformas con chat abierto usan los estudiantes, sin esperar a que un caso individual obligue a improvisar.',
        ],
        nota: '*(Acá me pregunto: ¿qué otras plataformas con el mismo tipo de chat abierto está usando hoy mi curso, sin que ninguna capa de guardianía las esté mirando?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué capa de guardianía falló: personal/relacional, institucional/tecnológica, o de plataforma/pública. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una estudiante usa, desde hace meses, una app de edición de fotos que pide acceso a su galería completa y a su ubicación para funcionar. Nunca revisó qué hace la app con esos datos ni se lo comentó a nadie en su casa. Un día empieza a recibir mensajes de publicidad personalizada que la incomodan, con datos que ella nunca compartió directamente.',
        analisis:
          '¿Qué capa de guardianía falló acá? Personal y relacional. No había ningún hábito personal de revisar los permisos antes de aceptarlos, y tampoco había ninguna conversación en la familia sobre qué apps usa y qué datos entregan. Esto no es "culpa" de la estudiante: nadie le enseñó a revisar esos permisos, y es exactamente el tipo de hábito que se construye con acompañamiento, no por sentido común espontáneo.',
        nota: '*(Si elegiste "institucional/tecnológica" o "de plataforma/pública": también están en juego —ninguna escuela trabajó el tema, y la app pide más permisos de los que necesita—, pero lo que más directamente faltó acá fue el hábito personal y la conversación familiar que todavía no existían.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una escuela permite que los estudiantes usen sus celulares personales para entrar a una plataforma educativa que no tiene ningún control de edad ni moderación de los comentarios entre alumnos. Hace tiempo que circulan comentarios hirientes en esa plataforma, pero la escuela nunca definió qué hacer al respecto porque "no es una red social, es para estudiar".',
        analisis:
          '¿Qué capa de guardianía falló acá? Institucional y tecnológica. La escuela adoptó una herramienta sin evaluar sus funciones de moderación ni definir un protocolo para lo que pasa en ella, tratándola como si por ser "educativa" no necesitara el mismo cuidado que cualquier otro espacio donde los estudiantes interactúan. La responsabilidad acá no es de un estudiante en particular: es de una institución que incorporó una herramienta sin pensar en la guardianía que esa herramienta necesitaba.',
        nota: '*(Si elegiste "personal/relacional": ningún hábito individual de un estudiante iba a resolver esto — el problema es estructural, de cómo la escuela eligió y configuró la plataforma.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Una aplicación de mensajería muy usada por adolescentes permite crear grupos de hasta 500 personas sin ningún control sobre quién puede agregar a quién, y no ofrece ninguna forma simple de reportar contenido dentro de esos grupos grandes. En uno de esos grupos, que reúne estudiantes de varias escuelas de la ciudad, empieza a circular contenido que avergüenza a varios chicos, y nadie sabe bien a quién reportarlo ni qué pasa después de hacerlo.',
        analisis:
          '¿Qué capa de guardianía falló acá? De plataforma y pública. Ni la familia ni la escuela tienen forma de incidir en el diseño de esa aplicación, que permite grupos enormes sin mecanismos reales de moderación ni de respuesta a los reportes. Esto excede lo que cualquier capa personal, relacional o institucional puede resolver por sí sola: se necesita que la plataforma cambie su diseño, y que exista una política pública que le exija responsabilidad por ese tipo de funciones.',
        nota: '*(No hay una sola respuesta esperada en este caso: también podría argumentarse que la escuela debería tener, igual, un protocolo para estos casos aunque el origen esté en la plataforma. Lo que se evalúa es que reconozcas que acá el límite de lo que familia y escuela pueden resolver solas está mucho más cerca que en las situaciones anteriores.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el caso del estudiante y el jugador adulto en el videojuego. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Si hubiera sido más cuidadoso y no hubiera aceptado pasarse a otra app con un desconocido, nada de esto habría pasado. La responsabilidad es suya por exponerse así.',
      citaB:
        'Esto es pura responsabilidad del adulto que lo manipuló. La plataforma, la familia y la escuela no tienen nada que ver: el único problema es que existen personas así.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** convierte una condición de exposición en una responsabilidad de la víctima. El capítulo es explícito: "objetivo adecuado" es una categoría puramente analítica, y las rutinas pueden modificar probabilidades sin convertir a quien transita un espacio digital en responsable de lo que otro decide hacer. Culpar al estudiante por haber estado expuesto repite exactamente el error que el capítulo advierte que hay que evitar.',
      errorB:
        '**Análisis B** tiene razón en que la responsabilidad del daño es del adulto que manipuló al estudiante, pero se equivoca al descartar por completo el papel de las condiciones de oportunidad. Ignorar que faltaron capas de guardianía —relacional, institucional, tecnológica— no ayuda a prevenir que algo parecido le pase a otro estudiante: trasladar toda la explicación a "la maldad de una persona" deja intactas las mismas condiciones que permitieron que esto avanzara sin que nadie lo notara.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: no distinguieron entre explicar las condiciones que hicieron posible algo y asignar responsabilidad por lo que pasó. Uno le puso esa responsabilidad a quien no la tiene; el otro, al ponerla únicamente en el agresor, perdió de vista las condiciones que sí se pueden cambiar.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'entender la convergencia entre oportunidad, objetivo y guardianía trasladada al territorio digital',
        enunciado:
          'Según la teoría de actividades rutinarias trasladada al territorio digital, ¿qué cambia respecto de la versión original, pensada para el espacio físico?',
        opciones: [
          {
            id: 'a',
            texto:
              'El contacto y el daño pueden ocurrir a distancia y de manera asincrónica, por lo que hay que revisar cómo se reconfiguran convergencia, objetivo y guardianía.',
          },
          { id: 'b', texto: 'Nada: los mismos tres elementos se aplican exactamente igual, sin ningún ajuste.' },
          { id: 'c', texto: 'La guardianía deja de ser necesaria, porque en el espacio digital no hay forma de proteger a nadie.' },
          { id: 'd', texto: 'El objetivo deja de tener relevancia, porque en internet todos están igual de expuestos.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'La teoría original suponía que agresor y víctima coincidieran en tiempo y espacio. En el territorio digital esa coincidencia ya no es necesaria, y eso obliga a repensar cómo funcionan los tres elementos.',
          c: 'La guardianía no desaparece: se redefine en varias capas —personal, relacional, institucional, tecnológica, de plataforma y pública—, precisamente porque sigue siendo necesaria.',
          d: 'El capítulo mantiene la categoría de "objetivo adecuado" como herramienta analítica; no desaparece, aunque su uso exige mucho cuidado para no convertirla en un juicio de responsabilidad.',
        },
      },
      {
        objetivo: 'usar "objetivo adecuado" exclusivamente como categoría analítica, sin convertir exposición en responsabilidad de la víctima',
        enunciado:
          'Un estudiante pasaba muchas horas en una plataforma sin supervisión cuando fue contactado por alguien con malas intenciones. ¿Cuál de estas lecturas es consistente con lo que plantea el capítulo?',
        opciones: [
          { id: 'a', texto: 'El estudiante es responsable de lo que pasó, porque sus rutinas lo expusieron.' },
          {
            id: 'b',
            texto:
              'Las rutinas del estudiante son una condición que modificó la probabilidad de exposición, pero no lo convierten en responsable de la decisión de quien lo contactó.',
          },
          { id: 'c', texto: 'No hay ninguna relación entre las rutinas del estudiante y lo que pasó.' },
          { id: 'd', texto: 'El concepto de "objetivo adecuado" no debería usarse nunca, porque siempre termina culpando a alguien.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Esto es exactamente lo que el capítulo advierte que no hay que hacer: confundir una condición de exposición con responsabilidad por el daño.',
          c: 'El capítulo sí reconoce que las rutinas modifican probabilidades — negar cualquier relación impide entender qué condiciones habría que cambiar.',
          d: 'El capítulo no descarta el concepto: pide usarlo exclusivamente como categoría analítica, con el cuidado de no convertirlo en un juicio sobre la víctima.',
        },
      },
      {
        objetivo: 'identificar las capas de la guardianía digital multinivel',
        enunciado:
          'Una plataforma muy usada por adolescentes no tiene ningún mecanismo real de moderación ni de respuesta a los reportes de los usuarios. ¿En qué capa de guardianía digital multinivel está, principalmente, esta falla?',
        opciones: [
          { id: 'a', texto: 'Personal.' },
          { id: 'b', texto: 'Relacional.' },
          { id: 'c', texto: 'De plataforma.' },
          { id: 'd', texto: 'Ninguna: el diseño de una plataforma no es parte de la guardianía digital.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'La capa personal tiene que ver con los hábitos de cada usuario, no con las funciones de moderación que una plataforma decide incluir o no.',
          b: 'La capa relacional involucra a familiares, docentes o pares cercanos — no al diseño técnico de una aplicación.',
          d: 'El capítulo incluye explícitamente a las plataformas como una de las capas de la guardianía digital multinivel: sus decisiones de diseño también protegen o exponen a quienes las usan.',
        },
      },
      {
        objetivo: 'reemplazar la pregunta "por qué no se protegió" por "qué recursos estaban disponibles y en qué momento dejaron de ser suficientes"',
        enunciado:
          'Después de una situación de riesgo digital en una escuela, un docente pregunta: "¿por qué este estudiante no se cuidó más?". Según el capítulo, ¿cuál sería una pregunta más adecuada?',
        opciones: [
          { id: 'a', texto: '"¿Por qué este estudiante no se cuidó más?" ya es la pregunta correcta.' },
          { id: 'b', texto: '"¿Cómo evitamos que este estudiante vuelva a usar internet?"' },
          { id: 'c', texto: '"¿Quién tiene la culpa de lo que pasó?"' },
          {
            id: 'd',
            texto: '"¿Qué recursos de protección estaban disponibles en este caso, y en qué momento dejaron de ser suficientes?"',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Esa pregunta centra todo el análisis en la persona expuesta, exactamente lo que el capítulo propone evitar.',
          b: 'Restringir el acceso no es la respuesta que propone el capítulo, que apunta a identificar y fortalecer capas de guardianía, no a eliminar el uso de la tecnología.',
          c: 'Buscar culpables no es el objetivo del método: el capítulo propone identificar condiciones y recursos, no asignar culpa.',
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
          'Le atribuye la responsabilidad a quien estuvo expuesto ("tendría que haber tenido más cuidado"), o explica lo ocurrido únicamente por la maldad de quien agredió, sin mirar ninguna condición de oportunidad.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en las condiciones de la situación, pero no identifica con precisión qué capa de guardianía falló.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue las capas de guardianía digital multinivel, identifica cuál falló en una situación concreta y propone un cambio proporcionado sin culpar a quien estuvo expuesto.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo varias capas fallan a la vez, reemplaza "por qué no se protegió" por "qué recursos había y cuándo dejaron de alcanzar", y distingue explicar condiciones de asignar responsabilidad.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la convergencia entre oportunidad, objetivo y guardianía trasladada al territorio digital, por qué "objetivo adecuado" nunca es un juicio sobre la víctima, las capas de la guardianía digital multinivel, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es la pregunta que te hacés cuando algo sale mal: no "por qué no se cuidó", sino "qué recursos había y en qué momento dejaron de alcanzar".',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde alguien haya quedado expuesto a un riesgo digital, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —en qué capa o capas de guardianía faltó algo— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la estudiante que fue contactada durante meses en un videojuego, sin que ninguna capa de cuidado lo notara. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué capas de guardianía identificás ahora que no habías visto antes? ¿Qué harías distinto la próxima vez que notes una rutina digital sin ninguna capa de cuidado detrás? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien que decir "tendría que haber sabido que no se habla con desconocidos" pone la responsabilidad en el lugar equivocado?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Rutinas, Exposición y Guardianía, en una tarjeta',
      parrafos: [
        'La teoría de actividades rutinarias permite estudiar la convergencia entre oportunidad, objetivo y guardianía. En entornos digitales, el tiempo y el espacio se reconfiguran, y el contacto y el daño pueden ocurrir a distancia y de manera asincrónica.',
        '**Una advertencia que no se negocia:** "objetivo adecuado" es una categoría puramente analítica. Exposición no equivale a responsabilidad de la víctima: las rutinas pueden modificar probabilidades sin convertir a quien transita un espacio digital en responsable de lo que otro decide hacer.',
        '**La guardianía digital multinivel:** personal, relacional, institucional, tecnológica, de plataforma y pública. Puede distribuirse entre todas ellas, no depender de una sola.',
        '**El cambio de pregunta:** no "por qué alguien no se protegió", sino "qué recursos estaban disponibles y en qué momento dejaron de ser suficientes".',
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
    referenciasLista: [
      'Cohen y Felson',
      'Hindelang, Gottfredson y Garofalo',
      'Ronald Akers',
      'Albert Bandura',
      'Sykes y Matza',
      'Cornish y Clarke',
      'John Suler',
      'K. Jaishankar',
    ],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Rutinas, exposición y guardianía no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[RUTINAS_GUARDANIA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
