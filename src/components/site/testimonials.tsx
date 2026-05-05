import { FadeUp } from "@/components/site/fade-up";

type Testimonial = {
  initial: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  // Optional live site URL — when set, renders a "View site" link instead of a chip
  siteUrl?: string;
  siteLabel?: string;
  // Tailwind-friendly background tint for the avatar circle
  avatarBg: string;
  avatarText: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    initial: "A",
    name: "Ali",
    role: "Restaurant owner",
    location: "Ottawa, ON",
    quote:
      "Joseph rebuilt our site from scratch. It actually works on a phone now, looks like our place feels, and the booking page is clean. Real upgrade from what we had.",
    avatarBg: "bg-[#f5b800]/25",
    avatarText: "text-[#8a6500]",
  },
  {
    initial: "R",
    name: "Roland",
    role: "Nonprofit director",
    location: "Montreal, QC",
    quote:
      "Joseph built our nonprofit's website. Cleaner, faster, easier for donors and volunteers to find what they need. Held up well for us since launch.",
    avatarBg: "bg-[var(--accent-bright)]/30",
    avatarText: "text-[var(--accent)]",
  },
  {
    initial: "P",
    name: "Pierre",
    role: "Water delivery",
    location: "Eastern Ontario",
    quote:
      "Joseph rebuilt our site and the booking flow. Loads instantly and customers can place an order without picking up the phone. Solid work.",
    avatarBg: "bg-[#1a73e8]/20",
    avatarText: "text-[#1a73e8]",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-20 sm:py-24 overflow-hidden border-b border-[var(--border-on-dark)] scroll-mt-20">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(168,213,187,0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--accent-bright)]" />
            <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent-bright)] font-semibold">
              SITES I&apos;VE BUILT
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[920px]">
            What owners say about the work.
          </h2>
          <p className="mt-6 max-w-[640px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--text-inverse)]/70">
            Three businesses I&apos;ve built and currently maintain websites
            for. Live site links available on the call. Full receptionist and
            review case studies coming soon.
          </p>
        </FadeUp>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <article className="group h-full flex flex-col rounded-2xl border border-[var(--border-on-dark)] bg-white/[0.03] p-7 sm:p-8 transition-all duration-200 hover:border-[var(--accent-bright)]/40 hover:bg-white/[0.05]">
                {/* Top row: 5-star rating */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      viewBox="0 0 20 20"
                      fill="#F5B800"
                      className="h-4 w-4"
                    >
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 text-[17px] sm:text-[19px] leading-[1.55] text-[var(--text-inverse)]/95 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Identity row */}
                <div className="mt-7 pt-6 border-t border-[var(--border-on-dark)] flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[17px] font-semibold ${t.avatarBg} ${t.avatarText}`}
                    aria-hidden
                  >
                    {t.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold text-[var(--text-inverse)]">
                      {t.name}
                    </div>
                    <div className="mt-0.5 text-[13px] text-[var(--text-inverse)]/65">
                      {t.role} · {t.location}
                    </div>
                  </div>
                  {t.siteUrl && (
                    <a
                      href={t.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 rounded-full border border-[var(--accent-bright)]/40 bg-[var(--accent-bright)]/10 px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider text-[var(--accent-bright)] hover:bg-[var(--accent-bright)]/20 hover:border-[var(--accent-bright)]/70 transition-colors"
                    >
                      {t.siteLabel || "VIEW SITE"} ↗
                    </a>
                  )}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
