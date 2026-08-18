// get-leads.js — Returns all leads from the database (protected by ADMIN_SECRET)
const { neon } = require('@neondatabase/serverless');
const { getConnectionString } = require('@netlify/database');

// Resuelve la cadena de conexión de Netlify Database.
// getConnectionString() lee NETLIFY_DB_URL (Netlify Database v2).
// El fallback cubre la extensión Neon antigua (NETLIFY_DATABASE_URL).
function dbUrl() {
  try {
    return getConnectionString();
  } catch (err) {
    const url = process.env.NETLIFY_DATABASE_URL;
    if (!url) throw err;
    return url;
  }
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Secret',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Auth check
  const secret = event.headers['x-admin-secret'];
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: 'No autorizado' }) };
  }

  try {
    const sql = neon(dbUrl());
    const params = event.queryStringParameters || {};

    let query;
    if (params.estado && params.estado !== 'todos') {
      query = sql`
        SELECT * FROM leads
        WHERE estado = ${params.estado}
        ORDER BY created_at DESC
        LIMIT 200
      `;
    } else {
      query = sql`
        SELECT * FROM leads
        ORDER BY created_at DESC
        LIMIT 200
      `;
    }

    const leads = await query;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, leads, total: leads.length }),
    };
  } catch (error) {
    console.error('Error fetching leads:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' }),
    };
  }
};
