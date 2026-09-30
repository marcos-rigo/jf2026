# Algoritmos y Perfilado — Contraste contra el framework profesional de 10 pasos

Base: `algoritmos-perfilado-audit.md` (auditoría de la entrada `algoritmos-perfilado` en `lib/libres-bajo-influencia-data.ts` y `components/tematicas/AlgoritmosPerfiladoPage.tsx`, 962 líneas).

Nota de contexto: esta temática comparte el mecanismo de quiz real con `subculturas-digitales` (mismo hook `useLibresSubtopic`), lo que la convierte en la segunda de las 10 temáticas auditadas con evaluación formativa genuina — pero la implementación acá tiene bugs de UX notorios que hacen que ese mecanismo funcione peor que en su temática hermana. Tiene además el elemento más fuerte de modelado+práctica interactiva de todo el sitio: el "Simulador de Inferencia Algorítmica".

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

**Qué hay hoy:** No existe. El Hero es más austero que el de `subculturas-digitales`: badges + H1 + bajada + chips de autores citados + 2 CTAs, sin índice de secciones tappeable ni fragmentos decorativos.

**Qué falta:** un mapa breve de las 4 secciones (de la señal al perfil → clasificar nunca es neutral → la cara ambivalente de la personalización → qué significa para vos), dado que acá ni siquiera existe el índice numerado que en `subculturas-digitales` funcionaba como sustituto parcial.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página. Mismo vacío que la gran mayoría de las temáticas auditadas.

**Qué falta:** objetivo general (ej: "vas a poder explicar cómo se construye un perfil a partir de señales sueltas, identificar por qué ninguna clasificación algorítmica es neutral, y evaluar el equilibrio entre personalización útil y burbuja de filtros").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** Los chips de autores en el Hero (Zuboff, Solove, Foucault, Pariser) dan un tono serio y académico desde el inicio, pero es un gancho más intelectual que emocional — no hay curiosidad no resuelta ni urgencia inmediata como en el Hero de `subculturas-digitales` (fragmentos de Algospeak sin explicar).

**Fortaleza real, aunque llega un paso después del Hero:** el "Simulador de Inferencia Algorítmica", justo después de la introducción, es un gancho interactivo muy efectivo — el usuario marca/desmarca señales y ve en tiempo real cómo se arma un "perfil probabilístico", lo cual genera enganche genuino por experimentación antes de que la página le explique la teoría completa.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** La Introducción ancla bien el concepto central (Zuboff, "capitalismo de vigilancia") con una frase memorable ("No adivina el alma. Calcula la probabilidad") y variante de audiencia.

Bien resuelto: conciso, sin digresión, cumple exactamente su función — de los mejores contextos vistos, comparable en eficiencia (aunque menos elaborado narrativamente) al de `huella-digital` o `alfabetizacion-mediatica`.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Solo 3 secciones de contenido real (más la síntesis de aula/casa): "De la señal al perfil" (Solove) → "Clasificar nunca es neutral" (Foucault) → "La cara ambivalente de la personalización" (Pariser).

Buena progresión, más compacta que `subculturas-digitales`: cada sección construye sobre la anterior de forma clara — primero cómo se arma el perfil, después qué implica clasificar, después qué trade-off hay en personalizar. Con solo 3 conceptos centrales (más el de la introducción), es más fácil de retener que el contenido de 8 secciones/8 autores de `subculturas-digitales`, aunque a costa de menor profundidad académica.

**Detalle a considerar:** dado que es más liviano en cantidad, hay más margen para desarrollar cada sección con un poco más de detalle o ejemplos adicionales sin arriesgar sobrecarga.

---

## Paso 6 — Modelado

**Qué hay hoy:** El "Simulador de Inferencia Algorítmica" — el usuario interactúa con 6 señales simuladas y ve cómo cada una suma peso a 5 categorías de perfil, con barras animadas.

Es el mejor modelado interactivo de todas las temáticas auditadas hasta ahora — no es una narrativa (como el caso de Sofía en `subculturas-digitales`), es una demostración manipulable del mecanismo mismo que la temática explica. El usuario no lee sobre cómo se arma un perfil: lo construye él mismo, viendo el resultado cambiar en tiempo real.

**Problema real a corregir:** los pesos y porcentajes del simulador son completamente ficticios, sin ningún disclaimer visible que aclare que es una metáfora pedagógica y no una demostración de un modelo real — hay riesgo genuino de que un usuario interprete los números como representativos de cómo funciona un sistema de perfilado real, cuando son solo ilustrativos.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El mismo simulador cumple doble función — también es práctica con feedback inmediato (marcar/desmarcar señales y ver el resultado cambiar al instante).

Es la mejor combinación de modelado+práctica+feedback del sitio auditado hasta ahora, superando incluso al Decodificador Algospeak de `subculturas-digitales` en interactividad (acá el usuario no solo revela información, construye un resultado con sus propias elecciones).

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Quiz real de 10 preguntas de opción múltiple, mismo mecanismo compartido que `subculturas-digitales` (score ≥ 8/10 marca completado automáticamente). Las preguntas evalúan comprensión conceptual genuina (ej: "¿Por qué dice la charla que la discriminación algorítmica 'no grita'?").

**El contenido del quiz es sólido — el problema es la implementación de la interfaz, con varios bugs reales respecto a la versión de `subculturas-digitales`:**
- No hay pantalla inicial de presentación (cantidad de preguntas, umbral necesario) — el usuario entra directo a la primera pregunta sin saber qué esperar.
- No se muestra el resultado de un intento anterior al volver a la página.
- El bug más serio: la pantalla de resultados no distingue aprobado/no aprobado — el usuario ve "Obtuviste X de 10" en texto neutro, sin ningún indicador de si alcanzó el umbral de 8/10 que determina si la temática queda marcada como completada. El usuario no tiene forma de saber, leyendo la pantalla de resultados, si "completó" la temática o no — mientras que en `subculturas-digitales` el mismo mecanismo compartido sí distingue esto con mensajes y colores diferenciados (verde/ámbar).
- Sin barra de progreso circular animada ni contador incremental — el score se muestra como texto plano.

Esto es particularmente notable porque el hook compartido (`useLibresSubtopic`) sí calcula y expone las variables necesarias (`passed`, `showQuiz`, `previousResult`) — el componente simplemente no las usa en el render. Es una inconsistencia de implementación entre 2 temáticas que comparten la misma infraestructura técnica, fácil de corregir porque la lógica ya existe, solo falta conectarla en la interfaz.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 04, "Qué significa esto para el aula/tu casa" — única sección con variante de audiencia completa, con un ejercicio concreto sugerido ("comparar el feed de dos estudiantes/personas de la familia frente al mismo tema y notar cuánto cambia").

Bien resuelto, con una sugerencia de actividad genuinamente aplicable — comparar feeds es un ejercicio simple y revelador que cualquier docente o familia puede hacer sin herramientas adicionales.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Material de estudio (15 diapositivas + PDF descargable + infografía con lightbox) + "Fuentes Oficiales, Datos Estadísticos y Citas Verificables" (7 entradas, con un campo `stat` adicional que no existe en `subculturas-digitales`) + Caso de estudio Cambridge Analytica (con línea de verificación oficial FTC) + cita de cierre sin atribución.

**El campo `stat` es una buena idea con ejecución inconsistente:** de las 7 fuentes, solo 2 tienen una cifra numérica real (FTC: $5.000.000.000/87M de usuarios; Pew Research: 81%) — las otras 5 tienen un `stat` que en realidad es una reformulación temática, no un dato cuantitativo, pese a presentarse con el mismo ícono "📊" que sugiere estadística en las 7. Esto puede leerse como si todas aportaran un dato duro cuando no es el caso.

**Fuente sin respaldo en el cuerpo:** UNICEF (2023) aparece en el listado final sin ninguna mención o cita correspondiente en las 4 secciones ni en la introducción — es la única de las 7 fuentes que no respalda ninguna afirmación específica hecha en el texto, apareciendo "de la nada" en el bloque final.

**El caso Cambridge Analytica está bien resuelto**, con una línea de verificación oficial separada (link directo al comunicado de la FTC) — buen estándar de rigor para un caso real y documentado, a diferencia del caso ficticio de Sofía en `subculturas-digitales`, que no necesita ese tipo de verificación por ser ilustrativo.

**Detalle menor:** la cita de cierre ("No solo compartimos datos: compartimos contextos, rutinas y patrones") no lleva atribución, a diferencia de la cita equivalente de `subculturas-digitales`, que sí se atribuye a José Farhat/la conferencia de origen.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe, y sin el índice tappeable que suplía parcialmente esto en subculturas-digitales |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Hero más austero/académico, pero el simulador que sigue es un gancho fuerte |
| 4. Contexto | ✅ Bien resuelto — conciso y bien anclado |
| 5. Contenido core progresivo | ✅ Bien organizado — más compacto y quizás más retenible que subculturas-digitales |
| 6. Modelado | ✅ El mejor del sitio — simulador interactivo manipulable, con 1 disclaimer faltante |
| 7. Práctica con feedback | ✅ El mejor del sitio — mismo simulador, feedback en tiempo real |
| 8. Evaluación formativa | ⚠️ Quiz real y bien escrito, pero con bugs de UX que ocultan si aprobaste |
| 9. Aplicación/síntesis | ✅ Bien resuelta, con ejercicio concreto aplicable |
| 10. Recursos y cierre | ⚠️ Buena estructura, con 1 fuente sin respaldo y campo `stat` engañoso en 5/7 casos |

Esta temática tiene el mejor par Modelado+Práctica de todo el sitio auditado (el simulador interactivo) y una evaluación formativa real, pero dos problemas concretos le restan valor a esas fortalezas: los bugs del quiz (que ocultan si el usuario aprobó) y la falta de disclaimer en el simulador (que podría hacer que sus números ficticios se malinterpreten como reales).

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Bugs y problemas de implementación
1. La pantalla de resultados del quiz no informa si la persona aprobó o no — la variable `passed` se calcula en el hook compartido pero nunca se usa en este componente, a diferencia de `subculturas-digitales`, donde el resultado muestra explícitamente si se completó la temática o si falta puntaje, con colores distintos (verde/ámbar). Acá el usuario solo ve "Obtuviste X de 10" sin saber si eso alcanzó el umbral que determina si la temática cuenta como completada en su progreso.
2. `showQuiz` y `previousResult` se destructuran del hook compartido pero nunca se usan — el quiz no tiene pantalla de bienvenida/instrucciones (número de preguntas, umbral necesario) ni muestra el resultado de un intento previo al volver a la página, a diferencia de `subculturas-digitales`.
3. Sin barra de progreso circular animada ni contador incremental (`useCountUp`) como en `subculturas-digitales` — el score se muestra como texto plano.

### Inconsistencias de audiencia
1. Solo 1 de las 4 secciones de contenido tiene variante de audiencia (la de "aula/casa") — proporción aún más baja que `subculturas-digitales` (que tenía 4 de 8). Combinado con el `intro`/`introFamilias` de nivel raíz, hay solo 2 puntos de variación en toda la temática.

### Inconsistencias entre temáticas hermanas del mismo grupo
1. `data.authors` SÍ se renderiza acá (como chips en el Hero), a diferencia de `subculturas-digitales`, donde el mismo campo de datos nunca llega a pantalla — inconsistencia de tratamiento del mismo campo entre 2 temáticas del mismo grupo con estructura de datos compartida.
2. La cita de cierre no tiene atribución, a diferencia de la cita equivalente de `subculturas-digitales`, que sí se atribuye a José Farhat/la conferencia de origen.
3. Estructura visual considerablemente más simple: 4 secciones con un único layout reutilizado (vs. 8 secciones con 4 layouts bespoke en `subculturas-digitales`), sin índice de secciones tappeable en el Hero, sin fragmentos decorativos flotantes — más cercana a un artículo largo tradicional que a la "revista interactiva" que es `subculturas-digitales`.

### Fuentes con distinto rigor sin distinción señalada
1. UNICEF (2023) aparece en el listado final de fuentes sin ninguna mención o cita correspondiente en el cuerpo del texto de las 4 secciones ni de la introducción — es la única de las 7 fuentes de este listado sin una cita o mención inline correspondiente en el resto de la página.
2. El campo `stat` de 5 de las 7 fuentes no es una estadística real sino una reformulación temática del tema de la fuente, pese a presentarse con el mismo ícono "📊" que en las 2 fuentes que sí tienen cifras numéricas (FTC, Pew Research).
3. Ninguna fuente está marcada como "sin verificar" — igual que `subculturas-digitales`, no existe el concepto `unverified` en esta temática.
4. Ningún link apunta a un recurso obviamente incorrecto, aunque el de Foucault y Pariser son páginas de catálogo editorial genéricas, no el texto/recurso específico — mismo patrón de "link genérico" visto en `ia-etica-ciudadania` y `subculturas-digitales`.

### Otros hallazgos de contenido
1. El simulador de inferencia algorítmica usa pesos y porcentajes completamente ficticios sin ningún disclaimer visible que aclare que es una metáfora pedagógica y no una demostración de un modelo real.
2. El caso de estudio (Cambridge Analytica) tiene una línea de "Fuente de verificación oficial" adicional al pie que no existe en el caso de estudio de `subculturas-digitales` ("Sofía, catorce años"), que es un caso ficticio/ilustrativo distinto sin necesidad de esa verificación — tratamiento correcto y diferenciado según el tipo de caso (real vs. ilustrativo), vale la pena mantener esta distinción en el rediseño.

### Qué se podría agregar
1. Resumen ejecutivo breve, dado que acá ni siquiera hay el índice tappeable de `subculturas-digitales`.
2. Objetivo de aprendizaje explícito, general.
3. Disclaimer visible en el simulador aclarando que los pesos/porcentajes son ilustrativos, no un modelo real.
4. Conectar las variables `passed`, `showQuiz` y `previousResult` (ya calculadas por el hook compartido) al render del quiz, para que la pantalla de resultados sí indique si se aprobó, y para mostrar instrucciones iniciales y resultado de intentos previos.
5. Barra de progreso circular animada con contador, replicando el patrón de `subculturas-digitales`.
6. Cita o mención inline en el cuerpo del texto que respalde la entrada de UNICEF (2023) en el listado de fuentes, o su remoción si no aplica a ningún contenido específico de la página.
7. Distinción visual entre los `stat` que son cifras reales y los que son solo reformulaciones temáticas.
8. Atribución para la cita de cierre.

### Qué se podría simplificar, quitar o reordenar
1. Unificar el tratamiento de `data.authors` entre esta temática y `subculturas-digitales` (renderizarlo siempre, o en ninguna de las 2), para consistencia dentro del mismo grupo temático.
2. Evaluar si el rediseño busca uniformar el nivel de interactividad/estructura visual entre las 6 temáticas del grupo "Libres bajo influencia" o mantener la variación actual (revista interactiva vs. artículo largo tradicional) como una decisión consciente.

---

## Fortalezas a preservar en el rediseño
1. El "Simulador de Inferencia Algorítmica" — el mejor mecanismo combinado de modelado y práctica con feedback de todo el sitio auditado. Candidato de alto valor para replicarse (adaptado) en otras temáticas que expliquen un mecanismo o proceso que se preste a simulación interactiva.
2. La progresión de 3 secciones core (señal→perfil, clasificación, personalización) — ejemplo de contenido denso pero bien acotado, útil como contraejemplo positivo frente a la sobrecarga de `alfabetizacion-digital`.
3. El tratamiento diferenciado del caso de estudio real (Cambridge Analytica, con verificación oficial) frente al caso ficticio de la temática hermana — buena práctica de rigor a mantener: los casos reales necesitan verificación explícita, los ilustrativos no.
4. El campo `stat` en el listado de fuentes es una buena idea de diseño (dar una cifra destacada por fuente) que vale la pena mantener, corrigiendo su aplicación inconsistente.
