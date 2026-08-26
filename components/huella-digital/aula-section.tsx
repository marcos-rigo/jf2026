'use client';

import { motion } from 'framer-motion';
import { AULA_SINTESIS } from '@/lib/huella-digital-content';

export default function AulaSection() {
  return (
    <motion.section
      id="aula"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          07 — Para el Aula
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Qué Significa Esto para el Aula</h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-slate-700 leading-relaxed">{AULA_SINTESIS.texto}</p>
      </div>
    </motion.section>
  );
}
