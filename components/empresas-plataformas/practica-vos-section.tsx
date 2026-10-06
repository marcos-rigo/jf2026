'use client';

import { Section, P, H3, useContenido } from './ui';
import { SituacionCard } from './situacion-card';
import { ErrorDoble } from './error-doble';

export default function PracticaVosSection() {
  const c = useContenido().practicaVos;

  return (
    <Section id="practica-vos" number="07" title={c.titulo}>
      <P>{c.intro}</P>

      <div className="space-y-6">
        {c.situaciones.map((s) => (
          <SituacionCard
            key={s.clave}
            clave={s.clave}
            enunciado={s.enunciado}
            analisis={s.analisis}
            nota={s.nota}
            revelarLabel={c.revelarLabel}
          />
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <H3>{c.error.subtitulo}</H3>
        <P>{c.error.intro}</P>
        <ErrorDoble
          citaA={c.error.citaA}
          citaB={c.error.citaB}
          botonLabel={c.error.botonLabel}
          errorIntro={c.error.errorIntro}
          errorA={c.error.errorA}
          errorB={c.error.errorB}
          errorCierre={c.error.errorCierre}
        />
      </div>
    </Section>
  );
}
