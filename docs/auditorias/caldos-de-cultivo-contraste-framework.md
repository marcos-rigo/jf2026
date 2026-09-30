# Caldos de Cultivo — Contraste contra el framework profesional de 10 pasos

Base: `caldos-de-cultivo-audit.md` (auditoría de la entrada `caldos-de-cultivo` en `lib/libres-bajo-influencia-data.ts` y `components/tematicas/CaldosDeCultivoPage.tsx`, 1802 líneas — la más extensa de las 4 temáticas del grupo "Libres bajo influencia" auditadas hasta ahora, superando incluso a `diseno-persuasivo-patrones-oscuros`).

Nota de contexto: esta es, con diferencia, la temática más extensa de todo el sitio auditado hasta ahora — 17 bloques, 6 elementos interactivos distintos, y el contenido core más denso incluso que `diseno-persuasivo-patrones-oscuros`. Comparte con `algoritmos-perfilado` el mismo bug del quiz (no distingue aprobado/no aprobado), y es la única de las 4 temáticas del grupo sin ninguna sección dedicada de síntesis "qué significa esto para el aula/casa".

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

**Qué hay hoy:** No existe. Tampoco hay índice de secciones tappeable (a diferencia de `subculturas-digitales`).

**Qué falta:** con 17 bloques y 6 elementos interactivos, esta es la temática que más necesitaría un mapa inicial de todo el sitio auditado — el usuario no tiene ninguna forma de anticipar la extensión ni la secuencia antes de empezar a scrollear.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página.

**Qué falta:** objetivo general (ej: "vas a poder identificar los ingredientes que forman un 'caldo de cultivo' para la desinformación, distinguir cámara de eco de burbuja de filtros, y aplicar el protocolo Pausar-Preguntar-Elegir antes de compartir contenido").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El ticker de 4 estadísticas del Hero (69% cree que los medios mienten deliberadamente, 35,1% en la Gen Z, 50M+ perfiles psicográficos de Cambridge Analytica, confianza social "en baja") es un gancho fuerte, seguido del widget interactivo "Mezclador del Pasto Seco" justo después de la introducción.

Buen gancho combinado, en la misma línea que `diseno-persuasivo-patrones-oscuros` (dato + interactividad inmediata), aunque con un problema de rigor: el "69%" del ticker combina 2 fuentes distintas en una sola atribución ("Edelman Trust Barometer / UCM") sin distinguir cuál aporta el dato — y el Edelman Trust Barometer no tiene entrada en el listado final de fuentes.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** La introducción "Fuego y pasto seco" usa una metáfora simple y efectiva (el pasto seco no prende solo, pero hace que cualquier chispa sea peligrosa) para explicar el concepto central sin nombrar autores todavía.

El mejor contexto de las 4 temáticas del grupo en términos de proporción — a diferencia de la introducción de `diseno-persuasivo-patrones-oscuros` (que ya cubre 3 marcos teóricos), acá la introducción es puramente conceptual y liviana, dejando los autores para las secciones siguientes. Cumple exactamente la función de "lo mínimo necesario" que pide este paso.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Módulo 01 "Fundamentos Teóricos" (3 tarjetas: Lessig/Farhat, Saura García, Bellomo, más el Inspector de Patrones Oscuros) + 6 secciones base (ingredientes del pasto seco, cámaras de eco vs. burbuja de filtros, espiral del silencio, cultura-algoritmo retroalimentados, fabricar la duda, velocidad de la mentira) + Módulo 02 "Microtargeting y Cámaras de Eco" (2 tarjetas de investigación + Simulador) + Módulo 03 "Deepfakes y Autodiagnóstico" (2 tarjetas).

Este es el contenido core más sobrecargado de todo el sitio auditado, superando incluso a `diseno-persuasivo-patrones-oscuros`. Entre los 3 módulos y las 6 secciones base, el usuario atraviesa: el modelo de Lessig/arquitectura, la economía de la atención de Saura García, la "Educación Aumentada" de Bellomo, 6 conceptos teóricos distintos (homofilia, sesgo de confirmación, espiral del silencio, información maliciosa/errónea/desinformación, retroalimentación cultura-algoritmo, velocidad de propagación), el modelo psicográfico OCEAN de Cambridge Analytica, y el fenómeno de deepfakes/"dividendo del mentiroso". Son al menos 12 conceptos/autores distintos organizados en 3 módulos temáticos — más que cualquier otra temática del sitio.

**Fortaleza real dentro de esta densidad:** a diferencia de `alfabetizacion-digital` (marcos paralelos sin conexión), acá sí hay un hilo narrativo genuino que conecta todo: ingredientes → cámaras de eco → espiral del silencio → retroalimentación cultura-algoritmo → objetivo real (fabricar duda) → velocidad de propagación → aplicaciones concretas (microtargeting, deepfakes). El problema no es la falta de conexión, es la cantidad absoluta de contenido conectado.

---

## Paso 6 — Modelado

**Qué hay hoy:** El "Inspector Interactivo de Patrones Oscuros" (mockup de smartphone, tocar elementos revela la técnica psicológica detrás) y el "Simulador de Cámara de Eco" (slider que cambia dinámicamente el feed simulado según intensidad de refuerzo algorítmico, con 3 estados diferenciados).

El Simulador de Cámara de Eco es probablemente el mejor modelado de proceso dinámico de todo el sitio — a diferencia de un toggle de 2 estados (como en `diseno-persuasivo-patrones-oscuros`), acá el usuario ve un gradiente continuo (0-100%) con 3 estados intermedios claramente diferenciados, mostrando cómo el mismo mecanismo se intensifica progresivamente. Es el modelo más fiel a cómo funciona realmente el fenómeno que describe (algo gradual, no binario).

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Es la temática con más mecanismos de práctica con feedback de todo el sitio: el Mezclador del Pasto Seco, el Inspector de Patrones Oscuros, el Simulador de Cámara de Eco, el "Verificador Rápido: ¿Verdad o Mito Viral?" (4 afirmaciones verdadero/falso con explicación tras cada respuesta), y el Mini-Test de Inmunidad Digital (5 preguntas puntuadas con 3 resultados posibles).

El "Verificador Rápido" merece destacarse especialmente — igual que el Mini-Test de `diseno-persuasivo-patrones-oscuros`, da feedback explicativo genuino por cada respuesta (ej: "Falso. Karen Borensztein documenta que estos autodiagnósticos generan cibercondría..."), cumpliendo la definición literal del framework para evaluación formativa con explicación.

**El costo de tener tantos mecanismos:** con 6 elementos interactivos distintos a lo largo de la página, hay riesgo de fatiga de interacción — el usuario tiene que aprender 6 mecánicas diferentes en una sola temática, cuando 2-3 bien elegidos podrían cumplir la misma función pedagógica con menos carga cognitiva.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Quiz oficial de 10 preguntas, mismo mecanismo compartido. Comparte con `algoritmos-perfilado` el mismo bug sin corregir: el componente nunca destructura `showQuiz`, `previousResult` ni `passed` del hook — no hay pantalla de bienvenida, no se informa el umbral de 8/10 antes de empezar, y la pantalla de resultados dice siempre "¡Cuestionario completado!" sin distinguir si se alcanzó el mínimo necesario.

De las 4 temáticas auditadas del grupo, solo `diseno-persuasivo-patrones-oscuros` implementa esto correctamente — sería el modelo de referencia a copiar acá también.

**Contenido del quiz sólido:** las 10 preguntas evalúan comprensión real (ej: "¿En qué se diferencia la cámara de eco de la burbuja de filtros?"), el problema es exclusivamente de interfaz, no de contenido.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** No existe ninguna sección dedicada de tipo "Qué significa esto para el aula/casa" — es la única de las 4 temáticas del grupo sin esta sección. La variante de audiencia está distribuida en `paragraphsFamilias` de solo 3 de las 6 secciones base, siempre limitada a cambiar la última oración de cada párrafo afectado ("en el aula"/"un estudiante" ↔ "en casa"/"un hijo o hija").

Este es el hueco más grave de esta temática frente al framework, y frente a sus 3 temáticas hermanas. `algoritmos-perfilado` y `diseno-persuasivo-patrones-oscuros` sí concentran una síntesis de aplicación con heading+paragraphs+quote propios; acá esa función simplemente no existe como bloque dedicado — la aplicación queda diluida en fragmentos de oraciones dentro de secciones que son, ante todo, contenido teórico.

**Tampoco hay `introFamilias` a nivel raíz** — es la única de las 4 temáticas del grupo sin esta variante inicial, lo que refuerza el patrón: la cobertura de audiencia acá es la más débil y fragmentada del grupo, pese a que el volumen total de contenido es el mayor.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Material de estudio (12 diapositivas — la menor cantidad de las 4 temáticas del grupo, que suelen tener 15 — + infografía) + Fuentes académicas con buscador filtrable en tiempo real (10 entradas, funcionalidad exclusiva de esta temática) + Cita de cierre (aparece una sola vez, a diferencia de las 3 repeticiones en `diseno-persuasivo-patrones-oscuros`).

El buscador de fuentes es una funcionalidad genuinamente útil, dado el volumen de la lista — permite filtrar por autor, DOI o universidad en tiempo real, algo que ninguna otra temática del grupo ofrece.

**Problemas de rigor en las fuentes:**
- 3 fuentes citadas en el cuerpo no tienen entrada en el listado final: Santiago Tomás Bellomo (Universidad Austral), el estudio de la Facultad de Periodismo UNLP sobre elecciones 2015, y el Comité de los Derechos del Niño (Observación General N.º 25).
- Peter Wason está en `data.authors` del Hero y se cita en el cuerpo, pero no tiene entrada propia en el listado final — único de los 6 autores destacados sin ficha bibliográfica.
- José Néstor Farhat es la única fuente del listado sin URL, renderizada correctamente como texto no clicable (no simula un link falso) — pero significa que la fuente "marco" de todo el grupo no es verificable externamente.
- El gráfico de torta del Dashboard ("Canal principal de información Gen Z") se etiqueta solo "Datos empíricos", sin autor, año ni link — a diferencia del gráfico de barras contiguo, que sí cita UCM 2024 con precisión.

**Elemento técnico destacable:** es la única temática del grupo con visualizaciones de datos reales usando Recharts (gráfico de barras + gráfico de torta), en vez de solo barras de progreso CSS animadas.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe — la temática que más lo necesitaría, sin índice tappeable |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ✅ Fuerte (datos + widget inmediato), con 1 estadística de fuente ambigua |
| 4. Contexto | ✅ El mejor proporcionado de las 4 temáticas del grupo — liviano, sin autores todavía |
| 5. Contenido core progresivo | ❌ El más sobrecargado de todo el sitio — 12+ conceptos en 3 módulos |
| 6. Modelado | ✅ El mejor del sitio — Simulador de Cámara de Eco con gradiente continuo |
| 7. Práctica con feedback | ✅ El más rico en mecanismos (6 distintos), con riesgo de fatiga de interacción |
| 8. Evaluación formativa | ⚠️ Mismo bug que algoritmos-perfilado — no distingue aprobado/no aprobado |
| 9. Aplicación/síntesis | ❌ El más débil de las 4 — sin sección dedicada, sin introFamilias |
| 10. Recursos y cierre | ⚠️ Buscador único y útil, con 3 fuentes faltantes y 1 dato sin atribuir |

Esta temática tiene la mayor riqueza de contenido y de mecanismos interactivos de todo el sitio, pero es también la que más necesita edición — no solo recortar volumen (Paso 5), sino además construir la sección de aplicación/síntesis que hoy directamente no existe (Paso 9), a diferencia de sus 3 temáticas hermanas del mismo grupo.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Volumen y estructura
1. Es la temática con más contenido de las 4 auditadas del grupo (1802 líneas, 17 bloques) — supera incluso a `diseno-persuasivo-patrones-oscuros`. Tiene 6 elementos interactivos distintos (Mezclador del Pasto Seco, Inspector de Patrones Oscuros, Simulador de Cámara de Eco, Verificador Rápido de mitos, Dashboard con gráficos reales, Mini-Test de Inmunidad Digital) más el buscador de fuentes y el quiz oficial — la mayor densidad de interactividad del grupo.

### Bugs y problemas de implementación
1. Comparte con `algoritmos-perfilado` el mismo gap del quiz sin corregir: `showQuiz`, `previousResult` y `passed` nunca se destructuran del hook — no hay pantalla de bienvenida, no se informa el umbral de 8/10 antes de empezar, y el resultado final no distingue aprobado/no aprobado. De las 4 temáticas auditadas, solo `diseno-persuasivo-patrones-oscuros` implementa esto correctamente.
2. El Mini-Test de Inmunidad Digital no está etiquetado como independiente del progreso (a diferencia del Mini-Test de `diseno-persuasivo-patrones-oscuros`, marcado explícitamente "no cuenta para tu progreso") — riesgo real de que un usuario confunda completar este test con completar la temática, dado que ambos usan lenguaje de "diagnóstico"/"insignia".

### Inconsistencias de audiencia
1. No tiene `introFamilias` (única de las 4 temáticas del grupo auditadas sin esta variante a nivel raíz) ni ninguna sección con `headingFamilias`/`quoteFamilias` — la variante de audiencia está exclusivamente en `paragraphsFamilias` de 3 de las 6 secciones, y siempre limitada a la última oración de cada párrafo afectado (cambiar "aula"/"estudiante" por "casa"/"hijo o hija").
2. No hay sección "Qué significa esto para el aula/casa" en absoluto, a diferencia de `algoritmos-perfilado` y `diseno-persuasivo-patrones-oscuros`.

### Fuentes sin entrada en el listado final
1. Santiago Tomás Bellomo (Universidad Austral, Módulo 01) — es la única de las 3 tarjetas teóricas cuyo autor citado no tiene entrada verificable.
2. El estudio de la Facultad de Periodismo y Comunicación Social (UNLP) sobre las elecciones argentinas de 2015 (Módulo 02) — la investigación más específicamente citada de todo el módulo (con autor institucional, año y cadena causal detallada) y sin link de verificación en ningún punto de la página.
3. El Comité de los Derechos del Niño / Observación General N.º 25 (Sección 06) — sin entrada propia ni link directo.

### Fuentes con tratamiento inconsistente
1. Peter Wason está en `data.authors` (Hero) y se cita en el cuerpo (Sección 02), pero no tiene entrada propia en `ACADEMIC_CITATIONS` — es el único de los 6 autores del Hero sin ficha bibliográfica en el listado final.
2. José Néstor Farhat es la única entrada sin URL — se renderiza como `<div>` en vez de `<a>` clicable (patrón técnico correcto: no simula un link falso), pero es el único caso de las 4 temáticas del grupo donde una fuente del listado final aparece explícitamente sin ser clicable.
3. El "69%" de percepción de medios en el ticker del Hero combina 2 fuentes en una sola atribución ("Edelman Trust Barometer / UCM") sin distinguir cuál aporta el dato — el Edelman Trust Barometer no tiene entrada en el listado final.
4. El gráfico de torta "Canal principal de información (Gen Z)" se etiqueta solo "Datos empíricos", sin autor, año ni link — es la única visualización de datos de la página sin fuente verificable específica, a diferencia del gráfico de barras contiguo que sí cita UCM 2024.
5. Ninguna fuente está marcada `unverified` ni hay ningún indicador de "sin verificar" — igual que las otras 3 temáticas del grupo.

### Fortalezas técnicas
1. Es la única temática del grupo con visualizaciones de datos reales usando Recharts (gráfico de barras + gráfico de torta), a diferencia de las otras 3, que usan solo barras de progreso CSS animadas para sus widgets interactivos.
2. Es la única temática del grupo con un buscador de fuentes filtrable en tiempo real — funcionalidad de descubrimiento que ninguna otra temática del grupo ofrece, útil dado que también tiene, junto con `diseno-persuasivo-patrones-oscuros`, de las listas de fuentes más extensas del grupo.

### Qué se podría agregar
1. Resumen ejecutivo o índice tappeable, dado el volumen sin precedentes de esta temática.
2. Objetivo de aprendizaje explícito, general.
3. Una sección dedicada "Qué significa esto para el aula/casa" con heading+paragraphs+quote propios, siguiendo el patrón de `algoritmos-perfilado`/`diseno-persuasivo-patrones-oscuros`.
4. `introFamilias` a nivel raíz.
5. Conectar `passed`, `showQuiz` y `previousResult` al render del quiz oficial, replicando la implementación correcta de `diseno-persuasivo-patrones-oscuros`.
6. Etiqueta explícita de "no cuenta para tu progreso" en el Mini-Test de Inmunidad Digital.
7. Entradas de fuente para Bellomo, el estudio UNLP, y el Comité de los Derechos del Niño.
8. Ficha bibliográfica para Peter Wason en el listado final.
9. Distinción clara de qué fuente aporta el dato del 69% en el ticker del Hero.
10. Autor/año/link para el gráfico de torta del Dashboard.

### Qué se podría simplificar, quitar o reordenar
1. Priorizar y recortar contenido del Paso 5 — es el caso más extremo de sobrecarga de todo el sitio; evaluar si algunos de los 3 módulos (especialmente Fundamentos Teóricos o Deepfakes) podrían resumirse o moverse a contenido complementario.
2. Reducir el número de mecanismos interactivos de 6 a 2-3, priorizando los que más valor pedagógico aportan (Simulador de Cámara de Eco, Verificador Rápido) para reducir la fatiga de interacción.
3. Considerar si el Dashboard de Recharts y el buscador de fuentes en tiempo real deberían extenderse a otras temáticas del grupo (dado que son mejoras genuinas) como parte de una revisión de patrón compartido, en vez de quedar aisladas en esta única temática.

---

## Fortalezas a preservar en el rediseño
1. El Simulador de Cámara de Eco (slider con gradiente continuo de 0-100%) — el mejor modelado de proceso dinámico de todo el sitio, superior incluso al toggle binario de `diseno-persuasivo-patrones-oscuros`. Candidato principal para replicarse en cualquier temática que describa un fenómeno gradual, no binario.
2. El "Verificador Rápido: ¿Verdad o Mito Viral?" — mismo estándar de excelencia que el Mini-Test de `diseno-persuasivo-patrones-oscuros` en cuanto a feedback explicativo por respuesta.
3. El buscador de fuentes filtrable en tiempo real — funcionalidad de descubrimiento útil, sobre todo en temáticas con listados extensos.
4. El Dashboard con gráficos reales de Recharts — mejor tratamiento visual de datos cuantitativos que las barras CSS del resto del sitio, aunque necesita resolver la fuente faltante del gráfico de torta.
5. La metáfora central "pasto seco/chispa" de la introducción — ejemplo de contexto conceptual simple, memorable y bien proporcionado, buen modelo para el Paso 4 en otras temáticas.
