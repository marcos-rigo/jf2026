'use client';

import { Layers, GraduationCap, ShieldAlert, AlertTriangle, EyeOff } from 'lucide-react';
import { SourceCite } from './source-cite';
import { DISORDER_TYPES, DISORDER_SOURCE, DISORDER_NOTA_DOCENTE } from '@/lib/alfabetizacion-mediatica-content';

const ICONS = [ShieldAlert, AlertTriangle, EyeOff];
const ACCENTS = [
  { badge: 'bg-rose-50 text-rose-600 border-rose-200', icon: 'bg-rose-500' },
  { badge: 'bg-amber-50 text-amber-700 border-amber-200', icon: 'bg-amber-500' },
  { badge: 'bg-slate-100 text-slate-600 border-slate-200', icon: 'bg-slate-500' },
];

export function TiposVariantesSection() {
  return (
    <section id="tipos-variantes" className="scroll-mt-20 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
          <Layers className="w-4 h-4 text-brand-blue" />
          <span>04 · Tipos o Variantes</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Los 3 Tipos de Desorden Informativo
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          No toda información falsa es igual — y no toda información dañina es falsa. Distinguir intención de
          veracidad es la base para clasificar correctamente lo que circula.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {DISORDER_TYPES.map((tipo, idx) => {
          const Icon = ICONS[idx];
          const accent = ACCENTS[idx];
          return (
            <div
              key={tipo.id}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 rounded-2xl p-6 space-y-3 hover:shadow-xl hover:border-brand-blue/30 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl ${accent.icon} flex items-center justify-center text-white shadow-md`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-slate-900 text-lg">{tipo.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{tipo.desc}</p>
            </div>
          );
        })}
      </div>

      <SourceCite source={DISORDER_SOURCE} />

      {/* Nota docente — "tip para el aula" */}
      <div className="bg-gradient-to-br from-brand-pink/10 via-white to-transparent border border-brand-pink/30 rounded-2xl p-5 sm:p-6 flex items-start gap-3.5">
        <GraduationCap className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-pink uppercase tracking-wider font-mono">Tip para el aula</span>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{DISORDER_NOTA_DOCENTE}</p>
        </div>
      </div>
    </section>
  );
}
