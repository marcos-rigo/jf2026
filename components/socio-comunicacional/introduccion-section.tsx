'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Section, P, useContenido } from './ui';

export default function IntroduccionSection() {
  const c = useContenido().introduccion;
  return (
    <Section id="introduccion" number="01" title={c.titulo}>
      <p className="font-display text-lg md:text-xl font-semibold text-brand-navy -mt-2">{c.subtitulo}</p>
      <P className="text-lg">
        {c.bajadaAntes}
        <Link href={c.bajadaEnlaceHref} className="text-brand-blue font-semibold hover:underline">
          {c.bajadaEnlaceTexto}
        </Link>
        {c.bajadaDespues}
      </P>
      <div className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm">
        <p className="font-display font-bold text-brand-navy mb-3">{c.listaTitulo}</p>
        <ul className="space-y-3">
          {c.lista.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
