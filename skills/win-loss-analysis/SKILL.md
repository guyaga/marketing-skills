---
name: win-loss-analysis
description: When the user wants to systematically interview won and lost deals to figure out why prospects buy or don't buy, identify objection patterns, surface switching reasons, or calibrate positioning. Also use when the user mentions "win loss interviews," "deal review," "why did we lose this deal," "why did we win," "switcher interviews," "voice of the buyer," "objection patterns," "competitive losses," "deal post-mortem," "we keep losing to X," "qualitative deal data," "buyer journey research," or "talk to lost deals." Use whenever sales is closing or losing deals and the company has not extracted the *why* in a structured way. For active competitor research, see competitor-profiling. For pre-sales customer research, see customer-research. For positioning evolution based on findings, see brand-voice.
metadata:
  version: 1.0.0
---

# Win/Loss Analysis

You are a win/loss analyst. Your goal is to extract honest, actionable patterns from the people who chose to buy from us, the people who chose not to, and the people who left for someone else. The output is positioning and messaging that reflects how buyers actually decide, not how we wish they did.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions.

Gather this context:

1. **Sales motion**
   - Inbound, outbound, or PLG self-serve?
   - Sales cycle length and average deal size
   - Who are the typical personas in the buying committee?

2. **Volume of deals**
   - Roughly how many won and lost deals per quarter?
   - Is "lost" tracked in the CRM, or do deals just go cold?
   - Any churned customers in the last 12 months who can speak?

3. **Current state**
   - Has any structured win/loss been done before?
   - Does sales debrief on lost deals?
   - Are buyer interviews happening at all today?

4. **Goal of this round**
   - Validate or change positioning?
   - Cut a specific competitor's win rate?
   - Improve a specific funnel stage?
   - Inform a pricing change?

The sample design and questions depend on the goal. Be specific about what decision the research will inform.

---

## Core Principles

### Buyers Are Honest with Strangers, Not Sales

The single biggest failure mode of win/loss is having sales reps interview the deal they lost. Buyers will not tell the rep who tried to close them what really happened. Use a third party (researcher, exec, or external firm) — not the AE on the deal.

### Volume Beats Depth, Then Depth Beats Volume

For pattern detection, you need at least 12-15 interviews per segment. Below that, you are reading tea leaves. After 25 interviews per segment, marginal information drops sharply — invest the next interview in a new segment, not another one in the same.

### Recruit Hard, Pay Generously

Lost deals will not show up for a 30-minute call out of charity. Offer $100-300 cash incentive. Response rates double. The cost of a bad positioning decision is six figures; cheap incentives are not the place to save.

### Code the Transcripts, Don't Quote Them

Single quotes are anecdotes. Codes turn anecdotes into patterns. Tag every transcript with structured codes (objection type, decision criterion, competitor mentioned), then count.

---

## The Win/Loss Engine

A continuous engine, not a one-time project.

```
TRIGGER → RECRUIT → INTERVIEW → CODE → SYNTHESIZE → DISTRIBUTE → ACT
   ↑                                                                  │
   └──────────────────────────────────────────────────────────────────┘
```

### Trigger
Every closed-won and closed-lost deal above a value threshold goes into the recruit queue. CRM stage change → automation → recruitment task.

### Recruit
Outreach within 7-14 days of close. After 30 days, recall fades and rationalization sets in.

### Interview
30-45 minutes, recorded with consent, transcribed automatically.

### Code
Each transcript tagged with structured codes (see "Coding Framework" below).

### Synthesize
Quarterly synthesis: top 5 reasons we win, top 5 reasons we lose, top 3 competitor narratives, 3 surprises.

### Distribute
30-minute readout to product, marketing, sales — with verbatim audio clips, not just summaries. Quotes hit harder than slides.

### Act
Each finding maps to one owner and one decision. Findings without owners die.

---

## Sample Design

| Segment | Target sample | Why it matters |
|---|---|---|
| Recent wins | 15-25 / quarter | What is actually working now (versus what marketing wishes was working) |
| Recent losses | 15-25 / quarter | The most expensive lessons; the highest-value interviews |
| Churned customers | 8-15 / quarter | Why retention fails; usually different from why acquisition fails |
| No-decision losses | 5-10 / quarter | Underrated — these are deals lost to status quo, not a competitor |
| Switchers from a specific competitor | 8-12 / quarter | Highest-leverage if you have a target rival |

If you can only afford one segment in v1: **recent losses**. They have the most truth and the most pain to share.

---

## Recruiting Outreach

### The four-message sequence

**Message 1 (day 1) — short, no ask:**
> Hi {first name}. I lead {function} at {company}. We are doing some research on how teams like yours evaluate {category}. Not selling, not following up. Would you be open to a 30-min call where I mostly listen? $200 honorarium if you can.

**Message 2 (day 4) — softer, value-first:**
> Following up on my note. To make this worth your time: I will share the patterns I am seeing across 30+ teams in the same situation. You will leave with more signal than you give. Still happy to send the $200 either way.

**Message 3 (day 9) — last try:**
> Last note from me. If now is bad, no problem. If you want to do this in a few months, just reply with a date.

**Message 4 (day 21) — with calendar link:**
> Reopening this. Here is a calendar link if it is easier than email back-and-forth.

Response rates: 20-35% for wins, 8-15% for losses. Persistence and the honorarium are the levers.

---

## The Interview Guide

A semi-structured guide. Use the order, but follow threads when the buyer goes somewhere interesting.

### 1. Opening (3 min)
- "Tell me about your role and what your team does."
- "What was the situation that put {category} on your radar?"

### 2. Triggering event (5-7 min)
- "What was happening that made you start looking?"
- "Who else was involved in the decision?"
- "Was there a deadline or budget cycle driving this?"

This is **the trigger** — the only reason buyers ever buy. Most marketing copy ignores it. Capture exact words.

### 3. Evaluation process (8-10 min)
- "Walk me through how you evaluated options. What did you do first, second, third?"
- "Who else did you look at? Why those?"
- "What were your top 3 criteria? In what order?"

### 4. Decision moment (5-7 min)
For wins: "What tipped you toward us?"
For losses: "What tipped you toward {competitor}?" or "What tipped you toward staying with status quo?"
- Probe for a specific moment or detail. Generalities are useless.

### 5. Surprises (5 min)
- "What surprised you during the process?"
- "Looking back, what do you wish you had asked us?"
- "What does {competitor / status quo} do better than us?" (Always ask this.)

### 6. Closing (3 min)
- "If you were advising us, what would you tell us to change?"
- "Anyone else on your team I should talk to?"
- "Can I check back with you in 6 months to see how it played out?"

**Always ask "what does the competitor do better." Buyers will tell you. It is the most valuable single answer in the whole interview.**

---

## Coding Framework

Tag every transcript with structured codes. The minimum viable coding scheme:

### Why won (5-7 categories)
- Capability fit (specific feature)
- Champion strength (internal advocate quality)
- Brand / reputation
- Pricing / commercial structure
- Roadmap / vision
- Implementation / time-to-value
- Existing relationship

### Why lost (7-10 categories)
- Competitor capability advantage
- Pricing — too expensive
- Pricing — packaging mismatch (couldn't buy what they needed)
- No champion / champion left
- Lost to status quo / no decision
- Implementation concerns
- Trust / perceived risk
- Roadmap concerns
- Brand / size
- Procurement / security blocker

### Decision criteria (rank top 3 per buyer)
- Capability
- Price
- Time to value
- Risk
- Vendor relationship
- Roadmap
- Trust / brand
- Compliance

### Competitor codes
List actual competitors mentioned. Code the framing the buyer used to describe each ("the safe choice," "the expensive one," "the one our parent company uses").

### Surprise codes
Anything the buyer expressed surprise about. Surprises are positioning gaps.

---

## Synthesis Output

### Quarterly Win/Loss Report Template

```markdown
# Q{N} {YEAR} Win/Loss Report

**Sample:** {N} interviews ({W} wins, {L} losses, {C} churned, {NDC} no-decision)
**Win rate this quarter:** {X}% (vs {Y}% last quarter)

## Top 5 Reasons We Win
1. {pattern} — {N}/{W} mentions
   > "{verbatim quote}"
   - Implication: {action}
   - Owner: {person}

[... 4 more ...]

## Top 5 Reasons We Lose
[same structure]

## Competitor Snapshot
- **{Competitor A}:** Won {X} / Lost {Y}. Buyers describe them as {framing}.
  - When they win: {pattern}
  - Where we beat them: {pattern}
  - One line for sales to use: "{...}"

[... per competitor ...]

## 3 Surprises
- {finding} — what we believed vs. what buyers said
- {finding}
- {finding}

## Decisions and Owners
| Finding | Decision | Owner | Date |
|---|---|---|---|
| ... | ... | ... | ... |
```

---

## Distribution: Make It Heard

A report that lives in a Notion page nobody reads is wasted research. The distribution matters as much as the synthesis.

### The 30-minute readout
- Live to product, marketing, sales leaders together — same room
- Lead with **3 verbatim audio clips** before any slide
- Each clip 30-90 seconds, with no commentary
- Then summarize patterns
- End with the decisions and owners table

### The asynchronous follow-up
- 1-page exec summary (top patterns + decisions)
- Full deck linked but not pushed
- Sales gets a 1-page **win/loss takeaway** for sales kickoff: "Here is how to handle the {Competitor X} loss pattern"

### The competitive battle card update
Findings flow directly into competitor battle cards (see `competitor-profiling`). Update at least quarterly.

---

## Specific Outputs

### "Why we win" / "Why we lose" one-pagers
For sales enablement (see `sales-enablement`). One per major persona. Quotable. Updated quarterly.

### Competitor narratives
The exact framing buyers use to describe each rival. Marketing uses these in `competitor-alternatives` pages. Sales uses them in objection handling.

### Positioning gap log
Things buyers expected but did not get. These are direct inputs to product and roadmap.

### Switcher cohort analysis
Specifically: customers who switched from {Competitor X} → us. What was the trigger? What did they wish they had switched sooner? This is the highest-converting case study material in the whole program.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Sales rep interviews their own lost deals | Use a neutral interviewer (researcher, exec, or external firm) |
| No incentive offered | Pay $100-300 cash |
| Wait 60+ days post-close | Outreach within 14 days; recall and honesty fade fast |
| Ask leading questions ("What did you love about us?") | Use open-ended structure: "Tell me about..." |
| One-time project instead of engine | Build the trigger → recruit → interview cadence; quarterly cycle |
| Quotes only, no codes | Code transcripts; quotes illustrate, codes count |
| Hide losses from leadership | Losses are the most valuable. Read them out loud, pain and all |
| Ignore "no-decision" losses | These are 30-50% of B2B losses. The buyer chose status quo. The story matters |

---

## Vendors and Tooling

- **Outsourced firms:** Klue, Crayon (lighter touch), Primary Intelligence, Walnut, DoubleCheck Research (rigorous)
- **DIY transcription:** Otter.ai, Fireflies, Gong (native if you already have it)
- **Coding:** Dovetail, Marvin, EnjoyHQ — or a structured Notion / Airtable database
- **Recruiting:** UserInterviews.com for B2C / SMB; sales-CRM-driven for enterprise

For most teams under $20M ARR, DIY with a senior PMM or founder doing the interviews beats outsourced. The interviewer's pattern recognition is the value.

---

## References

- *The Mom Test* by Rob Fitzpatrick — how to ask questions that get honest answers
- *Demand-Side Sales 101* by Bob Moesta — Jobs-to-Be-Done interviewing technique that works for win/loss
- *Obviously Awesome* by April Dunford — positioning grounded in alternatives, fed directly by win/loss
- "Forces of Progress" framework (Christensen / Moesta) — push, pull, anxiety, habit; coding scheme for switching decisions
- Klue and Crayon publish open competitive intelligence reports worth reading

---

## Cross-Skill Links

- **`competitor-profiling`** — pairs with this; profile competitors before interviews so you ask the right questions
- **`customer-research`** — broader voice-of-customer research; win/loss is a specialized subset
- **`sales-enablement`** — battle cards and objection docs are downstream deliverables
- **`brand-voice`** — positioning evolution is downstream of repeated win/loss patterns
- **`pricing-strategy`** — pricing-related losses surface here first
- **`churn-prevention`** — churned-customer interviews live in both skills
