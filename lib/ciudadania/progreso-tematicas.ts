import { query, withTransaction, queryConn } from './db'

export interface ProgresoTematica {
  tematicaId: string
  completada: boolean
  porcentaje: number
  detalle: Record<string, unknown>
  fechaInscripcion: string
  updatedAt: string
}

interface ProgresoRow {
  tematica_id: string
  completada: number
  porcentaje: number
  detalle: string | Record<string, unknown> | null
  fecha_inscripcion: string
  updated_at: string
}

function parseDetalle(detalle: ProgresoRow['detalle']): Record<string, unknown> {
  if (!detalle) return {}
  if (typeof detalle === 'string') {
    try { return JSON.parse(detalle) } catch { return {} }
  }
  return detalle
}

function mapRow(row: ProgresoRow): ProgresoTematica {
  return {
    tematicaId: row.tematica_id,
    completada: !!row.completada,
    porcentaje: row.porcentaje,
    detalle: parseDetalle(row.detalle),
    fechaInscripcion: row.fecha_inscripcion,
    updatedAt: row.updated_at,
  }
}

export async function getProgresoTematicas(usuarioId: number): Promise<ProgresoTematica[]> {
  const rows = await query<ProgresoRow[]>(
    'SELECT tematica_id, completada, porcentaje, detalle, fecha_inscripcion, updated_at FROM inscripciones_tematicas WHERE usuario_id = ?',
    [usuarioId]
  )
  return rows.map(mapRow)
}

export interface UpsertProgresoInput {
  detalle?: Record<string, unknown>
  porcentaje?: number
  completada?: boolean
}

// Upsert: crea la fila (inscripción) si no existe todavía, o actualiza los
// campos que vengan en el input sin pisar los que no vengan. `detalle` se
// mergea a nivel de clave top-level (cada quiz/checklist usa su propia
// clave dentro del JSON), no se reemplaza entero.
export async function upsertProgresoTematica(
  usuarioId: number,
  tematicaId: string,
  input: UpsertProgresoInput
): Promise<ProgresoTematica> {
  return withTransaction(async (conn) => {
    const existing = await queryConn<ProgresoRow[]>(
      conn,
      'SELECT tematica_id, completada, porcentaje, detalle, fecha_inscripcion, updated_at FROM inscripciones_tematicas WHERE usuario_id = ? AND tematica_id = ? FOR UPDATE',
      [usuarioId, tematicaId]
    )

    if (existing.length === 0) {
      const detalle = input.detalle ?? {}
      const porcentaje = input.porcentaje ?? 0
      const completada = input.completada ?? false
      await queryConn(
        conn,
        'INSERT INTO inscripciones_tematicas (usuario_id, tematica_id, completada, porcentaje, detalle) VALUES (?, ?, ?, ?, ?)',
        [usuarioId, tematicaId, completada, porcentaje, JSON.stringify(detalle)]
      )
    } else {
      const current = mapRow(existing[0])
      const mergedDetalle = input.detalle ? { ...current.detalle, ...input.detalle } : current.detalle
      const porcentaje = input.porcentaje ?? current.porcentaje
      const completada = input.completada ?? current.completada
      await queryConn(
        conn,
        'UPDATE inscripciones_tematicas SET detalle = ?, porcentaje = ?, completada = ? WHERE usuario_id = ? AND tematica_id = ?',
        [JSON.stringify(mergedDetalle), porcentaje, completada, usuarioId, tematicaId]
      )
    }

    const [row] = await queryConn<ProgresoRow[]>(
      conn,
      'SELECT tematica_id, completada, porcentaje, detalle, fecha_inscripcion, updated_at FROM inscripciones_tematicas WHERE usuario_id = ? AND tematica_id = ?',
      [usuarioId, tematicaId]
    )
    return mapRow(row)
  })
}
