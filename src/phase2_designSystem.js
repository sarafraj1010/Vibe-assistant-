// src/phase2_designSystem.js
// Phase 2: Design System & UI Kit generator
// Reads branding/theme.json if present, otherwise falls back to defaults.
// Produces design/tokens.json, tailwind.config.js, and atomic components.

const fs = require('fs');
const path = require('path');

function readBrandingTokens() {
  const brandingPath = path.join(process.cwd(), 'branding', 'theme.json');
  if (fs.existsSync(brandingPath)) {
    try {
      const json = JSON.parse(fs.readFileSync(brandingPath, 'utf8'));
      // Accept both { name, tokens: {...} } and flat tokens
      if (json.tokens) return json.tokens;
      return json;
    } catch (e) {
      // ignore parse errors
    }
  }
  // defaults
  return {
    name: 'vibe-app',
    primary: '#0ea5e9',
    accent: '#7c3aed',
    bg: '#ffffff',
    text: '#0f172a',
    fonts: { display: 'Syne, sans-serif', body: 'Inter, sans-serif' },
    spacing: { px: '1px', '0': '0px', '1': '4px', '2': '8px', '3': '12px', '4': '16px' },
    radii: { sm: '6px', md: '10px', lg: '16px' }
  };
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFileIfMissing(fp, contents) {
  const dir = path.dirname(fp);
  ensureDir(dir);
  if (fs.existsSync(fp)) return { skipped: true, path: fp };
  fs.writeFileSync(fp, contents, 'utf8');
  return { written: true, path: fp };
}

function generateTokensFile(tokens) {
  const out = {
    name: tokens.name || 'vibe-app',
    colors: {
      primary: tokens.primary,
      accent: tokens.accent,
      background: tokens.bg,
      text: tokens.text
    },
    fonts: tokens.fonts || {},
    spacing: tokens.spacing || {},
    radii: tokens.radii || {}
  };
  const fp = path.join(process.cwd(), 'design', 'tokens.json');
  return writeFileIfMissing(fp, JSON.stringify(out, null, 2));
}

function generateTailwindConfig(tokens) {
  const config = `module.exports = {
  content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx,html}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '${tokens.primary}',
        accent: '${tokens.accent}',
        background: '${tokens.bg}',
        text: '${tokens.text}',
      },
      borderRadius: {
        sm: '${tokens.radii?.sm || '6px'}',
        md: '${tokens.radii?.md || '10px'}',
        lg: '${tokens.radii?.lg || '16px'}'
      },
      spacing: ${JSON.stringify(tokens.spacing || {})}
    }
  },
  plugins: []
};
`;
  const fp = path.join(process.cwd(), 'tailwind.config.js');
  return writeFileIfMissing(fp, config);
}

function generateComponents(tokens) {
  const outFiles = [];
  const baseDir = path.join(process.cwd(), 'components', 'ui');
  ensureDir(baseDir);

  const inputComp = `import React from 'react';

/**
 * Input.jsx — generated input component
 */
export default function Input({ label, ...props }) {
  return (
    <label className="block">
      {label && <span className="text-sm text-[${tokens.text}] mb-1 block">{label}</span>}
      <input {...props} className="w-full border rounded-md px-3 py-2 border-gray-200 focus:outline-none focus:ring-2" />
    </label>
  );
}
`.replace(/\$\{tokens.text\}/g, tokens.text || '#0f172a');

  const cardComp = `import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={"bg-white shadow-sm rounded-md p-4 " + className}>
      {children}
    </div>
  );
}
`;

  const modalComp = `import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-md shadow-lg p-4 z-10 max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}
`;

  outFiles.push(writeFileIfMissing(path.join(baseDir, 'Input.jsx'), inputComp));
  outFiles.push(writeFileIfMissing(path.join(baseDir, 'Card.jsx'), cardComp));
  outFiles.push(writeFileIfMissing(path.join(baseDir, 'Modal.jsx'), modalComp));

  return outFiles;
}

function generateDemoPage() {
  const fp = path.join(process.cwd(), 'pages', 'components-demo.html');
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Components Demo</title>
  </head>
  <body style="font-family: Inter, sans-serif; padding: 24px; background: ${readBrandingTokens().bg}; color: ${readBrandingTokens().text};">
    <h1>Components Demo</h1>
    <div id="demo">
      <div style="max-width:520px;">
        <div style="margin-bottom:16px;">
          <button style="background:${readBrandingTokens().primary}; color:white; padding:8px 12px; border-radius:8px; border:none;">Primary Button</button>
        </div>
        <div style="margin-bottom:8px;">
          <input placeholder="Input" style="width:100%; padding:8px 12px; border-radius:6px; border:1px solid #e5e7eb;"/>
        </div>
        <div>
          <div style="padding:12px; border-radius:8px; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,0.04);">Card Example</div>
        </div>
      </div>
    </div>
  </body>
</html>`;
  return writeFileIfMissing(fp, html);
}

function generateDesignSystem(options = {}) {
  const tokens = readBrandingTokens();
  const results = [];
  results.push(generateTokensFile(tokens));
  results.push(generateTailwindConfig(tokens));
  const comps = generateComponents(tokens);
  comps.forEach((c) => results.push(c));
  results.push(generateDemoPage());
  return results;
}

module.exports = { generateDesignSystem };
