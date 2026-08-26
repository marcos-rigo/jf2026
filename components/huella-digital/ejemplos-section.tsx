'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Zap, Check } from 'lucide-react';

// Los 3 pasos ya adaptados a docentes — contenido sin cambios, solo extraído
// de app/huella-digital/huella-digital-content.tsx a su propia sección.
const STEPS = [
  {
    number: 1,
    title: 'Auditoría: Conocé tu exposición',
    objective:
      'Identificar exactamente qué información tuya es pública (huella activa) y qué datos se recopilaron sin tu atención plena (huella pasiva) — la misma información que un estudiante curioso o una familia pueden encontrar en dos minutos de búsqueda.',
    instructions: [
      'Abrí una ventana en modo incógnito para evitar sesgos del algoritmo.',
      'Realizá "Egosurfing" (buscar tu propio nombre en internet): buscá tu nombre completo entre comillas (ej. "Juan Pérez").',
      'Buscá también tu correo principal y tu número de teléfono, sobre todo si alguna vez los compartiste en un grupo de WhatsApp de familias o en una plataforma escolar.',
      'Revisá la primera página de resultados y la sección de imágenes.',
    ],
    tip: 'Buscá en tu correo palabras como "Bienvenido", "Confirma tu cuenta" o "Verifica". Encontrarás decenas de foros, tiendas y apps donde te registraste hace años y olvidaste.',
    lab: 'Abrí una hoja de cálculo o libreta. Anotá cada cuenta antigua que encuentres y cada resultado de Google que no te guste. Esa es tu lista de objetivos para el Paso 2.',
    checkId: 'task1',
    checkLabel: 'He completado mi lista de "Egosurfing"',
  },
  {
    number: 2,
    title: 'Limpieza: Borrá tu rastro',
    objective:
      'Reducir drásticamente los puntos de acceso a tus datos personales eliminando cuentas innecesarias y gestionando tu derecho al olvido.',
    instructions: [
      'Usá tu lista del paso anterior. Entrá a cada cuenta antigua, buscá la opción "Eliminar cuenta" (no "desactivar").',
      'Dirigite a myactivity.google.com y borrá tu historial desde siempre.',
      'Ejercé solicitudes manuales para borrar tu información de bases de datos de terceros (Data Brokers).',
    ],
    tip: 'Si un sitio no te deja borrar la cuenta, cambiá tus datos por información falsa (nombre falso, correo temporal) antes de abandonarla.',
    lab: 'Solicitá a Google que retire resultados que expongan datos sensibles (teléfono, dirección) utilizando su formulario oficial de retirada de información personal.',
    checkId: 'task2',
    checkLabel: 'He eliminado al menos 3 cuentas inactivas hoy',
  },
  {
    number: 3,
    title: 'Blindaje: Protección y Netiqueta',
    objective:
      'Configurar barreras técnicas y de comportamiento para evitar volver a generar una huella digital tóxica — y establecer límites claros entre tu vida digital personal y tu rol docente.',
    instructions: [
      'Sensores Biométricos: Evitá usar tu huella dactilar para apps financieras críticas. Las huellas pueden ser copiadas y no se pueden cambiar como una contraseña. Optá por contraseñas fuertes o 2FA.',
      'Redes Wi-Fi: Nunca accedas a tu banco o correo desde el Wi-Fi de la escuela o cualquier red pública sin una VPN (red privada virtual que protege tu conexión).',
      'Netiqueta: Pensalo dos veces antes de publicar, sobre todo si hay estudiantes de por medio. No etiquetés a otros sin permiso, no subas fotos de estudiantes sin autorización de sus familias, y mantené separados tus perfiles personales de cualquier contacto con el curso.',
    ],
    tip: 'Revisá la configuración de privacidad de Instagram/Facebook y limitala a "Solo Amigos" — es habitual que estudiantes busquen y encuentren el perfil personal de un/a docente. Desactivá también la indexación de tu perfil en buscadores desde la configuración de la red social.',
    lab: 'Cambiá la privacidad de tu red social principal y asegurate de usar un navegador centrado en la privacidad (como Brave o Firefox) para tu navegación diaria.',
    checkId: 'task3',
    checkLabel: 'He ajustado la privacidad de mis redes a "Privado"',
  },
];

interface EjemplosSectionProps {
  checkedItems: Set<string>;
  onToggleCheck: (id: string) => void;
}

export default function EjemplosSection({ checkedItems, onToggleCheck }: EjemplosSectionProps) {
  return (
    <div id="ejemplos-concretos" className="w-full scroll-mt-28 md:scroll-mt-32">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          04 — Ejemplos Concretos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Los 3 Pasos Prácticos</h2>
      </div>

      {STEPS.map((step, i) => (
        <motion.section
          key={step.checkId}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="mb-10 last:mb-0"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 shrink-0">
              {step.number}
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">{step.title}</h3>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <p className="mb-4 text-slate-700">
              <strong>Objetivo:</strong> {step.objective}
            </p>

            <h4 className="font-semibold text-lg mb-2 text-blue-600">Instrucciones:</h4>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
              {step.instructions.map((ins, j) => (
                <li key={j}>{ins}</li>
              ))}
            </ul>

            <div className="flex gap-3 bg-slate-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
              <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600">
                <strong>Ejemplo práctico:</strong> {step.tip}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-xl">
              <h5 className="font-bold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-300" /> Ahora hacé esto:
              </h5>
              <p className="text-sm mb-4 text-blue-100">{step.lab}</p>
              <label className="flex items-center gap-3 text-sm bg-white/20 px-3 py-2 rounded w-fit cursor-pointer hover:bg-white/30 transition-colors">
                <div className="relative w-4 h-4 shrink-0">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(step.checkId)}
                    onChange={() => onToggleCheck(step.checkId)}
                    className="appearance-none w-4 h-4 border-2 border-white/60 rounded cursor-pointer checked:bg-white checked:border-transparent transition-colors"
                  />
                  {checkedItems.has(step.checkId) && (
                    <Check className="absolute inset-0 w-4 h-4 text-blue-600 pointer-events-none" />
                  )}
                </div>
                {step.checkLabel}
              </label>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
