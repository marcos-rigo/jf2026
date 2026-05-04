'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Paso2SectionProps {
  onNavigate: (tab: 'intro' | 'paso1' | 'paso3' | 'herramientas') => void;
}

export default function Paso2Section({ onNavigate }: Paso2SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-10">
        <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 02
        </span>
        <h2 className="text-3xl font-bold text-white mt-5 mb-2 font-display">
          Aplica la "Netiqueta"
        </h2>
        <p className="text-slate-400 text-lg font-sans">
          Lidera la convivencia en tus interacciones diarias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Objetivo e Instrucciones */}
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 rounded-3xl md:col-span-2 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8B5CF6] opacity-10 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 text-[#8B5CF6] relative z-10">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl text-white font-display">Objetivo</h3>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed font-sans">
            Interactuar en línea con empatía, evitando malentendidos y construyendo una huella digital positiva. La
            <em> Netiqueta</em> son las normas no escritas del ecosistema digital. Tu texto es tu reputación.
          </p>

          <h4 className="font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm font-display">
            <span className="text-[#8B5CF6]">■</span> Protocolos de comunicación
          </h4>
          <ul className="space-y-4 text-slate-300 font-sans">
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">1.</span>
              <span>Lee antes de responder. Evita malinterpretaciones por falta de contexto.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">2.</span>
              <span>
                Sé respetuoso aunque no estés de acuerdo. Los debates constructivos no son ataques personales.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">3.</span>
              <span>Evita el SPAM y la autopromoción excesiva. Aporta valor.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">4.</span>
              <span>Verifica fuentes antes de compartir noticias o información sensible.</span>
            </li>
          </ul>
        </div>

        {/* Ejemplo visual */}
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-4 border-t-[#8B5CF6] p-6 rounded-3xl h-full">
            <h4 className="text-[#8B5CF6] font-bold text-lg mb-3 font-display">Ejemplo de Buen Comentario</h4>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700 text-sm">
              <p className="text-slate-300 italic font-sans">
                "Excelente punto. No había considerado esa perspectiva. ¿Podrías compartir tus fuentes? Estoy
                interesado en aprender más."
              </p>
            </div>
            <div className="mt-4 text-xs text-slate-400 font-sans">
              <p className="font-bold text-slate-300 mb-1">✓ ¿Por qué funciona?</p>
              <p>Es constructivo, abierto, sin ego y busca aprender.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/30 p-6 rounded-2xl">
          <h4 className="text-[#00F0FF] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🔍</span> Auditoría de Huella
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            Busca tu nombre en Google (Modo Incógnito). Revisa imágenes y resultados de la primera página. Esa es tu
            huella digital pública actual. ¿Refleja al profesional que quieres ser?
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 p-6 rounded-2xl">
          <h4 className="text-[#8B5CF6] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🌱</span> Aporte de Valor
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            Escribe hoy un mensaje de agradecimiento o un comentario constructivo en el perfil de un colega o creador
            que valores. Construye red.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button
          onClick={() => onNavigate('paso1')}
          className="text-slate-500 hover:text-white font-medium transition-colors font-mono text-sm"
          variant="ghost"
        >
          <span>←</span> Volver
        </Button>
        <Button
          onClick={() => onNavigate('paso3')}
          className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 rounded-full font-medium transition-all border border-slate-600 hover:border-[#F59E0B] font-display"
        >
          Siguiente Fase ➔
        </Button>
      </div>
    </motion.section>
  );
}
