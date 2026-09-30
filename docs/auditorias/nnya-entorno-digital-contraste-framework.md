# NNyA y el Entorno Digital — Contraste contra el framework profesional de 10 pasos

Base: `nnya-entorno-digital-audit.md` (auditoría de `lib/nnya-entorno-digital-content.ts`, 81 líneas, y `app/nnya-entorno-digital/nnya-entorno-digital-content.tsx`, 1510 líneas).

Nota de contexto: esta es la 17ª y última temática de tu inventario, hermana de `cibercrianza` dentro del grupo "Infancia y Crianza" — comparte convenciones técnicas (mismo fallback `'familias'`, mismo helper `ta()`, misma separación editorial de fuentes), pero es notablemente más liviana en todos los sentidos: menos contenido, menos variación de audiencia, y es la primera temática de las 17 auditadas sin ningún mecanismo de autoevaluación — ni quiz, ni checklist, ni ningún elemento interactivo que mida comprensión o progreso real más allá del botón manual de "completar".

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

**Qué hay hoy:** No existe. El Hero tiene badge + H1 (pregunta) + bajada de 2 párrafos + 1 solo CTA + 2 badges flotantes con estadísticas.

**Qué falta:** un mapa breve que anticipe la estructura (cómo perciben los chicos el entorno digital → qué dicen los números → señales de alerta → guía práctica de 7 pasos), dado que la página no tiene índice de navegación lateral.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página.

**Qué falta:** objetivo general (ej: "vas a poder reconocer cómo los chicos y chicas viven el entorno digital de forma distinta a los adultos, identificar 4 señales de alerta tempranas, y aplicar 7 acciones concretas de acompañamiento").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El H1 es una pregunta directa ("¿Cómo ven los chicos el entorno digital?"), pero a diferencia de `cibercrianza` no usa `ta()` — queda genérico ("los chicos"), sin personalizar por audiencia pese a que el resto de la plataforma sí lo hace en sus Hero.

**Problema real, no solo de framework:** los 2 badges flotantes del Hero ("+90% Conectados a diario", "6h+ Por día en pantallas") no coinciden con ninguna de las 3 estadísticas que la propia página presenta más abajo (93%, 81%, 55%) ni con los datos de "Fuentes de los datos" (4,7h/4,2h) — son 2 cifras sueltas, sin fuente citada ni array de datos propio, hardcodeadas directamente en el Hero. Es el mismo patrón de "cifra decorativa sin atribuir en el elemento más visible" ya detectado en `hiperconectividad-digital` y `violencia-digital-infancias`, pero acá con el agravante de que ni siquiera coinciden con los datos reales que la misma página desarrolla después.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** "Detrás del concepto" (filtro burbuja, Eli Pariser 2011) + "Historia — De dónde viene esta evidencia" (fundación de la Red Global Kids Online en 2006 por UNICEF Innocenti, LSE y la Red Europea de Kids Online).

Bien resuelto en general, aunque es prácticamente el mismo relato histórico-institucional que ya cuenta `cibercrianza` (misma red, mismo año de fundación, mismos 3 fundadores), reformulado en tercera persona acá en vez de como cita textual con autor propio — cierto solapamiento de contenido entre las 2 temáticas hermanas del mismo grupo, aunque con redacción distinta.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** "Así perciben el entorno digital" (4 tarjetas: la plaza digital, la cámara de eco, privacidad en tensión, huella imborrable) → "Lo que nos dicen los números" (3 estadísticas) → "Señales de alerta" (4 ítems, notablemente más corta que los 9 de `cibercrianza`) → "Internet también es una oportunidad" (1 sola tarjeta, vs. las 2 de `cibercrianza`).

Bien dimensionado y compacto — a diferencia de la sobrecarga vista en varias temáticas del grupo "Libres bajo influencia", acá el contenido core es liviano y directo, sin riesgo de saturar al usuario. El costo de esta brevedad es que temas como "señales de alerta" (solo 4 ítems) quedan menos desarrollados que en su temática hermana.

---

## Paso 6 — Modelado

**Qué hay hoy:** La "Guía práctica" (7 pasos) da instrucciones directas ("Preguntales a qué juegan...", "Sentate con ellos a revisar la privacidad..."), pero sin ejemplos de diálogo modelados ni contraste de enfoques.

Notablemente más débil que `cibercrianza` en este paso — esa temática tenía "Preguntas para abrir el diálogo sin interrogar" (7 preguntas textuales concretas) y el contraste "Control vs. Presencia" (frases textuales de ambos enfoques, lado a lado); acá no hay ningún equivalente, solo instrucciones generales de qué hacer, sin mostrar cómo se vería hecho.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** La misma guía de 7 pasos es navegable (acordeón en mobile, sidebar en desktop), pero es puramente informativa — no hay ningún ejercicio, simulador o mecanismo que le pida al usuario hacer algo y reciba una confirmación o resultado personalizado.

Es el paso más débil de esta temática, y notablemente más débil que su par `cibercrianza` — esa temática tenía 2 quizzes interactivos con feedback personalizado; acá no hay ningún mecanismo de práctica con retroalimentación, solo lectura secuencial de instrucciones.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada. Sin `computeProgress` personalizado, sin quiz, sin checklist de ningún tipo — el único mecanismo de progreso es el botón manual `TematicaCompletarButton`.

Es la primera de las 17 temáticas auditadas sin ningún mecanismo de autoevaluación en absoluto — ni siquiera el sustituto parcial de un checklist de autorreporte que sí tienen la mayoría de las demás temáticas del sitio. Comparte este vacío estructural con `ia-etica-ciudadania` y `estafas-digitales` (ambas sin checklist), pero es la única donde ni siquiera existe un quiz de ningún tipo dentro del mismo grupo temático que sí lo tiene en su par (`cibercrianza` tiene 2).

**Qué falta:** como mínimo, un mecanismo de autoevaluación breve — dado que la guía ya está organizada en 7 pasos claros, convertir algunos en un checklist marcable sería una extensión de bajo esfuerzo; idealmente, algo que verifique comprensión de las 4 señales de alerta o del concepto de "filtro burbuja".

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** "Consejos rápidos al paso" (9 ítems breves) + CTA final con variante de audiencia ("Involucrate hoy en la vida digital de tus hijos/estudiantes").

Más débil que el cierre de `cibercrianza` (los "5 compromisos" numerados y accionables) — acá los 9 consejos son útiles pero genéricos y no están organizados como un plan de acción progresivo o priorizado; el CTA final es breve y no ofrece ningún paso concreto más allá de la invitación general a "involucrarse".

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Carrusel de 7 láminas + Infografía con lightbox + "Fuentes de los datos" (2 fichas, sin `SourceCite`) + Centro de recursos (8 fuentes, listado limpio sin discrepancias) + Temas relacionados (3 tarjetas).

**Problema de rutas de assets:** el carrusel y la infografía usan rutas bajo `/weekly-content/2026-W24/` en vez de una carpeta dedicada de la temática — sugiere que el material fue reutilizado de contenido semanal puntual en vez de generarse específicamente para esta página permanente. Esto es un riesgo real: si esa semana llegara a archivarse (el propio proyecto tiene un proceso que mueve semanas pasadas a una carpeta de archivo), estos links se romperían.

**Oportunidad de enlace cruzado no aprovechada:** "Temas relacionados" no enlaza a `cibercrianza`, pese a ser la temática más cercana dentro del mismo grupo — enlaza en cambio a 3 temáticas de ciudadanía digital general. El enlace cruzado es además unidireccional: `cibercrianza` sí enlaza a esta temática en su propia sección de temas relacionados, pero no al revés.

**Inconsistencia de atribución:** las 3 estadísticas principales muestran su fuente como texto plano ("Fuente: {stat.fuente}") en vez de usar `SourceCite`, aunque esas mismas 3 fuentes sí están correctamente tipadas y sí aparecen con `SourceCite` en el Centro de recursos al final — la atribución in-situ (sin link) es menos rigurosa que la atribución consolidada (con link).

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Pregunta directa pero sin personalizar por audiencia, con 2 cifras del Hero sin fuente ni coincidencia con los datos reales |
| 4. Contexto | ✅ Bien resuelto, aunque solapado con la historia ya contada en `cibercrianza` |
| 5. Contenido core progresivo | ✅ Bien dimensionado y compacto, aunque más breve que su par del mismo grupo |
| 6. Modelado | ❌ Sin ejemplos de diálogo ni contraste de enfoques, a diferencia de `cibercrianza` |
| 7. Práctica con feedback | ❌ Guía puramente informativa, sin ningún mecanismo interactivo |
| 8. Evaluación formativa | ❌ La única de las 17 temáticas sin ningún mecanismo de autoevaluación |
| 9. Aplicación/síntesis | ⚠️ Consejos genéricos y CTA breve, sin un cierre accionable comparable a los "5 compromisos" |
| 10. Recursos y cierre | ⚠️ Assets en ruta frágil, enlace cruzado no aprovechado, atribución in-situ inconsistente |

Esta temática es la más débil de todo el grupo "Infancia y Crianza" en la mitad práctica del framework (Modelado, Práctica, Evaluación, Aplicación) — no por errores de contenido, sino por ausencia casi total de interactividad más allá de la lectura. Es, en cierto sentido, el reverso de `cibercrianza`: mismo marco conceptual y las mismas convenciones técnicas, pero sin ninguno de los elementos que hacen de su temática hermana la mejor evaluada del sitio en estos pasos.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Ausencia estructural más grave
Es la primera temática auditada en todo el sitio sin ningún quiz ni mecanismo de autoevaluación — el progreso depende enteramente de `TematicaCompletarButton` sin `computeProgress` personalizado, a diferencia de `cibercrianza` (2 quizzes) y de las 6 temáticas de "Libres bajo influencia" (quiz de 10 preguntas).

### Inconsistencias de datos
1. Los 2 badges flotantes del Hero ("+90% Conectados a diario", "6h+ Por día en pantallas") no coinciden con ninguna de las 3 cifras de `estadisticas` (93%, 81%, 55%) ni con los datos de `fuentes`, y no tienen fuente citada — son 2 datos sueltos sin respaldo verificable, a diferencia del resto de cifras de la página.
2. Las 3 estadísticas principales muestran su fuente como texto plano ("Fuente: {stat.fuente}") en vez de usar el componente `SourceCite`, aunque las mismas 3 fuentes sí están correctamente tipadas y sí aparecen con `SourceCite` en el Centro de recursos al final de la página — inconsistencia entre la atribución in-situ (sin link) y la atribución consolidada (con link).
3. El dato "4,7 h de uso diario en adultos sin hijos, frente a 4,2 h de adolescentes" (ficha 1 de "Fuentes de los datos") tiene una redacción ambigua — no queda claro qué relación tiene el grupo de comparación ("adultos sin hijos") con la crianza de esos adolescentes; conviene revisar la fuente original (Save the Children & GAD3) antes del rediseño.

### Inconsistencias de audiencia
1. El paso 6 de la guía práctica ("Higiene digital") es el único de los 7 con variante de audiencia real, y es aditiva en vez de sustitutiva (agrega una oración para docentes sobre la base ya escrita en clave "familias") — patrón distinto al resto de la plataforma, que típicamente sustituye sustantivos ("tus hijos" ↔ "tus estudiantes") en vez de agregar contenido extra a una sola variante.
2. Es, de las 2 temáticas auditadas del grupo "Infancia y Crianza", la que tiene menor proporción de contenido con variante real de audiencia (3 de ~8 bloques relevantes, con una de esas 3 siendo aditiva en vez de una reescritura) — comparado con `cibercrianza` (5 de ~14 bloques, todas sustitutivas). Ambas comparten el mismo fallback `'familias'` y el mismo helper `ta()`, confirmando que es una convención deliberada del grupo, no un accidente aislado.
3. El H1 del Hero no usa `ta()` — queda genérico ("los chicos"), sin variante, a diferencia del patrón de personalización del resto de la plataforma.

### Problemas de assets
1. El carrusel y la infografía usan rutas de `/weekly-content/2026-W24/` en vez de una carpeta dedicada de assets de la temática (`/img/tematicas/nnya-entorno-digital/...`) — sugiere que este material fue reutilizado de un contenido semanal puntual en vez de generarse específicamente para esta página permanente; vale la pena migrar estos assets a una ruta propia de la temática antes del rediseño, para no depender de una carpeta de contenido semanal que eventualmente podría archivarse.
2. La imagen principal del Hero usa una foto de stock de Unsplash (`images.unsplash.com`) en vez de un asset propio del proyecto — único caso verificado hasta ahora entre las temáticas auditadas; conviene confirmar si el dominio está permitido en la configuración de imágenes remotas del proyecto, y si la etiqueta usada (`<img>` nativa en vez de `next/image`) es una excepción deliberada o un descuido respecto a la convención del resto del proyecto.

### Enlaces cruzados
"Temas relacionados" no enlaza a `cibercrianza`, pese a ser la temática más cercana dentro del mismo grupo "Infancia y Crianza" — enlaza en cambio a 3 temáticas de ciudadanía digital general (`huella-digital`, `violencia-digital`, `alfabetizacion-mediatica`), ninguna del mismo grupo. `cibercrianza`, en cambio, sí enlaza a `nnya-entorno-digital` en su propia sección de temas relacionados — el enlace cruzado es unidireccional.

### Solapamiento de contenido entre temáticas hermanas
La sección "Historia" de esta temática narra prácticamente el mismo origen institucional (Red Global Kids Online, 2006, UNICEF Innocenti + LSE + Red Europea) que `cibercrianza` cuenta en su propia sección de historia — mismo hecho, mismos 3 fundadores, mismo año, con redacción distinta (tercera persona acá vs. cita textual con autor allá).

### Qué se podría agregar
1. Resumen ejecutivo y objetivo de aprendizaje explícito.
2. Personalización por audiencia del H1 del Hero.
3. Fuente o corrección para los 2 badges flotantes del Hero.
4. `SourceCite` estructurado para las 3 estadísticas principales, no solo texto plano.
5. Al menos un mecanismo de autoevaluación — checklist o quiz breve — dado que es la única temática sin ninguno.
6. Ejemplos de diálogo modelados, siguiendo el patrón de "Preguntas para el diálogo" de `cibercrianza`.
7. Un cierre de aplicación más estructurado y accionable, siguiendo el modelo de "5 compromisos" de `cibercrianza`.
8. Enlace cruzado a `cibercrianza` en "Temas relacionados", para cerrar la referencia bidireccional entre ambas temáticas del grupo.
9. Migración de los assets del carrusel/infografía a una carpeta dedicada de la temática.
10. Revisión de la redacción ambigua del dato "4,7h adultos sin hijos vs. 4,2h adolescentes".

### Qué se podría simplificar, quitar o reordenar
1. Evaluar si la sección "Historia" debería reformularse para evitar la redundancia casi total con la misma sección de `cibercrianza`, o si conviene mantenerla como refuerzo (en cuyo caso valdría la pena que ambas se refieran explícitamente entre sí, "como ya vimos en Cibercrianza...").
2. Confirmar la conveniencia de mantener una imagen de stock externa en el Hero, dado que es el único caso de todo el sitio, o reemplazarla por un asset propio consistente con el resto de la plataforma.

---

## Fortalezas a preservar en el rediseño
1. El listado de fuentes del Centro de recursos coincide exactamente con las fuentes reales usadas en el cuerpo, sin discrepancias — mismo logro que `cibercrianza`, `alfabetizacion-mediatica`, `estafas-digitales` y `violencia-digital`.
2. Las 4 tarjetas de "Así perciben el entorno digital" (la plaza digital, la cámara de eco, privacidad en tensión, huella imborrable) son un buen resumen conceptual, compacto y bien conectado con el marco del filtro burbuja presentado antes.
3. El contenido core general es liviano y bien dimensionado — buen contraejemplo de "no sobrecargar" frente a varias temáticas del grupo "Libres bajo influencia".
4. La guía práctica de 7 pasos con 2 layouts responsivos (acordeón mobile / sidebar desktop) es una buena base estructural sobre la cual construir los elementos de modelado y práctica que hoy faltan.
