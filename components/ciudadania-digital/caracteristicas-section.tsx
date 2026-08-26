'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { ACTITUDES, ACTITUDES_SOURCE } from '@/lib/ciudadania-digital-content';

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
      <div className="mb-10">
        <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          02 — Características
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">8 Actitudes de un Buen Ciudadano Digital</h2>
        <p className="text-slate-400 text-lg font-sans">Funcionan directamente como rúbrica de aula.</p>
      </div>

      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl">
        <ol className="space-y-4">
          {ACTITUDES.map((actitud, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                {idx + 1}
              </span>
              <span className="text-slate-300 leading-relaxed font-sans pt-1">{actitud}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 pt-6 border-t border-slate-800/50">
          <SourceCite source={ACTITUDES_SOURCE} />
        </div>
      </div>
    </motion.section>
  );
}
