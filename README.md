# Marketing Skills

40 marketing skills for AI agents, in Guy Aga's voice.

CRO, copywriting, SEO, paid ads, retention, growth engineering. One install command and the whole library lands in Claude Code, Cursor, and Codex. Then your agent runs them like a marketer would.

Hub: [marketing-skills.guyaga.ai](https://marketing-skills.guyaga.ai)

## What you get

40 skills across 10 categories:

| Category | Skills |
| --- | --- |
| Foundation | product-marketing-context |
| Conversion Optimization | form-cro, onboarding-cro, page-cro, paywall-upgrade-cro, popup-cro, signup-flow-cro |
| Content & Copy | cold-email, content-strategy, copy-editing, copywriting, email-sequence, image, social-content, video |
| SEO & Discovery | ai-seo, aso-audit, competitor-alternatives, programmatic-seo, schema-markup, seo-audit, site-architecture |
| Paid Distribution | ad-creative, paid-ads |
| Strategy | competitor-profiling, customer-research, launch-strategy, marketing-ideas, marketing-psychology, pricing-strategy |
| Retention | churn-prevention |
| Growth Engineering | community-marketing, directory-submissions, free-tool-strategy, lead-magnets, referral-program |
| Sales & RevOps | revops, sales-enablement |
| Measurement | ab-test-setup, analytics-tracking |

Every skill is a structured prompt the agent runs end to end. `product-marketing-context` runs first and every other skill reads it.

## Install

Six ways to install. Pick whichever fits your workflow.

### 1. npx skills add (recommended)

```bash
npx skills add guyaga/marketing-skills
```

Drops the 40 skills into `.agents/skills/` and symlinks them to `.claude/skills/` so Claude Code picks them up immediately. Powered by [Vercel Labs' `skills` CLI](https://github.com/vercel-labs/skills).

### 2. Claude Code plugin

From inside Claude Code:

```
/plugin add github:guyaga/marketing-skills
```

Use this if you prefer Claude Code's native plugin manager.

### 3. Clone and copy

```bash
git clone https://github.com/guyaga/marketing-skills.git
cp -r marketing-skills/skills .agents/
```

Use this when you want full control or no installer in the loop.

### 4. Git submodule

```bash
git submodule add https://github.com/guyaga/marketing-skills.git .agents/marketing-skills
```

Best for teams that want a tracked, pinned version.

### 5. Fork and customize

Fork on GitHub, edit the skills to fit your product and voice, then install your fork the same way:

```bash
npx skills add YOUR-USERNAME/marketing-skills
```

### 6. SkillKit (multi-agent)

```bash
npx skillkit install guyaga/marketing-skills
```

Installs the same skills across Claude Code, Cursor, Codex, and Copilot in one shot. Use this if you switch between agents.

## After install

Run `product-marketing-context` first. Every other skill reads it before it does anything. It is your audience, positioning, and voice in one document. The agent fills it in with you.

Then ask the agent to do anything:

- "Write a comparison page against [competitor]."
- "Audit my signup flow."
- "Plan our launch."
- "Generate three ad creative variants for the new homepage hero."

## Repo layout

```
.
├── .claude-plugin/         Plugin manifest for Claude Code
├── skills/                 40 skill folders, each with a SKILL.md
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

This project is a brand-customized adaptation of [Corey Haines' marketing-skills](https://github.com/coreyhaines31/marketingskills), MIT licensed. The skill bodies in `skills/` are derivative work and remain under the upstream MIT License. See [`NOTICE`](./NOTICE) for full attribution.

For the original, unbranded source, install with `npx skills add coreyhaines31/marketingskills`.

## License

MIT. See [`LICENSE`](./LICENSE).

Built by [Guy Aga](https://guyaga.ai). [bestguy.ai](https://bestguy.ai).
