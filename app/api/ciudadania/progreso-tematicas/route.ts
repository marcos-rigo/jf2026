import { NextRequest, NextResponse } from 'next/server'
import { getProgresoTematicas, upsertProgresoTematica } from '@/lib/ciudadania/progreso-tematicas'

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'userId es requerido.' }, { status: 400 })
  }

  try {
    const progreso = await getProgresoTematicas(Number(userId))
    return NextResponse.json({ progreso })
  } catch (error) {
    console.error(`[progreso-tematicas GET] ✗ userId=${userId}:`, error)
    return NextResponse.json({ error: 'Error al obtener el progreso.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  let body: { userId?: unknown; tematicaId?: unknown; detalle?: unknown; porcentaje?: unknown; completada?: unknown } = {}

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Body JSON inválido.' }, { status: 400 })
  }

  const { userId, tematicaId, detalle, porcentaje, completada } = body

  if (!userId || !tematicaId || typeof tematicaId !== 'string') {
    return NextResponse.json({ error: 'userId y tematicaId son requeridos.' }, { status: 400 })
  }

  try {
    const progreso = await upsertProgresoTematica(Number(userId), tematicaId, {
      detalle: detalle && typeof detalle === 'object' ? (detalle as Record<string, unknown>) : undefined,
      porcentaje: typeof porcentaje === 'number' ? porcentaje : undefined,
      completada: typeof completada === 'boolean' ? completada : undefined,
    })
    return NextResponse.json({ success: true, progreso })
  } catch (error) {
    console.error(`[progreso-tematicas POST] ✗ userId=${userId} tematicaId=${tematicaId}:`, error)
    return NextResponse.json({ error: 'Error al guardar el progreso.' }, { status: 500 })
  }
}
