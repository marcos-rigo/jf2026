'use client';

import { History } from 'lucide-react';
import { SourceCite } from './source-cite';
import {
  INFOXICACION_QUOTE,
  INFOXICACION_ATRIBUCION_NOTA,
  INFOXICACION_AGRAVAMIENTO_QUOTE,
} from '@/lib/alfabetizacion-mediatica-content';

export function HistoriaSection() {
  return (
    <section id="historia" className="scroll-mt-20 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
          <History className="w-4 h-4 text-brand-blue" />
          <span>02 · Origen del Problema</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          La Infoxicación: de dónde viene el nombre
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 rounded-[2rem] p-6 sm:p-8 space-y-5">
        <p className="text-base sm:text-lg italic text-brand-navy/90 leading-relaxed border-l-4 border-brand-blue/40 pl-4">
          &ldquo;{INFOXICACION_QUOTE.text}&rdquo;
        </p>
        <SourceCite source={INFOXICACION_QUOTE.source} />

        <p className="text-sm text-slate-500 italic leading-relaxed pl-4 border-l-2 border-slate-200">
          {INFOXICACION_ATRIBUCION_NOTA}
        </p>

        <div className="pt-4 border-t border-slate-100 space-y-3">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{INFOXICACION_AGRAVAMIENTO_QUOTE.text}</p>
          <SourceCite source={INFOXICACION_AGRAVAMIENTO_QUOTE.source} />
        </div>
      </div>
    </section>
  );
}
