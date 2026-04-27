// Services / tools highlighted per skill. Linked out so users can click through.
// Keep tight — 4-8 canonical tools per skill, not an exhaustive directory.

export type Service = { name: string; url: string };

export const skillServices: Record<string, Service[]> = {
  // FOUNDATION
  "product-marketing-context": [
    { name: "Notion", url: "https://www.notion.so" },
    { name: "Google Docs", url: "https://docs.google.com" },
    { name: "Coda", url: "https://coda.io" },
  ],
  "brand-voice": [
    { name: "Hemingway", url: "https://hemingwayapp.com" },
    { name: "Grammarly", url: "https://www.grammarly.com" },
    { name: "ProWritingAid", url: "https://prowritingaid.com" },
    { name: "Notion", url: "https://www.notion.so" },
  ],

  // CONVERSION OPTIMIZATION
  "form-cro": [
    { name: "Hotjar", url: "https://www.hotjar.com" },
    { name: "Microsoft Clarity", url: "https://clarity.microsoft.com" },
    { name: "FullStory", url: "https://www.fullstory.com" },
    { name: "Baymard Institute", url: "https://baymard.com" },
    { name: "Typeform", url: "https://www.typeform.com" },
  ],
  "onboarding-cro": [
    { name: "Appcues", url: "https://www.appcues.com" },
    { name: "Pendo", url: "https://www.pendo.io" },
    { name: "Userpilot", url: "https://userpilot.com" },
    { name: "Userlist", url: "https://userlist.com" },
    { name: "Intercom", url: "https://www.intercom.com" },
  ],
  "page-cro": [
    { name: "Hotjar", url: "https://www.hotjar.com" },
    { name: "Microsoft Clarity", url: "https://clarity.microsoft.com" },
    { name: "FullStory", url: "https://www.fullstory.com" },
    { name: "Optimizely", url: "https://www.optimizely.com" },
    { name: "VWO", url: "https://vwo.com" },
    { name: "GoodUI", url: "https://goodui.org" },
  ],
  "paywall-upgrade-cro": [
    { name: "RevenueCat", url: "https://www.revenuecat.com" },
    { name: "Stripe Billing", url: "https://stripe.com/billing" },
    { name: "Chargebee", url: "https://www.chargebee.com" },
    { name: "Stigg", url: "https://www.stigg.io" },
  ],
  "popup-cro": [
    { name: "Privy", url: "https://www.privy.com" },
    { name: "OptinMonster", url: "https://optinmonster.com" },
    { name: "Sleeknote", url: "https://sleeknote.com" },
    { name: "Klaviyo", url: "https://www.klaviyo.com" },
    { name: "ConvertBox", url: "https://convertbox.com" },
  ],
  "signup-flow-cro": [
    { name: "Auth0", url: "https://auth0.com" },
    { name: "Clerk", url: "https://clerk.com" },
    { name: "Stytch", url: "https://stytch.com" },
    { name: "Hotjar", url: "https://www.hotjar.com" },
  ],

  // CONTENT & COPY
  "cold-email": [
    { name: "Smartlead", url: "https://www.smartlead.ai" },
    { name: "Instantly", url: "https://instantly.ai" },
    { name: "Lavender", url: "https://www.lavender.ai" },
    { name: "Apollo", url: "https://www.apollo.io" },
    { name: "Clay", url: "https://www.clay.com" },
    { name: "Outreach", url: "https://www.outreach.io" },
    { name: "Salesloft", url: "https://salesloft.com" },
  ],
  "content-strategy": [
    { name: "Ahrefs", url: "https://ahrefs.com" },
    { name: "Semrush", url: "https://www.semrush.com" },
    { name: "Surfer", url: "https://surferseo.com" },
    { name: "Notion", url: "https://www.notion.so" },
    { name: "Airtable", url: "https://airtable.com" },
  ],
  "copy-editing": [
    { name: "Hemingway", url: "https://hemingwayapp.com" },
    { name: "Grammarly", url: "https://www.grammarly.com" },
    { name: "ProWritingAid", url: "https://prowritingaid.com" },
    { name: "Lavender", url: "https://www.lavender.ai" },
  ],
  copywriting: [
    { name: "Copyhackers", url: "https://copyhackers.com" },
    { name: "Marketing Examples", url: "https://marketingexamples.com" },
    { name: "Really Good Emails", url: "https://reallygoodemails.com" },
    { name: "Hemingway", url: "https://hemingwayapp.com" },
  ],
  "email-sequence": [
    { name: "Customer.io", url: "https://customer.io" },
    { name: "Iterable", url: "https://iterable.com" },
    { name: "Braze", url: "https://www.braze.com" },
    { name: "Klaviyo", url: "https://www.klaviyo.com" },
    { name: "HubSpot", url: "https://www.hubspot.com" },
    { name: "ConvertKit", url: "https://convertkit.com" },
  ],
  image: [
    { name: "Midjourney", url: "https://www.midjourney.com" },
    { name: "Recraft", url: "https://www.recraft.ai" },
    { name: "Ideogram", url: "https://ideogram.ai" },
    { name: "Gemini Image", url: "https://aistudio.google.com" },
    { name: "gpt-image-2", url: "https://platform.openai.com" },
    { name: "Foreplay", url: "https://www.foreplay.co" },
    { name: "Cloudinary", url: "https://cloudinary.com" },
  ],
  "social-content": [
    { name: "Buffer", url: "https://buffer.com" },
    { name: "Typefully", url: "https://typefully.com" },
    { name: "Hypefury", url: "https://hypefury.com" },
    { name: "Tweet Hunter", url: "https://tweethunter.io" },
    { name: "Beehiiv", url: "https://www.beehiiv.com" },
  ],
  video: [
    { name: "HeyGen", url: "https://www.heygen.com" },
    { name: "Synthesia", url: "https://www.synthesia.io" },
    { name: "Runway", url: "https://runwayml.com" },
    { name: "Veo", url: "https://aistudio.google.com" },
    { name: "Kling", url: "https://kling.kuaishou.com" },
    { name: "Remotion", url: "https://www.remotion.dev" },
    { name: "ElevenLabs", url: "https://elevenlabs.io" },
  ],
  "content-distribution": [
    { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com" },
    { name: "Marketing Brew", url: "https://www.morningbrew.com/marketing" },
    { name: "ListenNotes", url: "https://www.listennotes.com" },
    { name: "Podchaser", url: "https://www.podchaser.com" },
    { name: "Muck Rack", url: "https://muckrack.com" },
    { name: "Press List", url: "https://presslist.com" },
  ],

  // SEO & DISCOVERY
  "ai-seo": [
    { name: "Profound", url: "https://www.tryprofound.com" },
    { name: "Ahrefs Brand Radar", url: "https://ahrefs.com" },
    { name: "Frase", url: "https://www.frase.io" },
    { name: "Surfer", url: "https://surferseo.com" },
  ],
  "aso-audit": [
    { name: "AppFigures", url: "https://appfigures.com" },
    { name: "Sensor Tower", url: "https://sensortower.com" },
    { name: "AppTweak", url: "https://www.apptweak.com" },
    { name: "data.ai", url: "https://www.data.ai" },
  ],
  "competitor-alternatives": [
    { name: "G2", url: "https://www.g2.com" },
    { name: "Capterra", url: "https://www.capterra.com" },
    { name: "Crayon", url: "https://www.crayon.co" },
    { name: "Klue", url: "https://klue.com" },
  ],
  "programmatic-seo": [
    { name: "Webflow", url: "https://webflow.com" },
    { name: "Astro", url: "https://astro.build" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Airtable", url: "https://airtable.com" },
    { name: "dbt", url: "https://www.getdbt.com" },
  ],
  "schema-markup": [
    { name: "Schema.org", url: "https://schema.org" },
    { name: "Rich Results Test", url: "https://search.google.com/test/rich-results" },
    { name: "Schema App", url: "https://www.schemaapp.com" },
    { name: "RankMath", url: "https://rankmath.com" },
    { name: "Yoast", url: "https://yoast.com" },
    { name: "Search Console", url: "https://search.google.com/search-console" },
  ],
  "seo-audit": [
    { name: "Ahrefs", url: "https://ahrefs.com" },
    { name: "Semrush", url: "https://www.semrush.com" },
    { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/" },
    { name: "Sitebulb", url: "https://sitebulb.com" },
    { name: "Search Console", url: "https://search.google.com/search-console" },
  ],
  "site-architecture": [
    { name: "Mermaid", url: "https://mermaid.js.org" },
    { name: "Whimsical", url: "https://whimsical.com" },
    { name: "Figma", url: "https://www.figma.com" },
    { name: "Lucidchart", url: "https://www.lucidchart.com" },
  ],

  // PAID DISTRIBUTION
  "ad-creative": [
    { name: "Foreplay", url: "https://www.foreplay.co" },
    { name: "Motion", url: "https://motionapp.com" },
    { name: "Midjourney", url: "https://www.midjourney.com" },
    { name: "Recraft", url: "https://www.recraft.ai" },
    { name: "AdCreative.ai", url: "https://www.adcreative.ai" },
  ],
  "paid-ads": [
    { name: "Google Ads", url: "https://ads.google.com" },
    { name: "Meta Ads", url: "https://business.facebook.com" },
    { name: "LinkedIn Ads", url: "https://business.linkedin.com/marketing-solutions" },
    { name: "TikTok Ads", url: "https://ads.tiktok.com" },
    { name: "Triple Whale", url: "https://www.triplewhale.com" },
    { name: "Northbeam", url: "https://www.northbeam.io" },
  ],

  // STRATEGY
  "competitor-profiling": [
    { name: "SimilarWeb", url: "https://www.similarweb.com" },
    { name: "Crunchbase", url: "https://www.crunchbase.com" },
    { name: "BuiltWith", url: "https://builtwith.com" },
    { name: "Wappalyzer", url: "https://www.wappalyzer.com" },
    { name: "Klue", url: "https://klue.com" },
    { name: "Crayon", url: "https://www.crayon.co" },
  ],
  "customer-research": [
    { name: "UserInterviews", url: "https://www.userinterviews.com" },
    { name: "Dovetail", url: "https://dovetail.com" },
    { name: "Otter", url: "https://otter.ai" },
    { name: "Fireflies", url: "https://fireflies.ai" },
    { name: "Gong", url: "https://www.gong.io" },
  ],
  "launch-strategy": [
    { name: "Product Hunt", url: "https://www.producthunt.com" },
    { name: "Hacker News", url: "https://news.ycombinator.com" },
    { name: "BetaList", url: "https://betalist.com" },
    { name: "Beehiiv", url: "https://www.beehiiv.com" },
    { name: "Substack", url: "https://substack.com" },
  ],
  "marketing-ideas": [
    { name: "Demand Curve", url: "https://www.demandcurve.com" },
    { name: "Reforge", url: "https://www.reforge.com" },
    { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com" },
    { name: "First Round Review", url: "https://review.firstround.com" },
  ],
  "marketing-psychology": [
    { name: "Influence at Work", url: "https://www.influenceatwork.com" },
    { name: "Behavioral Scientist", url: "https://behavioralscientist.org" },
    { name: "Nielsen Norman Group", url: "https://www.nngroup.com" },
  ],
  "pricing-strategy": [
    { name: "ProfitWell", url: "https://www.priceintelligently.com" },
    { name: "Stigg", url: "https://www.stigg.io" },
    { name: "Orb", url: "https://www.withorb.com" },
    { name: "Maxio", url: "https://www.maxio.com" },
    { name: "Chargebee", url: "https://www.chargebee.com" },
  ],
  "customer-segmentation": [
    { name: "Mixpanel", url: "https://mixpanel.com" },
    { name: "Amplitude", url: "https://amplitude.com" },
    { name: "PostHog", url: "https://posthog.com" },
    { name: "June", url: "https://june.so" },
    { name: "Heap", url: "https://heap.io" },
  ],
  "market-sizing": [
    { name: "Crunchbase", url: "https://www.crunchbase.com" },
    { name: "PitchBook", url: "https://pitchbook.com" },
    { name: "Statista", url: "https://www.statista.com" },
    { name: "BLS", url: "https://www.bls.gov" },
    { name: "Gartner", url: "https://www.gartner.com" },
  ],

  // RETENTION
  "churn-prevention": [
    { name: "ChurnZero", url: "https://churnzero.com" },
    { name: "Vitally", url: "https://www.vitally.io" },
    { name: "Catalyst", url: "https://catalyst.io" },
    { name: "ProfitWell Retain", url: "https://www.profitwell.com/retain" },
    { name: "Custify", url: "https://www.custify.com" },
  ],

  // GROWTH ENGINEERING
  "community-marketing": [
    { name: "Discord", url: "https://discord.com" },
    { name: "Slack", url: "https://slack.com" },
    { name: "Circle", url: "https://circle.so" },
    { name: "Bettermode", url: "https://bettermode.com" },
    { name: "Discourse", url: "https://www.discourse.org" },
  ],
  "directory-submissions": [
    { name: "Product Hunt", url: "https://www.producthunt.com" },
    { name: "BetaList", url: "https://betalist.com" },
    { name: "AlternativeTo", url: "https://alternativeto.net" },
    { name: "G2", url: "https://www.g2.com" },
    { name: "Capterra", url: "https://www.capterra.com" },
    { name: "AppSumo", url: "https://appsumo.com" },
  ],
  "free-tool-strategy": [
    { name: "Bannerbear", url: "https://www.bannerbear.com" },
    { name: "Replicate", url: "https://replicate.com" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Netlify", url: "https://www.netlify.com" },
  ],
  "lead-magnets": [
    { name: "Beehiiv", url: "https://www.beehiiv.com" },
    { name: "ConvertKit", url: "https://convertkit.com" },
    { name: "ConvertBox", url: "https://convertbox.com" },
    { name: "Typeform", url: "https://www.typeform.com" },
  ],
  "referral-program": [
    { name: "Friendbuy", url: "https://www.friendbuy.com" },
    { name: "Refersion", url: "https://www.refersion.com" },
    { name: "Viral Loops", url: "https://viral-loops.com" },
    { name: "GrowSurf", url: "https://growsurf.com" },
    { name: "PartnerStack", url: "https://partnerstack.com" },
    { name: "Rewardful", url: "https://www.rewardful.com" },
  ],
  "marketing-automation": [
    { name: "HubSpot", url: "https://www.hubspot.com" },
    { name: "Customer.io", url: "https://customer.io" },
    { name: "Segment", url: "https://segment.com" },
    { name: "RudderStack", url: "https://www.rudderstack.com" },
    { name: "Hightouch", url: "https://hightouch.com" },
    { name: "Census", url: "https://www.getcensus.com" },
    { name: "Snowflake", url: "https://www.snowflake.com" },
  ],

  // SALES & REVOPS
  revops: [
    { name: "Salesforce", url: "https://www.salesforce.com" },
    { name: "HubSpot", url: "https://www.hubspot.com" },
    { name: "Pipedrive", url: "https://www.pipedrive.com" },
    { name: "Apollo", url: "https://www.apollo.io" },
    { name: "Outreach", url: "https://www.outreach.io" },
    { name: "Chili Piper", url: "https://www.chilipiper.com" },
    { name: "Default", url: "https://default.com" },
  ],
  "sales-enablement": [
    { name: "Highspot", url: "https://www.highspot.com" },
    { name: "Showpad", url: "https://www.showpad.com" },
    { name: "Seismic", url: "https://seismic.com" },
    { name: "DocSend", url: "https://www.docsend.com" },
    { name: "Pitch", url: "https://pitch.com" },
    { name: "Gamma", url: "https://gamma.app" },
    { name: "Loom", url: "https://www.loom.com" },
  ],
  "win-loss-analysis": [
    { name: "Klue", url: "https://klue.com" },
    { name: "Crayon", url: "https://www.crayon.co" },
    { name: "Primary Intelligence", url: "https://primary-intel.com" },
    { name: "DoubleCheck Research", url: "https://doublecheckresearch.com" },
    { name: "Otter", url: "https://otter.ai" },
    { name: "Gong", url: "https://www.gong.io" },
    { name: "Dovetail", url: "https://dovetail.com" },
  ],
  "sales-asset-iteration": [
    { name: "Highspot", url: "https://www.highspot.com" },
    { name: "Gong", url: "https://www.gong.io" },
    { name: "Chorus", url: "https://www.chorus.ai" },
    { name: "DocSend", url: "https://www.docsend.com" },
    { name: "Loom", url: "https://www.loom.com" },
  ],

  // MEASUREMENT
  "ab-test-setup": [
    { name: "Optimizely", url: "https://www.optimizely.com" },
    { name: "VWO", url: "https://vwo.com" },
    { name: "Statsig", url: "https://statsig.com" },
    { name: "GrowthBook", url: "https://www.growthbook.io" },
    { name: "Eppo", url: "https://www.geteppo.com" },
    { name: "Convert", url: "https://www.convert.com" },
  ],
  "analytics-tracking": [
    { name: "GA4", url: "https://analytics.google.com" },
    { name: "Mixpanel", url: "https://mixpanel.com" },
    { name: "Amplitude", url: "https://amplitude.com" },
    { name: "PostHog", url: "https://posthog.com" },
    { name: "Heap", url: "https://heap.io" },
    { name: "Segment", url: "https://segment.com" },
    { name: "RudderStack", url: "https://www.rudderstack.com" },
  ],
  "marketing-attribution": [
    { name: "HubSpot Attribution", url: "https://www.hubspot.com" },
    { name: "Bizible (Adobe)", url: "https://business.adobe.com/products/marketo/account-based-marketing.html" },
    { name: "HockeyStack", url: "https://hockeystack.com" },
    { name: "Fairing", url: "https://fairing.co" },
    { name: "Robyn (open MMM)", url: "https://github.com/facebookexperimental/Robyn" },
    { name: "LightweightMMM", url: "https://github.com/google/lightweight_mmm" },
    { name: "Recast", url: "https://getrecast.com" },
  ],
};

export const servicesForSkill = (slug: string): Service[] =>
  skillServices[slug] ?? [];
