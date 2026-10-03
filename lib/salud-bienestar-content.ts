// Contenido de /tematicas/salud-y-bienestar-digital. Mismo patrón que lib/emocional-content.ts:
// escrito solo para 'docentes', cualquier otra audiencia cae a ese fallback vía
// resolveContenido(). Sin fuentes/citas: las referencias van como texto plano (sin
// SourceCite). Las negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se
// renderizan con el helper Enfasis de components/salud-bienestar/ui.tsx, nunca como
// asteriscos literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la
// Dimensión 5 (Capítulo 19 del manual).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/salud-bienestar/ficha-aula';

export const SALUD_BIENESTAR_FALLBACK: Audiencia = 'docentes';

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
  { id: 'equilibrio-y-limites', number: '05', label: 'Equilibrio y límites', shortLabel: 'Equilibrio' },
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
  };
  equilibrioYLimites: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
    };
    fichaAula2: FichaAulaProps;
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
    titulo: 'Dimensión Salud y Bienestar Digital',
    subtitulo: 'De contar horas a cuidar el equilibrio',
    bajadaAntes:
      'Esta temática profundiza una sola cara del Poliedro de Ciudadanía Digital. Si todavía no hiciste el ',
    bajadaEnlaceTexto: 'módulo madre',
    bajadaEnlaceHref: '/ciudadania-digital',
    bajadaDespues: ', te conviene empezar por ahí — acá vamos directo a esta dimensión en particular.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que el bienestar digital no se mide en minutos de pantalla: importan para qué usás la tecnología, cómo, y qué le pasa a tu sueño, tu concentración y tus vínculos.',
      'Reconocer qué parte de tu relación con la tecnología depende de vos y qué parte depende del entorno: la cultura de disponibilidad permanente, las notificaciones y los diseños que prolongan la interacción.',
      'Usar una pregunta simple para decidir qué ajustar: si esta relación con la tecnología fortalece o deteriora, de manera sostenida, tu capacidad de descansar, aprender, trabajar y relacionarte.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: 'Competencia central',
    competencia:
      'evaluar si tu relación con la tecnología sostiene o deteriora, de manera persistente, tu descanso, tu aprendizaje, tus vínculos y tu capacidad de decidir, y decidir qué ajustar, sin culpa y sin dejarle todo el peso a la voluntad individual.',
    objetivosTitulo: 'Objetivos con criterio',
    objetivos: [
      'Definir la dimensión salud y bienestar digital, explicando por qué no puede reducirse a una cantidad de horas de pantalla.',
      'Identificar, en una situación concreta, qué factores pesan en el bienestar: la finalidad del uso, su calidad, el sueño, el movimiento, la concentración, los vínculos y la sensación de control.',
      'Distinguir lo que depende de la persona de lo que depende del entorno, como las culturas de disponibilidad permanente, las notificaciones y los diseños que prolongan la interacción.',
      'Decidir un ajuste proporcionado a la situación, incluyendo cuándo desconectarse y cuándo pedir ayuda.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Estás disponible porque querés, o porque el entorno lo espera?',
    parrafos: [
      'Son las once de la noche y estás en la cama, con el celular en la mano. Respondés un mensaje de una familia que pregunta por la tarea de mañana. Después otro, del grupo de docentes, con una consulta sobre el acto del viernes. Nadie te pidió formalmente que contestaras a esta hora: no hay una regla escrita ni una orden de la dirección. Pero sentís que no responder es faltar, y que si tardás hasta mañana vas a quedar como alguien que no está atento.',
      'Lo que pasó es común, y no es un defecto tuyo. Tu celular junta el trabajo, la familia, la información y el descanso en la misma pantalla, y los límites entre una cosa y otra se vuelven difusos. Cuando todos esperan una respuesta rápida, esa expectativa se convierte en norma sin que nadie la haya decidido.',
    ],
    problema:
      'Pensá en una noche como esa, o en una parecida. ¿Respondiste porque tenías ganas y era lo mejor para vos, o porque sentías que el entorno lo esperaba? ¿Qué habría pasado, realmente, si hubieras contestado a la mañana siguiente?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Tu teléfono concentra en un solo aparato el trabajo, la vida social, el entretenimiento y la información. Eso tiene una consecuencia concreta: los límites entre actividades se vuelven porosos. Contestar un mensaje del trabajo, mirar un video, hablar con un amigo y leer una noticia pasan en la misma pantalla, a veces en el mismo minuto, y ya no hay un lugar ni un horario que marque cuándo termina una cosa y empieza la otra.',
      'Por eso el bienestar digital no puede reducirse a una cantidad universal de horas de pantalla. Dos personas con las mismas horas pueden estar en situaciones muy distintas: importan para qué usan la tecnología, la calidad de ese uso, la etapa de la vida en que están, y qué pasa con su sueño, su movimiento, su concentración, sus vínculos y su sensación de control. Contar minutos puede servir como dato, pero no responde la pregunta de fondo.',
      'Esa pregunta es otra: si la relación con la tecnología fortalece o deteriora, de manera persistente, la capacidad de descansar, aprender, trabajar, relacionarse y decidir. Se trata de una mirada sobre consecuencias sostenidas en el tiempo, y no de un día malo o de una semana de mucho uso.',
      'Y hay una aclaración que organiza toda esta temática: conexión y bienestar no son opuestos. El objetivo no es desconectarse de todo ni vivir contra la tecnología, sino construir una integración sostenible, en la que la tecnología esté presente sin quitarnos lo que necesitamos para estar bien.',
    ],
    fichaAula1: {
      titulo: 'Desenchufarse también es cuidarse: equilibrio y salud en la vida digital',
      objetivo:
        'Reflexionar sobre los impactos de la hiperconectividad en la vida cotidiana y desarrollar estrategias para cuidar el bienestar físico, mental y emocional en el uso de tecnologías digitales.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Vivimos en un mundo hiperconectado, donde estar online parece una condición permanente: notificaciones constantes, multitarea, consumo de contenidos, redes sociales, clases virtuales, videojuegos, plataformas de entretenimiento.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Este ritmo digital puede generar oportunidades, pero también **estrés, ansiedad, insomnio, baja autoestima, aislamiento o dependencia** si no se gestiona con conciencia. El **bienestar digital** implica tomar decisiones cotidianas que cuiden nuestra salud en relación con el uso de la tecnología.',
        },
        { tipo: 'parrafo', texto: 'Implica:' },
        {
          tipo: 'lista',
          items: [
            'Reconocer nuestras emociones cuando estamos en línea.',
            'Establecer **límites de tiempo, espacios sin pantallas y momentos de descanso digital.**',
            'Fomentar vínculos auténticos y no mediados permanentemente por dispositivos.',
            'Saber desconectarse sin culpa y conectarse con propósito.',
            'Ejercer el **derecho a la desconexión**, incluso en contextos educativos o laborales.',
            'Promover una cultura del **uso consciente y equilibrado de lo digital**, donde el descanso, la creatividad, el cuerpo y la conversación cara a cara también tengan su lugar.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'El bienestar digital es parte del **derecho a la salud integral**, y debe ser garantizado por políticas públicas, familias, escuelas y entornos de trabajo.',
        },
      ],
      preguntaDetonadora:
        '*¿La tecnología mejora tu vida… o la consume sin que te des cuenta? ¿Tenés tiempo para vos cuando estás siempre conectado?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi semana en pantallas" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Cada estudiante estima:' },
            {
              tipo: 'lista',
              items: [
                '¿Cuántas horas al día pasa frente a pantallas?',
                '¿Qué tipo de actividades realiza?',
                '¿Cuántas de esas son voluntarias, obligatorias o automáticas?',
              ],
            },
            {
              tipo: 'parrafo',
              texto: '→ Reflexión en grupos: ¿hay tiempo para desconectar? ¿Qué cambiarían?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Kit de bienestar digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En equipos, diseñan un "kit" o guía práctica para promover el bienestar digital juvenil.',
                'Tips para gestionar el tiempo en redes',
                'Técnicas de pausa activa o higiene digital',
                'Propuesta de momentos sin pantallas',
                'Estrategias de cuidado emocional',
                'Consejos para familias o docentes',
                'Pueden usar formato físico (folleto, cartel, mural) o digital (post, reel, presentación).',
                'Presentan sus kits en una "Expo de Bienestar Digital".',
              ],
            },
          ],
        },
      ],
      frase: '*"Apagar la pantalla no es perder el tiempo: es recuperar tu espacio, tu cuerpo y tu voz."*',
      glosario: [
        'Bienestar digital',
        'Hiperconectividad',
        'Desintoxicación digital',
        'Derecho a la desconexión',
        'Gestión emocional',
      ],
      referencias: [
        'UNICEF – Bienestar digital en la adolescencia',
        'Guía "Balance digital" – Chicos.net',
        'App Forest – para limitar el uso del celular con enfoque en autocuidado',
        'Video: "¿Vivís conectado o conectado con vos mismo?" – Canal Encuentro',
        'Manual de descanso digital – Fundación Karisma',
      ],
    },
  },
  equilibrioYLimites: {
    titulo: 'Equilibrio y límites',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El bienestar digital se evalúa mirando varios factores a la vez, no un solo número. Los que más pesan son: la **finalidad** del uso (para qué estás usando la tecnología), la **calidad** de ese uso, la **etapa vital** de la persona, el **sueño**, el **movimiento**, la **concentración**, los **vínculos** y la **sensación de control** sobre lo que hacés con el celular.',
        'Con esos factores, la pregunta funcional de esta dimensión es: **¿esta relación con la tecnología fortalece o deteriora, de manera persistente, mi capacidad de descansar, aprender, trabajar, relacionarme y decidir?** La palabra importante es *persistente*: un día de mucho uso no define nada, pero un patrón sostenido sí puede decir algo.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué las horas no alcanzan: dos personas pueden pasar el mismo tiempo frente a la pantalla y estar en situaciones opuestas. Una puede estar estudiando, hablando con alguien que quiere o creando algo; la otra puede estar en un scroll que no la deja dormir. Lo que cuenta no es el reloj, sino qué se hace, cómo, con qué consecuencias para el sueño, la concentración y los vínculos, y si la persona siente que decide ella o que el uso decide por ella.',
        'Por qué la autorregulación no es toda la respuesta: cada persona necesita aprender a autorregularse, pero el entorno también pesa. Las notificaciones, los diseños que prolongan la interacción y las culturas de disponibilidad permanente empujan en una dirección que ninguna voluntad individual puede compensar sola. Una institución que exige conexión continua no puede convertir el bienestar en responsabilidad exclusiva del trabajador: le corresponde también revisar qué espera de sus integrantes y a qué hora.',
        'Por qué desconectarse no es abandonar: poner un límite, no contestar fuera de horario o tener momentos sin pantalla no es descuidar a nadie ni dejar de ser responsable. Estar ocupado y estar disponible todo el tiempo son cosas distintas, y reconocer esa diferencia es parte de cuidarse.',
        'Por qué no hay que patologizar un uso intenso: usar mucho la tecnología, por sí solo, no es un problema a diagnosticar. Hay que mirar el patrón, el contexto y las consecuencias, algo que ya trabajamos en la temática Emocional, y no sacar conclusiones desde una sola conducta visible. Pasar horas conectado puede ser, según el caso, algo que fortalece o algo que desgasta.',
      ],
      recuadro: {
        titulo: 'Lo que el bienestar digital NO es',
        parrafos: [
          'No es contar minutos de pantalla: no existe una cantidad universal de horas que sirva para todos.',
          'No es desconectarse de todo ni vivir contra la tecnología: conexión y bienestar no son opuestos, el objetivo es una integración sostenible.',
          'No es una responsabilidad solo individual: las instituciones, las normas del lugar de trabajo o estudio y el diseño de las plataformas también cuentan.',
          'No es diagnosticar o culpar a quien usa mucho la tecnología: hace falta mirar el patrón, el contexto y las consecuencias.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a tu propia relación con la tecnología, o a la de otra persona, tres preguntas:',
      preguntas: [
        '**¿Qué me aporta?** Qué hago con la tecnología que me suma: aprender, conectarme con alguien, descansar, crear.',
        '**¿Qué me quita?** Qué se está deteriorando de manera sostenida: el sueño, la concentración, el movimiento, los vínculos, la sensación de control.',
        '**¿Quién decide esa disponibilidad?** Si respondo siempre y a toda hora porque lo elijo, o porque el entorno lo espera.',
      ],
      parrafoMovimientos: 'Y tres movimientos, según lo que aparezca:',
      movimientos: [
        '**Medir por consecuencias:** en lugar de contar horas, observar qué efecto sostenido tiene el uso sobre el descanso, el aprendizaje, el trabajo y los vínculos.',
        '**Poner límites:** definir horarios, momentos y espacios sin pantalla, y comunicarlos con claridad en lugar de resolverlos en silencio.',
        '**Pedir cambios al entorno:** cuando el problema no es de voluntad sino de cómo está organizado el lugar (horarios de respuesta esperados, notificaciones, reglas de los grupos), plantearlo a quien corresponda y acordarlo, sin cargarlo solo sobre uno mismo.',
      ],
    },
    fichaAula2: {
      titulo: 'Desconectarse también es cuidarse: equilibrio, salud y tiempo en la era digital',
      objetivo:
        'Tomar conciencia del impacto del uso excesivo de dispositivos digitales en la salud y el bienestar personal, y desarrollar estrategias para gestionar de forma equilibrada el tiempo en línea.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La tecnología digital nos ofrece acceso inmediato a información, comunicación, entretenimiento, aprendizaje y creación. Sin embargo, la **hiperconectividad constante puede afectar nuestro bienestar físico, mental, emocional y social** si no desarrollamos hábitos de autocuidado.',
        },
        { tipo: 'parrafo', texto: 'La **gestión saludable del tiempo digital** implica:' },
        {
          tipo: 'lista',
          items: [
            'Reconocer cuánto tiempo pasamos en pantalla y en qué actividades.',
            'Identificar señales de saturación, estrés o ansiedad vinculadas al uso digital.',
            'Establecer momentos y espacios sin pantallas (desconexión consciente).',
            'Recuperar el cuerpo, el juego, la conversación cara a cara, el sueño y la pausa.',
            'Reconocer la diferencia entre estar ocupados y estar disponibles todo el tiempo.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'El **bienestar digital** es parte del derecho a la salud integral. Promoverlo es también educar para una ciudadanía digital **más consciente, libre y sostenible.**',
        },
      ],
      preguntaDetonadora:
        '*¿Alguna vez sentiste que se te fue el día "scrolleando"? ¿Te cuesta desconectarte? ¿Qué podrías hacer para tener más equilibrio?*',
      actividades: [
        {
          titulo: 'Actividad inicial — "Mi reloj invisible" (15 min)',
          bloques: [
            { tipo: 'parrafo', texto: '⏰ Cada estudiante estima:' },
            {
              tipo: 'lista',
              items: ['¿Cuántas horas al día usa pantallas?', '¿Qué porcentaje es voluntario, obligatorio, automático?'],
            },
            { tipo: 'parrafo', texto: '→ Luego reflexionan:' },
            {
              tipo: 'lista',
              items: ['¿Qué actividad dejaron de hacer por estar conectados?', '¿Qué les gustaría recuperar?'],
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Diseñamos nuestro Kit de Bienestar Digital" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, diseñan un "Kit de Bienestar Digital Estudiantil" que incluya:',
                'Consejos para equilibrar pantallas y vida offline',
                'Propuestas de desconexión consciente (digital detox)',
                'Ideas para momentos sin celular en el aula o en casa',
                'Tips para evitar el estrés digital (notificaciones, multitarea, sobreinformación)',
                'Recursos o apps que promuevan pausas, relajación o foco',
                'Pueden presentarlo como folleto, mural, video breve, carrusel o código QR con infografía.',
              ],
            },
          ],
        },
      ],
      frase: '*"No estás solo por apagar el celular. Estás más presente en vos."*',
      glosario: [
        'Bienestar digital',
        'Desconexión consciente',
        'Hiperconectividad',
        'Tiempo pantalla',
        'Equilibrio digital',
      ],
      referencias: [
        'UNICEF – Adolescentes y bienestar digital',
        'Chicos.net – Manual de Balance Digital',
        'App "Forest" – para evitar distracciones y promover foco',
        'Video: "Pantallas, cuerpo y emociones" – Canal Encuentro',
        'Guía "Educación y bienestar digital" – Fundación Karisma',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una docente de secundaria con diez años de antigüedad lleva meses respondiendo mensajes a toda hora. Las familias le escriben por WhatsApp a la noche, los fines de semana y hasta durante las vacaciones, y ella contesta casi siempre en pocos minutos. Nadie se lo exigió nunca, pero cada vez que deja un mensaje sin responder siente culpa, como si estuviera descuidando a sus estudiantes. Está agotada, duerme mal y se descubre revisando el celular en medio de la cena. Un domingo, mientras contesta un mensaje, piensa: "tengo que desconectarme". Pero enseguida se pregunta si desconectarse no sería, justamente, abandonar a las familias.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: una docente que cuida a sus estudiantes terminó disponible a toda hora, sin que nadie lo haya decidido de manera explícita. La expectativa de respuesta inmediata se fue instalando de a poco: cada mensaje contestado rápido refuerza la idea de que así tiene que ser. Lo que está en juego no es solo su cansancio: es su descanso, su sueño y su sensación de control, y también la relación con las familias, que hoy esperan algo que ella nunca prometió.',
        ],
        nota: '(Acá me pregunto: ¿cuándo empezó esto? ¿Hubo un momento en que lo decidí, o se fue armando solo con cada respuesta rápida?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la capacidad de sostener una relación con la tecnología que no deteriore el descanso, la concentración y los vínculos. Lo que se ve es un patrón persistente, no un mal día: meses de disponibilidad permanente con consecuencias en el sueño y en la atención. Pero no se trata solo de un problema de voluntad personal.',
          'Las condiciones del entorno también pesan: un teléfono que junta trabajo y vida privada en la misma pantalla, notificaciones que llegan a cualquier hora, un grupo de familias sin ninguna regla acordada sobre horarios de respuesta, y una cultura escolar en la que responder rápido se lee como compromiso. Parte del problema es personal, pero otra parte es institucional, y las dos tienen que mirarse.',
        ],
        nota: '(Acá me pregunto: de todo lo que me desgasta, ¿qué depende de mí y qué depende de cómo está organizado este lugar?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no hace falta desaparecer ni dejar de responder. Lo que corresponde es ordenar la disponibilidad. Lo personal: definir un horario de respuesta razonable y apagar las notificaciones fuera de ese horario. Y lo institucional: comunicarlo con claridad, en lugar de aplicarlo en silencio. Por ejemplo, avisar a las familias qué días y a qué horas se responde, y qué hacer si hay algo urgente.',
          'Y no tiene por qué resolverlo sola: conviene plantearlo a la dirección para que ese acuerdo valga para todo el equipo docente, y no quede como una decisión individual que depende de la valentía de cada uno. Un horario de respuesta que se acuerda entre todos protege a la docente y, también, da claridad a las familias.',
        ],
        nota: '(Acá me pregunto: si pongo un límite sola, ¿qué pasa con mis colegas que no lo hacen? ¿No sería mejor acordarlo entre todos?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no me corresponde asumir: no me corresponde cargar sola con la responsabilidad de corregir una cultura de disponibilidad permanente que me excede. Mi parte es poner límites claros y proponer el cambio. La parte de la institución es revisar qué espera de su equipo y a qué hora, y no dejar que el bienestar quede librado a la fuerza de voluntad de cada docente.',
          'Qué podría salir mal: que me quede con un límite a medias, sin comunicarlo, y siga sintiendo culpa; que lo plantee como un reclamo y no como una propuesta de acuerdo; o que las familias lo interpreten como desinterés. Lo que ajustaría para la próxima: explicar el motivo del horario y ofrecer un canal para las urgencias reales, de modo que desconectarse se vea como cuidado de la calidad de mi trabajo, y no como abandono.',
        ],
        nota: '(Acá me pregunto: ¿qué le diría a una colega que está igual que yo? Probablemente no le diría que se aguante: le diría que lo planteemos juntas.)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir dónde pesa más el problema: en la persona, en el entorno o en ambos. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Un estudiante de tercer año llega a clase con sueño casi todos los días. Cuando le preguntás, cuenta que se acuesta con el celular en la mano y se queda mirando videos hasta las dos de la mañana, aunque sabe que mañana tiene que levantarse temprano. Nadie le escribe a esa hora ni lo espera nadie: es él quien no puede cortar. Dice que le gustaría dormir mejor.',
        analisis:
          '**¿Dónde pesa más?** En la persona. Lo que está afectando su descanso es un hábito concreto que él mismo reconoce y quiere cambiar: usar el celular en la cama, sin ningún límite. No hay una exigencia externa que lo obligue a estar conectado a esa hora. Lo proporcionado es ayudarlo a armar un ajuste simple y concreto, por ejemplo cargar el celular fuera de la cama, usar un despertador aparte y definir una hora de corte, y acompañarlo para que lo sostenga. Si la familia colabora con ese acuerdo, mejor, pero el eje del cambio está en un hábito que puede modificar con apoyo.',
        nota: '(Si elegiste "Entorno" o "Ambos": es cierto que el diseño de las aplicaciones invita a seguir mirando. Pero acá el rasgo central es un hábito personal, reconocido por él, que se puede ajustar con una medida concreta, sin esperar un cambio en nadie más.)',
      },
      {
        clave: 's2',
        enunciado:
          'En el grupo de WhatsApp de docentes de una escuela, la dirección escribe a cualquier hora, incluso de noche y los domingos, y espera respuestas rápidas. Nadie lo dijo nunca como regla, pero quien tarda en contestar recibe un "¿lo viste?" al rato. Varios docentes responden desde la cama para evitar quedar mal. Una de ellas está agotada y empieza a pensar que "tendría que aprender a desconectarse".',
        analisis:
          '**¿Dónde pesa más?** En el entorno. Acá la dificultad no nace de la falta de voluntad de una docente: nace de una cultura de disponibilidad permanente que la institución instaló sin decirlo. Aunque ella lograra desconectarse sola, quedaría expuesta, porque el costo de no responder lo marca el propio grupo. Una institución que espera conexión continua no puede convertir el bienestar en responsabilidad exclusiva de quien trabaja ahí. Lo proporcionado es plantear el tema en conjunto y acordar horarios de respuesta y un canal para urgencias reales, de modo que la regla sea de todos y no una decisión individual.',
        nota: '(Si elegiste "Persona" o "Ambos": poner un límite personal puede ayudar, y lo vimos en el caso resuelto. Pero si el cambio queda solo en una docente, el problema de fondo sigue intacto y ella carga con el costo.)',
      },
      {
        clave: 's3',
        enunciado:
          'Una estudiante de cuarto año tiene a su mejor amiga viviendo en otra provincia. Hablan por videollamada casi todas las noches, hasta tarde, y esa conversación es lo que más disfruta de su día. Dice que se siente acompañada y escuchada como en ningún otro lado. Pero últimamente duerme menos de lo que necesita y le cuesta concentrarse en la primera hora de clase.',
        analisis:
          '**¿Dónde pesa más?** No hay una única respuesta correcta en este caso, y es a propósito. Ese uso fortalece un vínculo muy valioso, por lo que no corresponde tratarlo como un problema ni sacarlo. Pero también le está restando sueño y concentración, y eso es algo que hay que mirar. Una lectura puede poner el peso en la persona: ajustar el horario de la llamada o acortarla, sin renunciar al vínculo. Otra puede ponerlo en el entorno: ¿tiene otros momentos del día para hablar con su amiga?, ¿la diferencia horaria o los horarios escolares dejan pocas opciones? Y otra puede reconocer que pesa en ambos: un ajuste personal y un acuerdo con la familia sobre los horarios. Lo que se evalúa es que puedas justificar tu lectura mirando la finalidad del uso, su calidad, las consecuencias sostenidas y la sensación de control, sin patologizar un uso intenso que cumple una función importante.',
        nota: '(No hay una sola respuesta esperada en este caso: se evalúa la justificación, no la opción elegida.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los análisis que hicieron dos colegas sobre un mismo caso: un docente que responde mensajes de familias hasta tarde y duerme cada vez peor. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'El problema es la cantidad de horas que pasa frente al celular. Si las reduce a la mitad, se resuelve.',
      citaB:
        'Es un problema suyo: si no quiere responder de noche, que no responda. Cada uno tiene que aprender a desconectarse; la escuela no tiene nada que ver.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Análisis A:** reduce el bienestar a una cantidad de horas. El número no dice nada por sí solo: importa para qué usa el celular, cómo, qué pasa con su sueño y sus vínculos, y si siente que decide él. Dos personas con las mismas horas pueden estar en situaciones opuestas. Además, el análisis no pregunta por qué responde a esa hora, y por eso no ve lo que lo empuja.',
      errorB:
        '**Análisis B:** le deja todo el peso al individuo. La autorregulación importa, pero no es toda la respuesta: si hay una cultura de disponibilidad permanente, notificaciones constantes y expectativas de respuesta inmediata, ninguna voluntad personal alcanza para compensarlas. Una institución que espera conexión continua no puede decir que el bienestar es asunto exclusivo de cada persona.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: dejaron de mirar el cuadro completo. Uno se quedó mirando un número, y el otro, a una sola persona.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'definir la dimensión y explicar por qué no se reduce a horas',
        enunciado: '¿Cuál de estas describe mejor el bienestar digital?',
        opciones: [
          { id: 'a', texto: 'Pasar menos de un número fijo de horas por día frente a las pantallas.' },
          { id: 'b', texto: 'No usar la tecnología fuera del horario de trabajo o de estudio.' },
          { id: 'c', texto: 'Estar siempre conectado para no perderse nada.' },
          {
            id: 'd',
            texto:
              'Una relación con la tecnología que no deteriora, de manera sostenida, el descanso, el aprendizaje, el trabajo, los vínculos ni la capacidad de decidir.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'No existe una cantidad universal de horas que sirva para todos. Importan la finalidad y la calidad del uso, el sueño, la concentración y la sensación de control; un número solo no alcanza para evaluar nada.',
          b: 'Poner límites de horario puede ayudar, pero no define el bienestar digital. Alguien puede respetar un horario y igual tener una relación que lo desgasta, o lo contrario.',
          c: 'La disponibilidad permanente suele ser justamente lo que desgasta. Conexión y bienestar no son opuestos, pero estar siempre conectado no es una integración sostenible.',
        },
      },
      {
        objetivo: 'identificar qué factores pesan en una situación concreta',
        enunciado:
          'Dos estudiantes pasan cinco horas por día en el celular. Uno lo usa para estudiar, hacer música y hablar con amigos, y duerme bien. La otra pasa esas horas en un scroll que la deja sin dormir y sin ganas de hacer otra cosa. ¿Qué permite distinguir mejor sus situaciones?',
        opciones: [
          { id: 'a', texto: 'Las cinco horas: como son las mismas, están en la misma situación.' },
          {
            id: 'b',
            texto:
              'La finalidad y la calidad del uso, y sus consecuencias sobre el sueño, la concentración, los vínculos y la sensación de control.',
          },
          { id: 'c', texto: 'La edad de los dos, y nada más.' },
          { id: 'd', texto: 'Las aplicaciones que usan, sin importar para qué.' },
        ],
        correcta: 'b',
        feedbacks: {
          a: 'Mismas horas no significa misma situación. Es justamente el ejemplo de por qué las horas no alcanzan: lo que cuenta es qué se hace con ese tiempo y qué efecto tiene.',
          c: 'La etapa vital es uno de los factores que importan, pero no el único. Con la edad sola no se distinguen estos dos casos.',
          d: 'Saber qué aplicación se usa no alcanza: una misma aplicación puede servir para crear y conectarse o para un scroll que desgasta. Importa para qué y con qué consecuencias.',
        },
      },
      {
        objetivo: 'distinguir lo que depende de la persona de lo que depende del entorno',
        enunciado:
          'En una escuela, la dirección espera respuestas inmediatas en el grupo de docentes a cualquier hora. Una docente se agota y concluye que es "su culpa por no saber desconectarse". ¿Qué lectura es más adecuada?',
        opciones: [
          {
            id: 'a',
            texto:
              'Una parte del problema es del entorno: la institución instaló una cultura de disponibilidad permanente, y resolverlo exige acordar reglas entre todos, no solo que ella se autorregule.',
          },
          { id: 'b', texto: 'Es un problema exclusivamente personal: si no quiere contestar, que no conteste.' },
          { id: 'c', texto: 'Es un problema de la tecnología, no de la escuela ni de la docente.' },
          { id: 'd', texto: 'No hay problema: todos los trabajos exigen estar disponibles.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'La autorregulación importa, pero no es toda la respuesta. Si no responder tiene un costo marcado por el propio grupo, ninguna voluntad individual alcanza para compensarlo.',
          c: 'Las notificaciones y los diseños influyen, pero la expectativa de respuesta inmediata la sostienen personas e instituciones, y por eso se puede acordar y cambiar.',
          d: 'Que algo sea frecuente no lo vuelve sostenible. Una institución que exige conexión continua no puede convertir el bienestar en responsabilidad exclusiva de quien trabaja ahí.',
        },
      },
      {
        objetivo: 'decidir un ajuste proporcionado, incluyendo cuándo desconectarse y cuándo pedir ayuda',
        enunciado:
          'Un estudiante duerme poco hace varias semanas por el uso nocturno del celular. Acordó un horario de corte y lo cumplió algunos días, pero el cansancio, la falta de concentración y el malestar siguen y empeoran. ¿Cuál es la actitud más adecuada?',
        opciones: [
          { id: 'a', texto: 'Insistir en que le falta voluntad y quitarle el celular como castigo.' },
          { id: 'b', texto: 'No hacer nada: es una etapa y se le va a pasar.' },
          {
            id: 'c',
            texto:
              'Mantener el ajuste y, como las consecuencias se sostienen y empeoran, pedir ayuda al equipo de orientación y a la familia, sin culparlo.',
          },
          { id: 'd', texto: 'Pedirle que se desconecte por completo de toda tecnología.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El castigo no ataca la causa y suma culpa a algo que ya lo desgasta. Además, rompe la confianza que hace falta para que pueda contar lo que le pasa.',
          b: 'Minimizar deja pasar una señal. Cuando las consecuencias se sostienen y empeoran a pesar de un ajuste razonable, corresponde pedir ayuda.',
          d: 'Desconectarse por completo no es proporcionado. Conexión y bienestar no son opuestos: el objetivo es una integración sostenible, no abandonar la tecnología.',
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
          'Reduce el bienestar a horas de pantalla, o le deja todo el peso al individuo ("que aprenda a desconectarse").',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que importan otros factores además de las horas, pero no distingue lo que depende de la persona de lo que depende del entorno.',
      },
      {
        nivel: '3. Logrado',
        muestra:
          'Identifica los factores que pesan en la situación, distingue persona y entorno, y propone un ajuste proporcionado.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además mide por consecuencias sostenidas, propone cambios al entorno (acuerdos de horarios, normas del grupo), decide cuándo pedir ayuda sin patologizar y justifica su lectura cuando el caso no tiene una única respuesta.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta dimensión: por qué el bienestar digital no se mide en horas, qué factores pesan, qué depende de la persona y qué del entorno, y un caso recorrido de punta a punta. Lo que cambia, a partir de acá, es que podés ordenar tu disponibilidad y la de tus estudiantes en lugar de dejar que la defina la costumbre.',
    accionSemana:
      '**Una acción concreta para esta semana:** definí un límite concreto de disponibilidad, un horario de respuesta, y comunicalo con claridad a las familias y a tus estudiantes: qué días y a qué horas respondés, y qué hacer si surge algo urgente. Avisarlo no es desentenderte, es dar claridad. Si podés, llevalo también a tus colegas o a la dirección para acordarlo entre todos, y que no quede como una decisión que dependa de la valentía de cada uno. Y con tu curso, abrí una conversación breve sobre una pregunta: ¿qué usos de la tecnología los fortalecen y cuáles los desgastan?',
    preguntasIntro: 'Para esa conversación, algunas preguntas que pueden servirte:',
    preguntas: [
      '¿Qué cosas hacés con el celular que te hacen sentir bien, que te suman?',
      '¿Y cuáles te dejan cansado, sin ganas o con culpa?',
      'De lo que hacés en pantalla, ¿qué elegís vos y qué hacés por costumbre o porque se espera de vos?',
      '¿Qué te gustaría recuperar o hacer más?',
      '¿Qué podríamos acordar entre todos, como curso, sobre horarios de mensajes o momentos sin celular?',
    ],
    cierrePreguntas:
      'Escuchá sin juzgar. No se trata de que cada uno confiese cuánto usa el celular, sino de que ellos mismos distingan lo que los fortalece de lo que los desgasta.',
    parrafo3:
      '**Volvé al problema de Por qué importa:** las once de la noche, en la cama, respondiendo mensajes. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué parte de esa disponibilidad era tuya y qué parte la esperaba el entorno? ¿Qué límite pondrías vos, y qué le pedirías al entorno? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
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
      'Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué contestar a toda hora no siempre es una decisión que se toma solo?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Salud y Bienestar Digital, en una tarjeta',
      parrafos: [
        'El bienestar digital no se mide en minutos de pantalla. Conexión y bienestar no son opuestos: el objetivo es una relación con la tecnología que se pueda sostener.',
        '**La pregunta funcional:** ¿esta relación con la tecnología fortalece o deteriora, de manera persistente, mi capacidad de descansar, aprender, trabajar, relacionarme y decidir?',
        '**Los factores que importan:** finalidad del uso · calidad del uso · etapa vital · sueño · movimiento · concentración · vínculos · sensación de control.',
        '**Los tres movimientos:** medir por consecuencias · poner límites · pedir cambios al entorno.',
        '**Y una cosa más:** el bienestar no es solo responsabilidad individual. Las instituciones y los diseños también cuentan, y desconectarse no es abandonar.',
      ],
    },
    seguiTitulo: 'Seguí recorriendo el Poliedro',
    seguiAntes: 'Esta es la quinta de las 10 dimensiones. Podés volver al ',
    seguiEnlace1Texto: 'módulo Ciudadanía Digital',
    seguiEnlace1Href: '/ciudadania-digital',
    seguiEntre: ', que presenta el mapa completo, o a la temática anterior, ',
    seguiEnlace2Texto: 'Emocional',
    seguiEnlace2Href: '/tematicas/emocional',
    seguiDespues: '.',
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Conectarse no es el problema. El objetivo es una relación con la tecnología que se pueda sostener: que no te quite el descanso, la atención ni los vínculos, y que no dependa solo de tu fuerza de voluntad. Poner un límite, acordarlo con otros y pedir ayuda cuando hace falta no es abandonar nada: es cuidar lo que necesitás para estar bien.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[SALUD_BIENESTAR_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
