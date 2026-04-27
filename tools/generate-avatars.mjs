// Generate 10 persona avatars via OpenAI gpt-image-2.
// Locked style block + per-persona description.
// Runs all 10 in parallel via Promise.all.
//
// Usage: OPENAI_API_KEY=sk-... node tools/generate-avatars.mjs
//
// Requires: openai SDK (resolved from ~/.claude/skills/gpt2-image/node_modules)

import { createRequire } from "module";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillNodeModules = join(os.homedir(), ".claude", "skills", "gpt2-image", "node_modules");
const require = createRequire(import.meta.url);

// Resolve openai from the gpt2-image skill folder (already installed there).
let OpenAI;
try {
  OpenAI = require(join(skillNodeModules, "openai")).default;
} catch (e) {
  console.error("Failed to find openai SDK at", skillNodeModules);
  console.error("Run: npm install openai --prefix ~/.claude/skills/gpt2-image");
  process.exit(1);
}

const client = new OpenAI();
const OUT_DIR = join(__dirname, "..", "site", "public", "avatars");
mkdirSync(OUT_DIR, { recursive: true });

const STYLE = `Photorealistic editorial portrait of a single person, chest-up framing, subject looking three-quarter angle slightly off-camera, relaxed neutral expression with at most a faint half-smile. Shot on 35mm film with subtle grain, natural directional lighting from camera left, sharp focus on the eyes, slight depth of field. Background: warm off-white textured paper backdrop in #F5F3EE tone, subtle linen-like grain, no objects, no patterns. Subject wears minimal monochrome clothing in black, charcoal gray, or off-white — no visible logos, no patterns, no branded apparel. Exactly one small signal-red accent visible somewhere in the frame, color #E63B2E. High contrast, slight desaturation, low cinematic grading. Square 1:1 composition, subject framed centrally with subtle negative space. Aesthetic: agency magazine profile photograph, like a Vanity Fair editorial portrait of a senior marketing creative — restrained, intentional, expensive, never stock-photo. Avoid: stock photo feel, sunglasses, multiple subjects, busy backgrounds, hands visible making gestures, wide grins, cinematic teal-orange grading, fluorescent lighting, fashion-shoot intensity.`;

const personas = [
  {
    slug: "elias-the-brand-lead",
    role: "The Brand Lead",
    description:
      "A man in his late 50s with salt-and-pepper hair, deep-set thoughtful eyes, weathered but kind face, the look of an architect or senior editor who listens before speaking. White or Mediterranean features. Wears a fitted black mock-neck sweater. A single small signal-red ribbon detail pinned to his collar.",
  },
  {
    slug: "maya-the-conversion-specialist",
    role: "The Conversion Specialist",
    description:
      "A woman in her early 30s with dark hair pulled back into a low ponytail, sharply focused expression, the suggestion of a slight frown of concentration. East-Asian-Canadian features. Wears a crisp white button-down shirt under a charcoal blazer. A small signal-red analog wristwatch face visible at the lower edge of the frame.",
  },
  {
    slug: "daniel-the-copy-chief",
    role: "The Copy Chief",
    description:
      "A man in his mid-40s with slightly disheveled dark curly hair, reading glasses pushed up onto his forehead, expressive bookish face suggesting an editor or essayist. Mediterranean features. Wears a heather gray cardigan over a white crew-neck t-shirt. A signal-red felt-tip pen tucked behind his right ear.",
  },
  {
    slug: "yara-the-seo-lead",
    role: "The SEO Lead",
    description:
      "A woman in her late 30s with tightly braided black hair pulled back, calm patient gaze, technically-minded composure. Middle-Eastern features. Wears a fitted black mock-neck sweater. A small signal-red round stud earring on her visible ear.",
  },
  {
    slug: "reza-the-media-buyer",
    role: "The Media Buyer",
    description:
      "A man in his early 30s with a clean-shaven head and short trimmed beard, intense alert eyes, the half-smile of someone watching dashboards in real-time. Persian features. Wears a fitted black bomber jacket over a plain white t-shirt. A signal-red watch face on his left wrist visible at the bottom of the frame.",
  },
  {
    slug: "nadia-the-strategist",
    role: "The Strategist",
    description:
      "A woman in her mid-40s with dark gray-streaked hair in a low bun, skeptical-but-attentive expression with one eyebrow slightly raised, the look of a senior strategist who has heard every pitch twice. South-Asian features. Wears a charcoal blazer over a black silk shirt. A signal-red ink mark visible on the side of her index finger as if she just took notes.",
  },
  {
    slug: "ines-the-customer-success-lead",
    role: "The Customer Success Lead",
    description:
      "A woman in her late 30s with shoulder-length wavy brown hair, warm empathetic eyes, a soft knowing half-smile suggesting she has heard the truth before the customer said it. Latin-American features. Wears a cream linen shirt under a fitted black vest. A small embroidered signal-red flower at the collar of the linen shirt.",
  },
  {
    slug: "theo-the-growth-engineer",
    role: "The Growth Engineer",
    description:
      "A man in his early 30s with messy short brown hair, focused builder's expression, light stubble, the look of an engineer-marketer who ships on weekends. Northern-European features. Wears a plain black hoodie under an unstructured charcoal jacket. A signal-red zip-tie wrapped around the leather strap of a satchel resting against his shoulder.",
  },
  {
    slug: "marcus-the-operator",
    role: "The Operator",
    description:
      "A man in his late 40s with short well-groomed graying hair, calm process-disciplined gaze, faint half-smile. African-American features. Wears a tailored black suit jacket over a white shirt without a tie. A signal-red lanyard tag visible at his collar, partially tucked under the jacket.",
  },
  {
    slug: "priya-the-analyst",
    role: "The Analyst",
    description:
      "A woman in her early 30s with shoulder-length straight black hair, thin-framed glasses, sharp dry expression of cool quiet intelligence. South-Asian features. Wears a fitted heather-gray fine-knit sweater. A signal-red notebook tucked under her left arm, only the edge of the cover visible at the side of the frame.",
  },
];

console.log(`Generating ${personas.length} avatars in parallel — this typically takes 60-120s per image.`);
const start = Date.now();

const results = await Promise.allSettled(
  personas.map(async (p) => {
    const prompt = `${STYLE}\n\nSubject: ${p.description}`;
    const t0 = Date.now();
    process.stdout.write(`▶ ${p.slug}…\n`);
    const res = await client.images.generate({
      model: "gpt-image-2",
      prompt,
      size: "1024x1024",
      quality: "high",
      n: 1,
    });
    const b64 = res.data?.[0]?.b64_json;
    if (!b64) {
      throw new Error(`No image returned for ${p.slug}`);
    }
    const outPath = join(OUT_DIR, `${p.slug}.png`);
    writeFileSync(outPath, Buffer.from(b64, "base64"));
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    process.stdout.write(`✓ ${p.slug} (${elapsed}s) → ${outPath}\n`);
    return { slug: p.slug, path: outPath };
  })
);

const ok = results.filter((r) => r.status === "fulfilled");
const fail = results.filter((r) => r.status === "rejected");
const totalSec = ((Date.now() - start) / 1000).toFixed(1);

console.log(`\nDone in ${totalSec}s. ${ok.length}/${personas.length} succeeded.`);
if (fail.length) {
  console.log(`\nFailures:`);
  for (const f of fail) console.log(`  - ${f.reason?.message ?? f.reason}`);
  process.exit(1);
}
