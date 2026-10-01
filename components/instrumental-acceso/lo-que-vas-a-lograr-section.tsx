'use client';

import { Section, P, Callout, useContenido } from './ui';

export default function LoQueVasALograrSection() {
  const c = useContenido().loQueVasALograr;
  return (
    <Section id="lo-que-vas-a-lograr" number="02" title={c.titulo}>
      <Callout title={c.competenciaEtiqueta} tone="navy">
        <p>{c.competencia}</p>
      </Callout>
      <div className="space-y-3">
        <p className="font-display font-bold text-brand-navy">{c.objetivosTitulo}</p>
        <ol className="space-y-2">
          {c.objetivos.map((o, i) => (
            <li key={o} className="flex gap-3 rounded-xl bg-white border border-slate-200 p-4">
              <span className="font-display font-bold text-brand-blue w-6 shrink-0">{i + 1}</span>
              <P>{o}</P>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
