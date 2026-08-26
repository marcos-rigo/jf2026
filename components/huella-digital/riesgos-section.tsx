'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { SourceCite } from './source-cite';
import { DATA_BROKERS_QUOTE } from '@/lib/huella-digital-content';

// Contenido sin cambios — extraído tal cual de app/huella-digital/huella-digital-content.tsx.
const ERRORS = [
  {
    title: 'Ignorar la huella pasiva',
    desc: 'Creer que si no publicás, no dejás rastro. Las cookies y rastreadores invisibles compilan tu perfil constantemente.',
  },
  {
    title: 'Confiar ciegamente en la biometría',
    desc: 'Creer que la huella dactilar es infalible. Pueden ser robadas del vidrio del teléfono y no se pueden cambiar.',
  },
  {
    title: 'Falsa identidad completa',
    desc: 'Usar tus datos reales para probar servicios dudosos. Creá siempre correos alias para este tipo de registros — sobre todo si estás probando una app o plataforma educativa nueva antes de recomendarla a tu curso.',
  },
];

export default function RiesgosSection() {
  return (
    <motion.section
      id="riesgos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-4">
          06 — Problemas / Riesgos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Errores a Evitar y Data Brokers</h2>
      </div>

      <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6">
        <h3 className="font-display text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> Errores a evitar
        </h3>
        <ul className="space-y-3 text-sm text-slate-700">
          {ERRORS.map((e) => (
            <li key={e.title} className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>
                <strong>{e.title}:</strong> {e.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-3">Data Brokers</h3>
        <p className="text-slate-700 leading-relaxed mb-4">{DATA_BROKERS_QUOTE.text}</p>
        <SourceCite source={DATA_BROKERS_QUOTE.source} />
      </div>
    </motion.section>
  );
}
