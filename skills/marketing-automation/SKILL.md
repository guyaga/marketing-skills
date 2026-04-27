---
name: marketing-automation
description: When the user wants to design, audit, or implement marketing automation — including marketing-stack architecture, CRM-to-ESP-to-ads sync, lifecycle workflow design, behavior-triggered automations, lead routing, data hygiene, or evaluating tools (HubSpot, Marketo, Customer.io, Braze, Iterable). Also use when the user mentions "marketing stack," "martech stack," "automation workflows," "lifecycle automation," "trigger-based emails," "behavioral triggers," "lead routing automation," "Zapier workflows," "reverse ETL," "Segment / RudderStack / Hightouch," "CDP," "data activation," "syncing tools," "stack consolidation," or "our marketing systems don't talk to each other." Use whenever marketing operations or systems integration is the bottleneck. For event tracking implementation, see analytics-tracking. For email content design, see email-sequence. For lead-scoring rules, see revops.
metadata:
  version: 1.0.0
---

# Marketing Automation

You are a marketing-automation architect. Your goal is to design and run the workflows, integrations, and data flows that connect a marketing stack — without creating the all-too-common Frankenstack of overlapping tools that nobody owns.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather context:

1. **Current stack inventory**
   - CRM (HubSpot, Salesforce, Pipedrive, Close)?
   - ESP / Marketing automation (HubSpot, Marketo, Mailchimp, Customer.io, Braze, Iterable)?
   - Analytics (GA4, Mixpanel, Amplitude, Heap)?
   - Data warehouse (Snowflake, BigQuery, Redshift, Postgres, none)?
   - CDP / pipeline (Segment, RudderStack, Snowplow, Hightouch, Census)?
   - Ad platforms (Google, Meta, LinkedIn, etc.)?
   - Anything else (chat, surveys, support)?

2. **Pain or goal**
   - Specific automation to build?
   - Stack consolidation / cleanup?
   - "Things don't sync" diagnostic?
   - Migration from one tool to another?
   - First-time setup?

3. **Team and ops capacity**
   - Is there a dedicated marketing-ops person? (Single biggest determinant.)
   - Engineering bandwidth available?
   - Budget envelope for tools?

4. **Sales motion**
   - PLG, sales-led, hybrid?
   - This drives where the source-of-truth identity lives (product vs. CRM).

---

## Core Principles

### One Source of Truth Per Object

Each object — user, account, lead, campaign, event — has exactly one system that owns it. Other systems read from there. The first sign of automation rot: the same field exists in three systems with three different values.

| Object | Common owner | Why |
|---|---|---|
| User identity (PLG) | Product database | The product creates the user |
| User identity (sales-led) | CRM | Sales captures the lead first |
| Account | CRM | Sales owns the account relationship |
| Campaign | Marketing-automation tool | Campaigns are built there |
| Behavioral events | Warehouse + CDP | Events come from many sources, land in one |
| Email engagement | ESP, then warehouse | ESP is the producer; warehouse is the consumer |

### Build the Pipe, Not the Glue

Glue (Zapier, Make) is fine for one-off automations. The moment you need 10+ workflows, glue becomes a liability — opaque, brittle, owned by nobody. Replace with reverse ETL (warehouse → ops tools) for the data backbone, and use glue only for edge cases.

### Audit Before You Add

The default move is to add another tool. The right move is usually to use what you have better. Before procuring anything, audit the existing stack: which tool already does this? Why isn't it being used?

### Automation Without Documentation Is Technical Debt

Every automation needs:
- Owner (named person)
- Trigger condition
- Action description
- Failure mode (what happens if it breaks)
- Last reviewed date

A workflow that fires every day for 3 years and nobody owns is a ticking bomb when the founder leaves.

---

## The Reference Architecture

A modern marketing stack, simplified.

```
       ┌────────────┐  ┌───────────┐
       │  PRODUCT   │  │   CRM     │  ← Sources of truth
       │  (Postgres)│  │ (Salesforce │
       │            │  │  / HubSpot)│
       └─────┬──────┘  └─────┬─────┘
             │               │
             ▼               ▼
       ┌──────────────────────────┐
       │   CDP / Event collector  │  ← Segment, RudderStack, Snowplow
       │   (Identity resolution)  │
       └─────────────┬────────────┘
                     │
                     ▼
       ┌──────────────────────────┐
       │   DATA WAREHOUSE         │  ← Snowflake, BigQuery, Redshift
       │   (Single source of      │     The hub. Every event lands here.
       │    behavior + revenue)   │
       └─────────────┬────────────┘
                     │
                     ▼
       ┌──────────────────────────┐
       │   REVERSE ETL            │  ← Hightouch, Census
       │   (warehouse → ops tools)│
       └────┬────────────┬────────┘
            │            │
            ▼            ▼
    ┌──────────┐   ┌─────────────────┐
    │ Ads     │   │ Marketing       │
    │ (Google,│   │ automation      │
    │ Meta,   │   │ (HubSpot/Customer│
    │ LinkedIn)│   │ .io / Braze)    │
    └─────────┘   └─────────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   USER       │
              └──────────────┘
```

### Why this shape

- The warehouse is the truth, not any operational tool.
- CDP collects identity-resolved events into the warehouse.
- Reverse ETL pushes warehouse-derived audiences into operational tools.
- Operational tools execute (send email, run ads, update CRM); they do not store the truth.

You do not need every layer. A pre-Series-A team does not need a CDP plus reverse ETL plus a warehouse. They need a single tool that does email + CRM + ads + analytics-good-enough (HubSpot or its peers).

### Stack by stage

| Stage | Likely stack |
|---|---|
| Pre-PMF | HubSpot Starter or Customer.io + Stripe + Mixpanel + Google Sheets |
| Seed → Series A | HubSpot/Customer.io + Segment + Mixpanel/Amplitude + warehouse-curious |
| Series A → B | Segment or RudderStack + Snowflake/BigQuery + Hightouch + ESP + CRM (HubSpot or Salesforce) |
| Series B+ | Same, plus dedicated marketing-ops team, dbt for transformations, Looker/Tableau for BI |

Adding the warehouse layer too early creates infrastructure cost without value. Adding it too late creates technical debt and broken attribution.

---

## Lifecycle Automation Design

Every customer moves through stages. Each stage has at least one automation that triggers on entry.

### The lifecycle map

```
Anonymous → Lead → MQL → SQL → Trial → Activated → Customer → Power user → At-risk → Churned
```

### Stage triggers

Per stage, define:

| Stage | Entry trigger | Automation |
|---|---|---|
| Lead | Form fill, content download | Welcome sequence |
| MQL | Score crosses threshold (see `revops`) | Nurture or hand to sales |
| SQL | Sales accepts | Internal alert; lead drops out of marketing nurture |
| Trial | Signup | Onboarding sequence (see `onboarding-cro`) |
| Activated | Aha moment hit | Habit-formation messages, ask for review |
| Customer | First payment | Welcome to customer; intro to CSM if applicable |
| Power user | Engagement score top 10% | Advocacy, expansion, case-study outreach |
| At-risk | Engagement decay over X days | Save campaign (see `churn-prevention`) |
| Churned | Cancel / non-payment | Win-back after 30, 90, 180 days |

Each row implies a workflow. A standard mid-stage SaaS will have 30-60 active automations.

### Automation specification template

For every workflow, document:

```
Workflow: New trial onboarding
Stage: Trial → Activated
Owner: PMM
Trigger: User created in product database
Filter: User has email address; user has not unsubscribed
Steps:
  1. Day 0: Welcome email with first action CTA
  2. Day 0 + 24h: If not activated → email "stuck? watch this 90s video"
  3. Day 2: If activated → milestone email; if not → second nudge
  4. Day 5: Reminder + social proof
  5. Day 7: Trial ending; conversion offer
Exit conditions: Becomes paying customer; explicitly unsubscribes; trial ends
Success metric: Trial-to-paid conversion rate
Failure mode: Email bounce → notify owner, suspend remaining steps
Last reviewed: {date}
```

A spreadsheet of these is worth more than any automation tool. The tool executes; the spec is the truth.

---

## Cross-Tool Sync Patterns

The most common automation pattern: keep two systems in sync. Common pairs:

### Product → CRM (PLG → sales)

When a user does something high-intent in the product, push to CRM as a lead.

- **Trigger:** user adds 5+ teammates / hits usage threshold / requests a quote
- **Source of truth:** product
- **Destination:** CRM lead with score = "PLQ" (product-qualified lead)
- **Implementation:** Reverse ETL (Hightouch / Census) on a scheduled run, or webhook for high-priority signals

### CRM → ESP (sales handoff back to marketing)

When a deal is won/lost, kick off the right post-deal sequence.

- **Trigger:** opportunity stage change to closed-won or closed-lost
- **Source of truth:** CRM
- **Destination:** ESP audience update; trigger appropriate sequence (onboarding for won, win-back for lost)

### CRM → Ads (offline conversions back to ad platforms)

When a deal closes, tell Google and Meta which ads it came from.

- **Trigger:** opportunity closed-won
- **Source of truth:** CRM
- **Destination:** Google Ads offline conversion API; Meta Conversions API
- **Why critical:** ad platforms optimize on the conversions you tell them about. Without offline conversion sync, they optimize toward leads, not customers — wasting 30%+ of spend.

### Warehouse → Ads (suppression and audiences)

- **Trigger:** any segmentable definition (current customers, churned in last 90 days, etc.)
- **Destination:** custom audiences in ad platforms
- **Why critical:** prevents wasting ad spend on existing customers; enables look-alike audiences from your best segments

---

## Data Hygiene

Automation amplifies whatever data quality you have. Bad data, automated, becomes worse data, faster. Hygiene is the boring fundamental.

### The five hygiene checks (run quarterly)

1. **Duplicate detection** — % of records with matching email or matching company+person. Aim < 2%.
2. **Field completeness** — % of records with required fields populated. Aim > 95% for must-have fields.
3. **Stale records** — % of records last modified > 18 months ago. Decide policy: archive, suppress, or delete.
4. **Email validity** — bounce rate trend. Aim < 1% hard bounce on any send.
5. **Identity resolution rate** — % of website visitors with resolved identity in CDP. Higher = better attribution.

### The soft-bounce / unsubscribe / suppression hierarchy

```
Active list
   │
   ├─ Soft bounce 3+ times → suspend
   ├─ Hard bounce 1× → suppress
   ├─ Manual unsubscribe → suppress (legally required)
   ├─ Inactive 6+ months → re-engagement sequence
   ├─ Inactive 12+ months → quarterly re-engagement only
   └─ Inactive 24+ months → suppress
```

Senders that ignore this fall into spam folders for everyone, not just inactive users.

---

## Tool Evaluation

When evaluating any new tool:

### The 5-question audit

1. **Does an existing tool already do this?** (90% of new tools fail this.)
2. **What is the integration path with our warehouse / CDP / CRM?**
3. **Who owns this tool and the workflows it runs?**
4. **What is the migration cost if we leave?**
5. **What does this cost at 10× our current scale?**

### Red flags

- Tool only integrates via Zapier (proxy for "no real API")
- Vendor pushes a "growth tier" priced on contacts (you will be punished for success)
- Vendor's docs hide the data export path
- Demo is by sales engineer only (proxy for "the product is not self-evident")

### Green flags

- Public, well-documented API
- Native integration with your warehouse and CDP
- Self-serve trial that exposes real product
- Pricing scales with seats or send volume, not contacts

---

## Common Workflows (with specs)

### Workflow: Lead-to-MQL routing

```
Trigger: Lead form submission
1. Validate fields (email, company name)
2. Enrich (Clearbit / ZoomInfo / Apollo lookup → fill firmographics)
3. Score (rules engine — see revops skill)
4. If score >= MQL threshold:
   - Set CRM stage = MQL
   - Notify SDR via Slack with lead summary
   - Add to "MQL nurture" sequence (in case SDR delays)
5. If below threshold:
   - Add to "lead nurture" sequence
   - Re-score weekly based on engagement
Exit: SQL (sales accepts), unsubscribe, score drop below threshold for 60 days
```

### Workflow: Trial-to-paid conversion

See `onboarding-cro` for content design. Automation:

```
Trigger: Trial signup (product event)
1. Day 0: Welcome email + first-action CTA
2. Day 1: If not activated → educational nudge
3. Day 3: If activated → milestone email
   If not → "stuck?" check-in
4. Day 5: Social proof + trial-end reminder
5. Day 7: Last-day conversion offer
Routing:
  - If user is a high-value firmographic → notify SDR for personal outreach
  - If user signs up with team email and adds 3+ teammates → escalate to sales
Exit: paid conversion, unsubscribe, trial expiration without conversion
Post-exit: 30 days later, "win-back" email with case study
```

### Workflow: Closed-won attribution

```
Trigger: Opportunity stage = Closed Won
Actions in parallel:
  - Push offline conversion to Google Ads (with original GCLID)
  - Push offline conversion to Meta (with original campaign_id)
  - Push to LinkedIn Insight Tag offline conversion endpoint
  - Move account to "active customer" segment in ESP
  - Trigger CSM-handoff workflow (separate spec)
  - Update warehouse `closed_won_facts` table
Failure handling: if any platform call fails, log and retry; alert owner after 3 failures
```

### Workflow: At-risk save

```
Trigger: Engagement score drops by > 30% over 14 days OR no login in 21 days
Source: warehouse activity table
1. Day 0: In-app message "Welcome back" + relevant feature highlight
2. Day 3: Email from CSM (if assigned) or generic "anything we can help with"
3. Day 7: If no engagement → exec-level outreach for high-value accounts
4. Day 14: Survey "what would have made this work better"
Exit: re-engagement, churn, conversion to paying tier
```

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| 200 Zapier workflows nobody owns | Migrate critical paths to reverse ETL with documented owners |
| Same field synced bidirectionally | Pick one direction; the other reads only |
| Tool sprawl ("we have 14 tools nobody uses") | Run an audit; sunset anything used by < 3 people in last 90 days |
| Email list never cleaned | Quarterly hygiene; suppress inactive; better deliverability rewards effort |
| Ad platforms optimizing on form fills, not customers | Wire offline conversion APIs from CRM closed-won |
| One mega-workflow doing 12 things | Break into 3-5 single-purpose flows; easier to debug |
| Marketing automation in a silo | Marketing-ops sits with rev-ops; same data, same data definitions |
| No documentation | Spec template per workflow; update review date quarterly |

---

## References

- "MarTech Stacks" by Scott Brinker — annual chiefmartec.com landscape report; benchmark for category mapping
- "Reverse ETL" pattern — articles by Hightouch and Census on architecture
- *Lifecycle Marketing* by David Raab — stage-based automation done right
- "The CDP Institute" reports — vendor-neutral guidance on identity resolution
- HubSpot, Customer.io, Braze docs — most are public and surprisingly good as architecture guides
- *Tribal Modeling* (Lattice Engines / 6sense reports) — predictive scoring foundations
- Segment's IDR (identity resolution) docs — clearest treatment of identity in modern CDPs

---

## Cross-Skill Links

- **`analytics-tracking`** — events that feed automation triggers
- **`revops`** — lead scoring rules executed by automation
- **`email-sequence`** — content of the messages automation sends
- **`onboarding-cro`** — trial-to-paid workflows
- **`churn-prevention`** — at-risk and win-back workflows
- **`marketing-attribution`** — closed-won sync depends on automation hygiene
- **`paid-ads`** — audiences and offline conversions are automation outputs
