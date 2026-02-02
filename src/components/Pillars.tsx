"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site-content";

const iconMap: Record<string, string> = {
  AI: "01",
  Platform: "02",
  Quality: "03",
  Data: "04",
};

export default function Pillars() {
  const { title, intro, pillars } = siteContent.home.systems;

  return (
    <section className="relative px-6 py-32 2xl:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px]">
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
            What we build
          </span>
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {intro}
          </p>
        </div>

        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-surface)]"
            >
              <span className="mb-8 block font-mono text-3xl font-light text-[var(--border-accent)]">
                {iconMap[pillar.domain]}
              </span>
              <h3 className="mb-3 text-base font-semibold tracking-tight">
                {pillar.label}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-dim)]">
                {pillar.description}
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
