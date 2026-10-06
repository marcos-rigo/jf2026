'use client';

import { Section, H3, P, ListaNumerada, RecuadroDestacado, useContenido } from './ui';

// Esta sección no lleva ninguna ficha (ver CLAUDE.md).
export default function DiagnosticoYConstruccionColectivaSection() {
  const c = useContenido().diagnosticoYConstruccionColectiva;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="diagnostico-y-construccion-colectiva" number="05" title={c.titulo}>
      <div className="space-y-4">
        <H3>{recordar.subtitulo}</H3>
        {recordar.parrafos.map((p) => (
          <P key={p}>{p}</P>
        ))}
      </div>

      <div className="space-y-4">
        <H3>{comprender.subtitulo}</H3>
        {comprender.parrafos.map((p) => (
          <P key={p}>{p}</P>
        ))}
        <RecuadroDestacado title={comprender.recuadro.titulo} paragraphs={comprender.recuadro.parrafos} />
      </div>

      <div className="space-y-4">
        <H3>{aplicar.subtitulo}</H3>
        <P>{aplicar.parrafoPreguntas}</P>
        <ListaNumerada items={aplicar.preguntas} />
      </div>
    </Section>
  );
}
