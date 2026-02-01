import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Capabilities — TapasNGS",
};

export default function CapabilitiesPage() {
  const { intro, domains, notes } = siteContent.capabilities;

  return (
    <section className="px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 max-w-3xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Capabilities
          </span>
          <p className="text-2xl leading-relaxed tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {intro}
          </p>
        </div>

        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
          {domains.map((domain, i) => (
            <div
              key={domain.title}
              className="relative bg-[var(--bg)] p-10 sm:p-12"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-3xl font-light text-[var(--border-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold tracking-tight">
                  {domain.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-primary)]"
                  >
                    <span className="mt-2 block h-px w-4 shrink-0 bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Design stance
          </span>
          <div className="grid gap-4 sm:grid-cols-2">
            {notes.map((note, i) => (
              <div
                key={note}
                className="border border-[var(--border)] bg-[var(--bg-surface)] p-6"
              >
                <span className="mb-3 block font-mono text-xs text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
