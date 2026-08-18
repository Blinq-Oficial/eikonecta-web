// update-lead.js — Updates a lead's status or notes (protected by ADMIN_SECRET)
const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Secret',
    'Access-Control-Allow-Methods': 'PUT, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'PUT') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Auth check
  const secret = event.headers['x-admin-secret'];
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'No autorizado' }) };
  }

  try {
    const data = JSON.parse(event.body);
    const { id, estado, notas } = data;

    if (!id) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'ID es obligatorio' }) };
    }

    const sql = neon(process.env.NETLIFY_DATABASE_URL);

    const result = await sql`
      UPDATE leads
      SET
        estado = COALESCE(${estado || null}, estado),
        notas = COALESCE(${notas || null}, notas),
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.length === 0) {
      return { statusCode: 404, headers, body: JSON.stringify({ error: 'Lead no encontrado' }) };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, lead: result[0] }),
    };
  } catch (error) {
    console.error('Error updating lead:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' }),
    };
  }
};
