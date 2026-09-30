'use client';

import { Section, P, H3, Note, Callout, useContenido } from './ui';

export default function CasoResueltoSection() {
  const c = useContenido().caso;
  return (
    <Section id="caso-resuelto" number="06" title={c.titulo}>
      <H3>{c.subtitulo}</H3>
      <P>{c.intro}</P>

      <Callout title={c.casoTitulo} tone="pink">
        <p className="text-slate-700">{c.caso}</p>
      </Callout>

      <div className="space-y-6">
        {c.fases.map((f) => (
          <article key={f.numero} className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-3">
            <header>
              <h3 className="font-display text-lg md:text-xl font-bold text-brand-navy">
                <span className="text-brand-blue">Fase {f.numero}</span> — {f.titulo}
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">{f.guia}</p>
            </header>
            <P>{f.texto}</P>
            {f.duda && <Note>{f.duda}</Note>}
          </article>
        ))}
      </div>

      <Note>{c.notaPie}</Note>
    </Section>
  );
}
