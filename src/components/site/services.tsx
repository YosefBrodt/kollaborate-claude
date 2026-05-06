import { FadeUp } from "@/components/site/fade-up";

type Service = {
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

const SERVICES: Service[] = [
  {
    eyebrow: "CALL HANDLING",
    title: "Phones answered every time.",
    problem: "Missed calls cost you 30% of your inbound jobs.",
    solution: "AI voice agent picks up after 3 rings, books appointments, takes after-hours calls in English or French.",
    outcome: "9 out of 10 calls handled without a human.",
  },
  {
    eyebrow: "GOOGLE BUSINESS",
    title: "Your Google profile, run weekly.",
    problem: "Profiles go stale, posts stop, ranking quietly slips.",
    solution: "Weekly posts with real photos, categories tuned for local search, AI-search optimization for ChatGPT, Gemini and Perplexity.",
    outcome: "The page 80% of locals see first, kept alive every week.",
  },
  {
    eyebrow: "REVIEW AUTOMATION",
    title: "Every paid ticket asks for a review.",
    problem: "Happy customers leave without ever being asked.",
    solution: "Auto-text after every visit. 4 and 5 stars go to Google. 1 to 3 stars come to you privately first.",
    outcome: "Steady review velocity. Bad reviews caught before they post.",
  },
  {
    eyebrow: "WEBSITE",
    title: "A site that loads under a second.",
    problem: "Slow, generic templates lose traffic before it converts.",
    solution: "Custom build for your industry, sub-second load, booking widget wired in. You own the code.",
    outcome: "Live in 7 to 10 days. 95+ Lighthouse on every device.",
  },
  {
    eyebrow: "LEAD FOLLOW-UP",
    title: "Every lead replied to in 60 seconds.",
    problem: "Web forms and DMs sit cold while leads go shop competitors.",
    solution: "One inbox for web, email, IG, FB, TikTok. Auto-reply in under a minute. Real-human follow-up within two hours.",
    outcome: "Speed-to-lead under a minute, on every channel.",
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
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[820px]">
            Five services.
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
              One team running them.
            </span>
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
                    <Bullet kind="problem" text={s.problem} />
                    <Bullet kind="solution" text={s.solution} />
                    <Bullet kind="outcome" text={s.outcome} />
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

function Bullet({
  kind,
  text,
}: {
  kind: "problem" | "solution" | "outcome";
  text: string;
}) {
  const config = {
    problem: { label: "Problem", color: "text-[#a83a2a]", bg: "bg-[#a83a2a]/12" },
    solution: { label: "Solution", color: "text-[var(--accent)]", bg: "bg-[var(--accent)]/12" },
    outcome: { label: "Outcome", color: "text-[var(--accent)]", bg: "bg-[var(--accent-bright)]/35" },
  }[kind];

  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-[3px] inline-flex shrink-0 items-center rounded-full px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] font-bold ${config.color} ${config.bg}`}
        style={{ minWidth: "76px", justifyContent: "center" }}
      >
        {config.label.toUpperCase()}
      </span>
      <span className="text-[14px] sm:text-[15px] leading-[1.5] text-[var(--text)] font-medium">
        {text}
      </span>
    </li>
  );
}
