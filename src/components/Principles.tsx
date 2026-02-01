"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site-content";

export default function Principles() {
  const { title, items } = siteContent.home.principles;

  return (
    <section className="px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
              Principles
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>

          <div className="flex flex-col">
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-6 border-b border-[var(--border)] py-6 transition-colors"
              >
                <span className="font-mono text-2xl font-light text-[var(--border-accent)] transition-colors group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
