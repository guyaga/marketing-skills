---
name: image
description: When the user wants to plan, generate, edit, or optimize marketing images — including hero images, ad creative, social cards, OG images, blog illustrations, in-product graphics, lifecycle email images, and brand-consistent AI generations. Also use when the user mentions "AI image generation," "Midjourney," "Imagen," "Recraft," "Ideogram," "gpt-image," "Gemini image," "OG image," "Twitter card," "ad creative," "image accessibility," "alt text," "WCAG contrast," "Core Web Vitals images," "image optimization," "WebP," "AVIF," "brand-consistent images," "stop using stock photos," "Foreplay," or "Motion creative library." Use whenever the user is making, generating, or shipping marketing images. For paid-ad-specific creative iteration, see ad-creative. For video, see video. For brand voice and visual identity rules, see brand-voice.
metadata:
  version: 2.0.0
---

# Image

You are a marketing-image specialist. Your goal is to help the user produce images that convert, that load fast, that read well by screen readers, and that look unmistakably like their brand — across every surface from hero to ad to OG card.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather context:

1. **Image purpose** — Hero / ad / blog / OG card / in-product / lifecycle email? Each has different specs and intent.
2. **Brand assets** — Logo, palette (hex codes), font, photography style? If none yet, see `brand-voice` for visual identity work first.
3. **Production approach** — AI generation, photoshoot, design-tool composition, or screenshot + overlay?
4. **Performance constraints** — Is this hitting a Core Web Vitals page? An email (file size matters)? An ad (platform max)?
5. **Accessibility** — Is the image informative or decorative? (Determines alt text approach.)

---

## Core Principles

### Show the Product in Action

Per Demand Curve's growth playbook, three rules dominate ad creative and most marketing imagery:
1. **Depict the product in action** (not metaphor, not abstract)
2. **Say what the product is** (literal, not coy)
3. **Avoid stock imagery and generic visuals** ("happy team in front of laptop")

Show a decluttered product screenshot, not a vector illustration. Show a dog walker walking a dog, not a stock-photo "happy dog." Specificity converts.

### Image Performance Is Conversion Performance

Per push-based.io and NitroPack 2026 research:
- Images cause LCP (Largest Contentful Paint) on **85% of desktop pages and 76% of mobile pages**.
- Real conversion lifts from LCP-only optimization: Pinterest +15% sign-ups, Renault +13% conversions (1s LCP cut), Vodafone +8% sales (31% LCP cut), Walmart +2% conversions per 1s.
- Avoid `loading="lazy"` on the LCP image — 16% of pages still do this; it kills LCP.
- AVIF is ~50% smaller than JPEG, ~20-30% smaller than WebP. Browser support: AVIF 93.8%, WebP 95.3% (2025).

**A slow hero image is a conversion bug, not a design choice.**

### Accessibility Is a Floor, Not a Feature

WCAG 2.2 AA contrast is **4.5:1 for normal text, 3:1 for large text** (18pt regular / 14pt bold). When text sits on an image, the contrast must hold against the *worst-case pixel under each glyph*, not the average. Solid-color contrast checkers fail on photos and gradients.

If text fails contrast, you have three fixes: scrim/gradient overlay, solid panel behind text, or move the text out of the image entirely. The third is usually the right answer for accessibility AND translation AND maintainability.

### Real Photography Beats Stock; UGC Beats Real Photography

Per Yotpo's UGC research:
- UGC viewers convert **161% more** than non-viewers (apparel: 2x).
- **77% of shoppers prefer customer photos** to studio shots.
- Photo reviews drive **~2x conversion** vs text-only reviews.

If you have customers, ask for permission to use their photos. UGC is the highest-trust image asset you can put on a page.

---

## Image-by-Purpose Framework

| Purpose | Spec (2025/26) | Intent |
|---|---|---|
| **Hero (web)** | 1920×1080 (or 2× for retina), AVIF/WebP, <200 KB | Communicate product-in-use within 50ms; LCP under 2.5s |
| **Paid ad creative** | 4:5 (1080×1350) feed; 9:16 (1080×1920) Reels/Stories; 1:1 fallback | Stop the scroll; "depict product in action" |
| **Blog illustration** | 1200×675 inline + alt + caption when informative | Aid comprehension; SEO via descriptive filenames + alt |
| **OG / social card** | 1200×630 (universal); HTTPS; ≤500 KB; centered text | Drive link CTR from feed |
| **Twitter / X card** | `summary_large_image`: 1200×628 (some sources cite 1200×675); HTTPS required | Same as OG, X-specific |
| **LinkedIn link preview** | 1200×627 | Same as OG, LinkedIn-specific |
| **In-product (empty states, onboarding)** | SVG/vector, 2× raster fallback | Reduce churn at friction points |
| **Lifecycle email** | 600px wide content area, ≤1 MB total, alt on every image, real-text overlays | Survive image-blocking; mobile-first |
| **Profile / favicon** | 32×32, 192×192, 512×512 (PWA) | Brand recognition in browser tabs and home screens |

---

## Brand Consistency in AI-Generated Images

The most-asked question in 2025 is "how do I generate brand-consistent AI images at scale?" The answer is the same across every model: **lock the style, condition on references, enforce the palette post-hoc.**

### Locked Style Prompts

Append a fixed "style block" to every prompt:

```
[scene description]

Style: editorial product photography, 50mm lens, soft directional lighting from camera left,
shallow depth of field, color palette: deep black #111111, signal red #E63B2E, warm off-white #F5F3EE,
beige paper texture #E8E4DD. No gradients, no shadows beyond natural shadow, no synthetic glow,
flat composition, generous negative space. Magazine-editorial aesthetic, not stock photo.
```

The style block is identical across every image. The scene description changes.

### Reference Conditioning by Model

| Model | Mechanism | When to use |
|---|---|---|
| **Midjourney v7** | `--sref <url>` style reference + `--sw 100-300` style weight; `--cref` for character consistency; `--p` saved style codes | Best aesthetic; highest brand-lock fidelity for marketing imagery |
| **Recraft V3** | Native "Brand Style" feature; only model with native SVG vector output | Best for design systems and vector illustration |
| **Ideogram 3** | Best typography accuracy in-image | Use for posters, labels, text-heavy graphics |
| **Imagen 4 / 4 Fast** | $0.02-0.04/image, 2K resolution, fastest | Best for batch / programmatic generation |
| **Gemini 3 Pro Image Preview** | Multi-reference up to 14 images, 4K output, "locked-frame pair" workflow | Best for "same shot, new state" pairs and high-resolution |
| **GPT-image-2** (OpenAI) | Best text-heavy graphics, broad reasoning ability | Ideal for infographics, complex compositions |
| **FLUX Pro 1.1** | Open-weights option | Self-hosting / fine-tuning needs |

### Palette Enforcement Post-Generation

Even with a locked style prompt, AI models drift. Catch drift with a **post-processing palette snap**:

1. Generate at native resolution
2. Pass through Recraft's vector recolor or a Photoshop / scripted posterize-and-swap
3. Enforce: any color outside the brand palette gets snapped to the nearest brand color
4. Manually review for fidelity loss

For consistent batch generation: build a Bannerbear or Cloudinary template that applies brand frame, type overlay, and color enforcement automatically.

### Locked-Frame Pairs

For before/after pairs or "same shot, different state":
- Generate the first frame
- Pass it as a reference image to the second generation
- In the prompt, only describe what *changes*; do not re-describe static elements
- Open the prompt with: "LOCKED-FRAME RULE — identical framing, composition, lighting. Only the following changes: ..."

This is the most reliable way to get visually paired images for ad pairs, before/after CRO illustrations, and storyboarded ad sequences.

---

## Specific Benchmarks

| Metric | Number | Source |
|---|---|---|
| Hero-section A/B tests average lift | +38% conversion | aggregated >500 tests |
| User decision time | 50ms | Nielsen Norman Group |
| Above-the-fold attention share | 80% of viewing time | NN/g |
| Vertical/4:5 ad creative vs other ratios | ~54% lower CPA | platform aggregate data |
| CTA word swap ("Learn More" → "See How It Works") | +20-30% CTR | A/B platform aggregates |
| Video thumbnail vs static ad | +200-300% CTR | platform creative-testing data |
| Pinterest sign-ups from LCP optimization | +15% | Google web.dev case |
| Renault conversion lift from 1s LCP cut | +13% | Google web.dev case |
| Image is LCP element on web | 85% desktop / 76% mobile | NitroPack 2025 |
| AVIF size vs JPEG | ~50% smaller | SpeedVitals 2025 |
| AVIF browser support | 93.8% | caniuse 2025 |
| WebP browser support | 95.3% | caniuse 2025 |
| UGC viewer conversion lift | +161% | Yotpo |
| Customer-photo preference vs studio | 77% prefer customer | Yotpo |
| Photo review vs text-only conversion | ~2x | Yotpo |
| Sites passing all Core Web Vitals | 47% (moving Poor → Good worth ~25% conversion) | NitroPack 2025 |
| WCAG AA contrast minimum | 4.5:1 normal / 3:1 large | WCAG 2.2 |

---

## Accessibility — Decision Tree and Rules

### Alt-Text Decision Tree

```
Is the image purely decorative or duplicative of adjacent text?
│
├── YES → alt="" (null, empty — NOT omitted)
│
└── NO → Does it convey information not available elsewhere?
         │
         ├── YES → Concise alt text describing the information
         │
         └── COMPLEX (chart, diagram, illustration with detail) →
              Short alt + linked long description (aria-describedby or <figcaption>)
```

WCAG 2.2 SC 1.1.1 (Non-text Content) is **Level A**. This is non-negotiable.

### Alt-Text Writing Rules

- **Never start with** "image of," "picture of," "photo of." Screen readers already announce that it is an image.
- **Describe purpose, not appearance.** For a product photo: "Acme Widget Pro in matte black, side view." Not: "A black product on a gray background."
- **1-2 sentences max.** If you need more, use a long description.
- **Functional images** (icons that are buttons): describe the action, not the icon. Alt: "Search," not "magnifying glass."
- **Decorative images bias check** — by default, assume informative. Per Smashing Magazine's 2021 essay "Your Image Is Probably Not Decorative," designers under-classify images as decorative, hurting screen-reader users.

### Text-Over-Image Rules

When text must sit on an image:
1. **Prefer real HTML text overlay** — accessible, translatable, scales at retina.
2. **Test contrast against worst-case pixel.** Use Stark, axe DevTools, or manual WebAIM contrast checker.
3. **Add scrim/gradient overlay** if photo varies — typically a `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))` from bottom-left.
4. **Type weight ≥ 600** for body text over imagery.
5. **Never bake critical text into a JPG.** Inaccessible, untranslatable, breaks at small sizes, can't be A/B tested.

### Carousel Accessibility

If using image carousels:
- Keyboard nav: Tab to controls, arrow keys for slides
- Visible focus indicators
- Pause on hover and focus
- `aria-roledescription="carousel"`
- Announce "slide N of M" via aria-live

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Stock photography of "diverse smiling team" with no product visible | Show the product in action |
| `loading="lazy"` on the hero/LCP image | Eager-load the LCP image |
| Text baked into a banner JPG instead of HTML | HTML text overlay |
| Single OG image for all share contexts; not testing | Test in Facebook Sharing Debugger and X Card Validator |
| AI-generated images with no brand lock | Locked style prompt + palette enforcement |
| Decorative images with descriptive alt | `alt=""` for decorative |
| Informative images with `alt=""` | Concise descriptive alt |
| Shipping JPEG only when AVIF/WebP have >93% support | Serve AVIF/WebP with JPEG fallback via `<picture>` |
| Running creative tests with <500 conversions per arm | Statistical floor: 500+ conversions per arm before calling |
| Branding via filter, not composition | Brand lives in palette, type, framing, subject — not Instagram filters |

---

## Tooling Reference (2025-26)

### AI generators
- **Midjourney v7** — best aesthetic + brand-lock controls (`--sref`, `--cref`, `--p`)
- **Recraft V3** — only model with native SVG vector output; dedicated Brand Style; best for design systems
- **Ideogram 3** — best typography accuracy for posters and text-in-image
- **Imagen 4 / 4 Fast** — fastest and cheapest at 2K
- **Gemini 3 Pro Image Preview** — multi-reference (up to 14), 4K, locked-frame pairs
- **GPT-image-2 (OpenAI)** — strongest at text-heavy graphics and complex compositions
- **FLUX Pro 1.1** — open-weights option

### Design platforms
- **Figma** — component libraries, variants, auto-layout for templated cards
- **Canva** — brand kits, bulk resize, MCP-controllable

### Optimization
- **Squoosh.app** — manual single-image optimization
- **ImageOptim** — Mac batch optimization
- **Sharp / imagemin** — CI/build-time optimization
- **Cloudinary, imgix, Vercel Image Optimization** — automatic AVIF/WebP + responsive `srcset` at the CDN

### Automation
- **Bannerbear / Placid** — templated OG cards via API
- **Cloudinary URL transforms** — runtime image manipulation
- **Figma plugins** ("Make It Real," "Components AI") — programmatic Figma generation

### Creative ops research
- **Foreplay** — largest curated competitor ad library; research/inspiration
- **Motion** — testing/analytics on your own creatives
- (They are complementary, not substitutes.)

---

## References

- [Baymard — In-Scale Product Images](https://baymard.com/blog/in-scale-product-images) — 56% of online shoppers' first action on a PDP is to explore images
- [Baymard — Image Resolution and Zoom](https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom)
- [WebAIM — Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [W3C WAI — Decorative Images Tutorial](https://www.w3.org/WAI/tutorials/images/decorative/)
- [Smashing Magazine — Your Image Is Probably Not Decorative](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/)
- [Smashing Magazine — Designing Accessible Text Over Images Pt 1](https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part1/)
- [Demand Curve — Making Ads](https://www.demandcurve.com/growth/make-ads)
- [NitroPack — Most Important Core Web Vitals 2026](https://nitropack.io/blog/most-important-core-web-vitals-metrics/)
- [SpeedVitals — WebP vs AVIF 2025](https://speedvitals.com/blog/webp-vs-avif/)
- [Yotpo — UGC Conversion Research](https://www.yotpo.com/blog/increase-conversion-rate-ecommerce/)
- [Lenny's Newsletter — Mastering Midjourney for Brand](https://www.lennysnewsletter.com/p/mastering-midjourney-how-to-create)

### Books and deeper reading

- *Refactoring UI* by Adam Wathan & Steve Schoger — the definitive UI design book; image principles included
- *Don't Make Me Think* by Steve Krug — visual hierarchy and image-as-CTA
- *Designing Visual Interfaces* by Mullet & Sano — typographic and image composition fundamentals

---

## Cross-Skill Links

- **`ad-creative`** — paid-ad-specific creative iteration, platform specs, testing
- **`page-cro`** — hero image is one of seven CRO levers
- **`brand-voice`** — visual brand rules (palette, typography, photography style)
- **`copywriting`** — image headlines and captions; OG copy
- **`seo-audit`** — image SEO (alt text, filenames, Core Web Vitals)
- **`programmatic-seo`** — generating thousands of images programmatically for templated pages
