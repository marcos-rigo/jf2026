// Contenido de /tematicas/autonomia-progresiva-en-familia. Misma forma que
// lib/universidad-ia-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo hay
// contenido escrito para docentes (ver components/autonomia-familia/).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/autonomia-familia/ficha-aula';

export const AUTONOMIAFAMILIA_FALLBACK: Audiencia = 'docentes';

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
  { id: 'confianza-y-etapas', number: '05', label: 'Confianza y etapas', shortLabel: 'Confianza y etapas' },
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
  confianzaYEtapas: {
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

const fichaVacia: FichaAulaProps = {
  titulo: '',
  objetivo: '',
  desarrollo: [],
  preguntaDetonadora: '',
  actividades: [],
  frase: '',
  glosario: [],
  referencias: [],
};

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Autonomía Progresiva en Familia',
    subtitulo: 'De controlar a acompañar',
    bajada:
      'Las familias modelan tempranamente el lugar que la tecnología ocupa en vínculos, privacidad y regulación emocional. Las prácticas adultas enseñan aun cuando no pretendan hacerlo. Por eso acompañar exige coherencia más que perfección. Esta temática forma parte del grupo Infancia y Crianza de la plataforma y trabaja esa idea: no se trata de ser una familia perfecta, sino de que lo que se hace y lo que se dice vayan en la misma dirección.',
    listaTitulo: 'Vas a:',
    lista: [
      'Reconocer que las prácticas adultas enseñan aunque no se lo propongan, y que acompañar exige coherencia más que perfección: lo que un adulto hace con su propia tecnología pesa tanto como lo que le dice a un niño, niña o adolescente que haga con la suya.',
      'Entender que el control necesita transformarse progresivamente en autonomía: una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir que se desarrolle criterio propio. El acompañamiento intergeneracional combina límites, conversación, aprendizaje mutuo y transferencia gradual de responsabilidad.',
      'Comprender que la confianza familiar constituye una infraestructura preventiva: poder contar un error sin esperar humillación aumenta la detección temprana y las posibilidades de ayuda. Esta función es insustituible, aunque la familia no puede asumir responsabilidades que pertenecen a escuelas, plataformas o al Estado.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer que las prácticas adultas enseñan aunque no se lo propongan, y que por eso acompañar exige coherencia más que perfección: lo que se modela importa tanto como lo que se dice.',
      'Entender por qué una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir el desarrollo de criterio propio.',
      'Identificar los cuatro componentes del acompañamiento intergeneracional: límites, conversación, aprendizaje mutuo y transferencia gradual de responsabilidad, y cómo se combinan entre sí.',
      'Comprender la confianza familiar como infraestructura preventiva —poder contar un error sin esperar humillación aumenta la detección temprana y las posibilidades de ayuda— y reconocer los límites de lo que la familia puede asumir frente a lo que corresponde a la escuela, las plataformas o el Estado.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Qué aprende tu hijo o hija: lo que le decís, o lo que te ve hacer?',
    parrafos: [
      'Una familia tiene una regla clara: nada de celular en la mesa, durante la cena es momento de estar juntos. La aplican con firmeza con los chicos. Una noche, en medio de la cena, le vibra el celular a uno de los padres. Lo mira "solo un segundo" para ver qué era. El hijo de diez años lo nota, no dice nada, pero la próxima vez que le piden que deje el celular lejos de la mesa, responde: "pero vos también mirás el tuyo". No hay forma de explicarle la diferencia que no suene a excusa.',
      'La regla en sí era razonable, y explicarla con palabras estaba bien. El problema no fue la regla: fue que, en el momento en que más importaba sostenerla, la coherencia faltó. Los chicos no aprenden principalmente de lo que se les explica: aprenden de lo que ven hacer a los adultos de referencia, incluso cuando esos adultos no tienen ninguna intención de estar "enseñando" en ese momento. Una regla incumplida una sola vez, delante de quien se supone que tiene que cumplirla, puede pesar más que cien veces que se explicó bien.',
    ],
    problema:
      'Pensá en alguna regla digital de tu casa o tu entorno —de pantallas, de horarios, de privacidad— que vos mismo no cumplís siempre. ¿Qué está aprendiendo, en ese momento, quien te mira no cumplirla?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Las familias modelan tempranamente el lugar que la tecnología ocupa en vínculos, privacidad y regulación emocional. Las prácticas adultas enseñan aun cuando no pretendan hacerlo. Por eso acompañar exige coherencia más que perfección — no se trata de hacer todo bien siempre, sino de que lo que se dice y lo que se hace no se contradigan en los momentos que más importan.',
      'El control necesita transformarse progresivamente en autonomía. Una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia y puede impedir desarrollar criterio: alguien que nunca tuvo que decidir por sí mismo, porque un adulto decidía todo por él, no tiene cómo entrenar ese criterio para el momento en que ya no haya nadie supervisando. El acompañamiento intergeneracional combina límites, conversación, aprendizaje mutuo y transferencia gradual de responsabilidad — los cuatro a la vez, no uno solo.',
      'La confianza familiar constituye una infraestructura preventiva. Poder contar un error sin esperar humillación aumenta la detección temprana y las posibilidades de ayuda. Esta función es insustituible, aunque la familia no puede asumir responsabilidades que pertenecen a escuelas, plataformas o Estado — la confianza en casa no reemplaza un protocolo escolar, ni una plataforma responsable, ni una institución capaz de intervenir cuando hace falta.',
    ],
    preguntaDestacada:
      'Pensá en algo que un niño, niña o adolescente de tu entorno haya dejado de contarte, o de contarle a algún adulto, por miedo a la reacción que iba a generar. ¿Qué parte de esa reacción temida tenía que ver con humillación o castigo, y qué parte era realmente necesaria para ayudar?',
    fichaAula1: {
      titulo: 'Autonomía progresiva en entornos digitales: acompañar sin vigilar',
      objetivo:
        'Comprender el principio de autonomía progresiva aplicado a los entornos digitales, y reconocer estrategias concretas de acompañamiento familiar que se adaptan a la edad y las capacidades de cada niño, niña o adolescente.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Según la Guía de acompañamiento a niños y niñas en los entornos digitales de la Secretaría Nacional de Niñez, Adolescencia y Familia (SENAF) y Faro Digital, desde la primera infancia y hasta los 18 años, las personas adultas deben garantizar un acceso seguro y cuidado a los entornos digitales. El tipo de acompañamiento tiene que adaptarse a medida que niños y niñas crecen y adquieren nuevas capacidades, hasta que logran incorporar medidas de autocuidado propias. La presencia adulta debe siempre fortalecer la autonomía progresiva, no reemplazarla por control permanente.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La guía insiste en que la facultad de poner límites es adulta y no puede delegarse en los propios chicos y chicas, porque todavía no saben autorregularse frente a estímulos diseñados específicamente para generar dependencia. Pero esos límites funcionan mejor cuando son claros, rutinarios e incluyen sus excepciones explicadas, en vez de reglas rígidas o metas inalcanzables que terminan frustrando a todos.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Un punto central de la guía es el ejemplo adulto como referencia: los chicos y las chicas aprenden a usar la tecnología mirando cómo los adultos de confianza la usan, de la misma manera que aprenden a cruzar la calle o a usar una tijera. Cuánto se usa el celular delante de ellos, cómo se cuida la privacidad de las propias cuentas, si se pide consentimiento antes de sacarles una foto: todo eso enseña, se lo proponga o no el adulto.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La guía también aborda el fenómeno del sharenting —compartir en redes la crianza de niños y niñas— como una práctica que requiere conciencia: a medida que crecen, hay que explicarles cómo se cuida su privacidad y la propia, y una vez que comprenden la dinámica de las plataformas, pedirles permiso antes de subir fotos o videos, respetando su decisión si no aceptan.',
        },
      ],
      preguntaDetonadora:
        '¿Las reglas digitales de tu casa o tu aula cambiaron a medida que los chicos y las chicas crecieron, o son las mismas desde el principio?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Lo que hacemos vs. lo que decimos" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, cada uno anota una regla digital que existe en su casa o su entorno, y después anota con honestidad si los adultos de esa casa la cumplen siempre. Comparten, sin exponer casos personales si no quieren, qué tan seguido aparece esa brecha.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Un acompañamiento que crece" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, reciben una franja etaria (primera infancia, 5 a 12 años, adolescencia).',
                'Para esa franja, diseñan una estrategia de acompañamiento digital que combine los cuatro componentes: un límite claro, una forma de conversación, qué podrían aprender los adultos de los chicos en esa etapa, y qué responsabilidad nueva se les podría empezar a transferir.',
                'Presentan su estrategia y la comparan con las de las otras franjas etarias: ¿cómo cambia el acompañamiento de una etapa a la siguiente?',
              ],
            },
          ],
        },
      ],
      frase: '"No se trata de controlar cada paso: se trata de acompañar cada etapa."',
      glosario: [
        'Autonomía progresiva',
        'Acompañamiento intergeneracional',
        'Sharenting',
        'Transferencia gradual de responsabilidad',
        'Coherencia adulta',
      ],
      referencias: [
        'Secretaría Nacional de Niñez, Adolescencia y Familia (SENAF) y Faro Digital (2022). Guía de acompañamiento a niños y niñas en los entornos digitales.',
      ],
    },
  },
  confianzaYEtapas: {
    titulo: 'Confianza y etapas',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la familia constituye un espacio de modelaje y confianza. El objetivo del acompañamiento es transferir progresivamente capacidad de juicio, evitando que el control permanente sustituya el desarrollo de autonomía y que el miedo a la sanción impida pedir ayuda.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación familiar de esta temática, la pregunta no debería limitarse a si el fenómeno existe, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — atribuir cualquier conflicto familiar en torno a la tecnología a "demasiada pantalla" o a "falta de reglas" sin mirar qué combinación particular de factores está en juego es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — en este capítulo, eso significa que ni la sola buena voluntad de una familia ni una regla externa impuesta alcanzan solas: hace falta la combinación de límites, conversación, aprendizaje mutuo y transferencia gradual.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que la familia tenga que ser perfecta para poder acompañar bien: acompañar exige coherencia más que perfección.',
          'No es que más supervisión sea siempre más protección: una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir desarrollar criterio.',
          'No es que la confianza familiar sea suficiente por sí sola: es una infraestructura preventiva insustituible, pero la familia no puede asumir responsabilidades que pertenecen a escuelas, plataformas o Estado.',
          'No es que transferir responsabilidad signifique dejar de acompañar: el acompañamiento intergeneracional combina límites, conversación, aprendizaje mutuo y transferencia gradual, los cuatro a la vez.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte del vínculo familiar, la privacidad o la regulación emocional está en juego en esta situación.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si hay coherencia entre lo que se predica y lo que se hace, si el control se está adaptando a la edad y las capacidades de quien se acompaña, y si existe un clima de confianza donde contar un error no implique humillación.',
        '**¿Qué cambio sería proporcionado?** Un cambio que combine límite, conversación, aprendizaje mutuo y transferencia gradual de responsabilidad, sin trasladarle a la familia una responsabilidad que en realidad corresponde a otra institución.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una familia tiene un hijo de quince años. En otras áreas de su vida, ya demostró criterio: organiza solo sus estudios, administra su propio dinero de changas, resuelve conflictos con amigos sin que nadie intervenga. Pero en lo digital, las reglas no cambiaron desde que tenía diez años: sus padres revisan su celular todas las noches sin avisarle, tienen acceso a todas sus contraseñas y deciden, sin consultarlo, qué aplicaciones puede o no tener instaladas. Él no se queja abiertamente, pero empezó a usar el celular de un amigo para ciertas conversaciones, y a borrar su historial todos los días, algo que antes no hacía.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: el nivel de supervisión digital se mantuvo exactamente igual mientras el adolescente crecía y mostraba criterio creciente en otras áreas de su vida. Participan el adolescente, que encontró otras formas de tener privacidad, cada vez más alejadas del control familiar y también del acompañamiento; y la familia, que sigue aplicando la misma estrategia de hace cinco años sin haberla revisado.',
        ],
        nota: '(Acá me pregunto: ¿el nivel de supervisión que tenemos hoy corresponde a quién es este chico ahora, o a quién era hace cinco años?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: el desarrollo de autonomía y criterio propio en el ámbito digital, justo cuando ese chico ya demostró tenerlo en otras áreas. Una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir desarrollar criterio — y acá, además, ya dejó de ser efectiva: el adolescente encontró una forma de eludirla por completo, usando el celular de un amigo.',
          'Qué condiciones sociotécnicas intervienen: la familia nunca definió ningún criterio para ir ajustando la supervisión a medida que el hijo creciera — la regla quedó fija, mientras todo lo demás en la relación con él fue cambiando. Al no haber transferencia gradual de responsabilidad, lo que debería ser un acompañamiento terminó funcionando como un control que el adolescente empezó a esquivar, perdiendo además la confianza que permitiría que, si algo le pasara, se lo contara a su familia en vez de ocultarlo.',
        ],
        nota: '(Acá me pregunto: si el objetivo era protegerlo, ¿la supervisión total lo está logrando, o está logrando que haga lo mismo pero sin que nadie lo sepa?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no eliminar cualquier forma de acompañamiento, sino transferir responsabilidad de forma gradual y explícita, igual que ya ocurrió con el dinero o los estudios. Eso podría significar dejar de revisar el celular sin avisar, y en cambio proponer una conversación abierta sobre qué usa y para qué, manteniendo algunos límites claros (por ejemplo, saber qué aplicaciones tiene) pero sacando otros que ya no se corresponden con su edad (como tener acceso a todas sus contraseñas sin ningún motivo puntual).',
        ],
        nota: '(Acá me pregunto: ¿qué parte del control actual todavía tiene sentido, y qué parte solo sigue ahí porque nunca nadie la revisó?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la familia: no le corresponde sentir que preocuparse por lo digital fue un error, ni que cualquier forma de límite es, por definición, excesiva.',
          'Qué podría salir mal: que la transferencia de responsabilidad se haga de golpe, sin ningún acompañamiento, dejando al adolescente completamente solo frente a situaciones para las que todavía no tiene experiencia; o que, por miedo a eso, la familia decida no cambiar nada y siga perdiendo la confianza de su hijo, empujándolo cada vez más hacia soluciones ocultas. Lo que ajustaría para la próxima vez: revisar periódicamente, no solo una vez, si el nivel de acompañamiento digital sigue correspondiendo a la edad y las capacidades reales del adolescente, de la misma manera que ya se hace naturalmente con otras áreas de su vida.',
        ],
        nota: '(Acá me pregunto: en mi propia familia o mi propio entorno, ¿hay alguna regla digital que nunca se actualizó desde que se puso por primera vez?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué falta en el acompañamiento: coherencia, transferencia gradual, o confianza. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un padre le repite constantemente a su hija de nueve años que "no hay que creerle todo lo que se lee en internet". La misma semana, reenvía al grupo familiar de WhatsApp un mensaje con una noticia alarmante, sin verificar si era cierta, "por las dudas".',
        analisis:
          '¿Qué falta en el acompañamiento? Coherencia. El mensaje que el padre transmite con palabras —verificar antes de creer— es exactamente lo que no hizo él mismo al reenviar algo sin chequear. Su hija no va a aprender principalmente de la frase que le repiten: va a aprender de lo que ve hacer a su padre, que en este caso contradice directamente lo que le enseña.',
        nota:
          '(Si elegiste "transferencia gradual" o "confianza": acá no hay ningún problema de que el control no se adapte a la edad, ni de que la hija tenga miedo de contar algo — el problema es, puntualmente, la distancia entre lo que se predica y lo que se hace.)',
      },
      {
        clave: 's2',
        enunciado:
          'Una madre sigue revisando personalmente cada contraseña y cada conversación de su hijo de dieciséis años, de la misma forma exacta que lo hacía cuando tenía diez. Él ya maneja solo su propio dinero, elige sus materias en la escuela y organiza sus salidas con amigos sin supervisión directa.',
        analisis:
          '¿Qué falta en el acompañamiento? Transferencia gradual. El nivel de control digital quedó congelado en una etapa anterior, mientras que en otras áreas de su vida el adolescente ya demostró y ejerce autonomía. El acompañamiento intergeneracional necesita combinar límites con transferencia gradual de responsabilidad, no mantener fija la misma estrategia sin importar cuánto creció la persona acompañada.',
        nota:
          '(Si elegiste "coherencia": no hay, en este caso, ninguna contradicción entre lo que la madre dice y lo que hace — el control es consistente, el problema es que no se actualizó a la edad y las capacidades actuales de su hijo.)',
      },
      {
        clave: 's3',
        enunciado:
          'Un adolescente recibió un mensaje que lo incomodó mucho, pero no se lo cuenta a nadie en su casa. Cuando se le pregunta por qué, dice que la última vez que contó algo parecido, sus padres le sacaron el celular por un mes "para que aprenda" y repitieron el tema en cada reunión familiar durante semanas.',
        analisis:
          '¿Qué falta en el acompañamiento? Confianza. La consecuencia que siguió a la vez anterior que contó algo —castigo prolongado y exposición repetida— le enseñó que contar un error trae humillación, no ayuda. La confianza familiar constituye una infraestructura preventiva precisamente porque poder contar algo sin esperar humillación aumenta la detección temprana; cuando esa infraestructura se rompe, el adolescente deja de contar, no porque le vaya mejor, sino porque aprendió que es más seguro callarse.',
        nota:
          '(No hay una sola forma de reparar esta confianza ya dañada, pero sí está claro qué falló: no fue que no hubiera reglas, fue que contar un error salió más caro que quedarse callado.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los consejos que dieron dos personas distintas a una familia preocupada por el uso digital de sus hijos adolescentes. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'La única forma de estar tranquilos es tener acceso total a todo lo que hacen en el celular, sin excepciones, hasta que sean mayores de edad.',
      citaB:
        'A esta edad ya son grandes, lo mejor es dejarlos tranquilos con su privacidad y no meterse en lo digital.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Consejo A** confunde protección con control permanente. Una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir desarrollar criterio — mantener acceso total "hasta que sean mayores" no deja ningún espacio para la transferencia gradual de responsabilidad que el acompañamiento necesita.',
      errorB:
        '**Consejo B** confunde dar autonomía con dejar de acompañar. El acompañamiento intergeneracional combina límites, conversación, aprendizaje mutuo y transferencia gradual — no es eliminar la presencia adulta de golpe, sino ir ajustándola. "No meterse" no es autonomía progresiva: es ausencia.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno piensa el acompañamiento como algo que se ajusta gradualmente. Uno lo fija en el máximo control para siempre; el otro salta directamente al otro extremo, sin ningún paso intermedio de transferencia.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer que las prácticas adultas enseñan aunque no se lo propongan, y que la coherencia importa más que la perfección',
        enunciado:
          'Un padre le pide a su hija que no use el celular en la mesa, y un día él mismo lo revisa "solo un segundo" durante la cena. ¿Qué dice el capítulo sobre este tipo de situación?',
        opciones: [
          {
            id: 'a',
            texto:
              'Las prácticas adultas enseñan aun cuando no pretendan hacerlo, por lo que acompañar exige coherencia más que perfección: ese momento puntual puede pesar más que la regla explicada muchas veces.',
          },
          { id: 'b', texto: 'No tiene ninguna importancia, porque fue solo una vez.' },
          { id: 'c', texto: 'Lo importante es que la regla se explique bien con palabras, independientemente de si el adulto la cumple.' },
          { id: 'd', texto: 'Los chicos y chicas no prestan atención a lo que hacen los adultos, solo a lo que les dicen.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no plantea que la coherencia se mida por la cantidad de veces: una sola excepción, en el momento que más importa, puede enseñar más que muchas explicaciones correctas.',
          c: 'El capítulo es explícito en que las prácticas enseñan, no solo las palabras: una explicación bien hecha no compensa una práctica contradictoria.',
          d: 'Es justo lo contrario de lo que plantea el capítulo: las prácticas adultas enseñan precisamente porque los chicos y chicas sí prestan atención a lo que ven hacer.',
        },
      },
      {
        objetivo:
          'entender por qué una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir desarrollar criterio',
        enunciado:
          'Una familia mantiene el mismo nivel de supervisión digital sobre su hijo desde los diez hasta los dieciséis años, sin ningún cambio. ¿Qué riesgo señala el capítulo frente a esto?',
        opciones: [
          { id: 'a', texto: 'Ninguno: cuanta más supervisión, mejor protección, sin importar la edad.' },
          {
            id: 'b',
            texto:
              'Que una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir que se desarrolle criterio propio.',
          },
          { id: 'c', texto: 'Que el riesgo solo aparece si el adolescente se da cuenta de que lo supervisan.' },
          { id: 'd', texto: 'Que la supervisión debería aumentar, no mantenerse igual, a medida que crece.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo no sostiene que más supervisión equivalga siempre a mejor protección: señala explícitamente que, sin ajustarse a la independencia creciente, pierde eficacia.',
          c: 'El problema no depende de que el adolescente lo note: la falta de desarrollo de criterio propio ocurre independientemente de si la supervisión se percibe o no.',
          d: 'El capítulo no propone aumentar la supervisión con la edad: propone lo contrario, transformar progresivamente el control en autonomía.',
        },
      },
      {
        objetivo: 'identificar los cuatro componentes del acompañamiento intergeneracional: límites, conversación, aprendizaje mutuo, transferencia gradual de responsabilidad',
        enunciado:
          'Una familia decide dejar de supervisar por completo a su hijo adolescente en lo digital, "para darle su espacio", sin ninguna conversación ni acuerdo previo. ¿Qué le falta a esta decisión, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: dar espacio total es la forma correcta de acompañar en la adolescencia.' },
          { id: 'b', texto: 'Le falta un sistema de castigos más estricto para cuando algo salga mal.' },
          {
            id: 'c',
            texto:
              'Le falta combinar límites, conversación, aprendizaje mutuo y transferencia gradual: eliminar la presencia adulta de golpe no es lo mismo que acompañar con autonomía progresiva.',
          },
          { id: 'd', texto: 'Le falta que los padres dejen de usar tecnología también, para dar el ejemplo.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo no equipara "dar espacio total" con acompañar: el acompañamiento intergeneracional combina los cuatro componentes a la vez, no la ausencia de ellos.',
          b: 'El capítulo no propone resolver esto con más castigo: propone un acompañamiento estructurado en varios componentes, no un sistema punitivo.',
          d: 'La pregunta no está relacionada con que los adultos dejen de usar tecnología, sino con que el acompañamiento combine los cuatro componentes mencionados.',
        },
      },
      {
        objetivo:
          'comprender la confianza familiar como infraestructura preventiva, y los límites de lo que la familia puede asumir frente a lo que corresponde a escuela, plataformas o Estado',
        enunciado:
          'Un adolescente no cuenta en su casa que algo lo incomodó en internet, porque la última vez que contó algo similar lo castigaron severamente. ¿Qué principio del capítulo explica por qué esto es un problema?',
        opciones: [
          { id: 'a', texto: 'Que los adolescentes nunca deberían ser corregidos por nada relacionado con lo digital.' },
          { id: 'b', texto: 'Que los castigos severos son siempre la mejor forma de que algo no se repita.' },
          {
            id: 'c',
            texto: 'Que la familia debería ocuparse de resolver sola cualquier situación digital grave, sin recurrir a la escuela o al Estado.',
          },
          {
            id: 'd',
            texto:
              'Que la confianza familiar constituye una infraestructura preventiva: poder contar un error sin esperar humillación aumenta la detección temprana y las posibilidades de ayuda.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'El capítulo no elimina la posibilidad de poner límites: lo que señala es que la reacción ante contar un error no debería traducirse en humillación, no que no pueda haber ninguna consecuencia.',
          b: 'El capítulo no sostiene esto: de hecho, señala que ese tipo de reacción es lo que reduce la detección temprana, porque desalienta a contar.',
          c: 'El capítulo es explícito en lo contrario: la familia no puede asumir responsabilidades que pertenecen a escuelas, plataformas o Estado.',
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
        muestra: 'Reduce el acompañamiento a reglas y control fijo, o confunde dar autonomía con dejar de acompañar por completo.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que algo no está bien en el acompañamiento, pero no distingue con precisión si falta coherencia, transferencia gradual o confianza.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue las tres dimensiones, identifica cuál falta en una situación concreta y propone un cambio proporcionado a la edad y las capacidades de la persona acompañada.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una familia está asumiendo una responsabilidad que corresponde a otra institución, y distingue coherencia de perfección en el modelaje adulto.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué las prácticas adultas enseñan aunque no se lo propongan, por qué el control necesita transformarse progresivamente en autonomía, y por qué la confianza familiar es una infraestructura preventiva con límites claros. Lo que cambia, a partir de acá, es cómo mirás tus propias prácticas de acompañamiento digital, no solo las reglas que pusiste.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde el acompañamiento digital de un niño, niña o adolescente esté en juego, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay coherencia entre lo que se predica y se hace, si el control se adapta a la edad, si hay confianza para contar un error— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la regla de "nada de celular en la mesa" incumplida por el propio adulto que la impuso. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué otras reglas digitales de tu entorno tienen esa misma brecha entre lo que se dice y lo que se hace? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'Mediación parental: acompañar sin saber si se está haciendo bien',
      objetivo:
        'Conocer los tipos de mediación parental que identifica la evidencia reciente en Argentina, y reconocer en qué grado el acompañamiento familiar funciona como factor protector frente a riesgos digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Según el artículo "Acceso temprano al celular propio, conductas de riesgo en línea y usos problemáticos", de Silvina Pedrouzo (Sociedad Argentina de Pediatría) y Mariano Aizpurúa (UNICEF Argentina), publicado en Zoom a las infancias y adolescencias en la era digital (UNICEF Argentina, 2026), la mediación parental define las estrategias que usan las familias para guiar, acompañar y supervisar el uso de medios digitales de sus hijos e hijas, con el fin de minimizar riesgos en línea.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La Encuesta Nacional Kids Online Argentina reconoce dos grandes tipos de mediación. La mediación activa incluye distintas formas de supervisión, apoyo y orientación sobre riesgos y oportunidades del mundo digital —es la que se construye con conversación y acompañamiento presente—. La mediación restrictiva, en cambio, remite a distintos modos de establecer límites sobre el uso de Internet, sin necesariamente acompañarlos de diálogo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'A partir de las respuestas de adolescentes, la encuesta construye una tipología según el grado de mediación: presente, moderada, y débil o ausente. Esta clasificación permite identificar a qué grupo de adolescentes les falta, específicamente, acompañamiento adulto real — no reglas, sino presencia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'El informe también señala algo clave para pensar la coherencia y la transferencia gradual: la edad promedio de acceso al primer celular propio con conectividad en Argentina es de 9,6 años, y el acceso temprano (antes de los 10 años) se asocia con mayor presencia de conductas de riesgo en línea. Pero la mediación parental activa puede funcionar como factor protector frente a ese riesgo — es decir, lo que compensa un acceso temprano no es necesariamente retrasarlo, sino acompañarlo con una mediación presente y activa.',
        },
      ],
      preguntaDetonadora:
        'Si tuvieras que clasificar la mediación digital que existe hoy en tu propia familia o tu aula —presente, moderada, o débil o ausente— ¿qué tipo dirías que es, honestamente?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Activa o restrictiva" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá una lista de prácticas familiares comunes (revisar el celular sin avisar, hablar sobre lo que se ve en redes, bloquear apps sin explicar por qué, acordar juntos un horario de pantallas). En grupos, clasifican cada una como mediación activa o restrictiva, y discuten cuáles combinan ambas.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestro propio diagnóstico de mediación" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, construyen un breve cuestionario (5 a 7 preguntas) inspirado en la lógica de la encuesta, para que una familia pueda autoevaluar si su mediación digital es presente, moderada, o débil o ausente.',
                'Las preguntas deben indagar tanto en mediación activa (conversación, acompañamiento) como restrictiva (límites, reglas), sin limitarse a una sola.',
                'Intercambian sus cuestionarios con otro grupo y los responden pensando en una familia hipotética que ya analizaron en esta temática.',
                'Discuten: ¿qué tipo de mediación identificaron, y qué cambiarían para moverla hacia "presente"?',
              ],
            },
          ],
        },
      ],
      frase:
        '"No se trata de elegir entre acompañar o poner límites: la mediación que protege combina las dos cosas, de forma presente y activa."',
      glosario: ['Mediación parental', 'Mediación activa', 'Mediación restrictiva', 'Factor protector', 'Kids Online Argentina'],
      referencias: [
        'Pedrouzo, S. y Aizpurúa, M. (2026). Acceso temprano al celular propio, conductas de riesgo en línea y usos problemáticos. En UNICEF Argentina, Zoom a las infancias y adolescencias en la era digital. Buenos Aires: UNICEF Argentina.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien que una regla digital incumplida una sola vez, delante de quien tiene que cumplirla, puede enseñar más que la regla explicada cien veces?',
    placeholder: 'Escribí tu explicación.',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Autonomía Progresiva en Familia, en una tarjeta',
      parrafos: [
        'Las familias modelan tempranamente el lugar que la tecnología ocupa en vínculos, privacidad y regulación emocional. Las prácticas adultas enseñan aun cuando no pretendan hacerlo. Por eso acompañar exige coherencia más que perfección.',
        '**Del control a la autonomía:** una protección basada exclusivamente en supervisión pierde eficacia cuando aumenta la independencia, y puede impedir desarrollar criterio. El acompañamiento intergeneracional combina límites, conversación, aprendizaje mutuo y transferencia gradual de responsabilidad.',
        '**Confianza como infraestructura preventiva:** poder contar un error sin esperar humillación aumenta la detección temprana y las posibilidades de ayuda. Esta función es insustituible, aunque la familia no puede asumir responsabilidades que pertenecen a escuelas, plataformas o Estado.',
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
      'La familia como espacio de confianza y autonomía progresiva no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[AUTONOMIAFAMILIA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
