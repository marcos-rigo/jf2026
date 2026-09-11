'use client';

import { motion } from 'framer-motion';
import { AULA_SINTESIS } from '@/lib/huella-digital-content';
import { resolveTexto, type AudienciaTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

const TITULO_TEXTO: AudienciaTexto = {
  docentes: 'Qué Significa Esto para el Aula',
  familias: 'Qué Significa Esto en Casa',
};

export default function AulaSection() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const titulo = resolveTexto(TITULO_TEXTO, audienciaActual, 'docentes');
  const texto = resolveTexto(AULA_SINTESIS.texto, audienciaActual, 'docentes');

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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">{titulo}</h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-slate-700 leading-relaxed">{texto}</p>
      </div>
    </motion.section>
  );
}
