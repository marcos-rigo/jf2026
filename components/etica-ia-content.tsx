"use client"

import React, { useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Brain, Scale, Users, Cpu, Zap, Shield, AlertTriangle,
  BookOpen, Lightbulb, Eye, Lock, ArrowRight, ChevronDown,
  Globe, Heart, Handshake, Target, Activity, FileText,
  AlertCircle, CheckCircle2, XCircle, Sparkles, Network,
  GraduationCap, Briefcase, UserCheck, TrendingUp, TrendingDown,
  EyeOff, MessageSquareWarning, Ban
} from "lucide-react"

// ─── Styles ───
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --ei-blue: #4272BB;
    --ei-pink: #D5247A;
    --ei-navy: #003257;
    --ei-teal: #00A99D;
    --ei-purple: #7C3AED;
    --ei-gold: #D97706;
    --ei-blue-glow: rgba(66,114,187,0.35);
    --ei-pink-glow: rgba(213,36,122,0.35);
    --ei-teal-glow: rgba(0,169,157,0.35);
  }

  @keyframes eiFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(1deg); }
  }
  @keyframes eiBlob1 {
    0%, 100% { transform: translate(0,0) scale(1); }
    40% { transform: translate(50px,-70px) scale(1.12); }
    70% { transform: translate(-35px,35px) scale(0.93); }
  }
  @keyframes eiBlob2 {
    0%, 100% { transform: translate(0,0) scale(1); }
    35% { transform: translate(-60px,-40px) scale(1.18); }
    70% { transform: translate(40px,50px) scale(0.9); }
  }
  @keyframes eiScan {
    0% { top: -2px; opacity: 0; }
    5% { opacity: 0.5; }
    95% { opacity: 0.5; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes eiGradText {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes eiGrid {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
  }
  @keyframes eiPing {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  .ei-float   { animation: eiFloat 7s ease-in-out infinite; }
  .ei-float-d1 { animation: eiFloat 7s ease-in-out infinite; animation-delay: .5s; }
  .ei-float-d2 { animation: eiFloat 7s ease-in-out infinite; animation-delay: 1.1s; }
  .ei-blob1   { animation: eiBlob1 22s ease-in-out infinite; }
  .ei-blob2   { animation: eiBlob2 28s ease-in-out infinite; }
  .ei-scan    { animation: eiScan 12s linear infinite; position: absolute; left: 0; right: 0; height: 2px; pointer-events: none; }
  .ei-ping    { animation: eiPing 2.2s ease-out infinite; }
  .ei-grad-text {
    background: linear-gradient(90deg, #4272BB, #D5247A, #00A99D, #4272BB);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: eiGradText 6s linear infinite;
  }
  .ei-grid {
    background-image:
      linear-gradient(rgba(66,114,187,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(66,114,187,0.05) 1px, transparent 1px);
    background-size: 44px 44px;
    animation: eiGrid 60s linear infinite;
  }
  .ei-dots {
    background-image: radial-gradient(circle, rgba(66,114,187,0.12) 1.5px, transparent 1.5px);
    background-size: 26px 26px;
  }

  .ei-card {
    background: #FFFFFF;
    border: 2px solid rgba(66,114,187,0.12);
    border-radius: 28px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 8px 32px rgba(0,50,87,0.04);
  }
  .ei-card:hover {
    border-color: var(--ei-blue);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(66,114,187,0.14), 0 0 16px var(--ei-blue-glow);
  }
  .ei-card-teal {
    background: #FFFFFF;
    border: 2px solid rgba(0,169,157,0.15);
    border-radius: 28px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 8px 32px rgba(0,169,157,0.04);
  }
  .ei-card-teal:hover {
    border-color: var(--ei-teal);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,169,157,0.14), 0 0 16px var(--ei-teal-glow);
  }
  .ei-card-pink {
    background: #FFFFFF;
    border: 2px solid rgba(213,36,122,0.12);
    border-radius: 28px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 8px 32px rgba(213,36,122,0.04);
  }
  .ei-card-pink:hover {
    border-color: var(--ei-pink);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(213,36,122,0.14), 0 0 16px var(--ei-pink-glow);
  }

  .ei-badge {
    background: rgba(255,255,255,0.95);
    border: 2px solid rgba(66,114,187,0.3);
    color: var(--ei-navy);
    box-shadow: 0 4px 14px rgba(66,114,187,0.1);
  }
  .ei-mono { font-family: 'JetBrains Mono', monospace; }
  .ei-serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }

  .ei-risk-high {
    background: linear-gradient(135deg,rgba(239,68,68,.06),rgba(239,68,68,.02));
    border: 2px solid rgba(239,68,68,.22);
  }
  .ei-risk-mid {
    background: linear-gradient(135deg,rgba(217,119,6,.06),rgba(217,119,6,.02));
    border: 2px solid rgba(217,119,6,.22);
  }
  .ei-risk-low {
    background: linear-gradient(135deg,rgba(34,197,94,.06),rgba(34,197,94,.02));
    border: 2px solid rgba(34,197,94,.22);
  }
`

// ─── Motion variants ───
const fadeUp  = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } }
const fadeIn  = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const spring  = { type: "spring" as const, stiffness: 260, damping: 22 }

// ─── Types ───
type Competencia    = { icono: React.ElementType; titulo: string; descripcion: string; color: string }
type DimConectar    = { letra: string; nombre: string; detalle: string; color: string }
type TrabajoFila    = { aspecto: string; noAutonoma: string; autonoma: string; nota: string }
type PilarFilosofico= { filosofo: string; concepto: string; cita: string; aplicacion: string; color: string; bg: string }
type RiesgoAIAct    = { nivel: string; ejemplos: string[]; color: string; icon: React.ElementType; clase: string }
type ViolenciaItem  = { icono: React.ElementType; tipo: string; descripcion: string; color: string }
type NivelAccion    = { nivel: string; icono: React.ElementType; acciones: string[]; color: string; bg: string }

// ─── Data ───
const competencias: Competencia[] = [
  {
    icono: Network,
    titulo: "Comprensión de sistemas",
    descripcion: "Entender cómo funcionan los algoritmos, los datos y las plataformas digitales que estructuran la vida social.",
    color: "#4272BB",
  },
  {
    icono: Shield,
    titulo: "Uso ético",
    descripcion: "Emplear las tecnologías respetando los derechos propios y ajenos, con conciencia sobre el impacto de cada acción digital.",
    color: "#00A99D",
  },
  {
    icono: Scale,
    titulo: "Reflexión axiológica",
    descripcion: "Examinar los valores que subyacen a los sistemas tecnológicos y sus efectos sobre la dignidad humana.",
    color: "#7C3AED",
  },
  {
    icono: Lightbulb,
    titulo: "Pensamiento crítico",
    descripcion: "Cuestionar, comparar y evaluar información, decisiones algorítmicas y narrativas tecnológicas.",
    color: "#D97706",
  },
]

const dimensionesConectar: DimConectar[] = [
  { letra: "C", nombre: "Comprender", detalle: "Conceptualizar el ecosistema digital: protocolos, derechos y lógicas de plataforma.", color: "#4272BB" },
  { letra: "U", nombre: "Usar", detalle: "Operar herramientas digitales con seguridad, eficiencia y autonomía.", color: "#00A99D" },
  { letra: "P", nombre: "Pensar", detalle: "Reflexionar críticamente sobre el impacto personal y colectivo de la tecnología.", color: "#7C3AED" },
  { letra: "C", nombre: "Crear", detalle: "Producir contenidos y soluciones digitales desde una perspectiva ética y ciudadana.", color: "#D5247A" },
]

const tablaComparativa: TrabajoFila[] = [
  {
    aspecto: "Rol del humano",
    noAutonoma: "Colaborador esencial — la IA amplifica capacidades humanas",
    autonoma: "Supervisor estratégico — riesgo de desplazamiento en tareas rutinarias",
    nota: "",
  },
  {
    aspecto: "Perfil más favorecido",
    noAutonoma: "Sénior: juicio crítico, experiencia contextual, liderazgo ético",
    autonoma: "Alta demanda de IA engineers; junior en riesgo si no desarrolla competencias diferenciadoras",
    nota: "La curva de aprendizaje tradicional se comprime",
  },
  {
    aspecto: "Habilidades clave",
    noAutonoma: "Criterio, síntesis, comunicación, ética aplicada",
    autonoma: "Supervisión de sistemas, auditoría de sesgos, gobernanza algorítmica",
    nota: "",
  },
  {
    aspecto: "Riesgo principal",
    noAutonoma: "Dependencia excesiva que erosiona el pensamiento propio",
    autonoma: "Redundancia de roles cognitivos de bajo nivel; 'automatización del humano'",
    nota: "OIT: 375M de empleos en transición para 2030",
  },
  {
    aspecto: "Oportunidad",
    noAutonoma: "Humanidad ampliada: creatividad, empatía y ética como ventaja competitiva",
    autonoma: "Nuevos roles: diseño ético, interpretabilidad, interfaz humano-IA",
    nota: "",
  },
]

const pilaresFilosoficos: PilarFilosofico[] = [
  {
    filosofo: "Maurice Merleau-Ponty",
    concepto: "Sensibilidad",
    cita: "La percepción es nuestro anclaje en el mundo. El cuerpo conoce antes que la razón.",
    aplicacion: "La IA procesa señales; los humanos sienten. La sensibilidad corporal, emocional y estética es irreductible a código y constituye la base de la empatía y el cuidado.",
    color: "#4272BB",
    bg: "rgba(66,114,187,0.06)",
  },
  {
    filosofo: "Emmanuel Levinas",
    concepto: "Alteridad",
    cita: "El rostro del otro me interpela con una responsabilidad que ningún sistema puede asumir por mí.",
    aplicacion: "La responsabilidad hacia el otro no puede delegarse en un algoritmo. La ética surge del encuentro singular, de la vulnerabilidad reconocida ante un ser irreemplazable.",
    color: "#D5247A",
    bg: "rgba(213,36,122,0.06)",
  },
  {
    filosofo: "Humberto Maturana",
    concepto: "Biología del Amor",
    cita: "El amor es el fundamento de lo social. Sin emoción no hay acción humana legítima.",
    aplicacion: "Los vínculos, la colaboración y la solidaridad emergen del amor como emoción fundante. Una IA sin emoción puede optimizar, pero no puede amar ni construir comunidad.",
    color: "#00A99D",
    bg: "rgba(0,169,157,0.06)",
  },
]

const riesgosAIAct: RiesgoAIAct[] = [
  {
    nivel: "Riesgo Inaceptable",
    ejemplos: ["Puntuación social por gobiernos", "Manipulación subconsciente", "Reconocimiento facial en tiempo real en espacios públicos"],
    color: "#EF4444",
    icon: Ban,
    clase: "ei-risk-high",
  },
  {
    nivel: "Alto Riesgo",
    ejemplos: ["IA en salud y diagnóstico médico", "Contratación laboral automatizada", "Sistemas de justicia penal", "Infraestructura crítica"],
    color: "#D97706",
    icon: AlertTriangle,
    clase: "ei-risk-mid",
  },
  {
    nivel: "Riesgo Mínimo",
    ejemplos: ["Filtros de spam", "Videojuegos con IA", "Chatbots de atención al cliente con transparencia declarada"],
    color: "#22C55E",
    icon: CheckCircle2,
    clase: "ei-risk-low",
  },
]

const violenciaItems: ViolenciaItem[] = [
  {
    icono: EyeOff,
    tipo: "Acoso y hostigamiento",
    descripcion: "Persecución sistemática, monitoreo no consentido y amenazas facilitadas por plataformas digitales. Los algoritmos de sugerencia de contenido pueden amplificar perfiles de acosadores.",
    color: "#EF4444",
  },
  {
    icono: MessageSquareWarning,
    tipo: "Difusión no consentida",
    descripcion: "Imágenes íntimas compartidas sin consentimiento (IBSA). La IA generativa agrava este delito al permitir la creación de deepfakes de alta calidad con fines de humillación y extorsión.",
    color: "#D5247A",
  },
  {
    icono: AlertCircle,
    tipo: "Violencia espiritual y cultural",
    descripcion: "Ataques a la identidad, cosmovisión y pertenencia cultural de comunidades vulnerables, pueblos originarios y minorías. Los sistemas de moderación con sesgos amplifican estas violencias.",
    color: "#7C3AED",
  },
  {
    icono: Users,
    tipo: "Sesgo de género sistémico",
    descripcion: "Los algoritmos entrenados con datos históricos reproducen y escalan la discriminación. Desde CVs rechazados por género hasta recomendaciones de crédito sesgadas por estereotipos.",
    color: "#D97706",
  },
]

const nivelesAccion: NivelAccion[] = [
  {
    nivel: "Personal",
    icono: UserCheck,
    acciones: [
      "Auditar el consumo de IA: ¿qué decisiones delegás a sistemas automatizados?",
      "Desarrollar alfabetización algorítmica: entender cómo los sistemas te clasifican",
      "Ejercer derechos digitales: acceso, rectificación y explicación de decisiones automatizadas",
      "Cultivar lo que la IA no puede reemplazar: sensibilidad, criterio ético, presencia",
    ],
    color: "#4272BB",
    bg: "rgba(66,114,187,0.06)",
  },
  {
    nivel: "Organizativo",
    icono: Briefcase,
    acciones: [
      "Implementar protocolos de auditoría de sesgos en sistemas de IA",
      "Crear comités de ética tecnológica con perspectiva de género e interculturalidad",
      "Garantizar transparencia en decisiones automatizadas que afecten personas",
      "Diseñar políticas de IA que prioricen el bienestar humano sobre la eficiencia",
    ],
    color: "#00A99D",
    bg: "rgba(0,169,157,0.06)",
  },
  {
    nivel: "Social",
    icono: Globe,
    acciones: [
      "Exigir regulación pública: AI Act, responsabilidad objetiva y carga de la prueba invertida",
      "Fortalecer la ciudadanía digital como derecho político, no solo habilidad técnica",
      "Proteger a comunidades vulnerables de la violencia algorítmica",
      "Construir IA desde perspectivas diversas: género, cultura, territorio y clase",
    ],
    color: "#D5247A",
    bg: "rgba(213,36,122,0.06)",
  },
]

// ─── ScrollProgress ───
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #4272BB 0%, #D5247A 50%, #00A99D 100%)",
        boxShadow: "0 0 10px rgba(213,36,122,0.4)",
      }}
    />
  )
}

// ─── SectionBadge ───
function SectionBadge({ label, color = "#4272BB" }: { label: string; color?: string }) {
  return (
    <span
      className="ei-mono inline-block text-xs uppercase tracking-widest mb-5 px-5 py-2 rounded-full font-bold ei-badge"
      style={{ borderColor: `${color}40` }}
    >
      {label}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════════
export function EticaIAContent() {
  const [openRiesgo, setOpenRiesgo] = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroSY } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY  = useTransform(heroSY, [0, 1], [0, 28])
  const heroOp = useTransform(heroSY, [0, 0.75], [1, 0])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Navbar />
      <ScrollProgress />

      <main className="relative w-full font-sans overflow-hidden bg-white text-slate-800">

        {/* ══ 0 · HERO ══════════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white py-28 md:py-36">
          <div className="absolute inset-0 ei-dots opacity-60 pointer-events-none" />
          <div className="absolute inset-0 ei-grid opacity-30 pointer-events-none" />
          <div
            className="ei-scan"
            style={{
              background: "linear-gradient(90deg,transparent,rgba(66,114,187,0.3),transparent)",
              boxShadow: "0 0 14px rgba(66,114,187,0.5)",
            }}
          />

          {/* Blobs */}
          <div className="absolute ei-blob1 pointer-events-none" style={{ top: "-8%", right: "-4%", width: 860, height: 860, borderRadius: "50%", background: "radial-gradient(circle,rgba(66,114,187,0.22) 0%,transparent 65%)", filter: "blur(90px)" }} />
          <div className="absolute ei-blob2 pointer-events-none" style={{ bottom: "-12%", left: "-6%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(213,36,122,0.16) 0%,transparent 65%)", filter: "blur(100px)" }} />
          <div className="absolute pointer-events-none" style={{ top: "35%", left: "38%", width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,169,157,0.12) 0%,transparent 65%)", filter: "blur(80px)" }} />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14">
            <motion.div
              style={{ y: heroY, opacity: heroOp }}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} transition={spring} className="mb-8 flex justify-center">
                <div className="ei-mono ei-badge inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-extrabold tracking-wider uppercase">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="ei-ping absolute inset-0 rounded-full" style={{ background: "#4272BB" }} />
                    <span className="relative rounded-full h-2.5 w-2.5" style={{ background: "#4272BB" }} />
                  </span>
                  IA · Ética · Derecho · Ciudadanía
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                transition={spring}
                className="ei-serif font-black leading-[1.04] tracking-tight mb-8 text-brand-navy"
                style={{ fontSize: "clamp(2.8rem,7.2vw,5.6rem)" }}
              >
                La Integración de la IA<br />
                en el <span className="ei-grad-text">Tejido Social</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                transition={spring}
                className="text-xl md:text-2xl leading-relaxed text-slate-600 font-semibold max-w-3xl mx-auto mb-8"
              >
                Un marco integral sobre ética, derecho y ciudadanía digital desde un enfoque{" "}
                <span className="font-black text-brand-navy">radicalmente humanista</span>
              </motion.p>

              {/* Sociedad 5.0 pill */}
              <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap justify-center gap-4 mb-12">
                {["Sociedad 4.0 → 5.0", "Brújula ética", "Enfoque antropocéntrico"].map((tag) => (
                  <span
                    key={tag}
                    className="ei-mono text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full"
                    style={{ background: "rgba(66,114,187,0.06)", border: "2px solid rgba(66,114,187,0.18)", color: "#003257" }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Blockquote */}
              <motion.blockquote
                variants={fadeUp}
                transition={spring}
                className="text-lg md:text-xl italic text-slate-600 max-w-2xl mx-auto mb-12 font-medium"
                style={{ borderLeft: "5px solid #4272BB", paddingLeft: "1.5rem", textAlign: "left" }}
              >
                "La tecnología no es neutral. Es un espejo que amplifica lo que ya somos. La pregunta ética no es qué puede hacer la IA, sino qué tipo de humanidad queremos construir con ella."
                <br /><span className="font-extrabold text-brand-navy not-italic">— Marco de Ciudadanía Digital · José Farhat</span>
              </motion.blockquote>

              {/* Scroll cue */}
              <motion.a
                href="#seccion1"
                variants={fadeUp}
                transition={spring}
                onClick={(e) => { e.preventDefault(); document.getElementById("seccion1")?.scrollIntoView({ behavior: "smooth" }) }}
                className="inline-flex items-center gap-2 text-brand-blue font-bold text-base hover:gap-3 transition-all duration-300"
              >
                Explorar el marco
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </motion.a>
            </motion.div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top,#FFFFFF,transparent)" }} />
        </section>

        {/* ══ 1 · CIUDADANÍA DIGITAL Y ALFABETIZACIÓN ══════════════════════════ */}
        <section id="seccion1" className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 ei-grid opacity-15 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <SectionBadge label="Sección 1 · El Rol de la Escuela" />
                <h2 className="ei-serif font-black text-brand-navy mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Ciudadanía Digital y Alfabetización
                </h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  La escuela ya no puede enseñar solo a leer y escribir. Debe formar ciudadanos que comprendan, usen y cuestionen el entorno digital.
                </p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-brand-pink mx-auto mt-5 rounded-full" />
              </motion.div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">

                {/* Grandes — Dimensiones Conectar Igualdad */}
                <motion.div
                  variants={fadeUp} transition={spring}
                  className="md:col-span-12 lg:col-span-5 rounded-[32px] overflow-hidden"
                  style={{ background: "linear-gradient(135deg,#003257 0%,#4272BB 100%)" }}
                >
                  <div className="p-8 md:p-10 h-full flex flex-col justify-between">
                    <div>
                      <span className="ei-mono text-xs uppercase tracking-widest font-bold text-white/60 mb-4 block">Programa Conectar Igualdad</span>
                      <h3 className="ei-serif font-black text-white text-2xl md:text-3xl mb-6 leading-tight">
                        Las 4 Dimensiones de la Alfabetización Digital
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {dimensionesConectar.map((d) => (
                        <div
                          key={d.nombre}
                          className="rounded-2xl p-5"
                          style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.15)" }}
                        >
                          <div
                            className="ei-mono font-black text-3xl mb-2"
                            style={{ color: d.color === "#4272BB" ? "#7EB3FF" : d.color === "#00A99D" ? "#5BE8DE" : d.color === "#7C3AED" ? "#C4B5FD" : "#F9A8D4" }}
                          >
                            {d.letra}
                          </div>
                          <div className="font-extrabold text-white text-base mb-1">{d.nombre}</div>
                          <div className="text-white/60 text-sm font-medium leading-relaxed">{d.detalle}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Competencias clave */}
                <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {competencias.map((c, i) => {
                    const Icon = c.icono
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        transition={{ ...spring, delay: i * 0.08 }}
                        whileHover={{ y: -6 }}
                        className="ei-card p-7 flex flex-col gap-4"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${c.color}12`, border: `2px solid ${c.color}30` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: c.color }} />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-brand-navy text-lg mb-2">{c.titulo}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">{c.descripcion}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

              </div>

              {/* Insight bar */}
              <motion.div
                variants={fadeUp} transition={spring}
                className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
                style={{ background: "linear-gradient(135deg,rgba(66,114,187,0.06),rgba(0,169,157,0.06))", border: "2px solid rgba(66,114,187,0.14)" }}
              >
                <GraduationCap className="w-10 h-10 text-brand-blue flex-shrink-0" />
                <p className="text-slate-700 text-base md:text-lg font-semibold leading-relaxed">
                  <span className="font-black text-brand-navy">La escuela como garante de equidad digital:</span> sin formación crítica en ciudadanía digital, las brechas tecnológicas se convierten en brechas de poder. La alfabetización no es una competencia técnica; es un derecho político.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 2 · ECONOMÍA DEL CONOCIMIENTO Y TRABAJO ══════════════════════════ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden" style={{ background: "#F7FAFD" }}>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <SectionBadge label="Sección 2 · El Futuro del Trabajo" color="#00A99D" />
                <h2 className="ei-serif font-black text-brand-navy mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Economía del Conocimiento y Trabajo
                </h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  ¿La IA desplaza o amplía? Depende del tipo de IA y del perfil profesional. El análisis es más complejo que el relato del reemplazo.
                </p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-teal-400 mx-auto mt-5 rounded-full" />
              </motion.div>

              {/* Header conceptual cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeUp} transition={spring} className="ei-card p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(66,114,187,0.1)", border: "2px solid rgba(66,114,187,0.25)" }}>
                      <Cpu className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="ei-mono text-xs font-black uppercase tracking-widest text-brand-blue">IA No Autónoma</span>
                  </div>
                  <h3 className="ei-serif font-black text-brand-navy text-xl">IA Colaborativa</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">Requiere del humano como supervisor activo, intérprete final y garante ético. Extiende las capacidades sin reemplazar el juicio. Modelo de <span className="font-black text-brand-blue">humanidad ampliada</span>.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-emerald-600">Favorece al profesional Sénior con criterio</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} transition={{ ...spring, delay: 0.1 }} className="ei-card-pink p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(213,36,122,0.08)", border: "2px solid rgba(213,36,122,0.22)" }}>
                      <Zap className="w-5 h-5 text-brand-pink" />
                    </div>
                    <span className="ei-mono text-xs font-black uppercase tracking-widest text-brand-pink">IA Autónoma</span>
                  </div>
                  <h3 className="ei-serif font-black text-brand-navy text-xl">IA de Alta Potencia Computacional</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">Ejecuta tareas completas sin supervisión continua. Comprime la curva de aprendizaje tradicional. Genera riesgo de <span className="font-black text-brand-pink">automatización de los humanos</span> en roles cognitivos de bajo nivel.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <TrendingDown className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-bold text-red-600">Presiona la empleabilidad Junior sin diferenciación</span>
                  </div>
                </motion.div>
              </div>

              {/* Tabla comparativa */}
              <motion.div variants={fadeUp} transition={spring} className="rounded-3xl overflow-hidden" style={{ border: "2px solid rgba(66,114,187,0.15)", background: "#fff" }}>
                <div className="grid grid-cols-3 text-xs font-black uppercase tracking-widest"
                  style={{ background: "linear-gradient(135deg,#003257,#4272BB)" }}>
                  <div className="px-6 py-4 text-white/70">Dimensión</div>
                  <div className="px-6 py-4 text-white flex items-center gap-2"><Cpu className="w-4 h-4" /> IA No Autónoma</div>
                  <div className="px-6 py-4" style={{ color: "#F9A8D4" }}><span className="flex items-center gap-2"><Zap className="w-4 h-4" /> IA Autónoma</span></div>
                </div>
                {tablaComparativa.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 border-t transition-colors duration-200 hover:bg-slate-50"
                    style={{ borderColor: "rgba(66,114,187,0.1)" }}
                  >
                    <div className="px-6 py-5 font-extrabold text-brand-navy text-sm border-r" style={{ borderColor: "rgba(66,114,187,0.1)" }}>
                      {row.aspecto}
                    </div>
                    <div className="px-6 py-5 text-slate-700 text-sm leading-relaxed border-r" style={{ borderColor: "rgba(66,114,187,0.1)" }}>
                      {row.noAutonoma}
                    </div>
                    <div className="px-6 py-5 text-sm leading-relaxed">
                      <span className="text-slate-700">{row.autonoma}</span>
                      {row.nota && (
                        <div className="mt-2 text-xs font-bold text-brand-pink/80 flex items-center gap-1.5">
                          <Activity className="w-3 h-3" />
                          {row.nota}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Cita clave */}
              <motion.div variants={fadeUp} transition={spring} className="mt-10 rounded-3xl p-8 text-center"
                style={{ background: "linear-gradient(135deg,rgba(0,169,157,0.06),rgba(66,114,187,0.06))", border: "2px solid rgba(0,169,157,0.18)" }}>
                <p className="text-slate-700 text-lg md:text-xl font-bold leading-relaxed">
                  La respuesta no es resistir a la IA, sino{" "}
                  <span className="font-black text-brand-navy">construir profesionales con juicio ético, sensibilidad y capacidad de supervisión crítica</span>{" "}
                  que los sistemas automatizados nunca podrán reemplazar.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 3 · HUMANIDAD AMPLIADA ════════════════════════════════════════════ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 ei-dots opacity-40 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-20">
                <SectionBadge label="Sección 3 · Filosofía y Tecnología" color="#7C3AED" />
                <h2 className="ei-serif font-black text-brand-navy mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Humanidad Ampliada y Sensibilidad
                </h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  Tres pensadores que nos recuerdan lo que ningún sistema puede computar: la condición humana irreductible.
                </p>
                <div className="w-20 h-1.5 mx-auto mt-5 rounded-full" style={{ background: "linear-gradient(90deg,#7C3AED,#D5247A)" }} />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pilaresFilosoficos.map((pilar, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ ...spring, delay: i * 0.12 }}
                    whileHover={{ y: -10 }}
                    className="rounded-[32px] p-8 flex flex-col gap-5 transition-all duration-400"
                    style={{
                      background: pilar.bg,
                      border: `2px solid ${pilar.color}28`,
                      boxShadow: `0 8px 32px ${pilar.color}08`,
                    }}
                  >
                    {/* Número */}
                    <div className="ei-mono font-black text-5xl" style={{ color: `${pilar.color}30` }}>
                      0{i + 1}
                    </div>

                    {/* Concepto */}
                    <div>
                      <span
                        className="ei-mono text-xs uppercase tracking-widest font-black mb-2 block"
                        style={{ color: pilar.color }}
                      >
                        {pilar.concepto}
                      </span>
                      <h3 className="ei-serif font-black text-brand-navy text-2xl mb-1">{pilar.filosofo}</h3>
                    </div>

                    {/* Cita */}
                    <blockquote
                      className="italic text-slate-700 text-sm leading-relaxed font-medium border-l-4 pl-4"
                      style={{ borderColor: pilar.color }}
                    >
                      {pilar.cita}
                    </blockquote>

                    {/* Aplicación */}
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{pilar.aplicacion}</p>

                    {/* Icono */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mt-auto"
                      style={{ background: `${pilar.color}14`, border: `2px solid ${pilar.color}28` }}
                    >
                      <Heart className="w-5 h-5" style={{ color: pilar.color }} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Puente conceptual */}
              <motion.div variants={fadeUp} transition={spring} className="mt-12 rounded-3xl p-8 md:p-10"
                style={{ background: "linear-gradient(135deg,#003257 0%,#1a4a7a 100%)" }}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Sparkles className="w-12 h-12 text-white/40 flex-shrink-0" />
                  <div>
                    <h4 className="ei-serif font-black text-white text-2xl mb-3">La tesis del marco humanista</h4>
                    <p className="text-white/75 font-medium leading-relaxed text-lg">
                      La Sociedad 5.0 no se construye optimizando algoritmos: se construye <span className="text-white font-black">amplificando la humanidad</span>. La tecnología debe expandir nuestra capacidad de sentir, cuidar y relacionarnos — no reemplazar esas capacidades por eficiencia computacional.
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 4 · MARCO NORMATIVO ══════════════════════════════════════════════ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden" style={{ background: "#F7FAFD" }}>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <SectionBadge label="Sección 4 · Derecho e IA" color="#EF4444" />
                <h2 className="ei-serif font-black text-brand-navy mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Marco Normativo y Responsabilidad Civil
                </h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  Del problema de la Caja Negra al AI Act 2024: cómo el derecho intenta regular lo que la ética ya señalaba.
                </p>
                <div className="w-20 h-1.5 mx-auto mt-5 rounded-full" style={{ background: "linear-gradient(90deg,#EF4444,#D97706)" }} />
              </motion.div>

              {/* Black Box */}
              <motion.div variants={fadeUp} transition={spring} className="mb-10 rounded-3xl overflow-hidden"
                style={{ border: "2px solid rgba(239,68,68,0.18)", background: "#fff" }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-center"
                    style={{ background: "linear-gradient(135deg,rgba(239,68,68,0.05),rgba(217,119,6,0.05))" }}>
                    <span className="ei-mono text-xs uppercase tracking-widest font-black text-red-500 mb-4 block">El problema central</span>
                    <h3 className="ei-serif font-black text-brand-navy text-2xl md:text-3xl mb-5 leading-tight">El Problema de la Caja Negra (Black Box)</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Los sistemas de IA más avanzados toman decisiones que <span className="font-black text-brand-navy">ni sus propios creadores pueden explicar</span>. Cuando un algoritmo niega un crédito, rechaza un CV o determina una sentencia, ¿quién responde? ¿Cómo se apela?
                    </p>
                    <div className="mt-6 flex items-start gap-3 rounded-2xl p-5"
                      style={{ background: "rgba(239,68,68,0.06)", border: "2px solid rgba(239,68,68,0.18)" }}>
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-bold text-slate-700">
                        La falta de explicabilidad genera asimetrías de poder: quien fue perjudicado por la IA no tiene herramientas para entender ni cuestionar la decisión.
                      </p>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l" style={{ borderColor: "rgba(239,68,68,0.12)" }}>
                    <span className="ei-mono text-xs uppercase tracking-widest font-black text-amber-600 mb-4 block">Respuesta jurídica</span>
                    <h3 className="ei-serif font-black text-brand-navy text-xl md:text-2xl mb-5">Directiva UE 2024/2853 · Software como Producto</h3>
                    <div className="space-y-4">
                      {[
                        { icon: FileText, text: "Reconoce el software como producto sujeto a responsabilidad civil objetiva" },
                        { icon: Scale, text: "Defiende la inversión de la carga de la prueba: el fabricante debe demostrar que su IA NO causó el daño" },
                        { icon: Shield, text: "Establece derechos de explicación para decisiones automatizadas que afecten a personas" },
                      ].map((item, i) => {
                        const Icon = item.icon
                        return (
                          <div key={i} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: "rgba(217,119,6,0.05)", border: "1.5px solid rgba(217,119,6,0.18)" }}>
                            <Icon className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Act 2024 */}
              <motion.div variants={fadeUp} transition={spring} className="mb-10">
                <h3 className="ei-serif font-black text-brand-navy text-2xl mb-6 text-center">
                  Clasificación de Riesgos · AI Act 2024
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {riesgosAIAct.map((r, i) => {
                    const Icon = r.icon
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        transition={{ ...spring, delay: i * 0.1 }}
                        whileHover={{ y: -6 }}
                        className={`${r.clase} rounded-3xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300`}
                        onClick={() => setOpenRiesgo(openRiesgo === i ? null : i)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${r.color}15`, border: `2px solid ${r.color}35` }}>
                            <Icon className="w-5 h-5" style={{ color: r.color }} />
                          </div>
                          <ChevronDown
                            className="w-5 h-5 transition-transform duration-300"
                            style={{ color: r.color, transform: openRiesgo === i ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </div>
                        <h4 className="font-extrabold text-brand-navy text-lg">{r.nivel}</h4>
                        {openRiesgo === i && (
                          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 mt-1">
                            {r.ejemplos.map((ej, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: r.color }} />
                                {ej}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                        {openRiesgo !== i && (
                          <p className="text-sm text-slate-500 font-medium">
                            {r.ejemplos.length} categorías — clic para ver
                          </p>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Responsabilidad Objetiva */}
              <motion.div variants={fadeUp} transition={spring} className="rounded-3xl p-8 md:p-10"
                style={{ background: "linear-gradient(135deg,#003257,#003a6b)" }}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.2)" }}
                  >
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="ei-serif font-black text-white text-2xl mb-3">La tesis de la Responsabilidad Objetiva</h4>
                    <p className="text-white/75 font-medium leading-relaxed">
                      Ante el daño causado por IA, <span className="text-white font-black">la empresa desarrolladora debe demostrar que su sistema no causó el daño</span> — no la víctima demostrar que sí. Este estándar reconoce la asimetría de información radical entre quienes despliegan sistemas opacos y quienes los sufren.
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 5 · JUSTICIA DIGITAL Y GÉNERO ════════════════════════════════════ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden bg-white">
          <div className="absolute inset-0 ei-dots opacity-40 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <SectionBadge label="Sección 5 · Género y Algoritmos" color="#D5247A" />
                <h2 className="ei-serif font-black text-brand-navy mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Justicia Digital y Perspectiva de Género
                </h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  Los algoritmos no son neutros. Cuando se entrenan con datos de un mundo desigual, producen y amplifican esa desigualdad a escala masiva.
                </p>
                <div className="w-20 h-1.5 mx-auto mt-5 rounded-full" style={{ background: "linear-gradient(90deg,#D5247A,#7C3AED)" }} />
              </motion.div>

              {/* Algoritmo Patriarcal */}
              <motion.div variants={fadeUp} transition={spring} className="mb-10 rounded-3xl p-8 md:p-10"
                style={{ background: "linear-gradient(135deg,rgba(213,36,122,0.06),rgba(124,58,237,0.04))", border: "2px solid rgba(213,36,122,0.18)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="ei-mono text-xs uppercase tracking-widest font-black text-brand-pink mb-3 block">Concepto clave</span>
                    <h3 className="ei-serif font-black text-brand-navy text-2xl md:text-3xl mb-4 leading-tight">El Algoritmo Patriarcal</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Los sistemas de IA entrenados con datos históricos aprenden y replican las discriminaciones del pasado. Amazon descartó su herramienta de contratación IA porque penalizaba CVs de mujeres. Los algoritmos de crédito asignan peores condiciones a mujeres y minorías étnicas. La IA de imágenes sobrerrepresenta estereotipos de género.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { stat: "78%", desc: "de los datasets usados para entrenar IA de reconocimiento facial están dominados por hombres blancos (MIT, 2019)" },
                      { stat: "3x", desc: "mayor tasa de error en reconocimiento facial para mujeres de piel oscura vs. hombres de piel clara" },
                      { stat: "OEA", desc: "reconoce la violencia digital facilitada por tecnología como forma de violencia de género (2021)" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 rounded-2xl p-5 bg-white"
                        style={{ border: "2px solid rgba(213,36,122,0.12)", boxShadow: "0 4px 14px rgba(213,36,122,0.04)" }}>
                        <div className="ei-mono font-black text-brand-pink text-2xl flex-shrink-0">{item.stat}</div>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Violencias */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {violenciaItems.map((item, i) => {
                  const Icon = item.icono
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      transition={{ ...spring, delay: i * 0.09 }}
                      whileHover={{ y: -6 }}
                      className="ei-card p-7 flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}10`, border: `2px solid ${item.color}28` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <h4 className="font-extrabold text-brand-navy text-base leading-tight">{item.tipo}</h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.descripcion}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Marco OEA */}
              <motion.div variants={fadeUp} transition={spring} className="mt-8 rounded-3xl p-6 flex items-start gap-5"
                style={{ background: "rgba(213,36,122,0.04)", border: "2px solid rgba(213,36,122,0.14)" }}>
                <Handshake className="w-8 h-8 text-brand-pink flex-shrink-0 mt-0.5" />
                <div>
                  <span className="ei-mono text-xs uppercase tracking-widest font-black text-brand-pink mb-2 block">Marco OEA — Violencia Digital de Género</span>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    La Organización de Estados Americanos reconoce la violencia facilitada por tecnología (Technology-Facilitated Gender-Based Violence) como una forma de violencia de género que incluye acoso, stalking digital, difusión no consentida, amenazas, y control y monitoreo abusivos. Los Estados tienen obligación de prevenir, investigar y sancionar.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ══ 6 · CONCLUSIÓN Y NIVELES DE ACCIÓN ══════════════════════════════ */}
        <section className="relative px-6 py-28 lg:py-36 overflow-hidden"
          style={{ background: "linear-gradient(180deg,#003257 0%,#001a3a 100%)" }}>

          <div className="absolute inset-0 ei-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 ei-dots opacity-20 pointer-events-none" />

          {/* Blobs sutiles */}
          <div className="absolute pointer-events-none" style={{ top: "-5%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(66,114,187,0.3) 0%,transparent 65%)", filter: "blur(80px)" }} />
          <div className="absolute pointer-events-none" style={{ bottom: "-5%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(213,36,122,0.2) 0%,transparent 65%)", filter: "blur(70px)" }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

              <motion.div variants={fadeUp} transition={spring} className="text-center mb-16">
                <span className="ei-mono inline-block text-xs uppercase tracking-widest mb-5 px-5 py-2 rounded-full font-bold"
                  style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}>
                  Conclusión · Marco en Acción
                </span>
                <h2 className="ei-serif font-black text-white mb-5" style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)" }}>
                  Tres Niveles de Aplicación del Marco Humanista
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-semibold">
                  La ética de la IA no es solo una cuestión de expertos: es una responsabilidad distribuida en cada persona, organización y sociedad.
                </p>
                <div className="w-20 h-1.5 mx-auto mt-5 rounded-full"
                  style={{ background: "linear-gradient(90deg,#4272BB,#D5247A,#00A99D)" }} />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {nivelesAccion.map((nivel, i) => {
                  const Icon = nivel.icono
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      transition={{ ...spring, delay: i * 0.12 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="rounded-[32px] p-8 flex flex-col gap-6 transition-all duration-400 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: `2px solid ${nivel.color}40`,
                        backdropFilter: "blur(16px)",
                        boxShadow: `0 10px 35px ${nivel.color}12`,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${nivel.color}20`, border: `2px solid ${nivel.color}40` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: nivel.color }} />
                        </div>
                        <div>
                          <span className="ei-mono text-xs uppercase tracking-widest font-black block" style={{ color: nivel.color }}>
                            Nivel
                          </span>
                          <h3 className="ei-serif font-black text-white text-2xl">{nivel.nivel}</h3>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {nivel.acciones.map((accion, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: nivel.color }} />
                            <span className="text-white/75 text-sm font-medium leading-relaxed">{accion}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>

              {/* Cierre */}
              <motion.div variants={fadeUp} transition={spring} className="mt-16 rounded-3xl p-10 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "2px solid rgba(255,255,255,0.1)" }}>
                <Sparkles className="w-10 h-10 text-white/30 mx-auto mb-5" />
                <h3 className="ei-serif font-black text-white text-3xl md:text-4xl mb-4 leading-tight">
                  La IA no decide el futuro.<br />
                  <span className="ei-grad-text">Nosotros sí.</span>
                </h3>
                <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-8">
                  La Sociedad 5.0 exige ciudadanos capaces de entender los sistemas que los gobiernan y ejercer su soberanía digital. Ese es el horizonte del marco humanista: tecnología al servicio de la dignidad, no al revés.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/tematicas"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-white text-base transition-all duration-300 hover:gap-4 hover:-translate-y-1"
                    style={{ background: "linear-gradient(135deg,#4272BB,#D5247A)", boxShadow: "0 8px 24px rgba(213,36,122,0.35)" }}
                  >
                    Ver todas las temáticas
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/ciudadania-presente/modulos"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-white/80 text-base transition-all duration-300 hover:text-white hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.18)" }}
                  >
                    Plataforma Ciudadanía Presente
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
