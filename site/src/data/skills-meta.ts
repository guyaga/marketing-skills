import type { Category } from "./categories";

export type SkillMeta = {
  slug: string;
  name: string;
  description: string;
  category: Category["slug"];
};

export const skillsMeta: SkillMeta[] = [
  {
    slug: "product-marketing-context",
    name: "Product Marketing Context",
    description:
      "Set up the context document every other skill reads first. Audience, positioning, voice, what you sell, who you sell to.",
    category: "foundation",
  },
  {
    slug: "brand-voice",
    name: "Brand Voice",
    description:
      "Define and maintain a voice that is recognizable across channels and resistant to AI-generic drift. Principles, banned words, voice variants by audience.",
    category: "foundation",
  },

  {
    slug: "form-cro",
    name: "Form CRO",
    description:
      "Optimize lead-capture and contact forms. Field count, labels, validation, the thank-you state.",
    category: "conversion-optimization",
  },
  {
    slug: "onboarding-cro",
    name: "Onboarding CRO",
    description:
      "Compress time-to-value in your post-signup flow. First action, aha moment, activation rate.",
    category: "conversion-optimization",
  },
  {
    slug: "page-cro",
    name: "Page CRO",
    description:
      "Audit and improve any marketing page for conversion. Hierarchy, friction, proof, CTA.",
    category: "conversion-optimization",
  },
  {
    slug: "paywall-upgrade-cro",
    name: "Paywall & Upgrade CRO",
    description:
      "Optimize in-app paywalls and upgrade moments. Pricing display, trigger, copy, social proof.",
    category: "conversion-optimization",
  },
  {
    slug: "popup-cro",
    name: "Popup CRO",
    description:
      "Design modals, exit-intent popups, and banners that capture attention without annoying anyone.",
    category: "conversion-optimization",
  },
  {
    slug: "signup-flow-cro",
    name: "Signup Flow CRO",
    description:
      "Optimize registration and trial activation. Steps, fields, social auth, confirmation.",
    category: "conversion-optimization",
  },

  {
    slug: "cold-email",
    name: "Cold Email",
    description:
      "Run outbound that gets replies. Reply Method, Agoge sequence, deliverability infrastructure (SPF/DKIM/DMARC), warm-up, list quality. 2026 benchmarks built in.",
    category: "content-copy",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    description:
      "Plan what to write and why. Topics, intent, internal linking, and the order to ship them in.",
    category: "content-copy",
  },
  {
    slug: "copy-editing",
    name: "Copy Editing",
    description:
      "Edit existing copy without rewriting from scratch. Tighter sentences, sharper claims, fewer hedges.",
    category: "content-copy",
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    description:
      "Write marketing pages that convert. Hero, value prop, CTAs, objection handling, social proof.",
    category: "content-copy",
  },
  {
    slug: "email-sequence",
    name: "Email Sequence",
    description:
      "Build onboarding, nurture, and trial-to-paid flows. Trigger logic, copy, send timing.",
    category: "content-copy",
  },
  {
    slug: "image",
    name: "Image",
    description:
      "Make images that convert and load fast. Image-by-purpose specs, brand-consistent AI generation, Core Web Vitals, accessibility done right.",
    category: "content-copy",
  },
  {
    slug: "social-content",
    name: "Social Content",
    description:
      "Plan and ship social posts. Hooks, format per platform, scheduling, repurposing.",
    category: "content-copy",
  },
  {
    slug: "video",
    name: "Video",
    description:
      "Plan, script, and produce marketing videos. Hook, structure, b-roll, cuts, captions.",
    category: "content-copy",
  },
  {
    slug: "content-distribution",
    name: "Content Distribution",
    description:
      "Make sure good content reaches the audience it was made for. Owned, earned, paid. PR, podcasts, syndication, repurposing.",
    category: "content-copy",
  },

  {
    slug: "ai-seo",
    name: "AI SEO",
    description:
      "Optimize for ChatGPT, Perplexity, and the LLMs people now ask before Google. Get cited, not just ranked.",
    category: "seo-discovery",
  },
  {
    slug: "aso-audit",
    name: "ASO Audit",
    description:
      "Audit your App Store and Play Store listings. Title, screenshots, keywords, conversion rate.",
    category: "seo-discovery",
  },
  {
    slug: "competitor-alternatives",
    name: "Competitor Alternatives",
    description:
      "Build the comparison and alternative pages that capture buyers searching for your competitor by name.",
    category: "seo-discovery",
  },
  {
    slug: "programmatic-seo",
    name: "Programmatic SEO",
    description:
      "Generate SEO pages at scale from a template and a dataset. City pages, integration pages, comparison pages.",
    category: "seo-discovery",
  },
  {
    slug: "schema-markup",
    name: "Schema Markup",
    description:
      "Add structured data that captures Google rich results and feeds AI search. JSON-LD only, validation pipeline, GSC monitoring, post-2023 deprecations factored in.",
    category: "seo-discovery",
  },
  {
    slug: "seo-audit",
    name: "SEO Audit",
    description:
      "Audit on-page and technical SEO. Crawlability, internal links, metadata, Core Web Vitals.",
    category: "seo-discovery",
  },
  {
    slug: "site-architecture",
    name: "Site Architecture",
    description:
      "Plan page hierarchy, URL structure, and navigation so users and crawlers find everything.",
    category: "seo-discovery",
  },

  {
    slug: "ad-creative",
    name: "Ad Creative",
    description:
      "Generate ad headlines, hooks, and creative variants. Iterate fast, scale what converts.",
    category: "paid-distribution",
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    description:
      "Run Google, Meta, and LinkedIn campaigns. Audience, bidding, creative rotation, attribution.",
    category: "paid-distribution",
  },

  {
    slug: "competitor-profiling",
    name: "Competitor Profiling",
    description:
      "Research and pull apart how competitors position, price, and acquire. Find the gap you can own.",
    category: "strategy",
  },
  {
    slug: "customer-research",
    name: "Customer Research",
    description:
      "Run customer interviews and surveys, then synthesize voice-of-customer language you can use everywhere.",
    category: "strategy",
  },
  {
    slug: "launch-strategy",
    name: "Launch Strategy",
    description:
      "Plan a product launch end to end. Pre-launch list, day-of choreography, post-launch follow-through.",
    category: "strategy",
  },
  {
    slug: "marketing-ideas",
    name: "Marketing Ideas",
    description:
      "30 vetted growth tactics with case studies, ROI, stage-fit. Bullseye over buffet. Pick the 1-3 that compound for your stage; ignore the rest.",
    category: "strategy",
  },
  {
    slug: "marketing-psychology",
    name: "Marketing Psychology",
    description:
      "Apply behavioral science to copy and product. Anchoring, reciprocity, loss aversion, social proof.",
    category: "strategy",
  },
  {
    slug: "pricing-strategy",
    name: "Pricing Strategy",
    description:
      "Decide pricing tiers, packaging, and monetization model. Anchor, contrast, willingness-to-pay.",
    category: "strategy",
  },
  {
    slug: "customer-segmentation",
    name: "Customer Segmentation",
    description:
      "Split your customer base into segments that actually drive decisions. Behavior, lifecycle, value, ICP, cohorts, power users.",
    category: "strategy",
  },
  {
    slug: "market-sizing",
    name: "Market Sizing",
    description:
      "Build a defensible TAM/SAM/SOM model. Bottom-up, top-down, value-based, triangulated, sourced. Survives a VC cross-examination.",
    category: "strategy",
  },

  {
    slug: "churn-prevention",
    name: "Churn Prevention",
    description:
      "Build cancellation flows, save offers, and pause options that recover customers about to leave.",
    category: "retention",
  },

  {
    slug: "community-marketing",
    name: "Community Marketing",
    description:
      "Build a community that pulls users in instead of paying for each one. Discord, Slack, forum, events.",
    category: "growth-engineering",
  },
  {
    slug: "directory-submissions",
    name: "Directory Submissions",
    description:
      "Submit your product to the right startup, SaaS, and AI directories. Backlinks, traffic, a launch credential.",
    category: "growth-engineering",
  },
  {
    slug: "free-tool-strategy",
    name: "Free Tool Strategy",
    description:
      "Decide which free tool to build, who it serves, and how it routes users into your real product.",
    category: "growth-engineering",
  },
  {
    slug: "lead-magnets",
    name: "Lead Magnets",
    description:
      "Design email-capture lead magnets people actually want. Format, promise, distribution.",
    category: "growth-engineering",
  },
  {
    slug: "referral-program",
    name: "Referral Program",
    description:
      "Design referral programs that beat paid CAC. Viral coefficient math, double-sided incentives, eight named case studies (Dropbox, PayPal, Tesla, Morning Brew), fraud detection.",
    category: "growth-engineering",
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    description:
      "Architect the marketing stack. CRM, ESP, ads, warehouse, CDP, reverse ETL. Workflows that scale without becoming Frankenstein.",
    category: "growth-engineering",
  },

  {
    slug: "revops",
    name: "RevOps",
    description:
      "Wire lead lifecycle, scoring, and sales handoff so the revenue funnel does not leak.",
    category: "sales-revops",
  },
  {
    slug: "sales-enablement",
    name: "Sales Enablement",
    description:
      "Build pitch decks, one-pagers, and objection-handling docs sales actually uses.",
    category: "sales-revops",
  },
  {
    slug: "win-loss-analysis",
    name: "Win/Loss Analysis",
    description:
      "Interview won and lost deals systematically. Extract why buyers chose you, why they did not, and what to fix in positioning, copy, and sales.",
    category: "sales-revops",
  },
  {
    slug: "sales-asset-iteration",
    name: "Sales Asset Iteration",
    description:
      "Test and measure pitch decks, demo scripts, objection docs, ROI calcs. Build assets reps actually use, prove they move close rate.",
    category: "sales-revops",
  },

  {
    slug: "ab-test-setup",
    name: "A/B Test Setup",
    description:
      "Plan, design, and ship growth experiments. Pick a metric, set guardrails, write the variant, decide what wins.",
    category: "measurement",
  },
  {
    slug: "analytics-tracking",
    name: "Analytics Tracking",
    description:
      "Audit and fix event tracking. Make sure every signup, click, and purchase fires once and lands in the right place.",
    category: "measurement",
  },
  {
    slug: "marketing-attribution",
    name: "Marketing Attribution",
    description:
      "Figure out which channels actually drive revenue. Multi-touch, MMM, CAC by channel, payback period, LTV/CAC, the quarterly attribution audit.",
    category: "measurement",
  },
];

export const skillBySlug = new Map(skillsMeta.map((s) => [s.slug, s]));

export const skillsByCategory = (categorySlug: string) =>
  skillsMeta.filter((s) => s.category === categorySlug);
