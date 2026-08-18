// TEMPORAL — diagnóstico de conexión a Netlify Database. Borrar tras verificar.
exports.handler = async (event) => {
  const headers = { 'Content-Type': 'application/json' };
  if (event.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'No autorizado' }) };
  }

  const out = {
    env: Object.keys(process.env).filter((k) => /NETLIFY|DATABASE|NEON|DB_|BLOB|SITE|DEPLOY/i.test(k)).sort(),
  };

  try {
    const { getConnectionString } = require('@netlify/database');
    const cs = getConnectionString();
    out.conn = 'OK — host ' + new URL(cs).host + ' user ' + new URL(cs).username;
  } catch (err) {
    out.conn = err.constructor.name + ': ' + err.message;
  }

  try {
    const { neon } = require('@neondatabase/serverless');
    const { getConnectionString } = require('@netlify/database');
    const sql = neon(getConnectionString());
    const r = await sql`INSERT INTO leads (nombre, telefono, mensaje) VALUES ('diag', '000', 'prueba') RETURNING id`;
    await sql`DELETE FROM leads WHERE id = ${r[0].id}`;
    out.insert = 'OK — escritura confirmada (fila de prueba borrada)';
  } catch (err) {
    out.insert = err.constructor.name + ': ' + err.message;
  }

  return { statusCode: 200, headers, body: JSON.stringify(out, null, 2) };
};
