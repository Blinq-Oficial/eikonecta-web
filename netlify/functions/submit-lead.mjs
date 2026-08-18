// submit-lead — recibe el formulario de contacto y lo guarda en Netlify Database.
// Netlify Function v2: el global `Netlify.env` (que expone NETLIFY_DB_URL) NO existe
// en las funciones v1 con `exports.handler`. Por eso este archivo es v2.
import { neon } from '@neondatabase/serverless';
import { getConnectionString } from '@netlify/database';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS });
  }

  try {
    const { nombre, empresa, telefono, servicio, mensaje } = await req.json();

    if (!nombre || !telefono) {
      return Response.json(
        { error: 'Nombre y teléfono son obligatorios' },
        { status: 400, headers: CORS },
      );
    }

    const sql = neon(getConnectionString());
    const result = await sql`
      INSERT INTO leads (nombre, empresa, telefono, servicio, mensaje)
      VALUES (${nombre}, ${empresa || ''}, ${telefono}, ${servicio || ''}, ${mensaje || ''})
      RETURNING id, created_at
    `;

    return Response.json(
      {
        success: true,
        message: 'Lead registrado exitosamente',
        id: result[0].id,
        created_at: result[0].created_at,
      },
      { headers: CORS },
    );
  } catch (error) {
    console.error('Error submitting lead:', error);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500, headers: CORS });
  }
};
