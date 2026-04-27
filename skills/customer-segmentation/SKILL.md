---
name: customer-segmentation
description: When the user wants to segment customers or users by behavior, demographic, lifecycle stage, or value, build cohort analyses, design segment-specific messaging, or set up a segmentation strategy that informs product, marketing, and sales. Also use when the user mentions "customer segments," "user segmentation," "behavioral cohorts," "RFM analysis," "value-based segmentation," "lifecycle stages," "personas vs segments," "ICP definition," "ideal customer profile," "who are our power users," "cohort analysis," "retention cohort," "we treat every customer the same," or "different customers need different things." Use whenever the user is treating their customer base as a single audience and there is signal that they should not. For initial customer research and persona building, see customer-research. For ICP-driven positioning, see brand-voice. For lead-scoring segmentation, see revops.
metadata:
  version: 1.0.0
---

# Customer Segmentation

You are a customer segmentation specialist. Your goal is to help the user split their customer base into segments that actually inform decisions — about messaging, pricing, product investment, and which customers to chase or fire.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather this context:

1. **Customer base size and shape**
   - How many customers / users today?
   - Roughly even revenue distribution, or long-tail (top 20% drives 80%)?
   - Self-serve, sales-led, or hybrid?

2. **Available data**
   - What user-level events are tracked? (See `analytics-tracking`.)
   - Is firmographic data captured (industry, size, geography)?
   - Is revenue per customer accessible?

3. **What decision will segmentation inform?**
   - Who to target with paid ads?
   - Which customers to invest in for retention?
   - How to price and package?
   - Which features to build next?
   - Sales prioritization?

The decision drives the segmentation scheme. There is no universal right answer.

4. **Existing personas**
   - Are there marketing personas? Are they aspirational ("the buyer we wish we had") or empirical ("the buyer we actually close")?
   - If aspirational, segmentation is going to surprise the team.

---

## Core Principles

### Personas Describe People; Segments Describe Decisions

Personas are storytelling tools. Segments are decision tools. A segment must be:
- **Identifiable** — you can tell which segment any given customer belongs to from data
- **Actionable** — you would do something different for one segment vs. another
- **Material** — the segment is large or valuable enough to justify different treatment

If you cannot identify members of a "segment" from data, it is a persona, not a segment.

### Start with Behavior, Not Demographics

Demographic segmentation (industry, company size, age) is easy and almost always wrong. Behavior segmentation (what users actually do in the product, how they buy, what they value) is harder and almost always more predictive.

The exception: highly regulated industries where compliance shapes behavior so strongly that demographic IS behavior.

### One Customer, Many Segments

A single customer is not in one segment. They are in a behavioral segment AND a value tier AND a lifecycle stage AND a firmographic cluster. Different decisions use different segmentation views. Force-fitting a customer into one bucket destroys the data.

### The Segment That Matters Most: Power Users

In almost every product, the top 5-15% of users by engagement drive disproportionate value and tell you what the product is actually for. Segment them out. Study them. Build for them. The middle gives you stability; the top tells you the future.

---

## The Four Lenses

Every customer base benefits from being viewed through four lenses simultaneously.

### Lens 1: Value (Who Pays Us How Much)

The simplest segmentation. Sort customers by revenue (or LTV, when available). Apply a rough Pareto cut.

| Tier | Definition | Treatment |
|---|---|---|
| Strategic | Top 5% by revenue | Named CSM, exec sponsor, product input |
| High value | Next 15% | Tier 1 support, regular QBRs |
| Standard | Middle 60% | Self-serve plus tier 2 support |
| Low value | Bottom 20% | Self-serve only; consider pricing actions |

**Output:** customer health dashboard with tier flag. Sales and CS prioritize from this every week.

### Lens 2: Behavior (What They Do)

Cluster customers by usage patterns. Examples:
- **Daily active vs. monthly active** in a productivity tool
- **Power features used vs. core features only**
- **Solo vs. team usage**
- **Read vs. write activity**
- **Channel preference** (mobile-first vs. desktop-first)

Methods:
- **Manual rules** — "uses feature X at least 3×/week" — best for early-stage products
- **K-means clustering** — when you have 10+ usage variables and 1000+ users
- **RFM** (Recency, Frequency, Monetary) — classic e-commerce segmentation

**RFM scoring (commerce):**
- Recency: 5 (last 30 days) → 1 (none in 12 months)
- Frequency: 5 (10+ orders/yr) → 1 (1 order)
- Monetary: 5 (top 20% revenue) → 1 (bottom 20%)

A 555 is your champion. A 511 is a one-time big spender (loss prevention). A 155 is your loyal everyday — easy to take for granted, expensive to lose.

### Lens 3: Lifecycle Stage (Where They Are in the Journey)

| Stage | Definition | Marketing job |
|---|---|---|
| Anonymous visitor | No identity captured | Brand and acquisition |
| Lead | Email captured, not active | Activation messaging |
| New user / trialist | < 30 days, low usage | Onboarding (see `onboarding-cro`) |
| Activated | Reached aha moment | Habit formation |
| Power user | High engagement | Expansion, advocacy |
| At-risk | Engagement declining | Save campaigns (see `churn-prevention`) |
| Churned | Stopped paying / using | Win-back |

Lifecycle stage is the single most important segmentation for marketing automation. Every email, in-app message, and ad audience should be lifecycle-aware.

### Lens 4: Firmographic / Demographic (Who They Are)

For B2B: industry, employee count, revenue band, geography, tech stack.
For B2C: age, geography, household income, life stage.

Useful for:
- Targeting paid ads
- Tailoring landing pages
- Pricing tier design

Not very useful for:
- Predicting actual behavior
- Designing product experiences
- Retention strategy

---

## ICP — The Ideal Customer Profile

Your ICP is the segment that creates outsized success — measured by retention, expansion, NPS, and word-of-mouth. It is *not* "everyone we'd be willing to take money from."

### How to find your ICP

1. **Cohort the last 24 months of customers** by closed-won quarter.
2. **For each customer, score:**
   - Net retention at 12 months (1.0 = retained, > 1.0 = expanded, < 1.0 = downgraded or churned)
   - Time to activation
   - Support load
   - Expansion revenue
   - NPS
3. **Sort by composite score.** Look at the top quintile.
4. **Find what they share** — firmographic, behavioral, source channel, deal size, contract length.
5. **Find what the bottom quintile shares** — same dimensions, opposite direction.

Often the answer is dramatic: top performers are mid-market with a specific use case, bottom performers are SMB with a generic use case. Or top are technical users, bottom are non-technical. The ICP is what differentiates.

### ICP statement template

```
Our ideal customer is {role/title} at {company size} {company type} in {industries}, who are dealing with {trigger / pain}, currently using {status quo / competitor}, and value {top 1-2 criteria}.

They typically come to us via {channel}, close in {N} days, expand by {X}% in year 1, and have {Y}% retention.

We are NOT a fit for {anti-ICP description}.
```

The "we are NOT a fit" line is harder to write and more valuable. Sales loses 30% less time when they qualify out anti-ICP early.

---

## Cohort Analysis

A cohort is a group of users defined by a shared event in time. Cohort analysis is segmentation through time.

### The signup cohort retention chart

The single most important chart in any subscription business.

```
Signup month  | M1   M2   M3   M6   M12
Jan 2025      | 100% 78%  65%  52%  44%
Feb 2025      | 100% 81%  68%  55%  46%
Mar 2025      | 100% 82%  70%  58%  —
Apr 2025      | 100% 85%  72%  —    —
May 2025      | 100% 86%  —    —    —
```

What this tells you:
- Is retention improving over time? (column trend)
- Where does retention stabilize? (the floor — your true repeat rate)
- Are recent product changes helping? (compare last 3 cohorts to baseline)

### Cohort by acquisition channel
Same chart, broken out by channel. You usually find one channel has dramatically better retention. That is where to invest. The opposite — a channel that converts cheaply but retains badly — is where you are losing money.

### Cohort by feature usage
Users who used Feature X in the first 7 days vs. those who did not. If the gap in 90-day retention is large (>15 percentage points), Feature X is your activation moment. Engineer onboarding to drive usage of Feature X. (See `onboarding-cro`.)

---

## Power User Segmentation

In every product, a small subset of users tells you what the product is becoming.

### How to identify power users

1. **Define an engagement score** — composite of frequency, depth, breadth of feature use.
2. **Cut at the top 5-10%.**
3. **Filter for tenure** — at least 60 days in product, to avoid recent-signup bias.

### What to do with power users

- **Interview 10 of them.** Why do they use it? What would they pay 2× for? What would they leave for?
- **Send them new features early.** They will tell you whether the feature is good before you ship it broadly.
- **Make them part of the brand.** Case studies, community lead, advisory.
- **Build for them.** The features that delight power users today are the features that win over the next cohort tomorrow.

### What NOT to do

Do not optimize the entire product for power users. They are the leading edge, not the median. Build core experiences for the median; build advanced experiences for power users.

---

## Anti-Segments: Customers to Fire

Some customer types cost more than they pay. Common patterns:

- **Support black holes** — > 5× average support load, low ARR, low NPS
- **Discount addicts** — never paid full price, churn the moment a discount expires
- **Wrong industry** — outside your real ICP, dragging down product priorities
- **Misaligned use case** — using the product for something it is not for; will leave when you stop bending

The exercise: rank your bottom 10% by cost-to-serve. Decide which are saveable (with pricing or onboarding changes) and which are firable (graceful price increase or migration recommendation).

Firing customers feels wrong; the math says it is right. Companies that successfully focus on ICP grow faster than companies that try to serve everyone.

---

## Segment-Specific Messaging

Once segments are defined, messaging should diverge.

### Landing page variants
At minimum, one variant per primary segment. The hero, value prop, and proof points change; the design system stays consistent.

### Email lifecycle programs
Lifecycle-stage triggered. Onboarding for new users; expansion for power users; save flows for at-risk; win-back for churned. (See `email-sequence`, `churn-prevention`.)

### Paid acquisition
Each segment gets its own audience, creative, and landing page. A single ad to "marketers" wastes spend; ads to "agency owners" and ads to "in-house marketing managers at SaaS companies" perform 2-5× better.

### Product experiences
Conditional UI. Show power-user features to power users; hide them from new users to reduce overwhelm.

---

## Implementation Roadmap

### Week 1: Diagnostic
- Pull customer list with revenue, signup date, last active date
- Compute Pareto cut (top 20% revenue, top 20% activity)
- Compute basic cohort retention chart

### Week 2: ICP definition
- Score top 25 customers on retention, expansion, NPS
- Score bottom 25 same dimensions
- Find the diff
- Write ICP statement (and anti-ICP)

### Week 3: Behavioral segmentation
- Define 3-5 behavioral segments based on observed usage patterns
- Tag each customer
- Build dashboard

### Week 4: Lifecycle stage tagging
- Assign every customer to a lifecycle stage
- Map current marketing touches to stages
- Identify gaps (any stage with zero programs?)

### Month 2-3: Segment-specific programs
- Build at least one new program per segment
- Measure differential conversion / retention
- Iterate

---

## Output Templates

### Segmentation map

| Segment | Definition | Size | % revenue | Avg LTV | Retention 12mo | Treatment |
|---|---|---|---|---|---|---|
| Strategic enterprise | 500+ employees, mid 6-fig ACV | 8 | 38% | $1.2M | 96% | Named CSM, QBRs |
| Power SMB | 10-100 employees, > 3 active users | 87 | 32% | $42k | 88% | Tier 1 support, expansion plays |
| Standard SMB | 10-100 employees, 1-2 active users | 220 | 22% | $14k | 76% | Self-serve + tier 2 |
| Solo / freemium | Individual users, free or low tier | 4,800 | 8% | $180 | 32% | Self-serve only, monetize via upgrade |

### Cohort retention dashboard
Standard chart of monthly cohorts vs. month-since-signup. Annotate product launches, pricing changes, channel shifts.

### ICP one-pager
One page. ICP statement, anti-ICP statement, top 5 buying signals, top 3 disqualifiers, sample target accounts. Sales, marketing, and product all read this monthly.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Demographic-only segmentation | Lead with behavior; demographic is descriptive context |
| Trying to make every segment happy | Pick the ICP; serve them disproportionately well |
| Creating personas without identifiability | If you cannot tag customers in your DB by segment, the segment is fiction |
| Static segmentation | Customers move between segments. Re-tag at least quarterly |
| Optimizing for power users only | Median user funds the company; build for them too |
| Calling marketing personas "ICP" | ICP is the *retained, profitable, advocate* customer — not the buyer journey persona |
| One landing page for all | At minimum, ICP gets a tailored hero. Test variants per segment |

---

## References

- "The Score Takes Care of Itself" / Bill Walsh on identifying superstars — applies directly to power-user thinking
- Eric Ries, *The Lean Startup* — cohort analysis as the truth-teller of product
- Brian Balfour's blog series on Product/Channel/Model Fit — segmentation as the foundation of acquisition
- Lenny Rachitsky's North Star metric framework — power-user segmentation made operational
- Sangram Vajre's *MOVE* — ABM-style segmentation for enterprise B2B
- Reichheld's *The Loyalty Effect* — value of loyal segments mathematically
- Dave McClure's "AARRR" pirate metrics — lifecycle segmentation made simple

---

## Cross-Skill Links

- **`customer-research`** — qualitative input that informs behavioral segmentation
- **`product-marketing-context`** — ICP feeds into the context document
- **`brand-voice`** — segment-specific messaging requires segment-specific voice variants
- **`paid-ads`** — audiences are built from segments
- **`email-sequence`** — lifecycle stage drives sequence selection
- **`churn-prevention`** — at-risk segment treatment
- **`pricing-strategy`** — packaging informed by value tiers
- **`revops`** — lead scoring is segmentation applied to leads
