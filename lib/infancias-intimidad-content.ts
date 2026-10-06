// Contenido de /tematicas/infancias-intimidad-y-danos-sinteticos. Misma forma que
// lib/riesgo-proteccion-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/infancias-intimidad/ficha-aula';

export const INFANCIAS_INTIMIDAD_FALLBACK: Audiencia = 'docentes';

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
  { id: 'consentimiento-y-dano-sintetico', number: '05', label: 'Consentimiento y daño sintético', shortLabel: 'Consentimiento' },
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
  consentimientoYDanoSintetico: {
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
    titulo: 'Infancias, Intimidad y Daños Sintéticos',
    subtitulo: 'De vigilar a acompañar',
    bajada:
      'Niñas, niños y adolescentes son sujetos de derechos y participantes de comunidades digitales. La protección necesita reconocer autonomía progresiva, pertenencia y capacidad de expresión, evitando que el cuidado se convierta en vigilancia permanente. Esta temática forma parte del grupo Violencia Digital de la plataforma y trabaja esa tensión: cómo proteger sin invadir, y cómo responder cuando algo ya salió mal.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender la autonomía progresiva como el marco que debería guiar la protección, distinguiéndola de la vigilancia permanente, que trata el cuidado como control total en lugar de acompañamiento.',
      'Distinguir el intercambio íntimo consensuado entre adultos de la difusión no autorizada, comprendiendo que recibir un contenido nunca autoriza, por sí solo, a almacenarlo, modificarlo o distribuirlo.',
      'Reconocer que la IA añade representaciones sintéticas plausibles que pueden afectar identidad, intimidad y confianza, y que la respuesta no puede depender únicamente de que las personas detecten visualmente una falsificación.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer la autonomía progresiva como marco de protección, distinto de la vigilancia permanente: el cuidado necesita reconocer pertenencia y capacidad de expresión, no convertirse en control total.',
      'Distinguir el intercambio íntimo consensuado entre adultos de la difusión no autorizada, entendiendo que permitir recibir un contenido no autoriza automáticamente a almacenarlo, modificarlo o distribuirlo.',
      'Comprender por qué la respuesta frente a los daños sintéticos generados por IA no puede depender únicamente de que las personas detecten visualmente una falsificación, y qué más hace falta: alfabetización, mecanismos técnicos de procedencia, plataformas responsables e instituciones capaces de intervenir.',
      'Usar categorías diferenciadas para grooming, sextorsión y difusión no consentida, con respuestas que eviten la culpabilización de quien fue afectado.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Cuidar es lo mismo que vigilar todo?',
    parrafos: [
      'Una madre, preocupada después de escuchar sobre los riesgos de internet, instala en el celular de su hija de catorce años una aplicación que le permite leer todos sus mensajes, ver cada foto que recibe y saber, en tiempo real, dónde está. Se lo cuenta recién cuando la hija lo descubre por casualidad. La adolescente deja de usar su celular delante de su madre, empieza a borrar conversaciones por costumbre, y cuando algo la incomoda en una charla con una amistad, ya no se lo cuenta a nadie en su casa — prefiere resolverlo sola antes que explicarlo.',
      'La madre actuó desde la preocupación, no desde la desconfianza hacia su hija. Pero el resultado fue el opuesto al que buscaba: en vez de que su hija se sintiera acompañada para contarle lo que le pasa, aprendió a esconderlo. La vigilancia total no hizo que la adolescente estuviera más protegida: hizo que estuviera más sola frente a cualquier cosa que de verdad necesitara contar. El cuidado que se vuelve control permanente no es más cuidado: es un cuidado mal diseñado, que logra justo lo contrario de lo que se proponía.',
    ],
    problema:
      'Pensá en alguna forma de cuidado digital que conozcas —propia, de tu familia, de tu escuela— donde la intención era buena. ¿Esa forma de cuidado deja lugar a que la persona cuidada siga queriendo contar lo que le pasa, o la empuja a esconderlo?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Niñas, niños y adolescentes son sujetos de derechos y participantes de comunidades digitales. La protección necesita reconocer autonomía progresiva, pertenencia y capacidad de expresión, evitando que el cuidado se convierta en vigilancia permanente — un chico o una chica que participa de comunidades digitales no deja de ser sujeto de derechos por ser menor de edad, y el acompañamiento tiene que construirse con esa idea como punto de partida, no en contra de ella.',
      'Grooming, coerción sexual y sextorsión requieren comprender asimetrías, construcción gradual de confianza y consentimiento. El intercambio íntimo consensuado entre adultos no es equivalente a la difusión no autorizada; permitir recibir un contenido no autoriza automáticamente almacenarlo, modificarlo o distribuirlo — son dos cuestiones distintas, y confundirlas lleva a respuestas equivocadas frente a cada una.',
      'La IA añade representaciones sintéticas plausibles que pueden afectar identidad, intimidad y confianza. La respuesta no puede depender únicamente de que las personas detecten visualmente falsificaciones; requiere alfabetización, mecanismos técnicos de procedencia, plataformas responsables e instituciones capaces de intervenir — ninguna de esas piezas alcanza sola.',
    ],
    preguntaCierre:
      'Pensá en alguna forma de cuidado digital, propia o de tu entorno, que hoy dependa únicamente de que alguien "se dé cuenta a tiempo". ¿Qué otra pieza —alfabetización, un mecanismo técnico, una institución a la que recurrir— podría sostener ese cuidado si esa sola persona no llega a notarlo?',
    fichaAula1: {
      titulo: 'Grooming: qué es, cómo acompañar y dónde recurrir',
      objetivo:
        'Conocer qué es el grooming según la legislación argentina, reconocer señales generales de alerta sin convertir la vigilancia en la única forma de cuidado, y saber qué hacer y a dónde recurrir si se sospecha un caso.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'El grooming es el acoso sexual de una persona adulta hacia un niño, niña o adolescente a través de internet. En Argentina, es un delito incorporado al Código Penal en 2013 a través de la Ley 26.904.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Algunas señales generales pueden ayudar a prestar atención, sin que ninguna por sí sola confirme nada: cambios bruscos de comportamiento, un secretismo repentino alrededor del celular que antes no existía, ansiedad asociada a recibir o responder mensajes, o un aislamiento que no tenía antes. Ninguna de estas señales reemplaza una conversación abierta: son motivos para acercarse con cuidado, no para irrumpir.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Si se sospecha un caso de grooming, lo primero es acompañar sin culpabilizar: la responsabilidad nunca es de quien fue contactado. Conviene conservar la información disponible —capturas, mensajes— sin borrar nada, y no confrontar directamente a la persona que contactó al chico o la chica, porque eso puede hacer que borre pruebas o cambie de estrategia. El paso siguiente es reunir esa información y hacer la denuncia en la fiscalía especializada más cercana, o comunicarse con la línea 137, que brinda asesoramiento y acompañamiento las 24 horas.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La mejor prevención no es la vigilancia constante: es hablar del tema con anticipación y sin alarmismo, trabajar en conjunto la configuración de privacidad de las cuentas, y sobre todo sostener un vínculo de confianza donde el chico o la chica sienta que puede contar algo incómodo sin miedo a perder su celular o su libertad como castigo.',
        },
      ],
      preguntaDetonadora: 'Si un estudiante tuyo te contara que algo lo incomodó en una conversación online, ¿qué necesitaría sentir de vos para animarse a hacerlo?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Cuidar sin invadir" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, discuten la diferencia entre dos frases: "te reviso el celular todos los días" y "podés contarme lo que te incomode". Anotan qué transmite cada una, y cuál se parece más a lo que ellos mismos buscarían de un adulto.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Protocolo de acompañamiento" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben una situación breve y genérica (sin detalles de contenido) donde un adulto detecta señales de alerta en un estudiante.',
                'Arman un protocolo de tres pasos: cómo acercarse sin presionar, qué información conservar sin alterar, y a qué organismo recurrir (fiscalía especializada o línea 137).',
                'Presentan su protocolo y lo comparan con los de otros grupos.',
              ],
            },
          ],
        },
      ],
      frase: '"El mejor cuidado no es el que más controla: es el que deja la puerta abierta para que te cuenten lo que les pasa."',
      glosario: ['Grooming', 'Autonomía progresiva', 'Ley 26.904', 'Línea 137', 'Señales de alerta'],
      referencias: [
        '"Guía para madres, padres y docentes: grooming" — Argentina.gob.ar, Ministerio de Justicia, Con Vos en la Web.',
      ],
    },
  },
  consentimientoYDanoSintetico: {
    titulo: 'Consentimiento y daño sintético',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: infancia, intimidad y contenido sintético exigen trabajar consentimiento, autonomía progresiva y asimetrías de poder. Grooming, sextorsión y difusión no consentida necesitan categorías diferenciadas y respuestas que eviten culpabilización de quien fue afectado.',
        'El capítulo nombra como referencia a UNICEF, UNODC, Europol, INTERPOL y la literatura sobre violencias facilitadas por tecnología e ingeniería social, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación de esta temática, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — tratar cualquier intercambio íntimo como equivalente a una difusión no autorizada, o cualquier contenido sintético como detectable a simple vista, son dos formas distintas de ese mismo atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — acá, eso significa que ni la vigilancia individual de un adulto ni un filtro técnico alcanzan solos: hace falta alfabetización, mecanismos de procedencia, plataformas responsables e instituciones capaces, todo a la vez.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es tratar el cuidado como sinónimo de vigilancia permanente: la protección necesita reconocer autonomía progresiva, pertenencia y capacidad de expresión.',
          'No es asumir que recibir un contenido íntimo autoriza a hacer cualquier cosa con él: el intercambio consensuado entre adultos no equivale a la difusión no autorizada.',
          'No es esperar que las personas detecten a simple vista un contenido sintético: la respuesta necesita alfabetización, mecanismos técnicos de procedencia, plataformas responsables e instituciones capaces, no solo atención individual.',
          'No es culpabilizar a quien fue afectado por grooming, sextorsión o difusión no consentida: estas situaciones necesitan categorías diferenciadas y respuestas que no trasladen la responsabilidad a quien la sufrió.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la autonomía, la intimidad o la confianza de la persona afectada está en juego.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si hay una asimetría de poder siendo explotada, si se confundió recibir con autorizar, o si hay representación sintética de por medio — y qué piezas (alfabetización, procedencia técnica, plataforma, institución) están faltando.',
        '**¿Qué cambio sería proporcionado?** Un cambio que proteja sin convertirse en vigilancia, y que responda sin culpabilizar a quien fue afectado.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un docente recibe, en un grupo de WhatsApp de la escuela, una foto íntima que otra persona reenvió sin que nadie la pidiera. No sabe quién la tomó originalmente ni en qué circunstancias se compartió por primera vez — eso no es parte de lo que le llegó a él. Lo único que sabe es que ahora esa foto está en su celular, dentro de un grupo donde participan varios colegas, y que la persona que aparece en la imagen es una compañera de trabajo. No reenvía nada, pero tampoco sabe bien qué hacer: ¿debería borrarla? ¿Avisarle a alguien? ¿Guardarla por si hace falta como prueba?',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: alguien distribuyó, sin autorización, una imagen íntima de otra persona, y esa distribución llegó al docente sin que él la haya pedido ni buscado. Participan la persona que aparece en la imagen, sin saber todavía que esto está circulando; quien la reenvió al grupo, sin autorización para hacerlo; y el docente, que ahora tiene esa imagen en su propio celular sin haber hecho nada para conseguirla.',
        ],
        nota: '*(Acá me pregunto: el hecho de que la imagen me haya llegado sin que yo la pidiera, ¿me da algún derecho sobre qué hacer con ella?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: la intimidad y el consentimiento de la persona que aparece en la imagen. El intercambio original —sea cual haya sido— no es lo que está en juego acá: lo que está en juego es que alguien la distribuyó sin autorización, y que esa distribución sigue sumando personas con cada reenvío.',
          'Qué condiciones sociotécnicas intervienen: un grupo de mensajería donde cualquiera puede reenviar contenido a todos los demás sin ningún control, y la idea extendida de que recibir algo sin pedirlo exime de responsabilidad sobre lo que se hace después. Permitir recibir un contenido no autoriza automáticamente a almacenarlo, modificarlo o distribuirlo — el docente no decidió que esa imagen llegara, pero sí decide, a partir de ahora, qué hacer con ella.',
        ],
        nota: '*(Acá me pregunto: si yo reenvío esto "solo para avisar" a alguien más, ¿estoy ayudando, o estoy sumando una persona más a la misma distribución no autorizada?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no reenviar la imagen a nadie más, bajo ningún motivo, incluida la excusa de "avisarle" a la persona afectada de esa manera. Borrarla del propio dispositivo. Si corresponde conservar algo como constancia, guardar únicamente la evidencia de que circuló en el grupo —quién la envió, cuándo— sin guardar el contenido en sí. Y, lo más importante, dar aviso por un canal institucional apropiado, no por el mismo grupo donde circuló, para que la situación se trate de forma seria y no se siga viralizando por los mismos canales informales que ya fallaron.',
        ],
        nota: '*(Acá me pregunto: ¿cuál es la diferencia entre "guardar por si hace falta" y simplemente sumar un lugar más donde esa imagen sigue existiendo sin autorización?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al docente: no le corresponde investigar quién originó la imagen ni confrontar directamente a quien la reenvió en el grupo — eso es parte de un proceso institucional, no de una gestión individual. Tampoco le corresponde sentir que, por haberla recibido sin pedirlo, hizo algo mal.',
          'Qué podría salir mal: que, por incomodidad o por no saber qué hacer, la imagen quede guardada "por si acaso" en el celular del docente, sumando una copia más a una distribución que ya es un problema; o que el grupo entero trate el tema como un chisme a comentar, en vez de avisar por un canal serio. Lo que ajustaría para la próxima vez: que la escuela tenga, antes de que vuelva a pasar, un canal claro y conocido para reportar este tipo de situaciones, de forma que nadie tenga que decidir solo, en el momento, qué hacer con algo así.',
        ],
        nota: '*(Acá me pregunto: si mañana me llega algo parecido, ¿sé exactamente a quién avisar en mi escuela, sin tener que improvisarlo en el momento?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué categoría es: vigilancia excesiva disfrazada de cuidado, difusión no autorizada de contenido consensuado, o contenido sintético (deepfake). Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una escuela decide instalar un sistema que registra cada búsqueda que hacen los estudiantes en las computadoras del aula, incluidas las de uso personal fuera del horario de clase, y comparte esos registros con las familias sin que los estudiantes lo sepan. La dirección lo presenta como una medida de "cuidado digital".',
        analisis:
          '¿Qué categoría es esta situación? Vigilancia excesiva disfrazada de cuidado. Registrar cada búsqueda, incluso fuera del horario de clase, y compartirla sin que los estudiantes lo sepan, no es acompañamiento: es control total presentado con otro nombre. La protección necesita reconocer autonomía progresiva y capacidad de expresión, no convertirse en vigilancia permanente — y una medida que ni siquiera se comunica abiertamente a quienes están siendo observados ya está, en sí misma, mal diseñada.',
        nota: '*(Si elegiste "difusión no autorizada" o "contenido sintético": acá no hay ningún contenido íntimo circulando ni ninguna representación generada por IA — el problema es el diseño del cuidado en sí mismo, que se volvió vigilancia.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Dos personas adultas comparten contenido íntimo entre sí, de mutuo acuerdo, como parte de su relación. Tiempo después, una de ellas comparte ese contenido con un grupo de amigos, sin pedirle autorización a la otra persona.',
        analisis:
          '¿Qué categoría es esta situación? Difusión no autorizada de contenido consensuado. El intercambio original fue consensuado entre las dos personas adultas, y eso no es, en sí mismo, el problema. Lo que convierte esto en una violación es el paso siguiente: compartirlo con otras personas sin autorización. El intercambio íntimo consensuado entre adultos no es equivalente a la difusión no autorizada — son dos momentos distintos, y el consentimiento del primero no se extiende automáticamente al segundo.',
        nota: '*(Si elegiste "vigilancia excesiva": acá no hay ningún control sobre la vida de nadie — el problema es la distribución de algo consensuado hacia terceros sin autorización.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Circula en un grupo de estudiantes una imagen que parece mostrar a una compañera en una situación comprometedora. La compañera asegura que esa imagen nunca existió, que es un montaje hecho con una herramienta de inteligencia artificial a partir de fotos suyas de redes sociales. Varios estudiantes dudan, porque la imagen "se ve real".',
        analisis:
          '¿Qué categoría es esta situación? Contenido sintético (deepfake). La imagen no documenta nada que haya ocurrido: fue generada a partir de fotos reales de la persona, sin su participación ni consentimiento. Que "se vea real" es justamente el problema que señala el capítulo: la respuesta no puede depender de que las personas detecten visualmente la falsificación. Hace falta alfabetización sobre este tipo de contenido, y una respuesta institucional seria, no un debate informal sobre si la imagen "parece" verdadera o no.',
        nota: '*(No hay una sola respuesta esperada sobre qué hacer en este caso específico, pero sí sobre la categoría: por más real que parezca, es contenido sintético, no un hecho documentado, y tratarlo como si lo fuera agrava el daño.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos personas distintas sobre el caso de la fase 3 (la imagen generada por IA que circuló entre estudiantes). Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Si ella tiene fotos suyas en redes sociales, en parte se lo buscó. No debería haber subido tanto contenido público.',
      citaB:
        'Total esa imagen ya está circulando por todos lados, ya no se puede hacer nada. No tiene sentido darle más importancia ahora.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** traslada la responsabilidad a la persona afectada por el solo hecho de haber tenido fotos públicas. Tener fotos en una red social no es una autorización para que alguien las use para generar contenido sintético sin consentimiento — el capítulo es explícito en que las respuestas frente a estas situaciones tienen que evitar la culpabilización de quien fue afectado.',
      errorB:
        '**Comentario B** minimiza el hecho apelando a que "ya está circulando", como si eso volviera irrelevante actuar. Que algo ya esté circulando no cierra el caso: sigue siendo necesario reportarlo, frenar su distribución donde se pueda, y dar una respuesta institucional — la persistencia de un contenido dañino no es un argumento para dejar de intervenir, sino, si acaso, una razón más para hacerlo cuanto antes.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno responde con una categoría diferenciada ni evita la culpabilización. Uno culpa directamente a la víctima; el otro, al resignarse por la persistencia del daño, termina igual de inactivo frente a algo que sí se puede y se debe abordar.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer la autonomía progresiva como marco de protección, distinto de la vigilancia permanente',
        enunciado: 'Una familia instala en el celular de su hijo adolescente una aplicación que registra y comparte cada mensaje que recibe, sin que él lo sepa. ¿Qué dice el capítulo sobre este tipo de medida?',
        opciones: [
          { id: 'a', texto: 'Que la protección necesita reconocer autonomía progresiva, pertenencia y capacidad de expresión, evitando que el cuidado se convierta en vigilancia permanente.' },
          { id: 'b', texto: 'Que es la forma más efectiva de protección digital para adolescentes.' },
          { id: 'c', texto: 'Que cualquier forma de supervisión familiar es, por definición, excesiva.' },
          { id: 'd', texto: 'Que este tipo de medidas solo son un problema si el adolescente las descubre.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no plantea la vigilancia total como la forma más efectiva de protección: advierte explícitamente que el cuidado puede convertirse en vigilancia permanente, y eso no es lo que busca promover.',
          c: 'El capítulo no rechaza toda forma de acompañamiento familiar: lo que cuestiona es que ese acompañamiento se convierta en control total, no la supervisión en sí misma.',
          d: 'El problema no es si el adolescente lo descubre o no: es que la vigilancia permanente, sepa o no sepa de ella, reemplaza la autonomía progresiva que el capítulo pide reconocer.',
        },
      },
      {
        objetivo: 'distinguir el intercambio íntimo consensuado entre adultos de la difusión no autorizada',
        enunciado:
          'Dos personas adultas comparten contenido íntimo de mutuo acuerdo. Después, una de ellas lo comparte con terceros sin pedir autorización a la otra. ¿Qué dice el capítulo sobre esta secuencia?',
        opciones: [
          { id: 'a', texto: 'Que, al haber sido consensuado el intercambio original, cualquier uso posterior del contenido también queda autorizado.' },
          { id: 'b', texto: 'Que el intercambio íntimo consensuado entre adultos no es equivalente a la difusión no autorizada, y que permitir recibir un contenido no autoriza automáticamente a distribuirlo.' },
          { id: 'c', texto: 'Que compartir contenido íntimo entre adultos nunca debería hacerse, bajo ninguna circunstancia.' },
          { id: 'd', texto: 'Que el problema solo existe si el contenido se comparte con muchas personas, no con una sola.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Esto confunde dos momentos distintos: el consentimiento del intercambio original no se extiende automáticamente a lo que se haga después con ese contenido.',
          c: 'El capítulo no juzga el intercambio consensuado entre adultos como un problema en sí mismo: lo que señala como problema es la difusión no autorizada posterior.',
          d: 'La cantidad de personas con las que se comparte no es lo que define el problema: compartirlo con una sola persona, sin autorización, ya constituye una difusión no autorizada.',
        },
      },
      {
        objetivo: 'comprender por qué la respuesta a los daños sintéticos no puede depender solo de la detección visual',
        enunciado:
          'Una imagen generada por inteligencia artificial circula entre estudiantes y "se ve real", por lo que varios dudan de si es auténtica o no. ¿Qué plantea el capítulo frente a este tipo de situación?',
        opciones: [
          { id: 'a', texto: 'Que alcanza con enseñarles a los estudiantes a mirar con más atención para detectar este tipo de imágenes.' },
          { id: 'b', texto: 'Que este tipo de contenido no representa ningún daño real, porque no es una imagen auténtica.' },
          { id: 'c', texto: 'Que la respuesta no puede depender únicamente de que las personas detecten visualmente falsificaciones, sino que requiere alfabetización, mecanismos técnicos de procedencia, plataformas responsables e instituciones capaces de intervenir.' },
          { id: 'd', texto: 'Que la única solución posible es prohibir el uso de cualquier herramienta de inteligencia artificial.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo es explícito en que la detección visual, por sí sola, no alcanza: las representaciones sintéticas pueden ser demasiado plausibles para confiar solo en la mirada entrenada de una persona.',
          b: 'Que el contenido no sea auténtico no significa que no cause daño real: puede afectar igualmente la identidad, la intimidad y la confianza de la persona representada.',
          d: 'El capítulo no propone prohibir la tecnología como única salida: propone una combinación de alfabetización, mecanismos técnicos, responsabilidad de plataformas e instituciones capaces.',
        },
      },
      {
        objetivo: 'usar categorías diferenciadas para grooming, sextorsión y difusión no consentida, evitando respuestas que culpabilicen a quien fue afectado',
        enunciado:
          'Frente a un caso de difusión no autorizada de contenido íntimo, alguien comenta que la persona afectada "se lo buscó" por haber compartido ese contenido originalmente. ¿Qué error señala el capítulo en este comentario?',
        opciones: [
          { id: 'a', texto: 'Ningún error: el capítulo coincide en que compartir contenido íntimo conlleva asumir ese riesgo.' },
          { id: 'b', texto: 'El error de no haber denunciado antes de que el contenido se compartiera.' },
          { id: 'c', texto: 'El error de no haber usado una plataforma distinta para compartir el contenido.' },
          { id: 'd', texto: 'El error de trasladar la responsabilidad del hecho a quien fue afectado, en vez de a quien distribuyó el contenido sin autorización.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo pide explícitamente respuestas que eviten la culpabilización de quien fue afectado — este comentario hace exactamente lo contrario.',
          b: 'No se puede denunciar algo antes de que ocurra. Este comentario sigue poniendo la responsabilidad sobre la persona afectada en vez de sobre quien decidió distribuir el contenido.',
          c: 'La plataforma usada para el intercambio original no es lo relevante: lo relevante es que alguien distribuyó el contenido sin autorización, después de ese intercambio.',
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
        muestra: 'Confunde cuidado con vigilancia permanente, o culpabiliza a quien fue afectado por una difusión no autorizada o un contenido sintético.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión entre vigilancia excesiva, difusión no autorizada y contenido sintético.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres categorías, identifica qué dimensión está comprometida en cada caso y propone una respuesta proporcionada que no culpabiliza a quien fue afectado.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce que la respuesta a los daños sintéticos exige varias piezas a la vez (alfabetización, procedencia técnica, plataformas, instituciones), y distingue consentimiento del intercambio original de autorización para su difusión posterior.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la diferencia entre acompañar y vigilar, por qué recibir no autoriza a distribuir, y por qué un contenido sintético no se resuelve solo con más atención visual. Lo que cambia, a partir de acá, es cómo mirás las formas de cuidado digital que ya existen a tu alrededor — y si realmente dejan lugar a que alguien te cuente lo que le pasa.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde esté en juego la intimidad o la autonomía de un niño, niña o adolescente, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la adolescente que, frente a la vigilancia total de su madre, aprendió a esconder en vez de a contar. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de esa forma de cuidado identificás ahora como vigilancia disfrazada de protección? ¿Qué harías distinto la próxima vez que diseñes —en tu aula, en tu casa— una forma de cuidado digital para alguien? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien la diferencia entre cuidar a un adolescente y vigilarlo todo el tiempo?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Infancias, Intimidad y Daños Sintéticos, en una tarjeta',
      parrafos: [
        'Niñas, niños y adolescentes son sujetos de derechos y participantes de comunidades digitales. La protección necesita reconocer autonomía progresiva, pertenencia y capacidad de expresión, evitando que el cuidado se convierta en vigilancia permanente.',
        '**Consentimiento y difusión:** el intercambio íntimo consensuado entre adultos no es equivalente a la difusión no autorizada. Permitir recibir un contenido no autoriza automáticamente a almacenarlo, modificarlo o distribuirlo.',
        '**Daños sintéticos:** la IA añade representaciones plausibles que pueden afectar identidad, intimidad y confianza. La respuesta no puede depender únicamente de la detección visual: hace falta alfabetización, mecanismos técnicos de procedencia, plataformas responsables e instituciones capaces.',
        '**Una regla que no se negocia:** grooming, sextorsión y difusión no consentida necesitan categorías diferenciadas y respuestas que eviten culpabilizar a quien fue afectado.',
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
    referenciasLista: ['UNICEF', 'UNODC', 'Europol', 'INTERPOL'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Infancias, intimidad, consentimiento y daños sintéticos no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[INFANCIAS_INTIMIDAD_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
