# Auditoría de contenido — Alfabetización Mediática

Base para rediseño. Recorrido completo de `lib/alfabetizacion-mediatica-content.ts` (393 líneas) y los 10 componentes que lo consumen (`app/alfabetizacion-mediatica/alfabetizacion-mediatica-content.tsx` + `components/alfabetizacion-mediatica/*.tsx`). Solo lectura, nada modificado.

Ruta: `/alfabetizacion-mediatica`. Título de página: "Alfabetización Mediática e Informacional | José Farhat". Layout: scroll continuo de 9 secciones numeradas (01-09 dentro del propio contenido de cada sección — no hay una "00 · Hero" numerada, el Hero se identifica como "01 · Concepto"). **Única temática de las 5 auditadas hasta ahora sin `TocNav`/sidebar de navegación propio** — en su lugar usa `ReadingProgressBar` (`components/reading-progress-bar.tsx`, un componente compartido genérico, no una copia propia de la temática como en las otras). Fondo con "ambient blobs" en colores de marca + textura de ruido SVG inyectada inline (`noise` filter), ambos elementos decorativos únicos de esta temática. `Navbar`/`Footer`/`BackToDashboardButton` en el nivel de contenido. Progreso de checklist (5 ítems) persiste vía `useTematicaProgress` (tematicaId `alfabetizacion-mediatica`), con `TematicaCompletarButton` al final.

Patrón de audiencia: **`pickFamilias` binario** (no Group A real, pese a que el archivo declara un tipo `AudienciaTexto` — nunca lo importa ni llama `resolveTexto`). El propio comentario de cabecera de `lib/alfabetizacion-mediatica-content.ts` documenta la decisión: "este archivo usa consts sueltas — así que la variante por audiencia se replica como 'const hermana opcional' (ej. `MIL_DOCENTES_QUOTE` / `MIL_FAMILIAS_QUOTE`) en vez de un objeto `AudienciaTexto` único." El helper `pickFamilias<T>(docenteValue, familiaValue, audienciaActual)` devuelve el valor familias solo si la audiencia activa es exactamente `'familias'` Y existe un valor familias definido; en cualquier otro caso (incluida ausencia de selección, o cualquiera de las otras 3 audiencias — `adultos-mayores`, `ninas-ninos-adolescentes`, `mujeres`) cae al valor docente, que es la audiencia base/fallback de esta temática.

**`SourceCite` de esta temática también es un "citation-card con sello"** (mismo patrón visual que `alfabetizacion-digital`, documentado explícitamente como réplica intencional adaptada a la paleta `brand-blue`/ámbar de esta ruta — "deliberadamente duplicado por ruta en vez de compartido"). Particularidad importante: **el criterio de "verificado" no usa el campo `unverified` del tipo `Source`** (que sí existe en la interfaz) — usa `!!source.url`, es decir, cualquier fuente sin URL se marca automáticamente como "referencia bibliográfica" (ámbar, reloj) aunque no tenga `unverified: true` seteado. Ninguna fuente de este archivo usa realmente `unverified: true` — ver hallazgos.

---

## 01 — Hero / Concepto (`hero-section.tsx`)

**Estructura:** badge + H1 + párrafo intro (audiencia) + caja "Tu Objetivo Principal" (audiencia) + gráfico de dona (Chart.js) "El Sesgo de Superficialidad" + 2 tarjetas de definición/origen del marco MIL (fijas) + callout "por qué esto es tarea de [docentes/familia]" (audiencia).

**H1 (fijo):** "Optimizá tu Filtro de Información" (con degradado azul-rosa animado en "Filtro de Información").

**Párrafo intro:**

| Docentes | Familias |
|---|---|
| "La infoxicación satura la capacidad de decisión de cualquiera: la tuya y la de tus estudiantes. Este entorno de entrenamiento de **Alfabetización Mediática** es tu herramienta para evaluar, procesar y compartir datos con precisión, y para después poder enseñarles el mismo método en el aula." | "La infoxicación satura la capacidad de decisión de cualquiera: la tuya y la de tus hijos. Este entorno de entrenamiento de **Alfabetización Mediática** es tu herramienta para evaluar, procesar y compartir datos con precisión, y para después poder enseñarles el mismo método en casa." |

**Caja "Tu Objetivo Principal":**

| Docentes | Familias |
|---|---|
| "Instalar un 'cortafuegos mental' para neutralizar titulares engañosos y elevar la calidad de la información que consumís y distribuís — y tener un método claro y replicable para enseñarles lo mismo a tus estudiantes." | "Instalar un 'cortafuegos mental' para neutralizar titulares engañosos y elevar la calidad de la información que consumís y distribuís — y tener un método claro y replicable para enseñarles lo mismo a tus hijos." |

> Nota técnica: a diferencia del resto de la temática, estas 2 variantes (párrafo intro y objetivo principal) están escritas como JSX condicional inline (`{esFamilias ? <>...</> : <>...</>}`) directamente en el componente, **no usan `pickFamilias`** ni están en `lib/alfabetizacion-mediatica-content.ts` — tercer mecanismo de audiencia dentro de la misma temática, además de `pickFamilias` y las "const hermanas".

**Elemento interactivo — Gráfico de dona "El Sesgo de Superficialidad"** (Chart.js `Doughnut`, sin datos reales atribuidos a ninguna fuente):
- "Lee solo el título": 70%
- "Análisis completo (Artículo)": 30%
- Subtítulo: "Interacción promedio frente a un enlace"
- Caption bajo el gráfico: "📊 Basado en métricas de consumo digital" — **sin `SourceCite`, sin fuente nombrada**, pese a presentarse como un dato de "métricas de consumo digital".

**Tarjeta "Qué es la alfabetización mediática (MIL)" (fija):**
> "'Media and Information Literacy' (MIL) — un conjunto de competencias que permiten a las personas comprender la función de los medios y otros proveedores de información, evaluar críticamente su contenido, y tomar decisiones informadas como usuarios y productores de información y contenido mediático."
> — UNESCO (`https://www.unesco.org/en/ami`)

**Tarjeta "De dónde viene el marco" (fija):**
> "UNESCO formalizó este marco unificado en 2007, integrando la alfabetización mediática y la alfabetización informacional, antes tratadas por separado."
> — UNESCO (`https://www.unesco.org/en/ami`)

**Callout "Un marco pensado específicamente para docentes" / "Por qué esto también es tarea de la familia"** (título por audiencia vía JSX inline + cita resuelta con `pickFamilias(MIL_DOCENTES_QUOTE, MIL_FAMILIAS_QUOTE, audienciaActual)`):

| Docentes | Familias |
|---|---|
| Título: "Un marco pensado específicamente para docentes" | Título: "Por qué esto también es tarea de la familia" |
| Cita: "UNESCO tiene un marco específico llamado 'Media and Information Literacy Competency Framework for Teachers' — un documento oficial pensado exactamente para este público." | Cita: "UNESCO impulsa la alfabetización mediática e informacional como una competencia clave para cualquier adulto que acompañe a chicos y chicas en su consumo de información — no es una competencia exclusiva del aula, empieza en casa." |

Ambas variantes citan a UNESCO con la misma URL. El propio código documenta honestamente la asimetría: "No existe un marco MIL con nombre propio para familias como el que sí existe para docentes (arriba) — esta variante es honesta sobre esa diferencia en vez de inventar un documento que no existe."

---

## 02 — Historia / Origen — "La Infoxicación: de dónde viene el nombre" (`historia-section.tsx`)

Sin variante de audiencia.

**Cita principal:**
> "El término 'infoxicación' fue acuñado en 1996 por Alfons Cornellà, consultor catalán especializado en gestión de información, para nombrar la situación de exceso informacional en la que una persona recibe más información de la que puede procesar."
> — Centro Virtual Cervantes (Instituto Cervantes) (`https://blogscvc.cervantes.es/martes-neologico/infoxicacion/`)

**Nota de atribución (sin `SourceCite`, texto plano itálico):**
> "Algunas fuentes atribuyen la acuñación original en inglés al psicólogo David Lewis, y a Cornellà el mérito de adaptarlo y popularizarlo en español con el sentido que usamos hoy."

**Bloque de agravamiento del problema:**
> "El problema que describe Cornellà se agravó con las redes sociales, y es parte de lo que llevó a UNESCO a formalizar el marco MIL en 2007 como respuesta educativa estructurada."
> — UNESCO (`https://www.unesco.org/en/ami`)

---

## 03 — Características — "El framework C.A.F.E." (`caracteristicas-section.tsx`)

Sin variante de audiencia, sin citas (`SourceCite`) — el comentario del propio `lib` aclara "sin cambios, sin cita nueva".

**Elemento interactivo — 4 tarjetas flip 3D** (hover para voltear, `[transform-style:preserve-3d]` + `rotateY(180deg)`), una por letra del acróstico C.A.F.E.:

| Letra | Título | Emoji | Reverso (pregunta de verificación) |
|---|---|---|---|
| C | Contexto | 🕰️ | "¿Es información vigente o material reciclado sacado de su eje temporal?" |
| A | Autoría | ✍️ | "¿Existe una firma verificable o el emisor se oculta en el anonimato?" |
| F | Fuentes | 🔗 | "¿Se proporcionan enlaces a datos crudos o estudios metodológicos?" |
| E | Emoción | ⚠️ | "¿El titular está diseñado para detonar indignación, miedo o urgencia?" |

Copy introductorio (fijo): "Pasá el cursor sobre los módulos para desencriptar cada criterio de evaluación."

---

## 04 — Tipos o Variantes — "Los 3 Tipos de Desorden Informativo" (`tipos-variantes-section.tsx`)

Copy introductorio (fijo): "No toda información falsa es igual — y no toda información dañina es falsa. Distinguir intención de veracidad es la base para clasificar correctamente lo que circula."

**Los 3 tipos de desorden informativo (grid de 3 tarjetas, fijas, sin variante de audiencia):**

| Tipo | Descripción |
|---|---|
| Desinformación | "Información falsa y creada deliberadamente para dañar a una persona, grupo social, organización o país." |
| Misinformación | "Información falsa, pero no creada con intención de dañar." |
| Malinformación | "Información basada en la realidad (verídica), usada para infligir daño a una persona, organización o país — por ejemplo, filtrar información privada real con intención de perjudicar." |

Fuente compartida por las 3: Wardle, C. & Derakhshan, H. (2017), "Information Disorder: Toward an interdisciplinary framework for research and policy making — Council of Europe" (`https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c`).

**Nota "Tip para el aula" / "Tip para casa" (`pickFamilias(DISORDER_NOTA_DOCENTE, DISORDER_NOTA_FAMILIAS, audienciaActual)`):**

| Docentes | Familias |
|---|---|
| "Esta distinción es más útil en el aula que hablar genéricamente de 'fake news' — los propios autores del marco evitan ese término a propósito, porque simplifica demasiado un fenómeno donde intención y veracidad son dos ejes independientes." | "Esta distinción es más útil en casa que hablar genéricamente de 'fake news' — los propios autores del marco evitan ese término a propósito, porque simplifica demasiado un fenómeno donde intención y veracidad son dos ejes independientes." |

> Nota: las 2 variantes son idénticas salvo "en el aula" ↔ "en casa" — la sustitución más mínima de audiencia observada en las 5 temáticas auditadas hasta ahora.

---

## 05 — Ejemplos Concretos — "Las 3 Fases del Entrenamiento" (`ejemplos-section.tsx`)

Copy introductorio con variante de audiencia (JSX inline, no `pickFamilias`):

| Docentes | Familias |
|---|---|
| "Cada fase incluye un caso de estudio real y un ejercicio que podés llevar directo a una clase." | "Cada fase incluye un caso de estudio real y un ejercicio que podés hacer en casa con tus hijos." |

### Fase 1 — "Investigá la Fuente (Lectura Lateral)" (badge "Búsqueda y Filtro")

- Intro (fija): "Desarrollá el hábito de abandonar temporalmente la página de origen para verificar su reputación en ecosistemas externos."
- Metodología (fija): "Cuando un contenido capte tu atención, no asumas su veracidad por la estética del sitio. Aplicá 'lectura lateral': abrí nuevas pestañas y buscá qué opinan verificadores independientes sobre esa fuente específica."
- Caso de estudio (fijo): '"El café destruye tu memoria" (Publicado en SaludTotalHoy). Al investigar en otra pestaña, los resultados indican que es una granja de contenido falso diseñada para generar ingresos por publicidad.'
- Laboratorio Práctico (varía por audiencia vía `pickFamilias`):
  - Docentes: "Identificá la primera noticia que veas en tus redes. Antes de leerla, abrí una pestaña nueva y buscá el nombre del sitio + 'credibilidad'. Podés repetir el mismo ejercicio con tu curso, usando una noticia que ellos mismos hayan visto circular esa semana."
  - Familias: "Identificá la primera noticia que veas en tus redes. Antes de leerla, abrí una pestaña nueva y buscá el nombre del sitio + 'credibilidad'. Podés repetir el mismo ejercicio con tus hijos, usando una noticia que ellos mismos hayan visto circular esa semana."
- Botón: "Misión Aceptada" (fijo, sin funcionalidad real más allá de estilo hover).

### Fase 2 — "El Detector Analítico (Análisis de Sesgos)" (badge "Evaluación de Evidencia")

- Intro (fija): "Separar rigurosamente los datos empíricos de las afirmaciones emocionales o especulativas."
- Metodología (fija): "La desinformación está diseñada para hackear tus emociones. Neutralizala auditando el lenguaje: buscá adjetivos dramáticos y verificá los enlaces salientes. Si afirman 'un estudio lo prueba' pero no hay enlace a la fuente primaria, clasificalo como sospechoso."
- Caso de estudio (fijo): 'Mensaje viral: "¡URGENTE! Ley confisca ahorros hoy". Análisis: Carencia de número de ley, omisión de fechas, lenguaje alarmista. Veredicto: Intento de manipulación emocional.'
- Laboratorio Práctico:
  - Docentes: "Tomá un mensaje polémico reciente —puede ser uno que haya circulado en el grupo de WhatsApp del curso o entre las familias— y aplicá la matriz de 3 puntos: 1. Autoría, 2. Evidencia documentada, 3. Ganancia emocional del emisor."
  - Familias: "Tomá un mensaje polémico reciente —puede ser uno que haya circulado en el grupo de WhatsApp de la familia o entre las amistades de tus hijos— y aplicá la matriz de 3 puntos: 1. Autoría, 2. Evidencia documentada, 3. Ganancia emocional del emisor."
- Botón: "Aplicar Matriz" (fijo).

### Fase 3 — "El Protocolo Cortafuegos" (badge "Consumo Responsable")

- Intro (fija): "Asumir responsabilidad algorítmica y detener la propagación de cadenas de datos no verificados."
- Metodología (fija): "Antes de redistribuir, asumí la autoría moral del contenido. Implementá un delay cognitivo: si no lográs verificar la información en 60 segundos, abortá la acción de compartir."
- Caso de estudio (fijo): "Foto impactante solicitando donaciones por catástrofe. Acción: búsqueda inversa de imagen en Google. Resultado: la foto es de otro continente hace 5 años."
- Laboratorio Práctico:
  - Docentes: 'Configurá mentalmente un "Delay de 10 segundos". Ante un contenido que genere ira o urgencia, contá hasta 10 antes de tocar compartir — y proponeles a tus estudiantes la misma pausa antes de reenviar algo al grupo del curso.'
  - Familias: 'Configurá mentalmente un "Delay de 10 segundos". Ante un contenido que genere ira o urgencia, contá hasta 10 antes de tocar compartir — y proponeles a tus hijos la misma pausa antes de reenviar algo al grupo familiar.'
- Botón: "Activar Delay" (fijo).

Ninguna de las 3 fases tiene `SourceCite` — son ejercicios propios, no datos atribuidos.

---

## 06 — Ventajas — "Por qué esto importa..." (`ventajas-section.tsx`)

Título con variante de audiencia (JSX inline, no `pickFamilias`):

| Docentes | Familias |
|---|---|
| "Por qué esto importa más allá del aula" | "Por qué esto importa en la vida cotidiana" |

**Cita única de la sección (fija, no varía por audiencia):**
> "La alfabetización mediática e informacional está en el núcleo de la libertad de expresión y de información — empodera a las personas para comprender la función de los medios, evaluar críticamente su contenido, y tomar decisiones informadas. Estas iniciativas buscan fortalecer sociedades mejor informadas, más participativas y más resilientes frente a los desafíos del entorno informativo contemporáneo."
> — UNESCO (`https://www.unesco.org/en/ami`)

> Nota: es la sección más corta de la temática — un único título por audiencia y una sola cita fija, sin más contenido propio.

---

## 07 — Riesgos — "Vulnerabilidades Cognitivas" (`riesgos-section.tsx`)

Sin variante de audiencia. Copy: "Sesgos cognitivos que comprometen el procesamiento de datos:"

| Vulnerabilidad | Descripción | Cita asociada |
|---|---|---|
| 🪞 Sesgo de Confirmación | "Aceptar automáticamente información que valida creencias preexistentes, reduciendo el rigor analítico." | "Descripto por primera vez por el psicólogo británico Peter Wason en 1960, a partir de un experimento donde las personas buscaban sistemáticamente evidencia que confirmara sus hipótesis en vez de ponerlas a prueba." — Wason, P. C. (1960), "'On the failure to eliminate hypotheses in a conceptual task.' Quarterly Journal of Experimental Psychology, 12, 129-140" (sin URL) |
| 😇 Efecto "Halo" | "Transferir autoridad en temas complejos a emisores populares o carismáticos sin credenciales verificables." | "Identificado por el psicólogo estadounidense Edward Thorndike en 1920, en un estudio sobre cómo oficiales militares evaluaban a sus subordinados: una impresión general (buena o mala) distorsionaba la evaluación de rasgos específicos no relacionados. Thorndike mismo señaló que este sesgo también aparece en el aula, cuando una impresión general sobre un estudiante contamina la evaluación de aspectos puntuales de su trabajo." — Thorndike, E. L. (1920), "'A Constant Error in Psychological Ratings.' Journal of Applied Psychology, 4, 25-29" (sin URL) |
| 🧊 Análisis Superficial | "Considerar el titular como un resumen fiel, ignorando que su función principal de diseño es generar clicks." | *(sin cita — `quote: null` en el código)* |

> Nota: la cita de Thorndike menciona explícitamente "también aparece en el aula" como parte del hecho histórico citado (no como adaptación de audiencia) — se muestra igual para familias, incluyendo la mención al aula/estudiante, porque es contenido de la cita académica en sí, no un campo con `pickFamilias`.

---

## 08 — Aula / Casa — "El Docente como Primer Filtro" / "La Familia como Primer Filtro" (`aula-section.tsx`)

Título y eyebrow con variante de audiencia (JSX inline):

| Campo | Docentes | Familias |
|---|---|---|
| Eyebrow | "08 · Qué significa esto para el aula" | "08 · Qué significa esto en casa" |
| Título | "El Docente como Primer Filtro" | "La Familia como Primer Filtro" |

**Síntesis (`pickFamilias(AULA_SINTESIS, AULA_SINTESIS_FAMILIAS, audienciaActual)`):**

- Docentes: "UNESCO tiene un marco específico para esto — el MIL Competency Framework for Teachers — que confirma que dirigir esta temática a docentes no es una adaptación forzada: la alfabetización mediática e informacional está pensada, desde su origen institucional, para formar primero a quien va a formar a otros. El framework C.A.F.E. y el checklist de 5 ítems son exactamente el tipo de herramienta operativa que ese marco pide — y la distinción entre misinformación/desinformación/malinformación le da al docente un vocabulario más preciso que 'fake news' para trabajar con el curso."
- Familias: "La alfabetización mediática e informacional no es una competencia que se aprende solo en la escuela: empieza en casa, con lo que se comparte en el grupo familiar de WhatsApp o lo que circula entre amigos de tus hijos. El framework C.A.F.E. y el checklist de 5 ítems son herramientas simples que podés usar vos misma/o antes de reenviar algo, y después enseñarles el mismo hábito — la distinción entre misinformación/desinformación/malinformación te da un vocabulario más preciso que 'fake news' para hablarlo en casa."

Fuente de la síntesis (fija para ambas variantes): UNESCO (`https://www.unesco.org/en/ami`).

**Elemento interactivo — FAQ acordeón ("Base de Conocimiento", 2 preguntas):**

| id | Pregunta | Respuesta — Docentes | Respuesta — Familias |
|---|---|---|---|
| `faq1` | "¿El proceso de validación retrasa el consumo?" | "La curva de aprendizaje inicial requiere una inversión de tiempo. Sin embargo, al incorporar el método C.A.F.E. como un hábito mental, el cerebro optimiza la detección de información falsa en milisegundos." | *(misma respuesta — no tiene `aFamilias`, cae siempre al valor base)* |
| `faq2` | "Manejo de conflictos al corregir a un estudiante" | "Sé amable al corregir: separar a la persona del error hace que sea más fácil que lo acepte, sobre todo frente al resto del curso. Formato sugerido: 'Esta noticia está armada de forma confusa; veamos juntos qué dicen las fuentes originales...'" | "Sé amable al corregir: separar a la persona del error hace que sea más fácil que lo acepte, sobre todo si hay hermanos o amigos delante. Formato sugerido: 'Esta noticia está armada de forma confusa; veamos juntos qué dicen las fuentes originales...'" |

> Nota: el título de la pregunta `faq2` ("Manejo de conflictos al corregir a **un estudiante**") queda igual para la audiencia familias — solo la respuesta se adapta, no la pregunta en sí.

**Elemento — "Secuencia de Arranque" (2 pasos, fondo oscuro):**

| # | Título | Docentes | Familias |
|---|---|---|---|
| 01 | Limpiá tus redes | "Dejá de seguir al menos 3 cuentas que compartan información sin citar fuentes confiables (podés proponerles a tus estudiantes que hagan el mismo ejercicio con sus propias redes)." | "Dejá de seguir al menos 3 cuentas que compartan información sin citar fuentes confiables (podés proponerles a tus hijos que hagan el mismo ejercicio con sus propias redes)." |
| 02 | Mejorá lo que te muestra la red | "Seguí cuentas de verificadores de noticias confiables para que el algoritmo te muestre contenido de mejor calidad." | *(sin `textoFamilias` — misma para ambas audiencias)* |

---

## 09 — Centro de Recursos — "Checklist, Infografía y Material para el Aula/la Familia" (`recursos-section.tsx` + `media-viewer.tsx`)

Título con variante de audiencia (JSX inline): "Checklist, Infografía y Material para el Aula" (docentes) / "...para la Familia" (familias).

### Elemento interactivo #1 — "Analizador de Viabilidad" (checklist de 5 ítems, persistente vía `useTematicaProgress`)

Copy introductorio con variante de audiencia:
- Docentes: "Ejecutá esta matriz de validación antes de confirmar la distribución de cualquier dato — funciona igual de bien antes de compartir algo en el grupo del curso o de las familias."
- Familias: "Ejecutá esta matriz de validación antes de confirmar la distribución de cualquier dato — funciona igual de bien antes de compartir algo en el grupo familiar o con amistades."

**Los 5 ítems del checklist (`CHECKLIST_ITEMS`, fijos, sin variante de audiencia — a diferencia de `ciudadania-digital`/`huella-digital`):**

1. "He analizado el cuerpo completo del documento, excediendo la lectura del titular."
2. "He contrastado el dominio de origen mediante 'Lectura Lateral' en plataformas independientes."
3. "La fecha de publicación y el contexto original han sido verificados."
4. "El material multimedia ha superado una prueba de búsqueda inversa."
5. "La intención de distribución es objetiva y carece de sesgo emocional impulsivo."

Contador de progreso: "X/5", con estilo de terminal (fondo oscuro, texto mono).

### Elemento interactivo #2 — `MediaViewer` (infografía con lightbox + carrusel)

**Infografía:** `/weekly-content/2026-W20/infografia 2.svg`, alt "Infografía de Alfabetización Mediática". Lightbox de zoom/pan/pinch idéntico al mecanismo de las otras temáticas del sitio (zoom 1x-4x en pasos de 0.5, arrastre, pinch táctil, scroll de mouse, cierre con Escape).

**Carrusel de recursos:** 7 láminas — `/weekly-content/2026-W20/carrusel/1.svg` a `7.svg`. Header del carrusel: "Material para el aula" / "Alfabetización Mediática — Recursos para el Aula" — **este header está hardcodeado fijo, sin `pickFamilias` ni variante de audiencia**, a diferencia de los carruseles equivalentes en `ciudadania-digital`, `huella-digital` e `hiperconectividad-digital`, que sí traducen su label/título según la audiencia.

### Fuentes Citadas (`FUENTES_COMPLETAS`, 5 entradas)

| # | Fuente | URL | Nota |
|---|---|---|---|
| 1 | UNESCO — Media and Information Literacy (MIL) | https://www.unesco.org/en/ami | — |
| 2 | Centro Virtual Cervantes (Instituto Cervantes) — infoxicación, Alfons Cornellà (1996) | https://blogscvc.cervantes.es/martes-neologico/infoxicacion/ | — |
| 3 | Wardle, C. & Derakhshan, H. (2017) — Council of Europe, Information Disorder | https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c | — |
| 4 | Wason, P. C. (1960) — Quarterly Journal of Experimental Psychology, 12, 129-140 | *(sin URL)* | "referencia bibliográfica estándar, sin edición digital gratuita" |
| 5 | Thorndike, E. L. (1920) — Journal of Applied Psychology, 4, 25-29 | *(sin URL)* | "referencia bibliográfica estándar, sin edición digital gratuita" |

> A diferencia de las 4 temáticas auditadas previamente, este listado **sí incluye TODAS las fuentes citadas inline** en la página (no hay ninguna fuente mencionada en el cuerpo que falte en `FUENTES_COMPLETAS`) — es la primera de las 5 temáticas auditadas sin esta inconsistencia.

---

## Todas las fuentes citadas, consolidado

**Ninguna fuente usa `unverified: true`** en todo el archivo — el campo existe en la interfaz `Source` pero no se usa ni una vez. En su lugar, el `SourceCite` de esta temática infiere "sin verificar" (visualmente: badge ámbar "referencia bibliográfica") automáticamente de la ausencia de `url` — lo que aplica a Wason (1960) y Thorndike (1920), las 2 únicas fuentes sin URL de la temática. Esto es funcionalmente parecido al patrón `unverified` de las otras temáticas, pero semánticamente distinto: aquí "sin verificar" == "sin link digital", no "contenido con la exactitud puesta en duda" — ver hallazgos.

**Fuentes con URL (verificadas):** UNESCO (citada 6 veces distintas: `MIL_QUOTE`, `MIL_ORIGEN_QUOTE`, `MIL_DOCENTES_QUOTE`, `MIL_FAMILIAS_QUOTE`, `INFOXICACION_AGRAVAMIENTO_QUOTE`, `VENTAJAS_QUOTE`, `AULA_SINTESIS_SOURCE` — la fuente más repetida de la temática, con 7 citas), Centro Virtual Cervantes, Wardle & Derakhshan/Council of Europe.

**Fuentes sin URL ("referencia bibliográfica" en el badge, pese a no tener `unverified: true`):** Wason (1960), Thorndike (1920).

---

## Resumen de hallazgos para el rediseño

1. **3 mecanismos de audiencia distintos conviven en la misma temática**: (a) `pickFamilias` desde `lib` para valores predefinidos (`MIL_DOCENTES_QUOTE`/`MIL_FAMILIAS_QUOTE`, `DISORDER_NOTA_DOCENTE`/`FAMILIAS`, `labTexto`/`labTextoFamilias`, `AULA_SINTESIS`/`FAMILIAS`, `faq.a`/`aFamilias`, `paso.texto`/`textoFamilias`); (b) ternarios JSX inline con `esFamilias` directamente en los componentes, sin pasar por `lib` (Hero: párrafo intro y objetivo principal; Ventajas: título; Aula: eyebrow y título; Recursos: título e intro del checklist); (c) campos opcionales que simplemente no tienen variante familias definida y caen siempre al valor base (`faq1` sin `aFamilias`, paso 02 de Secuencia de Arranque sin `textoFamilias`). El rediseño se beneficiaría de unificar esto en un solo mecanismo.
2. **El gráfico de dona del Hero ("70% lee solo el título / 30% análisis completo") no tiene fuente atribuida** — es el único elemento de tipo "estadística visual" de toda la temática sin `SourceCite`, pese a que el resto de la página cita todo, incluidas afirmaciones de menor peso.
3. **`unverified: true` nunca se usa en este archivo**, a diferencia de las 4 temáticas auditadas previamente (`ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `alfabetizacion-digital`), que sí marcan explícitamente fuentes dudosas/de segunda mano con ese flag. Acá el propio `SourceCite` deriva "sin verificar" solo de la ausencia de `url`, lo que confunde dos conceptos distintos: "no tiene link digital" (Wason 1960, Thorndike 1920 — referencias académicas sólidas, simplemente antiguas y sin edición online gratuita) vs. "el contenido en sí está en duda" (el uso real de `unverified` en las otras temáticas). Esto puede llevar a error al usuario: ve el mismo badge ámbar para una cita de 1960 perfectamente confiable que para lo que en otras temáticas sería una cifra sin confirmar.
4. **Es la única de las 5 temáticas auditadas sin `TocNav` propio** — usa el componente compartido `ReadingProgressBar` en su lugar. Si el objetivo del rediseño es unificar el patrón de navegación entre las temáticas del grupo "Alfabetización", esto es una decisión a revisar explícitamente.
5. **El header del carrusel de recursos no varía por audiencia** ("Material para el aula" / "Alfabetización Mediática — Recursos para el Aula" fijos), a diferencia de los carruseles equivalentes en `ciudadania-digital`, `huella-digital` e `hiperconectividad-digital`, que sí traducen label y título. Inconsistencia de patrón entre temáticas hermanas.
6. **La pregunta de la FAQ 2 no se adapta a audiencia, solo la respuesta** ("Manejo de conflictos al corregir a un estudiante" se muestra igual para familias) — mismo patrón de "traducción parcial" visto en otras auditorías del sitio.
7. **2 campos opcionales de audiencia simplemente no fueron completados** (`faq1.aFamilias`, paso 02 de `SECUENCIA_ARRANQUE.textoFamilias`) — a diferencia de `alfabetizacion-digital`, donde el campo sin completar (`CONCEPTO_NOTA_FAMILIAS`) al menos se documenta explícitamente como pendiente en un comentario; acá no hay comentario que señale la ausencia, es simplemente el comportamiento por defecto de un campo opcional no seteado.
8. **Fondo con "ambient blobs" + textura de ruido SVG son exclusivos de esta temática** dentro del grupo "Alfabetización" — `alfabetizacion-digital` usa un fondo de degradado con orbes con parallax distinto. Vale la pena decidir en el rediseño si se busca una identidad visual compartida entre ambas temáticas del grupo o se mantienen como decorados propios.
9. **UNESCO es la fuente más repetida de toda la temática (7 citas distintas)** sin que ninguna de esas 7 citas tenga una nota que las diferencie entre sí más allá del texto — todas apuntan a la misma URL genérica (`https://www.unesco.org/en/ami`), no a documentos o páginas específicas del marco MIL, lo que dificulta que un lector verifique una afirmación puntual dentro del sitio de UNESCO.
10. **La cita de Thorndike (Riesgos) menciona "el aula"/"un estudiante" como parte del hallazgo académico citado**, no como adaptación de audiencia — se muestra igual a la audiencia familias incluyendo esa mención, lo cual es coherente porque es un dato histórico real (Thorndike estudió oficiales militares y esa mención al aula es del propio Thorndike, según la nota), pero vale la pena revisar en el rediseño si conviene aclarar o generalizar esa frase para la audiencia familias.
