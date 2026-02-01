import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "niotap — TapasNGS",
  description: siteContent.product.oneLiner,
  alternates: { canonical: "/niotap" },
};

export default function NiotapPage() {
  const { meta, product } = siteContent;

  return (
    <section className="px-6 py-32 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.oneLiner,
          brand: "Tapas Next Gen Systems",
          url: `${meta.siteUrl}/niotap`,
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Product
          </span>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-[var(--text-primary)]">
            {product.tagline}
          </p>
          <p className="text-base leading-relaxed text-[var(--text-secondary)]">
            {product.oneLiner}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              What it solves
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-primary)]">
              {product.whatItSolves}
            </p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)]">
              Why it&apos;s different
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]">
              {product.differentiation}
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-12">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.howItWorks.map((step, i) => (
              <div
                key={step}
                className="border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <span className="mb-3 block font-mono text-xs text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-12">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">
            Key capabilities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 border border-[var(--border)] bg-[var(--bg-surface)] p-6"
              >
                <span className="mt-2 block h-px w-5 shrink-0 bg-[var(--accent)]" />
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-12">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">
            Who it&apos;s for
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.audiences.map((audience, i) => (
              <div
                key={audience}
                className="border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <span className="mb-3 block font-mono text-xs text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Positioning inside TapasNGS
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--text-primary)]">
            {product.positioning}
          </p>
        </div>
      </div>
    </section>
  );
}
