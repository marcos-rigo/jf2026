'use client';

import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { GraduationCap } from 'lucide-react';
import { SourceCite } from './source-cite';
import { MIL_QUOTE, MIL_ORIGEN_QUOTE, MIL_DOCENTES_QUOTE } from '@/lib/alfabetizacion-mediatica-content';

const introChartData = {
  labels: ['Lee solo el título', 'Análisis completo (Artículo)'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#f43f5e', '#2dd4bf'],
      hoverBackgroundColor: ['#e11d48', '#14b8a6'],
      borderWidth: 0,
      hoverOffset: 8,
      borderRadius: 4,
    },
  ],
};

const introChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle' as const,
        font: { size: 12, weight: 'bold' as const },
        color: '#334155',
      },
    },
    tooltip: {
      backgroundColor: 'rgba(15,23,42,0.9)',
      titleFont: { size: 13, weight: 'bold' as const },
      bodyFont: { size: 13 },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: (ctx: { parsed: number }) => `  ${ctx.parsed}% de usuarios`,
      },
    },
  },
  cutout: '75%',
  animation: { animateScale: true, animateRotate: true },
} as const;

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20 space-y-10 sm:space-y-12">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="flex h-2 w-2 rounded-full bg-brand-pink animate-pulse shadow-[0_0_8px_#D5247A]" />
            <span className="text-xs font-bold text-brand-navy tracking-widest uppercase">
              01 · Plataforma AMI — Concepto
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Optimizá tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue bg-[length:200%_auto] animate-gradient">
              Filtro de Información
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
            La infoxicación satura la capacidad de decisión de cualquiera: la tuya y la de tus estudiantes. Este
            entorno de entrenamiento de{' '}
            <strong className="text-brand-navy">Alfabetización Mediática</strong> es tu herramienta para evaluar,
            procesar y compartir datos con precisión, y para después poder enseñarles el mismo método en el aula.
          </p>

          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 p-5 sm:p-6 rounded-2xl border-l-4 border-l-brand-blue hover:border-l-brand-pink transition-colors duration-300 group">
            <h3 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-lg">🎯</span> Tu Objetivo Principal
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instalar un "cortafuegos mental" para neutralizar titulares engañosos y elevar la calidad de la
              información que consumís y distribuís — y tener un método claro y replicable para enseñarles lo mismo a
              tus estudiantes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 p-6 sm:p-8 rounded-[2rem] flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-pink/5 pointer-events-none" />
          <div className="text-center mb-4 sm:mb-6 relative z-10">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
              El Sesgo de Superficialidad
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1.5">
              Interacción promedio frente a un enlace
            </p>
          </div>
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-[240px] sm:h-[280px] lg:h-[320px] z-10">
            <Doughnut data={introChartData} options={introChartOptions} />
          </div>
          <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-100/60 px-4 py-2 rounded-full hover:bg-slate-200/60 transition-colors">
            <span>📊</span> Basado en métricas de consumo digital
          </div>
        </motion.div>
      </div>

      {/* Definición y origen del marco MIL */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 p-5 sm:p-6 rounded-2xl space-y-3">
          <h4 className="font-display font-bold text-slate-900">Qué es la alfabetización mediática (MIL)</h4>
          <p className="text-sm sm:text-base italic text-brand-navy/90 leading-relaxed border-l-4 border-brand-blue/40 pl-4">
            &ldquo;{MIL_QUOTE.text}&rdquo;
          </p>
          <SourceCite source={MIL_QUOTE.source} />
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 p-5 sm:p-6 rounded-2xl space-y-3">
          <h4 className="font-display font-bold text-slate-900">De dónde viene el marco</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{MIL_ORIGEN_QUOTE.text}</p>
          <SourceCite source={MIL_ORIGEN_QUOTE.source} />
        </div>
      </div>

      {/* Callout: por qué esta página está dirigida a docentes */}
      <div className="bg-gradient-to-br from-brand-pink/10 via-white to-brand-blue/5 border border-brand-pink/30 rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
        <div className="w-11 h-11 rounded-xl bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink shrink-0">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <h4 className="font-display font-extrabold text-brand-navy text-base sm:text-lg">
            Un marco pensado específicamente para docentes
          </h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{MIL_DOCENTES_QUOTE.text}</p>
          <SourceCite source={MIL_DOCENTES_QUOTE.source} />
        </div>
      </div>
    </section>
  );
}
