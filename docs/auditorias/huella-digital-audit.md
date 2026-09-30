# Auditoría de contenido — Huella Digital

Base para rediseño. Recorrido completo de `lib/huella-digital-content.ts` (169 líneas) y los 11 componentes que lo consumen (`app/huella-digital/huella-digital-content.tsx` + `components/huella-digital/*.tsx`). A diferencia de `ciudadania-digital`, esta temática tiene la mayoría de su contenido hardcodeado directamente en los componentes (`STEPS`, `ERRORS`, `NEXT_STEPS`, `RESOURCES`, `TEMPLATE`, `FAQS` — el propio código lo aclara en el comentario de cabecera de `lib/huella-digital-content.ts`), no en el archivo de datos central. Solo lectura, nada modificado.

Ruta: `/huella-digital`. Título de página: "Huella Digital: Recuperá el Control de tu Identidad | José Farhat". Layout: scroll continuo de 9 secciones numeradas (00-08), sidebar `TocNav` (paleta clara azul/slate, mismo mecanismo sticky + `IntersectionObserver` que `ciudadania-digital` pero tema visual distinto), `Navbar` + `Footer` + `BackToDashboardButton`. Progreso de checklist (3 ítems de la sección "Ejemplos Concretos") persiste vía `useTematicaProgress` (tematicaId `huella-digital`), con `TematicaCompletarButton` al final.

Patrón de audiencia: **Group A** (`resolveTexto` + `AudienciaTexto`), fallback explícito a `'docentes'` en todos los llamados. Igual que `ciudadania-digital`, solo hay 2 variantes reales (docentes/familias) pese a que `Audiencia` admite 5 valores — cualquier otra selección cae a la variante docentes.

---

## 00 — Hero (`hero-section.tsx`)

**Estructura:** badge + título + bloque "Concepto" con cita destacada + párrafo introductorio (audiencia) + caja "Meta del día" (audiencia, con término resaltado en negrita) + infografía general con **lightbox interactivo** (zoom/pan/pinch).

**Concepto (fijo, no varía por audiencia):**
> "Una huella digital es la estela de datos creada por la actividad en línea de una persona... Cada vez que usás internet, dejás una huella que indica dónde estuviste y a veces qué hiciste; estos datos a menudo pueden estar vinculados a quién sos."
> — Brave, Glosario de privacidad (`https://brave.com/es/glossary/digital-footprint/`)

**Variantes de audiencia:**

| Campo | Docentes | Familias |
|---|---|---|
| Badge | "Guía Accionable 2026 · Docentes" | "Guía Accionable 2026" |
| Intro | "Como docente, tu huella digital habla por vos antes de que lo hagas vos: para tus estudiantes, para las familias que buscan tu nombre antes de una reunión, y para la escuela. Esta guía te lleva de la sobreexposición al control total en 3 pasos prácticos, que después podés convertir en una actividad para trabajar con tu curso." | "Tu huella digital (activa y pasiva) habla por vos antes de que vos lo hagas. Esta guía te llevará de la sobreexposición al control total en 3 pasos prácticos." |
| Meta del día | "Sabrás que lo lograste cuando busques tu nombre en internet y **solo aparezca lo que vos decidís mostrar** — algo especialmente importante cuando quien busca es un estudiante, una familia o la dirección de la escuela." | "Sabrás que lo lograste cuando busques tu nombre en internet y **solo aparezca lo que vos decidís mostrar**." |

Título fijo (h1): "Recuperá el Control de tu Identidad Digital" (con degradado azul-cian en "Identidad Digital").

**Infografía:** `/weekly-content/2026-W21/infografia 3.svg`, alt "Infografía de Huella Digital", en mockup de ventana de navegador.

**Elemento interactivo — Lightbox de la infografía** (único de esta temática, no existe en `ciudadania-digital`): al hacer click se abre a pantalla completa con controles de zoom in/out (0.5x por click, rango 1x-4x), reset de zoom, arrastre (pan) con mouse cuando hay zoom aplicado, soporte de gestos táctiles (pinch-to-zoom con 2 dedos, pan con 1 dedo), scroll de mouse para zoom, y cierre con botón o tecla Escape.

---

## 01 — Historia / Origen (`historia-section.tsx`)

Título: 'El Caso Costeja: de dónde viene el "derecho al olvido"'. Subtítulo: "El mismo derecho que usás en la plantilla de la sección de recursos tiene un origen judicial concreto." Sin variante de audiencia.

**Cuerpo principal — Caso Costeja (cita larga, no truncada):**
> "El derecho al olvido tiene un origen judicial concreto: en 2010, Mario Costeja González reclamó ante la Agencia Española de Protección de Datos que Google dejara de mostrar un aviso de 1998 sobre una deuda ya saldada. El 13 de mayo de 2014, el Tribunal de Justicia de la Unión Europea falló a su favor (asunto C-131/12, Google Spain vs. AEPD y Mario Costeja González), estableciendo que los buscadores deben atender pedidos de eliminar enlaces con información personal irrelevante o desactualizada, aunque la información en sí sea verídica."
> — Tribunal de Justicia de la Unión Europea, sentencia C-131/12 (13 de mayo de 2014), con link al PDF de la sentencia.

**Bloque secundario — mención GDPR:**
> "Ese fallo se formalizó después en el Reglamento General de Protección de Datos (GDPR) de la Unión Europea, hoy la base legal más citada en el mundo para pedir la eliminación de datos personales."
> Fuente: Reglamento General de Protección de Datos (GDPR/RGPD), "Artículo 17, derecho de supresión — formalizó después el fallo Costeja. Referencia general: no se confirmó el link oficial exacto del artículo (eur-lex.europa.eu)" — **marcada `unverified: true`**.

---

## 02 — Características (`caracteristicas-section.tsx`)

Título: "Huella Activa y Huella Pasiva". Sin variante de audiencia. Contenido = una única cita destacada:

> "La huella digital activa incluye todos los datos que compartís conscientemente (publicaciones, correos, formularios). La huella digital pasiva se registra sin tu conocimiento explícito."
> — Avast (`https://www.avast.com/es-es/c-what-is-a-digital-footprint`)

---

## 03 — Tipos o Variantes (`tipos-variantes-section.tsx`)

Título: "Los Dos Tipos, y un Concepto Relacionado". Sin variante de audiencia.

**Grid de 2 tarjetas (reformulación breve, sin cita propia — comparten la fuente de Avast de la sección anterior):**
- *Huella activa*: "Todo lo que compartís conscientemente: publicaciones, correos enviados, formularios completados."
- *Huella pasiva*: "Datos que se registran sin tu conocimiento explícito: cookies, rastreadores, historial de navegación."

**Concepto relacionado — "device fingerprint":**
> "El 'device fingerprint' es un concepto relacionado pero distinto a la huella digital: no es el rastro de lo que hacés, sino datos técnicos del dispositivo (navegador, resolución, configuración) usados para identificarlo sin necesidad de cookies."
> — Wikipedia, "Huella digital en Internet, con cita a la Agencia Española de Protección de Datos (AEPD)" (`https://es.wikipedia.org/wiki/Huella_digital_en_Internet`)

---

## 04 — Ejemplos Concretos — "Los 3 Pasos Prácticos" (`ejemplos-section.tsx`)

El núcleo interactivo/práctico de la temática. Array `STEPS` **hardcodeado en el componente** (no en `lib/huella-digital-content.ts`); campos mixtos: algunos `string` fijo, otros `AudienciaTexto`. Cada paso tiene: objetivo, lista de instrucciones, un "tip" (ejemplo práctico), un "lab" (consigna de acción concreta) y un checkbox persistente ligado a `useTematicaProgress`.

### Paso 1 — "Auditoría: Conocé tu exposición"

| Campo | Docentes | Familias |
|---|---|---|
| Objetivo | "Identificar exactamente qué información tuya es pública (huella activa) y qué datos se recopilaron sin tu atención plena (huella pasiva) — la misma información que un estudiante curioso o una familia pueden encontrar en dos minutos de búsqueda." | "Identificar exactamente qué información tuya es pública (huella activa) y qué datos se recopilaron sin tu atención plena (huella pasiva)." |

**Instrucciones (4, la 3ª varía por audiencia, el resto fijas):**
1. Abrí una ventana en modo incógnito para evitar sesgos del algoritmo. *(fijo)*
2. Realizá "Egosurfing" (buscar tu propio nombre en internet): buscá tu nombre completo entre comillas (ej. "Juan Pérez"). *(fijo)*
3. Docentes: "Buscá también tu correo principal y tu número de teléfono, sobre todo si alguna vez los compartiste en un grupo de WhatsApp de familias o en una plataforma escolar." / Familias: "Buscá también tu correo principal y tu número de teléfono."
4. Revisá la primera página de resultados y la sección de imágenes. *(fijo)*

**Tip (fijo, no varía por audiencia):** "Buscá en tu correo palabras como 'Bienvenido', 'Confirma tu cuenta' o 'Verifica'. Encontrarás decenas de foros, tiendas y apps donde te registraste hace años y olvidaste."

**Lab / consigna (fijo):** "Abrí una hoja de cálculo o libreta. Anotá cada cuenta antigua que encuentres y cada resultado de Google que no te guste. Esa es tu lista de objetivos para el Paso 2."

**Checkbox (`task1`, fijo):** "He completado mi lista de 'Egosurfing'"

### Paso 2 — "Limpieza: Borrá tu rastro"

Sin variante de audiencia — todo el paso es contenido fijo.

**Objetivo:** "Reducir drásticamente los puntos de acceso a tus datos personales eliminando cuentas innecesarias y gestionando tu derecho al olvido."

**Instrucciones (3):**
1. Usá tu lista del paso anterior. Entrá a cada cuenta antigua, buscá la opción "Eliminar cuenta" (no "desactivar").
2. Dirigite a myactivity.google.com y borrá tu historial desde siempre.
3. Ejercé solicitudes manuales para borrar tu información de bases de datos de terceros (Data Brokers).

**Tip:** "Si un sitio no te deja borrar la cuenta, cambiá tus datos por información falsa (nombre falso, correo temporal) antes de abandonarla."

**Lab / consigna:** "Solicitá a Google que retire resultados que expongan datos sensibles (teléfono, dirección) utilizando su formulario oficial de retirada de información personal."

**Checkbox (`task2`):** "He eliminado al menos 3 cuentas inactivas hoy"

### Paso 3 — "Blindaje: Protección y Netiqueta"

| Campo | Docentes | Familias |
|---|---|---|
| Objetivo | "Configurar barreras técnicas y de comportamiento para evitar volver a generar una huella digital tóxica — y establecer límites claros entre tu vida digital personal y tu rol docente." | "Configurar barreras técnicas y de comportamiento para evitar volver a generar una huella digital tóxica." |

**Instrucciones (3, la 3ª varía por audiencia):**
1. "Sensores Biométricos: Evitá usar tu huella dactilar para apps financieras críticas. Las huellas pueden ser copiadas y no se pueden cambiar como una contraseña. Optá por contraseñas fuertes o 2FA." *(fijo)*
2. "Redes Wi-Fi: Nunca accedas a tu banco o correo desde el Wi-Fi de la escuela o cualquier red pública sin una VPN (red privada virtual que protege tu conexión)." *(fijo — nota: menciona "el Wi-Fi de la escuela" incluso siendo instrucción fija, no adaptada a familias)*
3. Docentes: "Netiqueta: Pensalo dos veces antes de publicar, sobre todo si hay estudiantes de por medio. No etiquetés a otros sin permiso, no subas fotos de estudiantes sin autorización de sus familias, y mantené separados tus perfiles personales de cualquier contacto con el curso." / Familias: "Netiqueta: Pensalo dos veces antes de publicar. No etiquetés a otros sin permiso ni subas fotos de terceros sin su consentimiento."

**Tip:**
- Docentes: "Revisá la configuración de privacidad de Instagram/Facebook y limitala a 'Solo Amigos' — es habitual que estudiantes busquen y encuentren el perfil personal de un/a docente. Desactivá también la indexación de tu perfil en buscadores desde la configuración de la red social."
- Familias: "Revisá la configuración de privacidad de Instagram/Facebook y limitala a 'Solo Amigos'. Desactivá también la indexación de tu perfil en buscadores desde la configuración de la red social."

**Lab / consigna (fijo):** "Cambiá la privacidad de tu red social principal y asegurate de usar un navegador centrado en la privacidad (como Brave o Firefox) para tu navegación diaria."

**Checkbox (`task3`):** "He ajustado la privacidad de mis redes a 'Privado'"

> Nota técnica: los 3 checkboxes de esta sección (`task1`/`task2`/`task3`) SÍ persisten estado real vía `useTematicaProgress` (a diferencia del checklist decorativo de la Fase 03 en `ciudadania-digital`), y alimentan directamente el "Tu Rastreador de Éxito" de la sección 08.

---

## 05 — Ventajas (`ventajas-section.tsx`)

Título: "No Solo un Riesgo: También Reputación". Subtítulo: "La huella digital cuidada es un diferencial profesional a favor." Sin variante de audiencia.

**Cita principal:**
> "Según una encuesta de CareerBuilder ampliamente citada, el 57% de los reclutadores que investigan candidatos en redes sociales encontraron contenido que los llevó a NO contratarlos — lo cual implica, en sentido inverso, que una huella cuidada puede ser un diferencial a favor."
> — CareerBuilder, "citado en MSMK University College — cita de segunda mano, no se encontró el informe original con link directo" (`https://msmk.university/la-huella-digital-en-la-contratacion-laboral/`) — **marcada `unverified: true`**.

**"Otros puntos a favor" (lista, fuente compartida con la cita anterior — sin cita propia):**
- Portfolio digital visible
- Posibilidad de construir marca profesional
- Acceso a comunidades y oportunidades que dependen de tener presencia online

---

## 06 — Problemas / Riesgos (`riesgos-section.tsx`)

Título: "Errores a Evitar y Data Brokers". Array `ERRORS` **hardcodeado en el componente** (no en `lib/huella-digital-content.ts`).

**Errores a evitar (3, el 3º varía por audiencia):**
1. **Ignorar la huella pasiva:** "Creer que si no publicás, no dejás rastro. Las cookies y rastreadores invisibles compilan tu perfil constantemente." *(fijo)*
2. **Confiar ciegamente en la biometría:** "Creer que la huella dactilar es infalible. Pueden ser robadas del vidrio del teléfono y no se pueden cambiar." *(fijo)*
3. **Falsa identidad completa:**
   - Docentes: "Usar tus datos reales para probar servicios dudosos. Creá siempre correos alias para este tipo de registros — sobre todo si estás probando una app o plataforma educativa nueva antes de recomendarla a tu curso."
   - Familias: "Usar tus datos reales para probar servicios dudosos. Creá siempre correos alias para este tipo de registros."

Estos 3 "errores" no tienen fuente/cita propia (no usan `SourceCite`).

**Data Brokers:**
> "Los data brokers son 'empresas que recopilan información de los consumidores, incluida información personal, de una amplia variedad de fuentes, con el fin de revender esa información a sus clientes'."
> — FTC (Federal Trade Commission, EE. UU.), "informe de 2014, citado en Lawfare — cita de segunda mano, no se encontró el link directo al PDF oficial" (`https://www.lawfaremedia.org/article/federal-privacy-rules-must-get-data-broker-definitions-right`) — **marcada `unverified: true`**.

---

## 07 — Para el Aula / Para tu Casa (`aula-section.tsx`)

Badge de sección fijo: "07 — Para el Aula" (no varía por audiencia). El `<h2>` sí varía: "Qué Significa Esto para el Aula" (docentes) / "Qué Significa Esto en Casa" (familias) — a diferencia de `ciudadania-digital`, donde el heading equivalente queda fijo en ambas variantes.

Síntesis propia, sin cita:

| Docentes | Familias |
|---|---|
| "La huella digital de un docente importa doblemente — la propia, y la que ayuda a construir en sus estudiantes al modelarla. El caso Costeja es un buen disparador de clase: mostrar que hasta la información verídica puede pedirse que se desindexe, y por qué eso genera debate entre privacidad y derecho a la información." | "Tu huella digital importa doblemente — la propia, y la que ayudás a construir en tus hijos al modelarla. El caso Costeja es un buen disparador de charla en casa: mostrar que hasta la información verídica puede pedirse que se desindexe, y por qué eso genera debate entre privacidad y derecho a la información." |

Referencia directa al Caso Costeja de la sección 01 — no introduce datos nuevos.

---

## 08 — Centro de Recursos — "Herramientas para Actuar Hoy" (`recursos-section.tsx`)

La sección más densa: tracker de progreso + plantilla copiable + próximos pasos + carrusel + FAQ + fuentes citadas. Arrays `NEXT_STEPS`, `RESOURCES`, `FAQS`, `TEMPLATE` **hardcodeados en el componente** (no en `lib/huella-digital-content.ts`).

**Elemento interactivo #1 — "Tu Rastreador de Éxito"** (tracker de progreso, recibe `progressPct`/`completedCount` calculados a partir de los 3 checkboxes de la sección 04, no tiene checklist propio). Copy fijo: "Tus respuestas se guardan en este navegador." Barra de progreso con % real. Al completar los 3 pasos (`completedCount === 3`), muestra un mensaje de audiencia:
- Docentes: "¡Completado! Tu huella digital está bajo control — y ya tenés un ejemplo propio para mostrarles a tus estudiantes cómo se hace."
- Familias: "¡Completado! Tu huella digital está bajo control."

**Elemento interactivo #2 — "Plantilla de Acción Rápida"** (textarea de solo lectura + botón "Copiar" con feedback visual "¡Copiado!" por 3 segundos, con fallback a `document.execCommand('copy')` si `navigator.clipboard` falla).

Intro de la plantilla (audiencia):
- Docentes: "Usá este texto para solicitar la eliminación de tus datos a empresas o webmasters. Podés adaptarlo también para dar de baja cuentas antiguas asociadas a tu correo institucional."
- Familias: "Usá este texto para solicitar la eliminación de tus datos a empresas o webmasters."

**Texto completo de la plantilla (fijo, no varía por audiencia):**
```
Asunto: Solicitud de eliminación de datos personales (Derecho al olvido)

Hola, equipo de privacidad:

Me dirijo a ustedes para solicitar formalmente la eliminación inmediata de todos mis datos personales e información asociada a mi nombre/correo en su base de datos y sitio web, de acuerdo con las normativas vigentes de protección de datos.

Mis datos registrados son: [Tu Correo/Usuario]

Agradezco me confirmen por esta vía cuando el proceso haya concluido.
Saludos cordiales.
```

**"Próximos Pasos" (2 ítems, el 2º varía por audiencia):**
1. **Programá un recordatorio:** "Poné una alarma cada 6 meses para hacer Egosurfing de rutina." *(fijo)*
2. **Instalá un gestor de contraseñas:**
   - Docentes: "Dejá de reciclar claves. Usá herramientas seguras y únicas por cuenta — es un buen hábito para mostrarles también a tus estudiantes."
   - Familias: "Dejá de reciclar claves. Usá herramientas seguras y únicas por cuenta."

**"Recursos Recomendados" (chips, sin links ni descripción — solo nombres):** Have I Been Pwned, Google Takeout, DeleteMe.

**Elemento interactivo #3 — Carrusel de recursos** (8 láminas, más del doble que las 5 de `ciudadania-digital`): `/weekly-content/2026-W21/carrusel/1.svg` a `8.svg`. Mismo mecanismo de navegación (flechas, dots, `AnimatePresence`). Header por audiencia:

| Campo | Docentes | Familias |
|---|---|---|
| Label | "Material para el aula" | "Presentación completa" |
| Título | "Huella Digital — Recursos para el Aula" | "Huella Digital — Galería" |

**Elemento interactivo #4 — FAQ acordeón (3 preguntas, sin variante de audiencia — a diferencia de `ciudadania-digital`, cuyas FAQ sí varían):**

| id | Pregunta | Respuesta |
|---|---|---|
| `faq1` | "¿Puedo borrar mi huella digital por completo?" | "No al 100%. La información queda almacenada en copias, bases de datos externas o registros legales. Sin embargo, sí podés reducirla drásticamente (hasta un 90%) eliminando lo público y solicitando desindexación en buscadores." |
| `faq2` | "¿Es seguro usar mi huella dactilar para la app del banco?" | "Expertos en ciberseguridad sugieren no confiar plenamente en los escáneres ópticos/capacitivos antiguos. Si tu teléfono es robado, el ladrón tiene literalmente tus huellas impresas en la pantalla. Para finanzas, una clave alfanumérica fuerte + 2FA es superior." |
| `faq3` | "¿Qué es el derecho al olvido?" | "Es tu derecho legal (reconocido en Europa y en expansión en Latinoamérica) a pedirle a los motores de búsqueda que eliminen enlaces a información personal sobre vos que sea obsoleta, inexacta o irrelevante." |

> Nota: "Expertos en ciberseguridad sugieren..." en `faq2` es una afirmación sin fuente citada (no usa `SourceCite`, no aparece en `FUENTES_COMPLETAS`) — a diferencia del resto del contenido de la página, que cita todo explícitamente.

**Listado completo de fuentes citadas** (`FUENTES_COMPLETAS`, 6 entradas — la mitad que en `ciudadania-digital`):

| # | Fuente | URL | Nota |
|---|---|---|---|
| 1 | Brave — Glosario, huella digital | https://brave.com/es/glossary/digital-footprint/ | — |
| 2 | Tribunal de Justicia de la Unión Europea, sentencia C-131/12 | https://www.abogacia.es/wp-content/uploads/2014/05/Sentencia-131-12-TJUE-derecho-al-olvido.pdf | — |
| 3 | Avast — huella activa/pasiva | https://www.avast.com/es-es/c-what-is-a-digital-footprint | — |
| 4 | Wikipedia / AEPD — huella de dispositivo | https://es.wikipedia.org/wiki/Huella_digital_en_Internet | — |
| 5 | CareerBuilder (cita de segunda mano vía MSMK University) | https://msmk.university/la-huella-digital-en-la-contratacion-laboral/ | sin fuente primaria confirmada |
| 6 | FTC (cita de segunda mano vía Lawfare) | https://www.lawfaremedia.org/article/federal-privacy-rules-must-get-data-broker-definitions-right | sin fuente primaria confirmada |

> Nota: este listado NO incluye la mención del GDPR (sección 01, marcada `unverified: true` en el código) como entrada propia, pese a citarse inline en la página — mismo patrón de inconsistencia observado en `ciudadania-digital` con el Barco de Teseo.

---

## Índice de navegación (TOC) — `toc-nav.tsx`

9 anclas registradas (`TOC_SECTIONS`), sticky en desktop con `IntersectionObserver`, barra horizontal en mobile. A diferencia de `ciudadania-digital`, el TOC tiene soporte explícito para labels por audiencia vía `labelAudiencia`/`shortLabelAudiencia` (campos opcionales en `TocSection`), aunque **solo la sección "aula" lo usa hoy**:

| # | id | Label completo | Label corto | Variante de audiencia |
|---|---|---|---|---|
| 00 | `hero` | Inicio | Inicio | — |
| 01 | `historia` | Historia / Origen | Historia | — |
| 02 | `caracteristicas` | Características | Rasgos | — |
| 03 | `tipos-variantes` | Tipos o Variantes | Tipos | — |
| 04 | `ejemplos-concretos` | Ejemplos Concretos | Ejemplos | — |
| 05 | `ventajas` | Ventajas | Ventajas | — |
| 06 | `riesgos` | Problemas / Riesgos | Riesgos | — |
| 07 | `aula` | Para el Aula | Aula | Docentes: "Para el Aula"/"Aula" — Familias: "Para tu Casa"/"Casa" |
| 08 | `recursos` | Centro de Recursos | Recursos | — |

El header fijo del sidebar dice "Huella Digital" con ícono `Fingerprint` (sin variar por audiencia).

---

## Todas las fuentes citadas (`source-cite.tsx`), consolidado

Misma interfaz y lógica que `components/ciudadania-digital/source-cite.tsx` (el propio comentario del código lo dice), con paleta clara (slate/blanco/azul) en vez de la cyberpunk oscura de `ciudadania-digital`. Renderiza: 📎 autor — nota (si existe) [ícono de link externo si `url`]. Si `unverified: true`, agrega badge "sin verificar" e itáliza el autor.

**Fuentes marcadas `unverified: true` (3):**
1. GDPR/RGPD — mención de formalización posterior al fallo Costeja (sección 01)
2. CareerBuilder — estadística del 57% de reclutadores (sección 05)
3. FTC — definición de Data Brokers (sección 06)

**Todas las demás fuentes citadas inline:** Brave (Glosario), Tribunal de Justicia de la UE (sentencia C-131/12), Avast (x2 — Características y Tipos/Variantes), Wikipedia/AEPD (device fingerprint).

**Afirmaciones sin fuente citada** (a diferencia del resto de contenido citado): los 3 "Errores a evitar" (sección 06) y "Expertos en ciberseguridad sugieren..." de la FAQ 2 (sección 08).

---

## Resumen de hallazgos para el rediseño

1. **Mayoría del contenido vive fuera de `lib/huella-digital-content.ts`:** `STEPS` (Fase 04), `ERRORS` (sección 06), `NEXT_STEPS`/`RESOURCES`/`FAQS`/`TEMPLATE` (sección 08) están hardcodeados directamente en sus componentes — a diferencia de `ciudadania-digital`, donde casi todo vive en el `lib/*.ts` central. El propio comentario de cabecera del archivo lo documenta como decisión consciente, pero dificulta tener una vista única de "todo el contenido" sin recorrer cada componente (como se hizo acá).
2. **Único lightbox interactivo de zoom/pan/pinch de las temáticas de "Ciudadanía Digital"** (Hero) — funcionalidad más rica que el resto de infografías estáticas de otras temáticas del grupo.
3. **Fallback binario real:** igual que `ciudadania-digital`, `Audiencia` admite 5 valores pero solo hay contenido para `docentes`/`familias`; cualquier otra audiencia cae a `docentes`.
4. **Inconsistencia de heading resuelta vs. `ciudadania-digital`:** acá el `<h2>` de la sección "Aula" sí traduce a "Qué Significa Esto en Casa" para familias (en `ciudadania-digital` el heading equivalente queda fijo) — pero el badge de arriba ("07 — Para el Aula") sigue sin traducir, mismo patrón parcial que en la otra temática.
5. **TOC con soporte de audiencia ya construido pero subutilizado:** `TocSection` tiene `labelAudiencia`/`shortLabelAudiencia` listos para usarse, pero solo la entrada "aula" los define — las demás 8 entradas podrían tener labels de audiencia y no los tienen.
6. **Afirmaciones sin cita en medio de una página que cita todo lo demás:** los 3 "Errores a evitar" (sección 06) y la respuesta de FAQ2 ("Expertos en ciberseguridad sugieren...") no tienen fuente atribuida, rompiendo el patrón de citar todo que sí se sigue en el resto de la página.
7. **Instrucción fija que no se adapta a audiencia pese al contexto:** en el Paso 3 de la Fase 04, la instrucción sobre Wi-Fi menciona "el Wi-Fi de la escuela" como ejemplo fijo (no `AudienciaTexto`), term que no aplica igual de bien a la variante familias.
8. **3 fuentes de las 6 totales están marcadas `unverified: true`** (GDPR, CareerBuilder, FTC) — proporción alta de fuentes de segunda mano/sin confirmar respecto del total, vale la pena revisar si se pueden reemplazar por fuentes primarias en el rediseño.
9. **Listado de fuentes (sección 08) no incluye la mención del GDPR** como entrada propia pese a citarse en la sección 01 — mismo patrón de inconsistencia ya visto en la auditoría de `ciudadania-digital` (ahí era el Barco de Teseo el que faltaba).
10. **Carrusel con 8 láminas** (vs. 5 en `ciudadania-digital`) — contenido bastante más extenso en este recurso específico, vale la pena confirmar en el rediseño si las 8 siguen vigentes/actualizadas.
11. **"Recursos Recomendados" son solo texto plano sin links** (Have I Been Pwned, Google Takeout, DeleteMe) — a diferencia de los "Directorios Oficiales" de `ciudadania-digital`, que sí son links clicables. Inconsistencia de patrón entre temáticas del mismo grupo.
