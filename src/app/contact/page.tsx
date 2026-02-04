import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { siteContent } from "@/content/site-content";

export const metadata = {
  title: "Contact — TapasNGS",
  description: siteContent.contact.intro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { meta } = siteContent;

  return (
    <section className="px-6 py-32 2xl:py-28 lg:px-10">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — TapasNGS",
          description: siteContent.contact.intro,
          url: `${meta.siteUrl}/contact`,
        }}
      />
      <div className="mx-auto max-w-7xl 2xl:max-w-7xl 2xl:max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="mb-6 block font-mono text-[15px] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
              Contact
            </span>
            <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something that lasts.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-[var(--text-primary)]">
              {siteContent.contact.intro}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              {siteContent.contact.detail}
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-primary)]">
                {siteContent.home.contactCta.footerNote}
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-dim)]">
                {siteContent.contact.email}
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
