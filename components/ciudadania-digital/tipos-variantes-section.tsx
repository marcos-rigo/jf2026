'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import {
  DIMENSIONES,
  DIMENSIONES_ATTRIBUTION_NOTE,
  HABILIDADES_FUNDAMENTALES,
  HABILIDADES_INSTRUMENTALES,
  HABILIDADES_SOURCE,
  PERFIL_COMPETENCIAS,
  PERFIL_COMPETENCIAS_SOURCE,
  PERFIL_COMPETENCIAS_ATTRIBUTION_NOTE,
  SER_BUENA_GENTE_QUOTE,
} from '@/lib/ciudadania-digital-content';

export default function TiposVariantesSection() {
  return (
    <motion.section
      id="tipos-variantes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32 space-y-10"
    >
      <div>
        <span className="bg-[#0E7490]/10 text-[#0E7490] border border-[#0E7490]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          03 — Tipos o Variantes
        </span>
        <h2 className="text-4xl font-bold text-brand-navy mt-5 mb-3 font-display">Las 12 Dimensiones de la Ciudadanía Digital</h2>
        <p className="text-slate-600 text-lg font-sans max-w-3xl">
          El material de UTN presenta una síntesis de 10 dimensiones, sin las últimas 2.
        </p>
      </div>

      {/* Nota de atribución */}
      <div className="bg-gradient-to-r from-[#B45309]/10 to-transparent border-l-4 border-[#B45309] p-6 rounded-r-xl">
        <p className="text-[#B45309] font-medium text-sm leading-relaxed">
          <strong>⚠️ Nota de atribución:</strong> {DIMENSIONES_ATTRIBUTION_NOTE}
        </p>
      </div>

      {/* Grid de dimensiones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIMENSIONES.map((dim) => (
          <div
            key={dim.number}
            className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col gap-3 relative shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#0E7490] font-mono text-xs opacity-80">{String(dim.number).padStart(2, '0')}</span>
              {!dim.fromRibbleModel && (
                <span className="text-[0.65rem] uppercase tracking-wider text-slate-500 border border-slate-300 rounded px-1.5 py-0.5">
                  fuera del modelo Ribble
                </span>
              )}
            </div>
            <h3 className="font-bold text-brand-navy font-display leading-tight">{dim.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans flex-1">{dim.description}</p>
            <SourceCite source={dim.source} />
          </div>
        ))}
      </div>

      {/* Habilidades fundamentales/instrumentales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#6D28D9] p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Habilidades fundamentales</h3>
          <ul className="space-y-3 mb-6">
            {HABILIDADES_FUNDAMENTALES.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-sans">
                <span className="text-[#6D28D9] mt-1">■</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <SourceCite source={HABILIDADES_SOURCE} />
        </div>
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#0E7490] p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Habilidades instrumentales</h3>
          <ul className="space-y-3 mb-6">
            {HABILIDADES_INSTRUMENTALES.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-sans">
                <span className="text-[#0E7490] mt-1">■</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <SourceCite source={HABILIDADES_SOURCE} />
        </div>
      </div>

      {/* Perfil de competencias del siglo XXI */}
      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
        <h3 className="font-bold text-2xl text-brand-navy mb-2 font-display">Perfil del Ciudadano Digital — Competencias del Siglo XXI</h3>
        <div className="bg-gradient-to-r from-[#B45309]/10 to-transparent border-l-4 border-[#B45309] p-5 rounded-r-xl my-6">
          <p className="text-[#B45309] text-sm leading-relaxed">
            <strong>⚠️ Nota de atribución:</strong> {PERFIL_COMPETENCIAS_ATTRIBUTION_NOTE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {PERFIL_COMPETENCIAS.map((cat) => (
            <div key={cat.categoria} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-brand-navy mb-3 font-display">{cat.categoria}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-slate-700 bg-white border border-slate-300 rounded-full px-3 py-1 font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SourceCite source={PERFIL_COMPETENCIAS_SOURCE} className="mb-8" />

        <div className="bg-gradient-to-r from-[#047857]/10 to-transparent border-l-4 border-[#047857] p-6 rounded-r-xl">
          <p className="text-brand-navy font-medium text-lg leading-relaxed mb-3">"{SER_BUENA_GENTE_QUOTE.text}"</p>
          <SourceCite source={SER_BUENA_GENTE_QUOTE.source} />
        </div>
      </div>
    </motion.section>
  );
}
