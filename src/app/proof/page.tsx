import Image from "next/image";
import ProofConsole from "@/components/ProofConsole";
import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Proof — TapasNGS",
  description: siteContent.proof.intro,
  alternates: { canonical: "/proof" },
};

export default function ProofPage() {
  const { meta } = siteContent;
  const { product } = siteContent;

  return (
    <section className="px-6 py-32 2xl:py-28 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Proof — TapasNGS",
          description: siteContent.proof.intro,
          url: `${meta.siteUrl}/proof`,
        }}
      />
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            {siteContent.proof.title}
          </span>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Signals from real engagements.
          </h1>
          <p className="mb-4 text-base text-[var(--text-primary)]">
            Context, action, result. No fluff.
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {siteContent.proof.intro}
          </p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-16 flex flex-wrap items-center gap-4 border border-[var(--border)] bg-[var(--bg-surface)] px-6 py-4 no-underline transition-colors hover:border-[var(--accent)]"
        >
          <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Flagship product
          </span>
          <div className="h-6 w-px bg-[var(--border)]" />
          <Image src="/orepli.png" alt="Orepli" width={96} height={64} className="h-7 w-auto" />
          <span className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
            {product.name}
          </span>
          <span className="hidden h-4 w-px bg-[var(--border)] sm:block" />
          <span className="text-sm text-[var(--text-primary)]">
            {product.tagline}
          </span>
          <span className="ml-auto font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            orepli.com →
          </span>
        </a>
        <ProofConsole />

        <div className="mt-24 border-t border-[var(--border)] pt-16">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Example outcomes
          </span>
          <div className="grid gap-6 lg:grid-cols-3 2xl:grid-cols-4">
            {siteContent.proof.narratives.map((item) => (
              <div
                key={item.title}
                className="border border-[var(--border)] bg-[var(--bg-surface)] p-6"
              >
                <h3 className="mb-3 text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
                <p className="text-sm font-medium text-[var(--accent)]">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
