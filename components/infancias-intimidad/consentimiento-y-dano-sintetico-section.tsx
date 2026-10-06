'use client';

import { Section, H3, P, RecuadroDestacado, ListaNumerada, useContenido } from './ui';

export default function ConsentimientoYDanoSinteticoSection() {
  const c = useContenido().consentimientoYDanoSintetico;
  return (
    <Section id="consentimiento-y-dano-sintetico" number="05" title={c.titulo}>
      <H3>{c.recordar.subtitulo}</H3>
      {c.recordar.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}

      <H3>{c.comprender.subtitulo}</H3>
      {c.comprender.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}
      <RecuadroDestacado title={c.comprender.recuadro.titulo} paragraphs={c.comprender.recuadro.parrafos} />

      <H3>{c.aplicar.subtitulo}</H3>
      <P>{c.aplicar.parrafoPreguntas}</P>
      <ListaNumerada items={c.aplicar.preguntas} />
    </Section>
  );
}
