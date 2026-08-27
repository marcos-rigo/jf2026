'use client';

import { TrendingUp } from 'lucide-react';
import { SourceCite } from './source-cite';
import { VENTAJAS_QUOTE } from '@/lib/alfabetizacion-mediatica-content';

export function VentajasSection() {
  return (
    <section id="ventajas" className="scroll-mt-20 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
          <TrendingUp className="w-4 h-4 text-brand-blue" />
          <span>06 · Ventajas</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Por qué esto importa más allá del aula
        </h2>
      </div>

      <div className="bg-gradient-to-br from-white via-brand-blue/5 to-brand-pink/5 border border-slate-200/60 rounded-[2rem] p-6 sm:p-8 space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{VENTAJAS_QUOTE.text}</p>
        <SourceCite source={VENTAJAS_QUOTE.source} />
      </div>
    </section>
  );
}
