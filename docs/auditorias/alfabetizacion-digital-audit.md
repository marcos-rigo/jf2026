# Auditoría de contenido — Alfabetización Digital

Base para rediseño. Recorrido completo de `lib/alfabetizacion-digital-content.ts` (386 líneas) y los 11 archivos que lo consumen (`app/alfabetizacion-digital/alfabetizacion-digital-content.tsx`, 356 líneas, + `components/alfabetizacion-digital/*.tsx`). Solo lectura, nada modificado.

Ruta: `/alfabetizacion-digital`. Título de página: "Alfabetización Digital: Del Acceso Técnico a la Autonomía Cognitiva | José Farhat". Layout: scroll continuo de 10 secciones numeradas (00-09, ver tabla del TOC), sidebar `TocNav` agrupado en **4 "tiers" de lectura** (Fundamentos / Marco de referencia / Aplicación / Síntesis) — mecanismo de agrupación único de esta temática, no presente en `ciudadania-digital`/`huella-digital`/`hiperconectividad-digital`. Además de la barra de progreso de lectura habitual (scroll-linked), esta página agrega una **barra de progreso de lectura fija en el borde superior de toda la ventana** (`readingBar`, gradiente azul→índigo→violeta, vinculada a `scrollYProgress` con `useSpring`) — elemento único de esta temática. `Navbar`/`Footer`/`BackToDashboardButton` en el nivel de contenido (no hay `page.tsx` con wrapper propio, el `page.tsx` delega todo a `AlfabetizacionDigitalContent`). Progreso de checklist (5 ítems) persiste vía `useTematicaProgress` (tematicaId `alfabetizacion-digital`), con `TematicaCompletarButton` al final + una barra de progreso adicional visible fuera de la sección de recursos.

Patrón de audiencia: **Group A** (`resolveTexto` + `AudienciaTexto`), fallback explícito a `'docentes'`. Particularidad: hay un campo (`CONCEPTO_NOTA_FAMILIAS`) **declarado pero explícitamente sin escribir** (`undefined`), documentado en el propio código como pendiente — ver hallazgos. El contenido variable por audiencia está concentrado en 2 secciones (Ejemplos Concretos y Aula/Rol Docente); el resto de las 10 secciones (Hero, Historia, Características, Tipos/Marcos, Infografía, Ventajas, Riesgos, Recursos) es 100% fijo, igual para toda audiencia.

**`SourceCite` de esta temática es visualmente distinto a los de las otras 3** (documentado en el propio comentario del código como "Provenance Stamp"): cada cita es una "ficha catalográfica" con un sello circular animado — check violeta trazado (dibujo SVG progresivo) si la fuente tiene URL verificable, o reloj punteado ámbar si `unverified: true` — con animación de entrada al hacer scroll y micro-interacción de hover, todo desactivado bajo `prefers-reduced-motion`. Es la única `SourceCite` del sitio con esta identidad visual propia ("la temática más densa en fuentes del sitio", según el propio comentario).

---

## Índice de navegación (TOC) — 10 secciones agrupadas en 4 tiers

| # | id | Label | Label corto | Tier |
|---|---|---|---|---|
| 00 | `hero` | Inicio | Inicio | 1 — Fundamentos |
| 01 | `historia` | Genealogía Teórica | Historia | 1 — Fundamentos |
| 02 | `caracteristicas` | Dimensiones Críticas | Rasgos | 1 — Fundamentos |
| 03 | `tipos-variantes` | Niveles y Marcos | Niveles | 2 — Marco de referencia |
| 04 | `infografia` | Infografía Interactiva | Infografía | 2 — Marco de referencia |
| 05 | `ejemplos-concretos` | Ejemplos Concretos | Ejemplos | 3 — Aplicación |
| 06 | `ventajas` | Retorno Socioeconómico | Ventajas | 3 — Aplicación |
| 07 | `riesgos` | Riesgos y Desafíos | Riesgos | 3 — Aplicación |
| 08 | `aula` | Rol Docente | Aula | 4 — Síntesis |
| 09 | `recursos` | Centro de Recursos | Recursos | 4 — Síntesis |

> Nota: el header dentro del propio contenido (`alfabetizacion-digital-content.tsx`) rotula la sección "aula" como **"07 · Por qué es Importante Saberlo como Docentes"** (número 07), mientras que el TOC la numera como **08**. Y `AulaSection` internamente usa `AULA_EYEBROW` (`"08 · Por qué es Importante Saberlo como Docentes/en Casa"`), que sí coincide con el número del TOC. Es decir: hay 2 números distintos (07 y 08) para lo que visualmente es la misma sección, dependiendo de si se mira el encabezado envolvente en el archivo principal o el eyebrow interno de `AulaSection`.

---

## 00 — Hero (dentro de `alfabetizacion-digital-content.tsx`, sin subcomponente propio)

Único Hero de las 4 temáticas del grupo sin un `hero-section.tsx` separado — vive inline en el archivo principal. Sin variante de audiencia salvo una nota puntual.

**Badge fijo:** "MÓDULO FORMATIVO & LANDING ESTRATÉGICA 2026".

**H1 (fijo):** "Alfabetización Digital: del acceso técnico al andamiaje cognitivo".

**Párrafo intro (fijo):** "Más allá del simple manejo operativo de dispositivos: una capacidad holística e integral para procesar información con criterio, interactuar éticamente en la red y ejercer una ciudadanía activa e informada en la era de la IA."

### Elemento interactivo — Banner de 5 estadísticas con contador animado (`useCountUp`)

Único elemento de "count-up" (números que suben progresivamente al entrar en viewport, con easing cúbico, respetando `prefers-reduced-motion`) de las 4 temáticas del grupo. Datos:

| Valor final | Descripción | Sub-etiqueta |
|---|---|---|
| 54% | dispone de habilidades básicas completas | 5% carece de todo |
| 19% | alcanza nivel de uso intermedio | solución autónoma y IA |
| 7% | domina habilidades avanzadas | 47.1% carece totalmente |
| +3.19% | PIB por +10% de banda ancha fija | impacto econométrico BID |
| 80% | empleos middle-skill exigen competencias | escudo salarial ante IA |

> Nota: estas 5 cifras no llevan `SourceCite` en el banner mismo — la atribución (Fundación País Digital / BID / análisis regional) llega recién más abajo, en las secciones Tipos/Variantes y Ventajas, donde las mismas cifras se repiten con su fuente.

**Bloque "Constructo Holístico e Integración Cognitiva" (fijo, salvo la última línea):**
> "La alfabetización digital articula tres dimensiones indisolubles: **Técnica** (operación), **Cognitiva** (evaluación hipertextual y crítica) y **Socioemocional** (ética y resguardo en red)."

Seguido de `CONCEPTO_NOTA_DOCENTE` — texto plano, **no usa `resolveTexto`/`AudienciaTexto`** pese a estar destinado solo a audiencia docente:
> "Para un docente, esto implica que 'estar alfabetizado digitalmente' no es solo saber usar herramientas: es poder diseñar una clase que integre las tres dimensiones —técnica, cognitiva y socioemocional— en vez de reducir la alfabetización digital a manejo de software."

Esta nota **se muestra igual sea cual sea la audiencia seleccionada** (familias incluido), porque el código la importa como string fijo (`CONCEPTO_NOTA_DOCENTE`), no como campo resuelto por audiencia — ver hallazgos.

**Tríada de pilares (grid de 3 tarjetas, fijo):**

| Pilar | Descripción |
|---|---|
| Dimensión Técnica | "Manejo instrumental de hardware, software, redes, conectividad y herramientas avanzadas de automatización e IA." |
| Dimensión Cognitiva | "Pensamiento crítico, filtrado de infoxicación, procesamiento en tiempo real y navegación en arquitecturas no lineales." |
| Dimensión Socioemocional | "Responsabilidad ética, convivencia pacífica en comunidades virtuales, resguardo de la huella digital y netiqueta." |

**Cita del Concepto (definida en `lib` pero curiosamente NO se renderiza como cita/blockquote en ningún componente del Hero ni de otra sección — ver hallazgos):**
> "La alfabetización digital es un constructo holístico que integra dimensiones técnicas, cognitivas y socioemocionales — la intersección entre saber operar dispositivos, procesar información con criterio, y comportarse de forma ética y colaborativa en entornos digitales mediados."
> — Ng, W. (2012), "modelo holístico e integrador de aprendizaje tecnológico — intersección de las dimensiones técnica, cognitiva y socioemocional" (sin URL)

---

## 01 — Historia / Origen — "Genealogía Conceptual y Marcos Teóricos" (`historia-section.tsx`)

Título: "Evolución del Concepto: De la Destreza Operativa a la Transformación Crítica". Sin variante de audiencia. Es la sección más densa en autores/citas académicas del sitio.

**Tarjeta pionera — Paul Gilster (1997), "El Origen del Término" (badge "1997"):**
> Cuerpo: "Gilster formuló la primera definición académica amplia: no la habilidad de presionar botones, sino la capacidad de comprender y usar información proveniente de múltiples fuentes cuando se presenta a través de computadoras. Destacó cuatro competencias clave: evaluación crítica del contenido, navegación no lineal, búsqueda estructurada e integración informacional."
> Cita: "La visión pionera de Gilster definió la alfabetización digital como la capacidad de comprender y usar información de múltiples formatos y fuentes cuando se presenta a través de computadoras — evaluación de contenidos, navegación no lineal e integración informacional."
> Fuente: Paul Gilster (1997), *Digital Literacy* (Wiley) — "la primera definición académica del término" (sin URL).

**Grid de 4 modelos contemporáneos (sin `SourceCite` component en 2 de las 4 — ver detalle):**

1. **Yoram Eshet-Alkalai (2012)** — sin cita textual destacada, solo párrafo: "Diseño cognitivo de 5 alfabetizaciones interconectadas: **socioemocional** (ética y comportamiento en red), **pensamiento ramificado** (navegación hipertextual), **pensamiento en tiempo real** (procesamiento ante estímulos masivos), **informacional** (filtrado de sesgos) y **fotovisual/reproducción** (remezcla multimodal)." — este modelo es la base de la sección 02 (Características).

2. **Ng, W. (2012) — Modelo Holístico** — sin cita textual destacada: "La alfabetización digital requiere la convergencia equilibrada de tres dimensiones principales: la **dimensión técnica** (destreza instrumental), la **dimensión cognitiva** (evaluación informacional y pensamiento crítico) y la **dimensión socioemocional** (comunicación ética y resguardo de la privacidad)." — es la misma fuente (`NG_SOURCE = CONCEPTO_QUOTE.source`) del Hero.

3. **Spires & Bartlett (2012) — Proceso Secuencial:**
   > "Modelan la alfabetización como un proceso operativo en tres momentos continuos: **acceso efectivo** a la información digital, **producción estructurada** de nuevo conocimiento y contenido, e **intercambio responsable** en comunidades hiperconectadas."
   > Cita: "Un proceso operativo y secuencial de apropiación web en tres momentos: acceso efectivo a la información, producción estructurada de contenido, e intercambio responsable."
   > Fuente: Spires, H. & Bartlett, M. (2012) — sin URL, sin nota adicional.

4. **Martin & Grudziecki (2013) — Los 3 Niveles:**
   > "Propone una pirámide de desarrollo: **1. Alfabetización instrumental** (destrezas operativas básicas), **2. Uso digital aplicado** (integración contextual a tareas profesionales y académicas), y **3. Transformación digital crítica** (capacidad de innovar y cuestionar estructuras)."
   > Cita: "Una competencia para la transformación social y el ejercicio del pensamiento crítico, en tres niveles progresivos: (1) alfabetización instrumental, (2) uso digital aplicado, (3) transformación digital crítica."
   > Fuente: Martin, A. & Grudziecki, J. (2013) — sin URL, sin nota adicional.

> Nota: a diferencia del resto de la página, estas 4 tarjetas de modelos teóricos **no usan el componente `SourceCite`** — el nombre del autor y el año están hardcodeados en el `<h3>` de cada tarjeta, y la cita aparece como blockquote sin el "sello" visual de `SourceCite`. El propio comentario de `recursos-section.tsx` (sección 09) lo explica: "las referencias teóricas sin edición digital (Gilster, Eshet-Alkalai, etc.) se citan en el cuerpo de cada sección, no en este repositorio de enlaces" — es una decisión consciente, pero rompe la consistencia visual de atribución del resto de la página.

---

## 02 — Características — "Las 5 Dimensiones Cognitivas del Usuario Competente" (`caracteristicas-section.tsx`)

Basadas explícitamente en el modelo de Eshet-Alkalai (sección 01). Sin variante de audiencia, sin citas propias (hereda la atribución de la sección anterior).

| # | Dimensión | Descripción |
|---|---|---|
| 1 | Alfabetización socioemocional | "Centrada en los aspectos relacionales y éticos; promueve la colaboración virtual y el comportamiento responsable en entornos digitales mediadores. En el aula, es la base de las normas de netiqueta y convivencia digital que trabajamos en Ciudadanía Digital." |
| 2 | Pensamiento ramificado (branching literacy) | "Destreza cognitiva para navegar con fluidez en arquitecturas de información no lineales, construyendo sentido en espacios hipertextuales. En el aula, es la habilidad que se pone en juego cuando un estudiante navega fuentes, hipervínculos y pestañas sin perder el hilo de la consigna original." |
| 3 | Pensamiento en tiempo real | "Capacidad de procesar simultáneamente flujos dinámicos de información y estímulos rápidos — crítica ante la saturación de datos actual. En el aula, se relaciona directamente con los desafíos de atención y multitarea que abordamos en Hiperconectividad Digital." |
| 4 | Alfabetización informacional | "Competencia para buscar, filtrar y evaluar críticamente la validez y los sesgos de los datos digitales, combatiendo activamente la desinformación. En el aula, es la misma habilidad que trabajamos con el método C.A.F.E. en la temática de Alfabetización Mediática." |
| 5 | Alfabetización de reproducción | "Capacidad creativa para la decodificación multimodal y la creación de nuevos contenidos mediante remezcla y lenguajes gráficos complejos. En el aula, es la competencia que entra en juego al enseñar creación responsable de contenido y detección de imágenes o videos generados por IA." |

> Nota de contenido interesante: cada una de las 5 descripciones incluye una frase de cierre "En el aula, ..." que **cruza explícitamente hacia otras temáticas del sitio** (Ciudadanía Digital, Hiperconectividad Digital, Alfabetización Mediática) — es el único lugar de la temática con este tipo de puente editorial hacia contenido hermano, y estas frases usan siempre la palabra "aula" incluso aunque no hay `resolveTexto` aplicado (afecta también a la audiencia familias).

**Cuadro de cierre — "Carácter Transversal en la Vida Cívica y Profesional" (fijo):**
> "Estas competencias no se restringen al campo académico o laboral: influyen directamente en la salud mental (resguardo frente a la sobreestimulación), en el pensamiento crítico contra los algoritmos de polarización y en el acceso pleno a derechos ciudadanos frente a la digitalización del Estado."

---

## 03 — Tipos o Variantes — "Estándares Internacionales y las 3 Capas de la Brecha Digital" (`tipos-variantes-section.tsx`)

La sección más larga en subsecciones (4). Sin variante de audiencia.

### Sub-sección 1 — Los 3 Niveles Progresivos de la Brecha Digital

| Nivel | Etiqueta | Descripción |
|---|---|---|
| Nivel 1 — Acceso | Físico | "Conectividad física: fibra óptica, dispositivos, cobertura. La brecha 'clásica' de los años 90, hoy insuficiente por sí sola para explicar la desigualdad digital." |
| Nivel 2 — Uso | Operativo | "Habilidades operativas y competencias para usar efectivamente las herramientas disponibles, más allá de tenerlas encendidas." |
| Nivel 3 — Aprovechamiento | Sustantivo | "Capacidad de transformar la tecnología en beneficios tangibles: calidad de vida, movilidad laboral, ingresos y participación ciudadana." |

### Sub-sección 2 — Marco Europeo DigComp 3.0 (JRC 2025/2026)

Copy: "Estructura de referencia internacional consolidada en **5 áreas competenciales principales**, integrando de forma transversal competencias en **Inteligencia Artificial** en 4 niveles de proficiencia (Básico, Intermedio, Avanzado y Altamente Avanzado)."

Fuente: Comisión Europea — Joint Research Centre, "DigComp 3.0: The Digital Competence Framework for Citizens — 5 áreas, integración transversal de IA (habilidades explícitas AI-E e implícitas AI-I), niveles de proficiencia Básico/Intermedio/Avanzado/Altamente Avanzado" (`https://joint-research-centre.ec.europa.eu/projects-and-activities/key-competences-lifelong-learning/digital-competence-framework-digcomp/digcomp-30_en`).

**Las 5 áreas competenciales:**
1. Información y datos
2. Comunicación y colaboración
3. Creación de contenidos y pensamiento computacional
4. Seguridad, bienestar digital y huella ambiental
5. Resolución de problemas

**Bloque "Integración de IA en DigComp 3.0: Habilidades AI-E (Explícitas) y AI-I (Implícitas)":**
> "Distingue entre la interacción directa mediante prompt engineering y comprensión algorítmica (*AI-E*) y el pensamiento crítico frente a contenidos sintéticos o decisiones automatizadas mediadas por IA (*AI-I*)."

### Sub-sección 3 — Marco Regional DigCompALC (CEPAL 2026) — Dra. María Florencia Ripani

**Cita destacada:**
> "Un marco regional para América Latina y el Caribe, basado en la estructura del Marco Europeo DigComp 2.2 pero adaptado mediante metodología de codiseño a las realidades de la región: 10 niveles granulares agrupados en 5 categorías. El Nivel Prebásico (niveles 1 y 2) tiene valor propio para visibilizar a grupos en exclusión extrema — comunidades rurales, adultos mayores, pueblos indígenas y migrantes — que los marcos tradicionales, pensados desde el piso europeo, no logran registrar."
> — María Florencia Ripani (2026), CEPAL, *Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC)* — LC/TS.2026/44 (`https://www.cepal.org/es/publicaciones/90120-marco-regional-competencias-digitales-america-latina-caribe`)

**2 tarjetas complementarias (fijas):**
- "10 Niveles Granulares en 5 Categorías": "Especialmente graduados para capturar transiciones de habilidades en contextos socioeconómicos heterogéneos."
- "El Valor del Nivel Prebásico (Niveles 1 y 2)": "Visibiliza comunidades rurales, adultos mayores, pueblos indígenas y migrantes que los marcos eurocéntricos invisibilizan."

### Sub-sección 4 — Índice de Ciudadanía Digital — Estado de Competencias (diagnóstico Chile 2024)

| Nivel | % | Descripción |
|---|---|---|
| Habilidades Básicas | 54% | "Poseen el conjunto completo. Un **5% carece totalmente** de ellas." |
| Habilidades Intermedias | 19% | "Únicamente este porcentaje domina software avanzado, videoconferencias y prompting inicial." |
| Habilidades Avanzadas | 7% | "Solo el 7% programa o administra bases de datos. El **47.1% no posee ninguna**." |

Estas son las mismas 3 cifras del banner del Hero (54%/19%/7%), aquí con fuente doble:
- Fundación País Digital, "Índice de Ciudadanía Digital, diagnóstico Chile 2024 — metodología alineada con SEP México" (`https://paisdigital.org/portfolio-item/indice-de-ciudadania-digital/`)
- Biblioteca del Congreso Nacional de Chile (BCN), "Estudio de Alfabetismo Digital y Competencias — informe N.º 34/25" (`https://www.bcn.cl/obtienearchivo?id=repositorio/10221/37647/1/Informe_34_25_Alfabetismo_digital_en_Chile.pdf`)

---

## 04 — Infografía Interactiva (`infografia-viewer.tsx`)

Único elemento propio de esta sección — no hay más contenido textual salvo el bloque introductorio en el archivo principal.

**Bloque introductorio (fijo, en `alfabetizacion-digital-content.tsx`):**
> H2: "Agenda Digital y Alfabetización: El Motor de Cambio para América Latina y el Caribe"
> Copy: "Toda la síntesis visual del módulo en una sola lámina: dimensiones, brecha digital, impacto del PIB, IA regional y comparación de habilidades por país. Hacé clic para explorarla con zoom."

**Elemento interactivo — Lightbox de zoom/pan/pinch** (mismo mecanismo que `huella-digital` e `hiperconectividad-digital`: zoom 1x-4x en pasos de 0.5, arrastre con mouse, gestos táctiles de pinch, scroll de mouse, cierre con Escape). Imagen: `/img/alfabetizacion/infografia-alfabetizacion-digital.webp` — única temática del grupo que usa una ruta bajo `/img/` en vez de `/weekly-content/`, y único formato `.webp` en vez de `.svg`/`.png`.

Caption bajo la infografía (fijo): "Dimensiones, brecha digital en 3 niveles, impacto del PIB, IA regional y comparación de habilidades por país — tocá la imagen para explorarla en detalle."

> Nota: esta temática **no tiene carrusel de recursos** (a diferencia de `ciudadania-digital`, `huella-digital` e `hiperconectividad-digital`, que sí lo tienen) — solo la infografía única con lightbox.

---

## 05 — Ejemplos Concretos — "Casos Concretos de Aplicación por Nivel de Proficiencia" (`ejemplos-section.tsx`)

**Única sección con variante de audiencia fuera de "Aula"** (además de la nota introductoria).

**Nota docente/familias (`EJEMPLOS_NOTA_DOCENTE`):**

| Docentes | Familias |
|---|---|
| "Estos tres niveles sirven para dos cosas a la vez: para que puedas autoevaluar tu propia alfabetización digital como docente, y para calibrar expectativas realistas sobre en qué nivel está cada estudiante — no todo el curso llega al aula en el mismo punto de partida." | "Estos niveles sirven tanto para que evalúes tu propia alfabetización digital como para calibrar expectativas realistas sobre en qué nivel está cada uno de tus hijos — no todos van a estar en el mismo lugar, y eso es esperable." |

**Los 3 niveles (contenido de ítems fijo, sin variante de audiencia):**

| Nivel | Etiqueta de tarjeta | Ítems |
|---|---|---|
| Nivel Básico | Nivel Operativo | Conexión a redes WiFi · Descarga y organización de archivos y carpetas · Uso de procesadores de texto · Aplicaciones de mensajería y redes sociales |
| Nivel Intermedio | Nivel Autolaboral | Búsqueda autónoma de soluciones a fallos técnicos · Trámites en plataformas de gobierno electrónico · Colaboración en la nube · Creación de prompts estructurados para IA generativa (ChatGPT, Claude, Gemini) |
| Nivel Avanzado / Altamente Especializado | Nivel Creador | Programación y lógica algorítmica (ej. Python) · Administración de bases de datos relacionales · Despliegue de sistemas seguros · Automatización de flujos de trabajo |

Cada tarjeta tiene además una nota de "impacto" fija en su pie: "💡 Impacto: Habilita conectividad funcional e interacción básica." (Básico) / "🤖 Prompting IA: ChatGPT, Claude, Gemini con contexto y roles." (Intermedio) / "⚡ Lenguajes: Python, SQL, Git y pipelines de automatización." (Avanzado).

---

## 06 — Ventajas — "El 'So What?' Layer: Impacto Macroeconómico y Protección Salarial" (`ventajas-section.tsx`)

Sin variante de audiencia. Copy introductorio: "La alfabetización digital no es una política asistencialista ni un beneficio secundario: es un motor cuantificable de crecimiento económico y el escudo principal contra la obsolescencia laboral."

**Tarjeta 1 — Impacto en Crecimiento Macroeconómico (+3.19% PIB):**
> "Evidencia econométrica en las Américas confirma que la conectividad significativa y las habilidades digitales asociadas contrarrestan la baja productividad regional, dinamizando sectores de comercio, servicios y educación."
> Cita: "Un incremento del 3.19% en el PIB y del 2.61% en la productividad —además de la creación de 67.000 empleos directos— por cada 10% de aumento en la penetración de banda ancha fija en los países de América Latina y el Caribe."
> Fuente: Banco Interamericano de Desarrollo (BID, 2012), "estudio sobre el impacto económico de la banda ancha en América Latina y el Caribe" (`https://www.fundacionmicrofinanzasbbva.org/revistaprogreso/economia-digital-en-america-latina-y-el-caribe-situacion-actual-y-recomendaciones/`).

**Tarjeta 2 — Escudo Salarial y Resiliencia ante la IA (80% Middle-Skill):**
> "El **80% de las vacantes en empleos de cualificación media** exigen competencias digitales. Ante la automatización del **44% de las tareas laborales** en América Latina, el índice de alfabetización digital ($D_i$) funciona como la mayor protección salarial."
> Cita: "El 80% de las vacantes en 'middle-skill jobs' exige competencias digitales. Ante el riesgo de que la IA automatice el 44% de las tareas laborales en América Latina, desarrollar estas habilidades es la vía principal para evitar una obsolescencia masiva de la fuerza laboral — y el índice de alfabetización digital (Di) se correlaciona positivamente con mayores ingresos salariales."
> Fuente: "Análisis econométrico regional, citado en el informe de referencia de esta temática" — **marcada `unverified: true`**, sin nombre de autor/institución específico ni URL.

**Bloque adicional — Autonomía Cívica y Transparencia Pública (fijo, sin cita):**
> "Permite acceder de forma autónoma a trámites de gobierno electrónico, auditar el presupuesto público en portales de datos abiertos, ejercer la libertad de expresión con responsabilidad ética y resguardar la propia privacidad frente a la vigilancia corporativa o estatal."

---

## 07 — Riesgos — "Barreras Críticas y Falacias en la Agenda Digital" (`riesgos-section.tsx`)

Sin variante de audiencia, sin citas (`SourceCite`) en ninguno de los 4 riesgos.

| Riesgo | Descripción |
|---|---|
| La ilusión del acceso | "Tener conectividad física (brecha de primer nivel) no resuelve la desigualdad si no existe capacitación cognitiva para aprovecharla (brecha de segundo nivel) — confundir ambas lleva a políticas que instalan fibra óptica sin formar a nadie para usarla." |
| Brechas interseccionales | "Aislamiento digital de personas mayores de 60 años, y brecha de género persistente en habilidades digitales avanzadas y sectores STEM." |
| Desinformación masiva | "Vulnerabilidad frente a bulos, polarización algorítmica y contenidos sintéticos manipulados (deepfakes) — la alfabetización informacional es la principal defensa disponible." |
| Invisibilidad de minorías | "Comunidades rurales, pueblos indígenas y personas migrantes quedan fuera de los marcos de medición tradicionales cuando no se registra el Nivel Prebásico. En el aula, un docente puede ser quien primero note que un estudiante llega sin las competencias de Nivel 1 o 2 que el resto del curso da por sentadas." |

> Nota: el 4º riesgo menciona explícitamente "En el aula, un docente..." como texto fijo, sin `AudienciaTexto` — mismo patrón de "aula" hardcodeada visto en la sección 02.

**Alerta de política pública (fija):**
> "Distribuir notebooks o instalar antenas 5G resuelve únicamente el Nivel 1 de la brecha. Sin programas de capacitación en pensamiento crítico, evaluación informacional y resguardo socioemocional, la tecnología tiende a amplificar la desigualdad en lugar de reducirla."

---

## 08 — Rol Docente / Rol de la Familia — "El [Docente/La Familia] como Mediador y Andamio de la Transición Digital" (`aula-section.tsx`)

Segunda y última sección con variante de audiencia real (además de Ejemplos Concretos).

| Campo | Docentes | Familias |
|---|---|---|
| Eyebrow | "08 · Por qué es Importante Saberlo como Docentes (El Rol en el Aula)" | "08 · Por qué es Importante Saberlo en Casa (El Rol de la Familia)" |
| Título | "El Docente como Mediador y Andamio de la Transición Digital" | "La Familia como Mediadora y Andamio de la Transición Digital" |
| Intro | "La escuela es la institución igualadora por excelencia. La alfabetización digital del cuerpo docente es la condición previa para convertir el aula en un espacio de diseño crítico y ético." | "El hogar es el primer espacio de socialización digital. Tu propia alfabetización digital como madre, padre o tutor es la condición previa para acompañar a tus hijos con criterio crítico y ético." |
| Etiqueta de eje | "Eje Docente" | "Eje Familiar" |

**Los 3 ejes (`AULA_PUNTOS`, título y descripción por audiencia):**

### Eje 1
- Título: "Apropiación pedagógica" (docentes) / "Apropiación cotidiana" (familias)
- Docentes: "El docente alfabetizado digitalmente diseña experiencias de aprendizaje contextualizadas, en vez de imponer tecnología por imposición institucional sin sentido pedagógico propio."
- Familias: "La familia alfabetizada digitalmente acompaña con criterio propio las actividades digitales de sus hijos, en vez de imponer o prohibir tecnología sin un sentido claro para la vida en casa."

### Eje 2
- Título: "Superación de barreras familiares" (docentes) / "Superación de barreras del hogar" (familias)
- Docentes: "La escuela cumple un rol mediador clave para mitigar la falta de andamiaje y competencias digitales en los hogares más vulnerables."
- Familias: "Vos cumplís un rol mediador clave en casa: cuanto más andamiaje y competencias digitales tengas, mejor podés sostener a tus hijos frente a lo que la escuela sola no alcanza a cubrir."

### Eje 3
- Título: "Desarrollo profesional continuo" (docentes) / "Aprendizaje continuo en familia" (familias)
- Docentes: "Formación permanente en comunidades de práctica docente: evaluación digital formativa, alfabetización mediática frente a desinformación y deepfakes, y uso ético de la IA en la enseñanza."
- Familias: "Actualización permanente como familia: aprender a reconocer desinformación y deepfakes, y acompañar a tus hijos en un uso ético de la IA, tanto en casa como en la escuela."

**Bloque de cierre — "Comunidades de Práctica" / "Acompañar el Uso de la IA en Casa":**

| Campo | Docentes | Familias |
|---|---|---|
| Título | "Comunidades de Práctica e Inteligencia Artificial en Educación" | "Acompañar el Uso de la Inteligencia Artificial en Casa" |
| Párrafo | "El desarrollo profesional continuo requiere que los docentes experimenten con evaluación formativa mediada por tecnología y entiendan el impacto de la IA generativa en el aula, para así guiar a sus alumnos en el uso ético, transparente y citatorio de los algoritmos." | "No hace falta ser experto/a en tecnología: entender el impacto de la IA generativa en la vida cotidiana de tus hijos te permite guiarlos en un uso ético, transparente y responsable de los algoritmos, dentro y fuera de la escuela." |

Además, en el archivo principal (fuera de `AulaSection`, como bloque introductorio propio) hay un párrafo fijo adicional sin variante de audiencia, con su propio eyebrow hardcodeado "07 · Por qué es Importante Saberlo como Docentes":
> "Diseño de experiencias contextualizadas para superar la falta de andamiaje en los hogares vulnerables y fomentar el uso ético de la IA."

---

## 09 — Centro de Recursos — "Repositorio Oficial de Referencias y Autoevaluación" (`recursos-section.tsx`)

Sin variante de audiencia en ningún elemento de esta sección (incluido el checklist, a diferencia de `ciudadania-digital`/`huella-digital`, cuyos checklists sí varían por audiencia).

### Sub-sección 1 — Políticas Públicas Destacadas en América Latina y el Mundo

Fuente compartida por las 4 filas: Cooperación regional eLAC2026 (CEPAL), "Agenda digital para América Latina y el Caribe — casos sistematizados en el informe de referencia de esta temática" (`https://elac.cepal.org/`).

| País | Programa | Descripción |
|---|---|---|
| Chile | Plan Ciudadanía y Alfabetización Digital 2024-2025 | "Esfuerzo conjunto entre la SEGEGOB y el MINEDUC. Su foco trasciende lo técnico para abordar la desinformación y la ética desde la alfabetización mediática." |
| México | @prende 2.0 y Habilidades Digitales para Todos | "Programas que buscan la integración curricular sistemática de las TIC en la educación básica." |
| Uruguay | Plan Ceibal | "Referente global que evolucionó de la entrega de dispositivos a un proyecto socio-educativo integral enfocado en cerrar la brecha de oportunidades." |
| Internacional | Apps and Girls (Tanzania), Robotito (Argentina), RoboBraille (Dinamarca) | "Iniciativas enfocadas en paridad de género en tecnología y en inclusión de personas con discapacidad visual." |

### Sub-sección 2 — Fuentes Oficiales y Publicaciones Relevantes (`FUENTES_COMPLETAS`, 5 entradas)

Estas son solo las fuentes con "documento oficial con link verificable" — el propio comentario del código aclara que las referencias teóricas sin edición digital (Gilster, Eshet-Alkalai, Ng, Spires & Bartlett, Martin & Grudziecki) se citan en el cuerpo de cada sección y deliberadamente NO están en este listado.

| # | Fuente | URL |
|---|---|---|
| 1 | María Florencia Ripani (2026) — CEPAL, Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC) | https://www.cepal.org/es/publicaciones/90120-marco-regional-competencias-digitales-america-latina-caribe |
| 2 | Comisión Europea — JRC, DigComp 3.0: The Digital Competence Framework for Citizens | https://joint-research-centre.ec.europa.eu/projects-and-activities/key-competences-lifelong-learning/digital-competence-framework-digcomp/digcomp-30_en |
| 3 | CEPAL — Agenda digital para América Latina y el Caribe (eLAC2026) | https://elac.cepal.org/ |
| 4 | Biblioteca del Congreso Nacional de Chile (BCN) — Estudio de Alfabetismo Digital y Competencias | https://www.bcn.cl/obtienearchivo?id=repositorio/10221/37647/1/Informe_34_25_Alfabetismo_digital_en_Chile.pdf |
| 5 | Fundación País Digital — Índice de Ciudadanía Digital | https://paisdigital.org/portfolio-item/indice-de-ciudadania-digital/ |

> Nota: al igual que en las otras 3 temáticas del grupo, este listado NO incluye entradas separadas para el BID (PIB_QUOTE, sección 06) ni para la fuente `unverified` de MERCADO_LABORAL_QUOTE (sección 06) — ambas se citan inline pero no figuran en `FUENTES_COMPLETAS`. Mismo patrón de inconsistencia detectado en las 3 auditorías anteriores del grupo.

### Sub-sección 3 — Checklist de Autoevaluación en Competencia Digital (`CHECKLIST_ITEMS`, definido localmente en el componente, no en `lib`)

5 ítems, persistidos vía `useTematicaProgress`. **Sin variante de audiencia** (a diferencia de los checklists de `ciudadania-digital`/`huella-digital`, que sí traducen cada ítem):

1. "Sé configurar redes WiFi seguras y administrar permisos de almacenamiento y privacidad en mis dispositivos."
2. "Aplico criterios de evaluación informacional para verificar fuentes, fecha e intención de los contenidos web."
3. "Diseño prompts estructurados con rol, contexto e instrucciones precisas para interactuar con herramientas de IA."
4. "Uso de forma autónoma plataformas de gobierno electrónico, firmas digitales y servicios públicos en línea."
5. "Practico normas de netiqueta, respeto la propiedad intelectual y protejo mi huella socioemocional en comunidades virtuales."

Debajo de esta sección, en el archivo principal, hay una barra de progreso adicional (fuera de `RecursosSection`) que muestra "Progreso del checklist" con contador `X/5` y barra visual — redundante con el "Mi Progreso"/checklist interno pero como bloque separado antes del botón de completar.

---

## Todas las fuentes citadas, consolidado

**Fuentes marcadas `unverified: true` (1):**
1. `MERCADO_LABORAL_QUOTE` (sección 06, Ventajas) — "Análisis econométrico regional, citado en el informe de referencia de esta temática", sin autor/institución nombrada ni URL.

**Fuentes confirmadas con URL:** Comisión Europea/JRC (DigComp 3.0), María Florencia Ripani/CEPAL (DigCompALC), Fundación País Digital, Biblioteca del Congreso Nacional de Chile, Banco Interamericano de Desarrollo (BID), Cooperación regional eLAC2026/CEPAL, Marc Prensky *(no aplica acá — nota: no confundir con `huella-digital`)*.

**Fuentes confirmadas sin URL** (autores/modelos teóricos, citados en el cuerpo pero fuera de `FUENTES_COMPLETAS`): Ng, W. (2012) — comparte fuente con el Hero; Paul Gilster (1997); Yoram Eshet-Alkalai (2012); Spires, H. & Bartlett, M. (2012); Martin, A. & Grudziecki, J. (2013).

---

## Resumen de hallazgos para el rediseño

1. **`CONCEPTO_NOTA_FAMILIAS` está declarada pero sin escribir** (`export const CONCEPTO_NOTA_FAMILIAS: string | undefined = undefined;`, con comentario "Sin escribir todavía — ver investigación 'contenido con variantes por audiencia'"). Mientras tanto, `CONCEPTO_NOTA_DOCENTE` se importa y renderiza como string fijo en el Hero **sin pasar por `resolveTexto`**, por lo que se muestra igual para todas las audiencias, incluida familias — es contenido pensado solo para docentes que hoy llega también a familias sin adaptar.
2. **La cita principal del Concepto (`CONCEPTO_QUOTE`, de Ng 2012) nunca se renderiza como blockquote con `SourceCite`** en ninguna sección — está definida en `lib` pero solo se usa indirectamente (`NG_SOURCE = CONCEPTO_QUOTE.source`) en la tarjeta de Ng dentro de Historia, sin mostrar el texto de la cita en sí. Es la única "Quote" de Hero de las 4 temáticas del grupo que no aparece como cita destacada en pantalla.
3. **Inconsistencia de numeración entre el TOC y los encabezados visuales de la sección "Aula":** el TOC dice 08, el bloque introductorio hardcodeado en el archivo principal dice 07, y el `AULA_EYEBROW` interno de `AulaSection` dice 08 — 3 fuentes de verdad para el mismo número.
4. **4 modelos teóricos de la sección Historia no usan `SourceCite`**, rompiendo la consistencia visual de atribución del resto de la página — es una decisión documentada en el código (fuentes sin "edición digital"/URL van al cuerpo, no al repositorio de links), pero significa que el "sello" visual distintivo de esta temática (el Provenance Stamp) no cubre justamente las citas académicas fundacionales de la sección más teórica.
5. **Frases "en el aula"/"un docente" hardcodeadas sin `AudienciaTexto`** en 2 lugares fuera de las secciones designadas para variar por audiencia: la dimensión 1-5 de Características (sección 02, las 5 descripciones terminan con "En el aula, ...") y el 4º riesgo de la sección 07 ("En el aula, un docente puede ser quien primero note...") — se muestran igual para familias.
6. **Checklist de autoevaluación (sección 09) es la única de las 3 temáticas comparables sin variante de audiencia** — los 5 ítems usan lenguaje neutro ("mis dispositivos", "mi huella socioemocional") que funciona razonablemente para ambas audiencias, pero rompe el patrón de "todo checklist se traduce" visto en `ciudadania-digital`/`huella-digital`.
7. **No tiene carrusel de recursos**, a diferencia de las otras 3 temáticas del grupo — solo la infografía única con lightbox. Si el rediseño busca unificar el patrón visual del grupo, esto es una ausencia a decidir explícitamente (¿se agrega uno, o se documenta como decisión consciente?).
8. **5 estadísticas del banner del Hero se repiten sin cita en el momento, y con cita más abajo** (54%/19%/7% en sección 03, +3.19%/80% en sección 06) — quien solo lee el Hero ve números sin fuente; la atribución llega recién 2-3 secciones después.
9. **Listado final de "Fuentes Oficiales" (sección 09) no incluye el BID ni la fuente `unverified` de Mercado Laboral**, pese a citarse inline en la sección 06 — mismo patrón de inconsistencia ya detectado en las 3 auditorías anteriores del grupo (Barco de Teseo en `ciudadania-digital`, GDPR en `huella-digital`, UNICEF_ESPANA_PENDIENTE/Identidad Fragmentada en `hiperconectividad-digital`).
10. **Única temática del grupo con 2 mecanismos de progreso de lectura simultáneos**: la barra fija superior de scroll (`readingBar`) y el sidebar TOC con tiers — ningún otro miembro del grupo tiene la barra superior. Vale la pena decidir en el rediseño si se traslada este patrón a las demás o se mantiene como distintivo de esta temática (dado que es también la más extensa en densidad de contenido teórico).
11. **Solo 2 de 10 secciones tienen contenido variable por audiencia real** (Ejemplos Concretos y Aula), muy por debajo de la proporción de `ciudadania-digital`/`huella-digital` (la mayoría de sus secciones varían) — más cercano al patrón de baja variación por audiencia visto en `hiperconectividad-digital`.
