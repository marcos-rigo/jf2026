# Auditoría de contenido — Subculturas Digitales

Base para rediseño. Recorrido completo de la entrada `subculturas-digitales` en `lib/libres-bajo-influencia-data.ts` (líneas 85-213 de 629 totales — el archivo comparte estructura entre las 6 temáticas del grupo "Libres bajo influencia"), `components/tematicas/SubculturasDigitalesPage.tsx` (1712 líneas, componente standalone propio, no usa el template compartido) y `lib/hooks/use-libres-subtopic.ts` (216 líneas, máquina de estados de quiz + lightbox, compartida con las otras 5 temáticas del grupo). Solo lectura, nada modificado.

Ruta: `/tematicas/subculturas-digitales`. Layout: scroll continuo de 8 bloques (Hero, Introducción, 8 secciones de contenido con 4 layouts visuales distintos según la sección, Caso de estudio, Cita de cierre, Fuentes académicas, Material de estudio, Evaluación/Quiz) — sin TOC lateral, con un índice de "Secciones" tappeable dentro del propio Hero. `Navbar`/`BackToDashboardButton` en el propio componente (sin `Footer` visible en el recorrido leído). Progreso vía `useTematicaProgress` con `computeProgress` propio del hook compartido (`computeQuizProgress`): la finalización **no depende de un botón manual** como en las demás temáticas del sitio — se marca automáticamente al aprobar el quiz con score ≥ 8/10 (`progress.markCompleted()` se llama dentro de `handleNext()` cuando corresponde). **No hay `TematicaCompletarButton` en esta página** — es la única de las 8 temáticas auditadas hasta ahora sin ese botón.

**Patrón de audiencia confirmado: bespoke binario** (ternarios inline en el propio componente, sin `resolveTexto` ni `<NotaAudiencia>`). El binario es familias/no-familias (cualquier audiencia que no sea exactamente `'familias'`, incluida `docentes` y sin selección, cae al valor por defecto). Solo **2 de las 8 secciones de contenido** más el `intro` general tienen variante familias escrita: `intro`/`introFamilias` (nivel raíz), y dentro de `sections`: "De comunidad a subcultura", "Normas que nunca están escritas", "Autenticidad: quién pertenece de verdad" (estas 3 solo con `paragraphsFamilias`) y "Qué significa esto para el aula" (única con `headingFamilias`, `paragraphsFamilias` Y `quoteFamilias` — cobertura completa). Las otras 4 secciones ("Qué necesidad encuentra ahí", "Del estilo como resistencia a la subcultura acelerada", "El lenguaje como campo de batalla: Algospeak", "Cómo se estudian estas comunidades") no tienen ninguna variante y muestran el mismo texto sin importar la audiencia.

**No usa el componente `SourceCite`** en absoluto — esta temática tiene **3 mecanismos de atribución de fuentes propios y distintos**, ninguno compartido con el resto del sitio:
1. Un **badge de cita sobre la imagen** de cada sección (`EditorialImageFrame`, prop `source`/`sourceUrl`) — un link clicable superpuesto a la esquina superior izquierda de la ilustración de cada sección.
2. Un **chip de fuente inline** (`sd-source-chip`) junto al número de sección, con el nombre del autor y un ícono de link externo.
3. Una **sección final dedicada "Fuentes académicas y estudios citados"** (`VERIFIED_ACADEMIC_SOURCES`, 13 entradas) con tarjetas clicables que incluyen autor, título completo, publicación y tema — la más completa y formal de las 3, y la única con formato "ficha bibliográfica" (autor, título, editorial/publicación, tema).

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `subculturas-digitales`
- **Categoría:** "Comunidad digital"
- **Color de marca:** `#9333EA` (violeta)
- **Descripción** (usada como bajada del Hero): "Por qué lo digital funciona más como un territorio que como una herramienta, y cómo se forman ahí dentro comunidades con códigos, lenguaje y normas propias."
- **`authors` (8 nombres — campo definido en el tipo pero NUNCA renderizado en la página):** danah boyd, Edward Deci y Richard Ryan, Henri Tajfel y John Turner, Robert Cialdini, Albert Bandura, Ross Haenfler, Dick Hebdige, Sarah Thornton. Ver hallazgos — este campo es puramente interno/organizativo del dato, no se muestra al usuario en ningún punto del componente.
- **`audiencias`:** `['docentes', 'familias']`

---

## Hero

Badge fijo: "Libres Bajo Influencia · Comunidad Digital". H1 fijo: "Subculturas digitales". Bajada (fija, `data.description`): "Por qué lo digital funciona más como un territorio que como una herramienta, y cómo se forman ahí dentro comunidades con códigos, lenguaje y normas propias."

**Fragmentos flotantes decorativos (`HERO_FRAGMENTS`, adelanto visual del contenido de Algospeak):** "unalive", 🌽, "k1ll", "seggs", "ED · SA · SH", 🍉 — 6 términos/emojis flotando animados alrededor del Hero, sin explicación en este punto (se explican en la sección Algospeak más abajo).

**2 CTAs:** "Empezar a leer" (scroll a `#contenido`), "Ir a la evaluación" (scroll a `#evaluacion`).

**Índice de secciones tappeable** (fijo): 8 botones numerados 01-08 que hacen scroll a cada sección por su índice (`#seccion-0` a `#seccion-7`), alternando color índigo/mostaza.

**2 pills flotantes decorativas (desktop, fijas):** "⚡ 80% son Lurkers" y "💖 Algospeak & Eufemismos" — adelantos de contenido de secciones posteriores.

**Imagen del Hero** con badge de cita: "José Farhat · Libres Bajo Influencia" → `https://josefarhat.com` (única atribución del Hero a la propia conferencia de origen, no a un autor académico).

---

## Introducción con cita y fuente oficial (`id="contenido"`)

Badge: "Marco conceptual & Fuente Académica". Chip de fuente: "danah boyd (2010) — Públicos Conectados" (sin link clicable en este chip específico — el link real está en `VERIFIED_ACADEMIC_SOURCES`).

### `intro`/`introFamilias` — variante de audiencia a nivel raíz de la temática

| Docentes (y toda audiencia sin selección) | Familias |
|---|---|
| "Durante años dijimos que las personas 'usan' la tecnología, como quien agarra un martillo, hace algo y lo deja. Pero hoy lo digital se parece menos a una herramienta y más a un territorio: un lugar donde se aprende, se juega, se compra, se discute, se construye reputación, se participa. La investigadora danah boyd estudió las redes como 'públicos conectados' — espacios donde las tecnologías, las prácticas y las personas producen formas nuevas de encontrarse. **Un conflicto que empezó anoche en un grupo de chat entra al aula el lunes a la mañana, entero, con toda su carga.** Y también pasa lo contrario: una comunidad en línea puede sostener a un chico que la está pasando mal. No se acompañan dispositivos: se acompañan formas de habitar." | "Durante años dijimos que las personas 'usan' la tecnología, como quien agarra un martillo, hace algo y lo deja. Pero hoy lo digital se parece menos a una herramienta y más a un territorio: un lugar donde se aprende, se juega, se compra, se discute, se construye reputación, se participa. La investigadora danah boyd estudió las redes como 'públicos conectados' — espacios donde las tecnologías, las prácticas y las personas producen formas nuevas de encontrarse. **Un conflicto que empezó anoche en un grupo de chat sigue en casa al día siguiente, entero, con toda su carga.** Y también pasa lo contrario: una comunidad en línea puede sostener a un chico que la está pasando mal. No se acompañan dispositivos: se acompañan formas de habitar." |

> Única diferencia entre ambas variantes: "entra al aula el lunes a la mañana" ↔ "sigue en casa al día siguiente" — el resto del párrafo es idéntico palabra por palabra.

**Bloque de evidencia empírica destacado (fijo, sin variante, sin link clicable — solo mención textual):**
> "Evidencia Empírica — UNICEF / UNESCO (Kids Online 2024-2025): El 88% de los niños, niñas y adolescentes de 9 a 17 años afirma conectarse a diario para habitar espacios sociales virtuales de pares con igual significación emocional que el mundo presencial."

> Nota: esta estadística del 88% no tiene URL ni aparece en el listado final de `VERIFIED_ACADEMIC_SOURCES` — es la única cifra de toda la temática presentada como "evidencia empírica" sin ningún link de verificación.

---

## Las 8 secciones de contenido

Cada sección tiene una imagen ilustrativa propia (`SECTION_VISUALS`) con su propio badge de cita superpuesto (autor + link), más un chip de fuente adicional junto al número de sección. 4 secciones tienen layouts visuales completamente bespoke (Algospeak, Comunidades, Autenticidad, Aula); las otras 4 usan un layout "estándar" con imagen flotante y texto envolvente.

### Sección 01 — "Qué necesidad encuentra ahí" (layout estándar, sin variante de audiencia)

Imagen/fuente: Deci & Ryan (1985) → `https://selfdeterminationtheory.org/`

**Contenido (fijo para toda audiencia):**
> "Toda persona entra a un territorio buscando algo. Antes de preguntar cuántas horas pasa un chico conectado, conviene preguntarse qué encuentra ahí. Edward Deci y Richard Ryan lo explican con tres palabras: necesitamos autonomía, competencia y pertenencia — poder elegir, sentir que somos capaces de algo, y sentirnos parte. Una comunidad digital puede darle a un adolescente exactamente esas tres cosas: elegir, aprender algo, mostrarlo y que alguien lo reconozca."
>
> "Por eso importa la pregunta: cuando le sacamos una plataforma a un chico sin entender qué necesidad le estaba resolviendo, la necesidad no desaparece, solo se va a buscar otra puerta — muchas veces peor."

**Cita de cierre de la sección:** "Antes de preguntar qué plataforma usa, preguntemos qué necesidad encuentra respuesta ahí."

### Sección 02 — "De comunidad a subcultura" (layout estándar, CON variante de audiencia)

Imagen/fuente: Tajfel & Turner (1979) → `https://www.simplypsychology.org/social-identity-theory.html`

| Docentes | Familias |
|---|---|
| "Una comunidad reúne gente alrededor de un interés. Una subcultura digital hace algo más grande: crea códigos propios — lenguaje, símbolos, referentes, estéticas, rituales, normas y formas de reconocimiento. Henri Tajfel y John Turner mostraron que una parte de quiénes somos se construye con los grupos a los que pertenecemos: el grupo da cuidado y sentido, pero el mismo grupo puede empezar a marcar qué se puede decir, qué hay que celebrar y qué hay que rechazar para seguir siendo parte." *(párrafo 1, idéntico en ambas variantes)*<br><br>"Pertenecer no es el problema. Una subcultura puede ser creativa, educativa, incluso protectora. El riesgo aparece cuando una sola comunidad se queda con toda la identidad de la persona, o cuando convierte la diferencia en traición. **Es la misma dinámica que se puede ver, a escala reducida, en el grupo de WhatsApp de un curso.**" | Párrafo 1 idéntico.<br><br>"Pertenecer no es el problema. Una subcultura puede ser creativa, educativa, incluso protectora. El riesgo aparece cuando una sola comunidad se queda con toda la identidad de la persona, o cuando convierte la diferencia en traición. **Es la misma dinámica que se puede ver, a escala reducida, en el grupo de WhatsApp de la familia o entre amigos.**" |

**Cita de cierre (fija):** "Las subculturas digitales no solo reúnen personas: enseñan cómo mirar, cómo hablar y qué conductas reciben aplausos."

### Sección 03 — "Del estilo como resistencia a la subcultura acelerada" (layout estándar, sin variante de audiencia)

Imagen/fuente: Dick Hebdige / Ross Haenfler → `https://www.taylorfrancis.com/books/mono/10.4324/9780203139943/subculture-dick-hebdige`

**Contenido (fijo, 3 párrafos):**
> "Esta idea de subcultura tiene una historia que vale la pena conocer, porque explica por qué hoy funciona distinto. En los años setenta, la escuela de Birmingham leyó las subculturas como formas de resistencia: Dick Hebdige mostró que el estilo — la ropa, la música, los gestos de los punks o los mods — no era un capricho, sino un lenguaje cargado de significado, una manera de disputar simbólicamente el orden establecido. Hebdige también describió un ciclo que hoy nos resulta muy familiar: tarde o temprano el mercado absorbe ese estilo, lo convierte en mercancía y lo desactiva. A eso lo llamó incorporación."
>
> "Desde los noventa, otros investigadores matizaron esa lectura: las pertenencias contemporáneas son más fluidas y menos heroicas — se habla de tribus, de escenas, y de un capital subcultural, ese prestigio que se gana conociendo los códigos y estando al día dentro del grupo. Sarah Thornton agregó algo decisivo: los medios no se limitan a describir las subculturas desde afuera, también ayudan a constituirlas. En la era de las plataformas, esa idea se vuelve literal."
>
> "Internet, según el investigador Ross Haenfler, cambió tres cosas: la presencia física se volvió opcional (democratiza el acceso, pero afloja el compromiso corporal que antes definía pertenecer); los espacios se homogeneizaron un poco (escenas de distintas ciudades del mundo empiezan a parecerse); y muchas subculturas actuales son reiteraciones de otras anteriores, aunque personas de orígenes diversos les aportan savia nueva. Y ahí es donde el algoritmo entra en escena: ya no es el mercado el que tarda años en incorporar un estilo underground, como describía Hebdige — el sistema de recomendación lo detecta, lo monetiza y lo agota en cuestión de meses. Las microtendencias '-core' que ya vimos con los VTubers son exactamente eso: subculturas aceleradas, que nacen, se viralizan y se extinguen en una temporada."

**Cita de cierre:** "El mercado siempre absorbió los estilos underground; lo que cambió es que hoy el algoritmo lo hace en meses, no en años."

### Sección 04 — "Normas que nunca están escritas" (layout estándar, CON variante de audiencia)

Imagen/fuente: Cialdini & Bandura → `https://www.influenceatwork.com/7-principles-of-persuasion/`

| Docentes | Familias |
|---|---|
| Párrafo 1 idéntico en ambas: "¿Cómo se aprenden esas normas, si casi nunca están escritas en ningún lado? Se aprenden mirando. Una publicación con miles de reproducciones y aprobaciones ya envía una señal antes de que nadie la analice: esto importa, esto gusta, esto pertenece. Robert Cialdini lo llamó prueba social — la tendencia a mirar a los demás cuando no sabemos bien qué pensar o hacer. Albert Bandura mostró que aprendemos observando modelos y observando qué les pasa a esos modelos." | *(idéntico)* |
| "Las métricas, entonces, no solo cuentan la popularidad: también la fabrican. Lo repetido se vuelve familiar. Lo aprobado se vuelve deseable. Lo compartido, poco a poco, se vuelve normal. Reconocer esta lógica ayuda a leer lo que pasa en **la propia aula**, sin necesidad de entender cada plataforma en detalle." | "Las métricas, entonces, no solo cuentan la popularidad: también la fabrican. Lo repetido se vuelve familiar. Lo aprobado se vuelve deseable. Lo compartido, poco a poco, se vuelve normal. Reconocer esta lógica ayuda a leer lo que pasa en **casa**, sin necesidad de entender cada plataforma en detalle." |

**Cita de cierre (fija):** "Las normas más influyentes casi nunca están escritas: están a la vista, en aquello que recibe atención."

### Sección 05 — "Autenticidad: quién pertenece de verdad" (layout acordeón de 2 tarjetas, CON variante de audiencia)

Imagen/fuente: Patrick Williams (2006) → `https://www.tandfonline.com/doi/abs/10.1080/13676260600635623`

**Elemento interactivo — 2 tarjetas acordeón** ("El caso straightedge" / "La paradoja del capital subcultural"), expandir/colapsar individual:

| Docentes — "El caso straightedge" | Familias |
|---|---|
| "Si algo define a una subcultura es la autenticidad: la pregunta constante por quién pertenece de verdad y quién solo imita. Con el crecimiento de internet, más personas tienen la posibilidad de acercarse a una subcultura, y eso vuelve la pregunta más intensa, no menos. El sociólogo Patrick Williams estudió la subcultura straightedge — que rechaza el alcohol y otras drogas — y encontró que sus integrantes usan la música e internet para identificarse y defender su identidad; en un foro dedicado a ella, los participantes gestionan sus propias afiliaciones y cuestionan las de los demás. Internet apareció así como un espacio subcultural nuevo, pero disputado." | *(idéntico en ambas variantes)* |

| Docentes — "La paradoja del capital subcultural" | Familias |
|---|---|
| "Esto conecta con el capital subcultural: dentro del grupo, el estatus se gana demostrando que uno conoce los códigos, la historia, los referentes. Y ahí aparece una paradoja propia de lo digital: la misma apertura que permite que cualquiera se sume vuelve más difícil controlar quién es auténtico, y como ese control se vuelve difícil, se vuelve también más ruidoso. De ahí las discusiones interminables sobre quién es un miembro real y quién un impostor — tensiones que **cualquier docente reconoce entre sus estudiantes**." | "Esto conecta con el capital subcultural: dentro del grupo, el estatus se gana demostrando que uno conoce los códigos, la historia, los referentes. Y ahí aparece una paradoja propia de lo digital: la misma apertura que permite que cualquiera se sume vuelve más difícil controlar quién es auténtico, y como ese control se vuelve difícil, se vuelve también más ruidoso. De ahí las discusiones interminables sobre quién es un miembro real y quién un impostor — tensiones que **cualquier familia reconoce en sus hijos e hijas**." |

**Cita de cierre (fija):** "Cuanto más fácil es sumarse a una subcultura, más ruidosa se vuelve la pregunta de quién pertenece de verdad."

### Sección 06 — "El lenguaje como campo de batalla: Algospeak" (layout decoder interactivo, sin variante de audiencia)

Badge propio: "Transmisión interceptada · Oxford Internet Institute". Imagen/fuente: Adam Aleksic (2024) → `https://www.etymologynerd.com/`

**Contenido (fijo, 3 párrafos):**
> "Estas comunidades no solo comparten códigos visuales y rituales: también desarrollan su propio idioma, y ese idioma nace de una necesidad muy concreta. El 'Algospeak' no es una jerga juvenil superficial ni una moda pasajera: es una adaptación estratégica frente a los sistemas de moderación automatizada. Cuando una plataforma usa el lenguaje como metadato para decidir qué visibiliza y qué suprime, hablar se convierte en una táctica de supervivencia. Adam Aleksic sostiene que los algoritmos de redes sociales funcionan hoy como motores de cambio lingüístico acelerado: antes, el habla cambiaba despacio, mediada por instituciones como la imprenta o la escuela; ahora cambia a la velocidad de lo que el sistema premia, y los usuarios terminan sacrificando precisión conceptual a cambio de que el contenido sea indexado."
>
> "Esa lógica de evasión toma varias formas: eufemismos léxicos como 'unalive' en vez de 'suicidio' o 'mascara' en vez de agresión sexual; manipulación grafémica como 'seggs' o 'k1ll' para esquivar el reconocimiento de texto; acronimia de trauma (ED, SA, SH) que permite hablar de salud mental sin activar filtros automáticos; e ideogramas usados como metáfora — un emoji de maíz en vez de la palabra pornografía, una sandía en vez de un tema político — para burlar el procesamiento de lenguaje del sistema."
>
> "Lo más inquietante es que esta jerga de supervivencia empieza a filtrarse fuera de la pantalla. En museos de Seattle dedicados a la memoria de Kurt Cobain ya se documentó el uso de 'unalive' o 'desvivir' en vez de 'suicidio' — un término clínico y preciso, reemplazado por una jerga diseñada para esquivar un filtro comercial, ahora instalada en un espacio de memoria histórica. Cuando el código de una plataforma termina moldeando cómo hablamos de la muerte en un museo, el problema dejó de ser solamente digital."

**Elemento interactivo — Decodificador Algospeak** (`CIPHER_TERMS`, 7 tarjetas tocables, contador "X/7 decodificados"):

| Cifra | Significado real | Categoría |
|---|---|---|
| unalive | suicidio | eufemismo léxico |
| mascara | agresión sexual | eufemismo léxico |
| seggs | sexo | manipulación grafémica |
| k1ll | matar | manipulación grafémica |
| ED · SA · SH | trastorno alimentario, abuso sexual, autolesión | acronimia de trauma |
| 🌽 | pornografía | ideograma como metáfora |
| 🍉 | tema político | ideograma como metáfora |

**Cita de cierre (fija):** "El algospeak no es un capricho generacional: es la marca visible de que el lenguaje se está adaptando a lo que un sistema de moderación deja pasar."

### Sección 07 — "Cómo se estudian estas comunidades" (layout con anillo SVG concéntrico interactivo, sin variante de audiencia)

Badge propio: "Estructura de la comunidad · Robert Kozinets (2020)". Imagen/fuente: Robert Kozinets (2020) → `https://us.sagepub.com/en-us/nam/netnography/book266023`

**Contenido (fijo, 2 párrafos):**
> "Entender estas subculturas también exige elegir bien la herramienta de observación, porque no todas ven lo mismo. La netnografía que propone Robert Kozinets es una práctica cualitativa e inmersiva: entiende la red como un espacio de socialización diaria y requiere una sensibilidad humana capaz de leer el sarcasmo y la ironía, algo que el procesamiento automático todavía no logra con exactitud. La etnografía digital conecta la observación virtual con la física, reconociendo que la 'co-presencia' mediada por pantallas es una forma legítima de vida social. El análisis de big data, en cambio, aporta escala pero pierde profundidad: procesa patrones masivos sin poder captar el relato humano detrás de cada interacción."
>
> "El fenómeno de los VTubers es un buen caso para desarmar estereotipos: contra la idea de que estos espacios son mayoritariamente masculinos, el 23% de las jugadoras consume este contenido frente al 14% de los varones, atraídas por entornos con menor sexualización y mayor cercanía con la estética kawaii. Proyectos de co-creación como Holocure muestran el mismo patrón que se ve en otras subculturas: comunidades que generan sus propias competencias (speedrunning), sus propias referencias y, con etiquetas como 'Cottagecore' o 'Goblincore', su propia forma de que las marcas terminen categorizando comercialmente esa identidad."

**Elemento interactivo — Diagrama de anillos concéntricos SVG tocables (`COMMUNITY_LAYERS`), representando la estructura "muñecas rusas" de comunidades tipo Reddit:**

| Capa | Descripción corta | Detalle expandido | Estadística |
|---|---|---|---|
| Moderadores | "Patrullan las fronteras del grupo" | "Voluntarios que patrullan las fronteras del grupo, sosteniendo qué entra y qué queda afuera." | — |
| Prosumidores | "Dinamizan el espacio, generan contenido" | "Dinamizan el espacio generando el contenido que el resto consume y responde." | — |
| Lurkers | "Oyentes pasivos — sostienen la viabilidad del nicho" | "Oyentes pasivos que no publican, pero representan el 80% de la audiencia y sostienen, con su sola presencia, la viabilidad del nicho (Regla 90-9-1 de Jakob Nielsen)." | 80% (mostrado en el centro del anillo) |

**Cita de cierre (fija):** "Cada subcultura digital exige una forma distinta de mirarla: lo que la netnografía puede leer, el big data lo pierde, y viceversa."

### Sección 08 — "Qué significa esto para el aula" / "Qué significa esto para tu casa" (layout con 4 tarjetas expandibles, ÚNICA sección con cobertura completa de audiencia: heading + paragraphs + quote)

Badge propio: "Aplicación pedagógica · Ministerio de Educación & UNESCO". Imagen/fuente: "UNESCO Digital Pedagogy" (chip específico de esta sección, distinto del `visual.source` genérico de `SECTION_VISUALS[7]` que es "Ministerio de Educación & UNESCO").

| Campo | Docentes | Familias |
|---|---|---|
| Heading (título de sección) | "Qué significa esto para el aula" | "Qué significa esto para tu casa" |

**Párrafos (idénticos entre variantes en el primer párrafo, distintos en el segundo):**

| Docentes | Familias |
|---|---|
| "Conviene decirlo con todas las letras, para no caer en el alarmismo: la enorme mayoría de la pertenencia subcultural es creativa, afirmativa y protectora. Para muchos chicos — sobre todo para quienes cargan con un interés muy de nicho, una identidad minoritaria o una experiencia de exclusión — encontrar una comunidad en línea que los entienda puede ser una tabla de salvación. Al mismo tiempo, sería ingenuo ignorar que el mismo mecanismo — pertenencia, códigos compartidos, validación del grupo — puede canalizarse hacia comunidades tóxicas o directamente extremistas. La actitud útil no es la desconfianza general: es el discernimiento, distinguir la comunidad que sostiene de la que captura." | *(idéntico)* |
| "De ahí se desprenden algunas orientaciones concretas. Comprender la pertenencia antes de juzgarla: cuando **un estudiante** se sumerge en una subcultura, casi siempre está resolviendo una necesidad genuina de autonomía, competencia o pertenencia. Leer los códigos **como un ejercicio de alfabetización mediática**: preguntar quién define los códigos de una comunidad, qué se valora en ella, cómo se aprenden sus normas. Usar la subcultura **como puente pedagógico, aprovechando el capital de conocimiento que los estudiantes ya traen**. Y mantener la mirada atenta sin patologizar: estar disponible para conversar, sin ridiculizar ni prohibir de entrada, y **articular con otros adultos** si aparecen señales de aislamiento o de captura por una comunidad dañina." | "De ahí se desprenden algunas orientaciones concretas. Comprender la pertenencia antes de juzgarla: cuando **tu hijo o hija** se sumerge en una subcultura, casi siempre está resolviendo una necesidad genuina de autonomía, competencia o pertenencia. Leer los códigos **junto a ellos, como un ejercicio compartido**: preguntar quién define los códigos de una comunidad, qué se valora en ella, cómo se aprenden sus normas. Usar ese interés **como puente para conversar, aprovechando lo que tus hijos ya saben y podés aprender de ellos**. Y mantener la mirada atenta sin patologizar: estar disponible para conversar, sin ridiculizar ni prohibir de entrada, y **buscar ayuda** si aparecen señales de aislamiento o de captura por una comunidad dañina." |

**Elemento interactivo — 4 tarjetas expandibles (`AULA_ITEMS`, fijas, sin variante de audiencia pese a estar en la sección que sí distingue docentes/familias en el resto):**

| Título | Detalle |
|---|---|
| Comprender antes de juzgar | "Cuando un estudiante se sumerge en una subcultura, casi siempre está resolviendo una necesidad genuina de autonomía, competencia o pertenencia (Deci & Ryan)." |
| Leer los códigos | "Preguntar quién define los códigos de una comunidad, qué se valora en ella, cómo se aprenden sus normas — un ejercicio de alfabetización mediática." |
| Puente pedagógico | "Usar la subcultura como puente, aprovechando el enorme capital de conocimiento que los estudiantes ya traen." |
| Mirada atenta, sin patologizar | "Estar disponible para conversar, sin ridiculizar ni prohibir de entrada, articulando con otros adultos si aparecen señales de captura por una comunidad dañina." |

> Nota: las 4 tarjetas `AULA_ITEMS` usan lenguaje docente-voiced fijo ("un estudiante", "articulando con otros adultos") incluso cuando la audiencia seleccionada es "familias" y el resto de la sección sí traduce a "tu hijo/hija" — inconsistencia dentro de la única sección con cobertura de audiencia más completa de toda la temática.

**Cita de cierre (variante de audiencia):**

| Docentes | Familias |
|---|---|
| "Comprender la pertenencia, leer sus códigos, tender puentes y cuidar sin patologizar: ese es el arco completo para acompañar una subcultura digital." | "Comprender la pertenencia, leer sus códigos, tender puentes y cuidar sin patologizar: ese es el arco completo para acompañar una subcultura digital, en casa como en cualquier otro lugar." |

---

## Caso para pensar — "Sofía, catorce años" (`id="caso"`)

Badge: "Un caso para pensar". Sin variante de audiencia. Imagen/fuente: "Dossier de Investigación" → `https://josefarhat.com`.

> "Sofía busca un tutorial para dibujar rostros, encuentra a una creadora, aprende una técnica y descubre que hay toda una comunidad. Sube su primer dibujo. Alguien le escribe 'tenés talento'. Esa noche, Sofía vuelve. Hay ahí creatividad, aprendizaje, reconocimiento y pertenencia genuinos. Al mismo tiempo, mientras Sofía aprende los códigos del grupo — qué estilos se valoran, cómo se habla, qué recibe aplausos — la plataforma está aprendiendo sobre Sofía: qué mira hasta el final, qué guarda, qué repite y, sobre todo, qué la hace volver."

---

## Cita de cierre (isla oscura de impacto)

Sin variante de audiencia. Fondo oscuro dramático.

> "La pertenencia es valiosa. Y justamente por eso puede convertirse en una puerta de entrada para la influencia."
> — José Farhat · Conferencia "Libres Bajo Influencia"

---

## Fuentes académicas y estudios citados — listado completo (`VERIFIED_ACADEMIC_SOURCES`, 13 entradas)

Sección dedicada con copy introductorio: "Todos los conceptos, datos estadísticos e investigaciones mencionadas en este módulo cuentan con su publicación oficial verificada." Formato ficha bibliográfica (autor, título completo con traducción, publicación, tema, link):

| Autor | Título | Publicación | Tema | URL |
|---|---|---|---|---|
| danah boyd (2010) | Social Network Sites as Networked Publics: Affordances, Dynamics, and Implications | A Networked Self (Zizi Papacharissi, ed.) | Públicos conectados, persistencia y contexto colapsado | https://danah.org/ |
| Edward L. Deci & Richard M. Ryan (1985) | Intrinsic Motivation and Self-Determination in Human Behavior | Plenum Press / Self-Determination Theory | Autonomía, competencia y pertenencia social | https://selfdeterminationtheory.org/ |
| Henri Tajfel & John Turner (1979) | An Integrative Theory of Intergroup Conflict | The Social Psychology of Intergroup Relations | Teoría de la identidad social e in-group/out-group | https://www.simplypsychology.org/social-identity-theory.html |
| Dick Hebdige (1979) | Subculture: The Meaning of Style | Routledge / Birmingham School of Cultural Studies | Estilo como resistencia e incorporación comercial | https://www.taylorfrancis.com/books/mono/10.4324/9780203139943/subculture-dick-hebdige |
| Sarah Thornton (1995) | Club Cultures: Music, Media and Subcultural Capital | Polity Press | Capital subcultural y rol constitutivo de los medios | https://www.politybooks.com/ |
| Ross Haenfler (2014) | Goths, Punks, and Gamers: Youth Subcultures and Subcultural Capital in the Digital Age | Routledge | Subculturas aceleradas y desterritorialización digital | https://www.routledge.com/Goths-Punks-and-Gamers-Youth-Subcultures-and-Subcultural-Capital/Haenfler/p/book/9780415844871 |
| Robert Cialdini (1984) | Influence: The Psychology of Persuasion | Harper Business | Prueba social y validación de pares | https://www.influenceatwork.com/7-principles-of-persuasion/ |
| Albert Bandura (1977) | Social Learning Theory | Prentice-Hall | Aprendizaje observacional y vicario | https://www.simplypsychology.org/bandura.html |
| J. Patrick Williams (2006) | Authenticity and Subcultural Capital in the Straightedge Scene | Journal of Youth Studies, 9(2), 173-189 | Autenticidad y disputas en foros digitales | https://www.tandfonline.com/doi/abs/10.1080/13676260600635623 |
| Adam Aleksic (2024/2025) | Algospeak: How Social Media Is Transforming the Future of Language | Etymology Nerd / Linguistics Research | Adaptación lingüística ante moderación algorítmica | https://www.etymologynerd.com/ |
| Robert V. Kozinets (2010, 2020) | Netnography: Redefining Ethnography in the Digital Age | Sage Publications | Netnografía cualitativa e inmersión digital | https://us.sagepub.com/en-us/nam/netnography/book266023 |
| Big Games Machine (2024-2025) | US Gamer Audience Demographics & Media Consumption Survey | Industry Report / Tubefilter | Consumo de VTubers por género (23% mujeres / 14% varones) | https://www.tubefilter.com/ |
| Jakob Nielsen (2006) | The 90-9-1 Rule for Participation Inequality in Social Media and Online Communities | Nielsen Norman Group | Regla del 80-90% de audiencia pasiva (Lurkers) | https://www.nngroup.com/articles/participation-inequality/ |

> Nota importante: **ninguna de estas 13 fuentes está marcada como "sin verificar"** (no existe el concepto `unverified` en esta temática, a diferencia del resto del sitio) — el copy introductorio de la sección afirma categóricamente que "todas... cuentan con su publicación oficial verificada", una aseveración de certeza más fuerte que la de cualquier otra temática auditada, que sí reconoce fuentes de segunda mano o sin confirmar cuando corresponde.
>
> Los links de algunas fuentes apuntan a la página general del autor/editorial en vez del recurso específico citado (ej. Deci & Ryan → home de Self-Determination Theory, no al paper de 1985; Cialdini → una página de "7 principios" de un sitio de consultoría, no al libro *Influence*; Sarah Thornton → home de Polity Press, la editorial, no el libro específico) — igual que se observó en `ia-etica-ciudadania` con Educ.ar y OEA.
>
> El dato "23% de las jugadoras consume VTubers frente al 14% de los varones" (sección 07) se atribuye acá a "Big Games Machine — Industry Report / Tubefilter", una fuente de tipo informe de industria/blog especializado, categoría de fuente distinta (y potencialmente menos rigurosa) que el resto de la lista, mayormente académica — sin que el propio copy de la sección distinga ese matiz de tipo de fuente.

---

## Material de estudio — Presentación e infografía (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`** (componente compartido con las otras 5 temáticas del grupo, distinto del carrusel `.svg` usado en las temáticas de "Ciudadanía Digital"/"Alfabetización"): 15 diapositivas en formato `.webp` (`/img/tematicas/subculturas-digitales/slides/`), con botón de descarga del PDF original (`data.pdfUrl` = `/img/tematicas/subculturas-digitales/presentacion.pdf`, label "Presentación — Subculturas digitales").

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mismo mecanismo compartido vía `useLibresSubtopic`: zoom 1x-4x, arrastre, pinch táctil, scroll de mouse, Escape). Imagen: `/img/tematicas/subculturas-digitales/infografia.webp`, alt "Infografía de Subculturas digitales".

---

## Evaluación interactiva — Quiz (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas de opción múltiple**, único mecanismo que marca la temática como completada (score ≥ 8/10 → `progress.markCompleted()` automático, sin botón manual). Barra de progreso circular animada con contador (`useCountUp`) al finalizar. Guarda el último intento y permite repetir.

**Las 10 preguntas completas:**

1. "¿Por qué la charla propone pensar lo digital como 'territorio' en vez de 'herramienta'?" → Correcta: "Porque hoy se aprende, juega, compra, discute y construye reputación ahí adentro, no es algo que se usa y se deja"
2. "Según Deci y Ryan, ¿qué tres necesidades puede satisfacer una comunidad digital?" → Correcta: "Autonomía, competencia y pertenencia"
3. "¿Qué pasa, según la charla, cuando le sacamos una plataforma a un chico sin entender qué necesidad le resolvía?" → Correcta: "La necesidad sigue intacta y busca otra puerta, muchas veces peor"
4. "¿Qué diferencia a una subcultura digital de una simple comunidad?" → Correcta: "La subcultura crea códigos propios: lenguaje, estética, rituales y normas de reconocimiento"
5. "Según Tajfel y Turner, ¿qué rol cumple el grupo en la identidad de una persona?" → Correcta: "Una parte de quiénes somos se construye con los grupos a los que pertenecemos"
6. "¿Cuál es, según la charla, el verdadero riesgo de pertenecer a una subcultura digital?" → Correcta: "Que una sola comunidad se quede con toda la identidad de la persona o convierta la diferencia en traición"
7. "¿Qué es la 'prueba social' que describe Robert Cialdini?" → Correcta: "La tendencia a mirar a los demás para decidir qué pensar o hacer cuando no lo sabemos"
8. "Según Bandura, ¿cómo aprendemos buena parte de las normas de un grupo digital?" → Correcta: "Observando modelos y observando qué les pasa a esos modelos"
9. "En el caso de Sofía, ¿qué está pasando 'en paralelo' mientras ella aprende los códigos de la comunidad?" → Correcta: "La plataforma está aprendiendo sobre ella: qué mira, qué guarda, qué repite y qué la hace volver"
10. "¿Por qué dice la charla que 'las métricas no solo cuentan la popularidad, también la fabrican'?" → Correcta: "Porque lo repetido se vuelve familiar, lo aprobado deseable y lo compartido, normal — las métricas moldean lo que después se imita"

Ninguna pregunta ni sus opciones varían por audiencia.

---

## Resumen de hallazgos para el rediseño

1. **3 mecanismos de atribución de fuentes coexisten sin unificar**: el badge sobre la imagen de sección (`EditorialImageFrame`), el chip de fuente junto al número de sección (a veces con nombre distinto al de la imagen — ver el caso de la sección 08, "UNESCO Digital Pedagogy" vs. "Ministerio de Educación & UNESCO"), y la sección final `VERIFIED_ACADEMIC_SOURCES` (la más completa). Ninguno usa el patrón `SourceCite` del resto del sitio.
2. **El campo `authors` de la entrada de datos (8 nombres) nunca se renderiza** — es metadato interno que no llega al usuario; toda la atribución real vive en `VERIFIED_ACADEMIC_SOURCES`, un array totalmente distinto y más completo (13 entradas) definido directamente en el componente, no en `lib/`.
3. **Solo 4 de las 8 secciones de contenido tienen variante de audiencia**, y de esas 4, 3 tienen una diferencia mínima (una sola frase u oración cambiada) — la sección "Autenticidad" y "De comunidad a subcultura" cambian literalmente una cláusula final. Solo la sección "Qué significa esto para el aula/casa" tiene una reescritura sustancial del segundo párrafo.
4. **Las 4 tarjetas interactivas `AULA_ITEMS` de la sección 08 no tienen variante de audiencia** pese a estar dentro de la única sección con cobertura completa de audiencia (heading + paragraphs + quote) — usan lenguaje docente-voiced fijo ("un estudiante", "articulando con otros adultos") incluso cuando se selecciona "familias".
5. **El dato "88% de NNyA se conecta a diario" (Introducción) y "23% vs. 14% de consumo de VTubers por género" (Sección 07) tienen distinto rigor de fuente**: el primero no tiene link ni entrada en el listado final; el segundo se atribuye a un informe de industria/blog ("Big Games Machine — Tubefilter"), categoría claramente distinta del resto de fuentes académicas, sin que el copy lo señale.
6. **El copy de la sección de fuentes afirma que "todas... cuentan con su publicación oficial verificada"**, una declaración de certeza total que no se ve matizada en ningún punto — a diferencia del resto del sitio, donde el patrón `unverified`/"sin verificar" es una práctica establecida para reconocer fuentes de segunda mano.
7. **Es la única temática auditada sin `TematicaCompletarButton`** — la finalización es 100% automática al aprobar el quiz (score ≥ 8/10), sin ningún botón manual de "marcar como completada" como en las demás 8 temáticas revisadas hasta ahora.
8. **4 layouts visuales completamente distintos para las 8 secciones** (estándar con imagen flotante, decoder Algospeak, anillos concéntricos SVG, acordeón de autenticidad, tarjetas expandibles de aula) — la temática con mayor variedad de patrones de presentación de contenido de todo el sitio auditado hasta ahora, reflejando su naturaleza de "presentación bespoke" en vez de template compartido.
9. **Varios links de `VERIFIED_ACADEMIC_SOURCES` apuntan a la página general del autor/editorial en vez del recurso específico** (Deci & Ryan, Cialdini, Thornton) — mismo patrón de "link genérico en vez de específico" ya detectado en `ia-etica-ciudadania`.
10. **Ningún elemento del Hero (fragmentos flotantes, pills "80% Lurkers"/"Algospeak & Eufemismos") tiene fuente atribuida en el punto donde aparece** — son adelantos visuales de contenido que se explica y cita recién más abajo en la página, lo cual es razonable como estrategia de diseño pero significa que, leídos aisladamente, esos elementos del Hero no tienen atribución propia.
