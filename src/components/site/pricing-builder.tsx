"use client";

import { useMemo, useState } from "react";

type Service = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  setupLow: number;
  setupHigh?: number;
};

const SERVICES: Service[] = [
  {
    id: "reviews",
    name: "Reviews pipeline",
    tagline: "Every paid ticket auto-asks for a Google review.",
    monthly: 199,
    setupLow: 300,
  },
  {
    id: "leads",
    name: "Lead follow-up",
    tagline: "60-second auto-reply, 2-hour human reply, every channel.",
    monthly: 299,
    setupLow: 400,
  },
  {
    id: "gbp",
    name: "Google Business profile",
    tagline: "3 posts a week, real photos, every review replied to.",
    monthly: 399,
    setupLow: 200,
  },
  {
    id: "site",
    name: "Website care",
    tagline: "Updates, seasonal pages, copy swaps, speed kept green.",
    monthly: 249,
    setupLow: 1500,
    setupHigh: 3500,
  },
  {
    id: "calls",
    name: "Voice agent",
    tagline: "AI picks up in under 2 rings. Books into your calendar.",
    monthly: 599,
    setupLow: 750,
  },
];

const BUNDLE_MONTHLY = 1500;
const BUNDLE_SETUP = 2500;

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function PricingBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allSelected = selected.size === SERVICES.length;

  const totals = useMemo(() => {
    const picked = SERVICES.filter((s) => selected.has(s.id));
    const piecedMonthly = picked.reduce((a, s) => a + s.monthly, 0);
    const piecedSetupLow = picked.reduce((a, s) => a + s.setupLow, 0);
    const piecedSetupHigh = picked.reduce(
      (a, s) => a + (s.setupHigh ?? s.setupLow),
      0
    );

    const useBundle = allSelected;
    const monthly = useBundle ? BUNDLE_MONTHLY : piecedMonthly;
    const setupLow = useBundle ? BUNDLE_SETUP : piecedSetupLow;
    const setupHigh = useBundle ? BUNDLE_SETUP : piecedSetupHigh;
    const bundleSaves = useBundle ? piecedMonthly - BUNDLE_MONTHLY : 0;

    return {
      monthly,
      setupLow,
      setupHigh,
      bundleSaves,
      pickedCount: picked.length,
    };
  }, [selected, allSelected]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const pickAll = () => setSelected(new Set(SERVICES.map((s) => s.id)));
  const clearAll = () => setSelected(new Set());

  const mailto = useMemo(() => {
    const picked = SERVICES.filter((s) => selected.has(s.id))
      .map((s) => s.name)
      .join(", ");
    const subject = picked
      ? `Kollaborate: interested in ${picked}`
      : "Kollaborate demo request";
    return `mailto:joseph@kollaborate.ca?subject=${encodeURIComponent(subject)}`;
  }, [selected]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
      {/* Service picker */}
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[14px] tracking-[0.18em] text-[var(--muted)] font-semibold">
            PICK WHAT YOU NEED
          </span>
          <div className="flex items-center gap-3 text-[14px]">
            <button
              type="button"
              onClick={pickAll}
              className="font-mono tracking-wide text-[var(--accent)] hover:underline underline-offset-4 cursor-pointer"
            >
              Select all
            </button>
            <span className="text-[var(--muted)]/40">·</span>
            <button
              type="button"
              onClick={clearAll}
              className="font-mono tracking-wide text-[var(--muted)] hover:text-[var(--text)] hover:underline underline-offset-4 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        <ul className="space-y-3.5">
          {SERVICES.map((s) => {
            const isOn = selected.has(s.id);
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => toggle(s.id)}
                  aria-pressed={isOn}
                  className={`group w-full text-left rounded-2xl border p-6 sm:p-7 transition-all duration-200 ease-out cursor-pointer ${
                    isOn
                      ? "border-[var(--accent-bright)] bg-[var(--accent-bright)]/15 shadow-[0_10px_36px_-18px_rgba(168,213,187,0.6)]"
                      : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent-bright)]/70 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                        isOn
                          ? "border-[var(--accent)] bg-[var(--accent)]"
                          : "border-[var(--border-strong)] bg-transparent group-hover:border-[var(--accent)]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className={`h-4 w-4 transition-opacity ${
                          isOn ? "opacity-100" : "opacity-0"
                        }`}
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5l3.25 3.25L13 5" />
                      </svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        <h4 className="font-display text-[20px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[var(--text)]">
                          {s.name}
                        </h4>
                        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                          <span className="font-display text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[var(--text)]">
                            ${s.monthly}
                          </span>
                          <span className="font-display text-[16px] text-[var(--muted)]">
                            /mo
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.5] text-[var(--muted)]">
                        {s.tagline}
                      </p>
                      <p className="mt-3 font-mono text-[13px] tracking-wide text-[var(--muted)]/85">
                        SETUP{" "}
                        {s.setupHigh
                          ? `$${fmt(s.setupLow)} to $${fmt(s.setupHigh)}`
                          : `$${fmt(s.setupLow)}`}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Running total */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28 rounded-2xl bg-[var(--bg-dark)] text-[var(--text-inverse)] p-7 sm:p-8 border border-[var(--accent-bright)]/30 shadow-[0_18px_50px_-14px_rgba(12,31,26,0.45)] overflow-hidden relative">
          <div className="absolute inset-0 grain-dark pointer-events-none" />
          <div className="relative z-10">
            <div>
              <span className="font-mono text-[13px] tracking-[0.18em] text-[var(--text-inverse)]/65 font-semibold">
                YOUR MONTHLY
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                {totals.pickedCount === 0 ? (
                  <span className="font-display text-[52px] sm:text-[64px] font-semibold tracking-[-0.04em] leading-none text-[var(--text-inverse)]/40">
                    $0
                  </span>
                ) : (
                  <>
                    <span className="font-display text-[58px] sm:text-[72px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent-bright)]">
                      ${fmt(totals.monthly)}
                    </span>
                    <span className="font-display text-[24px] text-[var(--text-inverse)]/65">
                      /mo
                    </span>
                  </>
                )}
              </div>

              {totals.pickedCount > 0 && (
                <p className="mt-4 text-[14px] text-[var(--text-inverse)]/70 leading-[1.55]">
                  Month to month. Cancel any time. No setup-fee lock-ins.
                </p>
              )}

              {allSelected && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent-bright)]/50 bg-[var(--accent-bright)]/15 px-3.5 py-1.5">
                  <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--accent-bright)] font-semibold">
                    FULL-STACK BUNDLE · ${fmt(totals.bundleSaves)}/MO OFF
                  </span>
                </div>
              )}
            </div>

            {/* Setup */}
            <div className="mt-7 pt-6 border-t border-[var(--border-on-dark)]">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--text-inverse)]/65 font-semibold">
                  ONE-TIME SETUP
                </span>
                <div className="font-display text-[24px] font-semibold tracking-[-0.02em] text-[var(--text-inverse)]">
                  {totals.pickedCount === 0
                    ? "$0"
                    : totals.setupHigh !== totals.setupLow
                    ? `$${fmt(totals.setupLow)} to $${fmt(totals.setupHigh)}`
                    : `$${fmt(totals.setupLow)}`}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={mailto}
              className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--accent-bright)] px-7 text-[16px] font-semibold text-[var(--bg-dark)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              {totals.pickedCount === 0
                ? "Pick a service to start →"
                : `Start with ${totals.pickedCount} service${
                    totals.pickedCount === 1 ? "" : "s"
                  } →`}
            </a>
            <p className="mt-5 font-mono text-[12px] tracking-wider text-[var(--text-inverse)]/55 font-medium text-center">
              MONTH TO MONTH · CANCEL ANYTIME
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
