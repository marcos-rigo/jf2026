'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { resolveContenido } from '@/lib/instrumental-acceso-content';
import { useAudienciaStore } from '@/lib/audiencia-store';

// Contenido de la página para la audiencia activa (fallback 'docentes', ver lib/instrumental-acceso-content.ts).
export function useContenido() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  return resolveContenido(audienciaActual);
}

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  // Opcional acá (a diferencia de components/ciudadania-digital/ui.tsx): en el Prompt 1
  // las 10 secciones todavía no tienen cuerpo, solo título — se completan en los Prompts 2 y 3.
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 md:scroll-mt-32 space-y-6">
      <header>
        <p className="text-xs font-mono font-semibold tracking-widest text-brand-blue">{number}</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mt-1">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-lg md:text-xl font-bold text-brand-navy pt-2">{children}</h3>;
}

export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`leading-relaxed text-slate-700 ${className}`}>{children}</p>;
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-sm italic text-slate-500 leading-relaxed">{children}</p>;
}

export function Callout({
  title,
  children,
  tone = 'blue',
}: {
  title?: string;
  children: ReactNode;
  tone?: 'blue' | 'pink' | 'navy';
}) {
  const tones = {
    blue: 'border-brand-blue bg-white',
    pink: 'border-brand-pink bg-white',
    navy: 'border-brand-navy bg-brand-navy text-white',
  };
  return (
    <div className={`rounded-xl border-l-4 p-5 shadow-sm ${tones[tone]}`}>
      {title && <p className="font-display font-bold mb-2">{title}</p>}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

export function Reveal({ label, hideLabel, children }: { label: string; hideLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
      >
        {open ? hideLabel : label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 space-y-3">{children}</div>}
    </div>
  );
}

const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40';

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  label?: string;
}) {
  return (
    <textarea
      aria-label={label ?? placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={fieldClass}
    />
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  label?: string;
}) {
  return (
    <input
      aria-label={label ?? placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={fieldClass}
    />
  );
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  label?: string;
}) {
  return (
    <select aria-label={label ?? placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
