import { FadeUp } from "@/components/site/fade-up";

type Service = {
  eyebrow: string;
  title: string;
  stat: string;
  statLabel: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    eyebrow: "Call handling",
    title: "Phones answered every time.",
    stat: "9/10",
    statLabel: "calls handled without a human",
    bullets: [
      "30% of your inbound calls go to voicemail and never call back.",
      "AI voice agent picks up after 3 rings, books the appointment, handles after-hours, English or French.",
    ],
  },
  {
    eyebrow: "Google Business",
    title: "Your Google profile, run weekly.",
    stat: "80%",
    statLabel: "of locals see this page before your site",
    bullets: [
      "Most local profiles go stale within 60 days, and ranking quietly slips with them.",
      "Weekly posts with real photos, categories tuned for local search, optimized so ChatGPT and Perplexity recommend you too.",
    ],
  },
  {
    eyebrow: "Review automation",
    title: "Every paid ticket asks for a review.",
    stat: "100%",
    statLabel: "of paid tickets get the ask",
    bullets: [
      "Your happiest customers leave without ever being asked.",
      "Auto-text after every visit. 4 and 5 stars go straight to Google. Lower ratings come to you privately first.",
    ],
  },
  {
    eyebrow: "Website",
    title: "A site that loads under a second.",
    stat: "<1s",
    statLabel: "load time, 95+ Lighthouse, every device",
    bullets: [
      "Slow, generic templates lose visitors before they convert.",
      "Custom build for your industry, booking wired in. You own the code. Live in 7 to 10 days.",
    ],
  },
  {
    eyebrow: "Lead follow-up",
    title: "Every lead replied to in 60 seconds.",
    stat: "<60s",
    statLabel: "speed-to-lead on every channel",
    bullets: [
      "Web forms and DMs go cold while leads shop your competitors.",
      "One inbox for web, email, IG, FB, TikTok. Auto-reply under a minute. Real-human follow-up inside two hours.",
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
            <span className="text-[16px] sm:text-[17px] tracking-[0.02em] font-semibold text-[var(--accent)]">
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
                  <span className="text-[14px] tracking-[0.02em] text-[var(--accent)] font-semibold">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-3 font-display font-bold tracking-[-0.015em] leading-[1.2] text-[22px] sm:text-[24px] text-[var(--text)]">
                    {s.title}
                  </h3>
                  <div className="mt-6 pb-6 border-b border-[var(--border)]">
                    <div className="font-display font-bold tracking-[-0.04em] leading-none text-[44px] sm:text-[52px] text-[var(--accent)]">
                      {s.stat}
                    </div>
                    <div className="mt-2 text-[14px] sm:text-[15px] leading-[1.45] text-[var(--text)] font-medium">
                      {s.statLabel}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 flex-1">
                    {s.bullets.map((text) => (
                      <li
                        key={text}
                        className="flex items-start gap-2.5 text-[14px] sm:text-[15px] leading-[1.55] text-[var(--muted)] font-medium"
                      >
                        <span
                          aria-hidden
                          className="mt-[8px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/60"
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
