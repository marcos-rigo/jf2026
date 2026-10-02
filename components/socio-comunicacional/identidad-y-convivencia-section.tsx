'use client';

import { Section, H3, P, ListaViñetas, ListaNumerada, RecuadroDestacado, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function IdentidadYConvivenciaSection() {
  const c = useContenido().identidadYConvivencia;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="identidad-y-convivencia" number="05" title={c.titulo}>
      <div className="space-y-4">
        <H3>{recordar.subtitulo}</H3>
        <P>{recordar.parrafo1}</P>
        <P>{recordar.parrafo2}</P>
        <ListaViñetas items={recordar.lista} />
        <P>{recordar.parrafoCierre}</P>
      </div>

      <div className="space-y-4">
        <H3>{comprender.subtitulo}</H3>
        <ListaViñetas items={comprender.lista} />
        <RecuadroDestacado title={comprender.recuadro.titulo} paragraphs={comprender.recuadro.parrafos} />
        <P>{comprender.parrafoDespues}</P>
      </div>

      <div className="space-y-4">
        <H3>{aplicar.subtitulo}</H3>
        <P>{aplicar.parrafoAntes}</P>
        <ListaNumerada items={aplicar.lista1} />
        <P>{aplicar.parrafoEntre}</P>
        <ListaNumerada items={aplicar.lista2} />
        <P>{aplicar.parrafoFinal}</P>
      </div>

      {c.fichas.map((ficha) => (
        <FichaAula key={ficha.titulo} {...ficha} />
      ))}
    </Section>
  );
}
