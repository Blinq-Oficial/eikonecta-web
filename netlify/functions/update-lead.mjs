// update-lead — cambia el estado o las notas de un lead. Protegida con ADMIN_SECRET.
// Netlify Function v2: ver nota en submit-lead.mjs sobre `Netlify.env`.
import { neon } from '@neondatabase/serverless';
import { getConnectionString } from '@netlify/database';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Secret',
  'Access-Control-Allow-Methods': 'PUT, OPTIONS',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (req.method !== 'PUT') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS });
  }

  const secret = req.headers.get('x-admin-secret');
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return Response.json({ error: 'No autorizado' }, { status: 401, headers: CORS });
  }

  try {
    const { id, estado, notas } = await req.json();

    if (!id) {
      return Response.json({ error: 'ID es obligatorio' }, { status: 400, headers: CORS });
    }

    const sql = neon(getConnectionString());
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
      return Response.json({ error: 'Lead no encontrado' }, { status: 404, headers: CORS });
    }

    return Response.json({ success: true, lead: result[0] }, { headers: CORS });
  } catch (error) {
    console.error('Error updating lead:', error);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500, headers: CORS });
  }
};
