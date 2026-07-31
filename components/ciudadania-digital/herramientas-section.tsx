'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ErrorsChart } from './errors-chart';
import { ChevronDown, Check } from 'lucide-react';

interface HerramientasSectionProps {
  onNavigate: (tab: 'paso3') => void;
  checkedItems: Set<string>;
  onCheckboxChange: (id: string, checked: boolean) => void;
}

export const CHECKLIST_ITEMS = [
  { id: 'password', label: 'Cambié mis 3 contraseñas principales' },
  { id: '2fa', label: 'Activé 2FA en Gmail, redes sociales, banco' },
  { id: 'permissions', label: 'Revisé permisos de apps en móvil' },
  { id: 'privacy', label: 'Ajusté privacidad en redes sociales a "amigos"' },
  { id: 'cookies', label: 'Rechazé cookies no esenciales (últimas 3 visitas)' },
  { id: 'google-search', label: 'Busqué mi nombre en Google Incógnito' },
  { id: 'comments', label: 'Escribí un comentario constructivo esta semana' },
  { id: 'fake-news', label: 'Detecté una noticia falsa usando el framework VERIFICA' },
];

export default function HerramientasSection({
  onNavigate,
  checkedItems,
  onCheckboxChange,
}: HerramientasSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const percentage = Math.round((checkedItems.size / CHECKLIST_ITEMS.length) * 100);

  const getScoreColor = () => {
    if (percentage < 40) return 'from-[#EF4444] to-[#DC2626]';
    if (percentage < 80) return 'from-[#F59E0B] to-[#D97706]';
    return 'from-[#10B981] to-[#059669]';
  };

  const faqItems = [
    {
      id: 'faq-1',
      question: '¿Mi privacidad está realmente en riesgo?',
      answer:
        'Sí. Cada click, búsqueda y "like" es capturado y vendido a terceros. Grandes corporaciones construyen perfiles de comportamiento tuyo. La privacidad es un derecho; defenderla es un acto cívico.',
    },
    {
      id: 'faq-2',
      question: '¿Pueden rastrearme incluso en "Modo Incógnito"?',
      answer:
        'Técnicamente, tu ISP (proveedor de internet) sigue viendo lo que haces. Sitios web pueden rastrearte por IP, cookies persistentes, o técnicas avanzadas de fingerprinting. Es una capa más de privacidad, no es invulnerable.',
    },
    {
      id: 'faq-3',
      question: '¿Cómo sé si una noticia es real?',
      answer:
        'Nunca confíes en un solo medio. Usa el framework VERIFICA: verifica la fuente, busca evidencia múltiple, revisa tu sesgo, identifica cambios, verifica fecha y contexto, aplica intuición crítica, contrasta perspectivas y actúa responsablemente.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-10 border-b border-slate-800 pb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight font-display">
            Centro de Control
          </h2>
          <p className="text-slate-400 text-lg font-sans">Métricas, auditoría y base de conocimientos.</p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-xs text-[#00F0FF] font-mono uppercase tracking-widest mb-1">Status Sistema</div>
          <div className="text-[#10B981] font-bold flex items-center gap-2 justify-end">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Sistema Activo
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Checklist / Score */}
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#00F0FF] p-8 rounded-3xl relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-white text-xl font-display">Mi Progreso</h3>
              <p className="text-slate-400 text-sm font-sans">Completa tu protocolo de seguridad</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {CHECKLIST_ITEMS.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item.id)}
                  onChange={(e) => onCheckboxChange(item.id, e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-slate-600 bg-transparent checked:bg-[#10B981] checked:border-[#10B981] accent-[#10B981] cursor-pointer transition-all"
                />
                <span className="text-slate-300 group-hover:text-white transition-colors font-sans text-sm">
                  {item.label}
                </span>
              </label>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-white font-display">Ciudadanía Digital</span>
              <span className="text-[#00F0FF] font-bold font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <motion.div
                className={`h-full bg-gradient-to-r ${getScoreColor()} shadow-[0_0_10px_rgba(16,185,129,0.4)]`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-sans">
              {percentage < 40 && '⚠️ Necesitas reforzar urgente'}
              {percentage >= 40 && percentage < 80 && '✓ Buen progreso. Mantén el ritmo'}
              {percentage >= 80 && '✨ ¡Excelente! Eres un ciudadano digital responsable'}
            </p>
          </div>
        </div>

        {/* Gráfico de Errores */}
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#EF4444] h-full flex flex-col rounded-3xl p-8">
            <h3 className="font-bold text-white text-xl font-display mb-4">Vulnerabilidades Detectadas</h3>
            <ErrorsChart />
            <p className="text-xs text-slate-400 mt-4 font-sans">
              Los principales riesgos en tu ecosistema digital. Enfócate en los de mayor porcentaje.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Premium */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl mb-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-2xl text-white flex items-center gap-3 font-display">
            <span>❓</span> Preguntas Frecuentes
          </h3>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="border border-slate-700 bg-slate-800/30 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-white font-bold text-left font-display">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedFaq === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: expandedFaq === item.id ? 'auto' : 0, opacity: expandedFaq === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-slate-700 bg-slate-900/50">
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Salida */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h3 className="font-extrabold text-2xl text-white mb-3 flex items-center gap-3 font-display">
            <span>🎓</span> Protocolo Completado
          </h3>
          <p className="text-slate-400 max-w-xl leading-relaxed font-sans">
            Has completado el protocolo básico. Eres un nodo seguro en la red. Mantén tus defensas actualizadas y
            promueve la convivencia cívica en tus comunidades digitales.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto shrink-0 bg-slate-900/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-md">
          <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
            Directorios Oficiales
          </p>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://www.argentina.gob.ar" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → Gov.ar - Recursos Oficiales
            </a>
            <a href="https://www.incibe.es" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → INCIBE - Seguridad Online
            </a>
            <a href="https://www.snopes.com" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:text-white transition-colors">
              → Snopes - Fact-Checking Global
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-start">
        <Button
          onClick={() => onNavigate('paso3')}
          className="text-slate-500 hover:text-white font-medium transition-colors font-mono text-sm"
          variant="ghost"
        >
          <span>←</span> Volver
        </Button>
      </div>
    </motion.section>
  );
}
