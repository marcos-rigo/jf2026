// Contenido de /tematicas/deteccion-respuesta-y-reparacion. Misma forma que
// lib/riesgo-proteccion-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/deteccion-respuesta/ficha-aula';

export const DETECCION_RESPUESTA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'responder-y-reparar', number: '05', label: 'Responder y reparar', shortLabel: 'Responder' },
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
  responderYReparar: {
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
    titulo: 'Detección, Respuesta y Reparación',
    subtitulo: 'De vigilar a acompañar en cinco momentos',
    bajada:
      'La prevención continúa cuando aparece el daño. Detectar tempranamente puede reducir consecuencias; interrumpir una secuencia evita escalamiento; proteger disminuye exposición; responder activa medidas apropiadas; reparar busca recuperar agencia y prevenir repetición. Esta temática forma parte del grupo Violencia Digital de la plataforma y trabaja esos cinco momentos como una continuidad, no como pasos sueltos: prevenir no termina cuando algo ya pasó.',
    listaTitulo: 'Vas a:',
    lista: [
      'Reconocer los cinco momentos de esta continuidad —detectar, interrumpir, proteger, responder y reparar— y qué logra cada uno quey por qué el orden importa.',
      'Distinguir la detección de la vigilancia: escuelas, familias y organizaciones necesitan señales y canales de ayuda, no observar indiscriminadamente la vida privada de nadie. La proporcionalidad y la finalidad limitan cualquier estrategia preventiva.',
      'Entender que la reparación excede el cierre formal de un caso: una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información, mucho después de que el expediente se cerró.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer los cinco momentos de esta continuidad —detectar, interrumpir, proteger, responder y reparar— y qué logra cada uno: detectar tempranamente reduce consecuencias, interrumpir una secuencia evita escalamiento, proteger disminuye exposición, responder activa medidas apropiadas y reparar busca recuperar agencia y prevenir repetición.',
      'Distinguir la detección de la vigilancia indiscriminada, aplicando proporcionalidad y finalidad: escuelas, familias y organizaciones necesitan señales y canales de ayuda, no observar la vida privada de nadie sin límite.',
      'Entender que la reparación excede el cierre formal del caso: una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información, más allá de que el expediente esté cerrado.',
      'Usar este capítulo como lente de lectura frente a una situación concreta, evitando que la propia respuesta institucional produzca victimización secundaria y revisando las condiciones que permitieron que la situación ocurriera.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Detectar a tiempo, o vigilar todo el tiempo?',
    parrafos: [
      'Después de un hecho de violencia digital entre estudiantes que terminó mal, una escuela decide actuar: instala un sistema que monitorea las redes sociales públicas de todo el estudiantado, pide a las familias que compartan capturas de los chats de sus hijos "por las dudas", y empieza a revisar los celulares al azar en los recreos. La idea es simple: cuanto más se mire, antes se va a detectar el próximo problema. Durante los primeros meses, nadie reporta nada raro. Pero tampoco nadie en la escuela sabe si eso significa que no está pasando nada, o que los estudiantes simplemente aprendieron a esconder mejor lo que hacen frente a los adultos.',
      'La escuela confundió detectar con vigilar. Detectar tempranamente significa tener señales y canales de ayuda que funcionen; vigilar indiscriminadamente significa observar la vida privada de todos, sin ninguna proporcionalidad ni finalidad clara, con la esperanza de que algo aparezca. Lo segundo no garantiza lo primero: de hecho, puede lograr lo contrario, porque nadie cuenta lo que le pasa a quien lo está vigilando sin motivo. La escuela gastó energía y generó desconfianza, sin tener, al final, más capacidad real de detectar un problema a tiempo que antes de empezar.',
    ],
    problema:
      'Pensá en alguna medida de "cuidado" digital que conozcas —en una escuela, en una familia, en una organización— que se parezca más a observar todo que a abrir un canal real de ayuda. ¿Qué señal concreta podría reemplazar esa vigilancia, sin necesidad de mirarlo todo?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La prevención continúa cuando aparece el daño. Detectar tempranamente puede reducir consecuencias; interrumpir una secuencia evita escalamiento; proteger disminuye exposición; responder activa medidas apropiadas; reparar busca recuperar agencia y prevenir repetición. Son cinco momentos distintos, y cada uno cumple una función que los demás no reemplazan: interrumpir no es lo mismo que reparar, y proteger no es lo mismo que responder.',
      'La detección debe distinguirse de vigilancia. Escuelas, familias y organizaciones necesitan señales y canales de ayuda sin observar indiscriminadamente la vida privada. La proporcionalidad y la finalidad limitan cualquier estrategia preventiva: no cualquier medio para detectar a tiempo está justificado por el solo hecho de que la intención sea cuidar.',
      'La reparación excede el cierre formal del caso. Una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información. La respuesta institucional debe evitar victimización secundaria y revisar las condiciones que permitieron la situación — cerrar un expediente no es lo mismo que haber reparado lo que pasó.',
    ],
    preguntaCierre:
      'Pensá en alguna situación de tu escuela o tu entorno donde se haya "respondido" a un problema —con una sanción, una reunión, una medida puntual— sin que nadie preguntara después si la persona afectada había recuperado, realmente, su lugar en ese espacio.',
    fichaAula1: {
      titulo: 'Protocolo escolar ante situaciones de violencia digital: señales y acompañamiento',
      objetivo:
        'Conocer las señales que pueden indicar que un niño, niña o adolescente está atravesando una situación de violencia digital, y las pautas de acompañamiento del Protocolo Escolar vigente en la Ciudad de Buenos Aires, sin recurrir a la vigilancia indiscriminada.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Según el Protocolo Escolar ante situaciones de Violencia Digital del Ministerio de Educación de la Ciudad de Buenos Aires, se entiende por violencia digital a cualquier acción o conducta ejercida a través de medios tecnológicos —redes sociales, correos electrónicos, plataformas de mensajería o sitios web— que tenga como propósito acosar, intimidar, humillar, discriminar, difamar o vulnerar los derechos de una persona. Incluye conductas como el ciberacoso, la difusión no consentida de imágenes o de contenido íntimo, el hackeo de cuentas, el espionaje digital o la publicación de información personal sin autorización.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Detectar a tiempo no requiere observarlo todo. El protocolo y su guía complementaria para familias señalan indicadores concretos a los que prestar atención: cambios en las rutinas de descanso y alimentación, dolores físicos como dolor de cabeza o de estómago, conductas de aislamiento o distanciamiento de las redes sociales propias, temor o nerviosismo al conversar sobre la actividad en línea, menor interés en actividades escolares o sociales que antes se disfrutaban, cambios abruptos en el rendimiento escolar, y ocultar lo que se está viendo en la pantalla ante la presencia de un adulto. Ninguna señal aislada confirma nada: son motivos para abrir una conversación, no para iniciar una vigilancia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Frente a estas señales, el acompañamiento recomendado no pasa por revisar dispositivos sin aviso: pasa por habilitar espacios de diálogo seguros y confiables, validar lo que la persona siente sin juzgarla, y trabajar en conjunto con la escuela para recibir orientación. La prevención, en la misma línea, se construye con comunicación abierta y acuerdos claros sobre el uso de la tecnología, no con control unilateral.',
        },
      ],
      preguntaDetonadora:
        'Si tuvieras que elegir entre revisar el celular de un estudiante sin avisarle o abrir una conversación honesta con él, ¿cuál te daría información más confiable?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Señales, no certezas" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá la lista de señales de la guía (cambios en el sueño, aislamiento, ocultar la pantalla, etc.). En grupos, discuten: ¿por qué ninguna de estas señales, por sí sola, confirma una situación de violencia digital? ¿Qué tienen en común todas: observación cercana o vigilancia activa?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Protocolo de acompañamiento, no de control" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben una señal de alerta genérica (sin detalles de contenido) detectada en un estudiante.',
                'Diseñan tres pasos de acompañamiento que no impliquen revisar dispositivos sin consentimiento: cómo abrir la conversación, qué validar, a quién de la escuela involucrar.',
                'Comparan su protocolo con el de otro grupo: ¿en algún punto se acercaron, sin darse cuenta, a una forma de vigilancia?',
              ],
            },
          ],
        },
      ],
      frase: 'Detectar a tiempo no es mirarlo todo: es construir un canal donde a alguien le den ganas de contar lo que le pasa.',
      glosario: ['Violencia digital', 'Señal de alerta', 'Vigilancia indiscriminada', 'Proporcionalidad', 'Acompañamiento'],
      referencias: [
        '"Guía para familias: Violencia digital", basada en el Protocolo Escolar ante situaciones de Violencia Digital — Ministerio de Educación del Gobierno de la Ciudad de Buenos Aires (2024).',
      ],
    },
  },
  responderYReparar: {
    titulo: 'Responder y reparar',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: cuando aparecen señales o daño, prevenir significa también detectar, interrumpir, proteger, responder y reparar. La detección debe ser proporcional para no convertirse en vigilancia indiscriminada, y la reparación debe incluir recuperación de agencia.',
        'El capítulo nombra como referencia a Urie Bronfenbrenner, el CDC, la OMS, Robert Gordon y el Institute of Medicine, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación donde aparece el daño, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — tratar la vigilancia total como sinónimo de buena detección, o un caso cerrado formalmente como sinónimo de reparación lograda, son dos formas distintas de ese mismo atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, eso significa que detectar, interrumpir, proteger, responder y reparar no pueden recaer en una sola persona ni en una sola institución actuando sola.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que más observación siempre signifique mejor detección: la proporcionalidad y la finalidad limitan cualquier estrategia preventiva, y escuelas, familias y organizaciones necesitan señales y canales de ayuda, no vigilancia indiscriminada.',
          'No es que los cinco momentos sean intercambiables: interrumpir una secuencia no reemplaza responder, y responder no reemplaza reparar.',
          'No es que cerrar un expediente equivalga a reparar lo que pasó: una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información mucho después del cierre formal.',
          'No es que la respuesta institucional sea automáticamente reparadora por el solo hecho de intervenir: puede producir victimización secundaria si no revisa con cuidado cómo actúa.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** En qué momento de la cadena —detección, interrupción, protección, respuesta o reparación— está la situación, y qué parte de la persona o la institución está en juego ahí.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si la estrategia de detección es proporcional a su finalidad, o si se deslizó hacia la vigilancia; y qué le falta todavía a la reparación, más allá de lo que ya se resolvió formalmente.',
        '**¿Qué cambio sería proporcionado?** Un cambio que avance en la cadena sin saltarse ningún momento, y que incluya recuperación de agencia, no solo el cierre administrativo del caso.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una docente nota que un estudiante empezó a faltar seguido los días que tiene educación física, que dejó de sentarse con el mismo grupo de siempre, y que oculta la pantalla del celular cuando algún adulto se acerca. Conversa con él con calma, sin presionarlo, y el estudiante termina contando que un compañero viene compartiendo, en un grupo de chat del curso, capturas de pantalla sacadas de conversaciones privadas suyas, con comentarios burlones. La escuela interviene: habla con el estudiante que compartió las capturas, aplica una sanción según las normas de convivencia, y comunica el cierre del caso a ambas familias. El expediente queda cerrado en dos semanas. Un mes después, el estudiante sigue sin volver a sentarse con su grupo de siempre, y sigue faltando los días de educación física.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la detección funcionó bien — la docente identificó señales reales (ausentismo selectivo, aislamiento, ocultar la pantalla) sin necesidad de vigilar a nadie, y eso permitió interrumpir la difusión de las capturas a tiempo. El problema apareció después: la escuela respondió con una sanción y dio por cerrado el caso, pero nadie volvió a preguntarle al estudiante cómo estaba, ni trabajó para que pudiera volver a sentirse parte de su grupo.',
        ],
        nota: '*(Acá me pregunto: ¿el expediente cerrado significa que el problema terminó, o solo que la parte administrativa terminó?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la recuperación de agencia del estudiante — volver a participar del espacio y recuperar la confianza que tenía antes en su grupo — que es exactamente lo que el capítulo define como parte de la reparación, y que excede el cierre formal del caso.',
          'Qué condiciones sociotécnicas intervienen: la escuela tiene un procedimiento claro para sancionar, pero no tiene ningún paso definido para después de la sanción — nadie tiene asignada la tarea de chequear, semanas más tarde, cómo sigue la persona afectada. La detección y la interrupción funcionaron porque hubo señales claras y alguien que las supo leer; la reparación no funcionó porque no había ningún procedimiento equivalente para ese momento de la cadena.',
        ],
        nota: '*(Acá me pregunto: ¿por qué la escuela tiene un protocolo claro para sancionar, pero ninguno para acompañar después?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: agregar, después del cierre formal de cualquier caso de este tipo, un seguimiento breve y pautado — por ejemplo, una conversación informal con el estudiante a las dos y a las cuatro semanas, para ver cómo está volviendo a participar del grupo, sin convertir eso en una exposición pública ni en una nueva forma de vigilancia. No se trata de reabrir el expediente: se trata de completar un momento de la cadena que todavía faltaba.',
        ],
        nota: '*(Acá me pregunto: ¿ese seguimiento tendría que ser responsabilidad de la misma persona que llevó el caso, o de alguien distinto para no hacerlo sentir "bajo investigación" otra vez?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la escuela: no le corresponde sentir que la sanción aplicada estuvo mal, ni que todo el proceso de detección e interrupción fue un fracaso — esas dos partes funcionaron bien y son las que permitieron frenar la situación a tiempo.',
          'Qué podría salir mal: que, al no haber seguimiento, el estudiante siga alejado de su grupo sin que nadie lo note, y que eso termine afectando su rendimiento o su vínculo con la escuela de una forma que nadie conecte con el caso ya "cerrado"; o que, para evitar ese error, la escuela empiece a monitorear de cerca al estudiante de una forma que él viva como una vigilancia nueva, en vez de como acompañamiento. Lo que ajustaría para la próxima vez: que todo caso de violencia digital tenga, desde el principio, una instancia de reparación programada, tan prevista como la sanción misma, y no algo que depende de que alguien se acuerde de preguntar.',
        ],
        nota: '*(Acá me pregunto: en los últimos casos que mi escuela cerró, ¿alguien volvió a preguntarle a la persona afectada cómo estaba, semanas después?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir en qué momento de la cadena estamos: detectar/interrumpir, proteger/responder, o reparar. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un docente nota que, en el último mes, un estudiante que siempre participaba activamente en clase empezó a quedarse callado, revisa el celular con ansiedad apenas suena una notificación, y pidió cambiar de lugar en el aula sin dar motivos claros. El docente decide hablar con él con calma, en un momento tranquilo, para preguntarle cómo está.',
        analisis:
          '¿En qué momento de la cadena estamos? Detectar/interrumpir. El docente identificó señales concretas —cambio de comportamiento, ansiedad ante notificaciones, pedido de cambio de lugar— sin necesidad de revisar el celular del estudiante ni vigilar sus redes. Acercarse a conversar en ese momento es, además, una forma de interrumpir a tiempo una secuencia que recién se está detectando, antes de que escale.',
        nota:
          '*(Si elegiste "proteger/responder" o "reparar": todavía no hay una situación confirmada ni una medida activada — estamos en el momento de leer señales y abrir una conversación, el paso previo a cualquier respuesta concreta.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Después de confirmar que un grupo de estudiantes estaba excluyendo sistemáticamente a una compañera de los chats del curso y compartiendo comentarios despectivos sobre ella, la escuela convoca a una reunión con las familias involucradas, aplica las medidas de convivencia correspondientes, y pide que se reincorpore a la compañera afectada a los grupos de chat del curso.',
        analisis:
          '¿En qué momento de la cadena estamos? Proteger/responder. La escuela ya identificó y confirmó la situación, y está activando medidas concretas: la reunión, la sanción según las normas de convivencia, y la reincorporación a los chats son acciones que buscan disminuir la exposición de la estudiante afectada y responder con medidas apropiadas a lo que ya se confirmó.',
        nota:
          '*(Si elegiste "detectar/interrumpir": esa etapa ya pasó — acá la escuela ya tiene certeza sobre lo que ocurrió y está actuando en consecuencia, no todavía buscando confirmar señales.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Tres semanas después de que una escuela cerrara formalmente un caso de difusión de capturas privadas entre estudiantes, una orientadora se reúne de forma informal con el estudiante afectado para ver cómo se siente respecto a su grupo de compañeros, si necesita algún apoyo adicional para volver a participar de las actividades grupales, y si hay algo de la situación que todavía le preocupe.',
        analisis:
          '¿En qué momento de la cadena estamos? Reparar. El caso ya fue respondido formalmente —hubo sanción, hubo cierre de expediente—, pero esta reunión atiende específicamente lo que el capítulo define como reparación: la posibilidad de volver a participar del espacio y recuperar confianza, que excede el cierre formal del caso.',
        nota:
          '*(No hay una sola forma correcta de hacer este seguimiento, pero sí es clave que exista: sin este paso, la cadena queda incompleta aunque el expediente esté cerrado.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes del equipo directivo sobre cómo manejar los casos de violencia digital en la escuela. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'La única forma de detectar estos casos a tiempo es monitorear de cerca las redes sociales y los chats de todos los estudiantes. Cuanto más miremos, antes nos vamos a enterar.',
      citaB:
        'Una vez que aplicamos la sanción correspondiente y avisamos a las familias, el caso queda resuelto. No hace falta hacer nada más después de eso.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** confunde detectar con vigilar indiscriminadamente. El capítulo es explícito: escuelas, familias y organizaciones necesitan señales y canales de ayuda, no observar la vida privada de todos sin proporcionalidad ni finalidad. Monitorear todo no garantiza detectar mejor, y puede generar la desconfianza que hace que nadie cuente lo que le pasa.',
      errorB:
        '**Comentario B** confunde responder con reparar. Aplicar una sanción y comunicar el cierre formal es parte de la respuesta, pero la reparación excede ese cierre: una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información mucho después de que el expediente quedó cerrado.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno distingue bien los momentos de la cadena. Uno extiende la detección hasta convertirla en vigilancia permanente; el otro da por completa la cadena entera apenas se cumple la etapa de responder, dejando afuera la reparación.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer los cinco momentos —detectar, interrumpir, proteger, responder, reparar— y qué logra cada uno',
        enunciado:
          'Una escuela, después de confirmar un caso de difusión no autorizada de contenido entre estudiantes, convoca a las familias y aplica una sanción. ¿Qué momento de la cadena corresponde a esta acción?',
        opciones: [
          { id: 'a', texto: 'Detectar.' },
          { id: 'b', texto: 'Interrumpir.' },
          { id: 'c', texto: 'Responder.' },
          { id: 'd', texto: 'Reparar.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Detectar es identificar señales tempranas de que algo puede estar pasando. Acá la escuela ya confirmó el hecho y está actuando en consecuencia, un momento posterior.',
          b: 'Interrumpir es frenar una secuencia en curso para evitar que escale. Convocar a las familias y aplicar una sanción ya es una medida posterior a esa interrupción.',
          d: 'Reparar excede esta acción: implica, además de la sanción, trabajar para que la persona afectada recupere confianza y pueda volver a participar del espacio — algo que no está descripto en esta acción puntual.',
        },
      },
      {
        objetivo: 'distinguir la detección de la vigilancia indiscriminada, aplicando proporcionalidad y finalidad',
        enunciado:
          'Una organización decide revisar sistemáticamente las conversaciones privadas de todos sus integrantes "para detectar a tiempo cualquier problema". ¿Qué dice el capítulo sobre esta estrategia?',
        opciones: [
          {
            id: 'a',
            texto:
              'Que la detección debe distinguirse de la vigilancia: se necesitan señales y canales de ayuda, no observar indiscriminadamente la vida privada, porque la proporcionalidad y la finalidad limitan cualquier estrategia preventiva.',
          },
          { id: 'b', texto: 'Que es la forma más efectiva de detección temprana, porque cuanto más se observa, antes se detecta un problema.' },
          { id: 'c', texto: 'Que revisar conversaciones privadas solo es un problema si alguien se entera de que se está haciendo.' },
          { id: 'd', texto: 'Que ninguna forma de observación es válida bajo ningún concepto, ni siquiera señales visibles de alerta.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no plantea que más observación equivalga a mejor detección: señala explícitamente que esto puede convertirse en vigilancia indiscriminada, que no es lo mismo que detectar bien.',
          c: 'El problema no es que se descubra la vigilancia: es que observar la vida privada sin proporcionalidad ni finalidad ya es, en sí mismo, un exceso, se sepa o no se sepa.',
          d: 'El capítulo no rechaza toda forma de atención a señales: lo que cuestiona es la observación indiscriminada, no la detección basada en indicadores proporcionados y con una finalidad clara.',
        },
      },
      {
        objetivo:
          'entender que la reparación puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información, no solo cerrar un expediente',
        enunciado:
          'Tres semanas después de cerrar formalmente un caso, una escuela no hizo ningún seguimiento sobre cómo está el estudiante afectado. ¿Qué le falta a esta respuesta, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: una vez aplicada la sanción y comunicado el cierre, el proceso está completo.' },
          {
            id: 'b',
            texto:
              'Le falta la reparación, que excede el cierre formal del caso y puede implicar que la persona vuelva a participar del espacio, recupere confianza o limite la circulación de información.',
          },
          { id: 'c', texto: 'Le falta aplicar una sanción más severa a quien generó el daño.' },
          { id: 'd', texto: 'Le falta informar públicamente al resto del curso sobre lo sucedido.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo es explícito en que la reparación excede el cierre formal del caso — dar el proceso por completo en ese punto deja afuera, justamente, lo que falta.',
          c: 'El capítulo no vincula la reparación con el nivel de severidad de la sanción: se trata de un proceso distinto, centrado en la persona afectada, no en la gravedad del castigo.',
          d: 'Informar públicamente al curso puede, incluso, ir en contra de la reparación, al exponer innecesariamente a la persona afectada.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura evitando que la respuesta institucional produzca victimización secundaria',
        enunciado:
          'Al atender un caso de violencia digital, una institución repite a la persona afectada que cuente lo sucedido varias veces, ante distintas personas, sin coordinación entre sí. ¿Qué riesgo señala el capítulo frente a esto?',
        opciones: [
          { id: 'a', texto: 'Ningún riesgo: cuantas más veces se repita el relato, más precisa será la información recabada.' },
          { id: 'b', texto: 'El riesgo de que la sanción aplicada resulte insuficiente.' },
          { id: 'c', texto: 'El riesgo de que el caso se resuelva demasiado rápido.' },
          { id: 'd', texto: 'El riesgo de que la propia respuesta institucional produzca victimización secundaria, en lugar de reparar la situación.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo no sostiene que repetir el relato mejore la calidad de la respuesta: señala, al contrario, que la respuesta institucional debe evitar justamente este tipo de daño adicional.',
          b: 'La severidad de la sanción no es lo que está en juego en este riesgo: lo que está en juego es cómo el propio proceso trata a la persona afectada.',
          c: 'El problema descripto no es la velocidad de la resolución: es el daño que puede generar el propio proceso institucional mal coordinado.',
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
          'Confunde detección con vigilancia indiscriminada, o da por completa la cadena entera apenas se aplica una sanción, sin trabajar la reparación.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión en qué momento de la cadena se encuentra.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue los cinco momentos, identifica en cuál está una situación concreta y propone un cambio proporcionado que no se detiene en la respuesta formal.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una estrategia de detección se desliza hacia la vigilancia, y cuándo la propia respuesta institucional puede estar produciendo victimización secundaria.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: los cinco momentos de la cadena —detectar, interrumpir, proteger, responder y reparar—, la diferencia entre detección y vigilancia, y por qué la reparación excede el cierre formal de un caso. Lo que cambia, a partir de acá, es cómo mirás los procesos de tu escuela cuando algo sale mal: no solo si hubo una respuesta, sino si la cadena se completó entera.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde haya aparecido un daño digital, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —en qué momento de la cadena está la situación, y si la detección fue proporcional o se deslizó hacia la vigilancia— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la escuela que, para "detectar a tiempo", terminó observando indiscriminadamente la vida privada de sus estudiantes sin ganar en protección real. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué señal concreta podría haber reemplazado esa vigilancia? ¿Qué parte de la cadena —detectar, interrumpir, proteger, responder o reparar— falta hoy en tu escuela? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien la diferencia entre detectar a tiempo y vigilar todo el tiempo?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Detección, Respuesta y Reparación, en una tarjeta',
      parrafos: [
        'La prevención continúa cuando aparece el daño. Detectar tempranamente puede reducir consecuencias; interrumpir una secuencia evita escalamiento; proteger disminuye exposición; responder activa medidas apropiadas; reparar busca recuperar agencia y prevenir repetición.',
        '**Detección vs. vigilancia:** escuelas, familias y organizaciones necesitan señales y canales de ayuda, no observar indiscriminadamente la vida privada. La proporcionalidad y la finalidad limitan cualquier estrategia preventiva.',
        '**La reparación excede el cierre formal:** una persona puede necesitar volver a participar de un espacio, recuperar confianza o limitar la circulación de información. La respuesta institucional debe evitar victimización secundaria y revisar las condiciones que permitieron la situación.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Violencia Digital. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referenciasLista: ['Urie Bronfenbrenner', 'CDC', 'OMS', 'Robert Gordon', 'Institute of Medicine'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Detección, interrupción, respuesta y reparación no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[DETECCION_RESPUESTA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
