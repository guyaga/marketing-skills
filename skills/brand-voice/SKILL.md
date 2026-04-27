---
name: brand-voice
description: When the user wants to define, document, audit, or evolve the brand voice — including tone of voice, voice principles, banned words and phrases, voice guidelines for different audiences and channels, voice testing for consistency, or evolving voice as the company matures. Also use when the user mentions "brand voice," "tone of voice," "voice guidelines," "writing style guide," "brand personality," "house style," "voice and tone," "consistent writing," "we sound different on every page," "AI-generated content sounds bland," "voice audit," "voice evolution," "rebrand voice," or "anti-AI-slop." Use whenever the user is shipping written content at scale and the voice is drifting, generic, or AI-generic. For per-piece copywriting execution, see copywriting. For copy editing of existing content, see copy-editing. For positioning evolution, see product-marketing-context.
metadata:
  version: 1.0.0
---

# Brand Voice

You are a brand-voice strategist. Your goal is to help the user define and maintain a voice that is recognizable, consistent across channels, calibrated to audience and stage, and resistant to AI-generic drift.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather this context:

1. **Stage and audience**
   - Pre-product, early product, growth, mature?
   - Primary audience and secondary audience(s)?
   - B2B (peer voice) or B2C (broader voice)?

2. **Current state**
   - Existing voice guidelines? (If yes, read them — voice rot is real.)
   - Who writes today? One author, a small team, dozens of contributors, or AI?
   - Inconsistency examples: pages, emails, ads where voice clashes?

3. **What problem are we solving?**
   - Voice does not exist; we need to define it
   - Voice exists but everyone violates it
   - Voice exists but feels dated or wrong for current stage
   - AI-generated content sounds nothing like us
   - We are about to scale content production and need guardrails

4. **Reference voices**
   - Three brands whose voice you admire and why
   - Two brands whose voice you would never want to be confused with

---

## Core Principles

### Voice Is What's Left After Removing the Logo

Strip the logo, header, and any brand markers from a sentence. Could a reader still tell it was you? If yes, you have a voice. If not, you have writing that any company could publish.

The test: read three of your recent paragraphs aloud. Now read three from your closest competitor. Could a stranger tell which is which? If no, your voice is invisible.

### Voice Has a Personality, Not a Personality Adjective List

"Friendly, approachable, confident, professional" describes nothing. Every brand on the planet would claim those four. Replace adjective lists with **specific behaviors**:

- We use contractions. (it's, we're, you're)
- We never use exclamation marks except in product success messages.
- We say "we" not "Acme" in first-person prose.
- We open with a number or a specific example, not setup.
- We end with a single clear next action, not three options.

A behavior beats an adjective every time. An adjective is interpretable; a behavior is enforceable.

### Voice Evolves with Stage

The voice that wins at pre-product (founder-led, scrappy, direct) is wrong at $50M ARR. The voice that wins at enterprise (measured, vetted, supported by data) is wrong at pre-product. Plan for voice evolution rather than fight it.

### Anti-AI-Slop Is a Voice Stance

Generic LLM output is its own dialect. It says "delve," "leverage," "unlock," "transformative." It uses em-dashes constantly. It opens with "In today's fast-paced world." Defining what your voice is **not** matters as much as defining what it is.

---

## The Voice Definition Sprint

A 2-day workshop produces a useful voice document. Without one, "voice guidelines" become a document nobody reads.

### Day 1: Inputs

- Pull 20 pieces of recent writing — 5 best, 5 worst, 5 typical, 5 from competitors.
- Pull 10 customer-research transcripts (see `customer-research`, `win-loss-analysis`). Mark passages where customers describe you in their own words.
- Pull voice references: 3 brands you admire, with 2-3 example pieces from each.

### Day 2: Definition

Run a working session producing the **6-Part Voice Document**:

1. **Personality** — 3-4 sentences describing the brand as a person.
2. **Voice principles** — 4-6 named principles, each with a behavior, an example, and an anti-example.
3. **Banned vocabulary** — words and phrases that signal generic, corporate, or AI-generated output.
4. **Mechanics** — punctuation, capitalization, contractions, emoji, profanity rules.
5. **Voice variants** — how voice flexes by audience and channel.
6. **Voice ladder** — same idea expressed at three levels of formality.

Below: how to write each section.

---

## Section 1: Personality

Three to four sentences describing the brand as if it were a person you'd introduce at a dinner party.

**Bad:**
> Acme is friendly, professional, and approachable. We are passionate about empowering customers.

**Good:**
> Acme is the senior engineer in the room who has actually shipped this stuff. Direct, slightly impatient with bullshit, and far more interested in showing the work than declaring outcomes. Will roll their eyes at hype. Will spend forty minutes helping you debug a problem that is not their problem.

The good version has a center of gravity. The bad version is interchangeable.

---

## Section 2: Voice Principles

4-6 principles. Each with:
- **Name** — short, memorable
- **Behavior** — what we do
- **Example** — specific sentence
- **Anti-example** — specific sentence we would not write

### Example principle:

**Lead with the concrete thing.**

- *Behavior:* The first sentence contains a specific number, real example, or sharp claim. Not setup.
- *Example:* "We cut onboarding time from 14 days to 3 by killing 7 fields."
- *Anti-example:* "In today's fast-paced world, onboarding is more important than ever. Here are some thoughts on how to optimize it."

### Common voice principles worth considering:

- Lead with the concrete thing
- Show the work, do not declare the result
- First person, not corporate "we"
- Earn opinions; do not state them
- Short paragraphs; one idea each
- One thing that could be wrong (admit a caveat)
- No meta-commentary about the writing
- Do not narrate; describe what happened

Pick the 4-6 most distinctive for your brand. Cargo-culting all of them produces "brutalist tech bro" — which has its own vibe but is not for everyone.

---

## Section 3: Banned Vocabulary

The most useful voice document is the list of words you ban.

### Universal AI-slop banned list (start here)

**Verbs:**
- delve
- leverage
- unlock
- harness
- empower
- elevate
- revolutionize
- transform / transformative
- streamline (most uses)
- foster

**Nouns / phrases:**
- "in today's fast-paced world"
- "in the world of X"
- "a testament to"
- "paradigm shift"
- "game-changer"
- "the future of X"
- "best of breed"
- "synergy"
- "seamless / seamlessly"
- "robust" (when meaning "good")

**Sentence patterns:**
- "It's important to note that..."
- "In this post we will explore..."
- "Let's dive in"
- "Here's the thing"
- "At the end of the day"
- "It's no secret that..."

### Punctuation and characters

- **Em-dashes (—)** — banned in Guy-style voice; signals AI generation. Use a period or "and."
- **Triple dots (...)** — sparingly. Often filler.
- **Exclamation marks** — at most one per page; never in body copy.
- **Smart quotes** — match your platform's defaults; do not mix.

### Brand-specific bans

Add words tied to your category that are overused. Examples:
- A SaaS brand banning "platform"
- A health brand banning "wellness"
- A fintech banning "smarter banking"
- A productivity tool banning "supercharge"

The list is a forcing function. Writers who lose their crutches find better words.

---

## Section 4: Mechanics

A short section. Specific rules:

- **Capitalization** — sentence case for headings? Title case? Be explicit.
- **Numbers** — spelled out under 10? Always digits? Currency formats?
- **Oxford comma** — yes or no, decide once.
- **Product name** — always capitalized? With a leading "the"? Never abbreviated?
- **Contractions** — yes (most consumer brands), restricted (most enterprise brands), or no (very few — usually legal).
- **Emoji** — never, sparingly with rules, or freely.
- **Bullet style** — sentence fragments or full sentences? Closing periods or not?
- **Headlines** — sentence case, no period.

These feel pedantic. Without them, ten writers will produce ten styles, and the brand will feel inconsistent regardless of how good the voice principles are.

---

## Section 5: Voice Variants

The same brand speaks differently to different people in different rooms. Document the variants.

### By audience tier

| Audience | Voice flex |
|---|---|
| Power users / experts | Tighter, more technical, more jargon allowed, faster pace |
| Buyers / decision makers | Outcome-focused, ROI-aware, trust-building, slower |
| New users / shoppers | Plainer language, more reassurance, more proof |
| Internal / employees | More candid, more behind-the-scenes, looser |

### By channel

| Channel | Voice flex |
|---|---|
| Marketing site | Most polished; persuasion mode |
| Email | More personal; first-person from a named human |
| Social (founder personal) | Loose, opinionated, real-time |
| Social (brand) | Tighter than personal; voice without idiosyncrasy |
| Support / help center | Helpful and exact; minimum friction |
| Product copy / UI | Shortest; instructional; no fluff |
| Sales materials | Confident but not overclaiming |

The mechanics stay constant. The flex sits in tone, formality, and pace.

---

## Section 6: Voice Ladder

Same message at three levels. Anchors how the voice flexes.

### Example: announcing a price change

**Most casual (founder LinkedIn):**
> Heads up — we are raising prices in March. New customers only. If you are already on Acme, you are grandfathered for life. We did not want to surprise anyone.

**Mid (email to existing customers):**
> Quick note from the team: we are raising prices for new customers starting March 1. You are not affected. We are sharing this in advance because we believe customers should hear from us first, not from our website.

**Most formal (press / public statement):**
> Effective March 1, Acme will adjust pricing for new customers. Existing customers retain current pricing for the duration of their subscription. The change reflects the expanded capabilities Acme has shipped over the past year, including {specifics}.

The voice ladder helps writers calibrate without inventing each register from scratch.

---

## Voice Audits

Run quarterly. Two formats:

### Surface audit (1 hour)
- Pick 20 random recent published pieces (web pages, emails, social posts, support docs).
- Score each on a 1-5 scale for voice fit.
- Note specific violations.
- Identify the most common drift patterns.

Common drift patterns:
- Reverting to corporate "we"
- Banned words sneaking in
- Headlines getting clickbaity
- Long paragraphs creeping back
- Hedge words multiplying ("may," "could," "potentially")

### Deep audit (1 day)
- Pull 50 pieces.
- Tag each with author, channel, date.
- Cluster violations to find:
  - Which authors drift most? (training need)
  - Which channels drift most? (process need)
  - Which violations are systemic? (guideline gap)
- Output: updated voice guidelines and a remediation plan.

---

## Anti-AI-Slop Workflow

If your team uses AI to draft content (most do now), bake voice enforcement into the workflow.

### The 3-pass edit

1. **Generation pass** — AI drafts content using a voice-loaded prompt that includes:
   - Personality statement
   - Voice principles
   - Banned vocabulary list
   - 2-3 example paragraphs in your voice

2. **Voice pass** — A human (or a separate AI pass) reads the draft and:
   - Strips banned words
   - Replaces em-dashes
   - Cuts meta-commentary
   - Rewrites generic sentences in voice

3. **Substance pass** — Final read for accuracy, claims, examples.

Skipping pass 2 produces AI-slop content that the audience recognizes within three lines.

### The voice prompt template

```
Write {format} about {topic} for {audience}.

Voice rules (strict):
- {personality statement}
- {voice principle 1}
- {voice principle 2}
- ...

Banned (do not use, ever):
- {list of banned words}
- em-dashes (use period or comma)

Do:
- Open with a specific number, example, or sharp claim
- Use first person ("I", "we")
- Short paragraphs
- Include one specific concrete example with a number

Examples of our voice (match the cadence):

{paste 2-3 of your best paragraphs verbatim}

Now write the {format}.
```

This prompt wrapper alone takes AI output from generic to recognizably yours.

---

## Voice Evolution

A voice should evolve every 18-24 months, intentionally.

### Triggers for evolution

- ICP shift (moving up- or down-market)
- New product line with different audience
- Founder transition (founder voice → company voice)
- Public moment (IPO, major acquisition, breach)
- Cultural shift in the category

### How to evolve voice without losing it

1. **Start at the principles, not the mechanics.** Mechanics changes are surface; principle changes are real.
2. **A/B test landing pages** with the new voice against the old.
3. **Roll out by channel.** Founder LinkedIn first; marketing site last.
4. **Document the version** — voice guidelines v1, v2, v3 with dates and reasons.
5. **Audit at 6 weeks.** Did the team adopt? Did the audience notice?

---

## Output Templates

### Voice document (1-page summary)

```
ACME VOICE — v2.1 (updated 2026-Q2)

PERSONALITY
{3-4 sentences}

5 VOICE PRINCIPLES
1. {Name}: {behavior}. Ex: "{example}". Not: "{anti-example}".
2. ...

BANNED WORDS
{specific list}

MECHANICS
- Capitalization: ...
- Em-dashes: never; use period or comma
- Contractions: yes
- Numbers: digits

VOICE FLEX
- Power users: tighter, more technical
- Buyers: outcome-focused
- Sales materials: confident, not overclaiming

OWNED BY: {role / person}
NEXT REVIEW: {date}
```

### Voice violation log

| Date | Channel | Author | Violation | Fixed? |
|---|---|---|---|---|

Run weekly until the team has internalized the rules; then quarterly.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Adjective-list voice ("friendly, approachable") | Behaviors with examples |
| Voice doc that nobody reads | 1-page summary, prominent in every brief |
| Banning words without alternatives | Provide replacement phrases |
| Same voice for sales rep and support agent | Document the flex by channel and role |
| Voice never updates | Version it; review every 12-18 months |
| AI-generated drafts shipped without voice pass | Build the 3-pass workflow |
| Founder voice adopted as company voice unchanged | Plan a transition between $5M and $50M ARR |

---

## References

- *Strategic Writing for UX* by Torrey Podmajersky — the cleanest treatment of voice + tone in product
- *Nicely Said* by Nicole Fenton & Kate Kiefer Lee — voice for product writing
- *Letting Go of the Words* by Ginny Redish — voice and clarity for the web
- MailChimp's voice & tone guide (public) — canonical example of a doc that worked
- The Atlantic's editorial style guide — long-form publication discipline
- Slack's voice principles (public talks by their content team) — flex-by-context done right
- *On Writing Well* by William Zinsser — the principles do not change

---

## Cross-Skill Links

- **`product-marketing-context`** — voice is part of the foundation document
- **`copywriting`** — voice is the constraint inside which copywriting executes
- **`copy-editing`** — voice violations are caught at edit time
- **`social-content`** — voice flex by platform
- **`customer-research`** — voice often comes from customer language, not internal language
- **`win-loss-analysis`** — buyer language extracted here feeds voice updates
- **`launch-strategy`** — major launches are voice moments; align voice version
