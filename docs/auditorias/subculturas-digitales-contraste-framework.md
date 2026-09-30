# Subculturas Digitales — Contraste contra el framework profesional de 10 pasos

Base: `subculturas-digitales-audit.md` (auditoría de la entrada `subculturas-digitales` en `lib/libres-bajo-influencia-data.ts`, `components/tematicas/SubculturasDigitalesPage.tsx`, 1712 líneas, y `lib/hooks/use-libres-subtopic.ts`, 216 líneas).

Nota de contexto: esta temática pertenece al grupo "Libres bajo influencia" y tiene un formato completamente distinto al resto del sitio — es presentación bespoke, no template compartido, con la única evaluación formativa real de comprensión de las 9 temáticas auditadas hasta ahora: un quiz de 10 preguntas que además es el único mecanismo que marca la temática como completada (sin botón manual). También tiene el contenido core más teóricamente denso y mejor conectado narrativamente del sitio, con 8 secciones que citan 8+ autores académicos en una progresión coherente.

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

**Qué hay hoy:** No existe como bloque de texto de 3 líneas, pero el Hero tiene un "índice de secciones" tappeable (8 botones numerados 01-08) que funciona parcialmente como mapa de contenidos — el usuario puede ver de un vistazo cuántas secciones hay y saltar a cualquiera.

**Qué falta:** un resumen textual breve que anticipe el arco narrativo real (por qué las comunidades digitales atraen → cómo se convierten en subculturas → su historia → cómo se transmiten sus normas → el lenguaje que desarrollan → cómo se estudian), dado que el índice numerado por sí solo no comunica esa progresión, solo la cantidad de paradas.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página. Mismo vacío que la mayoría de las temáticas auditadas.

**Qué falta:** objetivo general de módulo (ej: "vas a poder identificar qué necesidad psicológica satisface una comunidad digital, explicar cómo el algoritmo acelera la incorporación de subculturas, y leer el algospeak como estrategia de evasión de moderación").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** Los "fragmentos flotantes decorativos" del Hero (términos y emojis vinculados a la jerga de evasión de moderación) crean intriga sin explicación inmediata — son un adelanto visual de la sección de Algospeak, generando la pregunta "¿qué significan estos términos?" antes de responderla más abajo. Sumado a las 2 pills flotantes ("80% son Lurkers", "Algospeak & Eufemismos"), es una estrategia de gancho genuinamente efectiva y distinta al resto del sitio — usa curiosidad no resuelta como mecanismo de enganche, en vez de solo urgencia emocional directa.

**Detalle esperable, no un problema real:** estos elementos no tienen atribución en el punto donde aparecen — pero es una decisión de diseño razonable, ya que se explican y citan más abajo en su sección correspondiente.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección Introducción — concepto de danah boyd ("públicos conectados"), bien anclado, con la idea central de "territorio vs. herramienta" que después recorre toda la temática.

**Bien resuelto en general**, aunque el bloque de "Evidencia Empírica" (88% de NNyA se conecta a diario, UNICEF/UNESCO Kids Online) no tiene URL ni entrada en el listado final de fuentes — es la única cifra de toda la temática presentada como "evidencia empírica" sin ningún link de verificación, justo en la sección que debería dar el contexto más sólido antes de avanzar.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Las 8 secciones de contenido: 01 (necesidad — Deci & Ryan) → 02 (comunidad a subcultura — Tajfel & Turner) → 03 (historia — Hebdige/Haenfler/Thornton) → 04 (normas no escritas — Cialdini/Bandura) → 05 (autenticidad — Williams) → 06 (Algospeak — Aleksic) → 07 (cómo se estudian — Kozinets) → 08 (síntesis, cubierta en el Paso 9).

Este es, con diferencia, el contenido core mejor construido narrativamente de todas las temáticas auditadas hasta ahora. A diferencia de `alfabetizacion-digital` (marcos teóricos apilados en paralelo sin conexión) o `ia-etica-ciudadania` (5 dominios sin hilo narrativo), acá las 8 secciones forman un arco genuino: cada una responde a una pregunta que la anterior dejó abierta (¿por qué se entra? → ¿cómo se vuelve subcultura? → ¿de dónde viene esta dinámica? → ¿cómo se transmiten sus normas sin estar escritas? → ¿qué tensiones genera la autenticidad? → ¿qué idioma propio desarrolla? → ¿cómo se estudia todo esto?). Es contenido denso (8 autores/marcos distintos) pero la densidad está justificada por la progresión, no es acumulación paralela.

**Único costo de esta densidad:** con 8 autores y marcos distintos, sigue siendo mucho para retener de una sola pasada — se beneficiaría de una recapitulación intermedia o de destacar 2-3 conceptos "ancla" (ej: territorio, capital subcultural, algospeak) que el usuario debería quedarse con seguridad, distinguiéndolos del resto que es enriquecimiento.

---

## Paso 6 — Modelado

**Qué hay hoy:** Dos elementos fuertes de modelado: (1) el "Caso para pensar — Sofía, catorce años", una narrativa completa que muestra la dinámica de pertenencia y vigilancia algorítmica en acción sobre un personaje concreto; (2) el diagrama de anillos concéntricos interactivo (Moderadores/Prosumidores/Lurkers) que modela visualmente la estructura de una comunidad tipo Reddit.

Es de los mejores modelados del sitio, comparable en calidad a los casos de estudio de `alfabetizacion-mediatica` — el caso de Sofía funciona exactamente como debe funcionar un modelo: ilustra el concepto abstracto (necesidad + vigilancia algorítmica simultánea) en una situación reconocible y concreta.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El "Decodificador Algospeak" — 7 tarjetas tocables con contador "X/7 decodificados" — da feedback inmediato al tocar cada término (revela su significado real). Es una interacción genuina de práctica-con-respuesta-inmediata, algo que casi ninguna otra temática del sitio tiene.

**Buen mecanismo, aunque limitado en alcance:** es exploración con feedback (tocar y revelar), no producción propia del usuario — no hay, por ejemplo, un ejercicio donde el usuario intente identificar el significado antes de revelarlo. Aun así, es de los mejores ejemplos de interactividad con feedback de todo el sitio auditado.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Un quiz real de 10 preguntas de opción múltiple, que además es el único mecanismo que marca la temática como completada (score ≥ 8/10). Las preguntas evalúan comprensión conceptual genuina, no autorreporte de acción — por ejemplo, "¿qué pasa cuando le sacamos una plataforma a un chico sin entender qué necesidad le resolvía?" o "¿por qué dice la charla que las métricas no solo cuentan la popularidad, también la fabrican?".

Es la única de las 9 temáticas auditadas hasta ahora que resuelve genuinamente este paso del framework. Todas las demás temáticas del sitio (`ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `alfabetizacion-digital`, `alfabetizacion-mediatica`, `ia-etica-ciudadania`, `estafas-digitales`, `violencia-digital`, `violencia-digital-infancias`) carecían de esto por completo o lo sustituían con checklists de autorreporte.

**Detalle a confirmar en el rediseño:** el framework pide explícitamente que el quiz incluya "explicación de por qué está bien/mal" en cada pregunta — la auditoría no registra si el quiz muestra una explicación al responder incorrectamente, o si solo marca correcto/incorrecto sin razonar el porqué. Si no la tiene, sería la mejora más valiosa posible para esta temática específica, dado que ya tiene toda la base (preguntas bien escritas, mecanismo de scoring) y solo faltaría agregar el texto explicativo por respuesta.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 08, "Qué significa esto para el aula/casa" — la única sección con cobertura completa de audiencia (heading + paragraphs + quote), con 2 párrafos de síntesis y 4 tarjetas expandibles de orientaciones concretas (Comprender antes de juzgar, Leer los códigos, Puente pedagógico, Mirada atenta sin patologizar).

**Bien resuelto en general**, con una distinción importante y cuidadosa: el segundo párrafo aclara explícitamente que "la enorme mayoría de la pertenencia subcultural es creativa, afirmativa y protectora" antes de hablar de riesgos — buena práctica de no alarmismo.

**Inconsistencia:** las 4 tarjetas `AULA_ITEMS` no tienen variante de audiencia (usan lenguaje docente-voiced fijo) pese a estar dentro de la única sección con cobertura completa — mismo patrón de "la parte interactiva no hereda la adaptación del texto que la rodea" ya visto en otras temáticas.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección "Material de estudio" (presentación de 15 diapositivas con PDF descargable + infografía con lightbox) + sección "Fuentes académicas y estudios citados" (13 entradas, formato de ficha bibliográfica completa: autor, título, publicación, tema, link — la más formal y completa de todas las temáticas auditadas).

El listado de fuentes es el más riguroso en formato de las 9 temáticas auditadas — a diferencia de las tablas más simples de "autor + nota + URL" del resto del sitio, acá cada entrada tiene título completo (con traducción), publicación específica y tema, un tratamiento genuinamente académico.

**Problema serio de exceso de confianza:** el copy introductorio de esta sección afirma que "todos los conceptos, datos estadísticos e investigaciones mencionadas en este módulo cuentan con su publicación oficial verificada" — una declaración de certeza absoluta que no se sostiene del todo: el dato del 88% (Paso 4) no tiene link, el dato de VTubers (23% vs 14%) viene de un informe de industria/blog, no de una fuente académica, y varios links (Deci & Ryan, Cialdini, Thornton) apuntan a la página general del autor/editorial en vez del recurso específico citado — mismo patrón de "link genérico" visto en `ia-etica-ciudadania`. La declaración de "todo verificado" es más fuerte que la evidencia real detrás, a diferencia del resto del sitio, que reconoce fuentes de segunda mano con el patrón `unverified`.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ⚠️ Índice tappeable funciona como mapa parcial, sin resumen textual |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ✅ El más creativo del sitio — intriga no resuelta con fragmentos de Algospeak |
| 4. Contexto | ✅ Bien anclado (danah boyd), con 1 estadística clave sin fuente |
| 5. Contenido core progresivo | ✅ El mejor construido narrativamente de todas las temáticas — denso pero conectado |
| 6. Modelado | ✅ Caso de Sofía + diagrama de capas — de los mejores del sitio |
| 7. Práctica con feedback | ✅ Decodificador interactivo con feedback inmediato — poco común en el sitio |
| 8. Evaluación formativa | ✅ ÚNICA con quiz real de comprensión — falta confirmar si explica respuestas |
| 9. Aplicación/síntesis | ✅ Bien resuelta, con 1 inconsistencia (tarjetas sin adaptar) |
| 10. Recursos y cierre | ⚠️ El listado de fuentes más formal del sitio, pero con exceso de confianza declarado |

Esta es la temática más cercana al framework ideal de las 9 auditadas hasta ahora — resuelve genuinamente 6 de los 10 pasos (3, 5, 6, 7, 8, 9), algo que ninguna otra temática logra. Sus huecos reales son más puntuales que estructurales: falta el resumen ejecutivo y el objetivo explícito, y hay que revisar el rigor de 2-3 fuentes específicas frente a la declaración de "todo verificado".

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. 3 mecanismos de atribución de fuentes coexisten sin unificar: el badge sobre la imagen de sección (`EditorialImageFrame`), el chip de fuente junto al número de sección (a veces con nombre distinto al de la imagen — ver el caso de la sección 08, "UNESCO Digital Pedagogy" vs. "Ministerio de Educación & UNESCO"), y la sección final `VERIFIED_ACADEMIC_SOURCES` (la más completa). Ninguno usa el patrón `SourceCite` del resto del sitio.
2. El campo `authors` de la entrada de datos (8 nombres) nunca se renderiza — es metadato interno que no llega al usuario; toda la atribución real vive en `VERIFIED_ACADEMIC_SOURCES`, un array totalmente distinto y más completo (13 entradas) definido directamente en el componente, no en `lib/`.
3. Solo 4 de las 8 secciones de contenido tienen variante de audiencia, y de esas 4, 3 tienen una diferencia mínima (una sola frase u oración cambiada) — las secciones "Autenticidad" y "De comunidad a subcultura" cambian literalmente una cláusula final. Solo la sección "Qué significa esto para el aula/casa" tiene una reescritura sustancial del segundo párrafo.
4. Las 4 tarjetas interactivas `AULA_ITEMS` de la sección 08 no tienen variante de audiencia pese a estar dentro de la única sección con cobertura completa de audiencia (heading + paragraphs + quote) — usan lenguaje docente-voiced fijo incluso cuando se selecciona "familias".
5. Es la única temática auditada sin `TematicaCompletarButton` — la finalización es 100% automática al aprobar el quiz, sin ningún botón manual de "marcar como completada" como en las demás 8 temáticas revisadas hasta ahora.
6. 4 layouts visuales completamente distintos para las 8 secciones (estándar con imagen flotante, decoder Algospeak, anillos concéntricos SVG, acordeón de autenticidad, tarjetas expandibles de aula) — la temática con mayor variedad de patrones de presentación de contenido de todo el sitio auditado hasta ahora.

### Fuentes con distinto rigor sin distinción señalada
1. El dato "88% de NNyA se conecta a diario" (Introducción) no tiene link ni entrada en el listado final.
2. El dato "23% vs. 14% de consumo de VTubers por género" (Sección 07) se atribuye a "Big Games Machine — Industry Report / Tubefilter", una fuente de tipo informe de industria/blog especializado, categoría de fuente distinta (y potencialmente menos rigurosa) que el resto de la lista, mayormente académica — sin que el propio copy de la sección distinga ese matiz de tipo de fuente.
3. El copy de la sección de fuentes afirma que "todas... cuentan con su publicación oficial verificada", una declaración de certeza total que no se ve matizada en ningún punto — a diferencia del resto del sitio, donde el patrón `unverified`/"sin verificar" es una práctica establecida para reconocer fuentes de segunda mano.

### Links genéricos en vez de específicos
Varios links de `VERIFIED_ACADEMIC_SOURCES` apuntan a la página general del autor/editorial en vez del recurso específico (Deci & Ryan → home de Self-Determination Theory, no al paper de 1985; Cialdini → una página de "7 principios" de un sitio de consultoría, no al libro *Influence*; Sarah Thornton → home de Polity Press, la editorial, no el libro específico) — mismo patrón ya detectado en `ia-etica-ciudadania` con Educ.ar y OEA.

### Otros hallazgos de contenido
1. Ningún elemento del Hero (fragmentos flotantes, pills "80% Lurkers"/"Algospeak & Eufemismos") tiene fuente atribuida en el punto donde aparece — son adelantos visuales de contenido que se explica y cita recién más abajo en la página, razonable como estrategia de diseño pero significa que, leídos aisladamente, esos elementos del Hero no tienen atribución propia.

### Qué se podría agregar
1. Resumen textual breve del arco narrativo, complementando el índice tappeable ya existente.
2. Objetivo de aprendizaje explícito, general.
3. Fuente o nota aclaratoria para el dato del 88% (Introducción).
4. Distinción visual/textual entre fuentes académicas y fuentes de industria (ej. el dato de VTubers), para que la declaración de "todo verificado" sea más precisa.
5. Explicación por respuesta en el quiz (correcta e incorrecta), si no existe ya — la mejora de mayor impacto posible dado que el resto del mecanismo de evaluación ya está resuelto.
6. Variante de audiencia para las 4 tarjetas `AULA_ITEMS` de la sección 08.
7. Links específicos al recurso citado (no a la página general del autor/editorial) para Deci & Ryan, Cialdini y Thornton.
8. Una recapitulación intermedia o jerarquía de 2-3 conceptos "ancla" dentro de las 8 secciones de contenido core, dada su densidad.

### Qué se podría simplificar, quitar o reordenar
1. Unificar los 3 mecanismos de atribución de fuentes en uno solo, o al menos hacer que el chip de fuente y el badge de imagen siempre coincidan en el nombre citado (hoy difieren en la sección 08).
2. Revisar y suavizar la declaración de "todo verificado" del copy de la sección de fuentes para reflejar con precisión los distintos niveles de rigor entre las 13 entradas.

---

## Fortalezas a preservar en el rediseño
1. El quiz de 10 preguntas con score mínimo para completar — el único mecanismo de evaluación formativa real de comprensión del sitio auditado hasta ahora. Candidato principal para replicarse como estándar en todas las demás temáticas.
2. El "Caso para pensar — Sofía, catorce años" — modelo de narrativa aplicada de alta calidad, comparable a los mejores casos de estudio de `alfabetizacion-mediatica`.
3. El Decodificador Algospeak — mecanismo de práctica con feedback inmediato, patrón replicable para cualquier temática que tenga un glosario o conjunto de términos a aprender.
4. La progresión narrativa de las 8 secciones de contenido core — el mejor ejemplo de "denso pero conectado" del sitio, útil como referencia de cómo manejar contenido académicamente cargado sin caer en la sobrecarga paralela de `alfabetizacion-digital`.
5. El formato de "ficha bibliográfica" del listado final de fuentes (autor, título completo, publicación, tema, link) — el más riguroso del sitio en cuanto a formato, aunque necesita ajustar la declaración de certeza que lo acompaña.
