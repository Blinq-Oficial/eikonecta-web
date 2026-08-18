// get-leads — lista los leads para el panel /admin/. Protegida con ADMIN_SECRET.
// Netlify Function v2: ver nota en submit-lead.mjs sobre `Netlify.env`.
import { neon } from '@neondatabase/serverless';
import { getConnectionString } from '@netlify/database';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Secret',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (req.method !== 'GET') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS });
  }

  // El secreto viaja solo por cabecera: como query param quedaba escrito en los
  // logs de Netlify y en el historial del navegador.
  const secret = req.headers.get('x-admin-secret');
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return Response.json({ error: 'No autorizado' }, { status: 401, headers: CORS });
  }

  try {
    const sql = neon(getConnectionString());
    const estado = new URL(req.url).searchParams.get('estado');

    const leads =
      estado && estado !== 'todos'
        ? await sql`SELECT * FROM leads WHERE estado = ${estado} ORDER BY created_at DESC LIMIT 200`
        : await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 200`;

    return Response.json({ success: true, leads, total: leads.length }, { headers: CORS });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500, headers: CORS });
  }
};
