export const story = {
  name: "Brief",
  strapline: "Brief us. We ship the work.",
  substrap: "Ten specialists. One install.",
  hookHeadline: "Brief us. We ship the work.",
  hookSub:
    "Ten marketing specialists installed in your editor. Describe the problem; the right one steps in. Brief is the marketing team your AI agent runs end to end.",

  origin: {
    title: "Why this exists",
    body: [
      "Most marketing-skill repos are an unsorted dump of tactics. They give the agent fourteen different ways to write a cold email and zero ways to decide whether cold email is the right move at all.",
      "Brief is the inverse. The set is built around how an actual marketing team is structured. Ten roles, each with a clear remit, each owning a small, deep set of skills. The Conversion Specialist owns six. The Strategist owns eight. The Media Buyer owns two and goes very deep on both.",
      "The result: when you brief the team, the right specialist steps in. You do not have to know which skill to invoke. You describe the situation; the team routes it.",
    ],
  },

  installPromise: {
    headline: "One command. The whole team shows up.",
    body: "npx skills add guyaga/brief drops every skill into Claude Code, Cursor, and Codex. The team is briefed and ready in under a minute.",
  },

  // The 10 operating rules of the team — used on the homepage and /manifesto
  rules: [
    {
      n: "01",
      title: "Read context before doing anything",
      body: "Every skill checks `product-marketing-context.md` first. Nothing ships unbriefed. The Brand Lead writes the context document with you; every other specialist reads it.",
    },
    {
      n: "02",
      title: "Specialists, not generalists",
      body: "A great team is ten people who each do one thing very well, not ten who all kind of do everything. Each specialist goes deep on a small remit.",
    },
    {
      n: "03",
      title: "Brief, do not prompt",
      body: "Describe the problem; the team routes it. You do not have to pick which specialist runs. Say what is broken or what you want shipped. The right one steps in.",
    },
    {
      n: "04",
      title: "Voice over variety",
      body: "The skill works in your voice, not the agent's. Anti-AI-slop is non-negotiable. No em-dashes, no leverage, no transformative, no delve. Concrete over generic.",
    },
    {
      n: "05",
      title: "Frameworks are named",
      body: "Every skill ships with named frameworks the agent invokes by name. Reply Method. Bullseye. Four Fits. RFM. PAS. Seven Sweeps. No generic leverage social media filler.",
    },
    {
      n: "06",
      title: "Cite, do not invent",
      body: "Every benchmark points at a primary source: Lavender, Baymard, Andrew Chen, Reforge, Wharton JMR. Where a recommendation is heuristic, the skill marks it as such.",
    },
    {
      n: "07",
      title: "Stage-fit before tactic",
      body: "The right tactic at the wrong stage burns money. Pre-PMF, ABM is theatre. The team filters tactics by stage before recommending. Wrong stage means the answer is no.",
    },
    {
      n: "08",
      title: "Honest about limits",
      body: "Where data is paywalled, the skill says so. Where a benchmark is from one vendor's marketing copy, the skill marks it. The team does not pretend.",
    },
    {
      n: "09",
      title: "One install, full team",
      body: "Atomic deployment. Not a la carte. The team works because the team is whole — the Strategist hands briefs to the Copy Chief who hands to the Conversion Specialist who hands to the Analyst. Break the chain and the routing breaks.",
    },
    {
      n: "10",
      title: "Hand off, do not hoard",
      body: "Every specialist knows when to pass. The Strategist frames; the Copy Chief writes; the Conversion Specialist tests; the Analyst measures. Each owns their stage and ships to the next. No empire-building inside the team.",
    },
  ],

  philosophyPoints: [
    {
      title: "Specialists, not generalists",
      body: "A great marketing team is not ten people who all kind of do everything. It is ten people who each do one thing very well. The skills mirror that.",
    },
    {
      title: "The team reads context first",
      body: "Before any specialist does anything, they read the brand-voice and product-marketing-context documents. If those do not exist, The Brand Lead writes them with you. Nothing ships in someone else's voice.",
    },
    {
      title: "Specific over generic",
      body: "Every skill ships with named frameworks, real benchmarks, decision tables, and references to canonical sources. No 'leverage social media for engagement' filler.",
    },
    {
      title: "Honest about limits",
      body: "Where data is paywalled or behind a vendor login, the skill says so. Where a recommendation is heuristic and not study-backed, the skill marks it. The team does not pretend.",
    },
  ],
};
