// One-shot test: animate Elias's wide hero with Kling i2v.
// Hero rises from below, lifting the signal-red orb in his hand.
// Cinematic editorial, locked camera.

import * as fs from "node:fs";
import * as crypto from "node:crypto";

const ACCESS_KEY = "AQrpRKaNM8Bt8f48ttCJgyJt3grDYDrA";
const SECRET_KEY = "gLbYPpYAT3EBbQbtdfNPKJfGHdYPLJQL";

const IMAGE_PATH = "D:/marketing-skills/site/public/avatars/heroes/elias-the-brand-lead-wide.png";
const OUTPUT_PATH = "D:/marketing-skills/site/public/avatars/heroes/elias-rise.mp4";

const PROMPT = `Cinematic editorial slow-motion shot. The robed creature rises gently from below the frame, lifting up into final standing pose at center-right. Right hand cradles a glowing signal-red energy orb that pulses softly brighter then dimmer with a gentle rhythm, casting a faint red glow on his fingers. Subtle organic movement: beige fabric robe gently sways, slight tilt of the head. Dramatic chiaroscuro lighting from camera-left. Atmospheric off-black backdrop, very slight depth-of-field shimmer. Vogue cover aesthetic. Camera completely static, no shake, no zoom.`;

const NEGATIVE = "morphing, warped faces, warped hands, distorted bodies, flickering, glitch artifacts, multiple subjects, multiple orbs, camera shake, camera zoom, fast motion, blurred faces, melting, transformation, weapon, smoke, fog, multiple hands, extra fingers, color shift, neon glow, blue tints, green tints, gold tints";

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

console.log(`▶ Reading image: ${IMAGE_PATH}`);
const imgBytes = fs.readFileSync(IMAGE_PATH);
console.log(`  size: ${(imgBytes.length / 1024).toFixed(0)} KB`);
const imgBase64 = imgBytes.toString("base64");

console.log(`▶ Submitting task to Kling…`);
const token = generateJWT();
const submitResp = await fetch("https://api.klingai.com/v1/videos/image2video", {
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
    prompt: PROMPT,
    negative_prompt: NEGATIVE,
    cfg_scale: 0.5,
  }),
});

const submitData = await submitResp.json();
if (submitData.code !== 0) {
  console.error("✗ Submission failed:", submitData.message || submitData);
  process.exit(1);
}
const taskId = submitData.data.task_id;
console.log(`  task_id: ${taskId}`);
console.log(`▶ Polling for completion…`);

const startTime = Date.now();
for (let i = 0; i < 240; i++) {
  await new Promise((r) => setTimeout(r, 5000));
  const pollToken = generateJWT();
  const pollResp = await fetch(
    `https://api.klingai.com/v1/videos/image2video/${taskId}`,
    { headers: { Authorization: `Bearer ${pollToken}` } }
  );
  const d = await pollResp.json();
  const status = d.data?.task_status;
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);

  if (status === "succeed") {
    const videoUrl = d.data.task_result?.videos?.[0]?.url;
    if (!videoUrl) {
      console.error("✗ No video URL in response");
      process.exit(1);
    }
    console.log(`✓ Video ready (${elapsed}s). Downloading…`);
    const videoResp = await fetch(videoUrl);
    const buffer = Buffer.from(await videoResp.arrayBuffer());
    fs.writeFileSync(OUTPUT_PATH, buffer);
    console.log(`✓ Saved: ${OUTPUT_PATH} (${(buffer.length / 1024 / 1024).toFixed(1)} MB)`);
    process.exit(0);
  } else if (status === "failed") {
    console.error("✗ Generation failed:", d.data?.task_status_msg);
    process.exit(1);
  }

  if (i % 6 === 0) {
    console.log(`  status=${status} elapsed=${elapsed}s`);
  }
}

console.error("✗ Timeout after ~20 min");
process.exit(1);
