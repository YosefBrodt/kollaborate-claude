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
        <div className="mt-3 flex items-center gap-[3px] h-10">
          {Array.from({ length: 28 }).map((_, i) => {
            const variants = [0.7, 1.0, 0.85, 1.15, 0.95, 1.05, 0.8];
            const dur = 0.85 + variants[i % variants.length] * 0.45;
            const delay = ((i * 0.073) % 1.4).toFixed(2);
            return (
              <span
                key={i}
                className="block flex-1 h-full rounded-full bg-[var(--accent-bright)] animate-voice-wave"
                style={{
                  animationDuration: `${dur}s`,
                  animationDelay: `${delay}s`,
                  opacity: 0.45 + (i % 4) * 0.15,
                }}
              />
            );
          })}
        </div>
        <a
          href="#demo"
          className="mt-4 group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)]/15 hover:bg-[var(--accent-bright)] border border-[var(--accent-bright)]/60 hover:border-[var(--accent-bright)] px-4 py-2.5 font-mono text-[12px] tracking-[0.14em] font-semibold text-[var(--accent-bright)] hover:text-[var(--bg-dark)] transition-all duration-200 animate-breathe-pulse hover:-translate-y-0.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-bright)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] group-hover:bg-[var(--bg-dark)]" />
          </span>
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
    <div className="relative w-full">
      {/* Macbook-style window */}
      <div className="rounded-2xl overflow-hidden bg-[#1a1d1b] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.5)] border border-black/20">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1a1d1b] border-b border-black/40">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 flex items-center gap-1.5 rounded-md bg-[#0a0b0a] px-2.5 py-1 font-mono text-[10px] text-white/65 border border-white/5">
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 text-[#10b981] shrink-0" fill="currentColor" aria-hidden>
              <path d="M5 7V5a3 3 0 1 1 6 0v2h1v7H4V7h1zm1 0h4V5a2 2 0 0 0-4 0v2z" />
            </svg>
            <span className="truncate">goldencomforthvac.ca</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[9px] text-white/45 px-2 py-0.5 rounded bg-white/5 border border-white/10">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            0.8s
          </span>
        </div>

        {/* Site content */}
        <div className="bg-white">
          {/* Top nav */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/5">
            <div className="flex items-center gap-1.5">
              <span className="grid h-5 w-5 place-items-center rounded bg-[var(--accent)] text-white text-[10px] font-bold">
                G
              </span>
              <span className="font-display text-[12px] font-semibold tracking-[-0.01em] text-[#0d1f1a]">
                Golden Comfort
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden sm:inline font-mono text-[8.5px] tracking-[0.14em] text-[#5f6368] font-semibold">
                SERVICES · AREAS · ABOUT
              </span>
              <span className="inline-flex h-6 items-center rounded-md bg-[var(--accent)] px-2.5 text-[9.5px] font-semibold text-white">
                BOOK A TECH
              </span>
            </div>
          </div>

          {/* Hero with gradient + radial accent */}
          <div className="relative px-4 py-5 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #d0e8db 0%, #f8f5e8 55%, #f3ebd0 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 78% 20%, rgba(34,69,56,0.22), transparent 60%)",
              }}
            />
            {/* Decorative HVAC silhouette icon */}
            <svg
              aria-hidden
              viewBox="0 0 64 64"
              className="absolute right-3 bottom-3 h-16 w-16 text-[var(--accent)]/15"
              fill="currentColor"
            >
              <path d="M10 14h44a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4zm2 6v18h40V20H12zm6 4h6v4h-6v-4zm10 0h6v4h-6v-4zm10 0h6v4h-6v-4zM18 32h6v4h-6v-4zm10 0h6v4h-6v-4zm10 0h6v4h-6v-4z" />
            </svg>
            <div className="relative">
              <div className="font-mono text-[8.5px] tracking-[0.16em] text-[var(--accent)] font-semibold">
                HVAC · OTTAWA · 24/7 EMERGENCY
              </div>
              <div className="mt-1.5 font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.025em] leading-[1.05] text-[#0d1f1a]">
                Ottawa&apos;s most booked
                <br />
                HVAC team.
              </div>
              <div className="mt-2 text-[10.5px] text-[#3c4043] leading-snug max-w-[260px]">
                Furnace, AC, and emergency service across the National Capital
                Region. Licensed, insured, 24/7.
              </div>
              <div className="mt-3.5 flex items-center gap-1.5">
                <span className="inline-flex h-7 items-center gap-1 rounded-md bg-[var(--accent)] px-2.5 text-[10px] font-semibold text-white">
                  Book a tech →
                </span>
                <span className="inline-flex h-7 items-center rounded-md border border-[var(--accent)]/40 bg-white px-2.5 text-[10px] font-semibold text-[var(--accent)]">
                  Get a quote
                </span>
              </div>
              <div className="mt-3.5 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="#F5B800" className="h-2.5 w-2.5">
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
                <span className="font-mono text-[8.5px] text-[#5f6368] font-medium">
                  4.9 · 482 Google reviews
                </span>
              </div>
            </div>
          </div>

          {/* Service tile row */}
          <div className="px-4 pt-3 pb-4 grid grid-cols-3 gap-1.5">
            {[
              { name: "Furnace", icon: "🔥" },
              { name: "Air conditioning", icon: "❄" },
              { name: "Emergency", icon: "⚡" },
            ].map((s) => (
              <div
                key={s.name}
                className="rounded-md border border-black/5 bg-[#fafafa] px-2 py-2"
              >
                <div className="font-display text-[10px] font-semibold tracking-[-0.01em] text-[#0d1f1a] truncate">
                  {s.name}
                </div>
                <div className="mt-0.5 font-mono text-[8px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                  VIEW →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lighthouse score chips below the window */}
      <div className="mt-4 flex items-center justify-center flex-wrap gap-1.5">
        {[
          { label: "PERFORMANCE", val: 98 },
          { label: "ACCESSIBILITY", val: 100 },
          { label: "BEST PRACTICES", val: 100 },
          { label: "SEO", val: 100 },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0c8a4e] text-[9px] font-bold text-white tabular-nums">
              {s.val}
            </span>
            <span className="font-mono text-[9px] tracking-[0.12em] text-[var(--muted)] font-semibold">
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[10px] tracking-wide text-[var(--muted)]">
        REAL LIGHTHOUSE TARGET ON EVERY BUILD
      </p>
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
        {/* Header strip with multicolor Google G */}
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
              <path fill="#4285F4" d="M22.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h6c-.3 1.4-1 2.6-2.2 3.4v2.8h3.6c2.1-2 3.3-4.9 3.3-8.1z" />
              <path fill="#34A853" d="M12 23c3 0 5.5-1 7.4-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2v2.9C3.9 20.6 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.7 14c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1V6.9H2C1.3 8.4 1 10.1 1 12s.3 3.6 1 5.1l3.7-3.1z" />
              <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2C17.5 2 15 1 12 1 7.7 1 3.9 3.4 2 6.9l3.7 2.9c.9-2.6 3.4-4.4 6.3-4.4z" />
            </svg>
            <span className="text-[11px] font-semibold text-[#5f6368] tracking-tight">
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
  const [autoReply, setAutoReply] = useState(false);

  return (
    <div className="relative w-full">
      {/* Toggle */}
      <div
        className="mx-auto inline-flex w-full max-w-[360px] items-center rounded-full border border-[var(--border)] bg-[var(--bg)] p-1 mb-4"
        role="tablist"
        aria-label="Auto-reply state"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!autoReply}
          onClick={() => setAutoReply(false)}
          className={`flex-1 rounded-full px-3 py-2 text-[12px] font-semibold tracking-tight transition-all ${
            !autoReply
              ? "bg-[var(--text)] text-[var(--text-inverse)] shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          Without auto-reply
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={autoReply}
          onClick={() => setAutoReply(true)}
          className={`flex-1 rounded-full px-3 py-2 text-[12px] font-semibold tracking-tight transition-all ${
            autoReply
              ? "bg-[var(--accent)] text-white shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          With auto-reply
        </button>
      </div>

      {/* iPhone frame — customer perspective texting the business */}
      <div className="mx-auto max-w-[300px] sm:max-w-[320px] rounded-[42px] bg-[#0c0c0e] p-[7px] shadow-[0_30px_80px_-30px_rgba(20,40,30,0.45),0_2px_0_rgba(255,255,255,0.04)_inset]">
        <div className="rounded-[36px] bg-[#fafafa] overflow-hidden">
          {/* Status bar */}
          <div className="relative h-9 px-7 flex items-center justify-between text-[12px] font-semibold text-[#0c0c0e] tabular-nums">
            <span>{autoReply ? "7:42" : "11:14"}</span>
            <span
              aria-hidden
              className="absolute left-1/2 top-1.5 -translate-x-1/2 h-6 w-[88px] rounded-full bg-[#0c0c0e]"
            />
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 18 11" className="h-2.5 w-3.5" fill="currentColor" aria-hidden>
                <rect x="0" y="7" width="3" height="4" rx="0.6" />
                <rect x="5" y="5" width="3" height="6" rx="0.6" />
                <rect x="10" y="2" width="3" height="9" rx="0.6" />
                <rect x="15" y="0" width="3" height="11" rx="0.6" />
              </svg>
              <svg viewBox="0 0 16 11" className="h-2.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M8 11a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zm0-4.2a3.4 3.4 0 0 1 2.4 1l1-1A4.8 4.8 0 0 0 8 5.4 4.8 4.8 0 0 0 4.6 6.8l1 1A3.4 3.4 0 0 1 8 6.8zm0-3.6a7 7 0 0 1 5 2.1l1-1A8.4 8.4 0 0 0 8 1.6a8.4 8.4 0 0 0-6 2.7l1 1A7 7 0 0 1 8 3.2z" />
              </svg>
              <span className="ml-0.5 inline-flex items-center">
                <span className="relative h-[11px] w-[22px] rounded-[3px] border border-[#0c0c0e]/65">
                  <span className="absolute inset-y-[1.5px] left-[1.5px] right-[7px] rounded-[1.5px] bg-[#0c0c0e]" />
                </span>
                <span className="-ml-[1px] inline-block h-1.5 w-[1.5px] rounded-r-sm bg-[#0c0c0e]/65" />
              </span>
            </span>
          </div>

          {/* Conversation header — the business name from customer perspective */}
          <div className="relative flex flex-col items-center pt-3 pb-3 border-b border-black/5">
            <span
              aria-hidden
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center text-[#007aff]"
            >
              <svg viewBox="0 0 12 20" className="h-[18px] w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2L2 10l8 8" />
              </svg>
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={autoReply ? "h-with" : "h-without"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center"
              >
                <span
                  aria-hidden
                  className={`grid h-9 w-9 place-items-center rounded-full text-[12px] font-semibold ${
                    autoReply
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[#9aa0a6] text-white"
                  }`}
                >
                  {autoReply ? "GC" : "?"}
                </span>
                <span className="mt-1.5 text-[11px] font-semibold text-[#0c0c0e] flex items-center gap-1">
                  {autoReply ? "Golden Comfort HVAC" : "Some HVAC place"}
                  <svg viewBox="0 0 10 6" className="h-2 w-2 text-[#8a8a8e]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Conversation */}
          <AnimatePresence mode="wait">
            {autoReply ? (
              <motion.div
                key="convo-with"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="px-3.5 pt-3 pb-4 space-y-1.5 bg-[#fafafa] min-h-[330px]"
              >
                <div className="text-center text-[10px] text-[#8a8a8e] py-1">
                  <span className="font-semibold text-[#5a5a60]">Today</span> 7:42 PM
                </div>

                {/* Customer outgoing */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                    Hey do you do emergency furnace repair? Mine just stopped.
                  </div>
                </div>

                {/* Business incoming — auto-reply */}
                <div className="flex justify-start pt-1">
                  <div className="max-w-[80%] rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-3 py-2 text-[12.5px] leading-[1.35] text-[#0c0c0e]">
                    Hi! Yes, 24/7. A tech can be there in 90 min. What&apos;s the
                    address?
                  </div>
                </div>
                <div className="flex justify-start pl-1">
                  <span className="text-[9px] text-[#8a8a8e] font-medium">
                    Auto-replied · 31s
                  </span>
                </div>

                {/* Customer outgoing again */}
                <div className="flex justify-end pt-1">
                  <div className="max-w-[78%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                    Wow that was fast — 124 Main St, Plateau
                  </div>
                </div>

                {/* Business incoming with calendar chip */}
                <div className="flex justify-start pt-1">
                  <div className="max-w-[80%] rounded-[18px] rounded-bl-[5px] bg-[#e9e9eb] px-3 py-2 text-[12.5px] leading-[1.35] text-[#0c0c0e]">
                    Booked. Calendar invite sent, ETA 9:15 PM.
                    <div className="mt-2 flex items-center gap-2 rounded-md bg-white/80 border border-black/10 px-2 py-1.5">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[var(--accent)]" fill="currentColor" aria-hidden>
                        <path d="M5 1v2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2V1h-1v2H6V1H5zm-2 4h10v2H3V5zm0 3h10v6H3V8z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-[#0c0c0e] truncate">
                          Furnace emergency · Tonight 9:15 PM
                        </div>
                        <div className="text-[9px] text-[#5f6368] truncate">
                          Calendar invite · 124 Main St
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer thank-you */}
                <div className="flex justify-end pt-1.5">
                  <div className="max-w-[70%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                    🙏 thank you, lifesaver
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="convo-without"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="px-3.5 pt-3 pb-4 space-y-1.5 bg-[#fafafa] min-h-[330px]"
              >
                <div className="text-center text-[10px] text-[#8a8a8e] py-1">
                  <span className="font-semibold text-[#5a5a60]">Yesterday</span> 7:42 PM
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                    Hey do you do emergency furnace repair? Mine just stopped.
                  </div>
                </div>

                <div className="text-center text-[10px] text-[#8a8a8e] py-1.5 pt-3">
                  <span className="font-semibold text-[#5a5a60]">Yesterday</span> 9:30 PM
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[40%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[14px] leading-[1.35] text-white">
                    ?
                  </div>
                </div>

                <div className="text-center text-[10px] text-[#8a8a8e] py-1.5 pt-3">
                  <span className="font-semibold text-[#5a5a60]">Today</span> 11:14 AM
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-[18px] rounded-br-[5px] bg-[#007aff] px-3 py-2 text-[12.5px] leading-[1.35] text-white">
                    going with someone else, sorry
                  </div>
                </div>

                <div className="flex justify-end pr-1 pt-0.5">
                  <span className="text-[9px] text-[#8a8a8e] font-medium">
                    Read 3 days ago
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Result chip beneath the phone */}
      <div className="mt-5 mx-auto max-w-[320px] rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={autoReply ? "result-with" : "result-without"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className="flex items-center justify-between w-full"
          >
            {autoReply ? (
              <>
                <div>
                  <div className="text-[13px] font-semibold text-[#0c8a4e]">
                    Lead caught · Job booked
                  </div>
                  <div className="mt-0.5 text-[11px] text-[var(--muted)] tabular-nums">
                    Reply in 31s · same evening service
                  </div>
                </div>
                <span className="font-display text-[24px] font-semibold tracking-[-0.02em] text-[var(--accent)] tabular-nums">
                  +$420
                </span>
              </>
            ) : (
              <>
                <div>
                  <div className="text-[13px] font-semibold text-[#c5221f]">
                    Lead lost · went to a competitor
                  </div>
                  <div className="mt-0.5 text-[11px] text-[var(--muted)] tabular-nums">
                    Avg lost lead · across 4 channels per week
                  </div>
                </div>
                <span className="font-display text-[24px] font-semibold tracking-[-0.02em] text-[#c5221f] tabular-nums">
                  −$420
                </span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Helper hint */}
      <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-[var(--muted)]">
        TAP THE TOGGLE TO SEE BOTH SIDES
      </p>
    </div>
  );
}
