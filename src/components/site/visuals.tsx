"use client";

/* Inline illustrative visuals per service. CSS/SVG only. */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CallVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl bg-[var(--bg-dark)] p-6 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-3 text-[var(--text-inverse)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent-bright)] animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider text-[var(--accent-bright)]">
            LIVE CALL · 00:47
          </span>
        </div>
        <div className="mt-2 space-y-2.5 font-mono text-[12px] leading-relaxed">
          <div className="flex gap-2">
            <span className="text-[var(--muted-dark)] shrink-0">CALLER</span>
            <span className="text-[var(--text-inverse)]/90">
              Hi, do you have any openings this week?
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--accent-bright)] shrink-0">AGENT</span>
            <span className="text-[var(--text-inverse)]/90">
              We have Tuesday 2pm or Thursday 10am. Which works?
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--muted-dark)] shrink-0">CALLER</span>
            <span className="text-[var(--text-inverse)]/90">Thursday 10.</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--accent-bright)] shrink-0">AGENT</span>
            <span className="text-[var(--text-inverse)]/90">
              Booked. You&apos;ll get a text confirmation.
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-end gap-0.5 h-8">
          {[3, 6, 4, 8, 5, 7, 3, 9, 4, 6, 5, 7, 4, 8, 3, 6, 5, 7, 4, 8].map(
            (h, i) => (
              <div
                key={i}
                style={{ height: `${h * 10}%` }}
                className="flex-1 rounded-sm bg-[var(--accent-bright)]/70"
              />
            )
          )}
        </div>
        <a
          href="#demo"
          className="mt-4 group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent-bright)]/40 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[var(--accent-bright)] px-4 py-2.5 font-mono text-[12px] tracking-[0.14em] font-semibold text-[var(--accent-bright)] transition-all"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
          TALK TO IT LIVE
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      </div>
    </div>
  );
}

export function ReviewVisual() {
  return (
    <div className="relative w-full">
      {/* iPhone frame */}
      <div className="mx-auto max-w-[300px] sm:max-w-[320px] rounded-[42px] bg-[#0c0c0e] p-[7px] shadow-[0_30px_80px_-30px_rgba(20,40,30,0.45),0_2px_0_rgba(255,255,255,0.04)_inset]">
        <div className="rounded-[36px] bg-[#fafafa] overflow-hidden">
          {/* Status bar */}
          <div className="relative h-9 px-7 flex items-center justify-between text-[12px] font-semibold text-[#0c0c0e] tabular-nums">
            <span>9:41</span>
            {/* Notch / dynamic island */}
            <span
              aria-hidden
              className="absolute left-1/2 top-1.5 -translate-x-1/2 h-6 w-[88px] rounded-full bg-[#0c0c0e]"
            />
            <span className="flex items-center gap-1.5">
              {/* signal */}
              <svg viewBox="0 0 18 11" className="h-2.5 w-3.5" fill="currentColor" aria-hidden>
                <rect x="0" y="7" width="3" height="4" rx="0.6" />
                <rect x="5" y="5" width="3" height="6" rx="0.6" />
                <rect x="10" y="2" width="3" height="9" rx="0.6" />
                <rect x="15" y="0" width="3" height="11" rx="0.6" />
              </svg>
              {/* wifi */}
              <svg viewBox="0 0 16 11" className="h-2.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M8 11a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zm0-4.2a3.4 3.4 0 0 1 2.4 1l1-1A4.8 4.8 0 0 0 8 5.4 4.8 4.8 0 0 0 4.6 6.8l1 1A3.4 3.4 0 0 1 8 6.8zm0-3.6a7 7 0 0 1 5 2.1l1-1A8.4 8.4 0 0 0 8 1.6a8.4 8.4 0 0 0-6 2.7l1 1A7 7 0 0 1 8 3.2z" />
              </svg>
              {/* battery */}
              <span className="ml-0.5 inline-flex items-center">
                <span className="relative h-[11px] w-[22px] rounded-[3px] border border-[#0c0c0e]/65">
                  <span className="absolute inset-y-[1.5px] left-[1.5px] right-[7px] rounded-[1.5px] bg-[#0c0c0e]" />
                </span>
                <span className="-ml-[1px] inline-block h-1.5 w-[1.5px] rounded-r-sm bg-[#0c0c0e]/65" />
              </span>
            </span>
          </div>

          {/* Conversation header */}
          <div className="relative flex flex-col items-center pt-3 pb-3 border-b border-black/5">
            {/* Back chevron */}
            <span
              aria-hidden
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center text-[#007aff]"
            >
              <svg viewBox="0 0 12 20" className="h-[18px] w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2L2 10l8 8" />
              </svg>
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff3b30] px-1.5 text-[11px] font-semibold text-white">
                12
              </span>
            </span>
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-[12px] font-semibold text-white"
            >
              GC
            </span>
            <span className="mt-1.5 text-[11px] font-semibold text-[#0c0c0e] flex items-center gap-1">
              Golden Comfort
              <svg viewBox="0 0 10 6" className="h-2 w-2 text-[#8a8a8e]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                <path d="M1 1l4 4 4-4" />
              </svg>
            </span>
          </div>

          {/* Conversation */}
          <div className="px-3.5 pt-3 pb-4 space-y-1.5 bg-[#fafafa]">
            <div className="text-center text-[10px] text-[#8a8a8e] py-1">
              <span className="font-semibold text-[#5a5a60]">Today</span> 2:22 PM
            </div>

            {/* Outgoing iMessage bubble (auto-sent from Golden Comfort) */}
            <div className="flex justify-end">
              <div className="max-w-[78%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                Hi Jamie, hope the furnace is running smooth. If you&apos;ve
                got 30 seconds, mind leaving us a quick Google review?
                <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 text-[11px] font-medium underline underline-offset-2">
                  g.page/r/gc
                </div>
              </div>
            </div>
            <div className="flex justify-end pr-1">
              <span className="text-[9.5px] text-[#8a8a8e] font-medium">
                Delivered
              </span>
            </div>

            {/* Incoming reply */}
            <div className="flex justify-start pt-1.5">
              <div className="max-w-[70%] rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-3 py-2 text-[12.5px] leading-[1.35] text-[#0c0c0e]">
                Just left it. 5 stars, you guys saved us.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After-state proof block, sits below the phone */}
      <div className="mt-5 mx-auto max-w-[320px] rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[26px] font-semibold tracking-[-0.03em] leading-none text-[var(--text)]">
            4.9
          </span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill="#F5B800"
                className="h-3 w-3"
              >
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
            ))}
          </div>
        </div>
        <span className="font-mono text-[10px] text-[var(--muted)] text-right leading-tight">
          up from 4.3
          <br />
          412 reviews · +47 last 30d
        </span>
      </div>
    </div>
  );
}

export function SiteVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-cream)] p-4 overflow-hidden">
      <div className="rounded-xl bg-[var(--card)] shadow-[0_1px_0_var(--border)] border border-[var(--border)] overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)] bg-[var(--bg)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B04B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="ml-2 flex-1 rounded-md bg-[var(--card)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)] border border-[var(--border)]">
            goldencomforthvac.ca
          </span>
        </div>

        {/* Site nav */}
        <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-[var(--border)]">
          <span className="font-display text-[10.5px] font-semibold tracking-[-0.01em]">
            Golden Comfort
          </span>
          <div className="hidden sm:flex gap-3 font-mono text-[8px] tracking-wider text-[var(--muted)]">
            <span>SERVICES</span>
            <span>AREAS</span>
            <span>ABOUT</span>
          </div>
          <span className="inline-flex h-[18px] items-center rounded bg-[var(--accent)] px-1.5 text-[8px] font-medium text-white">
            BOOK
          </span>
        </div>

        {/* Hero */}
        <div className="px-3.5 py-3.5">
          <div className="font-mono text-[8px] tracking-wider text-[var(--accent)]">
            HVAC · OTTAWA
          </div>
          <div className="mt-1 font-display text-[15.5px] font-semibold tracking-[-0.02em] leading-[1.15]">
            Ottawa&apos;s most booked
            <br />
            HVAC team.
          </div>
          <div className="mt-1.5 text-[10px] text-[var(--muted)] leading-relaxed">
            Furnace, AC, and emergency service across the National Capital
            Region. Licensed, insured, 24/7.
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-flex h-6 items-center rounded-md bg-[var(--accent)] px-2 text-[9.5px] font-medium text-white">
              Book a tech
            </span>
            <span className="inline-flex h-6 items-center rounded-md border border-[var(--border)] px-2 text-[9.5px] font-medium">
              Get a quote
            </span>
          </div>

          {/* Trust strip */}
          <div className="mt-3 flex items-center gap-2 pt-2 border-t border-[var(--border)]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  fill="#F5B800"
                  className="h-2.5 w-2.5"
                >
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                </svg>
              ))}
            </div>
            <span className="font-mono text-[8.5px] text-[var(--muted)]">
              4.9 · 482 reviews
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[8px] text-[var(--muted)]">
              <span>● 98 PERF</span>
              <span>● 100 A11Y</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentVisual() {
  const [managed, setManaged] = useState(false);

  const data = managed
    ? {
        rating: 4.9,
        reviews: 412,
        lastReview: "Today · 4h ago",
        lastPost: "Today",
        postsThisWeek: 3,
        photos: 84,
        views30d: "1,247",
        recentReview: {
          author: "Sarah K.",
          stars: 5,
          time: "4h ago",
          text: "Booked online at 11pm, tech here by 8am next day. Real responsive team.",
        },
      }
    : {
        rating: 3.4,
        reviews: 84,
        lastReview: "8 months ago",
        lastPost: "11 months ago",
        postsThisWeek: 0,
        photos: 12,
        views30d: "204",
        recentReview: {
          author: "Anonymous",
          stars: 2,
          time: "5 months ago",
          text: "Called twice, no answer. Had to use someone else.",
        },
      };

  // Star renderer: floor-based count of fully filled stars, half star for fractional.
  const fullStars = Math.floor(data.rating);
  const hasHalf = data.rating - fullStars >= 0.4;

  return (
    <div className="relative w-full">
      {/* Toggle */}
      <div
        className="mx-auto inline-flex w-full max-w-[360px] items-center rounded-full border border-[var(--border)] bg-[var(--bg)] p-1 mb-4"
        role="tablist"
        aria-label="Google Business Profile management state"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!managed}
          onClick={() => setManaged(false)}
          className={`flex-1 rounded-full px-3 py-2 text-[12px] font-semibold tracking-tight transition-all ${
            !managed
              ? "bg-[var(--text)] text-[var(--text-inverse)] shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          Without management
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={managed}
          onClick={() => setManaged(true)}
          className={`flex-1 rounded-full px-3 py-2 text-[12px] font-semibold tracking-tight transition-all ${
            managed
              ? "bg-[var(--accent)] text-white shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          With management
        </button>
      </div>

      {/* Mock Google Business Profile card */}
      <div
        className={`relative rounded-2xl border bg-white overflow-hidden transition-all duration-500 ${
          managed
            ? "border-[var(--accent)]/40 shadow-[0_24px_60px_-30px_rgba(34,69,56,0.45)]"
            : "border-[var(--border)] shadow-[0_8px_28px_-22px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* Header strip with Google logo dot pattern */}
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-[#5f6368] tracking-tight">
              Google
            </span>
            <span className="font-mono text-[10px] text-[#9aa0a6]">
              Business Profile
            </span>
          </div>
          {managed ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#fde7e9] px-2 py-0.5 text-[10px] font-semibold text-[#c5221f]">
              Stale
            </span>
          )}
        </div>

        {/* Business identity */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-baseline justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[15px] font-semibold text-[#202124] truncate">
                Golden Comfort HVAC
              </div>
              <div className="mt-0.5 text-[11px] text-[#5f6368]">
                HVAC contractor · Open 24 hours
              </div>
            </div>
            {managed && (
              <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#e6f4ea] px-2 py-0.5 text-[10px] font-semibold text-[#137333]">
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden>
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-1.2 11.5L3 7.7l1.4-1.4 2.4 2.4 5-5L13.2 5l-6.4 6.5z" />
                </svg>
                Verified
              </span>
            )}
          </div>

          {/* Rating */}
          <AnimatePresence mode="wait">
            <motion.div
              key={managed ? "m-rating" : "u-rating"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="font-display text-[24px] font-semibold tracking-[-0.02em] leading-none text-[#202124] tabular-nums">
                {data.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => {
                  const filled = i <= fullStars;
                  const half = !filled && i === fullStars + 1 && hasHalf;
                  return (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id={`half-${i}-${managed}`}>
                          <stop offset="50%" stopColor="#F5B800" />
                          <stop offset="50%" stopColor="#dadce0" />
                        </linearGradient>
                      </defs>
                      <path
                        fill={
                          filled
                            ? "#F5B800"
                            : half
                            ? `url(#half-${i}-${managed})`
                            : "#dadce0"
                        }
                        d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                      />
                    </svg>
                  );
                })}
              </div>
              <span className="ml-1 text-[12px] text-[#1a73e8] font-medium tabular-nums">
                ({data.reviews})
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Stat strip */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Photos", value: data.photos },
              { label: "Posts/wk", value: data.postsThisWeek },
              { label: "Views/mo", value: data.views30d },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-black/5 bg-[#f8f9fa] px-2.5 py-2"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${stat.label}-${managed}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22 }}
                    className="text-[15px] font-semibold text-[#202124] tabular-nums leading-none"
                  >
                    {stat.value}
                  </motion.div>
                </AnimatePresence>
                <div className="mt-1 text-[9px] uppercase tracking-wider text-[#5f6368] font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="mt-4 rounded-lg border border-black/5 bg-[#fafafa] px-3 py-2.5">
            <div className="flex items-center justify-between text-[10px] text-[#5f6368] uppercase tracking-wider font-mono">
              <span>Last review</span>
              <span className={managed ? "text-[#137333] font-semibold" : ""}>
                {data.lastReview}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`review-${managed}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="mt-2"
              >
                <div className="flex items-center gap-1.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)]/15 text-[9px] font-semibold text-[var(--accent)]">
                    {data.recentReview.author.charAt(0)}
                  </span>
                  <span className="text-[11px] font-medium text-[#202124]">
                    {data.recentReview.author}
                  </span>
                  <div className="flex gap-0.5 ml-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        fill={i <= data.recentReview.stars ? "#F5B800" : "#dadce0"}
                        className="h-2.5 w-2.5"
                      >
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-auto font-mono text-[9px] text-[#9aa0a6]">
                    {data.recentReview.time}
                  </span>
                </div>
                <p className="mt-1.5 text-[11.5px] leading-[1.4] text-[#3c4043]">
                  &ldquo;{data.recentReview.text}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Posts strip */}
          <div className="mt-3 flex items-center justify-between text-[10px] text-[#5f6368] uppercase tracking-wider font-mono">
            <span>Last post</span>
            <span className={managed ? "text-[#137333] font-semibold" : ""}>
              {data.lastPost}
            </span>
          </div>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`flex-1 aspect-[5/3] rounded-md border transition-all ${
                  managed
                    ? "border-black/5 bg-gradient-to-br from-[var(--accent-bright)]/40 to-[var(--accent)]/30"
                    : "border-black/5 bg-[#f1f3f4]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Helper hint */}
      <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-[var(--muted)]">
        TAP THE TOGGLE TO COMPARE
      </p>
    </div>
  );
}

export function EmailVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl bg-[var(--bg-dark)] p-6 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-wider text-[var(--accent-bright)]">
            LEAD INBOX · NEW
          </span>
          <span className="font-mono text-[11px] text-[var(--text-inverse)]/60">
            replied in 47s
          </span>
        </div>
        <div className="mt-4 rounded-xl border border-[var(--border-on-dark)] bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--accent-bright)] font-mono">
              ← INCOMING
            </span>
            <span className="text-[var(--text-inverse)]/50 font-mono">
              14:03
            </span>
          </div>
          <div className="mt-2 text-[12px] text-[var(--text-inverse)]/90 leading-relaxed">
            &quot;Need a quote for a roof inspection before end of month.&quot;
          </div>
          <div className="mt-1 text-[10px] text-[var(--text-inverse)]/50">
            sarah.m@gmail.com
          </div>
        </div>
        <div className="mt-2 rounded-xl border border-[var(--accent-bright)]/30 bg-[var(--accent-bright)]/[0.06] p-4">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--accent-bright)] font-mono">
              → AUTO-REPLY
            </span>
            <span className="text-[var(--text-inverse)]/50 font-mono">
              14:04
            </span>
          </div>
          <div className="mt-2 text-[12px] text-[var(--text-inverse)]/90 leading-relaxed">
            Hi Sarah. Thanks for reaching out. I&apos;ve booked you into our
            inspection slot Wed 3pm. Calendar invite sent.
          </div>
        </div>
      </div>
    </div>
  );
}
