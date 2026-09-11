'use client';

import { motion } from 'framer-motion';
import { AULA_SINTESIS, AULA_TITULO } from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

export default function AulaSection() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const titulo = resolveTexto(AULA_TITULO, audienciaActual, 'docentes');
  const intro = resolveTexto(AULA_SINTESIS.intro, audienciaActual, 'docentes');
  const cierre = resolveTexto(AULA_SINTESIS.cierre, audienciaActual, 'docentes');

  return (
    <motion.section
      id="aula"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10">
        <span className="bg-[#6D28D9]/10 text-[#6D28D9] border border-[#6D28D9]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          07 — {titulo}
        </span>
        <h2 className="text-4xl font-bold text-brand-navy mt-5 mb-3 font-display">Qué Significa Esto para el Aula</h2>
      </div>

      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl space-y-6 shadow-sm">
        <p className="text-slate-700 leading-relaxed font-sans">{intro}</p>
        <p className="text-slate-700 leading-relaxed font-sans">{cierre}</p>
      </div>
    </motion.section>
  );
}
