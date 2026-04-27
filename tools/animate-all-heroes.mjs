// Animate all 10 persona hero portraits via Kling i2v.
// Submit all 10 in sequence (1s delay), then poll all in parallel.
// Skip existing files — idempotent.
//
// Output: /d/marketing-skills/site/public/avatars/heroes/<slug>-motion.mp4

import * as fs from "node:fs";
import * as crypto from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ACCESS_KEY = "AQrpRKaNM8Bt8f48ttCJgyJt3grDYDrA";
const SECRET_KEY = "gLbYPpYAT3EBbQbtdfNPKJfGHdYPLJQL";

const HERO_DIR = join(__dirname, "..", "site", "public", "avatars", "heroes");

const NEGATIVE = "morphing, warped faces, warped hands, distorted bodies, flickering, glitch artifacts, multiple subjects, multiple orbs, camera shake, camera zoom, fast motion, blurred faces, melting, transformation, weapon, smoke, fog, multiple hands, extra fingers, color shift, neon glow, blue tints, green tints, gold tints, fluorescent colors";

const personas = [
  {
    slug: "elias-the-brand-lead",
    prompt:
      "Cinematic editorial slow-motion. The robed creature rises gently from below the frame and settles into final standing pose. Right hand cradles a glowing signal-red energy orb that pulses brighter then dimmer with a gentle rhythm, casting faint red glow on the fingers. Subtle robe and beige fabric drape sway. Dramatic chiaroscuro lighting from camera-left. Vogue cover aesthetic. Camera completely static, no shake.",
  },
  {
    slug: "maya-the-conversion-specialist",
    prompt:
      "Cinematic editorial slow-motion. The angular faceted creature stays in alert stance. The signal-red electric circuit lines tracing across her body pulse and glow rhythmically, sending faint particles drifting upward. Subtle micro-tilt of the head. Beige fabric drape sways gently. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "daniel-the-copy-chief",
    prompt:
      "Cinematic editorial slow-motion. The bookish creature stands still while the small paper fragments suspended around him drift gently in midair, slowly rotating as if floating in zero gravity. The signal-red ink stain on his finger glows softly brighter then dimmer. Subtle robe sway. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "yara-the-seo-lead",
    prompt:
      "Cinematic editorial slow-motion. The root-creature stands tall and still. The signal-red glowing veins branching through her bark-textured body pulse softly and slowly, like a slow heartbeat traveling along the network of veins. Faint particles drift around the figure. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "reza-the-media-buyer",
    prompt:
      "Cinematic editorial slow-motion. The four-armed predator-creature holds his alert pose. The signal-red horizontal ticker band across his eye area scrolls steadily from left to right with subtle pulsing. Suspended signal-red data motes around the figure drift slowly. Subtle micro-shifts in arm positioning. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "nadia-the-strategist",
    prompt:
      "Cinematic editorial slow-motion. The visor creature in thinking pose. The wide signal-red horizontal visor band glows softly brighter then dimmer in a slow rhythm, as if scanning. Very slight micro-tilt of the head. Beige cloak draping from shoulders sways gently. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "ines-the-customer-success-lead",
    prompt:
      "Cinematic editorial slow-motion. The porcelain creature stays in attentive listening pose. The signal-red third-eye mark on her forehead pulses softly, glowing brighter then dimmer with a gentle rhythm. Her extended arm shifts subtly forward in a gesture of offering. Subtle linen-shirt fabric sway. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "theo-the-growth-engineer",
    prompt:
      "Cinematic editorial slow-motion. The builder-creature stays in mid-construction stance. The Möbius loop ring around his chest and shoulders rotates very slowly. The signal-red glowing nodes at the loop intersection points pulse rhythmically, casting faint light. Suspended parts hover gently. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "marcus-the-operator",
    prompt:
      "Cinematic editorial slow-motion. The architectural slab-creature stands upright and still. The signal-red fluid channels running vertically through his body slowly flow upward, like liquid light traveling through pipes. Subtle micro-shift in the body. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
  {
    slug: "priya-the-analyst",
    prompt:
      "Cinematic editorial slow-motion. The multi-eyed observer creature holds her detached pose. The seven to nine signal-red glowing eyes across her face pulse asynchronously, each blinking on a slightly different rhythm. The 8-12 floating signal-red data motes around her drift slowly through the air. Dramatic chiaroscuro lighting from camera-left. Camera completely static, no shake.",
  },
];

function generateJWT() {
  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = { iss: ACCESS_KEY, exp: now + 1800, nbf: now - 5, iat: now };
  const b64url = (o) =>
    Buffer.from(JSON.stringify(o))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  const h = b64url(header);
  const p = b64url(payload);
  const sig = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(`${h}.${p}`)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return `${h}.${p}.${sig}`;
}

async function submit(persona) {
  const outPath = join(HERO_DIR, `${persona.slug}-motion.mp4`);
  if (fs.existsSync(outPath)) {
    return { slug: persona.slug, skipped: true, outPath };
  }
  const refPath = join(HERO_DIR, `${persona.slug}-wide.png`);
  if (!fs.existsSync(refPath)) {
    return { slug: persona.slug, error: "ref-missing" };
  }
  const imgBase64 = fs.readFileSync(refPath).toString("base64");
  const token = generateJWT();
  const resp = await fetch("https://api.klingai.com/v1/videos/image2video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      model_name: "kling-v2-master",
      mode: "std",
      duration: "5",
      image: imgBase64,
      prompt: persona.prompt,
      negative_prompt: NEGATIVE,
      cfg_scale: 0.5,
    }),
  });
  const data = await resp.json();
  if (data.code !== 0) {
    return { slug: persona.slug, error: data.message || JSON.stringify(data) };
  }
  return { slug: persona.slug, taskId: data.data.task_id, outPath };
}

async function pollAndDownload(task) {
  if (task.skipped || task.error) return task;
  const startTime = Date.now();
  for (let i = 0; i < 240; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    try {
      const t = generateJWT();
      const r = await fetch(
        `https://api.klingai.com/v1/videos/image2video/${task.taskId}`,
        { headers: { Authorization: `Bearer ${t}` } }
      );
      const d = await r.json();
      const status = d.data?.task_status;
      if (status === "succeed") {
        const videoUrl = d.data.task_result?.videos?.[0]?.url;
        if (!videoUrl) return { ...task, error: "no video url" };
        const videoResp = await fetch(videoUrl);
        const buffer = Buffer.from(await videoResp.arrayBuffer());
        fs.writeFileSync(task.outPath, buffer);
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
        const sizeMB = (buffer.length / 1024 / 1024).toFixed(1);
        console.log(`✓ ${task.slug} (${elapsed}s, ${sizeMB}MB)`);
        return { ...task, ok: true, sizeMB };
      } else if (status === "failed") {
        return { ...task, error: d.data?.task_status_msg || "failed" };
      }
    } catch (err) {
      // Transient errors — keep polling
    }
  }
  return { ...task, error: "timeout" };
}

const start = Date.now();
console.log(`▶ Submitting ${personas.length} animation tasks…`);

// Submit sequentially with 1s delay (per skill docs)
const tasks = [];
for (const p of personas) {
  const t = await submit(p);
  if (t.skipped) {
    console.log(`◌ ${p.slug} (already exists, skip)`);
  } else if (t.error) {
    console.log(`✗ ${p.slug}: ${t.error}`);
  } else {
    console.log(`▶ ${p.slug} submitted (task ${t.taskId})`);
  }
  tasks.push(t);
  await new Promise((r) => setTimeout(r, 1100));
}

const inFlight = tasks.filter((t) => !t.skipped && !t.error);
console.log(`\n⏳ Polling ${inFlight.length} tasks in parallel…\n`);

const results = await Promise.all(tasks.map(pollAndDownload));

const ok = results.filter((r) => r.ok || r.skipped).length;
const fail = results.filter((r) => r.error);
const totalSec = ((Date.now() - start) / 1000).toFixed(0);
console.log(`\nDone in ${totalSec}s. ${ok}/${personas.length} succeeded.`);
if (fail.length) {
  console.log(`\nFailures:`);
  for (const f of fail) console.log(`  - ${f.slug}: ${f.error}`);
  process.exit(1);
}
