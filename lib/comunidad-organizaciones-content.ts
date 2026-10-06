// Contenido de /tematicas/comunidad-y-organizaciones-sociales. Mismo patrón que
// lib/gobiernos-locales-content.ts / lib/ia-criterio-content.ts: escrito solo para
// 'docentes', cualquier otra audiencia cae a ese fallback vía resolveContenido(). Sin
// fuentes/citas con links: las referencias van como texto plano (sin SourceCite). Las
// negritas/cursivas en formato Markdown (**negrita**, *cursiva*) se renderizan con el
// helper Enfasis de components/comunidad-organizaciones/ui.tsx, nunca como asteriscos
// literales. Texto de las secciones 1 a 10 tomado TEXTUAL de los prompts de la temática
// "Comunidad y Organizaciones Sociales" del grupo Gobierno y Comunidad Digital.
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/comunidad-organizaciones/ficha-aula';

export const COMUNIDAD_ORGANIZACIONES_FALLBACK: Audiencia = 'docentes';

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
  { id: 'organizacion-y-accion-colectiva', number: '05', label: 'Organización y acción colectiva', shortLabel: 'Organización' },
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
  organizacionYAccionColectiva: {
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
    titulo: 'Comunidad y Organizaciones Sociales',
    subtitulo: 'De estar conectados a ser comunidad',
    bajada:
      'Conexión y comunidad no son equivalentes. Las comunidades construyen confianza, apoyo, conocimiento territorial y capacidad colectiva. Estas relaciones pueden actuar como capital social preventivo cuando facilitan verificación, ayuda y detección de problemas compartidos. Esta temática forma parte del grupo Gobierno y Comunidad Digital de la plataforma y trabaja esa distinción: tener un grupo digital activo no es, por sí solo, tener una comunidad.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que conexión y comunidad no son equivalentes, y reconocer cuándo las relaciones comunitarias —confianza, apoyo, conocimiento territorial, capacidad colectiva— funcionan como capital social preventivo, facilitando verificación, ayuda y detección temprana de problemas compartidos.',
      'Conocer los laboratorios ciudadanos como una forma de combinar conocimiento experto con experiencia situada, evitando que las políticas se diseñen únicamente desde afuera del territorio que buscan transformar.',
      'Reconocer que la participación necesita diseño para no reproducir únicamente las voces que ya tienen poder: un referente no representa automáticamente a todos, y diseñar inclusión exige canales, horarios y lenguajes que permitan intervenir también a quienes enfrentan mayores barreras.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Distinguir conexión digital de comunidad real, y reconocer cuándo una comunidad funciona como capital social preventivo, facilitando verificación, ayuda y detección temprana de problemas compartidos.',
      'Entender cómo los laboratorios ciudadanos combinan conocimiento experto con experiencia situada, evitando que las políticas se diseñen únicamente desde afuera del territorio que buscan transformar.',
      'Identificar cuándo un referente no representa automáticamente a todos, y qué canales, horarios y lenguajes hacen falta diseñar para incluir también a quienes enfrentan mayores barreras para participar.',
      'Usar este capítulo como lente de lectura frente a una situación concreta, identificando qué dimensión está comprometida, qué condiciones sociotécnicas intervienen y qué cambio sería proporcionado, para evaluar procesos participativos reales.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Quién habla cuando "el barrio opina"?',
    parrafos: [
      'Una organización vecinal tiene un grupo de WhatsApp con doscientos miembros, muy activo: se discuten obras públicas, se organizan reclamos, circulan encuestas rápidas sobre prioridades del barrio. Cuando alguien de la municipalidad pregunta "qué piensa el barrio" sobre un proyecto, la organización responde con total seguridad, citando los resultados de la última encuesta en el grupo. Pero quienes más participan en ese grupo son, casi siempre, las mismas quince o veinte personas: jubilados con tiempo disponible, vecinos con buena conexión a internet, gente que ya tenía peso en el barrio antes de que existiera el grupo. Las familias que trabajan todo el día, las personas mayores sin smartphone, quienes no leen bien el español, directamente no están ahí.',
      'Nadie decidió excluir a nadie. El grupo nació con la mejor intención de darle voz al barrio, y en muchos sentidos lo logra. El problema es que, sin que nadie se lo proponga, terminó amplificando a quienes ya tenían más facilidad para participar, y ese resultado se presenta como si fuera "la opinión del barrio" completo. Un referente —en este caso, el grupo entero— no representa automáticamente a todos, por más activo y conectado que esté.',
    ],
    problema:
      'Pensá en algún espacio de participación que conozcas —un grupo, una asamblea, una consulta— donde "todos pueden opinar" en teoría. ¿Quiénes son, en los hechos, los que terminan opinando? ¿Y quiénes, sin que nadie lo decida así, quedan afuera?',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Conexión y comunidad no son equivalentes. Las comunidades construyen confianza, apoyo, conocimiento territorial y capacidad colectiva. Estas relaciones pueden actuar como capital social preventivo cuando facilitan verificación, ayuda y detección de problemas compartidos — estar en el mismo grupo digital no garantiza, por sí solo, ninguna de esas cuatro cosas.',
      'Las organizaciones sociales también amplían participación democrática mediante información, coordinación y acción colectiva. Los laboratorios ciudadanos permiten combinar conocimiento experto con experiencia situada, evitando que las políticas sean diseñadas únicamente desde afuera del territorio — quien vive un problema todos los días aporta algo que ningún experto externo puede reemplazar, por más preparado que esté.',
      'La participación necesita reconocer desigualdades internas y voces ausentes. Un referente no representa automáticamente a todos. Diseñar inclusión exige canales, horarios y lenguajes que permitan intervenir también a quienes enfrentan mayores barreras — la inclusión no ocurre sola porque un canal esté técnicamente abierto a cualquiera.',
    ],
    preguntaCierre:
      'Pensá en alguna organización o proceso participativo de tu entorno que combine, hoy, conocimiento experto con experiencia situada. ¿Qué aporta cada parte que la otra sola no podría aportar?',
    fichaAula1: {
      titulo: 'Participación ciudadana real: la Carta Iberoamericana del CLAD',
      objetivo:
        'Conocer los principios de la Carta Iberoamericana de Participación Ciudadana en la Gestión Pública del CLAD, y reconocer qué condiciones hacen falta para que un proceso participativo incluya también a quienes enfrentan mayores barreras.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En 2009, el CLAD aprobó la Carta Iberoamericana de Participación Ciudadana en la Gestión Pública, que define ese derecho como "el proceso de construcción social de las políticas públicas que, conforme al interés general de la sociedad democrática, canaliza, da respuesta o amplía los derechos económicos, sociales, culturales, políticos y civiles de las personas, y los derechos de las organizaciones o grupos en que se integran".',
        },
        {
          tipo: 'parrafo',
          texto:
            'La Carta es explícita en un punto que conecta directo con el problema de las voces ausentes: una vez abiertos los canales de participación ciudadana, "es preciso evitar que sean controlados por intereses organizados que reproduzcan la exclusión social". No alcanza con que un canal exista: hay que cuidar activamente que no termine funcionando como una puerta que, en la práctica, solo cruzan los mismos de siempre.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para lograrlo, la Carta exige diseñar "mecanismos participativos especiales para incluir a todo ciudadano y ciudadana que por su lengua, condición social y cultural, discapacidad, ubicación geográfica u otras causas tenga dificultades para comunicarse con la Administración, o limitaciones para acceder a los mecanismos de participación ordinarios". También pide instrumentar mecanismos de colaboración para que las comunidades y colectivos puedan estructurar y definir sus propias formas de representación interna, de modo que el diálogo con las instituciones sea genuinamente viable.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Entre los principios que sostienen toda la Carta están la igualdad (la participación debe poder ejercerse en igualdad de condiciones), la gratuidad (no puede tener un costo que la vuelva inaccesible), y el respeto a la diversidad y la no discriminación. En conjunto, estos principios responden a la misma pregunta que plantea el capítulo: un referente o un canal de participación no representa automáticamente a todos, y hace falta un diseño deliberado para que eso deje de ser así.',
        },
      ],
      preguntaDetonadora:
        'En los espacios de participación que conocés —una organización, una consulta pública, un grupo vecinal— ¿quiénes tienen, hoy, "limitaciones para acceder a los mecanismos de participación ordinarios"?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Quién falta en la foto?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá el caso del grupo de WhatsApp vecinal de "Por qué importa". En grupos, hacen una lista de los perfiles de personas que probablemente no estén participando ahí, y por qué motivo (lengua, edad, horario, disponibilidad de datos, discapacidad, etc.).',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Rediseñar un canal de participación" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, retoman el mismo caso del grupo vecinal.',
                'Para cada perfil identificado en la actividad inicial, proponen un canal, horario o lenguaje complementario que permitiera su participación, sin eliminar el canal que ya funciona para el resto.',
                'Aplican los principios de la Carta (igualdad, gratuidad, respeto a la diversidad) para justificar cada propuesta.',
                'Presentan su rediseño al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"Que un canal esté abierto para cualquiera no significa que cualquiera pueda, en los hechos, entrar por él."',
      glosario: ['Participación ciudadana', 'Voces ausentes', 'Mecanismos participativos especiales', 'Representación social', 'Exclusión social'],
      referencias: ['CLAD — Centro Latinoamericano de Administración para el Desarrollo (2009). Carta Iberoamericana de Participación Ciudadana en la Gestión Pública.'],
    },
  },
  organizacionYAccionColectiva: {
    titulo: 'Organización y acción colectiva',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: las comunidades transforman conexión en apoyo, conocimiento situado e incidencia. El capital social preventivo depende de confianza, redes y capacidad de movilizar recursos; la participación necesita diseño para no reproducir únicamente las voces que ya poseen poder.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a un proceso comunitario o participativo, la pregunta no debería limitarse a si existe un canal de participación, sino a reconstruir quién lo usa realmente, qué condiciones lo vuelven accesible o no, y qué evidencia permite distinguir una comunidad activa de una conexión que solo lo parece.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — asumir que un grupo digital numeroso y activo equivale automáticamente a una comunidad representativa es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — acá, eso significa que ni basta con que una comunidad "tenga ganas" de participar, ni alcanza con que una institución "abra" un canal: hace falta que ambas condiciones se encuentren.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que tener un grupo digital conectado equivalga a tener una comunidad: la comunidad construye confianza, apoyo, conocimiento territorial y capacidad colectiva, algo que la sola conexión no garantiza.',
          'No es que el conocimiento experto baste para diseñar una política territorial: los laboratorios ciudadanos existen justamente porque la experiencia situada aporta algo que el conocimiento experto, por sí solo, no puede reemplazar.',
          'No es que un canal de participación abierto a cualquiera sea, por eso, inclusivo: un referente no representa automáticamente a todos, y hace falta diseño deliberado para que participen también quienes enfrentan mayores barreras.',
          'No es que la responsabilidad de participar sea solo de la comunidad: diseñar canales, horarios y lenguajes accesibles es una responsabilidad de quien abre el proceso participativo.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Si lo que existe es una comunidad real —con confianza, apoyo y conocimiento compartido— o solo una conexión que todavía no se tradujo en eso.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si el proceso combina conocimiento experto con experiencia situada, y quién queda dentro o fuera de los canales, horarios y lenguajes disponibles para participar.',
        '**¿Qué cambio sería proporcionado?** Un cambio que fortalezca el capital social existente y sume, de forma deliberada, a las voces que hoy están ausentes, sin desarmar lo que ya funciona para quienes sí participan.',
      ],
    },
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'La misma organización vecinal del grupo de WhatsApp activo decide, esta vez, organizar una consulta real sobre qué obra priorizar con un fondo municipal recién asignado: una plaza nueva o la mejora del alumbrado en una calle con antecedentes de inseguridad. Lanzan la encuesta en el grupo y, en tres días, responden ciento diez de las doscientas personas. La plaza gana con el 70% de los votos. Cuando se presenta el resultado en una reunión con el municipio, una vecina que no está en el grupo —no tiene datos móviles suficientes para estar siempre conectada— pregunta por qué nadie le consultó, y dice que en su cuadra, la del alumbrado, la mayoría hubiera votado distinto.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: la organización usó el canal que mejor conocía y que más rápido le dio una respuesta masiva, pero ese canal no llegaba a toda la comunidad que decía representar. Participan la organización, que actuó de buena fe y con una metodología que le pareció sólida (ciento diez respuestas no es poco); la vecina que quedó fuera, junto con probablemente otras personas en su misma situación; y el municipio, que tomó una decisión de recursos basándose en un resultado que no era tan representativo como parecía.',
        ],
        nota: '*(Acá me pregunto: ¿ciento diez respuestas sobre doscientos miembros del grupo es un buen número, o es un buen número solo si el grupo ya representaba a todo el barrio?)*',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué dimensión está comprometida: la organización confundió conexión con comunidad. El grupo de WhatsApp es una herramienta real y útil, pero no es equivalente a "el barrio": quienes no tienen datos móviles suficientes, como la vecina que reclamó, quedaron fuera de una decisión que también los afecta directamente.',
          'Qué condiciones sociotécnicas intervienen: la consulta se diseñó con un único canal (el grupo digital) y un único plazo corto (tres días), sin ningún mecanismo complementario para quienes no podían participar por esa vía. No hubo, en el diseño, ninguna pregunta sobre quién quedaba afuera antes de lanzar la encuesta — la pregunta apareció recién después, cuando alguien afectado la hizo notar.',
        ],
        nota: '*(Acá me pregunto: si la calle del alumbrado tiene antecedentes de inseguridad, ¿es casualidad que quienes viven ahí sean, además, quienes menos participan en el grupo digital?)*',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: no se trata de abandonar el grupo de WhatsApp, que sigue siendo un canal válido y rápido para una parte real de la comunidad, sino de sumarle un canal complementario para la próxima consulta: una recorrida presencial puerta a puerta en las cuadras con menor conectividad, o una mesa de consulta en un horario y lugar accesible, con alguien que pueda explicar la consulta en el idioma o con el lenguaje que haga falta. La decisión final podría no cambiar —la plaza podría seguir ganando—, pero el resultado reflejaría a todo el barrio, no solo a quien pudo responder en tres días por WhatsApp.',
        ],
        nota: '*(Acá me pregunto: ¿agregar un canal complementario sale muy caro en tiempo, comparado con el costo de tomar una decisión de recursos que una parte del barrio no reconoce como propia?)*',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir a la organización: no le corresponde sentir que el grupo de WhatsApp fue un error, ni que toda consulta anterior hecha por ese medio queda invalidada — siguen siendo útiles para la parte de la comunidad que sí los usa.',
          'Qué podría salir mal: que, por la incomodidad del reclamo, se intente hacer una nueva consulta apurada sin diseñar bien el canal complementario, repitiendo el mismo problema de fondo; o que, al revés, se abandone cualquier consulta rápida por miedo a excluir, perdiendo la agilidad que el grupo digital sí aporta para otras decisiones. Lo que ajustaría para la próxima vez: que toda consulta de la organización incluya, desde el diseño, la pregunta "¿quién no puede participar por este canal, y cómo lo sumamos?", antes de lanzarla, no después de que alguien lo reclame.',
        ],
        nota: '*(Acá me pregunto: en mi propia organización o espacio de participación, ¿cuántas decisiones se tomaron ya con el mismo método —rápido, cómodo, pero parcial— sin que nadie lo haya notado todavía?)*',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué está en juego: capital social preventivo, laboratorio ciudadano frente a diseño desde afuera, o voces ausentes en la participación. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'En un edificio de departamentos, los vecinos tienen un grupo de mensajería donde avisan cosas simples: si alguien ve a un desconocido merodeando en la entrada, si hay un corte de luz, si alguien necesita ayuda puntual con algo. Gracias a ese grupo, una vecina detecta a tiempo que la puerta de entrada quedó mal cerrada una noche, y lo avisa antes de que pase algo.',
        analisis:
          '¿Qué está en juego acá? Capital social preventivo. El grupo no decide políticas ni representa a nadie formalmente: funciona como una red de confianza y apoyo que permite detectar a tiempo un problema compartido —la puerta mal cerrada— antes de que escale. Es exactamente lo que el capítulo describe: relaciones que facilitan verificación, ayuda y detección de problemas compartidos.',
        nota: '*(Si elegiste "laboratorio ciudadano" o "voces ausentes": acá no hay ningún proceso de diseño de política ni ninguna consulta formal en juego — es, directamente, un ejemplo de cómo una comunidad conectada previene un problema.)*',
      },
      {
        clave: 's2',
        enunciado:
          'Un municipio quiere mejorar el sistema de recolección de residuos en un barrio con calles angostas donde los camiones no pueden entrar fácilmente. En vez de diseñar la solución solo con su equipo técnico, convoca a los propios vecinos, que conocen los horarios reales de circulación, los puntos donde se acumula más basura y las rutas alternativas que los técnicos no habrían considerado, para coproducir el diseño final junto con especialistas en logística urbana.',
        analisis:
          '¿Qué está en juego acá? Laboratorio ciudadano frente a diseño desde afuera. El municipio evitó diseñar la solución únicamente con conocimiento experto externo, y en cambio combinó ese conocimiento con la experiencia situada de quienes viven el problema todos los días. Es exactamente la lógica de los laboratorios ciudadanos: ninguna de las dos partes, por sí sola, tenía toda la información necesaria.',
        nota: '*(Si elegiste "capital social preventivo" o "voces ausentes": en este caso no se trata de prevenir un problema mediante redes de confianza, ni de que falte alguna voz en particular —se convocó activamente a la comunidad—, sino de cómo se combinó el conocimiento para diseñar la solución.)*',
      },
      {
        clave: 's3',
        enunciado:
          'Una organización social que trabaja temas de vivienda hace una consulta pública sobre un proyecto de ley, exclusivamente a través de un formulario online en español, con un plazo de cuarenta y ocho horas. Entre su base de contacto hay varias familias migrantes que no dominan bien el idioma y varias personas mayores sin acceso regular a internet, que terminan sin poder opinar.',
        analisis:
          '¿Qué está en juego acá? Voces ausentes en la participación. El canal elegido —un formulario online, en un solo idioma, con un plazo muy corto— dejó fuera, de manera previsible, a dos grupos concretos dentro de la propia base de la organización. Es exactamente lo que el capítulo advierte: un referente no representa automáticamente a todos, y diseñar inclusión exige canales, horarios y lenguajes que permitan intervenir también a quienes enfrentan mayores barreras.',
        nota: '*(No hay una sola forma de resolver este caso, pero sí está claro cuál es el problema: no es que falte interés de la organización, es que el diseño del canal no contempló a toda su propia base.)*',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de una organización social sobre cómo tomar decisiones comunitarias. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA: 'Tenemos un grupo de WhatsApp con doscientas personas activas todos los días. Eso ya es nuestra comunidad, no necesitamos nada más para saber qué piensa el barrio.',
      citaB: 'Para qué vamos a armar otra consulta, si total siempre opina el mismo grupo de siempre. Mejor decidimos nosotros directamente, es más rápido y da lo mismo.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** confunde conexión digital con comunidad real. Un grupo activo puede ser parte del capital social de un barrio, pero no es automáticamente representativo de todo él: conexión y comunidad no son equivalentes, y asumir que sí lo son es, justamente, el error que dejó afuera a la vecina del caso resuelto.',
      errorB:
        '**Comentario B** reconoce un problema real —que siempre participan los mismos— pero responde renunciando a la participación en vez de rediseñarla. El capítulo no dice que haya que abandonar los procesos participativos porque reproducen desigualdades: dice que hay que diseñarlos para que dejen de hacerlo, con canales, horarios y lenguajes que incluyan a quienes hoy quedan afuera.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno distingue entre quién participa hoy y quién debería poder participar. Uno da por representativo lo que no lo es; el otro, frente a esa misma falta de representatividad, prefiere no participar en vez de corregirla.',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'distinguir conexión digital de comunidad real, y reconocer cuándo una comunidad funciona como capital social preventivo',
        enunciado:
          'Un grupo de vecinos avisa por mensajería cuando detecta algo raro en el edificio, y eso permite resolver problemas antes de que escalen. Según el capítulo, ¿qué está funcionando ahí?',
        opciones: [
          { id: 'a', texto: 'Capital social preventivo, porque las relaciones facilitan verificación, ayuda y detección de problemas compartidos.' },
          { id: 'b', texto: 'Conexión digital, que es exactamente lo mismo que tener una comunidad.' },
          { id: 'c', texto: 'Un mecanismo de representación formal de todo el edificio.' },
          { id: 'd', texto: 'Nada relevante, porque no se tomó ninguna decisión de política pública.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'El capítulo es explícito en que conexión y comunidad no son equivalentes: lo que vuelve esto relevante no es la conexión en sí, sino que la relación facilita verificación, ayuda y detección temprana.',
          c: 'El capítulo no equipara esta dinámica con representación formal: es una red de confianza, no un mecanismo de decisión sobre políticas.',
          d: 'El capítulo no limita el valor de una comunidad a la toma de decisiones de política pública: el capital social preventivo tiene valor en sí mismo, al facilitar la detección temprana de problemas.',
        },
      },
      {
        objetivo: 'entender cómo los laboratorios ciudadanos combinan conocimiento experto con experiencia situada, evitando políticas diseñadas únicamente desde afuera del territorio',
        enunciado:
          'Un municipio diseña la mejora de un servicio convocando tanto a especialistas técnicos como a los vecinos que viven el problema todos los días. ¿Qué principio del capítulo refleja esta decisión?',
        opciones: [
          { id: 'a', texto: 'Que el conocimiento experto siempre debe primar por sobre la experiencia de los vecinos.' },
          { id: 'b', texto: 'Que la experiencia de los vecinos siempre debe primar por sobre el conocimiento técnico.' },
          { id: 'c', texto: 'Que los laboratorios ciudadanos permiten combinar conocimiento experto con experiencia situada, evitando que las políticas se diseñen únicamente desde afuera del territorio.' },
          { id: 'd', texto: 'Que convocar a los vecinos solo sirve para validar decisiones que los técnicos ya tomaron antes.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El capítulo no establece una jerarquía donde el conocimiento experto prime: plantea una combinación, porque cada parte aporta algo que la otra no tiene.',
          b: 'Tampoco se trata de que la experiencia situada reemplace al conocimiento experto: se trata de combinar ambos, no de sustituir uno por el otro.',
          d: 'Convocar a los vecinos únicamente para validar decisiones ya tomadas no es lo que describe el capítulo: la combinación implica que ambos conocimientos intervengan en el diseño, no solo en su aprobación posterior.',
        },
      },
      {
        objetivo: 'identificar cuándo un referente no representa a todos, y qué canales, horarios y lenguajes hacen falta para incluir a quienes enfrentan mayores barreras',
        enunciado:
          'Una organización hace una consulta exclusivamente por formulario online, en un solo idioma y con un plazo de cuarenta y ocho horas, dejando afuera a personas mayores sin acceso regular a internet y a familias que no dominan bien ese idioma. ¿Qué le falta a este proceso, según el capítulo?',
        opciones: [
          { id: 'a', texto: 'Nada: cualquier persona pudo, en teoría, completar el formulario.' },
          { id: 'b', texto: 'Le falta eliminar la consulta y decidir directamente sin preguntarle a nadie.' },
          { id: 'c', texto: 'Le falta reducir aún más el plazo, para que la consulta sea más ágil.' },
          { id: 'd', texto: 'Le falta diseñar canales, horarios y lenguajes que permitan participar también a quienes enfrentan mayores barreras.' },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'Que un canal esté técnicamente disponible para cualquiera no significa que sea accesible en la práctica: el capítulo advierte que un referente no representa automáticamente a todos.',
          b: 'Eliminar la consulta no soluciona la falta de representatividad: el capítulo propone rediseñar el proceso para incluir, no abandonarlo.',
          c: 'Reducir el plazo agravaría el problema, no lo resolvería: lo que falta es ampliar los canales y adaptarlos, no acelerar un proceso que ya excluye.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura para evaluar procesos participativos concretos',
        enunciado: 'Frente a un proceso participativo concreto, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
        opciones: [
          { id: 'a', texto: 'Qué cambio sería proporcionado → qué dimensión está comprometida → qué condiciones sociotécnicas intervienen.' },
          { id: 'b', texto: 'Qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado → qué dimensión está comprometida.' },
          { id: 'c', texto: 'Qué dimensión humana o institucional está comprometida → qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado.' },
          { id: 'd', texto: 'Quién participó más → quién tiene razón → qué sanción corresponde.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El orden está invertido: el capítulo propone identificar primero qué está comprometido, y recién al final decidir qué cambio sería proporcionado.',
          b: 'Empezar por las condiciones sociotécnicas sin identificar antes qué dimensión está comprometida deja sin marco la pregunta siguiente.',
          d: 'Ese no es el método que da el capítulo. El propósito no es medir quién participó más ni buscar culpables, sino mejorar la calidad de las preguntas que preceden a la decisión.',
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
        muestra: 'Confunde un grupo digital activo con una comunidad representativa, o descarta cualquier proceso participativo porque "siempre opina el mismo grupo".',
      },
      {
        nivel: '2. En desarrollo',
        muestra: 'Reconoce que algo no está bien en la situación, pero no distingue con precisión si el problema es de capital social, de diseño desde afuera, o de voces ausentes.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres dimensiones, identifica cuál está en juego en una situación concreta y propone un cambio proporcionado que no descarta lo que ya funciona.',
      },
      {
        nivel: '4. Avanzado',
        muestra: 'Además reconoce cuándo un proceso combina genuinamente conocimiento experto con experiencia situada, y diseña canales, horarios o lenguajes concretos para incluir a quienes quedan afuera.',
      },
    ],
    rubricaCierre: 'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: la diferencia entre conexión y comunidad, cómo los laboratorios ciudadanos combinan conocimiento experto con experiencia situada, y por qué un referente no representa automáticamente a todos. Lo que cambia, a partir de acá, es cómo mirás los espacios de participación que ya existen a tu alrededor: no solo si están activos, sino a quién realmente representan.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde una comunidad o un grupo participativo esté tomando decisiones, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay capital social real, si se combina conocimiento experto con experiencia situada, quién queda incluido o afuera— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la organización vecinal que presentó los resultados de su grupo de WhatsApp como "lo que piensa el barrio", sin que todo el barrio hubiera podido participar. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué canal complementario le faltaba a ese proceso? ¿Qué espacio de participación de tu propio entorno mirarías ahora con esta misma pregunta? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula2: {
      titulo: 'El método LABIC: soluciones ciudadanas que funcionan',
      objetivo:
        'Conocer el método de los Laboratorios de Innovación Ciudadana (LABIC) de la Secretaría General Iberoamericana, y reconocer cómo combina conocimiento experto con experiencia situada para generar soluciones reales junto a las comunidades.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'Desde 2014, la Secretaría General Iberoamericana (SEGIB) desarrolla los Laboratorios de Innovación Ciudadana (LABIC), un método para experimentar, colaborar y acelerar proyectos innovadores que surgen desde la ciudadanía y que tienen el potencial de transformarse en soluciones útiles a desafíos sociales, culturales, ambientales y económicos. Según el documento oficial que sistematiza el método, "en lugar de que las soluciones sean creadas por unos pocos expertos en instituciones, los LABIC transforman la ciudad en un laboratorio fértil y a la ciudadanía en creadora de respuestas innovadoras".',
        },
        {
          tipo: 'parrafo',
          texto:
            'El método se sostiene en cinco principios: conocimiento abierto (todo lo producido se documenta y comparte con acceso universal), soluciones asequibles (los prototipos son sencillos y económicos, pensados para ser replicados en cualquier contexto), experimentación (ensayo y error permanente, donde los errores son aprendizaje), colaboración (el trabajo conjunto entre personas e instituciones diversas, en un plano de horizontalidad) y cuidado de las personas (priorizar las necesidades de quienes participan).',
        },
        {
          tipo: 'parrafo',
          texto:
            'Un elemento central del método es la iteración con las comunidades: el prototipo se desarrolla con la comunidad, en su propio territorio, incorporando la retroalimentación de quienes finalmente van a usar la solución. Como señala el documento, "la producción de una solución es más pertinente cuando se involucra a la comunidad beneficiaria", porque quienes viven el problema aportan saberes que ningún equipo externo podría tener por sí solo.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Desde su creación, los LABIC han generado casi cien prototipos implementados en más de quince países de Iberoamérica, y han construido una comunidad de más de mil personas que intercambian conocimientos y experiencias. El propio documento destaca que esto transforma instituciones: cerca de cien organizaciones públicas, sociales y privadas que participaron incorporaron aprendizajes para fomentar una participación ciudadana más proactiva, fortaleciendo los lazos de confianza entre la administración y la ciudadanía.',
        },
      ],
      preguntaDetonadora:
        'Si tuvieras que resolver un problema concreto de tu escuela o tu barrio, ¿a quién convocarías primero: a un especialista externo, a quienes viven el problema todos los días, o a los dos juntos?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Problema, experto, experiencia situada" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, eligen un problema concreto de su escuela o su entorno. Identifican qué conocimiento experto haría falta para abordarlo, y qué conocimiento solo tienen quienes lo viven todos los días. Comparan ambas listas: ¿qué pasaría si se resolviera el problema con una sola de las dos?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestro mini-LABIC" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un problema real y acotado de su escuela o comunidad.',
                'Siguiendo la lógica del método LABIC, diseñan un prototipo simple de solución, incorporando tanto conocimiento experto (lo que investigan o ya saben) como experiencia situada (lo que aportan quienes viven el problema, incluidos ustedes mismos si corresponde).',
                'Aplican al menos dos de los cinco principios del método (por ejemplo, que la solución sea asequible y que incorpore la retroalimentación de la comunidad).',
                'Presentan su prototipo en formato breve, como en los LABIC reales.',
              ],
            },
          ],
        },
      ],
      frase: '"Las mejores soluciones no las inventa un experto para la comunidad: las construyen juntos."',
      glosario: ['Laboratorio ciudadano', 'Conocimiento experto', 'Experiencia situada', 'Prototipo', 'Iteración con comunidades'],
      referencias: ['Secretaría General Iberoamericana (SEGIB) (2022). Soluciones ciudadanas que funcionan: el método de los Laboratorios de Innovación Ciudadana.'],
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
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien que un grupo digital muy activo puede, sin que nadie se lo proponga, dejar afuera a buena parte de una comunidad?',
    placeholder: 'Tu respuesta…',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Comunidad y Organizaciones Sociales, en una tarjeta',
      parrafos: [
        'Conexión y comunidad no son equivalentes. Las comunidades construyen confianza, apoyo, conocimiento territorial y capacidad colectiva. Estas relaciones pueden actuar como capital social preventivo cuando facilitan verificación, ayuda y detección de problemas compartidos.',
        '**Laboratorios ciudadanos:** las organizaciones sociales amplían participación democrática mediante información, coordinación y acción colectiva. Combinar conocimiento experto con experiencia situada evita que las políticas sean diseñadas únicamente desde afuera del territorio.',
        '**Voces ausentes:** la participación necesita reconocer desigualdades internas. Un referente no representa automáticamente a todos. Diseñar inclusión exige canales, horarios y lenguajes que permitan intervenir también a quienes enfrentan mayores barreras.',
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
      'Comunidad y organizaciones sociales no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[COMUNIDAD_ORGANIZACIONES_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
