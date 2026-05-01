"use client";

import Link from "next/link";
import { Header } from "@/components/site/header";
import { FadeUp } from "@/components/site/fade-up";
import { CallDemo } from "@/components/site/call-demo";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { TryDemo } from "@/components/site/try-demo";
import { RoiCalculator } from "@/components/site/roi-calculator";
import { Comparison } from "@/components/site/comparison";
import { GbpAudit } from "@/components/site/gbp-audit";
import { Booking } from "@/components/site/booking";
import { PricingTiers } from "@/components/site/pricing-tiers";
import type { VerticalConfig } from "@/components/site/vertical-config";

export function VerticalLanding({ config }: { config: VerticalConfig }) {
  return (
    <>
      <Header />
      <main id="top">
        <VerticalHero config={config} />
        <VerticalPain config={config} />
        <Services />
        <TryDemo />
        <VerticalScenario config={config} />
        <RoiCalculator />
        <VerticalPricing />
        <Comparison />
        <Process />
        <VerticalFinalCTA config={config} />
        <GbpAudit />
        <Booking />
        <Footer />
      </main>
      <CallDemo />
    </>
  );
}

/* ---------- VERTICAL HERO ---------- */

function VerticalHero({ config }: { config: VerticalConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-dark)] text-[var(--text-inverse)] h-screen min-h-[640px] max-h-[920px]">
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden
          className="hero-poster absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
        />
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="hero-video absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,31,26,0.78) 0%, rgba(12,31,26,0.5) 40%, rgba(12,31,26,0.88) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 grain-dark pointer-events-none" />

      <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 flex flex-col justify-center">
        <FadeUp onView={false} duration={0.6}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-bright)]/40 bg-[var(--accent-bright)]/10 px-4 py-1.5">
            <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent-bright)] font-semibold">
              {config.heroEyebrow}
            </span>
          </div>
        </FadeUp>

        <FadeUp onView={false} delay={0.06} duration={0.7}>
          <h1 className="mt-7 sm:mt-8 font-display font-semibold tracking-[-0.035em] leading-[1.0] text-[40px] sm:text-[60px] lg:text-[76px] max-w-[1100px]">
            {config.heroH1Top}
            <span className="block mt-2 sm:mt-3 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
              {config.heroH1Italic}
            </span>
          </h1>
        </FadeUp>

        <FadeUp onView={false} delay={0.14} duration={0.6}>
          <p className="mt-8 sm:mt-10 max-w-[720px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/85">
            {config.heroSubhead}
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.22} duration={0.6}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#book"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-9 text-[17px] font-semibold text-[var(--bg-dark)] shadow-[0_10px_40px_-12px_rgba(168,213,187,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Book a 15-minute call
              <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#services"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] px-8 text-[17px] font-semibold text-[var(--text-inverse)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.08]"
            >
              See the five services
              <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- VERTICAL PAIN ---------- */

function VerticalPain({ config }: { config: VerticalConfig }) {
  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>{config.pain.eyebrow}</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[920px]">
            {config.pain.headline}
          </h2>
          <p className="mt-7 max-w-[720px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            {config.pain.subhead}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <ul className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5 max-w-[1100px]">
            {config.pain.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-4 text-[17px] sm:text-[19px] leading-[1.55] text-[var(--text)]"
              >
                <CrossRed />
                <span className="font-semibold">{b}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- VERTICAL SCENARIO ---------- */

function VerticalScenario({ config }: { config: VerticalConfig }) {
  return (
    <section className="bg-[var(--bg-dark)] text-[var(--text-inverse)] py-24 sm:py-32 border-b border-[var(--border-on-dark)] relative overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--accent-bright)]" />
            <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent-bright)] font-semibold">
              WHAT THIS LOOKS LIKE
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[920px]">
            {config.scenario.title}
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <FadeUp className="lg:col-span-7" delay={0.05}>
            <p className="text-[19px] sm:text-[21px] leading-[1.65] text-[var(--text-inverse)]/85 max-w-[680px]">
              {config.scenario.body}
            </p>
          </FadeUp>
          <FadeUp className="lg:col-span-5" delay={0.12}>
            <div className="rounded-2xl border border-[var(--accent-bright)]/30 bg-white/[0.03] p-7 sm:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
              <div className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent-bright)] font-semibold">
                {config.scenario.metricLabel.toUpperCase()}
              </div>
              <div className="mt-4 font-display text-[60px] sm:text-[72px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent-bright)] tabular-nums">
                {config.scenario.metricValue}
              </div>
              <p className="mt-5 text-[14px] sm:text-[15px] text-[var(--text-inverse)]/65 leading-[1.55]">
                {config.scenario.metricSub}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------- VERTICAL PRICING (light wrapper around tiers) ---------- */

function VerticalPricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="text-center max-w-[900px] mx-auto">
            <div className="inline-flex">
              <SectionLabel>Pricing</SectionLabel>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px]">
              One team, three ways
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
                to take it off your plate.
              </span>
            </h2>
            <p className="mt-7 text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)] max-w-[700px] mx-auto">
              Pick the level of coverage that matches where your business is.
              Most clients land on Full Stack because it replaces an entire
              front-desk seat for less than the salary alone.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 sm:mt-20">
            <PricingTiers />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- VERTICAL FINAL CTA ---------- */

function VerticalFinalCTA({ config }: { config: VerticalConfig }) {
  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-24 sm:py-28 border-b border-[var(--border-on-dark)] overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(168,213,187,0.65) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <FadeUp>
          <span className="font-mono text-[13px] tracking-[0.18em] text-[var(--accent-bright)] font-semibold">
            BUILT FOR {config.industry.toUpperCase()}
          </span>
          <h2 className="mt-7 font-display font-semibold leading-[1] tracking-[-0.04em] text-[40px] sm:text-[60px] lg:text-[72px]">
            Stop losing money
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
              on the calls you can&apos;t catch.
            </span>
          </h2>
          <p className="mt-7 mx-auto max-w-[620px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/85">
            Fifteen minutes on Zoom. We run the voice agent against your
            actual {config.industry.toLowerCase()} intake live so you can
            judge it yourself.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="#book"
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-10 text-[18px] font-semibold text-[var(--bg-dark)] shadow-[0_12px_44px_-12px_rgba(168,213,187,0.55)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Pick a time →
            </Link>
            <a
              href="mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request"
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] px-9 text-[17px] font-semibold text-[var(--text-inverse)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.08]"
            >
              Or email me
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-[var(--text-inverse)] border-t border-[var(--border-on-dark)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link
              href="/"
              className="font-display text-[28px] font-semibold tracking-[-0.02em]"
            >
              Kollaborate
              <span className="text-[var(--accent-bright)]">.</span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-[1.55] text-[var(--text-inverse)]/65">
              Done-for-you ops for local service businesses in Montreal,
              Ottawa, and Eastern Ontario.
            </p>
          </div>

          <div>
            <div className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/50 font-semibold">
              INDUSTRIES
            </div>
            <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--text-inverse)]/80">
              <li>
                <Link href="/hvac" className="hover:text-[var(--accent-bright)] transition">
                  HVAC + Trades
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="hover:text-[var(--accent-bright)] transition">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/salons" className="hover:text-[var(--accent-bright)] transition">
                  Salons + Spas
                </Link>
              </li>
              <li>
                <Link href="/dental" className="hover:text-[var(--accent-bright)] transition">
                  Dental + Med
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/50 font-semibold">
              COMPANY
            </div>
            <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--text-inverse)]/80">
              <li>
                <Link href="/#services" className="hover:text-[var(--accent-bright)] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[var(--accent-bright)] transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#book" className="hover:text-[var(--accent-bright)] transition">
                  Book a call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/50 font-semibold">
              CONTACT
            </div>
            <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--text-inverse)]/80">
              <li>
                <a
                  href="mailto:joseph@kollaborate.ca"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  joseph@kollaborate.ca
                </a>
              </li>
              <li>Montreal, QC</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-on-dark)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--text-inverse)]/45 font-mono font-medium">
            © 2026 KOLLABORATE · ALL RIGHTS RESERVED
          </p>
          <p className="text-[13px] text-[var(--text-inverse)]/45 font-mono font-medium">
            MTL · OTT · EASTERN ON
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */

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

function CrossRed() {
  return (
    <span
      aria-hidden
      className="mt-[3px] grid h-[24px] w-[24px] shrink-0 place-items-center rounded-full bg-[var(--danger)]/20"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[12px] w-[12px] text-[var(--danger)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3l10 10M13 3L3 13" />
      </svg>
    </span>
  );
}
