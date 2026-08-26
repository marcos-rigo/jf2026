'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SourceCite } from './source-cite';
import { REPUTACION_QUOTE, VENTAJAS_ADICIONALES } from '@/lib/huella-digital-content';

export default function VentajasSection() {
  return (
    <motion.section
      id="ventajas"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
          05 — Ventajas
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">No Solo un Riesgo: También Reputación</h2>
        <p className="text-slate-600 text-lg mt-2">La huella digital cuidada es un diferencial profesional a favor.</p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 mb-6">
        <p className="text-slate-700 leading-relaxed mb-4">{REPUTACION_QUOTE.text}</p>
        <SourceCite source={REPUTACION_QUOTE.source} />
      </div>

      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
        <h3 className="font-bold text-emerald-700 mb-4">Otros puntos a favor</h3>
        <ul className="space-y-3">
          {VENTAJAS_ADICIONALES.map((v) => (
            <li key={v} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
