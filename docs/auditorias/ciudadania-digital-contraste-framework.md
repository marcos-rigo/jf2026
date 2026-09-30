# Ciudadanía Digital — Contraste contra el framework profesional de 10 pasos

Base: `ciudadania-digital-audit.md` (auditoría de contenido de `lib/ciudadania-digital-content.ts` y los 13 componentes que lo consumen).

---

## El framework de referencia

Orden que usan las academias serias para un módulo (Harvard/MIT/Coursera + Gagné + Bloom):

1. **Resumen ejecutivo** (3 líneas: "en este módulo vas a...")
2. **Objetivo de aprendizaje explícito y medible** (verbos: identificar, aplicar, diseñar)
3. **Gancho / por qué importa ahora** (conexión emocional o urgencia)
4. **Contexto / marco conceptual** (lo mínimo necesario, no una digresión)
5. **Contenido core progresivo** (de lo simple a lo complejo, Bloom: recordar → comprender → aplicar)
6. **Modelado** (mostrar el "cómo" antes de pedir que lo hagan)
7. **Práctica guiada con feedback** (no solo "hacé esto en tu casa", sino algo que confirme si lo hiciste bien)
8. **Evaluación formativa de comprensión** (quiz corto, con explicación de por qué está bien/mal — distinto de un checklist de "hice la tarea")
9. **Aplicación real / síntesis** (conectar todo con el contexto del usuario)
10. **Recursos y cierre**

---

## Paso 1 — Resumen ejecutivo (3 líneas)

**Qué hay hoy:** No existe. El Hero (sección 00) tiene título + definición larga + intro emocional + botón CTA + 2 tarjetas ("Síntesis breve" / "Por qué importa"). La tarjeta "Síntesis breve" es lo más parecido, pero define **qué es** la ciudadanía digital, no **qué vas a hacer** en este Kit.

**Qué falta:** Un bloque tipo "En este Kit vas a trabajar: 1) blindar tu seguridad digital, 2) aplicar netiqueta en tus interacciones, 3) frenar la desinformación con el framework VERIFICA" — 3 líneas, antes de la definición larga, no después.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe a nivel de módulo completo. Lo más cercano son los campos "Objetivo" de cada Fase (01 Seguridad, 02 Netiqueta, 03 IA-Bulos) — pero están redactados en tono motivacional/narrativo ("Ayudar a tus estudiantes a blindar la identidad digital..."), no como objetivos medibles con verbo de Bloom ("identificar", "aplicar", "diseñar").

**Qué falta:**
- Un objetivo general del módulo, arriba de todo (ej: "Al completar este Kit vas a poder: identificar las 12 dimensiones de la ciudadanía digital, aplicar contraseñas y 2FA para blindar tus cuentas, y aplicar el framework VERIFICA para evaluar una noticia").
- Reescribir los 3 "Objetivo" de cada Fase con verbo medible en vez de tono narrativo — hoy dicen "ayudar a", deberían decir "vas a poder identificar/activar/aplicar X".

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** Este es el paso mejor resuelto de toda la temática. El Hero tiene texto emocional bien diferenciado por audiencia ("¿Sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo?" para docentes vs. "¿Sientes que la tecnología a veces te controla más a ti que tú a ella?" para familias), más la tarjeta explícita "Por qué importa". Buen trabajo, no tocar la esencia.

**Detalle a ajustar:** el CTA final de esta sección ("Iniciar el Kit Docente" / "Iniciar Protocolo") salta directo a scrollear la página — no hay puente hacia el resumen ejecutivo/objetivo que van a faltar arriba (Pasos 1-2), porque hoy no existen.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 01 (Historia/Origen): "nativos digitales" (Prensky, bien citado) + "Barco de Teseo" (Plutarco, marcado `unverified`, usado como disparador de debate filosófico).

**Problema:** la mitad de esta sección (Barco de Teseo) es una fuente sin verificar, explícitamente etiquetada en el propio código como "no tiene una fuente moderna citable" — ocupa el mismo peso visual que Prensky (que sí es una cita académica sólida y verificable) pero es mucho más débil como contexto. Para un curso de alta academia, el contexto debería anclarse en algo verificable, no en una metáfora filosófica sin fuente moderna.

**Qué falta:** el "por qué esto importa hoy en cifras" (el dato de INDEC de 93,4% de acceso a internet) está enterrado en la sección 06 (Riesgos), muy lejos de donde debería estar — ese dato es contexto argentino real y encajaría mucho mejor acá, en el Paso 4, que al final junto a los riesgos.

---

## Paso 5 — Contenido core progresivo (recordar → comprender → aplicar)

**Qué hay hoy:** Sección 02 (8 Actitudes, lista simple) + Sección 03 (12 Dimensiones + Perfil de Competencias del s. XXI, dos taxonomías completas).

**Problema principal:** esto no es progresivo, es **paralelo**. Las 8 actitudes, las 12 dimensiones y las 4 categorías de competencias del siglo XXI se presentan como tres listas independientes, sin jerarquía ni conexión explícita entre ellas (¿las 8 actitudes son una simplificación de las 12 dimensiones? ¿las competencias del s. XXI son el "para qué" de las 12 dimensiones? Nunca se dice). Un usuario que lee las tres seguidas recibe 24 ítems sueltos sin mapa que los organice — puro nivel "recordar" de Bloom, cero "comprender" o "aplicar" todavía.

**Qué falta:** un puente narrativo explícito entre las tres taxonomías, y una señal clara de que después de esto (Paso 6-7) van a **aplicar** lo que acaban de memorizar.

**Fuentes de este paso:** 9 de las 12 dimensiones son de Ribble/ISTE sin atribución original de José Farhat (ya corregido con nota visible, mantener), y las 4 categorías de competencias son de ATC21S (mismo caso, ya corregido).

---

## Paso 6 — Modelado (mostrar el "cómo" antes de pedir que lo hagan)

**Qué hay hoy:** Muy disparejo entre las 3 Fases:
- **Fase 01 (Seguridad):** NO hay modelado. Va directo a la instrucción ("Creá una contraseña fuerte de 12 caracteres") sin mostrar un ejemplo de cómo se ve una contraseña fuerte real ni un ejemplo de mensaje de 2FA.
- **Fase 02 (Netiqueta):** SÍ hay modelado, y está bien hecho — el "Ejemplo visual" con el comentario modelo ("Excelente punto. No había considerado esa perspectiva...") es exactamente lo que pide este paso.
- **Fase 03 (IA-Bulos):** NO hay modelado real. El framework VERIFICA se explica letra por letra (8 conceptos) pero nunca se aplica de punta a punta a un ejemplo concreto de noticia falsa — se explica la teoría del framework, pero no se demuestra en acción.

**Qué falta:** modelado consistente en las 3 fases, no solo en una. Fase 01 necesita un ejemplo de contraseña fuerte real (aunque sea genérica tipo "Tr0pic0!Luna25"); Fase 03 necesita un caso aplicado completo (una noticia falsa real o ficticia, pasada por las 8 letras de VERIFICA paso a paso).

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Cada Fase tiene "Instrucción"/"Aplicación práctica"/"Texto del ejercicio final" — son instrucciones de acción en la vida real ("revisá los permisos de tus apps", "buscá tu nombre en Google incógnito"). La Fase 03 además tiene un checklist de 5 ítems.

**Este es el paso peor resuelto de toda la temática, junto con el 8.** Ninguna de las actividades da feedback. El usuario hace la tarea (o no) y nadie —ni el sistema— le confirma si lo hizo bien. El checklist de la Fase 03 ni siquiera guarda estado (no tiene `checked`/`onChange`), así que ni siquiera funciona como registro, es un elemento puramente decorativo.

**Qué falta:** algún mecanismo real de práctica con feedback — por ejemplo, un validador de fortaleza de contraseña que le diga al usuario si la suya es débil/fuerte, o un ejercicio de "aplicá VERIFICA a esta noticia" con opciones y feedback tipo "correcto, esto es evidencia múltiple porque..." (esto se puede resolver con el mismo componente de quiz que falta en el Paso 8, diseñado para que cumpla ambas funciones).

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada que cumpla esta función. Existen 3 mecanismos que **parecen** evaluación pero no lo son:
1. Checklist Fase 03 (5 ítems, sin persistencia, sin feedback) — mide si el usuario "haría" cada verificación, no si entendió el concepto.
2. Checklist sección 08 "Mi Progreso" (8 ítems, con persistencia real) — mide **acciones tomadas en la vida real** ("cambié mis contraseñas", "activé 2FA"), no comprensión de contenido.
3. `SecurityChart` y `ErrorsChart` — son gráficos decorativos con datos inventados, no evaluación de nada.

**Ninguno de los tres es un quiz de comprensión.** No hay una sola pregunta tipo "¿cuál de estas opciones es un ejemplo de sesgo de confirmación según el paso R de VERIFICA?" con feedback explicando la respuesta correcta.

**Este es el hueco más grande de toda la temática**, porque además genera una falsa sensación de evaluación: alguien que llega al 100% del checklist de la sección 08 puede pensar que "completó" el Kit sin haber demostrado que entendió ningún concepto — solo demostró que tomó ciertas acciones.

**Qué falta:** un quiz real (5-8 preguntas de opción múltiple) al cierre del módulo o distribuido al final de cada Fase, con feedback explicativo por respuesta — esto es lo único que le da al Kit el carácter de "evaluado" que tiene un curso de academia real, en vez de "checklist de tareas domésticas".

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 07 ("Qué significa esto para el aula"/"Para tu Casa") — recapitula las 12 dimensiones (03), las 8 actitudes (02) y el dato de ICDL (06), conectándolo con el contexto real del usuario (aula para docentes, casa para familias). Está razonablemente bien resuelto como síntesis.

**Problema de inconsistencia:** el `<h2>` de esta sección dice literalmente "Qué Significa Esto para el Aula" en **ambas** audiencias, aunque el badge de arriba sí dice "Para tu Casa" en la variante familias — el título principal no se tradujo.

**Problema de ubicación:** la "aplicación práctica" en sentido estricto (las 3 Fases, con sus "instrucciones") ya pasó en el Paso 7 (sección 04), mucho antes. Entonces cuando llegamos acá, "aplicación real" ya se usó para otra cosa — esta sección 07 es más "síntesis reflexiva" que "aplicación", el nombre del paso no coincide 100% con lo que hace.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 08, la más densa de toda la página — carrusel de 5 láminas, checklist "Mi Progreso" (8 ítems, persistente), `ErrorsChart` (datos sin fuente), FAQ de 3 preguntas, footer con 3 links externos, listado formal de 12 fuentes.

**Problema:** este paso está haciendo el trabajo de 3 pasos distintos del framework a la vez — parte de evaluación (el checklist, mal habilitado, ver Paso 8), parte de contenido nuevo (el `ErrorsChart` con datos no vistos antes, el FAQ con info nueva como fingerprinting), y recién al final, recursos reales (links + fuentes). Un cierre de curso profesional separaría con claridad: (a) recapitulación de puntos clave, (b) evaluación/certificación, (c) recursos para seguir profundizando — hoy los tres están mezclados en una sola sección larga sin esa jerarquía visual.

**Inconsistencia de fuentes:** el listado formal de 12 fuentes no incluye Plutarco (Paso 4) pese a citarse ahí con su propio badge "sin verificar" — el índice de cierre no refleja todas las citas reales de la página.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe (hay "objetivos" narrativos por fase, no medibles) |
| 3. Gancho | ✅ Bien resuelto |
| 4. Contexto | ⚠️ Existe pero mitad con fuente no verificada |
| 5. Contenido core progresivo | ⚠️ Existe pero es paralelo, no progresivo |
| 6. Modelado | ⚠️ Solo 1 de 3 fases lo tiene |
| 7. Práctica con feedback | ❌ Hay práctica, cero feedback |
| 8. Evaluación formativa | ❌ No existe (checklists miden acción, no comprensión) |
| 9. Aplicación/síntesis | ✅ Existe, con 1 inconsistencia de heading |
| 10. Recursos y cierre | ⚠️ Existe pero sobrecargado, mezcla 3 funciones distintas |

Los pasos 1, 2 y 8 son ausencias totales. Los pasos 6 y 7 son los más débiles en ejecución (están pero no cumplen su función). El resto existe con problemas puntuales detallados arriba.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. Fallback binario real pese a 5 audiencias declaradas: `Audiencia` admite 5 valores pero solo hay 2 variantes reales (docentes/familias); `mujeres`, `adultos-mayores` y `ninas-ninos-adolescentes` caen silenciosamente a la variante docentes sin avisar.
2. Heading "Qué Significa Esto para el Aula" no traducido en variante familias, aunque el badge de arriba sí dice "Para tu Casa".
3. `ErrorsChart`: el texto de acompañamiento menciona "un aula"/"tu curso" incluso en variante familias — no pasa por `resolveTexto`.
4. Typo: "Rechazé" (con Z) en variante familias del ítem `cookies`, debería ser "Rechacé" (con C) como en la variante docentes.
5. Dos checklists con comportamiento distinto en la misma página, sin explicarlo al usuario: Fase 03 (5 ítems, sin persistencia, no guarda nada) vs. sección 08 "Mi Progreso" (8 ítems, con persistencia real).
6. TOC vs. anclas reales: el índice agrupa las 3 fases prácticas bajo un único ítem "04 — Ejemplos Concretos", pero cada fase tiene su propio badge, ancla y botón de navegación interna.
7. Listado de fuentes "oficial" (12 entradas) no incluye Plutarco/Barco de Teseo pese a citarse inline en la sección 01.

### Redundancias
1. "Grooming" aparece en "Riesgos directos" y en "Riesgos ampliados", con nombres parcialmente solapados ("Sextorsión" en una lista, "Sexting" en la otra).
2. Sección 07 (Aula) no aporta dato nuevo, es puramente síntesis de las secciones 02, 03 y 06 — no es un problema en sí, pero mezcla "síntesis" con "reflexión" sin marcar la diferencia.
3. El bloque de estafas digitales dentro de esta temática se solapa parcialmente con la temática dedicada `estafas-digitales` — resuelto con link cruzado, pero podría acortarse más.

### Fuentes sin verificar (ya marcadas, pendientes de resolver)
1. Plutarco / Barco de Teseo (sección 01) — `unverified`, y además ausente del listado formal de 12 fuentes.
2. ISO/IEC TS 27100:2020, frase "centrada en las personas" (sección 06) — `unverified`, frase exacta no confirmada en la versión pública del estándar.

### Fuentes sin marcar y sin fuente (más grave, porque ni siquiera está señalado)
1. `SecurityChart` (Fase 01): 65% vulnerables / 35% asegurados — número inventado para la demo, sin fuente ni disclaimer.
2. `ErrorsChart` (sección 08): 30%/45%/25% — mismo problema.

### Fuentes bien atribuidas, con oportunidad de mejora
1. Las 12 "Dimensiones" (9 de Ribble/ISTE) y las "Competencias del s. XXI" (ATC21S) ya tienen nota de atribución visible explicando que José Farhat no las citó como tales originalmente — mantener en el rediseño. Sugerencia: agregar link directo a la fuente primaria en el momento en que se menciona, no solo en el listado final.
2. Material propio de Dr. José Farhat (Primer Conversatorio Provincial, "Un cambio de chip necesario", "Oportunidades") funciona como fuente de autoridad, pero no tiene fecha ni forma de acceder al material original — para un curso profesional, la fuente primaria debería ser rastreable.

### Qué se podría agregar
1. Objetivo de aprendizaje explícito al inicio (verbos medibles).
2. Resumen ejecutivo de 3 líneas antes o integrado en el Hero.
3. Quiz de comprensión real (distinto del checklist de acciones), con feedback explicativo.
4. Indicador de tiempo estimado y nivel.
5. Glosario centralizado de términos técnicos (2FA, Zero Trust, fingerprinting, prosumidor, gate-keeper).
6. Al menos un caso real narrado, no solo instrucciones genéricas.
7. Bibliografía en formato más formal (autor, año, institución).
8. Decisión explícita sobre las 3 audiencias que hoy caen a fallback: escribir contenido real o ajustar el campo `audiencias?` para no prometer personalización inexistente.

### Qué se podría simplificar o quitar
1. Unificar los dos checklists (Fase 03 sin persistencia vs. sección 08 con persistencia), o diferenciarlos explícitamente por nombre y función.
2. Revisar el peso de la sección Historia/Barco de Teseo — bajarlo a un recuadro "para profundizar" y liberar la sección 01 para contexto histórico más sólido (Prensky).
3. Reconsiderar el orden Riesgos/Ventajas (05-06) después de las Fases prácticas (04) — en diseño instruccional estándar, el "por qué importa" (riesgos/ventajas) suele ir antes de pedir acción, no después.
