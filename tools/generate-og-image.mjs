// Generate a 1200x630 default OG image for social sharing.
// Brand-locked: warm off-black bg, signal-red accent, Fraunces-style display copy.
//
// Renders an SVG → PNG at 1200x630 with sharp.

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require(join(__dirname, "..", "node_modules", "sharp"));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- bg -->
  <rect width="1200" height="630" fill="#0e0e10"/>
  <!-- subtle grid -->
  <g stroke="#1f1f24" stroke-width="1" opacity="0.7">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 64}" y1="0" x2="${i * 64}" y2="630"/>`).join("")}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 64}" x2="1200" y2="${i * 64}"/>`).join("")}
  </g>
  <!-- red accent stripe top-left -->
  <rect x="80" y="80" width="4" height="56" fill="#e63b2e"/>
  <!-- eyebrow -->
  <text x="100" y="118" font-family="Inconsolata, JetBrains Mono, ui-monospace, monospace" font-size="14" fill="#e63b2e" font-weight="600" letter-spacing="3.5">
    MARKETING SKILLS · v0.1
  </text>
  <!-- main headline -->
  <text x="80" y="280" font-family="Georgia, Fraunces, serif" font-size="84" fill="#f2efe8" font-weight="400" letter-spacing="-2">
    Your AI marketing team.
  </text>
  <text x="80" y="380" font-family="Georgia, Fraunces, serif" font-size="84" fill="#f2efe8" font-weight="400" letter-spacing="-2">
    Ten specialists.
  </text>
  <text x="80" y="480" font-family="Georgia, Fraunces, serif" font-size="84" fill="#f2efe8" font-weight="400" letter-spacing="-2">
    One install.
  </text>
  <!-- footer mono row -->
  <line x1="80" y1="540" x2="1120" y2="540" stroke="#2a2a30" stroke-width="1"/>
  <text x="80" y="575" font-family="Inconsolata, JetBrains Mono, ui-monospace, monospace" font-size="14" fill="#b8b4ab" letter-spacing="2">
    48 SKILLS · 10 SPECIALISTS · CRO · COPY · SEO · PAID · RETENTION · GROWTH
  </text>
  <!-- right-edge brand mark -->
  <text x="1120" y="118" font-family="Georgia, Fraunces, serif" font-size="22" fill="#f2efe8" text-anchor="end">
    marketing-skills.guyaga.ai
  </text>
</svg>
`.trim();

const outDir = join(__dirname, "..", "site", "public");
const outPath = join(outDir, "og-default.png");

await sharp(Buffer.from(svg))
  .resize(1200, 630, { fit: "fill" })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(outPath);

const { size: bytes } = await import("fs/promises").then((m) => m.stat(outPath));
console.log(`✓ Generated ${outPath} (${(bytes / 1024).toFixed(0)} KB)`);
