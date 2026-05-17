#!/usr/bin/env bash
set -euo pipefail

echo "🛠️  Vibe-assistant init script — starting..."

# Check Node
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Please install Node.js >= 18.x and try again." >&2
  exit 1
fi

# Check npm
if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed. Please install npm and try again." >&2
  exit 1
fi

# Create .env.local from example if missing
if [ ! -f .env.local ]; then
  if [ -f .env.example ]; then
    cp .env.example .env.local
    echo "Created .env.local from .env.example — edit .env.local with your keys."
  else
    echo "No .env.example found. Please create .env.local with required env variables." >&2
  fi
else
  echo ".env.local already exists — leaving it in place."
fi

# Install dependencies
echo "Installing dependencies (this may take a few minutes)..."
npm install

# Create memory.md if missing
if [ ! -f memory.md ]; then
  cat > memory.md <<'EOF'
# memory.md — Vibe-assistant session ledger

## Identity
Name    :
Type    :
Stack   : Next.js + Supabase (default)

## Build Progress
- [ ] Repo scaffolded
- [ ] Dependencies installed
- [ ] Auth system
- [ ] Database schema
- [ ] UI components
- [ ] Features
- [ ] Tests
- [ ] Deploy ready

## Session Log


## Next Steps


EOF
  echo "Created memory.md template"
else
  echo "memory.md exists — leaving it in place."
fi

# Make CLI executable
if [ -f cli.js ]; then
  chmod +x cli.js || true
  echo "Marked cli.js executable"
fi

# Final message
cat <<'MSG'

✅ Vibe-assistant initialization complete.

Next steps:
  1. Edit .env.local with your environment keys (Supabase, OpenAI, Razorpay, etc.).
  2. Run the CLI to start building:
       node cli.js
     or (after global install):
       vibe-assistant

If you want to run the full automated build after answering initial questions:
  npm run init-repo

Note: This init script installs dependencies but DOES NOT deploy anything or make purchases.
MSG
