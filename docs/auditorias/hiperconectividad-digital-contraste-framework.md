# Hiperconectividad Digital — Contraste contra el framework profesional de 10 pasos

Base: `hiperconectividad-digital-audit.md` (auditoría de `app/hiperconectividad-digital/hiperconectividad-content.tsx`, 1583 líneas en un único archivo sin subcomponentes de sección, y `lib/hiperconectividad-digital-content.ts`, 132 líneas de citas/fuentes).

Nota de contexto: esta es la temática más distinta de las 3 auditadas hasta ahora. No sigue el patrón de 9 secciones con TOC — es un diseño bespoke de 12 secciones en scroll libre, con mucho menos contenido diferenciado por audiencia (solo 5 de 12 secciones tienen algún fragmento `AudienciaTexto`), y toca contenido clínico sensible (autolesión, ideación suicida) con cifras concretas.

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

**Qué hay hoy:** No existe. El Hero tiene badges + H1 + intro por audiencia + 2 CTAs + 3 "pills" de stats rápidas + panel "Monitor de Riesgo Digital". Las pills (94.8% conectados / Inicio: 11 años / 8h diarias) funcionan como un adelanto de datos, pero no como un mapa de contenidos del tipo "en este informe vas a ver X, Y, Z".

**Qué falta:** dado que esta temática no tiene la estructura de "pasos" que sí tienen `ciudadania-digital`/`huella-digital`, un resumen ejecutivo acá es aún más necesario — con 12 secciones de scroll libre sin TOC, el usuario no tiene ninguna forma de anticipar qué va a encontrar ni cuánto le falta.

---

## Paso 2 — Objetivo de aprendizaje explícito y medible

**Qué hay hoy:** No existe, ni a nivel de módulo ni a nivel de sección. A diferencia de `ciudadania-digital`/`huella-digital`, que al menos tenían un campo "Objetivo" en cada Fase/Paso, esta temática no tiene ningún objetivo declarado en ningún punto de las 12 secciones.

Esto la deja peor posicionada que las dos anteriores en este paso específico — es la única de las 3 auditadas sin ni un solo objetivo parcial.

**Qué falta:** objetivo general (ej: "Al terminar este informe vas a poder: reconocer las señales de alerta de hiperconectividad en un adolescente, entender por qué el diseño de las plataformas explota la vulnerabilidad neurobiológica adolescente, y aplicar los 5 pasos de acompañamiento activo").

---

## Paso 3 — Gancho / por qué importa ahora

**Qué hay hoy:** El más fuerte de los 3 vistos hasta ahora en producción visual — animación de scroll paralaje, glassmorphism, panel de "Monitor de Riesgo Digital" con barras y cifras impactantes. El gancho emocional/visual está muy bien resuelto.

**Problema:** el panel "Monitor de Riesgo Digital" tiene 2 cifras (71% sin normas en el hogar, 67% FOMO activo) que no están citadas y no vuelven a aparecer en ninguna otra parte de la página — aparecen una sola vez, de forma puramente decorativa, en la sección que más impacto visual tiene de toda la temática. Es el peor lugar posible para tener datos sin fuente, porque es lo primero que ve el usuario y probablemente lo que más recuerda.

---

## Paso 4 — Contexto / marco conceptual

**Qué hay hoy:** Sección 2 (Concepto: hiperconectividad + tecnoestrés, bien citadas con Meer/Psicopartner y Craig Brod) + Sección 3 (Stats Bento, 6 tarjetas) + Sección 4 (TIC→TRIC, marco conceptual del "cambio de paradigma").

**Problema:** de las 6 tarjetas del Stats Bento, 3 dependen de la misma fuente marcada como no verificada (`UNICEF_ESPANA_PENDIENTE`: 8h de pantallas, 77% sin límite, 29.1% normas en el hogar) — la mitad del contexto numérico que se le presenta al usuario como base factual del informe descansa en una fuente que el propio código marca como "pendiente de verificar la página exacta". Para una sección que se supone que es el terreno sólido antes de entrar en contenido más denso, es una base bastante frágil.

**Qué falta:** o se verifica la página exacta del informe UNICEF (105 páginas, debería ser localizable), o se reduce el peso de esas 3 cifras hasta confirmarlas.

---

## Paso 5 — Contenido core progresivo

**Qué hay hoy:** Secciones 3 a 8 completas: Stats Bento → TIC→TRIC → Arquitectura Cerebral → Identidad y Cultura del Like → Salud Mental → Ecosistemas de Riesgo. A diferencia de `ciudadania-digital` (que presentaba taxonomías paralelas sin conexión), acá sí hay un arco narrativo real: por qué importa a nivel neurobiológico → cómo afecta la identidad → qué consecuencias clínicas tiene → en qué contextos específicos de riesgo se manifiesta. Es la mejor progresión conceptual de las 3 temáticas vistas.

**Problema:** son 6 secciones consecutivas de pura exposición de información, sin ningún punto de práctica, pausa o interacción en el medio — el usuario recibe una cantidad muy grande de contenido denso (incluyendo estadísticas clínicas sobre autolesión e ideación suicida) de corrido, sin ningún momento de pausa hasta llegar recién a la sección 9. Para contenido de esta carga emocional, un curso profesional normalmente intercalaría reflexión o checkpoints, no solo información acumulada.

**Fuentes de este tramo:** buena densidad de fuentes académicas primarias reales — Fredrickson & Roberts (1997, DOI), Przybylski et al. (2013, DOI), WSJ/Facebook Files, Ministerio de Sanidad de España, Generalitat de Catalunya. Es el tramo mejor fundamentado de la temática.

---

## Paso 6 — Modelado

**Qué hay hoy:** Prácticamente ausente. No hay ningún "tip" o ejemplo aplicado como los que sí tenía `huella-digital` en cada Paso. La sección 9 (Hoja de Ruta) da recomendaciones, pero son consejos generales ("promover el ocio analógico"), no una demostración concreta de "así se ve en la práctica".

**Qué falta:** modelado real — por ejemplo, un ejemplo concreto de conversación entre adulto y adolescente sobre límites de pantalla, o un caso ilustrativo de cómo se ve un adolescente mostrando señales de alerta (sin caer en diagnóstico, pero sí en ejemplo conductual concreto) antes de pedirle al adulto que "lea las señales".

---

## Paso 7 — Práctica guiada con feedback

**Qué hay hoy:** Sección 9 (Hoja de Ruta), selector interactivo de 5 pasos con panel de detalle — pero es puramente informativo, no hay ninguna acción que el usuario deba tomar ni forma de registrar que la tomó.

Es el paso más débil de los 3 vistos hasta ahora. `ciudadania-digital` y `huella-digital` al menos tenían checkboxes/checklists (aunque con distinto grado de funcionalidad); acá no hay ningún mecanismo de acción, registro o feedback — es lectura pura de principio a fin.

**Agravante:** el selector de 5 pasos ni siquiera persiste su posición al recargar la página (vuelve al paso 1) — ni siquiera guarda "hasta dónde leíste", que sería el mínimo de seguimiento posible. No hay `computeProgress` propio, a diferencia de `huella-digital`.

**Qué falta:** convertir al menos algunos de los 5 pasos de la Hoja de Ruta en acciones concretas con checkbox persistente (ej: "hablé con mi hijo/a sobre sacar el cargador del cuarto" en vez de solo leer el consejo).

---

## Paso 8 — Evaluación formativa de comprensión

**Qué hay hoy:** Nada, igual que en las otras 2 temáticas. Pero acá el vacío es más notorio porque ni siquiera existe el sustituto parcial (checklist de acciones) que tenían las otras — el único gesto de "evaluación" es el botón final "marcar como completada", que no mide nada.

**Qué falta:** dado que esta temática tiene contenido con implicancias serias (señales de alerta de crisis emocional, autolesión), un quiz de comprensión acá cumple una función extra importante: asegurarse de que el adulto (docente o familia) efectivamente absorbió las señales de alerta correctas, no solo que scrolleó hasta el final. Preguntas tipo "¿cuál de estas es una señal de alerta según la Hoja de Ruta?" tendrían valor real de seguridad, no solo pedagógico.

---

## Paso 9 — Aplicación real / síntesis

**Qué hay hoy:** Sección 13, CTA de cierre ("Reconectar con la realidad") — mensaje emocional de cierre con variante de audiencia, bien escrito, pero es una reflexión de cierre, no una síntesis que conecte los conceptos vistos (TRIC, arquitectura cerebral, salud mental, ecosistemas de riesgo) con el contexto específico del usuario, como sí hacía la sección "Qué significa esto para el aula/casa" en las otras 2 temáticas.

**Falta la sección equivalente completa:** esta temática no tiene ningún bloque que haga explícitamente "de todo lo que viste, esto es lo que más aplica a tu rol específico" — la Hoja de Ruta (Paso 7) es lo más cercano, pero funciona como consejo general, no como síntesis retrospectiva de las secciones 2-8.

---

## Paso 10 — Recursos y cierre

**Qué hay hoy:** Sección 10 (Temas Relacionados) + Sección 11 (Infografía + Carrusel de 8 láminas) + Sección 12 (listado de 9 fuentes) + Sección 13 (CTA de cierre).

**Problema de orden:** "Temas Relacionados" (sección 10) queda entre la Hoja de Ruta (9) y los Recursos (11-12) — estructuralmente está más cerca de ser parte del cierre/recursos que de la mitad del contenido, pero su posición actual la separa de la Infografía/Carrusel/Fuentes con las que temáticamente pertenece.

**Falta un elemento accionable tipo "llevate algo":** a diferencia de `huella-digital` (que tenía la plantilla copiable de solicitud de eliminación de datos), esta temática no le da al usuario nada tangible para llevarse — ni una plantilla, ni un checklist de señales de alerta para imprimir/guardar, ni nada más allá de leer y cerrar la página.

---

## Resumen del mapeo — huecos por paso

| Paso ideal | Estado actual |
|---|---|
| 1. Resumen ejecutivo | ❌ No existe |
| 2. Objetivo medible | ❌ No existe (ni siquiera parcial — peor que las otras 2 temáticas) |
| 3. Gancho | ✅ El más fuerte de las 3, pero con 2 cifras sin fuente en el elemento más visible |
| 4. Contexto | ⚠️ Bien fundamentado en parte, pero 3 de 6 cifras clave dependen de fuente no verificada |
| 5. Contenido core progresivo | ✅ La mejor progresión narrativa de las 3, pero muy denso sin pausas |
| 6. Modelado | ❌ Prácticamente ausente |
| 7. Práctica con feedback | ❌ El más débil de las 3 — ni siquiera persiste el progreso de lectura |
| 8. Evaluación formativa | ❌ No existe, sin sustituto parcial |
| 9. Aplicación/síntesis | ⚠️ Hay cierre emocional, pero no síntesis retrospectiva real |
| 10. Recursos y cierre | ⚠️ Existe, pero sin elemento accionable para llevarse, y con orden mejorable |

Esta temática es la más fuerte en gancho visual y en progresión conceptual (Pasos 3 y 5), pero es la más débil de las 3 en toda la mitad práctica del framework (Pasos 2, 6, 7 y 8) — es, en esencia, un excelente informe de lectura con cero componente de curso interactivo.

---

## Auditoría de inconsistencias, redundancias y fuentes (detalle completo)

### Inconsistencias
1. Única temática del grupo "Ciudadanía Digital" sin TOC ni estructura de 9 secciones numeradas — 12 secciones de scroll libre sin índice de navegación, en un único archivo de 1583 líneas de JSX sin dividir en subcomponentes.
2. Menor proporción de contenido por audiencia que `ciudadania-digital`/`huella-digital`: de las 12 secciones, solo 5 tienen algún fragmento con `AudienciaTexto` (Hero, Salud Mental, Ecosistemas de Riesgo, Hoja de Ruta, CTA de cierre) — las 7 restantes son 100% fijas.
3. Discrepancia numérica documentada en el propio código: el dato "58% duerme con el móvil" (usado tanto en el panel del Hero como en la tarjeta de Trastornos Alimentarios) contradice la cifra real del informe UNICEF ("6 de cada 10" = 60%) según la nota del propio desarrollador.
4. 2 alias de la misma constante para fuentes distintas (`PEGI_SOURCE`/`PADRES_SOURCE`, ambas apuntando a `UNICEF_ESPANA_PENDIENTE`) — funciona pero es una capa de indirección que puede confundir en el rediseño si se busca por nombre de fuente y no por contenido.
5. El selector interactivo de la Hoja de Ruta no persiste estado (vuelve al paso 1 al recargar) — a diferencia de los checklists de `huella-digital`/`ciudadania-digital` que sí guardan progreso.
6. Es la única temática del grupo con animación de scroll paralaje en el Hero y con estilos CSS-in-JS inyectados por `<style dangerouslySetInnerHTML>` — mecanismos técnicos propios que no se repiten en `ciudadania-digital` ni `huella-digital`, relevante si el rediseño busca unificar el enfoque visual entre las 3 temáticas del grupo.

### Redundancias
1. El dato "58% duerme con el móvil" aparece dos veces (panel del Hero y tarjeta de Trastornos Alimentarios) — no es solo repetición, sino repetición de un dato con discrepancia documentada respecto a la fuente original (ver Inconsistencia #3).
2. Sección "Temas Relacionados" funciona como puente hacia otras temáticas (NNyA, Violencia Digital en Infancias, Huella Digital) — no es redundante en sí, pero su ubicación (entre contenido y recursos) fragmenta el cierre de la página.

### Fuentes sin verificar (ya marcadas, pendientes de resolver)
1. `UNICEF_ESPANA_PENDIENTE` — usada 4 veces (8h de pantallas, 77% sin límite, 29.1% normas en el hogar, y como alias en Gaming/PEGI y supervisión parental) — es la fuente más reutilizada y menos confiable de toda la temática, con 5 cifras distintas dependiendo de ella.
2. `IDENTIDAD_FRAGMENTADA_SOURCE` — "2 de cada 3 mantienen más de un perfil" — sin fuente puntual confirmada.
3. `DUERME_CON_MOVIL_SOURCE` — 58% duerme con el móvil, con discrepancia numérica documentada respecto al informe fuente (60% según UNICEF).
4. Manfred Spitzer (Demencia Digital, 2013) — no está marcado `unverified: true` en el tipo, pero el propio texto y el listado de fuentes la enmarcan explícitamente como "tesis de un autor, no consenso científico" — tratamiento editorial equivalente aunque no use el flag técnico. Es además la única fuente de toda la temática sin URL (`url: undefined`), imposible de verificar con un link.

### Cifras sin fuente y sin marcar (más grave, ni siquiera están marcadas)
1. "71% sin normas en el hogar" (panel del Hero) — no citada, no repetida en ningún otro lugar de la página.
2. "67% FOMO activo" (panel del Hero) — mismo problema.

### Fuentes bien atribuidas, con oportunidad de mejora
1. Fredrickson & Roberts (1997, DOI) — auto-objetivación, fuente académica primaria sólida.
2. Przybylski, Murayama, DeHaan & Gladwell (2013, DOI) — FOMO, fuente académica primaria sólida.
3. The Wall Street Journal, "The Facebook Files" (2021) — buena fuente periodística de investigación, bien atribuida.
4. Ministerio de Sanidad de España y Generalitat de Catalunya — fuentes institucionales sólidas, aunque la segunda es un dato autonómico (Cataluña) presentado junto a uno nacional sin distinción visual clara de alcance geográfico.

### Inconsistencia de listado de fuentes
El listado final de "Fuentes Citadas" (sección 12) no incluye entradas separadas para `UNICEF_ESPANA_PENDIENTE` (aunque comparte autor con la entrada UNICEF confirmada, pierde su propia nota de "pendiente de verificar" en el listado) ni para `IDENTIDAD_FRAGMENTADA_SOURCE` — mismo patrón de inconsistencia ya visto en `ciudadania-digital` (Barco de Teseo) y `huella-digital` (GDPR): las citas inline de la página no coinciden 1:1 con el índice formal de cierre.

### Otros hallazgos de contenido
1. Única imagen de stock/foto real de la temática (Unsplash, sección Identidad) en medio de una página que por lo demás usa solo infografías/ilustraciones propias — vale la pena decidir en el rediseño si se reemplaza por una infografía propia consistente con el resto.
2. Ninguno de los 5 pasos de la Hoja de Ruta tiene fuente citada — son recomendaciones propias, no datos/estadísticas, lo cual está bien siempre que se mantenga esa distinción clara (no se presentan como hallazgos científicos, sino como consejo).

### Qué se podría agregar
1. Objetivo de aprendizaje explícito, general y por sección — hoy no existe en absoluto.
2. Resumen ejecutivo de 3 líneas en el Hero.
3. Quiz de comprensión real, con foco en reconocimiento de señales de alerta (valor de seguridad, no solo pedagógico).
4. Checkbox persistente en al menos algunos de los 5 pasos de la Hoja de Ruta.
5. Un elemento accionable para llevarse (plantilla, checklist imprimible de señales de alerta), siguiendo el modelo de la plantilla copiable de `huella-digital`.
6. Fuente para las 2 cifras del panel del Hero (71%, 67%) o su eliminación si no son verificables.
7. Verificación de la página exacta del informe UNICEF para las 3 cifras que dependen de `UNICEF_ESPANA_PENDIENTE`.
8. Resolución de la discrepancia 58%/60% del dato "duerme con el móvil" antes de cualquier republicación.

### Qué se podría simplificar, quitar o reordenar
1. Mover "Temas Relacionados" (sección 10) junto a Infografía/Carrusel/Fuentes (11-12), para que el cierre de la página quede agrupado de forma coherente.
2. Intercalar al menos un punto de pausa/reflexión o checkpoint dentro del tramo denso de secciones 3-8, dado el peso emocional del contenido (salud mental, autolesión).
3. Decidir si reemplazar la imagen de stock de Unsplash por una infografía propia, para mantener consistencia visual con el resto de la temática.
4. Renombrar o unificar `PEGI_SOURCE`/`PADRES_SOURCE` a un único nombre de fuente compartido, para evitar confusión al buscar por nombre en el rediseño.

---

## Fortalezas a preservar en el rediseño
1. La progresión narrativa de las secciones 3-8 (paradigma → cerebro → identidad → salud mental → riesgos concretos) es la mejor lograda de las 3 temáticas auditadas — vale la pena usarla como referencia de estructura de contenido core para otras temáticas.
2. Densidad de fuentes académicas primarias con DOI (Fredrickson & Roberts, Przybylski et al.) — el estándar más alto de rigor bibliográfico visto hasta ahora.
3. Producción visual del Hero (paralaje, glassmorphism) — el gancho más logrado de las 3 temáticas.
4. El manejo editorial de la fuente Manfred Spitzer, presentándola explícitamente como "tesis de un autor, no consenso científico" — buena práctica de honestidad epistémica a mantener y replicar con otras fuentes de opinión/hipótesis en otras temáticas.
