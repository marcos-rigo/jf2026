# Auditoría de contenido — Ciudadanía Digital

Base para rediseño. Recorrido completo de `lib/ciudadania-digital-content.ts` (795 líneas) y los 13 componentes que lo consumen (`app/ciudadania-digital/ciudadania-digital-content.tsx` + `components/ciudadania-digital/*.tsx`). Solo lectura, nada modificado.

Ruta: `/ciudadania-digital`. Título de página: "Kit de Acción del Ciudadano Digital | José Farhat". Layout: scroll continuo de 9 secciones numeradas (00-08) con sidebar de navegación (`TocNav`, desktop sticky / mobile barra horizontal), fondo grid sutil, `Navbar` + `Footer` + `BackToDashboardButton`. Progreso de checklist persiste vía `useTematicaProgress` (tematicaId `ciudadania-digital`), con `TematicaCompletarButton` al final.

Patrón de audiencia: **Group A** (`resolveTexto` + `AudienciaTexto`), fallback explícito a `'docentes'` en absolutamente todos los llamados — es decir, si `audienciaActual` no es ni `'docentes'` ni `'familias'` (p. ej. sin selección, o `mujeres`/`adultos-mayores`/`ninas-ninos-adolescentes`), el contenido cae a la variante **docentes**. Solo existen 2 variantes reales pese a que `Audiencia` admite 5 valores — ver nota al final.

---

## 00 — Hero (`hero-section.tsx`)

**Estructura:** título de temática + bloque de "Definición principal" (cita destacada) + infografía embebida + bloque de texto introductorio (audiencia) con botón CTA + grid de 2 tarjetas ("Síntesis breve" / "Por qué importa").

**Definición principal (fija, no varía por audiencia):**
> "La ciudadanía digital es un concepto dinámico que engloba elementos clave para interactuar de manera segura y responsable en entornos digitales. Implica ser consciente de los riesgos, derechos y responsabilidades asociados al uso de tecnologías y datos personales, promoviendo un uso informado que maximice los beneficios y minimice los riesgos."
> — Dr. José Farhat, "Un cambio de chip necesario"

**Infografía:** imagen embebida en un mockup de ventana de navegador, `src="/weekly-content/2026-W19/infografiaSemanal.svg"`, alt "Infografía de Ciudadanía Digital".

**Texto introductorio — variantes completas:**

| Campo | Docentes | Familias |
|---|---|---|
| Título línea 1 | "Sé la Guía Digital" | "Toma el Control" |
| Título destacado | "de tus Estudiantes" | "de tu Vida en Línea" |
| Párrafo 1 | "¿Sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo? Entre la desinformación que circula por los grupos de WhatsApp del curso, los riesgos de privacidad que exponen sin saberlo, los sesgos de la Inteligencia Artificial que usan para hacer la tarea y los conflictos que se trasladan de las redes sociales al aula, acompañar la vida digital de tus estudiantes puede sentirse como caminar por un campo minado." | "¿Sientes que la tecnología a veces te controla más a ti que tú a ella? Entre desinformación constante, riesgos de privacidad, sesgos de la IA y debates acalorados en redes sociales, navegar por internet puede sentirse como caminar por un campo minado." |
| Párrafo destacado (resaltado, borde izq.) | "El problema es que buena parte de tus estudiantes interactúa en el mundo digital en 'piloto automático' — y muchas veces vos también, entre la carga docente y la velocidad con la que cambian las plataformas. La Ciudadanía Digital no es solo saber usar un dispositivo: es tener las herramientas para enseñar a protegerse, convivir con respeto y aprovechar la red para el desarrollo de cada estudiante, dentro y fuera del aula." | "El problema es que a menudo interactuamos en el mundo digital en 'piloto automático'. La Ciudadanía Digital no es solo saber usar un dispositivo: es tener las herramientas para protegerte, convivir con respeto y aprovechar la red para tu propio desarrollo." |
| Párrafo cierre | "En este Kit dejamos la teoría de lado. Te guiamos paso a paso con estrategias que podés llevar directo al aula: cómo trabajar la seguridad digital con tus estudiantes, cómo mediar los conflictos de convivencia que llegan desde las redes, y cómo enseñarles a detectar información falsa antes de que la compartan." | "En esta plataforma, dejamos la teoría de lado. Te guiaremos paso a paso para que audites tu huella en línea, protejas tus datos y aprendas a detectar información falsa como un profesional." |
| Botón CTA | "Iniciar el Kit Docente ➔" | "Iniciar Protocolo ➔" |

Nota de implementación: las frases `"piloto automático"` y `Ciudadanía Digital` dentro del párrafo destacado se resaltan en `<strong>` vía regex (`withBoldTerms`), no hardcodeadas — son literales idénticos en ambas variantes.

**Header del carrusel** (dato usado en la sección 08, documentado acá por estar junto al resto del Hero en el código):

| Campo | Docentes | Familias |
|---|---|---|
| Label | "Material para el aula" | "Presentación completa" |
| Título | "Ciudadanía Digital — Recursos para el Aula" | "Ciudadanía Digital — Galería" |

**Tarjetas "Síntesis breve" / "Por qué importa" (fijas, no varían por audiencia):**
- *Síntesis breve*: "Es la capacidad que tienen los ciudadanos de interactuar en entornos digitales. Se refiere a las buenas prácticas de comportamiento apropiadas cuando estamos interactuando en entornos digitales." — Dr. José Farhat, Primer Conversatorio Provincial (UTN)
- *Por qué importa*: "En un mundo donde los jóvenes pasan una gran parte de su tiempo en línea, las competencias en ciudadanía digital les proporcionan herramientas esenciales para interactuar de manera responsable, proteger su bienestar emocional y ser conscientes de los riesgos." — Dr. José Farhat

---

## 01 — Historia / Origen (`historia-section.tsx`)

Sin variante de audiencia. Copy fijo: "De dónde viene la idea de 'nativos digitales' y por qué la identidad digital es más compleja de lo que parece." Grid de 2 tarjetas.

**Tarjeta 1 — Nativos digitales:**
> "El concepto que describe a las generaciones que crecieron con la tecnología como parte de su entorno natural."
> Cita: "Los estudiantes de hoy 'piensan y procesan la información de manera fundamentalmente distinta a sus predecesores', lo que los convierte en 'hablantes nativos' del lenguaje digital."
> — Marc Prensky, "Digital Natives, Digital Immigrants" (2001), On the Horizon, Vol. 9, N.º 5 — citado por José Farhat en el conversatorio UNSTA (con link DOI)

**Tarjeta 2 — La paradoja del Barco de Teseo:**
> "Metáfora filosófica clásica: si un barco reemplaza todas sus piezas de a poco, ¿sigue siendo el mismo barco? José la usa para abrir la pregunta de identidad digital: una persona que va incorporando hábitos, cuentas y datos nuevos constantemente, ¿en qué momento deja de ser 'la misma' identidad que empezó?"
> Nota: "Buen disparador de debate en el aula, no una respuesta cerrada."
> Fuente: Tradición filosófica clásica (Plutarco) — marcada **`unverified: true`** ("sin verificar"), con nota "usada por Dr. José Farhat como disparador de debate sobre identidad digital — no tiene una fuente moderna citable".

---

## 02 — Características (`caracteristicas-section.tsx`)

Título: "8 Actitudes de un Buen Ciudadano Digital". Sin variante de audiencia. Lista numerada (1-8), sin iconos por ítem:

1. Promueve un uso de los dispositivos adecuado a la edad, considerando los riesgos de su uso en la infancia.
2. Aprovecha las posibilidades que otorga internet para aprender y adquirir competencias útiles para el mundo laboral.
3. Toma medidas de seguridad en los dispositivos personales, como uso de antivirus y contraseñas.
4. Respeta la diversidad de opiniones, sin "enganchar" ni promover comentarios negativos o agresivos.
5. Recuerda que todos tenemos derecho a acceder a internet, sin importar sexo, cultura o nivel socioeconómico.
6. Se informa de manera responsable y verifica la información antes de compartirla.
7. Aprovecha los espacios de participación y creación de comunidad con ideas u objetivos que lo representen.
8. Cumple las normas de comportamiento y leyes asociadas a los sitios web y redes que utiliza.

Fuente: Dr. José Farhat, Primer Conversatorio Provincial (UTN).

---

## 03 — Tipos o Variantes (`tipos-variantes-section.tsx`)

Título: "Las 12 Dimensiones de la Ciudadanía Digital". Subtítulo: "El material de UTN presenta una síntesis de 10 dimensiones, sin las últimas 2." Sin variante de audiencia.

**⚠️ Nota de atribución visible en pantalla:** "9 de estas 12 dimensiones coinciden casi textualmente con el modelo de Mike Ribble (adoptado por ISTE — International Society for Technology in Education). Los conversatorios de José Farhat no citan a Ribble como fuente original; se lo atribuye acá explícitamente."

**Las 12 dimensiones (grid de tarjetas, marcadas "fuera del modelo Ribble" cuando corresponde):**

| # | Título | Descripción | Fuente | ¿Del modelo Ribble? |
|---|---|---|---|---|
| 1 | Salud y bienestar digital | Bienestar físico y psicológico en un mundo de tecnología digital. Más allá de los problemas físicos, cobran cada vez más relevancia los psicológicos, como la adicción a internet. Implica saber cuándo desconectar y tomar decisiones informadas sobre cómo priorizar el tiempo y las actividades. | Mike Ribble / ISTE | Sí |
| 2 | Alfabetización digital | El proceso de enseñar y aprender sobre la tecnología y su uso. Va más allá de saber usar herramientas: implica saber buscar, evaluar y citar materiales digitales. | Mike Ribble / ISTE | Sí |
| 3 | Seguridad digital | Precaución electrónica para garantizar la seguridad. Los ciudadanos digitales necesitan saber cómo resguardar su información controlando la configuración de privacidad. | Mike Ribble / ISTE | Sí |
| 4 | Etiqueta digital | Estándares de conducta o procedimiento electrónico. Las normas y políticas no alcanzan: hace falta enseñar a todos sobre la conducta apropiada en línea. | Mike Ribble / ISTE | Sí |
| 5 | Cultura digital | Conjunto de prácticas, creencias, comportamientos y conocimientos que surgen en relación con las tecnologías digitales, y que emergen de la interacción entre las personas y los dispositivos tecnológicos. | Wikipedia — Cultura digital | No |
| 6 | Acceso digital | Participación electrónica plena en la sociedad. Trabajar por la igualdad de derechos digitales y apoyar el acceso electrónico es el punto de partida de la ciudadanía digital. | Mike Ribble / ISTE | Sí |
| 7 | Comunicación digital | Intercambio electrónico de información. Con tantas opciones de comunicación disponibles, hace falta aprender a elegir la herramienta correcta según la audiencia y el mensaje. | Mike Ribble / ISTE | Sí |
| 8 | Responsabilidad y derechos digitales | Los ciudadanos digitales deben comprender sus derechos digitales básicos, como la privacidad y la libertad de expresión, y también su responsabilidad electrónica por sus propias acciones. | Mike Ribble / ISTE | Sí |
| 9 | Comercio digital | Compra y venta electrónica de bienes. A medida que las personas hacen más compras en línea, deben entender cómo ser consumidores eficaces en una economía digital. | Mike Ribble / ISTE | Sí |
| 10 | Leyes digitales | Responsabilidad electrónica por las propias acciones. Es crítico que los usuarios entiendan cómo usar y compartir correctamente la propiedad digital ajena. | Mike Ribble / ISTE | Sí |
| 11 | Gov Tech | Enfoque de gobierno integral para la modernización del sector público, que promueve un gobierno simple, eficiente y transparente, poniendo al ciudadano en el centro de las reformas. | World Bank — GovTech | No |
| 12 | Democracia y participación | El uso de las TIC (informática, internet, telecomunicaciones) para crear espacios de diálogo y reflexión social, acceso a la información de actores políticos, ejercicio de los derechos de participación política, y mejora de los procesos electorales. | Wikipedia — Democracia digital | No |

**Habilidades fundamentales** (fuente: Dr. José Farhat):
- Uso de dispositivos y aplicaciones
- Explorar el significado de privacidad, identidad y huella digital
- Analizar, evaluar y seleccionar la información que circula en internet
- Comprender el funcionamiento de los algoritmos y cómo inciden en la vida diaria

**Habilidades instrumentales** (misma fuente):
- Comprender la dimensión de seguridad de las aplicaciones
- Conocer la lógica de las plataformas y los recaudos de seguridad
- Gestión de riesgo y resiliencia
- Creación de contenido digital — construir destrezas como "prosumidor" (productor + consumidor)
- Aprendizaje del uso de la IA

**Perfil del Ciudadano Digital — Competencias del Siglo XXI:**

**⚠️ Nota de atribución visible en pantalla:** "Este modelo de 4 categorías corresponde al proyecto ATC21S. Al igual que con Ribble, José Farhat no lo atribuye explícitamente en el material fuente — se lo cita acá."

Fuente: Griffin, P., McGaw, B. & Care, E. (eds.), *Assessment and Teaching of 21st Century Skills* (ATC21S) — Universidad de Melbourne, con patrocinio de Cisco, Intel y Microsoft.

| Categoría | Ítems |
|---|---|
| Maneras de pensar | Resolución de problemas, Toma de decisiones, Pensamiento computacional, Pensamiento visual, Pensamiento crítico, Autonomía |
| Maneras de trabajar | Comunicación, Trabajo colaborativo, Equipos híbridos |
| Herramientas para trabajar | Uso de tecnologías, Alfabetización mediática e informacional, Alfabetización digital |
| Maneras de vivir el mundo | Vida y profesión, Responsabilidad personal y social, Ciudadanía local y global, Cultura ciudadana |

Cierre de sección — cita destacada:
> "Ser buena gente: esta es la condición principal en el perfil Digital Humano. En los equipos de innovación no hay lugar para las malas personas."
> — Dr. José Farhat

---

## Fases 01-03 — "Ejemplos concretos" (contenedor `id="ejemplos-concretos"`, TOC número 04)

Presentadas en el código como "Fase 01/02/03" con badges propios; agrupadas bajo el ancla `ejemplos-concretos` del TOC. Estas 3 fases son el núcleo interactivo/práctico de la temática.

### Fase 01 — Seguridad (`paso1-section.tsx`)

| Campo | Docentes | Familias |
|---|---|---|
| Título | "Construí el Escudo Digital de tu Aula" | "Construye tu Escudo Digital" |
| Subtítulo | "Seguridad y privacidad: la base que tus estudiantes necesitan antes que nada." | "Seguridad y Privacidad como base de tu ciudadanía." |
| Objetivo | "Ayudar a tus estudiantes —y a vos mismo/a— a blindar la identidad digital y reducir la vulnerabilidad ante ciberataques. La vida digital necesita cerraduras modernas: contraseñas como '123456' o el propio cumpleaños son puertas abiertas, y es habitual encontrarlas en los dispositivos que usan chicos y chicas en el aula." | "Blindar tu identidad digital y reducir tu vulnerabilidad ante ciberataques. Tu vida digital necesita cerraduras modernas. Las contraseñas como '123456' son puertas abiertas." |
| Instrucción 1 | "Trabajá con tus estudiantes la creación de contraseñas fuertes (mínimo 12 caracteres, combinando mayúsculas, minúsculas, números y símbolos) — podés convertirlo en una actividad de 10 minutos al inicio de una clase." | "Crea contraseñas fuertes (min. 12 caracteres, mezcla mayús/minús/números/símbolos)" |
| Instrucción 2 | "Mostrales cómo activar la autenticación de dos factores (2FA) en las cuentas que más usan: correo institucional, redes sociales, plataformas de la escuela." | "Activa la autenticación de dos factores (2FA) en tus cuentas críticas" |
| Instrucción 3 | "Guialos a revisar los permisos de las apps que tienen instaladas: cámara, micrófono, ubicación. Muchos nunca los revisaron." | "Revisa tus permisos de apps: cámara, micrófono, ubicación" |
| Aplicación práctica | "Actividad para el aula: pedile a tus estudiantes que revisen (sin decir la contraseña en voz alta) cuántas de sus cuentas principales NO tienen 2FA activado. Ese conteo grupal, sin exponer a nadie, es un buen disparador para la charla." | "Abre tu gestor de contraseñas ahora. ¿Cuántas de tus cuentas principales NO tienen 2FA? Ese es tu primer objetivo." |
| Título del gráfico | "Así Suele Estar la Seguridad de un Curso" | "Estado de Seguridad Global" |
| Alerta | "Una cuenta sin 2FA es hasta 99% más vulnerable a ataques de fuerza bruta — vale la pena compartir este dato concreto con tus estudiantes, suele impactar más que la advertencia genérica." | "Si tienes cuentas sin 2FA, eres 99% más vulnerable a ataques de fuerza bruta." |
| Título del ejercicio final | "Actividad para el aula" | "Entrenamiento de la sección" |
| Texto del ejercicio final | "Actividad de 10 minutos: pedile a tus estudiantes que abran los permisos de apps en su celular y revoquen el acceso a cámara/micrófono de 3 aplicaciones que no lo necesiten (por ejemplo, juegos offline). Podés hacerlo vos primero, como docente, para mostrar el paso a paso." | "Haz una limpieza digital de 5 min. Ve a los permisos de apps en tu celular y revoca acceso a cámara/micrófono a 3 aplicaciones que no lo necesiten (ej. juegos offline)." |

**Elemento interactivo — `SecurityChart` (Chart.js, gráfico de barras, sin datos reales):**
- Dato hardcodeado, **no atribuido a ninguna fuente ni marcado como estimación**: "Sistemas Vulnerables (Sin 2FA)" = 65, "Sistemas Asegurados (2FA)" = 35 (eje Y 0-100, tooltip "X cuentas"). Es un gráfico ilustrativo con números inventados para la demo, no una estadística real — riesgo de que se lea como dato citado si no se aclara en el rediseño.

**Conceptos avanzados (fijos, no varían por audiencia):**
- *Confianza Cero (Zero Trust)*: '"Nunca confiar, siempre verificar": cada solicitud de acceso debe autenticarse y autorizarse, sin asumir que algo es seguro por estar "adentro" de la red.' — NIST, Special Publication 800-207, Zero Trust Architecture (con link al PDF oficial).
- *Ciberhigiene*: "Ciberhigiene: conjunto de prácticas cotidianas para mejorar la seguridad digital — mantener el software actualizado, usar contraseñas fuertes, hacer copias de seguridad." — Dr. José Farhat.

CTA final: botón "↓ Ver Netiqueta" hace scroll a `#netiqueta`.

### Fase 02 — Netiqueta (`paso2-section.tsx`)

| Campo | Docentes | Familias |
|---|---|---|
| Título | "Trabajá la 'Netiqueta' con tu Curso" | "Aplica la 'Netiqueta'" |
| Subtítulo | "Modelá y enseñá la convivencia digital, dentro y fuera del aula." | "Lidera la convivencia en tus interacciones diarias." |
| Objetivo | "Que tus estudiantes aprendan a interactuar en línea con empatía, evitando malentendidos y construyendo una huella digital positiva — y que vos tengas herramientas para mediar cuando un conflicto de WhatsApp o Instagram se traslada al aula. La *Netiqueta* son las normas no escritas del ecosistema digital: lo que se escribe también construye reputación, la de cada estudiante y la de la institución." | "Interactuar en línea con empatía, evitando malentendidos y construyendo una huella digital positiva. La *Netiqueta* son las normas no escritas del ecosistema digital. Tu texto es tu reputación." |
| Protocolo 1 | "Enseñales a leer antes de responder. Muchos conflictos entre estudiantes arrancan por malinterpretar un mensaje sin contexto — funciona pedirles que lean dos veces antes de contestar en caliente." | "Lee antes de responder. Evita malinterpretaciones por falta de contexto." |
| Protocolo 2 | "Modelá el respeto aunque no haya acuerdo. Ayudalos a diferenciar un debate constructivo de un ataque personal — es una distinción que se puede trabajar con ejemplos reales de sus propios grupos." | "Sé respetuoso aunque no estés de acuerdo. Los debates constructivos no son ataques personales." |
| Protocolo 3 | "Conversá sobre el spam y la autopromoción excesiva en los grupos del curso — cadenas, reenvíos sin filtrar. Fomentá que cada mensaje aporte algo." | "Evita el SPAM y la autopromoción excesiva. Aporta valor." |
| Protocolo 4 | "Insistí en verificar fuentes antes de reenviar noticias o información sensible al grupo del curso — esto conecta directo con lo que van a trabajar en la Fase 03." | "Verifica fuentes antes de compartir noticias o información sensible." |
| Título del ejemplo | "Un Ejemplo para Compartir con tu Curso" | "Ejemplo de Buen Comentario" |
| Por qué funciona | "Es constructivo, abierto, sin ego y busca aprender. Podés usarlo como modelo en clase." | "Es constructivo, abierto, sin ego y busca aprender." |
| Título auditoría | "Auditoría de Huella (para vos y para ellos)" | "Auditoría de Huella" |
| Texto auditoría | "Proponeles buscar su propio nombre en Google en modo incógnito y revisar qué aparece en la primera página: fotos, comentarios, resultados. Esa es su huella digital pública hoy. Podés hacer el ejercicio vos primero, como docente, para mostrar cómo se hace sin exponer a nadie." | "Busca tu nombre en Google (Modo Incógnito). Revisa imágenes y resultados de la primera página. Esa es tu huella digital pública actual. ¿Refleja al profesional que quieres ser?" |
| Aporte de valor | "Proponeles escribir esta semana un comentario constructivo o un mensaje de agradecimiento en el perfil de un compañero, docente o creador que valoren. Es una forma simple de empezar a construir una huella digital positiva." | "Escribe hoy un mensaje de agradecimiento o un comentario constructivo en el perfil de un colega o creador que valores. Construye red." |

**Ejemplo visual (comentario modelo, fijo, no varía por audiencia):**
> "Excelente punto. No había considerado esa perspectiva. ¿Podrías compartir tus fuentes? Estoy interesado en aprender más."

CTA final: botón "↓ Ver IA y Bulos" hace scroll a `#ia-bulos`.

### Fase 03 — IA y Bulos (`paso3-section.tsx`)

| Campo | Docentes | Familias |
|---|---|---|
| Título | "Pensamiento Crítico frente a la IA y los Bulos" | "Análisis Crítico y Bulos" |
| Subtítulo | "Dales a tus estudiantes las herramientas para entender la IA y frenar la desinformación antes de que la compartan." | "Entiende la Inteligencia Artificial y frena la desinformación." |
| Intro | "La era de la IA generativa trae capacidades asombrosas para el aula (resúmenes, tutores virtuales, generación de material), pero también democratiza la desinformación ultrarrealista: deepfakes, textos sintéticos, imágenes falsas que tus estudiantes se van a encontrar en algún momento. Tu rol como docente es ayudarlos a no ser un nodo más de retransmisión de datos falsos, y a usar la IA con criterio en sus propios trabajos." | "La era de la IA generativa trae capacidades asombrosas, pero democratiza la desinformación ultrarrealista (Deepfakes, textos sintéticos). Tu deber es no ser un nodo de retransmisión de datos falsos." |
| Título checklist | "Checklist Anti-Bulos (para trabajar en clase)" | "Checklist Anti-Bulos" |

**Elemento interactivo #1 — Checklist de verificación (checkboxes NO persistentes, puramente visuales, sin estado en React):**
1. ¿La fuente tiene credibilidad verificada?
2. ¿Hay varias fuentes que corroboren?
3. ¿El titular es sensacionalista o alarmista?
4. ¿Puedo identificar al autor o institución?
5. ¿Tiene fecha clara y actualizada?

> Nota técnica: estos 5 ítems están hardcodeados directamente en el JSX del componente (no en `lib/ciudadania-digital-content.ts`), y los `<input type="checkbox">` no tienen `checked`/`onChange` — no guardan estado ni progreso (a diferencia del checklist de la sección 08, que sí persiste). Además son un checklist **distinto** del framework VERIFICA de al lado — dos listas de verificación independientes en la misma sección, con riesgo de confundir al usuario.

**Elemento interactivo #2 — Framework "VERIFICA"** (acróstico, 8 pasos con letra/color fijos, descripción por audiencia):

| Letra | Título (fijo) | Color | Descripción — Docentes | Descripción — Familias |
|---|---|---|---|---|
| V | Verificación de Fuente | `#0E7490` | "Enseñales a buscar el medio original y a chequear su reputación en sitios de fact-checking antes de creer o compartir." | "Busca el medio original, verifica su reputación en fact-checkers." |
| E | Evidencia Múltiple | `#6D28D9` | "Si solo una o dos fuentes lo reportan, puede ser propaganda o un rumor sin chequear. Pediles que busquen una segunda fuente antes de dar algo por cierto." | "Si solo 1-2 fuentes lo reportan, puede ser propaganda." |
| R | Revista tu Sesgo | `#047857` | "Trabajá con ellos la pregunta: ¿lo creo porque es cierto, o porque quiero que sea cierto? Es un buen disparador de debate en el aula." | "Pregúntate: ¿Creo esto porque es cierto o porque deseo que sea cierto?" |
| I | Identifica Cambios | `#B45309` | "Deepfakes, ediciones de video, imágenes generadas por IA. Mostrales herramientas simples para detectar señales de manipulación." | "Deepfakes, ediciones de vídeo. Revisa metadatos si es posible." |
| F | Fecha y Contexto | `#B91C1C` | "Noticias viejas que circulan como si fueran actuales. Ayudalos a chequear siempre la fecha y el contexto original." | "Noticias viejas recicladas. Entiende el contexto temporal." |
| I | Intuición Crítica | `#BE185D` | "Si algo parece demasiado extremo o raro, probablemente lo sea. Enseñales a desconfiar del 'así fue siempre' o del 'todo el mundo lo dice'." | "Si algo parece raro, probablemente lo sea. Desconfía del 'sentido común'." |
| C | Contraste Perspectivas | `#0369A1` | "Proponeles leer sobre un mismo tema en dos medios con líneas editoriales distintas, para que vean cómo cambia el enfoque." | "Lee análisis de fuentes con diferentes sesgos políticos." |
| A | Actúa Responsablemente | `#0F766E` | "Antes de reenviar algo al grupo del curso o a sus redes, ya verificaron. Ayudalos a entender que también son un 'gate-keeper (guardián/a de la información)' confiable para quienes los rodean." | "Antes de compartir, ya verificaste. Sé un 'gate-keeper' confiable." |

> Nota: el acróstico "VERIFICA" tiene 8 letras pero la palabra "VERIFICA" tiene 8 letras (V-E-R-I-F-I-C-A) — hay 2 íes (Identifica Cambios / Intuición Crítica), correcto y consistente con la palabra.

CTA final: botón "↓ Ver Ventajas" hace scroll a `#ventajas`.

---

## 05 — Ventajas (`ventajas-section.tsx`)

Título: "Lo Positivo de la Vida Digital". Subtítulo: "Oportunidades reales, no solo riesgos a evitar." Sin variante de audiencia. Grid de 4 tarjetas con emoji:

| Emoji | Ventaja |
|---|---|
| 🌐 | Acceso a la información |
| 💬 | Comunicación global |
| 🧩 | Desarrollo de habilidades digitales |
| 🎨 | Creatividad |

Fuente: Dr. José Farhat, "Oportunidades".

---

## 06 — Problemas / Riesgos (`riesgos-section.tsx`)

Sin variante de audiencia. Título: "Riesgos Asociados".

**Riesgos directos** (chips rojos): Ciberacoso, Grooming, Sextorsión, Sobreexposición, Adicciones tecnológicas. Fuente: Dr. José Farhat.

**Riesgos ampliados** (chips naranjas): Ciberbullying, Sexting, Grooming, Impacto anímico, Fake news, Retos virales, Adicción a las tecnologías / uso excesivo. Fuente: Dr. José Farhat, Primer Conversatorio Provincial (UTN).

> Nota de contenido: "Grooming" y una variante de "sexting/sextorsión" aparecen en ambas listas (directos y ampliados) con nombres ligeramente distintos ("Sextorsión" vs. "Sexting") — probable solapamiento a revisar en el rediseño.

**Sobreestimación de habilidades digitales:**
> "Las personas tienden a sobrestimar sus capacidades digitales, con brechas de competencias importantes en todos los países analizados. Incluso los jóvenes, a quienes suele considerarse 'nativos digitales', muestran brechas tan amplias como el resto de la sociedad."
> — ICDL Foundation, "Percepción y Realidad: midiendo la brecha digital en Europa, India y Singapur" (2019) — estudio en Austria, Dinamarca, Finlandia, Alemania, Suiza, India y Singapur.

**Señales de alerta de fraude digital** (fuente: Dr. José Farhat):
- Ofertas demasiado buenas para ser verdad
- Solicitudes urgentes de dinero
- Mensajes con errores gramaticales

Con nota-link: "Desarrollo completo en la temática Estafas Digitales" → `/estafas-digitales`.

**Ciberseguridad centrada en las personas:**
> "Ciberseguridad centrada en las personas: el resguardo de personas, sociedades, organizaciones y países frente a ciberriesgos."
> — ISO/IEC TS 27100:2020, "Information technology — Cybersecurity — Overview and concepts". **Marcada `unverified: true`**: "El estándar define ciberseguridad en general; la frase exacta 'centrada en las personas' no está confirmada en la versión pública del documento."

**Dato de contexto argentino (bloque destacado):**
> "93,4% de acceso a internet y 61,0% de acceso a computadora en hogares urbanos (4to trimestre de 2023)."
> — INDEC, Encuesta Permanente de Hogares — Informes técnicos Vol. 8, N.º 111 (con link al PDF oficial).

---

## 07 — Para el Aula / Para tu Casa (`aula-section.tsx`)

Badge de sección usa el título traducido por audiencia ("Para el Aula" / "Para tu Casa"), título fijo del `<h2>`: "Qué Significa Esto para el Aula" (este `<h2>` **no** varía por audiencia pese a que el badge sí — inconsistencia menor: el heading dice siempre "el Aula" aunque la audiencia sea "familias").

Sección de síntesis propia, sin citas — es contenido reflexivo del propio José Farhat conectando lo anterior.

| | Docentes | Familias |
|---|---|---|
| Intro | "De las 12 dimensiones, un docente no necesita trabajar las 12 con la misma profundidad. Alfabetización digital, seguridad digital, etiqueta digital y salud/bienestar digital son las que más directamente entran en el día a día del aula — no casualmente, son las que ya cubren las 3 fases actuales del Kit. Comercio digital, leyes digitales y Gov Tech son más relevantes para una materia de formación ciudadana o economía que para el acompañamiento cotidiano, pero vale la pena nombrarlas." | "De las 12 dimensiones, no hace falta que trabajes las 12 con la misma profundidad en casa. Alfabetización digital, seguridad digital, etiqueta digital y salud/bienestar digital son las que más directamente entran en el día a día de acompañar a tus hijos — no casualmente, son las que ya cubren las 3 fases actuales del Kit. Comercio digital, leyes digitales y Gov Tech son más relevantes para lo que van a ver en la escuela que para el acompañamiento cotidiano en casa, pero vale la pena que sepas que existen." |
| Cierre | "El dato de ICDL Foundation es un buen punto de partida para una primera clase: nadie parte de cero, pero tampoco nadie sabe tanto como cree — buen argumento contra el supuesto de 'son nativos digitales, ya saben usar la tecnología' que muchos adultos dan por sentado. Las 8 'actitudes de un buen ciudadano digital' funcionan directamente como rúbrica de aula. Y el modelo de competencias del siglo XXI (Maneras de pensar/trabajar/vivir el mundo) conecta la ciudadanía digital con objetivos pedagógicos más amplios que un docente ya persigue de todos modos." | "El dato de ICDL Foundation es un buen punto de partida para una charla en casa: nadie parte de cero, pero tampoco nadie sabe tanto como cree — buen argumento contra el supuesto de 'son nativos digitales, ya saben usar la tecnología' que muchos padres dan por sentado. Las 8 'actitudes de un buen ciudadano digital' funcionan directamente como una lista de acuerdos familiares. Y el modelo de competencias del siglo XXI conecta la ciudadanía digital con las mismas habilidades que ya querés para el futuro de tus hijos, más allá de la tecnología." |

Esta sección referencia contenido de secciones anteriores (dato ICDL de la sección 06, actitudes de la sección 02, perfil de competencias de la sección 03) a modo de síntesis — no introduce datos nuevos.

---

## 08 — Centro de Recursos (`herramientas-section.tsx`)

La sección más densa de la temática: carrusel + checklist con progreso + gráfico + FAQ + footer con links + listado completo de fuentes.

| Campo | Docentes | Familias |
|---|---|---|
| Título sección | "Centro de Recursos Docente" | "Centro de Control" |
| Subtítulo | "Herramientas, autoevaluación y respuestas frecuentes para llevar al aula." | "Métricas, auditoría y base de conocimientos." |
| Mensaje progreso bajo (<40%) | "⚠️ Conviene reforzar antes de llevarlo al aula" | "⚠️ Necesitas reforzar urgente" |
| Mensaje progreso medio (40-79%) | "✓ Buen progreso. Vas bien encaminado/a" | "✓ Buen progreso. Mantén el ritmo" |
| Mensaje progreso alto (≥80%) | "✨ ¡Excelente! Estás listo/a para guiar a tu curso con el ejemplo" | "✨ ¡Excelente! Eres un ciudadano digital responsable" |
| Título de cierre | "Kit Docente Completado" | "Protocolo Completado" |
| Texto de cierre | "Completaste el kit básico. Ahora tenés las herramientas para acompañar a tus estudiantes en su vida digital con criterio propio. Mantené tus prácticas actualizadas y seguí promoviendo la convivencia cívica dentro y fuera del aula." | "Has completado el protocolo básico. Eres un nodo seguro en la red. Mantén tus defensas actualizadas y promueve la convivencia cívica en tus comunidades digitales." |

**Elemento interactivo #1 — Carrusel de recursos** (trasladado desde el Hero original, según comentario en el código). 5 láminas SVG: `/weekly-content/2026-W19/carrusel/1.svg` a `5.svg`. Navegación con flechas prev/next, dots indicadores, animación de slide con Framer Motion (`AnimatePresence`, dirección según sentido de navegación). Header usa `HERO_CARRUSEL_HEADER` (label/título por audiencia, documentado en la sección Hero arriba).

**Elemento interactivo #2 — "Mi Progreso" (checklist persistente + barra de progreso).** Este es el checklist real con estado (a diferencia del de la Fase 03), persistido vía `useTematicaProgress`/`checklistProgress`. 8 ítems:

| id | Docentes | Familias |
|---|---|---|
| `password` | "Cambié mis 3 contraseñas principales y le mostré el proceso a mi curso" | "Cambié mis 3 contraseñas principales" |
| `2fa` | "Activé 2FA en mi correo institucional, redes sociales y banco" | "Activé 2FA en Gmail, redes sociales, banco" |
| `permissions` | "Revisé los permisos de apps en mi celular junto con mis estudiantes" | "Revisé permisos de apps en móvil" |
| `privacy` | "Ajusté la privacidad de mis redes sociales, separando mi perfil docente del personal" | "Ajusté privacidad en redes sociales a 'amigos'" |
| `cookies` | "Rechacé cookies no esenciales en mis últimas navegaciones" | "Rechazé cookies no esenciales (últimas 3 visitas)" |
| `google-search` | "Busqué mi nombre en Google en modo incógnito" | "Busqué mi nombre en Google Incógnito" |
| `comments` | "Trabajé con mi curso un ejemplo de comentario constructivo esta semana" | "Escribí un comentario constructivo esta semana" |
| `fake-news` | "Apliqué el framework VERIFICA en clase para analizar una noticia con mis estudiantes" | "Detecté una noticia falsa usando el framework VERIFICA" |

> Nota de typo: variante familias del ítem `cookies` dice "Rechazé" con Z (debería ser "Rechacé" con C, como en la variante docentes).

Barra de progreso con gradiente de color según % (rojo <40%, ámbar 40-79%, verde ≥80%), calculado como `checkedItems.size / 8`.

**Elemento interactivo #3 — `ErrorsChart` (Chart.js, gráfico de dona, sin datos reales):**
- Dato hardcodeado, **no atribuido a ninguna fuente**: "Cookies / Términos" = 30%, "Huella Residual" = 45%, "Engagement Tóxico" = 25%. Como el `SecurityChart` de la Fase 01, son números ilustrativos de demo sin cita — mismo riesgo de lectura como estadística real.
- Copy de acompañamiento (fijo): "Los principales riesgos que suelen aparecer en el ecosistema digital de un aula. Usalo como disparador para priorizar en qué enfocarte primero con tu curso." (este texto menciona "un aula"/"tu curso" incluso en la variante familias, ya que no está en `RECURSOS_TEXTO` ni pasa por `resolveTexto` — está hardcodeado en el JSX).

**Elemento interactivo #4 — FAQ acordeón** (3 preguntas, expand/collapse individual):

| id | Pregunta — Docentes | Respuesta — Docentes | Pregunta — Familias | Respuesta — Familias |
|---|---|---|---|---|
| `faq-1` | "¿La privacidad de mis estudiantes está realmente en riesgo?" | "Sí. Cada click, búsqueda y 'me gusta' que hacen tus estudiantes es capturado y puede venderse a terceros. Grandes corporaciones construyen perfiles de comportamiento sobre cada chico y chica. La privacidad es un derecho, y enseñar a defenderla es parte de la formación ciudadana que le toca a la escuela." | "¿Mi privacidad está realmente en riesgo?" | "Sí. Cada click, búsqueda y 'like' es capturado y vendido a terceros. Grandes corporaciones construyen perfiles de comportamiento tuyo. La privacidad es un derecho; defenderla es un acto cívico." |
| `faq-2` | "¿Se puede rastrear a alguien incluso en 'Modo Incógnito'?" | "Técnicamente sí. El ISP (proveedor de internet) sigue viendo la actividad, y los sitios web pueden rastrear por IP, cookies persistentes o técnicas de fingerprinting (identificación del dispositivo por sus características técnicas). Es útil que tus estudiantes entiendan que el modo incógnito es una capa más de privacidad, no una capa invulnerable." | "¿Pueden rastrearme incluso en 'Modo Incógnito'?" | "Técnicamente, tu ISP (proveedor de internet) sigue viendo lo que haces. Sitios web pueden rastrearte por IP, cookies persistentes, o técnicas avanzadas de fingerprinting. Es una capa más de privacidad, no es invulnerable." |
| `faq-3` | "¿Cómo les enseño a mis estudiantes a saber si una noticia es real?" | "Insistí en que nunca confíen en un solo medio. El framework VERIFICA que trabajamos en la Fase 03 les da un método concreto: verificar la fuente, buscar evidencia múltiple, revisar el propio sesgo, identificar cambios o ediciones, verificar fecha y contexto, aplicar intuición crítica, contrastar perspectivas y actuar con responsabilidad antes de compartir." | "¿Cómo sé si una noticia es real?" | "Nunca confíes en un solo medio. Usa el framework VERIFICA: verifica la fuente, busca evidencia múltiple, revisa tu sesgo, identifica cambios, verifica fecha y contexto, aplica intuición crítica, contrasta perspectivas y actúa responsablemente." |

**Footer / Salida — "Directorios Oficiales"** (links externos fijos, no varían por audiencia):
- Gov.ar - Recursos Oficiales → `https://www.argentina.gob.ar`
- INCIBE - Seguridad Online → `https://www.incibe.es`
- Snopes - Fact-Checking Global → `https://www.snopes.com`

**Listado completo de fuentes citadas** (`FUENTES_COMPLETAS`, 12 entradas, numeradas, mostradas al final de la página):

| # | Fuente | URL | Nota |
|---|---|---|---|
| 1 | Dr. José Farhat — Primer Conversatorio Provincial (UTN), presentación "Exposición Digital" | — | material propio |
| 2 | Dr. José Farhat — "Un cambio de chip necesario" | — | material propio |
| 3 | Mike Ribble / ISTE | https://iste.org/blog/essential-elements-of-digital-citizenship | — |
| 4 | Griffin, McGaw & Care (eds.) — Assessment and Teaching of 21st Century Skills (ATC21S) | https://link.springer.com/book/10.1007/978-94-017-9395-7 | — |
| 5 | Marc Prensky — "Digital Natives, Digital Immigrants" (2001) | https://doi.org/10.1108/10748120110424816 | — |
| 6 | Wikipedia — Cultura digital | https://es.wikipedia.org/wiki/Cultura_digital | — |
| 7 | Wikipedia — Democracia digital | https://es.wikipedia.org/wiki/Democracia_digital | — |
| 8 | World Bank — GovTech | https://www.worldbank.org/en/programs/govtech | — |
| 9 | NIST Special Publication 800-207 — Zero Trust Architecture | https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf | — |
| 10 | ICDL Foundation (2019) | https://icdl.org/percepcion-y-realidad-midiendo-las-habilidades-digitales/ | — |
| 11 | ISO/IEC TS 27100:2020 | https://www.iso.org/standard/72434.html | frase exacta "centrada en las personas" sin verificar en versión pública |
| 12 | INDEC — Encuesta Permanente de Hogares, Q4 2023 | https://www.indec.gob.ar/uploads/informesdeprensa/mautic_05_24F87CFE2258.pdf | — |

> Nota: este listado de 12 fuentes es el "índice" formal, pero NO incluye el Barco de Teseo (Plutarco, sección 01) ni la cita de Ciberseguridad centrada en las personas (ISO/IEC TS 27100, sección 06) — espera, la ISO sí está (#11); falta explícitamente **Plutarco/Barco de Teseo** como entrada propia en este listado pese a citarse inline en la sección 01.

---

## Índice de navegación (TOC) — `toc-nav.tsx`

9 anclas registradas (`TOC_SECTIONS`), sticky en desktop (con `IntersectionObserver` de scroll-spy) y barra horizontal en mobile:

| # | id | Label completo | Label corto |
|---|---|---|---|
| 00 | `hero` | Inicio | Inicio |
| 01 | `historia` | Historia / Origen | Historia |
| 02 | `caracteristicas` | Características | Rasgos |
| 03 | `tipos-variantes` | Tipos o Variantes | Tipos |
| 04 | `ejemplos-concretos` | Ejemplos Concretos | Ejemplos |
| 05 | `ventajas` | Ventajas | Ventajas |
| 06 | `riesgos` | Problemas / Riesgos | Riesgos |
| 07 | `aula` | Para el Aula | Aula |
| 08 | `recursos` | Centro de Recursos | Recursos |

Nota: el TOC agrupa las 3 fases bajo un único ítem "04 — Ejemplos Concretos" (`id="ejemplos-concretos"`), aunque en el contenido visual cada fase tiene su propio badge "Fase 01/02/03" y ancla propia (`seguridad`, `netiqueta`, `ia-bulos`) usada por los botones de scroll interno.

---

## Todas las fuentes citadas (`source-cite.tsx`), consolidado

`SourceCite` renderiza: 📎 autor — nota (si existe) [ícono de link externo si `url`]. Si `unverified: true`, agrega badge "sin verificar" y itáliza el nombre del autor.

**Fuentes marcadas `unverified: true` (2):**
1. Tradición filosófica clásica (Plutarco) — Barco de Teseo (sección 01)
2. ISO/IEC TS 27100:2020 — frase "centrada en las personas" (sección 06)

**Todas las demás fuentes citadas inline a lo largo de la página** (ver detalle por sección arriba): Dr. José Farhat (múltiples citas y notas — "Un cambio de chip necesario", Primer Conversatorio Provincial UTN, "Oportunidades", sin nota adicional), Marc Prensky, Mike Ribble/ISTE (x9, una por dimensión), Wikipedia (Cultura digital, Democracia digital), World Bank (GovTech), Griffin/McGaw/Care (ATC21S), NIST (Zero Trust), ICDL Foundation, ISO/IEC TS 27100, INDEC.

---

## Resumen de hallazgos para el rediseño

1. **Datos de gráficos ficticios sin aclarar:** `SecurityChart` (65/35) y `ErrorsChart` (30/45/25) son números de demo hardcodeados sin fuente ni disclaimer — riesgo de leerse como estadísticas reales citables, a diferencia del resto de la página que cita todo.
2. **Dos checklists distintos en la misma vista:** el de la Fase 03 (5 ítems, sin persistencia, hardcodeado en JSX) vs. el de la sección 08 "Mi Progreso" (8 ítems, con persistencia real). Riesgo de confusión de UX.
3. **Fallback binario real:** aunque `Audiencia` admite 5 valores (`docentes`, `familias`, `adultos-mayores`, `ninas-ninos-adolescentes`, `mujeres`), esta temática solo define 2 variantes y cae a `docentes` para cualquier otra selección — no hay contenido dedicado a `familias`+`docentes` combinado con otras audiencias.
4. **Typo:** "Rechazé" (debería ser "Rechacé") en el ítem `cookies` del checklist, variante familias.
5. **Heading no traducido:** en la sección 07, el `<h2>` "Qué Significa Esto para el Aula" queda igual en la variante familias aunque el badge de arriba sí dice "Para tu Casa".
6. **Texto de acompañamiento del `ErrorsChart`** menciona "un aula"/"tu curso" en ambas audiencias (no pasa por `resolveTexto`).
7. **Solapamiento de contenido:** "Grooming" aparece en Riesgos directos y Riesgos ampliados; "Sextorsión"/"Sexting" son casi lo mismo en listas distintas.
8. **Atribuciones no originales, ya señaladas en el propio código:** las 12 "Dimensiones" (9 de Ribble/ISTE) y las "Competencias del s. XXI" (ATC21S) no fueron citadas como tales en el material original de los conversatorios — el equipo ya agregó notas de atribución visibles, útil mantenerlas en cualquier rediseño.
9. **Listado de fuentes (sección 08) no incluye Plutarco/Barco de Teseo** como entrada propia pese a citarse en la sección 01 — inconsistencia entre el listado "oficial" de 12 fuentes y las citas inline reales de la página.
10. **TOC vs. anclas internas:** el TOC trata las 3 fases como una sola entrada ("Ejemplos Concretos"), pero cada fase tiene su propia ancla de scroll (`seguridad`, `netiqueta`, `ia-bulos`) usada por los botones internos — al rediseñar, decidir si conviene exponer las 3 fases como ítems propios del TOC.
