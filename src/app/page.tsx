import Link from "next/link";
import { Header } from "@/components/site/header";
import { FadeUp } from "@/components/site/fade-up";
import { FAQ } from "@/components/site/faq";
import { CallDemo } from "@/components/site/call-demo";
import { PricingBuilder } from "@/components/site/pricing-builder";
import { Booking } from "@/components/site/booking";
import {
  CallVisual,
  ReviewVisual,
  SiteVisual,
  ContentVisual,
  EmailVisual,
} from "@/components/site/visuals";

const MAILTO =
  "mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Savings />
        <Services />
        <CaseStudy />
        <Proof />
        <Process />
        <Pricing />
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
    <section className="relative isolate overflow-hidden bg-[var(--bg-dark)] text-[var(--text-inverse)]">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(168,213,187,0.6) 0%, transparent 40%), radial-gradient(circle at 80% 90%, rgba(168,213,187,0.4) 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-36 pb-20 sm:pt-40 sm:pb-28">
        <FadeUp onView={false} duration={0.6}>
          <p className="font-serif italic text-[18px] sm:text-[22px] text-[var(--accent-bright)] tracking-[-0.005em]">
            Local jobs go to whoever shows up first.
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.06} duration={0.7}>
          <h1 className="mt-5 sm:mt-6 font-display font-semibold tracking-[-0.035em] leading-[0.98] text-[44px] sm:text-[64px] lg:text-[84px] max-w-[1100px]">
            We run the five things that grow your business.
            <span className="block mt-2 sm:mt-3 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
              You focus on the work.
            </span>
          </h1>
        </FadeUp>

        <FadeUp onView={false} delay={0.14} duration={0.6}>
          <p className="mt-10 max-w-[760px] text-[19px] sm:text-[22px] leading-[1.55] text-[var(--text-inverse)]/80">
            We pick up your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">
              phones
            </span>
            , chase your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">
              reviews
            </span>
            , build your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">
              site
            </span>
            , run your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">
              Google profile
            </span>
            , and reply to all your{" "}
            <span className="font-semibold text-[var(--accent-bright)]">
              leads
            </span>
            .{" "}
            <span className="text-[var(--text-inverse)]">
              One team. One invoice. Starting at $750 a month.
            </span>
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.22} duration={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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

        {/* Big stats strip */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border-on-dark)] rounded-2xl overflow-hidden border border-[var(--border-on-dark)]">
          {[
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
          ].map((s, i) => (
            <FadeUp key={i} onView={false} delay={0.35 + i * 0.1} duration={0.7} travel={24}>
              <div className="h-full bg-[var(--bg-dark-2)] p-8 sm:p-9">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[52px] sm:text-[60px] font-semibold tracking-[-0.04em] leading-none text-[var(--accent-bright)]">
                    {s.big}
                  </span>
                  <span className="font-display text-[26px] sm:text-[30px] text-[var(--text-inverse)]/60">
                    {s.unit}
                  </span>
                </div>
                <p className="mt-5 text-[17px] sm:text-[18px] text-[var(--text-inverse)]/95 leading-[1.4] font-medium">
                  {s.label}
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-inverse)]/50 font-mono tracking-wide">
                  {s.note}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Founding client strip */}
        <FadeUp delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-bright)]/40 bg-[var(--accent-bright)]/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-bright)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-bright)]" />
              </span>
              <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--accent-bright)] font-semibold">
                NOW BOOKING FOUNDING CLIENTS
              </span>
            </span>
            <span className="font-serif italic text-[17px] sm:text-[18px] text-[var(--text-inverse)]/75 tracking-[-0.005em]">
              Five spots. Setup + first 3 months half off for everyone who signs before the roster fills.
            </span>
          </div>
        </FadeUp>

        {/* Industries strip */}
        <FadeUp delay={0.18}>
          <div className="mt-12 pt-10 border-t border-[var(--border-on-dark)]">
            <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--text-inverse)]/55 font-semibold">
              BUILT FOR
            </span>
            <div className="mt-5 flex flex-wrap gap-x-2.5 gap-y-2.5">
              {[
                "HVAC",
                "Plumbing",
                "Electrical",
                "Roofing",
                "Landscaping",
                "Locksmiths",
                "Cleaning crews",
                "Restaurants",
                "Salons + spas",
                "Dental clinics",
                "Med-spas",
                "Auto shops",
                "Movers",
                "Pet care",
                "Trades + contractors",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[var(--accent-bright)]/25 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-[var(--text-inverse)]/85"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-[640px] text-[14px] leading-[1.55] text-[var(--text-inverse)]/55">
              If your business runs on phone calls, walk-ins, bookings, or
              Google reviews, the stack works. Not for pure e-com or SaaS.
            </p>
          </div>
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
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
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
                <h3 className="font-display text-[20px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[var(--text)]">
                  {row.role}
                </h3>

                {/* Two-number compare */}
                <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                  <div className="text-center">
                    <div className="font-display text-[32px] sm:text-[36px] font-semibold tracking-[-0.03em] line-through decoration-[var(--danger)]/65 decoration-[2px] text-[var(--text)]/70">
                      {row.current}
                    </div>
                    <div className="mt-2 text-[14px] text-[var(--muted)]">
                      what you pay
                    </div>
                  </div>
                  <div
                    className="font-display text-[22px] text-[var(--muted)]/60 pt-3"
                    aria-hidden
                  >
                    →
                  </div>
                  <div className="text-center">
                    <div className="font-display text-[32px] sm:text-[36px] font-semibold tracking-[-0.03em] text-[var(--accent)]">
                      {row.ours}
                    </div>
                    <div className="mt-2 text-[14px] text-[var(--accent)]/85 font-medium">
                      with us
                    </div>
                  </div>
                </div>

                {/* Hero savings block */}
                <div className="mt-9 rounded-xl bg-[var(--accent-tint)] border border-[var(--accent)]/25 px-5 py-7 text-center flex-1 flex flex-col justify-center">
                  <div className="font-display text-[46px] sm:text-[54px] font-semibold tracking-[-0.035em] leading-[0.95] text-[var(--accent)]">
                    {row.save}
                  </div>
                  <div className="mt-3 font-serif italic text-[22px] sm:text-[24px] text-[var(--accent)]">
                    {row.saveLabel}
                  </div>
                </div>

                <p className="mt-5 text-[12.5px] text-[var(--muted)]/85 font-mono leading-[1.5] text-center">
                  {row.footnote}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-14 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border)] p-8 sm:p-10 text-center max-w-[840px] mx-auto">
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text)]">
              All three together: about{" "}
              <span className="font-display font-semibold text-[22px] sm:text-[24px]">
                $111,000 a year
              </span>
              . Our full stack replaces it for{" "}
              <span className="font-display font-semibold text-[22px] sm:text-[24px] text-[var(--accent)]">
                $18,000
              </span>
              .
            </p>
            <Link
              href="#pricing"
              className="mt-5 inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--accent)] underline-offset-4 underline decoration-2 hover:text-[var(--accent-hover)]"
            >
              See pricing →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */

const SERVICES_MAIN = [
  {
    n: "01",
    eyebrow: "CALL HANDLING",
    title: "Your phone, answered every time.",
    body: "A voice agent that learns your intake questions, pricing, and booking rules. Picks up in under 2 rings, day or night. Books straight into your calendar. Sends emergencies to your cell.",
    bullets: [
      "Answers in your business voice (English or French)",
      "Books into Google Calendar, Cal.com, Square, or whatever you use",
      "Handles FAQs, pricing, and hours without a human",
      "Sends complex calls to whoever you pick",
    ],
    result: "Designed to handle 9 out of 10 calls without a human.",
    Visual: CallVisual,
  },
  {
    n: "02",
    eyebrow: "REVIEW AUTOMATION",
    title: "Every happy customer becomes a review.",
    body: "Every appointment or sale kicks off a review request. Happy customers get asked by text or email. Unhappy ones come to you first, before the star rating goes public.",
    bullets: [
      "Text and email, sent right after the visit",
      "4 and 5 star reviews go to Google. Lower ones come to you first.",
      "Drafts a reply to every review in your voice",
      "Dashboard showing reviews over the last 30, 60, 90 days",
    ],
    result: "Every paid ticket triggers a review ask, automatically.",
    Visual: ReviewVisual,
  },
  {
    n: "03",
    eyebrow: "WEBSITE",
    title: "A site that actually converts.",
    body: "Fast, professional, built for the industries you work in. Not a generic template. Live in 7 to 10 days. Every page loads in under a second. You own the code and everything on it.",
    bullets: [
      "Sub-second load times on any device",
      "Works on every phone. Ready to rank on Google from day one.",
      "Booking widget wired straight to the voice agent",
      "Monthly updates included: copy, pages, seasonal changes",
    ],
    result: "Target: 95+ Lighthouse on every build, every device.",
    Visual: SiteVisual,
  },
];

const SERVICES_SIDE = [
  {
    n: "04",
    eyebrow: "GOOGLE BUSINESS PROFILE",
    title: "Your Google profile, actively run.",
    body: "The place 80% of your customers find you, treated like a living page. Fresh posts every week, optimized categories, photos that actually look like your business.",
    bullets: [
      "3 Google Business posts a week with real photos",
      "Profile categories, services, and hours kept tight for local search",
      "Every review gets a drafted reply in your voice within 24 hours",
      "Monthly report on views, calls, and direction requests from Google",
    ],
    result: "The page 80% of local customers see first, kept alive weekly.",
    Visual: ContentVisual,
  },
  {
    n: "05",
    eyebrow: "LEAD FOLLOW-UP",
    title: "Leads replied to in under a minute.",
    body: "Every web form, email, and DM gets a reply in 60 seconds. A real person follows up within 2 hours.",
    bullets: [
      "One inbox for web, email, Instagram, Facebook, TikTok",
      "60-second auto-reply, 2-hour human reply",
      "Old leads get fresh outreach at 30, 60, and 90 days",
    ],
    result: "Auto-reply fires in under 60 seconds on every channel.",
    Visual: EmailVisual,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-[var(--bg-cream)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>What we run</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
            Five services.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              One team running them.
            </span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
            Each of these is already taking a seat on your team. We take the
            seat, work it 24/7, and charge less than what benefits alone
            would cost.
          </p>
        </FadeUp>

        {/* Services 01-03: full width alternating */}
        <div className="mt-16 sm:mt-24 space-y-16 sm:space-y-24">
          {SERVICES_MAIN.map((s, i) => (
            <FadeUp key={s.n} delay={0}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-mono text-[14px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold tracking-[-0.025em] leading-[1.08] text-[30px] sm:text-[36px] lg:text-[42px] max-w-[580px]">
                    {s.title}
                  </h3>
                  <p className="mt-6 max-w-[580px] text-[17px] sm:text-[18px] leading-[1.6] text-[var(--muted)]">
                    {s.body}
                  </p>
                  <ul className="mt-8 space-y-3.5 max-w-[580px]">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3.5 text-[16px] sm:text-[17px] leading-[1.55] text-[var(--text)]"
                      >
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-tint)] px-5 py-2.5">
                    <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                      RESULT
                    </span>
                    <span className="text-[15px] sm:text-[16px] text-[var(--text)] font-medium">
                      {s.result}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <s.Visual />
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Services 04-05: 2-column grid, condensed */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_SIDE.map((s) => (
            <FadeUp key={s.n}>
              <article className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8 flex flex-col">
                <s.Visual />
                <div className="mt-7">
                  <span className="font-mono text-[14px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display font-semibold tracking-[-0.02em] leading-[1.1] text-[24px] sm:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-[var(--muted)]">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.55] text-[var(--text)]"
                      >
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-tint)] px-4 py-2">
                    <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--accent)] font-semibold">
                      RESULT
                    </span>
                    <span className="text-[14px] sm:text-[15px] text-[var(--text)] font-medium">
                      {s.result}
                    </span>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
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
          <SectionLabel>The math on a real account</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[960px]">
            What a typical month looks like.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Worked on an 80-seat restaurant profile.
            </span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[16px] text-[var(--muted)] leading-[1.6]">
            Illustrative walkthrough using typical Montreal-restaurant traffic, not a current client result. The mechanics are the same in any local-service vertical. The numbers at the bottom are the ones you can recreate by plugging your own intake volume into the same pipeline.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <FadeUp className="lg:col-span-7">
            <div className="max-w-[640px]">
              <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--text)]">
                Picture an 80-cover spot with a modern POS. Rating hovers
                around 4.3. Staff mean to ask for Google reviews on the way
                out, but between service and close it never happens.
                One 1-star review a month quietly drags the rating down.
              </p>
              <p className="mt-6 text-[18px] sm:text-[19px] leading-[1.65] text-[var(--muted)]">
                The pipeline we ship on a profile like this: every paid check
                triggers an SMS + email two hours later. Guests rating 4 or 5
                land on a Google review link. Anyone rating lower lands on a
                private form that pings ownership first. Multiply that by
                ~2,500 covers a month at a 22% response rate and you get
                ~40 fresh reviews a month instead of 2.
              </p>
              <figure className="mt-10 border-l-2 border-[var(--accent)] pl-7">
                <blockquote className="font-serif italic text-[22px] sm:text-[26px] leading-[1.4] text-[var(--text)]">
                  &quot;Rebuilding the review rate is the cheapest
                  rating-lift any restaurant can buy. The star count in
                  local search is the single biggest lever on walk-ins, and
                  nobody uses it on purpose.&quot;
                </blockquote>
                <figcaption className="mt-5 text-[14px] text-[var(--muted)]">
                  Joseph Brodt, founder · Kollaborate
                </figcaption>
              </figure>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--muted)] font-semibold">
                ILLUSTRATIVE · ANY LOCAL-SERVICE BUSINESS
              </span>
              <div className="mt-7 space-y-6">
                <Stat k="Covers served / mo" v="~2,500" delta="" />
                <Stat k="Review-request SMS sent" v="~2,500" delta="auto" />
                <Stat k="Expected replies at 22%" v="~550" delta="" />
                <Stat k="Net new Google reviews" v="~40 / mo" delta="vs ~2" />
                <Stat k="Staff hours spent" v="0" delta="vs ~4/wk" />
              </div>
              <div className="mt-8 border-t border-[var(--border)] pt-5 text-[13px] text-[var(--muted)] leading-relaxed font-mono tracking-wide">
                EXAMPLE MATH · NOT A PAST-CLIENT OUTCOME · WE&apos;LL RUN YOUR ACTUAL NUMBERS LIVE ON THE CALL
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
        <span className="text-[14px] text-[var(--muted)]">{k}</span>
        {delta && (
          <span className="font-mono text-[12px] text-[var(--accent)] font-semibold">
            {delta}
          </span>
        )}
      </div>
      <div className="mt-1 font-display text-[26px] sm:text-[28px] font-semibold tracking-[-0.02em] text-[var(--text)]">
        {v}
      </div>
    </div>
  );
}

/* ---------- PROOF ---------- */

function Proof() {
  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(168,213,187,0.35) 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel onDark>Straight talk</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
            We&apos;re new. We&apos;re looking for five founding clients.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)]">
              Be the case study we point everyone at.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <FadeUp className="lg:col-span-7">
            <div className="space-y-6 text-[18px] sm:text-[19px] leading-[1.65] text-[var(--text-inverse)]/90 max-w-[640px]">
              <p>
                I&apos;m Joseph. I run Kollaborate out of Montreal. The pages above show what the stack does and what it costs. The part I won&apos;t fake is the testimonials.
              </p>
              <p className="text-[var(--text-inverse)]/75">
                Every agency site I&apos;ve ever scrolled has the same five logos, the same &quot;4.3 to 4.9 in 47 days&quot; case study, and the same five anonymous reviewers who all left exactly five stars. Mine won&apos;t, until it&apos;s real.
              </p>
              <p className="text-[var(--text-inverse)]/75">
                What I can show you is the work itself: a voice agent that answers live on our call, a review pipeline wired into your actual POS or PMS, a site shipped in ten days you can inspect line-by-line. If the output is good, you become client number one, two, three, four, or five, and I publish the real numbers with your name on them.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#book"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-8 text-[16px] font-semibold text-[var(--bg-dark)] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Be a founding client →
              </Link>
              <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/55 font-medium">
                LOCKED-IN FOUNDER RATE · KEPT FOR LIFE
              </span>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl border border-[var(--accent-bright)]/30 bg-white/[0.03] p-8 backdrop-blur-sm">
              <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--accent-bright)] font-semibold">
                FOUNDING-CLIENT OFFER
              </span>
              <ul className="mt-6 space-y-5 text-[15px] leading-[1.55] text-[var(--text-inverse)]/90">
                <li className="flex gap-3">
                  <span className="font-display text-[var(--accent-bright)] font-semibold">01</span>
                  <span>First 3 months at 50% off. Standard rate after that.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-[var(--accent-bright)] font-semibold">02</span>
                  <span>Setup fee cut in half.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-[var(--accent-bright)] font-semibold">03</span>
                  <span>Direct line to me. Slack, text, phone. No intake queue.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-[var(--accent-bright)] font-semibold">04</span>
                  <span>At day 60 we write up a case study with your real numbers. Yours to keep whether you stay or leave.</span>
                </li>
              </ul>
              <div className="mt-7 pt-6 border-t border-[var(--border-on-dark)] text-[13px] text-[var(--text-inverse)]/60 font-mono tracking-wide">
                FIVE SPOTS TOTAL · FIRST COME FIRST SERVED
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */

function Process() {
  const steps = [
    {
      n: "01",
      title: "15-minute discovery call",
      body: "We listen, you ask. We run our voice agent live against your actual intake questions. If it's not the right fit, you walk. No pressure.",
      time: "Day 0",
    },
    {
      n: "02",
      title: "Kickoff + build",
      body: "Setup paid, we start building. Scripts written, workflows configured, calendar connected, review pipeline wired up. You review each piece as it ships.",
      time: "Days 1 to 7",
    },
    {
      n: "03",
      title: "Soft launch + tuning",
      body: "Two-day live test. You listen in, flag anything weird, we tune on the fly. Then we port your main line.",
      time: "Days 8 to 10",
    },
    {
      n: "04",
      title: "We run it.",
      body: "Monthly Friday report with calls, reviews, leads, conversions. Slack stays open. We proactively tune scripts, respond to reviews, update content.",
      time: "Ongoing",
    },
  ];

  return (
    <section className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[900px]">
            From hello to live on your phones.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Ten days or less.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.07}>
              <div className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[52px] sm:text-[56px] font-semibold tracking-[-0.04em] text-[var(--accent)]/30 leading-none">
                    {s.n}
                  </span>
                  <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--muted)] font-semibold">
                    {s.time}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-[1.2]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--muted)]">
                  {s.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
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
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[900px]">
            Pick what you need.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Pay for that. Nothing else.
            </span>
          </h2>
          <p className="mt-7 max-w-[640px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
            Every service priced by what it actually costs to run. Tick the
            ones you want, watch the total add up. All five together bundle
            for $1,500/mo, which is $245/mo less than piecing them à la
            carte. Month to month. Cancel any time.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-14">
            <PricingBuilder />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8 max-w-[840px]">
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
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px]">
            Built in Montreal.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              Run by people, not a platform.
            </span>
          </h2>
        </FadeUp>
        <FadeUp className="lg:col-span-7" delay={0.1}>
          <div className="space-y-6 max-w-[640px]">
            <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--text)]">
              Kollaborate is a small agency out of Côte-Saint-Luc, founded in
              2026. The stack we sell is the stack we built for ourselves and
              for the first few local businesses we volunteered to prototype
              on. We&apos;re now opening the doors to five founding clients.
            </p>
            <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--muted)]">
              The roster stays small on purpose. Three new clients per month,
              no more. Every account has a direct line to the person doing
              the work, which on day one is me. No account executives, no
              offshore support, no ticketing maze. When something breaks,
              you text me. It gets fixed.
            </p>
            <div className="pt-5 flex flex-wrap gap-8 text-[15px] font-mono tracking-wide text-[var(--muted)]">
              <div>
                <span className="text-[var(--text)] font-semibold text-[17px]">
                  2026
                </span>{" "}
                founded
              </div>
              <div>
                <span className="text-[var(--text)] font-semibold text-[17px]">
                  5
                </span>{" "}
                founding-client spots
              </div>
              <div>
                <span className="text-[var(--text)] font-semibold text-[17px]">
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
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px]">
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
        className={`h-px w-10 ${
          onDark ? "bg-[var(--accent-bright)]" : "bg-[var(--accent)]"
        }`}
      />
      <span
        className={`font-mono text-[13px] tracking-[0.18em] font-semibold ${
          onDark ? "text-[var(--accent-bright)]" : "text-[var(--accent)]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="mt-[6px] h-[16px] w-[16px] shrink-0 text-[var(--accent)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5l3.25 3.25L13 5" />
    </svg>
  );
}

