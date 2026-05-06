"use client";

type Tier = {
  id: string;
  name: string;
  positioning: string;
  monthly: number;
  setup: string;
  features: string[];
  highlight?: boolean;
  ctaLabel: string;
};

const TIERS: Tier[] = [
  {
    id: "foundation",
    name: "Foundation",
    positioning: "For solo operators getting their digital presence in order.",
    monthly: 749,
    setup: "$499 setup",
    features: [
      "Reviews pipeline (auto-ask after every paid ticket)",
      "Google Business profile, actively run",
      "Simple one-page website + monthly updates",
      "Monthly performance report",
      "Email + Slack support",
    ],
    ctaLabel: "Book a call about Foundation",
  },
  {
    id: "fullstack",
    name: "Full Stack",
    positioning: "The whole front-desk replaced. What most clients pick.",
    monthly: 1499,
    setup: "$1,999 setup",
    features: [
      "Everything in Foundation, plus:",
      "AI voice agent answering 24/7 (under 2 rings)",
      "Lead follow-up across web, email, IG, FB, TikTok",
      "Multi-page custom website built for your industry",
      "Show up in ChatGPT, Gemini & Perplexity",
      "Direct text/Slack line to me",
    ],
    highlight: true,
    ctaLabel: "Book a call about Full Stack",
  },
  {
    id: "multi",
    name: "Multi-Location",
    positioning: "For 2+ locations, franchises, or businesses needing custom fit.",
    monthly: 2995,
    setup: "Custom setup, scoped flat",
    features: [
      "Everything in Full Stack, plus:",
      "Multi-location voice agent with location routing",
      "Bilingual agents (EN/FR or EN/ES)",
      "Custom CRM, EMR, or POS integration",
      "Monthly AI citation tracking report",
      "Dedicated account lead, quarterly strategy review",
    ],
    ctaLabel: "Book a call about Multi-Location",
  },
];

const DEFAULT_BOOKING_URL =
  "https://calendly.com/joseph-kollaborate/kollaborate-discovery-call";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function buildBookingLink(tierId: string) {
  const base =
    process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=pricing&utm_content=${tierId}`;
}

export function PricingTiers() {
  return (
    <div>
      {/* Trust signals row */}
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-12">
        {[
          "30-day money-back guarantee",
          "Month to month, cancel any time",
          "No long contracts",
          "Direct line to the founder",
        ].map((label) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-[var(--muted)]"
          >
            <CheckGreen />
            {label}
          </span>
        ))}
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
        {TIERS.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>

      {/* Custom / single-service footer */}
      <div className="mt-12 text-center">
        <p className="text-[15px] sm:text-[16px] text-[var(--muted)] leading-[1.6]">
          Need just one piece, or a setup the tiers don&apos;t cover?{" "}
          <a
            href="mailto:joseph@kollaborate.ca?subject=Kollaborate%3A%20custom%20or%20single-service%20quote"
            className="text-[var(--accent)] underline underline-offset-4 decoration-2 hover:text-[var(--accent-hover)] font-semibold"
          >
            Email me for a flat custom quote
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const { id, name, positioning, monthly, setup, features, highlight, ctaLabel } = tier;
  return (
    <article
      className={`relative flex flex-col rounded-2xl p-6 sm:p-7 transition-all ${
        highlight
          ? "border-2 border-[var(--accent-bright)] bg-[var(--bg-dark)] text-[var(--text-inverse)] shadow-[0_24px_60px_-24px_rgba(12,31,26,0.45)] lg:scale-[1.02] lg:-mt-2 lg:mb-2"
          : "border border-[var(--border)] bg-[var(--card)] text-[var(--text)]"
      }`}
    >
      {/* Tier name + positioning */}
      <div>
        {highlight && (
          <div className="mb-2 text-[14px] sm:text-[15px] font-semibold text-[var(--accent-bright)]">
            Most popular
          </div>
        )}
        <h3
          className={`font-display text-[24px] sm:text-[26px] font-bold tracking-[-0.02em] ${
            highlight ? "text-[var(--accent-bright)]" : "text-[var(--text)]"
          }`}
        >
          {name}
        </h3>
        <p
          className={`mt-2 text-[14px] sm:text-[15px] leading-[1.5] ${
            highlight ? "text-[var(--text-inverse)]/75" : "text-[var(--muted)]"
          }`}
        >
          {positioning}
        </p>
      </div>

      {/* Price */}
      <div className="mt-4 pb-4 border-b border-[var(--border)]/40 lg:border-[currentColor]/10">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display text-[36px] sm:text-[42px] font-bold tracking-[-0.04em] leading-none ${
              highlight ? "text-[var(--accent-bright)]" : "text-[var(--text)]"
            }`}
          >
            ${fmt(monthly)}
          </span>
          <span
            className={`font-display text-[16px] ${
              highlight ? "text-[var(--text-inverse)]/65" : "text-[var(--muted)]"
            }`}
          >
            /mo
          </span>
        </div>
        <p
          className={`mt-2 font-mono text-[12px] tracking-wide font-bold ${
            highlight ? "text-[var(--text-inverse)]/70" : "text-[var(--muted)]/85"
          }`}
        >
          {setup.toUpperCase()}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-5 space-y-2.5 flex-1">
        {features.map((f, i) => {
          const isLead = i === 0 && f.includes("Everything in");
          return (
            <li
              key={f}
              className={`flex items-start gap-2.5 leading-[1.45] ${
                isLead
                  ? `text-[13px] sm:text-[14px] font-mono tracking-wide font-bold ${
                      highlight ? "text-[var(--accent-bright)]" : "text-[var(--accent)]"
                    } pb-0.5`
                  : `text-[14px] sm:text-[15px] font-medium ${
                      highlight ? "text-[var(--text-inverse)]/95" : "text-[var(--text)]"
                    }`
              }`}
            >
              {!isLead &&
                (highlight ? <CheckMint /> : <CheckGreen />)}
              <span>{f}</span>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <a
        href={buildBookingLink(id)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[14px] sm:text-[15px] font-bold transition-all hover:-translate-y-0.5 ${
          highlight
            ? "bg-[var(--accent-bright)] text-[var(--bg-dark)] hover:bg-white"
            : "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--text-inverse)]"
        }`}
      >
        {ctaLabel}
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

function CheckGreen() {
  return (
    <span
      aria-hidden
      className="mt-[3px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[var(--accent-bright)]/45"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[11px] w-[11px] text-[var(--accent)]"
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

function CheckMint() {
  return (
    <span
      aria-hidden
      className="mt-[3px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[var(--accent-bright)]/30 border border-[var(--accent-bright)]/50"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[11px] w-[11px] text-[var(--accent-bright)]"
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
