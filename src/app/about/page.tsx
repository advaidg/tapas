import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "About — TapasNGS",
};

export default function AboutPage() {
  const { intro, values, beliefs, whoWeWorkWith, closing } = siteContent.about;

  return (
    <section className="px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Hero intro */}
        <div className="mb-32 max-w-3xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            About
          </span>
          <p className="text-2xl leading-relaxed tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {intro}
          </p>
        </div>

        {/* Values */}
        <div className="mb-32">
          <span className="mb-12 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Values
          </span>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
            {values.map((value, i) => (
              <div
                key={value}
                className="group bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-surface)]"
              >
                <span className="mb-6 block font-mono text-2xl font-light text-[var(--border-accent)] transition-colors group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Beliefs */}
        <div className="mb-32 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
              Beliefs
            </span>
            <p className="text-xl leading-relaxed tracking-tight text-[var(--text-primary)]">
              Our work sits at the intersection of AI, cloud, quality, and data\u2014where complexity is real and discipline matters most.
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
        <div className="mb-32">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Who we work with
          </span>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
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
        <div className="border-t border-[var(--border)] pt-16">
          <p className="max-w-xl text-xl font-medium leading-relaxed tracking-tight text-[var(--text-primary)]">
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
