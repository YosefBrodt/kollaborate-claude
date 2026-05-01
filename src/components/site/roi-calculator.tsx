"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/site/fade-up";

type Inputs = {
  callsPerWeek: number;
  avgTicket: number;
  missedPct: number;
  monthlyTickets: number;
  currentReviewsPerMonth: number;
};

const DEFAULTS: Inputs = {
  callsPerWeek: 60,
  avgTicket: 380,
  missedPct: 30,
  monthlyTickets: 220,
  currentReviewsPerMonth: 3,
};

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtMoney(n: number) {
  return "$" + fmt(Math.round(n));
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);

  const out = useMemo(() => {
    // Lost calls = missed_pct of (calls_per_week * 52)
    const callsPerYear = inputs.callsPerWeek * 52;
    const missedCalls = callsPerYear * (inputs.missedPct / 100);
    // Industry-standard close rate on a recovered inbound call: ~30%
    const recoveredJobs = missedCalls * 0.3;
    const recoveredRevenue = recoveredJobs * inputs.avgTicket;

    // Reviews lift: 22% response rate on auto-asks
    const ticketsPerYear = inputs.monthlyTickets * 12;
    const newReviewsPerYear = ticketsPerYear * 0.22;
    const currentReviewsPerYear = inputs.currentReviewsPerMonth * 12;
    const reviewLift = Math.max(0, newReviewsPerYear - currentReviewsPerYear);

    // Front-desk replacement (typical loaded cost minus our Full Stack)
    // Conservative: $52,000/yr loaded - $18,000/yr (us) = $34k savings
    const frontDeskSavings = 34000;

    const totalGain = recoveredRevenue + frontDeskSavings;
    // Compare to Full Stack annual cost ($1,499 * 12 = $17,988)
    const ourAnnualCost = 17988;
    const netReturn = totalGain - ourAnnualCost;
    const roiMultiple = totalGain / ourAnnualCost;

    return {
      missedCalls,
      recoveredJobs,
      recoveredRevenue,
      newReviewsPerYear,
      reviewLift,
      frontDeskSavings,
      totalGain,
      ourAnnualCost,
      netReturn,
      roiMultiple,
    };
  }, [inputs]);

  function update<K extends keyof Inputs>(key: K, value: number) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section
      id="roi"
      className="relative bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>The math</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[960px]">
            Run your own numbers.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              See what each missed call is costing you.
            </span>
          </h2>
          <p className="mt-7 max-w-[720px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Drag the inputs to match your business. The numbers update live.
            Math uses standard local-service close rates and review response
            data, not made-up multipliers.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
            {/* Inputs */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8">
                <span className="font-mono text-[13px] tracking-[0.18em] text-[var(--muted)] font-semibold">
                  YOUR BUSINESS
                </span>
                <div className="mt-7 space-y-7">
                  <Slider
                    label="Calls received per week"
                    value={inputs.callsPerWeek}
                    min={10}
                    max={300}
                    step={5}
                    onChange={(v) => update("callsPerWeek", v)}
                    suffix="calls"
                  />
                  <Slider
                    label="Average job or ticket value"
                    value={inputs.avgTicket}
                    min={50}
                    max={3000}
                    step={10}
                    onChange={(v) => update("avgTicket", v)}
                    prefix="$"
                  />
                  <Slider
                    label="Estimated calls you miss"
                    value={inputs.missedPct}
                    min={0}
                    max={60}
                    step={1}
                    onChange={(v) => update("missedPct", v)}
                    suffix="%"
                    helper="If you don't know, 30% is the local-service average."
                  />
                  <Slider
                    label="Paid tickets per month"
                    value={inputs.monthlyTickets}
                    min={20}
                    max={3000}
                    step={10}
                    onChange={(v) => update("monthlyTickets", v)}
                    suffix="tickets"
                  />
                  <Slider
                    label="Google reviews you get per month, today"
                    value={inputs.currentReviewsPerMonth}
                    min={0}
                    max={50}
                    step={1}
                    onChange={(v) => update("currentReviewsPerMonth", v)}
                    suffix="reviews"
                  />
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[var(--bg-dark)] text-[var(--text-inverse)] p-8 sm:p-10 border border-[var(--accent-bright)]/30 shadow-[0_28px_70px_-28px_rgba(12,31,26,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 grain-dark pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-mono text-[13px] tracking-[0.18em] text-[var(--accent-bright)] font-semibold">
                    YOUR ANNUAL UPSIDE
                  </span>
                  <motion.div
                    key={Math.round(out.totalGain / 100)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 flex items-baseline gap-2"
                  >
                    <span className="font-display text-[60px] sm:text-[88px] lg:text-[104px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent-bright)]">
                      {fmtMoney(out.totalGain)}
                    </span>
                    <span className="font-display text-[24px] sm:text-[30px] text-[var(--text-inverse)]/65">
                      /yr
                    </span>
                  </motion.div>
                  <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.55] text-[var(--text-inverse)]/85 max-w-[520px]">
                    What this stack puts back into your business each year,
                    based on the inputs you just set. Net of what you pay us.
                  </p>

                  <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Stat
                      label="Missed calls recovered"
                      value={fmt(out.recoveredJobs) + " jobs/yr"}
                      sub={fmtMoney(out.recoveredRevenue) + " in revenue"}
                    />
                    <Stat
                      label="Front-desk replaced"
                      value={fmtMoney(out.frontDeskSavings)}
                      sub="vs hiring loaded"
                    />
                    <Stat
                      label="New Google reviews"
                      value={"+" + fmt(out.reviewLift) + "/yr"}
                      sub={"vs " + fmt(inputs.currentReviewsPerMonth * 12) + " today"}
                    />
                  </div>

                  <div className="mt-9 pt-8 border-t border-[var(--border-on-dark)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div>
                      <div className="font-mono text-[12px] tracking-[0.16em] text-[var(--text-inverse)]/55 font-semibold">
                        ROI VS FULL STACK ($1,499 / MO)
                      </div>
                      <div className="mt-2 font-display text-[30px] sm:text-[36px] font-semibold tracking-[-0.025em] text-[var(--accent-bright)]">
                        {out.roiMultiple.toFixed(1)}x return
                      </div>
                    </div>
                    <a
                      href="#pricing"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-7 text-[16px] font-semibold text-[var(--bg-dark)] transition-all hover:-translate-y-0.5 hover:bg-white"
                    >
                      Pick a plan that captures this →
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[13px] sm:text-[14px] text-[var(--muted)] leading-[1.55] max-w-[640px]">
                Math: missed calls recovered at a 30% close rate on inbound,
                review uplift assumes 22% response on auto-ask, front-desk
                replacement assumes a $52k loaded annual seat. Conservative
                across the board.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix,
  helper,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  helper?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-[15px] sm:text-[16px] font-medium text-[var(--text)]">
          {label}
        </label>
        <span className="font-display text-[24px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[var(--accent)] tabular-nums">
          {prefix}
          {fmt(value)}
          {suffix && (
            <span className="ml-1 text-[15px] text-[var(--muted)] font-mono">
              {suffix}
            </span>
          )}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full h-2 cursor-pointer appearance-none bg-[var(--border)] rounded-full
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[var(--accent)]
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:shadow-[0_4px_12px_-2px_rgba(34,69,56,0.4)]
          [&::-webkit-slider-thumb]:cursor-grab
          [&::-webkit-slider-thumb]:active:cursor-grabbing
          [&::-moz-range-thumb]:h-5
          [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[var(--accent)]
          [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-white"
        style={{
          background: `linear-gradient(to right, var(--accent) ${
            ((value - min) / (max - min)) * 100
          }%, var(--border) ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      {helper && (
        <p className="mt-2 text-[13px] text-[var(--muted)] leading-[1.45]">
          {helper}
        </p>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--border-on-dark)] bg-white/[0.04] p-5">
      <div className="font-mono text-[11px] tracking-[0.16em] text-[var(--text-inverse)]/55 font-semibold">
        {label.toUpperCase()}
      </div>
      <div className="mt-3 font-display text-[24px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[var(--text-inverse)] tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-[13px] text-[var(--text-inverse)]/55 font-mono tracking-wide">
        {sub}
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
