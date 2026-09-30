# Diseño Persuasivo y Patrones Oscuros — Contraste contra el framework profesional de 10 pasos

Base: `diseno-persuasivo-patrones-oscuros-audit.md` (auditoría de la entrada `diseno-persuasivo-patrones-oscuros` en `lib/libres-bajo-influencia-data.ts` y `components/tematicas/DisenoPersuasivoPatronesOscurosPage.tsx`, 1770 líneas — la más extensa y densa de las 3 temáticas del grupo "Libres bajo influencia" auditadas hasta ahora).

Nota de contexto: esta es, por lejos, la temática más extensa y densa de todo el sitio auditado hasta ahora — 16 bloques de contenido, el quiz mejor implementado técnicamente de las 3 temáticas del grupo (única que usa correctamente `passed`/`previousResult`/`showQuiz`), y un mini-test de práctica libre que es, en la práctica, el elemento que más se acerca a la definición literal del framework para evaluación formativa ("explicación de por qué está bien/mal" en cada respuesta). Pero su volumen de contenido es también su mayor problema: es la temática más sobrecargada de contenido core de todo el sitio, superando incluso a `alfabetizacion-digital`.

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

**Qué hay hoy:** No existe. Y a diferencia de `subculturas-digitales`, esta temática ni siquiera tiene el índice de secciones tappeable — con 16 bloques de contenido, es la que más necesitaría un mapa inicial y es la que menos tiene.

**Qué falta:** dado el volumen (4 secciones base + 8 bloques adicionales: franja de datos, 2 widgets, comparación ética, matriz de 8 patrones, 2 casos extra, evaluación ética trimembre, marco regulatorio de 3 regiones, kit de herramientas, mini-test), un resumen ejecutivo acá no es un "nice to have" — es prácticamente indispensable para que el usuario entienda qué va a atravesar antes de empezar.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página. Mismo vacío que la mayoría de las temáticas auditadas.

**Qué falta:** objetivo general (ej: "vas a poder distinguir persuasión ética de manipulación, identificar los 8 patrones oscuros más comunes, y aplicar la tríada Pausar-Preguntar-Elegir frente a cualquier interfaz").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** La "Franja de datos duros" justo después del Hero (97% de apps de la UE con al menos un patrón oscuro, $245M de multa a Epic Games, 244h de lectura anual de políticas de privacidad, 40% de e-commerce europeo con diseño engañoso) es un gancho estadístico muy fuerte y concreto, seguido inmediatamente de 2 widgets interactivos (Detector de Presión Manipuladora + Simulador en vivo Honesto vs. Oscuro).

Es probablemente el mejor gancho combinado (dato + interactividad inmediata) de todo el sitio auditado — el usuario recibe impacto numérico y después, sin demora, puede experimentar con las herramientas antes de leer la teoría completa.

**Detalle a corregir:** el dato de "244h de lectura anual" se atribuye a un vago "Estudio citado en Perception Lab", sin autor, año ni link, y no aparece en el listado final de fuentes — la cifra menos sólida de las 4 del gancho principal.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Introducción con el modelo de BJ Fogg (motivación + facilidad + disparador) más una cita adicional sobre Lessig ("el código es ley") y Thaler & Sunstein ("arquitectura de la elección").

Bien resuelto, concreto, aunque nótese que esta introducción ya es más densa que la de `algoritmos-perfilado` o `subculturas-digitales` — cubre 3 marcos teóricos (Fogg, Lessig, Thaler & Sunstein) en el espacio que en otras temáticas se usa para uno solo.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Las 4 secciones base (Fogg → Brignull → Kahneman → síntesis) MÁS 8 bloques adicionales completos: Persuasión Ética vs. Manipulación (comparación en 2 columnas con Aristóteles/Ethos-Pathos-Logos), Matriz filtrable de 8 patrones oscuros (cada uno con mecánica, impacto, caso real y base legal), Evaluación Ética Trimembre (deontología/utilitarismo/ética de la virtud), Marco Regulatorio Global (11 leyes distintas en 3 regiones), más 2 casos críticos adicionales (Meta/NOYB, phishing educativo con IA).

Este es el contenido core más sobrecargado de todo el sitio auditado, superando a `alfabetizacion-digital`. Mientras que `alfabetizacion-digital` apilaba ~25 ítems de 4 marcos teóricos, acá el usuario atraviesa: 1 modelo de comportamiento (Fogg) + 1 taxonomía de patrones (Brignull) + 1 marco cognitivo (Kahneman) + 1 espectro ético de 2 polos con 3 sub-dimensiones cada uno (Ethos/Pathos/Logos vs. sus contrapartes) + 8 patrones oscuros con 4 datos cada uno (32 puntos de información) + 3 lentes éticas completas + 11 leyes de 3 regiones distintas. Es contenido de altísima calidad individual, pero el volumen acumulado es considerablemente mayor al de cualquier otra temática del sitio.

**Consecuencia práctica:** un usuario que llega hasta el final de este tramo sin ninguna pausa de síntesis intermedia (no hay recapitulaciones entre bloques) difícilmente retiene la mayoría de los 11 marcos legales o los 8 patrones con sus 4 atributos cada uno — el contenido está muy bien investigado, pero el diseño instruccional no ayuda a que se fije.

---

## Paso 6 — Modelado

**Qué hay hoy:** El "Simulador en vivo: Persuasión Transparente vs. Patrón Oscuro" — un toggle que muestra, lado a lado, un ejemplo de banner de privacidad honesto y uno manipulador, con análisis explicado para cada uno (por qué el diseño ético funciona, por qué el patrón oscuro manipula).

Es probablemente el mejor modelado de todo el sitio auditado. A diferencia de mostrar solo el "ataque" (como en `estafas-digitales`) o solo un caso narrativo (como en `subculturas-digitales`), acá se muestran ambos polos —el correcto y el incorrecto— en el mismo formato, con análisis explícito de qué hace que cada uno sea lo que es. Es el modelo ideal de "así se ve bien hecho / así se ve mal hecho" que el framework pide para este paso.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El "Detector de Presión Manipuladora" (mismo tipo de mecanismo que el simulador de `algoritmos-perfilado`) da práctica con feedback visual inmediato. Pero el elemento más destacable es el "Mini-test de Reconocimiento Rápido" — 3 escenarios con opciones múltiples, feedback inmediato tras cada respuesta explicando por qué la opción elegida es correcta o incorrecta, explícitamente etiquetado como "Práctica libre — no cuenta para tu progreso".

Este mini-test es, en la práctica, el elemento que mejor cumple la definición literal del paso de evaluación formativa del framework ("quiz corto, con explicación de por qué está bien/mal — distinto de un checklist de 'hice la tarea'") de todo el sitio auditado — incluso más que el quiz oficial de 10 preguntas, porque el quiz oficial no incluye explicación por respuesta (solo marca correcto/incorrecto y acumula puntaje), mientras que el mini-test sí explica el razonamiento en cada escenario.

**Vale la pena reconsiderar el rótulo:** al llamarlo "práctica libre que no cuenta para tu progreso", el diseño posiciona a este mini-test como secundario, cuando en realidad es el mecanismo que mejor resuelve el paso de evaluación formativa con explicación — podría valer la pena que sí contribuya de alguna manera al progreso, o al menos destacarse más como una pieza central, no periférica.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Quiz oficial de 10 preguntas, mismo mecanismo compartido con `algoritmos-perfilado` y `subculturas-digitales`. Es la única de las 3 implementaciones del grupo que usa correctamente todo el estado del hook compartido: pantalla inicial con instrucciones claras (cantidad de preguntas, umbral necesario), muestra el resultado de un intento previo si existe, y la pantalla de resultados distingue explícitamente "¡Completaste esta temática!" de "Todavía no llegaste al puntaje mínimo".

Esta es la implementación de referencia que el rediseño debería usar para unificar el comportamiento del quiz en las 6 temáticas del grupo — resuelve exactamente los bugs detectados en `algoritmos-perfilado` (que destructura las mismas variables pero nunca las usa).

**Limitación compartida con las otras 2 temáticas:** el quiz oficial no explica por qué una respuesta es correcta o incorrecta (a diferencia del mini-test de práctica, que sí lo hace) — sería valioso trasladar ese patrón de explicación del mini-test al quiz oficial.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 04 (aula/casa) + el bloque "Recuperar la Agencia: Kit de herramientas" — tríada de acción (Pausar, Preguntar, Elegir) más 5 preguntas de perfilado estratégico aplicables a cualquier interfaz.

El Kit de herramientas es uno de los mejores elementos de aplicación real de todo el sitio — las 5 preguntas estratégicas ("¿por qué me aparece esto justo ahora?", "¿qué quiere el diseño que yo haga?") son genuinamente reutilizables por el usuario fuera de la plataforma, en cualquier interfaz que encuentre después.

**Problema de audiencia:** la sección "Qué significa esto para el aula/casa" no tiene `quoteFamilias` (a diferencia de `algoritmos-perfilado`, que sí cubre las 3 partes: heading+paragraphs+quote) — la cita de cierre de esa sección específica queda igual para ambas audiencias.

**Redundancia notable:** la nota de "Lectura lateral (Mike Caulfield)" se repite casi textualmente 2 veces dentro del mismo bloque del Kit — una vez como paso 2 de la tríada ("Preguntar") y otra vez en la nota de cierre del mismo bloque, sin agregar información nueva la segunda vez.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Material de estudio (15 diapositivas + PDF + infografía) + "Fuentes Oficiales, Datos y Citas Verificables" (13 entradas, la lista más grande de las 3 temáticas del grupo).

**Problemas de rigor y consistencia en el listado de fuentes:**
- Wikipedia figura como fuente académica de pleno derecho (etiquetada "edición verificada") — tratamiento distinto al de `subculturas-digitales` y `algoritmos-perfilado`, donde Wikipedia no aparece en el listado equivalente.
- `Ruohonen et al. (2025)` es un preprint de arXiv sin revisión por pares confirmada, señalado como tal en el campo `publication` pero sin usar el patrón `unverified`/badge "sin verificar" del resto del sitio.
- 3 fuentes mencionadas en el cuerpo no tienen entrada en el listado final: el "Estudio citado en Perception Lab" (244h), y los 2 "Otros escenarios críticos" (Meta/NOYB, campañas de phishing educativas con IA), que citan organizaciones/especialistas sin nombrar la fuente concreta ni dar link.

**Redundancia estructural:** la mecánica del último patrón de la matriz ("Cobros inadvertidos en juegos") describe exactamente el mismo caso que el Caso de Estudio principal (Epic Games/Fortnite) — duplicación de contenido entre 2 bloques distintos de la misma página. Y `data.closingQuote` se repite 3 veces en total (Sección 02, widget del Detector, y la sección dedicada "Cita de cierre").

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe, y sin índice tappeable pese a ser la temática que más lo necesitaría |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ✅ El mejor combinado del sitio — datos duros + 2 widgets interactivos inmediatos |
| 4. Contexto | ✅ Bien resuelto, aunque ya denso desde el inicio (3 marcos en la introducción) |
| 5. Contenido core progresivo | ❌ El más sobrecargado de todo el sitio — 16 bloques, 11+ marcos/leyes distintos |
| 6. Modelado | ✅ El mejor del sitio — simulador honesto vs. oscuro lado a lado con análisis |
| 7. Práctica con feedback | ✅ El mini-test de 3 escenarios explica cada respuesta — el mejor ejemplo del framework |
| 8. Evaluación formativa | ✅ La mejor implementación técnica de las 3 del grupo (passed/previousResult/showQuiz) |
| 9. Aplicación/síntesis | ✅ Kit de herramientas genuinamente reutilizable, con 1 hueco de audiencia (quote) |
| 10. Recursos y cierre | ⚠️ Fuerte en volumen, con inconsistencias de rigor (Wikipedia, preprint, 3 fuentes faltantes) |

Esta temática resuelve más pasos del framework que cualquier otra auditada hasta ahora (7 de 10 en verde), pero paga ese logro con el peor problema de sobrecarga de contenido del sitio — es el caso más claro de "excelente material, necesita editar/recortar" antes que "necesita agregar elementos nuevos".

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Volumen y estructura
1. Es, por lejos, la temática con más contenido del grupo "Libres bajo influencia": además de las 4 secciones base con datos de audiencia, agrega 8 bloques completamente nuevos sin equivalente en `subculturas-digitales` ni `algoritmos-perfilado` (franja de datos duros, 2 widgets interactivos en la introducción, comparación ética en 2 columnas, matriz filtrable de 8 patrones, 2 casos adicionales, evaluación ética trimembre, marco regulatorio de 3 regiones, kit de herramientas de agencia, mini-test de práctica libre). Si el objetivo del rediseño es uniformar la extensión entre las 6 temáticas del grupo, esta es la que más contenido tendría que reorganizarse o recortarse.

### Redundancias
1. `data.closingQuote` se repite 3 veces en la misma página (Sección 02, widget Detector de Presión, y la sección dedicada "Cita de cierre") — la repetición es más notoria acá que en las otras 2 temáticas del grupo.
2. La nota de "Lectura lateral (Mike Caulfield)" se repite casi textualmente 2 veces en el bloque "Kit de herramientas de agencia digital": una vez como paso 2 de la tríada ("Preguntar") y otra vez en la nota de cierre del mismo bloque.
3. La mecánica del último patrón de la matriz ("Cobros inadvertidos en juegos") describe el mismo caso que el Caso de Estudio principal (Epic Games/Fortnite) — duplicación de contenido entre 2 bloques distintos de la misma página.

### Inconsistencias de audiencia
1. La sección "Qué significa esto para el aula/casa" no tiene `quoteFamilias` (a diferencia de `algoritmos-perfilado`, que sí cubre las 3 partes) — la cita de cierre de esa sección específica queda igual para ambas audiencias.
2. Los 8 bloques adicionales (franja de datos, widgets, matriz, ética trimembre, marco regulatorio, kit de agencia, mini-test) son 100% fijos sin ningún mecanismo de audiencia — la cobertura de audiencia real de toda la temática se concentra en solo 2 puntos (intro + 1 sección de 4).

### Fuentes sin entrada en el listado final
1. "Estudio citado en Perception Lab" (244h de lectura, en la franja de datos duros del Hero) — sin autor, año ni link.
2. Los 2 "Otros escenarios críticos" (Meta/NOYB y las campañas de phishing educativas con IA), que citan organizaciones/especialistas sin nombrar la fuente concreta ni dar link.

### Fuentes con tratamiento inconsistente
1. Wikipedia figura como fuente académica de pleno derecho en el listado final (etiquetada "edición verificada") — tratamiento distinto al de las otras 2 temáticas del grupo, donde Wikipedia no aparece en el listado equivalente.
2. `Ruohonen et al. (2025)` es un preprint de arXiv sin revisión por pares confirmada, señalado como tal en el campo `publication` pero sin usar el patrón `unverified`/badge "sin verificar" del resto del sitio — inconsistencia de tratamiento entre "reconocer que una fuente es preliminar" y el mecanismo formal que otras temáticas usan para lo mismo.

### Fortalezas técnicas y de contenido
1. Es la única de las 3 temáticas auditadas del grupo cuyo quiz oficial implementa correctamente todo el estado del hook compartido (`showQuiz`, `previousResult`, `passed`) — vale la pena que el rediseño tome esta implementación como referencia para unificar el comportamiento del quiz en las 6 temáticas del grupo.
2. El "Mini-test de Reconocimiento Rápido" es un elemento interactivo completamente nuevo, explícitamente marcado como "no cuenta para tu progreso" — es el único caso de las 3 temáticas auditadas con un ejercicio de práctica separado del quiz oficial que da feedback explicativo por respuesta.
3. Los pesos del "Detector de Presión Manipuladora" son ficticios, igual que el simulador de `algoritmos-perfilado`, sin ningún disclaimer que lo aclare — mismo hallazgo aplicable acá.

### Qué se podría agregar
1. Resumen ejecutivo o índice tappeable, dado el volumen sin precedentes de esta temática.
2. Objetivo de aprendizaje explícito, general.
3. Fuente o nota aclaratoria para el dato del "Estudio citado en Perception Lab" (244h).
4. Explicación por respuesta en el quiz oficial, replicando el patrón ya logrado en el Mini-test.
5. `quoteFamilias` para la sección "Qué significa esto para el aula/casa", siguiendo el estándar ya alcanzado por `algoritmos-perfilado`.
6. Disclaimer visible en el Detector de Presión Manipuladora aclarando que los pesos son ilustrativos.
7. Distinción visual clara para fuentes no académicas (Wikipedia) o no revisadas por pares (preprint de Ruohonen et al.), en línea con el patrón `unverified` del resto del sitio.
8. Recapitulaciones intermedias entre los 8 bloques adicionales de contenido, dado su volumen.

### Qué se podría simplificar, quitar o reordenar
1. Priorizar y posiblemente recortar contenido: evaluar si los 8 bloques adicionales necesitan todos estar en la misma página, o si algunos (Marco Regulatorio Global de 11 leyes, por ejemplo) podrían moverse a un recurso complementario/descargable en vez de formar parte del scroll principal.
2. Eliminar la repetición de la nota de "Lectura lateral" dentro del Kit de herramientas — mantenerla solo en un lugar.
3. Resolver la duplicación entre el último patrón de la matriz y el Caso de Estudio principal — unificar en una sola mención con referencia cruzada, en vez de describir el mismo caso 2 veces.
4. Reconsiderar el rótulo "no cuenta para tu progreso" del Mini-test, dado que es el elemento que mejor resuelve la evaluación formativa con explicación.

---

## Fortalezas a preservar en el rediseño
1. El "Simulador en vivo: Persuasión Transparente vs. Patrón Oscuro" — el mejor modelado por contraste directo (bueno vs. malo, lado a lado, con análisis) de todo el sitio. Candidato principal para replicarse en cualquier temática que necesite ilustrar la diferencia entre un uso correcto y uno manipulador de una técnica.
2. El Mini-test de Reconocimiento Rápido con feedback explicativo — el patrón de evaluación formativa más fiel al framework de todo el sitio, listo para replicarse (y potencialmente ampliarse) en otras temáticas.
3. La implementación completa del quiz oficial (passed/previousResult/showQuiz) — patrón técnico de referencia para unificar las 6 temáticas del grupo "Libres bajo influencia".
4. El Kit de herramientas de agencia (Pausar/Preguntar/Elegir + 5 preguntas estratégicas) — uno de los mejores elementos de aplicación real y reutilizable fuera de la plataforma de todo el sitio.
5. La Matriz de 8 patrones oscuros, filtrable por categoría, con mecánica/impacto/caso real/base legal por cada uno — buen modelo de organización de contenido denso, aunque su volumen total pese sobre el Paso 5.
