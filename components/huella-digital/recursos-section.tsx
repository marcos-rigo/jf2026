'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  ListChecks,
  Check,
  Copy,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Images,
  Fingerprint,
} from 'lucide-react';
import { FUENTES_COMPLETAS } from '@/lib/huella-digital-content';

// Contenido sin cambios — extraído tal cual de app/huella-digital/huella-digital-content.tsx.
const NEXT_STEPS = [
  {
    title: 'Programá un recordatorio',
    desc: 'Poné una alarma cada 6 meses para hacer Egosurfing de rutina.',
  },
  {
    title: 'Instalá un gestor de contraseñas',
    desc: 'Dejá de reciclar claves. Usá herramientas seguras y únicas por cuenta — es un buen hábito para mostrarles también a tus estudiantes.',
  },
];

const RESOURCES = ['Have I Been Pwned', 'Google Takeout', 'DeleteMe'];

type FaqId = 'faq1' | 'faq2' | 'faq3' | null;

const FAQS: { id: FaqId; q: string; a: string }[] = [
  {
    id: 'faq1',
    q: '¿Puedo borrar mi huella digital por completo?',
    a: 'No al 100%. La información queda almacenada en copias, bases de datos externas o registros legales. Sin embargo, sí podés reducirla drásticamente (hasta un 90%) eliminando lo público y solicitando desindexación en buscadores.',
  },
  {
    id: 'faq2',
    q: '¿Es seguro usar mi huella dactilar para la app del banco?',
    a: 'Expertos en ciberseguridad sugieren no confiar plenamente en los escáneres ópticos/capacitivos antiguos. Si tu teléfono es robado, el ladrón tiene literalmente tus huellas impresas en la pantalla. Para finanzas, una clave alfanumérica fuerte + 2FA es superior.',
  },
  {
    id: 'faq3',
    q: '¿Qué es el derecho al olvido?',
    a: 'Es tu derecho legal (reconocido en Europa y en expansión en Latinoamérica) a pedirle a los motores de búsqueda que eliminen enlaces a información personal sobre vos que sea obsoleta, inexacta o irrelevante.',
  },
];

const TEMPLATE = `Asunto: Solicitud de eliminación de datos personales (Derecho al olvido)

Hola, equipo de privacidad:

Me dirijo a ustedes para solicitar formalmente la eliminación inmediata de todos mis datos personales e información asociada a mi nombre/correo en su base de datos y sitio web, de acuerdo con las normativas vigentes de protección de datos.

Mis datos registrados son: [Tu Correo/Usuario]

Agradezco me confirmen por esta vía cuando el proceso haya concluido.
Saludos cordiales.`;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
};
const CARRUSEL_IMAGES = Array.from({ length: 8 }, (_, i) => `/weekly-content/2026-W21/carrusel/${i + 1}.svg`);

interface RecursosSectionProps {
  progressPct: number;
  completedCount: number;
}

export default function RecursosSection({ progressPct, completedCount }: RecursosSectionProps) {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<FaqId>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  function goTo(index: number, dir: number) {
    setDirection(dir);
    setCurrentSlide(index);
  }
  function prevSlide() { goTo((currentSlide - 1 + CARRUSEL_IMAGES.length) % CARRUSEL_IMAGES.length, -1); }
  function nextSlide() { goTo((currentSlide + 1) % CARRUSEL_IMAGES.length, 1); }

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const el = document.createElement('textarea');
      el.value = TEMPLATE;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }

  return (
    <motion.section
      id="recursos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          08 — Centro de Recursos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Herramientas para Actuar Hoy</h2>
      </div>

      {/* ── Progress tracker ── */}
      <section className="mb-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h3 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="w-6 h-6" /> Tu Rastreador de Éxito
          </h3>
          <p className="text-slate-300 text-sm mb-6">Tus respuestas se guardan en este navegador.</p>
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-2">
              <span>Progreso de limpieza</span>
              <span className="font-bold text-blue-400">{progressPct}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ minWidth: completedCount > 0 ? '1rem' : 0 }}
              />
            </div>
          </div>
          {completedCount === 3 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-emerald-400 font-bold text-sm flex items-center gap-2">
              <Check className="w-4 h-4" /> ¡Completado! Tu huella digital está bajo control — y ya tenés un ejemplo propio para
              mostrarles a tus estudiantes cómo se hace.
            </motion.p>
          )}
        </div>
      </section>

      {/* ── Copy template ── */}
      <section className="mb-12">
        <h3 className="font-display text-2xl font-bold mb-6 border-b pb-2 border-slate-200">Plantilla de Acción Rápida</h3>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-600 mb-4">
            Usá este texto para solicitar la eliminación de tus datos a empresas o webmasters. Podés adaptarlo también
            para dar de baja cuentas antiguas asociadas a tu correo institucional.
          </p>
          <div className="relative">
            <textarea
              readOnly
              value={TEMPLATE}
              className="w-full h-44 p-4 bg-slate-50 text-sm font-mono rounded-lg border border-slate-200 focus:outline-none resize-none text-slate-700"
            />
            <button
              onClick={copyTemplate}
              className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors text-sm flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
          {copied && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-600 text-sm mt-2">
              ¡Copiado al portapapeles!
            </motion.p>
          )}
        </div>
      </section>

      {/* ── Próximos pasos + recursos recomendados ── */}
      <section className="mb-12">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h3 className="font-display text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <Fingerprint className="w-5 h-5" /> Próximos Pasos
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {NEXT_STEPS.map((s) => (
              <li key={s.title} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                <span>
                  <strong>{s.title}:</strong> {s.desc}
                </span>
              </li>
            ))}
          </ul>
          <h4 className="font-bold text-blue-700 mt-6 mb-2 text-sm">Recursos Recomendados:</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {RESOURCES.map((r) => (
              <span key={r} className="bg-white px-2 py-1 rounded border border-blue-100 text-slate-600">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carrusel ── */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md shrink-0">
                <Images className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-0.5">Material para el aula</p>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 font-display">
                  Huella Digital — Recursos para el Aula
                </h3>
              </div>
            </div>
            <span className="text-slate-400 text-sm font-mono shrink-0">
              {currentSlide + 1} / {CARRUSEL_IMAGES.length}
            </span>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <Image
                  src={CARRUSEL_IMAGES[currentSlide]}
                  alt={`Lámina ${currentSlide + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 py-5">
            {CARRUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-6 h-2.5 bg-blue-500' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir a lámina ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-12">
        <h3 className="font-display text-2xl font-bold mb-6 text-slate-900">Preguntas Frecuentes</h3>
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full text-left px-5 py-4 font-semibold text-slate-800 hover:bg-slate-50 flex justify-between items-center transition-colors"
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-slate-400 shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === faq.id && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-3 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── Fuentes citadas ── */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span>📚</span> Fuentes Citadas
        </h3>
        <ul className="space-y-3">
          {FUENTES_COMPLETAS.map((fuente) => (
            <li key={fuente.n} className="flex items-start gap-3 text-sm">
              <span className="text-slate-400 font-mono shrink-0">{fuente.n}.</span>
              <div className="flex flex-col gap-1">
                {fuente.url ? (
                  <a href={fuente.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {fuente.label}
                  </a>
                ) : (
                  <span className="text-slate-700">{fuente.label}</span>
                )}
                {fuente.note && <span className="text-slate-400 text-xs italic">{fuente.note}</span>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </motion.section>
  );
}
