'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface IntroSectionProps {
  onNavigate: (tab: 'paso1' | 'paso2' | 'paso3' | 'herramientas') => void;
}

export default function IntroSection({ onNavigate }: IntroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
          Toma el Control de tu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
            Vida en Línea
          </span>
        </h2>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl font-sans">
          ¿Sientes que la tecnología a veces te controla más a ti que tú a ella? Entre desinformación constante,
          riesgos de privacidad, sesgos de la Inteligencia Artificial y debates acalorados en redes sociales,
          navegar por internet puede sentirse como caminar por un campo minado.
        </p>

        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-6 rounded-r-xl my-8 max-w-3xl">
          <p className="text-[#00F0FF] font-medium text-lg leading-relaxed">
            El problema es que a menudo interactuamos en el mundo digital en <strong className="font-bold text-white">"piloto automático"</strong>.
            La <strong className="font-bold text-white">Ciudadanía Digital</strong> no es solo saber usar un dispositivo; es tener las habilidades
            para protegerte, convivir con respeto y aprovechar la red para tu desarrollo.
          </p>
        </div>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl font-sans">
          En esta plataforma, dejamos la teoría de lado. Te guiaremos paso a paso para que audites tu huella en línea,
          protejas tus datos y aprendas a detectar información falsa como un profesional.
        </p>

        <Button
          onClick={() => onNavigate('paso1')}
          className="bg-gradient-to-r from-[#00F0FF] to-blue-600 hover:from-blue-500 hover:to-[#00F0FF] text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-3 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          Iniciar Protocolo <span>➔</span>
        </Button>
      </div>
    </motion.section>
  );
}
