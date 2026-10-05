// Contenido de /tematicas/justicia-en-el-territorio-hibrido. Scaffold sin contenido todavía: misma forma que
// lib/ia-criterio-content.ts (AudienciaTexto/resolveTexto, fallback 'docentes'), pero con
// los campos de texto vacíos. El contenido real se carga en un prompt posterior, tema por
// tema. Las secciones por ahora solo muestran su encabezado (ver components/justicia-hibrida/).
import type { Audiencia } from './audiencias';
import type { AudienciaTexto } from './audiencia-texto';
import type { FichaAulaProps } from '@/components/justicia-hibrida/ficha-aula';

export const JUSTICIAHIBRIDA_FALLBACK: Audiencia = 'docentes';

export interface TocSection {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  labelAudiencia?: AudienciaTexto;
  shortLabelAudiencia?: AudienciaTexto;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: 'introduccion', number: '01', label: 'Introducción', shortLabel: 'Intro' },
  { id: 'lo-que-vas-a-lograr', number: '02', label: 'Lo que vas a lograr', shortLabel: 'Objetivos' },
  { id: 'por-que-importa', number: '03', label: 'Por qué importa', shortLabel: 'Por qué' },
  { id: 'de-donde-partimos', number: '04', label: 'De dónde partimos', shortLabel: 'Punto de partida' },
  { id: 'justicia-y-prueba-digital', number: '05', label: 'Justicia y prueba digital', shortLabel: 'Justicia y prueba digital' },
  { id: 'un-caso-resuelto', number: '06', label: 'Un caso resuelto', shortLabel: 'Caso' },
  { id: 'practica-vos', number: '07', label: 'Practicá vos', shortLabel: 'Practicá' },
  { id: 'pone-a-prueba', number: '08', label: 'Poné a prueba lo aprendido', shortLabel: 'Quiz' },
  { id: 'llevalo-a-tu-aula', number: '09', label: 'Llevalo a tu aula', shortLabel: 'Aula' },
  { id: 'recursos-y-cierre', number: '10', label: 'Recursos y cierre', shortLabel: 'Cierre' },
];

export interface Contenido {
  introduccion: {
    titulo: string;
    subtitulo: string;
    bajada: string;
    listaTitulo: string;
    lista: string[];
  };
  loQueVasALograr: {
    titulo: string;
    competenciaEtiqueta: string;
    competencia: string;
    objetivosTitulo: string;
    objetivos: string[];
  };
  porQueImporta: {
    titulo: string;
    pregunta: string;
    parrafos: string[];
    problema: string;
    placeholder: string;
    ayuda: string;
  };
  deDondePartimos: {
    titulo: string;
    parrafos: string[];
    fichaAula1: FichaAulaProps;
  };
  justiciaYPruebaDigital: {
    titulo: string;
    recordar: { subtitulo: string; parrafos: string[] };
    comprender: { subtitulo: string; parrafos: string[]; recuadro: { titulo: string; parrafos: string[] } };
    aplicar: {
      subtitulo: string;
      parrafoPreguntas: string;
      preguntas: string[];
      parrafoMovimientos: string;
      movimientos: string[];
    };
    fichaAula2: FichaAulaProps;
  };
  unCasoResuelto: {
    titulo: string;
    subtitulo: string;
    caso: string;
    fases: { numero: number; titulo: string; parrafos: string[]; nota: string }[];
  };
  practicaVos: {
    titulo: string;
    intro: string;
    revelarLabel: string;
    situaciones: {
      clave: 's1' | 's2' | 's3';
      enunciado: string;
      analisis: string;
      nota: string;
    }[];
    error: {
      subtitulo: string;
      intro: string;
      citaA: string;
      citaB: string;
      botonLabel: string;
      errorIntro: string;
      errorA: string;
      errorB: string;
      errorCierre: string;
    };
  };
  poneAPrueba: {
    titulo: string;
    intro: string;
    preguntas: {
      objetivo: string;
      enunciado: string;
      opciones: { id: 'a' | 'b' | 'c' | 'd'; texto: string }[];
      correcta: 'a' | 'b' | 'c' | 'd';
      feedbacks: Partial<Record<'a' | 'b' | 'c' | 'd', string>>;
    }[];
    correcto: string;
    rubricaTitulo: string;
    rubricaIntro: string;
    rubricaColNivel: string;
    rubricaColMuestra: string;
    rubrica: { nivel: string; muestra: string }[];
    rubricaCierre: string;
  };
  llevaloATuAula: {
    titulo: string;
    parrafo1: string;
    accionSemana: string;
    parrafo2: string;
    parrafo3: string;
    respuestaOriginalEtiqueta: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    campoEtiqueta: string;
    fichaAula3: FichaAulaProps;
  };
  recursosYCierre: {
    titulo: string;
    cambioTitulo: string;
    cambioInstruccion: string;
    sinRespuestaAntes: string;
    sinRespuestaEnlaceTexto: string;
    sinRespuestaEnlaceHref: string;
    sinRespuestaDespues: string;
    pregunta: string;
    placeholder: string;
    nota: string;
    llevarteTitulo: string;
    tarjeta: { titulo: string; parrafos: string[] };
    seguiTitulo: string;
    seguiAntes: string;
    seguiEnlaceTexto: string;
    seguiEnlaceHref: string;
    seguiDespues: string;
    cierreTitulo: string;
    cierreParrafo: string;
  };
}

const fichaVacia: FichaAulaProps = {
  titulo: '',
  objetivo: '',
  desarrollo: [],
  preguntaDetonadora: '',
  actividades: [],
  frase: '',
  glosario: [],
  referencias: [],
};

const DOCENTES: Contenido = {
  introduccion: { titulo: '', subtitulo: '', bajada: '', listaTitulo: '', lista: [] },
  loQueVasALograr: { titulo: '', competenciaEtiqueta: '', competencia: '', objetivosTitulo: '', objetivos: [] },
  porQueImporta: { titulo: '', pregunta: '', parrafos: [], problema: '', placeholder: '', ayuda: '' },
  deDondePartimos: { titulo: '', parrafos: [], fichaAula1: fichaVacia },
  justiciaYPruebaDigital: {
    titulo: '',
    recordar: { subtitulo: '', parrafos: [] },
    comprender: { subtitulo: '', parrafos: [], recuadro: { titulo: '', parrafos: [] } },
    aplicar: { subtitulo: '', parrafoPreguntas: '', preguntas: [], parrafoMovimientos: '', movimientos: [] },
    fichaAula2: fichaVacia,
  },
  unCasoResuelto: { titulo: '', subtitulo: '', caso: '', fases: [] },
  practicaVos: {
    titulo: '',
    intro: '',
    revelarLabel: '',
    situaciones: [],
    error: {
      subtitulo: '',
      intro: '',
      citaA: '',
      citaB: '',
      botonLabel: '',
      errorIntro: '',
      errorA: '',
      errorB: '',
      errorCierre: '',
    },
  },
  poneAPrueba: {
    titulo: '',
    intro: '',
    preguntas: [],
    correcto: '',
    rubricaTitulo: '',
    rubricaIntro: '',
    rubricaColNivel: '',
    rubricaColMuestra: '',
    rubrica: [],
    rubricaCierre: '',
  },
  llevaloATuAula: {
    titulo: '',
    parrafo1: '',
    accionSemana: '',
    parrafo2: '',
    parrafo3: '',
    respuestaOriginalEtiqueta: '',
    sinRespuestaAntes: '',
    sinRespuestaEnlaceTexto: '',
    sinRespuestaEnlaceHref: '',
    sinRespuestaDespues: '',
    campoEtiqueta: '',
    fichaAula3: fichaVacia,
  },
  recursosYCierre: {
    titulo: '',
    cambioTitulo: '',
    cambioInstruccion: '',
    sinRespuestaAntes: '',
    sinRespuestaEnlaceTexto: '',
    sinRespuestaEnlaceHref: '',
    sinRespuestaDespues: '',
    pregunta: '',
    placeholder: '',
    nota: '',
    llevarteTitulo: '',
    tarjeta: { titulo: '', parrafos: [] },
    seguiTitulo: '',
    seguiAntes: '',
    seguiEnlaceTexto: '',
    seguiEnlaceHref: '',
    seguiDespues: '',
    cierreTitulo: '',
    cierreParrafo: '',
  },
};

// Solo hay contenido escrito para docentes; el resto de las audiencias cae al fallback.
export const CONTENIDO: Partial<Record<Audiencia, Contenido>> = { docentes: DOCENTES };

export function resolveContenido(audienciaActual: Audiencia | null): Contenido {
  if (audienciaActual && CONTENIDO[audienciaActual]) return CONTENIDO[audienciaActual]!;
  return CONTENIDO[JUSTICIAHIBRIDA_FALLBACK] ?? Object.values(CONTENIDO)[0]!;
}
