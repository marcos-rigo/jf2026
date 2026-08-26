import { ExternalLink } from 'lucide-react';
import type { Source } from '@/lib/ciudadania-digital-content';

interface SourceCiteProps {
  source: Source;
  className?: string;
}

// Cita de fuente reutilizable para esta temática. Cuando `source.url` existe se
// renderiza como link externo; cuando `source.unverified` es true se marca como
// mención sin confirmar (paradoja del Barco de Teseo, frase exacta de ISO 27100)
// en vez de presentarse como cita textual cerrada.
export function SourceCite({ source, className = '' }: SourceCiteProps) {
  const base = 'inline-flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400';

  const content = (
    <>
      <span className="opacity-70" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? 'italic' : ''}>{source.author}</span>
      {source.note && <span className="opacity-70">— {source.note}</span>}
      {source.unverified && (
        <span className="opacity-60 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border border-slate-700">
          sin verificar
        </span>
      )}
    </>
  );

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} hover:text-[#00F0FF] transition-colors ${className}`}
      >
        {content}
        <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
      </a>
    );
  }

  return (
    <span className={`${base} ${className}`}>
      {content}
    </span>
  );
}
