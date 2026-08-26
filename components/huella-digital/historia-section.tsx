'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { CASO_COSTEJA, GDPR_MENCION } from '@/lib/huella-digital-content';

export default function HistoriaSection() {
  return (
    <motion.section
      id="historia"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          01 — Origen
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          El Caso Costeja: de dónde viene el "derecho al olvido"
        </h2>
        <p className="text-slate-600 text-lg">
          El mismo derecho que usás en la plantilla de la sección de recursos tiene un origen judicial concreto.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-5">
        <p className="text-slate-700 leading-relaxed">{CASO_COSTEJA.texto}</p>
        <SourceCite source={CASO_COSTEJA.source} />

        <div className="bg-slate-50 border-l-4 border-blue-400 p-5 rounded-r-xl mt-6">
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Ese fallo se formalizó después en el <strong>Reglamento General de Protección de Datos (GDPR)</strong>{' '}
            de la Unión Europea, hoy la base legal más citada en el mundo para pedir la eliminación de datos
            personales.
          </p>
          <SourceCite source={GDPR_MENCION} />
        </div>
      </div>
    </motion.section>
  );
}
