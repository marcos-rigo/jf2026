'use client';

import { Section, H3, P, ListaNumerada, RecuadroDestacado, TablaTresColumnas, useContenido } from './ui';
import { FichaAula } from './ficha-aula';

export default function CriterioYVerificacionSection() {
  const c = useContenido().criterioYVerificacion;
  const { recordar, comprender, aplicar } = c;

  return (
    <Section id="criterio-y-verificacion" number="05" title={c.titulo}>
      <div className="space-y-4">
        <H3>{recordar.subtitulo}</H3>
        <P>{recordar.parrafoInicial}</P>
        <P>{recordar.parrafoPantalla}</P>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          {recordar.lista.map((item) => (
            <li key={item}>{item}</li>
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
      </div>

      <div className="space-y-4">
        <H3>{aplicar.subtitulo}</H3>
        <P>{aplicar.parrafoLateral}</P>
        <ListaNumerada items={aplicar.movimientos} />
        <P>{aplicar.parrafoNivel}</P>
        <TablaTresColumnas encabezados={aplicar.tabla.encabezados} filas={aplicar.tabla.filas} />
        <P>{aplicar.parrafoFinal}</P>
      </div>

      <FichaAula {...c.fichaAula2} />
    </Section>
  );
}
