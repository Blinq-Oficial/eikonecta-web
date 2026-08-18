-- Eikonecta — Lead Management Schema
-- Run this after `netlify database init`

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) DEFAULT '',
  telefono VARCHAR(50) NOT NULL,
  servicio VARCHAR(100) DEFAULT '',
  mensaje TEXT DEFAULT '',
  estado VARCHAR(20) DEFAULT 'nuevo',
  notas TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX IF NOT EXISTS idx_leads_estado ON leads(estado);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_servicio ON leads(servicio);
