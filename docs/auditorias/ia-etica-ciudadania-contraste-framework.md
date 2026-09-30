# IA, Ética y Ciudadanía Digital — Contraste contra el framework profesional de 10 pasos

Base: `ia-etica-ciudadania-audit.md` (auditoría de `components/ia-etica-ciudadania-content.tsx`, 2231 líneas en un único archivo — sin `lib/*.ts` separado, sin subcomponentes de sección).

Nota de contexto: esta es la temática más atípica de las 6 auditadas — es la única sin `SourceCite` en absoluto, la única sin ningún checklist interactivo, la única sin `lib/*.ts` propio, y la que cubre el espectro temático más amplio y heterogéneo (ciudadanía digital, economía laboral, filosofía, derecho regulatorio y violencia de género, todo bajo un mismo título). Varios huecos del framework acá no son solo ausencias de diseño instruccional, sino decisiones estructurales de fondo distintas al resto del sitio.

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

**Qué hay hoy:** No existe. El Hero tiene badge + H1 + subtítulo (mixto, con cierre de audiencia) + tags de transición "Sociedad 4.0 → Sociedad 5.0" + 2 CTAs.

**Qué falta:** dado que esta temática cubre 5 dominios muy distintos (alfabetización digital, futuro del trabajo, filosofía, derecho de IA, violencia de género), un resumen ejecutivo acá es más necesario que en cualquier otra — sin él, el usuario no tiene ninguna señal de que va a pasar de un marco de competencias digitales a citas de Levinas y de ahí a estadísticas de violencia de género, saltos temáticos que conviene anticipar.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de las 6 secciones (Hero + 5 secciones numeradas). Mismo vacío total que `hiperconectividad-digital` y `alfabetizacion-digital`.

**Qué falta:** objetivo general de módulo — con el agravante de que, dada la amplitud temática, acá sería particularmente útil para que el usuario entienda que "esto no es un solo tema, son 5 lentes distintas sobre IA y sociedad" (ej: "vas a poder distinguir IA autónoma de no autónoma, identificar los 3 niveles de riesgo del AI Act, y reconocer las 4 formas de violencia digital de género").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El marco "Sociedad 4.0 → Sociedad 5.0" es un gancho conceptual interesante, pero es más abstracto/filosófico que el gancho emocional-concreto de otras temáticas (compárese con el "¿sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo?" de `ciudadania-digital`). Funciona, pero en un registro distinto — más apto para lector ya interesado en el tema que para enganchar a alguien que llega sin urgencia previa.

**Detalle:** no hay ningún dato de impacto inmediato en el Hero (a diferencia de las pills/banners de otras temáticas) — el primer dato fuerte (OIT 375M de empleos) recién aparece en la Sección 2.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** No existe una sección de contexto/historia dedicada, a diferencia de todas las demás temáticas del sitio (que sí tienen su "01 — Historia/Origen"). El único contexto es el marco Sociedad 4.0→5.0 del Hero, que no se desarrolla más allá de ahí.

Esta es una ausencia estructural, no solo de contenido: la temática pasa directamente del Hero a "Sección 1 · Ciudadanía Digital y Alfabetización" sin ningún tramo intermedio que sitúe al lector (¿de dónde viene el concepto de "Sociedad 5.0"? ¿quién lo acuñó? El listado de fuentes finales menciona al Gobierno de Japón/Cabinet Office como origen, pero esa conexión nunca se hace explícita en el cuerpo del texto).

**Qué falta:** una sección de contexto breve que desarrolle el origen de "Sociedad 5.0" (Japón, Cabinet Office) antes de asumir que el lector ya conoce el término.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Secciones 1 a 5: Ciudadanía Digital/Alfabetización (4 competencias C-U-P-C) → IA y Futuro del Trabajo (toggle IA autónoma/no autónoma) → Humanidad Ampliada (3 citas filosóficas) → Ética/Derecho (acordeón + pirámide AI Act) → Violencia Digital y Género (4 tipos + 3 estadísticas).

Este es el contenido core más heterogéneo de las 6 temáticas auditadas. No hay una progresión de "lo simple a lo complejo" dentro de un mismo eje temático — son 5 ensayos temáticamente distintos (educación, economía laboral, filosofía, derecho regulatorio, género) conectados por el paraguas general de "IA y ética", pero sin un hilo conductor explícito que diga por qué el orden es ese y no otro, o cómo se conecta la filosofía de Levinas (Sección 3) con el AI Act europeo (Sección 4). Es un patrón distinto al de sobrecarga de `alfabetizacion-digital` (muchos marcos del mismo tema) — acá el problema es amplitud temática sin hilo narrativo, no exceso de un mismo tipo de contenido.

**Qué falta:** una frase de transición explícita entre cada sección que explique la lógica del orden (ej: "ya vimos qué competencias necesitás — ahora veamos qué es lo que la IA no puede reemplazar, para entender por qué esas competencias importan").

---

## Paso 6 — Modelado

**Qué hay hoy:** Prácticamente ausente. Los paneles de IA Autónoma/No Autónoma dan ejemplos de sistemas (Copilot, vehículos autónomos, trading algorítmico) pero no modelan ninguna acción del usuario. El acordeón de ética/derecho explica marcos regulatorios pero no muestra cómo aplicarlos en un caso concreto.

**Qué falta:** un ejemplo modelado de aplicación real — por ejemplo, cómo se vería ejercer un "derecho ARCO frente a una decisión automatizada" (mencionado en el cierre como acción) paso a paso, o un caso concreto de sesgo algorítmico de género analizado con el marco de la Sección 5.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** No existe ningún mecanismo de práctica. El stepper de "Tres Niveles de Acción" (Personal/Organizativo/Social) lista acciones a tomar, pero es una lista de lectura, no una práctica con confirmación.

**Qué falta:** dado que ni siquiera hay un checklist (ver Paso 8), esto es el vacío más completo de las 6 temáticas en este paso — no hay ni el sustituto parcial de "marcar que lo hice" que sí tienen las demás.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** No existe absolutamente nada — ni quiz, ni checklist de autoevaluación, ni siquiera el `computeProgress` técnico que las otras temáticas usan para llevar cuenta de ítems marcados. El único mecanismo de "progreso" es el botón manual "marcar como completada".

Es la única de las 6 temáticas auditadas sin ningún checklist interactivo — el vacío de evaluación más absoluto de todo el sitio. Ni siquiera hay el sustituto de autorreporte de acción que critica el framework en las otras 5 temáticas (que al menos ofrece una ilusión de seguimiento); acá no hay ningún gesto de evaluación, ni bueno ni malo.

**Qué falta:** como mínimo, un checklist de autoevaluación (siguiendo el patrón del resto del sitio); idealmente, un quiz real dado que el contenido toca marcos regulatorios específicos (niveles de riesgo del AI Act, tipos de violencia digital) que se prestan bien a preguntas de clasificación con feedback.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** El cierre "Tres Niveles de Acción" (Personal/Organizativo/Social) es, paradójicamente, uno de los mejores bloques de aplicación concreta de las 6 temáticas — cada nivel tiene 4 acciones fijas + 1 acción extra por audiencia, con ítems genuinamente accionables ("ejercer derechos ARCO", "crear comités de ética con perspectiva de género e interculturalidad", "exigir marcos regulatorios"). Buena conexión entre la teoría de las 5 secciones anteriores y algo que el usuario puede efectivamente hacer.

**Problema:** sigue siendo una lista de lectura, no una aplicación con feedback (comparte el vacío del Paso 7) — el usuario lee 12-15 acciones posibles sin ningún mecanismo de elegir/marcar/comprometerse con alguna en particular.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Un único bloque final de 6 tarjetas-link (organismo, documento, año, URL) — sin infografía, sin carrusel, sin plantilla accionable, sin ningún otro recurso.

Es el cierre más pobre de las 6 temáticas en variedad de recursos — comparado con la infografía+carrusel+checklist+FAQ+plantilla que suelen tener las demás, acá solo hay una lista de enlaces.

**Problema adicional de calidad:** 2 de los 6 links apuntan a páginas genéricas del organismo en vez del documento específico nombrado (Educ.ar → home del sitio; OEA → página general de la Secretaría de Asuntos Jurídicos, no la Ley Modelo Interamericana citada) — reduce el valor real de "recurso para profundizar".

**Y el problema más grave de toda la temática:** 3 de las estadísticas más citables del cuerpo del texto (ONU Mujeres 73%, MIT Media Lab 85%, OIT 375M) no tienen entrada en este listado final ni en ningún otro lugar verificable de la página — el lector no tiene forma de confirmar ninguna de las 3 cifras más impactantes que la temática presenta.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe (especialmente necesario acá, dada la amplitud temática) |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Conceptualmente interesante, pero más abstracto que el resto del sitio |
| 4. Contexto | ❌ No existe una sección de contexto dedicada — única temática sin ella |
| 5. Contenido core progresivo | ❌ El más heterogéneo de las 6 — 5 dominios distintos sin hilo narrativo explícito |
| 6. Modelado | ❌ Prácticamente ausente |
| 7. Práctica con feedback | ❌ No existe (ni siquiera el sustituto parcial de checklist) |
| 8. Evaluación formativa | ❌ No existe — única temática sin ningún checklist interactivo |
| 9. Aplicación/síntesis | ✅ El mejor bloque de acciones concretas de las 6, sin mecanismo de feedback |
| 10. Recursos y cierre | ❌ El más pobre de las 6 — solo lista de links, con 3 fuentes clave faltantes |

Esta es la temática con más huecos estructurales del framework de las 6 auditadas. Solo el Paso 9 (Aplicación/síntesis) está genuinamente bien resuelto — el resto oscila entre ausente y parcial. Es además la única con un problema de fondo distinto al resto: no usa `SourceCite` en absoluto, lo cual afecta transversalmente a los Pasos 4, 5, 9 y 10.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias y ausencias estructurales
1. Es la única de las temáticas auditadas hasta ahora sin ningún componente `SourceCite` — no hay atribución punto a punto entre una afirmación y su fuente en el cuerpo del texto; toda la atribución vive en un bloque final de 6 tarjetas-link genéricas, desconectadas de las afirmaciones específicas que aparecen a lo largo de las 5 secciones. Rompe el patrón de "cada dato tiene su cita al lado" seguido consistentemente en las otras 5 temáticas auditadas.
2. Es la única temática auditada sin ningún checklist interactivo — no hay `computeProgress` en `useTematicaProgress`, y el único mecanismo de "progreso" es el botón manual de "marcar como completada".
3. Sin sidebar `TocNav` ni `ReadingProgressBar` compartido — tiene su propia `ScrollProgressBar` (barra superior de progreso de scroll), pero no hay forma de saltar directamente a una sección desde un índice.
4. Es la única temática auditada sin `lib/*.ts` propio — todo (tipos, datos, estilos CSS-in-JS, JSX) vive en un único archivo de 2231 líneas.
5. Solo 8 constantes `AudienciaTexto` en total, la mayoría de 1-2 líneas insertadas dentro de párrafos mayormente fijos — la proporción de contenido variable por audiencia es la más baja o comparable a la más baja de las 6 temáticas auditadas hasta ahora (similar a `hiperconectividad-digital`). Las 4 secciones centrales (2, 3, 4, 5) son prácticamente 100% fijas, salvo un cierre de 1 línea en la Sección 2.
6. El campo `porcentaje` de `nivelesRiesgo` (52%/75%/100%) es puramente decorativo (controla el ancho visual de la barra en la pirámide) y no representa ningún dato real — nombre de campo potencialmente confuso si se reutiliza fuera de este contexto visual específico.

### Redundancias
1. El dato "OIT: 375 millones de empleos en transición para 2030" se repite en 2 secciones distintas (Sección 2 "IA y Futuro del Trabajo" y Sección 5 "Violencia Digital y Género") sin fuente verificable en ninguna de las 2 apariciones ni en el listado final.

### Fuentes sin bibliografía completa
1. Las 3 citas filosóficas (Merleau-Ponty, Levinas, Maturana) no incluyen referencia bibliográfica (libro/obra, año) — a diferencia del tratamiento riguroso de citas académicas en `alfabetizacion-digital`/`alfabetizacion-mediatica`, acá solo se nombra al filósofo. Sería una mejora fácil de verificabilidad para el rediseño.

### Estadísticas citadas sin fuente verificable en ningún lugar de la página
1. ONU Mujeres (2023) — 73% de mujeres han experimentado violencia en línea (Sección 5).
2. MIT Media Lab (2019) — 85% de datasets de reconocimiento facial dominados por hombres de piel clara (Sección 5).
3. OIT — 375 millones de empleos en transición para 2030 (Secciones 2 y 5, citada 2 veces).

Ninguna de estas 3 fuentes, pese a ser las estadísticas más citables de toda la página, tiene entrada en el listado final de "Fuentes y Organismos de Referencia" ni link verificable en ningún otro lugar.

### Listado de fuentes — problemas de calidad de los links
1. El link de Educ.ar apunta al dominio general (`https://www.educ.ar`), no a un documento específico del "Marco de Ciudadanía Digital" nombrado.
2. El link de OEA apunta a la página general de la Secretaría de Asuntos Jurídicos (`https://www.oas.org/es/sla/ddi/`), no a la Ley Modelo Interamericana específica citada.

### Fuentes bien atribuidas en el listado final
UNESCO (Recomendación sobre la Ética de la IA, 2021), Unión Europea (AI Act, Reglamento 2024/1689; Directiva de Responsabilidad por Productos 2024/2853), Gobierno de Japón/Cabinet Office (Society 5.0) — links específicos y verificables.

### Único contenido de utilidad práctica/emergencia
La mención de la Línea 144 (violencia de género en Argentina, disponible 24/7, gratuita y confidencial) en la Sección 5 es el único contenido de este tipo en toda la temática, y de hecho en todo el sitio auditado hasta ahora — vale la pena preservar y quizás destacar más este tipo de información de ayuda concreta en el rediseño, incluso replicarlo como patrón en otras temáticas que toquen temas sensibles.

### Qué se podría agregar
1. Objetivo de aprendizaje explícito a nivel de módulo, con foco en anticipar la amplitud temática.
2. Resumen ejecutivo de 3 líneas, particularmente importante acá dado el salto entre 5 dominios distintos.
3. Una sección de contexto/historia que desarrolle el origen de "Sociedad 5.0" (Japón, Cabinet Office).
4. `SourceCite` real para cada afirmación factual del cuerpo, empezando por las 3 estadísticas sin fuente verificable (ONU Mujeres, MIT Media Lab, OIT).
5. Referencia bibliográfica completa (obra, año) para las 3 citas filosóficas.
6. Al menos un checklist de autoevaluación, siguiendo el patrón del resto del sitio.
7. Idealmente, un quiz de comprensión dado que el contenido regulatorio (niveles de riesgo AI Act, tipos de violencia digital) se presta bien a preguntas de clasificación.
8. Corregir los 2 links genéricos del listado de fuentes (Educ.ar, OEA) para que apunten al documento específico nombrado.
9. Frases de transición explícitas entre secciones para dar hilo narrativo a los 5 dominios temáticos.

### Qué se podría simplificar, quitar o reordenar
1. Evaluar si el alcance temático (5 dominios distintos) debería dividirse en 2 temáticas más enfocadas, o si se mantiene como panorama amplio intencional — decisión de fondo antes de cualquier rediseño de contenido.
2. Renombrar el campo `porcentaje` de `nivelesRiesgo` a algo que refleje su función real decorativa (ej. `anchoVisual`), para evitar confusión futura si se reutiliza el dato.

---

## Fortalezas a preservar en el rediseño
1. El cierre "Tres Niveles de Acción" (Personal/Organizativo/Social) — el mejor bloque de acciones concretas y accionables de las 6 temáticas auditadas, con buena diferenciación por audiencia en el ítem extra de cada nivel.
2. La mención de la Línea 144 como recurso de ayuda práctica inmediata — patrón único y valioso a replicar en otras temáticas con contenido sensible.
3. La estructura de "acordeón + pirámide interactiva" para explicar niveles de riesgo del AI Act es un buen mecanismo visual para contenido regulatorio complejo, aun cuando el campo `porcentaje` necesite renombrarse.
4. El marco conceptual "Sociedad 4.0 → Sociedad 5.0" como paraguas narrativo es una idea sólida — el problema no es el marco en sí, sino que no se desarrolla lo suficiente como contexto antes de asumir que el lector ya lo conoce.
