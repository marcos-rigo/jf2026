'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SourceCite } from './source-cite';
import {
  RIESGOS_DIRECTOS,
  RIESGOS_DIRECTOS_SOURCE,
  RIESGOS_AMPLIADOS,
  RIESGOS_AMPLIADOS_SOURCE,
  ICDL_QUOTE,
  SENALES_FRAUDE,
  SENALES_FRAUDE_SOURCE,
  CIBERSEGURIDAD_PERSONAS_QUOTE,
  INDEC_QUOTE,
} from '@/lib/ciudadania-digital-content';

export default function RiesgosSection() {
  return (
    <motion.section
      id="riesgos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32 space-y-8"
    >
      <div>
        <span className="bg-[#B91C1C]/10 text-[#B91C1C] border border-[#B91C1C]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          06 — Problemas / Riesgos
        </span>
        <h2 className="text-4xl font-bold text-brand-navy mt-5 mb-3 font-display">Riesgos Asociados</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#B91C1C] p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Riesgos directos</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {RIESGOS_DIRECTOS.map((r) => (
              <span key={r} className="text-sm text-[#B91C1C] bg-[#B91C1C]/10 border border-[#B91C1C]/30 rounded-full px-3 py-1.5 font-sans">
                {r}
              </span>
            ))}
          </div>
          <SourceCite source={RIESGOS_DIRECTOS_SOURCE} />
        </div>

        <div className="bg-white border border-slate-200 border-t-2 border-t-[#B45309] p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Riesgos ampliados</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {RIESGOS_AMPLIADOS.map((r) => (
              <span key={r} className="text-sm text-[#B45309] bg-[#B45309]/10 border border-[#B45309]/30 rounded-full px-3 py-1.5 font-sans">
                {r}
              </span>
            ))}
          </div>
          <SourceCite source={RIESGOS_AMPLIADOS_SOURCE} />
        </div>
      </div>

      {/* Sobreestimación de habilidades digitales — ICDL */}
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
        <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Sobreestimación de habilidades digitales</h3>
        <blockquote className="text-slate-700 leading-relaxed font-sans italic border-l-2 border-slate-300 pl-4 mb-4">
          "{ICDL_QUOTE.text}"
        </blockquote>
        <SourceCite source={ICDL_QUOTE.source} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Señales de fraude */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Señales de alerta de fraude digital</h3>
          <ul className="space-y-2 mb-4">
            {SENALES_FRAUDE.map((s) => (
              <li key={s} className="text-slate-700 text-sm font-sans flex items-start gap-2">
                <span className="text-[#B45309]">⚠</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mb-4 font-sans">
            Desarrollo completo en{' '}
            <Link href="/estafas-digitales" className="text-[#0E7490] hover:underline">
              la temática Estafas Digitales
            </Link>
            .
          </p>
          <SourceCite source={SENALES_FRAUDE_SOURCE} />
        </div>

        {/* Ciberseguridad centrada en las personas */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <h3 className="font-bold text-xl text-brand-navy mb-4 font-display">Ciberseguridad centrada en las personas</h3>
          <p className="text-slate-700 text-sm leading-relaxed font-sans mb-4">{CIBERSEGURIDAD_PERSONAS_QUOTE.text}</p>
          <SourceCite source={CIBERSEGURIDAD_PERSONAS_QUOTE.source} />
        </div>
      </div>

      {/* Datos de contexto argentino */}
      <div className="bg-gradient-to-r from-[#0E7490]/10 to-transparent border-l-4 border-[#0E7490] p-6 rounded-r-xl">
        <p className="text-brand-navy font-medium leading-relaxed mb-3">{INDEC_QUOTE.text}</p>
        <SourceCite source={INDEC_QUOTE.source} />
      </div>
    </motion.section>
  );
}
