"use client";

import { FadeUp } from "@/components/site/fade-up";

type Row = {
  label: string;
  inHouse: string;
  diy: string;
  us: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    label: "Monthly cost",
    inHouse: "~$5,000 loaded",
    diy: "$400 to $1,200",
    us: "$1,499 (Full Stack)",
    highlight: true,
  },
  {
    label: "Time to live",
    inHouse: "30+ days hire + train",
    diy: "Weeks of integration",
    us: "7 to 10 days",
  },
  {
    label: "Coverage",
    inHouse: "9 to 5, weekdays",
    diy: "Tool-dependent",
    us: "24 / 7 / 365",
    highlight: true,
  },
  {
    label: "Sick days, vacation, turnover",
    inHouse: "15 to 25 days/yr",
    diy: "N/A",
    us: "Zero",
  },
  {
    label: "Reviews captured per month",
    inHouse: "Whoever remembers",
    diy: "60 to 70% if disciplined",
    us: "100% of paid tickets",
    highlight: true,
  },
  {
    label: "Lead reply time",
    inHouse: "2 to 4 hours",
    diy: "Tool-defined",
    us: "Auto in 60s, human in 2hr",
  },
  {
    label: "Bilingual (EN/FR)",
    inHouse: "Hire two people",
    diy: "Extra add-ons",
    us: "Included on Multi-Loc",
  },
  {
    label: "Pairs with existing staff",
    inHouse: "It IS the staff",
    diy: "Limited, per tool",
    us: "Yes, runs as overflow / after-hours",
    highlight: true,
  },
  {
    label: "Hidden costs",
    inHouse: "Benefits, training, churn",
    diy: "Per-tool fees, integration time",
    us: "None. One invoice.",
    highlight: true,
  },
];

export function Comparison() {
  return (
    <section className="bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>The honest comparison</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[960px]">
            How we stack up against
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              the other two ways to do this.
            </span>
          </h2>
          <p className="mt-7 max-w-[720px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Most local businesses are choosing between hiring a front-desk seat
            or duct-taping a stack of DIY tools. Here&apos;s the actual
            tradeoff.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 sm:mt-20 rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-[0_20px_60px_-30px_rgba(34,69,56,0.18)]">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
              <div className="hidden lg:block px-6 py-7 bg-[var(--bg-cream)]" />
              <ColumnHeader
                title="Hire in-house"
                sub="Front-desk seat"
                tone="muted"
              />
              <ColumnHeader
                title="DIY tools"
                sub="Podium / Birdeye / Calendly stack"
                tone="muted"
              />
              <ColumnHeader title="Kollaborate" sub="One team, one invoice" tone="featured" />
            </div>

            {/* Rows */}
            <div>
              {ROWS.map((row, i) => (
                <ComparisonRow key={row.label} row={row} isFirst={i === 0} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-[15px] sm:text-[16px] leading-[1.55] text-[var(--muted)] max-w-[620px]">
              Numbers based on typical Eastern Canadian SMB labor costs and
              standard local-service tooling stacks. Your mileage will vary,
              but the directional gap holds.
            </p>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-[15px] font-semibold text-[var(--text-inverse)] hover:bg-[var(--accent-hover)] transition-all whitespace-nowrap"
            >
              See the three tiers →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ColumnHeader({
  title,
  sub,
  tone,
}: {
  title: string;
  sub: string;
  tone: "muted" | "featured";
}) {
  return (
    <div
      className={`px-6 py-7 ${
        tone === "featured"
          ? "bg-[var(--accent)] text-[var(--text-inverse)]"
          : "bg-[var(--bg-cream)] text-[var(--text)]"
      }`}
    >
      <div
        className={`font-display text-[20px] sm:text-[22px] font-semibold tracking-[-0.015em] ${
          tone === "featured" ? "text-[var(--accent-bright)]" : "text-[var(--text)]"
        }`}
      >
        {title}
      </div>
      <div
        className={`mt-1.5 font-mono text-[12px] tracking-[0.14em] ${
          tone === "featured"
            ? "text-[var(--text-inverse)]/70"
            : "text-[var(--muted)]"
        }`}
      >
        {sub.toUpperCase()}
      </div>
    </div>
  );
}

function ComparisonRow({ row, isFirst }: { row: Row; isFirst: boolean }) {
  const { label, inHouse, diy, us, highlight } = row;
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)] ${
        isFirst ? "" : "border-t border-[var(--border)]"
      } ${highlight ? "bg-[var(--accent-bright)]/10" : ""}`}
    >
      <div className="px-6 py-5 lg:py-6">
        <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] font-semibold lg:hidden">
          DIMENSION
        </div>
        <div className="mt-1 lg:mt-0 font-display text-[16px] sm:text-[17px] font-semibold tracking-[-0.01em] text-[var(--text)]">
          {label}
        </div>
      </div>
      <Cell label="Hire in-house" value={inHouse} tone="muted" />
      <Cell label="DIY tools" value={diy} tone="muted" />
      <Cell label="Kollaborate" value={us} tone="featured" />
    </div>
  );
}

function Cell({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "muted" | "featured";
}) {
  return (
    <div className="px-6 py-5 lg:py-6">
      <div className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] font-semibold lg:hidden">
        {label.toUpperCase()}
      </div>
      <div
        className={`mt-1 lg:mt-0 text-[16px] sm:text-[17px] leading-[1.45] ${
          tone === "featured"
            ? "text-[var(--accent)] font-semibold"
            : "text-[var(--text)]/85"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-12 bg-[var(--accent)]" />
      <span className="font-mono text-[15px] tracking-[0.2em] font-semibold text-[var(--accent)]">
        {children}
      </span>
    </div>
  );
}
