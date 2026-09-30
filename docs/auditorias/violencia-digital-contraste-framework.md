# Violencia Digital hacia la Mujer — Contraste contra el framework profesional de 10 pasos

Base: `violencia-digital-audit.md` (auditoría de `app/violencia-digital/violencia-digital-content.tsx`, 1169 líneas, y `lib/violencia-digital-content.ts`, 103 líneas).

Nota de contexto: esta temática tiene el protocolo accionable más fuerte y concreto de las 8 auditadas hasta ahora, con una funcionalidad única en todo el sitio (descarga de plan de acción en `.txt`), y un listado de fuentes que por diseño no puede tener discrepancias. Pero tiene un problema de fondo serio: la audiencia "mujeres" —nombrada explícitamente en el título de la página— no recibe ningún contenido propio; en las 2 únicas piezas que varían por audiencia, recibe literalmente el mismo texto que "docentes".

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

**Qué hay hoy:** No existe como bloque de 3 líneas, pero el Hero tiene algo cercano: una "Meta declarada" fija ("Al terminar, tendrás un plan de acción seguro y pruebas legales válidas"). No mapea la estructura completa (contexto legal, protocolo, checklist, plantilla), pero al menos anticipa el resultado esperado.

**Qué falta:** un mapa breve de los 3 pasos del protocolo (Asegurar Perímetro → Modo Investigador → Denuncia y Contención), que es la columna vertebral real de la página y hoy no se anticipa en ningún lado antes de llegar ahí.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** La "Meta declarada" del Hero ("tendrás un plan de acción seguro y pruebas legales válidas") es, de las 8 temáticas auditadas, de las mejor logradas en este paso — es concreta, orientada a un resultado tangible, y se cumple literalmente al final con el botón "Descargar Plan".

**Detalle a ajustar:** sigue sin verbos de Bloom explícitos (identificar/aplicar/documentar), pero el hecho de que la meta se traduzca en un artefacto real descargable la hace más creíble que los objetivos puramente declarativos de otras temáticas.

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El párrafo del Hero intenta cubrir a las 3 audiencias en un solo texto fijo ("Si sos docente, este mismo protocolo te sirve para vos y también para acompañar a una colega, a una alumna o a la familia de un estudiante que esté atravesando esto").

**Problema:** es una generalización universal en vez de usar el mecanismo de audiencia de la plataforma — funciona como intento de inclusión, pero diluye la precisión para cada audiencia específica. En particular, la audiencia "mujeres" (la nombrada en el título) queda mencionada solo de pasada ("protegerte"), sin ningún texto que hable directamente a ella como la persona principal a la que se dirige la página.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección Concepto (2 citas, ONU Mujeres y CEPAL) + Sección Historia (narrativa de Olimpia Coral Melo — la biografía más extensa y elaborada de todo el sitio, con arco narrativo completo: descubrimiento → denuncia frustrada → activismo → resultado legal → reconocimiento internacional — más la Ley 27.736 de Argentina, con la aclaración explícita de que no es una importación literal de la ley mexicana).

Este es uno de los mejores contextos de las 8 temáticas auditadas. El storytelling de Olimpia Coral Melo le da un anclaje humano y legal fuerte al resto de la temática, y la precisión sobre la ley argentina (distinguiéndola de la mexicana) es un nivel de rigor editorial que no se ve en otras temáticas.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección "Tipos de Violencia Digital de Género" — 6 tipos (difusión no consentida, ciberacoso/stalking, amenazas, desinformación de género, suplantación de identidad, deepfakes), bien fundamentados con fuente única (ONU Mujeres/MESECVI-OEA) más una nota adicional sobre deepfakes.

**Bien dimensionado:** 6 ítems en una sola lista clara, sin taxonomías paralelas compitiendo — comparable en organización a las 3 modalidades de `estafas-digitales` o al C.A.F.E. de `alfabetizacion-mediatica`.

---

## Paso 6 — Modelado

**Qué hay hoy:** El Protocolo de 3 Pasos incluye bloques "Ahora hacé esto" con instrucciones de nivel UI muy concretas (ej: "Andá a la configuración de WhatsApp/Instagram, buscá 'Privacidad y Seguridad' y activá la verificación en dos pasos", con snippet de ruta de menú: `Configuración → Cuenta → Verificación en dos pasos`). Además, la sección "Errores Fatales que Debés Evitar" modela por contraste — muestra qué NO hacer y por qué (ej: "Borrar y Bloquear inmediatamente" → "Destruís la evidencia").

Este es de los mejores modelados de las 8 temáticas auditadas — la combinación de instrucciones de ruta de menú exactas más la sección de errores comunes (modelado negativo) da al usuario un sentido claro y aplicado de "así se hace bien / así se hace mal", superando en concreción a la mayoría de las otras temáticas.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El "Ejercicio práctico interactivo" del Paso 2 (input de solo lectura con URL de ejemplo) + el checklist de 5 ítems con persistencia real + el botón "Descargar Plan" (genera un `.txt` combinando checklist y plantilla de denuncia — funcionalidad única en todo el sitio).

**Fortaleza real:** el botón de descarga es el ejemplo más concreto de "aplicación real" de todas las temáticas auditadas — el usuario se lleva un artefacto tangible y personalizado (a partir de su propio progreso de checklist), no solo información.

**Problema:** el "ejercicio práctico" del Paso 2 no es editable (el input de la URL es de solo lectura con valor de ejemplo fijo) — funciona más como ilustración visual que como campo de trabajo real donde la persona pegue su propio caso. Sería una mejora sencilla convertirlo en un campo editable que además alimente la plantilla de denuncia descargable.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Checklist de 5 ítems con persistencia real (a diferencia de `ia-etica-ciudadania` y `estafas-digitales`, que no tienen ninguno) — con mensaje de celebración al completar los 5.

Mismo problema estructural que en todas las demás temáticas: mide autorreporte de acción ("he activado la verificación en dos pasos"), no comprensión verificada. No hay ninguna pregunta que confirme, por ejemplo, si el usuario entiende por qué hay que documentar antes de bloquear (la lógica detrás del error #1 de "Errores Fatales").

**Qué falta:** un quiz breve que refuerce específicamente la lógica detrás del orden del protocolo (por qué documentar antes de reportar, por qué no avisar antes de denunciar) — dado que ya existe la sección de "Errores Fatales" como base de contenido, convertir alguno de esos errores en pregunta con feedback sería una extensión natural y de bajo esfuerzo.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** No existe una sección de síntesis dedicada tipo "Qué significa esto para el aula/casa" como en otras temáticas — lo más cercano es la FAQ 3 ("Soy docente y una alumna me contó que está pasando esto. ¿Qué hago?"), con una ampliación que sí varía por audiencia (`faq3Ampliacion`).

**Problema central de esta temática, y el más serio de todos los detectados:** la FAQ 3 completa —la única pieza de la página con lógica real de audiencia además de `notaMagnitud`— está formulada exclusivamente en clave de "tercero que acompaña" (un docente o familiar que recibe el relato de otra persona). No existe ninguna versión en primera persona para una mujer que está atravesando la violencia digital ella misma y busca ayuda para sí. Esto es particularmente notable porque el resto de la página (Hero, protocolo de 3 pasos, checklist) sí está redactado en segunda persona dirigida a la persona afectada ("protegerte", "tus cuentas", "documentá todo") — hay una desconexión entre el tono general de la página (que habla a la afectada) y la única sección con lógica de audiencia (que habla solo a quien la acompaña).

**Y el hallazgo más importante de toda la auditoría:** en `notaMagnitud` (la otra pieza con variante de audiencia), la audiencia "mujeres" recibe exactamente el mismo texto que "docentes" — documentado así explícitamente en un comentario del propio código. Una mujer que no es docente ni familiar de nadie, navegando una temática cuyo título la nombra directamente ("Violencia Digital hacia la Mujer"), ve un párrafo redactado en segunda persona hacia un/a docente ("la pregunta de 'qué hacer si una alumna te lo cuenta'"). Es el desalineamiento de audiencia más grave detectado en las 8 temáticas auditadas hasta ahora.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** 3 links de recursos oficiales (OEA, UNFPA Argentina, Ministerio Público Tutelar) + listado completo de 7 fuentes (`ALL_SOURCES`) + carrusel de 8 láminas + plantilla de denuncia copiable + botón de descarga del plan de acción.

El cierre más rico de las 8 temáticas auditadas en variedad de recursos accionables, junto con `estafas-digitales`. La combinación de plantilla copiable + descarga de plan personalizado es un estándar de "te llevás algo real" que otras temáticas todavía no alcanzan.

**Fortaleza estructural única:** el listado final de fuentes reutiliza directamente los mismos objetos citados inline (no hay un array paralelo de "labels" resumidos) — por diseño, no puede haber discrepancia entre lo citado en el cuerpo y lo listado al final. Es la única temática de las 8 auditadas donde este problema es estructuralmente imposible, no solo evitado por prolijidad.

**Problema menor:** el header del carrusel es fijo, sin variante de audiencia ("Material para el aula") — mismo patrón de inconsistencia ya señalado en `alfabetizacion-mediatica` y `estafas-digitales`.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ⚠️ No hay mapa de 3 líneas, pero la "Meta declarada" se acerca |
| 2. Objetivo medible | ✅ De los mejores — meta concreta que se cumple con un artefacto real |
| 3. Gancho | ⚠️ Intenta cubrir 3 audiencias en un texto universal, diluye precisión |
| 4. Contexto | ✅ Uno de los mejores — narrativa de Olimpia Coral Melo + rigor legal |
| 5. Contenido core progresivo | ✅ Bien organizado — 6 tipos, una sola lista clara |
| 6. Modelado | ✅ De los mejores — instrucciones de ruta UI + modelado por contraste (errores) |
| 7. Práctica con feedback | ✅ Fuerte — descarga de plan único en el sitio, con 1 campo no editable a mejorar |
| 8. Evaluación formativa | ⚠️ Hay checklist persistente real, pero sigue siendo autorreporte, no comprensión |
| 9. Aplicación/síntesis | ❌ El hueco más grave de las 8 temáticas — audiencia "mujeres" sin contenido propio |
| 10. Recursos y cierre | ✅ El más rico de las 8 — plantilla + descarga + fuentes sin discrepancia posible |

Esta es una de las temáticas mejor ejecutadas en términos de framework instruccional (gana claramente en Contexto, Modelado, Práctica y Recursos), pero tiene el problema de audiencia más grave de todo el sitio: la audiencia que da nombre a la página no tiene ninguna voz propia en el contenido.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias y bugs de audiencia
1. La audiencia "mujeres" no tiene ningún contenido propio — en las 2 únicas piezas de contenido que sí varían por audiencia (`notaMagnitud`, `faq3Ampliacion`), "mujeres" recibe literalmente el mismo texto que "docentes" (documentado así explícitamente en un comentario del propio código). En una temática cuyo título es "Violencia Digital hacia la Mujer" y que tiene a "mujeres" como una de sus 3 audiencias asignadas, esto significa que seleccionar esa audiencia no cambia nada en la página.
2. La FAQ 3 (la única con contenido de audiencia además de `notaMagnitud`) está formulada 100% en clave "tercero que acompaña" (docente o familiar), sin ninguna variante en primera persona para una mujer que busca ayuda para sí misma — aunque el resto de la página (Hero, protocolo de 3 pasos, checklist) sí habla en segunda persona a la persona afectada.
3. Solo 2 piezas de contenido en toda la página varían por audiencia — la proporción más baja detectada hasta ahora entre las 8 temáticas auditadas (comparable a `hiperconectividad-digital` e `ia-etica-ciudadania`, pero aún menor).
4. No usa `resolveTexto` ni `<NotaAudiencia>` pese a que los nombres de campo (`notaDocente`/`notaFamilias`) imitan la convención `AudienciaNotas`/Group B documentada en CLAUDE.md — el mecanismo real es un ternario manual binario sin el comportamiento de fallback/ocultamiento que sí tiene el componente compartido. Mismo patrón de "naming similar pero implementación distinta" ya detectado en `estafas-digitales` con `AULA_ROL`.
5. El párrafo del Hero intenta cubrir 3 audiencias distintas en un solo texto fijo — funciona como generalización universal en vez de usar el mecanismo de audiencia de la plataforma, a diferencia del patrón de variantes explícitas usado en la mayoría de las demás temáticas.
6. El header del carrusel es fijo, sin variante de audiencia ("Material para el aula") — mismo patrón de inconsistencia ya señalado en `alfabetizacion-mediatica` y `estafas-digitales`.

### Fortalezas de fuentes
1. Es la única temática auditada donde el listado final de fuentes reutiliza directamente los mismos objetos citados inline (no hay ningún array paralelo de "labels" resumidos) — por diseño, no puede haber discrepancia entre lo citado en el cuerpo y lo listado al final, a diferencia de la inconsistencia repetida en 4 de las 7 auditorías anteriores.
2. Ninguna fuente está marcada `unverified: true` — es una de las pocas temáticas del sitio sin ninguna cita "sin confirmar", lo cual habla bien del rigor de esta página en particular, aunque contrasta con el patrón de transparencia sobre fuentes dudosas visto en otras temáticas.

### Otros hallazgos de contenido
1. Tiene checklist interactivo persistente (5 ítems) — a diferencia de `ia-etica-ciudadania` y `estafas-digitales` — y además un botón único en el sitio auditado hasta ahora: "Descargar Plan", que genera un archivo `.txt` combinando checklist y plantilla de denuncia.
2. Ejercicio práctico con valor de ejemplo hardcodeado (`https://instagram.com/usuario_agresor123`) en el Paso 2 — input de solo lectura, no editable, funciona más como ilustración visual que como campo de trabajo real.
3. La Historia de Olimpia Coral Melo es la narrativa biográfica más extensa y elaborada de todo el sitio auditado — un tratamiento narrativo distinto al resto de las citas/datos del sitio, que suelen ser afirmaciones más breves y directas.

### Qué se podría agregar
1. Un mapa breve de los 3 pasos del protocolo, anticipado desde el Hero o justo después de la Meta declarada.
2. Versión en primera persona de la FAQ 3 (o una FAQ nueva) dirigida a una mujer que atraviesa la situación ella misma, no solo a quien la acompaña.
3. Contenido real y propio para la audiencia "mujeres" en `notaMagnitud` — hoy es indistinguible de la variante docentes.
4. Verbos de Bloom explícitos complementando la ya sólida "Meta declarada".
5. Un quiz breve que refuerce la lógica del protocolo (por qué documentar antes de reportar, por qué no avisar antes de denunciar), aprovechando el contenido ya existente de "Errores Fatales".
6. Campo editable para el ejercicio práctico del Paso 2, que idealmente alimente también la plantilla de denuncia descargable.
7. Variante de audiencia para el header del carrusel de recursos.

### Qué se podría simplificar, quitar o reordenar
1. Migrar `notaMagnitud`/`faq3Ampliacion` a `resolveTexto`/`<NotaAudiencia>` para consistencia estructural con el resto del sitio, si el rediseño busca unificar patrones de audiencia entre temáticas (mismo tipo de recomendación que para `AULA_ROL` en `estafas-digitales`).
2. Evaluar si el párrafo del Hero, en vez de intentar cubrir 3 audiencias en un solo texto universal, se beneficiaría de 3 variantes explícitas cortas (mujeres/docentes/familias), dado que la plataforma ya tiene el mecanismo para eso.

---

## Fortalezas a preservar en el rediseño
1. El botón "Descargar Plan" (checklist + plantilla de denuncia combinados en un `.txt`) — funcionalidad única en el sitio y el mejor ejemplo de "aplicación real" tangible de las 8 temáticas auditadas, candidato claro a replicarse en otras temáticas con protocolos de acción (ej. `estafas-digitales`).
2. El Protocolo de 3 Pasos con instrucciones de ruta de menú exactas ("Configuración → Cuenta → Verificación en dos pasos") — el modelado más concreto y aplicado del sitio.
3. La sección "Errores Fatales que Debés Evitar" como modelado por contraste — patrón replicable en cualquier temática con un protocolo de acción, para reforzar qué NO hacer y por qué.
4. La narrativa de Olimpia Coral Melo como contexto — el mejor ejemplo de storytelling con arco narrativo completo del sitio, útil como referencia de tono para otras temáticas que quieran anclar un concepto en una historia real.
5. El diseño estructural del listado de fuentes (reutilizar los mismos objetos citados inline en vez de un array paralelo) — solución técnica que elimina de raíz el problema de discrepancia entre citas y listado final, detectado repetidamente en otras temáticas. Vale la pena adoptarlo como patrón estándar en el resto del sitio.
