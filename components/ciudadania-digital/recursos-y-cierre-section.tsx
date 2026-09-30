'use client';

import { Section, P, H3, Note, TextArea, TablaDimensiones, useContenido } from './ui';
import { useCiudadaniaMadreStore } from '@/lib/ciudadania-digital-madre-store';
import { DIMENSIONES } from '@/lib/ciudadania-digital-content';

export default function RecursosYCierreSection() {
  const c = useContenido().cierre;
  const familiaridad = useCiudadaniaMadreStore((s) => s.familiaridad);
  const definicionPropia = useCiudadaniaMadreStore((s) => s.definicionPropia);
  const cierreDefinicion = useCiudadaniaMadreStore((s) => s.cierreDefinicion);
  const cierreDimensionNueva = useCiudadaniaMadreStore((s) => s.cierreDimensionNueva);
  const setCierre = useCiudadaniaMadreStore((s) => s.setCierre);
  const t = c.tarjeta;

  return (
    <Section id="recursos-y-cierre" number="10" title={c.titulo}>
      {/* ── ¿Qué cambió? ── */}
      <H3>{c.cambioTitulo}</H3>
      <P>{c.cambioInstruccion}</P>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { label: c.tuFamiliaridad, valor: familiaridad },
          { label: c.tuDefinicion, valor: definicionPropia },
        ].map((r) => (
          <div key={r.label} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{r.label}</p>
            <p className={`leading-relaxed whitespace-pre-wrap ${r.valor ? 'text-slate-800' : 'italic text-slate-500'}`}>
              {r.valor || c.sinRespuesta}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="font-medium text-slate-800">1. {c.pregunta1}</p>
        <TextArea value={cierreDefinicion ?? ''} onChange={(v) => setCierre('cierreDefinicion', v)} placeholder={c.placeholder} rows={3} label={c.pregunta1} />
      </div>
      <div className="space-y-2">
        <p className="font-medium text-slate-800">2. {c.pregunta2}</p>
        <TextArea
          value={cierreDimensionNueva ?? ''}
          onChange={(v) => setCierre('cierreDimensionNueva', v)}
          placeholder={c.placeholder}
          rows={2}
          label={c.pregunta2}
        />
      </div>
      <Note>{c.cambioNota}</Note>

      {/* ── Para llevarte: tarjeta (bloque visual, sin exportación a archivo) ── */}
      <H3>{c.llevarteTitulo}</H3>
      <article className="rounded-3xl bg-brand-navy text-white p-6 md:p-8 shadow-lg space-y-5">
        <h4 className="font-display text-2xl font-bold">{t.titulo}</h4>
        <p className="leading-relaxed text-white/90">{t.definicion}</p>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light-blue mb-2">{t.poliedroEtiqueta}</p>
          <p className="leading-relaxed text-white/90">{DIMENSIONES.map((d) => d.nombre).join(' · ')}.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light-blue mb-2">{t.lenteEtiqueta}</p>
          <ol className="space-y-1.5">
            {t.lente.map((l, i) => (
              <li key={l.fase} className="leading-relaxed text-white/90">
                <span className="font-bold text-white">
                  {i + 1}. {l.fase}
                </span>{' '}
                — {l.texto}
              </li>
            ))}
          </ol>
        </div>
        <p className="border-t border-white/20 pt-4 font-display text-lg font-semibold">{t.lema}</p>
      </article>

      {/* ── Mapa de competencias ── */}
      <H3>{c.mapaTitulo}</H3>
      <TablaDimensiones
        cols={[c.mapaColDimension, c.mapaColCapacidad, c.mapaColEnlace]}
        filas={DIMENSIONES.map((d) => ({ nombre: d.nombre, texto: d.capacidad }))}
        enlaceTexto={c.mapaEnlaceTexto}
      />

      {/* ── Marco normativo y lecturas (texto simple, sin fuentes hasta verificarlas) ── */}
      <H3>{c.normativoTitulo}</H3>
      <P>{c.normativo}</P>
      <H3>{c.leerTitulo}</H3>
      <P>{c.leer}</P>

      {/* ── Cierre ── */}
      <div className="pt-6 space-y-5 text-center">
        <H3>{c.cierreTitulo}</H3>
        <P className="text-left">{c.cierreParrafo}</P>
        <p className="font-display text-2xl md:text-3xl font-bold leading-snug text-brand-navy">{c.cierreFrase}</p>
        <P className="text-left">{c.cierreFinal}</P>
      </div>
    </Section>
  );
}
