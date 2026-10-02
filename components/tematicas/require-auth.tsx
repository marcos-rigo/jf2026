'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/ciudadania/app-store';

/**
 * Gatea el contenido de una temática (listado /tematicas o la página de una
 * temática individual) detrás del login de Ciudadanía Presente: cualquier
 * usuario autenticado puede verlo, un visitante sin sesión es redirigido a
 * /ciudadania-presente/login sin llegar a ver el contenido.
 *
 * `mounted` evita el flash/redirect falso mientras el store persistido
 * (localStorage) todavía no hidrató en el cliente — sin esto, el primer
 * render siempre ve `user: null` y redirigiría a usuarios ya logueados.
 */
export function RequireAuth({ children }: { children: ReactNode }) {
  const userId = useAppStore((s) => s.user?.id ?? null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && userId === null) {
      router.replace('/ciudadania-presente/login');
    }
  }, [mounted, userId, router]);

  if (!mounted || userId === null) return null;

  return <>{children}</>;
}
