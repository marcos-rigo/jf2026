'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { ACTIVA_PASIVA_QUOTE } from '@/lib/huella-digital-content';

export default function CaracteristicasSection() {
  return (
    <motion.section
      id="caracteristicas"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          02 — Características
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
          Huella Activa y Huella Pasiva
        </h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <blockquote className="text-slate-800 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-5 mb-4">
          "{ACTIVA_PASIVA_QUOTE.text}"
        </blockquote>
        <SourceCite source={ACTIVA_PASIVA_QUOTE.source} />
      </div>
    </motion.section>
  );
}
