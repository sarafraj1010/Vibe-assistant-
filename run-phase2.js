// run-phase2.js — Phase 2 runner
const { generateDesignSystem } = require('./src/phase2_designSystem');

async function main() {
  try {
    const results = generateDesignSystem();
    console.log('Phase 2 generation results:', results);
    process.exit(0);
  } catch (err) {
    console.error('Phase 2 error:', err);
    process.exit(1);
  }
}

main();
