import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site-content";

export default function Footer() {
  const { copyright, links } = siteContent.footer;

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px] flex-col gap-8 px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/tapas.png"
                alt="Tapas"
                width={64}
                height={22}
                className="logo-dark invert opacity-40 scale-110 origin-left"
              />
              <Image
                src="/tapas_lite.png"
                alt="Tapas"
                width={64}
                height={22}
                className="logo-light opacity-70 scale-110 origin-left"
              />
              <span className="hidden h-4 w-px bg-[var(--border)] sm:inline-block" />
              <span className="hidden font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)] sm:inline-block">
                Tapas NextGen Systems
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-[var(--text-dim)]">
              Modern AI and cloud systems. Built with discipline, delivered with rigor.
            </p>
          </div>

          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)] transition-colors hover:text-[var(--text-secondary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6">
          <span className="font-mono text-[10px] text-[var(--text-dim)]">
            {copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
