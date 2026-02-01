import ProofConsole from "@/components/ProofConsole";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Proof — TapasNGS",
};

export default function ProofPage() {
  return (
    <section className="px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
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
        <ProofConsole />

        <div className="mt-24 border-t border-[var(--border)] pt-16">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Example outcomes
          </span>
          <div className="grid gap-6 lg:grid-cols-3">
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
