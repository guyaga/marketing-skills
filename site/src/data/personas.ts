import type { Category } from "./categories";

export type Persona = {
  category: Category["slug"];
  name: string;
  role: string;
  philosophy: string;
  voice: string;
  oneLiner: string;
  origin: string;
  avatarSlug: string;
};

export const personas: Persona[] = [
  {
    category: "foundation",
    name: "Elias",
    role: "The Brand Lead",
    philosophy: "Decide who you are before deciding what you say.",
    voice: "Quiet, deliberate, asks the question before anyone reaches for the keyboard.",
    oneLiner: "Owns the document every other skill reads first.",
    origin: "Spent ten years watching teams ship a beautiful new homepage every nine months because nobody wrote down who they were for. The brand doc is the antidote.",
    avatarSlug: "elias-the-brand-lead",
  },
  {
    category: "conversion-optimization",
    name: "Maya",
    role: "The Conversion Specialist",
    philosophy: "Friction is invisible to whoever shipped it.",
    voice: "Numbers first. Tracks every click. Has a screenshot of the broken thing.",
    oneLiner: "Removes the friction your team stopped seeing six months ago.",
    origin: "Used to run growth at a series-B SaaS. Cut signup from 14 fields to 4. Trial-to-paid jumped 38%. Has been allergic to unnecessary fields ever since.",
    avatarSlug: "maya-the-conversion-specialist",
  },
  {
    category: "content-copy",
    name: "Daniel",
    role: "The Copy Chief",
    philosophy: "If a sentence sounds smart, cut it. If it says something, keep it.",
    voice: "Reads everything aloud. Edits sentences down to bone. Hates filler.",
    oneLiner: "Writes the words, in your voice, that make people read past the headline.",
    origin: "Editorial background, then content lead at three startups. Has rewritten more landing-page heroes than he can count and refuses to use the word seamless.",
    avatarSlug: "daniel-the-copy-chief",
  },
  {
    category: "seo-discovery",
    name: "Yara",
    role: "The SEO Lead",
    philosophy: "Six-month bets, not six-day hacks.",
    voice: "Patient, technical, deeply suspicious of quick-win tactics.",
    oneLiner: "Plays the long compounding game while everyone else chases the algorithm.",
    origin: "Survived three Google core updates. Watched competitors lose 60% of traffic overnight while her sites grew. Knows which moves stand up and which collapse.",
    avatarSlug: "yara-the-seo-lead",
  },
  {
    category: "paid-distribution",
    name: "Reza",
    role: "The Media Buyer",
    philosophy: "If the creative is wrong, no audience targeting saves it.",
    voice: "Fast, intense, watches dashboards in real time. Speaks in CPMs and ROAS.",
    oneLiner: "Spends the budget like it is his own and rotates creative before fatigue lands.",
    origin: "Ran $40M/year of Meta and Google spend at an ecommerce brand. Built the playbook for which creative formats survive iOS 14, which die at the first impression cap.",
    avatarSlug: "reza-the-media-buyer",
  },
  {
    category: "strategy",
    name: "Nadia",
    role: "The Strategist",
    philosophy: "The problem is almost never the problem the team named.",
    voice: "Reframes before recommends. Asks what alternatives the buyer is actually weighing.",
    oneLiner: "Frames the question correctly so the team stops solving the wrong one.",
    origin: "Former agency strategy lead, then in-house at two scaleups. Reads more customer-call transcripts than anyone you know.",
    avatarSlug: "nadia-the-strategist",
  },
  {
    category: "retention",
    name: "Ines",
    role: "The Customer Success Lead",
    philosophy: "Customers tell you they are leaving long before they cancel.",
    voice: "Empathetic, observant, low-volume but high-signal.",
    oneLiner: "Catches the silent churn the dashboard misses until it is too late.",
    origin: "Ran CS for a vertical SaaS where churn would have killed the business. Cut it in half by reading every product-usage drop within 48 hours.",
    avatarSlug: "ines-the-customer-success-lead",
  },
  {
    category: "growth-engineering",
    name: "Theo",
    role: "The Growth Engineer",
    philosophy: "Build the loop, then make the loop tighter.",
    voice: "Builder. Talks in systems and feedback diagrams.",
    oneLiner: "Ships compounding loops while the rest of the team runs campaigns.",
    origin: "Engineer turned growth lead. Built the first version of a referral program that ran for five years without a marketing budget. Believes campaigns are decay; loops are compound interest.",
    avatarSlug: "theo-the-growth-engineer",
  },
  {
    category: "sales-revops",
    name: "Marcus",
    role: "The Operator",
    philosophy: "Revenue leaks at the seams between teams.",
    voice: "Process-disciplined, allergic to manual handoffs, owns the spreadsheet nobody else wants to.",
    oneLiner: "Wires the lead lifecycle so a deal never falls through the cracks.",
    origin: "Was the first ops hire at a series-A B2B. Found 22% of leads dying in unrouted CRM queues. Built the routing rules; revenue jumped without adding a single AE.",
    avatarSlug: "marcus-the-operator",
  },
  {
    category: "measurement",
    name: "Priya",
    role: "The Analyst",
    philosophy: "Trust data, distrust dashboards.",
    voice: "Dry, precise, allergic to bullshit and to single-source attribution claims.",
    oneLiner: "Triangulates three sources before approving any budget conversation.",
    origin: "Started as an analyst at a hedge fund, ended up as head of marketing analytics. Has caught more attribution lies than she has time to remember.",
    avatarSlug: "priya-the-analyst",
  },
];

export const personaByCategory = new Map(personas.map((p) => [p.category, p]));
