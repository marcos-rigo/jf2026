'use client';

import Link from 'next/link';
import { Section, P, H3, Note, TextArea, useContenido } from './ui';
import { useInstrumentalAccesoStore } from '@/lib/instrumental-acceso-store';

export default function RecursosYCierreSection() {
  const c = useContenido().recursosYCierre;
  const respuestaGancho = useInstrumentalAccesoStore((s) => s.respuestaGancho);
  const explicacionFinal = useInstrumentalAccesoStore((s) => s.explicacionFinal);
  const setExplicacionFinal = useInstrumentalAccesoStore((s) => s.setExplicacionFinal);

  return (
    <Section id="recursos-y-cierre" number="10" title={c.titulo}>
      {/* ── ¿Qué cambió? ── */}
      <H3>{c.cambioTitulo}</H3>
      <P>{c.cambioInstruccion}</P>
      <blockquote className="rounded-xl border-l-4 border-brand-blue bg-slate-50 p-4">
        {respuestaGancho ? (
          <p className="leading-relaxed whitespace-pre-wrap text-slate-800">{respuestaGancho}</p>
        ) : (
          <p className="leading-relaxed italic text-slate-500">
            {c.sinRespuestaAntes}
            <Link href={c.sinRespuestaEnlaceHref} className="text-brand-blue font-medium hover:underline not-italic">
              {c.sinRespuestaEnlaceTexto}
            </Link>
            {c.sinRespuestaDespues}
          </p>
        )}
      </blockquote>

      <div className="space-y-2">
        <p className="font-medium text-slate-800">{c.pregunta}</p>
        <TextArea value={explicacionFinal} onChange={setExplicacionFinal} placeholder={c.placeholder} rows={3} label={c.pregunta} />
      </div>
      <Note>{c.nota}</Note>

      {/* ── Para llevarte ── */}
      <H3>{c.llevarteTitulo}</H3>
      <article className="rounded-3xl bg-brand-navy text-white p-6 md:p-8 shadow-lg space-y-4">
        <h4 className="font-display text-2xl font-bold">{c.tarjeta.titulo}</h4>
        {c.tarjeta.parrafos.map((p) => (
          <p key={p} className="leading-relaxed text-white/90">
            {p}
          </p>
        ))}
      </article>

      {/* ── Seguí recorriendo el Poliedro ── */}
      <H3>{c.seguiTitulo}</H3>
      <P>{c.seguiParrafo}</P>
      <Link
        href={c.seguiLinkHref}
        className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
      >
        {c.seguiLinkTexto} →
      </Link>

      {/* ── Cierre ── */}
      <div className="pt-6 space-y-5 text-center">
        <H3>{c.cierreTitulo}</H3>
        <P className="text-left">{c.cierreParrafo}</P>
      </div>
    </Section>
  );
}
