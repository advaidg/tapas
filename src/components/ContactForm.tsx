"use client";

import { useState, FormEvent } from "react";
import { siteContent } from "@/content/site-content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteContent.contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-[var(--accent)]/20 bg-[var(--accent-muted)] p-10 text-center">
        <p className="font-mono text-sm text-[var(--accent)]">
          Message received. We&apos;ll follow up with a clear next step.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full border-b border-[var(--border)] bg-transparent px-0 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]"
        >
          Company{" "}
          <span className="normal-case tracking-normal opacity-40">
            (optional)
          </span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={inputClasses}
          placeholder="Company name"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project or challenge"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 self-start border border-[var(--accent)] bg-[var(--accent)] px-8 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--accent)] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="mt-2 font-mono text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
