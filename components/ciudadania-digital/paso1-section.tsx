'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SecurityChart } from './security-chart';

interface Paso1SectionProps {
  onNavigate: (tab: 'intro' | 'paso2' | 'paso3' | 'herramientas') => void;
}

export default function Paso1Section({ onNavigate }: Paso1SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-10">
        <span className="bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 01
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">
          Construye tu Escudo Digital
        </h2>
        <p className="text-slate-400 text-lg font-sans">
          Seguridad y Privacidad como base de tu ciudadanía.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel Instrucciones */}
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-[#00F0FF]">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl text-white font-display">Objetivo</h3>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed font-sans">
            Blindar tu identidad digital y reducir tu vulnerabilidad ante ciberataques. Tu vida digital necesita
            cerraduras modernas. Las contraseñas como "123456" son puertas abiertas.
          </p>

          <h4 className="font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm font-display">
            <span className="text-[#00F0FF]">■</span> Instrucciones
          </h4>
          <ul className="space-y-4 text-slate-300 font-sans">
            <li className="flex items-start gap-3">
              <span className="text-[#00F0FF] font-bold">1.</span>
              <span>Crea contraseñas fuertes (min. 12 caracteres, mezcla mayús/minús/números/símbolos)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00F0FF] font-bold">2.</span>
              <span>Activa la autenticación de dos factores (2FA) en tus cuentas críticas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00F0FF] font-bold">3.</span>
              <span>Revisa tus permisos de apps: cámara, micrófono, ubicación</span>
            </li>
          </ul>

          <div className="mt-8 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2 font-display">
              <span className="text-xl">💡</span> Aplicación Práctica
            </h4>
            <p className="text-sm text-slate-300 font-sans">
              Abre tu gestor de contraseñas ahora. ¿Cuántas de tus cuentas principales NO tienen 2FA? Ese es tu primer
              objetivo.
            </p>
          </div>
        </div>

        {/* Panel Gráfico y Acción */}
        <div className="flex flex-col gap-8">
          <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 rounded-3xl">
            <h4 className="font-bold text-white mb-4 font-display">Estado de Seguridad Global</h4>
            <SecurityChart />
          </div>

          <div className="bg-gradient-to-r from-[#F59E0B]/20 to-transparent border-l-4 border-[#F59E0B] p-6 rounded-r-2xl">
            <p className="text-[#F59E0B] font-medium text-sm leading-relaxed">
              <strong>⚠️ Alerta:</strong> Si tienes cuentas sin 2FA, eres 99% más vulnerable a ataques de fuerza bruta.
            </p>
          </div>
        </div>
      </div>

      {/* Ejercicio */}
      <div className="mt-8 bg-slate-800/30 border border-slate-700 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-600 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          <span className="text-3xl">🏋️</span>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg mb-1 font-display">Entrenamiento de la sección</h4>
          <p className="text-slate-400 font-sans">
            Haz una limpieza digital de 5 min. Ve a los permisos de apps en tu celular y revoca acceso a
            cámara/micrófono a 3 aplicaciones que no lo necesiten (ej. juegos offline).
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          onClick={() => onNavigate('paso2')}
          className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 rounded-full font-medium transition-all border border-slate-600 hover:border-[#8B5CF6] font-display"
        >
          Siguiente Fase ➔
        </Button>
      </div>
    </motion.section>
  );
}
