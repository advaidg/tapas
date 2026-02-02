import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site-content";

export default function Footer() {
  const { copyright, links } = siteContent.footer;

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Image
              src="/tapas.png"
              alt="Tapas"
              width={64}
              height={22}
              className="logo-dark mb-4 invert opacity-40 scale-110 origin-left"
            />
            <Image
              src="/tapas_lite.png"
              alt="Tapas"
              width={64}
              height={22}
              className="logo-light mb-4 opacity-70 scale-110 origin-left"
            />
            <p className="max-w-xs text-xs leading-relaxed text-[var(--text-dim)]">
              Modern AI and cloud systems. Built with discipline, delivered with rigor.
            </p>
          </div>

          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)] transition-colors hover:text-[var(--text-secondary)]"
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
