# Violencia Digital en Infancias y Adolescencias — Contraste contra el framework profesional de 10 pasos

Base: `violencia-digital-infancias-audit.md` (auditoría de `app/violencia-digital-infancias/violencia-infancias-content.tsx`, 1363 líneas, y `lib/violencia-digital-infancias-content.ts`, 126 líneas).

Nota de contexto: esta es la temática técnicamente mejor alineada de las 3 del grupo "Violencia Digital" (es la única que usa `resolveTexto`/Group A real), tiene el listado de fuentes más limpio (sin repeticiones, sin discrepancias) y un elemento único en todo el sitio: un botón de llamada directa (`tel:137`). Pero comparte con `ia-etica-ciudadania` y `estafas-digitales` la ausencia total de checklist interactivo, y tiene una inconsistencia notable: las 2 estadísticas más prominentes visualmente de la página no tienen ninguna fuente, en contraste con el resto del contenido que cita todo meticulosamente.

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

**Qué hay hoy:** No existe. El Hero tiene badge + H1 + párrafo intro (con cierre por audiencia) + 2 CTAs + pills de datos rápidos + panel lateral glassmorphism.

**Qué falta:** un mapa breve que anticipe la estructura real (identificar amenazas → reconocer señales de alerta → protocolo de 5 pasos → dónde denunciar), dado que la página combina contenido conceptual, un selector de tabs interactivo y un protocolo de acción sin ningún adelanto previo.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, en ningún punto de las 10 secciones. Mismo vacío que la mayoría de las temáticas auditadas.

**Qué falta:** objetivo general (ej: "vas a poder identificar las 4 principales amenazas digitales hacia la infancia, reconocer señales de alerta en el comportamiento de un chico o chica, y aplicar el protocolo de 5 pasos si sospechás de una situación de riesgo").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El párrafo intro del Hero tiene una frase de cierre emocionalmente efectiva y bien adaptada por audiencia ("desde el aula/en casa, muchas veces usted es la primera persona en posición de notar que algo cambió").

**Problema:** el panel lateral "Alerta activa · Protocolo de protección" muestra 4 porcentajes (Grooming 88%, Ciberbullying 72%, Difusión no consentida 61%, Exposición a riesgos 94%) puramente decorativos, sin fuente y sin repetirse en ningún otro punto de la página — mismo patrón de "cifra de impacto sin atribuir en el elemento más visible" ya detectado en el Hero de `hiperconectividad-digital`. Dado que el resto de la temática sí cita con mucho cuidado cada estadística (ver Paso 4), este contraste es más notorio acá que en otras temáticas.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección "Marco Legal" (Ley 26.904, Código Penal Art. 131, con cita textual exacta de la pena; Día Nacional de la Lucha Contra el Grooming) + sección "Origen — ¿Qué es la Línea 137?" (historia del programa desde 2006, coordinación de la Dra. Eva Giberti, alcance específico de la línea).

Bien resuelto: ambas secciones son concisas, bien fundamentadas y cumplen exactamente la función de contexto — dan el marco legal e institucional necesario sin convertirse en una digresión. Nivel de rigor comparable al de `violencia-digital` (Ley 27.736/Olimpia Coral Melo), aunque acá el tono es más legal-institucional que narrativo.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Sección "Amenazas" — 4 tipos (Grooming, Ciberbullying, Difusión no consentida, Exposición a riesgos), cada uno con su propia descripción y nivel de riesgo etiquetado (tag). Solo la tarjeta de Grooming tiene `SourceCite` propio (reutiliza la cita legal ya vista).

Bien dimensionado: 4 ítems en una sola lista clara — ni sobrecargado ni disperso, similar en calidad organizativa a las 6 modalidades de `violencia-digital` o las 3 de `estafas-digitales`.

**Detalle a mejorar:** solo 1 de las 4 tarjetas tiene fuente propia (Grooming, por la cita legal) — las otras 3 (Ciberbullying, Difusión no consentida, Exposición a riesgos) son descripciones sin atribución específica, aunque son afirmaciones de carácter más descriptivo que estadístico.

---

## Paso 6 — Modelado

**Qué hay hoy:** La pestaña "Señales de alerta" (3 grupos: cambios emocionales, comportamiento con dispositivos, aislamiento social) describe qué observar, pero no modela ningún caso concreto de cómo se ve esa señal en la práctica ni cómo iniciar una conversación a partir de notarla.

**Problema:** es una lista de indicadores a reconocer, no una demostración de "así se ve/así se actúa" — a diferencia de `violencia-digital`, que sí modelaba con rutas de menú exactas ("Configuración → Cuenta → Verificación en dos pasos"), acá el protocolo da instrucciones generales ("Escuche a la víctima y ofrezca apoyo emocional incondicional") sin un ejemplo aplicado de cómo se vería esa escucha en un diálogo real.

**Qué falta:** un ejemplo modelado de una conversación inicial bien manejada (frases concretas que sí/no decir), similar en función a lo que `alfabetizacion-mediatica` hacía con sus casos de estudio completos.

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** El selector de tabs "Señales de alerta"/"Protocolo de acción" es interactivo en el sentido de navegación (`AnimatePresence` entre paneles), pero puramente de lectura — no hay ninguna tarea que el usuario deba completar ni forma de marcar qué señales reconoce en su propio entorno.

**Qué falta:** dado que las "Señales de alerta" ya están organizadas en 3 grupos claros de 4 ítems cada uno, convertir esto en un checklist marcable (aunque sea privado, sin implicar diagnóstico) sería una extensión natural y de bajo esfuerzo — algo como "marcá las señales que reconocés" en vez de solo leerlas.

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada. Sin `computeProgress`, sin checklist — el único mecanismo de progreso es el botón manual "marcar como completada".

Es la tercera de las 9 temáticas auditadas hasta ahora sin ningún checklist interactivo (junto con `ia-etica-ciudadania` y `estafas-digitales`). Con el mismo agravante que en `estafas-digitales`: el contenido (4 amenazas, 3 grupos de señales de alerta, 5 pasos de protocolo) está estructurado de forma que se presta naturalmente a un ejercicio de autoevaluación, lo que hace este hueco particularmente fácil de resolver en un rediseño.

**Qué falta:** como mínimo, un checklist de reconocimiento de señales; idealmente, un quiz breve que presente un escenario (ej: "un chico apaga la pantalla de golpe cuando te acercás, ¿qué tipo de señal es esta?") con feedback.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** La sección "Magnitud del Problema" cierra con `CIERRE_SIGNIFICADO`, la única pieza de esta sección con variante de audiencia — conecta el crecimiento de denuncias (de 8.840 a 120.162 en 8 años) con el rol del adulto de referencia ("Un docente/una familia que conoce el protocolo es parte de ese cambio").

**Funcional, pero delgado como síntesis:** es un cierre de una sola oración, no una sección de aplicación dedicada como el "Qué significa esto para el aula/casa" que sí tienen otras temáticas (`ciudadania-digital`, `huella-digital`, `alfabetizacion-digital`, `alfabetizacion-mediatica`). Comparado con esas, acá la conexión entre el contenido y el rol específico del usuario es más breve y menos desarrollada.

**Qué falta:** una sección de síntesis más completa que retome explícitamente las 4 amenazas, las señales de alerta y el protocolo, conectándolos con el rol cotidiano del docente/familia — en vez de solo la única oración de cierre actual.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Temas Relacionados (3 tarjetas cruzadas) + Infografía con lightbox + Carrusel de 7 láminas (header sí varía por audiencia) + Fuentes Citadas (7, listado completo sin discrepancias) + CTA final con botón `tel:137` — único link de llamada directa de todo el sitio auditado hasta ahora.

**Fortalezas destacables:**
- El header del carrusel SÍ se adapta por audiencia ("Material para el aula" / "Material para la familia") — a diferencia de `alfabetizacion-mediatica`, `estafas-digitales` y `violencia-digital`, cuyos carruseles tienen header fijo. Es el patrón correcto, consistente con `ciudadania-digital`/`huella-digital`/`hiperconectividad-digital`.
- El listado final de fuentes reutiliza directamente los mismos objetos citados inline — por diseño, sin discrepancia posible, mismo logro estructural que `violencia-digital`.
- El botón `tel:137` en el CTA final es el único de su tipo en todo el sitio — reduce fricción real para alguien en una situación de emergencia, comparado con solo mostrar el número como texto.

**Problema, ya señalado antes pero relevante en este cierre:** las 2 estadísticas más prominentes de la página (61% edad de inicio, "1/3 tuvo encuentros con personas conocidas por internet") no tienen entrada en este listado final ni cita inline en ningún punto — son las únicas afirmaciones numéricas de toda la temática sin ninguna atribución.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe |
| 3. Gancho | ⚠️ Buen cierre emocional, pero panel decorativo con 4 cifras sin fuente |
| 4. Contexto | ✅ Bien resuelto — marco legal e institucional conciso y bien fundamentado |
| 5. Contenido core progresivo | ✅ Bien organizado — 4 amenazas, aunque solo 1 con fuente propia |
| 6. Modelado | ⚠️ Lista de señales a observar, sin caso modelado de diálogo o acción |
| 7. Práctica con feedback | ⚠️ Tabs interactivos, pero puramente informativos, sin tarea ni marcado |
| 8. Evaluación formativa | ❌ No existe — tercera temática sin ningún checklist |
| 9. Aplicación/síntesis | ⚠️ Solo una oración de cierre, más delgada que en otras temáticas |
| 10. Recursos y cierre | ✅ Fuerte — carrusel adaptado, fuentes sin discrepancia, botón tel: único en el sitio |

Esta temática combina buena base legal/institucional y un cierre de recursos sólido con un vacío consistente en toda la mitad práctica del framework (modelado, práctica, evaluación) — el mismo patrón que se repite en casi todas las temáticas auditadas, aunque acá se ve agravado por la ausencia total de checklist pese a que el contenido se presta particularmente bien a uno.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. Las 2 estadísticas más prominentes visualmente de la página (61% edad de inicio y "1/3 tuvo encuentros con personas conocidas por internet") no tienen ninguna fuente atribuida, ni en la tarjeta donde aparecen ni en el listado final de "Fuentes Citadas" — contrasta fuertemente con el resto de la temática, que cita meticulosamente cada estadística de la sección "Magnitud del problema" (UNICEF, Ministerio de Justicia, UNICEF-UNESCO).
2. El panel "Alerta activa" del Hero tiene 4 porcentajes puramente decorativos (Grooming 88%, Ciberbullying 72%, Difusión no consentida 61%, Exposición a riesgos 94%) sin fuente ni repetición en ningún otro punto de la página — mismo patrón de "cifra decorativa sin atribuir" ya detectado en el Hero de `hiperconectividad-digital`.
3. Solo 2 de los 5 pasos del Protocolo de Acción tienen variante de audiencia (pasos 1 y 5) — los pasos 2, 3 y 4 (preservar evidencia, bloquear y reportar, denunciar formalmente) son fijos y neutros, lo cual es razonable dado su contenido operativo, pero vale la pena confirmar en el rediseño si esa es una decisión deliberada o simplemente los únicos 2 pasos que originalmente tenían lenguaje docente-voiced explícito.
4. Es la única de las 3 temáticas del grupo "Violencia Digital" que sí usa `resolveTexto`/Group A real — a diferencia de `violencia-digital` (ternario manual, sin `resolveTexto`) y `estafas-digitales` (mixto). Esto la hace la más alineada estructuralmente con el patrón Group A del resto del sitio, pese a pertenecer al mismo grupo temático que las otras 2 con patrones distintos.

### Ausencias estructurales
1. Sin checklist interactivo (como `ia-etica-ciudadania`, `estafas-digitales`, y parcialmente `violencia-digital` que sí tiene uno) — el único progreso es el botón manual de "marcar como completada", pese a que el contenido (checklist de señales de alerta, protocolo de 5 pasos) se presta naturalmente a un ejercicio de autoevaluación tipo "¿reconocés estas señales en tu entorno?".

### Fortalezas de fuentes
1. Cada una de las 7 fuentes citadas se usa exactamente una vez — a diferencia de `hiperconectividad-digital` (UNICEF España reutilizada 4+ veces) o `alfabetizacion-mediatica` (UNESCO citada 7 veces), acá no hay ninguna fuente "ancla" reutilizada, lo que habla de una base de datos más diversa pero también de menor densidad de evidencia por afirmación específica.
2. El listado final de fuentes es, igual que en `violencia-digital`, exactamente la misma colección de objetos citados inline (`FUENTES_CITADAS` reutiliza `.source` de las mismas constantes usadas arriba) — por construcción, no puede haber la inconsistencia detectada en `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital` e `ia-etica-ciudadania` entre lo citado en el cuerpo y lo listado al final.
3. Ninguna fuente marcada `unverified: true` — las 7 entradas tienen URL y se presentan como confirmadas, igual que en `violencia-digital`.

### Otros hallazgos de contenido
1. Único link `tel:137` de todo el sitio auditado hasta ahora — un CTA de llamada directa en el cierre de la página, funcionalidad de acceso rápido a ayuda que no se repite en ninguna otra temática (ni siquiera en `violencia-digital`, que menciona la Línea 137 solo como texto).
2. `useCountUp` (contador animado del 61%) es un mecanismo interactivo compartido conceptualmente con `alfabetizacion-digital` (que también tiene un hook de conteo animado para su banner de 5 estadísticas del Hero) — implementaciones separadas y ligeramente distintas (con/sin `prefers-reduced-motion`), vale la pena evaluar si conviene unificarlas en un hook compartido si el rediseño busca consistencia entre temáticas.

### Qué se podría agregar
1. Objetivo de aprendizaje explícito, general y por sección.
2. Resumen ejecutivo de 3 líneas, anticipando amenazas → señales → protocolo → dónde denunciar.
3. Fuente para las 2 estadísticas más prominentes de la página (61%, "1/3 tuvo encuentros"), o su reformulación como estimación si no hay dato confirmado detrás.
4. Fuente o nota aclaratoria para el panel decorativo "Alerta activa" del Hero, o su eliminación si los 4 porcentajes no representan datos reales.
5. Un caso modelado de conversación inicial bien manejada (frases concretas), complementando la instrucción general del Paso 1 del protocolo.
6. Checklist marcable para las "Señales de alerta" (3 grupos ya organizados, listos para convertirse en checklist).
7. Quiz breve con escenarios de reconocimiento de señales, con feedback explicativo.
8. Una sección de síntesis más desarrollada que retome amenazas + señales + protocolo conectados al rol cotidiano del adulto, en vez de solo la oración de cierre actual.
9. Fuente propia para las 3 tarjetas de "Amenazas" que hoy no la tienen (Ciberbullying, Difusión no consentida, Exposición a riesgos).

### Qué se podría simplificar, quitar o reordenar
1. Evaluar si conviene unificar el hook `useCountUp` con la implementación de `alfabetizacion-digital`, si el rediseño busca consistencia técnica entre temáticas.
2. Confirmar si la decisión de que solo los pasos 1 y 5 del protocolo varíen por audiencia es deliberada, o si los pasos 2-4 deberían tener al menos alguna adaptación de tono aunque el contenido operativo se mantenga igual.

---

## Fortalezas a preservar en el rediseño
1. El botón `tel:137` en el CTA final — único mecanismo de llamada directa del sitio, patrón de alto valor para replicar en cualquier temática con una línea de ayuda de emergencia (`estafas-digitales`, `violencia-digital`).
2. El header del carrusel adaptado por audiencia — el patrón correcto que otras temáticas del sitio (`alfabetizacion-mediatica`, `estafas-digitales`, `violencia-digital`) todavía no siguen.
3. El diseño del listado de fuentes que reutiliza los mismos objetos citados inline — mismo patrón recomendado ya en la auditoría de `violencia-digital`, con doble confirmación acá de que es una solución técnica replicable y efectiva.
4. La solidez del Marco Legal (cita textual exacta de la ley, con artículo y fechas de sanción/promulgación) — buen estándar de precisión legal a mantener en cualquier temática que involucre normativa.
5. La organización de "Señales de alerta" en 3 grupos claros y temáticamente coherentes (emocional, comportamiento con dispositivos, aislamiento social) — buena base de contenido, lista para convertirse en checklist o quiz con relativamente poco esfuerzo adicional.
