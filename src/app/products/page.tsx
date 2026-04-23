import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Products — TapasNGS",
  description: siteContent.products.intro,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const { meta, products, product, feegoat } = siteContent;

  return (
    <section className="px-6 py-32 2xl:py-28 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "TapasNGS Products",
          description: products.intro,
          url: `${meta.siteUrl}/products`,
          publisher: { "@type": "Organization", name: "TapasNGS", url: meta.siteUrl },
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "SoftwareApplication",
                name: product.name,
                description: product.oneLiner,
                url: product.url,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "SoftwareApplication",
                name: feegoat.name,
                description: feegoat.oneLiner,
                url: feegoat.url,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              },
            },
          ],
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

        {/* Product index cards */}
        <div className="mb-20 grid gap-4 lg:grid-cols-2">
          {[
            {
              name: product.name,
              tagline: product.tagline,
              badge: "AI · Conversations",
              href: product.url,
              logo: "/orepli.png",
              blurb: product.oneLiner,
              anchor: "#orepli",
            },
            {
              name: feegoat.name,
              tagline: feegoat.tagline,
              badge: "Payments · US & India",
              href: feegoat.url,
              logo: null,
              blurb: feegoat.oneLiner,
              anchor: "#feegoat",
            },
          ].map((p) => (
            <a
              key={p.name}
              href={p.anchor}
              className="group block border border-[var(--border)] bg-[var(--bg-surface)] p-8 transition-colors hover:border-[var(--accent)]"
            >
              <div className="mb-5 flex items-center gap-4">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={80}
                    className="h-7 w-auto"
                  />
                ) : (
                  <span className="font-mono text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                    {p.name}
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  {p.badge}
                </span>
              </div>
              <p className="mb-2 text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                {p.tagline}
              </p>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {p.blurb}
              </p>
              <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)] transition-opacity group-hover:opacity-80">
                View details ↓
              </span>
            </a>
          ))}
        </div>

        {/* ────────────────────────────────────────────────── */}
        {/* OREPLI */}
        {/* ────────────────────────────────────────────────── */}
        <div id="orepli" className="mb-24 scroll-mt-24 border-t border-[var(--border)] pt-14">
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
                  AI · Conversations
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
              <div className="border border-[var(--border)] bg-[var(--bg)] p-6">
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Channel 01 · Inbox
                </span>
                <h3 className="mb-2 text-base font-semibold tracking-tight">
                  Email agent
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Connect Gmail or any IMAP/SMTP inbox. Every message is classified, grounded against your KB, drafted, and auto-sent or queued for review.
                </p>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg)] p-6">
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Channel 02 · On-site
                </span>
                <h3 className="mb-2 text-base font-semibold tracking-tight">
                  Chat widget
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  One line of script on any site. Visitors get a grounded assistant drawing from the same KB, with AI-summarised escalation when it can&rsquo;t help.
                </p>
              </div>
            </div>
          </div>

          {/* Orepli capabilities */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Capabilities
            </span>
            <ul className="grid gap-3 text-sm leading-relaxed text-[var(--text-primary)] sm:grid-cols-2 lg:grid-cols-3">
              {product.capabilities.map((c) => (
                <li key={c} className="border border-[var(--border)] bg-[var(--bg)] p-4">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Orepli how it works */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
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

          {/* Orepli pricing */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
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
              Email traffic and chat traffic share one monthly token pool on every plan. No separate SKU, no per-conversation surcharge.
            </p>
          </div>

          {/* Orepli built for / differentiation */}
          <div className="grid gap-8 border-t border-[var(--border)] pt-10 lg:grid-cols-2">
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

          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
            >
              Visit orepli.com →
            </a>
          </div>
        </div>

        {/* ────────────────────────────────────────────────── */}
        {/* FEEGOAT */}
        {/* ────────────────────────────────────────────────── */}
        <div id="feegoat" className="mb-24 scroll-mt-24 border-t border-[var(--border)] pt-14">
          <div className="mb-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                  FeeGoat
                </span>
                <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Payments · US & India
                </span>
              </div>
              <h2 className="mb-3 text-3xl font-semibold tracking-tight">
                {feegoat.name}
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[var(--text-primary)]">
                {feegoat.tagline}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                {feegoat.oneLiner}
              </p>
              <a
                href={feegoat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
              >
                {feegoat.cta.label} →
              </a>
            </div>

            {/* Market cards */}
            <div className="grid gap-4">
              {feegoat.markets.map((market, i) => (
                <div
                  key={market.region}
                  className="border border-[var(--border)] bg-[var(--bg)] p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")} · {market.region}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight">
                    {market.method}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {market.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FeeGoat capabilities */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Capabilities
            </span>
            <ul className="grid gap-3 text-sm leading-relaxed text-[var(--text-primary)] sm:grid-cols-2 lg:grid-cols-3">
              {feegoat.capabilities.map((c) => (
                <li key={c} className="border border-[var(--border)] bg-[var(--bg)] p-4">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* FeeGoat how it works */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              How it works
            </span>
            <ol className="space-y-3 text-sm leading-relaxed text-[var(--text-primary)]">
              {feegoat.howItWorks.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* FeeGoat pricing */}
          <div className="mb-10 border-t border-[var(--border)] pt-10">
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Plans
            </span>
            <div className="grid gap-4 lg:grid-cols-3">
              {feegoat.plans.map((p) => (
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
              Free plan includes Zelle and UPI collection with no FeeGoat markup on direct bank transfers. Paid plans unlock unlimited roster size, WhatsApp reminders, and advanced analytics.
            </p>
          </div>

          {/* FeeGoat built for / differentiation */}
          <div className="grid gap-8 border-t border-[var(--border)] pt-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                Built for
              </span>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-primary)]">
                {feegoat.audiences.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                Why it&rsquo;s different
              </span>
              <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                {feegoat.differentiation}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--border)] pt-10">
            <div className="flex flex-wrap gap-3">
              <a
                href={feegoat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
              >
                Visit feegoat.com →
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

        {/* Closing CTA */}
        <div className="border-t border-[var(--border)] pt-14">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-end">
            <div>
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                Two products. One engineering philosophy.
              </span>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                Orepli and FeeGoat are built on the same foundation: grounded AI, auditability by default, and zero hidden fees. Both prove that operational rigor isn&rsquo;t a premium feature&mdash;it&rsquo;s the baseline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://orepli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--border)] px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                orepli.com ↗
              </a>
              <a
                href="https://feegoat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--border)] px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                feegoat.com ↗
              </a>
              <a
                href="/contact"
                className="inline-block border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)]"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
