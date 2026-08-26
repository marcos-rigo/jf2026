'use client';

import { motion } from 'framer-motion';
import { AULA_SINTESIS } from '@/lib/ciudadania-digital-content';

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
      <div className="mb-10">
        <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          07 — Para el Aula
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">Qué Significa Esto para el Aula</h2>
      </div>

      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl space-y-6">
        <p className="text-slate-300 leading-relaxed font-sans">{AULA_SINTESIS.intro}</p>
        <p className="text-slate-300 leading-relaxed font-sans">{AULA_SINTESIS.cierre}</p>
      </div>
    </motion.section>
  );
}
