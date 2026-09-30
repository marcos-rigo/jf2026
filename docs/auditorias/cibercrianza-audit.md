# Auditoría de contenido — Cibercrianza

Base para rediseño. Recorrido completo de `lib/cibercrianza-content.ts` (101 líneas — solo fuentes citadas, tipadas y separadas de la JSX) y `app/tematicas/cibercrianza/cibercrianza-content.tsx` (2061 líneas — el componente de contenido más largo auditado hasta ahora en toda la plataforma, superando incluso a `PoliedroCiudadaniaDigitalPage.tsx` del grupo "Libres bajo influencia"). Solo lectura, nada modificado.

Ruta: `/tematicas/cibercrianza` (two-file pattern: `page.tsx` con metadata SEO + `cibercrianza-content.tsx` client component). Grupo: "Infancia y Crianza". Es, según la nota de contexto de la consigna, la temática *benchmark* de calidad visual/interacción de toda la plataforma — la estética se autodenomina "Light Cyberpunk / Neo-Pop" (comentario en el propio código, línea 38): tipografía masiva, alto contraste, fondo claro con acentos neón (`--neon-blue #00F0FF`, `--neon-pink #FF007F`, `--neon-purple #9D00FF`), animaciones de scroll con Framer Motion (`useScroll`, `useSpring`, `useTransform`), barra de progreso de scroll fija en la parte superior (`ScrollProgress`), botón flotante "volver arriba" (`BackToTopButton`), y transiciones tipo "blur slide" entre preguntas de quiz (`qVar`, con `filter: blur()`).

**Patrón de audiencia: Group A (`resolveTexto`/`AudienciaTexto`)**, con una particularidad importante: el propio archivo define un helper local `ta()` (línea 385) que envuelve `resolveTexto` con fallback fijo a `'familias'` (no a `'docentes'`, a diferencia del patrón estándar documentado en CLAUDE.md donde el fallback se define por tema — acá el comentario del código dice explícitamente: *"la mayoría de los ítems de esta página no difieren entre 'familias' y 'docentes', así que solo los pocos migrados llevan el objeto. Fallback 'familias': es la voz original de esta página."* — es decir, la voz por defecto/original de todo el contenido es la de "familias", y "docentes" es la variante añadida después). El tipo `Opcion` del quiz (`{ texto: string | AudienciaTexto; puntos: number }`) confirma que incluso las opciones de respuesta individuales de una pregunta pueden tener variante de audiencia, no solo el enunciado — es el único ejemplo verificado en todo el sitio de variantes de audiencia a nivel de opción de respuesta.

**Progreso vía `useTematicaProgress`** con `computeCibercrianzaProgress` propio: 2 elementos medibles (los 2 quizzes de la página), cada uno vale 50%; `completada` quiere decir que ambos quizzes tienen resultado guardado. **Usa `TematicaCompletarButton`** al final de la página (línea 2055) — a diferencia del grupo "Libres bajo influencia", que nunca usa este botón manual; acá el botón es redundante en la práctica porque `completada` ya se deriva automáticamente de los 2 quizzes, pero el componente igual se renderiza (revisar si permite marcar manualmente incluso sin completar ambos quizzes).

**Usa `SourceCite`** (`components/tematicas/cibercrianza/source-cite.tsx`) — variante deliberadamente duplicada de la de `huella-digital`, con tipografía `lc-mono` y paleta neon-blue/pink para calzar con la estética "Light Cyberpunk" de esta página específica (comentario explícito en el código, línea 9-11).

---

## Datos generales — fuentes citadas (`lib/cibercrianza-content.ts`)

El archivo deja explícito en su comentario de cabecera (líneas 1-4) que **preguntas, perfiles, tabla, preguntasLimites, senalesAlerta, preguntasDialogo, ecosistema y compromisos son ejercicios/herramientas, no afirmaciones factuales**, y por eso no están en este archivo de fuentes — decisión editorial explícita de separar contenido interactivo/pedagógico de contenido que necesita respaldo bibliográfico.

### `KIDS_ONLINE_SOURCE`
> **Autor:** UNICEF Argentina / UNESCO
> **Nota:** "Encuesta Kids Online Argentina 2025 — 5.910 estudiantes de 9 a 17 años, 291 escuelas, 20 jurisdicciones (oct-dic 2024)"
> **URL:** https://www.unicef.org/argentina/media/24906/file/Encuesta%20Kids%20Online%20Argentina:%20Resultados%20principales.pdf

Es la fuente más reutilizada de toda la página: respalda las 4 cifras de "La realidad en números", el ítem "La autonomía prematura" (desafíos), y los datos de sextorsión y uso problemático de pantallas (riesgos).

### `BULLYING_SIN_FRONTERAS_SOURCE`
> **Autor:** Bullying Sin Fronteras
> **Nota:** "2025"
> **URL:** https://bullyingsinfronteras.blogspot.com/2022/02/estadisticas-de-bullying-en-la.html

### `GROOMING_LATAM_SOURCE` — marcada explícitamente como `unverified: true`
> **Autor:** Grooming LATAM
> **Nota:** "2024 — fuente no verificada con link primario"
> Sin URL. El código deja constancia explícita: *"No se pudo verificar un informe primario 'Grooming LATAM 2024' — se marca como sin verificar en vez de presentarla como una cita confirmada."* — buena práctica editorial de transparencia, coherente con el patrón `unverified` documentado en CLAUDE.md para `ciudadania-digital`/`huella-digital`.

### `MEDIACION_PARENTAL_QUOTE`
> **Texto:** "La investigación académica sobre mediación parental distingue estrategias de mediación activa/habilitante (diálogo, co-uso, acompañamiento) de estrategias de mediación restrictiva (prohibición, control técnico) — la primera permite explorar oportunidades dentro de un entorno de apoyo; la segunda reduce riesgos pero también reduce oportunidades."
> **Fuente:** Livingstone, S. & Helsper, E. J. — "Parental Mediation of Children's Internet Use." Journal of Broadcasting & Electronic Media, 52(4), 581-599 (2008) — https://www.tandfonline.com/doi/abs/10.1080/08838150802437396

Es el marco conceptual que ancla toda la página: la sección "Concepto" al inicio y la nota general de "estilos" (Acompañante/Permisivo/Restrictivo) al final del Quiz 2 dependen directamente de esta cita.

### `BYBEE_QUOTE`
> **Texto:** "El estudio original que identificó 3 estilos de mediación parental —restrictivo, evaluativo/orientador y desenfocado— fue publicado por Carl Bybee, Danny Robinson y Joseph Turow en 1982, sobre el consumo de televisión en la infancia. Décadas después, Sonia Livingstone y Ellen Helsper (2008) adaptaron ese mismo marco a internet, dando origen al campo que hoy se conoce como 'mediación parental digital'."
> **Fuente:** Bybee, C., Robinson, D. & Turow, J. — "Determinants of Parental Guidance of Children's Television Viewing for a Special Subgroup: Mass Media Scholars." Journal of Broadcasting, 26, 697-710 (1982) — sin URL ("cita bibliográfica estándar, sin versión digital gratuita", según nota del propio código).

### `GLOBAL_KIDS_ONLINE_QUOTE`
> **Texto:** "La Red Global Kids Online fue fundada en 2006 por el Centro de Investigación Innocenti de UNICEF, la London School of Economics (LSE) y la Red Europea de Kids Online, para generar evidencia comparada sobre la vida de niñas, niños y adolescentes en el entorno digital en todo el mundo. El informe Kids Online Argentina 2025, que ya citamos en esta página, es parte de esa red."
> **Fuente:** UNESCO — "Global Kids Online" — https://www.unesco.org/es/articles/kids-online

### `UNICEF_BENEFICIOS_QUOTE`
> **Texto:** "Internet y las plataformas digitales pueden ser herramientas poderosas para fomentar la creatividad, el aprendizaje y las conexiones sociales de niñas, niños y adolescentes. También es un lugar clave para expresar opiniones e informarse: la tecnología les permite compartir su voz sobre temas importantes, y acceder a contenido que promueve su aprendizaje y bienestar."
> **Fuente:** UNICEF — "Cómo Internet puede potenciar el aprendizaje, la creatividad y los vínculos de niños, niñas y adolescentes" — https://www.unicef.org/uruguay/crianza/digital/como-Internet-puede-potenciar-el-aprendizaje-creatividad-y-v%C3%ADnculos-de-ni%C3%B1os-ni%C3%B1as-y-adolescentes

### `MESAS_DIALOGO_QUOTE`
> **Texto:** "Las prácticas más frecuentes de niñas, niños y adolescentes en internet se relacionan con el aprendizaje, el entretenimiento y la socialización."
> **Fuente:** UNICEF Argentina — "Mesas de diálogo, Kids Online Argentina 2025" — https://www.unicef.org/argentina/media/26846/file/Ni%C3%B1as,%20ni%C3%B1os%20y%20adolescentes%20conectados.%20Kids%20Online%20Argentina%202025%20-%20Mesas%20de%20di%C3%A1logo.pdf.pdf

### `FUENTES_CITADAS` — listado consolidado (8 entradas, mostrado en el "Centro de recursos" al final de la página)

Orden exacto en el array: `MEDIACION_PARENTAL_QUOTE.source`, `BYBEE_QUOTE.source`, `GLOBAL_KIDS_ONLINE_QUOTE.source`, `KIDS_ONLINE_SOURCE`, `MESAS_DIALOGO_QUOTE.source`, `UNICEF_BENEFICIOS_QUOTE.source`, `BULLYING_SIN_FRONTERAS_SOURCE`, `GROOMING_LATAM_SOURCE` — las 8 fuentes reales del archivo, sin duplicados ni fuentes extra agregadas solo para esta lista consolidada (a diferencia de `ACADEMIC_CITATIONS` en `poliedro-ciudadania-digital`, que sí tenía entradas no citadas puntualmente en el cuerpo).

---

## Hero

Badge: "Cibercrianza" (con punto pulsante animado). H1 gigante con gradiente animado en la palabra "interactúan": **"¿Sabés dónde interactúan {ta(familias:"tus hijos?", docentes:"tus estudiantes?")}"** — es el único elemento del Hero con variante de audiencia real (resto es fijo).

Bajada (fija): "El territorio digital ya no es opcional. **Es el espacio donde viven.**"

**Blockquote del Hero (fija, atribuida a José Farhat):**
> "El problema no es el celular. El problema —y la oportunidad— es que nuestros hijos e hijas ya no viven solo en el mundo físico. Viven también en un territorio digital donde todo es igual de real: las amistades, los miedos, la identidad."

**2 CTAs:** "Descubrí tu perfil" (scroll a `#quiz`), "Ver estadísticas" (scroll a `#datos`).

**3 badges flotantes animados junto a la imagen del Hero** (`cibercrianza_hero.png`): "⚡ 95% tiene celular propio", "💖 80% en redes diario", "✨ 9,6 años: 1er celular" — adelantan 3 de las 4 cifras de la sección "La realidad en números" más abajo.

---

## Detrás del concepto

Sin variante de audiencia. Cita completa de `MEDIACION_PARENTAL_QUOTE` en blockquote + `SourceCite`. Este bloque introduce el marco teórico central de toda la página (mediación activa/habilitante vs. mediación restrictiva) antes de mostrar ningún dato o herramienta.

---

## Historia — "De dónde viene este campo"

Sin variante de audiencia. Presenta, en orden cronológico, las 2 citas académicas fundacionales del campo:

1. `BYBEE_QUOTE` — origen del concepto en 1982 (televisión), con ícono `History`.
2. `GLOBAL_KIDS_ONLINE_QUOTE` — fundación de la Red Global Kids Online en 2006 (UNICEF Innocenti + LSE + Red Europea de Kids Online), con ícono `Globe`.

Es la única temática auditada hasta ahora en toda la plataforma que dedica una sección completa a narrar explícitamente la genealogía académica del propio campo de estudio que trata (mediación parental digital), antes de entrar en datos o contenido práctico.

---

## "La realidad en números" (`id="datos"`)

Badge: "Argentina — UNICEF / UNESCO · Kids Online". Sin variante de audiencia en el texto de las cifras.

### `stats` (4 tarjetas, layout bento asimétrico — la primera ocupa el doble de ancho)

| Número | Descripción |
|---|---|
| 9,6 años | Edad promedio en que los chicos argentinos reciben su primer celular con internet |
| 95% | De los chicos de 9 a 17 años ya tiene celular propio. El 88% lo usa todos o casi todos los días |
| 80% | Usa redes sociales casi todos los días. TikTok, YouTube e Instagram son las más usadas |
| 1 de cada 2 | Adolescentes percibe tener un uso problemático de internet, celulares o videojuegos |

Todas atribuidas a "Kids Online — UNICEF/UNESCO" (pie de cada tarjeta) + `SourceCite` de `KIDS_ONLINE_SOURCE` al final del bloque.

---

## "Dos territorios" — Físico vs. Digital

H2 con variante de audiencia: `ta({familias:"Tus hijos ya viven en dos territorios", docentes:"Tus estudiantes ya viven en dos territorios"}, ...)`.

Bajada fija: "No entran y salen de internet: habitan simultáneamente en ambos espacios."

**2 tarjetas con imagen (`territorio_fisico.png` / `territorio_digital.png`):**

- **Territorio Físico** — tags: "Escuela y aula", "Club y deporte", "Barrio y amigos", "Hogar y familia". Texto: "El mundo presencial tradicional: relaciones directas, reglas sociales claras, presencia y supervisión adulta visible de manera cotidiana."
- **Territorio Digital** — tags: "Redes sociales", "Videojuegos online", "Algoritmos", "Mensajería instantánea". Texto: "El mundo digital interactivo: socialización sin barreras físicas, recompensa inmediata, influencia algorítmica y falta de visibilidad ante la mirada adulta."

---

## "¿Cómo funciona el territorio digital?" — Arquitectura persuasiva (3 bloques grandes con imagen)

Sin variante de audiencia. Bajada: "Las plataformas no son neutras: están diseñadas científicamente para capturar y retener la atención." Usa el array `disenioDigital` (5 ítems) repartido en 3 bloques visuales grandes alternados (imagen izquierda/derecha):

### Bloque 1 — "La Batalla por la Atención" (imagen `territorio_atencion.png`)
- **Algoritmos que perfilan** — "Los algoritmos aprenden en minutos qué tipo de contenido genera más reacción en cada usuario y amplifican ese perfil, sin importar si el contenido es beneficioso o dañino."
- **Scroll infinito** — "Los videos cortos (Reels, TikToks, Shorts) crean scroll infinito: cada uno es una mini-recompensa que activa el sistema dopaminérgico e invita al siguiente."

### Bloque 2 — "La Búsqueda de Validación Social" (imagen `territorio_validacion.png`)
- **Sistemas de validación** — "Los 'me gusta', notificaciones y contadores de visitas son sistemas de retroalimentación variable que generan búsqueda compulsiva de aprobación."
- **Influencers con agenda comercial** — "Los creadores de contenido operan dentro de lógicas comerciales encubiertas: venden estilos de vida, estéticas corporales, productos e ideologías."

### Bloque 3 — "La Difuminación de lo Real" (imagen `territorio_ia.png`)
- **IA que borra lo real** — "La IA generativa produce imágenes, voces y videos falsos cada vez más indistinguibles de lo real, dificultando la lectura crítica del entorno."

---

## Quiz 1 — "Test de Presencia" (`id="quiz"`)

Badge: "Autoevaluación · 10 preguntas". H2: "¿Qué tan presente estás en su vida digital?"

**Elemento interactivo — quiz de 10 preguntas con puntaje 0/5/10 por opción, transición "blur slide" entre preguntas, círculo de progreso SVG animado (`useCountUp`) al final, persistencia vía `progress.saveQuizResult("quiz_acompanamiento", {...})`:**

### Las 10 preguntas (`preguntas`) — variantes de audiencia por pregunta y por opción

| # | Enunciado (docentes / familias si difiere) | Opciones (puntos) |
|---|---|---|
| 1 | "¿Sabés en qué redes sociales tiene cuenta {tu hijo/a / cada estudiante}?" | Sí, conozco todas (10) / Algunas, no todas (5) / No tengo idea (0) |
| 2 | "¿Sabés con quién habla {tu hijo/a / tu estudiante} por WhatsApp, chats o juegos online?" | Conozco a sus contactos principales (10) / Solo a algunos (5) / No lo sé (0) |
| 3 | "¿Alguna vez hablaron en familia sobre lo que se puede y no se puede compartir en internet?" *(sin variante)* | Sí, lo conversamos seguido (10) / Una o dos veces (5) / Nunca lo hablamos (0) |
| 4 | "¿{Tu hijo/a / Tu estudiante} sabe que puede contarte si algo lo incomoda o asusta en internet?" | Sí, tiene confianza para hacerlo (10) / Creo que sí, pero no estoy seguro/a (5) / Probablemente no me lo diría (0) |
| 5 | "¿Conocés qué tipo de contenido consumen habitualmente (videos, juegos, influencers)?" *(sin variante)* | Sí, tengo bastante idea (10) / Algo, pero no en detalle (5) / No tengo idea (0) |
| 6 | "¿Tienen acuerdos con el curso sobre el uso del celular (horarios, espacios, límites)?" *(enunciado sin variante — nota: dice "el curso" incluso para familias, posible inconsistencia editorial)* | **Opción con variante:** "Sí, acordamos reglas juntos con {nuestros hijos / el curso}" (10) / Hay algunas reglas pero no siempre se cumplen (5) / No hay acuerdos establecidos (0) |
| 7 | "¿Sabés qué son los algoritmos y cómo pueden influir en lo que ven {tus hijos / tus estudiantes}?" | Sí, lo entiendo bien (10) / Tengo una idea básica (5) / No sé qué son (0) |
| 8 | "Si {tu hijo/a / tu estudiante} recibiera un mensaje de un desconocido en un juego o red social, ¿sabés cómo reaccionaría?" | Sí, lo hemos hablado y sabe qué hacer (10) / Creo que bien, pero no lo hemos hablado (5) / No lo sé (0) |
| 9 | "¿Sabés qué es el grooming o el ciberbullying?" *(sin variante)* | Sí, conozco ambos conceptos (10) / Escuché algo, pero no en detalle (5) / No los conozco (0) |
| 10 | "¿Participás activamente del mundo digital de {tu hijo/a / tus estudiantes} (le preguntás, te interesás, a veces compartís)?" | Sí, me intereso activamente (10) / A veces, no siempre (5) / Casi nunca (0) |

> Nota sobre la pregunta 6: el enunciado en sí ("¿Tienen acuerdos con el curso...?") usa vocabulario docente incluso cuando no tiene variante `familias`/`docentes` explícita, mientras que la primera opción de respuesta sí varía ("nuestros hijos" vs. "el curso") — es una inconsistencia menor: el enunciado neutro asume la voz docente pero la opción de respuesta corrige eso.

### Perfiles resultantes (`perfiles`, 4 rangos de 0-100 puntos)

| Rango | Nombre | Descripción (docentes / familias si difiere) |
|---|---|---|
| 80-100 | 🟢 Guía digital presente | "Tenés una presencia activa en el entorno digital de {tus hijos / tus estudiantes}. Seguí construyendo esa confianza: el vínculo es el mejor factor de protección." |
| 60-79 | 🟡 Guía digital en camino | "Estás en el camino correcto. Hay áreas donde podés profundizar el acompañamiento. Empezá por abrir una conversación sin agenda de control." *(sin variante)* |
| 40-59 | 🟠 Guía digital en alerta | "Es momento de empezar a conocer mejor el territorio digital donde viven {tus hijos / tus estudiantes}. No necesitás ser experto/a en tecnología: necesitás estar presente." |
| 0-39 | 🔴 Guía digital desconectado/a | "El territorio digital de {tus hijos / tus estudiantes} te es mayormente desconocido. No es tarde para empezar. Un primer paso: esta semana pedile {que te muestre / a alguno que te muestre} qué hace cuando agarra el teléfono." |

El resultado se muestra con un círculo de progreso SVG animado que cuenta desde 0 hasta el puntaje final (`useCountUp`, curva de easing cúbica), coloreado según el perfil obtenido.

---

## "Lo que vemos... y lo que puede estar pasando" — Tabla comparativa editorial

Sin variante de audiencia. Badge: "Perspectiva del Entorno". Usa un layout de tarjetas "split" asimétricas (`lc-editorial-split-card`) — panel izquierdo "Lo que observamos" vs. panel derecho superpuesto "Realidad adolescente", con un conector visual entre ambos en desktop.

### `tabla` (6 filas)

| Lo que observamos (adulto) | Realidad adolescente |
|---|---|
| Está todo el tiempo mirando el teléfono | Gestiona activamente su vida social y su imagen entre pares |
| Le importa mucho cuántos likes tiene | Busca validación y reconocimiento, necesidades propias de su etapa de desarrollo |
| Se enoja muchísimo si le sacamos el celular | Siente que lo alejamos de su espacio de pertenencia y vínculos más cercanos |
| Habla con personas que no conocemos | Puede estar construyendo comunidades de interés o buscando apoyo emocional |
| Se queda hasta tarde con el teléfono | El tiempo nocturno es cuando tiene más privacidad digital para socializar |
| No quiere mostrarnos lo que hace | Necesita un espacio propio; la falta de visibilidad también puede ser señal de riesgo |

---

## "Los desafíos de criar en la era digital"

Sin variante de audiencia. `desafios` (4 tarjetas, grid 2×2, numeradas con marca de agua grande):

| # | Título | Descripción |
|---|---|---|
| 1 | La velocidad del cambio | "Los cambios tecnológicos son más rápidos que los procesos educativos. Cuando los adultos aprenden a usar una plataforma, los chicos ya migraron a otra." |
| 2 | La validación social digital | "Antes la aprobación venía de círculos reducidos. Hoy puede venir —o no venir— de cientos o miles de personas. El impacto emocional es proporcional." |
| 3 | La batalla por la atención | "Las plataformas están diseñadas por equipos de ingenieros para maximizar el tiempo de uso. No compiten con nosotros: compiten con todo." |
| 4 | La autonomía prematura | "El 46% de los adolescentes argentinos reconoce que el tiempo frente a las pantallas le genera problemas como menor rendimiento escolar. Muchos acceden a experiencias para las que aún no tienen herramientas emocionales." — con `SourceCite` de `KIDS_ONLINE_SOURCE` |

---

## "Conocer los riesgos es estar informados para acompañar" — Acordeón de riesgos

Sin variante de audiencia. Badge: "Riesgos reales · Argentina". `riesgos` (6 ítems, acordeón expandible individual con estado `openRiesgos: Set<number>`):

| Riesgo | Descripción | Señales | Dato citado | Fuente |
|---|---|---|---|---|
| Grooming | "Adulto que se hace pasar por par para ganar confianza y acceder al NNA con fines de abuso o explotación. Comienza frecuentemente en los chats de videojuegos como Roblox y Minecraft." | "Amistad con adulto desconocido en línea, secrecía, regalos o dinero sin origen claro." | "El 55% de los menores argentinos no sabe qué es el grooming." | `GROOMING_LATAM_SOURCE` (sin verificar) |
| Ciberbullying | "Hostigamiento, humillación o exclusión entre pares mediada por tecnología. Puede incluir difusión de imágenes o rumores." | "No quiere ir a la escuela, llora con el teléfono, evita hablar de sus compañeros." | "Argentina ocupa el 5° lugar mundial en casos de acoso escolar y digital. Entre mayo 2024 y mayo 2025 se registraron más de 140.000 casos graves." | `BULLYING_SIN_FRONTERAS_SOURCE` |
| Sextorsión | "Presión para compartir imágenes íntimas, luego usadas como chantaje. Puede afectar a cualquier edad." | "Angustia extrema, pide dinero sin explicar por qué, cierra el teléfono bruscamente." | "1 de cada 3 adolescentes argentinos afirmó haberse encontrado en persona con alguien que conoció por internet." | `KIDS_ONLINE_SOURCE` |
| Contenidos nocivos | "Exposición a violencia, pornografía, autolesión, trastornos alimentarios, ideologías extremas." | "Cambios en vocabulario, conducta o intereses; referencias a temas preocupantes." | "Los algoritmos amplifican el contenido que genera reacción, sin importar si es dañino para el usuario." | *(sin `SourceCite` asignado en el acordeón)* |
| Uso problemático de pantallas | "Uso compulsivo que interfiere con el sueño, el estudio y los vínculos presenciales." | "Dificultad para dejar el dispositivo, irritabilidad intensa cuando se limita el acceso, pérdida de intereses previos." | "El 46% de los adolescentes argentinos percibe que las pantallas le generan problemas como menor rendimiento escolar." | `KIDS_ONLINE_SOURCE` |
| Desinformación | "Consumo y difusión de contenidos falsos, teorías conspirativas o información manipulada." | "Creencias inusuales, rechazo de fuentes confiables, citas frecuentes de influencers sin verificación." | "La IA generativa produce imágenes y videos falsos cada vez más indistinguibles de lo real." | *(sin `SourceCite` asignado en el acordeón)* |

> Nota: 2 de los 6 riesgos ("Contenidos nocivos" y "Desinformación") no tienen ningún `SourceCite` renderizado en su panel expandido, pese a incluir un "dato" con cifra o afirmación factual — el código asigna `SourceCite` mediante comparación exacta del `titulo` (`r.titulo === "Grooming"`, etc.) y simplemente no cubre esos 2 casos con ningún `if`.

---

## "Internet también es una oportunidad" — Ventajas

Sin variante de audiencia. 2 tarjetas:

- **"Creatividad, aprendizaje y voz propia"** — cita completa de `UNICEF_BENEFICIOS_QUOTE` + `SourceCite`.
- **"Aprendizaje, entretenimiento y socialización"** — cita completa de `MESAS_DIALOGO_QUOTE` + `SourceCite`.

---

## Quiz 2 — "¿Cómo manejás los límites digitales?" (5 situaciones)

H2 con variante: `ta({familias:"¿Cómo manejás los límites digitales en casa?", docentes:"¿Cómo manejás los límites digitales con tu curso?"}, ...)`. Badge: "Quiz interactivo · 5 situaciones".

**Elemento interactivo — quiz de 5 situaciones, cada opción clasificada en 1 de 3 tipos (`permisivo`/`acompanante`/`restrictivo`), sin puntaje numérico — el resultado es el tipo predominante entre las 5 respuestas (empate resuelto a favor de "acompanante" primero, luego "permisivo" sobre "restrictivo"), persistencia vía `progress.saveQuizResult("quiz_estilos", {...})`:**

### Las 5 situaciones (`preguntasLimites`) — con variante de audiencia en el enunciado, opciones fijas

| # | Situación (docentes / familias) | Opción permisiva | Opción acompañante | Opción restrictiva |
|---|---|---|---|---|
| 1 | "{Tu hijo/a de 13 años quiere instalarse / Un estudiante de 13 años te cuenta que quiere instalarse} TikTok. ¿Qué {hacés/le decís}?" | "Se lo permito y confío en que va a usarlo bien" | "Lo hablamos, revisamos juntos la configuración de privacidad y acordamos un tiempo de uso" | "Se lo prohíbo directamente" |
| 2 | "Notás que {tu hijo/a se queda / un estudiante llega agotado porque se queda} hasta la madrugada con el celular. ¿Qué hacés?" | "Le digo que lo apague, pero al día siguiente vuelve a pasar lo mismo" | "Propongo en familia que los celulares se carguen fuera del cuarto por la noche" | "Le saco el celular sin más explicaciones" |
| 3 | "{Tu hijo/a llega / Un estudiante llega} angustiado/a a {casa/clase} por algo que pasó en un grupo de WhatsApp. ¿Qué hacés?" | "Le explico que le reste importancia y que busque una alternativa constructiva" | "Lo escucho sin juzgar, le pregunto qué necesita y pensamos juntos qué hacer" | "Le pido que me muestre el teléfono para ver qué pasó" |
| 4 | "Descubrís que {tu hijo/a tiene / un estudiante tiene} una cuenta en una red social con una edad falsa. ¿Qué hacés?" | "Lo dejo pasar, total todos los chicos lo hacen" | "Lo hablo con calma, explico el por qué de los límites de edad y buscamos una alternativa juntos" | "Le borro la cuenta inmediatamente y le quito el teléfono una semana" |
| 5 | "{Tu hijo/a menciona / Un estudiante menciona} que tiene un 'amigo/a de internet' que no conoce en persona. ¿Qué hacés?" | "No le doy importancia, tiene amigos en todos lados" | "Le pregunto con curiosidad genuina: ¿Cómo se conocieron? ¿De qué hablan? ¿Sabés quién es realmente?" | "Le digo que corte el contacto de inmediato" |

### Los 3 estilos resultantes (`estilos`)

| Estilo | Descripción (docentes / familias si difiere) |
|---|---|
| ✅ Acompañante | "Priorizás el diálogo y la construcción de confianza. Ese vínculo es el factor de protección más poderoso que existe." *(sin variante)* |
| 🔓 Permisivo/a | "Confiás en {tus hijos / tus estudiantes}, pero puede faltarle estructura al acompañamiento. Los límites construidos juntos no limitan: protegen." |
| 🔒 Restrictivo/a | "Priorizás el control, pero eso puede llevar al uso clandestino. La prohibición sin diálogo no cierra el territorio digital: solo lo vuelve invisible para vos." *(sin variante)* |

Bloque final de esta sección: repite el mismo texto teórico sobre mediación activa/restrictiva ya citado en "Detrás del concepto" (línea 1667-1673), con `SourceCite` de `MEDIACION_PARENTAL_QUOTE` — es una repetición literal parcial del contenido introductorio, reforzándolo al final del recorrido.

---

## "Control vs. Presencia"

Sin variante de audiencia. 2 columnas contrastadas:

**Lógica del control (tachado, en rojo):** "Prohibir apps sin explicación" · "Espiar el teléfono de manera encubierta" · "Quitar el dispositivo como castigo" · "'Porque lo digo yo'" · "Adulto que ignora el territorio digital"

**Lógica del acompañamiento (check verde):** "Explicar por qué ciertos contenidos no son apropiados para su edad" · "Acordar transparencia: 'si hay algo que me preocupa, lo hablamos'" · "Establecer consecuencias relacionadas con el uso" · "'Porque me importa que estés bien en todos los espacios donde vivís'" · "Adulto que se interesa, pregunta, explora junto al adolescente"

---

## "¿Cuándo prestar más atención?" — Señales de alerta

Sin variante de audiencia. Copy: "No para vigilar. Para comprender y acompañar a tiempo de manera clara." `senalesAlerta` (9 ítems, grid de tarjetas):

1. Cambios abruptos de humor vinculados al uso del dispositivo
2. Secretismo inusual o angustia si alguien se acerca mientras usa el teléfono
3. Pérdida del sueño sistemática por uso nocturno
4. Aislamiento progresivo: prefiere la interacción digital y evita encuentros presenciales
5. Mención de personas adultas desconocidas con quienes tiene "amistad" en línea
6. Recepción de regalos o dinero de personas no identificadas
7. No quiere ir a la escuela, tristeza sin causa aparente, rechazo del grupo
8. Consumo de contenidos vinculados a autolesión, trastornos alimentarios o ideologías extremas
9. Irritabilidad intensa o colapso emocional cuando se limita el acceso al dispositivo

---

## "Preguntas para abrir el diálogo sin interrogar"

Sin variante de audiencia. Copy: "La mejor protección es la confianza. Estas preguntas ayudan a abrir la conversación desde la curiosidad y el respeto mutuo." `preguntasDialogo` (7 preguntas):

1. "¿Qué es lo que más te gusta hacer cuando agarrás el teléfono?"
2. "¿Hubo alguna vez algo en internet que te hizo sentir mal? ¿Qué hiciste?"
3. "¿Seguís a alguien que te parece muy interesante? ¿Qué te gusta de lo que hace?"
4. "¿Cuándo sentís que usás demasiado el teléfono? ¿Qué lo provoca?"
5. "Si alguien te molestara o te hiciera sentir incómodo en línea, ¿me lo contarías? ¿Por qué sí o por qué no?"
6. "¿Qué diferencias notás entre cómo sos en persona y cómo te mostrás en redes?"
7. "¿Cuándo creés que nosotros, los adultos, usamos demasiado el teléfono?"

Acompañado de imagen (`cibercrianza_dialogue.png`) y una caja "Claves para conversar mejor" (3 ítems fijos, sin array tipado propio, hardcodeados directamente en el JSX): "Escucha activa y sin juicios", "Elegí momentos relajados", "Hablá desde la empatía" — cada uno con su propio texto explicativo.

---

## "Ninguna familia puede sola" — Ecosistema

Sin variante de audiencia. Blockquote atribuida a José Farhat: *"Un ecosistema de cuidado no es un conjunto de adultos preocupados. Es un conjunto de adultos, instituciones y recursos coordinados."*

### `ecosistema` (6 actores)

| Actor | Rol |
|---|---|
| Familia | "Primera línea: establece acuerdos, observa, dialoga, interviene ante señales de riesgo" |
| Institución educativa | "Formación en ciudadanía digital, detección de riesgos, protocolo de intervención" |
| Equipo de orientación escolar | "Intervención especializada ante situaciones de vulnerabilidad o crisis" |
| Servicios de salud | "Abordaje de impactos en salud mental: ansiedad, uso problemático, depresión vinculada a lo digital" |
| Comunidad | "Espacios presenciales de pertenencia: alternativa al territorio digital como único espacio de vida social" |
| Políticas públicas | "Regulación, formación docente, alfabetización digital familiar" |

---

## "5 compromisos para asumir hoy"

Sin variante de audiencia salvo el último. Copy: "No hace falta cambiar todo de golpe. Lo importante es dar el primer paso." `compromisos` (5 acciones numeradas):

| # | Acción | Detalle (docentes / familias si difiere) |
|---|---|---|
| 1 | CONOCER | "Esta semana le pregunto si podemos compartir juntos la actividad vinculada al dispositivo." |
| 2 | ACORDAR | "Propongo en familia revisar juntos los acuerdos digitales que tenemos — o construir los que no tenemos aún." |
| 3 | DIALOGAR | "Incorporo una pregunta sobre lo digital en alguna conversación cotidiana, sin que sea un interrogatorio." |
| 4 | COORDINAR | "Me comunico con la escuela para saber qué espacios existen para hablar sobre lo digital y cómo podemos articular." |
| 5 | CUIDARME | "Reviso mi propio uso del teléfono. Los adultos también somos parte del ecosistema digital de {nuestros hijos / nuestros estudiantes}. Somos un ejemplo." |

---

## Centro de recursos — fuentes citadas

Lista numerada de las 8 entradas de `FUENTES_CITADAS`, cada una renderizada con `SourceCite` dentro de una tarjeta individual.

---

## Frase de cierre

Sin variante de audiencia. Blockquote grande atribuida:
> "La infancia siempre necesitó adultos que conocieran el territorio donde los chicos jugaban y crecían. Hoy ese territorio también es digital. La tarea es la misma: estar presentes." — José Farhat · 2.º Congreso Provincial de Alfabetización, Innovación y Vínculos

2 CTAs: "Hacer el test" (vuelve a `#quiz`), "Ver temáticas" (a `/tematicas`).

---

## Temas relacionados

3 tarjetas de navegación cruzada, hardcodeadas directamente en el JSX (sin array tipado propio a nivel de módulo — está definido inline dentro del render):

| Temática | Ruta | Descripción |
|---|---|---|
| NNyA y el Entorno Digital | `/nnya-entorno-digital` | "Cómo perciben los chicos y chicas el mundo conectado." |
| Violencia Digital en Infancias | `/violencia-digital-infancias` | "Detección temprana y señales de grooming o acoso." |
| Hiperconectividad Digital | `/hiperconectividad-digital` | "El impacto de las pantallas y el uso reflexivo." |

Finaliza con `<TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />`.

---

## Confirmación explícita: alcance real de las variantes de audiencia

De los ~14 bloques hardcodeados de esta página con contenido textual (`preguntas`, `perfiles`, `preguntasLimites`, `estilos`, `compromisos`, más los títulos de sección), **solo 5 arrays/objetos tienen algún campo con variante real `familias`/`docentes`**: `preguntas` (7 de 10 enunciados + 1 opción de una pregunta), `perfiles` (3 de 4 descripciones), `preguntasLimites` (las 5 situaciones), `estilos` (1 de 3 descripciones), y `compromisos` (1 de 5 detalles). El H1 del Hero y 2 H2 de sección también varían. **Todos los demás bloques de contenido de la página** (`disenioDigital`, `tabla`, `desafios`, `riesgos`, `senalesAlerta`, `preguntasDialogo`, `ecosistema`, y el 2º de los 3 estilos) **son idénticos para ambas audiencias** — coherente con el comentario del propio código de que la mayoría del contenido no necesitaba diferenciarse. En todos los casos donde sí hay variante, el patrón es el mismo: sustitución de sustantivo/pronombre ("tu hijo/a" ↔ "tu estudiante"/"un estudiante", "en casa" ↔ "con tu curso", "en familia" queda fijo en ambas en algún caso puntual) — nunca una reescritura de fondo del contenido o del tono.

---

## Resumen de hallazgos para el rediseño

1. **El fallback de audiencia de esta página es `'familias'`, no `'docentes'`** — a diferencia del patrón estándar de Grupo A documentado en CLAUDE.md (que usa `'docentes'` como fallback en `ciudadania-digital`), acá el propio código documenta que "familias" es la voz original/por defecto de toda la página, y "docentes" fue agregada después como variante. Vale la pena confirmar si esta discrepancia de convención entre temáticas del mismo "Grupo A" es intencional o accidental antes del rediseño.
2. **Pregunta 6 del Quiz 1 tiene una inconsistencia menor**: el enunciado neutro dice "¿Tienen acuerdos con el curso...?" (vocabulario docente) sin variante propia, pero su primera opción de respuesta sí varía correctamente ("nuestros hijos" / "el curso") — el enunciado debería tener su propia variante `familias` para ser consistente con el resto del quiz.
3. **2 de los 6 riesgos del acordeón ("Contenidos nocivos" y "Desinformación") no muestran ningún `SourceCite`** pese a incluir una afirmación factual/dato en su panel expandido — el mecanismo de asignación por comparación exacta de `titulo` (`r.titulo === "Grooming"`, etc.) simplemente no cubre esos 2 casos.
4. **Es el componente de contenido más largo auditado hasta ahora en toda la plataforma** (2061 líneas), superando incluso a `PoliedroCiudadaniaDigitalPage.tsx` (1743 líneas) — coherente con su rol de "benchmark de calidad visual/interacción", pero también el candidato más pesado en términos de mantenimiento futuro si se replican patrones similares en otras temáticas del mismo grupo.
5. **Es la única temática auditada con el tipo `Opcion` del quiz admitiendo `string | AudienciaTexto`** — permite variar el texto de una opción de respuesta individual, no solo el enunciado de la pregunta (usado en la pregunta 6). Ningún otro quiz auditado en la plataforma (ni en Grupo A ni en el bespoke binario de "Libres bajo influencia") tiene este nivel de granularidad de variante.
6. **El bloque final del Quiz 2 repite literalmente el mismo texto teórico sobre mediación activa/restrictiva** ya presentado en "Detrás del concepto" al inicio de la página — es una redundancia de contenido, aunque puede ser intencional como refuerzo pedagógico de cierre.
7. **Usa `TematicaCompletarButton` pese a tener progreso 100% automático** (derivado de los 2 quizzes) — a diferencia de todo el grupo "Libres bajo influencia", que nunca usa este botón manual porque su progreso también es automático vía quiz. Vale la pena revisar si el botón permite marcar la temática como completa sin haber hecho ambos quizzes (posible atajo no deseado) o si simplemente queda deshabilitado/oculto cuando `completada` ya es `true` por otra vía.
8. **La caja "Claves para conversar mejor" (3 ítems) es el único bloque de contenido textual real de la página sin su propio array tipado a nivel de módulo** — está hardcodeada directamente dentro del JSX de la sección "Preguntas para el diálogo", a diferencia de todo el resto del contenido de la página, que sigue consistentemente el patrón de arrays tipados al inicio del archivo.
9. **Las 3 "Temas relacionados" al final también están hardcodeadas inline dentro del render**, sin tipo ni array a nivel de módulo — mismo patrón de excepción que el punto anterior.
10. **Buena práctica a destacar:** el archivo de fuentes deja explícito por escrito, en comentarios, qué contenido queda deliberadamente fuera de las fuentes citadas (ejercicios/herramientas vs. afirmaciones factuales) y por qué una fuente (`GROOMING_LATAM_SOURCE`) se marca como no verificada en lugar de presentarla como confirmada — es el nivel de documentación de decisiones editoriales más explícito encontrado hasta ahora en cualquier archivo `lib/*-content.ts` auditado.
