'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { VENTAJAS, VENTAJAS_SOURCE } from '@/lib/ciudadania-digital-content';

const ICONS = ['🌐', '💬', '🧩', '🎨'];

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
      <div className="mb-10">
        <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          05 — Ventajas
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">Lo Positivo de la Vida Digital</h2>
        <p className="text-slate-400 text-lg font-sans">Oportunidades reales, no solo riesgos a evitar.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {VENTAJAS.map((ventaja, idx) => (
          <div
            key={ventaja}
            className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#10B981] p-6 rounded-3xl text-center flex flex-col items-center gap-3"
          >
            <span className="text-3xl">{ICONS[idx % ICONS.length]}</span>
            <p className="text-white font-bold font-display">{ventaja}</p>
          </div>
        ))}
      </div>
      <SourceCite source={VENTAJAS_SOURCE} />
    </motion.section>
  );
}
