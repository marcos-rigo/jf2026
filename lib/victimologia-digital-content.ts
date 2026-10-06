// Contenido de /tematicas/victimologia-digital. Misma forma que
// lib/rutinas-guardania-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo
// hay contenido para docentes.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/victimologia-digital/ficha-aula';

export const VICTIMOLOGIA_DIGITAL_FALLBACK: Audiencia = 'docentes';

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
  { id: 'despues-del-dano', number: '05', label: 'Después del daño', shortLabel: 'Después del daño' },
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
  despuesDelDano: {
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
    titulo: 'Victimología Digital',
    subtitulo: 'De reconocer el daño a recuperar agencia',
    bajada:
      'La victimología obliga a observar qué ocurre con la persona afectada, cómo persiste el daño, qué instituciones encuentra y qué necesita para recuperar capacidad de decisión. Reconocer una victimización no significa convertirla en identidad permanente: alguien puede haber atravesado un hecho digital grave sin que eso defina quién es de ahí en adelante. Esta temática forma parte del grupo Seguridad de la plataforma y trabaja esa mirada: qué pasa después de un hecho digital, no solo cómo prevenirlo.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender cómo la persistencia, la replicación y la reutilización de datos pueden extender las consecuencias de un hecho digital mucho después de que la conducta original terminó.',
      'Reconocer la victimización secundaria: el daño adicional que puede producir la propia respuesta institucional, a través de la culpabilización, la exposición innecesaria, la reiteración del relato o procedimientos incomprensibles.',
      'Comprender la recuperación como recuperación de agencia — volver a decidir sobre tu información, tus relaciones y tu participación —, distinguiendo cuándo una situación necesita restauración técnica o patrimonial y cuándo necesita reconstrucción de confianza, acompañamiento y acceso a justicia.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer cómo la persistencia, la replicación y la reutilización de datos pueden extender las consecuencias de un hecho digital mucho después de que la conducta original terminó.',
      'Identificar cuándo una respuesta institucional produce victimización secundaria, a través de la culpabilización, la exposición innecesaria, la reiteración del relato o procedimientos incomprensibles.',
      'Entender la recuperación como recuperación de agencia —volver a decidir sobre información, relaciones y participación—, y no reducirla a una resolución puramente técnica del problema.',
      'Distinguir cuándo una situación necesita restauración técnica o patrimonial y cuándo necesita, además o en cambio, reconstrucción de confianza, acompañamiento y acceso a justicia.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Qué duele más: lo que pasó, o tener que contarlo de nuevo?',
    parrafos: [
      'Una adolescente fue víctima de un hecho de acoso digital que ya terminó: bloqueó al agresor, borró lo que pudo borrar, y su familia hizo la denuncia correspondiente. Pero en las semanas siguientes, tiene que contar lo que pasó una y otra vez: primero a la persona que tomó la denuncia, después a otra que revisa el caso, después a alguien más en una instancia distinta. Cada vez tiene que volver a explicar los detalles, a veces delante de personas que no conocía antes, en oficinas donde nadie le explica bien qué va a pasar después ni cuánto va a durar el proceso. En algún momento, deja de querer ir a las citaciones.',
      'El hecho original ya pasó. Lo que sigue lastimándola es otra cosa: tener que revivir lo que le pasó cada vez que alguien nuevo le pide que lo cuente, sin que nadie le explique con claridad qué está pasando ni por qué. Esto tiene nombre, y no es poca cosa: se llama victimización secundaria, y puede doler tanto o más que el hecho que la originó, aunque venga de instituciones que están, en teoría, para ayudar.',
    ],
    problema:
      'Pensá en alguna situación —propia o de alguien que conocés— donde después de un hecho difícil, la respuesta de una institución terminó generando más daño del que resolvía. ¿Qué parte de ese proceso podría haberse hecho distinto, sin que eso signifique no investigar o no actuar?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'La victimología obliga a observar qué ocurre con la persona afectada, cómo persiste el daño, qué instituciones encuentra y qué necesita para recuperar capacidad de decisión. Reconocer una victimización no significa convertirla en identidad permanente — alguien puede haber atravesado un hecho digital grave y seguir siendo, en todo lo demás, la misma persona que decide su vida, no "una víctima" como etiqueta fija.',
      'La persistencia, la replicación y la reutilización de datos pueden extender las consecuencias de un hecho mucho después de que la conducta que lo originó terminó: una imagen que ya no circula activamente puede reaparecer, una información que ya se usó para dañar puede reutilizarse de nuevo, y eso hace que el daño no tenga, muchas veces, un cierre claro en el tiempo. A eso se suma que la propia respuesta institucional puede producir una victimización secundaria, a través de la culpabilización, la exposición innecesaria, la reiteración del relato o procedimientos incomprensibles — instituciones que, queriendo ayudar, terminan agregando daño sobre el daño original.',
      'Por eso la recuperación se interpreta como recuperación de agencia: volver a decidir sobre tu información, tus relaciones y tu participación. Algunas situaciones requieren restauración técnica o patrimonial —recuperar una cuenta, revertir una pérdida de dinero—; otras necesitan, en cambio o además, reconstrucción de confianza, acompañamiento y acceso a justicia, que no se resuelven con un arreglo técnico.',
    ],
    preguntaCierre:
      'Pensá en alguna situación donde conozcas cómo fue el proceso posterior a un hecho digital grave. ¿Lo que esa persona necesitaba era sobre todo algo técnico o patrimonial, algo de acompañamiento y confianza, o las dos cosas a la vez?',
    fichaAula1: {
      titulo: 'Si fuiste víctima de un ciberdelito, denuncialo: a dónde recurrir en Argentina',
      objetivo:
        'Conocer los organismos oficiales disponibles en Argentina para recibir asesoramiento, acompañamiento y hacer una denuncia frente a un ciberdelito, distinguiendo cuándo corresponde cada uno.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Frente a un ciberdelito, existen en Argentina distintas alternativas oficiales, según el tipo de situación y el acompañamiento que se necesite, no solo según dónde esté la víctima.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para presentar una denuncia, se puede acudir a la Fiscalía más cercana al domicilio (localizable en el mapa de Fiscalías del Ministerio Público Fiscal), o directamente a una unidad especializada: la Unidad Fiscal Especializada en Ciberdelincuencia (UFECI), para grooming o cualquier otro delito informático a nivel federal, o la Unidad Fiscal Especializada en Delitos y Contravenciones Informáticas (UFEDyCI) para hechos ocurridos en la Ciudad Autónoma de Buenos Aires, que puede contactarse por teléfono, en línea o de forma presencial.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Cuando lo que se necesita no es solo denunciar sino también contención y acompañamiento, existen líneas específicas. La línea 137 funciona las 24 horas, los 365 días del año, y brinda contención, orientación y acompañamiento a víctimas de violencia familiar y sexual; su Equipo Contra las Violencias Digitales asesora y acompaña hasta el momento de hacer la denuncia, y también puede contactarse por WhatsApp ante una sospecha de grooming o explotación sexual de un niño o adolescente. La línea 149, del Centro de Asistencia a las Víctimas de Delitos (CENAVID), brinda asesoramiento jurídico y asistencia médica y psicológica a víctimas de abuso sexual, y conecta con el Programa PatrocinAR, que garantiza un abogado gratuito para las causas civiles o penales que correspondan. La línea 102, de la Secretaría Nacional de Niñez, Adolescencia y Familia (SENAF), brinda atención especializada y confidencial sobre los derechos de niños y adolescentes, también las 24 horas.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Saber de antemano que estas alternativas existen, y qué ofrece cada una, es parte de evitar la victimización secundaria: nadie debería tener que buscar por primera vez a dónde recurrir en el peor momento.',
        },
      ],
      preguntaDetonadora: 'Si hoy tuvieras que ayudar a alguien que fue víctima de un hecho digital grave, ¿sabrías a qué organismo recurrir primero?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿A dónde recurrimos?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá cinco situaciones breves (un fraude por transferencia, un caso de grooming, una imagen íntima compartida sin consentimiento, acoso reiterado en redes, una estafa a un adulto mayor de la familia). En grupos, para cada una deciden a qué organismo de los vistos correspondería recurrir primero, y por qué.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Tarjeta de emergencia digital para la escuela" (45 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, diseñan una tarjeta o afiche con los organismos y líneas vistos, organizados por tipo de situación (denuncia, acompañamiento, niñez y adolescencia).',
                'Cada grupo agrega una frase breve explicando qué evitar al acompañar a alguien que atraviesa esto (por ejemplo, no pedirle que repita el relato más veces de las necesarias).',
                'Socializan sus tarjetas y, entre todos, arman una única versión para pegar en un espacio común de la escuela.',
              ],
            },
          ],
        },
      ],
      frase: 'Saber a dónde recurrir antes de necesitarlo es, en sí mismo, una forma de cuidado.',
      glosario: ['Victimización secundaria', 'UFECI', 'Línea 137', 'CENAVID', 'Recuperación de agencia'],
      referencias: [
        '"Si fuiste víctima de un ciberdelito, denuncialo" — Argentina.gob.ar, Ministerio de Justicia, Con Vos en la Web (actualizado octubre 2026).',
      ],
    },
  },
  despuesDelDano: {
    titulo: 'Después del daño',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: la victimología desplaza la mirada hacia la experiencia de daño, la persistencia, la reiteración, la respuesta institucional y la recuperación. La victimización no debe convertirse en identidad total; una respuesta de calidad busca restablecer control y agencia.',
        'El capítulo nombra como referencia a Cohen y Felson, Hindelang, Gottfredson y Garofalo, Ronald Akers, Albert Bandura, Sykes y Matza, Cornish y Clarke, John Suler y K. Jaishankar, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una situación de victimización, la pregunta no debería limitarse a si el daño existió, sino a reconstruir cómo se manifiesta, qué condiciones lo vuelven relevante, qué actores tienen poder para modificarlo y qué evidencia permite distinguir una hipótesis razonable de una explicación meramente intuitiva.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — tratar el daño digital como si ya hubiera terminado apenas cesó la conducta original ignora que la persistencia, la replicación y la reutilización de datos pueden seguir produciendo consecuencias mucho después.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar buen criterio y recuperarse con sus propios recursos, y aun así seguir condicionada por reglas opacas, procedimientos institucionales confusos o asimetrías de información que generan victimización secundaria. En sentido inverso, una institución bien diseñada puede resultar insuficiente si no ofrece acompañamiento real o si repite el relato innecesariamente. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad de la recuperación entre la persona y las instituciones que la rodean, según lo que cada una puede efectivamente transformar.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que el daño termine apenas termina la conducta que lo originó: la persistencia, la replicación y la reutilización de datos pueden extender las consecuencias mucho más allá de ese momento.',
          'No es que toda institución que interviene ayude por el solo hecho de intervenir: la culpabilización, la exposición innecesaria, la reiteración del relato o los procedimientos incomprensibles pueden producir un daño adicional, la victimización secundaria.',
          'No es definir a alguien por lo que le pasó: reconocer una victimización no significa convertirla en identidad permanente.',
          'No es reducir la recuperación a resolver el aspecto técnico o patrimonial: algunas situaciones necesitan, además o en cambio, reconstrucción de confianza, acompañamiento y acceso a justicia.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas:
        'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la persona afectada, o qué parte de una institución que interviene, está en juego en este momento del proceso.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si hay persistencia, replicación o reutilización de datos extendiendo el daño, y si la respuesta institucional está generando, ella misma, una victimización secundaria.',
        '**¿Qué cambio sería proporcionado?** Si lo que la persona necesita para recuperar agencia es restauración técnica o patrimonial, reconstrucción de confianza y acompañamiento, acceso a justicia, o una combinación de varias de estas cosas.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Un estudiante de quinto año fue víctima de un hecho de extorsión digital: alguien obtuvo una foto suya y amenazó con difundirla si no pagaba dinero. La familia hizo la denuncia, y el hecho técnico se resolvió relativamente rápido: se identificó la cuenta, se bloqueó la difusión, no se dispersó la imagen. Pero en las semanas siguientes, el estudiante tuvo que contar lo que pasó cuatro veces, a cuatro personas distintas, en cuatro oficinas distintas, sin que nadie le explicara antes qué iba a pasar en cada instancia. En una de esas reuniones, alguien le preguntó, delante de un familiar que no estaba al tanto de todos los detalles, "pero vos por qué le mandaste esa foto". El estudiante dejó de querer ir a la escuela esa semana, aunque ahí nadie sabía lo que había pasado.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: el hecho original —la extorsión— se resolvió técnicamente en poco tiempo. Lo que no se resolvió fue lo que vino después: repetir el relato cuatro veces, sin preparación previa, y una pregunta que trasladó parte de la responsabilidad al estudiante. Participan el estudiante, que tuvo que revivir lo sucedido en cada instancia; la familia, que acompañó sin saber bien qué esperar de cada paso; y las distintas oficinas, cada una actuando de buena fe pero sin coordinar entre sí.',
        ],
        nota: '*(Acá me pregunto: si el hecho técnico ya estaba resuelto, ¿por qué el estudiante seguía mal varias semanas después?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la recuperación de agencia del estudiante, no la resolución técnica, que ya había ocurrido. Repetir el relato cuatro veces sin ninguna coordinación entre las oficinas es, literalmente, la reiteración del relato que el capítulo nombra como una de las formas de victimización secundaria. La pregunta sobre por qué mandó la foto, delante de un familiar no informado, combina dos formas más: culpabilización y exposición innecesaria.',
          'Qué condiciones sociotécnicas intervienen: ninguna de las oficinas tenía un registro compartido de lo que el estudiante ya había contado, así que cada una le pedía que empezara de cero. Tampoco había ninguna preparación previa que le explicara qué significaba cada instancia, cuánto iba a durar o qué se le iba a preguntar.',
        ],
        nota: '*(Acá me pregunto: ¿el daño que el estudiante siente ahora viene del hecho original, o de cómo lo trataron las instituciones después?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de dejar de investigar ni de denunciar menos, sino de cambiar cómo se hace. Que exista, de ser posible, un único punto de contacto que coordine entre las oficinas para no hacer repetir el relato innecesariamente; que antes de cada instancia alguien le explique al estudiante y a su familia qué va a pasar y por qué; y que ninguna pregunta ponga la responsabilidad del hecho sobre quien lo sufrió. Nada de esto reemplaza la restauración técnica que ya ocurrió: la completa, atendiendo lo que todavía faltaba resolver.',
        ],
        nota: '*(Acá me pregunto: si una sola persona hubiera coordinado el proceso desde el principio, ¿cuántas de esas cuatro repeticiones del relato habrían sido realmente necesarias?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a las oficinas intervinientes: no les corresponde sentir que investigar o intervenir fue un error — hacerlo era necesario y correcto. El problema no fue intervenir: fue cómo se intervino.',
          'Qué podría salir mal: que, para evitar cualquier repetición del relato, se reduzca la investigación de una forma que termine siendo menos rigurosa; o que, al revés, nadie revise nunca cómo se coordinan las distintas instancias y el mismo patrón se repita con el próximo estudiante. Lo que ajustaría para la próxima vez: que la escuela y las instituciones que suelen intervenir en estos casos acuerden, de antemano, un protocolo que minimice la cantidad de veces que alguien tiene que contar lo mismo, y que capacite a quienes hacen las preguntas para no trasladar responsabilidad a quien fue víctima.',
        ],
        nota: '*(Acá me pregunto: ¿este estudiante, hoy, volvió a sentir que puede decidir sobre su información y su participación, o todavía está cargando con lo que pasó después del hecho original?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué necesita principalmente esa persona para recuperar agencia: restauración técnica o patrimonial, reconstrucción de confianza y acompañamiento, o acceso a justicia. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'A un docente le hackearon la cuenta de correo institucional y enviaron mensajes falsos a varios colegas antes de que lo notara. Recuperó el acceso a la cuenta, cambió la contraseña y avisó a sus colegas que esos mensajes no eran suyos. El tema quedó resuelto en un par de días, sin mayores consecuencias.',
        analisis:
          '¿Qué necesita esta persona para recuperar agencia? Restauración técnica. El daño fue puntual y se resolvió con medidas concretas: recuperar el acceso, cambiar la contraseña, aclarar la situación. No hay, en este caso, un daño relacional o emocional que requiera acompañamiento adicional, ni una instancia judicial necesaria. La recuperación de agencia acá es simplemente volver a tener control sobre su propia cuenta, y eso ya ocurrió.',
        nota: '*(Si elegiste "reconstrucción de confianza y acompañamiento" o "acceso a justicia": en este caso puntual no hay evidencia de que haga falta más que lo técnico — pero si el docente siguiera sintiendo desconfianza o preocupación más allá de lo razonable, valdría la pena revisarlo.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Una estudiante fue excluida durante meses de un grupo de amigas a través de burlas sostenidas en varios chats. Cuando una docente se entera y actúa, el conflicto entre las estudiantes se resuelve formalmente, pero la estudiante afectada sigue sin querer participar de actividades grupales y evita usar su celular en el recreo.',
        analisis:
          '¿Qué necesita esta persona para recuperar agencia? Reconstrucción de confianza y acompañamiento. Acá no hay nada técnico que restaurar ni necesariamente una instancia judicial que iniciar: lo que persiste es el efecto relacional y emocional de haber sido excluida durante meses. Resolver el conflicto formalmente no alcanza si la estudiante sigue evitando situaciones que le recuerdan lo que pasó. Necesita un proceso de acompañamiento que la ayude a recuperar la confianza para volver a participar, no solo una sanción a quienes la excluyeron.',
        nota: '*(Si elegiste "restauración técnica/patrimonial": acá no hay nada técnico ni patrimonial que resolver — el daño es relacional, y una solución puramente formal no alcanza para que la estudiante recupere su lugar en el grupo.)*',
      },
      {
        clave: 's3',
        enunciado:
          'A una familia le vaciaron la cuenta bancaria a través de una maniobra de ingeniería social, y además el responsable usó datos personales de la familia obtenidos en el engaño para intentar abrir otras cuentas a su nombre. La familia recuperó parte del dinero con el banco, pero todavía no sabe qué hacer con el resto, ni cómo evitar que sigan usando sus datos.',
        analisis:
          '¿Qué necesita esta persona para recuperar agencia? Acceso a justicia, además de restauración patrimonial. Acá hay un daño patrimonial parcial no resuelto y, más importante, un uso de datos personales que puede seguir generando consecuencias si nadie investiga ni frena al responsable. Esto excede lo que el banco puede resolver por sí solo: la familia necesita hacer una denuncia formal y un seguimiento judicial del caso, no solo gestionar la devolución del dinero.',
        nota: '*(No hay una sola respuesta esperada en este caso: también podría argumentarse que, además del acceso a justicia, la familia va a necesitar acompañamiento mientras dura ese proceso, que puede ser largo. Lo que se evalúa es que reconozcas que lo patrimonial, en este caso, no cierra el problema.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre el caso del estudiante que tuvo que repetir su relato cuatro veces después de la extorsión digital. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'El caso ya está resuelto: se bloqueó la cuenta, no se difundió la foto, no hay pérdida económica ni nada pendiente. No entiendo por qué el estudiante sigue mal.',
      citaB:
        'Después de algo así, ese estudiante va a quedar marcado para siempre. Hay que tratarlo con mucho cuidado especial de ahora en más, porque esto lo va a acompañar toda la vida.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A** reduce todo a la resolución técnica y no ve el daño relacional que produjo el propio proceso institucional —repetir el relato cuatro veces, la pregunta que trasladó responsabilidad al estudiante—. Que el hecho técnico esté resuelto no significa que la persona haya recuperado agencia: eso es justamente lo que el capítulo distingue.',
      errorB:
        '**Análisis B** comete el error opuesto: convierte la victimización en una identidad permanente, algo que el capítulo dice explícitamente que no debe pasar. Tratar al estudiante como alguien "marcado para siempre" no es cuidado: es fijarlo a una representación del hecho que le impide, él también, dejarlo atrás cuando esté en condiciones de hacerlo.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno pregunta qué necesita realmente esta persona para recuperar agencia. Uno asume que ya no necesita nada porque lo técnico está resuelto; el otro asume que va a necesitar cuidado especial para siempre, sin dejar lugar a que la persona vuelva a decidir por sí misma cuándo y cómo seguir adelante.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer cómo la persistencia, replicación y reutilización de datos puede extender las consecuencias de un hecho',
        enunciado:
          'Una imagen compartida sin consentimiento dejó de circular activamente hace meses. ¿Por qué, según el capítulo, no se puede decir que el daño "ya terminó"?',
        opciones: [
          {
            id: 'a',
            texto:
              'Porque la persistencia, la replicación y la reutilización de esos datos pueden extender las consecuencias mucho después de que la conducta original terminó.',
          },
          { id: 'b', texto: 'Porque el daño nunca termina realmente: cualquier hecho digital es permanente e irreversible.' },
          { id: 'c', texto: 'Porque la persona afectada nunca va a poder superar lo que le pasó.' },
          { id: 'd', texto: 'Porque las plataformas nunca eliminan ningún contenido, bajo ninguna circunstancia.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo no afirma que todo daño digital sea permanente e irreversible: señala específicamente que la persistencia, replicación y reutilización de los datos son las que pueden extender las consecuencias, no una condición automática de todo hecho digital.',
          c: 'Esto confunde la persistencia del dato con la persistencia del daño emocional en la persona, que es algo distinto y que el capítulo trata en otro de sus ejes, el de la recuperación de agencia.',
          d: 'El capítulo no hace esa afirmación general sobre las plataformas: el punto es que un dato que ya circuló puede reaparecer o reutilizarse, no que nunca pueda eliminarse nada.',
        },
      },
      {
        objetivo: 'identificar cuándo una respuesta institucional produce victimización secundaria',
        enunciado:
          'Una persona que fue víctima de un hecho digital tiene que contar lo sucedido cinco veces, en cinco oficinas distintas, sin que nadie coordine esa información entre sí. ¿Qué es esto, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Es simplemente parte normal de cualquier proceso institucional, sin ninguna implicancia adicional.' },
          { id: 'b', texto: 'Es un ejemplo de victimización secundaria, a través de la reiteración del relato.' },
          { id: 'c', texto: 'Es una señal de que el caso es más grave de lo que parecía al principio.' },
          { id: 'd', texto: 'Es responsabilidad exclusiva de la persona, por no haber guardado un registro propio de lo que ya contó.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'El capítulo nombra explícitamente la reiteración del relato como una de las formas en que la respuesta institucional puede producir un daño adicional — no es un costo neutral del proceso.',
          c: 'La cantidad de veces que alguien repite su relato no es un indicador de la gravedad del hecho: depende de cómo esté organizada —o no— la coordinación entre las instituciones que intervienen.',
          d: 'La falta de coordinación entre oficinas es responsabilidad institucional, no de la persona que atraviesa el proceso.',
        },
      },
      {
        objetivo: 'entender la recuperación como recuperación de agencia, no solo como resolución técnica',
        enunciado:
          'Un hecho digital se resolvió técnicamente rápido —se bloqueó una cuenta, no hubo pérdida de dinero—, pero la persona afectada sigue evitando situaciones que le recuerdan lo que pasó. ¿Qué dice el capítulo sobre este caso?',
        opciones: [
          { id: 'a', texto: 'Que, al no haber pérdida económica ni técnica pendiente, el caso debe considerarse cerrado.' },
          { id: 'b', texto: 'Que ese tipo de reacciones son exageradas si el daño técnico ya se solucionó.' },
          { id: 'c', texto: 'Que si la persona sigue afectada, significa que la resolución técnica estuvo mal hecha.' },
          {
            id: 'd',
            texto:
              'Que la recuperación se interpreta como recuperación de agencia —volver a decidir sobre información, relaciones y participación—, y que la resolución técnica no equivale automáticamente a eso.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Confundir "no hay nada técnico pendiente" con "el caso está cerrado" es exactamente el error que el capítulo busca que se evite.',
          b: 'El capítulo no juzga esas reacciones como exageradas: reconoce que la recuperación completa puede necesitar más que la resolución del aspecto técnico.',
          c: 'La resolución técnica y la recuperación de agencia son dos cosas distintas: una puede estar bien hecha y la otra, de todas formas, seguir pendiente.',
        },
      },
      {
        objetivo:
          'distinguir cuándo una situación necesita restauración técnica/patrimonial y cuándo necesita reconstrucción de confianza, acompañamiento o acceso a justicia',
        enunciado:
          'Una familia recuperó parte del dinero robado por una estafa digital, pero sus datos personales siguen siendo usados por el responsable para intentar otros fraudes. ¿Qué necesita además esta familia, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada más: la restauración patrimonial parcial ya resuelve lo esencial del caso.' },
          { id: 'b', texto: 'Únicamente acompañamiento emocional, sin necesidad de ninguna instancia judicial.' },
          {
            id: 'c',
            texto: 'Acceso a justicia, porque el uso continuado de sus datos excede lo que una restitución patrimonial puede resolver por sí sola.',
          },
          { id: 'd', texto: 'Cambiar todos sus datos personales, ya que es la única solución posible.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo distingue explícitamente situaciones que requieren, además de lo patrimonial, acceso a justicia — y el uso continuado de los datos es exactamente ese tipo de situación.',
          b: 'El acompañamiento puede ser necesario, pero no reemplaza la necesidad de una instancia judicial cuando el responsable sigue usando los datos de la familia.',
          d: 'Cambiar datos personales no siempre es posible ni soluciona que alguien ya los haya usado de forma indebida: lo que corresponde es que el caso avance por la vía judicial.',
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
          'Da por cerrado un caso apenas se resuelve su aspecto técnico o patrimonial, o trata a la persona afectada como definida permanentemente por lo que le pasó.',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo sigue sin resolverse después del hecho técnico, pero no identifica con precisión qué tipo de recuperación falta.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Distingue restauración técnica/patrimonial de reconstrucción de confianza/acompañamiento y de acceso a justicia, e identifica cuál necesita la persona en una situación concreta.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una respuesta institucional está produciendo victimización secundaria, y distingue la persistencia del daño en los datos de la persistencia del daño en la persona.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: cómo la persistencia, la replicación y la reutilización de datos pueden extender un daño, qué es la victimización secundaria, y cómo distinguir restauración técnica de reconstrucción de confianza y acceso a justicia. Lo que cambia, a partir de acá, es cómo mirás lo que pasa después de un hecho digital — no solo si se resolvió, sino qué necesita realmente la persona para recuperar agencia.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde alguien esté atravesando las consecuencias de un hecho digital, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay persistencia del daño o riesgo de victimización secundaria— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la adolescente que tuvo que contar lo que le pasó una y otra vez, en distintas instancias, sin que nadie le explicara bien qué estaba pasando. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de ese proceso identificás ahora como victimización secundaria? ¿Qué harías distinto la próxima vez que acompañes a alguien después de un hecho digital? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien que tener que contar lo que te pasó una y otra vez puede doler tanto o más que el hecho original?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Victimología Digital, en una tarjeta',
      parrafos: [
        'La victimología obliga a observar qué ocurre con la persona afectada, cómo persiste el daño, qué instituciones encuentra y qué necesita para recuperar capacidad de decisión. Reconocer una victimización no significa convertirla en identidad permanente.',
        '**Persistencia del daño:** la persistencia, replicación y reutilización de datos pueden extender las consecuencias de un hecho mucho después de que la conducta que lo originó terminó.',
        '**Victimización secundaria:** la propia respuesta institucional puede producir daño adicional, a través de la culpabilización, la exposición innecesaria, la reiteración del relato o procedimientos incomprensibles.',
        '**Recuperación de agencia:** volver a decidir sobre información, relaciones y participación. Algunas situaciones necesitan restauración técnica o patrimonial; otras, reconstrucción de confianza, acompañamiento y acceso a justicia.',
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
      'Victimología del territorio híbrido no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[VICTIMOLOGIA_DIGITAL_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
