// Generate WIDER cinematic hero portraits for each persona at 1536x1024 (3:2).
// Uses the existing avatar PNG as a reference image so character design stays
// consistent. Each scene expands to a more editorial "in-element" composition
// with the creature occupying ~40% of the frame and atmospheric negative space
// for typography overlay.
//
// Output: site/public/avatars/heroes/<slug>-wide.png

import { createReadStream, writeFileSync, mkdirSync, existsSync } from "fs";
import { basename } from "path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillNodeModules = join(os.homedir(), ".claude", "skills", "gpt2-image", "node_modules");
const require = createRequire(import.meta.url);

let OpenAI, toFile;
try {
  const mod = require(join(skillNodeModules, "openai"));
  OpenAI = mod.default || mod.OpenAI;
  toFile = mod.toFile;
} catch (e) {
  console.error("openai not found at", skillNodeModules);
  process.exit(1);
}

const client = new OpenAI({ timeout: 300_000, maxRetries: 3 });

const SRC_AVATARS = join(__dirname, "..", "site", "public", "avatars");
const OUT_DIR = join(SRC_AVATARS, "heroes");
mkdirSync(OUT_DIR, { recursive: true });

const STYLE = `Photorealistic 3D cinematic editorial portrait. Wider 3:2 framing showing the creature occupying roughly 35-45% of the frame, positioned right-of-center, with atmospheric negative space on the left for typographic overlay. Background: matte off-black backdrop in #0E0E10 with subtle volumetric atmosphere, depth, and a single soft directional light from upper camera-left. Cinematic chiaroscuro contrast, sharp focus on the creature, very slight depth of field. STRICT PALETTE: only matte black #111111, signal-red accent #E63B2E (used surgically for eyes, glowing veins, accent light, markings — the only saturated color), warm beige #E8E4DD (secondary surfaces / fabric), and the off-black background #0E0E10. No other colors, no blue/green/teal/purple/yellow tints, no neon glow. Magazine-cover aesthetic, like an editorial spread of an alien diplomat. Avoid: cartoon style, anime, mechanical seams, multiple subjects, weapons, cluttered objects, sci-fi armor, blue rim lighting, gold tints. Match the EXACT character design, silhouette, and surface treatment of the reference image — same creature, expanded scene.`;

const personas = [
  { slug: "elias-the-brand-lead", scene: "The creature stands in a vast empty void, one hand cradling a small floating signal-red orb at chest level. Slight beige fabric drape falls behind. Composition leaves left two-thirds of frame as negative space with subtle linen-grain texture." },
  { slug: "maya-the-conversion-specialist", scene: "The angular faceted creature in alert stance, slightly leaning forward. A single signal-red circuit-line traces from temple down chest into the air beside the body, dissolving into faint particles. Negative space left for headline." },
  { slug: "daniel-the-copy-chief", scene: "The bookish editor creature surrounded by 6-8 small fragments of paper-like material in matte black and warm beige, suspended midair as if frozen mid-flutter. One stained signal-red finger raised slightly." },
  { slug: "yara-the-seo-lead", scene: "The root-creature standing tall, faint glowing signal-red venous patterns visible across the bark-textured body, with thin tendril-like extensions reaching softly into the surrounding void as if exploring distant ground." },
  { slug: "reza-the-media-buyer", scene: "Four-armed predator-creature with the broad signal-red ticker-band glowing across the eye area. Two arms folded across chest, two arms held alert at sides. Faint suspended signal-red data motes drift in the air around the figure." },
  { slug: "nadia-the-strategist", scene: "The visor creature in classic chin-on-finger thinking pose, the wide horizontal signal-red visor band glowing softly. Beige cloak draping from shoulders into the floor. The atmosphere reads contemplative, slow." },
  { slug: "ines-the-customer-success-lead", scene: "The porcelain creature with one slender beige-glowing arm extended slightly forward in a gesture of offering or listening. The signal-red third-eye mark glows softly at the forehead. Composition warm and open." },
  { slug: "theo-the-growth-engineer", scene: "The builder-creature mid-construction stance, mechanical-organic Möbius loops around chest and shoulders glowing at intersection nodes in signal-red. One hand is raised holding a partially-constructed loop, parts suspended midair around the figure." },
  { slug: "marcus-the-operator", scene: "The architectural slab-creature stands upright, signal-red fluid channels visibly flowing vertically through the body. The composition emphasizes verticality and order. Subtle ground-line shadow at the base." },
  { slug: "priya-the-analyst", scene: "The multi-eyed observer creature with 7-9 small signal-red glowing eyes across the upper face, surrounded by 8-12 small floating signal-red data motes suspended in midair like a constellation. Cool detached posture." },
];

async function generateOne(p) {
  const outPath = join(OUT_DIR, `${p.slug}-wide.png`);
  if (existsSync(outPath)) {
    process.stdout.write(`◌ ${p.slug} (skip)\n`);
    return { slug: p.slug, skipped: true };
  }

  const refPath = join(SRC_AVATARS, `${p.slug}.png`);
  if (!existsSync(refPath)) {
    process.stdout.write(`✗ ${p.slug}: ref missing at ${refPath}\n`);
    return { slug: p.slug, error: "ref-missing" };
  }

  const prompt = `${STYLE}\n\nScene: ${p.scene}`;
  const t0 = Date.now();
  process.stdout.write(`▶ ${p.slug}…\n`);
  try {
    const refFile = await toFile(createReadStream(refPath), basename(refPath), { type: "image/png" });
    const res = await client.images.edit({
      model: "gpt-image-2",
      image: [refFile],
      prompt,
      size: "1536x1024",
      quality: "medium",
      n: 1,
    });
    const b64 = res.data?.[0]?.b64_json;
    if (!b64) throw new Error("no image returned");
    writeFileSync(outPath, Buffer.from(b64, "base64"));
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`✓ ${p.slug} (${elapsed}s)\n`);
    return { slug: p.slug, path: outPath };
  } catch (err) {
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`✗ ${p.slug} (${elapsed}s): ${err.message}\n`);
    return { slug: p.slug, error: err.message };
  }
}

const start = Date.now();
console.log(`Generating ${personas.length} cinematic wide hero portraits sequentially...`);
const results = [];
for (const p of personas) {
  results.push(await generateOne(p));
}
const ok = results.filter((r) => !r.error && !r.skipped).length;
const skipped = results.filter((r) => r.skipped).length;
const fail = results.filter((r) => r.error);
console.log(`\nDone in ${((Date.now() - start) / 1000).toFixed(1)}s. ${ok} new, ${skipped} skipped, ${fail.length} failed.`);
if (fail.length) {
  console.log("\nFailures:");
  for (const f of fail) console.log(`  - ${f.slug}: ${f.error}`);
  process.exit(1);
}
