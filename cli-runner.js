#!/usr/bin/env node
const Orchestrator = require('./src/orchestrator')
const Phase2 = require('./src/phase2_designSystem')
const chalk = require('chalk')

async function main() {
  console.log(chalk.cyan('Vibe-assistant — Phase runner'))
  const argv = process.argv.slice(2)
  const phase = argv[0] || '1'
  if (phase === '1') {
    await Orchestrator.runPhase1({ dry: false })
    process.exit(0)
  }
  if (phase === '2') {
    const res = Phase2.generateDesignSystem()
    console.log('Phase 2 results:', res)
    process.exit(0)
  }

  console.log('Unknown phase: ' + phase)
  process.exit(2)
}

main()
