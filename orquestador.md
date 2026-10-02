# ORQUESTADOR — Dimensión 3: Socio-Comunicacional e Identidad

MODO: AUTOMATICO
(AUTOMATICO: avanzás solo cuando todo está OK. PAUSA: me pedís confirmación antes de cada delegación.)

Sos el orquestador. NO escribís código ni editás archivos de la página. Tu trabajo es delegar, de a una y en orden, las 5 tareas del ANEXO a dos sesiones de Claude Code llamadas developer1 y developer2, y verificar el resultado de cada una antes de delegar la siguiente.

IMPORTANTE: el ANEXO (al final de este archivo) contiene los prompts. NO los ejecutes vos, no los resumas ni los retipees: son texto para las sesiones developer y los extrae el script, tal cual.

## Reglas
1. De a una tarea por vez. No delegás la siguiente hasta que la anterior terminó y vos verificaste su resultado.
2. Respondeme en español y con resúmenes de 5 líneas máximo por tarea: qué reportó el developer, qué verificaste vos (git status, npx tsc --noEmit) y si avanzás.
3. Nunca hagas push. No hagas commit salvo los checkpoints de la sección de checkpoints.
4. Frená y avisame, sin seguir, si:
   - el archivo .exit de la tarea contiene algo distinto de 0, o is_error es true, o el .err tiene algo relevante;
   - el developer terminó con una pregunta o dice que frenó por una ambigüedad: mostrámela tal cual, esperá mi respuesta y reanudá a ESE developer con una tarea de texto libre (ver "Instrucciones libres") que contenga mi respuesta;
   - se detuvo por falta de permisos: decime qué comando faltó y esperá;
   - el informe de fidelidad o cobertura lista diferencias de contenido que el propio prompt no declara como intencionales;
   - git status muestra cambios en archivos que esa tarea no permite tocar;
   - tras la primera delegación a un developer no existe orquestacion/sesiones/<developer>.id.

## Mapa de delegación (orden estricto)
| Orden | Prompt | Sesión | Comando |
|---|---|---|---|
| 1 | Prompt 1 (estructura) | developer1 | ./orquestacion/delegar.sh developer1 1 |
| 2 | Prompt 2 (contenido 1 a 5) | developer1 | ./orquestacion/delegar.sh developer1 2 |
| 3 | Prompt 3 (contenido 6 a 10) | developer1 | ./orquestacion/delegar.sh developer1 3 |
| 4 | Prompt 4 (verificación) | developer2 | ./orquestacion/delegar.sh developer2 4 1,2,3 |
| 5 | Prompt 5 (enlaces cruzados y CLAUDE.md) | developer1 | ./orquestacion/delegar.sh developer1 5 |

Entre el 4 y el 5: si developer2 arregló algo o dejó pendientes que son bugs, pasáselos a developer1 como instrucción libre para que los corrija, y pedile a developer2 (instrucción libre) que re-corra solo las verificaciones que fallaron. Antes del 5, delegá a developer1 una instrucción libre: "developer2 verificó y pudo haber corregido archivos: corré git status y git diff para ver los cambios nuevos antes de seguir", y recién después el Prompt 5.

## Pre-vuelo (antes de la tarea 1)
- Estás en la raíz del proyecto (donde está CLAUDE.md) y el árbol de git está limpio. Si no, frená.
- Creá y pasate a la rama `dimension-3-socio-comunicacional`.
- Existe content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx. Si no, frená.
- node_modules instalado y Playwright disponible. Si falta algo, decime qué.
- Si es una dimensión nueva y existe orquestacion/sesiones/, borrá los .id para que arranquen sesiones nuevas.
- Existe orquestacion/delegar.sh. Si no, crealo con el contenido de la sección SCRIPT y dale permiso de ejecución.

## Cómo delegar
Corré el comando de la tabla EN SEGUNDO PLANO (cada tarea tarda varios minutos por builds y Playwright). Esperá a que exista orquestacion/logs/<developer>-<N>.exit (por ejemplo developer1-1.exit) y recién ahí leé el campo `result` de orquestacion/logs/<developer>-<N>.json. No lo corras en primer plano: el comando se cortaría por tiempo.

## Instrucciones libres (correcciones o respuestas mías)
1. Escribí el texto en orquestacion/tarea-<etiqueta>.md (por ejemplo tarea-fix1.md).
2. Corré en segundo plano: ./orquestacion/delegar.sh <developer> <etiqueta> (la etiqueta NO puede ser un número).
3. Esperá y leé el resultado en orquestacion/logs/<developer>-<etiqueta>.json.

## Qué verificar para dar el OK
- Prompt 1: tsc y build OK; `git status` muestra solo archivos nuevos y lib/tematicas-data.ts modificado.
- Prompt 2 y 3: el developer reporta el chequeo de fidelidad sin diferencias de contenido (solo formato) y la persistencia probada.
- Prompt 4: informe de cobertura sin faltantes, 10 fichas presentes y ninguna repetida en las otras páginas, build OK. Si algo quedó sin arreglar por ser decisión de contenido, frená y mostrámelo.
- Prompt 5: build OK y diff solo en lo permitido (tablas del módulo madre, bloque de cierre de Cognitivo-Intelectual e Informacional y CLAUDE.md).

## Checkpoints (opcional: borrá esta sección si no los querés)
Tras dar el OK a las tareas 1, 2, 3 y 4, hacé un commit LOCAL: `git add -A && git commit -m "checkpoint: dimension 3, prompt N"`. Después del Prompt 5 NO commitees: dejá todo sin commitear para que yo revise el diff. Si algo sale mal, volver al checkpoint anterior con `git reset --hard` solo con mi OK explícito.

## Al terminar
Resumen final: tareas completadas, lo que verificaste, pendientes y `git status` actual. Recordame que las sesiones se reabren con `claude --resume developer1` y `claude --resume developer2`.

## SCRIPT (orquestacion/delegar.sh)
```bash
#!/usr/bin/env bash
# uso: ./orquestacion/delegar.sh <developer1|developer2> <N | etiqueta> [refs]
#   N        -> ejecuta el prompt N de orquestador.md
#   etiqueta -> ejecuta el texto de orquestacion/tarea-<etiqueta>.md (instrucción libre)
#   refs     -> solo con N: prompts de referencia (no se ejecutan), ej: 1,2,3
set -uo pipefail
DEV="${1:?developer}"; ET="${2:?numero de prompt o etiqueta}"; REFS="${3:-}"
D=orquestacion; mkdir -p "$D/logs" "$D/sesiones" "$D/prompts"
TAG="${DEV}-${ET}"
IN="$D/prompts/${TAG}.md"; OUT="$D/logs/${TAG}.json"; ERR="$D/logs/${TAG}.err"; EXIT="$D/logs/${TAG}.exit"
rm -f "$EXIT"

extraer() {
  awk -v n="$1" '{sub(/\r$/,"")} $0=="<<<PROMPT_" n ">>>"{on=1;next} $0=="<<<FIN_PROMPT_" n ">>>"{on=0} on' orquestador.md
}

: > "$IN"
if [[ "$ET" =~ ^[0-9]+$ ]]; then
  if [ -n "$REFS" ]; then
    echo "## REFERENCIA (NO EJECUTAR). Otra sesión ya ejecutó estos prompts; usalos solo para saber qué debe estar implementado." >> "$IN"
    IFS=',' read -ra R <<< "$REFS"
    for r in "${R[@]}"; do printf '\n### Prompt %s (referencia)\n' "$r" >> "$IN"; extraer "$r" >> "$IN"; done
    printf '\n## TAREA A EJECUTAR AHORA: prompt %s\n' "$ET" >> "$IN"
  fi
  extraer "$ET" >> "$IN"
else
  cp "$D/tarea-${ET}.md" "$IN" 2>/dev/null || true
fi
if [ ! -s "$IN" ]; then echo "tarea vacía o no encontrada" > "$ERR"; echo 2 > "$EXIT"; exit 2; fi

# Permisos: acceptEdits + comandos permitidos. Si una sesión se frena por permisos,
# agregá acá lo que falte (la sintaxis puede variar según tu versión de Claude Code).
ALLOWED=("Bash(npm *)" "Bash(npx *)" "Bash(node *)" "Bash(python3 *)" "Bash(git status*)" "Bash(git diff*)" "Bash(git log*)" "Bash(ls *)" "Bash(cat *)" "Bash(grep *)" "Bash(mkdir *)" "Bash(cp *)" "Bash(pandoc *)" "Bash(unzip *)")
COMMON=(--permission-mode acceptEdits --allowedTools "${ALLOWED[@]}" --max-turns 300 --output-format json)
INSTR="Ejecutá, tal cual y sin resumirla, la tarea completa que recibís por entrada estándar. Las secciones marcadas REFERENCIA son solo contexto: no las ejecutes."
IDF="$D/sesiones/${DEV}.id"

if [ -s "$IDF" ]; then
  claude -p "$INSTR" --resume "$(cat "$IDF")" "${COMMON[@]}" < "$IN" > "$OUT" 2> "$ERR"
else
  claude -p "$INSTR" --name "$DEV" "${COMMON[@]}" < "$IN" > "$OUT" 2> "$ERR"
fi
CODE=$?

if [ ! -s "$IDF" ]; then
  node -e 'try{const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));if(j.session_id)process.stdout.write(j.session_id)}catch(e){}' "$OUT" > "$IDF" 2>/dev/null
  [ -s "$IDF" ] || rm -f "$IDF"
fi
echo "$CODE" > "$EXIT"
```

## ANEXO — PROMPTS (no ejecutar; solo los lee el script)

<<<PROMPT_1>>>
Abrí la carpeta raíz del proyecto josefarhat.com (donde está CLAUDE.md).

Vamos a crear una página nueva: /tematicas/socio-comunicacional-e-identidad. Es la tercera temática por dimensión del Poliedro (Capítulo 17 del manual) y repite el patrón de /tematicas/instrumental-y-acceso y /tematicas/cognitivo-intelectual-e-informacional: sidebar sticky con scroll-spy en desktop, barra horizontal en mobile, scroll continuo, estado en Zustand + localStorage, audiencias con fallback a docentes. Este es el Prompt 1 de 5: solo estructura, sidebar, store, alta en el listado y componentes. SIN contenido de texto todavía (va en los Prompts 2 y 3).

## Reglas generales (valen para los 5 prompts de esta página)
- Todo se hace COPIANDO y adaptando los componentes de components/cognitivo-informacional/ (toc-nav.tsx, ui.tsx, ficha-aula.tsx y el resto) a una carpeta nueva components/socio-comunicacional/. No importes componentes de otras carpetas de páginas y NO modifiques nada de /ciudadania-digital, /tematicas/instrumental-y-acceso ni /tematicas/cognitivo-intelectual-e-informacional en los Prompts 1 a 4 (los enlaces cruzados se hacen en el Prompt 5).
- Mismo tema visual, layout y manejo de Navbar/Footer que /tematicas/cognitivo-intelectual-e-informacional.
- No toques /huella-digital ni /alfabetizacion-mediatica, ni enlaces a ellas, aunque se superpongan en tema.
- En ningún lugar de la página debe aparecer "Paso 1", "Paso 2", etc. Las secciones se nombran solo por el nombre del sidebar. (La expresión "Paso a paso:" dentro de las fichas es contenido del docx y sí puede aparecer.)
- No hay línea de duración ni tiempo estimado de la página. Sin SourceCite ni links a fuentes externas: las referencias van como texto plano. Sin imágenes ni PDFs.
- No se toca ninguna base de datos: todo el estado es localStorage vía Zustand.

## Tarea 0 — Archivo fuente
Verificá que existe content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx. Si no está, frená y avisame. Todavía no cargues su contenido.

## Tarea 1 — Ruta
Crear app/tematicas/socio-comunicacional-e-identidad/page.tsx (server component con metadata) + el componente de contenido cliente, con el patrón de dos archivos de /tematicas/cognitivo-intelectual-e-informacional.
Metadata:
- title: Socio-Comunicacional e Identidad: de publicar a convivir
- description: La tercera dimensión del Poliedro de Ciudadanía Digital: cómo anticipar la audiencia, la persistencia y la circulación de lo que decimos, distinguir la netiqueta de la convivencia y aprender a reparar.

## Tarea 2 — Sidebar (10 anclas, en este orden exacto, mismo mecanismo de toc-nav.tsx)
1. Introducción (id: introduccion)
2. Lo que vas a lograr (id: lo-que-vas-a-lograr)
3. Por qué importa (id: por-que-importa)
4. De dónde partimos (id: de-donde-partimos)
5. Identidad y convivencia (id: identidad-y-convivencia)
6. Un caso resuelto (id: un-caso-resuelto)
7. Practicá vos (id: practica-vos)
8. Poné a prueba lo aprendido (id: pone-a-prueba)
9. Llevalo a tu aula (id: llevalo-a-tu-aula)
10. Recursos y cierre (id: recursos-y-cierre)

## Tarea 3 — 10 componentes de sección vacíos
Un componente por ancla en components/socio-comunicacional/, con su id correcto para el scroll-spy. Por ahora cada uno solo muestra su nombre como encabezado. Mismas convenciones de nombres que components/cognitivo-informacional/.

## Tarea 4 — Archivo de contenido (solo esqueleto)
Crear lib/socio-comunicacional-content.ts con la misma forma que lib/cognitivo-informacional-content.ts: AudienciaTexto/resolveTexto, fallback 'docentes' y un objeto por sección, vacío o con strings vacíos tipados. Conectar los 10 componentes al helper t(campo) como en la dimensión 2. El contenido es solo para docentes; cualquier otra audiencia cae al fallback.

## Tarea 5 — Store (Zustand + localStorage, sin base de datos)
Crear lib/socio-comunicacional-store.ts con persist y key "socio-comunicacional-state". Separado de instrumental-acceso-store, cognitivo-informacional-store, ciudadania-digital-madre-store, ciudadania/app-store y audiencia-store. Un localStorage viejo o parcial no debe romper la página (mergear con los valores por defecto).

Estado:
- respuestaGancho: string
- situaciones: { s1, s2, s3 }, cada una { eleccion: 'audiencia' | 'persistencia' | 'circulacion' | null, revelada: boolean }
- errorRevelado: boolean
- respuestasQuiz: array de 4 posiciones (string | null)
- reflexionAula: string
- explicacionFinal: string

Acciones: setRespuestaGancho, setEleccionSituacion(clave, valor), revelarSituacion(clave), revelarError, setRespuestaQuiz(indice, valor), setReflexionAula, setExplicacionFinal. Sin sincronización con backend.

## Tarea 6 — Componentes (copiados y adaptados)
Copiá de components/cognitivo-informacional/ lo que ya existe: ficha-aula.tsx, quiz, campos de texto, bloque de cita, tabla de rúbrica de 2 columnas, card "Para llevarte", recuadro destacado con título y varios párrafos, lista numerada, bloque de situación y bloque de error doble. NO copies la tabla de 3 columnas (esta página no la usa). Adaptaciones:
1. Texto con énfasis: el contenido de esta página trae negritas y cursivas dentro de párrafos, listas, citas y recuadros (en el docx son formato de Word; al extraerlas pueden salir como **negrita** y *cursiva*). Revisá cómo renderiza texto ui.tsx. Si no hay un helper que convierta **...** en <strong> y *...* en <em> (sin dangerouslySetInnerHTML y sin dejar asteriscos literales), creá uno (por ejemplo RichText) y usalo en todos los componentes que muestran texto del contenido, incluida la ficha.
2. Bloque de situación: el selector pasa a 3 opciones excluyentes con estas etiquetas exactas: "Audiencia", "Persistencia", "Circulación". Mismas reglas: "Ver análisis" solo se habilita con una opción elegida y el análisis se muestra igual sin importar qué opción se eligió. Conectar a store.situaciones.
3. Bloque de error doble: dos citas destacadas ("Análisis A" y "Análisis B", cada una trae su etiqueta en negrita dentro del texto de la cita) y un único botón "Ver los errores" que revela, con la misma transición, todo el texto de los errores. Conectar a store.errorRevelado.
4. FichaAula (aria-expanded, colapsada por defecto, accesible por teclado) cambia el formato de las actividades, porque en esta página traen listas dentro: props
   - titulo: string
   - objetivo: string
   - desarrollo: array de bloques { tipo: 'parrafo', texto } | { tipo: 'lista', items: string[] }
   - preguntaDetonadora: string
   - actividades: array de { titulo: string, bloques: array de { tipo: 'parrafo', texto } | { tipo: 'lista', items: string[] } }
   - frase: string
   - glosario: string[]
   - referencias: string[] (texto plano; si alguna contiene un dominio, no lo conviertas en link)
   Todos los textos pasan por el helper de énfasis. Mantené la etiqueta chica "Ficha para llevar al aula".
5. Las listas numeradas deben reiniciar en 1 cada vez que aparecen (hay varias en la página).
Por ahora no hace falta renderizar con contenido real; que compilen y estén listos para los Prompts 2 y 3.

## Tarea 7 — Alta en el listado de temáticas
En lib/tematicas-data.ts agregar un TematicaItem dentro del grupo "Ciudadanía Digital", como cuarta temática (después de /ciudadania-digital, /tematicas/instrumental-y-acceso y /tematicas/cognitivo-intelectual-e-informacional). Replicá exactamente la forma del item de Cognitivo-Intelectual e Informacional (id, href, category, icon, color, estado de bloqueo, audiencias). Valores propios:
- id/slug: socio-comunicacional-e-identidad
- href: /tematicas/socio-comunicacional-e-identidad
- título: Socio-Comunicacional e Identidad
- audiencias: ['docentes']
- icon: un ícono de lucide-react distinto de los de los otros items del grupo.
Verificá que aparece en /tematicas (filtrando por docentes) y en /ciudadania-presente/dashboard/tematicas sin errores. No usa useTematicaProgress ni base de datos: si el dashboard la muestra en 0%, está bien; si rompe, avisame antes de arreglarlo.

## Verificación final
Corré npx tsc --noEmit y npm run build (el lint no funciona en este repo, no lo corras). Probá en desktop y mobile que los 10 links del sidebar navegan, que el scroll-spy resalta la sección activa y que no hay overflow horizontal (overflow-x-hidden en <main>, según CLAUDE.md). Mostrame git status: lo único modificado fuera de archivos nuevos debe ser lib/tematicas-data.ts. Las otras tres páginas del grupo tienen que seguir igual. Confirmame el resultado antes de pasar al Prompt 2.
<<<FIN_PROMPT_1>>>

<<<PROMPT_2>>>
Seguimos en la misma carpeta del proyecto josefarhat.com. Prompt 2 de 5 para /tematicas/socio-comunicacional-e-identidad: cargar el contenido de las secciones 1 a 5 (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Identidad y convivencia), con las 6 fichas de aula de esas secciones.

El contenido sale TEXTUAL de content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx. No lo resumas, no lo reescribas, no corrijas redacción ni puntuación. Cargalo en lib/socio-comunicacional-content.ts (solo valor 'docentes', con el fallback ya configurado) y conectalo a los componentes de sección creados en el Prompt 1. Usá FichaAula para las fichas. No toques las secciones 6 a 10 ni las otras páginas.

## Cómo extraer el texto
Extraé el texto del docx con un script temporal fuera del repo (python-docx, pandoc o leyendo word/document.xml). No agregues dependencias al proyecto. Cómo está armado el docx:
- Cada sección arranca con un título de nivel 1 (Introducción, Lo que vas a lograr, etc.) en una página nueva. Son los nombres del sidebar: no son contenido extra. Cada componente de sección muestra su encabezado con el mismo tratamiento que tiene /tematicas/cognitivo-intelectual-e-informacional (si allá la sección muestra su nombre como encabezado, hacelo igual; si no, no).
- Las negritas y cursivas son formato real de Word: en la página tienen que verse como negrita y cursiva (usá el helper de énfasis del Prompt 1), nunca como asteriscos.
- Los recuadros con borde azul a la izquierda son tablas de una celda (Competencia central, Lo que convivir NO es, la tarjeta del cierre). Las citas con borde azul son párrafos con borde. Los párrafos grandes en negrita azul oscuro son "preguntas destacadas". Los párrafos en cursiva gris son notas.
- Las listas pueden salir con guiones en la extracción; donde abajo digo "lista numerada", renderizala numerada y reiniciando en 1.
- El pie de página del docx ("Socio-Comunicacional e Identidad · número") no es contenido.
- Si algo es ambiguo o no sabés dónde va, frená y preguntame.

## Reglas
- Sin "Paso N", sin duración, sin links externos, sin SourceCite. Referencias de las fichas en texto plano.
- Links internos permitidos: solo los que se indican abajo.

## Mapeo del docx a las secciones

SECCIÓN 1 — Introducción
Desde el título "Dimensión Socio-Comunicacional e Identidad" hasta el último punto de "Vas a:".
- Título principal: Dimensión Socio-Comunicacional e Identidad
- Subtítulo: De publicar a convivir
- Bajada: el párrafo "Hoy casi todo lo que decimos pasa por una pantalla…". La expresión "módulo madre" dentro de ese párrafo es link interno a /ciudadania-digital.
- "Vas a:" como subtítulo de lista (la etiqueta en negrita pasa a subtítulo), con sus 3 puntos.

SECCIÓN 2 — Lo que vas a lograr
- Recuadro destacado con título "Competencia central" y su párrafo.
- Subtítulo "Objetivos con criterio" (la etiqueta en negrita) y lista numerada de los 4 objetivos.

SECCIÓN 3 — Por qué importa
Desde la pregunta destacada "¿Cuánto de lo que decís sigue siendo tuyo después de enviarlo?" hasta la cita "Pensá en lo que te pasó…".
- La pregunta, en grande y destacada.
- Los 2 párrafos siguientes ("Escribís un comentario en el chat de familias del curso…" y "Lo que ocurrió no es una rareza…").
- La cita destacada "Pensá en lo que te pasó, o en lo que podría pasarte…" como problema abierto.
- Debajo, CAMPO DE TEXTO conectado a store.respuestaGancho / setRespuestaGancho. Texto de apoyo del campo (es de interfaz, no viene del docx): Anotá tu respuesta con tus propias palabras. No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.

SECCIÓN 4 — De dónde partimos
Desde "Las tecnologías ampliaron las posibilidades…" hasta el final de la segunda ficha.
- Los 5 párrafos, tal cual.
- La pregunta destacada "Pensá en la última vez que algo que dijiste en un chat…".
- FICHA 1 y FICHA 2 (en este orden), colapsadas, con las props tomadas del docx (ver "Fichas" más abajo): "Identidad: entre el espejo y la mirada de los demás" y "¿Quién sos en internet? Identidad y Huella Digital".

SECCIÓN 5 — Identidad y convivencia
Desde el subtítulo "Recordar" hasta el final de la cuarta ficha de la sección.
- Tres bloques con subtítulo: Recordar, Comprender, Aplicar (son títulos de nivel 2 en el docx).
- Recordar: párrafo "La dimensión socio-comunicacional e identidad se ocupa…"; párrafo "Comunicarse en un espacio mediado tiene tres propiedades…"; lista de 3 viñetas (cada una empieza con una etiqueta en negrita: Audiencia, Persistencia, Circulación); párrafo "Tener presentes esas tres propiedades…".
- Comprender: los 5 párrafos que empiezan "Por qué lo mediado es real:", "Por qué no controlamos la audiencia:", "Por qué la persistencia pesa:", "Por qué un conflicto no es lo mismo que un daño:" y "Por qué no todo es responsabilidad individual:"; luego el RECUADRO DESTACADO "Lo que convivir NO es" con sus 4 párrafos; luego el párrafo "Lo que sí es convivir: …".
- Aplicar: párrafo "Antes de publicar, enviar o reenviar algo, tres preguntas…"; LISTA NUMERADA de 3 (cada ítem empieza con una pregunta en negrita: ¿Quién puede verlo?, ¿Cuánto tiempo puede durar?, ¿Cómo se leería fuera de contexto?); párrafo "Y cuando algo sale mal, tres movimientos:"; LISTA NUMERADA de 3 (Escuchar, Poner un límite, Reparar), que reinicia en 1; y el párrafo "La lente de tres preguntas, aplicada a la comunicación: …".
- Después, 4 FICHAS en este orden: "Cuidar lo que somos en la red: componentes y protección de la identidad digital", "Lo que dejamos al pasar: huella digital, memoria y futuro en la red", "Decir, escuchar y transformar: comunicar y participar en lo digital" y "Conectarse no es suficiente: comunicarse, colaborar y construir juntos en lo digital".

## Fichas (formato del docx y mapeo a FichaAula)
Cada ficha en el docx tiene: la etiqueta "Ficha para llevar al aula" (no se renderiza como texto, la pone el componente), el título, y subtítulos en negrita:
- "Objetivo de aprendizaje" → objetivo (string).
- "Desarrollo conceptual" → desarrollo: la secuencia de párrafos y viñetas en el mismo orden → bloques parrafo/lista (viñetas consecutivas = una lista).
- "Pregunta detonadora para el debate" → preguntaDetonadora.
- "Actividad inicial — …" y "Actividad principal — …" → actividades, cada una con su título completo (incluida la duración entre paréntesis, que es parte del título) y sus bloques parrafo/lista en orden.
- "Frase para llevar" → frase (con sus comillas).
- "Glosario" → glosario: un solo párrafo con términos separados por " · "; partilo en un array.
- "Referencias y recursos sugeridos" → referencias: un solo párrafo con ítems separados por " · "; partilo en un array, texto plano. Algún ítem puede contener un dominio sin protocolo: es texto, no lo enlaces.
Algunas viñetas de actividades contienen emojis (💬 ⚠️ 🛑) y flechas "→": son parte del contenido, respetalos.
Fichas de este prompt, con la cantidad de actividades esperada (2 cada una): las 6 listadas arriba. Verificá que cargaste exactamente 6 fichas, con 2 actividades cada una.

## Verificación
1. Fidelidad: para cada una de las 5 secciones, compará el texto normalizado del docx (sin los títulos de nivel 1 de sección ni el pie de página) contra el texto renderizado de la página (con las 6 fichas abiertas). Reportame toda diferencia que no sea formato, con el texto de ambos lados.
2. Probá que el campo de Por qué importa guarda y recupera la respuesta al recargar; que las 6 fichas abren y cierran con teclado (Enter/Espacio) y mouse; que no hay asteriscos literales en ninguna parte; que las 3 listas numeradas de las secciones 2 y 5 empiezan cada una en 1; y que no hay scroll horizontal en mobile (390 px).
3. Corré npx tsc --noEmit y npm run build.

Confirmame el resultado y las diferencias del punto 1 antes de pasar al Prompt 3.
<<<FIN_PROMPT_2>>>

<<<PROMPT_3>>>
Seguimos en la misma carpeta del proyecto josefarhat.com. Prompt 3 de 5 para /tematicas/socio-comunicacional-e-identidad: cargar el contenido de las secciones 6 a 10 (Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre), con las 4 fichas de Llevalo a tu aula, conectado al store lib/socio-comunicacional-store.ts.

El contenido sale TEXTUAL de content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx, igual que en el Prompt 2: sin resumir, reescribir ni corregir. Cargalo en lib/socio-comunicacional-content.ts (solo 'docentes', con el fallback ya configurado) y conectalo a los componentes de sección. No toques las secciones 1 a 5 ni las otras páginas.

## Extracción y reglas (las mismas del Prompt 2)
- Script temporal fuera del repo, sin dependencias nuevas. Ignorá los títulos de nivel 1 de sección y el pie de página del docx. Negritas y cursivas = formato real: renderizalas con el helper de énfasis, nunca asteriscos. Los recuadros son tablas de una celda; las citas son párrafos con borde; las notas son párrafos en cursiva gris.
- Sin "Paso N" (salvo "Paso a paso:" dentro de las fichas), sin duración, sin links externos, sin SourceCite, sin imágenes ni PDFs.
- Si algo es ambiguo, frená y preguntame.

## SECCIÓN 6 — Un caso resuelto
Desde el subtítulo "El caso" hasta la última nota "(Acá me pregunto: ¿qué reglas tiene este grupo para discutir…)".
- Subtítulo "El caso" y su párrafo.
- Cuatro fases en secuencia numerada 1 a 4, con los títulos tal cual: "Fase 1 — Comprender", "Fase 2 — Descomponer", "Fase 3 — Decidir", "Fase 4 — Revisar". Cada fase: su(s) párrafo(s) y una nota en cursiva "Acá me pregunto" visualmente distinta. Las fases 2, 3 y 4 tienen DOS párrafos cada una antes de la nota; la fase 1 tiene uno. Respetá esa cantidad.

## SECCIÓN 7 — Practicá vos
Desde el párrafo introductorio ("Vas a analizar tres situaciones nuevas…") hasta el último párrafo de "Encontrá el error" ("Los dos caen en el mismo error de fondo…").
- El párrafo introductorio, tal cual.
- Tres situaciones con el bloque de situación del Prompt 1 (store.situaciones[s1|s2|s3] / setEleccionSituacion / revelarSituacion). Enunciado = el párrafo bajo "Situación N". Selector de 3 opciones excluyentes con estas etiquetas exactas: "Audiencia", "Persistencia", "Circulación". El botón "Ver análisis" (texto de interfaz, no viene del docx) solo se habilita con una opción elegida. Al revelar, con transición breve de expand: el análisis (el párrafo que empieza con la pregunta en negrita "¿Qué pesa más en esta situación?", que se mantiene como inicio del análisis) y la nota en cursiva. El análisis y la nota se muestran SIEMPRE iguales, sin importar qué opción se eligió (en la Situación 3 el análisis dice que pesan las tres y que no hay una única respuesta: igual se muestra completo). Elección y análisis persisten al recargar.
- Subtítulo "Encontrá el error": párrafo introductorio ("Estos son los análisis que hicieron dos colegas…"), las dos citas destacadas (cada una empieza con su etiqueta en negrita "Análisis A:" y "Análisis B:") y el único botón "Ver los errores" (interfaz) conectado a store.errorRevelado / revelarError. El texto revelado va desde "Los errores:" hasta el párrafo final: "Los errores:", el párrafo de "Análisis A", el párrafo de "Análisis B" y "Los dos caen en el mismo error de fondo…". Persiste al recargar.

## SECCIÓN 8 — Poné a prueba lo aprendido
Desde el párrafo introductorio ("Cuatro preguntas, una por cada objetivo…") hasta la nota final de la rúbrica.
- Párrafo introductorio, tal cual.
- Quiz de 4 preguntas con el componente de quiz (store.respuestasQuiz[i] / setRespuestaQuiz). Cada pregunta muestra su objetivo en una etiqueta chica (el texto de "(objetivo: …)" sin paréntesis). Opciones a) a d) tal cual están en el docx. Respuestas correctas: P1 c, P2 d, P3 a, P4 b. Feedback del docx por pregunta: P1 a, b, d; P2 a, b, c; P3 b, c, d; P4 a, c, d (cada uno con su texto propio, sin combinar). La línea "Respuesta correcta: x." del docx NO se muestra: es el dato que define cuál es la opción correcta. Al elegir una opción se muestra su feedback sin bloquear; se puede cambiar la respuesta y el feedback se actualiza. Si la opción elegida es la correcta, el feedback es solo "Correcto." (texto de interfaz). Persisten al recargar y el feedback reaparece.
- Subtítulo "Rúbrica de desempeño", la línea "Se aplica sobre el análisis que hiciste en Practicá vos.", la tabla de 2 columnas (Nivel / Qué muestra el docente, 4 filas) y la nota final en cursiva ("Cada uno de los cuatro objetivos…").

## SECCIÓN 9 — Llevalo a tu aula
Desde "Ya tenés el mapa de esta dimensión…" hasta el final de la cuarta ficha.
- Párrafo 1 tal cual. Luego el párrafo "Una acción concreta para esta semana: …" como bloque destacado (la etiqueta en negrita se mantiene al inicio). Luego el párrafo "Volvé al problema de Por qué importa: …".
- Debajo de ese párrafo: bloque de cita con la etiqueta "Tu respuesta original" (interfaz) mostrando store.respuestaGancho. Si está vacío, el mensaje (interfaz): Todavía no escribiste tu respuesta en Por qué importa — podés volver a esa sección y hacerlo cuando quieras. con link de ancla a #por-que-importa.
- CAMPO DE TEXTO conectado a store.reflexionAula / setReflexionAula, con la etiqueta (interfaz) "¿Qué harías distinto?".
- 4 FICHAS DE AULA (FichaAula, colapsadas), en este orden: "Convivir también en línea: respeto, empatía y responsabilidad digital", "Convivencia digital: construir vínculos sanos en línea", "Ser, cuidar y compartir: mi identidad digital como proyecto personal y colectivo" y "Avatares con conciencia: ética, cuidado e identidad en mundos virtuales". Mapeo de cada ficha a las props de FichaAula: igual que en el Prompt 2 (objetivo, desarrollo en bloques parrafo/lista, preguntaDetonadora, actividades con título completo y bloques, frase con comillas, glosario y referencias como arrays partidos por " · ", texto plano). Esperadas: 4 fichas con 2 actividades cada una.

## SECCIÓN 10 — Recursos y cierre
Desde el subtítulo "Antes de cerrar: ¿qué cambió?" hasta el párrafo de Cierre.
- Subtítulo "Antes de cerrar: ¿qué cambió?"; el párrafo "Volvé a tu respuesta de Por qué importa. Releela."; debajo el bloque de cita con store.respuestaGancho (mismo mensaje con ancla si está vacío); el párrafo "Con lo que sabés ahora, ¿cómo le explicarías a alguien por qué algo que dijo en un chat puede dejar de ser suyo apenas lo envía?"; CAMPO DE TEXTO conectado a store.explicacionFinal / setExplicacionFinal; y el párrafo "No hay respuesta correcta: es solo para que veas el recorrido que hiciste."
- Subtítulo "Para llevarte" y la card destacada (sin exportación a archivo) con título "Socio-Comunicacional e Identidad, en una tarjeta" y sus 5 párrafos, con las etiquetas en negrita donde las trae el docx (el primero y el último párrafo de la card no llevan etiqueta de apertura distinta del resto: respetá el docx tal cual).
- Subtítulo "Seguí recorriendo el Poliedro" y su párrafo. Dentro del párrafo, "módulo Ciudadanía Digital" es link interno a /ciudadania-digital y "Cognitivo-Intelectual e Informacional" es link interno a /tematicas/cognitivo-intelectual-e-informacional.
- Subtítulo "Cierre" y su párrafo.

## Verificación
1. Fidelidad: para cada sección 6 a 10, compará el texto normalizado del docx (sin títulos de nivel 1, sin pie de página, sin las líneas "Respuesta correcta: x.") contra el texto renderizado (con las 4 fichas abiertas, las 3 situaciones reveladas, los errores revelados y el quiz respondido). Reportame toda diferencia que no sea formato, con el texto de ambos lados.
2. Persistencia, tras recargar: respuestaGancho (y su aparición en Llevalo a tu aula y en Recursos y cierre, y el mensaje con ancla cuando está vacío), las 3 situaciones con elección y análisis, los errores revelados, las 4 respuestas del quiz con su feedback (y que se puede cambiar una respuesta), reflexionAula y explicacionFinal. "Ver análisis" no se habilita sin elegir una opción. "Correcto." aparece solo con P1 c, P2 d, P3 a y P4 b.
3. Accesibilidad: selector de situaciones, quiz, botón "Ver los errores" y las 4 fichas funcionan solo con teclado, con foco visible y aria-expanded correcto en las fichas.
4. Mobile (390 px): sin scroll horizontal; la tabla de la rúbrica no desborda; sin asteriscos literales.
5. Corré npx tsc --noEmit y npm run build.

Confirmame el resultado y las diferencias del punto 1 antes de pasar al Prompt 4.
<<<FIN_PROMPT_3>>>

<<<PROMPT_4>>>
Abrí la carpeta raíz del proyecto josefarhat.com (donde está CLAUDE.md).

Prompt 4 de 5: verificación de /tematicas/socio-comunicacional-e-identidad. Es solo verificación: si algo falla, arreglalo si es un bug claro de lo implementado en los Prompts 1 a 3; si implica una decisión de contenido o diseño, listámelo y no lo cambies. No toques las otras páginas.

El documento fuente está en content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx.

## Verificación 1 — Cobertura de contenido (la más importante)
Extraé el texto del docx y el texto renderizado de la página (Playwright contra el build de producción, contexto limpio, abriendo las 10 fichas de aula, revelando las 3 situaciones y los errores, y respondiendo el quiz para que cuente el texto expandido). Comparalo párrafo por párrafo, normalizando espacios, comillas y signos de formato (negritas, cursivas, viñetas, numeración).

Estas diferencias son INTENCIONALES y no son un faltante:
- Los títulos de nivel 1 de cada sección del docx (Introducción, Lo que vas a lograr, etc.) y el pie de página del docx no cuentan.
- La etiqueta "Ficha para llevar al aula" del docx la reemplaza la etiqueta del componente.
- La línea "Respuesta correcta: x." de cada pregunta del quiz no se muestra, y la opción correcta muestra solo "Correcto.".
- Las etiquetas "(objetivo: …)" del quiz se muestran como etiqueta chica, sin paréntesis.
- Los glosarios y las referencias de las fichas, que en el docx son un párrafo separado por " · ", se muestran como lista o chips: comparalos como texto separado.
- La página agrega estos textos de interfaz: el texto de apoyo del campo de Por qué importa, "Ver análisis", "Ver los errores", "Tu respuesta original", "¿Qué harías distinto?", "Correcto.", la etiqueta "Ficha para llevar al aula" y el mensaje de campo vacío.

Entregame un informe con: (a) cada párrafo del docx que NO está en la página y no figura en la lista de arriba; (b) cada texto de la página que NO está en el docx y no figura en la lista de arriba. Las diferencias menores de redacción (una palabra, una coma) listalas igual, con el texto de ambos lados.

## Verificación 2 — Fichas completas y sin repetir
- La página debe tener exactamente 10 fichas: 2 en De dónde partimos, 4 en Identidad y convivencia y 4 en Llevalo a tu aula, en el orden indicado en los Prompts 2 y 3. Cada una con objetivo, desarrollo, pregunta detonadora, 2 actividades, frase, glosario y referencias, y con las listas de las actividades presentes y en su orden.
- Ninguna de esas 10 fichas puede aparecer en lib/instrumental-acceso-content.ts, lib/cognitivo-informacional-content.ts ni lib/ciudadania-digital-content.ts, y ninguna ficha de esos tres archivos puede aparecer en lib/socio-comunicacional-content.ts. Compará por título y por la frase "Frase para llevar". Si hay un solo duplicado, listalo y no lo cambies.

## Verificación 3 — Cosas que NO deben aparecer
Buscá en el texto renderizado y en el código de components/socio-comunicacional/ y lib/socio-comunicacional-content.ts:
- La cadena "Paso" seguida de un número ("Paso a paso:" dentro de las fichas es contenido y está permitido).
- "Duración", "duración estimada" o "tiempo estimado". Las duraciones entre paréntesis en los títulos de las actividades de las fichas ("(15 min)", "(45-60 min)", etc.) son contenido y están permitidas.
- Asteriscos literales (* o **) en el texto renderizado.
- Cualquier <a> con href externo (http/https) y cualquier uso de SourceCite o source-cite. Si alguna referencia de ficha contiene un dominio como texto, no debe estar enlazada.
- Cualquier link o mención de /huella-digital o /alfabetizacion-mediatica.
- Imágenes, PDFs o enlaces de descarga.
Los únicos links permitidos son internos: /ciudadania-digital (en la bajada de Introducción y en Seguí recorriendo el Poliedro), /tematicas/cognitivo-intelectual-e-informacional (en ese mismo párrafo) y los anclas a #por-que-importa.

## Verificación 4 — Audiencias
Con las seis situaciones (sin selección, docentes, familias, adultos-mayores, ninas-ninos-adolescentes, mujeres), confirmá que el texto de <main> es idéntico, sin textos vacíos ni errores.

## Verificación 5 — Persistencia
Con contexto limpio, escribí y elegí cosas, recargá y confirmá que se mantienen:
- La respuesta de Por qué importa, y que aparece en "Tu respuesta original" de Llevalo a tu aula y de Recursos y cierre. El mensaje de campo vacío (con el link de ancla) cuando no hay respuesta.
- Las 3 situaciones: elección y análisis revelado. "Ver análisis" no se habilita sin elegir una opción; las tres etiquetas son exactamente "Audiencia", "Persistencia" y "Circulación"; el análisis y la nota se muestran igual sin importar la opción elegida.
- Los errores revelados (A y B juntos con un solo botón).
- Las 4 respuestas del quiz y su feedback; se puede cambiar una respuesta y el feedback se actualiza; "Correcto." aparece solo con P1 c, P2 d, P3 a y P4 b.
- reflexionAula y explicacionFinal.
Verificá además que la única key de localStorage que escribe esta página es "socio-comunicacional-state", que no se mezcla con "instrumental-acceso-state", "cognitivo-informacional-state", "ciudadania-madre-state", "ciudadania-digital-state" ni "audiencia-filtro-state" (escribir en esta página no debe aparecer en las otras y viceversa) y que un localStorage viejo o parcial no rompe la página.

## Verificación 6 — Sidebar, fichas y accesibilidad
- Desktop: los 10 links llevan a su sección (ids: introduccion, lo-que-vas-a-lograr, por-que-importa, de-donde-partimos, identidad-y-convivencia, un-caso-resuelto, practica-vos, pone-a-prueba, llevalo-a-tu-aula, recursos-y-cierre) y marcan la activa; el sidebar queda sticky; no hay scroll horizontal; overflow-x-hidden está en <main>.
- Mobile (390 px): la barra horizontal navega y resalta la activa, queda pegada bajo el navbar, no hay overflow horizontal y la tabla de la rúbrica no desborda.
- Las 10 fichas: abren y cierran con mouse y teclado (Enter y Espacio), con aria-expanded correcto y foco visible.
- Quiz, selectores de situaciones y botones de revelado: operables solo con teclado, con foco visible.
- Las 3 listas numeradas de la sección 5 y la de la sección 2 empiezan cada una en 1.
- Consola: solo se admite el 404 de /_vercel/insights/script.js que ya existe en el resto del sitio.

## Verificación 7 — Listado y regresión
- La temática aparece en /tematicas (filtrando por docentes) dentro del grupo Ciudadanía Digital como cuarta temática, y en /ciudadania-presente/dashboard/tematicas, sin errores. Si el dashboard la muestra en 0%, está bien.
- Regresión: git status debe mostrar solo archivos nuevos (la página, components/socio-comunicacional/, los 2 archivos de lib, el docx en content-management/) y el cambio en lib/tematicas-data.ts. No debe haber cambios dentro de components/ciudadania-digital/, components/instrumental-acceso/, components/cognitivo-informacional/ ni en los archivos lib de esas tres páginas. Las otras tres páginas del grupo siguen funcionando igual.

## Verificación 8 — Build
Corré npx tsc --noEmit y npm run build. El lint no funciona en este repo (ESLint no está instalado), no lo corras.

Al terminar dame un resumen corto: el informe de cobertura (Verificación 1), el resultado de fichas (Verificación 2), lo que falló o arreglaste y la lista de pendientes. Después paso al Prompt 5.
<<<FIN_PROMPT_4>>>

<<<PROMPT_5>>>
Abrí la carpeta raíz del proyecto josefarhat.com (donde está CLAUDE.md).

Prompt 5 de 5: enlaces cruzados entre las páginas del grupo Ciudadanía Digital y actualización de CLAUDE.md. En este prompt SÍ se tocan /ciudadania-digital y /tematicas/cognitivo-intelectual-e-informacional, pero solo lo que se pide acá.

## Tarea 1 — /ciudadania-digital: enlace real a la dimensión 3
En el módulo madre, las dos tablas (la de "El Poliedro" y el mapa de competencias de "Recursos y cierre") leen los enlaces de un único arreglo (DIMENSIONES o el que corresponda), que ya tiene el campo href y ya apunta a las páginas de Instrumental y Acceso y de Cognitivo-Intelectual e Informacional.
1. Identificá la fila "Socio-Comunicacional e Identidad" por su nombre, no por la posición, y poné href="/tematicas/socio-comunicacional-e-identidad" en ese mismo arreglo, de modo que las dos tablas la tomen de una sola fuente.
2. Usá next/link, igual que en las otras dos filas.
3. Las otras 7 filas NO se tocan: siguen con href="#", sin cambiar su texto, estilo ni comportamiento.
4. No cambies ningún texto de contenido de /ciudadania-digital, ni su store, ni las audiencias.

## Tarea 2 — /tematicas/cognitivo-intelectual-e-informacional: enlace a la dimensión 3
En Recursos y cierre, bloque "Seguí recorriendo el Poliedro", hoy hay un párrafo con dos links internos (al módulo y a Instrumental y Acceso... según el docx: al módulo Ciudadanía Digital y a la temática anterior).
1. Agregá, a continuación del párrafo, un enlace/botón secundario con la etiqueta exacta: Siguiente dimensión: Socio-Comunicacional e Identidad. Destino: /tematicas/socio-comunicacional-e-identidad, con next/link. Usá el mismo componente de botón secundario que ya usa /tematicas/instrumental-y-acceso para su "Siguiente dimensión" (si en la carpeta de Cognitivo-Intelectual e Informacional no existe ese componente, copialo desde ahí).
2. No cambies ningún otro texto de esa página ni su store.
3. Esta adición no figura en el docx fuente de esa temática (content-management/2_Dimension_Cognitivo-Intelectual_e_Informacional.docx): no lo modifiques, y dejá el comentario correspondiente en el código del bloque para que una futura comparación de cobertura no lo marque como un error.

## Tarea 3 — Verificar el recorrido de ida y vuelta
Con Playwright contra el build de producción, contexto limpio:
- Desde /ciudadania-digital, el enlace de "Socio-Comunicacional e Identidad" lleva a la nueva página, en las dos tablas; los de Instrumental y Acceso y Cognitivo-Intelectual e Informacional siguen llevando a las suyas.
- Desde /tematicas/cognitivo-intelectual-e-informacional, el botón "Siguiente dimensión: Socio-Comunicacional e Identidad" lleva a la nueva página, y los otros links siguen funcionando.
- Desde /tematicas/socio-comunicacional-e-identidad, los links a /ciudadania-digital (bajada de Introducción y Seguí recorriendo el Poliedro) y a /tematicas/cognitivo-intelectual-e-informacional navegan bien.
- Las respuestas guardadas se mantienen al ir y volver entre las cuatro páginas: claves "ciudadania-madre-state", "instrumental-acceso-state", "cognitivo-informacional-state" y "socio-comunicacional-state" independientes, ninguna se pisa.
- En /ciudadania-digital las otras 7 filas de las dos tablas siguen con href="#".
- El filtro de audiencias de las cuatro páginas sigue funcionando.

## Tarea 4 — Actualizar CLAUDE.md
Agregá o corregí solo lo siguiente, en el mismo estilo del archivo:
1. En la tabla de rutas: una fila para /tematicas/socio-comunicacional-e-identidad. Es la tercera temática por dimensión del Poliedro (Capítulo 17 del manual), cuarta del grupo "Ciudadanía Digital", solo audiencia docentes, dos archivos (page.tsx + contenido cliente), scroll continuo con sidebar de 10 secciones (Introducción, Lo que vas a lograr, Por qué importa, De dónde partimos, Identidad y convivencia, Un caso resuelto, Practicá vos, Poné a prueba lo aprendido, Llevalo a tu aula, Recursos y cierre), 10 fichas de aula desplegables, selector de situaciones Audiencia/Persistencia/Circulación y doble "Encontrá el error", estado en localStorage vía Zustand con la clave "socio-comunicacional-state", sin fuentes citadas ni descargables por ahora.
2. En la descripción de componentes: components/socio-comunicacional/, copiado de components/cognitivo-informacional/ a propósito (misma convención que SourceCite) para no acoplar páginas. Aclarar que su FichaAula acepta bloques (párrafos y listas) dentro de cada actividad y que incluye el helper de texto con énfasis.
3. En la lista de archivos clave: lib/socio-comunicacional-content.ts y lib/socio-comunicacional-store.ts.
4. En la sección de variantes por audiencia: sumá la nueva ruta a las que usan resolveTexto con fallback 'docentes'.
5. En la nota sobre stores de las temáticas por dimensión: sumá la clave socio-comunicacional-state a las ya documentadas, y repetí que todavía no usan useTematicaProgress ni MySQL.
6. En la nota de enlaces del módulo madre: las filas de las tres primeras dimensiones ya apuntan a sus páginas y las otras 7 siguen con href="#" hasta que se creen sus temáticas. Aclará que cada página de dimensión enlaza a la siguiente al cierre (Instrumental → Cognitivo-Intelectual e Informacional → Socio-Comunicacional e Identidad).
7. Si el archivo dice un número de temáticas o de items de lib/tematicas-data.ts, contá cuántos hay ahora y corregilo.
8. Una nota corta de que el contenido fuente de esta temática está en content-management/3_Dimension_Socio-Comunicacional_e_Identidad.docx, y que el enlace "Siguiente dimensión" de Cognitivo-Intelectual e Informacional es una adición que no está en su docx fuente.
9. Agregá al procedimiento de "crear la siguiente temática por dimensión" la regla de las fichas: las fichas didácticas no se repiten entre temáticas ni dimensiones; cada dimensión lleva las que le corresponden, sin límite de cantidad, y se verifica en el prompt de verificación.
No reescribas ni reordenes nada más de CLAUDE.md. Si AGENTS.md repite alguna de esas partes, actualizá solo esas.

## Verificación final
Corré npx tsc --noEmit y npm run build (el lint no funciona en este repo, no lo corras). Mostrame git status y el diff de los datos de DIMENSIONES, del bloque "Seguí recorriendo el Poliedro" de Cognitivo-Intelectual e Informacional, de lib/cognitivo-informacional-content.ts si cambió y de CLAUDE.md, para que yo revise antes de commitear. No hagas commit.

Al terminar, dame un resumen corto: qué archivos tocaste, el resultado del recorrido de ida y vuelta entre las cuatro páginas y si encontraste algo inesperado.
<<<FIN_PROMPT_5>>>