const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const chalk = require('chalk')
const Phase1 = require('./phase1_branding')
const DependencyManager = require('./dependencyManager')

const MEMORY_PATH = path.join(process.cwd(), 'memory.md')

function readMemory() {
  if (!fs.existsSync(MEMORY_PATH)) return ''
  return fs.readFileSync(MEMORY_PATH, 'utf8')
}

function updateMemory(sectionTitle, text) {
  let content = readMemory()
  const marker = `## ${sectionTitle}`
  if (content.includes(marker)) {
    // Append to section
    content = content + '\n' + text + '\n'
  } else {
    content = content + '\n## ' + sectionTitle + '\n' + text + '\n'
  }
  fs.writeFileSync(MEMORY_PATH, content, 'utf8')
}

async function runPhase1(options = {}) {
  console.log(chalk.cyan('\n[Orchestrator] Starting Phase 1: Branding & Design System'))

  // Ensure dependencies needed for phase1 are installed (none heavy)
  if (!options.dry) {
    try {
      await DependencyManager.ensure([])
    } catch (err) {
      console.error(chalk.red('[DependencyManager] Failed to ensure dependencies:'), err)
    }
  } else {
    console.log(chalk.yellow('[Orchestrator] Dry mode — skipping dependency installs'))
  }

  const prdPath = path.join(process.cwd(), 'prd.md')
  let prd = ''
  if (fs.existsSync(prdPath)) {
    prd = fs.readFileSync(prdPath, 'utf8')
  }

  const branding = Phase1.generateBranding({ prd, options })

  // Write branding outputs
  const brandingDir = path.join(process.cwd(), 'branding')
  if (!fs.existsSync(brandingDir)) fs.mkdirSync(brandingDir)

  fs.writeFileSync(path.join(brandingDir, 'theme.json'), JSON.stringify(branding.theme, null, 2), 'utf8')
  fs.writeFileSync(path.join(brandingDir, 'logo.svg'), branding.logoSvg, 'utf8')

  // Create a simple Button component as example
  const componentsDir = path.join(process.cwd(), 'components', 'ui')
  fs.mkdirSync(componentsDir, { recursive: true })
  fs.writeFileSync(path.join(componentsDir, 'Button.jsx'), branding.buttonComponent, 'utf8')

  updateMemory('Branding', `Phase 1 completed: theme.json, logo.svg, Button.jsx created at ${new Date().toISOString()}`)

  console.log(chalk.green('[Orchestrator] Phase 1 complete. Files created: branding/theme.json, branding/logo.svg, components/ui/Button.jsx'))
  return { success: true, files: ['branding/theme.json', 'branding/logo.svg', 'components/ui/Button.jsx'] }
}

async function runFullBuild(options = {}) {
  console.log(chalk.cyan('\n[Orchestrator] Starting full build (phases will run sequentially)'))

  // Phase 1
  await runPhase1(options)

  // For now, stub Phase 2..N
  updateMemory('BuildProgress', 'Completed Phase 1: Branding & Design System')

  console.log(chalk.cyan('\n[Orchestrator] Build paused — remaining phases will be implemented incrementally.'))
  return true
}

module.exports = {
  runPhase1,
  runFullBuild,
  readMemory,
  updateMemory,
}
