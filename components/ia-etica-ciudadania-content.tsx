"use client"

import React, { useState, useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Scale,
  Users,
  Cpu,
  Shield,
  ChevronDown,
  Lightbulb,
  Eye,
  ArrowRight,
  ArrowDown,
  Globe,
  Briefcase,
  UserCheck,
  School,
  BookMarked,
  AlertCircle,
  BarChart3,
  Gavel,
  Building2,
  Network,
  CheckCircle2,
  Ban,
  AlertTriangle,
  Brain,
  Sparkles,
  ExternalLink,
} from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface Competencia {
  id: string
  icono: React.ElementType
  titulo: string
  descripcion: string
  dimension: string
  color: string
}

interface IAPanel {
  id: "no-autonoma" | "autonoma"
  etiqueta: string
  subtitulo: string
  icono: React.ElementType
  concepto: string
  definicion: string
  impactoLaboral: string
  ventaja: string
  riesgo: string
  ejemplos: string[]
  color: string
}

interface PilarFilosofico {
  id: number
  filosofo: string
  concepto: string
  cita: string
  explicacion: string
  color: string
}

interface AcordeonItem {
  id: string
  titulo: string
  subtitulo: string
  icono: React.ElementType
  contenido: string[]
  referencia?: string
  color: string
}

interface RiesgoIA {
  nivel: string
  etiqueta: string
  descripcion: string
  ejemplos: string[]
  color: string
  bgColor: string
  porcentaje: string
  icono: React.ElementType
}

interface ViolenciaStat {
  stat: string
  descripcion: string
}

interface ViolenciaTipo {
  tipo: string
  descripcion: string
  icono: React.ElementType
}

interface NivelAccion {
  numero: string
  nivel: string
  icono: React.ElementType
  descripcion: string
  acciones: string[]
  color: string
}

interface Fuente {
  organismo: string
  documento: string
  anio: string
  icono: React.ElementType
  url: string
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const competencias: Competencia[] = [
  {
    id: "sistemas",
    icono: Network,
    titulo: "Comprensión de sistemas",
    descripcion:
      "Entender cómo funcionan los algoritmos, los datos y las plataformas digitales que estructuran la vida social y toman decisiones que nos afectan a diario.",
    dimension: "Comprender",
    color: "var(--brand-blue)",
  },
  {
    id: "uso-etico",
    icono: Shield,
    titulo: "Uso ético",
    descripcion:
      "Emplear las tecnologías respetando los derechos propios y ajenos, con conciencia sobre el impacto de cada acción digital en uno mismo y en la comunidad.",
    dimension: "Usar",
    color: "#0891B2",
  },
  {
    id: "axiologica",
    icono: Scale,
    titulo: "Reflexión axiológica",
    descripcion:
      "Examinar los valores que subyacen a los sistemas tecnológicos y sus efectos sobre la dignidad humana, la equidad y la justicia social.",
    dimension: "Pensar",
    color: "var(--brand-pink)",
  },
  {
    id: "critico",
    icono: Lightbulb,
    titulo: "Pensamiento crítico",
    descripcion:
      "Cuestionar, comparar y evaluar información, decisiones algorítmicas y narrativas tecnológicas para construir ciudadanía genuinamente informada.",
    dimension: "Crear",
    color: "#D97706",
  },
]

const panelesIA: IAPanel[] = [
  {
    id: "no-autonoma",
    etiqueta: "IA No Autónoma",
    subtitulo: "Colaborativa · Aumentativa · Supervisada",
    icono: Users,
    concepto: "Humanidad Ampliada",
    definicion:
      "Sistemas de IA que requieren participación humana activa para operar, decidir e interpretar resultados. La inteligencia humana permanece como factor rector.",
    impactoLaboral:
      "Potencia al profesional Sénior: su juicio crítico, experiencia contextual y capacidad de síntesis se vuelven activos diferenciadores irremplazables.",
    ventaja:
      "El humano conserva la agencia. La IA amplifica capacidades sin suplantar el criterio, modelando un escenario de humanidad ampliada donde creatividad, empatía y ética son la ventaja competitiva central.",
    riesgo:
      "Dependencia gradual que puede erosionar habilidades cognitivas si no se cultiva activamente el pensamiento propio.",
    ejemplos: [
      "Asistentes de diagnóstico médico con validación humana",
      "Co-pilotos de código (Copilot, Cursor)",
      "Herramientas analíticas con revisión profesional",
      "IA generativa supervisada por equipos editoriales",
    ],
    color: "var(--brand-blue)",
  },
  {
    id: "autonoma",
    etiqueta: "IA Autónoma",
    subtitulo: "Alta Potencia · Autoejecutable · Sin supervisión continua",
    icono: Cpu,
    concepto: "Automatización de los Humanos",
    definicion:
      "Sistemas que ejecutan tareas completas —incluyendo decisiones y acciones— sin intervención humana en el proceso. Opera en modo autónomo en rangos acotados de dominio.",
    impactoLaboral:
      "Presiona roles Junior y posiciones rutinarias. Comprime la curva de aprendizaje: las tareas que antes formaban a los novatos ahora las ejecuta la IA.",
    ventaja:
      "Eficiencia operacional masiva, disponibilidad 24/7 y eliminación de errores repetitivos en procesos totalmente estructurados.",
    riesgo:
      "Riesgo de redundancia laboral en tareas cognitivas de nivel medio. La OIT estima 375 millones de empleos en transición para 2030.",
    ejemplos: [
      "Vehículos autónomos (SAE nivel 4–5)",
      "Trading algorítmico de alta frecuencia",
      "Procesamiento legal y contractual automatizado",
      "Manufactura robótica sin supervisión directa",
    ],
    color: "var(--brand-pink)",
  },
]

const pilaresFilosoficos: PilarFilosofico[] = [
  {
    id: 1,
    filosofo: "Maurice Merleau-Ponty",
    concepto: "Sensibilidad",
    cita: "La percepción no es una ciencia del mundo, es el trasfondo sobre el que todos los actos se destacan y es presupuesta por ellos.",
    explicacion:
      "La IA procesa señales; los humanos sienten. La sensibilidad corporal, emocional y estética es irreductible a datos y constituye el punto de partida de toda ética genuina.",
    color: "var(--brand-blue)",
  },
  {
    id: 2,
    filosofo: "Emmanuel Levinas",
    concepto: "Alteridad",
    cita: "El rostro del otro me interpela con una responsabilidad infinita que ningún sistema puede asumir por mí.",
    explicacion:
      "La responsabilidad hacia el otro no puede delegarse en un algoritmo. La ética surge del encuentro singular, de la vulnerabilidad reconocida ante un ser absolutamente irreemplazable.",
    color: "var(--brand-pink)",
  },
  {
    id: 3,
    filosofo: "Humberto Maturana",
    concepto: "Biología del Amor",
    cita: "El amor es la emoción que constituye el dominio de conductas en el que se da la convivencia social.",
    explicacion:
      "Los vínculos y la solidaridad emergen del amor como emoción fundante. Una IA puede optimizar con precisión matemática; no puede amar ni construir comunidad desde adentro.",
    color: "#059669",
  },
]

const acordeonItems: AcordeonItem[] = [
  {
    id: "caja-negra",
    titulo: "El Problema de la Caja Negra",
    subtitulo: "Opacidad algorítmica y asimetría de poder",
    icono: Eye,
    contenido: [
      "Los sistemas de IA más avanzados toman decisiones que ni sus propios creadores pueden explicar completamente. Esto genera una asimetría radical: quien fue perjudicado no tiene herramientas para entender ni cuestionar la decisión.",
      "Cuando un algoritmo niega un crédito, rechaza un CV o contribuye a una sentencia judicial, ¿quién responde? ¿Ante quién se apela? La opacidad no es solo técnica: es política y ética.",
      "La UNESCO (2021) identifica la explicabilidad como requisito ético fundamental: toda persona afectada por un sistema de IA tiene derecho a una explicación comprensible de la decisión que la afecta.",
    ],
    referencia: "UNESCO – Recomendación sobre la Ética de la IA, 2021",
    color: "#7C3AED",
  },
  {
    id: "directiva-ue",
    titulo: "Directiva UE 2024/2853",
    subtitulo: "Software como producto: responsabilidad civil objetiva",
    icono: Gavel,
    contenido: [
      "La Directiva de Responsabilidad por Productos de la UE (2024/2853) reconoce formalmente el software —incluyendo sistemas de IA— como producto sujeto a responsabilidad civil objetiva.",
      "Establece la inversión de la carga de la prueba: el fabricante debe demostrar que su sistema NO causó el daño, no la víctima que sí lo causó. Esto rompe la asimetría que históricamente blindaba a las empresas tecnológicas.",
      "Aplica también a sistemas de IA integrados en servicios digitales (SaaS), ampliando el alcance más allá del software vendido como producto tangible.",
    ],
    referencia: "Unión Europea – Directiva 2024/2853 sobre responsabilidad por productos",
    color: "var(--brand-blue)",
  },
  {
    id: "responsabilidad",
    titulo: "Responsabilidad Objetiva y Marco Interamericano",
    subtitulo: "Protección de quien sufre el daño algorítmico",
    icono: Scale,
    contenido: [
      "La Responsabilidad Objetiva establece que quien despliega un sistema de IA es responsable por sus daños independientemente de culpa o negligencia. No hace falta demostrar intención: basta con el daño y la relación causal.",
      "La OEA (Ley Modelo Interamericana sobre IA en sistemas judiciales) incorpora este principio exigiendo explicabilidad, auditoría independiente y recursos de impugnación para decisiones judiciales asistidas por IA.",
      "Este estándar reconoce la asimetría informacional radical: quien despliega un sistema opaco tiene la responsabilidad de demostrar su inocuidad, no la víctima de demostrar el daño.",
    ],
    referencia: "OEA – Ley Modelo Interamericana sobre IA en sistemas judiciales",
    color: "#059669",
  },
]

const nivelesRiesgo: RiesgoIA[] = [
  {
    nivel: "inaceptable",
    etiqueta: "Riesgo Inaceptable",
    descripcion: "Prohibidos en la Unión Europea",
    ejemplos: [
      "Puntuación social por parte del Estado",
      "Manipulación subliminal del comportamiento",
      "Reconocimiento facial en tiempo real en espacios públicos (salvo excepciones tasadas)",
      "Predicción de delitos basada en perfil",
    ],
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    porcentaje: "52%",
    icono: Ban,
  },
  {
    nivel: "alto",
    etiqueta: "Alto Riesgo",
    descripcion: "Obligaciones estrictas de transparencia y supervisión",
    ejemplos: [
      "IA en diagnóstico médico crítico",
      "Selección laboral y evaluación de candidatos",
      "Sistemas de justicia penal asistidos por IA",
      "Infraestructura crítica y servicios esenciales",
    ],
    color: "#D97706",
    bgColor: "rgba(217,119,6,0.07)",
    porcentaje: "75%",
    icono: AlertTriangle,
  },
  {
    nivel: "minimo",
    etiqueta: "Riesgo Mínimo",
    descripcion: "Sin obligaciones adicionales específicas",
    ejemplos: [
      "Filtros de spam y clasificadores de correo",
      "Videojuegos con componentes de IA",
      "Chatbots con transparencia declarada al usuario",
      "Sistemas de recomendación de contenido no crítico",
    ],
    color: "#22C55E",
    bgColor: "rgba(34,197,94,0.07)",
    porcentaje: "100%",
    icono: CheckCircle2,
  },
]

const violenciaStats: ViolenciaStat[] = [
  {
    stat: "73%",
    descripcion:
      "de mujeres han experimentado violencia en línea en algún momento de su vida (ONU Mujeres, 2023)",
  },
  {
    stat: "85%",
    descripcion:
      "de datasets de reconocimiento facial están dominados por hombres de piel clara (MIT Media Lab, 2019)",
  },
  {
    stat: "375M",
    descripcion:
      "de empleos en transición para 2030, con impacto desproporcionado en mujeres y trabajadores de menores ingresos (OIT)",
  },
]

const violenciaTipos: ViolenciaTipo[] = [
  {
    tipo: "Acoso y hostigamiento digital",
    descripcion:
      "Persecución sistemática, amenazas y monitoreo no consentido. Los algoritmos de sugerencia pueden amplificar la visibilidad de perfiles de acosadores.",
    icono: AlertCircle,
  },
  {
    tipo: "Difusión no consentida (IBSA)",
    descripcion:
      "Imágenes íntimas compartidas sin consentimiento. La IA generativa agrava este delito produciendo deepfakes de alta calidad para fines de humillación y extorsión.",
    icono: Eye,
  },
  {
    tipo: "Violencia espiritual y cultural",
    descripcion:
      "Ataques a la identidad, cosmovisión y pertenencia de pueblos originarios y comunidades vulnerables. Los sistemas de moderación con sesgos occidentales amplifican estas violencias.",
    icono: Users,
  },
  {
    tipo: "Sesgo de género sistémico",
    descripcion:
      "Algoritmos entrenados con datos históricos reproducen discriminación a escala masiva: desde CVs rechazados por género hasta condiciones de crédito sesgadas por estereotipos.",
    icono: BarChart3,
  },
]

const nivelesAccion: NivelAccion[] = [
  {
    numero: "01",
    nivel: "Personal",
    icono: UserCheck,
    descripcion: "Soberanía digital como práctica cotidiana",
    acciones: [
      "Auditar el consumo de IA: ¿qué decisiones delegás a sistemas automatizados?",
      "Desarrollar alfabetización algorítmica propia: entender cómo los sistemas te clasifican",
      "Ejercer derechos ARCO frente a decisiones automatizadas que te afecten",
      "Cultivar lo irreemplazable: sensibilidad, juicio ético, presencia genuina",
    ],
    color: "var(--brand-blue)",
  },
  {
    numero: "02",
    nivel: "Organizativo",
    icono: Briefcase,
    descripcion: "Ética institucional en el despliegue de IA",
    acciones: [
      "Implementar auditorías de sesgos antes de desplegar cada sistema de IA",
      "Crear comités de ética con perspectiva de género e interculturalidad",
      "Garantizar explicabilidad en decisiones automatizadas que afecten personas",
      "Priorizar bienestar humano sobre eficiencia algorítmica en cada diseño",
    ],
    color: "#059669",
  },
  {
    numero: "03",
    nivel: "Social",
    icono: Globe,
    descripcion: "Ciudadanía digital como derecho político",
    acciones: [
      "Exigir marcos regulatorios: AI Act, responsabilidad objetiva, carga de la prueba invertida",
      "Fortalecer la ciudadanía digital como derecho, no solo habilidad técnica",
      "Proteger comunidades vulnerables de la violencia algorítmica sistémica",
      "Construir IA desde perspectivas diversas: género, cultura, territorio y clase",
    ],
    color: "var(--brand-pink)",
  },
]

const fuentes: Fuente[] = [
  {
    organismo: "UNESCO",
    documento: "Recomendación sobre la Ética de la IA",
    anio: "2021",
    icono: BookMarked,
    url: "https://www.unesco.org/es/artificial-intelligence/recommendation-ethics",
  },
  {
    organismo: "Unión Europea",
    documento: "AI Act · Reglamento (UE) 2024/1689",
    anio: "2024",
    icono: Building2,
    url: "https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai",
  },
  {
    organismo: "Unión Europea",
    documento: "Directiva de Responsabilidad por Productos 2024/2853",
    anio: "2024",
    icono: Gavel,
    url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024L2853",
  },
  {
    organismo: "OEA / OAS",
    documento: "Ley Modelo Interamericana sobre IA en sistemas judiciales",
    anio: "2023",
    icono: Scale,
    url: "https://www.oas.org/es/sla/ddi/",
  },
  {
    organismo: "Educ.ar · Conectar Igualdad",
    documento: "Marco de Ciudadanía Digital para la escuela argentina",
    anio: "2023",
    icono: School,
    url: "https://www.educ.ar",
  },
  {
    organismo: "Gobierno de Japón · Cabinet Office",
    documento: "Society 5.0 — Para una sociedad humano-céntrica",
    anio: "2016–2023",
    icono: Globe,
    url: "https://www8.cao.go.jp/cstp/english/society5_0/index.html",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const STYLES = `
  @keyframes iaBlob1 {
    0%, 100% { transform: translate(0,0) scale(1); }
    40%  { transform: translate(60px,-80px) scale(1.14); }
    70%  { transform: translate(-45px,40px) scale(0.91); }
  }
  @keyframes iaBlob2 {
    0%, 100% { transform: translate(0,0) scale(1); }
    35%  { transform: translate(-70px,-50px) scale(1.19); }
    70%  { transform: translate(50px,60px) scale(0.88); }
  }
  @keyframes iaFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%  { transform: translateY(-14px) rotate(1.5deg); }
  }
  @keyframes iaScan {
    0%   { top: -1px; opacity: 0; }
    5%   { opacity: 0.35; }
    95%  { opacity: 0.35; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes iaGradText {
    0%, 100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }
  @keyframes iaGridMove {
    0%   { background-position: 0 0; }
    100% { background-position: 48px 48px; }
  }
  @keyframes iaPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%      { opacity: 1;   transform: scale(1.25); }
  }

  .ia-blob1   { animation: iaBlob1 24s ease-in-out infinite; }
  .ia-blob2   { animation: iaBlob2 30s ease-in-out infinite; }
  .ia-float   { animation: iaFloat 7s ease-in-out infinite; }
  .ia-float-d { animation: iaFloat 7s ease-in-out infinite 1.2s; }
  .ia-scan {
    animation: iaScan 14s linear infinite;
    position: absolute; left: 0; right: 0;
    height: 1px; pointer-events: none;
  }
  .ia-pulse   { animation: iaPulse 2.4s ease-out infinite; }

  .ia-grad-text {
    background: linear-gradient(90deg, var(--brand-blue), var(--brand-pink), #00A99D, var(--brand-blue));
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: iaGradText 7s linear infinite;
  }

  .ia-grid-dark {
    background-image:
      linear-gradient(rgba(66,114,187,0.09) 1px, transparent 1px),
      linear-gradient(90deg, rgba(66,114,187,0.09) 1px, transparent 1px);
    background-size: 48px 48px;
    animation: iaGridMove 80s linear infinite;
  }
  .ia-grid-light {
    background-image:
      linear-gradient(rgba(66,114,187,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(66,114,187,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .ia-dots {
    background-image: radial-gradient(circle, rgba(66,114,187,0.22) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
  }

  /* Scroll-snap competencias */
  .ia-snap-x {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 1.25rem;
    padding-bottom: 0.75rem;
  }
  .ia-snap-x::-webkit-scrollbar { display: none; }
  .ia-snap-item {
    scroll-snap-align: start;
    flex: 0 0 min(308px, 84vw);
  }

  /* Card hover */
  .ia-card {
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                box-shadow 0.35s cubic-bezier(0.16,1,0.3,1),
                border-color 0.3s ease;
  }
  .ia-card:hover { transform: translateY(-7px); }

  /* Pyramid bar */
  .ia-py-bar {
    transition: filter 0.25s ease, transform 0.25s ease;
    cursor: pointer;
  }
  .ia-py-bar:hover { filter: brightness(1.1); transform: scaleX(1.012); }

  /* Accordion */
  .ia-accord-content { overflow: hidden; }

  /* Step connector (horizontal, desktop) — single line behind circles */
  .ia-step-connector {
    position: absolute;
    left: 16.67%;
    right: 16.67%;
    top: 28px;
    height: 2px;
    background: linear-gradient(90deg, rgba(66,114,187,0.40), rgba(213,36,122,0.40));
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .ia-blob1, .ia-blob2, .ia-float, .ia-float-d,
    .ia-scan, .ia-pulse, .ia-grad-text, .ia-grid-dark { animation: none !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// MOTION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const sp = { type: "spring" as const, stiffness: 260, damping: 22 }

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[60] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-pink) 60%, #00A99D 100%)",
      }}
    />
  )
}

function SectionLabel({
  children,
  color = "var(--brand-blue)",
}: {
  children: React.ReactNode
  color?: string
}) {
  return (
    <span
      className="font-mono inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-black mb-5 px-5 py-2.5 rounded-full"
      style={{
        background: `${color}12`,
        border: `2px solid ${color}30`,
        color,
      }}
    >
      {children}
    </span>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function IaEticaCiudadaniaContent() {
  const [iaActiva, setIaActiva] = useState<"no-autonoma" | "autonoma">(
    "no-autonoma"
  )
  const [acordeonAbierto, setAcordeonAbierto] = useState<string | null>(null)
  const [piramideSeleccionada, setPiramideSeleccionada] = useState<
    string | null
  >(null)

  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroSY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(heroSY, [0, 1], [0, 32])
  const heroOp = useTransform(heroSY, [0, 0.75], [1, 0])

  const panelActivo = panelesIA.find((p) => p.id === iaActiva)!
  const PanelIcon = panelActivo.icono

  const toggleAcordeon = (id: string) =>
    setAcordeonAbierto((prev) => (prev === id ? null : id))

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Navbar />
      <ScrollProgressBar />

      <main className="relative w-full font-sans overflow-hidden bg-white">

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden py-28 md:py-40"
          style={{ background: "var(--brand-dark)" }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 ia-grid-dark pointer-events-none" />
          <div className="absolute inset-0 ia-dots opacity-30 pointer-events-none" />
          <div
            className="ia-scan"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(66,114,187,0.4),transparent)",
            }}
          />

          {/* Animated blobs */}
          <div
            className="absolute ia-blob1 pointer-events-none"
            style={{
              top: "-10%", right: "-6%",
              width: 900, height: 900, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(66,114,187,0.28) 0%,transparent 65%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute ia-blob2 pointer-events-none"
            style={{
              bottom: "-12%", left: "-7%",
              width: 750, height: 750, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(213,36,122,0.18) 0%,transparent 65%)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "38%", left: "40%",
              width: 500, height: 500, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(0,169,157,0.12) 0%,transparent 65%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-14">
            <motion.div
              style={{ y: heroY, opacity: heroOp }}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} transition={sp} className="mb-8">
                <div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-mono text-xs font-black uppercase tracking-widest"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "2px solid rgba(66,114,187,0.35)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="ia-pulse absolute inset-0 rounded-full"
                      style={{ background: "var(--brand-blue)" }}
                    />
                    <span
                      className="relative rounded-full h-2.5 w-2.5"
                      style={{ background: "var(--brand-blue)" }}
                    />
                  </span>
                  Sociedad 5.0 · Marco Humanista · Ciudadanía Digital
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                transition={sp}
                className="font-display font-bold leading-[1.04] tracking-tight mb-8 text-white"
                style={{ fontSize: "clamp(2.8rem, 7.5vw, 6rem)" }}
              >
                Inteligencia Artificial,{" "}
                <span className="ia-grad-text">Ética</span>
                <br className="hidden md:block" /> y Ciudadanía Digital
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                transition={sp}
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium mb-10 max-w-3xl"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                La transición de la Sociedad 4.0 a la Sociedad 5.0 no se
                define por la tecnología que tenemos, sino por la{" "}
                <span
                  className="font-bold"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  brújula ética y el enfoque antropocéntrico
                </span>{" "}
                con que la usamos.
              </motion.p>

              {/* Society tags */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="flex flex-wrap gap-3 mb-12"
              >
                {[
                  { label: "Sociedad 4.0", note: "Eficiencia industrial" },
                  { label: "→" },
                  { label: "Sociedad 5.0", note: "Humanismo tecnológico", highlight: true },
                ].map((tag, i) =>
                  tag.label === "→" ? (
                    <span
                      key={i}
                      className="self-center text-2xl font-bold"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      →
                    </span>
                  ) : (
                    <div
                      key={i}
                      className="flex flex-col px-5 py-3 rounded-2xl"
                      style={{
                        background: tag.highlight
                          ? "rgba(66,114,187,0.2)"
                          : "rgba(255,255,255,0.04)",
                        border: `2px solid ${tag.highlight ? "rgba(66,114,187,0.5)" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-black"
                        style={{
                          color: tag.highlight
                            ? "var(--brand-blue)"
                            : "rgba(255,255,255,0.65)",
                        }}
                      >
                        {tag.label}
                      </span>
                      {tag.note && (
                        <span
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "rgba(255,255,255,0.80)" }}
                        >
                          {tag.note}
                        </span>
                      )}
                    </div>
                  )
                )}
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="flex flex-wrap gap-5 items-center"
              >
                <a
                  href="#ciudadania"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("ciudadania")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--brand-blue), #2255A0)",
                    boxShadow: "0 6px 24px rgba(66,114,187,0.4)",
                  }}
                >
                  Explorar el marco
                  <ArrowDown className="w-5 h-5" />
                </a>
                <a
                  href="#accion"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("accion")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    border: "2px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  Niveles de acción
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, #001228, transparent)" }}
          />
        </section>

        {/* ══ S1 · CIUDADANÍA DIGITAL Y ALFABETIZACIÓN ══════════════════════════ */}
        <section id="ciudadania" className="relative px-6 py-24 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 ia-grid-light opacity-60 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Header */}
              <motion.div variants={fadeUp} transition={sp} className="mb-20">
                <SectionLabel>Sección 1 · Ciudadanía Digital</SectionLabel>
                <h2
                  className="font-display font-bold text-brand-navy leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  Alfabetización Digital y el Rol de la Escuela
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">
                  La escuela ya no puede enseñar solo a leer y escribir. Debe
                  formar ciudadanos capaces de{" "}
                  <span className="font-bold text-brand-navy">
                    comprender, usar, pensar y crear
                  </span>{" "}
                  en entornos digitales.
                </p>
                <div
                  className="w-20 h-1 mt-6 rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-pink))" }}
                />
              </motion.div>

              {/* Dimensiones Conectar Igualdad — Hero visual */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="mb-12 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--brand-navy) 0%, #1A4A8A 100%)",
                }}
              >
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest font-black mb-3 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Programa Conectar Igualdad · Educ.ar
                    </span>
                    <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                      Las 4 dimensiones de la competencia digital
                    </h3>
                    <p className="text-white/60 font-medium leading-relaxed text-lg">
                      Un marco articulado que va más allá del manejo de
                      dispositivos: apunta a la formación integral del ciudadano
                      digital crítico.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { letra: "C", nombre: "Comprender", color: "#7EB3FF" },
                      { letra: "U", nombre: "Usar", color: "#5BE8DE" },
                      { letra: "P", nombre: "Pensar", color: "#F9A8D4" },
                      { letra: "C", nombre: "Crear", color: "#FCD34D" },
                    ].map((d) => (
                      <div
                        key={d.nombre}
                        className="rounded-2xl p-5 flex flex-col gap-1"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1.5px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <span
                          className="font-mono font-black text-4xl leading-none"
                          style={{ color: d.color }}
                        >
                          {d.letra}
                        </span>
                        <span className="font-bold text-white text-base">{d.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Competencias — grid responsive */}
              <motion.div variants={fadeUp} transition={sp} className="mb-10">
                <p className="text-brand-navy font-bold text-lg mb-5">
                  Las 4 competencias clave del ciudadano digital:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {competencias.map((c) => {
                    const Icon = c.icono
                    return (
                      <motion.div
                        key={c.id}
                        whileHover={{ y: -6 }}
                        className="ia-card rounded-3xl p-7 flex flex-col gap-4 bg-white"
                        style={{
                          border: `2px solid ${c.color}20`,
                          boxShadow: `0 8px 28px ${c.color}08`,
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${c.color}12`, border: `2px solid ${c.color}28` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: c.color }} />
                          </div>
                          <span
                            className="font-mono text-xs font-black uppercase tracking-widest"
                            style={{ color: c.color }}
                          >
                            {c.dimension}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-brand-navy text-xl leading-tight">
                          {c.titulo}
                        </h4>
                        <p className="text-slate-600 font-medium text-base leading-relaxed">
                          {c.descripcion}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Escuela callout */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="rounded-3xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5"
                style={{
                  background: "rgba(66,114,187,0.05)",
                  border: "2px solid rgba(66,114,187,0.15)",
                }}
              >
                <School className="w-9 h-9 text-brand-blue flex-shrink-0" />
                <p className="text-slate-700 text-xl font-medium leading-relaxed">
                  <span className="font-bold text-brand-navy">
                    La escuela como garante de equidad digital:
                  </span>{" "}
                  sin formación crítica en ciudadanía digital, las brechas
                  tecnológicas se convierten en brechas de poder. La
                  alfabetización digital no es una competencia técnica; es un
                  derecho político.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ S2 · IA Y FUTURO DEL TRABAJO — TOGGLE ════════════════════════════ */}
        <section
          className="relative px-6 py-24 lg:py-36 overflow-hidden"
          style={{ background: "var(--brand-navy)" }}
        >
          <div className="absolute inset-0 ia-grid-dark pointer-events-none" />
          <div
            className="ia-scan"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(213,36,122,0.25),transparent)",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Header */}
              <motion.div variants={fadeUp} transition={sp} className="mb-14">
                <SectionLabel color="rgba(255,255,255,0.5)">
                  Sección 2 · IA y Trabajo
                </SectionLabel>
                <h2
                  className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  IA, Automatización y el Futuro del Trabajo
                </h2>
                <p className="text-xl leading-relaxed font-medium max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
                  ¿La IA desplaza o amplía? La respuesta depende del tipo de
                  sistema y del perfil profesional. El relato del reemplazo total
                  es más simple que la realidad.
                </p>
              </motion.div>

              {/* Toggle */}
              <motion.div variants={fadeUp} transition={sp} className="mb-10">
                <div
                  className="inline-flex p-1.5 rounded-2xl gap-1.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                  role="tablist"
                  aria-label="Tipo de IA"
                >
                  {panelesIA.map((p) => {
                    const isActive = iaActiva === p.id
                    return (
                      <button
                        key={p.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setIaActiva(p.id)}
                        className="relative px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 min-h-[44px]"
                        style={{
                          background: isActive ? p.color : "transparent",
                          color: isActive ? "#fff" : "rgba(255,255,255,0.72)",
                          boxShadow: isActive
                            ? `0 4px 16px ${p.color}50`
                            : "none",
                        }}
                      >
                        {p.etiqueta}
                      </button>
                    )
                  })}
                </div>
              </motion.div>

              {/* Panel animado */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={iaActiva}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    border: `2px solid ${panelActivo.color}35`,
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* Columna izquierda — concepto */}
                    <div
                      className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between"
                      style={{
                        background: `${panelActivo.color}18`,
                        borderRight: `1px solid ${panelActivo.color}25`,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div>
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                          style={{
                            background: `${panelActivo.color}22`,
                            border: `2px solid ${panelActivo.color}45`,
                          }}
                        >
                          <PanelIcon className="w-7 h-7" style={{ color: panelActivo.color }} />
                        </div>
                        <span
                          className="font-mono text-xs uppercase tracking-widest font-black mb-2 block"
                          style={{ color: panelActivo.color }}
                        >
                          {panelActivo.subtitulo}
                        </span>
                        <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                          {panelActivo.etiqueta}
                        </h3>
                        <p className="text-lg leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.88)" }}>
                          {panelActivo.definicion}
                        </p>
                      </div>

                      {/* Concepto clave */}
                      <div
                        className="mt-8 rounded-2xl p-5"
                        style={{
                          background: `${panelActivo.color}20`,
                          border: `2px solid ${panelActivo.color}40`,
                        }}
                      >
                        <span
                          className="font-mono text-xs uppercase tracking-widest font-black block mb-1"
                          style={{ color: panelActivo.color }}
                        >
                          Concepto clave
                        </span>
                        <span className="font-display font-bold text-white text-xl">
                          {panelActivo.concepto}
                        </span>
                      </div>
                    </div>

                    {/* Columna derecha — detalles */}
                    <div className="lg:col-span-8 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Impacto laboral", text: panelActivo.impactoLaboral, color: "#22C55E" },
                        { label: "Ventaja", text: panelActivo.ventaja, color: "var(--brand-blue)" },
                        { label: "Riesgo principal", text: panelActivo.riesgo, color: "#EF4444" },
                        {
                          label: "Ejemplos",
                          list: panelActivo.ejemplos,
                          color: panelActivo.color,
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="rounded-2xl p-6"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1.5px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <span
                            className="font-mono text-xs uppercase tracking-widest font-black block mb-3"
                            style={{ color: item.color }}
                          >
                            {item.label}
                          </span>
                          {item.text ? (
                            <p className="text-base leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.88)" }}>
                              {item.text}
                            </p>
                          ) : (
                            <ul className="space-y-2">
                              {item.list?.map((ej, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-base font-medium"
                                  style={{ color: "rgba(255,255,255,0.88)" }}
                                >
                                  <ArrowRight
                                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                                    style={{ color: item.color }}
                                  />
                                  {ej}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Cierre conceptual */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="mt-8 rounded-3xl p-7 md:p-9 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "2px solid rgba(255,255,255,0.09)",
                }}
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  La respuesta no es resistir a la IA, sino{" "}
                  <span className="font-bold text-white">
                    construir profesionales con juicio ético, sensibilidad y
                    capacidad de supervisión crítica
                  </span>{" "}
                  que los sistemas automatizados nunca podrán reemplazar.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ S3 · HUMANIDAD AMPLIADA — PULL-QUOTES ASIMÉTRICOS ════════════════ */}
        <section
          className="relative px-6 py-24 lg:py-36 overflow-hidden"
          style={{ background: "#F4F7FB" }}
        >
          <div className="absolute inset-0 ia-grid-light opacity-70 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} transition={sp} className="mb-20">
                <SectionLabel color="#7C3AED">
                  Sección 3 · Filosofía y Tecnología
                </SectionLabel>
                <h2
                  className="font-display font-bold text-brand-navy leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  Humanidad Ampliada y Sensibilidad
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">
                  Tres pensadores que nos recuerdan lo que ningún sistema puede
                  computar: la condición humana irreductible.
                </p>
                <div
                  className="w-20 h-1 mt-6 rounded-full"
                  style={{ background: "linear-gradient(90deg, #7C3AED, var(--brand-pink))" }}
                />
              </motion.div>

              {/* Pilar 1 — Merleau-Ponty (GRANDE, ancho completo) */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="mb-8 rounded-3xl overflow-hidden"
              >
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 min-h-[280px]"
                  style={{
                    background: "var(--brand-navy)",
                    border: "2px solid rgba(66,114,187,0.3)",
                    borderRadius: "28px",
                  }}
                >
                  {/* Número decorativo */}
                  <div
                    className="hidden lg:flex lg:col-span-2 items-center justify-center border-r"
                    style={{ borderColor: "rgba(66,114,187,0.2)" }}
                  >
                    <span
                      className="font-mono font-black"
                      style={{ fontSize: "6rem", color: "rgba(66,114,187,0.15)", lineHeight: 1 }}
                    >
                      01
                    </span>
                  </div>
                  {/* Cita */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center border-r" style={{ borderColor: "rgba(66,114,187,0.15)" }}>
                    <span
                      className="font-mono text-xs uppercase tracking-widest font-black mb-4 block"
                      style={{ color: "var(--brand-blue)" }}
                    >
                      Sensibilidad
                    </span>
                    <blockquote
                      className="font-display font-bold text-white leading-snug mb-5"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                    >
                      "{pilaresFilosoficos[0].cita}"
                    </blockquote>
                    <cite className="not-italic font-mono text-sm font-black" style={{ color: "rgba(255,255,255,0.70)" }}>
                      — {pilaresFilosoficos[0].filosofo}
                    </cite>
                  </div>
                  {/* Explicación */}
                  <div className="lg:col-span-3 p-8 flex items-center">
                    <p className="text-lg font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {pilaresFilosoficos[0].explicacion}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pilares 2 y 3 — Levinas y Maturana (asimétricos) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Pilar 2 — Levinas (MEDIANO, 7/12, desplazado a la derecha) */}
                <motion.div
                  variants={fadeUp}
                  transition={{ ...sp, delay: 0.1 }}
                  className="lg:col-span-7 lg:col-start-2 rounded-3xl p-8 md:p-10 flex flex-col gap-5"
                  style={{
                    background: "#fff",
                    border: "2px solid rgba(213,36,122,0.2)",
                    boxShadow: "0 12px 40px rgba(213,36,122,0.06)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="font-mono font-black text-5xl leading-none"
                      style={{ color: "rgba(213,36,122,0.12)" }}
                    >
                      02
                    </div>
                    <span
                      className="font-mono text-xs uppercase tracking-widest font-black"
                      style={{ color: "var(--brand-pink)" }}
                    >
                      Alteridad
                    </span>
                  </div>
                  <blockquote
                    className="font-display font-bold text-brand-navy leading-snug"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)", borderLeft: "5px solid var(--brand-pink)", paddingLeft: "1.25rem" }}
                  >
                    "{pilaresFilosoficos[1].cita}"
                  </blockquote>
                  <cite className="not-italic font-mono text-sm font-black text-slate-400">
                    — {pilaresFilosoficos[1].filosofo}
                  </cite>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">
                    {pilaresFilosoficos[1].explicacion}
                  </p>
                </motion.div>

                {/* Pilar 3 — Maturana (PEQUEÑO, 5/12 pero con mt offset) */}
                <motion.div
                  variants={fadeUp}
                  transition={{ ...sp, delay: 0.2 }}
                  className="lg:col-span-4 lg:mt-8 rounded-3xl p-7 flex flex-col gap-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(5,150,105,0.06), rgba(5,150,105,0.02))",
                    border: "2px solid rgba(5,150,105,0.22)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="font-mono font-black text-4xl leading-none"
                      style={{ color: "rgba(5,150,105,0.15)" }}
                    >
                      03
                    </div>
                    <span
                      className="font-mono text-xs uppercase tracking-widest font-black"
                      style={{ color: "#059669" }}
                    >
                      Biología del Amor
                    </span>
                  </div>
                  <blockquote
                    className="font-display font-bold text-brand-navy leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", borderLeft: "4px solid #059669", paddingLeft: "1rem" }}
                  >
                    "{pilaresFilosoficos[2].cita}"
                  </blockquote>
                  <cite className="not-italic font-mono text-xs font-black text-slate-400">
                    — {pilaresFilosoficos[2].filosofo}
                  </cite>
                  <p className="text-slate-600 font-medium text-base leading-relaxed">
                    {pilaresFilosoficos[2].explicacion}
                  </p>
                </motion.div>
              </div>

              {/* Tesis Marco Humanista */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="mt-12 rounded-3xl p-8 md:p-10"
                style={{
                  background: "linear-gradient(135deg, var(--brand-navy), #1A3A6B)",
                }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <Brain className="w-10 h-10 flex-shrink-0" style={{ color: "rgba(255,255,255,0.35)" }} />
                  <div>
                    <h4 className="font-display font-bold text-white text-xl md:text-2xl mb-3">
                      La tesis del marco humanista
                    </h4>
                    <p className="text-xl font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      La Sociedad 5.0 no se construye optimizando algoritmos: se
                      construye{" "}
                      <span className="text-white font-bold">
                        amplificando la humanidad
                      </span>
                      . La tecnología debe expandir nuestra capacidad de sentir,
                      cuidar y relacionarnos — no reemplazar esas capacidades por
                      eficiencia computacional.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ S4 · ÉTICA, DERECHO Y RESPONSABILIDAD — ACORDEÓN ════════════════ */}
        <section
          className="relative px-6 py-24 lg:py-36 overflow-hidden"
          style={{ background: "#020E1C" }}
        >
          <div className="absolute inset-0 ia-grid-dark opacity-70 pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} transition={sp} className="mb-16">
                <SectionLabel color="rgba(255,255,255,0.72)">
                  Sección 4 · Derecho e IA
                </SectionLabel>
                <h2
                  className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  Ética, Derecho y Responsabilidad
                </h2>
                <p className="text-xl leading-relaxed font-medium max-w-2xl" style={{ color: "rgba(255,255,255,0.82)" }}>
                  Del problema de la Caja Negra al AI Act 2024: cómo el derecho
                  intenta regular lo que la ética ya señalaba.
                </p>
              </motion.div>

              {/* Acordeón */}
              <motion.div variants={fadeUp} transition={sp} className="space-y-3 mb-14">
                {acordeonItems.map((item) => {
                  const Icon = item.icono
                  const isOpen = acordeonAbierto === item.id
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        border: `2px solid ${isOpen ? item.color + "55" : "rgba(255,255,255,0.08)"}`,
                        transition: "border-color 0.3s ease",
                      }}
                    >
                      {/* Header */}
                      <button
                        onClick={() => toggleAcordeon(item.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                        style={{
                          background: isOpen
                            ? `${item.color}14`
                            : "rgba(255,255,255,0.03)",
                          minHeight: "64px",
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${item.color}18`,
                              border: `1.5px solid ${item.color}35`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div className="text-left">
                            <div className="font-display font-bold text-white text-lg leading-tight">
                              {item.titulo}
                            </div>
                            <div
                              className="font-mono text-xs uppercase tracking-widest font-black mt-0.5"
                              style={{ color: `${item.color}BB` }}
                            >
                              {item.subtitulo}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.4)" }} />
                        </motion.div>
                      </button>

                      {/* Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="ia-accord-content"
                          >
                            <div
                              className="px-6 pb-7 pt-2 space-y-4"
                              style={{ borderTop: `1px solid ${item.color}25` }}
                            >
                              {item.contenido.map((p, i) => (
                                <p
                                  key={i}
                                  className="text-lg leading-relaxed font-medium"
                                  style={{ color: "rgba(255,255,255,0.88)" }}
                                >
                                  {p}
                                </p>
                              ))}
                              {item.referencia && (
                                <div
                                  className="inline-block mt-2 px-4 py-2 rounded-xl font-mono text-xs font-black uppercase tracking-widest"
                                  style={{
                                    background: `${item.color}12`,
                                    border: `1.5px solid ${item.color}28`,
                                    color: `${item.color}CC`,
                                  }}
                                >
                                  {item.referencia}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </motion.div>

              {/* AI Act — Pirámide de Riesgo */}
              <motion.div variants={fadeUp} transition={sp}>
                <div
                  className="rounded-3xl p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "2px solid rgba(217,119,6,0.25)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-6 h-6" style={{ color: "#D97706" }} />
                    <span className="font-mono text-xs uppercase tracking-widest font-black" style={{ color: "#D97706" }}>
                      AI Act 2024 · Reglamento UE 2024/1689
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-8 leading-tight">
                    Clasificación de Riesgos — Pirámide Interactiva
                  </h3>

                  {/* Pyramid — stacked bars, narrowing upward */}
                  <div className="flex flex-col items-center gap-2 mb-8">
                    {nivelesRiesgo.map((nivel, i) => {
                      const Icon = nivel.icono
                      const isSelected = piramideSeleccionada === nivel.nivel
                      return (
                        <button
                          key={nivel.nivel}
                          className="ia-py-bar rounded-2xl flex items-center gap-4 px-6 py-4 text-left transition-all duration-300"
                          style={{
                            width: nivel.porcentaje,
                            background: isSelected
                              ? nivel.bgColor.replace("0.08", "0.18").replace("0.07", "0.17")
                              : nivel.bgColor,
                            border: `2px solid ${nivel.color}${isSelected ? "70" : "35"}`,
                            boxShadow: isSelected ? `0 6px 24px ${nivel.color}25` : "none",
                          }}
                          onClick={() =>
                            setPiramideSeleccionada((prev) =>
                              prev === nivel.nivel ? null : nivel.nivel
                            )
                          }
                          aria-expanded={isSelected}
                          aria-label={`Ver detalles de riesgo ${nivel.etiqueta}`}
                        >
                          <Icon className="w-6 h-6 flex-shrink-0" style={{ color: nivel.color }} />
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-white text-base">{nivel.etiqueta}</div>
                            <div className="font-mono text-xs font-black mt-0.5" style={{ color: `${nivel.color}99` }}>
                              {nivel.descripcion}
                            </div>
                          </div>
                          <ChevronDown
                            className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                            style={{
                              color: "rgba(255,255,255,0.3)",
                              transform: isSelected ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          />
                        </button>
                      )
                    })}
                  </div>

                  {/* Ejemplos del nivel seleccionado */}
                  <AnimatePresence mode="wait">
                    {piramideSeleccionada && (
                      <motion.div
                        key={piramideSeleccionada}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl p-6"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1.5px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {(() => {
                          const n = nivelesRiesgo.find((r) => r.nivel === piramideSeleccionada)!
                          return (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {n.ejemplos.map((ej, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-3 text-base font-medium"
                                  style={{ color: "rgba(255,255,255,0.7)" }}
                                >
                                  <ArrowRight
                                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                                    style={{ color: n.color }}
                                  />
                                  {ej}
                                </li>
                              ))}
                            </ul>
                          )
                        })()}
                      </motion.div>
                    )}
                    {!piramideSeleccionada && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-base font-medium"
                        style={{ color: "rgba(255,255,255,0.62)" }}
                      >
                        Tocá un nivel para ver sus categorías
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ S5 · VIOLENCIA DIGITAL Y GÉNERO ══════════════════════════════════ */}
        <section className="relative px-6 py-24 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 ia-grid-light opacity-50 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} transition={sp} className="mb-16">
                <SectionLabel color="var(--brand-pink)">
                  Sección 5 · Género y Algoritmos
                </SectionLabel>
                <h2
                  className="font-display font-bold text-brand-navy leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  Violencia Digital y Justicia con Perspectiva de Género
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">
                  Los algoritmos no son neutros. Cuando se entrenan con datos de
                  un mundo desigual, producen y amplifican esa desigualdad a
                  escala masiva.
                </p>
                <div
                  className="w-20 h-1 mt-6 rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--brand-pink), #7C3AED)" }}
                />
              </motion.div>

              {/* Stat cards — sobrios en navy/blanco */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
              >
                {violenciaStats.map((s, i) => (
                  <div
                    key={i}
                    className="ia-card rounded-3xl p-7 flex flex-col gap-3"
                    style={{
                      background: i === 0 ? "var(--brand-navy)" : "#fff",
                      border: `2px solid ${i === 0 ? "rgba(213,36,122,0.35)" : "rgba(0,50,87,0.1)"}`,
                      boxShadow: "0 8px 28px rgba(0,50,87,0.06)",
                    }}
                  >
                    <div
                      className="font-mono font-black leading-none"
                      style={{
                        fontSize: "clamp(2.4rem,5vw,3.2rem)",
                        color: i === 0 ? "var(--brand-pink)" : "var(--brand-navy)",
                      }}
                    >
                      {s.stat}
                    </div>
                    <p
                      className="text-base font-medium leading-relaxed"
                      style={{ color: i === 0 ? "rgba(255,255,255,0.7)" : "#334155" }}
                    >
                      {s.descripcion}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Tipos de violencia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {violenciaTipos.map((v, i) => {
                  const Icon = v.icono
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      transition={{ ...sp, delay: i * 0.08 }}
                      whileHover={{ y: -5 }}
                      className="ia-card rounded-3xl p-7 flex flex-col gap-4 bg-white"
                      style={{ border: "2px solid rgba(0,50,87,0.08)" }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(0,50,87,0.06)",
                          border: "2px solid rgba(0,50,87,0.12)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-brand-navy" />
                      </div>
                      <h4 className="font-display font-bold text-brand-navy text-lg leading-tight">
                        {v.tipo}
                      </h4>
                      <p className="text-slate-600 font-medium text-base leading-relaxed">
                        {v.descripcion}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Marco OEA */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="rounded-3xl p-7 flex flex-col md:flex-row items-start gap-5 mb-8"
                style={{
                  background: "rgba(213,36,122,0.04)",
                  border: "2px solid rgba(213,36,122,0.15)",
                }}
              >
                <Scale className="w-8 h-8 text-brand-pink flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest font-black block mb-2 text-brand-pink">
                    Marco OEA · Violencia Facilitada por Tecnología
                  </span>
                  <p className="text-slate-700 font-medium text-xl leading-relaxed">
                    La OEA reconoce la violencia digital de género como una forma
                    de violencia que incluye acoso, stalking digital, difusión no
                    consentida, amenazas y control abusivo. Los Estados tienen
                    obligación de prevenir, investigar y sancionar.
                  </p>
                </div>
              </motion.div>

              {/* Línea 144 */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{
                  background: "rgba(0,50,87,0.04)",
                  border: "1.5px solid rgba(0,50,87,0.1)",
                }}
              >
                <AlertCircle className="w-5 h-5 text-brand-navy flex-shrink-0" />
                <p className="text-base font-medium text-slate-600">
                  Si sos víctima de violencia de género (incluyendo violencia
                  digital) en Argentina, podés comunicarte con la{" "}
                  <strong className="text-brand-navy">Línea 144</strong>, disponible
                  las 24 horas, los 365 días del año. Es gratuita y confidencial.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CIERRE · NIVELES DE ACCIÓN — STEPPER ════════════════════════════ */}
        <section
          id="accion"
          className="relative px-6 py-24 lg:py-40 overflow-hidden"
          style={{ background: "var(--brand-dark)" }}
        >
          <div className="absolute inset-0 ia-grid-dark pointer-events-none" />
          <div
            className="ia-scan"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(66,114,187,0.25),transparent)",
            }}
          />

          {/* Blobs */}
          <div
            className="absolute ia-blob1 pointer-events-none"
            style={{
              top: "10%", right: "-5%",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(66,114,187,0.2) 0%,transparent 65%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute ia-blob2 pointer-events-none"
            style={{
              bottom: "5%", left: "-5%",
              width: 600, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(213,36,122,0.15) 0%,transparent 65%)",
              filter: "blur(70px)",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} transition={sp} className="text-center mb-20">
                <span
                  className="font-mono inline-block text-xs uppercase tracking-widest mb-5 px-5 py-2.5 rounded-full font-black"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "2px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Aplicación práctica del marco
                </span>
                <h2
                  className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                >
                  Tres Niveles de Acción
                </h2>
                <p
                  className="text-xl leading-relaxed font-medium max-w-2xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  La ética de la IA no es solo una cuestión de expertos: es una
                  responsabilidad distribuida en cada persona, organización y
                  sociedad.
                </p>
                <div
                  className="w-20 h-1 mx-auto mt-6 rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-pink))" }}
                />
              </motion.div>

              {/* Stepper — horizontal desktop, vertical mobile */}
              {/* Desktop: header row con círculos conectados */}
              <div className="hidden md:grid grid-cols-3 gap-0 mb-10 relative">
                {/* Single connector line behind all circles */}
                <div className="ia-step-connector" />
                {nivelesAccion.map((nivel, i) => {
                  const Icon = nivel.icono
                  return (
                    <div key={i} className="relative flex flex-col items-center">
                      {/* Step circle */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 relative"
                        style={{
                          background: `${nivel.color}18`,
                          border: `3px solid ${nivel.color}`,
                          boxShadow: `0 0 24px ${nivel.color}30`,
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: nivel.color }} />
                      </div>

                      {/* Number */}
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-black mb-1"
                        style={{ color: nivel.color }}
                      >
                        Nivel {nivel.numero}
                      </span>

                      {/* Level name */}
                      <h3 className="font-display font-bold text-white text-2xl mb-1">
                        {nivel.nivel}
                      </h3>
                      <p className="text-sm font-medium text-center" style={{ color: "rgba(255,255,255,0.72)" }}>
                        {nivel.descripcion}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Action cards — one per level */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nivelesAccion.map((nivel, i) => {
                  const Icon = nivel.icono
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      transition={{ ...sp, delay: i * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="rounded-3xl p-7 md:p-8 flex flex-col gap-5 transition-all duration-400 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `2px solid ${nivel.color}35`,
                        boxShadow: `0 8px 28px ${nivel.color}10`,
                      }}
                    >
                      {/* Mobile: show header here too */}
                      <div className="flex items-center gap-4 md:hidden">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `${nivel.color}18`,
                            border: `2px solid ${nivel.color}40`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: nivel.color }} />
                        </div>
                        <div>
                          <span className="font-mono text-xs uppercase tracking-widest font-black block" style={{ color: nivel.color }}>
                            Nivel {nivel.numero}
                          </span>
                          <h3 className="font-display font-bold text-white text-xl">
                            {nivel.nivel}
                          </h3>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {nivel.acciones.map((accion, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-lg font-medium"
                            style={{ color: "rgba(255,255,255,0.88)" }}
                          >
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{ color: nivel.color }}
                            />
                            {accion}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>

              {/* Cierre final */}
              <motion.div
                variants={fadeUp}
                transition={sp}
                className="mt-16 rounded-3xl p-10 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "2px solid rgba(255,255,255,0.09)",
                }}
              >
                <Sparkles className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.25)" }} />
                <h3
                  className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                >
                  La IA no decide el futuro.{" "}
                  <span className="ia-grad-text">Nosotros sí.</span>
                </h3>
                <p
                  className="text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  La Sociedad 5.0 exige ciudadanos capaces de entender los
                  sistemas que los gobiernan y ejercer su soberanía digital. Ese
                  es el horizonte del marco humanista: tecnología al servicio de
                  la dignidad, no al revés.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/tematicas"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, var(--brand-blue), #2255A0)",
                      boxShadow: "0 8px 24px rgba(66,114,187,0.4)",
                    }}
                  >
                    Ver todas las temáticas
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/ciudadania-presente/modulos"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      color: "rgba(255,255,255,0.88)",
                      border: "2px solid rgba(255,255,255,0.22)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    Ciudadanía Presente
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ FUENTES ════════════════════════════════════════════════════════════ */}
        <section className="relative px-6 py-20 lg:py-28 overflow-hidden bg-white">
          <div className="absolute inset-0 ia-grid-light opacity-50 pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} transition={sp} className="mb-12 text-center">
                <SectionLabel>Referencias y Marco Conceptual</SectionLabel>
                <h2
                  className="font-display font-bold text-brand-navy leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Fuentes y Organismos de Referencia
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {fuentes.map((f, i) => {
                  const Icon = f.icono
                  return (
                    <motion.a
                      key={i}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      transition={{ ...sp, delay: i * 0.07 }}
                      whileHover={{ y: -5 }}
                      className="ia-card rounded-2xl p-6 flex flex-col gap-3 bg-white cursor-pointer"
                      style={{ border: "2px solid rgba(66,114,187,0.1)", textDecoration: "none" }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "rgba(66,114,187,0.07)",
                            border: "1.5px solid rgba(66,114,187,0.18)",
                          }}
                        >
                          <Icon className="w-5 h-5 text-brand-blue" />
                        </div>
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "rgba(66,114,187,0.45)" }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest font-black text-brand-blue mb-1">
                          {f.organismo} · {f.anio}
                        </div>
                        <p className="font-bold text-brand-navy text-lg leading-snug hover:underline decoration-brand-blue underline-offset-2">
                          {f.documento}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
