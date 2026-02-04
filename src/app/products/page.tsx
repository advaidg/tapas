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
          "@type": "CollectionPage",
          name: "Products — TapasNGS",
          description: products.intro,
          url: `${meta.siteUrl}/products`,
        }}
      />
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px]">
        <div className="mb-20 max-w-3xl">
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

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <Image src="/niotap.png" alt="niotap" width={120} height={32} />
              <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
                Flagship
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight">
              {product.name}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-[var(--text-primary)]">
              {product.oneLiner}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {product.differentiation}
            </p>
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

        <div className="mt-16 border-t border-[var(--border)] pt-10">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
            {product.positioning}
          </p>
          <a
            href={products.cta.href}
            className="inline-block border border-[var(--accent)] px-8 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            {products.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
