// Contenido base del grupo temático "Libres bajo influencia", adaptado de la
// conferencia de José Farhat "Libres bajo influencia" (guion completo, 29/07)
// dirigida a docentes. Las acotaciones de oratoria del guion original
// ("[Pausa...]", indicaciones de tono, control de tiempo) no se incluyen acá:
// son notas para quien da la charla, no contenido para quien lee. Lo que se
// conserva son las ideas, los autores citados, los casos y las frases de
// cierre de cada bloque.
//
// Es contenido de primera pasada, pensado para editarse subtema por subtema:
// la estructura tipada importa más que la prosa definitiva.

export interface LibresQuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
}

export interface LibresSection {
  heading: string
  paragraphs: string[]
  quote?: string
}

export interface LibresCaseStudy {
  label: string
  title: string
  description: string
}

// Nombre del ícono de lucide-react (se resuelve dentro del componente
// cliente). No se puede pasar el componente de ícono en sí como prop desde
// un page.tsx de servidor a un componente cliente — RSC no serializa funciones.
export type LibresIconName = 'Users' | 'ScanEye' | 'MousePointerClick' | 'Flame' | 'Compass' | 'Hexagon'

export interface LibresSubtopicContent {
  slug: string
  title: string
  category: string
  color: string
  iconName: LibresIconName
  description: string
  authors: string[]
  intro: string
  sections: LibresSection[]
  caseStudy?: LibresCaseStudy
  closingQuote: string
  quizQuestions: LibresQuizQuestion[]
  // Material adicional embebido en la página (PDF navegable + infografía con
  // zoom). Opcionales porque no todos los subtemas del grupo los tienen.
  pdfUrl?: string
  pdfLabel?: string
  infografiaUrl?: string
  infografiaAlt?: string
}

export const LIBRES_BAJO_INFLUENCIA_DATA: LibresSubtopicContent[] = [
  // =============================================
  // 1. Subculturas digitales
  // =============================================
  {
    slug: 'subculturas-digitales',
    title: 'Subculturas digitales',
    category: 'Comunidad digital',
    color: '#9333EA',
    iconName: 'Users',
    description:
      'Por qué lo digital funciona más como un territorio que como una herramienta, y cómo se forman ahí dentro comunidades con códigos, lenguaje y normas propias.',
    authors: ['danah boyd', 'Edward Deci y Richard Ryan', 'Henri Tajfel y John Turner', 'Robert Cialdini', 'Albert Bandura', 'Ross Haenfler', 'Dick Hebdige', 'Sarah Thornton'],
    intro:
      'Durante años dijimos que las personas "usan" la tecnología, como quien agarra un martillo, hace algo y lo deja. Pero hoy lo digital se parece menos a una herramienta y más a un territorio: un lugar donde se aprende, se juega, se compra, se discute, se construye reputación, se participa. La investigadora danah boyd estudió las redes como "públicos conectados" — espacios donde las tecnologías, las prácticas y las personas producen formas nuevas de encontrarse. Un conflicto que empezó anoche en un grupo de chat entra al aula el lunes a la mañana, entero, con toda su carga. Y también pasa lo contrario: una comunidad en línea puede sostener a un chico que la está pasando mal. No se acompañan dispositivos: se acompañan formas de habitar.',
    sections: [
      {
        heading: 'Qué necesidad encuentra ahí',
        paragraphs: [
          'Toda persona entra a un territorio buscando algo. Antes de preguntar cuántas horas pasa un chico conectado, conviene preguntarse qué encuentra ahí. Edward Deci y Richard Ryan lo explican con tres palabras: necesitamos autonomía, competencia y pertenencia — poder elegir, sentir que somos capaces de algo, y sentirnos parte. Una comunidad digital puede darle a un adolescente exactamente esas tres cosas: elegir, aprender algo, mostrarlo y que alguien lo reconozca.',
          'Por eso importa la pregunta: cuando le sacamos una plataforma a un chico sin entender qué necesidad le estaba resolviendo, la necesidad no desaparece, solo se va a buscar otra puerta — muchas veces peor.',
        ],
        quote: 'Antes de preguntar qué plataforma usa, preguntemos qué necesidad encuentra respuesta ahí.',
      },
      {
        heading: 'De comunidad a subcultura',
        paragraphs: [
          'Una comunidad reúne gente alrededor de un interés. Una subcultura digital hace algo más grande: crea códigos propios — lenguaje, símbolos, referentes, estéticas, rituales, normas y formas de reconocimiento. Henri Tajfel y John Turner mostraron que una parte de quiénes somos se construye con los grupos a los que pertenecemos: el grupo da cuidado y sentido, pero el mismo grupo puede empezar a marcar qué se puede decir, qué hay que celebrar y qué hay que rechazar para seguir siendo parte.',
          'Pertenecer no es el problema. Una subcultura puede ser creativa, educativa, incluso protectora. El riesgo aparece cuando una sola comunidad se queda con toda la identidad de la persona, o cuando convierte la diferencia en traición.',
        ],
        quote: 'Las subculturas digitales no solo reúnen personas: enseñan cómo mirar, cómo hablar y qué conductas reciben aplausos.',
      },
      {
        heading: 'Del estilo como resistencia a la subcultura acelerada',
        paragraphs: [
          'Esta idea de subcultura tiene una historia que vale la pena conocer, porque explica por qué hoy funciona distinto. En los años setenta, la escuela de Birmingham leyó las subculturas como formas de resistencia: Dick Hebdige mostró que el estilo — la ropa, la música, los gestos de los punks o los mods — no era un capricho, sino un lenguaje cargado de significado, una manera de disputar simbólicamente el orden establecido. Hebdige también describió un ciclo que hoy nos resulta muy familiar: tarde o temprano el mercado absorbe ese estilo, lo convierte en mercancía y lo desactiva. A eso lo llamó incorporación.',
          'Desde los noventa, otros investigadores matizaron esa lectura: las pertenencias contemporáneas son más fluidas y menos heroicas — se habla de tribus, de escenas, y de un capital subcultural, ese prestigio que se gana conociendo los códigos y estando al día dentro del grupo. Sarah Thornton agregó algo decisivo: los medios no se limitan a describir las subculturas desde afuera, también ayudan a constituirlas. En la era de las plataformas, esa idea se vuelve literal.',
          'Internet, según el investigador Ross Haenfler, cambió tres cosas: la presencia física se volvió opcional (democratiza el acceso, pero afloja el compromiso corporal que antes definía pertenecer); los espacios se homogeneizaron un poco (escenas de distintas ciudades del mundo empiezan a parecerse); y muchas subculturas actuales son reiteraciones de otras anteriores, aunque personas de orígenes diversos les aportan savia nueva. Y ahí es donde el algoritmo entra en escena: ya no es el mercado el que tarda años en incorporar un estilo underground, como describía Hebdige — el sistema de recomendación lo detecta, lo monetiza y lo agota en cuestión de meses. Las microtendencias "-core" que ya vimos con los VTubers son exactamente eso: subculturas aceleradas, que nacen, se viralizan y se extinguen en una temporada.',
        ],
        quote: 'El mercado siempre absorbió los estilos underground; lo que cambió es que hoy el algoritmo lo hace en meses, no en años.',
      },
      {
        heading: 'Normas que nunca están escritas',
        paragraphs: [
          '¿Cómo se aprenden esas normas, si casi nunca están escritas en ningún lado? Se aprenden mirando. Una publicación con miles de reproducciones y aprobaciones ya envía una señal antes de que nadie la analice: esto importa, esto gusta, esto pertenece. Robert Cialdini lo llamó prueba social — la tendencia a mirar a los demás cuando no sabemos bien qué pensar o hacer. Albert Bandura mostró que aprendemos observando modelos y observando qué les pasa a esos modelos.',
          'Las métricas, entonces, no solo cuentan la popularidad: también la fabrican. Lo repetido se vuelve familiar. Lo aprobado se vuelve deseable. Lo compartido, poco a poco, se vuelve normal.',
        ],
        quote: 'Las normas más influyentes casi nunca están escritas: están a la vista, en aquello que recibe atención.',
      },
      {
        heading: 'Autenticidad: quién pertenece de verdad',
        paragraphs: [
          'Si algo define a una subcultura es la autenticidad: la pregunta constante por quién pertenece de verdad y quién solo imita. Con el crecimiento de internet, más personas tienen la posibilidad de acercarse a una subcultura, y eso vuelve la pregunta más intensa, no menos. El sociólogo Patrick Williams estudió la subcultura straightedge — que rechaza el alcohol y otras drogas — y encontró que sus integrantes usan la música e internet para identificarse y defender su identidad; en un foro dedicado a ella, los participantes gestionan sus propias afiliaciones y cuestionan las de los demás. Internet apareció así como un espacio subcultural nuevo, pero disputado.',
          'Esto conecta con el capital subcultural: dentro del grupo, el estatus se gana demostrando que uno conoce los códigos, la historia, los referentes. Y ahí aparece una paradoja propia de lo digital: la misma apertura que permite que cualquiera se sume vuelve más difícil controlar quién es auténtico, y como ese control se vuelve difícil, se vuelve también más ruidoso. De ahí las discusiones interminables sobre quién es un miembro real y quién un impostor — tensiones que cualquier docente reconoce entre sus estudiantes.',
        ],
        quote: 'Cuanto más fácil es sumarse a una subcultura, más ruidosa se vuelve la pregunta de quién pertenece de verdad.',
      },
      {
        heading: 'El lenguaje como campo de batalla: Algospeak',
        paragraphs: [
          'Estas comunidades no solo comparten códigos visuales y rituales: también desarrollan su propio idioma, y ese idioma nace de una necesidad muy concreta. El "Algospeak" no es una jerga juvenil superficial ni una moda pasajera: es una adaptación estratégica frente a los sistemas de moderación automatizada. Cuando una plataforma usa el lenguaje como metadato para decidir qué visibiliza y qué suprime, hablar se convierte en una táctica de supervivencia. Adam Aleksic sostiene que los algoritmos de redes sociales funcionan hoy como motores de cambio lingüístico acelerado: antes, el habla cambiaba despacio, mediada por instituciones como la imprenta o la escuela; ahora cambia a la velocidad de lo que el sistema premia, y los usuarios terminan sacrificando precisión conceptual a cambio de que el contenido sea indexado.',
          'Esa lógica de evasión toma varias formas: eufemismos léxicos como "unalive" en vez de "suicidio" o "mascara" en vez de agresión sexual; manipulación grafémica como "seggs" o "k1ll" para esquivar el reconocimiento de texto; acronimia de trauma (ED, SA, SH) que permite hablar de salud mental sin activar filtros automáticos; e ideogramas usados como metáfora — un emoji de maíz en vez de la palabra pornografía, una sandía en vez de un tema político — para burlar el procesamiento de lenguaje del sistema.',
          'Lo más inquietante es que esta jerga de supervivencia empieza a filtrarse fuera de la pantalla. En museos de Seattle dedicados a la memoria de Kurt Cobain ya se documentó el uso de "unalive" o "desvivir" en vez de "suicidio" — un término clínico y preciso, reemplazado por una jerga diseñada para esquivar un filtro comercial, ahora instalada en un espacio de memoria histórica. Cuando el código de una plataforma termina moldeando cómo hablamos de la muerte en un museo, el problema dejó de ser solamente digital.',
        ],
        quote: 'El algospeak no es un capricho generacional: es la marca visible de que el lenguaje se está adaptando a lo que un sistema de moderación deja pasar.',
      },
      {
        heading: 'Cómo se estudian estas comunidades',
        paragraphs: [
          'Entender estas subculturas también exige elegir bien la herramienta de observación, porque no todas ven lo mismo. La netnografía que propone Robert Kozinets es una práctica cualitativa e inmersiva: entiende la red como un espacio de socialización diaria y requiere una sensibilidad humana capaz de leer el sarcasmo y la ironía, algo que el procesamiento automático todavía no logra con exactitud. La etnografía digital conecta la observación virtual con la física, reconociendo que la "co-presencia" mediada por pantallas es una forma legítima de vida social. El análisis de big data, en cambio, aporta escala pero pierde profundidad: procesa patrones masivos sin poder captar el relato humano detrás de cada interacción.',
          'En plataformas como Reddit, estas comunidades se organizan como "muñecas rusas": grupos grandes que contienen nichos cada vez más específicos, sostenidos por roles bien diferenciados — los moderadores que patrullan las fronteras del grupo, los prosumidores que lo dinamizan generando contenido, y los lurkers, oyentes pasivos que no publican pero representan el 80% de la audiencia y sostienen, con su sola presencia, la viabilidad del nicho.',
          'El fenómeno de los VTubers es un buen caso para desarmar estereotipos: contra la idea de que estos espacios son mayoritariamente masculinos, el 23% de las jugadoras consume este contenido frente al 14% de los varones, atraídas por entornos con menor sexualización y mayor cercanía con la estética kawaii. Proyectos de co-creación como Holocure muestran el mismo patrón que se ve en otras subculturas: comunidades que generan sus propias competencias (speedrunning), sus propias referencias y, con etiquetas como "Cottagecore" o "Goblincore", su propia forma de que las marcas terminen categorizando comercialmente esa identidad.',
        ],
        quote: 'Cada subcultura digital exige una forma distinta de mirarla: lo que la netnografía puede leer, el big data lo pierde, y viceversa.',
      },
      {
        heading: 'Qué significa esto para el aula',
        paragraphs: [
          'Conviene decirlo con todas las letras, para no caer en el alarmismo: la enorme mayoría de la pertenencia subcultural es creativa, afirmativa y protectora. Para muchos chicos — sobre todo para quienes cargan con un interés muy de nicho, una identidad minoritaria o una experiencia de exclusión — encontrar una comunidad en línea que los entienda puede ser una tabla de salvación. Al mismo tiempo, sería ingenuo ignorar que el mismo mecanismo — pertenencia, códigos compartidos, validación del grupo — puede canalizarse hacia comunidades tóxicas o directamente extremistas. La actitud útil no es la desconfianza general: es el discernimiento, distinguir la comunidad que sostiene de la que captura.',
          'De ahí se desprenden algunas orientaciones concretas. Comprender la pertenencia antes de juzgarla: cuando un estudiante se sumerge en una subcultura, casi siempre está resolviendo una necesidad genuina de autonomía, competencia o pertenencia. Leer los códigos como un ejercicio de alfabetización mediática: preguntar quién define los códigos de una comunidad, qué se valora en ella, cómo se aprenden sus normas. Usar la subcultura como puente pedagógico, aprovechando el capital de conocimiento que los estudiantes ya traen. Y mantener la mirada atenta sin patologizar: estar disponible para conversar, sin ridiculizar ni prohibir de entrada, y articular con otros adultos si aparecen señales de aislamiento o de captura por una comunidad dañina.',
        ],
        quote: 'Comprender la pertenencia, leer sus códigos, tender puentes y cuidar sin patologizar: ese es el arco completo para acompañar una subcultura digital.',
      },
    ],
    pdfUrl: '/img/tematicas/subculturas-digitales/presentacion.pdf',
    pdfLabel: 'Presentación — Subculturas digitales',
    infografiaUrl: '/img/tematicas/subculturas-digitales/infografia.webp',
    infografiaAlt: 'Infografía de Subculturas digitales',
    caseStudy: {
      label: 'Un caso para pensar',
      title: 'Sofía, catorce años',
      description:
        'Sofía busca un tutorial para dibujar rostros, encuentra a una creadora, aprende una técnica y descubre que hay toda una comunidad. Sube su primer dibujo. Alguien le escribe "tenés talento". Esa noche, Sofía vuelve. Hay ahí creatividad, aprendizaje, reconocimiento y pertenencia genuinos. Al mismo tiempo, mientras Sofía aprende los códigos del grupo — qué estilos se valoran, cómo se habla, qué recibe aplausos — la plataforma está aprendiendo sobre Sofía: qué mira hasta el final, qué guarda, qué repite y, sobre todo, qué la hace volver.',
    },
    closingQuote: 'La pertenencia es valiosa. Y justamente por eso puede convertirse en una puerta de entrada para la influencia.',
    quizQuestions: [
      { id: 1, question: '¿Por qué la charla propone pensar lo digital como "territorio" en vez de "herramienta"?', options: ['Porque las herramientas son peligrosas y los territorios no', 'Porque hoy se aprende, juega, compra, discute y construye reputación ahí adentro, no es algo que se usa y se deja', 'Porque el término "herramienta" ya no se usa en tecnología', 'Porque los territorios no generan datos y las herramientas sí'], correctIndex: 1 },
      { id: 2, question: 'Según Deci y Ryan, ¿qué tres necesidades puede satisfacer una comunidad digital?', options: ['Velocidad, diversión y anonimato', 'Autonomía, competencia y pertenencia', 'Seguridad, dinero y estatus', 'Privacidad, control y silencio'], correctIndex: 1 },
      { id: 3, question: '¿Qué pasa, según la charla, cuando le sacamos una plataforma a un chico sin entender qué necesidad le resolvía?', options: ['La necesidad desaparece junto con la plataforma', 'El chico deja de tener vida social', 'La necesidad sigue intacta y busca otra puerta, muchas veces peor', 'No pasa nada, porque las necesidades cambian solas'], correctIndex: 2 },
      { id: 4, question: '¿Qué diferencia a una subcultura digital de una simple comunidad?', options: ['La subcultura tiene más usuarios', 'La subcultura crea códigos propios: lenguaje, estética, rituales y normas de reconocimiento', 'La comunidad es gratuita y la subcultura no', 'No hay ninguna diferencia real'], correctIndex: 1 },
      { id: 5, question: 'Según Tajfel y Turner, ¿qué rol cumple el grupo en la identidad de una persona?', options: ['Ninguno; la identidad es completamente individual', 'Una parte de quiénes somos se construye con los grupos a los que pertenecemos', 'El grupo solo influye en gustos musicales', 'Los grupos digitales no afectan la identidad real'], correctIndex: 1 },
      { id: 6, question: '¿Cuál es, según la charla, el verdadero riesgo de pertenecer a una subcultura digital?', options: ['Pertenecer en sí mismo, que siempre es negativo', 'Que una sola comunidad se quede con toda la identidad de la persona o convierta la diferencia en traición', 'Que las subculturas nunca sean creativas', 'Que los adultos no puedan participar de ellas'], correctIndex: 1 },
      { id: 7, question: '¿Qué es la "prueba social" que describe Robert Cialdini?', options: ['Un examen que las plataformas piden para verificar identidad', 'La tendencia a mirar a los demás para decidir qué pensar o hacer cuando no lo sabemos', 'Un tipo de encuesta de mercado', 'La verificación de cuentas oficiales en redes sociales'], correctIndex: 1 },
      { id: 8, question: 'Según Bandura, ¿cómo aprendemos buena parte de las normas de un grupo digital?', options: ['Leyendo los términos y condiciones', 'Observando modelos y observando qué les pasa a esos modelos', 'Solo mediante ensayo y error propio', 'Las normas se aprenden únicamente en la escuela'], correctIndex: 1 },
      { id: 9, question: 'En el caso de Sofía, ¿qué está pasando "en paralelo" mientras ella aprende los códigos de la comunidad?', options: ['Nada, la plataforma es neutral', 'La plataforma está aprendiendo sobre ella: qué mira, qué guarda, qué repite y qué la hace volver', 'Sofía deja de dibujar por completo', 'La comunidad le exige pagar una membresía'], correctIndex: 1 },
      { id: 10, question: '¿Por qué dice la charla que "las métricas no solo cuentan la popularidad, también la fabrican"?', options: ['Porque los números de likes y vistas son siempre falsos', 'Porque lo repetido se vuelve familiar, lo aprobado deseable y lo compartido, normal — las métricas moldean lo que después se imita', 'Porque las plataformas prohíben mostrar métricas', 'Porque la popularidad no tiene relación con el contenido'], correctIndex: 1 },
    ],
  },

  // =============================================
  // 2. Algoritmos y perfilado
  // =============================================
  {
    slug: 'algoritmos-perfilado',
    title: 'Algoritmos y perfilado',
    category: 'Datos y algoritmos',
    color: '#2563EB',
    iconName: 'ScanEye',
    description:
      'Cómo cada gesto digital deja una señal, cómo esas señales se convierten en un perfil, y qué significa realmente que un sistema "nos conozca".',
    authors: ['Shoshana Zuboff', 'Daniel Solove', 'Michel Foucault', 'Eli Pariser'],
    intro:
      'Cuando pensamos en "datos personales" imaginamos el nombre, el domicilio, la fecha de nacimiento. Pero comunicamos muchísimo más con nuestras acciones: buscar, mirar, pausar, descartar, comentar, volver. Ninguno de esos gestos revela exactamente quiénes somos, pero juntos permiten encontrar regularidades. Shoshana Zuboff usa una expresión fuerte para describir esto: capitalismo de vigilancia — modelos de negocio que toman experiencias humanas y las transforman en datos, y esos datos en productos de predicción. Y esto conviene tenerlo claro, porque desactiva un poco el miedo: no hace falta imaginar una plataforma que lo sabe todo. Le alcanza con estimar qué es lo que probablemente va a captar nuestra atención. No adivina el alma. Calcula la probabilidad.',
    sections: [
      {
        heading: 'De la señal al perfil',
        paragraphs: [
          '¿Cómo se convierten esas señales sueltas en una versión probable de nosotros? Se acumulan, y aparecen las inferencias: probablemente le interesa este tema, suele conectarse a esta hora, capaz reacciona a este mensaje. Con esas inferencias se arma un perfil.',
          'Daniel Solove ayuda a ampliar la idea de privacidad: no es solamente guardar un secreto. También importa cómo se recoge la información, cómo se procesa, cómo se combina, cómo se difunde y para qué se usa. Y esto es lo más contraintuitivo: una ubicación aislada dice poco, pero una serie de ubicaciones puede revelar toda mi rutina — dónde vivo, dónde trabajo, a qué hora salgo, dónde está la escuela de mis hijos. No solo compartimos datos: compartimos contextos, rutinas y patrones.',
        ],
        quote: 'No adivinan quiénes somos: construyen una versión probable, y actúan sobre esa probabilidad.',
      },
      {
        heading: 'Clasificar nunca es neutral',
        paragraphs: [
          'Cuando esos patrones se vuelven categorías, aparece la clasificación. Para recomendarme algo, el sistema necesita volverme legible. Para segmentarme, necesita agruparme. Para priorizar, tiene que decidir qué me muestra primero y qué queda afuera. Michel Foucault mostró hace décadas que las clasificaciones nunca son neutrales: producen normas y producen efectos de poder. Clasificar puede ser útil — ordena contenidos, detecta fraudes — pero el problema aparece cuando la categoría es opaca, rígida, discriminatoria o imposible de discutir.',
          'La discriminación algorítmica más difícil de detectar no grita, no rechaza en la cara. A veces, simplemente, nunca nos muestra una beca, un empleo, una oportunidad. Y uno nunca se entera de lo que no vio.',
        ],
        quote: 'Una persona siempre es más compleja que la categoría que un sistema le asigna.',
      },
      {
        heading: 'La cara ambivalente de la personalización',
        paragraphs: [
          'Personalizar ayuda: reduce ruido, acerca cosas relevantes. Pero también simplifica, encierra y puede reforzar sesgos. Eli Pariser popularizó la idea de la "burbuja de filtros"; la evidencia posterior la volvió más matizada — no es solo el algoritmo, también intervienen nuestras propias elecciones, nuestros grupos y los incentivos comerciales.',
          'La pregunta, entonces, no es "toda personalización o ninguna". La pregunta es cuánto poder le queremos dar a un perfil para que decida qué podemos conocer, comprar, creer o descubrir.',
        ],
        quote: 'Cuando una etiqueta empieza a decidir por nosotros, la libertad se achica.',
      },
    ],
    caseStudy: {
      label: 'Un caso para pensar',
      title: 'Cambridge Analytica',
      description:
        'La distancia entre el gesto inicial —responder un cuestionario aparentemente inocente— y el uso final de esos datos fue enorme. La Comisión Federal de Comercio de Estados Unidos (FTC) concluyó que se usaron prácticas engañosas para obtener datos de decenas de millones de usuarios de Facebook con fines de perfilado y segmentación política. No toda recomendación es Cambridge Analytica —que te sugieran una serie no es una conspiración— pero el caso sirve para mostrar hasta dónde puede viajar un dato que la persona nunca imaginó ni entendió cuando dio el primer clic.',
    },
    closingQuote: 'No solo compartimos datos: compartimos contextos, rutinas y patrones.',
    quizQuestions: [
      { id: 1, question: 'Según la charla, ¿con qué comunicamos "muchísimo más" que con nuestros datos de nombre o domicilio?', options: ['Con nuestras fotos de perfil', 'Con nuestras acciones: buscar, mirar, pausar, descartar, comentar, volver', 'Con la marca de nuestro dispositivo', 'Con el idioma configurado en la app'], correctIndex: 1 },
      { id: 2, question: '¿Qué describe la expresión "capitalismo de vigilancia" de Shoshana Zuboff?', options: ['Un impuesto a las empresas tecnológicas', 'Modelos de negocio que transforman experiencias humanas en datos, y esos datos en productos de predicción', 'Un sistema de cámaras de seguridad urbanas', 'Una ley europea de privacidad'], correctIndex: 1 },
      { id: 3, question: 'Según la charla, ¿qué significa realmente que una plataforma "sepa" qué nos interesa?', options: ['Que lee literalmente nuestros pensamientos', 'Que estima, con datos, qué probablemente va a captar nuestra atención — calcula probabilidad, no adivina el alma', 'Que un empleado humano revisa cada cuenta', 'Que accede al micrófono del teléfono todo el tiempo'], correctIndex: 1 },
      { id: 4, question: '¿Qué aporta Daniel Solove a la idea de privacidad?', options: ['Que la privacidad es solo guardar un secreto', 'Que también importa cómo se recoge, procesa, combina y difunde la información, no solo si es secreta', 'Que la privacidad ya no existe en internet', 'Que la privacidad es un problema exclusivamente legal'], correctIndex: 1 },
      { id: 5, question: '¿Por qué dice la charla que "una serie de ubicaciones" es más reveladora que una ubicación aislada?', options: ['Porque cuestan más de almacenar', 'Porque en conjunto pueden revelar toda una rutina: dónde vivo, dónde trabajo, dónde está la escuela de mis hijos', 'Porque las plataformas las venden más caras', 'Porque solo las ubicaciones repetidas son datos reales'], correctIndex: 1 },
      { id: 6, question: '¿Qué mostró Michel Foucault sobre las clasificaciones?', options: ['Que siempre son neutrales y objetivas', 'Que nunca son neutrales: producen normas y efectos de poder', 'Que solo existen en contextos académicos', 'Que las clasificaciones desaparecieron con internet'], correctIndex: 1 },
      { id: 7, question: '¿Por qué la charla dice que la discriminación algorítmica "no grita"?', options: ['Porque siempre es ilegal y se oculta a propósito', 'Porque a veces simplemente nunca nos muestra una beca, un empleo o una oportunidad, y nunca nos enteramos de lo que no vimos', 'Porque los algoritmos no pueden discriminar', 'Porque solo ocurre en un país a la vez'], correctIndex: 1 },
      { id: 8, question: '¿Qué reveló el caso Cambridge Analytica según la FTC?', options: ['Que Facebook nunca recopiló datos de sus usuarios', 'Que se usaron prácticas engañosas para obtener datos de decenas de millones de usuarios con fines de perfilado político', 'Que los datos personales no tienen valor comercial', 'Que el caso fue una campaña de marketing autorizada'], correctIndex: 1 },
      { id: 9, question: '¿Qué plantea la idea de "burbuja de filtros" de Eli Pariser, según la versión matizada que menciona la charla?', options: ['Que es un mito sin ninguna base real', 'Que existe, pero no depende solo del algoritmo: también influyen nuestras elecciones, nuestros grupos y los incentivos comerciales', 'Que solo afecta a las redes sociales, no a los buscadores', 'Que desaparece automáticamente si borramos el historial'], correctIndex: 1 },
      { id: 10, question: 'Según la charla, ¿cuál es la pregunta correcta frente a la personalización?', options: ['Si hay que eliminarla por completo', 'Cuánto poder le queremos dar a un perfil para que decida qué podemos conocer, comprar, creer o descubrir', 'Si los algoritmos son legales en Argentina', 'Cuántos datos ocupa un perfil en el servidor'], correctIndex: 1 },
    ],
    pdfUrl: '/img/tematicas/algoritmos-perfilado/presentacion.pdf',
    pdfLabel: 'Presentación — Algoritmos y perfilado',
    infografiaUrl: '/img/tematicas/algoritmos-perfilado/infografia.webp',
    infografiaAlt: 'Infografía de Algoritmos y perfilado',
  },

  // =============================================
  // 3. Diseño persuasivo y patrones oscuros
  // =============================================
  {
    slug: 'diseno-persuasivo-patrones-oscuros',
    title: 'Diseño persuasivo y patrones oscuros',
    category: 'Diseño digital',
    color: '#DB2777',
    iconName: 'MousePointerClick',
    description:
      'Por qué la influencia digital rara vez llega como una orden, y dónde está la línea entre un diseño que ayuda y uno que manipula.',
    authors: ['BJ Fogg', 'Harry Brignull', 'Daniel Kahneman', 'Edward Deci y Richard Ryan'],
    intro:
      'La influencia digital rara vez llega como una orden. Casi nunca una plataforma nos dice "tenés que hacer esto". Funciona de otra manera, más suave: haciendo que una conducta sea más fácil, más visible y más oportuna. BJ Fogg estudió las tecnologías diseñadas para cambiar comportamientos y encontró una fórmula sencilla: cuando coinciden motivación, facilidad y un disparador en el momento justo, sube la probabilidad de que actuemos.',
    sections: [
      {
        heading: 'Ni bueno ni malo por sí mismo',
        paragraphs: [
          'Esto no es bueno ni malo por definición. Un recordatorio para tomar la medicación a horario apoya la autonomía: ayuda a hacer lo que uno ya quería hacer. Una notificación insistente, diseñada para recuperar la atención cuando ya la habíamos soltado, responde a otro interés que no es el nuestro. La técnica puede ser parecida; lo que cambia es la finalidad, la transparencia y si podemos decir que no.',
        ],
        quote: 'El diseño no siempre obliga: muchas veces, simplemente, hace una conducta más probable.',
      },
      {
        heading: 'Cuándo se pasa de la raya',
        paragraphs: [
          '¿Y cuándo esa orientación se pasa de la raya? Cuando oculta, cuando confunde, cuando hace difícil salir. Ahí aparecen los patrones oscuros. Harry Brignull les puso ese nombre a los diseños que llevan a la persona a hacer algo que no quería hacer. La FTC (la agencia de comercio de Estados Unidos) documentó un catálogo: anuncios disfrazados de contenido, costos que aparecen recién al final, opciones ya tildadas por defecto, laberintos para cancelar, mecanismos para sacar datos por confusión.',
        ],
        quote: 'Cuando entrar es fácil y salir cuesta un esfuerzo enorme, la arquitectura ya tomó partido.',
      },
      {
        heading: 'Por qué funcionan aunque los conozcamos',
        paragraphs: [
          '¿Por qué funcionan estos mecanismos incluso cuando ya los conocemos? Porque no le hablan a nuestra razón: le hablan a nuestras necesidades y emociones — la urgencia, la recompensa, la curiosidad, el cansancio, el miedo a quedar afuera. Daniel Kahneman mostró que bajo fatiga o presión recurrimos mucho más a las respuestas rápidas y automáticas. Y Deci y Ryan recuerdan que un entorno puede apoyar nuestra autonomía... o convertirla en control.',
          'Miren cómo aparece esto disfrazado: una cuenta regresiva no agrega ninguna información nueva, agrega presión. Una racha de días no solo muestra continuidad, agrega miedo a perder lo acumulado. Una notificación no solo informa, enciende la expectativa de que alguien nos reconoció.',
        ],
        quote: 'El problema no es tener emociones. El problema es no darnos cuenta cuándo un diseño fue construido alrededor de ellas.',
      },
    ],
    caseStudy: {
      label: 'Un caso con número',
      title: 'Epic Games / Fortnite',
      description:
        'La FTC sostuvo que el juego usó configuraciones que produjeron compras que las personas no querían hacer, muchas veces chicos, y ordenó 245 millones de dólares en reembolsos. El salto importa: un botón puede parecer una simple decisión de estética y diseño, pero para una familia ese mismo botón puede transformarse en una consecuencia económica muy concreta a fin de mes.',
    },
    closingQuote: 'Cuando entrar es fácil y salir cuesta un esfuerzo enorme, la arquitectura ya tomó partido.',
    quizQuestions: [
      { id: 1, question: 'Según BJ Fogg, ¿qué tres elementos aumentan la probabilidad de que actuemos frente a un estímulo digital?', options: ['Precio, velocidad y diseño', 'Motivación, facilidad y un disparador en el momento justo', 'Publicidad, algoritmo y notificación', 'Tiempo, dinero y atención'], correctIndex: 1 },
      { id: 2, question: '¿Cómo describe la charla la forma habitual en que llega la influencia digital?', options: ['Como una orden explícita que hay que obedecer', 'Haciendo que una conducta sea más fácil, más visible y más oportuna, sin dar una orden directa', 'Únicamente a través de publicidad paga', 'Como un mensaje de error del sistema'], correctIndex: 1 },
      { id: 3, question: '¿Qué diferencia, según la charla, a un recordatorio que apoya la autonomía de una notificación manipuladora, si la técnica puede ser parecida?', options: ['El color del botón', 'La finalidad, la transparencia y si la persona puede decir que no', 'El horario en que se envía', 'La cantidad de palabras del mensaje'], correctIndex: 1 },
      { id: 4, question: '¿Qué nombre le puso Harry Brignull a los diseños que llevan a alguien a hacer algo que no quería hacer?', options: ['Arquitectura de la elección', 'Patrones oscuros', 'Burbuja de filtros', 'Capitalismo de vigilancia'], correctIndex: 1 },
      { id: 5, question: '¿Cuál de estos NO forma parte del catálogo de patrones oscuros documentado por la FTC?', options: ['Opciones ya tildadas por defecto', 'Laberintos para cancelar una suscripción', 'Costos que aparecen recién al final de la compra', 'Un botón claro y visible para eliminar la cuenta en un solo paso'], correctIndex: 3 },
      { id: 6, question: 'Según Kahneman, ¿qué pasa con nuestras decisiones cuando estamos bajo fatiga o presión?', options: ['Nos volvemos más analíticos que nunca', 'Recurrimos mucho más a respuestas rápidas y automáticas', 'Dejamos de tomar decisiones por completo', 'Se activa automáticamente el modo ahorro de datos'], correctIndex: 1 },
      { id: 7, question: '¿Qué agrega una cuenta regresiva en una interfaz, según la charla?', options: ['Información nueva y relevante para decidir mejor', 'Presión, sin sumar ninguna información nueva', 'Seguridad en la transacción', 'Nada; es un elemento puramente decorativo'], correctIndex: 1 },
      { id: 8, question: '¿Qué ordenó la FTC en el caso Epic Games / Fortnite?', options: ['El cierre definitivo del juego', '245 millones de dólares en reembolsos por compras que las personas no querían hacer', 'Una disculpa pública sin consecuencias económicas', 'Prohibir el juego a menores de 18 años'], correctIndex: 1 },
      { id: 9, question: '¿Cuándo dice la charla que un diseño persuasivo "se pasa de la raya"?', options: ['Cuando usa colores llamativos', 'Cuando oculta, confunde o hace difícil salir', 'Cuando incluye una animación', 'Cuando pide confirmar el email'], correctIndex: 1 },
      { id: 10, question: 'Según la charla, ¿a qué le "hablan" los patrones oscuros para funcionar incluso cuando los conocemos?', options: ['A la razón y al análisis lógico', 'A nuestras necesidades y emociones: urgencia, recompensa, curiosidad, cansancio, miedo a quedar afuera', 'Únicamente al bolsillo', 'A la velocidad de conexión a internet'], correctIndex: 1 },
    ],
    pdfUrl: '/img/tematicas/diseno-persuasivo-patrones-oscuros/presentacion.pdf',
    pdfLabel: 'Presentación — Diseño persuasivo y patrones oscuros',
    infografiaUrl: '/img/tematicas/diseno-persuasivo-patrones-oscuros/infografia.webp',
    infografiaAlt: 'Infografía de Diseño persuasivo y patrones oscuros',
  },

  // =============================================
  // 4. Caldos de cultivo
  // =============================================
  {
    slug: 'caldos-de-cultivo',
    title: 'Caldos de cultivo',
    category: 'Desinformación',
    color: '#EA580C',
    iconName: 'Flame',
    description:
      'Cómo se combinan repetición, polarización y viralidad emocional hasta crear un ambiente donde la desinformación se propaga más rápido que la verdad — y por qué el objetivo casi nunca es imponer una mentira, sino fabricar la duda.',
    authors: [
      'Urie Bronfenbrenner',
      'Claire Wardle y Hossein Derakhshan',
      'Soroush Vosoughi, Deb Roy y Sinan Aral',
      'Miller McPherson, Lynn Smith-Lovin y James Cook',
      'Peter Wason',
      'Elisabeth Noelle-Neumann',
    ],
    intro:
      'Cuando ciertas dinámicas se repiten a gran escala, pueden cambiar el ambiente entero. Un caldo de cultivo no causa automáticamente una conducta — no es un botón que se aprieta y sale un resultado. Crea condiciones favorables para que algo crezca. Es la diferencia entre encender un fuego y dejar el pasto seco: el pasto seco no prende solo, pero hace que cualquier chispa sea peligrosa.',
    sections: [
      {
        heading: 'Los ingredientes del pasto seco',
        paragraphs: [
          '¿Qué ingredientes forman ese pasto seco? Repetición, polarización, viralidad emocional, cámaras de eco, desinformación. Cuando se combinan, se potencian. Urie Bronfenbrenner recuerda que la conducta surge de sistemas interrelacionados, nunca de una sola causa. Claire Wardle y Hossein Derakhshan, estudiando lo que llaman "desorden informativo", piden mirar tres cosas juntas: quién es el actor, cómo es el mensaje y cómo lo interpreta quien lo recibe.',
          'Con esta lente, la pregunta escolar cambia: deja de ser solamente "¿qué publicó este chico?" y pasa a ser también "¿qué ambiente premió, repitió y normalizó esa publicación?". Dos de esos ingredientes — las cámaras de eco y la polarización — merecen mirarse de cerca, porque suelen confundirse con otro fenómeno ya conocido y en realidad son otra cosa.',
        ],
        quote: 'Un caldo de cultivo no determina: facilita, recompensa, repite y amplifica.',
      },
      {
        heading: 'Cámaras de eco: por qué no es lo mismo que la burbuja de filtros',
        paragraphs: [
          'La burbuja de filtros que describe Eli Pariser es sobre todo un efecto del algoritmo: el sistema decide qué mostrar y qué no, y la persona queda encerrada sin haberlo elegido del todo. La cámara de eco es distinta, aunque las dos se retroalimenten: es ante todo un efecto social, construido por las relaciones que elegimos. Los sociólogos Miller McPherson, Lynn Smith-Lovin y James Cook describieron el principio de homofilia — la tendencia, muy anterior a internet, a vincularnos con quienes se nos parecen. Las plataformas no inventaron esa tendencia: la industrializaron, con sugerencias de amistad, de grupos y de contenidos que la vuelven todavía más eficiente.',
          'A la homofilia se le suma el sesgo de confirmación, ese hallazgo clásico de la psicología cognitiva que Peter Wason documentó ya en los años sesenta: buscamos y recordamos con más facilidad la información que confirma lo que ya creíamos, y descartamos con la misma facilidad la que lo contradice. Homofilia y sesgo de confirmación arman juntos el andamiaje de la cámara de eco: primero elegimos rodearnos de los parecidos, después el propio grupo confirma lo que ya pensábamos, y el algoritmo — atento a qué genera interacción — termina de cerrar el círculo.',
        ],
        quote: 'La burbuja de filtros la arma el algoritmo. La cámara de eco la armamos, en gran parte, nosotros — y el algoritmo la vuelve más eficiente.',
      },
      {
        heading: 'El miedo a quedar afuera: la espiral del silencio',
        paragraphs: [
          'Dentro de esa cámara pasa algo más, que la politóloga Elisabeth Noelle-Neumann describió mucho antes de que existieran las redes sociales: cuando alguien percibe que su opinión es minoritaria, tiende a callarla por miedo al aislamiento social. Es la espiral del silencio. En los grupos digitales ese mecanismo se acelera, porque las métricas hacen visible, en tiempo real, qué opinión predomina, y el costo de disentir se vuelve público e inmediato, no un cálculo abstracto para más adelante.',
          'El resultado es una ilusión de consenso: no es que todos piensen igual, sino que quienes piensan distinto se van quedando callados, uno por uno, hasta que la opinión que queda visible parece más unánime de lo que realmente es. Para un aula, esto tiene una consecuencia directa: el silencio de un estudiante frente a un tema polémico no siempre es indiferencia — a veces es el costo social de disentir, ya calculado de antemano.',
        ],
        quote: 'No es que todos piensen igual: es que quienes piensan distinto se quedan, uno por uno, en silencio.',
      },
      {
        heading: 'Cultura y algoritmo se retroalimentan',
        paragraphs: [
          'La cultura propone códigos. El grupo los valida. El algoritmo observa la interacción. La recomendación amplifica. Y la repetición, con el tiempo, normaliza. Una publicación intensa recibe más reacciones; el sistema detecta esa actividad y le sube la visibilidad; el grupo lee esa visibilidad como reconocimiento; y entonces la siguiente publicación sube un poco más el tono. No hay un villano en el medio: el algoritmo solo no crea la cultura, y la cultura sola no actúa. Pero juntos —homofilia, sesgo de confirmación, espiral del silencio y recomendación algorítmica— pueden formar un circuito que se retroalimenta.',
        ],
        quote: 'El algoritmo aprende de la cultura, y la cultura aprende de aquello que el algoritmo premia.',
      },
      {
        heading: 'Fabricar la duda, no solo la mentira',
        paragraphs: [
          'Wardle y Derakhshan proponen no hablar de un único fenómeno sino de un espectro de desórdenes informativos, distinguibles con dos preguntas: ¿el contenido es falso? y ¿quien lo comparte sabe que lo es? De ahí surgen tres categorías distintas: la desinformación (falsa, y compartida a sabiendas, con intención de dañar), la información errónea (falsa, pero compartida por alguien que cree que es cierta) y la información maliciosa (genuina, pero sacada de contexto o difundida para hacer daño — una foto real, un dato real, publicado con otro fin). Distinguirlas importa en el aula: no todo lo que circula como falso es mentira deliberada, y tratar igual a quien se equivocó y a quien manipuló a propósito borra una diferencia ética central.',
          'Pero el objetivo último de la desinformación contemporánea rara vez es imponer una mentira puntual y que todo el mundo se la crea. Es más ambicioso, y más dañino: fabricar la duda. No se trata de convencer de que A es falso y B es verdadero, sino de erosionar la confianza en que exista siquiera una diferencia entre ambos — en que la verdad sea algo alcanzable. Explotando la indignación y la viralidad emocional, se instala una duda metódica que no aclara nada, pero paraliza el juicio crítico de quien la recibe.',
          'Una consecuencia concreta de esa duda fabricada, y particularmente alarmante para el aula, es el autodiagnóstico erróneo en salud mental: chicos y chicas que, inmersos en comunidades que desconfían sistemáticamente de la experiencia médica, adoptan etiquetas psicológicas a partir de contenido no verificado y, por confiar más en esa comunidad que en un profesional, retrasan o directamente evitan pedir la ayuda real que necesitan. La duda, fabricada en un video de treinta segundos, termina reemplazando a un diagnóstico clínico.',
        ],
        quote: 'La desinformación contemporánea no siempre busca imponer una mentira: muchas veces le alcanza con fabricar la duda.',
      },
      {
        heading: 'La velocidad de la mentira',
        paragraphs: [
          'Ese circuito se vuelve dramáticamente visible en la difusión misma de la desinformación. Soroush Vosoughi, Deb Roy y Sinan Aral analizaron una enorme cantidad de mensajes en Twitter y encontraron algo incómodo: las noticias falsas se difundían más lejos, más rápido y más ampliamente que las verdaderas. Y lo más impactante: no eran principalmente los bots. Éramos las personas compartiendo más rápido la mentira.',
          'Detrás de esta dinámica —de datos, perfiles, algoritmos e interfaces— hay siempre personas. Nadie puede ser reducido a un dato, a un perfil, a una probabilidad. El Comité de los Derechos del Niño, en su Observación General N.º 25, es claro: los derechos de niñas, niños y adolescentes deben respetarse también en el entorno digital. No hay un modo digital de los derechos humanos y otro modo real: es uno solo.',
        ],
        quote: 'Una falsedad repetida no se vuelve verdadera. Pero puede volverse familiar, y socialmente eficaz.',
      },
    ],
    caseStudy: {
      label: 'Un caso a escala del aula',
      title: 'El rumor escolar',
      description:
        'Un rumor sigue exactamente la misma cadena que la desinformación a gran escala: alguien captura algo, alguien lo interpreta, se reenvía, se comenta, se expone... y hay daño. Cuando por fin llega la aclaración, la reputación de ese chico o esa chica ya quedó afectada. La verdad llega tarde y en voz baja; la mentira llegó temprano y a los gritos.',
    },
    closingQuote: 'Detrás de cada dato hay una persona; detrás de cada perfil, una historia; detrás de cada decisión automatizada, puede haber un derecho.',
    quizQuestions: [
      { id: 1, question: '¿Qué significa, según la charla, que algo sea un "caldo de cultivo"?', options: ['Que causa automáticamente una conducta específica', 'Que crea condiciones favorables para que algo crezca, sin determinar el resultado por sí solo', 'Que es imposible de analizar', 'Que solo ocurre en redes sociales de video'], correctIndex: 1 },
      { id: 2, question: '¿Cuáles son, según la charla, los ingredientes que forman ese "pasto seco"?', options: ['Publicidad, precios y suscripciones', 'Repetición, polarización, viralidad emocional, cámaras de eco y desinformación', 'Contraseñas débiles y falta de antivirus', 'Ancho de banda y velocidad de carga'], correctIndex: 1 },
      { id: 3, question: 'Según Wardle y Derakhshan, ¿qué tres cosas hay que mirar juntas para entender el "desorden informativo"?', options: ['El precio, la fecha y el idioma del mensaje', 'Quién es el actor, cómo es el mensaje y cómo lo interpreta quien lo recibe', 'El país de origen, el formato y la duración', 'El número de seguidores, de comentarios y de compartidos'], correctIndex: 1 },
      { id: 4, question: '¿En qué se diferencia la cámara de eco de la burbuja de filtros, según la charla?', options: ['Son exactamente el mismo fenómeno con otro nombre', 'La burbuja la arma sobre todo el algoritmo; la cámara de eco la arman sobre todo las relaciones que elegimos (homofilia y sesgo de confirmación), y el algoritmo la vuelve más eficiente', 'La cámara de eco solo existe fuera de las redes sociales', 'La burbuja de filtros depende de la opinión de los demás, y la cámara de eco no'], correctIndex: 1 },
      { id: 5, question: 'Según la espiral del silencio de Elisabeth Noelle-Neumann, ¿qué tiende a hacer alguien que percibe que su opinión es minoritaria?', options: ['Expresarla con más fuerza para hacerse notar', 'Callarla, por miedo al aislamiento social', 'Cambiar de plataforma inmediatamente', 'Denunciarla ante los moderadores'], correctIndex: 1 },
      { id: 6, question: 'En el circuito que describe la charla entre cultura y algoritmo, ¿qué hace el algoritmo cuando una publicación intensa recibe más reacciones?', options: ['La oculta automáticamente', 'Detecta esa actividad y le sube la visibilidad', 'La elimina por seguridad', 'No tiene ningún efecto sobre la visibilidad'], correctIndex: 1 },
      { id: 7, question: 'Según Wardle y Derakhshan, ¿qué distingue a la "información maliciosa" de la desinformación y la información errónea?', options: ['Es siempre falsa, igual que las otras dos', 'Es contenido genuino, real, pero sacado de contexto o difundido con intención de hacer daño', 'Es la única categoría que puede compartirse sin querer', 'No existe esa tercera categoría en su modelo'], correctIndex: 1 },
      { id: 8, question: 'Según la charla, ¿cuál es el verdadero objetivo de buena parte de la desinformación contemporánea?', options: ['Convencer a todo el mundo de una mentira puntual', 'Fabricar la duda: erosionar la confianza en que la verdad sea siquiera algo alcanzable', 'Mejorar el posicionamiento de una marca', 'Reemplazar completamente a los medios tradicionales'], correctIndex: 1 },
      { id: 9, question: '¿Qué encontraron Vosoughi, Roy y Aral al estudiar la difusión de noticias falsas en Twitter, y quiénes eran los principales responsables?', options: ['Que se difundían más lento que las verdaderas, y que eran los bots', 'Que se difundían más lejos, más rápido y más ampliamente que las verdaderas, y que eran principalmente las personas, no los bots', 'Que no había diferencia de velocidad entre noticias falsas y verdaderas', 'Que solo los medios de comunicación las difundían'], correctIndex: 1 },
      { id: 10, question: 'Según la charla, ¿qué consecuencia concreta puede tener la "duda fabricada" en la vida de un adolescente?', options: ['Ninguna; es un fenómeno solo discursivo', 'Un autodiagnóstico erróneo en salud mental, adoptado de una comunidad no verificada, que retrasa pedir ayuda profesional real', 'Una mejora en el pensamiento crítico', 'Un aumento directo del rendimiento escolar'], correctIndex: 1 },
    ],
    pdfUrl: '/img/tematicas/caldos-de-cultivo/presentacion.pdf',
    pdfLabel: 'Presentación — Caldos de cultivo',
    infografiaUrl: '/img/tematicas/caldos-de-cultivo/infografia.webp',
    infografiaAlt: 'Infografía de Caldos de cultivo',
  },

  // =============================================
  // 5. Recuperar la agencia
  // =============================================
  {
    slug: 'recuperar-la-agencia',
    title: 'Recuperar la agencia',
    category: 'Autonomía',
    color: '#059669',
    iconName: 'Compass',
    description:
      'Reconocer todo lo anterior no significa negar nuestra capacidad de actuar: significa fortalecerla. Herramientas concretas para decidir con más conciencia, en casa y en la escuela.',
    authors: ['Albert Bandura', 'Mike Caulfield', 'Sonia Livingstone', 'UNESCO'],
    intro:
      'Reconocer cómo funciona el entorno digital no significa negar nuestra capacidad de actuar: al revés, la fortalece. Albert Bandura define la agencia como la capacidad de actuar con intención, de anticipar consecuencias, de autorregularnos y de reflexionar sobre lo que hacemos. Recuperar la agencia no es controlar todo — eso no existe, siempre estuvimos bajo alguna influencia, incluso antes de internet. Es algo más humilde y más poderoso: reconocer las condiciones en las que elegimos, imaginar que hay alternativas, y decidir con un poco más de conciencia.',
    sections: [
      {
        heading: 'Pausar, preguntar, elegir',
        paragraphs: [
          '¿Cómo se entrena esa capacidad, justo en el momento del impulso, que es el momento difícil? Con una secuencia de tres verbos: pausar, preguntar, elegir. Pausar crea una distancia mínima entre el estímulo y la respuesta. Preguntar convierte una reacción automática en una evaluación. Y elegir devuelve el protagonismo. Dejar el teléfono treinta segundos antes de responder algo que da bronca parece una nimiedad, pero cambia por completo la situación.',
          'Cinco preguntas simples pueden acompañar esa pausa, para adultos y para chicos: ¿por qué me aparece esto justo a mí? ¿Qué quiere que yo haga? ¿Qué emoción me está tocando? ¿Qué dato estoy entregando? ¿Qué otra opción tengo?',
        ],
        quote: 'La agencia no es controlar todo: es poder decidir mejor.',
      },
      {
        heading: 'Leer hacia los costados',
        paragraphs: [
          'Para lo que leemos, Mike Caulfield propone algo muy práctico llamado lectura lateral: en vez de quedarse dentro de una página tratando de decidir si es confiable mirándola por dentro, salir de ella — abrir otra pestaña, buscar quién publica eso, contrastar, rastrear hasta la fuente original. Los verificadores profesionales no leen hacia abajo: leen hacia los costados. Preguntar, en este sentido, no es desconfiar de todo ni volverse cínico: es aprender a confiar con razones.',
          'Algunas prácticas concretas ayudan a sostener esto en el tiempo: revisar los permisos que dimos, ordenar las notificaciones, crear pausas reales, diversificar las fuentes, conversar antes de reaccionar.',
        ],
        quote: 'Preguntar también es una forma de cuidado. Y es ciudadanía digital.',
      },
      {
        heading: 'Acompañar no es vigilar',
        paragraphs: [
          'Sonia Livingstone estudió en profundidad la mediación de los adultos y muestra el enorme valor de la conversación activa. La vigilancia puede detectar algo puntual, un problema de hoy. El acompañamiento construye criterio, que sirve para toda la vida. Va a haber situaciones que exijan bloquear o restringir, y está bien — pero si todo se reduce a control, la autonomía nunca llega a desarrollarse. Un chico vigilado hasta los diecisiete no aprende a decidir: aprende a esconderse.',
          'La escuela puede tomar experiencias dispersas —que hoy pasan afuera, sin que nadie las nombre— y transformarlas en conocimiento compartido. La UNESCO define la alfabetización mediática e informacional justamente así: las capacidades para acceder, analizar, evaluar, crear y actuar críticamente. El objetivo no es que los chicos memoricen definiciones, sino que puedan decir con sus palabras: "esta interfaz me está apurando", "esta fuente no me alcanza", "acá necesito pedir ayuda".',
        ],
        quote: 'Acompañar no es vigilar: es enseñar a decidir mejor.',
      },
    ],
    closingQuote: 'La autonomía se construye con tres cosas juntas: límites, sentido y comunidad.',
    quizQuestions: [
      { id: 1, question: 'Según Albert Bandura, ¿qué es la agencia?', options: ['La capacidad de controlar completamente el entorno digital', 'La capacidad de actuar con intención, anticipar consecuencias, autorregularse y reflexionar sobre lo que hacemos', 'Un algoritmo que mide el comportamiento del usuario', 'La cantidad de tiempo que alguien pasa conectado'], correctIndex: 1 },
      { id: 2, question: '¿Qué significa "recuperar la agencia" según la charla?', options: ['Eliminar toda influencia externa, algo que no existe', 'Reconocer las condiciones en las que elegimos, imaginar alternativas y decidir con más conciencia', 'Dejar de usar dispositivos digitales por completo', 'Delegar todas las decisiones en un adulto responsable'], correctIndex: 1 },
      { id: 3, question: '¿Cuáles son los tres verbos que propone la charla para actuar en el momento del impulso?', options: ['Bloquear, denunciar, ignorar', 'Pausar, preguntar, elegir', 'Compartir, comentar, reaccionar', 'Aceptar, confirmar, continuar'], correctIndex: 1 },
      { id: 4, question: '¿Qué logra concretamente la "pausa" antes de reaccionar a un mensaje, según la charla?', options: ['Elimina por completo la emoción', 'Crea una distancia mínima entre el estímulo y la respuesta, que cambia la situación', 'Bloquea automáticamente al remitente', 'No tiene ningún efecto real'], correctIndex: 1 },
      { id: 5, question: '¿En qué consiste la "lectura lateral" que propone Mike Caulfield?', options: ['Leer un artículo varias veces de corrido', 'Salir de la página, abrir otra pestaña, contrastar y rastrear la fuente original en vez de juzgar el contenido solo por dentro', 'Leer solo el titular y las primeras dos líneas', 'Compartir el artículo para que otros lo verifiquen'], correctIndex: 1 },
      { id: 6, question: 'Según la charla, ¿qué hacen los verificadores profesionales de información?', options: ['Leen "hacia abajo", profundizando en el mismo artículo', 'Leen "hacia los costados": salen del artículo para contrastar fuentes', 'Confían siempre en la primera fuente que encuentran', 'Solo verifican noticias de medios internacionales'], correctIndex: 1 },
      { id: 7, question: 'Según Sonia Livingstone, ¿cuál es la diferencia entre vigilancia y acompañamiento adulto?', options: ['Son exactamente lo mismo con distinto nombre', 'La vigilancia detecta un problema puntual; el acompañamiento construye criterio que sirve para toda la vida', 'La vigilancia es siempre mejor que el acompañamiento', 'El acompañamiento reemplaza cualquier necesidad de límites'], correctIndex: 1 },
      { id: 8, question: '¿Qué le pasa, según la charla, a "un chico vigilado hasta los diecisiete"?', options: ['Aprende a decidir mejor que el resto', 'No aprende a decidir; aprende a esconderse', 'Desarrolla mayor autonomía que sus pares', 'No hay ninguna consecuencia identificable'], correctIndex: 1 },
      { id: 9, question: '¿Cómo define la UNESCO la alfabetización mediática e informacional, según la charla?', options: ['Como la habilidad de programar aplicaciones', 'Como las capacidades para acceder, analizar, evaluar, crear y actuar críticamente frente a la información', 'Como el uso correcto de la ortografía en redes sociales', 'Como memorizar las políticas de privacidad de cada plataforma'], correctIndex: 1 },
      { id: 10, question: 'Según la charla, ¿cuál es el verdadero objetivo educativo, más allá de que un chico memorice definiciones?', options: ['Que apruebe un examen sobre tecnología', 'Que pueda decir con sus propias palabras cosas como "esta interfaz me está apurando" o "acá necesito pedir ayuda"', 'Que deje de usar redes sociales', 'Que use exclusivamente fuentes académicas'], correctIndex: 1 },
    ],
    pdfUrl: '/img/tematicas/recuperar-la-agencia/presentacion.pdf',
    pdfLabel: 'Presentación — Recuperar la agencia',
    infografiaUrl: '/img/tematicas/recuperar-la-agencia/infografia.webp',
    infografiaAlt: 'Infografía de Recuperar la agencia',
  },

  // =============================================
  // 6. Ciudadanía digital (el poliedro)
  // =============================================
  {
    slug: 'poliedro-ciudadania-digital',
    title: 'Ciudadanía digital: el poliedro',
    category: 'Ciudadanía digital',
    color: '#0EA5E9',
    iconName: 'Hexagon',
    description:
      'La tesis de toda la charla: formar ciudadanía digital, no solamente usuarios. Un poliedro de ocho caras y la respuesta final a la paradoja del título.',
    authors: ['John Dewey', 'UNESCO', 'David Buckingham', 'Emmanuel Levinas', 'Jürgen Habermas', 'Amartya Sen'],
    intro:
      'Después de recorrer subculturas, algoritmos, diseño persuasivo y caldos de cultivo, aparece una tentación comprensible: prohibir, bloquear, retirarse. Pero el territorio digital ya forma parte de la educación, del trabajo, de los vínculos, de la participación política — ya no es un lugar al que uno entra y sale. John Dewey entendía la educación como experiencia presente: no se puede educar para una vida futura ignorando la vida que ya está pasando hoy. Los límites son necesarios en ciertas situaciones, pero un límite nunca reemplaza a la formación. Prohibir es fácil y rápido; formar es lento, y es lo nuestro.',
    sections: [
      {
        heading: 'Ser ciudadano digital',
        paragraphs: [
          'Detrás de cada pantalla sigue habiendo una persona con derechos, con responsabilidades, con emociones, con capacidad de decidir y de participar. Ser ciudadano digital no es solamente saber usar la tecnología: es comprender el entorno, decidir con autonomía, convivir con otros, cuidar y participar en transformar ese entorno. La UNESCO enlaza todo esto: ciudadanía digital, alfabetización mediática, ética, participación y pensamiento crítico.',
        ],
        quote: 'No necesitamos solamente mejores usuarios. Necesitamos mejores ciudadanos en un mundo digital.',
      },
      {
        heading: 'Un poliedro de ocho caras',
        paragraphs: [
          'Para ordenar la estrategia, la charla propone la imagen de un poliedro: un cuerpo con muchas caras, porque el problema tiene muchas caras y la respuesta también. Las caras son: alfabetización digital, mediática e informacional; identidad y huella; privacidad y seguridad; derechos y responsabilidades; convivencia y cultura de paz; participación y democracia; consumo y economía digital; e inteligencia artificial y algoritmos. Ninguna cara alcanza por sí sola — una contraseña fortísima no impide compartir una mentira, y saber programar no garantiza reconocer un sesgo.',
        ],
        quote: 'El problema es complejo. La respuesta, también, tiene que ser integral.',
      },
      {
        heading: 'Algunas caras, de cerca',
        paragraphs: [
          'Leer el territorio digital: David Buckingham advierte que la educación mediática no puede reducirse a enseñar a usar el aparato. Tiene que preguntar quién produce esto, cómo lo representa, qué intereses hay detrás. La pregunta pasa de "¿qué estoy viendo?" a "¿por qué estoy viendo esto, qué quedó afuera, y qué buscan de mí?".',
          'Identidad y privacidad: la identidad no es una ficha que se completa una vez, es una historia en construcción. Proteger la identidad es también defender el derecho a cambiar, a no quedar encerrados en una categoría que un sistema armó en un momento particular de la vida.',
          'Derechos, responsabilidades y convivencia: internet no suspendió los derechos humanos ni las responsabilidades. Emmanuel Levinas ponía la responsabilidad ante el otro en el centro de la ética — en una pantalla, el rostro del otro puede desaparecer, pero su vulnerabilidad no. Buena parte del daño digital nace justo ahí, en que dejamos de ver el rostro.',
          'De audiencia a ciudadanía: el territorio digital también es espacio público. Jürgen Habermas pensó el espacio público como un ámbito donde se forma opinión a través de razones. Las plataformas amplían voces, pero también aceleran, fragmentan y reparten la visibilidad de manera despareja. Una democracia digital necesita ciudadanos, no solamente audiencias.',
          'Comprender la inteligencia que organiza lo que vemos: cada vez más decisiones pasan por sistemas que seleccionan, clasifican, recomiendan, predicen y generan. Las preguntas ciudadanas frente a esos sistemas son concretas: ¿quién lo diseñó?, ¿con qué datos funciona?, ¿qué prioriza?, ¿qué deja afuera?, ¿se puede equivocar?, ¿qué sesgos reproduce?',
        ],
        quote: 'Cuanto más inteligentes sean las tecnologías, más necesitamos fortalecer el juicio humano.',
      },
      {
        heading: 'Formar para la libertad',
        paragraphs: [
          'Amartya Sen enseñó a entender la libertad de un modo que lo cambia todo: la libertad son las capacidades reales para hacer y para ser. No alcanza con que una opción exista en el papel — para ser realmente libre hacen falta conocimientos, derechos, apoyos y posibilidades efectivas de actuar. Eso es exactamente lo que hace una escuela: la escuela reparte capacidades, la escuela reparte libertad.',
          'Las plataformas influyen, pero no determinan del todo. Los algoritmos organizan, pero se pueden interrogar. Los diseños empujan, pero se puede uno detener. Las culturas influyen, pero también se pueden transformar. Formar ciudadanía digital es formar personas capaces de comprender, elegir, convivir, cuidar, participar y transformar.',
        ],
      },
    ],
    closingQuote: 'No se trata de vivir libres de toda influencia. Se trata de aprender a ser libres bajo influencia.',
    quizQuestions: [
      { id: 1, question: 'Según John Dewey, citado en la charla, ¿por qué no alcanza con prohibir o bloquear el mundo digital?', options: ['Porque prohibir siempre es ilegal', 'Porque la educación es experiencia presente: no se puede educar para el futuro ignorando la vida que ya está pasando hoy', 'Porque las prohibiciones nunca funcionan en ningún ámbito', 'Porque los chicos no respetan ninguna regla'], correctIndex: 1 },
      { id: 2, question: 'Según la charla, ¿qué es ser ciudadano digital, más allá de saber usar la tecnología?', options: ['Tener muchos seguidores en redes sociales', 'Comprender el entorno, decidir con autonomía, convivir, cuidar y participar en transformar ese entorno', 'Saber programar y usar todas las aplicaciones', 'No usar nunca redes sociales'], correctIndex: 1 },
      { id: 3, question: '¿Por qué la charla usa la imagen de un "poliedro" para pensar la ciudadanía digital?', options: ['Porque es una figura geométrica de moda', 'Porque el problema tiene muchas caras (alfabetización, identidad, privacidad, derechos, convivencia, participación, consumo, IA) y ninguna alcanza por sí sola', 'Porque cada cara representa una red social distinta', 'Porque simplifica todo a una sola solución'], correctIndex: 1 },
      { id: 4, question: 'Según David Buckingham, ¿a qué pregunta debería pasar "¿qué estoy viendo?" al leer el entorno digital?', options: ['"¿Cuánto tiempo llevo conectado?"', '"¿Por qué estoy viendo esto, qué quedó afuera, y qué buscan de mí?"', '"¿Qué dice el manual de uso?"', '"¿Cuántos likes tiene esta publicación?"'], correctIndex: 1 },
      { id: 5, question: 'Según Emmanuel Levinas, citado en la charla, ¿qué desaparece en una pantalla y qué no?', options: ['Desaparecen los datos personales, pero no la identidad', 'Puede desaparecer el rostro del otro, pero no su vulnerabilidad', 'Desaparece la privacidad, pero no la seguridad', 'No desaparece nada en absoluto'], correctIndex: 1 },
      { id: 6, question: 'Según Jürgen Habermas, ¿qué es el espacio público?', options: ['Un lugar físico específico como una plaza', 'Un ámbito donde se forma opinión a través de razones y argumentos', 'Una red social en particular', 'Un espacio donde no hay reglas'], correctIndex: 1 },
      { id: 7, question: '¿Qué diferencia marca la charla entre "audiencia" y "ciudadanía" en el espacio digital?', options: ['Son sinónimos exactos', 'Una audiencia solo consume y observa; la ciudadanía piensa críticamente, contrasta, participa y crea', 'La audiencia tiene más derechos que la ciudadanía', 'La ciudadanía digital no existe realmente'], correctIndex: 1 },
      { id: 8, question: 'Frente a los sistemas de inteligencia artificial que organizan lo que vemos, ¿qué pregunta ciudadana propone la charla?', options: ['¿Cuánto cuesta la suscripción?', '¿Quién lo diseñó, con qué datos funciona, qué prioriza, qué deja afuera y qué sesgos reproduce?', '¿Qué lenguaje de programación usa?', '¿Cuántos usuarios tiene la plataforma?'], correctIndex: 1 },
      { id: 9, question: 'Según Amartya Sen, ¿qué es realmente la libertad?', options: ['Que una opción exista en el papel, aunque no pueda ejercerse', 'Las capacidades reales para hacer y para ser: conocimientos, derechos, apoyos y posibilidades efectivas de actuar', 'La ausencia total de reglas', 'Tener acceso ilimitado a internet'], correctIndex: 1 },
      { id: 10, question: '¿Cuál es la frase de cierre que resume la tesis de toda la charla "Libres bajo influencia"?', options: ['"Hay que desconectarse por completo para ser libres"', '"No se trata de vivir libres de toda influencia. Se trata de aprender a ser libres bajo influencia"', '"La tecnología es neutral y no influye en nadie"', '"Solo los adultos pueden ser verdaderamente libres en internet"'], correctIndex: 1 },
    ],
    pdfUrl: '/img/tematicas/poliedro-ciudadania-digital/presentacion.pdf',
    pdfLabel: 'Presentación — Ciudadanía digital: el poliedro',
    infografiaUrl: '/img/tematicas/poliedro-ciudadania-digital/infografia.webp',
    infografiaAlt: 'Infografía de Ciudadanía digital: el poliedro',
  },
]

export function getLibresSubtopicBySlug(slug: string): LibresSubtopicContent | undefined {
  return LIBRES_BAJO_INFLUENCIA_DATA.find((s) => s.slug === slug)
}
