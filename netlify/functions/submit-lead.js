// submit-lead.js — Receives form data and inserts into Netlify Database (PostgreSQL/Neon)
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
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body);
    const { nombre, empresa, telefono, servicio, mensaje } = data;

    // Validation
    if (!nombre || !telefono) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Nombre y teléfono son obligatorios' }),
      };
    }

    // Connect to Netlify Database
    const sql = neon(dbUrl());

    // Insert lead
    const result = await sql`
      INSERT INTO leads (nombre, empresa, telefono, servicio, mensaje)
      VALUES (${nombre}, ${empresa || ''}, ${telefono}, ${servicio || ''}, ${mensaje || ''})
      RETURNING id, created_at
    `;

    const lead = result[0];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Lead registrado exitosamente',
        id: lead.id,
        created_at: lead.created_at,
      }),
    };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' }),
    };
  }
};
