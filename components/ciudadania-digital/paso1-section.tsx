'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SecurityChart } from './security-chart';
import { SourceCite } from './source-cite';
import { ZERO_TRUST_QUOTE, CIBERHIGIENE_QUOTE, PASO1_TEXTO } from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

export default function Paso1Section() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const t = (campo: keyof typeof PASO1_TEXTO) => resolveTexto(PASO1_TEXTO[campo], audienciaActual, 'docentes');

  return (
    <motion.section
      id="seguridad"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10">
        <span className="bg-[#0E7490]/10 text-[#0E7490] border border-[#0E7490]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 01
        </span>
        <h2 className="text-4xl font-bold text-brand-navy mt-5 mb-3 font-display">
          {t('titulo')}
        </h2>
        <p className="text-slate-600 text-lg font-sans">
          {t('subtitulo')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel Instrucciones */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-[#0E7490]">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl text-brand-navy font-display">Objetivo</h3>
          </div>
          <p className="text-slate-700 mb-8 leading-relaxed font-sans">
            {t('objetivo')}
          </p>

          <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2 uppercase tracking-wider text-sm font-display">
            <span className="text-[#0E7490]">■</span> Instrucciones
          </h4>
          <ul className="space-y-4 text-slate-700 font-sans">
            <li className="flex items-start gap-3">
              <span className="text-[#0E7490] font-bold">1.</span>
              <span>{t('instruccion1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0E7490] font-bold">2.</span>
              <span>{t('instruccion2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0E7490] font-bold">3.</span>
              <span>{t('instruccion3')}</span>
            </li>
          </ul>

          <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2 font-display">
              <span className="text-xl">💡</span> Aplicación Práctica
            </h4>
            <p className="text-sm text-slate-700 font-sans">
              {t('aplicacionPractica')}
            </p>
          </div>
        </div>

        {/* Panel Gráfico y Acción */}
        <div className="flex flex-col gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <h4 className="font-bold text-brand-navy mb-4 font-display">{t('graficoTitulo')}</h4>
            <SecurityChart />
          </div>

          <div className="bg-gradient-to-r from-[#B45309]/10 to-transparent border-l-4 border-[#B45309] p-6 rounded-r-2xl">
            <p className="text-[#B45309] font-medium text-sm leading-relaxed">
              <strong>⚠️ Alerta:</strong> {t('alerta')}
            </p>
          </div>
        </div>
      </div>

      {/* Conceptos avanzados: Zero Trust y Ciberhigiene */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#0E7490] p-8 rounded-3xl shadow-sm">
          <h4 className="font-bold text-brand-navy text-lg mb-3 font-display">Confianza Cero (Zero Trust)</h4>
          <p className="text-slate-700 text-sm leading-relaxed font-sans mb-4">{ZERO_TRUST_QUOTE.text}</p>
          <SourceCite source={ZERO_TRUST_QUOTE.source} />
        </div>
        <div className="bg-white border border-slate-200 border-t-2 border-t-[#6D28D9] p-8 rounded-3xl shadow-sm">
          <h4 className="font-bold text-brand-navy text-lg mb-3 font-display">Ciberhigiene</h4>
          <p className="text-slate-700 text-sm leading-relaxed font-sans mb-4">{CIBERHIGIENE_QUOTE.text}</p>
          <SourceCite source={CIBERHIGIENE_QUOTE.source} />
        </div>
      </div>

      {/* Ejercicio */}
      <div className="mt-8 bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
          <span className="text-3xl">🏋️</span>
        </div>
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1 font-display">{t('finalTitulo')}</h4>
          <p className="text-slate-600 font-sans">
            {t('finalTexto')}
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          onClick={() => document.getElementById('netiqueta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-white hover:bg-slate-50 text-brand-navy py-3 px-8 rounded-full font-medium transition-all border border-slate-300 hover:border-[#6D28D9] font-display"
        >
          ↓ Ver Netiqueta
        </Button>
      </div>
    </motion.section>
  );
}
