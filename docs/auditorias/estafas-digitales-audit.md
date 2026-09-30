# Auditoría de contenido — Estafas Digitales

Base para rediseño. Recorrido completo de `app/estafas-digitales/estafas-digitales-content.tsx` (1603 líneas, único archivo — no hay `components/estafas-digitales/` ni subcomponentes de sección) y `lib/estafas-digitales-content.ts` (84 líneas, solo los campos con variante de audiencia). Solo lectura, nada modificado.

Ruta: `/estafas-digitales`. Título de página: "Estafas Digitales - Cómo Protegerte | José Farhat". `Navbar`/`Footer`/`BackToDashboardButton` viven en `page.tsx` (no en el content file, a diferencia de otras temáticas). Layout: scroll continuo de 11 secciones numeradas internamente en comentarios de código (no visibles al usuario como números de sección en pantalla, salvo algunas anclas de navegación rápida). Barra de progreso de lectura fija superior (`scaleX` vinculado a `scrollYProgress`) + botón flotante "Volver Arriba" que aparece tras 400px de scroll — ambos elementos propios de esta temática. Progreso vía `useTematicaProgress` (tematicaId `estafas-digitales`) **sin `computeProgress`/checklist** — como `ia-etica-ciudadania`, el único mecanismo de progreso es el botón manual `TematicaCompletarButton`.

**El propio `lib/estafas-digitales-content.ts` documenta su origen atípico** (comentario de cabecera): a diferencia del resto del Grupo B (Group B = patrón `NotaAudiencia`), esta temática no tenía `lib/*.ts` propio — todo su contenido vivía inline en el content file, y solo se extrajeron a `lib/` los campos que necesitaban variar por audiencia (no una migración completa del archivo).

**Corrección importante respecto de la clasificación previa de esta temática** (inventario general): el código real usa `AULA_ROL.notaDocente`/`AULA_ROL.notaFamilias` resueltos con un **ternario inline** (`audienciaActual === "familias" ? AULA_ROL.notaFamilias : AULA_ROL.notaDocente`, línea 1178), **no** a través del componente compartido `<NotaAudiencia>` (`components/nota-audiencia.tsx`) — no hay import de `NotaAudiencia` en todo el archivo. El patrón de datos (`notaDocente`/`notaFamilias`, sin fallback si no hay audiencia seleccionada — cae a `notaDocente`) es idéntico en forma al de `AudienciaNotas`/Group B documentado en CLAUDE.md, pero el renderizado real es un ternario manual, no el componente `<NotaAudiencia>`. Se documenta este matiz en detalle en la sección "AULA_ROL" más abajo y en los hallazgos.

**No usa `SourceCite` en ningún punto** — a diferencia de `ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `alfabetizacion-digital` y `alfabetizacion-mediatica` (que sí tienen un componente `SourceCite` propio con badge de "sin verificar"/link externo). Las fuentes acá se citan de 2 formas: (a) mención inline con nombre de la institución + link "Portal Oficial X" como botón, y (b) un bloque final "Centro de Recursos y Fuentes Oficiales Citadas" con 4 tarjetas-link. Ninguna fuente de esta temática está marcada como `unverified` ni hay ningún dato presentado como dudoso — a diferencia de casi todas las demás temáticas auditadas, que sí señalan explícitamente citas de segunda mano o sin confirmar.

Patrón de audiencia: **Mixto Group A + Group B** (único caso con ambos a la vez, confirmado). Group A real: `ROL_SECCION_BADGE`, `ROL_SECCION_TITULO`, `PEDAGOGIA_CUIDADO_SUBTITULO`, `PEDAGOGIA_CUIDADO_PARRAFO_PRE`/`POST`, `PEDAGOGIA_CUIDADO_BULLET2`, `PROTOCOLO_TITULO`, `PROTOCOLO_PASOS_TEXTO` (todos usan `resolveTexto`/`t()`). Group B (por estructura de datos, aunque renderizado con ternario manual en vez de `<NotaAudiencia>`): `AULA_ROL`. Todo el contenido variable por audiencia está concentrado en una sola sección ("Qué significa para el aula") — las 10 secciones restantes son 100% fijas, sin ninguna mención condicionada a docentes/familias.

---

## Sección 1 · Hero e Impacto Educativo 2026 (sin ancla `id`)

Badge (fijo): "Aumento de amenazas digitales en 2026 — Inteligencia Artificial y Fraudes Híbridos"

**H1 (fijo):** "Prevenite de las Estafas Digitales"

**Párrafo intro (fijo, sin variante de audiencia pese a que la temática está clasificada para docentes Y familias):**
> "El acelerado despliegue de herramientas de Inteligencia Artificial (como la clonación de voz en tiempo real y la suplantación automatizada) ha sofisticado los fraudes cibernéticos. Tus estudiantes —que operan cotidianamente con billeteras digitales como Mercado Pago, Cuenta DNI, MODO o Ualá— constituyen un blanco directo. Esta guía dota al cuerpo docente del marco conceptual, técnico y legal para anticipar engaños, proteger el entorno escolar y actuar institucionalmente con firmeza."

> Nota importante: este párrafo asume lector docente explícitamente ("tus estudiantes", "cuerpo docente", "entorno escolar") y **no tiene variante familias** — es texto fijo en JSX, no una constante `AudienciaTexto`. Un usuario que seleccione la audiencia "familias" ve este párrafo igual, con lenguaje 100% docente-voiced.

**Accesos rápidos (jump links, fijos):** #concepto, #amenazas, #emergencia, #aula, #recursos — íconos y colores distintos por sección (emergencia en rojo, aula en verde, recursos en rosa).

**Imagen decorativa:** foto de stock de Unsplash (`images.unsplash.com/photo-1550751827...`), alt "Ciberseguridad y protección digital en la comunidad educativa" — con badge flotante animado "Prevención Digital Activa · Formación continua para la comunidad docente" (también docente-voiced, fijo).

---

## Sección 2 · Marco Conceptual — La Ingeniería Social (`id="concepto"`)

Título: "La Ingeniería Social: El Ataque a la Confianza Humana". Intro (fija): "Lejos de tratarse de fallas técnicas en el software o de bugs de programación, las estafas digitales modernas son ataques premeditados a la psicología, la credulidad y las emociones de las personas."

**Cita académica destacada:**
> "El eslabón más vulnerable de cualquier cadena de seguridad no es el código ni los cortafuegos, sino el factor humano. Se pueden invertir millones en cifrado de última generación, pero si un atacante logra manipular a una persona para que entregue su clave, el sistema entero colapsa."
> — Kevin Mitnick, "Referente Internacional en Ciberseguridad & Autor de *The Art of Deception* (2002)"

### Elemento — Bento grid "Los 4 Motores Psicológicos del Engaño Digital" (`motoresPsicologicos`, fijo, sin cita)

| Motor | Frase señuelo | Descripción |
|---|---|---|
| Urgencia Artificial y Presión Temporal | "Tu cuenta caduca en 15 minutos" | "Forzar decisiones impulsivas en pocos segundos eliminando todo margen de reflexión o verificación cruzada. El atacante induce la ilusión de que no actuar inmediatamente provocará una pérdida irreparable." |
| Miedo e Intimidación | "Infracción judicial o embargo inminente" | "Alertas alarmistas sobre suspensiones bancarias, supuestos procesos legales o retención de compras. El estado de pánico bloquea la lucidez crítica y empuja a seguir las instrucciones del atacante." |
| Principio de Autoridad | "Soporte Técnico Oficial / Ministerio / Banco" | "Falsa representación institucional de personal directivo, mesas de ayuda o entes recaudadores. La tendencia a obedecer jerarquías reconocidas facilita la entrega de claves y tokens." |
| Recompensa y Curiosidad | "Crédito preaprobado o ítems exclusivos" | "Señuelos hiperatractivos como premios en efectivo, monedas virtuales de juegos masivos (Roblox, Fortnite), subsidios estafadores o becas que apelan al deseo o a la ingenuidad de los jóvenes." |

---

## Sección 3 · Historia y Evolución Tecnológica (sin ancla `id`)

Título: "Línea de Tiempo Interactiva del Engaño Digital" — pese al nombre "interactiva", es una grilla estática de 3 tarjetas, sin estado ni interacción real (no hay hover-reveal, click ni expansión). Intro: "Comprender la genealogía del fraude permite anticipar cómo las técnicas migran al compás de cada salto tecnológico."

**3 hitos temporales (fijos):**

### 1995 — Origen del Phishing (America Online / AOL)
> "Nacido en los grupos de chat de AOL. Es una derivación de **fishing** ('pescar' víctimas desprevenidas con carnadas digitales) combinada con el prefijo **'ph'** en tributo a los *phreaks* (piratas telefónicos de los años 70)."
> Carnada histórica: "Mensajes simulando ser administradores solicitando verificar tarjetas para no perder el acceso a la cuenta."

### 2000s — Mutación Móvil: Smishing & Vishing (Dispositivos Móviles)
> "Con la masificación del celular, el engaño migró del email hacia el bolsillo del usuario. Nacieron el **Smishing** (fraudes por SMS y WhatsApp) y el **Vishing** (Voice Phishing mediante llamadas telefónicas fraudulentas)."
> Canal predominante: "SMS sospechosos sobre paquetes retenidos o llamadas de supuestos empleados bancarios."

### 2026 — Fraudes Híbridos Sintéticos (IA Generativa & Deepfakes)
> "La Inteligencia Artificial permite la clonación de voz hiperrealista con solo 3 segundos de muestra de audio y la creación de mensajes sintéticos ultra personalizados adaptados a las redes sociales del estudiante."
> Desafío en las aulas: "Audios de WhatsApp imitando a la perfección la voz de familiares solicitando transferencias urgentes."

> Nota: la tercera tarjeta menciona "redes sociales del estudiante" y "Desafío en las aulas" como texto fijo — otra mención docente-voiced sin variante familias en una sección sin clasificación de audiencia.

---

## Sección 4 · Infografía Central con Lightbox (sin ancla `id`)

**Elemento interactivo — Infografía con lightbox de zoom/pan/pinch** (mismo mecanismo que las demás temáticas del sitio: zoom 1x-4x en pasos de 0.5, arrastre con mouse, gestos táctiles de pinch, scroll de mouse, cierre con Escape). Imagen: `/weekly-content/2026-W23/infografia 5.svg`, alt "Infografía interactiva sobre Estafas Digitales".

---

## Sección 5 · Radiografía del Riesgo Digital en Argentina (sin ancla `id`)

Título: "Radiografía del Riesgo Digital en Argentina". Intro: "Datos duros brindados por organismos oficiales de investigación judicial y regulación financiera del país."

**Tarjeta UFECI:**
> "**+34.000** denuncias tramitadas — La **Unidad Fiscal Especializada en Ciberdelincuencia (UFECI)** señala que los fraudes informáticos y accesos no autorizados encabezan el ranking de delitos cibernéticos en el país, registrando incrementos interanuales constantes superiores al 200%."
> Link: "Portal Oficial UFECI" → `https://www.fiscales.gob.ar/ciberdelincuencia/`

**Tarjeta BCRA:**
> "**#VosSosLaClave** Campaña BCRA — El **Banco Central de la República Argentina** exige autenticación reforzada en billeteras virtuales y homebanking, estableciendo recomendaciones críticas para resguardar CBU/CVU, tokens de seguridad y transferencias inmediatas."
> Link: "Prevención de Estafas Digitales BCRA" → `https://www.bcra.gob.ar/como-prevenir-estafas-virtuales/`

> Nota: ni la cifra "+34.000 denuncias" ni el "incrementos interanuales constantes superiores al 200%" tienen fecha/período específico citado (¿de qué año a qué año?) — a diferencia del rigor de otras temáticas del sitio que suelen incluir el año exacto del dato.

---

## Sección 6 · Las 3 Modalidades Principales de Estafa (`id="amenazas"`)

Título: "Las 3 Modalidades Principales de Estafa". Intro: "Reconocer los patrones visuales y de redacción de cada vector permite identificar maniobras de suplantación en segundos."

| Modalidad | Subtítulo | Descripción | Ejemplo real citado |
|---|---|---|---|
| Phishing | Suplantación por Correo Electrónico | "Diseños hiperrealistas que replican a la perfección páginas de login de bancos, redes sociales o plataformas de streaming. Los enlaces conducen a servidores fraudulentos destinados a capturar credenciales." | "Estimado cliente: Registramos accesos inusuales a su Home Banking. Verifique sus datos aquí para evitar la suspensión definitiva." |
| Smishing | SMS y Mensajería Instantánea | "Engaño directo al celular a través de WhatsApp o SMS. Explota la inmediatez de la mensajería móvil pidiendo validar códigos de 6 dígitos o abonar falsas tasas de envío." | "Correo Argentino: Tu paquete está retenido en depósito por falta de pago de tasa aduanera ($179). Regularizalo aquí: https://bit.ly/correo-pago" |
| Vishing | Voice Phishing y Llamadas con IA | "Llamadas telefónicas engañosas donde el atacante personifica a un operador bancario o técnico. Hoy en 2026, la IA permite clonar audios de voz hiperrealistas con apenas 3 segundos de muestra extraída de redes." | "Hola, habla el equipo de seguridad oficial. Detectamos un intento de transferencia extraña. Acérquese al cajero o dicteme su Token de validación." |

Sin variante de audiencia, sin cita/fuente por modalidad (ejemplos ilustrativos ficticios, no casos documentados con fuente).

---

## Sección 7 · Protocolo de Emergencia en 5 Minutos (`id="emergencia"`)

Título: "¿Caíste en la trampa? Protocolo en 5 Minutos". Intro: "La velocidad de reacción tras un engaño es la variable determinante para impedir el control de tus datos o la sustracción de fondos." Sin variante de audiencia. Fondo rojo/rosa de alto contraste (única sección con paleta de "alerta" de todo el sitio en esta temática).

**5 pasos cronometrados (`emergencySteps`):**

| Minuto | Título | Descripción |
|---|---|---|
| 0 | Respirar | "Mantener la calma. Actuar con frialdad y rapidez técnica para mitigar cualquier daño patrimonial o de privacidad." |
| 1 | Desconectar | "Apagar inmediatamente el Wi-Fi y los datos móviles del dispositivo. Interrumpir el flujo de datos con el servidor atacante." |
| 2 | Cambiar | "Modificar las contraseñas maestras, comenzando prioritariamente por el correo electrónico de recuperación principal." |
| 3 | Activar 2FA | "Habilitar la verificación en dos pasos (autenticador de Google/Microsoft) en todas las cuentas y billeteras digitales." |
| 4-5 | Revisar y Avisar | "Contactar a la entidad financiera o soporte de la billetera digital para congelar tarjetas y alertar a la red de contactos directos." |

---

## Sección 8 · Qué Significa para el Aula — Guía Docente (`id="aula"`)

**Única sección con contenido variable por audiencia de toda la temática.** Combina Group A (`resolveTexto`) para varios campos y el patrón `AULA_ROL` (estructuralmente Group B, renderizado con ternario manual).

### Encabezado de sección (Group A — `resolveTexto`)

| Campo | Docentes | Familias |
|---|---|---|
| Badge | "Abordaje Pedagógico" | "Abordaje en Casa" |
| Título | "El Rol Docente: De la Prohibición a la Pausa Cognitiva" | "El Rol de la Familia: De la Prohibición a la Pausa Cognitiva" |

### AULA_ROL — contenido específico (patrón Group B, renderizado con ternario manual `audienciaActual === "familias" ? AULA_ROL.notaFamilias : AULA_ROL.notaDocente`, sin fallback explícito adicional — cualquier audiencia que no sea exactamente `"familias"` cae a `notaDocente`)

| Docentes (`notaDocente`) | Familias (`notaFamilias`) |
|---|---|
| "La prohibición estricta de las pantallas incrementa el secretismo e impide que un alumno afectado busque ayuda institucional oportuna por temor a ser sancionado." | "La prohibición estricta de las pantallas incrementa el secretismo e impide que un hijo o hija afectado busque ayuda a tiempo por miedo a ser castigado." |

Este es el párrafo que aparece inmediatamente debajo del título de la sección, funcionando como su bajada/subtítulo explicativo.

### Tarjeta "Pedagogía del Cuidado" (Group A — mezcla de campos fijos y variables)

Badge fijo: "Pedagogía del Cuidado".

| Campo | Docentes | Familias |
|---|---|---|
| Subtítulo | "Promover la Pausa Cognitiva en la Escuela" | "Promover la Pausa Cognitiva en Casa" |

**Párrafo principal** (compuesto de 3 partes: pre-texto por audiencia + `<strong>pausa cognitiva</strong>` fijo + post-texto por audiencia — separación documentada en el código para preservar el negrita del término):

| Docentes | Familias |
|---|---|
| "La respuesta didáctica más efectiva ante la urgencia artificial del delito es entrenar la **pausa cognitiva**: ante cualquier notificación que exija clave, dinero o decisiones inmediatas, la consigna del aula es pausar, desconfiar y validar con un adulto de confianza." | "La respuesta más efectiva ante la urgencia artificial del delito es entrenar la **pausa cognitiva**: ante cualquier notificación que exija clave, dinero o decisiones inmediatas, la consigna en casa es pausar, desconfiar y validar con un adulto de confianza." |

**2 bullets de la tarjeta** (el 1º fijo, el 2º con variante de audiencia):

1. *(fijo)* "**Desdramatizar el error:** Dejar en claro que caer en una trampa digital no es motivo de castigo, sino una situación que requiere contención inmediata."
2. Docentes: "**Educación entre pares:** Analizar capturas de pantalla de fraudes reales en talleres de debate escolar para aguzar el sentido crítico." / Familias: "**Conversarlo en casa:** Analizar juntos capturas de pantalla de fraudes reales que hayan visto circular, para aguzar el sentido crítico en familia."

### Protocolo de Acción — "Protocolo de Acción Escolar ante un Estudiante Damnificado" / "Protocolo de Acción en Casa ante un Hijo o Hija Damnificado/a" (título por audiencia)

4 pasos, definidos en un array fijo `protocoloEscolar` (paso, título, ícono, badge, descripción base docente-voiced), donde **3 de los 4 pasos (01, 03, 04) sobrescriben su descripción con la variante de audiencia de `PROTOCOLO_PASOS_TEXTO`, y el paso 02 se queda siempre con su descripción fija original** (sin variante familias, pese a que el resto de la sección sí adapta):

| Paso | Título | Badge | Descripción — Docentes | Descripción — Familias |
|---|---|---|---|---|
| 01 | Escucha y Desculpabilización | Contención Humana | "Recibir y alojar al estudiante sin emitir juzgamientos ni retos. Comprender que es víctima de una maniobra de ingeniería social diseñada profesionalmente para engañar." | "Recibir y escuchar a tu hijo o hija sin juzgar ni retar. Comprender que es víctima de una maniobra de ingeniería social diseñada profesionalmente para engañar." |
| 02 | Preservación de Evidencia Digital | Resguardo Jurídico | *(sin variante — texto fijo para ambas audiencias)* "Tomar capturas de pantalla completas (mostrando hora, número de remitente, URLs y comprobantes) antes de borrar la conversación o bloquear al atacante." | *(idéntico al de docentes)* |
| 03 | Aislamiento Inmediato de Sesiones | Mitigación Técnica | "Cerrar y desvincular inmediatamente las sesiones de correo o redes sociales que hayan quedado abiertas en computadoras o tablets del establecimiento escolar." | "Cerrar y desvincular inmediatamente las sesiones de correo o redes sociales que hayan quedado abiertas en computadoras o tablets de la casa." |
| 04 | Acompañamiento y Articulación | Derivación Formal | "Notificar a los adultos responsables del estudiante, registrar el hecho en el acta institucional y canalizar la consulta formal ante los organismos de protección y ciberdelito." | "Si es menor de edad, hablarlo también con la escuela para que esté al tanto, y canalizar la consulta formal ante los organismos de protección y ciberdelito (UFECI, División Delitos Telemáticos)." |

> Nota: el título de cada paso ("Escucha y Desculpabilización", etc.) y su badge ("Contención Humana", etc.) son siempre fijos — solo la descripción larga varía por audiencia. El paso 04 en la variante familias es el único que nombra explícitamente los organismos de denuncia (UFECI, División Delitos Telemáticos) dentro del propio texto — la variante docente los omite ahí porque ya aparecen en la Sección 10.

---

## Sección 9 · Material Didáctico para el Aula (Carrusel Interactivo, sin ancla `id`)

**Elemento interactivo — Carrusel de 6 láminas** (`/weekly-content/2026-W23/carrusel/1.svg` a `6.svg`), mismo mecanismo de flechas/dots/`AnimatePresence` que en las otras temáticas. Header fijo, sin variante de audiencia: "Recurso Didáctico Proyectable · Láminas Educativas para Clases y Talleres" — a diferencia de los carruseles de `ciudadania-digital`/`huella-digital`/`hiperconectividad-digital`, que sí adaptan el label/título según audiencia.

---

## Sección 10 · Canales Oficiales de Denuncia en Argentina (`id="canales"`)

Título: "Canales Oficiales de Denuncia en Argentina". Intro: "Ante cualquier evento de estafa cibernética o vulneración digital, la Argentina dispone de organismos especializados para orientar y tomar denuncias formales." Sin variante de audiencia — es contenido de utilidad práctica igual de válido para cualquier lector.

**6 líneas de ayuda/denuncia (`helpLines`), la sección de utilidad práctica más completa de todo el sitio auditado hasta ahora:**

| Organismo | Subtítulo | Teléfono | Email | Dirección | Web | Descripción | Badge |
|---|---|---|---|---|---|---|---|
| UFECI — Fiscalía Especializada en Ciberdelincuencia | Ministerio Público Fiscal de la Nación | (54-11) 5071-0040 | denunciasufeci@mpf.gov.ar | Sarmiento 663, Piso 6, CABA | https://www.fiscales.gob.ar/ciberdelincuencia/ | "Organismo especializado para la investigación judicial de fraudes informáticos, clonación de identidades, accesos ilegítimos y grooming a nivel nacional." | Alcance Nacional |
| División Delitos Telemáticos — Policía de Tucumán | Policía de la Provincia de Tucumán | 381-438-8017 | — | Junín 850, 1° Piso, San Miguel de Tucumán | — | "Unidad policial técnico-operativa para la recepción presencial o telefónica de denuncias sobre estafas digitales y delitos cibernéticos en Tucumán." | Tucumán |
| Línea 149 — CENAVID | Ministerio de Justicia y Derechos Humanos | 149 | — | Atención Gratuita las 24 horas | https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia | "Centro de Asistencia a las Víctimas de Delitos. Brinda orientación legal, contención psicológica y acompañamiento interdisciplinario gratuito." | 24/7 Gratuito |
| Línea 137 — Violencia Digital y Familiar | Programa Las Víctimas contra las Violencias | 137 | WhatsApp: 11-3133-1000 | Atención Nacional Telefónica y Digital | https://www.argentina.gob.ar/justicia/linea137 | "Asistencia profesional y contención ante casos de acoso digital, extorsión virtual, difusión no consentida de imágenes y violencia en redes." | Contención Inmediata |
| Línea 102 — Derechos de Niñas, Niños y Adolescentes | Sistema de Protección Integral | 102 | — | Atención Jurisdiccional Gratuita | — | "Servicio telefónico gratuito y confidencial de escucha, contención y orientación sobre vulneración de derechos de la infancia y adolescencia." | Protección Infancias |
| Línea 101 / Comisaría Jurisdiccional | Emergencias Policiales | 101 | — | Comisaría de tu localidad | — | "Para situaciones de emergencia o radicación de la denuncia policial presencial con entrega de constancia o acta formal escrita." | Emergencias |

Esta sección referencia explícitamente a UFECI y "División Delitos Telemáticos" desde el paso 04 del Protocolo de Acción (variante familias), conectando ambas secciones.

---

## Sección 11 · Centro de Recursos y Fuentes Oficiales Citadas (`id="recursos"`)

Título: "Centro de Recursos y Fuentes Oficiales Citadas". Intro: "Enlaces directos a los portales oficiales y obras bibliográficas que sustentan el marco conceptual de esta plataforma." Sin variante de audiencia.

**4 fuentes citadas (`fuentesCitadas`) — listado completo, tal cual aparece en el código:**

| Título | Entidad | URL | Descripción |
|---|---|---|---|
| UFECI — Reportes de Ciberdelincuencia en Argentina | Unidad Fiscal Especializada en Ciberdelincuencia (MPF) | https://www.fiscales.gob.ar/ciberdelincuencia/ | "Informes y estadísticas judiciales sobre la evolución de delitos informáticos, accesos ilegítimos y estafas bancarias en la Argentina." |
| BCRA — Campaña #VosSosLaClave | Banco Central de la República Argentina | https://www.bcra.gob.ar/como-prevenir-estafas-virtuales/ | "Normativas de seguridad financiera, recomendaciones operativas para el uso seguro de homebanking, CBU/CVU, transferencias y billeteras digitales." |
| CENAVID — Asistencia a Víctimas de Delitos | Ministerio de Justicia y Derechos Humanos de la Nación | https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia | "Portal oficial de orientación jurídica y contención psicosocial para ciudadanas y ciudadanos afectados por delitos digitales." |
| Mitnick, K. & Simon, W. (2002) | *The Art of Deception: Controlling the Human Element of Security* | https://www.wiley.com/en-us/The+Art+of+Deception%3A+Controlling+the+Human+Element+of+Security-p-9780471237129 | "Obra académica referente sobre Ingeniería Social donde se teoriza que el factor humano constituye el eslabón más vulnerable de cualquier sistema de seguridad." |

> Nota: este listado tiene solo 4 entradas, la menor cantidad de fuentes formales de las temáticas auditadas hasta ahora — pero, a diferencia de otras temáticas donde faltan fuentes citadas inline en el listado final, acá las 4 SÍ coinciden con las menciones inline del cuerpo (UFECI y BCRA aparecen también en la Sección 5, CENAVID en la Sección 10, Mitnick en la Sección 2) — ninguna fuente mencionada en el cuerpo queda fuera del listado. La Línea 137, Línea 102, Línea 101 y la División Delitos Telemáticos de Tucumán (Sección 10) no tienen entrada en este listado — son líneas de ayuda/contacto, no "fuentes citadas" en sentido documental, por lo que su ausencia es coherente con el propósito de la sección.

---

## Resumen de hallazgos para el rediseño

1. **El Hero (Sección 1) y la tarjeta de "Fraudes Híbridos Sintéticos" (Sección 3) están escritos en lenguaje 100% docente-voiced sin ninguna variante de audiencia**, pese a que la temática está clasificada para docentes Y familias (`lib/tematicas-data.ts`) — el usuario que selecciona "familias" lee "tus estudiantes", "cuerpo docente", "entorno escolar" en el párrafo más prominente de toda la página (el Hero) y "redes sociales del estudiante"/"Desafío en las aulas" en la línea de tiempo histórica.
2. **Corrección de clasificación:** `AULA_ROL` no se consume vía el componente compartido `<NotaAudiencia>` (Group B canónico) sino con un ternario manual inline en el propio componente — mismo resultado visual, pero no reutiliza el componente ni su comportamiento de "sin fallback, se oculta si no hay nota" (acá siempre hay valor, porque cae a `notaDocente`). Si el rediseño busca consistencia estructural con el resto del sitio, convendría migrar esto al componente real `<NotaAudiencia>`.
3. **1 de los 4 pasos del Protocolo de Acción (paso 02, "Preservación de Evidencia Digital") no tiene variante familias** pese a que sus 3 pasos hermanos sí la tienen — inconsistencia dentro de la única sección que sí trabaja el patrón de audiencia.
4. **Es una de las 2 únicas temáticas auditadas sin ningún `SourceCite`** (junto con `ia-etica-ciudadania`) — las fuentes se mencionan con links "Portal Oficial X" inline y un bloque final de 4 tarjetas, sin el patrón de cita+autor+nota+badge "sin verificar" del resto del sitio.
5. **Es de las pocas temáticas donde el listado final de fuentes SÍ coincide completamente con las citas inline** — a diferencia de las inconsistencias detectadas en 4 de las 6 auditorías anteriores (`ciudadania-digital`, `huella-digital`, `hiperconectividad-digital`, `ia-etica-ciudadania`), acá no falta ninguna fuente mencionada en el cuerpo.
6. **La cifra "+34.000 denuncias tramitadas" y "incrementos interanuales superiores al 200%" no tienen período/fecha específica** — a diferencia del rigor de citar años exactos visto en otras temáticas (p. ej. `alfabetizacion-digital` con INDEC Q4 2023), acá el dato queda sin acotar temporalmente, dificultando su verificación o actualización futura.
7. **Es la sección de utilidad práctica/emergencia más completa del sitio auditado hasta ahora** (6 líneas de ayuda con teléfono, email, dirección y web cuando corresponde) — más extensa que la única mención de Línea 144 en `ia-etica-ciudadania`. Vale la pena preservar este nivel de detalle en el rediseño y considerar si otras temáticas de riesgo (violencia digital, ciberacoso) deberían tener un tratamiento igual de exhaustivo.
8. **La "Línea de Tiempo Interactiva" (Sección 3) no tiene ninguna interacción real** — es una grilla estática de 3 tarjetas pese a llamarse "interactiva" en el título visible; si el rediseño mantiene el nombre, convendría agregar la interacción prometida (expandir/hover-reveal) o renombrar la sección.
9. **El header del carrusel de recursos (Sección 9) es fijo, sin variante de audiencia** ("Recurso Didáctico Proyectable · Láminas Educativas para Clases y Talleres") — mismo patrón de inconsistencia ya señalado en la auditoría de `alfabetizacion-mediatica` respecto de sus carruseles hermanos que sí traducen.
10. **Es la única de las temáticas auditadas con imagen de stock en el Hero** (aparte de `hiperconectividad-digital`, que tiene una en la sección de Identidad) — vale la pena decidir en el rediseño si se reemplaza por una infografía o ilustración propia, consistente con el resto del sitio.
11. **Sin checklist interactivo** (como `ia-etica-ciudadania`) — el único progreso registrado es el botón manual de "marcar como completada", sin ningún ejercicio de autoevaluación pese a que el contenido (motores psicológicos, modalidades de estafa, protocolo de emergencia) se presta naturalmente a un checklist de tipo "¿reconocés estas señales?".
