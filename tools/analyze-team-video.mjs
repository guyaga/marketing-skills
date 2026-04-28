// Analyze the Seedance team video via Gemini 3.1 Pro.

import * as fs from "node:fs";
import { join } from "node:path";
import os from "node:os";
import { pathToFileURL } from "node:url";

const skillModules = join(os.homedir(), ".claude", "skills", "ai-video-analyzer", "node_modules");
const genaiPath = join(skillModules, "@google", "genai", "dist", "node", "index.mjs");
const { GoogleGenAI } = await import(pathToFileURL(genaiPath).href);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const VIDEO_PATH = "D:/Downloads/Seedance 20 - make a quick short video with the team togther in dark envoirment with red energy orb.mp4";
const PROMPT = `Analyze this video as a senior creative director reviewing it for a top-tier marketing-agency website hero section.

Context: this is a candidate for a "team together" moment on a website branded "Brief" — a property featuring 10 alien-creature marketing specialists. The brand aesthetic is editorial Swiss-design dark: warm off-black #0E0E10 background, signal-red #E63B2E accent only, off-white text, beige fabric drape, no blues or greens or purples. Each specialist is a creature with matte black body and signal-red glowing accents (eyes, veins, runes, visor bands).

Tell me, with timestamps in MM:SS:

1. SCENE BREAKDOWN — what is actually happening visually, scene by scene.

2. SUBJECT COUNT — how many distinct figures or creatures appear, and describe each one's silhouette (humanoid? robed? what kind of head shape? any signal-red details?).

3. CAMERA — what is the camera doing? Static? Tracking? Pulling back? Pushing in? Pan?

4. THE RED ORB — what does the red energy orb do across the timeline? Where does it sit visually? Does it pulse, transfer between hands, grow, shrink?

5. BRAND PALETTE COMPLIANCE — does the video stay strictly within: matte black bodies, beige fabric, signal-red accents, off-black background? Or are there off-brand colors (blue rim light, gold tints, neon glows, teal, purple)?

6. TEXT/AUDIO — is there any visible text, captions, or audio (music, voiceover)?

7. MOOD/ATMOSPHERE — overall feel: cinematic? eerie? sacred? cyberpunk? editorial? horror? heroic?

8. RECOMMENDATION — does this video work as the "team together" hero moment? If yes, where would you place it on the site:
   (a) homepage hero (full-bleed background)
   (b) /team page intro band
   (c) a new dedicated section on homepage between the bento grid and the categories
   (d) /manifesto page intro
   Also: does the 15s duration loop cleanly, or does it have a clear start/end that would feel awkward looping?

9. CRITIQUE — what would a creative director say is weak or off about this clip if used as-is?

Be honest, specific, and direct. Under 700 words.`;

console.log("▶ Reading video…");
const videoBytes = fs.readFileSync(VIDEO_PATH);
console.log(`  size: ${(videoBytes.length / 1024 / 1024).toFixed(1)} MB`);

console.log("▶ Sending to Gemini 3.1 Pro inline (under 20 MB threshold)…");
const response = await ai.models.generateContent({
  model: "gemini-3.1-pro-preview",
  contents: [
    { inlineData: { mimeType: "video/mp4", data: videoBytes.toString("base64") } },
    { text: PROMPT },
  ],
});

console.log("\n=== ANALYSIS ===\n");
console.log(response.text);
