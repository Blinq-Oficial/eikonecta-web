import { index, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

// Leads capturados por el formulario de contacto (netlify/functions/submit-lead.js)
// y administrados desde /admin/ (get-leads.js / update-lead.js).
export const leads = pgTable(
  'leads',
  {
    id: serial('id').primaryKey(),
    nombre: varchar('nombre', { length: 255 }).notNull(),
    empresa: varchar('empresa', { length: 255 }).default(''),
    telefono: varchar('telefono', { length: 50 }).notNull(),
    servicio: varchar('servicio', { length: 100 }).default(''),
    mensaje: text('mensaje').default(''),
    estado: varchar('estado', { length: 20 }).default('nuevo'),
    notas: text('notas').default(''),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  },
  (t) => [
    index('idx_leads_estado').on(t.estado),
    index('idx_leads_created').on(t.createdAt.desc()),
    index('idx_leads_servicio').on(t.servicio),
  ],
)
