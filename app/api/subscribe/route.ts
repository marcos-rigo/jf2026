import { NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/ciudadania/db"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const raw: string = body?.email ?? ""
    const email = raw.replace(/[\x00-\x1F\x7F]/g, "").trim().toLowerCase().slice(0, 254)

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }

    await query(
      "INSERT IGNORE INTO suscriptores (email) VALUES (?)",
      [email]
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[/api/subscribe] Error:", err)
    return NextResponse.json({ error: "Error interno." }, { status: 500 })
  }
}
