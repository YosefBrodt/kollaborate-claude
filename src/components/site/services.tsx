import { FadeUp } from "@/components/site/fade-up";

type Service = {
  eyebrow: string;
  title: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    eyebrow: "CALL HANDLING",
    title: "Phones answered every time.",
    bullets: [
      "30% of your inbound calls go to voicemail and never call back.",
      "AI voice agent picks up after 3 rings, books the appointment, handles after-hours, English or French.",
      "9 out of 10 calls handled without a human.",
    ],
  },
  {
    eyebrow: "GOOGLE BUSINESS",
    title: "Your Google profile, run weekly.",
    bullets: [
      "Most local profiles go stale within 60 days, and ranking quietly slips with them.",
      "Weekly posts with real photos, categories tuned for local search, optimized so ChatGPT and Perplexity recommend you too.",
      "The page 80% of locals see first, kept alive every week.",
    ],
  },
  {
    eyebrow: "REVIEW AUTOMATION",
    title: "Every paid ticket asks for a review.",
    bullets: [
      "Your happiest customers leave without ever being asked.",
      "Auto-text after every visit. 4 and 5 stars go straight to Google. Lower ratings come to you privately first.",
      "Steady review flow. Bad ones caught before they go public.",
    ],
  },
  {
    eyebrow: "WEBSITE",
    title: "A site that loads under a second.",
    bullets: [
      "Slow, generic templates lose visitors before they convert.",
      "Custom build for your industry, sub-second load, booking wired in. You own the code.",
      "Live in 7 to 10 days. 95+ Lighthouse on every device.",
    ],
  },
  {
    eyebrow: "LEAD FOLLOW-UP",
    title: "Every lead replied to in 60 seconds.",
    bullets: [
      "Web forms and DMs go cold while leads shop your competitors.",
      "One inbox for web, email, IG, FB, TikTok. Auto-reply under a minute. Real-human follow-up inside two hours.",
      "Speed-to-lead under 60 seconds on every channel.",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-[var(--bg-cream)] py-20 sm:py-24 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--accent)]" />
            <span className="font-mono text-[15px] tracking-[0.2em] font-bold text-[var(--accent)]">
              What we run
            </span>
          </div>
          <h2 className="mt-6 font-display font-bold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[820px]">
            Five services. One team running them.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {SERVICES.map((s, i) => {
              // First three cards span 2 cols (3 across the top row).
              // Last two cards span 3 cols each, centering the bottom row.
              const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <article
                  key={s.eyebrow}
                  className={`${span} flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all hover:border-[var(--accent)]/40 hover:-translate-y-0.5`}
                >
                  <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent)] font-bold">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display font-bold tracking-[-0.015em] leading-[1.2] text-[22px] sm:text-[24px] text-[var(--text)]">
                    {s.title}
                  </h3>
                  <ul className="mt-5 space-y-3 flex-1">
                    {s.bullets.map((text) => (
                      <li
                        key={text}
                        className="flex items-start gap-2.5 text-[14px] sm:text-[15px] leading-[1.55] text-[var(--text)] font-medium"
                      >
                        <span
                          aria-hidden
                          className="mt-[8px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
