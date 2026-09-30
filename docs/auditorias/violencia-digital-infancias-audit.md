# Auditoría de contenido — Violencia Digital en Infancias y Adolescencias

Base para rediseño. Recorrido completo de `app/violencia-digital-infancias/violencia-infancias-content.tsx` (1363 líneas) y `lib/violencia-digital-infancias-content.ts` (126 líneas). Solo lectura, nada modificado.

Ruta: `/violencia-digital-infancias`. Título de página: "Violencia Digital en Infancias y Adolescencias | José Farhat". `Navbar`/`Footer`/`BackToDashboardButton` viven en `page.tsx` (no en el content file). No hay `components/violencia-digital-infancias/` con subcomponentes de sección — solo `source-cite.tsx`; `violenceTypesData`, `alertSignsData` y `actionStepsData` están definidos localmente en el propio content file (el comentario de cabecera de `lib/violencia-digital-infancias-content.ts` lo aclara explícitamente: "quedan en el propio componente — son contenido ya adaptado que no se toca salvo los bloques con voz docente"). Layout: scroll continuo de 10 secciones sin numeración visible en pantalla (solo 2 anclas: `#amenazas` e `#identificacion`), con `ScrollProgress` propio (barra de progreso de scroll) y decoraciones flotantes (`TechDecorations`) — sin TOC/sidebar.

Progreso vía `useTematicaProgress` **sin `computeProgress`/checklist** — como `ia-etica-ciudadania`, `estafas-digitales` y (parcialmente) `violencia-digital`, el único mecanismo de progreso es el botón manual `TematicaCompletarButton`. No tiene ningún checklist interactivo.

**Patrón de audiencia confirmado: Group A real** (`resolveTexto`/`t()` con fallback `'docentes'`), a diferencia de las otras 2 temáticas del grupo "Violencia Digital" (`violencia-digital` no usa `resolveTexto` en absoluto; `estafas-digitales` mezcla ambos patrones). Solo 6 constantes `AudienciaTexto` en total (`HERO_PARRAFO_CIERRE`, `ACTION_STEP_1_DESC`, `ACTION_STEP_5_TITLE`, `ACTION_STEP_5_DESC`, `CIERRE_SIGNIFICADO`, `CARRUSEL_LABEL`/`CARRUSEL_TITULO` — 7 si se cuentan por separado label/título del carrusel) — proporción de contenido por audiencia baja, concentrada en el Hero, 2 de los 5 pasos del protocolo de acción, el cierre de la sección de magnitud y el header del carrusel.

**`SourceCite` propio**, mismo patrón de interfaz que `huella-digital`/`violencia-digital` (comentario explícito: "deliberadamente duplicada (no importada) porque cada ruta ajusta la paleta a su propio tema visual"). Ninguna fuente de `FUENTES_CITADAS` está marcada `unverified: true` — las 7 tienen URL y se presentan como confirmadas.

---

## Hero (sin ancla `id`)

Badge fijo: "Guía de Prevención y Acción".

**H1 (fijo):** "Violencia Digital en Infancias y Adolescencias" (con degradado azul→violeta→rosa en "en Infancias").

**Párrafo intro (mixto: fijo + cierre por audiencia):**
> "Las interacciones en el entorno digital conllevan responsabilidades y riesgos. Aprenda a identificar, [variante]"

| Docentes | Familias |
|---|---|
| "prevenir y actuar frente a situaciones de ciberacoso y grooming — desde el aula, muchas veces usted es la primera persona en posición de notar que algo cambió." | "prevenir y actuar frente a situaciones de ciberacoso y grooming — en casa, muchas veces usted es la primera persona en posición de notar que algo cambió." |

**2 CTAs:** "Ver amenazas" (scroll a `#amenazas`), "Señales de alerta" (scroll a `#identificacion`).

**Pills de datos rápidos (fijas, sin cita ni fuente propia en el Hero — el 61% se retoma más abajo con contador animado, sin fuente atribuida en ningún punto de la página):**
- 👥 "61% inicia redes a los 10-12 años"
- 📞 "Línea 137 — Gratuita 24h"

**Panel lateral glassmorphism "Alerta activa · Protocolo de protección" (desktop, fijo, sin cita propia — barras puramente decorativas, no atribuidas a ninguna fuente):**

| Amenaza | % (decorativo) |
|---|---|
| Grooming | 88% |
| Ciberbullying | 72% |
| Difusión no consentida | 61% |
| Exposición a riesgos | 94% |

> Nota: estos 4 porcentajes (88/72/61/94) no se repiten en ninguna otra parte de la página ni tienen fuente citada — son valores puramente ilustrativos del panel del Hero, similar al patrón ya detectado en `hiperconectividad-digital` con su "Monitor de Riesgo Digital".

Mini-card flotante (fija): "Edad de inicio: 10 - 12 años" / tarjeta idéntica en versión mobile.

---

## Marco Legal — El grooming es un delito penal (sin ancla `id`)

Sin variante de audiencia.

**Cita textual de la ley (`GROOMING_LEY_QUOTE`):**
> "Será penado con prisión de seis (6) meses a cuatro (4) años el que, por medio de comunicaciones electrónicas, telecomunicaciones o cualquier otra tecnología de transmisión de datos, contactare a una persona menor de edad, con el propósito de cometer cualquier delito contra la integridad sexual de la misma."
> — Ley 26.904 — Código Penal, Art. 131, "sancionada el 13/11/2013, promulgada el 4/12/2013" (`https://observatoriolegislativocele.com/ley-grooming-ley-26904/`)

**Día Nacional (`GROOMING_DIA_NACIONAL`):**
> "El 13 de noviembre se estableció como el Día Nacional de la Lucha Contra el Grooming, en conmemoración de la sanción de esta ley."
> — Poder Judicial de Misiones, "13 de noviembre, Día Nacional de la Lucha Contra el Grooming" (`https://www.jusmisiones.gov.ar/index.php/joomla-overview/informes-especiales/2763-en-argentina-el-grooming-es-un-delito-penal`)

---

## Stats Bento (sin ancla `id`)

Sin variante de audiencia. 3 tarjetas:

| Dato | Descripción | Fuente citada |
|---|---|---|
| 61% *(con contador animado, `useCountUp`)* | "de los adolescentes inicia el uso de redes sociales entre los 10 y 12 años." | **Sin `SourceCite`** — no atribuida en esta tarjeta ni en ningún otro punto de la página |
| 1/3 | "tuvo encuentros con personas conocidas por internet." | **Sin `SourceCite`** |
| 137 | "Línea nacional gratuita, disponible las 24 horas." | Sin cita (es un dato operativo, no estadístico) |

> Nota: el 61% (repetido del Hero) y el "1/3 tuvo encuentros con personas conocidas por internet" son las 2 estadísticas más prominentes visualmente de toda la sección (tarjeta grande, tipografía extra grande) y ninguna de las 2 tiene fuente atribuida — contrasta con el resto de la página, que sí cita cuidadosamente cada estadística de la sección "Magnitud del problema" más abajo.

---

## Amenazas — Principales amenazas en el entorno digital (`id="amenazas"`)

Badge: "Lo que hay que conocer". Intro: "Comprender las dinámicas de agresión es el primer paso para proteger la integridad de niñas, niños y adolescentes, tanto en casa como en el aula." Sin variante de audiencia.

**4 tipos de violencia (`violenceTypesData`, definido localmente en el componente):**

| Tipo | Tag | Descripción |
|---|---|---|
| Grooming | Delito penal | "Acoso sexual hacia niñas, niños o adolescentes por parte de una persona adulta a través de internet, mediante engaños y manipulación progresiva. Constituye un delito penal tipificado." *(única con `SourceCite`, reutiliza `GROOMING_LEY_QUOTE.source`)* |
| Ciberbullying | Entre pares | "Hostigamiento digital sistemático entre pares. Se caracteriza por la percepción de anonimato, la deslocalización geográfica y la dificultad de la víctima para escapar del entorno de acoso." |
| Difusión no consentida | Alta vulnerabilidad | "Divulgación de material íntimo sin autorización. Una vez enviado el contenido, se pierde el control y la situación puede derivar en sextorsión y daños psicológicos graves." |
| Exposición a riesgos | Riesgo invisible | "Acceso involuntario a contenidos violentos, de índole sexual o plataformas que incitan a conductas dañinas, como autolesiones o retos virales de alto riesgo físico." |

---

## Origen — ¿Qué es la Línea 137? (sin ancla `id`)

Sin variante de audiencia.

**Historia del programa (`LINEA_137_ORIGEN_QUOTE`):**
> "El programa 'Las Víctimas contra las Violencias' —del que depende la Línea 137— fue creado en 2006 mediante la Resolución N° 314/2006 del Ministerio del Interior de la Nación, y transferido al Ministerio de Justicia y Derechos Humanos en 2008. Está coordinado por la Dra. Eva Giberti y su equipo incluye psicólogos, trabajadores sociales y abogados."
> — Ministerio Público Fiscal (`https://www.mpf.gob.ar/ufem/files/2014/06/Funcionamiento-L%C3%ADnea-137.pdf`)

**Alcance de la línea (`LINEA_137_ALCANCE`):**
> "La línea atiende específicamente casos de violencia familiar, sexual y grooming — no es un número genérico de emergencias."
> — Argentina.gob.ar, "atiende violencia familiar, sexual y grooming — no es un número genérico de emergencias" (`https://www.argentina.gob.ar/justicia/violencia-familiar-sexual`)

---

## Identificación y Abordaje — Tabs interactivos (`id="identificacion"`)

**Elemento interactivo — Selector de 2 pestañas** ("Señales de alerta" / "Protocolo de acción"), con `AnimatePresence` para la transición entre paneles. Intro fija: "Guía de observación para detectar situaciones de riesgo y protocolo de actuación para adultos referentes."

### Pestaña "Señales de alerta" — 3 grupos, acordeón expandir/colapsar (`alertSignsData`, definido localmente, sin cita, sin variante de audiencia)

**Cambios emocionales y de ánimo:**
- Estados de tristeza profunda sin causa aparente.
- Irritabilidad, nerviosismo o ansiedad repentina.
- Miedos irracionales o cambios bruscos en el carácter.
- Trastornos del sueño (insomnio) o de la alimentación.

**Comportamiento con dispositivos:**
- Ocultar o apagar rápidamente la pantalla al acercarse un adulto.
- Sustituir el uso habitual del dispositivo por una evitación total y repentina.
- Asustarse o alterarse al recibir notificaciones o llamadas.
- Crear perfiles falsos o utilizar múltiples cuentas anónimas.

**Aislamiento y vida social:**
- Retraimiento social y negativa a salir de casa.
- Pérdida de interés en actividades recreativas o deportivas.
- Renuncia repentina a compartir tiempo con sus amistades habituales.
- Descenso en el rendimiento escolar o inasistencias frecuentes.

### Pestaña "Protocolo de acción" — 5 pasos con conector vertical (`actionStepsData`, definido localmente; 2 de los 5 pasos tienen contenido sobrescrito por audiencia)

**Paso 1 — "Contener sin juzgar"** (título fijo, descripción con variante de audiencia):

| Docentes | Familias |
|---|---|
| "Escuche a la víctima y ofrezca apoyo emocional incondicional. No la responsabilice, no la avergüence y evite retirarle el dispositivo como medida de castigo. Si es docente, esta primera escucha no reemplaza avisar a la familia y a la institución: es el paso inicial, no el único." | "Escuche a la víctima y ofrezca apoyo emocional incondicional. No la responsabilice, no la avergüence y evite retirarle el dispositivo como medida de castigo. Esta primera escucha no reemplaza avisar a la escuela y activar los pasos siguientes: es el paso inicial, no el único." |

**Paso 2 — "Preservar la evidencia"** (fijo, sin variante):
> "No elimine chats, imágenes ni audios. Realice capturas de pantalla de las conversaciones, perfiles y URLs involucrados antes de cualquier otra acción."

**Paso 3 — "Bloquear y reportar"** (fijo, sin variante):
> "Utilice las herramientas nativas de la plataforma para bloquear a la persona agresora y reportar el perfil por comportamiento abusivo o contrario a las normas de la comunidad."

**Paso 4 — "Denunciar formalmente"** (fijo, sin variante):
> "En casos de grooming o extorsión, comuníquese con la Línea 137 o acuda a la fiscalía especializada en ciberdelitos más cercana. La denuncia activa el protocolo de protección institucional."

**Paso 5 — título y descripción con variante de audiencia:**

| Campo | Docentes | Familias |
|---|---|---|
| Título | "Activar el protocolo escolar" | "Coordinar con la escuela" |
| Descripción | "Si es docente, informe lo sucedido al equipo de orientación o a la dirección de su institución y coordine con la familia los pasos siguientes. La escuela tiene su propio protocolo de protección, que se suma —no reemplaza— a la denuncia formal." | "Informe lo sucedido a la escuela de su hijo o hija —al equipo de orientación o a la dirección— y pida que se active el protocolo de protección institucional. Ese protocolo se suma a la denuncia formal, no la reemplaza." |

> Nota técnica: el array `actionStepsData` (definido en el componente) tiene los 5 pasos escritos con voz docente fija por defecto; en el render, el código sobrescribe específicamente el `title`/`description` de los pasos 1 y 5 con las constantes de `lib/violencia-digital-infancias-content.ts` según audiencia (`step.id === 5 ? t(ACTION_STEP_5_TITLE) : step.title`), dejando los pasos 2, 3 y 4 sin ninguna adaptación de audiencia.

---

## Magnitud del Problema — Lo que muestran los datos oficiales (sin ancla `id`)

Badge: "Magnitud del problema". Sin variante de audiencia en las 3 tarjetas de datos (sí en el cierre).

**Tarjeta grande — Crecimiento de denuncias (`MAGNITUD_UNICEF_QUOTE`):**
> 2016: **8.840** → 2024: **120.162**
> "Más de 150.000 denuncias vinculadas con grooming y explotación sexual de niñas, niños y adolescentes en entornos digitales se registraron en Argentina en 2024. Un incremento de más de 13 veces en 8 años."
> — UNICEF Argentina, "'Investigar para proteger' (2025)" (`https://lapampa24.com.ar/negocios/unicef-presento-una-guia-para-investigar-delitos-digitales-contra-ninas-ninos-y-adolescentes-en-argentina/`)

**Tarjeta mediana — Encuesta grooming (`MAGNITUD_ENCUESTA_GROOMING`):**
> "El 12,7% de niñas, niños y adolescentes encuestados utiliza el celular para enviar mensajes, fotos o videos ofensivos contra alguien."
> — Ministerio de Justicia y DD.HH. de la Nación, "Encuesta Nacional de Grooming (2021)" (`https://www.argentina.gob.ar/sites/default/files/2024/10/encuesta_nacional_grooming_-_ano_2021.pdf`)

**Tarjeta mediana — Encuesta Kids Online (`MAGNITUD_KIDS_ONLINE`):**
> "En 2025, UNICEF y UNESCO realizaron la Encuesta Kids Online Argentina, un relevamiento en 291 escuelas primarias y secundarias de todo el país, con menores de 9 a 17 años."
> — UNICEF-UNESCO, "Encuesta Kids Online Argentina (2025) — 291 escuelas primarias y secundarias, menores de 9 a 17 años" (`https://que.fcc.unc.edu.ar/ciberbullying-y-grooming-violencia-digital-en-las-infancias-y-adolescencias/`)

### `CIERRE_SIGNIFICADO` — cierre de la sección, única pieza con variante de audiencia

| Docentes | Familias |
|---|---|
| "El crecimiento de denuncias (de 8.840 a 120.162 en 8 años) no es solo 'más casos' — también refleja que cada vez más víctimas y adultos de referencia saben que pueden y deben denunciar. Un docente que conoce el protocolo es parte de ese cambio." | "El crecimiento de denuncias (de 8.840 a 120.162 en 8 años) no es solo 'más casos' — también refleja que cada vez más víctimas y adultos de referencia saben que pueden y deben denunciar. Una familia que conoce el protocolo es parte de ese cambio." |

---

## Temas Relacionados (sin ancla `id`)

Sin variante de audiencia. 3 tarjetas de navegación cruzada:

| Label | Href | Descripción |
|---|---|---|
| NNyA y el Entorno Digital | `/nnya-entorno-digital` | "Cómo perciben los chicos y chicas el mundo digital" |
| Violencia Digital hacia la Mujer | `/violencia-digital` | "Guía basada en la Ley Olimpia y derechos digitales" |
| Huella Digital | `/huella-digital` | "Identidad, privacidad y control de datos personales" |

---

## Infografía (sin ancla `id`)

**Elemento interactivo — Lightbox de zoom/pan/pinch** (mismo mecanismo que las demás temáticas: zoom 1x-4x, arrastre, pinch táctil, scroll de mouse, Escape). Imagen: `/weekly-content/2026-W25/infografia 7.png`, alt "Infografía Violencia Digital en Infancias".

---

## Carrusel de Recursos (sin ancla `id`)

**Elemento interactivo — Carrusel de 7 láminas** (`/weekly-content/2026-W25/carrusel/1.svg` a `7.svg`), mismo mecanismo de flechas/dots/`AnimatePresence`. **Header CON variante de audiencia** (`CARRUSEL_LABEL`/`CARRUSEL_TITULO`, vía `resolveTexto`) — a diferencia de los carruseles de `alfabetizacion-mediatica`, `estafas-digitales` y `violencia-digital`, que tienen header fijo sin adaptar:

| Campo | Docentes | Familias |
|---|---|---|
| Label | "Material para el aula" | "Material para la familia" |
| Título | "Violencia Digital en Infancias — Recursos para el Aula" | "Violencia Digital en Infancias — Recursos para la Familia" |

---

## Fuentes Citadas (sin ancla `id`)

**Listado completo (`FUENTES_CITADAS`, 7 entradas — reutiliza directamente los mismos objetos `source` citados inline, igual que en `violencia-digital`, por lo que no puede haber discrepancia entre lo citado en el cuerpo y lo listado al final):**

| # | Fuente | Nota | URL |
|---|---|---|---|
| 1 | Ley 26.904 — Código Penal, Art. 131 | "sancionada el 13/11/2013, promulgada el 4/12/2013" | https://observatoriolegislativocele.com/ley-grooming-ley-26904/ |
| 2 | Poder Judicial de Misiones | "13 de noviembre, Día Nacional de la Lucha Contra el Grooming" | https://www.jusmisiones.gov.ar/index.php/joomla-overview/informes-especiales/2763-en-argentina-el-grooming-es-un-delito-penal |
| 3 | Ministerio Público Fiscal | — | https://www.mpf.gob.ar/ufem/files/2014/06/Funcionamiento-L%C3%ADnea-137.pdf |
| 4 | Argentina.gob.ar | "atiende violencia familiar, sexual y grooming — no es un número genérico de emergencias" | https://www.argentina.gob.ar/justicia/violencia-familiar-sexual |
| 5 | UNICEF Argentina | "'Investigar para proteger' (2025)" | https://lapampa24.com.ar/negocios/unicef-presento-una-guia-para-investigar-delitos-digitales-contra-ninas-ninos-y-adolescentes-en-argentina/ |
| 6 | UNICEF-UNESCO | "Encuesta Kids Online Argentina (2025) — 291 escuelas primarias y secundarias, menores de 9 a 17 años" | https://que.fcc.unc.edu.ar/ciberbullying-y-grooming-violencia-digital-en-las-infancias-y-adolescencias/ |
| 7 | Ministerio de Justicia y DD.HH. de la Nación | "Encuesta Nacional de Grooming (2021)" | https://www.argentina.gob.ar/sites/default/files/2024/10/encuesta_nacional_grooming_-_ano_2021.pdf |

> Nota: las 2 estadísticas del Stats Bento (61% edad de inicio, "1/3 tuvo encuentros con personas conocidas por internet") **no tienen entrada en este listado ni cita inline en ningún punto de la página** — son las únicas afirmaciones numéricas de toda la temática sin ninguna atribución, en contraste con el resto de la página que cita meticulosamente cada estadística.

---

## CTA Final — "Busque asesoramiento. Denuncie." (sin ancla `id`)

Fondo oscuro dramático. Sin variante de audiencia. Texto fijo: "Ante la certeza o sospecha de grooming, ciberacoso o extorsión, no confronte al agresor. Comuníquese de forma gratuita desde cualquier punto del país." 2 CTAs: "Línea 137 — Gratuita" (`tel:137`, único link `tel:` de todo el sitio auditado hasta ahora) y "Ver todas las temáticas" (→ `/tematicas`).

---

## Todas las fuentes citadas, consolidado

**Ninguna fuente marcada `unverified: true`** — las 7 entradas de `FUENTES_CITADAS` tienen URL y se presentan como confirmadas, igual que en `violencia-digital`.

**Fuente más citada:** ninguna se repite — cada una de las 7 fuentes se usa exactamente una vez (a diferencia de otras temáticas donde UNESCO/ONU Mujeres se repiten varias veces).

---

## Resumen de hallazgos para el rediseño

1. **Las 2 estadísticas más prominentes visualmente de la página (61% edad de inicio y "1/3 tuvo encuentros con personas conocidas por internet") no tienen ninguna fuente atribuida**, ni en la tarjeta donde aparecen ni en el listado final de "Fuentes Citadas" — contrasta fuertemente con el resto de la temática, que cita meticulosamente cada estadística de la sección "Magnitud del problema" (UNICEF, Ministerio de Justicia, UNICEF-UNESCO).
2. **El panel "Alerta activa" del Hero tiene 4 porcentajes puramente decorativos** (Grooming 88%, Ciberbullying 72%, Difusión no consentida 61%, Exposición a riesgos 94%) sin fuente ni repetición en ningún otro punto de la página — mismo patrón de "cifra decorativa sin atribuir" ya detectado en el Hero de `hiperconectividad-digital`.
3. **Solo 2 de los 5 pasos del Protocolo de Acción tienen variante de audiencia** (pasos 1 y 5) — los pasos 2, 3 y 4 (preservar evidencia, bloquear y reportar, denunciar formalmente) son fijos y neutros, lo cual es razonable dado su contenido operativo, pero vale la pena confirmar en el rediseño si esa es una decisión deliberada o simplemente los únicos 2 pasos que originalmente tenían lenguaje docente-voiced explícito.
4. **Es la única de las 3 temáticas del grupo "Violencia Digital" que sí usa `resolveTexto`/Group A real** — a diferencia de `violencia-digital` (ternario manual, sin `resolveTexto`) y `estafas-digitales` (mixto). Esto la hace la más alineada estructuralmente con el patrón Group A del resto del sitio, pese a pertenecer al mismo grupo temático que las otras 2 con patrones distintos.
5. **El header del carrusel SÍ varía por audiencia** ("Material para el aula" / "Material para la familia") — a diferencia de `alfabetizacion-mediatica`, `estafas-digitales` y `violencia-digital`, cuyos carruseles tienen header fijo. Esta temática es consistente con el patrón "bueno" visto en `ciudadania-digital`/`huella-digital`/`hiperconectividad-digital`.
6. **Sin checklist interactivo** (como `ia-etica-ciudadania`, `estafas-digitales`, y parcialmente `violencia-digital` que sí tiene uno) — el único progreso es el botón manual de "marcar como completada", pese a que el contenido (checklist de señales de alerta, protocolo de 5 pasos) se presta naturalmente a un ejercicio de autoevaluación tipo "¿reconocés estas señales en tu entorno?".
7. **Cada una de las 7 fuentes citadas se usa exactamente una vez** — a diferencia de `hiperconectividad-digital` (UNICEF España reutilizada 4+ veces) o `alfabetizacion-mediatica` (UNESCO citada 7 veces), acá no hay ninguna fuente "ancla" reutilizada, lo que habla de una base de datos más diversa pero también de menor densidad de evidencia por afirmación específica.
8. **El listado final de fuentes es, igual que en `violencia-digital`, exactamente la misma colección de objetos citados inline** (`FUENTES_CITADAS` reutiliza `.source` de las mismas constantes usadas arriba) — por construcción, no puede haber la inconsistencia detectada en `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital` e `ia-etica-ciudadania` entre lo citado en el cuerpo y lo listado al final.
9. **Único link `tel:137` de todo el sitio auditado hasta ahora** — un CTA de llamada directa en el cierre de la página, funcionalidad de acceso rápido a ayuda que no se repite en ninguna otra temática (ni siquiera en `violencia-digital`, que menciona la Línea 137 solo como texto).
10. **`useCountUp` (contador animado del 61%) es un mecanismo interactivo compartido conceptualmente con `alfabetizacion-digital`** (que también tiene un hook de conteo animado, `useCountUp`, para su banner de 5 estadísticas del Hero) — implementaciones separadas y ligeramente distintas (con/sin `prefers-reduced-motion`), vale la pena evaluar si conviene unificarlas en un hook compartido si el rediseño busca consistencia entre temáticas.
