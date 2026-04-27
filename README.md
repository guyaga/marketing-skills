# Brief

**Brief us. We ship the work.**

Ten marketing specialists installed in your editor. Describe the problem; the right one steps in.

48 skills total — CRO, copywriting, SEO, paid ads, retention, growth engineering, sales & RevOps, measurement. One install command and the whole team lands in Claude Code, Cursor, and Codex.

Hub: [marketing-skills.guyaga.ai](https://marketing-skills.guyaga.ai)
Repo: [github.com/guyaga/brief](https://github.com/guyaga/brief)

## How to use

1. Install the team: `npx skills add guyaga/brief`
2. Have your AI agent run `product-marketing-context` first — it captures your audience, positioning, and voice in one document
3. Brief them. Describe the problem in plain language; the right specialist steps in

You don't pick which skill to invoke. You describe the situation; the team routes it.

## The team

Ten named specialists, each with a deep remit and a small set of skills they own.

| # | Specialist | Role | Owns |
|---|---|---|---|
| 01 | Elias | The Brand Lead | product-marketing-context, brand-voice |
| 02 | Maya | The Conversion Specialist | form-cro, onboarding-cro, page-cro, paywall-upgrade-cro, popup-cro, signup-flow-cro |
| 03 | Daniel | The Copy Chief | cold-email, content-strategy, copy-editing, copywriting, email-sequence, image, social-content, video, content-distribution |
| 04 | Yara | The SEO Lead | ai-seo, aso-audit, competitor-alternatives, programmatic-seo, schema-markup, seo-audit, site-architecture |
| 05 | Reza | The Media Buyer | ad-creative, paid-ads |
| 06 | Nadia | The Strategist | competitor-profiling, customer-research, launch-strategy, marketing-ideas, marketing-psychology, pricing-strategy, customer-segmentation, market-sizing |
| 07 | Ines | The Customer Success Lead | churn-prevention |
| 08 | Theo | The Growth Engineer | community-marketing, directory-submissions, free-tool-strategy, lead-magnets, referral-program, marketing-automation |
| 09 | Marcus | The Operator | revops, sales-enablement, win-loss-analysis, sales-asset-iteration |
| 10 | Priya | The Analyst | ab-test-setup, analytics-tracking, marketing-attribution |

## The 10 rules of the team

1. **Read context before doing anything** — every skill checks `product-marketing-context.md` first
2. **Specialists, not generalists** — each does one thing well, not ten things kind of
3. **Brief, do not prompt** — describe the problem; the team routes it
4. **Voice over variety** — the work ships in your voice, not the agent's
5. **Frameworks are named** — Reply Method, Bullseye, Four Fits, RFM, PAS — not generic filler
6. **Cite, do not invent** — every benchmark cites a primary source
7. **Stage-fit before tactic** — the right tactic at the wrong stage burns money
8. **Honest about limits** — paywalled and heuristic content is marked
9. **One install, full team** — atomic deployment, not à la carte
10. **Hand off, do not hoard** — Strategist hands to Copy Chief hands to Conversion Specialist hands to Analyst

## Install

Six ways to get the team into your project. Pick whichever fits your workflow.

### 1. npx skills add (recommended)

```bash
npx skills add guyaga/brief
```

Drops every specialist into `.agents/skills/` and symlinks them to `.claude/skills/` so Claude Code picks up the team immediately. Powered by [Vercel Labs' `skills` CLI](https://github.com/vercel-labs/skills).

### 2. Claude Code plugin

From inside Claude Code:

```
/plugin add github:guyaga/brief
```

### 3. Single skill via degit

If you only need one specialist:

```bash
npx degit guyaga/brief/skills/cold-email .agents/skills/cold-email
```

### 4. Clone and copy

```bash
git clone https://github.com/guyaga/brief.git
cp -r brief/skills .agents/
```

### 5. Git submodule

```bash
git submodule add https://github.com/guyaga/brief.git .agents/brief
```

### 6. SkillKit (multi-agent)

```bash
npx skillkit install guyaga/brief
```

Same team across Claude Code, Cursor, Codex, and Copilot in one shot.

## After install

Run `product-marketing-context` first. Every other skill reads it before doing anything. It is your audience, positioning, and voice in one document. The Brand Lead fills it in with you.

Then brief the team:

- "Write a comparison page against [competitor]."
- "Audit my signup flow."
- "Plan our launch."
- "Generate three ad creative variants for the new homepage hero."

The right specialist steps in.

## Repo layout

```
.
├── .claude-plugin/         Plugin manifest for Claude Code
├── skills/                 48 skill folders, each with a SKILL.md
├── site/                   Astro hub at marketing-skills.guyaga.ai
├── tools/                  CLI integrations and helpers (from upstream)
├── LICENSE                 MIT
└── NOTICE                  Attribution to upstream
```

## Voice

Skill descriptions, category copy, and the hub website are written in Guy Aga's voice. Skill bodies are still upstream and get refined skill by skill over time.

The voice is anti-AI-slop. No em-dashes. No "leverage", "unlock", "transformative", "delve". First person or imperative. Short sentences. Concrete examples and numbers over abstract claims.

If you fork this and rewrite the skill bodies in your own voice, that is the point.

## Credit

Brief is a brand-customized adaptation of [Corey Haines' marketing-skills](https://github.com/coreyhaines31/marketingskills), MIT licensed. The skill bodies in `skills/` are derivative work and remain under the upstream MIT License. See [`NOTICE`](./NOTICE) for full attribution.

For the original, unbranded source, install with `npx skills add coreyhaines31/marketingskills`.

## License

MIT. See [`LICENSE`](./LICENSE).

Built by [Guy Aga](https://guyaga.ai). [bestguy.ai](https://bestguy.ai).
