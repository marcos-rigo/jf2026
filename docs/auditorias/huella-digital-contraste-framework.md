# Huella Digital — Contraste contra el framework profesional de 10 pasos

Base: `huella-digital-audit.md` (auditoría de contenido de `lib/huella-digital-content.ts` y los 11 componentes que lo consumen — con la particularidad de que la mayoría del contenido real, `STEPS`/`ERRORS`/`NEXT_STEPS`/`RESOURCES`/`TEMPLATE`/`FAQS`, vive hardcodeado en los propios componentes, no en el archivo `lib/*.ts` central).

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

**Qué hay hoy:** No existe. El Hero tiene badge + título + "Concepto" (cita de Brave) + intro por audiencia + caja "Meta del día". La "Meta del día" ("sabrás que lo lograste cuando busques tu nombre y solo aparezca lo que vos decidís mostrar") es lo más cercano a un resumen ejecutivo, pero es una meta final, no un mapa de "qué vas a hacer en el camino".

**Qué falta:** un bloque de 3 líneas tipo "En esta guía vas a: 1) auditar tu exposición actual, 2) limpiar cuentas y rastros viejos, 3) blindar tu privacidad a futuro" — mapea directo con los 3 Pasos de la sección 04, pero hoy esa estructura de 3 pasos no se anticipa en ningún lado antes de llegar a esa sección.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe a nivel de módulo. Cada uno de los 3 Pasos de la Fase 04 tiene su propio "Objetivo" (ej: "Identificar exactamente qué información tuya es pública..."), y estos ya usan verbos razonablemente medibles ("identificar", "reducir", "configurar") — mejor punto de partida que los objetivos narrativos de `ciudadania-digital`.

**Qué falta:** un objetivo general de módulo arriba de todo, que agrupe los 3 objetivos de paso en uno solo de entrada (ej: "Al completar esta guía vas a poder: identificar tu huella activa y pasiva, eliminar cuentas y datos expuestos, y configurar tu privacidad para prevenir futuras exposiciones").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** Bien resuelto. El Hero tiene intro diferenciada por audiencia con urgencia concreta ("tu huella digital habla por vos antes de que lo hagas vos") + el lightbox interactivo de la infografía (zoom/pan/pinch) le da un plus de enganche que no tiene `ciudadania-digital`.

**Detalle a ajustar:** no hay puente hacia el resumen ejecutivo/objetivo (Pasos 1-2) porque hoy no existen.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 01 — Caso Costeja (2014, Tribunal de Justicia de la UE), muy bien fundamentado: sentencia real, fecha exacta, número de asunto (C-131/12), link al PDF de la sentencia. Sensiblemente mejor que el contexto de `ciudadania-digital`.

**Problema:** el bloque secundario sobre GDPR que cierra la sección está marcado `unverified: true` porque no se confirmó el link oficial exacto del Artículo 17.

**Qué falta:** nada estructural grave — es el paso mejor resuelto de contexto entre las dos temáticas auditadas hasta ahora. Solo resolver el `unverified` del GDPR.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección 02 (Huella activa/pasiva, una sola cita de Avast) + Sección 03 (mismos 2 tipos reformulados + concepto relacionado de "device fingerprint").

**Problema:** la sección 03 es casi enteramente redundante con la 02 — ambas presentan "huella activa" y "huella pasiva" con definiciones casi idénticas (la 03 es una reformulación breve de la 02, compartiendo incluso la misma fuente de Avast sin cita propia). No es progresión de lo simple a lo complejo, es la misma idea repetida con otras palabras. Lo único nuevo de la 03 es "device fingerprint", que queda como nota al pie de una sección que en el fondo repite la anterior.

**Qué falta:** fusionar 02 y 03 en una sola sección progresiva (huella activa → huella pasiva → device fingerprint como concepto relacionado pero distinto), liberando una sección completa del scroll que hoy no aporta nada nuevo.

---

## Paso 6 — Modelado

**Qué hay hoy:** Cada uno de los 3 Pasos de la Fase 04 tiene un campo "Tip" que funciona como modelado concreto: Paso 1 da el ejemplo de buscar palabras como "Bienvenido"/"Confirma tu cuenta" en el correo; Paso 2 da el tip de usar datos falsos si un sitio no permite eliminar la cuenta; Paso 3 da el tip de configuración específica de Instagram/Facebook a "Solo Amigos". Los 3 son modelado real, aplicado — sensiblemente mejor que `ciudadania-digital`, donde el modelado era inconsistente entre fases.

**Detalle a ajustar:** el modelado está mezclado dentro del mismo bloque que la instrucción y el "lab" — no hay separación visual clara entre "así se hace" (modelado) y "ahora hacelo vos" (práctica).

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Cada Paso tiene un "Lab/consigna" + un checkbox que persiste estado real vía `useTematicaProgress` — a diferencia de `ciudadania-digital`, acá los 3 checkboxes de la Fase 04 SÍ guardan progreso real, y alimentan directamente el tracker de la sección 08.

**Problema:** sigue sin feedback de calidad. El checkbox confirma que el usuario **dice** haber hecho la tarea, pero no valida si la hizo bien — no hay forma de confirmar si realmente configuró bien la privacidad de Instagram, o si de verdad eliminó 3 cuentas y no solo tildó la casilla. Es seguimiento de autorreporte, no feedback real.

**Qué falta:** algún mecanismo que dé feedback de calidad sobre la acción, no solo su registro — por ejemplo, tras marcar "hice egosurfing", pedirle al usuario que anote cuántos resultados no le gustaron (ya lo pide el "lab" como consigna en libreta, pero se pierde, no vuelve al sistema) y usar eso para personalizar el siguiente paso.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada. Igual que en `ciudadania-digital`, el único mecanismo de "evaluación" es el tracker de progreso (3 checkboxes), que mide acción autorreportada, no comprensión de conceptos.

**Hueco crítico, con agravante propio de esta temática:** hay contenido legal específico (Costeja, GDPR, derecho al olvido) que se presta perfectamente a preguntas de comprensión verificables. Por ejemplo, nunca se refuerza con una pregunta la distinción de que el derecho al olvido aplica a información *verídica pero irrelevante*, no a información falsa — una confusión común que el contenido actual no previene activamente porque no hay ningún punto de verificación de comprensión.

**Qué falta:** un quiz de 5-8 preguntas, con foco especial en los conceptos legales (Costeja, derecho al olvido, data brokers).

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 07 — síntesis breve que conecta el Caso Costeja (01) con el rol de docente/familia como modelo a seguir. A diferencia de `ciudadania-digital`, el `<h2>` **sí** traduce correctamente ("Qué Significa Esto para el Aula" / "Qué Significa Esto en Casa").

**Problema menor:** el badge de arriba de esta sección queda fijo como "07 — Para el Aula" en ambas audiencias, aunque el `<h2>` de abajo sí varía — inconsistencia parcial, patrón inverso al de `ciudadania-digital` (ahí el badge variaba y el heading no).

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 08: tracker de progreso (real, alimentado por Fase 04) + plantilla de acción copiable (elemento único, no existe en `ciudadania-digital`) + "Próximos Pasos" + carrusel de 8 láminas + FAQ de 3 preguntas + listado de 6 fuentes.

**Fortaleza a destacar:** la plantilla de solicitud de eliminación de datos (con botón "Copiar") es el mejor ejemplo de "aplicación real inmediata" de toda la temática — el usuario se lleva algo tangible y usable. Vale la pena replicar este patrón en otras temáticas al rediseñar.

**Problema:** "Recursos Recomendados" (Have I Been Pwned, Google Takeout, DeleteMe) son solo texto plano sin links — inconsistencia frente a los "Directorios Oficiales" de `ciudadania-digital`, que sí son clicables.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ⚠️ Existe por paso, falta a nivel módulo |
| 3. Gancho | ✅ Bien resuelto (mejor que ciudadania-digital, tiene lightbox) |
| 4. Contexto | ✅ Muy bien resuelto (Costeja es fuente sólida), 1 dato unverified |
| 5. Contenido core progresivo | ⚠️ Secciones 02-03 redundantes entre sí |
| 6. Modelado | ✅ Bien resuelto en las 3 fases (mejor que ciudadania-digital) |
| 7. Práctica con feedback | ⚠️ Hay persistencia real, pero feedback sigue ausente |
| 8. Evaluación formativa | ❌ No existe |
| 9. Aplicación/síntesis | ✅ Bien resuelto, 1 inconsistencia menor (badge) |
| 10. Recursos y cierre | ✅ Fuerte (plantilla copiable), detalles menores a pulir |

Comparado con `ciudadania-digital`, esta temática está mejor resuelta en Modelado (6), Práctica (7 parcial) y Aplicación (9), pero comparte el mismo hueco crítico en Evaluación formativa (8) y Resumen ejecutivo (1).

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. Fallback binario real pese a 5 audiencias declaradas: mismo patrón que `ciudadania-digital` — solo hay contenido para docentes/familias, el resto cae a docentes sin avisar.
2. Badge fijo "07 — Para el Aula" no traducido para familias, aunque el `<h2>` de esa misma sección sí dice "Qué Significa Esto en Casa" — inconsistencia parcial (patrón inverso al de `ciudadania-digital`).
3. TOC con soporte de audiencia ya construido (`labelAudiencia`/`shortLabelAudiencia`) pero solo usado en la entrada "aula" — las otras 8 entradas podrían tener labels de audiencia y no los tienen, funcionalidad lista pero subutilizada.
4. Instrucción fija que no se adapta a audiencia pese al contexto: en el Paso 3 de la Fase 04, la instrucción sobre Wi-Fi menciona "el Wi-Fi de la escuela" como ejemplo fijo, término que no aplica igual de bien a la variante familias.
5. Mayoría del contenido vive fuera de `lib/huella-digital-content.ts` (hardcodeado en cada componente) — decisión documentada en el propio código, pero dificulta tener una vista única de "todo el contenido" sin recorrer cada componente por separado.

### Redundancias
1. Secciones 02 y 03 presentan prácticamente la misma información (huella activa/pasiva) con distinta redacción — ver detalle en Paso 5.
2. Sección 07 (Aula/Casa) no introduce datos nuevos, es referencia directa al Caso Costeja de la sección 01 — esperado en una síntesis, pero vale marcarlo.

### Fuentes sin verificar (ya marcadas, pendientes de resolver)
1. GDPR/RGPD, Artículo 17 (sección 01) — `unverified`, no se confirmó el link oficial exacto.
2. CareerBuilder, estadística del 57% de reclutadores (sección 05) — `unverified`, cita de segunda mano vía MSMK University, no se encontró el informe original.
3. FTC, definición de Data Brokers (sección 06) — `unverified`, cita de segunda mano vía Lawfare, no se encontró el PDF oficial.

**Nota: 3 de las 6 fuentes totales del listado están marcadas `unverified`** — proporción alta (50%) que vale la pena revisar en el rediseño, buscando fuentes primarias directas para reemplazar las citas de segunda mano.

### Afirmaciones sin fuente citada (más grave que "unverified", porque ni siquiera está marcado)
1. Los 3 "Errores a evitar" de la sección 06 no tienen `SourceCite` ni cita propia.
2. FAQ2 de la sección 08 ("¿Es seguro usar mi huella dactilar para la app del banco?"): la respuesta arranca con "Expertos en ciberseguridad sugieren..." sin atribución a ningún experto o fuente concreta — afirmación flotante en una página que cita todo lo demás explícitamente.

### Fuentes bien atribuidas, con oportunidad de mejora
1. Caso Costeja (Tribunal de Justicia de la UE, sentencia C-131/12) — la mejor fuente de toda la temática: primaria, verificable, con link al documento oficial. Modelo a seguir para otras temáticas.
2. Brave (Glosario de privacidad) y Avast (huella activa/pasiva) — fuentes de vendors de seguridad, legítimas pero secundarias; sería un plus complementar con una fuente académica o regulatoria.

### Inconsistencia de listado de fuentes
El listado formal de 6 fuentes no incluye la mención del GDPR (sección 01) como entrada propia, pese a citarse inline en la página — mismo patrón de inconsistencia observado en `ciudadania-digital` (ahí faltaba el Barco de Teseo).

### Qué se podría agregar
1. Objetivo de aprendizaje explícito a nivel de módulo completo (hoy solo existe por paso).
2. Resumen ejecutivo de 3 líneas antes o integrado en el Hero, anticipando la estructura de 3 Pasos.
3. Quiz de comprensión real, con foco en los conceptos legales (Costeja, derecho al olvido, data brokers) que son los más propensos a malinterpretación.
4. Links reales para "Recursos Recomendados" (Have I Been Pwned, Google Takeout, DeleteMe), hoy solo texto plano.
5. Labels de audiencia en las 8 entradas del TOC que hoy no los usan, aprovechando el campo que ya existe en el tipo `TocSection`.
6. Reemplazar o complementar las 3 fuentes `unverified` con fuentes primarias directas.
7. Atribuir fuente a los 3 "Errores a evitar" y a la afirmación de "Expertos en ciberseguridad" de la FAQ2.

### Qué se podría simplificar o quitar
1. Fusionar las secciones 02 y 03 en una sola, progresiva, que además le dé más protagonismo al concepto de "device fingerprint".
2. Separar visualmente, dentro de cada Paso de la Fase 04, el bloque de modelado ("Tip") del bloque de práctica ("Lab/consigna") — hoy están mezclados en el mismo contenedor.
3. Adaptar la instrucción de Wi-Fi del Paso 3 (Fase 04) para que no mencione "el Wi-Fi de la escuela" como ejemplo fijo cuando la audiencia es familias.

---

## Fortalezas a preservar en el rediseño (útil tenerlas presentes, no solo lo que falta)
1. El Caso Costeja como contexto legal real y bien fundamentado — el mejor ejemplo de fuente primaria verificable de las dos temáticas auditadas.
2. La plantilla de acción copiable (sección 08) — mejor mecanismo de aplicación inmediata visto hasta ahora, replicable en otras temáticas.
3. Los 3 checkboxes de la Fase 04 con persistencia real, alimentando un tracker de progreso coherente (a diferencia del checklist decorativo de `ciudadania-digital`).
4. El lightbox interactivo de la infografía del Hero — plus de interacción que ninguna otra temática auditada tiene todavía.
