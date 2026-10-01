'use client';

import { Section, P, H3, Note, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function CapacidadYAccesoSection() {
  const c = useContenido().capacidadYAcceso;
  return (
    <Section id="capacidad-y-acceso" number="05" title={c.titulo}>
      {c.bloques.map((b) => (
        <div key={b.subtitulo} className="space-y-3">
          <H3>{b.subtitulo}</H3>
          <P>{b.texto}</P>
        </div>
      ))}

      <Note>{c.parrafoCierre}</Note>

      <FichaAula {...c.fichaAula} />
    </Section>
  );
}
