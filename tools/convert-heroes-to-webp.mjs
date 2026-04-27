// Convert wide hero portraits (1536x1024) to WebP at responsive sizes.
// Sizes: 1536 (full), 1024 (mid), 640 (thumb).

import { readdir, mkdir, stat } from "fs/promises";
import { dirname, join, basename } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require(join(__dirname, "..", "node_modules", "sharp"));

const SRC_DIR = join(__dirname, "..", "site", "public", "avatars", "heroes");
const SIZES = [
  { w: 1536, h: 1024, suffix: "1536" },
  { w: 1024, h: 683, suffix: "1024" },
  { w: 640, h: 427, suffix: "640" },
];

const start = Date.now();
const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith("-wide.png"));
console.log(`Converting ${files.length} hero portraits × ${SIZES.length} sizes = ${files.length * SIZES.length} WebP files...`);

const tasks = [];
for (const file of files) {
  const slug = basename(file, "-wide.png");
  const srcPath = join(SRC_DIR, file);
  for (const s of SIZES) {
    const outName = `${slug}-${s.suffix}.webp`;
    const outPath = join(SRC_DIR, outName);
    tasks.push(
      sharp(srcPath)
        .resize(s.w, s.h, { fit: "cover" })
        .webp({ quality: 82, effort: 6 })
        .toFile(outPath)
        .then((info) => ({ slug, size: s.suffix, bytes: info.size }))
    );
  }
}

const results = await Promise.all(tasks);
const totalKB = (results.reduce((s, r) => s + r.bytes, 0) / 1024).toFixed(0);
console.log(`Done in ${((Date.now() - start) / 1000).toFixed(1)}s. Total payload: ${totalKB} KB.`);

// Per-persona summary
const bySlug = {};
for (const r of results) {
  bySlug[r.slug] = bySlug[r.slug] || [];
  bySlug[r.slug].push(r);
}
for (const [slug, sizes] of Object.entries(bySlug)) {
  const sizeStr = sizes.map((s) => `${s.size}: ${(s.bytes / 1024).toFixed(0)}KB`).join(" · ");
  console.log(`  ${slug.padEnd(38)} ${sizeStr}`);
}
