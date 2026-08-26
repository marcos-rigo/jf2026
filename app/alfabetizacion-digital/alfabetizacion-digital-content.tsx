'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/alfabetizacion-digital/toc-nav';
import { SourceCite } from '@/components/alfabetizacion-digital/source-cite';
import {
  BookOpen,
  Brain,
  Shield,
  Sparkles,
  Cpu,
  History,
  Compass,
  Layers,
  GitMerge,
  Network,
  Zap,
  ShieldCheck,
  Filter,
  RefreshCw,
  Globe,
  MapPin,
  BarChart3,
  Bot,
  Terminal,
  FolderTree,
  Code2,
  TrendingUp,
  DollarSign,
  Vote,
  AlertTriangle,
  EyeOff,
  Users,
  AlertOctagon,
  GraduationCap,
  HeartHandshake,
  BookMarked,
  CheckSquare,
  ExternalLink,
  FileText,
  CheckCircle2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import {
  CONCEPTO_QUOTE,
  GILSTER_QUOTE,
  SPIRES_BARTLETT_QUOTE,
  MARTIN_GRUDZIECKI_QUOTE,
  ESHET_ALKALAI_SOURCE,
  NG_SOURCE,
  DIMENSIONES,
  NIVELES_BRECHA,
  DIGCOMP_AREAS,
  DIGCOMP_SOURCE,
  DIGCOMPALC_QUOTE,
  INDICE_CIUDADANIA_DIGITAL,
  EJEMPLOS,
  PIB_QUOTE,
  MERCADO_LABORAL_QUOTE,
  RIESGOS,
  AULA_PUNTOS,
  CASOS_EXITO,
  CASOS_EXITO_SOURCE,
  FUENTES_COMPLETAS,
} from '@/lib/alfabetizacion-digital-content';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress, checklistProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const statsData = [
  { value: '54%', label: 'dispone de habilidades básicas completas', icon: CheckCircle2, gradient: 'from-sky-500 to-blue-600', sub: '5% carece de todo' },
  { value: '19%', label: 'alcanza nivel de uso intermedio', icon: Bot, gradient: 'from-blue-600 to-indigo-600', sub: 'solución autónoma y IA' },
  { value: '7%', label: 'domina habilidades avanzadas', icon: Code2, gradient: 'from-purple-600 to-indigo-600', sub: '47.1% carece totalmente' },
  { value: '+1.9%', label: 'PIB per cápita por +10% banda ancha', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600', sub: 'impacto econométrico' },
  { value: '80%', label: 'empleos middle-skill exigen competencias', icon: DollarSign, gradient: 'from-amber-500 to-rose-500', sub: 'escudo salarial ante IA' },
];

export const CHECKLIST_ITEMS = [
  { id: 'check-wifi', text: 'Sé configurar redes WiFi seguras y administrar permisos de almacenamiento y privacidad en mis dispositivos.' },
  { id: 'check-eval', text: 'Aplico criterios de evaluación informacional para verificar fuentes, fecha e intención de los contenidos web.' },
  { id: 'check-prompt', text: 'Diseño prompts estructurados con rol, contexto e instrucciones precisas para interactuar con herramientas de IA.' },
  { id: 'check-egob', text: 'Uso de forma autónoma plataformas de gobierno electrónico, firmas digitales y servicios públicos en línea.' },
  { id: 'check-etiqueta', text: 'Practico normas de netiqueta, respeto la propiedad intelectual y protejo mi huella socioemocional en comunidades virtuales.' },
];

export default function AlfabetizacionDigitalContent() {
  const userId = useAppStore((s) => s.user?.id ?? null);
  const progress = useTematicaProgress({
    tematicaId: 'alfabetizacion-digital',
    userId,
    computeProgress: checklistProgress('checklist', CHECKLIST_ITEMS.length),
  });
  const checkedItems = new Set(
    Array.isArray(progress.detalle.checklist) ? (progress.detalle.checklist as string[]) : []
  );

  const handleCheckboxChange = (id: string, checked: boolean) => {
    progress.toggleChecklistItem('checklist', id);
  };

  // Lightbox Modal para imágenes generadas
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const openImageModal = (src: string, title: string) => {
    setModalImage({ src, title });
    setZoomLevel(1);
  };

  const closeImageModal = () => {
    setModalImage(null);
    setZoomLevel(1);
  };

  // Selector interactivo de nivel de ejemplos
  const [activeLevel, setActiveLevel] = useState<'basico' | 'intermedio' | 'avanzado'>('intermedio');

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row relative text-slate-200 bg-[#001228] selection:bg-sky-500 selection:text-white">
        {/* Fondo Neón Tecnológico 2026 */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(0,18,40,0))] pointer-events-none z-0" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0" />

        <TocNav />

        {/* Contenido Principal Continuo */}
        <main className="flex-1 min-w-0 overflow-x-hidden p-6 md:pt-24 md:px-12 md:pb-20 max-w-6xl mx-auto w-full relative z-10 space-y-20 md:space-y-28">
          
          {/* ── 00. HERO SECTION ──────────────────────────────────────────────── */}
          <section id="hero" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
            {/* Badge & Title Header */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-purple-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wide shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>MÓDULO FORMATIVO & LANDING ESTRATÉGICA 2026</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display">
                Alfabetización Digital:{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(14,165,233,0.3)]">
                  Del Acceso Técnico al Andamiaje Cognitivo
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 max-w-4xl font-sans leading-relaxed font-normal">
                Más allá del simple manejo operativo de dispositivos: una capacidad holística e integral para procesar información con criterio, interactuar éticamente en la red y ejercer una ciudadanía activa e informada en la era de la IA.
              </motion.p>
            </motion.div>

            {/* Key Stats Metric Banner */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-3.5 pt-2">
              {statsData.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 backdrop-blur-xl transition-all duration-300 shadow-xl group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[0.65rem] font-mono text-sky-400 font-bold">{stat.sub}</span>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-black text-white font-mono tracking-tight group-hover:text-sky-300 transition-colors">
                        {stat.value}
                      </div>
                      <p className="text-[0.7rem] text-slate-400 leading-tight mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Generated Feature Image Showcase with Lightbox Modal */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl overflow-hidden border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)] group">
              <div className="relative aspect-video w-full bg-slate-950">
                <Image
                  src="/img/alfabetizacion/hero_alfabetizacion.jpg"
                  alt="Alfabetización Digital e Inteligencia Colectiva 2026"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001228] via-[#001228]/40 to-transparent" />
                <button
                  onClick={() => openImageModal('/img/alfabetizacion/hero_alfabetizacion.jpg', 'Alfabetización Digital & Andamiaje Cognitivo')}
                  className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/80 border border-sky-500/40 text-sky-300 hover:bg-sky-500 hover:text-white backdrop-blur-md transition-all shadow-lg group-hover:scale-110"
                  title="Ampliar Ilustración 3D"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    <span>Constructo Holístico e Integración Cognitiva</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    La alfabetización digital articula tres dimensiones indisolubles: <strong className="text-white">Técnica</strong> (operación), <strong className="text-white">Cognitiva</strong> (evaluación hipertextual y crítica) y <strong className="text-white">Socioemocional</strong> (ética y resguardo en red).
                  </p>
                  <div className="pt-2">
                    <SourceCite source={CONCEPTO_QUOTE.source} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tríada de Pilares Integrales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-xl space-y-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Dimensión Técnica</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Manejo instrumental de hardware, software, redes, conectividad y herramientas avanzadas de automatización e IA.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-xl space-y-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Dimensión Cognitiva</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Pensamiento crítico, filtrado de infoxicación, procesamiento en tiempo real y navegación en arquitecturas no lineales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl space-y-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Dimensión Socioemocional</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Responsabilidad ética, convivencia pacífica en comunidades virtuales, resguardo de la huella digital y netiqueta.
                </p>
              </div>
            </div>
          </section>

          {/* ── 01. GENEALOGÍA CONCEPTUAL ──────────────────────────────────────── */}
          <section id="historia" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <History className="w-4 h-4 text-sky-400" />
                <span>01 · Genealogía Conceptual y Marcos Teóricos</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Evolución del Concepto: De la Destreza Operativa a la Transformación Crítica
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                La alfabetización digital ha dejado de ser vista como una mera capacitación técnica en software para consolidarse como una matriz cognitiva y cultural indispensable para la resiliencia socioeconómica.
              </p>
            </div>

            {/* Tarjeta Pionera Paul Gilster */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-sky-500/30 backdrop-blur-xl space-y-4 hover:border-sky-500/50 transition-all shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shadow-sky-500/20">
                    1997
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Paul Gilster — El Origen del Término</h3>
                    <p className="text-xs text-sky-400 font-mono">Digital Literacy (Wiley)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans">
                Gilster formuló la primera definición académica amplia: no la habilidad de presionar botones, sino la <strong className="text-white">capacidad de comprender y usar información proveniente de múltiples fuentes cuando se presenta a través de computadoras</strong>. Destacó cuatro competencias clave: evaluación crítica del contenido, navegación no lineal, búsqueda estructurada e integración informacional.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <p className="text-xs italic text-slate-300 leading-relaxed">&ldquo;{GILSTER_QUOTE.text}&rdquo;</p>
                <SourceCite source={GILSTER_QUOTE.source} />
              </div>
            </div>

            {/* Grid de Modelos Contemporáneos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all space-y-4 flex flex-col justify-between backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sky-400">
                    <Compass className="w-5 h-5 text-sky-400" />
                    <h3 className="text-base font-bold text-white font-display">Yoram Eshet-Alkalai (2012)</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Diseño cognitivo de 5 alfabetizaciones interconectadas: <strong className="text-white">socioemocional</strong>, <strong className="text-white">pensamiento ramificado</strong>, <strong className="text-white">pensamiento en tiempo real</strong>, <strong className="text-white">informacional</strong> y <strong className="text-white">fotovisual/reproducción</strong>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <SourceCite source={ESHET_ALKALAI_SOURCE} />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all space-y-4 flex flex-col justify-between backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Layers className="w-5 h-5 text-blue-400" />
                    <h3 className="text-base font-bold text-white font-display">Ng, W. (2012) — Modelo Holístico</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Convergencia equilibrada de la <strong className="text-white">dimensión técnica</strong> (destreza instrumental), <strong className="text-white">dimensión cognitiva</strong> (evaluación e información) y <strong className="text-white">dimensión socioemocional</strong> (comunicación ética).
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <SourceCite source={NG_SOURCE} />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all space-y-4 flex flex-col justify-between backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <GitMerge className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-base font-bold text-white font-display">Spires & Bartlett (2012)</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Proceso operativo en tres momentos continuos: <strong className="text-white">acceso efectivo</strong>, <strong className="text-white">producción estructurada</strong> e <strong className="text-white">intercambio responsable</strong>.
                  </p>
                  <p className="text-xs italic text-slate-400">&ldquo;{SPIRES_BARTLETT_QUOTE.text}&rdquo;</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <SourceCite source={SPIRES_BARTLETT_QUOTE.source} />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all space-y-4 flex flex-col justify-between backdrop-blur-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base font-bold text-white font-display">Martin & Grudziecki (2013)</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pirámide de desarrollo: <strong className="text-white">1. Alfabetización instrumental</strong>, <strong className="text-white">2. Uso digital aplicado</strong>, y <strong className="text-white">3. Transformación digital crítica</strong>.
                  </p>
                  <p className="text-xs italic text-slate-400">&ldquo;{MARTIN_GRUDZIECKI_QUOTE.text}&rdquo;</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <SourceCite source={MARTIN_GRUDZIECKI_QUOTE.source} />
                </div>
              </div>
            </div>
          </section>

          {/* ── 02. DIMENSIONES CRÍTICAS ───────────────────────────────────────── */}
          <section id="caracteristicas" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <Network className="w-4 h-4 text-sky-400" />
                <span>02 · Características y Dimensiones Críticas</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Las 5 Dimensiones Cognitivas del Usuario Competente
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                Basadas en el modelo de Eshet-Alkalai, estas dimensiones operan como engranajes interconectados que permiten filtrar la saturación informativa y desenvolverse de forma autónoma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIMENSIONES.map((dim, idx) => {
                const iconsMap = [ShieldCheck, Network, Zap, Filter, RefreshCw];
                const Icon = iconsMap[idx] || Network;
                return (
                  <div
                    key={dim.titulo}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 font-bold">
                          Dimensión 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-sky-300 transition-colors">
                        {dim.titulo}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {dim.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-xs font-mono text-sky-400 gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      <span>Competencia cognitiva clave</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-sky-950/50 via-slate-900/80 to-blue-950/40 border border-sky-500/30 backdrop-blur-xl space-y-3 shadow-xl">
              <h4 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                <Lightbulb className="w-5 h-5 text-sky-400 shrink-0" /> Carácter Transversal en la Vida Cívica y Profesional
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Estas competencias no se restringen al campo académico o laboral: influyen directamente en la salud mental (resguardo frente a la sobreestimulación), en el pensamiento crítico contra los algoritmos de polarización y en el acceso pleno a derechos ciudadanos frente a la digitalización del Estado.
              </p>
            </div>
          </section>

          {/* ── 03. TIPOLOGÍAS, NIVELES Y MARCOS DE ESTANDARIZACIÓN ──────────────── */}
          <section id="tipos-variantes" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>03 · Tipologías, Niveles y Marcos de Estandarización</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Estándares Internacionales y las 3 Capas de la Brecha Digital
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                Para diseñar políticas públicas efectivas se requiere evaluar no solo quién tiene una pantalla en la mano, sino la capacidad real de transformar ese acceso en movilidad social, productividad e inclusión cívica.
              </p>
            </div>

            {/* Generated Image Showcase: DigComp Framework */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)] group">
              <div className="relative aspect-video w-full bg-slate-950">
                <Image
                  src="/img/alfabetizacion/digcomp_framework.jpg"
                  alt="DigComp 3.0 Framework y Competencias IA 2026"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001228] via-[#001228]/40 to-transparent" />
                <button
                  onClick={() => openImageModal('/img/alfabetizacion/digcomp_framework.jpg', 'DigComp 3.0 & DigCompALC CEPAL Framework')}
                  className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/80 border border-sky-500/40 text-sky-300 hover:bg-sky-500 hover:text-white backdrop-blur-md transition-all shadow-lg group-hover:scale-110"
                  title="Ampliar Infografía Framework"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Globe className="w-4 h-4 text-sky-400" />
                    <span>Estándares Globales: DigComp 3.0 & DigCompALC (CEPAL 2026)</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    Estructuras integradas para evaluar proficiencia digital desde el Nivel Prebásico (comunidades vulnerables) hasta habilidades avanzadas de Inteligencia Artificial.
                  </p>
                </div>
              </div>
            </div>

            {/* Los 3 Niveles de la Brecha Digital */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                1. Los Tres Niveles Progresivos de la Brecha Digital
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {NIVELES_BRECHA.map((item, idx) => (
                  <div
                    key={item.nivel}
                    className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-sky-500/20">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-sky-400 uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 font-bold">
                          {idx === 0 ? 'Físico' : idx === 1 ? 'Operativo' : 'Sustantivo'}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white font-display">{item.nivel}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DigComp 3.0 & DigCompALC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-sky-500/30 backdrop-blur-xl space-y-5 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Globe className="w-4 h-4 text-sky-400" />
                    <span>Estándar Global</span>
                  </div>
                  <SourceCite source={DIGCOMP_SOURCE} />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Marco Europeo DigComp 3.0 (JRC 2026)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  5 áreas competenciales principales con competencias transversales en IA (<strong className="text-white">AI-E explícitas</strong> y <strong className="text-white">AI-I implícitas</strong>) en 4 niveles de proficiencia.
                </p>

                <div className="space-y-2">
                  {DIGCOMP_AREAS.map((area, idx) => (
                    <div key={area} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">{area}</span>
                      <span className="text-[0.65rem] font-mono text-sky-400 font-bold">Área 0{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-indigo-950/40 border border-indigo-500/30 backdrop-blur-xl space-y-5 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span>CEPAL América Latina y el Caribe</span>
                  </div>
                  <SourceCite source={DIGCOMPALC_QUOTE.source} />
                </div>
                <h3 className="text-xl font-bold text-white font-display">DigCompALC (CEPAL 2026) — Dra. María Florencia Ripani</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  10 niveles granulares en 5 categorías. Reivindica el <strong className="text-amber-300">Nivel Prebásico (Niveles 1 y 2)</strong> para visibilizar comunidades rurales, adultos mayores, pueblos indígenas y migrantes.
                </p>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                  <span className="text-xs font-bold text-amber-300 block font-mono">El Valor del Nivel Prebásico</span>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{DIGCOMPALC_QUOTE.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 04. EJEMPLOS PRÁCTICOS & PROMPTING DE IA ───────────────────────── */}
          <section id="ejemplos-concretos" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>04 · Ejemplos Prácticos por Nivel & Prompting de IA</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Casos Concretos de Aplicación por Nivel de Proficiencia
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                Seleccioná cada nivel para inspeccionar los casos de uso cotidianos y las habilidades aplicadas.
              </p>
            </div>

            {/* Selector interactivo de nivel */}
            <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 w-max">
              <button
                onClick={() => setActiveLevel('basico')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm font-sans transition-all ${
                  activeLevel === 'basico'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nivel Básico
              </button>
              <button
                onClick={() => setActiveLevel('intermedio')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm font-sans transition-all ${
                  activeLevel === 'intermedio'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nivel Intermedio (IA)
              </button>
              <button
                onClick={() => setActiveLevel('avanzado')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm font-sans transition-all ${
                  activeLevel === 'avanzado'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nivel Avanzado
              </button>
            </div>

            {/* Tarjeta de Contenido Activo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-xl shadow-xl space-y-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      {activeLevel === 'basico' ? <FolderTree className="w-6 h-6" /> : activeLevel === 'intermedio' ? <Bot className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white font-display">
                        {EJEMPLOS[activeLevel].titulo}
                      </h3>
                      <p className="text-xs text-sky-400 font-mono">
                        {activeLevel === 'basico' ? 'Uso instrumental cotidiano' : activeLevel === 'intermedio' ? 'Autonomía digital y Prompt Engineering (ChatGPT, Claude, Gemini)' : 'Programación, SQL y Arquitectura de Sistemas'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EJEMPLOS[activeLevel].items.map((item) => (
                    <div key={item} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 leading-relaxed font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          {/* ── 05. VENTAJAS Y RETORNO SOCIOECONÓMICO ────────────────────────── */}
          <section id="ventajas" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <span>05 · Ventajas y Retorno Socioeconómico</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                El &ldquo;So What?&rdquo; Layer: Impacto Macroeconómico y Escudo Salarial
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                La alfabetización digital no es un beneficio colateral ni asistencialista: es un motor cuantificable de crecimiento del PIB y la mejor protección del capital humano ante la automatización algorítmica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/40 border border-emerald-500/30 backdrop-blur-xl space-y-4 hover:border-emerald-500/50 transition-all shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black font-mono text-emerald-400">+1.9% PIB</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">Impacto en Crecimiento Macroeconómico</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Por cada +10% de aumento en la penetración de banda ancha fija en las Américas, el PIB per cápita se incrementa en un <strong className="text-emerald-400">1.9%</strong>, actuando como contrapeso directo a la baja productividad regional.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <p className="text-xs italic text-slate-300">&ldquo;{PIB_QUOTE.text}&rdquo;</p>
                  <SourceCite source={PIB_QUOTE.source} />
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-sky-950/40 border border-sky-500/30 backdrop-blur-xl space-y-4 hover:border-sky-500/50 transition-all shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black font-mono text-sky-400">80% Vacantes</span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">Escudo Salarial ante la Inteligencia Artificial</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  El 80% de empleos de cualificación media (*middle-skill*) exige competencias digitales. Ante la automatización del <strong className="text-sky-300">44% de las tareas laborales</strong> en América Latina, el índice $D_i$ protege el empleo y eleva ingresos salariales.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <p className="text-xs italic text-slate-300">&ldquo;{MERCADO_LABORAL_QUOTE.text}&rdquo;</p>
                  <SourceCite source={MERCADO_LABORAL_QUOTE.source} />
                </div>
              </div>
            </div>
          </section>

          {/* ── 06. RIESGOS Y DESAFÍOS ESTRUCTURALES ──────────────────────────── */}
          <section id="riesgos" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>06 · Riesgos, Desventajas y Desafíos Estructurales</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Barreras Críticas y Falacias en la Agenda Digital
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                Garantizar conectividad o entregar dispositivos no resuelve la brecha si no existe formación en pensamiento crítico e infoxicación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RIESGOS.map((riesgo, idx) => (
                <div key={riesgo.titulo} className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 backdrop-blur-xl transition-all space-y-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-rose-400 font-bold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                      Reto 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{riesgo.titulo}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{riesgo.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 07. EL ROL EN EL AULA (DOCENTES) ────────────────────────────────── */}
          <section id="aula" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>07 · Por qué es Importante Saberlo como Docentes (El Rol en el Aula)</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                El Docente como Mediador y Andamio de la Transición Digital
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                La escuela es la institución igualadora por excelencia. La alfabetización digital docente es la condición previa para convertir el aula en un espacio de diseño crítico y ético.
              </p>
            </div>

            {/* Generated Image Showcase: Classroom & Teacher */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)] group">
              <div className="relative aspect-video w-full bg-slate-950">
                <Image
                  src="/img/alfabetizacion/aula_docente_digital.jpg"
                  alt="Mediación Docente en el Aula Digital 2026"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001228] via-[#001228]/40 to-transparent" />
                <button
                  onClick={() => openImageModal('/img/alfabetizacion/aula_docente_digital.jpg', 'Docentes como Mediadores Digitales & IA en el Aula')}
                  className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/80 border border-sky-500/40 text-sky-300 hover:bg-sky-500 hover:text-white backdrop-blur-md transition-all shadow-lg group-hover:scale-110"
                  title="Ampliar Ilustración Aula Digital"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-xl space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                    <span>Apropiación Pedagógica & Mitigación de Barreras Familiares</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    Diseño de experiencias contextualizadas para superar la falta de andamiaje en los hogares vulnerables y fomentar el uso ético de la IA.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AULA_PUNTOS.map((punto, idx) => (
                <div key={punto.titulo} className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 backdrop-blur-xl transition-all space-y-3 shadow-xl">
                  <span className="text-xs font-mono text-sky-400 font-bold">Eje Docente 0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white font-display">{punto.titulo}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{punto.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 08. REPOSITORIO DE FUENTES Y CHECKLIST INTERACTIVO ──────────────── */}
          <section id="recursos" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-sm uppercase tracking-wider">
                <BookMarked className="w-4 h-4 text-sky-400" />
                <span>08 · Caja de Herramientas, Casos de Éxito y Fuentes Oficiales</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                Repositorio Oficial de Referencias y Autoevaluación
              </h2>
              <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                Accedé a los documentos normativos de la CEPAL y la Comisión Europea, analizá las experiencias regionales destacadas y evaluá tu nivel de competencia.
              </p>
            </div>

            {/* Casos de Éxito eLAC2026 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                <Globe className="w-5 h-5 text-sky-400" />
                Políticas Públicas Destacadas en América Latina y el Mundo (eLAC2026)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CASOS_EXITO.map((caso) => (
                  <div key={caso.pais + caso.titulo} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 backdrop-blur-xl transition-all space-y-2 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-sky-400 font-bold px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30">
                        {caso.pais}
                      </span>
                      <span className="text-[0.65rem] font-mono text-slate-400">eLAC2026 Benchmark</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-display">{caso.titulo}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{caso.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuentes Oficiales con Enlaces Directos */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-sky-500/30 backdrop-blur-xl space-y-6 shadow-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Documentos de Referencia</span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-display">
                  Fuentes Oficiales y Publicaciones Relevantes
                </h3>
              </div>

              <div className="space-y-3.5">
                {FUENTES_COMPLETAS.map((fuente) => (
                  <div
                    key={fuente.n + fuente.label}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between flex-wrap gap-4 hover:border-sky-500/40 transition-all group"
                  >
                    <div className="space-y-1 max-w-3xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-sky-400 font-bold">[{fuente.n}]</span>
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                          {fuente.label}
                        </span>
                      </div>
                      {fuente.note && (
                        <p className="text-xs text-slate-400 font-mono pl-6">— {fuente.note}</p>
                      )}
                    </div>

                    {fuente.url ? (
                      <a
                        href={fuente.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 text-xs font-mono font-bold transition-all shadow-lg shadow-sky-500/20 shrink-0"
                      >
                        <span>Ver Fuente Oficial</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[0.65rem] font-mono text-slate-400 uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                        Referencia teórica
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Checklist con Barra de Progreso y Medalla */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-sky-950/40 border border-sky-500/30 backdrop-blur-xl space-y-6 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                    <CheckSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-display">
                      Checklist de Autoevaluación en Competencia Digital
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      Marcá los ítems para calcular tu progreso de alfabetización digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 px-4 py-2 rounded-2xl">
                  <span className="text-xs font-mono text-slate-400">Progreso:</span>
                  <span className="text-lg font-black text-sky-400 font-mono">{checkedItems.size} / {CHECKLIST_ITEMS.length}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 transition-all duration-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                  style={{ width: `${(checkedItems.size / CHECKLIST_ITEMS.length) * 100}%` }}
                />
              </div>

              <div className="space-y-3">
                {CHECKLIST_ITEMS.map((item) => {
                  const isChecked = checkedItems.has(item.id);
                  return (
                    <label
                      key={item.id}
                      className={`flex items-start gap-3.5 p-4.5 rounded-2xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'bg-sky-500/15 border-sky-500/50 text-white shadow-md shadow-sky-500/10'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                        className="mt-0.5 rounded border-slate-700 text-sky-500 focus:ring-sky-500/20 bg-slate-900 w-4 h-4"
                      />
                      <span className="text-xs md:text-sm font-sans leading-relaxed">{item.text}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Botón de completitud de temática */}
          <div className="pt-6 border-t border-slate-800">
            <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
          </div>

        </main>
      </div>

      {/* ── LIGHTBOX MODAL PARA IMÁGENES GENERADAS CON NANO BANANA ────────────── */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-slate-900 border border-sky-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  {modalImage.title}
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeImageModal}
                    className="p-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white"
                    title="Cerrar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center overflow-auto">
                <div style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }} className="relative w-full h-full">
                  <Image
                    src={modalImage.src}
                    alt={modalImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Ilustración 3D Generada con Nano Banana (2026 UI Tech Standard)</span>
                <span>Zoom: {Math.round(zoomLevel * 100)}%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
