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
      title: "Flagship product: niotap.",
      body: "niotap is an autonomous inbox operations platform that drafts high-quality replies, escalates edge cases, and keeps a full audit trail\u2014so teams respond faster without losing control.",
      cta: { label: "See it in Proof", href: "/proof" },
      highlights: [
        "AI-drafted replies grounded in internal knowledge",
        "Confidence-based auto-reply vs. escalation",
        "Full visibility with logs, metrics, and auditability",
      ],
      detail:
        "Built for support and operations teams handling high-volume, rule-driven email. niotap blends automation with human oversight and keeps every decision traceable.",
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
      "Deep engineering across AI, platform, quality, and data\u2014delivered with a product mindset.",
    domains: [
      {
        title: "AI Engineering",
        items: [
          "Production LLM applications",
          "RAG systems with evaluation-first design",
          "Safety and guardrails",
          "Monitoring and feedback loops",
        ],
      },
      {
        title: "Cloud & Platform",
        items: [
          "Kubernetes and container platforms",
          "Secure reference architectures",
          "Practical observability",
          "Cost discipline",
        ],
      },
      {
        title: "Quality Intelligence",
        items: [
          "Risk-based automation",
          "CI signal health",
          "Real-user flow coverage",
          "Release confidence",
        ],
      },
      {
        title: "Data & Search",
        items: [
          "Search relevance",
          "Vector and hybrid retrieval",
          "Data pipelines and governance",
          "Trustworthy knowledge systems",
        ],
      },
    ],
    notes: [
      "AI should reduce risk\u2014not introduce new ones.",
      "Infrastructure should fade into the background\u2014not demand constant attention.",
      "Quality becomes an engineering advantage, not a bottleneck.",
      "When information is reliable, velocity increases naturally.",
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
        context: "High-volume inboxes slowed response times and created inconsistent handling",
        action: "Deployed niotap with knowledge grounding, confidence gates, and escalation rules",
        result: "Faster responses with consistent outcomes and full audit trails",
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
      "TapasNGS exists to help teams build systems that endure\u2014technically, operationally, and culturally.",
    values: [
      "Craftsmanship",
      "Rigor",
      "Simplicity",
      "Reliability",
      "Partnership",
    ],
    beliefs: [
      "Engineering is a craft",
      "Quality is a system property",
      "AI must be treated with seriousness",
      "Calm systems outperform chaotic ones over time",
    ],
    whoWeWorkWith: [
      "Engineering-led organizations",
      "Teams operating at scale",
      "Leaders who value long-term stability",
      "Companies willing to measure outcomes honestly",
    ],
    closing: "Leadership isn\u2019t volume. It\u2019s consistency.",
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
    name: "niotap",
    tagline:
      "Autonomous inbox operations for teams that need speed with control.",
    oneLiner:
      "niotap drafts high-quality replies, escalates edge cases, and keeps a full audit trail\u2014so teams respond faster without losing control.",
    whatItSolves:
      "Support and operations teams spend too much time triaging, drafting, and routing emails. niotap reduces manual effort by automating first-line responses while enforcing rules, knowledge, and escalation policies.",
    howItWorks: [
      "Connect an inbox (Gmail or IMAP/SMTP)",
      "Upload knowledge (FAQs, policies, SOPs, product docs)",
      "Set automation rules (confidence thresholds, escalation targets, tone)",
      "Automated response flow drafts replies, applies rules, and escalates where needed",
      "Full visibility with activity logs, metrics, and auditability",
    ],
    capabilities: [
      "AI-drafted replies grounded in your internal knowledge base",
      "Confidence-based auto-reply vs. escalation",
      "Configurable tone, CC rules, and escalation destinations",
      "Gmail and IMAP/SMTP integrations",
      "Admin dashboard to manage tenants, users, and mailbox configurations",
      "Audit trails for every decision and action",
    ],
    differentiation:
      "niotap is not just a chatbot. It is an operations system for email\u2014built for control, compliance, and scale. It blends automation with human oversight and keeps every decision traceable.",
    audiences: [
      "Customer support teams",
      "Operations and compliance teams",
      "Internal help desks",
      "Any team handling high-volume, rule-driven email",
    ],
    positioning:
      "niotap is a flagship product within Tapas Next Gen Systems, focused on operational AI. It showcases our approach to building secure, auditable automation systems that plug into real business workflows and deliver measurable efficiency gains.",
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
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

export type Domain = "AI" | "Platform" | "Quality" | "Data";
