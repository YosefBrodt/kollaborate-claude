"use client";

import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/site/fade-up";

type Step = {
  id: string;
  title: string;
  time: string;
  short: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    id: "discover",
    title: "15-minute discovery call",
    time: "Day 0",
    short: "We listen, you ask. We run our voice agent live against your actual intake questions.",
    detail:
      "On the call we walk through your current setup, your busiest call types, the real bottleneck, and any tools you already pay for. Then we run our voice agent live against the exact intake questions your front desk fields every day. You judge the output yourself. If it isn't right for your business, you walk. No pressure, no follow-up sequence.",
  },
  {
    id: "build",
    title: "Kickoff and build",
    time: "Days 1 to 7",
    short: "Setup paid, we start building. Scripts, workflows, calendar, review pipeline.",
    detail:
      "Setup paid, we get to work. Your voice agent gets your scripts, your business hours, your pricing rules, and your escalation list. The review pipeline gets wired into your POS, PMS, or whatever system tracks paid tickets. Your website is built. Your Google Business profile is reorganized. You review each piece as it ships, and we iterate same-day.",
  },
  {
    id: "tune",
    title: "Soft launch and tuning",
    time: "Days 8 to 10",
    short: "Two-day live test. You listen in, flag anything weird, we tune on the fly.",
    detail:
      "We run the agent live for two days on a parallel forwarded number while your main line stays normal. You and your team listen in to recordings, flag anything that sounds off, and we tune the script in real time. Once you sign off on the quality, we port your main number and you go live.",
  },
  {
    id: "run",
    title: "We run it",
    time: "Ongoing",
    short: "Monthly Friday report. Slack stays open. We tune scripts, reply to reviews, update content.",
    detail:
      "Every Friday you get a clean monthly report: calls handled, reviews collected, leads worked, conversions tracked. Slack stays open. We proactively tune scripts when call patterns change, draft replies on every new review, and refresh your site copy and Google posts week to week. You stop touching it.",
  },
];

export function Process() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[900px]">
            From hello to live on your phones.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Ten days or less.
            </span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Click any step for what actually happens.
          </p>
        </FadeUp>

        <div className="mt-16 sm:mt-20">
          {/* Desktop: 4-column row with arrow connectors */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3">
            {STEPS.map((s, i) => (
              <Fragment key={s.id}>
                <ProcessCard
                  step={s}
                  open={openId === s.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === s.id ? null : s.id))
                  }
                />
                {i < STEPS.length - 1 && <ArrowConnector />}
              </Fragment>
            ))}
          </div>

          {/* Mobile + tablet: stacked cards, arrow between rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {STEPS.map((s) => (
              <ProcessCard
                key={`m-${s.id}`}
                step={s}
                open={openId === s.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === s.id ? null : s.id))
                }
              />
            ))}
          </div>

          {/* Detail panel below the row, full-width on desktop */}
          <AnimatePresence initial={false}>
            {openId && (
              <motion.div
                key="process-detail"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--card)] p-8 sm:p-10">
                  {(() => {
                    const step = STEPS.find((s) => s.id === openId);
                    if (!step) return null;
                    return (
                      <>
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                          <h3 className="font-display text-[24px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[var(--text)]">
                            {step.title}
                          </h3>
                          <span className="font-mono text-[14px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                            {step.time.toUpperCase()}
                          </span>
                        </div>
                        <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-[var(--text)] max-w-[820px]">
                          {step.detail}
                        </p>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  open,
  onToggle,
}: {
  step: Step;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={`card-base group h-full text-left rounded-2xl border bg-[var(--card)] p-6 sm:p-7 cursor-pointer transition-all duration-200 ${
        open
          ? "border-[var(--accent)] shadow-[0_14px_44px_-22px_rgba(34,69,56,0.4)]"
          : "border-[var(--border)] hover:border-[var(--accent)]/40 hover:-translate-y-0.5"
      }`}
    >
      <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--muted)] font-semibold">
        {step.time.toUpperCase()}
      </span>
      <h3 className="mt-4 font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-[1.2] text-[var(--text)]">
        {step.title}
      </h3>
      <p className="mt-4 text-[16px] leading-[1.55] text-[var(--muted)]">
        {step.short}
      </p>
      <span
        className={`mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] font-semibold transition-colors ${
          open ? "text-[var(--accent)]" : "text-[var(--muted)]/70 group-hover:text-[var(--accent)]"
        }`}
      >
        {open ? "OPEN" : "CLICK FOR DETAIL"}
        <span aria-hidden className={`transition-transform ${open ? "rotate-90" : ""}`}>
          →
        </span>
      </span>
    </button>
  );
}

function ArrowConnector() {
  return (
    <div className="self-center">
      <svg
        viewBox="0 0 32 16"
        className="h-4 w-8 text-[var(--accent)]/55"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2 8h26M22 3l5 5-5 5" />
      </svg>
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
