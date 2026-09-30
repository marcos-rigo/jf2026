# Auditoría de contenido — IA, Ética y Ciudadanía Digital

Base para rediseño. Recorrido completo de `components/ia-etica-ciudadania-content.tsx` (2231 líneas, único archivo — no hay `lib/*.ts` separado ni subcomponentes de sección; todo el contenido, tipos, estilos y JSX viven en este componente). Solo lectura, nada modificado.

Ruta: `/tematicas/ia-etica-ciudadania`. `page.tsx` no tiene content file propio en `app/` — importa directamente `IaEticaCiudadaniaContent` desde `components/`. Título de página: "IA, Ética y Ciudadanía Digital | José Farhat". Layout: scroll continuo de 6 secciones numeradas internamente como "Sección 1" a "Sección 5" (más Hero y Fuentes sin numerar) — **sin sidebar de navegación (`TocNav`) ni `ReadingProgressBar` compartido**: en su lugar tiene su propia `ScrollProgressBar` inline (barra fija superior de 4px, gradiente azul→rosa→verde-azulado, vinculada a `scrollYProgress` global de la página con `useSpring`). `Navbar`/`Footer`/`BackToDashboardButton` en el propio componente. Progreso vía `useTematicaProgress` (tematicaId `ia-etica-ciudadania`) **sin `computeProgress` ni checklist alguno** — es la única de las temáticas auditadas hasta ahora sin ningún checklist interactivo; el único mecanismo de progreso es el botón manual `TematicaCompletarButton` al final.

**No usa el componente `SourceCite`** en absoluto (no existe en este archivo, ni un equivalente propio) — a diferencia de todas las demás temáticas auditadas, que atribuyen cada afirmación factual a una fuente inline con cita+autor+nota+link. Acá las fuentes viven exclusivamente como un bloque final de 6 tarjetas-link (organismo, documento, año, URL) sin conexión punto a punto con las afirmaciones del cuerpo del texto — ver hallazgos.

Patrón de audiencia: **Group A** (`resolveTexto` + `AudienciaTexto`, con un helper local `t = (texto) => resolveTexto(texto, audienciaActual, "docentes")`), fallback explícito a `'docentes'`. El contenido variable por audiencia está muy concentrado: 8 constantes `AudienciaTexto` en total, la mayoría frases cortas de 1-2 líneas insertadas dentro de párrafos más largos que son fijos — es la temática con menor densidad proporcional de contenido por audiencia de las auditadas hasta ahora (comparable a `hiperconectividad-digital`).

---

## Hero (sin ancla `id`, sección introductoria)

**Badge (fijo):** "Sociedad 5.0 · Marco Humanista · Ciudadanía Digital"

**H1 (fijo):** "Inteligencia Artificial, Ética y Ciudadanía Digital"

**Subtítulo (mixto: fijo + variante de audiencia al final):**
> "La transición de la Sociedad 4.0 a la Sociedad 5.0 no se define por la tecnología que tenemos, sino por la **brújula ética y el enfoque antropocéntrico** [variante de audiencia]"

| Docentes | Familias |
|---|---|
| "con que la usamos — y la escuela es uno de los lugares donde esa brújula se construye, clase a clase." | "con que la usamos — y la casa es uno de los lugares donde esa brújula se construye, día a día." |

**Tags de sociedades (fijos):** "Sociedad 4.0" (nota: "Eficiencia industrial") → "Sociedad 5.0" (nota: "Humanismo tecnológico", destacado visualmente).

**2 CTAs:** "Explorar el marco" (scroll a `#ciudadania`) y "Niveles de acción" (scroll a `#accion`).

---

## Sección 1 · Ciudadanía Digital y Alfabetización (`id="ciudadania"`)

**Título (variante de audiencia):**

| Docentes | Familias |
|---|---|
| "Alfabetización Digital: tu Rol en el Aula" | "Alfabetización Digital: tu Rol en Casa" |

**Párrafo introductorio (mixto):**

| Docentes | Familias |
|---|---|
| "Ya no alcanza con enseñar a leer y escribir. Como docente, tenés un rol central en formar ciudadanos capaces de **comprender, usar, pensar y crear** en entornos digitales." | "Ya no alcanza con enseñar a leer y escribir. Como familia, tenés un rol central en formar ciudadanos capaces de **comprender, usar, pensar y crear** en entornos digitales." |

**Bloque visual — "Las 4 dimensiones de la competencia digital"** (atribuido a "Programa Conectar Igualdad · Educ.ar", sin `SourceCite`, solo texto de etiqueta): copy fijo — "Un marco articulado que va más allá del manejo de dispositivos: apunta a la formación integral del ciudadano digital crítico." Grid de 4 letras: **C**omprender, **U**sar, **P**ensar, **C**rear.

**Las 4 competencias clave del ciudadano digital** (`competencias`, fijas, sin variante de audiencia ni cita):

| Dimensión | Título | Descripción |
|---|---|---|
| Comprender | Comprensión de sistemas | "Entender cómo funcionan los algoritmos, los datos y las plataformas digitales que estructuran la vida social y toman decisiones que nos afectan a diario." |
| Usar | Uso ético | "Emplear las tecnologías respetando los derechos propios y ajenos, con conciencia sobre el impacto de cada acción digital en uno mismo y en la comunidad." |
| Pensar | Reflexión axiológica | "Examinar los valores que subyacen a los sistemas tecnológicos y sus efectos sobre la dignidad humana, la equidad y la justicia social." |
| Crear | Pensamiento crítico | "Cuestionar, comparar y evaluar información, decisiones algorítmicas y narrativas tecnológicas para construir ciudadanía genuinamente informada." |

**Callout "Tu aula/casa como garante de equidad digital" (variante de audiencia):**

| Docentes | Familias |
|---|---|
| Título: "Tu aula como garante de equidad digital:" | Título: "Tu casa como garante de equidad digital:" |
| Texto: "sin formación crítica en ciudadanía digital, las brechas tecnológicas se convierten en brechas de poder. Cada **clase** donde trabajás esto de forma explícita achica esa brecha. La alfabetización digital no es una competencia técnica; es un derecho político." | Texto: "sin formación crítica en ciudadanía digital, las brechas tecnológicas se convierten en brechas de poder. Cada **conversación** donde trabajás esto de forma explícita achica esa brecha. La alfabetización digital no es una competencia técnica; es un derecho político." |

Sin fuentes citadas en toda esta sección (el "Programa Conectar Igualdad · Educ.ar" se menciona como etiqueta pero sin link ni `SourceCite`; sí aparece como entrada en la sección final de Fuentes).

---

## Sección 2 · IA y Futuro del Trabajo (toggle interactivo)

Título (fijo): "IA, Automatización y el Futuro del Trabajo". Intro (mixta, con cierre por audiencia):
> "¿La IA desplaza o amplía? La respuesta depende del tipo de sistema y del perfil profesional. El relato del reemplazo total es más simple que la realidad [variante]"

| Docentes | Familias |
|---|---|
| "— y es exactamente la conversación que tus estudiantes van a necesitar tener sobre su propio futuro profesional." | "— y es exactamente la conversación que tus hijos van a necesitar tener sobre su propio futuro profesional." |

### Elemento interactivo — Toggle de 2 paneles ("IA No Autónoma" / "IA Autónoma", tabs con `role="tab"`)

Contenido fijo, sin variante de audiencia:

**Panel "IA No Autónoma"** (subtítulo: "Colaborativa · Aumentativa · Supervisada", concepto clave: "Humanidad Ampliada"):
- Definición: "Sistemas de IA que requieren participación humana activa para operar, decidir e interpretar resultados. La inteligencia humana permanece como factor rector."
- Impacto laboral: "Potencia al profesional Sénior: su juicio crítico, experiencia contextual y capacidad de síntesis se vuelven activos diferenciadores irremplazables."
- Ventaja: "El humano conserva la agencia. La IA amplifica capacidades sin suplantar el criterio, modelando un escenario de humanidad ampliada donde creatividad, empatía y ética son la ventaja competitiva central."
- Riesgo: "Dependencia gradual que puede erosionar habilidades cognitivas si no se cultiva activamente el pensamiento propio."
- Ejemplos: Asistentes de diagnóstico médico con validación humana · Co-pilotos de código (Copilot, Cursor) · Herramientas analíticas con revisión profesional · IA generativa supervisada por equipos editoriales.

**Panel "IA Autónoma"** (subtítulo: "Alta Potencia · Autoejecutable · Sin supervisión continua", concepto clave: "Automatización de los Humanos"):
- Definición: "Sistemas que ejecutan tareas completas —incluyendo decisiones y acciones— sin intervención humana en el proceso. Opera en modo autónomo en rangos acotados de dominio."
- Impacto laboral: "Presiona roles Junior y posiciones rutinarias. Comprime la curva de aprendizaje: las tareas que antes formaban a los novatos ahora las ejecuta la IA."
- Ventaja: "Eficiencia operacional masiva, disponibilidad 24/7 y eliminación de errores repetitivos en procesos totalmente estructurados."
- Riesgo: "Riesgo de redundancia laboral en tareas cognitivas de nivel medio. **La OIT estima 375 millones de empleos en transición para 2030.**" — dato citado sin `SourceCite`, sin link directo (la OIT no aparece en el listado final de Fuentes tampoco).
- Ejemplos: Vehículos autónomos (SAE nivel 4–5) · Trading algorítmico de alta frecuencia · Procesamiento legal y contractual automatizado · Manufactura robótica sin supervisión directa.

**Cierre conceptual de la sección (fijo):** "La respuesta no es resistir a la IA, sino **construir profesionales con juicio ético, sensibilidad y capacidad de supervisión crítica** que los sistemas automatizados nunca podrán reemplazar."

---

## Sección 3 · Humanidad Ampliada y Sensibilidad (pull-quotes filosóficos)

Sin variante de audiencia en toda la sección. Intro: "Tres pensadores que nos recuerdan lo que ningún sistema puede computar: la condición humana irreductible."

**3 pilares filosóficos (`pilaresFilosoficos`), presentados en layout asimétrico — el primero grande y ancho completo, los otros 2 en grid desplazado:**

### 01 — Maurice Merleau-Ponty · Sensibilidad
> Cita: "La percepción no es una ciencia del mundo, es el trasfondo sobre el que todos los actos se destacan y es presupuesta por ellos."
> Explicación: "La IA procesa señales; los humanos sienten. La sensibilidad corporal, emocional y estética es irreductible a datos y constituye el punto de partida de toda ética genuina."

### 02 — Emmanuel Levinas · Alteridad
> Cita: "El rostro del otro me interpela con una responsabilidad infinita que ningún sistema puede asumir por mí."
> Explicación: "La responsabilidad hacia el otro no puede delegarse en un algoritmo. La ética surge del encuentro singular, de la vulnerabilidad reconocida ante un ser absolutamente irreemplazable."

### 03 — Humberto Maturana · Biología del Amor
> Cita: "El amor es la emoción que constituye el dominio de conductas en el que se da la convivencia social."
> Explicación: "Los vínculos y la solidaridad emergen del amor como emoción fundante. Una IA puede optimizar con precisión matemática; no puede amar ni construir comunidad desde adentro."

**Ninguna de las 3 citas filosóficas tiene fuente bibliográfica** (libro, año, editorial) — solo el nombre del filósofo, a diferencia del tratamiento riguroso de citas académicas visto en `alfabetizacion-digital`/`alfabetizacion-mediatica` (que sí incluyen año y publicación específica para cada autor citado).

**Bloque de cierre — "La tesis del marco humanista" (fijo):**
> "La Sociedad 5.0 no se construye optimizando algoritmos: se construye **amplificando la humanidad**. La tecnología debe expandir nuestra capacidad de sentir, cuidar y relacionarnos — no reemplazar esas capacidades por eficiencia computacional."

---

## Sección 4 · Ética, Derecho y Responsabilidad (acordeón + pirámide interactiva)

Sin variante de audiencia. Intro: "Del problema de la Caja Negra al AI Act 2024: cómo el derecho intenta regular lo que la ética ya señalaba."

### Elemento interactivo #1 — Acordeón de 3 ítems (`acordeonItems`, expandir/colapsar individual)

**"El Problema de la Caja Negra"** (subtítulo: "Opacidad algorítmica y asimetría de poder"):
1. "Los sistemas de IA más avanzados toman decisiones que ni sus propios creadores pueden explicar completamente. Esto genera una asimetría radical: quien fue perjudicado no tiene herramientas para entender ni cuestionar la decisión."
2. "Cuando un algoritmo niega un crédito, rechaza un CV o contribuye a una sentencia judicial, ¿quién responde? ¿Ante quién se apela? La opacidad no es solo técnica: es política y ética."
3. "La UNESCO (2021) identifica la explicabilidad como requisito ético fundamental: toda persona afectada por un sistema de IA tiene derecho a una explicación comprensible de la decisión que la afecta."
- Referencia (badge, sin link): "UNESCO – Recomendación sobre la Ética de la IA, 2021"

**"Directiva UE 2024/2853"** (subtítulo: "Software como producto: responsabilidad civil objetiva"):
1. "La Directiva de Responsabilidad por Productos de la UE (2024/2853) reconoce formalmente el software —incluyendo sistemas de IA— como producto sujeto a responsabilidad civil objetiva."
2. "Establece la inversión de la carga de la prueba: el fabricante debe demostrar que su sistema NO causó el daño, no la víctima que sí lo causó. Esto rompe la asimetría que históricamente blindaba a las empresas tecnológicas."
3. "Aplica también a sistemas de IA integrados en servicios digitales (SaaS), ampliando el alcance más allá del software vendido como producto tangible."
- Referencia: "Unión Europea – Directiva 2024/2853 sobre responsabilidad por productos"

**"Responsabilidad Objetiva y Marco Interamericano"** (subtítulo: "Protección de quien sufre el daño algorítmico"):
1. "La Responsabilidad Objetiva establece que quien despliega un sistema de IA es responsable por sus daños independientemente de culpa o negligencia. No hace falta demostrar intención: basta con el daño y la relación causal."
2. "La OEA (Ley Modelo Interamericana sobre IA en sistemas judiciales) incorpora este principio exigiendo explicabilidad, auditoría independiente y recursos de impugnación para decisiones judiciales asistidas por IA."
3. "Este estándar reconoce la asimetría informacional radical: quien despliega un sistema opaco tiene la responsabilidad de demostrar su inocuidad, no la víctima de demostrar el daño."
- Referencia: "OEA – Ley Modelo Interamericana sobre IA en sistemas judiciales"

> Nota: las "referencias" del acordeón son badges de texto plano (organismo + año), no links ni `SourceCite` — coherentes en contenido con 3 de las 6 entradas del listado final de Fuentes (UNESCO, UE Directiva 2024/2853, OEA), pero sin conexión clicable directa desde el propio acordeón.

### Elemento interactivo #2 — "Pirámide Interactiva" de clasificación de riesgos del AI Act (`nivelesRiesgo`, 3 niveles seleccionables, expande ejemplos al tocar)

Rotulada "AI Act 2024 · Reglamento UE 2024/1689".

| Nivel | Descripción | Ejemplos | Ancho de barra (decorativo, no es un %) |
|---|---|---|---|
| Riesgo Inaceptable | "Prohibidos en la Unión Europea" | Puntuación social por parte del Estado · Manipulación subliminal del comportamiento · Reconocimiento facial en tiempo real en espacios públicos (salvo excepciones tasadas) · Predicción de delitos basada en perfil | 52% |
| Alto Riesgo | "Obligaciones estrictas de transparencia y supervisión" | IA en diagnóstico médico crítico · Selección laboral y evaluación de candidatos · Sistemas de justicia penal asistidos por IA · Infraestructura crítica y servicios esenciales | 75% |
| Riesgo Mínimo | "Sin obligaciones adicionales específicas" | Filtros de spam y clasificadores de correo · Videojuegos con componentes de IA · Chatbots con transparencia declarada al usuario · Sistemas de recomendación de contenido no crítico | 100% |

> Nota importante: los valores "52%"/"75%"/"100%" (`porcentaje`) se usan como **ancho visual de la barra** en el layout de pirámide (más angosto arriba, más ancho abajo) — no representan un porcentaje real de nada (no son "52% de los sistemas son de riesgo inaceptable"). Es un valor puramente decorativo de maquetación con nombre de campo potencialmente confuso (`porcentaje`) si se reutiliza el dato fuera de contexto.

---

## Sección 5 · Violencia Digital y Justicia con Perspectiva de Género

Sin variante de audiencia. Intro: "Los algoritmos no son neutros. Cuando se entrenan con datos de un mundo desigual, producen y amplifican esa desigualdad a escala masiva."

**3 estadísticas destacadas (`violenciaStats`, sin `SourceCite` — la atribución va inline en el propio texto de la cifra):**

| Cifra | Descripción con fuente inline |
|---|---|
| 73% | "de mujeres han experimentado violencia en línea en algún momento de su vida (ONU Mujeres, 2023)" |
| 85% | "de datasets de reconocimiento facial están dominados por hombres de piel clara (MIT Media Lab, 2019)" |
| 375M | "de empleos en transición para 2030, con impacto desproporcionado en mujeres y trabajadores de menores ingresos (OIT)" |

> Nota: ni ONU Mujeres, ni MIT Media Lab, ni la OIT (esta última repetida también en la Sección 2) tienen entrada propia en el listado final de "Fuentes y Organismos de Referencia" — son las 3 fuentes numéricas más citadas del cuerpo del texto y ninguna aparece en el repositorio final de fuentes ni tiene link.

**4 tipos de violencia digital (`violenciaTipos`, sin variante de audiencia, sin cita):**

| Tipo | Descripción |
|---|---|
| Acoso y hostigamiento digital | "Persecución sistemática, amenazas y monitoreo no consentido. Los algoritmos de sugerencia pueden amplificar la visibilidad de perfiles de acosadores." |
| Difusión no consentida (IBSA) | "Imágenes íntimas compartidas sin consentimiento. La IA generativa agrava este delito produciendo deepfakes de alta calidad para fines de humillación y extorsión." |
| Violencia espiritual y cultural | "Ataques a la identidad, cosmovisión y pertenencia de pueblos originarios y comunidades vulnerables. Los sistemas de moderación con sesgos occidentales amplifican estas violencias." |
| Sesgo de género sistémico | "Algoritmos entrenados con datos históricos reproducen discriminación a escala masiva: desde CVs rechazados por género hasta condiciones de crédito sesgadas por estereotipos." |

**Bloque "Marco OEA · Violencia Facilitada por Tecnología" (fijo):**
> "La OEA reconoce la violencia digital de género como una forma de violencia que incluye acoso, stalking digital, difusión no consentida, amenazas y control abusivo. Los Estados tienen obligación de prevenir, investigar y sancionar."

**Recuadro de ayuda — Línea 144 (fijo, único contenido de utilidad práctica/emergencia de toda la temática):**
> "Si sos víctima de violencia de género (incluyendo violencia digital) en Argentina, podés comunicarte con la **Línea 144**, disponible las 24 horas, los 365 días del año. Es gratuita y confidencial."

---

## Cierre · Tres Niveles de Acción (`id="accion"`, stepper interactivo)

Badge (fijo): "Aplicación práctica del marco". Título: "Tres Niveles de Acción". Intro: "La ética de la IA no es solo una cuestión de expertos: es una responsabilidad distribuida en cada persona, organización y sociedad."

### Elemento interactivo — Stepper de 3 niveles (círculos conectados en desktop, tarjetas apiladas en mobile)

Cada nivel tiene 4 acciones fijas (universales, sin variante de audiencia) + **1 acción adicional (`accionExtra`) que sí varía por audiencia** (documentado en el propio tipo `NivelAccion` con un comentario explicando por qué está separada del array `acciones: string[]`).

### Nivel 01 — Personal ("Soberanía digital como práctica cotidiana")

Acciones fijas:
1. "Auditar el consumo de IA: ¿qué decisiones delegás a sistemas automatizados?"
2. "Desarrollar alfabetización algorítmica propia: entender cómo los sistemas te clasifican"
3. "Ejercer derechos ARCO frente a decisiones automatizadas que te afecten"
4. "Cultivar lo irreemplazable: sensibilidad, juicio ético, presencia genuina"

Acción extra (audiencia):
| Docentes | Familias |
|---|---|
| "Modelar frente a tus estudiantes tu propia soberanía digital: explicar en voz alta por qué desconfiás de una fuente o por qué revisás un dato antes de darlo por cierto." | "Modelar frente a tus hijos tu propia soberanía digital: explicar en voz alta por qué desconfiás de una fuente o por qué revisás un dato antes de darlo por cierto." |

### Nivel 02 — Organizativo ("Ética institucional en el despliegue de IA")

Acciones fijas:
1. "Implementar auditorías de sesgos antes de desplegar cada sistema de IA"
2. "Crear comités de ética con perspectiva de género e interculturalidad"
3. "Garantizar explicabilidad en decisiones automatizadas que afecten personas"
4. "Priorizar bienestar humano sobre eficiencia algorítmica en cada diseño"

Acción extra (audiencia):
| Docentes | Familias |
|---|---|
| "Llevar estas preguntas a tu institución: ¿qué herramientas de IA usa la escuela y con qué criterios de transparencia?" | "Llevar estas preguntas a la escuela de tus hijos: ¿qué herramientas de IA usa y con qué criterios de transparencia?" |

### Nivel 03 — Social ("Ciudadanía digital como derecho político")

Acciones fijas:
1. "Exigir marcos regulatorios: AI Act, responsabilidad objetiva, carga de la prueba invertida"
2. "Fortalecer la ciudadanía digital como derecho, no solo habilidad técnica"
3. "Proteger comunidades vulnerables de la violencia algorítmica sistémica"
4. "Construir IA desde perspectivas diversas: género, cultura, territorio y clase"

Acción extra (audiencia):
| Docentes | Familias |
|---|---|
| "Formar en el aula la próxima generación de ciudadanos digitales: la alfabetización algorítmica que trabajás hoy con tus estudiantes es, a escala, la construcción de esa ciudadanía." | "Formar en casa la próxima generación de ciudadanos digitales: la alfabetización algorítmica que trabajás hoy con tus hijos es, a escala, la construcción de esa ciudadanía." |

**Cierre final de la página (mixto, con variante de audiencia insertada mid-párrafo):**
> "La Sociedad 5.0 exige ciudadanos capaces de entender los sistemas que los gobiernan y ejercer su soberanía digital. Ese es el horizonte del marco humanista: tecnología al servicio de la dignidad, no al revés. Como [variante]"

| Docentes | Familias |
|---|---|
| "docente, sos parte de quienes forman a esos ciudadanos, antes de que lo hagan los algoritmos." | "familia, sos parte de quienes forman a esos ciudadanos, antes de que lo hagan los algoritmos." |

2 CTAs finales: "Ver todas las temáticas" (→ `/tematicas`) y "Ciudadanía Presente" (→ `/ciudadania-presente/modulos`).

---

## Fuentes y Organismos de Referencia (sección final, sin numerar)

Único bloque de atribución de toda la página — 6 tarjetas-link (`fuentes`), cada una con organismo, documento, año y URL externa. **No es un `SourceCite` por afirmación**, es un repositorio general al final:

| Organismo | Documento | Año | URL |
|---|---|---|---|
| UNESCO | Recomendación sobre la Ética de la IA | 2021 | https://www.unesco.org/es/artificial-intelligence/recommendation-ethics |
| Unión Europea | AI Act · Reglamento (UE) 2024/1689 | 2024 | https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai |
| Unión Europea | Directiva de Responsabilidad por Productos 2024/2853 | 2024 | https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024L2853 |
| OEA / OAS | Ley Modelo Interamericana sobre IA en sistemas judiciales | 2023 | https://www.oas.org/es/sla/ddi/ |
| Educ.ar · Conectar Igualdad | Marco de Ciudadanía Digital para la escuela argentina | 2023 | https://www.educ.ar |
| Gobierno de Japón · Cabinet Office | Society 5.0 — Para una sociedad humano-céntrica | 2016–2023 | https://www8.cao.go.jp/cstp/english/society5_0/index.html |

**Notas sobre esta lista:**
- El link de Educ.ar apunta al dominio general (`https://www.educ.ar`), no a un documento específico del "Marco de Ciudadanía Digital" nombrado.
- El link de OEA apunta a la página general de la Secretaría de Asuntos Jurídicos (`https://www.oas.org/es/sla/ddi/`), no a la Ley Modelo específica.
- **3 fuentes citadas numéricamente en el cuerpo del texto no tienen entrada acá ni en ningún otro lugar de la página:** ONU Mujeres (2023, dato del 73%), MIT Media Lab (2019, dato del 85%) y OIT (dato de 375M de empleos, citado 2 veces — Sección 2 y Sección 5).

---

## Resumen de hallazgos para el rediseño

1. **Es la única de las temáticas auditadas hasta ahora sin ningún componente `SourceCite`** — no hay atribución punto a punto entre una afirmación y su fuente en el cuerpo del texto; toda la atribución vive en un bloque final de 6 tarjetas-link genéricas, desconectadas de las afirmaciones específicas que aparecen a lo largo de las 5 secciones. Esto rompe el patrón de "cada dato tiene su cita al lado" que se sigue consistentemente en `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `alfabetizacion-digital` y `alfabetizacion-mediatica`.
2. **3 estadísticas citadas por nombre en el cuerpo (ONU Mujeres 73%, MIT Media Lab 85%, OIT 375M) no tienen entrada en el listado final de Fuentes** — a diferencia de las inconsistencias menores vistas en otras auditorías (donde 1-2 fuentes quedaban fuera del listado), acá son 3 de las estadísticas más citables de toda la página las que quedan sin ningún link verificable.
3. **Es la única temática auditada sin ningún checklist interactivo** — no hay `computeProgress` en `useTematicaProgress`, y el único mecanismo de "progreso" es el botón manual de "marcar como completada". Si el objetivo del rediseño es ofrecer un elemento de autoevaluación/práctica como en las demás temáticas del grupo, esta es la única sin ese componente.
4. **Sin sidebar `TocNav` ni `ReadingProgressBar` compartido** — tiene su propia `ScrollProgressBar` (barra superior de progreso de scroll), pero no hay forma de saltar directamente a una sección desde un índice, a diferencia de `ciudadania-digital`/`huella-digital`/`alfabetizacion-digital` (que sí tienen TOC) — más parecido en este aspecto a `hiperconectividad-digital` y `alfabetizacion-mediatica`.
5. **Las 3 citas filosóficas (Merleau-Ponty, Levinas, Maturana) no incluyen referencia bibliográfica** (libro/obra, año) — a diferencia del tratamiento riguroso de citas académicas en `alfabetizacion-digital` (que siempre incluye año y publicación específica), acá solo se nombra al filósofo. Sería una mejora fácil de verificabilidad para el rediseño.
6. **El campo `porcentaje` de `nivelesRiesgo` (52%/75%/100%) es puramente decorativo** (controla el ancho visual de la barra en la pirámide) y no representa ningún dato real — nombre de campo potencialmente confuso si se reutiliza fuera de este contexto visual específico.
7. **El dato "OIT: 375 millones de empleos en transición para 2030" se repite en 2 secciones distintas** (Sección 2 "IA y Futuro del Trabajo" y Sección 5 "Violencia Digital y Género") sin fuente verificable en ninguna de las 2 apariciones ni en el listado final.
8. **2 links del listado de Fuentes apuntan a páginas genéricas de organismo, no al documento específico nombrado** (Educ.ar → home del sitio; OEA → página general de la Secretaría de Asuntos Jurídicos, no la Ley Modelo Interamericana citada) — dificulta que un lector interesado llegue directamente al documento referenciado.
9. **Solo 8 constantes `AudienciaTexto` en total, la mayoría de 1-2 líneas insertadas dentro de párrafos mayormente fijos** — la proporción de contenido variable por audiencia es la más baja o comparable a la más baja de las 6 temáticas auditadas hasta ahora (similar a `hiperconectividad-digital`). Las 4 secciones centrales (2, 3, 4, 5 — IA y Trabajo, Humanidad Ampliada, Ética/Derecho, Violencia de Género) son prácticamente 100% fijas, salvo un cierre de 1 línea en la Sección 2.
10. **Único contenido de utilidad práctica/emergencia de todo el sitio auditado hasta ahora**: la mención de la Línea 144 (violencia de género en Argentina) en la Sección 5 — vale la pena preservar y quizás destacar más este tipo de información de ayuda concreta en el rediseño.
11. **Es la única temática auditada sin `lib/*.ts` propio** — todo (tipos, datos, estilos CSS-in-JS, JSX) vive en un único archivo de 2231 líneas. Si el rediseño busca acercar esta temática al patrón del resto del sitio (datos en `lib/`, JSX en `components/`), esto implicaría una refactorización estructural, no solo de contenido.
