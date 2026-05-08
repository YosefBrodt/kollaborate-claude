"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/site/fade-up";

type Inputs = {
  callsPerMonth: number;
  avgTicket: number;
  missedPct: number;
};

const DEFAULTS: Inputs = {
  callsPerMonth: 120,
  avgTicket: 280,
  missedPct: 28,
};

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtMoney(n: number) {
  return "$" + fmt(Math.round(n));
}

const PICKUP_RATE = 0.85;
const CLOSE_RATE = 0.3;

export function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);

  const out = useMemo(() => {
    const missedPerMonth = inputs.callsPerMonth * (inputs.missedPct / 100);
    const recoveredPerMonth = missedPerMonth * PICKUP_RATE;
    const recoveredJobsPerMonth = recoveredPerMonth * CLOSE_RATE;
    const recoveredRevenuePerYear = recoveredJobsPerMonth * inputs.avgTicket * 12;
    const monthlyRevenue = (recoveredRevenuePerYear / 12);
    const fullStackAnnual = 17988;
    const payback = recoveredRevenuePerYear / fullStackAnnual;

    return {
      missedPerMonth,
      recoveredPerMonth,
      recoveredJobsPerMonth,
      recoveredRevenuePerYear,
      monthlyRevenue,
      payback,
    };
  }, [inputs]);

  function update<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section
      id="math"
      className="relative bg-[var(--bg-cream)] py-20 sm:py-24 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeUp className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-mono text-[15px] tracking-[0.2em] font-bold text-[var(--accent)]">
                THE MATH
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px]">
              What missed calls
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)] tracking-[-0.015em]">
                actually cost you.
              </span>
            </h2>
            <p className="mt-7 max-w-[480px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
              Drag the sliders. The number on the right is the revenue we
              recover for a typical client at this volume. Gross, before our fee.
            </p>

            <div className="mt-9 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
              <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--accent)] font-bold">
                WHY 85%?
              </span>
              <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[var(--muted)]">
                That is our average pickup rate on missed calls across live
                clients. The other 15% are wrong-numbers, robocalls, and
                language-mismatches we route to a human.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-7" delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-[0_24px_70px_-32px_rgba(20,40,30,0.25)]">
              <div className="space-y-7">
                <Slider
                  label="Inbound calls / month"
                  value={inputs.callsPerMonth}
                  min={20}
                  max={800}
                  step={5}
                  onChange={(v) => update("callsPerMonth", v)}
                  suffix="calls"
                />
                <Slider
                  label="Average ticket value"
                  value={inputs.avgTicket}
                  min={50}
                  max={2000}
                  step={10}
                  onChange={(v) => update("avgTicket", v)}
                  prefix="$"
                />
                <Slider
                  label="% missed today"
                  value={inputs.missedPct}
                  min={0}
                  max={60}
                  step={1}
                  onChange={(v) => update("missedPct", v)}
                  suffix="%"
                />
              </div>

              <div className="mt-8 pt-7 border-t border-[var(--border)]">
                <div className="grid grid-cols-2 gap-y-2 font-mono text-[12px] sm:text-[13px] tracking-[0.14em] text-[var(--muted)]">
                  <span>YOU MISS</span>
                  <span className="text-right text-[var(--text)] font-semibold">
                    ≈ {fmt(out.missedPerMonth)} calls / mo
                  </span>
                  <span>WE RECOVER</span>
                  <span className="text-right text-[var(--text)] font-semibold">
                    ≈ {fmt(out.recoveredPerMonth)} calls / mo
                  </span>
                </div>
              </div>

              <div className="mt-7">
                <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.16em] text-[var(--muted)] font-bold">
                  RECOVERED REVENUE / YEAR
                </div>
                <motion.div
                  key={Math.round(out.recoveredRevenuePerYear / 100)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="mt-2 font-display text-[44px] sm:text-[60px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent)] tabular-nums"
                >
                  {fmtMoney(out.recoveredRevenuePerYear)}
                </motion.div>
                <p className="mt-3 text-[14px] sm:text-[15px] text-[var(--muted)]">
                  {fmtMoney(out.monthlyRevenue)} / mo · pays for Full Stack{" "}
                  {out.payback.toFixed(1)}x over.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
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
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-[15px] sm:text-[16px] font-semibold text-[var(--text)]">
          {label}
        </label>
        <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[var(--text)] tabular-nums">
          {prefix}
          {fmt(value)}
          {suffix && (
            <span className="ml-1.5 text-[12px] text-[var(--muted)]">
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
    </div>
  );
}
