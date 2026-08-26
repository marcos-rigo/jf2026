'use client';

import { RIESGOS } from '@/lib/alfabetizacion-digital-content';
import { AlertTriangle, EyeOff, Users, AlertOctagon } from 'lucide-react';

const riskIconsMap = [
  EyeOff,        // La ilusión del acceso
  Users,         // Brechas interseccionales
  AlertTriangle, // Desinformación masiva
  AlertOctagon,  // Invisibilidad de minorías
];

export default function RiesgosSection() {
  return (
    <section id="riesgos" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-rose-700 font-mono text-sm uppercase tracking-wider font-semibold">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>06 · Riesgos, Desventajas y Desafíos Estructurales</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
          Barreras Críticas y Falacias en la Agenda Digital
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Garantizar dispositivos o cableado no equivale a cerrar brechas si no se aborda el andamiaje cognitivo y las desigualdades de género, edad y territorio.
        </p>
      </div>

      {/* Grid de Riesgos Estructurales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RIESGOS.map((riesgo, idx) => {
          const Icon = riskIconsMap[idx] || AlertTriangle;
          return (
            <div
              key={riesgo.titulo}
              className="p-6 md:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-rose-300 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[0.7rem] font-mono text-rose-900 font-bold px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200">
                  Reto 0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-rose-700 transition-colors">
                {riesgo.titulo}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                {riesgo.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Alerta de Política Pública: La Ilusión del Acceso */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-rose-50 via-white to-amber-50/40 border border-rose-200/80 shadow-sm space-y-3">
        <h4 className="text-base font-bold text-rose-950 flex items-center gap-2 font-display">
          <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0" />
          Advertencia para la Gestión Pública: Confundir Infraestructura con Alfabetización
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          Distribuir notebooks o instalar antenas 5G resuelve únicamente el Nivel 1 de la brecha. Sin programas de capacitación en pensamiento crítico, evaluación informacional y resguardo socioemocional, la tecnología tiende a amplificar la desigualdad en lugar de reducirla.
        </p>
      </div>
    </section>
  );
}
