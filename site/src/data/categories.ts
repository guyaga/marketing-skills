export type Category = {
  slug: string;
  name: string;
  description: string;
  order: number;
};

export const categories: Category[] = [
  {
    slug: "foundation",
    name: "Foundation",
    description:
      "Set up the product marketing context every other skill reads before it does anything. Audience, positioning, voice, in one document.",
    order: 1,
  },
  {
    slug: "conversion-optimization",
    name: "Conversion Optimization",
    description:
      "Improve signup, paywall, popup, and form pages so more of the visitors you already have do the thing.",
    order: 2,
  },
  {
    slug: "content-copy",
    name: "Content & Copy",
    description:
      "Write the words on every surface. Landing pages, cold emails, sequences, social posts, ad copy, video scripts.",
    order: 3,
  },
  {
    slug: "seo-discovery",
    name: "SEO & Discovery",
    description:
      "Get found by humans, search engines, and the LLMs people now ask before Google.",
    order: 4,
  },
  {
    slug: "paid-distribution",
    name: "Paid Distribution",
    description:
      "Run Google, Meta, and LinkedIn campaigns and ship the creative that makes them work.",
    order: 5,
  },
  {
    slug: "strategy",
    name: "Strategy",
    description:
      "Decide who you sell to, what you charge, how you position, and what to launch before you build any of it.",
    order: 6,
  },
  {
    slug: "retention",
    name: "Retention",
    description:
      "Keep the customers you already paid to acquire. Cancellation flows, save offers, pause paths.",
    order: 7,
  },
  {
    slug: "growth-engineering",
    name: "Growth Engineering",
    description:
      "Ship the loops, tools, communities, and submissions that compound traffic without ad spend.",
    order: 8,
  },
  {
    slug: "sales-revops",
    name: "Sales & RevOps",
    description:
      "Wire lead lifecycle, sales handoff, decks, and objection docs so revenue does not leak between marketing and sales.",
    order: 9,
  },
  {
    slug: "measurement",
    name: "Measurement",
    description:
      "Set up tracking and run experiments that prove what is actually working, instead of what feels like it is.",
    order: 10,
  },
];

export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
