import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterAll } from 'vitest';
import Orchestrator from '../src/orchestrator.js';

const outFiles = [
  path.join(process.cwd(), 'branding', 'theme.json'),
  path.join(process.cwd(), 'branding', 'logo.svg'),
  path.join(process.cwd(), 'components', 'ui', 'Button.jsx'),
];

describe('Phase1 Branding', () => {
  it('runs phase1 and produces expected files', async () => {
    const res = await Orchestrator.runPhase1({ dry: true });
    expect(res.success).toBe(true);
    for (const f of outFiles) {
      expect(fs.existsSync(f)).toBe(true);
      const stat = fs.statSync(f);
      expect(stat.size).toBeGreaterThan(10);
    }
  });

  afterAll(() => {
    // cleanup: remove generated files to keep repo tidy for CI
    for (const f of outFiles) {
      try {
        if (fs.existsSync(f)) fs.unlinkSync(f);
      } catch (e) {}
    }
    try {
      if (fs.existsSync(path.join(process.cwd(), 'branding'))) {
        fs.rmdirSync(path.join(process.cwd(), 'branding'), { recursive: true });
      }
    } catch (e) {}
  });
});
