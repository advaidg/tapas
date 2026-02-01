import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Privacy — TapasNGS",
  description: siteContent.privacy.intro,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const { title, intro, items } = siteContent.privacy;
  const { meta } = siteContent;

  return (
    <section className="px-6 py-32 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy — TapasNGS",
          description: intro,
          url: `${meta.siteUrl}/privacy`,
        }}
      />
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
          Legal
        </span>
        <h1 className="mb-16 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mb-12 text-base leading-relaxed text-[var(--text-primary)]">
          {intro}
        </p>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-6 border-b border-[var(--border)] pb-8"
            >
              <span className="font-mono text-xl font-light text-[var(--border-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-[var(--text-primary)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
