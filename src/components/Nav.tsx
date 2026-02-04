"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content/site-content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { links } = siteContent.nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/tapas.png"
              alt="Tapas"
              width={80}
              height={28}
              className="logo-dark invert scale-110 origin-left"
              priority
            />
            <Image
              src="/tapas_lite.png"
              alt="Tapas"
              width={80}
              height={28}
              className="logo-light scale-110 origin-left"
              priority
            />
            <span className="hidden h-5 w-px bg-[var(--border)] sm:inline-block" />
          </div>
          <span className="hidden max-w-[200px] font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)] transition-colors group-hover:text-[var(--text-secondary)] sm:inline-block">
            Tapas NextGen Systems
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                  pathname === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-dim)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--accent)]"
                  />
                )}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="relative h-8 w-8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-1 block h-px w-6 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "top-4 rotate-45" : "top-2.5"
              }`}
            />
            <span
              className={`absolute left-1 top-4 block h-px w-6 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-1 block h-px w-6 bg-[var(--text-secondary)] transition-all duration-300 ${
                mobileOpen ? "top-4 -rotate-45" : "top-[22px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-dim)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
