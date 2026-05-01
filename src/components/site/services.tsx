"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/site/fade-up";
import {
  CallVisual,
  ReviewVisual,
  SiteVisual,
  ContentVisual,
  EmailVisual,
} from "@/components/site/visuals";

type Service = {
  id: string;
  n: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  detail: string;
  result: string;
  Visual: React.ComponentType;
};

const SERVICES: Service[] = [
  {
    id: "calls",
    n: "01",
    eyebrow: "CALL HANDLING",
    title: "Your phone, answered every time.",
    bullets: [
      "Answers in your business voice (English or French)",
      "Books straight into Google Calendar, Cal.com, Square, or whatever you use",
      "Handles FAQs, pricing, and hours without a human",
      "Sends emergencies to your cell, with full transcript attached",
    ],
    detail:
      "A voice agent that learns your intake questions, your pricing, and your booking rules. It picks up in under two rings, day or night, takes the call in your voice, and books the appointment into your calendar before the customer hangs up. You stop losing jobs to whoever picked up first. Designed to handle 9 out of 10 calls without a human ever touching them.",
    result: "9 out of 10 calls handled without a human.",
    Visual: CallVisual,
  },
  {
    id: "reviews",
    n: "02",
    eyebrow: "REVIEW AUTOMATION",
    title: "Every happy customer becomes a review.",
    bullets: [
      "Text and email sent right after the visit, no staff effort",
      "4 and 5 star reviews go straight to Google",
      "Lower ratings come to you privately first, before they go public",
      "Drafts a reply in your voice for every review, ready to approve",
    ],
    detail:
      "Every appointment, ticket, or sale automatically kicks off a review request two hours later. Happy customers get asked to leave a Google review by text or email. Anyone rating below four stars lands on a private form that pings ownership first, so you can fix the problem before it costs you a public rating. You also get a clean dashboard showing the trend over the last 30, 60, and 90 days.",
    result: "Every paid ticket triggers a review ask, automatically.",
    Visual: ReviewVisual,
  },
  {
    id: "site",
    n: "03",
    eyebrow: "WEBSITE",
    title: "A site that actually converts.",
    bullets: [
      "Sub-second load times on any device",
      "Built for your industry, not a template",
      "Booking widget wired straight to the voice agent",
      "Monthly updates included: copy, pages, seasonal changes",
    ],
    detail:
      "Fast, professional, built for the industries you actually work in. Live in 7 to 10 days. Every page loads in under a second. You own the code and everything on it. Ready to rank on Google from day one with proper schema, sitemaps, and on-page SEO. Monthly updates mean we keep your hours, services, photos, and seasonal pages current so you never have to log in.",
    result: "Target 95+ Lighthouse on every build, every device.",
    Visual: SiteVisual,
  },
  {
    id: "gbp",
    n: "04",
    eyebrow: "GOOGLE BUSINESS PROFILE",
    title: "Your Google profile, actively run.",
    bullets: [
      "3 Google Business posts a week with real photos",
      "Categories, services, and hours kept tight for local search",
      "Every review gets a drafted reply within 24 hours",
      "Monthly report: views, calls, direction requests",
    ],
    detail:
      "The page where 80% of your local customers find you, treated like a living surface. Fresh posts every week with real photos from your business. Profile categories and services optimized so you show up in the right local searches. Every review reply drafted in your voice within 24 hours. You get a monthly report that ties calls and direction requests back to actual revenue.",
    result: "The page 80% of local customers see first, kept alive weekly.",
    Visual: ContentVisual,
  },
  {
    id: "leads",
    n: "05",
    eyebrow: "LEAD FOLLOW-UP",
    title: "Leads replied to in under a minute.",
    bullets: [
      "One inbox for web, email, Instagram, Facebook, TikTok",
      "60-second auto-reply on every channel",
      "2-hour real-human follow-up during business hours",
      "Old leads worked at 30, 60, and 90 days",
    ],
    detail:
      "Every web form, email, and DM gets a personalized reply in 60 seconds. A real person follows up within two hours during business hours. Old leads that never closed get fresh outreach at 30, 60, and 90 days, automatically. You stop watching warm leads cool off because nobody had time to write back.",
    result: "Auto-reply fires in under 60 seconds on every channel.",
    Visual: EmailVisual,
  },
];

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>What we run</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[960px]">
            Five services.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              One team running them.
            </span>
          </h2>
          <p className="mt-7 max-w-[720px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Each of these is already taking a seat on your team. We take the
            seat, work it 24/7, and charge less than the benefits alone would
            cost. Click any card for the full breakdown.
          </p>
        </FadeUp>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() =>
                setOpenId((prev) => (prev === s.id ? null : s.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  const { eyebrow, title, bullets, detail, result, Visual } = service;
  return (
    <motion.article
      layout
      onClick={onToggle}
      className={`card-base group relative cursor-pointer overflow-hidden rounded-2xl border bg-[var(--card)] p-7 sm:p-9 transition-shadow duration-200 ${
        open
          ? "border-[var(--accent)] shadow-[0_18px_60px_-24px_rgba(34,69,56,0.35)]"
          : "border-[var(--border)] hover:border-[var(--accent)]/40 hover:shadow-[0_12px_40px_-22px_rgba(34,69,56,0.25)]"
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={open}
    >
      <motion.div layout="position">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[15px] tracking-[0.16em] text-[var(--accent)] font-semibold">
            {eyebrow}
          </span>
          <span
            aria-hidden
            className={`grid h-9 w-9 place-items-center rounded-full border transition-all ${
              open
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--text-inverse)]"
                : "border-[var(--border-strong)] bg-transparent text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-200 ${
                open ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </div>

        <h3 className="mt-5 font-display font-semibold tracking-[-0.02em] leading-[1.1] text-[26px] sm:text-[30px] text-[var(--text)]">
          {title}
        </h3>

        <ul className="mt-7 space-y-3.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3.5 text-[17px] sm:text-[18px] leading-[1.5] text-[var(--text)] font-semibold"
            >
              <CheckGreen />
              <span className="font-normal">
                <strong className="font-semibold">{b}</strong>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-5 gap-7">
              <div className="sm:col-span-3">
                <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[var(--muted)]">
                  {detail}
                </p>
                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[var(--accent-bright)]/50 bg-[var(--accent-bright)]/25 px-5 py-2.5">
                  <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                    RESULT
                  </span>
                  <span className="text-[15px] sm:text-[16px] text-[var(--text)] font-semibold">
                    {result}
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2 self-center">
                <Visual />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <p className="mt-7 text-[14px] font-mono tracking-[0.14em] text-[var(--muted)]/80 font-semibold">
          CLICK FOR DETAIL →
        </p>
      )}
    </motion.article>
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

function CheckGreen() {
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
