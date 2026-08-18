// TEMPORAL — verifica si una function v2 sí recibe Netlify.env. Borrar tras verificar.
import { neon } from '@neondatabase/serverless';
import { getConnectionString } from '@netlify/database';

export default async (req) => {
  if (req.headers.get('x-admin-secret') !== process.env.ADMIN_SECRET) {
    return Response.json({ error: 'No autorizado' }, { status: 401 });
  }

  const out = {
    tieneNetlifyGlobal: typeof globalThis.Netlify !== 'undefined',
    tieneNetlifyEnv: typeof globalThis.Netlify?.env !== 'undefined',
  };

  try {
    const cs = getConnectionString();
    out.conn = 'OK — host ' + new URL(cs).host + ' | user ' + new URL(cs).username;
  } catch (err) {
    out.conn = err.name + ': ' + err.message;
  }

  try {
    const sql = neon(getConnectionString());
    const r = await sql`INSERT INTO leads (nombre, telefono, mensaje) VALUES ('diag', '000', 'prueba') RETURNING id`;
    await sql`DELETE FROM leads WHERE id = ${r[0].id}`;
    out.insert = 'OK — escritura confirmada (fila de prueba borrada)';
  } catch (err) {
    out.insert = err.name + ': ' + err.message;
  }

  return Response.json(out);
};
