# Auditoría de contenido — Algoritmos y Perfilado

Base para rediseño. Recorrido completo de la entrada `algoritmos-perfilado` en `lib/libres-bajo-influencia-data.ts` (líneas 218-295 de 629 totales) y `components/tematicas/AlgoritmosPerfiladoPage.tsx` (962 líneas, componente standalone propio). Solo lectura, nada modificado.

Ruta: `/tematicas/algoritmos-perfilado`. Layout: scroll continuo de 8 bloques (Hero, Introducción con simulador interactivo, 4 secciones de contenido con layout uniforme de imagen editorial, Caso de estudio, Cita de cierre, Material de estudio, Fuentes académicas, Evaluación/Quiz). Estructura considerablemente más simple que `subculturas-digitales`: **solo 4 secciones de contenido** (vs. 8) y **un único layout visual reutilizado** para las 4 (vs. 4 layouts bespoke distintos por sección en `subculturas-digitales`) — el propio comentario del código señala explícitamente que sigue "el mismo criterio que SubculturasDigitalesPage".

Progreso vía `useTematicaProgress` con el `computeProgress` compartido del hook (`computeQuizProgress`, score ≥ 8/10 marca completado automáticamente). **No hay `TematicaCompletarButton`** — mismo patrón que `subculturas-digitales`: la finalización depende exclusivamente de aprobar el quiz, sin botón manual.

**Patrón de audiencia confirmado: bespoke binario**, idéntico en mecanismo a `subculturas-digitales` (ternarios inline `audienciaActual === 'familias' && campo.Familias ? campo.Familias : campo`, sin `resolveTexto` ni `<NotaAudiencia>`). Cobertura de audiencia **mínima**: solo el `intro`/`introFamilias` de nivel raíz y **una única de las 4 secciones** ("Qué significa esto para el aula/casa") tienen variante escrita — las otras 3 secciones ("De la señal al perfil", "Clasificar nunca es neutral", "La cara ambivalente de la personalización") son 100% fijas sin importar la audiencia. Es la cobertura de audiencia más baja de las 2 temáticas del grupo "Libres bajo influencia" auditadas hasta ahora.

**No usa `SourceCite`** — mismos 2 mecanismos de atribución que `subculturas-digitales` (badge sobre imagen vía `EditorialImageFrame`, aquí simplificado: solo nombre + link, sin el chip adicional junto al número de sección) **más una tercera sección final propia, "Fuentes Oficiales, Datos Estadísticos y Citas Verificables"** (`ACADEMIC_CITATIONS`, 7 entradas) que agrega un campo `stat` no presente en el `VERIFIED_ACADEMIC_SOURCES` de `subculturas-digitales` — una cifra o dato destacado por fuente. **A diferencia de `subculturas-digitales`, acá `data.authors` SÍ se renderiza** (como chips en el Hero) — ver detalle abajo.

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `algoritmos-perfilado`
- **Categoría:** "Datos y algoritmos"
- **Color de marca:** `#2563EB` (azul)
- **Descripción** (usada como bajada del Hero): "Cómo cada gesto digital deja una señal, cómo esas señales se convierten en un perfil, y qué significa realmente que un sistema 'nos conozca'."
- **`authors` (4 nombres, SÍ renderizados en pantalla — ver Hero):** Shoshana Zuboff, Daniel Solove, Michel Foucault, Eli Pariser.
- **`audiencias`:** `['docentes', 'familias']`
- **Material adjunto:** `pdfUrl` (`/img/tematicas/algoritmos-perfilado/presentacion.pdf`, label "Presentación — Algoritmos y perfilado"), `infografiaUrl` (`/img/tematicas/algoritmos-perfilado/infografia.webp`, alt "Infografía de Algoritmos y perfilado").

---

## Hero

Badges fijos: "// Datos y algoritmos" (categoría) + "Modelos de Predicción & Datos". H1 fijo: "Algoritmos y perfilado" (`data.title`). Bajada fija (`data.description`): "Cómo cada gesto digital deja una señal, cómo esas señales se convierten en un perfil, y qué significa realmente que un sistema 'nos conozca'."

**Chips de autores citados (`data.authors`, renderizados literalmente — a diferencia de `subculturas-digitales`, donde el campo equivalente nunca se muestra):**
> "Marcos teóricos y autores citados:" → Shoshana Zuboff · Daniel Solove · Michel Foucault · Eli Pariser

**2 CTAs:** "Explorar la clase completa" (scroll a `#contenido`), "Material y Slides" (scroll a `#material`).

**Imagen del Hero** con badge de cita: "Shoshana Zuboff (2019)" → `https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/`, label visual "Capitalismo de Vigilancia".

> Nota: esta temática no tiene índice de secciones tappeable en el Hero (a diferencia de `subculturas-digitales`, que sí tiene 8 botones numerados) ni fragmentos flotantes decorativos — Hero más austero.

---

## Introducción — "De la acción a la predicción" (`id="contenido"`)

### `intro`/`introFamilias` — única variante de audiencia a nivel de intro

| Docentes (y toda audiencia sin selección) | Familias |
|---|---|
| "Cuando pensamos en 'datos personales' imaginamos el nombre, el domicilio, la fecha de nacimiento. Pero comunicamos muchísimo más con nuestras acciones: buscar, mirar, pausar, descartar, comentar, volver. Ninguno de esos gestos revela exactamente quiénes somos, pero juntos permiten encontrar regularidades. Shoshana Zuboff usa una expresión fuerte para describir esto: capitalismo de vigilancia — modelos de negocio que toman experiencias humanas y las transforman en datos, y esos datos en productos de predicción. Y esto conviene tenerlo claro, porque desactiva un poco el miedo: no hace falta imaginar una plataforma que lo sabe todo. Le alcanza con estimar qué es lo que probablemente va a captar nuestra atención. No adivina el alma. Calcula la probabilidad. Esto también pasa **en el aula: la mayoría de las plataformas educativas que un estudiante usa hoy —desde una app de tareas hasta un sistema de gestión de aula— también recolecta señales y construye, aunque no lo diga con esas palabras, un perfil.**" | Idéntico hasta "Calcula la probabilidad." Luego: "Esto también pasa **en casa: la mayoría de las apps que tus hijos usan hoy —desde juegos hasta redes sociales— también recolecta señales y construye, aunque no lo diga con esas palabras, un perfil.**" |

### Elemento interactivo — "Simulador de Inferencia Algorítmica" (`SignalInferenceSimulator`), único de esta temática

**Mecanismo:** el usuario marca/desmarca 6 "señales digitales simuladas" (checkboxes tipo tarjeta); cada una suma pesos a 5 categorías de perfil, que se muestran como barras de progreso animadas con porcentaje. Por defecto, 2 señales están premarcadas ("Detenerse 4s en video sobre rutinas nocturnas" y "Buscar mapa de ubicación a las 23:00hs").

**Las 6 señales seleccionables (`SIGNAL_OPTIONS`):**

| Etiqueta | Categoría | Pesos que aporta |
|---|---|---|
| Detenerse 4s en video sobre rutinas nocturnas | Atención & Interés | tech +15, routine +40, buy +10 |
| Buscar mapa de ubicación a las 23:00hs | Patrón Espacial | spatial +45, routine +30, buy +5 |
| Guardar publicación de cocina saludable | Hábitos de Consumo | health +40, buy +20, tech +5 |
| Descartar anuncio de calzado deportivo | Preferencia de Marca | buy -15, tech +10, health +5 |
| Volver a reproducir audio de podcast de ciencia | Capital Cultural | tech +35, health +25, routine +15 |
| Comentar en debate sobre privacidad digital | Perfil Político / Social | tech +40, spatial +20, routine +20 |

**Las 5 barras del "Perfil Probabilístico Inferido" resultante** (cada una parte de una base de 5-20 puntos y suma los pesos de las señales activas, con tope 5-98%):
- Interés en Tecnología & Privacidad (base 20)
- Patrón de Recorrido & Rutina Espacial (base 15)
- Receptividad a Contenido Nocturno (base 10)
- Afinidad a Estilo de Vida Saludable (base 10)
- Intención de Compra (base 15)

Indicador de "Confianza" del perfil: "Alta" si hay ≥1 señal seleccionada, "Baja" si no hay ninguna (no es una escala gradual real, es binario).

Cita fija dentro del simulador: '💡 Cita clave (Shoshana Zuboff): "No adivina el alma. Calcula la probabilidad acumulando acciones."'

> Nota: los pesos y porcentajes del simulador son enteramente ficticios/ilustrativos (no basados en un modelo real de ningún sistema) — funciona como metáfora pedagógica de "cómo se acumulan señales", no como una demostración de un algoritmo real, lo cual es coherente con el propósito educativo pero vale la pena que el rediseño lo deje explícito si no lo está ya (no hay ningún disclaimer visible sobre esto en el texto que acompaña al widget).

---

## Las 4 secciones de contenido (layout uniforme: imagen editorial + texto + cita)

Todas comparten el mismo layout visual (`EditorialImageFrame` alternando lado izquierda/derecha, colores alternando azul/violeta), a diferencia de los 4 layouts bespoke distintos de `subculturas-digitales`.

### Sección 01 — "De la señal al perfil" (sin variante de audiencia)

Imagen/fuente: "Zuboff & Solove" → `https://scholarship.law.upenn.edu/penn_law_review/vol154/iss3/1/`

**Contenido (fijo, 2 párrafos):**
> "¿Cómo se convierten esas señales sueltas en una versión probable de nosotros? Se acumulan, y aparecen las inferencias: probablemente le interesa este tema, suele conectarse a esta hora, capaz reacciona a este mensaje. Con esas inferencias se arma un perfil."
>
> "Daniel Solove ayuda a ampliar la idea de privacidad: no es solamente guardar un secreto. También importa cómo se recoge la información, cómo se procesa, cómo se combina, cómo se difunde y para qué se usa. Y esto es lo más contraintuitivo: una ubicación aislada dice poco, pero una serie de ubicaciones puede revelar toda mi rutina — dónde vivo, dónde trabajo, a qué hora salgo, dónde está la escuela de mis hijos. No solo compartimos datos: compartimos contextos, rutinas y patrones."

**Cita de cierre:** "No adivinan quiénes somos: construyen una versión probable, y actúan sobre esa probabilidad."

### Sección 02 — "Clasificar nunca es neutral" (sin variante de audiencia)

Imagen/fuente: Michel Foucault → `https://www.gallimard.fr/catalogue/surveiller-et-punir/9782070729685`

**Contenido (fijo, 2 párrafos):**
> "Cuando esos patrones se vuelven categorías, aparece la clasificación. Para recomendarme algo, el sistema necesita volverme legible. Para segmentarme, necesita agruparme. Para priorizar, tiene que decidir qué me muestra primero y qué queda afuera. Michel Foucault mostró hace décadas que las clasificaciones nunca son neutrales: producen normas y producen efectos de poder. Clasificar puede ser útil — ordena contenidos, detecta fraudes — pero el problema aparece cuando la categoría es opaca, rígida, discriminatoria o imposible de discutir."
>
> "La discriminación algorítmica más difícil de detectar no grita, no rechaza en la cara. A veces, simplemente, nunca nos muestra una beca, un empleo, una oportunidad. Y uno nunca se entera de lo que no vio."

**Cita de cierre:** "Una persona siempre es más compleja que la categoría que un sistema le asigna."

### Sección 03 — "La cara ambivalente de la personalización" (sin variante de audiencia)

Imagen/fuente: Eli Pariser (2011) → `https://www.penguinrandomhouse.com/books/309214/the-filter-bubble-by-eli-pariser/`

**Contenido (fijo, 2 párrafos):**
> "Personalizar ayuda: reduce ruido, acerca cosas relevantes. Pero también simplifica, encierra y puede reforzar sesgos. Eli Pariser popularizó la idea de la 'burbuja de filtros'; la evidencia posterior la volvió más matizada — no es solo el algoritmo, también intervienen nuestras propias elecciones, nuestros grupos y los incentivos comerciales."
>
> "La pregunta, entonces, no es 'toda personalización o ninguna'. La pregunta es cuánto poder le queremos dar a un perfil para que decida qué podemos conocer, comprar, creer o descubrir."

**Cita de cierre:** "Cuando una etiqueta empieza a decidir por nosotros, la libertad se achica."

### Sección 04 — "Qué significa esto para el aula" / "Qué significa esto para tu casa" (ÚNICA sección con variante de audiencia completa)

Imagen/fuente: fallback genérico "Referencia Teórica" → `https://josefarhat.com` (no tiene entrada propia en `SECTION_VISUALS`, que solo cubre las 3 secciones anteriores — cae al valor por defecto del componente).

| Campo | Docentes | Familias |
|---|---|---|
| Heading | "Qué significa esto para el aula" | "Qué significa esto para tu casa" |

**Párrafos:**

| Docentes | Familias |
|---|---|
| "Enseñar a leer esto es, ni más ni menos, una forma de alfabetización algorítmica: entender que cada clic, cada pausa y cada búsqueda deja una huella que alguien, en algún lugar, está interpretando." | "Ayudar a tus hijos a leer esto es, ni más ni menos, una forma de alfabetización algorítmica: entender que cada clic, cada pausa y cada búsqueda deja una huella que alguien, en algún lugar, está interpretando." |
| "De ahí se desprenden algunas orientaciones concretas. Explicar que los datos no son solo lo que se completa en un formulario, sino también lo que se hace: buscar, mirar, pausar, volver. Proponer un ejercicio simple y revelador: comparar el feed de dos **estudiantes** frente al mismo tema y notar cuánto cambia, para que la burbuja de filtros deje de ser un concepto abstracto y se vuelva algo visible. Trabajar la pregunta '¿por qué me está mostrando esto?' como un hábito crítico, no como paranoia. Y nombrar, sin dramatismo, que la discriminación algorítmica más difícil de ver es la que nunca muestra una oportunidad, para que **un estudiante** entienda que no todo lo que no aparece es azar." | "De ahí se desprenden algunas orientaciones concretas. Explicarles que los datos no son solo lo que se completa en un formulario, sino también lo que se hace: buscar, mirar, pausar, volver. Proponer un ejercicio simple y revelador **en casa**: comparar el feed de dos **personas de la familia** frente al mismo tema y notar cuánto cambia, para que la burbuja de filtros deje de ser un concepto abstracto y se vuelva algo visible. Trabajar la pregunta '¿por qué me está mostrando esto?' como un hábito crítico, no como paranoia. Y nombrar, sin dramatismo, que la discriminación algorítmica más difícil de ver es la que nunca muestra una oportunidad, para que **tu hijo o hija** entienda que no todo lo que no aparece es azar." |

**Cita de cierre:**

| Docentes | Familias |
|---|---|
| "En el aula, tal como en cualquier plataforma, cada clic construye una versión probable de quién es cada estudiante — enseñar a notarlo es el primer paso para no quedar del todo a merced de esa versión." | "En casa, tal como en cualquier plataforma, cada clic construye una versión probable de quién es cada uno de tus hijos — enseñarles a notarlo es el primer paso para no quedar del todo a merced de esa versión." |

---

## Caso de estudio — Cambridge Analytica (`id="caso"`)

Badge: "Un caso para pensar" (`data.caseStudy.label`). Sin variante de audiencia. Fondo oscuro (única sección con este tratamiento visual).

> "La distancia entre el gesto inicial —responder un cuestionario aparentemente inocente— y el uso final de esos datos fue enorme. La Comisión Federal de Comercio de Estados Unidos (FTC) concluyó que se usaron prácticas engañosas para obtener datos de decenas de millones de usuarios de Facebook con fines de perfilado y segmentación política. No toda recomendación es Cambridge Analytica —que te sugieran una serie no es una conspiración— pero el caso sirve para mostrar hasta dónde puede viajar un dato que la persona nunca imaginó ni entendió cuando dio el primer clic."

**Línea de verificación al pie (fija, único caso de esta temática con una nota de "fuente de verificación" separada del cuerpo del texto):**
> "Fuente de verificación oficial: Federal Trade Commission (FTC) Settlement ($5B Penalty)." — con link "Comunicado oficial FTC ↗" → `https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook`

---

## Cita de cierre y refuerzo

Sin variante de audiencia. Fondo degradado azul/índigo (no negro puro como en `subculturas-digitales`).

> "No solo compartimos datos: compartimos contextos, rutinas y patrones."

> Nota: a diferencia de `subculturas-digitales`, esta cita de cierre **no lleva atribución a José Farhat ni a la conferencia de origen** — se muestra sola, sin firma.

---

## Material de estudio — Presentación en Slides e Infografía Visual (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`** (mismo componente compartido que en `subculturas-digitales`): 15 diapositivas `.webp` (`/img/tematicas/algoritmos-perfilado/slides/`), botón de descarga del PDF (`/img/tematicas/algoritmos-perfilado/presentacion.pdf`).

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mecanismo compartido vía `useLibresSubtopic`). Imagen: `/img/tematicas/algoritmos-perfilado/infografia.webp`.

---

## Fuentes Oficiales, Datos Estadísticos y Citas Verificables (`ACADEMIC_CITATIONS`, 7 entradas)

Badge de conteo visible en pantalla: "7 Citas Académicas & Legales". Cada tarjeta incluye, además de autor/título/publicación/tema/link, un campo **`stat`** — una cifra o hallazgo destacado que no existe en el listado equivalente de `subculturas-digitales`:

| Autor | Título | Publicación | Tema | Stat destacado | URL |
|---|---|---|---|---|---|
| Shoshana Zuboff (2019) | The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power | PublicAffairs / Hachette Book Group | Capitalismo de vigilancia y productos de predicción del comportamiento | "Modelos predictivos que transforman datos en mercancía" | https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/ |
| Federal Trade Commission (FTC, 2019) | FTC Imposes $5 Billion Penalty and Sweeping New Privacy Restrictions on Facebook | Comisión Federal de Comercio de EE.UU. (FTC Official Release) | Caso Cambridge Analytica: obtención engañosa de datos y perfilado político | "Sanción oficial de $5,000,000,000 USD (87M de usuarios afectados)" | https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook |
| Pew Research Center (2023) | How Americans View Data Privacy | Pew Research Center Internet & Technology | Percepción pública sobre los riesgos de la recolección algorítmica de datos | "81% cree que los riesgos de que las empresas recopilen sus datos superan los beneficios" | https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/ |
| UNICEF (2023) | Checklist de privacidad en línea para padres y madres | UNICEF (guía elaborada junto a la Agencia Española de Protección de Datos, AEPD) | Orientaciones oficiales para proteger datos y privacidad de niñas, niños y adolescentes | "Recomendaciones oficiales de UNICEF para el cuidado de datos de la infancia online" | https://www.unicef.org/chile/checklist-de-privacidad-en-linea-para-padres-y-madres |
| Daniel J. Solove (2006) | A Taxonomy of Privacy | University of Pennsylvania Law Review, Vol. 154 | Taxonomía de la privacidad: recolección, procesamiento y agregación de patrones | "Agregación de patrones de recorrido e inferencia de contexto" | https://repository.law.upenn.edu/Documents/Detail/a-taxonomy-of-privacy/153988 |
| Michel Foucault (1975) | Surveiller et punir: Naissance de la prison | Éditions Gallimard | Poder disciplinario, norma y efectos de la clasificación social | "Efectos de poder de las categorizaciones institucionales y digitales" | https://www.gallimard.fr/catalogue/surveiller-et-punir/9782070729685 |
| Eli Pariser (2011) | The Filter Bubble: What the Internet Is Hiding from You | Penguin Press | Burbujas de filtro y algoritmos de personalización selectiva | "Sesgos de confirmación y aislamiento de visiones diversas" | https://www.penguinrandomhouse.com/books/309214/the-filter-bubble-by-eli-pariser/ |

> Notas:
> - **De las 7 fuentes, solo 2 tienen una cifra numérica real** (FTC: $5.000.000.000 / 87M de usuarios; Pew Research: 81%) — las otras 5 tienen un `stat` que en realidad es una reformulación temática, no un dato cuantitativo, pese a presentarse en el mismo formato visual "📊" que sugiere estadística.
> - **UNICEF (2023) es una fuente mencionada acá pero que no aparece citada en ningún punto del cuerpo del texto** de las 4 secciones ni de la introducción — es la única de las 7 fuentes de este listado sin una cita o mención inline correspondiente en el resto de la página (aparece "de la nada" en este bloque final).
> - Ningún link apunta a un recurso obviamente incorrecto (a diferencia de otras temáticas auditadas), aunque el de Foucault y Pariser son páginas de catálogo editorial genéricas, no el texto/recurso específico.
> - **Ninguna fuente está marcada como "sin verificar"** — igual que `subculturas-digitales`, no existe el concepto `unverified` en esta temática.

---

## Cuestionario de Comprensión — Quiz (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas de opción múltiple**, mismo mecanismo compartido (`useLibresSubtopic`) que marca la finalización automáticamente al alcanzar score ≥ 8/10.

**Diferencias notables respecto de la implementación de `subculturas-digitales`:**
- **No hay pantalla inicial de presentación del quiz** ("X preguntas, necesitás 8/10 para completarla") — el componente destructura `showQuiz` del hook pero nunca lo usa para condicionar el render; la primera pregunta se muestra directamente al llegar a la sección.
- **No se muestra el resultado de un intento anterior** — `previousResult` se destructura del hook pero tampoco se usa en el JSX.
- **La pantalla de resultados no distingue aprobado/no aprobado** — la variable `passed` se destructura pero nunca se usa: el mensaje final ("¡Cuestionario Completado!" + "Obtuviste X de 10 respuestas correctas") es siempre el mismo texto neutro, sin indicar si la persona alcanzó el umbral de 8/10 que en efecto determina si la temática queda marcada como completada. El usuario no tiene forma de saber, leyendo la pantalla de resultados, si "completó" la temática o no.
- **Sin barra de progreso circular animada ni contador incremental** (`useCountUp`) como en `subculturas-digitales` — el score se muestra como texto plano ("Obtuviste 7 de 10").

**Las 10 preguntas completas:**

1. "Según la charla, ¿con qué comunicamos 'muchísimo más' que con nuestros datos de nombre o domicilio?" → Correcta: "Con nuestras acciones: buscar, mirar, pausar, descartar, comentar, volver"
2. "¿Qué describe la expresión 'capitalismo de vigilancia' de Shoshana Zuboff?" → Correcta: "Modelos de negocio que transforman experiencias humanas en datos, y esos datos en productos de predicción"
3. "Según la charla, ¿qué significa realmente que una plataforma 'sepa' qué nos interesa?" → Correcta: "Que estima, con datos, qué probablemente va a captar nuestra atención — calcula probabilidad, no adivina el alma"
4. "¿Qué aporta Daniel Solove a la idea de privacidad?" → Correcta: "Que también importa cómo se recoge, procesa, combina y difunde la información, no solo si es secreta"
5. "¿Por qué dice la charla que 'una serie de ubicaciones' es más reveladora que una ubicación aislada?" → Correcta: "Porque en conjunto pueden revelar toda una rutina: dónde vivo, dónde trabajo, dónde está la escuela de mis hijos"
6. "¿Qué mostró Michel Foucault sobre las clasificaciones?" → Correcta: "Que nunca son neutrales: producen normas y efectos de poder"
7. "¿Por qué la charla dice que la discriminación algorítmica 'no grita'?" → Correcta: "Porque a veces simplemente nunca nos muestra una beca, un empleo o una oportunidad, y nunca nos enteramos de lo que no vimos"
8. "¿Qué reveló el caso Cambridge Analytica según la FTC?" → Correcta: "Que se usaron prácticas engañosas para obtener datos de decenas de millones de usuarios con fines de perfilado político"
9. "¿Qué plantea la idea de 'burbuja de filtros' de Eli Pariser, según la versión matizada que menciona la charla?" → Correcta: "Que existe, pero no depende solo del algoritmo: también influyen nuestras elecciones, nuestros grupos y los incentivos comerciales"
10. "Según la charla, ¿cuál es la pregunta correcta frente a la personalización?" → Correcta: "Cuánto poder le queremos dar a un perfil para que decida qué podemos conocer, comprar, creer o descubrir"

Ninguna pregunta ni sus opciones varían por audiencia.

---

## Resumen de hallazgos para el rediseño

1. **La pantalla de resultados del quiz no informa si la persona aprobó o no** — la variable `passed` se calcula en el hook compartido pero nunca se usa en este componente, a diferencia de `subculturas-digitales`, donde el resultado muestra explícitamente "¡Completaste esta temática!" o "Todavía no llegaste al puntaje mínimo" con colores distintos (verde/ámbar). Acá el usuario solo ve "Obtuviste X de 10" sin saber si eso alcanzó el umbral que determina si la temática cuenta como completada en su progreso.
2. **`showQuiz` y `previousResult` se destructuran del hook compartido pero nunca se usan** — el quiz no tiene pantalla de bienvenida/instrucciones (número de preguntas, umbral necesario) ni muestra el resultado de un intento previo al volver a la página, a diferencia de `subculturas-digitales`.
3. **Solo 1 de las 4 secciones de contenido tiene variante de audiencia** (la de "aula/casa") — proporción aún más baja que `subculturas-digitales` (que tenía 4 de 8). Combinado con el `intro`/`introFamilias` de nivel raíz, hay solo 2 puntos de variación en toda la temática.
4. **`UNICEF (2023)` aparece en el listado final de fuentes sin ninguna mención o cita correspondiente en el cuerpo del texto** — es la única de las 7 fuentes que no respalda ninguna afirmación específica hecha en las secciones o la introducción; parece agregada como referencia de utilidad general más que como cita de una idea puntual del texto.
5. **El campo `stat` de 5 de las 7 fuentes no es una estadística real** sino una reformulación temática del tema de la fuente, pese a presentarse con el mismo ícono "📊" que en las 2 fuentes que sí tienen cifras numéricas (FTC, Pew Research) — puede leerse como si todas aportaran un dato duro cuando no es el caso.
6. **El simulador de inferencia algorítmica (`SignalInferenceSimulator`) usa pesos y porcentajes completamente ficticios** sin ningún disclaimer visible que aclare que es una metáfora pedagógica y no una demostración de un modelo real — riesgo de que un usuario interprete los números como representativos de cómo funcionan los sistemas reales de perfilado.
7. **La cita de cierre no tiene atribución** ("No solo compartimos datos: compartimos contextos, rutinas y patrones." sin firma) — a diferencia de `subculturas-digitales`, cuya cita de cierre equivalente sí se atribuye a "José Farhat · Conferencia 'Libres Bajo Influencia'".
8. **`data.authors` SÍ se renderiza acá** (a diferencia de `subculturas-digitales`, donde el mismo campo nunca llega a pantalla) — inconsistencia de tratamiento del mismo campo de datos entre 2 temáticas del mismo grupo con estructura de datos compartida.
9. **Estructura visual considerablemente más simple que `subculturas-digitales`**: 4 secciones con un único layout reutilizado (vs. 8 secciones con 4 layouts bespoke), sin índice de secciones tappeable en el Hero, sin fragmentos decorativos flotantes — más cercana a un artículo largo tradicional que a la "revista interactiva" que es `subculturas-digitales`. Vale la pena decidir en el rediseño si se busca uniformar el nivel de interactividad entre las 6 temáticas del grupo o mantener esta variación.
10. **El caso de estudio (Cambridge Analytica) es idéntico verbatim al de `subculturas-digitales`** en el sentido de que ambas temáticas citan a la FTC y el mismo hecho histórico — pero acá tiene una línea de "Fuente de verificación oficial" adicional al pie que no existe en el caso de estudio de `subculturas-digitales` ("Sofía, catorce años"), que es un caso ficticio/ilustrativo distinto sin necesidad de esa verificación. Confirmar que ambos casos de estudio (ficticio vs. real-documentado) se sigan tratando con el rigor de atribución que corresponde a cada uno en el rediseño.
