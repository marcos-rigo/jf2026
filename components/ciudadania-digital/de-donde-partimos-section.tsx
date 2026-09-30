'use client';

import { Section, P, H3, Note, useContenido } from './ui';

export default function DeDondePartimosSection() {
  const c = useContenido().partimos;
  return (
    <Section id="de-donde-partimos" number="04" title={c.titulo}>
      {c.bloques.map((b) => (
        <div key={b.subtitulo} className="space-y-3">
          <H3>{b.subtitulo}</H3>
          {b.parrafos.map((p) => (
            <P key={p}>{p}</P>
          ))}
        </div>
      ))}
      <Note>{c.notaPie}</Note>
    </Section>
  );
}
