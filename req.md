# TapasNGS Website Build Prompt  
**Domain:** https://tapasngs.com  
**Hosting:** GitHub Pages (only)  
**Objective:** Create a world-class, original, non-template website that signals technical leadership and engineering excellence.

---

## 0. Mission

Build a **visually unique, world-class website** for **TapasNGS (Tapas NextGen Systems)** that makes technically savvy visitors immediately think:

> “These people are elite engineers.”

This site must feel **crafted**, not assembled.

---

## 1. Originality Constraints (Non-Negotiable)

- ❌ No templates, UI kits, SaaS starters, or copy-based layouts
- ❌ No generic section stacking (hero → features → testimonials → pricing)
- ✅ At least **one signature visual system**
- ✅ At least **one signature interaction**
- Motion must be **subtle, purposeful, and restrained**
- Typography, spacing, and grid must feel editorial and intentional

If the site resembles common Framer / ThemeForest / Stripe-style clones, it fails.

---

## 2. Tech Stack (GitHub Pages Only)

- **Next.js + TypeScript**
- **TailwindCSS**
- **Framer Motion** (minimal use)
- Static export (`output: 'export'`)
- Deployment via **GitHub Pages using GitHub Actions**
- Contact form via **Formspree** (or equivalent static-safe solution)

---

## 3. Signature Experience (Must Implement)

### A. Signature Visual System — *Tapas Grid Field*

- Subtle technical grid + micro-noise background
- Light signal traces embedded into the grid
- Desktop cursor:
  - Slow “focus aura” follows cursor
  - Very light parallax movement
- Scroll:
  - Grid compresses/expands slightly to feel alive
- Must remain elegant, calm, and non-distracting

---

### B. Signature Interaction — *Proof Console*

Instead of testimonials, build a **Proof Console**:

- Feels like a system log / engineering console
- Each entry shows:
  - **Context → Action → Result**
- Filterable by domain:
  - AI
  - Platform
  - Quality
  - Data
- This is the site’s credibility anchor

---

## 4. Site Routes

- `/` — Home
- `/about`
- `/capabilities`
- `/proof`
- `/contact`
- `/privacy`

Navigation must be minimal and sticky.

---

# 5. SITE CONTENT (Use Verbatim Unless Improved Carefully)

---

## HOME (`/`)

### Hero

**Headline**  
**Engineering, with discipline. Intelligence, with rigor.**

**Subheadline**  
TapasNGS builds modern AI and cloud systems for teams that need reliability, velocity, and measurable outcomes—without compromise.

**CTAs**
- Talk to us
- Explore capabilities

**Micro-line**  
Built like a product. Delivered like a partner.

---

### Systems We Build

**Title**  
**Systems that hold up under pressure.**

**Intro**  
We work where complexity is real: production, scale, compliance, latency, cost, and human workflows.  
Our approach is simple—clarity first, proof always, craftsmanship everywhere.

**Pillars**
1. **AI Engineering** — LLMs, RAG, evals, guardrails, production AI
2. **Cloud & Platform** — Kubernetes, secure infra, observability
3. **Quality Intelligence** — Risk-based automation, CI confidence
4. **Data & Search** — Vector search, pipelines, knowledge systems

---

### Proof Teaser

**Title**  
**Proof isn’t a slide. It’s a system.**

**Body**  
We don’t sell vibes. We show signals—what changed, what improved, what became easier to operate.

**CTA**  
Open Proof Console

---

### Operating Principles

**Title**  
**The Tapas way.**

- Discipline over drama
- Precision over noise
- Systems over patches
- Secure by design
- Measure what matters

---

### Contact

**Title**  
**Let’s build something that lasts.**

Form fields:
- Name
- Email
- Company (optional)
- Message

Footer note: No spam. No pressure. Just clarity.

---

## CAPABILITIES (`/capabilities`)

**Intro**  
Deep engineering across AI, platform, quality, and data—delivered with a product mindset.

### AI Engineering
- Production LLM applications
- RAG systems with evaluation-first design
- Safety and guardrails
- Monitoring and feedback loops

### Cloud & Platform
- Kubernetes and container platforms
- Secure reference architectures
- Practical observability
- Cost discipline

### Quality Intelligence
- Risk-based automation
- CI signal health
- Real-user flow coverage
- Release confidence

### Data & Search
- Search relevance
- Vector and hybrid retrieval
- Data pipelines and governance
- Trustworthy knowledge systems

---

## PROOF (`/proof`)

**Title**  
**Proof Console**

**Signals**

**Signal 01 — Quality**  
Context: Flaky automation slowed releases  
Action: Rebuilt CI signal health  
Result: Predictable pipelines and faster releases

**Signal 02 — AI**  
Context: LLM failed in edge cases  
Action: Added evals and guardrails  
Result: Stable and safer rollout

**Signal 03 — Platform**  
Context: Incidents during scale  
Action: Golden signals and runbooks  
Result: Faster diagnosis, calmer ops

**Signal 04 — Data/Search**  
Context: Low trust search results  
Action: Hybrid retrieval and tuning  
Result: Higher relevance and trust

---

## ABOUT (`/about`)

TapasNGS builds systems that endure—technically, operationally, and culturally.

**Values**
- Craftsmanship
- Rigor
- Simplicity
- Reliability
- Partnership

**Closing line**  
Leadership isn’t volume. It’s consistency.

---

## CONTACT (`/contact`)

Share your context. We’ll respond with a clear next step.

---

## PRIVACY (`/privacy`)

- We collect only submitted form data
- No data selling
- Minimal analytics disclosure

---

## 6. Content Architecture

All copy must live in a central file:

