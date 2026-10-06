'use client';

import { Section, H3, P, ListaNumerada, RecuadroDestacado, useContenido } from './ui';

// A diferencia de otras dimensiones, esta sección (05) no lleva ninguna ficha de aula
// (ver CLAUDE.md del prompt).
export default function OrganizacionYAccionColectivaSection() {
  const c = useContenido().organizacionYAccionColectiva;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="organizacion-y-accion-colectiva" number="05" title={c.titulo}>
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
