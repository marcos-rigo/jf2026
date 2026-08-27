'use client';

import { AlertTriangle } from 'lucide-react';
import { SourceCite } from './source-cite';
import { VULNERABILITIES } from '@/lib/alfabetizacion-mediatica-content';

export function RiesgosSection() {
  return (
    <section id="riesgos" className="scroll-mt-20 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-rose-600 font-mono text-sm uppercase tracking-wider font-semibold">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>07 · Riesgos</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Vulnerabilidades Cognitivas
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
          Sesgos cognitivos que comprometen el procesamiento de datos:
        </p>
      </div>

      <div className="space-y-4">
        {VULNERABILITIES.map((v) => (
          <div
            key={v.title}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300 space-y-4"
          >
            <div className="flex gap-4 sm:gap-5 items-start group">
              <div className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${v.bg} ${v.hover} shrink-0`}>
                <span className="text-lg sm:text-xl leading-none block">{v.emoji}</span>
              </div>
              <div>
                <strong className="text-slate-900 block text-base mb-1">{v.title}</strong>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            </div>

            {v.quote && (
              <div className="pl-[3.75rem] sm:pl-[4.25rem] space-y-3">
                <p className="text-sm sm:text-base italic text-brand-navy/90 leading-relaxed border-l-4 border-brand-blue/30 pl-4">
                  {v.quote.text}
                </p>
                <SourceCite source={v.quote.source} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
