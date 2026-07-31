import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     parseInt(process.env.DB_PORT || '3306'),
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // Sin esto, mysql2 devuelve las columnas DATE como objetos JS Date
  // construidos en el timezone local del proceso Node, y luego JSON.stringify
  // las serializa como datetime UTC con hora (ej. "1990-06-15T03:00:00.000Z"
  // en vez de "1990-06-15") — formato inválido para <input type="date"> y
  // vulnerable a corrimientos de día según el timezone del server/browser.
  // Limitado a 'DATE' para no tocar el comportamiento existente de columnas
  // DATETIME/TIMESTAMP (creado_en, expira_en, etc.).
  dateStrings: ['DATE'],
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
})

export async function query<T = unknown>(sql: string, params?: any[]): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results] = await pool.execute(sql, params as any)
  return results as T
}

export async function withTransaction<T>(
  callback: (conn: mysql.PoolConnection) => Promise<T>
): Promise<T> {
  const conn = await pool.getConnection()
  await conn.beginTransaction()
  try {
    const result = await callback(conn)
    await conn.commit()
    return result
  } catch (err) {
    await conn.rollback()
    throw err
  } finally {
    conn.release()
  }
}

export async function queryConn<T = unknown>(
  conn: mysql.PoolConnection,
  sql: string,
  params?: any[]
): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results] = await conn.execute(sql, params as any)
  return results as T
}

export default pool
