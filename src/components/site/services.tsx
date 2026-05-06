import { FadeUp } from "@/components/site/fade-up";

type Service = {
  eyebrow: string;
  title: string;
  body: string;
};

const SERVICES: Service[] = [
  {
    eyebrow: "CALL HANDLING",
    title: "Phones answered every time.",
    body: "AI voice agent in front of your team, or behind it. 9 out of 10 calls handled without a human, in English or French.",
  },
  {
    eyebrow: "GOOGLE BUSINESS",
    title: "Your Google profile, run weekly.",
    body: "Posts, photos, categories, and review replies kept tight. Optimized so ChatGPT, Gemini, and Perplexity recommend you too.",
  },
  {
    eyebrow: "REVIEW AUTOMATION",
    title: "Every paid ticket triggers a review ask.",
    body: "Happy customers get sent to Google. Unhappy ones land in your inbox first. Drafted replies waiting for your approval.",
  },
  {
    eyebrow: "WEBSITE",
    title: "A site that loads under a second.",
    body: "Built for your industry, not a template. Live in 7 to 10 days, monthly updates included, you own the code.",
  },
  {
    eyebrow: "LEAD FOLLOW-UP",
    title: "Every lead replied to in 60 seconds.",
    body: "One inbox for web, email, IG, FB, TikTok. Auto-reply in under a minute. Real-human follow-up within two hours.",
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
            <span className="font-mono text-[15px] tracking-[0.2em] font-semibold text-[var(--accent)]">
              What we run
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[820px]">
            Five services. One team running them.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <article
                key={s.eyebrow}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all hover:border-[var(--accent)]/40 hover:-translate-y-0.5"
              >
                <span className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent)] font-semibold">
                  {s.eyebrow}
                </span>
                <h3 className="mt-4 font-display font-semibold tracking-[-0.015em] leading-[1.2] text-[22px] sm:text-[24px] text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-[var(--muted)]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
