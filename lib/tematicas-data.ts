import { Shield, Eye, Lock, AlertTriangle, Search, Baby, ShieldAlert, Brain, Users, Scale, BookOpen, ScanEye, MousePointerClick, Flame, Compass, Hexagon, Microscope, Heart, HeartPulse, Gavel, MessageCircle, ShieldCheck, GraduationCap, Vote, Wallet, type LucideIcon } from "lucide-react"
import type { Audiencia } from "./audiencias"

export interface TematicaItem {
  id: string
  href: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  color: string
  // Requiere ser miembro de la plataforma (Ciudadanía Presente) para acceder
  // — gatea el link en /tematicas, redirigiendo a /ciudadania-presente/modulos.
  // No dice nada sobre si el contenido en sí ya existe.
  locked: boolean
  // La ruta (`href`) todavía no tiene página real construida (404 si se
  // navega). Distinto de `locked`: una temática puede estar `locked` (requiere
  // membresía) y tener contenido real, o —como acá— no tener contenido
  // todavía independientemente de la membresía. En el dashboard de la
  // plataforma (`/dashboard/tematicas`) esto se usa para mostrar "Próximamente"
  // en vez de la card navegable normal, y para saltear el ítem del cálculo de
  // desbloqueo secuencial del módulo (no bloquea a los que vienen después).
  sinContenido?: boolean
  // Públicos a los que el contenido, tal como está redactado hoy, le sirve.
  // Ausente = sin clasificar (contenido ambiguo/neutro) — no asumir "todos los
  // públicos" ni mostrar en filtros de público activos. Ver
  // content-management/PROPUESTA-AUDIENCIAS.md para el criterio por temática.
  audiencias?: Audiencia[]
}

export interface TematicaGroup {
  label: string
  accent: string
  items: TematicaItem[]
}

export const groups: TematicaGroup[] = [
  {
    label: "Ciudadanía Digital",
    accent: "#4272BB",
    items: [
      {
        id: "ciudadania-digital",
        href: "/ciudadania-digital",
        category: "Kit de Acción",
        title: "Ciudadanía Digital",
        description: "Protocolo de seguridad, netiqueta y detección de bulos. Un kit interactivo para ejercer tus derechos y responsabilidades en el mundo digital.",
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Ciudadanía Digital",
        icon: Shield,
        color: "#4272BB",
        locked: false,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "instrumental-y-acceso",
        href: "/tematicas/instrumental-y-acceso",
        category: "Kit de Acción",
        title: "Instrumental y Acceso",
        description: "La primera dimensión del Poliedro de Ciudadanía Digital: qué es la capacidad instrumental y cómo distinguir si una dificultad es de la persona o del diseño del servicio.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Instrumental y Acceso",
        icon: Shield,
        color: "#4272BB",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "cognitivo-intelectual-e-informacional",
        href: "/tematicas/cognitivo-intelectual-e-informacional",
        category: "Kit de Acción",
        title: "Cognitivo-Intelectual e Informacional",
        description: "La segunda dimensión del Poliedro de Ciudadanía Digital: cómo evaluar la calidad de la información, aplicar la lectura lateral y ajustar cuánto verificar según lo que está en juego.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Cognitivo-Intelectual e Informacional",
        icon: Microscope,
        color: "#4272BB",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "socio-comunicacional-e-identidad",
        href: "/tematicas/socio-comunicacional-e-identidad",
        category: "Kit de Acción",
        title: "Socio-Comunicacional e Identidad",
        description: "La tercera dimensión del Poliedro de Ciudadanía Digital: cómo anticipar la audiencia, la persistencia y la circulación de lo que decimos, distinguir la netiqueta de la convivencia y aprender a reparar.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Socio-Comunicacional e Identidad",
        icon: MessageCircle,
        color: "#4272BB",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "emocional",
        href: "/tematicas/emocional",
        category: "Kit de Acción",
        title: "Emocional",
        description: "La cuarta dimensión del Poliedro de Ciudadanía Digital: cómo las emociones participan de nuestras decisiones digitales, cómo los entornos las amplifican, y cuándo pausar, pedir una segunda mirada o pedir ayuda.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Emocional",
        icon: Heart,
        color: "#4272BB",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "huella-digital",
        href: "/huella-digital",
        category: "Privacidad",
        title: "Huella Digital",
        description: "Auditá tu exposición en internet y gestioná tu identidad digital. Descubrí qué datos tuyos son públicos y cómo recuperar el control.",
        image: "/img/cards/hueDig.jpg",
        imageAlt: "Banner Huella Digital",
        icon: Eye,
        color: "#D5247A",
        locked: true,
        audiencias: ["familias", "docentes"],
      },
      {
        id: "hiperconectividad-digital",
        href: "/hiperconectividad-digital",
        category: "Neurodesarrollo",
        title: "Hiperconectividad Digital",
        description: "Impacto de las pantallas y redes sociales en el cerebro adolescente. Evidencia científica sobre FOMO, cultura del like y salud mental en la era TRIC.",
        image: "/img/cards/hiperDig.jpg",
        imageAlt: "Banner Hiperconectividad Digital",
        icon: Brain,
        color: "#6366F1",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "salud-y-bienestar-digital",
        href: "/tematicas/salud-y-bienestar-digital",
        category: "Kit de Acción",
        title: "Salud y Bienestar Digital",
        description: "La quinta dimensión del Poliedro de Ciudadanía Digital: por qué el bienestar digital no se mide en horas de pantalla, qué factores pesan y qué depende de la persona y qué del entorno.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Salud y Bienestar Digital",
        icon: HeartPulse,
        color: "#059669",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "etico-normativa-y-derechos",
        href: "/tematicas/etico-normativa-y-derechos",
        category: "Kit de Acción",
        title: "Ético-Normativa y Derechos",
        description: "La sexta dimensión del Poliedro de Ciudadanía Digital: por qué que la tecnología lo permita no vuelve legítima una acción, cómo distinguir valores, reglas sociales, reglas de plataforma y normas jurídicas, y qué criterios usar para decidir.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Ético-Normativa y Derechos",
        icon: Gavel,
        color: "#7C3AED",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "seguridad-privacidad-y-proteccion-digital",
        href: "/tematicas/seguridad-privacidad-y-proteccion-digital",
        category: "Kit de Acción",
        title: "Seguridad, Privacidad y Protección Digital",
        description: "La séptima dimensión del Poliedro de Ciudadanía Digital: qué se protege hoy, qué es la confianza informada y cómo usar Pausar–Verificar–Decidir frente a la urgencia y la autoridad aparente.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Seguridad, Privacidad y Protección Digital",
        icon: ShieldCheck,
        color: "#0E7490",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "pedagogica-y-creativa",
        href: "/tematicas/pedagogica-y-creativa",
        category: "Kit de Acción",
        title: "Pedagógica y Creativa",
        description: "La octava dimensión del Poliedro de Ciudadanía Digital: cómo aprender y crear con tecnología, distinguir la capacidad aumentada de la sustitución cognitiva y decidir qué capacidad querés preservar o desarrollar.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Pedagógica y Creativa",
        icon: GraduationCap,
        color: "#EA580C",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "participacion-y-democracia",
        href: "/tematicas/participacion-y-democracia",
        category: "Kit de Acción",
        title: "Participación y Democracia",
        description: "La novena dimensión del Poliedro de Ciudadanía Digital: la diferencia entre interacción e incidencia, las condiciones de una participación democrática de calidad y qué hacer cuando una decisión importante la toma un sistema automatizado.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Participación y Democracia",
        icon: Vote,
        color: "#BE185D",
        locked: false,
        audiencias: ["docentes"],
      },
      {
        id: "economica-productiva-y-de-consumo",
        href: "/tematicas/economica-productiva-y-de-consumo",
        category: "Kit de Acción",
        title: "Económica, Productiva y de Consumo",
        description: "La décima y última dimensión del Poliedro de Ciudadanía Digital: las condiciones reales detrás de una compra, una suscripción o una herramienta de trabajo automatizada, y cómo decidir con autonomía.",
        // Reutiliza el banner de Ciudadanía Digital a falta de arte propio todavía (misma familia del Poliedro).
        image: "/img/cards/ciudDig.jpg",
        imageAlt: "Banner Económica, Productiva y de Consumo",
        icon: Wallet,
        color: "#166534",
        locked: false,
        audiencias: ["docentes"],
      },
    ],
  },
  {
    label: "Alfabetización",
    accent: "#0EA5E9",
    items: [
      {
        id: "alfabetizacion-digital",
        href: "/alfabetizacion-digital",
        category: "Habilidades Digitales",
        title: "Alfabetización Digital",
        description: "Competencias esenciales para desenvolverse en el entorno digital: uso de dispositivos, navegación segura, gestión de aplicaciones y comunicación en línea.",
        image: "/weekly-content/2026-W20/amipng.png",
        imageAlt: "Banner Alfabetización Digital",
        icon: BookOpen,
        color: "#0EA5E9",
        locked: false,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "alfabetizacion-mediatica",
        href: "/alfabetizacion-mediatica",
        category: "Información",
        title: "Alfabetización Mediática",
        description: "Herramientas y frameworks para consumir y compartir información con criterio. Aprendé a detectar desinformación y fake news.",
        image: "/img/cards/alfabetizacion/alfMed.jpg",
        imageAlt: "Banner Alfabetización Mediática",
        icon: Search,
        color: "#00D4AA",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "ia-etica-ciudadania",
        href: "/tematicas/ia-etica-ciudadania",
        category: "IA & Ética",
        title: "IA, Ética y Ciudadanía Digital",
        description: "La integración de la Inteligencia Artificial en el tejido social: economía del conocimiento, humanidad ampliada, AI Act 2024 y justicia digital con perspectiva de género.",
        image: "/img/cards/alfabetizacion/iaEtic.jpg",
        imageAlt: "Banner IA, Ética y Ciudadanía Digital",
        icon: Scale,
        color: "#00A99D",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
    ],
  },
  {
    label: "Seguridad",
    accent: "#F59E0B",
    items: [
      {
        id: "estafas-digitales",
        href: "/estafas-digitales",
        category: "Seguridad",
        title: "Estafas Digitales",
        description: "Phishing, smishing y vishing: aprendé a detectarlos antes de que sea tarde. Protocolo paso a paso para actuar si sos víctima.",
        image: "/weekly-content/2026-W23/estafapng.png",
        imageAlt: "Banner Estafas Digitales",
        icon: AlertTriangle,
        color: "#F59E0B",
        locked: false,
        audiencias: ["docentes", "familias"],
      },
    ],
  },
  {
    label: "Violencia Digital",
    accent: "#FF6B35",
    items: [
      {
        id: "violencia-digital",
        href: "/violencia-digital",
        category: "Derechos",
        title: "Violencia Digital hacia la Mujer",
        description: "Guía completa sobre ciberbullying, acoso en línea y violencia de género digital. Conocé tus derechos y cómo actuar si sos víctima.",
        image: "/weekly-content/2026-W22/violenciapng.png",
        imageAlt: "Banner Violencia Digital hacia la Mujer",
        icon: Lock,
        color: "#FF6B35",
        locked: false,
        audiencias: ["mujeres", "docentes", "familias"],
      },
      {
        id: "violencia-digital-infancias",
        href: "/violencia-digital-infancias",
        category: "Protección",
        title: "Violencia Digital en Infancias",
        description: "Grooming, ciberbullying y exposición a riesgos: cómo identificar señales de alerta y actuar a tiempo para proteger a niñas, niños y adolescentes.",
        image: "/weekly-content/2026-W25/card7.png",
        imageAlt: "Banner Violencia Digital en Infancias",
        icon: ShieldAlert,
        color: "#EF4444",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
    ],
  },
  {
    label: "Libres bajo influencia",
    accent: "#9333EA",
    items: [
      {
        id: "subculturas-digitales",
        href: "/tematicas/subculturas-digitales",
        category: "Comunidad digital",
        title: "Subculturas digitales",
        description: "Por qué lo digital funciona más como un territorio que como una herramienta, y cómo se forman ahí dentro comunidades con códigos, lenguaje y normas propias.",
        image: "/img/cards/libres%20bajo%20influencia/subculDig.jpg",
        imageAlt: "Infografía de Subculturas digitales",
        icon: Users,
        color: "#9333EA",
        locked: false,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "algoritmos-perfilado",
        href: "/tematicas/algoritmos-perfilado",
        category: "Datos y algoritmos",
        title: "Algoritmos y perfilado",
        description: "Cómo cada gesto digital deja una señal, cómo esas señales se convierten en un perfil, y qué significa realmente que un sistema \"nos conozca\".",
        image: "/img/cards/libres%20bajo%20influencia/algPerf.jpg",
        imageAlt: "Infografía de Algoritmos y perfilado",
        icon: ScanEye,
        color: "#2563EB",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "diseno-persuasivo-patrones-oscuros",
        href: "/tematicas/diseno-persuasivo-patrones-oscuros",
        category: "Diseño digital",
        title: "Diseño persuasivo y patrones oscuros",
        description: "Por qué la influencia digital rara vez llega como una orden, y dónde está la línea entre un diseño que ayuda y uno que manipula.",
        image: "/img/cards/libres%20bajo%20influencia/patroOscuros.jpg",
        imageAlt: "Infografía Diseño persuasivo y patrones oscuros",
        icon: MousePointerClick,
        color: "#DB2777",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "caldos-de-cultivo",
        href: "/tematicas/caldos-de-cultivo",
        category: "Desinformación",
        title: "Caldos de cultivo",
        description: "Cómo se combinan repetición, polarización y viralidad emocional hasta crear un ambiente donde la desinformación se propaga más rápido que la verdad.",
        image: "/img/cards/libres%20bajo%20influencia/caldCult.jpg",
        imageAlt: "Infografía de Caldos de cultivo",
        icon: Flame,
        color: "#EA580C",
        locked: true,
        audiencias: ["docentes", "familias"],
      },
      {
        id: "recuperar-la-agencia",
        href: "/tematicas/recuperar-la-agencia",
        category: "Autonomía",
        title: "Recuperar la agencia",
        description: "Reconocer todo lo anterior no significa negar nuestra capacidad de actuar: significa fortalecerla. Herramientas concretas para decidir con más conciencia.",
        image: "/img/cards/libres%20bajo%20influencia/recupAgencia.jpg",
        imageAlt: "Infografía de Recuperar la agencia",
        icon: Compass,
        color: "#059669",
        locked: true,
        audiencias: ["docentes", "familias", "ninas-ninos-adolescentes"],
      },
      {
        id: "poliedro-ciudadania-digital",
        href: "/tematicas/poliedro-ciudadania-digital",
        category: "Ciudadanía digital",
        title: "Ciudadanía digital: el poliedro",
        description: "La tesis de toda la charla: formar ciudadanía digital, no solamente usuarios. Un poliedro de ocho caras y la respuesta final a la paradoja del título.",
        image: "/img/cards/libres%20bajo%20influencia/poliedro.jpg",
        imageAlt: "Infografía Ciudadanía digital: el poliedro",
        icon: Hexagon,
        color: "#0EA5E9",
        locked: true,
        audiencias: ["docentes"],
      },
    ],
  },
  {
    label: "Infancia y Crianza",
    accent: "#14B8A6",
    items: [
      {
        id: "cibercrianza",
        href: "/tematicas/cibercrianza",
        category: "Cibercrianza",
        title: "¿Sabés dónde interactúan tus estudiantes?",
        description: "Cibercrianza: datos reales, quiz interactivo y claves para acompañar a tus estudiantes en el entorno digital.",
        image: "/img/cards/infancia%20t%20crianza/cibercri.jpg",
        imageAlt: "Banner Cibercrianza",
        icon: Users,
        color: "#14B8A6",
        locked: false,
        audiencias: ["familias", "docentes"],
      },
      {
        id: "nnya-entorno-digital",
        href: "/nnya-entorno-digital",
        category: "Infancia",
        title: "Niñas, Niños y Adolescentes en el Entorno Digital",
        description: "Cómo interpretan los niños, niñas y adolescentes el mundo digital. Guía práctica de mediación parental para acompañarlos de forma consciente.",
        image: "/img/cards/infancia%20t%20crianza/nnyAEntDig.jpg",
        imageAlt: "Banner NNyA y el Entorno Digital",
        icon: Baby,
        color: "#7C3AED",
        locked: true,
        audiencias: ["familias", "docentes"],
      },
    ],
  },
]
