import { ExternalLink } from 'lucide-react';
import type { Source } from '@/lib/alfabetizacion-digital-content';

interface SourceCiteProps {
  source: Source;
  className?: string;
}

export function SourceCite({ source, className = '' }: SourceCiteProps) {
  const base = 'inline-flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500';

  const content = (
    <>
      <span className="opacity-70 text-sky-600" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? 'italic text-amber-700 font-medium' : 'text-sky-700 font-semibold'}>
        {source.author}
      </span>
      {source.note && <span className="opacity-80 text-slate-600">— {source.note}</span>}
      {source.unverified && (
        <span className="opacity-90 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border border-amber-300 text-amber-800 bg-amber-50">
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
        className={`${base} hover:text-sky-600 transition-colors ${className}`}
      >
        {content}
        <ExternalLink className="w-3 h-3 text-sky-600 shrink-0" />
      </a>
    );
  }

  return (
    <span className={`${base} ${className}`}>
      {content}
    </span>
  );
}
