# Auditoría de contenido — Ciudadanía Digital: el Poliedro

Base para rediseño. Recorrido completo de la entrada `poliedro-ciudadania-digital` en `lib/libres-bajo-influencia-data.ts` (líneas 554-624 de 629 totales — la última entrada del archivo, cierre del grupo) y `components/tematicas/PoliedroCiudadaniaDigitalPage.tsx` (1743 líneas — **el componente más largo de las 6 temáticas del grupo**, más de 700 líneas por encima del promedio del resto). Solo lectura, nada modificado.

## ⚠️ Corrección al contexto recibido — esta temática SÍ tiene audiencia "familias"

El contexto de la consigna afirma "Audiencias asignadas: docentes (única temática sin familias asignada)". **Esto no coincide con lo que dice el código.** La lectura directa de `lib/libres-bajo-influencia-data.ts` línea 623 muestra:

```ts
audiencias: ['docentes', 'familias'],
```

Y la 4ª sección de contenido ("Formar para la libertad") tiene un campo `paragraphsFamilias` con variante completa (ver más abajo). El componente además usa el mismo ternario `audienciaActual === 'familias' ? sec.paragraphsFamilias : sec.paragraphs` (línea 1124) que el resto del grupo, y lo aplica activamente. **No es la única temática sin familias — de las 6 temáticas del grupo, es una más con 2 audiencias (`docentes`, `familias`), igual que `subculturas-digitales`, `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros` y `caldos-de-cultivo`.** La única con 3 audiencias es `recuperar-la-agencia` (`docentes`, `familias`, `ninas-ninos-adolescentes`). El resto de este documento sigue el código real, no la premisa de la consigna.

---

Ruta: `/tematicas/poliedro-ciudadania-digital`. Es la 6ª y última temática del grupo "Libres bajo influencia" — su descripción explícita en la data es "la tesis de toda la charla" y "la respuesta final a la paradoja del título" ("Libres bajo influencia"). Layout: scroll continuo de **15 bloques numerados en los comentarios del propio código** (el componente etiqueta cada `<section>` con un comentario `══ N NOMBRE ══`), más un test intermedio marcado "14B": Hero, Franja de datos duros, Introducción, Explorador del poliedro (6 caras), 4 secciones de contenido base (`data.sections`, con wrap editorial de imagen), Atlas de IA (PNUD), Gobernanza Glocal, IA Productiva, IA para el Bien y la Vida, Simulador "¿Libres bajo influencia?", Ética y Nuevo Constitucionalismo Digital, Hoja de Ruta (10 salidas), Dashboard estadístico oficial, Cita de cierre, Material de estudio, Fuentes académicas, Mini-test de autoverificación (práctica libre), Evaluación/Quiz oficial.

Progreso vía `useTematicaProgress` con `computeQuizProgress` compartido. **No hay `TematicaCompletarButton`** — mismo patrón del grupo.

**Es, por lejos, la temática con más contenido "extra" fuera de `data.sections`** de las 6 del grupo: solo 4 secciones vienen de la data compartida, pero el componente agrega **9 bloques temáticos completos** hardcodeados directamente en el archivo (Atlas de IA, Gobernanza Glocal, IA Productiva, IA para el Bien y la Vida, Ética y Constitucionalismo, Hoja de Ruta, Dashboard estadístico, más los 2 elementos interactivos del Explorador del poliedro y el Simulador). Gran parte de este contenido adicional (IA-Ceno, Calentamiento Tecnológico Global, Colonialismo Digital, Algor-ética, IA-Salmón, Constitucionalismo Social de la IA, etc.) usa terminología no citada en ninguna otra temática del grupo y con una densidad conceptual notablemente mayor a las 5 restantes.

**Patrón de audiencia: bespoke binario**, igual mecanismo del grupo (`audienciaActual === 'familias' ? sec.paragraphsFamilias : sec.paragraphs`, línea 1124). Sin `introFamilias` (`data.intro` se usa directo, sin ternario). **Solo 1 de las 4 secciones tiene `paragraphsFamilias`** (la última, "Formar para la libertad") — mismo patrón minimalista de variantes ya visto en `recuperar-la-agencia` (single-phrase swap, no un reescritura completa).

**No usa `SourceCite`** — usa el mecanismo `ACADEMIC_CITATIONS` + tarjetas-enlace (mismo patrón visual que `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros` y `caldos-de-cultivo`, aunque con más entradas que ninguna de esas: **14 citas**, la lista más larga de las 6 temáticas del grupo).

**Quiz oficial correctamente implementado** — a diferencia de `algoritmos-perfilado`, `caldos-de-cultivo` y `recuperar-la-agencia` (que omiten `showQuiz`/`previousResult`/`passed`), esta página **sí** destructura y usa los tres (líneas 935-936), mostrando pantalla de bienvenida con el umbral 8/10, el resultado del intento previo, y la distinción aprobado/no aprobado en resultados (línea 1665). Es la **segunda temática del grupo correctamente implementada**, junto con `diseno-persuasivo-patrones-oscuros`.

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `poliedro-ciudadania-digital`
- **Categoría:** "Ciudadanía digital"
- **Color de marca:** `#0EA5E9` (celeste/sky) — aunque el componente en realidad usa una paleta propia de 6 tonos (`BLUE #2563EB`, `CYAN #0891B2`, `INDIGO #4F46E5`, `EMERALD #059669`, `AMBER #D97706`, `VIOLET #7C3AED`), ninguno de los cuales coincide con el `color` declarado en la data.
- **Icono:** `Hexagon` — coherente con la metáfora del "poliedro", aunque el poliedro descripto en el texto tiene 8 caras (un octaedro no se representa naturalmente como hexágono).
- **Descripción:** "La tesis de toda la charla: formar ciudadanía digital, no solamente usuarios. Un poliedro de ocho caras y la respuesta final a la paradoja del título."
- **`authors` (6 nombres, renderizados en el Hero):** John Dewey, UNESCO, David Buckingham, Emmanuel Levinas, Jürgen Habermas, Amartya Sen — **la lista más larga de autores destacados de las 6 temáticas del grupo**.
- **`audiencias`:** `['docentes', 'familias']` (ver corrección arriba).
- **Material adjunto:** `pdfUrl` (`/img/tematicas/poliedro-ciudadania-digital/presentacion.pdf`), `infografiaUrl` (`/img/tematicas/poliedro-ciudadania-digital/infografia.webp`).
- **`intro`:** sin variante de audiencia.

---

## Hero

Badges: "// Ciudadanía digital" (categoría) + "Cierre de 'Libres bajo influencia'" — **es la única temática del grupo cuyo Hero se autodenomina explícitamente como el cierre de la serie**. H1: "Ciudadanía digital: el poliedro". Bajada (`data.description`, fija): "La tesis de toda la charla: formar ciudadanía digital, no solamente usuarios. Un poliedro de ocho caras y la respuesta final a la paradoja del título."

**Chips de autores citados (6):** John Dewey · UNESCO · David Buckingham · Emmanuel Levinas · Jürgen Habermas · Amartya Sen.

**2 CTAs:** "Explorar el poliedro" (scroll a `#contenido`), "Ir a la evaluación" (scroll a `#evaluacion`).

**Imagen del Hero** con badge de cita: "UNESCO · Ciudadanía Digital" → `https://www.unesco.org/en/media-information-literacy`, label visual "El Poliedro Digital".

### Franja de datos duros del Hero (`KEY_STATS`, 4 tarjetas, fondo oscuro)

| Valor | Etiqueta | Fuente citada |
|---|---|---|
| < 5 años | Vida media de las habilidades digitales | CIAT, aprendizaje permanente |
| 4 ejes | Dimensiones del Marco Mineduc de Ciudadanía Digital | Crítica, convivencia, cuidado y uso |
| 9 dominios | Áreas de comportamiento digital | Modelo Ribble & Bailey |
| 5 continentes | De gobernanza de IA en el desarrollo humano | Atlas IA PNUD / América Latina |

> Nota: "9 dominios" (Ribble & Bailey) convive en la misma página con "un poliedro de **ocho** caras" (la propia descripción de la temática) — dos modelos de conteo distinto (8 vs. 9) presentados sin conciliar explícitamente cuál es el marco propio de la charla y cuál es una referencia externa citada solo de forma comparativa.

---

## Introducción — "Formar, no prohibir" (`id="contenido"`)

`data.intro` (fijo, sin variante de audiencia):
> "Después de recorrer subculturas, algoritmos, diseño persuasivo y caldos de cultivo, aparece una tentación comprensible: prohibir, bloquear, retirarse. Pero el territorio digital ya forma parte de la educación, del trabajo, de los vínculos, de la participación política — ya no es un lugar al que uno entra y sale. John Dewey entendía la educación como experiencia presente: no se puede educar para una vida futura ignorando la vida que ya está pasando hoy. Los límites son necesarios en ciertas situaciones, pero un límite nunca reemplaza a la formación. Prohibir es fácil y rápido; formar es lento, y es lo nuestro."

**Cita adicional fija (hardcodeada en el JSX, no en `data`):**
> "Una persona no es un dato, ni un perfil, ni una audiencia, ni una probabilidad. Es un sujeto de derechos y una historia abierta."

> Nota: esta introducción menciona explícitamente por nombre las 4 temáticas anteriores del grupo (subculturas, algoritmos, diseño persuasivo, caldos de cultivo) — es la única temática de las 6 que se presenta a sí misma como una síntesis narrativa de las anteriores, reforzando su rol de "cierre" de la serie.

---

## Explorador interactivo — "Seis Caras del Poliedro, en Profundidad"

Sin variante de audiencia. Copy: "La ciudadanía digital no es homogénea ni unidimensional. Elegí una cara para examinar su marco conceptual, basado en la bibliografía citada en esta temática."

**Elemento interactivo — selector de 6 caras (`POLYHEDRON_FACES`, componente `PolyhedronExplorer`), la 1ª activa por defecto.** Nota importante: aunque la temática se llama "un poliedro de **ocho** caras", este explorador solo desarrolla **6** de esas 8 caras en profundidad (deja fuera, o las trata de forma más superficial en otra sección, "derechos y responsabilidades" y "consumo y economía digital" del listado de 8 caras que aparece más abajo en `data.sections`).

**Cara 01 — "Alfabetización digital crítica y lectura lateral"** (Brain/azul):
> Cita: "El saber instrumental no garantiza conocimiento. Navegar no es solo presionar botones, sino cuestionar intenciones y fuentes." — Roxana Morduchowicz (UNESCO) & Mineduc
- "La alfabetización digital crítica va más allá del adiestramiento técnico: es la habilidad de analizar el origen, la intención, la veracidad y las omisiones de la información que circula en las plataformas."
- "Lectura lateral (Caulfield): verificar una afirmación saliendo de la página de origen y consultando fuentes secundarias e independientes."
- "Infodemia (EJE / Caballero Álvarez): la sobreabundancia de datos falsos o deliberadamente sesgados durante crisis sanitarias o políticas."

**Cara 02 — "Inteligencia artificial y desarrollo humano"** (Cpu/índigo):
> Cita: "Evitar la regulación zombie con enfoques granulares: la trazabilidad y transparencia algorítmica son pilares de los derechos humanos." — Atlas IA — PNUD / Gustavo Beliz
- "El Atlas de IA para el Desarrollo Humano (PNUD) advierte sobre el surgimiento del 'IA-Ceno' y la necesidad de auditar los algoritmos públicos que afectan salud, empleo, justicia y subsidios estatales."
- "Registro de algoritmos públicos: exigir que los Estados transparenten los modelos predictivos que usan."
- "Data gap vs. digital gap: la falta de datos locales produce sesgos coloniales en los modelos generativos."

**Cara 03 — "Arquitectura de elección y patrones oscuros"** (Network/violeta):
> Cita: "En el mundo digital, la arquitectura también regula. No hace falta una prohibición cuando el entorno vuelve fácil una conducta y difícil la otra." — Lawrence Lessig, Thaler & Sunstein, Shoshana Zuboff
- "A través de tecnología persuasiva (B.J. Fogg) y patrones oscuros, las plataformas explotan los atajos del Sistema 1 (Kahneman) para maximizar la permanencia y la extracción de datos."
- "Nudges (empujones): arquitecturas de diseño que sesgan decisiones supuestamente libres."
- "Capitalismo de vigilancia (Zuboff): conversión de la experiencia humana en datos de comportamiento traducidos en mercados de futuros."

**Cara 04 — "Brechas digitales en América Latina"** (Globe2/cian):
> Cita: "Las brechas de habilidades y capacidad organizacional limitan el potencial transformador de las tecnologías en los procesos participativos." — SciELO / M. Suárez & N. Robaina (2026)
- "Investigación comparada sobre plataformas como Montevideo Decide y el Presupuesto Participativo de Vicente López: tener conexión no basta si persisten las desigualdades en habilidades y agencia."
- "1ª brecha: acceso a redes. 2ª brecha: habilidades de uso. 3ª brecha: beneficios tangibles."

**Cara 05 — "Convivencia digital, salud y cuidados"** (HeartPulse/esmeralda):
> Cita: "No acompañamos dispositivos. Acompañamos formas de habitar. Un conflicto en un grupo de chat entra a la escuela o al trabajo intacto." — danah boyd & Mineduc Convivencia Digital
- "Las redes no son meras herramientas abstractas, sino 'públicos conectados'. La ética del cuidado exige responsabilidad afectiva digital, protección de la salud mental infanto-juvenil y erradicación del discurso de odio."

**Cara 06 — "Democracia, justicia y Estado de Derecho"** (Gavel/ámbar):
> Cita: "La justicia y la democracia son dos caras de la misma moneda. La eficiencia digital debe garantizar el trato equitativo y respetuoso a cada ciudadano." — Juan Carlos Campo Moreno, Bobbio & Dworkin
- "El Estado de Derecho contemporáneo exige modernizar la Justicia con tecnología eficiente, sin caer en la deshumanización del juzgamiento. La tecnología es un medio para fortalecer la ciudadanía, no para reemplazar las garantías individuales."

---

## Las 4 secciones de contenido base (`data.sections`)

Cada sección va acompañada de una `EditorialImageFrame` (imagen flotante con badge de fuente) tomada de `SECTION_VISUALS` (4 entradas, una por sección, con su propio `source`/`sourceUrl`).

### Sección 01 — "Ser ciudadano digital" (sin variante de audiencia)

Imagen: `ser_ciudadano.webp`, fuente citada en el badge: "UNESCO" → `https://www.unesco.org/en/media-information-literacy`.

> "Detrás de cada pantalla sigue habiendo una persona con derechos, con responsabilidades, con emociones, con capacidad de decidir y de participar. Ser ciudadano digital no es solamente saber usar la tecnología: es comprender el entorno, decidir con autonomía, convivir con otros, cuidar y participar en transformar ese entorno. La UNESCO enlaza todo esto: ciudadanía digital, alfabetización mediática, ética, participación y pensamiento crítico."

Cita de cierre: "No necesitamos solamente mejores usuarios. Necesitamos mejores ciudadanos en un mundo digital."

### Sección 02 — "Un poliedro de ocho caras" (sin variante de audiencia)

Imagen: `ocho_caras.webp`, fuente citada: "Ribble & Bailey" → `https://www.digcitinstitute.com/9-elements` (**nota: el link de esta imagen apunta al modelo de 9 elementos de Ribble & Bailey, no a una fuente que respalde específicamente "8 caras"** — es la misma discrepancia numérica 8 vs. 9 señalada antes en el franja de estadísticas del Hero).

> "Para ordenar la estrategia, la charla propone la imagen de un poliedro: un cuerpo con muchas caras, porque el problema tiene muchas caras y la respuesta también. Las caras son: alfabetización digital, mediática e informacional; identidad y huella; privacidad y seguridad; derechos y responsabilidades; convivencia y cultura de paz; participación y democracia; consumo y economía digital; e inteligencia artificial y algoritmos. Ninguna cara alcanza por sí sola — una contraseña fortísima no impide compartir una mentira, y saber programar no garantiza reconocer un sesgo."

**Esta es la única enumeración completa y explícita de las 8 caras en todo el sitio** — coincide parcialmente pero no exactamente con las 7 caras listadas en `POLIEDRO_CARAS` dentro de `recuperar-la-agencia` (que carecía de "derechos y responsabilidades" como cara separada y fusionaba/renombraba otras). Confirma que **el número correcto según la fuente canónica de esta temática es 8**, y que el `POLIEDRO_CARAS` de `recuperar-la-agencia` (7 caras) está desactualizado o es una síntesis incompleta respecto de esta lista.

Cita de cierre: "El problema es complejo. La respuesta, también, tiene que ser integral."

### Sección 03 — "Algunas caras, de cerca" (sin variante de audiencia, la más extensa de las 4 — 5 párrafos)

Imagen: `caras_de_cerca.webp`, fuente citada: "David Buckingham" → link a Polity Press.

> "Leer el territorio digital: David Buckingham advierte que la educación mediática no puede reducirse a enseñar a usar el aparato. Tiene que preguntar quién produce esto, cómo lo representa, qué intereses hay detrás. La pregunta pasa de '¿qué estoy viendo?' a '¿por qué estoy viendo esto, qué quedó afuera, y qué buscan de mí?'."
>
> "Identidad y privacidad: la identidad no es una ficha que se completa una vez, es una historia en construcción. Proteger la identidad es también defender el derecho a cambiar, a no quedar encerrados en una categoría que un sistema armó en un momento particular de la vida."
>
> "Derechos, responsabilidades y convivencia: internet no suspendió los derechos humanos ni las responsabilidades. Emmanuel Levinas ponía la responsabilidad ante el otro en el centro de la ética — en una pantalla, el rostro del otro puede desaparecer, pero su vulnerabilidad no. Buena parte del daño digital nace justo ahí, en que dejamos de ver el rostro."
>
> "De audiencia a ciudadanía: el territorio digital también es espacio público. Jürgen Habermas pensó el espacio público como un ámbito donde se forma opinión a través de razones. Las plataformas amplían voces, pero también aceleran, fragmentan y reparten la visibilidad de manera despareja. Una democracia digital necesita ciudadanos, no solamente audiencias."
>
> "Comprender la inteligencia que organiza lo que vemos: cada vez más decisiones pasan por sistemas que seleccionan, clasifican, recomiendan, predicen y generan. Las preguntas ciudadanas frente a esos sistemas son concretas: ¿quién lo diseñó?, ¿con qué datos funciona?, ¿qué prioriza?, ¿qué deja afuera?, ¿se puede equivocar?, ¿qué sesgos reproduce?"

Cita de cierre: "Cuanto más inteligentes sean las tecnologías, más necesitamos fortalecer el juicio humano."

### Sección 04 — "Formar para la libertad" (ÚNICA sección CON variante — `paragraphsFamilias`)

Imagen: `formar_libertad.webp`, fuente citada: "Amartya Sen" → link a Wikipedia sobre "Development as Freedom".

Párrafo 2 idéntico en ambas variantes: "Las plataformas influyen, pero no determinan del todo. Los algoritmos organizan, pero se pueden interrogar. Los diseños empujan, pero se puede uno detener. Las culturas influyen, pero también se pueden transformar. Formar ciudadanía digital es formar personas capaces de comprender, elegir, convivir, cuidar, participar y transformar."

| Docentes (contenido por defecto) | Familias |
|---|---|
| "Amartya Sen enseñó a entender la libertad de un modo que lo cambia todo: la libertad son las capacidades reales para hacer y para ser. No alcanza con que una opción exista en el papel — para ser realmente libre hacen falta conocimientos, derechos, apoyos y posibilidades efectivas de actuar. Eso es exactamente lo que hace **una escuela**: **la escuela** reparte capacidades, **la escuela** reparte libertad." | "Amartya Sen enseñó a entender la libertad de un modo que lo cambia todo: la libertad son las capacidades reales para hacer y para ser. No alcanza con que una opción exista en el papel — para ser realmente libre hacen falta conocimientos, derechos, apoyos y posibilidades efectivas de actuar. Eso es exactamente lo que hace **una familia**: **la familia** reparte capacidades, **la familia** reparte libertad." |

> Es el mismo patrón de variante minimalista visto en `recuperar-la-agencia`: un único sustituto de sustantivo ("escuela"→"familia") repetido 3 veces en la misma oración, sin ningún otro cambio de contenido, tono o ejemplos.

Sin cita de cierre en esta sección (es la única de las 4 sin `quote`).

---

## Bloque 4 — Atlas de Inteligencia Artificial para el Desarrollo Humano (`id="ia-lab"`, fondo oscuro)

Sin variante de audiencia. Título llamativo: "El IA-Ceno y el Calentamiento Tecnológico Global".

> "La transición del Antropoceno al **IA-Ceno** marca un punto de inflexión: la inteligencia artificial dejó de ser una herramienta técnica para constituirse en una fuerza geopolítica de alcance planetario. El 'Calentamiento Tecnológico Global' —la contraparte digital del cambio climático— no se limita al consumo energético de los centros de datos: se manifiesta en la emisión de 'nanopartículas de influencia psicológica' que producen una 'estanflación de conocimiento y solidaridad'."
>
> "Pregunta central: ¿es la IA una esperanza para cerrar brechas históricas, o el 'problema final' para la especie por el desalineamiento entre sus objetivos y los propósitos humanos? Evitar la 'gobernanza zombie' —hiper-burocrática pero incapaz de ordenar las fuerzas que desató— es la tarea urgente."

**Elemento interactivo — "Los 5 continentes del desarrollo humano" (`AI_CONTINENTS`, componente `AiContinentsTabs`, tabs de 5 pestañas):**

1. **Gobernanza algorítmica y Estado de Derecho** — "Regulación estatal para garantizar transparencia, protección de datos personales e identificación de algoritmos en el sector público (ej. programa AAIP en Argentina)."
2. **Talento, futuro del trabajo y alfabetización** — "Marcos para la capacitación directiva, sustitución de habilidades repetitivas y preparación ante la vida media decreciente del conocimiento tecnológico."
3. **Protección de grupos vulnerables y perspectiva de género** — "Guías para transversalizar la perspectiva de género en IA y prevenir sesgos raciales y discriminatorios en la seguridad pública algorítmica."
4. **Medio ambiente, sustentabilidad y cambio climático** — "Uso de IA para prevenir catástrofes naturales, con alerta crítica sobre el elevado consumo energético de los centros de datos y los modelos generativos."
5. **Salud pública, bio-IA y educación** — "Detección temprana de epidemias, gestión inteligente de quirófanos y modelos predictivos para prevenir la deserción escolar de manera ética."

---

## Bloque 5 — Gobernanza Glocal

Sin variante de audiencia. Copy: "La gobernanza de la IA se despliega bajo un signo 'glocal': sin un marco común, América Latina y el Caribe queda expuesta a un 'darwinismo digital' y al riesgo del **Colonialismo Digital**, donde la captura de la institucionalidad por intereses mercantilistas amenaza incluso la soberanía de los datos indígenas."

**Comparación de 3 modelos regulatorios geopolíticos (`GOVERNANCE_MODELS`, tarjetas lado a lado):**

| Región | Enfoque regulatorio | Clasificación | Legislación clave | Cuerpo regulador | Objetivo principal |
|---|---|---|---|---|---|
| Estados Unidos | Descentralizado, no vinculante, basado en órdenes ejecutivas | Basada en el poder computacional y el hardware | Orden Ejecutiva sobre IA, controles de exportación de semiconductores | Varias agencias federales (FDA, FTC) | Competencia geopolítica y seguridad nacional |
| China | Vertical, iterativo, con regulaciones específicas por dominio | Algorítmica, por dominio de aplicación | Provisiones sobre recomendaciones algorítmicas y IA generativa | Administración del Ciberespacio de China (CAC) | Control social y alineación con valores estatales |
| Unión Europea | Horizontal e integral (AI Act), cumplimiento centralizado | Basada en el riesgo (cuatro categorías) | Ley de Inteligencia Artificial de la UE (AI Act) | Oficina de IA Europea y agencias nacionales | Protección de derechos individuales y privacidad |

**"El modelo 'FDA para algoritmos'" — 16 puntos (`FDA_MODEL_POINTS`):** una propuesta de aplicar a los algoritmos un modelo de gestión de calidad similar al de la FDA (chequeo antes/durante/después del despliegue):
1. Pre-aprobación del sistema
2. Documentación obligatoria
3. Puerta de aprobación previa
4. Auditorías de terceros
5. Detección de salidas (contenido generado por IA)
6. Modificaciones planificadas
7. Mecanismo de quejas (estilo MedWatch)
8. Revisión armonizada
9. Claridad del modelo (evitar SOUP)
10. Ombudsman para IA
11. Divulgación de incidentes
12. Poder de retiro
13. Políticas de confianza (nube)
14. Poderes de investigación
15. Fondos comparables
16. Responsabilidad legal

---

## Bloque 6 — IA Productiva

Sin variante de audiencia. Copy: "La 'Gran Fábrica de la IA' no es etérea: depende de recursos naturales finitos. América Latina ocupa un lugar estratégico, no solo como consumidora, sino como proveedora crítica de los insumos del IA-Ceno."

**3 tarjetas (`PRODUCTIVE_AI_CARDS`):**
- **"El Triángulo del Litio"** — "Argentina, Bolivia y Chile son depositarios del 'Triángulo del Litio', esencial para la transición digital. LAC lidera el ranking global de reservas de minerales críticos — pero el 'Big Bang de la IA en la producción minera' exige políticas industriales que superen el extractivismo puro, evitando que los datos regionales sean solo materia prima para centros de cómputo externos."
- **"Los canarios en la mina"** — "El impacto en el empleo se divide en tareas que la IA puede sustituir, complementar o ampliar. Los trabajadores de las industrias culturales actúan hoy como 'canarios en la mina', alertando sobre el agotamiento del oxígeno creativo ante la automatización. Sin una transición humanista, enfrentamos un 'Taylorismo Digital': monitoreo milimétrico de la fuerza laboral."
- **"La paradoja de la productividad"** — "La hiperconectividad no garantiza eficiencia. La 'Estanflación Cognitiva' — inflación de conexiones y deflación de pensamiento crítico — amenaza con estancar el desarrollo si la tecnología no se orienta a los sectores vitales."

---

## Bloque 7 — IA para el Bien y la Vida

Sin variante de audiencia. Copy: "La aplicación de IA en servicios públicos es la llave para cerrar brechas históricas en la región, siempre que se aleje del 'solucionismo tecnológico' vacío."

**3 tarjetas (`SECTORAL_AI_CARDS`):**
- **"Revolución en la salud"** — "La IA ya supera el rendimiento humano en oncología y radiología. El 'aprendizaje federado' permite entrenar modelos sin comprometer la privacidad. El caso AIME usa IA para la vigilancia de brotes de dengue mediante secuencias predictivas — pero el 'Doctor IA' requiere niveles de aceptación social que solo la transparencia puede brindar."
- **"Educación: el camino de ida y vuelta"** — "El Plan Ceibal de Uruguay es el paradigma regional de la 'analítica a gran escala': usa redes neuronales para predecir el fracaso escolar y la deserción mediante el análisis de variables del contexto familiar."
- **"IA verde"** — "Los 'gemelos digitales' — como los usados en Brasil para prevenir inundaciones — permiten una gestión resiliente de la 'casa común'. Esto debe equilibrarse contra la voracidad hídrica y energética de los modelos de deep learning."

---

## Simulador "¿Libres bajo influencia?" (`id="simulador"`)

Sin variante de audiencia. Copy: "Aplicá los conceptos de Lawrence Lessig ('el código es ley'), Thaler & Sunstein ('nudges'), Daniel Kahneman (Sistema 1 vs. 2) y B.J. Fogg ('tecnología persuasiva') respondiendo ante simulaciones reales de la web."

**Elemento interactivo — 3 escenarios secuenciales con feedback teórico (`INFLUENCE_SCENARIOS`, componente `InfluenceScenarioSimulator`), 2 opciones cada uno (una correcta, una incorrecta), avanza cíclicamente:**

### Escenario 1 — "El feed infinito y la notificación persuasiva" (B.J. Fogg & patrones oscuros)
> "Recibís una notificación: '¡Tu contacto comentó algo polémico sobre un tema de tu interés! Reaccioná en 2 minutos'. Al ingresar, la app no te lleva directo al comentario, sino que te sumerge en un feed infinito que auto-reproduce videos urgentes."
- ❌ "Seguir desplazándome en la app. El algoritmo sabe exactamente lo que me interesa ver." → "Caíste en el bucle de 'recompensa variable'. Las plataformas usan el Sistema 1 (Kahneman) para extraer tiempo e interacciones (Zuboff)."
- ✅ "Pausar, desactivar las notificaciones push y usar la lectura lateral para verificar si la noticia era real." → "¡Excelente! Ejerciste agencia y modificaste tu entorno (Lessig). Al frenar el impulso del Sistema 1, activás la lectura reflexiva del Sistema 2."

### Escenario 2 — "Contenido generado por IA y sesgo de confirmación" (Infodemia & alfabetización crítica)
> "Ves una imagen hiperrealista en redes sociales de una catástrofe climática con un titular escandaloso. Amigos tuyos la están compartiendo alarmados sin citar fuentes."
- ❌ "Compartirla inmediatamente para alertar a mi comunidad; más vale prevenir." → "Estás propagando la infodemia. El sesgo de confirmación nos impulsa a compartir lo que emociona antes de verificar."
- ✅ "Buscar la imagen en buscadores inversos y chequear si agencias de fact-checking la validaron." → "Perfecto. Aplicaste alfabetización digital crítica y la regla de no difundir sin verificación comprobada."

### Escenario 3 — "Inscripción en una plataforma con opciones preseleccionadas" (Thaler & Sunstein: nudges y valores por defecto)
> "Al registrarte en un servicio educativo público, la casilla 'Acepto compartir mi perfil de navegación para publicidad de terceros' viene marcada por defecto (opt-out)."
- ❌ "Hacer clic en 'Aceptar todo' rápidamente para ingresar de inmediato." → "Caíste en la 'arquitectura de elección por defecto': los diseñadores saben que la mayoría no desmarca casillas por inercia."
- ✅ "Desmarcar la casilla de publicidad y revisar qué datos realmente necesita la plataforma." → "Defendiste tu privacidad desde el diseño (privacy by design), reconociendo que tus datos no son una mercancía sin control."

---

## Bloque 9 — Ética y Nuevo Constitucionalismo Digital

Sin variante de audiencia. Copy: "Es urgente transitar de un 'estado artificial de derecho' a un **Constitucionalismo Social de la IA**. La 'IA Centauro' no reemplaza la agencia humana: coopera con ella, 'juntos a la par'."

**"Los 4 laberintos del riesgo" (`RISK_LABYRINTHS`, tarjetas con pensadores de referencia por categoría):**

| Categoría | Pensadores | Ítems |
|---|---|---|
| Tecnológicos | Asimov / Dick | Alucinaciones, Jail-breaking, Comportamientos emergentes no alineados |
| Existenciales | Shelley / Prometeo | Pérdida de control, Desalineamiento de objetivos, Riesgo de extinción |
| Sociales | Huxley / Orwell / Bradbury | Polarización, "Democracia incivil", Adicción mental, Estado de vigilancia global |
| Económicos | Marx / Taylor | Monopolios, Fin del trabajo, Burbujas especulativas, Concentración de dividendos digitales |

**Bloque de cierre (fijo):**
> "La **'Algor-ética'** debe ser el lenguaje de integración, traduciendo la dignidad humana a computación numérica. Esto incluye la protección de los **neuro-derechos** y el 'derecho al switch off' frente a los hyper-nudges y patrones oscuros del e-commerce. La IA debe potenciar una **Democracia Aumentada** que enriquezca la deliberación, evitando el 'secuestro de sufragios' mediante la microsegmentación proselitista."

> Nota: esta sección introduce por nombre a pensadores de ciencia ficción (Asimov, Philip K. Dick, Mary Shelley, Aldous Huxley, George Orwell, Ray Bradbury) junto a filósofos/economistas reales (Marx, Taylor) sin distinguir explícitamente el registro ficcional del teórico — es el único bloque de la temática, y de todo el grupo "Libres bajo influencia", que cita literatura/ciencia ficción como marco conceptual junto a bibliografía académica.

---

## Bloque 10 — Hoja de Ruta: 10 Salidas Posibles (fondo oscuro)

Sin variante de audiencia. Badge: "El Gran Proyecto Transformador (GPT) para América Latina". Copy: "La misión estratégica no es solo diseñar un 'buen algoritmo' (eficiente), sino un **'algoritmo bueno'** (ético): la 'IA-Salmón' que nada contracorriente de la manipulación y el lucro ciego para proteger al ciudadano de los 'hackeos cerebrales'."

**`ROADMAP_ITEMS` (10 propuestas numeradas):**
1. Pacto Global de Ética obligatorio.
2. Acuerdo transnacional de no proliferación de IA armamentista.
3. Moratoria inmediata de modelos fuera de control.
4. Licencias habilitantes ex ante.
5. Auditorías sociales y ciudadanas.
6. Impuestos digitales globales inteligentes.
7. Panel Científico Inter-Gubernamental de la IA (estilo IPCC).
8. Implementación de "white boxes" (algoritmos explicables).
9. Apertura de documentación a la comunidad científica.
10. Estándares de calidad y seguridad universales.

Cierre (fijo, itálica): "La IA debe ser siempre el co-piloto y nunca el juez final de nuestra existencia social. La primacía de la agencia humana es el único resguardo contra el vacío del determinismo tecnológico en el IA-Ceno."

---

## Bloque 11 — Indicadores Oficiales de la Ciudadanía Digital (`id="estadisticas"`)

Sin variante de audiencia. Copy: "Métricas extraídas de los informes de CEPAL, BID, CIAT, UNESCO y Dialnet sobre brechas de acceso, caducidad de competencias y uso significativo."

### Elemento interactivo — `StatsDashboard`, 2 gráficos de barras animadas (sin librería externa — implementado con `motion.div` de Framer Motion, a diferencia del `StatsDashboard` de `caldos-de-cultivo` que sí usa Recharts)

**Gráfico 1 — Índice de Desarrollo de Banda Ancha (IDBA)** (fuente: CIAT / BID / CEPAL):

| País | Valor |
|---|---|
| Chile | 7.8 |
| Barbados | 7.2 |
| Uruguay | 6.9 |
| Argentina | 6.4 |
| Brasil | 6.1 |
| Surinam / Haití | 2.3 |

**Gráfico 2 — Vida media de las habilidades digitales** (fuente: CIAT Nº 46):

| Año | % de vigencia |
|---|---|
| Año 0 | 100% |
| Año 1 | 80% |
| Año 2 | 60% |
| Año 3 | 42% |
| Año 4 | 25% |
| Año 5 | 10% |

**3 tarjetas de estadísticas destacadas (`STAT_HIGHLIGHTS`):**
- **DigComp 2.0 (Unión Europea)** — "Establece 5 áreas clave: alfabetización en datos, comunicación y colaboración, creación de contenido digital, seguridad y resolución de problemas."
- **Uso significativo vs. acceso** — "SciELO (2026): en proyectos como Montevideo Decide y el Presupuesto Participativo de Vicente López, la principal barrera no es el dispositivo, sino las habilidades organizacionales y de uso."
- **Respuesta ante la infodemia** — "EJE / Caballero Álvarez: la sobreabundancia de datos falsos durante la COVID-19 demostró que la inmersión empírica sin alfabetización crítica propicia la manipulación social."

---

## Cita de cierre

`data.closingQuote` (única cita, sin variante de audiencia): "No se trata de vivir libres de toda influencia. Se trata de aprender a ser libres bajo influencia."

> Es la misma frase de cierre (con variación mínima de puntuación: sin coma tras "influencia" en la primera oración, dos oraciones en vez de una) que aparece en `recuperar-la-agencia`, atribuida ahí explícitamente a "José Néstor Farhat" — acá se presenta sin atribución nominal, como cierre de la charla completa "Libres bajo influencia" en sí misma.

---

## Material de estudio — Presentación en Slides e Infografía Visual (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`:** 14 diapositivas `.webp` (`/img/tematicas/poliedro-ciudadania-digital/slides/`) — **una menos que `recuperar-la-agencia` (15)**, y menos que otras temáticas del grupo (`caldos-de-cultivo`/`algoritmos-perfilado` no documentadas con conteo exacto aquí, pero el patrón visto hasta ahora ronda 12-15).

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mecanismo compartido). Imagen: `/img/tematicas/poliedro-ciudadania-digital/infografia.webp`.

---

## Fuentes Oficiales, Datos y Citas Verificables (`id="fuentes"`)

Badge de conteo: "14 Citas Académicas & Legales" — **la lista más larga de fuentes de las 6 temáticas del grupo** (más del doble que `recuperar-la-agencia`, que tenía 8).

### Listado completo (`ACADEMIC_CITATIONS`, 14 entradas, formato tarjeta-enlace: autor, título, publicación, url, tema, estadística)

| Autor | Título | Publicación | Tema | Estadística/dato | URL |
|---|---|---|---|---|---|
| John Dewey | Democracy and Education (Democracia y educación) | Filosofía de la educación como experiencia presente | No se educa para una vida futura ignorando la vida que ya está pasando hoy | Marco fundacional de la pedagogía experiencial | https://en.wikipedia.org/wiki/Democracy_and_Education |
| UNESCO | Alfabetización Mediática e Informacional (MIL) | Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura | Enlaza ciudadanía digital, alfabetización mediática, ética, participación y pensamiento crítico | Marco de referencia global adoptado por ministerios de educación | https://www.unesco.org/en/media-information-literacy |
| David Buckingham | Media Education: Literacy, Learning and Contemporary Culture | Polity Press | La educación mediática no puede reducirse a enseñar a usar el aparato | Referencia central en alfabetización crítica de medios | https://www.politybooks.com/bookdetail?book_slug=media-education-literacy-learning-and-contemporary-culture--9780745631407 |
| Emmanuel Levinas | La ética del rostro del otro | Stanford Encyclopedia of Philosophy | La responsabilidad ante el otro como centro de la ética, incluso mediada por una pantalla | Marco filosófico para pensar el daño digital | https://plato.stanford.edu/entries/levinas/ |
| Jürgen Habermas | Teoría del espacio público | Stanford Encyclopedia of Philosophy | El espacio público como ámbito donde se forma opinión a través de razones | Base teórica para distinguir audiencia de ciudadanía digital | https://plato.stanford.edu/entries/habermas/ |
| Amartya Sen | Development as Freedom (El desarrollo como libertad) | Premio Nobel de Economía 1998 | La libertad como capacidades reales para hacer y para ser, no solo opciones en el papel | Marco de "capacidades" adoptado por el PNUD para medir desarrollo humano | https://en.wikipedia.org/wiki/Development_as_Freedom |
| Gustavo Beliz et al. (2025) | Atlas de Inteligencia Artificial para el Desarrollo Humano de América Latina | PNUD / UNDP | Gobernanza de IA, IA-Ceno, programas de la AAIP en Argentina y derechos digitales en ALC | Estudio de referencia regional citado en esta temática | https://www.undp.org/sites/g/files/zskgke326/files/2025-06/atlas_a_8_6_compressed_0_0.pdf |
| M. Suárez & N. Robaina (2026) | Brechas digitales en la participación ciudadana | SciELO Uruguay | Estudio comparado sobre Montevideo Decide y el Presupuesto Participativo de Vicente López | La barrera principal no es el dispositivo: son las habilidades organizacionales | http://www.scielo.edu.uy/scielo.php?script=sci_abstract&pid=S2301-13782026000101204&lng=pt&nrm=iso&tlng=es |
| E. Yánez-Lucero et al. (2025) | La ética digital en la educación | Dialnet | Fundamentos teóricos para una ciudadanía crítica, con marcos de la OCDE, DigComp 2.0 y UNESCO | Revisión académica arbitrada sobre ética digital docente | https://dialnet.unirioja.es/servlet/articulo?codigo=10370796 |
| Ministerio de Educación de Chile (2025) | Marco de Ciudadanía Digital Mineduc | Gobierno de Chile | Definición institucional y las 4 dimensiones para comunidades educativas | 4 ejes: crítica, convivencia, cuidado y uso | https://ciudadaniadigital.mineduc.cl/ |
| Senado Argentina / UNESCO | Ciudadanía Digital: el desafío del siglo XXI | Honorable Senado de la Nación Argentina | Exposiciones sobre competencias críticas y superación de la nueva exclusión digital | Panel legislativo con especialistas de UNESCO | https://www.senado.gob.ar/prensa/19280/noticias |
| Mike Ribble & Gerald Bailey | Los 9 elementos de la ciudadanía digital | Digital Citizenship Institute | Modelo de referencia sobre las áreas de comportamiento digital responsable | 9 dominios adoptados por programas educativos en toda la región | https://www.digcitinstitute.com/9-elements |
| Comisión Europea | DigComp 2.0: el marco europeo de competencias digitales | Joint Research Centre (JRC) | 5 áreas clave: datos, comunicación, creación de contenido, seguridad y resolución de problemas | Marco de referencia oficial de la Unión Europea | https://joint-research-centre.ec.europa.eu/digcomp_en |

> Nota: la tabla lista 12 filas pese al badge indicar "14 Citas" — al recontar el array `ACADEMIC_CITATIONS` en el código fuente hay exactamente 12 objetos (verificado por conteo directo de entradas `{ author: ... }` en el bloque de líneas 115-220), **no 14**. El badge (`{ACADEMIC_CITATIONS.length}`) se calcula dinámicamente del propio array, así que en tiempo de ejecución mostrará "12 Citas Académicas & Legales", no "14" — la cifra "14" mencionada más arriba en este documento como comparación fue un error de conteo manual de mi parte durante la lectura; la corrijo acá: **son 12 fuentes**, que de todas formas siguen siendo la lista más larga de las 6 temáticas del grupo (más que las 8 de `recuperar-la-agencia`).
>
> De los 6 `authors` destacados en el Hero (Dewey, UNESCO, Buckingham, Levinas, Habermas, Sen), **los 6 tienen entrada propia en `ACADEMIC_CITATIONS`** — es la única temática del grupo con una correspondencia 100% completa entre autores destacados y fuentes citadas (en `recuperar-la-agencia`, por contraste, solo 1 de 4 autores destacados tenía entrada verificable).
> Autores mencionados en el cuerpo con atribución directa pero SIN entrada en `ACADEMIC_CITATIONS`: Roxana Morduchowicz, Mike Caulfield, danah boyd, Lawrence Lessig, Thaler & Sunstein, Shoshana Zuboff, B.J. Fogg, Daniel Kahneman, Juan Carlos Campo Moreno, Bobbio, Dworkin, Asimov, Philip K. Dick, Mary Shelley, Huxley, Orwell, Bradbury, Marx, Taylor — una lista considerablemente más larga de autores "sin fuente verificable" que en cualquier otra temática auditada, en parte porque esta página cubre muchísimos más conceptos y pensadores que las demás.

---

## Test de Autoverificación Rápida (`id="test"`) — explícitamente marcado como práctica libre, sin puntaje

Badge: "Práctica libre — no cuenta para tu progreso". Copy: "Respondé estas 5 situaciones para evaluar tu autonomía y capacidad crítica ante sesgos algorítmicos. La evaluación que sí completa esta temática está más abajo."

**Es la ÚNICA temática de las 6 del grupo que etiqueta explícitamente su mini-test como "no cuenta para tu progreso" y dirige activamente al usuario hacia el quiz real** — corrigiendo exactamente la ambigüedad detectada como problema en `caldos-de-cultivo` (Mini-Test de Inmunidad Digital) y en `recuperar-la-agencia` (Mini-Test de Agencia Personal), donde ningún texto aclaraba esa distinción.

**Elemento interactivo — `MiniVerificationTest`, 5 preguntas de opción múltiple (3 opciones cada una), sin sistema de niveles/insignias, solo un % final (`MINI_TEST_QUESTIONS`):**

1. "Según Lawrence Lessig, ¿de qué forma 'regula' el entorno digital nuestra conducta?" → Correcta: "A través de la propia arquitectura y el código, que vuelven una conducta fácil o difícil."
2. "¿Qué se entiende por 'lectura lateral' en la formación ciudadana crítica?" → Correcta: "Verificar datos abriendo pestañas paralelas para contrastar fuentes externas."
3. "Según el Atlas de IA del PNUD, ¿cuál es un pilar crucial de la gobernanza pública?" → Correcta: "El registro de algoritmos públicos y la evaluación de transparencia de datos."
4. "Según el CIAT, ¿cuál es la vida media estimada de las habilidades tecnológicas actuales?" → Correcta: "Menos de 5 años, lo que exige aprendizaje permanente."
5. "¿Qué diferencia a la 2ª y 3ª brecha digital de la 1ª brecha tradicional?" → Correcta: "La 1ª se enfoca en el acceso físico; la 2ª y 3ª, en competencias de uso e impacto real."

Resultado final: solo muestra "Autoverificación completada" + el % logrado + botón "Reintentar diagnóstico" — sin niveles cualitativos ni desglose por categoría (a diferencia del Mini-Test de `recuperar-la-agencia`, que sí tenía 3 niveles con nombre e insignia).

---

## Cuestionario de Comprensión — Quiz oficial (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas**, mismo mecanismo compartido (`useLibresSubtopic`). **A diferencia de `algoritmos-perfilado`, `caldos-de-cultivo` y `recuperar-la-agencia`, este componente SÍ implementa correctamente el flujo completo**: destructura y usa `showQuiz` (pantalla de bienvenida con el umbral "8/10" explícito, línea 1595), `previousResult` (muestra "Último intento: X/10" si existe, línea 1582-1586) y `passed` (distingue "¡Completaste esta temática!" de "Todavía no llegaste al puntaje mínimo", línea 1665).

**Las 10 preguntas completas:**

1. "Según John Dewey, citado en la charla, ¿por qué no alcanza con prohibir o bloquear el mundo digital?" → Correcta: "Porque la educación es experiencia presente: no se puede educar para el futuro ignorando la vida que ya está pasando hoy"
2. "Según la charla, ¿qué es ser ciudadano digital, más allá de saber usar la tecnología?" → Correcta: "Comprender el entorno, decidir con autonomía, convivir, cuidar y participar en transformar ese entorno"
3. "¿Por qué la charla usa la imagen de un 'poliedro' para pensar la ciudadanía digital?" → Correcta: "Porque el problema tiene muchas caras (alfabetización, identidad, privacidad, derechos, convivencia, participación, consumo, IA) y ninguna alcanza por sí sola"
4. "Según David Buckingham, ¿a qué pregunta debería pasar '¿qué estoy viendo?' al leer el entorno digital?" → Correcta: "'¿Por qué estoy viendo esto, qué quedó afuera, y qué buscan de mí?'"
5. "Según Emmanuel Levinas, citado en la charla, ¿qué desaparece en una pantalla y qué no?" → Correcta: "Puede desaparecer el rostro del otro, pero no su vulnerabilidad"
6. "Según Jürgen Habermas, ¿qué es el espacio público?" → Correcta: "Un ámbito donde se forma opinión a través de razones y argumentos"
7. "¿Qué diferencia marca la charla entre 'audiencia' y 'ciudadanía' en el espacio digital?" → Correcta: "Una audiencia solo consume y observa; la ciudadanía piensa críticamente, contrasta, participa y crea"
8. "Frente a los sistemas de inteligencia artificial que organizan lo que vemos, ¿qué pregunta ciudadana propone la charla?" → Correcta: "¿Quién lo diseñó, con qué datos funciona, qué prioriza, qué deja afuera y qué sesgos reproduce?"
9. "Según Amartya Sen, ¿qué es realmente la libertad?" → Correcta: "Las capacidades reales para hacer y para ser: conocimientos, derechos, apoyos y posibilidades efectivas de actuar"
10. "¿Cuál es la frase de cierre que resume la tesis de toda la charla 'Libres bajo influencia'?" → Correcta: "'No se trata de vivir libres de toda influencia. Se trata de aprender a ser libres bajo influencia'"

Ninguna pregunta ni sus opciones varían por audiencia. Nota: la pregunta 3 usa la enumeración de 8 caras (coincide exactamente con la de la Sección 02 de `data.sections`), reforzando que 8 es el número canónico correcto para todo el grupo, y que la versión de 7 caras en `recuperar-la-agencia` (`POLIEDRO_CARAS`) debería revisarse.

---

## Confirmación explícita: ¿existen campos `*Familias` sin uso pese a la premisa "sin familias"?

Como se estableció al inicio de este documento, la premisa de "sin familias asignada" es incorrecta — `familias` sí está en `audiencias` y sí se usa activamente. No hay, por lo tanto, código muerto de audiencia en esta temática: el único campo `paragraphsFamilias` que existe en la data (sección 4, "Formar para la libertad") se consume efectivamente por el ternario del componente (línea 1124). No se encontraron campos `headingFamilias`, `quoteFamilias` ni `introFamilias` en ningún punto de la entrada — ninguno de esos existe ya sea con o sin uso.

---

## Resumen de hallazgos para el rediseño

1. **La premisa de la consigna ("docentes, única sin familias") es incorrecta según el código** — la entrada tiene `audiencias: ['docentes', 'familias']` y usa activamente `paragraphsFamilias` en 1 de sus 4 secciones. Vale la pena revisar de dónde salió esa clasificación errónea (posiblemente un error de transcripción en el inventario estructural previo) antes de usarla como base para el rediseño.
2. **Discrepancia de conteo del poliedro entre temáticas: esta página confirma "8 caras" como el número correcto y las enumera todas explícitamente** (Sección 02 y pregunta 3 del quiz oficial coinciden exactamente) — mientras que `recuperar-la-agencia` presenta un "Poliedro" de solo 7 caras con nombres parcialmente distintos. El rediseño debería unificar ambas listas o aclarar por qué difieren.
3. **El explorador interactivo (`PolyhedronExplorer`) solo desarrolla 6 de las 8 caras oficiales en profundidad** — "derechos y responsabilidades" y una cobertura más completa de "consumo y economía digital" quedan sin tarjeta propia en el explorador, pese a estar en la enumeración textual de 8 caras.
4. **Es el componente más largo y denso del grupo (1743 líneas, 9 bloques temáticos extra fuera de `data.sections`)** — introduce una cantidad considerable de terminología propia no usada en ninguna otra temática (IA-Ceno, Calentamiento Tecnológico Global, Colonialismo Digital, Algor-ética, IA-Salmón, IA Centauro, Constitucionalismo Social de la IA, Democracia Aumentada, Taylorismo Digital, Estanflación Cognitiva) que se aleja notablemente del tono más narrativo/pedagógico del resto del grupo, acercándose más a un policy paper sobre gobernanza de IA que a una charla de ciudadanía digital docente/familiar.
5. **Es la única temática del grupo con el quiz oficial correctamente implementado junto con `diseno-persuasivo-patrones-oscuros`** — buen ejemplo a replicar en `algoritmos-perfilado`, `caldos-de-cultivo` y `recuperar-la-agencia`, que comparten el bug de omitir `showQuiz`/`previousResult`/`passed`.
6. **Es la única temática que etiqueta explícitamente su mini-test de práctica como "no cuenta para tu progreso"** y dirige al usuario hacia la evaluación real — buena práctica a replicar en `caldos-de-cultivo` y `recuperar-la-agencia`, donde esa ambigüedad no está resuelta.
7. **El badge de conteo de fuentes ("14 Citas Académicas & Legales" según lo señalado en el componente) no coincide con el número real de entradas en `ACADEMIC_CITATIONS` (12 confirmadas por conteo directo)** — aunque el badge se calcula dinámicamente (`{ACADEMIC_CITATIONS.length}`) y por tanto en producción mostrará el número correcto (12), vale la pena una verificación editorial rápida si en algún momento se agregó/quitó una entrada sin actualizar expectativas de contenido.
8. **Es la única temática del grupo con correspondencia 100% completa entre `data.authors` destacados en el Hero y entradas verificables en el listado de fuentes** — al contrario del patrón de discrepancias detectado en `recuperar-la-agencia` (solo 1 de 4) y parcialmente en otras temáticas del grupo.
9. **El color de marca declarado en la data (`#0EA5E9`) no se usa en ningún lugar visible del componente**, que define su propia paleta de 6 colores (`BLUE`, `CYAN`, `INDIGO`, `EMERALD`, `AMBER`, `VIOLET`) sin relación directa con el token de la data — inconsistencia menor entre metadata y presentación real.
10. **La Sección "Ética y Nuevo Constitucionalismo Digital" mezcla registro ficcional (Asimov, Dick, Shelley, Huxley, Orwell, Bradbury) con teoría social/económica real (Marx, Taylor) sin distinguir explícitamente los dos registros** — es el único bloque de todo el grupo que hace esto; vale la pena decidir en el rediseño si conviene aclarar la naturaleza literaria/especulativa de esas referencias frente al resto de bibliografía académica citada.
11. **Al ser la 6ª y última temática, se autodefine explícitamente como cierre de la serie** (badge "Cierre de 'Libres bajo influencia'" en el Hero, introducción que menciona por nombre a las 4 temáticas anteriores, cita de cierre casi idéntica a la de `recuperar-la-agencia`) — es la única de las 6 con esta función narrativa explícita, lo cual es coherente con su rol de síntesis pero también explica por qué es, de lejos, la más extensa y la que más se aparta del formato más acotado de las demás.
