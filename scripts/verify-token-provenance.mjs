import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
const provenance = JSON.parse(readFileSync('design/provenance.json', 'utf8'));
const pkg = JSON.parse(readFileSync('node_modules/@usefragments/ui/package.json', 'utf8'));
const css = readFileSync(resolve('node_modules/@usefragments/ui', provenance.source));
if (pkg.version !== provenance.version || createHash('sha256').update(css).digest('hex') !== provenance.sourceSha256) throw new Error('Upstream package content changed; review provenance before updating.');
const snapshot = readFileSync('design/tokens.css', 'utf8');
for (const [name, value] of Object.entries(provenance.tokens)) {
  if (!snapshot.includes(`${name}: ${value};`)) throw new Error(`Token snapshot mismatch: ${name}`);
}
console.log(`Verified ${Object.keys(provenance.tokens).length} exact tokens from ${provenance.package}@${provenance.version}`);
