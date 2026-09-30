# Auditoría de contenido — Diseño Persuasivo y Patrones Oscuros

Base para rediseño. Recorrido completo de la entrada `diseno-persuasivo-patrones-oscuros` en `lib/libres-bajo-influencia-data.ts` (líneas 300-374 de 629 totales) y `components/tematicas/DisenoPersuasivoPatronesOscurosPage.tsx` (1770 líneas — la más extensa y densa de las 3 temáticas del grupo "Libres bajo influencia" auditadas hasta ahora). Solo lectura, nada modificado.

Ruta: `/tematicas/diseno-persuasivo-patrones-oscuros`. Layout: scroll continuo de **16 bloques** (Hero, franja de datos duros, Introducción con 2 widgets interactivos, 4 secciones de contenido base, Persuasión Ética vs. Manipulación, Matriz interactiva de patrones oscuros, Caso de estudio, Otros casos críticos, Evaluación Ética Trimembre, Marco Regulatorio Global, Cita de cierre, Kit de herramientas de agencia digital, Material de estudio, Fuentes académicas, Mini-test de práctica libre, Evaluación/Quiz) — la estructura más elaborada de las 3 temáticas del grupo auditadas (`subculturas-digitales`: 8 secciones bespoke + quiz; `algoritmos-perfilado`: 4 secciones uniformes + 1 simulador + quiz; esta: 4 secciones base **más 8 bloques adicionales** de contenido no presente en `data.sections`, definidos directamente como constantes en el componente).

Progreso vía `useTematicaProgress` con `computeQuizProgress` compartido (score ≥ 8/10 marca completado automáticamente). **No hay `TematicaCompletarButton`** — mismo patrón que las otras 2 temáticas del grupo.

**Patrón de audiencia: bespoke binario**, mecanismo idéntico a `subculturas-digitales`/`algoritmos-perfilado`. Cobertura de audiencia igual de mínima que `algoritmos-perfilado`: solo el `intro`/`introFamilias` raíz y **una única sección** ("Qué significa esto para el aula/casa") con variante — pero acá esa sección **no tiene `quoteFamilias`** (a diferencia de `algoritmos-perfilado`, que sí cubre las 3 partes heading+paragraphs+quote). El propio comentario del código lo aclara: "Hoy solo 'Qué significa esto para el aula' tiene heading/paragraphs escritos (sin quoteFamilias)". Los 8 bloques adicionales (franja de datos, widgets, matriz, ética trimembre, marco regulatorio, kit de agencia, mini-test) son **100% fijos sin ningún mecanismo de audiencia**.

**No usa `SourceCite`** — mismos 2 mecanismos que las otras 2 temáticas del grupo (badge de cita sobre imagen vía `EditorialImageFrame`; sección final "Fuentes Oficiales, Datos y Citas Verificables" con formato ficha bibliográfica + campo `stat`). El listado final tiene **13 entradas** (`ACADEMIC_CITATIONS`), la lista de fuentes más grande de las 3 temáticas auditadas del grupo. `data.authors` **sí se renderiza** en el Hero (igual que `algoritmos-perfilado`, a diferencia de `subculturas-digitales`).

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `diseno-persuasivo-patrones-oscuros`
- **Categoría:** "Diseño digital"
- **Color de marca:** `#DB2777` (rosa/magenta)
- **Descripción:** "Por qué la influencia digital rara vez llega como una orden, y dónde está la línea entre un diseño que ayuda y uno que manipula."
- **`authors` (4 nombres, renderizados como chips en el Hero):** BJ Fogg, Harry Brignull, Daniel Kahneman, Edward Deci y Richard Ryan.
- **`audiencias`:** `['docentes', 'familias']`
- **Material adjunto:** `pdfUrl` (`/img/tematicas/diseno-persuasivo-patrones-oscuros/presentacion.pdf`), `infografiaUrl` (`/img/tematicas/diseno-persuasivo-patrones-oscuros/infografia.webp`).

---

## Hero

Badges: "// Diseño digital" (categoría) + "Arquitectura de la Elección". H1: "Diseño persuasivo y patrones oscuros". Bajada (`data.description`): "Por qué la influencia digital rara vez llega como una orden, y dónde está la línea entre un diseño que ayuda y uno que manipula."

**Chips de autores citados:** BJ Fogg · Harry Brignull · Daniel Kahneman · Edward Deci y Richard Ryan.

**2 CTAs:** "Explorar la clase completa" (scroll a `#contenido`), "Ir a la evaluación" (scroll a `#evaluacion`).

**Imagen del Hero** con badge de cita: "Harry Brignull · Deceptive Patterns" → `https://deceptive.design/about-us/dr-harry-brignull/`, label visual "Arquitectura de la Elección".

### Franja de datos duros (`KEY_STATS`, sección propia entre el Hero y la Introducción, fondo oscuro)

| Cifra | Descripción | Fuente |
|---|---|---|
| 97% | Apps de la UE con al menos un patrón oscuro | Comisión Europea, 2022 |
| $245M | Multa de la FTC (agencia de comercio de EE.UU.) a Epic Games / Fortnite | FTC, 2023 |
| 244 h | Lectura anual de políticas de privacidad que le exigiríamos a un usuario promedio | Estudio citado en Perception Lab |
| 40% | E-commerce europeo con prácticas de diseño engañoso | Kühling & Sauerborn, 2024 |

> Nota: "Estudio citado en Perception Lab" (dato de las 244 horas) es la fuente más vaga de las 4 — no tiene autor, año ni link, y no aparece en el listado final de `ACADEMIC_CITATIONS`.

---

## Introducción — "La influencia que no da órdenes" (`id="contenido"`)

### `intro`/`introFamilias`

| Docentes (y toda audiencia sin selección) | Familias |
|---|---|
| "La influencia digital rara vez llega como una orden. Casi nunca una plataforma nos dice 'tenés que hacer esto'. Funciona de otra manera, más suave: haciendo que una conducta sea más fácil, más visible y más oportuna. BJ Fogg estudió las tecnologías diseñadas para cambiar comportamientos y encontró una fórmula sencilla: cuando coinciden motivación, facilidad y un disparador en el momento justo, sube la probabilidad de que actuemos. **Los estudiantes** se cruzan con esto todos los días, en los mismos juegos y apps que usan para divertirse: reconocerlo es una habilidad que se puede enseñar." | Idéntico hasta "...sube la probabilidad de que actuemos." Luego: "**Tus hijos** se cruzan con esto todos los días, en los mismos juegos y apps que usan para divertirse: reconocerlo es una habilidad que se puede enseñar." |

**Cita fija adicional (no forma parte de `data`, hardcodeada en el componente):**
> "'En el mundo digital, el código es ley': el jurista Lawrence Lessig mostró que la arquitectura de un sistema regula tanto como una norma escrita. Richard Thaler y Cass Sunstein la llamaron **arquitectura de la elección** — el diseño de las opciones orienta la decisión sin necesidad de obligarla."

### Elemento interactivo #1 — "Detector de Presión Manipuladora" (`ManipulativePressureDetector`)

**Mecanismo:** el usuario marca/desmarca 6 "elementos de interfaz" simulados; cada uno suma pesos a 5 indicadores de presión mostrados como barras animadas. 2 elementos premarcados por defecto ("Cuenta regresiva..." y "Casilla de suscripción ya tildada").

**Los 6 elementos seleccionables (`DARK_PATTERN_OPTIONS`):**

| Etiqueta | Categoría | Pesos que aporta |
|---|---|---|
| Cuenta regresiva que "expira" en minutos | Urgencia Fabricada | urgencia +40, ansiedad +20, erosión +15 |
| Casilla de suscripción ya tildada por defecto | Consentimiento Oculto | fricción +20, erosión +35, culpa +5 |
| Costos que aparecen recién en el último paso del pago | Costo Sorpresa | fricción +15, ansiedad +25, erosión +15 |
| Cancelar la cuenta exige 6 pasos; darse de alta, uno solo | Roach Motel (motel de cucarachas) | fricción +50, erosión +25 |
| Botón de rechazo: "No, prefiero seguir pagando de más" | Confirmshaming (vergüenza por rechazar) | culpa +45, ansiedad +10, erosión +15 |
| Racha de días que se pierde si no volvés hoy | Miedo a Perder lo Acumulado | ansiedad +35, urgencia +15, erosión +10 |

**5 barras del "Índice de Presión de Diseño"** (base 10-15 puntos + suma de pesos, tope 5-98%): Urgencia Fabricada, Fricción de Salida, Culpa Inducida, Ansiedad por Pérdida, Erosión de Autonomía. Indicador de "Lectura": "Alta" si hay más de 2 patrones seleccionados, "Moderada" si no.

Cita fija dentro del widget: usa dinámicamente `data.closingQuote` ("Cuando entrar es fácil y salir cuesta un esfuerzo enorme, la arquitectura ya tomó partido.").

### Elemento interactivo #2 — "Simulador en vivo: Persuasión Transparente vs. Patrón Oscuro" (`LiveArchitectureSimulator`)

**Mecanismo:** toggle de 2 modos que muestra un banner de ejemplo (privacidad/suscripción) simulado, contrastando un diseño ético con uno manipulador.

**Modo "🟢 Persuasión transparente" (`honest`):**
- Badge: "Diseño respetuoso con la autonomía"
- Título simulado: "Configuración de privacidad y procesamiento de datos"
- Texto simulado: "Respetamos tu privacidad. Podés aceptar el procesamiento completo o personalizar tus preferencias, de forma clara e igualitaria."
- 3 botones simétricos: "Aceptar todo" / "Configurar preferencias" / "Rechazar no esenciales"
- Análisis: "Opciones simétricas, de igual peso visual, con lenguaje directo. El usuario retiene el control total sin ser guiado compulsivamente hacia el 'Aceptar todo'."

**Modo "🔴 Patrón oscuro" (`dark`):**
- Badge: "⚠️ Patrón oscuro: Confirmshaming + Misdirection"
- Título simulado: "¡Un paso más antes de disfrutar tu oferta exclusiva!"
- Texto simulado: "Al hacer clic en el botón principal, mantendrás activas las recomendaciones optimizadas y seguirás disfrutando del servicio sin interrupciones."
- Botón desproporcionado: "🚀 ¡ACEPTAR TODO Y CONTINUAR MI EXPERIENCIA!" (con animación de pulso) + link de rechazo en texto diminuto subrayado: "No gracias, prefiero pagar el precio completo y perderme los beneficios exclusivos"
- Análisis: "Visualmente abrumador (overloading). El botón de 'aceptar' destaca desproporcionadamente. El enlace de rechazo usa lenguaje pasivo-agresivo (confirmshaming) y tipografía diminuta (skipping)."

---

## Las 4 secciones de contenido base (`data.sections`, layout uniforme con imagen editorial)

### Sección 01 — "Ni bueno ni malo por sí mismo" (sin variante de audiencia)

Imagen/fuente: BJ Fogg → `https://www.behaviormodel.org/`

> "Esto no es bueno ni malo por definición. Un recordatorio para tomar la medicación a horario apoya la autonomía: ayuda a hacer lo que uno ya quería hacer. Una notificación insistente, diseñada para recuperar la atención cuando ya la habíamos soltado, responde a otro interés que no es el nuestro. La técnica puede ser parecida; lo que cambia es la finalidad, la transparencia y si podemos decir que no."

**Cita de cierre:** "El diseño no siempre obliga: muchas veces, simplemente, hace una conducta más probable."

### Sección 02 — "Cuándo se pasa de la raya" (sin variante de audiencia)

Imagen/fuente: Harry Brignull → `https://deceptive.design/about-us/dr-harry-brignull/`

> "¿Y cuándo esa orientación se pasa de la raya? Cuando oculta, cuando confunde, cuando hace difícil salir. Ahí aparecen los patrones oscuros. Harry Brignull les puso ese nombre a los diseños que llevan a la persona a hacer algo que no quería hacer. La FTC documentó un catálogo: anuncios disfrazados de contenido, costos que aparecen recién al final, opciones ya tildadas por defecto, laberintos para cancelar, mecanismos para sacar datos por confusión."

**Cita de cierre:** "Cuando entrar es fácil y salir cuesta un esfuerzo enorme, la arquitectura ya tomó partido." *(idéntica a `closingQuote` de nivel raíz — se repite 2 veces en la página además de en el widget del Detector)*

### Sección 03 — "Por qué funcionan aunque los conozcamos" (sin variante de audiencia)

Imagen/fuente: Daniel Kahneman (2011) → `https://us.macmillan.com/books/9780374533557/thinkingfastandslow/`

> "¿Por qué funcionan estos mecanismos incluso cuando ya los conocemos? Porque no le hablan a nuestra razón: le hablan a nuestras necesidades y emociones — la urgencia, la recompensa, la curiosidad, el cansancio, el miedo a quedar afuera. Daniel Kahneman mostró que bajo fatiga o presión recurrimos mucho más a las respuestas rápidas y automáticas. Y Deci y Ryan recuerdan que un entorno puede apoyar nuestra autonomía... o convertirla en control."
>
> "Miren cómo aparece esto disfrazado: una cuenta regresiva no agrega ninguna información nueva, agrega presión. Una racha de días no solo muestra continuidad, agrega miedo a perder lo acumulado. Una notificación no solo informa, enciende la expectativa de que alguien nos reconoció."

**Cita de cierre:** "El problema no es tener emociones. El problema es no darnos cuenta cuándo un diseño fue construido alrededor de ellas."

### Sección 04 — "Qué significa esto para el aula" / "Qué significa esto para tu casa" (única con variante de audiencia parcial: heading + paragraphs, SIN quoteFamilias)

Imagen/fuente: fallback genérico "Referencia Teórica" → `https://josefarhat.com` (no tiene entrada en `SECTION_VISUALS`, que solo cubre las 3 secciones anteriores).

| Campo | Docentes | Familias |
|---|---|---|
| Heading | "Qué significa esto para el aula" | "Qué significa esto para tu casa" |

**Párrafos:**

| Docentes | Familias |
|---|---|
| "El caso de Epic Games no es un ejemplo lejano: es exactamente el tipo de mecánica —rachas, cuentas regresivas, recompensas— que aparece todos los días en los juegos y apps que **los estudiantes** ya usan. Nombrar la técnica cuando aparece le quita buena parte de su poder: no es lo mismo sentir la presión de una racha que se rompe que poder decir 'esto es una racha, está diseñada para que no la corte'." | "El caso de Epic Games no es un ejemplo lejano: es exactamente el tipo de mecánica —rachas, cuentas regresivas, recompensas— que aparece todos los días en los juegos y apps que **tus hijos** ya usan. Nombrar la técnica cuando aparece le quita buena parte de su poder: no es lo mismo sentir la presión de una racha que se rompe que poder decir 'esto es una racha, está diseñada para que no la corte'." |
| "De ahí se desprenden algunas orientaciones concretas. Usar el caso de Epic Games como disparador de conversación, con el número real de reembolsos, no como una anécdota abstracta. Compartir la pregunta de Fogg y de Deci y Ryan como una herramienta que se puede aplicar a cualquier app: ¿este diseño apoya algo que yo ya quería hacer, o me está empujando hacia algo que no elegí? Y animarse a mirar con la misma lupa **las propias herramientas educativas: varias apps de estudio usan rachas, insignias y cuentas regresivas con la misma lógica**, y vale la pena preguntarse si en ese caso la técnica está del lado del **estudiante** o en su contra." | "De ahí se desprenden algunas orientaciones concretas. Usar el caso de Epic Games como disparador de conversación **en casa**, con el número real de reembolsos, no como una anécdota abstracta. Compartir la pregunta de Fogg y de Deci y Ryan como una herramienta que se puede aplicar a cualquier app: ¿este diseño apoya algo que yo ya quería hacer, o me está empujando hacia algo que no elegí? Y animarse a mirar con la misma lupa **las apps que tus hijos usan para estudiar: varias usan rachas, insignias y cuentas regresivas con la misma lógica**, y vale la pena preguntarse si en ese caso la técnica está de su lado o en su contra." |

**Cita de cierre (fija — sin `quoteFamilias`, se muestra igual para ambas audiencias):**
> "Nombrar la técnica —'esto es una racha', 'esto es una cuenta regresiva'— es el primer paso para dejar de estar solo del lado de quien la sufre."

---

## Persuasión Ética vs. Manipulación Digital (`id="espectro"`)

Sin variante de audiencia. Comparación en 2 columnas:

**01 — Persuasión ética:**
> "Nace en la retórica clásica de Aristóteles: busca una armonía orgánica entre razón y emoción, sin ocultar la verdad ni mermar la voluntad del usuario."
- Ethos (credibilidad): "coherencia, diseño sobrio y autoridad moral."
- Pathos (emoción): "historias que conmueven antes de convencer."
- Logos (razón): "propuesta de valor lógica, alineada con necesidades reales."
- Ejemplo positivo: "aplicar el modelo de B.J. Fogg para facilitar voluntariamente una acción (como compensar emisiones de carbono) sin fricciones engañosas."

**02 — Manipulación digital:**
> "Diseños deliberados, nombrados por Harry Brignull en 2010, que explotan atajos mentales (heurísticas) para llevar al usuario a decisiones contrarias a su propio interés."
- Asimetría de fricción: "alta en un clic, cancelación que exige una llamada telefónica."
- Secuestro de atención: "recompensa variable continua que impide la pausa consciente."
- Distorsión de voluntad: "ocultación de costos finales o casillas preseleccionadas."
- Ejemplo manipulativo: "formularios de exclusión de entrenamiento de IA ocultos tras laberintos de submenús que exigen justificar la decisión."

---

## Matriz de Patrones Oscuros de Diseño (`id="matriz"`)

**Elemento interactivo — Matriz filtrable de 8 patrones** (`DarkPatternsTaxonomyMatrix`, filtros por categoría: Todos / 💰 Dinero / 🛡️ Datos personales / ⏳ Tiempo-Atención). Cada tarjeta incluye mecánica, impacto, caso real y base legal:

| Patrón | Categoría | Mecánica | Impacto | Caso real | Base legal |
|---|---|---|---|---|---|
| Privacy Zuckering | Datos | "Ocultación de controles de privacidad o flujos laberínticos para extraer más datos de los necesarios. Es la antítesis del principio Privacy by Default." | "Pérdida de soberanía sobre la información personal y exposición a perfilados predictivos." | "Meta y LinkedIn (2024): uso predeterminado de publicaciones para entrenar modelos de IA generativa, con formularios de baja ocultos." | "Sancionado por el RGPD (art. 5) y la CCPA de California." |
| Roach Motel | Tiempo | "Diseño que facilita enormemente la entrada (un clic para suscribirse) pero impone barreras extremas para la salida (varios pasos o una llamada telefónica para cancelar)." | "Carga cognitiva, pérdida de tiempo y mantenimiento forzoso de costos recurrentes." | "Servicios de suscripción de noticias y Amazon Prime, investigados por la FTC." | "Prohibido por la norma 'Click-to-Cancel' de la FTC y el artículo 25 de la DSA." |
| Drip Pricing | Dinero | "Fragmentación del precio: se anuncia una base baja y se añaden cargos obligatorios recién en los pasos finales de la compra." | "Incapacidad de comparar ofertas de forma justa; el usuario paga más por el tiempo ya invertido." | "Endémico en ticketing, alquiler de autos y aerolíneas low-cost." | "Sancionado por la Directiva de Prácticas Comerciales Desleales (UCPD) de la UE." |
| False Urgency | Tiempo | "Temporizadores de cuenta regresiva que se reinician al recargar la página, o alertas de stock artificiales ('solo queda 1')." | "Presión psicológica que induce compras impulsivas bajo estrés emocional, sin agregar información real." | "Booking.com y Trivago (multa de US$44,7 millones en Australia), tiendas de moda rápida." | "Clasificado como engaño por la Comisión Europea y organismos de defensa del consumidor." |
| Confirmshaming | Tiempo | "Redacción manipuladora de la opción de rechazo, diseñada para inducir culpa ('No, prefiero pagar el precio completo')." | "Daño a la autonomía emocional y degradación de la confianza en la marca." | "Banners emergentes de e-commerce y boletines informativos en toda la industria." | "Evaluado como práctica comercial desleal por la UCPD y las guías del EDPB." |
| Bait-and-switch | Dinero | "Publicidad de un servicio gratuito o económico que, tras captar el interés, es sustituido por una opción más cara o de menor calidad." | "Frustración de la expectativa de compra y gastos no planificados." | "Ofertas de 'prueba gratuita' que derivan en planes premium preseleccionados." | "Perseguible como publicidad engañosa bajo la Ley 24.240 en Argentina." |
| Misdirection | Datos | "Uso de jerarquía visual y dobles negativas ('en ningún caso no vender mis datos') para dirigir la vista hacia el botón que beneficia a la empresa." | "Aceptación involuntaria de términos o instalación de software ajeno al propósito inicial." | "Instaladores de software con casillas adicionales premarcadas, disfrazadas de 'recomendado'." | "Contrario al principio de consentimiento informado del RGPD." |
| Cobros inadvertidos en juegos | Dinero | "Configuración confusa de botones donde un toque accidental durante una pantalla de carga ejecuta una compra inmediata, sin pantalla de confirmación." | "Cargos no deseados, frecuentemente a menores de edad, sin que medie una decisión consciente." | "Epic Games / Fortnite: 245 millones de dólares en reembolsos ordenados por la FTC en 2022." | "Violación de la COPPA y de la Sección 5 de la Ley de la FTC en Estados Unidos." |

> Nota: la mecánica del último patrón ("Cobros inadvertidos en juegos") describe **exactamente el caso de estudio principal de la temática** (Epic Games/Fortnite), generando una duplicación intencional de contenido entre la matriz y la sección de Caso de Estudio dedicada.

---

## Caso de Estudio — Epic Games / Fortnite (`id="caso"`)

Badge: "Un caso con número" (`data.caseStudy.label`). Sin variante de audiencia.

> "La FTC sostuvo que el juego usó configuraciones que produjeron compras que las personas no querían hacer, muchas veces chicos, y ordenó 245 millones de dólares en reembolsos. El salto importa: un botón puede parecer una simple decisión de estética y diseño, pero para una familia ese mismo botón puede transformarse en una consecuencia económica muy concreta a fin de mes."

**Línea de verificación al pie:**
> "Fuente de verificación oficial: FTC — Epic Games Settlement ($245M Refund Order)." → link "Comunicado oficial FTC ↗" (`https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making`)

### Otros escenarios críticos (`EXTRA_CASE_STUDIES`, 2 casos adicionales sin fuente/link propio, fondo oscuro)

**"El laberinto del consentimiento" — Meta y el entrenamiento de sus modelos de IA:**
> "La denuncia de la organización NOYB expuso un proceso de exclusión (opt-out) deliberadamente obstructivo para entrenar modelos de IA con datos de usuarios de Instagram y Facebook. Lo más grave: Meta admitió que no podía garantizar la exclusión total de los datos incluso si el usuario completaba el tortuoso proceso de baja — un quiebre total de la transparencia."

**"Un dilema en el ámbito laboral" — Entrenar IA de "concientización" con correos de empleados:**
> "Un escenario crítico ya analizado por especialistas: usar modelos de lenguaje entrenados con correos reales de empleados para simular campañas de phishing 'educativas'. Aunque el fin declarado sea la seguridad, usar datos personales sin transparencia en una relación de poder asimétrica (empleador-empleado) viola los principios de lealtad y consentimiento informado — y trata al trabajador como sujeto de experimentación."

> Nota: ninguno de estos 2 casos adicionales tiene link ni cita en `ACADEMIC_CITATIONS` — la mención de "la organización NOYB" y "especialistas" no está vinculada a ninguna fuente verificable en toda la página.

---

## Evaluación Ética Trimembre (sin ancla `id`)

Sin variante de audiencia. Copy: "Para trascender el 'ethics-washing', el desarrollo tecnológico debe someterse a una evaluación normativa rigurosa (Ruohonen et al., 2025)." 3 lentes éticos (`ETHICS_LENSES`):

**Deontología: el deber y la regla del consentimiento:**
> "Bajo una visión deontológica moderada de 'reglas con consecuencias', la ética se define por el respeto a los derechos universales y la autonomía. Un diseño solo es moral si cumple el axioma: 'tratá a los demás únicamente respecto de aquello a lo que han consentido'. Los patrones oscuros fallan en este filtro al tratar al usuario como un mero recurso para fines comerciales."

**Utilitarismo: el balance del bienestar social:**
> "Esta lente evalúa las consecuencias para la mayoría. Una empresa puede obtener ingresos a corto plazo, pero el análisis utilitario global revela un daño neto: erosión de la confianza sistémica en el mercado, perjuicio económico individual y fomento de la adicción digital. El beneficio privado no compensa la degradación del bienestar social y la salud mental colectiva."

**Ética de la virtud: la integridad del diseñador:**
> "Cuestiona el carácter moral de los profesionales involucrados. Siguiendo los códigos de conducta de la ACM y el IEEE, un ingeniero virtuoso debe rechazar la creación de herramientas que exploten la debilidad humana. Diseñar patrones engañosos no es solo una falta técnica: es una degradación de la excelencia profesional y de la honestidad que debe regir la ingeniería."

---

## Marco Regulatorio Global (sin ancla `id`)

Sin variante de audiencia. Copy: "La Unión Europea lideró la transición hacia la 'equidad digital': un estándar que exige que la protección en el entorno virtual sea equivalente a la del mundo físico. La respuesta legislativa no solo regula el uso de los datos — ataca la raíz del problema: el diseño."

**Unión Europea (6 leyes):**
- Ley de Servicios Digitales (DSA), Art. 25(1) — "El hito regulatorio más audaz: prohíbe explícitamente el diseño y la organización de interfaces que engañen, manipulen o distorsionen la capacidad del usuario para tomar decisiones libres."
- RGPD — "Exige consentimiento libre, específico e inequívoco — la 'autodeterminación informativa' — e invalida el diseño de banners de cookies manipulativos."
- Ley de Mercados Digitales (DMA) — "Impide que los 'guardianes de acceso' (grandes plataformas) usen interfaces engañosas para forzar el consentimiento dentro de sus ecosistemas."
- Ley de Inteligencia Artificial (AI Act) — "Prohíbe sistemas de IA que desplieguen técnicas subliminales o manipuladoras para distorsionar el comportamiento humano."
- Directiva de Prácticas Comerciales Desleales (UCPD) — "Clasifica la falsa urgencia y el confirmshaming como marketing engañoso."
- Ley de Datos (Data Act) — "Prohíbe dificultar el ejercicio de derechos mediante diseños no neutrales o coercitivos."

**Estados Unidos (3 leyes):**
- FTC Act, Sección 5 — "Persecución judicial activa de patrones oscuros como prácticas comerciales desleales o engañosas."
- Norma "Click-to-Cancel" (FTC) — "Exige que cancelar una suscripción sea, como mínimo, tan fácil como haberse dado de alta."
- CCPA / CPRA (California) — "Prohíbe explícitamente las barreras engañosas para dar de baja el uso de datos personales."

**Argentina / LatAm (2 leyes):**
- Ley 24.240 de Defensa del Consumidor — "Protege contra prácticas comerciales engañosas, incluyendo la falsa urgencia y el precio por goteo."
- Ley de Protección de Datos Personales 25.326 — "Exige consentimiento transparente ante el crecimiento explosivo del e-commerce regional."

**Bloque adicional — "El dilema de la seducción algorítmica" (Albanese, 2025):**
> "La captura irrestricta de datos para personalizar ofertas crea una ilusión de exclusividad que explota la presión social por la inmediatez y la pertenencia, duplicando la vulnerabilidad del consumidor." Cifra destacada: **23,2M+** "Compradores online en Argentina (Kantar)".

---

## Cita de cierre

Sin variante de audiencia.
> "Cuando entrar es fácil y salir cuesta un esfuerzo enorme, la arquitectura ya tomó partido." *(`data.closingQuote`, tercera vez que aparece en la página — también en la Sección 02 y en el widget Detector de Presión)*

---

## Recuperar la Agencia: Ciudadanía Digital — Kit de herramientas (sin ancla `id`)

Sin variante de audiencia. Copy: "La libertad digital no es la ausencia de influencia, sino la capacidad de ser **libre bajo influencia**. Frente a cualquier interfaz, proponemos la tríada de acción Pausar, Preguntar, Elegir."

**Tríada de acción (`AGENCY_VERBS`):**
1. **Pausar** — "Crear una distancia mínima entre el estímulo y la respuesta. Desactivar la reproducción automática e interrumpir el impulso de la respuesta rápida y automática (Sistema 1)."
2. **Preguntar** — "Aplicar lectura lateral (Mike Caulfield): en vez de analizar una web de arriba a abajo, salir de la pestaña para verificar al editor y la veracidad de la oferta en fuentes independientes."
3. **Elegir** — "Tomar decisiones con conciencia de la arquitectura circundante. Ejercer el derecho a no ser categorizado ni encasillado por un perfil predeterminado."

**5 preguntas de perfilado estratégico (`STRATEGIC_QUESTIONS`):**
1. "¿Por qué me aparece esto justo ahora? (detectar perfilado y contexto)"
2. "¿Qué quiere el diseño que yo haga? (identificar la intencionalidad de quien lo creó)"
3. "¿Qué emoción me está intentando tocar? (detectar manipulación mediante urgencia o culpa)"
4. "¿Qué dato o beneficio estoy entregando a cambio? (evaluar el intercambio de valor)"
5. "¿Qué otra opción tengo realmente? (buscar alternativas fuera del flujo sugerido)"

**Nota de cierre del bloque:** "Lectura lateral (Mike Caulfield): en lugar de analizar una web de arriba a abajo, 'leé a través de pestañas' — salí de la interfaz para verificar al editor y la veracidad de la oferta en fuentes independientes." *(repite casi textualmente el punto 2 de la tríada)*

---

## Material de estudio — Presentación en Slides e Infografía Visual (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`:** 15 diapositivas `.webp` (`/img/tematicas/diseno-persuasivo-patrones-oscuros/slides/`), botón de descarga del PDF.

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mecanismo compartido). Imagen: `/img/tematicas/diseno-persuasivo-patrones-oscuros/infografia.webp`.

---

## Fuentes Oficiales, Datos y Citas Verificables (`ACADEMIC_CITATIONS`, 13 entradas — la lista más grande de las 3 temáticas del grupo auditadas)

| Autor | Título | Publicación | Tema | Stat | URL |
|---|---|---|---|---|---|
| BJ Fogg (2009–2020) | The Fogg Behavior Model (B = MAP) | Behavior Design Lab, Stanford University | Motivación, capacidad y disparador como condición del comportamiento | "Modelo citado en más de 1.900 publicaciones académicas" | https://www.behaviormodel.org/ |
| Harry Brignull (2010–2023) | Deceptive Patterns (ex-Dark Patterns) | deceptive.design — Iniciativa de Patrones Engañosos | Taxonomía de diseños que llevan a hacer algo no deseado | "Vocabulario adoptado por la Digital Services Act y la CPRA" | https://deceptive.design/about-us/dr-harry-brignull/ |
| Federal Trade Commission (FTC, 2023) | FTC Finalizes Order Requiring Fortnite Maker Epic Games to Pay $245 Million | Comisión Federal de Comercio de EE.UU. (FTC Official Release) | Caso Epic Games / Fortnite: cargos no deseados mediante patrones oscuros | "Reembolso oficial de $245.000.000 USD a usuarios afectados" | https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making |
| Daniel Kahneman (2011) | Thinking, Fast and Slow | Farrar, Straus and Giroux | Sistema 1 y Sistema 2: decisiones automáticas bajo fatiga o presión | "Marco teórico central sobre atajos cognitivos y sesgos" | https://us.macmillan.com/books/9780374533557/thinkingfastandslow/ |
| Edward Deci & Richard Ryan | Self-Determination Theory | Self-Determination Theory International | Autonomía como necesidad psicológica básica frente al control externo | "Teoría base para distinguir diseño que apoya de diseño que controla" | https://selfdeterminationtheory.org/ |
| Lawrence Lessig (1999–2006) | "Code is Law" — Code and Other Laws of Cyberspace | Harvard Magazine / Harvard Law School | El código como regulador invisible | "Marco fundacional del derecho digital y la gobernanza tecnológica" | https://harvardmagazine.com/2000/01/code-is-law-html |
| Richard Thaler & Cass Sunstein (2008) | Nudge: Choice Architecture | Yale University Press | La "arquitectura de la elección" | "Premio Nobel de Economía 2017 (Richard Thaler)" | https://en.wikipedia.org/wiki/Nudge_theory |
| European Data Protection Board (2022) | Guidelines 3/2022 on Dark Patterns in Social Media Platform Interfaces | Comité Europeo de Protección de Datos (EDPB) | Catálogo oficial europeo de patrones oscuros en redes sociales | "Documento base para la aplicación del RGPD frente a interfaces manipuladoras" | https://www.edpb.europa.eu/system/files/2022-03/edpb_03-2022_guidelines_on_dark_patterns_in_social_media_platform_interfaces_en.pdf |
| Wikipedia (edición verificada) | Dark Pattern — Taxonomía, Historia y Legislación | Wikipedia, la enciclopedia libre | Panorama general y cronología del concepto | "Punto de partida para rastrear fuentes primarias sobre cada patrón" | https://en.wikipedia.org/wiki/Dark_pattern |
| Carolina Albanese (2025) | Hiperpersonalización en Moda Digital y Patrones Oscuros | SciELO Argentina | Captura de datos para personalizar ofertas de moda | "23,2 millones de compradores online en Argentina (Kantar)" | https://www.scielo.org.ar/pdf/ccedce/n257/1853-3523-ccedce-257-181.pdf |
| Ruohonen et al. (2025) | Ethical Issues in Dark Patterns Research | arXiv (preprint académico revisable) | Evaluación ética trimembre aplicada al diseño de software | "Marco de análisis usado en esta clase para juzgar interfaces" | https://arxiv.org/abs/2503.02981 |
| Belén Giménez / TEDIC Paraguay | Patrones Oscuros de Diseño | TEDIC — Tecnología y Comunidad (Paraguay) | Mirada regional latinoamericana | "Organización de la sociedad civil que audita interfaces en la región" | https://www.tedic.org/patrones-oscuros-de-diseno/ |
| ACM & IEEE | Códigos de Conducta Profesional en Ingeniería de Software | ACM / IEEE | Estándares de ética profesional | "Referencia normativa para la ética de la virtud en ingeniería" | https://www.acm.org/code-of-ethics |

> Notas:
> - **Wikipedia aparece como fuente académica de pleno derecho** en esta lista (etiquetada "edición verificada"), algo que no ocurre en `ACADEMIC_CITATIONS`/`VERIFIED_ACADEMIC_SOURCES` de las otras 2 temáticas del grupo, donde Wikipedia no figura.
> - `Ruohonen et al. (2025)` es un **preprint de arXiv sin revisión por pares confirmada** (el propio campo `publication` lo aclara: "preprint académico revisable") — es la única fuente de las 13 con este estatus explícitamente señalado, aunque no lleva ningún badge de "sin verificar" como sí tienen otras temáticas del sitio con su patrón `unverified`.
> - El "Estudio citado en Perception Lab" de `KEY_STATS` (244 horas de lectura anual) **no tiene entrada propia en este listado** — es una fuente mencionada en la franja de datos duros del Hero que queda sin verificación en la sección final.
> - Los 2 "Otros escenarios críticos" (Meta/NOYB, campañas de phishing educativas con IA) **tampoco tienen entrada en este listado** pese a citarse con nombres de organizaciones ("la organización NOYB", "especialistas").

---

## Test de Reconocimiento Rápido (`id="test"`) — práctica libre sin puntaje

**Elemento interactivo — Mini-test de 3 escenarios** (`MiniRecognitionTest`), etiquetado explícitamente como **"Práctica libre — no cuenta para tu progreso"**, distinto del quiz oficial de 10 preguntas. Feedback inmediato tras cada respuesta (2.2 segundos antes de avanzar), contador de aciertos, mensaje final distinto según score perfecto o no.

**Los 3 escenarios (`MINI_TEST_SCENARIOS`):**

1. **Escenario:** "Navegás en una tienda de ropa online y ves una barra que dice '¡Quedan 02:15 minutos para que expire tu carrito!'. Al recargar la página, el reloj vuelve a marcar 05:00 minutos."
   - "Es una oferta legítima por alta demanda." → Incorrecta: "reiniciar el temporizador demuestra que la escasez es simulada artificialmente."
   - "Es un patrón oscuro de 'falsa urgencia'." → **Correcta**: "es un mecanismo para presionar la compra por impulso, apelando al Sistema 1."

2. **Escenario:** "Al intentar cancelar un boletín informativo, el botón para confirmar dice: 'No gracias, no me interesa cuidar mi seguridad financiera'."
   - "Es una técnica de 'confirmshaming'." → **Correcta**: "apela a la culpa o vergüenza para alterar la decisión del usuario."
   - "Es una advertencia de seguridad transparente." → Incorrecta: "usa un lenguaje pasivo-agresivo para manipular la emoción, no para informar."

3. **Escenario:** "Te registrás en una prueba gratuita de 7 días con un solo clic. Para cancelarla, tenés que llamar por teléfono a un centro de atención con horario acotado."
   - "Es un patrón de 'Roach Motel' (motel de cucarachas)." → **Correcta**: "hay una asimetría intencional de fricción entre entrar y salir."
   - "Es un procedimiento estándar de seguridad." → Incorrecta: "la normativa DSA y la regla Click-to-Cancel de la FTC exigen que cancelar sea tan fácil como registrarse."

Mensajes finales: score perfecto → "¡Buen ojo! Detectás con eficacia la arquitectura manipuladora en escenarios reales."; score imperfecto → "Sos vulnerable a algunos atajos mentales y patrones de urgencia o asimetría visual. Aplicá la tríada Pausar, Preguntar, Elegir."

---

## Cuestionario de Comprensión — Quiz oficial (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas**, mismo mecanismo compartido que marca finalización automática al alcanzar ≥8/10. **A diferencia de `algoritmos-perfilado`, esta implementación SÍ usa correctamente `showQuiz`, `previousResult` y `passed`:**
- Pantalla inicial con instrucciones: "10 preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla." + botón "Comenzar evaluación" / "Volver a hacer el quiz" (según haya intento previo).
- Si hay `previousResult`, se muestra "Último intento: X/10" antes de empezar.
- Pantalla de resultados distingue explícitamente "¡Completaste esta temática!" (si `passed`) de "Todavía no llegaste al puntaje mínimo" (si no).

**Las 10 preguntas completas:**

1. "Según BJ Fogg, ¿qué tres elementos aumentan la probabilidad de que actuemos frente a un estímulo digital?" → Correcta: "Motivación, facilidad y un disparador en el momento justo"
2. "¿Cómo describe la charla la forma habitual en que llega la influencia digital?" → Correcta: "Haciendo que una conducta sea más fácil, más visible y más oportuna, sin dar una orden directa"
3. "¿Qué diferencia, según la charla, a un recordatorio que apoya la autonomía de una notificación manipuladora, si la técnica puede ser parecida?" → Correcta: "La finalidad, la transparencia y si la persona puede decir que no"
4. "¿Qué nombre le puso Harry Brignull a los diseños que llevan a alguien a hacer algo que no quería hacer?" → Correcta: "Patrones oscuros"
5. "¿Cuál de estos NO forma parte del catálogo de patrones oscuros documentado por la FTC?" → Correcta: "Un botón claro y visible para eliminar la cuenta en un solo paso"
6. "Según Kahneman, ¿qué pasa con nuestras decisiones cuando estamos bajo fatiga o presión?" → Correcta: "Recurrimos mucho más a respuestas rápidas y automáticas"
7. "¿Qué agrega una cuenta regresiva en una interfaz, según la charla?" → Correcta: "Presión, sin sumar ninguna información nueva"
8. "¿Qué ordenó la FTC en el caso Epic Games / Fortnite?" → Correcta: "245 millones de dólares en reembolsos por compras que las personas no querían hacer"
9. "¿Cuándo dice la charla que un diseño persuasivo 'se pasa de la raya'?" → Correcta: "Cuando oculta, confunde o hace difícil salir"
10. "Según la charla, ¿a qué le 'hablan' los patrones oscuros para funcionar incluso cuando los conocemos?" → Correcta: "A nuestras necesidades y emociones: urgencia, recompensa, curiosidad, cansancio, miedo a quedar afuera"

Ninguna pregunta ni sus opciones varían por audiencia.

---

## Resumen de hallazgos para el rediseño

1. **Es, por lejos, la temática con más contenido del grupo "Libres bajo influencia"**: además de las 4 secciones base con datos de audiencia, agrega 8 bloques completamente nuevos sin equivalente en `subculturas-digitales` ni `algoritmos-perfilado` (franja de datos duros, 2 widgets interactivos en la introducción, comparación ética en 2 columnas, matriz filtrable de 8 patrones, 2 casos adicionales, evaluación ética trimembre, marco regulatorio de 3 regiones, kit de herramientas de agencia, mini-test de práctica libre). Si el objetivo del rediseño es uniformar la extensión entre las 6 temáticas del grupo, esta es la que más contenido tendría que reorganizarse o recortarse.
2. **`data.closingQuote` se repite 3 veces en la misma página** (Sección 02, widget Detector de Presión, y la sección dedicada "Cita de cierre") — la repetición es más notoria acá que en las otras 2 temáticas del grupo.
3. **La sección "Qué significa esto para el aula/casa" no tiene `quoteFamilias`** (a diferencia de `algoritmos-perfilado`, que sí cubre las 3 partes) — la cita de cierre de esa sección específica queda igual para ambas audiencias.
4. **La nota de "Lectura lateral (Mike Caulfield)" se repite casi textualmente 2 veces** en el bloque "Kit de herramientas de agencia digital": una vez como paso 2 de la tríada ("Preguntar") y otra vez en la nota de cierre del mismo bloque.
5. **3 fuentes mencionadas en el cuerpo no tienen entrada en el listado final de 13**: "Estudio citado en Perception Lab" (244h de lectura, en `KEY_STATS`), y los 2 "Otros escenarios críticos" (Meta/NOYB y las campañas de phishing educativas con IA), que citan organizaciones/especialistas sin nombrar la fuente concreta ni dar link.
6. **La mecánica del último patrón de la matriz ("Cobros inadvertidos en juegos") describe el mismo caso que el Caso de Estudio principal** (Epic Games/Fortnite) — duplicación de contenido entre 2 bloques distintos de la misma página.
7. **Es la única de las 3 temáticas auditadas cuyo quiz oficial implementa correctamente todo el estado del hook compartido** (`showQuiz`, `previousResult`, `passed`) — a diferencia de `algoritmos-perfilado`, que destructura esas 3 variables pero nunca las usa. Vale la pena que el rediseño tome esta implementación como referencia para unificar el comportamiento del quiz en las 6 temáticas del grupo.
8. **Wikipedia figura como fuente académica de pleno derecho** en el listado final (con la etiqueta "edición verificada") — tratamiento distinto al de las otras 2 temáticas del grupo, donde Wikipedia no aparece en el listado equivalente.
9. **El "Mini-test de Reconocimiento Rápido" es un elemento interactivo completamente nuevo**, explícitamente marcado como "no cuenta para tu progreso" — es el único caso de las 3 temáticas auditadas con un ejercicio de práctica separado del quiz oficial que otorga puntaje.
10. **Los pesos del "Detector de Presión Manipuladora" son ficticios**, igual que el simulador de `algoritmos-perfilado`, sin ningún disclaimer que lo aclare — mismo hallazgo aplicable acá.
11. **`Ruohonen et al. (2025)` es un preprint de arXiv sin revisión por pares confirmada**, señalado como tal en el campo `publication` pero sin usar el patrón `unverified`/badge "sin verificar" del resto del sitio — inconsistencia de tratamiento entre "reconocer que una fuente es preliminar" y el mecanismo formal que otras temáticas usan para lo mismo.
