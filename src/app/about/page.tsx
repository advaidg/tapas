import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "About — TapasNGS",
  description: siteContent.about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { intro, values, beliefs, whoWeWorkWith, closing } = siteContent.about;
  const { meta } = siteContent;

  return (
    <section className="px-6 py-32 2xl:py-28 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About — TapasNGS",
          description: intro,
          url: `${meta.siteUrl}/about`,
        }}
      />
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px]">
        {/* Hero intro */}
        <div className="mb-24 max-w-none">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            About
          </span>
          <p className="max-w-none text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl text-justify">
            {intro}
          </p>
        </div>

        {/* Values */}
        <div className="mb-32">
          <span className="mb-12 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Values
          </span>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 xl:grid-cols-5">
            {values.map((value, i) => {
              const parts = value.split(" — ");
              const title = parts[0] ?? value;
              const detail = parts.slice(1).join(" — ");
              return (
              <div
                key={value}
                className="group bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-surface)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-lg font-light text-[var(--border-accent)] transition-colors group-hover:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
                    {title}
                  </span>
                </div>
                {detail && (
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {detail}
                  </p>
                )}
              </div>
              );
            })}
          </div>
        </div>

        {/* Beliefs */}
        <div className="mb-28 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Beliefs
            </span>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              Our work sits at the intersection of AI, software, and reliability—where clarity and discipline matter most.
            </p>
          </div>
          <div className="grid gap-4">
            {beliefs.map((belief, i) => (
              <div
                key={belief}
                className="flex items-center gap-4 border border-[var(--border)] bg-[var(--bg-surface)] p-5"
              >
                <span className="font-mono text-sm text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--text-primary)]">
                  {belief}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mb-28">
          <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
            Who we work with
          </span>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 xl:grid-cols-4">
            {whoWeWorkWith.map((item, i) => (
              <div key={item} className="bg-[var(--bg)] p-6 sm:p-8">
                <span className="mb-4 block font-mono text-sm text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="border-t border-[var(--border)] pt-12">
          <p className="max-w-xl text-lg font-medium leading-relaxed text-[var(--text-primary)]">
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
