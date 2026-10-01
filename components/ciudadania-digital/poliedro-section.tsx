'use client';

import { Section, P, H3, Note, Callout, TablaDimensiones, useContenido } from './ui';
import { DIMENSIONES } from '@/lib/ciudadania-digital-content';

function NivelEtiqueta({ children }: { children: string }) {
  return (
    <p className="inline-block rounded-full bg-brand-navy px-3 py-1 text-xs font-mono font-semibold tracking-wide text-white">
      {children}
    </p>
  );
}

// Un solo bloque de navegación (#poliedro) con tres niveles internos: Recordar, Comprender, Aplicar.
export default function PoliedroSection() {
  const c = useContenido().poliedro;
  const { nivel1, nivel2, nivel3 } = c;

  return (
    <Section id="poliedro" number="05" title={c.titulo}>
      {/* ── Nivel 1: Recordar ── */}
      <NivelEtiqueta>{nivel1.etiqueta}</NivelEtiqueta>
      <H3>{nivel1.fraseTitulo}</H3>
      <P>{nivel1.frase}</P>
      <ul className="space-y-2">
        {nivel1.ideas.map((i) => (
          <li key={i.termino} className="rounded-xl bg-white border border-slate-200 p-4 leading-relaxed text-slate-700">
            <strong className="text-brand-navy">{i.termino}:</strong> {i.texto}
          </li>
        ))}
      </ul>

      <H3>{nivel1.dimensionesTitulo}</H3>
      <P>{nivel1.dimensionesIntro}</P>
      <ol className="space-y-2">
        {DIMENSIONES.map((d, i) => (
          <li key={d.id} className="flex gap-3 rounded-xl bg-white border border-slate-200 p-4">
            <span className="font-display font-bold text-brand-blue w-6 shrink-0">{i + 1}</span>
            <span className="leading-relaxed text-slate-700">
              <strong className="text-brand-navy">{d.nombre}</strong> — {d.descripcion}
            </span>
          </li>
        ))}
      </ol>

      <H3>{nivel1.fuerzasTitulo}</H3>
      <P>{nivel1.fuerzas}</P>

      {/* ── Nivel 2: Comprender ── */}
      <div className="pt-6">
        <NivelEtiqueta>{nivel2.etiqueta}</NivelEtiqueta>
      </div>
      {nivel2.bloques.map((b) => (
        <div key={b.subtitulo} className="space-y-3">
          <H3>{b.subtitulo}</H3>
          <P>{b.texto}</P>
        </div>
      ))}

      <Callout title={nivel2.noEsTitulo} tone="pink">
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          {nivel2.noEs.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Callout>

      <H3>{nivel2.bloqueFinal.subtitulo}</H3>
      <P>{nivel2.bloqueFinal.texto}</P>

      <H3>{nivel2.ideaTitulo}</H3>
      <p className="rounded-2xl bg-brand-navy p-6 font-display text-lg md:text-xl leading-snug text-white">{nivel2.idea}</p>

      <Callout title={nivel2.datoDecisionTitulo}>
        <p className="text-slate-700">{nivel2.datoDecision}</p>
      </Callout>

      {/* ── Nivel 3: Aplicar ── */}
      <div className="pt-6">
        <NivelEtiqueta>{nivel3.etiqueta}</NivelEtiqueta>
      </div>
      <H3>{nivel3.tablaTitulo}</H3>
      <TablaDimensiones
        cols={[nivel3.colDimension, nivel3.colLinea, nivel3.colEnlace]}
        filas={DIMENSIONES.map((d) => ({ nombre: d.nombre, texto: d.linea, href: d.href }))}
        enlaceTexto={nivel3.enlaceTexto}
      />

      <H3>{nivel3.lenteTitulo}</H3>
      <P>{nivel3.lenteIntro}</P>
      <ol className="space-y-2">
        {nivel3.lente.map((l, i) => (
          <li key={l} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-4">
            <span className="font-display font-bold text-brand-pink text-xl leading-none">{i + 1}</span>
            <span className="leading-relaxed text-slate-700">{l}</span>
          </li>
        ))}
      </ol>
      <P>{nivel3.lenteCierre}</P>

      <Note>{c.notaPie}</Note>
    </Section>
  );
}
