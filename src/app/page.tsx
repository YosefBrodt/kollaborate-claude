import Link from "next/link";
import { Header } from "@/components/site/header";
import { FadeUp } from "@/components/site/fade-up";
import { FAQ } from "@/components/site/faq";
import {
  CallVisual,
  ReviewVisual,
  SiteVisual,
  ContentVisual,
  EmailVisual,
} from "@/components/site/visuals";

const MAILTO =
  "mailto:yosef@kollaborate.ca?subject=Kollaborate%20demo%20request";

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
        <FinalCTA />
        <Footer />
      </main>
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
        <FadeUp onView={false} duration={0.7}>
          <h1 className="font-display font-semibold tracking-[-0.035em] leading-[0.98] text-[44px] sm:text-[64px] lg:text-[84px] max-w-[1100px]">
            We run the five things that grow your business.
            <span className="block mt-2 sm:mt-3 font-serif italic font-normal text-[var(--accent-bright)] tracking-[-0.01em]">
              You focus on the work.
            </span>
          </h1>
        </FadeUp>

        <FadeUp onView={false} delay={0.14} duration={0.6}>
          <p className="mt-10 max-w-[700px] text-[19px] sm:text-[22px] leading-[1.55] text-[var(--text-inverse)]/80">
            Kollaborate is a done-for-you ops stack for local service
            businesses. We answer your phones, chase your reviews, build your
            site, run your content, and follow up on every lead.{" "}
            <span className="text-[var(--text-inverse)]">
              One team. One invoice. Starting at $750/month.
            </span>
          </p>
        </FadeUp>

        <FadeUp onView={false} delay={0.22} duration={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={MAILTO}
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-9 text-[17px] font-semibold text-[var(--bg-dark)] shadow-[0_10px_40px_-12px_rgba(168,213,187,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_44px_-10px_rgba(255,255,255,0.35)]"
            >
              Book a 15-minute call
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <Link
              href="#savings"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] px-8 text-[17px] font-semibold text-[var(--text-inverse)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.08]"
            >
              See the math
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
              big: "3.1×",
              unit: "",
              label: "more Google reviews captured",
              note: "vs asking manually at checkout",
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

        {/* Client strip */}
        <FadeUp delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5">
            <span className="font-mono text-[13px] tracking-[0.16em] text-[var(--text-inverse)]/60">
              TRUSTED BY
            </span>
            {[
              "Somewhere Dine & Bar",
              "You Feed Them",
              "Cote-Neige Dental",
              "Plateau Auto",
              "North Shore HVAC",
            ].map((name) => (
              <span
                key={name}
                className="font-display text-[18px] sm:text-[19px] font-medium text-[var(--text-inverse)]/75 tracking-[-0.01em]"
              >
                {name}
              </span>
            ))}
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
          <SectionLabel>01 · The math</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
            The part nobody puts on their website.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
              Here&apos;s what you&apos;re paying for what we replace.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              role: "Front-desk / receptionist",
              current: "$60,400",
              currentLabel: "/yr loaded cost",
              breakdown:
                "Salary $48k · benefits $7.2k · training + turnover $5.2k",
              ours: "$750",
              oursLabel: "/mo · $9,000/yr",
              save: "$51,400",
              saveLabel: "saved per year",
            },
            {
              role: "Reviews + reputation",
              current: "$18,600",
              currentLabel: "/yr lost revenue",
              breakdown:
                "Avg 1.2★ lower rating = 14% fewer new customers per month",
              ours: "$100",
              oursLabel: "/mo · $1,200/yr",
              save: "$17,400",
              saveLabel: "recovered per year",
            },
            {
              role: "Website + lead response",
              current: "$32,000",
              currentLabel: "/yr on a marketing agency",
              breakdown: "Plus a dev retainer and a VA for inbox triage",
              ours: "$650",
              oursLabel: "/mo bundled · $7,800/yr",
              save: "$24,200",
              saveLabel: "freed up per year",
            },
          ].map((row, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-9">
                <span className="font-display text-[18px] sm:text-[20px] font-semibold tracking-[-0.015em] text-[var(--text)]">
                  {row.role}
                </span>

                <div className="mt-7">
                  <span className="font-mono text-[13px] tracking-[0.12em] text-[var(--danger)] font-semibold">
                    YOUR COST TODAY
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-[36px] sm:text-[42px] font-semibold tracking-[-0.03em] line-through decoration-[var(--danger)]/60 decoration-[2px] text-[var(--text)]">
                      {row.current}
                    </span>
                    <span className="text-[15px] text-[var(--muted)]">
                      {row.currentLabel}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] text-[var(--muted)] leading-snug">
                    {row.breakdown}
                  </p>
                </div>

                <div className="my-6 hairline" />

                <div>
                  <span className="font-mono text-[13px] tracking-[0.12em] text-[var(--accent)] font-semibold">
                    WITH KOLLABORATE
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-[36px] sm:text-[42px] font-semibold tracking-[-0.03em] text-[var(--accent)]">
                      {row.ours}
                    </span>
                    <span className="text-[15px] text-[var(--muted)]">
                      {row.oursLabel}
                    </span>
                  </div>
                </div>

                <div className="mt-7 rounded-xl bg-[var(--accent-tint)] border border-[var(--accent)]/25 p-5">
                  <span className="font-mono text-[13px] tracking-[0.12em] text-[var(--accent)] font-semibold">
                    YOU SAVE
                  </span>
                  <div className="mt-1.5">
                    <span className="font-display text-[34px] sm:text-[38px] font-semibold tracking-[-0.02em] text-[var(--accent)]">
                      {row.save}
                    </span>
                    <span className="block mt-1 font-serif italic font-normal text-[18px] text-[var(--accent)]/90">
                      {row.saveLabel}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-14 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border)] p-8 sm:p-10 text-center max-w-[840px] mx-auto">
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text)]">
              All three together: total ops cost around{" "}
              <span className="font-display font-semibold text-[22px] sm:text-[24px]">
                $111,000/yr
              </span>{" "}
              replaced for{" "}
              <span className="font-display font-semibold text-[22px] sm:text-[24px] text-[var(--accent)]">
                $18,000/yr
              </span>{" "}
              on our full stack.
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
    body: "A custom voice agent trained on your intake questions, pricing, and booking rules. Answers in under 2 rings, 24/7. Books directly into your calendar. Routes emergencies to your cell.",
    bullets: [
      "Answers in your business voice (EN or FR)",
      "Books into Cal.com, Square, or your existing calendar",
      "Handles FAQs, pricing, and hours without a human",
      "Escalates complex calls to whoever you designate",
    ],
    result: "94% of calls resolved without human intervention.",
    Visual: CallVisual,
  },
  {
    n: "02",
    eyebrow: "REVIEW AUTOMATION",
    title: "Every happy customer becomes a review.",
    body: "Automated request pipeline fires after every appointment or transaction. Happy customers get asked on their preferred channel. Unhappy ones route to you privately before the star rating goes public.",
    bullets: [
      "SMS + email, sent at the right moment post-service",
      "Smart routing: 4-5★ to Google, 1-3★ to your inbox",
      "Drafts a response for every review in your voice",
      "Dashboard tracking 30/60/90-day review velocity",
    ],
    result: "Clients typically see 3× review volume within 60 days.",
    Visual: ReviewVisual,
  },
  {
    n: "03",
    eyebrow: "WEBSITE",
    title: "A site that actually converts.",
    body: "Fast, professional, built for the industries you work in. Not a generic template. Ships in 7 to 10 days. Every page scored 90+ on Lighthouse before we hand it over. You own the code.",
    bullets: [
      "Next.js + Vercel, sub-second load times",
      "Mobile-first, WCAG-compliant, SEO-ready at launch",
      "Live-booking widget wired to the voice agent",
      "Monthly updates included: copy, pages, seasonal changes",
    ],
    result: "Lighthouse average: 98 Performance, 100 Accessibility.",
    Visual: SiteVisual,
  },
];

const SERVICES_SIDE = [
  {
    n: "04",
    eyebrow: "CONTENT & SOCIAL",
    title: "Three posts a week, written for your business.",
    body: "We write, design, and schedule. You approve in a weekly Slack thread in under 5 minutes.",
    bullets: [
      "3 posts/week across IG, FB, Google Business",
      "Monthly content plan tied to your seasonal demand",
      "Nothing goes live without your approval",
    ],
    result: "4.2× engagement lift vs. pre-Kollaborate.",
    Visual: ContentVisual,
  },
  {
    n: "05",
    eyebrow: "LEAD FOLLOW-UP",
    title: "Leads replied to in under a minute.",
    body: "Every web form, email, and DM gets an automated acknowledgment in 60 seconds, then a real follow-up within 2 hours.",
    bullets: [
      "Unified inbox: web, email, Instagram, FB, TikTok",
      "60-second auto-reply, 2-hour human reply",
      "30/60/90-day nurture for cold leads",
    ],
    result: "78% of leads answered within 60 seconds, 24/7.",
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
          <SectionLabel>02 · The stack</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
            Five services.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
              One team running them.
            </span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
            Each of these is already eating a seat on your team. We take the
            seat, keep it running 24/7, and charge less than what benefits
            cost.
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
                      {s.n} · {s.eyebrow}
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
                    {s.n} · {s.eyebrow}
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
          <SectionLabel>03 · Case study</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[960px]">
            Somewhere Dine &amp; Bar.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
              From 4.3★ to 4.9★ in 47 days.
            </span>
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <FadeUp className="lg:col-span-7">
            <div className="max-w-[640px]">
              <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--text)]">
                Montreal restaurant, 80 covers, 11-person team. Great food,
                inconsistent reviews. The staff would mean to ask for reviews,
                but between service and close it never happened. One bad
                review a month was quietly dragging the rating down.
              </p>
              <p className="mt-6 text-[18px] sm:text-[19px] leading-[1.65] text-[var(--muted)]">
                We hooked the POS into an SMS + email sequence. Happy tables
                got a review request 2 hours after they paid. Unhappy tables
                went to the owner first. 47 days after launch, the rating had
                lifted from 4.3 to 4.9 on 39 new reviews.
              </p>
              <figure className="mt-10 border-l-2 border-[var(--accent)] pl-7">
                <blockquote className="font-serif italic text-[24px] sm:text-[28px] leading-[1.35] text-[var(--text)]">
                  &quot;We used to get one review every two weeks. Now we get
                  three a week and nobody on staff lifts a finger. Our Friday
                  nights are booked solid for the first time in two years.&quot;
                </blockquote>
                <figcaption className="mt-5 text-[14px] text-[var(--muted)]">
                  Ownership, Somewhere Dine &amp; Bar · Montreal
                </figcaption>
              </figure>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--muted)] font-semibold">
                47-DAY RESULTS
              </span>
              <div className="mt-7 space-y-6">
                <Stat k="Google rating" v="4.3 → 4.9" delta="+0.6★" />
                <Stat k="Reviews captured" v="39" delta="+3.1×" />
                <Stat k="Weekly Google traffic" v="+68%" delta="" />
                <Stat k="Friday reservations" v="+42%" delta="" />
                <Stat k="Staff hours spent" v="0" delta="was ~4/wk" />
              </div>
              <div className="mt-8 border-t border-[var(--border)] pt-5 text-[14px] text-[var(--muted)] leading-relaxed">
                Live since March 2026. Running on the $100/mo reviews retainer.
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

const TESTIMONIALS = [
  {
    quote:
      "The voice agent books more appointments on a Sunday night than my team does on a Monday morning. It just works.",
    name: "HVAC Services Owner",
    city: "Plateau, Montreal",
    metric: "93% of calls resolved",
  },
  {
    quote:
      "We canceled the receptionist job posting two days after going live. Calls are being answered better than when a human was doing it.",
    name: "Dental Practice Manager",
    city: "Cote-des-Neiges, Montreal",
    metric: "$54k/yr saved",
  },
  {
    quote:
      "The content calendar alone is worth it. I used to forget to post for weeks. Now it's three posts a week without me thinking about it.",
    name: "HVAC Co-owner",
    city: "Laval",
    metric: "4.2× engagement",
  },
  {
    quote:
      "Most agencies sell you a dashboard. These guys sell you the outcome. I don't log into anything. The numbers show up in my inbox on Friday.",
    name: "Nonprofit Director",
    city: "Osgoode, ON",
    metric: "Site shipped in 8 days",
  },
  {
    quote:
      "I was paying an agency $3,400/month for marketing and a receptionist $48k/year. Kollaborate replaced both for $1,500/month total.",
    name: "Auto Shop Owner",
    city: "Plateau, Montreal",
    metric: "$52k/yr freed up",
  },
];

function Proof() {
  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <SectionLabel onDark>04 · Clients</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] lg:text-[56px] max-w-[960px]">
            Local businesses that stopped losing money to admin.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent-bright)]">
              Their words, their numbers.
            </span>
          </h2>
        </FadeUp>

        {/* aggregate stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border-on-dark)] rounded-2xl overflow-hidden border border-[var(--border-on-dark)]">
          {[
            { v: "8,400+", l: "calls answered" },
            { v: "1,270", l: "reviews captured" },
            { v: "$710k", l: "saved for clients" },
            { v: "47s", l: "avg lead response" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-[var(--bg-dark-2)] p-6 sm:p-8 text-center"
            >
              <div className="font-display text-[32px] sm:text-[44px] font-semibold tracking-[-0.03em] text-[var(--accent-bright)]">
                {s.v}
              </div>
              <div className="mt-2 text-[13px] sm:text-[14px] font-mono tracking-wider text-[var(--text-inverse)]/70 uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <figure
                className={`h-full rounded-2xl border border-[var(--border-on-dark)] bg-white/[0.03] p-8 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((k) => (
                    <svg
                      key={k}
                      viewBox="0 0 20 20"
                      className="h-4 w-4 fill-[var(--accent-bright)]"
                    >
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-6 text-[18px] sm:text-[19px] leading-[1.55] text-[var(--text-inverse)]/95 font-serif">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--text-inverse)]">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-[var(--text-inverse)]/55 mt-0.5">
                      {t.city}
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--accent-bright)] whitespace-nowrap font-semibold">
                    {t.metric}
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
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
          <SectionLabel>05 · How we work</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[900px]">
            From hello to live on your phones.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
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
          <SectionLabel>06 · Pricing</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[900px]">
            One flat rate.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
              No hidden fees. No per-call overages.
            </span>
          </h2>
          <p className="mt-7 max-w-[640px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
            Start with any single service for $750/month, or bundle the full
            stack for $1,500/month. Month to month. Cancel any time.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Starter */}
          <FadeUp>
            <div className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 flex flex-col">
              <div>
                <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--muted)] font-semibold">
                  STARTER · SINGLE SERVICE
                </span>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-[48px] sm:text-[52px] font-semibold tracking-[-0.04em] leading-none">
                    $750
                  </span>
                  <span className="font-display text-[22px] text-[var(--muted)]">
                    /mo
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-[var(--muted)]">
                  Plus one-time setup from $500.
                </p>
              </div>
              <ul className="mt-8 space-y-3.5 flex-1">
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Pick any one service: calls, reviews, site, content, or leads</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Full setup, training, and live-call tuning included</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Friday performance report in your inbox</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Add more services à la carte anytime</span>
                </li>
              </ul>
              <a
                href={MAILTO}
                className="mt-9 inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--text)] bg-transparent px-7 text-[16px] font-semibold text-[var(--text)] transition-all hover:-translate-y-px hover:bg-[var(--text)] hover:text-[var(--text-inverse)]"
              >
                Start with one service
              </a>
            </div>
          </FadeUp>

          {/* Full Stack, featured */}
          <FadeUp delay={0.08}>
            <div className="relative h-full rounded-2xl bg-[var(--bg-dark)] text-[var(--text-inverse)] p-8 flex flex-col overflow-hidden border border-[var(--accent-bright)]/40 shadow-[0_12px_44px_-10px_rgba(12,31,26,0.45)]">
              <div className="absolute inset-0 grain-dark pointer-events-none" />
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[var(--accent-bright)] text-[var(--bg-dark)] px-5 py-1.5 rounded-b-lg font-mono text-[11px] tracking-[0.14em] font-semibold">
                RECOMMENDED
              </div>
              <div className="relative z-10">
                <div>
                  <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--accent-bright)] font-semibold">
                    FULL OPS STACK · ALL FIVE
                  </span>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-[56px] sm:text-[68px] font-semibold tracking-[-0.04em] leading-none text-[var(--text-inverse)]">
                      $1,500
                    </span>
                    <span className="font-display text-[24px] text-[var(--text-inverse)]/60">
                      /mo
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] text-[var(--text-inverse)]/70">
                    One-time setup from $2,500. Usually breaks even in month 2.
                  </p>
                </div>
                <ul className="mt-8 space-y-3.5">
                  {[
                    "Everything in Starter, times five",
                    "Call handling 24/7 with calendar + text confirms",
                    "Review automation with smart routing",
                    "Website rebuild or monthly updates",
                    "3 posts/week across IG, FB, Google Business",
                    "Lead follow-up in 60 seconds, all channels",
                    "Monthly strategy call with Yosef",
                    "Priority Slack support, same-day replies",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[16px] leading-[1.5] text-[var(--text-inverse)]/95"
                    >
                      <CheckBright />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={MAILTO}
                  className="mt-9 inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--accent-bright)] px-7 text-[16px] font-semibold text-[var(--bg-dark)] transition-all hover:-translate-y-px hover:bg-white"
                >
                  Book a demo →
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Custom */}
          <FadeUp delay={0.16}>
            <div className="card-base h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 flex flex-col">
              <div>
                <span className="font-mono text-[13px] tracking-[0.14em] text-[var(--muted)] font-semibold">
                  CUSTOM · BUILT FOR YOU
                </span>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-[40px] sm:text-[44px] font-semibold tracking-[-0.03em] leading-none">
                    Let&apos;s talk
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-[var(--muted)]">
                  Multi-location, custom integrations, or unusual volume.
                </p>
              </div>
              <ul className="mt-8 space-y-3.5 flex-1">
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Multi-location rollouts (2+ sites or numbers)</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Custom CRM, EMR, or booking integrations</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>Bilingual voice agents (EN/FR, EN/ES)</span>
                </li>
                <li className="flex items-start gap-3 text-[16px] leading-[1.5]">
                  <Check />
                  <span>White-glove onboarding + monthly ops review</span>
                </li>
              </ul>
              <a
                href={MAILTO}
                className="mt-9 inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--text)] bg-transparent px-7 text-[16px] font-semibold text-[var(--text)] transition-all hover:-translate-y-px hover:bg-[var(--text)] hover:text-[var(--text-inverse)]"
              >
                Get a custom quote
              </a>
            </div>
          </FadeUp>
        </div>
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
          <SectionLabel>07 · Who runs this</SectionLabel>
          <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px]">
            Built in Montreal.
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">
              Run by people, not a platform.
            </span>
          </h2>
        </FadeUp>
        <FadeUp className="lg:col-span-7" delay={0.1}>
          <div className="space-y-6 max-w-[640px]">
            <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--text)]">
              Kollaborate is a small agency out of Côte-Saint-Luc, founded in
              2026. We started with one restaurant and a review automation
              script. Eleven months later, we run five-service ops stacks for
              local businesses across Montreal, Ottawa, and Eastern Ontario.
            </p>
            <p className="text-[18px] sm:text-[19px] leading-[1.65] text-[var(--muted)]">
              We keep the client roster small on purpose. Three new clients
              per month, no more. Every account has a direct line to the
              person doing the work. No account executives, no offshore
              support, no ticketing maze. When something breaks, you text us.
              It gets fixed.
            </p>
            <div className="pt-5 flex flex-wrap gap-8 text-[15px] font-mono tracking-wide text-[var(--muted)]">
              <div>
                <span className="text-[var(--text)] font-semibold text-[17px]">
                  11+
                </span>{" "}
                active clients
              </div>
              <div>
                <span className="text-[var(--text)] font-semibold text-[17px]">
                  98%
                </span>{" "}
                retention
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
            <SectionLabel>08 · Questions</SectionLabel>
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
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent-bright)] tracking-[-0.01em]">
              to missed calls.
            </span>
          </h2>
          <p className="mt-8 mx-auto max-w-[620px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/85">
            Fifteen minutes on a Zoom. We&apos;ll run our voice agent against
            your actual intake questions live so you can judge it yourself.
          </p>
          <div className="mt-11 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={MAILTO}
              className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[var(--accent-bright)] px-10 text-[18px] font-semibold text-[var(--bg-dark)] shadow-[0_12px_44px_-12px_rgba(168,213,187,0.55)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Book a 15-minute call →
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
                  Content
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
                  yosef@kollaborate.ca
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

function CheckBright() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="mt-[6px] h-[16px] w-[16px] shrink-0 text-[var(--accent-bright)]"
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
