#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const src = path.join(root, 'index.html');
const wwwDir = path.join(__dirname, '..', 'www');
const dest = path.join(wwwDir, 'index.html');

if (!fs.existsSync(src)) {
  console.error('ERROR: Root index.html not found at ' + src);
  process.exit(1);
}

if (!fs.existsSync(wwwDir)) fs.mkdirSync(wwwDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log('Copied index.html -> mobile/www/index.html');