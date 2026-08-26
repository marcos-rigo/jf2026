'use client';

import { DIMENSIONES } from '@/lib/alfabetizacion-digital-content';
import { Network, Zap, ShieldCheck, Filter, RefreshCw, Lightbulb } from 'lucide-react';

const iconsMap = [
  ShieldCheck, // Socioemocional
  Network,     // Branching literacy
  Zap,         // Tiempo real
  Filter,      // Informacional
  RefreshCw,   // Reproducción
];

export default function CaracteristicasSection() {
  return (
    <section id="caracteristicas" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sky-700 font-mono text-sm uppercase tracking-wider font-semibold">
          <Network className="w-4 h-4 text-sky-600" />
          <span>02 · Características y Dimensiones Críticas</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
          Las 5 Dimensiones Cognitivas del Usuario Competente
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Basadas en el modelo de Eshet-Alkalai, estas dimensiones operan como engranajes interconectados que permiten filtrar la saturación informativa y desenvolverse de forma autónoma.
        </p>
      </div>

      {/* Grid de las 5 Dimensiones en Light Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIMENSIONES.map((dim, idx) => {
          const Icon = iconsMap[idx] || Network;
          return (
            <div
              key={dim.titulo}
              className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-1 md:col-span-2 lg:row-span-1 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/20 border-sky-200' : ''
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-800 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200">
                    Dimensión 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-sky-700 transition-colors">
                  {dim.titulo}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {dim.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[0.7rem] font-mono text-sky-700 font-semibold gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Competencia cognitiva clave</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cuadro Resumen de Transversalidad */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-white border border-sky-200/80 shadow-sm space-y-3">
        <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 font-display">
          <Lightbulb className="w-5 h-5 text-sky-600 shrink-0" /> Carácter Transversal en la Vida Cívica y Profesional
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          Estas competencias no se restringen al campo académico o laboral: influyen directamente en la salud mental (resguardo frente a la sobreestimulación), en el pensamiento crítico contra los algoritmos de polarización y en el acceso pleno a derechos ciudadanos frente a la digitalización del Estado.
        </p>
      </div>
    </section>
  );
}
