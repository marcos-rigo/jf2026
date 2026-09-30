# Auditoría de contenido — Recuperar la Agencia

Base para rediseño. Recorrido completo de la entrada `recuperar-la-agencia` en `lib/libres-bajo-influencia-data.ts` (líneas 489-552 de 629 totales) y `components/tematicas/RecuperarLaAgenciaPage.tsx` (1674 líneas). Solo lectura, nada modificado.

Ruta: `/tematicas/recuperar-la-agencia`. Layout: scroll continuo de **15 bloques**: Hero + ticker de 3 estadísticas, Introducción, Módulo 01 "Cimientos Filosóficos y Psicológicos" (4 tarjetas acordeón), Módulo 02 "Agencia vs. Autonomía & SDT" (comparación + 3 necesidades + caso de Sofía), 3 secciones de contenido base, Módulo 03 "Arquitectura de la Elección" (nudges vs. patrones oscuros), Simulador "Pausar, Preguntar, Elegir", Módulo 04 "Patologías de la Autonomía" (control coercitivo), Mini-Test de Índice de Agencia Personal, Toolkit de Decisión + WRAP, Módulo 05 "Ciudadanía Digital Integral" (con el Poliedro UNESCO de 7 caras), Cita de cierre (triple), Material de estudio, Fuentes académicas (con botón de copiar cita), Evaluación/Quiz oficial.

Progreso vía `useTematicaProgress` con `computeQuizProgress` compartido. **No hay `TematicaCompletarButton`** — mismo patrón del grupo.

**`lib/libres-bajo-influencia-data.ts` tiene solo 3 secciones para esta entrada** (`data.sections`) — la más corta de las 5 temáticas del grupo auditadas en cuanto a datos base (`subculturas-digitales`: 8; `algoritmos-perfilado`/`diseno-persuasivo-patrones-oscuros`: 4; `caldos-de-cultivo`: 6). Sin embargo, el componente compensa con **la mayor cantidad de módulos adicionales hardcodeados** de las 5 temáticas (5 módulos numerados + Toolkit + WRAP + Poliedro, todos fuera de `data.sections`).

**Patrón de audiencia: bespoke binario**, mismo mecanismo del grupo. **Sin `introFamilias`** (como `caldos-de-cultivo`) — `data.intro` se usa directo, sin ternario. De las 3 secciones, **solo las 2 primeras tienen `paragraphsFamilias`**; la tercera ("Acompañar no es vigilar") no tiene variante. Ninguna sección tiene `headingFamilias` ni `quoteFamilias`.

**Respuesta a cómo se resuelve "ninas-ninos-adolescentes":** el componente **nunca menciona ni comprueba esta audiencia** — no hay ninguna ocurrencia de `'ninas-ninos-adolescentes'` en todo el archivo. El único chequeo condicional en toda la temática es `audienciaActual === 'familias'` (línea 1193, dentro del `.map` de `data.sections`); cualquier valor que no sea exactamente `'familias'` —incluido `'ninas-ninos-adolescentes'`, `'docentes'`, `'mujeres'`, `'adultos-mayores'` o ausencia de selección— cae al contenido por defecto (el que en el dato está escrito en segunda persona genérica, sin voz docente explícita a diferencia de otras temáticas del grupo). Es decir: **"ninas-ninos-adolescentes" recibe exactamente el mismo contenido que "docentes" o que no tener audiencia seleccionada** — no hay ninguna adaptación de lenguaje, vocabulario ni complejidad pensada específicamente para un lector niño, niña o adolescente, pese a ser una de las 3 audiencias asignadas a esta temática en `lib/tematicas-data.ts`. Es el mismo patrón de "audiencia sin contenido propio" ya detectado para "mujeres" en `violencia-digital`.

**No usa `SourceCite`** — mecanismo propio distinto al resto del grupo: `SourceCard`, con formato "ficha ampliada" (tipo de fuente, título, autor, resumen, concepto clave, link) **y un botón "Copiar cita"** que copia al portapapeles `"{título} - {autor} [Enlace: {url}]"` — funcionalidad exclusiva de esta temática, no presente en `subculturas-digitales`, `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros` ni `caldos-de-cultivo`. `data.authors` (4 nombres) se renderiza en el Hero.

---

## Datos generales de la entrada (`lib/libres-bajo-influencia-data.ts`)

- **Slug:** `recuperar-la-agencia`
- **Categoría:** "Autonomía"
- **Color de marca:** `#059669` (esmeralda)
- **Descripción:** "Reconocer todo lo anterior no significa negar nuestra capacidad de actuar: significa fortalecerla. Herramientas concretas para decidir con más conciencia, en casa y en la escuela."
- **`authors` (4 nombres, renderizados en el Hero):** Albert Bandura, Mike Caulfield, Sonia Livingstone, UNESCO.
- **`audiencias`:** `['docentes', 'familias', 'ninas-ninos-adolescentes']` — **única de las 5 temáticas del grupo auditadas con 3 audiencias asignadas** (las demás tienen solo `docentes`/`familias`).
- **Material adjunto:** `pdfUrl` (`/img/tematicas/recuperar-la-agencia/presentacion.pdf`), `infografiaUrl` (`/img/tematicas/recuperar-la-agencia/infografia.webp`).
- **`intro`:** sin variante de audiencia.

---

## Hero

Badges: "// Autonomía" (categoría) + "Pluralismo teórico & evidencia estadística". H1: "Recuperar la agencia". Bajada (`data.description`, fija): "Reconocer todo lo anterior no significa negar nuestra capacidad de actuar: significa fortalecerla. Herramientas concretas para decidir con más conciencia, en casa y en la escuela."

**Chips de autores citados:** Albert Bandura · Mike Caulfield · Sonia Livingstone · UNESCO.

**2 CTAs:** "🧭 Probar el simulador de agencia" (scroll a `#simulador`), "Hacer el mini-test" (scroll a `#diagnostico`).

**Imagen del Hero** con badge de cita: "José Néstor Farhat · Libres Bajo Influencia" → `https://josefarhat.com`, label visual "Brújula de la agencia".

### Ticker de estadísticas del Hero (`HERO_STATS`, 3 tarjetas)

| Etiqueta | Valor | Detalle |
|---|---|---|
| Autonomía corporal limitada | 55% | "De las mujeres en países en desarrollo no goza de autonomía plena sobre su propia salud y cuerpo (UNFPA)." |
| Patrones oscuros en apps | 97% | "De las plataformas populares implementa al menos un patrón oscuro (temporizadores falsos, scroll infinito, confirmshaming)." |
| Alcanza el Estadio 6 (Kohlberg) | 5% | "Solo una minoría de los adultos estabiliza el razonamiento moral postconvencional — principios éticos universales." |

> Nota: el 55% de UNFPA sobre autonomía corporal de mujeres en países en desarrollo es un dato temáticamente distante del resto de la página (que trata sobre agencia digital) — se cita también en `SOURCES` (ver más abajo) pero es el único de los 3 datos del ticker cuyo tema no se retoma en ninguna sección posterior de la página.

---

## Introducción — "La agencia como construcción" (`id="contenido"`)

`data.intro` (fijo, sin variante de audiencia):
> "Reconocer cómo funciona el entorno digital no significa negar nuestra capacidad de actuar: al revés, la fortalece. Albert Bandura define la agencia como la capacidad de actuar con intención, de anticipar consecuencias, de autorregularnos y de reflexionar sobre lo que hacemos. Recuperar la agencia no es controlar todo — eso no existe, siempre estuvimos bajo alguna influencia, incluso antes de internet. Es algo más humilde y más poderoso: reconocer las condiciones en las que elegimos, imaginar que hay alternativas, y decidir con un poco más de conciencia."

**Bloque adicional (fijo, hardcodeado en el componente, no en `data`):**
> "La autonomía no es un constructo teórico de manual: es el eje estratégico de la responsabilidad individual y la piedra angular de la dignidad humana. Sin esta facultad, el ser humano queda reducido a una entidad biológica reactiva, despojada de su capacidad para dotar de sentido moral a su existencia."

---

## Módulo 01 · Cimientos Filosóficos y Psicológicos de la Autonomía (`id="fundamentos"`)

Sin variante de audiencia. Copy: "Kant, Piaget, Kohlberg, Bourdieu y Giddens: cómo se construye —y se limita— la capacidad de autogobierno."

**Elemento interactivo — 4 tarjetas acordeón (`FOUNDATION_CARDS`, la primera abierta por defecto):**

**"Kant y la autolegislación"** (Filosofía moral):
> "Para Immanuel Kant, la autonomía es la voluntad que se da a sí misma su propia ley. Distingue el imperativo categórico —un mandato válido por sí mismo, basado en el respeto a la ley moral— del imperativo hipotético, condicionado a un fin externo o deseo (actuar bien solo para evitar una sanción). La autonomía es la base de la dignidad humana; sin ella, el valor de una persona no superaría al de una planta o un insecto."

**"Piaget y la maduración moral"** (Psicología del desarrollo):
> "Jean Piaget identificó el tránsito del razonamiento heterónomo —reglas absolutas, invariables, emanadas de una autoridad externa que se obedece por temor al castigo— hacia el razonamiento autónomo, donde las normas son fruto del acuerdo mutuo, la reciprocidad y la aceptación consciente de su sentido."

**"Kohlberg y los seis estadios"** (Estadios del desarrollo):
> "Lawrence Kohlberg propuso seis estadios en tres niveles: Preconvencional (obediencia al castigo; intercambio instrumental), Convencional (conformidad grupal; sistema social y deber) y Postconvencional (contrato social y derechos individuales; principios éticos universales)."
> Nota al pie: "Solo un 5% de los adultos alcanza de forma estable el Estadio 6 — la mayoría queda expuesta a arquitecturas que apelan a estadios más básicos y gregarios." *(mismo 5% del ticker del Hero)*

**"Bourdieu vs. Giddens"** (Sociología estructural):
> "Pierre Bourdieu argumenta que el habitus —esquemas interiorizados por la trayectoria social— limita la agencia. Anthony Giddens responde con la teoría de la estructuración: las estructuras sociales son a la vez el medio y el resultado de la conducta reflexiva humana, no una jaula fija."
> Link: "Ver análisis de Juan Barri (2024, SciELO)" → `https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-64422024000100115`

---

## Módulo 02 · Agencia vs. Autonomía & el Marco de la Autodeterminación

Sin variante de audiencia. Copy: "Actuar (agencia) no es lo mismo que gobernarse reflexivamente (autonomía). Deci y Ryan explican qué necesitamos para lo segundo."

### Comparación "Agencia vs. Autonomía" (`AGENCY_VS_AUTONOMY`)

**LA AGENCIA** (Capacidad ontológica de actuar):
> "Es la capacidad general de ser un agente: iniciar acciones intencionadas en el mundo físico o digital. Un individuo tiene agencia incluso si sus actos están fuertemente condicionados por hábitos o manipulación externa."
- Definición simple: "'Capacidad de hacer cosas.'"
- Giddens & Bourdieu: "Acción inserta en estructuras o habitus."
- Riesgo: "Puede ejercerse sin autogobierno, reaccionando al entorno."

**LA AUTONOMÍA** (Autogobierno y razón práctica):
> "Del griego autos (mismo) y nomos (ley): la capacidad de ser 'ley para uno mismo', actuar según razones, principios éticos y motivaciones autorreflexivas auténticas, no por coerción o inercia."
- Definición kantiana: "'Actuar según razones que uno mismo suscribe.'"
- Ryan & Deci (SDT): "Motivación intrínseca y regulación integrada."
- Requisito: "Ausencia de manipulación deliberada o engaño."

### Las 3 necesidades SDT (`SDT_NEEDS`)

| Necesidad | Descripción |
|---|---|
| Autonomía | "Sentirse autor de las propias acciones." |
| Competencia | "Sentirse eficaz ante los retos." |
| Pertenencia | "Sentirse conectado y valorado por otros." |

### "El caso de Sofía" (recurrencia del personaje ya visto en `subculturas-digitales`)

> "Una adolescente busca un tutorial de dibujo en una plataforma digital. No solo busca aprender una técnica (competencia): busca un lugar donde su talento sea reconocido por una comunidad. Cuando recibe un comentario que valida su esfuerzo, su necesidad de pertenencia queda satisfecha — pero simultáneamente la plataforma 'aprende' sobre ella: sus tiempos de permanencia, sus estilos preferidos y sus momentos de vulnerabilidad."

**Evaluación crítica (fija):**
> "En el entorno educativo, la privación de autonomía —un aprendizaje puramente heterónomo— deriva inevitablemente en desinterés. Si la escuela no provee espacios para la competencia y la agencia, el individuo buscará saciar estas necesidades en ecosistemas tecnológicos cuya arquitectura está diseñada para convertir esa búsqueda de identidad en un flujo constante de datos transaccionales."

> Nota: "El caso de Sofía" aquí es una reformulación abreviada del mismo caso narrado con más detalle en `subculturas-digitales` (sección "Un caso para pensar") — reutilización de personaje/escenario entre 2 temáticas del grupo, sin indicarlo explícitamente al lector.

---

## Las 3 secciones de contenido base (`data.sections`, "Tres movimientos para recuperar la agencia")

### Sección 01 — "Pausar, preguntar, elegir" (CON variante — `paragraphsFamilias`)

> "¿Cómo se entrena esa capacidad, justo en el momento del impulso, que es el momento difícil? Con una secuencia de tres verbos: pausar, preguntar, elegir. Pausar crea una distancia mínima entre el estímulo y la respuesta. Preguntar convierte una reacción automática en una evaluación. Y elegir devuelve el protagonismo. Dejar el teléfono treinta segundos antes de responder algo que da bronca parece una nimiedad, pero cambia por completo la situación." *(idéntico en ambas variantes)*

| Docentes (y toda audiencia sin selección, incluida "ninas-ninos-adolescentes") | Familias |
|---|---|
| "Cinco preguntas simples pueden acompañar esa pausa, para adultos y para chicos: ¿por qué me aparece esto justo a mí? ¿Qué quiere que yo haga? ¿Qué emoción me está tocando? ¿Qué dato estoy entregando? ¿Qué otra opción tengo? Convertir estas cinco preguntas en un cartel o una rutina fija **antes de usar el celular en clase** es una forma simple de instalar la pausa como hábito, no como excepción." | "...Convertir estas cinco preguntas en un cartel o una rutina fija **en casa** antes de usar el celular es una forma simple de instalar la pausa como hábito, no como excepción." |

Cita de cierre: "La agencia no es controlar todo: es poder decidir mejor."

### Sección 02 — "Leer hacia los costados" (CON variante — `paragraphsFamilias`)

Párrafo 1 idéntico en ambas: "Para lo que leemos, Mike Caulfield propone algo muy práctico llamado lectura lateral: en vez de quedarse dentro de una página tratando de decidir si es confiable mirándola por dentro, salir de ella — abrir otra pestaña, buscar quién publica eso, contrastar, rastrear hasta la fuente original. Los verificadores profesionales no leen hacia abajo: leen hacia los costados. Preguntar, en este sentido, no es desconfiar de todo ni volverse cínico: es aprender a confiar con razones."

| Docentes | Familias |
|---|---|
| "Algunas prácticas concretas ayudan a sostener esto en el tiempo: revisar los permisos que dimos, ordenar las notificaciones, crear pausas reales, diversificar las fuentes, conversar antes de reaccionar. Trabajar la lectura lateral con una noticia real que haya circulado esa semana **en el curso** convierte la técnica en algo tangible, en vez de una instrucción abstracta." | "...Trabajar la lectura lateral con una noticia real que haya circulado esa semana **en la familia** convierte la técnica en algo tangible, en vez de una instrucción abstracta." |

Cita de cierre: "Preguntar también es una forma de cuidado. Y es ciudadanía digital."

### Sección 03 — "Acompañar no es vigilar" (sin variante de audiencia)

> "Sonia Livingstone estudió en profundidad la mediación de los adultos y muestra el enorme valor de la conversación activa. La vigilancia puede detectar algo puntual, un problema de hoy. El acompañamiento construye criterio, que sirve para toda la vida. Va a haber situaciones que exijan bloquear o restringir, y está bien — pero si todo se reduce a control, la autonomía nunca llega a desarrollarse. Un chico vigilado hasta los diecisiete no aprende a decidir: aprende a esconderse."
>
> "La escuela puede tomar experiencias dispersas —que hoy pasan afuera, sin que nadie las nombre— y transformarlas en conocimiento compartido. La UNESCO define la alfabetización mediática e informacional justamente así: las capacidades para acceder, analizar, evaluar, crear y actuar críticamente. El objetivo no es que los chicos memoricen definiciones, sino que puedan decir con sus palabras: 'esta interfaz me está apurando', 'esta fuente no me alcanza', 'acá necesito pedir ayuda'."

Cita de cierre: "Acompañar no es vigilar: es enseñar a decidir mejor."

---

## Módulo 03 · Arquitectura de la Elección y Libertad bajo Influencia Digital

Sin variante de audiencia. Copy: "Thaler y Sunstein, Lawrence Lessig y Shoshana Zuboff."

> "El concepto de **arquitectura de la elección** (Thaler y Sunstein) postula que el modo en que se organizan las alternativas predetermina la decisión final sin necesidad de prohibiciones explícitas. Como afirmó Lawrence Lessig, *'la arquitectura también regula'*: el diseño de la interfaz establece una normativa invisible."
>
> "En el **capitalismo de vigilancia** descrito por Shoshana Zuboff, las experiencias humanas se traducen en datos para alimentar 'productos de predicción' que se comercializan en un mercado de comportamientos futuros. Esta regulación se ejerce a menudo mediante la **fricción**: la creación de barreras cognitivas o físicas para dificultar la autonomía. Un ejemplo paradigmático es el botón de 'Aceptar todo' en colores vibrantes frente a un enlace de 'Configurar' en gris pequeño y oculto."

**Comparación Nudges vs. Patrones Oscuros (`NUDGE_VS_DARK`):**

| Concepto | Definición | Ejemplos |
|---|---|---|
| Diseño persuasivo (Nudges) | "Estímulos que orientan la conducta hacia beneficios para el usuario sin eliminar opciones." | "Recordatorios de salud, opciones de ahorro por defecto, alertas de tiempo de uso." |
| Patrones oscuros | "Diseños engañosos que llevan al usuario a tomar decisiones contra su propio interés." | "Laberintos para cancelar suscripciones, botones de 'aceptar' resaltados frente a opciones de privacidad ocultas." |

**Evaluación crítica (fija):**
> "Estas interfaces socavan la autonomía racional kantiana al apelar al Sistema 1 de Daniel Kahneman — respuestas rápidas, intuitivas y automáticas. Al eliminar el espacio para la reflexión, el diseño tecnológico reduce la agencia a una serie de reacciones algorítmicas, creando burbujas de filtros que limitan la exposición a la diversidad y refuerzan sesgos preexistentes."

---

## Laboratorio de desactivación de patrones oscuros — Simulador "Pausar, Preguntar, Elegir" (`id="simulador"`)

Sin variante de audiencia. Copy: "Elegí un escenario digital cotidiano y recorré los tres pasos del protocolo Farhat frente a él."

**Elemento interactivo — Selector de 3 escenarios × 3 pasos del protocolo (`PauseAskChooseSimulator`):**

### Escenario 1 — "Redes sociales: scroll infinito y notificación roja"
- Arquitectura: "Diseño persuasivo configurado para maximizar el tiempo de permanencia mediante recompensas variables (efecto tragaperras)."
- Reacción impulsiva: "Hacer clic automáticamente en la burbuja roja, consumir 40 minutos de video sugerido y sentir agotamiento sin haber resuelto nada."
- Acción de agente: "Aplicar el protocolo: detener el dedo por 3 segundos, cuestionar la utilidad del impulso y salir de la app."

### Escenario 2 — "E-commerce: contador de urgencia falsa ('quedan 2 unidades')"
- Arquitectura: "Patrón oscuro diseñado para inducir la heurística de escasez y evitar la ponderación racional del valor."
- Reacción impulsiva: "Ingresar apresuradamente los datos de pago por temor a perder la supuesta oportunidad."
- Acción de agente: "Pausar la compra 24 horas, investigar si la necesidad es real o inducida por la interfaz, y contrastar precios."

### Escenario 3 — "Algoritmo de noticias: recomendación sensacionalista"
- Arquitectura: "Bucle de retroalimentación algorítmica optimizado para gatillar indignación moral y polarización afectiva."
- Reacción impulsiva: "Compartir la noticia de inmediato, alimentando la desinformación en cadenas de chat o comentarios impulsivos."
- Acción de agente: "Hacer lectura lateral, verificar la fuente original, contrastar con datos oficiales y elegir no difundir el rumor."

**Los 3 pasos del protocolo, con contenido genérico (no depende del escenario, salvo el paso "Elegir"):**
1. **Pausar** — "Pausa cognitiva — interrumpir la inercia": "Soltás la pantalla durante tres segundos. Creás una hendidura de espacio entre el estímulo diseñado por la interfaz y tu respuesta fisiológica." Nota: "Acción: respirar hondo, desacoplar el movimiento automático del pulgar."
2. **Preguntar** — "Cuestionamiento reflexivo — interrogar al diseño": "¿Qué necesidad real busca resolver esta notificación o urgencia? ¿A quién beneficia que haga este clic de inmediato?" Nota: "Análisis: distinguir entre un motivo propio legítimo y una necesidad fabricada por la interfaz."
3. **Elegir** — "Elección soberana — actuar como agente": muestra la "Acción recomendada" específica del escenario seleccionado + confirmación fija "✓ Agencia recuperada: recuperaste el control deliberado de tu atención."

---

## Módulo 04 · Patologías de la Autonomía: Control Coercitivo y Abuso Invisible

Sin variante de audiencia. Copy: "Evan Stark y la investigación clínica de ReachLink Mental Health." — sección temáticamente más alejada de "agencia digital" que el resto de la página, con contenido sobre violencia de género/relaciones.

> "El **control coercitivo**, teorizado por Evan Stark, es un 'delito contra la libertad' que trasciende la violencia física. Es un patrón de dominio que busca desmantelar la autonomía, dignidad e identidad de la víctima mediante el aislamiento y la vigilancia."
>
> "El impacto traumático se consolida mediante la técnica **DARVO** (Deny, Attack, and Reverse Victim and Offender): el agresor deniega el abuso, ataca la credibilidad de la víctima e invierte los roles, posicionándose como el agraviado. Esto genera disonancia cognitiva y un vínculo traumático que anula la agencia de la víctima."

**Bloque "Abuso tras la separación":**
> "La pérdida de agencia a menudo se intensifica cuando la víctima intenta marcharse, utilizando el sistema legal y las disputas por la custodia como una nueva arquitectura de control. El sistema judicial exige 'pruebas físicas' y suele juzgar como inconsistentes los testimonios fragmentados por el trauma."

Link: "Consultar evaluación ReachLink" → `https://www.reachlink.com/es/autocomprobacion/`

**"Señales de alerta — erosión de agencia" (3 ítems):**
- Aislamiento social: "Restricción de contactos y eliminación de perspectivas externas que permitan cuestionar la realidad de la relación."
- Abuso financiero: "Control de cuentas, generación de dependencia económica y sabotaje de la independencia laboral."
- Microgestión y vigilancia: "Exigencia de acceso a dispositivos y contraseñas, monitoreo constante mediante servicios de localización."

> Nota: este módulo trata sobre control coercitivo en relaciones de pareja/abuso doméstico, un tema significativamente distinto del resto de la temática (que trata sobre agencia frente a interfaces digitales) — es el contenido más alejado del eje central de "Recuperar la agencia" de toda la página, sin una transición explícita que conecte ambos temas más allá de la palabra compartida "agencia".

---

## Mini-Test de Evaluación de Agencia Personal (`id="diagnostico"`)

Copy: "Contrastá tus respuestas con los constructos de Kant, Ryan & Deci (SDT), Farhat, Lessig y Lantegi Batuak." Sin variante de audiencia.

**Elemento interactivo — Test de 6 preguntas de opción múltiple con puntaje 1-4 por respuesta (`AGENCY_QUIZ`), máximo 24 puntos:**

1. **"Resistencia algorítmica (Farhat)"** — "Cuando abrís tu dispositivo móvil para revisar un mensaje urgente, ¿qué sucede habitualmente?" — 4 opciones de 1 a 4 puntos, desde "Abro el mensaje, pero termino navegando minutos en recomendaciones..." (1pt) hasta "Ejecuto únicamente la tarea prevista y cierro la pantalla conscientemente..." (4pts).
2. **"Autonomía decisional (Kant)"** — "En tus decisiones diarias importantes (estudio, trabajo, consumos), ¿cómo evaluás tus motivos?" — de "Siento que elijo lo que la mayoría o las tendencias sociales/algorítmicas imponen como correcto" (1pt) a "Tomo decisiones basadas en principios éticos propios, autorreflexión deliberada y autonomía legítima" (4pts).
3. **"Satisfacción psicológica (Ryan & Deci)"** — "Según la Teoría de la Autodeterminación, ¿cuán satisfechas percibís tus tres necesidades básicas?" — de "Me siento pasivo/a o alienado/a..." (1pt) a "Alto equilibrio: actúo con voluntad propia..." (4pts).
4. **"Arquitectura y libertad (Lessig)"** — "Ante entornos diseñados con patrones oscuros..." — de "No percibo cuando la interfaz me manipula..." (1pt) a "Aplico filtros activos: pauso la interacción, cuestiono el diseño..." (4pts).
5. **"Recuperación de agencia (Martínez Ruiz)"** — "Ante experiencias traumáticas o situaciones de alta vulnerabilidad emocional:" — de "Siento parálisis total o pérdida completa del control sobre el relato de mi propia vida" (1pt) a "Utilizo el diálogo, la elaboración narrativa y la escucha reflexiva..." (4pts).
6. **"Toma de decisiones (Lantegi Batuak)"** — "Al enfrentar dilemas o decisiones complejas de la vida cotidiana:" — de "Dejo que otras personas o la inercia decidan por mí..." (1pt) a "Sigo un proceso metódico: identifico el dilema, busco datos, alineo con valores..." (4pts).

**3 resultados posibles según %:**
- ≥80%: "Agencia operativa elevada & autonomía crítica" — Insignia "Nivel soberano" — "Demostrás una sólida capacidad de autogobierno (Kant), resistencia a arquitecturas persuasivas (Lessig/Farhat) y alineación con tus necesidades intrínsecas (SDT)."
- 55-79%: "Agencia intermedia con interferencia algorítmica" — Insignia "Nivel funcional" — "Contás con criterios propios para actuar, pero las arquitecturas de persuasión digital y los sesgos del entorno restringen de forma recurrente la ejecución de tu autonomía plena."
- <55%: "Susceptibilidad a coerción & agencia erosionada" — Insignia "Nivel en riesgo" — "Experimentás altos niveles de automatismo o control externo. Es crucial reconfigurar tu entorno digital y ejercitar la pausa reflexiva: pausar, preguntar, elegir."

El resultado también desglosa "3 vectores": autonomía decisional (Kant), resistencia algorítmica (Farhat), necesidades innatas SDT (Ryan & Deci).

> Nota: al igual que en `caldos-de-cultivo` (Mini-Test de Inmunidad Digital), **este mini-test no está etiquetado como independiente del quiz oficial** ni se aclara que no otorga progreso real — usa lenguaje de "diagnóstico" e "insignia" muy similar al quiz oficial que sí determina la finalización.

---

## Toolkit de Recuperación Decisional & Bienestar (`id="toolkit"`)

Copy: "Integra las directrices de la Fundación **Lantegi Batuak** y el modelo **WRAP** (Activa't per la salut mental) para ejercitar tu autogobierno en dilemas concretos." Sin variante de audiencia.

### Elemento interactivo — "Matriz práctica de toma de buenas decisiones" (`DecisionToolkit`), único ejercicio de la temática con input libre de texto del usuario

**Mecanismo de 4 pasos:**
1. El usuario escribe en un textarea su propio dilema (placeholder de ejemplo: "debo decidir si aceptar una oferta de trabajo que me exige más horas de pantalla, o mantener mi empleo actual…").
2. Define 2 opciones (A y B) en inputs de texto libre.
3. Elige cuál de las 2 opciones "satisface en mayor medida tus valores personales, tu salud psíquica y tus relaciones auténticas" (evaluación de motivación intrínseca según SDT).
4. Se genera una "Hoja de decisión agencial" que resume el problema y la elección hecha, con opción de reiniciar.

> Nota: es el único elemento interactivo de las 5 temáticas del grupo auditadas donde el usuario introduce contenido propio (no elige entre opciones predefinidas) — nada de lo escrito se guarda ni persiste (se pierde al recargar o navegar), es puramente un ejercicio de reflexión en el momento.

### Caja de herramientas de bienestar diario — WRAP (`WRAP_ITEMS`, 3 ítems)

| Título | Descripción |
|---|---|
| 1. Mantener la rutina | "Definir hábitos diarios no negociables: sueño, desconexión digital de 2 horas, ejercicio." |
| 2. Identificar desencadenantes | "Reconocer alertas tempranas: ansiedad al mirar redes sociales, fatiga por sobreinformación." |
| 3. Plan de acción personal | "Establecer previamente qué hacer ante un episodio de coerción emocional o parálisis." |

**Nota de cierre (fija):**
> "Se complementa con ejercicios del cuaderno de decisiones, como transformar afirmaciones negativas en objetivos positivos —el cerebro elude las formas negativas; es más eficaz proponerse 'comer sano' que 'no comer dulces'—. La vía del **Kaizen** (pequeños pasos) ayuda a superar la parálisis de la agencia perdida."

---

## Módulo 05 · El Rol de la Educación y la Ciudadanía Digital Integral

Sin variante de audiencia. Copy: "John Dewey, la UNESCO y Sonia Livingstone."

> "Siguiendo la filosofía de **John Dewey**, la escuela debe entenderse como una experiencia presente y no solo una preparación futura; por tanto, no puede ignorar el territorio digital. No debe ser un espacio de prohibición, sino un laboratorio de ciudadanía donde se transforme al 'usuario' pasivo en un 'ciudadano' crítico."
>
> "La **Mediación Activa**, propuesta por Sonia Livingstone, supera la vigilancia restrictiva mediante el acompañamiento y la conversación que construye criterio a largo plazo. Esto se alinea con la **Observación General n.º 25**, que garantiza el derecho de los menores a una autonomía progresiva y protección en el entorno digital."

### El Poliedro de la Ciudadanía Digital — UNESCO (`POLIEDRO_CARAS`, 7 caras)

| # | Cara | Descripción |
|---|---|---|
| 01 | Alfabetización mediática e informacional | "Analizar intereses detrás de los contenidos." |
| 02 | Identidad y huella digital | "Gestión consciente de la historia personal en la red." |
| 03 | Privacidad y seguridad | "Protección de datos y comprensión de la vigilancia." |
| 04 | Ética y convivencia | "Responsabilidad ante el rostro del otro (Levinas)." |
| 05 | Participación y democracia | "Uso del espacio digital para la construcción del bien común." |
| 06 | Consumo y economía digital | "Comprensión de los modelos de negocio y patrones oscuros." |
| 07 | IA y algoritmos | "Entender la lógica de la automatización y sus sesgos." |

> Nota importante: este "Poliedro" de **7 caras** es un adelanto/resumen del contenido central de la 6ª temática del grupo, `poliedro-ciudadania-digital` — pero esa temática, según su propia descripción en `lib/tematicas-data.ts`, trata sobre "un poliedro de **ocho** caras". Hay una discrepancia entre el número de caras mencionado acá (7) y el que presumiblemente desarrolla la temática dedicada al poliedro (8) — vale la pena verificar cuál es el número correcto y si esta sección debería actualizarse para coincidir.

---

## Cita de cierre (triple cita, la más compuesta del grupo)

Sin variante de audiencia. 3 citas distintas en la misma sección:

1. "La agencia es una construcción a posteriori que se alcanza a menudo de forma diferida, a través de la narración demorada del trauma y el discurso ante un otro que escucha." — Rosaura Martínez Ruiz
2. `data.closingQuote`: "La autonomía se construye con tres cosas juntas: límites, sentido y comunidad."
3. "No se trata de vivir libres de toda influencia, sino de aprender a ser libres bajo influencia." — José Néstor Farhat

---

## Material de estudio — Presentación en Slides e Infografía Visual (`id="material"`)

**Elemento interactivo #1 — `WebpSlideCarousel`:** 15 diapositivas `.webp` (`/img/tematicas/recuperar-la-agencia/slides/`).

**Elemento interactivo #2 — Infografía con lightbox de zoom/pan/pinch** (mecanismo compartido). Imagen: `/img/tematicas/recuperar-la-agencia/infografia.webp`.

---

## Repositorio de Fuentes Oficiales & Bibliografía (`id="fuentes"`) — único con botón "Copiar cita"

Badge de conteo: "8 citas verificables". Copy: "Toda la información de este módulo proviene de publicaciones peer-reviewed, conferencias institucionales y organismos internacionales. Podés verificar cada documento directamente, o copiar la cita para tu propio trabajo."

### Listado completo (`SOURCES`, 8 entradas, formato "ficha ampliada": tipo, título, autor, resumen, concepto clave, link)

| Tipo | Título | Autor | Resumen | Concepto clave | URL |
|---|---|---|---|---|---|
| Conferencia magistral | Libres Bajo Influencia: Subculturas Digitales, Algoritmos y Ciudadanía | José Néstor Farhat | "Analiza la paradoja de la libertad digital. Basado en Lawrence Lessig ('code is law'), demuestra cómo el diseño persuasivo y los patrones oscuros condicionan nuestras elecciones. Propone el protocolo cívico de tres pasos: pausar, preguntar, elegir." | Arquitectura persuasiva, desorden informativo, agencia pedagógica. | https://www.unesco.org/es/media-information-literacy *(nota: el link apunta al hub de UNESCO, no a un recurso propio de la conferencia de Farhat)* |
| Teoría psicológica central | La Teoría de la Autodeterminación y la facilitación de la motivación intrínseca | Richard M. Ryan & Edward L. Deci — University of Rochester | "Investigación canónica que demuestra que los seres humanos requieren tres necesidades psicológicas innatas (autonomía, competencia y relaciones) para el bienestar y la motivación intrínseca." | Motivación autónoma vs. controlada, bienestar psicológico. | https://selfdeterminationtheory.org/the-theory/ |
| Filosofía moral y epistemología | Personal Autonomy — Autonomía kantiana vs. agencia | Stanford Encyclopedia of Philosophy & Robert Audi / Immanuel Kant | "Distingue metódicamente entre agencia (capacidad ontológica de actuar) y autonomía (capacidad de autogobernarse según razones y principios reflexivos propios)." | Autogobierno, agente moral, razón práctica. | https://plato.stanford.edu/entries/personal-autonomy/ |
| Sociología estructural | La agencia en la sociología de Pierre Bourdieu y Anthony Giddens | Juan Barri (2024) — SciELO México / Ideas y Valores | "Examina la dialéctica entre estructura social y acción humana. Contrasta el habitus estructurante de Bourdieu con la teoría de la estructuración y la reflexividad de Giddens." | Habitus, estructuración, dualidad de la estructura. | https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-64422024000100115 |
| Psicoanálisis y teoría crítica | El trauma o en busca de la agencia perdida | Rosaura Martínez Ruiz (2023) — Ideas y Valores / UNAM | "Explora cómo la violencia traumática colapsa la agencia psíquica y cómo la reconstrucción narrativa y la escucha permiten reconstituir la capacidad de actuar en el sujeto." | Trauma, relato, escucha psicoanalítica, agencia restaurada. | https://dialnet.unirioja.es/servlet/articulo?codigo=8885614 |
| Salud mental y autoconocimiento | Control coercitivo: por qué el abuso psicológico permanece oculto | ReachLink Mental Health & Clinical Research | "Analiza las micro-regulaciones invisibles que merman la capacidad de decisión de una persona en entornos domésticos o de alta manipulación interpersonal." | Micro-regulaciones, aislamiento, pérdida de autonomía. | https://www.reachlink.com/es/autocomprobacion/ |
| Derechos humanos y salud reproductiva | Los derechos reproductivos son derechos humanos: autonomía corporal | UNFPA América Latina & Instituto Interamericano de Derechos Humanos | "Fundamenta la autonomía corporal como derecho humano supremo e inalienable. Contempla datos mundiales sobre libertad de decisión sobre el propio cuerpo." | Autonomía corporal, autodeterminación, marco de DDHH. | https://lac.unfpa.org/en/topics/sexual-and-reproductive-health |
| Autogestión de la salud mental | Manual para la recuperación y la autogestión del bienestar (WRAP) | Activa't per la Salut Mental & Activament Catalunya Associació | "Guía práctica para construir un plan de bienestar autogestionado, identificando señales de alerta y estrategias proactivas para sostener la autonomía personal." | WRAP, autogestión del bienestar, empoderamiento. | https://www.activatperlasalutmental.org |

> Notas:
> - **Mike Caulfield, Albert Bandura y Sonia Livingstone (los 3 autores de `data.authors` más citados en el cuerpo, junto con UNESCO) NO tienen entrada propia en `SOURCES`** — solo UNESCO tiene una entrada indirecta (el link de Farhat apunta al hub de UNESCO). Es la mayor discrepancia entre `data.authors` y el listado final de fuentes de las 5 temáticas del grupo auditadas: **3 de los 4 autores destacados en el Hero no son verificables en la sección de fuentes**.
> - En cambio, **varios autores citados extensamente en el cuerpo pero ausentes de `data.authors`** sí tienen entrada en `SOURCES` (Kant, Piaget, Kohlberg, Bourdieu, Giddens, Ryan & Deci, Thaler & Sunstein, Lessig, Zuboff, Evan Stark, John Dewey) — solo 3 de ellos (Ryan & Deci, Bourdieu/Giddens vía Barri, y Martínez Ruiz) tienen ficha propia; el resto (Kant, Piaget, Kohlberg, Thaler & Sunstein, Lessig, Zuboff, Evan Stark, Dewey) no tienen ninguna entrada verificable en `SOURCES` pese a ser citados extensamente con atribución directa.
> - Ninguna fuente está marcada como "sin verificar" ni tiene ningún indicador `unverified`.

---

## Cuestionario de Comprensión — Quiz oficial (`id="evaluacion"`)

**Elemento interactivo — Quiz de 10 preguntas**, mismo mecanismo compartido. **Comparte con `algoritmos-perfilado` y `caldos-de-cultivo` el mismo gap sin corregir**: el componente nunca destructura `showQuiz`, `previousResult` ni `passed` — no hay pantalla de bienvenida indicando el umbral de 8/10, no se muestra el resultado de un intento previo, y la pantalla final dice siempre "¡Cuestionario completado!" sin distinguir aprobado/no aprobado. De las 5 temáticas del grupo auditadas hasta ahora, **solo `diseno-persuasivo-patrones-oscuros` implementa correctamente el estado completo del quiz**.

**Las 10 preguntas completas:**

1. "Según Albert Bandura, ¿qué es la agencia?" → Correcta: "La capacidad de actuar con intención, anticipar consecuencias, autorregularse y reflexionar sobre lo que hacemos"
2. "¿Qué significa 'recuperar la agencia' según la charla?" → Correcta: "Reconocer las condiciones en las que elegimos, imaginar alternativas y decidir con más conciencia"
3. "¿Cuáles son los tres verbos que propone la charla para actuar en el momento del impulso?" → Correcta: "Pausar, preguntar, elegir"
4. "¿Qué logra concretamente la 'pausa' antes de reaccionar a un mensaje, según la charla?" → Correcta: "Crea una distancia mínima entre el estímulo y la respuesta, que cambia la situación"
5. "¿En qué consiste la 'lectura lateral' que propone Mike Caulfield?" → Correcta: "Salir de la página, abrir otra pestaña, contrastar y rastrear la fuente original en vez de juzgar el contenido solo por dentro"
6. "Según la charla, ¿qué hacen los verificadores profesionales de información?" → Correcta: "Leen 'hacia los costados': salen del artículo para contrastar fuentes"
7. "Según Sonia Livingstone, ¿cuál es la diferencia entre vigilancia y acompañamiento adulto?" → Correcta: "La vigilancia detecta un problema puntual; el acompañamiento construye criterio que sirve para toda la vida"
8. "¿Qué le pasa, según la charla, a 'un chico vigilado hasta los diecisiete'?" → Correcta: "No aprende a decidir; aprende a esconderse"
9. "¿Cómo define la UNESCO la alfabetización mediática e informacional, según la charla?" → Correcta: "Como las capacidades para acceder, analizar, evaluar, crear y actuar críticamente frente a la información"
10. "Según la charla, ¿cuál es el verdadero objetivo educativo, más allá de que un chico memorice definiciones?" → Correcta: "Que pueda decir con sus propias palabras cosas como 'esta interfaz me está apurando' o 'acá necesito pedir ayuda'"

Ninguna pregunta ni sus opciones varían por audiencia.

---

## Resumen de hallazgos para el rediseño

1. **"ninas-ninos-adolescentes" no tiene ningún contenido propio** — pese a ser una de las 3 audiencias asignadas a esta temática (única del grupo con 3 audiencias en vez de 2), el único chequeo condicional de audiencia en toda la página es `=== 'familias'`; cualquier otra selección, incluida esta, cae al contenido por defecto sin ninguna adaptación de lenguaje o complejidad pensada para un lector niño/niña/adolescente. Mismo patrón de "audiencia sin contenido propio" ya detectado para "mujeres" en `violencia-digital`.
2. **3 de los 4 autores destacados en `data.authors` del Hero (Caulfield, Bandura, Livingstone) no tienen entrada propia en `SOURCES`** — es la mayor discrepancia entre autores destacados y fuentes verificables de las 5 temáticas del grupo auditadas.
3. **8 autores citados extensamente en el cuerpo con atribución directa (Kant, Piaget, Kohlberg, Thaler & Sunstein, Lessig, Zuboff, Evan Stark, Dewey) no tienen ninguna entrada en `SOURCES`** — el listado de "8 citas verificables" cubre menos de la mitad de los autores realmente mencionados por nombre en la página.
4. **El Módulo 04 (Control Coercitivo, DARVO, abuso doméstico) es temáticamente muy distante del resto de la temática** (agencia frente a interfaces digitales) — no hay transición explícita que justifique el salto de tema, más allá de la palabra compartida "agencia"; vale la pena decidir en el rediseño si este módulo pertenece más naturalmente a `violencia-digital` o si necesita una introducción propia que justifique su inclusión acá.
5. **El "Poliedro" de esta temática tiene 7 caras, mientras que la descripción de la temática dedicada (`poliedro-ciudadania-digital`) menciona explícitamente "un poliedro de ocho caras"** — discrepancia numérica entre el adelanto de esta página y lo que presumiblemente desarrolla la 6ª temática del grupo; requiere verificación editorial.
6. **Comparte con `algoritmos-perfilado` y `caldos-de-cultivo` el gap del quiz oficial** (sin `showQuiz`/`previousResult`/`passed`) — de 5 temáticas auditadas, solo `diseno-persuasivo-patrones-oscuros` lo implementa correctamente.
7. **El Mini-Test de Evaluación de Agencia Personal no está etiquetado como independiente del progreso real** (igual que el mini-test de `caldos-de-cultivo`) — riesgo de que el usuario confunda completar el mini-test con completar la temática.
8. **Único elemento interactivo de todo el grupo con input de texto libre del usuario** (`DecisionToolkit`) — el usuario escribe su propio dilema y sus propias opciones, sin que nada se guarde; funcionalidad de reflexión personal única, sin equivalente en las otras 4 temáticas auditadas.
9. **Único mecanismo de "copiar cita" al portapapeles** (`SourceCard`) — funcionalidad exclusiva de esta temática para el listado de fuentes, ausente en `subculturas-digitales`, `algoritmos-perfilado`, `diseno-persuasivo-patrones-oscuros` y `caldos-de-cultivo`.
10. **El caso de "Sofía" se reutiliza (en versión resumida) de `subculturas-digitales`** sin indicarlo al lector — mismo personaje/escenario narrado con más detalle en la otra temática.
11. **Es la temática del grupo con menos secciones base en `data.sections`** (3, frente a 4-8 de las demás) pero compensa con la mayor cantidad de módulos adicionales hardcodeados fuera de `data` (5 módulos numerados + Toolkit + WRAP + Poliedro) — vale la pena decidir en el rediseño si conviene migrar parte de este contenido "adicional" a la estructura de datos compartida (`lib/libres-bajo-influencia-data.ts`) para mayor consistencia con el resto del grupo.
