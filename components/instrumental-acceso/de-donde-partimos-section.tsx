'use client';

import { Section, P, Callout, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function DeDondePartimosSection() {
  const c = useContenido().deDondePartimos;
  return (
    <Section id="de-donde-partimos" number="04" title={c.titulo}>
      {c.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}

      <Callout title="Antes de seguir">
        <p>{c.preguntaCierre}</p>
      </Callout>

      <FichaAula {...c.fichaAula} />
    </Section>
  );
}
