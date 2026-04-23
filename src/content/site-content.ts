export const siteContent = {
  meta: {
    title: "TapasNGS — NextGen Systems",
    description:
      "TapasNGS builds modern AI and cloud systems for teams that need reliability, velocity, and measurable outcomes.",
    siteUrl: "https://tapasngs.com",
    ogImage: "/og.png",
    twitter: "@tapasngs",
    locale: "en_US",
  },

  nav: {
    brand: "TapasNGS",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Products", href: "/products" },
      { label: "Proof", href: "/proof" },
      { label: "Contact", href: "/contact" },
    ],
  },

  home: {
    hero: {
      headline: "Engineering, with discipline. Intelligence, with rigor.",
      subheadline:
        "TapasNGS builds modern AI and cloud systems for teams that need reliability, velocity, and measurable outcomes\u2014without compromise.",
      ctas: [
        { label: "Talk to us", href: "/contact" },
        { label: "Explore capabilities", href: "/capabilities" },
      ],
      microLine: "Built like a product. Delivered like a partner.",
    },

    systems: {
      title: "Systems that hold up under pressure.",
      intro: "We work where complexity is real: production, scale, compliance, latency, cost, and human workflows. We start with how the system behaves under stress\u2014then build for clarity, proof, and craftsmanship.",
      pillars: [
        {
          label: "AI Engineering",
          description: "LLMs, RAG, evals, guardrails, production AI",
          domain: "AI" as const,
        },
        {
          label: "Cloud & Platform",
          description: "Kubernetes, secure infra, observability",
          domain: "Platform" as const,
        },
        {
          label: "Quality Intelligence",
          description: "Risk-based automation, CI confidence",
          domain: "Quality" as const,
        },
        {
          label: "Data & Search",
          description: "Vector search, pipelines, knowledge systems",
          domain: "Data" as const,
        },
      ],
    },

    proofTeaser: {
      title: "Proof isn\u2019t a slide. It\u2019s a system.",
      body: "We don\u2019t sell vibes. We show signals\u2014what changed, what improved, what became easier to operate.",
      cta: { label: "Open Proof Console", href: "/proof" },
    },

    problem: {
      title: "The problem we solve.",
      body: "Modern systems are powerful\u2014and fragile. AI works in demos but fails in production. Cloud platforms scale but become expensive and opaque. Automation exists but doesn\u2019t reflect real user risk. Data is available but rarely trusted.",
      note: "The problem isn\u2019t technology. It\u2019s lack of engineering discipline across the system.",
    },

    approach: {
      title: "Clarity first. Proof always.",
      body: "We don\u2019t start with tools. We start with how the system behaves under stress.",
      points: [
        "What breaks at scale",
        "What operators struggle with at 3 a.m.",
        "What leaders actually care about: risk, reliability, and outcomes",
        "Every engagement is designed around measurable improvement\u2014not activity",
      ],
    },

    engagement: {
      title: "How we work.",
      body: "We work best with teams who care deeply about doing things right.",
      items: [
        "Senior, hands-on engineers",
        "Clear problem framing",
        "Defined success metrics",
        "Tight feedback loops",
      ],
      closing: "We stay small by design. This keeps accountability high\u2014and delivery sharp.",
    },

    product: {
      title: "Flagship product: Orepli.",
      body: "Orepli is a grounded AI agent for customer conversations. It answers inbound email and powers an embeddable chat widget on your site\u2014both drawing from the same knowledge base, both auto-answering when confident and escalating with a clean summary when not.",
      cta: { label: "Visit orepli.com", href: "https://orepli.com" },
      highlights: [
        "Two channels, one knowledge base: email agent + embeddable chat widget",
        "Confidence-gated auto-reply with AI-summarised escalation to a human",
        "Every answer cited; every action logged and reversible",
      ],
      detail:
        "Built for support, sales, and ops teams drowning in repetitive questions. Orepli blends real automation with real oversight\u2014one monthly token pool, one audit trail, one invoice.",
    },

    highlights: {
      title: "Recent highlights.",
      items: [
        {
          title: "Orepli launch",
          description:
            "Shipped a dual-channel grounded agent\u2014email automation plus an embeddable chat widget\u2014with per-tenant billing gates and full audit trails.",
        },
        {
          title: "CI signal overhaul",
          description:
            "Rebuilt flaky automation into reliable release signals with measurable confidence gains.",
        },
        {
          title: "Platform resilience",
          description:
            "Introduced golden signals and runbooks to cut incident diagnosis time.",
        },
      ],
    },

    principles: {
      title: "The Tapas way.",
      items: [
        "Discipline over drama",
        "Precision over noise",
        "Systems over patches",
        "Secure by design",
        "Measure what matters",
      ],
    },

    contactCta: {
      title: "Let\u2019s build something that lasts.",
      footerNote: "No spam. No pressure. Just clarity.",
    },
  },

  capabilities: {
    intro:
      "Elite engineering services designed to ship durable software, intelligent systems, and measurable business outcomes.",
    domains: [
      {
        title: "Digital Application Engineering",
        items: [
          "Custom application development",
          "Web & cloud-native apps",
          "Microservices & API-first systems",
          "Modernization & re-platforming",
          "Legacy \u2192 cloud / microservices",
          "Monolith \u2192 event-driven",
          "Product engineering (MVP \u2192 scale)",
          "Startup & internal product builds",
        ],
      },
      {
        title: "AI-Powered Solutions & Platforms",
        items: [
          "AI application development",
          "AI copilots",
          "Intelligent dashboards",
          "Enterprise AI (LLMs, RAG, agents)",
          "Private GPTs",
          "Knowledge assistants",
          "Process automation with AI",
          "Decision engines",
          "AI-driven workflows",
        ],
      },
      {
        title: "Intelligent Document Processing (IDP)",
        items: [
          "OCR + AI extraction",
          "Invoice / KYC / claims automation",
          "Human-in-the-loop review systems",
          "Unstructured \u2192 real-time decisions",
        ],
      },
      {
        title: "Application Reliability & Support Engineering",
        items: [
          "L2 / L3 intelligent support",
          "AI-assisted incident resolution",
          "Performance & cost optimization",
          "Operational playbooks and SLAs",
        ],
      },
      {
        title: "Platform, Cloud & DevOps Engineering",
        items: [
          "Cloud architecture (AWS / Azure / GCP)",
          "DevOps & CI/CD",
          "Secure, scalable platforms",
          "Infrastructure automation",
        ],
      },
    ],
    notes: [
      "Flagship focus on AI-powered solutions, built for measurable outcomes.",
      "IDP transforms unstructured documents into real-time decisions.",
      "Reliability and support are strategic, not ticket-driven.",
      "Platform engineering underpins every pillar we deliver.",
    ],
  },

  proof: {
    title: "Proof Console",
    intro:
      "Representative outcomes from real engagements. Details vary, but the pattern is consistent: signal over noise, rigor over rush.",
    signals: [
      {
        id: "00",
        domain: "AI" as const,
        context: "High-volume inboxes and on-site questions slowed response times and created inconsistent handling",
        action: "Deployed Orepli across email and website chat with shared knowledge, confidence gates, and escalation rules",
        result: "Faster responses with consistent outcomes, citations on every reply, and full audit trails",
      },
      {
        id: "01",
        domain: "Quality" as const,
        context: "Flaky automation slowed releases",
        action: "Rebuilt CI signal health",
        result: "Predictable pipelines and faster releases",
      },
      {
        id: "02",
        domain: "AI" as const,
        context: "LLM failed in edge cases",
        action: "Added evals and guardrails",
        result: "Stable and safer rollout",
      },
      {
        id: "03",
        domain: "Platform" as const,
        context: "Incidents during scale",
        action: "Golden signals and runbooks",
        result: "Faster diagnosis, calmer ops",
      },
      {
        id: "04",
        domain: "Data" as const,
        context: "Low trust search results",
        action: "Hybrid retrieval and tuning",
        result: "Higher relevance and trust",
      },
    ],
    narratives: [
      {
        title: "Dual-channel support with Orepli",
        description:
          "A growing team was drowning in repetitive questions across email and their website. We deployed Orepli to cover both channels, grounded in the same knowledge base, with confidence gates and AI-summarised human escalations.",
        result: "One audit trail across channels, faster first-response times, and humans freed for the hard cases.",
      },
      {
        title: "Stabilizing AI in Production",
        description:
          "A team had an LLM system that worked in demos but behaved unpredictably in real usage. We introduced evaluation frameworks, retrieval tuning, and guardrails.",
        result: "Measurable improvement in response quality and safer rollout.",
      },
      {
        title: "Reducing Release Risk",
        description:
          "A CI pipeline existed but lacked trust due to flaky automation. We redesigned test strategy around risk and signal health.",
        result: "Faster releases with fewer late-stage surprises.",
      },
      {
        title: "Improving Platform Reliability",
        description:
          "A cloud platform struggled during scale events with poor observability. We implemented structured telemetry and operational patterns.",
        result: "Faster incident resolution and calmer on-call rotations.",
      },
    ],
  },

  about: {
    intro:
      "We are a collective of engineers driven by a shared purpose: to build solutions that make life simpler, smarter, and more reliable. We believe innovation happens every day when engineering excellence meets craftsmanship and the latest industry trends\u2014where every line of code, every design decision, and every interaction reflects intention, clarity, and quality. Using AI, we make life more meaningful and remain committed to community growth.",
    values: [
      "Simplicity \u2014 clarity, ease, and meaning without stripping away purpose",
      "Innovation \u2014 pushing boundaries with impact, not novelty",
      "Relationships \u2014 strong partnerships built on trust and collaboration",
      "Reliability \u2014 systems and promises that stand strong and perform consistently",
      "Transparency \u2014 clarity and honesty through every milestone and decision",
    ],
    beliefs: [
      "Engineering excellence",
      "Quality first",
      "AI with purpose",
      "Reliability always",
      "Craftsmanship in every detail",
    ],
    whoWeWorkWith: [
      "Teams who value clarity, quality, and long-term outcomes",
      "Organizations embracing AI with responsibility",
      "Partners who believe in transparency and collaboration",
      "Leaders committed to building reliable systems",
    ],
    closing:
      "Innovation with purpose. Engineering with integrity. Solutions that last. Technology becomes meaningful when it uplifts people\u2014that\u2019s why we build with heart.",
  },

  contact: {
    intro:
      "Share your context. Tell us what you\u2019re building and what success looks like\u2014we\u2019ll respond with a clear next step.",
    detail:
      "We respond with a clear, thoughtful next step\u2014no sales pressure.",
    email: "hello@tapasngs.com",
    formspreeEndpoint: "https://formspree.io/f/xnjzdydz",
  },

  product: {
    name: "Orepli",
    url: "https://orepli.com",
    tagline:
      "One knowledge base. Two channels. Email replies and on-site chat, both grounded in your own docs.",
    oneLiner:
      "Orepli reads every inbound email and powers an embeddable chat widget on your site. It drafts high-quality replies, escalates edge cases with an AI-generated summary, and keeps a full audit trail\u2014so teams respond faster without losing control.",
    whatItSolves:
      "Support, sales, and operations teams spend hours a week triaging, drafting, and routing the same questions. Some arrive as email, others land on the website. Orepli covers both, from a single knowledge base, so a customer gets the same grounded answer wherever they ask\u2014and humans only see the cases that genuinely need them.",
    howItWorks: [
      "Connect an inbox (Gmail OAuth or IMAP/SMTP)",
      "Upload your knowledge base (FAQs, policies, SOPs, product docs)",
      "Create an embeddable chat widget and paste a one-line script on your site",
      "Tune tone, confidence thresholds, and escalation targets per mailbox",
      "Orepli drafts grounded replies across email and chat, auto-sends when confident, escalates with a summary when not",
      "Full visibility: per-message citations, token usage, timelines, and dead-letter recovery",
    ],
    capabilities: [
      "Email agent: Gmail OAuth + IMAP/SMTP, confidence-gated auto-reply, per-mailbox tone",
      "Chat widget: one-line embed, per-widget public key and origin allowlist, admin live preview",
      "Grounded retrieval with pgvector; every answer cites its KB chunks",
      "AI-summarised escalations with visitor comment routed to your team",
      "Shared token pool across channels, hard cap at 2\u00D7 the included allotment",
      "Multi-tenant, with admin console for users, subscriptions, and dead-letter retries",
      "Security: hashed API keys, CSP, origin enforcement, rate limits per widget",
    ],
    differentiation:
      "Orepli isn\u2019t a chatbot you bolt on. It\u2019s an operations system for customer conversations\u2014one pipeline, one audit trail, two channels. Built for control, compliance, and scale from day one.",
    audiences: [
      "Customer support teams running shared inboxes",
      "Sales and ops teams handling high-volume repetitive questions",
      "Product and marketing sites that need a grounded on-site assistant",
      "Any team that wants AI answers with citations\u2014not guesses",
    ],
    positioning:
      "Orepli is the flagship product within Tapas Next Gen Systems. It\u2019s where we prove our thesis: grounded AI is a system design problem, not a model problem. Auditable by default. Safe by default. Useful on day one.",
    plans: [
      {
        tier: "Starter",
        price: "$49",
        blurb: "For a founder or a small team automating a single support queue.",
        includes: "1 mailbox, 10M tokens/mo, email + widget, draft-only or auto-send",
      },
      {
        tier: "Growth",
        price: "$99",
        blurb: "For small support teams running separate queues for sales, ops, and support.",
        includes: "3 mailboxes, 40M tokens/mo, per-mailbox tone + KB, priority support",
      },
      {
        tier: "Scale",
        price: "$199",
        blurb: "For teams running RAG-native conversations across brands and regions.",
        includes: "5 mailboxes, 100M tokens/mo, extra mailboxes $12/ea, Slack support",
      },
    ],
    cta: { label: "Visit orepli.com", href: "https://orepli.com" },
  },

  products: {
    title: "Products built with operational rigor.",
    intro:
      "TapasNGS builds products that prove our engineering philosophy in the real world. Orepli is the flagship\u2014a grounded AI agent that handles customer conversations across email and your website, with citations, confidence gates, and a full audit trail.",
    highlights: [
      "Two channels, one knowledge base\u2014email agent and embeddable chat widget",
      "Confidence-gated auto-reply with AI-summarised human escalation",
      "Per-tenant isolation, hashed API keys, and hard billing caps by design",
    ],
    cta: { label: "Visit orepli.com", href: "https://orepli.com" },
  },

  privacy: {
    title: "Privacy Policy",
    intro:
      "We keep data collection minimal and transparent. If you contact us, we use your information only to respond.",
    items: [
      "We collect only submitted form data.",
      "We do not sell your data to third parties.",
      "We use minimal analytics and disclose their use transparently.",
    ],
  },

  footer: {
    copyright: `\u00A9 ${new Date().getFullYear()} TapasNGS. All rights reserved.`,
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Orepli", href: "https://orepli.com" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

export type Domain = "AI" | "Platform" | "Quality" | "Data";
