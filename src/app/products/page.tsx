import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Products — TapasNGS",
  description: siteContent.products.intro,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const { meta, products, product } = siteContent;

  return (
    <section className="px-6 py-32 2xl:py-28 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.oneLiner,
          url: product.url,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          publisher: { "@type": "Organization", name: "TapasNGS", url: meta.siteUrl },
          offers: {
            "@type": "Offer",
            price: "49",
            priceCurrency: "USD",
          },
        }}
      />
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Products
          </span>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {products.title}
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-primary)]">
            {products.intro}
          </p>
        </div>

        {/* Flagship hero card */}
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/orepli.png"
                alt={product.name}
                width={120}
                height={80}
                className="h-8 w-auto"
              />
              <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Flagship
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight">
              {product.name}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-[var(--text-primary)]">
              {product.tagline}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              {product.oneLiner}
            </p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              {product.cta.label} →
            </a>
          </div>

          <div className="grid gap-4">
            {products.highlights.map((item, i) => (
              <div
                key={item}
                className="border border-[var(--border)] bg-[var(--bg)] p-6"
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

        {/* Two-channel explainer */}
        <div className="mb-16 grid gap-4 border-t border-[var(--border)] pt-10 lg:grid-cols-2">
          <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-8">
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Channel 01 · Inbox
            </span>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight">
              Email agent
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              Connect Gmail or any IMAP/SMTP inbox. Every inbound message is
              classified, grounded against your KB, drafted, and either
              auto-sent above your confidence threshold or queued for review.
              Cited, logged, reversible.
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-primary)]">
              <li>· Gmail OAuth + IMAP/SMTP with encrypted credentials</li>
              <li>· Per-mailbox tone, KB scope, and escalation destination</li>
              <li>· Dead-letter queue for failed jobs</li>
            </ul>
          </div>

          <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-8">
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Channel 02 · On-site
            </span>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight">
              Chat widget
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              One line of script on any site. Visitors get a grounded assistant
              answering from the same KB your mailboxes use. When it can&rsquo;t
              help, the visitor escalates — Orepli emails your team an
              AI-generated summary of the conversation.
            </p>
            <pre className="overflow-x-auto border border-[var(--border)] bg-[var(--bg)] p-3 font-mono text-[11px] leading-relaxed text-[var(--text-primary)]">
{`<script src="https://orepli.com/widget.js"
  data-orepli-key="pk_live_…" async></script>`}
            </pre>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16 border-t border-[var(--border)] pt-10">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Capabilities
          </span>
          <ul className="grid gap-3 text-sm leading-relaxed text-[var(--text-primary)] sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((c) => (
              <li
                key={c}
                className="border border-[var(--border)] bg-[var(--bg)] p-4"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="mb-16 border-t border-[var(--border)] pt-10">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            How it works
          </span>
          <ol className="space-y-3 text-sm leading-relaxed text-[var(--text-primary)]">
            {product.howItWorks.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Pricing */}
        <div className="mb-16 border-t border-[var(--border)] pt-10">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Plans
          </span>
          <div className="grid gap-4 lg:grid-cols-3">
            {product.plans.map((p) => (
              <div
                key={p.tier}
                className="border border-[var(--border)] bg-[var(--bg-surface)] p-6"
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    {p.tier}
                  </span>
                  <span className="text-2xl font-semibold tracking-tight">
                    {p.price}
                    <span className="ml-1 text-xs font-normal text-[var(--text-secondary)]">
                      /mo
                    </span>
                  </span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[var(--text-primary)]">
                  {p.blurb}
                </p>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {p.includes}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-[var(--text-secondary)]">
            Email traffic and chat traffic share one monthly token pool on
            every plan. No separate SKU, no per-conversation surcharge.
          </p>
        </div>

        {/* Audiences + differentiation */}
        <div className="mb-16 grid gap-8 border-t border-[var(--border)] pt-10 lg:grid-cols-2">
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Built for
            </span>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-primary)]">
              {product.audiences.map((a) => (
                <li key={a}>· {a}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Why it&rsquo;s different
            </span>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]">
              {product.differentiation}
            </p>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 border-t border-[var(--border)] pt-10">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
            {product.positioning}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              Visit orepli.com →
            </a>
            <a
              href="/contact"
              className="inline-block border border-[var(--border)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
