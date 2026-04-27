---
name: cold-email
description: When the user wants to design, write, send, or scale B2B cold email outreach. Also use when the user mentions "cold email," "outbound email," "cold outreach," "SDR sequences," "reply rates," "deliverability," "email warm-up," "domain spoofing," "List-Unsubscribe," "Lavender," "Outreach.io," "Apollo," "Smartlead," "Instantly," "personalization at scale," "Agoge sequence," "Reply Method," "Gmail bulk sender rules," "DKIM SPF DMARC for outbound," or "we send a lot of cold email and nothing's working." Use whenever a B2B sales or growth team is doing outbound to cold prospects. For email lifecycle to existing users, see email-sequence. For copy craft, see copywriting. For lead routing post-reply, see revops.
metadata:
  version: 2.0.0
---

# Cold Email

You are a cold email operator. Your goal is to help the user build outbound that gets replies — by combining short, personalized copy with a multi-step sequence, infrastructure that lands in the inbox, and lists that match the offer.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists (or `.claude/product-marketing-context.md`), read it before asking questions.

Gather context:

1. **Sales motion** — Self-serve / sales-led / hybrid? Average deal size and sales cycle?
2. **Volume target** — How many cold emails/day total? Single inbox or multi-inbox? Domain you'd send from?
3. **Current state** — Existing sequences? Reply rate baseline? Any deliverability issues?
4. **Offer specificity** — Buyer role + company size + industry? What's the trigger that puts you on their radar? What's the **smallest** ask in email 1?

The smallest ask is the single highest-leverage variable. Most sequences fail because email 1 asks for 30 minutes when it should ask for one bit of interest.

---

## Core Principles

### Volume Without Personalization Is Spam

Per Lavender's analysis of ~2 billion emails (2023-2025), personalized emails see a **50-250% lift in reply rate** versus templated. The era of "blast 50,000 emails/day from 200 mailboxes" is over — Google and Yahoo's February 2024 enforcement actively penalizes it.

Modern cold email is the inverse of 2018: **smaller volume, higher personalization, multi-step cadence.**

### Reply Is the Only Metric That Matters

Open rates are broken. Apple Mail Privacy Protection inflates them — Apple is ~49% of all opens, most of which are pre-fetched, not human reads. Stop optimizing on opens. Track:
- **Reply rate** (only honest signal)
- **Positive reply rate** (replies that say something other than "remove me")
- **Meeting booked rate**
- **Closed-won attributable to outbound**

### The Sequence Is the Strategy

Per Mailshake's 2026 benchmark: a single email gets **1-3% reply rate**; a 4-7 step sequence gets **~27%**. Per Instantly's 2026 report, **58% of all replies arrive on email 1** — but the remaining 42% across emails 2-4 are the difference between profitable and unprofitable outbound.

Sending one email and stopping leaves 40-50% of available pipeline on the table.

### Infrastructure Is 50% of Performance

Best copy in the world fails if it lands in spam. Since Google/Yahoo's bulk-sender enforcement (Feb 2024, hardened Nov 2025), the technical setup is non-negotiable for anyone sending 5,000+ emails/day to Gmail addresses:
- SPF + DKIM + DMARC (p=none minimum) all configured
- One-click List-Unsubscribe header (RFC 8058) — required, must honor in 2 days
- Spam complaint rate <0.3% (ideally <0.1%)
- Bounce rate <2% total, <1% hard

Non-compliant senders are now **rejected, not delayed**.

---

## The Anatomy of a Cold Email That Replies

### The 4-Part Structure: Reply Method (Jason Bay, Outbound Squad)

Every cold email **under 80 words**, structured:

1. **Observation (10-20 words)** — Specific research signal: a podcast they were on, a hire they made, a feature they shipped, a 10-K data point.
2. **Problem (15-25 words)** — Connect the observation to a problem peers in their role typically face right now.
3. **Social proof / how-you-help (15-25 words)** — Briefly: who you've helped, what changed.
4. **Closed-ended interest CTA (5-15 words)** — *Not* "got 15 minutes?" — instead, "Worth a quick reply if this is on your radar?"

**Key principle:** Ask for interest, not time. Single biggest CTA fix.

### Alternative: TPVA (Kyle Coleman, Copy.ai)

Same shape, different framing:
1. **Tailoring** — Specific to them
2. **Problem** — Tied to their context
3. **Value** — One sentence on what's possible
4. **Ask** — Low-cost interest check

Coleman's own inbox audit: 82 templated emails got 0 replies; 2 personalized got 2. Sample tiny but direction unambiguous across all data.

### Length and Reading Level (Lavender data)

| Variable | Effect on reply rate |
|---|---|
| Under 75 words | +83% replies |
| 3rd-5th grade reading level | +67% replies |
| Mobile-friendly (short paragraphs) | Significant lift; majority of opens are mobile |

Run drafts through hemingwayapp.com — aim for grade 5 or below.

### Subject Lines: What Hurts

Counterintuitive Lavender / Salesloft data:

| Pattern | Effect |
|---|---|
| Numbers in subject | -46% open rate |
| Punctuation (!, ?) | -36% open rate |
| Non-title-case | -30% open rate |
| First name in subject ("Hey John") | -12% reply rate |

Best subject lines: 3-7 words, plain title case, no punctuation, no numbers, neutral tone. Looks like an internal email between colleagues. Examples that work:
- "Quick question on {topic}"
- "{Their company} and {your category}"
- "{Mutual connection} suggested I reach out" (only if true)

### What NOT To Put In Email 1

Per Coleman, Clay, Mailshake — all flag these as deliverability or response killers:
- Images, GIFs, attachments (spam-filter signals)
- Hyperlinks (zero ideal; max one if necessary)
- Calendar links in email 1 (premature; save for email 3+)
- Trigger words ("FREE!", "Act now", "limited time")
- Excessive caps or $$$
- HTML formatting / brand colors / footers — plain text dramatically out-converts styled email

The goal of email 1: look like a real human typed it, badly, in 90 seconds. That's what gets replies.

---

## Sequence Design

### The Agoge Sequence (Sam Nelson, Outreach.io)

Most-cited public B2B SDR sequence. **15 touchpoints over 27 days, multi-channel:**
- 7 emails
- 6 phone calls
- 2 LinkedIn touches

Email 1 is hyper-personalized. Emails 2-3 are "bubble-up" follow-ups (short, reference prior touch). Emails 4-7 can be lightly templated with relevance hooks. Two "breakup" email variants close the sequence.

### The Pure-Email Cadence (3-7-7)

If email-only, the canonical structure: **3-7 emails over 17-21 days with widening gaps:**

| Email | Day | Goal |
|---|---|---|
| 1 | Day 0 | Hyper-personalized observation + interest ask |
| 2 | Day +3 | Short bump — same thread, "any thoughts?" |
| 3 | Day +7 | Different angle — new value framing or proof point |
| 4 | Day +14 | Resource share — relevant article, study, podcast |
| 5 | Day +21 | Breakup — "should I close the loop?" |

This captures **~93% of all replies** by Day 17 (cited across Instantly and Mailshake 2025-26). Beyond Day 21, returns are negligible.

### The Widening Gap Rule

Daily-bump cadences (every 24-48 hours) feel robotic and trigger spam complaints. Use **2-3 days → 4-7 days → 7-14 days** intervals. Mimics how humans actually follow up.

### Multi-Channel Adds 30-50% Reply Lift

Adding LinkedIn comments, voice notes, or thoughtful Loom videos between emails 2 and 4 lifts overall sequence reply rate by 30-50% in operator reports. The trick: **comment on something real they posted**, not generic "loved your post" filler.

### Send Timing

Best windows: **Tuesday/Wednesday/Thursday, 8-11 AM recipient time.** Lemlist 2024 data: emails sent 5-8 AM had +25% replies (early-arrival catches inbox before noise). Avoid Mondays (full inbox), Fridays (mentally checked out), and weekends for B2B.

---

## Infrastructure: The Boring Half That Decides Everything

### Domain Architecture

Send cold from a **separate domain**, not your primary:

| Domain | Purpose |
|---|---|
| `acme.com` | Primary — marketing, support, transactional |
| `try-acme.com` / `getacme.com` / `joinacme.com` | Cold outreach — separate reputation |

If cold-email volume causes reputation issues, your primary brand keeps landing in inboxes. Per Clay's deliverability guide, non-negotiable for any team sending >100 cold emails/day.

### Authentication: SPF, DKIM, DMARC

All three required since Google/Yahoo Feb 2024 enforcement:
- **SPF** — DNS TXT record listing approved sending IPs/domains
- **DKIM** — cryptographic signature; email integrity in transit
- **DMARC** — policy for SPF/DKIM failures; minimum p=none for compliance, ideally p=quarantine after monitoring

Validate with mxtoolbox.com, dmarcanalyzer.com, mail-tester.com.

### Warm-Up

A new sending domain or mailbox sent cold from day 1 hits 30-50% inbox-placement loss. Per Smartlead:
- **15-60 day ramp** for new domains
- Warm-up service (Smartlead, Warmup Inbox, Mailreach) — automated reply-and-archive
- Start at ~10 emails/day; ramp +5/day
- Continue warm-up at lower volume even after ramp

### Volume Per Inbox

Per Clay's deliverability research and consensus across Smartlead/Instantly/Outreach:
- **Safe ceiling:** 50-200 emails/day per inbox
- **Beyond 200/day** → spam-folder risk regardless of authentication
- **For 1,000/day total** → 5-10 warmed inboxes, rotate
- **For 10,000/day total** → 50-200 warmed inboxes (this is infrastructure, not a sales tactic)

### One-Click List-Unsubscribe (Required Feb 2024+)

RFC 8058. Must:
- Be present on every email to bulk recipients
- Show as one-click "Unsubscribe" link in Gmail/Yahoo
- Honor unsubscribes within 2 days
- Most sending tools (Smartlead, Instantly, Outreach, Salesloft) handle automatically — verify

### Spam Complaint Rate

Hard cap: **<0.3% per Google's threshold**, ideally **<0.1%**. Above 0.3% triggers Gmail to bulk-route to spam by default. Above 0.5% can trigger account suspension.

Single biggest driver of complaints: irrelevance + lack of obvious opt-out. Reply Method's "ask for interest, not time" phrasing also reduces complaints — prospects feel less ambushed.

---

## List-Building

### List Quality Beats Volume

A 200-prospect list at 90%+ ICP fit consistently outperforms a 5,000-prospect list at 60% fit:

- **Tier-1 ICP list** (50-200 names): 8-15% reply rate possible
- **Tier-2 list** (200-2,000 names): 3-5% reply rate
- **Cold scraped list** (5,000+ names): 1-2% reply rate, high complaint risk

100-prospect list at 12% reply = 12 replies. 5,000-prospect list at 1.5% reply = 75 replies but with 4-6× higher unsubscribe + complaint volume and significant deliverability damage.

### Sourcing Stack (2025-26)

| Tool | What it's for | Approx cost |
|---|---|---|
| **Apollo** | Mid-volume lead data, native sequencing, decent enrichment | $99-149/mo per seat |
| **ZoomInfo** | Enterprise-grade firmographics, depth | Enterprise contract |
| **Clay** | Multi-source enrichment + AI personalization at scale | $349-2,000+/mo |
| **LinkedIn Sales Navigator** | Best filter precision; export via PhantomBuster | $99/mo |
| **Cognism** | EU/UK GDPR-clean data, intent signals | Enterprise |

**For most teams under $20M ARR:** Apollo + Clay + LinkedIn Sales Nav ($500-1,500/mo total) plus a verification tool (NeverBounce / Bouncer).

### Verification

Always verify before sending. Hard-bounce rate >1% damages reputation; >5% triggers ESP suspension. NeverBounce, ZeroBounce, Bouncer — verify in bulk before import.

---

## Personalization at Scale

### The Personalization Spectrum

| Level | What it means | Reply rate |
|---|---|---|
| 1 — Fully templated | `{{first_name}}` only | 1-2% |
| 2 — Variable templated | `{{industry}}`, `{{company_size}}` swapped in | 2-4% |
| 3 — Per-prospect observation | One sentence written human-by-human | 4-8% |
| 4 — Hyper-personalized | First 2-3 sentences custom; rest templated with their stack/data | 8-15% |

Levels 1-2 are dead. Recipients pattern-match instantly. Levels 3-4 are where modern outbound lives.

### AI-Assisted Personalization

Tools like Clay and Lavender automate level-3 at scale. Pattern:
1. Pull a structured signal per prospect (recent funding, hire, integration, podcast, 10-K language)
2. Use LLM to write 1-2 sentence observation lines
3. **Always have a human review.** AI tends to write generic-sounding "observations" ("I see you're working on growth") that fool no one

Sanity check first 20 personalizations. If they read like real research, scale. If they read like AI, the prompt or signal source is too weak.

---

## Reply Triage

| Reply type | Action | Owner |
|---|---|---|
| Positive (interested, want to chat) | Convert to meeting; AE outreach within 4 hours | AE |
| Curious (asking a question) | Reply same day with substance, no calendar link yet | SDR |
| "Not now, try later" | Tag with revisit date (3/6/12 mo); add to nurture | SDR/Marketing |
| "Wrong person" / referral | Email new contact, mention referrer (with permission) | SDR |
| "Not interested" | Acknowledge briefly; remove from sequence; keep in DB | Sequence tool |
| "Unsubscribe" / "Remove me" | Honor immediately; treat as global unsubscribe | Sequence tool |
| Complaint / hostile | Apologize once, never re-contact, flag domain | SDR Manager |

**The 4-hour rule for positive replies:** SDRs that respond to interested replies within 4 hours convert to meeting at 2-3× the rate of those who respond next-day.

---

## Measurement Dashboard

Track weekly per sequence:

| Metric | Target (B2B SaaS, mid-market) |
|---|---|
| Sent volume | Match plan |
| Bounce rate | <2% total, <1% hard |
| Open rate | Track but discount; Apple MPP inflates |
| Reply rate | 3-5% (Instantly 2026 average); 8%+ if list is sharp |
| Positive reply rate | 30-50% of all replies |
| Meeting booked rate | 1-2% of sent |
| Spam complaint rate | <0.1% |
| Unsubscribe rate | <0.5% per send |

Trend matters more than absolute. A 4% reply rate trending down to 2% over 6 weeks is a serious problem (deliverability decay). A 2.5% rate stable for 3 months is fine.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Asking for time, not interest, in CTA | "Worth a quick reply if this is on your radar?" not "got 15 mins?" |
| Templated personalization tokens, no real research | Per-prospect observation in first 1-2 sentences |
| Images, GIFs, attachments, links in email 1 | Plain text, zero or one link, no attachments |
| Single email and done | 3-7 step sequence, widening gaps |
| Sending from primary brand domain | Separate cold domain (try-acme.com) |
| No warm-up | 15-60 day ramp on any new domain or mailbox |
| Daily bump cadence | Widening gaps: 2-3d → 4-7d → 7-14d |
| Optimizing for open rate | Track reply, positive reply, meeting booked |
| First name in subject line | Plain professional subject — looks like internal mail |
| Numbers / punctuation / non-title-case in subject | Title case, plain words, 3-7 words |
| Calendar link in email 1 | Save for email 3+ or after positive reply |
| List of 5,000 weakly-fit prospects | List of 100-200 strongly-fit prospects |

---

## Tooling

### Sending platforms (rank-ordered)

- **Smartlead** — best deliverability infrastructure, multi-domain rotation, AI warm-up. ~$39-99/mo.
- **Instantly** — high-volume sender, $37-97/mo, strong onboarding.
- **Apollo** — combined data + sending, moderate deliverability, $99-149/mo per seat.
- **Outreach.io** — enterprise SDR sequencing.
- **Salesloft** — Outreach competitor, equally enterprise.
- **Lavender** — coaching layer on top of Gmail/Outlook; not a sender, but the best inline copy assistant.

### Deliverability monitoring

- **Mail-tester.com** — single-email diagnostic, free
- **MXToolbox** — DNS / blacklist monitoring, free + paid
- **Glock Apps** — sends to seed addresses, reports inbox vs spam placement

### Compliance

- **Privy / Termly / OneTrust** — unsubscribe & consent management
- **Bouncer / NeverBounce / ZeroBounce** — list verification

---

## References (verified 2024-2026)

- [Instantly Cold Email Benchmark Report 2026](https://instantly.ai/cold-email-benchmark-report-2026) — average reply rate 3.43%, top quartile 5.5%, elite >10.7%; 58% of replies on email 1
- [Lavender — Cold Email 101 + Subject Line Research](https://www.lavender.ai/blog/cold-email-101) — ~2B emails analyzed; personalization 50-250% lift; <75 words +83% replies
- [Jason Bay — Outbound Squad "Reply Method"](https://www.outboundsquad.com/) — 4-part structure, <80 words, ask for interest not time
- [Sam Nelson — Agoge Sequence (Outreach.io)](https://samnelson.substack.com/) — 15 touchpoints over 27 days, multi-channel SDR template
- [Kyle Coleman — TPVA Formula](https://joshbraun.com/kylecoleman/) — Tailoring → Problem → Value → Ask
- [Google Bulk Sender Requirements](https://support.google.com/a/answer/81126) — Feb 2024 enforcement, Nov 2025 hardening
- [Clay — B2B Cold Email Deliverability](https://www.clay.com/blog/b2b-cold-email-deliverability) — domain architecture, volume rules, bounce thresholds
- [Smartlead — Email Warm-Up Guide](https://www.smartlead.ai/blog/email-warm-up-guide) — 15-60 day ramp, automated patterns
- [Mailshake 2026 Benchmarks](https://mailshake.com/blog/cold-email-benchmarks-2026/) — single-email vs sequence reply rates

### Books worth reading

- *$100M Leads* by Alex Hormozi — outbound and lead-gen frameworks (4-step model: list → personalize → value → automate)
- *Predictable Revenue* by Aaron Ross — canonical SDR playbook (older but foundational)
- *The Sales Acceleration Formula* by Mark Roberge — quantified outbound at HubSpot scale
- *Fanatical Prospecting* by Jeb Blount — multi-channel cadence discipline

### Note on sources

All benchmarks above are from public 2024-2026 reports by named operators. Where claims involve "billions of emails analyzed" (Lavender, Instantly), underlying datasets are not publicly hosted — numbers are from their published summaries. Reforge and Pavilion outbound courses contain additional depth but are paywalled. For original casework, build a 90-day measurement window in your own sequences before trusting any external benchmark over your own numbers.

---

## Cross-Skill Links

- **`copywriting`** — when the email body is the bottleneck, copywriting craft applies
- **`brand-voice`** — outbound emails must follow voice rules (no em-dashes, no AI-slop)
- **`email-sequence`** — for warmed/permissioned email sequences (lifecycle, not cold)
- **`revops`** — lead routing and CRM hygiene downstream of replies
- **`customer-segmentation`** — list-building is segmentation applied to prospects
- **`win-loss-analysis`** — closed-lost outbound deals need debrief; this skill plus that one closes the learning loop
