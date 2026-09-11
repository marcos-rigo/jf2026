'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SourceCite } from './source-cite';
import { HERO_QUOTES, HERO_TEXTO } from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

const INFOGRAFIA_PATH = '/weekly-content/2026-W19/infografiaSemanal.svg';

// Las dos frases resaltadas del párrafo destacado son literales idénticos en
// ambas variantes de audiencia — se resaltan por texto en vez de hardcodear
// el <strong> por audiencia, para no perder el énfasis visual original.
const PARRAFO_DESTACADO_TERMS = ['"piloto automático"', 'Ciudadanía Digital'];

function withBoldTerms(text: string, terms: string[]) {
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <strong key={i} className="font-bold text-brand-navy">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function HeroSection() {
  const [definicion, sintesis, porQueImporta] = HERO_QUOTES;
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const tituloLinea1 = resolveTexto(HERO_TEXTO.tituloLinea1, audienciaActual, 'docentes');
  const tituloDestacado = resolveTexto(HERO_TEXTO.tituloDestacado, audienciaActual, 'docentes');
  const parrafo1 = resolveTexto(HERO_TEXTO.parrafo1, audienciaActual, 'docentes');
  const parrafoDestacado = resolveTexto(HERO_TEXTO.parrafoDestacado, audienciaActual, 'docentes');
  const parrafoCierre = resolveTexto(HERO_TEXTO.parrafoCierre, audienciaActual, 'docentes');
  const boton = resolveTexto(HERO_TEXTO.boton, audienciaActual, 'docentes');

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8 scroll-mt-28 md:scroll-mt-32"
    >
      {/* ── Título de la temática ── */}
      <div>
        <span className="bg-[#0E7490]/10 text-[#0E7490] border border-[#0E7490]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          00 — Inicio
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-brand-navy mt-5 tracking-tight font-display">
          Ciudadanía <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] to-[#6D28D9]">Digital</span>
        </h1>
      </div>

      {/* ── Definición principal — bien visible, arriba de todo ── */}
      <div className="bg-white border border-[#0E7490]/20 border-t-2 border-t-[#0E7490] p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E7490] opacity-5 blur-[100px] rounded-full pointer-events-none" />
        <h3 className="font-bold text-[#0E7490] font-display mb-4 uppercase tracking-wide text-sm">Definición principal</h3>
        <blockquote className="text-brand-navy text-xl md:text-2xl leading-relaxed font-sans italic border-l-4 border-[#0E7490] pl-6 mb-5">
          "{definicion.text}"
        </blockquote>
        <SourceCite source={definicion.source} />
      </div>

      {/* ── Infografía general ── */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#0E7490]/10 via-transparent to-[#6D28D9]/5 blur-2xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-[0_30px_80px_rgba(0,50,87,0.12),0_0_0_1px_rgba(14,116,144,0.06)]">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white border border-slate-200 rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0E7490] animate-pulse shrink-0" />
                <span className="text-xs text-slate-500 font-mono truncate">infografia — Ciudadanía Digital</span>
              </div>
            </div>
            <div className="w-16 shrink-0" />
          </div>
          <div className="bg-white">
            <img src={INFOGRAFIA_PATH} alt="Infografía de Ciudadanía Digital" className="w-full h-auto block" />
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0E7490]/60 to-transparent" />
        </div>
      </div>

      {/* ── Texto introductorio + concepto ── */}
      <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E7490] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight font-display">
          {tituloLinea1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] to-[#6D28D9]">
            {tituloDestacado}
          </span>
        </h2>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl font-sans">
          {parrafo1}
        </p>

        <div className="bg-gradient-to-r from-[#0E7490]/10 to-transparent border-l-4 border-[#0E7490] p-6 rounded-r-xl my-8 max-w-3xl">
          <p className="text-[#0E7490] font-medium text-lg leading-relaxed">
            {withBoldTerms(parrafoDestacado, PARRAFO_DESTACADO_TERMS)}
          </p>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl font-sans">
          {parrafoCierre}
        </p>

        <Button
          onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-gradient-to-r from-[#0E7490] to-blue-600 hover:from-blue-600 hover:to-[#0E7490] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-3 hover:shadow-[0_0_15px_rgba(14,116,144,0.4)]"
        >
          {boton} <span>➔</span>
        </Button>
      </div>

      {/* ── Concepto: síntesis breve, por qué importa (la definición principal ya está arriba) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Síntesis breve', text: sintesis.text, source: sintesis.source, color: '#6D28D9' },
          { title: 'Por qué importa', text: porQueImporta.text, source: porQueImporta.source, color: '#B45309' },
        ].map((block) => (
          <div
            key={block.title}
            className="bg-white border border-slate-200 border-t-2 p-6 rounded-3xl flex flex-col gap-4 shadow-sm"
            style={{ borderTopColor: block.color }}
          >
            <h3 className="font-bold text-brand-navy font-display" style={{ color: block.color }}>
              {block.title}
            </h3>
            <blockquote className="text-slate-700 text-sm leading-relaxed font-sans italic border-l-2 border-slate-300 pl-4">
              "{block.text}"
            </blockquote>
            <SourceCite source={block.source} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
