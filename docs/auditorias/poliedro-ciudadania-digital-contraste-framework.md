# Ciudadanía Digital: el Poliedro — Contraste contra el framework profesional de 10 pasos

Base: `poliedro-ciudadania-digital-audit.md` (auditoría de la entrada `poliedro-ciudadania-digital` en `lib/libres-bajo-influencia-data.ts` y `components/tematicas/PoliedroCiudadaniaDigitalPage.tsx`, 1743 líneas — el componente más largo de las 6 temáticas del grupo).

## Correcciones al contexto recibido antes del análisis

1. Esta temática **sí tiene audiencia "familias"** (`audiencias: ['docentes', 'familias']` en el código, usada activamente en la Sección 04). No es la única sin familias asignada — esa distinción corresponde a `recuperar-la-agencia`, que tiene 3 audiencias (`docentes`, `familias`, `ninas-ninos-adolescentes`).
2. Es la 6ª y última temática del grupo "Libres bajo influencia", autodefinida explícitamente como su cierre — y es, por lejos, la más extensa y densa del grupo (1743 líneas, 9 bloques adicionales fuera de la estructura de datos compartida), con un registro que se aleja notablemente del tono pedagógico del resto hacia algo más cercano a un policy paper de gobernanza de IA.

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

**Qué hay hoy:** No existe como bloque de 3 líneas explícito, pero la Introducción cumple parcialmente esta función de un modo único en el grupo: menciona por nombre las 4 temáticas anteriores (subculturas, algoritmos, diseño persuasivo, caldos de cultivo) y se presenta como su síntesis. Es la única temática del grupo que hace explícito su rol de cierre narrativo.

**Qué falta:** dado que es la temática más extensa de todas (15 bloques, 9 de ellos fuera de la estructura de datos compartida), sería la que más se beneficiaría de un mapa real de contenidos — la mención a las 4 temáticas anteriores da contexto narrativo, pero no anticipa la cantidad de terminología nueva y densa que va a aparecer (Atlas de IA, Gobernanza Glocal, Constitucionalismo Digital, etc.).

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página.

**Qué falta:** objetivo general (ej: "vas a poder reconocer las 8 caras del poliedro de ciudadanía digital, aplicar el marco de Lessig/Thaler & Sunstein/Kahneman frente a un caso concreto, y explicar por qué formar es distinto de prohibir").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** La franja de datos duros del Hero (4 tarjetas: vida media de habilidades <5 años, 4 ejes del Marco Mineduc, 9 dominios de Ribble & Bailey, 5 continentes del Atlas IA-PNUD).

**Problema de coherencia interna, ya en el elemento más visible de la página:** el dato "9 dominios" (Ribble & Bailey) convive con la propia descripción de la temática ("un poliedro de ocho caras") sin conciliar cuál es el marco propio de la charla (8) y cuál es una referencia externa comparativa (9) — la misma discrepancia numérica que reaparece más adelante en la Sección 02 y en la imagen que la acompaña.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Introducción "Formar, no prohibir" — recapitula el arco del grupo completo y presenta el marco de Dewey (la educación como experiencia presente) para justificar por qué "formar" es la respuesta, no "prohibir".

Muy bien resuelto, funcionando casi como resumen ejecutivo de toda la serie — es de los mejores contextos del grupo precisamente porque cumple doble función: ancla el concepto central de esta temática Y cierra narrativamente el arco de las 4 anteriores. Buen ejemplo de cómo un contexto puede ser a la vez liviano y funcional para una temática de cierre.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** El Explorador de 6 caras + las 4 secciones base (`data.sections`) + 9 bloques adicionales completos: Atlas de IA para el Desarrollo Humano (con tabs de "5 continentes"), Gobernanza Glocal (comparación de 3 modelos regulatorios + "modelo FDA para algoritmos" de 16 puntos), IA Productiva (3 tarjetas), IA para el Bien y la Vida (3 tarjetas), Ética y Nuevo Constitucionalismo Digital ("4 laberintos del riesgo"), Hoja de Ruta (10 propuestas), Dashboard estadístico.

Este es, sin ninguna duda, el contenido core más sobrecargado de todo el sitio auditado, superando incluso a `caldos-de-cultivo` y `diseno-persuasivo-patrones-oscuros`. No es solo volumen: es también un cambio de registro. Gran parte de este contenido adicional introduce terminología propia y densa que no se usa en ninguna otra temática del grupo — "IA-Ceno", "Calentamiento Tecnológico Global", "Colonialismo Digital", "Algor-ética", "IA-Salmón", "IA Centauro", "Constitucionalismo Social de la IA", "Democracia Aumentada", "Taylorismo Digital", "Estanflación Cognitiva" — que aleja notablemente el tono del resto del grupo (más narrativo, pedagógico, dirigido a docentes/familias) hacia algo mucho más cercano a un policy paper de gobernanza de IA a nivel regional/internacional.

**Esto plantea una pregunta de fondo para el rediseño, más allá del ajuste de framework:** ¿este nivel de contenido geopolítico-regulatorio (comparación de modelos EE.UU./China/UE, el "modelo FDA para algoritmos" de 16 puntos, 10 propuestas de gobernanza global) es apropiado para el público docente/familia de la plataforma, o pertenece a un documento distinto (informe, paper, anexo) que esta temática podría enlazar en vez de desarrollar completo?

---

## Paso 6 — Modelado

**Qué hay hoy:** El Simulador "¿Libres bajo influencia?" — 3 escenarios secuenciales (feed infinito con notificación persuasiva, contenido de IA con sesgo de confirmación, inscripción con casilla preseleccionada) cada uno con 2 opciones (una correcta, una incorrecta) y feedback teórico explicando por qué.

Buen modelado por contraste, en la línea de los mejores simuladores del grupo (`algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros`) — cada escenario conecta la elección con un marco teórico específico (Fogg, Kahneman, Thaler & Sunstein), reforzando la aplicación práctica de conceptos ya vistos en otras temáticas del grupo.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El mismo Simulador da feedback inmediato por escenario. El "Test de Autoverificación Rápida" (5 preguntas, sin sistema de niveles/insignias, solo % final) está explícitamente etiquetado "Práctica libre — no cuenta para tu progreso", con una frase que dirige activamente al usuario hacia el quiz real ("La evaluación que sí completa esta temática está más abajo").

Es la única temática de las 6 del grupo que resuelve correctamente la ambigüedad detectada en `caldos-de-cultivo` y `recuperar-la-agencia` (mini-tests sin aclarar que no cuentan para el progreso) — buena práctica de comunicación con el usuario, fácilmente replicable en las otras 2 temáticas que comparten ese problema.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Quiz oficial de 10 preguntas, mismo mecanismo compartido. Implementa correctamente el flujo completo: pantalla de bienvenida con el umbral 8/10 explícito, muestra el resultado de un intento previo, y distingue "¡Completaste esta temática!" de "Todavía no llegaste al puntaje mínimo".

Es la segunda temática del grupo con esta implementación correcta, junto con `diseno-persuasivo-patrones-oscuros` — de las 6 temáticas del grupo, solo estas 2 tienen el quiz bien resuelto técnicamente; las otras 4 (`algoritmos-perfilado`, `caldos-de-cultivo`, `recuperar-la-agencia`) comparten el mismo bug de no distinguir aprobado/no aprobado.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** La Sección 04, "Formar para la libertad" (única de las 4 secciones base con variante de audiencia), es lo más cercano a una síntesis — con el marco de Amartya Sen (la libertad como capacidades reales) aplicado al rol de la escuela/familia.

**Problema de proporción y ubicación:** esta sección es solo una de 4 secciones base tempranas en la página — después de ella vienen los 9 bloques adicionales de contenido denso sobre gobernanza de IA, sin que ninguno de ellos vuelva a conectar explícitamente con el rol cotidiano de un docente o una familia. Para ser la temática de "cierre" de todo el grupo, la aplicación real queda desproporcionadamente breve frente al volumen de contenido regulatorio/geopolítico que la sigue — el usuario que llega al final probablemente recuerda más sobre modelos regulatorios de EE.UU./China/UE que sobre qué hacer mañana en su aula o su casa.

**Detalle de audiencia, mismo patrón que `recuperar-la-agencia`:** la variante familias de esta sección es un único sustituto de sustantivo ("escuela"→"familia") repetido 3 veces en la misma oración, sin ningún otro cambio de contenido, tono o ejemplos — variante mínima, no una adaptación real.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Material de estudio (14 diapositivas + infografía) + Fuentes Oficiales (el badge dice dinámicamente `{ACADEMIC_CITATIONS.length}`, que en el código real son 12 entradas — la lista más larga de fuentes de las 6 temáticas del grupo, más que las 8 de `recuperar-la-agencia`) + cita de cierre (la misma frase que cierra `recuperar-la-agencia`, pero acá sin atribución nominal, presentada como cierre de la charla completa).

**Fortaleza notable:** de los 6 autores destacados en el Hero (Dewey, UNESCO, Buckingham, Levinas, Habermas, Sen), los 6 tienen entrada propia en el listado de fuentes — es la única temática del grupo con correspondencia 100% completa entre autores destacados y fuentes verificables, contraste directo y positivo frente a `recuperar-la-agencia` (donde solo 1 de 4 tenía entrada).

**Pero, fuera de esos 6 autores destacados, esta es la temática con la lista más larga de autores citados sin fuente verificable de todo el sitio:** Roxana Morduchowicz, Mike Caulfield, danah boyd, Lawrence Lessig, Thaler & Sunstein, Shoshana Zuboff, B.J. Fogg, Daniel Kahneman, Juan Carlos Campo Moreno, Bobbio, Dworkin, Asimov, Philip K. Dick, Mary Shelley, Huxley, Orwell, Bradbury, Marx, Taylor — 19 nombres mencionados con atribución directa en el cuerpo sin ninguna entrada en `ACADEMIC_CITATIONS`. En parte es consecuencia natural de cubrir muchos más conceptos que las demás temáticas, pero también refleja lo desproporcionado del volumen de contenido frente a la capacidad de sostener el mismo nivel de rigor bibliográfico en todos los puntos.

**Detalle a resolver:** la Sección "Ética y Nuevo Constitucionalismo Digital" mezcla registro ficcional (Asimov, Dick, Shelley, Huxley, Orwell, Bradbury) con teoría social/económica real (Marx, Taylor) sin distinguir explícitamente los dos registros — es el único bloque de todo el grupo que hace esto, y vale la pena aclarar en el rediseño que esas referencias son literarias/especulativas, no académicas en el mismo sentido que el resto de la bibliografía citada.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ⚠️ La introducción funciona parcialmente como tal (recapitula el grupo), pero no anticipa el volumen |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Fuerte en datos, pero con discrepancia numérica (8 vs. 9) ya en el Hero |
| 4. Contexto | ✅ Muy bien resuelto — funciona casi como síntesis de todo el grupo |
| 5. Contenido core progresivo | ❌ El más sobrecargado de todo el sitio, con cambio de registro hacia policy paper |
| 6. Modelado | ✅ Buen simulador de 3 escenarios con feedback teórico |
| 7. Práctica con feedback | ✅ El único mini-test del grupo correctamente etiquetado como práctica libre |
| 8. Evaluación formativa | ✅ Implementación correcta (segunda del grupo, junto con diseno-persuasivo) |
| 9. Aplicación/síntesis | ❌ Desproporcionadamente breve frente al volumen de contenido regulatorio posterior |
| 10. Recursos y cierre | ⚠️ Mejor correspondencia autores-fuentes del grupo, pero 19 autores sin fuente fuera de los 6 destacados |

Esta es la temática de cierre del grupo y, en varios aspectos técnicos (quiz, etiquetado del mini-test, correspondencia de autores destacados), es la mejor ejecutada de las 6. Pero su volumen de contenido y su cambio de registro hacia terminología de gobernanza de IA la alejan del resto del grupo — es el caso más claro de "esto necesita repensarse como documento, no solo recortarse", dado que gran parte del contenido adicional (Hoja de Ruta de 10 propuestas globales, comparación de 3 modelos regulatorios, "modelo FDA para algoritmos") tiene un público y una función distintos del resto de la plataforma.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Corrección de premisa
La consigna recibida afirmaba "docentes, única sin familias asignada" — esto es incorrecto según el código: la entrada tiene `audiencias: ['docentes', 'familias']` y usa activamente `paragraphsFamilias` en 1 de sus 4 secciones. Vale la pena revisar de dónde salió esa clasificación errónea (posiblemente un error de transcripción en el inventario estructural previo) antes de usarla como base para cualquier otro documento del rediseño.

### Discrepancias numéricas
1. Discrepancia de conteo del poliedro entre temáticas: esta página confirma "8 caras" como el número correcto y las enumera todas explícitamente (Sección 02 y pregunta 3 del quiz oficial coinciden exactamente) — mientras que `recuperar-la-agencia` presenta un "Poliedro" de solo 7 caras con nombres parcialmente distintos. El rediseño debería unificar ambas listas o aclarar por qué difieren.
2. "9 dominios" (Ribble & Bailey, franja de datos del Hero) convive con "un poliedro de ocho caras" (la propia descripción de la temática) sin conciliar explícitamente cuál es el marco propio de la charla y cuál es una referencia externa citada solo de forma comparativa — misma discrepancia repetida en la imagen de la Sección 02, cuyo link de fuente apunta al modelo de 9 elementos de Ribble & Bailey en vez de a una fuente que respalde específicamente "8 caras".
3. El badge de conteo de fuentes decía "14 Citas Académicas & Legales" según una lectura previa, pero el conteo directo del array `ACADEMIC_CITATIONS` da 12 entradas — el badge se calcula dinámicamente (`{ACADEMIC_CITATIONS.length}`) así que en producción muestra el número correcto (12); de todas formas, siguen siendo la lista más larga de fuentes de las 6 temáticas del grupo.

### Cobertura incompleta de contenido propio
1. El explorador interactivo (`PolyhedronExplorer`) solo desarrolla 6 de las 8 caras oficiales en profundidad — "derechos y responsabilidades" y una cobertura más completa de "consumo y economía digital" quedan sin tarjeta propia en el explorador, pese a estar en la enumeración textual de 8 caras.

### Cambio de registro y densidad
1. Es el componente más largo y denso del grupo (1743 líneas, 9 bloques temáticos extra fuera de `data.sections`) — introduce una cantidad considerable de terminología propia no usada en ninguna otra temática (IA-Ceno, Calentamiento Tecnológico Global, Colonialismo Digital, Algor-ética, IA-Salmón, IA Centauro, Constitucionalismo Social de la IA, Democracia Aumentada, Taylorismo Digital, Estanflación Cognitiva) que se aleja notablemente del tono más narrativo/pedagógico del resto del grupo, acercándose más a un policy paper sobre gobernanza de IA que a una charla de ciudadanía digital docente/familiar.
2. La Sección "Ética y Nuevo Constitucionalismo Digital" mezcla registro ficcional (Asimov, Dick, Shelley, Huxley, Orwell, Bradbury) con teoría social/económica real (Marx, Taylor) sin distinguir explícitamente los dos registros — es el único bloque de todo el grupo que hace esto.

### Fortalezas técnicas
1. Es la única temática del grupo con el quiz oficial correctamente implementado junto con `diseno-persuasivo-patrones-oscuros` — buen ejemplo a replicar en `algoritmos-perfilado`, `caldos-de-cultivo` y `recuperar-la-agencia`, que comparten el bug de omitir `showQuiz`/`previousResult`/`passed`.
2. Es la única temática que etiqueta explícitamente su mini-test de práctica como "no cuenta para tu progreso" y dirige al usuario hacia la evaluación real — buena práctica a replicar en `caldos-de-cultivo` y `recuperar-la-agencia`, donde esa ambigüedad no está resuelta.
3. Es la única temática del grupo con correspondencia 100% completa entre `data.authors` destacados en el Hero y entradas verificables en el listado de fuentes.

### Inconsistencias menores
1. El color de marca declarado en la data (`#0EA5E9`) no se usa en ningún lugar visible del componente, que define su propia paleta de 6 colores (`BLUE`, `CYAN`, `INDIGO`, `EMERALD`, `AMBER`, `VIOLET`) sin relación directa con el token de la data.
2. El ícono declarado (`Hexagon`) es coherente con la metáfora del "poliedro", aunque el poliedro descripto en el texto tiene 8 caras (un octaedro no se representa naturalmente como hexágono de 6 lados).

### Qué se podría agregar
1. Resumen ejecutivo o mapa de contenidos, dado el volumen sin precedentes de esta temática.
2. Objetivo de aprendizaje explícito.
3. Reconciliación explícita entre "8 caras" (marco propio) y "9 dominios" de Ribble & Bailey (referencia externa) — aclarar que son marcos distintos, no una inconsistencia.
4. Tarjetas propias en el Explorador para las 2 caras faltantes ("derechos y responsabilidades", cobertura completa de "consumo y economía digital").
5. Fichas bibliográficas para los 19 autores citados en el cuerpo sin entrada en `ACADEMIC_CITATIONS`, priorizando los más centrales (Lessig, Zuboff, Kahneman, Fogg, Thaler & Sunstein).
6. Aclaración explícita del registro ficcional/especulativo en la sección de "Los 4 laberintos del riesgo".
7. Una sección de aplicación/síntesis más desarrollada y mejor ubicada (idealmente al final, después de todo el contenido adicional), que reconecte los 9 bloques de gobernanza de IA con el rol cotidiano de docentes y familias.
8. Uso del color de marca declarado en la data, o actualización del token para reflejar la paleta real usada.

### Qué se podría simplificar, quitar o reordenar
1. Evaluar si el contenido de gobernanza regional/global (Gobernanza Glocal, modelo FDA de 16 puntos, Hoja de Ruta de 10 propuestas) debería vivir en un documento/anexo separado en vez de la página principal de la temática, dado que su público y función parecen distintos del resto de la plataforma.
2. Priorizar y recortar la terminología neológica densa (IA-Ceno, Algor-ética, etc.) o introducirla con mayor andamiaje conceptual antes de usarla, dado que no tiene precedente en ninguna otra temática del grupo.
3. Mover o expandir la sección de aplicación real ("Formar para la libertad") para que tenga mayor peso proporcional frente al volumen de contenido regulatorio que la sigue.

---

## Fortalezas a preservar en el rediseño
1. La introducción que recapitula el arco completo del grupo — patrón narrativo valioso para cualquier temática de cierre o síntesis, útil como referencia de cómo un contexto puede cumplir función doble.
2. El Simulador "¿Libres bajo influencia?" con 3 escenarios conectados a marcos teóricos específicos — buen ejemplo de aplicación práctica de conceptos ya vistos en otras temáticas del grupo.
3. El etiquetado explícito "Práctica libre — no cuenta para tu progreso" del Test de Autoverificación — el estándar de comunicación con el usuario a replicar en el resto del grupo.
4. La implementación completa y correcta del quiz oficial (passed/previousResult/showQuiz) — segundo caso de referencia junto con `diseno-persuasivo-patrones-oscuros`.
5. La correspondencia 100% entre autores destacados del Hero y fuentes verificables — el estándar de rigor bibliográfico a replicar (aunque limitado a esos 6 autores específicos, no al resto de la página).
