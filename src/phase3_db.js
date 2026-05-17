// src/phase3_db.js
// Phase 3 generator: emit SQL schema and seed files for Supabase/Postgres

const fs = require('fs')
const path = require('path')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function writeIfMissing(fp, contents) {
  ensureDir(path.dirname(fp))
  if (fs.existsSync(fp)) return { skipped: true, path: fp }
  fs.writeFileSync(fp, contents, 'utf8')
  return { written: true, path: fp }
}

function defaultSchema() {
  return `-- db/schema.sql
-- SQL schema for Vibe-assistant (Postgres / Supabase)

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  provider text,
  provider_id text,
  hashed_password text,
  created_at timestamptz DEFAULT now()
);

-- Sessions / tokens table (optional if using Supabase Auth)
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  token text NOT NULL,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz
);

-- Example domain table: items
CREATE TABLE IF NOT EXISTS items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES users(id) ON DELETE SET NULL,
  title text NOT NULL,
  description text,
  price numeric(10,2) DEFAULT 0,
  archived boolean DEFAULT FALSE,
  created_at timestamptz DEFAULT now()
);

-- Audit / logs
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid,
  action text NOT NULL,
  object_type text,
  object_id uuid,
  meta jsonb,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_items_owner ON items(owner_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
`
}

function defaultSeed() {
  return `-- db/seed.sql
-- Sample seed data for local development

INSERT INTO users (id, email, full_name, provider, provider_id, created_at)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'alice@example.com', 'Alice Example', 'email', NULL, now()),
  ('00000000-0000-0000-0000-000000000002', 'bob@example.com', 'Bob Example', 'email', NULL, now())
ON CONFLICT DO NOTHING;

INSERT INTO items (id, owner_id, title, description, price, created_at)
VALUES
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Sample Item A', 'A sample item', 9.99, now()),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'Sample Item B', 'Another sample item', 19.99, now())
ON CONFLICT DO NOTHING;
`
}

function generatePhase3() {
  const base = process.cwd()
  const schemaPath = path.join(base, 'db', 'schema.sql')
  const seedPath = path.join(base, 'db', 'seed.sql')

  const results = []
  results.push(writeIfMissing(schemaPath, defaultSchema()))
  results.push(writeIfMissing(seedPath, defaultSeed()))

  return results
}

module.exports = { generatePhase3 }
