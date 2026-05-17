const { execSync } = require('child_process')
const path = require('path')

async function ensure(deps = [], options = { autoInstall: true }) {
  // deps: array of package names, with optional version
  if (!Array.isArray(deps) || deps.length === 0) return true

  // Check each dep
  const toInstall = []
  for (const dep of deps) {
    try {
      require.resolve(dep)
    } catch (e) {
      toInstall.push(dep)
    }
  }

  if (toInstall.length === 0) return true

  if (!options.autoInstall) {
    throw new Error('Missing dependencies: ' + toInstall.join(', '))
  }

  console.log('[DependencyManager] Installing:', toInstall.join(' '))
  try {
    execSync('npm install ' + toInstall.join(' '), { stdio: 'inherit' })
    return true
  } catch (err) {
    console.error('[DependencyManager] npm install failed', err)
    throw err
  }
}

module.exports = { ensure }
