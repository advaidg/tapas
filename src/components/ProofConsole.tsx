"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent, Domain } from "@/content/site-content";

const domains: ("All" | Domain)[] = [
  "All",
  "AI",
  "Platform",
  "Quality",
  "Data",
];

export default function ProofConsole() {
  const [filter, setFilter] = useState<"All" | Domain>("All");
  const { signals } = siteContent.proof;

  const filtered =
    filter === "All" ? signals : signals.filter((s) => s.domain === filter);

  return (
    <div>
      {/* Terminal header bar */}
      <div className="mb-8 flex items-center gap-3 border-b border-[var(--border)] pb-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-dim)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        </div>
        <span className="font-mono text-[10px] text-[var(--text-dim)]">
          tapas://proof-console
        </span>
      </div>

      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`border px-5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all ${
              filter === d
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Signal entries */}
      <div className="space-y-px">
        <AnimatePresence mode="popLayout">
          {filtered.map((signal) => (
            <motion.div
              key={signal.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group border-l-2 border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-l-[var(--accent)] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
                  SIG_{signal.id}
                </span>
                <span className="h-px flex-1 bg-[var(--border)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                  {signal.domain}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                    <span className="h-px w-3 bg-[var(--text-dim)]" />
                    Context
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {signal.context}
                  </p>
                </div>
                <div>
                  <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                    <span className="h-px w-3 bg-[var(--text-dim)]" />
                    Action
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                    {signal.action}
                  </p>
                </div>
                <div>
                  <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]/60">
                    <span className="h-px w-3 bg-[var(--accent)]/40" />
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-[var(--accent)]">
                    {signal.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
