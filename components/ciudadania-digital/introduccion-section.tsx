'use client';

import { CheckCircle2, Clock } from 'lucide-react';
import { Section, P, useContenido } from './ui';

export default function IntroduccionSection() {
  const c = useContenido().introduccion;
  return (
    <Section id="introduccion" number="01" title={c.titulo}>
      <P className="text-lg">{c.bajada}</P>
      <div className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm">
        <p className="font-display font-bold text-brand-navy mb-3">{c.resumenTitulo}</p>
        <ul className="space-y-3">
          {c.resumen.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="flex items-start gap-2 text-sm text-slate-600">
        <Clock className="w-4 h-4 mt-0.5 shrink-0 text-brand-pink" />
        {c.formato}
      </p>
    </Section>
  );
}
