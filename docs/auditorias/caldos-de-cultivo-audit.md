# Auditoría de contenido — Caldos de Cultivo

Base para rediseño. Recorrido completo de la entrada `caldos-de-cultivo` en `lib/libres-bajo-influencia-data.ts` (líneas 379-484 de 629 totales) y `components/tematicas/CaldosDeCultivoPage.tsx` (1802 líneas — la más extensa de las 4 temáticas del grupo "Libres bajo influencia" auditadas hasta ahora, superando incluso a `diseno-persuasivo-patrones-oscuros`). Solo lectura, nada modificado.

Ruta: `/tematicas/caldos-de-cultivo`. Layout: scroll continuo de **17 bloques**: Hero + ticker de estadísticas, Introducción con widget "Mezclador del Pasto Seco", Módulo 01 "Fundamentos Teóricos" (3 tarjetas + Inspector de Patrones Oscuros en un mockup de smartphone), 6 secciones de contenido base, Módulo 02 "Microtargeting y Cámaras de Eco" (2 tarjetas de investigación + Simulador de Cámara de Eco con slider), Casos de Estudio (caso principal + 2 casos adicionales), Módulo 03 "Deepfakes y Autodiagnóstico" (2 tarjetas), "Verdad o Mito Viral" (fact-check challenge), Dashboard estadístico (con **gráficos reales de Recharts**, único caso de visualización de datos con librería de gráficos de las 4 temáticas auditadas del grupo), Cita de cierre, Material de estudio, Módulo 05 "Mini-Test de Inmunidad Digital", Fuentes académicas (con **buscador filtrable en vivo**, único caso entre las 4 temáticas), Evaluación/Quiz oficial.

Progreso vía `useTematicaProgress` con `computeQuizProgress` compartido. **No hay `TematicaCompletarButton`** — mismo patrón del grupo.

**Patrón de audiencia: bespoke binario**, mismo mecanismo que las otras 3 temáticas del grupo. **A diferencia de `algoritmos-perfilado`/`diseno-persuasivo-patrones-oscuros` (que concentran la variante de audiencia en una única sección "aula/casa" con heading+quote), esta temática distribuye `paragraphsFamilias` en 3 de las 6 secciones base, sin ninguna sección de heading/quote propios por audiencia** — el propio comentario del código lo aclara: "la voz docente está repartida en 3 secciones (sin heading/quote propios) en vez de concentrada en un cierre — heading y quote no tienen variante en esta temática." No hay sección "Qué significa esto para el aula/casa" en absoluto. Tampoco hay variante `introFamilias` a nivel raíz (a diferencia de las otras 3 temáticas del grupo, que sí la tienen).

**No usa `SourceCite`** — mismos mecanismos que el resto del grupo (badge sobre imagen vía `EditorialImageFrame`, sección final de fuentes con formato ficha bibliográfica + campo `stat`), pero acá el listado final (`ACADEMIC_CITATIONS`, **10 entradas**) es **buscable/filtrable en tiempo real** por autor, DOI o universidad — funcionalidad exclusiva de esta temática. `data.authors` (6 nombres) **sí se renderiza** en el Hero, igual que `algoritmos-perfilado`/`diseno-persuasivo-patrones-oscuros`.

**Es la única de las 4 temáticas del grupo auditadas con el gap del quiz sin corregir**: al igual que `algoritmos-perfilado`, la página nunca destructura `showQuiz`, `previousResult` ni `passed` del hook compartido — no hay pantalla de bienvenida al quiz ("necesitás 8/10"), no se muestra el resultado de un intento anterior, y la pantalla de resultados dice siempre "¡Cuestionario completado!" sin distinguir si se alcanzó el umbral de aprobación.

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `caldos-de-cultivo`
- **Categoría:** "Desinformación"
- **Color de marca:** `#EA580C` (naranja/llama)
- **Descripción:** "Cómo se combinan repetición, polarización y viralidad emocional hasta crear un ambiente donde la desinformación se propaga más rápido que la verdad — y por qué el objetivo casi nunca es imponer una mentira, sino fabricar la duda."
- **`authors` (6 nombres, renderizados como chips en el Hero):** Urie Bronfenbrenner, Claire Wardle y Hossein Derakhshan, Soroush Vosoughi/Deb Roy/Sinan Aral, Miller McPherson/Lynn Smith-Lovin/James Cook, Peter Wason, Elisabeth Noelle-Neumann.
- **`audiencias`:** `['docentes', 'familias']`
- **Material adjunto:** `pdfUrl` (`/img/tematicas/caldos-de-cultivo/presentacion.pdf`), `infografiaUrl` (`/img/tematicas/caldos-de-cultivo/infografia.webp`).
- **`intro`:** sin variante de audiencia (única de las 4 temáticas del grupo auditadas sin `introFamilias`).

---

## Hero

Badges: "// Desinformación" (categoría) + "Ecosistema de inmunidad digital". H1: "Caldos de cultivo". Bajada (`data.description`, fija): "Cómo se combinan repetición, polarización y viralidad emocional hasta crear un ambiente donde la desinformación se propaga más rápido que la verdad — y por qué el objetivo casi nunca es imponer una mentira, sino fabricar la duda."

**Chips de autores citados:** Urie Bronfenbrenner · Claire Wardle y Hossein Derakhshan · Soroush Vosoughi, Deb Roy y Sinan Aral · Miller McPherson, Lynn Smith-Lovin y James Cook · Peter Wason · Elisabeth Noelle-Neumann.

**2 CTAs:** "🔥 Probar el mezclador de riesgo" (scroll a `#mezclador`), "Explorar fuentes científicas" (scroll a `#fuentes`).

**Imagen del Hero** con badge de cita: "Wardle y Derakhshan (2017)" → link al informe del Consejo de Europa, label visual "Pasto seco digital".

### Ticker de estadísticas del Hero (`HERO_STATS`, 4 tarjetas)

| Etiqueta | Valor | Detalle |
|---|---|---|
| Percepción de medios | 69% | "Cree que los medios tradicionales mienten deliberadamente (Edelman Trust Barometer / UCM)" |
| Generación Z (16-24) | 35,1% | "Sostiene que los medios tradicionales 'mienten mucho' (UCM, 2024)" |
| Microtargeting político | 50M+ | "Perfiles psicográficos extraídos en el caso Cambridge Analytica" |
| Confianza social | En baja | "Degradación por IA generativa, deepfakes y 'dividendo del mentiroso' (Zenodo, 2026)" |

> Nota: el "69%" atribuido a "Edelman Trust Barometer / UCM" combina 2 fuentes distintas en una sola cita sin distinguir cuál aporta el dato — el Edelman Trust Barometer no aparece en `ACADEMIC_CITATIONS`.

---

## Introducción — "Fuego y pasto seco" (`id="contenido"`)

`data.intro` (fijo, sin variante de audiencia):
> "Cuando ciertas dinámicas se repiten a gran escala, pueden cambiar el ambiente entero. Un caldo de cultivo no causa automáticamente una conducta — no es un botón que se aprieta y sale un resultado. Crea condiciones favorables para que algo crezca. Es la diferencia entre encender un fuego y dejar el pasto seco: el pasto seco no prende solo, pero hace que cualquier chispa sea peligrosa."

### Elemento interactivo — "Mezclador del Pasto Seco" (`DryGrassMixer`, `id="mezclador"`)

**Mecanismo:** el usuario marca/desmarca 5 "ingredientes" del caldo de cultivo; cada uno suma peso a "temperatura de riesgo" y "velocidad de propagación". 2 ingredientes premarcados por defecto: "Indignación o urgencia emocional" y "Círculo social homogéneo (cámara de eco)".

**Los 5 ingredientes (`FUEL_OPTIONS`):**

| Etiqueta | Categoría | Pesos |
|---|---|---|
| Repetición constante del mismo mensaje | Ingrediente | temp +16, velocidad +10 |
| Encuadre "nosotros contra ellos" | Ingrediente | temp +22, velocidad +8 |
| Indignación o urgencia emocional | Ingrediente | temp +24, velocidad +20 |
| Círculo social homogéneo (cámara de eco) | Ingrediente | temp +18, velocidad +6 |
| Dato falso o descontextualizado | Ingrediente | temp +20, velocidad +16 |

**3 estados de lectura del ambiente** según % de temperatura: "Pasto húmedo" (<40%, "Baja probabilidad de que una chispa se propague"), "Pasto seco" (40-74%, "Cualquier chispa —un rumor, un titular— puede prender"), "Riesgo de incendio" (≥75%, "El ambiente está listo: alcanza una chispa mínima para que se propague solo"). Nota de cierre fija: "Un caldo de cultivo no determina el resultado: facilita, recompensa, repite y amplifica."

---

## Módulo 01 · Fundamentos Teóricos — "La Arquitectura de la Influencia & Economía de la Atención" (`id="fundamentos"`)

Sin variante de audiencia. Copy: "Basado en las tesis de *José Néstor Farhat*, *Lawrence Lessig* y *Carlos Saura García (Dialnet)*."

**3 tarjetas teóricas (`THEORY_CARDS`):**

**"La Arquitectura es Código y Regulación":**
> "Como argumenta *Lawrence Lessig* y rescata Farhat, en las redes digitales no hace falta prohibir u ordenar verbalmente: **el propio diseño del entorno vuelve fácil una conducta y sumamente difícil otra**. Las decisiones se toman en segundos creyendo que son 100% libres, cuando la interfaz prediseñó el camino."
> Cierre: '"Ninguna de esas decisiones ocurrió en el vacío. Alguien decidió qué botón íbamos a ver primero." — J. N. Farhat'

**"Extracción Monetizable de Atención":**
> "Según la investigación de *Carlos Saura García (Universidad de La Rioja — Dialnet)*, el modelo de negocio del capitalismo de vigilancia convierte la atención humana en una mercancía escasa. Las plataformas emplean mecanismos de ludificación y dopamina para crear ciclos de adicción continuados."
> Lista: Desplazamiento infinito (Infinite Scroll) · Notificaciones de recompensa intermitente · Auto-play programado por algoritmos predictivos.

**"Hibridación No Sustitutiva":**
> "Frente a la dicotomía entre el apocalipsis tecno-utópico y el conservadurismo, el marco de *Santiago Tomás Bellomo (Universidad Austral)* propone la **Educación Aumentada**: utilizar la tecnología para amplificar el pensamiento crítico irremplazable y la agencia humana."
> Cierre: "Respuesta clave: potenciar la mediación pedagógica y el juicio crítico antes que la mera alfabetización instrumental."

> Nota: **Santiago Tomás Bellomo (Universidad Austral) no aparece en `ACADEMIC_CITATIONS`** — es la única de las 3 tarjetas cuyo autor citado no tiene entrada verificable en el listado final de fuentes de la página.

### Elemento interactivo — "Inspector Interactivo de Patrones Oscuros" (`DarkPatternInspector`)

**Mecanismo:** mockup de smartphone simulado con 3 elementos tocables (notificación, feed "Trending", botón de racha); al tocar cada uno, un panel lateral revela la técnica psicológica detrás.

| Elemento tocado | Título revelado | Explicación | Cita |
|---|---|---|---|
| Notificación "¡3 amigos te mencionaron!" | Alertas de Dopamina Ficticias (Phantom Notifications) | "Esta técnica utiliza alertas coloreadas e imprecisas ('alguien mencionó tu nombre') para explotar el miedo a quedar fuera del grupo (FOMO). Fuerza al usuario a abrir la aplicación varias veces por hora." | Marco de adicción a plataformas (Saura García — Dialnet / Conferencia Farhat) |
| Botón "Ver video con indignación (30s)" | Diseño Orientado a Indignación Afectiva | "Los algoritmos de recomendación priorizan titulares emocionalmente polarizantes porque la rabia o la indignación genera muchísimo más tiempo de retención e interacciones que el contenido matizado." | Fabricación de la duda (Dr. Julio Sal Paz — Medios UNT) |
| "Racha de 14 días activa. ¡Entra hoy!" | Mecanismo de Rachas y Gamificación Manipulativa | "Penalizar al usuario si no ingresa todos los días (perder la 'racha') utiliza el sesgo cognitivo de aversión a la pérdida para condicionar un hábito compulsivo diario inconsciente." | Caldos de Cultivo & Subculturas (Farhat) |

---

## Las 6 secciones de contenido base (layout uniforme con imagen editorial)

Solo `paragraphs` varía por audiencia en 3 de las 6 (sin variante de `heading` ni `quote` en ninguna sección de esta temática).

### Sección 01 — "Los ingredientes del pasto seco" (CON variante — `paragraphsFamilias`)

Imagen/fuente: Wardle y Derakhshan (2017)

| Docentes | Familias |
|---|---|
| Párrafo 1 idéntico en ambas: "¿Qué ingredientes forman ese pasto seco? Repetición, polarización, viralidad emocional, cámaras de eco, desinformación. Cuando se combinan, se potencian. Urie Bronfenbrenner recuerda que la conducta surge de sistemas interrelacionados, nunca de una sola causa. Claire Wardle y Hossein Derakhshan, estudiando lo que llaman 'desorden informativo', piden mirar tres cosas juntas: quién es el actor, cómo es el mensaje y cómo lo interpreta quien lo recibe." | *(idéntico)* |
| "Con esta lente, la pregunta **escolar** cambia: deja de ser solamente '¿qué publicó **este chico**?' y pasa a ser también '¿qué ambiente premió, repitió y normalizó esa publicación?'..." | "Con esta lente, la pregunta **en casa** cambia: deja de ser solamente '¿qué publicó **mi hijo o hija**?' y pasa a ser también '¿qué ambiente premió, repitió y normalizó esa publicación?'..." |

Cita de cierre (fija): "Un caldo de cultivo no determina: facilita, recompensa, repite y amplifica."

### Sección 02 — "Cámaras de eco: por qué no es lo mismo que la burbuja de filtros" (sin variante de audiencia)

Imagen/fuente: McPherson, Smith-Lovin y Cook (2001)

> "La burbuja de filtros que describe Eli Pariser es sobre todo un efecto del algoritmo: el sistema decide qué mostrar y qué no, y la persona queda encerrada sin haberlo elegido del todo. La cámara de eco es distinta, aunque las dos se retroalimenten: es ante todo un efecto social, construido por las relaciones que elegimos. Los sociólogos Miller McPherson, Lynn Smith-Lovin y James Cook describieron el principio de homofilia — la tendencia, muy anterior a internet, a vincularnos con quienes se nos parecen. Las plataformas no inventaron esa tendencia: la industrializaron, con sugerencias de amistad, de grupos y de contenidos que la vuelven todavía más eficiente."
>
> "A la homofilia se le suma el sesgo de confirmación, ese hallazgo clásico de la psicología cognitiva que Peter Wason documentó ya en los años sesenta: buscamos y recordamos con más facilidad la información que confirma lo que ya creíamos, y descartamos con la misma facilidad la que lo contradice. Homofilia y sesgo de confirmación arman juntos el andamiaje de la cámara de eco: primero elegimos rodearnos de los parecidos, después el propio grupo confirma lo que ya pensábamos, y el algoritmo — atento a qué genera interacción — termina de cerrar el círculo."

Cita: "La burbuja de filtros la arma el algoritmo. La cámara de eco la armamos, en gran parte, nosotros — y el algoritmo la vuelve más eficiente."

### Sección 03 — "El miedo a quedar afuera: la espiral del silencio" (CON variante — `paragraphsFamilias`)

Imagen/fuente: Elisabeth Noelle-Neumann (1974)

| Docentes | Familias |
|---|---|
| Párrafo 1 idéntico: "Dentro de esa cámara pasa algo más, que la politóloga Elisabeth Noelle-Neumann describió mucho antes de que existieran las redes sociales: cuando alguien percibe que su opinión es minoritaria, tiende a callarla por miedo al aislamiento social. Es la espiral del silencio. En los grupos digitales ese mecanismo se acelera, porque las métricas hacen visible, en tiempo real, qué opinión predomina, y el costo de disentir se vuelve público e inmediato, no un cálculo abstracto para más adelante." | *(idéntico)* |
| "El resultado es una ilusión de consenso: no es que todos piensen igual, sino que quienes piensan distinto se van quedando callados, uno por uno, hasta que la opinión que queda visible parece más unánime de lo que realmente es. Para **un aula**, esto tiene una consecuencia directa: el silencio de **un estudiante** frente a un tema polémico no siempre es indiferencia — a veces es el costo social de disentir, ya calculado de antemano." | "...Para **una familia**, esto tiene una consecuencia directa: el silencio de **un hijo o hija** frente a un tema polémico no siempre es indiferencia — a veces es el costo social de disentir, ya calculado de antemano." |

Cita: "No es que todos piensen igual: es que quienes piensan distinto se quedan, uno por uno, en silencio."

### Sección 04 — "Cultura y algoritmo se retroalimentan" (sin variante de audiencia)

Imagen/fuente: "Ver simulador en vivo" → `#simulador` (única imagen de sección cuyo link apunta a un ancla interna en vez de una fuente externa)

> "La cultura propone códigos. El grupo los valida. El algoritmo observa la interacción. La recomendación amplifica. Y la repetición, con el tiempo, normaliza. Una publicación intensa recibe más reacciones; el sistema detecta esa actividad y le sube la visibilidad; el grupo lee esa visibilidad como reconocimiento; y entonces la siguiente publicación sube un poco más el tono. No hay un villano en el medio: el algoritmo solo no crea la cultura, y la cultura sola no actúa. Pero juntos —homofilia, sesgo de confirmación, espiral del silencio y recomendación algorítmica— pueden formar un circuito que se retroalimenta."

Cita: "El algoritmo aprende de la cultura, y la cultura aprende de aquello que el algoritmo premia."

### Sección 05 — "Fabricar la duda, no solo la mentira" (CON variante — `paragraphsFamilias`)

Imagen/fuente: Dr. Julio Sal Paz (UNT, 2026)

3 párrafos, el 1° y 2° idénticos en ambas variantes; el 3° cambia:

| Docentes | Familias |
|---|---|
| Párrafo 1 (fijo): "Wardle y Derakhshan proponen no hablar de un único fenómeno sino de un espectro de desórdenes informativos... Distinguirlas importa **en el aula**: no todo lo que circula como falso es mentira deliberada..." | Igual salvo "Distinguirlas importa **en casa**..." |
| Párrafo 2 (idéntico): "Pero el objetivo último de la desinformación contemporánea rara vez es imponer una mentira puntual... fabricar la duda... paraliza el juicio crítico de quien la recibe." | *(idéntico)* |
| "Una consecuencia concreta de esa duda fabricada, y particularmente alarmante **para el aula**, es el autodiagnóstico erróneo en salud mental: chicos y chicas que... retrasan o directamente evitan pedir la ayuda real que necesitan." | "...y particularmente alarmante **para una familia**, es el autodiagnóstico erróneo en salud mental..." |

Cita: "La desinformación contemporánea no siempre busca imponer una mentira: muchas veces le alcanza con fabricar la duda."

### Sección 06 — "La velocidad de la mentira" (sin variante de audiencia)

Imagen/fuente: Vosoughi, Roy y Aral (2018)

> "Ese circuito se vuelve dramáticamente visible en la difusión misma de la desinformación. Soroush Vosoughi, Deb Roy y Sinan Aral analizaron una enorme cantidad de mensajes en Twitter y encontraron algo incómodo: las noticias falsas se difundían más lejos, más rápido y más ampliamente que las verdaderas. Y lo más impactante: no eran principalmente los bots. Éramos las personas compartiendo más rápido la mentira."
>
> "Detrás de esta dinámica —de datos, perfiles, algoritmos e interfaces— hay siempre personas. Nadie puede ser reducido a un dato, a un perfil, a una probabilidad. El Comité de los Derechos del Niño, en su Observación General N.º 25, es claro: los derechos de niñas, niños y adolescentes deben respetarse también en el entorno digital. No hay un modo digital de los derechos humanos y otro modo real: es uno solo."

Cita: "Una falsedad repetida no se vuelve verdadera. Pero puede volverse familiar, y socialmente eficaz."

> Nota: la mención al "Comité de los Derechos del Niño, Observación General N.º 25" no tiene entrada propia en `ACADEMIC_CITATIONS` ni link directo.

---

## Módulo 02 · Caldos de Cultivo, Microtargeting y Cámaras de Eco (`id="microtargeting"`)

Sin variante de audiencia. Copy: "Basado en el caso *Cambridge Analytica (UNLP)* y la *Fabricación de la Duda (Dr. Julio Sal Paz — UNT)*."

**2 tarjetas de investigación (`MODULE2_RESEARCH_CARDS`):**

**"El Modelo Psicográfico OCEAN y Elecciones 2015" (Investigación UNLP):**
> "El estudio de la Facultad de Periodismo y Comunicación Social (UNLP) desglosa cómo el perfilado masivo de datos mediante el test OCEAN (Apertura, Tesón, Extraversión, Amabilidad, Neuroticismo) permitió inyectar mensajes políticos altamente personalizados para movilizar o desmovilizar votantes específicos en Argentina."
> Cadena de manipulación de datos: 1. Cosecha de likes y red de amigos en Facebook · 2. Algoritmo psicométrico (modelo OCEAN) · 3. Microtargeting político persuasivo irrestricto.

**"La Fabricación Sistémica de la Duda" (Investigación Medios UNT):**
> "El Dr. Julio Sal Paz (Universidad Nacional de Tucumán) demuestra que la desinformación contemporánea no busca necesariamente convencerte de una mentira explícita, sino minar la posibilidad de que exista una verdad compartida, erosionando la confianza pública mediante relatos conspirativos cerrados."
> Cita: '"Si aparecen pruebas en contra, se argumenta que confirman la conspiración; si no existen pruebas, se afirma que fueron ocultadas deliberadamente."'

> Nota: el estudio de la "Facultad de Periodismo y Comunicación Social (UNLP)" sobre las elecciones argentinas de 2015 **no tiene entrada en `ACADEMIC_CITATIONS`** — es la investigación más específicamente citada de todo el módulo (con autor institucional, año y cadena causal detallada) y no tiene link de verificación en ningún punto de la página.

### Elemento interactivo — "Simulador de Cámara de Eco" (`EchoChamberSimulator`, `id="simulador"`)

**Mecanismo:** slider de 0-100% ("Intensidad de refuerzo algorítmico") que cambia en tiempo real 3 indicadores (Diversidad de fuentes, Polarización afectiva, Exposición a lo opuesto) y el contenido de un "feed individual simulado" de 3 publicaciones de ejemplo.

**3 estados según el slider:**
- 0-40%: "Feed abierto y balanceado" — polarización Baja, exposición Alta. Muestra publicaciones etiquetadas DIVERSO, PERSPECTIVA B, NEUTRO.
- 40-75%: "Cámara de eco moderada" — polarización Media/alta, exposición Reducida. Muestra SECTARIO, PERSPECTIVA B, CONSPIRATIVO.
- >75%: "Burbuja algorítmica impenetrable" — polarización Extrema, exposición Nula. Muestra SECTARIO, CONSPIRATIVO, SECTARIO (repetido).

**Los 5 textos de publicación simulada (`FEED_PRESETS`):**
1. DIVERSO: "Debate abierto con múltiples fuentes y matices sobre una misma política pública."
2. PERSPECTIVA B: "Nota que contrasta datos oficiales con opiniones de especialistas de distinto signo."
3. NEUTRO: "Informe neutro, sin carga emocional, sobre un tema económico o social."
4. SECTARIO: '"¡Mirá lo que nos quieren ocultar! El otro bando otra vez mintiendo."'
5. CONSPIRATIVO: '"Lo que nadie te cuenta": relato cerrado que interpreta cualquier objeción como prueba de la conspiración.'

---

## Casos de Estudio (`id="caso"`)

### Caso principal — "El rumor escolar" (`data.caseStudy`, sin variante de audiencia, fondo oscuro)

Badge: "Un caso a escala del aula" (`data.caseStudy.label`).

> "Un rumor sigue exactamente la misma cadena que la desinformación a gran escala: alguien captura algo, alguien lo interpreta, se reenvía, se comenta, se expone... y hay daño. Cuando por fin llega la aclaración, la reputación de ese chico o esa chica ya quedó afectada. La verdad llega tarde y en voz baja; la mentira llegó temprano y a los gritos."

### 2 casos adicionales (`CASE_STUDIES`, con link propio a diferencia de los casos adicionales de `diseno-persuasivo-patrones-oscuros`)

**"El modelo psicográfico OCEAN y Cambridge Analytica"** (Microtargeting político):
> "A partir de 'me gusta' y redes de amistad en Facebook, un modelo psicográfico (Apertura, Tesón, Extraversión, Amabilidad, Neuroticismo) permitió construir hasta 50 millones de perfiles y enviar mensajes políticos hechos a medida para movilizar —o desmovilizar— a votantes específicos." Link: "Ver el acuerdo regulatorio oficial (FTC)" → `https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook`

**"El 'dividendo del mentiroso'"** (IA generativa y deepfakes):
> "Cuando la síntesis de voz, rostro y conducta se vuelve hiperrealista, aparece un efecto colateral: cualquier prueba real —un audio, un video— puede descartarse alegando que es un deepfake. No hace falta fabricar una mentira nueva; alcanza con poner en duda lo verdadero." Link: "Ver estudio en Zenodo (DOI)" → `https://doi.org/10.5281/zenodo.18463188`

---

## Módulo 03 · Deepfakes, IA Generativa y Autodiagnóstico Erróneo (`id="deepfakes"`)

Sin variante de audiencia. Copy: "Estudios de *Villamar Suastegui et al. (2026 — Zenodo DOI)* y *Karen Borensztein (UBA 2024)*."

**"Erosión de la Confianza Social por IAG"** (Zenodo DOI: 10.5281/zenodo.18463188):
> "La investigación reciente de Villamar Suastegui et al. (2026) analiza cómo la democratización de la Inteligencia Artificial Generativa permite sintetizar voz, rostro y conductas hiperrealistas. Esto genera el denominado 'Dividendo del Mentiroso': la capacidad de calificar cualquier prueba real como si fuera un deepfake."
> Impacto crítico: "ruptura del consenso sobre la realidad empírica visual y auditiva en el ámbito público y legal."

**"Desinformación y Autodiagnóstico Erróneo"** (UBA Facultad de Psicología, 2024):
> "El trabajo de Karen Borensztein (UBA) documenta la proliferación de contenidos sobre salud mental en TikTok e Instagram (TDAH, Trastornos del Espectro Autista, ansiedad) sin rigor científico. Los usuarios asumen etiquetas psiquiátricas basadas en videos virales breves, generando cibercondría y tratamientos no supervisados."
> Consecuencia: "comercialización de suplementos sin evidencia y saturación indebida de servicios médicos por autodiagnóstico patologizante."

---

## Verdad o Mito Viral — "Verificador Rápido: ¿Verdad o Mito Viral?" (`FactCheckChallenge`, sin ancla `id`)

**Elemento interactivo — 4 afirmaciones verdadero/falso** con contador de aciertos y explicación tras cada respuesta:

1. "Un video viral de 30 segundos con síntomas comunes alcanza para autodiagnosticar formalmente un trastorno, sin consulta médica." → **Falso**. "Karen Borensztein (UBA, 2024) documenta que estos autodiagnósticos generan cibercondría y tratamientos no supervisados, además de retrasar la consulta profesional real."
2. "La desinformación contemporánea busca, ante todo, convencerte de una mentira puntual y que la creas." → **Falso**. "Según Julio Sal Paz (UNT, 2026), el objetivo suele ser más ambicioso: fabricar la duda y erosionar la confianza en que la verdad sea siquiera alcanzable."
3. "En un estudio de más de una década en Twitter, las noticias falsas se difundieron más rápido y más lejos que las verdaderas — y no fue principalmente por los bots." → **Verdadero**. "Vosoughi, Roy y Aral (Science, 2018) encontraron que eran las personas, no los bots, quienes compartían más rápido la mentira."
4. "La cámara de eco y la burbuja de filtros son exactamente el mismo fenómeno, solo que con otro nombre." → **Falso**. "La burbuja de filtros la arma sobre todo el algoritmo; la cámara de eco la arman ante todo las relaciones que elegimos (homofilia + sesgo de confirmación), y el algoritmo la potencia."

---

## Dashboard de confianza mediática (`id="estadisticas"`) — único con gráficos de Recharts

Sin variante de audiencia. Copy: "Datos empíricos de *UCM (2024)* y relevamientos sobre consumo de medios en la Generación Z."

**Gráfico de barras — "Percepción de mentira en medios tradicionales" (por grupo etario, fuente UCM 2024):**

| Grupo | % que cree que los medios "mienten mucho" |
|---|---|
| Gen Z (16-24) | 35,1% |
| 30-40 años | 28,4% |
| 40-54 años | 24,2% |
| 55+ años | 19,8% |

**Gráfico de torta — "Canal principal de información (Gen Z)" (etiquetado "Datos empíricos", sin fuente específica citada):**

| Canal | % |
|---|---|
| TikTok e Instagram | 42% |
| X (Twitter) | 23% |
| YouTube y podcasts | 18% |
| Portales tradicionales | 12% |
| Televisión y radio | 5% |

> Nota: el gráfico de torta se etiqueta solo "Datos empíricos" sin autor, año ni link — es la única visualización de datos de toda la temática sin atribución específica verificable.

---

## Cita de cierre

Sin variante de audiencia.
> "Detrás de cada dato hay una persona; detrás de cada perfil, una historia; detrás de cada decisión automatizada, puede haber un derecho." *(`data.closingQuote`, aparece una sola vez, a diferencia de `diseno-persuasivo-patrones-oscuros` donde su cita de cierre se repite 3 veces)*

---

## Material de estudio — Presentación en Slides e Infografía Visual (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`:** 12 diapositivas `.webp` (`/img/tematicas/caldos-de-cultivo/slides/`) — la temática con menos diapositivas de las 4 auditadas del grupo (`subculturas-digitales`/`algoritmos-perfilado`/`diseno-persuasivo-patrones-oscuros` tienen 15). Botón de descarga del PDF.

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mecanismo compartido). Imagen: `/img/tematicas/caldos-de-cultivo/infografia.webp`.

---

## Módulo 05 · Mini-Test de Diagnóstico de Inmunidad Digital (`id="minitest"`)

Copy: "Basado en el marco operativo de Farhat: **Pausar, Preguntar, Elegir**." Sin variante de audiencia.

**Elemento interactivo — Test de 5 preguntas con puntaje acumulado (0-2 puntos por pregunta, máximo 10):**

1. "Cuando ves una noticia chocante o indignante en tus redes, ¿cuál es tu primera reacción habitual?" — 0pts: "La comparto inmediatamente para alertar a mis contactos." / 1pt: "Leo los comentarios para ver qué opina la gente." / 2pts: "Pauso, no la comparto y verifico la fuente original en otro buscador (lectura lateral)."
2. "¿Cómo percibís las recomendaciones automáticas de 'Videos sugeridos' o 'Para ti'?" — 0pts: "Como selecciones espontáneas y neutrales basadas en la suerte." / 1pt: "Sé que hay un algoritmo, pero confío en que busca entretenerme bien." / 2pts: "Como una arquitectura regulada para maximizar mi tiempo de permanencia explotando mis emociones."
3. "Ante un video de salud o psicología en TikTok que describe síntomas que sentís:" — 0pts: "Asumo que probablemente tengo esa condición y busco suplementos o soluciones online." / 1pt: "Me identifico pero no hago nada al respecto." / 2pts: "Recuerdo los riesgos del autodiagnóstico erróneo (estudio UBA) y consulto a un profesional matriculado."
4. "Al interactuar con personas que sostienen opiniones ideológicas diametralmente opuestas a la tuya:" — 0pts: "Las bloqueo o descalifico de inmediato por mentirosas." / 1pt: "Suelo ignorar sus publicaciones para mantener mi tranquilidad." / 2pts: "Reconozco el riesgo de la cámara de eco e intento comprender sus fuentes empíricas."
5. "¿Conocés y aplicás el protocolo de tres pasos propuesto por José Néstor Farhat?" — 0pts: "No, nunca lo había escuchado." / 1pt: "He oído hablar de él pero me cuesta llevarlo a la práctica diaria." / 2pts: "Sí: PAUSAR antes de reaccionar, PREGUNTAR por la intencionalidad del diseño y ELEGIR con agencia."

**3 resultados posibles:**
- 0-3 pts: "Vulnerabilidad digital elevada" — "Tus respuestas sugieren una alta exposición a cámaras de eco, manipulación afectiva y consumo acrítico en redes sociales." Insignia: "Alerta: requiere activar el protocolo 'Pausar, Preguntar, Elegir'"
- 4-7 pts: "Nivel de inmunidad digital MEDIO" — "Sos consciente de los algoritmos y sesgos, pero todavía estás expuesto a caer en patrones oscuros, microtargeting o publicaciones impulsivas." Insignia: "Navegante Consciente en Formación"
- 8-10 pts: "Nivel de inmunidad digital ALTO" — "Demostrás un pensamiento crítico avanzado y una sólida comprensión de la arquitectura de la atención, las cámaras de eco y el chequeo lateral." Insignia: "Ciudadano Digital Inmune & Agente Crítico"

> Nota: este mini-test, a diferencia del de `diseno-persuasivo-patrones-oscuros` (que se etiqueta explícitamente "no cuenta para tu progreso"), **no tiene ninguna aclaración de que es independiente del quiz oficial** — un usuario podría confundir completar este test con haber completado la temática.

---

## Fuentes académicas y enlaces de verificación (`id="fuentes"`) — único con buscador filtrable

Badge de conteo dinámico: "X / 10 citas verificables" (actualizado según el filtro activo).

### Elemento interactivo — Buscador en tiempo real

Input de texto que filtra `ACADEMIC_CITATIONS` por coincidencia en autor, título, publicación o tema (case-insensitive, sin distinguir tildes). Si no hay resultados: "No se encontraron fuentes que coincidan con '[búsqueda]'."

### Listado completo (`ACADEMIC_CITATIONS`, 10 entradas)

| Autor | Título | Publicación | Tema | Stat | URL |
|---|---|---|---|---|---|
| Fernández-Muñoz, Rubio-Moraga y Álvarez-Rivas (UCM, 2024) | La Generación Z frente a la desinformación: percepciones y prácticas | Estudios sobre el Mensaje Periodístico — UCM | Confianza de la Gen Z en medios tradicionales vs. redes sociales | "35,1% cree que los medios tradicionales 'mienten mucho'" | https://dx.doi.org/10.5209/emp.96511 |
| Villamar Suastegui, Vera Pico et al. (2026) | La incidencia de la IA generativa en los deepfakes y la confianza social | Zenodo — Ciencia & Educación | IA generativa, deepfakes y erosión del capital social democrático | "Documenta el 'dividendo del mentiroso': negar lo real alegando que es sintético" | https://doi.org/10.5281/zenodo.18463188 |
| Karen Borensztein (UBA, 2024) | Desinformación en redes y su relación con el autodiagnóstico erróneo | XVI Congreso Internacional de Investigación de Psicología, UBA | TDAH, TEA y ansiedad autodiagnosticados a partir de contenido no verificado | "Vincula la tendencia viral con cibercondría y consultas médicas evitadas" | https://www.aacademica.org/000-048/823 |
| Dr. Julio Sal Paz (UNT, 2026) | Cómo las redes fabrican la duda y alimentan la polarización | Medios UNT — UNT | La desinformación como estrategia de descontextualización | "Explica por qué 'fabricar la duda' pesa más que imponer una mentira puntual" | https://medios.unt.edu.ar/2026/07/30/como-las-redes-fabrican-la-duda-y-alimentan-la-polarizacion/ |
| Carlos Saura García (2022) | Economía de la atención: orientaciones éticas alrededor de la adicción a las redes | Fòrum de Recerca — Universidad de La Rioja (Dialnet) | Ludificación, dopamina y técnicas de enganche cognitivo | "Analiza el desplazamiento infinito y la recompensa intermitente" | https://dialnet.unirioja.es/servlet/articulo?codigo=9077579 |
| Wardle y Derakhshan (2017) | Information Disorder: Toward an Interdisciplinary Framework for Research and Policy Making | Consejo de Europa | Taxonomía de desinformación, información errónea e información maliciosa | "Marco de referencia citado por organismos de fact-checking en todo el mundo" | https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c |
| Vosoughi, Roy y Aral (2018) | The spread of true and false news online | Science, Vol. 359, Issue 6380 | Análisis de 126.000 cadenas de noticias en Twitter | "Las noticias falsas se difundieron un 70% más rápido que las verdaderas" | https://doi.org/10.1126/science.aap9559 |
| McPherson, Smith-Lovin y Cook (2001) | Birds of a Feather: Homophily in Social Networks | Annual Review of Sociology, Vol. 27 | El principio de homofilia | "Base teórica —anterior a internet— de lo que hoy llamamos cámara de eco" | https://doi.org/10.1146/annurev.soc.27.1.415 |
| Elisabeth Noelle-Neumann (1974) | The Spiral of Silence: A Theory of Public Opinion | Journal of Communication, Vol. 24, Issue 2 | Por qué las opiniones minoritarias tienden a callarse | "El marco teórico detrás de la 'ilusión de consenso' en los grupos digitales" | https://doi.org/10.1111/j.1460-2466.1974.tb00367.x |
| José Néstor Farhat | Libres Bajo Influencias: Subculturas, Algoritmos y Patrones Oscuros | Conferencia marco — Documento principal | Marco ecológico de la desinformación y protocolo de agencia ciudadana | "Material de conferencia base para todo el grupo 'Libres bajo influencia'" | *(sin URL)* |

> Notas:
> - **José Néstor Farhat es la única entrada sin URL** — se renderiza como `<div>` en vez de `<a>` clicable (el código usa `CardTag = cite.url ? 'a' : 'div'`), único caso de las 4 temáticas del grupo donde una fuente del listado final aparece explícitamente sin ser clicable.
> - **3 fuentes citadas en el cuerpo del texto no tienen entrada en este listado**: Santiago Tomás Bellomo (Universidad Austral, Módulo 01), el estudio de la Facultad de Periodismo y Comunicación Social (UNLP) sobre las elecciones 2015 (Módulo 02), y el Comité de los Derechos del Niño / Observación General N.º 25 (Sección 06).
> - **Peter Wason está en `data.authors`** (Hero) y se cita en el cuerpo (Sección 02), pero **no tiene entrada propia en `ACADEMIC_CITATIONS`** — es el único de los 6 autores del Hero sin ficha bibliográfica en el listado final.
> - Ninguna fuente está marcada `unverified` ni hay ningún indicador de "sin verificar" — igual que las otras 3 temáticas del grupo.

---

## Cuestionario de Comprensión — Quiz oficial (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas**, mismo mecanismo compartido (`useLibresSubtopic`) que marca finalización automática al alcanzar ≥8/10. **Es la única de las 4 temáticas del grupo auditadas, junto con `algoritmos-perfilado`, donde el componente NUNCA destructura `showQuiz`, `previousResult` ni `passed` del hook** — la primera pregunta se muestra directamente al llegar a la sección (sin pantalla de bienvenida ni indicación del umbral de aprobación), y la pantalla de resultados dice siempre "¡Cuestionario completado!" con el score en texto plano, sin distinguir si se alcanzó el mínimo necesario para que la temática cuente como completada.

**Las 10 preguntas completas:**

1. "¿Qué significa, según la charla, que algo sea un 'caldo de cultivo'?" → Correcta: "Que crea condiciones favorables para que algo crezca, sin determinar el resultado por sí solo"
2. "¿Cuáles son, según la charla, los ingredientes que forman ese 'pasto seco'?" → Correcta: "Repetición, polarización, viralidad emocional, cámaras de eco y desinformación"
3. "Según Wardle y Derakhshan, ¿qué tres cosas hay que mirar juntas para entender el 'desorden informativo'?" → Correcta: "Quién es el actor, cómo es el mensaje y cómo lo interpreta quien lo recibe"
4. "¿En qué se diferencia la cámara de eco de la burbuja de filtros, según la charla?" → Correcta: "La burbuja la arma sobre todo el algoritmo; la cámara de eco la arman sobre todo las relaciones que elegimos (homofilia y sesgo de confirmación), y el algoritmo la vuelve más eficiente"
5. "Según la espiral del silencio de Elisabeth Noelle-Neumann, ¿qué tiende a hacer alguien que percibe que su opinión es minoritaria?" → Correcta: "Callarla, por miedo al aislamiento social"
6. "En el circuito que describe la charla entre cultura y algoritmo, ¿qué hace el algoritmo cuando una publicación intensa recibe más reacciones?" → Correcta: "Detecta esa actividad y le sube la visibilidad"
7. "Según Wardle y Derakhshan, ¿qué distingue a la 'información maliciosa' de la desinformación y la información errónea?" → Correcta: "Es contenido genuino, real, pero sacado de contexto o difundido con intención de hacer daño"
8. "Según la charla, ¿cuál es el verdadero objetivo de buena parte de la desinformación contemporánea?" → Correcta: "Fabricar la duda: erosionar la confianza en que la verdad sea siquiera algo alcanzable"
9. "¿Qué encontraron Vosoughi, Roy y Aral al estudiar la difusión de noticias falsas en Twitter, y quiénes eran los principales responsables?" → Correcta: "Que se difundían más lejos, más rápido y más ampliamente que las verdaderas, y que eran principalmente las personas, no los bots"
10. "Según la charla, ¿qué consecuencia concreta puede tener la 'duda fabricada' en la vida de un adolescente?" → Correcta: "Un autodiagnóstico erróneo en salud mental, adoptado de una comunidad no verificada, que retrasa pedir ayuda profesional real"

Ninguna pregunta ni sus opciones varían por audiencia.

---

## Resumen de hallazgos para el rediseño

1. **Es la temática con más contenido de las 4 auditadas del grupo** (1802 líneas, 17 bloques) — supera incluso a `diseno-persuasivo-patrones-oscuros`. Tiene **6 elementos interactivos distintos** (Mezclador del Pasto Seco, Inspector de Patrones Oscuros, Simulador de Cámara de Eco, Verificador Rápido de mitos, Dashboard con gráficos reales, Mini-Test de Inmunidad Digital) más el buscador de fuentes y el quiz oficial — la mayor densidad de interactividad del grupo.
2. **Comparte con `algoritmos-perfilado` el mismo gap del quiz sin corregir**: `showQuiz`, `previousResult` y `passed` nunca se destructuran del hook — no hay pantalla de bienvenida, no se informa el umbral de 8/10 antes de empezar, y el resultado final no distingue aprobado/no aprobado. De las 4 temáticas auditadas, solo `diseno-persuasivo-patrones-oscuros` implementa esto correctamente.
3. **El Mini-Test de Inmunidad Digital no está etiquetado como independiente del progreso** (a diferencia del Mini-Test de `diseno-persuasivo-patrones-oscuros`, marcado explícitamente "no cuenta para tu progreso") — riesgo real de que un usuario confunda completar este test con completar la temática, dado que ambos usan lenguaje de "diagnóstico"/"insignia".
4. **3 fuentes citadas en el cuerpo no tienen entrada en el listado final de 10**: Santiago Tomás Bellomo (Universidad Austral), el estudio de la Facultad de Periodismo UNLP sobre elecciones 2015, y el Comité de los Derechos del Niño (Observación General N.º 25).
5. **Peter Wason está en `data.authors` del Hero pero no en `ACADEMIC_CITATIONS`** — único de los 6 autores destacados del Hero sin ficha bibliográfica propia en el listado final.
6. **José Néstor Farhat es la única fuente del listado sin URL**, renderizada deliberadamente como texto no clicable (`<div>` en vez de `<a>`) — patrón técnico correcto (no se simula un link falso), pero significa que la fuente "marco" de todo el grupo no es verificable externamente, a diferencia de las 9 fuentes restantes.
7. **El "69%" de percepción de medios en el ticker del Hero combina 2 fuentes en una sola atribución** ("Edelman Trust Barometer / UCM") sin distinguir cuál aporta el dato — el Edelman Trust Barometer no tiene entrada en el listado final.
8. **El gráfico de torta "Canal principal de información (Gen Z)" se etiqueta solo "Datos empíricos"**, sin autor, año ni link — es la única visualización de datos de la página sin fuente verificable específica, a diferencia del gráfico de barras contiguo que sí cita UCM 2024.
9. **Es la única temática del grupo con visualizaciones de datos reales usando Recharts** (gráfico de barras + gráfico de torta) — a diferencia de las otras 3, que usan solo barras de progreso CSS animadas para sus widgets interactivos. Vale la pena decidir en el rediseño si este patrón de gráficos con librería debería extenderse a las demás temáticas o mantenerse como distintivo de esta.
10. **Es la única temática del grupo con un buscador de fuentes filtrable en tiempo real** — funcionalidad de descubrimiento que ninguna otra temática del grupo ofrece, útil dado que también tiene, junto con `diseno-persuasivo-patrones-oscuros`, de las listas de fuentes más extensas del grupo.
11. **No tiene `introFamilias`** (única de las 4 temáticas del grupo auditadas sin esta variante a nivel raíz) ni ninguna sección con `headingFamilias`/`quoteFamilias` — la variante de audiencia está exclusivamente en `paragraphsFamilias` de 3 de las 6 secciones, y siempre limitada a la última oración de cada párrafo afectado (cambiar "aula"/"estudiante" por "casa"/"hijo o hija").
