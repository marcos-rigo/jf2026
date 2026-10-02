'use client';

import { Section, H3, P, RichText, ListaNumerada, RecuadroDestacado, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function IdentidadYConvivenciaSection() {
  const c = useContenido().identidadYConvivencia;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="identidad-y-convivencia" number="05" title={c.titulo}>
      <div className="space-y-4">
        <H3>{recordar.subtitulo}</H3>
        <P>{recordar.parrafoInicial}</P>
        <P>{recordar.parrafoPantalla}</P>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          {recordar.lista.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
        <P>{recordar.parrafoDistinguir}</P>
      </div>

      <div className="space-y-4">
        <H3>{comprender.subtitulo}</H3>
        {comprender.parrafos.map((p) => (
          <P key={p}>{p}</P>
        ))}
        <RecuadroDestacado title={comprender.recuadro.titulo} paragraphs={comprender.recuadro.parrafos} />
        <P>{comprender.parrafoPosRecuadro}</P>
      </div>

      <div className="space-y-4">
        <H3>{aplicar.subtitulo}</H3>
        <P>{aplicar.parrafoPreguntas}</P>
        <ListaNumerada items={aplicar.preguntas} />
        <P>{aplicar.parrafoMovimientos}</P>
        <ListaNumerada items={aplicar.movimientos} />
        <P>{aplicar.parrafoFinal}</P>
      </div>

      {c.fichas.map((f) => (
        <FichaAula key={f.titulo} {...f} />
      ))}
    </Section>
  );
}
