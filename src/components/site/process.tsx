import { FadeUp } from "@/components/site/fade-up";

type Step = {
  num: string;
  day: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    day: "Day 0",
    title: "Discovery and handoff",
    body: "15-minute call. We pull your numbers, listen to your busiest call types, and run the voice agent live against your real intake questions. You judge the output. Setup paid same day if you go.",
  },
  {
    num: "02",
    day: "Days 1 to 3",
    title: "Voice agent and GBP live",
    body: "Agent gets your scripts, hours, pricing rules, escalation list. EN and FR. Google Business profile is reorganized, categories tuned, weekly post schedule starts. Both go live on a parallel forwarded number.",
  },
  {
    num: "03",
    day: "Days 4 to 7",
    title: "Site and reviews live",
    body: "Custom site shipped, booking wired in, under 1s load. Review pipeline tied into your POS or PMS so every paid ticket auto-asks. 4 and 5 stars route to Google, lower ratings come to you privately.",
  },
  {
    num: "04",
    day: "Days 8 to 10",
    title: "Lead inbox and handoff",
    body: "Web, email, IG, FB, TikTok all unified into one inbox. Auto-reply under a minute, human follow-up inside two hours. We port your main number, sign off on quality, you go live.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="bg-[var(--bg-dark)] text-[var(--text-inverse)] py-20 sm:py-24 border-b border-[var(--border-on-dark)] scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--accent-bright)]" />
            <span className="font-mono text-[15px] tracking-[0.2em] font-bold text-[var(--accent-bright)]">
              YOUR FIRST 10 DAYS
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[900px]">
            From signed to live
            <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.015em]">
              in under two weeks.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-[var(--border-on-dark)] pt-10">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span className="font-serif italic text-[64px] sm:text-[72px] font-medium leading-none text-[var(--accent-bright)]">
                  {step.num}
                </span>
                <span className="mt-6 font-mono text-[12px] tracking-[0.16em] font-bold text-[var(--accent-bright)]">
                  {step.day.toUpperCase()}
                </span>
                <h3 className="mt-3 font-display text-[20px] sm:text-[22px] font-semibold tracking-[-0.015em] leading-[1.25] text-[var(--text-inverse)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-inverse)]/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
