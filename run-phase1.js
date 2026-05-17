// run-phase1.js — small runner for Phase 1
const Orchestrator = require('./src/orchestrator');

async function main() {
  try {
    const result = await Orchestrator.runPhase1({ dry: true });
    if (result && result.success) {
      console.log('Phase 1 completed successfully:', result.files);
      process.exit(0);
    } else {
      console.error('Phase 1 did not complete successfully.', result);
      process.exit(2);
    }
  } catch (err) {
    console.error('Phase 1 runner error:', err);
    process.exit(3);
  }
}

main();
