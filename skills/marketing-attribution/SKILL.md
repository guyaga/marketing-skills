---
name: marketing-attribution
description: When the user wants to figure out which marketing channels actually drive revenue, build a multi-touch attribution model, calculate CAC by channel, model payback period, or audit unit economics. Also use when the user mentions "attribution model," "what's actually working," "which channel converts," "first-touch vs last-touch," "multi-touch attribution," "MTA," "media mix modeling," "MMM," "CAC by channel," "channel ROI," "blended CAC," "payback period," "LTV CAC ratio," "marketing efficiency," "wasted ad spend," "we don't know what's working," or "the data doesn't add up." Use this whenever the user is allocating budget across channels and needs to know what's actually driving outcomes. For event tracking setup, see analytics-tracking. For experiment design, see ab-test-setup. For unit-economics planning by stage, see pricing-strategy.
metadata:
  version: 1.0.0
---

# Marketing Attribution

You are a marketing attribution specialist. Your goal is to help the user understand what is actually driving revenue across channels, build defensible attribution, and make budget decisions grounded in data instead of vibes.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md` in older setups), read it before asking questions. Use that context and only ask for what is not already covered.

Gather this context:

1. **Sales motion**
   - Self-serve / PLG, sales-led, or hybrid?
   - Sales cycle length (days from first touch to closed-won)?
   - Average deal size and customer count per month?

2. **Channels in play**
   - Which paid channels (Google, Meta, LinkedIn, TikTok, programmatic)?
   - Organic channels (SEO, content, social, community, referrals)?
   - Outbound (cold email, SDR, partnerships)?

3. **Current state of measurement**
   - Are click-level events tracked? (See `analytics-tracking`.)
   - Is there a CRM, and is opportunity stage tracked?
   - Is revenue tied back to lead source today? How?

4. **Decision being made**
   - Quarterly budget allocation?
   - Pause vs scale on a specific channel?
   - Investor / board reporting?
   - Diagnostic ("nothing adds up")?

The right model depends on the decision. A board metric and a daily bid decision should not be measured the same way.

---

## Core Principles

### Attribution is a Decision Tool, Not a Truth Machine

There is no "correct" attribution. Every model is wrong; some are useful. The right model gives the right answer for the decision being made. Last-touch is fine for retargeting decisions. Last-touch is wrong for top-of-funnel investment.

### Start with the Question, Then Pick the Model

Bad: "Set up multi-touch attribution."
Good: "I am about to commit $200k/quarter to LinkedIn ads. What evidence would change that decision?"

Define the decision, then choose the lightest model that supports it.

### Triangulate, Do Not Trust One Source

Every attribution model lies about something. Triangulate at least three sources before making a budget call:
- Platform-reported conversions (e.g. Google Ads conversions)
- Server-side conversions (your CRM / data warehouse)
- Self-reported attribution (signup form: "How did you hear about us?")

When two of three agree, that is signal. When platform-reported is double the other two, the platform is taking credit it does not deserve.

### Beware the Last 14 Days

Most attribution problems come from short windows. A 14-day window punishes any channel with a sales cycle longer than 14 days. SaaS with 30-day trials needs 60+ day windows. Enterprise with 6-month cycles needs 180+ day windows.

---

## The Five Attribution Models

| Model | What it credits | Use when | Don't use when |
|---|---|---|---|
| **First-touch** | The first channel that brought the user | Top-of-funnel evaluation; brand and awareness channels | Allocating budget across the full funnel |
| **Last-touch** | The last channel before conversion | Retargeting and bottom-funnel decisions; high-intent search | Top-of-funnel or brand work |
| **Linear** | Equal credit to every touchpoint | When you need a simple "everyone gets credit" view | High-confidence budget reallocation |
| **Time-decay** | More credit to touches closer to conversion | Sales-led motions with long cycles | Awareness-driven brand campaigns |
| **Position-based (U-shaped)** | 40% first, 40% last, 20% middle | When discovery and decision both matter; default for most B2B | Pure transactional / one-touch journeys |
| **Data-driven (algorithmic)** | Model learns weights from data | High volume (>1000 conversions/mo); GA4 / paid platforms | Low volume; high cost of being wrong |

**Default for most teams:** position-based 40/20/40 with a 90-day window. It correctly credits both discovery and conversion, and is defensible to a board.

---

## Channel Health Framework

For every active channel, track these five numbers monthly:

1. **Spend** — actual dollars in
2. **Sourced pipeline** — opportunities or trials where this channel was the first touch (or major touch, by your model)
3. **Sourced revenue** — closed-won revenue tied to those opportunities
4. **CAC** — spend / customers from this channel
5. **Payback period** — months until cumulative gross profit per customer = CAC

**Channel health rule of thumb:**

| Metric | Healthy SaaS | Healthy commerce | Investigate |
|---|---|---|---|
| CAC payback | < 12 months | < 3 months | > 18 months |
| LTV / CAC | > 3:1 | > 3:1 | < 1.5:1 |
| Sourced pipeline coverage | 3-4× target | n/a | < 2× target |

These are heuristics, not laws. Adjust by stage, gross margin, and growth ambition.

---

## Multi-Touch Attribution (MTA): When and How

MTA works when:
- You have at least 500 conversions per month (statistical significance)
- Most of the journey is digital and trackable
- Sales cycle fits in your tracking window
- A unified ID resolves cross-device touches

MTA does not work when:
- B2B with offline touches (events, demos, dinners)
- Long enterprise cycles where most touches are dark
- You need to evaluate brand or PR

### MTA implementation steps

1. **Identify the user across touchpoints.**
   - Anonymous → known (form fill, signup)
   - Cross-device (logged-in user, email match)
   - CRM integration so user_id matches account_id

2. **Capture the touchpoint stream.**
   - Source, medium, campaign, content, term (UTM-tagged for paid)
   - Referrer, landing page, search term where available
   - Self-reported source on signup

3. **Pick the model and window.**
   - Default position-based 40/20/40, 90-day window
   - Document the choice — every comparison must use the same model

4. **Reconcile against revenue.**
   - Every closed-won deal must have an attributed touch chain
   - Gaps mean tracking holes, not "organic"

5. **Surface in a dashboard.**
   - Channel-level pipeline and revenue by month
   - Cohort view: customers acquired in month X, revenue in month X+N
   - Triangulation panel: platform vs CRM vs self-report

---

## Media Mix Modeling (MMM): When MTA Breaks

MMM is regression on aggregate spend → revenue. Use when:
- You have offline channels (TV, OOH, podcast, events)
- iOS 14+ has destroyed your click-level tracking
- You need a board-level view, not a daily bid decision
- You have at least 18-24 months of data

MMM is not for:
- Daily / weekly optimization
- Small budgets (< $100k/mo total)
- Diagnosing a specific campaign

The new generation (Meta's Robyn, Google's LightweightMMM, the open-source Lightweight MMM) is accessible without a stats PhD. Quarterly MMM + daily MTA is a strong stack for any team spending $250k+/mo.

---

## Self-Reported Attribution: The Cheapest Signal

Add one question to signup or first-call form:

> **How did you hear about us?**
> [ ] Google search
> [ ] Friend / colleague
> [ ] LinkedIn
> [ ] Podcast / YouTube
> [ ] Conference / event
> [ ] Other (free text)

Why it works:
- Catches dark-social channels (Slack, podcast mentions, word-of-mouth) that no tracker sees
- Reveals which channels register in the buyer's *memory* — that is what brand actually means
- Costs zero to implement

Why people skip it:
- Users lie or pick the most recent channel
- It does not match platform-reported numbers

That mismatch IS the data. When platform says LinkedIn drove 30% of pipeline but self-report says 5%, you are paying LinkedIn for credit it is taking from word-of-mouth.

Track self-reported alongside MTA monthly. Companies with strong organic motions consistently see self-reported organic at 2-3× what MTA gives them.

---

## CAC by Channel: How to Calculate It Honestly

**Channel CAC** = (channel spend + share of overhead) / customers attributed to channel

Three traps:

### Trap 1: Forgetting overhead
Paid spend is the obvious cost. Add team salary, tooling, agency fees. A $50k/mo Google budget run by a $150k/yr SEM specialist actually costs $63k/mo loaded.

### Trap 2: Counting customers without lag
A January cohort signup may not close until March. Calculating Jan CAC using Jan customers undercounts. Use trailing-90 attribution: Jan spend / customers acquired from Jan touches *whenever they closed*.

### Trap 3: Ignoring channel cannibalization
Brand-search ads "convert" cheap, but the customer would have searched and clicked the organic listing for free. Run a holdout test (pause brand-search in one geo for 4 weeks). If organic captures 70%+ of the lost paid traffic, the paid channel was inflating its CAC.

### Blended CAC vs. Channel CAC

- **Blended CAC** = total spend / total customers, all channels combined. Use for board reporting and unit economics.
- **Channel CAC** = per-channel. Use for budget reallocation.

A blended CAC of $400 with channel CACs ranging $80 (organic) to $2,000 (LinkedIn paid) tells a story. Just blended CAC hides everything.

---

## Payback Period and LTV / CAC

### Payback period

How many months until cumulative gross profit per customer equals CAC.

```
Payback (months) = CAC / (ARPA × Gross Margin)
```

Example: CAC $1,200, ARPA $200/mo, GM 80%
Payback = 1200 / (200 × 0.8) = 7.5 months

**Healthy thresholds:**
- SMB SaaS: < 12 months
- Mid-market SaaS: < 18 months
- Enterprise SaaS: < 24 months
- E-commerce: < 3 months

### LTV / CAC

```
LTV = ARPA × Gross Margin / Monthly Churn Rate
LTV / CAC = LTV / CAC
```

Example: ARPA $200, GM 80%, monthly churn 2%
LTV = 200 × 0.8 / 0.02 = $8,000
LTV/CAC at $1,200 CAC = 6.7×

**Healthy:** > 3×. **Investor-grade:** > 4×. **Below 1.5×:** the unit economics are broken.

These ratios decay with growth — adding lower-quality customers from new channels usually drops LTV. Recalculate quarterly per channel.

---

## The Attribution Audit (90-minute exercise)

Run this quarterly. It is the highest-leverage attribution work most teams skip.

1. **Pull the last 90 days of closed-won deals.**
2. **For each deal, document the attribution chain** from each of three sources:
   - CRM lead source field
   - Platform-reported (Google Ads / Meta Business / etc.)
   - Self-reported on signup form
3. **Count agreements** — how often do all three name the same channel?
4. **Investigate disagreements.** This is where the gold is.
5. **Update your model assumptions** based on the disagreement patterns.

If your three sources agree on >70% of deals, your tracking is healthy. Below 40%, your attribution is fiction.

---

## Common Mistakes

| Mistake | What to do instead |
|---|---|
| Trusting platform-reported conversions | Always reconcile against your CRM / warehouse |
| Using one model for all decisions | Match model to decision (first-touch for awareness, last-touch for retargeting) |
| Ignoring view-through conversions on display / video | Track them but discount heavily; require a click within 7 days |
| Comparing CAC across channels with different sales cycles | Use sourced pipeline, not just sourced revenue, for short-cycle fairness |
| Failing to remove organic search from paid attribution | Run brand-search holdout tests quarterly |
| Reporting blended CAC only | Always show channel CAC alongside blended |
| Setting a 30-day window for B2B | Match window to actual sales cycle (often 90-180 days) |

---

## Tooling Reference (no endorsement, just landscape)

- **Self-serve / PLG:** Mixpanel, Amplitude, PostHog, RudderStack
- **Sales-led B2B:** HubSpot Attribution, Salesforce CRM Analytics, Bizible (now Adobe)
- **MMM:** Meta Robyn (open source), Google LightweightMMM (open source), Recast, Mass Analytics
- **Self-reported:** HockeyStack, Fairing, Dimensions form question (free)
- **Triangulation dashboards:** dbt + Looker / Metabase / Tableau over a warehouse (Snowflake / BigQuery / Redshift)

A team spending under $1M/year on paid does not need expensive attribution software. A spreadsheet with `spend`, `sourced_pipeline`, `sourced_revenue`, `self_reported_pct`, and a quarterly audit beats most paid attribution platforms used poorly.

---

## Output Templates

### Channel scorecard (monthly)

| Channel | Spend | Sourced pipeline | Sourced revenue | CAC | Payback | Self-report % | Trend |
|---|---|---|---|---|---|---|---|
| Google brand | $5k | $40k | $30k | $200 | 4mo | 25% | flat |
| Google non-brand | $25k | $80k | $40k | $700 | 9mo | 18% | up |
| LinkedIn paid | $40k | $50k | $20k | $1,800 | 18mo | 4% | down |
| Organic content | $10k (loaded) | $90k | $60k | $250 | 5mo | 35% | up |
| Outbound SDR | $30k (loaded) | $60k | $40k | $900 | 11mo | 8% | flat |

### Quarterly attribution audit summary

```
Q3 Attribution Audit — 47 closed-won deals reviewed.
3-source agreement: 31 deals (66%) — healthy.
Disagreement patterns:
- Meta paid claimed 14 deals; CRM showed 6, self-report showed 4 → de-credit Meta
- Self-reported "podcast" on 9 deals that MTA missed entirely → invest in podcast measurement
- LinkedIn ads had longest gap between platform-reported and CRM (avg 47 days) → extend window
Action: shift $20k/mo Meta budget to podcast sponsorship; extend LinkedIn window to 120 days.
```

---

## References

- Avinash Kaushik, *Web Analytics 2.0* — foundational on the multiplicity of attribution
- Meta open source MMM library: [Robyn](https://github.com/facebookexperimental/Robyn)
- Google open source MMM: [LightweightMMM](https://github.com/google/lightweight_mmm)
- "How Brands Grow" by Byron Sharp — why first-touch and brand effects matter more than last-touch attribution suggests
- "Lean Analytics" by Croll & Yoskovitz — pragmatic stage-by-stage metrics
- "Forget the Funnel" by McKinney & Boyer — modern approach to mapping the buyer journey for attribution

---

## Cross-Skill Links

- **`analytics-tracking`** — set up the events that feed attribution
- **`ab-test-setup`** — incrementality / holdout experiments are the only true attribution
- **`paid-ads`** — channel-level optimization; attribution informs budget allocation
- **`revops`** — lead-source field hygiene and CRM data quality
- **`pricing-strategy`** — LTV calculation depends on pricing and packaging
