// Contenido de /tematicas/escuela-como-espacio-civico. Misma forma que
// lib/autonomia-familia-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/escuela-espacio-civico/ficha-aula';

export const ESCUELA_ESPACIO_CIVICO_FALLBACK: Audiencia = 'docentes';

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
  { id: 'aprendizaje-civico-digital', number: '05', label: 'Aprendizaje cívico digital', shortLabel: 'Aprendizaje cívico' },
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
    preguntaDestacada: string;
    fichaAula1: FichaAulaProps;
  };
  aprendizajeCivicoDigital: {
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
    referencias: string[];
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'La Escuela como Espacio Cívico',
    subtitulo: 'De dentro del edificio a territorio híbrido',
    bajada:
      'La escuela habita un territorio híbrido donde conflictos, producciones y relaciones atraviesan espacios físicos y digitales. Una situación puede adquirir relevancia escolar aunque parte haya ocurrido fuera del edificio, cuando afecta convivencia, derechos o procesos educativos vinculados con la comunidad. Esta temática forma parte del grupo Infancia y Crianza de la plataforma y trabaja esa idea: la escuela ya no termina en su puerta de entrada, y eso cambia qué le corresponde mirar.',
    listaTitulo: 'Vas a:',
    lista: [
      'Reconocer cuándo una situación ocurrida fuera del edificio escolar adquiere, de todas formas, relevancia escolar, porque afecta la convivencia, los derechos o los procesos educativos vinculados con la comunidad.',
      'Entender la Pedagogía Cívica Digital como un enfoque que integra competencias técnicas con pensamiento crítico, derechos, convivencia y participación, y que no necesita convertirse en una asignatura separada: puede atravesar las áreas existentes a partir de problemas reales, desde la desinformación y la IA hasta la privacidad y los conflictos grupales.',
      'Evaluar si las reglas, plataformas y respuestas institucionales de una escuela son comprensibles y proporcionales, y reconocer cuándo una situación excede la competencia educativa, momento en el que la madurez institucional consiste en activar redes y derivar sin improvisación.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer cuándo una situación ocurrida fuera del edificio escolar adquiere relevancia escolar, al afectar la convivencia, los derechos o los procesos educativos vinculados con la comunidad.',
      'Entender la Pedagogía Cívica Digital como un enfoque transversal que integra competencias técnicas con pensamiento crítico, derechos, convivencia y participación, sin necesidad de convertirse en una asignatura separada, atravesando las áreas existentes mediante problemas reales.',
      'Evaluar si las reglas, plataformas y respuestas institucionales de una escuela son comprensibles y proporcionales a la situación que buscan atender.',
      'Identificar cuándo una situación excede la competencia educativa y requiere activar redes y derivar sin improvisación, en vez de intentar resolverla con recursos que no corresponden.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Termina la escuela en la puerta del edificio?',
    parrafos: [
      'Un domingo a la noche, en un chat grupal de un curso de secundaria, una discusión entre dos estudiantes escala rápido: se cruzan insultos, alguien comparte una captura de pantalla de una conversación privada, y para el lunes a la mañana medio curso ya tomó partido. Nada de esto pasó en la escuela ni en horario escolar. El lunes, cuando el clima tenso del grupo se nota en el aula, una docente no sabe bien qué hacer: ¿le corresponde a la escuela meterse en algo que pasó un domingo, por fuera del edificio, en un chat que nadie organizó institucionalmente?',
      'La pregunta parece razonable, pero parte de un supuesto que ya no funciona: que lo que ocurre fuera del horario y del edificio escolar es, automáticamente, ajeno a la escuela. El conflicto nació en un chat un domingo, pero el lunes ya estaba adentro del aula, afectando la convivencia de todo el curso y los vínculos entre estudiantes que sí son parte de la vida escolar. La escuela habita un territorio híbrido: no se trata de dónde empezó algo, sino de si eso que empezó en otro lado terminó afectando la convivencia, los derechos o los procesos educativos de la comunidad escolar.',
    ],
    problema:
      'Pensá en alguna situación de tu escuela o tu entorno que haya empezado "afuera" —un chat, un fin de semana, una red social— y haya terminado afectando algo "adentro". ¿Qué parte de esa situación hacía que, en el fondo, sí le correspondiera a la escuela mirarla?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La escuela habita un territorio híbrido donde conflictos, producciones y relaciones atraviesan espacios físicos y digitales. Una situación puede adquirir relevancia escolar aunque parte haya ocurrido fuera del edificio, cuando afecta convivencia, derechos o procesos educativos vinculados con la comunidad — el lugar donde empezó algo no decide, por sí solo, si le corresponde o no a la escuela mirarlo.',
      'La Pedagogía Cívica Digital integra competencias técnicas con pensamiento crítico, derechos, convivencia y participación. Ciudadanía digital no necesita convertirse siempre en asignatura separada: puede atravesar áreas mediante problemas reales, desde desinformación e IA hasta privacidad y conflictos grupales — una clase de lengua, de ciencias sociales o de matemática puede ser, también, el lugar donde se trabaja un problema de ciudadanía digital, si el problema real lo amerita.',
      'La escuela también educa mediante sus reglas, plataformas y respuestas institucionales. Restricciones y protocolos deben ser comprensibles y proporcionales. Cuando una situación excede competencia educativa, la madurez institucional consiste en activar redes y derivar sin improvisación — no toda situación que llega a la escuela tiene que resolverla la escuela sola, pero sí tiene que saber a dónde llevarla.',
    ],
    preguntaDestacada:
      'Pensá en alguna regla o protocolo digital de tu escuela. ¿Es comprensible para quien tiene que cumplirlo, y es proporcional a lo que busca prevenir o resolver?',
    fichaAula1: {
      titulo: 'Educación Digital como territorio escolar: el Programa de Santa Fe',
      objetivo:
        'Conocer un marco de política educativa provincial reciente que integra territorio híbrido, transversalidad curricular y protocolos de derivación, y reconocer cómo esos tres componentes se combinan en una política concreta.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En 2026, el Ministerio de Educación de la Provincia de Santa Fe aprobó el Programa de Educación Digital, con la misión de generar prácticas educativas para el uso seguro, saludable, responsable, ético, crítico y creativo de las tecnologías digitales, integrando sus acciones de manera transversal y reconociendo a la escuela como "territorio fundamental para la construcción de ciudadanía".',
        },
        {
          tipo: 'parrafo',
          texto:
            'El programa aborda la transversalidad de manera explícita: la educación digital integral comprende alfabetización, ética tecnológica, construcción de vínculos socioafectivos en redes, creatividad, pensamiento computacional e inteligencia artificial, incorporada a las prácticas educativas existentes en vez de convertirse en una materia aislada. En el nivel primario de la provincia, esto ya se tradujo en un enfoque transversal incluido en el diseño curricular, que "atraviesa cada una de las áreas promoviendo articulaciones con los objetos disciplinares específicos", además de un espacio curricular específico para profundizarlo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Sobre la proporcionalidad y la derivación, el programa dispone la elaboración de protocolos específicos de actuación institucional ante situaciones de grooming, ciberbullying, sextorsión, violencia digital y difusión de imágenes íntimas sin consentimiento, "garantizando rutas claras de intervención, resguardo de derechos y articulación interinstitucional" — es decir, un camino definido de antemano para cuando una situación excede lo que la escuela puede resolver sola.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El programa también impulsa la conformación de "acuerdos comunitarios de convivencia digital", que involucran a instituciones educativas, familias, estudiantes y organizaciones territoriales en la construcción conjunta de entornos digitales seguros — una forma concreta de reconocer que la escuela, aunque sea un territorio central, no actúa aislada del resto de la comunidad.',
        },
      ],
      preguntaDetonadora: 'Si tu escuela tuviera que elaborar su propio "acuerdo comunitario de convivencia digital", ¿quiénes tendrían que estar en esa conversación además de los docentes?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Dónde ya está la ciudadanía digital?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, revisan los contenidos de una o dos materias que ya dictan (lengua, ciencias sociales, formación ética, tecnología) y buscan un problema real de ciudadanía digital que podría trabajarse ahí sin crear una materia nueva: desinformación en una clase de lengua, privacidad en ciencias sociales, sesgo algorítmico en matemática.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestra ruta de derivación" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben un tipo de situación (un conflicto de convivencia que la escuela puede resolver sola; una situación de violencia digital que excede lo escolar; algo intermedio y dudoso).',
                'Para cada una, trazan una "ruta": quién en la escuela la atiende primero, qué información se registra, y si corresponde o no derivar a otra institución, y a cuál.',
                'Comparan sus rutas entre grupos: ¿coinciden en cuáles situaciones ameritan derivar y cuáles no?',
              ],
            },
          ],
        },
      ],
      frase: '"La escuela no tiene que resolverlo todo sola. Tiene que saber, de antemano, qué le toca a ella y a dónde llevar lo que no."',
      glosario: ['Territorio híbrido escolar', 'Pedagogía Cívica Digital', 'Transversalidad curricular', 'Protocolo de derivación', 'Acuerdo comunitario de convivencia digital'],
      referencias: [
        'Ministerio de Educación de la Provincia de Santa Fe (2026). Resolución 0553/26 — Programa de Educación Digital.',
      ],
    },
  },
  aprendizajeCivicoDigital: {
    titulo: 'Aprendizaje cívico digital',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la escuela es un territorio híbrido donde conflictos y aprendizajes atraviesan aula, mensajería, plataformas y hogares. La Pedagogía Cívica Digital integra formación ética, pensamiento crítico, convivencia, derechos y capacidad de actuar dentro de situaciones reales.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación escolar que atraviesa lo digital, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — decidir que algo "no es asunto de la escuela" solo porque ocurrió fuera del edificio, sin mirar si afecta la convivencia o los derechos de la comunidad escolar, es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, eso significa que ni la escuela sola puede resolver todo lo que atraviesa el territorio híbrido, ni puede desentenderse de todo lo que no ocurrió dentro del edificio.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que lo que pasa fuera del edificio escolar sea, automáticamente, ajeno a la escuela: una situación adquiere relevancia escolar cuando afecta convivencia, derechos o procesos educativos vinculados con la comunidad.',
          'No es que la ciudadanía digital necesite una materia propia para enseñarse: la Pedagogía Cívica Digital puede atravesar áreas existentes mediante problemas reales.',
          'No es que cualquier regla o protocolo escolar sea válido por el solo hecho de existir: restricciones y protocolos deben ser comprensibles y proporcionales.',
          'No es que la escuela tenga que resolver sola cualquier situación que llegue hasta ella: cuando algo excede su competencia, la madurez institucional consiste en activar redes y derivar sin improvisación.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la convivencia, los derechos o los procesos educativos de la comunidad escolar está en juego, sin importar dónde empezó la situación.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si la situación podría abordarse de forma transversal en una materia existente, y si las reglas o protocolos que la escuela tiene para este tipo de caso son comprensibles y proporcionales.',
        '**¿Qué cambio sería proporcionado?** Si corresponde que la escuela lo resuelva con sus propios recursos, o si la situación excede su competencia y requiere activar redes y derivar, sin improvisar.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un domingo a la noche, en el chat grupal de un curso de cuarto año, una broma sobre el aspecto físico de una estudiante deriva en una cadena de comentarios cada vez más hirientes. Varios compañeros participan, algunos riendo, otros en silencio. La estudiante afectada no responde nada en el chat, pero el lunes llega a la escuela visiblemente angustiada y le cuesta entrar al aula donde está el resto del curso. Una preceptora lo nota y se pregunta si le corresponde a la escuela hacer algo con una conversación que pasó un domingo, fuera del horario escolar, en un grupo que los propios estudiantes armaron.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: un conflicto que empezó y se desarrolló enteramente fuera del edificio y del horario escolar llegó, el lunes, a afectar directamente la convivencia del curso y el bienestar de una estudiante dentro de la escuela. Participan la estudiante afectada, que hoy no puede entrar tranquila a su propia aula; los compañeros que participaron de la cadena de comentarios, algunos activamente y otros por silencio; y la escuela, que recién se entera el lunes de algo que ya estaba instalado.',
        ],
        nota: '*(Acá me pregunto: ¿el hecho de que esto haya pasado un domingo, fuera de la escuela, cambia en algo lo que la estudiante está sintiendo hoy, dentro del aula?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la convivencia del curso y los derechos de la estudiante afectada, ambos claramente vinculados con la vida escolar, aunque el hecho que los originó haya ocurrido en otro espacio y otro momento. La escuela habita un territorio híbrido: lo que importa no es dónde empezó el conflicto, sino que hoy está afectando la convivencia dentro del aula.',
          'Qué condiciones sociotécnicas intervienen: el chat del curso funciona, de hecho, como una extensión del espacio escolar —ahí se organizan tareas, se habla del curso, participan todos los estudiantes del mismo grupo—, aunque nadie lo haya definido institucionalmente como tal. La escuela no tiene, hasta este momento, ningún protocolo claro sobre qué hacer con conflictos de este tipo, lo que deja a la preceptora decidiendo sola, sin ningún criterio previamente acordado.',
        ],
        nota: '*(Acá me pregunto: si este chat es, en los hechos, donde el curso se organiza y convive, ¿por qué no iba a ser también donde la escuela tiene algo que mirar?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: la escuela puede y debe intervenir, porque la situación afecta directamente la convivencia del curso hoy, dentro del ámbito escolar — esto no excede su competencia educativa, no requiere derivar a otra institución. Lo proporcionado es trabajar el conflicto dentro de los espacios de convivencia que la escuela ya tiene, conversar primero con la estudiante afectada sobre lo que necesita, y después abordar con el curso completo lo que pasó, sin exponerla ni convertir el abordaje en una sanción improvisada decidida por una sola persona.',
        ],
        nota: '*(Acá me pregunto: ¿esta situación necesita una sanción, una conversación de convivencia, o las dos cosas? ¿Quién en la escuela debería decidirlo, no solo la preceptora que lo notó primero?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la escuela: no le corresponde tratar esto como si excediera su competencia y derivarlo a otra institución sin necesidad — es, en esencia, un conflicto de convivencia entre estudiantes del mismo curso, del tipo que la escuela sabe y debe abordar.',
          'Qué podría salir mal: que la escuela decida no intervenir porque "pasó afuera", dejando que la estudiante afectada siga sola con algo que ya le está afectando la vida escolar; o que, al revés, improvise una sanción severa sin ningún protocolo claro, sin haber escuchado primero a la estudiante sobre qué necesita. Lo que ajustaría para la próxima vez: que la escuela tenga, de antemano, un criterio claro y conocido sobre cuándo un conflicto que empieza en un chat del curso le corresponde atender, para que nadie tenga que decidirlo solo, en el momento, sin ningún marco previo.',
        ],
        nota: '*(Acá me pregunto: ¿cuántos otros chats de curso existen hoy en mi escuela que, en los hechos, ya son parte de la vida escolar, aunque nadie los haya reconocido institucionalmente como tales?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué corresponde: que la escuela lo aborde transversalmente, que aplique un protocolo proporcional, o que la situación exceda su competencia y haya que derivar. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Varios estudiantes de un curso comparten, en sus redes personales, noticias falsas sobre un tema de actualidad, sin verificarlas. Un docente de ciencias sociales lo nota y decide dedicar una clase a analizar, con ejemplos reales traídos por los propios estudiantes, cómo identificar una fuente confiable.',
        analisis:
          '¿Qué corresponde acá? Que la escuela lo aborde transversalmente. No hay ningún conflicto de convivencia ni ninguna situación que exceda lo educativo: es exactamente el tipo de problema real —desinformación— que la Pedagogía Cívica Digital puede trabajar dentro de una materia existente, sin necesidad de una asignatura aparte ni de ningún protocolo especial.',
        nota: '*(Si elegiste "protocolo proporcional" o "derivar": ninguna de las dos corresponde acá, porque no hay ningún hecho que proteger, sancionar o derivar — es un contenido para enseñar, no un incidente para resolver.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Dos estudiantes del mismo curso tienen un conflicto que empezó en un chat grupal un fin de semana: se cruzaron comentarios hirientes que afectaron el clima del curso el lunes siguiente. No hay ninguna amenaza grave ni ningún indicio de un delito: es un conflicto de convivencia entre pares.',
        analisis:
          '¿Qué corresponde acá? Que la escuela aplique un protocolo proporcional. La situación sí le corresponde a la escuela, porque afecta la convivencia del curso dentro del ámbito escolar, pero no excede lo que la institución puede resolver con sus propias herramientas: un espacio de convivencia, una conversación con los involucrados, una intervención acorde a lo que realmente pasó, sin necesidad de derivar a otra institución.',
        nota: '*(Si elegiste "transversalmente" o "derivar": no es un contenido para dar en clase, es un conflicto concreto que ya ocurrió; y tampoco excede la competencia de la escuela, que tiene herramientas propias de convivencia para este tipo de situación.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Una familia le cuenta a la escuela que su hija viene recibiendo mensajes de un adulto desconocido a través de un videojuego, con un patrón que genera sospecha de grooming. El hecho involucra a alguien externo a la comunidad escolar y tiene características que podrían constituir un delito.',
        analisis:
          '¿Qué corresponde acá? La situación excede la competencia educativa y hay que derivar. Esto no es un conflicto entre estudiantes que la escuela pueda resolver con sus propias herramientas de convivencia, ni un contenido para trabajar en una clase: involucra a una persona ajena a la comunidad escolar y una posible situación de abuso, que requiere activar redes de derivación —a la familia, a organismos especializados— sin que la escuela intente resolverlo por su cuenta ni improvise una respuesta.',
        nota: '*(No hay una sola forma correcta de derivar en este caso, pero sí está claro que no corresponde que la escuela lo gestione sola: la madurez institucional acá consiste, precisamente, en activar redes y derivar sin improvisación.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de un equipo directivo sobre dos situaciones distintas que les llegaron el mismo mes. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Lo que pasa en los chats de los chicos los fines de semana no es asunto nuestro. Si quieren pelearse fuera de la escuela, que lo resuelvan ellos, nosotros no tenemos por qué meternos.',
      citaB:
        'Ante la sospecha de grooming que nos contó esa familia, vamos a investigar nosotros mismos quién es esa persona y a confrontarla antes de avisar a nadie más, para resolverlo rápido y con discreción.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** desconoce que la escuela habita un territorio híbrido: una situación que empezó fuera del edificio puede, de todas formas, afectar la convivencia dentro de él, y en ese caso sí le corresponde a la escuela intervenir, no desentenderse.',
      errorB:
        '**Comentario B** comete el error opuesto: trata como propia una situación que excede claramente la competencia educativa. Investigar o confrontar por cuenta propia una posible situación de grooming no es madurez institucional: es, exactamente, la improvisación que el capítulo advierte que hay que evitar cuando corresponde activar redes y derivar.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno evaluó primero qué le correspondía realmente a la escuela. Uno descartó una situación que sí era suya por haber empezado "afuera"; el otro se quedó con una situación que ya no era suya, por querer resolverla sin ayuda.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer cuándo una situación ocurrida fuera del edificio adquiere relevancia escolar',
        enunciado: 'Un conflicto entre dos estudiantes del mismo curso empezó en un chat un fin de semana y, el lunes, afecta visiblemente el clima del aula. ¿Qué dice el capítulo sobre si le corresponde o no a la escuela intervenir?',
        opciones: [
          { id: 'a', texto: 'Le corresponde, porque la situación adquiere relevancia escolar al afectar la convivencia dentro del ámbito escolar, sin importar dónde haya comenzado.' },
          { id: 'b', texto: 'No le corresponde, porque el conflicto ocurrió fuera del horario y del edificio escolar.' },
          { id: 'c', texto: 'Depende exclusivamente de si los estudiantes usaron dispositivos personales o institucionales.' },
          { id: 'd', texto: 'Le corresponde solo si algún docente estuvo presente quando ocurrió el conflicto original.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo es explícito en que una situación puede adquirir relevancia escolar aunque parte haya ocurrido fuera del edificio, cuando afecta convivencia, derechos o procesos educativos.',
          c: 'El tipo de dispositivo usado no es el criterio que define la relevancia escolar: lo que importa es si la situación afecta la convivencia, los derechos o los procesos educativos de la comunidad.',
          d: 'La presencia de un docente en el momento original no es el criterio: lo que define la relevancia escolar es el efecto de la situación sobre la convivencia, no quién estuvo presente cuando ocurrió.',
        },
      },
      {
        objetivo: 'entender la Pedagogía Cívica Digital como un enfoque transversal, no una asignatura separada, que atraviesa áreas mediante problemas reales',
        enunciado:
          'Un docente de ciencias sociales dedica una clase a analizar con sus estudiantes cómo verificar una noticia, a partir de un caso real de desinformación que ellos mismos compartieron. ¿Qué principio del capítulo refleja esta decisión?',
        opciones: [
          { id: 'a', texto: 'Que la ciudadanía digital siempre debería enseñarse en una materia aparte, nunca dentro de otra.' },
          { id: 'b', texto: 'Que la Pedagogía Cívica Digital puede atravesar áreas existentes mediante problemas reales, sin necesidad de convertirse en una asignatura separada.' },
          { id: 'c', texto: 'Que las ciencias sociales son la única materia habilitada para abordar temas de ciudadanía digital.' },
          { id: 'd', texto: 'Que este tipo de contenido solo debería darse si hay un conflicto grave que lo justifique.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo plantea exactamente lo contrario: la ciudadanía digital no necesita convertirse siempre en asignatura separada.',
          c: 'El capítulo no restringe esto a una sola materia: puede atravesar distintas áreas, según qué problema real se presente.',
          d: 'No hace falta ningún conflicto grave para trabajar estos contenidos: el ejemplo de la situación es, precisamente, un contenido pedagógico aprovechado a partir de algo que ya estaba pasando, no una respuesta a una crisis.',
        },
      },
      {
        objetivo: 'evaluar si las reglas y protocolos de una institución son comprensibles y proporcionales',
        enunciado:
          'Una escuela aplica la misma sanción severa tanto para un comentario aislado entre estudiantes como para una situación sostenida de hostigamiento digital, sin distinguir la gravedad de cada caso. ¿Qué le falta a esta forma de aplicar las reglas, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: aplicar siempre la misma sanción garantiza igualdad de trato.' },
          { id: 'b', texto: 'Le falta que la sanción sea todavía más severa en todos los casos.' },
          { id: 'c', texto: 'Le falta proporcionalidad: las restricciones y protocolos deben ser comprensibles y proporcionales a cada situación.' },
          { id: 'd', texto: 'Le falta que la escuela deje de aplicar cualquier tipo de sanción.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Tratar igual situaciones de distinta gravedad no es garantía de justicia: el capítulo pide explícitamente proporcionalidad, no uniformidad.',
          b: 'Aumentar la severidad en todos los casos no resuelve el problema de fondo, que es la falta de distinción según la gravedad real de cada situación.',
          d: 'El capítulo no cuestiona la existencia de sanciones o protocolos: cuestiona que no sean proporcionales ni comprensibles.',
        },
      },
      {
        objetivo: 'identificar cuándo una situación excede la competencia educativa y requiere activar redes y derivar sin improvisar',
        enunciado:
          'Una familia le informa a la escuela sobre una posible situación de grooming que involucra a un adulto externo a la comunidad escolar. El equipo directivo decide investigar por su cuenta antes de avisar a cualquier otra institución. ¿Qué error señala el capítulo frente a esta decisión?',
        opciones: [
          { id: 'a', texto: 'Ningún error: investigar primero por cuenta propia es la forma más eficiente de resolverlo.' },
          { id: 'b', texto: 'El error de no aplicar una sanción escolar inmediata al adulto involucrado.' },
          { id: 'c', texto: 'El error de haber escuchado a la familia en primer lugar.' },
          { id: 'd', texto: 'El error de no reconocer que la situación excede la competencia educativa, cuando la madurez institucional consiste en activar redes y derivar sin improvisación.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Investigar por cuenta propia una situación de este tipo es exactamente la improvisación que el capítulo advierte que hay que evitar cuando una situación excede la competencia educativa.',
          b: 'La escuela no tiene competencia para sancionar a una persona externa a la comunidad escolar: ese no es el tipo de respuesta que corresponde en este caso.',
          c: 'Escuchar a la familia no es el error: el error está en lo que la escuela decide hacer después, por su cuenta, con esa información.',
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
        muestra: 'Se desentiende de cualquier situación que haya ocurrido fuera del edificio escolar, o improvisa una intervención propia sobre algo que excede la competencia educativa.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo le corresponde a la escuela, pero no distingue con precisión si debe abordarse transversalmente, con un protocolo propio, o derivando a otra instancia.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres situaciones, identifica cuál corresponde en un caso concreto y propone una respuesta proporcionada, sin improvisar ni desentenderse.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cómo un problema real puede trabajarse transversalmente sin crear una asignatura nueva, y evalúa si las reglas y protocolos existentes son comprensibles y proporcionales.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: qué hace que una situación "de afuera" se vuelva asunto de la escuela, por qué la Pedagogía Cívica Digital no necesita ser una materia aparte, y cuándo corresponde resolver adentro versus derivar afuera. Lo que cambia, a partir de acá, es cómo mirás tu propia escuela: qué parte de lo digital ya está, sin que nadie lo haya planeado, dentro de su territorio.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde algo digital esté atravesando un espacio presencial, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si corresponde abordarlo transversalmente, con protocolo propio, o derivando— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: el conflicto que empezó un domingo en un chat y llegó al aula el lunes. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué otros espacios digitales de tu escuela —chats de curso, grupos de familias, plataformas— ya forman parte de su territorio híbrido sin que nadie lo haya reconocido así? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Los tres ámbitos del aprendizaje cívico, según UNESCO',
      objetivo:
        'Conocer el marco internacional de la Educación para la Ciudadanía Mundial de UNESCO, y usar sus tres ámbitos de aprendizaje para diseñar una Pedagogía Cívica Digital transversal, sin necesidad de una asignatura separada.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En 2015, UNESCO publicó Educación para la ciudadanía mundial: temas y objetivos de aprendizaje, la primera guía pedagógica internacional sobre el tema, resultado de un proceso extenso de investigación y consulta con especialistas de distintas regiones del mundo. El documento organiza el aprendizaje ciudadano en tres ámbitos, que corresponden a los cuatro pilares del informe La educación encierra un tesoro: aprender a conocer, aprender a hacer, aprender a vivir juntos y aprender a ser.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El ámbito cognitivo son las capacidades de adquisición de conocimientos y reflexión necesarias para comprender mejor el mundo y sus complejidades. El ámbito socioemocional son los valores, actitudes y competencias sociales que contribuyen al desarrollo afectivo, psicosocial y físico, y que permiten vivir con los demás de forma respetuosa y pacífica. El ámbito conductual es la conducta, el desempeño, la aplicación práctica y el compromiso — no alcanza con saber y sentir, hace falta además actuar.',
        },
        {
          tipo: 'parrafo',
          texto:
            'UNESCO es explícita en que estos tres ámbitos están interrelacionados e integrados en el proceso de aprendizaje, y no deben entenderse como procesos diferenciados. Esto conecta directamente con la idea de que la Pedagogía Cívica Digital no necesita convertirse en una asignatura separada: un mismo problema real —desinformación, privacidad, un conflicto grupal en un chat— puede trabajar, a la vez, conocimiento (entender cómo funciona), actitud (empatía y respeto hacia quienes participan) y acción (qué hacer frente a eso), sin fragmentarlos en materias distintas.',
        },
      ],
      preguntaDetonadora: 'Cuando tu escuela trabaja un tema de ciudadanía digital, ¿lo hace apuntando solo a que los estudiantes "sepan" algo, o también a que sientan y actúen distinto?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Los tres ámbitos de un mismo problema" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Tomá una situación ya trabajada en esta temática (por ejemplo, el conflicto del chat de curso). En grupos, identifican qué aprendizaje cognitivo, qué aprendizaje socioemocional y qué aprendizaje conductual podría trabajarse a partir de esa misma situación.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñar sin crear una materia nueva" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un problema real de ciudadanía digital (el mismo de "De dónde partimos", u otro de esta temática).',
                'Eligen una materia existente donde ese problema podría trabajarse de forma transversal.',
                'Diseñan una actividad breve para esa materia que incluya, a la vez, un componente cognitivo, uno socioemocional y uno conductual, siguiendo el marco de UNESCO.',
                'Presentan su diseño y explican cómo integraron los tres ámbitos sin fragmentarlos.',
              ],
            },
          ],
        },
      ],
      frase: '"Conocer, sentir y actuar no son tres clases distintas: son tres caras del mismo aprendizaje cívico."',
      glosario: ['Educación para la Ciudadanía Mundial', 'Dimensión cognitiva', 'Dimensión socioemocional', 'Dimensión conductual', 'Pedagogía Cívica Digital'],
      referencias: [
        'UNESCO (2015). Educación para la ciudadanía mundial: temas y objetivos de aprendizaje. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué un conflicto que pasó un domingo, fuera de la escuela, puede de todas formas ser asunto de la escuela el lunes?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'La Escuela como Espacio Cívico, en una tarjeta',
      parrafos: [
        'La escuela habita un territorio híbrido donde conflictos, producciones y relaciones atraviesan espacios físicos y digitales. Una situación puede adquirir relevancia escolar aunque parte haya ocurrido fuera del edificio, cuando afecta convivencia, derechos o procesos educativos vinculados con la comunidad.',
        '**Pedagogía Cívica Digital:** integra competencias técnicas con pensamiento crítico, derechos, convivencia y participación. No necesita convertirse en asignatura separada: puede atravesar áreas mediante problemas reales.',
        '**Proporcionalidad y derivación:** la escuela también educa mediante sus reglas, plataformas y respuestas institucionales. Restricciones y protocolos deben ser comprensibles y proporcionales. Cuando una situación excede competencia educativa, la madurez institucional consiste en activar redes y derivar sin improvisación.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Infancia y Crianza. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referencias: ['John Dewey', 'Elinor Ostrom', 'Beth Noveck', 'Oscar Oszlak'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'La escuela como espacio de aprendizaje cívico no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[ESCUELA_ESPACIO_CIVICO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
