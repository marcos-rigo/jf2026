import { Shield, Eye, Lock, AlertTriangle, Search, Baby, ShieldAlert, Brain, Users, Scale, BookOpen, type LucideIcon } from "lucide-react"

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
        title: "¿Sabés dónde interactúan tus hijos?",
        description: "Cibercrianza: datos reales, quiz interactivo y claves para acompañar a tus hijos en el entorno digital.",
        image: "/img/tematicas/cibercrianza_card.png",
        imageAlt: "Banner Cibercrianza",
        icon: Users,
        color: "#14B8A6",
        locked: false,
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
      },
    ],
  },
]
