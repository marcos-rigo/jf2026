// Contenido de /tematicas/ingenieria-social. Misma forma que lib/ciberdelitos-content.ts
// (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/ingenieria-social/ficha-aula';

export const INGENIERIA_SOCIAL_FALLBACK: Audiencia = 'docentes';

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
  { id: 'pausar-verificar-decidir', number: '05', label: 'Pausar, Verificar, Decidir', shortLabel: 'PVD' },
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
  pausarVerificarDecidir: {
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
    titulo: 'Ingeniería Social y Confianza',
    subtitulo: 'De desconfiar a verificar',
    bajada:
      'Un sistema técnicamente seguro puede ser vulnerado mediante decisiones humanas inducidas por engaño, urgencia o autoridad aparente. Estas estrategias explotan mecanismos cotidianos de confianza que normalmente permiten la cooperación social — los mismos que hacen posible pedir ayuda, delegar una tarea o confiar en una institución. Esta temática forma parte del grupo Seguridad de la plataforma y trabaja esa tensión: cómo reconocer cuándo esa confianza está siendo explotada, sin por eso dejar de confiar en nada ni en nadie.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender qué es la ingeniería social: estrategias que buscan vulnerar un sistema no a través de una falla técnica, sino de una decisión humana inducida por engaño, urgencia o autoridad aparente.',
      'Aprender a aplicar el método Pausar–Verificar–Decidir: introducir tiempo frente a la urgencia, buscar una fuente independiente para verificar, y recién después decidir con más información.',
      'Reconocer que la protección frente a la ingeniería social es una responsabilidad distribuida: no depende solo de que la persona esté alerta, sino de que la institución ofrezca canales verificables, comunicaciones claras y procedimientos que faciliten la comprobación.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer cómo la ingeniería social explota confianza, urgencia y autoridad aparente para inducir una decisión humana que vulnera un sistema que, técnicamente, podía ser seguro.',
      'Aplicar las tres etapas del método Pausar–Verificar–Decidir: Pausar introduce tiempo frente a la urgencia; Verificar busca una fuente independiente; Decidir devuelve agencia después de ampliar la información.',
      'Entender que la educación no debería enseñar desconfianza absoluta, sino reconocer las señales que justifican aumentar la verificación antes de actuar.',
      'Reconocer que la eficacia del método PVD no depende únicamente de la persona: las instituciones necesitan canales verificables, comunicaciones claras y procedimientos capaces de facilitar la comprobación, porque la confianza informada es una responsabilidad distribuida.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Pausarías quince segundos si te dijeran que no hay tiempo?',
    parrafos: [
      'Te llega un mensaje por el celular institucional, aparentemente de la dirección de tu escuela: "Urgente — necesitamos que confirmes el código que te acaba de llegar por SMS antes de las 10, si no el sistema de pagos a proveedores se bloquea y no podemos cerrar la planilla de hoy". A los pocos segundos te llega, efectivamente, un código por SMS. El mensaje suena apurado, viene de un número que reconocés como el de la dirección, y usa un tono que ya escuchaste antes en pedidos reales. Tenés el código en la pantalla y quince segundos para decidir si lo mandás.',
      'Nada de esto parece sospechoso a simple vista: hay una autoridad que lo pide, una urgencia real y un canal conocido. Eso es exactamente lo que hace efectiva a la ingeniería social: no ataca una falla técnica, ataca los mismos mecanismos de confianza que te permiten cooperar sin verificar todo cada vez. La diferencia entre que ese código proteja tu cuenta o la de otra persona no depende de cuánta tecnología tengas instalada, sino de si te tomás esos quince segundos antes de responder.',
    ],
    problema:
      'Pensá en algún mensaje urgente que hayas recibido, de alguien con autoridad real o aparente, pidiéndote algo rápido. ¿Te tomaste el tiempo de verificarlo por otro canal antes de actuar, o la urgencia decidió por vos?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La ingeniería social muestra que un sistema técnicamente seguro puede ser vulnerado mediante decisiones humanas inducidas por engaño, urgencia o autoridad aparente. Estas estrategias no explotan una falla de software: explotan mecanismos cotidianos de confianza que normalmente permiten la cooperación social — los mismos que hacen posible que una escuela funcione, que una familia se organice o que una institución opere sin verificar cada pedido desde cero.',
      'Por eso la educación no debería enseñar desconfianza absoluta. Lo que necesita es que cada persona reconozca las señales que justifican aumentar la verificación. Ahí entra el método Pausar–Verificar–Decidir: Pausar introduce tiempo frente a la urgencia, ese primer freno antes de reaccionar; Verificar busca una fuente independiente del mensaje que generó la alarma, en vez de confiar en el mismo canal que la trajo; y Decidir devuelve la agencia a la persona después de haber ampliado la información, en vez de dejar que la urgencia decida sola.',
      'PVD funciona como una microarquitectura de autonomía. Pero su eficacia no depende únicamente de la persona: las instituciones necesitan canales verificables, comunicaciones claras y procedimientos capaces de facilitar la comprobación. La confianza informada es una responsabilidad distribuida — no alcanza con pedirle a cada uno que esté más alerta si la institución no le da ninguna forma simple de verificar lo que le están pidiendo.',
    ],
    preguntaCierre:
      'Pensá en algún procedimiento de tu escuela o tu entorno donde alguien podría pedir algo "urgente" haciéndose pasar por una autoridad. ¿Existe hoy una forma simple y conocida de verificar ese pedido por otro canal, o todo depende de que la persona que lo recibe desconfíe por su cuenta?',
    fichaAula1: {
      titulo: 'Ingeniería social: cómo reconocerla y protegerte',
      objetivo:
        'Reconocer las técnicas de manipulación que usan los ciberdelincuentes para hacerse pasar por otra persona y obtener información confidencial, y aplicar medidas concretas para protegerse.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Se llama ingeniería social a las diferentes técnicas de manipulación que usan los ciberdelincuentes para obtener información confidencial de los usuarios, haciéndose pasar por otra persona — un familiar, alguien de soporte técnico, un compañero de trabajo o una persona de confianza — con el objetivo de apropiarse de datos personales, contraseñas o suplantar la identidad de quien fue engañado.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Estos engaños llegan por distintos canales: llamadas telefónicas, visitas personales, aplicaciones de mensajería, correos electrónicos y redes sociales. Algunos de los métodos más usados son: hacerse pasar por un familiar o compañero de trabajo, ofrecer premios o promociones a cambio de datos, hacerse pasar por soporte técnico, invitar a completar formularios para "ganar" algo, u ofrecer actualizaciones falsas de aplicaciones.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Entre las técnicas más difundidas están el vishing (engaño por llamada telefónica), el phishing (correos falsos que piden datos), el spear phishing (un correo falso dirigido a una persona específica, con un cargo o información que al atacante le interesa), los concursos falsos y el robo de cuentas de correo para engañar a los contactos de la víctima.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Con el avance de la inteligencia artificial, estas técnicas se volvieron más sofisticadas: la IA puede generar phishing personalizado analizando datos de redes sociales, crear deepfakes —videos, imágenes o audios manipulados para parecer reales— que se usan para extorsionar o suplantar identidad, armar chatbots maliciosos que interactúan de forma convincente, e incluso aprender de los sistemas de detección de fraude para evadirlos.',
        },
        {
          tipo: 'parrafo',
          texto:
            'No existe ninguna herramienta informática que proteja por completo de la ingeniería social: depende de que cada persona reconozca las señales y verifique antes de actuar.',
        },
      ],
      preguntaDetonadora:
        '¿Alguna vez te contactó alguien haciéndose pasar por un familiar, un técnico o una empresa? ¿Cómo te diste cuenta de que era un engaño — o no te diste cuenta a tiempo?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Por dónde me podrían engañar?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá la lista de canales y métodos de ingeniería social (llamada, visita, mensajería, correo, redes sociales; hacerse pasar por alguien, ofrecer premios, pedir completar un formulario).',
            },
            {
              tipo: 'parrafo',
              texto:
                'En grupos, cada uno elige un canal y método, y arma un ejemplo breve de mensaje que un ciberdelincuente podría enviar usándolo.',
            },
            { tipo: 'parrafo', texto: '→ Puesta en común: ¿cuáles sonaban más creíbles? ¿Por qué?' },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestro protocolo Pausar–Verificar–Decidir" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben una de las técnicas vistas (vishing, phishing, spear phishing, deepfake, chatbot malicioso).',
                'Para esa técnica, diseñan un protocolo corto de tres pasos, aplicando Pausar–Verificar–Decidir:',
                'Pausar: qué señal de urgencia o autoridad debería hacerlos desconfiar.',
                'Verificar: por qué canal independiente podrían confirmar si el pedido es real.',
                'Decidir: qué acción tomar una vez verificado (o no) el pedido.',
                'Presentan su protocolo al resto del curso como una tarjeta de bolsillo o afiche.',
              ],
            },
          ],
        },
      ],
      frase: 'La mejor defensa contra la ingeniería social no es un programa: es pausar, verificar y recién después decidir.',
      glosario: ['Ingeniería social', 'Vishing', 'Phishing', 'Spear phishing', 'Deepfake'],
      referencias: [
        '"¿Qué es la ingeniería social y cómo me protejo?" — Argentina.gob.ar, Ministerio de Justicia, Con Vos en la Web (actualizado junio 2026): argentina.gob.ar/justicia/convosenlaweb/situaciones/que-es-la-ingenieria-social-y-como-protegerte',
      ],
    },
  },
  pausarVerificarDecidir: {
    titulo: 'Pausar, Verificar, Decidir',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la ingeniería social explota confianza, urgencia y heurísticas normales — esos atajos mentales que usamos todo el tiempo para decidir rápido sin analizar cada situación desde cero. PVD interrumpe esa secuencia al introducir tiempo, verificación independiente y decisión. La protección no puede depender de una sola cosa: tiene que combinar capacidades personales con canales institucionales verificables y respuestas rápidas.',
        'El capítulo nombra como referencia a UNICEF, UNODC, Europol, INTERPOL y la literatura sobre violencias facilitadas por tecnología e ingeniería social, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación de ingeniería social, la pregunta no debería limitarse a si el engaño funcionó, sino a reconstruir cómo se manifestó, qué condiciones lo volvieron efectivo, qué actores tienen poder para modificarlas y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — pensar que "cayó porque es descuidado" o "cayó porque la tecnología es muy sofisticada ahora" son, los dos, atajos que no explican realmente qué pasó.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar buen criterio y seguir condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — esto es, literalmente, lo que el capítulo llama "responsabilidad distribuida": ni toda la carga sobre la persona que recibió el mensaje, ni toda la carga sobre la institución.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es enseñar a desconfiar de todo y de todos: la educación no debería enseñar desconfianza absoluta, sino reconocer señales que justifican aumentar la verificación.',
          'No es solo una cuestión de que cada persona esté más atenta: alguien puede tener buen criterio y seguir condicionado por canales institucionales poco claros o procedimientos confusos para verificar un pedido.',
          'No alcanza con una buena regulación o un buen protocolo institucional si la persona no tiene los conocimientos o la costumbre de usarlos antes de actuar.',
          'No es diagnosticar a partir de una sola caída en un engaño: hay que reconstruir qué condiciones lo volvieron efectivo, sin confundir "fue descuidado" con una explicación real.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona, o qué parte de una institución, quedó expuesta por el engaño.',
        '**¿Qué condiciones sociotécnicas intervienen?** Qué combinación de urgencia, autoridad aparente, canal usado y ausencia de procedimientos claros de verificación hizo posible el engaño.',
        '**¿Qué cambio sería proporcionado?** El propósito no es llegar a la misma respuesta en todos los casos, sino mejorar la calidad de las preguntas que preceden a la decisión — y, en este capítulo en particular, eso se traduce directamente en aplicar Pausar, Verificar y Decidir antes de actuar.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un viernes a las 16:40, la secretaria de una escuela recibe un llamado. La persona del otro lado dice ser de la empresa que gestiona el sistema de pagos a proveedores de la escuela: "Tenemos un problema con la cuenta y si no confirmamos el código que le llega ahora por mensaje, el lunes no van a poder cobrar los sueldos del personal de limpieza. Necesitamos que nos lo diga ya, estamos por cerrar el sistema." Un segundo después, le llega un SMS con un código de seis dígitos. La voz suena profesional, conoce el nombre del sistema que usa la escuela y repite varias veces la palabra "urgente". La secretaria, con la directora de viaje y sin nadie más a quien consultar en ese momento, le dicta el código por teléfono.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: una llamada con autoridad aparente (dice representar al sistema de pagos) y urgencia (el cierre inminente, el riesgo de que no cobre el personal de limpieza) consiguió que la secretaria entregara un código que llegó por un canal que ella sí reconocía como propio —su teléfono, su SMS— pero que nunca verificó por un canal independiente de la llamada. Participan la secretaria, que recibió la presión; quien llamó, haciéndose pasar por la empresa; y la empresa real, que todavía no sabe que están usando su nombre.',
        ],
        nota: '*(Acá me pregunto: ¿en qué momento exacto dejó de ser una llamada normal de un proveedor y pasó a ser una situación que necesitaba verificación?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la capacidad de aplicar el método Pausar–Verificar–Decidir en un momento de presión real, sin nadie a quien consultar de inmediato.',
          'Qué condiciones sociotécnicas intervienen: la llamada combinó dos palancas que el capítulo nombra explícitamente —urgencia y autoridad aparente—, y el canal usado para el código (SMS al celular personal de la secretaria) es el mismo que ella usa todos los días para cosas reales, lo que bajó su guardia. A eso se suma que la escuela no tiene un procedimiento conocido para verificar este tipo de llamado por otro canal, y que en ese momento la directora, que podría haber sido una segunda opinión, no estaba disponible.',
        ],
        nota: '*(Acá me pregunto: si hubiera pausado 30 segundos antes de dictar el código, ¿qué fuente independiente tenía a mano para verificar? ¿La tenía, o la escuela nunca se la dio?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de que la secretaria deje de atender llamados de proveedores, sino de que exista —y se use— un paso de verificación antes de entregar cualquier código o dato sensible por teléfono: cortar, llamar al número oficial que la escuela ya tiene registrado para esa empresa, y recién ahí decidir. Eso es exactamente aplicar Pausar (cortar y no responder en el momento), Verificar (llamar por un canal propio, no el que dio quien llamó) y Decidir (actuar ya con información confirmada).',
        ],
        nota: '*(Acá me pregunto: ¿este cambio depende solo de que la secretaria aprenda a desconfiar más, o la escuela tiene que darle un número de verificación a mano para que ese paso sea posible?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la secretaria: no le corresponde cargar sola con la responsabilidad de haber "caído" en el engaño, ni sentir que su trabajo consistió en desconfiar de cada llamado de ahora en adelante. La ingeniería social explota mecanismos de confianza que son normales y necesarios para que cualquier institución funcione.',
          'Qué podría salir mal: que la escuela resuelva esto diciéndole a la secretaria que "tenga más cuidado" sin darle ningún canal concreto de verificación, y que el mismo tipo de llamado vuelva a funcionar con otra persona del equipo; o que, al revés, se instale una desconfianza tan alta que cualquier llamado real de un proveedor termine ignorado o maltratado. Lo que ajustaría para la próxima vez: que la escuela tenga, escrito y conocido por todo el personal administrativo, un número de verificación propio para cada proveedor sensible, y la instrucción explícita de que ningún dato o código se entrega por teléfono sin pasar primero por ese canal.',
        ],
        nota: '*(Acá me pregunto: ¿qué otros pedidos "urgentes" recibe mi escuela por teléfono o mensaje donde no existe, hoy, ninguna forma simple de verificar antes de responder?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué etapa de PVD falló: Pausar, Verificar o Decidir. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un docente recibe un mensaje de WhatsApp que parece venir del grupo de coordinación de la escuela: "Necesitamos que todos confirmen asistencia a la reunión de mañana respondiendo con su DNI completo para la lista de acceso". El docente, apurado entre clases, responde de inmediato con su número de documento.',
        analisis:
          '¿Qué etapa de PVD falló? Pausar. El docente no se tomó ni un segundo antes de responder: vio un mensaje que parecía institucional y reaccionó al instante, sin que hubiera siquiera una urgencia real que lo justificara —era un pedido para "mañana", no para ese mismo minuto—. Pausar no requiere desconfiar del grupo: alcanza con frenar antes de escribir un dato sensible y preguntarse si ese pedido tiene sentido viniendo de ahí.',
        nota: '*(Si elegiste "Verificar" o "Decidir": esas etapas ni siquiera llegaron a jugar, porque el docente actuó en el mismo instante en que leyó el mensaje. El problema está un paso antes: no hubo ninguna pausa.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una madre recibe un correo que dice ser del sistema de pagos de la cuota escolar, pidiéndole hacer clic en un link para "regularizar una diferencia pendiente". Ella no hace clic de inmediato: espera, y al rato llama a un número de teléfono que aparece en el mismo correo para preguntar de qué se trata. Le confirman, con el mismo tono institucional, que es real, y termina pagando a través del link.',
        analisis:
          '¿Qué etapa de PVD falló? Verificar. La madre sí pausó: no actuó en el momento. Pero la verificación que hizo no fue independiente: usó el número de teléfono que venía en el propio correo sospechoso, es decir, consultó a la misma fuente que generó la alarma, no a una fuente distinta. Verificar significa buscar una fuente independiente del mensaje original —el teléfono que la escuela ya tenía registrado antes, por ejemplo—, no un canal que el mensaje mismo le ofrece.',
        nota: '*(Si elegiste "Pausar": esa etapa funcionó bien, ella no respondió en el momento. El fallo está en la calidad de la verificación que hizo después.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un administrativo de una oficina pública pausa antes de responder a un correo urgente, y hasta llama a un número que encuentra en una búsqueda rápida para confirmar que el remitente existe. Pero, convencido de que ya "verificó", transfiere fondos a una cuenta que el mismo correo original le indicó, sin confirmar ese dato puntual —la cuenta de destino— con nadie más.',
        analisis:
          '¿Qué etapa de PVD falló? Decidir. Pausó, y hasta hizo un intento de verificación. Pero decidir no es solo actuar después de alguna verificación: es actuar con la información ampliada correspondiente a lo que realmente está en juego. Confirmar que una persona o una empresa existen no confirma que esa cuenta bancaria en particular sea la correcta. La decisión final se tomó sobre un dato —la cuenta de destino— que nunca pasó por ninguna verificación independiente.',
        nota: '*(No hay una sola lectura posible en este caso: también podría decirse que la verificación fue incompleta, no que Decidir falló por sí solo. Lo que se evalúa es que puedas justificar por qué, pese a haber pausado y verificado algo, la decisión final se tomó sobre información que seguía sin confirmar.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los consejos que dieron dos colegas después de que un compañero cayera en un engaño telefónico. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'A partir de ahora no le contestes el teléfono a nadie que no tengas agendado, ni abras ningún mensaje que no esperabas. Es la única forma de estar seguro.',
      citaB: 'Fue mala suerte, puede pasarle a cualquiera. No hay mucho que hacer salvo tener cuidado en general.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** propone desconfianza absoluta, justo lo que el capítulo advierte que la educación no debería enseñar. Dejar de atender llamados o mensajes no identificados vuelve inviable cualquier trabajo que dependa de recibir pedidos de gente nueva —proveedores, familias, organismos—, y no enseña la habilidad real que hace falta: reconocer señales y verificar.',
      errorB:
        '**Análisis B** va al extremo contrario: ignora cualquier señal de alerta y lo reduce todo al azar. "Tener cuidado en general" no es un método: el capítulo propone algo concreto y aplicable —Pausar, Verificar, Decidir—, no una actitud vaga de prudencia que no dice qué hacer en el momento en que suena el teléfono.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno ofrece un método real. Uno reemplaza el criterio por una regla extrema que paraliza; el otro reemplaza el criterio por resignación. Ninguno enseña a pausar, a buscar una fuente independiente ni a decidir con más información.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer cómo la ingeniería social explota confianza, urgencia y autoridad aparente',
        enunciado:
          'Un mensaje le pide a una persona que actúe "ya mismo" porque, si no, va a perder algo importante, y además dice venir de alguien con autoridad dentro de su institución. ¿Qué está explotando este mensaje, según el capítulo?',
        opciones: [
          {
            id: 'a',
            texto:
              'Mecanismos cotidianos de confianza que normalmente permiten la cooperación social, combinados con urgencia y autoridad aparente.',
          },
          { id: 'b', texto: 'Una falla técnica del sistema que usa esa institución.' },
          { id: 'c', texto: 'La falta de un antivirus actualizado en el dispositivo de la persona.' },
          {
            id: 'd',
            texto: 'Nada en particular: cualquier mensaje con esas características es automáticamente sospechoso y fácil de detectar.',
          },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'La ingeniería social no depende de una falla técnica: un sistema puede ser perfectamente seguro y de todas formas ser vulnerado a través de una decisión humana inducida.',
          c: 'Ningún antivirus detiene un engaño que se apoya en que la persona misma entregue la información o actúe por su cuenta. El problema no es técnico.',
          d: 'El capítulo es explícito en que no existe una fórmula mágica para identificar estos ataques: combinan urgencia y autoridad aparente justamente porque esa combinación suele funcionar, no porque sea fácil de detectar a simple vista.',
        },
      },
      {
        objetivo: 'aplicar las tres etapas del método Pausar–Verificar–Decidir',
        enunciado:
          'Alguien recibe un pedido urgente y, antes de actuar, llama a un número de teléfono que ya tenía registrado de antes —no el que vino en el mensaje— para confirmar si el pedido es real. ¿Qué etapa de PVD está aplicando?',
        opciones: [
          { id: 'a', texto: 'Pausar.' },
          { id: 'b', texto: 'Verificar.' },
          { id: 'c', texto: 'Decidir.' },
          { id: 'd', texto: 'Ninguna: llamar a confirmar no forma parte del método.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Pausar es el paso anterior: introducir tiempo frente a la urgencia, antes de buscar cualquier confirmación. Acá la persona ya está un paso más adelante, buscando información.',
          c: 'Decidir es actuar con la información ya ampliada, después de haber verificado. Buscar la confirmación en sí misma es, específicamente, la etapa de Verificar.',
          d: 'Verificar es, literalmente, buscar una fuente independiente del mensaje que generó la alarma — que es exactamente lo que describe la pregunta.',
        },
      },
      {
        objetivo: 'entender que la educación no debe enseñar desconfianza absoluta, sino reconocer señales que justifican aumentar la verificación',
        enunciado:
          'Después de que un compañero cayera en un engaño telefónico, alguien propone dejar de atender cualquier llamado de un número no agendado. ¿Qué le falta a esa propuesta, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: es la forma más segura de evitar cualquier ataque de ingeniería social.' },
          { id: 'b', texto: 'Distingue bien entre señales que ameritan verificar y las que no.' },
          {
            id: 'c',
            texto:
              'Reemplaza el reconocimiento de señales por una desconfianza absoluta, que el capítulo dice que la educación no debería enseñar.',
          },
          { id: 'd', texto: 'Le falta ser todavía más estricta: tampoco deberían leerse mensajes de números desconocidos.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo es explícito: la educación no debería enseñar desconfianza absoluta. Dejar de atender cualquier llamado no identificado no es la meta: reconocer señales sí lo es.',
          b: 'Es justo lo contrario: esa propuesta no distingue nada, trata a todos los llamados no agendados por igual, sin ningún criterio.',
          d: 'Ir hacia una desconfianza todavía mayor agrava el mismo error, no lo corrige.',
        },
      },
      {
        objetivo: 'reconocer que la eficacia de PVD depende también de que la institución ofrezca canales verificables',
        enunciado:
          'Una escuela le dice a su personal administrativo "tengan más cuidado con las llamadas sospechosas", pero no les da ningún número de verificación propio para los proveedores habituales. Según el capítulo, ¿qué le falta a esta medida?',
        opciones: [
          { id: 'a', texto: 'Nada: con que el personal esté alerta alcanza.' },
          { id: 'b', texto: 'Prohibir que el personal atienda el teléfono.' },
          { id: 'c', texto: 'Contratar un seguro contra fraudes telefónicos.' },
          {
            id: 'd',
            texto:
              'Reconocer que la confianza informada es una responsabilidad distribuida, y que la institución necesita ofrecer canales verificables, no solo pedirle más atención a la persona.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo dice explícitamente que la eficacia de PVD no depende únicamente de la persona. Pedir "más cuidado" sin dar una herramienta concreta de verificación deja la responsabilidad entera del lado equivocado.',
          b: 'Prohibir atender el teléfono no es una medida institucional razonable ni es lo que el capítulo plantea: la solución pasa por dar herramientas de verificación, no por eliminar el canal.',
          c: 'Un seguro puede cubrir una pérdida después de que ocurrió, pero no es lo que el capítulo propone: lo que falta acá es prevención a través de canales verificables, no una cobertura posterior.',
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
          'Reacciona a cualquier pedido urgente sin pausar, o responde a cualquier señal de alerta con desconfianza absoluta de todo, sin distinguir cuándo corresponde verificar.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no identifica con precisión en qué etapa de PVD falló ni por qué.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue las tres etapas de PVD, identifica cuál falló en una situación concreta y propone un cambio proporcionado a lo que realmente faltó verificar.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce que la eficacia de PVD depende de una responsabilidad distribuida entre persona e institución, y distingue una verificación genuina de una que solo lo parece.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: qué es la ingeniería social, las tres etapas de Pausar–Verificar–Decidir, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es cómo mirás los pedidos urgentes que te llegan a vos, a tu escuela o a tu entorno — y si existe, hoy, una forma simple de verificarlos.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde alguien reciba un pedido con urgencia o autoridad aparente, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: el mensaje urgente con el código por SMS, con quince segundos para decidir. Releé tu respuesta original. Con lo que viste en esta temática, ¿te tomaste ese tiempo de pausar y verificar, o la urgencia decidió por vos? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien que un mensaje urgente con autoridad aparente puede ser peligroso aunque no haya ninguna falla técnica de por medio?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Ingeniería Social y Confianza, en una tarjeta',
      parrafos: [
        'La ingeniería social muestra que un sistema técnicamente seguro puede ser vulnerado mediante decisiones humanas inducidas por engaño, urgencia o autoridad aparente.',
        '**Las tres etapas de PVD:** Pausar introduce tiempo frente a la urgencia; Verificar busca una fuente independiente; Decidir devuelve agencia después de ampliar información.',
        '**Responsabilidad distribuida:** la eficacia de PVD no depende únicamente de la persona — las instituciones necesitan canales verificables, comunicaciones claras y procedimientos que faciliten la comprobación.',
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
      'Ingeniería social y confianza: pausar–verificar–decidir no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[INGENIERIA_SOCIAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
