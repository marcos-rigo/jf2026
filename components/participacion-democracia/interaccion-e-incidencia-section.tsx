'use client';

import { Section, H3, P, ListaNumerada, ListaViñetas, RecuadroDestacado, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function InteraccionEIncidenciaSection() {
  const c = useContenido().interaccionEIncidencia;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="interaccion-e-incidencia" number="05" title={c.titulo}>
      <div className="space-y-4">
        <H3>{recordar.subtitulo}</H3>
        <P>{recordar.intro}</P>
        <ListaViñetas items={recordar.elementos} />
        {recordar.cierre && <P>{recordar.cierre}</P>}
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
        <P>{aplicar.parrafoMovimientos}</P>
        <ListaNumerada items={aplicar.movimientos} />
        <P>{aplicar.parrafoFicha}</P>
      </div>

      <FichaAula {...c.fichaAula3} />
      <FichaAula {...c.fichaAula4} />
    </Section>
  );
}
