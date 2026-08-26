'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { ACTIVA_PASIVA_QUOTE, DEVICE_FINGERPRINT_QUOTE } from '@/lib/huella-digital-content';

export default function TiposVariantesSection() {
  return (
    <motion.section
      id="tipos-variantes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          03 — Tipos o Variantes
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Los Dos Tipos, y un Concepto Relacionado</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-blue-500">
          <h3 className="font-bold text-slate-900 mb-3">Huella activa</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Todo lo que compartís conscientemente: publicaciones, correos enviados, formularios completados.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-cyan-400">
          <h3 className="font-bold text-slate-900 mb-3">Huella pasiva</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Datos que se registran sin tu conocimiento explícito: cookies, rastreadores, historial de navegación.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <SourceCite source={ACTIVA_PASIVA_QUOTE.source} />
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 mt-6">
        <h3 className="font-bold text-slate-900 mb-3">Un concepto relacionado: el "device fingerprint"</h3>
        <p className="text-slate-700 leading-relaxed mb-4">{DEVICE_FINGERPRINT_QUOTE.text}</p>
        <SourceCite source={DEVICE_FINGERPRINT_QUOTE.source} />
      </div>
    </motion.section>
  );
}
