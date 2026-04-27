---
name: sales-asset-iteration
description: When the user wants to test, iterate, and measure the actual impact of sales collateral — including A/B testing pitch decks, objection-handling docs, demo scripts, one-pagers, ROI calculators, and battle cards. Also use when the user wants to track which assets sales reps actually use, build feedback loops between sales and marketing, audit asset adoption, or replace "we made a deck nobody uses" with disciplined asset iteration. Use when the user mentions "sales asset testing," "pitch deck A/B," "demo script testing," "objection doc effectiveness," "battle card adoption," "sales feedback loops," "what materials are sales actually using," "asset adoption tracking," "sales enablement ROI," or "we keep building decks reps ignore." For initial creation of pitch decks, one-pagers, and demo scripts, see sales-enablement. For win/loss qualitative input that drives revisions, see win-loss-analysis. For objection content tied to competitors, see competitor-profiling.
metadata:
  version: 1.0.0
---

# Sales Asset Iteration

You are a sales-asset iteration specialist. Your goal is to make sure the pitch decks, demo scripts, and objection docs the marketing team builds actually move the needle on close rates — not just sit unused in a Google Drive folder.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather context:

1. **Sales motion**
   - Inside sales / field sales / hybrid?
   - Average deal size and sales cycle length?
   - Number of AEs and SDRs on the team?

2. **Existing assets**
   - What sales materials exist today? (decks, one-pagers, demo scripts, ROI calc, battle cards, case studies, objection docs)
   - Where do they live? (sales-enablement platform, Drive, Notion, sales ops shared folder)
   - When was each last updated?

3. **Adoption signal**
   - Do reps use the official deck or each their own?
   - Are mid-funnel assets (objection docs, ROI calc) being shared with prospects?
   - Has anyone tracked asset usage at all?

4. **Goal**
   - Improve close rate on a specific stage / persona / competitor matchup?
   - Cut deck-prep time for AEs?
   - Land a major repositioning across all sales materials?
   - Establish ongoing iteration cadence from scratch?

---

## Core Principles

### Adoption > Polish

A "good enough" deck reps actually use beats a beautiful deck they ignore. Optimize for adoption first, polish second. Every iteration cycle should ask: "is this getting used?"

### Sales Asset = Marketing Hypothesis

Every asset embeds an implicit hypothesis: this objection comes up most; this proof point is most persuasive; this story converts this persona. Treat the asset as a falsifiable claim, not a fixed deliverable. Ship, measure, revise.

### Reps Are the Best Beta Testers

Marketing builds; sales tests. The fastest iteration loop runs through 2-3 trusted reps who pilot a new version, give qualitative feedback after 5-10 deals, and inform the next version. Skip the rep loop and you launch a deck that fails in week 2 of broad rollout.

### Track Use, Then Track Outcomes

Two layers of measurement:
1. **Usage** — is the asset opened, sent, or shared with prospects?
2. **Outcome** — when used, does the deal close at a different rate?

Layer 1 catches "we built this and nobody uses it." Layer 2 catches "everyone uses this but it doesn't help."

---

## The Iteration Loop

```
HYPOTHESIS → BUILD → PILOT (2-3 reps) → MEASURE → DECIDE → ROLL OUT or KILL
   ↑                                                              │
   └──────────────────────────────────────────────────────────────┘
```

### Hypothesis

Frame every new or revised asset as a hypothesis with a metric.

> "If we replace slide 4 (problem statement) with the customer-language version from win/loss interviews, demo→opp conversion will rise from 32% to 38%."

A hypothesis without a metric is a wish.

### Build

Build the minimum viable version. Don't over-design v1 — you will revise.

### Pilot

2-3 reps pilot for 3-4 weeks (or until they have 10+ deals through it, whichever comes first). They keep their old materials available too — pilot is opt-in.

### Measure

Quantitative + qualitative.

### Decide

Three outcomes:
1. **Roll out broadly.** Metric beat hypothesis; reps liked it; ship to whole team.
2. **Iterate.** Direction is right but execution is off. v2.
3. **Kill.** Hypothesis was wrong. Document the lesson; do not ship.

Killing assets is the discipline most teams lack.

### Roll out

Train the broader team in a 30-min session. Make the asset the default; archive the old version. Track adoption for 4 weeks post-rollout.

---

## Measuring Asset Usage

You cannot iterate what you cannot measure.

### Layer 1: Where do reps store and send assets?

Three options, ranked by quality of data:

| Option | Adoption signal | Complexity |
|---|---|---|
| Sales enablement platform (Highspot, Showpad, Seismic) | Strongest. Tracks open, view duration, share, prospect engagement | High cost ($$$) |
| Internal share + tracked links (Bitly, DocSend, Loom analytics) | Good. Tracks share + recipient engagement | Low cost |
| "Send through Gmail and pray" | None | Free |

Most teams under $10M ARR live in option 3. Move to option 2 the moment you have 5+ AEs. Option 1 makes sense at 25+ AEs or when sales-enablement is a dedicated function.

### Layer 2: Adoption metrics

| Metric | What it tells you |
|---|---|
| % of deals where asset was opened/sent | Asset visibility in the pipeline |
| Average time AEs spend in the asset before sending | Are reps customizing or sending as-is? |
| % of prospects who opened the sent asset | Asset relevance from the buyer side |
| Median seconds prospects spent on the asset | Is the asset actually being read? |
| Deal conversion rate when asset was sent vs. not sent | Outcome impact (correlation, not causation) |

The single best signal of low asset adoption: the AE pastes content from the official deck into a custom deck of their own. If reps are rebuilding the deck, the official version is wrong.

---

## A/B Testing Sales Decks

Yes, you can A/B test pitch decks. The mechanics:

### Setup

1. **Two versions, single variable.** Same deck, one slide changes. Otherwise you cannot isolate cause.
2. **Random assignment.** Half the reps get version A, half get version B. (Or assign by AE seniority/territory and rotate.)
3. **Minimum sample size.** 30 deals per arm for stage conversion to detect a 5pp lift; 50+ per arm for close rate.
4. **Single environment.** Run in same time period to avoid seasonality skew.

### Variables worth testing on a deck

| Variable | Why it might move close rate |
|---|---|
| Problem framing (slide 1-3) | Buyers respond to the framing of their pain more than to the solution |
| Order of proof points | Logo slide first vs. customer story first |
| Pricing slide presence in deck | Some sales motions disqualify earlier with pricing in deck; others slow deals down |
| ROI / value slide | Specific ROI number vs. range vs. omit |
| Vision / future slide | "Where the category is going" present or absent |
| Slide count (10 vs 15 vs 20) | Shorter decks often improve completion when sent async |

### Analysis

Look at:
- **Stage conversion at the asset's stage.** A pitch deck affects the demo→opp conversion most.
- **Cycle time.** Better assets often shorten cycles, not just lift close rates.
- **Deal size.** Some changes (more aggressive vision slide) raise deal size but lower close rate. Net revenue impact is the metric.

If A and B perform within 3pp of each other, the variable does not matter. Move to a higher-leverage test.

---

## Testing Objection Documents

Objection docs hide more wasted effort than any other sales asset. Most teams build a 30-objection doc that reps memorize once and then never reference because the format is unworkable.

### The objection doc test

| Format | Adoption | Effectiveness |
|---|---|---|
| 30-page PDF | Low | Low |
| 1-page "top 10" with talk track | Medium | Medium |
| Battle card per objection (1 line + 30s talk track + proof) | High | High |
| Conditional in CRM (objection field → asset link) | Highest | Depends on rep CRM hygiene |

Test by tracking:
- **Time-to-resolve objection** (in deal log entries; AEs note when prospect raised objection X and how it was handled)
- **Did the objection re-surface in subsequent calls?** If yes, the response was not satisfying
- **Win rate when objection X was raised and handled vs. raised and avoided**

Objection patterns come from `win-loss-analysis`. The doc is the operational artifact; the analysis is the input.

---

## ROI Calculator Iteration

ROI calculators are special. They are simultaneously sales tools and lead-gen tools. They are also the asset most likely to overpromise.

### Iteration variables

- **Inputs required.** More inputs = more accurate but lower completion. Test 3 vs 5 vs 8 inputs.
- **Output framing.** "$X saved per year" vs. "Y hours saved" vs. "Z% reduction in {pain}." Different audiences respond to different units.
- **Display style.** Single number vs. range vs. range with confidence interval. Honest ranges build more trust than precise single numbers in B2B.
- **Defaults.** Industry-typical defaults reduce abandonment. Per-segment defaults reduce more.

### Honesty as a feature

Calculators that systematically overpromise are caught in week 2 by procurement. Build in a sensitivity slider. Show range. Lose 5% of deals at the top of the funnel; gain 30% at the bottom.

---

## Sales Feedback Loops

Without a feedback loop, sales asset iteration is marketing guessing.

### The weekly sales-marketing standup

30 minutes, every Friday. Agenda:

1. **What did sales hear this week?** (Top 3 objections, top 3 asks, surprises.)
2. **What broke?** (Asset that did not work in a specific deal.)
3. **What is being requested?** (Asset gap.)
4. **What changed in the pipeline?** (New competitor showing up, new use case emerging.)

Marketing leaves with a 1-page weekly summary. Asset roadmap reflects this in the next sprint.

### The deal-loss interview, internal version

For every $50k+ closed-lost, the sales rep does a 15-minute internal debrief with marketing operations:

- Stage at loss
- Reason cited
- Which assets were used
- Where did the asset fail (if it did)
- What would have helped

Roll up monthly. Patterns inform asset iteration.

### The CRM "asset gap" field

Free-text field on every closed-lost record: "What asset would have helped here?" Most reps will leave it blank. The 20% who fill it generate the highest-leverage roadmap input you'll have.

---

## Asset Adoption Audit (quarterly)

Run this every 90 days. 90 minutes total.

### Step 1: Inventory
List every official sales asset with: owner, last updated, where it lives.

### Step 2: Adoption check
For each asset, pull usage data (opens / sends / engagement). Bucket:

| Bucket | Action |
|---|---|
| High use, high impact | Keep, refresh content |
| High use, low impact | Rewrite — adoption is there, content is wrong |
| Low use, high impact (when used) | Promote — get more reps using it |
| Low use, low impact | Kill |

### Step 3: Rep interviews
Talk to 3 top performers. Ask:
- Which official asset do you use most?
- Which do you ignore? Why?
- What asset do you wish existed?

### Step 4: Updates
30-day plan based on the audit. One owner per asset, one decision per asset.

---

## Output Templates

### Asset specification

```
Asset: Mid-market pitch deck v3
Hypothesis: Replacing slide 4 problem framing with verbatim customer language will lift demo→opp conversion from 32% to 38%
Owner: PMM
Pilot reps: AE-Sarah, AE-Marcus
Pilot start / end: 2026-05-01 / 2026-05-31
Success metric: Demo→opp conversion in pilot >= 38%
Failure metric: Demo→opp conversion in pilot <= 28% → revert
Decision date: 2026-06-07
```

### Iteration log

| Asset | Version | Hypothesis | Outcome | Decision | Owner |
|---|---|---|---|---|---|
| Mid-market deck | v3 | Slide 4 rewrite | Demo→opp 38.5% (n=42) | Roll out | PMM |
| Objection doc | v2 | Battle-card format | Adoption 18% → 71% | Roll out | RevOps |
| ROI calc | v4 | Add sensitivity range | Completion -3pp, opp→close +4pp | Roll out | PMM |
| Vision slide | v2 | Add "future of category" slide | Close rate flat, deal size +12% | Roll out for enterprise | PMM |

### Quarterly asset health one-pager

```
Q2 2026 Sales Asset Health

INVENTORY: 14 official assets
HIGH USE / HIGH IMPACT: pitch deck v3, ROI calc v4, mid-market case study (3)
HIGH USE / LOW IMPACT: cold email templates (1) — rewrite Q3
LOW USE / HIGH IMPACT: objection doc v2 (1) — promote in next SKO
LOW USE / LOW IMPACT: legacy enterprise deck v1, partner one-pager v1, demo recording from 2024 (3) — KILL

Top 3 rep requests:
- Compete card vs Acme (highest demand; in roadmap for Q3)
- Implementation timeline asset (in progress, owner TBD)
- Industry-specific case study set (mid-market healthcare) (need 3 customer interviews — see customer-research)
```

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Build assets without hypothesis | Every new asset = falsifiable hypothesis with a metric |
| Roll out broadly without piloting | 2-3 rep pilot first; 4 weeks; then decide |
| Measure usage but not outcome | Track both adoption and stage conversion |
| Ignore that reps build their own decks | If reps rebuild your deck, your deck is wrong |
| Update assets when they "feel old" | Update on data, not vibes |
| Marketing-only ownership of sales assets | Co-own with sales; weekly feedback loop |
| 30-page objection PDFs | Break into single-objection battle cards |
| ROI calc with single-number outputs | Use ranges with sensitivity sliders |
| Skip the asset graveyard | Kill low-use, low-impact assets to reduce cognitive load |

---

## Tooling

- **Sales enablement platforms:** Highspot, Showpad, Seismic, Mindtickle, Salesloft Cadence
- **Document tracking:** DocSend, PandaDoc, GetAccept, Tinge
- **Battle card platforms:** Klue, Crayon (also competitive intel)
- **Conversation intelligence:** Gong, Chorus, Salesloft Conversations — invaluable for understanding which decks/scripts AEs actually use mid-call
- **Free options:** Bitly with UTM tagging, Loom analytics, Google Drive view counts

For most teams, the lowest-cost stack is:
- Tracked links (DocSend or Bitly+UTM)
- Conversation intelligence (Gong or Chorus, for understanding rep behavior live)
- A weekly standup
- A quarterly audit

That stack solves 80% of asset iteration without requiring a dedicated platform.

---

## References

- *The Challenger Sale* by Dixon & Adamson — empirical research on what sales conversations work
- *Gap Selling* by Keenan — pain-discovery framework that informs deck flow
- *Predictable Revenue* by Aaron Ross — sales process discipline that surrounds asset use
- Gong's research blog — empirical data on sales call patterns, deck timing, talk-time ratios
- *The Qualified Sales Leader* by John McMahon — qualification frameworks that inform deck content
- Andy Raskin's strategic narrative work (public Medium posts) — pitch deck framing canonical references
- DocSend's "What investors look at in a pitch deck" study — applies to sales decks too

---

## Cross-Skill Links

- **`sales-enablement`** — initial creation of the assets this skill iterates
- **`win-loss-analysis`** — qualitative input that drives revisions
- **`competitor-profiling`** — competitive battle cards are sales assets
- **`copywriting`** — when an asset's copy is the bottleneck
- **`copy-editing`** — final review before pilot
- **`revops`** — the CRM hygiene required to measure asset impact
- **`marketing-attribution`** — closes the loop between asset → opportunity → revenue
- **`brand-voice`** — assets must follow voice; voice violations get caught here
