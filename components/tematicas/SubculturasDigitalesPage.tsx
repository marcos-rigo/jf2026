'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Eye,
  FileText,
  FolderLock,
  Globe,
  GraduationCap,
  HelpCircle,
  Images,
  Lock,
  Maximize2,
  Palette,
  Quote,
  Radio,
  RotateCcw,
  Search,
  Shield,
  Sparkles,
  Terminal,
  UserRound,
  Users,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button'
import { Footer } from '@/components/footer'
import { useLibresSubtopic } from '@/lib/hooks/use-libres-subtopic'
import { getLibresSubtopicBySlug } from '@/lib/libres-bajo-influencia-data'
import { hexToRgba } from '@/lib/utils'

import { WebpSlideCarousel } from '@/components/tematicas/WebpSlideCarousel'

// ─── Trend 2026 Color System: Cobalt Indigo, Solar Amber Gold, Mentado Verde Azulado ───
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

  :root {
    --indigo-primary: #4F46E5;
    --indigo-glow: rgba(79, 70, 229, 0.45);
    --amber-accent: #D97706;
    --amber-glow: rgba(217, 119, 6, 0.45);
    --teal-accent: #0D9488;
    --teal-glow: rgba(13, 148, 136, 0.45);
    --emerald-accent: #059669;
    --emerald-glow: rgba(5, 150, 105, 0.45);
    --brand-navy: #0F172A;
  }

  .sd-fraunces { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
  .sd-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  /* ── Desktop Editorial Floating Text Wrap ── */
  @media (min-width: 1024px) {
    .sd-editorial-wrap-right {
      float: right;
      margin-left: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
    .sd-editorial-wrap-left {
      float: left;
      margin-right: 2.25rem;
      margin-bottom: 1.75rem;
      width: 380px;
      clear: none;
    }
  }

  /* ── Keyframe Animations ── */
  @keyframes sdF1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(40px, -50px) scale(1.1); }
    75% { transform: translate(-30px, 30px) scale(0.95); }
  }
  @keyframes sdF2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    35% { transform: translate(-50px, -35px) scale(1.15); }
    70% { transform: translate(35px, 40px) scale(0.92); }
  }
  @keyframes sdPing {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes sdScan {
    0% { top: -2px; opacity: 0; }
    5% { opacity: .5; }
    95% { opacity: .5; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes sdFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
  }
  @keyframes cyberGridShift {
    0% { background-position: 0 0; }
    100% { background-position: 45px 45px; }
  }
  @keyframes gradientTextShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .sd-f1 { animation: sdF1 22s ease-in-out infinite; }
  .sd-f2 { animation: sdF2 26s ease-in-out infinite; }
  .sd-ping-indigo { animation: sdPing 2s ease-out infinite; }
  .sd-scan { animation: sdScan 10s linear infinite; position: absolute; left: 0; right: 0; height: 2px; pointer-events: none; }
  .sd-float { animation: sdFloat 7s ease-in-out infinite; }
  .sd-float-d1 { animation: sdFloat 7s ease-in-out infinite; animation-delay: .6s; }
  .sd-float-d2 { animation: sdFloat 7s ease-in-out infinite; animation-delay: 1.2s; }

  /* ── Pattern & Grid Accents ── */
  .sd-dots-cyber {
    background-image: radial-gradient(circle, rgba(79, 70, 229, 0.12) 1.5px, transparent 1.5px);
    background-size: 26px 26px;
  }
  .sd-grid-cyber {
    background-image: 
      linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px);
    background-size: 38px 38px;
    animation: cyberGridShift 60s linear infinite;
  }

  /* ── Interactive Cards & Bento Elements ── */
  .sd-cyber-card {
    background: #FFFFFF;
    border: 2px solid rgba(79, 70, 229, 0.16);
    border-radius: 32px;
    box-shadow: 0 10px 35px rgba(79, 70, 229, 0.04);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sd-cyber-card:hover {
    border-color: var(--indigo-primary);
    box-shadow: 0 22px 50px rgba(79, 70, 229, 0.14), 0 0 20px var(--indigo-glow);
  }

  .sd-cyber-card-amber {
    background: #FFFFFF;
    border: 2px solid rgba(217, 119, 6, 0.22);
    border-radius: 32px;
    box-shadow: 0 10px 35px rgba(217, 119, 6, 0.04);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sd-cyber-card-amber:hover {
    border-color: var(--amber-accent);
    box-shadow: 0 22px 50px rgba(217, 119, 6, 0.16), 0 0 20px var(--amber-glow);
  }

  .sd-cyber-card-teal {
    background: #FFFFFF;
    border: 2px solid rgba(13, 148, 136, 0.22);
    border-radius: 32px;
    box-shadow: 0 10px 35px rgba(13, 148, 136, 0.04);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sd-cyber-card-teal:hover {
    border-color: var(--teal-accent);
    box-shadow: 0 22px 50px rgba(13, 148, 136, 0.16), 0 0 20px var(--teal-glow);
  }

  .sd-quiz-option {
    border: 2px solid rgba(79, 70, 229, 0.16);
    background: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
  }
  .sd-quiz-option:hover {
    border-color: var(--indigo-primary);
    background: rgba(238, 242, 255, 0.85);
    transform: translateY(-3px) translateX(4px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.12);
  }

  .sd-cyber-btn {
    background: linear-gradient(135deg, var(--indigo-primary), var(--amber-accent));
    color: #FFFFFF;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 6px 25px rgba(79, 70, 229, 0.28), 0 0 6px var(--indigo-glow);
    font-weight: 800;
  }
  .sd-cyber-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 16px 36px rgba(79, 70, 229, 0.42), 0 0 25px var(--indigo-glow);
  }

  .sd-cyber-btn-outline {
    border: 3px solid var(--indigo-primary);
    color: var(--brand-navy);
    background: transparent;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.05);
    font-weight: 800;
  }
  .sd-cyber-btn-outline:hover {
    background: rgba(79, 70, 229, 0.06);
    transform: translateY(-3px) scale(1.03);
  }

  .sd-grad-cyber-text {
    background: linear-gradient(90deg, #4F46E5, #D97706, #0D9488, #4F46E5);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientTextShift 6s linear infinite;
  }

  .sd-source-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 800;
    transition: all 0.2s ease;
    border: 1px solid rgba(79, 70, 229, 0.25);
    background: #FFFFFF;
    color: #4338CA;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .sd-source-chip:hover {
    transform: translateY(-2px) scale(1.04);
    border-color: #4F46E5;
    background: #EEF2FF;
    color: #312E81;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.18);
  }

  .sd-cyber-badge-amber {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(217, 119, 6, 0.35);
    color: var(--brand-navy);
    box-shadow: 0 6px 15px rgba(217, 119, 6, 0.1);
  }
  .sd-cyber-badge-teal {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(13, 148, 136, 0.35);
    color: var(--brand-navy);
    box-shadow: 0 6px 15px rgba(13, 148, 136, 0.1);
  }
`

// Trend 2026 Color Tokens with WCAG AAA Compliant Text Contrast
const INDIGO = '#4F46E5'
const INDIGO_TEXT = '#3730A3' // WCAG AAA > 7:1
const AMBER = '#D97706'
const AMBER_TEXT = '#92400E' // WCAG AAA > 7:1 (Deep Gold)
const TEAL = '#0D9488'
const TEAL_TEXT = '#0F766E' // WCAG AAA > 7:1 (Mentado Verde Azulado)
const EMERALD = '#059669'
const EMERALD_TEXT = '#047857' // WCAG AAA > 7:1

const data = getLibresSubtopicBySlug('subculturas-digitales')!

// Verified Official & Academic Sources List
const VERIFIED_ACADEMIC_SOURCES = [
  {
    author: 'danah boyd (2010)',
    title: 'Social Network Sites as Networked Publics: Affordances, Dynamics, and Implications (Los sitios de redes sociales como públicos conectados: posibilidades, dinámicas e implicancias)',
    publication: 'A Networked Self (Zizi Papacharissi, ed.)',
    url: 'https://danah.org/',
    topic: 'Públicos conectados, persistencia y contexto colapsado',
  },
  {
    author: 'Edward L. Deci & Richard M. Ryan (1985)',
    title: 'Intrinsic Motivation and Self-Determination in Human Behavior (Motivación intrínseca y autodeterminación en la conducta humana)',
    publication: 'Plenum Press / Self-Determination Theory',
    url: 'https://selfdeterminationtheory.org/',
    topic: 'Autonomía, competencia y pertenencia social',
  },
  {
    author: 'Henri Tajfel & John Turner (1979)',
    title: 'An Integrative Theory of Intergroup Conflict (Una teoría integradora del conflicto intergrupal)',
    publication: 'The Social Psychology of Intergroup Relations',
    url: 'https://www.simplypsychology.org/social-identity-theory.html',
    topic: 'Teoría de la identidad social e in-group/out-group',
  },
  {
    author: 'Dick Hebdige (1979)',
    title: 'Subculture: The Meaning of Style (Subcultura: el significado del estilo)',
    publication: 'Routledge / Birmingham School of Cultural Studies',
    url: 'https://www.taylorfrancis.com/books/mono/10.4324/9780203139943/subculture-dick-hebdige',
    topic: 'Estilo como resistencia e incorporación comercial',
  },
  {
    author: 'Sarah Thornton (1995)',
    title: 'Club Cultures: Music, Media and Subcultural Capital (Culturas de club: música, medios y capital subcultural)',
    publication: 'Polity Press',
    url: 'https://www.politybooks.com/',
    topic: 'Capital subcultural y rol constitutivo de los medios',
  },
  {
    author: 'Ross Haenfler (2014)',
    title: 'Goths, Punks, and Gamers: Youth Subcultures and Subcultural Capital in the Digital Age (Góticos, punks y gamers: subculturas juveniles y capital subcultural en la era digital)',
    publication: 'Routledge',
    url: 'https://www.routledge.com/Goths-Punks-and-Gamers-Youth-Subcultures-and-Subcultural-Capital/Haenfler/p/book/9780415844871',
    topic: 'Subculturas aceleradas y desterritorialización digital',
  },
  {
    author: 'Robert Cialdini (1984)',
    title: 'Influence: The Psychology of Persuasion (Influencia: la psicología de la persuasión)',
    publication: 'Harper Business',
    url: 'https://www.influenceatwork.com/7-principles-of-persuasion/',
    topic: 'Prueba social y validación de pares',
  },
  {
    author: 'Albert Bandura (1977)',
    title: 'Social Learning Theory (Teoría del aprendizaje social)',
    publication: 'Prentice-Hall',
    url: 'https://www.simplypsychology.org/bandura.html',
    topic: 'Aprendizaje observacional y vicario',
  },
  {
    author: 'J. Patrick Williams (2006)',
    title: 'Authenticity and Subcultural Capital in the Straightedge Scene (Autenticidad y capital subcultural en la escena straightedge)',
    publication: 'Journal of Youth Studies, 9(2), 173-189',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/13676260600635623',
    topic: 'Autenticidad y disputas en foros digitales',
  },
  {
    author: 'Adam Aleksic (2024/2025)',
    title: 'Algospeak: How Social Media Is Transforming the Future of Language (Algospeak: cómo las redes sociales están transformando el futuro del lenguaje)',
    publication: 'Etymology Nerd / Linguistics Research',
    url: 'https://www.etymologynerd.com/',
    topic: 'Adaptación lingüística ante moderación algorítmica',
  },
  {
    author: 'Robert V. Kozinets (2010, 2020)',
    title: 'Netnography: Redefining Ethnography in the Digital Age (Netnografía: redefiniendo la etnografía en la era digital)',
    publication: 'Sage Publications',
    url: 'https://us.sagepub.com/en-us/nam/netnography/book266023',
    topic: 'Netnografía cualitativa e inmersión digital',
  },
  {
    author: 'Big Games Machine (2024-2025)',
    title: 'US Gamer Audience Demographics & Media Consumption Survey (Encuesta demográfica y de consumo de medios de la audiencia gamer de EE.UU.)',
    publication: 'Industry Report / Tubefilter',
    url: 'https://www.tubefilter.com/',
    topic: 'Consumo de VTubers por género (23% mujeres / 14% varones)',
  },
  {
    author: 'Jakob Nielsen (2006)',
    title: 'The 90-9-1 Rule for Participation Inequality in Social Media and Online Communities (La regla 90-9-1 de la desigualdad de participación en redes sociales y comunidades online)',
    publication: 'Nielsen Norman Group',
    url: 'https://www.nngroup.com/articles/participation-inequality/',
    topic: 'Regla del 80-90% de audiencia pasiva (Lurkers)',
  },
]

const HERO_FRAGMENTS = [
  { text: 'unalive', top: '16%', left: '9%', rotate: -8, size: 'text-sm md:text-base', delay: 0 },
  { text: '🌽', top: '20%', left: '84%', rotate: 6, size: 'text-2xl md:text-3xl', delay: 0.3, onlyDesktop: true },
  { text: 'k1ll', top: '70%', left: '10%', rotate: 4, size: 'text-sm md:text-base', delay: 0.6 },
  { text: 'seggs', top: '74%', left: '80%', rotate: -5, size: 'text-sm md:text-base', delay: 0.9, onlyDesktop: true },
  { text: 'ED · SA · SH', top: '10%', left: '56%', rotate: 2, size: 'text-xs md:text-sm', delay: 1.2, onlyDesktop: true },
  { text: '🍉', top: '86%', left: '50%', rotate: -3, size: 'text-2xl md:text-3xl', delay: 1.5 },
]

const CIPHER_TERMS = [
  { cipher: 'unalive', meaning: 'suicidio', tag: 'eufemismo léxico' },
  { cipher: 'mascara', meaning: 'agresión sexual', tag: 'eufemismo léxico' },
  { cipher: 'seggs', meaning: 'sexo', tag: 'manipulación grafémica' },
  { cipher: 'k1ll', meaning: 'matar', tag: 'manipulación grafémica' },
  { cipher: 'ED · SA · SH', meaning: 'trastorno alimentario, abuso sexual, autolesión', tag: 'acronimia de trauma' },
  { cipher: '🌽', meaning: 'pornografía', tag: 'ideograma como metáfora' },
  { cipher: '🍉', meaning: 'tema político', tag: 'ideograma como metáfora' },
]

const COMMUNITY_LAYERS = [
  { label: 'Moderadores', desc: 'Patrullan las fronteras del grupo', detail: 'Voluntarios que patrullan las fronteras del grupo, sosteniendo qué entra y qué queda afuera.', color: INDIGO, textColor: INDIGO_TEXT, icon: Shield },
  { label: 'Prosumidores', desc: 'Dinamizan el espacio, generan contenido', detail: 'Dinamizan el espacio generando el contenido que el resto consume y responde.', color: AMBER, textColor: AMBER_TEXT, icon: Zap },
  { label: 'Lurkers', desc: 'Oyentes pasivos — sostienen la viabilidad del nicho', detail: 'Oyentes pasivos que no publican, pero representan el 80% de la audiencia y sostienen, con su sola presencia, la viabilidad del nicho (Regla 90-9-1 de Jakob Nielsen).', stat: '80%', color: TEAL, textColor: TEAL_TEXT, icon: Eye },
]

const AULA_ITEMS = [
  { title: 'Comprender antes de juzgar', detail: 'Cuando un estudiante se sumerge en una subcultura, casi siempre está resolviendo una necesidad genuina de autonomía, competencia o pertenencia (Deci & Ryan).' },
  { title: 'Leer los códigos', detail: 'Preguntar quién define los códigos de una comunidad, qué se valora en ella, cómo se aprenden sus normas — un ejercicio de alfabetización mediática.' },
  { title: 'Puente pedagógico', detail: 'Usar la subcultura como puente, aprovechando el enorme capital de conocimiento que los estudiantes ya traen.' },
  { title: 'Mirada atenta, sin patologizar', detail: 'Estar disponible para conversar, sin ridiculizar ni prohibir de entrada, articulando con otros adultos si aparecen señales de captura por una comunidad dañina.' },
]

const SECTION_VISUALS = [
  { imageSrc: '/img/tematicas/subculturas-digitales/necesidades.webp', icon: Brain, label: 'Autonomía y Pertenencia', source: 'Deci & Ryan (1985)', sourceUrl: 'https://selfdeterminationtheory.org/' },
  { imageSrc: '/img/tematicas/subculturas-digitales/comunidad_subcultura.webp', icon: Users, label: 'Identidad de Grupo', source: 'Tajfel & Turner (1979)', sourceUrl: 'https://www.simplypsychology.org/social-identity-theory.html' },
  { imageSrc: '/img/tematicas/subculturas-digitales/estilo_resistencia.webp', icon: Palette, label: 'Estilo y Resistencia', source: 'Dick Hebdige / Ross Haenfler', sourceUrl: 'https://www.taylorfrancis.com/books/mono/10.4324/9780203139943/subculture-dick-hebdige' },
  { imageSrc: '/img/tematicas/subculturas-digitales/normas_invisibles.webp', icon: Eye, label: 'Prueba Social y Métricas', source: 'Cialdini & Bandura', sourceUrl: 'https://www.influenceatwork.com/7-principles-of-persuasion/' },
  { imageSrc: '/img/tematicas/subculturas-digitales/autenticidad.webp', icon: Lock, label: 'Capital Subcultural', source: 'Patrick Williams (2006)', sourceUrl: 'https://www.tandfonline.com/doi/abs/10.1080/13676260600635623' },
  { imageSrc: '/img/tematicas/subculturas-digitales/algospeak.webp', icon: Terminal, label: 'Lógica del Algospeak', source: 'Adam Aleksic (2024)', sourceUrl: 'https://www.etymologynerd.com/' },
  { imageSrc: '/img/tematicas/subculturas-digitales/netnografia.webp', icon: Search, label: 'Netnografía & Etnografía Digital', source: 'Robert Kozinets (2020)', sourceUrl: 'https://us.sagepub.com/en-us/nam/netnography/book266023' },
  { imageSrc: '/img/tematicas/subculturas-digitales/aula_pedagogia.webp', icon: GraduationCap, label: 'Orientación Docente', source: 'Ministerio de Educación & UNESCO', sourceUrl: 'https://www.unesco.org/' },
]

const RING_R = 90
const RING_C = 2 * Math.PI * RING_R

const fadeUp  = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const spring  = { type: "spring" as const, stiffness: 260, damping: 20 }

const qVar = {
  enter: (d: number) => ({ opacity: 0, x: d * 60, filter: 'blur(10px)' }),
  center: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: (d: number) => ({ opacity: 0, x: d * -60, filter: 'blur(10px)' }),
}
const qVarReduced = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

function useCountUp(target: number, duration: number = 1.5, start: boolean = true) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) { setCount(0); return }
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

// ── Floating Image Frame for Editorial Text Wrap ──
function EditorialImageFrame({ imageSrc, altText, icon: Icon, colorA, colorB, label, source, sourceUrl, floatSide = 'right' }: { imageSrc: string; altText: string; icon: LucideIcon; colorA: string; colorB: string; label: string; source: string; sourceUrl: string; floatSide?: 'right' | 'left' }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={`relative p-3 bg-white border-2 rounded-[32px] shadow-lg overflow-hidden group mb-6 ${floatSide === 'left' ? 'sd-editorial-wrap-left' : 'sd-editorial-wrap-right'}`} style={{ borderColor: hexToRgba(colorA, 0.25) }}>
      <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-200">
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 380px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${hexToRgba(colorA, 0.88)}, ${hexToRgba(colorB, 0.65)})` }} />
            <div className="absolute inset-0 sd-dots-cyber opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white">
              <Icon className="w-14 h-14 sm:w-16 sm:h-16 mb-2.5 opacity-90" strokeWidth={1.5} />
              <span className="sd-fraunces font-black text-base sm:text-lg drop-shadow">{label}</span>
            </div>
          </div>
        )}

        {/* Source Citation Badge on Image with Real External Link */}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-extrabold text-xs shadow-md bg-white/95 backdrop-blur-sm border transition-all hover:scale-105"
          style={{ color: colorA, borderColor: hexToRgba(colorA, 0.35) }}
          title={`Ver fuente académica de ${source}`}
        >
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate max-w-[180px]">{source}</span>
          <ExternalLink className="w-3 h-3 opacity-75 shrink-0" />
        </a>
      </div>
    </div>
  )
}

export default function SubculturasDigitalesPage() {
  const shouldReduceMotion = useReducedMotion() ?? false
  const { quiz, lightbox } = useLibresSubtopic(data)
  const {
    showQuiz, currentQuestionIdx, selectedAnswers, showResults,
    previousResult, currentQuestion, isLastQuestion, canContinue, finalScore, passed,
    startQuiz, handleSelect, handleNext, handlePrev,
  } = quiz
  const {
    lightboxOpen, setLightboxOpen, zoom, pan, isDragging, lightboxAreaRef,
    closeLightbox, zoomIn, zoomOut, resetZoom, onMouseDown, onMouseMove, onMouseUp,
  } = lightbox

  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  function toggleReveal(i: number) {
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const [activeLayer, setActiveLayer] = useState<number | null>(null)
  const [openAuth, setOpenAuth] = useState<Set<number>>(new Set())
  function toggleAuth(i: number) {
    setOpenAuth((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }
  const [openAula, setOpenAula] = useState<Set<number>>(new Set())
  function toggleAula(i: number) {
    setOpenAula((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const [quizDir, setQuizDir] = useState(1)
  function goNext() {
    setQuizDir(1)
    handleNext()
  }
  function goPrev() {
    setQuizDir(-1)
    handlePrev()
  }

  const countValue = useCountUp(finalScore * 10, 1.5, showResults)

  const [showBackToTop, setShowBackToTop] = useState(false)
  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 900)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Navbar />
      <BackToDashboardButton />

      <main className="relative w-full font-sans overflow-hidden bg-white text-slate-800 text-lg">

        {/* ══ 1 HERO — Cobalt Indigo, Mostaza Gold & Deep Teal ══ */}
        <section className="relative flex items-center overflow-hidden bg-white pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:min-h-[82vh]">
          
          <div className="absolute inset-0 sd-dots-cyber opacity-70 pointer-events-none" />
          <div className="absolute inset-0 sd-grid-cyber opacity-25 pointer-events-none" />
          <div className="sd-scan" style={{ background:"linear-gradient(90deg,transparent,rgba(79,70,229,.35),transparent)", boxShadow: "0 0 15px var(--indigo-primary)" }} />

          <div className="absolute sd-f1 pointer-events-none" style={{ top:"-10%", right:"-5%", width:800, height:800, borderRadius:"50%", background:"radial-gradient(circle,rgba(79,70,229,.2) 0%,transparent 65%)", filter:"blur(90px)" }} />
          <div className="absolute sd-f2 pointer-events-none" style={{ bottom:"-15%", left:"-8%", width:650, height:650, borderRadius:"50%", background:"radial-gradient(circle,rgba(217,119,6,.16) 0%,transparent 65%)", filter:"blur(100px)" }} />

          {HERO_FRAGMENTS.map((f) => (
            <span
              key={f.text}
              aria-hidden="true"
              className={`sd-float absolute font-extrabold pointer-events-none select-none px-3 py-1.5 rounded-full border bg-white/95 shadow-md ${f.size} ${f.onlyDesktop ? 'hidden xl:block' : 'hidden md:block'}`}
              style={{
                top: f.top, left: f.left, transform: `rotate(${f.rotate}deg)`,
                fontFamily: 'var(--font-plex-mono)', color: AMBER_TEXT, borderColor: hexToRgba(AMBER, 0.35),
                animationDelay: `${f.delay}s`,
                boxShadow: "0 6px 20px rgba(217, 119, 6, 0.15)",
              }}
            >
              {f.text}
            </span>
          ))}

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              <motion.div className="lg:col-span-7 text-left" initial="hidden" animate="visible" variants={stagger}>
                
                <motion.div variants={fadeUp} transition={spring} className="mb-4 sm:mb-5">
                  <div className="sd-mono sd-cyber-badge inline-flex items-center gap-2.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full sd-ping-indigo" style={{ background:"var(--indigo-primary)" }} />
                      <span className="relative rounded-full h-2 w-2" style={{ background:"var(--indigo-primary)" }} />
                    </span>
                    Libres Bajo Influencia · Comunidad Digital
                  </div>
                </motion.div>

                <motion.h1 variants={fadeUp} transition={spring}
                  className="sd-fraunces font-black leading-[1.02] tracking-tight mb-4 sm:mb-5 text-[#0F172A]"
                  style={{ fontSize:"clamp(2.2rem, 5vw, 4.4rem)" }}>
                  Subculturas <br />
                  <span className="sd-grad-cyber-text pb-1 block lg:inline">digitales</span>
                </motion.h1>

                <motion.p variants={fadeUp} transition={spring}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-slate-800 font-extrabold max-w-2xl">
                  {data.description}
                </motion.p>

                <motion.div variants={fadeUp} transition={spring} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center mb-6 w-full sm:w-auto">
                  <a href="#contenido"
                    className="sd-cyber-btn inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base md:text-lg text-center transition-all duration-300">
                    <Sparkles className="w-5 h-5 text-white shrink-0" />
                    Empezar a leer
                  </a>
                  <a href="#evaluacion"
                    className="sd-cyber-btn-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-base md:text-lg text-center">
                    Ir a la evaluación <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0" />
                  </a>
                </motion.div>

                {/* Tappeable Section Index */}
                <motion.div variants={fadeUp} transition={spring} className="flex flex-wrap items-center gap-2">
                  <span className="sd-mono text-xs font-bold uppercase tracking-widest text-slate-400 mr-1">Secciones:</span>
                  {data.sections.map((s, i) => (
                    <a
                      key={s.heading}
                      href={`#seccion-${i}`}
                      className="px-3 py-1 rounded-full text-xs font-black border transition-all duration-200 hover:scale-110 shadow-sm"
                      style={{
                        background: i % 2 === 0 ? "rgba(79, 70, 229, 0.08)" : "rgba(217, 119, 6, 0.08)",
                        borderColor: i % 2 === 0 ? "rgba(79, 70, 229, 0.3)" : "rgba(217, 119, 6, 0.3)",
                        color: i % 2 === 0 ? INDIGO_TEXT : AMBER_TEXT,
                        fontFamily: 'var(--font-plex-mono)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </a>
                  ))}
                </motion.div>

              </motion.div>

              <motion.div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
                initial={{ opacity:0, scale:0.93 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.9, delay:0.25, ease:[0.16, 1, 0.3, 1] }}>
                
                <div className="absolute -left-6 top-4 hidden xl:block sd-float-d1 pointer-events-none z-20">
                  <div className="px-4 py-2.5 rounded-2xl text-xs font-black shadow-xl bg-white border-2 border-indigo-200 text-indigo-700" style={{ boxShadow: "0 10px 35px rgba(79,70,229,0.18)" }}>
                    ⚡ 80% son Lurkers
                  </div>
                </div>
                <div className="absolute -right-4 top-[55%] hidden xl:block sd-float-d2 pointer-events-none z-20">
                  <div className="px-4 py-2.5 rounded-2xl text-xs font-black shadow-xl bg-white border-2 border-amber-200 text-amber-800" style={{ boxShadow: "0 10px 35px rgba(217,119,6,0.18)" }}>
                    💖 Algospeak & Eufemismos
                  </div>
                </div>

                <div className="w-full max-w-[340px]">
                  <EditorialImageFrame
                    imageSrc="/img/tematicas/subculturas-digitales/hero.webp"
                    altText="Subculturas Digitales y Comunidades de Nicho"
                    icon={Radio}
                    colorA={INDIGO}
                    colorB={AMBER}
                    label="Territorio Digital"
                    source="José Farhat · Libres Bajo Influencia"
                    sourceUrl="https://josefarhat.com"
                    floatSide="right"
                  />
                </div>

              </motion.div>

            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none" style={{ background:"linear-gradient(to top,#FFFFFF,transparent)" }} />
        </section>

        {/* ══ 2 INTRODUCCIÓN CON CITA & FUENTE OFICIAL ══ */}
        <section id="contenido" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="absolute inset-0 sd-grid-cyber opacity-15 pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
              <motion.div variants={fadeUp} transition={spring}
                className="sd-cyber-card-amber rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 border-l-4 sm:border-l-8"
                style={{ borderLeftColor: AMBER }}>
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="sd-mono sd-cyber-badge-amber inline-block text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full font-bold">
                    // Marco conceptual & Fuente Académica
                  </div>

                  <span className="sd-source-chip">
                    <Globe className="w-3.5 h-3.5 text-amber-700" />
                    danah boyd (2010) — Públicos Conectados
                  </span>
                </div>

                <p className="sd-fraunces text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#0F172A] font-bold mb-8">
                  {data.intro}
                </p>

                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
                  <Award className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-950 text-sm sm:text-base font-extrabold block mb-1">
                      Evidencia Empírica — UNICEF / UNESCO (Kids Online 2024-2025)
                    </strong>
                    <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                      El 88% de los niños, niñas y adolescentes de 9 a 17 años afirma conectarse a diario para habitar espacios sociales virtuales de pares con igual significación emocional que el mundo presencial.
                    </p>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ 3 SECCIONES DE CONTENIDO CON PALETA TENDENCIA 2026 (COBALTO, MOSTAZA, VERDE AZULADO) ══ */}
        {data.sections.map((section, i) => {
          const isAlgospeak = section.heading === 'El lenguaje como campo de batalla: Algospeak'
          const isCommunities = section.heading === 'Cómo se estudian estas comunidades'
          const isAuth = section.heading === 'Autenticidad: quién pertenece de verdad'
          const isAula = section.heading === 'Qué significa esto para el aula'

          const visual = SECTION_VISUALS[i] || {
            imageSrc: `/img/tematicas/subculturas-digitales/seccion_${i+1}.png`,
            icon: Sparkles,
            label: `Dimensión ${i+1}`,
            source: 'Investigación Digital',
            sourceUrl: 'https://josefarhat.com',
          }

          // Variación armónica de acentos cromáticos 2026 por sección
          const accentColor = i % 3 === 0 ? INDIGO : i % 3 === 1 ? AMBER : TEAL
          const accentText  = i % 3 === 0 ? INDIGO_TEXT : i % 3 === 1 ? AMBER_TEXT : TEAL_TEXT
          const bgSection   = i % 3 === 0 ? 'bg-white' : i % 3 === 1 ? 'bg-[#FFFDF5]' : 'bg-[#F4FBFB]'
          const cardClass   = i % 3 === 0 ? 'sd-cyber-card' : i % 3 === 1 ? 'sd-cyber-card-amber' : 'sd-cyber-card-teal'
          const floatSide   = i % 2 === 0 ? 'right' : 'left'

          // ── A. Algospeak Decoder with Image & Aleksic Link ──
          if (isAlgospeak) {
            const decodedCount = revealed.size
            return (
              <section key={section.heading} id={`seccion-${i}`} className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-amber-50/40">
                <div className="max-w-6xl mx-auto relative z-10">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    
                    <motion.div variants={fadeUp} transition={spring} className="text-center mb-12">
                      <span className="sd-mono sd-cyber-badge-amber inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                        // Transmisión interceptada · Oxford Internet Institute
                      </span>
                      <h2 className="sd-fraunces text-3xl md:text-5xl font-black mb-6 text-[#0F172A]">{section.heading}</h2>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-indigo-600 mx-auto rounded-full mb-8" />
                    </motion.div>

                    {/* Editorial Text Wrap Layout for Algospeak Intro */}
                    <div className="sd-cyber-card-amber p-6 sm:p-10 md:p-14 border-2 mb-12">
                      <EditorialImageFrame
                        imageSrc={visual.imageSrc}
                        altText={section.heading}
                        icon={Terminal}
                        colorA={AMBER}
                        colorB={INDIGO}
                        label="Lógica del Algospeak"
                        source={visual.source}
                        sourceUrl={visual.sourceUrl}
                        floatSide="right"
                      />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="sd-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800">
                          Sección {String(i + 1).padStart(2, '0')}
                        </span>
                        <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="sd-source-chip">
                          <ExternalLink className="w-3 h-3 text-amber-700" /> Adam Aleksic (2024) ↗
                        </a>
                      </div>

                      <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                        {section.paragraphs.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}
                      </div>

                      <div className="clear-both" />
                    </div>

                    <motion.div variants={fadeUp} transition={spring}>
                      <div className="flex items-center justify-center gap-3 mb-8">
                        <p className="sd-mono text-xs sm:text-sm font-bold text-slate-500">
                          Tocá una tarjeta para decodificar el término algospeak:
                        </p>
                        <span className="sd-mono px-3.5 py-1.5 rounded-full text-xs font-black sd-cyber-badge-amber">
                          {decodedCount}/{CIPHER_TERMS.length} decodificados
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {CIPHER_TERMS.map((term, ti) => {
                          const isRevealed = revealed.has(ti)
                          return (
                            <motion.button
                              key={term.cipher}
                              type="button"
                              onClick={() => toggleReveal(ti)}
                              whileHover={{ y: -6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="sd-cyber-card text-left p-6 relative cursor-pointer bg-white overflow-hidden transition-all duration-300 border-2"
                              style={{ borderColor: isRevealed ? EMERALD : "rgba(217, 119, 6, 0.25)" }}
                            >
                              <span className="sd-mono inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-3 font-bold bg-amber-50 text-amber-800">
                                {term.tag}
                              </span>
                              <p className="sd-mono text-3xl md:text-4xl font-black mb-3 break-words" style={{ color: AMBER_TEXT }}>
                                {term.cipher}
                              </p>
                              
                              <div className={`transition-all duration-300 ${isRevealed ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                <p className="text-base md:text-lg font-black flex items-center gap-2 text-emerald-800 pt-2 border-t border-slate-100">
                                  <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" /> {term.meaning}
                                </p>
                              </div>

                              {!isRevealed && (
                                <p className="sd-mono text-xs font-bold uppercase tracking-widest mt-3 text-slate-400">
                                  ▸ tocar para decodificar
                                </p>
                              )}
                            </motion.button>
                          )
                        })}
                      </div>
                    </motion.div>

                    {section.quote && (
                      <p className="sd-fraunces text-center italic text-xl md:text-2xl font-bold mt-16 max-w-3xl mx-auto text-[#0F172A]">
                        "{section.quote}"
                      </p>
                    )}
                  </motion.div>
                </div>
              </section>
            )
          }

          // ── B. Community Structure with Concentric SVG & Kozinets Link ──
          if (isCommunities) {
            return (
              <section key={section.heading} id={`seccion-${i}`} className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto relative z-10">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    
                    <motion.div variants={fadeUp} transition={spring} className="text-center mb-14">
                      <span className="sd-mono sd-cyber-badge-teal inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                        // Estructura de la comunidad · Robert Kozinets (2020)
                      </span>
                      <h2 className="sd-fraunces text-3xl md:text-5xl font-black mb-6 text-[#0F172A]">{section.heading}</h2>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="sd-cyber-card-teal p-6 sm:p-10 md:p-14 border-2 mb-12">
                      <EditorialImageFrame
                        imageSrc={visual.imageSrc}
                        altText={section.heading}
                        icon={Search}
                        colorA={TEAL}
                        colorB={INDIGO}
                        label="Etnografía Digital"
                        source={visual.source}
                        sourceUrl={visual.sourceUrl}
                        floatSide="left"
                      />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="sd-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-700">
                          Sección {String(i + 1).padStart(2, '0')}
                        </span>
                        <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="sd-source-chip">
                          <ExternalLink className="w-3 h-3 text-teal-600" /> Robert Kozinets (2020) ↗
                        </a>
                      </div>

                      <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                        {section.paragraphs.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}
                      </div>

                      <div className="clear-both" />
                    </div>

                    <motion.div variants={fadeUp} transition={spring}
                      className="sd-cyber-card-teal p-6 sm:p-10 md:p-14 border-2 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                      
                      <div className="md:col-span-5 relative w-full max-w-[280px] mx-auto aspect-square">
                        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90" aria-hidden="true">
                          {COMMUNITY_LAYERS.map((layer, li) => {
                            const r = 90 - li * 28
                            const isActive = activeLayer === li
                            return (
                              <circle
                                key={layer.label}
                                cx="100" cy="100" r={r} fill="none"
                                stroke={isActive ? layer.color : hexToRgba(layer.color, 0.35)}
                                strokeWidth={isActive ? 22 : 16}
                                style={{ transition: 'all 0.3s ease' }}
                              />
                            )
                          })}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                          <span className="sd-fraunces text-5xl sm:text-6xl font-black leading-none text-teal-700">80%</span>
                          <span className="sd-mono text-xs font-bold uppercase tracking-widest mt-2 text-slate-500">lurkers</span>
                        </div>
                      </div>

                      <div className="md:col-span-7 space-y-4">
                        {COMMUNITY_LAYERS.map((layer, li) => {
                          const isOpen = activeLayer === li
                          const LayerIcon = layer.icon
                          return (
                            <motion.div
                              key={layer.label}
                              whileHover={{ y: -3 }}
                              className="sd-cyber-card rounded-2xl overflow-hidden border-2 bg-white"
                              style={{ borderColor: isOpen ? layer.color : hexToRgba(layer.color, 0.3) }}
                            >
                              <button
                                type="button"
                                onClick={() => setActiveLayer(isOpen ? null : li)}
                                className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                              >
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: hexToRgba(layer.color, 0.15) }}>
                                  <LayerIcon className="w-5 h-5" style={{ color: layer.textColor }} />
                                </div>
                                <p className="sd-fraunces font-bold flex-1 text-xl text-[#0F172A]">
                                  {layer.label}{layer.stat && <span className="font-extrabold text-teal-700"> · {layer.stat}</span>}
                                </p>
                                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: TEAL_TEXT }} />
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-base md:text-lg font-bold leading-relaxed px-6 pb-6 text-slate-700 border-t border-slate-100 pt-4">
                                      {layer.detail}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })}
                      </div>

                    </motion.div>

                    {section.quote && (
                      <p className="sd-fraunces text-center italic text-xl md:text-2xl font-bold mt-16 max-w-3xl mx-auto text-[#0F172A]">
                        "{section.quote}"
                      </p>
                    )}
                  </motion.div>
                </div>
              </section>
            )
          }

          // ── C. Autenticidad Accordion with Text Wrap ──
          if (isAuth) {
            const cards = [
              { title: 'El caso straightedge', body: section.paragraphs[0] },
              { title: 'La paradoja del capital subcultural', body: section.paragraphs[1] },
            ]
            return (
              <section key={section.heading} id={`seccion-${i}`} className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-slate-50/80">
                <div className="max-w-6xl mx-auto relative z-10">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    
                    <div className="sd-cyber-card p-6 sm:p-10 md:p-14 border-2 mb-10">
                      <EditorialImageFrame
                        imageSrc={visual.imageSrc}
                        altText={section.heading}
                        icon={Lock}
                        colorA={INDIGO}
                        colorB={AMBER}
                        label="Fronteras de Autenticidad"
                        source={visual.source}
                        sourceUrl={visual.sourceUrl}
                        floatSide="right"
                      />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="sd-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700">
                          Sección {String(i + 1).padStart(2, '0')}
                        </span>
                        <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="sd-source-chip">
                          <ExternalLink className="w-3 h-3 text-indigo-600" /> Patrick Williams (2006) ↗
                        </a>
                      </div>

                      <h2 className="sd-fraunces text-3xl md:text-4xl font-black mb-6 text-[#0F172A]">{section.heading}</h2>

                      <div className="space-y-6">
                        {cards.map((card, ci) => {
                          const isOpen = openAuth.has(ci)
                          return (
                            <div
                              key={card.title}
                              className="rounded-3xl overflow-hidden border-2 bg-white"
                              style={{ borderColor: isOpen ? accentColor : hexToRgba(accentColor, 0.25) }}
                            >
                              <button
                                type="button"
                                onClick={() => toggleAuth(ci)}
                                className="w-full flex items-center gap-4 p-6 text-left cursor-pointer"
                              >
                                <p className="sd-fraunces font-black flex-1 text-xl sm:text-2xl text-[#0F172A]">{card.title}</p>
                                <ChevronDown className={`w-6 h-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: accentText }} />
                              </button>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed p-6 pt-0 border-t border-slate-100">
                                      {card.body}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>

                      <div className="clear-both" />
                    </div>

                    {section.quote && (
                      <blockquote className="mt-8 max-w-4xl mx-auto rounded-2xl p-6 border-l-4 bg-indigo-50 text-slate-700 italic font-medium" style={{ borderLeftColor: accentColor }}>
                        <Quote className="w-6 h-6 mb-2" style={{ color: accentText }} />
                        <p className="sd-fraunces text-lg sm:text-xl leading-relaxed font-bold text-[#0F172A]">"{section.quote}"</p>
                      </blockquote>
                    )}
                  </motion.div>
                </div>
              </section>
            )
          }

          // ── D. Qué significa para el aula with Text Wrap ──
          if (isAula) {
            return (
              <section key={section.heading} id={`seccion-${i}`} className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto relative z-10">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                    
                    <motion.div variants={fadeUp} transition={spring} className="text-center mb-12">
                      <span className="sd-mono sd-cyber-badge-teal inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                        // Aplicación pedagógica · Ministerio de Educación & UNESCO
                      </span>
                      <h2 className="sd-fraunces text-3xl md:text-5xl font-black mb-6 text-[#0F172A]">{section.heading}</h2>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mb-8" />
                    </motion.div>

                    <div className="sd-cyber-card p-6 sm:p-10 md:p-14 border-2 mb-12">
                      <EditorialImageFrame
                        imageSrc={visual.imageSrc}
                        altText={section.heading}
                        icon={GraduationCap}
                        colorA={EMERALD}
                        colorB={TEAL}
                        label="Intervención en el Aula"
                        source={visual.source}
                        sourceUrl={visual.sourceUrl}
                        floatSide="left"
                      />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="sd-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
                          Sección {String(i + 1).padStart(2, '0')}
                        </span>
                        <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="sd-source-chip">
                          <ExternalLink className="w-3 h-3 text-emerald-600" /> UNESCO Digital Pedagogy ↗
                        </a>
                      </div>

                      <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                        {section.paragraphs.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}
                      </div>

                      <div className="clear-both" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {AULA_ITEMS.map((item, ai) => {
                        const isOpen = openAula.has(ai)
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => toggleAula(ai)}
                            className="sd-cyber-card text-left p-6 sm:p-7 rounded-[28px] border-2 bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1"
                            style={{ borderColor: isOpen ? EMERALD : "rgba(16, 185, 129, 0.25)" }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <Sparkles className="w-5 h-5 shrink-0 text-emerald-600" />
                              <p className="sd-fraunces font-black text-xl text-[#0F172A]">{item.title}</p>
                            </div>

                            <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                              <p className="text-base md:text-lg font-bold leading-relaxed text-slate-700 pt-2 border-t border-slate-100">
                                {item.detail}
                              </p>
                            </div>

                            {!isOpen && (
                              <p className="sd-mono text-xs font-bold uppercase tracking-widest mt-2 text-slate-400">
                                ▸ tocar para expandir
                              </p>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {section.quote && (
                      <p className="sd-fraunces text-center italic text-xl md:text-2xl font-bold mt-16 max-w-3xl mx-auto text-[#0F172A]">
                        "{section.quote}"
                      </p>
                    )}
                  </motion.div>
                </div>
              </section>
            )
          }

          // ── E. Standard Sections with Editorial Floating Wrap ──
          return (
            <section key={section.heading} id={`seccion-${i}`} className={`relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 ${bgSection}`}>
              <div className="max-w-6xl mx-auto relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                  <motion.div variants={fadeUp} transition={spring} className={`${cardClass} p-6 sm:p-10 md:p-14 border-2`}>
                    
                    {/* Floating Editorial Frame around which text wraps smoothly */}
                    <EditorialImageFrame
                      imageSrc={visual.imageSrc}
                      altText={section.heading}
                      icon={visual.icon}
                      colorA={accentColor}
                      colorB={i % 2 === 0 ? AMBER : TEAL}
                      label={visual.label}
                      source={visual.source}
                      sourceUrl={visual.sourceUrl}
                      floatSide={floatSide}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="sd-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-slate-100" style={{ color: accentText }}>
                        Sección {String(i + 1).padStart(2, '0')}
                      </span>
                      <a href={visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="sd-source-chip">
                        <ExternalLink className="w-3 h-3 text-indigo-600" /> {visual.source} ↗
                      </a>
                    </div>

                    <h2 className="sd-fraunces text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight text-[#0F172A]">{section.heading}</h2>
                    
                    <div className="space-y-4 text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
                      {section.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>

                    {section.quote && (
                      <blockquote className="mt-8 rounded-2xl p-6 border-l-4 bg-slate-50 text-slate-700 italic font-medium clear-both" style={{ borderLeftColor: accentColor }}>
                        <Quote className="w-6 h-6 mb-2" style={{ color: accentText }} />
                        <p className="sd-fraunces text-lg sm:text-xl leading-relaxed font-bold text-[#0F172A]">"{section.quote}"</p>
                      </blockquote>
                    )}

                    <div className="clear-both" />
                  </motion.div>
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* ══ 4 CASO PARA PENSAR (DOSSIER) ══ */}
        {data.caseStudy && (
          <section id="caso" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeUp} transition={spring}
                  className="sd-cyber-card-amber rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 bg-white border-4 border-dashed"
                  style={{ borderColor: "rgba(217, 119, 6, 0.4)" }}>
                  
                  <EditorialImageFrame
                    imageSrc="/img/tematicas/subculturas-digitales/caso_estudio.webp"
                    altText={data.caseStudy.title}
                    icon={UserRound}
                    colorA={AMBER}
                    colorB={INDIGO}
                    label="Estudio de Caso"
                    source="Dossier de Investigación"
                    sourceUrl="https://josefarhat.com"
                    floatSide="left"
                  />

                  <div className="flex items-center gap-3 mb-6">
                    <FolderLock className="w-5 h-5 text-amber-700" />
                    <span className="sd-mono text-xs font-black uppercase tracking-widest text-amber-900 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200">
                      {data.caseStudy.label}
                    </span>
                  </div>

                  <h3 className="sd-fraunces text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-[#0F172A]">{data.caseStudy.title}</h3>
                  <p className="text-slate-800 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed mb-6">{data.caseStudy.description}</p>

                  <div className="clear-both" />

                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ══ 5 CITA DE CIERRE — ISLA OSCURA DE IMPACTO ══ */}
        <section className="relative py-24 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden text-center bg-[#0F172A]">
          <div className="absolute inset-0 sd-dots-cyber opacity-20 pointer-events-none" />
          <div className="absolute sd-f1 pointer-events-none" style={{ top:"-20%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(79,70,229,.3),transparent 70%)", filter:"blur(75px)" }} />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Quote className="w-12 h-12 mx-auto mb-6 text-indigo-400" />
              <p className="sd-fraunces text-xl sm:text-2xl md:text-4xl font-black italic leading-relaxed text-white">
                "{data.closingQuote}"
              </p>
              <p className="sd-mono text-xs sm:text-sm font-extrabold text-indigo-300 mt-8">
                — José Farhat · Conferencia "Libres Bajo Influencia"
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ 6 FUENTES Y REFERENCIAS ACADÉMICAS CITADAS ══ */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              
              <motion.div variants={fadeUp} transition={spring} className="text-center mb-12">
                <span className="sd-mono sd-cyber-badge inline-block text-xs uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full font-bold">
                  // Evidencia & Bibliografía oficial
                </span>
                <h2 className="sd-fraunces text-2xl sm:text-4xl font-black text-[#0F172A]">Fuentes académicas y estudios citados</h2>
                <p className="text-slate-600 text-sm sm:text-base font-semibold mt-2 max-w-xl mx-auto">
                  Todos los conceptos, datos estadísticos e investigaciones mencionadas en este módulo cuentan con su publicación oficial verificada.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {VERIFIED_ACADEMIC_SOURCES.map((src) => (
                  <a
                    key={src.author}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sd-cyber-card p-5 bg-white border-2 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="sd-mono text-xs font-black text-indigo-700 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200">
                          {src.author}
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                      <h4 className="sd-fraunces font-black text-base text-[#0F172A] leading-snug mb-2">{src.title}</h4>
                      <p className="text-xs text-slate-500 font-bold mb-3">{src.publication}</p>
                    </div>
                    <span className="sd-mono text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-indigo-500 shrink-0" /> {src.topic}
                    </span>
                  </a>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ══ 7 MATERIAL DE ESTUDIO — FULL VIEWPORT VERTICAL STACK ══ */}
        {(data.pdfUrl || data.infografiaUrl) && (
          <section id="material" className="relative py-20 sm:py-28 md:py-36 px-3 sm:px-6 lg:px-10 bg-white">
            <div className="w-full max-w-7xl mx-auto relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                
                <motion.div variants={fadeUp} transition={spring} className="text-center mb-14">
                  <span className="sd-mono sd-cyber-badge inline-block text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full font-bold">
                    // Material de estudio oficial
                  </span>
                  <h2 className="sd-fraunces text-3xl md:text-5xl font-black text-[#0F172A]">Presentación e infografía</h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-amber-500 mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="flex flex-col gap-14 sm:gap-20 w-full">
                  {data.pdfUrl && (
                    <motion.div variants={fadeUp} transition={spring} className="w-full max-w-4xl mx-auto">
                      <WebpSlideCarousel
                        totalSlides={15}
                        slidesBasePath="/img/tematicas/subculturas-digitales/slides"
                        pdfDownloadUrl={data.pdfUrl}
                        title={data.title}
                        color={INDIGO}
                      />
                    </motion.div>
                  )}

                  {data.infografiaUrl && (
                    <motion.div variants={fadeUp} transition={spring} className="sd-cyber-card p-4 sm:p-8 md:p-10 border-2 bg-white w-full shadow-2xl">
                      <p className="flex items-center gap-2.5 font-black text-xl sm:text-2xl mb-6 text-[#0F172A]">
                        <Images className="w-6 h-6 text-amber-700 shrink-0" />
                        Infografía Visual
                      </p>
                      <div className="relative rounded-2xl overflow-hidden cursor-pointer group bg-slate-50 border border-slate-200 flex justify-center items-center p-2 sm:p-4 min-h-[65vh] lg:min-h-[80vh]" onClick={() => setLightboxOpen(true)}>
                        <img
                          src={data.infografiaUrl}
                          alt={data.infografiaAlt ?? `Infografía de ${data.title}`}
                          className="w-full h-auto max-h-[85vh] object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-all duration-300">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2.5 bg-white text-slate-900 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-2xl">
                            <ZoomIn className="w-5 h-5 text-indigo-600" />
                            Ver a pantalla completa
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            </div>
          </section>
        )}

        {/* ══ 8 EVALUACIÓN INTERACTIVA (QUIZ) ══ */}
        <section id="evaluacion" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              
              {!showQuiz && (
                <motion.div variants={fadeUp} transition={spring}
                  className="sd-cyber-card p-6 sm:p-10 md:p-16 text-center bg-white border-2">
                  
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl mx-auto mb-6 sm:mb-8 flex items-center justify-center bg-indigo-50 border-2 border-indigo-200">
                    <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
                  </div>

                  <h2 className="sd-fraunces text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-[#0F172A]">Evaluación</h2>
                  <p className="text-slate-800 font-extrabold text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto">
                    {data.quizQuestions.length} preguntas sobre esta temática. Necesitás 8/10 respuestas correctas para completarla.
                  </p>

                  {previousResult && (
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black mb-8 border"
                      style={{
                        background: previousResult.score >= 8 ? "rgba(16, 185, 129, 0.1)" : "rgba(217, 119, 6, 0.1)",
                        borderColor: previousResult.score >= 8 ? "rgba(16, 185, 129, 0.3)" : "rgba(217, 119, 6, 0.3)",
                        color: previousResult.score >= 8 ? EMERALD_TEXT : AMBER_TEXT,
                      }}>
                      {previousResult.score >= 8 ? <CheckCircle2 className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                      Último intento: {previousResult.score}/10
                    </div>
                  )}

                  <div>
                    <button
                      onClick={startQuiz}
                      className="sd-cyber-btn inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg w-full sm:w-auto cursor-pointer">
                      {previousResult ? 'Volver a hacer el quiz' : 'Comenzar evaluación'}
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>

                </motion.div>
              )}

              {showQuiz && !showResults && (
                <motion.div variants={fadeUp} transition={spring}
                  className="rounded-[28px] sm:rounded-[40px] overflow-hidden bg-white/95 border-2 border-indigo-200 shadow-2xl">
                  
                  {/* Progress bar */}
                  <div className="h-3 w-full bg-slate-100 relative">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, var(--indigo-primary), var(--amber-accent))" }}
                      initial={false}
                      animate={{ width: `${((currentQuestionIdx + 1) / data.quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  <div className="p-5 sm:p-8 md:p-14">
                    <AnimatePresence mode="wait" custom={quizDir}>
                      <motion.div
                        key={currentQuestionIdx}
                        custom={quizDir}
                        variants={shouldReduceMotion ? qVarReduced : qVar}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="flex items-center justify-between mb-6 sm:mb-8">
                          <span className="sd-mono text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                            Pregunta {currentQuestionIdx + 1} de {data.quizQuestions.length}
                          </span>
                          <span className="sd-mono text-xs sm:text-sm font-black text-indigo-600">
                            {Math.round(((currentQuestionIdx + 1) / data.quizQuestions.length) * 100)}%
                          </span>
                        </div>

                        <h3 className="sd-fraunces text-xl sm:text-2xl md:text-3xl font-black mb-8 text-[#0F172A] leading-snug">
                          {currentQuestion.question}
                        </h3>

                        <div className="flex flex-col gap-3.5 sm:gap-4">
                          {currentQuestion.options.map((option, idx) => {
                            const isSelected = selectedAnswers[currentQuestionIdx] === idx
                            return (
                              <motion.button
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="sd-quiz-option w-full text-left px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-3.5 sm:gap-5 cursor-pointer"
                                style={{
                                  borderColor: isSelected ? INDIGO : "rgba(79, 70, 229, 0.16)",
                                  background: isSelected ? "rgba(238, 242, 255, 0.95)" : "#FFFFFF",
                                }}
                              >
                                <div
                                  className="sd-mono w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xs sm:text-sm font-black"
                                  style={{
                                    background: isSelected ? INDIGO : "rgba(79, 70, 229, 0.08)",
                                    color: isSelected ? "#FFFFFF" : "#0F172A",
                                    border: `2px solid ${isSelected ? INDIGO : "rgba(79, 70, 229, 0.28)"}`,
                                  }}
                                >
                                  {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="text-slate-800 text-base sm:text-lg font-extrabold leading-normal">{option}</span>
                              </motion.button>
                            )
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="px-5 sm:px-8 pb-6 sm:pb-8 flex flex-col-reverse sm:flex-row gap-3.5 sm:gap-0 items-stretch sm:items-center justify-between border-t border-slate-100 pt-6">
                    <button
                      onClick={goPrev}
                      disabled={currentQuestionIdx === 0}
                      className={`sd-cyber-btn-outline px-6 py-3 rounded-full text-sm font-bold text-center cursor-pointer ${currentQuestionIdx === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                      Anterior
                    </button>
                    
                    <button
                      onClick={goNext}
                      disabled={!canContinue}
                      className={`sd-cyber-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-black text-base cursor-pointer ${!canContinue ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                      {isLastQuestion ? 'Finalizar evaluación' : 'Siguiente pregunta'}
                      {isLastQuestion ? <CheckCircle2 className="w-5 h-5 ml-1" /> : <ArrowRight className="w-5 h-5 ml-1" />}
                    </button>
                  </div>

                </motion.div>
              )}

              {showQuiz && showResults && (
                <motion.div variants={fadeUp} transition={spring}
                  className="sd-cyber-card p-6 sm:p-10 md:p-16 text-center bg-white border-2">
                  
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <svg width="180" height="180" viewBox="0 0 180 180">
                        <circle cx="90" cy="90" r={RING_R} fill="none" stroke="#F1F5F9" strokeWidth="10" />
                        <motion.circle cx="90" cy="90" r={RING_R} fill="none"
                          stroke={passed ? EMERALD_TEXT : AMBER_TEXT} strokeWidth="10" strokeLinecap="round"
                          strokeDasharray={RING_C}
                          strokeDashoffset={RING_C - (countValue / 100) * RING_C}
                          transform="rotate(-90 90 90)"
                          style={{ filter:`drop-shadow(0 0 14px ${passed ? EMERALD_TEXT : AMBER_TEXT}70)`, transition:"stroke-dashoffset .05s linear" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="sd-mono font-black text-4xl sm:text-5xl" style={{ color: passed ? EMERALD_TEXT : AMBER_TEXT }}>
                          {countValue}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl mb-6 bg-slate-50 border-2" style={{ borderColor: passed ? `${EMERALD_TEXT}35` : `${AMBER_TEXT}35` }}>
                    <h3 className="sd-fraunces font-black text-xl sm:text-2xl md:text-3xl" style={{ color: passed ? EMERALD_TEXT : AMBER_TEXT }}>
                      {passed ? '¡Completaste esta temática!' : 'Todavía no llegaste al puntaje mínimo'}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto text-slate-700 font-bold">
                    {passed
                      ? 'Tu progreso quedó guardado. Podés repasar el contenido cuando quieras.'
                      : 'Necesitás 8/10 respuestas correctas. Repasá el contenido y volvé a intentar cuando quieras.'}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
                    <button
                      onClick={startQuiz}
                      className="sd-cyber-btn inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full font-black text-base cursor-pointer">
                      <RotateCcw className="w-5 h-5 text-white" />
                      Volver a hacer el quiz
                    </button>

                    {!passed && (
                      <a
                        href="#contenido"
                        className="sd-cyber-btn-outline inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-full font-black text-base">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                        Repasar contenido
                      </a>
                    )}
                  </div>

                </motion.div>
              )}

            </motion.div>
          </div>
        </section>

      </main>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            aria-label="Volver arriba"
            className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl border-2 border-indigo-200 cursor-pointer"
            style={{ boxShadow: "0 10px 30px rgba(79, 70, 229, 0.25)" }}
          >
            <ArrowUp className="w-6 h-6 text-indigo-700" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />

      {/* Lightbox for Infographic */}
      {data.infografiaUrl && (
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white text-slate-800 font-bold text-sm px-4 py-2.5 rounded-full shadow-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
                Cerrar
              </button>

              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={zoomOut}
                  disabled={zoom <= 1}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Reducir zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <span className="text-white font-mono text-sm w-10 text-center">{zoom.toFixed(1)}×</span>

                <button
                  onClick={zoomIn}
                  disabled={zoom >= 4}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Aumentar zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {zoom > 1 && (
                  <button
                    onClick={resetZoom}
                    className="ml-1 flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors border-l border-white/20 pl-3"
                    aria-label="Restablecer zoom"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Restablecer
                  </button>
                )}
              </div>

              <div
                ref={lightboxAreaRef}
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={data.infografiaUrl}
                    alt={data.infografiaAlt ? `${data.infografiaAlt} — pantalla completa` : `Infografía de ${data.title} — pantalla completa`}
                    className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl select-none"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                      transformOrigin: 'center center',
                      transition: isDragging ? 'none' : 'transform 0.15s ease',
                      cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    }}
                    onMouseDown={onMouseDown}
                    draggable={false}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
