// Convert avatar PNGs to WebP at multiple responsive sizes.
// Outputs: <slug>-{96,192,384,768}.webp + keeps the original .png as fallback.
//
// Usage: node tools/convert-avatars-to-webp.mjs

import { readdir, mkdir } from "fs/promises";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// sharp resolved from workspace root (npm workspaces dedupes to top-level node_modules)
const sharp = require(join(__dirname, "..", "node_modules", "sharp"));

const SRC_DIR = join(__dirname, "..", "site", "public", "avatars");
const OUT_DIR = SRC_DIR; // same folder

const SIZES = [96, 192, 384, 768];

async function convertOne(file) {
  if (!file.endsWith(".png")) return null;
  const slug = basename(file, ".png");
  const srcPath = join(SRC_DIR, file);
  const tasks = [];

  for (const size of SIZES) {
    const outName = `${slug}-${size}.webp`;
    const outPath = join(OUT_DIR, outName);
    tasks.push(
      sharp(srcPath)
        .resize(size, size, { fit: "cover" })
        .webp({ quality: 82, effort: 6 })
        .toFile(outPath)
        .then((info) => ({ size, path: outName, bytes: info.size }))
    );
  }

  const results = await Promise.all(tasks);
  return { slug, variants: results };
}

const start = Date.now();
const files = await readdir(SRC_DIR);
const pngs = files.filter((f) => f.endsWith(".png"));
console.log(`Converting ${pngs.length} avatars × ${SIZES.length} sizes = ${pngs.length * SIZES.length} WebP files...`);

const results = await Promise.all(pngs.map(convertOne));

const totalBytes = results.flatMap((r) => r.variants).reduce((s, v) => s + v.bytes, 0);
const totalKB = (totalBytes / 1024).toFixed(0);
const elapsed = ((Date.now() - start) / 1000).toFixed(1);

console.log(`\nDone in ${elapsed}s. ${results.length} avatars, ${SIZES.length} sizes each. Total WebP payload: ${totalKB} KB.`);
for (const r of results) {
  const sizes = r.variants.map((v) => `${v.size}: ${(v.bytes / 1024).toFixed(0)}KB`).join(" · ");
  console.log(`  ${r.slug.padEnd(38)} ${sizes}`);
}
