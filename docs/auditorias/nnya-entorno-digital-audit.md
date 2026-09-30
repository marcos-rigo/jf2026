# Auditoría de contenido — NNyA y el Entorno Digital

Base para rediseño. Recorrido completo de `lib/nnya-entorno-digital-content.ts` (81 líneas — solo fuentes citadas, tipadas y separadas de la JSX) y `app/nnya-entorno-digital/nnya-entorno-digital-content.tsx` (1510 líneas). Solo lectura, nada modificado.

Ruta: `/nnya-entorno-digital` (two-file pattern: `page.tsx` monta `Navbar`/`BackToDashboardButton`/`Footer` directamente alrededor del content component, a diferencia de `cibercrianza` donde el propio content component los monta internamente). Grupo: "Infancia y Crianza". Estética: gradientes "mesh" animados, campo de partículas flotantes (`ParticleField`, 45 partículas), tarjetas con efecto "3D tilt" al pasar el mouse (`useTilt`), anillos de progreso circulares animados (`CircularProgress` + `useCountUp`), divisores de sección en forma de ola SVG (`WaveDivider`, alterna orientación en cada sección) — una estética más "editorial suave" que el "Light Cyberpunk" de `cibercrianza`, aunque comparte varios mecanismos técnicos (barra de scroll fija, botón "volver arriba", lightbox con zoom/pan/pinch para la infografía).

**Patrón de audiencia: Group A (`resolveTexto`/`AudienciaTexto`)**, con el mismo helper local `ta()` (línea 23) que en `cibercrianza`, con idéntico criterio de fallback: **`'familias'`**, no `'docentes'` — el comentario del código lo dice explícitamente: *"Fallback 'familias': es la voz original de esta página (mismo criterio que app/tematicas/cibercrianza)."* Confirma que este fallback a "familias" no es un caso aislado sino una convención deliberada compartida entre ambas temáticas del grupo "Infancia y Crianza".

**Sin quiz de ningún tipo** — es la primera temática auditada en todo el sitio (de las 21 auditadas hasta ahora contando el grupo "Libres bajo influencia" y `cibercrianza`) sin ningún mecanismo de autoevaluación. El progreso se gestiona con `useTematicaProgress({ tematicaId: "nnya-entorno-digital", userId })` **sin pasar `computeProgress`** (a diferencia de `cibercrianza`, que sí define `computeCibercrianzaProgress`) — es decir, el avance de esta temática depende enteramente del `TematicaCompletarButton` manual al final de la página (línea 1507), sin ningún elemento interactivo que mida comprensión o progreso real.

**Usa `SourceCite`** (`components/nnya-entorno-digital/source-cite.tsx`) — variante deliberadamente duplicada de la de `huella-digital`, con la paleta `brand-blue`/`brand-pink` propia del sitio (a diferencia de la paleta neón de `cibercrianza`).

---

## Datos generales — fuentes citadas (`lib/nnya-entorno-digital-content.ts`)

El comentario de cabecera (líneas 1-5) aclara la misma separación editorial vista en `cibercrianza`: *"fuentes, estadisticas, percepciones, pasosMediacion, herramientas, consejosRapidos y señalesAlerta viven en el propio componente y no se tocan — este archivo solo agrega el marco conceptual, el origen histórico y las ventajas que faltaban."*

### `FILTER_BUBBLE_QUOTE` — marco conceptual central de la página
> **Texto:** "El 'filtro burbuja' (filter bubble) es el espacio en línea que representa el universo personal de información de cada usuario — único, y construido por filtros algorítmicos personalizados. El término fue acuñado por el activista Eli Pariser en su libro y charla TED de 2011, tras notar que dos personas podían recibir resultados de búsqueda completamente distintos para la misma consulta, según sus intereses previos."
> **Fuente:** Eli Pariser (2011) — "The Filter Bubble: What the Internet Is Hiding from You" — https://es.wikipedia.org/wiki/Burbuja_de_filtros

### `GLOBAL_KIDS_ONLINE_SOURCE`
> **Autor:** UNESCO
> **Nota:** "Global Kids Online — red fundada en 2006 por UNICEF Innocenti, la LSE y la Red Europea de Kids Online"
> **URL:** https://www.unesco.org/es/articles/kids-online

### `UNICEF_BENEFICIOS_QUOTE`
> **Texto:** "Internet y las plataformas digitales pueden ser herramientas poderosas para fomentar la creatividad, el aprendizaje y las conexiones sociales de niñas, niños y adolescentes — también un lugar clave para expresar opiniones e informarse."
> **Fuente:** UNICEF — "Cómo Internet puede potenciar el aprendizaje, la creatividad y los vínculos de niños, niñas y adolescentes" — https://www.unicef.org/uruguay/crianza/digital/como-Internet-puede-potenciar-el-aprendizaje-creatividad-y-v%C3%ADnculos-de-ni%C3%B1os-ni%C3%B1as-y-adolescentes

> Nota: es prácticamente la misma cita de UNICEF (mismo título, misma URL) que `UNICEF_BENEFICIOS_QUOTE` en `lib/cibercrianza-content.ts`, con el texto recortado a una sola oración acá en vez de las 2 oraciones completas de `cibercrianza` — confirma que ambas temáticas del grupo "Infancia y Crianza" comparten esta fuente pero la citan con distinto nivel de detalle.

### Fuentes reproducidas solo para el listado consolidado (no exportadas como `Quote`, ya existen como datos crudos en `fuentes`/`estadisticas` dentro del componente)

- `SAVE_THE_CHILDREN_SOURCE` — Autor: "Save the Children & GAD3", Nota: "Infancia y Adolescencia en Entornos Digitales" (sin URL)
- `REDALYC_SOURCE` — Autor: "Redalyc", Nota: "Uso de TikTok e Instagram en adolescentes" (sin URL)
- `KIDS_ONLINE_IBEROAMERICA_SOURCE` — Autor: "UNICEF", Nota: "Kids Online Iberoamérica (2019)" (sin URL)
- `CIUDADANIA_DIGITAL_ARGENTINA_SOURCE` — Autor: "UNICEF", Nota: "Encuesta de Ciudadanía Digital Argentina (2022)" (sin URL)
- `GENERACION_INTERACTIVA_SOURCE` — Autor: "Fundación Telefónica", Nota: "Generación Interactiva en Iberoamérica (2020)" (sin URL)

> Nota: estas 5 fuentes reproducidas no tienen URL en absoluto (a diferencia de las 3 con `Quote` completo, que sí tienen URL) — el comentario del código explica que son duplicados deliberados de datos que ya viven como texto plano dentro de los arrays `fuentes`/`estadisticas` del componente, agregados acá únicamente para que aparezcan en el listado consolidado del Centro de recursos con formato `SourceCite`.

### `FUENTES_CITADAS` — listado consolidado (8 entradas)

Orden exacto: `SAVE_THE_CHILDREN_SOURCE`, `REDALYC_SOURCE`, `KIDS_ONLINE_IBEROAMERICA_SOURCE`, `CIUDADANIA_DIGITAL_ARGENTINA_SOURCE`, `GENERACION_INTERACTIVA_SOURCE`, `FILTER_BUBBLE_QUOTE.source`, `GLOBAL_KIDS_ONLINE_SOURCE`, `UNICEF_BENEFICIOS_QUOTE.source` — mismas 8 fuentes reales usadas en el cuerpo de la página, sin agregados extra.

---

## Hero

Badge: "Ciudadanía Digital" (con punto rosa pulsante). H1 con gradiente animado en "entorno digital": **"¿Cómo ven los chicos el entorno digital?"** — sin variante de audiencia (dice "los chicos" de forma genérica, no usa `ta()` acá).

Bajada (fija, 2 párrafos):
> "Para los **niños, niñas y adolescentes**, Internet no es una herramienta más: es el lugar donde aprenden, juegan, construyen su identidad y se relacionan."
> "Entender su mirada es el primer paso para acompañarlos de manera consciente y efectiva."

1 solo CTA: "Conocé la guía" (scroll a `#guia`) — a diferencia de `cibercrianza`, que tenía 2 CTAs en el Hero, acá solo hay uno porque no existe un quiz al que redirigir.

**Imagen del Hero:** foto de stock de Unsplash (`https://images.unsplash.com/photo-1529156069898-49953e39b3ac...`) — es la única temática auditada hasta ahora que usa una imagen externa de banco de imágenes en el Hero en vez de un asset propio generado/subido al proyecto (`/img/tematicas/...` o `/public/img/...`).

**2 badges flotantes fijos junto a la imagen (no vinculados a ningún array de datos):** "+90% Conectados a diario" y "6h+ Por día en pantallas" — cifras que **no coinciden exactamente con ninguna de las 3 `estadisticas`** definidas más abajo en el componente (93%, 81%, 55%) ni con los datos de `fuentes` (4,7h/4,2h, 45%, 1h30/1h10) — son 2 cifras adicionales sin fuente citada ni array de datos propio, solo hardcodeadas directamente en el JSX del Hero.

---

## Detrás del concepto — filtro burbuja

Sin variante de audiencia. Cita completa de `FILTER_BUBBLE_QUOTE` en blockquote + `SourceCite`. Introduce el concepto central que después reaparece en la sección de percepciones ("La cámara de eco").

---

## Historia — "De dónde viene esta evidencia"

Sin variante de audiencia. Texto fijo:
> "La Red Global Kids Online fue fundada en 2006 por el Centro de Investigación Innocenti de UNICEF, la London School of Economics (LSE) y la Red Europea de Kids Online, para generar evidencia comparada sobre la vida de niñas, niños y adolescentes en el entorno digital en todo el mundo. Los estudios de UNICEF Kids Online Iberoamérica y la Encuesta de Ciudadanía Digital Argentina, que esta página ya cita en sus estadísticas, forman parte de esa red de investigación."

Con `SourceCite` de `GLOBAL_KIDS_ONLINE_SOURCE`. Es prácticamente el mismo texto histórico que aparece en `cibercrianza` (`GLOBAL_KIDS_ONLINE_QUOTE`), reescrito en tercera persona acá en vez de como cita textual con autor propio — ambas temáticas narran el mismo origen institucional del campo de "Kids Online".

---

## "Así perciben el entorno digital" — Su lógica propia

Sin variante de audiencia. Bajada: "A diferencia de los adultos, las nuevas generaciones tienen una relación naturalizada con la tecnología."

**Elemento interactivo — 4 tarjetas con efecto "3D tilt"** (`percepciones`, siguen el cursor del mouse con `rotateX`/`rotateY`):

| # | Título | Descripción |
|---|---|---|
| 1 | La plaza digital | "Para los chicos no hay 'mundo digital' y 'mundo real'. Su vida social transcurre simultáneamente en ambos espacios sin distinción." |
| 2 | La cámara de eco | "Sufren la 'adulación algorítmica': las redes les muestran contenido afín, limitando su exposición a opiniones diferentes." — con `SourceCite` de `FILTER_BUBBLE_QUOTE.source` (único de los 4 con fuente asignada, por conexión directa con el concepto de "filtro burbuja" ya presentado) |
| 3 | Privacidad en tensión | "Saben que cuidar sus datos es importante, pero muchas veces priorizan la exposición para sentir que pertenecen al grupo." |
| 4 | Huella imborrable | "Comparten fotos o pensamientos sin medir que esa información conforma una identidad digital que los acompañará siempre." |

---

## "Lo que nos dicen los números" — Estadísticas con anillos de progreso circulares

Sin variante de audiencia. Bajada: "Datos extraídos de estudios recientes sobre consumo digital adolescente en Iberoamérica."

**Elemento interactivo — 3 tarjetas con anillo SVG de progreso animado y contador ascendente** (`estadisticas`, activado por `IntersectionObserver` al entrar en viewport):

| Valor | Texto | Fuente citada (texto plano, sin `SourceCite` estructurado) |
|---|---|---|
| 93% | "De los adolescentes usa el celular para relacionarse con sus amigos." | "UNICEF – Kids Online Iberoamérica (2019)" |
| 81% | "Considera que proteger su privacidad en Internet es muy importante." | "UNICEF – Encuesta de Ciudadanía Digital Argentina (2022)" |
| 55% | "De los padres subestima el tiempo real que sus hijos pasan conectados." | "Fundación Telefónica – Generación Interactiva en Iberoamérica (2020)" |

> Nota: estas 3 fuentes se muestran como texto plano ("Fuente: {stat.fuente}") en vez de usar el componente `SourceCite` — aunque las mismas 3 fuentes sí están representadas como `Source` tipados en `lib/nnya-entorno-digital-content.ts` (`KIDS_ONLINE_IBEROAMERICA_SOURCE`, `CIUDADANIA_DIGITAL_ARGENTINA_SOURCE`, `GENERACION_INTERACTIVA_SOURCE`) y aparecen correctamente citadas con `SourceCite` en el Centro de recursos al final de la página — es decir, la atribución in-situ (junto al dato) es texto plano sin link, mientras que la atribución consolidada (al final) sí es un link verificable.

---

## "Señales de alerta que no podemos ignorar"

Sin variante de audiencia. Copy: "Si notás alguna de estas conductas de forma sostenida, es momento de iniciar una conversación." `señalesAlerta` (4 ítems, más corta que la lista de 9 ítems de `cibercrianza`):

| Título | Descripción |
|---|---|
| Cambios de humor al salir de las redes | "Irritabilidad o tristeza profunda que aparece al alejarse del dispositivo." |
| Secretismo extremo con el teléfono | "Apaga la pantalla al acercarse un adulto o crea perfiles anónimos." |
| Dificultad para dormir o relajarse | "Insomnio, ansiedad o imposibilidad de estar offline sin angustia." |
| Pérdida de interés en actividades offline | "Abandona deportes, amigos o hobbies que antes disfrutaba con entusiasmo." |

---

## "Internet también es una oportunidad"

Sin variante de audiencia. Copy: "No todo es riesgo: acompañar también significa reconocer lo que el entorno digital les da." 1 sola tarjeta (a diferencia de las 2 de `cibercrianza`): "Creatividad, aprendizaje y voz propia" con cita completa de `UNICEF_BENEFICIOS_QUOTE` + `SourceCite`.

---

## "¿Cómo acompañarlos?" — Guía práctica (`id="guia"`)

Sin variante de audiencia en el título/bajada: "Siete acciones concretas para construir confianza, establecer límites saludables y acompañar su autonomía digital."

**Elemento interactivo — 7 pasos navegables**, con 2 layouts responsivos distintos: acordeón vertical en mobile, sidebar numérico + panel de contenido en desktop (`pasosMediacion`, estado `pasoActivo`):

| # | Título | Descripción (docentes / familias si difiere) |
|---|---|---|
| 1 | Dialogá sin juzgar | "Preguntales a qué juegan, a quiénes siguen en TikTok o Instagram y qué les divierte. Mostrar interés genuino abre las puertas para hablar de temas más difíciles después." *(sin variante)* |
| 2 | Configuren juntos | "Sentate con ellos a revisar la privacidad de sus perfiles. Enseñales a poner cuentas en privado, desactivar la ubicación y gestionar quién puede comentar sus fotos." *(sin variante)* |
| 3 | Chequeá su huella digital | "Búscalos en Google juntos: revisá qué fotos, comentarios o perfiles son visibles para cualquier persona. Esa información conforma su reputación digital y puede acompañarlos durante años." *(sin variante)* |
| 4 | Pensamiento crítico | "Ayudalos a dudar. ¿Esa noticia es real? ¿Ese influencer está sponsoreado? Fomentar la duda es la mejor defensa contra la desinformación y el grooming (cuando un adulto se gana la confianza de un menor en línea con fines de abuso)." *(sin variante)* |
| 5 | Confianza cero | "Enseñales a no compartir datos personales —dirección, colegio, número de teléfono— con desconocidos en línea, aunque parezcan amigos. En Internet, la identidad de alguien no siempre es la que muestra." *(sin variante)* |
| 6 | Higiene digital | **Docentes:** "Establecé rutinas saludables: sin pantallas durante las comidas, activar el modo descanso antes de dormir y reservar espacios offline en familia. Si sos docente, podés proponer lo mismo como acuerdo de curso: momentos sin pantallas compartidos en clase. Pequeños hábitos que mejoran la concentración y el bienestar general." / **Familias:** "Establecé rutinas saludables: sin pantallas durante las comidas, activar el modo descanso antes de dormir y reservar espacios offline en familia. Pequeños hábitos que mejoran la concentración y el bienestar general." |
| 7 | Pacten los límites | "La prohibición total rara vez funciona. Es mejor acordar horarios libres de pantallas (ej: durante la cena o antes de dormir) para cuidar su calidad del sueño." *(sin variante)* |

> Es el **único paso con variante de audiencia real de los 7** — y es la variante inversa a la esperada: el texto base ya está en clave "familias" ("espacios offline en familia") y la variante **docentes** agrega una oración extra ("Si sos docente, podés proponer lo mismo como acuerdo de curso...") en vez de reemplazar el contenido — a diferencia del patrón de sustitución de palabra visto en el resto de la plataforma, acá la variante docente es una ampliación aditiva sobre la base familiar, no una reescritura.

Cada paso, al expandirse, muestra además un "Tip clave" fijo (igual para los 7 pasos, no varía): *"Escuchá sin interrumpir: el acompañamiento digital debe ser una conversación, no un interrogatorio."* — y en el layout desktop, 2 tarjetas secundarias fijas por debajo del paso activo: "Qué lográs" (texto genérico fijo: *"Cada paso es una acción concreta con foco en confianza, límites saludables y autonomía digital."*, igual para los 7 pasos) y "Consejo clave" (texto genérico fijo, idéntico al "Tip clave" del acordeón mobile).

---

## "Consejos rápidos al paso"

Copy: "Acciones concretas que podés aplicar desde hoy en casa o en el aula." `consejosRapidos` (9 ítems, con emoji en vez de ícono Lucide):

| Emoji | Texto (docentes / familias si difiere) |
|---|---|
| 📸 | **Familias:** "Cuidá las fotos y videos que publicás de tus hijos" / **Docentes:** "Cuidá las fotos y videos de tus estudiantes que se publican desde la escuela o el grupo del curso" |
| 🧒 | **Familias:** "El sharenting expone la identidad digital de tus hijos sin que ellos lo elijan" / **Docentes:** "Publicar fotos de estudiantes sin autorización expone su identidad digital sin que ellos lo elijan" |
| 🚫 | "Enseñales a bloquear y reportar" *(sin variante)* |
| ✈️ | "El modo avión ayuda a desconectar" *(sin variante)* |
| ⭐ | "Tu ejemplo también educa: los hábitos digitales se aprenden mirándote a vos" *(sin variante)* |
| 📱 | "Si usás el teléfono en la cena, les mostrás que está bien hacerlo" *(sin variante)* |
| 💬 | "Hablen sobre el ciberbullying (el acoso entre pares por medios digitales)" *(sin variante)* |
| 🔍 | "No todo lo que brilla en las plataformas digitales es real" *(sin variante)* |
| ✅ | "Enseñales a verificar la información antes de creerla y compartirla" *(sin variante)* |

Solo 2 de los 9 consejos (los 2 sobre "sharenting"/fotos de menores) tienen variante real — coherente con el tema de esos 2 ítems específicamente (publicar fotos de "tus hijos" vs. de "tus estudiantes" es una distinción de contexto genuina; el resto de consejos son igual de aplicables a ambas audiencias sin necesitar reescritura).

---

## Infografía + "Fuentes de los datos"

Sin variante de audiencia. Presentación tipo "ventana de navegador" (barra falsa con 3 puntos de semáforo) alrededor de la imagen `/weekly-content/2026-W24/infografia%206.png`, con lightbox de zoom/pan/pinch al hacer clic (mismo mecanismo que `poliedro-ciudadania-digital`/`recuperar-la-agencia`).

**Debajo de la infografía, "Fuentes de los datos" (`fuentes`, 2 fichas con datos crudos, no usan `SourceCite`):**

### Ficha 1 — "Infancia y Adolescencia en Entornos Digitales" (Informe — Save the Children & GAD3)
| Cifra | Descripción | Detalle |
|---|---|---|
| 4,7 h | "Uso diario de móvil reportado por adultos sin hijos" | "frente a las 4,2 horas diarias de los propios adolescentes" |
| 45% | "De los adolescentes considera a sus padres como la figura de mayor credibilidad" | "para formarlos en el uso responsable de plataformas digitales" |

### Ficha 2 — "Uso de TikTok e Instagram en adolescentes" (Estudio — Redalyc)
| Cifra | Descripción | Detalle |
|---|---|---|
| 1 h 30 min | "Tiempo medio diario dedicado a TikTok" | "por adolescentes como plataforma de video de corta duración" |
| 1 h 10 min | "Tiempo medio diario dedicado a Instagram" | "segunda red social más utilizada en tiempo de uso cotidiano" |

> Nota: el dato "4,7 h de uso diario reportado por adultos SIN hijos, frente a 4,2 h de los propios adolescentes" es una comparación algo confusa tal como está redactada — compara el uso de móvil de un grupo de adultos que no son padres/madres con el uso de los adolescentes, sin dejar claro qué relación tiene ese grupo de comparación con la crianza (no son "los padres de estos adolescentes"); vale la pena revisar la redacción original de la fuente (Save the Children & GAD3) para confirmar si el dato está bien transcripto o si el grupo de comparación debería ser otro.

---

## Carrusel de presentación

Sin variante de audiencia. `CARRUSEL_IMAGES`: 7 láminas `.svg` en `/weekly-content/2026-W24/carrusel/{1-7}.svg` — **nota importante: la ruta usa la carpeta de contenido semanal `weekly-content/2026-W24`**, no una carpeta dedicada bajo `/img/tematicas/nnya-entorno-digital/` como en el resto de temáticas auditadas — sugiere que este material fue originalmente preparado como contenido de la semana 24 de 2026 y после reutilizado como el carrusel permanente de esta temática, en vez de vivir en su propia carpeta de assets de temática. Mismo patrón para `INFOGRAFIA_PATH` (`/weekly-content/2026-W24/infografia%206.png`).

---

## Centro de recursos — fuentes citadas

Lista numerada de las 8 entradas de `FUENTES_CITADAS`, cada una renderizada con `SourceCite`.

---

## Temas relacionados

3 tarjetas de navegación cruzada hardcodeadas inline en el JSX (mismo patrón de excepción visto en `cibercrianza`):

| Temática | Ruta | Descripción |
|---|---|---|
| Huella Digital | `/huella-digital` | "Identidad y privacidad" |
| Violencia Digital | `/violencia-digital` | "Protección y derechos" |
| Alfabetización Mediática | `/alfabetizacion-mediatica` | "Información y criterio" |

> Nota: a diferencia de `cibercrianza` (que enlaza a `/nnya-entorno-digital`, `/violencia-digital-infancias` y `/hiperconectividad-digital` — las 3 temáticas más cercanas temáticamente dentro y fuera del grupo "Infancia y Crianza"), esta página enlaza a 3 temáticas generales de ciudadanía digital sin ninguna de ellas pertenecer al grupo "Infancia y Crianza" ni mencionar explícitamente a `cibercrianza`, pese a ser su par más cercano en el mismo grupo — posible oportunidad de enlace cruzado no aprovechada.

---

## CTA final — "Construyamos un entorno digital más seguro para los chicos"

Con variante de audiencia (único bloque de la sección final con `ta()`):
> **Familias:** "La tecnología avanza rápido, pero el diálogo y el acompañamiento no pasan de moda. Involucrate hoy en la vida digital de tus hijos."
> **Docentes:** "La tecnología avanza rápido, pero el diálogo y el acompañamiento no pasan de moda. Involucrate hoy en la vida digital de tus estudiantes."

1 CTA: "Ver todas las temáticas" (a `/tematicas`).

Finaliza con `<TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />` — único mecanismo de progreso de toda la página.

---

## Confirmación explícita: alcance real de las variantes de audiencia

De los 6 bloques de contenido con textos potencialmente variables (`pasosMediacion`, `consejosRapidos`, más 2 títulos/textos sueltos: H1 del Hero y CTA final), **el H1 del Hero NO usa `ta()`** (queda genérico, "los chicos", sin variante). Solo 3 bloques tienen variante real: **1 de los 7 `pasosMediacion`** (paso 6, "Higiene digital" — variante aditiva, no sustitutiva), **2 de los 9 `consejosRapidos`** (los 2 de sharenting), y el **CTA final** (variante de sustantivo estándar "hijos"/"estudiantes"). **Todo el resto de la página** (`percepciones`, `estadisticas`, `señalesAlerta`, `fuentes`, la ventaja de UNICEF, la cita del filtro burbuja, la sección de historia) **es idéntico para ambas audiencias**. Es, en términos relativos, la temática de Grupo A con **menor proporción de contenido variable por audiencia** de las 2 auditadas en el grupo "Infancia y Crianza" hasta ahora (`cibercrianza` tenía variante en 5 de sus ~14 bloques; acá son solo 3 de ~8 relevantes, y una de esas 3 es aditiva en vez de una reescritura real).

---

## Resumen de hallazgos para el rediseño

1. **Es la primera temática auditada en todo el sitio sin ningún quiz ni mecanismo de autoevaluación** — el progreso depende enteramente de `TematicaCompletarButton` sin `computeProgress` personalizado, a diferencia de `cibercrianza` (2 quizzes) y de las 6 temáticas de "Libres bajo influencia" (quiz de 10 preguntas). Vale la pena decidir en el rediseño si esta temática debería incorporar algún elemento de autoevaluación, dado que es la única del grupo "Infancia y Crianza" sin uno.
2. **Los 2 badges flotantes del Hero ("+90% Conectados a diario", "6h+ Por día en pantallas") no coinciden con ninguna de las 3 cifras de `estadisticas` (93%, 81%, 55%) ni con los datos de `fuentes`**, y no tienen fuente citada — son 2 datos sueltos sin respaldo verificable, a diferencia del resto de cifras de la página.
3. **Las 3 estadísticas principales muestran su fuente como texto plano** ("Fuente: {stat.fuente}") en vez de usar el componente `SourceCite`, aunque las mismas 3 fuentes sí están correctamente tipadas y sí aparecen con `SourceCite` en el Centro de recursos — inconsistencia entre la atribución in-situ (sin link) y la atribución consolidada (con link).
4. **El paso 6 de la guía práctica ("Higiene digital") es el único de los 7 con variante de audiencia real, y es aditiva en vez de sustitutiva** (agrega una oración para docentes sobre la base ya escrita en clave "familias") — patrón distinto al resto de la plataforma, que típicamente sustituye sustantivos ("tus hijos" ↔ "tus estudiantes") en vez de agregar contenido extra a una sola variante.
5. **El carrusel y la infografía usan rutas de `/weekly-content/2026-W24/` en vez de una carpeta dedicada de assets de la temática** (`/img/tematicas/nnya-entorno-digital/...`) — sugiere que este material fue reutilizado de un contenido semanal puntual en vez de generarse específicamente para esta página permanente; vale la pena migrar estos assets a una ruta propia de la temática antes del rediseño, para no depender de una carpeta de contenido semanal que eventualmente podría archivarse (`npm run archive-old` mueve semanas pasadas a `public/weekly-content/archive/`, lo cual rompería estos links si esa semana llegara a archivarse).
6. **El dato "4,7 h de uso diario en adultos sin hijos, frente a 4,2 h de adolescentes" (ficha 1 de "Fuentes de los datos") tiene una redacción ambigua** — no queda claro qué relación tiene el grupo de comparación ("adultos sin hijos") con la crianza de esos adolescentes; conviene revisar la fuente original (Save the Children & GAD3) antes del rediseño.
7. **"Temas relacionados" no enlaza a `cibercrianza`**, pese a ser la temática más cercana dentro del mismo grupo "Infancia y Crianza" — enlaza en cambio a 3 temáticas de ciudadanía digital general (`huella-digital`, `violencia-digital`, `alfabetizacion-mediatica`), ninguna del mismo grupo. `cibercrianza`, en cambio, sí enlaza a `nnya-entorno-digital` en su propia sección de temas relacionados — el enlace cruzado es unidireccional.
8. **Es, de las 2 temáticas auditadas del grupo "Infancia y Crianza", la que tiene menor proporción de contenido con variante real de audiencia** (3 de ~8 bloques relevantes, con una de esas 3 siendo aditiva en vez de una reescritura) — comparado con `cibercrianza` (5 de ~14 bloques, todas sustitutivas). Ambas comparten el mismo fallback `'familias'` y el mismo helper `ta()`, confirmando que es una convención deliberada del grupo, no un accidente aislado.
9. **La imagen principal del Hero usa una foto de stock de Unsplash** (`images.unsplash.com`) en vez de un asset propio del proyecto — único caso verificado hasta ahora entre las temáticas auditadas; conviene confirmar si `next.config.mjs` tiene `images.unsplash.com` en `remotePatterns` (documentado en CLAUDE.md solo `josefarhat.com`, `img.youtube.com`, `www.comunicaciontucuman.gob.ar` y `*.fbcdn.net` como dominios permitidos) — si no está agregado, esta imagen podría no cargar en producción bajo el componente `next/image`, aunque acá se usa una etiqueta `<img>` nativa (no `next/image`) para esa imagen específica del Hero, lo cual evita el problema de `remotePatterns` pero contradice la convención del proyecto de "usar siempre `next/image` (`<Image>`)".
