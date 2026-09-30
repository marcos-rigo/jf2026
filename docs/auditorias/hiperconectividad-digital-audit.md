# Auditoría de contenido — Hiperconectividad Digital

Base para rediseño. Recorrido completo de `app/hiperconectividad-digital/hiperconectividad-content.tsx` (1583 líneas, un único archivo — no hay subcomponentes de sección como en `ciudadania-digital`/`huella-digital`) y `lib/hiperconectividad-digital-content.ts` (132 líneas, solo citas/fuentes). Solo lectura, nada modificado.

Ruta: `/hiperconectividad-digital`. Título de página: "Hiperconectividad Digital y Desarrollo Adolescente | José Farhat". A diferencia de `ciudadania-digital` y `huella-digital`, **esta temática NO fue reestructurada al patrón de 9 secciones con TOC lateral** — mantiene su diseño bespoke original de landing "bento/dark-section" (el propio comentario de cabecera de `lib/hiperconectividad-digital-content.ts` lo dice explícitamente: "acá NO se reestructura la página — solo se agrega el concepto arriba y una cita debajo de cada estadística/dato ya presente"). Layout: scroll continuo de 12 secciones sin numerar ni indexar en un TOC, alternando fondos claros y oscuros, con animaciones de scroll (`useScroll`/`useTransform` de Framer Motion sobre el Hero) y estilos CSS-in-JS inyectados vía `<style dangerouslySetInnerHTML>` (blobs animados, mesh gradient, scan line, glassmorphism). `Navbar`/`Footer`/`BackToDashboardButton` en `page.tsx`. Progreso vía `useTematicaProgress` (tematicaId `hiperconectividad-digital`, sin `computeProgress` propio) + `TematicaCompletarButton` flotante al final (fuera del flujo de secciones, es el último nodo del JSX).

Patrón de audiencia: **Group A** (`resolveTexto`/`resolveField` + `AudienciaTexto`), fallback explícito a `'docentes'`. Particularidad de esta temática (documentada en un comentario del propio código, líneas 62-67): el contenido original se escribió pensando solo en un lector docente/aula, y con la migración a audiencias **solo los fragmentos que mencionaban explícitamente "estudiantes"/"aula"/"curso" se convirtieron en `AudienciaTexto`** — el resto (estadísticas, citas, la mayor parte de las 12 secciones) es contenido fijo igual para toda audiencia. Esto hace que esta temática tenga proporcionalmente MENOS contenido variable por audiencia que `ciudadania-digital`/`huella-digital`.

---

## 1. Hero

**Estructura:** badges de contexto + H1 + párrafo intro (audiencia) + 2 botones CTA (uno con label de audiencia) + fila de 3 "pills" de stats rápidas + panel glassmorphism lateral (desktop) con mini-dashboard de barras — sin cita en el Hero mismo (la cita se traslada a la sección Concepto).

**Badges superiores (fijos):** "Informe basado en evidencia científica" (con punto animado) + "Neurodesarrollo Adolescente".

**H1 (fijo):** "¿Qué buscan en la pantalla?" (con subrayado SVG en degradado violeta→azul→rosa sobre "en la pantalla?").

**Variantes de audiencia:**

| Campo | Docentes | Familias |
|---|---|---|
| Párrafo intro | "La hiperconectividad digital está reconfigurando estructuralmente la psique adolescente — y eso también se ve en el aula. Un análisis basado en neurodesarrollo sobre cómo las redes sociales impactan la identidad, la salud mental y el desarrollo cognitivo de tus estudiantes, con herramientas para leer esas señales día a día." | "La hiperconectividad digital está reconfigurando estructuralmente la psique adolescente. Un análisis basado en neurodesarrollo sobre cómo las redes sociales impactan la identidad, la salud mental y el desarrollo cognitivo de tus hijos, con herramientas para leer esas señales día a día." |
| Botón CTA secundario | "Guía para el aula" | "Guía para la familia" |

Botón CTA primario (fijo): "Explorar el informe" → ancla `#contexto`.

**Pills de stats rápidas (fijas, adelanto de la sección 2):** 📱 "94.8% conectados" · ⏱ "Inicio: 11 años" · 📊 "8h diarias".

**Panel "Monitor de Riesgo Digital" (desktop, fijo, sin cita propia — repite/adelanta cifras de otras secciones):**
- "Panorama adolescente 2026"
- Barras: Uso excesivo de pantallas 94% · Sin normas en el hogar 71% · FOMO activo 67% · Con supervisión parental 29%
- 2 cifras destacadas: "2/3 tienen múltiples perfiles" y "58% duerme con el móvil"

> Nota: las barras "71% sin normas en el hogar" y "67% FOMO activo" **no aparecen citadas ni repetidas en ninguna otra sección de la página** — son cifras que solo existen en este panel decorativo del Hero, sin fuente atribuida.

---

## 2. Concepto

Sección con fondo claro, bloque destacado con borde degradado. Sin variante de audiencia.

**Cita principal:**
> "La hiperconectividad se define como el acceso constante e inmediato a redes de información, comunicación y entretenimiento a través de múltiples dispositivos — la condición de estar permanentemente conectado, a través de uno o varios dispositivos, a plataformas digitales."
> — Meer / Psicopartner, "no hay un autor único identificable que haya acuñado el término — es de uso corriente en psicología" (`https://www.meer.com/es/95770-tecnologia-y-salud-mental-en-tiempos-de-hiperconectividad`)

**Cita secundaria (concepto hermano):**
> "Concepto académico hermano, con autor real: el tecnoestrés, 'una enfermedad de adaptación causada por la falta de habilidad para tratar con las nuevas tecnologías de manera saludable'."
> — Craig Brod (1984), citado en Psicopartner (`https://www.psicopartner.com/hiperconectividad-tecnoestres-y-ansiedad/`)

---

## 3. Stats Bento — "El paisaje de conectividad juvenil" (ancla `#contexto`)

Grid bento de 6 tarjetas de tamaños distintos, todas con fuente UNICEF España (2021) — 4 con la versión confirmada, 2 con la versión "pendiente de verificar":

| Dato | Descripción | Fuente |
|---|---|---|
| **94.8%** | de los adolescentes tiene dispositivo móvil con conexión a internet | UNICEF España 2021 (confirmada) |
| **11 años** | edad media del primer dispositivo con internet (10,96 años exactos) | UNICEF España 2021 (confirmada) |
| **8h** | diarias en pantallas, promedio en adolescentes de 13 a 17 años | UNICEF España — **`UNICEF_ESPANA_PENDIENTE`** |
| **77%** | sin ningún límite de tiempo de uso establecido | UNICEF España — **`UNICEF_ESPANA_PENDIENTE`** |
| **4/10** | se conecta específicamente para no sentirse solo | UNICEF España 2021 (confirmada) |
| **29.1%** | de los hogares cuenta con normas claras de uso digital — "la brecha de supervisión es el punto de quiebre estratégico" | UNICEF España — **`UNICEF_ESPANA_PENDIENTE`** |

**`UNICEF_ESPANA_PENDIENTE`** (fuente compartida por 3 de las 6 tarjetas, marcada `unverified: true`): mismos datos de `UNICEF_ESPANA_2021` (Andrade, Guadix, Rial y Suárez, 2021, encuesta a ~50.000 adolescentes de 11 a 18 años, 265 centros educativos, nov. 2020 – mar. 2021) pero con nota: "cifra no confirmada puntualmente en los extractos revisados del informe (105 páginas) — probable misma fuente, pendiente de verificar la página exacta".

---

## 4. De las TIC a las TRIC — "Cambio de paradigma"

Título: "De las TIC a las TRIC". Copy: "La llegada de las redes sociales cambió el paradigma. Ya no son solo tecnologías de información y comunicación: el nuevo componente central es la **Relación**." Cita fuente: UNICEF España 2021 (confirmada). Sin variante de audiencia.

**Las 3 letras del acróstico TRIC (grid de 3 tarjetas, la del medio marcada "El componente clave"):**

| Letra | Título | Descripción |
|---|---|---|
| T | Tecnologías | "El uso como herramienta fundamental para conseguir, verificar y difundir datos, conocimiento y noticias." |
| R | Relación *(destacada)* | "La forma en que la tecnología impactó en la interacción social. Es el espacio donde los adolescentes crean lazos, construyen pertenencia y se validan." |
| IC | Información y Comunicación | "El potencial como vehículo de expresión individual o de masas, creando lenguajes propios y nuevas narrativas digitales." |

---

## 5. Arquitectura Cerebral — "Vulnerabilidad neurobiológica"

Sección de fondo oscuro (`#05080f`). Intro fija: "La adolescencia es un período crítico de máxima plasticidad cerebral. La arquitectura de las plataformas digitales explota esta ventana de vulnerabilidad biológica." Sin variante de audiencia.

**2 estructuras cerebrales (sin cita propia por tarjeta — la fuente llega recién en el dato destacado al final):**

| Estructura | Función | Impacto digital | Nivel de riesgo |
|---|---|---|---|
| Corteza Prefrontal | "Autocontrol, toma de decisiones y pensamiento analítico." | "En formación hasta los 25 años. El uso constante de estímulos externos 'anestesia' su maduración, dificultando la gestión de impulsos." | Alto |
| Sistema de Recompensa | "Gestión del placer, búsqueda de gratificación y motivación." | "Explotado por el scroll infinito. Crea un bucle adictivo de validación social que prioriza el placer inmediato sobre el esfuerzo." | Crítico |

**Dato destacado — "Demencia Digital: la poda sináptica bajo el algoritmo":**
> "Según el psiquiatra Manfred Spitzer, la poda sináptica adolescente está siendo moldeada por consumo superficial. Al externalizar funciones cognitivas al mundo digital, se produciría una atrofia funcional del hipocampo y una reducción de la capacidad atencional a largo plazo — una hipótesis suya, con debate académico abierto sobre su alcance real."
> — Manfred Spitzer, "psiquiatra y neurocientífico, Demencia Digital (2013) — es la tesis de un autor identificable, no un estudio cuantitativo ni consenso científico cerrado; hay debate académico sobre el alcance real de sus conclusiones" (sin URL — `url: undefined`)

---

## 6. Identidad y Cultura del Like

Layout de 2 columnas: imagen (foto de stock de Unsplash de un/a adolescente con celular) + texto. Sin variante de audiencia en el texto principal.

Título: "La Cultura del Like y la Identidad". Copy: "La adolescencia es una etapa crucial para el desarrollo individual y la búsqueda de aceptación social." + "En el entorno digital, los adolescentes construyen **identidades múltiples**. Los perfiles online muestran versiones idealizadas que generan comparación constante con estándares inalcanzables. El éxito en métricas (seguidores/likes) se convierte en un falso sinónimo de valor personal que erosiona la autenticidad."

**3 tarjetas de "identidad" (cada una con su propia fuente):**

| Título | Descripción | Fuente |
|---|---|---|
| Auto-objetivación | "El adolescente se percibe como un producto visual, priorizando la estética sobre la esencia." | Fredrickson, B. L. & Roberts, T. A. (1997), "'Objectification theory: Toward understanding women's lived experiences and mental health risks', Psychology of Women Quarterly, 21(2), 173-206" (`https://doi.org/10.1111/j.1471-6402.1997.tb00108.x`) |
| Identidad fragmentada | "2 de cada 3 mantienen más de un perfil en la misma red social, disociando su Yo Real del Yo Digital." | **Sin fuente puntual confirmada** — "cifra '2 de cada 3 mantienen más de un perfil' pendiente de verificación" — `unverified: true` |
| La trampa algorítmica | "Los algoritmos amplifican contenido dañino: el 32% de adolescentes se sentía peor con su cuerpo tras usar Instagram." | The Wall Street Journal, "The Facebook Files" (2021) — "investigación interna de Meta/Instagram filtrada por Frances Haugen — '32% de las adolescentes que se sentían mal con su cuerpo dijeron que Instagram las hacía sentir peor'" (`https://www.pressreader.com/uk/scottish-daily-mail/20210915/281724092678704`) |

> Nota: la imagen de stock (`images.unsplash.com`) es la única imagen de contenido genérico/no propia usada en toda la temática — el resto son infografías/carruseles propios.

---

## 7. Impacto en la Salud Mental

Sección de fondo oscuro (`bg-slate-900`). Intro con **variante de audiencia**:

| Docentes | Familias |
|---|---|
| "Los ingresos hospitalarios por autolesión en jóvenes se triplicaron en dos décadas, y en algunas regiones más de 4 de cada 10 adolescentes reportó pensamientos suicidas. La evidencia es concluyente — y como docente, sos una de las primeras personas en posición de notar estas señales en el aula." | "Los ingresos hospitalarios por autolesión en jóvenes se triplicaron en dos décadas, y en algunas regiones más de 4 de cada 10 adolescentes reportó pensamientos suicidas. La evidencia es concluyente — y como familia, sos quien está en mejor posición para notar estas señales a tiempo." |

**3 tarjetas de "crisis clínica" (fondo oscuro, sin variante de audiencia en el cuerpo):**

| Título | Subtítulo | Descripción | Ítems destacados | Fuente(s) |
|---|---|---|---|---|
| Síndrome FOMO | Fear of Missing Out | "El miedo a perderse algo mantiene al cerebro en estado de alerta constante. La ansiedad generada por creer que otros tienen experiencias más gratificantes." | "Conexión compulsiva imposible de pausar." · "Angustia intensa al desconectarse." | Przybylski, Murayama, DeHaan & Gladwell (2013) — "validación académica del FOMO — término acuñado por Dan Herman (1996) y popularizado por Patrick McGinnis (2004); Computers in Human Behavior, 29(4), 1841-1848" (`https://doi.org/10.1016/j.chb.2013.02.014`) |
| Ansiedad y Depresión | Crisis clínica sin precedentes | "La hiperconexión y la comparación social continua son factores clave. En España, los ingresos hospitalarios por autolesión en jóvenes se triplicaron en dos décadas; en Cataluña, el 43,3% de los adolescentes de 11 a 18 años reportó pensamientos suicidas." | "Alteraciones del sueño y ciclo circadiano." · "Baja autoestima basada en métricas." | 2 fuentes: Ministerio de Sanidad de España (autolesiones triplicadas, vía FAROS Sant Joan de Déu) + Departament de Salut/Educació, Generalitat de Catalunya (2022) — "43,3% de niños de 11 a 18 años en Cataluña con pensamientos suicidas. Dato autonómico (Cataluña), no nacional" |
| Trastornos Alimentarios | Impacto de la presión estética | "La comparación social constante actúa como disparador de insatisfacción corporal. El 58% duerme con el móvil, triplicando el riesgo de ciberacoso y contacto con desconocidos." | "Afecta principalmente a mujeres adolescentes." · "Distorsión de la imagen corporal." | **`DUERME_CON_MOVIL_SOURCE`** = UNICEF España 2021, marcada `unverified: true` — "el informe verificado habla de '6 de cada 10' (60%); la página dice 58% — cerca pero no idéntico, posible redondeo o cifra de otra sección del mismo informe" |

> Nota: el 58% "duerme con el móvil" es la MISMA cifra que aparece en el panel del Hero (sección 1) — el código deja constancia explícita de una discrepancia entre el informe fuente (que hablaría de 60%) y el dato usado en la página (58%), algo a resolver en el rediseño.

---

## 8. Ecosistemas de Riesgo

Fondo claro (`bg-slate-50`). Subtítulo con **variante de audiencia**:

| Docentes | Familias |
|---|---|
| "El ocio digital ha mutado hacia entornos donde los peligros éticos y económicos se normalizan — muchos de ellos invisibles para un adulto que no los busca activamente, también en el aula." | "El ocio digital ha mutado hacia entornos donde los peligros éticos y económicos se normalizan — muchos de ellos invisibles para un adulto que no los busca activamente." |

**3 tarjetas de riesgo (cuerpo fijo, sin variante de audiencia):**

| Título | Cifra destacada | Descripción | Fuente |
|---|---|---|---|
| Gaming y Brecha de Género | 54.7% | "El 54.7% consume juegos por encima de su clasificación PEGI, escalando al 66.5% en chicos, con mayor exposición a contenidos violentos." | `PEGI_SOURCE` = alias de `UNICEF_ESPANA_PENDIENTE` (unverified) |
| Apuestas Online | 70.000 | "70.000 estudiantes de ESO apostaron dinero en internet. El 43.1% cree que es una vía para ganar dinero fácil, sin conocer los mecanismos de adicción." | `APUESTAS_ONLINE_SOURCE` = UNICEF España 2021, "coincide casi textual: 'más de 70.000 estudiantes de ESO han comenzado a apostar o jugar dinero online'" (confirmada, no unverified) |
| Ciberacoso 24/7 | 23.3% | "La desprotección de la víctima es total. Solo el 23.3% de los padres revisa las clasificaciones de edad. El acoso no tiene horario ni espacio físico." | `PADRES_SOURCE` = alias de `UNICEF_ESPANA_PENDIENTE` (unverified) |

> Nota técnica: `PEGI_SOURCE` y `PADRES_SOURCE` son ambos el mismo re-export de `UNICEF_ESPANA_PENDIENTE` con nombres distintos (`import { UNICEF_ESPANA_PENDIENTE as PEGI_SOURCE, UNICEF_ESPANA_PENDIENTE as PADRES_SOURCE }`) — es decir, 2 de las 3 tarjetas de riesgo comparten la fuente "pendiente de verificar", aunque tratan temas distintos (gaming/PEGI vs. supervisión parental).

---

## 9. Hoja de Ruta para la Salud Digital (ancla `#hoja-de-ruta`)

**Elemento interactivo — selector de 5 pasos** (lista vertical de botones a la izquierda, panel de detalle a la derecha con transición `AnimatePresence`, sin persistencia de estado — se resetea al recargar). Badge e intro con variante de audiencia:

| Campo | Docentes | Familias |
|---|---|---|
| Badge | "Guía para educadores" | "Guía para familias" |
| Intro | "La familia es el mayor influencer, pero la escuela es el segundo entorno más presente en la vida de un adolescente. Cinco pasos para pasar de la restricción pasiva al acompañamiento activo, dentro y fuera del aula." | "La familia es el mayor influencer en la vida de un adolescente. Cinco pasos para pasar de la restricción pasiva al acompañamiento activo, en el día a día de tu casa." |

**Los 5 pasos (título y descripción por audiencia, salvo el paso 4 que es fijo):**

### Paso 1 — "Entender que la madurez importa más que la edad"
- Docentes: "La decisión sobre el primer dispositivo es de la familia, pero como docente podés ayudar a leerla: la capacidad de autocontrol, responsabilidad y tolerancia a la frustración que ves en el aula es un buen indicador para orientar a las familias que te consultan."
- Familias: "La decisión sobre el primer dispositivo es tuya como familia: la capacidad de autocontrol, responsabilidad y tolerancia a la frustración que ves en tu hijo o hija en el día a día es un mejor indicador que la edad sola."

### Paso 2 — "Leer el impacto de la falta de descanso"
- Docentes: "Dormir con el móvil triplica el riesgo de ciberacoso, sexting y contacto con desconocidos, además de eliminar la fase REM. Un estudiante que llega agotado o disperso puede estar arrastrando esto — es un dato útil para entender lo que pasa en el aula y para conversarlo con la familia."
- Familias: "Dormir con el móvil triplica el riesgo de ciberacoso, sexting y contacto con desconocidos, además de eliminar la fase REM. Un hijo o hija que se despierta agotado o disperso puede estar arrastrando esto — vale la pena sacar el cargador del cuarto."

### Paso 3 — título y descripción varían por audiencia
- Título docentes: "Trabajar la alfabetización algorítmica en el aula" / Título familias: "Trabajar la alfabetización algorítmica en casa"
- Descripción docentes: "Enseñales que el contenido que ven es una construcción interesada del algoritmo, no una realidad social fiel: el algoritmo amplifica lo que capta atención, no lo que es verdad. Es contenido que podés incorporar directamente a tus clases, no solo delegarlo a la familia."
- Descripción familias: "Enseñales que el contenido que ven es una construcción interesada del algoritmo, no una realidad social fiel: el algoritmo amplifica lo que capta atención, no lo que es verdad. Es una charla que podés tener en casa, no algo para delegarle solo a la escuela."

### Paso 4 — "Promover el ocio analógico también desde la escuela" / "Promover el ocio analógico en casa" (título varía, **descripción fija**)
- Título docentes: "Promover el ocio analógico también desde la escuela" / Título familias: "Promover el ocio analógico en casa"
- Descripción (fija, ambas audiencias): "El deporte y las relaciones cara a cara son los únicos capaces de entrenar la tolerancia a la frustración y la paciencia. Los espacios extracurriculares y un recreo bien aprovechado cumplen ese rol tanto como cualquier actividad en casa."

### Paso 5 — "Ser un adulto de referencia, no solo un fiscalizador" (título fijo, descripción por audiencia)
- Docentes: "Pasar de la fiscalización a la mentoría también aplica en el aula. Junto con la familia, sos uno de los adultos de referencia de tus estudiantes: tu presencia, empatía y sentido común dentro del aula son irremplazables."
- Familias: "Pasar de la fiscalización a la mentoría también aplica en casa. Sos uno de los adultos de referencia de tus hijos: tu presencia, empatía y sentido común son irremplazables, más que cualquier control parental."

Ninguno de los 5 pasos tiene fuente citada (no usan `SourceCite`) — son recomendaciones propias, no datos/estadísticas.

---

## 10. Temas Relacionados

Sin variante de audiencia. 3 tarjetas de navegación cruzada a otras temáticas:

| Label | Href | Descripción |
|---|---|---|
| NNyA y el Entorno Digital | `/nnya-entorno-digital` | "Cómo perciben el mundo digital" |
| Violencia Digital en Infancias | `/violencia-digital-infancias` | "Grooming, ciberbullying y protección" |
| Huella Digital | `/huella-digital` | "Identidad, privacidad y control" |

Con link "Ver todas" → `/tematicas`.

---

## 11. Infografía + Carrusel

**Elemento interactivo #1 — Infografía con lightbox** (mismo mecanismo de zoom/pan/pinch que `huella-digital`, con controles idénticos: zoom 1x-4x en pasos de 0.5, pan por arrastre, pinch-to-zoom táctil, scroll de mouse, cierre con Escape). Imagen: `/weekly-content/2026-W26/infografia 8.png`, alt "Infografía Hiperconectividad Digital".

**Elemento interactivo #2 — Carrusel de recursos** (8 láminas, mismo mecanismo de flechas/dots/`AnimatePresence` que en `ciudadania-digital`/`huella-digital`): `/weekly-content/2026-W26/carrusel/1.svg` a `8.svg`. Header con variante de audiencia:

| Campo | Docentes | Familias |
|---|---|---|
| Label | "Material para el aula" | "Presentación completa" |
| Título | "Hiperconectividad Digital — Recursos para el Aula" | "Hiperconectividad Digital — Galería" |

---

## 12. Fuentes Citadas (listado completo, `FUENTES_COMPLETAS`)

9 entradas — todas las de `lib/hiperconectividad-digital-content.ts`:

| # | Fuente | URL | Nota |
|---|---|---|---|
| 1 | Meer / Psicopartner — concepto de hiperconectividad | https://www.meer.com/es/95770-tecnologia-y-salud-mental-en-tiempos-de-hiperconectividad | — |
| 2 | Craig Brod (1984) — tecnoestrés, citado en Psicopartner | https://www.psicopartner.com/hiperconectividad-tecnoestres-y-ansiedad/ | — |
| 3 | Andrade, Guadix, Rial y Suárez (2021) — UNICEF España, Impacto de la tecnología en la adolescencia | https://www.unicef.es/publicacion/impacto-de-la-tecnologia-en-la-adolescencia | — |
| 4 | Manfred Spitzer — Demencia Digital (2013) | *(sin URL)* | presentado como postura de autor, no consenso científico cerrado |
| 5 | Fredrickson & Roberts (1997) — teoría de la autoobjetivación | https://doi.org/10.1111/j.1471-6402.1997.tb00108.x | — |
| 6 | The Wall Street Journal — "The Facebook Files" (2021) | https://www.pressreader.com/uk/scottish-daily-mail/20210915/281724092678704 | — |
| 7 | Przybylski, Murayama, DeHaan & Gladwell (2013) — FOMO | https://doi.org/10.1016/j.chb.2013.02.014 | — |
| 8 | Ministerio de Sanidad de España — autolesiones en jóvenes, vía FAROS Sant Joan de Déu | https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion | — |
| 9 | Generalitat de Catalunya (2022) — ideación suicida adolescente, encuesta de bienestar emocional | https://escolasalut.sjdhospitalbarcelona.org/es/observatoriofaros/noticias/perfiles-ninos-adolescentes-autolesion | dato autonómico (Cataluña), no nacional |

> Nota: este listado NO incluye entradas separadas para `UNICEF_ESPANA_PENDIENTE` (usada 4 veces: 8h pantallas, 77% sin límite, 29.1% normas, PEGI, padres) ni para `IDENTIDAD_FRAGMENTADA_SOURCE` ("sin fuente puntual confirmada") — ambas se citan inline en la página vía `SourceCite` pero no tienen entrada propia en `FUENTES_COMPLETAS` (la nota de "pendiente de verificar"/"sin fuente confirmada" solo aparece en el tooltip inline, no en el listado final) — mismo patrón de inconsistencia ya visto en `ciudadania-digital` (Barco de Teseo) y `huella-digital` (GDPR).

---

## 13. CTA de cierre — "Reconectar con la realidad"

Sección de fondo oscuro con degradado (`#0a0618` → `#0d0f2b` → `#06101a`). Badge fijo: "#TambiénSosReferencia". H2 fijo: "Reconectar con la realidad". Texto de cierre con variante de audiencia:

| Docentes | Familias |
|---|---|
| "La estabilidad emocional de los estudiantes no puede ser subcontratada a una plataforma digital. Tu presencia, empatía y sentido común son irremplazables en el entorno digital de quienes tenés en el aula — junto con la familia, sos parte de esa red de sostén." | "La estabilidad emocional de tus hijos no puede ser subcontratada a una plataforma digital. Tu presencia, empatía y sentido común son irremplazables en su vida digital — junto con la escuela, sos parte de esa red de sostén." |

Botón único: "Ver todas las temáticas" → `/tematicas`.

---

## Todas las fuentes citadas (`source-cite.tsx`), consolidado

Misma interfaz que las otras 2 temáticas del grupo, con una diferencia funcional propia: acepta un prop **`dark`** para invertir la paleta de color (texto blanco translúcido vs. slate), porque esta página alterna secciones de fondo claro y oscuro dentro del mismo scroll — a diferencia de `ciudadania-digital` (siempre paleta cyberpunk oscura) y `huella-digital` (siempre paleta clara).

**Fuentes marcadas `unverified: true` (4):**
1. `UNICEF_ESPANA_PENDIENTE` (usada 4 veces: 8h de pantallas, 77% sin límite, 29.1% normas en el hogar, Gaming/PEGI, supervisión parental — es la fuente "insegura" más reutilizada de la temática)
2. `IDENTIDAD_FRAGMENTADA_SOURCE` ("2 de cada 3 mantienen más de un perfil")
3. `DUERME_CON_MOVIL_SOURCE` (58% duerme con el móvil — con discrepancia numérica documentada respecto al informe fuente)
4. (la nota de Manfred Spitzer no está marcada `unverified: true` en el tipo, pero el propio texto y el listado de fuentes la enmarcan explícitamente como "tesis de un autor, no consenso científico" — tratamiento editorial equivalente aunque no use el flag técnico)

**Fuentes confirmadas / con cita académica primaria:** Meer/Psicopartner, Craig Brod, UNICEF España 2021 (versión confirmada), Fredrickson & Roberts, WSJ/Facebook Files, Przybylski et al. (FOMO), Ministerio de Sanidad España, Generalitat de Catalunya.

---

## Resumen de hallazgos para el rediseño

1. **Única temática del grupo "Ciudadanía Digital" sin TOC ni estructura de 9 secciones numeradas** — 12 secciones de scroll libre sin índice de navegación, lo que dificulta saltar directo a un tema si la página es larga (1583 líneas de JSX en un solo archivo, sin dividir en subcomponentes).
2. **Menor proporción de contenido por audiencia** que `ciudadania-digital`/`huella-digital`: de las 12 secciones, solo 5 tienen algún fragmento con `AudienciaTexto` (Hero, Salud Mental, Ecosistemas de Riesgo, Hoja de Ruta, CTA de cierre) — las 7 restantes (Concepto, Stats Bento, TIC→TRIC, Arquitectura Cerebral, Identidad, Temas Relacionados, Infografía/Carrusel salvo su header) son 100% fijas.
3. **`UNICEF_ESPANA_PENDIENTE` es la fuente más reutilizada y la menos confiable**: 3 estadísticas del Stats Bento (8h, 77%, 29.1%) + 2 de Ecosistemas de Riesgo (vía los alias `PEGI_SOURCE`/`PADRES_SOURCE`) comparten esta única fuente marcada como no verificada puntualmente — 5 cifras distintas dependiendo de una sola fuente "pendiente".
4. **Discrepancia numérica documentada en el propio código**: el dato "58% duerme con el móvil" (usado tanto en el panel del Hero como en la tarjeta de Trastornos Alimentarios) contradice la cifra real del informe UNICEF ("6 de cada 10" = 60%) según la nota del propio desarrollador — vale la pena resolver esto antes de republicar el dato.
5. **Panel "Monitor de Riesgo Digital" del Hero tiene 2 cifras sin fuente ni repetición en el resto de la página** ("71% sin normas en el hogar", "67% FOMO activo") — aparecen una sola vez, de forma decorativa, sin `SourceCite`.
6. **2 alias de la misma constante para fuentes distintas** (`PEGI_SOURCE`/`PADRES_SOURCE` ambas apuntando a `UNICEF_ESPANA_PENDIENTE`) — funciona pero es una capa de indirección que puede confundir en el rediseño si se busca por nombre de fuente y no por contenido.
7. **Fuente sin URL**: Manfred Spitzer (Demencia Digital) es la única fuente de toda la temática con `url: undefined` — no hay forma de verificarla con un link, a diferencia de las otras 8.
8. **Listado final de "Fuentes Citadas" (sección 12) no incluye 2 fuentes que sí se citan inline**: `UNICEF_ESPANA_PENDIENTE` (aunque comparte autor con la entrada #3, tiene su propia nota "pendiente de verificar" que se pierde en el listado) e `IDENTIDAD_FRAGMENTADA_SOURCE` ("sin fuente puntual confirmada") no aparece como entrada propia — mismo patrón de inconsistencia ya señalado en las auditorías de `ciudadania-digital` y `huella-digital`.
9. **Única imagen de stock/foto real de la temática** (Unsplash, sección Identidad) en medio de una página que por lo demás usa solo infografías/ilustraciones propias — vale la pena decidir en el rediseño si se reemplaza por una infografía propia consistente con el resto.
10. **El selector interactivo de la Hoja de Ruta no persiste estado** (vuelve al paso 1 al recargar) — a diferencia de los checklists de `huella-digital`/`ciudadania-digital` que sí guardan progreso; acá no hay ningún elemento de esta temática que alimente `useTematicaProgress` más allá del botón final "marcar como completada" (no hay `computeProgress` propio, a diferencia de `huella-digital` que sí define uno para su checklist de 3 pasos).
11. **Es la única temática del grupo con animación de scroll paralaje en el Hero** (`useScroll`/`useTransform` sobre `heroY`/`heroOpacity`) y con estilos CSS-in-JS inyectados por `<style dangerouslySetInnerHTML>` — mecanismos técnicos propios que no se repiten en `ciudadania-digital` ni `huella-digital`, útil tenerlo en cuenta si el rediseño busca unificar el enfoque visual entre las 3 temáticas del grupo "Ciudadanía Digital".
