# Auditoría de contenido — Violencia Digital hacia la Mujer

Base para rediseño. Recorrido completo de `app/violencia-digital/violencia-digital-content.tsx` (1169 líneas) y `lib/violencia-digital-content.ts` (103 líneas). Solo lectura, nada modificado.

Ruta: `/violencia-digital`. Título de página: "Violencia Digital hacia la Mujer: Protocolo de Protección | José Farhat". No hay `components/violencia-digital/` con subcomponentes de sección — solo `source-cite.tsx` vive ahí; todo el resto (JSX, arrays de datos locales) está en el content file único. `Navbar`/`Footer`/`BackToDashboardButton` dentro del propio content file. Barra de progreso de lectura fija superior (acento naranja, "color UNiTE" según el comentario del código — referencia a la campaña ONU Mujeres UNiTE) + botón flotante "Volver Arriba". Progreso vía `useTematicaProgress` con `computeProgress: checklistProgress("checklist", 5)` — sí tiene checklist interactivo persistente (a diferencia de `ia-etica-ciudadania` y `estafas-digitales`).

**Patrón de audiencia confirmado por el propio código** (comentario explícito en el componente, línea ~228): *"Única variación por audiencia de esta temática: si no hay filtro o es 'mujeres', se muestra el contenido docente como fallback (comportamiento actual, sin regresión); solo 'familias' cambia el texto."* Es decir, el binario real es `familias` vs. **todo lo demás** (`docentes`, `mujeres`, sin selección, y cualquier otra audiencia futura) — la variable que en el código se llama `notaMagnitud`/`faq3Ampliacion` usa el valor "docente" como fallback universal, no solo para la audiencia `docentes` sino también para `mujeres`, pese a que `mujeres` es la audiencia principal nombrada en el propio título de la página ("Violencia Digital hacia la Mujer") y es una de las 3 audiencias asignadas a esta temática en `lib/tematicas-data.ts`. Implementación real: `audienciaActual === "familias" ? MAGNITUD_ARGENTINA.notaFamilias : MAGNITUD_ARGENTINA.notaDocente` (línea 232) y `audienciaActual === "familias" ? FAQ3_AMPLIACION_FAMILIAS : FAQ3_AMPLIACION` (línea 233) — 2 ternarios inline, sin pasar por `resolveTexto` ni por el componente `<NotaAudiencia>`, pese a que los nombres de campo (`notaDocente`/`notaFamilias`) imitan la convención de `AudienciaNotas`.

**No usa `resolveTexto` en ningún punto del archivo** (no hay import de `lib/audiencia-texto` ni de `AudienciaTexto`) — confirmando que esta temática NO es Group A pese a algunas apariencias superficiales. Solo 2 piezas de contenido total varían por audiencia en toda la página (`notaMagnitud` y `faq3Ampliacion`) — la proporción de contenido adaptado por audiencia es la más baja de todas las temáticas auditadas hasta ahora.

**`SourceCite` propio** (mismo patrón de interfaz que `huella-digital`, documentado como réplica intencional con paleta clara/violeta). Ninguna de las 7 fuentes de `ALL_SOURCES` está marcada `unverified: true` — todas tienen URL y se presentan como confirmadas.

---

## Hero (sin ancla `id`)

Badge fijo: "ProtocoloPrevención" (con ícono de escudo).

**H1 (fijo):** "Tomá el control ante la Violencia Digital hacia la Mujer"

**Párrafo intro (fijo, sin variante de audiencia pese a estar dirigido explícitamente a 3 audiencias distintas dentro del mismo párrafo):**
> "Estar en internet no debería dar miedo. Este es tu **manual táctico paso a paso** basado en la Ley Olimpia y protocolos internacionales para protegerte, recolectar pruebas y actuar. Si sos docente, este mismo protocolo te sirve para vos y también para acompañar a una colega, a una alumna o a la familia de un estudiante que esté atravesando esto."

> Nota: este único párrafo ya intenta cubrir a las 3 audiencias (mujeres en general, vía "protegerte"; docentes explícitamente nombrados; familias mencionadas de pasada como "la familia de un estudiante") sin usar ningún mecanismo de audiencia — es prosa que intenta ser universal en un solo texto fijo, a diferencia del resto del sitio que suele resolver esto con variantes.

Meta declarada (fija): "Meta: Al terminar, tendrás un plan de acción seguro y pruebas legales válidas."

---

## Concepto (sin ancla `id`)

Badge: "Contexto". Sin variante de audiencia. 2 citas destacadas (`CONCEPTO_QUOTES`, grid de 2 tarjetas):

> "La violencia digital contra las mujeres incluye el ciberacoso y el ciberacecho, la desinformación de género, la falsificación de imágenes y el intercambio no consentido de imágenes íntimas en línea. Es una de las formas de violencia de género que más rápido crece en el mundo."
> — ONU Mujeres (`https://www.unwomen.org/es/noticias/comunicado-de-prensa/2025/11/la-violencia-digital-se-esta-intensificando-pero-casi-la-mitad-de-las-mujeres-y-ninas-del-mundo-carecen-de-proteccion-juridica-frente-al-abuso-digital`)

> "Esta violencia se considera de género porque es generalmente sexista y sexualizada: se expresa a través de amenazas, discursos discriminatorios, acoso sexual, invasión de la intimidad y divulgación no consensuada de imágenes, entre otros ciberdelitos."
> — CEPAL (`https://www.cepal.org/es/comunicados/cepal-llama-cerrar-la-brecha-digital-genero-fomentar-la-participacion-mas-mujeres`)

---

## Historia / Origen — "De dónde viene la Ley Olimpia" (`id="historia"`)

Badge: "Contexto". Sin variante de audiencia.

**Historia de Olimpia Coral Melo (`OLIMPIA_HISTORY`, la narrativa biográfica más extensa del sitio auditado hasta ahora):**
> "En 2014, cuando tenía 18 años, la activista mexicana Olimpia Coral Melo descubrió que un video íntimo suyo, grabado por su entonces pareja, circulaba sin su consentimiento en redes sociales en Huauchinango, Puebla. Al intentar denunciar, le informaron que ese hecho no estaba tipificado como delito. La difusión le trajo consecuencias emocionales severas, de las que ella misma ha hablado públicamente como parte de su activismo posterior. Con apoyo de su madre y de otras mujeres, fundó el Frente Nacional para la Sororidad y presentó en marzo de 2014 una iniciativa de ley en el Congreso de Puebla. Tras siete años de lucha, la reforma se aprobó, reconociendo la violencia digital como delito. Hoy Olimpia es reconocida internacionalmente por este trabajo (una de las 100 personas más influyentes del mundo según Time, 2021)."
> — Wikipedia, "con fuentes primarias citadas" (`https://es.wikipedia.org/wiki/Olimpia_Coral_Melo`)

**Ley 27.736 de Argentina (`LEY_27736_ARGENTINA`):**
> "Desde 2023, mediante la Ley 27.736, la violencia digital es oficialmente reconocida en Argentina como una modalidad de violencia dentro del marco de la Ley 26.485 de Protección Integral para Prevenir, Sancionar y Erradicar la Violencia contra las Mujeres — no es una importación literal de la ley mexicana, es la propia ley argentina, con su número y año."
> — ONU Mujeres LAC (`https://lac.unwomen.org/es/stories/noticia/2025/10/enfrentar-la-violencia-digital-con-perspectiva-de-genero-hacia-una-gobernanza-responsable-de-los-datos`)

> Nota: el propio texto aclara explícitamente que la Ley 27.736 argentina "no es una importación literal de la ley mexicana" — una precisión editorial poco común en el sitio, probablemente para prevenir la confusión de que "Ley Olimpia" sea un nombre formal usado en Argentina.

---

## Tipos de Violencia Digital de Género (`id="tipos"`)

Badge: "Contexto". Sin variante de audiencia.

**6 tipos (`TIPOS_VIOLENCIA_DIGITAL.items`):**
1. Difusión no consentida de contenido íntimo
2. Ciberacoso y ciberacecho (stalking digital)
3. Amenazas y hostigamiento
4. Desinformación de género y discursos discriminatorios
5. Suplantación de identidad y perfiles falsos
6. Abuso mediante deepfakes (manipulación de imágenes o video con IA)

Fuente: ONU Mujeres / MESECVI-OEA, "Informe de Ciberviolencia y Ciberacoso contra las mujeres y las niñas (2022)" (`https://mexico.unwomen.org/sites/default/files/2023-03/Brief_ViolenciaDigital.pdf`)

**Nota sobre deepfakes (`DEEPFAKES_NOTE`):**
> "Mencionados por el informe 2024 del Secretario General de la ONU como amenaza emergente de violencia digital contra mujeres y niñas."
> — ONU Mujeres, nota "deepfakes" (`https://www.unwomen.org/es/articles/preguntas-frecuentes/preguntas-frecuentes-troleo-ciberacoso-doxing-y-otras-formas-de-violencia-contra-las-mujeres-en-la-era-digital`)

---

## Infografía General (sin ancla `id`)

**Elemento interactivo — Lightbox de zoom/pan/pinch** (mismo mecanismo que las demás temáticas: zoom 1x-4x, arrastre, pinch táctil, scroll de mouse, Escape para cerrar). Imagen: `/weekly-content/2026-W22/violenciapng.png`, alt "Infografía de Violencia Digital hacia la Mujer".

---

## El Protocolo de 3 Pasos — núcleo accionable de la temática

Cada paso lleva la etiqueta `SectionBadge variant="protocol"` ("Protocolo — hacé esto ahora"), a diferencia de las secciones de contexto ("Contexto"). Sin variante de audiencia en ninguno de los 3 pasos.

### Paso 1 — "Asegurar el Perímetro"

Objetivo: "Frenar el ataque actual sin alertar al agresor y proteger tus cuentas."

Acciones:
- "Activá la verificación en dos pasos (2FA) en tus redes principales."
- "Poné tus perfiles en modo privado temporalmente."
- "Revisá las sesiones activas y cerrá las que no reconozcas."

**"Ahora hacé esto":** "Andá a la configuración de WhatsApp/Instagram, buscá 'Privacidad y Seguridad' y activá la verificación en dos pasos. Toma solo 30 segundos." Con snippet de ruta de menú: `Configuración → Cuenta → Verificación en dos pasos`.

### Paso 2 — "Modo Investigador (Pruebas)"

Objetivo: "Documentar todo legalmente *antes* de reportar a la plataforma. Si reportás primero, la plataforma borra la evidencia."

Acciones:
- "**Guardá todas las pruebas:** capturas de pantalla, conversaciones, imágenes, videos y cualquier otro elemento que pueda servir como evidencia. Asegurate de que se vea claramente el **usuario, fecha y hora** en cada captura. Documentá todo antes de bloquear o reportar."
- "**CRÍTICO: Copiá la URL del perfil o chat.** Es el 'DNI digital' del agresor. Sin esto, si cambian el nombre, se pierde el rastro."
- "Grabá audios o guardá correos. No borrés nada por pánico."

**Ejercicio práctico interactivo:** input de texto de solo lectura con valor de ejemplo `https://instagram.com/usuario_agresor123`, junto a la instrucción: "Abrí el perfil del agresor en un navegador web (no en la app móvil si es posible) y copiá la dirección web completa que aparece arriba."

### Paso 3 — "Denuncia y Contención"

Objetivo: "Usar las herramientas legales (Ley Olimpia) y tecnológicas para detener la difusión y denunciar."

Acciones:
- "Para imágenes íntimas difundidas sin permiso, usá herramientas internacionales para borrarlas de internet."
- "Contactá a la fiscalía cibernética local o Ministerio Público con tus pruebas (URL + capturas)."
- "**AHORA SÍ:** Bloqueá al agresor y reportá su cuenta en la red social."

**2 herramientas externas con link (tarjetas clicables):**
- **Take It Down** (`https://takeitdown.ncmec.org/es/`) — "Borrar imágenes explícitas de menores"
- **StopNCII.org** (`https://stopncii.org/`) — "Borrar imágenes íntimas de adultos"

---

## Errores Fatales que Debés Evitar (`RED_FLAGS`, sin ancla `id`)

Badge: "Protocolo — hacé esto ahora". Sin variante de audiencia. 3 errores:

| Error | Por qué es un error |
|---|---|
| Borrar y Bloquear inmediatamente | "Destruís la evidencia. Primero documentá, luego bloqueá." |
| Avisar que vas a denunciar | "Le das tiempo al agresor de borrar su rastro o sus cuentas. Actuá en silencio." |
| Creer que "es tu culpa" | "La violencia digital hacia la mujer es un delito tipificado (Ley Olimpia). El único culpable es el agresor." |

---

## Checklist de Acción (persistente, sin ancla `id`)

**Elemento interactivo — Checklist de 5 ítems con persistencia real** vía `useTematicaProgress`/`checklistProgress`, más botón "Descargar Plan" que genera y descarga un archivo `.txt` (`Plan_Accion_Violencia_Digital_Hacia_La_Mujer.txt`) combinando el checklist y la plantilla de denuncia. Sin variante de audiencia en los ítems.

1. "He activado la verificación en dos pasos."
2. "He hecho capturas de pantalla mostrando usuario y fecha."
3. "He copiado y guardado la URL (DNI digital) del agresor."
4. "He reportado a plataformas de soporte como StopNCII (si aplica)."
5. "He bloqueado al agresor DESPUÉS de guardar pruebas."

Al completar los 5 ítems, aparece un mensaje de celebración: "¡Excelente! Has completado el protocolo básico de protección. Tenés el control."

---

## Plantilla para Pedir Ayuda Legal (sin ancla `id`)

**Elemento interactivo — Textarea de solo lectura + botón "Copiar"** (con fallback a `document.execCommand('copy')` si `navigator.clipboard` falla), feedback visual "Copiado" por 2.5 segundos. Sin variante de audiencia.

**Texto completo de la plantilla (fijo):**
```
Estimados, me comunico para reportar un caso de violencia digital hacia la mujer (basado en la Ley Olimpia).

He sido víctima de [acoso / difusión no consentida de imágenes / amenazas] en la plataforma [Nombre de red social].
Cuento con las siguientes pruebas resguardadas:
- Capturas de pantalla con fecha y hora.
- URL (identificador único) del perfil agresor: [Pegar URL aquí]

Solicito orientación sobre los pasos legales a seguir. Adjunto evidencias.
```

---

## La Magnitud del Problema en Argentina (`id="magnitud"`) — única sección con variante de audiencia

Badge: "Contexto".

**2 estadísticas destacadas (`MAGNITUD_ARGENTINA.stats`, con cifra ancla grande vía `statsHighlight`):**

| Cifra destacada | Texto completo |
|---|---|
| 6/10 | "En el último año, 6 de cada 10 adolescentes y mujeres encuestadas experimentaron situaciones de violencia de género digital. Entre integrantes del colectivo LGBT+, la cifra llegó al 52,5%." |
| 36% | "Solo el 36% de quienes atravesaron esto informó a la plataforma donde ocurrió, y menos del 10% buscó ayuda formal." |

Fuente: Defensoría del Pueblo de la Ciudad de Buenos Aires (2023), "con Iniciativa Spotlight, ONU Mujeres, PNUD, UNFPA e Instituto Gino Germani (UBA)" (`https://defensoria.org.ar/noticias/relevamiento-sobre-violencia-de-genero-digital/`)

### `notaMagnitud` — la única pieza de contenido con variante real de audiencia (binario familias/no-familias)

| "Docentes" (fallback para docentes, mujeres, y cualquier audiencia sin selección) | Familias |
|---|---|
| "Este dato es clave para entender por qué la pregunta de 'qué hacer si una alumna te lo cuenta' importa tanto: la mayoría de quienes atraviesan esto no lo denuncian ni lo cuentan formalmente. Que confíe en un docente puede ser la única vez que lo cuenta." | "Este dato es clave para entender por qué importa saber qué hacer si tu hija o alguien de tu familia te lo cuenta: la mayoría de quienes atraviesan esto no lo denuncian ni lo cuentan formalmente. Que confíe en vos puede ser la única vez que lo cuenta." |

> Respuesta a la pregunta de cómo se resuelve la audiencia "mujeres": **recibe exactamente el mismo texto que "docentes"** (el fallback), sin ninguna adaptación propia — una mujer que no es docente ni familiar de nadie, navegando la temática cuyo propio título la nombra ("...hacia la Mujer"), ve un párrafo redactado en segunda persona hacia un/a docente ("la pregunta de 'qué hacer si una alumna te lo cuenta'"), lo cual puede leerse como desalineado con su situación si ella misma es la persona afectada, no quien acompaña a alguien más.

---

## Carrusel de Recursos (sin ancla `id`)

**Elemento interactivo — Carrusel de 8 láminas** (`/weekly-content/2026-W22/carrusel/1.svg` a `8.svg`), mismo mecanismo de flechas/dots/`AnimatePresence` que en las demás temáticas del sitio. Header fijo, sin variante de audiencia: "Material para el aula · Violencia Digital hacia la Mujer — Recursos para el Aula" — mismo patrón de header no adaptado ya detectado en `alfabetizacion-mediatica` y `estafas-digitales` (a diferencia de `ciudadania-digital`/`huella-digital`/`hiperconectividad-digital`, cuyos carruseles sí traducen el header por audiencia).

---

## Dudas Comunes — FAQ (sin ancla `id`)

3 preguntas, acordeón expandir/colapsar individual.

**FAQ 1 — "¿Qué es exactamente la 'Ley Olimpia'?"** (fija, sin variante):
> "No es una sola ley, sino un conjunto de reformas legales (nacidas en México y expandidas por LatAm) que reconocen la violencia digital hacia la mujer y sancionan penalmente delitos como la difusión de contenido íntimo sin consentimiento y el ciberacoso."

**FAQ 2 — "¿Es válido legalmente un pantallazo?"** (fija, sin variante):
> "Sí, pero es insuficiente por sí solo. Por eso es vital **copiar la URL** del chat o perfil. Un pantallazo puede ser editado, pero la URL combinada con capturas da solidez a la investigación pericial."

**FAQ 3 — "Soy docente y una alumna (o la familia de un estudiante) me contó que está pasando esto. ¿Qué hago?"** (respuesta base fija, con una segunda pieza de contenido que SÍ varía por audiencia agregada al final):

Respuesta base (fija, siempre visible, sin importar audiencia):
> "Escuchá sin minimizar y sin pedirle que te muestre las pruebas vos misma —no te corresponde investigar por tu cuenta—. Compartile este mismo protocolo y acompañala a activar el equipo de orientación o el protocolo de tu institución. Si es una situación de riesgo inmediato, comunicate con las líneas de ayuda correspondientes en lugar de intentar resolverlo solo con lo que sabés."

**`faq3Ampliacion` — la segunda pieza de contenido con variante real de audiencia**, agregada tras un salto de línea doble a continuación de la respuesta base:

| "Docentes" (`FAQ3_AMPLIACION`, fallback para docentes, mujeres, y sin selección) | Familias (`FAQ3_AMPLIACION_FAMILIAS`) |
|---|---|
| "Todo lo anterior cubre el caso de una alumna o la familia de un estudiante contándole esto a un docente. Falta contemplar el caso más directo: si la propia estudiante lo atraviesa y se lo cuenta a un docente en primera persona. El mismo criterio aplica (no investigar por tu cuenta, activar el protocolo institucional), pero con un matiz: si es menor de edad, probablemente corresponda involucrar también a la familia y al equipo de orientación, a diferencia de un caso entre adultas." | "Si sos familiar de la persona que atraviesa esto (tu hija, tu hermana, una sobrina), el mismo criterio aplica: no investigues por tu cuenta ni confrontes al agresor, y acompañala a activar el protocolo de arriba. Si es menor de edad, correspondería también involucrar a la escuela y, si el caso lo amerita, a la Línea 137. El rol de la familia es sostener, no resolver sola." |

> Nota: esta FAQ entera (pregunta + respuesta + ampliación) está formulada exclusivamente en clave "tercero que acompaña" (docente o familiar que recibe el relato de otra persona) — no hay ninguna FAQ formulada en primera persona para alguien que está atravesando la violencia digital ella misma y busca ayuda para sí misma, pese a que la audiencia "mujeres" es una de las 3 asignadas a la temática y el resto de la página (Hero, los 3 pasos del protocolo, el checklist) sí está en segunda persona dirigida a la persona afectada ("protegerte", "tus cuentas", "documentá todo").

---

## Recursos Oficiales Recomendados + Fuentes Citadas (cierre de la página)

**3 links de recursos oficiales (sin descripción adicional, solo nombre + link):**
- OEA Seguridad Digital → `https://www.oas.org/ext/es/seguridad/prog-ciber`
- UNFPA Argentina → `https://argentina.unfpa.org/es`
- Ministerio Público Tutelar → `https://mptutelar.gob.ar/`

**Listado completo de fuentes citadas (`ALL_SOURCES`, 7 entradas — reutiliza directamente los objetos `source` ya usados inline, no una lista separada de números):**

| # | Fuente | Nota | URL |
|---|---|---|---|
| 1 | ONU Mujeres | — | https://www.unwomen.org/es/noticias/comunicado-de-prensa/2025/11/la-violencia-digital-se-esta-intensificando-pero-casi-la-mitad-de-las-mujeres-y-ninas-del-mundo-carecen-de-proteccion-juridica-frente-al-abuso-digital |
| 2 | CEPAL | — | https://www.cepal.org/es/comunicados/cepal-llama-cerrar-la-brecha-digital-genero-fomentar-la-participacion-mas-mujeres |
| 3 | Wikipedia | "con fuentes primarias citadas" | https://es.wikipedia.org/wiki/Olimpia_Coral_Melo |
| 4 | ONU Mujeres LAC | — | https://lac.unwomen.org/es/stories/noticia/2025/10/enfrentar-la-violencia-digital-con-perspectiva-de-genero-hacia-una-gobernanza-responsable-de-los-datos |
| 5 | ONU Mujeres / MESECVI-OEA | "Informe de Ciberviolencia y Ciberacoso contra las mujeres y las niñas (2022)" | https://mexico.unwomen.org/sites/default/files/2023-03/Brief_ViolenciaDigital.pdf |
| 6 | ONU Mujeres | "deepfakes" | https://www.unwomen.org/es/articles/preguntas-frecuentes/preguntas-frecuentes-troleo-ciberacoso-doxing-y-otras-formas-de-violencia-contra-las-mujeres-en-la-era-digital |
| 7 | Defensoría del Pueblo de la Ciudad de Buenos Aires (2023) | "con Iniciativa Spotlight, ONU Mujeres, PNUD, UNFPA e Instituto Gino Germani (UBA)" | https://defensoria.org.ar/noticias/relevamiento-sobre-violencia-de-genero-digital/ |

> A diferencia de la mayoría de las temáticas auditadas, este listado **es exactamente la misma colección de objetos `source`** usada inline en el cuerpo (no un array paralelo de "labels" reformulados) — por construcción, no puede haber discrepancia entre lo citado inline y lo listado al final, a diferencia de la inconsistencia detectada repetidamente en `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital` e `ia-etica-ciudadania`.

Línea de cierre (fija): "Guía de acción construida para empoderamiento y protección."

---

## Todas las fuentes citadas, consolidado

**Ninguna fuente marcada `unverified: true`** en toda la temática — las 7 entradas de `ALL_SOURCES` tienen URL y se presentan como verificadas, sin ninguna nota de "sin confirmar"/"cita de segunda mano" como sí aparece en otras temáticas del sitio.

**Fuente más citada:** ONU Mujeres (3 apariciones distintas — concepto, ley argentina vía "ONU Mujeres LAC", y deepfakes), seguida de CEPAL, Wikipedia (con nota de "fuentes primarias citadas"), ONU Mujeres/MESECVI-OEA, y Defensoría del Pueblo de CABA.

---

## Resumen de hallazgos para el rediseño

1. **La audiencia "mujeres" no tiene ningún contenido propio** — en las 2 únicas piezas de contenido que sí varían por audiencia (`notaMagnitud`, `faq3Ampliacion`), "mujeres" recibe literalmente el mismo texto que "docentes" (documentado así explícitamente en un comentario del propio código). En una temática cuyo título es "Violencia Digital hacia la **Mujer**" y que tiene a "mujeres" como una de sus 3 audiencias asignadas, esto significa que seleccionar esa audiencia no cambia nada en la página.
2. **La FAQ 3 (la única con contenido de audiencia) está formulada 100% en clave "tercero que acompaña"** (docente o familiar), sin ninguna variante en primera persona para una mujer que busca ayuda para sí misma — aunque el resto de la página (Hero, protocolo de 3 pasos, checklist) sí habla en segunda persona a la persona afectada ("protegerte", "tus cuentas"), la única sección con lógica de audiencia excluye justamente ese ángulo.
3. **Solo 2 piezas de contenido en toda la página varían por audiencia** — la proporción más baja detectada hasta ahora entre las 8 temáticas auditadas (comparable a `hiperconectividad-digital` e `ia-etica-ciudadania`, pero aún menor).
4. **No usa `resolveTexto` ni `<NotaAudiencia>`** pese a que los nombres de campo (`notaDocente`/`notaFamilias`) imitan la convención `AudienciaNotas`/Group B documentada en CLAUDE.md — el mecanismo real es un ternario manual binario sin el comportamiento de fallback/ocultamiento que sí tiene el componente compartido. Mismo patrón de "naming similar pero implementación distinta" ya detectado en `estafas-digitales` con `AULA_ROL`.
5. **El párrafo del Hero intenta cubrir 3 audiencias distintas en un solo texto fijo** ("Si sos docente, este mismo protocolo te sirve para vos y también para acompañar a una colega, a una alumna o a la familia de un estudiante") — funciona como generalización universal en vez de usar el mecanismo de audiencia de la plataforma, a diferencia del patrón de variantes explícitas por audiencia usado en la mayoría de las demás temáticas.
6. **El header del carrusel es fijo, sin variante de audiencia** ("Material para el aula") — mismo patrón de inconsistencia ya señalado en las auditorías de `alfabetizacion-mediatica` y `estafas-digitales`.
7. **Es la única temática auditada donde el listado final de fuentes reutiliza directamente los mismos objetos citados inline** (no hay ningún array paralelo de "labels" resumidos) — por diseño, no puede haber discrepancia entre lo citado en el cuerpo y lo listado al final, a diferencia de la inconsistencia repetida en 4 de las 7 auditorías anteriores.
8. **Tiene checklist interactivo persistente** (5 ítems) — a diferencia de `ia-etica-ciudadania` y `estafas-digitales`, que no tienen ninguno — y además un botón único en el sitio auditado hasta ahora: "Descargar Plan" que genera un archivo `.txt` combinando checklist + plantilla de denuncia, funcionalidad que no existe en ninguna otra temática revisada.
9. **Ejercicio práctico con valor de ejemplo hardcodeado** (`https://instagram.com/usuario_agresor123`) en el Paso 2 — es un input de solo lectura, no editable, así que funciona más como ilustración visual de "así se ve una URL de perfil" que como campo de trabajo real; vale la pena decidir en el rediseño si conviene hacerlo editable para que la persona pegue su propio caso.
10. **Ninguna fuente está marcada `unverified: true`** — es una de las pocas temáticas del sitio sin ninguna cita "sin confirmar", lo cual habla bien del rigor de esta página en particular, pero contrasta con el patrón de transparencia sobre fuentes dudosas visto en otras temáticas (que sí señalan explícitamente estadísticas de segunda mano).
11. **La Historia de Olimpia Coral Melo es la narrativa biográfica más extensa y elaborada de todo el sitio auditado** (un párrafo de storytelling completo con arco narrativo: descubrimiento → denuncia frustrada → activismo → resultado legal → reconocimiento internacional) — un tratamiento narrativo distinto al resto de las citas/datos del sitio, que suelen ser afirmaciones más breves y directas.
