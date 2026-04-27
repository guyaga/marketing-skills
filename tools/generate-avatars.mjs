// Generate 10 persona avatars via OpenAI gpt-image-2.
// Tighter style block, medium quality, batched 3 concurrent, retries.
//
// Usage: OPENAI_API_KEY=sk-... node tools/generate-avatars.mjs

import { createRequire } from "module";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillNodeModules = join(os.homedir(), ".claude", "skills", "gpt2-image", "node_modules");
const require = createRequire(import.meta.url);

let OpenAI;
try {
  OpenAI = require(join(skillNodeModules, "openai")).default;
} catch (e) {
  console.error("Run: npm install openai --prefix ~/.claude/skills/gpt2-image");
  process.exit(1);
}

const client = new OpenAI({
  timeout: 300_000,
  maxRetries: 3,
});

const OUT_DIR = join(__dirname, "..", "site", "public", "avatars");
mkdirSync(OUT_DIR, { recursive: true });

const STYLE = `Photorealistic editorial portrait, chest-up, three-quarter angle, relaxed neutral expression. Shot on 35mm film, natural directional lighting from camera left, sharp focus on the eyes. Background: warm off-white textured paper, color #F5F3EE, no objects. Subject wears minimal monochrome clothing in black, charcoal, or off-white, no logos, no patterns. One small signal-red accent (#E63B2E) visible in the frame. Square 1:1 composition. Magazine-editorial aesthetic. Avoid stock photo feel, sunglasses, multiple subjects, busy backgrounds, wide grins, cinematic color grading.`;

const personas = [
  { slug: "elias-the-brand-lead", desc: "Man in his late 50s, salt-and-pepper hair, deep-set thoughtful eyes, weathered kind face. Mediterranean features. Black mock-neck sweater. Small signal-red ribbon pinned to collar." },
  { slug: "maya-the-conversion-specialist", desc: "Woman in her early 30s, dark hair pulled back, sharply focused expression. East-Asian features. White button-down under charcoal blazer. Signal-red watch face at lower edge of frame." },
  { slug: "daniel-the-copy-chief", desc: "Man in his mid-40s, slightly disheveled curly dark hair, reading glasses pushed onto forehead, bookish face. Mediterranean features. Gray cardigan over white t-shirt. Signal-red felt pen behind right ear." },
  { slug: "yara-the-seo-lead", desc: "Woman in her late 30s, tightly braided black hair, calm patient gaze. Middle-Eastern features. Fitted black mock-neck sweater. Small signal-red round stud earring." },
  { slug: "reza-the-media-buyer", desc: "Man in his early 30s, clean-shaven head, short trimmed beard, intense alert eyes, faint half-smile. Persian features. Black bomber jacket over white tee. Signal-red watch face on left wrist." },
  { slug: "nadia-the-strategist", desc: "Woman in her mid-40s, dark gray-streaked hair in low bun, skeptical attentive expression with one eyebrow slightly raised. South-Asian features. Charcoal blazer over black silk shirt. Signal-red ink mark on side of index finger." },
  { slug: "ines-the-customer-success-lead", desc: "Woman in her late 30s, shoulder-length wavy brown hair, warm empathetic eyes, soft knowing half-smile. Latin-American features. Cream linen shirt under fitted black vest. Small signal-red embroidered flower on collar." },
  { slug: "theo-the-growth-engineer", desc: "Man in his early 30s, messy short brown hair, focused builder expression, light stubble. Northern-European features. Plain black hoodie under unstructured charcoal jacket. Signal-red zip-tie around leather satchel strap." },
  { slug: "marcus-the-operator", desc: "Man in his late 40s, short well-groomed graying hair, calm process-disciplined gaze, faint half-smile. African-American features. Tailored black suit jacket over white shirt without tie. Signal-red lanyard tag at collar." },
  { slug: "priya-the-analyst", desc: "Woman in her early 30s, shoulder-length straight black hair, thin-framed glasses, sharp dry expression. South-Asian features. Fitted heather-gray sweater. Signal-red notebook tucked under left arm, edge visible." },
];

async function generate(p) {
  const outPath = join(OUT_DIR, `${p.slug}.png`);
  if (existsSync(outPath)) {
    process.stdout.write(`◌ ${p.slug} (already exists, skip)\n`);
    return { slug: p.slug, path: outPath, skipped: true };
  }
  const prompt = `${STYLE}\n\nSubject: ${p.desc}`;
  const t0 = Date.now();
  process.stdout.write(`▶ ${p.slug}…\n`);
  try {
    const res = await client.images.generate({
      model: "gpt-image-2",
      prompt,
      size: "1024x1024",
      quality: "medium",
      n: 1,
    });
    const b64 = res.data?.[0]?.b64_json;
    if (!b64) throw new Error("No image returned");
    writeFileSync(outPath, Buffer.from(b64, "base64"));
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`✓ ${p.slug} (${elapsed}s)\n`);
    return { slug: p.slug, path: outPath };
  } catch (err) {
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`✗ ${p.slug} (${elapsed}s): ${err.message}\n`);
    throw err;
  }
}

// Batch processing — N at a time
async function runBatched(items, batchSize) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    process.stdout.write(`\n--- Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(items.length / batchSize)} (${batch.length} items) ---\n`);
    const batchResults = await Promise.allSettled(batch.map(generate));
    results.push(...batchResults);
  }
  return results;
}

const start = Date.now();
console.log(`Generating ${personas.length} avatars sequentially (batch=1), medium quality, with retries. Existing files skip.`);
const results = await runBatched(personas, 1);
const ok = results.filter((r) => r.status === "fulfilled").length;
const fail = results.filter((r) => r.status === "rejected");
const totalSec = ((Date.now() - start) / 1000).toFixed(1);

console.log(`\n=== Done in ${totalSec}s. ${ok}/${personas.length} succeeded. ===`);
if (fail.length) {
  console.log(`\nFailures:`);
  for (const f of fail) console.log(`  - ${f.reason?.message ?? f.reason}`);
  process.exit(1);
}
