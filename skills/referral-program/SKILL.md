---
name: referral-program
description: When the user wants to design, launch, audit, or scale a referral program, affiliate program, or word-of-mouth growth loop. Also use when the user mentions "referral program," "affiliate program," "ambassador program," "word of mouth," "viral loop," "viral coefficient," "k-factor," "refer a friend," "double-sided incentive," "Dropbox referral," "Tesla referrals," "Morning Brew referral," "PayPal referrals," "Friendbuy," "Refersion," "growth loop," or "we want users to bring more users." Use when the user is treating user-driven acquisition as a serious channel. For broader growth-loop strategy, see growth-engineering and content-distribution. For pre-launch viral mechanics, see launch-strategy.
metadata:
  version: 2.0.0
---

# Referral Program

You are a referral-program operator. Your goal is to help the user design and launch a program that brings in new customers at lower CAC than paid channels — and to be honest about whether their product is even ready for one.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions.

Gather context:

1. **Program type** — Customer referral (existing users referring peers), affiliate (creators / publishers earning commission), or both?
2. **Volume and economics** — How many active customers? Average LTV? CAC from other channels (the benchmark to beat)?
3. **Product readiness** — Does word-of-mouth already happen organically? Do users tell their friends without prompting?
4. **Resources** — Tools (Friendbuy, Refersion, Viral Loops, GrowSurf), incentive budget, fraud-detection capacity?

The single biggest pre-flight check: **does word-of-mouth already exist?** Per Lenny Rachitsky's analysis of Airbnb's host-referrals program, "referral programs only work where word-of-mouth already exists. They are fuel on existing fire — they cannot manufacture fire."

If your retention is broken or NPS is mediocre, fix that first. A referral program with bad retention is a megaphone for churn.

---

## Core Principles

### Treat It Like Paid Marketing

Per Dan Hockenmaier (ex-Faire/Thumbtack/Reforge) — a referral program with a finite incentive budget behaves like **paid marketing with a payback period**, not free virality. Model it like CAC and LTV:

- Incentive cost per acquired customer = your effective CAC
- Compare to paid CAC; if higher, the program has a problem
- Compare LTV of referred vs paid customers — referred is usually higher (homophily, better fit)

This framing keeps you honest. A referral program is a **lever** you control (incentive size), not magic.

### k-Factor Without Retention Is Vanity

Per Andrew Chen's foundational essay on viral coefficient:

```
k = i × c
```

Where:
- `i` = invites sent per user
- `c` = invite-to-activated-user conversion rate

**k > 1** means each cohort produces more new users than itself — exponential growth. **k = 0.5** means each cohort dies out. Most referral programs run at **k = 0.15-0.5**. True virality (k > 1) is rare outside category-defining products.

Cycle time matters more than k-factor magnitude — halving cycle time roughly squares user count over the same calendar window. But: **k-factor without retention is meaningless.** A leaky bucket means high k still nets zero. Track k by cohort, not aggregate.

### Double-Sided Beats Single-Sided

Per a 2,000-merchant Shopify dataset:
- Single-sided programs: 5-8% participation rate
- Double-sided programs: 12-18% participation rate
- Double-sided drives 2.3× more shares and 1.8× higher conversion

Why: people feel mercenary asking friends to a single-sided program ("I get $20 if you sign up"). Double-sided removes the social cost ("we both get $20 — try it").

**78% of brands now use double-sided rewards** (industry consensus 2024-25).

### Referred Users Are Better Customers

Per the 2018 academic paper by Van den Bulte, Bayer, Skiera, and Schmitt (Wharton, *Journal of Marketing Research*) studying a German bank referral program:
- Referred customers have **higher LTV and lower churn** than non-referred
- Drivers: **homophily** (similar profiles) and **better-match selection**
- Reward magnitude matters less than relationship strength

Per GrowSurf / SaaSquatch on Dropbox: referred users had **18% higher retention** and **25% higher spend** than baseline.

This means CAC math should weight referred LTV higher. They are not just cheaper customers; they are better ones.

---

## The k-Factor / Viral Math

```
k = i × c
new_users(period_n) = users(period_n-1) × k
total_growth = users_initial × (1 + k)^periods   [if 1 cycle per period]
```

| k | Behavior |
|---|---|
| > 1 | Exponential, sustained viral growth (rare) |
| 0.5 | Halves with each cycle (typical referral program) |
| 0.15-0.3 | Most referral programs in market |
| 0 | No virality; pure paid acquisition |

**Track these metrics monthly:**
- k by cohort (cohort retention is the leaky bucket)
- Cycle time (referral submission to referee activation)
- Participation rate (% of eligible users who refer)
- Conversion rate (% of referrals that activate)
- Time decay (k drops as the addressable graph saturates)

---

## Eight Case Studies (Named, with Numbers)

### 1. PayPal (1999-2002) — Cash, both sides
- **Mechanic:** $20 → $10 → $5 each side; double-sided cash credit applied directly to PayPal account
- **Result:** 10%/day growth; 1M to 5M users in 6 months
- **Spend:** $60M total
- **Why it worked:** the reward was *directly usable inside the product itself*. Account credit had near-zero perceived friction
- **Lesson:** if your product can absorb the incentive (account credit, in-app currency), do that. Cash that has to be cashed out is friction.

### 2. Dropbox (2008-2010) — Storage, both sides
- **Mechanic:** 500MB free per side, capped at 16GB. Single-sided pre-2010 with poor results; double-sided launch transformed it
- **Result:** +60% permanent signup lift; 3,900% growth in 15 months; 2.8M referral invites in 18 months; 35% of daily signups from referrals
- **Why it worked:** the reward *was the product*. Zero marginal cost storage that **increased engagement** (more storage → more usage → more sharing)
- **Lesson:** rewards that increase engagement compound. Cash rewards do not.

### 3. Tesla (2015-2017) — Status / exclusivity
- **Mechanic:** Exclusivity rewards (Powerwall, Founders Series Model X, future Roadster); no cash
- **Result:** Drove 25% of Q4 2015 sales; 42× ROI on program spend. Bjørn Nyland won twice with 51+ referrals
- **Why it worked early:** community of evangelists; aspirational product where status was the right currency
- **Why it died (2019):** unsustainable at price-elastic scale; got abused
- **Lesson:** status rewards work for aspirational products. They scale until they don't.

### 4. Robinhood (2014-2015) — Free stock + waitlist position
- **Mechanic:** Pre-launch waitlist with position-based rewards (early access); post-launch random free stock both sides
- **Result:** 1M waitlist signups pre-launch; ~3 referrals per user; 53% lower CAC vs paid
- **Why it worked:** the reward *gambled* — randomness made it more shareable than a fixed value
- **Lesson:** lottery-style rewards generate share intent above their EV.

### 5. Morning Brew (2017-2019) — Tiered swag + premium content
- **Mechanic:** Tiered milestones (stickers @ 5 referrals, mug @ 10, t-shirt @ 25, premium newsletter @ 1000)
- **Result:** 30% of growth from referrals (80% in early days); $0.25 referral CPA vs. $3-5 paid; SMS/WhatsApp shares converted 10× LinkedIn, 5× Twitter, 2× Facebook
- **Why it worked:** newsletter content has zero marginal cost; tiered rewards created status ladders
- **Anti-fraud:** 600+ blocked email domains; 85% double-opt-in conversion
- **Lesson:** tiered rewards create a sense of progress. Channel choice (SMS) matters more than people think.

### 6. Casper (Friendbuy) — Cash credits, both sides
- **Mechanic:** Cash credits both sides
- **Result:** 7× ROI vs average marketing channel; +13% conversion via A/B testing
- **Lesson:** for high-AOV ecommerce, cash works. The category and price point determine reward type.

### 7. SPANX (Friendbuy)
- **Result:** 15% conversion rate on referred customers; +8% AOV vs baseline
- **Lesson:** referred customers spend more.

### 8. Tonal (Friendbuy)
- **Result:** 5× conversion rate vs other channels; 7% of monthly revenue from referrals
- **Lesson:** referrals can be a top-3 channel for premium hardware/lifestyle products with passionate users.

---

## Incentive Design

### Reward Type by Category

| Category | Best reward type | Why |
|---|---|---|
| SaaS with usage-based unlock | Product credit / extra storage / premium tier (Dropbox, Morning Brew) | Near-zero marginal cost; increases engagement |
| Ecommerce / DTC | Account credit, gift card, % off | Cash equivalent, low friction |
| Financial / fintech | Cash, free stock (PayPal, Robinhood) | Trust + product-relevant currency |
| Premium / aspirational | Status, exclusivity, early access (Tesla) | Aspirational buyers want signaling, not money |
| Newsletter / content | Tiered swag, premium content (Morning Brew) | Zero-marginal-cost rewards + status ladder |
| Apps / consumer | Free month, free upgrade, exclusive content | Removes friction to redeem |

### Reward Magnitude

PayPal's data is the most-cited:
- $20 each side: explosive growth
- $10 each side: maintained growth
- $5 each side: did not move the needle

Diminishing returns curve is real. Test 3 reward levels ($X, 2X, 4X) and find the floor where participation drops.

**Reward-product congruence** (Frontiers in Psychology, 2021): rewards aligned with the product (free yoga class for yoga app) outperform generic cash for self-relevant products.

### Single vs Double-Sided

| | Single-sided | Double-sided |
|---|---|---|
| Participation rate | 5-8% | 12-18% |
| Shares sent | 1× baseline | 2.3× |
| Conversion rate | 1× baseline | 1.8× |
| Industry usage 2024 | ~22% | ~78% |

**Default to double-sided** unless your product economics make it impossible.

### Gift Cards Beat Cash Psychologically

Per industry data (incentive market research): non-cash rewards (gift cards, swag) feel like a gift, not transactional payment. **Gift cards are 43% of all non-cash incentives in North America.** For B2C and prosumer programs, test gift card variants alongside cash.

---

## Anti-Fraud and Attribution

### Common Fraud Patterns

| Pattern | How it works |
|---|---|
| Self-referral via second email | Most common; user creates a second account to claim referral reward |
| Account cycling | Create → redeem → delete → repeat |
| IP / device clustering | Many "users" from one device, one IP, one VPN |
| Coupon/affiliate hijacking | Last-touch toolbar (Honey, Rakuten) hijacks credit at checkout |
| Disposable inboxes | Throwaway email services to register fake accounts |
| Velocity abuse | Single referrer producing 20+/day or 100+/month |

### Detection Stack

- **Device fingerprinting** + IP clustering + VPN detection
- **Velocity rules** — signups/day per referrer, redemptions/hour caps
- **Email-domain blacklist** — Morning Brew used 600+ disposable domains
- **Double opt-in (DOI)** — Morning Brew got 85% conversion post-DOI; cuts fraud dramatically
- **Manual review threshold** for top earners (anyone above 95th percentile)
- **Reward release on activity threshold** — hold reward until referee meets a "real activity" bar (purchase, paid trial, 7-day retention) — not just signup

### Attribution Rules

- **Last-touch:** standard for referral programs (rewards the closer); vulnerable to coupon-site hijacking
- **First-touch:** rewards discovery (better for content creators, SEO partners); used by some affiliate platforms
- **Cookie window:** default 30-60 days (Refersion default 60); shorter is more conservative

**Best practice for hybrid programs:** first-touch for content creators, last-touch for direct user-to-user referrals, with explicit non-overlap rules per channel.

---

## Network Effects vs Viral Loops vs Referral Programs

These get conflated constantly. The distinctions matter (per NFX, Andrew Chen, Brian Balfour):

| Concept | What it is | Example |
|---|---|---|
| **Network effect** | Each new user makes the *product more valuable* for existing users | Facebook social graph; marketplace liquidity. Defensibility property. |
| **Viral loop** | Each user produces N new users via a product-embedded mechanism | WhatsApp invites, Hotmail signature. About *acquisition*, not value. |
| **Referral program** | A structured, *incentivized* viral loop layered on top of an existing product | Dropbox, PayPal. Sub-type of viral acquisition loop. |

A product can have viral acquisition without network effects (early Hotmail) or network effects without virality (early LinkedIn). The best companies have both.

Per Hockenmaier: a referral program with finite incentive budget behaves like *paid marketing* with payback periods, not pure virality. Model accordingly.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Launching before product-market fit / word-of-mouth | Fix the product first; referral programs amplify love, not manufacture it |
| Single-sided rewards | Use double-sided unless economics forbid |
| Burying the program (footer, account page) | Trigger at peak satisfaction (post-purchase, post-AHA moment) |
| Reward mismatched to lead value | $25 for a $10K-LTV B2B lead is insulting; $100 for a $30 ecommerce purchase invites fraud |
| No follow-up loop with the referrer | Send "your friend joined" emails — closes the loop and drives repeat referrals |
| Treat as set-and-forget marketing | Morning Brew, Casper iterate continuously; one-off launches die |
| Optimize k-factor while ignoring retention | High k + leaky bucket = burning cash. Retention drives sharing |
| No fraud controls at launch | Programs get gamed within days; build velocity rules + DOI before scaling |
| Conflate referral with affiliate | Different incentives, audiences, attribution rules |

---

## Implementation Checklist

### Pre-launch
- [ ] NPS or word-of-mouth signal exists (organic referrals happening today)
- [ ] CAC and LTV from other channels documented (the benchmark to beat)
- [ ] Reward type and magnitude tested or modeled
- [ ] Double-sided economics verified
- [ ] Anti-fraud rules in place (velocity, DOI, blacklist, manual review threshold)
- [ ] Attribution rules documented (last-touch vs first-touch, cookie window)

### Launch
- [ ] Program placed at peak-satisfaction trigger (not buried)
- [ ] Default share copy written for SMS, email, LinkedIn, Twitter
- [ ] "Your friend joined" loop email automated
- [ ] Tracking dashboard live (k by cohort, cycle time, participation, conversion)
- [ ] First 100 referrals manually reviewed for fraud patterns

### Post-launch (ongoing)
- [ ] Monthly cohort review: is k holding or decaying?
- [ ] A/B test reward magnitude every 6 months
- [ ] Top 5% earners manually verified
- [ ] Quarterly retention check on referred vs non-referred users

---

## Tooling

| Tool | Use case | Cost |
|---|---|---|
| **Friendbuy** | Mid-market ecommerce / DTC | $$$ |
| **Refersion** | Affiliate-heavy, ecommerce | $$ |
| **Viral Loops** | Pre-launch waitlists + referrals | $ |
| **GrowSurf** | SaaS / B2B referral, integrated with HubSpot | $$ |
| **SaaSquatch** | Enterprise B2B referral | $$$ |
| **PartnerStack** | Multi-program (referral + affiliate + reseller) | $$$ |
| **Rewardful** | Stripe-native, simple affiliate | $ |

For a first program: **GrowSurf** (B2B SaaS) or **Friendbuy** (DTC ecommerce). Build later if scale justifies.

---

## References

- [Andrew Chen — Viral coefficient: what it does and does NOT measure](https://andrewchen.com/viral-coefficient-what-it-does-and-does-not-measure/) — k-factor math + retention warnings
- [Lenny Rachitsky — Building a Referrals Program](https://www.lennysnewsletter.com/p/this-week-16-building-a-referrals) — Airbnb host-referrals deep dive; <10% conversion benchmark
- [Reforge — Growth Loops are the New Funnels](https://www.reforge.com/blog/growth-loops) — Brian Balfour / Casey Winters on loops vs funnels
- Van den Bulte et al — *How Customer Referral Programs Turn Social Capital into Economic Capital* (Wharton, JMR 2018, [PDF](https://faculty.wharton.upenn.edu/wp-content/uploads/2017/07/VdB-et-al.-JMR-2018.pdf)) — academic backing for "referred users are higher quality"
- [Dan Hockenmaier — Why Growth Models Fail](https://www.danhock.co/p/why-growth-models-fail) — referrals as paid marketing, not free virality
- [NFX — Viral Effects vs Network Effects](https://www.nfx.com/post/viral-effects-vs-network-effects) — anti-conflation reference
- [GrowSurf — Dropbox Referral Case](https://growsurf.com/blog/dropbox-referral-program) — 3,900% growth, the canonical case
- [Morning Brew Referral Teardown (Tyler Denk)](https://medium.com/the-mission/how-morning-brews-referral-program-built-an-audience-of-1-5-million-subscribers-3315482c1aa5) — 30% of growth, $0.25 CPA, fraud detection
- [Friendbuy customer case studies](https://www.friendbuy.com/customers) — Casper, SPANX, Tonal, Natural Life, real ROIs

### Books worth reading

- *The Cold Start Problem* by Andrew Chen — viral loops at scale, network effects vs virality
- *Viral Loop* by Adam Penenberg — pre-iPhone-era viral history; foundational thinking
- *Hooked* by Nir Eyal — adjacent: the engagement habits that make referrals natural
- *Hacking Growth* by Sean Ellis — pragmatic referral programs in the SaaS era

### Note on sources

Reforge's full Growth Loops course content is paywalled — only the public blog post is fully accessible. Lenny Rachitsky's premium teardowns are paywalled (Substack paid tier); the public versions are above. Andrew Chen's *Cold Start Problem* book has additional depth not in his blog. Specific incentive A/B test result tables from Friendbuy and Refersion clients are summarized in case studies but raw test data is private.

---

## Cross-Skill Links

- **`launch-strategy`** — pre-launch waitlist + referral mechanics
- **`growth-engineering`** — referral programs are one type of growth loop; this skill plus that one cover the discipline
- **`marketing-automation`** — the technical wiring (CRM events, reward distribution) lives in automation
- **`onboarding-cro`** — referral prompt placement at the aha moment is an onboarding decision
- **`churn-prevention`** — referred users have higher retention; track separately
- **`marketing-attribution`** — referral attribution rules feed into multi-touch model
