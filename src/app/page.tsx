import Link from "next/link";
import { Header } from "@/components/site/header";
import { FadeUp } from "@/components/site/fade-up";
import { FAQ } from "@/components/site/faq";
import { CallDemo } from "@/components/site/call-demo";
import { PricingBuilder } from "@/components/site/pricing-builder";
import { Booking } from "@/components/site/booking";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";

const MAILTO =
  "mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HeroStats />
        <Industries />
        <Services />
        <Savings />
        <Pricing />
        <Process />
        <CaseStudy />
        <About />
        <FAQSection />
        <Booking />
        <FinalCTA />
        <Footer />
      </main>
      <CallDemo />
    </>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg-dark)] text-[var(--text-inverse)] h-screen min-h-[640px] max-h-[920px]">
      {/* Background layers — poster sits underneath, video paints on top */}
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
              "linear-gradient(180deg, rgba(12,31,26,0.72) 0%, rgba(12,31,26,0.42) 40%, rgba(12,31,26,0.85) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 12%, rgba(168,213,187,0.55) 0%, transparent 42%)",
          }}
        />
      </div>
      <div className="absolute inset-0 grain-dark pointer-events-none" />

      <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 flex flex-col justify-center">
        <FadeUp onView={false} duration={0.6}>
          <p className="font-serif italic text-[18px] sm:text-[22px] text-[var(--accent-bright)] tracking-[-0.005em]">
            Local jobs go to whoever shows up first.
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.06} duration={0.7}>
          <h1 className="mt-5 sm:mt-6 font-display font-semibold tracking-[-0.035em] leading-[0.98] text-[44px] sm:text-[64px] lg:text-[80px] max-w-[1100px]">
            We run the five things that grow your business.
            <span className="block mt-2 sm:mt-3 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
              You focus on the work.
            </span>
          </h1>
        </FadeUp>

        <FadeUp onView={false} delay={0.14} duration={0.6}>
          <p className="mt-8 sm:mt-10 max-w-[720px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/85">
            We pick up your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">phones</span>
            , chase your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">reviews</span>
            , build your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">site</span>
            , run your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">Google profile</span>
            , and reply to all your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">leads</span>
            .{" "}
            <span className="text-[var(--text-inverse)]">
              One team. One invoice. Starting at $750 a month.
            </span>
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.22} duration={0.6}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#book"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-9 text-[17px] font-semibold text-[var(--bg-dark)] shadow-[0_10px_40px_-12px_rgba(168,213,187,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_44px_-10px_rgba(255,255,255,0.35)]"
            >
              Book a 15-minute call
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link
              href="#services"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] px-8 text-[17px] font-semibold text-[var(--text-inverse)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.08]"
            >
              See the five services
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- HERO STATS (separated from video hero) ---------- */

function HeroStats() {
  const stats = [
    {
      big: "$51,240",
      unit: "/yr",
      label: "saved vs hiring a front-desk seat",
      note: "based on $60k loaded salary",
    },
    {
      big: "24/7",
      unit: "",
      label: "call coverage, zero sick days",
      note: "holidays, 2am, nights, weekends",
    },
    {
      big: "100%",
      unit: "",
      label: "of paid tickets auto-ask for a review",
      note: "no more forgetting at checkout",
    },
  ];
  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border-on-dark)] rounded-2xl overflow-hidden border border-[var(--border-on-dark)]">
          {stats.map((s, i) => (
            <FadeUp key={s.big} delay={i * 0.08} duration={0.6} travel={24}>
              <div className="h-full bg-[var(--bg-dark-2)] p-8 sm:p-10">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[56px] sm:text-[64px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent-bright)]">
                    {s.big}
                  </span>
                  <span className="font-display text-[28px] sm:text-[32px] text-[var(--text-inverse)]/60">
                    {s.unit}
                  </span>
                </div>
                <p className="mt-6 text-[18px] sm:text-[20px] text-[var(--text-inverse)]/95 leading-[1.4] font-semibold">
                  {s.label}
                </p>
                <p className="mt-3 text-[14px] sm:text-[15px] text-[var(--text-inverse)]/55 font-mono tracking-wide">
                  {s.note}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES (separated) ---------- */

function Industries() {
  const tiles = [
    { name: "Trades", sub: "HVAC, plumbing, electrical, roofing" },
    { name: "Restaurants", sub: "Front-of-house and reservations" },
    { name: "Auto + repair", sub: "Body shops, mechanics, detailing" },
    { name: "Wellness", sub: "Salons, spas, med-spas, dental" },
    { name: "Home services", sub: "Cleaning, movers, landscaping" },
    { name: "Pro services", sub: "Clinics, vets, studios, training" },
  ];
  return (
    <section className="relative bg-[var(--bg-dark-2)] text-[var(--text-inverse)] py-20 sm:py-24 border-b border-[var(--border-on-dark)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--accent-bright)]" />
            <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent-bright)] font-semibold">
              BUILT FOR
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[820px]">
            Local service businesses that
            <span className="block mt-1.5 font-serif italic font-medium text-[var(--accent-bright)]">
              live or die on the phone.
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tiles.map((tile) => (
              <div
                key={tile.name}
                className="rounded-xl border border-[var(--accent-bright)]/30 bg-white/[0.04] px-5 py-5 backdrop-blur-sm"
              >
                <div className="font-display text-[19px] sm:text-[20px] font-semibold tracking-[-0.01em] text-[var(--text-inverse)]">
                  {tile.name}
                </div>
                <div className="mt-2 text-[14px] leading-[1.5] text-[var(--text-inverse)]/70">
                  {tile.sub}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-9 max-w-[720px] text-[17px] sm:text-[18px] leading-[1.6] text-[var(--text-inverse)]/75">
            If your business runs on phone calls, walk-ins, bookings, or Google
            reviews, the stack works. Not built for pure e-commerce or software
            companies.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- SAVINGS ---------- */

function Savings() {
  return (
    <section
      id="savings"
      className="relative bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>The math</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[960px]">
            The math nobody shows you.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              What each of these is costing you right now.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              role: "Front-desk / receptionist",
              current: "$60,400",
              ours: "$9,000",
              save: "$51,400",
              saveLabel: "saved every year",
              footnote: "Salary, benefits, training, and turnover combined",
            },
            {
              role: "Reviews + reputation",
              current: "$18,600",
              ours: "$1,200",
              save: "$17,400",
              saveLabel: "recovered every year",
              footnote: "A 1.2-star lower rating means 14% fewer new customers",
            },
            {
              role: "Website + lead response",
              current: "$32,000",
              ours: "$7,800",
              save: "$24,200",
              saveLabel: "freed up every year",
              footnote: "Marketing agency, website dev, and an inbox assistant combined",
            },
          ].map((row, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-9 flex flex-col">
                <h3 className="font-display text-[22px] sm:text-[26px] font-semibold tracking-[-0.015em] text-[var(--text)]">
                  {row.role}
                </h3>

                {/* Two-number compare */}
                <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                  <div className="text-center">
                    <div className="font-display text-[34px] sm:text-[40px] font-semibold tracking-[-0.03em] line-through decoration-[var(--danger)]/65 decoration-[2px] text-[var(--text)]/70">
                      {row.current}
                    </div>
                    <div className="mt-2 text-[15px] text-[var(--muted)]">
                      what you pay
                    </div>
                  </div>
                  <div
                    className="font-display text-[24px] text-[var(--muted)]/60 pt-3"
                    aria-hidden
                  >
                    →
                  </div>
                  <div className="text-center">
                    <div className="font-display text-[34px] sm:text-[40px] font-semibold tracking-[-0.03em] text-[var(--accent)]">
                      {row.ours}
                    </div>
                    <div className="mt-2 text-[15px] text-[var(--accent)]/85 font-semibold">
                      with us
                    </div>
                  </div>
                </div>

                {/* Hero savings block, mint not forest */}
                <div className="mt-9 rounded-xl bg-[var(--accent-bright)]/35 border border-[var(--accent-bright)]/70 px-5 py-8 text-center flex-1 flex flex-col justify-center">
                  <div className="font-display text-[48px] sm:text-[56px] font-semibold tracking-[-0.035em] leading-[0.95] text-[var(--accent)]">
                    {row.save}
                  </div>
                  <div className="mt-3 font-serif italic text-[22px] sm:text-[26px] text-[var(--accent)]">
                    {row.saveLabel}
                  </div>
                </div>

                <p className="mt-6 text-[14px] sm:text-[15px] text-[var(--muted)] leading-[1.55] text-center">
                  {row.footnote}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-14 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border)] p-9 sm:p-12 text-center max-w-[880px] mx-auto">
            <p className="text-[20px] sm:text-[24px] leading-[1.5] text-[var(--text)]">
              All three together: about{" "}
              <span className="font-display font-semibold text-[26px] sm:text-[30px]">
                $111,000 a year
              </span>
              . Our full stack replaces it for{" "}
              <span className="font-display font-semibold text-[26px] sm:text-[30px] text-[var(--accent)]">
                $18,000
              </span>
              .
            </p>
            <Link
              href="#pricing"
              className="mt-7 inline-flex items-center gap-2 text-[17px] font-semibold text-[var(--accent)] underline-offset-4 underline decoration-2 hover:text-[var(--accent-hover)]"
            >
              See pricing →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- CASE STUDY ---------- */

function CaseStudy() {
  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>How the math plays out</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[960px]">
            What a typical month looks like.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Walked through a busy local-service profile.
            </span>
          </h2>
          <p className="mt-7 max-w-[720px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Illustrative walkthrough using realistic local-service traffic. The
            mechanics are the same whether you run a busy restaurant, an HVAC
            crew, a salon, or a clinic. The numbers below are what you can
            recreate by plugging your own intake volume into the same pipeline.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <FadeUp className="lg:col-span-7">
            <div className="max-w-[640px] space-y-6">
              <p className="text-[19px] sm:text-[21px] leading-[1.65] text-[var(--text)] font-medium">
                Take a busy local-service business. Maybe an 80-cover restaurant,
                a 12-truck HVAC crew, a four-chair salon. Rating hovers around
                4.3 on Google. Staff mean to ask for reviews. Between work and
                close, it never happens.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Every paid ticket triggers an SMS and email 2 hours later",
                  "Happy customers (4 or 5 star) land on a Google review link",
                  "Anyone lower lands on a private form that pings ownership first",
                  "About 22% of customers actually leave a public review",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3.5 text-[17px] sm:text-[18px] leading-[1.5] text-[var(--text)] font-semibold"
                  >
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
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--muted)]">
                Multiply that by 2,500 paid tickets a month at a 22% response
                rate and you collect roughly 40 fresh Google reviews a month
                instead of 2. Same setup runs identically for an HVAC profile
                doing 200 service calls a month.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl border border-[var(--accent-bright)]/60 bg-[var(--card)] p-8 sm:p-9 shadow-[0_18px_50px_-24px_rgba(34,69,56,0.25)]">
              <span className="font-mono text-[14px] tracking-[0.16em] text-[var(--accent)] font-semibold">
                EXAMPLE · 2,500 TICKETS / MO
              </span>
              <div className="mt-8 space-y-6">
                <Stat k="Tickets served / mo" v="~2,500" delta="" />
                <Stat k="Review requests sent" v="~2,500" delta="auto" />
                <Stat k="Expected replies at 22%" v="~550" delta="" />
                <Stat k="Net new Google reviews" v="~40 / mo" delta="vs ~2" />
                <Stat k="Staff hours spent" v="0" delta="vs ~4/wk" />
              </div>
              <div className="mt-9 border-t border-[var(--border)] pt-6 text-[13px] sm:text-[14px] text-[var(--muted)] leading-relaxed">
                Example math, not a past-client outcome. We run your actual
                numbers live on the call.
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, delta }: { k: string; v: string; delta: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[15px] sm:text-[16px] text-[var(--muted)]">{k}</span>
        {delta && (
          <span className="font-mono text-[13px] text-[var(--accent)] font-semibold">
            {delta}
          </span>
        )}
      </div>
      <div className="mt-1.5 font-display text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] text-[var(--text)]">
        {v}
      </div>
    </div>
  );
}

/* ---------- PRICING ---------- */

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[60px] max-w-[900px]">
            Pick what you need.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Pay for that. Nothing else.
            </span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[19px] sm:text-[21px] leading-[1.6] text-[var(--muted)]">
            Each service is priced by what it actually costs to run. Tick the
            ones you want and watch the total add up. The full stack bundles
            for $1,500 a month, which saves $245 a month versus picking them
            individually. Month to month. Cancel any time.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-14">
            <PricingBuilder />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8 max-w-[840px] mx-auto text-center">
            <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--muted)] font-semibold">
              MULTI-LOCATION · CUSTOM INTEGRATIONS · BILINGUAL
            </span>
            <h3 className="mt-4 font-display text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[var(--text)]">
              Need something the builder doesn&apos;t cover?
            </h3>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--muted)] max-w-[620px]">
              Two-plus locations, a CRM or EMR we have to integrate with, or
              bilingual voice agents (EN/FR, EN/ES). Tell us what you&apos;re
              running and we&apos;ll quote it flat.
            </p>
            <a
              href={`${MAILTO.replace("Kollaborate%20demo%20request", "Kollaborate%3A%20custom%20quote%20request")}`}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full border-2 border-[var(--text)] px-6 text-[15px] font-semibold text-[var(--text)] transition-all hover:-translate-y-px hover:bg-[var(--text)] hover:text-[var(--text-inverse)]"
            >
              Get a custom quote →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function About() {
  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FadeUp className="lg:col-span-5">
          <SectionLabel>Who runs this</SectionLabel>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[48px] lg:text-[52px]">
            Built in Montreal.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Run by people, not a platform.
            </span>
          </h2>
        </FadeUp>
        <FadeUp className="lg:col-span-7" delay={0.1}>
          <div className="space-y-6 max-w-[640px]">
            <p className="text-[19px] sm:text-[21px] leading-[1.65] text-[var(--text)]">
              Kollaborate is a small agency out of Côte-Saint-Luc. The stack
              we sell is the stack we built and run ourselves: voice agents
              answering live, review pipelines wired into POS systems, sites
              that load in under a second, Google profiles kept alive week to
              week.
            </p>
            <p className="text-[19px] sm:text-[21px] leading-[1.65] text-[var(--muted)]">
              The roster stays small on purpose. Three new clients per month,
              no more. Every account has a direct line to the person doing
              the work. No account executives, no offshore support, no
              ticketing maze. When something breaks, you text me. It gets
              fixed.
            </p>
            <div className="pt-5 flex flex-wrap gap-8 text-[16px] font-mono tracking-wide text-[var(--muted)]">
              <div>
                <span className="text-[var(--text)] font-semibold text-[18px]">
                  3 / mo
                </span>{" "}
                new client cap
              </div>
              <div>
                <span className="text-[var(--text)] font-semibold text-[18px]">
                  10 days
                </span>{" "}
                hello to live
              </div>
              <div>
                <span className="text-[var(--text)] font-semibold text-[18px]">
                  MTL
                </span>{" "}
                · OTT · Eastern ON
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- FAQ SECTION WRAPPER ---------- */

function FAQSection() {
  return (
    <section className="bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex">
              <SectionLabel>Questions</SectionLabel>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[56px]">
              Before you book the call.
            </h2>
          </div>
        </FadeUp>
        <FadeUp>
          <FAQ />
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(168,213,187,0.8) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <FadeUp>
          <span className="font-mono text-[13px] tracking-[0.18em] text-[var(--accent-bright)] font-semibold">
            READY WHEN YOU ARE
          </span>
          <h2 className="mt-7 font-display font-semibold leading-[1] tracking-[-0.04em] text-[44px] sm:text-[64px] lg:text-[84px]">
            Stop losing money
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
              to missed calls.
            </span>
          </h2>
          <p className="mt-8 mx-auto max-w-[620px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/85">
            Fifteen minutes on a Zoom. We&apos;ll run our voice agent against
            your actual intake questions live so you can judge it yourself.
          </p>
          <div className="mt-11 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="#book"
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-10 text-[18px] font-semibold text-[var(--bg-dark)] shadow-[0_12px_44px_-12px_rgba(168,213,187,0.55)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Pick a time →
            </Link>
            <a
              href={MAILTO}
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] px-9 text-[17px] font-semibold text-[var(--text-inverse)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.08]"
            >
              Or email me
            </a>
          </div>
          <p className="mt-9 font-mono text-[13px] tracking-wider text-[var(--text-inverse)]/50 font-medium">
            RESPONSE WITHIN 24H · USUALLY SAME DAY
          </p>
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
            <div className="font-display text-[28px] font-semibold tracking-[-0.02em]">
              Kollaborate
              <span className="text-[var(--accent-bright)]">.</span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-[1.55] text-[var(--text-inverse)]/65">
              Done-for-you ops for local service businesses in Montreal,
              Ottawa, and Eastern Ontario.
            </p>
          </div>

          <div>
            <div className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/50 font-semibold">
              SERVICES
            </div>
            <ul className="mt-5 space-y-2.5 text-[15px] text-[var(--text-inverse)]/80">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Call handling
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Website
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Google profile
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Lead follow-up
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
                <Link
                  href="#savings"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  The math
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[var(--accent-bright)] transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#book"
                  className="hover:text-[var(--accent-bright)] transition"
                >
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
                  href={MAILTO}
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

function SectionLabel({
  children,
  onDark,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-12 ${
          onDark ? "bg-[var(--accent-bright)]" : "bg-[var(--accent)]"
        }`}
      />
      <span
        className={`font-mono text-[15px] tracking-[0.2em] font-semibold ${
          onDark ? "text-[var(--accent-bright)]" : "text-[var(--accent)]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

