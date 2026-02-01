import Link from "next/link";
import GridField from "@/components/GridField";
import Pillars from "@/components/Pillars";
import Principles from "@/components/Principles";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export default function Home() {
  const {
    hero,
    proofTeaser,
    contactCta,
    problem,
    approach,
    engagement,
    product,
  } = siteContent.home;
  const { meta } = siteContent;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: meta.title,
          description: meta.description,
          url: meta.siteUrl,
        }}
      />
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <GridField />

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl">
            <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-dim)]">
              Tapas NextGen Systems
            </span>

            <h1
              className="mb-8 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
            >
              <span className="text-[var(--text-primary)]">Engineering, with discipline.</span>
              <br />
              <span className="text-[var(--accent)]">Intelligence, with rigor.</span>
            </h1>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
              {hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
              >
                {hero.ctas[0].label}
              </Link>
              <Link
                href="/capabilities"
                className="border border-[var(--border)] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-dim)] transition-all hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {hero.ctas[1].label}
              </Link>
            </div>

            <p className="mt-16 font-mono text-[10px] tracking-[0.2em] text-[var(--text-dim)]">
              {hero.microLine}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Systems We Build */}
      <Pillars />

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Problem We Solve */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Problem
              </span>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {problem.title}
              </h2>
              <p className="text-base leading-relaxed text-[var(--text-primary)]">
                {problem.body}
              </p>
            </div>
            <div className="border-l border-[var(--border)] pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-dim)]">
                Diagnosis
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {problem.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Our Approach */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Approach
              </span>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {approach.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {approach.body}
              </p>
            </div>
            <div className="grid gap-4">
              {approach.points.map((point, i) => (
                <div
                  key={point}
                  className="flex items-start gap-4 border border-[var(--border)] bg-[var(--bg-surface)] p-5"
                >
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Proof Teaser */}
      <section className="px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Proof
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {proofTeaser.title}
              </h2>
            </div>
            <div>
              <p className="mb-8 text-sm leading-relaxed text-[var(--text-secondary)]">
                {proofTeaser.body}
              </p>
              <Link
                href={proofTeaser.cta.href}
                className="inline-block border border-[var(--accent)] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg)]"
              >
                {proofTeaser.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Operating Principles */}
      <Principles />

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Engagement Model */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                How we work
              </span>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {engagement.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {engagement.body}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {engagement.items.map((item) => (
                <div
                  key={item}
                  className="border border-[var(--border)] bg-[var(--bg)] p-6"
                >
                  <p className="text-sm text-[var(--text-primary)]">{item}</p>
                </div>
              ))}
              <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 sm:col-span-2">
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {engagement.closing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Product Spotlight */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Product
              </span>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.title}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-[var(--text-primary)]">
                {product.body}
              </p>
              <Link
                href={product.cta.href}
                className="inline-block border border-[var(--accent)] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg)]"
              >
                {product.cta.label}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.highlights.map((item, i) => (
                <div
                  key={item}
                  className="border border-[var(--border)] bg-[var(--bg-surface)] p-6"
                >
                  <span className="mb-3 block font-mono text-xs text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-6 border-t border-[var(--border)] lg:mx-10" />

      {/* Contact CTA */}
      <section className="px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
                Get in touch
              </span>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {contactCta.title}
              </h2>
              <p className="text-sm text-[var(--text-dim)]">
                {contactCta.footerNote}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
