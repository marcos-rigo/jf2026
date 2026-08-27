'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useAppStore } from '@/lib/ciudadania/app-store';

/**
 * Botón flotante para volver al panel de temáticas de la plataforma
 * (/ciudadania-presente/dashboard/tematicas), donde el usuario ve todas las
 * temáticas disponibles y su progreso. Solo se renderiza para usuarios
 * autenticados en la plataforma — esa ruta está detrás del login, así que
 * mostrarlo a un visitante público lo llevaría a un login/paywall en vez de
 * "volver" a algo que ya vio.
 */
export function BackToDashboardButton() {
  const userId = useAppStore((s) => s.user?.id ?? null);

  if (userId === null) return null;

  return (
    <Link
      href="/ciudadania-presente/dashboard/tematicas"
      className="fixed top-24 right-4 md:right-6 z-40 inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 text-sm font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue hover:-translate-x-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <ArrowLeft className="w-4 h-4 shrink-0" />
      <span>Volver a mis temáticas</span>
    </Link>
  );
}
