'use client';

import { Section, P, H3, Note, Callout, useContenido } from './ui';

export default function UnCasoResueltoSection() {
  const c = useContenido().unCasoResuelto;
  return (
    <Section id="un-caso-resuelto" number="06" title={c.titulo}>
      <H3>{c.subtitulo}</H3>
      <Callout tone="pink">
        <p className="text-slate-700">{c.caso}</p>
      </Callout>

      <div className="space-y-6">
        {c.fases.map((f) => (
          <article key={f.numero} className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-3">
            <h3 className="font-display text-lg md:text-xl font-bold text-brand-navy">
              <span className="text-brand-blue">Fase {f.numero}</span> — {f.titulo}
            </h3>
            <P>{f.texto}</P>
            <Note>{f.nota}</Note>
          </article>
        ))}
      </div>
    </Section>
  );
}
