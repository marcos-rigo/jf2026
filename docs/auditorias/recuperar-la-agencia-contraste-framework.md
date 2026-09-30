# Recuperar la Agencia — Contraste contra el framework profesional de 10 pasos

Base: `recuperar-la-agencia-audit.md` (auditoría de la entrada `recuperar-la-agencia` en `lib/libres-bajo-influencia-data.ts` y `components/tematicas/RecuperarLaAgenciaPage.tsx`, 1674 líneas).

Nota de contexto: esta temática tiene el hallazgo de audiencia más grave del grupo — es la única con 3 audiencias asignadas (`docentes`, `familias`, `ninas-ninos-adolescentes`), pero la audiencia niño/niña/adolescente no tiene ningún contenido propio, cayendo exactamente al mismo texto que "docentes" o ausencia de selección. Es el mismo patrón de "audiencia sin voz propia" ya detectado para "mujeres" en `violencia-digital`, con el agravante de que acá se trata de la audiencia final real de toda la plataforma educativa. También tiene el elemento interactivo más singular del sitio — un ejercicio de reflexión con input de texto libre del usuario — y comparte el bug del quiz con `algoritmos-perfilado` y `caldos-de-cultivo`.

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

**Qué hay hoy:** No existe. Tampoco hay índice tappeable.

**Qué falta:** con 15 bloques que incluyen 5 módulos numerados más Toolkit, WRAP y Poliedro, un mapa inicial ayudaría especialmente acá, dado que el Módulo 04 (control coercitivo) es temáticamente distante del resto y el usuario se beneficiaría de saber de antemano que la temática cubre ese salto.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de la página.

**Qué falta:** objetivo general (ej: "vas a poder aplicar el protocolo Pausar-Preguntar-Elegir frente a un impulso digital, distinguir mediación activa de vigilancia, y reconocer señales de erosión de agencia en distintos contextos").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El ticker de 3 estadísticas del Hero (55% de autonomía corporal limitada en mujeres de países en desarrollo, 97% de apps con patrón oscuro, 5% alcanza el Estadio 6 de Kohlberg).

**Problema de coherencia:** el dato del 55% (UNFPA, autonomía corporal) es temáticamente distante del resto de la página (que trata sobre agencia digital) y no se retoma en ninguna sección posterior — es el único de los 3 datos del ticker que queda aislado, sin desarrollo posterior, lo cual debilita su función de gancho porque genera una expectativa (de contenido sobre autonomía corporal/derechos reproductivos) que la página no cumple hasta mucho más adelante y de forma tangencial (dentro del listado de fuentes).

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Introducción "La agencia como construcción" — definición de Bandura, concisa, más un bloque adicional fijo sobre la autonomía como "eje estratégico de la responsabilidad individual".

Bien resuelto, de proporción similar a los mejores contextos del grupo (`caldos-de-cultivo`, `algoritmos-perfilado`) — no sobrecarga con autores desde el inicio, deja esa densidad para los módulos siguientes.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Módulo 01 (Kant, Piaget, Kohlberg, Bourdieu vs. Giddens — 4 tarjetas filosóficas/psicológicas) + Módulo 02 (comparación Agencia vs. Autonomía + 3 necesidades SDT + caso de Sofía) + las 3 secciones base (Pausar-Preguntar-Elegir, Leer hacia los costados, Acompañar no es vigilar) + Módulo 03 (Nudges vs. patrones oscuros — Thaler/Sunstein, Lessig, Zuboff) + Módulo 04 (control coercitivo — Evan Stark, DARVO) + Módulo 05 (Dewey, UNESCO, Livingstone + Poliedro de 7 caras).

Es, junto con `caldos-de-cultivo` y `diseno-persuasivo-patrones-oscuros`, de los contenidos core más sobrecargados de todo el sitio — entre los 5 módulos y las 3 secciones base, el usuario atraviesa al menos 15 autores/marcos distintos (Kant, Piaget, Kohlberg, Bourdieu, Giddens, Bandura, Ryan & Deci, Caulfield, Livingstone, Thaler & Sunstein, Lessig, Zuboff, Kahneman, Evan Stark, Dewey, UNESCO).

**El problema más grave de este paso, y el más serio de toda la temática:** el Módulo 04 (Control Coercitivo y Abuso Invisible) es temáticamente muy distante del resto de la página — no hay ninguna transición explícita que justifique el salto de "agencia frente a interfaces digitales" a "abuso doméstico y DARVO", más allá de la palabra compartida "agencia". Es contenido válido y bien fundamentado en sí mismo, pero su inclusión acá, sin puente narrativo, rompe la progresión del resto de la temática y plantea la pregunta de si pertenece más naturalmente a `violencia-digital` o si necesita una introducción propia que justifique por qué está en esta temática específicamente.

---

## Paso 6 — Modelado

**Qué hay hoy:** El Simulador "Pausar, Preguntar, Elegir" — 3 escenarios (redes sociales/scroll infinito, e-commerce/urgencia falsa, algoritmo de noticias/sensacionalismo), cada uno mostrando arquitectura del engaño → reacción impulsiva típica → acción de agente recomendada.

Buen modelado por contraste (impulso vs. respuesta consciente), en la misma línea que los mejores simuladores del grupo — aunque los 3 pasos del protocolo (Pausar/Preguntar/Elegir) tienen contenido genérico que no cambia según el escenario elegido (salvo el paso "Elegir"), lo cual reduce un poco el valor de tener 3 escenarios distintos si 2 de los 3 pasos son siempre el mismo texto.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El mismo simulador da feedback fijo ("✓ Agencia recuperada"). Pero el elemento más destacable es el "Toolkit de Recuperación Decisional" (`DecisionToolkit`) — el usuario escribe su propio dilema en un textarea, define 2 opciones propias, y elige cuál satisface mejor sus valores, generando una "Hoja de decisión agencial" personalizada.

Es el único elemento interactivo de las 5 temáticas del grupo auditadas donde el usuario introduce contenido propio en vez de elegir entre opciones predefinidas. Es una funcionalidad genuinamente distinta — más cercana a un ejercicio de coaching personal que a un widget educativo estándar.

**Limitación real:** nada de lo que el usuario escribe se guarda — se pierde al recargar o navegar. Y el sistema no da feedback evaluativo sobre la decisión en sí (no dice "esta elección parece más alineada con tus valores porque..."), solo resume lo que el usuario ya escribió. Es una herramienta de reflexión guiada, no de práctica con feedback correctivo en el sentido estricto del framework.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Quiz oficial de 10 preguntas, mismo mecanismo compartido. Comparte con `algoritmos-perfilado` y `caldos-de-cultivo` el mismo bug sin corregir: no hay pantalla de bienvenida con el umbral de aprobación, no se muestra el resultado de un intento previo, y la pantalla final no distingue aprobado/no aprobado.

De las 5 temáticas del grupo auditadas, solo `diseno-persuasivo-patrones-oscuros` implementa esto correctamente — 3 de 5 comparten el mismo defecto de interfaz, lo que sugiere que sería más eficiente corregirlo a nivel del componente compartido que temática por temática.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** No existe una sección dedicada de tipo "Qué significa esto para el aula/casa" — mismo vacío estructural que `caldos-de-cultivo`. La variante de audiencia está limitada a `paragraphsFamilias` en solo 2 de las 3 secciones base (la tercera, "Acompañar no es vigilar", no tiene ninguna variante).

Es, junto con `caldos-de-cultivo`, la temática más débil del grupo en este paso — no hay ningún bloque que conecte explícitamente todo lo visto (filosofía de la autonomía, SDT, nudges, control coercitivo, ciudadanía digital) con el rol cotidiano específico del docente o la familia.

**El hallazgo más grave de toda la temática está también acá, aunque técnicamente es un problema de audiencia, no de síntesis:** "ninas-ninos-adolescentes" —la única de las 3 audiencias que representa al destinatario final real de buena parte del contenido educativo de la plataforma— no tiene ningún contenido adaptado. El único chequeo condicional de audiencia en toda la página es `=== 'familias'`; cualquier otra selección, incluida esta, cae al contenido por defecto, escrito en segunda persona genérica sin ninguna adaptación de vocabulario, complejidad o tono pensada para un lector niño, niña o adolescente. Es el mismo patrón estructural que "mujeres" en `violencia-digital` — una audiencia nombrada explícitamente en los datos de la temática, sin ninguna voz propia en el contenido real.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Material de estudio (15 diapositivas + infografía) + Fuentes con botón "Copiar cita" (8 entradas, formato "ficha ampliada" con resumen y concepto clave — funcionalidad exclusiva de esta temática) + cita de cierre triple (3 citas distintas, la más compuesta del grupo).

El botón "Copiar cita" (copia al portapapeles `"{título} - {autor} [Enlace: {url}]"`) es una funcionalidad genuinamente útil para quien quiera reutilizar las fuentes en su propio trabajo — exclusiva de esta temática.

**El problema más grave de rigor bibliográfico de las 5 temáticas del grupo auditadas está acá:** 3 de los 4 autores destacados en `data.authors` del Hero (Mike Caulfield, Albert Bandura, Sonia Livingstone) no tienen entrada propia en el listado final de fuentes — solo UNESCO tiene una entrada indirecta. Y peor aún: 8 autores citados extensamente en el cuerpo con atribución directa (Kant, Piaget, Kohlberg, Thaler & Sunstein, Lessig, Zuboff, Evan Stark, Dewey) tampoco tienen ninguna entrada verificable. El listado de "8 citas verificables" cubre, en la práctica, menos de la mitad de los autores realmente mencionados por nombre en toda la página — la mayor discrepancia entre autores citados y fuentes verificables de las 5 temáticas del grupo.

**Discrepancia editorial a verificar:** el "Poliedro de la Ciudadanía Digital" de esta temática tiene 7 caras, mientras que la descripción de la temática dedicada (`poliedro-ciudadania-digital`) menciona explícitamente "un poliedro de ocho caras" — requiere verificación de cuál es el número correcto.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ El dato del 55% (UNFPA) queda aislado, sin desarrollo posterior |
| 4. Contexto | ✅ Bien resuelto — conciso, sin sobrecarga de autores |
| 5. Contenido core progresivo | ❌ Muy sobrecargado, con el Módulo 04 temáticamente desconectado sin transición |
| 6. Modelado | ✅ Buen simulador de 3 escenarios, aunque 2 de los 3 pasos son siempre genéricos |
| 7. Práctica con feedback | ⚠️ El Toolkit de input libre es único en el sitio, pero sin feedback evaluativo real |
| 8. Evaluación formativa | ⚠️ Mismo bug que algoritmos-perfilado/caldos-de-cultivo — no distingue aprobado/no aprobado |
| 9. Aplicación/síntesis | ❌ Sin sección dedicada, y con el hallazgo de audiencia más grave del sitio |
| 10. Recursos y cierre | ❌ La mayor discrepancia de fuentes del grupo — 11 de ~15 autores citados sin ficha verificable |

Esta temática tiene la funcionalidad más innovadora del grupo (el Toolkit de reflexión personal con input libre) y buen contexto/modelado, pero acumula 3 de los problemas más serios detectados en todo el sitio: la audiencia "ninas-ninos-adolescentes" sin contenido propio, un módulo temáticamente desconectado sin transición, y la mayor brecha entre autores citados y fuentes verificables de las 5 temáticas del grupo.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### El hallazgo más grave: audiencia "ninas-ninos-adolescentes" sin contenido propio
"ninas-ninos-adolescentes" no tiene ningún contenido propio — pese a ser una de las 3 audiencias asignadas a esta temática (única del grupo con 3 audiencias en vez de 2), el único chequeo condicional de audiencia en toda la página es `=== 'familias'`; cualquier otra selección, incluida esta, cae al contenido por defecto sin ninguna adaptación de lenguaje o complejidad pensada para un lector niño/niña/adolescente. Mismo patrón de "audiencia sin contenido propio" ya detectado para "mujeres" en `violencia-digital`.

### Estructura de datos atípica
1. Esta temática tiene solo 3 secciones en `data.sections` (la más corta de las 5 temáticas del grupo auditadas en cuanto a datos base), pero compensa con la mayor cantidad de módulos adicionales hardcodeados fuera de `data` (5 módulos numerados + Toolkit + WRAP + Poliedro) — vale la pena decidir en el rediseño si conviene migrar parte de este contenido "adicional" a la estructura de datos compartida para mayor consistencia con el resto del grupo.
2. Sin `introFamilias` (como `caldos-de-cultivo`) — `data.intro` se usa directo, sin ternario. Ninguna sección tiene `headingFamilias` ni `quoteFamilias`.

### Contenido temáticamente desconectado
1. El Módulo 04 (Control Coercitivo, DARVO, abuso doméstico) es temáticamente muy distante del resto de la temática (agencia frente a interfaces digitales) — no hay transición explícita que justifique el salto de tema, más allá de la palabra compartida "agencia"; vale la pena decidir en el rediseño si este módulo pertenece más naturalmente a `violencia-digital` o si necesita una introducción propia que justifique su inclusión acá.

### Discrepancias numéricas y de contenido
1. El "Poliedro" de esta temática tiene 7 caras, mientras que la descripción de la temática dedicada (`poliedro-ciudadania-digital`) menciona explícitamente "un poliedro de ocho caras" — discrepancia numérica entre el adelanto de esta página y lo que presumiblemente desarrolla la 6ª temática del grupo; requiere verificación editorial.
2. El caso de "Sofía" se reutiliza (en versión resumida) de `subculturas-digitales` sin indicarlo al lector — mismo personaje/escenario narrado con más detalle en la otra temática.

### Fuentes con discrepancias graves
1. Mike Caulfield, Albert Bandura y Sonia Livingstone (3 de los 4 autores de `data.authors` más citados en el cuerpo, junto con UNESCO) NO tienen entrada propia en `SOURCES` — solo UNESCO tiene una entrada indirecta (el link de Farhat apunta al hub de UNESCO). Es la mayor discrepancia entre `data.authors` y el listado final de fuentes de las 5 temáticas del grupo auditadas.
2. Varios autores citados extensamente en el cuerpo pero ausentes de `data.authors` sí tienen entrada en `SOURCES` (Ryan & Deci, Bourdieu/Giddens vía Barri, Martínez Ruiz), pero otros 8 (Kant, Piaget, Kohlberg, Thaler & Sunstein, Lessig, Zuboff, Evan Stark, Dewey) no tienen ninguna entrada verificable en `SOURCES` pese a ser citados extensamente con atribución directa.
3. Ninguna fuente está marcada como "sin verificar" ni tiene ningún indicador `unverified`.

### Bugs y problemas de implementación
1. Comparte con `algoritmos-perfilado` y `caldos-de-cultivo` el mismo gap del quiz oficial (sin `showQuiz`/`previousResult`/`passed`) — de 5 temáticas auditadas, solo `diseno-persuasivo-patrones-oscuros` lo implementa correctamente.
2. El Mini-Test de Evaluación de Agencia Personal no está etiquetado como independiente del progreso real (igual que el mini-test de `caldos-de-cultivo`) — riesgo de que el usuario confunda completar el mini-test con completar la temática.

### Elementos interactivos únicos
1. Único elemento interactivo de todo el grupo con input de texto libre del usuario (`DecisionToolkit`) — el usuario escribe su propio dilema y sus propias opciones, sin que nada se guarde; funcionalidad de reflexión personal única, sin equivalente en las otras 4 temáticas auditadas.
2. Único mecanismo de "copiar cita" al portapapeles (`SourceCard`) — funcionalidad exclusiva de esta temática para el listado de fuentes, ausente en `subculturas-digitales`, `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros` y `caldos-de-cultivo`.

### Qué se podría agregar
1. Resumen ejecutivo breve.
2. Objetivo de aprendizaje explícito.
3. Contenido real para la audiencia "ninas-ninos-adolescentes" — la corrección más urgente de esta temática, dado que es la audiencia final del contenido educativo de la plataforma.
4. Una transición explícita antes del Módulo 04, o su reubicación a `violencia-digital`.
5. Fichas bibliográficas para Caulfield, Bandura y Livingstone, y para los 8 autores citados extensamente sin entrada en `SOURCES`.
6. Verificación y corrección de la discrepancia de caras del Poliedro (7 vs. 8).
7. Indicación al lector de que "el caso de Sofía" ya apareció en `subculturas-digitales`.
8. Conectar `passed`, `showQuiz` y `previousResult` al render del quiz oficial.
9. Etiqueta explícita de "no cuenta para tu progreso" en el Mini-Test de Agencia Personal.
10. Desarrollo posterior del dato de UNFPA (55%) en alguna sección, o su reemplazo por una estadística más directamente relacionada con agencia digital.

### Qué se podría simplificar, quitar o reordenar
1. Recortar o priorizar contenido del Paso 5, dada su sobrecarga (15+ autores/marcos).
2. Migrar los módulos hardcodeados a la estructura de datos compartida (`lib/libres-bajo-influencia-data.ts`) para mayor consistencia técnica con el resto del grupo.
3. Diferenciar más los 3 pasos del protocolo del simulador según el escenario elegido, en vez de mantener contenido genérico en Pausar/Preguntar.

---

## Fortalezas a preservar en el rediseño
1. El Toolkit de Recuperación Decisional (`DecisionToolkit`) — funcionalidad única de reflexión personal con input libre, buen candidato para adaptarse (con persistencia agregada) a otras temáticas que quieran ofrecer un ejercicio verdaderamente personalizado.
2. El botón "Copiar cita" del listado de fuentes — funcionalidad de utilidad genuina, candidata a extenderse al resto del sitio.
3. El formato de "ficha ampliada" de `SourceCard` (tipo, resumen, concepto clave, no solo autor+nota+link) — más informativo que el `SourceCite` estándar del resto del sitio.
4. El Simulador "Pausar, Preguntar, Elegir" con 3 escenarios distintos — buen patrón de modelado por contraste, replicable en otras temáticas del grupo.
