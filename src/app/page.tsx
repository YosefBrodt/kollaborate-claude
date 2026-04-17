import Link from "next/link";
import { Header } from "@/components/site/header";
import { FadeUp } from "@/components/site/fade-up";
import { FAQ } from "@/components/site/faq";

const MAILTO =
  "mailto:yosef@kollaborate.ca?subject=Kollaborate%20demo%20request";

const SERVICES = [
  {
    n: "01",
    title: "Call handling.",
    body: "Your phone gets answered every time. Appointments booked, overflow routed, nothing goes to voicemail. Works 24/7, holidays included.",
  },
  {
    n: "02",
    title: "Review automation.",
    body: "Every happy customer gets asked for a Google review. Every unhappy one gets caught before it goes public. Your reputation compounds.",
  },
  {
    n: "03",
    title: "Website.",
    body: "A fast, credible site that turns visitors into booked calls. Built in a week, designed for the industries you actually work in.",
  },
  {
    n: "04",
    title: "Content and social.",
    body: "Weekly posts, monthly content, consistent presence. We write, you approve, nothing goes live without your say.",
  },
  {
    n: "05",
    title: "Email and lead follow-up.",
    body: "New leads get a response in minutes, not days. Old leads get nurtured. Nothing falls through.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 pt-20 sm:pt-28 lg:pt-32 pb-24 sm:pb-36 lg:pb-40">
          <div className="max-w-[900px]">
            <FadeUp onView={false} duration={0.6} travel={12}>
              <h1 className="font-display font-medium leading-[1.05] tracking-[-0.015em] text-[32px] sm:text-[40px] lg:text-[56px] text-[var(--text)]">
                Done-for-you growth for local service businesses.
              </h1>
            </FadeUp>

            <FadeUp onView={false} delay={0.08} duration={0.6} travel={12}>
              <p className="mt-6 sm:mt-7 max-w-[560px] text-[17px] sm:text-[20px] leading-[1.55] text-[var(--muted)]">
                One team handles everything between your phone ringing and your
                calendar filling. Voice, reviews, website, content, follow-up.
                We run it. You get the results.
              </p>
            </FadeUp>

            <FadeUp onView={false} delay={0.16} duration={0.6} travel={12}>
              <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a
                  href={MAILTO}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[var(--accent)] px-6 text-[15px] font-medium text-white transition-all duration-150 hover:-translate-y-px hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  Book a 15-minute call
                </a>
                <Link
                  href="#services"
                  className="text-[15px] text-[var(--muted)] underline-offset-4 hover:underline hover:text-[var(--text)] transition-colors"
                >
                  See what we do ↓
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-6 sm:px-8 pb-24 sm:pb-32"
        >
          <FadeUp>
            <p className="font-display italic text-[14px] tracking-[0.05em] text-[var(--muted)]">
              What we handle
            </p>
            <h2 className="mt-3 font-display font-medium leading-[1.1] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[40px] text-[var(--text)] max-w-[720px]">
              Everything between the phone and the calendar.
            </h2>
          </FadeUp>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.05}>
                <article className="group h-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--accent)_30%,var(--border))] hover:shadow-[0_2px_16px_-4px_rgba(17,17,17,0.06)]">
                  <div className="flex flex-col h-full">
                    <span className="font-mono text-[13px] text-[var(--muted)] tracking-wide">
                      {s.n}
                    </span>
                    <h3 className="mt-6 font-display font-medium text-[22px] leading-[1.2] text-[var(--text)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[var(--muted)]">
                      {s.body}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* BAND */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-20">
          <FadeUp>
            <p className="mx-auto max-w-[640px] text-center font-display italic text-[18px] sm:text-[22px] leading-[1.5] text-[var(--text)]">
              Pick one piece. Pick all five. Either way, it&apos;s one team, one
              invoice, one relationship.
            </p>
          </FadeUp>
        </section>

        {/* PRICING */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-24">
          <FadeUp>
            <div className="mx-auto max-w-[520px] rounded-2xl border-2 border-[var(--accent)] bg-[var(--card-pricing)] p-10 sm:p-12">
              <p className="text-[13px] font-medium tracking-[0.14em] text-[var(--muted)]">
                FULL OPS STACK
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display font-medium text-[40px] sm:text-[44px] leading-none tracking-[-0.02em] text-[var(--text)]">
                  $1,500
                </span>
                <span className="font-display text-[22px] text-[var(--muted)]">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-[15px] text-[var(--muted)]">
                everything above, managed for you
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "All five services, one flat rate",
                  "Real humans on support, not a chatbot",
                  "Month-to-month, cancel anytime",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-[15px] leading-[1.55] text-[var(--text)]"
                  >
                    <Check />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href={MAILTO}
                className="mt-9 inline-flex h-12 w-full items-center justify-center rounded-md bg-[var(--accent)] px-6 text-[15px] font-medium text-white transition-all duration-150 hover:-translate-y-px hover:bg-[var(--accent-hover)]"
              >
                Book a call →
              </a>
            </div>
            <p className="mt-6 text-center text-[14px] leading-[1.6] text-[var(--muted)] max-w-[560px] mx-auto">
              Not ready for the full stack? Start with any single service from
              $750/mo.
              <br />
              Book a call for a custom mix.
            </p>
          </FadeUp>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-24 border-t border-[var(--border)]">
          <FadeUp>
            <p className="font-display italic text-[14px] tracking-[0.05em] text-[var(--muted)]">
              Who we work with
            </p>
            <h2 className="mt-3 font-display font-medium leading-[1.15] tracking-[-0.01em] text-[24px] sm:text-[28px] lg:text-[32px] text-[var(--text)] max-w-[720px]">
              Small businesses in Montreal, Ottawa, and Eastern Ontario.
            </h2>
          </FadeUp>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24">
            <FadeUp>
              <h3 className="font-display font-medium text-[24px] sm:text-[28px] leading-[1.2] text-[var(--text)]">
                Somewhere Dine &amp; Bar
              </h3>
              <p className="mt-2 text-[13px] text-[var(--muted)] leading-[1.5]">
                Restaurant, Montreal. Reviews automated since March 2026.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h3 className="font-display font-medium text-[24px] sm:text-[28px] leading-[1.2] text-[var(--text)]">
                You Feed Them
              </h3>
              <p className="mt-2 text-[13px] text-[var(--muted)] leading-[1.5]">
                Nonprofit, Osgoode ON. Site launched April 2026.
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <p className="mt-16 text-center text-[15px] italic text-[var(--muted)]">
              We take on three new clients per month. Next opening: May.
            </p>
          </FadeUp>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-28 border-t border-[var(--border)]">
          <FadeUp>
            <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
              <p className="font-display italic text-[14px] tracking-[0.05em] text-[var(--muted)]">
                Questions
              </p>
              <h2 className="mt-3 font-display font-medium leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[32px] text-[var(--text)]">
                Before you book the call.
              </h2>
            </div>
          </FadeUp>
          <FadeUp>
            <FAQ />
          </FadeUp>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 py-24 sm:py-32 border-t border-[var(--border)] text-center">
          <FadeUp>
            <p className="font-display italic text-[22px] sm:text-[28px] leading-[1.35] text-[var(--text)]">
              Ready to stop missing calls?
            </p>
            <a
              href={MAILTO}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[var(--accent)] px-7 text-[15px] font-medium text-white transition-all duration-150 hover:-translate-y-px hover:bg-[var(--accent-hover)]"
            >
              Book a 15-minute call →
            </a>
            <p className="mt-5 text-[14px] text-[var(--muted)]">
              Response within 24 hours. Usually same day.
            </p>
          </FadeUp>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 text-center space-y-1.5">
            <p className="text-[13px] text-[var(--muted)]">
              Kollaborate · Montreal, QC
            </p>
            <p className="text-[13px] text-[var(--muted)]">
              <a
                href={MAILTO}
                className="hover:text-[var(--text)] transition-colors"
              >
                yosef@kollaborate.ca
              </a>
            </p>
            <p className="text-[13px] text-[var(--muted)]">© 2026 Kollaborate</p>
          </div>
        </footer>
      </main>
    </>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="mt-[6px] h-[14px] w-[14px] shrink-0 text-[var(--accent)]"
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
