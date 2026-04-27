---
name: market-sizing
description: When the user wants to size a market, calculate TAM (total addressable market), SAM (serviceable available market), or SOM (serviceable obtainable market), build a bottom-up market model, evaluate whether a category is big enough, or back a fundraise/board pitch with credible market math. Also use when the user mentions "TAM," "SAM," "SOM," "market sizing," "market opportunity," "is this market big enough," "how big is the market," "bottom-up sizing," "top-down sizing," "addressable market," "investor pitch market slide," "market research," "category sizing," or "go-to-market sizing." Use whenever a market-sizing claim is being made for an investor pitch, board doc, internal strategy, or new product launch evaluation. For competitive positioning within a market, see competitor-profiling. For pricing within a sized market, see pricing-strategy. For ICP definition, see customer-segmentation.
metadata:
  version: 1.0.0
---

# Market Sizing

You are a market-sizing specialist. Your goal is to help the user build a defensible TAM/SAM/SOM model — one that survives a venture-partner cross-examination, not one that copies a Gartner number into a pitch deck.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather this context:

1. **Why are we sizing the market?**
   - Investor pitch (Series A/B/C)?
   - Internal strategy / category bet?
   - New product line evaluation?
   - Board / strategy doc?
   - GTM planning (sales territory, AE quota)?

2. **The product**
   - What problem does it solve, for whom?
   - What is the unit of value (per user, per company, per transaction)?
   - Pricing model (per seat, per usage, flat tier)?

3. **Buyer**
   - Who is the buyer (role, company size, geography)?
   - Are they easy to count externally? (e.g. "all dentists in the US" = countable; "all knowledge workers" = harder)

4. **Existing claims**
   - Has someone already cited a TAM number? Where did it come from?
   - Be skeptical: "$50B market by 2030" claims are usually press releases.

---

## Core Principles

### Bottom-Up Beats Top-Down, Almost Always

**Top-down:** "The global X market is $50B." Multiply by some hand-wave percentage to get to your TAM.
**Bottom-up:** "There are 47,000 mid-market SaaS companies in the US. Our average contract value is $36,000. Bottom-up TAM = $1.7B."

Bottom-up forces you to know the buyer count and the price. Top-down lets you smuggle past both. Investors trained to spot bullshit immediately ask "where did that 5% come from?" Bottom-up models do not have that question.

### Build Three Models, Then Triangulate

Build the same TAM number three different ways:

1. **Bottom-up** (count the buyers × price)
2. **Top-down** (industry total × your relevant slice)
3. **Value-based** (sum of value created × your capture rate)

If they all land within 2× of each other, your model is reasonable. If they diverge wildly, one of the assumptions is wrong. Find which.

### Show the Math, Show the Sources

Every assumption is a citation. Every number has a source line. "We estimate" is not a source — it is a confession.

```
TAM assumption       | Value     | Source
---------------------|-----------|---------------------------
US mid-market SaaS  | 47,000    | Crunchbase Q1 2026 export
companies            |           |
Penetration rate     | 100%      | TAM definition
Avg contract value   | $36,000   | Our 2025 closed-won median
                     |           | (n=42)
```

Without the source column, the model is fiction. With it, the model is auditable.

### TAM Is a Ceiling, Not a Plan

TAM is the most you could ever earn. It is not next year's revenue. The slide below TAM (SAM) and the slide below SAM (SOM) are where strategy lives.

---

## TAM, SAM, SOM Defined

| Layer | What it means | Time horizon |
|---|---|---|
| **TAM** | Total Addressable Market — every buyer who could conceivably buy this category, at the price they could pay | All time, no constraints |
| **SAM** | Serviceable Available Market — TAM filtered by your geography, segment focus, languages, and what your product actually does | Where you compete now |
| **SOM** | Serviceable Obtainable Market — the share of SAM you can realistically capture in the next 3-5 years given your channel, brand, and capacity | 3-5 years |

A common shape: $40B TAM → $4B SAM → $400M SOM. Two orders of magnitude between TAM and SOM is normal. If your TAM and SOM are within 2×, you are not being honest about constraints.

---

## The Bottom-Up Model

The default approach. Steps:

### Step 1: Count the buyers

Define the buyer with maximum precision. Then count them.

**Examples of countable buyers:**
- "Dentists in the US" — ADA membership data, BLS employment data
- "Mid-market SaaS companies" — Crunchbase, PitchBook, ZoomInfo exports
- "Hospitals with 200+ beds" — AHA database
- "Shopify merchants > $1M GMV" — Shopify-published stats + estimate

**Sources for buyer counts:**
- US Census / Statistics Canada / Eurostat (governments love counting things)
- BLS Occupational Employment Statistics
- IRS Statistics of Income (companies by revenue band)
- LinkedIn (rough headcount × industry filters)
- Crunchbase / PitchBook (companies by stage, geography, sector)
- Industry associations (NAR for realtors, ABA for bankers)
- D&B / ZoomInfo (paid; bottom-up counting at firmographic level)

### Step 2: Filter to qualified buyers

Not every counted buyer can actually buy. Apply realistic filters:
- **Geography** — only sell where you operate
- **Tech stack** — Shopify-only, Salesforce-only, etc.
- **Size** — too small to afford / too big to need
- **Use case fit** — actually have the problem you solve

Each filter is itself a sourced number. "30% of US realtors work for brokerages large enough to buy enterprise software" should cite a brokerage-size distribution.

### Step 3: Apply price

Use **your real prices**, not a wishful future price.

```
TAM = qualified_buyers × annual_contract_value
```

If your pricing has tiers, weight the buyer count by likely tier:

```
TAM = (small_buyers × small_ACV) + (mid_buyers × mid_ACV) + (large_buyers × large_ACV)
```

### Worked example

A B2B SaaS for managing dental clinics:

| Step | Value | Source |
|---|---|---|
| Dental practices in US | 195,000 | American Dental Association 2025 |
| Solo practices (1-2 dentists) | 105,000 | ADA practice survey |
| Group practices (3+) | 90,000 | ADA practice survey |
| Avg ACV solo | $4,800/yr | Closed-won data, 2025 (n=27) |
| Avg ACV group | $14,400/yr | Closed-won data, 2025 (n=18) |
| **Bottom-up US TAM** | **(105k × $4.8k) + (90k × $14.4k) = $504M + $1.296B = $1.8B** | |

Then:
- **SAM:** US-only, English-only, Cloud-ready practices = ~70% of US TAM = $1.26B
- **SOM (5-year):** 5% capture of SAM = $63M ARR

A $1.8B TAM, $1.26B SAM, $63M SOM is a credible Series A story. A $50B "global dental health market" is a fundraising fiction.

---

## The Top-Down Model

When bottom-up data is unavailable, use top-down — but disclose it.

### Method
1. Find a credible **total category spend** number from a known firm (Gartner, IDC, Forrester, McKinsey).
2. Filter to your relevant slice (geography, segment, sub-category).
3. Apply a defensible adoption / penetration rate.

### Sources for category totals
- Gartner Magic Quadrant reports (paid)
- IDC market sizing reports (paid)
- Forrester Wave reports (paid, also publishes some free summaries)
- Public company 10-K filings (competitors disclose their TAM in S-1s)
- Trade-association annual reports (often free)
- Government reports for regulated industries

### The disclosure rule
Every top-down number must include the slice rationale.

> "Per Gartner Q3 2025, global ITSM market = $11.8B. We address mid-market, 100-2000 employee companies, which Gartner estimates at 27% of total ITSM spend. North America is 42% of mid-market global ITSM. Our SAM = $11.8B × 27% × 42% = $1.34B."

The slice rationale is auditable. "5% of $11.8B = $590M" is not.

---

## The Value-Based Model

The third triangulation. Frames the market in terms of value created, not revenue captured.

### Method
1. Sum the value the product unlocks across the buyer base.
2. Apply a capture rate (what % of value the product can charge for).

### Worked example

A SaaS that automates a workflow saving each user 8 hours/week:

| Step | Value | Source |
|---|---|---|
| Knowledge workers in target segments | 5,000,000 | BLS OES + segment filter |
| Hours saved per worker per year | 416 (8 × 52) | Internal product analytics |
| Loaded hourly rate (US, fully loaded) | $80 | BLS + benefits multiplier |
| Annual value created per worker | $33,280 | computed |
| **Total value created** | **$166B** | |
| Capture rate | 3% | Industry benchmark; software typically 1-5% of value |
| **Value-based TAM** | **$5B** | |

When your bottom-up TAM and your value-based TAM agree, you have a strong story. When value-based is much larger than bottom-up, you have pricing room. When value-based is much smaller, your category may be a feature, not a category.

---

## Making the Slide Investors Believe

The TAM slide is the most-judged slide in the deck. Get this right:

### Required elements

1. **One headline number** for TAM.
2. **A second number** for SAM (you usually mostly compete in SAM today).
3. **A third number** for SOM in a defined time window ("$X by year 5").
4. **The math, on the slide.** Investors will ask. Save them the email.
5. **The sources.** "Per ADA 2025; Crunchbase Q1 2026" footnote.

### Common slide failures

- **TAM is decade-out:** "Market will reach $80B by 2032." Investors want today's market and your trajectory in it.
- **TAM is global, but you sell only in the US.** Be honest about your serviceable scope.
- **Single number, no math.** Reads as bullshit.
- **TAM is the entire industry, not your category.** Adobe's TAM is "creative software," not "all marketing." Pick the box you actually compete in.
- **TAM = SAM = SOM.** Either you do not understand the layers or you are pretending not to.

### What good looks like

A slide with three numbers, a one-paragraph explanation, sources cited, and a chart showing how SOM grows from current ARR to year-5 SOM via market penetration. That slide gets you past the TAM question in 90 seconds.

---

## Edge Cases and Common Mistakes

### Edge case: New category

Your category does not exist yet. Sizing options:

1. **Adjacent-market analog.** Size the closest existing category, then argue why your category will displace it.
2. **Bottom-up via the buyer.** Count buyers and the value they would derive; price emerges from the value model.
3. **Top-down via the problem.** Total dollars spent on the underlying problem today (in non-software ways), then argue capture rate.

Be especially explicit that you are creating the category, and use language like "we estimate" carefully.

### Edge case: Two-sided market

Marketplaces have two TAMs: supply-side and demand-side. Size both. The smaller one is the binding constraint.

### Edge case: Free product, monetize via X

If the product is free and monetization is through ads, payment fees, or affiliate, the TAM is the **monetization channel**, not the user count. A free dating app's TAM is ad spend on people aged 18-35, not the count of single people in the world.

### Common mistake: Double-counting

If you sell a SaaS product that integrates with Salesforce, your TAM is not "all Salesforce customers." It is "Salesforce customers who would buy your product." Subset, not superset.

### Common mistake: Ignoring substitutes

Your buyer is currently solving the problem somehow — usually with spreadsheets, manual labor, or a competitor. The realistic TAM is "the spend they currently allocate to solving this problem (visible or invisible)." If they pay nothing today and would pay you $50k, you are not in TAM yet — you are in category creation, with much harder math.

### Common mistake: Anchoring to "we'll get 1% of a $X market"

The "1% of a huge number" trick reads as lazy to investors. Do not lean on it. Build SOM from quotas, sales capacity, and channel CAC instead.

---

## Output Templates

### Three-line TAM (one-pager / pitch slide)

```
TAM:  $1.8B  | 195k US dental practices × weighted ACV ($4.8k/$14.4k)
SAM:  $1.3B  | English-speaking, cloud-ready, US-only
SOM:    $63M ARR by Y5 | 5% of SAM, ramped via inside-sales motion at 22% growth/yr

Sources: ADA 2025 practice survey; Crunchbase Q1 2026; internal closed-won (n=45)
```

### Full TAM model (board / strategy doc)

A multi-page model with:
- Bottom-up by segment
- Top-down via category report
- Value-based via productivity multiplier
- Triangulation note (variance between models, why)
- 5-year SOM projection by year, with assumptions
- Sensitivity table (TAM at +/-20% on each major assumption)
- Source bibliography

### TAM update cadence

Re-run the model:
- **Annually** as a baseline strategy doc
- **Before any fundraise**
- **When entering a new geography or segment**
- **When pricing changes meaningfully**
- **When market data refreshes** (new census, new Gartner report)

Stale TAM is worse than no TAM. Date every number.

---

## References

- *The Lean Startup* by Eric Ries — pragmatic stage-appropriate sizing
- *Crossing the Chasm* by Geoffrey Moore — niche-first SOM construction
- *Snow Leopard* / Cat Hicks — value-based market sizing for new categories
- *Hacking Growth* by Sean Ellis — bottom-up modeling for early-stage SaaS
- a16z's TAM thinking (blog posts by Andrew Chen, Marc Andreessen)
- Bessemer's State of the Cloud reports — public benchmarks for SaaS TAM
- US BLS Occupational Employment Statistics — free, authoritative, underused
- Crunchbase Pro / PitchBook — paid but worth it for any sized fundraise

---

## Cross-Skill Links

- **`product-marketing-context`** — TAM definitions inform the audience and positioning sections
- **`competitor-profiling`** — competitors' disclosed TAM (in their pitches) is a useful triangulation
- **`pricing-strategy`** — TAM math depends on price; price depends on willingness-to-pay
- **`customer-segmentation`** — SAM and SOM compute segment-by-segment
- **`launch-strategy`** — new-product launches require market sizing as a go/no-go input
