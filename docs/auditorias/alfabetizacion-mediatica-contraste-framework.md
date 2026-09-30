# Alfabetización Mediática — Contraste contra el framework profesional de 10 pasos

Base: `alfabetizacion-mediatica-audit.md` (auditoría de `lib/alfabetizacion-mediatica-content.ts`, 393 líneas, y los 10 componentes que lo consumen).

Nota de contexto: esta temática tiene, con diferencia, el mejor "Paso 6 — Modelado" y el "Paso 5 — Contenido core" mejor dimensionado de las 5 temáticas auditadas hasta ahora. También es la primera con el listado de fuentes completo (sin faltantes). Pero tiene el problema de audiencia más fragmentado de todo el sitio — 3 mecanismos distintos conviviendo en el mismo archivo (`pickFamilias` desde `lib`, ternarios JSX inline, y campos opcionales sin completar).

---

## El framework de referencia

1. **Resumen ejecutivo** (3 líneas: "en este módulo vas a...")
2. **Objetivo de aprendizaje explícito y medible** (verbos: identificar, aplicar, diseñar)
3. **Gancho / por qué importa ahora** (conexión emocional o urgencia)
4. **Contexto / marco conceptual** (lo mínimo necesario, no una digresión)
5. **Contenido core progresivo** (de lo simple a lo complejo, Bloom: recordar → comprender → aplicar)
6. **Modelado** (mostrar el "cómo" antes de pedir que lo hagan)
7. **Práctica guiada con feedback**
8. **Evaluación formativa de comprensión** (distinto de un checklist de "hice la tarea")
9. **Aplicación real / síntesis**
10. **Recursos y cierre**

---

## Paso 1 — Resumen ejecutivo (3 líneas)

**Qué hay hoy:** No existe como tal. El Hero tiene badge + H1 + párrafo intro + caja "Tu Objetivo Principal" + gráfico de dona + 2 tarjetas de definición del marco MIL + callout de audiencia.

**Qué falta:** un mapa de 3 líneas de "vas a pasar por 3 fases: investigar la fuente, detectar sesgos, y aplicar un protocolo antes de compartir" — la estructura de 3 Fases de la sección 05 se presta perfectamente a esto, pero no se anticipa en ningún lado antes de llegar ahí.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** Es la mejor resuelta de las 5 temáticas en este paso — hay una caja explícitamente llamada "Tu Objetivo Principal" en el Hero mismo ("Instalar un 'cortafuegos mental' para neutralizar titulares engañosos y elevar la calidad de la información que consumís y distribuís").

**Detalle a ajustar:** el objetivo está redactado en tono metafórico ("cortafuegos mental") más que con verbo medible de Bloom. Es más inspiracional que evaluable — no dice explícitamente "vas a poder identificar/aplicar/clasificar X". Buen punto de partida, pero se beneficiaría de acompañarse con 2-3 objetivos específicos y medibles (ej: "vas a poder aplicar el framework C.A.F.E. para evaluar una fuente" y "vas a poder clasificar un contenido como des-/mis-/malinformación").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El gráfico de dona "El Sesgo de Superficialidad" (70% lee solo el título / 30% análisis completo) es un gancho visual fuerte y directamente relevante al tema.

**Problema:** ese mismo gráfico no tiene ninguna fuente atribuida — el caption dice solo "📊 Basado en métricas de consumo digital", sin `SourceCite` ni fuente nombrada. Es el único elemento de tipo "estadística visual" de toda la temática sin cita, en una página que por lo demás cita todo, incluidas afirmaciones de menor peso (como el origen del término "infoxicación"). Mala señal justo en el elemento más visible del Hero.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 02, origen del término "infoxicación" (Alfons Cornellà, 1996, Centro Virtual Cervantes) + nota de atribución alternativa (David Lewis) + conexión con la formalización del marco MIL por UNESCO en 2007.

**Bien resuelto:** a diferencia de `alfabetizacion-digital` (que convertía el "contexto" en una revisión bibliográfica completa de 5 marcos teóricos), acá el contexto es liviano, bien anclado, y cumple exactamente su función: dar el mínimo necesario antes de pasar al contenido core. Es de los mejores contextos de las 5 temáticas vistas en cuanto a proporción/función.

**Detalle menor:** la nota sobre la atribución alternativa a David Lewis no tiene `SourceCite` (texto plano itálico) — inconsistencia leve de formato, aunque de bajo impacto porque es una nota aclaratoria, no una afirmación central.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección 03 (framework C.A.F.E.: Contexto/Autoría/Fuentes/Emoción — 4 criterios de evaluación) + Sección 04 (3 tipos de desorden informativo: Desinformación/Misinformación/Malinformación, con fuente única y sólida de Wardle & Derakhshan/Council of Europe).

**Este es el mejor Paso 5 de las 5 temáticas auditadas.** Solo 7 ítems totales (4+3), organizados en un único framework operativo (C.A.F.E.) más una clasificación complementaria (tipos de desorden), con una progresión lógica clara: primero aprendés los criterios para evaluar cualquier contenido (C.A.F.E.), después aprendés a clasificar lo que encontrás según intención/veracidad (los 3 tipos). Es el contraste directo con la sobrecarga de `alfabetizacion-digital` (25+ ítems de 4+ marcos) — acá el "menos es más" está bien aplicado.

**Detalle a mejorar:** las 4 tarjetas de C.A.F.E. son interactivas (flip 3D al hover) pero solo muestran una pregunta de verificación en el reverso, sin ningún ejemplo aplicado — el ejemplo real recién llega en la sección 05 (Fases). Podría adelantarse un micro-ejemplo por letra acá mismo para reforzar la comprensión antes de pasar a las fases completas.

---

## Paso 6 — Modelado

**Qué hay hoy:** Sección 05, "Las 3 Fases del Entrenamiento" — cada fase tiene Intro + Metodología + Caso de estudio real + Laboratorio Práctico. Los 3 casos de estudio son concretos y bien elegidos: la noticia falsa de "el café destruye tu memoria" (Fase 1), el mensaje viral "URGENTE, ley confisca ahorros" (Fase 2), la foto de catástrofe reciclada de otro continente (Fase 3).

**Este es, con diferencia, el mejor modelado de las 5 temáticas auditadas.** A diferencia de `huella-digital` (que tenía tips puntuales pero no casos completos) o `alfabetizacion-digital` (que no modelaba en absoluto), acá cada fase muestra el método aplicado de punta a punta a un ejemplo real antes de pedirle al usuario que lo haga por su cuenta. Es exactamente lo que pide este paso del framework.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Cada Fase tiene un "Laboratorio Práctico" con instrucción concreta de audiencia (ej: "identificá la primera noticia que veas en tus redes... buscá el nombre del sitio + 'credibilidad'") y un botón temático ("Misión Aceptada" / "Aplicar Matriz" / "Activar Delay").

**Problema, y uno que vale la pena señalar con cuidado:** los 3 botones no tienen funcionalidad real más allá del estilo hover — son botones que visualmente invitan a la acción ("Misión Aceptada", como si confirmaran algo) pero no registran nada, no dan feedback, no persisten estado. Es un patrón un poco engañoso desde el punto de vista de UX: el usuario ve un botón con lenguaje de confirmación de misión y puede razonablemente esperar que "pase algo" al tocarlo, cuando en realidad es decorativo.

**Qué falta:** o esos botones se conectan a un registro real (similar al checklist persistente de la sección 09, pero por fase), o se les quita el lenguaje de "confirmación de misión" para no generar una expectativa de interactividad que no existe.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** "Analizador de Viabilidad" (sección 09) — checklist de 5 ítems persistente, con estética de terminal (fondo oscuro, texto mono, contador X/5). Buena presentación visual, pero mismo problema estructural que en las otras 4 temáticas: mide autorreporte de acción ("he contrastado el dominio de origen..."), no comprensión verificada.

**Qué falta:** un quiz real que, por ejemplo, presente un caso nuevo (no uno de los 3 ya vistos) y le pida al usuario clasificarlo según C.A.F.E. o según los 3 tipos de desorden informativo, con feedback explicando el razonamiento correcto — esto además reforzaría naturalmente el Paso 7 (práctica con feedback), resolviendo dos huecos con un solo mecanismo.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 08, "El Docente/La Familia como Primer Filtro" — síntesis sólida que conecta el marco MIL de UNESCO con el rol específico del usuario, con una honestidad epistémica destacable: el propio código documenta que "no existe un marco MIL con nombre propio para familias como el que sí existe para docentes" en vez de inventar un documento que no existe. Buena práctica a preservar.

**Complementado con:** FAQ de 2 preguntas + "Secuencia de Arranque" de 2 pasos concretos — un mini plan de acción de cierre, distinto y más ligero que el checklist de la sección 09.

**Problema menor:** la pregunta de la FAQ 2 ("Manejo de conflictos al corregir a un estudiante") no se adapta a audiencia, solo la respuesta — el título de la pregunta queda con lenguaje docente incluso cuando la respuesta ya está en lenguaje familias.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 09 — checklist (cubierto en Paso 8) + infografía con lightbox + carrusel de 7 láminas + listado de 5 fuentes.

**Fortaleza a destacar:** es la primera de las 5 temáticas auditadas cuyo listado final de fuentes incluye todas las fuentes citadas inline, sin faltantes — rompe el patrón de inconsistencia repetido en las 4 auditorías anteriores (Barco de Teseo, GDPR, UNICEF_ESPANA_PENDIENTE, BID/Mercado Laboral). Buena señal de que el problema es solucionable y no estructural del sitio.

**Problema:** el header del carrusel de recursos no varía por audiencia ("Material para el aula" fijo), a diferencia de los carruseles equivalentes en `ciudadania-digital`, `huella-digital` e `hiperconectividad-digital`, que sí traducen label y título — inconsistencia de patrón entre temáticas hermanas del mismo sitio.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ✅ El mejor de las 5 — existe una caja explícita, aunque no con verbos Bloom |
| 3. Gancho | ⚠️ Fuerte visualmente, pero el gráfico central no tiene fuente |
| 4. Contexto | ✅ El mejor dimensionado de las 5 — liviano y bien anclado |
| 5. Contenido core progresivo | ✅ El mejor de las 5 — 7 ítems bien organizados, progresión clara |
| 6. Modelado | ✅ El mejor de las 5 — 3 casos de estudio reales completos |
| 7. Práctica con feedback | ⚠️ Instrucción de acción real, pero botones decorativos sin feedback ni registro |
| 8. Evaluación formativa | ❌ No existe (mismo patrón que las 4 anteriores) |
| 9. Aplicación/síntesis | ✅ Sólida, con honestidad epistémica destacable |
| 10. Recursos y cierre | ✅ Primera con listado de fuentes completo, con 1 inconsistencia menor (carrusel) |

Esta es, en conjunto, la mejor temática de las 5 auditadas en términos de diseño instruccional — gana claramente en Contexto, Contenido core y Modelado (Pasos 4, 5 y 6), que son justamente los pasos más débiles en las otras 4. Comparte el vacío de Evaluación formativa (Paso 8) con todas las demás, y tiene el problema de fragmentación de audiencia más severo del sitio (3 mecanismos distintos conviviendo).

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. **3 mecanismos de audiencia distintos conviven en la misma temática**: (a) `pickFamilias` desde `lib` para valores predefinidos (`MIL_DOCENTES_QUOTE`/`MIL_FAMILIAS_QUOTE`, `DISORDER_NOTA_DOCENTE`/`FAMILIAS`, `labTexto`/`labTextoFamilias`, `AULA_SINTESIS`/`FAMILIAS`, `faq.a`/`aFamilias`, `paso.texto`/`textoFamilias`); (b) ternarios JSX inline con `esFamilias` directamente en los componentes, sin pasar por `lib` (Hero: párrafo intro y objetivo principal; Ventajas: título; Aula: eyebrow y título; Recursos: título e intro del checklist); (c) campos opcionales que simplemente no tienen variante familias definida y caen siempre al valor base (`faq1` sin `aFamilias`, paso 02 de Secuencia de Arranque sin `textoFamilias`).
2. El gráfico de dona del Hero ("70% lee solo el título / 30% análisis completo") no tiene fuente atribuida — el único elemento de tipo "estadística visual" de toda la temática sin `SourceCite`.
3. `unverified: true` nunca se usa en este archivo, a diferencia de las 4 temáticas auditadas previamente. El `SourceCite` de esta temática deriva "sin verificar" solo de la ausencia de `url`, lo que confunde dos conceptos distintos: "no tiene link digital" (Wason 1960, Thorndike 1920 — referencias académicas sólidas, simplemente antiguas y sin edición online gratuita) vs. "el contenido en sí está en duda" (el uso real de `unverified` en las otras temáticas). El usuario ve el mismo badge ámbar para una cita de 1960 perfectamente confiable que para lo que en otras temáticas sería una cifra sin confirmar.
4. Es la única de las 5 temáticas auditadas sin `TocNav` propio — usa el componente compartido `ReadingProgressBar` en su lugar.
5. El header del carrusel de recursos no varía por audiencia, a diferencia de los carruseles equivalentes en las otras 3 temáticas del grupo con carrusel.
6. La pregunta de la FAQ 2 no se adapta a audiencia, solo la respuesta.
7. 2 campos opcionales de audiencia simplemente no fueron completados (`faq1.aFamilias`, paso 02 de `SECUENCIA_ARRANQUE.textoFamilias`) — a diferencia de `alfabetizacion-digital`, donde el campo sin completar (`CONCEPTO_NOTA_FAMILIAS`) al menos se documenta explícitamente como pendiente en un comentario; acá no hay comentario que señale la ausencia.
8. Fondo con "ambient blobs" + textura de ruido SVG son exclusivos de esta temática dentro del grupo "Alfabetización" — `alfabetizacion-digital` usa un fondo de degradado con orbes con parallax distinto.

### Redundancias
1. UNESCO es la fuente más repetida de toda la temática (7 citas distintas: `MIL_QUOTE`, `MIL_ORIGEN_QUOTE`, `MIL_DOCENTES_QUOTE`, `MIL_FAMILIAS_QUOTE`, `INFOXICACION_AGRAVAMIENTO_QUOTE`, `VENTAJAS_QUOTE`, `AULA_SINTESIS_SOURCE`) sin que ninguna de esas 7 citas tenga una nota que las diferencie entre sí más allá del texto — todas apuntan a la misma URL genérica (`https://www.unesco.org/en/ami`), no a documentos o páginas específicas del marco MIL, lo que dificulta que un lector verifique una afirmación puntual dentro del sitio de UNESCO.

### Fuentes sin verificar
Ninguna fuente usa `unverified: true` en todo el archivo (ver Inconsistencia #3 para el problema semántico que esto genera).

### Fuentes con URL (verificadas)
UNESCO (7 citas distintas, misma URL genérica), Centro Virtual Cervantes, Wardle & Derakhshan/Council of Europe.

### Fuentes sin URL ("referencia bibliográfica" en el badge, pese a no tener `unverified: true`)
Wason, P. C. (1960) — Quarterly Journal of Experimental Psychology, referencia académica sólida y clásica sobre sesgo de confirmación. Thorndike, E. L. (1920) — Journal of Applied Psychology, referencia académica sólida y clásica sobre el efecto halo. Ambas son fuentes reales y respetadas, simplemente anteriores a la era de publicación digital — el badge ámbar que reciben ("referencia bibliográfica", visualmente igual al de una fuente dudosa en otras temáticas) las infravalora frente a su solidez real.

### Consistencia de listado de fuentes
Es la primera de las 5 temáticas auditadas sin faltantes en el listado final — todas las fuentes citadas inline están en `FUENTES_COMPLETAS`.

### Otros hallazgos de contenido
1. La cita de Thorndike (sección Riesgos) menciona explícitamente "también aparece en el aula" como parte del hallazgo académico citado, no como adaptación de audiencia — se muestra igual para familias, incluyendo esa mención, porque es contenido histórico real de la cita en sí. Es coherente mantenerlo así (es un dato histórico, no una adaptación), pero vale la pena revisar en el rediseño si conviene aclarar o generalizar esa frase específicamente para la audiencia familias, dado que "en el aula" puede sonar desubicado fuera de contexto docente.
2. El tercer riesgo de la sección 07 ("Análisis Superficial") no tiene cita asociada (`quote: null` en el código) — a diferencia de los otros 2 riesgos (Sesgo de Confirmación con Wason, Efecto Halo con Thorndike), este queda sin respaldo académico explícito.

### Qué se podría agregar
1. Resumen ejecutivo de 3 líneas en el Hero, anticipando la estructura de 3 Fases.
2. Objetivos específicos con verbos medibles (identificar, aplicar, clasificar) complementando la caja "Tu Objetivo Principal" ya existente.
3. Fuente para el gráfico de dona del Hero, o su reformulación como estimación ilustrativa explícita si no hay dato real detrás.
4. Un micro-ejemplo aplicado en cada tarjeta flip de C.A.F.E. (sección 03), antes de llegar a los casos completos de la sección 05.
5. Quiz de comprensión real, idealmente usando un caso nuevo para que el usuario clasifique según C.A.F.E. o los 3 tipos de desorden informativo, con feedback explicativo.
6. Fuente o nota aclaratoria para el riesgo "Análisis Superficial" (hoy sin cita).
7. Completar los 2 campos de audiencia faltantes (`faq1.aFamilias`, paso 02 de Secuencia de Arranque) o documentarlos explícitamente como pendientes, siguiendo el modelo de `alfabetizacion-digital`.
8. Adaptar el header del carrusel de recursos por audiencia, para consistencia con las otras 3 temáticas del grupo.

### Qué se podría simplificar, quitar o reordenar
1. Unificar los 3 mecanismos de audiencia en uno solo (`pickFamilias` parece el más consolidado, siendo el mecanismo con más usos) — reduciría la complejidad de mantenimiento y evitaría que sigan apareciendo campos "olvidados" sin variante familias.
2. Resolver la ambigüedad semántica de "sin verificar": o se empieza a usar `unverified: true` explícitamente para fuentes con contenido en duda, distinguiéndolo del badge automático por ausencia de URL, o se cambia el copy del badge automático a algo como "sin edición digital" en vez de "referencia bibliográfica" para no confundirlo con el patrón `unverified` de las otras temáticas.
3. Dar funcionalidad real a los 3 botones de "Laboratorio Práctico" (Misión Aceptada / Aplicar Matriz / Activar Delay), o suavizar su lenguaje de confirmación si van a seguir siendo decorativos.

---

## Fortalezas a preservar en el rediseño
1. Las 3 Fases de Entrenamiento con caso de estudio real integrado (sección 05) — el mejor modelo de "Modelado + Práctica" de las 5 temáticas auditadas, candidato claro a replicarse como patrón estándar en el resto del sitio.
2. El framework C.A.F.E. como estructura core, liviana y memorable (4 letras, 4 preguntas) — contraste directo y positivo frente a la sobrecarga de marcos vista en `alfabetizacion-digital`.
3. La honestidad epistémica de la síntesis de audiencia en la sección 08, reconociendo explícitamente que no existe un marco MIL específico para familias en vez de inventar uno — buena práctica editorial a mantener en otras temáticas.
4. El listado completo de fuentes sin faltantes — primera temática del sitio en lograrlo, prueba de que el patrón de inconsistencia visto en las otras 4 es resoluble.
