"use client";

import { useState } from "react";
import { FadeUp } from "@/components/site/fade-up";

type FormData = {
  name: string;
  business: string;
  email: string;
  city: string;
};

type Status = "idle" | "submitting" | "ok" | "error";

export function GbpAudit() {
  const [form, setForm] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    city: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const formspreeUrl = process.env.NEXT_PUBLIC_AUDIT_FORM_URL;

  function update<K extends keyof FormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.business) return;
    setStatus("submitting");

    if (formspreeUrl) {
      try {
        const res = await fetch(formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...form,
            source: "kollaborate.ca free GBP audit",
          }),
        });
        if (res.ok) {
          setStatus("ok");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: open mailto with the data prefilled
    const subject = encodeURIComponent(
      `Free GBP audit request: ${form.business || "(no business name)"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nCity: ${form.city}\n\n--\nSubmitted from kollaborate.ca free audit form.`
    );
    window.location.href = `mailto:joseph@kollaborate.ca?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeUp className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent)] font-semibold">
                NOT READY TO BOOK?
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[48px] lg:text-[56px] max-w-[600px]">
              Get a free Google Business audit.
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
                See what you&apos;re leaving on the table.
              </span>
            </h2>
            <p className="mt-7 max-w-[560px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
              We&apos;ll pull your Google Business profile, run it against the
              local-search ranking signals that actually matter, and send a
              one-page report to your inbox within 24 hours. No sales
              follow-up unless you ask.
            </p>

            <ul className="mt-9 space-y-3.5 max-w-[560px]">
              {[
                "Profile completeness score",
                "Top 5 missing or weak ranking signals",
                "Review velocity vs your competitors",
                "Photo, post, and category gaps",
                "Three highest-impact fixes you can ship today",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3.5 text-[16px] sm:text-[17px] leading-[1.55] text-[var(--text)]"
                >
                  <Check />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="lg:col-span-6" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9 shadow-[0_20px_60px_-30px_rgba(34,69,56,0.2)]"
            >
              {status === "ok" ? (
                <div className="py-12 text-center">
                  <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-[var(--accent-bright)]/40">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-[var(--accent)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mt-7 font-display text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em]">
                    Got it. Audit on the way.
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.55] text-[var(--muted)] max-w-[400px] mx-auto">
                    You&apos;ll have a one-page report in your inbox within 24
                    hours. If anything jumps out, I&apos;ll flag it directly in
                    the email.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent)] font-semibold">
                      FREE · NO CREDIT CARD
                    </span>
                    <h3 className="mt-4 font-display text-[26px] sm:text-[30px] font-semibold tracking-[-0.02em] text-[var(--text)]">
                      Tell us about your business.
                    </h3>
                  </div>

                  <div className="mt-7 space-y-5">
                    <Field
                      label="Your name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                    />
                    <Field
                      label="Business name"
                      type="text"
                      autoComplete="organization"
                      required
                      value={form.business}
                      onChange={(v) => update("business", v)}
                    />
                    <Field
                      label="Email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(v) => update("email", v)}
                    />
                    <Field
                      label="City"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="e.g. Montreal, QC"
                      value={form.city}
                      onChange={(v) => update("city", v)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={
                      status === "submitting" ||
                      !form.email ||
                      !form.business ||
                      !form.name
                    }
                    className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 text-[16px] font-semibold text-[var(--text-inverse)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Send me my free audit →"}
                  </button>

                  {status === "error" && (
                    <p className="mt-4 text-[14px] text-[var(--danger)] leading-[1.5]">
                      Something went wrong submitting. Try again, or email{" "}
                      <a
                        href="mailto:joseph@kollaborate.ca"
                        className="underline underline-offset-2 font-medium"
                      >
                        joseph@kollaborate.ca
                      </a>{" "}
                      directly.
                    </p>
                  )}

                  <p className="mt-5 text-[12px] text-[var(--muted)] leading-[1.55]">
                    We&apos;ll only email you the audit. No sales sequence.
                    Unsubscribe whenever.
                  </p>
                </>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  autoComplete,
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] font-semibold mb-2">
        {label.toUpperCase()}
        {required && <span className="text-[var(--accent)]"> *</span>}
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-[16px] text-[var(--text)] placeholder:text-[var(--muted)]/60 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
      />
    </label>
  );
}

function Check() {
  return (
    <span
      aria-hidden
      className="mt-[3px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[var(--accent-bright)]/40"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[12px] w-[12px] text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8.5l3.25 3.25L13 5" />
      </svg>
    </span>
  );
}
