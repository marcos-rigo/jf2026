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
        <span className="bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          03 — Tipos o Variantes
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">Las 12 Dimensiones de la Ciudadanía Digital</h2>
        <p className="text-slate-400 text-lg font-sans max-w-3xl">
          El material de UTN presenta una síntesis de 10 dimensiones, sin las últimas 2.
        </p>
      </div>

      {/* Nota de atribución */}
      <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent border-l-4 border-[#F59E0B] p-6 rounded-r-xl">
        <p className="text-[#F59E0B] font-medium text-sm leading-relaxed">
          <strong>⚠️ Nota de atribución:</strong> {DIMENSIONES_ATTRIBUTION_NOTE}
        </p>
      </div>

      {/* Grid de dimensiones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIMENSIONES.map((dim) => (
          <div
            key={dim.number}
            className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-6 rounded-3xl flex flex-col gap-3 relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#00F0FF] font-mono text-xs opacity-70">{String(dim.number).padStart(2, '0')}</span>
              {!dim.fromRibbleModel && (
                <span className="text-[0.65rem] uppercase tracking-wider text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">
                  fuera del modelo Ribble
                </span>
              )}
            </div>
            <h3 className="font-bold text-white font-display leading-tight">{dim.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans flex-1">{dim.description}</p>
            <SourceCite source={dim.source} />
          </div>
        ))}
      </div>

      {/* Habilidades fundamentales/instrumentales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#8B5CF6] p-8 rounded-3xl">
          <h3 className="font-bold text-xl text-white mb-4 font-display">Habilidades fundamentales</h3>
          <ul className="space-y-3 mb-6">
            {HABILIDADES_FUNDAMENTALES.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-sans">
                <span className="text-[#8B5CF6] mt-1">■</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <SourceCite source={HABILIDADES_SOURCE} />
        </div>
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#00F0FF] p-8 rounded-3xl">
          <h3 className="font-bold text-xl text-white mb-4 font-display">Habilidades instrumentales</h3>
          <ul className="space-y-3 mb-6">
            {HABILIDADES_INSTRUMENTALES.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-sans">
                <span className="text-[#00F0FF] mt-1">■</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <SourceCite source={HABILIDADES_SOURCE} />
        </div>
      </div>

      {/* Perfil de competencias del siglo XXI */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl">
        <h3 className="font-bold text-2xl text-white mb-2 font-display">Perfil del Ciudadano Digital — Competencias del Siglo XXI</h3>
        <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent border-l-4 border-[#F59E0B] p-5 rounded-r-xl my-6">
          <p className="text-[#F59E0B] text-sm leading-relaxed">
            <strong>⚠️ Nota de atribución:</strong> {PERFIL_COMPETENCIAS_ATTRIBUTION_NOTE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {PERFIL_COMPETENCIAS.map((cat) => (
            <div key={cat.categoria} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-3 font-display">{cat.categoria}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-slate-300 bg-slate-800/70 border border-slate-700 rounded-full px-3 py-1 font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SourceCite source={PERFIL_COMPETENCIAS_SOURCE} className="mb-8" />

        <div className="bg-gradient-to-r from-[#10B981]/10 to-transparent border-l-4 border-[#10B981] p-6 rounded-r-xl">
          <p className="text-white font-medium text-lg leading-relaxed mb-3">"{SER_BUENA_GENTE_QUOTE.text}"</p>
          <SourceCite source={SER_BUENA_GENTE_QUOTE.source} />
        </div>
      </div>
    </motion.section>
  );
}
