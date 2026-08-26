'use client';

import { CONCEPTO_QUOTE } from '@/lib/alfabetizacion-digital-content';
import { SourceCite } from './source-cite';
import { BookOpen, Brain, Shield, Sparkles, Cpu, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Badge Superior Tech 2026 */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 text-sky-800 text-xs font-mono tracking-wide shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
        <span className="font-semibold">MÓDULO FORMATIVO & LANDING ESTRATÉGICA 2026</span>
      </div>

      {/* Titular Principal & Subtítulo */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
          Alfabetización Digital:{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
            Del Acceso Técnico al Andamiaje Cognitivo
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl font-sans leading-relaxed font-normal">
          Más allá del simple manejo operativo de dispositivos: una capacidad integral para procesar información con criterio, interactuar éticamente en la red y ejercer una ciudadanía activa e informada.
        </p>
      </div>

      {/* Tarjeta de Definición Fundamental — Light Tech Glassmorphism */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/50 to-blue-50/30 border border-sky-200/80 shadow-[0_20px_50px_rgba(14,165,233,0.08)] backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl -z-10 group-hover:bg-sky-400/20 transition-all duration-700" />
        
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-sky-700 font-bold font-mono text-sm uppercase tracking-wider">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-300 flex items-center justify-center text-sky-600">
              <Cpu className="w-4 h-4" />
            </div>
            <span>Definición Fundamental</span>
          </div>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed font-sans">
            La <strong className="text-slate-900 font-bold">alfabetización digital</strong> no consiste únicamente en encender una computadora ni en dominar interfaces. Es un <span className="text-sky-700 font-semibold bg-sky-100/70 px-1.5 py-0.5 rounded">constructo holístico</span> que articula tres dimensiones indisolubles: <strong className="text-slate-900">técnica</strong> (operación efectiva), <strong className="text-slate-900">cognitiva</strong> (evaluación crítica e hipertextual) y <strong className="text-slate-900">socioemocional</strong> (ética, empatía y protección en redes).
          </p>

          {/* Cita enmarcada con SourceCite */}
          <div className="mt-4 pt-4 border-t border-sky-100 bg-white/80 p-5 rounded-2xl border border-sky-200/60 shadow-sm space-y-2">
            <p className="text-sm italic text-slate-700 leading-relaxed">
              &ldquo;{CONCEPTO_QUOTE.text}&rdquo;
            </p>
            <div>
              <SourceCite source={CONCEPTO_QUOTE.source} />
            </div>
          </div>
        </div>
      </div>

      {/* Tríada de Pilares Integrales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1.5 font-display">Dimensión Técnica</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Manejo instrumental de hardware, software, redes, conectividad y herramientas avanzadas de automatización e IA.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Brain className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1.5 font-display">Dimensión Cognitiva</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pensamiento crítico, filtrado de infoxicación, procesamiento en tiempo real y navegación en arquitecturas no lineales.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-4 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1.5 font-display">Dimensión Socioemocional</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Responsabilidad ética, convivencia pacífica en comunidades virtuales, resguardo de la huella digital y netiqueta.
          </p>
        </div>
      </div>
    </section>
  );
}
