import { Shield, Eye, Lock, AlertTriangle, Search, Baby, ShieldAlert, Brain, Users, Scale, BookOpen, ScanEye, MousePointerClick, Flame, Compass, Hexagon, type LucideIcon } from "lucide-react"
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
        image: "/weekly-content/2026-W19/ciudDigpng.png",
        imageAlt: "Banner Ciudadanía Digital",
        icon: Shield,
        color: "#4272BB",
        locked: true,
        audiencias: ["docentes"],
      },
      {
        id: "huella-digital",
        href: "/huella-digital",
        category: "Privacidad",
        title: "Huella Digital",
        description: "Auditá tu exposición en internet y gestioná tu identidad digital. Descubrí qué datos tuyos son públicos y cómo recuperar el control.",
        image: "/weekly-content/2026-W21/huellapng.png",
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
        image: "/weekly-content/2026-W26/card8.png",
        imageAlt: "Banner Hiperconectividad Digital",
        icon: Brain,
        color: "#6366F1",
        locked: true,
        audiencias: ["docentes", "familias"],
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
        locked: true,
        sinContenido: true,
      },
      {
        id: "alfabetizacion-mediatica",
        href: "/alfabetizacion-mediatica",
        category: "Información",
        title: "Alfabetización Mediática",
        description: "Herramientas y frameworks para consumir y compartir información con criterio. Aprendé a detectar desinformación y fake news.",
        image: "/weekly-content/2026-W20/amipng.png",
        imageAlt: "Banner Alfabetización Mediática",
        icon: Search,
        color: "#00D4AA",
        locked: true,
        audiencias: ["docentes"],
      },
      {
        id: "ia-etica-ciudadania",
        href: "/tematicas/ia-etica-ciudadania",
        category: "IA & Ética",
        title: "IA, Ética y Ciudadanía Digital",
        description: "La integración de la Inteligencia Artificial en el tejido social: economía del conocimiento, humanidad ampliada, AI Act 2024 y justicia digital con perspectiva de género.",
        image: "/weekly-content/2026-W19/ciudDigpng.png",
        imageAlt: "Banner IA, Ética y Ciudadanía Digital",
        icon: Scale,
        color: "#00A99D",
        locked: false,
        audiencias: ["docentes"],
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
        locked: true,
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
        locked: true,
        audiencias: ["mujeres"],
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
        image: "/img/tematicas/subculturas-digitales/infografia.webp",
        imageAlt: "Infografía de Subculturas digitales",
        icon: Users,
        color: "#9333EA",
        locked: true,
        audiencias: ["docentes"],
      },
      {
        id: "algoritmos-perfilado",
        href: "/tematicas/algoritmos-perfilado",
        category: "Datos y algoritmos",
        title: "Algoritmos y perfilado",
        description: "Cómo cada gesto digital deja una señal, cómo esas señales se convierten en un perfil, y qué significa realmente que un sistema \"nos conozca\".",
        image: "/img/tematicas/algoritmos-perfilado/infografia.webp",
        imageAlt: "Infografía de Algoritmos y perfilado",
        icon: ScanEye,
        color: "#2563EB",
        locked: true,
      },
      {
        id: "diseno-persuasivo-patrones-oscuros",
        href: "/tematicas/diseno-persuasivo-patrones-oscuros",
        category: "Diseño digital",
        title: "Diseño persuasivo y patrones oscuros",
        description: "Por qué la influencia digital rara vez llega como una orden, y dónde está la línea entre un diseño que ayuda y uno que manipula.",
        image: "/img/tematicas/diseno-persuasivo-patrones-oscuros/infografia.webp",
        imageAlt: "Infografía Diseño persuasivo y patrones oscuros",
        icon: MousePointerClick,
        color: "#DB2777",
        locked: true,
      },
      {
        id: "caldos-de-cultivo",
        href: "/tematicas/caldos-de-cultivo",
        category: "Desinformación",
        title: "Caldos de cultivo",
        description: "Cómo se combinan repetición, polarización y viralidad emocional hasta crear un ambiente donde la desinformación se propaga más rápido que la verdad.",
        image: "/img/tematicas/caldos-de-cultivo/infografia.webp",
        imageAlt: "Infografía de Caldos de cultivo",
        icon: Flame,
        color: "#EA580C",
        locked: true,
        audiencias: ["docentes"],
      },
      {
        id: "recuperar-la-agencia",
        href: "/tematicas/recuperar-la-agencia",
        category: "Autonomía",
        title: "Recuperar la agencia",
        description: "Reconocer todo lo anterior no significa negar nuestra capacidad de actuar: significa fortalecerla. Herramientas concretas para decidir con más conciencia.",
        image: "/img/tematicas/recuperar-la-agencia/infografia.webp",
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
        image: "/img/tematicas/poliedro-ciudadania-digital/infografia.webp",
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
        image: "/img/tematicas/cibercrianza_card.png",
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
        image: "/weekly-content/2026-W24/card6.png",
        imageAlt: "Banner NNyA y el Entorno Digital",
        icon: Baby,
        color: "#7C3AED",
        locked: true,
        audiencias: ["familias"],
      },
    ],
  },
]
