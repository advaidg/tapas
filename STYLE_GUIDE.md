# TapasNGS Design System & Style Guide

A portable reference for replicating the TapasNGS visual language across other products.

---

## 1. Foundation

### Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript, static export)
- **CSS**: Tailwind CSS v4 (with `@theme inline` for design tokens)
- **Motion**: Framer Motion (minimal, purposeful)
- **Fonts**: Geist Sans + Geist Mono (via `next/font/google`)
- **Texture**: CSS-based film grain overlay
- **Theme**: `data-theme="dark" | "light"` on `<html>` with localStorage persistence

---

## 2. Color Palette

### Design Tokens (CSS Custom Properties)

```css
:root {
  /* Backgrounds (darkest → lightest) */
  --bg:           #0a0b0f;     /* Page background */
  --bg-surface:   #12141b;     /* Cards, elevated surfaces */
  --bg-elevated:  #171a23;     /* Highest elevation */

  /* Borders */
  --border:        #242837;    /* Default borders, dividers */
  --border-accent: #343a4d;    /* Decorative numbers, subtle highlights */

  /* Text (brightest → dimmest) */
  --text-primary:   #f5f6fb;   /* Headings, primary body */
  --text-secondary: #b8bdcc;   /* Supporting body text */
  --text-dim:       #7f869b;   /* Labels, captions, meta text */

  /* Accent */
  --accent:       #a6ff00;                     /* Primary highlight (lime) */
  --accent-muted: rgba(166, 255, 0, 0.14);    /* Accent backgrounds */
  --accent-glow:  rgba(166, 255, 0, 0.05);    /* Subtle glow overlays */
}
```

### Light Theme Overrides

```css
:root[data-theme="light"] {
  --bg: #f7f7f4;
  --bg-surface: #ffffff;
  --bg-elevated: #eef0f5;
  --border: #d6d9e3;
  --border-accent: #b7bccb;
  --text-primary: #11131a;
  --text-secondary: #3d4353;
  --text-dim: #6b7285;
  --accent: #7bd100;
  --accent-muted: rgba(123, 209, 0, 0.18);
  --accent-glow: rgba(123, 209, 0, 0.08);
}
```

### Tailwind Theme Integration

```css
@theme inline {
  --color-background:     var(--bg);
  --color-foreground:     var(--text-primary);
  --color-surface:        var(--bg-surface);
  --color-elevated:       var(--bg-elevated);
  --color-border:         var(--border);
  --color-border-accent:  var(--border-accent);
  --color-text-secondary: var(--text-secondary);
  --color-text-dim:       var(--text-dim);
  --color-accent:         var(--accent);
  --color-accent-muted:   var(--accent-muted);
  --color-accent-glow:    var(--accent-glow);
  --font-sans:            var(--font-geist-sans);
  --font-mono:            var(--font-geist-mono);
}
```

### Color Usage Rules

| Context                | Token             | Example class                         |
|------------------------|-------------------|---------------------------------------|
| Page background        | `--bg`            | `bg-[var(--bg)]`                      |
| Card/surface           | `--bg-surface`    | `bg-[var(--bg-surface)]`              |
| All borders/dividers   | `--border`        | `border-[var(--border)]`              |
| Primary text           | `--text-primary`  | `text-[var(--text-primary)]`          |
| Body/supporting text   | `--text-secondary`| `text-[var(--text-secondary)]`        |
| Labels, captions, meta | `--text-dim`      | `text-[var(--text-dim)]`              |
| Highlights, CTAs       | `--accent`        | `text-[var(--accent)]` / `bg-[var(--accent)]` |
| Selection highlight    | —                 | `::selection { background: rgba(200, 255, 0, 0.3); color: #000; }` |
| Error text             | —                 | `text-red-400`                        |

---

## 3. Typography

### Font Stack

```
Sans:  Geist (--font-geist-sans) → system-ui → -apple-system → sans-serif
Mono:  Geist Mono (--font-geist-mono)
```

Font smoothing is always on: `-webkit-font-smoothing: antialiased`.

### Scale

| Role               | Classes                                                              | Size         |
|---------------------|----------------------------------------------------------------------|--------------|
| **Display (H1)**    | `text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]` | 40px–88px fluid |
| **Section heading** | `text-3xl font-semibold tracking-tight sm:text-4xl`                  | 30px → 36px  |
| **Intro text**      | `text-2xl leading-relaxed tracking-tight sm:text-3xl`                | 24px → 30px  |
| **Card heading**    | `text-base font-semibold tracking-tight` or `text-xl`               | 16px / 20px  |
| **Body**            | `text-base leading-relaxed`                                          | 16px         |
| **Small body**      | `text-sm leading-relaxed`                                            | 14px         |
| **Section label**   | `font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]` | 10px    |
| **Nav link**        | `font-mono text-[11px] uppercase tracking-[0.15em]`                 | 11px         |
| **Button text**     | `font-mono text-[11px] font-medium uppercase tracking-[0.1em]`      | 11px         |
| **Decorative number** | `font-mono text-2xl font-light text-[var(--border-accent)]`       | 24px         |
| **Large decorative** | `font-mono text-3xl font-light text-[var(--border-accent)]`        | 30px         |
| **Terminal meta**   | `font-mono text-[10px] text-[var(--text-dim)]`                      | 10px         |
| **Copyright**       | `font-mono text-[10px] text-[var(--text-dim)]`                      | 10px         |

### Typography Rules

1. **Headings**: Always `font-semibold` with `tracking-tight` or tighter
2. **Labels**: Always `font-mono`, `uppercase`, `tracking-[0.15em]` to `tracking-[0.2em]`
3. **Body**: Always `leading-relaxed` for readability
4. **Numbers**: Always `font-mono`, zero-padded: `{String(i + 1).padStart(2, "0")}`
5. **Never round**: No `rounded-lg` on cards — all sharp corners throughout

---

## 4. Spacing System

### Section Rhythm

```
Standard section:   py-28 or py-32     (112px or 128px)
Hero section:       min-h-[90vh]       (90% viewport)
Container padding:  px-6 lg:px-10      (24px → 40px)
Max-width:          max-w-7xl          (80rem / 1280px)
```

### Spacing Scale (commonly used)

| Gap    | Pixels | Usage                             |
|--------|--------|-----------------------------------|
| gap-px | 1px    | Grid borders (gap-px + bg color)  |
| gap-1.5| 6px    | Tight elements (dots, icons)      |
| gap-2  | 8px    | Filter chips, small groups        |
| gap-4  | 16px   | Card grids, tight content         |
| gap-6  | 24px   | Content grids, medium spacing     |
| gap-8  | 32px   | Section sub-groups                |
| gap-12 | 48px   | Major content blocks              |
| gap-16 | 64px   | Split-column layouts              |

### Container Widths

| Width       | Usage                            |
|-------------|----------------------------------|
| `max-w-7xl` | Standard page content (1280px)   |
| `max-w-5xl` | Narrower content (proof console) |
| `max-w-4xl` | Hero text block                  |
| `max-w-3xl` | Intro paragraphs, about page     |
| `max-w-xl`  | Form containers                  |

### Dividers

Full-width section dividers between every major section:

```html
<div className="mx-6 border-t border-[var(--border)] lg:mx-10" />
```

---

## 5. Layout Patterns

### Section Template

Every section follows this structure:

```tsx
<section className="px-6 py-28 lg:px-10">
  <div className="mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

### Two-Column Asymmetric (Primary Pattern)

Used for Problem, Approach, Engagement, Contact, Principles:

```tsx
<div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
  <div>
    <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
      Label
    </span>
    <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
      Title
    </h2>
    <p className="text-base leading-relaxed text-[var(--text-primary)]">
      Body
    </p>
  </div>
  <div>
    {/* Supporting content: cards, lists, etc. */}
  </div>
</div>
```

Common column ratios: `[1.2fr_1fr]`, `[1fr_1.2fr]`, `[1fr_1.4fr]`, `[1fr_1.3fr]`, `[2fr_1fr]`, `[1fr_2fr]`, `[1fr_1fr]`.

### Card Grid with Border Effect

Cards separated by 1px borders using `gap-px` and parent background:

```tsx
<div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
  {items.map(item => (
    <div className="group relative bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-surface)]">
      <span className="mb-8 block font-mono text-3xl font-light text-[var(--border-accent)]">
        01
      </span>
      <h3 className="mb-3 text-base font-semibold tracking-tight">Title</h3>
      <p className="text-xs leading-relaxed text-[var(--text-dim)]">Description</p>
      {/* Bottom accent bar on hover */}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
    </div>
  ))}
</div>
```

### Standard Card Grid

```tsx
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item, i) => (
    <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <span className="mb-3 block font-mono text-xs text-[var(--accent)]">
        {String(i + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-3 text-base font-semibold tracking-tight text-[var(--text-primary)]">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {item.description}
      </p>
    </div>
  ))}
</div>
```

### Numbered List with Hover

```tsx
<div className="flex flex-col">
  {items.map((item, i) => (
    <div className="group flex items-center gap-6 border-b border-[var(--border)] py-6">
      <span className="font-mono text-2xl font-light text-[var(--border-accent)] transition-colors group-hover:text-[var(--accent)]">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="text-base text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
        {item}
      </span>
    </div>
  ))}
</div>
```

### Bullet List with Accent Dash

```tsx
<ul className="space-y-4">
  {items.map(item => (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-primary)]">
      <span className="mt-2 block h-px w-4 shrink-0 bg-[var(--accent)]" />
      {item}
    </li>
  ))}
</ul>
```

---

## 6. Component Patterns

### Navigation

```
Container:  fixed top-0 z-50, bg with 90% opacity + backdrop-blur-xl
Links:      font-mono 11px uppercase, tracking 0.15em
Active:     text-[var(--accent)] with animated underline (layoutId)
Mobile:     AnimatePresence + height/opacity animation
Hamburger:  3 × h-px w-6 spans, rotate on open
```

### Buttons

**Primary (filled):**
```tsx
<button className="border border-[var(--accent)] bg-[var(--accent)] px-8 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]">
```

**Secondary (outline):**
```tsx
<button className="border border-[var(--border)] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-dim)] transition-all hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]">
```

**Ghost (accent outline):**
```tsx
<button className="border border-[var(--accent)] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg)]">
```

All buttons: sharp corners (no border-radius), monospace, uppercase, wide letter-spacing.

### Filter Chips

```tsx
<button className={`border px-5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all ${
  active
    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]"
    : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]"
}`}>
```

### Form Inputs

Borderless style — only a bottom border:

```tsx
<input className="w-full border-b border-[var(--border)] bg-transparent px-0 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]" />
```

Labels: `font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]`

### Terminal/Console UI

```tsx
{/* Header bar with status dots */}
<div className="mb-8 flex items-center gap-3 border-b border-[var(--border)] pb-4">
  <div className="flex gap-1.5">
    <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
  </div>
  <span className="font-mono text-[10px] text-[var(--text-dim)]">
    tapas://proof-console
  </span>
</div>

{/* Console entry */}
<div className="group border-l-2 border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-l-[var(--accent)] sm:p-8">
  <div className="mb-5 flex items-center gap-4">
    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">SIG_01</span>
    <span className="h-px flex-1 bg-[var(--border)]" />
    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]">Domain</span>
  </div>
</div>
```

---

## 7. Animation

### Framer Motion Presets

**Fade + Rise (cards, content blocks):**
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.5, delay: i * 0.1 }}
```

**Simple Fade (list items):**
```tsx
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true, margin: "-30px" }}
transition={{ duration: 0.4, delay: i * 0.08 }}
```

**Slide Horizontal (filter transitions):**
```tsx
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 20 }}
transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
```

**Collapse/Expand (mobile menu):**
```tsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
```

### Custom Easing

```
[0.22, 1, 0.36, 1]  — Snappy entrance, smooth settle (used everywhere)
```

### CSS Transitions

| Property | Duration | Usage |
|----------|----------|-------|
| `transition-colors` | default | Text/border color changes |
| `transition-all` | default | Button hover inversions |
| `transition-all duration-300` | 300ms | Hamburger icon morph |
| `transition-all duration-500` | 500ms | Bottom accent bar expand |

### Key Rules

- `viewport={{ once: true }}` — Never re-trigger on scroll back
- Stagger delay: `delay: i * 0.08` to `i * 0.1` for lists
- Keep durations between 0.3s–0.5s — never slower

---

## 8. Visual Effects

### Film Grain Overlay

Applied via `grain` class on `<body>`:

```css
.grain::before {
  content: "";
  position: fixed;
  inset: -50%;
  width: 200%; height: 200%;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  opacity: 0.02;
  pointer-events: none;
  z-index: 9999;
  animation: grain 8s steps(10) infinite;
}
```

Adds subtle texture to the entire page. Keep opacity at 0.02 — any higher feels distracting.

### GridField (Interactive Canvas)

- **Dot grid**: 60px spacing, 1px default radius
- **Cursor aura**: 300px influence radius, dots grow to 3.5px, turn lime
- **Connection lines**: Drawn between dots within 180px of cursor, 0.06 alpha
- **Glow**: Radial gradient centered on cursor, 250px radius
- **Colors**: `rgba(200, 255, 0, ...)` for accent dots, `rgba(240, 240, 245, ...)` for neutral
- **Scroll**: Subtle sine/cosine drift on dot positions

### Backdrop Blur

Navigation uses semi-transparent background + blur:

```
bg-[var(--bg)]/90 backdrop-blur-xl
```

### Hero Gradient Fade

Bottom of hero fades into page background:

```tsx
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
```

---

## 9. Responsive Strategy

### Breakpoints

| Breakpoint | Width  | Key Changes                                    |
|------------|--------|------------------------------------------------|
| Base       | 0px    | Single column, px-6, smaller text              |
| `sm:`      | 640px  | 2-column grids, text size bumps                |
| `md:`      | 768px  | Desktop nav visible, mobile menu hidden         |
| `lg:`      | 1024px | 3-4 column grids, px-10, asymmetric layouts    |

### Responsive Text

```
Hero H1:    clamp(2.5rem, 7vw, 5.5rem)   — fluid, no breakpoints needed
H2:         text-3xl → sm:text-4xl        — 30px to 36px
Intro:      text-2xl → sm:text-3xl        — 24px to 30px
```

### Responsive Grids

```
Pillars:    1 col → sm:2 col → lg:4 col
Values:     1 col → sm:3 col → lg:5 col
Cards:      1 col → sm:2 col → lg:3 col
Asymmetric: stacked → lg:grid-cols-[ratio]
```

---

## 10. SEO & Structured Data

### Metadata Pattern

Each page exports metadata with canonical URL:

```tsx
export const metadata = {
  title: "Page — TapasNGS",
  description: siteContent.section.intro,
  alternates: { canonical: "/page-slug" },
};
```

### Structured Data Component

Reusable JSON-LD injection:

```tsx
<StructuredData data={{
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Page Title",
  description: "...",
  url: `${meta.siteUrl}/page-slug`,
}} />
```

### Root Layout

Contains Organization + WebSite schemas in `<script type="application/ld+json">` tags.

---

## 11. Design Principles (Summary)

1. **Sharp, not rounded** — No border-radius on cards, buttons, or containers
2. **Monospace for system voice** — Labels, buttons, numbers, meta text all use `font-mono`
3. **Lime accent is surgical** — Used sparingly for active states, highlights, results
4. **Asymmetric grids** — Avoid centered/symmetrical layouts; use weighted column ratios
5. **Numbered everything** — Zero-padded indices (01, 02, 03) for lists, cards, values
6. **Borders as structure** — 1px borders define space, `gap-px` technique for card grids
7. **Restrained motion** — 0.3–0.5s, once-only viewport triggers, staggered delays
8. **Editorial section rhythm** — Every section has a tiny uppercase mono label above the heading
9. **Minimal surface variation** — Only 3 background levels: bg, surface, elevated
10. **Text hierarchy through opacity** — primary / secondary / dim rather than size changes
