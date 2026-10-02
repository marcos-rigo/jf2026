'use client';

import { Section, P, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function DeDondePartimosSection() {
  const c = useContenido().deDondePartimos;
  return (
    <Section id="de-donde-partimos" number="04" title={c.titulo}>
      {c.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}
      <p className="font-display text-lg md:text-xl font-bold text-brand-navy leading-snug">{c.preguntaDestacada}</p>

      {c.fichas.map((ficha) => (
        <FichaAula key={ficha.titulo} {...ficha} />
      ))}
    </Section>
  );
}
