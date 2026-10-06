// Contenido de /tematicas/justicia-en-el-territorio-hibrido. Misma forma que
// lib/empresas-plataformas-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes').
// Solo hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/justicia-territorio-hibrido/ficha-aula';

export const JUSTICIA_TERRITORIO_HIBRIDO_FALLBACK: Audiencia = 'docentes';

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
  { id: 'justicia-y-prueba-digital', number: '05', label: 'Justicia y prueba digital', shortLabel: 'Justicia y prueba' },
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
  justiciaYPruebaDigital: {
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
    titulo: 'Justicia en el Territorio Híbrido',
    subtitulo: 'De digitalizar trámites a garantizar comprensión',
    bajada:
      'La digitalización judicial puede mejorar acceso y gestión y seguir siendo incomprensible para quien necesita ejercer derechos. Justicia abierta y lenguaje claro recuerdan que la innovación tecnológica necesita convivir con participación, transparencia y capacidad de comprender procedimientos. Esta temática forma parte del grupo Gobierno y Comunidad Digital de la plataforma y trabaja esa distinción: que un expediente esté disponible online no significa que la persona que lo consulta entienda lo que dice.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que la digitalización judicial puede mejorar el acceso y la gestión, y al mismo tiempo seguir siendo incomprensible para quien necesita ejercer sus derechos, y por qué justicia abierta y lenguaje claro son la respuesta a eso.',
      'Reconocer que la evidencia digital exige integridad, contexto y preservación, pero eso no justifica recolecciones indiscriminadas: los dispositivos contienen información ajena al conflicto, y las necesidades probatorias deben convivir con privacidad y proporcionalidad.',
      'Comprender los límites de la IA judicial: puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos, especialmente cuando está en juego contenido íntimo, violencia o fraude y el riesgo de producir victimización secundaria.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer cuándo una digitalización judicial mejora la gestión pero sigue siendo incomprensible para quien necesita ejercer un derecho, y por qué justicia abierta y lenguaje claro son la respuesta a esa brecha.',
      'Entender por qué la necesidad de integridad y preservación de la evidencia digital no justifica recolecciones indiscriminadas, y qué significa aplicar proporcionalidad entre lo que se necesita probar y lo que efectivamente se recolecta.',
      'Identificar cuándo la respuesta de una institución judicial produce victimización secundaria, y qué significa preservar agencia y evitar exposición innecesaria en casos de contenido íntimo, violencia o fraude.',
      'Comprender qué puede y qué no puede hacer la IA judicial: puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿De qué sirve tener acceso si no entendés lo que lees?',
    parrafos: [
      'Una persona recibe la notificación de que su sentencia ya está disponible en el portal online del tribunal. Entra, encuentra el documento sin ningún problema, lo descarga en segundos, en cualquier momento del día, desde su celular. La digitalización funcionó exactamente como debía: acceso inmediato, sin filas, sin tener que pedir turno. Pero cuando empieza a leer, no entiende buena parte de lo que dice. Hay términos que nunca escuchó, oraciones larguísimas con varias ideas encadenadas, referencias a "lo actuado en autos" y a normas citadas solo por número. Vuelve a leer el mismo párrafo tres veces y sigue sin saber si ganó o perdió.',
      'Todo el sistema que puso ese documento a su alcance funcionó perfecto. El problema apareció después, en el momento que en realidad más importaba: entender qué significa esa sentencia para su propia vida. La digitalización judicial puede mejorar acceso y gestión y seguir siendo incomprensible para quien necesita ejercer derechos — tener el papel no es lo mismo que entender lo que dice, y un sistema que resuelve lo primero sin ocuparse de lo segundo solo resolvió la mitad del problema.',
    ],
    problema:
      'Pensá en algún documento judicial, administrativo o legal que hayas tenido que leer —tuyo o de alguien cercano—. ¿Lo entendiste a la primera, o tuviste que pedirle a alguien que te lo tradujera?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La digitalización judicial puede mejorar acceso y gestión y seguir siendo incomprensible para quien necesita ejercer derechos. Justicia abierta y lenguaje claro recuerdan que innovación tecnológica necesita convivir con participación, transparencia y capacidad de comprender procedimientos — un expediente disponible online, un trámite más rápido, no resuelven nada si la persona sigue sin entender qué está pasando con su propio caso.',
      'La evidencia digital exige integridad, contexto y preservación, pero no justifica recolecciones indiscriminadas. Dispositivos contienen información ajena al conflicto; necesidades probatorias deben convivir con privacidad y proporcionalidad — que un celular pueda contener la prueba que se busca no significa que haya que llevarse todo lo que ese celular contiene.',
      'La victimización secundaria obliga a revisar cómo la propia institución responde. En contenido íntimo, violencia o fraude, la calidad de la respuesta incluye evitar exposición innecesaria y preservar agencia. La IA judicial puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos — una herramienta puede ayudar a organizar o acelerar un proceso, pero no puede ser quien decide ni quien responde por esa decisión.',
    ],
    preguntaDestacada:
      'Pensá en algún procedimiento judicial o administrativo que conozcas de cerca. ¿La tecnología que se usó ahí resolvió el acceso, la comprensión, o las dos cosas a la vez?',
    fichaAula1: {
      titulo: 'Sentencias claras: los lineamientos de la Corte Suprema',
      objetivo:
        'Conocer los Lineamientos Generales de Sentencias Claras de la Corte Suprema de Justicia de la Nación, y reconocer qué elementos distinguen una sentencia comprensible de una que no lo es.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En octubre de 2023, la Corte Suprema de Justicia de la Nación aprobó, mediante la Resolución 2640/2023, los Lineamientos Generales de Sentencias Claras. La Corte reconoció que, "dada la especialidad del lenguaje jurídico", resultaba pertinente adoptar prácticas que faciliten la comprensión de las sentencias por parte de sus destinatarios — no solo las partes del juicio y sus abogados, sino también la comunidad académica, la prensa y la sociedad en su conjunto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Los lineamientos proponen una estructura concreta de ocho pasos para redactar una sentencia: describir el objeto de la demanda, relatar los hechos del caso, explicar cómo había resuelto la cuestión la decisión apelada, identificar a quién recurre y cuáles son sus agravios, explicitar el cumplimiento de los requisitos de admisibilidad, explicitar qué debe resolver el Tribunal, desarrollar los argumentos utilizados, y redactar con claridad la parte resolutiva final.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Un principio central es que la sentencia debe ser autosuficiente, de forma que para comprenderla no haga falta recurrir a otros documentos. Los lineamientos recomiendan que los argumentos se concatenen metódicamente, se desarrollen de manera precisa y congruente, y que se prioricen las oraciones cortas, evitando las "oraciones-párrafo" que encadenan muchas ideas distintas en una sola frase larga.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Esta iniciativa de la Corte Suprema no surge aislada: se suma a una Red de Lenguaje Claro que ya venía desarrollándose en distintas provincias argentinas desde hace años, con guías propias en jurisdicciones como Formosa, Córdoba, Buenos Aires, Entre Ríos y la Ciudad Autónoma de Buenos Aires, todas orientadas a la misma idea: que comprender una decisión judicial no debería ser un privilegio de quien ya domina el lenguaje jurídico.',
        },
      ],
      preguntaDetonadora: 'Si tuvieras que explicarle a alguien de tu familia una sentencia judicial real, ¿cuánto de lo que dice tendrías que "traducir" primero?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Traducir una sentencia" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá un fragmento breve de una sentencia judicial real, con lenguaje técnico. En grupos, lo reescriben en lenguaje claro, manteniendo el sentido exacto, sin agregar ni quitar información.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestra sentencia en ocho pasos" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben un caso ficticio simple (un conflicto escolar, un reclamo vecinal, algo cotidiano) que va a ser "resuelto" como si fuera una sentencia.',
                'Redactan su resolución siguiendo los ocho pasos de los Lineamientos: objeto, hechos, decisión previa si corresponde, quién recurre y por qué, admisibilidad, qué hay que resolver, argumentos, y parte resolutiva clara.',
                'Aplican las recomendaciones de lenguaje claro: oraciones cortas, sin "oraciones-párrafo", autosuficiencia (que no haga falta otro documento para entenderla).',
                'Intercambian su "sentencia" con otro grupo, que evalúa si la entendió sin dificultad.',
              ],
            },
          ],
        },
      ],
      frase: '"Una sentencia que solo entienden los abogados no es transparente: es un secreto bien guardado con apariencia de documento público."',
      glosario: ['Lenguaje claro', 'Sentencia autosuficiente', 'Justicia abierta', 'Oración-párrafo', 'Admisibilidad'],
      referencias: [
        'Corte Suprema de Justicia de la Nación (2023). Resolución 2640/2023 — Lineamientos Generales de Sentencias Claras.',
      ],
    },
  },
  justiciaYPruebaDigital: {
    titulo: 'Justicia y prueba digital',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la justicia necesita comprender evidencia digital, proteger intimidad y ofrecer procedimientos comprensibles. La innovación judicial debe combinar tecnología con lenguaje claro, justicia abierta y prevención de victimización secundaria.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a un procedimiento judicial que incorpora tecnología, la pregunta no debería limitarse a si mejoró el acceso, sino a reconstruir si también mejoró la comprensión, qué condiciones lo vuelven relevante, y qué evidencia permite distinguir una innovación real de una que solo acelera trámites sin resolver nada de fondo.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — suponer que digitalizar un expediente ya resolvió el acceso a la justicia, sin preguntarse si la persona entiende lo que lee, es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — acá, eso significa que ni basta con que la institución digitalice, ni alcanza con que la persona "se informe más": hace falta que el lenguaje, los procedimientos y los límites de la tecnología estén pensados para que ambas partes se encuentren.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que la digitalización judicial, por sí sola, resuelva el acceso a la justicia: puede mejorar gestión y seguir siendo incomprensible para quien necesita ejercer un derecho.',
          'No es que la necesidad de preservar evidencia digital justifique llevarse todo lo que un dispositivo contiene: necesidades probatorias deben convivir con privacidad y proporcionalidad.',
          'No es que toda intervención institucional frente a un caso de contenido íntimo, violencia o fraude sea, automáticamente, una ayuda: la calidad de la respuesta incluye evitar exposición innecesaria y preservar la agencia de la persona afectada.',
          'No es que la IA judicial pueda tomar decisiones por su cuenta: puede asistir tareas, pero la legitimidad y la responsabilidad permanecen siempre en autoridades y procedimientos humanos.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Si lo que está en juego es la comprensión de un procedimiento, la proporcionalidad de una recolección de evidencia, o el riesgo de victimización secundaria frente a una institución.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si el lenguaje usado es claro, si lo que se recolectó como prueba es proporcionado a lo que se necesitaba probar, y si una herramienta de IA está asistiendo una tarea o reemplazando una decisión que debería seguir siendo humana.',
        '**¿Qué cambio sería proporcionado?** Un cambio que no retroceda en el acceso o la eficiencia ya lograda, pero que sume comprensión, proporcionalidad probatoria o prevención de exposición innecesaria donde todavía falte.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'En el marco de una investigación por una estafa puntual, un juzgado ordena el secuestro completo del celular de una persona que figura como testigo del hecho —no como imputada—, con el objetivo de obtener la conversación de WhatsApp donde supuestamente coordinó el encuentro con el estafador. El celular queda retenido durante semanas en custodia, y el peritaje incluye la extracción completa de todo el dispositivo: fotos familiares, conversaciones con su pareja, aplicaciones de salud, correos laborales de un trabajo que no tiene relación alguna con el caso. La persona se queda, mientras tanto, sin su único teléfono, y con la incertidumbre de qué parte de su vida privada terminó copiada en un informe pericial.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: para obtener una conversación puntual, relevante para el caso, se extrajo la totalidad del contenido de un dispositivo que pertenece a alguien que ni siquiera está acusado de nada. Participan la persona testigo, que perdió el uso de su celular y la privacidad de todo lo que no tenía relación con el hecho investigado; el juzgado, que necesitaba esa conversación específica como prueba; y el equipo de peritos, que ejecutó la extracción completa porque era el procedimiento estándar disponible.',
        ],
        nota: '*(Acá me pregunto: ¿hacía falta todo el celular para una sola conversación, o alguien asumió que "más completo" era, sin más, "más seguro" para la investigación?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la evidencia digital exige integridad, contexto y preservación, pero eso no justifica recolecciones indiscriminadas. Acá se confundió la necesidad de preservar una prueba concreta con la necesidad de llevarse todo el dispositivo, ignorando que los dispositivos contienen información ajena al conflicto que no debería formar parte de ninguna investigación.',
          'Qué condiciones sociotécnicas intervienen: el procedimiento de extracción forense disponible estaba diseñado para copiar el contenido completo de un dispositivo, y nadie se preguntó si existía una alternativa más acotada —como extraer solo la conversación puntual, con su contexto inmediato— antes de aplicar el procedimiento estándar. Tampoco hubo ninguna instancia donde alguien evaluara la proporcionalidad entre lo que se necesitaba probar y lo que efectivamente se iba a recolectar.',
        ],
        nota: '*(Acá me pregunto: si existía una forma de extraer solo esa conversación con su contexto, ¿por qué se usó, en cambio, el método que se lleva todo?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: limitar la extracción a la conversación relevante para el hecho investigado, incluyendo el contexto necesario para que esa evidencia tenga sentido (quién participó, fechas, mensajes inmediatamente anteriores y posteriores si son pertinentes), sin copiar la totalidad del dispositivo. Si en el curso de la investigación aparece una razón concreta para ampliar el alcance, esa ampliación debería justificarse puntualmente, no asumirse desde el principio.',
        ],
        nota: '*(Acá me pregunto: ¿qué perdería realmente la investigación si, en vez de todo el celular, solo tuviera la conversación específica y su contexto inmediato?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al juzgado ni a los peritos: no les corresponde sentir que investigar el hecho fue un error, ni que necesitar evidencia digital de un dispositivo sea, en sí mismo, desproporcionado — la prueba era necesaria y legítima.',
          'Qué podría salir mal: que, por la incomodidad de este caso, se evite pedir evidencia digital en investigaciones futuras donde sí sea imprescindible, perdiendo pruebas relevantes; o que, al revés, el procedimiento de extracción completa siga aplicándose por defecto en cualquier caso, sin que nadie vuelva a preguntarse por la proporcionalidad. Lo que ajustaría para la próxima vez: que toda orden de secuestro o extracción de un dispositivo defina, desde el principio, el alcance específico de lo que se necesita obtener, y que el procedimiento técnico se ajuste a ese alcance, en vez de aplicar por costumbre la extracción más amplia disponible.',
        ],
        nota: '*(Acá me pregunto: en los procedimientos de mi propio entorno —institucional, laboral, educativo— donde se recolecta información digital como evidencia, ¿alguien definió alguna vez el alcance proporcionado antes de recolectar, o se toma siempre "todo lo que se pueda"?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué está en juego: lenguaje claro y justicia abierta, proporcionalidad en la evidencia digital, o límites de la IA judicial. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un juzgado de familia empieza a redactar sus resoluciones evitando los latinismos y las oraciones largas, explicando primero en un párrafo simple qué fue lo que se decidió, antes de desarrollar los fundamentos técnicos. Las partes, al recibir la resolución, entienden de entrada qué cambió en su situación, aunque no tengan formación jurídica.',
        analisis:
          '¿Qué está en juego acá? Lenguaje claro y justicia abierta. El juzgado no cambió el contenido de sus decisiones ni su rigor técnico: cambió cómo las comunica, para que la innovación en la redacción conviva con la capacidad real de comprender el procedimiento por parte de quienes reciben la resolución. Es exactamente la idea de que digitalizar o modernizar no alcanza si no viene acompañado de comprensión.',
        nota: '*(Si elegiste "proporcionalidad en la evidencia digital" o "límites de la IA judicial": acá no hay ninguna recolección de prueba ni ningún sistema automatizado en juego — es, puntualmente, una decisión sobre cómo se redacta y comunica una resolución.)*',
      },
      {
        clave: 's2',
        enunciado:
          'En una causa por amenazas a través de redes sociales, la fiscalía solicita y obtiene únicamente las publicaciones y mensajes directos relacionados con la persona denunciante, en el período de tiempo relevante para el hecho, sin acceder a otras conversaciones privadas de la cuenta investigada que no tienen relación con la causa.',
        analisis:
          '¿Qué está en juego acá? Proporcionalidad en la evidencia digital. La fiscalía definió un alcance acotado a lo que realmente necesitaba probar —las amenazas concretas, en el período relevante— sin extender la recolección a información ajena al conflicto. Es exactamente lo que el capítulo pide: que las necesidades probatorias convivan con privacidad y proporcionalidad, en vez de recolectar de forma indiscriminada.',
        nota: '*(Si elegiste "lenguaje claro" o "límites de la IA judicial": acá no está en juego cómo se redacta una resolución ni ningún sistema de inteligencia artificial — es, específicamente, una decisión bien acotada sobre qué evidencia digital recolectar.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Un tribunal incorpora un sistema de inteligencia artificial que, a partir de los datos de una causa, sugiere automáticamente una pena específica, y el juez la aplica directamente, sin revisar los fundamentos ni explicar por qué coincide o no con la sugerencia del sistema.',
        analisis:
          '¿Qué está en juego acá? Límites de la IA judicial. El sistema pasó de asistir una tarea a tomar, en los hechos, la decisión final, sin que quedara ninguna responsabilidad humana visible detrás de esa pena. Es exactamente lo que el capítulo advierte: la IA judicial puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos — y acá esa responsabilidad se diluyó por completo.',
        nota: '*(No hay una sola forma de resolver qué asistencia de IA sería aceptable en este tipo de casos, pero sí está claro qué falló: que la decisión final no muestre ningún razonamiento humano propio, más allá de aceptar lo que sugirió el sistema.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de un equipo judicial sobre cómo incorporar tecnología en una investigación. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Si necesitamos evidencia digital para este caso, lo más seguro es llevarnos todo el dispositivo completo. Mejor tener de más por las dudas, así no nos falta nada después.',
      citaB:
        'Tenemos un sistema de IA que analiza la causa y recomienda directamente qué resolver. Si el sistema ya lo analizó, no hace falta que el juez revise todo de nuevo, así ganamos tiempo.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** confunde necesidad probatoria con recolección indiscriminada. La evidencia digital exige integridad, contexto y preservación, pero eso no justifica recolecciones indiscriminadas: llevarse todo "por las dudas" ignora que los dispositivos contienen información ajena al conflicto que no debería recolectarse solo porque es técnicamente posible.',
      errorB:
        '**Comentario B** le transfiere a un sistema de IA una decisión que debe seguir siendo de una autoridad humana. La IA judicial puede asistir tareas, pero no puede reemplazar la revisión y la responsabilidad del juez: aceptar automáticamente lo que recomienda un sistema, sin revisión propia, es exactamente lo que el capítulo dice que no puede pasar.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno aplicó el criterio de proporcionalidad que corresponde. Uno lo ignoró del lado de la recolección de datos ("mejor de más"); el otro lo ignoró del lado de la decisión judicial ("mejor que decida el sistema").',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer cuándo una digitalización judicial mejora la gestión pero sigue siendo incomprensible para quien necesita ejercer un derecho',
        enunciado: 'Una persona accede a su sentencia judicial online, en segundos, desde su celular, pero no entiende buena parte de lo que dice por los tecnicismos y las oraciones largas. ¿Qué dice el capítulo sobre esta situación?',
        opciones: [
          { id: 'a', texto: 'Que el problema ya está resuelto, porque el acceso digital funcionó correctamente.' },
          { id: 'b', texto: 'Que la persona debería contratar un abogado para que le explique cualquier documento judicial.' },
          { id: 'c', texto: 'Que la digitalización judicial puede mejorar acceso y gestión y seguir siendo incomprensible para quien necesita ejercer derechos, por lo que justicia abierta y lenguaje claro siguen siendo necesarios.' },
          { id: 'd', texto: 'Que el problema solo existe si la persona pierde el juicio.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo distingue explícitamente acceso de comprensión: que el sistema digital funcione no significa que la persona entienda lo que recibió.',
          b: 'El capítulo no traslada la solución a que cada persona consiga asistencia externa: plantea que el lenguaje claro y la justicia abierta son responsabilidad de la propia institución.',
          d: 'La comprensión de una sentencia importa más allá del resultado del juicio: entender qué se decidió y por qué es parte del derecho a ejercer, gane o pierda la persona.',
        },
      },
      {
        objetivo: 'entender por qué la necesidad de integridad y preservación de la evidencia digital no justifica recolecciones indiscriminadas',
        enunciado:
          'Para obtener una conversación puntual, una investigación ordena la extracción completa de todo un dispositivo, incluyendo fotos, correos laborales y aplicaciones sin relación con el caso. ¿Qué principio del capítulo se está ignorando?',
        opciones: [
          { id: 'a', texto: 'Que la evidencia digital exige integridad, contexto y preservación, pero eso no justifica recolecciones indiscriminadas: las necesidades probatorias deben convivir con privacidad y proporcionalidad.' },
          { id: 'b', texto: 'Que ningún dispositivo puede usarse como evidencia digital bajo ninguna circunstancia.' },
          { id: 'c', texto: 'Que la preservación de evidencia nunca debe incluir contexto, solo el dato puntual.' },
          { id: 'd', texto: 'Que la proporcionalidad solo aplica cuando la persona investigada es la dueña del dispositivo, no cuando es testigo.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no rechaza el uso de dispositivos como evidencia: reconoce que la evidencia digital exige integridad, contexto y preservación, legítimamente. Lo que cuestiona es la recolección indiscriminada, no la evidencia digital en sí.',
          c: 'El capítulo sí reconoce que la evidencia necesita contexto para tener sentido: el problema no es incluir contexto pertinente, sino llevarse información completamente ajena al conflicto.',
          d: 'El capítulo no distingue entre imputados y testigos a la hora de exigir proporcionalidad: la privacidad y la proporcionalidad aplican a cualquier persona cuyo dispositivo se recolecte.',
        },
      },
      {
        objetivo: 'identificar cuándo la respuesta de una institución judicial produce victimización secundaria, y qué significa preservar agencia en contenido íntimo, violencia o fraude',
        enunciado:
          'En un caso de contenido íntimo difundido sin consentimiento, una institución judicial hace que la víctima repita su relato varias veces ante distintas personas, sin coordinación entre ellas. ¿Qué dice el capítulo sobre este tipo de respuesta?',
        opciones: [
          { id: 'a', texto: 'Que es un procedimiento normal y necesario que no requiere ningún ajuste.' },
          { id: 'b', texto: 'Que la victimización secundaria solo ocurre si la institución actúa de mala fe.' },
          { id: 'c', texto: 'Que la víctima debería evitar denunciar este tipo de casos para no pasar por el proceso judicial.' },
          { id: 'd', texto: 'Que la calidad de la respuesta institucional incluye evitar exposición innecesaria y preservar agencia, y que no hacerlo puede producir victimización secundaria.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo es explícito en que la victimización secundaria obliga a revisar cómo responde la propia institución: repetir el relato sin necesidad no es un procedimiento neutral.',
          b: 'La victimización secundaria puede ocurrir aunque la institución actúe de buena fe, simplemente por no revisar cómo está respondiendo — no depende de la intención, sino del efecto.',
          c: 'El capítulo no desalienta la denuncia: plantea que la institución tiene que mejorar cómo responde, no que la víctima deba evitar el proceso judicial.',
        },
      },
      {
        objetivo: 'comprender qué puede y qué no puede hacer la IA judicial',
        enunciado:
          'Un tribunal incorpora un sistema de IA que sugiere una pena, y el juez la aplica directamente sin revisar los fundamentos. ¿Qué principio del capítulo se está violando?',
        opciones: [
          { id: 'a', texto: 'Que ningún tribunal puede usar inteligencia artificial bajo ninguna circunstancia.' },
          { id: 'b', texto: 'Que la IA judicial puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos.' },
          { id: 'c', texto: 'Que la IA judicial debería reemplazar completamente a los jueces para evitar errores humanos.' },
          { id: 'd', texto: 'Que el problema solo existe si la pena sugerida por el sistema resulta ser incorrecta.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo no prohíbe el uso de IA en el ámbito judicial: reconoce que puede asistir tareas. El problema es que, en este caso, dejó de asistir y pasó a decidir.',
          c: 'El capítulo sostiene exactamente lo contrario: la legitimidad y la responsabilidad deben permanecer en autoridades humanas, no transferirse a un sistema.',
          d: 'El problema no depende de si la sugerencia resultó acertada o no: el problema es que no hubo revisión ni fundamentación humana propia, independientemente del resultado.',
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
        muestra: 'Confunde acceso digital con comprensión real, o justifica cualquier recolección de datos "porque hace falta evidencia", o delega en un sistema de IA una decisión que debe seguir siendo humana.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión si el problema es de lenguaje claro, de proporcionalidad probatoria, o de límites de la IA judicial.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres dimensiones, identifica cuál está en juego en una situación concreta y propone un cambio proporcionado que no retrocede en el acceso ya logrado.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cuándo una respuesta institucional produce victimización secundaria, y distingue con precisión cuándo una herramienta de IA está asistiendo una tarea de cuándo está reemplazando una decisión humana.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué la digitalización judicial puede mejorar la gestión y seguir siendo incomprensible, por qué la evidencia digital exige proporcionalidad y no recolección indiscriminada, y por qué la IA judicial puede asistir pero nunca reemplazar la decisión humana. Lo que cambia, a partir de acá, es cómo mirás cualquier procedimiento judicial o administrativo que incorpore tecnología: no solo si es más rápido, sino si sigue siendo comprensible, proporcionado y responsable.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde la tecnología esté mediando un procedimiento, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —comprensión, proporcionalidad, responsabilidad humana— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la persona que accedió a su sentencia en segundos pero no entendió una sola palabra de lo que decía. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de ese documento identificás ahora como un problema de lenguaje, no de acceso? ¿Qué procedimiento de tu propio entorno mirarías ahora con esta misma pregunta? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Evidencia electrónica: por qué la cadena de custodia importa tanto como la prueba misma',
      objetivo:
        'Comprender qué es la evidencia electrónica según el material educativo de la Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC), y reconocer por qué su integridad y su cadena de custodia son tan determinantes como el contenido mismo de la prueba.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Según el material "Identificación y Manejo de Evidencia Electrónica", desarrollado por UNODC dentro de su iniciativa de Educación para la Justicia (E4J), tradicionalmente la evidencia se reunía en forma física. Con la revolución digital y el uso de dispositivos electrónicos en casi todos los aspectos de la vida, se volvió necesario admitir en los procesos judiciales evidencia extraída de dispositivos electrónicos, especialmente de aquellos con capacidad de almacenamiento: a esto se le llama evidencia electrónica.',
        },
        {
          tipo: 'parrafo',
          texto:
            'En la práctica judicial moderna, la evidencia electrónica no es distinta de la evidencia tradicional en un punto central: quien la presenta en un proceso legal tiene que poder demostrar que permaneció intacta desde el momento en que fue recolectada, incluyendo el propio proceso de recolección. El material subraya que, al ser la evidencia electrónica habitualmente mucho más fácil de manipular que las formas tradicionales de datos, requiere un cuidado especial en su manejo para ser admisible ante un tribunal.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Por eso, el secuestro, la custodia, el control, la transferencia, el análisis y la disposición final de la evidencia deben documentarse cronológicamente de manera adecuada, constituyendo lo que se conoce como cadena de custodia. Cualquier interrupción o inconsistencia en esa cadena puede generar dudas sobre la legitimidad de la prueba y comprometer el caso completo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Este principio de integridad trabaja junto con el de proporcionalidad que señala el capítulo: no alcanza con preservar correctamente lo que se recolectó si, desde el principio, se recolectó más de lo necesario. Una cadena de custodia impecable sobre información que nunca debió extraerse —por ser ajena al conflicto— no resuelve el problema de fondo: la proporcionalidad se define antes de recolectar, la integridad se cuida después.',
        },
      ],
      preguntaDetonadora: 'Si alguien tuviera que demostrar, ante un tribunal, que la evidencia digital de tu celular no fue alterada desde el momento en que se la llevaron, ¿qué tendría que poder mostrar?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Qué parte de la cadena falló?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá el caso de "Un caso resuelto" (la extracción completa del celular del testigo). En grupos, identifican en qué momento del proceso —recolección, transferencia, análisis— debería haberse aplicado un criterio de proporcionalidad, antes de que la cadena de custodia siquiera empezara.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñar un protocolo de recolección proporcionada" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben un caso ficticio donde se necesita evidencia digital de un dispositivo.',
                'Diseñan un protocolo breve que incluya: qué alcance específico se va a recolectar (no "todo el dispositivo"), cómo se va a documentar la cadena de custodia desde ese momento, y quién sería responsable de autorizar cualquier ampliación posterior del alcance.',
                'Comparan su protocolo con el procedimiento que falló en el caso de "Un caso resuelto".',
                'Presentan su protocolo al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"Una prueba bien conservada, pero mal recolectada, sigue siendo un problema: la proporcionalidad no se repara después, se decide antes."',
      glosario: ['Evidencia electrónica', 'Cadena de custodia', 'Admisibilidad', 'Integridad de la prueba', 'Proporcionalidad probatoria'],
      referencias: [
        'UNODC — Oficina de las Naciones Unidas contra la Droga y el Delito, iniciativa Educación para la Justicia (E4J). Identification and Handling of Electronic Evidence Handbook.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien que tener acceso rápido a un documento judicial no es lo mismo que poder entenderlo?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Justicia en el Territorio Híbrido, en una tarjeta',
      parrafos: [
        'La digitalización judicial puede mejorar acceso y gestión y seguir siendo incomprensible para quien necesita ejercer derechos. Justicia abierta y lenguaje claro recuerdan que la innovación tecnológica necesita convivir con participación, transparencia y capacidad de comprender procedimientos.',
        '**Proporcionalidad en la evidencia digital:** la evidencia digital exige integridad, contexto y preservación, pero no justifica recolecciones indiscriminadas. Dispositivos contienen información ajena al conflicto; necesidades probatorias deben convivir con privacidad y proporcionalidad.',
        '**Los límites de la IA judicial:** la IA judicial puede asistir tareas, pero la legitimidad y la responsabilidad permanecen en autoridades y procedimientos humanos. La victimización secundaria obliga a revisar cómo la propia institución responde.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Gobierno y Comunidad Digital. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referencias: ['John Dewey', 'Elinor Ostrom', 'Beth Noveck', 'Oscar Oszlak'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Justicia en el territorio híbrido no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[JUSTICIA_TERRITORIO_HIBRIDO_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
