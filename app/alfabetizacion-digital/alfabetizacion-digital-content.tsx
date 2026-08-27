'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TocNav } from '@/components/alfabetizacion-digital/toc-nav';
import HistoriaSection from '@/components/alfabetizacion-digital/historia-section';
import CaracteristicasSection from '@/components/alfabetizacion-digital/caracteristicas-section';
import TiposVariantesSection from '@/components/alfabetizacion-digital/tipos-variantes-section';
import EjemplosSection from '@/components/alfabetizacion-digital/ejemplos-section';
import VentajasSection from '@/components/alfabetizacion-digital/ventajas-section';
import RiesgosSection from '@/components/alfabetizacion-digital/riesgos-section';
import AulaSection from '@/components/alfabetizacion-digital/aula-section';
import RecursosSection, { CHECKLIST_ITEMS } from '@/components/alfabetizacion-digital/recursos-section';
import { InfografiaViewer } from '@/components/alfabetizacion-digital/infografia-viewer';
import {
  BookOpen,
  Brain,
  Shield,
  Sparkles,
  Cpu,
  Globe,
  GraduationCap,
  CheckCircle2,
  Bot,
  Code2,
  TrendingUp,
  DollarSign,
  LayoutDashboard,
} from 'lucide-react';
import { CONCEPTO_NOTA_DOCENTE } from '@/lib/alfabetizacion-digital-content';
import { useAppStore } from '@/lib/ciudadania/app-store';
import { useTematicaProgress, checklistProgress } from '@/lib/hooks/use-tematica-progress';
import { TematicaCompletarButton } from '@/components/tematica-completar-button';
import { BackToDashboardButton } from '@/components/tematicas/back-to-dashboard-button';

// ── Variantes de animación compartidas ──────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const revealSection = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/** Envuelve cada sección con un reveal-on-scroll consistente. */
function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={revealSection}
    >
      {children}
    </motion.div>
  );
}

// ── Contador animado para los datos más fuertes ─────────────────────────────

function useCountUp(target: number, inView: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let raf = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

interface StatDatum {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  sub: string;
  icon: React.ElementType;
  colorClass: string;
  glow: string;
}

const STATS: StatDatum[] = [
  { target: 54, suffix: '%', label: 'dispone de habilidades básicas completas', sub: '5% carece de todo', icon: CheckCircle2, colorClass: 'from-blue-600 to-brand-navy', glow: 'rgba(66,114,187,0.25)' },
  { target: 19, suffix: '%', label: 'alcanza nivel de uso intermedio', sub: 'solución autónoma y IA', icon: Bot, colorClass: 'from-blue-600 to-indigo-600', glow: 'rgba(37,99,235,0.25)' },
  { target: 7, suffix: '%', label: 'domina habilidades avanzadas', sub: '47.1% carece totalmente', icon: Code2, colorClass: 'from-indigo-600 to-violet-600', glow: 'rgba(109,40,217,0.22)' },
  { target: 3.19, decimals: 2, prefix: '+', suffix: '%', label: 'PIB por +10% de banda ancha fija', sub: 'impacto econométrico BID', icon: TrendingUp, colorClass: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.25)' },
  { target: 80, suffix: '%', label: 'empleos middle-skill exigen competencias', sub: 'escudo salarial ante IA', icon: DollarSign, colorClass: 'from-amber-500 to-rose-500', glow: 'rgba(244,63,94,0.2)' },
];

function StatCard({ stat, index }: { stat: StatDatum; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const reduce = useReducedMotion();
  const raw = useCountUp(stat.target, inView && !reduce, reduce ? 0 : 1500 + index * 120);
  const Icon = stat.icon;
  const value = reduce ? stat.target : raw;
  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toString();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={reduce ? undefined : { y: -4 }}
      className="relative p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 transition-colors duration-300 shadow-[0_2px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(66,114,187,0.14)] group flex flex-col justify-between overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ background: stat.glow }}
      />
      <div className="flex items-center justify-between mb-3 relative">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.colorClass} flex items-center justify-center text-white shadow-md`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono text-slate-400 font-bold text-right">{stat.sub}</span>
      </div>
      <div className="relative">
        <div className={`text-2xl md:text-[1.8rem] font-black font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-br ${stat.colorClass}`}>
          {stat.prefix ?? ''}{display}{stat.suffix}
        </div>
        <p className="text-xs text-slate-600 leading-tight mt-1 font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
}

// ── Fondo ambiental: orbes de gradiente con parallax suave ──────────────────

function AmbientBackground({ scrollYProgress }: { scrollYProgress: any }) {
  const reduce = useReducedMotion();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(66,114,187,0.10),rgba(255,255,255,0))]" />
      <motion.div style={{ y: y1 }} className="absolute top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-300/20 blur-[110px]" />
      <motion.div style={{ y: y2 }} className="absolute top-[40%] -right-32 w-[32rem] h-[32rem] rounded-full bg-violet-300/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-brand-pink/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_10%,transparent_75%)]" />
    </div>
  );
}

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

  const handleCheckboxChange = (id: string) => {
    progress.toggleChecklistItem('checklist', id);
  };

  const pageRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ['start start', 'end end'] });
  const readingBar = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <>
      <Navbar />
      <BackToDashboardButton />

      {/* Barra de progreso de lectura */}
      <motion.div
        style={{ scaleX: readingBar }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-brand-blue via-indigo-500 to-violet-500 z-[60]"
      />

      <div ref={pageRef} className="min-h-screen flex flex-col md:flex-row relative text-slate-800 bg-[#F7FAFD] selection:bg-blue-200 selection:text-brand-navy">
        <AmbientBackground scrollYProgress={scrollYProgress} />

        <TocNav />

        <main className="flex-1 min-w-0 overflow-x-hidden p-6 md:pt-24 md:px-12 md:pb-24 max-w-6xl mx-auto w-full relative z-10 space-y-20 md:space-y-28">

          {/* ── 00. HERO ─────────────────────────────────────────────────── */}
          <section id="hero" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-brand-light-blue border border-blue-200/80 text-brand-navy text-sm font-mono tracking-wide shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                <span className="font-semibold">MÓDULO FORMATIVO & LANDING ESTRATÉGICA 2026</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy tracking-tight leading-[1.03] font-display">
                Alfabetización Digital:{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-600">
                  del acceso técnico al andamiaje cognitivo
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl font-sans leading-relaxed">
                Más allá del simple manejo operativo de dispositivos: una capacidad holística e integral para procesar información con criterio, interactuar éticamente en la red y ejercer una ciudadanía activa e informada en la era de la IA.
              </motion.p>
            </motion.div>

            {/* Banner de datos duros con contador animado */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3.5 pt-2">
              {STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </motion.div>

            {/* Constructo holístico — nota conceptual */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-brand-light-blue/30 border border-blue-200/80 shadow-lg shadow-blue-500/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
                <Cpu className="w-4 h-4 text-brand-blue" />
                <span>Constructo Holístico e Integración Cognitiva</span>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                La alfabetización digital articula tres dimensiones indisolubles: <strong className="text-brand-navy">Técnica</strong> (operación), <strong className="text-brand-navy">Cognitiva</strong> (evaluación hipertextual y crítica) y <strong className="text-brand-navy">Socioemocional</strong> (ética y resguardo en red).
              </p>
              <p className="text-sm md:text-base text-brand-pink leading-relaxed border-t border-blue-100 pt-3">
                {CONCEPTO_NOTA_DOCENTE}
              </p>
            </motion.div>

            {/* Tríada de pilares */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: BookOpen, title: 'Dimensión Técnica', desc: 'Manejo instrumental de hardware, software, redes, conectividad y herramientas avanzadas de automatización e IA.', grad: 'from-blue-500 to-blue-700', ring: 'hover:border-blue-300' },
                { icon: Brain, title: 'Dimensión Cognitiva', desc: 'Pensamiento crítico, filtrado de infoxicación, procesamiento en tiempo real y navegación en arquitecturas no lineales.', grad: 'from-indigo-500 to-indigo-700', ring: 'hover:border-indigo-300' },
                { icon: Shield, title: 'Dimensión Socioemocional', desc: 'Responsabilidad ética, convivencia pacífica en comunidades virtuales, resguardo de la huella digital y netiqueta.', grad: 'from-pink-500 to-brand-pink', ring: 'hover:border-pink-300' },
              ].map((p) => (
                <motion.div key={p.title} variants={fadeUp} className={`p-6 rounded-2xl bg-white border border-slate-200/80 ${p.ring} transition-all duration-300 shadow-md shadow-slate-100 hover:shadow-xl space-y-3 group`}>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.grad} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── 01–02 ────────────────────────────────────────────────────── */}
          <Reveal><HistoriaSection /></Reveal>
          <Reveal><CaracteristicasSection /></Reveal>

          {/* ── 03. Estándares globales ──────────────────────────────────── */}
          <div className="space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-brand-light-blue/30 border border-blue-200/80 shadow-lg shadow-blue-500/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
                <Globe className="w-4 h-4 text-brand-blue" />
                <span>Estándares Globales: DigComp 3.0 & DigCompALC (CEPAL 2026)</span>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Estructuras integradas para evaluar proficiencia digital desde el Nivel Prebásico hasta habilidades avanzadas de Inteligencia Artificial.
              </p>
            </motion.div>
            <Reveal><TiposVariantesSection /></Reveal>
          </div>

          {/* ── 04. INFOGRAFÍA INTERACTIVA ──────────────────────────────── */}
          <section id="infografia" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
            <Reveal>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-blue font-mono text-base uppercase tracking-wider font-semibold">
                  <LayoutDashboard className="w-4 h-4 text-brand-blue" />
                  <span>04 · Infografía Interactiva</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
                  Agenda Digital y Alfabetización: El Motor de Cambio para América Latina y el Caribe
                </h2>
                <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
                  Toda la síntesis visual del módulo en una sola lámina: dimensiones, brecha digital, impacto del PIB, IA regional y comparación de habilidades por país. Hacé clic para explorarla con zoom.
                </p>
              </div>
            </Reveal>
            <InfografiaViewer />
          </section>

          <Reveal><EjemplosSection /></Reveal>
          <Reveal><VentajasSection /></Reveal>
          <Reveal><RiesgosSection /></Reveal>

          {/* ── 07. Con imagen de aula ───────────────────────────────────── */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-pink font-mono text-base uppercase tracking-wider font-semibold">
                  <GraduationCap className="w-4 h-4 text-brand-pink" />
                  <span>07 · Por qué es Importante Saberlo como Docentes</span>
                </div>
              </div>
            </Reveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50/40 to-rose-50/20 border border-pink-200/80 shadow-lg shadow-pink-500/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-pink font-mono text-sm uppercase tracking-wider font-semibold">
                <GraduationCap className="w-4 h-4 text-brand-pink" />
                <span>Apropiación Pedagógica & Mitigación de Barreras Familiares</span>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Diseño de experiencias contextualizadas para superar la falta de andamiaje en los hogares vulnerables y fomentar el uso ético de la IA.
              </p>
            </motion.div>
            <Reveal><AulaSection /></Reveal>
          </div>

          <Reveal>
            <RecursosSection checkedItems={checkedItems} onCheckboxChange={handleCheckboxChange} />
          </Reveal>

          {/* Progreso + completitud */}
          <Reveal>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 flex items-center justify-between flex-wrap gap-3">
              <span className="text-sm font-mono text-slate-500">Progreso del checklist</span>
              <div className="flex items-center gap-3 flex-1 min-w-[160px] max-w-xs">
                <div className="flex-1 h-2.5 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-blue via-indigo-500 to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(checkedItems.size / CHECKLIST_ITEMS.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-base font-black text-brand-blue font-mono">{checkedItems.size}/{CHECKLIST_ITEMS.length}</span>
              </div>
            </div>
          </Reveal>

          <div className="pt-2 border-t border-slate-200">
            <TematicaCompletarButton completada={progress.completada} onComplete={progress.markCompleted} />
          </div>

        </main>
      </div>

      <Footer />
    </>
  );
}

