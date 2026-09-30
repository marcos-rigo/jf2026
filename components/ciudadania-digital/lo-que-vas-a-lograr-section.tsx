'use client';

import { Section, P, H3, Callout, useContenido } from './ui';

export default function LoQueVasALograrSection() {
  const c = useContenido().logros;
  return (
    <Section id="lo-que-vas-a-lograr" number="02" title={c.titulo}>
      <P>{c.intro}</P>
      <Callout title={c.competenciaEtiqueta} tone="navy">
        <p className="text-lg font-display">{c.competencia}</p>
      </Callout>
      <H3>{c.objetivosTitulo}</H3>
      <ol className="space-y-3">
        {c.objetivos.map((o, i) => (
          <li key={o} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-4">
            <span className="font-display font-bold text-brand-blue text-xl leading-none">{i + 1}</span>
            <span className="leading-relaxed text-slate-700">{o}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
