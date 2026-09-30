# Estafas Digitales — Contraste contra el framework profesional de 10 pasos

Base: `estafas-digitales-audit.md` (auditoría de `app/estafas-digitales/estafas-digitales-content.tsx`, 1603 líneas en un único archivo, y `lib/estafas-digitales-content.ts`, 84 líneas, solo los campos con variante de audiencia).

Nota de contexto: esta temática comparte con `ia-etica-ciudadania` dos ausencias estructurales fuertes (sin `SourceCite`, sin ningún checklist interactivo), pero a diferencia de esa, tiene un contenido core bien dimensionado y una de las mejores secciones de utilidad práctica/emergencia de todo el sitio. También tiene un bug real de audiencia en el Hero — el elemento más visible de toda la página está escrito 100% en lenguaje docente pese a que la temática está clasificada para docentes y familias por igual.

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

**Qué hay hoy:** No existe. El Hero tiene badge + H1 + párrafo intro + accesos rápidos (jump links) + imagen decorativa con badge flotante.

**Qué falta:** un mapa de 3 líneas que anticipe la estructura real de la página — que además de conceptos y modalidades de estafa, incluye un protocolo de emergencia cronometrado y canales oficiales de denuncia, dos elementos de alto valor práctico que hoy están "escondidos" al final del scroll sin ningún adelanto.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de las 11 secciones. Mismo vacío total que la mayoría de las temáticas auditadas.

**Qué falta:** objetivo general de módulo (ej: "vas a poder identificar las 3 modalidades principales de estafa digital, aplicar el protocolo de emergencia en 5 minutos si caíste en una trampa, y saber a qué organismo recurrir según el tipo de caso").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** Badge + H1 + párrafo intro con contexto de actualidad (IA, clonación de voz, billeteras digitales como Mercado Pago/Cuenta DNI/MODO/Ualá) — temáticamente es un buen gancho, actual y concreto.

**Problema grave, no solo de framework:** este párrafo está escrito 100% en lenguaje docente ("tus estudiantes", "cuerpo docente", "entorno escolar") sin ninguna variante familias, pese a que la temática está clasificada para ambas audiencias. Es el párrafo más prominente de toda la página — el primer texto que lee cualquier usuario — y un usuario que selecciona "familias" lo lee exactamente igual, con lenguaje que no le corresponde. Es un bug de contenido real, no solo un hueco de diseño instruccional, y ocurre justo en el paso que más impacto emocional debería tener.

**Mismo problema se repite** en el badge flotante de la imagen del Hero ("Formación continua para la comunidad docente") y en la tercera tarjeta de la línea de tiempo histórica (Sección 3, "redes sociales del estudiante" / "Desafío en las aulas").

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 2 (Marco Conceptual — Ingeniería Social, con cita sólida de Kevin Mitnick) + Sección 3 (Historia: Phishing 1995 → Smishing/Vishing 2000s → Fraudes Híbridos Sintéticos 2026).

**Bien resuelto en general:** la progresión histórica de 3 hitos es clara, bien acotada, y cumple exactamente la función de contexto liviano que pide este paso — ni sobrecargada (como `alfabetizacion-digital`) ni ausente (como `ia-etica-ciudadania`).

**Mismo bug de audiencia que el Hero:** el tercer hito (2026, Fraudes Híbridos) también está escrito en lenguaje docente fijo ("redes sociales del estudiante", "Desafío en las aulas") sin variante — en una sección que ni siquiera está clasificada como variable por audiencia.

**Detalle menor:** el título "Línea de Tiempo Interactiva" promete interactividad que no existe — es una grilla estática de 3 tarjetas, sin hover-reveal, click ni expansión.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección 6, "Las 3 Modalidades Principales de Estafa" (Phishing/Smishing/Vishing), cada una con subtítulo, descripción y un ejemplo real de mensaje citado textualmente (ej: "Correo Argentino: Tu paquete está retenido... Regularizalo aquí: https://bit.ly/correo-pago").

**Bien dimensionado:** solo 3 ítems, cada uno claramente diferenciado por canal (email/SMS-WhatsApp/llamada), sin sobrecarga de taxonomías paralelas — comparable en calidad de organización al C.A.F.E. de `alfabetizacion-mediatica`.

**Fortaleza adicional que funciona como modelado temprano:** los "ejemplos reales citados" de cada modalidad son, en efecto, ejemplos concretos de mensajes de estafa reales — esto adelanta parte de la función del Paso 6 (Modelado) dentro del propio contenido core, mostrando cómo se ve una estafa real antes de explicar cómo defenderse de ella.

---

## Paso 6 — Modelado

**Qué hay hoy:** Los 3 ejemplos de mensajes de estafa de la Sección 6 (ver Paso 5) funcionan parcialmente como modelado — el usuario ve exactamente qué texto esperar de un intento de phishing/smishing/vishing.

**Lo que falta:** modelado del lado de la defensa — ningún ejemplo muestra "así se ve alguien aplicando la pausa cognitiva" o "así se ve una verificación de remitente bien hecha". El modelado que hay es del ataque, no de la respuesta correcta — a diferencia de `alfabetizacion-mediatica`, donde los casos de estudio mostraban el método de verificación aplicado de punta a punta.

**Qué falta:** al menos un caso completo modelado de principio a fin: mensaje sospechoso → proceso de verificación → decisión correcta, mostrando el razonamiento, no solo el resultado.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Sección 7, "Protocolo de Emergencia en 5 Minutos" — 5 pasos cronometrados (Minuto 0 a 4-5: Respirar/Desconectar/Cambiar/Activar 2FA/Revisar y Avisar). Es una de las secciones más concretas y accionables de las 6 temáticas auditadas hasta ahora, con especificidad de tiempo real (algo único de esta temática).

**Problema, el de siempre:** es una lista de instrucciones para seguir en una situación real, no una práctica dentro de la plataforma con confirmación — no hay forma de que el usuario "practique" el protocolo ahora ni reciba feedback de que lo aplicó bien. Pero a diferencia de otras temáticas, acá el contenido en sí (qué hacer en una emergencia) es fuerte y bien logrado; lo que falta es solamente el mecanismo de práctica/feedback encima, no el contenido de base.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada. Igual que `ia-etica-ciudadania`, no hay `computeProgress` ni checklist — el único mecanismo de progreso es el botón manual "marcar como completada".

Es la segunda de las 6 temáticas auditadas sin ningún checklist interactivo. Con el agravante de que el contenido (los 4 motores psicológicos del engaño, las 3 modalidades de estafa, los 5 pasos del protocolo) se presta naturalmente a un checklist de reconocimiento de señales — es de las temáticas donde este hueco resulta más fácil de resolver, porque el contenido ya está estructurado en listas claras y numeradas.

**Qué falta:** como mínimo, un checklist de autoevaluación tipo "¿reconocés estas señales de estafa?"; idealmente, un quiz que presente un mensaje nuevo (no uno de los 3 ejemplos ya vistos) y le pida al usuario clasificarlo por modalidad, con feedback explicando las señales que lo delatan.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 8, "Qué Significa para el Aula/Guía Docente" — la única sección con contenido variable por audiencia real de toda la temática. Incluye: encabezado por audiencia, nota `AULA_ROL` sobre por qué la prohibición estricta es contraproducente, tarjeta "Pedagogía del Cuidado" (con el concepto de "pausa cognitiva"), y un Protocolo de Acción de 4 pasos para acompañar a un estudiante/hijo damnificado.

**Bien resuelto en general** — buena conexión entre el concepto de ingeniería social y el rol de acompañamiento del adulto, con un mensaje importante de desdramatización del error ("caer en una trampa digital no es motivo de castigo").

**Inconsistencia dentro de esta misma sección:** de los 4 pasos del Protocolo de Acción, 3 tienen variante familias (01, 03, 04) pero el paso 02 ("Preservación de Evidencia Digital") se queda con texto fijo docente-voiced para ambas audiencias — inconsistencia dentro de la única sección que sí trabaja activamente el patrón de audiencia.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 9 (carrusel de 6 láminas) + Sección 10 (Canales Oficiales de Denuncia — 6 líneas de ayuda con teléfono/email/dirección/web) + Sección 11 (4 fuentes oficiales citadas, listado completo).

**La Sección 10 es la mejor sección de utilidad práctica/emergencia de las 6 temáticas auditadas hasta ahora** — 6 organismos distintos (UFECI, Policía de Tucumán, Línea 149/CENAVID, Línea 137, Línea 102, Línea 101), cada uno con teléfono, y cuando corresponde, email, dirección física y web. Supera ampliamente a la única mención de Línea 144 en `ia-etica-ciudadania`. Fortaleza clara a preservar y replicar.

**Fortaleza adicional:** es de las pocas temáticas donde el listado final de fuentes coincide completamente con las citas inline del cuerpo — ninguna fuente mencionada queda fuera del listado (mismo logro que `alfabetizacion-mediatica`).

**Problemas menores:** el header del carrusel no varía por audiencia (mismo patrón de inconsistencia visto en `alfabetizacion-mediatica`), y la cifra de la Sección 5 ("+34.000 denuncias", "incrementos interanuales superiores al 200%") no tiene período/fecha específica citada, dificultando su verificación o actualización futura.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Temáticamente fuerte, pero con bug real de audiencia (100% docente-voiced) |
| 4. Contexto | ✅ Bien dimensionado (progresión histórica clara), con mismo bug de audiencia en un hito |
| 5. Contenido core progresivo | ✅ Bien organizado — 3 modalidades, con ejemplos reales que adelantan modelado |
| 6. Modelado | ⚠️ Modela el ataque, no la respuesta correcta paso a paso |
| 7. Práctica con feedback | ⚠️ Protocolo de emergencia fuerte y concreto, pero sin mecanismo de práctica/feedback |
| 8. Evaluación formativa | ❌ No existe — segunda temática sin ningún checklist |
| 9. Aplicación/síntesis | ✅ Bien resuelta, con 1 inconsistencia de audiencia (paso 02 del protocolo) |
| 10. Recursos y cierre | ✅ La mejor sección de ayuda/emergencia del sitio, con listado de fuentes completo |

Esta temática tiene contenido de calidad genuinamente alta (contexto, contenido core, y sobre todo recursos de ayuda), pero le pesan dos problemas de gravedad distinta: la ausencia total de evaluación (compartida con `ia-etica-ciudadania`) y, más urgente de corregir, el bug real de audiencia en el Hero y en 2 secciones más, que afecta directamente a la mitad de los usuarios de la plataforma.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias y bugs de audiencia
1. El Hero (Sección 1) y la tarjeta de "Fraudes Híbridos Sintéticos" (Sección 3) están escritos en lenguaje 100% docente-voiced sin ninguna variante de audiencia, pese a que la temática está clasificada para docentes Y familias — el usuario que selecciona "familias" lee "tus estudiantes", "cuerpo docente", "entorno escolar" en el párrafo más prominente de toda la página y "redes sociales del estudiante"/"Desafío en las aulas" en la línea de tiempo histórica.
2. Corrección de clasificación técnica: `AULA_ROL` no se consume vía el componente compartido `<NotaAudiencia>` (Group B canónico) sino con un ternario manual inline en el propio componente — mismo resultado visual, pero no reutiliza el componente ni su comportamiento de "sin fallback, se oculta si no hay nota" (acá siempre hay valor, porque cae a `notaDocente`). Si el rediseño busca consistencia estructural con el resto del sitio, convendría migrar esto al componente real `<NotaAudiencia>`.
3. 1 de los 4 pasos del Protocolo de Acción (paso 02, "Preservación de Evidencia Digital") no tiene variante familias pese a que sus 3 pasos hermanos sí la tienen — inconsistencia dentro de la única sección que sí trabaja el patrón de audiencia.
4. El header del carrusel de recursos (Sección 9) es fijo, sin variante de audiencia ("Recurso Didáctico Proyectable · Láminas Educativas para Clases y Talleres") — mismo patrón de inconsistencia ya señalado en la auditoría de `alfabetizacion-mediatica`.
5. La "Línea de Tiempo Interactiva" (Sección 3) no tiene ninguna interacción real — es una grilla estática de 3 tarjetas pese a llamarse "interactiva" en el título visible.

### Ausencias estructurales compartidas con otras temáticas
1. Es una de las 2 únicas temáticas auditadas sin ningún `SourceCite` (junto con `ia-etica-ciudadania`) — las fuentes se mencionan con links "Portal Oficial X" inline y un bloque final de 4 tarjetas, sin el patrón de cita+autor+nota+badge "sin verificar" del resto del sitio.
2. Sin checklist interactivo (como `ia-etica-ciudadania`) — el único progreso registrado es el botón manual de "marcar como completada", sin ningún ejercicio de autoevaluación pese a que el contenido se presta naturalmente a uno.

### Fuentes sin fecha/período específico
1. "+34.000 denuncias tramitadas" (Sección 5, UFECI) y "incrementos interanuales constantes superiores al 200%" no tienen período/fecha específica citado (¿de qué año a qué año?) — a diferencia del rigor de citar años exactos visto en otras temáticas (p. ej. `alfabetizacion-digital` con INDEC Q4 2023).

### Fuentes bien atribuidas y completas
1. Kevin Mitnick (2002, *The Art of Deception*) — cita sólida y bien atribuida en el Marco Conceptual.
2. UFECI, BCRA, CENAVID — las 3 fuentes institucionales citadas inline SÍ coinciden con el listado final de "Fuentes Oficiales Citadas", sin faltantes — mismo logro que `alfabetizacion-mediatica`, y contraste positivo frente a 4 de las 6 auditorías anteriores donde sí faltaban entradas.
2. Las líneas de ayuda (Línea 149, 137, 102, 101, División Delitos Telemáticos de Tucumán) no tienen entrada en el listado de "fuentes citadas" — pero esto es coherente con el propósito de la sección, ya que son canales de contacto/denuncia, no fuentes documentales.

### Otros hallazgos de contenido
1. Es la única de las temáticas auditadas con imagen de stock en el Hero (aparte de `hiperconectividad-digital`, que tiene una en la sección de Identidad) — vale la pena decidir en el rediseño si se reemplaza por una infografía o ilustración propia, consistente con el resto del sitio.
2. Los 3 ejemplos de mensajes de estafa (Sección 6) son ilustrativos/ficticios, no casos documentados con fuente — está bien como recurso pedagógico, pero conviene que quede claro que no son capturas reales, para no generar expectativa de verificabilidad que no aplica.

### Qué se podría agregar
1. Objetivo de aprendizaje explícito, general y por sección.
2. Resumen ejecutivo de 3 líneas, anticipando el protocolo de emergencia y los canales de denuncia.
3. Variante familias para el párrafo del Hero, el badge flotante de la imagen, y la tarjeta de Fraudes Híbridos (Sección 3) — la corrección más urgente de esta temática.
4. Un caso modelado de punta a punta del lado de la defensa (mensaje sospechoso → verificación → decisión correcta), no solo ejemplos del ataque.
5. Checklist de autoevaluación de reconocimiento de señales, aprovechando que el contenido ya está estructurado en listas claras (motores psicológicos, modalidades, pasos del protocolo).
6. Fecha/período específico para las cifras de la Sección 5 (denuncias UFECI, incremento interanual).
7. Interactividad real para la "Línea de Tiempo" (hover-reveal, expansión), o renombrarla si se mantiene estática.
8. Variante familias para el header del carrusel de recursos.
9. Variante familias para el paso 02 del Protocolo de Acción (única inconsistencia dentro de la sección 8).

### Qué se podría simplificar, quitar o reordenar
1. Migrar `AULA_ROL` al componente compartido `<NotaAudiencia>` para consistencia estructural con el resto del sitio (Group B canónico), si el rediseño busca unificar patrones de audiencia entre temáticas.
2. Evaluar si el "Protocolo de Emergencia en 5 Minutos" debería tener mayor visibilidad/adelanto desde el Hero, dado su alto valor práctico — hoy solo es accesible vía jump link `#emergencia`, sin ningún adelanto en el resumen o gancho inicial.

---

## Fortalezas a preservar en el rediseño
1. La Sección 10 (Canales Oficiales de Denuncia, 6 líneas de ayuda completas) — el mejor recurso de utilidad práctica/emergencia de las 6 temáticas auditadas, candidato claro a replicarse en otras temáticas de riesgo (violencia digital, ciberacoso).
2. El "Protocolo de Emergencia en 5 Minutos" — estructura cronometrada, concreta y accionable, un patrón de alto valor para cualquier temática que trate una situación de crisis inmediata.
3. Los ejemplos reales de mensajes de estafa por modalidad (Sección 6) — buen recurso de reconocimiento de patrones, aunque conviene aclarar que son ilustrativos.
4. El listado final de fuentes coincide completamente con las citas inline — mismo estándar alcanzado por `alfabetizacion-mediatica`, prueba adicional de que el problema de fuentes faltantes es resoluble de forma sistemática.
5. El mensaje de desdramatización del error en la Sección 8 ("caer en una trampa digital no es motivo de castigo, sino una situación que requiere contención inmediata") — buena práctica pedagógica a mantener y quizás reforzar en otras temáticas de riesgo.
