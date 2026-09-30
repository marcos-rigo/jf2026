# Alfabetización Digital — Contraste contra el framework profesional de 10 pasos

Base: `alfabetizacion-digital-audit.md` (auditoría de `lib/alfabetizacion-digital-content.ts`, 386 líneas, y los 11 archivos que lo consumen — `app/alfabetizacion-digital/alfabetizacion-digital-content.tsx`, 356 líneas, + `components/alfabetizacion-digital/*.tsx`).

Nota de contexto: esta es la temática más densa en aparato teórico-académico de las 4 auditadas hasta ahora — tiene su propia identidad visual de citas ("Provenance Stamp"), un sistema de tiers de lectura único, y es la que más autores/marcos conceptuales acumula (Gilster, Eshet-Alkalai, Ng, Spires & Bartlett, Martin & Grudziecki, DigComp 3.0, DigCompALC...). Pero también es la que menos varía por audiencia (solo 2 de 10 secciones) y tiene un campo de contenido literalmente sin escribir en el código (`CONCEPTO_NOTA_FAMILIAS: string | undefined = undefined`).

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

**Qué hay hoy:** No existe. El Hero tiene badge + H1 + párrafo intro + banner de 5 estadísticas con contador animado + bloque "Constructo Holístico" + tríada de pilares. Ningún elemento cumple la función de "en 3 líneas, esto es lo que vas a recorrer".

**Qué falta:** con 10 secciones agrupadas en 4 tiers (Fundamentos/Marco de referencia/Aplicación/Síntesis), esta temática tiene la estructura ideal para anticipar un resumen ejecutivo organizado por esos mismos 4 tiers — hoy esa agrupación solo vive en el sidebar de navegación, invisible hasta que el usuario mira el TOC.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de las 10 secciones — ni siquiera parcial como en `ciudadania-digital`/`huella-digital`. Mismo vacío total que `hiperconectividad-digital`.

**Qué falta:** objetivo general de módulo con verbos medibles (ej: "vas a poder identificar en qué nivel de la brecha digital te encontrás, aplicar los criterios DigComp 3.0 para evaluar tus propias competencias, y diseñar prompts estructurados para IA").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El banner de 5 estadísticas con contador animado (`useCountUp`) es un elemento único del grupo, visualmente fuerte y apropiado como gancho. Buen punto de partida.

**Problema:** las 5 cifras del banner (54%/19%/7%/+3.19%/80%) no llevan cita en el momento — la atribución llega recién 2-3 secciones después. Un usuario que solo lee el Hero ve números de impacto sin ninguna fuente visible.

**Bug adicional en esta misma sección:** `CONCEPTO_NOTA_DOCENTE` se muestra como texto fijo para todas las audiencias, incluida familias, pese a estar escrito explícitamente para docentes ("Para un docente, esto implica que 'estar alfabetizado digitalmente'..."). No pasa por `resolveTexto`. Es un error de audiencia real, no solo un hueco de framework, presente ya en el primer bloque de contenido de la página.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 01, "Genealogía Conceptual y Marcos Teóricos" — la sección más densa en autores/citas académicas de las 4 temáticas auditadas: Gilster (1997), Eshet-Alkalai (2012), Ng (2012), Spires & Bartlett (2012), Martin & Grudziecki (2013).

**Problema de rol, no de calidad:** el contenido en sí es excelente y bien fundamentado, pero funcionalmente esto ya no es "contexto mínimo necesario" (como pide el Paso 4), es una revisión bibliográfica completa de 5 marcos teóricos — está haciendo el trabajo del Paso 5 (contenido core) disfrazado de contexto histórico. Comparado con el Caso Costeja de `huella-digital` (una sola fuente, bien anclada, funcionando puramente como contexto), acá la sección de "historia" es en realidad el corazón teórico de la temática.

**Inconsistencia de atribución dentro de esta misma sección:** 4 de los 5 modelos teóricos no usan el componente `SourceCite` (decisión documentada en el código, pero rompe la identidad visual distintiva de esta temática — el "Provenance Stamp" — justo en las citas académicas fundacionales, que son las que más se beneficiarían de ese sello de verificación).

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección 02 (5 Dimensiones de Eshet-Alkalai) + Sección 03 (4 subsecciones: 3 Niveles de brecha digital, DigComp 3.0 con 5 áreas, DigCompALC con 10 niveles, diagnóstico Chile con 3 niveles).

Este es el problema de sobrecarga más grave de las 4 temáticas auditadas. Entre las secciones 01, 02 y 03 el usuario recibe, apiladas: 5 modelos teóricos distintos (sección 01) + 5 dimensiones cognitivas (sección 02) + 3 niveles de brecha + 5 áreas DigComp + 10 niveles DigCompALC + 3 niveles de diagnóstico Chile (sección 03) — son más de 25 ítems taxonómicos distintos, de al menos 4 marcos de clasificación superpuestos (Eshet-Alkalai, DigComp, DigCompALC, Índice de Ciudadanía Digital), sin ninguna jerarquía explícita que diga cuál es el marco "principal" que el usuario debería recordar y cuáles son complementarios. Es una versión agravada del mismo problema ya señalado en `ciudadania-digital` (24 ítems sueltos entre 3 taxonomías), pero acá con más marcos todavía y mayor densidad académica.

**Qué falta:** una jerarquía explícita ("el marco que vamos a usar de acá en adelante es X; los otros se mencionan como contexto complementario") antes de presentar los 4+ marcos, para que el usuario sepa qué necesita memorizar y qué es solo panorama.

---

## Paso 6 — Modelado

**Qué hay hoy:** Sección 05, "Casos Concretos de Aplicación por Nivel de Proficiencia" — 3 niveles (Básico/Intermedio/Avanzado) con listas de ítems concretos (conexión WiFi, prompts estructurados para IA, programación en Python).

**Problema:** son listas de ejemplos categorizados, no modelado real — no hay una demostración de "así se ve un prompt bien estructurado" (pese a que "diseñar prompts estructurados con rol, contexto e instrucciones precisas" es justamente uno de los 5 ítems del checklist final). El usuario lee que existe la categoría "Nivel Autolaboral → creación de prompts estructurados", pero nunca ve un ejemplo real de prompt bien armado vs. uno mal armado.

**Qué falta:** al menos un ejemplo modelado por nivel — un prompt real bien estructurado (ya que se lo menciona explícitamente), un caso de "búsqueda autónoma de solución a un fallo técnico" mostrado paso a paso, etc.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Prácticamente nada. No hay labs, no hay consignas de acción concreta ligadas a checkboxes individuales como en `huella-digital`. La sección 05 presenta niveles para que el usuario se ubique, pero no le pide hacer nada ni confirma si lo hizo.

Mismo vacío que `hiperconectividad-digital` — es contenido de lectura/consulta, no de práctica.

**Qué falta:** convertir al menos el nivel "Autolaboral" en una práctica real — por ejemplo, pedirle al usuario que escriba un prompt estructurado ahí mismo y compararlo con un ejemplo de referencia.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Checklist de autoevaluación de 5 ítems en la sección 09 (ej: "Sé configurar redes WiFi seguras...", "Aplico criterios de evaluación informacional..."), persistido vía `useTematicaProgress`, más una barra de progreso adicional y redundante fuera de esa sección que muestra el mismo X/5 dos veces.

Mismo problema estructural que las 3 temáticas anteriores: es autorreporte de habilidad ("sé hacer X"), no evaluación de comprensión con feedback — no hay ninguna pregunta que verifique, por ejemplo, si el usuario realmente entiende la diferencia entre los 3 niveles de la brecha digital, o si puede identificar correctamente en qué área de DigComp 3.0 cae una situación dada.

**Agravante propio de esta temática:** con la cantidad de marcos teóricos presentados (Paso 5), un quiz de comprensión sería particularmente valioso acá para confirmar que el usuario efectivamente distingue un marco de otro, en vez de haberlos leído todos como un bloque indistinto.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 08, "Rol Docente / Rol de la Familia" — la síntesis mejor desarrollada de las 4 temáticas auditadas hasta ahora: 3 ejes completos (Apropiación, Superación de barreras, Desarrollo profesional continuo) con título y descripción propia por audiencia, más un bloque de cierre sobre IA. Buen trabajo de conexión entre la teoría de las secciones 01-07 y el rol concreto del usuario.

**Problema de consistencia (no de contenido):** hay 3 números distintos para esta misma sección según dónde se mire — el TOC dice 08, un bloque introductorio hardcodeado en el archivo principal dice 07, y el eyebrow interno de `AulaSection` dice 08. Además, ese bloque introductorio "07" vive fuera del componente `AulaSection`, como párrafo fijo adicional sin variante de audiencia, duplicando parcialmente lo que la sección ya dice — genera una segunda voz narrativa para el mismo tema, con su propia numeración discrepante.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 09, 3 subsecciones: políticas públicas destacadas (Chile/México/Uruguay/internacional) + listado de 5 fuentes oficiales + checklist de autoevaluación (ya cubierto en Paso 8).

**Ausencia notable:** es la única de las 4 temáticas del grupo sin carrusel de recursos — solo tiene la infografía única con lightbox (sección 04). Si el rediseño busca unificar el patrón visual del grupo, esto es una decisión pendiente: ¿se agrega un carrusel acá también, o se documenta como diferencia consciente?

**Ausencia de elemento accionable:** a diferencia de `huella-digital` (plantilla copiable) o incluso `ciudadania-digital` (checklist con mensajes de progreso por audiencia), acá el cierre es puramente informativo — políticas públicas de otros países + lista de fuentes + autoevaluación. No hay nada que el usuario se lleve para aplicar de inmediato.

**Redundancia estructural:** la barra de progreso duplicada (dentro de `RecursosSection` y otra vez fuera, en el archivo principal) es el mismo dato mostrado dos veces con distinto empaquetado visual, sin razón aparente.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe (igual que hiperconectividad-digital) |
| 3. Gancho | ✅ Fuerte (contador animado), pero con bug de audiencia y cifras sin cita inmediata |
| 4. Contexto | ⚠️ Excelente en rigor, pero funcionalmente es contenido core, no contexto liviano |
| 5. Contenido core progresivo | ❌ El más sobrecargado de las 4 temáticas — 25+ ítems de 4+ marcos sin jerarquía |
| 6. Modelado | ⚠️ Hay categorización por nivel, pero sin demostración real |
| 7. Práctica con feedback | ❌ Prácticamente ausente |
| 8. Evaluación formativa | ❌ No existe (autorreporte con barra duplicada) |
| 9. Aplicación/síntesis | ✅ La mejor desarrollada de las 4, con inconsistencia de numeración (07/08) |
| 10. Recursos y cierre | ⚠️ Sin carrusel, sin elemento accionable, con redundancia de progreso |

Esta temática tiene el contenido más riguroso académicamente y la mejor síntesis de aplicación (Pasos 4 y 9), pero es la que más sufre de sobrecarga en el contenido core (Paso 5) y comparte el vacío total de práctica/evaluación (Pasos 2, 7, 8) con `hiperconectividad-digital`.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. `CONCEPTO_NOTA_FAMILIAS` está declarada pero sin escribir (`export const CONCEPTO_NOTA_FAMILIAS: string | undefined = undefined`, con comentario "Sin escribir todavía"). Mientras tanto, `CONCEPTO_NOTA_DOCENTE` se importa y renderiza como string fijo en el Hero sin pasar por `resolveTexto`, mostrándose igual para todas las audiencias, incluida familias.
2. La cita principal del Concepto (`CONCEPTO_QUOTE`, de Ng 2012) nunca se renderiza como blockquote con `SourceCite` en ninguna sección — está definida en `lib` pero solo se usa indirectamente (`NG_SOURCE = CONCEPTO_QUOTE.source`) en la tarjeta de Ng dentro de Historia. Es la única "Quote" de Hero de las 4 temáticas del grupo que no aparece como cita destacada en pantalla.
3. Inconsistencia de numeración entre el TOC y los encabezados visuales de la sección "Aula": el TOC dice 08, el bloque introductorio hardcodeado en el archivo principal dice 07, y el `AULA_EYEBROW` interno de `AulaSection` dice 08 — 3 fuentes de verdad para el mismo número.
4. 4 modelos teóricos de la sección Historia no usan `SourceCite`, rompiendo la consistencia visual de atribución del resto de la página (decisión documentada en el código, pero el "Provenance Stamp" distintivo de esta temática no cubre justamente las citas académicas fundacionales).
5. Frases "en el aula"/"un docente" hardcodeadas sin `AudienciaTexto` en 2 lugares fuera de las secciones designadas para variar por audiencia: las 5 descripciones de Características (sección 02) terminan con "En el aula, ..." y el 4º riesgo de la sección 07 ("En el aula, un docente puede ser quien primero note...") — se muestran igual para familias.
6. Checklist de autoevaluación (sección 09) es la única de las 3 temáticas comparables sin variante de audiencia — rompe el patrón de "todo checklist se traduce" visto en `ciudadania-digital`/`huella-digital`.
7. Única temática del grupo con 2 mecanismos de progreso de lectura simultáneos: la barra fija superior de scroll (`readingBar`) y el sidebar TOC con tiers.

### Redundancias
1. 5 estadísticas del banner del Hero se repiten sin cita en el momento, y con cita más abajo (54%/19%/7% en sección 03, +3.19%/80% en sección 06) — no es una repetición dañina en sí, pero significa que quien solo lee el Hero ve números sin fuente.
2. Barra de progreso duplicada: dentro de `RecursosSection` y otra vez fuera, en el archivo principal, mostrando el mismo `X/5` dos veces con distinto empaquetado visual.
3. El bloque introductorio "07" (fuera de `AulaSection`) duplica parcialmente el contenido de la sección 08, con su propia voz narrativa y su propia numeración discrepante.

### Fuentes sin verificar (ya marcadas, pendientes de resolver)
1. `MERCADO_LABORAL_QUOTE` (sección 06, Ventajas) — "Análisis econométrico regional, citado en el informe de referencia de esta temática", sin autor/institución nombrada ni URL. Es la única fuente `unverified: true` de toda la temática — proporción muy baja comparada con `huella-digital` (3 de 6) o `hiperconectividad-digital` (4 de 9), reflejo del mayor rigor bibliográfico general de esta temática.

### Fuentes confirmadas sólidas
Comisión Europea/JRC (DigComp 3.0), María Florencia Ripani/CEPAL (DigCompALC, con código de documento LC/TS.2026/44), Fundación País Digital, Biblioteca del Congreso Nacional de Chile, Banco Interamericano de Desarrollo (BID), Cooperación regional eLAC2026/CEPAL — buen nivel de fuentes institucionales primarias con URL verificable.

### Fuentes confirmadas sin URL (autores/modelos teóricos, decisión editorial consciente)
Paul Gilster (1997), Yoram Eshet-Alkalai (2012), Ng, W. (2012), Spires & Bartlett (2012), Martin & Grudziecki (2013) — el propio comentario del código explica que las referencias teóricas sin edición digital se citan en el cuerpo, no en el repositorio de enlaces (`FUENTES_COMPLETAS`). Es una decisión razonable, pero significa que 5 de las fuentes más importantes de la temática no pasan por el sello visual "Provenance Stamp" que es la seña de identidad de esta temática específicamente.

### Inconsistencia de listado de fuentes
El listado final de "Fuentes Oficiales" (sección 09) no incluye el BID ni la fuente `unverified` de Mercado Laboral, pese a citarse inline en la sección 06 — mismo patrón de inconsistencia detectado en las 3 auditorías anteriores del grupo (Barco de Teseo en `ciudadania-digital`, GDPR en `huella-digital`, UNICEF_ESPANA_PENDIENTE/Identidad Fragmentada en `hiperconectividad-digital`). Es un patrón que se repite en las 4 temáticas sin excepción — vale la pena resolverlo a nivel de sistema (componente/convención compartida) más que temática por temática.

### Qué se podría agregar
1. Objetivo de aprendizaje explícito, general y por sección.
2. Resumen ejecutivo de 3 líneas, aprovechando la estructura de 4 tiers ya existente en el TOC.
3. Jerarquía explícita entre los 4+ marcos teóricos presentados en las secciones 01-03, indicando cuál es el marco de referencia principal.
4. Al menos un ejemplo modelado por nivel de proficiencia (sección 05), especialmente un prompt de IA bien estructurado, dado que se menciona explícitamente como competencia a evaluar.
5. Quiz de comprensión real, con foco en distinguir los distintos marcos teóricos entre sí.
6. Contenido real para `CONCEPTO_NOTA_FAMILIAS` (hoy `undefined`), o remover la referencia si ya no se planea escribir.
7. Corregir el bug de `CONCEPTO_NOTA_DOCENTE` para que pase por `resolveTexto` y no se muestre a la audiencia familias.
8. Unificar la numeración de la sección Aula (07 vs. 08) en una sola fuente de verdad.
9. Decidir sobre el carrusel de recursos ausente — agregarlo o documentar la decisión de no tenerlo.
10. Un elemento accionable de cierre (plantilla, checklist imprimible), siguiendo el modelo de `huella-digital`.

### Qué se podría simplificar o quitar
1. Eliminar la barra de progreso duplicada, dejando solo una.
2. Fusionar el bloque introductorio hardcodeado "07" con el contenido de `AulaSection`, para que exista una sola voz narrativa y un solo número de sección.
3. Evaluar si las 4 subsecciones de la sección 03 (Tipos/Variantes) pueden reducirse o reorganizarse jerárquicamente, dado el volumen de marcos teóricos apilados sin distinción de importancia relativa.

---

## Fortalezas a preservar en el rediseño
1. El sistema de tiers de lectura (4 tiers: Fundamentos/Marco de referencia/Aplicación/Síntesis) es una estructura organizativa más sofisticada que el TOC plano de las otras 3 temáticas — vale la pena evaluar si se traslada al resto del grupo.
2. La identidad visual "Provenance Stamp" de `SourceCite` (sello circular animado, check violeta o reloj ámbar según verificación) es el tratamiento de fuentes más elaborado del sitio — buen candidato a estandarizar en las demás temáticas si el rediseño busca mayor rigor visual de atribución.
3. La sección 08 (Rol Docente/Familia) es la síntesis de aplicación más completa y mejor estructurada (3 ejes) de las 4 temáticas auditadas — buen modelo a replicar para el Paso 9 en otras temáticas.
4. El rigor bibliográfico general (solo 1 de 9+ fuentes marcada `unverified`) es el más alto del grupo — buena práctica de investigación a mantener como estándar.
