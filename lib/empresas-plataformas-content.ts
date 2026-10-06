// Contenido de /tematicas/empresas-organizaciones-y-plataformas. Misma forma que
// lib/ia-criterio-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes'). Solo hay
// contenido escrito para docentes (ver components/empresas-plataformas/).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/empresas-plataformas/ficha-aula';

export const EMPRESASPLATAFORMAS_FALLBACK: Audiencia = 'docentes';

export interface TocSection {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  labelAudiencia?: AudienciaTexto;
  shortLabelAudiencia?: AudienciaTexto;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: 'introduccion', number: '01', label: 'Introducción', shortLabel: 'Intro' },
  { id: 'lo-que-vas-a-lograr', number: '02', label: 'Lo que vas a lograr', shortLabel: 'Objetivos' },
  { id: 'por-que-importa', number: '03', label: 'Por qué importa', shortLabel: 'Por qué' },
  { id: 'de-donde-partimos', number: '04', label: 'De dónde partimos', shortLabel: 'Punto de partida' },
  { id: 'responsabilidad-de-plataforma', number: '05', label: 'Responsabilidad de plataforma', shortLabel: 'Responsabilidad de plataforma' },
  { id: 'un-caso-resuelto', number: '06', label: 'Un caso resuelto', shortLabel: 'Caso' },
  { id: 'practica-vos', number: '07', label: 'Practicá vos', shortLabel: 'Practicá' },
  { id: 'pone-a-prueba', number: '08', label: 'Poné a prueba lo aprendido', shortLabel: 'Quiz' },
  { id: 'llevalo-a-tu-aula', number: '09', label: 'Llevalo a tu aula', shortLabel: 'Aula' },
  { id: 'recursos-y-cierre', number: '10', label: 'Recursos y cierre', shortLabel: 'Cierre' },
];

export interface Contenido {
  introduccion: {
    titulo: string;
    subtitulo: string;
    bajada: string;
    listaTitulo: string;
    lista: string[];
  };
  loQueVasALograr: {
    titulo: string;
    competenciaEtiqueta: string;
    competencia: string;
    objetivosTitulo: string;
    objetivos: string[];
  };
  porQueImporta: {
    titulo: string;
    pregunta: string;
    parrafos: string[];
    problema: string;
    placeholder: string;
    ayuda: string;
  };
  deDondePartimos: {
    titulo: string;
    parrafos: string[];
    preguntaDestacada: string;
    fichaAula1: FichaAulaProps;
  };
  responsabilidadDePlataforma: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
    };
    fichaAula2: FichaAulaProps;
  };
  unCasoResuelto: {
    titulo: string;
    subtitulo: string;
    caso: string;
    fases: { numero: number; titulo: string; parrafos: string[]; nota: string }[];
  };
  practicaVos: {
    titulo: string;
    intro: string;
    revelarLabel: string;
    situaciones: {
      clave: 's1' | 's2' | 's3';
      enunciado: string;
      analisis: string;
      nota: string;
    }[];
    error: {
      subtitulo: string;
      intro: string;
      citaA: string;
      citaB: string;
      botonLabel: string;
      errorIntro: string;
      errorA: string;
      errorB: string;
      errorCierre: string;
    };
  };
  poneAPrueba: {
    titulo: string;
    intro: string;
    preguntas: {
      objetivo: string;
      enunciado: string;
      opciones: { id: 'a' | 'b' | 'c' | 'd'; texto: string }[];
      correcta: 'a' | 'b' | 'c' | 'd';
      feedbacks: Partial<Record<'a' | 'b' | 'c' | 'd', string>>;
    }[];
    correcto: string;
    rubricaTitulo: string;
    rubricaIntro: string;
    rubricaColNivel: string;
    rubricaColMuestra: string;
    rubrica: { nivel: string; muestra: string }[];
    rubricaCierre: string;
  };
  llevaloATuAula: {
    titulo: string;
    parrafo1: string;
    accionSemana: string;
    parrafo2: string;
    parrafo3: string;
    respuestaOriginalEtiqueta: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    campoEtiqueta: string;
    fichaAula3: FichaAulaProps;
  };
  recursosYCierre: {
    titulo: string;
    cambioTitulo: string;
    cambioInstruccion: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    pregunta: string;
    placeholder: string;
    nota: string;
    llevarteTitulo: string;
    tarjeta: { titulo: string; parrafos: string[] };
    seguiTitulo: string;
    seguiAntes: string;
    seguiEnlaceTexto: string;
    seguiEnlaceHref: string;
    seguiDespues: string;
    referenciasTitulo: string;
    referenciasIntro: string;
    referencias: string[];
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const fichaVacia: FichaAulaProps = {
  titulo: '',
  objetivo: '',
  desarrollo: [],
  preguntaDetonadora: '',
  actividades: [],
  frase: '',
  glosario: [],
  referencias: [],
};

const DOCENTES: Contenido = {
  introduccion: {
    titulo: 'Empresas, Organizaciones y Plataformas',
    subtitulo: 'De poder observar a deber justificar',
    bajada:
      'Las organizaciones gobiernan datos, condiciones de trabajo y adopción de IA. La posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado. Seguridad, privacidad, proporcionalidad y participación necesitan formar parte de la transformación laboral. Esta temática forma parte del grupo Gobierno y Comunidad Digital de la plataforma y trabaja esa distinción: que una herramienta permita vigilar todo no significa que haya que usarla para eso.',
    listaTitulo: 'Vas a:',
    lista: [
      'Entender que la posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado, y que seguridad, privacidad, proporcionalidad y participación necesitan formar parte de cualquier transformación laboral que incorpore estas herramientas.',
      'Reconocer que las plataformas poseen una capacidad adicional porque diseñan el ambiente que otros habitan: defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos son decisiones con consecuencias sociales que la alfabetización individual no puede reemplazar.',
      'Comprender el principio de seguridad y derechos por diseño, que busca integrar protección desde la arquitectura misma de un sistema, y por qué ciudadanos más capaces y organizaciones más responsables pertenecen al mismo proceso de transformación.',
    ],
  },
  loQueVasALograr: {
    titulo: 'Lo que vas a lograr',
    competenciaEtiqueta: '',
    competencia: '',
    objetivosTitulo: 'Objetivos con criterio:',
    objetivos: [
      'Reconocer que la posibilidad técnica de monitorear una conducta no justifica por sí sola un monitoreo ilimitado, e identificar qué hace falta —seguridad, privacidad, proporcionalidad y participación— para que ese monitoreo sea proporcionado.',
      'Entender que las decisiones de diseño de una plataforma —defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos— tienen consecuencias sociales que la alfabetización individual de quienes la usan no puede compensar.',
      'Comprender el principio de seguridad y derechos por diseño, que busca integrar protección desde la arquitectura de un sistema, y por qué ciudadanos más capaces y organizaciones más responsables pertenecen al mismo proceso de transformación.',
      'Usar este capítulo como lente de lectura frente a una decisión organizacional concreta, identificando qué dimensión está comprometida, qué condiciones sociotécnicas intervienen y qué cambio sería proporcionado.',
    ],
  },
  porQueImporta: {
    titulo: 'Por qué importa',
    pregunta: '¿Porque se puede, hay que hacerlo?',
    parrafos: [
      'Una empresa adopta un nuevo software de gestión que, entre sus funciones, permite registrar cada click, cada pausa y cada aplicación abierta en la computadora de cada empleado, minuto a minuto. El equipo de sistemas lo instala porque el software ya lo trae incorporado, sin costo adicional, y porque "mientras más datos, mejor". Nadie definió primero qué problema concreto se quería resolver —ausentismo, bajo rendimiento en un área puntual, algo específico—: simplemente, la herramienta podía hacerlo, así que se activó. A las pocas semanas, el clima de trabajo cambia: la gente empieza a cronometrarse sus propias pausas para el café, evita abrir cualquier aplicación que no sea estrictamente laboral aunque sea para resolver algo personal urgente, y la confianza entre equipos y jefaturas se resiente visiblemente.',
      'Nadie en la empresa actuó de mala fe. El problema no fue que existiera una herramienta capaz de observar en detalle: fue que su activación no respondió a ninguna necesidad identificada, ni pasó por ninguna pregunta sobre si ese nivel de detalle era proporcionado a lo que la empresa realmente necesitaba saber. La posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado — y confundir "se puede" con "hay que hacerlo" tiene un costo real en confianza, que ningún dato recolectado compensa.',
    ],
    problema:
      'Pensá en alguna herramienta de monitoreo o seguimiento —laboral, escolar, familiar— que conozcas y que se activó "porque se podía", sin que nadie definiera antes qué problema puntual venía a resolver. ¿Qué pasaría si hoy alguien le preguntara a quien la activó: "¿proporcionado a qué?"',
    placeholder: 'Anotá tu respuesta con tus propias palabras.',
    ayuda:
      'No hay una respuesta correcta todavía: vas a volver a esta pregunta más adelante, para ver qué cambió en tu forma de pensarla.',
  },
  deDondePartimos: {
    titulo: 'De dónde partimos',
    parrafos: [
      'Las organizaciones gobiernan datos, condiciones de trabajo y adopción de IA. La posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado. Seguridad, privacidad, proporcionalidad y participación necesitan formar parte de la transformación laboral — que una herramienta pueda hacer algo no responde, por sí solo, a la pregunta de si corresponde que lo haga.',
      'Las plataformas poseen una capacidad adicional porque diseñan el ambiente que otros habitan. Defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos son decisiones con consecuencias sociales. La alfabetización individual no puede reemplazar esa responsabilidad de diseño — por más que una persona sepa configurar bien su privacidad, eso no cambia qué opción viene activada por defecto para millones de personas que nunca van a tocar esa configuración.',
      'El principio de seguridad y derechos por diseño busca integrar protección desde la arquitectura. La ciudadanía digital requiere ciudadanos más capaces y organizaciones más responsables; ambas transformaciones pertenecen al mismo proceso — no alcanza con formar mejores usuarios si las organizaciones no construyen, desde el diseño mismo, sistemas que protejan por defecto.',
    ],
    preguntaDestacada:
      'Pensá en alguna plataforma o sistema que uses habitualmente. ¿Qué decisión de diseño —una opción activada por defecto, un mecanismo de denuncia, qué tan visible es algo— condiciona lo que vos y otras personas pueden hacer ahí, sin que nadie lo haya elegido activamente?',
    fichaAula1: {
      titulo: 'Privacidad y protección de datos por diseño: la guía de la AAIP',
      objetivo:
        'Conocer las recomendaciones de la Agencia de Acceso a la Información Pública (AAIP) sobre privacidad por diseño y por defecto en sistemas de inteligencia artificial, y reconocer cómo ese principio traslada la responsabilidad de la protección desde la persona usuaria hacia quien diseña el sistema.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'La Agencia de Acceso a la Información Pública (AAIP), autoridad de aplicación de la Ley de Protección de Datos Personales en Argentina, publicó la Guía para entidades públicas y privadas en materia de Transparencia y Protección de Datos Personales para una Inteligencia Artificial responsable. La guía advierte que el uso no supervisado de la inteligencia artificial puede afectar derechos fundamentales —la libertad de expresión, por falta de conocimiento sobre su funcionamiento; la privacidad, por el uso de datos sensibles sin consentimiento— y, en consecuencia, la dignidad humana.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para la etapa de diseño del sistema —cuando se planifica y diseña, seleccionando y procesando los datos de entrada y entrenando el modelo algorítmico— la guía recomienda considerar la privacidad por diseño y por defecto, de modo que solo sean objeto de tratamiento aquellos datos personales que resulten necesarios. Esto significa que la protección no depende de que cada persona usuaria configure correctamente su privacidad: el sistema mismo tiene que estar construido para recolectar y procesar lo mínimo indispensable, desde el inicio.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La guía recomienda además evaluar si los algoritmos están alineados con los valores, principios y orientaciones establecidos, y publicar una política de privacidad clara. Según la perspectiva de la AAIP, seguir estas recomendaciones permite a las organizaciones no solo cumplir con la normativa vigente, sino también fomentar una mayor confianza en los sistemas automatizados por parte de quienes los usan.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Este enfoque conecta directamente con lo que plantea el capítulo: la alfabetización individual no puede reemplazar la responsabilidad de diseño. Por más que una persona entienda muy bien cómo cuidar sus datos, esa comprensión no sirve de nada si el sistema que usa fue diseñado para recolectar más datos de los necesarios, por defecto, sin que nadie lo haya pedido.',
        },
      ],
      preguntaDetonadora:
        'Si una aplicación que usás todos los días pidiera, por defecto, acceso a mucha más información de la que necesita para funcionar, ¿de quién es la responsabilidad de que eso cambie: tuya, por configurarlo distinto, o de quien la diseñó?',
      actividades: [
        {
          titulo: 'Actividad inicial — "¿Qué pide esta app?" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'En grupos, revisan los permisos que pide una aplicación de uso común (cámara, contactos, ubicación, micrófono) y discuten cuáles de esos permisos parecen necesarios para que la app cumpla su función principal, y cuáles no.',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Rediseñar por defecto" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, eligen un sistema o app (real o imaginado) que recolecte más datos de los necesarios por defecto.',
                'Aplicando el principio de privacidad por diseño y por defecto de la guía de la AAIP, rediseñan qué datos pediría ese sistema como configuración inicial, dejando el resto como opción, no como default.',
                'Justifican cada decisión: por qué ese dato es necesario o no para que el sistema cumpla su función.',
                'Presentan su rediseño al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"La privacidad no debería depender de que cada persona sepa configurarla bien: debería venir protegida desde el diseño."',
      glosario: [
        'Privacidad por diseño y por defecto',
        'Transparencia algorítmica',
        'Datos necesarios',
        'Política de privacidad',
        'Confianza en sistemas automatizados',
      ],
      referencias: [
        'Agencia de Acceso a la Información Pública (AAIP) (2024). Guía para entidades públicas y privadas en materia de Transparencia y Protección de Datos Personales para una Inteligencia Artificial responsable.',
      ],
    },
  },
  responsabilidadDePlataforma: {
    titulo: 'Responsabilidad de plataforma',
    recordar: {
      subtitulo: 'Recordar',
      parrafos: [
        'El problema central de este capítulo se puede formular así: empresas y plataformas poseen responsabilidades proporcionales a su poder de diseño. Seguridad por diseño, gobernanza de datos, moderación, transparencia y mecanismos de revisión no pueden ser reemplazados por alfabetización individual.',
        'El capítulo nombra como referencia a John Dewey, Elinor Ostrom, Beth Noveck, Oscar Oszlak y literatura sobre gobierno abierto, justicia abierta y gobernanza multinivel, como tradiciones que ofrecen lenguajes distintos para observar estos procesos.',
      ],
    },
    comprender: {
      subtitulo: 'Comprender',
      parrafos: [
        'Por qué hay que evitar las causalidades rápidas: en el territorio híbrido, un mismo resultado puede surgir de combinaciones distintas de capacidad, contexto, diseño, normas e incentivos. Por eso, frente a una decisión organizacional sobre monitoreo o diseño de plataforma, la pregunta no debería limitarse a si la herramienta existe, sino a reconstruir para qué se activó, qué condiciones la vuelven proporcionada o no, y qué evidencia permite distinguir una necesidad real de una decisión tomada solo porque la tecnología lo permitía.',
        'Por qué esta precaución importa especialmente acá: la novedad tecnológica suele producir diagnósticos acelerados que confunden correlación, exposición, mecanismo y consecuencia — asumir que más capacidad de observación equivale, automáticamente, a mejor gestión o mayor seguridad, sin preguntarse qué problema concreto resuelve, es exactamente ese tipo de atajo.',
        'Por qué esto no es solo un problema de adaptación individual: una persona puede desarrollar capacidades y continuar condicionada por reglas opacas, interfaces inaccesibles, procedimientos institucionales confusos o asimetrías de información. En sentido inverso, una regulación o un diseño protector pueden resultar insuficientes si quienes participan carecen de conocimientos, vínculos de confianza o posibilidades reales de utilizarlos. La intervención se vuelve consistente cuando reconoce esta reciprocidad entre capacidad y entorno, y distribuye la responsabilidad según lo que cada actor puede efectivamente transformar — acá, eso significa que la organización que diseña o activa una herramienta no puede trasladarle a cada usuario individual la responsabilidad de protegerse de un diseño que no fue pensado para protegerlo.',
      ],
      recuadro: {
        titulo: 'Lo que esto NO es',
        parrafos: [
          'No es que cualquier capacidad técnica de monitorear justifique usarla: la posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado.',
          'No es que la responsabilidad de una plataforma se resuelva formando mejores usuarios: defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos son decisiones de diseño con consecuencias sociales que la alfabetización individual no puede reemplazar.',
          'No es que proteger derechos sea un paso que se agrega después de construir un sistema: la seguridad y los derechos por diseño buscan integrar esa protección desde la arquitectura misma.',
          'No es que formar ciudadanos más capaces alcance sin organizaciones más responsables: ambas transformaciones pertenecen al mismo proceso.',
        ],
      },
    },
    aplicar: {
      subtitulo: 'Aplicar',
      parrafoPreguntas: 'Frente a una situación concreta, este capítulo funciona como lente de lectura, con tres preguntas en orden:',
      preguntas: [
        '**¿Qué dimensión humana o institucional está comprometida?** Qué parte de la privacidad, la confianza o las condiciones de trabajo de las personas está en juego frente a esta decisión de monitoreo o de diseño.',
        '**¿Qué condiciones sociotécnicas intervienen?** Si la herramienta se activó para resolver una necesidad identificada o solo porque estaba disponible, y qué decisiones de diseño —defaults, moderación, visibilidad— están produciendo este resultado.',
        '**¿Qué cambio sería proporcionado?** Un cambio que ajuste el nivel de monitoreo o el diseño de la plataforma a lo que realmente hace falta resolver, sin trasladarle a cada persona usuaria la responsabilidad de protegerse de un diseño que no la protege.',
      ],
      parrafoMovimientos: '',
      movimientos: [],
    },
    fichaAula2: fichaVacia,
  },
  unCasoResuelto: {
    titulo: 'Un caso resuelto',
    subtitulo: 'El caso',
    caso:
      'Una empresa de atención al cliente nota que, en los últimos meses, los tiempos de respuesta a los clientes empeoraron en uno de sus equipos. El área de sistemas propone una solución rápida: instalar un software que registre, minuto a minuto, cada actividad en la computadora de cada empleado del equipo —capturas de pantalla periódicas, registro de aplicaciones abiertas, tiempo exacto de inactividad del mouse—. El software ya estaba disponible como parte de otra licencia que la empresa ya pagaba, así que se activa esa misma semana, para todo el equipo, sin avisar primero a nadie.',
    fases: [
      {
        numero: 1,
        titulo: 'Comprender',
        parrafos: [
          'Qué pasó: frente a un problema concreto y acotado —tiempos de respuesta más lentos—, la empresa activó una herramienta de monitoreo exhaustivo, no porque hubiera evaluado que ese nivel de detalle era necesario, sino porque ya estaba disponible y era técnicamente posible usarla. Participan los empleados del equipo, que ahora están bajo una vigilancia mucho más detallada que antes, sin haber sido consultados; el área de sistemas, que resolvió el problema con la herramienta que tenía más a mano; y los clientes, cuyo problema original —la demora— todavía no se sabe si tiene que ver con lo que el software mide.',
        ],
        nota: '(Acá me pregunto: ¿capturas de pantalla cada pocos minutos me van a decir por qué bajó el tiempo de respuesta, o solo me van a decir que la gente usa la computadora?)',
      },
      {
        numero: 2,
        titulo: 'Descomponer',
        parrafos: [
          'Qué está comprometido: la posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado — y acá eso es exactamente lo que pasó. Nadie se preguntó qué nivel de información hacía falta para entender el problema de los tiempos de respuesta antes de activar un monitoreo que registra absolutamente todo.',
          'Qué condiciones sociotécnicas intervienen: la disponibilidad previa de la herramienta (ya estaba pagada, era fácil de activar) funcionó como el criterio real de decisión, en lugar de una evaluación de proporcionalidad entre lo que se necesitaba saber y lo que se terminó recolectando. No hubo ninguna instancia de participación: el equipo se enteró del monitoreo cuando ya estaba funcionando, no antes.',
        ],
        nota: '(Acá me pregunto: si el problema es el tiempo de respuesta a los clientes, ¿necesito saber todo lo que cada persona hace en su pantalla, o me alcanza con medir específicamente el tiempo de respuesta?)',
      },
      {
        numero: 3,
        titulo: 'Decidir',
        parrafos: [
          'Qué cambio sería proporcionado: desactivar el monitoreo exhaustivo y reemplazarlo por una medición específica del problema identificado —por ejemplo, el tiempo entre que llega una consulta y se responde, sin necesidad de capturas de pantalla ni registro de cada aplicación abierta—. Si después de medir eso aparece una causa que sí requiera mirar más de cerca, se puede ampliar el monitoreo de forma puntual y justificada, no exhaustiva y preventiva desde el inicio. Además, conversar con el equipo antes de activar cualquier forma de seguimiento, no después.',
        ],
        nota: '(Acá me pregunto: ¿qué tan distinto sería el clima del equipo si, en vez de activar en secreto un monitoreo total, alguien les hubiera dicho "tenemos este problema, vamos a medir esto específico para entenderlo juntos"?)',
      },
      {
        numero: 4,
        titulo: 'Revisar',
        parrafos: [
          'Qué no le corresponde asumir al área de sistemas: no le corresponde sentir que medir y hacer seguimiento de un problema real fue un error — tener datos para entender qué está pasando es razonable y necesario.',
          'Qué podría salir mal: que, por la incomodidad generada, la empresa desactive cualquier forma de medición y pierda la capacidad de detectar a tiempo problemas reales de gestión; o que, al revés, el monitoreo exhaustivo quede instalado de forma permanente "ya que está", mucho después de que el problema original se resuelva o se explique por otra causa. Lo que ajustaría para la próxima vez: que ninguna herramienta de monitoreo se active sin antes responder por escrito a una pregunta simple —"¿qué necesitamos saber, específicamente, para resolver qué problema?"— y que esa decisión se comunique al equipo antes de implementarla, no después.',
        ],
        nota: '(Acá me pregunto: en mi propia organización, ¿hay alguna herramienta de seguimiento o monitoreo que se activó "porque se podía", sin que nadie haya definido antes qué problema puntual venía a resolver?)',
      },
    ],
  },
  practicaVos: {
    titulo: 'Practicá vos',
    intro:
      'Vas a analizar tres situaciones nuevas, de complejidad creciente. En cada una, vas a decidir qué está en juego: proporcionalidad del monitoreo laboral, responsabilidad de diseño de una plataforma, o seguridad y derechos por diseño. Después de cada una, vas a ver un análisis experto comentado.',
    revelarLabel: 'Ver análisis',
    situaciones: [
      {
        clave: 's1',
        enunciado:
          'Una empresa de logística instala GPS en sus camiones de reparto para saber en tiempo real dónde está cada vehículo, exclusivamente durante el horario y la ruta de trabajo. El sistema se desactiva automáticamente al finalizar el turno, y los choferes fueron informados y consultados antes de su implementación.',
        analisis:
          '¿Qué está en juego acá? Proporcionalidad del monitoreo laboral. El seguimiento se limita a la información necesaria para la función que busca cumplir —coordinar rutas de reparto durante el horario laboral—, se desactiva fuera de ese horario, y hubo información y consulta previa. Es exactamente el tipo de monitoreo proporcionado que el capítulo no cuestiona: seguridad, privacidad, proporcionalidad y participación están presentes.',
        nota:
          '(Si elegiste "responsabilidad de diseño de plataforma" o "seguridad por diseño": acá no está en juego el diseño de una plataforma que usan terceros, ni una arquitectura de protección de datos más amplia — es, puntualmente, un monitoreo laboral bien acotado a su finalidad.)',
      },
      {
        clave: 's2',
        enunciado:
          'Una red social configura, por defecto, que el perfil de cualquier cuenta nueva sea público y que cualquier persona pueda enviarle mensajes directos, sin que el usuario tenga que activar nada de eso. Para tener un perfil privado, hay que buscar la opción entre varios menús de configuración.',
        analisis:
          '¿Qué está en juego acá? Responsabilidad de diseño de una plataforma. La plataforma decidió, por defecto, exponer a cualquier persona nueva a contacto de desconocidos, y puso la protección como una opción que hay que buscar activamente, en vez de como el punto de partida. Es exactamente lo que el capítulo señala: defaults y políticas de datos son decisiones con consecuencias sociales que la alfabetización individual —saber buscar la configuración correcta— no puede reemplazar como responsabilidad principal.',
        nota:
          '(Si elegiste "proporcionalidad del monitoreo laboral": acá no hay ninguna relación laboral ni ningún monitoreo de por medio — es una decisión de diseño que afecta a cualquier persona que se registra en la plataforma.)',
      },
      {
        clave: 's3',
        enunciado:
          'Una empresa que desarrolla un sistema de inteligencia artificial para evaluar currículums decide, desde la etapa de diseño del sistema, que solo va a procesar los datos estrictamente necesarios para evaluar la idoneidad del puesto —formación y experiencia relevante—, excluyendo explícitamente datos como género, edad o foto, y publica una política clara sobre cómo funciona el sistema.',
        analisis:
          '¿Qué está en juego acá? Seguridad y derechos por diseño. La protección no se agregó después de construir el sistema: se integró desde la arquitectura misma, decidiendo de antemano qué datos tratar y cuáles excluir, y haciendo pública esa decisión. Es exactamente el principio del capítulo: integrar protección desde el diseño, no como un parche posterior.',
        nota:
          '(No hay una sola forma de implementar esto, pero sí está claro qué principio está en juego: no es un monitoreo laboral puntual ni solo una configuración de plataforma, es una decisión de arquitectura tomada antes de que el sistema exista.)',
      },
    ],
    error: {
      subtitulo: 'Encontrá el error',
      intro:
        'Estos son los comentarios que hicieron dos integrantes de un equipo directivo sobre dos situaciones de monitoreo y diseño digital en su organización. Cada uno tiene un error conceptual, y los dos errores son opuestos entre sí. ¿Dónde está el de cada uno?',
      citaA:
        'Si la herramienta puede registrar todo lo que hace cada empleado, no veo por qué no usarla al máximo. Total, la tecnología está ahí, sería raro no aprovecharla.',
      citaB:
        'Si a alguien le pasó algo malo en nuestra plataforma, es porque no supo configurar bien su privacidad. Nosotros ya le dimos las opciones, el resto es responsabilidad suya.',
      botonLabel: 'Ver los errores',
      errorIntro: 'Los errores:',
      errorA:
        '**Comentario A** confunde posibilidad técnica con justificación. La posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado: hace falta que ese monitoreo responda a una necesidad real y sea proporcionado a ella, no que simplemente "se pueda hacer".',
      errorB:
        '**Comentario B** traslada toda la responsabilidad a la persona usuaria, ignorando que las decisiones de diseño —qué viene activado por defecto, qué tan fácil es encontrar la protección— son decisiones con consecuencias sociales que la alfabetización individual no puede reemplazar. Que existan opciones no alcanza si el diseño por defecto empuja hacia la exposición.',
      errorCierre:
        'Los dos caen en el mismo error de fondo: ninguno asume la responsabilidad que le corresponde a quien diseña o activa un sistema. Uno la delega en la tecnología misma ("se puede, así que se hace"); el otro la delega por completo en quien la usa ("ya le dimos la opción").',
    },
  },
  poneAPrueba: {
    titulo: 'Poné a prueba lo aprendido',
    intro:
      'Cuatro preguntas, una por cada objetivo de esta temática. Buscan confirmar si el concepto quedó comprendido, no si completaste una tarea.',
    preguntas: [
      {
        objetivo: 'reconocer que la posibilidad técnica de monitorear no justifica por sí sola un monitoreo ilimitado, e identificar qué hace falta para que sea proporcionado',
        enunciado:
          'Una empresa activa un sistema de monitoreo laboral exhaustivo porque "ya estaba disponible" en una licencia que pagaba, sin haber definido antes qué problema concreto quería resolver. ¿Qué dice el capítulo sobre esta decisión?',
        opciones: [
          {
            id: 'a',
            texto:
              'Que la posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado, y que seguridad, privacidad, proporcionalidad y participación necesitan formar parte de la decisión.',
          },
          { id: 'b', texto: 'Que está bien, porque la empresa tiene derecho a usar cualquier herramienta que haya pagado.' },
          { id: 'c', texto: 'Que el problema solo existe si los empleados se quejan formalmente.' },
          { id: 'd', texto: 'Que cualquier forma de monitoreo laboral es, en sí misma, una violación de derechos.' },
        ],
        correcta: 'a',
        feedbacks: {
          b: 'Que una herramienta ya esté pagada o disponible no es el criterio que la justifica: lo que importa es si responde a una necesidad real y es proporcionada a ella.',
          c: 'El capítulo no condiciona la proporcionalidad a que haya una queja formal: la pregunta sobre qué es proporcionado debería hacerse antes de activar la herramienta, no después de que alguien reclame.',
          d: 'El capítulo no rechaza cualquier monitoreo laboral: plantea que seguridad, privacidad, proporcionalidad y participación formen parte de la decisión, no que el monitoreo esté prohibido en todos los casos.',
        },
      },
      {
        objetivo: 'entender que las decisiones de diseño de una plataforma tienen consecuencias sociales que la alfabetización individual no puede compensar',
        enunciado:
          'Una red social configura, por defecto, que cualquier perfil nuevo sea público y reciba mensajes de desconocidos, dejando la opción privada escondida entre varios menús. ¿Qué principio del capítulo explica por qué esto es un problema de la plataforma y no solo de quien la usa?',
        opciones: [
          { id: 'a', texto: 'Que los usuarios deberían leer mejor los términos y condiciones antes de registrarse.' },
          { id: 'b', texto: 'Que las redes sociales no tienen ninguna responsabilidad sobre lo que les pasa a sus usuarios.' },
          {
            id: 'c',
            texto:
              'Que defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos son decisiones con consecuencias sociales que la alfabetización individual no puede reemplazar.',
          },
          { id: 'd', texto: 'Que el problema se resuelve enseñándoles a los usuarios a usar mejor la configuración de privacidad.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'Leer mejor los términos y condiciones no cambia que la opción insegura venga activada por defecto para millones de personas: el problema es de diseño, no de lectura.',
          b: 'El capítulo sostiene exactamente lo contrario: las plataformas poseen una capacidad adicional porque diseñan el ambiente que otros habitan, y eso implica responsabilidad.',
          d: 'El capítulo es explícito en que la alfabetización individual no puede reemplazar la responsabilidad de diseño: enseñar a usar mejor una configuración no corrige que el default siga siendo inseguro para quien no la busque.',
        },
      },
      {
        objetivo: 'comprender el principio de seguridad y derechos por diseño, y por qué ciudadanos más capaces y organizaciones más responsables son parte del mismo proceso',
        enunciado:
          'Una empresa que desarrolla un sistema de IA decide, desde la etapa de diseño, procesar solo los datos estrictamente necesarios y excluir explícitamente otros que no hacen falta. ¿Qué principio del capítulo aplica esta decisión?',
        opciones: [
          { id: 'a', texto: 'Alfabetización individual, porque depende de que los usuarios sepan configurar bien sus datos.' },
          { id: 'b', texto: 'Ninguno en particular: es solo una buena práctica técnica sin relación con derechos.' },
          { id: 'c', texto: 'Proporcionalidad del monitoreo laboral, porque se trata de una relación de trabajo.' },
          {
            id: 'd',
            texto:
              'Seguridad y derechos por diseño, que busca integrar protección desde la arquitectura del sistema, no como un agregado posterior.',
          },
        ],
        correcta: 'd',
        feedbacks: {
          a: 'No depende de ninguna acción de la persona usuaria: la decisión se tomó en el diseño del sistema, antes de que cualquier usuario interactúe con él.',
          b: 'El capítulo vincula explícitamente este principio con los derechos de las personas cuyos datos se procesan: no es una cuestión puramente técnica, separada de derechos.',
          c: 'La situación no describe una relación laboral ni un monitoreo de empleados: es una decisión de arquitectura de un sistema de IA.',
        },
      },
      {
        objetivo: 'usar el capítulo como lente de lectura frente a una decisión organizacional concreta',
        enunciado:
          'Frente a una decisión organizacional sobre monitoreo o diseño de un sistema, el capítulo propone un método de tres preguntas. ¿Cuál es el orden correcto?',
        opciones: [
          { id: 'a', texto: 'Qué cambio sería proporcionado → qué dimensión está comprometida → qué condiciones sociotécnicas intervienen.' },
          { id: 'b', texto: 'Qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado → qué dimensión está comprometida.' },
          {
            id: 'c',
            texto: 'Qué dimensión humana o institucional está comprometida → qué condiciones sociotécnicas intervienen → qué cambio sería proporcionado.',
          },
          { id: 'd', texto: 'Qué tecnología está disponible → qué tan barata es → qué tan rápido se puede implementar.' },
        ],
        correcta: 'c',
        feedbacks: {
          a: 'El orden está invertido: el capítulo propone identificar primero qué está comprometido, y recién al final decidir qué cambio sería proporcionado.',
          b: 'Empezar por las condiciones sociotécnicas sin identificar antes qué dimensión está comprometida deja sin marco la pregunta siguiente.',
          d: 'Ese no es el método que da el capítulo: la disponibilidad, el costo o la velocidad de implementación son, justamente, los criterios que llevaron al error del caso resuelto, no el método para evitarlo.',
        },
      },
    ],
    correcto: 'Correcto.',
    rubricaTitulo: 'Rúbrica de desempeño',
    rubricaIntro: 'Se aplica sobre el análisis que hiciste en Practicá vos.',
    rubricaColNivel: 'Nivel',
    rubricaColMuestra: 'Qué muestra el docente',
    rubrica: [
      {
        nivel: '1. Inicial',
        muestra:
          'Justifica cualquier monitoreo porque "la tecnología lo permite", o responsabiliza solo a los usuarios por no usar bien una plataforma cuyo diseño facilita el daño.',
      },
      {
        nivel: '2. En desarrollo',
        muestra:
          'Reconoce que algo no está bien en la situación, pero no distingue con precisión si el problema es de proporcionalidad, de diseño de plataforma, o de seguridad por diseño.',
      },
      {
        nivel: '3. Logrado',
        muestra: 'Distingue las tres dimensiones, identifica cuál está en juego en una situación concreta y propone un cambio proporcionado a la necesidad real.',
      },
      {
        nivel: '4. Avanzado',
        muestra:
          'Además reconoce cuándo una organización traslada indebidamente su responsabilidad de diseño a la alfabetización individual, y aplica el principio de seguridad y derechos por diseño desde la arquitectura de un sistema.',
      },
    ],
    rubricaCierre:
      'Cada uno de los cuatro objetivos de esta temática queda cubierto dos veces: por una de las preguntas de arriba y por un criterio de esta rúbrica.',
  },
  llevaloATuAula: {
    titulo: 'Llevalo a tu aula',
    parrafo1:
      'Ya tenés el mapa de esta temática: por qué la posibilidad técnica de monitorear no es, por sí sola, una justificación; por qué las decisiones de diseño de una plataforma tienen consecuencias que la alfabetización individual no puede compensar; y qué significa construir seguridad y derechos desde la arquitectura misma de un sistema. Lo que cambia, a partir de acá, es cómo mirás las herramientas de monitoreo y las plataformas que ya usás o gestionás, no solo lo que pueden hacer sino lo que deberían.',
    accionSemana:
      'Usá este capítulo como lente de lectura esta semana: frente a una situación concreta de tu escuela, tu familia, la universidad, la administración pública, la justicia o una organización donde una herramienta de monitoreo o una plataforma esté tomando decisiones sobre personas, identificá primero qué dimensión humana o institucional está comprometida, después qué condiciones sociotécnicas intervienen —si hay proporcionalidad, participación y transparencia, o solo disponibilidad técnica— y finalmente qué cambio sería proporcionado.',
    parrafo2:
      'Volvé al problema de Por qué importa: la empresa que activó un monitoreo exhaustivo de sus empleados porque la herramienta ya estaba disponible, sin preguntarse antes qué problema concreto quería resolver. Releé tu respuesta original. Con lo que viste en esta temática, ¿qué pregunta de proporcionalidad le faltaba a esa decisión? ¿Qué herramienta de seguimiento de tu propio entorno mirarías ahora con esta misma pregunta? Anotá en dos o tres líneas qué cambió en tu forma de pensarlo.',
    parrafo3: '',
    respuestaOriginalEtiqueta: 'Tu respuesta original',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    campoEtiqueta: '¿Qué cambió en tu forma de pensarlo?',
    fichaAula3: {
      titulo: 'Límites a la vigilancia laboral: lo que acordó la OIT en 2026',
      objetivo:
        'Conocer las conclusiones de la Reunión técnica de la OIT sobre inteligencia artificial y trabajo decente, y reconocer qué condiciones —transparencia, supervisión humana, diálogo social— distinguen un monitoreo laboral proporcionado de uno que no lo es.',
      desarrollo: [
        {
          tipo: 'parrafo',
          texto:
            'En abril de 2026, la Organización Internacional del Trabajo (OIT) convocó en Ginebra una Reunión técnica tripartita —con representantes de gobiernos, empleadores y trabajadores de todo el mundo— sobre los desafíos y las oportunidades que plantea la inteligencia artificial para el trabajo decente, la productividad y una transición justa en la industria manufacturera.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La discusión identificó riesgos concretos de lo que se llama gestión algorítmica: sistemas de inteligencia artificial que pueden "establecer ritmos de trabajo, asignar tareas, evaluar el desempeño, activar alertas, aplicar criterios disciplinarios, e influir en las decisiones en materia de contratación y promoción". La Reunión concluyó que, "a menos que dichos sistemas fueran transparentes, auditables y objeto de supervisión humana, cabía el riesgo de que hicieran los lugares de trabajo más opacos y autoritarios, y de que fuera más difícil para los trabajadores cuestionarlos". Entre los riesgos emergentes se nombraron explícitamente la intensificación del trabajo, la supervisión permanente del desempeño y nuevas formas de control digital.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Frente a esto, la Reunión acordó que la utilización de la inteligencia artificial en el trabajo "debía ir acompañada de la información, la consulta, la participación de los sindicatos y la negociación colectiva", y que los trabajadores debían participar "desde las primeras etapas del diseño, la planificación, la introducción y la evaluación" de estos sistemas, no solo cuando ya están implementados. Se pidió además que la OIT elaborara orientaciones específicas sobre "la transparencia de los sistemas algorítmicos, los límites a la vigilancia, la protección de los datos personales y la privacidad de los trabajadores... el mantenimiento de la supervisión humana significativa y la prohibición de dejar exclusivamente en manos de sistemas automatizados las decisiones de alto impacto" — retomando, además, un antecedente ya existente: el Repertorio de recomendaciones prácticas de la OIT sobre la protección de datos personales de los trabajadores, de 1997.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Como ejemplo de lo que sí funciona, un sindicato de Suecia describió una fábrica que pasó de producción manual a operaciones automatizadas: la negociación previa entre el sindicato y la empresa llevó a evaluar las competencias de cada trabajador y ofrecer un programa de capacitación como parte de la transición, de modo que nadie fue despedido por falta de competencias frente al nuevo sistema.',
        },
      ],
      preguntaDetonadora:
        'Si tu lugar de trabajo o tu escuela incorporara mañana un sistema que evalúa el desempeño de las personas automáticamente, ¿qué tendría que pasar antes de que se active, según lo que acordó la OIT?',
      actividades: [
        {
          titulo: 'Actividad inicial — "Transparente, auditable, con supervisión humana" (15 min)',
          bloques: [
            {
              tipo: 'parrafo',
              texto:
                'Presentá un ejemplo de sistema de gestión algorítmica (por ejemplo, uno que asigna tareas y evalúa desempeño automáticamente). En grupos, evalúan: ¿es transparente (se entiende cómo decide)? ¿Es auditable (alguien externo podría revisarlo)? ¿Tiene supervisión humana real, o las decisiones las toma solo el sistema?',
            },
          ],
        },
        {
          titulo: 'Actividad principal — "Nuestro protocolo de diálogo social" (45-60 min)',
          bloques: [
            { tipo: 'parrafo', texto: 'Paso a paso:' },
            {
              tipo: 'lista',
              items: [
                'En grupos, imaginan que su escuela o una organización que conocen va a incorporar un sistema de monitoreo o evaluación automatizada.',
                'Diseñan un protocolo de implementación que incluya: en qué momento se informa y consulta a las personas afectadas, quién tiene la última palabra sobre decisiones de alto impacto (no el sistema solo), y cómo alguien podría cuestionar una decisión que le parece injusta.',
                'Comparan su protocolo con lo que acordó la Reunión de la OIT: ¿contempla información, consulta, participación y supervisión humana significativa?',
                'Presentan su protocolo al resto del curso.',
              ],
            },
          ],
        },
      ],
      frase: '"Un sistema que decide por vos, sin que puedas cuestionarlo, no es gestión: es opacidad con apariencia de eficiencia."',
      glosario: ['Gestión algorítmica', 'Supervisión humana significativa', 'Transparencia algorítmica', 'Diálogo social', 'Decisión de alto impacto'],
      referencias: [
        'Organización Internacional del Trabajo (OIT) (2026). Reunión técnica sobre los desafíos y las oportunidades que plantea la utilización de la inteligencia artificial para la promoción del trabajo decente, la productividad y una transición justa en la industria manufacturera. Ginebra, 13-17 de abril de 2026.',
      ],
    },
  },
  recursosYCierre: {
    titulo: 'Recursos y cierre',
    cambioTitulo: 'Antes de cerrar: ¿qué cambió?',
    cambioInstruccion: 'Volvé a tu respuesta de Por qué importa. Releela.',
    sinRespuestaAntes: 'Todavía no escribiste tu respuesta en ',
    sinRespuestaEnlaceTexto: 'Por qué importa',
    sinRespuestaEnlaceHref: '#por-que-importa',
    sinRespuestaDespues: ' — podés volver a esa sección y hacerlo cuando quieras.',
    pregunta: 'Con lo que sabés ahora, ¿cómo le explicarías a alguien la diferencia entre poder monitorear algo y tener una razón válida para hacerlo?',
    placeholder: 'Escribí tu explicación.',
    nota: 'No hay respuesta correcta: es solo para que veas el recorrido que hiciste.',
    llevarteTitulo: 'Para llevarte',
    tarjeta: {
      titulo: 'Empresas, Organizaciones y Plataformas, en una tarjeta',
      parrafos: [
        'Las organizaciones gobiernan datos, condiciones de trabajo y adopción de IA. La posibilidad técnica de observar una conducta no constituye por sí misma una justificación para monitoreo ilimitado. Seguridad, privacidad, proporcionalidad y participación necesitan formar parte de la transformación laboral.',
        '**Responsabilidad de diseño:** las plataformas poseen una capacidad adicional porque diseñan el ambiente que otros habitan. Defaults, moderación, mecanismos de denuncia, visibilidad y políticas de datos son decisiones con consecuencias sociales. La alfabetización individual no puede reemplazar esa responsabilidad.',
        '**Seguridad y derechos por diseño:** busca integrar protección desde la arquitectura. Ciudadanos más capaces y organizaciones más responsables pertenecen al mismo proceso de transformación.',
        '**Y una cosa más:** esta temática no se agota en sí misma. Su significado se completa al relacionarse con la dignidad, la agencia, la autonomía, el Poliedro de Ciudadanía Digital y la prevención — fortalecer una capacidad puede tener costos o beneficios sobre otras, y por eso la mejora hay que observarla de manera transversal.',
      ],
    },
    seguiTitulo: 'Seguí explorando la plataforma',
    seguiAntes: 'Esta temática forma parte del grupo Gobierno y Comunidad Digital. Podés volver al ',
    seguiEnlaceTexto: 'listado completo de módulos y temáticas',
    seguiEnlaceHref: '/tematicas',
    seguiDespues: ' para seguir explorando.',
    referenciasTitulo: 'Referencias',
    referenciasIntro: 'Esta temática se apoya en:',
    referencias: ['John Dewey', 'Elinor Ostrom', 'Beth Noveck', 'Oscar Oszlak'],
    cierreTitulo: 'Cierre',
    cierreParrafo:
      'Empresas, organizaciones y plataformas no debe permanecer como un capítulo autosuficiente. El conocimiento se vuelve operativo cuando permite anticipar las relaciones entre dignidad, agencia, autonomía, Poliedro, prevención y responsabilidad situada, y revisar las decisiones a la luz de sus efectos reales.',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[EMPRESASPLATAFORMAS_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
