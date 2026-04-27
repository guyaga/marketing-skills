// Generate 10 persona creature avatars via OpenAI gpt-image-2.
// Style: distinct alien morphologies per persona, strict Guy Aga brand palette
// (black #111111, signal-red #E63B2E, beige #E8E4DD, off-white #F5F3EE bg only).
// Sequential (batch=1) for reliability.

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

const client = new OpenAI({ timeout: 300_000, maxRetries: 3 });
const OUT_DIR = join(__dirname, "..", "site", "public", "avatars");
mkdirSync(OUT_DIR, { recursive: true });

const STYLE = `Photorealistic 3D editorial portrait of an otherworldly creature, chest-up framing, three-quarter angle facing slightly off-camera. Background: warm matte off-black backdrop, color #0E0E10, slight subtle texture (like soft black canvas or dark linen), completely empty, no objects, no gradient, evenly lit. Lighting: soft directional light from camera left rim-lighting the creature edge, sharp specular reflections where surfaces are reflective, dramatic chiaroscuro contrast. Square 1:1 composition, magazine-editorial framing with intentional negative space on one side. Cyberpunk-meets-haute-couture aesthetic, like a Vogue cover shoot of an alien diplomat shot in a dark studio. High contrast, slight depth of field, sharp focus on the face. STRICT PALETTE: matte deep black creature body #111111 (which blends into the dark background), signal-red accent #E63B2E (used surgically for eyes, glowing veins, markings, visor light, ink — this is the only saturated color), warm beige #E8E4DD (secondary surfaces or fabric, used to lift the figure off the dark background), and the off-black background #0E0E10. No other colors — no blues, greens, yellows, neon, fluorescent, gold, silver, purple, teal tints. Avoid: cartoon style, anime aesthetic, soft children's-illustration look, mechanical seams or robot bolts, cluttered backgrounds, multiple subjects, weapons, bright neon glow, sci-fi power-armor, blue/green/teal tints, generic alien tropes, pure-white highlights or sky-blue rim light.`;

const personas = [
  {
    slug: "elias-the-brand-lead",
    desc: "A wise tall ethereal being with a smooth elongated obsidian-black skull, no visible features except a pattern of small softly-glowing signal-red dots arranged across its forehead and temples like a constellation map. Body draped in matte black and warm beige flowing fabric-like material that merges seamlessly with its skin, suggestive of monastic robes. Calm deliberate posture, head tilted slightly downward as if contemplating. Holds in its long elegant fingers a single glowing signal-red sphere the size of a marble, held delicately between thumb and forefinger. Ancient observer, keeper of meaning.",
  },
  {
    slug: "maya-the-conversion-specialist",
    desc: "A hyper-alert angular humanoid creature whose body is made of interlocking polished matte-black geometric facets like cut obsidian. Sharp asymmetric silhouette suggesting predatory focus. A single signal-red glowing line traces from the side of its head down through the chest like a circuit pulse. Eyes are two narrow horizontal slits emitting faint signal-red light. Posture leans slightly forward, alert and ready. Precision predator that sees every micro-movement.",
  },
  {
    slug: "daniel-the-copy-chief",
    desc: "A bookish dignified being with a smooth beige-porcelain head and elongated thoughtful posture. Around its head and shoulders float small fragments of paper-like material in matte black and warm beige, suspended in midair as if frozen mid-page-turn, forming a halo of pages. One slender hand visibly stained with signal-red ink that drips down a single finger. Wears a draping matte black robe-like form that flows seamlessly into its body. Senior editor, monastic and exact.",
  },
  {
    slug: "yara-the-seo-lead",
    desc: "A patient root-like vertical being. Body made of dark obsidian-black bark texture with thin glowing signal-red veins branching through it like a tree's circulatory system or fungal mycelium. Tall narrow silhouette, slightly stooped with the weight of slow growth. Single small glowing signal-red eye at the upper center of the head, softly lit. Surfaces look ancient and slow-grown, faintly textured. Deep-time gardener who plays the long compounding game.",
  },
  {
    slug: "reza-the-media-buyer",
    desc: "A compact intense predator-like creature with a stocky muscular humanoid silhouette covered in matte black surfaces. Four lean arms total, two folded across the chest and two held alert at the sides. The face is dominated by a single broad horizontal band of signal-red light that scrolls across where the eyes would be, like a stock ticker mid-quote. Quick alert posture. Wired-in trader watching every signal in real time.",
  },
  {
    slug: "nadia-the-strategist",
    desc: "A skeptical contemplative being with a tall elegant form. Body in deep matte black with one wide signal-red horizontal stripe wrapping the head at eye level like a visor; behind the visor only the red glow is visible, no eyes. Long elegant fingers raised to its chin in a classic thinking gesture. Wears a flowing warm beige cloak that drapes from the shoulders. Senior strategist who reframes the question before answering it.",
  },
  {
    slug: "ines-the-customer-success-lead",
    desc: "A gentle warm-presenced being with a soft beige-porcelain body, smooth and slightly translucent like porcelain held to light. Long graceful arms suggesting it can reach toward and hold people. The face is featureless except for a single signal-red mark glowing softly in the center of the forehead like a third eye. Posture warm and open, head tilted slightly in attentive listening. Empath who senses what users are not saying.",
  },
  {
    slug: "theo-the-growth-engineer",
    desc: "A builder-creature with a humanoid silhouette but a body composed of matte black mechanical-organic hybrid forms. Visible looping circuits and Möbius-like rings integrated through the chest and shoulders, with signal-red glowing nodes at the loop intersection points. Hands have extra slender finger-like manipulators. Posture leaned slightly forward as if mid-construction. Engineer who builds compounding systems by hand.",
  },
  {
    slug: "marcus-the-operator",
    desc: "A tall ordered architectural being with a clean geometric silhouette, body made of stacked warm-beige and matte-black slab forms like a modernist sculpture. Visible thin signal-red channels run vertically through the body like fluid pipes carrying liquid light. Hands rest calmly at the sides. Upright composed posture. Process-keeper, the lifeline architect of the team.",
  },
  {
    slug: "priya-the-analyst",
    desc: "A multi-eyed observer creature with a smooth obsidian-black head dominated by a constellation of small signal-red glowing eyes — seven to nine of them — arranged across the upper face and temples. Body slender and matte-black, neutral upright posture. Around it float a few tiny signal-red particles suspended in the air like data points or motes of light. Dispassionate analyst who sees from many angles at once.",
  },
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

async function runBatched(items, batchSize) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    process.stdout.write(`\n--- Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(items.length / batchSize)} ---\n`);
    const batchResults = await Promise.allSettled(batch.map(generate));
    results.push(...batchResults);
  }
  return results;
}

const start = Date.now();
console.log(`Generating ${personas.length} creature avatars sequentially. Existing files skip — delete first to regenerate.`);
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
